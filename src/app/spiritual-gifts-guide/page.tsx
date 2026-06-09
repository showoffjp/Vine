"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const BLUE = "#3B82F6";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "lists", label: "Biblical Lists" },
  { id: "cessation", label: "Cessationism" },
  { id: "sign-gifts", label: "Sign Gifts" },
  { id: "service-gifts", label: "Service Gifts" },
  { id: "discover", label: "Discover Yours" },
  { id: "community", label: "In Community" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const GIFT_LISTS = [
  {
    id: "rom12",
    label: "Romans 12:6–8",
    content: "Paul lists seven gifts: prophecy (in proportion to faith), service, teaching, exhortation, giving (with generosity), leading (with diligence), and mercy (with cheerfulness). These are broadly 'motivational' gifts — dispositions that shape how a believer characteristically serves — and most are non-miraculous, making them relevant across all theological traditions.",
  },
  {
    id: "1cor12",
    label: "1 Corinthians 12:8–10, 28–30",
    content: "Paul's most extensive list covers: wisdom, knowledge, faith, healing, miracles, prophecy, discerning spirits, tongues, interpretation; and in verses 28–30 adds apostles, prophets, teachers, helps, and administration. The Corinthian context suggests these gifts were given for building up the body (12:7), not personal prestige — a correction Paul extends through chapter 14.",
  },
  {
    id: "eph4",
    label: "Ephesians 4:11–13",
    content: "The ascension gifts: apostles, prophets, evangelists, pastors, and teachers — given by the ascended Christ to equip the saints for ministry and build up the body until unity in the faith is reached. Many identify these as 'office' gifts rather than gifts every believer possesses, though debate continues about whether apostles and prophets are still active today.",
  },
  {
    id: "1pet4",
    label: "1 Peter 4:10–11",
    content: "Peter simplifies all gifts into two categories: speaking gifts (speak as the oracles of God) and serving gifts (serve in the strength God supplies). This framework emphasizes stewardship — 'as each has received a gift, use it to serve one another' — and divine dependence, so that God may be glorified through every exercise of gifts.",
  },
];

const CESSATION_VIEWS = [
  {
    id: "cessationist",
    label: "Cessationism",
    content: "Cessationists argue that sign gifts (tongues, healing, miracles, prophecy) ceased with the apostolic age. Key arguments: (1) foundational gifts authenticated the apostles (2 Cor 12:12; Heb 2:3–4); (2) the completed canon renders prophetic revelation unnecessary; (3) historical absence — the church fathers describe a post-apostolic decline in miracles. B.B. Warfield's Counterfeit Miracles (1918) is a touchstone text.",
  },
  {
    id: "continuationist",
    label: "Continuationism",
    content: "Continuationists hold that all gifts remain active until Christ returns. Arguments: (1) 1 Corinthians 13:10 ('the perfect') refers to Christ's return, not canon completion; (2) Joel 2:28–32, quoted in Acts 2, promises Spirit-gifts for the 'last days' — the entire new covenant age; (3) global reports of healings and tongues today; (4) the burden of proof lies with cessationism, not stated in Scripture. Wayne Grudem's Systematic Theology argues this position.",
  },
  {
    id: "open-but-cautious",
    label: "Open but Cautious",
    content: "A middle position held by theologians like D.A. Carson: Scripture does not mandate cessation, but contemporary expressions of sign gifts should be evaluated carefully. Many claimed 'prophecies' and 'tongues' today may differ substantially from the New Testament gifts. This view endorses prayer for healing and does not restrict the Spirit while maintaining high standards for evaluating claimed supernatural gifts.",
  },
  {
    id: "third-wave",
    label: "Third Wave / Charismatic",
    content: "Pentecostals (First Wave), the Charismatic Renewal (Second Wave), and the Third Wave (Wimber, Vineyard) represent escalating continuationist expressions. Distinctive features include: initial evidence tongues (Classical Pentecostalism), integration of gifts into mainline churches (Charismatics), and 'power evangelism' (Third Wave). Critical dialogue with cessationists has sharpened both positions.",
  },
];

const SIGN_GIFTS = [
  {
    title: "Tongues & Interpretation",
    color: PURPLE,
    body: "In Acts 2 tongues are known languages; in 1 Corinthians 14 they appear to be a prayer/praise language requiring interpretation for corporate edification. Paul regulates but does not forbid tongues (14:39). Cessationists see Acts 2 tongues as a one-time sign; continuationists see 14:2 ('speaks to God') as an ongoing gift. Both agree: tongues without interpretation bring no benefit to the congregation.",
  },
  {
    title: "Prophecy",
    color: BLUE,
    body: "New Testament prophecy is distinguished from Old Testament prophecy: it is tested (1 Thess 5:19–21; 1 Cor 14:29), fallible in continuationist readings, and subordinate to Scripture. Wayne Grudem argues NT prophecy is Spirit-prompted speech that may mix insight with error, unlike infallible OT prophecy. Cessationists hold that any true prophecy must be infallible — if the gift continues it must be identical to OT prophecy.",
  },
  {
    title: "Healing",
    color: TEAL,
    body: "Healings in Acts authenticate the apostolic message and demonstrate the kingdom's arrival. James 5:14–16 instructs elders to anoint with oil and pray for the sick. Continuationists see a genuine gift of healing still active; cessationists see James 5 as pastoral care, not a supernatural gift. All agree: God heals in answer to prayer, and the church should pray for the sick with faith and submission to God's sovereign will.",
  },
  {
    title: "Miracles & Discernment",
    color: GOLD,
    body: "The gift of miracles (1 Cor 12:10) encompasses works of power beyond healing. Discernment of spirits (12:10) involves distinguishing between the Holy Spirit, demonic deception, and human emotion. Both gifts are needed today: discernment guards against false teaching and counterfeit supernatural experiences. John's admonition to 'test the spirits' (1 John 4:1) applies in every era.",
  },
];

const SERVICE_GIFTS = [
  {
    title: "Teaching",
    color: GREEN,
    body: "The teacher expounds Scripture so others understand and apply it. Romans 12:7 and Ephesians 4:11 both list teaching; 1 Timothy 3 requires it of elders. This gift can be distinguished from the preaching/pastoral gift by its focus on careful explanation over exhortation — though they often overlap. Teachers in small groups, Sunday school, and seminaries exercise this gift without the public preaching role.",
  },
  {
    title: "Service / Helps",
    color: TEAL,
    body: "Service (Romans 12:7) and helps (1 Cor 12:28) describe practical assistance that frees others for their ministries. In Acts 6 the seven were appointed so the apostles could give themselves to prayer and the Word — the helpers' gift enabled the teachers' gift. Deacons classically embody this gift. It is no less supernatural for being practical: God supplies the strength (1 Pet 4:11).",
  },
  {
    title: "Leadership / Administration",
    color: PURPLE,
    body: "Leadership (proistēmi, Romans 12:8) means to stand before and direct; administration (kubernēsis, 1 Cor 12:28) is the helmsman word — navigating the church toward its goals. These gifts produce vision, organization, and coordination. Exercised in diligence (Rom 12:8), they serve the body rather than dominate it. Every church depends on someone with these gifts to translate theological convictions into sustainable ministry.",
  },
  {
    title: "Giving, Mercy & Exhortation",
    color: BLUE,
    body: "Giving (Romans 12:8) — with liberality (haplotēs, simplicity/generosity) — is a supernatural disposition to resource kingdom work beyond what duty demands. Mercy (12:8) shows compassion to the suffering with cheerfulness. Exhortation (paraklēsis, 12:8) encourages, comforts, and urges believers toward faithfulness — a cousin of preaching but more relational and one-on-one. All three show that 'ordinary' acts done supernaturally are genuine gifts.",
  },
];

const DISCOVER_STEPS = [
  { step: "1", title: "Know the Lists", body: "Study Romans 12, 1 Corinthians 12, and Ephesians 4 until you can name each gift and its purpose. You can't discover what you haven't learned to recognize." },
  { step: "2", title: "Pray and Desire", body: "Paul commands believers to 'earnestly desire the greater gifts' (1 Cor 12:31) and especially to prophesy (14:1). Ask God to clarify how he has wired you and where you should invest." },
  { step: "3", title: "Experiment in Ministry", body: "Try teaching a small group, serving at a food pantry, leading a team, or visiting the sick. The Spirit often confirms a gift through effective ministry and personal joy in its exercise." },
  { step: "4", title: "Receive Feedback", body: "Others see our gifts before we do. Ask trusted friends and mentors: 'Where have you seen me most effective? What do I do that seems to build others up most?' Body life includes gift recognition." },
  { step: "5", title: "Check Your Passion", body: "Gifts and passion usually align. What ministry makes you lose track of time? What need in the church burdens you? These emotional signals are part of how God confirms gifting." },
  { step: "6", title: "Submit to Eldership", body: "Bring your conclusions to church leaders for confirmation and placement. Lone-ranger ministry bypasses the accountability structure that protects both the gifted person and the congregation." },
];

const COMMUNITY_CARDS = [
  {
    title: "Every Member Ministers",
    color: GREEN,
    body: "Ephesians 4:12 says the Ephesians 4:11 gifts equip 'the saints for the work of ministry.' Ministry is not limited to professional clergy — every believer is a minister in the body. The diversity of gifts means the church needs all its members functioning, not just a paid staff. Spectator Christianity undercuts the body's design.",
  },
  {
    title: "Gifts Require Love",
    color: GOLD,
    body: "1 Corinthians 13 sits between two chapters on spiritual gifts deliberately. Without love, tongues are noise, prophecy is nothing, knowledge puffs up. Gifts exercised without love become weapons of pride or status. The 'more excellent way' is not an alternative to gifts but the indispensable context in which gifts become truly edifying.",
  },
  {
    title: "Order and Accountability",
    color: PURPLE,
    body: "Paul's instructions in 1 Corinthians 14 are extensive: two or three at most for tongues with interpretation, prophets weighing each other's words, women and men in appropriate roles (debated), and 'God is not a God of confusion but of peace' (14:33). Supernatural gifts operating without order contradict the Spirit who authors peace.",
  },
  {
    title: "Guarding Against Abuse",
    color: TEAL,
    body: "Spiritual gifts are misused when they become platforms for ego, means of control, tests of spirituality, or grounds for dividing churches. Cessationists warn of enthusiasm and emotionalism; continuationists warn of spiritual elitism. Both concerns are biblical. The test of any gift's authenticity is whether it builds up the body and exalts Christ — not whether it impresses observers.",
  },
];

const VIDEOS = [
  { videoId: "KmDc5U4y3vI", title: "Spiritual Gifts Explained – Tim Mackie (BibleProject)" },
  { videoId: "ynEAYqFWkuM", title: "What Are Spiritual Gifts? – R.C. Sproul" },
  { videoId: "J6kx6tKn1dU", title: "Cessationism vs. Continuationism – Sam Storms & Tom Schreiner" },
  { videoId: "UvV8VERu_D8", title: "Discovering Your Spiritual Gifts – Matt Chandler" },
  { videoId: "8T5eoJl5WMw", title: "The Purpose of Spiritual Gifts – John MacArthur" },
];

export default function SpiritualGiftsGuide() {
  const [tab, setTab] = useLocalStorage("vine_sgifts_tab", "overview");
  const [listsOpen, setListsOpen] = useLocalStorage("vine_sgifts_lists", "");
  const [cessOpen, setCessOpen] = useLocalStorage("vine_sgifts_cess", "");
  const [journal, setJournal] = useLocalStorage("vine_sgifts_journal", "");

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: GREEN + "33", color: GREEN, padding: "0.2rem 0.7rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1 }}>SPIRITUAL GIFTS</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.5rem" }}>Spiritual Gifts</h1>
        <p style={{ color: MUTED, fontSize: "1rem", marginBottom: "2rem", maxWidth: 680 }}>
          God gives gifts to every believer for the common good of the church — understanding them is how you steward your calling.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
                borderColor: tab === t.id ? GREEN : BORDER,
                background: tab === t.id ? GREEN + "22" : "transparent",
                color: tab === t.id ? GREEN : MUTED }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>What Are Spiritual Gifts?</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Spiritual gifts (Greek: <em>charismata</em>, from <em>charis</em>, grace) are abilities sovereignly distributed by the Holy Spirit to every believer for the purpose of building up the body of Christ (1 Cor 12:7). They are not natural talents, though God may sanctify natural abilities. They are not merited or earned — they are gifts of grace. And they are not primarily for the recipient's benefit but for the whole church's.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { label: "Given by", value: "The Holy Spirit", color: PURPLE },
                { label: "Purpose", value: "Build the Body", color: GREEN },
                { label: "Scope", value: "Every believer", color: BLUE },
                { label: "Standard", value: "Love (1 Cor 13)", color: GOLD },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 12, padding: "1.2rem", textAlign: "center" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.label}</div>
                  <div style={{ color: item.color, fontWeight: 700, fontSize: "1.1rem" }}>{item.value}</div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.8rem", color: GREEN }}>Key Texts</h3>
              <ul style={{ color: MUTED, lineHeight: 2, paddingLeft: "1.2rem" }}>
                <li><strong style={{ color: TEXT }}>Romans 12:6–8</strong> — Seven motivational gifts</li>
                <li><strong style={{ color: TEXT }}>1 Corinthians 12–14</strong> — Most extensive treatment: diversity, love, and order</li>
                <li><strong style={{ color: TEXT }}>Ephesians 4:11–13</strong> — Five equipping gifts for building the church</li>
                <li><strong style={{ color: TEXT }}>1 Peter 4:10–11</strong> — Speaking and serving categories</li>
              </ul>
            </div>
            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 14, padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.6rem", color: GOLD }}>Paul's Framework in 1 Corinthians 12</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.95rem" }}>
                There are different gifts but the same Spirit; different ministries but the same Lord; different activities but the same God who works all of them (12:4–6). The Trinity is the ground of unity in diversity. The gifts are not a ladder of spirituality — the Corinthians' valuing of tongues over teaching was precisely the error Paul corrects. No member can say to another, 'I don't need you' (12:21).
              </p>
            </div>
          </div>
        )}

        {/* BIBLICAL LISTS */}
        {tab === "lists" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Biblical Gift Lists</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              No single passage lists all gifts exhaustively — the combined lists give us a broad picture. Scholars count 18–22 distinct gifts depending on how lists are harmonized.
            </p>
            {GIFT_LISTS.map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${listsOpen === item.id ? GREEN : BORDER}`, borderRadius: 12, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button onClick={() => setListsOpen(listsOpen === item.id ? "" : item.id)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: "1rem", cursor: "pointer", textAlign: "left" }}>
                  <span>{item.label}</span>
                  <span style={{ color: GREEN, fontSize: "1.2rem" }}>{listsOpen === item.id ? "−" : "+"}</span>
                </button>
                {listsOpen === item.id && (
                  <div style={{ padding: "0 1.2rem 1rem", color: MUTED, lineHeight: 1.8, fontSize: "0.95rem" }}>{item.content}</div>
                )}
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BLUE}44`, borderRadius: 12, padding: "1.2rem", marginTop: "1rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>
                <strong style={{ color: BLUE }}>Note on Completeness:</strong> These lists are illustrative, not exhaustive. The Spirit gives gifts as he wills (1 Cor 12:11). Functions like intercession, hospitality (1 Pet 4:9), and craftsmanship (Exod 31:3) may represent additional gifts not formally catalogued in the New Testament lists.
              </p>
            </div>
          </div>
        )}

        {/* CESSATIONISM */}
        {tab === "cessation" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Cessationism vs. Continuationism</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              One of the most significant debates in evangelical theology: did the sign gifts cease with the apostolic age, or do all gifts continue until Christ returns?
            </p>
            {CESSATION_VIEWS.map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${cessOpen === item.id ? PURPLE : BORDER}`, borderRadius: 12, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button onClick={() => setCessOpen(cessOpen === item.id ? "" : item.id)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: "1rem", cursor: "pointer", "textAlign": "left" }}>
                  <span>{item.label}</span>
                  <span style={{ color: PURPLE, fontSize: "1.2rem" }}>{cessOpen === item.id ? "−" : "+"}</span>
                </button>
                {cessOpen === item.id && (
                  <div style={{ padding: "0 1.2rem 1rem", color: MUTED, lineHeight: 1.8, fontSize: "0.95rem" }}>{item.content}</div>
                )}
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.2rem", marginTop: "1rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>
                <strong style={{ color: GOLD }}>Pastoral Wisdom:</strong> Most evangelical churches hold either soft cessationism or the "open but cautious" view. Unity in the gospel matters more than this secondary debate. Where churches differ, charity and theological precision — not condescension — should mark the conversation.
              </p>
            </div>
          </div>
        )}

        {/* SIGN GIFTS */}
        {tab === "sign-gifts" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Sign Gifts</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Sign gifts are miraculous abilities that authenticated the apostolic message and demonstrated the kingdom's arrival. Their present status is the heart of the cessationism debate.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {SIGN_GIFTS.map(g => (
                <div key={g.title} style={{ background: CARD, border: `1px solid ${g.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: g.color, marginBottom: "0.5rem" }}>{g.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{g.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SERVICE GIFTS */}
        {tab === "service-gifts" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Service Gifts</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Service gifts are the less visible, often more foundational gifts that sustain the everyday life and mission of the church. Every tradition affirms these as ongoing.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {SERVICE_GIFTS.map(g => (
                <div key={g.title} style={{ background: CARD, border: `1px solid ${g.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: g.color, marginBottom: "0.5rem" }}>{g.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{g.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DISCOVER YOURS */}
        {tab === "discover" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Discovering Your Spiritual Gift</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Spiritual gift inventories are tools, not oracles. Real discovery happens through ministry, community, and prayer over time. These six steps give a framework.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {DISCOVER_STEPS.map(s => (
                <div key={s.step} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.2rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: GREEN + "22", color: GREEN, fontWeight: 800, fontSize: "1rem", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.step}</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: "0.3rem" }}>{s.title}</div>
                    <div style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.93rem" }}>{s.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* IN COMMUNITY */}
        {tab === "community" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Gifts in the Community of the Church</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Spiritual gifts are not personal achievements — they are body parts. Their purpose is the common good. These four principles shape how gifts function rightly in community.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
              {COMMUNITY_CARDS.map(c => (
                <div key={c.title} style={{ background: CARD, border: `1px solid ${c.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: c.color, marginBottom: "0.6rem" }}>{c.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.93rem" }}>{c.body}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 14, padding: "1.3rem", marginTop: "1.2rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: GREEN, marginBottom: "0.5rem" }}>The Body Metaphor</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>
                Paul's body metaphor in 1 Corinthians 12:14–26 is the most sustained image of how gifts work together. The eye cannot say to the hand, 'I don't need you.' The less honorable parts receive greater honor. The body's health depends on diversity, interdependence, and mutual care — not uniformity or competition. A church where everyone has the same gift is not a full body; it is an organ without a body.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Reflection Journal</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>Use this space to reflect on your gifts, where you've experienced fruitfulness, and where God may be calling you to serve.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                "Where have you seen evident fruitfulness when you served the church? What were you doing?",
                "What gift do others most frequently affirm in you? Does it match your own sense?",
                "What part of the cessationism/continuationism debate do you find most challenging or compelling?",
                "In what specific ministry context are you currently using — or could you start using — your gifts?",
              ].map((q, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem" }}>
                  <div style={{ color: GREEN, fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.4rem" }}>{q}</div>
                </div>
              ))}
            </div>
            <textarea value={journal} onChange={e => setJournal(e.target.value)}
              placeholder="Write your reflections here — your thoughts are saved locally in your browser..."
              style={{ width: "100%", minHeight: 220, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, color: TEXT, padding: "1rem", fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box" }} />
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Video Teaching</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>Curated teaching on spiritual gifts from trusted biblical teachers.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                  </div>
                  <div style={{ padding: "0.9rem 1rem" }}>
                    <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
