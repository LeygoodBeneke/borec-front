import type { NavItem } from '@/types/content'

export const logo = '/assets/thumb/2/CsaOpx3csMoq3WvmUmVX0A/107c107/d/zavod-borec-logo.png'

const catalogItems: NavItem[] = [
  { label: 'Клапаны', href: '/klapany' },
  { label: 'Запасные части', href: '/zapchasti-dlya-kompressora' },
  { label: 'Компрессоры', href: '/kompressory' },
  { label: 'Компрессор Шторм', href: '/kompressor-shtorm' },
  { label: 'Компрессор 2ВМ4-8/401', href: '/kompressor-2vm4-8-401' },
  { label: 'Компрессорные станции', href: '/kompressornye-stancii' },
  { label: 'АГНКС', href: '/agnks' },
  { label: 'Азотные станции', href: '/azotnye-stancii' },
]

const factoryItems: NavItem[] = [
  { label: 'Новости', href: '/novosti' },
  { label: 'Вакансии', href: '/vakansii' },
]

export const navItems: NavItem[] = [
  { label: 'Каталог', children: catalogItems },
  { label: 'Завод Борец', href: '/', children: factoryItems },
  { label: 'Производство', href: '/proizvodstvo' },
  { label: 'Ремонт', href: '/remont-porshnevogo-kompressora' },
  { label: 'Реинжиниринг', href: '/reinzhiniring-kompressora' },
  { label: 'Контакты', href: '/kontakty' },
]
