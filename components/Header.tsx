'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Search, BarChart3, ExternalLink, Zap } from 'lucide-react'
import { Logo } from './Logo'
import Link from 'next/link'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Hizmetler', href: '/hizmetler' },
    { 
      name: 'Araçlar', 
      href: '#',
      dropdown: [
        { name: 'DA PA Checker', href: '/araclar/da-pa-checker', icon: BarChart3, description: 'Domain ve Page Authority kontrolü' },
        { name: 'Sıra Bulucu', href: '/araclar/sira-bulucu', icon: Search, description: 'Anahtar kelime sıralama kontrolü' },
        { name: 'Teknik SEO Analizi', href: '/araclar/teknik-seo-analizi', icon: Zap, description: 'Kapsamlı teknik SEO taraması' },
        { name: 'AI SEO Analizi', href: '/araclar/ai-seo-analizi', icon: ExternalLink, description: 'Yapay zeka destekli SEO analizi' }
      ]
    },
    { name: 'Fiyatlar', href: '/fiyatlar' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/iletisim' }
  ]

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={closeDropdown}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1 text-gray-700 hover:text-blue-900 font-medium transition-colors duration-300 py-2"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </motion.button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                        >
                          <div className="p-2">
                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                              <Link
                                key={dropdownIndex}
                                href={dropdownItem.href}
                                className="flex items-start gap-3 p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300 group"
                                onClick={closeDropdown}
                              >
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300 flex-shrink-0">
                                  <dropdownItem.icon className="w-5 h-5 text-blue-600" />
                                </div>
                                <div className="min-w-0">
                                  <div className="font-semibold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                                    {dropdownItem.name}
                                  </div>
                                  <div className="text-sm text-gray-600 mt-1">
                                    {dropdownItem.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-300 py-2 block"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-blue-900 transition-colors duration-300"
            aria-label="Menüyü aç/kapat"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <nav className="py-4 space-y-2 max-h-96 overflow-y-auto">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-blue-50 transition-colors duration-300 font-medium"
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="bg-gray-50 overflow-hidden"
                            >
                              {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                <Link
                                  key={dropdownIndex}
                                  href={dropdownItem.href}
                                  className="flex items-center gap-3 px-8 py-3 text-gray-600 hover:text-blue-900 hover:bg-blue-50 transition-colors duration-300"
                                  onClick={() => {
                                    setIsMenuOpen(false)
                                    setActiveDropdown(null)
                                  }}
                                >
                                  <dropdownItem.icon className="w-4 h-4 flex-shrink-0" />
                                  <span className="font-medium">{dropdownItem.name}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-blue-50 transition-colors duration-300 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}