import { Link } from 'react-router-dom'
import type { NewsItem } from '@/types/content'

export function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <ul className="divide-y divide-slate-200">
      {items.map((item) => (
        <li key={item.slug} className="flex gap-4 py-5">
          <Link to={`/novosti/${item.slug}`} className="h-24 w-24 shrink-0">
            {item.image && (
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="h-24 w-24 rounded-md object-cover transition-opacity hover:opacity-80"
              />
            )}
          </Link>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal">{item.date}</p>
            <Link to={`/novosti/${item.slug}`}>
              <h3 className="mt-1 text-lg font-semibold text-heading hover:underline">{item.title}</h3>
            </Link>
            {item.teaser && <p className="mt-1 text-slate-700">{item.teaser}</p>}
            <Link to={`/novosti/${item.slug}`} className="text-sm text-brand-teal hover:underline">
              читать дальше...
            </Link>
          </div>
        </li>
      ))}
    </ul>
  )
}
