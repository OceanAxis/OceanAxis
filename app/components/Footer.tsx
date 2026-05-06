import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  Services: ['Ocean Freight', 'Air Freight', 'Road Transport', 'Warehousing', 'Custom Clearance'],
  Company: ['About Us', 'Careers', 'Press', 'Blog', 'Partners'],
  Support: ['Help Center', 'Track Shipment', 'File a Claim', 'API Docs', 'Contact'],
}

const socialLinks = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

// Social icons — reusable as column or row
function SocialIcons({ direction }: { direction: 'row' | 'col' }) {
  return (
    <div className={`flex ${direction === 'col' ? 'flex-col' : 'flex-row'} gap-3`}>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          className="w-10 h-10 bg-white/10 hover:bg-navy-600 rounded-xl flex items-center justify-center transition-colors duration-200"
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-16 border-b border-white/10 space-y-10 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-navy-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg sm:text-xl">OA</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">OceanAxis</h3>
                <p className="text-blue-300 text-xs font-medium">Global Shipping</p>
              </div>
            </div>

            <p className="text-navy-300 leading-relaxed text-sm sm:text-base max-w-sm">
              Connecting businesses to global markets with reliable, efficient, and sustainable shipping solutions since 2008.
            </p>

            <div className="space-y-3">
              {[
                { icon: Mail, text: 'info@oceanaxisline.com' },
                { icon: Phone, text: '+97145530914' },
                { icon: MapPin, text: 'Bur Dubai, Rolla Street, Al Waleed building, Office 204' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3 text-navy-300">
                  <Icon className="w-4 h-4 text-navy-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-snug">{text}</span>
                </div>
              ))}
            </div>

            {/* Social icons — horizontal row, desktop only */}
            <div className="hidden lg:flex pt-1">
              <SocialIcons direction="row" />
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-3">
            {/* Mobile: Services + Company in top row, Support + Social in bottom row */}
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">

              {/* Services */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Services</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.Services.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-navy-400 hover:text-white transition-colors duration-200 text-sm">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Company</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.Company.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-navy-400 hover:text-white transition-colors duration-200 text-sm">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Support</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.Support.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-navy-400 hover:text-white transition-colors duration-200 text-sm">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social icons — vertical column, mobile only, beside Support */}
              <div className="lg:hidden">
                <h4 className="text-white font-semibold mb-4 text-sm">Follow Us</h4>
                <SocialIcons direction="col" />
              </div>

            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-navy-400 text-xs sm:text-sm text-center sm:text-left">
          <p>© {new Date().getFullYear()} OceanAxis. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  )
}