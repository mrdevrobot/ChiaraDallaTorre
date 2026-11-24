<template>
  <div class="landing">
    <section class="page-hero">
      <div class="container">
        <h1>{{ page.h1 }}</h1>
        <div class="section__divider" style="margin-top: 1rem;"></div>
        <p class="page-hero__sub">{{ page.lead }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container landing__body">
        <nav class="landing__crumbs" aria-label="Percorso">
          <router-link to="/">Home</router-link> /
          <router-link to="/lezioni/">Lezioni</router-link> /
          <span>{{ page.nav }}</span>
        </nav>

        <template v-for="s in page.sections" :key="s.h2">
          <h2>{{ s.h2 }}</h2>
          <p v-for="t in s.p" :key="t">{{ t }}</p>
          <ul v-if="s.list" class="landing__list">
            <li v-for="i in s.list" :key="i">{{ i }}</li>
          </ul>
        </template>

        <h2>Domande frequenti</h2>
        <template v-for="f in page.faq" :key="f.q">
          <h3>{{ f.q }}</h3>
          <p>{{ f.a }}</p>
        </template>

        <h2>Può interessarti</h2>
        <ul class="landing__list">
          <li v-for="l in related" :key="l.slug">
            <router-link :to="landingPath(l)">{{ l.title }}</router-link>
          </li>
          <li><router-link to="/lezioni/">Tutti i livelli e i percorsi</router-link></li>
        </ul>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container" style="text-align: center;">
        <h2>Una prima lezione senza impegno</h2>
        <div class="section__divider" style="background: var(--color-accent);"></div>
        <p>Via Treponti 34, Noventa di Piave (VE)</p>
        <router-link to="/contatti/" class="btn btn--light" style="margin-top: 1rem;">
          Contattami
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { LANDINGS, landingPath } from '@/landing/data'
import { SITE_URL, STUDIO_ID, usePageSeo } from '@/seo'

const props = defineProps({ slug: { type: String, required: true } })

// La rotta ha una key per slug (App.vue): il componente si ricrea a ogni pagina
const page = LANDINGS.find((l) => l.slug === props.slug)
const related = page.related.map((s) => LANDINGS.find((l) => l.slug === s))
const url = SITE_URL + landingPath(page)

usePageSeo({
  path: landingPath(page),
  title: `${page.title} | Chiara Dalla Torre`,
  description: page.description,
  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: page.title,
        serviceType: 'Lezioni di pianoforte',
        url,
        provider: { '@id': STUDIO_ID },
        ...(page.areas && { areaServed: page.areas.map((name) => ({ '@type': 'Place', name })) }),
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Lezioni', item: `${SITE_URL}/lezioni/` },
          { '@type': 'ListItem', position: 3, name: page.nav, item: url },
        ],
      },
    ],
  },
})
</script>

<style scoped>
.page-hero {
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, var(--color-bg-dark) 0%, #3d2317 100%);
  text-align: center;
}

.page-hero h1 {
  color: var(--color-text-on-dark);
  font-weight: 300;
  letter-spacing: 1px;
}

.page-hero__sub {
  max-width: 700px;
  margin: 1rem auto 0;
  color: rgba(240, 236, 228, 0.8);
  font-size: 1.1rem;
}

.landing__body {
  max-width: 800px;
}

.landing__crumbs {
  font-size: 0.85rem;
  color: var(--color-text-light);
}

.landing__body h2 {
  font-size: 1.9rem;
  margin: 2.5rem 0 1rem;
}

.landing__body h3 {
  font-size: 1.25rem;
  margin: 1.25rem 0 0.4rem;
}

.landing__list li {
  padding: 0.35rem 0 0.35rem 1.5rem;
  position: relative;
}

.landing__list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: 600;
}
</style>
