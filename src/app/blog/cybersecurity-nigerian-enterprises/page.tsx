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
              Cybersecurity for Nigerian Enterprises: Protecting Digital Assets in the Digital Age
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Published on January 5, 2025
            </p>
            <p className="text-lg text-white/80">
              Essential cybersecurity strategies and solutions for Nigerian businesses in an increasingly connected world.
            </p>
          </div>
        </div>
      </section>

        {/* Featured Image */}
        <section 
          className="py-12 relative"
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
              <img 
                src="/images/blog/cybersecurity-hero.jpg" 
                alt="Cybersecurity for Nigerian Enterprises"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
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
              <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary mb-6">The Cybersecurity Landscape in Nigeria</h2>
              
              <p className="text-lg text-neutral leading-relaxed mb-6">
                As Nigeria's digital economy continues to grow, so do the cybersecurity threats facing enterprises. With increasing digital adoption, cloud migration, and remote work arrangements, Nigerian businesses are becoming prime targets for cybercriminals.
              </p>

              <p className="text-lg text-neutral leading-relaxed mb-6">
                The Nigerian Communications Commission (NCC) reports that cybercrime costs the Nigerian economy over $500 million annually, with small and medium enterprises being particularly vulnerable due to limited cybersecurity resources and awareness.
              </p>

              <h3 className="text-2xl font-bold text-primary mb-4">Common Cybersecurity Threats in Nigeria</h3>
              
              <p className="text-lg text-neutral leading-relaxed mb-6">
                Nigerian enterprises face a diverse range of cybersecurity threats that require comprehensive protection strategies:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-6 border border-red-200 rounded-lg">
                  <h5 className="text-lg font-bold text-red-700 mb-3">Phishing Attacks</h5>
                  <p className="text-neutral">
                    Sophisticated email and SMS phishing campaigns targeting Nigerian businesses, often impersonating banks and government agencies.
                  </p>
                </div>
                
                <div className="bg-red-50 p-6 border border-red-200 rounded-lg">
                  <h5 className="text-lg font-bold text-red-700 mb-3">Ransomware</h5>
                  <p className="text-neutral">
                    Increasing ransomware attacks targeting critical infrastructure and business systems, with demands often in cryptocurrency.
                  </p>
                </div>
                
                <div className="bg-red-50 p-6 border border-red-200 rounded-lg">
                  <h5 className="text-lg font-bold text-red-700 mb-3">Business Email Compromise (BEC)</h5>
                  <p className="text-neutral">
                    Fraudulent schemes targeting financial transactions and sensitive business communications.
                  </p>
                </div>
                
                <div className="bg-red-50 p-6 border border-red-200 rounded-lg">
                  <h5 className="text-lg font-bold text-red-700 mb-3">Insider Threats</h5>
                  <p className="text-neutral">
                    Malicious or negligent actions by employees or contractors that compromise business security.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-bold text-primary mb-4">Recent Cybersecurity Statistics in Nigeria:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-primary mb-2">Attack Frequency:</h5>
                    <ul className="text-neutral space-y-1">
                      <li>• 1 in 3 Nigerian businesses experienced a cyber attack in 2024</li>
                      <li>• Average cost of a data breach: ₦15.2 million</li>
                      <li>• 78% of attacks target small and medium enterprises</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-primary mb-2">Recovery Challenges:</h5>
                    <ul className="text-neutral space-y-1">
                      <li>• Average recovery time: 45 days</li>
                      <li>• 60% of businesses lack incident response plans</li>
                      <li>• Only 35% have cyber insurance coverage</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">Regulatory Framework and Compliance</h3>
              
              <p className="text-lg text-neutral leading-relaxed mb-6">
                Nigerian enterprises must navigate a complex regulatory landscape that includes both local and international cybersecurity requirements:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-blue-50 p-6 border border-blue-200 rounded-lg">
                  <h4 className="text-xl font-bold text-primary mb-3">Nigerian Data Protection Regulation (NDPR)</h4>
                  <p className="text-neutral mb-3">
                    The NDPR requires organizations to implement appropriate technical and organizational measures to protect personal data.
                  </p>
                  <ul className="list-disc list-inside text-neutral space-y-1">
                    <li>Data protection impact assessments</li>
                    <li>Breach notification requirements</li>
                    <li>Data subject rights management</li>
                    <li>Privacy by design implementation</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 border border-blue-200 rounded-lg">
                  <h4 className="text-xl font-bold text-primary mb-3">Central Bank of Nigeria (CBN) Guidelines</h4>
                  <p className="text-neutral mb-3">
                    Financial institutions must comply with CBN cybersecurity guidelines for risk management and incident reporting.
                  </p>
                  <ul className="list-disc list-inside text-neutral space-y-1">
                    <li>Cybersecurity risk assessment frameworks</li>
                    <li>Incident response and reporting procedures</li>
                    <li>Third-party risk management</li>
                    <li>Business continuity planning</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">Comprehensive Cybersecurity Solutions</h3>
              
              <p className="text-lg text-neutral leading-relaxed mb-6">
                At Require Technologies Limited, we provide comprehensive cybersecurity solutions tailored to Nigerian enterprises:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 border border-gray-200 rounded-lg">
                  <h5 className="text-lg font-bold text-primary mb-3">🔒 Security Assessment & Auditing</h5>
                  <p className="text-neutral">
                    Comprehensive security assessments to identify vulnerabilities and compliance gaps in your IT infrastructure.
                  </p>
                </div>
                
                <div className="bg-white p-6 border border-gray-200 rounded-lg">
                  <h5 className="text-lg font-bold text-primary mb-3">🛡️ Endpoint Protection</h5>
                  <p className="text-neutral">
                    Advanced endpoint detection and response (EDR) solutions to protect devices and workstations from threats.
                  </p>
                </div>
                
                <div className="bg-white p-6 border border-gray-200 rounded-lg">
                  <h5 className="text-lg font-bold text-primary mb-3">🌐 Network Security</h5>
                  <p className="text-neutral">
                    Firewall management, intrusion detection systems, and network monitoring to secure your digital perimeter.
                  </p>
                </div>
                
                <div className="bg-white p-6 border border-gray-200 rounded-lg">
                  <h5 className="text-lg font-bold text-primary mb-3">☁️ Cloud Security</h5>
                  <p className="text-neutral">
                    Secure cloud migration and management with identity and access management (IAM) solutions.
                  </p>
                </div>
                
                <div className="bg-white p-6 border border-gray-200 rounded-lg">
                  <h5 className="text-lg font-bold text-primary mb-3">📊 Security Monitoring</h5>
                  <p className="text-neutral">
                    24/7 security operations center (SOC) services with real-time threat detection and response.
                  </p>
                </div>
                
                <div className="bg-white p-6 border border-gray-200 rounded-lg">
                  <h5 className="text-lg font-bold text-primary mb-3">🎓 Security Training</h5>
                  <p className="text-neutral">
                    Employee cybersecurity awareness training and phishing simulation programs.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">Implementation Success Stories</h3>
              
              <div className="bg-accent/10 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-bold text-primary mb-4">Case Study: Nigerian Manufacturing Company</h4>
                <p className="text-neutral mb-4">
                  A leading manufacturing company in Lagos implemented our comprehensive cybersecurity solution:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-primary mb-2">Before Implementation:</h5>
                    <ul className="text-neutral space-y-1">
                      <li>• No formal security policies</li>
                      <li>• Outdated antivirus software</li>
                      <li>• No network monitoring</li>
                      <li>• Limited employee awareness</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-primary mb-2">After Implementation:</h5>
                    <ul className="text-neutral space-y-1">
                      <li>• Comprehensive security framework</li>
                      <li>• Advanced threat protection</li>
                      <li>• 24/7 security monitoring</li>
                      <li>• Regular security training</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white rounded-lg">
                  <h5 className="font-bold text-primary mb-2">Results Achieved:</h5>
                  <ul className="text-neutral space-y-1">
                    <li>• 95% reduction in security incidents</li>
                    <li>• 100% compliance with NDPR requirements</li>
                    <li>• 60% improvement in incident response time</li>
                    <li>• 40% reduction in security-related costs</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">Best Practices for Nigerian Enterprises</h3>
              
              <p className="text-lg text-neutral leading-relaxed mb-6">
                Based on our experience working with Nigerian enterprises, here are essential cybersecurity best practices:
              </p>

              <div className="bg-primary/10 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-bold text-primary mb-4">Essential Cybersecurity Checklist:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-primary mb-3">Technical Measures:</h5>
                    <ul className="list-disc list-inside text-neutral space-y-1">
                      <li>Implement multi-factor authentication (MFA)</li>
                      <li>Regular software updates and patch management</li>
                      <li>Data encryption for sensitive information</li>
                      <li>Secure backup and disaster recovery plans</li>
                      <li>Network segmentation and access controls</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-primary mb-3">Organizational Measures:</h5>
                    <ul className="list-disc list-inside text-neutral space-y-1">
                      <li>Develop comprehensive security policies</li>
                      <li>Regular employee security training</li>
                      <li>Incident response procedures</li>
                      <li>Vendor risk management</li>
                      <li>Regular security assessments</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">Emerging Cybersecurity Trends</h3>
              
              <p className="text-lg text-neutral leading-relaxed mb-6">
                The cybersecurity landscape in Nigeria is evolving rapidly, with several emerging trends:
              </p>

              <ul className="list-disc list-inside text-neutral space-y-2 mb-8">
                <li><strong>Zero Trust Architecture:</strong> Implementing "never trust, always verify" security models</li>
                <li><strong>AI-Powered Security:</strong> Machine learning for threat detection and response</li>
                <li><strong>Cloud Security:</strong> Enhanced security for cloud-native applications</li>
                <li><strong>Identity and Access Management:</strong> Advanced IAM solutions for hybrid work environments</li>
                <li><strong>Security Automation:</strong> Automated incident response and threat hunting</li>
                <li><strong>Privacy-Enhancing Technologies:</strong> Solutions that protect data while enabling analysis</li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mb-4">Getting Started with Cybersecurity</h3>
              
              <p className="text-lg text-neutral leading-relaxed mb-6">
                Ready to strengthen your organization's cybersecurity posture? Our implementation process includes:
              </p>

              <div className="bg-primary/10 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-bold text-primary mb-4">Cybersecurity Implementation Process:</h4>
                <ol className="list-decimal list-inside text-neutral space-y-3">
                  <li><strong>Security Assessment:</strong> Comprehensive evaluation of current security posture and vulnerabilities</li>
                  <li><strong>Risk Analysis:</strong> Identification and prioritization of security risks and compliance requirements</li>
                  <li><strong>Strategy Development:</strong> Custom cybersecurity strategy aligned with business objectives</li>
                  <li><strong>Solution Implementation:</strong> Deployment of security technologies and processes</li>
                  <li><strong>Training & Awareness:</strong> Employee education and security awareness programs</li>
                  <li><strong>Monitoring & Maintenance:</strong> Ongoing security monitoring and continuous improvement</li>
                </ol>
              </div>

              <div className="bg-accent text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Secure Your Digital Future Today</h3>
                <p className="text-lg mb-6">
                  Don't wait for a security breach to take action. Contact Require Technologies to discuss how our cybersecurity solutions can protect your business.
                </p>
                <a href="/contact" className="bg-white text-accent px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Security Assessment
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
