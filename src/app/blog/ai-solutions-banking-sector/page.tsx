import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function BlogPost() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
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
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Solutions for the Banking Sector: Transforming Customer Service in Nigeria
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Published on January 15, 2025
            </p>
            <p className="text-lg text-white/80">
              How Conversational AI is revolutionizing customer service in Nigerian banks and financial institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image removed by request */}

      {/* Article Content */}
      <section 
        className="pt-10 pb-16 relative -mt-6"
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
              <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">The Digital Banking Revolution in Nigeria</h2>
              
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Nigeria's banking sector is experiencing unprecedented digital transformation. With over 200 million people and a rapidly growing fintech ecosystem, Nigerian banks are under pressure to deliver exceptional customer service while managing increasing transaction volumes and regulatory requirements.
              </p>

              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Traditional customer service models are struggling to keep up with the demands of modern banking. Long wait times, limited availability, and inconsistent service quality are common pain points that affect customer satisfaction and operational efficiency.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">The Challenge: High-Volume Customer Inquiries</h3>
              
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Nigerian banks handle millions of customer inquiries daily, ranging from account balance checks and transaction history to loan applications and fraud reports. The sheer volume of these inquiries, combined with the need for 24/7 availability, creates significant operational challenges.
              </p>

              <div className="card-dark mb-8">
                <h4 className="text-xl font-bold text-white mb-4">Key Statistics:</h4>
                <ul className="list-disc list-inside text-white/90 space-y-2">
                  <li>Average wait time for customer service: 15-30 minutes</li>
                  <li>Customer service operating hours: Limited to business hours</li>
                  <li>Resolution rate for first contact: 60-70%</li>
                  <li>Cost per customer interaction: ₦500-₦1,500</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">The Solution: Enterprise-Grade Conversational AI</h3>
              
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                At Require Technologies Limited, we've developed specialized Conversational AI solutions specifically designed for the Nigerian banking sector. Our AI platforms are engineered to handle the high-security, complexity, and volume requirements of modern banking operations.
              </p>

              <h4 className="text-xl font-bold text-white mb-4">Key Features of Our Banking AI Solutions:</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="card-dark">
                  <h5 className="text-lg font-bold text-white mb-3">Nigerian Context Mastery</h5>
                  <p className="text-white/90">
                    Our AI understands Nigerian English, local banking terminology, and cultural nuances, ensuring natural conversations with customers.
                  </p>
                </div>
                
                <div className="card-dark">
                  <h5 className="text-lg font-bold text-white mb-3">Multi-Channel Integration</h5>
                  <p className="text-white/90">
                    Seamlessly integrates with WhatsApp, SMS, web chat, and mobile apps, providing consistent service across all touchpoints.
                  </p>
                </div>
                
                <div className="card-dark">
                  <h5 className="text-lg font-bold text-white mb-3">Guaranteed Resolution Rate</h5>
                  <p className="text-white/90">
                    Achieves ≥80% automation rate for common inquiries, with intelligent escalation to human agents when needed.
                  </p>
                </div>
                
                <div className="card-dark">
                  <h5 className="text-lg font-bold text-white mb-3">Real-time Human Handoff</h5>
                  <p className="text-white/90">
                    Smooth transition to human agents with full context preservation, ensuring no information is lost.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Implementation Success Stories</h3>
              
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                We've successfully implemented Conversational AI solutions for several Nigerian financial institutions, delivering measurable results:
              </p>

              <div className="card-dark mb-8">
                <h4 className="text-xl font-bold text-white mb-4">Case Study: Major Nigerian Bank</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-white mb-2">Before Implementation:</h5>
                    <ul className="text-white/90 space-y-1">
                      <li>• Average response time: 25 minutes</li>
                      <li>• Customer satisfaction: 65%</li>
                      <li>• Operating hours: 8 AM - 6 PM</li>
                      <li>• Cost per interaction: ₦1,200</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-2">After Implementation:</h5>
                    <ul className="text-white/90 space-y-1">
                      <li>• Average response time: 2 minutes</li>
                      <li>• Customer satisfaction: 92%</li>
                      <li>• Operating hours: 24/7</li>
                      <li>• Cost per interaction: ₦150</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Technical Architecture</h3>
              
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Our Conversational AI platform is built on enterprise-grade infrastructure with the following components:
              </p>

              <div className="card-dark mb-8">
                <h4 className="text-xl font-bold text-white mb-4">Core Technologies:</h4>
                <ul className="list-disc list-inside text-white/90 space-y-2">
                  <li><strong>Natural Language Processing (NLP):</strong> Advanced algorithms trained on Nigerian banking data</li>
                  <li><strong>Machine Learning Models:</strong> Continuously learning from customer interactions</li>
                  <li><strong>API Integration:</strong> Seamless connection to core banking systems</li>
                  <li><strong>Security Framework:</strong> End-to-end encryption and compliance with CBN regulations</li>
                  <li><strong>Analytics Dashboard:</strong> Real-time insights into customer interactions and system performance</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Regulatory Compliance</h3>
              
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Our solutions are designed with strict adherence to Nigerian banking regulations and international standards:
              </p>

              <ul className="list-disc list-inside text-white/90 space-y-2 mb-8">
                <li>Central Bank of Nigeria (CBN) guidelines compliance</li>
                <li>Nigerian Data Protection Regulation (NDPR) adherence</li>
                <li>ISO 27001 security standards implementation</li>
                <li>PCI DSS compliance for payment-related interactions</li>
                <li>Regular security audits and penetration testing</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-4">Future of Banking AI in Nigeria</h3>
              
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                The future of banking in Nigeria is undeniably AI-driven. As more financial institutions adopt Conversational AI solutions, we expect to see:
              </p>

              <ul className="list-disc list-inside text-white/90 space-y-2 mb-8">
                <li>Increased automation of complex banking processes</li>
                <li>Enhanced fraud detection and prevention capabilities</li>
                <li>Personalized financial advice and product recommendations</li>
                <li>Seamless integration with emerging fintech solutions</li>
                <li>Improved financial inclusion for underserved populations</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-4">Getting Started</h3>
              
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Ready to transform your bank's customer service with AI? Our implementation process includes:
              </p>

              <div className="card-dark mb-8">
                <h4 className="text-xl font-bold text-white mb-4">Implementation Process:</h4>
                <ol className="list-decimal list-inside text-white/90 space-y-2">
                  <li><strong>Discovery & Assessment:</strong> Analyze current customer service operations and identify automation opportunities</li>
                  <li><strong>Custom Development:</strong> Build AI solution tailored to your bank's specific needs and systems</li>
                  <li><strong>Integration:</strong> Seamlessly integrate with existing core banking and communication systems</li>
                  <li><strong>Testing & Training:</strong> Comprehensive testing with real customer scenarios and staff training</li>
                  <li><strong>Deployment:</strong> Phased rollout with continuous monitoring and optimization</li>
                  <li><strong>Ongoing Support:</strong> 24/7 technical support and regular system updates</li>
                </ol>
              </div>

              <div className="card-dark text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Business?</h3>
                <p className="text-lg mb-6 text-white/90">
                  Contact Require Technologies to architect secure, scalable, and intelligent digital platforms tailored to your goals—across AI, software, cloud, and data.
                </p>
                <a href="/contact" className="btn-glossy font-semibold">
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  )
}
