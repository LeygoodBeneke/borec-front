import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { repairTitle, repairSections } from '@/content/repair'

export function RepairPage() {
  return (
    <div>
      <Breadcrumb label={repairTitle} />
      <div className="mx-auto max-w-site px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-heading">{repairTitle}</h1>
        <ContentSections sections={repairSections} />
      </div>
    </div>
  )
}
