# Davis Bahati — Portfolio & Company Website

Redesign/rebuild of davis-bahati-portfolio.vercel.app: a premium industrial-editorial site for
Davis Bahati, founder of Edible Oil Machine Fabricators (Utawala, Nairobi).

## Stack
- **React 19 + TypeScript + Vite 7**, Tailwind CSS 3.4, shadcn/ui scaffold, react-router
- All site copy in one file: `src/data/content.ts` — edit text, stats, press links and contact
  details there; no need to touch components.
- Pages in `src/pages/`, shared components in `src/components/`
  (`Nav`, `Footer`, `Reveal`, `SectionHeader`, `MachineDiagram` — a code-drawn SVG blueprint).

## Develop & build
```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run preview    # serve the production build locally
```
Requires Node 20+.

## Deployment
The site is a static SPA. Any static host works (Vercel, Netlify, Cloudflare Pages):
- Build command: `npm run build` · Output directory: `dist`
- **SPA fallback required**: rewrite all routes to `/index.html` (on Vercel this is automatic
  for Vite projects; on Netlify add a `_redirects` file with `/* /index.html 200`).
- After going live on the final domain, update the canonical URL and `public/sitemap.xml`
  (they currently reference `https://davis-bahati-portfolio.vercel.app/`), then submit the
  sitemap in Google Search Console.

## Contact form
Posts via AJAX to **FormSubmit** (`formsubmit.co/ajax/goodfrydy6@gmail.com`).
**One-time step:** FormSubmit emails an activation link to that address on the first
submission — it must be clicked once or no mail is delivered. The form falls back to a
`mailto:` draft if the request fails.

## Images
`public/images/` — real photography (Bonface Bogita / Nation Media Group, used for the
portfolio with credit in the footer) plus upscaled legacy workshop shots, each as JPG + WebP.
Keep filenames stable or update the references in `src/data/content.ts` / page components.

## Maintenance plan
- **Monthly:** check the contact form delivers (send a test), check press page links still resolve.
- **Per project completion:** add a case study (duplicate `src/pages/ProjectCase.tsx` pattern)
  only with verifiable facts and client permission — see CONTENT-REQUIREMENTS.md.
- **Quarterly:** `npm update` within semver, re-run `npm run build`; run Lighthouse and keep
  LCP < 2.5 s / CLS < 0.1 / INP < 200 ms.
- **On any new press coverage:** add it to `mediaMentions` in `src/data/content.ts`.
