import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/chi-sono',
    name: 'ChiSono',
    component: () => import('../pages/ChiSonoPage.vue'),
  },
  {
    path: '/lezioni',
    name: 'Lezioni',
    component: () => import('../pages/LezioniPage.vue'),
  },
  {
    // Pagina eliminata: il contenuto rimasto è in Chi Sono
    path: '/musica',
    redirect: '/chi-sono#voci-dal-silenzio',
  },
  {
    path: '/contatti',
    name: 'Contatti',
    component: () => import('../pages/ContattiPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
