"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stack = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Next.js"],
  },
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Firebase"],
  },
  {
    category: "Database",
    items: ["SQL", "PostgreSQL", "SQLite"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Riverpod"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Vercel", "VS Code"],
  },
  {
    category: "Workflow",
    items: ["AI-assisted development", "Component-driven design", "Iterative testing"],
  },
];

export default function TechStack() {
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
            <p className="text-label mb-3">Stack</p>
            <h2 className="text-heading-xl">Tools I work with</h2>
          </div>
          <p className="text-body-lg">
            No percentages. No skill bars. Just the tools I use to build things.
          </p>
        </motion.div>

        {/* Stack grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stack.map((group, i) => (
            <motion.div
              key={group.category}
              className="card flex flex-col gap-4"
              style={{ padding: "28px 24px 28px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <p className="text-label">{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="tag"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI note */}
        <motion.p
          className="mt-10 text-center"
          style={{ fontSize: "0.85rem", color: "var(--text-tertiary)", fontStyle: "italic" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          AI helps me move faster. I still review, test and understand everything I ship.
        </motion.p>
      </div>
    </section>
  );
}
