import type { ReactNode } from 'react'

export function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="mb-4 border-l-4 border-brand-gold pl-3 text-2xl font-bold text-brand-teal">{children}</h2>
}
