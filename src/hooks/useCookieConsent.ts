import { useEffect, useState } from 'react'

const STORAGE_KEY = 'cookie_consent'
const CONSENT_EVENT = 'cookie-consent-given'

export function useCookieConsent() {
  const [hasConsent, setHasConsent] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'true'
    } catch {
      return false
    }
  })

  useEffect(() => {
    const handler = () => setHasConsent(true)
    window.addEventListener(CONSENT_EVENT, handler)
    return () => window.removeEventListener(CONSENT_EVENT, handler)
  }, [])

  function giveConsent() {
    try {
      localStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // ignore if storage is blocked
    }
    window.dispatchEvent(new Event(CONSENT_EVENT))
    setHasConsent(true)
  }

  return { hasConsent, giveConsent }
}
