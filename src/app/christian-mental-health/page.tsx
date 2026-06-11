"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#0D9488", TEXT = "#F2F2F8", MUTED = "#9898B3";

type MHEntry = { id: string; date: string; struggle: string; support: string; step: string };

export default function ChristianMentalHealthPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<MHEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_mentalhealth_entries") ?? "[]"); } catch { return []; }
  });
  const [jStruggle, setJStruggle] = useState("");
  const [jSupport, setJSupport] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => { localStorage.setItem("vine_mentalhealth_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jStruggle.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), struggle: jStruggle, support: jSupport, step: jStep }, ...prev]);
    setJStruggle(""); setJSupport(""); setJStep("");
  };

  const deleteEntry = (id: string) => setEntries(prev => prev.filter(e => e.id !== id));

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Faith &amp; Healing</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Christian Mental Health
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Mental illness is not a sign of insufficient faith &mdash; it is a sign of being human in a broken world. Scripture, incarnation, and good theology call the church to take mental health seriously.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "0.45rem 1.1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
              borderColor: tab === t.id ? ACCENT : BORDER, background: tab === t.id ? ACCENT + "22" : "transparent", color: tab === t.id ? ACCENT : MUTED,
            }}>{t.label}</button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              {
                title: "Mental Health Is Not a Spiritual Failure (Ps 42:11)",
                body: "Why are you cast down, O my soul, and why are you in turmoil within me? The Psalms are saturated with depression, anxiety, despair, and lament &mdash; written by people the Bible calls faithful. Elijah collapsed under a tree and asked to die after his greatest triumph (1 Kings 19). Jeremiah cursed the day of his birth (Jer 20:14-18). Paul wrote of being crushed, despairing of life itself (2 Cor 1:8). Mental illness is not a sign of insufficient faith; it is a sign of being human in a broken world. The stigma that still attaches to mental illness in some Christian communities does serious theological and pastoral harm.",
              },
              {
                title: "The Incarnation and the Suffering Body — Jesus Wept (John 11:35)",
                body: "Jesus wept at the tomb of Lazarus &mdash; not because he was ignorant of the resurrection but because grief is real, loss is real, and the suffering of those he loved was real. Jesus experienced sorrow (Isa 53:3), anger (Mark 3:5), exhaustion (John 4:6), fear (Luke 22:44), and the experience of abandonment (Mark 15:34). The incarnation means that God in Christ has entered the full range of human emotional experience. The Christian doctrine of the incarnation is the most radical possible affirmation that human emotional suffering is real and matters to God.",
              },
              {
                title: "Creation, Fall, and Mental Illness — Embodied Souls in a Broken World",
                body: "Human beings are not souls in bodies but embodied souls &mdash; the Hebrew nefesh (soul) encompasses the whole person, body included. Mental illness has biological, psychological, social, and spiritual dimensions: brain chemistry, trauma, relational disruption, and spiritual dryness can all contribute, often simultaneously. A Christian anthropology refuses the reduction of mental health to either purely spiritual causes (requiring only prayer) or purely biological causes (requiring only medication). People are whole persons, and effective care addresses the whole person.",
              },
              {
                title: "Seeking Help — the Wisdom of Care (Prov 11:14)",
                body: "Where there is no guidance, a people falls, but in an abundance of counselors there is safety. The wisdom literature commends the seeking of good counsel &mdash; this is not a compromise of faith but an expression of it. Seeking professional help for mental illness (therapy, medication, psychiatry) is not a sign of weak faith; it is the use of good gifts God has given through the common grace of medicine and psychology. The Christian who refuses professional help for serious depression or anxiety out of a conviction that prayer alone should suffice is making a theological error that often does serious harm.",
              },
              {
                title: "The Local Church — Community as Medicine (Gal 6:2)",
                body: "Carry each other&rsquo;s burdens, and in this way you will fulfill the law of Christ. The local church, at its best, is the most comprehensive mental health resource available: genuine community, purpose, belonging, narrative, shared practice, accountability, and the presence of God. The research on community, meaning, and mental health confirms what Scripture assumes. Churches that take the pastoral care of the mentally ill seriously &mdash; providing support groups, referring well, training leaders &mdash; function as genuine agents of healing. Churches that stigmatize, dismiss, or over-spiritualize mental illness cause serious additional harm.",
              },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Practices</h2>
            {[
              "If you are struggling with depression, anxiety, or another mental health condition, make an appointment with a professional this week &mdash; a counselor, therapist, or psychiatrist. This is not a failure of faith; it is wisdom.",
              "Tell one trusted person in your church about what you are going through &mdash; not to fix it but to not be alone in it. Shame thrives in isolation; exposure to trusted love begins to dissolve it.",
              "Practice the Psalms of lament (42, 43, 88) as honest prayer &mdash; bringing your actual emotional state to God rather than the emotional state you think you should have.",
              "Ask your church if it has a mental health support group or can refer you to a faith-based counseling resource &mdash; advocate for better support structures if they do not exist.",
              "Examine your own theology: do you believe that mental illness is primarily a spiritual problem requiring only spiritual solutions? Where did that belief come from, and does it hold up against Scripture and experience?",
            ].map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ background: ACCENT + "22", color: ACCENT, fontWeight: 800, borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.9rem" }}>{i + 1}</div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: p }} />
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Voices</h2>
            {[
              {
                name: "Matthew Stanford",
                work: "Grace for the Afflicted",
                quote: "The church should be the safest place in the world to be mentally ill. Instead, it is often one of the least safe &mdash; the place where people encounter shame, dismissal, and bad theology added to their already significant suffering. This must change.",
                bio: "Matthew Stanford is a neuroscientist and psychologist who has written extensively on the intersection of Christian faith and mental health. Grace for the Afflicted is written for both sufferers and church communities &mdash; addressing the most common mental illnesses with both clinical accuracy and genuine pastoral warmth. Stanford is a devout evangelical who refuses the false choice between faith and medicine.",
              },
              {
                name: "Edward Welch",
                work: "Depression: A Stubborn Darkness",
                quote: "Depression is not primarily a problem to be solved but a suffering to be accompanied. The sufferer does not need easy answers or more willpower &mdash; they need your presence, your honesty about your own weakness, and the God who enters darkness rather than avoiding it.",
                bio: "Edward Welch is a counselor and author at CCEF (Christian Counseling and Educational Foundation). Depression: A Stubborn Darkness is a pastoral guide that takes both the spiritual and physical dimensions of depression seriously &mdash; neither reducing it to sin nor ignoring the soul. Welch writes with hard-won wisdom and genuine compassion.",
              },
              {
                name: "Brene Brown",
                work: "The Gifts of Imperfection",
                quote: "Owning our story and loving ourselves through that process is the bravest thing we will ever do. Shame cannot survive being spoken. It dies when it meets empathy.",
                bio: "Brene Brown is a research professor and author whose work on shame, vulnerability, and belonging has been widely influential in both secular and Christian contexts. Her research on the damage shame does &mdash; particularly its connection to mental health struggles &mdash; has helped many Christians understand why the church&rsquo;s response to mental illness matters so much. Her work on belonging and connection provides language for what genuine Christian community can offer.",
              },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: TEXT }}>{v.name}</div>
                  <div style={{ color: ACCENT, fontSize: "0.85rem", marginTop: "0.15rem" }}><em>{v.work}</em></div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>
                  &ldquo;<span dangerouslySetInnerHTML={{ __html: v.quote }} />&rdquo;
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.bio }} />
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Scripture</h2>
            {[
              { ref: "Ps 42:11", text: "Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God." },
              { ref: "John 11:35", text: "Jesus wept." },
              { ref: "Gal 6:2", text: "Bear one another&rsquo;s burdens, and so fulfill the law of Christ." },
              { ref: "2 Cor 1:8-9", text: "For we were so utterly burdened beyond our strength that we despaired of life itself. Indeed, we felt that we had received the sentence of death. But that was to make us rely not on ourselves but on God who raises the dead." },
              { ref: "1 Kings 19:3-5", text: "Then he was afraid, and he arose and ran for his life... He asked that he might die, saying, &ldquo;It is enough; now, O Lord, take away my life.&rdquo; And he lay down and slept under a broom tree." },
              { ref: "Phil 4:6-7", text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.text }} />
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What struggle are you carrying right now?</label>
                  <textarea
                    value={jStruggle}
                    onChange={e => setJStruggle(e.target.value)}
                    placeholder="Name it as honestly as you can..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What support do you have or need?</label>
                  <textarea
                    value={jSupport}
                    onChange={e => setJSupport(e.target.value)}
                    placeholder="Community, professional help, Scripture, prayer..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What is one concrete next step?</label>
                  <textarea
                    value={jStep}
                    onChange={e => setJStep(e.target.value)}
                    placeholder="Make an appointment, tell one person, read a Psalm..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
              </div>
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.6rem 1.5rem", background: ACCENT, border: "none", borderRadius: 8, color: "#fff", cursor: "pointer", fontWeight: 700, fontSize: "0.93rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.82rem" }}>Delete</button>
                </div>
                {e.struggle && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Struggle</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.struggle}</p></div>}
                {e.support && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Support</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.support}</p></div>}
                {e.step && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Next Step</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.step}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="vMtYKrqQ3oM" title="Christianity and Mental Health: Breaking the Stigma" />
            <VideoEmbed videoId="IExQ1LiADqE" title="When Faith Meets Mental Illness &mdash; A Pastoral Response" />
            <VideoEmbed videoId="Yw4WMsf5G6k" title="Depression and the Christian Faith: Honest Conversations" />
            <VideoEmbed videoId="7eFSXv4tpNA" title="The Church and Mental Health: How to Build a Supportive Community" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
