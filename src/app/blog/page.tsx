import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'

export default function Blog() {
  const posts = [
    {
      title: "AI Solutions for the Banking Sector: Transforming Customer Service in Nigeria",
      excerpt: "How Conversational AI is revolutionizing customer service in Nigerian banks and financial institutions, with enterprise-grade solutions designed for high-security requirements.",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Artificial Intelligence",
      slug: "ai-solutions-banking-sector"
    },
    {
      title: "Digital Transformation in West Africa: Opportunities and Challenges",
      excerpt: "How West African enterprises are leveraging technology to drive growth and innovation in the digital economy, with insights into implementation strategies and success stories.",
      date: "January 10, 2025",
      readTime: "10 min read",
      category: "Digital Transformation",
      slug: "digital-transformation-west-africa"
    },
    {
      title: "Cybersecurity for Nigerian Enterprises: Protecting Digital Assets in the Digital Age",
      excerpt: "Essential cybersecurity strategies and solutions for Nigerian businesses in an increasingly connected world, covering regulatory compliance and implementation best practices.",
      date: "January 5, 2025",
      readTime: "12 min read",
      category: "Cybersecurity",
      slug: "cybersecurity-nigerian-enterprises"
    }
  ]

  const categories = ["All", "Artificial Intelligence", "Digital Transformation", "Cybersecurity", "Cloud Services", "Data Analytics"]

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
          <h1 className="text-4xl font-bold mb-6">Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Insights on digital transformation, technology solutions, and business success in West Africa.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section 
        className="py-8 relative"
        style={{
          backgroundImage: `url('/images/backgrounds/hero-main.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-white text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
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
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Article</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our latest insights on technology and business growth in West Africa.
            </p>
          </div>
          
            <div className="card-dark max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                  {posts[0].category}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{posts[0].title}</h3>
                <p className="text-white/90 mb-6 leading-relaxed">{posts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-white/80">
                    <span>{posts[0].date}</span>
                    <span className="mx-2">•</span>
                    <span>{posts[0].readTime}</span>
                  </div>
                  <Link 
                    href={`/blog/${posts[0].slug}`}
                    className="text-accent hover:text-white font-semibold"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
              <div className="h-64 rounded-lg overflow-hidden">
                <img 
                  src="/images/blog/ai-solutions-banking.jpg" 
                  alt="AI Solutions for Banking Sector"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
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
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Latest Articles</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay updated with the latest trends and insights in technology and business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
                <article key={index} className="card-dark hover:shadow-lg transition-shadow">
                  <div className="h-48 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={post.slug === 'digital-transformation-west-africa' ? '/images/blog/digital-transformation.jpg' : '/images/blog/cybersecurity-enterprises.jpg'}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                
                <div className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-3">
                  {post.category}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-white/90 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-white/80 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-accent hover:text-white font-semibold"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Stay Updated</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Subscribe to our newsletter and never miss the latest insights on technology and business growth in West Africa.
            </p>
            
            <div className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 font-semibold">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-white/80 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
              <a 
                href="/services" 
                className="bg-accent text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
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
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Popular Topics</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore our most read articles and trending topics in technology and business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-dark text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2 text-white">AI Solutions</h3>
              <p className="text-white/90">Enterprise-grade AI platforms for banking and finance</p>
            </div>
            
              <div className="card-dark text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2 text-white">Custom Software</h3>
              <p className="text-white/90">Tailored software solutions for business needs</p>
            </div>
            
              <div className="card-dark text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2 text-white">Cybersecurity</h3>
              <p className="text-white/90">Protecting your business from cyber threats</p>
            </div>
            
              <div className="card-dark text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2 text-white">Data Analytics</h3>
              <p className="text-white/90">Turning data into actionable business insights</p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  )
}