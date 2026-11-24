import { createRouter } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ChiSonoPage from '../pages/ChiSonoPage.vue'
import LezioniPage from '../pages/LezioniPage.vue'
import ContattiPage from '../pages/ContattiPage.vue'
import LandingPage from '../pages/LandingPage.vue'
import { LANDINGS, landingPath } from '../landing/data'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/chi-sono/',
    name: 'ChiSono',
    component: ChiSonoPage,
  },
  {
    path: '/lezioni/',
    name: 'Lezioni',
    component: LezioniPage,
  },
  {
    // Pagina eliminata: il contenuto rimasto è in Chi Sono
    path: '/musica',
    redirect: '/chi-sono/#voci-dal-silenzio',
  },
  {
    path: '/contatti/',
    name: 'Contatti',
    component: ContattiPage,
  },
  ...LANDINGS.map((l) => ({
    path: landingPath(l),
    name: l.slug,
    component: LandingPage,
    props: { slug: l.slug },
  })),
]

export const makeRouter = (history) => createRouter({
  history,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})
