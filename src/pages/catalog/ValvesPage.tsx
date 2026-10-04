import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { valvesTitle, valvesSections } from '@/content/valves'

export function ValvesPage() {
  return (
    <div>
      <Breadcrumb label={valvesTitle} />
      <div className="mx-auto max-w-site px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-heading">{valvesTitle}</h1>
        <ContentSections sections={valvesSections} />
      </div>
    </div>
  )
}
