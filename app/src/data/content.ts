/**
 * Central content file — single source of truth for all site copy.
 * Items marked [CLIENT TO CONFIRM] must be verified by Davis Bahati
 * before the site goes live. Nothing on this site is fabricated:
 * verified facts come from the Daily Nation feature (Aug 2025),
 * Citizen TV "Made in Kenya" (Jul 2025) and Milling MEA (Jul 2025).
 */

export const site = {
  name: 'Davis Bahati',
  role: 'Engineer · Inventor · Fabricator',
  location: 'Utawala, Nairobi, Kenya',
  email: 'goodfrydy6@gmail.com',
  emailAlt: 'brixtonkenya@gmail.com',
  phone: '+254 748 844 255',
  phoneAlt: '+254 710 338 531',
  hours: 'Mon – Fri · 8:00 AM – 4:00 PM EAT',
  url: 'https://davis-bahati-portfolio.vercel.app',
}

export const company = {
  name: 'Edible Oil Machine Fabricators',
  short: 'EOMF',
  founded: '2023',
  workshop: 'Utawala, Nairobi',
}

/** Verified figures — sourced from the Daily Nation feature (Aug 2025). */
export const stats = [
  { value: '2023', label: 'Company founded', note: 'Edible Oil Machine Fabricators, Nairobi' },
  { value: '48', label: 'Clients served in Kenya', note: 'Cooperatives, SACCOs, youth groups, entrepreneurs' },
  { value: '4', label: 'Countries supplied', note: 'Kenya · Uganda · Tanzania · South Sudan' },
  { value: '~400', label: 'Jobs supported', note: 'Employment created through client enterprises' },
]

export const mediaMentions = [
  {
    outlet: 'Daily Nation',
    title: 'Kenyan innovator pressing profits from edible oil machine',
    date: 'August 2025',
    url: 'https://nation.africa/kenya/business/enterprise/kenyan-innovator-pressing-profits-from-edible-oil-machine-5159142',
    note: 'Nation Media Group — Business / Enterprise feature',
  },
  {
    outlet: 'Citizen TV',
    title: 'Made in Kenya: Entrepreneur making edible oil extraction machines',
    date: 'July 2025',
    url: 'https://www.citizen.digital/article/made-in-kenya-entrepreneur-making-edible-oil-extraction-machines-n366729',
    note: 'Citizen Digital — Made in Kenya segment',
  },
  {
    outlet: 'Milling Middle East & Africa',
    title: 'Kenyan entrepreneur making edible oil extraction machines',
    date: 'July 2025',
    url: 'https://millingmea.com/kenyan-entrepreneur-making-edible-oil-extraction-machines/',
    note: 'Milling MEA — industry press feature',
  },
]

export const capabilities = [
  {
    index: '01',
    title: 'Machine design & fabrication',
    body: 'Design and fabrication of agro-processing machinery at our Utawala workshop — from concept and prototyping through to production-ready machines built from stainless steel and locally sourced components.',
    tags: ['Machine design', 'Stainless steel fabrication', 'Prototyping', 'Local materials'],
  },
  {
    index: '02',
    title: 'Multi-crop oil pressing systems',
    body: 'Our flagship multi-crop oil press handles sunflower, peanut, soybean, macadamia, coconut and canola on a single machine — with crop-specific temperature control and single-phase power for rural settings.',
    tags: ['Sunflower', 'Peanut', 'Soybean', 'Macadamia', 'Coconut', 'Canola'],
  },
  {
    index: '03',
    title: 'Installation & operator training',
    body: 'Every machine ships with installation, hands-on operator training and a structured handover — so a client with no technical background can start producing and selling oil.',
    tags: ['Installation', 'Operator training', 'Commissioning'],
  },
  {
    index: '04',
    title: 'Maintenance & after-sales support',
    body: 'One-year warranty on every unit, spare parts support and an after-sales network being expanded across the region as our footprint grows.',
    tags: ['1-year warranty', 'Spare parts', 'After-sales network'],
  },
]

export const machineSpecs = [
  { key: 'Throughput', value: '10–15 kg of seed per hour (crop-dependent)' },
  { key: 'Power supply', value: 'Single-phase — standard household electricity' },
  { key: 'Crops handled', value: 'Sunflower, peanut, soybean, macadamia, coconut, canola' },
  { key: 'Temperature control', value: 'Heating element matched to each crop' },
  { key: 'Construction', value: 'Stainless steel food-contact surfaces' },
  { key: 'Oil handling', value: 'Filter unit or gravity decanting in stainless containers' },
  { key: 'Warranty', value: '1 year' },
  { key: 'Guide price', value: 'KSh 285,000 – 350,000 (capacity & options dependent)' },
]

export const crops = ['Sunflower', 'Peanut', 'Soybean', 'Macadamia', 'Coconut', 'Canola']

export const philosophy = [
  {
    title: 'Design for the grid you have',
    body: 'Most of rural Kenya runs on single-phase power. So our machines do too — no three-phase connection, no generator, no excuse not to start producing.',
  },
  {
    title: 'Build what can be repaired locally',
    body: 'Locally sourced components and stainless-steel construction mean machines can be maintained and repaired where they work — not shipped back abroad.',
  },
  {
    title: 'One machine, many crops',
    body: 'Versatility is profit. A farmer should not need a different machine for every crop — so one press handles six oilseed crops with crop-specific temperature control.',
  },
]

export const contactTopics = [
  'Machine purchase & pricing',
  'Custom fabrication project',
  'Partnership / investment',
  'NGO, government & institutional supply',
  'Media & press',
  'General inquiry',
]

export const budgetRanges = [
  'Under KSh 100,000',
  'KSh 100,000 – 350,000',
  'KSh 350,000 – 1,000,000',
  'Over KSh 1,000,000',
  'To be discussed',
]
