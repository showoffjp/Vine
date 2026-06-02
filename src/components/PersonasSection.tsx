const PERSONAS = [
  {
    initials: "NB",
    bg: "rgba(201,162,39,0.15)",
    color: "#e8c162",
    name: "New Believer",
    role: "Just starting out",
    desc: "No jargon, no judgment. The Vine gives new believers a safe, guided entry point — foundational theology, beginner Bible plans, and a welcoming community that remembers what it was like to start.",
    uses: ["Beginner devotional plans", "Basic theology explained", "Find a local church", "Ask anything, no shame"],
  },
  {
    initials: "SM",
    bg: "rgba(82,168,118,0.15)",
    color: "#52a876",
    name: "Seminary Student",
    role: "Deep in the Word",
    desc: "Original languages, patristics, hermeneutics, systematic theology — The Word Hub and The Scroll offer the depth serious students need, with peer discussion that goes beyond the classroom.",
    uses: ["Greek/Hebrew tools", "Theological debate forums", "Church history deep dives", "Peer study groups"],
  },
  {
    initials: "YM",
    bg: "rgba(180,120,80,0.15)",
    color: "#e0a070",
    name: "Young Mom",
    role: "Faith + family",
    desc: "Raising kids in faith while managing mental load, marriage, and a life that moves too fast. The Garden, The Well, and The Branches community give her practical support and spiritual anchoring.",
    uses: ["Christian parenting guides", "Anxiety & faith resources", "Homemaking community", "Marriage enrichment"],
  },
  {
    initials: "PP",
    bg: "rgba(176,160,232,0.15)",
    color: "#b0a0e8",
    name: "Pastor & Teacher",
    role: "Shepherd & creator",
    desc: "Vine TV and The Scroll give pastors a publishing platform with reach. Sermon tools, study aids, commentary access, and a global congregation waiting to engage with your ministry.",
    uses: ["Sermon publishing & hosting", "Bible study facilitation", "Community building tools", "Ministry reach"],
  },
  {
    initials: "SR",
    bg: "rgba(125,207,160,0.12)",
    color: "#7dcfa0",
    name: "Seeker & Doubter",
    role: "Asking the hard questions",
    desc: "No one is turned away for asking honest questions. The Scroll's apologetics section, theology boards, and a community trained to engage with gentleness make The Vine a safe space to wrestle.",
    uses: ["Apologetics resources", "Faith & doubt community", "Comparative religion tools", "No-judgment Q&A forums"],
  },
  {
    initials: "GC",
    bg: "rgba(201,112,112,0.12)",
    color: "#c97070",
    name: "Global Christian",
    role: "Church without borders",
    desc: "Whether you're in Lagos, Lima, or Lithuania — The Vine is for you. Multilingual support, regional church communities, global prayer networks, and solidarity with the persecuted church worldwide.",
    uses: ["Multilingual content", "Global prayer requests", "Persecution news & support", "International connections"],
  },
];

export default function PersonasSection() {
  return (
    <section
      style={{
        background: "#050e07",
        padding: "100px 4vw",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="vine-eyebrow" style={{ marginBottom: "0.9rem" }}>
          For Every Believer
        </div>
        <h2
          style={{
            fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "clamp(2rem, 4vw, 3.4rem)",
            fontWeight: 300,
            color: "#f2e6c8",
            lineHeight: 1.15,
            marginBottom: "3.5rem",
          }}
        >
          Whoever you are,{" "}
          <em style={{ fontStyle: "italic", color: "#e8c162" }}>
            you belong here.
          </em>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {PERSONAS.map((p) => (
            <div
              key={p.initials}
              className="vine-persona"
              style={{
                background: "#0a1a0e",
                border: "0.5px solid rgba(242,230,200,0.08)",
                borderRadius: 4,
                padding: "2rem",
                transition: "border-color 0.25s, transform 0.25s",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  marginBottom: "1.2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: p.bg,
                  fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: p.color,
                }}
              >
                {p.initials}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#f2e6c8",
                  marginBottom: "0.35rem",
                }}
              >
                {p.name}
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                  color: p.color,
                  marginBottom: "1rem",
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                }}
              >
                {p.role}
              </div>
              <p
                style={{
                  fontSize: "0.83rem",
                  color: "#9a8f72",
                  lineHeight: 1.7,
                  fontWeight: 300,
                  fontFamily: "var(--font-jost, system-ui, sans-serif)",
                  marginBottom: "1.2rem",
                }}
              >
                {p.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.45rem",
                }}
              >
                {p.uses.map((use) => (
                  <div
                    key={use}
                    style={{
                      fontSize: "0.77rem",
                      color: "#9a8f72",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: "var(--font-jost, system-ui, sans-serif)",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: 14,
                        height: 0.5,
                        background: "#c9a227",
                        flexShrink: 0,
                      }}
                    />
                    {use}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
