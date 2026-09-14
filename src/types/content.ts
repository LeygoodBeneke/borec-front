export interface NavItem {
  label: string
  href?: string
  children?: NavItem[]
}

export interface FacilityCard {
  image: string
  text: string
}

export interface CaptionedImage {
  image: string
  caption: string
}

export interface HistoryEntry {
  year: string
  subtitle: string
  text?: string
  images?: string[]
}

export interface IconLink {
  href: string
  image: string
  title: string
}

export interface ContactInfo {
  phone: string
  hours: string
  email: string
  address: string
  directionsLabel: string
  directions: string
  icons: {
    phone: string
    address: string
    email: string
    form: string
  }
  form: {
    href: string
    label: string
    bg: string
  }
  map: {
    lat: number
    lng: number
    label: string
  }
}

export type ContentSection =
  | { type: 'prose'; html: string }
  | { type: 'sideImage'; src: string; alt: string; side: 'left' | 'right'; html: string }
  | { type: 'list'; items: string[] }
  | { type: 'gallery'; images: string[] }
  | { type: 'captionedGallery'; items: CaptionedImage[] }

export interface CompressorModel {
  slug: string
  title: string
  html: string
}

export interface NewsItem {
  slug: string
  date: string
  title: string
  teaser: string
  body: string
  image?: string
}
