"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "thinkers" | "practices" | "objections" | "videos";

const THINKERS = [
  {
    id: "francis",
    name: "Francis of Assisi",
    era: "1181-1226",
    context: "Italian friar, founder of the Franciscan Order",
    bio: "Francis is the patron saint of ecology and the most beloved Christian figure in the creation care tradition. His 'Canticle of the Sun' (1224) praised God for 'Brother Sun,' 'Sister Moon,' 'Brother Wind,' 'Sister Water,' 'Brother Fire,' and 'Sister Earth.' For Francis, creation was not merely a resource but a community of praise — each creature glorifying God in its own way. His embrace of poverty was inseparable from his love of creation: those who possess nothing need not exploit anything.",
    quote: "Praise be to You, my Lord, through our Sister, Mother Earth, who sustains and governs us, and who produces various fruit with colored flowers and herbs.",
    contribution: "Francis demonstrated that creation care flows naturally from simplicity, poverty of spirit, and the contemplative tradition. He did not argue for environmental ethics from philosophical principles; he simply lived and loved creation as God's gift. His example has been more persuasive across centuries than most theological treatises. Pope John Paul II named him patron of ecologists in 1979.",
  },
  {
    id: "calvin",
    name: "John Calvin",
    era: "1509-1564",
    context: "French-Swiss Reformer; systematized Protestant theology",
    bio: "Calvin is rarely cited in creation care discussions, but he provides one of the most robust theological foundations for it. His doctrine of 'accommodation' teaches that God speaks in creation at a level humans can receive — creation is God's theater of glory, a spectacle set for our benefit and instruction. Calvin insisted that the whole world is a mirror of divine glory, and that those with eyes of faith can read God's goodness and power in every creature.",
    quote: "There is not one little blade of grass, there is no color in this world that is not intended to make men rejoice.",
    contribution: "Calvin's concept of creation as 'theater of glory' (theatrum gloriae Dei) gives creation intrinsic theological significance beyond mere resource. Reformed creation care theology — including the work of Cornelius Plantinga and Steven Bouma-Prediger — builds heavily on this Calvinist foundation. Calvin also emphasized stewardship over ownership: we receive creation from God as its users, not its possessors.",
  },
  {
    id: "berry",
    name: "Wendell Berry",
    era: "1934-present",
    context: "Kentucky farmer, poet, essayist, and Christian social critic",
    bio: "Wendell Berry is America's most important Christian agrarian voice. A farmer, novelist, poet, and essayist, Berry has spent decades articulating a vision of faithful land stewardship rooted in both Christian tradition and the practical wisdom of farming communities. He is a fierce critic of industrial agriculture, monoculture, and the assumption that the economy is the measure of all things. His essays in 'The Unsettling of America' and 'Sex, Economy, Freedom and Community' are landmarks of Christian creation care thought.",
    quote: "The ecological teaching of the Bible is simply inescapable: God made the world because He wanted it made. He thinks the world is good, and He loves it. It is His world; He has never relinquished title to it.",
    contribution: "Berry made the connection between Christian faith and love of place — the particular, local, embodied land — unavoidable for thoughtful Christians. He argued that creation care is not primarily a policy agenda but a set of daily practices tied to a specific piece of land. His concept of 'membership' in a community of creatures and people has influenced a generation of Christian farmers, pastors, and thinkers who want to care faithfully for their local places.",
  },
  {
    id: "bouma",
    name: "Steven Bouma-Prediger",
    era: "1955-present",
    context: "Reformed theologian; professor at Hope College",
    bio: "Bouma-Prediger is the leading evangelical academic theologian of creation care. His 'For the Beauty of the Earth' (2001, 2010) is the standard textbook for Christian environmental ethics. He argues that creation care is not peripheral but central to Christian discipleship — that 'earthkeeping' is the natural fruit of loving God and neighbor. Drawing on Richard Mouw, the Dutch Reformed tradition, and Francis of Assisi, he offers a systematic account of why Christians should care for creation and what that looks like in practice.",
    quote: "Earthkeeping is not merely a good thing to do but something Christians are called to do as stewards of God's good creation. It flows from who we are, not merely from what we should do.",
    contribution: "Bouma-Prediger helped move creation care from a marginal concern of the Christian left to a theologically grounded, broadly evangelical commitment. He introduced the concept of 'ecological virtues' — a set of character traits (wonder, humility, self-restraint, frugality, generosity, justice, solidarity, compassion) that a creation-caring Christian cultivates. This virtue-ethics framework allowed evangelicals to engage creation care without reducing it to politics.",
  },
  {
    id: "bauckham",
    name: "Richard Bauckham",
    era: "1946-present",
    context: "British NT scholar and biblical theologian; St. Andrews, Cambridge",
    bio: "Bauckham's 'Bible and Ecology' (2010) is the most careful biblical examination of creation care in the evangelical world. He argues against anthropocentrism — the assumption that Scripture is entirely human-focused — and shows that creation has its own voice, its own relationship with God, and its own purposes independent of human use. Psalm 148, Job 38-41, and Revelation 4-5 all portray creation praising God on its own terms. Bauckham also reclaims the concept of 'dominion' — which, properly understood, means something closer to shepherding than to exploitation.",
    quote: "Creation is not merely the backdrop to the human drama of salvation; it is itself caught up in the story of redemption. The praise of all creatures matters to God.",
    contribution: "Bauckham provided the exegetical grounding that many evangelicals needed to take creation care seriously as a biblical commitment. By showing that creation has its own relationship with God — that the whole creation praises God, not merely as a backdrop to human praise but in its own voice — he gave theological weight to the intuition that environmental destruction is not merely wasteful but sacrilegious.",
  },
];


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
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_creation-care_tab", "theology");
  const [selectedThinker, setSelectedThinker] = usePersistedState("vine_creation-care_selected_thinker", "francis");
  const thinker = THINKERS.find(t => t.id === selectedThinker)!;
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
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
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
            { id: "thinkers" as const, label: "Thinkers", icon: "💡" },
            { id: "practices" as const, label: "Practices", icon: "✅" },
            { id: "objections" as const, label: "Common Objections", icon: "❓" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "thinkers" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {THINKERS.map(t => (
                <button type="button" key={t.id} onClick={() => setSelectedThinker(t.id)}
                  style={{ width: "100%", background: selectedThinker === t.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedThinker === t.id ? PURPLE + "70" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedThinker === t.id ? PURPLE : TEXT, fontWeight: 800, fontSize: 13, marginBottom: 2 }}>{t.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{t.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>{thinker.era}</div>
                  <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 24, marginBottom: 4 }}>{thinker.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{thinker.context}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{thinker.bio}</p>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18, marginBottom: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 10 }}>IN THEIR OWN WORDS</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>&ldquo;{thinker.quote}&rdquo;</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{thinker.contribution}</p>
                </div>
              </div>
            </div>
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

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings on creation care, environmental stewardship, and a biblical theology of the earth.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "AHn1TrRgQ-E", title: "Christians and Creation Care", channel: "Sandra Richter", description: "OT scholar Sandra Richter makes the biblical case for environmental stewardship, arguing that caring for creation is central to the Abrahamic covenant and not a liberal import." },
                  { videoId: "wGthaQWzC0M", title: "What Does the Bible Say About Creation Care?", channel: "BioLogos", description: "An accessible overview of the biblical foundations for creation care — from Genesis 1-2 mandate to the new creation vision of Revelation — showing that stewardship is a core Christian calling." },
                  { videoId: "me3WSUmz5i0", title: "Creation Care: A Biblical Theology", channel: "Moo / Crossway", description: "Jonathan and Douglas Moo present the biblical theology case for creation care, working through the Old and New Testament witness to human responsibility for the natural world." },
                  { videoId: "pjbSx53afWo", title: "The Essential Christian Practice of Creation Care", channel: "Steven Bouma-Prediger", description: "Bouma-Prediger argues that caring for the earth is not optional for Christians but flows necessarily from the character of God as Creator and sustainer of all things." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
