import type { ContentSection } from '@/types/content'

const CDN = '/assets'

export const crankshaftTitle = 'Коленвал компрессора'

export const crankshaftSections: ContentSection[] = [
  {
    type: 'prose',
    html: `
      <p>Коленвал компрессора – стальной штампованный, с кривошипами для установки шатунов, опирается
      на роликовые подшипники.</p>
      <p>На одном конце коленчатого вала установлен ротор электродвигателя (соединение шпоночное), а в
      закрепленном на торце вала фланцы выполнено квадратное отверстие для возможности проворачивания
      вала компрессора с помощью рукоятки перед запуском (рукоятка входит в комплект ЗИП).</p>
      <p>На другом конце вала крепится шестерня для передачи вращения валу масляного насоса блока
      смазки.</p>
      <p>Заявку на покупку компрессорного оборудования Вы можете направить на почту
      <a href="mailto:zakaz@zavod-borec.ru">zakaz@zavod-borec.ru</a> или получить консультацию по
      телефону <a href="tel:+78619914554">+7 (861) 991-45-54</a></p>
    `,
  },
  {
    type: 'gallery',
    images: [
      `${CDN}/thumb/2/P2QlpNgEhrh62ME41Vc-Qw/360r300/d/kolenchatyj_val_kompressora.jpg`,
      `${CDN}/thumb/2/90O5rrRAOqHjrhrwQL3bug/360r300/d/kolenval_kompressora_zavoda_borec.jpg`,
    ],
  },
]
