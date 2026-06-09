"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Self-Harm Is a Symptom, Not a Character Defect",
    verse: "Mark 5:3–5",
    text: "\"This man lived in the tombs, and no one could bind him anymore, not even with a chain... Night and day among the tombs and in the hills he would cry out and cut himself with stones.\" The demoniac who cut himself was not sinful — he was suffering. When Jesus encountered him, the first response was not rebuke. It was healing and restoration. Self-harm in a teenager is a symptom of unbearable internal pain, not evidence of spiritual failure or bad parenting.",
  },
  {
    title: "The Teenager's Body Belongs to God, and God Values It",
    verse: "1 Corinthians 6:19–20",
    text: "\"Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies.\" This passage is sometimes used to shame teenagers who self-harm — a use that compounds harm. It is better read as a declaration of the body's worth and sanctity: your body matters to God. It is a statement of value, not condemnation.",
  },
  {
    title: "The Parent's Fear and Grief Are Also Valid",
    verse: "Luke 15:20",
    text: "\"But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.\" The parent in this story sees the child from a distance and runs. The love of a parent for a suffering child is one of the most powerful things in the world — and the terror of discovering self-harm can be paralyzing. Parents need pastoral care for their own grief and fear, not just their child.",
  },
  {
    title: "Presence Before Process",
    verse: "John 11:33–35",
    text: "\"When Jesus therefore saw her weeping, and the Jews also weeping which came with her, he groaned in the spirit, and was troubled... Jesus wept.\" Jesus did not immediately explain the theology of resurrection to the grieving. He wept first. Parents who discover a child's self-harm are frequently tempted to immediately explain, correct, or fix. Jesus models something different: presence before process.",
  },
  {
    title: "Recovery Is Possible and Has Been Walked Before",
    verse: "Isaiah 61:3",
    text: "\"To bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning, and a garment of praise instead of a spirit of despair.\" This is not a promise that suffering will end immediately or easily. But it is a promise of direction — the trajectory of God's work in human lives is toward beauty, joy, and praise. Recovery from self-harm is real, and many young people have walked this road and arrived somewhere different.",
  },
];

const voices = [
  {
    id: 1,
    name: "Dr. Matthew Nock",
    role: "Harvard Psychologist, Leading Self-Harm Researcher",
    quote: "Self-harm is almost always a way of coping with unbearable emotional pain — a way of feeling something, or feeling less, when the internal state is otherwise unmanageable.",
    bio: "Nock's research has fundamentally shaped clinical understanding of non-suicidal self-injury, including its prevalence among adolescents and the specific emotional regulation functions it typically serves.",
  },
  {
    id: 2,
    name: "Marsha Linehan",
    role: "Developer of Dialectical Behavior Therapy (DBT)",
    quote: "You can't think your way out of an emotion that you couldn't think your way into.",
    bio: "Linehan developed DBT specifically for people whose emotional dysregulation results in self-harm. Her treatment has the strongest evidence base for reducing self-harm in adolescents and is now widely available.",
  },
  {
    id: 3,
    name: "Dr. Kim Gratz",
    role: "Author, Freedom from Self-Harm; Clinical Researcher",
    quote: "Accepting the emotion without acting on the urge is the core skill — and it can be learned. It takes time and practice and support, but it can be learned.",
    bio: "Gratz's clinical workbook for those who self-harm has become a widely used tool in DBT-informed treatment, helping adolescents and adults build alternative coping skills.",
  },
  {
    id: 4,
    name: "Dr. Christine Wilber",
    role: "Adolescent Psychiatrist, Author",
    quote: "When a parent discovers self-harm, the single most important thing they can do is not react with panic — and the single most important thing they can say is: I love you. I'm glad you told me. Let's get help.",
    bio: "Wilber's guidance for parents navigating their teenager's self-harm has helped families respond in ways that open rather than close the conversation, which is the critical variable in what comes next.",
  },
];

const practices = [
  {
    icon: "🚨",
    title: "Assess for Suicide Risk First",
    text: "Non-suicidal self-injury (NSSI) and suicidal self-harm are clinically distinct — but must be distinguished. If your teenager has expressed suicidal intent or if you are unsure, call 988 immediately, take them to the ER, or call 911. When in doubt, treat as a suicidal emergency.",
  },
  {
    icon: "💬",
    title: "Have the First Conversation Carefully",
    text: "Do not react with alarm, disgust, anger, or immediate problem-solving. Say: I can see you are in a lot of pain. I love you. I want to understand. I'm not going to punish you. Can we talk? The first conversation determines whether future conversations happen.",
  },
  {
    icon: "🏥",
    title: "Get a Clinical Evaluation",
    text: "Contact your pediatrician or a child and adolescent psychiatrist for evaluation. DBT (Dialectical Behavior Therapy) has the strongest evidence base for reducing self-harm in adolescents. Ask specifically about DBT providers in your area.",
  },
  {
    icon: "📚",
    title: "Educate Yourself — Carefully",
    text: "Read Helping Teens Who Cut by Michael Hollander, or Freedom from Self-Harm by Gratz. Avoid internet rabbit holes that sensationalize self-harm. Understanding what self-harm actually is — and what it is not — dramatically improves your ability to help.",
  },
  {
    icon: "👤",
    title: "Get Your Own Support",
    text: "Parents of teenagers who self-harm need their own therapeutic support. The grief, fear, guilt, and helplessness are real and require attention. If your needs are unmet, your capacity to help your teenager is diminished.",
  },
  {
    icon: "🔒",
    title: "Reduce Access to Means Without Shaming",
    text: "Reduce access to sharp objects in the home by securing them — not as punishment, but as harm reduction. Frame it clearly: I'm doing this because I love you and want to give you time to learn other ways to cope. This is not about trust.",
  },
];

const scriptures = [
  { verse: "Psalm 34:18", text: "\"The LORD is close to the brokenhearted and saves those who are crushed in spirit.\"" },
  { verse: "Isaiah 43:2", text: "\"When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you.\"" },
  { verse: "Romans 8:26", text: "\"The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.\"" },
  { verse: "Matthew 11:28", text: "\"Come to me, all you who are weary and burdened, and I will give you rest.\"" },
  { verse: "Lamentations 3:22–23", text: "\"Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.\"" },
  { verse: "2 Corinthians 4:9", text: "\"Persecuted, but not abandoned; struck down, but not destroyed.\"" },
];

type SelfHarmEntry = {
  id: string;
  date: string;
  status: string;
  help: string;
  prayer: string;
};

export default function TeenSelfHarmParentGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SelfHarmEntry[]>([]);
  const [status, setStatus] = useState("");
  const [help, setHelp] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_teenselfharmparent_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!status.trim()) return;
    const entry: SelfHarmEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      status,
      help,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_teenselfharmparent_entries", JSON.stringify(updated));
    setStatus(""); setHelp(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_teenselfharmparent_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌿</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>
            Teen Self-Harm: A Parent&apos;s Guide
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For parents who have discovered that their teenager is self-harming — pastoral and clinical guidance on understanding what it is, how to respond, how to get help, and how to care for yourself through the journey.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              If your teen may be suicidal: <strong>988 Suicide & Crisis Lifeline</strong> — call or text 988 | <strong>Crisis Text Line:</strong> Text HOME to 741741 | <strong>Call 911</strong> if in immediate danger
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer",
              background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED,
              fontWeight: tab === t ? "bold" : "normal", fontSize: "0.875rem",
              textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", color: "#fff", flexShrink: 0 }}>
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: TEXT }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.role}</div>
                  </div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", margin: "0 0 0.75rem" }}>
                  "{v.quote}"
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: i === 0 ? "#1a0505" : CARD, border: `1px solid ${i === 0 ? "#8b1a1a" : BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: i === 0 ? "#ff8888" : PURPLE, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${PURPLE}` }}>
                <div style={{ color: PURPLE, fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, marginBottom: "1rem", fontWeight: "bold" }}>Parent Journal</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>Where are we in this journey today — my teen, our family, my own heart?</label>
                <textarea value={status} onChange={e => setStatus(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What help am I getting or need to get for myself?</label>
                <textarea value={help} onChange={e => setHelp(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer for my child and for the strength to love them well through this:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.status && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Status:</strong> {e.status}</p>}
                {e.help && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Help:</strong> {e.help}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="6sXFbOuq0Bk" title="Understanding Teen Self-Harm: What Parents Need to Know" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Understanding Teen Self-Harm: What Parents Need to Know</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Clinical overview of non-suicidal self-injury in adolescents — why it happens, what it is not, and what helps</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="XhI6S2n3Pao" title="How to Talk to Your Teen About Self-Harm" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>How to Talk to Your Teen After Discovering Self-Harm</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Practical guidance on having the first conversation — what to say, what to avoid, and how to keep the door open</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="6ULPB8D4ixc" title="DBT for Teen Self-Harm — What the Treatment Looks Like" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>DBT for Adolescents: What Evidence-Based Treatment Looks Like</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Overview of Dialectical Behavior Therapy for teens who self-harm — what families can expect and how to find providers</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="qRxCuKBuJvU" title="Faith and Mental Health for Teens — Pastoral Perspective" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Faith and Teen Mental Health: What the Church Must Understand</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Pastoral guidance on how faith communities can support teens and families navigating mental health crises including self-harm</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
