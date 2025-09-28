'use client'

import { motion } from 'framer-motion'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
}

export default function GradientText({ children, className = '', animate = false }: GradientTextProps) {
  if (animate) {
    return (
      <motion.span
        className={`bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ${className}`}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      >
        {children}
      </motion.span>
    )
  }

  return (
    <span className={`bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}
