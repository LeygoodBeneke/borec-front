import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { compressorsTitle, compressorsSections } from '@/content/compressors'

export function CompressorsPage() {
  return (
    <div>
      <Breadcrumb label={compressorsTitle} />
      <div className="mx-auto max-w-6xl px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-brand-teal">{compressorsTitle}</h1>
        <ContentSections sections={compressorsSections} />
      </div>
    </div>
  )
}
