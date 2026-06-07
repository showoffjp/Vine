"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Jesus Had the Harshest Words for Religious Leaders",
    verse: "Matthew 23:4",
    text: "They tie up heavy, cumbersome loads and put them on other people's shoulders, but they themselves are not willing to lift a finger to move them. The spiritual abuse of authority — using religion to control, shame, isolate, or coerce — is not a modern discovery. Jesus confronted it directly in the religious leaders of his day. His language was not gentle. The God who was abused by religious authority stands firmly against those who abuse it in his name.",
  },
  {
    title: "Your Anger Is Appropriate",
    verse: "Ephesians 4:26",
    text: "In your anger do not sin: do not let the sun go down while you are still angry. Paul assumes anger as a legitimate emotion. Anger at what was done to you in God's name — the manipulation, the control, the silencing, the distortion of Scripture — is appropriate. It does not need to be spiritualized away. It needs to be felt and named before it can be addressed. Anger that is denied goes somewhere worse.",
  },
  {
    title: "God Is Not the Abuser",
    verse: "Psalm 34:18",
    text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit. The person who harmed you was not representing God accurately. The God of Scripture draws close to the crushed — especially those crushed by the abuse of power. Separating the abuser from the God they claimed to represent is essential to recovery. It is also, for many survivors, one of the hardest things they will ever do.",
  },
  {
    title: "Healthy Churches Exist",
    verse: "Acts 2:42-44",
    text: "They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer... All the believers were together and had everything in common. The community Luke describes is characterized by mutuality, accountability, and shared life — not by control, hierarchy, or coercion. This is what the church can be. It is not a utopia; it is a real community that exists in many places. But it is not where you were.",
  },
  {
    title: "Recovery Is Not Betrayal",
    verse: "Proverbs 27:5",
    text: "Better is open rebuke than hidden love. Naming what happened, refusing to return to what caused harm, and seeking healing outside the abusive system is not disloyalty to God or to the church. It is the beginning of wisdom. The open naming of wrong — even religious wrong — is not a sin. It is what the prophets did.",
  },
];

const voices = [
  {
    id: 1,
    name: "Wade Mullen",
    role: "Author, Something's Not Right",
    quote: "Abusive systems share a common grammar: deflection, minimization, and the silencing of those who name what is wrong. Learning to recognize the grammar is the beginning of getting free.",
    bio: "Wade Mullen is a researcher and consultant who has spent years studying institutional abuse in church contexts, helping survivors understand the patterns that made what happened possible.",
  },
  {
    id: 2,
    name: "Diane Langberg",
    role: "Author, Redeeming Power; trauma therapist",
    quote: "Power used for self-protection, image management, or control in the name of God is a form of idolatry. The church that does this has substituted something else for God.",
    bio: "Diane Langberg is a trauma therapist who has worked for decades with survivors of abuse — including spiritual and religious abuse — and who brings both clinical and theological depth to the subject.",
  },
  {
    id: 3,
    name: "Chuck DeGroat",
    role: "Author, When Narcissism Comes to Church",
    quote: "Many survivors of pastoral narcissism leave the church and think they left God. They did not. They left a person's performance of God. The God of the Bible was never there.",
    bio: "Chuck DeGroat is a professor, therapist, and pastor who has written with unusual clarity about the dynamics of narcissism and abusive leadership in church contexts, and what healing requires.",
  },
  {
    id: 4,
    name: "Scot McKnight & Laura Barringer",
    role: "Authors, A Church Called Tov",
    quote: "The toxicity of a church culture is not primarily about bad individuals. It is about a culture that prioritizes image over truth, loyalty over accountability, and the leader's comfort over the congregation's wellbeing.",
    bio: "Scot McKnight and his daughter Laura Barringer analyzed the culture of churches where abuse occurs and developed a positive vision of what a church characterized by goodness rather than toxicity looks like.",
  },
];

const practices = [
  {
    icon: "🛑",
    title: "Name What Happened Without Minimizing It",
    text: "Spiritual abuse is real. It includes using Scripture to control, using authority to silence, spiritual manipulation, shunning, coercive accountability, and the exploitation of the power differential between leaders and congregants. Name what happened specifically. It has a name.",
  },
  {
    icon: "🧠",
    title: "Find a Trauma-Informed Therapist",
    text: "Religious trauma has specific features that require specific understanding. Look for a therapist with experience in spiritual abuse, religious trauma syndrome, or complex trauma from religious contexts. Some therapists understand this well; many do not — it is worth seeking out someone who does.",
  },
  {
    icon: "🕰️",
    title: "Give Yourself Time Away",
    text: "The pressure to immediately return to church community is common and often premature. Many survivors need a period of genuine rest from institutional religion before they can assess clearly what healthy community looks like. This is not apostasy. It is convalescence.",
  },
  {
    icon: "📚",
    title: "Read What Others Have Survived",
    text: "Wade Mullen's Something's Not Right, Diane Langberg's Redeeming Power, and Chuck DeGroat's When Narcissism Comes to Church all give survivors language for what happened and frameworks for healing. Being witnessed by others who have survived similar experiences reduces the isolation.",
  },
  {
    icon: "🤝",
    title: "Build Small, Trusted Community First",
    text: "Return to institutional church, when it happens, should not be the first step. Building a small circle of two or three trusted, honest Christians who are not connected to the abusive church context is more important. Intimacy before institution.",
  },
  {
    icon: "📝",
    title: "Consider Whether Reporting Is Appropriate",
    text: "If the spiritual abuse involved criminal conduct — sexual abuse, financial fraud, physical harm — reporting to civil authorities is appropriate and may protect others. Spiritual leaders are not exempt from legal accountability. Reporting is not betrayal of the church. It is protection of the body.",
  },
];

const scriptures = [
  { verse: "Matthew 23:4", text: "They tie up heavy, cumbersome loads and put them on other people's shoulders, but they themselves are not willing to lift a finger to move them." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Isaiah 42:3", text: "A bruised reed he will not break, and a smoldering wick he will not snuff out." },
  { verse: "Micah 6:8", text: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God." },
  { verse: "Ezekiel 34:4", text: "You have not strengthened the weak or healed the sick or bound up the injured. You have not brought back the strays or searched for the lost. You have ruled them harshly and brutally." },
  { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
];

type SAEntry = { id: string; date: string; name: string; trust: string; prayer: string };

export default function SpiritualAbuseChurchRecoveryPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SAEntry[]>([]);
  const [name, setName] = useState("");
  const [trust, setTrust] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("vine_spiritualabuserecoveryj_entries");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  function saveEntry() {
    if (!name.trim()) return;
    const e: SAEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), name, trust, prayer };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem("vine_spiritualabuserecoveryj_entries", JSON.stringify(next));
    setName(""); setTrust(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_spiritualabuserecoveryj_entries", JSON.stringify(next));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: GREEN, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Spiritual Abuse & Church Recovery</h1>
          <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>For those wounded by the misuse of spiritual authority — naming what happened, recovering from religious trauma, and slowly finding a way back to the God who was not the abuser.</p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #7f1d1d", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#fca5a5", fontWeight: 600, marginBottom: "0.25rem" }}>Support Resources</p>
          <p style={{ color: "#fca5a5", fontSize: "0.9rem", margin: 0 }}>
            988 Lifeline · <a href="https://www.thehotline.org" style={{ color: "#fca5a5" }}>thehotline.org</a> · <a href="https://religioustrauma.org" style={{ color: "#fca5a5" }}>religioustrauma.org</a> · Text <strong>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", marginBottom: "1rem" }}>
                  <p style={{ fontStyle: "italic", fontSize: "1.05rem", marginBottom: "0.5rem" }}>"{v.quote}"</p>
                </div>
                <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</p>
                <p style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "1.25rem" }}>Journal Entry</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What needs to be named about what happened?</label>
                <textarea value={name} onChange={e => setName(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="What was done, what was said, what was taken from you..." />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What do I still trust — about God, about people, about the church?</label>
                <textarea value={trust} onChange={e => setTrust(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Even small residuals of trust are worth naming..." />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer — or the beginning of one</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Even anger or silence toward God is a beginning..." />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.length === 0 && <p style={{ color: MUTED, textAlign: "center" }}>No entries yet. What happened deserves a witness.</p>}
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.name && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Named</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.name}</p></>}
                {e.trust && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>What I still trust</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.trust}</p></>}
                {e.prayer && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Prayer</p><p style={{ lineHeight: 1.7 }}>{e.prayer}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Something's Not Right — Wade Mullen</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Wade Mullen on recognizing the patterns of institutional spiritual abuse — and why those patterns are so hard to see from inside them.</p>
              <VideoEmbed videoId="j2h-q3ZPKFI" title="Something's Not Right Wade Mullen" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>When Narcissism Comes to Church — Chuck DeGroat</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Chuck DeGroat on the psychology of narcissistic leadership in churches and what healing looks like for those who have been harmed.</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="When Narcissism Comes to Church Chuck DeGroat" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Redeeming Power — Diane Langberg</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Diane Langberg on the misuse of power in Christian contexts and the specific wounds it creates — and how healing requires reckoning with what actually happened.</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Redeeming Power Diane Langberg" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Religious Trauma and Recovery</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>What religious trauma is, how it manifests in the body and mind, and what a genuine path toward recovery looks like — including whether and how people return to faith communities.</p>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="Religious Trauma and Recovery" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
