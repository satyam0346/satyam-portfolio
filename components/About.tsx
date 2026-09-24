"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const learning = ["DSA in Java", "Advanced Java", "Web Technology", "Databases"];

const journey = [
  {
    phase: "LEARNING",
    description: "Programming, Computer Science fundamentals",
  },
  {
    phase: "BUILDING",
    description: "Websites, applications, mobile apps",
  },
  {
    phase: "EXPLORING",
    description: "Freelance development, AI-assisted workflows",
  },
  {
    phase: "NOW",
    description: "Learning → Building → Shipping",
    highlight: true,
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="section" style={{ background: "var(--bg)" }}>
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

          {/* Left: Large heading + journey */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-12"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <p className="text-label mb-4">About</p>
              <h2 className="text-heading-xl">
                A developer who likes building things.
              </h2>
            </div>

            {/* Journey timeline */}
            <div className="flex flex-col gap-0 relative">
              <div
                className="absolute left-[11px] top-0 bottom-0 w-px"
                style={{ background: "var(--border)" }}
              />
              {journey.map((item, i) => (
                <motion.div
                  key={item.phase}
                  className="flex gap-5 pb-6 relative"
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <div
                    className="relative z-10 w-5 h-5 rounded-full border-2 shrink-0 mt-0.5"
                    style={{
                      background: item.highlight ? "var(--accent)" : "var(--bg)",
                      borderColor: item.highlight ? "var(--accent)" : "var(--border)",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: item.highlight ? "var(--accent)" : "var(--text-tertiary)",
                        marginBottom: 2,
                      }}
                    >
                      {item.phase}
                    </p>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio text + details */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-8"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-5">
              <p className="text-body-lg">
                I&apos;m Satyam Kumar, a Computer Science Engineering student at Marwadi
                University, Rajkot.
              </p>
              <p className="text-body-lg">
                I enjoy turning ideas into working websites, applications and digital
                products. My current focus is software development, web technologies,
                databases and DSA in Java.
              </p>
              <p className="text-body-lg">
                Alongside college, I&apos;m exploring freelance development and
                AI-assisted workflows — with the long-term goal of building products of
                my own.
              </p>
            </div>

            {/* Details strip */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              style={{
                padding: "28px 28px",
                borderRadius: "var(--radius-xl)",
                background: "var(--bg-section)",
                border: "1px solid var(--border)",
              }}
            >
              <div>
                <p className="text-label mb-2">Based in</p>
                <p style={{ fontWeight: 500, color: "var(--text-primary)" }}>India 🇮🇳</p>
              </div>
              <div>
                <p className="text-label mb-2">University</p>
                <p style={{ fontWeight: 500, color: "var(--text-primary)" }}>Marwadi University</p>
              </div>
              <div>
                <p className="text-label mb-2">Degree</p>
                <p style={{ fontWeight: 500, color: "var(--text-primary)" }}>B.Tech — Computer Science</p>
              </div>
              <div>
                <p className="text-label mb-2">Status</p>
                <p style={{ fontWeight: 500, color: "var(--text-primary)" }}>
                  <span style={{ color: "var(--accent)" }}>●</span> Available for freelance
                </p>
              </div>
            </div>

            {/* Currently learning */}
            <div>
              <p className="text-label mb-3">Currently learning</p>
              <div className="flex flex-wrap gap-2">
                {learning.map((item) => (
                  <span key={item} className="tag" style={{ fontSize: "0.82rem" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
