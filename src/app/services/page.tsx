import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceCard from '@/components/ServiceCard'
import AnimatedBackground from '@/components/AnimatedBackground'
// import SophisticatedChatbot from '@/components/SophisticatedChatbot'

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <AnimatedBackground
        imageUrl="/images/backgrounds/hero-main.jpg"
        overlay={true}
        overlayOpacity="60"
        className="relative text-white min-h-screen flex items-center justify-center pt-24 lg:pt-28"
      >
        <div className="container mx-auto px-4 text-center py-20">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-4xl mx-auto">
            We move beyond off-the-shelf products, architecting and deploying custom-built platforms tailored to specific business demands across West Africa.
          </p>
        </div>
      </AnimatedBackground>

        {/* Main Services */}
        <AnimatedBackground
          imageUrl="/images/backgrounds/hero-main.jpg"
          overlay={true}
          overlayOpacity="60"
          className="py-20 relative"
        >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Capabilities</h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              Comprehensive digital transformation solutions designed to meet the unique needs of enterprises across West Africa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              title="💡 Artificial Intelligence (AI) Solutions"
              description="We design, build, and integrate enterprise-grade Conversational AI platforms (powerful chatbots and virtual assistants) and Machine Learning solutions. These platforms are engineered to handle the high-security, complexity, and volume requirements of the modern banking sector, transforming customer service and engagement."
            />
            <ServiceCard
              title="💻 Custom Software & Digital Platforms"
              description="We provide end-to-end services for custom software development, including robust websites, mobile applications, and system integrations, ensuring optimal performance and user experience across all digital touchpoints."
            />
            <ServiceCard
              title="🔒 Cybersecurity & Cloud Services"
              description="We secure the digital foundation of your business. Our offerings include Cloud infrastructure setup, migration, and management, alongside advanced Cybersecurity solutions to protect sensitive data and ensure regulatory compliance."
            />
            <ServiceCard
              title="📊 Data & Business Insights"
              description="We help organizations unlock value from their data through services in data analytics, business intelligence, and digital marketing technology, turning raw information into actionable strategies for growth."
            />
          </div>
        </div>
      </AnimatedBackground>

      {/* Value Proposition */}
      <AnimatedBackground
        imageUrl="/images/backgrounds/hero-main.jpg"
        overlay={true}
        overlayOpacity="60"
        className="py-20 relative"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Our Value Proposition</h2>
            <div className="card-dark">
              <h3 className="text-2xl font-bold text-white mb-6">Strategic Innovation, Guaranteed Compliance</h3>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                We combine cutting-edge technology with deep-domain knowledge. This focus on governance and precision is crucial for regulated industries like finance, ensuring our solutions are not only highly effective but also fully compliant with local and international standards.
              </p>
              <p className="text-white/90 leading-relaxed">
                We are dedicated to delivering transformative outcomes that redefine customer experience and unlock massive operational efficiencies.
              </p>
            </div>
          </div>
        </div>
      </AnimatedBackground>

      {/* CTA Section */}
      <AnimatedBackground
        imageUrl="/images/backgrounds/hero-main.jpg"
        overlay={true}
        overlayOpacity="60"
        className="py-20 text-white relative"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Let&apos;s discuss your project requirements and create a solution that drives real results.
            </p>
            
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  Start Your Project
                </a>
                <a 
                  href="/about" 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  Learn More About Us
                </a>
              </div>
            
            <div className="text-center">
              <p className="text-white/80 mb-4">Or get in touch directly:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a href="mailto:info@requiretechnologies.com" className="text-accent hover:text-white transition-colors">
                  📧 info@requiretechnologies.com
                </a>
                  <a href="tel:07063716221" className="text-accent hover:text-white transition-colors">
                    📞 07063716221
                  </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedBackground>

        {/* <SophisticatedChatbot /> */}
        <Footer />
    </div>
  )
}