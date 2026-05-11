interface StatItem {
  value: string;
  label: string;
}

interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

export default function RoadTransportPage() {
  const stats: StatItem[] = [
    { value: "500+", label: "Vehicles in Fleet" },
    { value: "48h", label: "Max Transit Time" },
    { value: "30+", label: "Cities Covered" },
    { value: "100%", label: "GPS Tracked" },
  ];

  const features: FeatureItem[] = [
    {
      icon: "🚛",
      title: "Full Truckload (FTL)",
      desc: "Dedicated truck for your shipment. Faster transit, lower risk of damage, maximum security.",
    },
    {
      icon: "📦",
      title: "Less Than Truckload (LTL)",
      desc: "Share truck space economically. Ideal for smaller loads without paying for a full vehicle.",
    },
    {
      icon: "❄️",
      title: "Refrigerated Transport",
      desc: "Temperature-controlled vehicles for perishables, pharmaceuticals, and cold-chain goods.",
    },
    {
      icon: "🏗️",
      title: "Heavy & Oversized Cargo",
      desc: "Specialist lowboy trailers and flat-beds for industrial equipment and out-of-gauge loads.",
    },
    {
      icon: "🏙️",
      title: "Last-Mile Delivery",
      desc: "Efficient urban distribution ensuring your goods reach end customers on time, every time.",
    },
    {
      icon: "📡",
      title: "Real-Time GPS Tracking",
      desc: "Monitor every vehicle's location, ETA, and status from our live dashboard 24/7.",
    },
  ];

  const certifications: string[] = [
    "ISO 9001 Certified",
    "ADR Licensed Drivers",
    "Cross-Border Permits",
    "Fully Insured Cargo",
  ];

  const fleetPoints: string[] = [
    "Rigid trucks, articulated lorries & flatbeds",
    "Reefer trucks for cold-chain logistics",
    "Hazardous goods (ADR) certified vehicles",
    "Real-time driver communication & ETA updates",
  ];

  const coverageZones: string[] = [
    "Domestic Distribution",
    "Cross-Border EU",
    "Middle East Corridors",
    "South Asia Routes",
  ];

  return (
    <main className="bg-white text-[#0a1628]" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a1628]">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80"
          alt="Trucks on highway"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute top-0 right-0 h-full w-1 bg-[#2e6be6]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-6 border border-[#c9a84c]/40 px-3 py-1 rounded-full">
              Road Transport Services
            </span>
            <h1
              className="text-5xl md:text-6xl font-black leading-tight text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Road-Proven.<br />
              <span className="text-[#2e6be6]">Results-Driven.</span>
            </h1>
            <p className="text-[#8a9abf] text-lg leading-relaxed mb-10 max-w-md">
              Our modern fleet and expert drivers ensure your cargo moves swiftly across cities,
              borders, and continents — with full visibility at every kilometre.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/quote" className="bg-[#2e6be6] hover:bg-[#1e5bd6] text-white font-semibold px-8 py-4 rounded-lg transition shadow-lg">
                Get a Quote
              </a>
              <a href="/contact" className="border border-white/20 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg transition">
                View Fleet
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
            <span className="text-[#2e6be6] text-xs font-semibold tracking-widest uppercase">Transport Solutions</span>
            <h2
              className="text-4xl font-black text-[#0a1628] mt-3 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Every Route. Every Load.
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

      {/* SPLIT */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#2e6be6] text-xs font-semibold tracking-widest uppercase">Our Fleet</span>
            <h2
              className="text-4xl font-black text-[#0a1628] mt-3 mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Modern Vehicles. Professional Drivers.
            </h2>
            <p className="text-[#5a6a88] mb-6 leading-relaxed">
              Our fleet is maintained to the highest standards and our drivers are trained in safety,
              compliance, and customer service. Every trip is GPS-monitored, fully insured, and
              supported by our 24/7 operations center.
            </p>
            <ul className="space-y-3">
              {fleetPoints.map((item: string) => (
                <li key={item} className="flex items-start gap-3 text-[#5a6a88] text-sm">
                  <span className="mt-1 w-5 h-5 rounded-full bg-[#2e6be6]/10 text-[#2e6be6] flex items-center justify-center flex-shrink-0 text-xs font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80"
              alt="Freight truck on road"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="py-20 px-6 bg-[#0a1628] text-center">
        <span className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">Coverage</span>
        <h2
          className="text-3xl font-black text-white mt-3 mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Nationwide &amp; Cross-Border Coverage
        </h2>
        <p className="text-[#8a9abf] mb-10 max-w-lg mx-auto">
          From local distribution to international road freight, we operate across major corridors
          with the infrastructure to scale with your needs.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {coverageZones.map((z: string) => (
            <div key={z} className="bg-white/5 border border-white/10 rounded-xl py-5 px-4 text-white text-sm font-semibold hover:bg-[#2e6be6]/20 transition">
              {z}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f4f7fc] py-20 px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-black text-[#0a1628] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Hit the road with us.
        </h2>
        <p className="text-[#5a6a88] mb-8 text-lg max-w-xl mx-auto">
          Tell us your route and cargo — we&apos;ll handle the rest.
        </p>
        <a href="/quote" className="inline-block bg-[#2e6be6] hover:bg-[#1e5bd6] text-white font-semibold px-10 py-4 rounded-lg transition shadow-lg text-lg">
          Request a Quote →
        </a>
      </section>
    </main>
  );
}