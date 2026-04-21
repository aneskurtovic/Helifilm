"use client";

import { motion, useReducedMotion } from "framer-motion";

// Coordinate transform: x = (lon - 12) * 120,  y = (48 - lat) * 90
// Sarajevo 18.42°E 43.85°N → (770, 374)  |  viewBox center (720, 450)

const PATHS = {
  // Simplified country outlines — approximate, stylised
  slovenia:
    "M 204 144 C 312 126 444 126 492 144 C 492 189 456 225 420 234 L 288 243 C 243 225 198 180 204 144 Z",
  croatia:
    "M 204 144 C 390 126 528 135 660 144 L 828 252 L 817 281 L 773 265 L 718 257 L 631 258 L 545 250 L 524 254 L 490 263 L 451 273 L 474 291 L 510 315 L 535 342 L 560 361 L 592 395 L 614 416 L 630 444 L 672 450 L 700 460 L 732 483 C 650 464 572 424 510 393 C 420 351 348 288 294 234 C 249 189 207 162 204 144 Z",
  bosnia:
    "M 545 250 L 631 258 L 718 257 L 773 265 L 817 281 L 856 295 L 862 340 L 844 368 L 826 388 L 814 405 L 797 437 L 774 461 L 762 474 L 672 454 L 630 444 L 614 416 L 592 395 L 560 361 L 535 342 L 510 315 L 474 291 L 451 273 L 490 263 L 524 254 Z",
  serbia:
    "M 856 295 L 840 252 C 900 207 1056 162 1272 180 C 1284 306 1278 369 1260 414 L 1134 540 L 1080 540 C 1020 495 960 450 936 414 C 894 378 862 344 856 295 Z",
  montenegro:
    "M 774 461 L 762 474 L 732 483 L 780 504 L 840 504 L 1008 495 L 936 414 C 894 440 840 470 774 461 Z",
  northMacedonia:
    "M 1134 540 L 1260 531 L 1260 594 L 1080 630 L 1020 594 L 1080 540 Z",
  albania:
    "M 1008 477 L 1080 495 L 1080 540 L 1020 594 L 960 648 L 900 774 L 876 648 L 888 540 L 888 495 Z",
  kosovo:
    "M 1020 495 L 1080 495 L 1080 540 L 1020 540 Z",
};

// City dots
const CITIES = [
  { name: "Sarajevo", x: 770, y: 374, featured: true },
  { name: "Zagreb",   x: 476, y: 197, featured: false },
  { name: "Belgrade", x: 1015, y: 288, featured: false },
  { name: "Podgorica",x: 872, y: 500, featured: false },
  { name: "Ljubljana",x: 300, y: 176, featured: false },
  { name: "Mostar",   x: 697, y: 419, featured: false },
];

// Drone paths arc naturally over the Balkan region
const FLIGHT_PATH   = "M 300 240 C 480 260 630 300 770 374 S 1000 340 1200 420";
const FLIGHT_PATH_B = "M 1260 200 C 1050 270 910 310 770 374 S 580 430 380 460";
const FLIGHT_PATH_C = "M 620 510 C 680 460 730 415 770 374 S 870 320 1020 280";

// Lat/lon ticks tuned to actual Balkan coordinate range
const RIGHT_TICKS = [{ y: 144, v: "47.0°N" }, { y: 234, v: "46.0°N" }, { y: 324, v: "45.0°N" }, { y: 414, v: "44.0°N" }, { y: 504, v: "43.0°N" }, { y: 594, v: "42.0°N" }];
const TOP_TICKS   = [{ x: 240, v: "14°E" }, { x: 480, v: "16°E" }, { x: 720, v: "18°E" }, { x: 960, v: "20°E" }, { x: 1200, v: "22°E" }];

export default function FlightPath() {
  const reduce = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <radialGradient id="fp-wash" cx="53%" cy="42%" r="55%">
            <stop offset="0%"   stopColor="#D4A418" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#D4A418" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="fp-bih" cx="50%" cy="50%" r="70%">
            <stop offset="0%"   stopColor="#D4A418" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#D4A418" stopOpacity="0.02" />
          </radialGradient>
        </defs>

        <rect width="1440" height="900" fill="url(#fp-wash)" />

        {/* Country fills */}
        <g fill="rgba(244,241,234,0.03)" stroke="none">
          <path d={PATHS.slovenia} />
          <path d={PATHS.croatia} />
          <path d={PATHS.serbia} />
          <path d={PATHS.montenegro} />
          <path d={PATHS.northMacedonia} />
          <path d={PATHS.albania} />
          <path d={PATHS.kosovo} />
        </g>

        {/* Bosnia fill — gold-tinted */}
        <path d={PATHS.bosnia} fill="url(#fp-bih)" stroke="none" />

        {/* Country borders */}
        <g fill="none" stroke="rgba(244,241,234,0.13)" strokeWidth="0.8">
          <path d={PATHS.slovenia} />
          <path d={PATHS.croatia} />
          <path d={PATHS.serbia} />
          <path d={PATHS.montenegro} />
          <path d={PATHS.northMacedonia} />
          <path d={PATHS.albania} />
          <path d={PATHS.kosovo} />
        </g>

        {/* Bosnia border — slightly brighter */}
        <path
          d={PATHS.bosnia}
          fill="none"
          stroke="rgba(212,164,24,0.30)"
          strokeWidth="1.1"
        />

        {/* Lat/lon grid lines (very faint) */}
        <g stroke="rgba(244,241,234,0.05)" strokeWidth="0.5" fill="none">
          {RIGHT_TICKS.map((t) => <line key={t.v} x1="0" y1={t.y} x2="1440" y2={t.y} />)}
          {TOP_TICKS.map((t)   => <line key={t.v} x1={t.x} y1="0"  x2={t.x}  y2="900" />)}
        </g>

        {/* Lat/lon tick labels */}
        <g
          stroke="rgba(244,241,234,0.20)"
          strokeWidth="0.5"
          fontSize="9"
          fill="rgba(244,241,234,0.38)"
          style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", letterSpacing: "0.08em" }}
        >
          {RIGHT_TICKS.map((t) => (
            <g key={t.v}>
              <line x1="1424" y1={t.y} x2="1438" y2={t.y} />
              <text x="1416" y={t.y + 3} textAnchor="end">{t.v}</text>
            </g>
          ))}
          {TOP_TICKS.map((t) => (
            <g key={t.v}>
              <line x1={t.x} y1="0" x2={t.x} y2="12" />
              <text x={t.x} y="26" textAnchor="middle">{t.v}</text>
            </g>
          ))}
        </g>

        {/* City dots */}
        {CITIES.map((c) => (
          <g key={c.name}>
            <circle
              cx={c.x} cy={c.y}
              r={c.featured ? 3.5 : 2}
              fill={c.featured ? "#D4A418" : "rgba(244,241,234,0.5)"}
            />
            {c.featured && !reduce && (
              <circle cx={c.x} cy={c.y} r="3.5" fill="none" stroke="#D4A418" strokeWidth="1" opacity="0">
                <animate attributeName="r"       from="3.5" to="20" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;0"     dur="2.5s" begin="0.5s" repeatCount="indefinite" />
              </circle>
            )}
            <text
              x={c.featured ? c.x + 8 : c.x + 6}
              y={c.featured ? c.y - 7  : c.y - 5}
              fontSize={c.featured ? 9 : 7.5}
              fill={c.featured ? "rgba(212,164,24,0.85)" : "rgba(244,241,234,0.35)"}
              style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", letterSpacing: "0.1em" }}
            >
              {c.name.toUpperCase()}
            </text>
          </g>
        ))}

        {/* Flight paths */}
        <motion.path id="flight-path"   d={FLIGHT_PATH}   stroke="rgba(244,241,234,0.30)" strokeWidth="1.2" strokeDasharray="4 6"  fill="none" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} />
        <motion.path id="flight-path-b" d={FLIGHT_PATH_B} stroke="rgba(244,241,234,0.16)" strokeWidth="0.8" strokeDasharray="3 8"  fill="none" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 1.0, ease: [0.22, 1, 0.36, 1] }} />
        <motion.path id="flight-path-c" d={FLIGHT_PATH_C} stroke="rgba(244,241,234,0.12)" strokeWidth="0.8" strokeDasharray="3 8"  fill="none" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 1.6, ease: [0.22, 1, 0.36, 1] }} />

        {/* Drone A — primary */}
        <g transform={reduce ? "translate(770, 374)" : undefined}>
          <line x1="0" y1="0" x2="-6" y2="-6" stroke="#D4A418" strokeWidth="0.9" />
          <line x1="0" y1="0" x2="6"  y2="-6" stroke="#D4A418" strokeWidth="0.9" />
          <line x1="0" y1="0" x2="-6" y2="6"  stroke="#D4A418" strokeWidth="0.9" />
          <line x1="0" y1="0" x2="6"  y2="6"  stroke="#D4A418" strokeWidth="0.9" />
          <circle cx="-6" cy="-6" r="1.8" fill="none" stroke="#D4A418" strokeWidth="0.8" />
          <circle cx="6"  cy="-6" r="1.8" fill="none" stroke="#D4A418" strokeWidth="0.8" />
          <circle cx="-6" cy="6"  r="1.8" fill="none" stroke="#D4A418" strokeWidth="0.8" />
          <circle cx="6"  cy="6"  r="1.8" fill="none" stroke="#D4A418" strokeWidth="0.8" />
          <circle cx="0"  cy="0"  r="2"   fill="#D4A418" />
          {!reduce && <animateMotion dur="16s" repeatCount="indefinite" rotate="auto" begin="1.2s"><mpath href="#flight-path" /></animateMotion>}
        </g>

        {/* Drone B — smaller, upper */}
        <g opacity="0.55" transform={reduce ? "translate(680, 260)" : undefined}>
          <line x1="0" y1="0" x2="-4" y2="-4" stroke="#D4A418" strokeWidth="0.7" />
          <line x1="0" y1="0" x2="4"  y2="-4" stroke="#D4A418" strokeWidth="0.7" />
          <line x1="0" y1="0" x2="-4" y2="4"  stroke="#D4A418" strokeWidth="0.7" />
          <line x1="0" y1="0" x2="4"  y2="4"  stroke="#D4A418" strokeWidth="0.7" />
          <circle cx="-4" cy="-4" r="1.3" fill="none" stroke="#D4A418" strokeWidth="0.7" />
          <circle cx="4"  cy="-4" r="1.3" fill="none" stroke="#D4A418" strokeWidth="0.7" />
          <circle cx="-4" cy="4"  r="1.3" fill="none" stroke="#D4A418" strokeWidth="0.7" />
          <circle cx="4"  cy="4"  r="1.3" fill="none" stroke="#D4A418" strokeWidth="0.7" />
          <circle cx="0"  cy="0"  r="1.4" fill="#D4A418" />
          {!reduce && <animateMotion dur="21s" repeatCount="indefinite" rotate="auto" begin="3.5s"><mpath href="#flight-path-b" /></animateMotion>}
        </g>

        {/* Drone C — smallest, south */}
        <g opacity="0.38" transform={reduce ? "translate(820, 460)" : undefined}>
          <line x1="0" y1="0" x2="-3" y2="-3" stroke="#D4A418" strokeWidth="0.6" />
          <line x1="0" y1="0" x2="3"  y2="-3" stroke="#D4A418" strokeWidth="0.6" />
          <line x1="0" y1="0" x2="-3" y2="3"  stroke="#D4A418" strokeWidth="0.6" />
          <line x1="0" y1="0" x2="3"  y2="3"  stroke="#D4A418" strokeWidth="0.6" />
          <circle cx="-3" cy="-3" r="1" fill="none" stroke="#D4A418" strokeWidth="0.6" />
          <circle cx="3"  cy="-3" r="1" fill="none" stroke="#D4A418" strokeWidth="0.6" />
          <circle cx="-3" cy="3"  r="1" fill="none" stroke="#D4A418" strokeWidth="0.6" />
          <circle cx="3"  cy="3"  r="1" fill="none" stroke="#D4A418" strokeWidth="0.6" />
          <circle cx="0"  cy="0"  r="1.1" fill="#D4A418" />
          {!reduce && <animateMotion dur="12s" repeatCount="indefinite" rotate="auto" begin="6s"><mpath href="#flight-path-c" /></animateMotion>}
        </g>
      </svg>
    </div>
  );
}
