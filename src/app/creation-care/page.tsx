"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Earth Is the Lord's", verse: "Psalm 24:1", body: "The foundational premise of Christian environmental ethics: 'The earth is the Lord's, and everything in it, the world, and all who live in it' (Psalm 24:1). Creation is not ours — it belongs to God. We are tenants and stewards, not owners. The question 'What do I do with my property?' becomes 'How do I care for God's property that has been entrusted to me?'" },
  { title: "The Creation Mandate and Dominion", verse: "Genesis 1:28, 2:15", body: "God commanded humanity to 'rule over' creation (Gen. 1:28) and to 'work and take care of' the garden (Gen. 2:15). Dominion has often been misused to justify exploitation. But biblical dominion is patterned after God's own kingship — which is characterized by care, sustaining, providing, and self-sacrifice. A king who destroys what he rules has failed in his kingly task." },
  { title: "The Groaning of Creation", verse: "Romans 8:19-22", body: "'The creation waits in eager expectation for the children of God to be revealed... the whole creation has been groaning as in the pains of childbirth' (Romans 8:19, 22). Creation is not indifferent to human sin — it has been subjected to frustration and decay because of it. Paul locates creation's redemption within the same eschatological hope as human redemption. Our bodies and the earth are redeemed together." },
  { title: "The New Creation Is This Creation Renewed", verse: "Revelation 21:1-5", body: "The final vision in Scripture is not humanity escaping the physical world but the physical world being renewed. 'A new heaven and a new earth' (Rev. 21:1) — new in quality, not in replacement. The incarnation (God becoming matter) and the bodily resurrection (matter redeemed, not discarded) signal that matter matters to God. The physical world has an eschatological future." },
  { title: "Caring for Creation as Worship", verse: "Psalm 19:1", body: "'The heavens declare the glory of God' (Psalm 19:1). Creation is not morally neutral material to be used — it is a theater of God's glory. To despoil it carelessly is to deface a canvas that speaks of the Creator. Richard Bauckham argues that creation's praise (Psalm 148) makes it a worshipping community alongside humanity, not merely a resource for human use." },
];

const PRACTICES = [
  { category: "Individual", icon: "🏠", color: "#10B981", items: [
    "Reduce food waste — about 30% of the global food supply is wasted",
    "Eat less meat (especially beef) — livestock account for significant greenhouse emissions",
    "Choose secondhand clothing over fast fashion where possible",
    "Use public transit, bike, or walk when practical",
    "Reduce single-use plastic in your home",
    "Support farmers markets and local food producers",
    "Compost kitchen scraps",
    "Plant native plants that support local wildlife and pollinators",
  ]},
  { category: "Community", icon: "🏘️", color: "#3B82F6", items: [
    "Organize a neighborhood or church grounds cleanup",
    "Advocate for church grounds that support wildlife (native plants, bird feeders)",
    "Launch a church food waste reduction or gleaning program",
    "Connect your congregation to A Rocha or similar Christian creation care networks",
    "Pray regularly for creation in corporate worship",
    "Include creation care in your small group curriculum",
  ]},
  { category: "Advocacy", icon: "📢", color: PURPLE, items: [
    "Support policies that reduce pollution and protect vulnerable ecosystems",
    "Engage local zoning and planning decisions that affect green space",
    "Write to elected officials about creation care from a Christian perspective",
    "Support international Christian development organizations doing environmental work",
    "Educate your church about the intersection of poverty and environmental harm",
  ]},
];

const OBJECTIONS = [
  { obj: "The earth is going to burn anyway (2 Peter 3:10), so why care for it?", ans: "2 Peter 3:10-12 describes purification and renewal, not annihilation. The word used (luomai) can mean 'dissolved' or 'refined.' The new creation context in Revelation 21 suggests transformation, not replacement. Even if the earth were to be replaced, we don't trash houses because they'll be remodeled — we honor what has been given to us." },
  { obj: "Creation care is a liberal political agenda, not the gospel.", ans: "Creation care has been practiced by Christians throughout history — Francis of Assisi, the Celtic saints, monastic farming communities. It predates modern environmental politics. The biblical basis — God owns creation, humans are stewards, creation praises God — is independent of any political program. Faithfulness to God's Word is not reducible to political alignment." },
  { obj: "We should focus on people, not trees.", ans: "The people most harmed by environmental degradation are the world's poor — who have the fewest resources to adapt. Environmental justice is human justice. Loving the poor includes caring about the conditions in which they live, grow food, and access water." },
];

interface CheckItem {
  id: string;
  text: string;
  category: string;
  done: boolean;
}

export default function CreationCarePage() {
  const [activeTab, setActiveTab] = useState<"theology" | "practices" | "objections">("theology");
  const [checklist, setChecklist] = useState<CheckItem[]>(() => {
    try {
      const s = localStorage.getItem("vine_creation_checks");
      if (s) return JSON.parse(s);
    } catch {}
    const items: CheckItem[] = [];
    PRACTICES.forEach(cat => cat.items.forEach((text, i) => items.push({ id: `${cat.category}-${i}`, text, category: cat.category, done: false })));
    return items;
  });

  useEffect(() => { try { localStorage.setItem("vine_creation_checks", JSON.stringify(checklist)); } catch {} }, [checklist]);

  const toggle = (id: string) => setChecklist(prev => prev.map(c => c.id === id ? { ...c, done: !c.done } : c));
  const doneCount = checklist.filter(c => c.done).length;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌍</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Creation Care</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The earth belongs to God. We are its stewards, not its owners. Caring for creation is not a political position — it is a response to who God is and what he has entrusted to us.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Biblical Basis", icon: "📖" },
            { id: "practices" as const, label: "Practices", icon: "✅" },
            { id: "objections" as const, label: "Common Objections", icon: "❓" },
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ color: TEXT, fontWeight: 700 }}>Practices adopted</div>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 18 }}>{doneCount}/{checklist.length}</div>
            </div>
            {PRACTICES.map(cat => {
              const catItems = checklist.filter(c => c.category === cat.category);
              return (
                <div key={cat.category} style={{ background: CARD, border: `1px solid ${cat.color}30`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                    <span style={{ fontSize: 20 }}>{cat.icon}</span>
                    <h3 style={{ color: cat.color, fontWeight: 800, fontSize: 17, margin: 0 }}>{cat.category} Practices</h3>
                    <span style={{ color: MUTED, fontSize: 12, marginLeft: "auto" }}>{catItems.filter(c => c.done).length}/{catItems.length}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {catItems.map(item => (
                      <div key={item.id} onClick={() => toggle(item.id)}
                        style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer", padding: "8px 12px", borderRadius: 8, background: item.done ? `${cat.color}10` : "transparent", border: `1px solid ${item.done ? cat.color + "30" : "transparent"}` }}>
                        <div style={{ width: 18, height: 18, borderRadius: 4, border: `2px solid ${item.done ? cat.color : BORDER}`, background: item.done ? cat.color : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                          {item.done && <span style={{ color: BG, fontSize: 11, fontWeight: 900 }}>✓</span>}
                        </div>
                        <span style={{ color: item.done ? cat.color : TEXT, fontSize: 14, lineHeight: 1.5, textDecoration: item.done ? "line-through" : "none" }}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "objections" && (
          <div>
            {OBJECTIONS.map((o, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ color: "#F59E0B", fontWeight: 700, fontSize: 15, marginBottom: 10, fontStyle: "italic" }}>"{o.obj}"</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{o.ans}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
