"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { services } from "@/data/services";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="section" style={{ background: "var(--bg)" }}>
      <div className="container-main">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-label mb-3">Services</p>
          <h2 className="text-heading-xl" style={{ maxWidth: 560 }}>
            What I can build
          </h2>
          <p className="text-body-lg mt-4" style={{ maxWidth: 480 }}>
            Practical digital solutions for businesses, creators and real-world problems.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="card flex flex-col gap-5"
              style={{ padding: "32px 28px 32px" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            >
              {/* Number */}
              <span
                className="font-mono"
                style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 600 }}
              >
                {service.number}
              </span>

              {/* Title */}
              <h3 className="text-heading-md">{service.title}</h3>

              {/* Divider */}
              <div className="divider" />

              {/* Description */}
              <p className="text-body" style={{ fontSize: "0.9rem", flex: 1 }}>
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="tag" style={{ fontSize: "0.72rem" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
