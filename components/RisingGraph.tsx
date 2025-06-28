'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Award, Users } from 'lucide-react'

export default function RisingGraph() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const dataPoints = [
    { week: 1, value: 20 },
    { week: 2, value: 35 },
    { week: 3, value: 45 },
    { week: 4, value: 60 },
    { week: 5, value: 75 },
    { week: 6, value: 85 },
    { week: 7, value: 95 },
    { week: 8, value: 120 }
  ]

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.3 }
      }
    }
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Haftalık Performans Artışı
                </h3>
                <p className="text-gray-600">Son 8 haftalık organik trafik artışı</p>
              </div>

              <div className="relative h-64">
                <svg width="100%" height="100%" viewBox="0 0 400 200" className="absolute inset-0">
                  <defs>
                    <pattern id="grid" width="50" height="25" patternUnits="userSpaceOnUse">
                      <path d="M 50 0 L 0 0 0 25" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0D47A1" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#0D47A1" stopOpacity="0.05"/>
                    </linearGradient>
                  </defs>
                  
                  <motion.path
                    d="M 25 180 L 50 165 L 100 155 L 150 140 L 200 125 L 250 115 L 300 105 L 350 80 L 350 200 L 25 200 Z"
                    fill="url(#gradient)"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  
                  <motion.path
                    d="M 25 180 L 50 165 L 100 155 L 150 140 L 200 125 L 250 115 L 300 105 L 350 80"
                    fill="none"
                    stroke="#0D47A1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    variants={pathVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  />
                  
                  {dataPoints.map((point, index) => (
                    <motion.circle
                      key={index}
                      cx={25 + (index * 46.4)}
                      cy={200 - (point.value * 1.2)}
                      r="4"
                      fill="#0D47A1"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.1 * index + 1 }}
                    />
                  ))}
                </svg>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  +127% ↗
                </motion.div>
              </div>

              <div className="flex justify-between text-sm text-gray-500 mt-4">
                <span>Hafta 1</span>
                <span>Hafta 4</span>
                <span>Hafta 8</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                Kanıtlanmış Sonuçlar
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-blue-900">%127</span> Trafik Artışı
                <br />8 Haftada
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                AI destekli SEO stratejilerimizle müşterilerimiz ortalama 8 haftada 
                %127 organik trafik artışı yaşıyor. Bu sadece bir vaka değil, 
                standart performansımız.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  İlk Sayfa Garantisi
                </h3>
                <p className="text-gray-600 text-sm">
                  Hedeflenen anahtar kelimelerde ilk sayfa sıralaması garantisi
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  850+ Mutlu Müşteri
                </h3>
                <p className="text-gray-600 text-sm">
                  Türkiye'nin en büyük AI SEO müşteri portföyü
                </p>
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors duration-300"
            >
              Ücretsiz Analiz İsteyin
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}