import { Truck, Plane, Ship, Package } from 'lucide-react'

const services = [
  {
    icon: Ship,
    title: 'Ocean Freight',
    description: 'Full container load (FCL) and less than container load (LCL) services worldwide.',
    stats: '500+ Routes'
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Express air cargo solutions for time-sensitive shipments.',
    stats: '24-48 Hours'
  },
  {
    icon: Truck,
    title: 'Road Transport',
    description: 'Door-to-door trucking services across continents.',
    stats: 'Nationwide'
  },
  {
    icon: Package,
    title: 'Warehousing',
    description: 'Secure storage facilities with real-time inventory tracking.',
    stats: '1M+ sq ft'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
            Comprehensive Shipping Solutions
          </h2>
          <p className="text-base sm:text-xl text-navy-700 max-w-2xl mx-auto px-2">
            From door-to-door delivery to complex supply chain management, we handle it all.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group hover:shadow-2xl hover:-translate-y-2 sm:hover:-translate-y-4 transition-all duration-500 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-navy-100 hover:border-navy-200"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-navy-500 to-navy-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <service.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-navy-800 mb-2 sm:mb-3 lg:mb-4 group-hover:text-navy-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-navy-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
              <div className="flex items-center text-navy-500 font-semibold">
                <span className="text-lg sm:text-xl lg:text-2xl">{service.stats}</span>
                <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}