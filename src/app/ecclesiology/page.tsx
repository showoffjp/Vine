"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "What Is the Church?", verse: "Matthew 16:18", body: "I will build my church, and the gates of Hades will not overcome it (Matthew 16:18). The Greek word ekklesia — translated church — literally means the called-out assembly. In the Greco-Roman world it referred to the citizen assembly of a city-state. Jesus appropriates the word to describe a new kind of assembly: people called out of the world to belong to God and be sent back into the world as his representatives. The church is not primarily an institution, a building, or a program — it is a community of people gathered around Jesus Christ and constituted by his word and Spirit." },
  { title: "The Four Marks: One, Holy, Catholic, Apostolic", verse: "Ephesians 4:4-5", body: "There is one body and one Spirit, just as you were called to one hope when you were called; one Lord, one faith, one baptism (Ephesians 4:4-5). The Nicene Creed confesses the church as one (unified in Christ despite its visible divisions), holy (set apart and being sanctified), catholic (universal across all times and places), and apostolic (built on and accountable to the teaching of the apostles). These are not descriptions of what the church has achieved but declarations of what the church is in Christ — and therefore aspirations toward which it always presses." },
  { title: "The Church as Body of Christ", verse: "1 Corinthians 12:27", body: "Now you are the body of Christ, and each one of you is a part of it (1 Corinthians 12:27). Paul's body metaphor is not merely illustrative — it is ontological. The church is Christ's body in the world: the physical, visible presence through which he continues to act, speak, heal, and reconcile. The diversity of gifts (1 Cor 12) is not a problem to be managed but a design to be embraced — the body needs its many parts, each with its own function. No part can say it has no need of the others." },
  { title: "Local and Universal Church", verse: "Colossians 1:18", body: "He is the head of the body, the church (Colossians 1:18). Scripture speaks of the church in two senses: the universal church (all believers across all times and places, the body of which Christ is head) and the local church (the specific assembly in a particular city — the church at Corinth, the church in someone's house). Both are fully the church. The universal church is not a super-institution that transcends local churches; it is the one body of Christ visible in its local expressions. To belong to the universal church is to belong to a local church." },
  { title: "The Purpose of the Church", verse: "Ephesians 3:10", body: "His intent was that now, through the church, the manifold wisdom of God should be made known to the rulers and authorities in the heavenly realms (Ephesians 3:10). The church has a cosmic purpose: to display the wisdom and glory of God — to the world, to the spiritual powers, and across history. This purpose is enacted through the church's gathered worship (doxology), its preaching of the gospel (proclamation), its care for the poor and marginalized (service), and its embodiment of a new kind of community across every division of the old world (demonstration)." },
];

const MODELS = [
  { name: "Body of Christ", icon: "🫀", color: GREEN, verse: "1 Cor 12:12-27", desc: "The church as the organic, living continuation of Christ's presence in the world. Each member has gifts; all are necessary; the head is Christ. This model emphasizes interdependence, diversity within unity, and the spiritual reality that the church is not merely a voluntary association but a living organism.", emphasis: "Gifts, mutual ministry, organic community" },
  { name: "Bride of Christ", icon: "💍", color: PURPLE, verse: "Ephesians 5:25-27", desc: "The church as the beloved of Christ — called to be holy, purified, and ultimately presented to him without stain or wrinkle. This model emphasizes the love relationship between Christ and the church, the church's calling to holiness, and the eschatological hope of the wedding feast of the Lamb (Revelation 19).", emphasis: "Love, holiness, covenant faithfulness, eschatological hope" },
  { name: "Temple of the Spirit", icon: "🏛️", color: "#3B82F6", verse: "1 Peter 2:4-5", desc: "The church as a spiritual building, with Christ as the cornerstone and believers as living stones. God's presence — formerly localized in the Jerusalem temple — now dwells in and among his people. The church is the locus of divine presence in the world: where two or three gather in his name, he is there.", emphasis: "Divine presence, holiness, worship, priesthood of all believers" },
  { name: "Family of God", icon: "👨‍👩‍👧‍👦", color: "#F59E0B", verse: "Galatians 6:10", desc: "The church as the household of God — characterized by the bonds, obligations, and affections of a family. Brothers and sisters, fathers and mothers in faith. This model grounds the mutual responsibility of Christians for one another and the church's particular obligation to care for its own most vulnerable members.", emphasis: "Belonging, mutual care, obligation, intergenerational community" },
  { name: "Pilgrim People", icon: "🚶", color: "#EC4899", verse: "Hebrews 11:13-16", desc: "The church as a community on the way — sojourners and exiles (1 Peter 2:11) who do not yet possess their full inheritance but journey together toward the heavenly city. This model shapes the church's relationship to culture: resident aliens who are in the world but not of it, whose primary citizenship is elsewhere.", emphasis: "Mission, pilgrim identity, counter-cultural witness, eschatological hope" },
  { name: "Herald of the Kingdom", icon: "📯", color: "#10B981", verse: "Mark 1:14-15", desc: "The church as the proclaiming community — sent by the King to announce the Kingdom's arrival. The church exists for mission: to make disciples of all nations (Matthew 28:19). The gathered church (worship) exists to scatter the church (mission). The church has no reason to exist except in relation to the world it is sent to serve.", emphasis: "Proclamation, mission, evangelism, making disciples" },
];

const PRACTICES = [
  { title: "Commit to a Local Church", desc: "The universal church is made real in local expressions. There is no New Testament category for the unattached Christian who belongs to the body of Christ in theory but not to any local congregation in practice. Belonging to a local church — with its imperfections, its specific people, its particular leaders — is how the abstract becomes concrete.", icon: "🏠" },
  { title: "Receive the Word and Sacraments", desc: "The Reformers' marks of the true church — faithful preaching of the Word and right administration of the sacraments — identify what the church needs to be the church. Find a community where the Bible is taken seriously and the sacraments are practiced faithfully. These are the means by which Christ feeds and forms his people.", icon: "📖" },
  { title: "Give Your Gifts to the Body", desc: "Every believer has been given gifts for the common good (1 Corinthians 12:7). The church is impoverished when its members are passive consumers rather than active contributors. Identify your gifts, offer them, and serve — not for recognition but because the body needs what you have been given to give.", icon: "🎁" },
  { title: "Practice Church Discipline Wisely", desc: "The church that never disciplines its members abandons them; the church that disciplines harshly crushes them. Jesus's Matthew 18 process — go first privately, then with a witness, then before the church — is both the most loving and the most difficult form of community. It takes the health of the whole body seriously.", icon: "🌿" },
  { title: "Pray for the Global Church", desc: "Your local congregation is part of the one, holy, catholic, apostolic church — a body that spans every nation, language, and century. Pray for the persecuted church in places of hostility. Pray for the church in contexts of poverty. Give financially to support Christian communities beyond your own zip code.", icon: "🌍" },
  { title: "Pursue Unity Without Uniformity", desc: "The church is called to be one — but this oneness is not uniformity of practice or tradition. Pray and work for greater unity with Christians from different traditions, without collapsing real doctrinal differences. The visible divisions of the church are a scandal; its underlying unity in Christ is a gift.", icon: "🤝" },
];

export default function EcclesiologyPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "models" | "practices">("theology");
  const [selectedModel, setSelectedModel] = useState("Body of Christ");

  const model = MODELS.find(m => m.name === selectedModel)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⛪</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Theology of the Church</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Ecclesiology — the theology of the church — asks: what is the church, why does it exist, and what does it mean to belong to it? The answers are richer and more demanding than most Christians realize.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "models" as const, label: "Models", icon: "🔭" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
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

        {activeTab === "models" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Scripture uses multiple images to describe the church — not because one is insufficient, but because the church is too rich a reality for any single image to contain. Each image illuminates a different facet.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {MODELS.map(m => (
                <button key={m.name} onClick={() => setSelectedModel(m.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedModel === m.name ? m.color : BORDER}`, background: selectedModel === m.name ? `${m.color}20` : "transparent", color: selectedModel === m.name ? m.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {m.icon} {m.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${model.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <span style={{ fontSize: 32 }}>{model.icon}</span>
                <div>
                  <h2 style={{ color: model.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{model.name}</h2>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{model.verse}</span>
                </div>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{model.desc}</p>
              <div style={{ background: `${model.color}08`, border: `1px solid ${model.color}20`, borderRadius: 10, padding: 14 }}>
                <div style={{ color: model.color, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>EMPHASIS</div>
                <p style={{ color: TEXT, fontSize: 14, margin: 0 }}>{model.emphasis}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The theology of the church is not merely academic — it shapes how you belong, serve, worship, and relate to Christians beyond your immediate community.
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
