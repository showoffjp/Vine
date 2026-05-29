"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "what" | "teachers" | "practices" | "stages";

// ─── Tab 1 Data ───────────────────────────────────────────────────────────────

const ACCORDION_ITEMS = [
  {
    id: "definition",
    title: "Definition",
    content: `Dallas Willard defined spiritual formation as "the process by which Christ is formed in us for the glory of God, the benefit of others, and our own eternal good." This is not a program or a curriculum — it is the whole-life process of becoming the kind of person who naturally and routinely does what Jesus would do in your place. Formation is not about adding religious behaviors on top of an unchanged self; it is about the deep transformation of character, will, and desire so that Christlikeness becomes your natural mode of existence.`,
  },
  {
    id: "vim",
    title: "Formation vs. Information",
    content: `Knowing more doctrine does not automatically make you more like Jesus. The evangelical church has largely assumed that filling people's minds with correct theology will produce transformed lives — but this is not what we observe. Dallas Willard described this gap using the VIM pattern: Vision (a compelling picture of life in God's kingdom), Intention (a genuine decision of the will to pursue that life), and Means (the specific practices and arrangements of life that actually train and reshape character). Without all three, information produces proud knowledge without transformed character. You can memorize the Sermon on the Mount and remain thoroughly unlike Jesus.`,
  },
  {
    id: "goal",
    title: "The Goal: Conformity to Christ",
    content: `The goal of spiritual formation is explicit in Scripture. Romans 8:29 says God predestined believers "to be conformed to the image of his Son." 2 Corinthians 3:18 describes a progressive transformation: "we all, with unveiled face, beholding the glory of the Lord, are being transformed into the same image from one degree of glory to another." And Paul's most visceral expression comes in Galatians 4:19 where he writes to the Galatian churches as a mother in labor: "I am in the anguish of childbirth again until Christ is formed in you." Formation is not optional — it is the design of salvation itself.`,
  },
  {
    id: "body",
    title: "Spiritual Formation and the Body",
    content: `Dallas Willard argued forcefully that the body is the primary arena of spiritual formation — not the soul floating free of physical reality. Our habits, reflexes, and automatic responses are embodied. We do not simply decide to be patient; we must train the body's automatic reactions over time. This is why Paul says "I discipline my body and keep it under control" (1 Cor 9:27). Spiritual disciplines are not a way of earning grace but a way of training the body and soul — like an athlete trains not to earn victory in tomorrow's game but to have the capacity that victory requires. The body becomes the instrument of holiness or its obstacle.`,
  },
  {
    id: "community",
    title: "Formation Through Community",
    content: `Spiritual formation does not happen in isolation. James K.A. Smith's groundbreaking work on "cultural liturgies" (in Desiring the Kingdom and You Are What You Love) demonstrates that we are formed by the practices and stories of the communities we inhabit — often without our awareness. The shopping mall, the stadium, and the smartphone all form us through repeated ritual practices. This is why corporate worship is not optional: it is a counter-formative liturgy that re-narrates reality and reorients desire. Small groups, shared meals, accountability relationships, and confessing communities all provide the social substrate within which Christ-formation becomes possible. Lone-ranger discipleship is a modern fiction.`,
  },
  {
    id: "obstacles",
    title: "Obstacles to Formation",
    content: `The primary obstacles to spiritual formation are distraction, hurry, unprocessed pain, and lack of intention. Hurry is perhaps the most destructive: Dallas Willard famously said, "You can live on the run your whole life and never become more like Jesus." Hurry eliminates the interior space where formation happens. Unprocessed pain drives us to numbing behaviors that fortify our defenses against God's work. Distraction — especially digital distraction — colonizes the attentional space that prayer and reflection require. And without genuine intention — a real decision to cooperate with God's transforming work — all the information and good intentions remain inert. Formation requires ruthless attention to the conditions of one's life.`,
  },
];

// ─── Tab 2 Data ───────────────────────────────────────────────────────────────

const TEACHERS = [
  {
    id: "willard",
    name: "Dallas Willard",
    years: "1935–2013",
    role: "Philosopher & Theologian",
    books: ["The Spirit of the Disciplines (1988)", "The Divine Conspiracy (1998)", "Renovation of the Heart (2002)"],
    contribution: "Disciplines as training, not payment",
    bio: `Dallas Willard was a USC philosophy professor who became the most influential Protestant voice on spiritual formation in the twentieth century. His central thesis was deceptively simple: spiritual disciplines are not ways of earning God's favor but are the means by which we train ourselves to do what we cannot yet do by direct effort. Just as a pianist cannot will a perfect performance without years of practice, we cannot will love, patience, or courage into existence — but we can train for them. Willard's concept of the VIM pattern (Vision, Intention, Means) provides the architecture of transformation, while his unflinching diagnosis of "gospels of sin management" (managing behavior without changing the will) names the failure of much contemporary Christianity. His vision of the "with-God life" — learning to live in the kingdom of God now — remains unmatched in scope and depth.`,
  },
  {
    id: "foster",
    name: "Richard Foster",
    years: "1942–present",
    role: "Quaker Theologian & Author",
    books: ["Celebration of Discipline (1978)", "Prayer: Finding the Heart's True Home (1992)", "Freedom of Simplicity (1981)"],
    contribution: "Relaunching Protestant interest in spiritual disciplines",
    bio: `Richard Foster's Celebration of Discipline, published in 1978, is widely credited with reintroducing the classical spiritual disciplines to a Protestant audience that had largely abandoned them. Foster organized the disciplines into three categories — Inward (meditation, prayer, fasting, study), Outward (simplicity, solitude, submission, service), and Corporate (confession, worship, guidance, celebration) — and wrote about each with pastoral warmth and practical accessibility. Coming out of the Quaker tradition, Foster emphasized the interior life and the importance of silence. His work opened the door for an entire generation of Protestants to rediscover contemplative Christianity without abandoning evangelical convictions. Celebration of Discipline has sold over two million copies.`,
  },
  {
    id: "kempis",
    name: "Thomas à Kempis",
    years: "c. 1380–1471",
    role: "Augustinian Canon & Mystic",
    books: ["The Imitation of Christ (c. 1418–1427)"],
    contribution: "Medieval roots of modern formation thinking",
    bio: `The Imitation of Christ is, after the Bible, the most widely printed Christian book in history. Thomas à Kempis, an Augustinian canon in the Netherlands, wrote it as a manual for the interior life — for those who wished not merely to know about Christ but to become like him. His opening sentence — "What doth it profit thee to enter into deep discussion concerning the Holy Trinity, if thou lack humility?" — strikes the keynote of the entire tradition: formation is not about theological precision but about the transformation of the self. À Kempis represents the Devotio Moderna movement's insistence that true religion is interior, not merely ceremonial, and his influence runs through the Reformation, through John Wesley, through the twentieth-century formation revival. To read him is to be humbled.`,
  },
  {
    id: "ignatius",
    name: "Ignatius of Loyola",
    years: "1491–1556",
    role: "Founder of the Jesuits",
    books: ["Spiritual Exercises (c. 1522–1524)", "The Constitutions of the Society of Jesus"],
    contribution: "Examen prayer, discernment of spirits, Jesuit formation model",
    bio: `Ignatius of Loyola, a Basque soldier turned mystic, developed the most comprehensive system of spiritual formation in Christian history. The Spiritual Exercises — originally a 30-day guided retreat — take the retreatant through the life, death, and resurrection of Christ using imaginative contemplation, self-examination, and structured discernment. Two contributions stand out. First, the Daily Examen: a structured twice-daily review of where God was present (consolation) and absent (desolation) in one's experience — a habit that, practiced over years, creates extraordinary spiritual attentiveness. Second, discernment of spirits: Ignatius provided the first systematic account of how to distinguish authentic movements of the Holy Spirit from counterfeit spiritual experiences, producing a practical psychology of the interior life that remains without peer.`,
  },
  {
    id: "john",
    name: "John of the Cross",
    years: "1542–1591",
    role: "Carmelite Mystic & Doctor of the Church",
    books: ["Dark Night of the Soul", "The Ascent of Mount Carmel", "The Spiritual Canticle"],
    contribution: "Purification, contemplative stages, the dark night",
    bio: `John of the Cross, a Spanish Carmelite friar and contemporary of Teresa of Ávila, mapped the stages of contemplative union with more precision than anyone before or since. His concept of the "dark night of the soul" — which has entered the common language — describes two distinct phases of spiritual purification: the night of the senses (purgation of sensory attachments) and the night of the spirit (deep purification of the will and intellect itself). What makes John indispensable is his insistence that apparent spiritual desolation — the feeling that God has withdrawn — is not abandonment but the very mechanism of deepening. God strips away the consolations that kept the soul spiritually immature, purifying the person for a more mature, unconditioned love. His work is demanding but indispensable for understanding why the spiritual journey becomes more difficult before it becomes more free.`,
  },
  {
    id: "smith",
    name: "James K.A. Smith",
    years: "1970–present",
    role: "Philosopher & Reformed Theologian",
    books: ["Desiring the Kingdom (2009)", "You Are What You Love (2016)", "Imagining the Kingdom (2013)"],
    contribution: "Liturgy, desires, and cultural formation as counter-formation",
    bio: `James K.A. Smith, a philosopher at Calvin University, has reframed the entire conversation about spiritual formation by arguing that human beings are fundamentally desiring creatures, not primarily thinking ones. Borrowing from Augustine ("our heart is restless until it rests in Thee") and developed through Merleau-Ponty's phenomenology, Smith argues that we are formed by practices, not primarily by ideas. Every cultural institution — from the shopping mall to the university — operates through "secular liturgies" that shape desire beneath the level of conscious thought. The church's response cannot be merely cognitive (better theology classes) but must be liturgical (thick, embodied, communal practices that re-narrate reality and reorient desire). His Cultural Liturgies trilogy is the most philosophically rigorous account of why formation requires the whole person — body, imagination, and desire — not merely the mind.`,
  },
];

// ─── Tab 3 Data ───────────────────────────────────────────────────────────────

type PracticeCategory = "Solitude & Silence" | "Word & Study" | "Prayer" | "Community" | "Body & Action";

const PRACTICES: { category: PracticeCategory; name: string; desc: string }[] = [
  // Solitude & Silence
  { category: "Solitude & Silence", name: "Silence", desc: "Intentional periods of complete quiet before God, stripping away the noise that normally crowds the interior life. Even 15 minutes of daily silence rewires attentiveness over time." },
  { category: "Solitude & Silence", name: "Solitude", desc: "Extended time alone — away from people, demands, and digital input — for the soul to become quiet enough to hear. Jesus modeled solitude before every major event of his ministry." },
  { category: "Solitude & Silence", name: "Wilderness Retreat", desc: "Multi-day immersion in creation and silence, often at a monastery or retreat center, for deep reflection and realignment. Removes ordinary props and reveals what is actually in the heart." },
  { category: "Solitude & Silence", name: "Contemplative Prayer", desc: "Non-discursive prayer that rests in God's presence rather than speaking at God. Includes practices like Centering Prayer and the Prayer of Quiet drawn from the Christian contemplative tradition." },
  { category: "Solitude & Silence", name: "Creation Immersion", desc: "Spending deliberate, unhurried time in natural settings as a spiritual practice. The created order is one of God's primary languages; those who slow down enough can hear it." },
  // Word & Study
  { category: "Word & Study", name: "Lectio Divina", desc: "Ancient practice of sacred reading: slow, prayerful engagement with a short Scripture passage using the movements of Lectio, Meditatio, Oratio, and Contemplatio. Encounter, not information." },
  { category: "Word & Study", name: "Scripture Memorization", desc: "Embedding biblical texts in the mind so they can operate in any circumstance — driving out anxiety, resisting temptation, and transforming habitual thought patterns from within." },
  { category: "Word & Study", name: "Theological Reading", desc: "Sustained reading in Christian theology, formation classics, and church history. The mind must be furnished with truth if the imagination is to be shaped by a Christian vision of reality." },
  { category: "Word & Study", name: "Journaling", desc: "Written reflection on Scripture, prayer, and the movements of the interior life. Externalizes the inner world for examination and creates a record of God's faithfulness over time." },
  { category: "Word & Study", name: "Catechesis", desc: "Structured instruction in the faith through creed, commandment, and prayer — the ancient curriculum for formation. Catechesis provides the cognitive scaffolding that supports deeper practices." },
  // Prayer
  { category: "Prayer", name: "Fixed-Hour Prayer (Daily Office)", desc: "Praying at set hours throughout the day using ancient liturgical forms — the Prayer Book tradition, the Liturgy of the Hours. Structures the whole day around returning to God." },
  { category: "Prayer", name: "Examen", desc: "The Ignatian Daily Examen: reviewing the day with God, noticing consolation and desolation, identifying where you were present to God and where you were not." },
  { category: "Prayer", name: "Intercession", desc: "Sustained, specific prayer for others — individuals, communities, nations. The priestly ministry of every believer; intercession trains the heart toward others rather than self." },
  { category: "Prayer", name: "Contemplation", desc: "The deepest form of prayer — resting in God beyond words and concepts. Not passive but intensely attentive; the soul is receptive rather than active. The goal of much of the classical tradition." },
  { category: "Prayer", name: "Praying the Psalms", desc: "Using the Psalter as a prayer book, speaking its words as your own. The Psalms give voice to the full range of human experience and train the soul in honest address to God." },
  // Community
  { category: "Community", name: "Corporate Worship", desc: "Weekly gathered worship with a local church community. Not merely attendance but active participation in the liturgy of Scripture, prayer, song, and table that forms the Christian imagination." },
  { category: "Community", name: "Small Group Confession", desc: "Bringing specific sin and struggle into the light within a trusted small community. Breaks the power of shame, enables accountability, and embodies the forgiveness of God through human presence." },
  { category: "Community", name: "Accountability", desc: "Regular, structured relationship with one or two others who ask hard questions about your spiritual life, temptations, commitments, and growth. Requires honesty, not performance." },
  { category: "Community", name: "Shared Table", desc: "Regular shared meals as a spiritual practice — hospitality that creates the conditions for genuine community. The table has always been a primary site of formation in the Christian tradition." },
  { category: "Community", name: "Hospitality", desc: "Opening your home and life to others, including strangers — one of the most underrated formation practices in Scripture (Romans 12:13; Hebrews 13:2). Disrupts self-centeredness at the level of daily life." },
  // Body & Action
  { category: "Body & Action", name: "Fasting", desc: "Voluntary abstinence from food (or other appetites) for spiritual purposes. Trains the will, redirects appetite toward God, and creates physical space that reveals the heart's true hunger." },
  { category: "Body & Action", name: "Sabbath", desc: "One full day per week of rest, worship, and delight — releasing the control over productivity and outcomes. The fourth commandment is also a profound formation practice: it trains trust." },
  { category: "Body & Action", name: "Simplicity", desc: "Intentional reduction of possessions, consumption, and complexity to create interior and exterior freedom. Simplicity attacks the attachment to security through material accumulation." },
  { category: "Body & Action", name: "Service", desc: "Regular, humble service to others without recognition or return. Service forms the character by placing the self in the position of a servant — the position Christ occupied willingly." },
  { category: "Body & Action", name: "Pilgrimage", desc: "Sacred travel to a significant site — a monastery, a holy land, a place of Christian witness. Pilgrimage uses the body's movement through space as a metaphor and means of the soul's journey toward God." },
];

const PRACTICE_CATEGORIES: PracticeCategory[] = [
  "Solitude & Silence",
  "Word & Study",
  "Prayer",
  "Community",
  "Body & Action",
];

const CATEGORY_COLORS: Record<PracticeCategory, string> = {
  "Solitude & Silence": "#10B981",
  "Word & Study": "#F59E0B",
  "Prayer": "#3B82F6",
  "Community": "#EC4899",
  "Body & Action": "#EF4444",
};

// ─── Tab 4 Data ───────────────────────────────────────────────────────────────

const STAGES = [
  {
    number: 1,
    name: "Awakening",
    subtitle: "Conversion and First Love",
    color: GREEN,
    description: `The journey begins with awakening — what the tradition calls conversion or the "first love." Everything feels new: prayer is vibrant, Scripture speaks directly, community is joyful, and the presence of God seems immediately accessible. This stage is characterized by enthusiasm, wonder, and a sense of discovery. Jesus's first disciples experienced this — everything around them was charged with possibility. Willard calls this "the gospel of the kingdom," when the reality of God's reign first becomes vivid. The danger of awakening is mistaking its emotional vividness for spiritual maturity. The consolations of this stage are genuine gifts; they are not, however, the destination.`,
    markers: ["Sense of God's nearness", "Enthusiasm for Scripture and prayer", "Excitement about community", "Strong emotional experience"],
  },
  {
    number: 2,
    name: "Formation",
    subtitle: "Learning the Basics",
    color: "#3B82F6",
    description: `The formation stage is the season of deliberate discipleship — learning the practices, joining the community, and beginning to structure life around spiritual disciplines. Emotional intensity from awakening often moderates, and the work of formation becomes more intentional and less spontaneous. This is the stage of catechesis, discipleship community, and the first serious engagement with spiritual disciplines. James Fowler's faith development research identifies this as the "synthetic-conventional" stage — faith is real but is largely shaped by the community's norms. The key task is building the architecture of a formational life: a rule of prayer, a reading rhythm, a community of accountability.`,
    markers: ["Discipleship community", "Learning spiritual disciplines", "Rule of life emerging", "Faith shaped by community norms"],
  },
  {
    number: 3,
    name: "Dark Night of the Soul",
    subtitle: "Aridity and Apparent Absence",
    color: PURPLE,
    description: `John of the Cross identified the "dark night of the soul" as a crucial and often terrifying stage of the spiritual journey. Prayer becomes dry; the consolations that made God feel near evaporate; Scripture seems flat; the practices that once fed the soul feel mechanical. Many people interpret this as spiritual failure, backsliding, or the collapse of faith — and abandon their practices. John of the Cross insists it is the opposite: God is stripping away the spiritual immaturity that depended on felt experience rather than naked faith. The dark night is the mechanism by which God purifies the motives for following him. The person who endures this stage with faithfulness — continuing to pray, to worship, to serve, even in the dark — emerges with a deeper and less conditional love.`,
    markers: ["Prayer feels dry or empty", "God seems absent", "Loss of previous consolations", "Temptation to abandon practices"],
  },
  {
    number: 4,
    name: "Active Night (Purgation)",
    subtitle: "Breaking from Attachments",
    color: "#F59E0B",
    description: `Closely related to the dark night but distinct in emphasis, the Active Night (or Purgative Way in the classical tradition) is the sustained work of breaking free from the attachments, compulsions, and disordered loves that have structured the self. John of the Cross called these "the night of the senses" and "the night of the spirit." Where the dark night is primarily passive — something God does to the soul — purgation involves active cooperation: voluntary renunciation of attachments to pleasure, reputation, security, and control. The will is being conformed not merely the emotions or the intellect. This is the stage where fasting, simplicity, service, and the more rigorous disciplines do their deepest work.`,
    markers: ["Active renunciation of attachments", "Cooperation with God's purifying work", "Will being conformed", "Rigorous practice and self-denial"],
  },
  {
    number: 5,
    name: "Illumination",
    subtitle: "Clarity and Emerging Fruit",
    color: "#10B981",
    description: `After the long season of purification, illumination begins to emerge — not as a dramatic event but as a gradual clearing. Prayer becomes less effortful and more natural; clarity of perception about God, self, and others increases; the fruit of the Spirit (Galatians 5:22-23) begins to appear not as performance but as character. The illuminative way is characterized by a growing integration between knowing and being, between theology and life. The person in this stage does not have fewer problems but responds to them from a deeper center. Willard describes this as the condition in which right action becomes easier than wrong action — not because temptation has ceased but because the character has been sufficiently transformed to respond rightly as a matter of course.`,
    markers: ["Growing integration of faith and character", "Fruit of the Spirit as character, not performance", "Prayer becomes more natural", "Clarity of perception"],
  },
  {
    number: 6,
    name: "Union",
    subtitle: "Mature Conformity to Christ",
    color: "#8B5CF6",
    description: `The final stage of the classical tradition is called Union — not a claim to perfection or sinlessness, but a settled orientation of the whole person toward God. The mystics describe it as the marriage of the soul to God; John of the Cross called it "living flame of love." Practically, union looks like what 1 John 4:17 describes: "as he is, so also are we in this world." The person in union does not think about being Christlike in each situation — they simply are. Fear has been displaced by love. Self-concern has been displaced by attentiveness to God and others. This is not a stable achievement but a settled direction, and even those who glimpse it remain dependent on grace. Thomas Merton and other modern writers caution against mapping the stages too mechanically — the spiritual life is not a curriculum but a relationship, and God is sovereign over its pace and form.`,
    markers: ["Settled orientation toward God", "Love displacing fear", "Christlikeness as character, not effort", "Deep interior freedom"],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function SpiritualFormationPage() {
  const [activeTab, setActiveTab] = useState<Tab>("what");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedTeacher, setSelectedTeacher] = useState<string>(TEACHERS[0].id);
  const [selectedCategory, setSelectedCategory] = useState<PracticeCategory | "All">("All");

  function toggleAccordion(id: string) {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  }

  const TABS: { id: Tab; label: string }[] = [
    { id: "what", label: "What Is Spiritual Formation?" },
    { id: "teachers", label: "Great Teachers" },
    { id: "practices", label: "Core Practices" },
    { id: "stages", label: "Stages of Formation" },
  ];

  const currentTeacher = TEACHERS.find(t => t.id === selectedTeacher) ?? TEACHERS[0];

  const filteredPractices = selectedCategory === "All"
    ? PRACTICES
    : PRACTICES.filter(p => p.category === selectedCategory);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 10, letterSpacing: -0.5 }}>Spiritual Formation</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            The ancient process of becoming more like Jesus — not by trying harder, but by training well. A comprehensive guide to the tradition, teachers, practices, and stages of Christian transformation.
          </p>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 4, marginBottom: 36, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                minWidth: 120,
                padding: "10px 12px",
                borderRadius: 8,
                border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                transition: "background 0.15s",
                whiteSpace: "nowrap",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── Tab 1: What Is Spiritual Formation? ── */}
        {activeTab === "what" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "8px 0", marginBottom: 8 }}>
              {ACCORDION_ITEMS.map((item, idx) => (
                <div key={item.id}>
                  {idx > 0 && <div style={{ height: 1, background: BORDER, margin: "0 20px" }} />}
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      color: TEXT,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "18px 22px",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: 16 }}>{item.title}</span>
                    <span style={{
                      color: GREEN,
                      fontSize: 20,
                      fontWeight: 300,
                      transform: expanded[item.id] ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                      flexShrink: 0,
                      marginLeft: 12,
                    }}>
                      +
                    </span>
                  </button>
                  {expanded[item.id] && (
                    <div style={{ padding: "0 22px 20px", color: MUTED, fontSize: 15, lineHeight: 1.8 }}>
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Tab 2: Great Teachers ── */}
        {activeTab === "teachers" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            {/* Left list */}
            <div style={{ width: 220, flexShrink: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              {TEACHERS.map(t => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTeacher(t.id)}
                  style={{
                    background: selectedTeacher === t.id ? CARD : "transparent",
                    border: `1px solid ${selectedTeacher === t.id ? PURPLE : BORDER}`,
                    borderRadius: 10,
                    padding: "12px 14px",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "border-color 0.15s",
                  }}
                >
                  <div style={{ color: selectedTeacher === t.id ? TEXT : MUTED, fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{t.years}</div>
                </button>
              ))}
            </div>

            {/* Right detail — sticky */}
            <div style={{ flex: 1, position: "sticky", top: 20 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 20 }}>
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: `${PURPLE}22`,
                    border: `1px solid ${PURPLE}44`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: PURPLE,
                    fontWeight: 900,
                    fontSize: 18,
                    flexShrink: 0,
                  }}>
                    {currentTeacher.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <h2 style={{ fontSize: 22, fontWeight: 900, margin: 0, marginBottom: 3 }}>{currentTeacher.name}</h2>
                    <div style={{ color: MUTED, fontSize: 13 }}>{currentTeacher.role} &nbsp;·&nbsp; {currentTeacher.years}</div>
                  </div>
                </div>

                {/* Key contribution */}
                <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 8, padding: "10px 14px", marginBottom: 18 }}>
                  <span style={{ color: GREEN, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.8 }}>Key Contribution</span>
                  <div style={{ color: TEXT, fontSize: 14, marginTop: 4 }}>{currentTeacher.contribution}</div>
                </div>

                {/* Books */}
                <div style={{ marginBottom: 18 }}>
                  <div style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 8 }}>Central Works</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    {currentTeacher.books.map(book => (
                      <div key={book} style={{ color: TEXT, fontSize: 14, display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <span style={{ color: PURPLE, marginTop: 3, flexShrink: 0 }}>▸</span>
                        <span>{book}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <div style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 10 }}>Approach</div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, margin: 0 }}>{currentTeacher.bio}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Tab 3: Core Practices ── */}
        {activeTab === "practices" && (
          <div>
            {/* Category filter */}
            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              <button
                onClick={() => setSelectedCategory("All")}
                style={{
                  padding: "7px 16px",
                  borderRadius: 20,
                  border: `1px solid ${selectedCategory === "All" ? GREEN : BORDER}`,
                  background: selectedCategory === "All" ? `${GREEN}15` : CARD,
                  color: selectedCategory === "All" ? GREEN : MUTED,
                  fontWeight: 700,
                  fontSize: 12,
                  cursor: "pointer",
                }}
              >
                All
              </button>
              {PRACTICE_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: "7px 16px",
                    borderRadius: 20,
                    border: `1px solid ${selectedCategory === cat ? CATEGORY_COLORS[cat] : BORDER}`,
                    background: selectedCategory === cat ? `${CATEGORY_COLORS[cat]}15` : CARD,
                    color: selectedCategory === cat ? CATEGORY_COLORS[cat] : MUTED,
                    fontWeight: 700,
                    fontSize: 12,
                    cursor: "pointer",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Card grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
              {filteredPractices.map(practice => {
                const color = CATEGORY_COLORS[practice.category];
                return (
                  <div
                    key={`${practice.category}-${practice.name}`}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      padding: 18,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <span style={{
                      background: `${color}15`,
                      color: color,
                      padding: "3px 10px",
                      borderRadius: 10,
                      fontSize: 11,
                      fontWeight: 700,
                      alignSelf: "flex-start",
                    }}>
                      {practice.category}
                    </span>
                    <div style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{practice.name}</div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{practice.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Tab 4: Stages of Formation ── */}
        {activeTab === "stages" && (
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{
              position: "absolute",
              left: 27,
              top: 28,
              bottom: 28,
              width: 2,
              background: BORDER,
              zIndex: 0,
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {STAGES.map((stage, idx) => (
                <div key={stage.number} style={{ display: "flex", gap: 20, position: "relative", paddingBottom: idx < STAGES.length - 1 ? 28 : 0 }}>
                  {/* Circle */}
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: `${stage.color}18`,
                    border: `2px solid ${stage.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: stage.color,
                    fontWeight: 900,
                    fontSize: 20,
                    flexShrink: 0,
                    zIndex: 1,
                    position: "relative",
                  }}>
                    {stage.number}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22, marginTop: 4 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
                      <h3 style={{ color: stage.color, fontWeight: 900, fontSize: 20, margin: 0 }}>{stage.name}</h3>
                      <span style={{ color: MUTED, fontSize: 13 }}>{stage.subtitle}</span>
                    </div>

                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, margin: "0 0 14px" }}>{stage.description}</p>

                    <div>
                      <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 8 }}>Markers</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {stage.markers.map(marker => (
                          <span
                            key={marker}
                            style={{
                              background: `${stage.color}10`,
                              border: `1px solid ${stage.color}30`,
                              color: stage.color,
                              padding: "3px 10px",
                              borderRadius: 10,
                              fontSize: 12,
                              fontWeight: 600,
                            }}
                          >
                            {marker}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
