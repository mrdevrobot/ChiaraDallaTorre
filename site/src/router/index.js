import { createRouter } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ChiSonoPage from '../pages/ChiSonoPage.vue'
import LezioniPage from '../pages/LezioniPage.vue'
import ContattiPage from '../pages/ContattiPage.vue'

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
