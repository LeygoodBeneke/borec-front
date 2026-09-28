import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ProseSection } from '@/components/common/ProseSection'
import { contactInfo } from '@/content/contacts'

export function ContactsPage() {
  return (
    <div>
      <Breadcrumb label="Контакты" />

      <div className="mx-auto max-w-7xl px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-brand-teal">Контакты</h1>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img src={contactInfo.icons.phone} alt="" className="h-6 w-6" />
              <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`} className="text-xl font-semibold text-brand-teal">
                {contactInfo.phone}
              </a>
            </div>
            <p className="text-slate-600">{contactInfo.hours}</p>

            <div className="flex items-center gap-3">
              <img src={contactInfo.icons.address} alt="" className="h-6 w-6" />
              <p className="text-slate-700">{contactInfo.address}</p>
            </div>

            <div className="flex items-center gap-3">
              <img src={contactInfo.icons.email} alt="" className="h-6 w-6" />
              <a href={`mailto:${contactInfo.email}`} className="text-brand-teal hover:underline">
                {contactInfo.email}
              </a>
            </div>

            <div>
              <p className="font-semibold text-brand-teal">{contactInfo.directionsLabel}</p>
              <ProseSection html={contactInfo.directions} />
            </div>

            <a
              href={contactInfo.form.href}
              className="inline-flex items-center gap-2 rounded-md px-6 py-3 font-semibold text-white"
              style={{ background: contactInfo.form.bg }}
            >
              <img src={contactInfo.icons.form} alt="" className="h-5 w-5" />
              {contactInfo.form.label}
            </a>
          </div>

          <div className="aspect-video overflow-hidden rounded-md">
            <iframe
              title={contactInfo.map.label}
              className="h-full w-full border-0"
              loading="lazy"
              src={`https://yandex.ru/map-widget/v1/?ll=${contactInfo.map.lng}%2C${contactInfo.map.lat}&z=15&pt=${contactInfo.map.lng},${contactInfo.map.lat}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
