import dynamic from 'next/dynamic'
import { Header } from '@/components/Header'
import { Metadata } from 'next'

const Pricing = dynamic(() => import('@/components/Pricing'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-gray-900 animate-pulse" />
})

export const metadata: Metadata = {
  title: 'SEO Fiyatları | Dijitalfiir',
  description: 'AI destekli SEO hizmetlerimizin fiyatları. Başlangıç, Profesyonel ve Kurumsal paketlerimizi inceleyin. İlk 3 ay %30 indirim!',
  keywords: ['SEO fiyatları', 'SEO paketleri', 'SEO hizmet fiyatları', 'AI SEO fiyat', 'dijitalfiir fiyat'],
  openGraph: {
    title: 'SEO Fiyatları | Dijitalfiir',
    description: 'İhtiyacınıza uygun SEO paketini seçin ve Google\'da zirveye tırmanın.',
    url: 'https://dijitalfiir.com/fiyatlar',
  },
}

export default function FiyatlarPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SEO <span className="text-blue-900">Fiyatlarımız</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              İhtiyacınıza uygun paketi seçin ve Google'da zirveye tırmanmaya başlayın. 
              Tüm paketlerimizde para iade garantisi vardır.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold text-lg">
              🎉 İlk 3 Ay %30 İndirim - Şubat Kampanyası
            </div>
          </div>
        </div>
      </section>

      <Pricing />
      <Footer />
    </main>
  )
}