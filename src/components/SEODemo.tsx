import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, TrendingUp, AlertCircle, CheckCircle, Clock } from 'lucide-react';

export const SEODemo: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState('');

  const handleAnalyze = () => {
    if (!websiteUrl.trim()) return;
    
    setIsAnalyzing(true);
    setShowResults(false);
    
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };

  const seoMetrics = [
    {
      name: "Teknik SEO",
      score: 87,
      color: "text-green-600",
      bgColor: "bg-green-500",
      issues: 3,
      status: "İyi"
    },
    {
      name: "İçerik Kalitesi",
      score: 92,
      color: "text-blue-600",
      bgColor: "bg-blue-500",
      issues: 1,
      status: "Mükemmel"
    },
    {
      name: "Sayfa Hızı",
      score: 78,
      color: "text-yellow-600",
      bgColor: "bg-yellow-500",
      issues: 5,
      status: "Orta"
    },
    {
      name: "Mobil Uyumluluk",
      score: 95,
      color: "text-green-600",
      bgColor: "bg-green-500",
      issues: 1,
      status: "Mükemmel"
    },
    {
      name: "Backlink Profili",
      score: 65,
      color: "text-red-600",
      bgColor: "bg-red-500",
      issues: 8,
      status: "Zayıf"
    },
    {
      name: "Kullanıcı Deneyimi",
      score: 84,
      color: "text-green-600",
      bgColor: "bg-green-500",
      issues: 4,
      status: "İyi"
    }
  ];

  const overallScore = Math.round(seoMetrics.reduce((acc, metric) => acc + metric.score, 0) / seoMetrics.length);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-900">Ücretsiz</span> SEO Analizi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Web sitenizin SEO performansını anında analiz edin. 
            AI destekli aracımız 50+ faktörü kontrol eder ve size özel öneriler sunar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Analysis Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Sitenizi Hemen Test Edin
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                    Website URL'nizi Girin
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      id="website"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      placeholder="https://example.com"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-900 focus:outline-none text-lg"
                    />
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                  </div>
                </div>

                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing || !websiteUrl.trim()}
                  className="w-full bg-blue-900 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isAnalyzing ? (
                    <>
                      <Clock className="w-5 h-5 animate-spin" />
                      Analiz Ediliyor...
                    </>
                  ) : (
                    <>
                      <TrendingUp className="w-5 h-5" />
                      Ücretsiz Analiz Başlat
                    </>
                  )}
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div>
                    <div className="font-semibold text-gray-900">50+</div>
                    <div>SEO Faktörü</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">30 sn</div>
                    <div>Hızlı Analiz</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">100%</div>
                    <div>Ücretsiz</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features List */}
            {/* <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Analiz Kapsamı:</h4>
              <div className="space-y-3">
                {[
                  "Teknik SEO Denetimi",
                  "Anahtar Kelime Analizi",
                  "Sayfa Hızı Testi",
                  "Mobil Uyumluluk",
                  "Meta Tag Kontrolü",
                  "Backlink Profil Analizi"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div> */}
          </motion.div>

          {/* Results Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {showResults ? (
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    SEO Analiz Sonuçları
                  </h3>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <motion.path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#0D47A1"
                        strokeWidth="2"
                        strokeDasharray={`${overallScore}, 100`}
                        initial={{ strokeDasharray: "0, 100" }}
                        animate={{ strokeDasharray: `${overallScore}, 100` }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-gray-900">{overallScore}</span>
                      <span className="text-sm text-gray-600">/100</span>
                    </div>
                  </div>
                  <p className="text-gray-600">Genel SEO Skoru</p>
                </div>

                <div className="space-y-4">
                  {seoMetrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          {metric.score >= 85 ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : metric.score >= 70 ? (
                            <AlertCircle className="w-5 h-5 text-yellow-600" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-red-600" />
                          )}
                          <span className="font-medium text-gray-900">{metric.name}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-sm font-medium ${metric.color}`}>
                          {metric.status}
                        </span>
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <motion.div
                            className={`h-full rounded-full ${metric.bgColor}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${metric.score}%` }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                          />
                        </div>
                        <span className="text-sm font-bold text-gray-900 w-8">
                          {metric.score}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Detaylı Rapor İçin
                  </h4>
                  <p className="text-blue-800 text-sm mb-4">
                    Tüm sorunları ve çözüm önerilerini içeren 50+ sayfalık 
                    detaylı rapor için iletişime geçin.
                  </p>
                  <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors">
                    Detaylı Rapor İste
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 pb-12 shadow-2xl">
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-blue-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    SEO Analizini Başlatın
                  </h3>
                  <p className="text-gray-600 max-w-sm mx-auto">
                    Website URL'nizi girin ve AI destekli SEO analizimizle 
                    sitenizin performansını öğrenin.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};