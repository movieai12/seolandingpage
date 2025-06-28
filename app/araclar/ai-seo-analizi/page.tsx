'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { Brain, Sparkles, TrendingUp, Target, Zap, BarChart3, Globe, CheckCircle, AlertTriangle, XCircle } from 'lucide-react'
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-gray-900 animate-pulse" />
})

export default function AISEOAnaliziPage() {
  const [url, setUrl] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleAnalyze = () => {
    if (!url.trim()) return
    
    setIsAnalyzing(true)
    
    // Simulate AI-powered SEO analysis
    setTimeout(() => {
      setResults({
        domain: url.replace(/^https?:\/\//, '').replace(/\/$/, ''),
        aiScore: Math.floor(Math.random() * 20) + 75,
        insights: [
          {
            category: 'İçerik Kalitesi',
            score: Math.floor(Math.random() * 20) + 80,
            icon: 'content',
            recommendations: [
              'Ana anahtar kelime yoğunluğu %2.3 (ideal: %1-3)',
              'İçerik uzunluğu 1,250 kelime (ideal: 1,500+ kelime)',
              'LSI anahtar kelimeler eksik'
            ]
          },
          {
            category: 'Kullanıcı Deneyimi',
            score: Math.floor(Math.random() * 15) + 70,
            icon: 'ux',
            recommendations: [
              'Bounce rate %45 (ideal: <%40)',
              'Ortalama oturum süresi 2:15 (ideal: >3:00)',
              'Sayfa etkileşim oranı düşük'
            ]
          },
          {
            category: 'Teknik Optimizasyon',
            score: Math.floor(Math.random() * 25) + 65,
            icon: 'technical',
            recommendations: [
              'Core Web Vitals skorları iyileştirilebilir',
              'Schema markup eksik',
              'Internal linking zayıf'
            ]
          },
          {
            category: 'Rekabet Analizi',
            score: Math.floor(Math.random() * 30) + 60,
            icon: 'competition',
            recommendations: [
              'Rakipler ortalama 2,500 kelime içerik üretiyor',
              'Backlink profiliniz rakiplerden %40 zayıf',
              'Sosyal medya sinyalleri eksik'
            ]
          }
        ],
        aiRecommendations: [
          {
            priority: 'high',
            title: 'İçerik Genişletme',
            description: 'Mevcut içeriğinizi 1,500+ kelimeye çıkarın ve LSI anahtar kelimeler ekleyin.',
            impact: '+15% organik trafik artışı bekleniyor'
          },
          {
            priority: 'medium',
            title: 'Sayfa Hızı Optimizasyonu',
            description: 'Resim optimizasyonu ve lazy loading ile sayfa hızını artırın.',
            impact: '+8% dönüşüm oranı artışı bekleniyor'
          },
          {
            priority: 'high',
            title: 'Backlink Stratejisi',
            description: 'Yüksek DA\'lı sitelerden kaliteli backlink kazanmaya odaklanın.',
            impact: '+25% domain authority artışı bekleniyor'
          }
        ],
        competitorAnalysis: {
          topCompetitors: [
            { domain: 'competitor1.com', score: 92, gap: 'İçerik kalitesi' },
            { domain: 'competitor2.com', score: 88, gap: 'Backlink profili' },
            { domain: 'competitor3.com', score: 85, gap: 'Teknik SEO' }
          ]
        }
      })
      setIsAnalyzing(false)
    }, 4000)
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'content': return <Target className="w-6 h-6" />
      case 'ux': return <Sparkles className="w-6 h-6" />
      case 'technical': return <Zap className="w-6 h-6" />
      case 'competition': return <BarChart3 className="w-6 h-6" />
      default: return <Brain className="w-6 h-6" />
    }
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 rounded-full font-medium mb-6">
              <Brain className="w-5 h-5" />
              AI Destekli SEO Aracı
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">AI SEO</span> Analizi
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              Yapay zeka destekli en gelişmiş SEO analiz aracımız ile sitenizin potansiyelini keşfedin. 
              Rakip analizi, içerik önerileri ve kişiselleştirilmiş stratejiler.
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
                  <Brain className="w-8 h-8 text-indigo-600" />
                  AI SEO Analizi
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
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none text-lg"
                      />
                      <Globe className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                    </div>
                  </div>

                  <button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing || !url.trim()}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        AI Analiz Ediyor...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        AI Analizi Başlat
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                    <div>
                      <div className="font-semibold text-gray-900">AI Powered</div>
                      <div>Analiz</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Rakip</div>
                      <div>Karşılaştırma</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Özel</div>
                      <div>Öneriler</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Features */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
                  <h4 className="font-semibold text-indigo-900 mb-2 flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Yapay Zeka Avantajları
                  </h4>
                  <ul className="text-indigo-800 text-sm space-y-1">
                    <li>• Rakip analizi ve gap tespiti</li>
                    <li>• Kişiselleştirilmiş içerik önerileri</li>
                    <li>• Trend analizi ve gelecek tahminleri</li>
                    <li>• Otomatik optimizasyon önerileri</li>
                  </ul>
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
                <div className="space-y-6">
                  {/* AI Score */}
                  <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">AI SEO Skoru</h3>
                    </div>

                    <div className="text-center mb-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                      <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text mb-2">
                        {results.aiScore}
                      </div>
                      <div className="text-gray-600 font-medium">AI Optimizasyon Skoru</div>
                      <div className="text-sm text-gray-500 mt-2">{results.domain}</div>
                    </div>

                    {/* Category Insights */}
                    <div className="space-y-4">
                      {results.insights.map((insight: any, index: number) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                {getCategoryIcon(insight.icon)}
                              </div>
                              {insight.category}
                            </h4>
                            <div className="flex items-center gap-2">
                              <span className={`font-bold ${getScoreColor(insight.score)}`}>
                                {insight.score}/100
                              </span>
                              <div className="w-16 h-2 bg-gray-200 rounded-full">
                                <div 
                                  className={`h-2 rounded-full ${getScoreBg(insight.score)}`}
                                  style={{ width: `${insight.score}%` }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            {insight.recommendations.map((rec: string, recIndex: number) => (
                              <div key={recIndex} className="text-sm text-gray-600 flex items-start gap-2">
                                <span className="text-indigo-500 mt-1">•</span>
                                <span>{rec}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI Recommendations */}
                  <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <Sparkles className="w-8 h-8 text-purple-600" />
                      AI Önerileri
                    </h3>

                    <div className="space-y-4">
                      {results.aiRecommendations.map((rec: any, index: number) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="font-semibold text-gray-900">{rec.title}</h4>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(rec.priority)}`}>
                              {rec.priority === 'high' ? 'Yüksek' : rec.priority === 'medium' ? 'Orta' : 'Düşük'} Öncelik
                            </span>
                          </div>
                          <p className="text-gray-600 mb-3">{rec.description}</p>
                          <div className="bg-green-50 rounded-lg p-3">
                            <span className="text-green-800 text-sm font-medium">
                              💡 Beklenen Etki: {rec.impact}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Competitor Analysis */}
                  <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <TrendingUp className="w-8 h-8 text-orange-600" />
                      Rakip Analizi
                    </h3>

                    <div className="space-y-4">
                      {results.competitorAnalysis.topCompetitors.map((comp: any, index: number) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900">{comp.domain}</div>
                            <div className="text-sm text-gray-600">Güçlü alan: {comp.gap}</div>
                          </div>
                          <div className="text-right">
                            <div className={`font-bold ${getScoreColor(comp.score)}`}>
                              {comp.score}/100
                            </div>
                            <div className="text-xs text-gray-500">SEO Skoru</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Brain className="w-12 h-12 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      AI SEO Analizini Başlatın
                    </h3>
                    <p className="text-gray-600 max-w-sm mx-auto">
                      Website URL'nizi girin ve yapay zeka destekli 
                      kapsamlı SEO analizinizi alın.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              AI SEO <span className="text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yapay zeka teknolojisi ile desteklenen gelişmiş SEO analiz özelliklerimizi keşfedin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Akıllı Analiz</h3>
              <p className="text-gray-600">
                Makine öğrenmesi ile sitenizin SEO potansiyelini derinlemesine analiz eder.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kişisel Öneriler</h3>
              <p className="text-gray-600">
                Sitenize özel, uygulanabilir ve etkili SEO önerileri sunar.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trend Analizi</h3>
              <p className="text-gray-600">
                Gelecekteki SEO trendlerini öngörür ve stratejinizi buna göre şekillendirir.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rakip İzleme</h3>
              <p className="text-gray-600">
                Rakiplerinizi sürekli izler ve size avantaj sağlayacak fırsatları tespit eder.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}