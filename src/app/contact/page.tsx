import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import AnimatedBackground from '@/components/AnimatedBackground'
// import SophisticatedChatbot from '@/components/SophisticatedChatbot'

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Centered Contact Form */}
      <AnimatedBackground
        imageUrl="/images/backgrounds/hero-main.jpg"
        overlay={true}
        overlayOpacity="60"
        className="relative text-white min-h-screen flex items-center justify-center pt-24 lg:pt-28"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
            <p className="text-white/90">Get in touch to discuss your project.</p>
          </div>
          <ContactForm />
        </div>
      </AnimatedBackground>

        {/* <SophisticatedChatbot /> */}
      <Footer />
    </div>
  )
}