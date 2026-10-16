import { Link } from 'react-router-dom'
import { useCookieConsent } from '@/hooks/useCookieConsent'

export function CookieConsentBanner() {
  const { hasConsent, giveConsent } = useCookieConsent()

  if (hasConsent) return null

  return (
    <div className="fixed bottom-6 left-6 z-50 flex w-80 max-w-[calc(100vw-3rem)] flex-col gap-3 rounded-xl bg-brand-teal p-5 text-sm text-white shadow-2xl">
      <p>
        Сайт использует cookie с целью анализа поведения посетителей для улучшения Сайта. Продолжая
        пользоваться Сайтом, вы соглашаетесь на использование файлов cookie в соответствии с нашими{' '}
        <Link to="/cookie" className="underline hover:text-white/80">
          Cookie правилами
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={giveConsent}
        className="self-end rounded bg-white px-6 py-2 font-semibold text-brand-teal transition-colors hover:bg-white/90"
      >
        Хорошо
      </button>
    </div>
  )
}
