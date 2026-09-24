"use client";

interface MobileMockupProps {
  children?: React.ReactNode;
  className?: string;
}

export default function MobileMockup({ children, className = "" }: MobileMockupProps) {
  return (
    <div className={`mobile-frame ${className}`} style={{ maxWidth: 280, width: "100%" }}>
      <div className="mobile-screen" style={{ aspectRatio: "9/19.5" }}>
        {/* Notch */}
        <div className="mobile-notch" />
        {children ? (
          <div className="absolute inset-0">{children}</div>
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: "#1a1a1a", paddingTop: 30 }}
          >
            <div className="text-center px-6">
              <div
                className="mx-auto mb-3 rounded-2xl"
                style={{ width: 52, height: 52, background: "#2a2a2a" }}
              />
              <p style={{ fontSize: "0.7rem", color: "#555", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Screenshot coming soon
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
