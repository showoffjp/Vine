"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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
  const [activeTab, setActiveTab] = useState<"theology" | "practices" | "neighbors">("theology");
  const [neighbors, setNeighbors] = useState<NeighborEntry[]>(() => {
    try { const s = localStorage.getItem("vine_neighbor_list"); return s ? JSON.parse(s) : SEED_NEIGHBORS; } catch { return SEED_NEIGHBORS; }
  });
  const [form, setForm] = useState({ name: "", address: "", notes: "" });
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
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
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
              <button onClick={() => setShowForm(!showForm)}
                style={{ padding: "8px 18px", background: PURPLE, border: "none", borderRadius: 8, color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                + Add Neighbor
              </button>
            </div>
            {showForm && (
              <div style={{ background: CARD, border: `1px solid ${PURPLE}50`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                  <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Name or description"
                    style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14 }} />
                  <input value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} placeholder="Location (next door, apt 4B...)"
                    style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14 }} />
                </div>
                <textarea value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} placeholder="Notes: family situation, interests, prayer needs..."
                  style={{ width: "100%", minHeight: 70, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit", marginBottom: 10 }} />
                <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                  <button onClick={() => setShowForm(false)} style={{ padding: "8px 16px", borderRadius: 8, border: `1px solid ${BORDER}`, background: "transparent", color: MUTED, cursor: "pointer" }}>Cancel</button>
                  <button onClick={addNeighbor} style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: GREEN, color: BG, fontWeight: 800, cursor: "pointer" }}>Add</button>
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
                    <button onClick={() => toggleConnected(n.id)}
                      style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${n.connected ? GREEN + "50" : BORDER}`, background: n.connected ? `${GREEN}15` : "transparent", color: n.connected ? GREEN : MUTED, fontSize: 12, fontWeight: 700, cursor: "pointer", flexShrink: 0, marginLeft: 12 }}>
                      {n.connected ? "✓ Connected" : "Connect"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
