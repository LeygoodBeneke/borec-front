import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { logo } from '@/content/navigation'
import { MainNavigation } from './MainNavigation'

const iconPaths = {
  mail: 'M9.03 10.8757L3.915 6.72L4.62375 5.84625L9.03 9.426L13.4348 5.84625L14.1442 6.71925L9.03 10.8757ZM1.125 16.125H16.875V1.875H1.125V16.125Z',
  search:
    'M2.81445 7.93615C2.81445 5.0254 5.18295 2.65765 8.0937 2.65765C11.0037 2.65765 13.3722 5.0254 13.3722 7.93615C13.3722 10.8469 11.0037 13.2154 8.0937 13.2154C5.18295 13.2154 2.81445 10.8469 2.81445 7.93615ZM16.6857 15.7804L13.2365 12.3402C14.2535 11.1544 14.8722 9.61765 14.8722 7.93615C14.8722 4.1989 11.831 1.15765 8.0937 1.15765C4.3557 1.15765 1.31445 4.1989 1.31445 7.93615C1.31445 11.6742 4.3557 14.7154 8.0937 14.7154C9.6102 14.7154 11.0075 14.2084 12.1377 13.3632L15.6267 16.8424L16.6857 15.7804Z',
  request:
    'M5.71598 7.48425H11.3935V6.35925H5.71598V7.48425ZM5.71598 10.6072H8.57798V9.48225H5.71598V10.6072ZM2.34473 16.3125H15.655V1.6875H2.34473V16.3125Z',
}

function HeaderIcon({ name }: { name: keyof typeof iconPaths }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="mr-2.5 shrink-0">
      <path fillRule="evenodd" clipRule="evenodd" d={iconPaths[name]} fill="black" />
    </svg>
  )
}

const iconLinkClasses = 'flex items-center text-base leading-6 font-bold text-black opacity-70'

function HeaderLink({ to, icon, children }: { to: string; icon: keyof typeof iconPaths; children: ReactNode }) {
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
        С 2008 года производственная площадка завода находится по адресу: г. Краснодар, Ростовское
        шоссе, 14/2.
      </p>
    </div>
  )
}

export function SiteHeader() {
  const { pathname } = useLocation()

  return (
    <header>
      <div className="bg-[#f5f5f5] px-5 py-[18px] font-heading text-black">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center text-left">
          <div className="flex flex-[1_0_0] items-center max-[960px]:w-full max-[960px]:flex-none max-[960px]:justify-center max-[640px]:flex-wrap max-[640px]:text-center">
            <Link
              to="/"
              className="mr-[60px] shrink-0 max-[1680px]:mr-5 max-[1440px]:w-[88px] max-[640px]:mx-0 max-[640px]:mb-2.5"
            >
              <img src={logo} alt="АО «Компрессорный завод БОРЕЦ»" className="h-auto w-[107px] max-w-full" />
            </Link>
            <div className="flex-[1_0_0] max-[960px]:flex-none max-[640px]:w-full">
              <p className="text-[40px] leading-[35px] font-bold text-[#303030] max-[1680px]:text-[31px] max-[1440px]:leading-[29px] max-[1260px]:text-[26px] max-[1260px]:leading-[1.25] max-[640px]:text-[22px]">
                АО &quot;Компрессорный завод БОРЕЦ&quot;
              </p>
              <p className="mt-[13px] text-[24px] leading-[22px] text-[#303030] max-[1680px]:text-[19px] max-[1440px]:mt-2.5 max-[1440px]:leading-[18px] max-[1260px]:text-base max-[1260px]:leading-[1.25] max-[640px]:mt-[7px] max-[640px]:text-sm">
                основан в 1897 году в Москве
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-[60px] gap-y-2.5 pl-[15px] max-[1680px]:gap-x-[30px] max-[960px]:w-full max-[960px]:justify-center max-[960px]:pt-[15px] max-[960px]:pl-0">
            <div className="flex flex-col items-start gap-x-8 gap-y-2.5 p-2.5 max-[960px]:justify-center">
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
  )
}
