"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Your Story Is Spiritual Warfare", verse: "Revelation 12:11", body: "'They triumphed over him by the blood of the Lamb and by the word of their testimony' (Revelation 12:11). The testimony is a weapon. When you speak of what God has done, you are not merely sharing a personal narrative — you are asserting the reality of the kingdom of God over the reality of darkness. Testimony defeats the accuser by declaring what Christ has accomplished." },
  { title: "Testimony Is Evangelism's Foundation", verse: "John 9:25", body: "The man born blind answered all the theological questions with: 'Whether he is a sinner or not, I don't know. One thing I do know. I was blind but now I see!' (John 9:25). He could not answer the Pharisees' theological objections, but he could speak to what he had experienced. Your testimony is irrefutable by a skeptic in a way that an argument is not — they can debate the argument, but they cannot deny your experience." },
  { title: "Paul Told His Story Three Times", verse: "Acts 22, 26, Galatians 1", body: "Paul recounts his conversion in Acts 22, 26, and Galatians 1. Each time it is slightly different — adapted to the audience and context. He was not reading from a script; he was speaking from lived experience. Testimony is flexible precisely because it is real. Learn to tell your story in different lengths and for different contexts." },
];

const STRUCTURE = [
  { n: 1, title: "Before: Life Without Christ", color: "#EF4444", desc: "Describe your life honestly before you trusted Christ. What were you living for? What were your values, habits, addictions, or emptiness? You don't need a dramatic past — everyone has a 'before.' The question is: what was missing?", caution: "Be honest but not gratuitous. Avoid glorifying sin. The purpose is to establish the context that makes grace comprehensible." },
  { n: 2, title: "During: How the Gospel Reached You", color: "#F59E0B", desc: "What happened? Was it a crisis, a gradual awakening, a conversation, a Bible passage? Who was involved? When and where? Specificity makes testimony credible — vague spirituality is hard to believe or follow.", caution: "Name what you trusted and why. Be clear that it is Christ, not religion, experience, or morality." },
  { n: 3, title: "After: What Changed", color: GREEN, desc: "What is different now? Not what you believe differently, but what has actually changed in your life, relationships, desires, or character? The 'after' is where the fruit of the gospel becomes visible to the listener.", caution: "Be honest about struggles. A testimony that sounds like everything is now perfect is not believable and discourages those who are struggling as Christians." },
  { n: 4, title: "The Invitation: What Does This Mean for You?", color: PURPLE, desc: "A testimony ends with an implicit or explicit invitation. You have described a reality — now what? The invitation may be explicit ('Would you want to talk about how this could be your story?') or implicit (the testimony itself extending an open door).", caution: "Don't pressure. The testimony creates an opening; the Spirit does the work. Your role is to be a faithful witness, not to close a sale." },
];

const VERSIONS = [
  { version: "30-Second Version", context: "Casual mention in conversation", length: "2-3 sentences", what: "One sentence on where you were, one on what changed, one on what's different now. 'I used to live for ___. Then I trusted Christ at ___. It changed how I see ___.'", example: "I used to find my identity in my career — and nothing was ever enough. Then a friend invited me to church and I heard the gospel for the first time. It completely changed how I see my own worth and my fear of failure." },
  { version: "3-Minute Version", context: "Small group, conversation over coffee", length: "300-400 words", what: "The full before/during/after structure, briefly. One paragraph each. Aim for one specific, concrete detail in each section.", example: "Tell the story with one vivid before moment, one clear turning point, and one specific thing that is genuinely different now." },
  { version: "10-Minute Version", context: "Testimony in a church service or event", length: "800-1000 words", what: "Fully developed before/during/after with emotional texture, specific names and places, honest struggles, and a clear gospel presentation embedded in the story.", example: "This is the version that is worth writing out fully, practicing aloud, and memorizing the key beats." },
];

const PITFALLS = [
  { pitfall: "Making yourself the hero", fix: "Christ is the hero of the testimony. Your sin, confusion, and brokenness serve to magnify what grace accomplished. Watch for language that centers your decision, intelligence, or moral progress." },
  { pitfall: "Leaving out the gospel", fix: "Testimony is not just personal narrative — it is witness. Name Jesus. Name the cross. Explain (briefly) what you trusted and why. A story of 'life got better' without Christ at the center is self-help, not gospel." },
  { pitfall: "Making it all past tense", fix: "The gospel is not just what happened when you were converted — it is what sustains you now. Include a present dimension: 'And God continues to ___.' This shows that Christianity is an ongoing relationship, not a past event." },
  { pitfall: "Performing rather than sharing", fix: "The most persuasive testimony is the most honest one. Vulnerability, admission of ongoing struggle, and genuine uncertainty make testimony human and believable." },
  { pitfall: "Too long, too much detail", fix: "Edit ruthlessly. Every detail must serve the central story. Religious experiences, theological nuances, and church politics rarely help the listener. Focus on the turning point and its fruit." },
];

interface TestimonyDraft {
  before: string;
  during: string;
  after: string;
  invitation: string;
}

export default function TestimonyWritingPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "structure" | "write">("theology");
  const [draft, setDraft] = useState<TestimonyDraft>(() => {
    try { const s = localStorage.getItem("vine_testimony_draft"); return s ? JSON.parse(s) : { before: "", during: "", after: "", invitation: "" }; } catch { return { before: "", during: "", after: "", invitation: "" }; }
  });
  const [expandedPitfall, setExpandedPitfall] = useState<string | null>(null);

  useEffect(() => { try { localStorage.setItem("vine_testimony_draft", JSON.stringify(draft)); } catch {} }, [draft]);

  const wordCount = Object.values(draft).join(" ").split(/\s+/).filter(Boolean).length;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📣</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Write Your Testimony</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Your story of meeting Christ is irrefutable — no one can argue with what you have experienced. 'I was blind but now I see' has converted more skeptics than most theological arguments.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Why It Matters", icon: "📖" },
            { id: "structure" as const, label: "Structure", icon: "🏗️" },
            { id: "write" as const, label: "Write It", icon: "✍️" },
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
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 17, marginBottom: 14 }}>Three Lengths to Know</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {VERSIONS.map(v => (
                  <div key={v.version} style={{ background: BG, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                      <span style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{v.version}</span>
                      <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "2px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{v.context}</span>
                    </div>
                    <p style={{ color: MUTED, fontSize: 13, marginBottom: 6 }}>{v.length} — {v.what}</p>
                    <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", lineHeight: 1.6, margin: 0 }}>Example: {v.example}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "structure" && (
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 20 }}>
              {STRUCTURE.map(s => (
                <div key={s.n} style={{ background: CARD, border: `1px solid ${s.color}30`, borderRadius: 12, padding: 22, display: "flex", gap: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${s.color}20`, border: `2px solid ${s.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, fontWeight: 800, fontSize: 15, flexShrink: 0 }}>{s.n}</div>
                  <div>
                    <div style={{ color: s.color, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{s.title}</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{s.desc}</p>
                    <div style={{ background: BG, borderRadius: 8, padding: 10 }}>
                      <div style={{ color: "#F59E0B", fontSize: 12, fontWeight: 700, marginBottom: 4 }}>CAUTION</div>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{s.caution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
              <h3 style={{ color: "#EF4444", fontWeight: 800, fontSize: 17, marginBottom: 14 }}>Common Pitfalls</h3>
              {PITFALLS.map(p => (
                <div key={p.pitfall} style={{ marginBottom: 10 }}>
                  <button onClick={() => setExpandedPitfall(expandedPitfall === p.pitfall ? null : p.pitfall)}
                    style={{ width: "100%", background: "transparent", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                    <span>{p.pitfall}</span><span style={{ color: MUTED }}>{expandedPitfall === p.pitfall ? "−" : "+"}</span>
                  </button>
                  {expandedPitfall === p.pitfall && (
                    <div style={{ background: BG, borderRadius: "0 0 8px 8px", padding: "10px 14px", border: `1px solid ${BORDER}`, borderTop: "none" }}>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{p.fix}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "write" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Your draft is auto-saved. Aim for ~300 words for the 3-minute version.</p>
              <div style={{ color: wordCount > 350 ? "#F59E0B" : GREEN, fontWeight: 700, fontSize: 14 }}>{wordCount} words</div>
            </div>
            {STRUCTURE.map(s => (
              <div key={s.n} style={{ marginBottom: 16 }}>
                <label style={{ color: s.color, fontWeight: 700, fontSize: 14, display: "block", marginBottom: 6 }}>
                  {s.n}. {s.title}
                </label>
                <textarea
                  value={draft[s.title === "Before: Life Without Christ" ? "before" : s.title === "During: How the Gospel Reached You" ? "during" : s.title === "After: What Changed" ? "after" : "invitation"]}
                  onChange={e => setDraft(d => ({ ...d, [s.title === "Before: Life Without Christ" ? "before" : s.title === "During: How the Gospel Reached You" ? "during" : s.title === "After: What Changed" ? "after" : "invitation"]: e.target.value }))}
                  placeholder={s.desc}
                  style={{ width: "100%", minHeight: 90, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, lineHeight: 1.7, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
