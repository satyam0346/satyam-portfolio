"use client";

import { useRef, useCallback } from "react";
import { motion, useMotionValue, useTransform, useSpring, type Variants } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import BrowserMockup from "./BrowserMockup";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);
  const springRotX = useSpring(rotateX, { stiffness: 80, damping: 20 });
  const springRotY = useSpring(rotateY, { stiffness: 80, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="section"
      style={{ paddingTop: "140px", background: "var(--bg)" }}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* ── Left: Text ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Availability badge */}
            <motion.div variants={itemVariants}>
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border"
                style={{
                  background: "#ECFDF5",
                  color: "#065F46",
                  borderColor: "#A7F3D0",
                  letterSpacing: "0.02em",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#10B981", animation: "pulse 2s infinite" }}
                />
                Available for freelance projects
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={itemVariants} className="text-display">
              I build modern websites{" "}
              <span style={{ color: "var(--text-secondary)" }}>
                for businesses and ideas.
              </span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p variants={itemVariants} className="text-body-lg" style={{ maxWidth: 480 }}>
              I&apos;m Satyam Kumar — a Computer Science Engineering student and
              software developer building responsive websites, web applications
              and practical digital products with modern technologies and
              AI-assisted workflows.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => {
                  const el = document.querySelector("#work");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary group"
              >
                View my work
                <ArrowDownRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </button>
              <a
                href="mailto:satyam0346@gmail.com"
                className="btn-secondary group"
              >
                Let&apos;s work together
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>

            {/* Small credibility strip */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-4"
            >
              {[
                { label: "CSE Student", sub: "Marwadi University" },
                { label: "Based in", sub: "India 🇮🇳" },
              ].map((item) => (
                <div key={item.label}>
                  <p style={{ fontSize: "0.7rem", color: "var(--text-tertiary)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 2 }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--text-primary)" }}>
                    {item.sub}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Browser Mockup ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{
              perspective: 1000,
              perspectiveOrigin: "center center",
            }}
            className="relative"
          >
            <motion.div
              style={{
                rotateX: springRotX,
                rotateY: springRotY,
                transformStyle: "preserve-3d",
              }}
              className="relative"
            >
              <BrowserMockup url="premium-women-salon.vercel.app">
                <a
                  href="https://premium-women-salon.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                  aria-label="View Premium Women Salon live demo"
                >
                  <Image
                    src="/premium-women-salon.vercel.png"
                    alt="Premium Women Salon website — responsive beauty salon web design"
                    fill
                    className="object-cover object-top hover:scale-[1.01] transition-transform duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </a>
              </BrowserMockup>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl shadow-lg"
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4, ease: "easeOut" }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#10B981" }}
                />
                Live on Vercel
              </motion.div>
            </motion.div>

            {/* Background glow — very subtle */}
            <div
              className="absolute inset-0 -z-10 rounded-3xl blur-3xl opacity-20"
              style={{ background: "linear-gradient(135deg, #2563EB22, #F59E0B11)" }}
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
