"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "principles" | "books" | "ages" | "resources";

const PRINCIPLES = [
  { title: "You are discipling, not just parenting", color: GREEN, scripture: "Deuteronomy 6:4-9; Ephesians 6:4", content: "The Shema (Deuteronomy 6) commands parents to impress God's commands on children — when you sit, walk, lie down, get up. Parenting in Scripture is explicitly discipleship: passing faith, character, and the knowledge of God to the next generation. The question is not whether you are forming your children but what you are forming them toward." },
  { title: "The heart is the target", color: PURPLE, scripture: "Proverbs 4:23; Luke 6:45", content: "Behavior modification without heart transformation produces Pharisees. The goal is not a child who obeys in your presence but a child whose heart has been won to God. Tedd Tripp's Shepherding a Child's Heart makes this the organizing principle: get beneath the behavior to the heart motivations driving it. Address the heart and the behavior changes; address only the behavior and the heart grows harder." },
  { title: "Discipline is love, not punishment", color: "#EF4444", scripture: "Proverbs 13:24; Hebrews 12:5-11", content: "The Hebrew word for discipline (musar) encompasses instruction, correction, training, and sometimes physical pain — but always in the context of relationship and love. Hebrews 12 uses parental discipline as the analogy for how God disciplines those He loves. Discipline that is punitive (inflicting pain to satisfy parental anger) is different from discipline that is formative (correcting behavior to shape character)." },
  { title: "Model what you want to produce", color: "#3B82F6", scripture: "1 Corinthians 11:1; Deuteronomy 6:6", content: "Children learn more from who you are than from what you say. The Shema commands that God's words be upon your heart before you impress them on your children. A father who prays will produce children who see prayer as normal. A mother who reads Scripture models that Scripture is worth reading. You cannot give what you do not have." },
  { title: "The home is the primary church", color: "#F59E0B", scripture: "Deuteronomy 6:7; Psalm 78:4-7; Acts 16:31", content: "Before Sunday school, vacation Bible school, and youth group existed, the home was where faith was transmitted. Psalm 78 describes each generation telling the next generation about God's deeds. The household salvation of Cornelius, Lydia, the Philippian jailer, and Crispus in Acts suggests that conversion flows most naturally through family networks. The church supports what should happen at home, not the other way around." },
  { title: "Grace covers your failures", color: "#10B981", scripture: "Romans 8:1; 1 John 1:9; Psalm 103:13", content: "Every parent will fail. The question is not whether you will fail your children but how you will respond when you do. Parents who model repentance, confession, and receiving forgiveness give their children the most important theological education possible: the gospel actually works in real life, in this house, with me." },
  { title: "Technology is a parenting crisis in disguise", color: "#6366F1", scripture: "Psalm 101:3; Matthew 6:22-23; Proverbs 4:25", content: "A smartphone is a portal to the entire internet in a child's pocket. The research on smartphone use and adolescent mental health is now overwhelming: high use correlates with anxiety, depression, loneliness, and compromised cognitive development. Jonathan Haidt's The Anxious Generation synthesizes this research. Christian parents need a theology of technology that begins with the question of what forms the heart, not just what is convenient." },
];

const BOOKS_DATA = [
  { title: "Shepherding a Child's Heart", author: "Tedd Tripp", color: GREEN, ages: "All ages", description: "The most influential Reformed parenting book of the past 30 years. Tripp's central argument: all behavior flows from the heart, and parental discipline must address the heart rather than merely the behavior. Addresses the nature of children, the goals of parenting, and the specific communication and correction skills parents need.", verdict: "Essential — the theological foundation for Christian parenting" },
  { title: "Age of Opportunity", author: "Paul David Tripp", color: PURPLE, ages: "Teens (13-18)", description: "Paul Tripp argues that the teen years are not a crisis to survive but the greatest parenting opportunity of all — precisely because teens are forming their identities and worldviews. Parents who disengage during adolescence miss the window when the most important formation happens.", verdict: "Essential for parents of teenagers — reframes adolescence as opportunity" },
  { title: "The Tech-Wise Family", author: "Andy Crouch", color: "#3B82F6", ages: "All ages", description: "Crouch provides both a theology of technology and practical household policies — 10 commitments families can make to ensure technology serves human flourishing rather than undermining it. Not a Luddite book but a wisdom book for navigating the digital age.", verdict: "Required reading for any family with screens" },
  { title: "Give Them Grace", author: "Elyse Fitzpatrick & Jessica Thompson", color: "#EF4444", ages: "All ages", description: "Pushback against performance-based Christian parenting. Fitzpatrick argues that most Christian parenting inadvertently teaches children to earn love through behavior rather than resting in grace. The book applies justification by faith to family dynamics.", verdict: "Important corrective to legalistic parenting tendencies" },
  { title: "The Anxious Generation", author: "Jonathan Haidt", color: "#F59E0B", ages: "Parents of any age children", description: "Not a Christian book, but the most important parenting book of the decade. Haidt synthesizes the research on smartphones, social media, and the mental health crisis among adolescents. His four norms — no smartphones before high school, no social media before 16, phone-free schools, more unsupervised outdoor play — are gaining widespread adoption.", verdict: "Essential — every Christian parent should read this immediately" },
  { title: "Raising Kids for True Greatness", author: "Tim Kimmel", color: "#10B981", ages: "All ages", description: "Kimmel argues against the success-obsessed parenting culture — sports trophies, grades, college admissions — in favor of character, compassion, and calling. True greatness in a child is not achievement but a great heart for God and others.", verdict: "Excellent antidote to achievement-driven parenting" },
  { title: "Parenting: 14 Gospel Principles", author: "Paul David Tripp", color: PURPLE, ages: "All ages", description: "Tripp's most comprehensive treatment of parenting — 14 chapters each organized around a gospel principle applied to parenting. Covers the humility of recognizing our own sin as parents, the grace that covers our failures, and the long view of God's work in our children's lives.", verdict: "The most theologically complete single parenting book available" },
];

const AGES_DATA = [
  {
    stage: "Infant to 3",
    color: GREEN,
    summary: "Foundation of trust and attachment. Children at this stage are absorbing everything — tone, touch, safety, and whether the world is trustworthy. Your emotional regulation directly shapes their nervous system. This is not the stage for correction; it is the stage for loving presence.",
    practices: ["Establish rhythms of prayer at meals and bedtime", "Sing hymns and worship music as lullabies", "Read simple picture Bibles from 12 months", "Let them see you pray", "Physical affection establishes security"],
    books: ["God Made Me (board books); Jesus Storybook Bible adapted stories"],
  },
  {
    stage: "Ages 4-7",
    color: PURPLE,
    summary: "The window for establishing foundational stories and habits. Children at this age are concrete thinkers who learn through narrative and imitation. This is the prime catechesis window — simple Q&A, stories, songs, and rituals imprint deeply.",
    practices: ["Family devotions with simple questions", "New City Catechism (52 questions) — 1 per week", "Bedtime prayers they participate in", "Church attendance as non-negotiable", "Small acts of service and generosity"],
    books: ["Jesus Storybook Bible; The Big Picture Story Bible; Egermeier's Bible Story Book"],
  },
  {
    stage: "Ages 8-12",
    color: "#3B82F6",
    summary: "Building conviction and character. Children can now reason morally and ask real theological questions. This is the stage to engage their questions honestly rather than deflecting. Begin intentional discipleship — one-on-one conversations, shared reading, service projects.",
    practices: ["Personal Bible reading and journaling (start simple)", "Scripture memory program (Navigators TMS)", "Serve alongside parents in ministry", "Discuss news and culture from a Christian worldview", "Address questions about evolution, other religions, suffering directly"],
    books: ["The Wingfeather Saga (Andrew Peterson); Mere Christianity (13+); The Chronicles of Narnia"],
  },
  {
    stage: "Ages 13-18",
    color: "#F59E0B",
    summary: "The identity formation crucible. Adolescents are asking: Who am I? What do I believe? Where do I belong? Parents who stay in conversation — who are safe, interested, and non-reactive — have enormous influence even when teens seem to resist it. This is the stage to hold convictions loosely enough to let them ask hard questions.",
    practices: ["One-on-one time prioritized over group family time", "Apologetics engagement — read Keller, Lewis together", "Limit social media (see The Anxious Generation)", "Let natural consequences happen without rescuing", "Mission trips and service exposure to the global church"],
    books: ["The Reason for God (Keller); Mere Christianity (Lewis); I Don't Have Enough Faith to Be an Atheist"],
  },
];

const RESOURCES_DATA = [
  { name: "Focus on the Family", desc: "The largest evangelical family ministry — resources, counseling referrals, broadcast, and advocacy. Particularly strong on marriage and parenting young children. focusonthefamily.com", color: GREEN },
  { name: "FamilyLife", desc: "Dennis Rainey's ministry — Weekend to Remember conferences, Homebuilders small group studies, Art of Marriage curriculum. familylife.com", color: PURPLE },
  { name: "Rooted Ministry", desc: "The best resource network for Christian parents navigating youth ministry in partnership with the home. rootedministry.com", color: "#3B82F6" },
  { name: "Culture Translator (Axis)", desc: "Weekly email explaining the cultural influences on teenagers — music, social media trends, language, worldview. Essential for parents who want to understand what their teens are consuming. axis.org", color: "#F59E0B" },
  { name: "Wait Until 8th", desc: "A parent-led pledge to delay smartphones until 8th grade. Thousands of families coordinating to create community norms. waituntil8th.org", color: "#EF4444" },
  { name: "The Gospel Coalition (Parenting)", desc: "TGC's parenting articles, book recommendations, and resources from a Reformed perspective. thegospelcoalition.org/topics/parenting", color: "#10B981" },
];

export default function ParentingGuidePage() {
  const [tab, setTab] = useState<Tab>("principles");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState<string | null>(null);

  const book = BOOKS_DATA.find(b => b.title === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>👨‍👩‍👧‍👦</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Parenting Guide</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            Biblical principles, the best books, stage-by-stage guidance, and real resources for raising children in the faith. Parenting is discipleship — and the stakes are eternal.
          </p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 28, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["principles", "books", "ages", "resources"] as Tab[]).map(t => (
            <button key={t} onClick={() => { setTab(t); setSelected(null); }}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", textTransform: "capitalize" }}>
              {t === "principles" ? "Principles" : t === "books" ? "Best Books" : t === "ages" ? "By Age/Stage" : "Resources"}
            </button>
          ))}
        </div>

        {tab === "principles" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {PRINCIPLES.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${expanded[p.title] ? p.color + "40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button onClick={() => setExpanded(e => ({ ...e, [p.title]: !e[p.title] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ color: p.color, fontWeight: 800, fontSize: 15, marginBottom: 3 }}>{p.title}</div>
                    <div style={{ color: MUTED, fontSize: 11 }}>{p.scripture}</div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{expanded[p.title] ? "−" : "+"}</span>
                </button>
                {expanded[p.title] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 0" }}>{p.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "books" && (
          <div style={{ display: "grid", gridTemplateColumns: book ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {BOOKS_DATA.map((b, i) => (
                <button key={i} onClick={() => setSelected(selected === b.title ? null : b.title)}
                  style={{ background: selected === b.title ? `${b.color}12` : CARD, border: `1px solid ${selected === b.title ? b.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", marginBottom: 4 }}>
                    <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{b.title}</span>
                    <span style={{ background: `${b.color}15`, color: b.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{b.ages}</span>
                  </div>
                  <div style={{ color: MUTED, fontSize: 12 }}>{b.author}</div>
                </button>
              ))}
            </div>
            {book && (
              <div style={{ background: CARD, border: `1px solid ${book.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                <h2 style={{ color: book.color, fontWeight: 900, fontSize: 17, margin: "0 0 4px" }}>{book.title}</h2>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{book.author} · {book.ages}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{book.description}</p>
                <div style={{ background: `${book.color}10`, border: `1px solid ${book.color}25`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: book.color, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>VERDICT</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{book.verdict}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "ages" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {AGES_DATA.map((a, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${a.color}30`, borderRadius: 14, padding: 24 }}>
                <div style={{ color: a.color, fontWeight: 900, fontSize: 18, marginBottom: 8 }}>{a.stage}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 14 }}>{a.summary}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div style={{ background: `${a.color}08`, border: `1px solid ${a.color}15`, borderRadius: 10, padding: 14 }}>
                    <div style={{ color: a.color, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>PRACTICAL PRACTICES</div>
                    {a.practices.map((p, j) => (
                      <div key={j} style={{ color: TEXT, fontSize: 12, marginBottom: 6 }}>· {p}</div>
                    ))}
                  </div>
                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 10, padding: 14 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>READING FOR THIS STAGE</div>
                    {a.books.map((b, j) => (
                      <div key={j} style={{ color: TEXT, fontSize: 12, marginBottom: 6 }}>· {b}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "resources" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {RESOURCES_DATA.map((r, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${r.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: r.color, fontWeight: 800, fontSize: 15, marginBottom: 8 }}>{r.name}</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
