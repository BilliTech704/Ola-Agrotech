'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(21,37,31,0.08)] bg-[rgba(246,239,229,0.82)] backdrop-blur-xl">
      <div className="shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#16362c,#245d4a)] text-sm font-semibold tracking-[0.2em] text-white">
            OT
          </span>
          <span className="flex flex-col">
            <span className="text-lg font-semibold text-[var(--ink)]">Olanrewaju Trading Ltd</span>
            <span className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Trade Intelligence House</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition duration-200 ${
                  isActive
                    ? 'bg-[rgba(21,37,31,0.08)] text-[var(--ink)]'
                    : 'text-[var(--muted)] hover:bg-[rgba(21,37,31,0.05)] hover:text-[var(--ink)]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="button-primary">
            Book a Consultation
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(21,37,31,0.12)] text-[var(--ink)] md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[rgba(21,37,31,0.08)] bg-[rgba(255,250,242,0.95)] md:hidden">
          <div className="shell flex flex-col gap-2 py-5">
            {links.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                    isActive ? 'bg-[rgba(21,37,31,0.08)] text-[var(--ink)]' : 'text-[var(--muted)]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}

            <Link href="/contact" className="button-primary mt-2" onClick={() => setIsOpen(false)}>
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
