"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Parable of the Father Who Waited",
    verse: "Luke 15:20",
    text: "\"But while he was still a long way off, his father saw him and felt compassion, and ran and embraced him and kissed him.\" The prodigal son returned home — but he returned to a father who had boundaries, resources, and wisdom. The father ran to embrace his son; he did not run to rescue him from consequences. Love and wisdom are not opposites. The father's joy was not naive."
  },
  {
    title: "Honor Without Enabling",
    verse: "Proverbs 19:19",
    text: "\"A man of great wrath will pay the penalty; for if you deliver him, you will only have to do it again.\" Rescuing an adult child from consequences does not honor them — it treats them as incapable of learning. Christian love seeks the long-term flourishing of the beloved, not their short-term comfort at our own long-term expense. Boundaries protect both the parent and the child."
  },
  {
    title: "Your Home Is Not a Neutral Territory",
    verse: "Joshua 24:15",
    text: "\"But as for me and my house, we will serve the Lord.\" Your home is not merely a physical space — it is a place of order, value, and covenant. When an adult child returns, the values of the home matter: expectations around work, substance use, faith practice, financial contribution, and relational respect. These are not impositions; they are the stewardship of a household that belongs, ultimately, to God."
  },
  {
    title: "Compassion Without Losing Yourself",
    verse: "Galatians 6:2-5",
    text: "\"Bear one another's burdens, and so fulfill the law of Christ... For each will have to bear his own load.\" Paul draws a distinction: there are burdens we help each other carry (verse 2), and there are loads each person must carry themselves (verse 5). Helping your adult child is different from carrying the load they need to learn to carry. Discerning the difference is one of the hardest parenting skills."
  },
  {
    title: "Releasing Outcomes to God",
    verse: "Psalm 127:3",
    text: "\"Behold, children are a heritage from the Lord, the fruit of the womb a reward.\" Children are given to parents as a heritage — entrusted, not owned. At some point, the grown child's choices become their own responsibility before God. You cannot guarantee their outcomes by prolonged rescue. Releasing outcomes to God is not indifference — it is the hardest act of faith a parent makes."
  }
];

const voices = [
  {
    id: "v1", name: "John Townsend", role: "Psychologist, Author of 'Boundaries'",
    quote: "Love and limits go together. Parents who provide everything their adult child needs without requiring growth are not being loving — they are preventing growth.",
    bio: "Dr. John Townsend co-authored 'Boundaries' and has written specifically about the challenges parents face with adult children. His work provides the theological and psychological framework for holding love and limits together — essential for any family navigating a returning adult child."
  },
  {
    id: "v2", name: "Paul David Tripp", role: "Author, Counselor",
    quote: "You cannot want growth for your child more than your child wants it for himself. Your role is to create conditions for growth, not to manufacture the growth.",
    bio: "Paul David Tripp's pastoral and counseling work with families addresses the grief of watching adult children struggle and the temptation to rescue them from the consequences of their own choices. His theological grounding in sovereignty and love helps parents release without abandoning."
  },
  {
    id: "v3", name: "Sharon Hersh", role: "Counselor, Author",
    quote: "The hardest thing for a parent to do is watch their adult child suffer consequences and not intervene. And sometimes it is the most loving thing possible.",
    bio: "Sharon Hersh writes about parenting teenagers and young adults through addiction, mental illness, and crisis with both clinical expertise and personal vulnerability. Her work addresses the grief, shame, and exhaustion of parents whose adult children are struggling."
  },
  {
    id: "v4", name: "Henry Cloud", role: "Psychologist, Author",
    quote: "Structure is not punishment. A home with expectations, clear consequences, and honest conversations is one of the most loving environments an adult child can return to.",
    bio: "Dr. Henry Cloud co-authored 'Boundaries' and has written extensively about family systems, enabling, and the kind of structure that produces growth rather than resentment. His insights are practical and theologically grounded for Christian families."
  }
];

const practices = [
  {
    icon: "📋",
    title: "A Written Agreement Before Moving In",
    text: "Before an adult child returns home, write out the terms: rent, household responsibilities, timeline, expectations about employment or education, substance use policies, guests, and what conditions would end the arrangement. This protects the relationship by making implicit expectations explicit."
  },
  {
    icon: "📅",
    title: "Set a Clear Timeline",
    text: "Open-ended arrangements breed stagnation. Establish a defined timeline from the start — three months, six months, one year — with clear benchmarks (employment, debt reduction, next steps) that mark progress. Review and adjust the timeline together, but begin with a defined end."
  },
  {
    icon: "💬",
    title: "Regular Check-In Conversations",
    text: "Schedule regular, non-crisis conversations about how the arrangement is going: what is working, what needs to change, what the next milestone looks like. These conversations work better when they are not held in reaction to a problem."
  },
  {
    icon: "🧠",
    title: "Family Therapy",
    text: "A family therapist can facilitate the conversations that are too charged for the kitchen table. If your adult child's return is connected to addiction, mental illness, or a history of family conflict, professional guidance is not a luxury — it is essential."
  },
  {
    icon: "🫂",
    title: "Your Own Support",
    text: "Parents of struggling adult children need their own support — a therapist, a small group, Tough Love or Al-Anon (if substance use is involved), or a trusted friend who can hold the full complexity of what you are living. You are not betraying your child by talking to someone."
  },
  {
    icon: "✝️",
    title: "Pray Without Controlling",
    text: "The most powerful thing you can do for an adult child is intercede for them — genuinely and persistently. Prayer is not magic, but it reorients your heart from anxious control to trusting God with the person you love most. It also prevents you from doing for your child what only God can do."
  }
];

const scriptures = [
  { verse: "Luke 15:20", text: "But while he was still a long way off, his father saw him and felt compassion, and ran and embraced him and kissed him." },
  { verse: "Proverbs 19:19", text: "A man of great wrath will pay the penalty; for if you deliver him, you will only have to do it again." },
  { verse: "Galatians 6:2-5", text: "Bear one another's burdens, and so fulfill the law of Christ... For each will have to bear his own load." },
  { verse: "Joshua 24:15", text: "But as for me and my house, we will serve the Lord." },
  { verse: "Psalm 127:3", text: "Behold, children are a heritage from the Lord, the fruit of the womb a reward." },
  { verse: "Proverbs 22:6", text: "Train up a child in the way he should go; even when he is old he will not depart from it." }
];

type AcEntry = { id: string; date: string; challenge: string; boundary: string; prayer: string };

export default function AdultChildReturningHomePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<AcEntry[]>([]);
  const [challenge, setChallenge] = useState("");
  const [boundary, setBoundary] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_adultchildreturnhome_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!challenge.trim()) return;
    const entry: AcEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), challenge, boundary, prayer };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_adultchildreturnhome_entries", JSON.stringify(updated));
    setChallenge(""); setBoundary(""); setPrayer("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_adultchildreturnhome_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🏠</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>When an Adult Child Returns Home</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For parents navigating the complexity of a grown child back under their roof — learning to hold love and limits together, release control, and trust God with someone you cannot stop loving.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Support:</strong> 988 Lifeline (call/text 988) &bull; Al-Anon: al-anon.org &bull; Tough Love: toughlove.org &bull; NAMI Family: nami.org &bull; Crisis Text: 741741
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`,
              background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED,
              cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize"
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ fontSize: "1rem", fontWeight: "bold", color: TEXT }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", margin: "0 0 0.75rem" }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.8rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem", color: TEXT }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.85rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: TEXT }}>Parent Reflection Journal</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What is the hardest challenge right now?</label>
                  <textarea value={challenge} onChange={e => setChallenge(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What boundary do I need to hold or clarify?</label>
                  <textarea value={boundary} onChange={e => setBoundary(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What am I releasing to God today?</label>
                  <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold", alignSelf: "flex-start" }}>
                  {saved ? "Saved" : "Save Entry"}
                </button>
              </div>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.5rem" }}>{e.date}</div>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "1rem" }}>×</button>
                </div>
                {e.challenge && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.25rem" }}><strong>Challenge:</strong> {e.challenge}</p>}
                {e.boundary && <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.25rem" }}><strong>Boundary:</strong> {e.boundary}</p>}
                {e.prayer && <p style={{ color: GREEN, fontSize: "0.85rem", margin: 0 }}><strong>Releasing:</strong> {e.prayer}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Boundaries with Adult Children</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>John Townsend on holding love and limits together when an adult child returns home</p>
              <VideoEmbed videoId="G5gLrHClpKQ" title="Boundaries with Adult Children" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>When to Help and When to Step Back</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Paul David Tripp on releasing outcomes and trusting God with adult children</p>
              <VideoEmbed videoId="eBl7gT7gQ6g" title="When to Help and When to Step Back" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>The Prodigal Son Reread</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>A theological look at the father in the parable and what wise love looks like</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="The Prodigal Son Reread" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Enabling vs. Supporting</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>How to distinguish loving support from harmful enabling in family systems</p>
              <VideoEmbed videoId="4Eg_di-O8nM" title="Enabling vs. Supporting" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
