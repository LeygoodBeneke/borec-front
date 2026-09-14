import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { nitrogenStationsTitle, nitrogenStationsSections } from '@/content/nitrogenStations'

export function NitrogenStationsPage() {
  return (
    <div>
      <Breadcrumb label={nitrogenStationsTitle} />
      <div className="mx-auto max-w-6xl px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-brand-teal">{nitrogenStationsTitle}</h1>
        <ContentSections sections={nitrogenStationsSections} />
      </div>
    </div>
  )
}
