import { useParams, Navigate } from 'react-router-dom'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ProseSection } from '@/components/common/ProseSection'
import { newsItems } from '@/content/news'

export function NewsDetailPage() {
  const params = useParams()
  const slug = params['*'] ?? ''
  const item = newsItems.find((n) => n.slug === slug)

  if (!item) {
    return <Navigate to="/novosti" replace />
  }

  return (
    <div>
      <Breadcrumb label={item.title} />

      <div className="mx-auto max-w-3xl px-6 py-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal">{item.date}</p>
        <h1 className="mb-6 mt-1 text-2xl font-bold text-heading">{item.title}</h1>
        {item.image && (
          <img src={item.image} alt="" className="mb-6 max-w-xs rounded-md object-cover" />
        )}
        {item.body && <ProseSection html={item.body} />}
      </div>
    </div>
  )
}
