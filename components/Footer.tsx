'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp
} from 'lucide-react'
import { Logo } from './Logo'
import Link from 'next/link'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <Logo showText={true} className="text-white" />
            
            <p className="text-gray-300 leading-relaxed">
              Türkiye'nin öncü AI destekli SEO ajansı. Google'da zirveye tırmanmak 
              için en gelişmiş teknolojileri kullanıyoruz.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+90 555 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@dijitalfiir.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Beylikdüzü, İstanbul</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              {[
                { name: 'Teknik SEO', href: '/hizmetler' },
                { name: 'İçerik SEO', href: '/hizmetler' },
                { name: 'Link Building', href: '/hizmetler' },
                { name: 'Yerel SEO', href: '/hizmetler' },
                { name: 'E-ticaret SEO', href: '/hizmetler' },
                { name: 'Uluslararası SEO', href: '/hizmetler' },
                { name: 'SEO Danışmanlığı', href: '/hizmetler' },
                { name: 'SEO Eğitimi', href: '/hizmetler' }
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Sayfalar</h3>
            <ul className="space-y-3">
              {[
                { name: 'Ana Sayfa', href: '/' },
                { name: 'Hakkımızda', href: '/hakkimizda' },
                { name: 'Hizmetlerimiz', href: '/hizmetler' },
                { name: 'Blog', href: '/blog' },
                { name: 'İletişim', href: '/iletisim' },
                { name: 'SEO Analizi', href: '/seo-analizi' },
                { name: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
                { name: 'Kullanım Şartları', href: '/kullanim-sartlari' }
              ].map((page, index) => (
                <li key={index}>
                  <Link 
                    href={page.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">SEO Bülteni</h3>
            <p className="text-gray-300 mb-6">
              Haftalık SEO ipuçları ve güncellemeler için abone olun.
            </p>
            
            <div className="space-y-4">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Abone Ol
              </motion.button>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Bizi Takip Edin</h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, name: 'Facebook' },
                  { icon: Twitter, name: 'Twitter' },
                  { icon: Linkedin, name: 'LinkedIn' },
                  { icon: Instagram, name: 'Instagram' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <span>© 2024 dijitalfiir. Tüm hakları saklıdır.</span>
              <Link href="/gizlilik-politikasi" className="hover:text-blue-400 transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-sartlari" className="hover:text-blue-400 transition-colors">
                Kullanım Şartları
              </Link>
              <Link href="/cerez-politikasi" className="hover:text-blue-400 transition-colors">
                Çerez Politikası
              </Link>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300"
              aria-label="Yukarı çık"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}