'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Brain, Target, Award, ArrowUp, Search } from 'lucide-react'

export default function GoogleRanking() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-900">Google'da</span> Sıra Yükseltme
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI destekli SEO stratejilerimizle Google arama sonuçlarında 
            üst sıralara çıkın ve organik trafiğinizi katlamış olarak artırın.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">
                  <span className="text-blue-500">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-yellow-500">o</span>
                  <span className="text-blue-500">g</span>
                  <span className="text-green-500">l</span>
                  <span className="text-red-500">e</span>
                  <span className="text-gray-700 ml-2">Arama Sonuçları</span>
                </h3>
              </div>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-200"
                >
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-semibold text-blue-600 mb-1">
                      Sizin Siteniz - AI SEO ile Optimize Edildi
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      AI destekli SEO stratejileri ile Google'da 1. sırada...
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        <ArrowUp className="w-3 h-3" />
                        +15 sıra yükseldi
                      </div>
                      <div className="text-xs text-gray-500">www.siteniz.com</div>
                    </div>
                  </div>
                </motion.div>

                {[
                  { rank: 2, title: "Rakip Site 1", desc: "Geleneksel SEO yöntemleri..." },
                  { rank: 3, title: "Rakip Site 2", desc: "Eski SEO teknikleri..." },
                  { rank: 4, title: "Rakip Site 3", desc: "Manuel SEO çalışmaları..." },
                  { rank: 5, title: "Rakip Site 4", desc: "Manuel SEO çalışmaları..." }
                ].map((site, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    className="relative p-4 bg-gray-50 rounded-xl border border-gray-200 opacity-60"
                  >
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {site.rank}
                    </div>
                    <div className="ml-6">
                      <h4 className="text-lg font-medium text-blue-600 mb-1">
                        {site.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {site.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Brain className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                AI Powered SEO
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Yapay Zeka ile
                <span className="text-blue-900 block">Sıra Yükseltme</span>
              </h3>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Geleneksel SEO yöntemleri artık yeterli değil. AI destekli 
                algoritmalarımız Google'ın sürekli değişen kurallarına 
                anında uyum sağlar ve sitenizi üst sıralara taşır.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-900" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Otomatik Optimizasyon
                </h4>
                <p className="text-gray-600 text-sm">
                  AI sürekli sitenizi analiz eder ve otomatik iyileştirmeler yapar
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Akıllı Anahtar Kelime
                </h4>
                <p className="text-gray-600 text-sm">
                  En değerli anahtar kelimeleri AI ile tespit eder ve optimize ederiz
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Makine Öğrenmesi
                </h4>
                <p className="text-gray-600 text-sm">
                  Algoritma sürekli öğrenir ve performansı artırır
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Garantili Sonuç
                </h4>
                <p className="text-gray-600 text-sm">
                  30 gün içinde sıralama artışı garantisi
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-900 mb-2">92%</div>
            <div className="text-gray-600">İlk Sayfa Başarısı</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">3.2x</div>
            <div className="text-gray-600">Trafik Artışı</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
            <div className="text-gray-600">Ortalama Sıra Yükselişi</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">30</div>
            <div className="text-gray-600">Gün İçinde Sonuç</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}