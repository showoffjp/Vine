"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "sermons" | "categories" | "how-to-listen" | "voices";

const ERA_FILTERS = ["All", "Puritan & Colonial", "19th Century", "20th Century", "Contemporary"];

const SERMONS = [
  {
    title: "Sinners in the Hands of an Angry God",
    preacher: "Jonathan Edwards",
    year: 1741,
    era: "Puritan & Colonial",
    color: "#EF4444",
    location: "Enfield, Connecticut",
    theme: "The wrath of God and the urgency of repentance",
    description: "Preached on July 8, 1741 during the Great Awakening, this is arguably the most famous sermon in American history. Edwards read quietly from notes while the congregation wept, screamed, and clung to the church pews. The imagery — of sinners as spiders dangling over a lake of fire, held only by the mercy of God — was meant not to terrorize but to awaken. The sermon triggered mass conversions across New England.",
    key_quote: "The God that holds you over the pit of hell, much as one holds a spider or some loathsome insect over the fire, abhors you, and is dreadfully provoked; his wrath towards you burns like fire; he looks upon you as worthy of nothing else, but to be cast into the fire.",
    why_significant: "Represents the theological and rhetorical height of the Great Awakening. Edwards was not a ranter but a philosopher-pastor — the emotional response came not from theatrical delivery but from the weight of biblical truth presented with absolute clarity.",
    find_it: "Yale Jonathan Edwards Center: edwards.yale.edu — full text free online",
    initials: "SHG",
  },
  {
    title: "The Expulsive Power of a New Affection",
    preacher: "Thomas Chalmers",
    year: 1817,
    era: "19th Century",
    color: GREEN,
    location: "Glasgow, Scotland",
    theme: "How love for God displaces love for the world",
    description: "Chalmers argued that you cannot remove a sinful affection by mere willpower — the heart abhors a vacuum. The only way to expel love of the world is to replace it with a greater love: love for God. The sermon is a masterwork of theological psychology, anticipating by two centuries what behavioral science now calls habit replacement. It remains one of the most frequently cited sermons in all of church history.",
    key_quote: "The heart is not so constituted that the mere absence of one object leaves it without any object at all... The only way to dispossess the heart of an old affection is by the expulsive power of a new one.",
    why_significant: "Provides the theological foundation for why sanctification cannot be reduced to willpower. Essential reading for anyone struggling with besetting sin — and for anyone who counsels others in spiritual formation.",
    find_it: "Full text available free at monergism.com and desiringgod.org",
    initials: "EXP",
  },
  {
    title: "The Love of God",
    preacher: "Charles Spurgeon",
    year: 1874,
    era: "19th Century",
    color: PURPLE,
    location: "Metropolitan Tabernacle, London",
    theme: "The boundless, particular love of God for sinners",
    description: "Spurgeon preached over 3,600 sermons, all of which are available in print. His sermon on John 3:16 — possibly preached multiple times in different forms — stands as his greatest exposition of the love of God. Spurgeon spoke to audiences of 5,000-10,000 weekly without amplification, and his printed sermons were the most widely distributed religious literature of the Victorian era.",
    key_quote: "I do not know how to measure the love of God. It is measureless. 'God so loved the world' — the word 'so' contains an ocean of meaning; no man has ever plumbed its depths.",
    why_significant: "Spurgeon combined Calvinist theology with evangelical passion in a way rarely seen before or since. His sermons remain arguably the greatest English-language preaching in history — warm, theologically precise, and evangelistically urgent.",
    find_it: "All 3,600+ sermons available free at spurgeongems.org and the Spurgeon Center at Midwestern Seminary",
    initials: "LOG",
  },
  {
    title: "One Thing Thou Lackest",
    preacher: "D.L. Moody",
    year: 1880,
    era: "19th Century",
    color: "#F59E0B",
    location: "London / Chicago evangelistic campaigns",
    theme: "Total surrender and the cost of following Christ",
    description: "Moody — an uneducated shoe salesman who became the Billy Graham of the 19th century — preached to an estimated 100 million people across his career. His signature message was total surrender: that most who called themselves Christians had never truly yielded all to God. Preached at his Northfield conferences and both London and American campaigns, this message triggered some of the largest documented mass conversions of the 19th century.",
    key_quote: "The world has yet to see what God can do with a man fully consecrated to Him. By God's grace I will be that man.",
    why_significant: "Moody defined mass evangelism for the modern era. His methods — large-scale campaigns, trained inquiry workers, follow-up — became the template Billy Graham would perfect 80 years later.",
    find_it: "Available via Moody Publishers and the Moody Bible Institute digital archives at moody.edu",
    initials: "OTL",
  },
  {
    title: "The Second Coming of Christ",
    preacher: "Billy Sunday",
    year: 1910,
    era: "19th Century",
    color: "#10B981",
    location: "Nationwide revival campaigns",
    theme: "Eschatology and urgency of salvation",
    description: "Billy Sunday was the most flamboyant preacher of the early 20th century — a former professional baseball player who used athletic theatrics to preach biblical truth. His campaigns in New York, Chicago, and Philadelphia drew millions. His preaching on eschatology combined pre-millennialism with urgent evangelistic appeal.",
    key_quote: "One of these days you are going to hear that Billy Sunday is dead. Don't you believe it. I will be more alive than I have ever been.",
    why_significant: "Sunday bridged the Victorian evangelicalism of Moody with the 20th-century mass media age, and his campaigns produced documented social transformation — saloons closed, crime dropped, charitable giving increased in cities where he preached.",
    find_it: "Sermon manuscripts at the Billy Sunday Papers, Grace College & Seminary — bgc.gospelcom.net",
    initials: "SCC",
  },
  {
    title: "Christ the Power of God and the Wisdom of God",
    preacher: "Martyn Lloyd-Jones",
    year: 1963,
    era: "20th Century",
    color: "#3B82F6",
    location: "Westminster Chapel, London",
    theme: "The centrality of Christ crucified in all preaching",
    description: "Lloyd-Jones preached at Westminster Chapel for 30 years. This sermon from his series on 1 Corinthians represents his magnum opus approach: that the entire Christian enterprise depends on the proclamation of Christ crucified — and that attempts to make Christianity more palatable by softening this message are the root cause of the church's decline. Lloyd-Jones was as much a physician-diagnostician as he was a preacher.",
    key_quote: "The glory of the gospel is this: God does not wait for us to become good before He loves us. He loves us in our sin and sends His Son to save us.",
    why_significant: "Lloyd-Jones diagnosed the theological collapse of mainline Christianity in the 20th century with prophetic accuracy. His preaching — available in hundreds of hours of audio — remains the standard by which expository preaching is judged.",
    find_it: "Available at mljtrust.org — hundreds of sermons in audio and text, many free",
    initials: "CPW",
  },
  {
    title: "Why God Allows Suffering",
    preacher: "Billy Graham",
    year: 1957,
    era: "20th Century",
    color: "#F59E0B",
    location: "Madison Square Garden, New York",
    theme: "Theodicy and hope in the midst of pain",
    description: "Billy Graham's 1957 New York crusade ran for 16 weeks and drew over 2 million attendees. His preaching on suffering — delivered during Cold War anxiety — addressed the most pressing human question with biblical directness. Graham never claimed to have all the answers; his power came from pointing to Christ as the answer sufficient for all suffering.",
    key_quote: "God is enough — not just for you, but for the world. When we have exhausted all of our resources and strength, we discover that God is our greatest resource and our ultimate strength.",
    why_significant: "Graham's crusades produced over 3 million documented decisions for Christ across his career. His straightforward, non-speculative, Christ-centered preaching style remains a model of mass evangelism.",
    find_it: "Hundreds of sermons available at billygraham.org/watch — many on YouTube via Billy Graham Evangelistic Association",
    initials: "WGS",
  },
  {
    title: "Don't Waste Your Life",
    preacher: "John Piper",
    year: 2000,
    era: "Contemporary",
    color: GREEN,
    location: "Bethlehem Baptist Church, Minneapolis",
    theme: "Living for eternity rather than comfort",
    description: "Based on his book of the same name, Piper's message draws from the life of Paul and from the testimony of missionary martyrs — particularly Jim Elliot — to challenge comfortable, suburban Christianity. The core argument: God is most glorified in us when we are most satisfied in Him, and this satisfaction must issue in radical, costly living rather than middle-class comfort-seeking.",
    key_quote: "He is no fool who gives what he cannot keep to gain what he cannot lose. — Jim Elliot, quoted by Piper. God created you to live with a single, all-embracing, all-transforming passion — namely, a passion to glorify God by enjoying and displaying his supreme excellence in all the spheres of your life.",
    why_significant: "This message and book triggered a generation of missionaries, church planters, and radically devoted Christians in the early 21st century. Piper's Desiring God theological vision has shaped more Reformed Christians since 2000 than virtually any other single ministry.",
    find_it: "Available free at desiringgod.org — full audio and text; also on YouTube via Desiring God channel",
    initials: "DWL",
  },
  {
    title: "Shocking Youth Message",
    preacher: "Paul Washer",
    year: 2002,
    era: "Contemporary",
    color: "#EF4444",
    location: "Southern Baptist Youth Conference, Birmingham, Alabama",
    theme: "The nature of genuine conversion and false assurance",
    description: "Delivered to approximately 5,000 youth at a Southern Baptist conference, this sermon immediately went viral (for 2002) and remains one of the most-watched Christian sermons in internet history. Washer challenged the easy-believism of American youth ministry — the idea that saying a prayer makes one a Christian — and called young people to examine themselves to see whether they are truly in the faith.",
    key_quote: "You think because you walked an aisle, because you prayed a prayer... I want to tell you: that is not what makes you a Christian. What makes you a Christian is that God has regenerated you, given you a new heart, the Holy Spirit dwells within you, and you are being led by the Spirit of God.",
    why_significant: "The sermon catalyzed a reform movement in American evangelical youth ministry away from entertainment-based ministry toward serious discipleship. Washer has since preached this same basic message worldwide through HeartCry Missionary Society.",
    find_it: "Full sermon on YouTube via HeartCry Missionary Society; heartcrymissionary.com",
    initials: "SYM",
  },
  {
    title: "The Prodigal God",
    preacher: "Tim Keller",
    year: 2003,
    era: "Contemporary",
    color: PURPLE,
    location: "Redeemer Presbyterian Church, New York City",
    theme: "The two sons, the two errors, and the reckless love of the Father",
    description: "Keller's exposition of the Parable of the Prodigal Son — later expanded into a bestselling book — reframes the parable around two lost sons: the younger who sins obviously, and the elder who sins through self-righteousness. Keller argues that Western culture is full of elder brothers: people who use moral goodness as a bargaining chip with God rather than resting in grace. The parable is ultimately about the Father who runs.",
    key_quote: "It is not your badness that keeps you from God. It is your goodness. If you are trying to be good enough for God, you are as far from the Father as the elder brother who would not go in.",
    why_significant: "Keller defined Reformed urban ministry for the 21st century. His intellectual rigor, cultural engagement, and pastoral warmth made the gospel accessible to skeptical New Yorkers for three decades. His sermons reach millions annually through Gospel in Life.",
    find_it: "Hundreds of sermons free at gospelinlife.com; YouTube via Redeemer Presbyterian Church",
    initials: "TPG",
  },
  {
    title: "The Explicit Gospel",
    preacher: "Matt Chandler",
    year: 2010,
    era: "Contemporary",
    color: "#F59E0B",
    location: "The Village Church, Dallas, Texas",
    theme: "The full scope of the gospel — Creation to Consummation",
    description: "Chandler argues that the American church has reduced the gospel to a personal transaction — a ticket to heaven — and in doing so has lost the cosmic scope of what God is doing in history. The explicit gospel includes not just personal salvation but the renewal of all creation, the lordship of Christ over all things, and the participation of the church in God's redemptive mission.",
    key_quote: "The gospel is not: you sinned, Jesus died, now go to heaven. The gospel is: God made everything good, man broke everything, Jesus has come to fix everything — and you can participate in the fixing.",
    why_significant: "Chandler led The Village Church from 160 to 12,000+ members while maintaining theological depth and cultural relevance. His message on the explicit gospel became a rallying point for a generation seeking more than moralism.",
    find_it: "Full sermon archive at thevillagechurch.net; YouTube via The Village Church",
    initials: "TEG",
  },
  {
    title: "Radical: Taking Back Your Faith from the American Dream",
    preacher: "David Platt",
    year: 2008,
    era: "Contemporary",
    color: "#10B981",
    location: "Brook Hills Church, Birmingham, Alabama",
    theme: "The collision between the American Dream and the call of Christ",
    description: "Platt became pastor of Brook Hills at 26 and immediately began preaching against the prosperity and comfort of American Christianity. Drawing from his experiences in underground churches in Asia and persecuted communities worldwide, he challenged his congregation to sell, give, go, and risk. The resulting book sold over a million copies. He has since led the International Mission Board.",
    key_quote: "The American Dream is the greatest enemy of the gospel. Not because success is evil, but because we have redefined success in a way that completely ignores the kingdom of God.",
    why_significant: "The Radical series launched a conversation about radical Christian discipleship that has not stopped. Platt is one of the most effective preachers in contemporary American Christianity at holding global missions and theological depth together.",
    find_it: "David Platt sermons at davidplatt.org; also available via Radical.net and YouTube",
    initials: "RAD",
  },
];

const ERA_COLOR: Record<string, string> = {
  "Puritan & Colonial": "#EF4444",
  "19th Century": "#F59E0B",
  "20th Century": "#3B82F6",
  "Contemporary": GREEN,
};

const SERMON_CATEGORIES = [
  {
    id: 1,
    category: "Expository",
    icon: "📖",
    description: "Verse-by-verse exposition of a biblical text, allowing Scripture to set the structure and agenda of the sermon. The preacher serves as a guide through the passage rather than using Scripture to support a predetermined point. This is the dominant form in Reformed and Anglican traditions and has produced the most enduring sermon series in church history.",
    examples: ["Lloyd-Jones on Romans (14 years, Westminster Chapel)", "Spurgeon on Matthew's Gospel", "John MacArthur's 50-year verse-by-verse series through the New Testament"],
  },
  {
    id: 2,
    category: "Topical",
    icon: "🎯",
    description: "Organized around a theme, question, or life issue rather than a single text. Multiple Scriptures are drawn together to address a topic such as marriage, fear, money, or suffering. When done carefully, topical preaching provides comprehensive biblical treatment of a subject; when done poorly, it becomes proof-texting in service of the preacher's agenda.",
    examples: ["Tim Keller's cultural apologetics sermons on doubt and suffering", "Billy Graham's evangelistic crusade messages", "Rick Warren's Purpose Driven Life series"],
  },
  {
    id: 3,
    category: "Narrative",
    icon: "📜",
    description: "Follows the story arc of a biblical narrative — its tension, turning point, and resolution — allowing the sermon itself to feel like a story rather than a lecture. Pioneered in modern homiletice by Eugene Lowry and Eugene Peterson. Particularly effective with Old Testament narrative and the parables of Jesus. The risk is sentimentality; the reward is deep emotional and imaginative engagement.",
    examples: ["Tim Keller's Prodigal God sermon on Luke 15", "Frederick Buechner's narrative theology sermons", "Bryan Chapell's Christ-centered narrative preaching"],
  },
  {
    id: 4,
    category: "Evangelistic",
    icon: "✝️",
    description: "Specifically designed to present the gospel to unbelievers and call for a response of faith. Requires careful attention to the assumptions of the audience, clarity on the content of the gospel (creation, fall, redemption, restoration), and an honest, non-manipulative call to repentance and faith. The tradition runs from Whitefield and Wesley through Moody, Sunday, Graham, and Washer.",
    examples: ["Billy Graham's 'Why God Allows Suffering' (1957 NY Crusade)", "Paul Washer's Shocking Youth Message (2002)", "Jonathan Edwards' Sinners in the Hands of an Angry God (1741)"],
  },
  {
    id: 5,
    category: "Prophetic",
    icon: "🔥",
    description: "Speaks directly to cultural, political, and social realities from a biblical perspective — confronting injustice, idolatry, and apostasy with the clarity of Old Testament prophetic tradition. Not predictive prophecy, but a willingness to name what is wrong in the culture and the church and call for repentance. Requires courage and often produces opposition. Examples range from Amos preaching against the comfortable religion of Bethel to Wilberforce's allies thundering against the slave trade.",
    examples: ["Martin Luther King Jr.'s 'Letter from Birmingham Jail' (preached form)", "William Wilberforce's speeches framed as prophetic Christian address", "Dietrich Bonhoeffer's Berlin sermons against Nazi ideology"],
  },
  {
    id: 6,
    category: "Doctrinal",
    icon: "🏛️",
    description: "Systematic theological teaching structured as a sermon — designed to ground a congregation in the great doctrines of the Christian faith: the Trinity, the Incarnation, justification, sanctification, the resurrection, eschatology. Requires more of the listener but produces a doctrinally literate congregation capable of identifying error and withstanding theological drift. Augustine, Aquinas, Calvin, and later Lloyd-Jones excelled in this form.",
    examples: ["John Piper's series on the attributes of God at Bethlehem Baptist", "R.C. Sproul's Ligonier series on Reformed theology", "Martyn Lloyd-Jones' series on Christian doctrine from Ephesians"],
  },
];

const SERMON_LISTENING = [
  {
    id: 1,
    step: 1,
    title: "Prepare Your Heart Before",
    description: "Formative sermon listening begins before the sermon starts. Arrive early enough to pray, read the passage to be preached, and ask God to speak. Consider what season of life you are in and what questions you are carrying. The goal is not passive reception but prepared engagement — coming ready to be confronted, comforted, or corrected by God's word through the preacher.",
    practice: "Read the passage beforehand, write one question or burden you are bringing to the sermon, and pray that God would speak specifically to that question.",
  },
  {
    id: 2,
    step: 2,
    title: "Take Notes with a Specific Focus",
    description: "Not all note-taking is equally valuable. Random transcription produces notes you never re-read. Focused note-taking — recording what surprised you, what convicted you, what you did not understand, and what directly applies to your current situation — produces notes that continue to work after the sermon ends. Some listeners write in their Bible margins; others use a dedicated journal. The medium matters less than the intentionality.",
    practice: "Choose one focus before each sermon: What do I expect to be challenged about? Then take notes specifically around that question.",
  },
  {
    id: 3,
    step: 3,
    title: "Ask Three Questions: What? So What? Now What?",
    description: "Howard Hendricks' three-question framework transforms passive listening into active interpretation. What? — What did the text actually say? What was the central claim of the sermon? So what? — Why does it matter? What is at stake if this is true? Now what? — What do I need to do, believe, or stop doing as a result? Most listeners answer only the first question. The third question is where transformation happens.",
    practice: "After each sermon, write a three-sentence response: one sentence for each question. If you cannot answer the third, stay with the sermon until you can.",
  },
  {
    id: 4,
    step: 4,
    title: "Discuss with Others",
    description: "The sermon is not meant to be consumed in isolation. Discussion with a spouse, a small group, or a friend within 24 hours of hearing a sermon dramatically increases retention and application. Explaining what you heard to someone else forces clarification of what you actually understood. Hearing another person's response surfaces applications and implications you missed. The Berean model (Acts 17:11) was community-based Scripture searching — not solitary reception.",
    practice: "Text or tell one person one thing from the sermon before the day ends. Ask what they heard and compare responses.",
  },
  {
    id: 5,
    step: 5,
    title: "Apply One Thing This Week",
    description: "The sermon's purpose is not information but formation — and formation requires embodied action, not just mental agreement. The discipline is to identify one concrete, specific action or change that the sermon calls for, and to commit to it for the coming week. Not a general resolve to 'be more patient' but a specific act: call that person, stop that habit on Tuesday, give that amount, have that conversation. Specificity is the enemy of vague spiritual good intentions.",
    practice: "Write the one thing in your calendar for a specific day and time. Report back to a friend at the end of the week whether you did it.",
  },
];

const VOICES_FSER = [
  {
    id: 1,
    name: "John Chrysostom",
    era: "4th–5th Century (347–407 AD)",
    context: "Archbishop of Constantinople; Antiochene School",
    bio: "John Chrysostom — whose name means 'golden-mouthed' — is considered the greatest preacher of the patristic era. As presbyter in Antioch and later Archbishop of Constantinople, his expository sermons on Matthew, Romans, Galatians, and John remain among the most thorough and pastorally rich biblical commentaries ever produced. He preached to congregations of thousands, addressing poverty, corruption, and luxury with prophetic directness. His homilies on the parables of Jesus and on the Sermon on the Mount shaped Christian preaching for a millennium. He was exiled twice for confronting the Empress Eudoxia and the corrupt court.",
    quote: "The road to hell is paved with the bones of priests and monks, and the skulls of bishops are the lampposts that light the path.",
    contribution: "Homilies on Matthew and John — the definitive patristic expository commentaries on the Gospels, still referenced in seminary training worldwide",
  },
  {
    id: 2,
    name: "George Whitefield",
    era: "18th Century (1714–1770)",
    context: "Great Awakening; open-air preaching; transatlantic revivalism",
    bio: "George Whitefield was arguably the greatest preacher in English since the Reformation. A founding figure of Methodism alongside John Wesley (though he and Wesley parted over Calvinism), Whitefield pioneered open-air preaching that could draw crowds of 20,000-30,000 people in fields and marketplaces. He preached over 18,000 sermons in his lifetime, crossing the Atlantic thirteen times to preach in both Britain and the American colonies. Benjamin Franklin, a skeptic, attended his Philadelphia meetings and was astonished at the effect on the city. Whitefield's preaching in New England was the primary catalyst of the First Great Awakening.",
    quote: "It is a poor sermon that gives no offense; that neither makes the hearer displeased with himself nor with the preacher.",
    contribution: "Open-air evangelistic preaching — Whitefield established the model that D.L. Moody, Billy Sunday, and Billy Graham would follow two centuries later",
  },
  {
    id: 3,
    name: "C.H. Spurgeon",
    era: "19th Century (1834–1892)",
    context: "Metropolitan Tabernacle, London; Prince of Preachers",
    bio: "Charles Haddon Spurgeon became pastor of New Park Street Chapel in London at 19 and built it into the Metropolitan Tabernacle — seating 6,000, filled twice on Sundays. He preached to an estimated 10 million people across his ministry without electronic amplification. His 3,600+ sermons were transcribed and published weekly, becoming the most widely distributed religious literature of the Victorian era. Spurgeon combined Calvinist theology with evangelical passion and pastoral warmth in a way rarely equaled. He also founded a pastors' college and an orphanage. His Treasury of David (a commentary on Psalms) and Lectures to My Students remain classics.",
    quote: "A Bible that's falling apart usually belongs to someone who isn't.",
    contribution: "The Metropolitan Tabernacle Pulpit — 63 volumes of weekly sermons, available free online, representing the gold standard of English evangelical preaching",
  },
  {
    id: 4,
    name: "Martyn Lloyd-Jones",
    era: "20th Century (1899–1981)",
    context: "Westminster Chapel, London; Romans series",
    bio: "David Martyn Lloyd-Jones trained as a physician under Lord Horder before leaving medicine to become pastor of Sandfields, a mining community in Wales, where he saw genuine revival. He succeeded G. Campbell Morgan at Westminster Chapel in London in 1939 and preached there for 30 years. His 14-year sermon series on Paul's Epistle to the Romans — over 350 sermons — is the most thorough expository treatment of a single biblical book in Protestant history. Deeply influenced by the Puritans and by Jonathan Edwards, Lloyd-Jones insisted that the church's decline was traceable to unfaithful preaching and that recovery required a return to doctrinal, Spirit-anointed exposition.",
    quote: "What is the chief end of preaching? I like to think it is this: it is to give men and women a sense of God and His presence.",
    contribution: "Romans series (14 volumes, 1955-1968) — available via mljtrust.org; the definitive 20th-century expository treatment of Paul's magnum opus",
  },
  {
    id: 5,
    name: "Tim Keller",
    era: "Contemporary (1950–2023)",
    context: "Redeemer Presbyterian Church, New York City",
    bio: "Timothy Keller founded Redeemer Presbyterian Church in Manhattan in 1989 with 50 people and grew it to 5,000+ weekly attendees in one of the most secular cities in America. His approach combined rigorous theological exposition with deep engagement with secular objections to Christianity — preaching the gospel to convinced unbelievers and cultural skeptics who filled his pews. His sermon series on the parables, on the Psalms, and on the gospel and justice defined Reformed urban ministry for a generation. After leaving Redeemer, he wrote prolifically and co-founded the Gospel Coalition. He died of pancreatic cancer in May 2023.",
    quote: "The gospel is this: We are more sinful and flawed in ourselves than we ever dared believe, yet at the very same time we are more loved and accepted in Jesus Christ than we ever dared hope.",
    contribution: "Gospel in Life sermon archive (gospelinlife.com) — over 1,700 sermons free online; The Prodigal God and The Reason for God derived from his preaching",
  },
];

export default function FeaturedSermonsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("sermons");
  const [era, setEra] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<number | null>(null);

  const filtered = SERMONS.filter(s => era === "All" || s.era === era);
  const sermon = SERMONS.find(s => s.title === selected);
  const voice = VOICES_FSER.find(v => v.id === selectedVoice);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎙️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Sermons That Moved History</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 620, margin: "0 auto" }}>
            From Edwards in Enfield to Washer in Birmingham &mdash; sermons that triggered revivals, shaped theology, and changed millions of lives. These are the messages that have defined Christian preaching across the centuries.
          </p>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 4, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 6, marginBottom: 32, flexWrap: "wrap" }}>
          {(["sermons", "categories", "how-to-listen", "voices"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)}
              style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "sermons" ? "Sermons" : t === "categories" ? "Categories" : t === "how-to-listen" ? "How to Listen" : "Voices"}
            </button>
          ))}
        </div>

        {activeTab === "sermons" && (
          <>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {ERA_FILTERS.map(e => (
                <button key={e} onClick={() => setEra(e)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${era === e ? GREEN : BORDER}`, background: era === e ? `${GREEN}15` : "transparent", color: era === e ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {e}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: sermon ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((s, i) => (
                  <button key={i} onClick={() => setSelected(selected === s.title ? null : s.title)}
                    style={{ background: selected === s.title ? `${s.color}12` : CARD, border: `1px solid ${selected === s.title ? s.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${s.color}20`, border: `1px solid ${s.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                        {s.initials}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{s.title}</span>
                          <span style={{ background: `${ERA_COLOR[s.era] || GREEN}15`, color: ERA_COLOR[s.era] || GREEN, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{s.era}</span>
                        </div>
                        <div style={{ display: "flex", gap: 8, marginTop: 3, alignItems: "center" }}>
                          <span style={{ color: MUTED, fontSize: 12 }}>{s.preacher}</span>
                          <span style={{ color: MUTED, fontSize: 10 }}>·</span>
                          <span style={{ color: MUTED, fontSize: 12 }}>{s.year}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {sermon && (
                <div style={{ background: CARD, border: `1px solid ${sermon.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <h2 style={{ color: sermon.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{sermon.title}</h2>
                  <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{sermon.preacher} · {sermon.year} · {sermon.location}</div>

                  <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
                    <span style={{ background: `${ERA_COLOR[sermon.era] || GREEN}15`, color: ERA_COLOR[sermon.era] || GREEN, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{sermon.era}</span>
                  </div>

                  <div style={{ background: `${sermon.color}08`, border: `1px solid ${sermon.color}20`, borderRadius: 8, padding: 12, marginBottom: 14 }}>
                    <div style={{ color: sermon.color, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>THEME</div>
                    <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{sermon.theme}</p>
                  </div>

                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{sermon.description}</p>

                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12, marginBottom: 14 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>KEY QUOTE</div>
                    <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", margin: 0, lineHeight: 1.65 }}>{sermon.key_quote}</p>
                  </div>

                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12, marginBottom: 14 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHY SIGNIFICANT</div>
                    <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.65 }}>{sermon.why_significant}</p>
                  </div>

                  <div style={{ background: `#3B82F615`, border: "1px solid #3B82F630", borderRadius: 8, padding: 10 }}>
                    <div style={{ color: "#3B82F6", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHERE TO FIND IT</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{sermon.find_it}</p>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {activeTab === "categories" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))", gap: 16 }}>
            {SERMON_CATEGORIES.map(cat => (
              <div key={cat.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ fontSize: 26 }}>{cat.icon}</div>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 17, margin: 0 }}>{cat.category}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: "0 0 14px" }}>{cat.description}</p>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 10 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>EXAMPLES</div>
                  <ul style={{ margin: 0, padding: "0 0 0 16px" }}>
                    {cat.examples.map((ex, i) => (
                      <li key={i} style={{ color: TEXT, fontSize: 12, lineHeight: 1.65, marginBottom: i < cat.examples.length - 1 ? 4 : 0 }}>{ex}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "how-to-listen" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {SERMON_LISTENING.map(step => (
              <div key={step.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22, display: "flex", gap: 18 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: 17, flexShrink: 0, marginTop: 2 }}>
                  {step.step}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 16, margin: "0 0 8px" }}>{step.title}</h3>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 12px" }}>{step.description}</p>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: "8px 12px" }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>PRACTICE</div>
                    <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.6 }}>{step.practice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "grid", gridTemplateColumns: voice ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {VOICES_FSER.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(selectedVoice === v.id ? null : v.id)}
                  style={{ background: selectedVoice === v.id ? `${PURPLE}15` : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE + "60" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                  <div style={{ color: TEXT, fontWeight: 800, fontSize: 15, marginBottom: 3 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 6 }}>{v.era}</div>
                  <div style={{ color: MUTED, fontSize: 12, fontStyle: "italic" }}>{v.context}</div>
                </button>
              ))}
            </div>

            {voice && (
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 20, margin: "0 0 4px" }}>{voice.name}</h2>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 4 }}>{voice.era}</div>
                <div style={{ color: GREEN, fontSize: 12, fontWeight: 700, marginBottom: 16 }}>{voice.context}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{voice.bio}</p>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 14, marginBottom: 14 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>KEY QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", margin: 0, lineHeight: 1.65 }}>&ldquo;{voice.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>KEY CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.6 }}>{voice.contribution}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
