import { useState, type FormEvent } from 'react'
import { Breadcrumb } from '@/components/common/Breadcrumb'

export function ContactFormPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value

    const subject = encodeURIComponent('Заявка с сайта')
    const body = encodeURIComponent(`Имя: ${name || '—'}\nТелефон: ${phone}`)
    window.location.href = `mailto:zakaz@zavod-borec.ru?subject=${subject}&body=${body}`

    setSubmitted(true)
  }

  return (
    <div>
      <Breadcrumb label="Форма обратной связи" />

      <div className="mx-auto max-w-site px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-brand-teal">Форма обратной связи</h1>

        <div className="max-w-md">
          {submitted ? (
            <p className="rounded-md bg-brand-teal/10 p-4 text-brand-teal">
              Спасибо! Ваша заявка отправлена, мы свяжемся с вами в ближайшее время.
            </p>
          ) : (
            <>
              <h2 className="text-xl font-semibold text-brand-teal">Получите консультацию</h2>
              <p className="mb-6 text-slate-600">Свяжемся с вами в ближайшее время</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm text-slate-700">
                    Имя
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full rounded border border-slate-300 px-3 py-2 focus:border-brand-teal focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm text-slate-700">
                    Телефон <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded border border-slate-300 px-3 py-2 focus:border-brand-teal focus:outline-none"
                  />
                </div>

                <label className="flex items-start gap-2 text-sm text-slate-600">
                  <input type="checkbox" required className="mt-1" />
                  <span>Я согласен на обработку моих персональных данных</span>
                </label>

                <button
                  type="submit"
                  className="rounded-md bg-brand-teal px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-teal-dark"
                >
                  Отправить
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
