export default function About() {
  const pillars = [
    {
      title: 'Mission',
      text: 'Build dependable bridges between African commercial opportunities and the global buyers, suppliers, and audiences that can unlock their next stage of growth.',
    },
    {
      title: 'Vision',
      text: 'Become the trade and market-development partner businesses turn to when they need both commercial polish and serious operational grounding.',
    },
    {
      title: 'Promise',
      text: 'Operate with clarity, responsiveness, and disciplined execution so every engagement feels more premium, more controlled, and more bankable.',
    },
  ]

  const operatingModel = [
    'Commercial discovery and buyer or supplier alignment',
    'Trade, sourcing, or campaign architecture built around real constraints',
    'Execution support across quality, communication, and timing',
    'Relationship continuity that extends beyond a single transaction',
  ]

  return (
    <div className="section-space">
      <div className="shell space-y-12">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow">About the company</span>
            <h1 className="section-title mt-6">A trade business built to make African opportunity look world-class.</h1>
            <p className="mt-6 max-w-3xl text-base leading-8">
              Olanrewaju Trading Ltd combines export coordination, industrial sourcing, and brand promotion under one roof so clients can approach growth with more confidence and fewer operational blind spots.
            </p>
          </div>

          <div className="panel p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent-strong)]">What defines our approach</p>
            <p className="mt-4 text-lg leading-8 text-[var(--ink)]">
              We are not just moving products. We are shaping commercial trust through stronger preparation, sharper positioning, and more dependable execution.
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="panel p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent-strong)]">{pillar.title}</p>
              <h2 className="mt-5 text-3xl">{pillar.title} with commercial weight.</h2>
              <p className="mt-4 text-base leading-8">{pillar.text}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_0.92fr]">
          <div className="panel p-8 sm:p-10">
            <h2 className="text-4xl">How we work</h2>
            <p className="mt-5 text-base leading-8">
              We shape each mandate around the commercial pressure points that matter most: trust, clarity, timing, and the quality of communication between everyone involved.
            </p>

            <div className="mt-8 space-y-4">
              {operatingModel.map((item, index) => (
                <div key={item} className="panel-soft flex items-start gap-4 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(184,116,42,0.14)] text-sm font-semibold text-[var(--accent-strong)]">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="panel p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent-strong)]">Where we create value</p>
              <h2 className="mt-4 text-3xl">Our value sits at the intersection of trade execution and presentation quality.</h2>
              <p className="mt-4 text-base leading-8">
                Clients benefit when logistics, messaging, product quality, and buyer confidence all move in the same direction. That is the space where we do our best work.
              </p>
            </div>

            <div className="panel p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <div className="text-3xl font-semibold text-[var(--ink)]">15+</div>
                  <p className="mt-2 text-sm leading-6">Years building trade relationships and execution discipline.</p>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-[var(--ink)]">3</div>
                  <p className="mt-2 text-sm leading-6">Core service pillars under one commercial brand.</p>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-[var(--ink)]">1</div>
                  <p className="mt-2 text-sm leading-6">Integrated partner for sourcing, growth, and supply conversations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
