import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { moscowFactoryHistoryTitle, moscowFactoryHistorySections } from '@/content/moscowFactoryHistory'

export function MoscowFactoryHistoryPage() {
  return (
    <div>
      <Breadcrumb label={moscowFactoryHistoryTitle} />
      <div className="mx-auto max-w-site px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-brand-teal">{moscowFactoryHistoryTitle}</h1>
        <ContentSections sections={moscowFactoryHistorySections} />
      </div>
    </div>
  )
}
