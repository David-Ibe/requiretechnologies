import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import SophisticatedChatbot from '@/components/SophisticatedChatbot'

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
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
        <div className="container mx-auto px-4 text-center relative z-10 py-20">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch to discuss your project.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        className="py-20 relative"
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
          <ContactForm />
        </div>
      </section>

      {/* Contact Information */}
      <section 
        className="py-20 relative"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-white">Email</h3>
              <p className="text-white/90">info@requiretechnologies.com</p>
            </div>
            
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-white">Phone</h3>
                <p className="text-white/90">07063716221</p>
              </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-white">Website</h3>
              <p className="text-white/90">www.requiretechnologies.com</p>
            </div>
          </div>
        </div>
      </section>

        <SophisticatedChatbot />
      <Footer />
    </div>
  )
}