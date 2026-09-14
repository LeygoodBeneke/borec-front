import { Link, useLocation } from 'react-router-dom'
import type { NavItem } from '@/types/content'
import { navItems } from '@/content/navigation'

function NavLink({ item, flat = false }: { item: NavItem; flat?: boolean }) {
  const { pathname } = useLocation()
  const isActive = item.href ? pathname === item.href : false

  const linkClasses = flat
    ? 'block px-3 py-2 text-sm font-semibold text-white transition-colors hover:text-brand-gold'
    : 'block px-4 py-3 text-sm font-semibold text-white transition-colors hover:text-brand-gold'

  return (
    <li className="group relative">
      {item.href ? (
        <Link to={item.href} className={`${linkClasses} ${isActive ? 'text-brand-gold' : ''}`}>
          {item.label}
        </Link>
      ) : (
        <span className={`${linkClasses} cursor-default`}>{item.label}</span>
      )}

      {item.children && !flat && (
        <ul className="invisible absolute left-0 top-full z-20 min-w-56 rounded-md bg-white py-2 opacity-0 shadow-xl transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
          {item.children.map((child) => (
            <li key={child.label}>
              <Link
                to={child.href ?? '#'}
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
  return (
    <nav className={flat ? '' : 'bg-brand-teal'}>
      <ul className={`mx-auto flex max-w-6xl flex-wrap ${flat ? 'gap-1' : 'px-6'}`}>
        {navItems.map((item) => (
          <NavLink key={item.label} item={item} flat={flat} />
        ))}
      </ul>
    </nav>
  )
}
