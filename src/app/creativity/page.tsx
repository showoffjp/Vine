"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const MEDIUMS = [
  { id: "writing", name: "Writing", icon: "✍️", color: "#3B82F6", forms: ["Poetry", "Journaling", "Fiction", "Essays", "Liturgy"], prompt: "Write a poem about a moment when you sensed God's presence unexpectedly. Don't aim for theological precision — aim for honesty." },
  { id: "visual", name: "Visual Art", icon: "🎨", color: "#EC4899", forms: ["Painting", "Drawing", "Photography", "Calligraphy", "Collage"], prompt: "Create a visual representation of a Psalm you love. It doesn't have to be beautiful — it has to be honest." },
  { id: "music", name: "Music", icon: "🎵", color: "#F59E0B", forms: ["Songwriting", "Worship Leading", "Instrumental", "Choir", "Producing"], prompt: "Write two lines of a song that captures where you are right now with God. Just two lines. That's enough to start." },
  { id: "craft", name: "Craft & Making", icon: "🧵", color: "#10B981", forms: ["Woodworking", "Pottery", "Weaving", "Sewing", "Gardening"], prompt: "Make something with your hands this week — and as you make it, notice what the act of creation reveals about the Creator." },
  { id: "storytelling", name: "Storytelling", icon: "📖", color: "#8B5CF6", forms: ["Preaching", "Podcasting", "Film", "Photography Essays", "Oral Tradition"], prompt: "Tell the story of your conversion — or a key moment in your faith — as if you were writing it for a reader who doesn't know you." },
  { id: "movement", name: "Movement & Dance", icon: "💃", color: "#F97316", forms: ["Liturgical Dance", "Drama", "Mime", "Movement Worship"], prompt: "Move your body in prayer today — arms raised, kneeling, standing, walking. Let your body express what words can't." },
];

const THEOLOGY_OF_CREATIVITY = [
  { title: "Imago Dei: Made in the Image of a Creator", body: "The very first thing Genesis tells us about God is that he creates (Genesis 1:1). The first thing it tells us about humans is that we are made in his image (1:26-27). Creativity is not peripheral to what it means to be human — it is central. To create is to act in the image of God. Every poem, painting, song, and crafted object is an echo of the divine image in which the maker was made." },
  { title: "Beauty Is Not Decoration — It Is Witness", body: "When God designed the tabernacle, he did not settle for functional — he commanded beauty: gold, acacia wood, blue and purple and scarlet thread, cherubim sewn with skilled hands (Exodus 25-31). He called Bezalel and filled him with the Spirit specifically for artistic work (Exodus 31:1-5). Beauty in worship is not an add-on for those with aesthetic taste — it is a theological statement about the God being worshiped." },
  { title: "The Prophets Were Poets", body: "Isaiah, Jeremiah, Amos, Hosea — the prophetic tradition was profoundly artistic. They used metaphor, symbol, dramatic performance (Jeremiah breaking pottery, Hosea's marriage), imagery, and poetry to communicate what propositional prose could not. The most theologically dense literature in the Old Testament is also the most literary. God chose artists to speak his words." },
  { title: "Creation Care and Sub-Creation", body: "J.R.R. Tolkien coined the term 'sub-creation' — the idea that when humans create stories, worlds, and art, they are participating in God's creative work as his image-bearers. Creativity is not imitating God from the outside — it is being what we were designed to be. Our creativity is embedded in his, participating in the ongoing work of the Creator." },
];

const OBSTACLES = [
  { obstacle: "Perfectionism", desc: "The refusal to make anything imperfect — which guarantees nothing is made at all.", response: "The enemy of creative work is perfectionism. Make the bad version. Get it out. The 10th attempt will be better than the perfect idea that never got made." },
  { obstacle: "Comparison", desc: "Your work measured against the best work ever made — an unfair standard that silences before the pen touches paper.", response: "Comparison is a thief. You are not making work to compete with anyone. You are making work because you were made to create. The standard is faithfulness to your calling, not excellence on someone else's scale." },
  { obstacle: "Waiting for Inspiration", desc: "The myth that great creative work waits for a feeling before it begins.", response: "Professional creatives make work on schedule. Inspiration visits those who are already working. Sit down. Begin. The feeling often follows the beginning rather than preceding it." },
  { obstacle: "Fear of Judgment", desc: "The anticipation of others' response silencing the work before it's made.", response: "Make the work for an audience of one — God. Then decide what to do with it. The evaluation that matters most comes from the one who gave you the creative impulse in the first place." },
];

interface Project {
  id: string;
  title: string;
  medium: string;
  status: "idea" | "in-progress" | "complete";
  notes: string;
  date: string;
}

const STATUS_COLORS: Record<string, string> = { "idea": MUTED, "in-progress": "#F59E0B", "complete": GREEN };

export default function CreativityPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "mediums" | "projects">("theology");
  const [projects, setProjects] = useState<Project[]>(() => {
    try { const s = localStorage.getItem("vine_creativity_projects"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", medium: "Writing", notes: "" });
  const [selectedMedium, setSelectedMedium] = useState("writing");

  useEffect(() => { try { localStorage.setItem("vine_creativity_projects", JSON.stringify(projects)); } catch {} }, [projects]);

  const addProject = () => {
    if (!form.title) return;
    setProjects(prev => [{
      id: Date.now().toString(),
      title: form.title,
      medium: form.medium,
      status: "idea",
      notes: form.notes,
      date: new Date().toISOString().split("T")[0],
    }, ...prev]);
    setForm({ title: "", medium: "Writing", notes: "" });
    setShowForm(false);
  };

  const advanceStatus = (id: string) => {
    setProjects(prev => prev.map(p => {
      if (p.id !== id) return p;
      const next: Record<string, Project["status"]> = { idea: "in-progress", "in-progress": "complete", complete: "complete" };
      return { ...p, status: next[p.status] };
    }));
  };

  const medium = MEDIUMS.find(m => m.id === selectedMedium)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎨</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Creativity</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 540, margin: "0 auto" }}>
            You were made in the image of a Creator. Every act of making — words, music, images, craft — is a participation in God's creative work.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology of Art", icon: "📖" },
            { id: "mediums" as const, label: "Creative Mediums", icon: "🎨" },
            { id: "projects" as const, label: "My Projects", icon: "📋" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            {THEOLOGY_OF_CREATIVITY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 12 }}>{t.title}</h3>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginTop: 4 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, marginBottom: 16 }}>Overcoming Creative Blocks</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
                {OBSTACLES.map((o, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: 18 }}>
                    <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{o.obstacle}</div>
                    <p style={{ color: MUTED, fontSize: 13, marginBottom: 10 }}>{o.desc}</p>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{o.response}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "mediums" && (
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160 }}>
              {MEDIUMS.map(m => (
                <button key={m.id} onClick={() => setSelectedMedium(m.id)}
                  style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selectedMedium === m.id ? m.color : BORDER}`, background: selectedMedium === m.id ? `${m.color}18` : CARD, color: selectedMedium === m.id ? m.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", textAlign: "left" }}>
                  {m.icon} {m.name}
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ background: CARD, border: `1px solid ${medium.color}40`, borderRadius: 14, padding: 26 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontSize: 36 }}>{medium.icon}</span>
                  <h2 style={{ color: medium.color, fontWeight: 900, fontSize: 24, margin: 0 }}>{medium.name}</h2>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                  {medium.forms.map(f => (
                    <span key={f} style={{ background: `${medium.color}15`, color: medium.color, padding: "4px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{f}</span>
                  ))}
                </div>
                <div style={{ background: `${medium.color}10`, border: `1px solid ${medium.color}30`, borderRadius: 10, padding: 20 }}>
                  <div style={{ color: medium.color, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Creative Prompt</div>
                  <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>{medium.prompt}</p>
                </div>
                <button onClick={() => { setForm(f => ({ ...f, medium: medium.name })); setActiveTab("projects"); setShowForm(true); }}
                  style={{ marginTop: 16, width: "100%", padding: "10px", background: `${medium.color}20`, border: `1px solid ${medium.color}40`, borderRadius: 8, color: medium.color, fontWeight: 700, cursor: "pointer", fontSize: 14 }}>
                  + Start a {medium.name} Project
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "projects" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: 0 }}>My Creative Projects</h3>
              <button onClick={() => setShowForm(!showForm)}
                style={{ padding: "8px 18px", background: PURPLE, border: "none", borderRadius: 8, color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                + New Project
              </button>
            </div>
            {showForm && (
              <div style={{ background: CARD, border: `1px solid ${PURPLE}50`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                  <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="Project title"
                    style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14 }} />
                  <select value={form.medium} onChange={e => setForm(f => ({ ...f, medium: e.target.value }))}
                    style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14 }}>
                    {MEDIUMS.map(m => <option key={m.id} value={m.name}>{m.name}</option>)}
                  </select>
                </div>
                <textarea value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} placeholder="Notes, inspiration, or vision for this project..."
                  style={{ width: "100%", minHeight: 80, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit", marginBottom: 12 }} />
                <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                  <button onClick={() => setShowForm(false)} style={{ padding: "8px 16px", borderRadius: 8, border: `1px solid ${BORDER}`, background: "transparent", color: MUTED, cursor: "pointer" }}>Cancel</button>
                  <button onClick={addProject} style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: GREEN, color: BG, fontWeight: 800, cursor: "pointer" }}>Add Project</button>
                </div>
              </div>
            )}
            {projects.length === 0 ? (
              <div style={{ textAlign: "center", padding: 50, color: MUTED }}>No projects yet. Start one above!</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {projects.map(p => {
                  const med = MEDIUMS.find(m => m.name === p.medium);
                  return (
                    <div key={p.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <div style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{p.title}</div>
                          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                            <span style={{ color: med?.color || MUTED, fontSize: 12 }}>{med?.icon} {p.medium}</span>
                            <span style={{ color: STATUS_COLORS[p.status], fontSize: 12, fontWeight: 600 }}>● {p.status.replace("-", " ")}</span>
                          </div>
                          {p.notes && <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>{p.notes}</p>}
                        </div>
                        {p.status !== "complete" && (
                          <button onClick={() => advanceStatus(p.id)}
                            style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${GREEN}50`, background: `${GREEN}15`, color: GREEN, fontSize: 12, fontWeight: 700, cursor: "pointer", flexShrink: 0 }}>
                            {p.status === "idea" ? "Start →" : "Complete ✓"}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
