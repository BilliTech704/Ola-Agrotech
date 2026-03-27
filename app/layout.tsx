import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ola-agrotech.vercel.app'),
  title: {
    default: 'Olanrewaju Trading Ltd',
    template: '%s | Olanrewaju Trading Ltd',
  },
  description:
    'Trade strategy, agricultural exports, industrial sourcing, and brand acceleration for ambitious African businesses entering global markets.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        <div className="relative min-h-screen overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(184,116,42,0.22),transparent_36%),radial-gradient(circle_at_top_right,rgba(27,106,85,0.18),transparent_34%)]"
          />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
