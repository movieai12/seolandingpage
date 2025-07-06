'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { BarChart3, Search, TrendingUp, AlertCircle, CheckCircle, Globe, ExternalLink, Loader2 } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useDAPACheck } from '@/hooks/use-da-pa-check'
import { DAPAResponse } from '@/types/api'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-gray-900 animate-pulse" />
})

export default function DAPACheckerPage() {
  const [url, setUrl] = useState('')
  const daPaCheck = useDAPACheck()

  const handleAnalyze = () => {
    if (!url.trim()) return
    daPaCheck.mutate({ url: url.trim() })
  }

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-green-600'
    if (score >= 40) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreBg = (score: number) => {
    if (score >= 70) return 'bg-green-500'
    if (score >= 40) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const getScoreLabel = (score: number) => {
    if (score >= 70) return 'Mükemmel'
    if (score >= 50) return 'İyi'
    if (score >= 30) return 'Orta'
    return 'Zayıf'
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 text-blue-800 rounded-full font-medium mb-6">
              <BarChart3 className="w-5 h-5" />
              SEO Aracı
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-900">DA PA</span> Checker
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              Domain Authority (DA) ve Page Authority (PA) değerlerini anında kontrol edin. 
              Sitenizin otorite skorunu öğrenin ve rakiplerinizle karşılaştırın.
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
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                  DA PA Kontrolü
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
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-900 focus:outline-none text-lg"
                        disabled={daPaCheck.isPending}
                      />
                      <Globe className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                    </div>
                  </div>

                  <button
                    onClick={handleAnalyze}
                    disabled={daPaCheck.isPending || !url.trim()}
                    className="w-full bg-blue-900 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {daPaCheck.isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Analiz Ediliyor...
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5" />
                        DA PA Kontrolü Yap
                      </>
                    )}
                  </button>

                  {daPaCheck.error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center gap-2 text-red-800">
                        <AlertCircle className="w-5 h-5" />
                        <span className="font-medium">Hata:</span>
                      </div>
                      <p className="text-red-700 mt-1">
                        {daPaCheck.error.message || 'Bir hata oluştu. Lütfen tekrar deneyin.'}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4 text-center text-sm text-gray-600">
                    <div>
                      <div className="font-semibold text-gray-900">Gerçek Zamanlı</div>
                      <div>Moz API</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Ücretsiz</div>
                      <div>Kullanım</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Domain Authority (DA) Nedir?</h4>
                  <p className="text-blue-800 text-sm">
                    Moz tarafından geliştirilen 1-100 arası bir skor. Sitenizin arama motorlarında 
                    ne kadar güvenilir olduğunu gösterir.
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-semibold text-green-900 mb-2">Page Authority (PA) Nedir?</h4>
                  <p className="text-green-800 text-sm">
                    Belirli bir sayfanın arama sonuçlarında sıralanma potansiyelini 
                    1-100 arası skorla değerlendirir.
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
              {daPaCheck.data ? (
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Analiz Sonuçları</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <Globe className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="font-medium text-gray-900">Domain</div>
                        <div className="text-blue-600">{daPaCheck.data.domain}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                        <div className="text-4xl font-bold text-blue-900 mb-2">{daPaCheck.data.da}</div>
                        <div className="text-blue-700 font-medium">Domain Authority</div>
                        <div className="text-sm text-blue-600 mt-1">{getScoreLabel(daPaCheck.data.da)}</div>
                        <div className="w-full bg-blue-200 rounded-full h-2 mt-3">
                          <div 
                            className={`h-2 rounded-full ${getScoreBg(daPaCheck.data.da)}`}
                            style={{ width: `${daPaCheck.data.da}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                        <div className="text-4xl font-bold text-green-900 mb-2">{daPaCheck.data.pa}</div>
                        <div className="text-green-700 font-medium">Page Authority</div>
                        <div className="text-sm text-green-600 mt-1">{getScoreLabel(daPaCheck.data.pa)}</div>
                        <div className="w-full bg-green-200 rounded-full h-2 mt-3">
                          <div 
                            className={`h-2 rounded-full ${getScoreBg(daPaCheck.data.pa)}`}
                            style={{ width: `${daPaCheck.data.pa}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">{daPaCheck.data.backlinks.toLocaleString()}</div>
                        <div className="text-gray-600 text-sm">Toplam Backlink</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">{daPaCheck.data.referringDomains.toLocaleString()}</div>
                        <div className="text-gray-600 text-sm">Referring Domains</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">{daPaCheck.data.mozRank.toFixed(1)}</div>
                        <div className="text-gray-600 text-sm">MozRank</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">{daPaCheck.data.spamScore}%</div>
                        <div className="text-gray-600 text-sm">Spam Score</div>
                      </div>
                    </div>

                    <div className="p-6 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Öneriler</h4>
                      <ul className="space-y-2 text-blue-800 text-sm">
                        {daPaCheck.data.da < 30 && <li>• Kaliteli backlink kazanmaya odaklanın</li>}
                        {daPaCheck.data.pa < 40 && <li>• Sayfa içi SEO optimizasyonu yapın</li>}
                        {daPaCheck.data.spamScore > 5 && <li>• Spam skorunuzu düşürmek için zararlı linkleri temizleyin</li>}
                        <li>• Düzenli içerik üretimi yapın</li>
                        <li>• Teknik SEO sorunlarını giderin</li>
                      </ul>
                    </div>

                    <div className="text-xs text-gray-500 text-center">
                      Son güncelleme: {new Date(daPaCheck.data.lastCrawled).toLocaleDateString('tr-TR')}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="text-center py-12">
                    <BarChart3 className="w-24 h-24 text-blue-100 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      DA PA Analizini Başlatın
                    </h3>
                    <p className="text-gray-600 max-w-sm mx-auto">
                      Website URL'nizi girin ve Domain Authority ile Page Authority 
                      skorlarınızı öğrenin.
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
              Neden DA PA <span className="text-blue-900">Önemli?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Domain ve Page Authority skorları, SEO stratejinizi belirlemede kritik öneme sahiptir.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rekabet Analizi</h3>
              <p className="text-gray-600">
                Rakiplerinizin DA PA skorlarını öğrenerek kendi stratejinizi belirleyin.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SEO Performansı</h3>
              <p className="text-gray-600">
                Yüksek DA PA skorları, arama motorlarında daha iyi sıralama anlamına gelir.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <ExternalLink className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Link Building</h3>
              <p className="text-gray-600">
                Hangi sitelerden backlink almanız gerektiğini belirlemede yardımcı olur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}