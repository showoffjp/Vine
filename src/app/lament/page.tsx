"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const PSALMS_OF_LAMENT = [
  { ref: "Psalm 22", title: "My God, My God, Why Have You Forsaken Me?", opening: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish?", theme: "Abandonment", note: "Jesus quoted this from the cross. The psalm moves from desperate cry to confident praise without the suffering being resolved." },
  { ref: "Psalm 88", title: "The Darkest Psalm", opening: "Lord, you are the God who saves me; day and night I cry out to you. May my prayer come before you; turn your ear to my cry.", theme: "Unresolved Darkness", note: "Uniquely, Psalm 88 ends with no resolution — in the darkness. God allows honest lament even when there is no tidy ending." },
  { ref: "Psalm 13", title: "How Long, Lord?", opening: "How long, Lord? Will you forget me forever? How long will you hide your face from me?", theme: "Delay", note: "The fourfold 'How long?' is permission to be honest about waiting. The psalm ends with trust — not because the situation changed but because the heart turned toward God." },
  { ref: "Psalm 42", title: "As the Deer Pants for Water", opening: "As the deer pants for streams of water, so my soul pants for you, my God. My soul thirsts for God, for the living God.", theme: "Spiritual Dryness", note: "The psalmist preaches to himself: 'Why, my soul, are you downcast? Put your hope in God.' Self-directed honest speech is biblical pastoral care." },
  { ref: "Lamentations 3", title: "Yet This I Call to Mind", opening: "I am the man who has seen affliction by the rod of the Lord's wrath. He has driven me away and made me walk in darkness rather than light.", theme: "National Catastrophe", note: "The book was written after the fall of Jerusalem. Amid full-throated despair, Jeremiah remembers: 'Because of the Lord's great love we are not consumed, for his compassions never fail.' The turn is not a resolution but a reminder." },
];

const STRUCTURE = [
  { step: "Address God", icon: "👁️", color: "#3B82F6", desc: "Begin by speaking directly to God — 'Lord,' 'Father,' 'My God.' This is not a journal entry about God but a conversation with him. Even in anguish, lament is prayer.", example: "'O God, I come to you tonight with nothing pleasant to offer...'" },
  { step: "Describe the Pain", icon: "💔", color: "#EF4444", desc: "Name what is wrong — specifically and without softening. The psalms use vivid language: 'I am a worm,' 'darkness is my closest friend.' God is not honored by sanitized prayers.", example: "'I am exhausted. The grief of [name] is heavier than I can carry. I have wept every day for three weeks...'" },
  { step: "Confess Trust", icon: "⚓", color: "#F59E0B", desc: "Even a small turn toward God's character — 'but I know you are good,' 'yet I will praise you' — anchors the lament. This is not denial of pain but defiance of despair. It is faith choosing God despite circumstances.", example: "'And yet — you are still there. You have not moved. You are the God who saves.'" },
  { step: "Ask Boldly", icon: "🗣️", color: PURPLE, desc: "Make a specific request. The psalms ask God to act: 'Arise, Lord,' 'Do not be far from me,' 'Hear my prayer.' God invites petition, not just praise.", example: "'God, I am asking you to intervene. Heal her. End this. Show your power in this situation.'" },
  { step: "Wait and Listen", icon: "🤫", color: "#10B981", desc: "Lament does not always end with resolution — Psalm 88 doesn't. But it does end with having spoken. After pouring out, be still. Don't rush to fill the silence with noise.", example: "Simply sit. 5 minutes of silence. Let the prayer stand." },
];

interface LamentEntry {
  id: string;
  date: string;
  subject: string;
  prayer: string;
  steps: Record<string, string>;
}

export default function LamentPage() {
  const [activeTab, setActiveTab] = useState<"psalms" | "howto" | "write">("howto");
  const [laments, setLaments] = useState<LamentEntry[]>(() => {
    try { const s = localStorage.getItem("vine_lament_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [form, setForm] = useState({ subject: "", steps: {} as Record<string, string> });
  const [saved, setSaved] = useState(false);

  useEffect(() => { try { localStorage.setItem("vine_lament_entries", JSON.stringify(laments)); } catch {} }, [laments]);

  const saveLament = () => {
    if (!form.subject) return;
    const entry: LamentEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString().split("T")[0],
      subject: form.subject,
      prayer: Object.values(form.steps).join("\n\n"),
      steps: form.steps,
    };
    setLaments(prev => [entry, ...prev].slice(0, 60));
    setForm({ subject: "", steps: {} });
    setSaved(true);
    setTimeout(() => { setSaved(false); setActiveTab("psalms"); }, 1500);
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🩶</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Practice of Lament</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 540, margin: "0 auto" }}>
            One-third of the Psalms are laments. God invites honest grief — not polished praise that denies pain but raw, trusting conversation with the God who is present in the dark.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "howto" as const, label: "How to Lament", icon: "📖" },
            { id: "psalms" as const, label: "Psalms of Lament", icon: "📜" },
            { id: "write" as const, label: "Write a Lament", icon: "✍️" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "howto" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 26, marginBottom: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 14 }}>Why Lament Matters</h3>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 12 }}>
                The church has largely lost the practice of lament. We rush to resolution, to silver linings, to "God is in control" — often before the grieving person has been allowed to speak their pain. But the Psalms, Lamentations, Job, and even Jesus himself (Matthew 27:46) model a different way: bringing anguish directly to God, holding it before him without forcing resolution.
              </p>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15 }}>
                Lament is not a lack of faith — it is faith refusing to pretend. It is honesty in the direction of God rather than away from him. The psalms of lament always address God directly — the suffering is brought to God, not just expressed. That is the thin, crucial line between lament and despair.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {STRUCTURE.map((s, i) => (
                <div key={s.step} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${s.color}20`, border: `1px solid ${s.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{s.icon}</div>
                  <div>
                    <div style={{ color: s.color, fontWeight: 800, fontSize: 16, marginBottom: 6 }}>Step {i + 1}: {s.step}</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{s.desc}</p>
                    <div style={{ background: `${s.color}10`, border: `1px solid ${s.color}20`, borderRadius: 8, padding: 10 }}>
                      <p style={{ color: s.color, fontSize: 13, fontStyle: "italic", margin: 0 }}>{s.example}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "psalms" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {PSALMS_OF_LAMENT.map(p => (
              <div key={p.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 17, margin: 0 }}>{p.ref} — {p.title}</h3>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 700, marginTop: 4, display: "inline-block" }}>Theme: {p.theme}</span>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, marginBottom: 12 }}>"{p.opening}"</p>
                <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 12 }}>
                  <p style={{ color: MUTED, fontSize: 13, margin: 0, lineHeight: 1.65 }}><strong style={{ color: TEXT }}>Note: </strong>{p.note}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "write" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 26 }}>
              <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 6 }}>Write Your Lament</h3>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20 }}>Follow the structure from "How to Lament." Each section is one step.</p>
              <input value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                placeholder="What are you lamenting? (e.g. 'Grief over loss of Mom', 'Unanswered prayer for healing')"
                style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, marginBottom: 20, boxSizing: "border-box" }} />
              {STRUCTURE.map(step => (
                <div key={step.step} style={{ marginBottom: 18 }}>
                  <label style={{ color: step.color, fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                    <span>{step.icon}</span> {step.step}
                  </label>
                  <textarea
                    value={form.steps[step.step] || ""}
                    onChange={e => setForm(f => ({ ...f, steps: { ...f.steps, [step.step]: e.target.value } }))}
                    placeholder={step.example}
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 12, color: TEXT, fontSize: 14, lineHeight: 1.7, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }}
                  />
                </div>
              ))}
              <button onClick={saveLament}
                style={{ width: "100%", padding: "12px", background: saved ? GREEN : PURPLE, border: "none", borderRadius: 8, color: saved ? BG : "#fff", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
                {saved ? "✓ Lament Saved" : "Save This Lament"}
              </button>
            </div>
            {laments.length > 0 && (
              <div style={{ marginTop: 24 }}>
                <h4 style={{ color: MUTED, fontSize: 14, fontWeight: 700, marginBottom: 12 }}>Previous Laments ({laments.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {laments.map(l => (
                    <div key={l.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 16 }}>
                      <div style={{ color: GREEN, fontWeight: 700, marginBottom: 4 }}>{l.subject}</div>
                      <div style={{ color: MUTED, fontSize: 12 }}>{new Date(l.date + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
