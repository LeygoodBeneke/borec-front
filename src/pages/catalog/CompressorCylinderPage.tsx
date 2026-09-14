import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { compressorCylinderTitle, compressorCylinderSections } from '@/content/compressorCylinder'

export function CompressorCylinderPage() {
  return (
    <div>
      <Breadcrumb label={compressorCylinderTitle} />
      <div className="mx-auto max-w-6xl px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-brand-teal">{compressorCylinderTitle}</h1>
        <div className="mb-6 aspect-video max-w-xl overflow-hidden rounded-md">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/WNqEKWaKQGo"
            title="Цилиндр компрессора Борец"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <ContentSections sections={compressorCylinderSections} />
      </div>
    </div>
  )
}
