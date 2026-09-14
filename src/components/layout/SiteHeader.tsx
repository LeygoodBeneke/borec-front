import { Link } from 'react-router-dom'
import { logo } from '@/content/navigation'
import { MainNavigation } from './MainNavigation'

export function SiteHeader() {
  return (
    <header>
      <div className="flex justify-end gap-6 bg-brand-teal/95 px-6 py-2 text-sm text-slate-200">
        <a href="tel:+78619914554" className="hover:text-white">
          +7 (861) 991-45-54
        </a>
        <a href="mailto:zakaz@zavod-borec.ru" className="hover:text-white">
          zakaz@zavod-borec.ru
        </a>
      </div>

      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-6 px-6 py-4">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="АО «Компрессорный завод БОРЕЦ»" className="h-14 w-auto" />
        </Link>
        <div className="min-w-0 flex-1">
          <p className="truncate font-heading text-lg font-bold text-brand-teal">
            АО &quot;Компрессорный завод БОРЕЦ&quot;
          </p>
          <p className="text-sm text-slate-500">Производитель компрессорного оборудования с 1897 года</p>
        </div>
      </div>

      <MainNavigation />
    </header>
  )
}
