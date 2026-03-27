import Link from 'next/link'

export default function ServicesOverview() {
  const services = [
    {
      tag: 'Export Strategy',
      title: 'Agricultural exports with credibility built in',
      description:
        'From farm sourcing to export readiness, we package commodity opportunities into shipment-ready programs that buyers can trust.',
      bullets: ['Supplier diligence', 'Quality control planning', 'Shipment coordination'],
    },
    {
      tag: 'Brand Expansion',
      title: 'Market-facing brand promotion for serious growth',
      description:
        'We turn positioning, messaging, launches, and campaign execution into a sharper market presence that helps businesses win attention and trust.',
      bullets: ['Messaging systems', 'Campaign rollout', 'Market storytelling'],
    },
    {
      tag: 'Industrial Sourcing',
      title: 'Industrial procurement with dependable sourcing logic',
      description:
        'We support equipment and goods importation through supplier screening, commercial negotiation, and logistics thinking that protects your timelines.',
      bullets: ['Vendor selection', 'Cost control', 'Supply continuity'],
    },
  ]

  return (
    <section className="section-space">
      <div className="shell">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">Three service pillars</span>
            <h2 className="section-title mt-5">Commercial services that look polished because the process is disciplined.</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
            Every engagement is built around trust, market readiness, and speed of execution so clients can move from interest to action with fewer surprises.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="panel p-8">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[rgba(184,116,42,0.12)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                  {service.tag}
                </span>
                <span className="text-sm font-semibold text-[var(--muted)]">0{index + 1}</span>
              </div>

              <h3 className="mt-8 text-3xl">{service.title}</h3>
              <p className="mt-4 text-base leading-7">{service.description}</p>

              <div className="mt-8 flex flex-wrap gap-2">
                {service.bullets.map((bullet) => (
                  <span
                    key={bullet}
                    className="rounded-full border border-[rgba(21,37,31,0.1)] bg-white/70 px-4 py-2 text-sm text-[var(--ink)]"
                  >
                    {bullet}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/services" className="button-secondary">
            View the full service architecture
          </Link>
        </div>
      </div>
    </section>
  )
}
