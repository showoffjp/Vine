export default function VerseBanner() {
  return (
    <div
      style={{
        background: "#0a1a0e",
        borderTop: "0.5px solid rgba(201,162,39,0.18)",
        borderBottom: "0.5px solid rgba(201,162,39,0.18)",
        padding: "80px 4vw",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Giant decorative quote mark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -60,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
          fontSize: "28rem",
          fontWeight: 700,
          color: "#0f2318",
          pointerEvents: "none",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        &ldquo;
      </div>

      <blockquote
        style={{
          fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
          fontStyle: "italic",
          fontSize: "clamp(1.5rem, 3.5vw, 2.6rem)",
          fontWeight: 300,
          color: "#f2e6c8",
          maxWidth: 780,
          margin: "0 auto 1.5rem",
          lineHeight: 1.45,
          position: "relative",
          zIndex: 1,
        }}
      >
        &ldquo;They devoted themselves to the apostles&rsquo; teaching and to fellowship, to the breaking of bread and to prayer.&rdquo;
      </blockquote>
      <cite
        style={{
          fontFamily: "var(--font-jost, system-ui, sans-serif)",
          fontStyle: "normal",
          fontSize: "0.8rem",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#c9a227",
          position: "relative",
          zIndex: 1,
        }}
      >
        Acts 2:42
      </cite>
    </div>
  );
}
