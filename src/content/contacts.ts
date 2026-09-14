import type { ContactInfo } from '@/types/content'

const CDN = '/assets'

export const contactInfo: ContactInfo = {
  phone: '+7 (861) 991-45-54',
  hours: 'Пн—Пт с 8:00 до 17:00',
  email: 'zakaz@zavod-borec.ru',
  address: 'г. Краснодар, Ростовское шоссе, 14/2',
  directionsLabel: 'Как добраться:',
  directions:
    'Общественным транспортом до остановки «Компрессорный завод»<br />Автобусы: 52, 107, 51, 186б, 115а, 154а<br />Маршрутки: 196, 126, 117, 105а, 120',
  icons: {
    phone: `${CDN}/thumb/2/vqwhZ8fW_xZXjiBbQh2mbQ/44r/d/fgs16_trubka_telefona.svg`,
    address: `${CDN}/thumb/2/z29YEdbz99MsxLgHfye7ZQ/44r/d/fgs16_dostavka_po_gorodu.svg`,
    email: `${CDN}/thumb/2/BmC_GRHGS82CVsvTENypRg/44r/d/fgs16_pismo_3.svg`,
    form: `${CDN}/thumb/2/sqFaMnnApT7_bJ1u9oyZnQ/52r/d/fgs16_document_y1-color.svg`,
  },
  form: {
    href: '/forma-obratnoj-svyazi',
    label: 'Отправить заявку',
    bg: '#2db194',
  },
  map: {
    lat: 45.076469,
    lng: 38.98877,
    label: 'ОАО «Компрессорный завод БОРЕЦ»',
  },
}
