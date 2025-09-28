'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ProgressBarProps {
  percentage: number
  label: string
  color?: 'primary' | 'accent'
}

export default function ProgressBar({ percentage, label, color = 'accent' }: ProgressBarProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const colorClasses = {
    primary: 'bg-primary',
    accent: 'bg-accent'
  }

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-white font-medium">{label}</span>
        <span className="text-white/80">{percentage}%</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
        <motion.div
          className={`h-full ${colorClasses[color]} rounded-full`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
