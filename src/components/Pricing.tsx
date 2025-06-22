import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Star, MessageCircle, Zap } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const packages = [
    {
      name: "Başlangıç",
      price: "2.500",
      originalPrice: "3.500",
      period: "/ay",
      description: "Küçük işletmeler ve yeni siteler için ideal başlangıç paketi",
      popular: false,
      features: [
        "5 Anahtar Kelime Optimizasyonu",
        "Teknik SEO Analizi",
        "Monthly Performance Raporu",
        "Meta Tag Optimizasyonu",
        "XML Sitemap Oluşturma",
        "Google Search Console Kurulumu",
        "Email Destek"
      ],
      excludedFeatures: [
        "İçerik Üretimi",
        "Link Building",
        "Sosyal Medya Yönetimi"
      ]
    },
    {
      name: "Profesyonel",
      price: "4.500",
      originalPrice: "6.000",
      period: "/ay",
      description: "Büyüyen işletmeler için kapsamlı SEO çözümleri",
      popular: true,
      features: [
        "15 Anahtar Kelime Optimizasyonu",
        "Kapsamlı Teknik SEO",
        "Haftalık Performance Raporu",
        "İçerik Stratejisi & Üretimi",
        "Backlink Building (10 link/ay)",
        "Yerel SEO Optimizasyonu",
        "Google My Business Yönetimi",
        "Rakip Analizi",
        "Öncelikli Destek"
      ],
      excludedFeatures: [
        "24/7 Destek",
        "Sosyal Medya Yönetimi"
      ]
    },
    {
      name: "Kurumsal",
      price: "8.500",
      originalPrice: "12.000",
      period: "/ay",
      description: "Büyük şirketler için enterprise düzeyde SEO hizmetleri",
      popular: false,
      features: [
        "Sınırsız Anahtar Kelime",
        "AI Destekli SEO Stratejisi",
        "Günlük Performance Takibi",
        "Premium İçerik Üretimi",
        "Agresif Backlink Building",
        "Uluslararası SEO",
        "E-ticaret SEO",
        "Özel Hesap Yöneticisi",
        "24/7 Premium Destek",
        "Aylık Strateji Toplantısı"
      ],
      excludedFeatures: []
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            SEO <span className="text-blue-900">Paketlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            İhtiyacınıza uygun paketi seçin ve Google'da zirveye tırmanmaya başlayın. 
            Tüm paketlerimizde para iade garantisi vardır.
          </p>
          
          {/* Discount Banner */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold">
            <Zap className="w-5 h-5" />
            İlk 3 Ay %30 İndirim - Şubat Kampanyası
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                pkg.popular 
                  ? 'border-blue-900 bg-gradient-to-b from-blue-50 to-white' 
                  : 'border-gray-200 hover:border-blue-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-blue-900 text-white px-6 py-2 rounded-full flex items-center gap-2 font-semibold">
                    <Star className="w-4 h-4 fill-current" />
                    En Popüler
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                      ₺{pkg.price}
                    </span>
                    <span className="text-gray-600">{pkg.period}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg text-gray-400 line-through">
                      ₺{pkg.originalPrice}
                    </span>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                      %{Math.round((1 - parseInt(pkg.price) / parseInt(pkg.originalPrice)) * 100)} İndirim
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                
                {pkg.excludedFeatures.map((feature, featureIndex) => (
                  <div key={`excluded-${featureIndex}`} className="flex items-start gap-3 opacity-50">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gray-400 text-xs">×</span>
                    </div>
                    <span className="text-gray-500 line-through">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-blue-900 text-white hover:bg-blue-800 shadow-lg'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Paketi Seç
                </motion.button>
                
                <button className="w-full py-3 border-2 border-green-500 text-green-600 rounded-lg font-medium hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp'tan İletişim
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 space-y-6"
        >
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 bg-blue-50 rounded-lg">
              <Check className="w-6 h-6 text-green-600" />
              <span className="font-medium text-gray-900">14 Gün Para İade Garantisi</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-blue-50 rounded-lg">
              <Check className="w-6 h-6 text-green-600" />
              <span className="font-medium text-gray-900">Uzun Dönem Sözleşme Yok</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-blue-50 rounded-lg">
              <Check className="w-6 h-6 text-green-600" />
              <span className="font-medium text-gray-900">7/24 Müşteri Desteği</span>
            </div>
          </div>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tüm paketlerimiz Google'ın White Hat SEO kurallarına uygun olarak hazırlanmıştır. 
            İlk sonuçları 30 gün içinde görmeye başlayacaksınız.
          </p>
        </motion.div>
      </div>
    </section>
  );
};