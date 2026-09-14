import { catalogIcons, units, history, qualityBlocks } from '@/content/home'
import { IconLinkGrid } from '@/components/common/IconLinkGrid'
import { SectionHeading } from '@/components/common/SectionHeading'

export function HomePage() {
  return (
    <div>
      <div
        className="bg-slate-800 bg-cover bg-center py-8"
        style={{ backgroundImage: 'url(/assets/d/bg.jpg)' }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="aspect-video w-full max-w-2xl overflow-hidden rounded-md shadow-lg">
            <iframe
              className="h-full w-full"
              src="https://rutube.ru/play/embed/6c26db909d9b485d197e18b62268e430"
              allow="clipboard-write; autoplay"
              allowFullScreen
              title="О заводе"
            />
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <p className="mb-6 text-slate-700">
          АО «Компрессорный завод БОРЕЦ» информирует всех заинтересованных лиц, о том, что в настоящее
          время производственная площадка завода находится по адресу: г. Краснодар, Ростовское шоссе,
          14/2.
        </p>
        <IconLinkGrid items={catalogIcons} />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <SectionHeading>Компрессорные установки</SectionHeading>
        <p className="mb-6 text-slate-700">
          На сегодняшний день мы осуществляем специализированные решения, производим компрессорные
          станции любого уровня сложности.
        </p>
        <IconLinkGrid
          items={units}
          imageClassName="h-32 w-full rounded-md object-cover"
          gridClassName="grid grid-cols-2 gap-6 sm:grid-cols-4"
        />
        <p className="mt-6 text-slate-700">
          Чтобы приобрести компрессорное оборудование или запасные части к нему, Вы можете направить
          заявку на почту zakaz@zavod-borec.ru, или получить консультацию по телефону{' '}
          <a href="tel:+78619914554" className="text-brand-teal hover:underline">
            (861) 991-45-54
          </a>
          .
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <SectionHeading>Наша история</SectionHeading>
        <ol className="space-y-6 border-l-2 border-brand-teal/30 pl-6">
          {history.map((item) => (
            <li key={item.year} className="relative">
              <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-brand-teal" />
              <p className="font-heading text-sm font-bold text-brand-teal">{item.year}</p>
              <p className="font-semibold text-brand-teal">{item.subtitle}</p>
              {item.text && <p className="mt-1 text-sm text-slate-600">{item.text}</p>}
              {item.images && (
                <div className="mt-3 flex gap-3">
                  {item.images.map((src) => (
                    <img key={src} src={src} alt="" className="h-24 w-32 rounded object-cover" />
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 rounded-lg bg-slate-50 p-6 sm:grid-cols-3">
          {qualityBlocks.map((text, i) => (
            <p key={i} className="whitespace-pre-line text-sm text-slate-700">
              {text}
            </p>
          ))}
        </div>
      </section>
    </div>
  )
}
