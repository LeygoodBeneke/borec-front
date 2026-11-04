import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/globals.css'
import { App } from '@/App'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element #root not found')
}

// BASE_URL совпадает с base из vite.config.ts ("/" на VPS, "/borec-front/" на GitHub Pages)
const basename = import.meta.env.BASE_URL.replace(/\/+$/, '') || '/'

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
