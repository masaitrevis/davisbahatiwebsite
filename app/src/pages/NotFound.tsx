import { Link } from 'react-router'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('Page not found — Davis Bahati', 'The page you are looking for does not exist.')
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-ink px-5 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-steel">Error 404</p>
      <h1 className="mt-5 font-display text-6xl uppercase text-paper sm:text-8xl">
        Page not <span className="text-amber">found</span>
      </h1>
      <p className="mt-6 max-w-md text-paper/65">
        The page you're looking for doesn't exist — but the machines are still being built.
      </p>
      <Link to="/" className="btn-primary mt-10">
        Back to Home
      </Link>
    </section>
  )
}
