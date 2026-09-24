"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div
          className="transition-all duration-300"
          style={{
            borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
            backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
            backgroundColor: scrolled ? "rgba(247,246,242,0.85)" : "transparent",
          }}
        >
          <div className="container-main">
            <nav className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link
                href="#"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="font-mono text-sm font-semibold tracking-widest text-primary hover:text-accent transition-colors duration-150"
                style={{ color: "var(--text-primary)", letterSpacing: "0.12em" }}
                aria-label="Satyam Kumar — Back to top"
              >
                SATYAM.K
              </Link>

              {/* Desktop links */}
              <ul className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm font-medium transition-colors duration-150 cursor-pointer"
                      style={{ color: "var(--text-secondary)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--text-primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-secondary)")
                      }
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Desktop CTA */}
              <div className="hidden md:flex items-center gap-3">
                <a
                  href="mailto:satyam0346@gmail.com"
                  className="btn-accent text-sm"
                  style={{ padding: "8px 16px", fontSize: "0.825rem" }}
                >
                  Let&apos;s Talk
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Mobile hamburger */}
              <button
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
                style={{ color: "var(--text-primary)" }}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-[80vw] max-w-xs flex flex-col"
              style={{ background: "var(--bg)", borderLeft: "1px solid var(--border)" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
            >
              <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: "var(--border)" }}>
                <span className="font-mono text-sm font-semibold tracking-widest">SATYAM.K</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center w-8 h-8 rounded-lg"
                  style={{ color: "var(--text-secondary)" }}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex flex-col gap-1 p-4 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium transition-colors cursor-pointer w-full"
                    style={{ color: "var(--text-primary)", fontSize: "1rem" }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "var(--bg-section)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <div className="p-6 border-t" style={{ borderColor: "var(--border)" }}>
                <a
                  href="mailto:satyam0346@gmail.com"
                  className="btn-accent w-full justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Let&apos;s Talk
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
