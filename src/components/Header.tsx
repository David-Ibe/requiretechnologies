'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl shadow-xl border-b border-white/10' 
          : 'bg-transparent backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center group relative"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Require Technologies Logo"
                width={280}
                height={90}
                className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  isActive(link.href)
                    ? 'text-accent'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive(link.href) && (
                  <span className="absolute inset-0 bg-accent/10 rounded-lg -z-0"></span>
                )}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="ml-4 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-accent/20 hover:scale-105"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-1 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-accent bg-accent/10'
                    : 'text-white/90 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block mx-4 mt-4 px-5 py-3 bg-accent text-white text-base font-semibold rounded-lg hover:bg-accent/90 transition-all duration-200 text-center flex items-center justify-center gap-2"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
