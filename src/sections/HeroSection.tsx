import { useRef, useState, useCallback, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { trustedBrands, socialLinks } from "@/data";

// ─── Aurora orb ──────────────────────────────────────────────────────────────
function Orb({
  x, y, color, size, duration, delay,
}: {
  x: string; y: string; color: string; size: number; duration: number; delay: number;
}) {
  return (
    <motion.div
      className="hero2-orb"
      style={{
        left: x, top: y,
        width: size, height: size,
        background: color,
        filter: `blur(${Math.round(size * 0.38)}px)`,
      }}
      animate={{ x: [0, 28, -18, 0], y: [0, -22, 16, 0], scale: [1, 1.08, 0.96, 1] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

// ─── Magnetic CTA ─────────────────────────────────────────────────────────────
function MagCTA({
  href, children, primary,
}: {
  href: string; children: ReactNode; primary?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 28 });
  const sy = useSpring(y, { stiffness: 300, damping: 28 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={primary ? "hero2-cta-primary" : "hero2-cta-ghost"}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.a>
  );
}

// ─── Word-reveal headline ──────────────────────────────────────────────────────
function WordReveal({ text, delay = 0, gradient = false }: { text: string; delay?: number; gradient?: boolean }) {
  return (
    <span className={gradient ? "text-gradient" : ""}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="hero2-word-wrap">
          <motion.span
            className="hero2-word"
            initial={{ y: "105%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: delay + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [spot, setSpot] = useState({ x: 50, y: 35 });

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const r = containerRef.current?.getBoundingClientRect();
    if (!r) return;
    setSpot({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  }, []);

  const socialIconMap: Record<string, React.ElementType> = {
    github: Github, linkedin: Linkedin, twitter: Twitter,
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="hero2"
      onMouseMove={onMouseMove}
    >
      {/* ── Background layers ── */}
      <div className="hero2-bg" aria-hidden="true">
        {/* Dot grid */}
        <div className="hero2-grid" />

        {/* Aurora orbs */}
        <Orb x="-8%"  y="-12%" color="radial-gradient(circle, rgba(79,107,255,0.45) 0%, transparent 70%)"  size={700} duration={14} delay={0} />
        <Orb x="60%"  y="-18%" color="radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)"  size={650} duration={17} delay={1.5} />
        <Orb x="75%"  y="50%"  color="radial-gradient(circle, rgba(14,165,233,0.25) 0%, transparent 70%)"  size={480} duration={12} delay={3} />
        <Orb x="20%"  y="65%"  color="radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)"  size={420} duration={16} delay={2} />
        <Orb x="45%"  y="30%"  color="radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)"  size={380} duration={19} delay={4} />

        {/* Mouse spotlight */}
        <div
          className="hero2-spotlight"
          style={{
            background: `radial-gradient(900px circle at ${spot.x}% ${spot.y}%, rgba(79,107,255,0.09) 0%, rgba(139,92,246,0.05) 35%, transparent 65%)`,
          }}
        />

        {/* Gradient bottom fade */}
        <div className="hero2-fade-bottom" />
      </div>

      {/* ── Content ── */}
      <div className="container hero2-inner">
        <div className="hero2-content">

          {/* Badge */}
          <motion.div
            className="hero2-badge"
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero2-badge-dot" />
            Available for new projects
          </motion.div>

          {/* Headline */}
          <h1 className="hero2-headline">
            <span className="hero2-line">
              <WordReveal text="Senior Full Stack" delay={0.25} />
            </span>
            <span className="hero2-line">
              <WordReveal text="Engineer &" delay={0.38} gradient />
              {" "}
              <WordReveal text="Product" delay={0.52} />
            </span>
            <span className="hero2-line">
              <WordReveal text="Builder." delay={0.64} />
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            className="hero2-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            Building scalable digital products that ship fast, scale effortlessly,
            and create meaningful impact for millions of users worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero2-ctas"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
            <MagCTA href="#projects" primary>
              View My Work <ArrowRight size={15} />
            </MagCTA>
            <MagCTA href="#contact">
              Let's Connect
            </MagCTA>
          </motion.div>

          {/* Divider + Trusted by */}
          <motion.div
            className="hero2-trusted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.25 }}
          >
            <div className="hero2-trusted-rule" />
            <div className="hero2-trusted-row">
              <span className="hero2-trusted-label">Trusted by</span>
              {trustedBrands.map((b) => (
                <span key={b.name} className="hero2-brand">{b.name}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social links (vertical right) */}
        <motion.div
          className="hero2-socials"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          {socialLinks.slice(0, 3).map((link) => {
            const Icon = socialIconMap[link.icon] ?? Github;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="hero2-social-link"
                whileHover={{ scale: 1.15, x: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={16} />
              </motion.a>
            );
          })}
          <div className="hero2-social-line" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero2-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <motion.div
          className="hero2-scroll-bar"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.4 }}
        />
        <span className="hero2-scroll-text">Scroll</span>
      </motion.div>
    </section>
  );
}
