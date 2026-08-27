import { useEffect } from 'react'

/**
 * Per-route document title + meta description + canonical management
 * for the SPA (static hosting, no SSR).
 */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title

    const ensure = (selector: string, create: () => HTMLElement) => {
      let el = document.head.querySelector(selector) as HTMLElement | null
      if (!el) {
        el = create()
        document.head.appendChild(el)
        }
      return el
    }

    const desc = ensure('meta[name="description"]', () => {
      const m = document.createElement('meta')
      m.setAttribute('name', 'description')
      return m
    })
    desc.setAttribute('content', description)

    const ogTitle = ensure('meta[property="og:title"]', () => {
      const m = document.createElement('meta')
      m.setAttribute('property', 'og:title')
      return m
    })
    ogTitle.setAttribute('content', title)

    const ogDesc = ensure('meta[property="og:description"]', () => {
      const m = document.createElement('meta')
      m.setAttribute('property', 'og:description')
      return m
    })
    ogDesc.setAttribute('content', description)

    const twTitle = ensure('meta[name="twitter:title"]', () => {
      const m = document.createElement('meta')
      m.setAttribute('name', 'twitter:title')
      return m
    })
    twTitle.setAttribute('content', title)
  }, [title, description])
}
