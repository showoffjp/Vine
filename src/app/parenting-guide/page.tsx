"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "principles" | "books" | "ages" | "worship" | "resources" | "videos";

const PARENTING_VIDEOS = [
  { videoId: "KbFKcFxqVlo", title: "The Gospel-Centered Family — Tim Keller", channel: "Gospel in Life", description: "Keller on how the gospel reshapes every aspect of family life — discipline, forgiveness, and the goal of Christian parenting." },
  { videoId: "ACZbpLkY8To", title: "Parenting and the Sovereignty of God", channel: "Ligonier Ministries", description: "What it means to parent as a steward, not an owner — trusting God's sovereignty while being faithful in our role." },
  { videoId: "fJnGJN6laqE", title: "How to Raise Children Who Love God", channel: "Desiring God", description: "Piper on the parenting patterns that form lasting faith — not just behavior management but heart formation." },
  { videoId: "Z8lkuuhVkOI", title: "Faith at Home — Deuteronomy 6 and Christian Parenting", channel: "The Gospel Coalition", description: "What Deuteronomy 6's command to teach children 'as you walk, sit, and rise' looks like in a contemporary Christian home." },
];

const WORSHIP_ELEMENTS = [
  { title: "Read", color: GREEN, desc: "Read a short portion of Scripture together — a few verses to a chapter, depending on ages. Work through a book or a story Bible consecutively so children grasp the storyline. Ask one or two simple questions: What does this teach us about God? About ourselves? Keep it brief enough that it ends before attention does." },
  { title: "Pray", color: PURPLE, desc: "Pray together out loud, simply and honestly. Let children pray in their own words. Pray through what you read, thank God for specific things, confess together, and intercede for family, friends, missionaries, and those who are hurting. Praying aloud in front of your children teaches them how to pray more than any lesson could." },
  { title: "Sing", color: "#3B82F6", desc: "Sing a hymn or a worship song together — even badly, even one line. Music lodges truth in the heart for life; many adults can still sing the songs of their childhood faith. Keep a short rotation of songs so they become familiar and beloved. Don't be intimidated by a lack of musical skill; faithfulness, not performance, is the point." },
  { title: "Keep it short and consistent", color: "#F59E0B", desc: "Ten minutes done daily beats an hour done rarely. Attach it to an existing anchor — breakfast, dinner, or bedtime — so it becomes a non-negotiable rhythm rather than a project. Expect interruptions, wiggling, and off-days. Consistency over years, not intensity on any one day, is what forms a household." },
];

const PRAYERS = [
  { occasion: "A bedtime prayer with young children", color: GREEN, text: "Father, thank you for today and for keeping us safe. Thank you that you never sleep and you watch over us all night. Forgive us for the wrong things we did today, and help us to love you and each other more tomorrow. Give us peaceful sleep, in Jesus' name. Amen." },
  { occasion: "A blessing to speak over your child (from Numbers 6)", color: PURPLE, text: "The LORD bless you and keep you; the LORD make his face shine on you and be gracious to you; the LORD turn his face toward you and give you peace. (Numbers 6:24-26)" },
  { occasion: "A parent's prayer for a child's salvation", color: "#3B82F6", text: "Lord, I cannot change my child's heart — only you can. Draw [name] to yourself. Open their eyes to see Jesus as more beautiful than anything this world offers. Give them a heart of flesh in place of a heart of stone (Ezek 36:26). Use me to point to you, and where I fail, redeem even my mistakes for their good. Amen." },
  { occasion: "A prayer for a struggling teenager", color: "#F59E0B", text: "Father, you know [name] better than I do, and you love them more than I do. In these years of searching, keep them. Protect them from harm, surround them with good friends, and let them always know they are welcome home — with me and with you. Give me patience, a listening ear, and a non-anxious heart. Bring them through to a faith that is truly their own. Amen." },
  { occasion: "A mealtime prayer the family can pray together", color: "#10B981", text: "Thank you, God, for this food and for the hands that prepared it. Thank you for our family and for your love that holds us together. Help us to use the strength this meal gives us to serve you and others today. Amen." },
  { occasion: "A prayer of confession and repair (after a parent has failed)", color: "#EC4899", text: "I'm sorry. I was wrong to [speak harshly / lose my temper / not listen], and it hurt you. That wasn't how God wants me to treat you, and I've asked him to forgive me too. Will you forgive me? I love you, and with God's help I want to do better." },
];

const PRINCIPLES = [
  { title: "You are discipling, not just parenting", color: GREEN, scripture: "Deuteronomy 6:4-9; Ephesians 6:4", content: "The Shema (Deuteronomy 6) commands parents to impress God's commands on children — when you sit, walk, lie down, get up. Parenting in Scripture is explicitly discipleship: passing faith, character, and the knowledge of God to the next generation. The question is not whether you are forming your children but what you are forming them toward." },
  { title: "The heart is the target", color: PURPLE, scripture: "Proverbs 4:23; Luke 6:45", content: "Behavior modification without heart transformation produces Pharisees. The goal is not a child who obeys in your presence but a child whose heart has been won to God. Tedd Tripp's Shepherding a Child's Heart makes this the organizing principle: get beneath the behavior to the heart motivations driving it. Address the heart and the behavior changes; address only the behavior and the heart grows harder." },
  { title: "Discipline is love, not punishment", color: "#EF4444", scripture: "Proverbs 13:24; Hebrews 12:5-11", content: "The Hebrew word for discipline (musar) encompasses instruction, correction, training, and sometimes physical pain — but always in the context of relationship and love. Hebrews 12 uses parental discipline as the analogy for how God disciplines those He loves. Discipline that is punitive (inflicting pain to satisfy parental anger) is different from discipline that is formative (correcting behavior to shape character)." },
  { title: "Model what you want to produce", color: "#3B82F6", scripture: "1 Corinthians 11:1; Deuteronomy 6:6", content: "Children learn more from who you are than from what you say. The Shema commands that God's words be upon your heart before you impress them on your children. A father who prays will produce children who see prayer as normal. A mother who reads Scripture models that Scripture is worth reading. You cannot give what you do not have." },
  { title: "The home is the primary church", color: "#F59E0B", scripture: "Deuteronomy 6:7; Psalm 78:4-7; Acts 16:31", content: "Before Sunday school, vacation Bible school, and youth group existed, the home was where faith was transmitted. Psalm 78 describes each generation telling the next generation about God's deeds. The household salvation of Cornelius, Lydia, the Philippian jailer, and Crispus in Acts suggests that conversion flows most naturally through family networks. The church supports what should happen at home, not the other way around." },
  { title: "Grace covers your failures", color: "#10B981", scripture: "Romans 8:1; 1 John 1:9; Psalm 103:13", content: "Every parent will fail. The question is not whether you will fail your children but how you will respond when you do. Parents who model repentance, confession, and receiving forgiveness give their children the most important theological education possible: the gospel actually works in real life, in this house, with me." },
  { title: "Technology is a parenting crisis in disguise", color: "#6366F1", scripture: "Psalm 101:3; Matthew 6:22-23; Proverbs 4:25", content: "A smartphone is a portal to the entire internet in a child's pocket. The research on smartphone use and adolescent mental health is now overwhelming: high use correlates with anxiety, depression, loneliness, and compromised cognitive development. Jonathan Haidt's The Anxious Generation synthesizes this research. Christian parents need a theology of technology that begins with the question of what forms the heart, not just what is convenient." },
  { title: "Catechize — teach them the faith on purpose", color: "#14B8A6", scripture: "Deuteronomy 6:7; 2 Timothy 3:14-15; Proverbs 22:6", content: "Children will be catechized by something — advertising, peers, the internet, their own desires. The question is whether parents will be intentional about what shapes their children's deepest beliefs. Historic catechisms (the New City Catechism, the Westminster Shorter Catechism, the Heidelberg Catechism, or the Catholic Baltimore Catechism) condense the faith into memorable question-and-answer form. Even a few minutes a day, repeated over years, lodges truth deep enough to draw on in crisis. Paul reminds Timothy that 'from infancy you have known the Holy Scriptures' (2 Tim 3:15)." },
  { title: "Cultivate wonder and joy, not just rules", color: "#EC4899", scripture: "Psalm 34:8; Psalm 16:11; Mark 10:13-16", content: "Jesus welcomed children and was indignant when they were pushed away (Mark 10:14). A faith presented only as restriction will be experienced as a cage to escape. The aim is for children to 'taste and see that the Lord is good' (Ps 34:8) — to associate God with delight, beauty, laughter, and security long before they grasp doctrine. Family life saturated with gratitude, celebration, music, story, and play teaches that the Christian life is fundamentally good news, not a list of prohibitions." },
  { title: "Pray for and with your children persistently", color: "#06B6D4", scripture: "1 Samuel 1:27-28; Job 1:5; Luke 18:1", content: "You cannot regenerate your child's heart — only God can. This is freeing and humbling: your most important parenting work happens on your knees. Job rose early to pray for his children; Hannah dedicated Samuel to the Lord; Monica's prayers preceded Augustine's conversion by decades. Pray specifically, by name, for your children's salvation, character, future spouse, and protection — and let them hear you pray for them, so they know they are carried before God." },
];

const BOOKS_DATA = [
  { title: "Shepherding a Child's Heart", author: "Tedd Tripp", color: GREEN, ages: "All ages", description: "The most influential Reformed parenting book of the past 30 years. Tripp's central argument: all behavior flows from the heart, and parental discipline must address the heart rather than merely the behavior. Addresses the nature of children, the goals of parenting, and the specific communication and correction skills parents need.", verdict: "Essential — the theological foundation for Christian parenting" },
  { title: "Age of Opportunity", author: "Paul David Tripp", color: PURPLE, ages: "Teens (13-18)", description: "Paul Tripp argues that the teen years are not a crisis to survive but the greatest parenting opportunity of all — precisely because teens are forming their identities and worldviews. Parents who disengage during adolescence miss the window when the most important formation happens.", verdict: "Essential for parents of teenagers — reframes adolescence as opportunity" },
  { title: "The Tech-Wise Family", author: "Andy Crouch", color: "#3B82F6", ages: "All ages", description: "Crouch provides both a theology of technology and practical household policies — 10 commitments families can make to ensure technology serves human flourishing rather than undermining it. Not a Luddite book but a wisdom book for navigating the digital age.", verdict: "Required reading for any family with screens" },
  { title: "Give Them Grace", author: "Elyse Fitzpatrick & Jessica Thompson", color: "#EF4444", ages: "All ages", description: "Pushback against performance-based Christian parenting. Fitzpatrick argues that most Christian parenting inadvertently teaches children to earn love through behavior rather than resting in grace. The book applies justification by faith to family dynamics.", verdict: "Important corrective to legalistic parenting tendencies" },
  { title: "The Anxious Generation", author: "Jonathan Haidt", color: "#F59E0B", ages: "Parents of any age children", description: "Not a Christian book, but the most important parenting book of the decade. Haidt synthesizes the research on smartphones, social media, and the mental health crisis among adolescents. His four norms — no smartphones before high school, no social media before 16, phone-free schools, more unsupervised outdoor play — are gaining widespread adoption.", verdict: "Essential — every Christian parent should read this immediately" },
  { title: "Raising Kids for True Greatness", author: "Tim Kimmel", color: "#10B981", ages: "All ages", description: "Kimmel argues against the success-obsessed parenting culture — sports trophies, grades, college admissions — in favor of character, compassion, and calling. True greatness in a child is not achievement but a great heart for God and others.", verdict: "Excellent antidote to achievement-driven parenting" },
  { title: "Parenting: 14 Gospel Principles", author: "Paul David Tripp", color: PURPLE, ages: "All ages", description: "Tripp's most comprehensive treatment of parenting — 14 chapters each organized around a gospel principle applied to parenting. Covers the humility of recognizing our own sin as parents, the grace that covers our failures, and the long view of God's work in our children's lives.", verdict: "The most theologically complete single parenting book available" },
  { title: "Don't Make Me Count to Three", author: "Ginger Hubbard", color: "#14B8A6", ages: "Toddlers–Tweens", description: "A practical, heart-oriented manual for the daily work of correction in the early years. Hubbard applies the principle that behavior flows from the heart (Luke 6:45) to concrete situations — whining, lying, disobedience — giving parents specific, gospel-shaped scripts for reaching the heart rather than merely managing behavior.", verdict: "The most practical hands-on companion to Shepherding a Child's Heart" },
  { title: "Habits of the Household", author: "Justin Whitmel Earley", color: "#EC4899", ages: "All ages", description: "Earley argues that the small, repeated rhythms of family life — wake-ups, mealtimes, screen-time, discipline, bedtime, marriage — are 'liturgies' that form children's loves more than any lecture. Offers concrete, doable household practices that embed grace and gospel into the ordinary texture of the day.", verdict: "Excellent for turning theology into everyday, repeatable family habits" },
  { title: "Family Worship", author: "Donald S. Whitney", color: "#06B6D4", ages: "All ages", description: "A short, encouraging, and intensely practical case for the lost discipline of daily family worship. Whitney distills it to three simple elements — read, pray, sing — and dismantles the excuses (no time, not qualified, kids too young) that keep most families from starting. Under 100 pages.", verdict: "The single best starting point for beginning family worship" },
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
  { name: "New City Catechism (The Gospel Coalition)", desc: "A free, beautifully designed catechism of 52 questions and answers for children and adults — available as a book, website, and app with songs, prayers, and commentary. One question per week disciples a family through the year. newcitycatechism.com", color: "#14B8A6" },
  { name: "BibleProject", desc: "Free animated videos explaining every book of the Bible and major biblical themes — excellent for family devotions, teaching older kids the storyline of Scripture, and answering big questions. bibleproject.com", color: "#EC4899" },
  { name: "Risen Motherhood", desc: "A ministry (podcast, book, and articles) connecting the everyday realities of motherhood to the gospel — practical, gospel-saturated encouragement for moms in every season. risenmotherhood.com", color: "#06B6D4" },
  { name: "Bark / Covenant Eyes / Canopy", desc: "Parental monitoring and content-filtering tools that help families steward devices and the internet wisely (Bark for monitoring, Covenant Eyes and Canopy for accountability and filtering). bark.us · covenanteyes.com · canopy.us", color: "#6366F1" },
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
          {(["principles", "books", "ages", "worship", "resources", "videos"] as Tab[]).map(t => (
            <button key={t} onClick={() => { setTab(t); setSelected(null); }}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", textTransform: "capitalize" }}>
              {t === "principles" ? "Principles" : t === "books" ? "Best Books" : t === "ages" ? "By Age/Stage" : t === "worship" ? "Family Worship" : t === "resources" ? "Resources" : "Videos"}
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

        {tab === "worship" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}25`, borderRadius: 12, padding: 22 }}>
              <div style={{ color: GREEN, fontWeight: 900, fontSize: 16, marginBottom: 6 }}>Family Worship: Simpler Than You Think</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>The home is the primary place faith is formed. For most of church history, daily worship in the home — not Sunday programs — was the engine of discipleship. It does not require expertise or curriculum. Donald Whitney boils it down to three elements: read, pray, sing. Begin small, attach it to a meal or bedtime, and aim for consistency over polish.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
              {WORSHIP_ELEMENTS.map((w, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${w.color}25`, borderRadius: 12, padding: 18 }}>
                  <div style={{ color: w.color, fontWeight: 800, fontSize: 15, marginBottom: 8 }}>{w.title}</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{w.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ color: TEXT, fontWeight: 900, fontSize: 17, marginTop: 8 }}>Prayers for the Home</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {PRAYERS.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${p.color}25`, borderRadius: 12, padding: 20, display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 5, borderRadius: 3, background: p.color, alignSelf: "stretch", flexShrink: 0, minHeight: 40 }} />
                  <div>
                    <div style={{ color: p.color, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>{p.occasion}</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {PARENTING_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                  src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
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
