import { useHead } from '@unhead/vue'
import { LANDINGS, ZONE, landingPath } from './landing/data'

export const SITE_URL = 'https://chiaradallatorre.it'
export const STUDIO_ID = `${SITE_URL}/#studio`
export const PAGES = ['/', '/chi-sono/', '/lezioni/', '/contatti/', ...LANDINGS.map(landingPath)]

const BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': STUDIO_ID,
  name: 'Chiara Dalla Torre - Pianoforte',
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og-image.jpg`,
  email: 'dallatorrechiara@yahoo.it',
  telephone: '+393483046739',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Treponti 34',
    addressLocality: 'Noventa di Piave',
    addressRegion: 'VE',
    addressCountry: 'IT',
  },
  areaServed: [...new Set(ZONE.flatMap((z) => z.areas))].map((name) => ({ '@type': 'Place', name })),
  founder: {
    '@type': 'Person',
    name: 'Chiara Dalla Torre',
    jobTitle: 'Insegnante di pianoforte',
    alumniOf: 'Conservatorio di Musica "A. Steffani" di Castelfranco Veneto',
  },
}

// Head completo di una pagina. `path` con lo slash finale, come nella sitemap.
export function usePageSeo({ path, title, description, keywords, schema }) {
  const url = SITE_URL + path
  const image = `${SITE_URL}/og-image.jpg`
  useHead({
    htmlAttrs: { lang: 'it' },
    title,
    link: [{ rel: 'canonical', href: url }],
    meta: [
      { name: 'description', content: description },
      ...(keywords ? [{ name: 'keywords', content: keywords }] : []),
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'it_IT' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    script: (schema ? [BUSINESS, schema] : path === '/' ? [BUSINESS] : []).map((data) => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(data),
    })),
  })
}
