import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OceanAxis - Global Shipping & Freight Services | Middle East & Asia',
  description: 'OceanAxis provides reliable ocean freight, air freight, and land transport services across Middle East and Asia. Trusted cargo and logistics solutions for businesses and individuals.',
  keywords: 'shipping company Middle East, ocean freight Asia, air freight Pakistan, land freight, cargo services UAE, freight forwarding, international shipping, logistics company',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'OceanAxis - Global Shipping & Freight Services | Middle East & Asia',
    description: 'Reliable ocean freight, air freight, and land transport across Middle East & Asia.',
    type: 'website',
    url: 'https://www.oceanaxisline.com',
    siteName: 'OceanAxis',
  },
  verification: {
    google: '_D6j2CJSjYmak52Veta8bkmxMO4yU3edbbZhNXiaSSw',
  },
}

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.oceanaxisline.com/#organization',
      name: 'OceanAxis',
      url: 'https://www.oceanaxisline.com',
      logo: 'https://www.oceanaxisline.com/favicon.ico',
      description: 'International shipping and freight forwarding company providing ocean freight, air freight, and land transport across Middle East and Asia.',
      foundingDate: '2008',
      email: 'info@oceanaxisline.com',
      telephone: '+97145530914',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bur Dubai, Rolla Street, Al Waleed Building, Office 204',
        addressLocality: 'Dubai',
        addressRegion: 'Dubai',
        addressCountry: 'AE',
      },
      areaServed: [
        'Middle East', 'Asia', 'UAE', 'Pakistan', 'Saudi Arabia',
        'Qatar', 'Kuwait', 'Oman', 'China', 'India',
      ],
      sameAs: [
        'https://www.linkedin.com/company/oceanaxis',
        'https://www.facebook.com/oceanaxis',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.oceanaxisline.com/#localbusiness',
      name: 'OceanAxis',
      image: 'https://www.oceanaxisline.com/favicon.ico',
      telephone: '+97145530914',
      email: 'info@oceanaxisline.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bur Dubai, Rolla Street, Al Waleed Building, Office 204',
        addressLocality: 'Dubai',
        addressRegion: 'Dubai',
        addressCountry: 'AE',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      priceRange: '$$',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.oceanaxisline.com/#website',
      url: 'https://www.oceanaxisline.com',
      name: 'OceanAxis',
      description: 'Global Shipping & Freight Services across Middle East & Asia',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  )
}