'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'
import Image from 'next/image'

export default function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const blogPosts = [
    {
      title: "2024'te SEO Nasıl Yapılır? Kapsamlı Rehber",
      excerpt: "Google'ın 2024 algoritma güncellemeleri sonrası SEO stratejilerinde nelerin değiştiğini ve nasıl uyum sağlayacağınızı öğrenin.",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Ahmet Kaya",
      date: "15 Şubat 2024",
      readTime: "8 dk",
      category: "SEO Rehberi",
      slug: "2024-seo-rehberi"
    },
    {
      title: "AI ve SEO: Yapay Zeka SEO'yu Nasıl Değiştiriyor?",
      excerpt: "ChatGPT ve Google Bard gibi AI araçlarının SEO dünyasına etkileri ve bu değişime nasıl adapte olacağınızı keşfedin.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Zeynep Özkan",
      date: "12 Şubat 2024",
      readTime: "6 dk",
      category: "AI & SEO",
      slug: "ai-seo-gelecegi"
    },
    {
      title: "Backlink Nasıl Kazanılır? 2024 Link Building Stratejileri",
      excerpt: "Kaliteli backlink kazanmanın en etkili yöntemleri, guest post stratejileri ve kaçınılması gereken black hat teknikleri.",
      image: "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Can Demir",
      date: "10 Şubat 2024",
      readTime: "10 dk",
      category: "Link Building",
      slug: "backlink-stratejileri-2024"
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            SEO <span className="text-blue-900">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SEO dünyasındaki en güncel gelişmeleri, stratejileri ve ipuçlarını 
            uzman yazarlarımızdan öğrenin.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-blue-900 font-medium hover:text-blue-800 transition-colors duration-300"
                >
                  Devamını Oku
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors duration-300 inline-flex items-center gap-2">
            Tüm Blog Yazılarını Görüntüle
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 lg:p-12 text-white text-center"
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            SEO İpuçlarını Kaçırmayın
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Haftalık SEO bültenimize abone olun ve sektördeki en güncel 
            gelişmeleri ilk öğrenen olun.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Abone Ol
            </button>
          </div>
          
          <p className="text-sm text-blue-200 mt-4">
            Spam yapmıyoruz. İstediğiniz zaman abonelikten çıkabilirsiniz.
          </p>
        </motion.div>
      </div>
    </section>
  )
}