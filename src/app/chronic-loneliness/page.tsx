"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Declared Aloneness Not Good", verse: "Genesis 2:18", text: "The Lord God said, 'It is not good for the man to be alone.' This declaration came before the fall — aloneness was recognized as a problem in an unfallen world, before sin entered. Loneliness is not evidence of spiritual failure or personal deficiency. It is a signal built into our creaturely nature that we were made for deep connection and that we are not yet fully at home. Taking it seriously is not weakness — it is listening to God's design." },
  { title: "Jesus Experienced Abandonment", verse: "Mark 14:50", text: "Then everyone deserted him and fled. Jesus was abandoned by his closest friends at his greatest moment of need. He knew the particular agony of reaching out for human presence and finding no one. The God we approach in loneliness is not a stranger to it — he entered it fully, to the point of crying out that God himself had forsaken him. He is a priest who can sympathize, not from distance but from having been there." },
  { title: "The Church Was Meant to End Chronic Aloneness", verse: "Psalm 68:6", text: "God sets the lonely in families, he leads out the prisoners with singing. This Psalm names one of God's specific intentions: to place isolated people within communities. The New Testament church was the fulfillment of this — a radical kinship that transcended race, class, family, and social status. When chronic loneliness persists within or outside the church, something in the community's functioning is broken, not just the individual." },
  { title: "Loneliness Is a Health Crisis and a Spiritual One", verse: "Proverbs 18:14", text: "The human spirit can endure in sickness, but a crushed spirit — who can bear it? Chronic loneliness is now recognized as a public health crisis more dangerous than smoking. It reshapes the brain, elevates cortisol, disrupts sleep, and shortens life. But it is also a spiritual crisis: the image of God who is intrinsically relational — Father, Son, Spirit in eternal communion — is expressed by people who were made to live in covenant community." },
  { title: "Lament Over Loneliness Is Prayer", verse: "Psalm 25:16", text: "Turn to me and be gracious to me, for I am lonely and afflicted. David does not spiritualize his loneliness. He does not say 'I know I should be satisfied in you alone.' He cries out to God naming exactly what he is experiencing. The psalms give us language for bringing our loneliness to God as prayer rather than hiding it as evidence of inadequate faith." },
];

const voices = [
  { id: "v1", name: "Vivek Murthy, MD", role: "Former US Surgeon General", quote: "Loneliness is not just a feeling. It is a serious public health concern — one that increases the risk of premature death as much as smoking fifteen cigarettes a day.", bio: "Vivek Murthy, the former Surgeon General of the United States, issued a landmark advisory on the loneliness epidemic in 2023. His book Together: The Healing Power of Human Connection in a Sometimes Lonely World examines the biological, social, and structural dimensions of loneliness and argues for systematic community investment. His work provides essential context for why the church's community-formation mission is a matter of life and death." },
  { id: "v2", name: "Wesley Hill", role: "Author, Professor of Biblical Studies", quote: "The church should be the primary place where no one is chronically alone — where the lonely are literally set in families. But we have often let the nuclear family become the exclusive unit and left single adults invisible.", bio: "Wesley Hill is the author of Spiritual Friendship and Washed and Waiting. He writes about the New Testament vision of the church as a primary kinship community — a vision that, if taken seriously, would make chronic loneliness structurally impossible. He is one of the most important Christian voices on what genuine friendship and non-romantic community should look like for adults." },
  { id: "v3", name: "Jennie Allen", role: "Author, IF:Gathering Founder", quote: "We were never meant to do this alone. The deepest ache most people carry is not for success or comfort — it is for someone who truly knows them.", bio: "Jennie Allen is the founder of IF:Gathering and the author of Find Your People: Building Deep Community in a Lonely World. Her work is practically oriented, helping Christians move from surface-level church attendance to the kind of vulnerable, interdependent community that actually heals isolation. She writes specifically for the large population of Christians who are in church but still profoundly lonely." },
  { id: "v4", name: "John Cacioppo", role: "Neuroscientist, University of Chicago", quote: "Loneliness is a signal — like hunger — that something the organism needs is missing. Ignoring it does not make it go away; it intensifies the problem.", bio: "John Cacioppo was one of the foremost researchers on loneliness, whose landmark studies established its medical effects and the social brain's need for genuine connection. His book Loneliness: Human Nature and the Need for Social Connection provides the scientific foundation for understanding why Christian community is not optional sentiment — it is biological necessity and theological mandate simultaneously." },
];

const practices = [
  { icon: "🔍", title: "Distinguish Loneliness Types", text: "Chronic loneliness can be: intimate (no close friends), relational (no social network), or collective (no sense of belonging to a community). Naming which type you experience most acutely points to different interventions. You may have many acquaintances but no one who truly knows you — that is intimate loneliness, and it requires a different response than social isolation." },
  { icon: "📅", title: "Pursue Consistency Before Depth", text: "Deep friendship is built through accumulated time, not intensity. Research shows that it takes approximately 50 hours to move from acquaintance to casual friend and 200 hours to close friend. The most effective action is finding consistent repeated contexts — a weekly small group, a regular exercise partner, a recurring meal — not occasional intense conversations." },
  { icon: "🤝", title: "Be the One Who Initiates", text: "Chronically lonely people often wait to be included. The painful reality is that most people are also mildly lonely and waiting for someone else to initiate. Breaking this pattern requires becoming the person who texts first, invites, plans, follows up — even when rejection feels likely. The risk is real but so is the potential." },
  { icon: "⛪", title: "Invest in a Smaller Community Within Your Church", text: "A congregation of 200 cannot cure loneliness; a small group of 8-12 who meet weekly and share honestly can. If your church has small groups, join one and commit for a full year before evaluating. If not, form one. The institutional church is the context; the small community is where actual belonging happens." },
  { icon: "🌿", title: "Address Contributing Factors", text: "Depression, social anxiety, trauma history, neurodivergence, and shame all intensify chronic loneliness by making connection feel impossible or threatening. Working with a counselor on these underlying factors is often the most direct path to changing patterns that have persisted for years." },
  { icon: "🙏", title: "Bring Your Loneliness to God Exactly as It Is", text: "Do not pray 'I know I should be satisfied in you, but...' Pray Psalm 25:16 as written: 'I am lonely and afflicted.' God can handle the unfiltered version. Spiritual bypassing — rushing to truths about God's presence before processing the reality of the pain — usually keeps people stuck rather than moving them toward both God and community." },
];

const scriptures = [
  { verse: "Genesis 2:18", text: "The Lord God said, 'It is not good for the man to be alone. I will make a helper suitable for him.'" },
  { verse: "Psalm 25:16", text: "Turn to me and be gracious to me, for I am lonely and afflicted." },
  { verse: "Psalm 68:6", text: "God sets the lonely in families, he leads out the prisoners with singing; but the rebellious live in a sun-scorched land." },
  { verse: "Hebrews 4:15-16", text: "For we do not have a high priest who is unable to empathize with our weaknesses... Let us then approach God's throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need." },
  { verse: "John 15:15", text: "I no longer call you servants, because a servant does not know his master's business. Instead, I have called you friends, for everything that I learned from my Father I have made known to you." },
];

type CLEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function ChronicLonelinessPage() {
  const [tab, setTab] = useState("theology");
  const [clJournal, setClJournal] = useState<CLEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setClJournal(JSON.parse(localStorage.getItem("vine_chroniclonelinessj_entries") ?? "[]")); } catch { setClJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: CLEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...clJournal];
    setClJournal(updated);
    localStorage.setItem("vine_chroniclonelinessj_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = clJournal.filter(e => e.id !== id);
    setClJournal(updated);
    localStorage.setItem("vine_chroniclonelinessj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg, #0a1f14 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌌</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Chronic Loneliness</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>The persistent ache of being unseen and unknown — finding God who sees, and community that holds.</p>
        <div style={{ background: "#0a1f14", border: `1px solid ${GREEN}`, borderRadius: 8, padding: "0.75rem 1.25rem", maxWidth: 480, margin: "0 auto", fontSize: "0.85rem", color: MUTED }}>
          <strong style={{ color: GREEN }}>If you are in crisis:</strong> 988 Lifeline &nbsp;|&nbsp; Crisis Text: text HOME to 741741
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
              <textarea placeholder="What does my loneliness feel like right now? When is it worst?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What do I believe God sees when he looks at my loneliness?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="One small step toward connection I can take this week:" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {clJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{e.feeling}</p>}
                {e.truth && <p style={{ color: MUTED, fontStyle: "italic", marginBottom: "0.4rem", fontSize: "0.88rem" }}>{e.truth}</p>}
                {e.step && <p style={{ color: GREEN, fontSize: "0.85rem", margin: 0 }}>Step: {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "mC-zw0zCCtg", title: "Praying Our Fears and Loneliness", channel: "Tim Keller", description: "Tim Keller on bringing the deepest aches — including isolation and loneliness — to God in prayer, and what it means to be held by a God who is not distant from our pain." },
              { videoId: "7KMPN9OLoNo", title: "Suffering, Loneliness, and God's Grace", channel: "Joni Eareckson Tada", description: "Joni Tada speaks about the particular loneliness of suffering and disability — and how God meets us in the isolation that others cannot enter." },
              { videoId: "jmz1l-BqXxU", title: "Emotionally Healthy Churches", channel: "Peter Scazzero", description: "Scazzero on what genuine community looks like in churches — moving beyond shallow togetherness to the kind of honest, interdependent belonging that actually heals chronic aloneness." },
              { videoId: "eBl7gT7gQ6g", title: "Emotionally Healthy Spirituality", channel: "Peter Scazzero", description: "How unexamined emotional patterns — including fear of vulnerability and unprocessed shame — keep us isolated even when we are surrounded by people." },
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
  );
}
