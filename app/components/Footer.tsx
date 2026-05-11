import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

const footerLinks = {
  Services: [
    { label: 'Ocean Freight', href: '/services/ocean-freight' },
    { label: 'Air Freight', href: '/services/air-freight' },
    { label: 'Road Transport', href: '/services/road-transport' },
    { label: 'Warehousing', href: '/services/warehousing' },
    { label: 'Custom Clearance', href: '#services' },
  ],
  Company: ['About Us', 'Careers', 'Press', 'Blog', 'Partners'],
  Support: ['Help Center', 'Track Shipment', 'File a Claim', 'API Docs', 'Contact'],
}

const socialLinks = [
{
  label: 'Instagram',
  href: 'https://www.instagram.com/ocean.axis?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',  // replace with your actual Instagram URL
  icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  ),
},
  {
    label: 'X (Twitter)',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

function SocialIcons({ direction }: { direction: 'row' | 'col' }) {
  return (
    <div className={`flex ${direction === 'col' ? 'flex-col' : 'flex-row'} gap-3`}>
      {socialLinks.map((social) => (
        <a key={social.label} href={social.href} aria-label={`OceanAxis on ${social.label}`} className="w-10 h-10 bg-white/10 hover:bg-navy-600 rounded-xl flex items-center justify-center transition-colors duration-200">
          {social.icon}
        </a>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white" aria-label="OceanAxis Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-16 border-b border-white/10 space-y-10 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-12">

          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-navy-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg sm:text-xl">OA</span>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white">OceanAxis</p>
                <p className="text-blue-300 text-xs font-medium">Global Shipping & Freight</p>
              </div>
            </div>

            <p className="text-navy-300 leading-relaxed text-sm sm:text-base max-w-sm">
              International shipping company connecting businesses to global markets with ocean freight, air freight, and land transport across Middle East & Asia since 2008.
            </p>

            <address className="not-italic space-y-3">
              {[
                { icon: Mail, text: 'info@oceanaxisline.com', href: 'mailto:info@oceanaxisline.com' },
                { icon: Phone, text: '+97145530914', href: 'tel:+97145530914' },
                { icon: MapPin, text: 'Bur Dubai, Rolla Street, Al Waleed Building, Office 204, Dubai, UAE', href: '#' },
              ].map(({ icon: Icon, text, href }) => (
                <a key={text} href={href} className="flex items-start gap-3 text-navy-300 hover:text-white transition-colors">
                  <Icon className="w-4 h-4 text-navy-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm leading-snug">{text}</span>
                </a>
              ))}
            </address>

            <div className="hidden lg:flex pt-1">
              <SocialIcons direction="row" />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">

              <nav aria-label="Shipping services">
                <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Services</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.Services.map((service) => (
                    <li key={service.label}>
                      <Link href={service.href} className="text-navy-400 hover:text-white transition-colors duration-200 text-sm">{service.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav aria-label="Company links">
                <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Company</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.Company.map((link) => (
                    <li key={link}><a href="#about" className="text-navy-400 hover:text-white transition-colors duration-200 text-sm">{link}</a></li>
                  ))}
                </ul>
              </nav>

              <nav aria-label="Support links">
                <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Support</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.Support.map((link) => (
                    <li key={link}><a href="#contact" className="text-navy-400 hover:text-white transition-colors duration-200 text-sm">{link}</a></li>
                  ))}
                </ul>
              </nav>

              <div className="lg:hidden">
                <h4 className="text-white font-semibold mb-4 text-sm">Follow Us</h4>
                <SocialIcons direction="col" />
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-navy-400 text-xs sm:text-sm text-center sm:text-left">
          <p>© {new Date().getFullYear()} OceanAxis. All rights reserved. | International Shipping & Freight Forwarding Company</p>
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