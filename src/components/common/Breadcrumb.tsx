import { Link } from 'react-router-dom'

export function Breadcrumb({ label }: { label: string }) {
  return (
    <p className="mx-auto max-w-6xl px-6 pt-6 text-sm text-slate-500">
      <Link to="/" className="hover:underline">
        Завод Борец
      </Link>{' '}
      \ {label}
    </p>
  )
}
