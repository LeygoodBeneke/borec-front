import { useEffect, useRef, useState, type FocusEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { NavItem } from '@/types/content'
import { navItems } from '@/content/navigation'

interface NavLinkProps {
  item: NavItem
  flat?: boolean
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

function NavLink({ item, flat = false, isOpen = false, onOpenChange }: NavLinkProps) {
  const { pathname } = useLocation()
  // "Завод Борец" points at the home page; highlighting it there reads as a stuck button.
  const isActive = item.href && item.href !== '/' ? pathname === item.href : false
  const hasDropdown = Boolean(item.children) && !flat

  const linkClasses = flat
    ? 'block px-3 py-2 text-sm font-semibold text-white underline-offset-4 hover:underline max-[640px]:flex max-[640px]:min-h-11 max-[640px]:items-center max-[640px]:px-0'
    : 'block px-4 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-teal-dark'

  // Only keyboard focus opens the dropdown: a mouse click also focuses the
  // toggle, and opening on that focus would make the click close it again.
  function handleFocus(event: FocusEvent<HTMLLIElement>) {
    if (hasDropdown && event.target.matches(':focus-visible')) onOpenChange?.(true)
  }

  function handleBlur(event: FocusEvent<HTMLLIElement>) {
    if (hasDropdown && !event.currentTarget.contains(event.relatedTarget)) onOpenChange?.(false)
  }

  return (
    <li className="group relative flex items-center" onFocus={handleFocus} onBlur={handleBlur}>
      {item.href ? (
        <Link to={item.href} className={`${linkClasses} ${isActive ? (flat ? 'underline' : 'bg-brand-teal-dark') : ''}`}>
          {item.label}
        </Link>
      ) : hasDropdown ? (
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={() => onOpenChange?.(!isOpen)}
          className={`${linkClasses} cursor-default`}
        >
          {item.label}
        </button>
      ) : (
        <span className={`${linkClasses} cursor-default`}>{item.label}</span>
      )}

      {hasDropdown && (
        <ul
          className={`absolute top-full left-0 z-20 min-w-56 rounded-md bg-white py-2 shadow-xl transition-opacity duration-150 group-hover:visible group-hover:opacity-100 ${
            isOpen ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
        >
          {item.children!.map((child) => (
            <li key={child.label}>
              <Link
                to={child.href ?? '#'}
                onClick={() => onOpenChange?.(false)}
                className="block px-4 py-2 text-sm text-brand-teal hover:bg-slate-50"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export function MainNavigation({ flat = false }: { flat?: boolean }) {
  const [openLabel, setOpenLabel] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (openLabel === null) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpenLabel(null)
    }
    function onPointerDown(event: PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) setOpenLabel(null)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [openLabel])

  return (
    <nav ref={navRef} className={flat ? '' : 'bg-brand-teal max-[960px]:hidden'}>
      <ul
        className={`mx-auto flex max-w-site flex-wrap ${
          flat
            ? 'gap-1 max-[640px]:grid max-[640px]:grid-cols-2 max-[640px]:gap-x-4 max-[640px]:px-6'
            : 'justify-between px-6'
        }`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            item={item}
            flat={flat}
            isOpen={openLabel === item.label}
            onOpenChange={(open) =>
              setOpenLabel((current) => (open ? item.label : current === item.label ? null : current))
            }
          />
        ))}
      </ul>
    </nav>
  )
}
