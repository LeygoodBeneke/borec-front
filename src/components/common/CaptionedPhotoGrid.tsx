import type { CaptionedImage } from '@/types/content'

export function CaptionedPhotoGrid({ items }: { items: CaptionedImage[] }) {
  return (
    <div className="mb-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
      {items.map((item) => (
        <div key={item.caption} className="text-center">
          <div className="aspect-square overflow-hidden rounded-md bg-slate-50">
            <img src={item.image} alt="" loading="lazy" className="h-full w-full object-contain" />
          </div>
          <p className="mt-2 text-sm text-slate-600">{item.caption}</p>
        </div>
      ))}
    </div>
  )
}
