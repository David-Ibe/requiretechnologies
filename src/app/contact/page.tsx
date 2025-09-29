import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
// import SophisticatedChatbot from '@/components/SophisticatedChatbot'

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Centered Contact Form */}
      <section 
        className="relative text-white min-h-screen flex items-center justify-center -mt-20 pt-20"
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
          <div className="max-w-lg mx-auto text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
            <p className="text-white/90">Get in touch to discuss your project.</p>
          </div>
          <ContactForm />
        </div>
      </section>

        {/* <SophisticatedChatbot /> */}
      <Footer />
    </div>
  )
}