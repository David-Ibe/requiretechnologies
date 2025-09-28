'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface TechImage {
  id: number
  src: string
  alt: string
  category: string
}

export default function AnimatedTechCarousel() {
  const [isVisible, setIsVisible] = useState(false)

  const techImages: TechImage[] = [
    { id: 1, src: '/images/tech/ai-brain.jpg', alt: 'AI Brain Processing', category: 'AI' },
    { id: 2, src: '/images/tech/coding.jpg', alt: 'Software Development', category: 'Development' },
    { id: 3, src: '/images/tech/cybersecurity.jpg', alt: 'Cybersecurity Shield', category: 'Security' },
    { id: 4, src: '/images/tech/cloud-computing.jpg', alt: 'Cloud Infrastructure', category: 'Cloud' },
    { id: 5, src: '/images/tech/mobile-app.jpg', alt: 'Mobile App Development', category: 'Mobile' },
    { id: 6, src: '/images/tech/data-analytics.jpg', alt: 'Data Analytics Dashboard', category: 'Analytics' },
    { id: 7, src: '/images/tech/blockchain.jpg', alt: 'Blockchain Technology', category: 'Blockchain' },
    { id: 8, src: '/images/tech/iot-devices.jpg', alt: 'IoT Connected Devices', category: 'IoT' },
    { id: 9, src: '/images/tech/robotics.jpg', alt: 'Robotic Automation', category: 'Robotics' },
    { id: 10, src: '/images/tech/machine-learning.jpg', alt: 'Machine Learning Models', category: 'ML' }
  ]

  // Duplicate images for seamless loop
  const duplicatedImages = [...techImages, ...techImages]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        className="flex space-x-8"
        animate={{
          x: [0, -50 * techImages.length]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear"
          }
        }}
      >
        {duplicatedImages.map((image, index) => (
          <motion.div
            key={`${image.id}-${index}`}
            className="flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden shadow-lg border border-white/20 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="text-center">
              <div className="text-4xl mb-2">
                {image.category === 'AI' && '🤖'}
                {image.category === 'Development' && '💻'}
                {image.category === 'Security' && '🔒'}
                {image.category === 'Cloud' && '☁️'}
                {image.category === 'Mobile' && '📱'}
                {image.category === 'Analytics' && '📊'}
                {image.category === 'Blockchain' && '⛓️'}
                {image.category === 'IoT' && '🌐'}
                {image.category === 'Robotics' && '🤖'}
                {image.category === 'ML' && '🧠'}
              </div>
              <div className="text-white text-sm font-semibold">{image.category}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/60 to-transparent z-10"></div>
    </div>
  )
}
