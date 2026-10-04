import type { ReactNode } from 'react'

export function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="mb-4 border-l-4 border-brand-teal pl-3 text-2xl font-bold text-heading">{children}</h2>
}
