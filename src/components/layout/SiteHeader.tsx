import { Link } from 'react-router-dom'
import { logo } from '@/content/navigation'
import { MainNavigation } from './MainNavigation'

export function SiteHeader() {
  return (
    <header>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-6 py-4">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="АО «Компрессорный завод БОРЕЦ»" className="h-20 w-auto" />
        </Link>
        <div className="grid min-w-0 flex-1 grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6">
          <p className="truncate font-heading text-[1.75rem] font-bold text-brand-teal">
            АО &quot;Компрессорный завод БОРЕЦ&quot;
          </p>
          <a href="tel:+78619914554" className="text-right text-lg text-brand-teal hover:text-brand-gold">
            +7 (861) 991-45-54
          </a>
          <p className="text-lg text-slate-500">Производитель компрессорного оборудования с 1897 года</p>
          <a
            href="mailto:zakaz@zavod-borec.ru"
            className="text-right text-lg text-brand-teal hover:text-brand-gold"
          >
            zakaz@zavod-borec.ru
          </a>
        </div>
      </div>

      <MainNavigation />
    </header>
  )
}
