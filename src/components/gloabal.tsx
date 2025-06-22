

import { motion } from "framer-motion"
import { Globe, TrendingUp, Target, Zap, BarChart3, Users, Award } from "lucide-react"

// Main Globe Section - EXPORT
export const GlobeSection = () => {
    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"
                />
            </div>

            <div className="relative container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    {/* Left Content - SEO Information */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
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
                                <div className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Global Sıralama Artışı</h3>
                                        <p className="text-gray-400">150+ ülkede arama sonuçlarında üst sıralarda yer alın</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                                        <Target className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Hedefli Trafik</h3>
                                        <p className="text-gray-400">Kaliteli ziyaretçiler ve yüksek dönüşüm oranları</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                                        <Zap className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Hızlı Sonuçlar</h3>
                                        <p className="text-gray-400">30 gün içinde görünür iyileştirmeler</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Globe Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="relative h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center">
                            {/* Globe Image with Animation */}
                            <motion.div
                                // animate={{
                                //     rotate: [0, 360],
                                //     scale: [1, 1.05, 1],
                                // }}
                                // transition={{
                                //     rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                                //     scale: { duration: 4, repeat: Number.POSITIVE_INFINITY },
                                // }}
                                className="relative"
                            >
                                <img
                                    src="/Gemini_Generated_Image_3cd1jw3cd1jw3cd1.png"
                                    alt="Dünya Görseli"
                                    className="w-96 h-96 object-contain drop-shadow-2xl"
                                />

                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 rounded-full blur-2xl"></div>
                            </motion.div>

                            {/* Globe Info Overlay */}
                            <div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm">
                                🌍 Global SEO Kapsamı • 📊 Dünya Çapında Erişim
                            </div>

                            {/* Live Indicator */}
                            <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span>Global SEO Aktif</span>
                            </div>
                        </div>

                        {/* Floating Stats Around Globe */}
                        
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
