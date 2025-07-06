import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { JsonLd } from '@/components/JsonLd'
import { ReactQueryProvider } from '@/lib/react-query'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dijitalfiir.com'),
  title: {
    default: 'Dijitalfiir | AI Destekli SEO Ajansı | Google\'da Zirveye Tırmanın',
    template: '%s | Dijitalfiir'
  },
  description: 'Dijitalfiir ile AI destekli SEO çözümleriyle Google\'da zirveye tırmanın. %34 daha hızlı sonuç garantili teknik SEO, içerik optimizasyonu ve backlink hizmetleri.',
  keywords: ['dijitalfiir', 'SEO ajansı', 'AI SEO', 'Google optimizasyonu', 'teknik SEO', 'içerik SEO', 'backlink'],
  authors: [{ name: 'Dijitalfiir' }],
  creator: 'Dijitalfiir',
  publisher: 'Dijitalfiir',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://dijitalfiir.com',
    title: 'Dijitalfiir | AI Destekli SEO Ajansı | Google\'da Zirveye Tırmanın',
    description: 'Dijitalfiir ile AI destekli SEO çözümleriyle Google\'da zirveye tırmanın. %34 daha hızlı sonuç garantili teknik SEO, içerik optimizasyonu ve backlink hizmetleri.',
    siteName: 'Dijitalfiir',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dijitalfiir - AI Destekli SEO Ajansı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dijitalfiir | AI Destekli SEO Ajansı',
    description: 'AI destekli SEO çözümleriyle Google\'da zirveye tırmanın.',
    images: ['/og-image.jpg'],
    creator: '@dijitalfiir',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://dijitalfiir.com',
    languages: {
      'tr-TR': 'https://dijitalfiir.com',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0D47A1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <JsonLd />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <ReactQueryProvider>
          <div id="__next">
            {children}
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  )
}