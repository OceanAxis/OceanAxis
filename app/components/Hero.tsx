import { ArrowRight, Ship, Globe, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" aria-label="OceanAxis - Global Shipping Company" className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 bg-gradient-to-br from-navy-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="absolute top-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-navy-200/20 rounded-full blur-xl animate-float hidden lg:block" />
        <div className="absolute bottom-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-200/20 rounded-full blur-xl animate-float hidden xl:block" />

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center relative py-10 sm:py-16">

          <div className="relative z-10 space-y-6 sm:space-y-8 text-center md:text-left">

            <div className="inline-flex items-center px-4 py-2 bg-navy-600/10 rounded-full text-navy-700 text-xs sm:text-sm font-semibold">
              <Ship className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" aria-hidden="true" />
              Trusted by 5,000+ Businesses Across Middle East & Asia
            </div>

            <div className="space-y-3 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-navy-800 via-navy-700 to-gray-800 bg-clip-text text-transparent leading-tight">
                Reliable Ocean, Air & Land
                <span className="block bg-gradient-to-r from-navy-600 to-blue-600 bg-clip-text text-transparent">
                  Freight Services
                </span>
              </h1>
              <p className="text-base sm:text-xl text-navy-700 max-w-lg leading-relaxed mx-auto md:mx-0">
                OceanAxis is a trusted shipping company delivering cargo safely across Middle East, Asia, and 150+ countries. Ocean freight, air freight, and land transport — all under one roof.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center md:justify-start">
              <a href="#services" className="btn-primary flex items-center justify-center text-sm sm:text-base" aria-label="Explore our shipping services">
                Explore Services <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              </a>
              <a href="#contact" className="btn-secondary flex items-center justify-center text-sm sm:text-base" aria-label="Get a free shipping quote">
                Get Free Quote
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-4 sm:pt-8">
              {[
                { icon: Globe, number: '150+', label: 'Countries Served' },
                { icon: Ship, number: '10K+', label: 'Monthly Shipments' },
                { icon: Clock, number: '99.9%', label: 'On-Time Delivery' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-2 sm:p-4">
                  <stat.icon className="w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-navy-600 mx-auto mb-1 sm:mb-2" aria-hidden="true" />
                  <div className="text-lg sm:text-2xl font-bold text-navy-800">{stat.number}</div>
                  <div className="text-navy-600 text-xs sm:text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center mt-4 md:mt-0">
            <div className="relative z-10 bg-gradient-to-br from-navy-600 to-navy-800 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl transform md:rotate-6 hover:rotate-0 transition-transform duration-500 w-full max-w-xs sm:max-w-sm mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center transform md:-rotate-6">
                <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
                  <Ship className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white" aria-hidden="true" />
                </div>
                <h2 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">Your Cargo, Our Priority</h2>
                <p className="text-blue-100 text-sm sm:text-base">Safe • Fast • Reliable</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}