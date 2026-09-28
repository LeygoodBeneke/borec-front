import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { agnksTitle, agnksSections } from '@/content/agnks'

export function AgnksPage() {
  return (
    <div>
      <Breadcrumb label={agnksTitle} />
      <div className="mx-auto max-w-7xl px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-brand-teal">{agnksTitle}</h1>
        <ContentSections sections={agnksSections} />
      </div>
    </div>
  )
}
