interface ServiceCardProps {
  title: string
  description: string
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="card-minimal hover:border-accent/50 hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
      <p className="text-neutral leading-relaxed">{description}</p>
    </div>
  )
}
