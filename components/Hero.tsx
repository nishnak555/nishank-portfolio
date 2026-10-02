import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HeroScene } from "./HeroScene";

export function Hero() {
  return (
    <section className="hero wash" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow-dot">Web. Design. Deployment. AI agents.</p>
          <h1 id="hero-title" className="hero-title">
            Sharp design.<br />
            Real agents.
            <em>Let&apos;s build.</em>
          </h1>
          <p className="hero-sub">
            We are four senior engineers who design, build and ship web products and AI agents for founders and teams, from the first Figma frame to production.
          </p>
          <div className="hero-cta">
            <Link href="/#contact" className="btn btn-dark">Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" /></Link>
            <Link href="/#services" className="btn btn-ghost">Explore what we do <ArrowDown size={15} aria-hidden="true" /></Link>
          </div>
          <p className="hero-note">Remote-first. Building everywhere.</p>
        </div>
        <HeroScene />
      </div>
    </section>
  );
}
