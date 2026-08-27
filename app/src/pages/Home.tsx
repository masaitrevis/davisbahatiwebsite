import { Link } from 'react-router'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { MachineDiagram } from '../components/MachineDiagram'
import { usePageMeta } from '../hooks/usePageMeta'
import { stats, mediaMentions, capabilities, machineSpecs, crops, site, company } from '../data/content'

export default function Home() {
  usePageMeta(
    'Davis Bahati — Engineer & Fabricator | Agro-Processing Machinery, Nairobi Kenya',
    'Davis Bahati designs and builds multi-crop oil pressing machinery in Nairobi, Kenya — turning local harvests into local industry across East Africa.'
  )

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-ink">
        <div className="dotgrid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-12 lg:gap-0 lg:pb-0 lg:pt-40">
          <div className="lg:col-span-7 lg:pb-24 lg:pr-16">
            <Reveal>
              <p className="kicker">Davis Bahati · Engineer & Fabricator · Nairobi, Kenya</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-7 font-display uppercase leading-[0.92] tracking-tight text-paper text-5xl sm:text-7xl lg:text-[5.4rem]">
                Machines that turn local harvests into local{' '}
                <span className="text-amber">industry.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70">
                I'm Davis Bahati — engineer, inventor and founder of {company.name}. From our workshop in{' '}
                {company.workshop}, we design and fabricate multi-crop oil pressing machinery for farmers,
                cooperatives and enterprises across East Africa.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/projects" className="btn-primary">
                  Explore the Work
                </Link>
                <Link to="/contact" className="btn-outline">
                  Start a Project
                </Link>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
                <span>Featured in</span>
                {mediaMentions.map((m) => (
                  <span key={m.outlet} className="text-paper/60">{m.outlet}</span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal image className="relative h-full min-h-[320px] lg:min-h-[560px]">
              <img
                src="/images/davis-workshop-hero.webp"
                alt="Davis Bahati beside a multi-crop sunflower oil pressing machine at the Edible Oil Machine Fabricators workshop in Utawala, Nairobi"
                className="absolute inset-0 h-full w-full object-cover"
                width={1200}
                height={800}
                fetchPriority="high"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-white/15 bg-ink/85 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/70 backdrop-blur-sm">
                <span>Utawala workshop, Nairobi</span>
                <span className="hidden sm:inline">Multi-crop oil press</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ CREDIBILITY STRIP ============ */}
      <section className="border-y border-ink/10 bg-paper text-ink" aria-label="Key figures">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-ink/10 px-0 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="bg-paper px-6 py-10 sm:px-8">
              <p className="font-display text-4xl sm:text-5xl text-ink">{s.value}</p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/80">{s.label}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-ink/55">{s.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ FOUNDER STORY ============ */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal image className="relative">
              <img
                src="/images/davis-portrait.webp"
                alt="Davis Bahati at a Kenya Industrial Estates and KEBS industry event"
                className="aspect-[4/5] w-full object-cover object-top"
                width={1170}
                height={800}
                loading="lazy"
              />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
                Davis Bahati · Founder & Lead Engineer
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:pl-6">
            <SectionHeader
              index="01"
              kicker="The Founder"
              title="See a problem. Engineer the machine. Build the business."
            />
            <Reveal delay={150}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-paper/70 sm:text-lg">
                <p>
                  In 2023, a four-day cooking-oil shortage made one thing impossible to ignore: Kenya grows the
                  crops, but imports the oil. Davis Bahati — a mechanical engineer whose skills were honed in
                  Japan — decided to close that gap with machinery built in Nairobi.
                </p>
                <p>
                  Working from a workshop in Utawala with co-founder Samuel Murimi, he designed a multi-crop oil
                  press that runs on ordinary single-phase power and handles six oilseed crops. Today the machines
                  work for cooperatives, youth groups, farmers' SACCOs and entrepreneurs in four East African
                  countries.
                </p>
              </div>
            </Reveal>
            <Reveal delay={250}>
              <blockquote className="mt-10 border-l-2 border-amber pl-6">
                <p className="font-display text-2xl uppercase leading-tight text-paper sm:text-3xl">
                  "A decentralised edible-oil industry — powered not by imports, but by local entrepreneurs using
                  locally made machines."
                </p>
                <cite className="mt-3 block font-mono text-[11px] uppercase not-italic tracking-[0.18em] text-steel">
                  Davis Bahati · Daily Nation, Aug 2025
                </cite>
              </blockquote>
            </Reveal>
            <Reveal delay={300}>
              <Link to="/about" className="link-arrow mt-10 inline-flex">
                Read the full story <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FEATURED PROJECT ============ */}
      <section className="border-t border-white/10 bg-ink-2 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              index="02"
              kicker="Flagship Project"
              title="Edible Oil Machine Fabricators"
              lede="Design, fabrication and commercialisation of a multi-crop oil pressing machine — built in Nairobi, working across East Africa."
            />
            <Reveal delay={150}>
              <Link to="/projects/edible-oil-machine-fabricators" className="link-arrow">
                Full case study <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>

          <Reveal image className="mt-12">
            <Link to="/projects/edible-oil-machine-fabricators" className="group relative block overflow-hidden">
              <img
                src="/images/davis-workshop-square.webp"
                alt="The multi-crop oil pressing machine at the Utawala workshop"
                className="aspect-[16/9] w-full object-cover object-[center_38%] transition-transform duration-700 group-hover:scale-[1.03]"
                width={1600}
                height={900}
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-3 bg-gradient-to-t from-ink/95 via-ink/60 to-transparent px-5 pb-5 pt-16 sm:px-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/80">
                  Agricultural processing · Machinery design & fabrication
                </p>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">View case study →</span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-px bg-white/10 sm:grid-cols-3">
            {[
              { k: 'The machine', v: 'One press, six crops — sunflower, peanut, soybean, macadamia, coconut, canola.' },
              { k: 'The economics', v: '750 kg of sunflower seed yields roughly 135 litres of oil per day of pressing.' },
              { k: 'The reach', v: '48 clients in Kenya; machines operating in Uganda, Tanzania and South Sudan.' },
            ].map((item, i) => (
              <Reveal key={item.k} delay={i * 80} className="bg-ink-2 px-6 py-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">{item.k}</p>
                <p className="mt-3 text-sm leading-relaxed text-paper/75">{item.v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CAPABILITIES ============ */}
      <section className="bg-paper py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            index="03"
            kicker="Capabilities"
            title="From drawing board to working machine"
            lede="Everything is designed, fabricated and commissioned from our Nairobi workshop — then supported for the life of the machine."
            dark={false}
          />
          <div className="mt-14 grid gap-px bg-ink/10 sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <Reveal key={c.index} delay={i * 70} className="group bg-paper p-7 sm:p-9">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-amber-dark">{c.index}</span>
                  <span className="h-px flex-1 mx-5 bg-ink/15 group-hover:bg-amber transition-colors" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-2xl uppercase leading-tight sm:text-[1.7rem]">{c.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/65 sm:text-[15px]">{c.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <li
                      key={t}
                      className="border border-ink/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/60"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div className="mt-10">
              <Link to="/capabilities" className="link-arrow !text-amber-dark">
                All capabilities <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ MACHINE SHOWCASE ============ */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
        <div className="dotgrid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              index="04"
              kicker="The Machine"
              title="The Multi-Crop Oil Press"
              lede="Our flagship machine: one press for six oilseed crops, engineered for single-phase power and built from stainless steel — so it works where the farmers are."
            />
            <Reveal delay={150}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {crops.map((c) => (
                  <li key={c} className="border border-amber/40 bg-amber/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-amber">
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={250} className="mt-10 hidden lg:block">
              <MachineDiagram className="h-auto w-full max-w-sm text-paper/35" />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={150} className="border border-white/10 bg-ink-2 p-6 sm:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel">Technical summary</p>
              <dl className="mt-4">
                {machineSpecs.map((s) => (
                  <div key={s.key} className="spec-row">
                    <dt className="font-mono text-[12px] uppercase tracking-[0.14em] text-steel">{s.key}</dt>
                    <dd className="text-right text-sm text-paper sm:text-left">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-steel">
                Specifications as published in the Daily Nation feature, Aug 2025
              </p>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">Request pricing & availability</Link>
                <Link to="/projects/edible-oil-machine-fabricators" className="btn-outline">See the case study</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="border-t border-white/10 bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="kicker justify-center">Work with us</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mx-auto mt-6 max-w-4xl font-display uppercase leading-[0.95] text-paper text-5xl sm:text-6xl lg:text-7xl">
              Have an engineering challenge? <span className="text-amber">Let's build the solution.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-paper/65 sm:text-lg">
              Machine purchase, custom fabrication, partnership or institutional supply — tell us what you need to
              build.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">Start a Project</Link>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="btn-outline">
                Call {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
