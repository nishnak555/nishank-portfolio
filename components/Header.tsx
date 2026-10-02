"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Team", href: "/#team" },
  { label: "FAQ", href: "/#faq" },
];

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label={`${site.name} home`}>
      <span className="logo-mark" aria-hidden="true">M</span>
      <span>MindForge<em>Ai</em></span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="wrap header-inner">
        <Logo />
        <nav className="nav" aria-label="Main navigation">
          {links.map((l) => <Link key={l.label} href={l.href}>{l.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link href="/#contact" className="btn btn-dark">Let&apos;s talk</Link>
          <button type="button" className="menu-btn" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((l) => <Link key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>)}
          <Link href="/#contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
