"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "What Was Done to You Was Sin — Not Your Sin", verse: "2 Samuel 13:14", body: "The biblical account of Tamar's assault by Amnon names what happened with clarity — 'he violated her' — and records Tamar's grief and desolation without a single word suggesting she bore responsibility. The Bible does not blame victims of sexual violence for what was done to them. You did not cause this. You were not partly responsible. The sin belongs entirely to the person who committed it, and the God of Scripture does not distribute it otherwise." },
  { title: "God Cares About Sexual Violence — With Intensity", verse: "Psalm 10:14", body: "'But you, God, see the trouble of the afflicted; you consider their grief and take it in hand. The victims commit themselves to you; you are the helper of the fatherless' (Psalm 10:14). The God of Scripture is not neutral about sexual violence. He records it, names it, and aligns himself with the victim. The consistent posture of Scripture toward those who exploit the vulnerable is condemnation; toward the violated it is compassion. What was done to you matters to God in the most direct way." },
  { title: "Shame Belongs to the Perpetrator — Not to You", verse: "Isaiah 61:7", body: "'Instead of your shame you will receive a double portion, and instead of disgrace you will rejoice in your inheritance' (Isaiah 61:7). Sexual abuse installs shame in the victim — which is one of its most lasting forms of damage. The shame belongs to the person who committed the act. Isaiah's promise is specifically addressed to those who bear shame they should not carry: the shame will be replaced, the double portion of disgrace reversed. This is not a platitude; it is a specific promise about the direction of the story." },
  { title: "Healing Is a Long Road — and That Is Normal", verse: "Psalm 31:7", body: "'I will be glad and rejoice in your love, for you saw my affliction and knew the anguish of my soul' (Psalm 31:7). Recovery from sexual abuse is not linear, not quick, and rarely complete without sustained, specialized support. The trauma responses — flashbacks, triggers, hypervigilance, numbness, difficulty with intimacy — are normal responses to abnormal harm. They are not signs of spiritual deficiency. God sees the anguish of your soul; recovery is a long road walked in his presence, not a test of sufficient faith." },
  { title: "Jesus Knows Bodily Violation from the Inside", verse: "Isaiah 53:5", body: "'But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed' (Isaiah 53:5). The Incarnation means God has a body. The crucifixion means that body was stripped, humiliated, and violated. Jesus does not meet survivors of sexual abuse from a position of theoretical empathy; he meets them from inside the experience of bodily violation. He is not distant from what was done to you." },
];

const VOICES = [
  { id: "allender", name: "Dan Allender", era: "1952–present", context: "Psychologist; The Wounded Heart; sexual abuse recovery", bio: "Allender's The Wounded Heart is one of the most widely used and respected Christian resources for survivors of sexual abuse. His work addresses both the psychological dynamics of abuse — the shame, the self-blame, the relationship disruptions — and the theological dimensions, including the specific ways abuse damages a person's relationship with God. His integration of clinical depth and spiritual sensitivity is rare.", quote: "Sexual abuse is a violation that reaches the deepest parts of a person: the body, the soul, the relationship to God and to others. The healing work is correspondingly deep — slow, non-linear, requiring both excellent clinical care and genuine spiritual accompaniment. There are no shortcuts. But there is a real destination.", contribution: "Allender's The Wounded Heart gave the church its first major resource for survivors of sexual abuse — opening a conversation that had previously been largely silenced, and providing a framework for both healing and pastoral support." },
  { id: "langberg", name: "Diane Langberg", era: "1950–present", context: "Psychologist; Redeeming Power; trauma and abuse", bio: "Langberg has spent decades working with trauma and sexual abuse survivors and has become one of the most significant voices challenging the church to respond rightly to those who have been abused. Her clinical work and her theology interweave throughout her teaching — taking both the psychological reality of trauma and the theological significance of the person seriously.", quote: "Sexual abuse is not just a psychological problem with spiritual implications. It is a spiritual problem with psychological manifestations. When someone uses another person's body for their own gratification without consent, they are doing violence to the image of God. The damage is that deep. The healing requires that it be addressed at that depth.", contribution: "Langberg equipped both counselors and church leaders to understand sexual abuse at the depth it deserves, and to accompany survivors with the theological seriousness and clinical competence that real healing requires." },
  { id: "holcomb", name: "Justin Holcomb", era: "1975–present", context: "Is It My Fault?; theology of abuse and dignity", bio: "Holcomb's Is It My Fault? (co-authored with Lindsey Holcomb) addresses the central lie that every sexual abuse survivor must confront: that the abuse was somehow their responsibility. His theological treatment of dignity, consent, and God's response to those who have been abused is one of the most accessible and healing resources available for survivors.", quote: "The lie that you caused this, that you are somehow responsible, that God sees you as dirty or damaged — these are the lies that the abuse planted. They are not true. The God who made you in his image, who sees the abuse that was done to you, and who promises to restore what was stolen is not looking at you with blame. He is looking at you with fierce love.", contribution: "Holcomb provided a theologically grounded resource for survivors that specifically addressed and dismantled the shame-and-blame dynamics that keep so many from pursuing healing." },
];

const PRACTICES = [
  { title: "Safety and Professional Support Come First", icon: "🛡️", color: "#EF4444", desc: "Sexual abuse is a genuine trauma requiring specialized professional care. Spiritual support is important but it does not substitute for trauma-informed therapy. Finding a safe therapist is the most important first step.", steps: ["RAINN National Sexual Assault Hotline: 1-800-656-HOPE (4673) — available 24/7", "rainn.org has an online chat option and a local provider search", "Look for therapists with EMDR, trauma-focused CBT, or certified trauma therapy training", "If the abuse was recent or ongoing: contact the police or a sexual assault advocacy center"] },
  { title: "Name It Accurately", icon: "🔍", color: PURPLE, desc: "Many survivors minimize what happened — particularly when the perpetrator was a family member, trusted authority figure, or someone they cared about. Naming what happened accurately is an act of self-respect and the beginning of healing.", steps: ["What happened to you was sexual abuse — you do not have to soften that language for others' comfort", "You were not responsible, regardless of your age, what you wore, whether you initially complied, or what relationship you had with the perpetrator", "Resistance to naming it often protects the perpetrator at the expense of your own healing", "A trauma-informed therapist can help you name what happened without shame"] },
  { title: "Rebuild Your Relationship with Your Body", icon: "🌱", color: GREEN, desc: "Sexual abuse causes dissociation from the body — survivors often describe feeling disconnected from, at war with, or ashamed of their physical selves. Rebuilding a safe relationship with the body is a specific part of recovery that takes time.", steps: ["Gentle embodiment practices can help: yoga, walking, bodywork with a safe practitioner", "Give yourself permission to move through intimacy at your own pace — your body belongs to you", "Tell your doctor about your history — some medical procedures can be unexpectedly triggering", "Physical safety is as important as emotional safety — identify what physical contexts feel safe"] },
  { title: "Rebuild Trust Slowly and with Evidence", icon: "🤝", color: PURPLE, desc: "Sexual abuse often damages the capacity to trust — particularly when the perpetrator was a trusted person. Rebuilding trust is legitimate, necessary, and requires evidence rather than willingness alone.", steps: ["You do not have to trust people before they have demonstrated trustworthiness", "Identify the qualities that constitute trustworthiness for you — and look for evidence of them before investing", "Healthy relationships can hold your story without exploiting it or minimizing it", "A therapist who specializes in abuse recovery can help you develop discernment about trustworthiness"] },
];

const SCRIPTURE = [
  { verse: "Isaiah 61:7", text: "Instead of your shame you will receive a double portion, and instead of disgrace you will rejoice in your inheritance." },
  { verse: "Psalm 10:14", text: "But you, God, see the trouble of the afflicted; you consider their grief and take it in hand. The victims commit themselves to you." },
  { verse: "Romans 8:38-39", text: "Neither death nor life... nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "Psalm 34:18", text: "The LORD is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Isaiah 43:1", text: "Do not fear, for I have redeemed you; I have summoned you by name; you are mine." },
  { verse: "Revelation 21:5", text: "He who was seated on the throne said, 'I am making everything new!'" },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function SexualAbusePage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_sexual_abuse_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_sexual_abuse_voice", "allender");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type SexualAbuseJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [saJournal, setSaJournal] = useState<SexualAbuseJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_sexabusei_entries") ?? "[]"); } catch { return []; } });
  const [jsaFeeling, setJsaFeeling] = useState("");
  const [jsaTruth, setJsaTruth] = useState("");
  const [jsaStep, setJsaStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_sexabusei_entries", JSON.stringify(saJournal)); } catch {} }, [saJournal]);
  function saveSaEntry() {
    if (!jsaFeeling.trim() && !jsaTruth.trim()) return;
    setSaJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jsaFeeling, truth: jsaTruth, step: jsaStep }, ...prev]);
    setJsaFeeling(""); setJsaTruth(""); setJsaStep("");
  }
  function deleteSaEntry(id: string) { setSaJournal(prev => prev.filter(e => e.id !== id)); }

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" }, { id: "voices", label: "🎓 Voices" },
    { id: "practices", label: "🛤️ Practices" }, { id: "scripture", label: "✝️ Scripture" },
    { id: "journal", label: "📓 Journal" }, { id: "videos", label: "▶️ Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content">
      <div style={{ background: "linear-gradient(180deg, rgba(107,79,187,0.10) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>🕊️</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Sexual Abuse Recovery</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto 24px", lineHeight: 1.75 }}>
          What was done to you was sin — not your sin. God sees the afflicted.
          Theology, voices, and resources for survivors seeking healing.
        </p>
        <div style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.35)", borderRadius: 10, padding: "16px 20px", maxWidth: 520, margin: "0 auto", fontSize: 14, color: "#F8B0B0", lineHeight: 1.8 }}>
          <strong>RAINN Hotline:</strong> <strong>1-800-656-4673</strong> (24/7, confidential)<br />
          <strong>Crisis support:</strong> Call or text <strong>988</strong><br />
          <strong>rainn.org</strong> for online chat and local resources
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
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Healing Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Write at your own pace, only what feels safe to write. Your healing is yours to carry at your own speed.
                The shame is not yours to carry at all.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jsaFeeling} onChange={e => setJsaFeeling(e.target.value)}
                  placeholder="What am I feeling today? What is present, what is difficult, what feels closer to healing?"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jsaTruth} onChange={e => setJsaTruth(e.target.value)}
                  placeholder="One true thing about who I am, what God sees when he looks at me, or what healing looks like for me..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jsaStep} onChange={e => setJsaStep(e.target.value)}
                  placeholder="One small step toward safety, healing, or connection today..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveSaEntry}
                  style={{ alignSelf: "flex-start", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {saJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. Your healing is worth recording, one small step at a time.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {saJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteSaEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
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
              { videoId: "Ii2m8BLvD9s", title: "Healing the Wounded Heart — Dan Allender", channel: "The Allender Center", description: "Allender on the specific dynamics of sexual abuse recovery — the shame, the self-blame, the relationship disruptions — and what genuine, deep healing requires in terms of clinical and spiritual support." },
              { videoId: "v2DOpFdI0b8", title: "Is It My Fault? Theology of Sexual Abuse", channel: "The Gospel Coalition", description: "Justin and Lindsey Holcomb on the theological truth that dismantles victim-blame — what God says about those who have been abused, and what the church's responsibility to survivors looks like." },
              { videoId: "FiQZjjf0OxI", title: "Power and the Church: Diane Langberg on Abuse", channel: "Diane Langberg", description: "Langberg on how sexual abuse intersects with power dynamics — in family systems, in churches, in institutions — and what a genuinely safe, accountable response to survivors looks like." },
              { videoId: "9KoTUyGHReA", title: "Rebuilding After Sexual Trauma", channel: "RAINN", description: "Resources for survivors on the recovery process — what to expect, what helps, and how to navigate the specific challenges of rebuilding a sense of safety and wholeness after sexual abuse." },
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
