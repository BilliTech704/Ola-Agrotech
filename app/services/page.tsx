export default function Services() {
  const services = [
    {
      title: 'Agricultural exports',
      description:
        'We support export-ready agricultural products with a more disciplined path from sourcing to buyer presentation.',
      points: ['Commodity sourcing support', 'Documentation and quality preparation', 'Buyer communication alignment'],
    },
    {
      title: 'Brand promotion',
      description:
        'We help brands translate ambition into campaigns, launch narratives, and positioning systems that feel market-ready.',
      points: ['Brand messaging architecture', 'Campaign strategy and rollout', 'Growth-focused promotional assets'],
    },
    {
      title: 'Industrial sourcing',
      description:
        'We simplify the commercial side of industrial goods importation through supplier diligence and sourcing discipline.',
      points: ['Vendor screening and negotiation support', 'Import planning and procurement clarity', 'Supply continuity oversight'],
    },
  ]

  const process = [
    'Clarify your market objective, sourcing requirement, or campaign need.',
    'Map the right commercial route and operational risks.',
    'Coordinate execution with clear communication across stakeholders.',
    'Refine the next stage based on results, timing, and market signals.',
  ]

  return (
    <div className="section-space">
      <div className="shell space-y-12">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <span className="eyebrow">Service architecture</span>
            <h1 className="section-title mt-6">Three premium service tracks designed around commercial trust.</h1>
          </div>
          <p className="text-base leading-8">
            We keep the offer focused: exports, brand promotion, and industrial sourcing. The difference comes from how tightly each service is executed.
          </p>
        </section>

        <section className="grid gap-6">
          {services.map((service, index) => (
            <article key={service.title} className="panel grid gap-6 p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent-strong)]">0{index + 1} / Service Pillar</p>
                <h2 className="mt-5 text-4xl">{service.title}</h2>
                <p className="mt-4 text-base leading-8">{service.description}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {service.points.map((point) => (
                  <div key={point} className="panel-soft p-5">
                    <p className="text-sm leading-7 text-[var(--ink)]">{point}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent-strong)]">Engagement model</p>
            <h2 className="mt-4 text-4xl">How projects move from conversation to execution</h2>
            <p className="mt-4 text-base leading-8">
              We keep engagements practical and commercially readable so you can see where momentum is coming from at each step.
            </p>
          </div>

          <div className="grid gap-4">
            {process.map((item, index) => (
              <div key={item} className="panel-soft flex items-start gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(21,37,31,0.08)] text-sm font-semibold text-[var(--ink)]">
                  0{index + 1}
                </span>
                <p className="text-sm leading-7">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
