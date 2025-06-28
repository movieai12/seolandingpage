import dynamic from 'next/dynamic'
import { Header } from '@/components/Header'
import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { Users, Award, Target, TrendingUp, Brain, Zap } from 'lucide-react'
import Image from 'next/image'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-gray-900 animate-pulse" />
})

export const metadata: Metadata = {
  title: 'Hakkımızda | Dijitalfiir AI SEO Ajansı',
  description: 'Türkiye\'nin öncü AI destekli SEO ajansı. 850+ mutlu müşteri, %98 memnuniyet oranı ile SEO\'da lider konumdayız.',
  keywords: ['dijitalfiir hakkında', 'AI SEO ajansı', 'SEO uzmanları', 'dijital pazarlama ekibi'],
  openGraph: {
    title: 'Hakkımızda | Dijitalfiir AI SEO Ajansı',
    description: 'Türkiye\'nin en deneyimli AI SEO ekibi ile tanışın.',
    url: 'https://dijitalfiir.com/hakkimizda',
  },
}

export default function HakkimizdaPage() {
  const stats = [
    { number: "850+", label: "Mutlu Müşteri", icon: Users },
    { number: "%98", label: "Memnuniyet Oranı", icon: Award },
    { number: "2,500+", label: "Başarılı Proje", icon: Target },
    { number: "%127", label: "Ortalama Trafik Artışı", icon: TrendingUp }
  ]

  const team = [
    {
      name: "Ahmet Kaya",
      role: "Kurucu & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "10+ yıl SEO deneyimi, Google sertifikalı uzman"
    },
    {
      name: "Zeynep Özkan",
      role: "AI SEO Uzmanı",
      image: "https://images.pexels.com/photos/3782293/pexels-photo-3782293.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Makine öğrenmesi ve SEO algoritmaları uzmanı"
    },
    {
      name: "Can Demir",
      role: "Teknik SEO Lideri",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Web teknolojileri ve teknik optimizasyon uzmanı"
    },
    {
      name: "Ayşe Yılmaz",
      role: "İçerik Stratejisti",
      image: "https://images.pexels.com/photos/3771823/pexels-photo-3771823.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "İçerik pazarlama ve SEO copywriting uzmanı"
    }
  ]

  const values = [
    {
      icon: Brain,
      title: "İnovasyon",
      description: "En son AI teknolojilerini SEO'ya entegre ediyoruz"
    },
    {
      icon: Target,
      title: "Sonuç Odaklılık",
      description: "Müşteri başarısı bizim en büyük önceliğimiz"
    },
    {
      icon: Zap,
      title: "Hızlı Çözüm",
      description: "Hızlı ve etkili sonuçlar için çalışıyoruz"
    },
    {
      icon: Award,
      title: "Kalite",
      description: "Her projede mükemmellik standardını hedefliyoruz"
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Türkiye'nin <span className="text-blue-900">AI SEO</span> Lideri
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              2018'den beri yapay zeka destekli SEO çözümleriyle 850+ işletmenin 
              Google'da zirveye tırmanmasını sağladık.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Hikayemiz
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  2018 yılında, SEO dünyasında devrim yaratma vizyonuyla yola çıktık. 
                  Geleneksel SEO yöntemlerinin sınırlarını aşarak, yapay zeka teknolojilerini 
                  arama motoru optimizasyonuna entegre eden ilk Türk ajansı olduk.
                </p>
                <p>
                  Bugün, 850+ mutlu müşterimizle Türkiye'nin en büyük AI SEO ajansıyız. 
                  Müşterilerimiz ortalama %127 trafik artışı yaşarken, %98 memnuniyet 
                  oranımızla sektörde lider konumdayız.
                </p>
                <p>
                  Misyonumuz, her büyüklükteki işletmenin Google'da hak ettiği yeri 
                  almasını sağlamak ve dijital dünyada başarılı olmalarına katkıda bulunmaktır.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Neden Bizi Seçmelisiniz?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Türkiye'nin ilk AI destekli SEO ajansı</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Google sertifikalı uzman ekip</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>%34 daha hızlı sonuç garantisi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>24/7 müşteri desteği</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Uzman <span className="text-blue-900">Ekibimiz</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SEO ve AI teknolojilerinde uzman ekibimizle, 
              her projede mükemmellik standardını hedefliyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="192px"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-900 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bu değerler, her projede rehberimiz ve müşterilerimize 
              verdiğimiz hizmetin temelini oluşturur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Başarı Hikayenizi Birlikte Yazalım
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            AI destekli SEO çözümlerimizle Google'da zirveye tırmanmaya hazır mısınız?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Ücretsiz Danışmanlık Al
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
              Ekibimizle Tanış
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}