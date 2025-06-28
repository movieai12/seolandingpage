'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Search, 
  FileText, 
  Link, 
  MapPin, 
  ShoppingCart, 
  Globe, 
  BarChart3, 
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Search,
      title: "Teknik SEO",
      description: "Site hızı, mobil uyumluluk, indexleme ve teknik altyapı optimizasyonu",
      features: ["Site Hızı Optimizasyonu", "Mobil Uyumluluk", "Schema Markup", "XML Sitemap"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: FileText,
      title: "İçerik SEO",
      description: "Anahtar kelime araştırması, içerik stratejisi ve optimizasyonu",
      features: ["Anahtar Kelime Araştırması", "İçerik Stratejisi", "Blog Yazıları", "Meta Optimizasyonu"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Link,
      title: "Link Building",
      description: "Kaliteli backlink kazanma ve otorite artırma stratejileri",
      features: ["Guest Post", "Broken Link Building", "Resource Page", "Digital PR"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: MapPin,
      title: "Yerel SEO",
      description: "Google My Business ve yerel arama optimizasyonu",
      features: ["Google My Business", "Yerel Anahtar Kelimeler", "NAP Tutarlılığı", "Yerel İçerik"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: ShoppingCart,
      title: "E-ticaret SEO",
      description: "Online mağazalar için özel SEO stratejileri",
      features: ["Ürün Sayfası SEO", "Kategori Optimizasyonu", "Schema Markup", "Teknik SEO"],
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600"
    },
    {
      icon: Globe,
      title: "Uluslararası SEO",
      description: "Çok dilli ve çok bölgeli SEO stratejileri",
      features: ["Hreflang Etiketleri", "Çok Dilli İçerik", "Bölgesel Optimizasyon", "Global Strateji"],
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600"
    }
  ]

  return (
    <section ref={ref} id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            SEO <span className="text-blue-900">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI destekli SEO çözümlerimizle her türlü ihtiyacınıza uygun 
            profesyonel hizmetler sunuyoruz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${service.bgColor} hover:bg-white`}
            >
              <div className={`w-16 h-16 ${service.bgColor} group-hover:bg-gradient-to-r group-hover:${service.color} rounded-xl flex items-center justify-center mb-6 transition-all duration-500`}>
                <service.icon className={`w-8 h-8 ${service.iconColor} group-hover:text-white transition-colors duration-500`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-900">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ x: 5 }}
                className={`inline-flex items-center gap-2 ${service.iconColor} font-medium hover:opacity-80 transition-opacity duration-300`}
              >
                Detayları Gör
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              SEO Sürecimiz
            </h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Kanıtlanmış metodolojimizle adım adım başarıya ulaşın
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analiz",
                description: "Detaylı site ve rakip analizi",
                icon: BarChart3
              },
              {
                step: "02", 
                title: "Strateji",
                description: "Özel SEO stratejisi geliştirme",
                icon: Search
              },
              {
                step: "03",
                title: "Uygulama",
                description: "AI destekli optimizasyon",
                icon: FileText
              },
              {
                step: "04",
                title: "Takip",
                description: "Sürekli izleme ve raporlama",
                icon: Users
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <process.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-200 mb-2">{process.step}</div>
                <h4 className="text-xl font-semibold mb-2">{process.title}</h4>
                <p className="text-blue-100">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}