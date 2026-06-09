"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Every Addiction Begins as a Bid for Something Good", verse: "Psalm 42:1-2", text: "As the deer pants for streams of water, so my soul pants for you, my God. My soul thirsts for God, for the living God. The longing beneath internet and gaming addiction is real: for connection, stimulation, competence, escape from pain. The problem is not the desire — God made us with deep desires — but that we have trained those desires to seek satisfaction in something that cannot deliver it. Naming the real need beneath the behavior is the beginning of recovery." },
  { title: "The Dopamine Loop and the Sin Structure", verse: "Romans 7:15", text: "I do not understand what I do. For what I want to do I do not do, but what I hate I do. Paul's description of the divided self maps precisely onto the neuroscience of behavioral addiction. Dopamine reward circuits become hijacked, creating compulsive behavior the person genuinely does not want and cannot stop by willpower alone. This is not an excuse — it is an explanation that should produce humility rather than contempt in those who do not struggle similarly." },
  { title: "Attention Is a Spiritual Practice", verse: "Psalm 101:3", text: "I will not look with approval on anything that is vile. Attention is not neutral — where we direct it shapes our desires, our imagination, and ultimately our character. The average person now spends over seven hours daily staring at screens. The spiritual formation question is not only what we consume but how the practice of constant digital stimulation is reshaping our capacity for silence, depth, patience, and presence to God and others." },
  { title: "The Body Is the Site of Formation", verse: "1 Corinthians 6:19-20", text: "Do you not know that your bodies are temples of the Holy Spirit? You are not your own; you were bought at a price. Therefore honor God with your bodies. Internet and gaming addiction are embodied addictions — the brain physically changes. Paul's temple theology extends to neuroplasticity: how we use our bodies and minds actually changes them. Recovery requires bodily disciplines — sleep, physical activity, time outside — not only mental resolve." },
  { title: "Community Is the Antidote to Isolation", verse: "Hebrews 10:25", text: "Not giving up meeting together, as some are in the habit of doing, but encouraging one another — and all the more as you see the Day approaching. Much online and gaming addiction is driven by loneliness and the inability to find authentic connection offline. The solution is not simply disconnection from screens — it is reconnection to real people. The church gathered, with all its messiness, is exactly the kind of community that breaks the isolation addiction feeds on." },
];

const voices = [
  { id: "v1", name: "Tony Reinke", role: "Author, Desiring God", quote: "Our phones are not neutral. They are the most sophisticated attention-capture devices ever created, engineered by brilliant people whose profit depends on our compulsion.", bio: "Tony Reinke is the author of 12 Ways Your Phone Is Changing You, a theologically rich exploration of how smartphones shape the soul. He writes from a Desiring God/Reformed perspective and connects Augustine's theology of desire to the dynamics of digital compulsion, offering a deeply Christian framework for examining screen habits." },
  { id: "v2", name: "Andrew Doan, MD", role: "Neuroscientist, Author", quote: "Video game and internet addiction produce measurable brain changes identical to those seen in substance addiction — the same pathways, the same withdrawal, the same loss of control.", bio: "Dr. Andrew Doan is a neuroscientist and former gaming addict who now researches internet gaming disorder. His clinical work and testimony — including his book Hooked on Games — provides both scientific clarity about the brain mechanisms involved and personal testimony about recovery. He speaks widely in Christian contexts about why willpower alone is insufficient." },
  { id: "v3", name: "Andy Crouch", role: "Author, Former Executive Editor Christianity Today", quote: "Technology is not a tool you use. It is an environment you inhabit — and environments form you whether you intend it or not.", bio: "Andy Crouch is the author of The Tech-Wise Family and Culture Making. His work on technology is among the most theologically sophisticated available, moving beyond simple moralism to ask how our technology shapes our loves, our imagination, and our capacity for the kind of presence that human flourishing requires. He offers constructive practices rather than mere prohibition." },
  { id: "v4", name: "Johann Hari", role: "Author, Journalist", quote: "The opposite of addiction is not sobriety — it is connection. People who are deeply connected don't need to escape.", bio: "Johann Hari is the author of Lost Connections and Stolen Focus, which examine the social and environmental roots of addiction, depression, and attention dysfunction. He is not a Christian writer but his central thesis — that disconnection is the driver of addiction — aligns profoundly with the Christian vision of community as the primary context for human flourishing and recovery." },
];

const practices = [
  { icon: "📊", title: "Do an Honest Screen Time Audit", text: "Most people significantly underestimate their screen usage. Look at your phone's screen time data (Settings > Screen Time on iPhone) and your gaming hours honestly. Naming the actual number — without minimizing — is the necessary first step." },
  { icon: "⏰", title: "Implement a Hard Stop Time", text: "Pick a time — 9pm, 10pm, one hour before bed — and make it absolute. Charge your phone outside the bedroom. Use a router timer to disable wifi at night. Structural constraints work better than willpower-only decisions repeated daily." },
  { icon: "🧑‍🤝‍🧑", title: "Name a Real-World Accountability Partner", text: "Tell one person specifically what you are trying to change. Not vaguely 'I'm trying to cut back on screens' but: 'I spend 6 hours a day gaming and I want help changing that.' The specificity creates real accountability and real support." },
  { icon: "🌿", title: "Replace, Not Just Remove", text: "Abruptly removing the addictive behavior without replacing the need it met (connection, stimulation, escape, competence) creates a vacuum. Plan what you will do instead during the times you previously used: walk, call a friend, read, exercise." },
  { icon: "🧠", title: "Consider a Digital Sabbath", text: "One full day per week offline — no phone, no social media, no gaming — is a radical but transformative practice. Start with a half-day. The discomfort itself is diagnostic: it reveals how dependent you have become and begins to rebuild your capacity for silence and presence." },
  { icon: "📞", title: "Seek Professional Help If Needed", text: "Internet Gaming Disorder is recognized in DSM-5-TR. Cognitive behavioral therapy (CBT) adapted for behavioral addiction is evidence-based and effective. Finding a therapist who understands both the clinical picture and, ideally, a Christian worldview, can accelerate recovery significantly." },
];

const scriptures = [
  { verse: "Psalm 42:1", text: "As the deer pants for streams of water, so my soul pants for you, my God." },
  { verse: "Romans 7:15", text: "I do not understand what I do. For what I want to do I do not do, but what I hate I do." },
  { verse: "1 Corinthians 6:12", text: "I have the right to do anything — but not everything is beneficial. I have the right to do anything — but I will not be mastered by anything." },
  { verse: "Psalm 101:3", text: "I will not look with approval on anything that is vile. I hate what faithless people do; I will have no part in it." },
  { verse: "Hebrews 12:1", text: "Let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us." },
];

type OAEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function OnlineAddictionPage() {
  const [tab, setTab] = useState("theology");
  const [oaJournal, setOaJournal] = useState<OAEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setOaJournal(JSON.parse(localStorage.getItem("vine_onlineaddictionj_entries") ?? "[]")); } catch { setOaJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: OAEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...oaJournal];
    setOaJournal(updated);
    localStorage.setItem("vine_onlineaddictionj_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = oaJournal.filter(e => e.id !== id);
    setOaJournal(updated);
    localStorage.setItem("vine_onlineaddictionj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #0a1f14 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>📱</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Online & Gaming Addiction</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>When screens become compulsion — finding freedom, real connection, and a reordered attention.</p>
        <div style={{ background: "#0a1f14", border: `1px solid ${GREEN}`, borderRadius: 8, padding: "0.75rem 1.25rem", maxWidth: 480, margin: "0 auto", fontSize: "0.85rem", color: MUTED }}>
          <strong style={{ color: GREEN }}>Support:</strong> SAMHSA 1-800-662-4357 &nbsp;|&nbsp; 988 Lifeline &nbsp;|&nbsp; Internet/Gaming Addiction Therapist Finder: psychologytoday.com
        </div>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", padding: "1rem", overflowX: "auto", justifyContent: "center", flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
        ))}
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" }}>
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.3rem", textTransform: "uppercase" }}>{t.verse}</p>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem", color: TEXT }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "1rem", fontSize: "0.95rem" }}>"{v.quote}"</p>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{v.name}</p>
                <p style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ fontWeight: 700, color: TEXT, marginBottom: "0.35rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, lineHeight: 1.65, margin: 0, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", borderLeft: `4px solid ${GREEN}` }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, color: TEXT, marginBottom: "1rem", fontSize: "1rem" }}>Private Journal</h3>
              <textarea placeholder="What triggers my heaviest screen use? What am I running from or toward?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What real need is being met by screens that I can meet another way?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="One concrete change I am making this week:" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {oaJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{e.feeling}</p>}
                {e.truth && <p style={{ color: MUTED, fontStyle: "italic", marginBottom: "0.4rem", fontSize: "0.88rem" }}>{e.truth}</p>}
                {e.step && <p style={{ color: GREEN, fontSize: "0.85rem", margin: 0 }}>Change: {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "dQl4izxPeNU", title: "The Social Dilemma", channel: "Tristan Harris / Netflix", description: "Former tech insiders reveal how social media platforms are engineered to create compulsive use — essential context for understanding why willpower alone is not enough." },
              { videoId: "dy9nwe9zeU8", title: "How to Overcome Your Addictions", channel: "Tony Evans", description: "Tony Evans addresses the spiritual roots of addiction and the biblical framework for freedom, combining theological depth with pastoral compassion." },
              { videoId: "iK0NjiBXKN4", title: "How Do I Get Free from Addiction?", channel: "Gospel-Centered", description: "A gospel-centered look at behavioral addiction — what drives compulsive behavior, what the cross offers, and what recovery requires in community." },
              { videoId: "j9phNEaPrv8", title: "Is Addiction a Sign of Weakness?", channel: "Ligonier Ministries", description: "Ligonier addresses the theology of addiction — is it sin, sickness, or both? — and what a grace-filled, biblically serious approach to recovery looks like." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
