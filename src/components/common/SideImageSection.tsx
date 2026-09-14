import { ProseSection } from './ProseSection'

interface SideImageSectionProps {
  src: string
  alt: string
  side: 'left' | 'right'
  html: string
}

export function SideImageSection({ src, alt, side, html }: SideImageSectionProps) {
  return (
    <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-start">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full max-w-sm rounded-md object-cover md:w-1/3 ${side === 'right' ? 'md:order-2' : ''}`}
      />
      <div className="flex-1">
        <ProseSection html={html} />
      </div>
    </div>
  )
}
