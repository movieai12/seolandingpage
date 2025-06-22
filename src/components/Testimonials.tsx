import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Mehmet Kaya",
      company: "E-ticaret Platformu",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "AI SEO ajansı ile çalışmaya başladıktan sonra organik trafiğimiz 3 ay içinde %180 arttı. Özellikle teknik SEO konusundaki uzmanlıkları harika.",
      results: "+180% Trafik Artışı"
    },
    {
      name: "Ayşe Demir",
      company: "Dijital Pazarlama Ajansı",
      rating: 5,
      image: "https://images.pexels.com/photos/3782293/pexels-photo-3782293.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Müşterilerimize sunduğumuz SEO hizmetlerini AI SEO ajansından alıyoruz. Profesyonel yaklaşımları ve sonuç odaklı çalışmaları bizi çok memnun etti.",
      results: "15+ İlk Sayfa Sıralaması"
    },
    {
      name: "Can Özkan",
      company: "Kurumsal Yazılım",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "B2B sektöründe çok zorlu anahtar kelimelerde ilk sayfaya çıkmayı başardık. AI destekli stratejileri gerçekten işe yarıyor.",
      results: "B2B'de 1. Sıra"
    },
    {
      name: "Zeynep Arslan",
      company: "Online Eğitim Platformu",
      rating: 5,
      image: "https://images.pexels.com/photos/3771823/pexels-photo-3771823.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Eğitim sektöründeki rekabetçi ortamda öne çıkmamızı sağladılar. 6 ayda organik trafiğimiz 5 katına çıktı.",
      results: "+400% Organik Trafik"
    },
    {
      name: "Emre Yılmaz",
      company: "Sağlık Teknolojileri",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Sağlık sektöründe çok hassas olan SEO çalışmalarını mükemmel yönettiler. Google E-A-T kriterlerine tam uyum sağladık.",
      results: "E-A-T Compliance"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Müşterilerimiz <span className="text-blue-900">Ne Diyor?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            850+ mutlu müşterimizin başarı hikayelerini keşfedin. 
            Onların deneyimleri sizin geleceğinizi şekillendirebilir.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Quote and Text */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center gap-4">
                    <Quote className="w-12 h-12 text-blue-900 opacity-30" />
                    <div className="flex items-center gap-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                    {testimonials[currentIndex].results}
                  </div>
                </div>

                {/* Author Info */}
                <div className="text-center lg:text-left">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full mx-auto lg:mx-0 mb-4 object-cover"
                    loading="lazy"
                  />
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-900 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-4 gap-6 mt-16"
        >
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-900 mb-2">850+</div>
            <div className="text-gray-600">Mutlu Müşteri</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-900 mb-2">%98</div>
            <div className="text-gray-600">Memnuniyet Oranı</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-900 mb-2">2,500+</div>
            <div className="text-gray-600">Başarılı Proje</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-900 mb-2">4.9/5</div>
            <div className="text-gray-600">Ortalama Puan</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};