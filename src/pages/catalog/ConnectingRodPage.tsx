import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { connectingRodTitle, connectingRodSections } from '@/content/connectingRod'

export function ConnectingRodPage() {
  return (
    <div>
      <Breadcrumb label={connectingRodTitle} />
      <div className="mx-auto max-w-site px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-brand-teal">{connectingRodTitle}</h1>
        <ContentSections sections={connectingRodSections} />
      </div>
    </div>
  )
}
