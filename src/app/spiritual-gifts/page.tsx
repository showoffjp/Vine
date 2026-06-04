"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";

import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

type Tab = "theology" | "gifts" | "discover" | "cessation" | "videos";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theologyItems = [
  {
    id: "t1",
    title: "What Are Spiritual Gifts?",
    content:
      "Spiritual gifts (Greek: charisma, plural charismata) are Spirit-endowed abilities given to believers for service. They are distinct from natural talent in source and purpose: natural talents are given at creation; spiritual gifts are given at regeneration by the Holy Spirit. Paul describes them in three key passages: 1 Corinthians 12:4-7 ('there are varieties of gifts, but the same Spirit'), Ephesians 4:11-13 (gifts given 'to equip the saints for the work of ministry, for building up the body of Christ'), and Romans 12:6-8 (a practical list of gifts in operation). A gift is not a role or an office — it is a Spirit-energized capacity. The same word charisma is used of salvation itself (Rom 6:23), underscoring that gifts, like salvation, are wholly grace.",
  },
  {
    id: "t2",
    title: "Every Believer Has a Gift",
    content:
      "Paul is emphatic: 'To each is given the manifestation of the Spirit for the common good' (1 Cor 12:7). Not to the apostles only, not to the clergy, not to the spiritually mature — to each. Peter echoes this: 'As each has received a gift, use it to serve one another, as good stewards of God's varied grace' (1 Pet 4:10). There are no spiritual gift couch potatoes in a healthy church. The assumption that gifts belong only to leaders is both unbiblical and practically disastrous — it produces passive congregations and burned-out pastors. Every member of the body has a function that no other member can fully replace.",
  },
  {
    id: "t3",
    title: "Gifts Are for the Body, Not for Self",
    content:
      "Paul's body analogy in 1 Corinthians 12:12-27 is decisive: 'For just as the body is one and has many members, and all the members of the body, though many, are one body, so it is with Christ.' No body part exists for itself — the eye does not see for its own benefit but for the whole person. Gifts are given to build up the church (Eph 4:12), not for personal status, spiritual resume-building, or self-validation. The Corinthian church was destroying itself precisely because members were using gifts as status symbols and competitive achievements. A gift exercised for personal glory is being used against its design.",
  },
  {
    id: "t4",
    title: "The Holy Spirit Distributes Sovereignly",
    content:
      "1 Corinthians 12:11 settles the matter of who decides what gift goes to whom: 'All these are empowered by one and the same Spirit, who apportions to each one individually as he wills.' The Spirit decides — not church boards, not personal preference, not spiritual achievement. This has enormous implications for ego: you cannot take credit for your gift, nor can you take blame for lacking someone else's. Coveting gifts (especially tongues, in Corinth) is implicitly a protest against the Spirit's sovereign distribution. This does not mean gifts are hidden or that we should not seek them (Paul says 'earnestly desire the higher gifts,' 1 Cor 12:31) — but the distribution is ultimately His.",
  },
  {
    id: "t5",
    title: "Gifts and Character",
    content:
      "Gifts without character are dangerous. This is 1 Corinthians 13's entire point: 'If I speak in the tongues of men and of angels, but have not love, I am a noisy gong or a clanging cymbal' (13:1). The Corinthian church was gifted and chaotic — they had tongues, prophecy, knowledge, and were tearing each other apart. Paul does not tell them to stop using gifts; he tells them to grow up in love. Gifts are not evidence of spiritual maturity. History is littered with gifted teachers who shipwrecked morally. Gifts are tools; character is the hand that wields them. A brilliant scalpel in an untrained hand is a greater danger than no scalpel at all.",
  },
  {
    id: "t6",
    title: "How Gifts and Callings Relate",
    content:
      "Gifts and calling are not the same thing, but they intersect. A calling (or vocation) is a direction — the context and purpose God is calling a person toward. Gifts are means — the Spirit-endowed capacities that equip someone for that calling. A person called to cross-cultural church planting might have gifts of faith, leadership, and teaching. The same gifts could serve someone called to lead a local congregation or a nonprofit. Gifts do not determine calling by themselves; calling is discerned through community, Scripture, providence, and inner confirmation. But gifts often signal calling's edges — what you are equipped to do is often a clue to what you are called to do.",
  },
];

const cessationItems = [
  {
    id: "c1",
    title: "What Is Cessationism?",
    content:
      "Cessationism is the theological view that the 'sign gifts' — tongues, healing, prophecy, miracles — ceased at the end of the apostolic age (roughly the death of the last apostle or the completion of the NT canon). The most influential modern articulation is B.B. Warfield's Counterfeit Miracles (1918), which argued that miracles were given to authenticate the apostles and their message, and were therefore not designed to be permanent features of church life. Most Reformed and cessationist traditions today accept this framework, though details vary. Some cessationists allow for providential healings while denying the gift of healing as a repeatable, on-demand exercise.",
  },
  {
    id: "c2",
    title: "What Is Continuationism?",
    content:
      "Continuationism is the view that all spiritual gifts described in the NT continue to operate throughout the church age until Christ's return. Leading continuationist theologians include Gordon Fee (God's Empowering Presence) and Wayne Grudem (Systematic Theology, chapter 52). Continuationists argue that there is no biblical warrant for assuming gifts were time-limited, and that the global Pentecostal and charismatic movements (now numbering over 600 million adherents worldwide) represent genuine Spirit activity. Grudem's 'open but cautious' position has become influential in Reformed circles uncomfortable with full cessationism but also wary of charismatic excesses.",
  },
  {
    id: "c3",
    title: "The Biblical Case for Cessationism",
    content:
      "Cessationists marshal several key texts. Hebrews 2:3-4 describes miracles as God 'bearing witness' to the apostolic proclamation — suggesting an authenticating, bounded function. Ephesians 2:20 calls apostles and prophets the 'foundation' — foundations are laid once, not continuously. The most contested text is 1 Corinthians 13:10: 'when the perfect comes, the partial will pass away.' Cessationists identify 'the perfect' as the completed canon of Scripture, meaning prophecy and tongues ceased at canon completion. Critics note Paul seems to contrast 'the perfect' with the eschaton ('then I shall know fully'), not with a canon. The debate hinges partly on what 'signs and wonders' were for.",
  },
  {
    id: "c4",
    title: "The Biblical Case for Continuationism",
    content:
      "Continuationists point first to Acts 2:17: Peter quotes Joel, 'in the last days I will pour out my Spirit on all flesh... and they shall prophesy.' The last days, in NT theology, began at Pentecost (not a future dispensation) and extend to the Parousia. If we are in the last days, the gifts should be in operation. Second, no NT text explicitly states gifts would cease — the cessationist case is largely inferential. Third, church history, though often contested, includes significant accounts of miraculous gifts in non-Pentecostal contexts (Irenaeus, Augustine's Retractions, etc.). Fourth, the global growth of Pentecostalism in the Global South among the poor and unreached is difficult to dismiss as pure emotionalism.",
  },
  {
    id: "c5",
    title: "Charismatic vs. Third Wave vs. Open-But-Cautious",
    content:
      "Continuationism is not monolithic. Classical Pentecostals (Assemblies of God) hold that tongues is the 'initial evidence' of Spirit baptism — a view most continuationists reject. The Charismatic Renewal (1960s-80s) brought gifts into mainline and Catholic churches. The 'Third Wave' (C. Peter Wagner, John Wimber) emphasized signs and wonders in evangelism without the tongues-as-evidence doctrine. 'Open but cautious' continuationists (Sam Storms, John Piper, D.A. Carson) affirm gifts are possible but urge testing and sobriety. John MacArthur's Strange Fire (2013) represents the sharpest modern cessationist critique. The spectrum from MacArthur to Benny Hinn is vast — most thoughtful Christians land somewhere in the middle.",
  },
  {
    id: "c6",
    title: "Practical Wisdom",
    content:
      "Christians have disagreed on cessationism since at least the 4th century. This debate has not divided orthodoxy — the Nicene Creed says nothing about it. Practical wisdom says: hold your position with appropriate humility; do not divide over it. Avoid two equal and opposite errors: quenching the Spirit (dismissing genuine Spirit activity out of theological nervousness) and uncritical credulity (accepting every claimed miracle or prophecy without testing, 1 Thess 5:19-21; 1 John 4:1). Both errors are spiritually costly. Unity over uniformity: evangelical churches have thrived with both cessationists and continuationists in the same congregation, focused on the mission of the gospel.",
  },
];

interface Gift {
  name: string;
  lists: string[];
  categories: string[];
  reference: string;
  description: string;
  example: string;
  multiList?: boolean;
}

const gifts: Gift[] = [
  {
    name: "Prophecy",
    lists: ["Romans 12", "1 Corinthians 12"],
    categories: ["Speaking Gifts"],
    reference: "Rom 12:6; 1 Cor 12:10",
    description: "Spirit-given ability to proclaim God's word with clarity and conviction, including forth-telling (declaring God's truth) and, in continuationist understanding, foretelling.",
    example: "A preacher who consistently speaks a word that pierces hearts and calls people to repentance; in charismatic contexts, receiving a specific impression or word for an individual or congregation.",
    multiList: true,
  },
  {
    name: "Service",
    lists: ["Romans 12"],
    categories: ["Serving Gifts"],
    reference: "Rom 12:7",
    description: "Practical, hands-on assistance that sustains the ministry of the church — logistics, physical needs, behind-the-scenes support.",
    example: "The person who shows up early to set up chairs, organizes disaster relief, or coordinates meals for a grieving family without being asked.",
  },
  {
    name: "Teaching",
    lists: ["Romans 12", "Ephesians 4"],
    categories: ["Speaking Gifts"],
    reference: "Rom 12:7; Eph 4:11",
    description: "Ability to explain, interpret, and apply Scripture and Christian truth so others understand and grow.",
    example: "A small group leader who can open a complex passage and make it accessible; a theological educator who equips the next generation of ministers.",
    multiList: true,
  },
  {
    name: "Exhortation",
    lists: ["Romans 12"],
    categories: ["Speaking Gifts"],
    reference: "Rom 12:8",
    description: "Encouraging, strengthening, and urging believers toward faithfulness; comfort for the struggling and challenge for the complacent.",
    example: "The mentor who knows exactly what to say to someone ready to give up, drawing them back to hope through Scripture and presence.",
  },
  {
    name: "Giving",
    lists: ["Romans 12"],
    categories: ["Serving Gifts"],
    reference: "Rom 12:8",
    description: "Cheerful, generous financial and material contribution to kingdom work, often accompanied by unusual faith and discernment about where to give.",
    example: "A businessperson who consistently senses where kingdom investment is needed and gives liberally, fueling church plants, missionaries, and mercy ministries.",
  },
  {
    name: "Leadership",
    lists: ["Romans 12"],
    categories: ["Serving Gifts"],
    reference: "Rom 12:8",
    description: "Ability to set vision, organize people, and move a community toward a God-given goal with diligence.",
    example: "A church elder who casts compelling vision, mobilizes volunteers, and navigates institutional challenges with wisdom and decisiveness.",
  },
  {
    name: "Mercy",
    lists: ["Romans 12"],
    categories: ["Serving Gifts"],
    reference: "Rom 12:8",
    description: "Extraordinary compassion for those who are suffering, sick, marginalized, or in distress — with cheerful, sustained action.",
    example: "The hospital chaplain, the prison minister, the person who befriends the chronically lonely — drawn to suffering rather than overwhelmed by it.",
  },
  {
    name: "Word of Wisdom",
    lists: ["1 Corinthians 12"],
    categories: ["Speaking Gifts"],
    reference: "1 Cor 12:8",
    description: "Spirit-given insight into how to apply God's truth to specific situations — practical, timely wisdom that transcends natural intelligence.",
    example: "An elder who consistently navigates church conflicts with a solution that honors all parties and reflects kingdom values; a counselor with uncanny discernment.",
  },
  {
    name: "Word of Knowledge",
    lists: ["1 Corinthians 12"],
    categories: ["Speaking Gifts"],
    reference: "1 Cor 12:8",
    description: "Supernaturally given awareness of facts or situations the person could not have known naturally; in cessationist readings, deep Scriptural knowledge.",
    example: "In charismatic contexts: receiving specific information about a person's need or sin for ministry. In cessationist contexts: a teacher with remarkable depth of biblical and theological knowledge.",
  },
  {
    name: "Faith",
    lists: ["1 Corinthians 12"],
    categories: ["Serving Gifts"],
    reference: "1 Cor 12:9",
    description: "Not saving faith (which all believers share) but an extraordinary, Spirit-given trust in God to act in specific impossible situations.",
    example: "A church planter who moves to a city with no contacts, no funding, and no building — and somehow a church emerges. Hudson Taylor's 'attempt great things for God.'",
  },
  {
    name: "Healing",
    lists: ["1 Corinthians 12"],
    categories: ["Sign Gifts"],
    reference: "1 Cor 12:9-10",
    description: "Spirit-given ability to be an instrument of physical, emotional, or spiritual healing beyond natural medicine.",
    example: "In continuationist contexts: individuals in whose presence the sick are healed when prayer is offered. Note: the gift is 'gifts of healing' (plural) — suggesting situational rather than permanent endowment.",
  },
  {
    name: "Miracles",
    lists: ["1 Corinthians 12"],
    categories: ["Sign Gifts"],
    reference: "1 Cor 12:10",
    description: "The working of mighty deeds that display God's power over nature, evil, and death.",
    example: "In the NT: exorcisms, nature miracles, raising the dead. In contemporary mission contexts: accounts of miraculous acts in pioneer missionary settings among unreached peoples.",
  },
  {
    name: "Discernment",
    lists: ["1 Corinthians 12"],
    categories: ["Speaking Gifts"],
    reference: "1 Cor 12:10",
    description: "Ability to distinguish between the Spirit of God and other spirits — identifying false teaching, spiritual deception, and demonic activity.",
    example: "A pastor who immediately senses when a theological drift is happening in a teaching; a counselor who recognizes spiritual warfare versus psychological disorder.",
  },
  {
    name: "Tongues",
    lists: ["1 Corinthians 12"],
    categories: ["Sign Gifts"],
    reference: "1 Cor 12:10; 14:2-4",
    description: "Speaking in a language unknown to the speaker — either a human language (xenolalia, as in Acts 2) or a heavenly/prayer language (1 Cor 14). Contested as to current operation.",
    example: "In Pentecostal/charismatic settings: personal prayer language for edification, or public gift requiring interpretation. In cessationist view: a sign gift limited to the apostolic era.",
  },
  {
    name: "Interpretation of Tongues",
    lists: ["1 Corinthians 12"],
    categories: ["Sign Gifts"],
    reference: "1 Cor 12:10; 14:27-28",
    description: "Spirit-given ability to render the content of a tongue-speech into the language of the congregation for edification.",
    example: "In continuationist practice: someone receives the meaning of a public tongue and speaks it to the congregation. Paul requires this for any public use of tongues (1 Cor 14:28).",
  },
  {
    name: "Apostle",
    lists: ["Ephesians 4"],
    categories: ["Speaking Gifts"],
    reference: "Eph 4:11",
    description: "Foundational gift of being sent as a pioneer — establishing churches, crossing cultural frontiers, and laying gospel foundation in new territory. Cessationists distinguish capital-A Apostles (the Twelve + Paul) from lowercase apostles (pioneering missionaries).",
    example: "Cross-cultural church planters among unreached people groups; in continuationist settings, leaders with trans-local authority in networks of churches.",
  },
  {
    name: "Prophet",
    lists: ["Ephesians 4"],
    categories: ["Speaking Gifts"],
    reference: "Eph 4:11",
    description: "Foundational gift of declaring God's word with special authority; in cessationist view, closed with the apostolic age and the canon; in continuationist view, an ongoing gift of Spirit-prompted proclamation distinguished from canonical prophecy.",
    example: "Preachers who function prophetically — calling the church to faithfulness, naming sin, and declaring what God is doing in a generation.",
  },
  {
    name: "Evangelist",
    lists: ["Ephesians 4"],
    categories: ["Speaking Gifts"],
    reference: "Eph 4:11",
    description: "Spirit-given capacity to clearly and compellingly proclaim the gospel, leading people to saving faith — distinct from the general calling of all believers to witness.",
    example: "Billy Graham is the classic modern example. The person in every church who naturally turns every conversation toward the gospel and regularly leads people to faith.",
  },
  {
    name: "Pastor",
    lists: ["Ephesians 4"],
    categories: ["Serving Gifts"],
    reference: "Eph 4:11",
    description: "The gift of shepherding — caring, guiding, protecting, and nurturing a community of believers over time. In Eph 4:11, 'pastor-teacher' is often read as a single compound gift.",
    example: "The minister who knows their flock by name, shows up in the hospital at midnight, grieves with the grieving, and provides steady spiritual guidance through seasons of life.",
  },
  {
    name: "Teacher (Ephesians 4)",
    lists: ["Ephesians 4"],
    categories: ["Speaking Gifts"],
    reference: "Eph 4:11",
    description: "Closely linked with pastor in Eph 4:11 (the 'pastor-teacher'), this is the gift of equipping believers through careful exposition and application of Scripture.",
    example: "A systematic theologian who writes accessible theology; a Bible teacher whose weekly instruction genuinely forms disciples rather than merely informing them.",
  },
  {
    name: "Speaking",
    lists: ["1 Peter 4"],
    categories: ["Speaking Gifts"],
    reference: "1 Pet 4:11",
    description: "Peter's broad category for any verbal gift — whoever speaks should speak 'as one who speaks oracles of God,' with reverence and dependence on the Spirit.",
    example: "Encompasses preaching, teaching, prophecy, exhortation, evangelism — Peter's framework emphasizes the weight of all speech done in Christ's name.",
  },
  {
    name: "Serving",
    lists: ["1 Peter 4"],
    categories: ["Serving Gifts"],
    reference: "1 Pet 4:11",
    description: "Peter's broad category for any practical, hands-on gift — whoever serves should serve 'by the strength that God supplies,' so that God gets the glory.",
    example: "Encompasses service, mercy, giving, helps, administration — Peter sees all practical ministry as Spirit-empowered and God-glorifying, not merely human kindness.",
  },
  {
    name: "Administration / Helps",
    lists: ["1 Corinthians 12"],
    categories: ["Serving Gifts"],
    reference: "1 Cor 12:28",
    description: "The gift of organizing, administrating, and supporting ministry structures so the church can function effectively (kubernesis = steering, helmsman).",
    example: "The church administrator who coordinates staff, manages budgets, and keeps ministry machinery running; the event coordinator who makes large gatherings work.",
  },
  {
    name: "Hospitality",
    lists: ["1 Peter 4"],
    categories: ["Serving Gifts"],
    reference: "1 Pet 4:9; Rom 12:13",
    description: "While sometimes listed separately, hospitality flows from the serving category — the extraordinary gift of making strangers and the marginalized feel genuinely at home.",
    example: "The household that is always open, always has room at the table, whose home becomes a genuine refuge and community hub for the church and the neighborhood.",
  },
];

const allLists = ["Romans 12", "1 Corinthians 12", "Ephesians 4", "1 Peter 4"];
const allCategories = ["Speaking Gifts", "Serving Gifts", "Sign Gifts"];

function Accordion({ items }: { items: { id: string; title: string; content: string }[] }) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <button type="button"
            onClick={() => toggle(item.id)}
            style={{
              width: "100%",
              textAlign: "left",
              padding: "16px 20px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ color: TEXT, fontWeight: 600, fontSize: 15 }}>{item.title}</span>
            <span
              style={{
                color: GREEN,
                fontSize: 20,
                lineHeight: 1,
                transform: expanded[item.id] ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
                flexShrink: 0,
                display: "inline-block",
              }}
            >
              +
            </span>
          </button>
          {expanded[item.id] && (
            <div
              style={{
                padding: "14px 20px 18px 20px",
                color: MUTED,
                fontSize: 14,
                lineHeight: 1.75,
                borderTop: `1px solid ${BORDER}`,
              }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function GiftsTab() {
  const [listFilter, setListFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const filtered = gifts.filter((g) => {
    const listOk = listFilter === null || g.lists.includes(listFilter);
    const catOk = categoryFilter === null || g.categories.includes(categoryFilter);
    return listOk && catOk;
  });

  const chipStyle = (active: boolean): React.CSSProperties => ({
    padding: "6px 14px",
    borderRadius: 20,
    border: `1px solid ${active ? GREEN : BORDER}`,
    background: active ? `${GREEN}18` : CARD,
    color: active ? GREEN : MUTED,
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 500,
  });

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <p style={{ color: MUTED, fontSize: 13, marginBottom: 10, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Filter by List
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
          <button type="button" style={chipStyle(listFilter === null)} onClick={() => setListFilter(null)}>All Lists</button>
          {allLists.map((l) => (
            <button type="button" key={l} style={chipStyle(listFilter === l)} onClick={() => setListFilter(listFilter === l ? null : l)}>{l}</button>
          ))}
        </div>
        <p style={{ color: MUTED, fontSize: 13, marginBottom: 10, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Filter by Category
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <button type="button" style={chipStyle(categoryFilter === null)} onClick={() => setCategoryFilter(null)}>All Categories</button>
          {allCategories.map((c) => (
            <button type="button" key={c} style={chipStyle(categoryFilter === c)} onClick={() => setCategoryFilter(categoryFilter === c ? null : c)}>{c}</button>
          ))}
        </div>
      </div>
      <p style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>
        Showing {filtered.length} of {gifts.length} gifts
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
        {filtered.map((gift) => (
          <div
            key={gift.name}
            style={{
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: 10,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
              <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 15, margin: 0 }}>{gift.name}</h3>
              {gift.multiList && (
                <span style={{ background: `${PURPLE}33`, color: PURPLE, fontSize: 11, padding: "2px 8px", borderRadius: 10, flexShrink: 0, fontWeight: 600 }}>
                  Multiple Lists
                </span>
              )}
            </div>
            <p style={{ color: GREEN, fontSize: 12, margin: 0, fontWeight: 600 }}><VerseRef reference={gift.reference} /></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {gift.lists.map((l) => (
                <span key={l} style={{ background: BORDER, color: MUTED, fontSize: 11, padding: "2px 8px", borderRadius: 6 }}>{l}</span>
              ))}
              {gift.categories.map((c) => (
                <span key={c} style={{ background: `${PURPLE}22`, color: PURPLE, fontSize: 11, padding: "2px 8px", borderRadius: 6 }}>{c}</span>
              ))}
            </div>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{gift.description}</p>
            <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 10 }}>
              <p style={{ color: MUTED, fontSize: 12, margin: "0 0 4px 0", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Today's Example
              </p>
              <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0, opacity: 0.8 }}>{gift.example}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const discoverSteps = [
  {
    number: 1,
    title: "Prayer and Openness",
    scripture: "James 1:5",
    content:
      "Begin with honest prayer. Ask the Holy Spirit to make your gifts clear — and resist the assumption that you have none. That assumption is almost never true; it is usually a combination of false humility and insufficient self-knowledge. God does not hide your gifts from you; He wants the body to function. Pray with openness to being surprised: your gift may not be the one you most admire in others.",
  },
  {
    number: 2,
    title: "Study the Gift Lists",
    scripture: "1 Cor 12; Rom 12; Eph 4; 1 Pet 4",
    content:
      "Read all four primary gift passages thoughtfully, not as a checklist but as a portrait of how the Spirit works. Notice the variety — from tongues to mercy, from apostleship to administration. Consider which gifts resonate as you read them: not just 'I want that one' but 'I recognize something of that in me.' The lists are descriptive, not exhaustive — the Spirit's work is not limited to the nouns in these passages.",
  },
  {
    number: 3,
    title: "Try Things",
    scripture: "Matt 25:14-30",
    content:
      "You often discover gifts by exercising them. The servant who buried his talent discovered nothing; the servants who invested learned what they had. Volunteer to teach a class, lead a small group, serve in mercy ministry, or preach. You will discover gifts in the trying — and you will also discover what is not your gift, which is equally valuable information. Inexperience is not the same as inability.",
  },
  {
    number: 4,
    title: "Get Feedback",
    scripture: "Prov 11:14",
    content:
      "Others in your community often see your gifts before you do. Ask a trusted pastor, mentor, or close friend: 'When do you see me most alive in ministry? Where do you see consistent fruitfulness?' Honest, specific feedback from people who know you well is irreplaceable. This is one reason why meaningful church membership matters — anonymous attendance makes gift discovery nearly impossible. The body identifies gifts; the body deploys gifts.",
  },
  {
    number: 5,
    title: "Note What Gives Life",
    scripture: "Ps 37:4",
    content:
      "Gifts are often correlated with what energizes you — not just what is easy for you. A person with the gift of teaching may find study and explanation energizing even when it is hard. A person with the gift of mercy may feel most alive in the hospital ward even when it is emotionally exhausting. Pay attention to this: the Spirit often connects gifts with deep desire. Note also: ease of performance is not the same as giftedness — some gifts feel difficult and still bear fruit.",
  },
  {
    number: 6,
    title: "Deploy and Refine",
    scripture: "1 Tim 4:14-15",
    content:
      "Gifts grow with use. Paul told Timothy: 'Do not neglect the gift you have... practice these things, immerse yourself in them.' Spiritual gift inventories (such as the Spiritual Gifts Assessment by LifeWay or the Network curriculum by Willow Creek Community Church) are useful starting points — not final verdicts. Use them to begin conversation, not to end it. As you deploy your gift in community, it will become clearer, more refined, and more fruitful over time.",
  },
];

function DiscoverTab() {
  return (
    <div style={{ maxWidth: 720 }}>
      <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, marginBottom: 36 }}>
        Spiritual gift discovery is a process, not a moment. Here is a {discoverSteps.length}-step framework grounded in Scripture and tested in practice.
      </p>
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: 27,
            top: 0,
            bottom: 0,
            width: 2,
            background: `linear-gradient(to bottom, ${GREEN}, ${PURPLE})`,
            borderRadius: 2,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {discoverSteps.map((step, idx) => (
            <div key={step.number} style={{ display: "flex", gap: 28, paddingBottom: idx < discoverSteps.length - 1 ? 36 : 0 }}>
              <div style={{ flexShrink: 0, zIndex: 1 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: BG,
                    border: `2px solid ${GREEN}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 18,
                    color: GREEN,
                  }}
                >
                  {step.number}
                </div>
              </div>
              <div style={{ paddingTop: 8, flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 17, margin: 0 }}>{step.title}</h3>
                  <span style={{ color: PURPLE, fontSize: 12, fontWeight: 600 }}>{step.scripture}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SpiritualGiftsPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_spiritual-gifts_tab", "theology");

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology of Gifts" },
    { id: "gifts", label: "The Gifts" },
    { id: "discover", label: "Discovering Your Gifts" },
    { id: "cessation", label: "The Cessationism Debate" },
    { id: "videos", label: "🎬 Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: `linear-gradient(135deg, ${PURPLE}, ${GREEN})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
              }}
            >
              ✦
            </div>
            <span style={{ color: GREEN, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Spiritual Formation
            </span>
          </div>
          <h1 style={{ color: TEXT, fontSize: 36, fontWeight: 800, margin: "0 0 12px 0", letterSpacing: "-0.02em" }}>
            Spiritual Gifts
          </h1>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 660, margin: 0 }}>
            A comprehensive guide to understanding, identifying, and deploying the gifts of the Holy Spirit — from theology to practice, including the cessationism debate.
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 4,
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: 12,
            padding: 4,
            marginBottom: 36,
            overflowX: "auto",
          }}
        >
          {tabs.map((tab) => (
            <button type="button"
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "10px 18px",
                borderRadius: 9,
                border: "none",
                cursor: "pointer",
                background: activeTab === tab.id ? `linear-gradient(135deg, ${PURPLE}CC, ${GREEN}44)` : "transparent",
                color: activeTab === tab.id ? TEXT : MUTED,
                fontWeight: activeTab === tab.id ? 700 : 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                transition: "all 0.2s",
                boxShadow: activeTab === tab.id ? `0 0 0 1px ${PURPLE}66` : "none",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "theology" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ color: TEXT, fontWeight: 700, fontSize: 22, margin: "0 0 8px 0" }}>Theology of Spiritual Gifts</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, maxWidth: 640, margin: 0 }}>
                Before discovering your gift, understand the theological framework that makes sense of them. These {theologyItems.length} foundations are non-negotiable for a healthy gift theology.
              </p>
            </div>
            <Accordion items={theologyItems} />
          </div>
        )}

        {activeTab === "gifts" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ color: TEXT, fontWeight: 700, fontSize: 22, margin: "0 0 8px 0" }}>The Spiritual Gifts</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, maxWidth: 640, margin: 0 }}>
                {gifts.length} gifts drawn from {allLists.length} NT passages. Some gifts appear in multiple lists — noted with a badge. Filter by passage or category to explore.
              </p>
            </div>
            <GiftsTab />
          </div>
        )}

        {activeTab === "discover" && (
          <div>
            <div style={{ marginBottom: 36 }}>
              <h2 style={{ color: TEXT, fontWeight: 700, fontSize: 22, margin: "0 0 8px 0" }}>Discovering Your Gifts</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, maxWidth: 640, margin: 0 }}>
                Gift discovery is a communal, prayerful, experiential process — not a personality test. Follow these {discoverSteps.length} steps with patience and openness.
              </p>
            </div>
            <DiscoverTab />
          </div>
        )}

        {activeTab === "cessation" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ color: TEXT, fontWeight: 700, fontSize: 22, margin: "0 0 8px 0" }}>The Cessationism Debate</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, maxWidth: 640, margin: 0 }}>
                One of evangelical Christianity's most contested questions: do sign gifts (tongues, healing, prophecy) continue today? Both sides are presented honestly.
              </p>
            </div>
            <div
              style={{
                background: `${PURPLE}18`,
                border: `1px solid ${PURPLE}44`,
                borderRadius: 10,
                padding: "14px 18px",
                marginBottom: 24,
                fontSize: 13,
                color: MUTED,
                lineHeight: 1.65,
              }}
            >
              <strong style={{ color: TEXT }}>Note on fairness:</strong> This section presents both cessationist and continuationist arguments as charitably as possible. The goal is informed, humble engagement — not a verdict. Christians in your congregation likely hold both views.
            </div>
            <Accordion items={cessationItems} />
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, debates, and teachings on spiritual gifts — including the historic cessationism vs. continuationism debate.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "u-cBlGvk0pQ", title: "Have the Spiritual Gifts Ceased? — John Piper vs. John MacArthur", channel: "Comparison / Debate", description: "A presentation of the continuation vs. cessation debate featuring arguments from both John Piper (continuationist) and John MacArthur (cessationist) — the two most prominent evangelical voices on opposite sides." },
                  { videoId: "T3026rUjisI", title: "John MacArthur Explains Continuationist vs. Cessationist", channel: "Grace to You (John MacArthur)", description: "MacArthur directly explains the theological positions — what cessationism teaches, why he holds it, and his critique of continuationist practice in contemporary charismatic movements." },
                  { videoId: "hRgaZNBYOjo", title: "The Debate Over Holy Spirit Gifts: Cessationism vs. Continuationism", channel: "Theological Comparison", description: "A balanced exploration of how the debate over spiritual gifts shapes how believers experience faith today — covering the key biblical texts on both sides." },
                  { videoId: "OnJAqxnLv8M", title: "The Debate on Spiritual Gifts: John MacArthur vs. Dr. Michael Brown", channel: "Debate Series", description: "A direct debate between the two most prominent evangelical figures on opposite sides of the gifts debate — cessationist John MacArthur and continuationist Michael Brown." },
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
      </main>
      <Footer />
    </div>
  );
}
