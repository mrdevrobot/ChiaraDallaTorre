import { createMemoryHistory } from 'vue-router'
import { renderToString } from 'vue/server-renderer'
import { createHead, renderSSRHead } from '@unhead/vue/server'
import { makeApp } from './app'

export { PAGES, SITE_URL } from './seo'

export async function render(url) {
  const head = createHead({ disableDefaults: true })
  const { app, router } = makeApp(createMemoryHistory(), head)
  await router.push(url)
  await router.isReady()
  const html = await renderToString(app)
  const { headTags } = await renderSSRHead(head)
  return { html, headTags }
}
