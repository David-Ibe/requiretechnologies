'use client'

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({ end, suffix = '', duration = 2, className = '' }: AnimatedCounterProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className={className}>
      {inView && (
        <CountUp
          end={end}
          duration={duration}
          suffix={suffix}
          useEasing={true}
        />
      )}
    </div>
  )
}
