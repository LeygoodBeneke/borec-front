import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { compressorLinerTitle, compressorLinerSections } from '@/content/compressorLiner'

export function CompressorLinerPage() {
  return (
    <div>
      <Breadcrumb label={compressorLinerTitle} />
      <div className="mx-auto max-w-7xl px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-brand-teal">{compressorLinerTitle}</h1>
        <ContentSections sections={compressorLinerSections} />
      </div>
    </div>
  )
}
