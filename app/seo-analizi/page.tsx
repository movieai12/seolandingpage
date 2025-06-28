import dynamic from 'next/dynamic'
import { Header } from '@/components/Header'
import { Metadata } from 'next'

const SEODemo = dynamic(() => import('@/components/SEODemo'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-gray-900 animate-pulse" />
})

export const metadata: Metadata = {
  title: 'Ücretsiz SEO Analizi | Dijitalfiir',
  description: 'Web sitenizin SEO performansını ücretsiz analiz edin. AI destekli aracımız 50+ faktörü kontrol eder ve size özel öneriler sunar.',
  keywords: ['ücretsiz SEO analizi', 'SEO test', 'website analizi', 'SEO raporu', 'site performans testi'],
  openGraph: {
    title: 'Ücretsiz SEO Analizi | Dijitalfiir',
    description: 'Web sitenizin SEO performansını anında analiz edin.',
    url: 'https://dijitalfiir.com/seo-analizi',
  },
}

export default function SEOAnaliziPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-900">Ücretsiz</span> SEO Analizi
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              Web sitenizin SEO performansını anında analiz edin. 
              AI destekli aracımız 50+ faktörü kontrol eder ve size özel öneriler sunar.
            </p>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-blue-900 mb-2">50+</div>
                <div className="text-gray-600">SEO Faktörü</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-blue-900 mb-2">30 sn</div>
                <div className="text-gray-600">Hızlı Analiz</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-blue-900 mb-2">100%</div>
                <div className="text-gray-600">Ücretsiz</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-blue-900 mb-2">AI</div>
                <div className="text-gray-600">Destekli</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SEODemo />
      <Footer />
    </main>
  )
}