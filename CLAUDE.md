# Sito di Chiara Dalla Torre

Sito vetrina di Chiara Dalla Torre, pianista e insegnante di pianoforte. Dominio:
`www.chiaradallatorre.it` (senza `www` fa 301 verso `www`). È un sito a sé, fuori dal repo multi-cliente
`../WebSites`, ma segue lo stesso modo di lavorare: in caso di dubbio valgono
`../WebSites/CLAUDE.md` e le skill in `../WebSites/.claude/skills/`.

## Stack e comandi

Vue 3 + Vite + vue-router + `@unhead/vue`, pagine prerenderizzate, CSS a mano (non Nuxt, non
Tailwind: non migrare se non richiesto). Tutto sta in `site/`:

- `npm ci`, `npm run dev` (porta 5173), `npm run build`, `npm run preview`
- `src/pages/` una pagina per file; `src/components/` header, footer, icone SVG
- `src/assets/main.css`: colori e font come variabili CSS, da usare al posto degli HEX
- SEO: `src/seo.js` (`usePageSeo`, dati strutturati, elenco `PAGES`). La build passa da
  `scripts/prerender.mjs`, che scrive un HTML per pagina e `sitemap.xml`
- URL con lo slash finale; una pagina nuova va in `PAGES` e nel router
- pagine SEO di zona e di percorso: testi in `src/landing/data.js`, da cui nascono rotte,
  footer e sitemap. Ogni pagina ha contenuto proprio: niente copie con la sola città cambiata
- foto: usare le `.webp`; i `.JPG` in `src/assets/images` sono gli originali
- niente `window`/`document` fuori da `onMounted` o dagli eventi: romperebbe il prerender

`site/dist` è **committato**: dopo ogni modifica ai sorgenti rifare la build e tenere
`dist` nello stesso commit. Non modificarlo a mano.

## Dati reali

| Campo | Valore |
|---|---|
| Studio | Via Treponti 34, Noventa di Piave (VE) |
| Email | dallatorrechiara@yahoo.it |
| Cellulare / WhatsApp | 348 3046739 (`wa.me/393483046739`) |

Fonte: PDF "Modifiche sito", novembre 2026. San Donà di Piave è il luogo di nascita, non
lo studio: resta nella biografia e nelle parole chiave. Email e indirizzo compaiono in
footer e Contatti, l'indirizzo anche in Lezioni: aggiornarli insieme.

## Modifiche della cliente

1. Ogni giro di modifiche si registra in `MODIFICHE.md`: richieste, cosa è stato fatto,
   punti da chiarire con Chiara.
2. I testi di Chiara si riportano fedelmente; si correggono solo lingua e punteggiatura,
   e le correzioni si annotano. Non inventare esperienze, numeri, prezzi o recensioni.
3. Una modifica vale ovunque: controllare header, footer, meta, opzioni del modulo e
   testi collegati (`grep` in `src` e `index.html`).
4. Pagina eliminata: redirect in `src/router/index.js` e in `public/.htaccess`.

## Verifica

Build senza errori e pagine che rispondono in `npm run preview`. Non installare browser
headless: la revisione visiva la fa l'utente.

## Pubblicazione

Si pubblica direttamente su Plesk, su richiesta. Il dominio usa Plesk Git (pull, ramo
`main`); document root `httpdocs/site/dist`. Push con l'account GitHub `mrdevrobot`, poi
via SSH (accesso in `../WebSites/deploy/.env`):

1. backup: `tar czf /root/backup-chiaradallatorre.it-<data>.tgz -C <httpdocs> .`
2. `plesk ext git --async-deploy -domain chiaradallatorre.it -name ChiaraDallaTorre.git`
   (mai `--deploy`)
3. `--get-last-commit` e confronto degli md5 tra `site/dist` e server

## Modulo di contatto

`site/public/contact.php` (copiato in `dist`) scrive a dallatorrechiara@yahoo.it; lo chiama
`ContattiPage.vue`. Mittente `noreply@chiaradallatorre.it`, inoltrato da Postfix ad Azure
con la regola generica (nome visualizzato "Modulo contatti sito web"). Antispam: honeypot,
5 invii/ora per IP, Turnstile (segreto in `/var/www/vhosts/chiaradallatorre.it/turnstile.secret`,
mai nel repo). Le prove si fanno con un destinatario interno, non con Chiara.

## Git

Conventional Commits in inglese (`feat(lessons): …`, `fix(header): …`). Commit e push
solo su richiesta.
