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
    title: "The Church Must Neither Minimize Nor Weaponize Divorce",
    verse: "Malachi 2:16",
    text: "\"The man who hates and divorces his wife... does violence to the one he should protect.\" The text is frequently rendered \"God hates divorce\" — but the Hebrew is better read as God hating the treachery and violence that divorce involves. Jesus's own teaching on divorce (Matthew 19) permits it in cases of sexual immorality and does not condemn those who have experienced divorce. The church that adds shame to an already devastating loss has mistaken condemnation for pastoral care.",
  },
  {
    title: "The Divorced Person Is Not a Second-Class Christian",
    verse: "Romans 8:1",
    text: "\"Therefore, there is now no condemnation for those who are in Christ Jesus.\" The divorced Christian frequently enters the church expecting judgment — and too often finds it. But condemnation is what the gospel removes. The divorced person is not in a permanently compromised spiritual status. They are a full member of the community of grace.",
  },
  {
    title: "Children Deserve Honesty Without Being Made Weapons",
    verse: "Ephesians 6:4",
    text: "\"Fathers, do not exasperate your children; instead, bring them up in the training and instruction of the Lord.\" The word for exasperate — parorgizo — means to provoke to wrath. Using children as messengers, exposing them to adult conflict, or weaponizing them against a former spouse provokes this kind of wrath in children. The instruction to children in the surrounding verses (obey your parents) presupposes parents who are not actively harming them.",
  },
  {
    title: "Blended Families Require Exceptional Patience",
    verse: "1 Corinthians 13:4–5",
    text: "\"Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.\" The qualities Paul describes are exactly what blended family life demands in extraordinary measure — patience with children who did not choose this family, kindness toward a former spouse who may be hostile, humility about the step-parent role, not keeping score of who is doing more.",
  },
  {
    title: "God Redeems and Rebuilds What Was Broken",
    verse: "Joel 2:25",
    text: "\"I will repay you for the years the locusts have eaten — the great locust and the locust swarm — the other locusts and the locust horde — my great army that I sent among you.\" The promise is not that divorce never happens or that its consequences are not real. It is that God redeems — that the years that felt destroyed can be restored in ways that are not predictable in advance. Many blended families have become something neither party could have imagined in the midst of the devastation.",
  },
];

const voices = [
  {
    id: 1,
    name: "Ron Deal",
    role: "Author, The Smart Stepfamily; FamilyLife Blended Director",
    quote: "Stepfamilies that try to become instant families — skipping the bonding process and assuming love — doom themselves. Building a blended family takes years, not months.",
    bio: "Deal is the leading expert on blended family dynamics in the Christian world and has developed research-based resources for stepfamilies that resist the mythologies of the \"Brady Bunch\" blended family.",
  },
  {
    id: 2,
    name: "Dr. Elizabeth Marquardt",
    role: "Author, Between Two Worlds: The Inner Lives of Children of Divorce",
    quote: "Children of divorce do not simply recover and move on. They carry a divided self — living between two worlds — for the rest of their lives. The church needs to know this.",
    bio: "Marquardt's research on the long-term experience of children of divorce gave clinical and cultural grounding to the largely unacknowledged harm that divorce inflicts on children's interior lives.",
  },
  {
    id: 3,
    name: "Emerson Eggerichs",
    role: "Author, Love and Respect",
    quote: "The former marriage is over. But the parenting relationship is not. Learning to parent cooperatively with an ex-spouse is one of the most spiritually challenging tasks in human life.",
    bio: "Eggerichs has written and spoken about the ongoing relational demands of co-parenting after divorce, including the spiritual discipline required to treat a former spouse with basic dignity.",
  },
  {
    id: 4,
    name: "Susan Merrill",
    role: "Blended Family Coach, iMOM.com",
    quote: "The step-parent who tries to replace the biological parent will fail. The step-parent who tries to be a trusted adult in the child's life may succeed.",
    bio: "Merrill's practical coaching for blended families has helped step-parents understand the realistic scope of their role and how to build genuine relationship with stepchildren without competing with biological parents.",
  },
];

const practices = [
  {
    icon: "⏳",
    title: "Give the Blending Process Years, Not Months",
    text: "Research on blended family development shows that meaningful family cohesion typically takes 4–7 years to develop. Expecting it in months creates impossible pressure. Set realistic timelines and celebrate small progress rather than demanding instant family feeling.",
  },
  {
    icon: "🤝",
    title: "Develop a Cooperative Co-Parenting Relationship",
    text: "Co-parenting with a former spouse requires extraordinary emotional discipline. Parallel parenting (minimal contact, child-focused only) may be necessary if high conflict exists. Consider a co-parenting coordinator or mediator if communication is consistently difficult.",
  },
  {
    icon: "👶",
    title: "Put the Children's Needs Before Adult Preferences",
    text: "Children's adjustment is the primary variable in blended family health. Their loyalty conflicts, grief about the original family, and ambivalence about the step-parent are legitimate and must not be shamed. The adults' feelings about each other are never the children's responsibility to manage.",
  },
  {
    icon: "📚",
    title: "Get Research-Based Blended Family Education",
    text: "Read The Smart Stepfamily by Ron Deal, or take the FamilyLife Blended marriage course. Most blended family difficulties stem from unrealistic expectations — education dramatically improves outcomes by providing accurate models.",
  },
  {
    icon: "⛪",
    title: "Find a Church That Sees Blended Families",
    text: "Many churches do not have programming or theological frameworks for blended families. Seek communities with explicit blended family support — or advocate for your existing church to create it. FamilyLife Blended provides church curriculum specifically designed for this.",
  },
  {
    icon: "🧠",
    title: "Get Family Therapy with a Blended Family Specialist",
    text: "General family therapists frequently misapply nuclear family frameworks to blended families — with counterproductive results. Seek a therapist with specific blended family experience who understands the developmental trajectory and realistic expectations of stepfamily formation.",
  },
];

const scriptures = [
  { verse: "Isaiah 61:3", text: "\"To bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning, and a garment of praise instead of a spirit of despair.\"" },
  { verse: "Psalm 68:5–6", text: "\"A father to the fatherless, a defender of widows, is God in his holy dwelling. God sets the lonely in families.\"" },
  { verse: "Lamentations 3:22–23", text: "\"Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.\"" },
  { verse: "Romans 5:3–5", text: "\"We also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope. And hope does not put us to shame.\"" },
  { verse: "Colossians 3:13", text: "\"Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.\"" },
  { verse: "Philippians 4:13", text: "\"I can do all this through him who gives me strength.\"" },
];

type BlendedEntry = {
  id: string;
  date: string;
  hard: string;
  grace: string;
  prayer: string;
};

export default function DivorceBlendedFamilyChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<BlendedEntry[]>([]);
  const [hard, setHard] = useState("");
  const [grace, setGrace] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_divorceblendedamilychristian_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!hard.trim()) return;
    const entry: BlendedEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      hard,
      grace,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_divorceblendedamilychristian_entries", JSON.stringify(updated));
    setHard(""); setGrace(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_divorceblendedamilychristian_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🏠</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>
            Divorce, Blended Families & Christian Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For those navigating divorce or building a blended family — pastoral care that neither minimizes the loss nor adds shame, research-based guidance for stepfamily development, and honest support for the complex, long journey.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Support: <strong>988 Suicide & Crisis Lifeline</strong> | <strong>FamilyLife Blended:</strong> familylifeblended.com | <strong>Ron Deal Resources:</strong> smartstepfamilies.com
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
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What has been hardest about the blended family journey this week?</label>
                <textarea value={hard} onChange={e => setHard(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A moment of grace, progress, or connection worth naming:</label>
                <textarea value={grace} onChange={e => setGrace(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer for your family in all its complexity:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.hard && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Hard:</strong> {e.hard}</p>}
                {e.grace && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Grace:</strong> {e.grace}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="vt5fpE0bzSY" title="The Smart Stepfamily — Ron Deal on Blended Family Reality" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>The Smart Stepfamily: What Research Says About Blended Families</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Ron Deal on the research-based realities of blended family development and why most stepfamilies struggle with wrong expectations</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="KBs_6aR7RA8" title="Children of Divorce — What the Research Shows About Long-Term Impact" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Children of Divorce: What the Research Actually Shows</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Evidence-based overview of how divorce affects children — short-term and long-term — and what protective factors help</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="9TjdJtmvuZI" title="Divorced and Christian — Shame, Grace, and the Path Forward" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Divorced and Christian: Shame, Grace, and the Path Forward</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Pastoral and theological reflection on divorce, the church's frequent failures in response, and what faithful community looks like for the divorced</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="nXgJsLNAzGE" title="Co-Parenting After Divorce — The Children's Needs First" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Co-Parenting After Divorce: Putting the Children&apos;s Needs First</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Practical guidance on cooperative co-parenting and minimizing children's exposure to parental conflict after divorce</p>
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
