"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Doubt Is Not the Opposite of Faith",
    verse: "Mark 9:24",
    text: "A father brought his son to Jesus and confessed: 'I believe; help my unbelief.' Jesus did not correct his theology or require resolved belief before healing. He received the man's mixed faith — part belief, part doubt — as sufficient. Deconstruction does not disqualify; it can be the very form in which honest faith speaks.",
  },
  {
    title: "God Welcomes the Honest Question",
    verse: "Isaiah 1:18",
    text: "'Come now, let us reason together,' says the Lord. God does not demand the suppression of inquiry. The invitation to 'reason together' is an invitation to bring the real questions — even the ones that feel dangerous. A faith that cannot be questioned may not be worth keeping; a faith that survives questioning is more deeply one's own.",
  },
  {
    title: "Wrestling as Encounter",
    verse: "Genesis 32:28",
    text: "After Jacob wrestled through the night with the divine stranger, he was given a new name: Israel — 'one who strives with God.' The wrestle itself was the encounter. Deconstruction as spiritual wrestle does not push God away — for those genuinely seeking, it can be the means by which God gets hold of them.",
  },
  {
    title: "The Mind Is Part of the Offering",
    verse: "Matthew 22:37",
    text: "'Love the Lord your God with all your heart and with all your soul and with all your mind.' The mind is explicitly included in what God claims and sanctifies. Christian faith is not anti-intellectual. The tradition includes Augustine, Aquinas, Pascal, Lewis, and thousands more who found that intellectual rigor and deep faith are not enemies.",
  },
  {
    title: "A Faith Rebuilt Is Not a Smaller Faith",
    verse: "Proverbs 24:16",
    text: "'Though the righteous fall seven times, they rise again.' Deconstruction and reconstruction are not linear. Some people who deconstruct rediscover historic Christian faith in a form that is more genuinely their own, better grounded, and more intellectually honest. The rebuilt house is not lesser than the one that fell.",
  },
];

const voices = [
  {
    id: 1,
    name: "Timothy Keller",
    role: "Author, The Reason for God; Founding Pastor, Redeemer Presbyterian",
    quote: "A faith that cannot be doubted is not faith — it is magic. Christianity invites the hard questions because it has resources to meet them.",
    bio: "Timothy Keller's apologetic work specifically addressed the skeptical, doubting, and deconstructing. His books and sermons have helped thousands of people who thought they were leaving faith discover that many of their questions have answers — and that the answers are richer than they expected.",
  },
  {
    id: 2,
    name: "Barbara Brown Taylor",
    role: "Author, Learning to Walk in the Dark; Episcopal Priest",
    quote: "It is possible to live in the clouds of unknowing and still find God there — perhaps especially there.",
    bio: "Barbara Brown Taylor writes about faith in the dark — uncertainty, spiritual absence, theological disorientation — with rare honesty and beauty. Her work does not promise resolution; it offers companionship in the not-knowing that many deconstructing Christians desperately need.",
  },
  {
    id: 3,
    name: "Alister McGrath",
    role: "Oxford Theologian & Author",
    quote: "Doubt is the shadow cast by faith when it encounters reality. Without doubt, we would have certainty — but not wisdom.",
    bio: "Alister McGrath is one of the world's leading theologians and apologists. He came to faith from atheism through scientific inquiry and has spent decades demonstrating that the deepest intellectual engagement with Christianity produces more faith, not less — when pursued honestly.",
  },
  {
    id: 4,
    name: "Pete Enns",
    role: "Author, The Sin of Certainty; Biblical Scholar",
    quote: "The Bible is not a problem to be solved. It is a testimony to people wrestling with God — and wrestling is allowed.",
    bio: "Pete Enns writes from inside his own experience of theological deconstruction and reconstruction. He helps Christians who have felt betrayed by overly certain formulas find a more spacious and honest engagement with Scripture that does not require pretending that hard questions don't exist.",
  },
];

const practices = [
  {
    icon: "📚",
    title: "Read in the Tradition, Not Just About It",
    text: "Deconstruction often happens in reaction to a thin or specific version of Christianity. Before concluding that Christianity doesn't work, read deeply in the tradition: Augustine, Aquinas, Luther, Calvin, Julian of Norwich, G.K. Chesterton, C.S. Lewis, Simone Weil. The tradition is larger than the version you grew up in.",
  },
  {
    icon: "🗣️",
    title: "Find a Spiritual Director or Wise Guide",
    text: "Deconstruction is better navigated with a guide — a spiritual director, a wise pastor, or a theologian who has lived through their own doubts. This person does not need to have all the answers; they need to be able to stay present with you in the questions without panicking or rushing to resolution.",
  },
  {
    icon: "🙏",
    title: "Maintain Practice Even Without Certainty",
    text: "When belief is in flux, practice often sustains the person until belief stabilizes. Keep showing up — to prayer, to worship, to the community — not as performance, but as the act of keeping the door open. Practice is the habit of the body that can carry us when the mind is unsettled.",
  },
  {
    icon: "📖",
    title: "Distinguish Your Questions",
    text: "Write down your doubts and questions. Then categorize them: Which are intellectual (does the historical evidence support the resurrection?), which are moral (how do I reconcile God and suffering?), and which are relational (the church hurt me and I associate that with God)? Each category requires different engagement.",
  },
  {
    icon: "🤝",
    title: "Find Your Honest Community",
    text: "Deconstruction is profoundly lonely when it must be hidden. Find one person — a friend, a pastor, an online community — where you can be honest about where you are without performing belief. Being known in your doubt and not abandoned is itself a form of the grace the gospel describes.",
  },
  {
    icon: "🕯️",
    title: "Hold to the Person of Christ",
    text: "Doctrinal formulations can be deconstructed; Jesus himself is harder to dismiss. During deconstruction, anchor to the simplest thing: who was this man, and was he who he said he was? The Gospels — read slowly, personally, not as doctrinal proof texts — often outlast the systems built around them.",
  },
];

const scriptures = [
  { verse: "Mark 9:24", text: "Immediately the boy's father exclaimed, 'I do believe; help me overcome my unbelief!'" },
  { verse: "Isaiah 1:18", text: "Come now, let us settle the matter, says the Lord. Though your sins are like scarlet, they shall be as white as snow; though they are red as crimson, they shall be like wool." },
  { verse: "Jeremiah 29:13", text: "You will seek me and find me when you seek me with all your heart." },
  { verse: "John 20:27", text: "Then he said to Thomas, 'Put your finger here; see my hands. Reach out your hand and put it into my side. Stop doubting and believe.'" },
  { verse: "Proverbs 2:3–5", text: "Indeed, if you call out for insight and cry aloud for understanding, and if you look for it as for silver and search for it as for hidden treasure, then you will understand the fear of the Lord and find the knowledge of God." },
  { verse: "Hebrews 11:1", text: "Now faith is confidence in what we hope for and assurance about what we do not see." },
];

type FDEntry = { id: string; date: string; question: string; holding: string; prayer: string };

export default function FaithDoubtDeconstructionAdultPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<FDEntry[]>([]);
  const [question, setQuestion] = useState("");
  const [holding, setHolding] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_faithdoubtdeconstructionadultj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!question.trim() && !holding.trim() && !prayer.trim()) return;
    const entry: FDEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      question: question.trim(),
      holding: holding.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_faithdoubtdeconstructionadultj_entries", JSON.stringify(updated));
    setQuestion(""); setHolding(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_faithdoubtdeconstructionadultj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🕯️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Faith, Doubt & Deconstruction
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For adults questioning, doubting, or deconstructing their faith — finding that God
            can be wrestled with, and that honest faith is not less than certain faith.
          </p>
        </div>

        <div style={{ background: "#0a1a0a", border: `1px solid ${GREEN}40`, borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: MUTED, fontWeight: "bold", margin: "0 0 0.5rem" }}>Resources for your journey:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            988 Lifeline — call or text <strong style={{ color: TEXT }}>988</strong> |{" "}
            <a href="https://www.ivpress.com" style={{ color: GREEN }}>ivpress.com</a> |{" "}
            <a href="https://www.reasonforgod.com" style={{ color: GREEN }}>reasonforgod.com</a> |{" "}
            Crisis Text Line: text <strong style={{ color: TEXT }}>HOME</strong> to <strong style={{ color: TEXT }}>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 6, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : CARD, color: TEXT, cursor: "pointer", fontSize: "0.875rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.25rem" }}>{v.name}</h3>
                <div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic" }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ color: TEXT, fontSize: "1rem", margin: "0 0 0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: GREEN, fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, margin: 0, lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, margin: "0 0 1rem" }}>Today&apos;s Reflection</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What question is most alive for you right now?</label>
              <textarea value={question} onChange={(e) => setQuestion(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What are you still holding onto — even in the uncertainty?</label>
              <textarea value={holding} onChange={(e) => setHolding(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer — even a tentative one — for today:</label>
              <textarea value={prayer} onChange={(e) => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>
                {saved ? "Saved" : "Save Entry"}
              </button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {entries.map((e) => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                      <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                      <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                    </div>
                    {e.question && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Question: </span>{e.question}</p>}
                    {e.holding && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Holding: </span>{e.holding}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="4yRlBMcNNjY" title="Faith, Doubt, and Intellectual Honesty — Timothy Keller" />
            <VideoEmbed videoId="ZGk1hl1nNrw" title="Wrestling with God — Can Faith Survive Deconstruction?" />
            <VideoEmbed videoId="j2h-q3ZPKFI" title="The Case for Christianity for Doubters" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="A Prayer for Those Wrestling with Faith" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
