# QA Report — Davis Bahati portfolio rebuild
**Environment:** local sandbox, `vite preview` on :4173, Playwright (Chromium). Date: 2026-08-28.

## Build
- `tsc -b && vite build` — **passes clean** (0 TypeScript errors).
- Bundle: `index.js` 319 kB (92 kB gzip), `index.css` 93 kB (16 kB gzip), `index.html` 4 kB.
- Fonts via Google Fonts with `font-display: swap`; images as progressive JPG + WebP with explicit dimensions, `loading="lazy"` below the fold and `fetchpriority="high"` on the hero.

## Visual / responsive review (Playwright screenshots, reviewed)
Full-page screenshots at **1440px desktop** (all 8 routes: /, /about, /capabilities, /projects, /projects/edible-oil-machine-fabricators, /media, /contact, 404) and **390px mobile** (home, about, projects, contact):
- ✅ All pages render fully; hero, images, spec tables, diagram, gallery, forms visible.
- ✅ No horizontal overflow at 390px or 1440px.
- ✅ Fixed header + mobile menu work; mobile menu locks body scroll and closes on navigation.
- ✅ Projects stats grid fixed during QA (was rendering 3 tiles + empty 4th cell; now a full 2×2).
- ✅ Reveal animations fire on scroll; **bug found & fixed**: a `clip-path` reveal never intersected in Chromium (intersection ratio stayed 0) — replaced with opacity/translate + inner-image scale.

## Console
- ✅ Zero console errors and zero page errors across all routes.

## Accessibility (WCAG 2.2 AA principles)
- ✅ Skip-to-content link, semantic landmarks/headings, labelled form fields with visible focus styles.
- ✅ `prefers-reduced-motion: reduce` disables all reveal/motion.
- ✅ Alt text on all images; decorative SVG marked `aria-hidden`.
- ⚠️ Not tested with an actual screen reader or keyboard-only end-to-end run; contrast pairs were chosen to AA but not instrumented.

## Performance (reported, not Lighthouse-measured)
- The sandbox has no external network, so **no real Lighthouse/WebPageTest run was possible**.
- Proxy indicators: JS bundle 92 kB gzip, CSS 16 kB gzip, single small HTML shell; hero image is a 1200px progressive JPG/WebP with `fetchpriority="high"`; all other images lazy-loaded. CLS guarded by explicit image dimensions.
- Recommend running Lighthouse after deployment (see README).

## Known limitations / not tested
- ❌ Contact form end-to-end email delivery (requires one-time FormSubmit activation by the mailbox owner).
- ❌ Safari / Firefox / Edge (Chromium only in sandbox).
- ❌ Real Lighthouse scores, real-device testing, screen-reader audit.
