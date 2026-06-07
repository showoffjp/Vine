"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Jesus Himself Was Answered No", verse: "Matthew 26:39", text: "My Father, if it is possible, may this cup be taken from me. Yet not as I will, but as you will. The most important prayer in the Gospels — Jesus asking for the cup to pass — was answered no. The Father did not spare his Son the cross. This is not evidence that prayer is useless or that God is absent. It is evidence that the Father's answer to prayer is shaped by purposes larger than the immediate relief we request. If Jesus received a no, no one can claim that a no means God is absent, uncaring, or unresponsive." },
  { title: "The No Is Not the Whole Answer", verse: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me. Paul prayed three times for his thorn to be removed. It was not. But the no came with a promise: grace sufficient, power perfected in weakness. The no was not merely a refusal — it was a redirection toward something Paul would not have sought otherwise. This does not explain all nos. But it establishes that the no of God is not the silence of God." },
  { title: "God's Perspective Includes What Ours Cannot", verse: "Isaiah 55:8-9", text: "For my thoughts are not your thoughts, neither are your ways my ways, declares the Lord. As the heavens are higher than the earth, so are my ways higher than your ways and my thoughts than your thoughts. The gap between God's perspective and ours is not a deficiency in us to be fixed — it is the nature of creaturely finitude before an infinite Creator. We pray within time, within partial knowledge, within our current understanding of what is good. God acts from outside these limitations. This is not a dismissal of our request; it is a reason to trust when the answer does not match our expectation." },
  { title: "Honest Lament Over the No Is Prayer", verse: "Habakkuk 1:2", text: "How long, Lord, must I call for help, but you do not listen? Or cry out to you, 'Violence!' but you do not save? Habakkuk does not accept the no quietly. He argues with God, demands explanation, and persists in his complaint. God does not rebuke him for this — he answers. The honest wrestling with unanswered prayer is itself a form of relationship with God, not an abandonment of it. You do not have to pretend to be okay with the no in order to maintain your faith." },
  { title: "The Mystery of Unanswered Prayer Is Not Resolved in Scripture", verse: "Romans 8:26-27", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans. And he who searches our hearts knows the mind of the Spirit, because the Spirit intercedes for God's people in accordance with the will of God. Paul does not explain why some prayers are answered and others are not. He gives us something better: the Spirit who intercedes when we cannot even articulate what we need. The mystery of unanswered prayer is held within a larger mystery of a God who is more present to our need than our prayers can fully express." },
];

const voices = [
  { id: "v1", name: "Philip Yancey", role: "Author", quote: "Every honest book about prayer has to grapple with the devastating reality that God sometimes says no to things that seem like obvious goods. The faith that survives that is a different faith than the one that entered.", bio: "Philip Yancey is the author of Prayer: Does It Make Any Difference? and Where Is God When It Hurts? His work addresses the hard questions of prayer with journalistic honesty and theological depth, including the specific anguish of praying persistently for something that appears to be good and receiving no. He is one of the most trusted Christian voices on doubt, suffering, and the persistence of faith." },
  { id: "v2", name: "Tim Keller", role: "Late Author, Pastor", quote: "The gospel tells us that God allowed his own Son to be crucified as an expression of his love for us. A God who did that is not a God who owes you an explanation for every prayer he does not answer the way you asked.", bio: "Tim Keller addressed unanswered prayer throughout his ministry at Redeemer Presbyterian and in his writing on suffering and faith. His insistence on holding together the profound love of God demonstrated in the cross with the mystery of God's ways in specific circumstances provides a framework for trusting when the answer is no." },
  { id: "v3", name: "Pete Greig", role: "Founder, 24-7 Prayer", quote: "I have prayed for people who died when I expected them to live. I have no neat resolution of this. What I have is a God who was crucified and a prayer that ends with 'yet not my will but yours.'", bio: "Pete Greig is the founder of the 24-7 Prayer movement and the author of God on Mute: Engaging the Silence of Unanswered Prayer. His book was written after his wife was diagnosed with a brain tumor during the height of his prayer ministry — an anguishing context that gave his theology of unanswered prayer unusual honesty and gravity." },
  { id: "v4", name: "Kate Bowler", role: "Professor, Author", quote: "The prosperity gospel promises that prayer always works if you have enough faith. What it is actually doing is blaming you for God's no — which is a cruelty that Scripture does not sanction.", bio: "Kate Bowler was diagnosed with Stage IV cancer and spent years examining the theology of prayer, healing, and blessing. Her work provides a sharp critique of the prosperity gospel's account of prayer and a more honest, grief-holding framework for understanding what it means to pray honestly when the answer does not come." },
];

const practices = [
  { icon: "💬", title: "Name Your Anger and Grief About the No", text: "Habakkuk complained to God. David accused God of abandonment. The Psalms are full of protests. Spiritual bypassing — jumping to 'God's ways are higher' before processing the grief and anger of the no — usually prevents genuine prayer from developing. Tell God how you actually feel about the no." },
  { icon: "📖", title: "Stay in the Matthew 26 Prayer", text: "Gethsemane is the model for the hardest prayers: fully honest request, fully surrendered conclusion. Practice praying your specific unanswered request in full — all the desire, all the logic — and then adding 'yet not as I will, but as you will.' Not as a formula but as a genuine disposition toward trust." },
  { icon: "🔍", title: "Ask What the No Might Be Protecting or Redirecting", text: "Not every no comes with an explanation — and sometimes the explanation only comes in retrospect, or not at all. But it is worth asking: Is this no protecting me from something? Is it redirecting me toward something I have been avoiding? This is not forced positive thinking; it is keeping curiosity open rather than closed." },
  { icon: "🤝", title: "Find a Community That Can Hold Unanswered Prayer", text: "Many Christian communities implicitly teach that unanswered prayer is the result of insufficient faith — which means believers who receive a persistent no hide it rather than naming it. Finding community where the full range of prayer experiences can be spoken of honestly is essential for faith that survives the no." },
  { icon: "📅", title: "Keep Praying After the No", text: "Jesus instructed the persistent widow (Luke 18:1-8) as a model for continued prayer even when the answer has not come. The parable does not guarantee an eventual yes — it commends the posture of continued engagement with God rather than withdrawal in disappointment." },
  { icon: "🙏", title: "Read Habakkuk as a Companion", text: "Habakkuk's three chapters move from protest to dialogue to trembling trust — without resolving the injustice he cried about. His final hymn (chapter 3) ends in a remarkable statement: though nothing changes, 'yet I will rejoice in the Lord.' This is not denial; it is the hardest form of faith." },
];

const scriptures = [
  { verse: "Matthew 26:39", text: "My Father, if it is possible, may this cup be taken from me. Yet not as I will, but as you will." },
  { verse: "2 Corinthians 12:9", text: "My grace is sufficient for you, for my power is made perfect in weakness." },
  { verse: "Isaiah 55:8-9", text: "For my thoughts are not your thoughts, neither are your ways my ways, declares the Lord. As the heavens are higher than the earth, so are my ways higher than your ways." },
  { verse: "Habakkuk 3:17-18", text: "Though the fig tree does not bud and there are no grapes on the vines... yet I will rejoice in the Lord, I will be joyful in God my Savior." },
  { verse: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
];

type PANEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function PrayerAnsweredNoPage() {
  const [tab, setTab] = useState("theology");
  const [panJournal, setPanJournal] = useState<PANEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setPanJournal(JSON.parse(localStorage.getItem("vine_prayerAnsweredNoj_entries") ?? "[]")); } catch { setPanJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: PANEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...panJournal];
    setPanJournal(updated);
    localStorage.setItem("vine_prayerAnsweredNoj_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = panJournal.filter(e => e.id !== id);
    setPanJournal(updated);
    localStorage.setItem("vine_prayerAnsweredNoj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🙏</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>When Prayer Is Answered No</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>The hardest prayer is the one God answers with no — staying in the conversation with a God who was himself answered no.</p>
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
              <textarea placeholder="What am I still waiting for, or what has been answered no? How does that feel?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What do I trust about God even in the no?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="How am I staying in prayer even when the answer has not come?" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {panJournal.map(e => (
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
              { videoId: "mC-zw0zCCtg", title: "Praying Our Fears and Unanswered Prayers", channel: "Tim Keller", description: "Keller on bringing the full weight of unanswered prayer — including the anger, confusion, and grief — to God as prayer rather than as abandonment of prayer." },
              { videoId: "y-DQH-M1HuM", title: "When God Does Not Heal", channel: "The Gospel Coalition", description: "A panel on the theology and pastoral reality of prayers for healing that are answered no — and what faith that holds both the request and the trust looks like." },
              { videoId: "7TBHqMqBmBo", title: "Lament: Praying When God Seems Silent", channel: "Mark Vroegop", description: "Vroegop on the psalms of lament as models for honest, persistent engagement with God when the answer has not come and the silence feels permanent." },
              { videoId: "oNpTha80yyE", title: "The Sovereignty of God and Unanswered Prayer", channel: "Ligonier Ministries", description: "Sproul on what it means to trust in God's sovereignty when prayers go unanswered — holding the mystery without collapsing into either denial or despair." },
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
  );
}
