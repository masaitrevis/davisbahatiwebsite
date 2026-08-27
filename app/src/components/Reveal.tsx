import { useEffect, useRef, type ReactNode, type ElementType } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  /** delay in ms */
  delay?: number
  as?: ElementType
  /** use image clip-path reveal instead of fade-up */
  image?: boolean
}

/**
 * Scroll-triggered reveal. Uses IntersectionObserver; fully disabled
 * under prefers-reduced-motion (CSS forces visible state).
 */
export function Reveal({ children, className = '', delay = 0, as: Tag = 'div', image = false }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`${image ? 'reveal-img' : 'reveal'} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
