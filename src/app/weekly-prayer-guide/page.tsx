"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const DAYS = [
  {
    day: "Sunday",
    short: "SUN",
    color: "#F59E0B",
    theme: "The Church & Worship",
    verse: "Psalm 122:1",
    opening: "Lord, on this day when your people gather around the world — in Kampala and Kinshasa, in Seoul and São Paulo, in small house churches and great cathedrals — we remember that we are not alone. The church is your body, your bride. Help us to worship in spirit and in truth today.",
    prompts: [
      { title: "Adoration", text: "Praise God for what the church is — the body of Christ, called out of darkness. Name specific attributes of God you want to worship today." },
      { title: "For Your Church Family", text: "Pray by name for 2-3 people in your church. What do you know of their needs? Their struggles? Their joys? Bring them specifically to God." },
      { title: "For Your Pastor(s)", text: "Pray for the one(s) who will preach today. Ask for clarity, unction, courage to preach the whole counsel of God. Pray for their family." },
      { title: "For the Global Church", text: "Pray for one country where the church is under pressure. (Open Doors: opendoorsusa.org/pray). Ask God to strengthen believers there." },
      { title: "Confession", text: "Is there anything that would hinder authentic worship today? Bring it honestly. Receive the assurance: there is now no condemnation for those in Christ (Romans 8:1)." },
    ],
    closing: "Send us from worship today not just informed but transformed. Let what we receive in word and sacrament overflow into the week ahead.",
  },
  {
    day: "Monday",
    short: "MON",
    color: "#3B82F6",
    theme: "Work & Vocation",
    verse: "Colossians 3:23",
    opening: "Lord, you are Lord of all of life — not just Sundays. Meet me here, at the beginning of the work week. Help me to work as for you and not for human masters — with diligence, integrity, and genuine care for those I serve alongside.",
    prompts: [
      { title: "Surrender the Week", text: "Name your week's major tasks, responsibilities, or challenges. Give each one to God: 'This belongs to you.' Ask for his purposes to govern your schedule." },
      { title: "Pray for Colleagues", text: "Pray by name for 2-3 people you work with. Who needs Christ? Who needs encouragement? Who is under pressure? Ask God to make you a blessing to them specifically." },
      { title: "Integrity Prayer", text: "Ask for specific integrity in the temptations most common in your work: cutting corners, taking credit, treating people as means, compromising on truth. Name the specific one most relevant to your situation." },
      { title: "For the Unemployed and Underemployed", text: "Pray for those who want to work but cannot find meaningful work, or who are working jobs far below their capacity. Ask God to provide, sustain their dignity, and open doors." },
      { title: "Vocational Clarity", text: "If you have questions about your calling, work, or direction — bring them honestly. 'Lord, I don't know if this is where I should be. Show me.' Rest in not needing to know everything today." },
    ],
    closing: "Whatever my hands find to do today, let me do it well — not for approval or security, but as an offering to you.",
  },
  {
    day: "Tuesday",
    short: "TUE",
    color: PURPLE,
    theme: "Family & Relationships",
    verse: "Ephesians 3:14-15",
    opening: "Lord, you are Father — the source of all fatherhood and motherhood and family. Every family in existence derives its name and nature from you. In my own family — broken or whole, close or distant — let your love be present and formative.",
    prompts: [
      { title: "Pray for Your Family", text: "Name every member of your immediate family. For each one: what is one specific thing they need from God right now? Bring it. For each one: is there anything between you that needs confession or repair?" },
      { title: "For Marriage (If Applicable)", text: "Pray for your spouse specifically — for their spiritual life, their burdens, their particular needs this week. Ask to be the kind of spouse they need, not the kind you wish they were." },
      { title: "For Children (If Applicable)", text: "Pray for your children by name — for their faith, their formation, their struggles, their friendships, their sense of identity in Christ. Ask for wisdom in parenting them specifically, not generically." },
      { title: "For Difficult Relationships", text: "Name one relationship that is genuinely hard right now. Don't justify yourself or condemn them. Simply bring the relationship to God and ask: what would you have me do?" },
      { title: "For the Lonely", text: "Pray for people you know who are isolated — widows, divorced persons, empty-nesters, those far from family. Ask God how you might be a presence of community to someone specific." },
    ],
    closing: "Let my closest relationships be the place where I practice most honestly what I profess most loudly. Let me be, in my family, what I say I believe.",
  },
  {
    day: "Wednesday",
    short: "WED",
    color: "#10B981",
    theme: "Evangelism & the Lost",
    verse: "Romans 10:14-15",
    opening: "Lord, how beautiful on the mountains are the feet of those who bring good news. There are people near me today who do not know you — colleagues, neighbors, friends, family members. Give me eyes to see them. Give me love that makes me willing to be awkward for the gospel.",
    prompts: [
      { title: "Name Specific People", text: "Name 3-5 people in your life who don't know Jesus. Pray for each one by name. What do you know about their lives, needs, and objections? Ask God to prepare their hearts and to give you an opportunity." },
      { title: "For Boldness", text: "Honestly confess the fear or awkwardness you feel about sharing the gospel. Ask for the specific courage you need — not abstract boldness but the ability to say the one thing to the one person you've been avoiding." },
      { title: "For the Unreached", text: "Pray for one unreached people group (joshuaproject.net for specifics). Pray for the 40% of the world's population who have no access to the gospel within their cultural context — no church they could attend, no Christian they know." },
      { title: "For Evangelistic Opportunities This Week", text: "Ask God to create one specific opportunity to share your faith or bear witness this week. Ask for eyes to see it when it comes." },
      { title: "For Those Who Are Close", text: "Pray for anyone you know who seems near to faith — asking questions, attending church, reading. Ask God to bring them across the threshold." },
    ],
    closing: "Lord, let me see people the way you see them — not as projects but as people you love and died for. Let my love for them be real enough to make me willing to speak.",
  },
  {
    day: "Thursday",
    short: "THU",
    color: "#EF4444",
    theme: "The World & Its Leaders",
    verse: "1 Timothy 2:1-2",
    opening: "Lord, you are the King of kings and Lord of lords — every earthly authority exists under your sovereignty and by your permission. I pray for the world you made and the nations you love, that all peoples would come to know you.",
    prompts: [
      { title: "For National Leaders", text: "Pray for your nation's leaders by name — president, prime minister, elected officials. Not for their policies specifically but for their souls, their wisdom, their integrity. Paul commands this prayer for the Nero who was persecuting Christians." },
      { title: "For Justice", text: "Pray for justice in one specific situation — a country where oppression is severe, a court case you know about, a community facing injustice. Ask for God's righteousness to roll down like waters." },
      { title: "For War-Torn Nations", text: "Pray for one country currently experiencing armed conflict. Ask for ceasefire, protection of civilians, and the gospel to reach people in crisis. Many of the fastest-growing church movements in history have happened during conflict." },
      { title: "For Refugees and the Displaced", text: "UNHCR estimates over 100 million displaced people globally. Pray for refugees — for safety, dignity, provision, and encounters with the church. Ask God how you and your church might respond." },
      { title: "For the Church's Witness in Culture", text: "Pray for Christians in politics, media, business, academia, and the arts — that they would be faithful and distinctive, not merely functional. Ask for the courage of Daniel, who served Babylon faithfully without becoming Babylonian." },
    ],
    closing: "You are writing history. Help me to read it well — to grieve rightly, to hope truly, and to act faithfully in the small corner of the world you've put me in.",
  },
  {
    day: "Friday",
    short: "FRI",
    color: "#A855F7",
    theme: "Personal Confession & Renewal",
    verse: "1 John 1:9",
    opening: "Lord, as the week ends and I look back — where have I failed you? Where have I failed others? Where have I pursued my own kingdom rather than yours? I come not to grovel but to be honest, because you already know, and because your forgiveness is real.",
    prompts: [
      { title: "Honest Inventory", text: "Walk through the week: Monday through today. Where did you sin in action? In thought? In what you said? In what you didn't say? In what you didn't do? Don't rush this. Be specific." },
      { title: "Receive Forgiveness", text: "For each thing you named: hear the word of the cross. He was wounded for our transgressions. If we confess our sins, he is faithful and just to forgive us and cleanse us from all unrighteousness. Receive it. Don't add to it." },
      { title: "Where I Need Help", text: "What recurring struggle did this week reveal? Name the pattern, not just the instance. Ask for specific grace and wisdom for next week. Ask if there's a person who could help you be accountable." },
      { title: "Gratitude for the Week", text: "Name 3-5 specific things you're grateful for from the past week. Not generic ('my health, my family') but specific — a conversation, a moment, an unexpected kindness, a prayer answered." },
      { title: "Rest and Sabbath Preparation", text: "Is there a Sabbath practice you're planning? Ask God to help you actually stop — to trust that the world will continue without your management of it. 'The Sabbath is made for humans, not humans for the Sabbath.' Rest in that." },
    ],
    closing: "You are faithful. Your mercies are new every morning. I receive them now, at the end of this week, and I rest in the finished work of the cross.",
  },
  {
    day: "Saturday",
    short: "SAT",
    color: "#00D4AA",
    theme: "Sabbath & Rest / Community",
    verse: "Hebrews 4:9-10",
    opening: "Lord, you rested on the seventh day — not because you were tired, but to model for us the rhythm you designed into creation. Help me to rest today in a way that honors you: ceasing from striving, receiving your provision, enjoying what you have given.",
    prompts: [
      { title: "Cease From Striving", text: "Name one thing you are anxious to control, fix, or manage. Give it to God explicitly: 'I am not working on this today. I trust you with it.' Practice the faith that says the world does not depend on me." },
      { title: "Enjoyment as Worship", text: "What is something genuinely good that you can enjoy today — family, food, creation, beauty, friendship? Name it and receive it as gift. The Westminster Shorter Catechism: the chief end of human beings is to glorify God and enjoy him forever." },
      { title: "For Those Who Cannot Rest", text: "Pray for those who have no Sabbath — workers in unjust conditions, caregivers without relief, the desperately poor, those in crisis. Ask how your rest might somehow bless those who cannot rest." },
      { title: "Preparing for Sunday", text: "Is there anything between you and genuine worship tomorrow? A relationship unrepaired? An attitude that will make you go through motions? Attend to it today, before Sunday. Preparation is part of worship." },
      { title: "Thankfulness for the Week's Good", text: "Let your mind drift through the week that's ending. What was genuinely good? What was a gift from God? Let your review be more gratitude than evaluation. You are not your productivity." },
    ],
    closing: "Let today be a taste of the eternal Sabbath — the rest of completion, the rest of arrival, the rest of those who have reached home. You are that rest.",
  },
];

type Tab = "guide" | "voices" | "methods" | "corporate" | "videos";

const VOICES_PRAYER = [
  {
    id: "foster",
    name: "Richard Foster",
    era: "b. 1942",
    context: "Quaker author; Celebration of Discipline (1978)",
    bio: "Foster's Celebration of Discipline — which has sold over a million copies — treats prayer as one of twelve spiritual disciplines, situated within a life of inward, outward, and corporate practices. He distinguishes between simple prayer (honest conversation with God), prayer of examination, intercessory prayer, contemplative prayer, and liturgical prayer. His central conviction: prayer is not a technique but a relationship, and like all relationships it requires time, vulnerability, and practice.",
    quote: "To pray is to change. Prayer is the central avenue God uses to transform us. If we are unwilling to change, we will abandon prayer as a noticeable characteristic of our lives.",
    contribution: "Made the classical tradition of prayer accessible to evangelical Protestants who had no language for contemplation, fixed-hour prayer, or embodied spiritual practices. Celebration of Discipline sparked a generation of spiritual formation literature."
  },
  {
    id: "bounds",
    name: "E.M. Bounds",
    era: "1835-1913",
    context: "Confederate chaplain turned Methodist pastor; prolific writer on prayer",
    bio: "Bounds reportedly rose at 4am every morning to pray for three hours before beginning his day. He wrote eight books on prayer, all published posthumously, the most famous being Power Through Prayer (originally titled Preacher and Prayer). His argument is relentlessly simple: the church's lack of power is a prayer problem. Every reformation, revival, and advance of the gospel has been preceded and sustained by prayer. Preachers who do not pray cannot preach with power; churches that do not pray cannot grow in grace.",
    quote: "The man who mobilizes the Christian church to pray will make the greatest contribution to world evangelization in history.",
    contribution: "Made prayer the central accountability question for ministry and spiritual seriousness. His focus on volume, consistency, and early morning prayer has shaped evangelical prayer culture for more than a century."
  },
  {
    id: "merton",
    name: "Thomas Merton",
    era: "1915-1968",
    context: "Trappist monk; The Seven Storey Mountain; Contemplative Prayer",
    bio: "Merton entered the Abbey of Gethsemani in 1941 and spent the rest of his life in contemplative monastic community. His The Seven Storey Mountain (1948) was a sensation — a young intellectual choosing silence and prayer over the world. Contemplative Prayer is his most sustained treatment of what prayer becomes when stripped of everything but presence: not words to God but resting in God. He recovered the apophatic tradition — prayer as the surrender of concepts, images, and words to the bare presence of God.",
    quote: "Prayer is not only the 'lifting up of the mind and heart to God' but it is also the response to God within us, the discovery of God within us, the awakening of the divine life within us.",
    contribution: "Recovered contemplative prayer for a generation of Protestant readers who had no category for it. His influence crossed denominational lines and shaped figures as different as Henri Nouwen, Dallas Willard, and Eugene Peterson."
  },
  {
    id: "murray",
    name: "Andrew Murray",
    era: "1828-1917",
    context: "Dutch Reformed pastor, South Africa; With Christ in the School of Prayer",
    bio: "Murray's With Christ in the School of Prayer works through Jesus's teaching on prayer in the Gospels, passage by passage. His premise: the disciples asked Jesus to teach them to pray — the right question, and one we rarely ask with the same seriousness. Murray emphasized prevailing prayer (the kind that does not give up), the necessity of abiding in Christ as the prerequisite of effective prayer, and the connection between answered prayer and conformity to Christ's will.",
    quote: "The man who mobilizes the Christian church to pray will make the greatest contribution to world evangelization in history. I have so much to do that I shall spend the first three hours in prayer.",
    contribution: "Produced the most sustained biblical exposition of prayer as a discipline in the Protestant evangelical tradition. With Christ in the School of Prayer has never gone out of print and has shaped the prayer practices of more missionaries and pastors than almost any other book."
  },
  {
    id: "underhill",
    name: "Evelyn Underhill",
    era: "1875-1941",
    context: "Anglican laywoman; Mysticism (1911); The School of Prayer (1928)",
    bio: "Underhill was the first woman to lecture on theology at an Oxford college and one of the most important writers on prayer and mysticism in the 20th century. Her work retrieves the Christian mystical tradition — Meister Eckhart, Julian of Norwich, The Cloud of Unknowing — for ordinary Christians. She distinguished between the active and contemplative lives without pitting them against each other, and mapped the stages of the soul's journey toward union with God: awakening, purgation, illumination, dark night, and union.",
    quote: "Prayer, in its highest expression, is not asking for things. It is the soul's orientation toward God — a movement of the whole person toward the Source of all being.",
    contribution: "Made the Catholic mystical tradition accessible to Anglican and Protestant readers. Her mapping of the contemplative journey has become standard reference material for spiritual directors and anyone guiding others in prayer."
  }
];

const PRAYER_METHODS = [
  { name: "ACTS", icon: "🙏", color: GREEN, steps: ["Adoration — Begin by praising God for who he is, not for what he gives. Spend 2-3 minutes naming his attributes: holy, faithful, merciful, powerful, near.", "Confession — Bring specific sins honestly. Name them rather than hiding behind categories. Receive the assurance of 1 John 1:9 over each one.", "Thanksgiving — Name specific gifts from the past day or week. Be particular: not 'my health' but the meal, the conversation, the unexpected moment of grace.", "Supplication — Make your requests. For yourself, for others, for situations. This comes last, not first — shaped by adoration, cleared by confession, warmed by gratitude."], time: "10-20 min" },
  { name: "The Examen", icon: "🪞", color: PURPLE, steps: ["Gratitude — Look back over the past 24 hours. What specific moments or gifts stand out? Give thanks for each one specifically.", "Awareness — Where did you sense God's presence? What consolations (movements toward God) did you experience? What desolations (movements away)?", "Review — Walk through your day honestly. Where did you fall short? Where did love fail? Where did fear govern instead of faith?", "Forgiveness — Bring what the review revealed. Receive forgiveness. This is not groveling — it is the honest exchange that keeps the relationship clean.", "Intention — Ask for what you need for tomorrow. For one specific grace. For eyes to see one specific opportunity."], time: "15-20 min" },
  { name: "Lectio Divina", icon: "📖", color: "#3B82F6", steps: ["Lectio (Read) — Read a short Scripture passage slowly, 2-3 times. Listen for a word or phrase that catches your attention. Don't analyze — just notice.", "Meditatio (Meditate) — Sit with the word or phrase that struck you. Let it resonate. How does it connect to your life right now? What is God saying?", "Oratio (Pray) — Respond to what you received in prayer. Let the text become conversation. Speak to God from what he spoke to you.", "Contemplatio (Contemplate) — Rest. Stop words and ideas. Simply be present to God. Not asking, not speaking — resting in the awareness of his presence."], time: "20-30 min" },
  { name: "The Jesus Prayer", icon: "☦️", color: "#F59E0B", steps: ["The prayer: 'Lord Jesus Christ, Son of God, have mercy on me, a sinner.' Eight words from the Eastern Orthodox tradition, rooted in Luke 18:13 and Psalm 51.", "Rhythm: Breathe in on 'Lord Jesus Christ, Son of God' — breathing in the name and nature of Christ. Breathe out on 'have mercy on me, a sinner' — releasing self into God's mercy.", "Repetition: The goal is not incantation but formation. As the prayer becomes habitual, it begins to reshape the interior life — turning the heart toward God in the gaps and ordinary moments of the day.", "History: The Prayer of the Heart has been practiced by Eastern Christians since the Desert Fathers. The Philokalia is the primary source. Its Western popularizer was the anonymous classic The Way of a Pilgrim (19th century Russia)."], time: "Any length" },
  { name: "Breath Prayer", icon: "💨", color: "#10B981", steps: ["Choose a short, personalized prayer — 6-8 syllables that fit your breathing rhythm. Classic: 'You are my strength' / 'Here I am, Lord.' Or from Scripture: 'Be still and know / that you are God.'", "Inhale on the first phrase, exhale on the second. Let the breathing itself become a form of prayer — the body participating in what the spirit intends.", "Use it in the spaces: waiting in line, commuting, transitioning between tasks. The goal is to turn ordinary moments into moments of orientation toward God.", "Personalize it: What is your deepest spiritual need right now? What truth do you most need to receive? Let your breath prayer address that need directly."], time: "Any length" },
  { name: "Fixed-Hour Prayer", icon: "⏰", color: "#EF4444", steps: ["Morning Prayer (Lauds): As the day begins. Includes psalms, a canticle, a Bible reading, the Lord's Prayer, and intercessions. Set the day's intention.", "Midday Prayer (Sext): A brief pause at noon. 2-3 psalms, a reading, a prayer. A reminder that God is Lord of the work hours, not just the devotional ones.", "Vespers (Evening Prayer): As the day ends. Longer — psalms, Magnificat (Luke 1:46-55), intercessions, confession. Review the day in God's presence.", "Compline (Night Prayer): Before bed. Brief and quiet — a psalm, a short reading, the Nunc Dimittis (Luke 2:29-32), a blessing. Entrust the night to God."], time: "5-20 min each" }
];

const CORPORATE = [
  { title: "Small Group Prayer", icon: "👥", color: "#3B82F6", desc: "Effective small group prayer is specific, short, and faith-filled — not performance, not catchup session, not therapy. Teach groups to: pray one topic at a time, keep individual prayers brief (under 60 seconds), respond to each other's prayers rather than moving to new topics, and include silence. Silence in corporate prayer is not awkwardness — it is space for the Spirit." },
  { title: "Responsive Liturgical Prayer", icon: "📜", color: PURPLE, desc: "The tradition of corporate prayer using fixed forms — the Book of Common Prayer, Lutheran liturgies, the Roman rite — has kept the church praying through centuries when individual motivation flagged. The congregation prays together what they could not have written alone. The liturgy carries the community through all the moods and seasons of the soul, whether or not any individual feels like praying that day." },
  { title: "24/7 Prayer", icon: "🌐", color: GREEN, desc: "The 24/7 Prayer movement, begun in Chichester, UK in 1999, challenges communities to maintain continuous prayer for 24 hours, 7 days a week, in 'boiler rooms' of intercession. The International House of Prayer (IHOP) in Kansas City has maintained night-and-day prayer since 1999. The concept is ancient — the Psalmist describes the Temple as a house of prayer; medieval monastic communities prayed through every hour. The rhythm is unusual; the theology is not." },
  { title: "Prayer Walking", icon: "🚶", color: "#F59E0B", desc: "Praying on foot through a specific neighborhood, city, or area — bringing intercession to bear on the physical space. Pray for what you see: the businesses, the schools, the homes, the people on the street. Prayer walking connects intercession to presence and cultivates awareness of the spiritual dimension of ordinary spaces. Groups of 2-3 work better than large groups — quieter, less conspicuous, more relational." },
  { title: "Corporate Fasting", icon: "⚡", color: "#EF4444", desc: "When a community fasts together, prayer intensifies because discomfort unites and focuses the community's attention. Biblical precedent: Nehemiah 9 (fasting and confession of national sin), Esther 4 (three days of corporate fasting before Esther's approach to the king), Acts 13 (fasting and worship before sending Paul and Barnabas). Corporate fasting should have a specific focus, defined duration, and shared times of prayer — not just individual abstinence from food." },
  { title: "Intercessory Prayer Teams", icon: "🛡️", color: "#10B981", desc: "Structured teams of intercessors who pray systematically for: the congregation's specific prayer requests, the leadership of the church, the surrounding community, global mission partners, and ongoing spiritual warfare. The most effective prayer teams meet weekly, use a shared prayer list updated regularly, and report answered prayers back to the congregation — building corporate faith that prayer matters." }
];

export default function WeeklyPrayerGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_weekly-prayer-guide_tab", "guide");
  const [selectedDay, setSelectedDay] = usePersistedState("vine_weekly-prayer-guide_selected_day", "Sunday");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_weekly-prayer-guide_voice", "foster");
  const day = DAYS.find(d => d.day === selectedDay)!;
  const voiceItem = VOICES_PRAYER.find(v => v.id === selectedVoice)!;

  const TABS: { id: Tab; label: string; icon: string }[] = [
    { id: "guide", label: "Weekly Guide", icon: "🗓️" },
    { id: "voices", label: "Voices on Prayer", icon: "💬" },
    { id: "methods", label: "Methods", icon: "🙏" },
    { id: "corporate", label: "Corporate Prayer", icon: "👥" },
    { id: "videos", label: "Videos", icon: "🎬" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🗓️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Weekly Prayer Guide</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            {DAYS.length} days, {DAYS.length} themes — a structured pattern of prayer that moves from worship on Sunday through work, family, evangelism, the world, confession, and rest. Pick today and begin.
          </p>
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {TABS.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13, background: activeTab === tab.id ? GREEN : "transparent", color: activeTab === tab.id ? BG : MUTED, transition: "all 0.15s" }}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "guide" && (
          <>
            <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
              {DAYS.map(d => (
                <button key={d.day} onClick={() => setSelectedDay(d.day)}
                  style={{ flex: "1 1 80px", padding: "12px 8px", borderRadius: 10, border: `1px solid ${selectedDay === d.day ? d.color : BORDER}`, background: selectedDay === d.day ? `${d.color}20` : CARD, cursor: "pointer", textAlign: "center" }}>
                  <div style={{ color: selectedDay === d.day ? d.color : MUTED, fontWeight: 900, fontSize: 10, marginBottom: 2 }}>{d.short}</div>
                  <div style={{ color: selectedDay === d.day ? d.color : TEXT, fontWeight: 700, fontSize: 12 }}>{d.day}</div>
                </button>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${day.color}30`, borderRadius: 16, padding: 32 }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
                <div>
                  <div style={{ color: day.color, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>{day.day.toUpperCase()}</div>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 26, margin: "0 0 4px" }}>{day.theme}</h2>
                  <div style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600, display: "inline-block" }}><VerseRef reference={day.verse} /></div>
                </div>
              </div>

              <div style={{ background: `${day.color}08`, border: `1px solid ${day.color}20`, borderRadius: 10, padding: 18, marginBottom: 24 }}>
                <div style={{ color: day.color, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>OPENING PRAYER</div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>{day.opening}</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {day.prompts.map((p, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 6, background: `${day.color}20`, border: `1px solid ${day.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: day.color, fontWeight: 900, fontSize: 13, flexShrink: 0 }}>
                        {i + 1}
                      </div>
                      <div style={{ color: day.color, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                    </div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{p.text}</p>
                  </div>
                ))}
              </div>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18, marginTop: 20 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>CLOSING PRAYER</div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>{day.closing}</p>
              </div>
            </div>
          </>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {VOICES_PRAYER.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ width: "100%", background: selectedVoice === v.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedVoice === v.id ? PURPLE + "80" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedVoice === v.id ? TEXT : MUTED, fontWeight: 700, fontSize: 13 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 18 }}>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, marginBottom: 4 }}>{voiceItem.name}</h2>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{voiceItem.era}</span>
                    <span style={{ background: `${GREEN}15`, color: GREEN, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{voiceItem.context}</span>
                  </div>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>LIFE & TEACHING</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{voiceItem.bio}</p>
                </div>
                <div style={{ background: BG, borderLeft: `3px solid ${PURPLE}`, borderRadius: "0 10px 10px 0", padding: 18, marginBottom: 18 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>CHARACTERISTIC QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "methods" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {PRAYER_METHODS.map(m => (
              <div key={m.name} style={{ background: CARD, border: `1px solid ${m.color}30`, borderRadius: 14, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontSize: 28 }}>{m.icon}</span>
                  <div>
                    <h3 style={{ color: m.color, fontWeight: 900, fontSize: 18, margin: 0 }}>{m.name}</h3>
                    <span style={{ background: `${m.color}15`, color: m.color, padding: "1px 8px", borderRadius: 6, fontSize: 11, fontWeight: 700 }}>{m.time}</span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {m.steps.map((step, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, background: BG, borderRadius: 8, padding: 14 }}>
                      <div style={{ width: 22, height: 22, borderRadius: "50%", background: `${m.color}20`, border: `1px solid ${m.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: m.color, fontWeight: 800, fontSize: 11, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "corporate" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {CORPORATE.map(c => (
              <div key={c.title} style={{ background: CARD, border: `1px solid ${c.color}30`, borderRadius: 14, padding: 22 }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{c.icon}</div>
                <h3 style={{ color: c.color, fontWeight: 900, fontSize: 16, marginBottom: 10 }}>{c.title}</h3>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings on prayer — how to pray, why we pray, and how prayer shapes the Christian life.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "d6eqCIGhOxw", title: "The Lord's Prayer — Explained by John Piper", channel: "Desiring God (John Piper)", description: "John Piper unpacks Matthew 6:9–13 phrase by phrase — revealing why Jesus gave us this model prayer and what each petition demands from our lives." },
                  { videoId: "V-_lmGR9EdE", title: "Teach Us to Pray", channel: "Desiring God (John Piper)", description: "A four-minute devotional by John Piper on the Lord's Prayer — rehearsing the most profound and familiar words ever spoken and helping us pray them with fresh depth." },
                  { videoId: "IvWmwvdJ-mU", title: "How to Pray: Prayer with R.C. Sproul", channel: "Ligonier Ministries", description: "R.C. Sproul explores how prayer is far more than casual conversation — it is an audience with the King, and how we approach it reveals what we believe about God." },
                  { videoId: "ZYmk3DiPJVI", title: "Desiring God Through Fasting and Prayer", channel: "Desiring God (John Piper)", description: "John Piper on fasting and prayer as disciplines that train the soul to want God more than comfort — essential teaching for anyone seeking to deepen their prayer life." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
