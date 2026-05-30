"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Friendship Is a Gift of Creation, Not Just Need", verse: "Genesis 2:18", body: "'It is not good for the man to be alone' (Genesis 2:18). God declared this before the Fall — not as a consequence of sin but as a feature of his good creation. Humans were made for community. The desire for friendship is not weakness or codependency — it is the correct desire of creatures made in the image of a God who is himself relational (the Trinity)." },
  { title: "Jonathan and David: The Biblical Model", verse: "1 Samuel 18:1-4", body: "'The soul of Jonathan was knit to the soul of David, and Jonathan loved him as his own soul' (1 Sam. 18:1). Their friendship is the richest portrait of friendship in Scripture — marked by covenant commitment ('sworn friendship'), self-sacrifice (Jonathan gave David his own robe, armor, sword), and loyalty through profound personal cost. Jonathan risked his father's wrath to protect David. This is the biblical standard: friendship that costs something." },
  { title: "Iron Sharpens Iron", verse: "Proverbs 27:17", body: "'As iron sharpens iron, so one person sharpens another' (Proverbs 27:17). Biblical friendship is not merely comfort — it is transformation. The image of iron sharpening iron includes friction. Real friendship includes honest confrontation of blind spots, weakness, and sin. A friend who only affirms is not a friend; they are a flatterer. The person willing to tell you the hard truth at cost to the relationship is the one who loves you." },
  { title: "Jesus Called His Disciples Friends", verse: "John 15:13-15", body: "'Greater love has no one than this: to lay down one's life for one's friends... I no longer call you servants, because a servant does not know his master's business. Instead, I have called you friends' (John 15:13, 15). Jesus elevates the disciples from servants to friends — a stunning declaration. Friendship with Christ is the model and the source of all other friendship. He lays down his life; we lay down ours. We know his secrets (his word); we share ours with each other." },
  { title: "Chosen Community: Not Just Family and Colleagues", verse: "Romans 12:10", body: "'Be devoted to one another in love. Honor one another above yourselves' (Romans 12:10). The Greek word is philostorgos — a compound of the love of family and the love of affection. The NT describes the church as a chosen family, not merely an organization. Christians are called to a level of devotion typically reserved for blood relatives. This is intentional, chosen, and covenantal." },
];

const OBSTACLES = [
  { ob: "Busyness", desc: "Friendship requires time — not efficient time, but unhurried time. The modern tendency to optimize every hour is antithetical to the slow, meandering conversations where friendship deepens.", remedy: "Block time for unstructured relationship. Say no to productive commitments that crowd out relational ones. Eat meals with people rather than alone." },
  { ob: "Mobility and Transition", desc: "Moving for jobs, school, and life stages breaks friendship networks repeatedly. Building deep community takes years — and is repeatedly interrupted.", remedy: "Grieve the loss of previous friendships; make genuine effort to initiate in new communities. Commit to a church in each place you live — it creates immediate, structured community." },
  { ob: "Screen-Mediated Relationships", desc: "Digital connection creates the feeling of friendship without its substance. Following someone on social media is not friendship.", remedy: "Distinguish between connections and friendships. Digital tools can supplement but cannot replace in-person, embodied, shared-life relationship." },
  { ob: "Fear of Rejection", desc: "Initiating friendship requires vulnerability — and vulnerability risks rejection. The protection strategy of staying acquaintance-level prevents the wound but also prevents the depth.", remedy: "Invest in 2-3 people rather than maintaining 20 acquaintances. Accept that some initiatives won't be reciprocated, and that's not a verdict on your worth." },
  { ob: "The Friendship Gap After College", desc: "Adult friendship is structurally harder than college or childhood friendship — it is no longer ambient and must be deliberately pursued.", remedy: "Join a small group. Volunteer consistently in one place. Invite people proactively. Host a dinner. Be the one who initiates more than you feel you should have to." },
];

const PRACTICES = [
  "Initiate more than you think is fair — someone has to go first",
  "Share something vulnerable before it's comfortable",
  "Show up when it's inconvenient — this is what distinguishes friend from acquaintance",
  "Ask deeper questions: not 'How are you?' but 'What's actually hard right now?'",
  "Remember and follow up — check in on what someone shared last time you talked",
  "Do life together, not just scheduled meetings — invite people into ordinary things",
  "Celebrate genuinely — take time to mark milestones and victories in others' lives",
  "Be honest even when it costs you — a friend who won't tell the truth isn't one",
  "Pray for your friends by name and tell them you did",
  "Commit to at least one friendship long-term through all transitions",
];

interface Friend {
  id: string;
  name: string;
  notes: string;
  lastContact: string;
}

const SEED: Friend[] = [
  { id: "1", name: "Marcus", notes: "Going through a career transition. Pray for him. Check in monthly.", lastContact: "2026-05-10" },
  { id: "2", name: "Sarah & Tom", notes: "New baby in March. Could use a meal or help with kids.", lastContact: "2026-04-28" },
  { id: "3", name: "James", notes: "Old college friend — we talk every few months. Don't let that slide.", lastContact: "2026-03-15" },
];

export default function FriendshipPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "obstacles" | "practice">("theology");
  const [friends, setFriends] = useState<Friend[]>(() => {
    try { const s = localStorage.getItem("vine_friendship_list"); return s ? JSON.parse(s) : SEED; } catch { return SEED; }
  });
  const [form, setForm] = useState({ name: "", notes: "" });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => { try { localStorage.setItem("vine_friendship_list", JSON.stringify(friends)); } catch {} }, [friends]);

  const addFriend = () => {
    if (!form.name) return;
    setFriends(prev => [{ id: Date.now().toString(), ...form, lastContact: new Date().toISOString().split("T")[0] }, ...prev]);
    setForm({ name: "", notes: "" });
    setShowForm(false);
  };

  const touchFriend = (id: string) => {
    setFriends(prev => prev.map(f => f.id === id ? { ...f, lastContact: new Date().toISOString().split("T")[0] } : f));
  };

  const daysSince = (date: string) => Math.floor((Date.now() - new Date(date + "T12:00:00").getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🤝</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Friendship</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            'It is not good for man to be alone.' Friendship is not a luxury — it is a creation-given need, a spiritual discipline, and a witness to a watching world.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "obstacles" as const, label: "Obstacles", icon: "🚧" },
            { id: "practice" as const, label: "My Friends", icon: "🤝" },
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

        {activeTab === "obstacles" && (
          <div>
            {OBSTACLES.map((o, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ color: "#EF4444", fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{o.ob}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{o.desc}</p>
                <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}25`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: GREEN, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>REMEDY</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{o.remedy}</p>
                </div>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 12, padding: 22 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 17, marginBottom: 14 }}>Practices of Friendship</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {PRACTICES.map((p, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: PURPLE, flexShrink: 0, marginTop: 7 }} />
                    <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.55 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "practice" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: 0 }}>Friends to Invest In</h3>
              <button onClick={() => setShowForm(!showForm)}
                style={{ padding: "8px 18px", background: PURPLE, border: "none", borderRadius: 8, color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                + Add Friend
              </button>
            </div>
            {showForm && (
              <div style={{ background: CARD, border: `1px solid ${PURPLE}50`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
                <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Friend's name"
                  style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, marginBottom: 10, boxSizing: "border-box" }} />
                <textarea value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} placeholder="Prayer needs, what to follow up on, how you can serve them..."
                  style={{ width: "100%", minHeight: 70, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit", marginBottom: 10 }} />
                <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                  <button onClick={() => setShowForm(false)} style={{ padding: "8px 16px", borderRadius: 8, border: `1px solid ${BORDER}`, background: "transparent", color: MUTED, cursor: "pointer" }}>Cancel</button>
                  <button onClick={addFriend} style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: GREEN, color: BG, fontWeight: 800, cursor: "pointer" }}>Add</button>
                </div>
              </div>
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {friends.map(f => {
                const days = daysSince(f.lastContact);
                const color = days > 60 ? "#EF4444" : days > 30 ? "#F59E0B" : GREEN;
                return (
                  <div key={f.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <div style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{f.name}</div>
                        <div style={{ color: color, fontSize: 12, fontWeight: 600, marginBottom: 4 }}>{days === 0 ? "Contacted today" : `${days} days since last contact`}</div>
                        {f.notes && <p style={{ color: MUTED, fontSize: 13, margin: 0, lineHeight: 1.6 }}>{f.notes}</p>}
                      </div>
                      <button onClick={() => touchFriend(f.id)}
                        style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${GREEN}50`, background: `${GREEN}15`, color: GREEN, fontSize: 12, fontWeight: 700, cursor: "pointer", flexShrink: 0, marginLeft: 12 }}>
                        Mark Contact
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
