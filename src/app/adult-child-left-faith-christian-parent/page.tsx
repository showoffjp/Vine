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
    title: "The Prodigal Son's Father Did Not Chase Him",
    verse: "Luke 15:20",
    text: "\"But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.\" The most famous parable about a child who left is also a parable about a parent who waited. The father did not chase the son. He did not withdraw love and wait to offer it when the son returned. He watched. And when the son turned, he ran. The Christian parent whose adult child has left the faith is in the father's position: watching, waiting, loving across distance, ready to run when the moment comes.",
  },
  {
    title: "Faith Cannot Be Transferred — Only Lived",
    verse: "Deuteronomy 6:6–7",
    text: "\"These commandments that I give you today are to be on your hearts. Impress them on your children.\" The Hebrew word translated 'impress' — shanan — means to sharpen or repeat. The instruction is to make faith formation part of the texture of daily life. But formation is not determinism. The child who received faith formation is not guaranteed to retain it — the most devout households have children who walk away, and the most faithless households have children who find their way to God. Faithful parenting does not purchase your child's faith.",
  },
  {
    title: "Your Child Is Still Made in the Image of God",
    verse: "Genesis 1:27",
    text: "\"So God created mankind in his own image, in the image of God he created them.\" The image of God — the imago Dei — is not contingent on faith. Your adult child who has left Christianity still bears the divine image. They still have dignity, worth, the capacity for love and truth and goodness. The departure from faith is not the departure from humanity or from God's concern. Many people who have left organized Christianity are living out the image of God in ways that are more visible than many people inside the church.",
  },
  {
    title: "Relationship Outlasts Persuasion",
    verse: "1 Corinthians 13:7",
    text: "\"Love always protects, always trusts, always hopes, always perseveres.\" The parent who makes every interaction with the faith-departed adult child into a conversion opportunity typically loses the relationship — and with it, whatever influence was possible. Paul's description of love — that it perseveres, hopes, protects — is a better guide than the urgency that drives most religious arguments. The parents who maintain relationship while loving without condition are far more likely to have a child who one day asks their questions openly.",
  },
  {
    title: "This Grief Is Real and Deserves to Be Named",
    verse: "Romans 9:2",
    text: "\"I have great sorrow and unceasing anguish in my heart\" — Paul speaking of his grief for his Jewish kinsmen who did not accept Christ. The parent whose adult child has walked away from faith is carrying a real, ongoing grief — particularly if they believe in eternal consequences. This grief is legitimate. The church that tells parents to simply 'trust God' and move on is not mourning with those who mourn. The anguish deserves pastoral attention, not spiritual dismissal.",
  },
];

const voices = [
  {
    id: 1,
    name: "Jim Daly",
    role: "President, Focus on the Family",
    quote: "The most common call we receive at Focus on the Family is from Christian parents whose adult children have left the faith. It is the most widespread, most painful, and most under-addressed crisis in the American church.",
    bio: "Daly has spoken candidly about the epidemic of faith departure among adults raised in Christian homes and the particular grief of parents navigating this loss — providing a framework for love and relationship across the faith divide.",
  },
  {
    id: 2,
    name: "Kara Powell",
    role: "Author, Sticky Faith; Fuller Youth Institute",
    quote: "Most young people who leave faith do not do so because they found better answers elsewhere. They leave because they never had a safe place to ask their real questions inside the church.",
    bio: "Powell's Sticky Faith research has been foundational to understanding why young people depart from Christianity — and what factors in family and church contribute to faith that stays. Her work is essential reading for parents trying to understand what happened.",
  },
  {
    id: 3,
    name: "David Kinnaman",
    role: "Author, You Lost Me; President, Barna Group",
    quote: "We found that the young people who left faith felt they had to choose between their faith and their questions. The church made doubt the enemy. And so they left — not to stop believing, but to stop pretending.",
    bio: "Kinnaman's research on why the Millennial and Gen Z generations have left Christianity in large numbers has given Christian parents a framework for understanding their child's departure as part of a broader cultural and ecclesial failure, not simply a personal one.",
  },
  {
    id: 4,
    name: "Tish Harrison Warren",
    role: "Anglican Priest, Author of Liturgy of the Ordinary",
    quote: "Many people who have left the evangelical church have not left God — they have left a particular expression of Christianity that was causing them harm. The parent's job is to be the face of the God they haven't yet walked away from.",
    bio: "Warren's writing on the ordinary Christian life, doubt, and the church's failures has provided a theological framework for understanding faith departure as sometimes being a departure from a broken institution rather than from God.",
  },
];

const practices = [
  {
    icon: "👂",
    title: "Ask Why They Left — And Actually Listen",
    text: "Most parents have never actually asked their faith-departed adult child to explain their journey in detail and listened without interjecting theological correction. Ask: 'Will you help me understand what happened for you?' Then listen for an entire conversation without responding theologically. What you learn may be profoundly important — and the listening itself communicates a love that arguments never can.",
  },
  {
    icon: "🚫",
    title: "Stop Making Every Interaction About Their Return",
    text: "The adult child who knows that every holiday gathering will include an implicit or explicit call to return to faith will stop coming to the gatherings. The relationship is the vessel for everything else. Protecting the relationship — being someone whose company is genuinely enjoyable and not spiritually pressurized — is the most important practical step a parent can take.",
  },
  {
    icon: "🤝",
    title: "Find Community with Other Parents in the Same Position",
    text: "Many parents carry this grief invisibly, unable to acknowledge it in their church community without triggering unsolicited advice or judgment. Find others in the same position: Focus on the Family's resources for parents of prodigals, online communities, and in some areas local groups. Shared suffering reduces its weight and provides perspective from those further along.",
  },
  {
    icon: "🧠",
    title: "Get Pastoral Counseling or Therapy for Yourself",
    text: "The grief of a faith-departed adult child, when it includes beliefs about eternal consequences, can be a profound and ongoing burden. Find a pastor or therapist who takes both the grief and the theology seriously — who will not dismiss either the pain or the faith. This is not about fixing the child; it is about caring for yourself through an enduring, grief-filled situation.",
  },
  {
    icon: "📚",
    title: "Understand the Research on Why People Leave",
    text: "David Kinnaman's You Lost Me and Kara Powell's Sticky Faith provide research-based frameworks for understanding why young people leave Christianity — which is frequently less about the child's choices and more about the church's failures to create environments where faith and real life can coexist. Understanding this can significantly reduce self-blame and increase compassion.",
  },
  {
    icon: "🙏",
    title: "Pray Privately — Not at Them",
    text: "Praying publicly for your child at family gatherings, or telling your child that you pray for them to return — while perhaps sincere — often reads as pressure rather than care. Pray privately, persistently, and honestly. Bring your grief to God. Trust the God who loves your child infinitely more than you do to do what you cannot do. This is not passive; it is the most important active thing you can do.",
  },
];

const scriptures = [
  { verse: "Luke 15:20", text: "\"But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.\"" },
  { verse: "Romans 9:2–3", text: "\"I have great sorrow and unceasing anguish in my heart. For I could wish that I myself were cursed and cut off from Christ for the sake of my people.\"" },
  { verse: "1 Peter 3:1", text: "\"Wives, in the same way submit yourselves to your own husbands so that, if any of them do not believe the word, they may be won over without words by the behavior of their wives.\"" },
  { verse: "Isaiah 55:11", text: "\"So is my word that goes out from my mouth: It will not return to me empty, but will accomplish what I desire and achieve the purpose for which I sent it.\"" },
  { verse: "Philippians 4:6–7", text: "\"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts.\"" },
  { verse: "Lamentations 3:25", text: "\"The LORD is good to those whose hope is in him, to the one who seeks him.\"" },
];

type ProdigalEntry = {
  id: string;
  date: string;
  carrying: string;
  relationship: string;
  prayer: string;
};

export default function AdultChildLeftFaithChristianParentPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ProdigalEntry[]>([]);
  const [carrying, setCarrying] = useState("");
  const [relationship, setRelationship] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_adultchildleftfaithparent_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!carrying.trim()) return;
    const entry: ProdigalEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      carrying,
      relationship,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_adultchildleftfaithparent_entries", JSON.stringify(updated));
    setCarrying(""); setRelationship(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_adultchildleftfaithparent_entries", JSON.stringify(updated));
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
            When Your Adult Child Has Left the Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For Christian parents whose adult child has walked away from faith — pastoral care for one of the most common and least-acknowledged griefs in the church, practical guidance for maintaining relationship across the faith divide, and honest theology for the long wait.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Support: <strong>988 Suicide & Crisis Lifeline</strong> | <strong>Focus on the Family:</strong> 1-855-771-HELP | <strong>Fuller Youth Institute:</strong> fulleryouthinstitute.org
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
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What are you carrying about your child&apos;s departure from faith?</label>
                <textarea value={carrying} onChange={e => setCarrying(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>Where is the relationship with your child right now — and what would you want it to be?</label>
                <textarea value={relationship} onChange={e => setRelationship(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer — for your child, for the relationship, for your own heart:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.carrying && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Carrying:</strong> {e.carrying}</p>}
                {e.relationship && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Relationship:</strong> {e.relationship}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="kd7HC3PcBEg" title="David Kinnaman — You Lost Me: Why Young Christians Leave the Church" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>David Kinnaman: You Lost Me — Why Young Christians Leave the Church</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Research-based explanation of the major reasons young adults depart from Christian faith — essential context for parents trying to understand what happened</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="hSBjZ5bP9hg" title="Sticky Faith — What Kara Powell's Research Reveals About Faith That Lasts" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Sticky Faith: What the Research Reveals About Faith That Lasts</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Kara Powell on the family and church factors that correlate with faith that persists into adulthood — and what to do now that you know</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="E3H3T2_Yxe0" title="Loving Your Prodigal — How to Maintain Relationship When Your Child Has Left Faith" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Loving Your Prodigal: Maintaining Relationship When Your Child Has Left Faith</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Practical pastoral guidance on how to stay connected to a faith-departed adult child without making every interaction a conversion attempt</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="F1GYL-pTSbo" title="The Grief of a Prodigal Child — Pastoral Care for Parents Who Are Waiting" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>The Grief of a Prodigal Child: Pastoral Care for Parents Who Are Waiting</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Pastoral reflection on the long, grief-filled experience of watching an adult child live apart from faith — and what it means to wait with hope</p>
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
