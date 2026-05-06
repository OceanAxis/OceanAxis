'use client'
import { useEffect, useRef, useState } from 'react'
import { TrendingUp, Users, Globe, Award } from 'lucide-react'

const stats = [
  { icon: Globe, number: 150, suffix: '+', label: 'Countries Served', description: 'Global network spanning 6 continents' },
  { icon: Users, number: 5000, suffix: '+', label: 'Happy Clients', description: 'Businesses that trust OceanAxis' },
  { icon: TrendingUp, number: 10, suffix: 'K+', label: 'Shipments/Month', description: 'Delivered safely every month' },
  { icon: Award, number: 99.9, suffix: '%', label: 'On-Time Delivery', description: 'Industry-leading reliability' },
]

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(parseFloat((eased * target).toFixed(target % 1 !== 0 ? 1 : 0)))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}

function StatCard({ stat, index, inView }: { stat: typeof stats[0]; index: number; inView: boolean }) {
  const count = useCountUp(stat.number, 2000, inView)

  return (
    <div
      className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-navy-100 hover:border-navy-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy-50/50 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl" />
      <div className="relative z-10">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-navy-500 to-navy-700 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
        </div>
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 mb-1 sm:mb-2">
          {count}{stat.suffix}
        </div>
        <div className="text-base sm:text-lg lg:text-xl font-semibold text-navy-700 mb-1 sm:mb-2">
          {stat.label}
        </div>
        <p className="text-navy-500 text-xs sm:text-sm leading-relaxed">{stat.description}</p>
      </div>
      <div className="absolute -bottom-6 -right-6 w-20 h-20 sm:w-24 sm:h-24 bg-navy-100/50 rounded-full group-hover:bg-navy-200/50 transition-colors duration-300" />
    </div>
  )
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats" ref={sectionRef} className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-navy-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[200px] sm:h-[300px] lg:h-[400px] bg-navy-200/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 bg-navy-600/10 rounded-full text-navy-700 text-sm font-semibold mb-4 sm:mb-6">
            Our Impact in Numbers
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
            Trusted at Global Scale
          </h2>
          <p className="text-base sm:text-xl text-navy-600 max-w-2xl mx-auto px-2">
            Every number represents a promise kept, a client served, and a milestone achieved on our journey to redefine global shipping.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <StatCard key={idx} stat={stat} index={idx} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  )
}