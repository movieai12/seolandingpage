'use client'

import React from "react"
import { motion } from "framer-motion"
import { Bot, TrendingUp, Zap, ArrowRight, Play, BarChart3, Target, Rocket } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-white overflow-hidden pt-20"
    >
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 right-20 w-64 h-64 bg-blue-900 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-900 to-cyan-600 text-white rounded-full text-sm font-medium shadow-lg">
                <Bot className="w-4 h-4" />
                <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent font-bold">
                  dijitalfiir
                </span>
                <span className="text-cyan-100">AI Destekli SEO Çözümleri</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Google'da
                <span className="text-transparent bg-gradient-to-r from-blue-900 via-cyan-600 to-blue-800 bg-clip-text block">
                  Zirveye Tırman!
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Arama motorlarında sadece görünür değil, <strong className="text-blue-900">lider olun</strong>. AI
                destekli SEO çözümlerimizle rakiplerinizi geride bırakın.
              </p>

              <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-blue-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Canlı:</span>
                </div>
                <span className="text-sm text-gray-600">
                  Son 24 saatte <strong className="text-blue-900">127 site</strong> analiz edildi
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(13, 71, 161, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-800 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
              >
                <Zap className="w-5 h-5" />
                Ücretsiz SEO Analizi Al
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Demo Görüntüle
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { value: "%127", label: "Trafik Artışı" },
                { value: "850+", label: "Mutlu Müşteri" },
                { value: "%34", label: "Hızlı Sonuç" },
              ].map(({ value, label }, idx) => (
                <div
                  key={label}
                  className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-blue-100"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 + idx * 0.2 }}
                    className="text-3xl lg:text-4xl font-bold text-blue-900 mb-1"
                  >
                    {value}
                  </motion.div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative"
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 1, -1, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-7xl md:text-8xl font-bold tracking-tight"
                >
                  <span className="text-blue-500">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-yellow-500">o</span>
                  <span className="text-blue-500">g</span>
                  <span className="text-green-500">l</span>
                  <span className="text-red-500">e</span>
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-red-400/20 via-yellow-400/20 via-green-400/20 to-red-400/20 blur-2xl"></div>
              </motion.div>

              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [0, 1, -1, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-4 right-4 md:right-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white"
              >
                <TrendingUp className="w-5 h-5 mb-1" />
                <span className="text-xs font-bold">+247%</span>
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6], rotate: [0, -2, 2, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute bottom-6 left-4 md:left-10 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-xl flex flex-col items-center justify-center text-white"
              >
                <Target className="w-5 h-5 mb-1" />
                <span className="text-xs font-bold">#1</span>
              </motion.div>

              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 3, -3, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute top-1/2 right-2 md:right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full shadow-xl flex items-center justify-center text-white"
              >
                <BarChart3 className="w-5 h-5" />
              </motion.div>

              <motion.div
                animate={{ y: [12, -12, 12], rotate: [0, -1, 1, 0] }}
                transition={{ duration: 3.8, repeat: Infinity }}
                className="absolute bottom-1/3 left-2 md:left-6 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white p-2"
              >
                <Rocket className="w-5 h-5 mb-1" />
                <span className="text-xs font-bold">AI</span>
              </motion.div>

              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full"
                  animate={{
                    x: [0, Math.cos((i * 45 * Math.PI) / 180) * 100],
                    y: [0, Math.sin((i * 45 * Math.PI) / 180) * 100],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-blue-900 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-blue-900 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}