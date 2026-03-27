import Link from 'next/link'

export default function Hero() {
  const stats = [
    { value: '15+', label: 'Years navigating export and sourcing routes' },
    { value: '50+', label: 'Trade corridors and regional buyer networks' },
    { value: '24/7', label: 'Commercial response window for active deals' },
  ]

  const strengths = [
    'Agricultural export coordination with quality assurance',
    'Brand promotion strategy for market expansion and launches',
    'Industrial procurement with supplier diligence and logistics oversight',
  ]

  return (
    <section className="section-space relative overflow-hidden">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="relative z-10 space-y-8">
            <span className="eyebrow">African trade, sourcing, and brand growth</span>
            <div className="space-y-6">
              <h1 className="display-title max-w-4xl">
                Premium trade execution for brands that need confidence beyond the shipment.
              </h1>
              <p className="lead max-w-3xl">
                Olanrewaju Trading Ltd helps ambitious companies move agricultural products, build stronger market
                stories, and source industrial goods with commercial clarity from first conversation to final delivery.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/services" className="button-primary">
                Explore Our Services
              </Link>
              <Link href="/contact" className="button-secondary">
                Start a Deal Conversation
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <div className="text-3xl font-semibold text-[var(--ink)]">{stat.value}</div>
                  <p className="mt-2 text-sm leading-6">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel relative overflow-hidden p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-10 top-0 h-40 rounded-full bg-[radial-gradient(circle,rgba(184,116,42,0.24),transparent_60%)] blur-3xl"
            />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between rounded-[1.5rem] border border-[rgba(21,37,31,0.08)] bg-white/70 px-5 py-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-strong)]">Trade Snapshot</p>
                  <h2 className="mt-2 text-3xl">Global market access without the operational guesswork.</h2>
                </div>
                <div className="rounded-full bg-[rgba(27,106,85,0.12)] px-4 py-2 text-sm font-semibold text-[var(--emerald)]">
                  Premium Delivery
                </div>
              </div>

              <div className="grid gap-4">
                {strengths.map((item, index) => (
                  <div key={item} className="panel-soft flex items-start gap-4 p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(21,37,31,0.08)] text-sm font-semibold text-[var(--ink)]">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="text-base font-semibold text-[var(--ink)]">{item}</p>
                      <p className="mt-2 text-sm leading-6">
                        Structured around compliance, presentation, supplier trust, and timing across every stage of the engagement.
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#173a30,#255d4a)] p-6 text-white shadow-[0_24px_60px_rgba(19,33,28,0.22)]">
                <p className="text-xs uppercase tracking-[0.22em] text-white/70">Built for decision-makers</p>
                <p className="mt-3 text-lg leading-8 text-white/80">
                  We bring sourcing discipline, market storytelling, and executive-style communication into one compact commercial partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
