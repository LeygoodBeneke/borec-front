import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { compressorBaseTitle, compressorBaseSections } from '@/content/compressorBase'

export function CompressorBasePage() {
  return (
    <div>
      <Breadcrumb label={compressorBaseTitle} />
      <div className="mx-auto max-w-site px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-heading">{compressorBaseTitle}</h1>
        <ContentSections sections={compressorBaseSections} />
      </div>
    </div>
  )
}
