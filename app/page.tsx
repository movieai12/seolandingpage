import dynamic from 'next/dynamic'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { WhyAISEO } from '@/components/WhyAISEO'

// Lazy load components for better performance
const AISEOSlider = dynamic(() => import('@/components/AISEOSlider'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-3xl" />
})

const GlobeSection = dynamic(() => import('@/components/GlobeSection'), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />
})

const GoogleRanking = dynamic(() => import('@/components/GoogleRanking'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

const RisingGraph = dynamic(() => import('@/components/RisingGraph'), {
  loading: () => <div className="h-96 bg-blue-50 animate-pulse" />
})

const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
})

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="h-96 bg-blue-50 animate-pulse" />
})

const Pricing = dynamic(() => import('@/components/Pricing'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
})

const SEODemo = dynamic(() => import('@/components/SEODemo'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

const Blog = dynamic(() => import('@/components/Blog'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
})

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-gray-900 animate-pulse" />
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyAISEO />
      <AISEOSlider />
      <GlobeSection />
      <GoogleRanking />
      <RisingGraph />
      <Services />
      <Testimonials />
      <Pricing />
      <SEODemo />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}