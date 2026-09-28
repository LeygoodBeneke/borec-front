import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { compressor2vm4Title, compressor2vm4Sections } from '@/content/compressor2vm4'

export function Compressor2vm4Page() {
  return (
    <div>
      <Breadcrumb label={compressor2vm4Title} />
      <div className="mx-auto max-w-7xl px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-brand-teal">{compressor2vm4Title}</h1>
        <ContentSections sections={compressor2vm4Sections} />
      </div>
    </div>
  )
}
