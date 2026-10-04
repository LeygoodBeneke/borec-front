import { useEffect, useId, useRef, useState, type ReactNode, type RefObject } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { NavItem } from '@/types/content'
import { navItems } from '@/content/navigation'
import { ChevronIcon, HeaderIcon } from './headerIcons'

function containsPath(item: NavItem, pathname: string): boolean {
  return item.href === pathname || (item.children?.some((child) => containsPath(child, pathname)) ?? false)
}

// A group that has its own page gets that page as the first entry, so the
// toggle button never has to both navigate and expand.
function groupLinks(item: NavItem): NavItem[] {
  const children = item.children ?? []
  return item.href ? [{ label: item.href === '/' ? 'Главная' : item.label, href: item.href }, ...children] : children
}

function initiallyExpanded(pathname: string): string[] {
  return navItems.filter((item) => item.children && containsPath(item, pathname)).map((item) => item.label)
}

function DrawerLink({
  to,
  sub = false,
  onNavigate,
  children,
}: {
  to: string
  sub?: boolean
  onNavigate: () => void
  children: ReactNode
}) {
  const { pathname } = useLocation()
  const isActive = pathname === to

  return (
    <Link
      to={to}
      onClick={onNavigate}
      aria-current={isActive ? 'page' : undefined}
      className={`flex min-h-11 items-center rounded-md px-4 ${sub ? 'text-[15px] font-medium' : 'text-base font-semibold'} ${
        isActive ? 'bg-brand-teal/10 text-brand-teal' : 'text-[#303030] hover:bg-slate-100'
      }`}
    >
      {children}
    </Link>
  )
}

interface MobileNavDrawerProps {
  id: string
  open: boolean
  onClose: () => void
  returnFocusRef: RefObject<HTMLButtonElement | null>
}

export function MobileNavDrawer({ id, open, onClose, returnFocusRef }: MobileNavDrawerProps) {
  const { pathname } = useLocation()
  const groupIdPrefix = useId()
  const panelRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const [expanded, setExpanded] = useState<string[]>([])
  const [wasOpen, setWasOpen] = useState(open)

  if (open !== wasOpen) {
    setWasOpen(open)
    if (open) setExpanded(initiallyExpanded(pathname))
  }

  useEffect(() => {
    if (!open) return

    const root = document.documentElement
    const previousOverflow = root.style.overflow
    root.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    const returnFocusTarget = returnFocusRef.current

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      ).filter((element) => !element.closest('[hidden]'))
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const desktopQuery = window.matchMedia('(min-width: 961px)')
    function onViewportChange(event: MediaQueryListEvent) {
      if (event.matches) onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    desktopQuery.addEventListener('change', onViewportChange)

    return () => {
      root.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      desktopQuery.removeEventListener('change', onViewportChange)
      returnFocusTarget?.focus()
    }
  }, [open, onClose, returnFocusRef])

  function toggleGroup(label: string) {
    setExpanded((current) => (current.includes(label) ? current.filter((l) => l !== label) : [...current, label]))
  }

  return (
    // Visibility is delayed only when closing, so the slide-out can finish; when
    // opening it must flip immediately or the close button can't take focus.
    <div
      className={`fixed inset-0 z-60 min-[961px]:hidden ${
        open ? 'visible' : 'invisible transition-[visibility] duration-300 motion-reduce:transition-none'
      }`}
      inert={!open}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 motion-reduce:transition-none ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        id={id}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Меню"
        className={`absolute inset-y-0 right-0 flex w-[min(320px,85vw)] flex-col overflow-y-auto overscroll-contain bg-white font-heading shadow-2xl transition-transform duration-300 motion-reduce:transition-none ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-slate-200 pr-1.5 pl-6">
          <span className="text-base font-bold text-[#303030]">Меню</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Закрыть меню"
            className="flex size-11 items-center justify-center rounded-md text-[#303030] hover:bg-slate-100"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav aria-label="Разделы сайта" className="px-2 py-3">
          <ul className="flex flex-col gap-0.5">
            {navItems.map((item, index) => {
              if (!item.children) {
                return (
                  <li key={item.label}>
                    <DrawerLink to={item.href ?? '/'} onNavigate={onClose}>
                      {item.label}
                    </DrawerLink>
                  </li>
                )
              }

              const isExpanded = expanded.includes(item.label)
              const listId = `${groupIdPrefix}-group-${index}`
              const isCurrentGroup = containsPath(item, pathname)

              return (
                <li key={item.label}>
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={listId}
                    onClick={() => toggleGroup(item.label)}
                    className={`flex min-h-11 w-full items-center justify-between rounded-md px-4 text-left text-base font-semibold hover:bg-slate-100 ${
                      isCurrentGroup ? 'text-brand-teal' : 'text-[#303030]'
                    }`}
                  >
                    {item.label}
                    <ChevronIcon className={isExpanded ? 'rotate-180' : ''} />
                  </button>
                  <ul id={listId} hidden={!isExpanded} className="mb-1 ml-4 border-l border-slate-200 pl-2">
                    {groupLinks(item).map((child) => (
                      <li key={child.label}>
                        <DrawerLink to={child.href ?? '/'} sub onNavigate={onClose}>
                          {child.label}
                        </DrawerLink>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="mt-auto flex flex-col gap-1 border-t border-slate-200 bg-[#f5f5f5] px-6 py-5">
          <a href="tel:+78619914554" className="flex min-h-11 items-center text-xl font-bold text-[#303030]">
            +7 (861) 991-45-54
          </a>
          <a
            href="mailto:zakaz@zavod-borec.ru"
            className="flex min-h-11 items-center text-base font-bold text-black opacity-70"
          >
            <HeaderIcon name="mail" />
            zakaz@zavod-borec.ru
          </a>
          <Link
            to="/search"
            onClick={onClose}
            className="flex min-h-11 items-center text-base font-bold text-black opacity-70"
          >
            <HeaderIcon name="search" />
            Поиск
          </Link>
          <Link
            to="/forma-obratnoj-svyazi"
            onClick={onClose}
            className="flex min-h-11 items-center text-base font-bold text-black opacity-70"
          >
            <HeaderIcon name="request" />
            Оставить запрос
          </Link>
        </div>
      </div>
    </div>
  )
}
