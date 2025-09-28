import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import TeamSection from '@/components/TeamSection'

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      

      {/* Company Overview */}
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
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Company Overview</h2>
            <p className="text-lg text-white leading-relaxed mb-6">
              We specialize in empowering enterprises across West Africa to thrive in the digital economy by delivering secure, scalable, and innovative technology solutions.
            </p>
            <p className="text-lg text-white leading-relaxed">
              We serve as a strategic partner to leading organizations, including financial institutions, fintech, and large enterprises, offering a comprehensive suite of digital capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Capabilities</h2>
            <p className="text-lg text-white text-center mb-12 max-w-4xl mx-auto">
              We move beyond off-the-shelf products, architecting and deploying custom-built platforms tailored to specific business demands.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card-dark">
                <h3 className="text-xl font-bold text-white mb-4">💡 Artificial Intelligence (AI) Solutions</h3>
                <p className="text-white/90 leading-relaxed">
                  We design, build, and integrate enterprise-grade Conversational AI platforms (powerful chatbots and virtual assistants) and Machine Learning solutions. These platforms are engineered to handle the high-security, complexity, and volume requirements of the modern banking sector, transforming customer service and engagement.
                </p>
              </div>
              
                <div className="card-dark">
                <h3 className="text-xl font-bold text-white mb-4">💻 Custom Software & Digital Platforms</h3>
                <p className="text-white/90 leading-relaxed">
                  We provide end-to-end services for custom software development, including robust websites, mobile applications, and system integrations, ensuring optimal performance and user experience across all digital touchpoints.
                </p>
              </div>
              
                <div className="card-dark">
                <h3 className="text-xl font-bold text-white mb-4">🔒 Cybersecurity & Cloud Services</h3>
                <p className="text-white/90 leading-relaxed">
                  We secure the digital foundation of your business. Our offerings include Cloud infrastructure setup, migration, and management, alongside advanced Cybersecurity solutions to protect sensitive data and ensure regulatory compliance.
                </p>
              </div>
              
                <div className="card-dark">
                <h3 className="text-xl font-bold text-white mb-4">📊 Data & Business Insights</h3>
                <p className="text-white/90 leading-relaxed">
                  We help organizations unlock value from their data through services in data analytics, business intelligence, and digital marketing technology, turning raw information into actionable strategies for growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Value */}
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Mission & Value</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="card-dark">
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  To deliver the strategic technology and expertise required for Africa&apos;s leading organizations to transition into intelligent, AI-first enterprises.
                </p>
              </div>
              
              <div className="card-dark">
                <h3 className="text-2xl font-bold text-white mb-4">Our Value Proposition</h3>
                <p className="text-lg text-white/90 leading-relaxed mb-4">
                  <strong>Strategic Innovation, Guaranteed Compliance.</strong>
                </p>
                <p className="text-white/90 leading-relaxed">
                  We combine cutting-edge technology with deep-domain knowledge. This focus on governance and precision is crucial for regulated industries like finance, ensuring our solutions are not only highly effective but also fully compliant with local and international standards.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <div className="card-dark">
                <p className="text-lg text-white/90 leading-relaxed">
                  We are dedicated to delivering transformative outcomes that redefine customer experience and unlock massive operational efficiencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section 
        className="py-20 text-white relative"
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Connect With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Website</h3>
                <p className="text-white/90">www.requiretechnologies.com</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Email</h3>
                <p className="text-white/90">info@requiretechnologies.com</p>
              </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">Phone</h3>
                  <p className="text-white/90">07063716221</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />

      <WhatsAppButton />
      <Footer />
    </div>
  )
}