// Dopo la build: scrive un HTML completo per ogni pagina e la sitemap.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = join(root, 'dist')
const { render, PAGES, SITE_URL } = await import(join(root, '.ssr/entry-server.js'))
const template = readFileSync(join(dist, 'index.html'), 'utf8')

for (const path of PAGES) {
  const { html, headTags } = await render(path)
  // Funzioni come sostituti: il testo può contenere "$"
  const page = template
    .replace(/\s*<title>.*?<\/title>/, '')
    .replace('<!--head-tags-->', () => headTags)
    .replace('<div id="app"></div>', () => `<div id="app">${html}</div>`)
  if (!page.includes('<h1') || !page.includes('rel="canonical"')) throw new Error(`Prerender incompleto: ${path}`)
  mkdirSync(join(dist, path), { recursive: true })
  writeFileSync(join(dist, path, 'index.html'), page)
}

const urls = PAGES.map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join('\n')
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
rmSync(join(root, '.ssr'), { recursive: true })
console.log(`Prerender: ${PAGES.length} pagine`)
