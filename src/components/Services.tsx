import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Settings, 
  FileText, 
  Link, 
  Zap, 
  Search, 
  BarChart3,
  Globe,
  Shield
} from 'lucide-react';

export const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: Settings,
      title: "Teknik SEO",
      description: "Site hızı, mobil uyumluluk, SSL, XML sitemap ve teknik altyapı optimizasyonu",
      features: ["Core Web Vitals", "Schema Markup", "Site Hızı", "Mobile-First"]
    },
    {
      icon: FileText,
      title: "İçerik SEO",
      description: "AI destekli içerik stratejisi, anahtar kelime analizi ve içerik optimizasyonu",
      features: ["Anahtar Kelime", "İçerik Stratejisi", "AI Yazım", "Meta Taglar"]
    },
    {
      icon: Link,
      title: "Link Building",
      description: "Kaliteli backlink kazanımı, broken link building ve dijital PR stratejileri",
      features: ["Guest Post", "Broken Link", "Dijital PR", "Authority Links"]
    },
    {
      icon: Zap,
      title: "Hız Optimizasyonu",
      description: "Sayfa yükleme hızını artırma, CDN kurulumu ve performans iyileştirmeleri",
      features: ["CDN Setup", "Image Optimization", "Caching", "Minification"]
    },
    {
      icon: Search,
      title: "Yerel SEO",
      description: "Google My Business optimizasyonu, yerel arama sonuçlarında üst sıralara çıkış",
      features: ["GMB Optimizasyonu", "Yerel Citation", "Review Management", "Local Schema"]
    },
    {
      icon: BarChart3,
      title: "SEO Analitik",
      description: "Detaylı performans raporları, rakip analizi ve SEO KPI takibi",
      features: ["Performans Raporu", "Rakip Analizi", "Keyword Tracking", "ROI Analizi"]
    },
    {
      icon: Globe,
      title: "Uluslararası SEO",
      description: "Çok dilli SEO, hreflang implementasyonu ve global pazar stratejileri",
      features: ["Hreflang Setup", "Multi-language", "Global Strategy", "Cultural SEO"]
    },
    {
      icon: Shield,
      title: "SEO Güvenlik",
      description: "Negatif SEO koruması, spam link temizliği ve güvenlik optimizasyonu",
      features: ["Spam Protection", "Disavow Tool", "Security Audit", "Penalty Recovery"]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Kapsamlı <span className="text-blue-900">SEO Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A'dan Z'ye tüm SEO ihtiyaçlarınızı AI destekli çözümlerle karşılıyoruz. 
            Her hizmetimiz Google'ın en güncel algoritma güncellemelerine uyumludur.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-cyan-50 group-hover:from-blue-900 group-hover:to-blue-800 rounded-xl flex items-center justify-center mb-6 transition-all duration-500">
                <service.icon className="w-8 h-8 text-blue-900 group-hover:text-white transition-colors duration-500" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-2 text-sm text-gray-500"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 py-3 border-2 border-blue-900 text-blue-900 rounded-lg font-medium hover:bg-blue-900 hover:text-white transition-all duration-300"
              >
                Detayları Görüntüle
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 lg:p-12 text-white"
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Hangi Hizmete İhtiyacınız Var?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ücretsiz SEO danışmanlığı ile başlayın. Uzmanlarımız sitenizi analiz edip 
            size özel stratejinizi belirlesin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Ücretsiz Danışmanlık
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
              Tüm Hizmetleri Görüntüle
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};