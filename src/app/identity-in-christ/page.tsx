"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const IDENTITY_STATEMENTS = [
  { ref: "John 1:12", statement: "I am a child of God.", category: "Belonging", verse: "Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God." },
  { ref: "Romans 8:1", statement: "I am free from condemnation.", category: "Freedom", verse: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { ref: "2 Corinthians 5:17", statement: "I am a new creation.", category: "Renewal", verse: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" },
  { ref: "Ephesians 1:4", statement: "I am chosen and holy.", category: "Belonging", verse: "For he chose us in him before the creation of the world to be holy and blameless in his sight." },
  { ref: "Ephesians 2:10", statement: "I am God's workmanship, created for good works.", category: "Purpose", verse: "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do." },
  { ref: "Romans 8:37", statement: "I am more than a conqueror.", category: "Strength", verse: "No, in all these things we are more than conquerors through him who loved us." },
  { ref: "1 Corinthians 6:19-20", statement: "I am a temple of the Holy Spirit.", category: "Dignity", verse: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price." },
  { ref: "Galatians 3:26", statement: "I am a son/daughter of God through faith.", category: "Belonging", verse: "So in Christ Jesus you are all children of God through faith." },
  { ref: "Philippians 4:13", statement: "I can do all things through Christ.", category: "Strength", verse: "I can do all this through him who gives me strength." },
  { ref: "Colossians 2:10", statement: "I am complete in Christ.", category: "Sufficiency", verse: "And in Christ you have been brought to fullness. He is the head over every power and authority." },
  { ref: "1 Peter 2:9", statement: "I am a member of a royal priesthood.", category: "Dignity", verse: "But you are a chosen people, a royal priesthood, a holy nation, God's special possession, that you may declare the praises of him who called you out of darkness into his wonderful light." },
  { ref: "Romans 5:1", statement: "I have peace with God.", category: "Freedom", verse: "Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ." },
  { ref: "2 Timothy 1:7", statement: "I have not been given a spirit of fear.", category: "Strength", verse: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline." },
  { ref: "Hebrews 4:16", statement: "I can come boldly to God's throne.", category: "Access", verse: "Let us then approach God's throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need." },
  { ref: "Romans 8:38-39", statement: "Nothing can separate me from God's love.", category: "Security", verse: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
];

const CATEGORIES = ["All", "Belonging", "Freedom", "Renewal", "Purpose", "Strength", "Dignity", "Sufficiency", "Access", "Security"];

const CATEGORY_COLORS: Record<string, string> = {
  "Belonging": "#6B4FBB", "Freedom": "#10B981", "Renewal": "#3B82F6",
  "Purpose": "#F59E0B", "Strength": "#EF4444", "Dignity": "#EC4899",
  "Sufficiency": "#8B5CF6", "Access": "#00FF88", "Security": "#F97316",
};

const FALSE_IDENTITIES = [
  { false_id: "What I do", truth: "You are not your performance. You are God's child before you accomplish anything. Ephesians 2:8-9: 'it is by grace you have been saved... not by works.'" },
  { false_id: "What others think of me", truth: "God's opinion of you in Christ is the final verdict on your worth. Galatians 1:10: 'Am I now trying to win the approval of human beings, or of God?'" },
  { false_id: "What I have", truth: "Material possessions are not identity. Luke 12:15: 'Life does not consist in an abundance of possessions.'" },
  { false_id: "My past", truth: "In Christ, the old is gone. 2 Corinthians 5:17. Your past does not define you; Christ's work on your behalf does." },
  { false_id: "My sexuality or relationships", truth: "Identity in Christ supersedes every other identity category. Galatians 3:28: 'There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus.'" },
  { false_id: "My mental health or struggles", truth: "Your diagnosis is not your destiny. Romans 8:28: God works all things together for good for those who love him — including illness, struggle, and weakness." },
];

export default function IdentityInChristPage() {
  const [activeTab, setActiveTab] = useState<"who" | "false" | "meditate">("who");
  const [catFilter, setCatFilter] = useState("All");
  const [memorized, setMemorized] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_identity_mem"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [meditating, setMeditating] = useState<string | null>(null);

  useEffect(() => { try { localStorage.setItem("vine_identity_mem", JSON.stringify([...memorized])); } catch {} }, [memorized]);

  const toggleMem = (ref: string) => setMemorized(prev => {
    const next = new Set(prev);
    next.has(ref) ? next.delete(ref) : next.add(ref);
    return next;
  });

  const filtered = catFilter === "All" ? IDENTITY_STATEMENTS : IDENTITY_STATEMENTS.filter(s => s.category === catFilter);
  const meditateItem = IDENTITY_STATEMENTS.find(s => s.ref === meditating);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>👑</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Who You Are in Christ</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Your identity is not what you do, what others think, or what you have. In Christ, you have been given a new name, a new nature, and a permanent standing before God.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "who" as const, label: "Who I Am", icon: "👑" },
            { id: "false" as const, label: "False Identities", icon: "🚫" },
            { id: "meditate" as const, label: "Meditate", icon: "🙏" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "who" && (
          <div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
              {CATEGORIES.map(c => (
                <button key={c} onClick={() => setCatFilter(c)}
                  style={{ padding: "5px 14px", borderRadius: 20, border: `1px solid ${catFilter === c ? (CATEGORY_COLORS[c] || GREEN) : BORDER}`, background: catFilter === c ? `${CATEGORY_COLORS[c] || GREEN}15` : "transparent", color: catFilter === c ? (CATEGORY_COLORS[c] || GREEN) : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {c}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {filtered.map(item => (
                <div key={item.ref} style={{ background: CARD, border: `1px solid ${memorized.has(item.ref) ? GREEN + "40" : BORDER}`, borderRadius: 12, padding: 18 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <span style={{ background: `${CATEGORY_COLORS[item.category] || PURPLE}15`, color: CATEGORY_COLORS[item.category] || PURPLE, padding: "2px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{item.category}</span>
                        <span style={{ color: MUTED, fontSize: 12 }}>{item.ref}</span>
                      </div>
                      <div style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 6 }}>{item.statement}</div>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>{item.verse}</p>
                    </div>
                    <div style={{ display: "flex", gap: 6, marginLeft: 12, flexShrink: 0 }}>
                      <button onClick={() => { setMeditating(item.ref); setActiveTab("meditate"); }}
                        style={{ padding: "5px 10px", borderRadius: 6, border: `1px solid ${PURPLE}40`, background: `${PURPLE}10`, color: PURPLE, fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                        Meditate
                      </button>
                      <button onClick={() => toggleMem(item.ref)}
                        style={{ padding: "5px 10px", borderRadius: 6, border: `1px solid ${memorized.has(item.ref) ? GREEN + "50" : BORDER}`, background: memorized.has(item.ref) ? `${GREEN}15` : "transparent", color: memorized.has(item.ref) ? GREEN : MUTED, fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                        {memorized.has(item.ref) ? "✓ Known" : "Memorize"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, color: MUTED, fontSize: 13, textAlign: "center" }}>
              {memorized.size} of {IDENTITY_STATEMENTS.length} statements marked as known
            </div>
          </div>
        )}

        {activeTab === "false" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                We all derive a sense of identity from multiple sources — some helpful, many not. The false identities below are not sinful in themselves; they become dangerous when they displace the identity Christ has given. Identity in Christ is not one more layer — it is the foundation that holds all others in right proportion.
              </p>
            </div>
            {FALSE_IDENTITIES.map((f, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "#EF4444", fontSize: 18, flexShrink: 0 }}>✗</span>
                  <div>
                    <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 15, marginBottom: 8 }}>Identity in "{f.false_id}"</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.truth}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "meditate" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Select a statement to meditate on. Read it slowly. Pray it. Let it sink from your head to your heart.</p>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
              {IDENTITY_STATEMENTS.map(s => (
                <button key={s.ref} onClick={() => setMeditating(s.ref)}
                  style={{ padding: "5px 12px", borderRadius: 20, border: `1px solid ${meditating === s.ref ? GREEN : BORDER}`, background: meditating === s.ref ? `${GREEN}15` : "transparent", color: meditating === s.ref ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {s.ref}
                </button>
              ))}
            </div>
            {meditateItem && (
              <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 14, padding: 32, textAlign: "center" }}>
                <div style={{ color: GREEN, fontSize: 28, fontWeight: 900, marginBottom: 16, lineHeight: 1.3 }}>{meditateItem.statement}</div>
                <p style={{ color: TEXT, fontSize: 16, lineHeight: 1.8, fontStyle: "italic", marginBottom: 16 }}>"{meditateItem.verse}"</p>
                <div style={{ color: MUTED, fontSize: 14 }}>{meditateItem.ref}</div>
                <div style={{ marginTop: 24, background: BG, borderRadius: 12, padding: 20 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 14, marginBottom: 10 }}>Suggested Practice</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                    Read this statement aloud three times slowly. Then sit in silence for 2 minutes. Let the truth of it wash over you. Notice where you feel resistance — that resistance often marks where you don't yet believe it.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
