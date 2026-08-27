import { Link } from 'react-router'
import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { stats } from '../data/content'

export default function Projects() {
  usePageMeta(
    'Projects — Agro-Processing Machinery & Fabrication | Davis Bahati',
    'Engineering projects by Davis Bahati: the multi-crop edible oil pressing machine designed and fabricated in Nairobi, serving clients across East Africa.'
  )

  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-16 pt-32 sm:pb-24 sm:pt-44">
        <div className="dotgrid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="kicker">Projects</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-7 max-w-4xl font-display uppercase leading-[0.92] text-paper text-5xl sm:text-7xl">
              Proof of <span className="text-amber">capability.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
              Not a gallery of pictures — a record of engineering work: the problem, the machine, the outcome.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Flagship project */}
      <section className="bg-paper py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal image>
            <Link to="/projects/edible-oil-machine-fabricators" className="group block">
              <div className="relative overflow-hidden">
                <img
                  src="/images/davis-workshop-hero.webp"
                  alt="Davis Bahati demonstrating the multi-crop oil pressing machine at the Utawala workshop"
                  className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  width={1200}
                  height={675}
                  loading="lazy"
                />
                <span className="absolute left-5 top-5 bg-amber px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink">
                  Flagship · 2023 – Present
                </span>
              </div>
              <div className="grid gap-8 border border-t-0 border-ink/15 bg-paper p-7 sm:grid-cols-12 sm:p-10">
                <div className="sm:col-span-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber-dark">
                    Agricultural processing · Machinery design & fabrication
                  </p>
                  <h2 className="mt-4 font-display text-3xl uppercase leading-tight sm:text-4xl">
                    Edible Oil Machine Fabricators
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/65 sm:text-base">
                    A multi-crop oil pressing machine designed, fabricated and commercialised from our Utawala
                    workshop — now pressing sunflower, peanut, soybean, macadamia, coconut and canola for clients
                    in four East African countries.
                  </p>
                  <span className="link-arrow !text-amber-dark mt-6 inline-flex">
                    Read the case study <span aria-hidden="true">→</span>
                  </span>
                </div>
                <dl className="grid grid-cols-2 gap-px bg-ink/10 sm:col-span-5">
                  {stats.map((s) => (
                    <div key={s.label} className="flex flex-col bg-paper p-5">
                      <dd className="font-display text-3xl">{s.value}</dd>
                      <dt className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">{s.label}</dt>
                      <p className="mt-1.5 text-[11px] leading-snug text-ink/45">{s.note}</p>
                    </div>
                  ))}
                </dl>
              </div>
            </Link>
          </Reveal>

          {/* Further work — honest placeholder */}
          <Reveal delay={120}>
            <div className="mt-14 border border-dashed border-ink/25 bg-paper-2 p-8 sm:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber-dark">
                Further case studies in preparation
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">
                Additional fabrication and installation projects are being documented for publication, including
                photography, specifications and client-verified outcomes.
                [CLIENT TO CONFIRM: full project history, prior machinery builds, custom fabrication commissions]
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-16 border-t border-ink/15 pt-12 text-center">
              <h2 className="font-display text-3xl uppercase leading-tight sm:text-4xl">
                Have a processing challenge?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink/65 sm:text-base">
                Tell us the crop, the volume and the constraints. We'll tell you honestly what a machine can do.
              </p>
              <Link to="/contact" className="btn-primary !bg-ink !text-paper hover:!bg-amber hover:!text-ink mt-8">
                Discuss a Project
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
