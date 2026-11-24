<template>
  <div class="lezioni">
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>Lezioni di Pianoforte</h1>
        <div class="section__divider" style="margin-top: 1rem;"></div>
        <p class="page-hero__sub">
          Percorsi personalizzati per ogni livello
        </p>
      </div>
    </section>

    <!-- Filosofia -->
    <section class="section philosophy">
      <div class="container" style="max-width: 800px;">
        <h2 class="section__title">La Mia Filosofia Didattica</h2>
        <div class="section__divider"></div>
        <p style="text-align: center; font-size: 1.1rem; line-height: 1.8;">
          Credo che ogni allievo porti con sé un percorso unico. Il mio compito è
          accompagnarlo con competenza e sensibilità, costruendo insieme un cammino che
          unisca <strong>rigore tecnico</strong>, <strong>espressione artistica</strong>
          e soprattutto <strong>il piacere di fare musica</strong>.
        </p>
        <p style="text-align: center; font-size: 1.05rem; line-height: 1.8; color: var(--color-text-light);">
          Ogni lezione è uno spazio protetto dove la curiosità è benvenuta,
          l'errore è parte del processo e la crescita è l'obiettivo condiviso.
        </p>
      </div>
    </section>

    <!-- Livelli -->
    <section class="section section--alt">
      <div class="container">
        <h2 class="section__title">Tre Livelli: Pianoforte Principale</h2>
        <div class="section__divider"></div>
        <p class="section__subtitle">
          Crescere musicalmente, indipendentemente dal punto di partenza
        </p>

        <div class="levels">
          <!-- Base -->
          <div class="level">
            <div class="level__header level__header--base">
              <span class="level__badge">Livello Base</span>
              <h3>Primi Passi al Pianoforte</h3>
            </div>
            <div class="level__body">
              <p class="level__desc">
                Per chi si avvicina alla musica per la prima volta o ha poca esperienza.
                Un percorso delicato e stimolante per costruire solide fondamenta.
              </p>
              <h4>Cosa imparerai:</h4>
              <ul class="level__list">
                <li>Postura corretta e impostazione della mano</li>
                <li>Lettura delle note e del ritmo</li>
                <li>Primi brani del repertorio classico e moderno</li>
                <li>Coordinazione tra le due mani</li>
                <li>Introduzione ai concetti di dinamica e fraseggio</li>
                <li>Ear training e sviluppo dell'orecchio musicale</li>
              </ul>
              <p class="level__who">
                <strong>Ideale per:</strong> bambini dai 6 anni, ragazzi e adulti
                che iniziano da zero.
              </p>
            </div>
          </div>

          <!-- Intermedio -->
          <div class="level">
            <div class="level__header level__header--inter">
              <span class="level__badge">Livello Intermedio</span>
              <h3>Costruire il Proprio Linguaggio</h3>
            </div>
            <div class="level__body">
              <p class="level__desc">
                Per chi ha già le basi e desidera approfondire la tecnica e
                l'interpretazione, avvicinandosi a repertori più impegnativi.
              </p>
              <h4>Cosa imparerai:</h4>
              <ul class="level__list">
                <li>Scala, arpeggi e studi tecnici progressivi</li>
                <li>Analisi armonica e formale dei brani</li>
                <li>Repertorio dal Barocco al Romanticismo</li>
                <li>Approfondimento dell'uso dei pedali</li>
                <li>Studio dell'interpretazione e dello stile</li>
                <li>Introduzione alla musica da camera</li>
              </ul>
              <p class="level__who">
                <strong>Ideale per:</strong> allievi con 2-4 anni di studio.
              </p>
            </div>
          </div>

          <!-- Avanzato -->
          <div class="level">
            <div class="level__header level__header--adv">
              <span class="level__badge">Livello Avanzato</span>
              <h3>Perfezionamento</h3>
            </div>
            <div class="level__body">
              <p class="level__desc">
                Per pianisti che desiderano un perfezionamento tecnico e interpretativo,
                con possibilità di preparazione a esami, concorsi e concerti.
              </p>
              <h4>Cosa imparerai:</h4>
              <ul class="level__list">
                <li>Repertorio solistico avanzato</li>
                <li>Tecnica avanzata e virtuosismo</li>
                <li>Preparazione a esami di Conservatorio</li>
                <li>Preparazione a concorsi pianistici</li>
                <li>Costruzione di programmi da concerto</li>
                <li>Repertorio femminile e contemporaneo</li>
              </ul>
              <p class="level__who">
                <strong>Ideale per:</strong> pianisti con solida preparazione.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Percorsi -->
    <section class="section packages">
      <div class="container">
        <h2 class="section__title">Percorsi</h2>
        <div class="section__divider"></div>
        <p class="section__subtitle">
          Soluzioni flessibili pensate per ogni esigenza e ritmo di apprendimento
        </p>

        <div class="grid grid--3">
          <div class="card package package--featured">
            <div class="package__header">
              <h3>Pianoforte Principale</h3>
              <p class="package__sessions">Lezioni da 60’ o più</p>
            </div>
            <div class="package__body">
              <ul>
                <li>Tre livelli: base, intermedio e avanzato</li>
                <li>Teoria base</li>
              </ul>
            </div>
            <router-link to="/contatti/" class="btn btn--primary package__btn">
              Richiedi Info
            </router-link>
          </div>

          <div class="card package">
            <div class="package__header">
              <h3>Pianoforte Complementare</h3>
              <p class="package__sessions">Lezioni da 45’ – 60’</p>
            </div>
            <div class="package__body">
              <ul>
                <li>Rivolto a chi studia un altro strumento con obbligo di pianoforte complementare</li>
                <li>Possibilità di certificazioni in conservatorio</li>
              </ul>
            </div>
            <router-link to="/contatti/" class="btn btn--outline package__btn">
              Richiedi Info
            </router-link>
          </div>

          <div class="card package">
            <div class="package__header">
              <h3>Teoria, Ritmica e Percezione Musicale</h3>
              <p class="package__sessions">Lezioni da 45’</p>
            </div>
            <div class="package__body">
              <ul>
                <li>Teoria musicale</li>
                <li>Lettura parlata e cantata</li>
                <li>Lettura ritmica</li>
                <li>Dettati ritmico-melodici</li>
                <li>Ear training</li>
                <li>Possibilità di certificazioni in conservatorio</li>
              </ul>
            </div>
            <router-link to="/contatti/" class="btn btn--outline package__btn">
              Richiedi Info
            </router-link>
          </div>
        </div>

        <div class="packages__text">
          <p>
            Le lezioni di <strong>Pianoforte Principale</strong> sono generalmente da 60’ e
            comprendono una parte teorica finalizzata alla comprensione dei brani studiati.
          </p>
          <p>
            Le lezioni di <strong>Pianoforte Complementare</strong> variano da 45’ a 60’,
            a discrezione dell'allievo/a.
          </p>
          <p>
            Le lezioni di <strong>Teoria, Ritmica e Percezione Musicale</strong> sono da 45’ e
            affrontano per intero tutta la parte teorica della musica. Sono dedicate a chi
            desidera preparare certificazioni per il conservatorio, ma anche a chi sceglie di
            avere una maggiore conoscenza della musica a livello teorico.
          </p>
        </div>

        <p style="text-align: center; margin-top: 2rem; color: var(--color-text-light); font-size: 0.9rem;">
          I prezzi vengono comunicati su richiesta. La prima lezione conoscitiva è senza impegno.
        </p>
      </div>
    </section>

    <!-- Luogo Lezioni -->
    <section class="section section--alt location">
      <div class="container">
        <div class="location__grid">
          <div class="location__info">
            <h2>Dove si Svolgono le Lezioni</h2>
            <div class="section__divider" style="margin-left: 0;"></div>
            <p>
              Le lezioni si svolgono presso il mio studio privato situato a
              <strong>Noventa di Piave (VE)</strong>, in via Treponti 34, in un ambiente accogliente
              e attrezzato con pianoforte acustico.
            </p>
            <p>
              Lo studio è facilmente raggiungibile e dispone di tutto il necessario
              per garantire un'esperienza di studio ottimale, in un'atmosfera tranquilla
              e concentrata.
            </p>
            <div class="location__details">
              <div class="location__detail">
                <span class="location__icon"><SiteIcon name="mapPin" :size="20" /></span>
                <div>
                  <strong>Noventa di Piave (VE)</strong>
                  <span>Via Treponti 34</span>
                </div>
              </div>
              <div class="location__detail">
                <span class="location__icon"><SiteIcon name="piano" :size="20" /></span>
                <div>
                  <strong>Pianoforte Acustico</strong>
                  <span>Studio attrezzato e insonorizzato</span>
                </div>
              </div>
              <div class="location__detail">
                <span class="location__icon"><SiteIcon name="clock" :size="20" /></span>
                <div>
                  <strong>Orari Flessibili</strong>
                  <span>Lun–Sab mattina, giovedì e sabato pomeriggio</span>
                </div>
              </div>
            </div>
          </div>
          <img
            src="@/assets/images/chiara_con_alunna.webp"
            alt="Chiara Dalla Torre durante una lezione di pianoforte"
            class="location__photo"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section--dark cta-section">
      <div class="container" style="text-align: center;">
        <h2>Pronto a Iniziare?</h2>
        <div class="section__divider" style="background: var(--color-accent);"></div>
        <p style="max-width: 500px; margin: 0 auto; color: rgba(240,236,228,0.85); font-size: 1.05rem;">
          La prima lezione conoscitiva è senza impegno. Contattami per fissare
          un appuntamento e scoprire il percorso più adatto a te.
        </p>
        <router-link to="/contatti/" class="btn btn--light" style="margin-top: 1.5rem;">
          Prenota una Lezione di Prova
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { usePageSeo } from '@/seo'
import SiteIcon from '@/components/SiteIcon.vue'

usePageSeo({
  path: '/lezioni/',
  title: 'Lezioni di Pianoforte | Chiara Dalla Torre',
  description:
    'Lezioni di pianoforte individuali a Noventa di Piave per tutti i livelli: base, intermedio e avanzato. Pianoforte principale, complementare e teoria musicale.',
  keywords:
    'lezioni pianoforte Noventa di Piave, lezioni pianoforte San Donà di Piave, corsi pianoforte principianti, lezioni pianoforte avanzato, pianoforte complementare, teoria musicale, insegnante privato pianoforte Veneto',
})
</script>

<style scoped>
/* Page Hero */
.page-hero {
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, var(--color-bg-dark) 0%, #3d2317 100%);
  text-align: center;
  color: var(--color-text-on-dark);
}

.page-hero h1 {
  color: var(--color-text-on-dark);
  font-weight: 300;
  letter-spacing: 2px;
}

.page-hero__sub {
  color: rgba(240, 236, 228, 0.7);
  font-size: 1.1rem;
  font-weight: 300;
  margin-top: 1rem;
}

/* Levels */
.levels {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.level {
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition);
}

.level:hover {
  box-shadow: var(--shadow-md);
}

.level__header {
  padding: 2rem;
  color: var(--color-white);
}

.level__header--base {
  background: linear-gradient(135deg, #2e7d32, #43a047);
}

.level__header--inter {
  background: linear-gradient(135deg, #e65100, #ef6c00);
}

.level__header--adv {
  background: linear-gradient(135deg, #1565c0, #1e88e5);
}

.level__badge {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.85;
}

.level__header h3 {
  color: var(--color-white);
  font-size: 1.6rem;
  margin-top: 0.5rem;
}

.level__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

.level__desc {
  font-size: 1.05rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-light);
}

.level__body h4 {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.level__list {
  display: grid;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
}

.level__list li {
  font-size: 0.92rem;
  padding-left: 1.5rem;
  position: relative;
  color: var(--color-text);
}

.level__list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: 600;
}

.level__who {
  font-size: 0.9rem;
  color: var(--color-text-light);
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
}

@media (max-width: 1000px) {
  .levels,
  .packages .grid--3 {
    grid-template-columns: 1fr;
  }
}

/* Packages */
.package {
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  padding: 2.5rem 2rem;
}

.package--featured {
  border: 2px solid var(--color-accent);
  box-shadow: var(--shadow-md);
}

.package__header {
  margin-bottom: 1.5rem;
}

.package__header h3 {
  font-size: 1.6rem;
  margin-bottom: 0.25rem;
}

.package__sessions {
  font-size: 1rem;
  color: var(--color-accent);
  font-weight: 500;
}

.package__body {
  flex: 1;
}

.package__body ul {
  text-align: left;
  margin-bottom: 1rem;
}

.package__body li {
  font-size: 0.9rem;
  padding: 0.4rem 0;
  padding-left: 1.5rem;
  position: relative;
  border-bottom: 1px solid var(--color-bg-alt);
}

.package__body li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: 600;
}

.packages__text {
  max-width: 800px;
  margin: 3rem auto 0;
  text-align: center;
}

.package__btn {
  margin-top: 1.5rem;
  align-self: center;
}

/* Location */
.location__grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: center;
}

.location__info h2 {
  margin-bottom: 0.5rem;
}

.location__details {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 2rem;
}

.location__detail {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.location__icon {
  font-size: 1.5rem;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-white);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  flex-shrink: 0;
}

.location__detail div {
  display: flex;
  flex-direction: column;
}

.location__detail strong {
  font-size: 0.95rem;
  color: var(--color-primary);
}

.location__detail span {
  font-size: 0.85rem;
  color: var(--color-text-light);
}

.location__photo {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: var(--radius);
  box-shadow: var(--shadow-md);
}

@media (max-width: 768px) {
  .location__grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
