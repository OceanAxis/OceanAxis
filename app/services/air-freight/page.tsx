

interface StatItem {
  value: string;
  label: string;
}

interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

export default function AirFreightPage() {

  const stats: StatItem[] = [
    { value: "150+", label: "Destinations" },
    { value: "24h", label: "Express Delivery" },
    { value: "99.8%", label: "On-Time Rate" },
    { value: "50K+", label: "Shipments / Year" },
  ];

  const features: FeatureItem[] = [
    {
      icon: "✈️",
      title: "Express Air Freight",
      desc: "Door-to-door delivery in as little as 24–48 hours to major global hubs. Priority handling at every step.",
    },
    {
      icon: "📦",
      title: "Charter & Cargo Aircraft",
      desc: "Dedicated aircraft capacity for oversized, time-critical, or high-value cargo. Fully customisable solutions.",
    },
    {
      icon: "🌐",
      title: "Global Network",
      desc: "Partnerships with 80+ airlines and freight forwarders ensure seamless coverage across 6 continents.",
    },
    {
      icon: "🔒",
      title: "Secure Handling",
      desc: "Temperature-controlled options, hazmat certification, and real-time tracking for complete peace of mind.",
    },
    {
      icon: "📋",
      title: "Customs Clearance",
      desc: "Our in-house customs brokers handle documentation, duties, and compliance in every destination country.",
    },
    {
      icon: "📡",
      title: "Live Tracking",
      desc: "Track your shipment flight-by-flight with automated alerts and a dedicated account manager.",
    },
  ];

  const certifications: string[] = [
    "IATA Certified Partner",
    "24/7 Operations Center",
    "Real-Time Cargo Tracking",
    "Dangerous Goods Approved",
  ];

  const steps: { step: string; title: string; desc: string }[] = [
    { step: "01", title: "Request a Quote", desc: "Fill out our quick form with your shipment details." },
    { step: "02", title: "We Plan the Route", desc: "Our team selects the fastest and most cost-effective route." },
    { step: "03", title: "Pickup & Dispatch", desc: "We collect your cargo and dispatch it on the next available flight." },
    { step: "04", title: "Delivery & Confirmation", desc: "Real-time updates until your shipment is delivered and signed for." },
  ];

  return (
    
    <main className="bg-white text-[#0a1628]" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a1628]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80')" }}
        />
        <div
          className="absolute bottom-0 right-0 w-1/2 h-full bg-[#2e6be6] opacity-10"
          style={{ clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-6 border border-[#c9a84c]/40 px-3 py-1 rounded-full">
              Air Freight Services
            </span>
            <h1
              className="text-5xl md:text-6xl font-black leading-tight text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Speed Without<br />
              <span className="text-[#2e6be6]">Compromise.</span>
            </h1>
            <p className="text-[#8a9abf] text-lg leading-relaxed mb-10 max-w-md">
              When time is the most critical factor, our global air freight network delivers your
              cargo faster than you thought possible — safely, securely, and on schedule.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/quote" className="bg-[#2e6be6] hover:bg-[#1e5bd6] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg">
                Get a Quote
              </a>
              <a href="/contact" className="border border-white/20 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200">
                Talk to an Expert
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s: StatItem) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition">
                <p className="text-4xl font-black text-white mb-1">{s.value}</p>
                <p className="text-[#8a9abf] text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERT BAND */}
      <section className="bg-[#122040] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6 text-white text-sm">
          {certifications.map((t: string) => (
            <div key={t} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c9a84c] inline-block" />
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 bg-[#f4f7fc]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-xl">
            <span className="text-[#2e6be6] text-xs font-semibold tracking-widest uppercase">What We Offer</span>
            <h2
              className="text-4xl font-black text-[#0a1628] mt-3 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Complete Air Freight Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f: FeatureItem) => (
              <div key={f.title} className="bg-white rounded-2xl p-8 border border-[#e0e8f5] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-[#0a1628] mb-2 group-hover:text-[#2e6be6] transition-colors">{f.title}</h3>
                <p className="text-[#5a6a88] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="relative h-72 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=1600&q=80"
          alt="Cargo being loaded onto aircraft"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a1628]/60 flex items-center justify-center">
          <p
            className="text-white text-3xl md:text-5xl font-black text-center px-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your cargo, airborne in hours — not days.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <span className="text-[#2e6be6] text-xs font-semibold tracking-widest uppercase">How It Works</span>
            <h2
              className="text-4xl font-black text-[#0a1628] mt-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Simple. Fast. Reliable.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((p) => (
              <div key={p.step}>
                <div className="text-6xl font-black text-[#e0e8f5] leading-none">{p.step}</div>
                <h3 className="text-base font-bold text-[#0a1628] mt-2 mb-1">{p.title}</h3>
                <p className="text-[#5a6a88] text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1628] py-20 px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-black text-white mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Ready to ship by air?
        </h2>
        <p className="text-[#8a9abf] mb-8 text-lg max-w-xl mx-auto">
          Get a personalised air freight quote in under 2 minutes.
        </p>
        <a href="/quote" className="inline-block bg-[#2e6be6] hover:bg-[#1e5bd6] text-white font-semibold px-10 py-4 rounded-lg transition shadow-lg text-lg">
          Request a Quote →
        </a>
      </section>
    </main>
     
  );
}