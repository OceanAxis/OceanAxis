'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const navItems = ['Home', 'Services', 'About', 'Contact']

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-6 py-4" aria-label="OceanAxis main navigation">
          <div className="flex justify-between items-center">

            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-navy-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">OA</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-transparent">OceanAxis</h1>
                <p className="text-xs text-navy-600 font-medium">Global Shipping</p>
              </div>
            </Link>

            <ul className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-lg font-medium text-navy-800 hover:text-navy-600 transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>

            <a href="/quote" className="btn-primary hidden md:block">Get Quote</a>

            <button className="md:hidden p-2 text-navy-800" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
              <Menu size={26} />
            </button>
          </div>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      <div className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-9 h-9 bg-navy-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">OA</span>
            </div>
            <span className="font-bold text-navy-800 text-lg">OceanAxis</span>
          </Link>
          <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-navy-800" aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        <ul className="flex flex-col px-6 py-6 space-y-1">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="block py-3 px-4 rounded-lg text-navy-800 font-medium text-base hover:bg-navy-50 hover:text-navy-600 transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="px-6">
          <a href="/quote" className="btn-primary block text-center w-full" onClick={() => setMobileMenuOpen(false)}>Get Quote</a>
        </div>
      </div>
    </>
  )
}