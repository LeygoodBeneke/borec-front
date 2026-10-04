import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { krasnodarFactoryHistoryTitle, krasnodarFactoryHistorySections } from '@/content/krasnodarFactoryHistory'

export function KrasnodarFactoryHistoryPage() {
  return (
    <div>
      <Breadcrumb label={krasnodarFactoryHistoryTitle} />
      <div className="mx-auto max-w-site px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-heading">{krasnodarFactoryHistoryTitle}</h1>
        <ContentSections sections={krasnodarFactoryHistorySections} />
      </div>
    </div>
  )
}
