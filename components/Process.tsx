"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDown } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the business, users and objective. Ask the right questions before writing a single line of code.",
  },
  {
    number: "02",
    title: "Design",
    description: "Create the structure and visual experience. Clear layouts, sensible flows, intentional hierarchy.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop the responsive and functional product. Write maintainable code and iterate based on feedback.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Test, deploy and hand over the working solution. With documentation and a clean handoff.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section" style={{ background: "var(--bg)" }}>
      <div className="container-main">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-label mb-3">Process</p>
          <h2 className="text-heading-xl">From idea → launch</h2>
        </motion.div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden md:grid md:grid-cols-4 gap-0 relative">
          {/* Connecting line */}
          <motion.div
            className="absolute top-[28px] left-0 right-0 h-px"
            style={{ background: "var(--border)", zIndex: 0 }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative flex flex-col gap-5 pr-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: "easeOut" }}
            >
              {/* Step indicator */}
              <div
                className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full font-mono font-semibold"
                style={{
                  background: "var(--bg)",
                  border: "2px solid var(--border)",
                  fontSize: "0.75rem",
                  color: "var(--accent)",
                  letterSpacing: "0.06em",
                  flexShrink: 0,
                }}
              >
                {step.number}
              </div>

              <div>
                <h3
                  style={{ fontWeight: 600, fontSize: "1rem", color: "var(--text-primary)", marginBottom: 8, letterSpacing: "-0.015em" }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden flex flex-col gap-0 relative">
          <div
            className="absolute left-[27px] top-0 bottom-0 w-px"
            style={{ background: "var(--border)" }}
          />
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex gap-6 pb-10 relative"
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              {/* Circle */}
              <div
                className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full font-mono font-semibold shrink-0"
                style={{
                  background: "var(--bg)",
                  border: "2px solid var(--border)",
                  fontSize: "0.7rem",
                  color: "var(--accent)",
                  letterSpacing: "0.06em",
                }}
              >
                {step.number}
              </div>

              <div className="pt-3.5">
                <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: 6, color: "var(--text-primary)" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                  {step.description}
                </p>

                {/* Arrow between steps */}
                {i < steps.length - 1 && (
                  <div className="mt-4" style={{ color: "var(--text-tertiary)" }}>
                    <ArrowDown size={14} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
