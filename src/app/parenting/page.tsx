"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Stage = { age: string; label: string; emoji: string; color: string; verse: string; verseRef: string; principles: string[]; pitfalls: string[]; practices: string[]; conversation: string; };
type Rhythm = { id: string; name: string; icon: string; frequency: string; description: string; howTo: string[]; verse: string; verseRef: string; };
type Voice = { id: string; name: string; era: string; context: string; bio: string; quote: string; contribution: string; };
type Video = { id: string; preacher: string; title: string; description: string; videoId: string; };
type Tab = "stages" | "rhythms" | "voices" | "videos";

const stages: Stage[] = [
  {
    age: "0-5",
    label: "Little Ones",
    emoji: "👶",
    color: "#EC4899",
    verse: "Train up a child in the way he should go; even when he is old he will not depart from it.",
    verseRef: "Proverbs 22:6",
    principles: [
      "Atmosphere matters more than curriculum. Young children absorb the spiritual temperature of the home.",
      "God-talk should be natural, woven into everyday moments rather than confined to special times.",
      "Physical touch and presence communicate love in the same way God's Spirit communicates with us."
    ],
    pitfalls: [
      "Over-moralizing: don't turn every moment into a lesson",
      "Using God primarily as behavior enforcement ('God doesn't like that')",
      "Skipping Bible stories because they're 'too violent' — children can handle narrative honestly told"
    ],
    practices: [
      "Nightly prayer ritual: thank God for 3 specific things that happened today",
      "Read one Bible story per week, slowly and with questions",
      "Show your child the church as people — introduce them to elderly members, international friends",
      "Sing hymns and worship songs at home naturally (bath time, car rides)"
    ],
    conversation: "At this age, conversations are primarily about wonder: 'Look at that butterfly — who made it?' 'How big do you think God is?' Plant seeds of awe."
  },
  {
    age: "6-12",
    label: "Elementary",
    emoji: "📖",
    color: GREEN,
    verse: "These commandments that I give you today are to be on your hearts. Impress them on your children.",
    verseRef: "Deuteronomy 6:6-7",
    principles: [
      "This is the prime window for character formation — habits of prayer, generosity, and service begun now tend to stick.",
      "Children at this age can handle honest answers to hard questions — and will respect you for not dismissing them.",
      "Their faith is beginning to become their own, not just borrowed from you."
    ],
    pitfalls: [
      "Overloading kids with church programs as a substitute for parental discipleship",
      "Avoiding questions like 'Why does God let bad things happen?' — these deserve honest engagement",
      "Legalism: turning faith into a rule system rather than a relationship"
    ],
    practices: [
      "Simple family devotional 3x per week — 10 minutes max at this age",
      "Let them see you reading your Bible personally, not just performing faith",
      "Serve together: food bank, visiting a grandparent, prayer for a sick neighbor",
      "Read a chapter of a kids' devotional (Jesus Storybook Bible, Long Story Short) together"
    ],
    conversation: "'I don't know' is a valid and faith-building answer. 'Let's find out together' is even better. Modeling intellectual humility before God teaches more than having all the answers."
  },
  {
    age: "13-17",
    label: "Teenagers",
    emoji: "🧠",
    color: PURPLE,
    verse: "Don't let anyone look down on you because you are young, but set an example for the believers.",
    verseRef: "1 Timothy 4:12",
    principles: [
      "The relationship is the prerequisite for influence. If they won't talk to you, nothing else works.",
      "Teenagers are looking for faith that makes sense, not just faith that is performed. They smell hypocrisy instantly.",
      "Their doubts are not a sign of failure — they're a sign of intellectual development. Engage the doubts."
    ],
    pitfalls: [
      "Parenting primarily through restriction rather than vision",
      "Making faith about behavior modification instead of encounter with God",
      "Avoiding their real questions about sex, death, suffering, and doubt"
    ],
    practices: [
      "Weekly one-on-one time (coffee, drive, walk) — no agenda, just presence",
      "Read an apologetics book together (Mere Christianity, Case for Christ for teens)",
      "Give them ownership: let them choose where to serve, what to read",
      "Pray for them specifically and let them hear it — be concrete about what you're asking God"
    ],
    conversation: "When they doubt: 'I'm glad you're asking that — it means you're thinking. What made you start questioning it?' Curiosity, not defensiveness, keeps the door open."
  },
  {
    age: "18+",
    label: "Adult Children",
    emoji: "🕊️",
    color: "#10B981",
    verse: "And he arose and came to his father. But when he was yet a great way off, his father saw him, and had compassion, and ran, and fell on his neck, and kissed him.",
    verseRef: "Luke 15:20",
    principles: [
      "Your role has shifted from authority to influence. The relationship is now peer-to-peer.",
      "Pray more, lecture less. The Holy Spirit's job is conviction — yours is love.",
      "Be the safest, warmest place they can return to, especially if they've walked away from faith."
    ],
    pitfalls: [
      "Using every gathering as an opportunity to address their spiritual state",
      "Withdrawing love or relationship when they make choices you disagree with",
      "Comparing them to their siblings or other people's children"
    ],
    practices: [
      "Tell them specifically what you're praying for — and keep praying",
      "Invite without pressuring: 'We'd love for you to come to church on Christmas — no pressure at all'",
      "Celebrate the good in them regardless of their faith status",
      "Share your own struggles honestly — they need to know faith isn't perfect performance"
    ],
    conversation: "The prodigal father didn't chase or lecture — he watched, waited, and ran when he saw his child returning. Your love is the most powerful apologetic you have."
  }
];

const FAMILY_RHYTHMS: Rhythm[] = [
  {
    id: "devotional",
    name: "Family Devotional",
    icon: "📖",
    frequency: "Daily/Weekly",
    description: "Reading Scripture together around the table, with age-appropriate questions that invite children into the story rather than lecturing them about it.",
    howTo: [
      "Choose a short passage — even 3-5 verses is sufficient for young children",
      "Read it aloud together; let older children take turns reading",
      "Ask open questions: 'What does this tell us about God?' 'What would you do in this situation?'",
      "Use a resource like Jesus Storybook Bible (ages 3-10) or Long Story Short (ages 6-14)",
      "Keep it to 10-15 minutes — brevity and consistency beat length and rarity",
      "Close with a simple prayer tied to what you read"
    ],
    verse: "These commandments are to be on your hearts. Impress them on your children. Talk about them when you sit at home.",
    verseRef: "Deuteronomy 6:6-7"
  },
  {
    id: "blessing",
    name: "Blessing Your Children",
    icon: "✋",
    frequency: "Daily",
    description: "A spoken blessing at bedtime rooted in the Aaronic blessing of Numbers 6:24-26 — one of the most powerful and underused practices in Christian parenting.",
    howTo: [
      "Establish a consistent bedtime moment: sit on the bed, make eye contact",
      "Speak the blessing by name: 'May the Lord bless you and keep you, [name]'",
      "Add specific words for that child: 'I see how you helped your sister today. That reflects God's kindness.'",
      "Place a hand on their head or shoulder — physical touch matters",
      "End with: 'You are loved by God and by us. You are not alone. You have a purpose.'",
      "Do this even when the day was hard — the blessing is unconditional, not earned"
    ],
    verse: "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace.",
    verseRef: "Numbers 6:24-26"
  },
  {
    id: "sabbath",
    name: "Sabbath as Family Rhythm",
    icon: "🕯️",
    frequency: "Weekly",
    description: "Keeping one day genuinely different — no screens, intentional rest, gratitude, and delight. This counter-cultural practice forms children's understanding of time and God's provision.",
    howTo: [
      "Agree on one day together as a family — Friday sunset, Saturday, or Sunday",
      "Make it a day of delight, not just restriction: special food, nature walks, board games",
      "Remove screens for the day — model the rest you're asking of them",
      "Cook a meal together as a ritual that marks the day's beginning",
      "Practice gratitude: 'What are three things we're grateful for this week?'",
      "Close the Sabbath with a simple prayer of thanksgiving and release of the coming week"
    ],
    verse: "Remember the Sabbath day by keeping it holy. Six days you shall labor and do all your work, but the seventh day is a sabbath to the Lord your God.",
    verseRef: "Exodus 20:8-10"
  },
  {
    id: "milestones",
    name: "Annual Faith Milestones",
    icon: "🎯",
    frequency: "Annual",
    description: "Marking spiritual birthdays, first Bibles, baptism anniversaries, and other faith moments with celebration. What we celebrate, we value — and children notice what we value.",
    howTo: [
      "Mark the anniversary of each child's baptism or commitment to faith as a 'spiritual birthday'",
      "Give a first Bible with a handwritten inscription at an age-appropriate moment (around age 6-8)",
      "Create a simple ceremony around confirmations, first communions, or coming-of-age milestones",
      "Tell the story of how you came to faith — let your children know their family's story",
      "Create a 'blessing box': annual letters written to each child about who they are and who you see them becoming",
      "Connect milestones to the church calendar: baptisms at Easter, confirmations at Pentecost"
    ],
    verse: "Only be careful, and watch yourselves closely so that you do not forget the things your eyes have seen. Teach them to your children and to their children after them.",
    verseRef: "Deuteronomy 4:9"
  },
  {
    id: "service",
    name: "Service Projects Together",
    icon: "🤝",
    frequency: "Monthly",
    description: "Volunteering as a family — teaching generosity not by talking about it but by doing it together. Children who serve regularly develop an identity as people who give, not just receive.",
    howTo: [
      "Choose one recurring monthly act: food pantry, neighbor help, church cleanup, elderly visits",
      "Let children lead as much as possible — they carry more ownership when they initiate",
      "Debrief in the car on the way home: 'What did you notice? How did that feel?'",
      "Connect it explicitly to Scripture: 'This is what Jesus meant when he said he came to serve'",
      "Adopt a cause together across multiple years — depth matters more than variety",
      "Let children use their own money for giving — the sacrifice makes it real"
    ],
    verse: "The Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.",
    verseRef: "Matthew 20:28"
  }
];

const VOICES_PAR: Voice[] = [
  {
    id: "baucham",
    name: "Voddie Baucham",
    era: "b. 1969",
    context: "Family Driven Faith (2007) — argues that parents, not the church's youth ministry, are God's primary vehicle for raising children in faith",
    bio: "Voddie Baucham Jr. is a preacher, author, and dean of theology at African Christian University in Zambia. His book Family Driven Faith is a direct challenge to the model of outsourcing children's spiritual formation to church programs and youth groups. Drawing on Deuteronomy 6, Baucham argues that the home is the primary seminary — and that the catastrophic loss of young people from the church is directly tied to parents abdicating this responsibility. His preaching is direct, exegetically grounded, and unapologetically countercultural. He homeschooled his own children as a practical outworking of his convictions.",
    quote: "If we are going to see a multi-generational vision of the faith, it won't happen because of a great youth program. It will happen because of parents who take seriously their God-given responsibility.",
    contribution: "Baucham's work catalyzed a significant movement of Christian parents reclaiming discipleship as a parental calling rather than a church service. His emphasis on the family altar, Scripture memorization, and deliberate theological instruction at home has shaped thousands of families toward an intentional, structured approach to passing on faith."
  },
  {
    id: "tripp-pd",
    name: "Paul David Tripp",
    era: "b. 1950",
    context: "Age of Opportunity (1997) — argues that the teen years are not to be survived but invested in as the greatest ministry opportunity parents have",
    bio: "Paul David Tripp is a pastor, author, and counselor who has written extensively on parenting, marriage, and the Christian life. His Age of Opportunity reframes adolescence entirely: instead of a difficult season to endure, Tripp argues it is a unique window of grace — a time when children are asking the deepest questions about identity, meaning, and purpose, and when parents have profound influence if they engage rather than retreat. Tripp's approach is deeply gospel-centered: the goal is not behavior management but heart transformation. He is particularly gifted at translating biblical categories into the everyday language of family conflict, disappointment, and growth.",
    quote: "Teenagers are not a problem to be solved. They are people in the middle of the most significant transition of their lives, asking the most important questions anyone can ask. That is a ministry opportunity, not a management crisis.",
    contribution: "Age of Opportunity has been formative for a generation of parents who entered the teen years expecting conflict and left them with a vision for gospel ministry to their own children. Tripp's framework of the heart as the target of discipline — rather than external behavior — has reshaped how many Christian parents understand what they are actually doing when they parent."
  },
  {
    id: "tripp-t",
    name: "Tedd Tripp",
    era: "b. 1948",
    context: "Shepherding a Child's Heart (1995) — argues that the heart, not behavior, is the true target of biblical discipline",
    bio: "Tedd Tripp is a pastor, counselor, and the father of Paul David Tripp. His Shepherding a Child's Heart is arguably the most influential Reformed evangelical parenting book of the last thirty years. Tripp's central argument is deceptively simple: behavior is always the overflow of the heart, and therefore behavior modification — even successful behavior modification — can be spiritually dangerous if it creates moral performance without addressing the underlying desires and loves. True parenting in the biblical model is shepherding: guiding children toward right loves and right worship, not merely right conduct. He draws extensively on Proverbs and engages honestly with the complexity of discipline, communication, and authority.",
    quote: "Your children's behavior is a window to the soul. If you only address what they do, you will never address what they are. Shepherd the heart, and the behavior will follow.",
    contribution: "Shepherding a Child's Heart introduced an entire generation of evangelical parents to the language of the heart as the locus of parenting. Its influence can be seen in how pastors, counselors, and parents now speak about the 'why' behind behavior rather than only the 'what.' It also provided a robust biblical framework for understanding spanking, communication, and correction in their proper place and limits."
  },
  {
    id: "clarkson",
    name: "Sally Clarkson",
    era: "b. 1956",
    context: "The Mission of Motherhood (2003) — presents mothering as one of the highest callings and most formative influences in a child's life",
    bio: "Sally Clarkson is an author, speaker, and mother of four children who have all gone on to vocational ministry or creative Christian work. Her books — including The Mission of Motherhood, The Life-Giving Home, and Own Your Life — make a countercultural argument at a time when cultural messaging consistently devalued full investment in motherhood. Clarkson's vision is Trinitarian and relational: the home is meant to be a picture of what God's kingdom looks like — a place of grace, beauty, feasting, conversation, and unconditional love. She is particularly gifted at inspiring women to see the spiritual weight of ordinary days.",
    quote: "A mother's love, her voice, her touch, and her prayers are among the most powerful forces on earth. Do not let anyone tell you that what you do in the small, unseen moments of motherhood does not matter. It is where civilization is formed.",
    contribution: "Clarkson's work has given a theological vocabulary and a spiritual vision to thousands of mothers who felt the cultural pressure to minimize or abandon full investment in the home. Her emphasis on atmosphere, beauty, and the long arc of intentional relationship-building has shaped a distinctive vision for Christian homemaking as vocation and calling rather than default or compromise."
  },
  {
    id: "dobson",
    name: "James Dobson",
    era: "b. 1936",
    context: "Focus on the Family — popularized Christian parenting in America; author of Dare to Discipline and The Strong-Willed Child",
    bio: "James Dobson is a child psychologist, author, and founder of Focus on the Family, one of the most influential Christian organizations of the 20th century. His Dare to Discipline (1970) arrived at a moment when progressive educational psychology was marginalizing structure and authority in child-rearing. Dobson made the case, from both Scripture and behavioral psychology, that firm and loving discipline is essential to a child's development and security. His radio program reached tens of millions of families across decades. He was particularly adept at translating clinical insights into accessible practical guidance, and his concept of the 'strong-willed child' gave parents a framework for understanding temperament without pathologizing it.",
    quote: "Children need love — especially when they don't deserve it. That is precisely when love is most needed and most powerful. Discipline without genuine affection is harshness. Affection without discipline is sentimentality. Together they are what a child most needs.",
    contribution: "Dobson virtually created the Christian parenting genre as a popular category. His combination of clinical psychology, biblical conviction, and practical application reached an audience that would not have engaged with purely theological parenting resources. Focus on the Family built infrastructure — radio, counseling referrals, policy advocacy — that shaped American Christian family culture for fifty years."
  }
];

const PARENTING_VIDEOS: Video[] = [
  {
    id: "fdf",
    preacher: "Voddie Baucham",
    title: "Family Driven Faith",
    description: "Baucham makes the case that parents, not youth groups, are God’s primary vehicle for raising children in faith — a direct, exegetically grounded call for parents to reclaim the home as the primary seminary.",
    videoId: "k764Pe2P61U"
  },
  {
    id: "purpose-parent",
    preacher: "Voddie Baucham",
    title: "The Purpose of Parenting",
    description: "What is the actual goal of Christian parenting? Baucham answers from Scripture with characteristic clarity — the goal is not happy children but children who know and love God.",
    videoId: "WUE-J-br7P0"
  },
  {
    id: "prodigal",
    preacher: "Tim Keller",
    title: "The Prodigal Sons",
    description: "Keller’s exposition of Luke 15 offers the deepest picture of what a father’s love looks like — the model for all parents. This sermon has shaped how a generation understands unconditional love.",
    videoId: "lsTzXI7cJGA"
  },
  {
    id: "dont-waste",
    preacher: "John Piper",
    title: "Don’t Waste Your Life",
    description: "Piper’s call helps parents understand what they’re raising their children toward — a life that counts for eternity, not a life of safety and comfort that amounts to nothing.",
    videoId: "JHdB1dYAteA"
  },
  {
    id: "shocking-youth",
    preacher: "Paul Washer",
    title: "Shocking Youth Message",
    description: "Washer’s confronting message about what true faith looks like in the next generation — a necessary corrective to shallow, cultural Christianity that leaves young people with no real root.",
    videoId: "uuabITeO4l8"
  },
  {
    id: "radical-platt",
    preacher: "David Platt",
    title: "Radical: Passion 2011",
    description: "Platt challenges parents: are you raising children for comfort and safety, or for costly discipleship? A message that reorients what we are actually aiming at when we raise children.",
    videoId: "yhiHSf_L6_E"
  }
];

export default function ParentingPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_parenting_tab", "stages");
  const [selectedStage, setSelectedStage] = useState<Stage | null>(null);
  const [expandedRhythm, setExpandedRhythm] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<string>("baucham");
  const [savedRhythms, setSavedRhythms] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_parenting_rhythms"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });

  useEffect(() => {
    try { localStorage.setItem("vine_parenting_rhythms", JSON.stringify([...savedRhythms])); } catch {}
  }, [savedRhythms]);

  const toggleRhythm = (id: string) => setSavedRhythms(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const activeVoice = VOICES_PAR.find(v => v.id === selectedVoice)!;

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "inherit" }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 16px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(236,72,153,0.12)", border: "1px solid rgba(236,72,153,0.25)", borderRadius: 20, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ fontSize: 16 }}>👨‍👩‍👧‍👦</span>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "#EC4899", textTransform: "uppercase" }}>Christian Parenting</span>
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16, lineHeight: 1.1 }}>
            Raise Them{" "}
            <span style={{ background: "linear-gradient(135deg, #EC4899, #3a7d56)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              in the Faith
            </span>
          </h1>
          <p style={{ color: MUTED, fontSize: 17, maxWidth: 580, margin: "0 auto 24px" }}>
            No parent is perfect. But Scripture gives us principles, patterns, and a God who is with us in the hardest moments of raising children. Practical wisdom for every age.
          </p>
          <div style={{ background: "rgba(58,125,86,0.06)", border: "1px solid rgba(58,125,86,0.18)", borderRadius: 12, padding: "14px 20px", maxWidth: 540, margin: "0 auto" }}>
            <p style={{ fontSize: 14, color: "#4a9e6e", fontStyle: "italic", margin: 0 }}>
              &ldquo;Hear, O Israel: The Lord our God, the Lord is one. Love the Lord your God with all your heart&hellip; Impress them on your children. Talk about them when you sit at home and when you walk along the road.&rdquo;
            </p>
            <p style={{ fontSize: 12, color: MUTED, marginTop: 4, marginBottom: 0 }}>&mdash; Deuteronomy 6:4-7</p>
          </div>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 28, padding: "6px", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, flexWrap: "wrap" }}>
          {(["stages", "rhythms", "voices", "videos"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "stages" ? "By Age & Stage" : t === "rhythms" ? "Family Rhythms" : t === "voices" ? "Voices & Authors" : "Watch & Learn"}
            </button>
          ))}
        </div>

        {/* STAGES TAB */}
        {activeTab === "stages" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>Each stage requires a different approach. What works with a 5-year-old will not work with a teenager. Wisdom means adjusting the approach while holding the goal constant.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14, marginBottom: 24 }}>
              {stages.map(s => (
                <div key={s.age} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "20px", cursor: "pointer" }}
                  onClick={() => setSelectedStage(s)}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <span style={{ fontSize: 28 }}>{s.emoji}</span>
                    <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: `${s.color}15`, color: s.color, fontWeight: 700 }}>Ages {s.age}</span>
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, margin: "0 0 8px", color: s.color }}>{s.label}</h3>
                  <p style={{ fontSize: 12, color: "#A0A0C0", margin: "0 0 12px", fontStyle: "italic" }}>&ldquo;{s.verse.slice(0, 60)}&hellip;&rdquo;</p>
                  <button style={{ width: "100%", padding: "8px", borderRadius: 10, border: `1px solid ${s.color}30`, background: `${s.color}08`, color: s.color, cursor: "pointer", fontSize: 12, fontWeight: 700 }}>
                    See Guide &rarr;
                  </button>
                </div>
              ))}
            </div>

            {selectedStage && (
              <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
                onClick={() => setSelectedStage(null)}>
                <div style={{ background: CARD, border: `1px solid ${selectedStage.color}40`, borderRadius: 20, padding: "32px", maxWidth: 600, width: "100%", maxHeight: "90vh", overflowY: "auto" }}
                  onClick={e => e.stopPropagation()}>
                  <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 16 }}>
                    <span style={{ fontSize: 36 }}>{selectedStage.emoji}</span>
                    <div>
                      <h2 style={{ fontSize: 22, fontWeight: 900, margin: 0, color: selectedStage.color }}>{selectedStage.label}</h2>
                      <p style={{ fontSize: 13, color: MUTED, margin: "4px 0 0" }}>Ages {selectedStage.age}</p>
                    </div>
                  </div>

                  <div style={{ background: `${selectedStage.color}08`, border: `1px solid ${selectedStage.color}30`, borderRadius: 12, padding: "16px", marginBottom: 20 }}>
                    <p style={{ fontSize: 13, fontStyle: "italic", color: "#C0C0D8", lineHeight: 1.7, margin: "0 0 6px" }}>&ldquo;{selectedStage.verse}&rdquo;</p>
                    <p style={{ fontSize: 12, fontWeight: 700, color: selectedStage.color, margin: 0 }}>&mdash; {selectedStage.verseRef}</p>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <h4 style={{ fontSize: 13, fontWeight: 800, color: GREEN, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Core Principles</h4>
                    {selectedStage.principles.map((p, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                        <span style={{ color: GREEN, fontWeight: 900 }}>&rarr;</span>
                        <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, margin: 0 }}>{p}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <h4 style={{ fontSize: 13, fontWeight: 800, color: "#EF4444", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Common Pitfalls</h4>
                    {selectedStage.pitfalls.map((p, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                        <span style={{ color: "#EF4444" }}>&#x2717;</span>
                        <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, margin: 0 }}>{p}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <h4 style={{ fontSize: 13, fontWeight: 800, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Practices to Try</h4>
                    {selectedStage.practices.map((p, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                        <span style={{ color: PURPLE }}>&bull;</span>
                        <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, margin: 0 }}>{p}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: "16px", marginBottom: 20 }}>
                    <p style={{ fontSize: 12, fontWeight: 800, color: MUTED, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>On Conversations</p>
                    <p style={{ fontSize: 14, color: "#A0A0C0", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{selectedStage.conversation}</p>
                  </div>

                  <button onClick={() => setSelectedStage(null)}
                    style={{ width: "100%", padding: "12px", borderRadius: 12, border: "none", background: "rgba(255,255,255,0.08)", color: MUTED, cursor: "pointer", fontSize: 14, fontWeight: 700 }}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* RHYTHMS TAB */}
        {activeTab === "rhythms" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>
              The most formative thing you can do as a Christian parent isn&rsquo;t a curriculum &mdash; it&rsquo;s repeated, shared practices that give your family a spiritual rhythm. These are the patterns that stick across generations.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {FAMILY_RHYTHMS.map(r => {
                const isExp = expandedRhythm === r.id;
                const colors: Record<string, string> = { devotional: "#EC4899", blessing: GREEN, sabbath: PURPLE, milestones: "#F59E0B", service: "#3B82F6" };
                const rc = colors[r.id] || GREEN;
                return (
                  <div key={r.id} style={{ background: CARD, border: `1px solid ${isExp ? rc + "40" : BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                    <div style={{ padding: "18px 22px" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                        <div style={{ display: "flex", gap: 14, flex: 1 }}>
                          <span style={{ fontSize: 26, flexShrink: 0 }}>{r.icon}</span>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                              <h3 style={{ fontSize: 16, fontWeight: 800, margin: 0 }}>{r.name}</h3>
                              <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: `${rc}15`, color: rc, fontWeight: 700 }}>{r.frequency}</span>
                            </div>
                            <p style={{ fontSize: 14, color: MUTED, margin: 0, lineHeight: 1.6 }}>{r.description}</p>
                          </div>
                        </div>
                        <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                          <button onClick={() => toggleRhythm(r.id)}
                            style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid ${savedRhythms.has(r.id) ? PURPLE : BORDER}`, background: savedRhythms.has(r.id) ? "rgba(107,79,187,0.15)" : "transparent", cursor: "pointer", fontSize: 13, color: savedRhythms.has(r.id) ? PURPLE : MUTED }}>
                            {savedRhythms.has(r.id) ? "🔖" : "📌"}
                          </button>
                          <button onClick={() => setExpandedRhythm(isExp ? null : r.id)}
                            style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${rc}40`, background: `${rc}10`, color: rc, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                            {isExp ? "Close" : "How-To"}
                          </button>
                        </div>
                      </div>
                    </div>
                    {isExp && (
                      <div style={{ borderTop: `1px solid ${BORDER}`, padding: "20px 22px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                          {r.howTo.map((step, i) => (
                            <div key={i} style={{ display: "flex", gap: 10 }}>
                              <span style={{ width: 20, height: 20, borderRadius: "50%", background: `${rc}20`, color: rc, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>{i + 1}</span>
                              <p style={{ fontSize: 14, color: "#C0C0D8", margin: 0, lineHeight: 1.7 }}>{step}</p>
                            </div>
                          ))}
                        </div>
                        <div style={{ background: "rgba(58,125,86,0.05)", border: "1px solid rgba(58,125,86,0.15)", borderRadius: 10, padding: "12px 16px" }}>
                          <p style={{ fontSize: 13, color: "#B0F0C0", fontStyle: "italic", margin: "0 0 4px", lineHeight: 1.6 }}>&ldquo;{r.verse}&rdquo;</p>
                          <span style={{ fontSize: 12, color: GREEN, fontWeight: 700 }}>&mdash; {r.verseRef}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VOICES TAB */}
        {activeTab === "voices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>
              These authors and preachers have shaped how a generation of Christian parents understand their calling. Each represents a distinct emphasis &mdash; together they form a rich and challenging picture.
            </p>
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              {/* Left Panel */}
              <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
                {VOICES_PAR.map(v => (
                  <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                    style={{ background: selectedVoice === v.id ? PURPLE : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{v.era}</div>
                  </button>
                ))}
              </div>
              {/* Right Panel */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
                  <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{activeVoice.name}</h2>
                  <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{activeVoice.era}</div>
                  <div style={{ color: MUTED, fontSize: 13, marginBottom: 16, lineHeight: 1.5 }}>{activeVoice.context}</div>
                  <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{activeVoice.bio}</p>
                  <div style={{ background: BG, borderLeft: `3px solid ${GREEN}`, borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                    <p style={{ color: GREEN, fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{activeVoice.quote}&rdquo;</p>
                  </div>
                  <div style={{ background: `${PURPLE}15`, borderRadius: 10, padding: 16 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Legacy &amp; Contribution</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{activeVoice.contribution}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIDEOS TAB */}
        {activeTab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>
              These messages have shaped how a generation of parents thinks about raising children for God &mdash; not for safety, comfort, or social success, but for a life that counts for eternity.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 20 }}>
              {PARENTING_VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                  <div style={{ padding: "20px 20px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                      <span style={{ fontSize: 11, padding: "4px 12px", borderRadius: 20, background: PURPLE, color: "#fff", fontWeight: 700 }}>{v.preacher}</span>
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 800, margin: "0 0 10px", color: TEXT }}>{v.title}</h3>
                    <p style={{ fontSize: 14, color: MUTED, margin: 0, lineHeight: 1.6 }}>{v.description}</p>
                  </div>
                  <div style={{ padding: "0 20px 20px" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", borderRadius: 8 }}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
      <Footer />
    </div>
  );
}
