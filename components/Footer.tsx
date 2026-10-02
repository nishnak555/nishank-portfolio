import Link from "next/link";
import { Logo } from "./Header";
import { services } from "@/lib/content";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Logo />
          <p className="muted footer-blurb">Web development, design and AI agents, delivered remotely by senior engineers.</p>
          <a className="footer-mail" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <nav aria-label="Services">
          <h2 className="footer-h">Services</h2>
          <ul>{services.map((s) => <li key={s.slug}><Link href={`/${s.slug}`}>{s.title}</Link></li>)}</ul>
        </nav>
        <nav aria-label="Studio">
          <h2 className="footer-h">Studio</h2>
          <ul>
            <li><Link href="/#work">Work</Link></li>
            <li><Link href="/#process">Process</Link></li>
            <li><Link href="/#team">Team</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
          </ul>
        </nav>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span className="mono">Remote · Worldwide</span>
      </div>
    </footer>
  );
}
