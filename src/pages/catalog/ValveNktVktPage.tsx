import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { valveNktVktTitle, valveNktVktSections } from '@/content/valveNktVkt'

export function ValveNktVktPage() {
  return (
    <div>
      <Breadcrumb label={valveNktVktTitle} />
      <div className="mx-auto max-w-site px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-brand-teal">{valveNktVktTitle}</h1>
        <ContentSections sections={valveNktVktSections} />
      </div>
    </div>
  )
}
