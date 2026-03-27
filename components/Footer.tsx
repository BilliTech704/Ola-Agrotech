import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-[rgba(21,37,31,0.08)]">
      <div className="shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#16362c,#245d4a)] text-sm font-semibold tracking-[0.2em] text-white">
                OT
              </span>
              <div>
                <h3 className="text-2xl">Olanrewaju Trading Ltd</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Trade Intelligence House</p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7">
              We help export-ready businesses, industrial buyers, and growth-minded brands move with more confidence across sourcing, promotion, and global market execution.
            </p>
          </div>

          <div>
            <h4 className="text-lg">Navigate</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/" className="text-[var(--muted)] transition duration-200 hover:text-[var(--ink)]">Home</Link></li>
              <li><Link href="/about" className="text-[var(--muted)] transition duration-200 hover:text-[var(--ink)]">About</Link></li>
              <li><Link href="/services" className="text-[var(--muted)] transition duration-200 hover:text-[var(--ink)]">Services</Link></li>
              <li><Link href="/contact" className="text-[var(--muted)] transition duration-200 hover:text-[var(--ink)]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg">Focus Areas</h4>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              <li>Agricultural exports</li>
              <li>Brand promotion</li>
              <li>Industrial sourcing</li>
              <li>Commercial coordination</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              <li>Lagos, Nigeria</li>
              <li><a href="tel:+2341234567890" className="transition duration-200 hover:text-[var(--ink)]">+234 123 456 7890</a></li>
              <li><a href="mailto:info@olanrewajutrading.com" className="transition duration-200 hover:text-[var(--ink)]">info@olanrewajutrading.com</a></li>
              <li>Mon - Fri, 9:00 AM to 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[rgba(21,37,31,0.08)] pt-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Olanrewaju Trading Ltd. All rights reserved.</p>
          <p>Built for premium trade presentation, investor confidence, and market-facing credibility.</p>
        </div>
      </div>
    </footer>
  )
}
