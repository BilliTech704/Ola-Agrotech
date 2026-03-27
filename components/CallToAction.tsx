import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="section-space pt-10">
      <div className="shell">
        <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#16362c_0%,#245d4a_48%,#1a4638_100%)] px-6 py-10 text-white shadow-[0_30px_70px_rgba(19,33,28,0.24)] sm:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                Ready for a sharper commercial partner?
              </span>
              <h2 className="mt-6 text-4xl text-white sm:text-5xl">
                Let’s structure your next export, sourcing, or brand growth move properly.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/76">
                Whether you need a dependable sourcing partner or a more premium commercial presentation, we can help shape the next step with clarity.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/12 bg-white/8 p-6 backdrop-blur">
              <div className="space-y-4">
                <Link href="/contact" className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition duration-300 hover:bg-[#fff6ea]">
                  Schedule a consultation
                </Link>
                <Link href="/services" className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/10">
                  Review service details
                </Link>
              </div>

              <div className="mt-6 space-y-3 text-sm text-white/72">
                <p>Email: info@olanrewajutrading.com</p>
                <p>Phone: +234 123 456 7890</p>
                <p>Response window: within one business day for qualified inquiries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
