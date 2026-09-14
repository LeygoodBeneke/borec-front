import type { ContentSection } from '@/types/content'
import { ProseSection } from './ProseSection'
import { SideImageSection } from './SideImageSection'
import { FeatureList } from './FeatureList'
import { PhotoGrid } from './PhotoGrid'
import { CaptionedPhotoGrid } from './CaptionedPhotoGrid'

export function ContentSections({ sections }: { sections: ContentSection[] }) {
  return (
    <>
      {sections.map((section, index) => {
        switch (section.type) {
          case 'prose':
            return <ProseSection key={index} html={section.html} />
          case 'sideImage':
            return (
              <SideImageSection key={index} src={section.src} alt={section.alt} side={section.side} html={section.html} />
            )
          case 'list':
            return <FeatureList key={index} items={section.items} />
          case 'gallery':
            return <PhotoGrid key={index} images={section.images} />
          case 'captionedGallery':
            return <CaptionedPhotoGrid key={index} items={section.items} />
          default:
            return null
        }
      })}
    </>
  )
}
