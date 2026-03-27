import Link from 'next/link'

export default function AboutPreview() {
  const principles = [
    'A sharper route from supplier conversations to market-ready delivery.',
    'Executive-style communication for buyers, partners, and internal teams.',
    'Commercial rigor that keeps growth ambitions grounded in operational reality.',
  ]

  return (
    <section className="section-space">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-start">
          <div className="panel p-8 sm:p-10">
            <span className="eyebrow">Why clients stay with us</span>
            <h2 className="section-title mt-6">A trade partner that balances polish with hard operational thinking.</h2>
            <p className="mt-5 text-base leading-8">
              Olanrewaju Trading Ltd has spent more than a decade shaping supplier relationships, cross-border trade
              flows, and market development work that helps businesses look credible when the stakes are commercial, not cosmetic.
            </p>

            <div className="mt-8 space-y-4">
              {principles.map((principle) => (
                <div key={principle} className="panel-soft flex items-start gap-4 p-5">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <p className="text-sm leading-7">{principle}</p>
                </div>
              ))}
            </div>

            <Link href="/about" className="button-primary mt-8">
              Read the full company story
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="panel p-6 text-center">
              <div className="text-sm uppercase tracking-[0.22em] text-[var(--accent-strong)]">Experience</div>
              <div className="mt-3 text-4xl font-semibold text-[var(--ink)]">15+</div>
              <p className="mt-3 text-sm leading-6">Years of trade, procurement, and market positioning work.</p>
            </div>
            <div className="panel p-6 text-center">
              <div className="text-sm uppercase tracking-[0.22em] text-[var(--accent-strong)]">Market Reach</div>
              <div className="mt-3 text-4xl font-semibold text-[var(--ink)]">50+</div>
              <p className="mt-3 text-sm leading-6">Countries connected through export and sourcing conversations.</p>
            </div>

            <div className="panel p-6 sm:col-span-2">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-[var(--accent-strong)]">Coverage</div>
                  <h3 className="mt-3 text-3xl">Built around the needs of exporters, brand owners, and industrial buyers.</h3>
                </div>
                <div className="rounded-full bg-[rgba(27,106,85,0.12)] px-4 py-2 text-sm font-semibold text-[var(--emerald)]">
                  Advisory + Execution
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="panel-soft p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Export Readiness</p>
                  <p className="mt-3 text-sm leading-7">Commodity packaging, documentation flow, and buyer-facing clarity.</p>
                </div>
                <div className="panel-soft p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Brand Positioning</p>
                  <p className="mt-3 text-sm leading-7">Campaign direction, presentation systems, and growth messaging.</p>
                </div>
                <div className="panel-soft p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Industrial Supply</p>
                  <p className="mt-3 text-sm leading-7">Vendor screening, sourcing discipline, and logistics readiness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
