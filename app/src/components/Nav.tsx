import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/capabilities', label: 'Capabilities' },
  { to: '/projects', label: 'Projects' },
  { to: '/media', label: 'Media' },
  { to: '/contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'bg-ink/95 backdrop-blur-sm border-white/10' : 'bg-ink/80 backdrop-blur-sm border-white/5'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="group flex items-center gap-3" aria-label="Davis Bahati — home">
          <span className="flex h-8 w-8 items-center justify-center bg-amber font-display text-sm tracking-tight text-ink">
            DB
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] uppercase tracking-wide text-paper">Davis Bahati</span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
              Engineering · Nairobi
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {links.slice(1).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-mono text-[12px] uppercase tracking-[0.18em] transition-colors ${
                  isActive ? 'text-amber' : 'text-paper/70 hover:text-paper'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary !px-5 !py-2.5 !text-[12px]">
            Start a Project
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px w-6 bg-paper transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-paper transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-px w-6 bg-paper transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden border-white/10 bg-ink transition-[max-height] duration-300 ${
          open ? 'max-h-[480px] border-t' : 'max-h-0'
        }`}
      >
        <nav aria-label="Mobile" className="px-5 py-6">
          <ul className="space-y-1">
            {links.map((l, i) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `flex items-baseline gap-4 py-3 font-display text-3xl uppercase tracking-wide transition-colors ${
                      isActive ? 'text-amber' : 'text-paper hover:text-amber'
                    }`
                  }
                >
                  <span className="font-mono text-xs text-steel">0{i + 1}</span>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
