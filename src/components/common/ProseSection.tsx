import DOMPurify from 'dompurify'
import { useMemo } from 'react'

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
