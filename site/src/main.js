import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import { createHead } from '@unhead/vue/client'
import App from './App.vue'
import { makeApp } from './app'
import { makeRouter } from './router'

const root = document.getElementById('app')
const head = createHead()

// In produzione la pagina è già prerenderizzata (hydration); in dev #app è vuoto
if (root.firstElementChild) {
  const { app, router } = makeApp(createWebHistory(), head)
  router.isReady().then(() => app.mount(root))
} else {
  createApp(App).use(head).use(makeRouter(createWebHistory())).mount(root)
}
