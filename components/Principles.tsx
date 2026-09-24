"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Understand first",
    description: "Start with the problem, the audience and the objective. Build the right thing before building the thing right.",
  },
  {
    number: "02",
    title: "Design for people",
    description: "Keep interfaces clear, responsive and easy to use. Good design is invisible — it just works.",
  },
  {
    number: "03",
    title: "Build practically",
    description: "Choose technology based on what the product actually needs, not what sounds impressive.",
  },
  {
    number: "04",
    title: "AI-assisted, human-reviewed",
    description: "AI helps accelerate development. Every important part still needs to be understood, tested and reviewed before shipping.",
  },
];

export default function Principles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section" style={{ background: "var(--bg-section)" }}>
      <div className="container-main">
        {/* Header */}
        <motion.div
          className="section-header grid grid-cols-1 md:grid-cols-2 gap-8 items-end"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <p className="text-label mb-3">Principles</p>
            <h2 className="text-heading-xl">Built with intention.</h2>
          </div>
          <p className="text-body-lg">
            How I approach every project — from a first conversation to a shipped product.
          </p>
        </motion.div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              className="flex flex-col gap-5"
              style={{ background: "var(--card)", padding: "32px 28px 32px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <span
                className="font-mono"
                style={{ fontSize: "0.72rem", color: "var(--accent)", fontWeight: 600 }}
              >
                {p.number}
              </span>
              <h3 style={{ fontWeight: 600, fontSize: "1rem", lineHeight: 1.3, color: "var(--text-primary)" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
