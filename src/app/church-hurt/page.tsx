"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Being Hurt by the Church Is Not the Same as Being Hurt by Jesus", verse: "Matthew 18:6", body: "Jesus reserved his harshest words for those who caused harm within the community of faith: 'If anyone causes one of these little ones — those who believe in me — to stumble, it would be better for them to have a large millstone hung around their neck and to be drowned in the depths of the sea' (Matthew 18:6). He did not defend religious leaders who abused their authority. He wept over Jerusalem, but he also cleansed the temple. The church is Christ's body — and when that body wounds rather than heals, Christ is not indifferent to the damage." },
  { title: "The Church Has Always Been Full of Sinners", verse: "1 Corinthians 5:1", body: "Paul addressed a church that was tolerating incest, members suing each other, people getting drunk at communion, and factional divisions. The Corinthian church was a mess. This is not an excuse for harm done in the name of Christ — it is a realistic description of what the church has always been. The New Testament does not present an idealized community; it presents a community of sinners being saved, which is messier and more difficult than the promotional materials suggest." },
  { title: "You Are Permitted to Grieve What Should Have Been", verse: "Psalm 55:12-13", body: "'If an enemy were insulting me, I could endure it... But it is you, a man like myself, my companion, my close friend, with whom I once enjoyed sweet fellowship at the house of God' (Psalm 55:12-14). David's lament about betrayal by a friend is the biblical script for church hurt. The pain is compounded precisely because it came from those who represented God, who should have been safe, who shared the fellowship of worship. This kind of betrayal is worth grieving specifically." },
  { title: "Jesus Experienced Religious Betrayal", verse: "Matthew 26:47", body: "Jesus was betrayed by Judas — one of the Twelve. He was arrested with the help of the chief priests. He was tried by the religious establishment of his day. He was mocked by those who claimed to represent God. He knows from the inside what it is to be wounded by religious people. Your experience of church hurt is not foreign to him; he entered it himself." },
  { title: "Leaving a Church Is Sometimes the Loving Thing to Do", verse: "Acts 15:36-40", body: "Paul and Barnabas, two of the most faithful figures in the New Testament, parted ways sharply over John Mark. Their separation was not a failure of the kingdom — it resulted in two missionary parties. Christians throughout history have moved between churches, and sometimes the movement was necessary for survival and growth. You do not have to stay in a community that is harming you in order to be faithful to God." },
];

const VOICES = [
  { id: "scazzero", name: "Peter Scazzero", era: "1956–present", context: "Pastor; Emotionally Healthy Spirituality", bio: "Scazzero came to understand, through his own pastoral failures, how emotional immaturity in leadership creates communities where people are hurt, controlled, and shamed rather than healed and set free. His writing on emotionally healthy churches addresses the systemic patterns that produce church hurt — not just individual bad actors but structures and cultures that enable harm.", quote: "Church hurt often comes not from people who are evil but from people who are emotionally immature and spiritually underdeveloped — who have not dealt with their own wounds, who use authority to manage their own anxiety, who confuse their preferences with God's will.", contribution: "Scazzero gave the church a framework for understanding why good people produce damaging communities — and what structural changes produce emotionally healthy churches." },
  { id: "fletcher", name: "Scot McKnight", era: "1953–present", context: "New Testament scholar; author of A Church Called Tov", bio: "McKnight's A Church Called Tov (with Laura Barringer, 2020) directly addressed the patterns of church culture that produce harm — the hero-driven church, the culture of protection over accountability, the silencing of victims. Written in the aftermath of multiple high-profile evangelical leadership failures, it provided a theological framework for understanding why churches that appear successful can be profoundly harmful.", quote: "Churches that hurt people are not primarily led by monsters. They are led by people embedded in a culture — a 'Toxicity Optimization Variable' culture — where the mission justifies the harm, where the leader is protected over the vulnerable, and where telling the truth is the most dangerous thing you can do.", contribution: "McKnight identified the systemic patterns that produce church hurt and gave those who had been harmed a framework for understanding what happened to them — and what a healthy church culture actually looks like." },
  { id: "kristin-kobes", name: "Kristin Kobes Du Mez", era: "1974–present", context: "Historian; Calvin University; Jesus and John Wayne", bio: "Du Mez's Jesus and John Wayne (2020) documented how a particular version of masculine Christianity in evangelical America created cultures of authority, deference, and silence that made abuse and church hurt endemic. Her historical analysis helped many survivors understand their experience not as isolated incidents but as part of a systemic pattern with deep cultural roots.", quote: "The church hurt that so many have experienced is not accidental. It flows from a theology of authority, submission, and protection of the powerful that has deep roots in American evangelical culture. Understanding those roots helps people see that what happened to them was not their fault and was not inevitable.", contribution: "Du Mez provided historical and cultural analysis that helped survivors contextualize their experience — moving from personal shame ('why did this happen to me?') to systemic understanding ('this is part of a pattern with identifiable causes')." },
];

const PRACTICES = [
  { title: "Validate What Happened", icon: "✅", color: GREEN, desc: "Church hurt is often minimized — by the church itself, by other Christians who don't want to hear it, and sometimes by the survivor who is still trying to be loyal. The first step is simply naming what happened accurately: 'This was harmful. This should not have happened. I did not deserve this.'", steps: ["Write what happened without minimizing: 'What actually happened was...'", "Resist the pressure to add 'but I'm sure they meant well'", "If appropriate: tell your story to someone outside the situation who can witness it clearly", "You are permitted to say: 'This was wrong'"] },
  { title: "Separate the Institution from the Faith", icon: "✝️", color: PURPLE, desc: "Church hurt often bleeds into faith itself — the institution and the God it claims to represent become conflated. Separating them deliberately is an act of theological and psychological clarity: the failures of a church community are not evidence of God's failure or indifference.", steps: ["Ask: 'What specifically is my anger toward — a person, a community, a God?'", "Notice: 'Did God cause this, or did fallible human beings?'", "Find one space — Scripture, nature, a few trusted people — where God seems present", "Resist both the denial of pain ('it's fine, God is good') and total collapse ('God is like them')"] },
  { title: "Take Time Before Trusting Another Community", icon: "⏳", color: "#F59E0B", desc: "Rushing back into community after church hurt can replicate the pattern. Take time to heal, to understand what happened, and to develop clearer instincts about the warning signs of unhealthy church culture before reinvesting in a new community.", steps: ["You do not have to find a new church immediately — heal first", "When you do look: observe how leadership handles conflict and dissent", "Look for communities where 'I don't know' and 'I was wrong' are possible", "Ask: 'Is this community safe for the vulnerable, or only for the powerful?'"] },
  { title: "Consider Professional Support", icon: "🤝", color: "#EF4444", desc: "Church hurt is a genuine trauma — it involves betrayal, often spiritual abuse, and can cause lasting psychological and spiritual damage. A therapist who understands religious trauma can provide support that friends and family (still embedded in similar communities) sometimes cannot.", steps: ["Look for therapists who specialize in religious trauma or spiritual abuse", "The Center for Healthy Church Leadership has resources for survivors", "Give yourself permission to be angry, confused, and grieving — these are normal responses to real harm", "Recovery is not 'getting over it'; it is integrating what happened into your life story truthfully"] },
];

const SCRIPTURE = [
  { verse: "Psalm 55:12-14", text: "If an enemy were insulting me, I could endure it... But it is you, a man like myself, my companion, my close friend, with whom I once enjoyed sweet fellowship at the house of God." },
  { verse: "Matthew 18:6", text: "If anyone causes one of these little ones — those who believe in me — to stumble, it would be better for them to have a large millstone hung around their neck and to be drowned in the depths of the sea." },
  { verse: "Psalm 34:18", text: "The LORD is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Romans 8:38-39", text: "Neither death nor life, neither angels nor demons... nor any powers... will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "Isaiah 53:3", text: "He was despised and rejected by mankind, a man of suffering, and familiar with pain. Like one from whom people hide their faces he was despised, and we held him in low esteem." },
  { verse: "Lamentations 3:55-57", text: "I called on your name, LORD, from the depths of the pit. You heard my plea: 'Do not close your ears to my cry for relief.' You came near when I called you, and you said, 'Do not fear.'" },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function ChurchHurtPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_church_hurt_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_church_hurt_voice", "scazzero");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type ChurchHurtJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [churchHurtJournal, setChurchHurtJournal] = useState<ChurchHurtJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_churchhurtj_entries") ?? "[]"); } catch { return []; } });
  const [jchFeeling, setJchFeeling] = useState("");
  const [jchTruth, setJchTruth] = useState("");
  const [jchStep, setJchStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_churchhurtj_entries", JSON.stringify(churchHurtJournal)); } catch {} }, [churchHurtJournal]);
  function saveChurchHurtEntry() {
    if (!jchFeeling.trim() && !jchTruth.trim()) return;
    setChurchHurtJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jchFeeling, truth: jchTruth, step: jchStep }, ...prev]);
    setJchFeeling(""); setJchTruth(""); setJchStep("");
  }
  function deleteChurchHurtEntry(id: string) { setChurchHurtJournal(prev => prev.filter(e => e.id !== id)); }

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" }, { id: "voices", label: "🎓 Voices" },
    { id: "practices", label: "🛤️ Practices" }, { id: "scripture", label: "✝️ Scripture" },
    { id: "journal", label: "📓 Journal" }, { id: "videos", label: "▶️ Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content">
      <div style={{ background: "linear-gradient(180deg, rgba(107,79,187,0.08) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>💔</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Church Hurt</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto", lineHeight: 1.75 }}>
          Being hurt by the church is not the same as being abandoned by God.
          Theology, wisdom, and a path forward for those wounded by communities that should have healed.
        </p>
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
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Healing Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Write honestly about what happened and where you are in the process of healing.
                You are permitted to feel angry, confused, grieving, and hopeful at the same time.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jchFeeling} onChange={e => setJchFeeling(e.target.value)}
                  placeholder="What happened, and how am I feeling about it now?"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jchTruth} onChange={e => setJchTruth(e.target.value)}
                  placeholder="One true thing I'm holding — about God, about myself, about my future..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jchStep} onChange={e => setJchStep(e.target.value)}
                  placeholder="One small step toward healing or clarity..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveChurchHurtEntry}
                  style={{ alignSelf: "flex-start", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {churchHurtJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. Your story deserves to be told honestly.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {churchHurtJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteChurchHurtEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
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
              { videoId: "3_-OEdC2uaY", title: "When the Church Hurts: Finding Your Way Back to God", channel: "The Gospel Coalition", description: "A pastoral conversation about church hurt — what it is, why it happens, and how to hold onto faith when the community that was supposed to represent Jesus has caused harm." },
              { videoId: "DShV4sG1LoE", title: "A Church Called Tov — Scot McKnight", channel: "Northern Seminary", description: "McKnight on the patterns of toxic church culture — the hero-driven church, the silencing of victims, the protection of power — and what a Tov (goodness-centered) church looks like instead." },
              { videoId: "jmz1l-BqXxU", title: "Emotionally Healthy Churches — Peter Scazzero", channel: "Emotionally Healthy Discipleship", description: "Scazzero on what makes a church community emotionally healthy — how to recognize the patterns of immature leadership that produce harm, and what transformation looks like." },
              { videoId: "PKyLYSfmTwI", title: "Healing After Spiritual Abuse", channel: "The Allender Center", description: "Dan Allender on the specific damage done by spiritual abuse — how it differs from ordinary harm, why it cuts so deep, and what genuine healing from it requires." },
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
