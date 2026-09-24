"use client";

interface BrowserMockupProps {
  url?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function BrowserMockup({
  url = "premium-women-salon.vercel.app",
  children,
  className = "",
}: BrowserMockupProps) {
  return (
    <div className={`browser-frame ${className}`}>
      {/* Browser chrome */}
      <div className="browser-bar">
        {/* Traffic lights */}
        <span className="browser-dot" style={{ background: "#FF5F57" }} />
        <span className="browser-dot" style={{ background: "#FFBD2E" }} />
        <span className="browser-dot" style={{ background: "#28CA42" }} />
        {/* Address bar */}
        <div className="browser-address">{url}</div>
      </div>
      {/* Viewport */}
      <div className="overflow-hidden" style={{ aspectRatio: "16/10", background: "#f5f5f5", position: "relative" }}>
        {children ? (
          children
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #f8f6f1 0%, #ede9e0 100%)" }}
          >
            <div className="text-center" style={{ color: "var(--text-tertiary)" }}>
              <div
                className="mx-auto mb-3 rounded-xl"
                style={{ width: 48, height: 48, background: "var(--border)" }}
              />
              <p style={{ fontSize: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Screenshot coming soon
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
