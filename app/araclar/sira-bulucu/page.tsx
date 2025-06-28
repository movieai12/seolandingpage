'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { Search, TrendingUp, MapPin, Globe, Target, BarChart3 } from 'lucide-react'
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-gray-900 animate-pulse" />
})

export default function SiraBulucuPage() {
  const [keyword, setKeyword] = useState('')
  const [domain, setDomain] = useState('')
  const [location, setLocation] = useState('turkey')
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleSearch = () => {
    if (!keyword.trim() || !domain.trim()) return
    
    setIsSearching(true)
    
    // Simulate API call
    setTimeout(() => {
      const position = Math.floor(Math.random() * 100) + 1
      setResults({
        keyword,
        domain: domain.replace(/^https?:\/\//, '').replace(/\/$/, ''),
        position,
        url: `https://${domain.replace(/^https?:\/\//, '').replace(/\/$/, '')}/example-page`,
        searchVolume: Math.floor(Math.random() * 10000) + 500,
        difficulty: Math.floor(Math.random() * 100) + 1,
        cpc: (Math.random() * 5 + 0.5).toFixed(2),
        competitors: [
          { domain: 'competitor1.com', position: Math.floor(Math.random() * 10) + 1 },
          { domain: 'competitor2.com', position: Math.floor(Math.random() * 10) + 1 },
          { domain: 'competitor3.com', position: Math.floor(Math.random() * 10) + 1 }
        ]
      })
      setIsSearching(false)
    }, 2000)
  }

  const getPositionColor = (position: number) => {
    if (position <= 3) return 'text-green-600'
    if (position <= 10) return 'text-yellow-600'
    if (position <= 20) return 'text-orange-600'
    return 'text-red-600'
  }

  const getPositionBg = (position: number) => {
    if (position <= 3) return 'bg-green-500'
    if (position <= 10) return 'bg-yellow-500'
    if (position <= 20) return 'bg-orange-500'
    return 'bg-red-500'
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
                      />
                      <Globe className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                    </div>
                  </div>

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
                      >
                        <option value="turkey">Türkiye</option>
                        <option value="istanbul">İstanbul</option>
                        <option value="ankara">Ankara</option>
                        <option value="izmir">İzmir</option>
                        <option value="global">Global</option>
                      </select>
                      <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <button
                    onClick={handleSearch}
                    disabled={isSearching || !keyword.trim() || !domain.trim()}
                    className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSearching ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Aranıyor...
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5" />
                        Sıralamayı Bul
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                    <div>
                      <div className="font-semibold text-gray-900">Gerçek Zamanlı</div>
                      <div>Sonuçlar</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">100+</div>
                      <div>Konum</div>
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
              {results ? (
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      results.position <= 10 ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      <Search className={`w-5 h-5 ${
                        results.position <= 10 ? 'text-green-600' : 'text-red-600'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Sıralama Sonucu</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                      <div className={`text-6xl font-bold mb-2 ${getPositionColor(results.position)}`}>
                        #{results.position}
                      </div>
                      <div className="text-gray-600 font-medium">Google Sıralaması</div>
                      <div className="text-sm text-gray-500 mt-2">
                        "{results.keyword}" için {results.domain}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-900">{results.searchVolume.toLocaleString()}</div>
                        <div className="text-blue-700 text-sm">Aylık Arama</div>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-900">{results.difficulty}</div>
                        <div className="text-purple-700 text-sm">Zorluk Skoru</div>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-900">₺{results.cpc}</div>
                        <div className="text-green-700 text-sm">CPC</div>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-900">
                          {results.position <= 10 ? 'İlk Sayfa' : 'Sonraki Sayfa'}
                        </div>
                        <div className="text-orange-700 text-sm">Durum</div>
                      </div>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-4">Rakip Analizi</h4>
                      <div className="space-y-3">
                        {results.competitors.map((competitor: any, index: number) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                            <span className="text-gray-700">{competitor.domain}</span>
                            <span className={`font-bold ${getPositionColor(competitor.position)}`}>
                              #{competitor.position}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Öneriler</h4>
                      <ul className="space-y-2 text-blue-800 text-sm">
                        {results.position > 10 && <li>• İçerik kalitesini artırın</li>}
                        {results.position > 20 && <li>• Teknik SEO optimizasyonu yapın</li>}
                        <li>• Backlink profilinizi güçlendirin</li>
                        <li>• Sayfa hızını optimize edin</li>
                      </ul>
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