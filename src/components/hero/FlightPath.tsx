"use client";

import { motion, useReducedMotion } from "framer-motion";

const FLIGHT_PATH =
  "M 80 640 C 280 420, 520 720, 740 460 S 1120 280, 1360 520";

const FLIGHT_PATH_B =
  "M 1380 200 C 1100 320, 900 140, 680 260 S 320 180, 60 300";

const FLIGHT_PATH_C =
  "M 200 820 C 420 700, 600 820, 820 740 S 1060 800, 1300 700";

const WAYPOINTS = [
  { x: 280, y: 510, delay: "0s" },
  { x: 740, y: 460, delay: "1s" },
  { x: 1120, y: 360, delay: "2s" },
];

const RIGHT_TICKS = [150, 290, 430, 570, 710, 850];
const TOP_TICKS = [200, 450, 700, 950, 1200];

export default function FlightPath() {
  const reduce = useReducedMotion();

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <radialGradient id="fp-wash" cx="18%" cy="12%" r="70%">
            <stop offset="0%" stopColor="#D4A418" stopOpacity="0.09" />
            <stop offset="60%" stopColor="#D4A418" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="1440" height="900" fill="url(#fp-wash)" />

        {/* Topographic contour clusters */}
        <g
          className="fp-contours"
          stroke="rgba(244,241,234,0.06)"
          strokeWidth="1"
          fill="none"
        >
          <ellipse cx="400" cy="420" rx="260" ry="150" />
          <ellipse cx="420" cy="430" rx="210" ry="125" />
          <ellipse cx="440" cy="440" rx="160" ry="100" />
          <ellipse cx="460" cy="450" rx="110" ry="75" />
          <ellipse cx="480" cy="460" rx="60" ry="45" />

          <ellipse cx="1000" cy="560" rx="310" ry="160" />
          <ellipse cx="1020" cy="570" rx="250" ry="130" />
          <ellipse cx="1040" cy="580" rx="185" ry="100" />
          <ellipse cx="1060" cy="590" rx="120" ry="70" />
          <ellipse cx="1080" cy="600" rx="55" ry="40" />

          <ellipse cx="220" cy="180" rx="180" ry="80" />
          <ellipse cx="240" cy="185" rx="130" ry="60" />
          <ellipse cx="260" cy="190" rx="80" ry="40" />
        </g>

        {/* Lat/long ticks */}
        <g
          stroke="rgba(244,241,234,0.22)"
          strokeWidth="0.5"
          fontSize="9"
          fill="rgba(244,241,234,0.42)"
          style={{
            fontFamily: "var(--font-mono), ui-monospace, monospace",
            letterSpacing: "0.08em",
          }}
        >
          {RIGHT_TICKS.map((y, i) => (
            <g key={`r${i}`}>
              <line x1="1424" y1={y} x2="1438" y2={y} />
              <text x="1416" y={y + 3} textAnchor="end">
                {(43.95 - i * 0.04).toFixed(2)}°N
              </text>
            </g>
          ))}
          {TOP_TICKS.map((x, i) => (
            <g key={`t${i}`}>
              <line x1={x} y1="0" x2={x} y2="12" />
              <text x={x} y="26" textAnchor="middle">
                {(18.1 + i * 0.15).toFixed(2)}°E
              </text>
            </g>
          ))}
        </g>

        {/* Flight paths */}
        <motion.path
          id="flight-path"
          d={FLIGHT_PATH}
          stroke="rgba(244,241,234,0.32)"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          fill="none"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          id="flight-path-b"
          d={FLIGHT_PATH_B}
          stroke="rgba(244,241,234,0.18)"
          strokeWidth="0.8"
          strokeDasharray="3 8"
          fill="none"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          id="flight-path-c"
          d={FLIGHT_PATH_C}
          stroke="rgba(244,241,234,0.14)"
          strokeWidth="0.8"
          strokeDasharray="3 8"
          fill="none"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Waypoints + pulse rings */}
        {WAYPOINTS.map((w, i) => (
          <g key={i}>
            <circle cx={w.x} cy={w.y} r="3.5" fill="#D4A418" />
            {!reduce && (
              <circle
                cx={w.x}
                cy={w.y}
                r="3.5"
                fill="none"
                stroke="#D4A418"
                strokeWidth="1"
                opacity="0"
              >
                <animate
                  attributeName="r"
                  from="3.5"
                  to="22"
                  dur="3s"
                  begin={w.delay}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.75;0"
                  dur="3s"
                  begin={w.delay}
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>
        ))}

        {/* Drone A — primary, glides main path */}
        <g transform={reduce ? "translate(740, 460)" : undefined}>
          <line x1="0" y1="0" x2="-6" y2="-6" stroke="#D4A418" strokeWidth="0.9" />
          <line x1="0" y1="0" x2="6" y2="-6" stroke="#D4A418" strokeWidth="0.9" />
          <line x1="0" y1="0" x2="-6" y2="6" stroke="#D4A418" strokeWidth="0.9" />
          <line x1="0" y1="0" x2="6" y2="6" stroke="#D4A418" strokeWidth="0.9" />
          <circle cx="-6" cy="-6" r="1.8" fill="none" stroke="#D4A418" strokeWidth="0.8" />
          <circle cx="6" cy="-6" r="1.8" fill="none" stroke="#D4A418" strokeWidth="0.8" />
          <circle cx="-6" cy="6" r="1.8" fill="none" stroke="#D4A418" strokeWidth="0.8" />
          <circle cx="6" cy="6" r="1.8" fill="none" stroke="#D4A418" strokeWidth="0.8" />
          <circle cx="0" cy="0" r="2" fill="#D4A418" />
          {!reduce && (
            <animateMotion dur="14s" repeatCount="indefinite" rotate="auto" begin="1.2s">
              <mpath href="#flight-path" />
            </animateMotion>
          )}
        </g>

        {/* Drone B — smaller, upper path, slower */}
        <g opacity="0.55" transform={reduce ? "translate(680, 260)" : undefined}>
          <line x1="0" y1="0" x2="-4" y2="-4" stroke="#D4A418" strokeWidth="0.7" />
          <line x1="0" y1="0" x2="4" y2="-4" stroke="#D4A418" strokeWidth="0.7" />
          <line x1="0" y1="0" x2="-4" y2="4" stroke="#D4A418" strokeWidth="0.7" />
          <line x1="0" y1="0" x2="4" y2="4" stroke="#D4A418" strokeWidth="0.7" />
          <circle cx="-4" cy="-4" r="1.3" fill="none" stroke="#D4A418" strokeWidth="0.7" />
          <circle cx="4" cy="-4" r="1.3" fill="none" stroke="#D4A418" strokeWidth="0.7" />
          <circle cx="-4" cy="4" r="1.3" fill="none" stroke="#D4A418" strokeWidth="0.7" />
          <circle cx="4" cy="4" r="1.3" fill="none" stroke="#D4A418" strokeWidth="0.7" />
          <circle cx="0" cy="0" r="1.4" fill="#D4A418" />
          {!reduce && (
            <animateMotion dur="19s" repeatCount="indefinite" rotate="auto" begin="3.5s">
              <mpath href="#flight-path-b" />
            </animateMotion>
          )}
        </g>

        {/* Drone C — smallest, lower path, fastest */}
        <g opacity="0.38" transform={reduce ? "translate(820, 740)" : undefined}>
          <line x1="0" y1="0" x2="-3" y2="-3" stroke="#D4A418" strokeWidth="0.6" />
          <line x1="0" y1="0" x2="3" y2="-3" stroke="#D4A418" strokeWidth="0.6" />
          <line x1="0" y1="0" x2="-3" y2="3" stroke="#D4A418" strokeWidth="0.6" />
          <line x1="0" y1="0" x2="3" y2="3" stroke="#D4A418" strokeWidth="0.6" />
          <circle cx="-3" cy="-3" r="1" fill="none" stroke="#D4A418" strokeWidth="0.6" />
          <circle cx="3" cy="-3" r="1" fill="none" stroke="#D4A418" strokeWidth="0.6" />
          <circle cx="-3" cy="3" r="1" fill="none" stroke="#D4A418" strokeWidth="0.6" />
          <circle cx="3" cy="3" r="1" fill="none" stroke="#D4A418" strokeWidth="0.6" />
          <circle cx="0" cy="0" r="1.1" fill="#D4A418" />
          {!reduce && (
            <animateMotion dur="11s" repeatCount="indefinite" rotate="auto" begin="6s">
              <mpath href="#flight-path-c" />
            </animateMotion>
          )}
        </g>
      </svg>
    </div>
  );
}
