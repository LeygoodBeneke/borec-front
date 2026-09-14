import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { gasCompressorsTitle, gasCompressorsSections } from '@/content/gasCompressors'

export function GasCompressorsPage() {
  return (
    <div>
      <Breadcrumb label="Газовые компрессоры" />
      <div className="mx-auto max-w-6xl px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-brand-teal">{gasCompressorsTitle}</h1>
        <ContentSections sections={gasCompressorsSections} />
      </div>
    </div>
  )
}
