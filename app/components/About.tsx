import { CheckCircle, Ship, Leaf, Zap } from 'lucide-react'

const pillars = [
  {
    icon: Ship,
    title: 'Global Reach',
    description: 'A vast network of partners, ports, and carriers ensures your cargo moves seamlessly across every ocean and continent.',
  },
  {
    icon: Zap,
    title: 'Smart Technology',
    description: 'Real-time tracking, AI-optimized routing, and a digital-first platform keep you in control at every stage of the journey.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'We offset 100% of our carbon footprint and partner only with carriers committed to cleaner, greener shipping.',
  },
]

const milestones = [
  { year: '2008', event: 'Founded in Singapore with a vision to simplify global trade.' },
  { year: '2013', event: 'Expanded to 50 countries and launched our digital tracking platform.' },
  { year: '2018', event: 'Reached 5,000 clients milestone and opened our Americas hub.' },
  { year: '2024', event: 'Operating in 150+ countries with 10,000+ monthly shipments.' },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mission */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 sm:mb-24 lg:mb-32">

          {/* Visual card */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-navy-700 to-navy-900 rounded-2xl sm:rounded-3xl p-1 shadow-2xl">
              <div className="bg-gradient-to-br from-navy-600 to-navy-800 rounded-[18px] sm:rounded-[22px] p-5 sm:p-8 lg:p-10 space-y-4 sm:space-y-6">

                {/* Live shipment card */}
                <div className="bg-white/10 backdrop-blur rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-3">Live Shipment</p>
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 flex-wrap">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Ship className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white font-bold text-sm sm:text-base">OA-2024-08871</p>
                      <p className="text-blue-300 text-xs sm:text-sm">Singapore → Rotterdam</p>
                    </div>
                    <span className="ml-auto px-2 sm:px-3 py-1 bg-green-400/20 text-green-300 text-xs font-semibold rounded-full flex-shrink-0">
                      On Track
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                    <div className="bg-gradient-to-r from-blue-400 to-green-400 h-2 rounded-full" style={{ width: '68%' }} />
                  </div>
                  <div className="flex justify-between text-blue-300 text-xs">
                    <span>Departed</span>
                    <span>68% Complete</span>
                    <span>ETA: 4 days</span>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {[['24/7', 'Support'], ['ISO', 'Certified'], ['SOC2', 'Compliant']].map(([val, lbl]) => (
                    <div key={lbl} className="bg-white/10 rounded-xl p-3 sm:p-4 text-center">
                      <p className="text-white font-bold text-base sm:text-lg">{val}</p>
                      <p className="text-blue-300 text-xs">{lbl}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl shadow-xl p-3 sm:p-5 border border-navy-100 z-20">
              <p className="text-2xl sm:text-3xl font-bold text-navy-800">16+</p>
              <p className="text-navy-500 text-xs sm:text-sm font-medium">Years of Excellence</p>
            </div>

            <div className="absolute -top-8 -left-8 w-64 h-64 bg-navy-100/50 rounded-full blur-2xl -z-10" />
          </div>

          {/* Text content */}
          <div className="space-y-5 sm:space-y-8 mt-8 lg:mt-0">
            <span className="inline-block px-4 py-2 bg-navy-600/10 rounded-full text-navy-700 text-sm font-semibold">
              About OceanAxis
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-transparent leading-tight">
              Connecting the World, One Shipment at a Time
            </h2>
            <p className="text-base sm:text-lg text-navy-600 leading-relaxed">
              Founded in 2008, OceanAxis was born from a simple belief: global trade shouldn't be complicated.
              We built our company around transparency, reliability, and technology — empowering businesses of
              every size to compete on a world stage.
            </p>
            <p className="text-base sm:text-lg text-navy-600 leading-relaxed">
              Today, we manage thousands of shipments each month, backed by a team of 1,200+ logistics
              professionals and a proprietary platform that gives clients full visibility from warehouse to destination.
            </p>
            <ul className="space-y-3">
              {[
                'ISO 9001:2015 Certified Operations',
                'Real-time shipment tracking & alerts',
                'Dedicated account managers for every client',
                'Carbon-neutral shipping options available',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-navy-600 mt-0.5 flex-shrink-0" />
                  <span className="text-navy-700 font-medium text-sm sm:text-base">{point}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary inline-flex items-center">
              Work With Us
            </a>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-16 sm:mb-24 lg:mb-32">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-navy-100 hover:border-navy-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-white to-navy-50/50"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-navy-500 to-navy-700 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-md">
                <p.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy-800 mb-2 sm:mb-3">{p.title}</h3>
              <p className="text-navy-600 leading-relaxed text-sm sm:text-base">{p.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="text-center mb-10 sm:mb-16">
          <h3 className="text-2xl sm:text-4xl font-bold text-navy-800 mb-3 sm:mb-4">Our Journey</h3>
          <p className="text-navy-600 max-w-xl mx-auto text-sm sm:text-base">
            From a small startup in Singapore to a global logistics leader.
          </p>
        </div>

        <div className="relative">
          {/* Center line — desktop only */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy-200 to-transparent hidden md:block" />

          {/* Mobile: left line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy-200 to-transparent md:hidden" />

          <div className="space-y-8 sm:space-y-12">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-4 md:items-center md:gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Mobile layout */}
                <div className="flex flex-col items-center md:hidden flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy-600 to-navy-800 rounded-full flex items-center justify-center shadow-lg z-10">
                    <span className="text-white font-bold text-xs">{m.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 md:hidden`}>
                  <div className="bg-white border border-navy-100 rounded-2xl p-4 shadow-md">
                    <p className="text-navy-700 leading-relaxed text-sm">{m.event}</p>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className={`hidden md:flex flex-1 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 max-w-sm">
                    <p className="text-navy-700 leading-relaxed">{m.event}</p>
                  </div>
                </div>

                <div className="hidden md:flex flex-shrink-0 w-20 h-20 bg-gradient-to-br from-navy-600 to-navy-800 rounded-full items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-sm">{m.year}</span>
                </div>

                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}