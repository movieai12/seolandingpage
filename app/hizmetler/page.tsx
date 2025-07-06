import dynamic from 'next/dynamic'
import { Header } from '@/components/Header'
import { Metadata } from 'next'

// Lazy load components
const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-gray-900 animate-pulse" />
})

export const metadata: Metadata = {
  title: 'SEO Hizmetlerimiz | Dijitalfiir',
  description: 'Teknik SEO, İçerik SEO, Link Building, Yerel SEO ve daha fazlası. AI destekli SEO hizmetlerimizle Google\'da zirveye tırmanın.',
  keywords: ['SEO hizmetleri', 'teknik SEO', 'içerik SEO', 'link building', 'yerel SEO', 'e-ticaret SEO'],
  openGraph: {
    title: 'SEO Hizmetlerimiz | Dijitalfiir',
    description: 'AI destekli kapsamlı SEO hizmetleri ile Google\'da üst sıralara çıkın.',
    url: 'https://dijitalfiir.com/hizmetler',
  },
}

export default function HizmetlerPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SEO <span className="text-blue-900">Hizmetlerimiz</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              AI destekli SEO çözümlerimizle Google'da zirveye tırmanın. 
              Her ihtiyaca uygun profesyonel hizmetler sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors duration-300">
                Ücretsiz Danışmanlık Al
              </button>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Footer />
    </main>
  )
}