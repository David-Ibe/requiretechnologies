'use client'

interface AnimatedBackgroundProps {
  imageUrl: string
  overlay?: boolean
  overlayOpacity?: string
  className?: string
  children: React.ReactNode
}

export default function AnimatedBackground({
  imageUrl,
  overlay = true,
  overlayOpacity = '60',
  className = '',
  children,
}: AnimatedBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Primary Animated Background Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat animated-bg"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: '120%',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Secondary Parallax Layer for Depth */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 animated-bg-reverse"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: '140%',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 z-[1]"
          style={{
            backgroundColor: `rgba(0, 0, 0, ${parseInt(overlayOpacity) / 100})`
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  )
}

