'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-navy-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">OA</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-transparent">
                OceanAxis
              </h1>
              <p className="text-xs text-navy-600 font-medium">Global Shipping</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-navy-800 hover:text-navy-600 transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-navy-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a href="#contact" className="btn-primary hidden md:block">
            Get Quote
          </a>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-navy-200">
            <ul className="space-y-4">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 text-lg font-medium text-navy-800 hover:text-navy-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="btn-primary block text-center w-full" onClick={() => setMobileMenuOpen(false)}>
                  Get Quote
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}