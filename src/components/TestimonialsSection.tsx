'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, Building2, User } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  image: string
  content: string
  rating: number
  project: string
  result: string
}

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "Lagos Retail Co.",
      image: "/images/testimonials/sarah-johnson.jpg",
      content: "Require Technologies transformed our business with their innovative e-commerce platform. Our online sales increased by 300% in just 6 months. Their attention to detail and understanding of the Nigerian market is exceptional.",
      rating: 5,
      project: "E-Commerce Platform",
      result: "300% increase in online sales"
    },
    {
      id: 2,
      name: "Michael Adebayo",
      role: "Founder & CTO",
      company: "PayFast NG",
      image: "/images/testimonials/michael-adebayo.jpg",
      content: "The mobile app they developed for our fintech startup has been a game-changer. We now have over 50,000 active users and growing. The security features and payment integration are top-notch.",
      rating: 5,
      project: "Fintech Mobile App",
      result: "50,000+ active users"
    },
    {
      id: 3,
      name: "Dr. Fatima Ibrahim",
      role: "Medical Director",
      company: "MedCare Clinic",
      image: "/images/testimonials/fatima-ibrahim.jpg",
      content: "Their healthcare management system revolutionized our clinic operations. We've seen a 60% reduction in administrative time and improved patient satisfaction. Highly professional team.",
      rating: 5,
      project: "Healthcare Management System",
      result: "60% reduction in admin time"
    },
    {
      id: 4,
      name: "David Okonkwo",
      role: "Operations Manager",
      company: "AgriTech Solutions",
      image: "/images/testimonials/david-okonkwo.jpg",
      content: "The IoT solution they built for our agricultural monitoring has significantly improved our crop yields. Real-time data and automated alerts have made farming more efficient and profitable.",
      rating: 5,
      project: "IoT Smart Agriculture",
      result: "40% increase in crop yields"
    },
    {
      id: 5,
      name: "Grace Williams",
      role: "Marketing Director",
      company: "Digital Marketing Pro",
      image: "/images/testimonials/grace-williams.jpg",
      content: "The marketing dashboard they created has transformed how we track campaigns and ROI. Our client satisfaction has improved dramatically, and we can now provide real-time insights.",
      rating: 5,
      project: "Digital Marketing Dashboard",
      result: "85% improvement in campaign ROI"
    },
    {
      id: 6,
      name: "James Okafor",
      role: "IT Director",
      company: "Nigerian Bank Ltd",
      image: "/images/testimonials/james-okafor.jpg",
      content: "Their conversational AI solution for customer service has been outstanding. We've achieved 85% automation rate and our customers love the instant, accurate responses. Game-changing technology.",
      rating: 5,
      project: "Banking AI Assistant",
      result: "85% customer service automation"
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
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-dark rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-accent/30 relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-12 h-12 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-white/90 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Project & Result */}
                <div className="mb-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-white" />
                    <span className="text-sm font-semibold text-white">{testimonial.project}</span>
                  </div>
                  <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium inline-block">
                    Result: {testimonial.result}
                  </div>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-accent transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/80 text-sm">{testimonial.role}</p>
                    <p className="text-accent text-sm font-medium">{testimonial.company}</p>
                  </div>
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="card-dark rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Overall Client Rating</h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-accent fill-current" />
              ))}
            </div>
            <p className="text-3xl font-bold text-accent mb-2">5.0/5.0</p>
            <p className="text-white/90">Based on 30+ client reviews</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
