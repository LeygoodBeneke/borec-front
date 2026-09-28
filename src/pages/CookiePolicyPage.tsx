import { Breadcrumb } from '@/components/common/Breadcrumb'
import { ProseSection } from '@/components/common/ProseSection'
import { cookiePolicyTitle, cookiePolicySections } from '@/content/cookiePolicy'

export function CookiePolicyPage() {
  return (
    <div>
      <Breadcrumb label={cookiePolicyTitle} />

      <div className="mx-auto max-w-7xl px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-brand-teal">{cookiePolicyTitle}</h1>

        {cookiePolicySections.map((html, index) => (
          <ProseSection key={index} html={html} />
        ))}
      </div>
    </div>
  )
}
