interface StatItem {
  value: string;
  label: string;
}

interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

export default function OceanFreightPage() {
  const stats: StatItem[] = [
    { value: "200+", label: "Port Connections" },
    { value: "FCL & LCL", label: "Container Options" },
    { value: "40+", label: "Shipping Lines" },
    { value: "98%", label: "Delivery Accuracy" },
  ];

  const features: FeatureItem[] = [
    {
      icon: "🚢",
      title: "Full Container Load (FCL)",
      desc: "Exclusive container use for large shipments. Cost-effective, secure, and ideal for high-volume cargo.",
    },
    {
      icon: "📦",
      title: "Less than Container Load (LCL)",
      desc: "Share container space with other shippers. Perfect for smaller volumes without sacrificing reliability.",
    },
    {
      icon: "🌊",
      title: "Break Bulk & RoRo",
      desc: "Specialised handling for oversized cargo, heavy machinery, and roll-on/roll-off vehicles.",
    },
    {
      icon: "🗺️",
      title: "Trans-Ocean Routing",
      desc: "Optimised multi-leg routes across major trade lanes — Asia-Europe, Trans-Pacific, Trans-Atlantic.",
    },
    {
      icon: "📋",
      title: "Documentation & Compliance",
      desc: "Bill of lading, letters of credit, customs declarations — fully managed by our expert team.",
    },
    {
      icon: "🔄",
      title: "Multimodal Integration",
      desc: "Seamless handoff to road or rail at port for complete end-to-end delivery solutions.",
    },
  ];

  const benefits: string[] = [
    "Competitive freight rates with full rate transparency",
    "Dedicated ocean freight team available around the clock",
    "Port-to-port and door-to-door solutions available",
    "Integrated customs brokerage and trade compliance",
    "Digital shipment tracking and automated status alerts",
  ];

  const tradeLanes: string[] = [
    "Asia ↔ Europe",
    "Asia ↔ North America",
    "Europe ↔ Americas",
    "Middle East ↔ Global",
  ];

  return (
    <main className="bg-white text-[#0a1628]" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-[#0a1628]">
        <img
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=80"
          alt="Container ship at sea"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-28 pt-40 w-full">
          <span className="inline-block text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-6 border border-[#c9a84c]/40 px-3 py-1 rounded-full">
            Ocean Freight Services
          </span>
          <h1
            className="text-5xl md:text-7xl font-black leading-tight text-white mb-6 max-w-3xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The World&apos;s Oceans,{" "}
            <span className="text-[#2e6be6]">Navigated for You.</span>
          </h1>
          <p className="text-[#8a9abf] text-lg leading-relaxed mb-10 max-w-lg">
            From a single pallet to thousands of containers, our ocean freight services connect
            your business to every major port on the planet — reliably and cost-efficiently.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/quote" className="bg-[#2e6be6] hover:bg-[#1e5bd6] text-white font-semibold px-8 py-4 rounded-lg transition shadow-lg">
              Get a Quote
            </a>
            <a href="mailto:info@oceanaxisline.com?subject=Ocean%20Freight%20Enquiry" className="border border-white/20 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg transition">
              Speak to a Specialist
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#122040] py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s: StatItem) => (
            <div key={s.label}>
              <p className="text-3xl font-black text-white">{s.value}</p>
              <p className="text-[#8a9abf] text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 bg-[#f4f7fc]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-xl">
            <span className="text-[#2e6be6] text-xs font-semibold tracking-widest uppercase">Our Ocean Services</span>
            <h2
              className="text-4xl font-black text-[#0a1628] mt-3 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Every Type of Cargo, Covered.
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
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
              alt="Containers at port"
              className="w-full h-80 object-cover"
            />
          </div>
          <div>
            <span className="text-[#2e6be6] text-xs font-semibold tracking-widest uppercase">Why Choose Us</span>
            <h2
              className="text-4xl font-black text-[#0a1628] mt-3 mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Trusted by Importers &amp; Exporters Worldwide
            </h2>
            <ul className="space-y-4">
              {benefits.map((item: string) => (
                <li key={item} className="flex items-start gap-3 text-[#5a6a88] text-sm">
                  <span className="mt-1 w-5 h-5 rounded-full bg-[#2e6be6]/10 text-[#2e6be6] flex items-center justify-center flex-shrink-0 text-xs font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="/quote" className="inline-block mt-8 bg-[#0a1628] hover:bg-[#122040] text-white font-semibold px-8 py-4 rounded-lg transition">
              Start Shipping Today →
            </a>
          </div>
        </div>
      </section>

      {/* TRADE LANES */}
      <section className="py-16 px-6 bg-[#0a1628] text-center">
        <span className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">Major Trade Lanes</span>
        <h2
          className="text-3xl font-black text-white mt-3 mb-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          We Cover Every Major Route
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {tradeLanes.map((lane: string) => (
            <div key={lane} className="bg-white/5 border border-white/10 rounded-xl py-5 px-4 text-white text-sm font-semibold hover:bg-[#2e6be6]/20 transition">
              {lane}
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
          Ready to set sail?
        </h2>
        <p className="text-[#5a6a88] mb-8 text-lg max-w-xl mx-auto">
          Get a competitive ocean freight quote tailored to your shipment in minutes.
        </p>
        <a href="/quote" className="inline-block bg-[#2e6be6] hover:bg-[#1e5bd6] text-white font-semibold px-10 py-4 rounded-lg transition shadow-lg text-lg">
          Request a Quote →
        </a>
      </section>
    </main>
  );
}