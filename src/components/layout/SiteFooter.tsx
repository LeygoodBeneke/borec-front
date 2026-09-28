import { MainNavigation } from './MainNavigation'

export function SiteFooter() {
  return (
    <footer>
      <div className="bg-brand-teal py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-10">
            <div>
              <p className="text-xs uppercase tracking-wide text-white/70">Телефон:</p>
              <a href="tel:+78619914554" className="text-lg font-semibold hover:underline">
                +7 (861) 991-45-54
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-white/70">Email:</p>
              <a href="mailto:zakaz@zavod-borec.ru" className="text-lg font-semibold hover:underline">
                zakaz@zavod-borec.ru
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <MainNavigation flat />
        </div>
      </div>

      <div className="bg-white py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>COPYRIGHT &copy; КОМПРЕССОРНЫЙ ЗАВОД БОРЕЦ &copy; 2014-2026</p>
        </div>
      </div>
    </footer>
  )
}
