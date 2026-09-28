import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { crankshaftTitle, crankshaftSections } from '@/content/crankshaft'

export function CrankshaftPage() {
  return (
    <div>
      <Breadcrumb label={crankshaftTitle} />
      <div className="mx-auto max-w-7xl px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-brand-teal">{crankshaftTitle}</h1>
        <ContentSections sections={crankshaftSections} />
      </div>
    </div>
  )
}
