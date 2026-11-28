<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__overlay"></div>
      <div class="container hero__content">
        <span class="hero__greeting">Benvenuti e Benvenute</span>
        <h1 class="hero__title">Chiara Dalla Torre</h1>
        <div class="hero__divider"></div>
        <p class="hero__subtitle">Pianoforte</p>
        <p class="hero__desc">
          Un percorso musicale pensato per ogni persona, dove tecnica,
          espressione e passione si fondono in un'esperienza unica.
        </p>
        <div class="hero__actions">
          <router-link to="/lezioni/" class="btn btn--primary">Scopri le Lezioni</router-link>
          <router-link to="/chi-sono/" class="btn btn--outline">Il Mio Percorso</router-link>
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
                src="@/assets/images/chiara_primopiano.webp"
                alt="Chiara Dalla Torre al pianoforte"
                class="intro__image-photo"
                loading="lazy"
              />
            </div>
          </div>
          <div class="intro__text">
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
            <router-link to="/chi-sono/" class="btn btn--outline" style="margin-top: 1rem;">
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
            <div class="pillar__icon"><SiteIcon name="target" :size="32" color="var(--color-secondary)" /></div>
            <h3>Presenza</h3>
            <p>
              Una partecipazione attiva, basata su uno scambio continuo tra allievo/a
              e insegnante, che unisce la piena presenza nel qui e ora al desiderio
              costante di migliorarsi.
            </p>
          </div>
          <div class="card pillar">
            <div class="pillar__icon"><SiteIcon name="shield" :size="32" color="var(--color-secondary)" /></div>
            <h3>Disciplina</h3>
            <p>
              La pratica delle arti marziali mi ha insegnato la costanza, la perseveranza
              e il controllo di corpo e mente. Soprattutto, mi ha educato alla pazienza:
              accettare che ogni obiettivo richiede il suo tempo naturale.
            </p>
          </div>
          <div class="card pillar">
            <div class="pillar__icon"><SiteIcon name="music" :size="32" color="var(--color-secondary)" /></div>
            <h3>Passione</h3>
            <p>
              Un insegnamento empatico e coinvolgente, in cui la passione diventa il primo
              strumento per accendere la curiosità di chi suona. Apprendere significa, prima
              di tutto, imparare a sentire e a lasciarsi emozionare.
            </p>
          </div>
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
        <router-link to="/contatti/" class="btn btn--light" style="margin-top: 1rem;">
          Contattami per Informazioni
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { usePageSeo } from '@/seo'
import SiteIcon from '@/components/SiteIcon.vue'

usePageSeo({
  path: '/',
  title: 'Chiara Dalla Torre | Pianoforte',
  description:
    'Chiara Dalla Torre, pianista diplomata al Conservatorio A. Steffani. Lezioni di pianoforte per principianti, intermedi e avanzati a Noventa di Piave.',
  keywords:
    'lezioni pianoforte, insegnante pianoforte, pianoforte Noventa di Piave, pianoforte San Donà di Piave, Chiara Dalla Torre, corsi pianoforte Veneto',
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
    url('@/assets/images/mani_pianoforte_1_bn.webp') center/cover no-repeat;
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

/* CTA Section */
.cta-section__text {
  max-width: 550px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(240, 236, 228, 0.85);
}
</style>
