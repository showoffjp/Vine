"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Every Generation Must Own Its Faith", verse: "Deuteronomy 6:6-7", text: "These commandments that I give you today are to be on your hearts. Impress them on your children. The command to pass faith to the next generation assumes that each person must receive it — not merely inherit it as a cultural artifact. Inherited religion is not the same as living faith. The faith your parents held for you must become the faith you hold for yourself. This transition — often marked by doubt, questioning, and even rebellion — is not apostasy. It is the necessary passage toward genuine belief." },
  { title: "Doubt Is an Invitation, Not an Exit", verse: "John 20:27", text: "Put your finger here; see my hands. Reach out your hand and put it into my side. Stop doubting and believe. When Thomas doubted the resurrection, Jesus did not expel him from the community. He invited him to examine the evidence. Doubt about inherited faith — questioning what you were taught, examining whether it is actually true — is how secondhand faith becomes firsthand. The faith that has never been questioned is often the faith that does not survive contact with real life." },
  { title: "The Faith That Withstands Examination Is Stronger", verse: "1 Peter 3:15", text: "Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. This verse assumes that Christians have examined their faith and can articulate why they hold it. You cannot give a reason for a hope you have never interrogated. The process of asking hard questions, working through doubt, reading widely, engaging counterarguments — and coming out the other side holding the same essential faith with deeper conviction — is exactly what Peter assumes his readers have done." },
  { title: "The Return of the Prodigal Goes Both Ways", verse: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him. Many people who journey through the questioning and deconstruction of inherited faith return — changed, more honest, less performative, but genuinely believing. The father in the parable did not require that the returning son arrive with theological credentials. He ran. If you are in the far country right now, you are not beyond the reach of the running father." },
  { title: "Your Story With God Can Begin Now, Not Then", verse: "Isaiah 43:19", text: "See, I am doing a new thing! Now it springs up; do you not perceive it? The faith you inherited was not yours. The faith you are building through your own encounter with God — through your questions, your doubts, your suffering, your searching — is. This is not a lesser faith for lacking a dramatic conversion testimony. Many people who grew up in the church are doing the slow, quiet work of making an inherited religion genuinely their own. That work is real. God is doing a new thing in you." },
];

const voices = [
  { id: "cs", name: "C.S. Lewis", role: "Author, Mere Christianity", quote: "I believe in Christianity as I believe that the sun has risen — not only because I see it, but because by it I see everything else. A faith that has been examined is not weaker than one that has not. It is often the only faith that lasts.", bio: "Lewis himself moved from atheism to Christianity through an intellectual journey that took years. His ability to hold both rigorous intellectual examination and genuine personal faith makes him a uniquely useful guide for those navigating the transition from inherited to owned belief." },
  { id: "mk", name: "Mark Noll", role: "Historian, Author of The Scandal of the Evangelical Mind", quote: "Christianity is not a faith for the uncritical. It is a faith that invites, and has historically produced, the most rigorous intellectual inquiry. Doubt and questioning are not signs that you are losing faith — they may be signs that you are taking it seriously for the first time.", bio: "Noll's historical work on Christianity and intellectual life demonstrates that serious thinking and genuine Christian faith have always been compatible — and that the relationship between inherited and examined faith is as old as the church itself." },
  { id: "rh", name: "Rachel Held Evans", role: "Author, Searching for Sunday", quote: "You can't inherit faith. Every person has to fight for it, wrestle with it, sometimes lose it and find it again. The church should be a safe place for that process — not a place that punishes doubt and rewards performance.", bio: "Evans' memoir of wrestling with inherited evangelical faith resonated with millions of young adults navigating similar terrain. Her work normalizes the questioning process and insists that honest doubt is compatible with genuine Christian faith." },
];

const practices = [
  { icon: "📚", title: "Read Widely, Including the Opposition", text: "If your inherited faith has not encountered serious intellectual challenge, it has not been tested. Read the best arguments against Christian faith — Dawkins, Hitchens, Nietzsche — and also the best Christian responses — Lewis, Plantinga, McGrath. The faith that has read the opposition and still holds is far more durable than faith that has only ever heard one side. Most doubt is not resolved by having fewer questions but by finding that the questions have better answers than you thought." },
  { icon: "🗣️", title: "Find a Community Where Questions Are Welcome", text: "If your church punishes doubt and rewards performance of certainty, that environment is not safe for the genuine work of faith-making. Look for communities — whether formal churches, small groups, campus ministries, or online communities — where honest questions are genuinely welcomed. These communities exist. They are often smaller and less impressive-looking than high-performance churches, but they are safer places for the transition from inherited to owned faith." },
  { icon: "✍️", title: "Write Your Own Creed", text: "At some point in the transition from inherited to owned faith, it is useful to articulate what you actually believe — not what you were told to believe, not what your parents believe, but what, after honest examination, you hold to be true. This does not need to be comprehensive or polished. But putting your actual beliefs into words — what you are sure of, what you are uncertain about, what you are still working out — is an important act of ownership." },
  { icon: "🕰️", title: "Give the Process Time", text: "The deconstruction of inherited faith is often faster than the reconstruction of owned faith. People who leave inherited religion quickly may spend a decade or more rebuilding a genuine faith on their own terms. This is normal. It is also okay to live with uncertainty for extended periods — to hold questions without forcing answers, to stay engaged with the tradition while not having it all resolved. Premature closure in either direction (quickly discarding everything or suppressing questions to stay comfortable) shortcircuits the process." },
];

const scriptures = [
  { verse: "Proverbs 2:3-5", text: "If you call out for insight and cry aloud for understanding, and if you look for it as for silver and search for it as for hidden treasure, then you will understand the fear of the Lord and find the knowledge of God." },
  { verse: "Matthew 7:7-8", text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you. For everyone who asks receives; the one who seeks finds; and to the one who knocks, the door will be opened." },
  { verse: "Jeremiah 29:13", text: "You will seek me and find me when you seek me with all your heart." },
  { verse: "Hebrews 11:1", text: "Now faith is confidence in what we hope for and assurance about what we do not see." },
  { verse: "Romans 10:9", text: "If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved." },
  { verse: "Isaiah 43:19", text: "See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland." },
];

type IFEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function InheritedFaithPage() {
  const [tab, setTab] = useState("theology");
  const [ifJournal, setIfJournal] = useState<IFEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_inheritedfaithj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_inheritedfaithj_entries", JSON.stringify(ifJournal)); } catch {}
  }, [ifJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setIfJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setIfJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Faith Formation</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Making an Inherited Faith Your Own</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          From secondhand belief to firsthand faith — the necessary and often painful journey of owning what you were given.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", marginBottom: "0.75rem" }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.85rem", color: GREEN, fontWeight: 600, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Faith Formation Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>Where am I in the journey between inherited and owned faith?</label>
                <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What do I actually believe — what am I most certain of right now?</label>
                <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>One question I want to pursue honestly this week</label>
                <textarea value={jStep} onChange={e => setJStep(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 60, boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 8, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {ifJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {ifJournal.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{entry.date}</div>
                    {entry.feeling && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Journey: </span>{entry.feeling}</p>}
                    {entry.truth && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Belief: </span>{entry.truth}</p>}
                    {entry.step && <p style={{ fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Question: </span>{entry.step}</p>}
                    <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "0.25rem 0.75rem", cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "mC-zw0zCCtg", title: "Praying Through Doubt", channel: "Tim Keller / The Bible Project", description: "Honest engagement with the role of doubt in the faith journey — how the lament psalms model bringing uncertainty to God rather than performing certainty, the posture inherited faith often requires." },
              { videoId: "OqwbFGoRYVo", title: "Why Does God Allow Suffering? The Christian Answer", channel: "Ravi Zacharias International Ministries", description: "Engaging the deepest question that inherited faith must eventually confront — the problem of evil and suffering — with philosophical honesty and theological depth." },
              { videoId: "GGCF3OPWN14", title: "The Upside Down Kingdom — Questioning What You've Inherited", channel: "Tim Keller / The Gospel Coalition", description: "Keller on how the Kingdom of God often requires the inversion of cultural and inherited assumptions — including the religious assumptions of a Christian upbringing." },
              { videoId: "4Eg_di-O8nM", title: "The Simple Gospel — What You Actually Believe", channel: "Francis Chan", description: "Chan on the radical simplicity of the gospel — stripping away accumulated cultural Christianity to ask what the core actually is, the necessary work of every generation's own faith." },
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
