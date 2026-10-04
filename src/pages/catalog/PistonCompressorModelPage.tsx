import { useParams, Navigate } from 'react-router-dom'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ProseSection } from '@/components/common/ProseSection'
import { pistonCompressorModels } from '@/content/pistonCompressorModels'

export function PistonCompressorModelPage() {
  const params = useParams()
  const slug = params['*'] ?? ''
  const model = pistonCompressorModels.find((m) => m.slug === slug)

  if (!model) {
    return <Navigate to="/kompressory/porshnevye-kompressory" replace />
  }

  return (
    <div>
      <Breadcrumb label={model.title} />
      <div className="mx-auto max-w-site px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-heading">{model.title}</h1>
        <ProseSection html={model.html} />
      </div>
    </div>
  )
}
