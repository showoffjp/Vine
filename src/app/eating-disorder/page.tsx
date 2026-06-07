"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Body Is Good — This Is Not the Problem", verse: "Genesis 1:31", body: "'God saw all that he had made, and it was very good' (Genesis 1:31). Christian theology begins with the body as good — not a prison for the soul, not a problem to be overcome, not a source of shame. Eating disorders often involve a profound conflict with one's own body. The theological corrective begins here: the body God made is not the enemy. Food is not the enemy. Hunger is not the enemy. The war is not between you and your body." },
  { title: "You Are Not a Collection of Numbers", verse: "Psalm 139:14", body: "'I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well' (Psalm 139:14). The culture that assigns worth to bodies based on size, shape, and weight is not the culture of Scripture. David praised God for a body he didn't design or choose. The Incarnation — God taking on a specific human body — is the definitive theological statement that bodies matter and are dignified, not despite their particularity but because of it." },
  { title: "Eating Disorders Are Not Primarily Spiritual Problems", verse: "Mark 1:41", body: "When Jesus encountered people who were suffering physically, he healed them — he did not rebuke their lack of faith or prescribe spiritual disciplines as the primary treatment. Eating disorders have well-documented neurobiological dimensions — they are among the deadliest mental health conditions, with complex causes that include genetics, trauma, cultural pressure, and brain chemistry. Spiritual formation can be part of healing, but it is not a substitute for specialized medical and therapeutic care." },
  { title: "The Body Will Be Redeemed — All of It", verse: "Romans 8:23", body: "'We ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sonship, the redemption of our bodies' (Romans 8:23). The Christian hope is not escape from the body but the redemption of it. This has practical significance for recovery: the goal is not to achieve the 'right' relationship with food and body as society defines it — it is to receive the body God gave you as genuinely worth inhabiting, feeding, and caring for." },
  { title: "Shame Is Not a Tool for Healing", verse: "Romans 8:1", body: "'There is now no condemnation for those who are in Christ Jesus' (Romans 8:1). Eating disorders are deeply entangled with shame — shame about the body, about eating, about the struggle itself. Churches that treat disordered eating as moral failure or lack of discipline compound the damage. The path toward healing runs through the opposite of condemnation: acceptance, compassion, and the radical permission to receive care without having first achieved worthiness." },
];

const VOICES = [
  { id: "joy", name: "Constance Rhodes", era: "Contemporary", context: "Life Without Ed; FINDINGbalance; eating disorder ministry", bio: "Rhodes founded FINDINGbalance, one of the first and most significant Christian ministries specifically addressing eating disorders. Her work navigates the intersection of faith and eating disorder recovery with honesty and pastoral care — refusing both the oversimplification that eating disorders are primarily spiritual problems and the erasure of the spiritual dimension from recovery.", quote: "For years, I thought my eating disorder was just a bad habit or a lack of self-control. Finding a community that took it seriously as a real illness — while also taking my faith seriously — was what began real change. The church can be that community if it is willing to learn what eating disorders actually are.", contribution: "Rhodes created one of the first Christian communities and resources specifically for those with eating disorders, providing both peer support and theological grounding for recovery." },
  { id: "maine", name: "Margo Maine", era: "Contemporary", context: "Psychologist; Body Wars; eating disorder specialist", bio: "Maine is one of the foremost clinical voices on eating disorders, particularly the cultural and relational dimensions of disordered eating in women. Her work on body image and the cultural war on the female body provides an analysis of why eating disorders are so prevalent and what recovery from cultural as well as individual causes requires.", quote: "Eating disorders are not primarily about food. They are about a person's relationship to themselves, to their body, to their emotions, and to a culture that has made the female body a problem to be solved. Recovery requires addressing all of those dimensions — not just the behavior.", contribution: "Maine's analysis of the cultural dimensions of eating disorders helped both sufferers and their communities understand what they are actually recovering from — not just disordered eating, but a complex of cultural, relational, and psychological wounds." },
  { id: "allender", name: "Dan Allender", era: "1952–present", context: "Psychologist; The Allender Center; trauma and the body", bio: "Allender's work on embodiment and trauma is directly relevant to eating disorder recovery. His emphasis that the body carries stories — that disordered relationships to food and the body often have autobiographical roots in trauma, family systems, and early experiences — gives both sufferers and those who accompany them a framework for understanding the depth of the wound.", quote: "When a woman wars with her body, she is almost always fighting a war that began somewhere else — in trauma, in a family that couldn't see her, in a culture that told her she was too much or not enough. The body is the last place she brings the battle, not the first. Healing begins with asking: what is the body trying to tell the story of?", contribution: "Allender's integration of embodiment, story, and trauma gave eating disorder recovery a depth of analysis that went beyond behavioral change to the underlying story that the disordered eating was expressing." },
];

const PRACTICES = [
  { title: "Pursue Specialized Treatment — This Requires Professionals", icon: "⚕️", color: "#EF4444", desc: "Eating disorders are among the deadliest mental health conditions. Recovery requires a team: a physician for medical monitoring, a therapist specializing in eating disorders, and often a dietitian. Spiritual community can support recovery but cannot replace clinical care.", steps: ["Contact the National Eating Disorders Association helpline: 1-800-931-2237", "Look for therapists certified in eating disorder treatment (CEDS credential)", "Medical monitoring is essential — some complications are life-threatening", "The NEDA Helpline can help you find a treatment team in your area"] },
  { title: "Tell Someone the Truth About What Is Happening", icon: "🤝", color: PURPLE, desc: "Eating disorders thrive in secrecy. Telling one person — a trusted friend, pastor, family member, or doctor — the honest reality of what you are doing and experiencing is a crucial step that many people delay for years.", steps: ["You do not have to have all the answers to tell someone: 'I am struggling with eating and I need help'", "Choose someone who can receive your honesty without minimizing or catastrophizing", "Your pastor can accompany you to a first appointment with a professional", "Online peer support through NEDA can bridge the gap while you find professional care"] },
  { title: "Challenge the Theological Distortions", icon: "📖", color: GREEN, desc: "Eating disorders often co-opt religious language — discipline, self-control, purity, mortification of the flesh. Examining what you actually believe about the body, about food, and about God's view of you is part of the healing work.", steps: ["Ask: what do I believe God thinks of my body? Is that belief actually biblical?", "Read Genesis 1 and 2 slowly — the body was declared good before sin entered", "Examine whether 'discipline' has become a cover for punishment of the self", "A pastor or spiritual director can help you distinguish genuine spiritual formation from disordered restriction"] },
  { title: "Build a Recovery Support Structure", icon: "🌱", color: PURPLE, desc: "Recovery from an eating disorder is typically measured in years, not weeks. Building a sustainable support structure — professional, relational, spiritual — is essential for the long journey.", steps: ["Maintain regular contact with your treatment team even when you feel better", "Identify 2-3 people who know your story and check in regularly", "Recovery from NEDA has online and in-person groups specifically for eating disorder recovery", "Consider whether your church community can be educated about eating disorders to provide better support"] },
];

const SCRIPTURE = [
  { verse: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
  { verse: "Genesis 1:31", text: "God saw all that he had made, and it was very good." },
  { verse: "Romans 8:1", text: "There is now no condemnation for those who are in Christ Jesus." },
  { verse: "1 Corinthians 6:19-20", text: "Do you not know that your bodies are temples of the Holy Spirit? You are not your own; you were bought at a price. Therefore honor God with your bodies." },
  { verse: "Matthew 6:25", text: "Do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes?" },
  { verse: "Romans 8:23", text: "We ourselves groan inwardly as we wait eagerly for our adoption to sonship, the redemption of our bodies." },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function EatingDisorderPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_eating_disorder_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_eating_disorder_voice", "joy");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type EatingDisorderJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [edJournal, setEdJournal] = useState<EatingDisorderJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_eatingdisorderj_entries") ?? "[]"); } catch { return []; } });
  const [jedFeeling, setJedFeeling] = useState("");
  const [jedTruth, setJedTruth] = useState("");
  const [jedStep, setJedStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_eatingdisorderj_entries", JSON.stringify(edJournal)); } catch {} }, [edJournal]);
  function saveEdEntry() {
    if (!jedFeeling.trim() && !jedTruth.trim()) return;
    setEdJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jedFeeling, truth: jedTruth, step: jedStep }, ...prev]);
    setJedFeeling(""); setJedTruth(""); setJedStep("");
  }
  function deleteEdEntry(id: string) { setEdJournal(prev => prev.filter(e => e.id !== id)); }

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" }, { id: "voices", label: "🎓 Voices" },
    { id: "practices", label: "🛤️ Practices" }, { id: "scripture", label: "✝️ Scripture" },
    { id: "journal", label: "📓 Journal" }, { id: "videos", label: "▶️ Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content">
      <div style={{ background: "linear-gradient(180deg, rgba(58,125,86,0.08) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>🌸</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Eating Disorders &amp; Body Image</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 620, margin: "0 auto 24px", lineHeight: 1.75 }}>
          Your body is good. The war is not between you and your body.
          Christian theology and practical resources for recovery.
        </p>
        <div style={{ background: `${PURPLE}18`, border: `1px solid ${PURPLE}40`, borderRadius: 10, padding: "14px 20px", maxWidth: 500, margin: "0 auto", fontSize: 14, color: "#D0C0F8", lineHeight: 1.7 }}>
          <strong>Crisis support:</strong> Call <strong>988</strong> (Suicide &amp; Crisis Lifeline).<br />
          <strong>NEDA Helpline:</strong> <strong>1-800-931-2237</strong> (eating disorder specialists)<br />
          Text &ldquo;NEDA&rdquo; to <strong>741741</strong> for the Crisis Text Line
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ display: "flex", gap: 4, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, margin: "28px 0", overflowX: "auto" }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 14px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", whiteSpace: "nowrap" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {THEOLOGY.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: TEXT, margin: 0, flex: 1, paddingRight: 16 }}>{item.title}</h3>
                  <span style={{ fontSize: 12, color: PURPLE, fontWeight: 700, whiteSpace: "nowrap", background: `${PURPLE}15`, border: `1px solid ${PURPLE}30`, borderRadius: 6, padding: "3px 10px" }}>{item.verse}</span>
                </div>
                <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
              {VOICES.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${selectedVoice === v.id ? GREEN : BORDER}`, background: selectedVoice === v.id ? `${GREEN}18` : "transparent", color: selectedVoice === v.id ? GREEN : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {v.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <div style={{ marginBottom: 6 }}><span style={{ fontSize: 22, fontWeight: 900 }}>{voice.name}</span><span style={{ color: MUTED, fontSize: 13, marginLeft: 12 }}>{voice.era}</span></div>
              <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 16 }}>{voice.context}</div>
              <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{voice.bio}</p>
              <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 18, margin: "0 0 20px", color: "#e0e0f0", fontSize: 15, fontStyle: "italic", lineHeight: 1.75 }}>&ldquo;{voice.quote}&rdquo;</blockquote>
              <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Contribution</div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{voice.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {PRACTICES.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{p.icon}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: TEXT, margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.steps.map((s, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: p.color, fontWeight: 900, fontSize: 13, minWidth: 20 }}>{j + 1}.</span>
                      <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.65 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {SCRIPTURE.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: PURPLE, fontWeight: 800, fontSize: 14, marginBottom: 10 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Recovery Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Write honestly about your body, your struggles, and the slow work of healing.
                No performance, no minimizing. You are allowed to be exactly where you are.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jedFeeling} onChange={e => setJedFeeling(e.target.value)}
                  placeholder="Where am I today? What is hard? What is my relationship with my body and food like right now?"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jedTruth} onChange={e => setJedTruth(e.target.value)}
                  placeholder="One true thing I can hold onto — about my body, my worth, or God's view of me..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jedStep} onChange={e => setJedStep(e.target.value)}
                  placeholder="One small step toward care, honesty, or recovery today..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveEdEntry}
                  style={{ alignSelf: "flex-start", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {edJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. Recovery is worth recording, one honest day at a time.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {edJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteEdEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
                    </div>
                    {e.feeling && <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>{e.feeling}</p>}
                    {e.truth && <p style={{ color: GREEN, fontSize: 13, lineHeight: 1.65, marginBottom: 6 }}>✝ {e.truth}</p>}
                    {e.step && <p style={{ color: PURPLE, fontSize: 13, fontStyle: "italic" }}>→ {e.step}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { videoId: "IHmTYnk_-Eg", title: "Faith and Eating Disorder Recovery", channel: "FINDINGbalance", description: "A Christian perspective on eating disorder recovery — how faith can support healing without being weaponized against it, and what a community of grace looks like for those in recovery." },
              { videoId: "BUY-sMDzY3I", title: "Your Body Is Good: Theology and Body Image", channel: "The Gospel Coalition", description: "A theological treatment of body image — what the Incarnation, creation, and resurrection say about how Christians should relate to their bodies and what that means for eating disorder recovery." },
              { videoId: "h2MIFYKWVxY", title: "Eating Disorders Are Not About Food", channel: "NEDA (National Eating Disorders Association)", description: "An explanation of the complex causes of eating disorders — genetic, psychological, cultural, and relational — helping both sufferers and their communities understand what recovery actually requires." },
              { videoId: "UPgUwrSP-Oc", title: "Healing the Relationship with Your Body", channel: "The Allender Center", description: "Allender on the stories the body carries — what disordered eating is often expressing autobiographically — and what genuine healing of the relationship with one's body looks like in practice." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
      </main>
      <Footer />
    </div>
  );
}
