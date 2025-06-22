import React from 'react';
import { motion } from 'framer-motion';
import { Bot, TrendingUp, Zap, ArrowRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-white overflow-hidden pt-20">
      {/* Animated Background Elements */}
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
          {/* Left Content */}
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
                Arama motorlarında sadece görünür değil, <strong className="text-blue-900">lider olun</strong>. 
                AI destekli SEO çözümlerimizle rakiplerinizi geride bırakın.
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

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-blue-100">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-3xl lg:text-4xl font-bold text-blue-900 mb-1"
                >
                  %127
                </motion.div>
                <div className="text-sm text-gray-600">Trafik Artışı</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-blue-100">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-3xl lg:text-4xl font-bold text-blue-900 mb-1"
                >
                  850+
                </motion.div>
                <div className="text-sm text-gray-600">Mutlu Müşteri</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-blue-100">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="text-3xl lg:text-4xl font-bold text-blue-900 mb-1"
                >
                  %34
                </motion.div>
                <div className="text-sm text-gray-600">Hızlı Sonuç</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Clean Earth Visual */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-full h-[600px] flex items-center justify-center"
            >
              {/* Main Earth Image */}
              <div className="relative w-80 h-80">
                <motion.img
                  src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dünya - Global SEO"
                  className="w-full h-full rounded-full object-cover shadow-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  loading="lazy"
                />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-xl"></div>
                
                {/* Simple Rising Graph Elements */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`graph-${i}`}
                    className="absolute w-8 h-16 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-sm shadow-lg"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: '0 0',
                      clipPath: "polygon(0% 100%, 20% 60%, 40% 30%, 60% 10%, 80% 5%, 100% 0%, 100% 100%)"
                    }}
                    animate={{
                      rotate: 360,
                      x: Math.cos((i * 60) * Math.PI / 180) * 160 - 16,
                      y: Math.sin((i * 60) * Math.PI / 180) * 160 - 32,
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 12 + i,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}

                {/* Performance Metrics Cards */}
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-12 -left-12 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl flex items-center justify-center border border-blue-100"
                >
                  <div className="text-center">
                    <div className="text-sm font-bold text-green-600">+180%</div>
                    <div className="text-xs text-gray-600">Trafik</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [8, -8, 8],
                    rotate: [0, -3, 3, 0]
                  }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute -top-8 -right-16 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl flex items-center justify-center border border-green-100"
                >
                  <div className="text-center">
                    <div className="text-sm font-bold text-blue-600">#1</div>
                    <div className="text-xs text-gray-600">Sıra</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [-6, 6, -6],
                    rotate: [0, 4, -4, 0]
                  }}
                  transition={{ duration: 4.5, repeat: Infinity }}
                  className="absolute -bottom-10 -left-14 w-15 h-15 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl flex items-center justify-center border border-orange-100"
                >
                  <div className="text-center">
                    <div className="text-sm font-bold text-orange-600">AI</div>
                    <div className="text-xs text-gray-600">SEO</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [10, -10, 10],
                    rotate: [0, -2, 2, 0]
                  }}
                  transition={{ duration: 3.8, repeat: Infinity }}
                  className="absolute -bottom-12 -right-12 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl flex items-center justify-center border border-purple-100"
                >
                  <div className="text-center">
                    <div className="text-sm font-bold text-purple-600">24/7</div>
                    <div className="text-xs text-gray-600">İzleme</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
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
  );
};