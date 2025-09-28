import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, MessageCircle, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer 
      className="text-white py-16 relative"
      style={{
        backgroundImage: `url('/images/backgrounds/hero-main.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <h3 className="text-2xl font-bold">Require Technologies</h3>
                </div>
                <p className="text-white/80 mb-6 max-w-md leading-relaxed">
                  A full-spectrum Digital Transformation and Technology Solutions provider. We empower enterprises across West Africa with secure, scalable, and innovative technology solutions.
                </p>
            <div className="flex space-x-4">
                <Link 
                  href="https://www.linkedin.com/company/require-technologies-limited" 
                  target="_blank" 
                  className="bg-white/10 hover:bg-accent/20 p-3 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              <Link 
                href="https://www.facebook.com/RequireTechnologiesLimited" 
                target="_blank" 
                className="bg-white/10 hover:bg-accent/20 p-3 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link 
                href="https://x.com/RequireTechNg" 
                target="_blank" 
                className="bg-white/10 hover:bg-accent/20 p-3 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </Link>
                <Link 
                  href="https://wa.me/2347063716221" 
                  target="_blank" 
                  className="bg-white/10 hover:bg-accent/20 p-3 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="w-5 h-5" />
                </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-accent" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/80 hover:text-accent transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-accent transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-accent transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-accent transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-accent" />
              Contact Info
            </h3>
                <div className="space-y-4 text-white/80">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent" />
                    <span>info@requiretechnologies.com</span>
                  </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span>07063716221</span>
                </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Lagos, Nigeria</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>www.requiretechnologies.com</span>
                  </div>
                </div>
          </div>
        </div>
        
            <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/80">
              <p>&copy; 2025 Require Technologies. All rights reserved.</p>
            </div>
      </div>
    </footer>
  )
}
