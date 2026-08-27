import { Link } from 'react-router'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { MachineDiagram } from '../components/MachineDiagram'
import { usePageMeta } from '../hooks/usePageMeta'
import { capabilities, crops } from '../data/content'

const process = [
  { step: '01', title: 'Listen & scope', body: "We start with the client\u2019s crop, volume, power supply and budget — not with a catalogue." },
  { step: '02', title: 'Design & engineer', body: 'Machine design in-house: throughput, temperature control, materials and serviceability.' },
  { step: '03', title: 'Fabricate & test', body: 'Stainless-steel fabrication at the Utawala workshop, then live pressing trials before delivery.' },
  { step: '04', title: 'Install & train', body: 'Delivery, installation and hands-on operator training until the client runs the machine alone.' },
  { step: '05', title: 'Support', body: 'One-year warranty, spare parts and an expanding after-sales network across the region.' },
]

const industries = [
  'Edible oil processing',
  'Cooperatives & farmers’ SACCOs',
  'Youth & women’s enterprise groups',
  'Agricultural value addition',
  'Rural micro-industry',
  'Institutional & NGO programmes',
]

export default function Capabilities() {
  usePageMeta(
    'Capabilities — Agro-Processing Machinery Design & Fabrication | Davis Bahati',
    'Machine design and fabrication, multi-crop oil pressing systems, installation, training and after-sales support from the Edible Oil Machine Fabricators workshop in Nairobi.'
  )

  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-16 pt-32 sm:pb-24 sm:pt-44">
        <div className="dotgrid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="kicker">Capabilities</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-7 max-w-4xl font-display uppercase leading-[0.92] text-paper text-5xl sm:text-7xl">
              Engineering, <span className="text-amber">fabrication,</span> support.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
              One workshop, end to end: we design the machine, build it, install it, train the operator and stand
              behind it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Capability list */}
      <section className="bg-paper py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            index="01"
            kicker="What We Do"
            title="Four capabilities, one workshop"
            dark={false}
          />
          <div className="mt-14 space-y-px bg-ink/10">
            {capabilities.map((c, i) => (
              <Reveal key={c.index} delay={i * 60} className="group grid gap-6 bg-paper p-7 sm:grid-cols-12 sm:p-10">
                <div className="sm:col-span-2">
                  <span className="font-display text-4xl text-ink/20 group-hover:text-amber-dark transition-colors">{c.index}</span>
                </div>
                <div className="sm:col-span-5">
                  <h3 className="font-display text-2xl uppercase leading-tight sm:text-3xl">{c.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <li key={t} className="border border-ink/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/60">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm leading-relaxed text-ink/65 sm:col-span-5 sm:text-[15px]">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            index="02"
            kicker="How We Work"
            title="From brief to working machine"
          />
          <ol className="mt-14 grid gap-px bg-white/10 md:grid-cols-5">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 60} as="li" className="bg-ink p-6 sm:p-7">
                <span className="font-mono text-xs tracking-[0.2em] text-amber">{p.step}</span>
                <h3 className="mt-4 font-display text-lg uppercase leading-tight text-paper">{p.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-paper/60">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Industries + diagram */}
      <section className="bg-paper py-20 text-ink sm:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              index="03"
              kicker="Who We Serve"
              title="Built for East African agriculture"
              lede="Our machines press the crops the region already grows — and serve the people already growing them."
              dark={false}
            />
            <Reveal delay={150}>
              <ul className="mt-10 space-y-px bg-ink/10">
                {industries.map((ind, i) => (
                  <li key={ind} className="flex items-center gap-5 bg-paper px-6 py-4">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-amber-dark">0{i + 1}</span>
                    <span className="text-sm font-medium sm:text-base">{ind}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {crops.map((c) => (
                  <li key={c} className="bg-ink px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-amber">
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={150} image className="lg:col-span-5">
            <div className="border border-ink/15 bg-ink p-8">
              <MachineDiagram className="h-auto w-full text-paper/45" />
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
                Fig. 01 — Multi-crop oil press · technical drawing
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8">
            <Link to="/projects" className="link-arrow !text-amber-dark">
              See the work in action <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
