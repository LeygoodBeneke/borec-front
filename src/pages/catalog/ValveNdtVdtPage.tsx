import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { valveNdtVdtTitle, valveNdtVdtSections } from '@/content/valveNdtVdt'

export function ValveNdtVdtPage() {
  return (
    <div>
      <Breadcrumb label={valveNdtVdtTitle} />
      <div className="mx-auto max-w-6xl px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-brand-teal">{valveNdtVdtTitle}</h1>
        <ContentSections sections={valveNdtVdtSections} />
      </div>
    </div>
  )
}
