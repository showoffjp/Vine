"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Jesus Identified with the Imprisoned",
    verse: "Matthew 25:36",
    text: "\"I was in prison and you came to visit me.\" The identification of Jesus with the imprisoned is one of the most explicit and uncomfortable claims in the Gospels. Not that prisoners are innocent, but that the imprisoned carry the image of God — and that how we treat them is how we treat Christ. The church that has abandoned the imprisoned and their families has not simply neglected a social need; it has failed a theological test. Prison ministry is not an optional add-on to Christian mission — it is in the text.",
  },
  {
    title: "The Mass Incarceration System Is a Justice Problem",
    verse: "Amos 5:24",
    text: "\"But let justice roll on like a river, righteousness like a never-failing stream.\" The United States incarcerates more people per capita than any country on earth — over two million people, disproportionately Black and Brown, disproportionately poor, disproportionately mentally ill. The prophetic tradition in Scripture is relentless in its critique of systems that grind the poor and the vulnerable. Christians who take the prophets seriously cannot simply treat incarceration as a neutral backdrop. The system itself is a subject of moral scrutiny.",
  },
  {
    title: "Families of the Incarcerated Are Also Imprisoned",
    verse: "1 Corinthians 12:26",
    text: "\"If one part suffers, every part suffers with it.\" When a family member is incarcerated, the family does not escape the sentence — they serve it differently. Spouses navigate single parenthood, shame, and financial devastation. Children experience documented increases in depression, anxiety, and academic failure. Parents carry the compounding grief of watching a child in a system they cannot enter or help. The church that visits the prisoner and ignores the prisoner's family has responded to only part of the crisis.",
  },
  {
    title: "Guilt and Shame Are Different",
    verse: "Psalm 51:10",
    text: "\"Create in me a pure heart, O God, and renew a steadfast spirit within me.\" Guilt says: I did something wrong. Shame says: I am wrong. The person incarcerated for a genuine crime has real moral culpability that must be honestly faced — guilt, confession, and accountability are real. But the shame that attaches to the incarcerated person as a permanent identity marker — that they are irredeemably bad — is not from God. The gospel refuses to let a person's worst act define them permanently.",
  },
  {
    title: "Reentry Is a Second Chance That the Church Can Enable or Obstruct",
    verse: "Luke 4:18",
    text: "\"He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free.\" The structural barriers to reentry — housing denial, employment discrimination, voting rights removal, ongoing debt from fines and fees — create a second sentence that extends the punishment indefinitely. The church that claims to believe in transformation has particular responsibility to create the conditions in which transformation is possible: employment, housing, community, accountability.",
  },
];

const voices = [
  {
    id: 1,
    name: "Bryan Stevenson",
    role: "Attorney, Author of Just Mercy; Founder, Equal Justice Initiative",
    quote: "Each of us is more than the worst thing we've ever done. The question is not whether people who do terrible things are terrible people — it is whether we believe in redemption or not.",
    bio: "Stevenson has spent decades representing condemned prisoners and fighting mass incarceration, bringing together legal advocacy, moral passion, and a deep Christian understanding of human dignity and redemption.",
  },
  {
    id: 2,
    name: "Vivian Nixon",
    role: "Executive Director, College and Community Fellowship; formerly incarcerated",
    quote: "When I was incarcerated, my family was incarcerated too. My mother aged in waiting. My children grew up without me. Mass incarceration is a sentence that entire families serve.",
    bio: "Nixon's leadership in supporting women leaving incarceration and advocating for criminal justice reform is grounded in her own experience of the system and its long reach into the lives of families.",
  },
  {
    id: 3,
    name: "Joyce Chaparro",
    role: "Mothers of Incarcerated Sons, Founder",
    quote: "Nobody talks about the mothers. Nobody asks how we are doing. Our children are in prison but we are prisoners too — of grief, of shame, of watching and waiting.",
    bio: "Chaparro founded Mothers of Incarcerated Sons after her own son's incarceration, creating one of the few support structures specifically for parents navigating the overwhelming experience of a child in the prison system.",
  },
  {
    id: 4,
    name: "Chuck Colson",
    role: "Founder, Prison Fellowship; Author, Born Again",
    quote: "I found God in prison. Not because prison is good, but because God goes wherever there is brokenness — and prison is full of brokenness.",
    bio: "Colson's transformation from Nixon's 'hatchet man' to convicted felon to founder of the world's largest Christian prison ministry is one of the most dramatic conversion narratives in modern Christianity, grounding Prison Fellowship in lived experience.",
  },
];

const practices = [
  {
    icon: "📞",
    title: "Maintain Contact — It Is Life-Sustaining",
    text: "Research is clear: incarcerated people who maintain family contact have significantly better outcomes during incarceration and dramatically better reentry outcomes. Calls, letters, and visits are not just emotional support — they are evidence-based interventions. The expense of prison phone calls is exploitative; many advocacy organizations work to lower these costs. Find a way to keep the communication alive.",
  },
  {
    icon: "🤝",
    title: "Connect with Prison Fellowship or Local Prison Ministry",
    text: "Prison Fellowship (prisonfellowship.org) is the largest Christian prison ministry, with programs inside facilities and reentry support. Many local churches also run prison visitation programs. If your family member is inside, connecting with on-the-ground ministry can provide community, spiritual support, and mentorship that you cannot provide from outside.",
  },
  {
    icon: "🏡",
    title: "Support the Family Members on the Outside",
    text: "Children of incarcerated parents need specific support: mentorship, school support, honest conversations about what is happening and why, and community that does not shame them for their parent's incarceration. Organizations like Friends Outside and Amachi (faith-based mentoring for children of prisoners) provide specific support structures. The family left behind is often invisible — help make them visible.",
  },
  {
    icon: "⚖️",
    title: "Learn the Reentry Landscape Before Release",
    text: "Reentry is the most dangerous and critical period of incarceration. Begin preparing at least six months before release: research housing options (many landlords discriminate against formerly incarcerated people), employment (Ban the Box laws vary by state), benefit restoration, and community resources. Many reentry organizations can help develop a specific plan. Preparation dramatically reduces recidivism.",
  },
  {
    icon: "🧠",
    title: "Get Therapy for the Family Trauma",
    text: "Having a family member incarcerated is a traumatic experience for the family. The shame, the grief, the stigma, the financial devastation — these are not simply inconveniences to be managed. Family members need their own therapeutic support, independent of the incarcerated person. Many seek therapy only when they have 'recovered' — in reality, support is most needed during the incarceration itself.",
  },
  {
    icon: "⛪",
    title: "Find a Church That Will Not Shame You",
    text: "Many families of incarcerated people hide the situation from their church out of well-founded fear of judgment. If your church is a safe place to be honest, use it — the community of faith is one of the most powerful resources for sustained resilience. If it is not safe, seek a congregation where you can be known without shame. No family should be navigating this in spiritual isolation.",
  },
];

const scriptures = [
  { verse: "Matthew 25:36", text: "\"I was in prison and you came to visit me.\"" },
  { verse: "Hebrews 13:3", text: "\"Continue to remember those in prison as if you were together with them in prison, and those who are mistreated as if you yourselves were suffering.\"" },
  { verse: "Psalm 146:7", text: "\"He upholds the cause of the oppressed and gives food to the hungry. The LORD sets prisoners free.\"" },
  { verse: "Isaiah 61:1", text: "\"The Spirit of the Sovereign LORD is on me... to proclaim freedom for the captives and release from darkness for the prisoners.\"" },
  { verse: "Romans 8:1", text: "\"Therefore, there is now no condemnation for those who are in Christ Jesus.\"" },
  { verse: "Lamentations 3:31–32", text: "\"For no one is cast off by the Lord forever. Though he brings grief, he will show compassion, so great is his unfailing love.\"" },
];

type PrisonEntry = {
  id: string;
  date: string;
  carrying: string;
  honest: string;
  prayer: string;
};

export default function PrisonIncarcerationFamilyChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PrisonEntry[]>([]);
  const [carrying, setCarrying] = useState("");
  const [honest, setHonest] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_prisonincarcerationfamily_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!carrying.trim()) return;
    const entry: PrisonEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      carrying,
      honest,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_prisonincarcerationfamily_entries", JSON.stringify(updated));
    setCarrying(""); setHonest(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_prisonincarcerationfamily_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🔓</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>
            Prison, Incarceration & Family: Christian Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For those who are incarcerated, for families whose loved one is inside, and for churches learning to take Matthew 25 seriously — pastoral care that refuses shame, prophetic engagement with a broken system, and practical support for the long journey through and beyond incarceration.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Support: <strong>988 Suicide & Crisis Lifeline</strong> | <strong>Prison Fellowship:</strong> prisonfellowship.org | <strong>Equal Justice Initiative:</strong> eji.org
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer",
              background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED,
              fontWeight: tab === t ? "bold" : "normal", fontSize: "0.875rem",
              textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{item.verse}</div>
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
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", color: "#fff", flexShrink: 0 }}>
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: TEXT }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.role}</div>
                  </div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", margin: "0 0 0.75rem" }}>
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
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${GREEN}` }}>
                <div style={{ color: GREEN, fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, marginBottom: "1rem", fontWeight: "bold" }}>Private Journal</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What are you carrying right now — in yourself, or for someone you love who is inside?</label>
                <textarea value={carrying} onChange={e => setCarrying(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>Where are you honestly with God — with the situation, the system, the waiting?</label>
                <textarea value={honest} onChange={e => setHonest(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer — for freedom, for justice, for endurance, for the person you love:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.carrying && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Carrying:</strong> {e.carrying}</p>}
                {e.honest && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Honest:</strong> {e.honest}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="c2tOp7OxyQ8" title="Bryan Stevenson — Just Mercy: On Redemption, Mass Incarceration, and Christian Hope" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Bryan Stevenson: Just Mercy — Redemption, Mass Incarceration, and Christian Hope</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Attorney and author Bryan Stevenson on his work representing condemned prisoners and what Christian hope looks like inside a broken system</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="fS2PFjRMnOo" title="Prison Fellowship — Chuck Colson's Legacy and the Ministry Inside" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Prison Fellowship: Chuck Colson&apos;s Legacy and Ministry Inside Prisons</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>The story of Prison Fellowship — from Colson&apos;s own conversion in prison to the world&apos;s largest Christian prison ministry serving over 380,000 incarcerated individuals</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="Ko1A2jH7vCU" title="Children of Incarcerated Parents — The Hidden Sentence" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Children of Incarcerated Parents: The Hidden Sentence</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>How parental incarceration affects children — and what faith communities can do to support families serving time on the outside</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="k8U4DtBFpXA" title="Reentry After Incarceration — Barriers, Resources, and Christian Support" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Reentry After Incarceration: Barriers, Resources, and Christian Support</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Practical guide to the structural barriers facing formerly incarcerated people and how churches can make a concrete difference in successful reentry</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
