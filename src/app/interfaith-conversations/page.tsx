"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "principles" | "islam" | "judaism" | "other" | "videos";

const principleItems = [
  {
    id: "why",
    title: "Why Christians Have Interfaith Conversations",
    content:
      "Christians engage people of other faiths for several reasons: (1) Evangelism — the Great Commission calls for disciples of all nations, including those from non-Christian backgrounds. (2) Love of neighbor — the person of another faith is a neighbor made in God's image, deserving genuine respect and honest engagement. (3) Intellectual integrity — Christianity makes exclusive truth claims ('I am the Way, the Truth, and the Life'), and intellectual honesty requires engaging those who disagree. (4) Witness — how we disagree is itself a witness. A Christian who engages a Muslim with genuine curiosity and respect is already showing something of the character of Christ. The failure to engage at all — by withdrawal or caricature — is itself a form of witness.",
  },
  {
    id: "approach",
    title: "Respectful and Honest: Both Are Required",
    content:
      "Two errors are common in interfaith conversations. The first is capitulation: affirming that all paths lead to God, that all religions teach essentially the same thing, and that Jesus is just one valid option among many. This is not honesty — it denies what Jesus explicitly claimed about himself ('No one comes to the Father except through me,' John 14:6). The second error is contempt: treating people of other faiths as enemies or simply as projects, without genuine interest in their experience, their questions, and their life. Jesus modeled something different with the Samaritan woman at the well (John 4): genuine engagement, honest about who he was, deeply interested in who she was.",
  },
  {
    id: "listen",
    title: "Listen Before You Speak",
    content:
      "Most interfaith conversations fail because both parties are waiting to speak rather than genuinely listening. Ask questions: What does your faith mean to you? What drew you to it (or kept you in it)? What is the hardest part? What do you find most beautiful? What do you think about Jesus? These questions demonstrate genuine curiosity — and they give you information about who the person actually is, rather than a stereotype of their religion. The best apologists understand the faith they're engaging better than average practitioners of that faith — which is only possible through genuine curiosity and deep listening.",
  },
  {
    id: "common",
    title: "Find Real Common Ground (But Don't Blur Lines)",
    content:
      "Many world religions share significant common moral and even theological ground with Christianity: monotheism (Islam, Judaism), the importance of prayer and fasting, care for the poor, reverence for Scripture, belief in an afterlife, and a deep sense of God's holiness. Naming these real points of connection is not compromise — it is intellectual honesty. But common ground should not be confused with identical ground. The Christian claim about the Trinity, the incarnation, the atoning death and physical resurrection of Jesus, and salvation by grace alone through faith alone in Christ alone is genuinely different from what Islam, Judaism, or Buddhism claims. Blurring these differences is not kindness — it is confusion.",
  },
  {
    id: "witness",
    title: "Share Your Own Story",
    content:
      "Doctrinal arguments can be dismissed; personal testimony is harder to dismiss. The most powerful interfaith witness is not an argument — it is a life transformed by Jesus Christ. 'I once was blind but now I see.' When you share honestly: what your life was like before, what changed, how it continues to change — you are offering something that no religion-comparison chart can offer. Acts 26 is the model: Paul before Agrippa does not argue theology — he tells his story. The cross-cultural witness of the early church was largely conducted through the personal testimony of people whose lives had been genuinely transformed.",
  },
  {
    id: "prayer",
    title: "Pray Before, During, and After",
    content:
      "Interfaith conversations are spiritual encounters, not merely intellectual exercises. The person you are talking with is not just a theological problem to be solved — they are someone for whom Christ died. Before the conversation, pray: 'Lord, give me genuine love for this person and genuine honesty about who you are.' During the conversation, pray silently for the Holy Spirit's presence. After the conversation, pray by name for the person. The Spirit converts — you don't. Your task is faithful witness and genuine love. The outcome is God's work. This conviction produces both urgency (the person needs Christ) and peace (the Spirit is at work).",
  },
];

type Religion = {
  id: string;
  name: string;
  adherents: string;
  belief: string;
  commonGround: string[];
  keyDifferences: string[];
  conversationTips: string[];
  keyBook: string;
};

const islamData: Religion = {
  id: "islam",
  name: "Islam",
  adherents: "1.8 billion worldwide",
  belief: "Strict monotheism. Jesus was a great prophet but not the Son of God. The Quran is God's final Word. Muhammad is the final prophet. Salvation through submission and deeds.",
  commonGround: [
    "Strict monotheism — one God, creator of all",
    "High view of Jesus as a prophet and miracle-worker",
    "Shared reverence for Abraham, Moses, and the prophets",
    "Prayer, fasting, almsgiving as central practices",
    "Deep moral seriousness and concern for justice",
    "Belief in the last judgment and eternal life",
  ],
  keyDifferences: [
    "The Trinity: Islam teaches God cannot be three persons — this is shirk (associating partners with God)",
    "The Incarnation: Jesus is not God in the flesh for Islam",
    "The Cross: the Quran denies Jesus's death — Jesus was taken up before crucifixion (Surah 4:157)",
    "Salvation: by submission and deeds; no need for atonement by a substitute",
    "Scripture: the Bible is considered corrupted; the Quran is God's final, uncorrupted Word",
    "Muhammad: Muslims consider him the final prophet; Christians do not",
  ],
  conversationTips: [
    "Ask what the Quran says about Jesus (Isa) — it says extraordinary things: born of a virgin, performed miracles, raised the dead, will return",
    "The crucifixion is a key question: 'What do you believe happened to Jesus? Why does the Quran say the appearance of crucifixion deceived people?'",
    "On the Trinity: clarify it is not 'God, Jesus, and Mary' (a common Muslim misunderstanding) but Father, Son, and Holy Spirit — one God in three persons",
    "Share your own experience of prayer, forgiveness, and assurance of God's love — many Muslims have no assurance of salvation",
    "Recommended: The Cross and the Crescent by Colin Chapman; Seeking Allah, Finding Jesus by Nabeel Qureshi",
  ],
  keyBook: "Seeking Allah, Finding Jesus — Nabeel Qureshi (Zondervan)",
};

const judaismData: Religion = {
  id: "judaism",
  name: "Judaism",
  adherents: "15 million worldwide",
  belief: "Ethical monotheism. God revealed himself uniquely to Israel through Torah. Jesus is not the Messiah. Salvation through covenant faithfulness and Torah observance (Orthodox) or through living a moral Jewish life (Reform/Conservative).",
  commonGround: [
    "Shared Hebrew Scripture (the Tanakh/Old Testament)",
    "Ethical monotheism — one God, creator and judge",
    "Abraham, Moses, and the prophets as shared heritage",
    "The Psalms and the prayer tradition",
    "Care for the poor, justice, and the stranger",
    "The concept of shalom — wholeness, flourishing",
  ],
  keyDifferences: [
    "Jesus: not the Messiah for Judaism; the Messiah will be a political deliverer who brings world peace",
    "The Atonement: Jewish atonement theology does not include a substitutionary sacrifice by the Messiah",
    "The Trinity: Judaism is strictly unitarian — the idea of God becoming human is theologically alien",
    "The New Covenant: for Judaism, the Torah remains the covenant; Jesus's claim to fulfill and transcend Torah is rejected",
    "Original Sin: Judaism generally does not hold the Augustinian doctrine of original sin",
    "The Church's History: Christian persecution of Jews (pogroms, Crusades, Holocaust) creates enormous barriers to hearing the Christian message",
  ],
  conversationTips: [
    "Approach with profound humility about the church's history of anti-Semitism — name it directly if appropriate",
    "Show genuine knowledge of and respect for the Hebrew Bible — especially the prophets and Psalms",
    "Isaiah 53 is a key text: ask what the 'Suffering Servant' refers to in Jewish interpretation",
    "Psalm 22: 'My God, my God, why have you forsaken me?' — ask how the psalmist imagined this being fulfilled",
    "Organizations focused on Jewish evangelism: Jews for Jesus, Chosen People Ministries, One for Israel",
  ],
  keyBook: "The Gospel According to Isaiah 53 — Darrell Bock & Mitch Glaser (eds.)",
};

const otherReligions = [
  {
    name: "Hinduism",
    adherents: "1.2 billion",
    color: "#F59E0B",
    overview:
      "A family of diverse traditions with no single founder, creed, or authority. Common threads: dharma (moral order), karma (action and its consequences), samsara (cycle of rebirth), moksha (liberation), and belief in many deities who may be manifestations of one ultimate reality (Brahman).",
    commonGround:
      "Profound moral seriousness (ahimsa, truthfulness, compassion). Recognition that the material world is not the ultimate reality. The Bhagavad Gita's teaching on selfless action (nishkama karma) resonates with Christian teaching on service. The concept of avatar (God taking human form) is a potential bridge to discussion of Incarnation.",
    keyDifference:
      "The ultimate reality in most Hindu systems is impersonal (Brahman); the Christian God is personal. Hinduism's cyclical view of time and history contrasts with Christianity's linear redemptive history. Moksha is escape from personhood; Christian salvation is the perfection of personhood. The exclusivity of Jesus's claims is the central stumbling block.",
    approach:
      "Show genuine respect for Hindu artistic, philosophical, and devotional heritage. Ask about their understanding of God's relationship to persons. Introduce the concept of God who speaks, acts in history, and becomes incarnate in a specific moment of history — contrasting with timeless, impersonal Brahman. Ravi Zacharias's background in Hinduism makes his apologetics particularly relevant here.",
  },
  {
    name: "Buddhism",
    adherents: "500 million",
    color: "#10B981",
    overview:
      "Founded by Siddhartha Gautama (5th century BC). Core teaching: the Four Noble Truths (suffering exists, caused by craving, extinguished by eliminating craving, through the Eightfold Path). The goal is nirvana — extinction of self and desire. Buddha did not teach about God — Buddhism is technically non-theistic or atheistic, though many Buddhist traditions include veneration of the Buddha and bodhisattvas.",
    commonGround:
      "A deeply serious engagement with suffering — dukkha (suffering/unsatisfactoriness) is Buddhism's starting point, and Christian theology agrees that the world is broken. The Buddhist emphasis on mindfulness, present-moment awareness, and contemplative practice resonates with Christian contemplative traditions. Both traditions emphasize compassion for all beings.",
    keyDifference:
      "Buddhism has no personal God, no creator, no sin in the Christian sense, no grace, no forgiveness, and the goal is the extinction of self rather than the perfection of personhood. The core anthropologies are incompatible: Christianity believes the self is real and eternally significant; Buddhism believes the self is an illusion to be transcended. The Cross is irrelevant in a worldview without sin and a God to offend.",
    approach:
      "Buddhism's diagnosis of suffering is right — but its solution (eliminate desire) is different from Christianity's (redeem desire toward God). Ask: 'If suffering comes from attachment, what do you think about the idea that God himself enters our suffering?' The Cross as God's solidarity with and transformation of suffering is a powerful point of contact.",
  },
  {
    name: "Mormonism (LDS)",
    adherents: "17 million",
    color: "#6B4FBB",
    overview:
      "Founded by Joseph Smith (1830). Uses Christian language (Jesus, gospel, salvation) but with significantly different definitions. LDS theology: God was once a man who became God; humans can become gods; Jesus is a separate, created being from the Father; the Book of Mormon is additional Scripture alongside (and superior to) the Bible.",
    commonGround:
      "Uses the name of Jesus Christ. High moral standards, strong family values, commitment to community, and genuine kindness. Many Mormons have deep personal devotion and sincerely believe they are Christians. The Bible is respected as Scripture (within LDS modifications).",
    keyDifference:
      "The LDS God is not the eternal, uncreated God of historic Christianity — he was once a man. Salvation is not by grace alone but includes exaltation through ordinances, obedience, and becoming like God. The Trinity is three separate beings, not one. The Book of Mormon and other LDS scriptures add to (and functionally supersede) the Bible. These are not peripheral differences — they touch the identity of God and the basis of salvation.",
    approach:
      "Distinguish clearly: do we mean the same thing by 'Jesus'? 'God'? 'salvation'? 'gospel'? Jude 3 cautions about 'the faith once for all delivered to the saints' — how does the 1830 revelation compare? Ask: 'What makes you confident the Book of Mormon is from God?' Recommended: Witnessing to Mormons by Robert Bowman.",
  },
  {
    name: "Jehovah's Witnesses",
    adherents: "8 million",
    color: "#3B82F6",
    overview:
      "Founded by Charles Taze Russell (1870s). Uses Christian language but denies the Trinity, the deity of Christ (Jesus is the first created being, not fully God), the personhood of the Holy Spirit, eternal conscious punishment (they believe in annihilationism), and the immortality of the soul.",
    commonGround:
      "Intense Bible engagement (though through their New World Translation, which has significant textual modifications). High moral standards, family values, door-to-door witness commitment. Belief in God as creator, Jesus's resurrection, and eternal life.",
    keyDifference:
      "Jesus is not fully God — he is Michael the Archangel incarnate, the first of God's creations. 'Jehovah' and the Holy Spirit are not three persons of one God but distinct hierarchical beings. No hell — only annihilation. Only 144,000 go to heaven; the rest of faithful JWs inherit the new earth. The New World Translation modifies key Christological texts (e.g., John 1:1 — 'the Word was a god').",
    approach:
      "Focus on the deity of Christ. John 1:1, Colossians 1:15-20, Hebrews 1, Revelation 1:17 (Jesus says 'I am the first and last' — the title Yahweh gives himself in Isaiah 44:6). Ask: 'What would it take for you to believe Jesus is fully God?' Recommended: Reasoning from the Scriptures with Jehovah's Witnesses by Ron Rhodes.",
  },
];

export default function InterfaithConversationsPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_interfaith-conversations_tab", "principles");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedIslamSection, setSelectedIslamSection] = usePersistedState<string>("vine_interfaith-conversations_selected_islam_section", "commonGround");
  const [selectedJudaismSection, setSelectedJudaismSection] = usePersistedState<string>("vine_interfaith-conversations_selected_judaism_section", "commonGround");

  function toggle(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function renderReligionDetail(religion: Religion, selectedSection: string, setSection: (s: string) => void) {
    const sections = [
      { id: "commonGround", label: "Common Ground" },
      { id: "keyDifferences", label: "Key Differences" },
      { id: "conversationTips", label: "Conversation Tips" },
    ];
    const data = religion[selectedSection as keyof Religion];
    const items = Array.isArray(data) ? (data as string[]) : [];

    return (
      <div style={{ display: "flex", gap: 24 }}>
        <div style={{ flex: "0 0 160px", display: "flex", flexDirection: "column", gap: 10 }}>
          {sections.map((s) => (
            <button type="button"
              key={s.id}
              onClick={() => setSection(s.id)}
              style={{
                padding: "12px 14px",
                borderRadius: 10,
                border: `1px solid ${selectedSection === s.id ? GREEN : BORDER}`,
                background: selectedSection === s.id ? `${GREEN}18` : CARD,
                color: selectedSection === s.id ? GREEN : TEXT,
                textAlign: "left",
                cursor: "pointer",
                fontWeight: selectedSection === s.id ? 700 : 400,
                fontSize: 13,
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
        <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, position: "sticky", top: 24, alignSelf: "flex-start" }}>
          <div style={{ marginBottom: 16 }}>
            <div style={{ color: MUTED, fontSize: 12, marginBottom: 4 }}>Adherents</div>
            <div style={{ color: GREEN, fontWeight: 700, fontSize: 15 }}>{religion.adherents}</div>
          </div>
          <div style={{ background: `${PURPLE}22`, border: `1px solid ${PURPLE}44`, borderRadius: 8, padding: "12px 16px", marginBottom: 20 }}>
            <div style={{ color: MUTED, fontSize: 12, marginBottom: 4 }}>Core Belief</div>
            <div style={{ color: TEXT, fontSize: 14, lineHeight: 1.65 }}>{religion.belief}</div>
          </div>
          <div style={{ color: MUTED, fontSize: 12, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>
            {sections.find((s) => s.id === selectedSection)?.label}
          </div>
          <ul style={{ margin: 0, padding: "0 0 0 18px" }}>
            {items.map((item, i) => (
              <li key={i} style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, marginBottom: 6 }}>{item}</li>
            ))}
          </ul>
          <div style={{ marginTop: 20, borderTop: `1px solid ${BORDER}`, paddingTop: 16 }}>
            <div style={{ color: MUTED, fontSize: 12, marginBottom: 6 }}>Key Book</div>
            <div style={{ color: TEXT, fontSize: 14 }}>{religion.keyBook}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 40px" }}>
        {/* Header */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          {["🌍 Missions", "💬 Evangelism"].map((tag) => (
            <span key={tag} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "4px 12px", fontSize: 13, color: MUTED }}>
              {tag}
            </span>
          ))}
        </div>
        <h1 style={{ fontSize: 38, fontWeight: 800, margin: "0 0 12px", lineHeight: 1.15 }}>
          Interfaith Conversations
        </h1>
        <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.7, margin: "0 0 32px", maxWidth: 680 }}>
          How to talk to Muslims, Jews, Hindus, Buddhists, and others about Jesus — with genuine respect, honest theology, and the humility of someone who knows they have been found by grace.
        </p>

        {/* Stats banner */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 40 }}>
          {[
            { num: "4.2B", label: "non-Christians in the world" },
            { num: "1.8B", label: "Muslims (largest non-Christian religion)" },
            { num: "1.2B", label: "Hindus" },
            { num: "500M", label: "Buddhists" },
          ].map((stat) => (
            <div key={stat.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 16px", textAlign: "center" }}>
              <div style={{ color: GREEN, fontSize: 28, fontWeight: 800, marginBottom: 6 }}>{stat.num}</div>
              <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.4 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {(
            [
              { id: "principles", label: "Principles" },
              { id: "islam", label: "Islam" },
              { id: "judaism", label: "Judaism" },
              { id: "other", label: "Other Religions" },
              { id: "videos", label: "Videos" },
            ] as { id: Tab; label: string }[]
          ).map((t) => (
            <button type="button"
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "10px 20px",
                borderRadius: 8,
                border: `1px solid ${tab === t.id ? GREEN : BORDER}`,
                background: tab === t.id ? `${GREEN}18` : CARD,
                color: tab === t.id ? GREEN : MUTED,
                fontWeight: tab === t.id ? 700 : 400,
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab: Principles */}
        {tab === "principles" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Principles for Interfaith Conversations</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {principleItems.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button type="button"
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      padding: "18px 20px",
                      background: "transparent",
                      border: "none",
                      color: TEXT,
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                    <span style={{ color: GREEN, fontSize: 20, fontWeight: 300 }}>{expanded[item.id] ? "−" : "+"}</span>
                  </button>
                  {expanded[item.id] && (
                    <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.75, fontSize: 15 }}>
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Islam */}
        {tab === "islam" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Conversations with Muslims</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 24 }}>
              Islam is the world's second-largest religion. Most Muslims are sincere, moral, and deeply spiritual people. The most effective witness combines genuine respect, honest theology, and personal testimony.
            </p>
            {renderReligionDetail(islamData, selectedIslamSection, setSelectedIslamSection)}
          </div>
        )}

        {/* Tab: Judaism */}
        {tab === "judaism" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Conversations with Jewish People</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 16 }}>
              Christians share the Hebrew Bible with Jewish people and are deeply indebted to God's covenant with Israel. Approach these conversations with deep humility, especially given the church's historical treatment of Jewish people.
            </p>
            <div style={{ background: "#EF444411", border: "1px solid #EF444433", borderRadius: 10, padding: "14px 18px", marginBottom: 24 }}>
              <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Important Historical Context</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, margin: 0 }}>
                The church has a deeply troubling history of anti-Semitism: medieval pogroms, Crusader massacres, forced conversions, and centuries of persecution culminating in the Holocaust — often carried out by people who called themselves Christians. Before any theological conversation, acknowledge this history honestly. No Jewish person owes you a hearing until they know you understand what has been done in the name of your faith.
              </p>
            </div>
            {renderReligionDetail(judaismData, selectedJudaismSection, setSelectedJudaismSection)}
          </div>
        )}

        {/* Tab: Other Religions */}
        {tab === "other" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Conversations with Practitioners of Other Religions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {otherReligions.map((religion) => (
                <div key={religion.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button type="button"
                    onClick={() => toggle(religion.name)}
                    style={{
                      width: "100%",
                      padding: "20px 24px",
                      background: "transparent",
                      border: "none",
                      color: TEXT,
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ width: 12, height: 12, borderRadius: "50%", background: religion.color }} />
                      <div>
                        <div style={{ fontSize: 17, fontWeight: 700 }}>{religion.name}</div>
                        <div style={{ color: MUTED, fontSize: 13, marginTop: 2 }}>{religion.adherents} adherents worldwide</div>
                      </div>
                    </div>
                    <span style={{ color: GREEN, fontSize: 20, fontWeight: 300 }}>{expanded[religion.name] ? "−" : "+"}</span>
                  </button>
                  {expanded[religion.name] && (
                    <div style={{ padding: "0 24px 24px" }}>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "0 0 16px" }}>{religion.overview}</p>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
                        <div style={{ background: `${religion.color}11`, border: `1px solid ${religion.color}33`, borderRadius: 8, padding: "14px 16px" }}>
                          <div style={{ color: religion.color, fontWeight: 700, fontSize: 12, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Common Ground</div>
                          <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{religion.commonGround}</p>
                        </div>
                        <div style={{ background: "#EF444411", border: "1px solid #EF444433", borderRadius: 8, padding: "14px 16px" }}>
                          <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 12, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Key Difference</div>
                          <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{religion.keyDifference}</p>
                        </div>
                        <div style={{ background: `${GREEN}11`, border: `1px solid ${GREEN}33`, borderRadius: 8, padding: "14px 16px" }}>
                          <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Conversation Approach</div>
                          <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{religion.approach}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "FTZ3GfL9yQM", title: "The Upside Down Kingdom", channel: "Timothy Keller / Gospel in Life", description: "Tim Keller explores how Jesus engaged people across cultural divides with genuine love and unflinching honesty — the model for all interfaith witness." },
                  { videoId: "GKYDGK2XDNw", title: "Missions Week Sermon 1", channel: "Paul Washer / HeartCry Missionary Society", description: "Paul Washer on the urgency and theology of reaching those who have never heard the gospel, including those from other religious traditions." },
                  { videoId: "0bafE4k4YXU", title: "The Essential Elements of the Great Commission", channel: "Paul Washer", description: "A careful exposition of the Great Commission — the theological foundation for why Christians engage people of other faiths with both respect and conviction." },
                  { videoId: "wQ5cclvdWjo", title: "If God Is Sovereign, How Can Man Be Free?", channel: "R.C. Sproul / Ligonier Ministries", description: "R.C. Sproul addresses the deepest questions people of other faiths raise about God, freedom, and salvation — with rigorous biblical answers." },
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
