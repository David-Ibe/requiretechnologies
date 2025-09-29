'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
// import SophisticatedChatbot from '@/components/SophisticatedChatbot'
import AnimatedSection from '@/components/AnimatedSection'
import GradientText from '@/components/GradientText'
import AnimatedTechCarousel from '@/components/AnimatedTechCarousel'
import { CheckCircle, Users, Award } from 'lucide-react'
import Script from 'next/script'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Script
        id="ld-json-org"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Require Technologies Limited',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://requiretechnologies.com',
            logo: (process.env.NEXT_PUBLIC_SITE_URL || 'https://requiretechnologies.com') + '/logo.png',
            sameAs: [
              'https://www.linkedin.com/company/require-technologies-limited',
              'https://x.com/RequireTechNg',
              'https://www.facebook.com/RequireTechnologiesLimited',
            ],
            contactPoint: [{
              '@type': 'ContactPoint',
              contactType: 'customer service',
              email: 'info@requiretechnologies.com',
              telephone: '+2347063716221',
              areaServed: 'NG',
              availableLanguage: ['en']
            }]
          })
        }}
      />
      
      {/* Services Section */}
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
          <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our <span className="text-accent">Services</span>
              </h2>
            <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
              We move beyond off-the-shelf products, architecting and deploying custom-built platforms tailored to specific business demands across West Africa.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title="💡 Artificial Intelligence (AI) Solutions"
              description="Enterprise-grade Conversational AI platforms and Machine Learning solutions engineered for high-security banking sector requirements, transforming customer service and engagement."
            />
            <ServiceCard
              title="💻 Custom Software & Digital Platforms"
              description="End-to-end custom software development including robust websites, mobile applications, and system integrations ensuring optimal performance across all digital touchpoints."
            />
            <ServiceCard
              title="🔒 Cybersecurity & Cloud Services"
              description="Cloud infrastructure setup, migration, and management alongside advanced Cybersecurity solutions to protect sensitive data and ensure regulatory compliance."
            />
            <ServiceCard
              title="📊 Data & Business Insights"
              description="Data analytics, business intelligence, and digital marketing technology services that unlock value from data and turn raw information into actionable growth strategies."
            />
          </div>
        </div>
      </section>


        {/* CTA Section */}
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
          <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join leading enterprises across West Africa who trust Require Technologies for their digital transformation journey.
            </p>
            
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  Start Your Project
                </a>
                <a 
                  href="/services" 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  Explore Services
                </a>
              </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Our Technology Expertise
              </h3>
              <AnimatedTechCarousel />
            </div>
          </div>
        </div>
      </section>

        {/* <SophisticatedChatbot /> */}
        <Footer />
    </div>
  )
}
