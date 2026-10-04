const iconPaths = {
  mail: 'M9.03 10.8757L3.915 6.72L4.62375 5.84625L9.03 9.426L13.4348 5.84625L14.1442 6.71925L9.03 10.8757ZM1.125 16.125H16.875V1.875H1.125V16.125Z',
  search:
    'M2.81445 7.93615C2.81445 5.0254 5.18295 2.65765 8.0937 2.65765C11.0037 2.65765 13.3722 5.0254 13.3722 7.93615C13.3722 10.8469 11.0037 13.2154 8.0937 13.2154C5.18295 13.2154 2.81445 10.8469 2.81445 7.93615ZM16.6857 15.7804L13.2365 12.3402C14.2535 11.1544 14.8722 9.61765 14.8722 7.93615C14.8722 4.1989 11.831 1.15765 8.0937 1.15765C4.3557 1.15765 1.31445 4.1989 1.31445 7.93615C1.31445 11.6742 4.3557 14.7154 8.0937 14.7154C9.6102 14.7154 11.0075 14.2084 12.1377 13.3632L15.6267 16.8424L16.6857 15.7804Z',
  request:
    'M5.71598 7.48425H11.3935V6.35925H5.71598V7.48425ZM5.71598 10.6072H8.57798V9.48225H5.71598V10.6072ZM2.34473 16.3125H15.655V1.6875H2.34473V16.3125Z',
}

export type HeaderIconName = keyof typeof iconPaths

export function HeaderIcon({ name }: { name: HeaderIconName }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="mr-2.5 shrink-0">
      <path fillRule="evenodd" clipRule="evenodd" d={iconPaths[name]} fill="black" />
    </svg>
  )
}

export function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z" />
    </svg>
  )
}

export function ChevronIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-200 motion-reduce:transition-none ${className}`}
    >
      <path d="m4 6 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
