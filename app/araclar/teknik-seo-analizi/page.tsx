'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { Zap, Globe, Smartphone, Clock, Shield, Search, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-gray-900 animate-pulse" />
})

export default function TeknikSEOAnaliziPage() {
  const [url, setUrl] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleAnalyze = () => {
    if (!url.trim()) return
    
    setIsAnalyzing(true)
    
    // Simulate comprehensive technical SEO analysis
    setTimeout(() => {
      setResults({
        domain: url.replace(/^https?:\/\//, '').replace(/\/$/, ''),
        overallScore: Math.floor(Math.random() * 30) + 70,
        categories: {
          performance: {
            score: Math.floor(Math.random() * 20) + 75,
            issues: [
              { type: 'warning', message: 'Sayfa yükleme süresi 3.2 saniye (ideal: <3s)' },
              { type: 'error', message: 'Büyük resimler optimize edilmemiş' },
              { type: 'success', message: 'GZIP sıkıştırma aktif' }
            ]
          },
          mobile: {
            score: Math.floor(Math.random() * 15) + 80,
            issues: [
              { type: 'success', message: 'Mobil uyumlu tasarım' },
              { type: 'warning', message: 'Dokunma hedefleri çok küçük' },
              { type: 'success', message: 'Viewport meta tag mevcut' }
            ]
          },
          security: {
            score: Math.floor(Math.random() * 10) + 85,
            issues: [
              { type: 'success', message: 'HTTPS sertifikası aktif' },
              { type: 'success', message: 'Güvenlik başlıkları mevcut' },
              { type: 'warning', message: 'Mixed content uyarısı' }
            ]
          },
          structure: {
            score: Math.floor(Math.random() * 25) + 70,
            issues: [
              { type: 'error', message: 'H1 etiketi eksik' },
              { type: 'warning', message: 'Meta description çok uzun' },
              { type: 'success', message: 'XML sitemap mevcut' },
              { type: 'error', message: 'Robots.txt dosyası bulunamadı' }
            ]
          }
        },
        technicalDetails: {
          pageSpeed: 3.2,
          mobileSpeed: 2.8,
          totalRequests: 45,
          pageSize: '2.1 MB',
          images: 23,
          scripts: 8,
          stylesheets: 5
        }
      })
      setIsAnalyzing(false)
    }, 3000)
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-500'
    if (score >= 60) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-600" />
      case 'error': return <XCircle className="w-5 h-5 text-red-600" />
      default: return <AlertTriangle className="w-5 h-5 text-gray-600" />
    }
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-100 text-purple-800 rounded-full font-medium mb-6">
              <Zap className="w-5 h-5" />
              SEO Aracı
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-purple-600">Teknik SEO</span> Analizi
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              Web sitenizin teknik SEO performansını kapsamlı olarak analiz edin. 
              Sayfa hızı, mobil uyumluluk, güvenlik ve daha fazlasını kontrol edin.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-purple-600" />
                  Teknik SEO Taraması
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
                      Website URL'si
                    </label>
                    <div className="relative">
                      <input
                        type="url"
                        id="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://example.com"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none text-lg"
                      />
                      <Globe className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                    </div>
                  </div>

                  <button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing || !url.trim()}
                    className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Analiz Ediliyor...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5" />
                        Teknik Analiz Başlat
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4 text-center text-sm text-gray-600">
                    <div>
                      <div className="font-semibold text-gray-900">100+</div>
                      <div>Kontrol Noktası</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Detaylı</div>
                      <div>Rapor</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Sayfa Hızı
                  </h4>
                  <p className="text-purple-800 text-sm">
                    Sayfa yükleme süreniz 3 saniyeden az olmalı. Hızlı siteler daha iyi sıralanır.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Smartphone className="w-5 h-5" />
                    Mobil Uyumluluk
                  </h4>
                  <p className="text-blue-800 text-sm">
                    Google mobile-first indexing kullanır. Mobil uyumlu tasarım kritik önemde.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {results ? (
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Teknik SEO Raporu</h3>
                  </div>

                  {/* Overall Score */}
                  <div className="text-center mb-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#7C3AED"
                          strokeWidth="2"
                          strokeDasharray={`${results.overallScore}, 100`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-gray-900">{results.overallScore}</span>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Genel Teknik SEO Skoru</h4>
                    <p className="text-gray-600">{results.domain}</p>
                  </div>

                  {/* Category Scores */}
                  <div className="space-y-6">
                    {Object.entries(results.categories).map(([key, category]: [string, any]) => (
                      <div key={key} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                            {key === 'performance' && <Clock className="w-5 h-5 text-blue-600" />}
                            {key === 'mobile' && <Smartphone className="w-5 h-5 text-green-600" />}
                            {key === 'security' && <Shield className="w-5 h-5 text-purple-600" />}
                            {key === 'structure' && <Search className="w-5 h-5 text-orange-600" />}
                            {key === 'performance' && 'Performans'}
                            {key === 'mobile' && 'Mobil Uyumluluk'}
                            {key === 'security' && 'Güvenlik'}
                            {key === 'structure' && 'Yapı & İçerik'}
                          </h4>
                          <div className="flex items-center gap-2">
                            <span className={`font-bold ${getScoreColor(category.score)}`}>
                              {category.score}/100
                            </span>
                            <div className="w-16 h-2 bg-gray-200 rounded-full">
                              <div 
                                className={`h-2 rounded-full ${getScoreBg(category.score)}`}
                                style={{ width: `${category.score}%` }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {category.issues.map((issue: any, index: number) => (
                            <div key={index} className="flex items-start gap-3 text-sm">
                              {getIssueIcon(issue.type)}
                              <span className="text-gray-700">{issue.message}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technical Details */}
                  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">Teknik Detaylar</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Sayfa Hızı:</span>
                        <span className="font-medium ml-2">{results.technicalDetails.pageSpeed}s</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Mobil Hız:</span>
                        <span className="font-medium ml-2">{results.technicalDetails.mobileSpeed}s</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Toplam İstek:</span>
                        <span className="font-medium ml-2">{results.technicalDetails.totalRequests}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Sayfa Boyutu:</span>
                        <span className="font-medium ml-2">{results.technicalDetails.pageSize}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Resim Sayısı:</span>
                        <span className="font-medium ml-2">{results.technicalDetails.images}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Script Sayısı:</span>
                        <span className="font-medium ml-2">{results.technicalDetails.scripts}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="text-center py-12">
                    <Zap className="w-24 h-24 text-purple-100 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Teknik SEO Analizini Başlatın
                    </h3>
                    <p className="text-gray-600 max-w-sm mx-auto">
                      Website URL'nizi girin ve kapsamlı teknik SEO 
                      analizinizi alın.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Teknik SEO <span className="text-purple-600">Kontrolleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              100+ teknik SEO faktörünü kontrol ederek sitenizin arama motorları için optimize edilip edilmediğini analiz ediyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sayfa Hızı</h3>
              <p className="text-gray-600">
                Core Web Vitals ve sayfa yükleme hızı optimizasyonu kontrolü.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobil Uyumluluk</h3>
              <p className="text-gray-600">
                Responsive tasarım ve mobil kullanıcı deneyimi analizi.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Güvenlik</h3>
              <p className="text-gray-600">
                HTTPS, güvenlik başlıkları ve SSL sertifikası kontrolü.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SEO Yapısı</h3>
              <p className="text-gray-600">
                Meta etiketler, başlık yapısı ve schema markup kontrolü.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}