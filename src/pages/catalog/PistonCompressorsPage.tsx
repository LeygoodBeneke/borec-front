import { Link } from 'react-router-dom'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ContentSections } from '@/components/common/ContentSections'
import { pistonCompressorsTitle, pistonCompressorsSections } from '@/content/pistonCompressors'
import { pistonCompressorModels } from '@/content/pistonCompressorModels'

export function PistonCompressorsPage() {
  return (
    <div>
      <Breadcrumb label={pistonCompressorsTitle} />
      <div className="mx-auto max-w-site px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-heading">{pistonCompressorsTitle}</h1>
        <ContentSections sections={pistonCompressorsSections} />

        <h2 className="mb-4 mt-8 text-xl font-semibold text-heading">Модели поршневых компрессоров</h2>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 md:grid-cols-4">
          {pistonCompressorModels.map((model) => (
            <li key={model.slug}>
              <Link
                to={`/kompressory/porshnevye-kompressory/${model.slug}`}
                className="text-brand-teal hover:underline"
              >
                {model.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
