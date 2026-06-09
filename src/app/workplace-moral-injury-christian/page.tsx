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
    title: "Moral Injury Is Not Weakness — It Is the Wound of a Working Conscience",
    verse: "Romans 2:15",
    text: "\"They show that the requirements of the law are written on their hearts, their consciences also bearing witness, and their thoughts sometimes accusing them and at other times even defending them.\" Moral injury is the wound that occurs when a person is required — by authority, by circumstances, by institutional pressure — to act in ways that violate their deep moral convictions, or to witness such violations without power to stop them. The very fact that it hurts is evidence that the conscience is functioning. The person who feels no pain in these situations has the problem, not the one who does.",
  },
  {
    title: "Institutional Loyalty Has Limits",
    verse: "Acts 5:29",
    text: "\"Peter and the other apostles replied: 'We must obey God rather than human beings.'\" There is a long tradition in Christian thought of legitimate civil disobedience and conscientious objection — the understanding that human institutional authority does not carry unlimited claims on obedience. The employee who is instructed to falsify data, cover up harm, or participate in exploitation has not simply made a career decision — they have been placed at a spiritual crossroads. Obedience to God sometimes means institutional nonconformity.",
  },
  {
    title: "Bearing False Witness Has Workplace Forms",
    verse: "Exodus 20:16",
    text: "\"You shall not give false testimony against your neighbor.\" The commandment against false witness extends into professional life — into signing reports one knows are misleading, presenting financial information that obscures harm, covering for an institution's wrongdoing, or staying silent about facts that would protect others. The Christian who works within institutions is not exempt from the commandment's reach. The weight of institutional pressure does not remove personal moral responsibility.",
  },
  {
    title: "Whistleblowing Is a Form of Prophetic Witness",
    verse: "Ezekiel 33:6",
    text: "\"But if the watchman sees the sword coming and does not blow the trumpet to warn the people and the sword comes and takes someone's life, that person's life will be taken because of their sin, but I will hold the watchman accountable for their blood.\" The Hebrew prophets consistently spoke against institutional wrongdoing — confronting kings, priests, and merchants who violated their trust. The watchman who sees harm coming and stays silent to protect institutional relationships is, in biblical framing, morally culpable. Prophetic truth-telling has always carried cost.",
  },
  {
    title: "Rest Is a Form of Resistance Against Dehumanizing Work",
    verse: "Exodus 20:8–10",
    text: "\"Remember the Sabbath day by keeping it holy. Six days you shall labor and do all your work, but the seventh day is a sabbath to the LORD your God.\" The Sabbath commandment is given in the context of Israel's release from slavery — a system in which human beings were defined entirely by their economic productivity. The command to rest is not merely practical; it is a declaration that human beings are not merely their labor output. In dehumanizing work environments, the practice of Sabbath is a counter-liturgy — an act of resistance against reduction.",
  },
];

const voices = [
  {
    id: 1,
    name: "Jonathan Shay",
    role: "Psychiatrist, Author of Achilles in Vietnam",
    quote: "Moral injury occurs when someone who has authority — a leader, an institution — betrays what is right. It is not guilt. It is the wound of betrayal by those who were supposed to be trustworthy.",
    bio: "Shay coined the term 'moral injury' in his work with Vietnam veterans, identifying the psychological and spiritual damage that occurs when those in authority violate the moral expectations that make institutional life workable. His framework has since been applied to healthcare, first responders, and corporate workers.",
  },
  {
    id: 2,
    name: "Diane Langberg",
    role: "Psychologist, Author of Redeeming Power",
    quote: "Institutional power that is not accountable is dangerous. And institutions that protect themselves from accountability by silencing the people who suffer their abuse are engaged in a spiritual as well as institutional evil.",
    bio: "Langberg has spent decades working at the intersection of trauma, power, and Christian institutions, bringing particular clarity to how organizational pressure silences victims and protects abusers — and what faithful witness looks like from within and against such systems.",
  },
  {
    id: 3,
    name: "Os Guinness",
    role: "Author, The Call; The Magna Carta of Humanity",
    quote: "Vocation means that every Christian is called to serve God in and through their work — and that this calling is higher than any employer's claim on their conscience. When these two claims conflict, the higher one wins.",
    bio: "Guinness has developed the most thorough Protestant theology of vocation, including the implications for how Christians navigate moral conflicts in professional life and the limits of institutional loyalty.",
  },
  {
    id: 4,
    name: "Amy Simpson",
    role: "Author, Troubled Minds; Editor and Mental Health Advocate",
    quote: "Many Christians in morally injurious work environments have no language for what they are experiencing. They know they are suffering, but they cannot name it — and so they blame themselves or God.",
    bio: "Simpson has written about the intersection of mental health, faith, and institutional pressure, helping Christians name and navigate the spiritual and psychological dimensions of workplace harm.",
  },
];

const practices = [
  {
    icon: "✍️",
    title: "Name and Document What Happened",
    text: "Moral injury heals when the wound can be clearly named. Write a factual, specific account of what you were asked to do or witnessed, what you believed about it morally, and the gap between those two things. Documentation serves both psychological and practical purposes — if future action is necessary, having a clear account is essential. Many people discover that naming the injury on paper reduces its power.",
  },
  {
    icon: "🧠",
    title: "Find a Therapist Trained in Moral Injury",
    text: "Moral injury requires specific therapeutic attention — it is distinct from PTSD, depression, or burnout, though it can produce all three. Adaptive Disclosure Therapy and other moral injury-specific treatments exist. Ask a potential therapist directly: 'Are you familiar with moral injury as a clinical construct?' If they are not, they may still be helpful — but someone with specific training will be more effective.",
  },
  {
    icon: "⚖️",
    title: "Seek Legal and Ethical Consultation Before Acting",
    text: "If you are considering whistleblowing, leaving under complaint, or disclosing institutional wrongdoing, consult a lawyer first — particularly one who specializes in employment law or whistleblower protections. The Government Accountability Project (whistleblower.org) provides resources. Acting without legal preparation can undermine the effectiveness of a legitimate disclosure.",
  },
  {
    icon: "🤝",
    title: "Find Community With Others Who Have Navigated This",
    text: "Isolation is one of the most damaging features of workplace moral injury — the experience of carrying a secret that cannot be spoken without cost. Find others who have navigated similar situations: whistleblowers, veterans navigating institutional betrayal, healthcare workers after the pandemic. Their experience cannot tell you what to do, but it can remind you that you are not alone and that survival and integrity are compatible.",
  },
  {
    icon: "🕊️",
    title: "Confess What You Contributed — If You Did",
    text: "Moral injury sometimes involves the recognition that we participated in what we should have refused. The Christian practice of confession — naming specific wrongdoing before God and a trusted person — is one of the few genuine responses to this dimension of moral injury. It is not about self-flagellation but about honest accounting and the reception of absolution. Many people carry moral injury for years because they cannot name their own complicity honestly.",
  },
  {
    icon: "📅",
    title: "Practice Sabbath as Decompression and Reorientation",
    text: "Dehumanizing workplaces distort the person who inhabits them over time. The regular practice of Sabbath — actual, intentional rest that is not productive — interrupts this distortion. Weekly Sabbath helps maintain the perspective that you are not primarily a worker, that your worth is not your output, and that the world does not depend on your continuous performance.",
  },
];

const scriptures = [
  { verse: "Micah 6:8", text: "\"He has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God.\"" },
  { verse: "Proverbs 14:5", text: "\"An honest witness does not deceive, but a false witness pours out lies.\"" },
  { verse: "Isaiah 1:17", text: "\"Learn to do right; seek justice. Defend the oppressed. Take up the cause of the fatherless; plead the case of the widow.\"" },
  { verse: "Matthew 5:37", text: "\"All you need to say is simply 'Yes' or 'No'; anything beyond this comes from the evil one.\"" },
  { verse: "Ephesians 5:11", text: "\"Have nothing to do with the fruitless deeds of darkness, but rather expose them.\"" },
  { verse: "Romans 12:2", text: "\"Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is.\"" },
];

type MoralInjuryEntry = {
  id: string;
  date: string;
  incident: string;
  moral: string;
  prayer: string;
};

export default function WorkplaceMoralInjuryChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<MoralInjuryEntry[]>([]);
  const [incident, setIncident] = useState("");
  const [moral, setMoral] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_workplacemoralinjury_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!incident.trim()) return;
    const entry: MoralInjuryEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      incident,
      moral,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_workplacemoralinjury_entries", JSON.stringify(updated));
    setIncident(""); setMoral(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_workplacemoralinjury_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>⚖️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>
            Workplace Moral Injury & Christian Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For Christians who have been required to violate their conscience at work, witnessed institutional wrongdoing, or carry the weight of complicity — pastoral theology for the wound of a working conscience in a world that doesn&apos;t always reward integrity.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Support: <strong>988 Suicide & Crisis Lifeline</strong> | <strong>Whistleblower Resources:</strong> whistleblower.org | <strong>Government Accountability Project:</strong> 202-457-0034
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
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>Describe the incident or situation that violated your conscience — as specifically as you can:</label>
                <textarea value={incident} onChange={e => setIncident(e.target.value)} rows={4} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What moral value or conviction was violated — what did you know was wrong?</label>
                <textarea value={moral} onChange={e => setMoral(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer for wisdom, courage, and clarity about what comes next:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.incident && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Incident:</strong> {e.incident}</p>}
                {e.moral && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Moral Conviction Violated:</strong> {e.moral}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="P8kPsrsnSvI" title="What Is Moral Injury? — Understanding the Wound of a Working Conscience" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>What Is Moral Injury? Understanding the Wound of a Working Conscience</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Clinical explanation of moral injury — what it is, how it differs from PTSD and burnout, and why naming it matters for healing</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="KlDovnXxmrg" title="Os Guinness — The Call: Vocation and Christian Integrity in Professional Life" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Os Guinness: The Call — Vocation and Christian Integrity in Professional Life</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Theology of vocation and what it means to maintain Christian integrity in institutions that do not always reward it</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="y9EF8MXlLNU" title="Diane Langberg — Redeeming Power: Institutional Abuse and Christian Witness" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Diane Langberg: Redeeming Power — Institutional Abuse and Christian Witness</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Langberg on how power corrupts institutions — including Christian ones — and what faithful witness looks like from within compromised systems</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="EUCy79m5YBY" title="Whistleblowing as Christian Witness — When Prophetic Truth-Telling Carries Cost" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Whistleblowing as Christian Witness: When Truth-Telling Carries Cost</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Theological and practical exploration of when speaking out about institutional wrongdoing is a form of Christian witness, and what that costs</p>
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
