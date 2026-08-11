import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Moon, Sun, Monitor, Menu } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const NAV_LINKS = [
  { label: "Work",    href: "#projects"     },
  { label: "About",   href: "#about"        },
  { label: "Skills",  href: "#skills"       },
  { label: "Process", href: "#process"      },
  { label: "Contact", href: "#contact"      },
];

const MOBILE_LINKS = [
  { label: "Home",         href: "#home"          },
  { label: "Work",         href: "#projects"      },
  { label: "About",        href: "#about"         },
  { label: "Skills",       href: "#skills"        },
  { label: "Services",     href: "#services"      },
  { label: "Experience",   href: "#experience"    },
  { label: "Process",      href: "#process"       },
  { label: "Testimonials", href: "#testimonials"  },
  { label: "Contact",      href: "#contact"       },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const cycleTheme = () => {
    const next: Record<string, "light" | "dark" | "system"> = {
      light: "dark", dark: "system", system: "light",
    };
    setTheme(next[theme] ?? "system");
  };

  const ThemeIcon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  return (
    <>
      {/* ── Scroll progress bar ── */}
      <motion.div
        className="navbar-progress"
        style={{ scaleX: progress, transformOrigin: "left" }}
      />

      {/* ── Floating navbar ── */}
      <header className={`navbar-float ${scrolled ? "navbar-float--scrolled" : ""}`}>
        <div className="navbar-float-inner">

          {/* Brand */}
          <a href="#home" className="navbar-brand" aria-label="Home">
            NG.
          </a>

          {/* Center nav (desktop) */}
          <nav className="navbar-links" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="navbar-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="navbar-actions">
            <motion.button
              type="button"
              className="navbar-icon-btn"
              onClick={cycleTheme}
              aria-label="Toggle theme"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <ThemeIcon size={15} />
            </motion.button>

            <motion.a
              href="#contact"
              className="navbar-cta"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Let's Talk
            </motion.a>

            {/* Hamburger (mobile only) */}
            <motion.button
              type="button"
              className="navbar-icon-btn navbar-hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <Menu size={16} />
            </motion.button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              className="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mobile-drawer-head">
                <span className="navbar-brand">NG.</span>
                <button
                  type="button"
                  className="navbar-icon-btn"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="mobile-drawer-nav">
                {MOBILE_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="mobile-drawer-link"
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mobile-drawer-foot">
                <a
                  href="#contact"
                  className="btn-primary w-full text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Let's Talk
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
