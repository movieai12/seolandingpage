'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { BarChart3, Search, TrendingUp, AlertCircle, CheckCircle, Globe, ExternalLink, Loader2, Shield, Link as LinkIcon, Zap } from 'lucide-react'
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

  const getScoreDescription = (score: number) => {
    if (score >= 70) return 'Çok güçlü otorite'
    if (score >= 50) return 'İyi otorite seviyesi'
    if (score >= 30) return 'Orta seviye otorite'
    return 'Zayıf otorite'
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
          <div className="max-w-7xl mx-auto">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                  DA PA Kontrolü
                </h3>

                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3">
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

                  <div className="flex items-end">
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
                          Kontrol Et
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {daPaCheck.error && (
                  <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
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
            </motion.div>

            {/* Results Section */}
            {daPaCheck.data && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Main Results */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* DA PA Scores */}
                  <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                      <h3 className="text-2xl font-bold text-gray-900">Otorite Skorları</h3>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg mb-6">
                      <Globe className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="font-medium text-gray-900">Domain</div>
                        <div className="text-blue-600">{daPaCheck.data.domain}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                        <div className="text-5xl font-bold text-blue-900 mb-2">{daPaCheck.data.da}</div>
                        <div className="text-blue-700 font-medium mb-1">Domain Authority</div>
                        <div className="text-sm text-blue-600">{getScoreLabel(daPaCheck.data.da)}</div>
                        <div className="w-full bg-blue-200 rounded-full h-2 mt-3">
                          <div
                            className={`h-2 rounded-full ${getScoreBg(daPaCheck.data.da)}`}
                            style={{ width: `${daPaCheck.data.da}%` }}
                          />
                        </div>
                        <div className="text-xs text-blue-600 mt-2">{getScoreDescription(daPaCheck.data.da)}</div>
                      </div>

                      <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                        <div className="text-5xl font-bold text-green-900 mb-2">{daPaCheck.data.pa}</div>
                        <div className="text-green-700 font-medium mb-1">Page Authority</div>
                        <div className="text-sm text-green-600">{getScoreLabel(daPaCheck.data.pa)}</div>
                        <div className="w-full bg-green-200 rounded-full h-2 mt-3">
                          <div
                            className={`h-2 rounded-full ${getScoreBg(daPaCheck.data.pa)}`}
                            style={{ width: `${daPaCheck.data.pa}%` }}
                          />
                        </div>
                        <div className="text-xs text-green-600 mt-2">{getScoreDescription(daPaCheck.data.pa)}</div>
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
                  </div>

                  {/* Additional Metrics */}
                  <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Detaylı Metrikler</h3>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <LinkIcon className="w-5 h-5 text-blue-600" />
                          <span className="font-medium text-gray-900">Toplam Backlink</span>
                        </div>
                        <span className="text-2xl font-bold text-gray-900">{daPaCheck.data.backlinks.toLocaleString()}</span>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Globe className="w-5 h-5 text-green-600" />
                          <span className="font-medium text-gray-900">Referring Domains</span>
                        </div>
                        <span className="text-2xl font-bold text-gray-900">{daPaCheck.data.referringDomains.toLocaleString()}</span>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <BarChart3 className="w-5 h-5 text-purple-600" />
                          <span className="font-medium text-gray-900">MozRank</span>
                        </div>
                        <span className="text-2xl font-bold text-gray-900">{daPaCheck.data.mozRank.toFixed(1)}</span>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <TrendingUp className="w-5 h-5 text-orange-600" />
                          <span className="font-medium text-gray-900">MozTrust</span>
                        </div>
                        <span className="text-2xl font-bold text-gray-900">{daPaCheck.data.mozTrust.toFixed(1)}</span>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Shield className="w-5 h-5 text-red-600" />
                          <span className="font-medium text-gray-900">Spam Score</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-gray-900">{daPaCheck.data.spamScore}%</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${daPaCheck.data.spamScore <= 5 ? 'bg-green-100 text-green-800' :
                              daPaCheck.data.spamScore <= 15 ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                            }`}>
                            {daPaCheck.data.spamScore <= 5 ? 'Düşük' :
                              daPaCheck.data.spamScore <= 15 ? 'Orta' : 'Yüksek'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 text-xs text-gray-500 text-center">
                      Son güncelleme: {new Date(daPaCheck.data.lastCrawled).toLocaleDateString('tr-TR')}
                    </div>
                  </div>
                </div>

                {/* Detailed Analysis Table */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Detaylı Link Analizi</h3>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Metrik</th>
                          <th className="text-center py-3 px-4 font-semibold text-gray-900">Değer</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Açıklama</th>
                          <th className="text-center py-3 px-4 font-semibold text-gray-900">Durum</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">Domain Authority</td>
                          <td className="py-3 px-4 text-center">
                            <span className={`text-2xl font-bold ${getScoreColor(daPaCheck.data.da)}`}>
                              {daPaCheck.data.da}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-600">Sitenizin genel otorite seviyesi</td>
                          <td className="py-3 px-4 text-center">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${daPaCheck.data.da >= 70 ? 'bg-green-100 text-green-800' :
                                daPaCheck.data.da >= 40 ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-red-100 text-red-800'
                              }`}>
                              {getScoreLabel(daPaCheck.data.da)}
                            </span>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">Page Authority</td>
                          <td className="py-3 px-4 text-center">
                            <span className={`text-2xl font-bold ${getScoreColor(daPaCheck.data.pa)}`}>
                              {daPaCheck.data.pa}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-600">Sayfanın sıralanma potansiyeli</td>
                          <td className="py-3 px-4 text-center">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${daPaCheck.data.pa >= 70 ? 'bg-green-100 text-green-800' :
                                daPaCheck.data.pa >= 40 ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-red-100 text-red-800'
                              }`}>
                              {getScoreLabel(daPaCheck.data.pa)}
                            </span>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">Toplam Backlink</td>
                          <td className="py-3 px-4 text-center">
                            <span className="text-2xl font-bold text-gray-900">
                              {daPaCheck.data.backlinks.toLocaleString()}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-600">Siteye yönlendiren toplam link sayısı</td>
                          <td className="py-3 px-4 text-center">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${daPaCheck.data.backlinks >= 1000 ? 'bg-green-100 text-green-800' :
                                daPaCheck.data.backlinks >= 100 ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-red-100 text-red-800'
                              }`}>
                              {daPaCheck.data.backlinks >= 1000 ? 'Yüksek' :
                                daPaCheck.data.backlinks >= 100 ? 'Orta' : 'Düşük'}
                            </span>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">Referring Domains</td>
                          <td className="py-3 px-4 text-center">
                            <span className="text-2xl font-bold text-gray-900">
                              {daPaCheck.data.referringDomains.toLocaleString()}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-600">Link veren benzersiz domain sayısı</td>
                          <td className="py-3 px-4 text-center">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${daPaCheck.data.referringDomains >= 100 ? 'bg-green-100 text-green-800' :
                                daPaCheck.data.referringDomains >= 20 ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-red-100 text-red-800'
                              }`}>
                              {daPaCheck.data.referringDomains >= 100 ? 'Yüksek' :
                                daPaCheck.data.referringDomains >= 20 ? 'Orta' : 'Düşük'}
                            </span>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">Spam Score</td>
                          <td className="py-3 px-4 text-center">
                            <span className="text-2xl font-bold text-gray-900">
                              {daPaCheck.data.spamScore}%
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-600">Spam olma olasılığı</td>
                          <td className="py-3 px-4 text-center">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${daPaCheck.data.spamScore <= 5 ? 'bg-green-100 text-green-800' :
                                daPaCheck.data.spamScore <= 15 ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-red-100 text-red-800'
                              }`}>
                              {daPaCheck.data.spamScore <= 5 ? 'Güvenli' :
                                daPaCheck.data.spamScore <= 15 ? 'Dikkat' : 'Riskli'}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {!daPaCheck.data && !daPaCheck.isPending && (
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