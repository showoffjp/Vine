"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Who Is My Neighbor? The Radical Answer", body: "The lawyer in Luke 10 asked Jesus 'Who is my neighbor?' hoping to limit the command to love. Jesus answered with a story that expanded the question: it is not 'Who counts as my neighbor?' but 'Who will be a neighbor to the one who needs it?' The Samaritan — the ethnic and religious outsider — is the moral hero. Your neighbor is whoever is in front of you who has need you can meet." },
  { title: "The Second Greatest Commandment", body: "'Love your neighbor as yourself' (Mark 12:31). This is not a suggestion or an aspiration — it is a command, and Jesus calls it the second greatest. Self-love is used as a metric, not a goal: the love you naturally give to your own interests, comfort, and wellbeing is the benchmark for how you should treat others. This is not a low standard." },
  { title: "Loving the Neighbor You Can See", body: "'Whoever claims to love God yet hates a brother or sister is a liar. For whoever does not love their brother and sister, whom they have seen, cannot love God, whom they have not seen' (1 John 4:20). Love for God is not tested in the abstract — it is tested in the concrete. The neighbor you can see, hear, and help is the test of the love you profess for the God you cannot." },
  { title: "The Neighborhood as Missional Context", body: "Most Christians spend more time in their local neighborhood than anywhere else. Yet many don't know their neighbors' names. The gospel is not only announced from stages — it is demonstrated in front yards, over shared meals, in acts of presence and practical care. Your ZIP code is not a residence; it is a calling." },
];

const PRACTICES = [
  { category: "Know", icon: "👋", color: "#3B82F6", items: [
    "Learn the names of five neighbors you don't yet know",
    "Ask a neighbor how long they've lived there and what the street was like before",
    "Remember names of children and pets — ask about them",
    "Find out what language the family two doors down speaks at home",
    "Learn one thing each neighbor is proud of or cares about",
  ]},
  { category: "Be Present", icon: "🏠", color: "#10B981", items: [
    "Spend time in your front yard — not just the backyard",
    "Walk your street or neighborhood regularly",
    "Attend one neighborhood event or HOA meeting this month",
    "Leave your earbuds out when outside",
    "Wave first. Always.",
  ]},
  { category: "Give", icon: "🎁", color: "#F59E0B", items: [
    "Bring food when a neighbor is sick or has had a baby",
    "Offer to take in mail or watch a pet during travel",
    "Share produce from a garden, home baking, or a meal",
    "Offer practical help: a tool, a ride, yard work after an injury",
    "Remember birthdays and milestones with a note or small gift",
  ]},
  { category: "Gather", icon: "🤝", color: "#EF4444", items: [
    "Host a simple block party or backyard dinner",
    "Organize a neighborhood emergency plan or resource list",
    "Start or join a neighborhood group chat",
    "Create space for gathering: a firepit, chairs on the porch",
    "Invite one neighbor to something you're already doing",
  ]},
];

const OBSTACLES = [
  { obstacle: "I don't have time.", response: "You don't need new time — you need to redeem existing time. The 2 minutes you spend getting your mail can include a conversation. Reframe the commute to your car as an opportunity." },
  { obstacle: "I'm introverted.", response: "Introverts are often the best neighbors — they notice, they listen, they remember. Neighboring doesn't require gregariousness. It requires showing up consistently in small ways over time." },
  { obstacle: "My neighborhood isn't safe / is transient.", response: "High-turnover or high-difficulty neighborhoods need neighboring more, not less. And safety is often built through the social fabric that neighboring creates. Knowing your neighbors is itself a form of safety." },
  { obstacle: "I don't have anything to offer.", response: "You have time, attention, and presence — the scarcest commodities in modern life. The elderly widower next door doesn't need your money. He needs someone to ask how he is." },
  { obstacle: "I'm afraid of awkwardness.", response: "Awkwardness is temporary; regret is longer. Most people are quietly lonely and grateful when someone makes the first move. The risk of awkwardness is worth the possibility of friendship." },
];

const VOICES_NEIGH = [
  { id: "pohl-c", name: "Christine Pohl", era: "b. 1951", context: "Making Room: Recovering Hospitality as a Christian Tradition (1999) — the definitive theological account of hospitality", bio: "Christine Pohl's Making Room is the most important theological treatment of Christian hospitality in the modern era. Drawing on church history, Scripture, and sociological research with contemporary hospitality communities, Pohl argues that welcoming the stranger was the central identifying practice of the early church — not a secondary virtue but a primary witness. The church's loss of its hospitable identity has impoverished both its mission and its internal life. She traces how hospitality was recovered by communities like L'Arche and the Catholic Worker movement, and argues that recovering it is essential for the church's credibility and faithfulness.", quote: "Hospitality was not a nice addition to Christian practice in the early church. It was the central expression of Christian community — the place where theological conviction became embodied reality.", contribution: "Pohl's Making Room recovered hospitality as a serious theological category after centuries in which it had been reduced to entertaining guests at dinner. Her work has influenced how seminaries teach about community and mission, and has inspired hundreds of Christian intentional communities, houses of hospitality, and welcoming churches." },
  { id: "nouwen-h", name: "Henri Nouwen", era: "1932-1996", context: "Reaching Out (1975); The Wounded Healer (1972) — on hospitality as creating space for the stranger", bio: "Henri Nouwen defined hospitality not as entertainment but as the creation of space — free and friendly space — where the stranger can enter and become a friend, where the enemy can discover that they are known and loved. This definition, developed in Reaching Out, transformed how Christians think about neighboring. Hospitality is not primarily about giving things (food, shelter) but about giving space — the space to be known, to speak, to be present without pretension. Nouwen practiced this in his own life, eventually leaving academic theology to live at L'Arche Daybreak in Toronto, where he was formed as much as he formed others.", quote: "Hospitality is not to change people, but to offer them space where change can take place. It is not to bring men and women over to our side, but to offer freedom not disturbed by dividing lines.", contribution: "Nouwen's definition of hospitality as creating free and friendly space has become one of the most influential ideas in spiritual formation literature. It reframed neighboring from transactional giving to genuine presence, and has shaped the practice of pastoral care, spiritual direction, and community ministry across denominations." },
  { id: "keller-tj", name: "Tim Keller", era: "1950-2023", context: "Generous Justice (2010); The Reason for God (2008) — on neighbor love as the test of genuine faith", bio: "Tim Keller argued consistently throughout his ministry that the quality of our love for neighbor is the test of the genuineness of our love for God. Drawing from 1 John, the Sermon on the Mount, and the Parable of the Good Samaritan, he challenged New York City Christians to take their geographic location as a missional context — not to flee the city for suburbs but to build lives of permanence, generosity, and neighbor love in the places they inhabited. Generous Justice draws the theological line from the gospel of grace to the works of mercy and justice: those who have been shown mercy by God are formed by that mercy into merciful neighbors.", quote: "If I am truly moved by grace, I will seek justice. The gospel creates people who are both spiritually and socially transformed — who love their neighbors not as a means but as an end.", contribution: "Keller's urban ministry theology, centered on New York City, gave evangelical churches a model for engaged, neighbor-loving presence in difficult urban contexts. His articulation of the connection between gospel grace and social mercy has influenced how a generation of evangelical churches think about justice, neighboring, and mission." },
  { id: "berry-w", name: "Wendell Berry", era: "b. 1934", context: "It All Turns on Affection (2012); Port William fiction; poet, farmer, and essayist on place and neighbor", bio: "Wendell Berry is not primarily a theologian but his poetry, fiction, and essays constitute the most sustained contemporary meditation on what it means to be a neighbor in the deepest sense — rooted in place, known to the people around you, accountable to the community you inhabit. His Port William fiction (Hannah Coulter, Jayber Crow, A Place on Earth) depicts a small Kentucky community across generations, showing what genuine neighboring looks like when it is practiced as a way of life rather than a spiritual discipline. Berry's critique of American mobility — the endless movement away from place and community — is implicitly theological: you cannot love your neighbor if you don't stay long enough to know them.", quote: "It may be that when we no longer know what to do, we have come to our real work, and when we no longer know which way to go, we have begun our real journey. The mind that is not baffled is not employed.", contribution: "Berry's fiction and poetry have given Christians a vision of what deep neighboring looks like when it is embedded in place, loyalty, and long-term commitment rather than mere activity. His influence has been particularly strong among younger evangelicals drawn to practices of rootedness, local food, and intentional community." },
  { id: "mcneil-b", name: "Brenda Salter McNeil", era: "b. 1955", context: "Roadmap to Reconciliation (2015); A Credible Witness (2008) — on reconciliation as the deepest act of neighboring", bio: "Brenda Salter McNeil argues that genuine neighboring, in a racially and economically divided society, requires the harder work of reconciliation — crossing the lines of race, class, and culture that make easy neighboring impossible. Her Roadmap to Reconciliation provides a framework for understanding how communities move through the stages of realization, identification, preparation, and activation to become genuinely reconciling communities. Her A Credible Witness argues that the church's racial divisions have destroyed its witness in the world — that a segregated church cannot be a credible neighbor to a diverse world.", quote: "Reconciliation is not just about fixing the past. It is about creating a new future — one where people who were once separated by race, class, and culture learn to live as genuine neighbors.", contribution: "McNeil's work on reconciliation as the deepest form of neighboring has influenced how evangelical churches think about racial justice, cross-cultural ministry, and the witness of a diverse church. Her framework for reconciliation has been used in churches, seminaries, and Christian organizations across the country." },
];

interface NeighborEntry {
  id: string;
  name: string;
  address: string;
  notes: string;
  connected: boolean;
}

const SEED_NEIGHBORS: NeighborEntry[] = [
  { id: "1", name: "Frank & Rosa (next door left)", address: "next door", notes: "Dog named Chester. Frank retired teacher. Rosa loves gardening.", connected: true },
  { id: "2", name: "The Liu family (across the street)", address: "across street", notes: "Two kids, maybe 8 and 10. Work long hours. Haven't talked much.", connected: false },
  { id: "3", name: "Margaret", address: "two doors down", notes: "Elderly, alone. Son visits on holidays. Could use more check-ins.", connected: true },
];

export default function NeighborPage() {
  const [activeTab, setActiveTab] = usePersistedState<"theology" | "practices" | "neighbors" | "voices" | "videos">("vine_neighbor_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_neighbor_voice", "pohl-c");
  const voiceItem = VOICES_NEIGH.find(v => v.id === selectedVoice)!;
  const [neighbors, setNeighbors] = useState<NeighborEntry[]>(() => {
    try { const s = localStorage.getItem("vine_neighbor_list"); return s ? JSON.parse(s) : SEED_NEIGHBORS; } catch { return SEED_NEIGHBORS; }
  });
  const [form, setForm] = useState<{ name: string; address: string; notes: string }>(() => {
    try { const s = localStorage.getItem("vine_neighbor_draft"); return s ? JSON.parse(s) : { name: "", address: "", notes: "" }; } catch { return { name: "", address: "", notes: "" }; }
  });
  useEffect(() => {
    try { localStorage.setItem("vine_neighbor_draft", JSON.stringify(form)); } catch {}
  }, [form]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => { try { localStorage.setItem("vine_neighbor_list", JSON.stringify(neighbors)); } catch {} }, [neighbors]);

  const addNeighbor = () => {
    if (!form.name) return;
    setNeighbors(prev => [{ id: Date.now().toString(), ...form, connected: false }, ...prev]);
    setForm({ name: "", address: "", notes: "" });
    setShowForm(false);
  };

  const toggleConnected = (id: string) => {
    setNeighbors(prev => prev.map(n => n.id === id ? { ...n, connected: !n.connected } : n));
  };

  const connected = neighbors.filter(n => n.connected).length;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🏘️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Loving Your Neighbor</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The second greatest commandment is tested not in the abstract but in the concrete — the person next door, on your street, in your building. Your neighborhood is not a residence; it's a calling.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "neighbors" as const, label: "My Neighbors", icon: "🏠" },
            { id: "voices" as const, label: "Voices", icon: "📣" },
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
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 12 }}>{t.title}</h3>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, marginBottom: 16 }}>Why We Don't (and the Gospel Response)</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {OBSTACLES.map((o, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: 16 }}>
                    <div style={{ color: "#F59E0B", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>"{o.obstacle}"</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{o.response}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {PRACTICES.map(cat => (
              <div key={cat.category} style={{ background: CARD, border: `1px solid ${cat.color}30`, borderRadius: 12, padding: 22 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ fontSize: 24 }}>{cat.icon}</span>
                  <h3 style={{ color: cat.color, fontWeight: 800, fontSize: 18, margin: 0 }}>{cat.category} Your Neighbors</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {cat.items.map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: cat.color, flexShrink: 0, marginTop: 6 }} />
                      <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "neighbors" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div>
                <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: 0 }}>Neighbor Map</h3>
                <div style={{ color: MUTED, fontSize: 13, marginTop: 4 }}>{connected} of {neighbors.length} connected</div>
              </div>
              <button type="button" onClick={() => setShowForm(!showForm)}
                style={{ padding: "8px 18px", background: PURPLE, border: "none", borderRadius: 8, color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                + Add Neighbor
              </button>
            </div>
            {showForm && (
              <div style={{ background: CARD, border: `1px solid ${PURPLE}50`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                  <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} aria-label="Name or description" placeholder="Name or description"
                    style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14 }} />
                  <input value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} aria-label="Location (next door, apt 4B...)" placeholder="Location (next door, apt 4B...)"
                    style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14 }} />
                </div>
                <textarea value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} aria-label="Notes: family situation, interests, prayer needs..." placeholder="Notes: family situation, interests, prayer needs..."
                  style={{ width: "100%", minHeight: 70, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit", marginBottom: 10 }} />
                <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                  <button type="button" onClick={() => setShowForm(false)} style={{ padding: "8px 16px", borderRadius: 8, border: `1px solid ${BORDER}`, background: "transparent", color: MUTED, cursor: "pointer" }}>Cancel</button>
                  <button type="button" onClick={addNeighbor} style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: GREEN, color: BG, fontWeight: 800, cursor: "pointer" }}>Add</button>
                </div>
              </div>
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {neighbors.map(n => (
                <div key={n.id} style={{ background: CARD, border: `1px solid ${n.connected ? GREEN + "30" : BORDER}`, borderRadius: 12, padding: 18 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{n.name}</div>
                      {n.address && <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>📍 {n.address}</div>}
                      {n.notes && <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0", lineHeight: 1.6 }}>{n.notes}</p>}
                    </div>
                    <button type="button" onClick={() => toggleConnected(n.id)}
                      style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${n.connected ? GREEN + "50" : BORDER}`, background: n.connected ? `${GREEN}15` : "transparent", color: n.connected ? GREEN : MUTED, fontSize: 12, fontWeight: 700, cursor: "pointer", flexShrink: 0, marginLeft: 12 }}>
                      {n.connected ? "✓ Connected" : "Connect"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {VOICES_NEIGH.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? PURPLE : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voiceItem.name}</h2>
                <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{voiceItem.era}</div>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>{voiceItem.context}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{voiceItem.bio}</p>
                <div style={{ background: BG, borderLeft: `3px solid ${GREEN}`, borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                  <p style={{ color: GREEN, fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${PURPLE}15`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Legacy and Contribution</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons and teachings on loving your neighbor, the Good Samaritan, and the call to practical compassion.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "AWPYQcTTcKQ", title: "The Good Samaritan: On Love of Neighbor", channel: "Tim Keller", description: "Keller unpacks the parable of the Good Samaritan and what it means to love your neighbor — even when your neighbor is someone you would rather avoid." },
                  { videoId: "UM-6IUUO6Qw", title: "Blueprint for Revival: Social Concern", channel: "Tim Keller", description: "Keller argues that genuine Christian revival always produces social concern — that love of God and love of neighbor cannot be separated in the life of the church." },
                  { videoId: "DGw_BouGdq4", title: "Good Samaritan: Go and Do Likewise", channel: "Gospel Coalition", description: "A teaching on the mandate of Luke 10:37 — 'go and do likewise' — and what it looks like to embody the neighbor-love Jesus commends in today's world." },
                  { videoId: "U2djv2fBzYE", title: "Love in the Neighborhood", channel: "Tim Keller", description: "Practical and theological reflection on what it means to intentionally love the specific neighbors God has placed around you — people, not concepts." },
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
