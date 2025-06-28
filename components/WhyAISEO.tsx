'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Zap, Target, BarChart3 } from 'lucide-react'

export function WhyAISEO() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: Brain,
      title: "AI Destekli Analizler",
      description: "Makine öğrenmesi algoritmaları ile web sitenizin SEO potansiyelini maksimuma çıkarıyoruz."
    },
    {
      icon: Zap,
      title: "Gerçek Zamanlı Optimizasyon",
      description: "Sürekli izleme ve otomatik optimizasyon ile 7/24 performansınızı artırıyoruz."
    },
    {
      icon: Target,
      title: "%34 Daha Hızlı Sonuç",
      description: "Geleneksel SEO yöntemlerine göre çok daha hızlı ve etkili sonuçlar elde edin."
    },
    {
      icon: BarChart3,
      title: "Veri Odaklı Strateji",
      description: "Büyük veri analizi ile rakip analizi yaparak en doğru stratejileri belirliyoruz."
    }
  ]

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
            Neden <span className="text-blue-900">AI SEO?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Yapay zeka teknolojisiyle desteklenen SEO çözümlerimiz, 
            geleneksel yöntemlerin ötesinde performans sunar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 hover:from-blue-900 hover:to-blue-800 transition-all duration-500 hover:text-white"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-900 group-hover:bg-white rounded-xl flex items-center justify-center transition-colors duration-500">
                <feature.icon className="w-8 h-8 text-white group-hover:text-blue-900 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-white transition-colors duration-500">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-blue-50 transition-colors duration-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-4xl lg:text-5xl font-bold mb-2"
              >
                2.3x
              </motion.div>
              <p className="text-blue-100">Daha Hızlı Indexlenme</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-4xl lg:text-5xl font-bold mb-2"
              >
                %89
              </motion.div>
              <p className="text-blue-100">Müşteri Memnuniyeti</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-4xl lg:text-5xl font-bold mb-2"
              >
                24/7
              </motion.div>
              <p className="text-blue-100">Sürekli Monitoring</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}