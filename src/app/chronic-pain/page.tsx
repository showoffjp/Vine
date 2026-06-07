"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Pain Is Not God's Absence", verse: "Psalm 22:24", text: "The psalmist cries out 'My God, my God, why have you forsaken me?' — and then reaches the theological conclusion: 'For he has not despised or scorned the suffering of the afflicted one; he has not hidden his face from him but has listened to his cry for help.' Pain can feel like abandonment. But the God of Israel is the God who sees and hears and does not look away." },
  { title: "The Body Will Be Redeemed", verse: "Romans 8:23", text: "Paul writes that believers groan inwardly, waiting eagerly for the redemption of their bodies. Chronic pain is not the final word on your body. The resurrection promises that every body that has suffered — through disease, injury, or pain — will be remade without deficiency. This is not wishful thinking; it is the hinge of the Christian faith." },
  { title: "Pain Can Be Redeemed Without Being Explained", verse: "2 Corinthians 12:7-9", text: "Paul prayed three times to have his 'thorn in the flesh' removed. God did not remove it. God said: 'My grace is sufficient for you, for my power is made perfect in weakness.' This does not mean chronic pain is good, or that you should stop seeking treatment, or that God designed it. It means that even pain that is not taken away is not beyond God's redemptive reach." },
  { title: "Lament Is Not Faithlessness", verse: "Psalm 88:13-14", text: "Psalm 88 ends without resolution — the psalmist is still in darkness in the final verse. This is Scripture's recognition that some suffering does not have an easy theological ending. The fact that a full psalm of unresolved lament is in the canon means God welcomes your unanswered cry. You do not have to find the silver lining to pray." },
  { title: "Jesus Bore Pain in His Body", verse: "Isaiah 53:4", text: "He has borne our griefs and carried our sorrows. This is not only about sin — the Hebrew words used include physical disease and pain. Jesus entered a body that could ache, that could be exhausted, that was eventually torn. He is not a God who watches pain from a distance. He is a high priest who is able to sympathize with our weakness (Heb 4:15)." },
];

const voices = [
  { id: "jt", name: "Joni Eareckson Tada", role: "Author and Quadriplegic, Joni and Friends", quote: "Pain is God's megaphone — not to shout at us, but to tune our ears to frequencies we would otherwise miss. Suffering strips away what does not matter and leaves only what does.", bio: "Tada has lived with quadriplegia since a diving accident at age 17, and has spent decades developing a theology of suffering that is neither triumphalist nor defeated. Her work with Joni and Friends has provided resources for disabled Christians worldwide." },
  { id: "ep", name: "Ellen Painter Dollar", role: "Author, No Easy Choice", quote: "The prosperity gospel told me that faith produces physical healing. When I was not healed, I concluded either my faith was deficient or the gospel was. The Reformed tradition gave me a third option: God is sovereign over my suffering and does not owe me an explanation.", bio: "Dollar has written on the intersection of chronic illness, faith, and bioethics from a mainline Protestant perspective. Her work challenges both the prosperity gospel and the temptation to spiritualize away the genuine awfulness of chronic pain." },
  { id: "kh", name: "Kate Bowler", role: "Author, Everything Happens for a Reason", quote: "I hate the phrase 'everything happens for a reason.' Not because I do not believe in a sovereign God, but because it is usually said by people who want me to feel less so they can feel better.", bio: "Bowler, a Duke Divinity professor diagnosed with stage IV cancer, has become one of the most important voices on suffering and faith in contemporary Christianity. Her work on the prosperity gospel and her own illness offers a searingly honest theological account of pain without easy resolution." },
];

const practices = [
  { icon: "🏥", title: "Advocate Persistently for Medical Care", text: "Chronic pain is often underdiagnosed and undertreated, especially for women and people of color. Advocate for yourself: get second opinions, seek pain management specialists, ask about multidisciplinary pain clinics. Good medicine and good faith are not in conflict. Seeking care is good stewardship." },
  { icon: "🧠", title: "Explore Pain Psychology (Not 'It Is All in Your Head')", text: "Pain neuroscience research shows that chronic pain involves central sensitization — the nervous system becomes sensitized beyond the original injury. Pain retraining therapy (graded motor imagery, acceptance and commitment therapy) can help retrain the nervous system. The Curable app and books like The Way Out by Alan Gordon offer accessible introductions." },
  { icon: "📖", title: "Build a Lament Practice", text: "Read and pray through Psalms 22, 38, 88, and 102. Give yourself permission to tell God exactly how bad it is, without wrapping it up theologically. Lament is not unbelief — it is honest faith. The discipline of lament keeps pain from fermenting into bitterness." },
  { icon: "👥", title: "Find Your People", text: "Chronic pain is profoundly isolating. Seek out communities of those with chronic illness or pain — both Christian (Joni and Friends, joniandfriends.org) and condition-specific. Being understood without explanation is itself healing." },
];

const scriptures = [
  { verse: "Psalm 22:24", text: "For he has not despised or scorned the suffering of the afflicted one; he has not hidden his face from him but has listened to his cry for help." },
  { verse: "Romans 8:23", text: "Not only so, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sonship, the redemption of our bodies." },
  { verse: "2 Corinthians 12:9", text: "But he said to me, My grace is sufficient for you, for my power is made perfect in weakness. Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me." },
  { verse: "Isaiah 53:4", text: "Surely he took up our pain and bore our suffering, yet we considered him punished by God, stricken by him, and afflicted." },
  { verse: "Hebrews 4:15", text: "For we do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are — yet he did not sin." },
  { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
];

const videos = [
  { id: "cp_1", title: "Joni Eareckson Tada — Why Does God Allow Suffering?", channel: "Joni and Friends" },
  { id: "cp_2", title: "The Theology of Chronic Pain — Kate Bowler Interview", channel: "Everything Happens Podcast" },
  { id: "cp_3", title: "Pain Science and Faith — What Neuroscience Teaches About Chronic Pain", channel: "Christian Healthcare" },
  { id: "cp_4", title: "Lament — The Lost Language of the Church for Chronic Illness", channel: "The Gospel Coalition" },
];

type CPEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function ChronicPainPage() {
  const [tab, setTab] = useState("theology");
  const [cpJournal, setCpJournal] = useState<CPEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_chronicpainj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_chronicpainj_entries", JSON.stringify(cpJournal)); } catch {}
  }, [cpJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setCpJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setCpJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Suffering and Faith</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Chronic Pain</h1>
        <p style={{ color: MUTED, marginBottom: "2rem" }}>Theology and hope for those living inside unrelenting pain</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>God and the Body in Pain</h2>
            {theology.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.8rem", color: PURPLE, fontWeight: 600, marginBottom: "0.3rem" }}>{s.verse}</div>
                <h3 style={{ margin: "0 0 0.75rem", fontSize: "1.1rem" }}>{s.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Voices That Have Lived This</h2>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem", fontStyle: "italic", color: TEXT }}>"{v.quote}"</blockquote>
                <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Navigating Life in Chronic Pain</h2>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.05rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.6 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Scripture for Bodies in Pain</h2>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.85rem", color: PURPLE, fontWeight: 600, marginBottom: "0.4rem" }}>{s.verse}</div>
                <p style={{ margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: PURPLE }}>Your Pain Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries are saved privately in your browser. No account needed.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What does your pain feel like today — honestly?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="Today my body is..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What truth about God can you hold onto in the pain?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="Even in this, I know that God..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What small step is possible today?</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="Today I can..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {cpJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. Your pain is real and your words matter here.</p>}
            {cpJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>MY BODY TODAY</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>TRUTH I HOLD</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT IS POSSIBLE</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
                <button onClick={() => deleteEntry(e.id)} style={{ fontSize: "0.75rem", color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Video Resources</h2>
            {videos.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.3rem" }}>{v.channel}</div>
                <p style={{ margin: 0, fontWeight: 600 }}>{v.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
