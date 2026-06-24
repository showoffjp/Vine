"use client";

const TESTIMONIALS = [
  {
    name: "Amara Diallo",
    location: "Dakar, Senegal",
    role: "Worship Leader",
    initials: "AD",
    text: "The Vine is the first platform that actually gets the breadth of Christian life. I found a community for worship, resources for mental health, and daily devotionals — all in one place. It transformed my mornings.",
  },
  {
    name: "Joshua Hernandez",
    location: "Houston, TX",
    role: "Youth Pastor",
    initials: "JH",
    text: "I have tried every Christian app available. None of them come close. The discussions are real, raw, and respectful. This is what the Church needs on the internet.",
  },
  {
    name: "Grace Kim",
    location: "Seoul, South Korea",
    role: "Campus Ministry Leader",
    initials: "GK",
    text: "Being a Christian in a non-Christian culture can feel incredibly isolating. The Vine connected me with believers across the globe who understand my exact situation. I feel less alone in my faith.",
  },
  {
    name: "Samuel Obi",
    location: "Lagos, Nigeria",
    role: "Bible Teacher",
    initials: "SO",
    text: "The Bible tools and resource library are phenomenal. I have found commentaries, study guides, and original language tools that I previously had to pay for across six different apps.",
  },
  {
    name: "Miriam Flores",
    location: "Medellín, Colombia",
    role: "Christian Therapist",
    initials: "MF",
    text: "As a therapist, the way The Vine handles mental health content is remarkable — faithful and clinically sound at the same time. I recommend it to clients and colleagues regularly.",
  },
  {
    name: "Daniel Achterberg",
    location: "Amsterdam, Netherlands",
    role: "Seminary Student",
    initials: "DA",
    text: "I came for the theology discussions and stayed for everything else. The apologetics community alone is worth the price of admission — and it is entirely free. Simply remarkable.",
  },
];

export default function Testimonials() {
  return (
    <section
      style={{
        background: "#050e07",
        padding: "100px 4vw",
        borderTop: "0.5px solid rgba(201,162,39,0.18)",
        position: "relative",
        overflow: "hidden",
      }}
      id="testimonials"
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 400,
          background: "radial-gradient(ellipse, rgba(58,125,86,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: "4rem", textAlign: "center" }}>
          <div className="vine-eyebrow" style={{ marginBottom: "0.9rem" }}>
            Community Voices
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              fontWeight: 300,
              color: "#f2e6c8",
              lineHeight: 1.15,
            }}
          >
            One body. One Lord.
            <br />
            <em style={{ fontStyle: "italic", color: "#e8c162" }}>Every nation, tongue, and tribe.</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-jost, system-ui, sans-serif)",
              fontSize: "0.78rem",
              color: "#7a7158",
              marginTop: "0.9rem",
              fontStyle: "italic",
            }}
          >
            Illustrative voices of the community The Vine is built to serve &mdash; followers of Christ from every corner of His earth.
          </p>
        </div>

        {/* Grid */}
        <div
          className="three-col-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
            background: "rgba(201,162,39,0.04)",
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              style={{
                background: "#050e07",
                padding: "2rem",
                position: "relative",
              }}
            >
              {/* Top rule */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "2rem",
                  right: "2rem",
                  height: "0.5px",
                  background: "rgba(201,162,39,0.08)",
                }}
              />

              {/* Decorative quote */}
              <div
                style={{
                  fontFamily: "var(--font-cormorant, Georgia, serif)",
                  fontStyle: "italic",
                  fontSize: "4rem",
                  lineHeight: 1,
                  color: "rgba(201,162,39,0.1)",
                  marginBottom: "-0.5rem",
                  userSelect: "none",
                }}
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: "0.9rem" }}>
                {Array.from({ length: 5 }).map((_, si) => (
                  <svg
                    key={si}
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="#c9a227"
                  >
                    <polygon points="5,1 6.2,3.8 9.5,4.1 7.1,6.4 7.9,9.5 5,7.8 2.1,9.5 2.9,6.4 0.5,4.1 3.8,3.8" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p
                style={{
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  fontSize: "0.85rem",
                  color: "#9a8f72",
                  lineHeight: 1.7,
                  fontWeight: 300,
                  marginBottom: "1.5rem",
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(201,162,39,0.12)",
                    border: "0.5px solid rgba(201,162,39,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    color: "#c9a227",
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#f2e6c8",
                      marginBottom: "0.1rem",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                      fontSize: "0.7rem",
                      color: "#9a8f72",
                    }}
                  >
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
