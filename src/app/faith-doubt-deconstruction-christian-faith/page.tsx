"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

const theology = [
  {
    title: "Doubt Is Not the Opposite of Faith",
    body: "The most common misunderstanding about faith is that it means the absence of doubt. But the Greek word for faith in the New Testament (pistis) means trust, commitment, and loyalty — not certainty. Thomas doubted the resurrection and Jesus did not condemn him; He showed Thomas His wounds and met him where he was (John 20:24-28). The father of the boy with seizures said 'I believe; help my unbelief!' — and Jesus healed his son (Mark 9:24). Doubt in the context of ongoing relationship with God is not faithlessness; it is honest engagement.",
  },
  {
    title: "Deconstruction Is Not Apostasy",
    body: "Deconstruction — the process of questioning, examining, and sometimes dismantling inherited religious beliefs — has become a major phenomenon in evangelical and conservative Christian communities. Many people who deconstruct are not leaving faith; they are leaving a particular, often damaged form of it. The first-century Jewish Christians who left their ancestral religious practices for the way of Jesus were doing something that looked like deconstruction to everyone around them. Questioning is not the same as rejecting.",
  },
  {
    title: "The Christianity Worth Keeping",
    body: "Not everything in the version of Christianity you grew up with was the Christianity of the New Testament. Much of what causes people to deconstruct — toxic authority structures, prosperity gospel, racism, purity culture, political capture — is not at the center of Christian faith. The center is: God became human in Jesus of Nazareth, died and rose again, and is making all things new. That center is worth sitting with before discarding everything that was built around it.",
  },
  {
    title: "Honest Lament and Wrestling",
    body: "The biblical tradition includes people who argued with God. Jacob literally wrestled with God and wouldn't let go until he received a blessing (Gen 32:22-32). Abraham argued with God about Sodom (Gen 18). Job challenged God at length and God called his speech more honest than his friends' piety. The person who cries 'My God, my God, why have you forsaken me?' is not failing at faith — they are inside one of the most honest traditions of spiritual practice in history.",
  },
  {
    title: "Reconstruction After Deconstruction",
    body: "Many people who go through deconstruction come out the other side with a faith that is leaner, more honest, more resilient, and more genuinely loving than what they had before. The process is painful and often disorienting. But the deconstruction of a version of Christianity that was built partly on fear, control, and cultural accommodation can be the excavation of something more solid underneath. Not everyone reconstructs, and some don't return to Christianity. But the possibility of a harder, better faith is real.",
  },
];

const voices = [
  {
    name: "Rachel Held Evans",
    role: "Author, Searching for Sunday and Inspired (d. 2019)",
    quote: "I left church when I was eighteen and came back when I was twenty-six. I came back not because I had all the answers but because I needed a community in which to ask the questions.",
  },
  {
    name: "Pete Enns",
    role: "Biblical scholar and author, The Bible Tells Me So and The Sin of Certainty",
    quote: "Certainty is not faith. The call to faith is a call to trust someone you cannot control, in a world you cannot fully understand. That is harder and more beautiful than certainty.",
  },
  {
    name: "Barbara Brown Taylor",
    role: "Author, Learning to Walk in the Dark",
    quote: "Sometimes the most faithful thing you can do is stay in the darkness a little longer, and not rush toward a light that isn't real.",
  },
  {
    name: "Alister McGrath",
    role: "Theologian and author, Doubting: Growing Through the Uncertainties of Faith",
    quote: "Doubt is not the enemy of faith. It is its constant companion, and sometimes its greatest teacher.",
  },
];

const practices = [
  {
    title: "Give Yourself Permission to Ask the Hard Questions",
    body: "Many people in deconstruction have spent years suppressing questions that felt forbidden. The first practice is permission: you are allowed to ask. 'Where does the Bible come from and why should I trust it?' 'Why is there so much evil in the world if God is good and powerful?' 'What about people who never heard the gospel?' These are not evidence of spiritual failure; they are the questions honest people ask. Intellectually serious Christianity has engaged these questions for two thousand years.",
  },
  {
    title: "Read Broadly and Across Traditions",
    body: "If you grew up in a narrow theological tradition, reading beyond it can be disorienting and liberating. Christian intellectual history is vastly richer than any one tradition. Reading C.S. Lewis, G.K. Chesterton, Thomas Merton, Miroslav Volf, Barbara Brown Taylor, N.T. Wright, Walter Brueggemann, or Makoto Fujimura may surface a Christianity you didn't know existed. Reading the history of your own tradition's development can also provide liberating context.",
  },
  {
    title: "Spiritual Direction",
    body: "A spiritual director — a trained guide who meets with you regularly to attend to the movements of God in your life — can be an invaluable companion through deconstruction. Unlike a pastor who may have institutional reasons to steer you in a particular direction, a spiritual director is trained to listen and ask questions rather than provide answers. Spiritual Directors International (sdiworld.org) helps locate trained directors across traditions.",
  },
  {
    title: "Community That Can Hold Your Questions",
    body: "Some congregations and communities can hold people in deconstruction — places where honest questions are welcomed, where certainty is not required for belonging, where the tradition is taken seriously but not defensively. Progressive evangelical, mainline Protestant, and Catholic communities vary widely in their capacity for this. Asking a potential congregation: 'How do you respond when people have serious doubts about core doctrines?' can be revealing.",
  },
  {
    title: "Therapy for Religious Trauma",
    body: "For many people, deconstruction is not primarily intellectual — it is driven by harm done by churches, religious leaders, or family members in the name of faith. This is religious trauma, and it deserves clinical attention. Therapists who specialize in religious trauma can help you distinguish between the genuine Christian tradition and the particular, harmful version of it you experienced. The Religious Trauma Institute (religioustraumainstitute.com) trains therapists in this area.",
  },
  {
    title: "Staying With the Central Questions",
    body: "Beneath the doctrinal and institutional questions of deconstruction are usually deeper ones: Is there a God? Does this God care about me? Is there meaning? Is there hope? These are the questions that matter most, and they cannot be answered by reading alone. Contemplative practice — silent prayer, centering prayer, lectio divina, simply sitting in the presence of what you are not sure about — can create space for encounter that intellectual analysis cannot.",
  },
];

const scriptures = [
  {
    ref: "John 20:27",
    text: "Then he said to Thomas, 'Put your finger here; see my hands. Reach out your hand and put it into my side. Stop doubting and believe.'",
  },
  {
    ref: "Mark 9:24",
    text: "Immediately the boy's father exclaimed, 'I do believe; help me overcome my unbelief!'",
  },
  {
    ref: "Genesis 32:28",
    text: "Then the man said, 'Your name will no longer be Jacob, but Israel, because you have struggled with God and with humans and have overcome.'",
  },
  {
    ref: "Psalm 22:1",
    text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish?",
  },
  {
    ref: "Isaiah 55:8-9",
    text: "'For my thoughts are not your thoughts, neither are your ways my ways,' declares the Lord. 'As the heavens are higher than the earth, so are my ways higher than your ways.'",
  },
  {
    ref: "Hebrews 11:1",
    text: "Now faith is confidence in what we hope for and assurance about what we do not see.",
  },
];

const JOURNAL_KEY = "vine_faith_doubt_deconstruction_entries";

interface JournalEntry {
  id: string;
  date: string;
  text: string;
}

const videos = [
  { videoId: "4Eg_di-O8nM", title: "God Is Working Even Now – Elevation Church" },
  { videoId: "G-2e9mMf7E8", title: "Gospel of John – BibleProject" },
  { videoId: "7_CGP-12AE0", title: "The Story of the Bible – BibleProject" },
  { videoId: "sIaT8Jl2zpI", title: "You Say – Lauren Daigle" },
];

export default function FaithDoubtDeconstructionPage() {
  const [activeTab, setActiveTab] = useState("Theology");
  const [journalText, setJournalText] = useState("");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });

  function saveEntry() {
    if (!journalText.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), text: journalText.trim() };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setJournalText("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: PURPLE + "22", border: `1px solid ${PURPLE}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: PURPLE, marginBottom: 16 }}>
            Faith & Questions
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            Faith, Doubt & Deconstruction
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            Doubt is not the opposite of faith. Thomas doubted and Jesus met him. 'I believe; help my unbelief' is one of the most honest prayers in Scripture.
          </p>
        </div>

        {/* Resource Banner */}
        <div style={{ background: "#1a1a2e", border: `1px solid ${PURPLE}66`, borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
          <div style={{ fontWeight: 700, color: PURPLE, marginBottom: 8 }}>Support Resources</div>
          <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.8 }}>
            <strong style={{ color: TEXT }}>Spiritual Directors International:</strong> sdiworld.org — find a spiritual director<br />
            <strong style={{ color: TEXT }}>Religious Trauma Institute:</strong> religioustraumainstitute.com<br />
            <strong style={{ color: TEXT }}>NAMI:</strong> 1-800-950-NAMI — mental health support<br />
            <strong style={{ color: TEXT }}>988 Lifeline:</strong> call or text 988 — 24/7 crisis support
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${activeTab === tab ? PURPLE : BORDER}`, background: activeTab === tab ? PURPLE + "22" : "transparent", color: activeTab === tab ? PURPLE : MUTED, cursor: "pointer", fontSize: 14, fontWeight: activeTab === tab ? 600 : 400 }}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: PURPLE, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v) => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <div style={{ fontWeight: 700, color: TEXT, fontSize: 16 }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: 13, marginBottom: 14 }}>{v.role}</div>
                <blockquote style={{ margin: 0, padding: "14px 18px", borderLeft: `3px solid ${PURPLE}`, background: PURPLE + "11", borderRadius: "0 8px 8px 0", color: MUTED, lineHeight: 1.8, fontStyle: "italic" }}>
                  "{v.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {practices.map((p) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: PURPLE, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {scriptures.map((s) => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontStyle: "italic", fontSize: 16 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.7 }}>
              What do you believe? What can't you believe anymore? What do you hope might be true? Your entries are saved locally on this device only.
            </p>
            <textarea
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              placeholder="Write here..."
              style={{ width: "100%", minHeight: 140, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, color: TEXT, fontSize: 15, resize: "vertical", boxSizing: "border-box", outline: "none" }}
            />
            <button
              onClick={saveEntry}
              style={{ marginTop: 12, padding: "10px 28px", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, fontWeight: 600, cursor: "pointer", fontSize: 15 }}
            >
              Save Entry
            </button>
            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 16 }}>
              {entries.map((entry) => (
                <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{entry.date}</div>
                  <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, whiteSpace: "pre-wrap" }}>{entry.text}</p>
                  <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: 12, fontSize: 12, color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {videos.map((v) => (
              <VideoEmbed key={v.videoId} {...v} />
            ))}
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
