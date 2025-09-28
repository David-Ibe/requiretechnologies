interface ServiceCardProps {
  title: string
  description: string
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="card-dark hover:border-accent/50 hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-white/90 leading-relaxed">{description}</p>
    </div>
  )
}
