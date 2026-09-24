"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, GitFork } from "lucide-react";
import { buildingProjects } from "@/data/projects";

export default function CurrentlyBuilding() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="section"
      style={{ background: "var(--bg-section)" }}
    >
      <div className="container-main">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-label mb-3">Currently Building</p>
          <h2 className="text-heading-xl" style={{ maxWidth: 540 }}>
            Not everything is finished yet.
          </h2>
          <p className="text-body-lg mt-4" style={{ maxWidth: 480 }}>
            These are the products I&apos;m actively working on.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {buildingProjects.map((project, i) => (
            <motion.div
              key={project.id}
              className="card flex flex-col gap-5"
              style={{ padding: "28px 28px 32px" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
            >
              {/* Status badge */}
              <div>
                <span
                  className={`badge ${
                    project.status === "ONGOING" ? "badge-ongoing" : "badge-dev"
                  }`}
                >
                  {project.statusLabel}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-heading-md mb-3">{project.title}</h3>
                <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  marginBottom: 20,
                }}
              >
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="tag tag-accent" style={{ fontSize: "0.72rem" }}>
                      {t}
                    </span>
                  ))}
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag" style={{ fontSize: "0.72rem" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2 border-t" style={{ borderColor: "var(--border)" }}>
                {project.id === "kisansetu" ? (
                  <span
                    className="inline-flex items-center gap-2 text-sm"
                    style={{ color: "var(--text-tertiary)", fontStyle: "italic" }}
                  >
                    Team project — details shared closer to SIH 2026
                  </span>
                ) : project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium group/gh"
                    style={{ color: "var(--accent)" }}
                  >
                    <GitFork size={14} />
                    View Project
                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5"
                    />
                  </a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
