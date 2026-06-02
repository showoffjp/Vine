const STATS = [
  { value: "2.4B+", label: "Christians Worldwide" },
  { value: "341+", label: "Topics & Resources" },
  { value: "66", label: "Books of the Bible" },
  { value: "One", label: "Platform for All of It" },
];

export default function TrustBar() {
  return (
    <div
      style={{
        background: "#0a1a0e",
        borderTop: "0.5px solid rgba(201,162,39,0.18)",
        borderBottom: "0.5px solid rgba(201,162,39,0.18)",
        padding: "2rem 4vw",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            style={{
              padding: "0 2rem",
              borderRight:
                i < STATS.length - 1
                  ? "0.5px solid rgba(201,162,39,0.18)"
                  : "none",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily:
                  "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                fontSize: "2.4rem",
                fontWeight: 600,
                color: "#e8c162",
                lineHeight: 1,
                marginBottom: "0.3rem",
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontSize: "0.73rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#9a8f72",
                fontFamily: "var(--font-jost, system-ui, sans-serif)",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
