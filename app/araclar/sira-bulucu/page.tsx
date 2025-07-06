'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { Search, TrendingUp, MapPin, Globe, Target, BarChart3, Loader2, AlertCircle, CheckCircle, ExternalLink } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useRankCheck } from '@/hooks/use-rank-check'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-gray-900 animate-pulse" />
})

export default function SiraBulucuPage() {
  const [keyword, setKeyword] = useState('')
  const [domain, setDomain] = useState('')
  const [location, setLocation] = useState('Turkey')
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop')
  const rankCheck = useRankCheck()

  const handleSearch = () => {
    if (!keyword.trim() || !domain.trim()) return

    rankCheck.mutate({
      keyword: keyword.trim(),
      domain: domain.trim(),
      location,
      device
    })
  }

  const getPositionColor = (position: number | null) => {
    if (!position) return 'text-gray-600'
    if (position <= 3) return 'text-green-600'
    if (position <= 10) return 'text-yellow-600'
    if (position <= 20) return 'text-orange-600'
    return 'text-red-600'
  }

  const getPositionBg = (position: number | null) => {
    if (!position) return 'bg-gray-500'
    if (position <= 3) return 'bg-green-500'
    if (position <= 10) return 'bg-yellow-500'
    if (position <= 20) return 'bg-orange-500'
    return 'bg-red-500'
  }

  const getPositionLabel = (position: number | null) => {
    if (!position) return 'Bulunamadı'
    if (position <= 3) return 'Mükemmel'
    if (position <= 10) return 'İyi'
    if (position <= 20) return 'Orta'
    return 'Zayıf'
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 text-green-800 rounded-full font-medium mb-6">
              <Search className="w-5 h-5" />
              SEO Aracı
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">Sıra</span> Bulucu
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              Anahtar kelimelerinizin Google'da kaçıncı sırada olduğunu öğrenin.
              Rakiplerinizle karşılaştırın ve SEO stratejinizi geliştirin.
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
                  <Search className="w-8 h-8 text-green-600" />
                  Sıralama Kontrolü
                </h3>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="keyword" className="block text-sm font-medium text-gray-700 mb-2">
                      Anahtar Kelime
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="keyword"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder="seo ajansı"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none text-lg"
                        disabled={rankCheck.isPending}
                      />
                      <Target className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-2">
                      Website Domain
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="domain"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        placeholder="example.com"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none text-lg"
                        disabled={rankCheck.isPending}
                      />
                      <Globe className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        Konum
                      </label>
                      <div className="relative">
                        <select
                          id="location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none text-lg appearance-none"
                          disabled={rankCheck.isPending}
                        >
                          <option value="Turkey">Türkiye</option>
                          <option value="Istanbul, Turkey">İstanbul</option>
                          <option value="Ankara, Turkey">Ankara</option>
                          <option value="Izmir, Turkey">İzmir</option>
                          <option value="United States">ABD</option>
                          <option value="United Kingdom">İngiltere</option>
                          <option value="Germany">Almanya</option>
                        </select>
                        <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="device" className="block text-sm font-medium text-gray-700 mb-2">
                        Cihaz
                      </label>
                      <select
                        id="device"
                        value={device}
                        onChange={(e) => setDevice(e.target.value as 'desktop' | 'mobile')}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none text-lg appearance-none"
                        disabled={rankCheck.isPending}
                      >
                        <option value="desktop">Masaüstü</option>
                        <option value="mobile">Mobil</option>
                      </select>
                    </div>
                  </div>

                  <button
                    onClick={handleSearch}
                    disabled={rankCheck.isPending || !keyword.trim() || !domain.trim()}
                    className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {rankCheck.isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Aranıyor...
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5" />
                        Sıralamayı Bul
                      </>
                    )}
                  </button>

                  {rankCheck.error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center gap-2 text-red-800">
                        <AlertCircle className="w-5 h-5" />
                        <span className="font-medium">Hata:</span>
                      </div>
                      <p className="text-red-700 mt-1">
                        {rankCheck.error.message || 'Bir hata oluştu. Lütfen tekrar deneyin.'}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                    <div>
                      <div className="font-semibold text-gray-900">Gerçek Zamanlı</div>
                      <div>SerpAPI</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">100+</div>
                      <div>Sonuç Taraması</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Ücretsiz</div>
                      <div>Kullanım</div>
                    </div>
                  </div>
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
              {rankCheck.data ? (
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${rankCheck.data.position && rankCheck.data.position <= 10 ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                      <Search className={`w-5 h-5 ${rankCheck.data.position && rankCheck.data.position <= 10 ? 'text-green-600' : 'text-red-600'
                        }`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Sıralama Sonucu</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                      <div className={`text-6xl font-bold mb-2 ${getPositionColor(rankCheck.data.position)}`}>
                        {rankCheck.data.position ? `#${rankCheck.data.position}` : 'Yok'}
                      </div>
                      <div className="text-gray-600 font-medium">Google Sıralaması</div>
                      <div className="text-sm text-gray-500 mt-2">
                        "{rankCheck.data.keyword}" için {rankCheck.data.domain}
                      </div>
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${rankCheck.data.position ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                        {getPositionLabel(rankCheck.data.position)}
                      </div>
                    </div>

                    {rankCheck.data.url && (
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Bulunan Sayfa</h4>
                        <div className="space-y-2">
                          <div className="font-medium text-blue-800">{rankCheck.data.title}</div>
                          <a
                            href={rankCheck.data.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                          >
                            {rankCheck.data.url}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                          {rankCheck.data.snippet && (
                            <p className="text-gray-600 text-sm">{rankCheck.data.snippet}</p>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-900">{rankCheck.data.searchVolume.toLocaleString()}</div>
                        <div className="text-blue-700 text-sm">Aylık Arama</div>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-900">{rankCheck.data.difficulty}</div>
                        <div className="text-purple-700 text-sm">Zorluk Skoru</div>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-900">₺{rankCheck.data.cpc}</div>
                        <div className="text-green-700 text-sm">CPC</div>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-900">
                          {rankCheck.data.totalResults.toLocaleString()}
                        </div>
                        <div className="text-orange-700 text-sm">Toplam Sonuç</div>
                      </div>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-4">İlk 100 Rakip</h4>
                      <div className="space-y-3 max-h-64 overflow-y-auto">
                        {rankCheck.data.competitors.slice(0, 100).map((competitor, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-gray-900 truncate">{competitor.domain}</div>
                              <div className="text-sm text-gray-600 truncate">{competitor.title}</div>
                            </div>
                            <div className="flex items-center gap-2 ml-4">
                              <span className={`font-bold ${getPositionColor(competitor.position)}`}>
                                #{competitor.position}
                              </span>
                              <a
                                href={competitor.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-600"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Öneriler</h4>
                      <ul className="space-y-2 text-blue-800 text-sm">
                        {!rankCheck.data.position && <li>• Bu anahtar kelime için içerik oluşturun</li>}
                        {rankCheck.data.position && rankCheck.data.position > 10 && <li>• İçerik kalitesini artırın</li>}
                        {rankCheck.data.position && rankCheck.data.position > 20 && <li>• Teknik SEO optimizasyonu yapın</li>}
                        <li>• Backlink profilinizi güçlendirin</li>
                        <li>• Sayfa hızını optimize edin</li>
                        <li>• İç linkleme stratejinizi geliştirin</li>
                      </ul>
                    </div>

                    <div className="text-xs text-gray-500 text-center">
                      Arama tarihi: {new Date(rankCheck.data.searchDate).toLocaleString('tr-TR')} •
                      Konum: {rankCheck.data.location} •
                      Cihaz: {device === 'desktop' ? 'Masaüstü' : 'Mobil'}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="text-center py-12">
                    <Search className="w-24 h-24 text-green-100 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Sıralama Kontrolünü Başlatın
                    </h3>
                    <p className="text-gray-600 max-w-sm mx-auto">
                      Anahtar kelimenizi ve domain adresinizi girin,
                      Google'daki sıralamanızı öğrenin.
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
              Sıralama Takibi <span className="text-green-600">Neden Önemli?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Google sıralamanızı düzenli olarak takip etmek, SEO stratejinizin başarısını ölçmenin en etkili yoludur.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performans Takibi</h3>
              <p className="text-gray-600">
                SEO çalışmalarınızın etkisini ölçün ve hangi stratejilerin işe yaradığını görün.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rekabet Analizi</h3>
              <p className="text-gray-600">
                Rakiplerinizin sıralamasını takip edin ve onları geçmek için strateji geliştirin.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hedef Belirleme</h3>
              <p className="text-gray-600">
                Hangi anahtar kelimelerde daha fazla çalışmanız gerektiğini belirleyin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}