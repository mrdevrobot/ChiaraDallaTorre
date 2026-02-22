<template>
  <div class="lezioni">
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>Lezioni di Pianoforte</h1>
        <div class="section__divider" style="margin-top: 1rem;"></div>
        <p class="page-hero__sub">
          Percorsi personalizzati per ogni livello, dalla prima nota al palcoscenico
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
        <h2 class="section__title">Tre Livelli, Un Solo Obiettivo</h2>
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
                <li>Approfondimento dell'uso del pedale</li>
                <li>Studio dell'interpretazione e dello stile</li>
                <li>Introduzione alla musica da camera</li>
              </ul>
              <p class="level__who">
                <strong>Ideale per:</strong> allievi con 2-4 anni di studio
                che vogliono fare un salto di qualità.
              </p>
            </div>
          </div>

          <!-- Avanzato -->
          <div class="level">
            <div class="level__header level__header--adv">
              <span class="level__badge">Livello Avanzato</span>
              <h3>Verso la Maestria</h3>
            </div>
            <div class="level__body">
              <p class="level__desc">
                Per pianisti che desiderano un perfezionamento tecnico e interpretativo,
                con possibilità di preparazione a esami, concorsi e concerti.
              </p>
              <h4>Cosa imparerai:</h4>
              <ul class="level__list">
                <li>Repertorio solistico avanzato (Bach, Beethoven, Chopin, Liszt...)</li>
                <li>Tecnica avanzata e virtuosismo</li>
                <li>Preparazione a esami di Conservatorio</li>
                <li>Preparazione a concorsi pianistici</li>
                <li>Costruzione di programmi da concerto</li>
                <li>Repertorio femminile e contemporaneo</li>
              </ul>
              <p class="level__who">
                <strong>Ideale per:</strong> pianisti con solida preparazione
                che puntano all'eccellenza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pacchetti -->
    <section class="section packages">
      <div class="container">
        <h2 class="section__title">Pacchetti Lezioni</h2>
        <div class="section__divider"></div>
        <p class="section__subtitle">
          Soluzioni flessibili pensate per ogni esigenza e ritmo di apprendimento
        </p>

        <div class="grid grid--3">
          <div class="card package">
            <div class="package__header">
              <h3>Scoperta</h3>
              <p class="package__sessions">4 lezioni</p>
            </div>
            <div class="package__body">
              <ul>
                <li>4 lezioni individuali da 45 minuti</li>
                <li>Valutazione iniziale del livello</li>
                <li>Piano di studio personalizzato</li>
                <li>Materiale didattico incluso</li>
              </ul>
              <p class="package__note">
                Perfetto per chi vuole provare e capire se il pianoforte fa per sé.
              </p>
            </div>
            <router-link to="/contatti" class="btn btn--outline package__btn">
              Richiedi Info
            </router-link>
          </div>

          <div class="card package package--featured">
            <div class="package__badge">Più scelto</div>
            <div class="package__header">
              <h3>Percorso</h3>
              <p class="package__sessions">12 lezioni</p>
            </div>
            <div class="package__body">
              <ul>
                <li>12 lezioni individuali da 60 minuti</li>
                <li>Percorso trimestrale strutturato</li>
                <li>Verifiche periodiche del progresso</li>
                <li>Materiale didattico incluso</li>
                <li>Supporto tra una lezione e l'altra</li>
              </ul>
              <p class="package__note">
                Il formato ideale per un apprendimento costante e progressivo.
              </p>
            </div>
            <router-link to="/contatti" class="btn btn--primary package__btn">
              Richiedi Info
            </router-link>
          </div>

          <div class="card package">
            <div class="package__header">
              <h3>Intensivo</h3>
              <p class="package__sessions">24 lezioni</p>
            </div>
            <div class="package__body">
              <ul>
                <li>24 lezioni individuali da 60 minuti</li>
                <li>Percorso semestrale completo</li>
                <li>Preparazione esami/concorsi</li>
                <li>Materiale didattico incluso</li>
                <li>Supporto continuo e feedback</li>
                <li>Possibilità di lezione extra mensile</li>
              </ul>
              <p class="package__note">
                Per chi è determinato a raggiungere obiettivi ambiziosi.
              </p>
            </div>
            <router-link to="/contatti" class="btn btn--outline package__btn">
              Richiedi Info
            </router-link>
          </div>
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
              <strong>San Donà di Piave (VE)</strong>, in un ambiente accogliente
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
                  <strong>San Donà di Piave (VE)</strong>
                  <span>Veneto, Italia</span>
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
                  <span>Pomeriggio e sera, anche il sabato</span>
                </div>
              </div>
            </div>
          </div>
          <img
            src="@/assets/images/chiara_con_alunna.JPG"
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
        <router-link to="/contatti" class="btn btn--light" style="margin-top: 1.5rem;">
          Prenota una Lezione di Prova
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import SiteIcon from '@/components/SiteIcon.vue'

useHead({
  title: 'Lezioni di Pianoforte | Chiara Dalla Torre',
  meta: [
    {
      name: 'description',
      content:
        'Lezioni di pianoforte individuali a San Donà di Piave per tutti i livelli: base, intermedio e avanzato. Pacchetti personalizzati e prima lezione di prova gratuita.',
    },
    {
      name: 'keywords',
      content:
        'lezioni pianoforte San Donà di Piave, corsi pianoforte principianti, lezioni pianoforte avanzato, pacchetti lezioni pianoforte, insegnante privato pianoforte Veneto',
    },
  ],
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
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.level {
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
  padding: 2rem 2.5rem;
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
  padding: 2rem 2.5rem;
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
  grid-template-columns: 1fr 1fr;
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
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
}

@media (max-width: 768px) {
  .level__list {
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
  transform: scale(1.03);
}

.package__badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-accent);
  color: var(--color-white);
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
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

.package__note {
  font-size: 0.85rem;
  color: var(--color-text-light);
  font-style: italic;
  margin-top: 1rem;
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

  .package--featured {
    transform: none;
  }
}
</style>
