import type { ContentSection } from '@/types/content'
import { agnksTitle, agnksSections } from './agnks'
import { boosterCompressorsTitle, boosterCompressorsSections } from './boosterCompressors'
import { careersTitle, careersSections } from './careers'
import { compressor2vm4Title, compressor2vm4Sections } from './compressor2vm4'
import { compressorBaseTitle, compressorBaseSections } from './compressorBase'
import { compressorCylinderTitle, compressorCylinderSections } from './compressorCylinder'
import { compressorLinerTitle, compressorLinerSections } from './compressorLiner'
import { compressorsTitle, compressorsSections } from './compressors'
import { compressorStationsTitle, compressorStationsSections } from './compressorStations'
import { connectingRodTitle, connectingRodSections } from './connectingRod'
import { contactInfo } from './contacts'
import { cookiePolicyTitle, cookiePolicySections } from './cookiePolicy'
import { crankshaftTitle, crankshaftSections } from './crankshaft'
import { gasCompressorsTitle, gasCompressorsSections } from './gasCompressors'
import { catalogIcons, units, history, qualityBlocks } from './home'
import { krasnodarFactoryHistoryTitle, krasnodarFactoryHistorySections } from './krasnodarFactoryHistory'
import { moscowFactoryHistoryTitle, moscowFactoryHistorySections } from './moscowFactoryHistory'
import { newsTitle, newsItems } from './news'
import { nitrogenStationsTitle, nitrogenStationsSections } from './nitrogenStations'
import { pistonCompressorModels } from './pistonCompressorModels'
import { pistonCompressorsTitle, pistonCompressorsSections } from './pistonCompressors'
import { facilities, castingMethods, equipmentGallery, labEquipment, machinePark } from './production'
import { reengineeringTitle, reengineeringSections } from './reengineering'
import { repairTitle, repairSections } from './repair'
import { sparePartsTitle, sparePartsSections } from './spareParts'
import { stormCompressorTitle, stormCompressorSections } from './stormCompressor'
import { valveLuTitle, valveLuSections } from './valveLu'
import { valveNdtVdtTitle, valveNdtVdtSections } from './valveNdtVdt'
import { valveNktVktTitle, valveNktVktSections } from './valveNktVkt'
import { valvePikTitle, valvePikSections } from './valvePik'
import { valvesTitle, valvesSections } from './valves'

export interface SearchEntry {
  title: string
  href: string
  text: string
}

interface RawEntry {
  title: string
  href: string
  html: string[]
}

const sectionPages: [string, string, ContentSection[]][] = [
  ['/klapany', valvesTitle, valvesSections],
  ['/klapany/klapan-lu', valveLuTitle, valveLuSections],
  ['/klapany/klapan-ndt-vdt', valveNdtVdtTitle, valveNdtVdtSections],
  ['/klapany/klapan-nkt-vkt', valveNktVktTitle, valveNktVktSections],
  ['/klapany/klapan-pik', valvePikTitle, valvePikSections],
  ['/moskovskij-kompressornyj-zavod-borec', moscowFactoryHistoryTitle, moscowFactoryHistorySections],
  ['/krasnodarskij-kompressornyj-zavod-istoriya', krasnodarFactoryHistoryTitle, krasnodarFactoryHistorySections],
  ['/zapchasti-dlya-kompressora', sparePartsTitle, sparePartsSections],
  ['/zapchasti-dlya-kompressora/baza-porshnevogo-kompressora', compressorBaseTitle, compressorBaseSections],
  ['/zapchasti-dlya-kompressora/clindr-kompressora', compressorCylinderTitle, compressorCylinderSections],
  ['/zapchasti-dlya-kompressora/gilza-porshnevogo-kompressora', compressorLinerTitle, compressorLinerSections],
  ['/zapchasti-dlya-kompressora/kolenval-kompressora', crankshaftTitle, crankshaftSections],
  ['/zapchasti-dlya-kompressora/shatun-kompressora-borec', connectingRodTitle, connectingRodSections],
  ['/kompressory', compressorsTitle, compressorsSections],
  ['/kompressory/porshnevye-kompressory', pistonCompressorsTitle, pistonCompressorsSections],
  ['/kompressory/dozhimnye-kompressory', boosterCompressorsTitle, boosterCompressorsSections],
  ['/kompressory/gazovye-kompressory', gasCompressorsTitle, gasCompressorsSections],
  ['/kompressor-shtorm', stormCompressorTitle, stormCompressorSections],
  ['/kompressor-2vm4-8-401', compressor2vm4Title, compressor2vm4Sections],
  ['/kompressornye-stancii', compressorStationsTitle, compressorStationsSections],
  ['/agnks', agnksTitle, agnksSections],
  ['/azotnye-stancii', nitrogenStationsTitle, nitrogenStationsSections],
  ['/vakansii', careersTitle, careersSections],
  ['/remont-porshnevogo-kompressora', repairTitle, repairSections],
  ['/reinzhiniring-kompressora', reengineeringTitle, reengineeringSections],
]

function sectionHtml(section: ContentSection): string[] {
  switch (section.type) {
    case 'prose':
    case 'sideImage':
      return [section.html]
    case 'list':
      return section.items
    case 'captionedGallery':
      return section.items.map((item) => item.caption)
    case 'gallery':
      return []
  }
}

const rawEntries: RawEntry[] = [
  {
    title: 'Компрессорный завод БОРЕЦ',
    href: '/',
    html: [
      ...catalogIcons.map((item) => item.title),
      ...units.map((item) => item.title),
      ...history.flatMap((item) => [item.year, item.subtitle, item.text ?? '']),
      ...qualityBlocks,
    ],
  },
  ...sectionPages.map(([href, title, sections]) => ({ title, href, html: sections.flatMap(sectionHtml) })),
  ...pistonCompressorModels.map((model) => ({
    title: model.title,
    href: `/kompressory/porshnevye-kompressory/${model.slug}`,
    html: [model.html],
  })),
  { title: newsTitle, href: '/novosti', html: newsItems.map((item) => item.title) },
  ...newsItems.map((item) => ({
    title: item.title,
    href: `/novosti/${item.slug}`,
    html: [item.date, item.teaser, item.body],
  })),
  {
    title: 'Производство',
    href: '/proizvodstvo',
    html: [
      'Литейное производство, механическая обработка, станочный парк, лаборатория',
      ...facilities.map((item) => item.text),
      ...castingMethods,
      ...equipmentGallery.map((item) => item.caption),
      ...labEquipment,
      ...machinePark,
    ],
  },
  {
    title: 'Контакты',
    href: '/kontakty',
    html: [contactInfo.phone, contactInfo.hours, contactInfo.email, contactInfo.address, contactInfo.directions],
  },
  { title: cookiePolicyTitle, href: '/cookie', html: cookiePolicySections },
]

// DOMParser builds an inert document, so content HTML is never attached to the live page.
function htmlToText(html: string, parser: DOMParser): string {
  return (parser.parseFromString(html, 'text/html').body.textContent ?? '').replace(/\s+/g, ' ').trim()
}

let index: SearchEntry[] | null = null

export function getSearchIndex(): SearchEntry[] {
  if (!index) {
    const parser = new DOMParser()
    index = rawEntries.map(({ title, href, html }) => ({
      title,
      href,
      text: html.map((part) => htmlToText(part, parser)).join(' '),
    }))
  }
  return index
}
