import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { valvePikTitle, valvePikSections } from '@/content/valvePik'

export function ValvePikPage() {
  return (
    <div>
      <Breadcrumb label={valvePikTitle} />
      <div className="mx-auto max-w-site px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-brand-teal">{valvePikTitle}</h1>
        <ContentSections sections={valvePikSections} />
      </div>
    </div>
  )
}
