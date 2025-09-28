'use client'

import { motion } from 'framer-motion'
import ProgressBar from './ProgressBar'
import AnimatedSection from './AnimatedSection'

export default function SkillsSection() {
  const skills = [
    { name: 'Web Development', percentage: 95 },
    { name: 'Mobile Development', percentage: 90 },
    { name: 'AI & Machine Learning', percentage: 85 },
    { name: 'Cloud Solutions', percentage: 88 },
    { name: 'Cybersecurity', percentage: 82 },
    { name: 'Data Analytics', percentage: 87 }
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
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Our Expertise</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We combine technical excellence with deep industry knowledge to deliver exceptional results.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProgressBar
                percentage={skill.percentage}
                label={skill.name}
                color="accent"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
