'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header 
      className="bg-transparent backdrop-blur-md text-white sticky top-0 z-50 shadow-lg border-b border-white/20 relative"
      style={{
        backgroundImage: `url('/images/backgrounds/hero-main.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-3">
          <Link href="/" className="text-2xl font-bold hover:text-accent transition-colors text-white">
            Require Technologies
          </Link>
        </div>
        
        {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              <Link href="/" className="hover:text-accent transition-colors font-medium">Home</Link>
              <Link href="/about" className="hover:text-accent transition-colors font-medium">About</Link>
              <Link href="/services" className="hover:text-accent transition-colors font-medium">Services</Link>
              <Link href="/blog" className="hover:text-accent transition-colors font-medium">Blog</Link>
              <Link href="/contact" className="hover:text-accent transition-colors font-medium">Contact</Link>
              <Link href="/contact" className="btn-primary flex items-center gap-2 group">
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav 
          className="md:hidden border-t border-white/20 relative"
          style={{
            backgroundImage: `url('/images/backgrounds/hero-main.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-4 py-6 space-y-4 relative z-10">
            <Link 
              href="/" 
              className="block hover:text-accent transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block hover:text-accent transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="block hover:text-accent transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/blog" 
              className="block hover:text-accent transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="block hover:text-accent transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="btn-primary inline-flex items-center gap-2 mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
