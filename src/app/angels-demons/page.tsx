"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const ANGELS = [
  { name: "Ordinary Angels", color: GREEN, role: "Messengers and servants", desc: "The word 'angel' (Hebrew: malak; Greek: angelos) simply means 'messenger.' Angels are created spiritual beings who serve God and minister to his people. They delivered divine messages (Luke 1:26-38), protected (Psalm 91:11-12), guided (Acts 8:26), and strengthened (Matthew 4:11). Scripture is restrained about their nature — they are neither human nor divine but serve as agents of God's purposes." },
  { name: "Archangels", color: PURPLE, role: "Chief angels", desc: "Only Michael is explicitly called an archangel in the NT (Jude 9). Gabriel appears in both Testaments as a special messenger (Daniel 8-9; Luke 1). Jewish tradition names seven archangels but Scripture names only Michael and Gabriel. Michael is specifically associated with Israel's protection (Daniel 12:1) and spiritual warfare (Revelation 12:7)." },
  { name: "Cherubim", color: "#F59E0B", role: "Guardians of God's holiness", desc: "Cherubim guarded the entrance to Eden (Genesis 3:24), flanked the Ark of the Covenant (Exodus 25:18-22), and filled Ezekiel's visions (Ezekiel 1, 10). They are associated with God's presence and glory — not the chubby infant figures of Renaissance art but powerful, multi-featured beings associated with the divine throne." },
  { name: "Seraphim", color: "#EF4444", role: "Worshippers before God's throne", desc: "The seraphim appear only in Isaiah 6 — creatures with six wings, covering their faces and feet before God's holiness, calling 'Holy, holy, holy is the Lord Almighty' (6:3). Their primary function appears to be the continuous worship of God and the declaration of his holiness." },
  { name: "The Living Creatures", color: "#3B82F6", role: "Throne-room beings", desc: "Ezekiel's living creatures (Ezekiel 1) and John's four living creatures (Revelation 4:6-9) appear to be exalted angelic beings near God's throne. They bear resemblance to cherubim. They lead the heavenly worship: 'Holy, holy, holy is the Lord God Almighty, who was, and is, and is to come' (Revelation 4:8)." },
];

const THEOLOGY = [
  { title: "Angels Are Created, Not Eternal", verse: "Psalm 148:2-5", body: "Angels are creatures — made by God, not co-eternal with him. Psalm 148:2-5 includes them in the choir of created beings that praise God because 'he commanded and they were created.' Colossians 1:16 places angels within the scope of Christ's creation: 'all things have been created through him and for him' — including 'thrones or powers or rulers or authorities.' Worship of angels is explicitly forbidden (Colossians 2:18; Revelation 22:8-9)." },
  { title: "The Fall of Satan", verse: "Isaiah 14:12-15", body: "Scripture does not give a full account of Satan's origin. Isaiah 14 and Ezekiel 28, addressed to pagan kings, are often read as describing an original fall of a once-glorious being through pride: 'How you have fallen from heaven, morning star, son of the dawn!' (Isaiah 14:12). Jesus confirms: 'I saw Satan fall like lightning from heaven' (Luke 10:18). The cause appears to be pride — the desire to be 'like the Most High.'" },
  { title: "Satan's Nature and Limits", verse: "Job 1:6-12", body: "Job 1-2 is the clearest picture of Satan's operation: he accuses believers before God, but can only act within the limits God permits. Satan is not God's equal — he is a creature operating under divine permission. He is 'the accuser of our brothers and sisters' (Revelation 12:10), 'the ruler of the kingdom of the air' (Ephesians 2:2), and 'a roaring lion looking for someone to devour' (1 Peter 5:8). Powerful, but not unlimited." },
  { title: "Demons and Their Activity", verse: "Mark 5:1-13", body: "The Gospels record numerous encounters with demons — unclean spirits that inhabited people, caused suffering, and recognized Jesus's authority (Mark 5:7). Jesus cast them out with a word, demonstrating the kingdom's arrival over the powers of darkness. Paul describes a hierarchy of spiritual powers: 'rulers, authorities, powers, dominions' (Ephesians 6:12). The NT assumes spiritual opposition is real, organized, and personally hostile." },
  { title: "The Decisive Victory", verse: "Colossians 2:15", body: "'Having disarmed the powers and authorities, he made a public spectacle of them, triumphing over them by the cross' (Colossians 2:15). Christ's death and resurrection were the decisive defeat of the powers of darkness. Satan is not yet eliminated but is already defeated — the final destruction is certain (Revelation 20:10). The Christian fights from a position of victory, not in hope of it: 'the one who is in you is greater than the one who is in the world' (1 John 4:4)." },
];

const PRACTICES = [
  { title: "Neither Obsess Nor Ignore", desc: "Two errors: (1) obsessing over demonic activity, seeing spiritual warfare everywhere, attributing every struggle to demonic opposition. (2) ignoring the spiritual dimension entirely. Scripture assumes real spiritual opposition while maintaining Christ's decisive victory and the normal means of grace as the primary weapons.", icon: "⚖️" },
  { title: "The Armor of God", desc: "Ephesians 6:10-18 gives the spiritual warfare toolkit: truth, righteousness, the gospel, faith, salvation, Scripture, and prayer. Significantly, these are all ordinary means of grace — not specialized spiritual warfare techniques. The armor of God is not esoteric; it is the normal Christian life lived consistently.", icon: "🛡️" },
  { title: "Resist the Devil", desc: "'Resist the devil, and he will flee from you' (James 4:7) — preceded by 'submit to God.' Resistance is possible because of position (submitted to God) not technique. The primary weapon against satanic opposition is not confrontation but righteous living, faith, and closeness to God.", icon: "✝️" },
  { title: "Don't Attribute Everything to Demons", desc: "The flesh (Galatians 5:19-21) and the world (1 John 2:15-17) are also sources of temptation and sin, independent of demonic activity. The Christian life involves mortification of the flesh (Romans 8:13) and non-conformity to the world (Romans 12:2) — neither of which requires identifying a demon as the cause.", icon: "🔍" },
  { title: "Receive Angelic Ministry Humbly", desc: "'Are not all angels ministering spirits sent to serve those who will inherit salvation?' (Hebrews 1:14). Angels are real and active on behalf of believers. The appropriate response is not fascination with angels but gratitude to God who sends them. Don't worship them; don't ignore them; receive their ministry as God's provision.", icon: "🙏" },
  { title: "Live in Victory, Not Anxiety", desc: "The defeated enemy is still dangerous but the outcome is not in doubt. Revelation's vision ends with the dragon thrown into the lake of fire. Live with that end in view — not with the anxious vigilance of someone who might lose but with the alert confidence of someone who has already won and is securing what has been given.", icon: "🏆" },
];

export default function AngelsDemonsPage() {
  const [activeTab, setActiveTab] = useState<"angels" | "theology" | "practices">("angels");
  const [selectedAngel, setSelectedAngel] = useState("Ordinary Angels");

  const angel = ANGELS.find(a => a.name === selectedAngel)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>👼</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Angels and Demons</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The Bible describes a populated spiritual world — angels who serve God and minister to his people, and demonic powers that oppose his purposes. Understanding both protects against both obsession and ignorance.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "angels" as const, label: "Angelic Beings", icon: "✨" },
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "practices" as const, label: "Practices", icon: "🛡️" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "angels" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {ANGELS.map(a => (
                <button key={a.name} onClick={() => setSelectedAngel(a.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedAngel === a.name ? a.color : BORDER}`, background: selectedAngel === a.name ? `${a.color}20` : "transparent", color: selectedAngel === a.name ? a.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {a.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${angel.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h2 style={{ color: angel.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{angel.name}</h2>
                <span style={{ background: `${angel.color}15`, color: angel.color, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{angel.role}</span>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{angel.desc}</p>
            </div>
          </div>
        )}

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

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The Christian's posture toward the spiritual world is neither fascination nor denial — it is alert, grounded confidence rooted in Christ's decisive victory over all powers.
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
