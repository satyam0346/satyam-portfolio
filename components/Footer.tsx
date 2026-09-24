"use client";

import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--text-primary)",
        borderTop: "1px solid #1a1a1a",
        color: "#555",
        padding: "40px 0",
      }}
    >
      <div className="container-main">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Left: Brand */}
          <div>
            <p
              className="font-mono font-semibold mb-1"
              style={{ fontSize: "0.8rem", letterSpacing: "0.12em", color: "#777" }}
            >
              SATYAM.K
            </p>
            <p style={{ fontSize: "0.8rem", color: "#444" }}>
              Building software, learning in public.
            </p>
          </div>

          {/* Center: Social */}
          <div className="flex gap-6">
            {[
              { href: "https://github.com/satyam0346", label: "GitHub" },
              { href: "https://linkedin.com/in/satyamkumar", label: "LinkedIn" },
              { href: "https://instagram.com/satyamkumar", label: "Instagram" },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center gap-1 text-xs transition-colors"
                style={{ color: "#444" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#888")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
              >
                {label}
                <ExternalLink size={10} className="opacity-50" />
              </a>
            ))}
          </div>

          {/* Right: Copyright + credit */}
          <div className="text-right">
            <p style={{ fontSize: "0.78rem", color: "#333" }}>
              © 2026 Satyam Kumar
            </p>
            <p style={{ fontSize: "0.75rem", color: "#2a2a2a", marginTop: 2, fontStyle: "italic" }}>
              Built with curiosity + caffeine.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
