import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { footerLinks, socialLinks } from "@/data";

const socialIconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

export function FooterSection() {
  return (
    <footer className="footer" style={{ background: "var(--gradient-footer)" }}>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="brand-mark">NG.</a>
            <p className="footer-brand__tagline">
              Building scalable digital products for global clients. Available for freelance projects.
            </p>
            <div className="footer-social">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon] ?? Github;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="social-link"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
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
            © {new Date().getFullYear()} Nikhil Gautam. All rights reserved.
          </span>
          <nav className="footer-legal" aria-label="Legal">
            <a href="#" className="footer-legal-link">Privacy Policy</a>
            <a href="#" className="footer-legal-link">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
