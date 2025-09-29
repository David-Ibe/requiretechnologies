import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
      <section 
        className="relative text-white min-h-screen flex items-center -mt-20 pt-20"
        style={{
          backgroundImage: `url('/images/backgrounds/hero-main.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 text-center relative z-10 py-24 -mt-6 md:-mt-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Require Technologies
          </motion.h1>
          <p className="text-xl mb-6 max-w-4xl mx-auto text-white/90 font-medium">
            Full-Spectrum Digital Transformation & Technology Solutions
          </p>
          <p className="text-lg mb-12 max-w-3xl mx-auto text-white/80 leading-relaxed">
            Empowering enterprises across West Africa with secure, scalable, and innovative technology solutions. Strategic Innovation, Guaranteed Compliance.
          </p>
          <Link href="/contact" className="btn-glossy text-lg">
            Get Started
          </Link>
        </div>
    </section>
  )
}
