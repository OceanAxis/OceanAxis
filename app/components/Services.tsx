import { Truck, Plane, Ship, Package } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Ship,
    title: 'Ocean Freight',
    description: 'Full container load (FCL) and less than container load (LCL) sea freight services across Middle East and Asia. 500+ shipping routes worldwide.',
    stats: '500+ Routes',
    href: '/services/ocean-freight',
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Express air cargo solutions for time-sensitive shipments between Asia, Middle East, and beyond. Door-to-door delivery in 24–48 hours.',
    stats: '24-48 Hours',
    href: '/services/air-freight',
  },
  {
    icon: Truck,
    title: 'Land & Road Transport',
    description: 'Reliable door-to-door land freight and road transport services across Pakistan, UAE, and neighboring countries.',
    stats: 'Nationwide',
    href: '/services/road-transport',
  },
  {
    icon: Package,
    title: 'Warehousing',
    description: 'Secure cargo storage facilities with real-time inventory tracking. Strategic warehouse locations across the Middle East.',
    stats: '1M+ sq ft',
    href: '/services/warehousing',
  },
]

interface Service {
  icon: React.ElementType
  title: string
  description: string
  stats: string
  href: string
}

export default function Services() {
  return (
    <section id="services" aria-label="OceanAxis Shipping Services" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 bg-navy-600/10 rounded-full text-navy-700 text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
            Ocean, Air & Land Freight Services
          </h2>
          <p className="text-base sm:text-xl text-navy-700 max-w-2xl mx-auto px-2">
            From door-to-door cargo delivery to full supply chain management across Middle East and Asia — OceanAxis handles it all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {services.map((service: Service, idx: number) => (
            <Link
              key={idx}
              href={service.href}
              aria-label={`Learn more about ${service.title}`}
              className="group hover:shadow-2xl hover:-translate-y-2 sm:hover:-translate-y-4 transition-all duration-500 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-navy-100 hover:border-navy-200 block"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-navy-500 to-navy-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <service.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-navy-800 mb-2 sm:mb-3 lg:mb-4 group-hover:text-navy-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-navy-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
              <div className="flex items-center text-navy-500 font-semibold">
                <span className="text-lg sm:text-xl lg:text-2xl">{service.stats}</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200 inline-block" aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}