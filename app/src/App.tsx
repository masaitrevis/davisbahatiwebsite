import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Capabilities from './pages/Capabilities'
import Projects from './pages/Projects'
import ProjectCase from './pages/ProjectCase'
import Media from './pages/Media'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-sans text-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-amber focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:text-ink"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/edible-oil-machine-fabricators" element={<ProjectCase />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
