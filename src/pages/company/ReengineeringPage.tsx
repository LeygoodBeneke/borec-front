import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { reengineeringTitle, reengineeringSections } from '@/content/reengineering'

export function ReengineeringPage() {
  return (
    <div>
      <Breadcrumb label={reengineeringTitle} />
      <div className="mx-auto max-w-site px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-heading">{reengineeringTitle}</h1>
        <ContentSections sections={reengineeringSections} />
      </div>
    </div>
  )
}
