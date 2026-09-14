export function FeatureList({ items, columns = false }: { items: string[]; columns?: boolean }) {
  return (
    <ul className={`mb-6 list-disc space-y-1 pl-5 text-slate-700 ${columns ? 'sm:columns-2 sm:gap-8' : ''}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
