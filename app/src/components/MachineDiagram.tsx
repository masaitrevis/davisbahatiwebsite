/**
 * Technical line-drawing of the multi-crop oil press.
 * Code-drawn SVG in blueprint style — used as a decorative/technical
 * visual where photography is not available.
 */
export function MachineDiagram({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 560"
      fill="none"
      role="img"
      aria-label="Technical line drawing of the multi-crop oil press"
      className={className}
    >
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        {/* frame */}
        <rect x="180" y="180" width="260" height="300" />
        {/* hopper */}
        <path d="M210 180 L210 120 L410 120 L410 180" />
        <path d="M210 120 L180 60 L440 60 L410 120" />
        {/* hopper cross hatch */}
        <path d="M230 120 L230 180 M260 120 L260 180 M290 120 L290 180 M320 120 L320 180 M350 120 L350 180 M380 120 L380 180" opacity="0.35" />
        {/* press chamber */}
        <rect x="180" y="240" width="120" height="80" />
        <circle cx="240" cy="280" r="22" />
        <circle cx="240" cy="280" r="8" />
        {/* cake outlet */}
        <path d="M300 280 L340 280" />
        <path d="M340 268 L360 280 L340 292 Z" />
        {/* oil outlet + pot */}
        <path d="M240 320 L240 380" />
        <path d="M180 400 L300 400 L288 460 L192 460 Z" />
        <path d="M200 415 L280 415" opacity="0.4" />
        {/* control panel */}
        <rect x="360" y="240" width="80" height="140" />
        <circle cx="380" cy="262" r="8" />
        <circle cx="412" cy="262" r="8" />
        <rect x="372" y="286" width="56" height="22" />
        <path d="M372 330 L428 330 M372 344 L428 344 M372 358 L428 358" opacity="0.4" />
        {/* feet */}
        <path d="M200 480 L200 510 M420 480 L420 510" />
        {/* dimension lines */}
        <path d="M120 180 L120 480" strokeDasharray="2 6" />
        <path d="M112 180 L128 180 M112 480 L128 480" />
        <path d="M180 532 L440 532" strokeDasharray="2 6" />
        <path d="M180 524 L180 540 M440 524 L440 540" />
      </g>
      <g fontFamily="'IBM Plex Mono', monospace" fontSize="11" letterSpacing="2" fill="currentColor">
        <text x="150" y="46">FIG. 01 — MULTI-CROP OIL PRESS</text>
        <text x="452" y="126" fontSize="9">A · SEED HOPPER</text>
        <text x="452" y="262" fontSize="9">B · CONTROL PANEL</text>
        <text x="452" y="286" fontSize="9">C · PRESS CHAMBER</text>
        <text x="60" y="340" fontSize="9" transform="rotate(-90 60 340)">10–15 KG/HR</text>
        <text x="240" y="556" fontSize="9" textAnchor="middle">SINGLE-PHASE · 220–240V</text>
      </g>
    </svg>
  )
}
