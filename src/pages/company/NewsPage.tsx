import { Breadcrumb } from '@/components/common/Breadcrumb'
import { NewsList } from '@/components/common/NewsList'
import { newsTitle, newsItems } from '@/content/news'

export function NewsPage() {
  return (
    <div>
      <Breadcrumb label="Новости" />
      <div className="mx-auto max-w-site px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-heading">{newsTitle}</h1>
        <NewsList items={newsItems} />
      </div>
    </div>
  )
}
