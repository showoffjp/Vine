"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "What Is the Image of God?", verse: "Genesis 1:26-27", body: "Then God said, Let us make mankind in our image, in our likeness (Genesis 1:26). The imago Dei is the most fundamental statement Scripture makes about human nature. It distinguishes humans from all other creatures and grounds human dignity in something that cannot be voted on, earned, or lost through behavior. Three main interpretations have been proposed: the substantive view (the image is a quality like reason or conscience), the functional view (the image is the vocation to rule and steward creation), and the relational view (the image is humanity's unique capacity for relationship with God). Most contemporary theologians hold that all three are interrelated dimensions of a single reality." },
  { title: "All People Bear the Image", verse: "Genesis 9:6", body: "Whoever sheds human blood, by humans shall their blood be shed; for in the image of God has God made mankind (Genesis 9:6). This text comes after the fall and flood — the image of God is not lost through sin. Every human being, regardless of moral condition, intellectual capacity, ethnicity, age, or ability, bears God's image. This is the theological foundation for universal human rights, the prohibition of murder, the dignity of the disabled and elderly, and the equality of all races. No human being can be treated as less than human without contradicting God's declaration at creation." },
  { title: "The Image Damaged but Not Destroyed", verse: "Romans 3:23", body: "The fall does not destroy the image but deeply distorts it. Humans retain the capacity for relationship, rationality, creativity, and moral awareness — but all of these are now bent by sin. We love wrongly, reason toward self-justification, create destructively, and suppress what we know about God (Romans 1:18-21). The Reformers spoke of this as the noetic effects of sin — the fall damages not only the will but also the intellect. We see, but through a distorting lens. We know, but incompletely and inconsistently." },
  { title: "Christ: The True Image", verse: "Colossians 1:15", body: "The Son is the image of the invisible God, the firstborn over all creation (Colossians 1:15). What humanity was created to be and failed to become, Jesus Christ is. He is the true imago Dei — not merely a perfect human but the very image of God made visible. The restoration of humanity is therefore described as conformity to Christ's image: to be conformed to the image of his Son (Romans 8:29). Salvation is not simply forgiveness — it is the renewal of the image of God in those who were made to bear it. Sanctification is imago restoration." },
  { title: "The Image and Human Dignity Today", verse: "James 3:9", body: "With the tongue we praise our Lord and Father, and with it we curse human beings, who have been made in God's likeness (James 3:9). James's practical implication is stunning: you cannot simultaneously worship God and despise the human being made in his image. The imago Dei has immediate practical implications for how we speak about people, how we treat the vulnerable, how we approach economic justice, how we engage political enemies, and how we think about the unborn, the dying, and the cognitively disabled. Every human face is, as it were, an icon of God." },
];

const DIMENSIONS = [
  { title: "Substantive", icon: "🧠", color: PURPLE, verse: "Romans 1:19-20", desc: "The image consists in some quality inherent in human nature — most commonly reason, moral conscience, creativity, or linguistic capacity. Augustine emphasized reason and memory; Aquinas, rational capacity for knowing God. This view grounds human uniqueness in what we are.", implication: "Every human mind, however damaged, retains some remnant of the divine image and deserves to be taken seriously as a moral and rational agent." },
  { title: "Functional", icon: "👑", color: GREEN, verse: "Genesis 1:28", desc: "The image consists in the vocation to rule creation as God's representatives — to exercise dominion, steward the earth, and represent God's authority in the created order. This view is prominent in recent OT scholarship and sees the image less as an inner quality and more as an assigned role.", implication: "Human work — all of it — participates in the vocation of imaging God. Work is not a consequence of the fall; it is a creation gift through which humans represent God in the world." },
  { title: "Relational", icon: "🤝", color: "#3B82F6", verse: "Genesis 1:27", desc: "The image is constituted in relationship — first with God, then with other humans (male and female he created them). Karl Barth emphasized this: the image is the I-Thou encounter, the capacity to be in genuine relationship. The image is not a thing you have but a way of being with — it is fundamentally relational.", implication: "Isolation, dehumanization, and the breaking of relationship are attacks on the image of God. To be fully human is to be in right relationship with God and other humans." },
  { title: "Eschatological", icon: "🌅", color: "#F59E0B", verse: "Romans 8:29", desc: "The image is not fully present now but points toward a future restoration. Humanity was made for what it has not yet become; the image awaits its fullness in the new creation. Conformity to Christ's image is both a present process and a future destination. The imago Dei has a teleological dimension — it is what we are becoming, not only what we are.", implication: "Hope is built into human nature. We are not yet what we will be. Sanctification is the progressive recovery of the image, and resurrection is its final restoration." },
];

const PRACTICES = [
  { title: "Treat Every Person as Image-Bearer", desc: "Before every conversation, every policy decision, every political argument — recall that the person you are addressing bears the image of God. This changes how you speak, how you listen, and what outcomes you pursue. The image-bearer in front of you cannot be dismissed, dehumanized, or used.", icon: "👁️" },
  { title: "Pursue Work as Vocation", desc: "If the image of God includes the functional vocation to steward creation, then your work — whatever it is — has theological dignity. The farmer, the programmer, the nurse, and the parent all participate in the image's mandate. Work is not a distraction from the spiritual life; it is part of it.", icon: "⚒️" },
  { title: "Defend Human Dignity at Its Margins", desc: "The image of God is most practically honored where it is most contested: the unborn, the severely disabled, the dying, the refugee, the prisoner. These are the margins where the imago Dei is most at risk of denial. Advocating for human dignity in these places is a theological act, not merely a political one.", icon: "🛡️" },
  { title: "Cultivate Beauty and Creativity", desc: "If God is the Creator and humans bear his image, then human creativity is a form of imaging God — bringing order out of chaos, beauty into the world, meaning into raw experience. Art, music, writing, design, and craft are not luxuries. They are expressions of the image we bear.", icon: "🎨" },
  { title: "Practice Embodied Dignity", desc: "The image of God is borne by embodied creatures — not souls trapped in bodies, but persons whose bodies are part of who they are. This grounds care for physical health, rest, and the dignity of bodies. It also grounds the Christian hope for bodily resurrection — the body matters because image-bearers are bodies.", icon: "🌿" },
  { title: "Look at Christ to Know What You Are For", desc: "The true image of God is Jesus Christ. He is not a corrective to humanity but its goal. Looking at Jesus — who he was, how he treated people, what he loved, how he suffered — tells you more about what it means to be fully human than any philosophical definition. Conformity to his image is the telos of your existence.", icon: "✝️" },
];

export default function ImageOfGodPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "dimensions" | "practices">("theology");
  const [selectedDim, setSelectedDim] = useState("Substantive");

  const dim = DIMENSIONS.find(d => d.title === selectedDim)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>👤</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Image of God</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Made in the image of God — imago Dei — is the most fundamental statement Scripture makes about what it means to be human. It grounds human dignity, shapes our ethics, and points toward what we are becoming in Christ.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "dimensions" as const, label: "Dimensions", icon: "🔭" },
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

        {activeTab === "dimensions" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Theologians have identified four overlapping dimensions of what it means to bear the image of God — not competing views so much as complementary lenses.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {DIMENSIONS.map(d => (
                <button key={d.title} onClick={() => setSelectedDim(d.title)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedDim === d.title ? d.color : BORDER}`, background: selectedDim === d.title ? `${d.color}20` : "transparent", color: selectedDim === d.title ? d.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {d.icon} {d.title}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${dim.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <span style={{ fontSize: 32 }}>{dim.icon}</span>
                <div>
                  <h2 style={{ color: dim.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{dim.title} View</h2>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{dim.verse}</span>
                </div>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{dim.desc}</p>
              <div style={{ background: `${dim.color}08`, border: `1px solid ${dim.color}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: dim.color, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>PRACTICAL IMPLICATION</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{dim.implication}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The image of God is not merely a doctrine to believe — it is a reality to live from. These practices are rooted in what it means to be made in God's image.
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
