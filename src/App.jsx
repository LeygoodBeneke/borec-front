import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProductionPage from './pages/ProductionPage'
import ArticlePage from './pages/ArticlePage'
import KontaktyPage from './pages/KontaktyPage'
import {
  klapanyTitle, klapanyHtml,
  zapchastiTitle, zapchastiHtml,
  kompressoryTitle, kompressoryHtml,
  kompressornyeStanciiTitle, kompressornyeStanciiHtml,
  agnksTitle, agnksHtml,
  azotnyeStanciiTitle, azotnyeStanciiHtml,
  novostiTitle, novostiHtml,
  vakansiiTitle, vakansiiHtml,
  kompressorShtormTitle, kompressorShtormHtml,
  remontTitle, remontHtml,
  reinzhiniringTitle, reinzhiniringHtml,
  kompressor2vm4Title, kompressor2vm4Html,
} from './data/articles'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proizvodstvo" element={<ProductionPage />} />
        <Route path="/kontakty" element={<KontaktyPage />} />
        <Route path="/klapany" element={<ArticlePage crumbLabel="Клапаны" h1={klapanyTitle} html={klapanyHtml} />} />
        <Route path="/zapchasti-dlya-kompressora" element={<ArticlePage crumbLabel="Запасные части" h1={zapchastiTitle} html={zapchastiHtml} />} />
        <Route path="/kompressory" element={<ArticlePage crumbLabel="Компрессоры" h1={kompressoryTitle} html={kompressoryHtml} />} />
        <Route path="/kompressornye-stancii" element={<ArticlePage crumbLabel="Компрессорные станции" h1={kompressornyeStanciiTitle} html={kompressornyeStanciiHtml} />} />
        <Route path="/agnks" element={<ArticlePage crumbLabel="АГНКС" h1={agnksTitle} html={agnksHtml} />} />
        <Route path="/azotnye-stancii" element={<ArticlePage crumbLabel="Азотные станции" h1={azotnyeStanciiTitle} html={azotnyeStanciiHtml} />} />
        <Route path="/novosti" element={<ArticlePage crumbLabel="Новости" h1={novostiTitle} html={novostiHtml} />} />
        <Route path="/vakansii" element={<ArticlePage crumbLabel="Вакансии" h1={vakansiiTitle} html={vakansiiHtml} />} />
        <Route path="/kompressor-shtorm" element={<ArticlePage crumbLabel="Компрессор Шторм" h1={kompressorShtormTitle} html={kompressorShtormHtml} />} />
        <Route path="/kompressor-2vm4-8-401" element={<ArticlePage crumbLabel="Компрессор 2ВМ4-8/401" h1={kompressor2vm4Title} html={kompressor2vm4Html} />} />
        <Route path="/remont-porshnevogo-kompressora" element={<ArticlePage crumbLabel="Ремонт" h1={remontTitle} html={remontHtml} />} />
        <Route path="/reinzhiniring-kompressora" element={<ArticlePage crumbLabel="Реинжиниринг" h1={reinzhiniringTitle} html={reinzhiniringHtml} />} />
      </Routes>
    </Layout>
  )
}

export default App
