import dynamic from 'next/dynamic'
import { Header } from '@/components/Header'
import { Metadata } from 'next'

const Blog = dynamic(() => import('@/components/Blog'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-gray-900 animate-pulse" />
})

export const metadata: Metadata = {
  title: 'SEO Blog | Dijitalfiir',
  description: 'SEO dünyasındaki en güncel gelişmeler, stratejiler ve ipuçları. Uzman yazarlarımızdan SEO rehberleri ve case study\'ler.',
  keywords: ['SEO blog', 'SEO rehberleri', 'SEO ipuçları', 'dijital pazarlama blog', 'arama motoru optimizasyonu'],
  openGraph: {
    title: 'SEO Blog | Dijitalfiir',
    description: 'SEO dünyasındaki en güncel gelişmeleri ve uzman görüşlerini keşfedin.',
    url: 'https://dijitalfiir.com/blog',
  },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SEO <span className="text-blue-900">Blog</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              SEO dünyasındaki en güncel gelişmeleri, stratejileri ve ipuçlarını 
              uzman yazarlarımızdan öğrenin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-900 focus:outline-none text-lg"
              />
              <button className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors duration-300">
                Bültene Abone Ol
              </button>
            </div>
          </div>
        </div>
      </section>

      <Blog />
      <Footer />
    </main>
  )
}