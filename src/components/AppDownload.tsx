"use client";

import { Bell, BookOpen, Users, Zap, Download, Smartphone } from "lucide-react";

const FEATURES = [
  { icon: Bell, text: "Daily verse & push devotionals" },
  { icon: BookOpen, text: "Offline Bible & reading plans" },
  { icon: Users, text: "Community on the go" },
  { icon: Zap, text: "Quick prayer & praise reports" },
];

const SCREENS = [
  { label: "Home Feed" },
  { label: "Daily Bread" },
  { label: "Bible" },
];

export default function AppDownload() {
  return (
    <section
      style={{
        background: "#050e07",
        padding: "100px 4vw",
        borderTop: "0.5px solid rgba(201,162,39,0.18)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "-5%",
          transform: "translateY(-50%)",
          width: 500,
          height: 500,
          background: "radial-gradient(ellipse, rgba(58,125,86,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          {/* Left: Content */}
          <div>
            <div className="vine-eyebrow" style={{ marginBottom: "0.9rem" }}>
              Mobile App
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                fontWeight: 300,
                color: "#f2e6c8",
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              The Vine
              <br />
              <em style={{ fontStyle: "italic", color: "#e8c162" }}>in your pocket.</em>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
                fontSize: "0.95rem",
                color: "#9a8f72",
                fontWeight: 300,
                lineHeight: 1.65,
                marginBottom: "2rem",
              }}
            >
              The full power of The Vine — discussions, Bible, devotionals,
              prayer, community — everywhere you go. Available for iOS and Android.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: "2rem" }}>
              {FEATURES.map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 2,
                      background: "rgba(201,162,39,0.08)",
                      border: "0.5px solid rgba(201,162,39,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={14} style={{ color: "#c9a227" }} />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.85rem",
                      color: "#c9b98a",
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Store buttons */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: "1.5rem" }}>
              {[
                { store: "App Store", sub: "Download on the", icon: "🍎" },
                { store: "Google Play", sub: "Get it on", icon: "▶" },
              ].map((s) => (
                <button
                  key={s.store}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "0.7rem 1.4rem",
                    borderRadius: 2,
                    background: "transparent",
                    border: "0.5px solid rgba(201,162,39,0.22)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,162,39,0.5)";
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,162,39,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,162,39,0.22)";
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  }}
                >
                  <span style={{ fontSize: "1.4rem" }}>{s.icon}</span>
                  <div style={{ textAlign: "left" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-jost, system-ui, sans-serif)",
                        fontSize: "0.62rem",
                        color: "#9a8f72",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {s.sub}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-jost, system-ui, sans-serif)",
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        color: "#f2e6c8",
                      }}
                    >
                      {s.store}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Rating */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ display: "flex" }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 10 10" fill="#c9a227">
                    <polygon points="5,1 6.2,3.8 9.5,4.1 7.1,6.4 7.9,9.5 5,7.8 2.1,9.5 2.9,6.4 0.5,4.1 3.8,3.8" />
                  </svg>
                ))}
              </div>
              <span
                style={{
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: "#f2e6c8",
                }}
              >
                4.9
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.78rem",
                  color: "#9a8f72",
                }}
              >
                · 12,000+ reviews
              </span>
            </div>
          </div>

          {/* Right: Phone mockups */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "1rem", height: 320 }}>
            {SCREENS.map((screen, i) => (
              <div
                key={i}
                style={{
                  background: "linear-gradient(160deg, #0f2318 0%, #050e07 100%)",
                  border: "0.5px solid rgba(201,162,39,0.22)",
                  borderRadius: 18,
                  width: i === 1 ? 130 : 100,
                  height: i === 1 ? 270 : 210,
                  marginBottom: i === 1 ? 0 : 20,
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: i === 1 ? "0 0 40px rgba(201,162,39,0.08)" : "none",
                }}
              >
                {/* Fake screen content */}
                <div style={{ position: "absolute", top: 12, left: 10, right: 10 }}>
                  <div style={{ height: 5, borderRadius: 999, background: "rgba(201,162,39,0.25)", width: "60%", marginBottom: 5 }} />
                  <div style={{ height: 3, borderRadius: 999, background: "rgba(201,162,39,0.1)", width: "80%" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, padding: "0 8px", width: "100%", marginTop: 16 }}>
                  {[1, 2, 3].map((j) => (
                    <div
                      key={j}
                      style={{
                        height: 18,
                        borderRadius: 3,
                        background: "rgba(201,162,39,0.07)",
                        width: j === 2 ? "70%" : "90%",
                      }}
                    />
                  ))}
                </div>
                <Smartphone size={i === 1 ? 24 : 18} style={{ color: "rgba(201,162,39,0.3)", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, textAlign: "center", padding: "6px 0" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.6rem",
                      fontWeight: 500,
                      color: "rgba(201,162,39,0.6)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {screen.label}
                  </span>
                </div>
              </div>
            ))}

            {/* Download badge */}
            <div
              style={{
                position: "absolute",
                top: -4,
                right: -4,
                padding: "6px 12px",
                borderRadius: 2,
                background: "rgba(201,162,39,0.1)",
                border: "0.5px solid rgba(201,162,39,0.3)",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Download size={12} style={{ color: "#c9a227" }} />
              <span
                style={{
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  color: "#c9a227",
                }}
              >
                50K+ downloads
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
