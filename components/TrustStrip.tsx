"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { label: "BUILDING FROM", value: "RAJKOT, INDIA" },
  { label: "STUDYING", value: "COMPUTER SCIENCE" },
  { label: "AT", value: "MARWADI UNIVERSITY" },
  { label: "CURRENT FOCUS", value: "WEB • SOFTWARE • AI" },
];

export default function TrustStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="section-sm" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container-main">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex flex-col gap-1.5"
              style={{
                paddingRight: i < 3 ? 32 : 0,
                borderRight: i < 3 ? "1px solid var(--border)" : "none",
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
            >
              <p className="text-label">{item.label}</p>
              <p
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.01em",
                }}
              >
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently building strip */}
        <motion.div
          className="flex flex-wrap items-center gap-3 mt-8 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-label">Currently building</p>
          <div className="flex flex-wrap gap-2">
            {["FeeLedger", "KisanSetu"].map((project) => (
              <span
                key={project}
                className="tag tag-accent"
                style={{ fontSize: "0.78rem" }}
              >
                {project}
              </span>
            ))}
          </div>
          <span style={{ fontSize: "0.8rem", color: "var(--text-tertiary)" }}>
            — actively in development
          </span>
        </motion.div>
      </div>
    </section>
  );
}
