"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

interface PrayerItem {
  id: string;
  name: string;
  category: string;
  request: string;
  dateAdded: string;
  answered: boolean;
  answeredNote: string;
  priority: "high" | "medium" | "low";
}

const CATEGORIES = ["Family", "Friends", "Church", "Nation", "World", "Healing", "Salvation", "Missions", "Personal"];
const CATEGORY_COLORS: Record<string, string> = {
  Family: "#F59E0B", Friends: "#10B981", Church: "#8B5CF6", Nation: "#3B82F6",
  World: "#EC4899", Healing: "#EF4444", Salvation: "#3a7d56", Missions: "#F97316", Personal: "#6B7280"
};

const SEED_ITEMS: PrayerItem[] = [
  { id: "1", name: "Mom & Dad", category: "Family", request: "Health, peace in their marriage, and their continued walk with God through this season of life.", dateAdded: "2026-05-01", answered: false, answeredNote: "", priority: "high" },
  { id: "2", name: "James (coworker)", category: "Salvation", request: "He's open to conversations about faith. Pray for an opportunity and that his heart would be receptive.", dateAdded: "2026-04-15", answered: false, answeredNote: "", priority: "high" },
  { id: "3", name: "Pastor David", category: "Church", request: "Wisdom and protection as he leads through a season of transition. That he would not grow weary.", dateAdded: "2026-04-20", answered: false, answeredNote: "", priority: "medium" },
  { id: "4", name: "Ukraine / Gaza", category: "World", request: "Peace in conflict zones. Protection of civilians. That the gospel would advance even in suffering.", dateAdded: "2026-03-10", answered: false, answeredNote: "", priority: "medium" },
  { id: "5", name: "Sarah's cancer diagnosis", category: "Healing", request: "Miraculous healing. Peace that passes understanding. That she would experience God's presence powerfully.", dateAdded: "2026-05-10", answered: false, answeredNote: "", priority: "high" },
  { id: "6", name: "Job search - Michael", category: "Personal", request: "He's been out of work 3 months. Financial provision, open doors, and peace through the uncertainty.", dateAdded: "2026-04-01", answered: true, answeredNote: "Got a great offer — better than his previous job! God is faithful.", priority: "medium" },
];

const MODELS = [
  {
    name: "The Daniel Model",
    icon: "🦁",
    color: "#F59E0B",
    basis: "Daniel 9 — Daniel's great intercession for Israel",
    structure: [
      { step: "Confession", desc: "Daniel confessed the sins of his people before interceding — not just his own sins but corporate sin. Corporate intercession requires corporate honesty." },
      { step: "Appeal to God's Character", desc: "He didn't appeal to Israel's righteousness but to God's mercy: 'We do not present our pleas before you because of our righteousness, but because of your great mercy' (Dan 9:18)." },
      { step: "Specific Request", desc: "Daniel prayed specifically: for the restoration of Jerusalem, the end of exile, the return of God's favor to the sanctuary." },
      { step: "Urgency Without Presumption", desc: "He ended with 'do not delay, for your own sake' — passionate without being manipulative. He cared about God's reputation and purposes, not merely Israel's comfort." },
    ],
  },
  {
    name: "The Persistent Widow",
    icon: "⚖️",
    color: "#8B5CF6",
    basis: "Luke 18:1-8 — Jesus' parable on persistent prayer",
    structure: [
      { step: "Pray and Not Give Up", desc: "Jesus told this parable specifically so that his disciples 'should always pray and not give up' (Luke 18:1). Persistence is the point." },
      { step: "God Is Not the Unjust Judge", desc: "If an unjust judge grants justice to a persistent widow, how much more will a just and loving God answer his chosen ones? The parable argues from lesser to greater." },
      { step: "Return Again and Again", desc: "Write the prayer request down. Return to it. Keep bringing it to God. Mark the dates. Don't abandon what you've started interceding for." },
      { step: "Watch for Faith at His Return", desc: "Jesus ends with a question: 'When the Son of Man comes, will he find faith on earth?' Persistent prayer is an expression of faith that God hears and acts." },
    ],
  },
  {
    name: "Identified Intercession",
    icon: "🔗",
    color: "#10B981",
    basis: "Numbers 14; Nehemiah 1 — intercession that identifies with the one being prayed for",
    structure: [
      { step: "Enter Their Situation", desc: "Moses prayed: 'Lord, your people...' — he didn't separate himself from Israel's sin but stood with them. Nehemiah wept, fasted, and confessed 'we have sinned' — though he was personally righteous." },
      { step: "Intercede With Full Heart Investment", desc: "This is not casual petition but agonizing on behalf of others. Paul 'could wish that I myself were accursed' for his people (Rom 9:3). Intercession has emotional weight." },
      { step: "Ask for What They Need, Not What Is Easy", desc: "Don't settle for comfort prayers. Ask for healing, salvation, breakthrough, transformation — specific and bold outcomes that would require God to act." },
      { step: "Sustain Over Time", desc: "Identified intercession is sustained — Nehemiah prayed for four months before acting. Build a list. Return to it. Watch what God does over weeks and months." },
    ],
  },
];

const VOICES_INTER = [
  { id: "bounds", name: "E.M. Bounds", era: "1835-1913", context: "Power Through Prayer (1907); The Possibilities of Prayer; former Confederate soldier turned prayer author", bio: "Bounds wrote nine books on prayer, all published posthumously, and died at 78 after rising at 4am every day for decades to spend three hours in prayer before breakfast. His writing has the force of someone who has spent more time in actual prayer than most people spend reading about it. Power Through Prayer opens: 'What the Church needs today is not more machinery or better, not new organizations or more and novel methods, but men whom the Holy Ghost can use — men of prayer, men mighty in prayer.' His insistence that the preacher's effectiveness is inseparable from his private prayer life is the central argument of his entire output.", quote: "The prayers of God's saints are the capital stock of heaven by which God carries on His great work upon the earth. God conditions the very life and prosperity of His cause on prayer.", contribution: "Established intercession as the primary work of the Christian — not an add-on to ministry but its foundation. His personal example of sustained early-morning prayer gave his writing moral authority that theological argument alone could not provide." },
  { id: "murray-i", name: "Andrew Murray", era: "1828-1917", context: "With Christ in the School of Prayer (1885); The Ministry of Intercession (1897); South African pastor", bio: "Murray's The Ministry of Intercession is the most detailed treatment of intercessory prayer by a 19th-century evangelical writer. He argues that intercession is not a supplementary Christian activity but a participation in Christ's own ongoing priestly intercession — the believer joins Jesus in his continuing work of intercession at the right hand of the Father. His chapters on the role of the Spirit, the importance of faith, and the specific forms intercession should take remain the most practically useful account of intercessory prayer in the devotional tradition.", quote: "The man who mobilizes the Christian church to pray will make the greatest contribution to world evangelization in history.", contribution: "Made intercessory prayer the central discipline of the Christian life rather than a private devotional accessory. His prolific output on prayer shaped every subsequent evangelical treatment of intercession." },
  { id: "rees-howells", name: "Rees Howells", era: "1879-1950", context: "Intercessor (biography by Norman Grubb, 1952); Bible College of Wales; prayed through WWII", bio: "Howells's biography Intercessor (written by Norman Grubb) is one of the most extraordinary accounts of intercessory prayer in Christian history. As director of the Bible College of Wales during World War II, Howells led his community in regular extended intercession for specific military situations — the evacuation at Dunkirk, the Battle of Britain, the North African campaign — with a specificity and urgency that produced extraordinary documented answers. His concept of 'intercession' involved identification with the people prayed for — a willingness to bear their burden before God — not merely petitioning on their behalf.", quote: "God can do nothing but answer prayer — that is his nature. The man who intercedes on God's behalf is doing God's own work.", contribution: "Documented one of the most sustained and specific experiments in strategic intercessory prayer in modern history. The Bible College of Wales intercessions during WWII remain the most detailed first-hand account of corporate intercession engaging specific historical events." },
  { id: "hybels", name: "Bill Hybels", era: "b. 1951", context: "Too Busy Not to Pray (1988); Willow Creek Community Church founder", bio: "Hybels's Too Busy Not to Pray is one of the most widely used evangelical introductions to prayer, including intercession. His contribution is not theological depth but practical accessibility — his ACTS prayer model (Adoration, Confession, Thanksgiving, Supplication), his journal-based prayer method, and his account of finding a regular prayer rhythm despite the crushing busyness of leading a megachurch have given ordinary Christians a foothold in prayer practice. The book's title captures its argument: the busier your life, the more you need sustained prayer, not less.", quote: "Authentic Christianity is not learning a set of doctrines and then trying to live by them. It is a dynamic, living relationship with God.", contribution: "Made systematic intercession accessible to busy evangelical professionals who found traditional devotional models unrealistic. Too Busy Not to Pray sold millions of copies and established the ACTS framework as the most common evangelical prayer structure." },
  { id: "yancey-i", name: "Philip Yancey", era: "b. 1949", context: "Prayer: Does It Make Any Difference? (2006); Where Is God When It Hurts?", bio: "Yancey's Prayer: Does It Make Any Difference? is the most honest evangelical book about the difficulties of intercession — the unanswered prayers, the apparent silence of God, the theological puzzles about whether prayer changes God or only the person praying. Rather than resolving these difficulties quickly, Yancey inhabits them — drawing on personal experience, theology, and stories of people whose prayers have been answered and not answered. His conclusion: prayer changes the pray-er before it changes circumstances, but it also genuinely moves God in ways that remain mysterious.", quote: "Prayer is not a way of getting God to do what we want but a way of being with the God who does what he wills.", contribution: "Gave intellectual Christians permission to struggle honestly with intercession rather than performing certainty they didn't have. Prayer: Does It Make Any Difference? addressed the actual experience of prayer — including disappointment and confusion — rather than the idealized version." },
];

export default function IntercessionPage() {
  const [activeTab, setActiveTab] = usePersistedState<"list" | "models" | "voices" | "howto" | "videos">("vine_intercession_tab", "list");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_intercession_voice", "bounds");
  const voiceItem = VOICES_INTER.find(v => v.id === selectedVoice)!;
  const [items, setItems] = useState<PrayerItem[]>(() => {
    try { const s = localStorage.getItem("vine_intercession_items"); return s ? JSON.parse(s) : SEED_ITEMS; } catch { return SEED_ITEMS; }
  });
  const [showForm, setShowForm] = useState(false);
  const [filterCat, setFilterCat] = usePersistedState("vine_intercession_filter_cat", "All");
  const [filterAnswered, setFilterAnswered] = usePersistedState<"all" | "active" | "answered">("vine_intercession_filter_answered", "active");
  const [expandedModel, setExpandedModel] = useState<string | null>("The Daniel Model");
  const [form, setForm] = useState<{ name: string; category: string; request: string; priority: "high" | "medium" | "low" }>(() => {
    try { const s = localStorage.getItem("vine_intercession_draft"); return s ? JSON.parse(s) : { name: "", category: "Family", request: "", priority: "medium" as "high" | "medium" | "low" }; } catch { return { name: "", category: "Family", request: "", priority: "medium" as "high" | "medium" | "low" }; }
  });

  useEffect(() => { try { localStorage.setItem("vine_intercession_items", JSON.stringify(items)); } catch {} }, [items]);
  useEffect(() => {
    try { localStorage.setItem("vine_intercession_draft", JSON.stringify(form)); } catch {}
  }, [form]);

  const addItem = () => {
    if (!form.name || !form.request) return;
    const newItem: PrayerItem = {
      id: Date.now().toString(),
      name: form.name,
      category: form.category,
      request: form.request,
      dateAdded: new Date().toISOString().split("T")[0],
      answered: false,
      answeredNote: "",
      priority: form.priority,
    };
    setItems(prev => [newItem, ...prev]);
    setForm({ name: "", category: "Family", request: "", priority: "medium" });
    setShowForm(false);
  };

  const markAnswered = (id: string, note: string) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, answered: true, answeredNote: note } : item));
  };

  const deleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const filtered = items.filter(item => {
    if (filterCat !== "All" && item.category !== filterCat) return false;
    if (filterAnswered === "active" && item.answered) return false;
    if (filterAnswered === "answered" && !item.answered) return false;
    return true;
  });

  const highCount = items.filter(i => i.priority === "high" && !i.answered).length;
  const answeredCount = items.filter(i => i.answered).length;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 48, marginBottom: 10 }}>🕊️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Intercession</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 540, margin: "0 auto" }}>
            Standing in the gap for others — intercession is one of the most powerful and least practiced forms of prayer.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 20px", textAlign: "center" }}>
              <div style={{ color: "#EF4444", fontWeight: 900, fontSize: 24 }}>{highCount}</div>
              <div style={{ color: MUTED, fontSize: 12 }}>High Priority</div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 20px", textAlign: "center" }}>
              <div style={{ color: GREEN, fontWeight: 900, fontSize: 24 }}>{answeredCount}</div>
              <div style={{ color: MUTED, fontSize: 12 }}>Answered Prayers</div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 20px", textAlign: "center" }}>
              <div style={{ color: PURPLE, fontWeight: 900, fontSize: 24 }}>{items.length}</div>
              <div style={{ color: MUTED, fontSize: 12 }}>Total Intercessions</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "list" as const, label: "Prayer List", icon: "📋" },
            { id: "models" as const, label: "Biblical Models", icon: "📖" },
            { id: "voices" as const, label: "Voices", icon: "💬" },
            { id: "howto" as const, label: "How to Intercede", icon: "🗺️" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "list" && (
          <div>
            {/* Filters */}
            <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
              <div style={{ display: "flex", gap: 6 }}>
                {(["active", "answered", "all"] as const).map(f => (
                  <button type="button" key={f} onClick={() => setFilterAnswered(f)}
                    style={{ padding: "5px 12px", borderRadius: 20, border: `1px solid ${filterAnswered === f ? GREEN : BORDER}`, background: filterAnswered === f ? `${GREEN}15` : "transparent", color: filterAnswered === f ? GREEN : MUTED, fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                    {f === "active" ? "Active" : f === "answered" ? "Answered ✓" : "All"}
                  </button>
                ))}
              </div>
              <select aria-label="Filtercat" value={filterCat} onChange={e => setFilterCat(e.target.value)}
                style={{ padding: "5px 10px", borderRadius: 8, border: `1px solid ${BORDER}`, background: CARD, color: TEXT, fontSize: 12, cursor: "pointer" }}>
                <option value="All">All Categories</option>
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <button type="button" onClick={() => setShowForm(!showForm)}
                style={{ marginLeft: "auto", padding: "8px 16px", background: PURPLE, border: "none", borderRadius: 8, color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                + Add
              </button>
            </div>

            {showForm && (
              <div style={{ background: CARD, border: `1px solid ${PURPLE}50`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
                <h4 style={{ color: PURPLE, fontWeight: 700, marginBottom: 14 }}>New Intercession</h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                  <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    aria-label="Person / situation name" placeholder="Person / situation name"
                    style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14 }} />
                  <select aria-label="Name" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                    style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14 }}>
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <textarea value={form.request} onChange={e => setForm(f => ({ ...f, request: e.target.value }))}
                  aria-label="Specific prayer request..." placeholder="Specific prayer request..."
                  style={{ width: "100%", minHeight: 80, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit", marginBottom: 12 }} />
                <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                  <button type="button" onClick={() => setShowForm(false)} style={{ padding: "8px 16px", borderRadius: 8, border: `1px solid ${BORDER}`, background: "transparent", color: MUTED, cursor: "pointer", fontWeight: 600 }}>Cancel</button>
                  <button type="button" onClick={addItem} style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: GREEN, color: BG, fontWeight: 800, cursor: "pointer" }}>Add Prayer</button>
                </div>
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {filtered.length === 0 && (
                <div style={{ textAlign: "center", padding: 40, color: MUTED }}>No items in this filter. Add your first intercession above.</div>
              )}
              {filtered.map(item => {
                const catColor = CATEGORY_COLORS[item.category] || MUTED;
                return (
                  <div key={item.id} style={{ background: CARD, border: `1px solid ${item.answered ? GREEN + "30" : item.priority === "high" ? "#EF444430" : BORDER}`, borderRadius: 12, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ color: item.answered ? GREEN : TEXT, fontWeight: 800, fontSize: 15 }}>{item.name}</span>
                          <span style={{ background: catColor + "20", color: catColor, padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 700 }}>{item.category}</span>
                          {item.priority === "high" && <span style={{ background: "#EF444420", color: "#EF4444", padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 700 }}>High Priority</span>}
                          {item.answered && <span style={{ background: `${GREEN}20`, color: GREEN, padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 700 }}>✓ Answered</span>}
                        </div>
                        <p style={{ color: MUTED, fontSize: 13, margin: "6px 0 0", lineHeight: 1.55 }}>{item.request}</p>
                        {item.answered && item.answeredNote && (
                          <div style={{ marginTop: 8, background: `${GREEN}10`, borderRadius: 6, padding: "6px 10px" }}>
                            <p style={{ color: GREEN, fontSize: 12, margin: 0 }}>🙏 {item.answeredNote}</p>
                          </div>
                        )}
                      </div>
                      <div style={{ display: "flex", gap: 6, flexShrink: 0, marginLeft: 10 }}>
                        {!item.answered && (
                          <button type="button" onClick={() => {
                            const note = prompt("How did God answer this prayer?") || "";
                            markAnswered(item.id, note);
                          }} style={{ padding: "5px 10px", borderRadius: 6, border: `1px solid ${GREEN}50`, background: `${GREEN}15`, color: GREEN, fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                            Answered ✓
                          </button>
                        )}
                        <button type="button" onClick={() => deleteItem(item.id)} style={{ padding: "5px 8px", borderRadius: 6, border: `1px solid ${BORDER}`, background: "transparent", color: MUTED, fontSize: 12, cursor: "pointer" }}>✕</button>
                      </div>
                    </div>
                    <div style={{ color: MUTED, fontSize: 11, marginTop: 8 }}>Added {new Date(item.dateAdded + "T12:00:00").toLocaleDateString()}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === "models" && (
          <div>
            {MODELS.map(model => {
              const open = expandedModel === model.name;
              return (
                <div key={model.name} style={{ background: CARD, border: `1px solid ${open ? model.color + "50" : BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button type="button" onClick={() => setExpandedModel(open ? null : model.name)}
                    style={{ width: "100%", padding: "18px 22px", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, textAlign: "left" }}>
                      <span style={{ fontSize: 28 }}>{model.icon}</span>
                      <div>
                        <div style={{ color: model.color, fontWeight: 800, fontSize: 17 }}>{model.name}</div>
                        <div style={{ color: MUTED, fontSize: 12 }}>{model.basis}</div>
                      </div>
                    </div>
                    <span style={{ color: MUTED, fontSize: 20 }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ padding: "0 22px 22px" }}>
                      {model.structure.map((s, i) => (
                        <div key={i} style={{ display: "flex", gap: 14, marginBottom: 16 }}>
                          <div style={{ width: 26, height: 26, borderRadius: "50%", background: `${model.color}20`, border: `1px solid ${model.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: model.color, fontWeight: 900, fontSize: 12, flexShrink: 0 }}>{i + 1}</div>
                          <div>
                            <div style={{ color: model.color, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{s.step}</div>
                            <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {VOICES_INTER.map(v => (
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
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Contribution to Intercession Theology</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "howto" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 26, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 14 }}>What Makes Intercession Different?</h3>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 12 }}>
                Intercession is standing between God and another person — coming before the throne on their behalf. Unlike personal petition (asking for yourself), intercession requires love and attention directed outward. It is an act of priestly ministry: every believer is a priest (1 Peter 2:9) with access to bring others before God.
              </p>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15 }}>
                The most powerful intercessors in Scripture were those who cared deeply: Moses interceded so passionately he offered to be blotted from God's book (Exod 32:32). Paul experienced "great sorrow and unceasing anguish" for his people (Rom 9:2). Intercession is not passive — it is warfare waged through prayer.
              </p>
            </div>
            {[
              { title: "Practical Intercession Habits", icon: "⏰", tips: ["Set aside a dedicated time — 15 minutes daily or a longer session weekly", "Keep a written list (the Prayer List tab) — vague intentions die, written ones survive", "Pray specifically — names, situations, outcomes. 'Lord, bless everyone' is barely prayer", "Return to the same requests consistently — not once but weekly, monthly", "Track answers — written evidence of God's faithfulness fuels future faith"] },
              { title: "What to Pray For", icon: "🎯", tips: ["Salvation of specific people — name them, pray for open hearts and divine appointments", "The sick — healing, peace, the presence of Christ in suffering", "Leaders — church leaders, government officials, community influencers", "The persecuted church — brothers and sisters in danger globally", "Your city — its spiritual atmosphere, its leaders, its poor and forgotten"] },
              { title: "When Answers Are Delayed", icon: "⏳", tips: ["Daniel prayed for 21 days before an angel arrived — there was a battle in progress (Dan 10:12-13)", "Don't confuse delayed with denied — God's timing is not ours", "Continue to pray even when you don't see change — faith sustains intercession across months and years", "Ask God to show you how to pray — sometimes the Spirit redirects our intercession (Romans 8:26)", "Record the date you started — when the breakthrough comes, you'll want the full story"] },
            ].map(section => (
              <div key={section.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 17, marginBottom: 12 }}>{section.icon} {section.title}</h3>
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  {section.tips.map((tip, i) => <li key={i} style={{ color: TEXT, fontSize: 14, lineHeight: 1.65, marginBottom: 8 }}>{tip}</li>)}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on intercession and prayer.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "poswQjoLG6I", title: "Real Friendship & Pleading as Priest", channel: "Tim Keller", description: "Keller explores the intercessory dimension of friendship — how true care for others naturally expresses itself in prayer on their behalf." },
                  { videoId: "C2RuS8dPBjw", title: "Petitions, Prayers, Intercessions", channel: "Gospel Coalition", description: "A biblical exposition of 1 Timothy 2:1 unpacking the four types of prayer Paul commands, with special attention to intercession for all people." },
                  { videoId: "J_rViLK1vG4", title: "Does Prayer Really Change Things?", channel: "Tim Keller", description: "Keller addresses the classic philosophical question about prayer and divine sovereignty, showing why intercession matters even if God is in control." },
                  { videoId: "EuaBCmk4L_I", title: "Prayer: Experiencing Awe and Intimacy", channel: "Tim Keller", description: "A rich exposition of the nature of prayer as both access to a sovereign God and intimacy with a loving Father — the two impulses that sustain intercession." },
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
      <Footer />
    </div>
  );
}
