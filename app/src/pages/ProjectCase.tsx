import { Link } from 'react-router'
import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { machineSpecs, crops, company } from '../data/content'

const challenges = [
  {
    title: 'One machine, six crops',
    body: 'Sunflower, peanut, soybean, macadamia, coconut and canola each press best at different temperatures. Farmers could not afford a separate machine per crop.',
  },
  {
    title: 'No three-phase power in rural Kenya',
    body: 'Most rural workshops and farms run on single-phase household electricity. Imported industrial presses assume power infrastructure that simply is not there.',
  },
  {
    title: 'Imports are slow, costly and hard to repair',
    body: 'Imported extraction machines take months to arrive, price out small entrepreneurs, and stall for want of spare parts.',
  },
  {
    title: 'Operators without technical backgrounds',
    body: 'Buyers are farmers, youth groups and cooperatives — not engineers. The machine had to be simple to run and safe to operate.',
  },
]

const solutions = [
  {
    title: 'Multi-crop pressing with temperature control',
    body: 'A single screw press with a heating element that warms the press housing to the right temperature for each crop — one machine for six oilseeds.',
  },
  {
    title: 'Single-phase by design',
    body: 'Engineered to run on standard single-phase household power, so any rural workshop can operate it without industrial connections.',
  },
  {
    title: 'Built in Nairobi, from local components',
    body: 'Fabricated at our Utawala workshop from stainless steel and locally sourced parts — shorter lead times, lower cost, and repairs that can happen where the machine works.',
  },
  {
    title: 'Training built into the sale',
    body: 'Every machine ships with installation, hands-on operator training and a one-year warranty — so a first-time operator can start producing immediately.',
  },
]

const outcomes = [
  { value: '10–15 kg/hr', label: 'Seed throughput per crop' },
  { value: '135 L', label: 'Oil from ~750 kg of sunflower seed' },
  { value: '48', label: 'Clients operating machines in Kenya' },
  { value: '4', label: 'Countries: Kenya · Uganda · Tanzania · South Sudan' },
  { value: '~400', label: 'Jobs supported through client enterprises' },
  { value: '1 yr', label: 'Warranty on every machine' },
]

const timeline = [
  { year: '2023', text: 'A four-day cooking-oil shortage sparks the idea. First prototypes built from locally sourced parts.' },
  { year: '2023', text: `Edible Oil Machine Fabricators founded in Utawala, Nairobi, with co-founder Samuel Murimi.` },
  { year: '2024', text: 'Multi-crop press commercialised; machines delivered to cooperatives, SACCOs, youth groups and entrepreneurs across Kenya.' },
  { year: '2025', text: 'Regional expansion: machines operating in Uganda, Tanzania and South Sudan; featured by Nation and Citizen TV.' },
]

export default function ProjectCase() {
  usePageMeta(
    'Case Study: Multi-Crop Oil Pressing Machine | Davis Bahati, Nairobi',
    'How Edible Oil Machine Fabricators designed and built a multi-crop oil pressing machine in Nairobi — the engineering, the outcomes, and the East African impact.'
  )

  return (
    <>
      {/* Case study header */}
      <section className="relative overflow-hidden bg-ink pb-14 pt-32 sm:pb-20 sm:pt-44">
        <div className="dotgrid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <Link to="/projects" className="link-arrow">
              <span aria-hidden="true">←</span> All projects
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <p className="kicker mt-10">Case Study · Agricultural Processing · Machinery Design & Fabrication</p>
            <h1 className="mt-6 max-w-4xl font-display uppercase leading-[0.92] text-paper text-5xl sm:text-7xl">
              The Multi-Crop Oil Press
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
              <span>Client · In-house venture</span>
              <span>Location · Utawala, Nairobi</span>
              <span>Status · In production</span>
              <span>Since · 2023</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-ink">
        <Reveal image className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
          <img
            src="/images/davis-workshop-hero.webp"
            alt="Davis Bahati loading sunflower seed into the multi-crop oil press at the Utawala workshop"
            className="aspect-[16/9] w-full object-cover object-[center_35%]"
            width={1200}
            height={675}
            loading="eager"
          />
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
            Utawala workshop, Nairobi · Photo: Bonface Bogita / Nation Media Group
          </p>
        </Reveal>
      </section>

      {/* Overview */}
      <section className="bg-paper py-20 text-ink sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="kicker !text-ink/60">Overview</p>
            <h2 className="mt-5 font-display text-3xl uppercase leading-tight sm:text-4xl">
              Pressing profit from local crops
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink/70 lg:col-span-8 lg:text-lg">
            <Reveal>
              <p>
                Kenya imports most of its cooking oil, even as its farms grow the oilseeds. {company.name} was
                founded to close that gap: design and build an affordable pressing machine in Nairobi that lets
                farmers, cooperatives and entrepreneurs produce and sell their own oil.
              </p>
              <p>
                The result is a multi-crop oil press — stainless steel, single-phase, and simple enough for a
                first-time operator. A client pressing 750 kg of sunflower seed produces roughly 135 litres of oil;
                youth groups pool funds to buy shared machines and launch small oil businesses.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Challenge / Solution */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="kicker">01 — The Challenge</p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl uppercase leading-tight text-paper sm:text-5xl">
            What stood between farmers and their own oil
          </h2>
          <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-2">
            {challenges.map((c, i) => (
              <Reveal key={c.title} delay={i * 60} className="bg-ink p-7 sm:p-9">
                <h3 className="font-display text-xl uppercase leading-tight text-paper">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">{c.body}</p>
              </Reveal>
            ))}
          </div>

          <p className="kicker mt-20">02 — The Engineering Solution</p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl uppercase leading-tight text-paper sm:text-5xl">
            One press, engineered for reality
          </h2>
          <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-2">
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={i * 60} className="bg-ink p-7 sm:p-9">
                <h3 className="font-display text-xl uppercase leading-tight text-amber">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical highlights + results */}
      <section className="bg-paper py-20 text-ink sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="kicker !text-ink/60">03 — Technical Highlights</p>
            <Reveal delay={100} className="mt-8 border border-ink/15 bg-paper-2 p-6 sm:p-8">
              <dl>
                {machineSpecs.map((s) => (
                  <div key={s.key} className="spec-row-dark">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">{s.key}</dt>
                    <dd className="text-right text-sm font-medium text-ink sm:text-left">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-6 flex flex-wrap gap-2">
                {crops.map((c) => (
                  <li key={c} className="bg-ink px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-amber">
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <p className="kicker !text-ink/60">04 — Results</p>
            <Reveal delay={100}>
              <div className="mt-8 grid grid-cols-2 gap-px bg-ink/10">
                {outcomes.map((o) => (
                  <div key={o.label} className="bg-paper p-6">
                    <p className="font-display text-3xl text-ink sm:text-4xl">{o.value}</p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/55">{o.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={180}>
              <blockquote className="mt-8 border-l-2 border-amber-dark pl-5">
                <p className="text-base leading-relaxed text-ink/75">
                  "Using our standard machine, you can process 750 kilograms of sunflower seeds and get about 135
                  litres of oil. Given current retail prices, that generates good margins for small processors."
                </p>
                <cite className="mt-3 block font-mono text-[11px] uppercase not-italic tracking-[0.16em] text-ink/50">
                  Davis Bahati · Daily Nation, Aug 2025
                </cite>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ink-2 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="kicker">05 — Timeline</p>
          <div className="mt-10 space-y-px bg-white/10">
            {timeline.map((t, i) => (
              <Reveal key={t.year + String(i)} delay={i * 60} className="grid gap-2 bg-ink-2 p-6 sm:grid-cols-[140px_1fr] sm:gap-8 sm:p-7">
                <span className="font-display text-2xl text-amber">{t.year}</span>
                <p className="text-sm leading-relaxed text-paper/70">{t.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="kicker">06 — From the Workshop</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal image>
              <img
                src="/images/davis-workshop-square.webp"
                alt="The multi-crop oil pressing machine with its control panel at the Utawala workshop"
                className="aspect-square w-full object-cover"
                width={1600}
                height={1600}
                loading="lazy"
              />
            </Reveal>
            <Reveal image delay={120}>
              <img
                src="/images/workshop-interior.webp"
                alt="Inside the Edible Oil Machine Fabricators workshop — machine assembly area with fabricated equipment and tools"
                className="aspect-square w-full object-cover"
                width={1286}
                height={1286}
                loading="lazy"
              />
            </Reveal>
          </div>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
            Workshop photography · Utawala, Nairobi
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-4xl uppercase leading-tight text-paper sm:text-5xl">
              Discuss an engineering project
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-paper/65">
              Machine purchase, custom fabrication or partnership — start the conversation.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">Start a Project</Link>
              <Link to="/capabilities" className="btn-outline">Our capabilities</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
