import { Link } from 'react-router'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { usePageMeta } from '../hooks/usePageMeta'
import { philosophy, company } from '../data/content'

export default function About() {
  usePageMeta(
    'About Davis Bahati — Engineer, Inventor, Founder | Nairobi, Kenya',
    'The story of Davis Bahati: from a four-day cooking-oil shortage to founding Edible Oil Machine Fabricators — designing and building agro-processing machinery in Nairobi.'
  )

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-ink pb-16 pt-32 sm:pb-24 sm:pt-44">
        <div className="dotgrid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="kicker">About</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-7 max-w-4xl font-display uppercase leading-[0.92] text-paper text-5xl sm:text-7xl">
              Engineer. Inventor. <span className="text-amber">Builder.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
              Davis Bahati is a Kenyan engineer and inventor who builds machinery that closes real gaps — starting
              with the edible oil Kenya imports but could be pressing itself.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-paper py-20 text-ink sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal image>
              <img
                src="/images/davis-portrait.webp"
                alt="Davis Bahati at a Kenya Industrial Estates and KEBS industry event"
                className="aspect-[4/5] w-full object-cover object-top"
                width={1170}
                height={800}
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={120}>
              <dl className="mt-8 border-t border-ink/15">
                {[
                  ['Role', 'Founder & Lead Engineer'],
                  ['Company', company.name],
                  ['Workshop', `${company.workshop}, Nairobi`],
                  ['Founded', company.founded],
                  ['Co-founder', 'Samuel Murimi — Engineer'],
                ].map(([k, v]) => (
                  <div key={k} className="spec-row-dark">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">{k}</dt>
                    <dd className="text-sm font-medium text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-8 lg:pl-8">
            <SectionHeader
              index="01"
              kicker="The Story"
              title="A four-day oil shortage became a machinery company"
              dark={false}
            />
            <Reveal delay={150}>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-ink/70 sm:text-lg">
                <p>
                  In 2023, the shops near Davis Bahati's home ran out of cooking oil for four days. Kenya imports
                  most of its edible oil — leaving households exposed to global prices, currency swings and supply
                  shocks. For Davis, frustration turned into a design brief: Kenyans grow sunflower, peanut, soybean,
                  macadamia, coconut and canola. What was missing was an affordable machine to press them.
                </p>
                <p>
                  Drawing on mechanical engineering skills honed in Japan, he began assembling a press from locally
                  sourced parts. After several prototypes, the design worked. With co-founder and engineer Samuel
                  Murimi — and roughly KSh 2.8 million of their own savings — he founded {company.name} in Utawala,
                  Nairobi.
                </p>
                <p>
                  The breakthrough was versatility: one machine that presses six oilseed crops, with
                  crop-specific temperature control, running on single-phase household electricity. Two years on,
                  the machines work for 48 clients in Kenya and operate in Uganda, Tanzania and South Sudan — and
                  the workshop's vision has grown to a decentralised edible-oil industry for East Africa.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 border border-ink/15 bg-paper-2 p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber-dark">
                  Note on this profile
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  Formal qualifications, certifications and prior venture history are being compiled for
                  publication. [CLIENT TO CONFIRM: education records, certifications, company registration details]
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            index="02"
            kicker="Engineering Philosophy"
            title="Engineered for where the machines actually work"
            lede="Three principles govern every design that leaves the Utawala workshop."
          />
          <div className="mt-14 grid gap-px bg-white/10 lg:grid-cols-3">
            {philosophy.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="bg-ink p-7 sm:p-9">
                <span className="font-mono text-xs tracking-[0.2em] text-amber">0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl uppercase leading-tight text-paper">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-paper/65">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-paper py-20 text-ink sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-px bg-ink/10 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal className="bg-paper p-7 sm:p-12">
            <p className="kicker !text-ink/60">Mission</p>
            <p className="mt-6 font-display text-2xl uppercase leading-snug sm:text-3xl">
              Deliver engineering solutions that empower African industry — and turn harvests into income.
            </p>
          </Reveal>
          <Reveal delay={120} className="bg-paper p-7 sm:p-12">
            <p className="kicker !text-ink/60">Vision</p>
            <p className="mt-6 font-display text-2xl uppercase leading-snug sm:text-3xl">
              A self-sufficient East African industrial landscape, built on homegrown machines.
            </p>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <div className="mx-auto mt-14 max-w-7xl px-5 sm:px-8">
            <Link to="/contact" className="link-arrow !text-amber-dark">
              Discuss a project with Davis <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
