import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Open Earth | One Earth. Open to all. Built together.',
  description: 'A global platform where humanity collaborates to solve problems through crowdsourced solutions, expertise, and funding.',
  keywords: 'crowdsourcing, collaboration, global problems, solutions, Iran, reconstruction, open source',
  openGraph: {
    title: 'Open Earth',
    description: 'One Earth. Open to all. Built together.',
    url: 'https://openearth.land',
    siteName: 'Open Earth',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Earth',
    description: 'One Earth. Open to all. Built together.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
