"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, ExternalLink, GitFork } from "lucide-react";
import Image from "next/image";
import BrowserMockup from "./BrowserMockup";
import MobileMockup from "./MobileMockup";
import { projects } from "@/data/projects";

const statusClass: Record<string, string> = {
  LIVE: "badge-live",
  BUILT: "badge-built",
  "UNDER DEVELOPMENT": "badge-dev",
  ONGOING: "badge-ongoing",
};

export default function SelectedWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const salonMain = projects.find((p) => p.id === "premium-women-salon")!;
  const salonAlt = projects.find((p) => p.id === "salon-design-1")!;
  const classmate = projects.find((p) => p.id === "classmate")!;

  return (
    <section id="work" ref={ref} className="section" style={{ background: "var(--bg)" }}>
      <div className="container-main">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-label mb-3">Selected Work</p>
          <h2 className="text-heading-xl" style={{ maxWidth: 480 }}>
            A few things I&apos;ve built, designed and shipped.
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* ── Featured: Premium Women Salon (large) ── */}
          <motion.div
            className="lg:col-span-7 card overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {/* Browser mockup preview */}
            <div style={{ padding: "20px 20px 0" }}>
              <BrowserMockup url={salonMain.liveUrl?.replace("https://", "") ?? ""}>
                <a
                  href={salonMain.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full relative"
                  aria-label={`View ${salonMain.title} live`}
                >
                  <Image
                    src={salonMain.image ?? "/premium-women-salon.vercel.png"}
                    alt={`${salonMain.title} — live salon website`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </a>
              </BrowserMockup>
            </div>

            {/* Card body — generous padding */}
            <div style={{ padding: "24px 28px 28px" }}>
              <div style={{ marginBottom: 12 }}>
                <span className={`badge ${statusClass[salonMain.status]}`}>
                  {salonMain.statusLabel}
                </span>
              </div>
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  letterSpacing: "-0.02em",
                  marginBottom: 10,
                  color: "var(--text-primary)",
                }}
              >
                {salonMain.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  marginBottom: 18,
                }}
              >
                {salonMain.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                {salonMain.tech.map((t) => (
                  <span key={t} className="tag" style={{ fontSize: "0.75rem" }}>
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={salonMain.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group/btn"
                style={{ padding: "10px 20px", fontSize: "0.875rem" }}
              >
                View Live
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </a>
            </div>
          </motion.div>

          {/* ── Right column: Salon Design 1 + ClassMate ── */}
          <div className="lg:col-span-5 flex flex-col gap-5">

            {/* Salon Design 1 */}
            <motion.div
              className="card overflow-hidden group cursor-pointer flex-1"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div style={{ padding: "16px 16px 0" }}>
                <BrowserMockup url={salonAlt.liveUrl?.replace("https://", "") ?? ""}>
                  <a
                    href={salonAlt.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full relative"
                    aria-label={`View ${salonAlt.title} live`}
                  >
                    <Image
                      src={salonAlt.image ?? "/salon-design1-flame.vercel.png"}
                      alt={`${salonAlt.title} — salon website concept`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </a>
                </BrowserMockup>
              </div>

              {/* Card body */}
              <div style={{ padding: "20px 24px 24px" }}>
                <div style={{ marginBottom: 10 }}>
                  <span className={`badge ${statusClass[salonAlt.status]}`}>
                    {salonAlt.statusLabel}
                  </span>
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
                    letterSpacing: "-0.015em",
                    marginBottom: 8,
                    color: "var(--text-primary)",
                  }}
                >
                  {salonAlt.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    marginBottom: 16,
                  }}
                >
                  {salonAlt.description}
                </p>
                <a
                  href={salonAlt.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium group/link"
                  style={{ color: "var(--accent)" }}
                >
                  View Live
                  <ExternalLink
                    size={13}
                    className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.div>

            {/* ClassMate — dark card */}
            <motion.div
              className="card-dark overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 20, padding: "28px" }}>
                {/* Mini mobile mockup */}
                <div className="shrink-0 hidden sm:block">
                  <MobileMockup className="scale-75 origin-top-left" />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ marginBottom: 14 }}>
                    <span
                      className="badge"
                      style={{
                        background: "#1f1f1f",
                        color: "#9CA3AF",
                        borderColor: "#2a2a2a",
                        fontSize: "0.65rem",
                      }}
                    >
                      {classmate.statusLabel}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "#fff",
                      marginBottom: 10,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {classmate.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#9CA3AF",
                      lineHeight: 1.65,
                      marginBottom: 18,
                    }}
                  >
                    {classmate.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                    {classmate.tech.map((t) => (
                      <span
                        key={t}
                        className="tag"
                        style={{
                          background: "#1a1a1a",
                          color: "#6B7280",
                          borderColor: "#2a2a2a",
                          fontSize: "0.72rem",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={classmate.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium group/gh"
                    style={{ color: "#60A5FA" }}
                  >
                    <GitFork size={14} />
                    View on GitHub
                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
