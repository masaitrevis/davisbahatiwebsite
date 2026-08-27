# Website Audit & Rebuild Report — Davis Bahati Portfolio
**Site audited:** https://davis-bahati-portfolio.vercel.app/ (audited via live browser session)
**Deliverable:** Full redesign + rebuild (this project)
**Date:** 2026-08-28

---

## 1. Audit of the original website

### 1.1 Content & credibility — CRITICAL FAILURES
| # | Finding | Severity | Verdict |
|---|---------|----------|---------|
| 1 | Name inconsistency: "Davis" and "David" used interchangeably across pages | High | FIX — standardised to **Davis Bahati** everywhere (matches press coverage) |
| 2 | Unverifiable headline stats: "5+ years experience" (company founded **2023** per Daily Nation), "500 kg/hr" machine capacity (verified spec is **10–15 kg/hr**), "95% efficiency", "+40%" yield, "15 jobs created" | **Critical** | REMOVE/REPLACE — only press-verified figures retained: founded 2023, 48 clients in Kenya, machines in 4 countries, ~400 jobs supported, 10–15 kg seed/hr, KSh 285,000–350,000 |
| 3 | Grammar errors in live copy (e.g. "Davis work operates…"), duplicated tagline, "Industrial Entreprise Local" typo | High | FIX — all copy rewritten and proofread |
| 4 | Education claim (U. Tokyo 2015–2016) unverifiable from public record | High | REMOVE from claims; flagged **[CLIENT TO CONFIRM]** — press says skills "honed in Japan" only |
| 5 | Project details hidden in modals with generic, unverifiable copy | High | REPLACE — single deep, honest case study (Challenge → Solution → Technical highlights → Results) built on the Daily Nation feature |
| 6 | Testimonials present without verifiable attribution | High | REMOVE — replaced with one on-record Daily Nation quote |

### 1.2 Design & UX
| # | Finding | Verdict |
|---|---------|---------|
| 7 | Generic dark-navy/orange template aesthetic; stock-looking layout, no engineering identity | REPLACE — bespoke industrial-editorial system (charcoal/warm-white/amber, Anton + IBM Plex Mono + Inter, dot-grid, spec tables, blueprint linework) |
| 8 | Mismatched copy (locomotive references) suggesting reused template sections | REMOVE |
| 9 | Weak hierarchy: hero did not state what Davis actually builds or for whom | REPLACE — hero states machine + beneficiary + geography in one sentence |
| 10 | No real credibility surface (press mentioned but not linked/proven) | ADD — Media page linking the three verified features (Daily Nation, Citizen TV, Milling MEA) |

### 1.3 Technical, SEO & accessibility
| # | Finding | Verdict |
|---|---------|---------|
| 11 | No sitemap.xml, no robots.txt (both returned the SPA shell) | ADD — `public/sitemap.xml` (7 URLs), `public/robots.txt` |
| 12 | No structured data | ADD — JSON-LD `Person` + `Organization` |
| 13 | Thin/incorrect metadata; no Open Graph/Twitter cards | REPLACE — per-route title/description/OG/Twitter via `usePageMeta`, canonical URL, `og:image` |
| 14 | SPA with no route-level handling: direct URL to /services rendered the homepage | FIX — all 8 routes render correctly with per-route meta |
| 15 | Accessibility gaps: decorative-only markup, weak focus states, no skip link, no reduced-motion handling | FIX — semantic headings/landmarks, skip link, `:focus-visible` styles, `prefers-reduced-motion` override, labelled form fields, alt text |
| 16 | Contact: mailto-only, no validation, no budget/topic capture | REPLACE — validated form (name/email/topic/message required) posting via FormSubmit to goodfrydy6@gmail.com, with budget range & inquiry type |

### 1.4 Summary classification
- **KEEP:** real name (Davis Bahati), company (Edible Oil Machine Fabricators), location (Utawala, Nairobi), phone numbers & emails, the genuine story of the oil press.
- **IMPROVE:** everything else — hierarchy, imagery (real press photos instead of stock feel), navigation, contact flow, technical depth.
- **REPLACE:** visual identity, page architecture, project presentation, SEO/meta layer, contact system.
- **REMOVE:** unverifiable stats, unverifiable education claim, testimonials, locomotive copy, typos, template sections.
- **ADD:** case-study system, Media/press page, spec sheet presentation, structured data, sitemap/robots, form validation, content-requirements placeholders.

---

## 2. What was built (new site)

### 2.1 Sitemap
```
/                                Home — hero, credibility strip, founder story, flagship band, capabilities, machine showcase, CTA
/about                           Engineer · Inventor · Builder — story, fact sheet, philosophy, mission/vision
/capabilities                    4 capabilities, 5-step process, who we serve, machine diagram
/projects                        Flagship project + honest "further case studies in preparation" note
/projects/edible-oil-machine-fabricators   Full case study (challenge/solution/specs/results/timeline/gallery)
/media                           Verified press only (Daily Nation, Citizen TV, Milling MEA) + press-kit note
/contact                         Validated enquiry form + workshop/phone/email/pricing cards
*                                Custom 404
```

### 2.2 Design system
- **Colour:** ink `#141619` / ink-2 `#1B1E23` / ink-3 `#23272E` (dark), paper `#F4F1EA` / paper-2 `#EAE6DB` (warm light), single accent amber `#F0A32B` (dark variant `#C9821A`), steel `#9AA0A8`. No gradients-as-decoration, no glassmorphism, 4px radius.
- **Type:** Anton (display, uppercase), IBM Plex Mono (kickers/labels/specs), Inter (body). Google Fonts with `font-display: swap`.
- **Motifs:** registration-dot grid, technical spec tables, blueprint SVG machine diagram (code-drawn — honest, no fake renders), numbered sections (01–06), mono kickers.
- **Motion:** IntersectionObserver reveals (fade/rise, image scale-settle), hover states; **fully disabled under `prefers-reduced-motion`**.
- **Imagery:** real, credited photography (Bonface Bogita / Nation Media Group) + upscaled legacy workshop shots; WebP + progressive JPG.

### 2.3 Technology
React 19 · TypeScript · Vite 7 · Tailwind CSS 3.4 · shadcn/ui scaffold · react-router. Single content source: `src/data/content.ts`. Production build: `dist/` (JS ≈ 92 kB gzip, CSS ≈ 16 kB gzip).

### 2.4 Content integrity
Every factual claim on the site is either (a) verified against the Daily Nation (19 Aug 2025), Citizen Digital (22 Jul 2025) or Milling MEA (23 Jul 2025) features, or (b) marked **[CLIENT TO CONFIRM]**. Nothing was invented: no clients, revenue, contracts, certifications, awards, capacity or testimonials beyond the record.

---

## 3. Verification actually performed (no claims beyond this)
- ✅ Production build passes (`tsc -b && vite build`, clean).
- ✅ All 8 routes rendered and screenshotted at 1440px (desktop) and 390px (mobile) via Playwright against `vite preview`; reviewed visually.
- ✅ Zero browser console errors / page errors on all routes.
- ✅ No horizontal overflow at 360–390px or 1440px.
- ✅ Reveal animations verified working (a clip-path bug that kept images invisible was found via Playwright and fixed).
- ✅ Contact form client-side validation and FormSubmit AJAX wiring inspected in code; **live email delivery NOT tested** (requires FormSubmit owner activation — see README).
- ❌ Not tested: real Lighthouse run (sandbox has no external network for the audit; bundle sizes reported from build output instead), Safari/Firefox/Edge, screen-reader pass, actual form submission end-to-end.
