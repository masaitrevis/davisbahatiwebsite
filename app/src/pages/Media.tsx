import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { mediaMentions } from '../data/content'

export default function Media() {
  usePageMeta(
    'Media & Press — Davis Bahati | Edible Oil Machine Fabricators',
    'Verified press coverage of Davis Bahati and Edible Oil Machine Fabricators: Daily Nation, Citizen TV "Made in Kenya" and Milling Middle East & Africa.'
  )

  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-16 pt-32 sm:pb-24 sm:pt-44">
        <div className="dotgrid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="kicker">Media & Press</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-7 max-w-4xl font-display uppercase leading-[0.92] text-paper text-5xl sm:text-7xl">
              On the <span className="text-amber">record.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
              Verified coverage of the workshop and its machines. Everything listed here was published by the
              outlet named — nothing else is claimed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="space-y-px bg-ink/10">
            {mediaMentions.map((m, i) => (
              <Reveal key={m.url} delay={i * 80}>
                <a
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-4 bg-paper p-7 transition-colors hover:bg-paper-2 sm:grid-cols-12 sm:items-center sm:p-10"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45 sm:col-span-2">
                    {m.date}
                  </span>
                  <div className="sm:col-span-7">
                    <h2 className="font-display text-2xl uppercase leading-tight sm:text-3xl">{m.title}</h2>
                    <p className="mt-2 text-sm text-ink/60">{m.note}</p>
                  </div>
                  <div className="sm:col-span-3 sm:text-right">
                    <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-amber-dark group-hover:underline underline-offset-4">
                      {m.outlet} →
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <blockquote className="mx-auto mt-20 max-w-3xl border-l-2 border-amber-dark pl-6 sm:pl-8">
              <p className="font-display text-2xl uppercase leading-snug text-ink sm:text-3xl">
                "The machine is easy to operate, even for someone without a technical background. Once trained,
                anyone can start producing and selling edible oil."
              </p>
              <cite className="mt-4 block font-mono text-[11px] uppercase not-italic tracking-[0.18em] text-ink/55">
                Davis Bahati · Daily Nation, August 2025
              </cite>
            </blockquote>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-16 border border-dashed border-ink/25 bg-paper-2 p-8 sm:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber-dark">
                Press kit & further materials
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">
                High-resolution photography, machine specification sheets and interview availability are available
                on request. [CLIENT TO PROVIDE: press kit assets, approved biography, additional coverage links]
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
