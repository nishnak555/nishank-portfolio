"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Tone = [string, string];
const TONES: Record<string, Tone> = {
  orange: ["#f8c98a", "#e9a554"],
  purple: ["#cdb4ee", "#a98bd6"],
  blue: ["#b4c6f0", "#8aa3dd"],
  teal: ["#a9ddd8", "#7cc2bd"],
  green: ["#cfe3a8", "#a8c97a"],
};

// Piece layout inside a cluster: x/y offsets (px), rotation (deg), size scale.
const PIECES = [
  { x: -26, y: -18, r: -22, s: 1 },
  { x: 24, y: -26, r: 38, s: 1 },
  { x: 2, y: 8, r: 94, s: 1.05 },
  { x: 34, y: 26, r: -150, s: .9 },
];

interface Cluster { tone: keyof typeof TONES; n: number; pos: [number, number][]; twist: number }

// Cluster centers (% of the stage) for each mode.
const CLUSTERS: Cluster[] = [
  { tone: "orange", n: 4, pos: [[30, 24], [22, 20], [30, 50]], twist: 0 },
  { tone: "purple", n: 3, pos: [[70, 24], [74, 20], [70, 50]], twist: 40 },
  { tone: "teal", n: 4, pos: [[50, 44], [50, 46], [50, 50]], twist: 90 },
  { tone: "blue", n: 4, pos: [[34, 70], [26, 68], [38, 64]], twist: 20 },
  { tone: "green", n: 4, pos: [[66, 70], [70, 64], [62, 64]], twist: 70 },
];

const MODES = [
  { id: "sales", label: "Sales", title: "Turn every enquiry into a conversation." , spread: 1.25, rot: 0 },
  { id: "ops", label: "Operations", title: "Let agents handle the busywork.", spread: 1, rot: 24 },
  { id: "projects", label: "Projects", title: "Move a project from brief to release.", spread: .8, rot: -30 },
];

function Tri({ tone, size, x, y, r }: { tone: Tone; size: number; x: number; y: number; r: number }) {
  const id = `g-${tone[0].slice(1)}`;
  return (
    <span className="tri" style={{ ["--sz" as string]: `${size}px`, ["--x" as string]: x, ["--y" as string]: y, ["--r" as string]: r }} aria-hidden="true">
      <svg viewBox="0 0 48 48">
        <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={tone[0]} /><stop offset="1" stopColor={tone[1]} /></linearGradient></defs>
        <path d="M24 9 L40 38 L8 38 Z" fill={tone[1]} stroke={tone[1]} strokeWidth="9" strokeLinejoin="round" transform="translate(0 3)" />
        <path d="M24 9 L40 38 L8 38 Z" fill={`url(#${id})`} stroke={`url(#${id})`} strokeWidth="9" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function HeroScene() {
  const [i, setI] = useState(1);
  const [paused, setPaused] = useState(false);
  const art = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((v) => (v + 1) % MODES.length), 6000);
    return () => clearTimeout(t);
  }, [i, paused]);

  const m = MODES[i];
  const onMove = (e: React.MouseEvent) => {
    const el = art.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - .5) * 8}deg`);
    el.style.setProperty("--rx", `${-((e.clientY - r.top) / r.height - .5) * 6}deg`);
  };

  return (
    <div className={`lift ${paused ? "paused" : ""}`} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <p className="lift-head mono">Product, operations and sales</p>
      <div className="lift-art" ref={art} onMouseMove={onMove}
        onMouseLeave={() => { art.current?.style.setProperty("--rx", "0deg"); art.current?.style.setProperty("--ry", "0deg"); }}>
        <div className="lift-stage" style={{ transform: "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))" }}>
          <div className="lift-shadow" />
          {CLUSTERS.map((c) => {
            const [px, py] = c.pos[i];
            return (
              <div key={c.tone} className="cluster" style={{ left: `${px}%`, top: `${py}%` }}>
                {PIECES.slice(0, c.n).map((p, k) => (
                  <Tri key={k} tone={TONES[c.tone]} size={58 * p.s}
                    x={p.x * m.spread} y={p.y * m.spread} r={p.r + c.twist + m.rot} />
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="lift-modes" role="group" aria-label="Scene mode">
        {MODES.map((mode, k) => (
          <button key={mode.id} type="button" aria-pressed={k === i} onClick={() => setI(k)}>
            {mode.label}<span className="lift-progress" key={k === i ? `${i}-${paused}` : "off"} />
          </button>
        ))}
      </div>
      <div className="lift-detail" aria-live="polite"><h2>{m.title}</h2></div>
      <Link href="/#services" className="lift-link"><span>See what we can build</span><ArrowUpRight size={15} aria-hidden="true" /></Link>
    </div>
  );
}
