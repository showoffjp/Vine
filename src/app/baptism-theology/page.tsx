"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Baptism in the New Testament", verse: "Matthew 28:19", body: "Baptism is commanded in the Great Commission: 'Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit' (Matthew 28:19). It appears throughout Acts as the expected response to repentance and faith (Acts 2:38; 8:12; 10:48; 16:33). The NT presents baptism not as optional but as the normal, expected public sign of faith in Christ — the entry rite into the Christian community." },
  { title: "What Baptism Signifies", verse: "Romans 6:3-4", body: "'Don't you know that all of us who were baptized into Christ Jesus were baptized into his death? We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life' (Romans 6:3-4). Baptism is a dramatic enactment of the gospel: death, burial, and resurrection. It unites the believer symbolically (and for some traditions, sacramentally) with Christ's atoning death and victorious resurrection." },
  { title: "Baptism and the Holy Spirit", verse: "Acts 2:38", body: "'Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit' (Acts 2:38). The relationship between water baptism and Spirit baptism is contested: some hold they are always linked (sacramental traditions), others that the Spirit's work is prior and baptism is the outward sign (Baptist/Reformed traditions), and Pentecostals sometimes distinguish the initial indwelling from a subsequent Spirit baptism evidenced by tongues." },
  { title: "Covenant Continuity (Paedobaptism)", verse: "Colossians 2:11-12", body: "The argument for infant baptism (paedobaptism) runs through covenant theology: as circumcision was the sign of covenant membership for infant males in Israel, baptism is the new covenant's corresponding sign, administered to the children of believers. Colossians 2:11-12 links circumcision and baptism. The covenant community is familial, not merely individual — children of believers are covenant children and receive the covenant sign." },
  { title: "Believers' Baptism (Credobaptism)", verse: "Acts 8:36-38", body: "The Baptist/Anabaptist tradition holds that baptism requires prior personal faith — 'What is to prevent me from being baptized?' Philip requires an answer (Acts 8:36-38). Infants cannot exercise faith; therefore infant baptism is not baptism in the NT sense. Credobaptism reads the NT pattern as consistent: repent, believe, be baptized. The new covenant community is made of those who personally know the Lord (Jeremiah 31:34), not those born into a covenant nation." },
];

const TRADITIONS = [
  {
    name: "Roman Catholic",
    color: "#F59E0B",
    mode: "Sprinkling (infusion)",
    subjects: "Infants and adult converts",
    view: "Baptism is necessary for salvation — it conveys regenerating grace (baptismal regeneration), removes original sin, and incorporates the baptized into the church. Without baptism, the ordinary means of salvation is absent. For those who die without baptism but with implicit desire, the church holds hope.",
    key_text: "CCC 1213-1284",
  },
  {
    name: "Lutheran",
    color: "#EF4444",
    mode: "Sprinkling or pouring",
    subjects: "Infants and adults",
    view: "Baptism works forgiveness of sins, delivers from death and the devil, and gives eternal salvation. Luther held the classic Lutheran view that water baptism conveys what it promises when received in faith — for infants, through the faith of the church. Baptism is a means of grace.",
    key_text: "Luther's Small Catechism; Augsburg Confession",
  },
  {
    name: "Reformed / Presbyterian",
    color: PURPLE,
    mode: "Sprinkling (preferred)",
    subjects: "Infants of believers and adult converts",
    view: "Baptism is a sacrament of initiation that seals covenant membership and confers the benefits it signifies by the power of the Spirit working through faith. It does not automatically regenerate but is a real means of grace. The covenant sign belongs to covenant children.",
    key_text: "Westminster Confession of Faith; Heidelberg Catechism",
  },
  {
    name: "Baptist / Evangelical",
    color: GREEN,
    mode: "Immersion (required by most)",
    subjects: "Believers only (professing personal faith)",
    view: "Baptism is an ordinance (not a sacrament that conveys grace) — an outward sign of an inward grace already received. It does not save but publicly declares salvation, identifies with Christ, and marks entry into the local church. Only those who have personally believed are proper candidates.",
    key_text: "Baptist Confession of 1689; The Baptist Faith and Message",
  },
  {
    name: "Pentecostal / Charismatic",
    color: "#3B82F6",
    mode: "Immersion",
    subjects: "Believers only",
    view: "Believers' baptism by immersion, often distinguished from Spirit baptism (evidenced by speaking in tongues as the initial sign). Water baptism follows conversion; Spirit baptism may be a subsequent experience. Both are emphasized as distinct and necessary.",
    key_text: "Assemblies of God Statement of Fundamental Truths",
  },
];

const PRACTICES = [
  { title: "Take Baptism Seriously", desc: "Whatever your tradition's view of baptism's precise meaning and proper subjects, take it seriously. The NT does not treat it as optional. Unobserved, unbaptized Christianity is at odds with the apostolic pattern — even if one's tradition holds a lower sacramental view, public profession and community accountability matter.", icon: "💧" },
  { title: "Understand Before You Receive", desc: "Baptism should be understood before it is received. Preparation (or catechesis) is not a bureaucratic requirement but an opportunity to grasp what is happening. What does the water signify? Why is the Trinitarian formula used? What am I saying yes to? Uninformed sacraments are diminished sacraments.", icon: "📖" },
  { title: "Remember Your Baptism", desc: "Luther's counsel in temptation: 'I am baptized.' Not 'I will try harder' or 'I was once sincere enough' but 'God claimed me in water and word.' Whatever your tradition, the memory of baptism is a resource — a visible, dated, enacted word of promise to return to in doubt and spiritual dryness.", icon: "🕊️" },
  { title: "Witness Others' Baptisms with Attention", desc: "Baptism in a gathered community is not merely an individual's private declaration — it is the community's celebration of new life. Be present, be attentive, be moved. Every baptism is the gospel enacted: someone who was dead is alive, someone who was lost is found.", icon: "👥" },
  { title: "Hold Convictions with Charity", desc: "Baptism is a matter on which serious, biblically faithful Christians have disagreed for 500 years. Know your tradition's view well, hold it with conviction, and hold it without contempt for those who differ. The historic mode and subject debates are important but do not determine gospel faithfulness.", icon: "🤝" },
  { title: "Live the Baptized Life", desc: "The life of baptism is the ongoing life of repentance and faith — death to sin, alive to God in Christ Jesus (Romans 6:11). Baptism is not a completed event that recedes into the past but a permanent identity: you are a baptized person. Let that shape daily choices about what to 'put to death' and what to 'put on' (Colossians 3:5-14).", icon: "✝️" },
];

export default function BaptismTheologyPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "traditions" | "practices">("theology");
  const [selectedTrad, setSelectedTrad] = useState("Roman Catholic");

  const trad = TRADITIONS.find(t => t.name === selectedTrad)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>💧</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Theology of Baptism</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Baptism is commanded, practiced throughout the NT, and debated across traditions. What does the water signify? Who should receive it? What does it accomplish? Few doctrines reveal theological commitments more sharply.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "traditions" as const, label: "Traditions", icon: "⛪" },
            { id: "practices" as const, label: "Practices", icon: "💧" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "traditions" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {TRADITIONS.map(t => (
                <button key={t.name} onClick={() => setSelectedTrad(t.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedTrad === t.name ? t.color : BORDER}`, background: selectedTrad === t.name ? `${t.color}20` : "transparent", color: selectedTrad === t.name ? t.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {t.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${trad.color}30`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: trad.color, fontWeight: 900, fontSize: 22, marginBottom: 16 }}>{trad.name}</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
                <div style={{ background: `${trad.color}08`, border: `1px solid ${trad.color}20`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: trad.color, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>MODE</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{trad.mode}</p>
                </div>
                <div style={{ background: `${trad.color}08`, border: `1px solid ${trad.color}20`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: trad.color, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>SUBJECTS</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{trad.subjects}</p>
                </div>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}>{trad.view}</p>
              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>KEY TEXT</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{trad.key_text}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Whatever one's tradition, baptism is meant to be remembered, celebrated, and lived into. These six practices help baptism become more than a past event.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
