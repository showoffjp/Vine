"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#c9a227";

type Tab = "person" | "gifts" | "fruit" | "salvation" | "historical" | "videos";

const GIFTS = [
  { name: "Prophecy", ref: "1 Cor 14:3", icon: "📢", category: "Word", desc: "Speaking forth God's message for strengthening, encouraging, and comforting believers. Distinct from canonical prophecy — NT prophecy is subject to evaluation and weighing." },
  { name: "Teaching", ref: "Romans 12:7", icon: "📖", category: "Word", desc: "The Spirit-empowered ability to explain and apply Scripture in ways that edify the body. One of the most consistently emphasized gifts across all traditions." },
  { name: "Tongues", ref: "1 Cor 12:10", icon: "🗣️", category: "Sign", desc: "Speaking in an unlearned language — either a known human language (as at Pentecost, Acts 2) or a heavenly language. Paul emphasizes it must be interpreted in public worship." },
  { name: "Healing", ref: "1 Cor 12:9", icon: "🏥", category: "Sign", desc: "The Spirit-empowered ability to serve as an instrument of physical, emotional, or spiritual healing. James 5:14-16 calls the whole church to pray for the sick." },
  { name: "Helps / Service", ref: "Romans 12:7", icon: "🤝", category: "Service", desc: "Serving others in practical ways that enable the body to function — ranging from hospitality to administration. No less spiritual than the more visible gifts." },
  { name: "Leadership", ref: "Romans 12:8", icon: "🧭", category: "Service", desc: "The ability to organize, direct, and shepherd people toward God's purposes. Distinct from natural management gifts — the Spirit empowers leaders to serve selflessly." },
  { name: "Faith", ref: "1 Cor 12:9", icon: "🙏", category: "Word", desc: "A supernatural Spirit-given confidence that God will act in a specific situation — beyond ordinary saving faith. Associated with prayer and miraculous expectation." },
  { name: "Mercy", ref: "Romans 12:8", icon: "💙", category: "Service", desc: "Extraordinary compassion for those who suffer — the ability to enter into pain with others and minister practically with cheerfulness rather than duty." },
];

const FRUIT = [
  { name: "Love", greek: "agape", ref: "Galatians 5:22", color: "#EF4444", desc: "Not sentimental feeling but self-giving commitment to the good of another. The first fruit listed because it is the root of all the others. God's own nature expressed through human character." },
  { name: "Joy", greek: "chara", ref: "Galatians 5:22", color: "#F59E0B", desc: "Not happiness contingent on circumstances but a deep gladness rooted in what God has done and is doing. The joy of the Lord is a source of strength (Nehemiah 8:10) — independent of external conditions." },
  { name: "Peace", greek: "eirene", ref: "Galatians 5:22", color: "#10B981", desc: "Wholeness and right-relatedness with God, self, and others. Not the absence of conflict but the presence of God's shalom — the completeness that belongs to those who are reconciled to God." },
  { name: "Patience", greek: "makrothumia", ref: "Galatians 5:22", color: "#3B82F6", desc: "Long-suffering toward difficult people and trying circumstances. The ability to endure without giving in to bitterness or retaliation. Literally: 'long temper' — slow to anger." },
  { name: "Kindness", greek: "chrestotes", ref: "Galatians 5:22", color: PURPLE, desc: "Practical goodness toward others — the quality of being genuinely helpful and gracious in action, not just intention. The kindness of God that leads to repentance (Romans 2:4)." },
  { name: "Goodness", greek: "agathosune", ref: "Galatians 5:22", color: GREEN, desc: "Moral excellence and generosity in action. Related to kindness but emphasizes inner moral quality — being good, not just acting good. The Spirit produces genuine virtue, not performance." },
  { name: "Faithfulness", greek: "pistis", ref: "Galatians 5:22", color: "#8B5CF6", desc: "Reliability, trustworthiness, keeping commitments. The quality that makes someone dependable and worth trusting. Reflects God's own covenant faithfulness expressed through human character." },
  { name: "Gentleness", greek: "prautes", ref: "Galatians 5:23", color: "#06B6D4", desc: "Often translated meekness — but not weakness. Power under control. The strength that chooses not to assert itself for selfish ends. Jesus described himself as 'meek and humble in heart' (Matthew 11:29)." },
  { name: "Self-Control", greek: "enkrateia", ref: "Galatians 5:23", color: GOLD, desc: "Mastery over one's own desires, impulses, and appetites. The ability to say no to what should be refused and yes to what should be embraced. The Spirit produces the freedom to obey, not just willpower." },
];

const WORK_IN_SALVATION = [
  { title: "Conviction", ref: "John 16:8-11", icon: "⚡", body: "Before anyone comes to faith, the Holy Spirit must convict the world 'of sin, of righteousness, and of judgment.' The Spirit creates the awareness of spiritual need that precedes repentance. No one seeks God on their own (Romans 3:11) — the Spirit must first create seeking." },
  { title: "Regeneration", ref: "John 3:3-8; Titus 3:5", icon: "🌱", body: "The new birth — the sovereign creative act of the Spirit that imparts spiritual life where there was only spiritual death. Jesus told Nicodemus: 'Flesh gives birth to flesh, but the Spirit gives birth to spirit.' Regeneration precedes and produces faith, not vice versa. We are born again by the Spirit." },
  { title: "Indwelling", ref: "Romans 8:9; 1 Cor 6:19", icon: "🏠", body: "From the moment of new birth, every believer is indwelt by the Holy Spirit. 'You are not in the flesh but in the Spirit, if in fact the Spirit of God dwells in you. Anyone who does not have the Spirit of Christ does not belong to him' (Romans 8:9). The Spirit's presence is the mark of a Christian." },
  { title: "Sealing", ref: "Ephesians 1:13-14", icon: "🔒", body: "The Spirit seals believers as God's possession — a mark of ownership and a guarantee of the final inheritance. 'You were sealed with the promised Holy Spirit, who is the guarantee of our inheritance.' The sealing is the Spirit himself — the down-payment of future glory, assuring the security of salvation." },
  { title: "Sanctification", ref: "2 Cor 3:18; Romans 8:13", icon: "✨", body: "The Spirit progressively conforms believers into Christ's image — 'we are being transformed into the same image from one degree of glory to another' (2 Corinthians 3:18). Sanctification is not passive: 'by the Spirit you put to death the deeds of the body' (Romans 8:13). It requires active cooperation with the Spirit." },
  { title: "Assurance", ref: "Romans 8:16", icon: "💎", body: "'The Spirit himself bears witness with our spirit that we are children of God' (Romans 8:16). One of the Spirit's ministries is the inward witness of assurance — not a feeling alone but a testimony of the Spirit confirming our adoption. This assurance is the ground of Christian confidence in prayer and in suffering." },
];

const HISTORICAL = [
  { era: "Pentecost (Acts 2, 30 AD)", color: "#F59E0B", body: "The outpouring of the Spirit at Pentecost was the fulfillment of Joel 2:28-32 ('I will pour out my Spirit on all flesh') and Jesus' own promise (John 14-16; Acts 1:8). The coming of the Spirit marked the beginning of the church age — the last days in which the Spirit is given to all believers, not just to select leaders as in the OT. 3,000 were converted in a single day." },
  { era: "Montanism (2nd century)", color: "#EF4444", body: "Montanus claimed direct prophetic inspiration that superseded the apostolic witness. The Montanist controversy forced the church to develop criteria for discerning genuine spiritual gifts from counterfeit ones and to clarify the relationship between the Spirit and the written Word. The principle: the Spirit who inspired Scripture does not contradict Scripture." },
  { era: "The Charismatic Movements (20th century)", color: GREEN, body: "The Azusa Street Revival (Los Angeles, 1906) launched the Pentecostal movement, which grew to 500 million by the early 21st century. The Charismatic Renewal of the 1960s brought similar experiences into mainline Protestant and Catholic churches. These movements renewed emphasis on the Spirit's power, spiritual gifts, and experiential Christianity — while also generating significant theological debate." },
  { era: "Cessationism vs. Continuationism", color: PURPLE, body: "A major ongoing debate: do the 'sign gifts' (tongues, healing, prophecy) continue today? Cessationists argue the miraculous gifts served their purpose in confirming the apostolic message and ceased with the closing of the canon. Continuationists argue there is no clear biblical teaching that gifts ceased and point to the Spirit's ongoing work worldwide. Both sides agree the Spirit is active and powerful today." },
];

const VIDEOS = [
  { videoId: "oNNZO9i1Gjc", title: "Who Is the Holy Spirit?", channel: "Desiring God", description: "John Piper explains the person and work of the Holy Spirit — who he is, what he does, and why believers should cultivate deep communion with him." },
  { videoId: "p9K3UlI2yUo", title: "The Fruit of the Spirit", channel: "Ligonier Ministries", description: "R.C. Sproul teaches on the nine fruit of the Spirit in Galatians 5 — what they are, how they grow, and why they are fruit (not works) of the Spirit." },
  { videoId: "Lp3MQBM83p0", title: "Gifts of the Spirit Explained", channel: "The Gospel Coalition", description: "A careful examination of spiritual gifts — the charismatic debate, how to identify your gifts, and how gifts relate to the common good of the body." },
  { videoId: "7RoqnGcEjcs", title: "Baptism of the Holy Spirit", channel: "Ligonier Ministries", description: "What does it mean to be baptized in the Holy Spirit? Examining the key texts and the different views across Christian traditions." },
  { videoId: "v9Lm3kFVkDI", title: "Walking in the Spirit", channel: "Desiring God", description: "How to practically live a Spirit-filled life — abiding, praying in the Spirit, and cultivating sensitivity to his promptings in daily life." },
];

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "person", label: "Person of the Spirit", icon: "🕊️" },
  { id: "gifts", label: "Gifts", icon: "🎁" },
  { id: "fruit", label: "Fruit", icon: "🍇" },
  { id: "salvation", label: "Work in Salvation", icon: "🌊" },
  { id: "historical", label: "Historical", icon: "📜" },
  { id: "videos", label: "Videos", icon: "🎬" },
];

export default function HolySpiritPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_holy-spirit_tab", "person");
  const [expandedGift, setExpandedGift] = useState<number | null>(null);
  const [expandedFruit, setExpandedFruit] = useState<number | null>(null);
  const [expandedWork, setExpandedWork] = useState<number | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: `var(--font-jost, system-ui, sans-serif)` }}>
      <Navbar />
      <main id="main-content">

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #0a0a1a 0%, #0e1a0e 50%, #12101f 100%)`, paddingTop: 100, paddingBottom: 60, textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>🕊️</div>
        <div style={{ display: "inline-block", background: `${GOLD}18`, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 16px", fontSize: 12, fontWeight: 700, color: GOLD, marginBottom: 16, letterSpacing: 1 }}>
          PNEUMATOLOGY
        </div>
        <h1 style={{ fontFamily: `var(--font-cormorant, Georgia, serif)`, fontSize: "clamp(34px, 6vw, 58px)", fontWeight: 700, margin: "0 auto 16px", maxWidth: 700, lineHeight: 1.1 }}>
          The Holy Spirit
        </h1>
        <p style={{ color: MUTED, fontSize: 17, maxWidth: 580, margin: "0 auto 24px", lineHeight: 1.75 }}>
          The third person of the Trinity — not a force, not a feeling, but a fully divine person who convicts, regenerates, indwells, empowers, and transforms every believer into the likeness of Christ.
        </p>
        <div style={{ display: "inline-block", background: `${GREEN}18`, border: `1px solid ${GREEN}40`, borderRadius: 20, padding: "6px 20px", fontSize: 13, color: GREEN }}>
          &ldquo;Do not grieve the Holy Spirit of God, with whom you were sealed for the day of redemption.&rdquo; — Ephesians 4:30
        </div>
      </div>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* Tab nav */}
        <div style={{ display: "flex", gap: 4, margin: "32px 0", background: CARD, borderRadius: 14, padding: 5, border: `1px solid ${BORDER}`, overflowX: "auto" }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, minWidth: 80, padding: "10px 6px", borderRadius: 10, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", transition: "all 0.2s ease", whiteSpace: "nowrap" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* PERSON OF THE SPIRIT */}
        {activeTab === "person" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 12 }}>The Holy Spirit Is a Person</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}>
                One of the most common errors about the Holy Spirit is treating him as an impersonal force — like electricity or the Force in Star Wars. Scripture consistently presents the Spirit as personal: he speaks (Acts 13:2), teaches (John 14:26), guides (John 16:13), grieves (Ephesians 4:30), intercedes (Romans 8:26), and testifies (Romans 8:16). Personal actions require a personal being.
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                The Spirit is also fully God — equal with the Father and the Son. The divine attributes are ascribed to him: omniscience (1 Cor 2:10-11), omnipresence (Psalm 139:7-10), omnipotence (Luke 1:35), and eternality (Hebrews 9:14). When Ananias and Sapphira lied to the Holy Spirit (Acts 5:3), Peter clarified immediately: &ldquo;You have not lied just to human beings but to God&rdquo; (5:4).
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16, marginBottom: 24 }}>
              {[
                { title: "He Speaks", ref: "Acts 13:2", color: "#3B82F6", body: "'While they were worshiping the Lord and fasting, the Holy Spirit said, Set apart for me Barnabas and Saul for the work to which I have called them.' Speech is a personal act. The Spirit communicates with specificity and intentionality." },
                { title: "He Grieves", ref: "Ephesians 4:30", color: "#EF4444", body: "'Do not grieve the Holy Spirit of God.' Grief is an emotional response — it requires personhood. The Spirit is not indifferent to sin; he responds to it with grief. This changes how we view our sin: it wounds a person who loves us." },
                { title: "He Intercedes", ref: "Romans 8:26", color: PURPLE, body: "'The Spirit himself intercedes for us with groanings too deep for words.' The Spirit takes our inadequate prayers and brings them before the Father perfectly. This intercession is an expression of his personal care for our spiritual welfare." },
                { title: "He Guides", ref: "John 16:13", color: GREEN, body: "'When the Spirit of truth comes, he will guide you into all the truth.' Guidance requires discernment and wisdom — personal qualities. The Spirit is our internal guide through the complexities of life and the depths of Scripture." },
                { title: "He Convicts", ref: "John 16:8", color: GOLD, body: "'He will convict the world concerning sin and righteousness and judgment.' Conviction requires moral understanding and the capacity to communicate it — personal acts. The Spirit is the primary agent of evangelism working through the preached Word." },
                { title: "He Sanctifies", ref: "2 Cor 3:18", color: "#10B981", body: "'We are being transformed into the same image from one degree of glory to another. For this comes from the Lord who is the Spirit.' Transformation into Christ's character is his ongoing personal work within every believer." },
              ].map((c, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${c.color}30`, borderRadius: 14, padding: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <h3 style={{ color: c.color, fontWeight: 800, fontSize: 16, margin: 0 }}>{c.title}</h3>
                    <span style={{ background: `${c.color}20`, color: c.color, padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 700 }}>{c.ref}</span>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{c.body}</p>
                </div>
              ))}
            </div>

            <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 24, marginBottom: 16 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, marginBottom: 12 }}>Filling, Sealing & Baptism — Distinctions That Matter</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
                {[
                  { term: "Baptism in the Spirit", ref: "1 Cor 12:13", desc: "The Spirit's act of incorporating every believer into the body of Christ at the moment of new birth. Not a second blessing but the initiating work that makes one a Christian. 'In one Spirit we were all baptized into one body.'" },
                  { term: "Sealing by the Spirit", ref: "Eph 1:13-14", desc: "The Spirit himself is the seal — God's mark of ownership on every believer, guaranteeing the final inheritance. This is a once-for-all act at conversion, not a repeatable experience." },
                  { term: "Filling of the Spirit", ref: "Eph 5:18", desc: "The ongoing, renewable experience of the Spirit's fullness in the Christian life. The Greek verb is present tense: 'keep on being filled.' We are commanded to pursue this filling through prayer, surrender, and the Word." },
                ].map((item, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: 16, border: `1px solid ${BORDER}` }}>
                    <div style={{ color: PURPLE, fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{item.term}</div>
                    <div style={{ color: GOLD, fontSize: 11, fontWeight: 700, marginBottom: 8 }}>{item.ref}</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {[
              { quote: "The Spirit does not work in us apart from the Word, and the Word does not work without the Spirit. They are inseparable: the Spirit illuminates the Word; the Word tests the Spirit.", by: "John Calvin" },
              { quote: "He is not a force we use; he is a person we obey. The difference between these two postures toward the Spirit determines everything about the spiritual life.", by: "A.W. Tozer" },
            ].map((q, i) => (
              <div key={i} style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}25`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, fontStyle: "italic", marginBottom: 8 }}>&ldquo;{q.quote}&rdquo;</p>
                <div style={{ color: GOLD, fontWeight: 700, fontSize: 12 }}>— {q.by}</div>
              </div>
            ))}
          </div>
        )}

        {/* GIFTS */}
        {activeTab === "gifts" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 12 }}>
                The NT lists spiritual gifts in several passages — Romans 12, 1 Corinthians 12–14, Ephesians 4, 1 Peter 4. The lists are not exhaustive or identical, suggesting they are illustrative rather than complete. The Greek charismata (gifts of grace) indicates their origin: unearned grace-gifts given to build up the body of Christ.
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                What all traditions agree on: the Spirit gives gifts to every believer for the common good (1 Cor 12:7), gifts are for service not status, and spiritual gifts without love are worthless (1 Cor 13:1-3). Click any gift to expand it.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12, marginBottom: 24 }}>
              {GIFTS.map((g, i) => (
                <div key={i} onClick={() => setExpandedGift(expandedGift === i ? null : i)}
                  style={{ background: CARD, border: `1px solid ${expandedGift === i ? `${PURPLE}60` : BORDER}`, borderRadius: 12, padding: 18, cursor: "pointer", transition: "all 0.2s ease" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: expandedGift === i ? 12 : 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 22 }}>{g.icon}</span>
                      <div>
                        <div style={{ color: expandedGift === i ? PURPLE : TEXT, fontWeight: 700, fontSize: 15, transition: "all 0.2s ease" }}>{g.name}</div>
                        <div style={{ display: "flex", gap: 6, marginTop: 2 }}>
                          <span style={{ background: `${PURPLE}18`, color: PURPLE, padding: "1px 8px", borderRadius: 8, fontSize: 11, fontWeight: 600 }}>{g.ref}</span>
                          <span style={{ background: `${GREEN}18`, color: GREEN, padding: "1px 8px", borderRadius: 8, fontSize: 11, fontWeight: 600 }}>{g.category}</span>
                        </div>
                      </div>
                    </div>
                    <span style={{ color: MUTED }}>{expandedGift === i ? "▲" : "▼"}</span>
                  </div>
                  {expandedGift === i && (
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{g.desc}</p>
                  )}
                </div>
              ))}
            </div>
            <div style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}25`, borderRadius: 14, padding: 22 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 16, marginBottom: 12 }}>Cessationism vs. Continuationism</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
                <div style={{ background: BG, borderRadius: 10, padding: 16, border: `1px solid ${BORDER}` }}>
                  <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Cessationism</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>The miraculous sign gifts (tongues, healing, prophecy) served to authenticate the apostolic message and ceased when the NT canon was completed. Held by many Reformed and cessationist Baptist churches. Proponents include John MacArthur, B.B. Warfield.</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 16, border: `1px solid ${BORDER}` }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Continuationism</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>All gifts listed in Scripture continue today. The Spirit sovereignly distributes them as he wills (1 Cor 12:11) with no biblical statement of cessation. Held by Pentecostals, Charismatics, and many evangelicals. Proponents include Wayne Grudem, Sam Storms, Jack Deere.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FRUIT */}
        {activeTab === "fruit" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ marginBottom: 10 }}>
                <span style={{ background: `${GREEN}20`, color: GREEN, padding: "4px 12px", borderRadius: 20, fontSize: 13, fontWeight: 700 }}>Galatians 5:22-23</span>
              </div>
              <blockquote style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}25`, borderRadius: 10, padding: 18, margin: "12px 0", fontStyle: "italic", color: TEXT, fontSize: 15, lineHeight: 1.8 }}>
                &ldquo;But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.&rdquo;
              </blockquote>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                Note: it is &ldquo;fruit&rdquo; (singular), not &ldquo;fruits.&rdquo; The nine qualities are one integrated character — the character of Jesus expressed through the Spirit in the believer. They are not produced by willpower or spiritual discipline alone but are the natural outgrowth of abiding in Christ (John 15:4-5). The contrast is with the &ldquo;works of the flesh&rdquo; (vv.19-21) — the fruit comes from the Spirit, not from striving.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
              {FRUIT.map((f, i) => (
                <div key={i} onClick={() => setExpandedFruit(expandedFruit === i ? null : i)}
                  style={{ background: CARD, border: `1px solid ${expandedFruit === i ? `${f.color}60` : BORDER}`, borderRadius: 12, padding: 18, cursor: "pointer", transition: "all 0.2s ease" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: expandedFruit === i ? 12 : 0 }}>
                    <div>
                      <span style={{ color: f.color, fontWeight: 800, fontSize: 16 }}>{f.name}</span>
                      <span style={{ color: MUTED, fontSize: 13, marginLeft: 8, fontStyle: "italic" }}>({f.greek})</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ background: `${f.color}18`, color: f.color, padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 600 }}>{f.ref}</span>
                      <span style={{ color: MUTED }}>{expandedFruit === i ? "▲" : "▼"}</span>
                    </div>
                  </div>
                  {expandedFruit === i && (
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{f.desc}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WORK IN SALVATION */}
        {activeTab === "salvation" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Salvation is a trinitarian work from start to finish. The Father planned it, the Son accomplished it, and the Holy Spirit applies it. From the first stirring of conviction to the final glorification, the Spirit is active at every stage. No one comes to faith or grows in holiness apart from his work.
              </p>
            </div>
            {WORK_IN_SALVATION.map((w, i) => (
              <div key={i} onClick={() => setExpandedWork(expandedWork === i ? null : i)}
                style={{ background: CARD, border: `1px solid ${expandedWork === i ? `${GREEN}50` : BORDER}`, borderRadius: 14, padding: 22, marginBottom: 12, cursor: "pointer", transition: "all 0.2s ease" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 24 }}>{w.icon}</span>
                    <div>
                      <h3 style={{ color: expandedWork === i ? GREEN : TEXT, fontWeight: 800, fontSize: 17, margin: 0, transition: "all 0.2s ease" }}>{w.title}</h3>
                      <span style={{ background: `${PURPLE}18`, color: PURPLE, padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 600 }}>{w.ref}</span>
                    </div>
                  </div>
                  <span style={{ color: MUTED }}>{expandedWork === i ? "▲" : "▼"}</span>
                </div>
                {expandedWork === i && (
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginTop: 14, marginBottom: 0 }}>{w.body}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* HISTORICAL */}
        {activeTab === "historical" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Pneumatology — the doctrine of the Holy Spirit — was often underdeveloped in theological history compared to Christology and the Trinity. But the 20th century saw an explosion of reflection on the Spirit, driven partly by the Pentecostal and Charismatic movements which touched every continent.
              </p>
            </div>
            {HISTORICAL.map((h, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${h.color}30`, borderRadius: 14, padding: 24, marginBottom: 14 }}>
                <h3 style={{ color: h.color, fontWeight: 800, fontSize: 17, marginBottom: 12 }}>{h.era}</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{h.body}</p>
              </div>
            ))}
            <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, marginBottom: 12 }}>Key Pneumatological Voices</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
                {[
                  { name: "John Owen (1674)", work: "Pneumatologia", note: "The most comprehensive Puritan treatment of the Spirit. Owen addressed the Spirit's person, work in creation, application of redemption, gifts, and graces with pastoral depth." },
                  { name: "A.W. Tozer (1961)", work: "The Divine Conquest", note: "A prophetic critique of evangelical Christianity's practical neglect of the Spirit. Called Christians to move from knowing about the Spirit to actually yielding to his presence." },
                  { name: "Gordon Fee (1994)", work: "God's Empowering Presence", note: "The most thorough scholarly treatment of Paul's pneumatology. Fee demonstrates that the Spirit's power and presence are central, not peripheral, to Paul's entire theology." },
                ].map((v, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: 16, border: `1px solid ${BORDER}` }}>
                    <div style={{ color: PURPLE, fontWeight: 800, fontSize: 14, marginBottom: 2 }}>{v.name}</div>
                    <div style={{ color: GOLD, fontSize: 12, fontWeight: 700, marginBottom: 8, fontStyle: "italic" }}>{v.work}</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{v.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Sermons and teachings on the person and work of the Holy Spirit from trusted evangelical scholars and pastors.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                    src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                  <div style={{ padding: "16px 20px" }}>
                    <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                    <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{v.channel}</p>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
