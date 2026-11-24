import { createSSRApp } from 'vue'
import App from './App.vue'
import { makeRouter } from './router'
import './assets/main.css'

// Usata sia dal browser (main.js) sia dal prerender (entry-server.js)
export function makeApp(history, head) {
  const app = createSSRApp(App)
  const router = makeRouter(history)
  app.use(head)
  app.use(router)
  return { app, router }
}
