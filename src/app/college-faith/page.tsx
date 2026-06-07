"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Doubt Is Not the Enemy of Faith", verse: "John 20:27-28", text: "Thomas doubted the resurrection until he saw Jesus personally. Jesus did not rebuke him — He showed up and invited Thomas to examine the evidence. Thomas's response was the most complete confession in the Gospels: 'My Lord and my God.' The disciples who saw the risen Jesus still doubted (Matthew 28:17). College challenges your faith because it is encountering real ideas — not because faith is false." },
  { title: "You Are Allowed to Ask Hard Questions", verse: "Matthew 7:7-8", text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you. This promise encompasses intellectual seeking. The God of the universe is not intimidated by your philosophy professor. The intellectual tradition of Christianity includes Augustine, Aquinas, Pascal, Lewis, Chesterton, Plantinga, and thousands of others who asked the hardest questions and emerged with stronger faith." },
  { title: "The Secular University Is Not Neutral", verse: "Colossians 2:8", text: "Paul warns against hollow and deceptive philosophy that depends on human tradition and the elemental spiritual forces rather than on Christ. The modern university often presents secular materialism as the neutral default and faith as the add-on requiring justification. This framing is itself a philosophical position, not a scientific one. You are not required to accept the premise." },
  { title: "Community Is Not Optional for Faith Survival", verse: "Hebrews 10:24-25", text: "Spur one another on toward love and good deeds, not giving up meeting together. Research consistently shows that college students who maintain active faith community through college keep their faith; those who isolate themselves from faith community often lose it. This is not a spiritual coincidence — it is the design of formation in community." },
  { title: "Your Faith Can Become Truly Yours in College", verse: "1 Peter 3:15", text: "Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. College can be the crucible in which borrowed faith becomes owned faith. The student whose faith survives serious intellectual engagement often has a more resilient, mature, and integrated faith than the student who was never challenged." },
];

const voices = [
  { id: "cs", name: "C.S. Lewis", role: "Author, Mere Christianity, Surprised by Joy", quote: "I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.", bio: "Lewis converted to Christianity as an Oxford don after decades of atheism, largely through intellectual engagement with the best arguments for and against faith. His books remain the most-read apologetics resources for college students worldwide, because he genuinely engaged with the hardest objections." },
  { id: "jp", name: "John Polkinghorne", role: "Physicist, Theologian", quote: "Science and religion are asking different questions about the same reality. Science asks 'How?' Religion asks 'Why?' You do not have to choose between them.", bio: "Polkinghorne was a Cambridge quantum physicist before becoming an Anglican priest. His work on the compatibility of science and Christian faith has been particularly influential among university students in science and engineering who fear the two domains are incompatible." },
  { id: "tk", name: "Tim Keller", role: "Author, The Reason for God", quote: "Every single human being, without exception, lives by faith — by unprovable commitments that cannot be justified from neutral ground. The question is not whether you will have faith, but which faith you will have.", bio: "Keller spent decades in New York City engaging secular skeptics and university graduates. The Reason for God was written specifically to address the most common intellectual objections raised by college-educated skeptics and is one of the most widely used resources for college student faith development." },
];

const practices = [
  { icon: "🏫", title: "Find a Campus Ministry or Church Immediately", text: "The single most important decision you can make for your faith in college is to find community in the first two weeks. Do not wait until you 'figure things out.' Options include InterVarsity, Cru, RUF (Reformed University Fellowship), FOCUS, Chi Alpha, and countless local churches with college ministries. Visit several and commit to one." },
  { icon: "📚", title: "Read the Best Apologetics — Not Just the Weakest Arguments", text: "Many students lose faith because they were only taught weak versions of Christian arguments. Read: Mere Christianity by C.S. Lewis, The Reason for God by Tim Keller, The Language of God by Francis Collins (a geneticist), Reasonable Faith by William Lane Craig. Engage the strongest objections, not just the easy ones." },
  { icon: "💬", title: "Bring Your Doubts to a Real Person", text: "Doubts that stay private become corrosive. Doubts that are spoken out loud to someone wise often find resolution. Find a campus chaplain, campus minister, or older Christian who can engage your real questions without panicking. The best campus ministers have heard every question you are asking." },
  { icon: "📖", title: "Keep a Discipline of Scripture", text: "Even imperfectly. Even ten minutes. Even with questions. The students who maintain some consistent engagement with Scripture through college tend to retain their faith; those who completely drop it usually do not. You do not have to have it all figured out to open the Bible." },
];

const scriptures = [
  { verse: "John 20:27", text: "Then he said to Thomas, Put your finger here; see my hands. Reach out your hand and put it into my side. Stop doubting and believe." },
  { verse: "1 Peter 3:15", text: "But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect." },
  { verse: "Colossians 2:2-3", text: "That they may have the full riches of complete understanding, in order that they may know the mystery of God, namely, Christ, in whom are hidden all the treasures of wisdom and knowledge." },
  { verse: "Romans 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind." },
  { verse: "Proverbs 4:7", text: "The beginning of wisdom is this: Get wisdom, and whatever you get, get insight." },
  { verse: "Matthew 7:7", text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you." },
];

const videos = [
  { id: "cf_1", title: "Why Smart People Believe in Christianity", channel: "Tim Keller" },
  { id: "cf_2", title: "Can a Scientist Believe in God? Francis Collins", channel: "Veritas Forum" },
  { id: "cf_3", title: "Doubt Is Not the Opposite of Faith", channel: "The Gospel Coalition" },
  { id: "cf_4", title: "How to Keep Your Faith in College", channel: "InterVarsity" },
];

type CFEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function CollegeFaithPage() {
  const [tab, setTab] = useState("theology");
  const [cfJournal, setCfJournal] = useState<CFEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_collegefaithj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_collegefaithj_entries", JSON.stringify(cfJournal)); } catch {}
  }, [cfJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setCfJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setCfJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Faith and Education</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Faith in College</h1>
        <p style={{ color: MUTED, marginBottom: "2rem" }}>Navigating doubt, secular environments, and making your faith your own</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Why Your Questions Are Welcome</h2>
            {theology.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.8rem", color: GREEN, fontWeight: 600, marginBottom: "0.3rem" }}>{s.verse}</div>
                <h3 style={{ margin: "0 0 0.75rem", fontSize: "1.1rem" }}>{s.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Voices for the Thinking Christian</h2>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", fontStyle: "italic", color: TEXT }}>"{v.quote}"</blockquote>
                <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Keeping Your Faith in College</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Scripture for the Questioning Student</h2>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.85rem", color: GREEN, fontWeight: 600, marginBottom: "0.4rem" }}>{s.verse}</div>
                <p style={{ margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: GREEN }}>Your Faith Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries are saved privately in your browser. No account needed.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What question or challenge is your faith facing right now?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="The question I keep running into is..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What do you actually believe, underneath the questions?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="Even with my questions, I still believe..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What is one step you are taking to engage your faith honestly?</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="This week I am going to..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: GREEN, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {cfJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. Honest questions are where genuine faith begins.</p>}
            {cfJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>THE QUESTION</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT I STILL BELIEVE</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>STEP TAKEN</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
                <button onClick={() => deleteEntry(e.id)} style={{ fontSize: "0.75rem", color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Video Resources</h2>
            {videos.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.3rem" }}>{v.channel}</div>
                <p style={{ margin: 0, fontWeight: 600 }}>{v.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
