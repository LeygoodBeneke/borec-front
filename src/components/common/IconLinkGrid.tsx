import type { IconLink } from '@/types/content'

export function IconLinkGrid({
  items,
  imageClassName = 'h-32 w-32 object-contain',
  gridClassName = 'grid grid-cols-2 gap-6 sm:grid-cols-3',
}: {
  items: IconLink[]
  imageClassName?: string
  gridClassName?: string
}) {
  return (
    <div className={gridClassName}>
      {items.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="flex flex-col items-center gap-2 rounded-lg p-4 text-center transition-colors hover:bg-slate-50"
        >
          <img src={item.image} alt={item.title} className={imageClassName} />
          <span className="text-sm text-slate-700">{item.title}</span>
        </a>
      ))}
    </div>
  )
}
