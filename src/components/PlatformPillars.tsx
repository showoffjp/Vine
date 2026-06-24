"use client";

const FEATURES = [
  {
    num: "01",
    title: "Interest-Based Matching",
    desc: "Tell The Vine what you're passionate about — hiking, homeschooling, hip-hop, hermeneutics — and we surface communities, content, and connections that actually fit your life and faith.",
  },
  {
    num: "02",
    title: "AI-Powered Bible Study",
    desc: "Cross-reference any passage with commentaries, original Greek and Hebrew, systematic theology, and community notes. The Word Hub is the deepest free Bible tool on the internet.",
  },
  {
    num: "03",
    title: "Faith-Integrated Wellness",
    desc: "The Well bridges evidence-based psychology and Christian spirituality. Access guided exercises, connect with licensed Christian counselors, and find peer support communities.",
  },
  {
    num: "04",
    title: "Creator Ecosystem",
    desc: "Vine TV gives every teacher, pastor, musician, and content creator a platform without algorithm hostility. Post sermons, devotionals, worship sets, or podcasts and reach believers worldwide.",
  },
  {
    num: "05",
    title: "Denomination-Agnostic",
    desc: "From Catholic to Calvinist, Pentecostal to Presbyterian — every tradition has a home. The Vine is not a church; it's the porch where every church can gather. Respectful difference is a feature, not a bug.",
  },
  {
    num: "06",
    title: "Global by Design",
    desc: "Multilingual from launch. Connect with the persecuted church in China, the explosive revival in sub-Saharan Africa, and the contemplative communities in South America — the Body of Christ, undivided.",
  },
];

export default function PlatformPillars() {
  return (
    <section
      style={{
        background: "#050e07",
        padding: "100px 4vw",
        position: "relative",
      }}
      id="features"
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <div className="vine-eyebrow" style={{ marginBottom: "0.9rem" }}>
            Rooted in Christ. Built for His People.
          </div>
          <h2
            style={{
              fontFamily:
                "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              fontWeight: 300,
              color: "#f2e6c8",
              lineHeight: 1.15,
            }}
          >
            Christ is sufficient.
            <br />
            <em style={{ fontStyle: "italic", color: "#e8c162" }}>
              We exist to point you to Him.
            </em>
          </h2>
        </div>

        {/* Feature grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
            background: "rgba(242,230,200,0.05)",
          }}
        >
          {FEATURES.map((f) => (
            <div
              key={f.num}
              style={{
                background: "#050e07",
                padding: "2.5rem 2rem",
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
                  background: "rgba(242,230,200,0.07)",
                }}
              />
              <div
                style={{
                  fontFamily:
                    "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                  fontSize: "4rem",
                  fontWeight: 700,
                  color: "#1a3d26",
                  lineHeight: 1,
                  marginBottom: "1.2rem",
                  opacity: 0.7,
                }}
              >
                {f.num}
              </div>
              <div
                style={{
                  fontFamily:
                    "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "#f2e6c8",
                  marginBottom: "0.7rem",
                }}
              >
                {f.title}
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#9a8f72",
                  lineHeight: 1.7,
                  fontWeight: 300,
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
