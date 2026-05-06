'use client'
import { useState } from 'react'

import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

const contactDetails = [
  { icon: Mail, label: 'Email Us', value: 'info@oceanaxisline.com', sub: 'We reply within 2 hours' },
  { icon: Phone, label: 'Call Us', value: '+97145530914', sub: '24/7 support available' },
  { icon: MapPin, label: 'Headquarters', value: 'Bur Dubai, Rolla Street, Al Waleed building, Office 204', sub: 'Regional offices in 12 cities' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setLoading(true)
  setError('')

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      setSubmitted(true)
      setForm({ name: '', email: '', company: '', service: '', message: '' })
    } else {
      setError('Something went wrong. Please try again or email us directly.')
    }
  } catch {
    setError('Network error. Please check your connection and try again.')
  } finally {
    setLoading(false)
  }
}

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-navy-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-navy-200/20 rounded-full blur-3xl" />
      <div className="absolute top-20 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 bg-navy-600/10 rounded-full text-navy-700 text-sm font-semibold mb-4 sm:mb-6">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-transparent mb-4 sm:mb-6">
            Let's Move Your Cargo
          </h2>
          <p className="text-base sm:text-xl text-navy-600 max-w-2xl mx-auto px-2">
            Tell us about your shipping needs and we'll craft a tailored solution with a competitive quote within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">

          {/* Left — contact cards */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
            {contactDetails.map((detail, idx) => (
              <div
                key={idx}
                className="group flex gap-4 sm:gap-5 p-4 sm:p-6 bg-white rounded-2xl border border-navy-100 hover:border-navy-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-navy-500 to-navy-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <detail.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-navy-500 text-xs sm:text-sm font-medium mb-1">{detail.label}</p>
                  <p className="text-navy-800 font-bold text-sm sm:text-base break-words">{detail.value}</p>
                  <p className="text-navy-500 text-xs sm:text-sm mt-1">{detail.sub}</p>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-navy-700 to-navy-900 rounded-2xl p-6 sm:p-8 text-center text-white">
              <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-blue-300 mx-auto mb-3" />
              <p className="font-bold text-base sm:text-lg mb-1">Global Presence</p>
              <p className="text-blue-200 text-xs sm:text-sm">
                Offices in Dubai, Rotterdam, UK, and 8 more cities worldwide.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 bg-white rounded-2xl sm:rounded-3xl border border-navy-100 shadow-xl p-5 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10 sm:py-12 space-y-5 sm:space-y-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-navy-800">Request Received!</h3>
                <p className="text-navy-600 max-w-sm text-sm sm:text-base">
                  Thank you for reaching out. Our team will get back to you within 24 hours with a tailored quote.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl sm:text-2xl font-bold text-navy-800 mb-6 sm:mb-8">Request a Free Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 outline-none transition-all duration-200 text-navy-800 placeholder-navy-300 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 outline-none transition-all duration-200 text-navy-800 placeholder-navy-300 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 outline-none transition-all duration-200 text-navy-800 placeholder-navy-300 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-2">Service Needed *</label>
                      <select
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 outline-none transition-all duration-200 text-navy-800 bg-white text-sm sm:text-base"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="ocean">Ocean Freight</option>
                        <option value="air">Air Freight</option>
                        <option value="road">Road Transport</option>
                        <option value="warehousing">Warehousing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-2">Tell us more *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your shipment — origin, destination, cargo type, weight, timeline..."
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 outline-none transition-all duration-200 text-navy-800 placeholder-navy-300 resize-none text-sm sm:text-base"
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none text-sm sm:text-base"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>Send Request <Send className="w-4 h-4 sm:w-5 sm:h-5" /></>
                    )}
                  </button>

                  <p className="text-center text-navy-400 text-xs sm:text-sm">
                    No commitment required. We'll respond within 24 hours.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}