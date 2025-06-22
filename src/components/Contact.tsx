import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Star,
  Award,
  Users
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            İletişime <span className="text-blue-900">Geçin</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SEO projeleriniz için ücretsiz danışmanlık alın. 
            Uzmanlarımız size özel strateji geliştirecek.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Send className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Ücretsiz SEO Danışmanlığı
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none transition-colors"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none transition-colors"
                    placeholder="https://example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none transition-colors resize-none"
                    placeholder="SEO ihtiyaçlarınızı detaylı olarak açıklayın..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:from-blue-800 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    Ücretsiz Danışmanlık Al
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </motion.button>
                </div>
              </form>

              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                      <Award className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-sm font-semibold text-gray-900">Garantili</div>
                    <div className="text-xs text-gray-600">Sonuç</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-sm font-semibold text-gray-900">850+</div>
                    <div className="text-xs text-gray-600">Müşteri</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mb-2">
                      <Star className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div className="text-sm font-semibold text-gray-900">4.9/5</div>
                    <div className="text-xs text-gray-600">Puan</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-blue-900" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Telefon</h4>
                <p className="text-gray-600 font-medium">+90 555 123 4567</p>
                <p className="text-sm text-gray-500 mt-1">Pazartesi - Cuma: 09:00 - 18:00</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">E-posta</h4>
                <p className="text-gray-600 font-medium">info@dijitalfiir.com</p>
                <p className="text-sm text-gray-500 mt-1">24 saat içinde yanıtlıyoruz</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Adres</h4>
                <p className="text-gray-600">Cumhuriyet Mah. Belediye Cad.</p>
                <p className="text-gray-600">No:85 Beylikdüzü/İstanbul</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Çalışma Saatleri</h4>
                <p className="text-gray-600">Pzt - Cum: 09:00 - 18:00</p>
                <p className="text-gray-600">Cumartesi: 10:00 - 16:00</p>
              </motion.div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Ofisimizi Ziyaret Edin</h4>
              </div>
              <div className="relative h-64 bg-gray-100 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.2159828154194!2d28.65577931580353!3d41.004450179244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0x3c5c3b2b6b4f8f8f!2sCumhuriyet%20Mah.%2C%20Belediye%20Cd.%20No%3A85%2C%2034520%20Beylikd%C3%BCz%C3%BC%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1644567890123!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dijitalfiir Ofis Konumu - Beylikdüzü"
                />
                {/* Custom Map Marker Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <MapPin className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-blue-800">
                  📍 <strong>Beylikdüzü Merkez:</strong> E-5 karayoluna 5 dakika mesafede, 
                  toplu taşıma ile kolay ulaşım. Ücretsiz otopark mevcuttur.
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg"></div>
                Sosyal Medya
              </h4>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, name: 'Facebook', color: 'hover:bg-blue-600', bg: 'bg-blue-100' },
                  { icon: Twitter, name: 'Twitter', color: 'hover:bg-sky-500', bg: 'bg-sky-100' },
                  { icon: Linkedin, name: 'LinkedIn', color: 'hover:bg-blue-700', bg: 'bg-blue-100' },
                  { icon: Instagram, name: 'Instagram', color: 'hover:bg-pink-600', bg: 'bg-pink-100' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className={`w-12 h-12 ${social.bg} rounded-xl flex items-center justify-center ${social.color} hover:text-white transition-all duration-300 shadow-md hover:shadow-lg`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Güncel SEO ipuçları ve başarı hikayelerimizi takip edin!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Hemen Başlayalım! 🚀
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            SEO yolculuğunuza bugün başlayın. İlk görüşme tamamen ücretsiz, 
            yükümlülük gerektirmez.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Hemen Ara
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};