"use client"

import React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Search, TrendingUp, Target, Zap, BarChart3, Globe, Rocket } from "lucide-react"

const seoTips = [
    {
        id: 1,
        title: "AI Anahtar Kelime Analizi",
        description:
            "Yapay zeka ile rakiplerinizin kullandığı anahtar kelimeleri keşfedin ve kendi stratejinizi geliştirin.",
        icon: Brain,
        color: "from-purple-500 to-pink-500",
        stats: "+340% Anahtar Kelime Keşfi",
        image: "🧠",
    },
    {
        id: 2,
        title: "Otomatik İçerik Optimizasyonu",
        description: "AI algoritmaları ile içeriklerinizi Google'ın sevdiği formatta otomatik olarak optimize edin.",
        icon: Zap,
        color: "from-blue-500 to-cyan-500",
        stats: "+180% İçerik Performansı",
        image: "⚡",
    },
    {
        id: 3,
        title: "Gerçek Zamanlı Sıralama Takibi",
        description: "Anahtar kelimelerinizin sıralamasını 7/24 takip edin ve anında bildirim alın.",
        icon: TrendingUp,
        color: "from-green-500 to-emerald-500",
        stats: "+95% Sıralama Artışı",
        image: "📈",
    },
    {
        id: 4,
        title: "Akıllı Backlink Stratejisi",
        description: "AI ile kaliteli backlink fırsatlarını keşfedin ve otomatik outreach kampanyaları başlatın.",
        icon: Target,
        color: "from-orange-500 to-red-500",
        stats: "+250% Kaliteli Backlink",
        image: "🎯",
    },
    {
        id: 5,
        title: "Teknik SEO Otomasyonu",
        description: "Site hızı, mobil uyumluluk ve teknik sorunları AI ile otomatik tespit edin ve çözün.",
        icon: Globe,
        color: "from-indigo-500 to-purple-500",
        stats: "+160% Site Performansı",
        image: "🌐",
    },
]

export const AISEOSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % seoTips.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % seoTips.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + seoTips.length) % seoTips.length)
    }

    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                    }}
                    transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full blur-xl"
                />
            </div>

            <div className="relative container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-900 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg mb-6">
                        <Brain className="w-5 h-5" />
                        <span>AI Destekli SEO İpuçları</span>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                        <span className="text-transparent bg-gradient-to-r from-blue-900 via-purple-600 to-cyan-600 bg-clip-text">
                            Yapay Zeka ile
                        </span>
                        <br />
                        SEO'da Lider Olun
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        En son AI teknolojileri ile SEO stratejilerinizi güçlendirin ve rakiplerinizi geride bırakın
                    </p>
                </motion.div>

                {/* Slider Container */}
                <div
                    className="relative max-w-6xl mx-auto"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: 300 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -300 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className={`absolute inset-0 bg-gradient-to-br ${seoTips[currentSlide].color}`}
                            >
                                <div className="relative h-full flex items-center">
                                    <div className="container mx-auto px-8">
                                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                                            {/* Content */}
                                            <div className="text-white space-y-6">
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="flex items-center gap-4"
                                                >
                                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                                        {React.createElement(seoTips[currentSlide].icon, { className: "w-8 h-8" })}
                                                    </div>
                                                    <div className="text-sm font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                                        {seoTips[currentSlide].stats}
                                                    </div>
                                                </motion.div>

                                                <motion.h3
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.3 }}
                                                    className="text-4xl lg:text-5xl font-bold leading-tight"
                                                >
                                                    {seoTips[currentSlide].title}
                                                </motion.h3>

                                                <motion.p
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.4 }}
                                                    className="text-xl text-white/90 leading-relaxed"
                                                >
                                                    {seoTips[currentSlide].description}
                                                </motion.p>

                                                <motion.button
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.5 }}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-xl"
                                                >
                                                    <Rocket className="w-5 h-5" />
                                                    Hemen Başla
                                                </motion.button>
                                            </div>

                                            {/* Visual */}
                                            <div className="relative">
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.3 }}
                                                    className="relative"
                                                >
                                                    {/* Main Visual */}
                                                    <div className="text-9xl text-center mb-8">{seoTips[currentSlide].image}</div>

                                                    {/* Floating Elements */}
                                                    <motion.div
                                                        animate={{
                                                            y: [-10, 10, -10],
                                                            rotate: [0, 5, -5, 0],
                                                        }}
                                                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                                                        className="absolute top-4 right-4 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                                                    >
                                                        <BarChart3 className="w-8 h-8 text-white" />
                                                    </motion.div>

                                                    <motion.div
                                                        animate={{
                                                            y: [8, -8, 8],
                                                            rotate: [0, -3, 3, 0],
                                                        }}
                                                        transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
                                                        className="absolute bottom-8 left-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                                                    >
                                                        <Search className="w-6 h-6 text-white" />
                                                    </motion.div>

                                                    <motion.div
                                                        animate={{
                                                            y: [-6, 6, -6],
                                                            rotate: [0, 2, -2, 0],
                                                        }}
                                                        transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY }}
                                                        className="absolute top-1/2 left-8 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                                                    >
                                                        <Target className="w-5 h-5 text-white" />
                                                    </motion.div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                        {seoTips.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white shadow-lg scale-125" : "bg-white/50 hover:bg-white/70"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
