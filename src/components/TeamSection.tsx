interface TeamMember {
  name: string
  role: string
  image: string
}

export default function TeamSection() {
  const teamMembers: TeamMember[] = [
    { 
      name: "Chimaobi David Ibe", 
      role: "Founder",
      image: "/images/team/chimaobi-david-ibe.jpg"
    }
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
        <h2 className="text-3xl font-bold text-center text-white mb-12">Team</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-lg">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-white text-xl mb-2">{member.name}</h3>
                <p className="text-white/90">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
