import Header from '@/components/Header'
import Footer from '@/components/Footer'
// import WhatsAppButton from '@/components/WhatsAppButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Require Technologies',
  description: 'Selected projects showcasing AI solutions, custom platforms, and secure cloud deployments across West Africa.',
  openGraph: {
    title: 'Portfolio | Require Technologies',
    description: 'Selected projects showcasing AI solutions, custom platforms, and secure cloud deployments across West Africa.',
    images: ['/images/backgrounds/hero-main.jpg']
  }
}
import PortfolioGallery from '@/components/PortfolioGallery'

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <PortfolioGallery />
      {/* WhatsApp button is now added globally in RootLayout */}
      <Footer />
    </div>
  )
}