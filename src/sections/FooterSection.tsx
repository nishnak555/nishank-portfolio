import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { footerLinks, site } from "@/data";

export function FooterSection() {
  return (
    <footer className="footer" style={{ background: "var(--gradient-footer)" }}>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="brand-mark">MindForge<span className="text-gradient">Ai</span></a>
            <p className="footer-brand__tagline">
              Web development, Figma design, deployment and AI agents — delivered remotely by senior engineers.
            </p>
            <div className="footer-social">
              <motion.a
                href={`mailto:${site.email}`}
                aria-label="Email us"
                className="social-link"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={16} />
              </motion.a>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group} className="footer-nav-group">
                <h4 className="footer-nav-group__label">{group}</h4>
                <ul className="footer-nav-list">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer-nav-link">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
