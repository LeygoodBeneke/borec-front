import DOMPurify from 'dompurify'
import { useMemo } from 'react'

// BASE_URL совпадает с base из vite.config.ts; на GitHub Pages это "/borec-front/"
const basename = import.meta.env.BASE_URL.replace(/\/+$/, '')

// Контентный HTML содержит абсолютные внутренние ссылки (<a href="/...">),
// которые идут мимо react-router и не получают basename — на GitHub Pages
// они уводили бы на корень user-site. Префиксуем их на этапе санитизации.
DOMPurify.addHook('afterSanitizeAttributes', (node) => {
  const anchor = node as Element
  if (anchor.nodeName !== 'A') return
  const href = anchor.getAttribute('href')
  if (href && href.startsWith('/') && !href.startsWith('//')) {
    anchor.setAttribute('href', `${basename}${href}`)
  }
})

/**
 * Escape hatch for the free-form legacy marketing copy that isn't worth
 * hand-modeling into structured components. Always sanitized before render.
 */
export function ProseSection({ html }: { html: string }) {
  const clean = useMemo(() => DOMPurify.sanitize(html), [html])

  return (
    <div
      className="prose prose-slate mb-6 max-w-none prose-headings:text-heading prose-p:my-3 prose-a:text-brand-teal"
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  )
}
