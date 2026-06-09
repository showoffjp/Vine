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
    title: "God Is Not the Abuser",
    verse: "John 10:10",
    text: "\"The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full.\" The God revealed in Jesus does not control through shame, demand loyalty through fear, weaponize Scripture to silence doubts, or protect institution over person. When a leader does these things in God's name, they are acting as the thief — not as the shepherd. Spiritual abuse recovery often requires separating the real God from the constructed god used to harm you.",
  },
  {
    title: "Authority Has Limits the Abuser Violated",
    verse: "Matthew 20:25–26",
    text: "\"Jesus called them together and said, 'You know that the rulers of the Gentiles lord it over them, and their high officials exercise authority over them. Not so with you. Instead, whoever wants to become great among you must be your servant.'\" Jesus explicitly defined Christian leadership as servant authority — not lordship. Leaders who lord authority over members, demand unquestioning submission, or punish questioning have violated the explicit definition Jesus gave for their role.",
  },
  {
    title: "Leaving Was the Right Thing to Do",
    verse: "Matthew 18:15–17",
    text: "\"If your brother or sister sins, go and point out their fault... But if they will not listen... treat them as you would a pagan or a tax collector.\" Scripture has always recognized that some situations require distance. Leaving an abusive church is not abandoning the faith — it is protecting yourself from those who have twisted the faith into a weapon. The command to flee applies to spiritual harm.",
  },
  {
    title: "Your Anger About This Is Righteous",
    verse: "Mark 11:15–17",
    text: "\"On reaching Jerusalem, Jesus entered the temple courts and began driving out those who were buying and selling there. He overturned the tables... 'My house will be called a house of prayer for all nations. But you have made it a den of robbers.'\" Jesus was furious at the misuse of the temple as an institution of exploitation. He overturned furniture. Anger at the misuse of spiritual authority is a response learned from Jesus, not a departure from him.",
  },
  {
    title: "You Are Permitted to Rebuild Differently",
    verse: "Isaiah 61:3",
    text: "\"They will be called oaks of righteousness, a planting of the LORD for the display of his splendor... They will rebuild the ancient ruins and restore the places long devastated; they will renew the ruined cities.\" Recovery from spiritual abuse does not require returning to identical structures. God rebuilds things differently than they were — with the survivors themselves as the material of restoration.",
  },
];

const voices = [
  {
    id: 1,
    name: "Dr. Diane Langberg",
    role: "Psychologist, Author of Redeeming Power",
    quote: "Power used to serve the self, silence the vulnerable, or protect the institution is the opposite of the power demonstrated in the cross.",
    bio: "Langberg's clinical and theological work on power and abuse in the church is perhaps the most substantive treatment of spiritual abuse recovery available from a Christian perspective.",
  },
  {
    id: 2,
    name: "Wade Mullen",
    role: "Author, Something's Not Right; Spiritual Abuse Researcher",
    quote: "The language of spiritual abuse does not sound like abuse. It sounds like spirituality — which is why it is so disorienting and so difficult to name.",
    bio: "Mullen's research on the rhetoric and tactics of institutional abuse has helped thousands of survivors identify and name what they experienced in language that makes sense of their confusion.",
  },
  {
    id: 3,
    name: "Scot McKnight",
    role: "Author, A Church Called Tov; New Testament Scholar",
    quote: "A church culture that forms good people is a tov culture — and a tov culture is distinguished above all by its protection of the vulnerable, not the powerful.",
    bio: "McKnight and Barringer's analysis of toxic church culture identified the specific markers of abusive institutional cultures and what genuine health looks like as a contrast.",
  },
  {
    id: 4,
    name: "Naghmeh Abedini Panahi",
    role: "Advocate, Survivor of Religious Abuse",
    quote: "When the church is the site of your abuse, leaving church is the bravest and most faithful thing you can do.",
    bio: "Abedini Panahi has spoken publicly about her experience of spiritual and domestic abuse within a highly religious context, and on the specific challenges of recovery when the abuser used faith as a tool.",
  },
];

const practices = [
  {
    icon: "🛑",
    title: "Name What Happened as Abuse",
    text: "Spiritual abuse is a form of abuse. Using theological language, spiritual authority, or religious community to control, shame, silence, or harm another person is abuse. Naming it accurately is the first step toward being able to process it correctly.",
  },
  {
    icon: "🧠",
    title: "Find a Trauma-Informed Therapist",
    text: "Spiritual abuse creates specific forms of religious trauma. Look for a therapist who understands religious trauma syndrome, PTSD, and complex trauma — and who will not pressure you toward either continued faith or abandonment of faith. You need someone who will hold the complexity.",
  },
  {
    icon: "📚",
    title: "Read Honest Accounts",
    text: "Read Something's Not Right by Wade Mullen, A Church Called Tov by McKnight, or Redeeming Power by Diane Langberg. Survivor memoirs can also help. Being able to recognize your experience in others' accounts is profoundly de-isolating.",
  },
  {
    icon: "🤝",
    title: "Find Survivor Community",
    text: "Religious Trauma Recovery communities exist online and in person. The Reclaiming My Theology podcast, the Spiritual Abuse Survivor groups, and local therapist-led recovery groups can provide peer support from people who understand the specific disorientation of spiritual abuse.",
  },
  {
    icon: "⏳",
    title: "Take the Time You Need from Church",
    text: "There is no timeline for returning to church community after spiritual abuse. Some survivors need months; some need years; some need different forms of community entirely. The pressure to return quickly is frequently itself a continuation of the abuse dynamic. Heal first.",
  },
  {
    icon: "🔍",
    title: "Distinguish God from the Abuser's God",
    text: "The most critical spiritual work in recovery is distinguishing between the character of the actual God — revealed in Jesus — and the controlling, punishing, shaming deity the abuser constructed. A spiritual director or counselor can help with this specific and delicate work.",
  },
];

const scriptures = [
  { verse: "Ezekiel 34:2–4", text: "\"Woe to you shepherds of Israel who only take care of yourselves! Should not shepherds take care of the flock? You have not strengthened the weak or healed the sick or bound up the injured... you have ruled them harshly and brutally.\"" },
  { verse: "Psalm 27:10", text: "\"Though my father and mother forsake me, the LORD will receive me.\"" },
  { verse: "Isaiah 42:3", text: "\"A bruised reed he will not break, and a smoldering wick he will not snuff out.\"" },
  { verse: "Matthew 23:4", text: "\"They tie up heavy, cumbersome loads and put them on other people's shoulders, but they themselves are not willing to lift a finger to move them.\"" },
  { verse: "Psalm 56:8", text: "\"You have kept count of my tossings; put my tears in your bottle. Are they not in your book?\"" },
  { verse: "Micah 6:8", text: "\"He has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God.\"" },
];

type AbuseEntry = {
  id: string;
  date: string;
  truth: string;
  anger: string;
  prayer: string;
};

export default function SpiritualAbuseRecoveryPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<AbuseEntry[]>([]);
  const [truth, setTruth] = useState("");
  const [anger, setAnger] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_spiritualabuserecovery_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!truth.trim()) return;
    const entry: AbuseEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      truth,
      anger,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_spiritualabuserecovery_entries", JSON.stringify(updated));
    setTruth(""); setAnger(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_spiritualabuserecovery_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🕊️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>
            Spiritual Abuse Recovery
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For those wounded by leaders, communities, or systems that used spiritual authority to control, harm, or silence — pastoral care that names abuse honestly, separates God from the abuser's god, and holds space for the long work of recovery.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Support: <strong>988 Suicide & Crisis Lifeline</strong> — call or text 988 | <strong>SNAP Network:</strong> snapnetwork.org | <strong>Crisis Text Line:</strong> Text HOME to 741741
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
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>{p.title}</h3>
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
              <h3 style={{ color: PURPLE, marginBottom: "1rem", fontWeight: "bold" }}>Private Journal</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What do I know to be true about what happened, that I was not allowed to say?</label>
                <textarea value={truth} onChange={e => setTruth(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What anger am I carrying that needs to be named, not suppressed?</label>
                <textarea value={anger} onChange={e => setAnger(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer or question for the real God — not the one used against you:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.truth && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Truth:</strong> {e.truth}</p>}
                {e.anger && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Anger:</strong> {e.anger}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="oqwS3AkKEFQ" title="Diane Langberg on Redeeming Power and Spiritual Abuse" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Diane Langberg: Redeeming Power — Abuse in the Church</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Langberg on how power is misused in Christian communities and what recovery requires</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="MN4xBwGPKcw" title="Wade Mullen — Something's Not Right: Recognizing Spiritual Abuse" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Something's Not Right: The Language of Spiritual Abuse</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Mullen on the specific rhetorical tactics used in spiritually abusive environments and how to recognize them</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="ABqVvfPUkT0" title="Religious Trauma Syndrome — What It Is and How to Heal" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Religious Trauma Syndrome: Clinical Framework and Healing Path</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Clinical overview of religious trauma syndrome and the specific therapeutic approaches that support recovery</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="oJiJzFBHVP8" title="A Church Called Tov — Scot McKnight on Toxic vs Healthy Church Culture" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>A Church Called Tov: Toxic Culture vs. Goodness</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>McKnight on the specific markers that distinguish a toxic church culture from a genuinely good one</p>
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
