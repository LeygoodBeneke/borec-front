import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { compressorStationsTitle, compressorStationsSections } from '@/content/compressorStations'

export function CompressorStationsPage() {
  return (
    <div>
      <Breadcrumb label={compressorStationsTitle} />
      <div className="mx-auto max-w-6xl px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-brand-teal">{compressorStationsTitle}</h1>
        <ContentSections sections={compressorStationsSections} />
      </div>
    </div>
  )
}
