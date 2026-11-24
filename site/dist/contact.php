<?php
// Modulo contatti. Mittente = noreply del dominio (Postfix lo riscrive verso il relay Azure),
// Reply-To = visitatore. Antispam: honeypot, Cloudflare Turnstile e limite per IP.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

const DESTINATARIO = 'dallatorrechiara@yahoo.it';
const MITTENTE = 'noreply@chiaradallatorre.it';

function fine(int $code, array $body): void {
    http_response_code($code);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') fine(405, ['ok' => false]);

$in = json_decode(file_get_contents('php://input'), true);
if (!is_array($in)) fine(400, ['ok' => false]);

// Honeypot: finge successo per non dare segnali ai bot
if (!empty($in['website'])) fine(200, ['ok' => true]);

$clean = fn($v, $max) => mb_substr(trim(preg_replace('/[\r\n\t]+/', ' ', is_string($v) ? $v : '')), 0, $max);
$nome = $clean($in['name'] ?? '', 120);
$email = $clean($in['email'] ?? '', 200);
$telefono = $clean($in['phone'] ?? '', 40);
$livello = $clean($in['level'] ?? '', 40);
$interesse = $clean($in['interest'] ?? '', 40);
$testo = is_string($in['message'] ?? null) ? $in['message'] : '';
$messaggio = mb_substr(trim(str_replace("\r", '', $testo)), 0, 5000);

if ($nome === '' || $messaggio === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($in['privacy'])) {
    fine(422, ['ok' => false]);
}

// Turnstile: il segreto sta nella cartella del dominio, sopra la document root.
// Segreto assente o Cloudflare irraggiungibile: si prosegue, per non perdere contatti veri.
$segreto = '';
for ($dir = dirname($_SERVER['DOCUMENT_ROOT'] ?? ''), $i = 0; $i < 4 && strlen($dir) > 1; $dir = dirname($dir), $i++) {
    if (@is_readable("$dir/turnstile.secret")) {
        $segreto = trim((string)file_get_contents("$dir/turnstile.secret"));
        break;
    }
}
if ($segreto === '') {
    error_log('contact.php: turnstile.secret mancante, verifica saltata');
} else {
    $token = is_string($in['turnstile'] ?? null) ? $in['turnstile'] : '';
    if ($token === '' || strlen($token) > 2048) fine(403, ['ok' => false]);
    $ctx = stream_context_create(['http' => [
        'method' => 'POST', 'timeout' => 5, 'ignore_errors' => true,
        'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
        'content' => http_build_query(['secret' => $segreto, 'response' => $token, 'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '']),
    ]]);
    $raw = @file_get_contents('https://challenges.cloudflare.com/turnstile/v0/siteverify', false, $ctx);
    $esito = $raw !== false ? json_decode($raw, true) : null;
    if (!is_array($esito)) {
        error_log('contact.php: siteverify non raggiungibile, verifica saltata');
    } elseif (empty($esito['success']) || !in_array($esito['hostname'] ?? '', ['chiaradallatorre.it', 'www.chiaradallatorre.it'], true)) {
        fine(403, ['ok' => false]);
    }
}

// Max 5 invii/ora per IP
$f = sys_get_temp_dir() . '/contact_cdt_' . md5($_SERVER['REMOTE_ADDR'] ?? '');
$hits = array_filter(is_file($f) ? array_map('intval', file($f, FILE_IGNORE_NEW_LINES)) : [], fn($t) => $t > time() - 3600);
if (count($hits) >= 5) fine(429, ['ok' => false]);
$hits[] = time();
file_put_contents($f, implode("\n", $hits));

$corpo = "Nuova richiesta dal modulo contatti di chiaradallatorre.it\n\n"
    . "Nome: $nome\nEmail: $email\nTelefono: $telefono\nLivello: $livello\nInteresse: $interesse\n\n"
    . "Messaggio:\n$messaggio\n\nConsenso privacy: sì\n";

$headers = [
    'From' => 'Sito Chiara Dalla Torre <' . MITTENTE . '>',
    'Reply-To' => $email,
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=UTF-8',
];
$subject = '=?UTF-8?B?' . base64_encode("Richiesta dal sito: $nome") . '?=';
$ok = mail(DESTINATARIO, $subject, $corpo, $headers, '-f' . MITTENTE);
fine($ok ? 200 : 500, ['ok' => $ok]);
