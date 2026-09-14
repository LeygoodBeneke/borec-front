export function PhotoGrid({ images }: { images: string[] }) {
  return (
    <div className="mb-6 grid grid-cols-2 gap-6 sm:grid-cols-3">
      {images.map((src) => (
        <div key={src} className="aspect-video overflow-hidden rounded-md bg-slate-100">
          <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
  )
}
