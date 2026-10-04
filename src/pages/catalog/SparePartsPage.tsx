import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { sparePartsTitle, sparePartsSections } from '@/content/spareParts'

export function SparePartsPage() {
  return (
    <div>
      <Breadcrumb label={sparePartsTitle} />
      <div className="mx-auto max-w-site px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-brand-teal">{sparePartsTitle}</h1>
        <ContentSections sections={sparePartsSections} />
      </div>
    </div>
  )
}
