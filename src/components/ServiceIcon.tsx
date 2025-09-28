'use client'

import { Code, Globe, BarChart3, Cloud, Shield, TrendingUp, Wifi, Bot, Database, Smartphone, Cpu, Lock } from 'lucide-react'

interface ServiceIconProps {
  service: string
  className?: string
}

export default function ServiceIcon({ service, className = "w-10 h-10" }: ServiceIconProps) {
  const iconMap: { [key: string]: any } = {
    'custom-software': Code,
    'digital-platforms': Globe,
    'data-insights': BarChart3,
    'cloud-services': Cloud,
    'cybersecurity': Shield,
    'digital-marketing': TrendingUp,
    'iot-solutions': Wifi,
    'conversational-ai': Bot,
    'enterprise': Database,
    'mobile': Smartphone,
    'ai': Cpu,
    'security': Lock
  }

  const IconComponent = iconMap[service] || Code

  return (
    <div className={`relative ${className}`}>
      <IconComponent className={`w-full h-full text-primary group-hover:text-accent transition-colors`} />
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-accent/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  )
}
