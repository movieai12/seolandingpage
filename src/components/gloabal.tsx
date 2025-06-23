

import { motion } from "framer-motion"
import { Globe, TrendingUp, Target, Zap } from "lucide-react"
import { memo, useMemo } from "react"

// Memoized background effects component
const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 pointer-events-none">
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.05, 0.1, 0.05],
      }}
      transition={{
        duration: 12,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        repeatType: "loop",
      }}
      className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-2xl"
    />
    <motion.div
      animate={{
        scale: [1.05, 1, 1.05],
        opacity: [0.05, 0.08, 0.05],
      }}
      transition={{
        duration: 15,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        repeatType: "loop",
      }}
      className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-2xl"
    />
  </div>
))

BackgroundEffects.displayName = "BackgroundEffects"

// Memoized feature card component
const FeatureCard = memo(
  ({
    icon: Icon,
    title,
    description,
    gradient,
  }: {
    icon: any
    title: string
    description: string
    gradient: string
  }) => (
    <div className="flex items-center gap-4 p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
      <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  ),
)

FeatureCard.displayName = "FeatureCard"

// Memoized globe content component
const GlobeContent = memo(() => {
  const globeVariants = useMemo(
    () => ({
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    }),
    [],
  )

  return (
    <motion.div
      variants={globeVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative"
    >
      <div className="relative h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center">
        {/* Globe Image with Subtle Animation */}
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            repeatType: "loop",
          }}
          className="relative"
        >
          <img
            src="/Gemini_Generated_Image_3cd1jw3cd1jw3cd1.png"
            alt="Dünya Görseli"
            className="w-96 h-96 object-contain drop-shadow-2xl"
            loading="lazy"
          />

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-cyan-400/10 rounded-full blur-xl"></div>
        </motion.div>

        {/* Globe Info Overlay */}
        <div className="absolute bottom-4 left-4 bg-gray-900/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm">
          🌍 Global SEO Kapsamı • 📊 Dünya Çapında Erişim
        </div>

        {/* Live Indicator */}
        <div className="absolute top-4 right-4 bg-gray-900/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Global SEO Aktif</span>
        </div>
      </div>
    </motion.div>
  )
})

GlobeContent.displayName = "GlobeContent"

// Main Globe Section - EXPORT
export const GlobeSection = memo(() => {
  // Memoized feature data
  const features = useMemo(
    () => [
      {
        icon: TrendingUp,
        title: "Global Sıralama Artışı",
        description: "150+ ülkede arama sonuçlarında üst sıralarda yer alın",
        gradient: "from-blue-500 to-blue-600",
      },
      {
        icon: Target,
        title: "Hedefli Trafik",
        description: "Kaliteli ziyaretçiler ve yüksek dönüşüm oranları",
        gradient: "from-purple-500 to-purple-600",
      },
      {
        icon: Zap,
        title: "Hızlı Sonuçlar",
        description: "30 gün içinde görünür iyileştirmeler",
        gradient: "from-green-500 to-green-600",
      },
    ],
    [],
  )

  // Memoized animation variants
  const contentVariants = useMemo(
    () => ({
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
    }),
    [],
  )

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      <BackgroundEffects />

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content - SEO Information */}
          <div className="space-y-8">
            <motion.div
              variants={contentVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg">
                <Globe className="w-5 h-5" />
                <span>Global SEO Çözümleri</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">
                  Dünya Çapında
                </span>
                <br />
                SEO Hakimiyeti
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                Arama motorlarında global başarı elde edin. AI destekli SEO stratejilerimizle dünyanın her yerinden
                müşterilerinize ulaşın ve rakiplerinizi geride bırakın.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <FeatureCard {...feature} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Globe Image */}
          <GlobeContent />
        </div>
      </div>
    </section>
  )
})

GlobeSection.displayName = "GlobeSection"
