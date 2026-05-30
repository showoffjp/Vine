"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const WHAT_IS = [
  { title: "What Forgiveness Is Not", items: [
    "Excusing or minimizing the wrong — 'It wasn't really that bad'",
    "Reconciliation — forgiveness is one-sided; reconciliation requires two",
    "Forgetting — the memory may remain; the debt is released",
    "Condoning future behavior or removing consequences",
    "A feeling — it is a decision, often made before the feeling follows",
    "Weakness — it requires more strength than revenge",
  ]},
  { title: "What Forgiveness Is", items: [
    "Releasing the debt another person owes you — canceling the account",
    "Surrendering the right to revenge or continued punishment",
    "An act of will that may need to be repeated, not a one-time event",
    "Something you do for your own freedom as much as for theirs",
    "Possible even when the offender shows no remorse",
    "Patterned after God's forgiveness of us in Christ",
  ]},
];

const THEOLOGY = [
  { title: "The Ground of Christian Forgiveness", verse: "Ephesians 4:32", body: "'Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you' (Eph. 4:32). Paul does not say 'forgive because it is healthy' or 'because they deserve it' — he grounds forgiveness in the experience of being forgiven. The depth of Christ's forgiveness of us is the measure and the motive for our forgiveness of others. We forgive as forgiven people." },
  { title: "The Parable of the Unforgiving Servant", verse: "Matthew 18:21-35", body: "Peter asks Jesus how many times to forgive a brother — seven times? Jesus says seventy-seven times (or seventy times seven). He then tells of a servant whose enormous debt is cancelled by the king, who then refuses to cancel a tiny debt owed to him. The parable does not suggest forgiveness is earned or easy — it reveals that those who have received radical forgiveness will be transformed by it." },
  { title: "Forgiveness and Justice Are Not Opposites", verse: "Romans 12:19", body: "'Do not take revenge, my dear friends, but leave room for God's wrath' (Romans 12:19). Forgiveness does not deny that wrong was done — it entrusts justice to God rather than taking it personally. The cross is the demonstration that God takes sin supremely seriously while offering forgiveness supremely generously. In Christ, justice and mercy meet." },
  { title: "Forgiving Seventy Times Seven", verse: "Luke 17:3-4", body: "Jesus says to forgive even when the person repents, returns, and wrongs you again — repeatedly. This is not an instruction to become a doormat; it is a description of the inexhaustible nature of the forgiveness we have received. We are not to become exhausted by wrongdoing because we serve a God who is not." },
];

const STAGES = [
  { n: 1, title: "Acknowledge the Wound", color: "#EF4444", desc: "Name what happened honestly. Don't minimize. You cannot release what you won't look at. The damage is real, and pretending otherwise doesn't lead to forgiveness — it leads to suppression." },
  { n: 2, title: "Choose to Forgive", color: "#F59E0B", desc: "Make a deliberate decision to release the debt before the feeling arrives. The feeling of forgiveness often follows the act of will — it rarely precedes it. This choice may need to be made repeatedly as the wound surfaces again." },
  { n: 3, title: "Pray for the Person", color: PURPLE, desc: "This is the most difficult and most transformative step. Jesus commanded prayer for enemies (Matthew 5:44). Begin with honest prayers — 'I don't want to pray for them, but help me.' The posture of prayer for an enemy slowly loosens resentment's grip." },
  { n: 4, title: "Release Fantasies of Revenge", color: "#3B82F6", desc: "Notice when your mind returns to imagined confrontations, speeches, or vindication. Each time, consciously hand the person and the wrong to God. 'This belongs to you, not to me.' This is not done once — it is a repeated practice." },
  { n: 5, title: "Distinguish Forgiveness from Reconciliation", color: "#10B981", desc: "You can fully forgive someone and still maintain distance or boundaries for your own safety. Forgiveness releases the debt; reconciliation restores relationship. The second requires the first but also requires repentance and change from the offender." },
  { n: 6, title: "Receive Forgiveness Yourself", color: GREEN, desc: "Many who struggle to forgive others struggle even more to receive forgiveness for themselves. 1 John 1:9 is a promise. Self-condemnation beyond genuine repentance is not humility — it is a refusal to trust the sufficiency of the cross." },
];

const HARD_CASES = [
  { q: "What if the person who hurt me shows no remorse?", a: "Forgiveness does not require an apology — it is a gift, not a transaction. You release the debt for your own freedom. What you cannot do without repentance is reconcile the relationship." },
  { q: "What about abuse or serious trauma?", a: "Forgiveness does not mean returning to danger. It does not mean the offender faces no consequences. It is not quick, and it is not simple. Many abuse survivors find that forgiveness becomes possible over time through counseling, prayer, community, and the slow work of grief — but it looks different from forgiving a minor slight." },
  { q: "I've forgiven them but I still feel angry. Does that mean I haven't really forgiven?", a: "No. Emotions are not the measure of forgiveness — the will is. Forgiveness is a decision, not a feeling. The anger, grief, and hurt may persist for a long time after the decision to forgive. That's not failure; it's the normal experience of wound and healing." },
  { q: "What if I need to forgive God?", a: "Technically, God does not sin against us — but we often carry anger toward him for things that happened under his watch. Bringing that honestly to God — naming the anger, the disappointment, the confusion — is itself an act of trust. The Psalms do this repeatedly. God can handle our honest anger. Pretending we're not angry at God doesn't make us more faithful." },
];

interface ForgivenessEntry {
  id: string;
  date: string;
  person: string;
  note: string;
  released: boolean;
}

export default function ForgivenessPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "howto" | "practice">("theology");
  const [entries, setEntries] = useState<ForgivenessEntry[]>(() => {
    try { const s = localStorage.getItem("vine_forgiveness_list"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [form, setForm] = useState({ person: "", note: "" });
  const [showForm, setShowForm] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => { try { localStorage.setItem("vine_forgiveness_list", JSON.stringify(entries)); } catch {} }, [entries]);

  const addEntry = () => {
    if (!form.person) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toISOString().split("T")[0], ...form, released: false }, ...prev]);
    setForm({ person: "", note: "" });
    setShowForm(false);
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🕊️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Practice of Forgiveness</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Forgiveness is not a feeling — it is a decision. It is not weakness — it requires more strength than revenge. And it is not optional — it is the shape of a forgiven life.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "howto" as const, label: "How to Forgive", icon: "🛠️" },
            { id: "practice" as const, label: "My Practice", icon: "✍️" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
              {WHAT_IS.map((w, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${i === 0 ? "#EF444430" : GREEN + "30"}`, borderRadius: 12, padding: 20 }}>
                  <h3 style={{ color: i === 0 ? "#EF4444" : GREEN, fontWeight: 800, fontSize: 16, marginBottom: 12 }}>{w.title}</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {w.items.map((item, j) => (
                      <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                        <span style={{ color: i === 0 ? "#EF4444" : GREEN, fontSize: 14, flexShrink: 0 }}>{i === 0 ? "✗" : "✓"}</span>
                        <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.5 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 17, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "howto" && (
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 20 }}>
              {STAGES.map(s => (
                <div key={s.n} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${s.color}20`, border: `2px solid ${s.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, fontWeight: 800, fontSize: 15, flexShrink: 0 }}>{s.n}</div>
                  <div>
                    <div style={{ color: s.color, fontWeight: 800, fontSize: 16, marginBottom: 6 }}>{s.title}</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}40`, borderRadius: 12, padding: 22 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 17, marginBottom: 14 }}>Hard Cases</h3>
              {HARD_CASES.map((h, i) => (
                <div key={i} style={{ marginBottom: 12 }}>
                  <button onClick={() => setExpanded(expanded === h.q ? null : h.q)}
                    style={{ width: "100%", background: "transparent", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "12px 16px", color: GREEN, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                    <span>{h.q}</span><span style={{ color: MUTED }}>{expanded === h.q ? "−" : "+"}</span>
                  </button>
                  {expanded === h.q && (
                    <div style={{ background: BG, borderRadius: "0 0 8px 8px", padding: "12px 16px", border: `1px solid ${BORDER}`, borderTop: "none" }}>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{h.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "practice" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Name the people you are working to forgive. Writing it down makes the intention concrete. Check off as you release them.</p>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
              <button onClick={() => setShowForm(!showForm)}
                style={{ padding: "8px 18px", background: PURPLE, border: "none", borderRadius: 8, color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                + Add a Name
              </button>
            </div>
            {showForm && (
              <div style={{ background: CARD, border: `1px solid ${PURPLE}50`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
                <input value={form.person} onChange={e => setForm(f => ({ ...f, person: e.target.value }))} placeholder="Who are you forgiving?"
                  style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, marginBottom: 10, boxSizing: "border-box" }} />
                <textarea value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))} placeholder="What happened? (optional — keep it brief)"
                  style={{ width: "100%", minHeight: 70, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit", marginBottom: 10 }} />
                <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                  <button onClick={() => setShowForm(false)} style={{ padding: "8px 16px", borderRadius: 8, border: `1px solid ${BORDER}`, background: "transparent", color: MUTED, cursor: "pointer" }}>Cancel</button>
                  <button onClick={addEntry} style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: GREEN, color: BG, fontWeight: 800, cursor: "pointer" }}>Add</button>
                </div>
              </div>
            )}
            {entries.length === 0 ? (
              <div style={{ textAlign: "center", padding: 60, color: MUTED }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>🕊️</div>
                <div>No entries yet. Add a name above to begin the practice.</div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {entries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${e.released ? GREEN + "30" : BORDER}`, borderRadius: 12, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <div style={{ color: e.released ? GREEN : TEXT, fontWeight: 700, fontSize: 15, textDecoration: e.released ? "line-through" : "none" }}>{e.person}</div>
                        {e.note && <p style={{ color: MUTED, fontSize: 13, margin: "4px 0 0" }}>{e.note}</p>}
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 4 }}>{new Date(e.date + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</div>
                      </div>
                      <button onClick={() => setEntries(prev => prev.map(en => en.id === e.id ? { ...en, released: !en.released } : en))}
                        style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${e.released ? GREEN + "50" : BORDER}`, background: e.released ? `${GREEN}15` : "transparent", color: e.released ? GREEN : MUTED, fontSize: 12, fontWeight: 700, cursor: "pointer", flexShrink: 0 }}>
                        {e.released ? "✓ Released" : "Release"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
