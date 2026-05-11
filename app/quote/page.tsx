"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, Ship, ChevronDown } from "lucide-react";

const SERVICE_TYPES = [
  "Ocean Freight",
  "Air Freight",
  "Land Transport",
  "Customs Clearance",
  "Warehousing & Storage",
  "Project Cargo",
  "Other",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  serviceType: string;
  message: string;
}

export default function QuotePage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    serviceType: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.serviceType) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", companyName: "", serviceType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white">
      {/* Hero */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
        <div className="relative max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-blue-400 text-sm mb-6">
            <Ship size={14} />
            Get a Quote
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Tell Us About Your{" "}
            <span className="text-blue-400">Shipment</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Fill in the details below and our team will get back to you with a tailored quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">

          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
              <CheckCircle2 size={52} className="text-blue-400" />
              <h2 className="text-2xl font-semibold">Quote Request Sent!</h2>
              <p className="text-gray-400">We'll get back to you within 24 hours.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors text-sm font-medium"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-gray-400">Full Name <span className="text-blue-400">*</span></label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-gray-400">Email Address <span className="text-blue-400">*</span></label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-gray-400">Phone Number</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+971 50 000 0000"
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-gray-400">Company Name</label>
                  <input
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    placeholder="OceanAxis LLC"
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Service Type */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-gray-400">Service Type <span className="text-blue-400">*</span></label>
                <div className="relative">
                  <select
                    name="serviceType"
                    value={form.serviceType}
                    onChange={handleChange}
                    className="w-full appearance-none bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#0a0f1e]">Select a service...</option>
                    {SERVICE_TYPES.map((s) => (
                      <option key={s} value={s} className="bg-[#0a0f1e]">{s}</option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-gray-400">Message / Details</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe your shipment — origin, destination, cargo type, weight, etc."
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
              )}

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={status === "loading" || !form.name || !form.email || !form.serviceType}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-lg py-3 font-medium text-sm"
              >
                {status === "loading" ? (
                  <><Loader2 size={16} className="animate-spin" /> Sending...</>
                ) : (
                  <><Send size={16} /> Submit Quote Request</>
                )}
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}