const publications = [
  "Christianity Today",
  "The Gospel Coalition",
  "Relevant Magazine",
  "Church Leaders",
  "Desiring God",
];

const stats = [
  { emoji: "🌍", value: "84 countries", label: "believers reached" },
  { emoji: "🙏", value: "2.3M prayers", label: "submitted worldwide" },
  { emoji: "⭐", value: "4.9/5 rating", label: "from our community" },
];

export default function TrustBar() {
  return (
    <div
      style={{
        background: "#0C0C1A",
        borderTop: "1px solid rgba(30,30,50,0.8)",
        borderBottom: "1px solid rgba(30,30,50,0.8)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-3">
          {/* Left: trusted by */}
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="text-xs font-semibold whitespace-nowrap"
              style={{ color: "#6A6A88" }}
            >
              Trusted by believers from:
            </span>
            {publications.map((pub) => (
              <span
                key={pub}
                className="text-[11px] font-bold px-2.5 py-0.5 rounded-md"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  color: "#8A8AA8",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {pub}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div
            className="hidden sm:block w-px self-stretch"
            style={{ background: "#1E1E32" }}
          />

          {/* Right: live stats */}
          <div className="flex items-center gap-5 flex-shrink-0">
            {stats.map((stat, i) => (
              <div key={stat.value} className="flex items-center gap-1.5">
                <span className="text-sm">{stat.emoji}</span>
                <span className="text-xs font-black" style={{ color: "#D4AF37" }}>
                  {stat.value}
                </span>
                {i < stats.length - 1 && (
                  <span
                    className="ml-3 w-px h-4 hidden sm:block"
                    style={{ background: "#1E1E32" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
