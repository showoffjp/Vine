"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Thomas Was Not Expelled for Doubting", verse: "John 20:27", text: "Then he said to Thomas, 'Put your finger here; see my hands. Reach out your hand and put it into my side. Stop doubting and believe.' Jesus's response to Thomas's doubt was not rebuke but presence. He did not expel Thomas from the disciples or tell him his doubt was sinful. He showed up — with evidence, with the specific offer Thomas had asked for, with gentleness. The God of the gospel does not flee from honest doubt. He enters it." },
  { title: "Faith and Doubt Are Not Opposites', verse: 'Mark 9:24", text: "I do believe; help me overcome my unbelief! The father's cry to Jesus is one of the most honest statements in the Gospels. He does not pretend certainty he does not have. He does not fabricate confident faith to obtain healing. He brings his mixture — partial faith, real unbelief — to Jesus and asks for help. Jesus healed his son. The prayer was heard. Doubt mixed with faith is not disqualifying; it is the honest posture of most real believers." },
  { title: "Chronic Doubt Often Has Emotional Roots", verse: "Psalm 22:1-2", text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? My God, I cry out by day, but you do not answer. Not all doubt is primarily intellectual. Chronic doubt is often fueled by unanswered prayer, unprocessed suffering, relational betrayal, or spiritual abuse — the felt absence of God that has calcified into intellectual disbelief. Addressing the emotional and relational roots of doubt is often more productive than pursuing purely apologetic solutions." },
  { title: "Honest Questions Are an Act of Trust', verse: 'Jeremiah 20:7", text: "You deceived me, Lord, and I was deceived; you overpowered me and prevailed. Jeremiah's complaint to God — accusatory, raw, perhaps even unjust — is remarkable precisely because it is directed at God. He is arguing with God rather than abandoning him. Persistent honest engagement with God, even when that engagement is accusatory, is a form of relationship. It is the person who stops talking to God who has actually lost faith." },
  { title: "The Resurrection Is the Non-Negotiable Core", verse: "1 Corinthians 15:17", text: "And if Christ has not been raised, your faith is futile; you are still in your sins. Paul, unusually, names the one claim that Christianity stands or falls on: the bodily resurrection of Jesus. Not all doctrines carry equal weight. If chronic doubt has reached the point of questioning the resurrection specifically, this is the right place to focus — examining the historical evidence and theological logic for or against it, rather than defending a thousand peripheral claims simultaneously." },
];

const voices = [
  { id: "v1", name: "Timothy Keller", role: "Late Author, Pastor", quote: "Doubts about Christianity are not evidence of superior intelligence. They are evidence of a person who is taking the questions seriously — which is what faith has always called for.", bio: "Tim Keller addressed intellectual doubt directly in The Reason for God and in the first half of Making Sense of God, providing some of the most accessible and intellectually serious defenses of Christian faith available. He consistently made the case that both belief and unbelief require faith — and that the evidence weighs toward the Christian account." },
  { id: "v2", name: "Mike McHargue", role: "Author, Podcaster", quote: "I lost my faith in my 30s after years of attending church. What I discovered is that the path back to God was not through intellectual certainty — it was through practice, community, and the willingness to remain in the tension.", bio: "Mike McHargue (Science Mike) is a former evangelical who deconverted, then experienced a reconversion, and has written about the process in Finding God in the Waves. His perspective — unusual for its combination of scientific rigor, personal honesty about doubt, and eventual re-engagement with faith — provides a framework for Christians navigating persistent intellectual and experiential doubt." },
  { id: "v3", name: "Alister McGrath", role: "Theologian, Oxford", quote: "Doubt is not the absence of faith — it is faith's necessary companion. The person who never doubts either does not care enough about what they believe or has not thought about it seriously.", bio: "Alister McGrath is a scientist, theologian, and the author of Doubt: Handling It Honestly, The Dawkins Delusion, and numerous works on Christian intellectual life. His work provides intellectually serious theological engagement with the most common sources of doubt while treating the doubter with pastoral care rather than defensiveness or contempt." },
  { id: "v4", name: "Barbara Brown Taylor", role: "Author, Episcopal Priest", quote: "Sometimes the most faithful thing you can do is stay at the table even when the food seems inedible — because the Host is still there, even when you cannot taste his presence.", bio: "Barbara Brown Taylor is the author of Learning to Walk in the Dark and Holy Envy. Her work addresses the spiritual experience of absence, doubt, and the darkness of faith with pastoral and literary beauty. She offers a framework for remaining in Christian community and practice during periods of intellectual and experiential doubt without requiring resolution as the price of membership." },
];

const practices = [
  { icon: "🔍", title: "Identify What Kind of Doubt You Are Experiencing", text: "Intellectual doubt (about the truth of Christian claims), experiential doubt (God feels absent), relational doubt (caused by betrayal in community), and moral doubt (about the ethics of Christianity) require different responses. Diagnosing accurately before reaching for solutions prevents applying the wrong treatment." },
  { icon: "📖", title: "Read One Serious Defense of the Faith", text: "If your doubt is primarily intellectual, read one careful, honest Christian thinker who takes the objections seriously rather than dismissing them. Keller's The Reason for God, McGrath's Doubt, or NT Wright's The Resurrection of the Son of God are good starting points. Apologetics that pretend the questions are simple are worse than useless." },
  { icon: "🙏", title: "Pray Even When You Are Not Sure Anyone Is Listening", text: "The practice of prayer during doubt is paradoxical but consistently reported as faith-sustaining by those who have passed through dark seasons. You can pray: 'I am not sure you are there, but if you are, I am here.' Continuing the practice of address maintains a posture of availability even when certainty is absent." },
  { icon: "🤝", title: "Stay in Community", text: "Doubt intensifies in isolation. Christians who leave church during doubt and spend years alone with their questions almost universally report their faith weakening further. Staying in community — even with uncomfortable honesty about your questions — provides the relational and liturgical context in which faith can be re-encountered." },
  { icon: "📅", title: "Follow the Church Calendar", text: "The liturgical year — Advent, Epiphany, Lent, Easter, Pentecost — provides a structure for inhabiting the Christian story even when you cannot affirm every piece of it intellectually. Following the calendar as a practice can sustain faith through seasons of intellectual winter." },
  { icon: "💬", title: "Find a Spiritual Director or Honest Conversation Partner", text: "A spiritual director trained to accompany people through doubt — not to resolve it but to sit with it — can provide the kind of patient accompaniment that chronic doubt requires. This is different from a pastor whose job is to defend the faith or a counselor whose job is to reduce anxiety." },
];

const scriptures = [
  { verse: "Mark 9:24", text: "Immediately the boy's father exclaimed: 'I do believe; help me overcome my unbelief!'" },
  { verse: "John 20:27", text: "Then he said to Thomas, 'Put your finger here; see my hands. Reach out your hand and put it into my side. Stop doubting and believe.'" },
  { verse: "Jeremiah 29:13", text: "You will seek me and find me when you seek me with all your heart." },
  { verse: "Hebrews 11:1", text: "Now faith is confidence in what we hope for and assurance about what we do not see." },
  { verse: "Psalm 88:18", text: "You have taken from me friend and neighbor — darkness is my closest friend." },
];

type CDEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function ChronicDoubtPage() {
  const [tab, setTab] = useState("theology");
  const [cdJournal, setCdJournal] = useState<CDEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setCdJournal(JSON.parse(localStorage.getItem("vine_chronicdoubtj_entries") ?? "[]")); } catch { setCdJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: CDEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...cdJournal];
    setCdJournal(updated);
    localStorage.setItem("vine_chronicdoubtj_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = cdJournal.filter(e => e.id !== id);
    setCdJournal(updated);
    localStorage.setItem("vine_chronicdoubtj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌑</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Chronic Doubt</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>When faith feels impossible — staying in the conversation with a God who met Thomas in his doubt.</p>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", padding: "1rem", overflowX: "auto", justifyContent: "center", flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
        ))}
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" }}>
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.3rem", textTransform: "uppercase" }}>{t.verse}</p>
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
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{v.name}</p>
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
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", borderLeft: `4px solid ${PURPLE}` }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, color: TEXT, marginBottom: "1rem", fontSize: "1rem" }}>Private Journal</h3>
              <textarea placeholder="What does my doubt feel like right now? What triggered it or sustains it?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What do I still believe, even partially? What am I not ready to abandon?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="One practice I can stay in, even while doubting:" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {cdJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{e.feeling}</p>}
                {e.truth && <p style={{ color: MUTED, fontStyle: "italic", marginBottom: "0.4rem", fontSize: "0.88rem" }}>{e.truth}</p>}
                {e.step && <p style={{ color: PURPLE, fontSize: "0.85rem", margin: 0 }}>Staying: {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "zMbUXpFiFeo", title: "Does God Exist? Faith and Reason", channel: "Francis Chan and John Piper", description: "A pastoral and theological engagement with the intellectual foundations of faith — approaching the core question with honesty rather than defensiveness." },
              { videoId: "oNpTha80yyE", title: "The Sovereignty of God and Unanswered Questions", channel: "Ligonier Ministries", description: "R.C. Sproul on what the sovereignty of God means in the context of questions that remain unanswered — and how trust functions when understanding is incomplete." },
              { videoId: "7TBHqMqBmBo", title: "Lament as the Language of Faith in Dark Seasons", channel: "Mark Vroegop", description: "Vroegop on how the psalms of lament give language for honest doubt and how staying in the conversation with God — even a questioning, angry conversation — is itself an act of faith." },
              { videoId: "mC-zw0zCCtg", title: "Praying Our Doubts and Fears", channel: "Tim Keller", description: "Keller on how honest prayer — including prayer that names doubt, fear, and the felt absence of God — is not a failure of faith but one of its most mature expressions." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
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
