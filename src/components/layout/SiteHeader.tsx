import { useCallback, useRef, useState, type ReactNode, type RefObject } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { logo } from '@/content/navigation'
import { MainNavigation } from './MainNavigation'
import { MobileNavDrawer } from './MobileNavDrawer'
import { HeaderIcon, PhoneIcon, type HeaderIconName } from './headerIcons'

const iconLinkClasses = 'flex items-center text-base leading-6 font-bold text-black opacity-70'

function HeaderLink({ to, icon, children }: { to: string; icon: HeaderIconName; children: ReactNode }) {
  return (
    <Link to={to} className={iconLinkClasses}>
      <HeaderIcon name={icon} />
      {children}
    </Link>
  )
}

function AddressNotice() {
  return (
    <div className="mx-auto max-w-site px-6 py-3">
      <p className="rounded-[5px] bg-[#0066ff] px-[15px] py-3 text-[20px] leading-[1.2] text-white max-[1024px]:text-base max-[768px]:text-[15px]">
        С 2008 года производственная площадка завода находится по адресу: г. Краснодар, Ростовское шоссе, 14/2.
      </p>
    </div>
  )
}

const MOBILE_NAV_ID = 'mobile-nav'

function CompactHeaderBar({
  menuOpen,
  onMenuClick,
  menuButtonRef,
}: {
  menuOpen: boolean
  onMenuClick: () => void
  menuButtonRef: RefObject<HTMLButtonElement | null>
}) {
  return (
    <div className="sticky top-0 z-40 hidden h-14 items-center gap-1 bg-[#f5f5f5] pr-1.5 pl-4 font-heading shadow-[0_1px_4px_rgba(0,0,0,0.12)] max-[960px]:flex">
      <Link to="/" className="flex min-w-0 flex-1 items-center gap-3">
        <img src={logo} alt="" className="h-auto w-10 shrink-0" />
        <span className="truncate text-base font-bold text-[#303030]">Завод БОРЕЦ</span>
      </Link>
      <a
        href="tel:+78619914554"
        aria-label="Позвонить"
        className="flex size-11 shrink-0 items-center justify-center rounded-md text-brand-teal hover:bg-black/5"
      >
        <PhoneIcon />
      </a>
      <button
        ref={menuButtonRef}
        type="button"
        onClick={onMenuClick}
        aria-label="Открыть меню"
        aria-expanded={menuOpen}
        aria-controls={MOBILE_NAV_ID}
        className="flex size-11 shrink-0 items-center justify-center rounded-md text-[#303030] hover:bg-black/5"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}

export function SiteHeader() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuPathname, setMenuPathname] = useState(pathname)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  if (pathname !== menuPathname) {
    setMenuPathname(pathname)
    setMenuOpen(false)
  }

  return (
    <>
      <CompactHeaderBar menuOpen={menuOpen} onMenuClick={() => setMenuOpen(true)} menuButtonRef={menuButtonRef} />
      <MobileNavDrawer id={MOBILE_NAV_ID} open={menuOpen} onClose={closeMenu} returnFocusRef={menuButtonRef} />

      <header>
        <div className="bg-[#f5f5f5] px-5 py-[18px] font-heading text-black max-[960px]:hidden">
          <div className="mx-auto flex max-w-[1600px] flex-wrap items-center text-left">
            <div className="flex flex-[1_0_0] items-center">
              <Link to="/" className="mr-[60px] shrink-0 max-[1680px]:mr-5 max-[1440px]:w-[88px]">
                <img src={logo} alt="АО «Компрессорный завод БОРЕЦ»" className="h-auto w-[107px] max-w-full" />
              </Link>
              <div className="flex-[1_0_0]">
                <p className="text-[40px] leading-[35px] font-bold text-[#303030] max-[1680px]:text-[31px] max-[1440px]:leading-[29px] max-[1260px]:text-[26px] max-[1260px]:leading-[1.25]">
                  АО &quot;Компрессорный завод БОРЕЦ&quot;
                </p>
                <p className="mt-[13px] text-[24px] leading-[22px] text-[#303030] max-[1680px]:text-[19px] max-[1440px]:mt-2.5 max-[1440px]:leading-[18px] max-[1260px]:text-base max-[1260px]:leading-[1.25]">
                  основан в 1897 году в Москве
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-[60px] gap-y-2.5 pl-[15px] max-[1680px]:gap-x-[30px]">
              <div className="flex flex-col items-start gap-x-8 gap-y-2.5 p-2.5">
                <a href="tel:+78619914554" className="text-[26px] leading-6 font-bold opacity-70">
                  +7 (861) 991-45-54
                </a>
                <a href="mailto:zakaz@zavod-borec.ru" className={iconLinkClasses}>
                  <HeaderIcon name="mail" />
                  zakaz@zavod-borec.ru
                </a>
              </div>
              <div className="flex flex-col items-start gap-x-8 gap-y-2.5 p-2.5">
                <HeaderLink to="/search" icon="search">
                  Поиск
                </HeaderLink>
                <HeaderLink to="/forma-obratnoj-svyazi" icon="request">
                  Оставить запрос
                </HeaderLink>
              </div>
            </div>
          </div>
        </div>

        {pathname === '/' && <AddressNotice />}

        <MainNavigation />
      </header>
    </>
  )
}
