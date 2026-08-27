import { Link } from 'react-router'
import { site, company } from '../data/content'

const nav = [
  { to: '/about', label: 'About' },
  { to: '/capabilities', label: 'Capabilities' },
  { to: '/projects', label: 'Projects' },
  { to: '/media', label: 'Media' },
  { to: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center bg-amber font-display text-sm text-ink">DB</span>
              <span className="font-display text-xl uppercase tracking-wide text-paper">Davis Bahati</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/60">
              Machines that turn local harvests into local industry. Designed and fabricated at the {company.name}{' '}
              workshop in {company.workshop}.
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
              As featured in Daily Nation · Citizen TV · Milling MEA
            </p>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel">Navigation</h2>
            <ul className="mt-5 space-y-3">
              {nav.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-paper/70 transition-colors hover:text-amber">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm text-paper/70">
              <li>{site.location}</li>
              <li>
                <a className="transition-colors hover:text-amber" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-amber" href={`tel:${site.phone.replace(/\s/g, '')}`}>
                  {site.phone}
                </a>
              </li>
              <li className="text-paper/50">{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Davis Bahati · {company.name}</p>
          <p>Workshop photography: Bonface Bogita / Nation Media Group</p>
        </div>
      </div>
    </footer>
  )
}
