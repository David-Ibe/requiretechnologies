import type { Metadata } from 'next'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'
// import SophisticatedChatbot from '@/components/SophisticatedChatbot'
// import TeamSection from '@/components/TeamSection'

export const metadata: Metadata = {
  title: 'About Require Technologies | Chimaobi David Ibe (Founder & CEO)',
  description:
    'Learn about Require Technologies and its Founder & CEO, Chimaobi David Ibe. We build secure, scalable, intelligent platforms for enterprises across West Africa.',
  keywords: [
    'Chimaobi David Ibe',
    'Require Technologies',
    'Founder',
    'CEO',
    'About Require Technologies',
    'Enterprise Software Nigeria',
    'AI Solutions Nigeria',
  ],
  alternates: {
    canonical: (process.env.NEXT_PUBLIC_SITE_URL || 'https://requiretechnologies.com') + '/about',
  },
  openGraph: {
    title: 'About Require Technologies | Chimaobi David Ibe',
    description:
      'Require Technologies is led by Founder & CEO, Chimaobi David Ibe. We deliver Fortune 500-grade platforms across AI, Software, Cloud, and Data.',
    url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://requiretechnologies.com') + '/about',
    images: [
      (process.env.NEXT_PUBLIC_SITE_URL || 'https://requiretechnologies.com') + '/images/team/chimaobi-david-ibe.JPG',
    ],
    type: 'profile',
    locale: 'en_NG',
  },
}

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <Script
        id="ld-json-founder"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Chimaobi David Ibe',
            jobTitle: 'Founder & CEO',
            worksFor: {
              '@type': 'Organization',
              name: 'Require Technologies',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://requiretechnologies.com',
            },
            url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://requiretechnologies.com') + '/about',
            sameAs: [
              'https://www.linkedin.com/company/require-technologies-limited',
              'https://x.com/RequireTechNg',
              'https://www.facebook.com/RequireTechnologiesLimited',
            ],
          }),
        }}
      />
      

      {/* Company Overview */}
      <AnimatedBackground
        imageUrl="/images/backgrounds/hero-main.jpg"
        overlay={true}
        overlayOpacity="60"
        className="relative text-white min-h-screen flex items-center justify-center pt-24 lg:pt-28"
      >
        <div className="container mx-auto px-4">
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
      </AnimatedBackground>

      {/* Our Capabilities */}
      <AnimatedBackground
        imageUrl="/images/backgrounds/hero-main.jpg"
        overlay={true}
        overlayOpacity="60"
        className="py-20 relative"
      >
        <div className="container mx-auto px-4">
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
      </AnimatedBackground>

      {/* Mission & Value */}
      <AnimatedBackground
        imageUrl="/images/backgrounds/hero-main.jpg"
        overlay={true}
        overlayOpacity="60"
        className="py-20 relative"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Mission & Value</h2>
            
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
      </AnimatedBackground>

      {/* Contact Information */}
      <AnimatedBackground
        imageUrl="/images/backgrounds/hero-main.jpg"
        overlay={true}
        overlayOpacity="60"
        className="py-20 text-white relative"
      >
        <div className="container mx-auto px-4">
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
      </AnimatedBackground>

      {/* Founder Message (Fortune 500 Standard) */}
      <AnimatedBackground
        imageUrl="/images/backgrounds/hero-main.jpg"
        overlay={true}
        overlayOpacity="60"
        className="py-20 relative"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Message from Our Founder</h2>
            <div className="card-dark">
              <p className="text-white/90 leading-relaxed mb-6">
                At Require Technologies, our mission is simple: build secure, scalable, and intelligent platforms that unlock measurable business outcomes. We partner with leaders who demand reliability at scale, disciplined execution, and technology that earns customer trust every day.
              </p>
              <p className="text-white/90 leading-relaxed mb-6">
                We operate with Fortune 500 standards: customer obsession, operational excellence, and uncompromising governance. Our teams ship with clarity and speed, while ensuring resilience, compliance, and enterprise-grade security—especially for regulated industries like banking and financial services across West Africa.
              </p>
              <p className="text-white/90 leading-relaxed mb-6">
                As AI reshapes every value chain, we help organizations move from pilots to production—responsibly, transparently, and at scale. The result is not just technology that works, but systems that win: better experiences, lower risk, and durable growth.
              </p>
              <div className="mt-8 flex items-center gap-4 justify-center">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                  <img src="/images/team/chimaobi-david-ibe.JPG" alt="Chimaobi David Ibe" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Chimaobi David Ibe</p>
                  <p className="text-white/80 text-sm">Founder & CEO, Require Technologies</p>
                </div>
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