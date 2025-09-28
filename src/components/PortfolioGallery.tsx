interface Project {
  id: number
  title: string
  category: string
}

export default function PortfolioGallery() {
  const projects: Project[] = [
    { id: 1, title: "Banking AI Assistant", category: "AI" },
    { id: 2, title: "E-Commerce Platform", category: "Web" },
    { id: 3, title: "Fintech Mobile App", category: "Mobile" },
    { id: 4, title: "IoT Agriculture", category: "IoT" },
    { id: 5, title: "Healthcare System", category: "Enterprise" },
    { id: 6, title: "Marketing Dashboard", category: "Analytics" }
  ]

  return (
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
        <h2 className="text-3xl font-bold text-center text-white mb-12">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="card-dark hover:border-accent/50 transition-colors">
              <div className="w-full h-32 rounded-lg mb-4 overflow-hidden">
                <img 
                  src={`/images/portfolio/${project.title.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-white mb-2">{project.title}</h3>
              <p className="text-white/90 text-sm">{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
