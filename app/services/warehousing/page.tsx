interface StatItem {
  value: string;
  label: string;
}

interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

export default function WarehousingPage() {
  const stats: StatItem[] = [
    { value: "2M+", label: "Sq Ft of Space" },
    { value: "50+", label: "Warehouse Locations" },
    { value: "24/7", label: "Facility Operations" },
    { value: "99.5%", label: "Inventory Accuracy" },
  ];

  const features: FeatureItem[] = [
    {
      icon: "🏭",
      title: "Bonded Warehousing",
      desc: "Customs-controlled storage for imported goods awaiting clearance. Defer duties until goods are released.",
    },
    {
      icon: "❄️",
      title: "Cold Storage",
      desc: "Temperature and humidity-controlled environments for pharmaceuticals, food, and sensitive goods.",
    },
    {
      icon: "📦",
      title: "Pick, Pack & Fulfillment",
      desc: "End-to-end order fulfillment — from receiving stock to dispatching individual customer orders.",
    },
    {
      icon: "🔄",
      title: "Cross-Docking",
      desc: "Direct transfer from inbound to outbound transport with minimal storage time, maximising speed.",
    },
    {
      icon: "📊",
      title: "Inventory Management",
      desc: "Cloud-based WMS with real-time stock visibility, automated replenishment alerts, and full audit trails.",
    },
    {
      icon: "🔒",
      title: "Secure Storage",
      desc: "CCTV, access control, and 24/7 on-site security for high-value goods, electronics, and pharmaceuticals.",
    },
  ];

  const certifications: string[] = [
    "ISO 28000 Certified",
    "HACCP Cold Chain",
    "AEO Status",
    "EDI & WMS Integration",
  ];

  const wmsPoints: string[] = [
    "Real-time inventory dashboards & reporting",
    "Barcode & RFID scanning at every touchpoint",
    "Automated low-stock alerts & replenishment",
    "Integration with SAP, Oracle, Shopify & more",
    "Full inbound / outbound shipment history",
  ];

  const valueAdded: string[] = [
    "Labelling & Re-packaging",
    "Kitting & Assembly",
    "Returns Management",
    "Quality Inspection",
  ];

  return (
    <main className="bg-white text-[#0a1628]" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a1628]">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80"
          alt="Modern warehouse interior"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        {/* decorative circles — hidden on mobile to avoid overflow */}
        <div className="hidden md:block absolute bottom-0 left-0 w-64 h-64 border border-[#2e6be6]/20 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="hidden md:block absolute top-10 right-10 w-32 h-32 border border-[#c9a84c]/20 rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <span className="inline-block text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-5 border border-[#c9a84c]/40 px-3 py-1 rounded-full">
              Warehousing &amp; Storage
            </span>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your Inventory,<br />
              <span className="text-[#2e6be6]">Perfectly Managed.</span>
            </h1>
            <p className="text-[#8a9abf] text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Scalable storage solutions designed around your supply chain — from short-term overflow
              space to long-term distribution hubs, fully integrated with our freight network.
            </p>
           <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
  <a href="/quote" className="bg-[#2e6be6] hover:bg-[#1e5bd6] text-white font-semibold px-8 py-3.5 rounded-lg transition shadow-lg text-center">Get Storage Quote</a>
  <a href="/contact" className="border border-white/20 hover:border-white/60 text-white font-semibold px-8 py-3.5 rounded-lg transition text-center">Tour a Facility</a>
</div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((s: StatItem) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 text-center hover:bg-white/10 transition">
                <p className="text-2xl sm:text-4xl font-black text-white mb-1">{s.value}</p>
                <p className="text-[#8a9abf] text-xs sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERT BAND */}
      <section className="bg-[#122040] py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-4 sm:gap-6 text-white text-sm">
          {certifications.map((t: string) => (
            <div key={t} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c9a84c] inline-block flex-shrink-0" />
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f4f7fc]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 md:mb-14 max-w-xl">
            <span className="text-[#2e6be6] text-xs font-semibold tracking-widest uppercase">Storage Solutions</span>
            <h2
              className="text-3xl sm:text-4xl font-black text-[#0a1628] mt-3 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Built for Every Supply Chain Need.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((f: FeatureItem) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e0e8f5] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-base sm:text-lg font-bold text-[#0a1628] mb-2 group-hover:text-[#2e6be6] transition-colors">{f.title}</h3>
                <p className="text-[#5a6a88] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80"
              alt="Warehouse with shelving"
              className="w-full h-60 sm:h-80 object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-[#2e6be6] text-xs font-semibold tracking-widest uppercase">Technology-First</span>
            <h2
              className="text-3xl sm:text-4xl font-black text-[#0a1628] mt-3 mb-5 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Smarter Warehousing Through Technology
            </h2>
            <p className="text-[#5a6a88] mb-6 leading-relaxed text-sm sm:text-base">
              Our Warehouse Management System (WMS) gives you full visibility into your inventory
              in real time — with barcode scanning, automated reporting, and seamless ERP integration.
            </p>
            <ul className="space-y-3">
              {wmsPoints.map((item: string) => (
                <li key={item} className="flex items-start gap-3 text-[#5a6a88] text-sm">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#2e6be6]/10 text-[#2e6be6] flex items-center justify-center flex-shrink-0 text-xs font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* VALUE ADDED */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-[#0a1628] text-center">
        <span className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">Value-Added Services</span>
        <h2
          className="text-3xl sm:text-4xl font-black text-white mt-3 mb-8 md:mb-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Beyond Storage
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {valueAdded.map((z: string) => (
            <div key={z} className="bg-white/5 border border-white/10 rounded-xl py-4 sm:py-5 px-3 sm:px-4 text-white text-xs sm:text-sm font-semibold hover:bg-[#2e6be6]/20 transition">
              {z}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f4f7fc] py-16 md:py-20 px-4 sm:px-6 text-center">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a1628] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Need storage space now?
        </h2>
        <p className="text-[#5a6a88] mb-8 text-base sm:text-lg max-w-xl mx-auto">
          Tell us your volume, location, and requirements — we&apos;ll find you the right facility today.
        </p>
        
         <a href="/quote" className="inline-block bg-[#2e6be6] hover:bg-[#1e5bd6] text-white font-semibold px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg transition shadow-lg text-base sm:text-lg">Get a Storage Quote →</a>
      </section>
    </main>
  );
}