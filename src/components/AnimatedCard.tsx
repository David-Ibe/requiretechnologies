'use client'

import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  tilt?: boolean
}

export default function AnimatedCard({ children, className = '', tilt = true }: AnimatedCardProps) {
  const cardContent = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  )

  if (tilt) {
    return (
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={1000}
        scale={1.02}
        transitionSpeed={300}
        gyroscope={true}
      >
        {cardContent}
      </Tilt>
    )
  }

  return cardContent
}
