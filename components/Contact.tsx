"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail, ExternalLink } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="section"
      style={{ background: "var(--text-primary)", color: "#fff" }}
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">

          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p
              className="text-label mb-5"
              style={{ color: "#555" }}
            >
              Contact
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                color: "#fff",
                marginBottom: 20,
              }}
            >
              Have an idea worth building?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#999", lineHeight: 1.65, maxWidth: 440 }}>
              Let&apos;s turn it into something people can actually use.
            </p>
          </motion.div>

          {/* Right: CTAs + socials */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            {/* Primary CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:satyam0346@gmail.com"
                className="btn-accent group"
                style={{ fontSize: "0.9rem" }}
              >
                Start a project
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="mailto:satyam0346@gmail.com"
                className="btn-secondary group"
                style={{
                  background: "transparent",
                  borderColor: "#2a2a2a",
                  color: "#fff",
                  fontSize: "0.9rem",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#444";
                  (e.currentTarget as HTMLElement).style.background = "#1a1a1a";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#2a2a2a";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <Mail size={15} />
                Email me
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "#1f1f1f" }} />

            {/* Social links */}
            <div className="flex flex-col gap-3">
              <p className="text-label" style={{ color: "#444" }}>Find me elsewhere</p>
              <div className="flex gap-4">
                {[
                  {
                    label: "GitHub",
                    href: "https://github.com/satyam0346",
                    id: "github-link",
                  },
                  {
                    label: "LinkedIn",
                    href: "https://linkedin.com/in/satyamkumar",
                    id: "linkedin-link",
                  },
                  {
                    label: "Instagram",
                    href: "https://instagram.com/satyamkumar",
                    id: "instagram-link",
                  },
                ].map(({ label, href, id }) => (
                  <a
                    key={id}
                    id={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium transition-colors group/social"
                    style={{ color: "#666" }}
                    aria-label={label}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#fff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#666")
                    }
                  >
                    {label}
                    <ExternalLink size={11} className="opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
