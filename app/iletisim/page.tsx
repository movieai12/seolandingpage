import dynamic from 'next/dynamic'
import { Header } from '@/components/Header'
import { Metadata } from 'next'

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-gray-900 animate-pulse" />
})

export const metadata: Metadata = {
  title: 'İletişim | Dijitalfiir AI SEO Ajansı',
  description: 'SEO projeleriniz için ücretsiz danışmanlık alın. Uzmanlarımız size özel strateji geliştirecek. İletişim bilgileri ve ofis adresi.',
  keywords: ['dijitalfiir iletişim', 'SEO danışmanlık', 'SEO ajansı iletişim', 'ücretsiz SEO analizi'],
  openGraph: {
    title: 'İletişim | Dijitalfiir AI SEO Ajansı',
    description: 'SEO projeleriniz için ücretsiz danışmanlık alın.',
    url: 'https://dijitalfiir.com/iletisim',
  },
}

export default function IletisimPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              İletişime <span className="text-blue-900">Geçin</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              SEO projeleriniz için ücretsiz danışmanlık alın. 
              Uzmanlarımız size özel strateji geliştirecek.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-blue-900 mb-2">24 Saat</div>
                <div className="text-gray-600">İçinde Yanıt</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-blue-900 mb-2">%100</div>
                <div className="text-gray-600">Ücretsiz Danışmanlık</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-blue-900 mb-2">850+</div>
                <div className="text-gray-600">Mutlu Müşteri</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}