import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import PortfolioGallery from '@/components/PortfolioGallery'

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <PortfolioGallery />
      <WhatsAppButton />
      <Footer />
    </div>
  )
}