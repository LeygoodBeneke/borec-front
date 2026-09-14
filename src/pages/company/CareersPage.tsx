import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { careersTitle, careersSections } from '@/content/careers'

export function CareersPage() {
  return (
    <div>
      <Breadcrumb label={careersTitle} />
      <div className="mx-auto max-w-6xl px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-brand-teal">{careersTitle}</h1>
        <ContentSections sections={careersSections} />
      </div>
    </div>
  )
}
