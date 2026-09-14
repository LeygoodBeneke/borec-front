import { Routes, Route } from 'react-router-dom'
import { PageLayout } from '@/components/layout/PageLayout'
import { HomePage } from '@/pages/HomePage'
import { ProductionPage } from '@/pages/ProductionPage'
import { ContactsPage } from '@/pages/ContactsPage'
import { ContactFormPage } from '@/pages/ContactFormPage'
import { CookiePolicyPage } from '@/pages/CookiePolicyPage'
import { ValvesPage } from '@/pages/catalog/ValvesPage'
import { SparePartsPage } from '@/pages/catalog/SparePartsPage'
import { CompressorsPage } from '@/pages/catalog/CompressorsPage'
import { PistonCompressorsPage } from '@/pages/catalog/PistonCompressorsPage'
import { PistonCompressorModelPage } from '@/pages/catalog/PistonCompressorModelPage'
import { BoosterCompressorsPage } from '@/pages/catalog/BoosterCompressorsPage'
import { GasCompressorsPage } from '@/pages/catalog/GasCompressorsPage'
import { StormCompressorPage } from '@/pages/catalog/StormCompressorPage'
import { Compressor2vm4Page } from '@/pages/catalog/Compressor2vm4Page'
import { CompressorStationsPage } from '@/pages/catalog/CompressorStationsPage'
import { AgnksPage } from '@/pages/catalog/AgnksPage'
import { NitrogenStationsPage } from '@/pages/catalog/NitrogenStationsPage'
import { NewsPage } from '@/pages/company/NewsPage'
import { NewsDetailPage } from '@/pages/company/NewsDetailPage'
import { CareersPage } from '@/pages/company/CareersPage'
import { RepairPage } from '@/pages/company/RepairPage'
import { ReengineeringPage } from '@/pages/company/ReengineeringPage'

export function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proizvodstvo" element={<ProductionPage />} />
        <Route path="/kontakty" element={<ContactsPage />} />
        <Route path="/forma-obratnoj-svyazi" element={<ContactFormPage />} />
        <Route path="/cookie" element={<CookiePolicyPage />} />
        <Route path="/klapany" element={<ValvesPage />} />
        <Route path="/zapchasti-dlya-kompressora" element={<SparePartsPage />} />
        <Route path="/kompressory" element={<CompressorsPage />} />
        <Route path="/kompressory/porshnevye-kompressory" element={<PistonCompressorsPage />} />
        <Route path="/kompressory/porshnevye-kompressory/*" element={<PistonCompressorModelPage />} />
        <Route path="/kompressory/dozhimnye-kompressory" element={<BoosterCompressorsPage />} />
        <Route path="/kompressory/gazovye-kompressory" element={<GasCompressorsPage />} />
        <Route path="/kompressor-shtorm" element={<StormCompressorPage />} />
        <Route path="/kompressor-2vm4-8-401" element={<Compressor2vm4Page />} />
        <Route path="/kompressornye-stancii" element={<CompressorStationsPage />} />
        <Route path="/agnks" element={<AgnksPage />} />
        <Route path="/azotnye-stancii" element={<NitrogenStationsPage />} />
        <Route path="/novosti" element={<NewsPage />} />
        <Route path="/novosti/*" element={<NewsDetailPage />} />
        <Route path="/vakansii" element={<CareersPage />} />
        <Route path="/remont-porshnevogo-kompressora" element={<RepairPage />} />
        <Route path="/reinzhiniring-kompressora" element={<ReengineeringPage />} />
      </Routes>
    </PageLayout>
  )
}
