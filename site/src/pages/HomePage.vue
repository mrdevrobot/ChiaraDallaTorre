<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__overlay"></div>
      <div class="container hero__content">
        <span class="hero__greeting">Benvenuti</span>
        <h1 class="hero__title">Chiara Dalla Torre</h1>
        <div class="hero__divider"></div>
        <p class="hero__subtitle">Maestro di Pianoforte</p>
        <p class="hero__desc">
          Un percorso musicale pensato per ogni allievo, dove tecnica,
          espressione e passione si fondono in un'esperienza unica.
        </p>
        <div class="hero__actions">
          <router-link to="/lezioni" class="btn btn--primary">Scopri le Lezioni</router-link>
          <router-link to="/chi-sono" class="btn btn--outline">Il Mio Percorso</router-link>
        </div>
      </div>
    </section>

    <!-- Introduzione -->
    <section class="section intro">
      <div class="container">
        <div class="intro__grid">
          <div class="intro__image">
            <div class="intro__image-frame">
              <img
                src="@/assets/images/chiara_primopiano.JPG"
                alt="Chiara Dalla Torre - Maestro di Pianoforte"
                class="intro__image-photo"
                loading="lazy"
              />
            </div>
          </div>
          <div class="intro__text">
            <h2>La Musica come Linguaggio dell'Anima</h2>
            <div class="section__divider" style="margin-left: 0;"></div>
            <p>
              Nata a San Donà di Piave nel 1993, ho iniziato lo studio del pianoforte
              all'età di 9 anni, e da allora la musica è diventata il filo conduttore
              della mia vita.
            </p>
            <p>
              Diplomata brillantemente al Conservatorio di Musica "A. Steffani" di
              Castelfranco Veneto, ho avuto il privilegio di seguire Masterclass con
              pianisti di fama internazionale come Pietro de Maria, Filippo Gamba
              e Andrea Lucchesini.
            </p>
            <p>
              Oggi porto tutta questa esperienza nel mio insegnamento, con l'obiettivo
              di trasmettere non solo la tecnica, ma anche la gioia e la profondità
              che la musica sa offrire.
            </p>
            <router-link to="/chi-sono" class="btn btn--outline" style="margin-top: 1rem;">
              Scopri di più su di me
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Tre Pilastri -->
    <section class="section section--alt pillars">
      <div class="container">
        <h2 class="section__title">Il Mio Approccio</h2>
        <div class="section__divider"></div>
        <p class="section__subtitle">
          Tre dimensioni che si intrecciano nel mio percorso e definiscono
          il mio modo di insegnare.
        </p>
        <div class="grid grid--3">
          <div class="card pillar">
            <div class="pillar__icon"><SiteIcon name="music" :size="32" color="var(--color-secondary)" /></div>
            <h3>Musica</h3>
            <p>
              Anni di formazione al Conservatorio, esperienze concertistiche
              internazionali e una produzione discografica. La musica classica
              come fondamento, l'apertura verso repertori meno conosciuti come
              arricchimento.
            </p>
            <router-link to="/musica" class="pillar__link">Esplora →</router-link>
          </div>
          <div class="card pillar">
            <div class="pillar__icon"><SiteIcon name="shield" :size="32" color="var(--color-secondary)" /></div>
            <h3>Disciplina</h3>
            <p>
              La pratica delle arti marziali mi ha insegnato la perseveranza,
              il controllo del corpo e della mente, e la pazienza nel percorso
              di crescita — qualità che porto ogni giorno nell'insegnamento.
            </p>
            <router-link to="/chi-sono#arti-marziali" class="pillar__link">Scopri →</router-link>
          </div>
          <div class="card pillar">
            <div class="pillar__icon"><SiteIcon name="book" :size="32" color="var(--color-secondary)" /></div>
            <h3>Didattica</h3>
            <p>
              Un approccio metodologico affinato negli anni, dal tirocinio attivo
              alla formazione continua. Lezioni personalizzate per ogni livello,
              con attenzione alle esigenze di ciascun allievo.
            </p>
            <router-link to="/lezioni" class="pillar__link">Scopri →</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Livelli -->
    <section class="section levels">
      <div class="container">
        <h2 class="section__title">Lezioni per Ogni Livello</h2>
        <div class="section__divider"></div>
        <p class="section__subtitle">
          Che tu stia muovendo i primi passi sulla tastiera o desideri perfezionare
          la tua tecnica, c'è un percorso pensato per te.
        </p>
        <div class="grid grid--3">
          <div class="card level-card">
            <span class="level-card__badge level-card__badge--base">Base</span>
            <h3>Principianti</h3>
            <p>
              Per chi si avvicina al pianoforte per la prima volta.
              Fondamenti di tecnica, lettura musicale e prime esecuzioni.
            </p>
          </div>
          <div class="card level-card level-card--featured">
            <span class="level-card__badge level-card__badge--inter">Intermedio</span>
            <h3>Progrediti</h3>
            <p>
              Approfondimento tecnico, sviluppo dell'interpretazione
              e avvicinamento a repertori più complessi.
            </p>
          </div>
          <div class="card level-card">
            <span class="level-card__badge level-card__badge--adv">Avanzato</span>
            <h3>Perfezionamento</h3>
            <p>
              Preparazione a esami, concorsi e concerti.
              Lavoro interpretativo avanzato e repertorio solistico.
            </p>
          </div>
        </div>
        <div style="text-align: center; margin-top: 2.5rem;">
          <router-link to="/lezioni" class="btn btn--primary">
            Scopri i Pacchetti Lezioni
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA finale -->
    <section class="section section--dark cta-section">
      <div class="container" style="text-align: center;">
        <h2>Inizia il Tuo Percorso Musicale</h2>
        <div class="section__divider" style="background: var(--color-accent);"></div>
        <p class="cta-section__text">
          Ogni grande viaggio inizia con una singola nota.<br />
          Scrivimi per una lezione di prova o per ricevere tutte le informazioni
          di cui hai bisogno.
        </p>
        <router-link to="/contatti" class="btn btn--light" style="margin-top: 1rem;">
          Contattami per Informazioni
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import SiteIcon from '@/components/SiteIcon.vue'

useHead({
  title: 'Chiara Dalla Torre | Maestro di Pianoforte',
  meta: [
    {
      name: 'description',
      content:
        'Chiara Dalla Torre - Maestro di Pianoforte diplomata al Conservatorio A. Steffani. Lezioni di pianoforte per principianti, intermedi e avanzati a San Donà di Piave.',
    },
    {
      name: 'keywords',
      content:
        'lezioni pianoforte, insegnante pianoforte, pianoforte San Donà di Piave, Chiara Dalla Torre, corsi pianoforte Veneto',
    },
    { property: 'og:title', content: 'Chiara Dalla Torre | Maestro di Pianoforte' },
    {
      property: 'og:description',
      content:
        'Lezioni di pianoforte per tutti i livelli a San Donà di Piave. Diplomata al Conservatorio A. Steffani di Castelfranco Veneto.',
    },
  ],
})
</script>

<style scoped>
/* Hero */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background:
    linear-gradient(135deg, rgba(44, 24, 16, 0.88) 0%, rgba(61, 35, 23, 0.85) 50%, rgba(26, 14, 8, 0.92) 100%),
    url('@/assets/images/mani_pianoforte_1_bn.JPG') center/cover no-repeat;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -30%;
  width: 80%;
  height: 200%;
  background: radial-gradient(ellipse, rgba(196, 151, 59, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.hero__content {
  text-align: center;
  color: var(--color-text-on-dark);
  position: relative;
  z-index: 2;
  padding: 2rem;
}

.hero__greeting {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-style: italic;
  color: var(--color-accent);
  letter-spacing: 3px;
  display: block;
  margin-bottom: 1rem;
}

.hero__title {
  font-size: clamp(2.8rem, 7vw, 5rem);
  color: var(--color-text-on-dark);
  font-weight: 300;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

.hero__divider {
  width: 80px;
  height: 1px;
  background: var(--color-accent);
  margin: 1.5rem auto;
}

.hero__subtitle {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 1.5rem;
}

.hero__desc {
  max-width: 550px;
  margin: 0 auto 2.5rem;
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(240, 236, 228, 0.8);
  font-weight: 300;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero__actions .btn--outline {
  color: var(--color-text-on-dark);
  border-color: rgba(196, 151, 59, 0.5);
}

.hero__actions .btn--outline:hover {
  background: var(--color-accent);
  color: var(--color-bg-dark);
  border-color: var(--color-accent);
}

/* Intro */
.intro__grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 4rem;
  align-items: center;
}

.intro__image-frame {
  position: relative;
}

.intro__image-frame::before {
  content: '';
  position: absolute;
  top: -12px;
  left: -12px;
  width: 100%;
  height: 100%;
  border: 2px solid var(--color-accent);
  border-radius: var(--radius);
}

.intro__image-photo {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-radius: var(--radius);
  position: relative;
  z-index: 1;
}

.intro__text h2 {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .intro__grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .intro__image {
    max-width: 300px;
    margin: 0 auto;
  }
}

/* Pillar Cards */
.pillar {
  text-align: center;
  padding: 2.5rem 2rem;
}

.pillar__icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.pillar h3 {
  margin-bottom: 1rem;
}

.pillar__link {
  display: inline-block;
  margin-top: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-secondary);
}

/* Level Cards */
.level-card {
  text-align: center;
  padding: 2.5rem 2rem;
  position: relative;
}

.level-card--featured {
  border: 2px solid var(--color-accent);
}

.level-card__badge {
  display: inline-block;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.level-card__badge--base {
  background: #e8f5e9;
  color: #2e7d32;
}

.level-card__badge--inter {
  background: #fff3e0;
  color: #e65100;
}

.level-card__badge--adv {
  background: #e3f2fd;
  color: #1565c0;
}

.level-card h3 {
  margin-bottom: 1rem;
}

/* CTA Section */
.cta-section__text {
  max-width: 550px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(240, 236, 228, 0.85);
}
</style>
