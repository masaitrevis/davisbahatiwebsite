import { useState, type FormEvent } from 'react'
import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { site, contactTopics, budgetRanges, company } from '../data/content'

type Status = 'idle' | 'sending' | 'success' | 'error'

const inputCls =
  'w-full border border-white/15 bg-ink-2 px-4 py-3 text-sm text-paper placeholder:text-paper/35 focus:border-amber focus:outline-none transition-colors'

export default function Contact() {
  usePageMeta(
    'Contact — Start a Project | Davis Bahati, Nairobi Kenya',
    'Contact Davis Bahati and Edible Oil Machine Fabricators: machine purchase, custom fabrication, partnerships and institutional supply. Utawala, Nairobi, Kenya.'
  )

  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (!data.get('name') || !data.get('email') || !data.get('topic') || !data.get('message')) {
      setStatus('error')
      setErrorMsg('Please complete the required fields: name, email, inquiry type and message.')
      return
    }
    setStatus('sending')
    try {
      // FormSubmit delivers the inquiry to the site owner's email.
      // First submission triggers a one-time activation email to the owner.
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Website inquiry — ${data.get('topic')}`,
          _template: 'table',
          _replyto: data.get('email'),
          _captcha: 'false',
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone') || '—',
          company: data.get('company') || '—',
          inquiry_type: data.get('topic'),
          budget: data.get('budget') || '—',
          message: data.get('message'),
        }),
      })
      if (!res.ok) throw new Error('send failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMsg(
        `The form could not be sent automatically. Please email us directly at ${site.email} or call ${site.phone}.`
      )
    }
  }

  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-16 pt-32 sm:pb-24 sm:pt-44">
        <div className="dotgrid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="kicker">Contact</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-7 max-w-4xl font-display uppercase leading-[0.92] text-paper text-5xl sm:text-7xl">
              Start a <span className="text-amber">project.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
              Machine purchase, custom fabrication, partnership or press — tell us what you're working on. We reply
              within one working day. [CLIENT TO CONFIRM: response time commitment]
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="border border-white/10 bg-ink-2 p-6 sm:p-10"
              aria-label="Project inquiry form"
              noValidate={false}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                    Full name *
                  </label>
                  <input id="name" name="name" type="text" required autoComplete="name" className={inputCls} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                    Email *
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} placeholder="you@company.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                    Phone
                  </label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputCls} placeholder="+254 ..." />
                </div>
                <div>
                  <label htmlFor="company" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                    Company / organisation
                  </label>
                  <input id="company" name="company" type="text" autoComplete="organization" className={inputCls} placeholder="Optional" />
                </div>
                <div>
                  <label htmlFor="topic" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                    Inquiry type *
                  </label>
                  <select id="topic" name="topic" required className={inputCls} defaultValue="">
                    <option value="" disabled>
                      Select…
                    </option>
                    {contactTopics.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                    Budget range
                  </label>
                  <select id="budget" name="budget" className={inputCls} defaultValue="">
                    <option value="" disabled>
                      Select…
                    </option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                  Project details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className={inputCls}
                  placeholder="What do you need to process or build? Crop type, volumes, location, timeline…"
                />
              </div>

              {status === 'error' && (
                <p role="alert" className="mt-5 border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  {errorMsg}
                </p>
              )}
              {status === 'success' && (
                <p role="status" className="mt-5 border border-amber/40 bg-amber/10 px-4 py-3 text-sm text-amber">
                  Thank you — your inquiry has been sent. We'll reply within one working day.
                </p>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
                  {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
                </button>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-steel">
                  No spam. Your details are used only to reply.
                </p>
              </div>
            </form>
          </Reveal>

          {/* Contact info */}
          <div className="space-y-px lg:col-span-5">
            <Reveal className="border border-white/10 bg-ink-2 p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel">Workshop</p>
              <p className="mt-3 text-base text-paper">{company.name}</p>
              <p className="text-sm text-paper/60">{site.location}</p>
              <a
                href="https://maps.google.com/?q=Utawala,+Nairobi,+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow mt-4 inline-flex !text-[11px]"
              >
                Open in Maps <span aria-hidden="true">→</span>
              </a>
            </Reveal>
            <Reveal delay={80} className="border border-white/10 bg-ink-2 p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel">Phone</p>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="mt-3 block text-base text-paper hover:text-amber">
                {site.phone}
              </a>
              <a href={`tel:${site.phoneAlt.replace(/\s/g, '')}`} className="mt-1 block text-base text-paper hover:text-amber">
                {site.phoneAlt}
              </a>
              <p className="mt-3 text-sm text-paper/60">{site.hours}</p>
            </Reveal>
            <Reveal delay={140} className="border border-white/10 bg-ink-2 p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel">Email</p>
              <a href={`mailto:${site.email}`} className="mt-3 block text-base text-paper hover:text-amber">
                {site.email}
              </a>
              <a href={`mailto:${site.emailAlt}`} className="mt-1 block text-base text-paper hover:text-amber">
                {site.emailAlt}
              </a>
            </Reveal>
            <Reveal delay={200} className="border border-amber/30 bg-amber/5 p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">Machine pricing</p>
              <p className="mt-3 text-sm leading-relaxed text-paper/75">
                Multi-crop oil presses are typically KSh 285,000 – 350,000 depending on capacity and options.
                Request a formal quotation with delivery timelines.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
