"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", ROSE = "#E11D48";

const TABS = [
  { id: "who", label: "Who Is the Holy Spirit" },
  { id: "gifts", label: "Gifts of the Spirit" },
  { id: "baptism", label: "Baptism of the Spirit" },
  { id: "fruit", label: "Fruit of the Spirit" },
  { id: "charismatic", label: "The Charismatic Question" },
  { id: "videos", label: "Videos" },
];

const WHO_SECTIONS = [
  {
    title: "The Spirit in the Old Testament",
    color: TEAL,
    desc: "The Hebrew word ruach (wind, breath, spirit) appears over 375 times in the OT. From the very beginning, the Spirit of God was hovering over the waters (Gen 1:2) — present at creation, giving life to what was formless and empty. The Spirit came upon Israel’s judges (Gideon, Samson), prophets (Isaiah, Ezekiel, Jeremiah), and kings (David — 1 Sam 16:13). The Spirit’s OT presence was selective and often temporary: given to particular people for particular tasks. The great promise was that one day God would pour out his Spirit on all flesh (Joel 2:28–29) and give his people a new heart with his Spirit within them (Ezek 36:26–27).",
  },
  {
    title: "The Spirit in Jesus’ Life",
    color: GREEN,
    desc: "Jesus was conceived by the Holy Spirit (Matt 1:20; Luke 1:35). At his baptism the Spirit descended on him like a dove while the Father’s voice declared, “This is my beloved Son” (Matt 3:16–17) — a Trinitarian moment. Immediately after, the Spirit drove Jesus into the wilderness for forty days of temptation (Mark 1:12). Jesus returned in the power of the Spirit (Luke 4:14) and declared his Nazareth manifesto: “The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor” (Luke 4:18, quoting Isa 61:1). His entire ministry was Spirit-anointed and Spirit-empowered.",
  },
  {
    title: "Pentecost: Fulfillment of Joel 2",
    color: GOLD,
    desc: "Acts 2 records the outpouring of the Spirit on the day of Pentecost — fifty days after Passover, ten days after the ascension. Wind, fire, and tongues marked the event. Peter immediately quoted Joel 2:28–32: “In the last days, God says, I will pour out my Spirit on all people.” This was not a temporary blessing but the inauguration of the new covenant age. The Spirit was now poured out on all flesh — sons and daughters, old and young, servants and free — removing the selectivity of the old covenant era. Three thousand were added to the community that day.",
  },
  {
    title: "The Spirit as the Third Person of the Trinity",
    color: PURPLE,
    desc: "The Holy Spirit is not a divine force, energy, or influence — he is a fully personal, fully divine member of the Trinity. He speaks (Acts 13:2), teaches (John 14:26), intercedes (Rom 8:26–27), grieves (Eph 4:30), and can be lied to (Acts 5:3). Lying to the Spirit is lying to God (Acts 5:3–4). He is omniscient (1 Cor 2:10–11), omnipresent (Ps 139:7), and eternal (Heb 9:14). The Nicene Creed confesses him as “the Lord and Giver of life, who proceeds from the Father and the Son, who together with the Father and the Son is worshiped and glorified.”",
  },
  {
    title: "The Sin Against the Holy Spirit",
    color: ROSE,
    desc: "Jesus warned of a sin that “will not be forgiven, either in this age or in the age to come” (Matt 12:32): blasphemy against the Holy Spirit. In context, this referred to the Pharisees attributing Jesus’ Spirit-empowered works to Beelzebul (Satan). Theologically, this is the hardened, persistent rejection of the Spirit’s testimony to Christ — attributing the Spirit’s saving work to evil and refusing to repent. It is not an accidental sin or a passing doubt, but a final, deliberate resistance to the Spirit’s call. Those genuinely troubled by having committed this sin likely have not — that very concern is evidence of the Spirit’s ongoing work.",
  },
];

const GIFTS_SECTIONS = [
  {
    title: "The Gift Lists",
    color: BLUE,
    desc: "Paul provides four key passages listing spiritual gifts. Romans 12:6–8 emphasizes serving gifts: prophecy, serving, teaching, encouragement, giving, leadership, mercy. 1 Corinthians 12:8–10 includes wisdom, knowledge, faith, healing, miracles, prophecy, discernment, tongues, and interpretation. Ephesians 4:11 lists office-gifts: apostles, prophets, evangelists, pastors, teachers. 1 Peter 4:10–11 organizes them around speaking and serving. Together these passages show that gifts are diverse, Spirit-distributed, and given for the common good — not personal enrichment.",
  },
  {
    title: "Cessationism",
    color: ROSE,
    desc: "Cessationists argue that the miraculous or “sign” gifts — tongues, prophecy, healing, miracles — ceased with the apostolic age or the completion of the NT canon. These gifts authenticated the apostles’ message and laid the foundation of the church (Eph 2:20). With the foundation laid and the canon closed, the gifts of authentication are no longer needed. 1 Corinthians 13:8–10 — “when completeness comes, the imperfect disappears” — is read as referring to the completed canon. Key advocates: B.B. Warfield, John MacArthur, Thomas Schreiner.",
  },
  {
    title: "Continuationism",
    color: GREEN,
    desc: "Continuationists hold that all spiritual gifts remain available and active throughout church history until Christ returns. 1 Corinthians 13:10 (“when completeness comes”) refers to the Second Coming, not the canon — supported by Paul’s language of seeing “face to face” (v.12). The gifts are for the “common good” (1 Cor 12:7) with no stated expiration. Wayne Grudem argues in Systematic Theology that NT-era prophecy is distinct from canonical prophecy — it is fallible, human speech that must be tested (1 Thess 5:20–21; 1 Cor 14:29). Gordon Fee, Sam Storms, and John Piper also hold this view.",
  },
  {
    title: "The Charismatic and Pentecostal Tradition",
    color: GOLD,
    desc: "Pentecostalism (beginning with the Azusa Street revival, 1906) and the charismatic renewal (1960s–1980s) have brought continuationist convictions to hundreds of millions worldwide. Pentecostals typically hold that all NT gifts are fully operational and normative, and that tongues serves as the “initial evidence” of Spirit baptism. Charismatics within mainline and Catholic traditions embrace gifts while not always requiring tongues as evidence. The charismatic tradition has produced extraordinary missionary expansion and renewal.",
  },
  {
    title: "Wayne Grudem’s Continuationist Arguments",
    color: PURPLE,
    desc: "Wayne Grudem’s 1988 work The Gift of Prophecy in the New Testament and Today is the landmark continuationist treatment. Grudem distinguishes apostolic prophecy (infallible, canonical) from congregational prophecy (fallible, subject to evaluation). He argues that 1 Corinthians 14:29–30 presupposes fallible prophecy — otherwise why evaluate it? He also notes that cessationists rely on extra-biblical arguments (the canon is complete) not found in the biblical texts themselves, which say the gifts will cease only when “the perfect” comes at Christ’s return.",
  },
];

const BAPTISM_SECTIONS = [
  {
    title: "The Seven Occurrences in the NT",
    color: TEAL,
    desc: "The phrase “baptize/baptism of/in/with the Holy Spirit” occurs seven times in the NT: Matthew 3:11, Mark 1:8, Luke 3:16, John 1:33, Acts 1:5, Acts 11:16, and 1 Corinthians 12:13. The first five are predictive — John the Baptist or Jesus promises what is coming. Acts 11:16 references Cornelius. Only 1 Corinthians 12:13 reflects theologically on what this baptism means for all believers: “For we were all baptized by one Spirit so as to form one body.”",
  },
  {
    title: "View 1: Spirit Baptism = Conversion (Reformed)",
    color: GREEN,
    desc: "The Reformed and most Protestant view holds that Spirit baptism is what happens to every believer at conversion — it is the work of the Spirit uniting the believer to Christ and to the body of Christ (1 Cor 12:13). The Pentecost event (Acts 2) and Cornelius event (Acts 10) are unique historical moments in the redemptive-historical unfolding of the new covenant age, not paradigms for individual post-conversion experiences. On this view, asking to be “baptized in the Spirit” is asking for what you already have as a believer.",
  },
  {
    title: "View 2: Spirit Baptism = Second Experience (Pentecostal)",
    color: GOLD,
    desc: "Pentecostals hold that Spirit baptism is a distinct, post-conversion experience of empowerment for witness and ministry — based primarily on the disciples’ experience (they were already believers before Acts 2) and on Acts 8’s Samaritans who had believed but not yet received the Spirit. This second experience is sought, prayed for, and received — and is typically accompanied by speaking in tongues as initial evidence. Classical Pentecostalism builds its distinctive theology on this reading of Acts.",
  },
  {
    title: "Acts 8: The Samaritan Case",
    color: BLUE,
    desc: "Acts 8:14–17 is the most challenging passage for Reformed readers. Philip preaches in Samaria; many believe and are baptized. When the Jerusalem apostles hear, they send Peter and John, who pray for them to receive the Holy Spirit — “because the Holy Spirit had not yet come on any of them; they had simply been baptized in the name of the Lord Jesus.” Pentecostals read this as Spirit baptism following conversion. Reformed readers note this may be a unique salvific-historical delay tied to the Samaritan schism — requiring apostolic mediation to unite Jewish and Samaritan believers in one body.",
  },
  {
    title: "Acts 10: Cornelius and the Gentiles",
    color: PURPLE,
    desc: "Acts 10:44–48 records the Spirit falling on Cornelius and his household while Peter is still speaking — before their water baptism. Peter recognizes this as the same gift the disciples received at Pentecost (Acts 11:15–17). This “Gentile Pentecost” shows the Spirit’s boundary-crossing gift extended to the nations. The sequence here (Spirit then water baptism) is the inverse of normal NT order — suggesting God was making a dramatic point about Gentile inclusion, not establishing a pattern for individual Spirit reception.",
  },
  {
    title: "The Evidence Question: Tongues as Initial Sign?",
    color: ROSE,
    desc: "Classical Pentecostals hold that speaking in tongues is the normative initial physical evidence of Spirit baptism. This is based on Acts 2 (Pentecost), Acts 10 (Cornelius), and Acts 19 (Ephesian disciples). Critics note that Acts 8’s Samaritans show no tongues, and that 1 Corinthians 12:30 asks rhetorically “Do all speak in tongues?” — expecting the answer no. Grudem and other continuationists accept tongues as a valid ongoing gift without requiring it as the universal sign of Spirit reception. Many charismatics are “open but cautious” on this specific doctrine.",
  },
];

const FRUIT_SECTIONS = [
  {
    title: "Galatians 5:22–23 Unpacked",
    color: GOLD,
    desc: "Paul lists nine qualities in Galatians 5:22–23: love (agape), joy (chara), peace (eirene), patience (makrothymia), kindness (chrestotes), goodness (agathosyne), faithfulness (pistis), gentleness (prautes), self-control (enkrateia). These are not nine separate gifts distributed to different believers — they are a unified cluster of Christlike character. The grammar confirms this: “fruit” (karpos) is singular, not plural. The Spirit produces not isolated virtues in specialists but the whole character of Christ in every believer.",
  },
  {
    title: "Fruit, Not Fruits — Why the Singular Matters",
    color: TEAL,
    desc: "Paul deliberately chose the singular “fruit” over the plural “fruits.” This counters the idea that some Christians get love and others get self-control. The Spirit’s work is to produce the whole Christlike character in every believer — though growth in each quality varies. Augustine noted that love is the root from which all other virtues grow. This is why Paul begins with agape — it is not merely the first virtue listed but the foundation of all the others.",
  },
  {
    title: "Contrast with the Works of the Flesh",
    color: ROSE,
    desc: "Galatians 5:19–21 lists the “works of the flesh”: sexual immorality, impurity, debauchery, idolatry, witchcraft, hatred, discord, jealousy, fits of rage, selfish ambition, dissensions, factions, envy, drunkenness, orgies. The contrast is stark. Note: the flesh’s products are called “works” (plural) — scattered, fragmentary, self-defeating. The Spirit’s product is “fruit” (singular) — unified, coherent, life-giving. The flesh fragments; the Spirit integrates.",
  },
  {
    title: "How Fruit Grows: Cultivated, Not Manufactured",
    color: GREEN,
    desc: "Fruit is not manufactured by effort — it is cultivated by abiding. Jesus’ vine metaphor in John 15 is essential: “Abide in me, and I in you. As the branch cannot bear fruit by itself, unless it abides in the vine, neither can you, unless you abide in me” (John 15:4). The fruit of the Spirit is the Spirit’s work in those who remain connected to Christ. We do not produce love by trying harder — we remain in the One who is love, and love grows. But this does not mean passivity: Paul commands “walk by the Spirit” (Gal 5:16) — active, ongoing cooperation.",
  },
  {
    title: "The Spirit and Sanctification",
    color: PURPLE,
    desc: "Two classic models of Spirit-sanctification: Definitive sanctification (Reformed) holds that at conversion the Spirit decisively breaks the power of sin and transfers the believer from Adam to Christ — progressive growth builds on this foundation (Rom 6:1–11). Progressive sanctification then unfolds throughout the Christian life (Phil 1:6; 2:12–13). The Wesleyan-Holiness tradition emphasizes a “second blessing” of entire sanctification — a crisis experience in which the Spirit cleanses the heart of inbred sin. Both traditions agree that sanctification is the Spirit’s work in which the believer actively participates.",
  },
];

const CHARISMATIC_SECTIONS = [
  {
    title: "Glossolalia: Tongues in Pastoral Context",
    color: BLUE,
    desc: "Speaking in tongues (glossolalia, from Greek glossa, tongue/language) appears in Acts 2 (xenolalia — known human languages), 1 Corinthians 12–14 (possibly ecstatic speech or heavenly language), and Acts 10 and 19. Paul both affirms tongues (“I speak in tongues more than all of you” — 1 Cor 14:18) and strongly regulates them in corporate worship: they require interpretation (1 Cor 14:27–28), build up the body rather than the individual, and should not dominate or confuse. Pastorally, the question is not “is this real?” but “is this edifying and orderly?”",
  },
  {
    title: "Prophecy in the Local Church",
    color: TEAL,
    desc: "1 Corinthians 14 is Paul’s extended treatment of prophecy in corporate worship — he calls it the greatest gift for building up the church (v.1–5). He commands that prophetic utterances be weighed (“what others say carefully consider” — v.29). Continuationists argue that NT congregational prophecy is not infallible canonical Scripture (which would need no testing) but Spirit-prompted speech that carries divine weight yet remains subject to evaluation. This guards against both suppressing the Spirit (1 Thess 5:19–22) and uncritical acceptance of claimed prophecy.",
  },
  {
    title: "Healing Services and Divine Healing",
    color: GREEN,
    desc: "James 5:14–15 commands elders to pray over the sick with anointing oil — “the prayer of faith will save the sick person.” God heals in response to prayer — this is not in dispute across traditions. The dispute is over whether miraculous healing is guaranteed, expected as normative, or granted sovereignly by God’s discretion. Paul’s “thorn in the flesh” (2 Cor 12:7–9) and his leaving Trophimus sick (2 Tim 4:20) suggest healing is not automatically granted. Cessationists often hold that healing can happen through prayer without requiring a charismatic gift of healing.",
  },
  {
    title: "The Prosperity Gospel Distortion",
    color: ROSE,
    desc: "The prosperity gospel — the teaching that faith guarantees health and wealth — is a serious distortion of authentic charismatic theology, condemned by cessationists and continuationists alike. It turns the Spirit’s gifts into commodities, treats faith as a mechanism to obtain blessings, and contradicts the NT’s repeated theology of suffering (Rom 8:17–18; 2 Cor 4:7–12; Phil 4:11–12). Mark 16:17–18 (the longer ending, textually disputed) is sometimes cited to support guaranteed signs — but mainstream charismatic scholars do not build their case on this passage alone.",
  },
  {
    title: "What Cessationists and Charismatics Can Learn from Each Other",
    color: PURPLE,
    desc: "Cessationists rightly insist on the sufficiency of Scripture, testing all claims by the Word, theological precision about the canon, and caution against spiritual manipulation. Charismatics rightly insist on expectation in prayer, openness to the Spirit’s sovereign action, the reality of spiritual gifts for the body’s building, and the life of the Spirit beyond mere intellectual assent. D.A. Carson’s “open but cautious” position: remain open to the Spirit’s extraordinary working, evaluate all claims carefully, reject excesses, do not despise prophesying (1 Thess 5:20).",
  },
  {
    title: "The “Open but Cautious” Position",
    color: GOLD,
    desc: "Many evangelical scholars — D.A. Carson, John Piper, Sinclair Ferguson — occupy a mediating position: the gifts are in principle still available but are not guaranteed, may look different than their NT expressions, and require careful discernment. This position takes seriously both the NT’s expectation of ongoing Spirit-gifts and the warnings against false prophecy and spiritual excess. It refuses to quench the Spirit (1 Thess 5:19) while insisting on biblical order (1 Cor 14:40). It maintains the ultimate authority of Scripture while remaining open to the Spirit’s extraordinary work.",
  },
];

const VIDEOS = [
  { videoId: "CxHFg5JK9mU", title: "Tim Keller on the Holy Spirit" },
  { videoId: "4Zm7uSiUTZQ", title: "Wayne Grudem — Spiritual Gifts" },
  { videoId: "Hku4RqWCL2c", title: "John Piper on the Holy Spirit" },
];

export default function ChristianHolySpiritGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState("who");
  const [openItem, setOpenItem] = useState("");

  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" };
  const accordionBtn = (open: boolean, color: string) => ({
    width: "100%", textAlign: "left" as const, display: "flex", justifyContent: "space-between",
    alignItems: "center", padding: "1rem 1.25rem", background: open ? `${color}12` : "transparent",
    border: `1px solid ${open ? color + "40" : BORDER}`, borderRadius: 12, cursor: "pointer", marginBottom: 8,
    color: TEXT, fontWeight: 700, transition: "all .2s",
  });

  const currentSections =
    tab === "who" ? WHO_SECTIONS :
    tab === "gifts" ? GIFTS_SECTIONS :
    tab === "baptism" ? BAPTISM_SECTIONS :
    tab === "fruit" ? FRUIT_SECTIONS :
    tab === "charismatic" ? CHARISMATIC_SECTIONS : [];

  const accentColor =
    tab === "who" ? TEAL :
    tab === "gifts" ? BLUE :
    tab === "baptism" ? GOLD :
    tab === "fruit" ? GREEN :
    tab === "charismatic" ? PURPLE : TEAL;

  const tabTitle =
    tab === "who" ? "Who Is the Holy Spirit" :
    tab === "gifts" ? "Gifts of the Spirit" :
    tab === "baptism" ? "Baptism of the Spirit" :
    tab === "fruit" ? "Fruit of the Spirit" :
    tab === "charismatic" ? "The Charismatic Question" : "Videos";

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: TEAL, textTransform: "uppercase" }}>Christian Theology</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to the Holy Spirit
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }}>
            A theology of the Holy Spirit &mdash; the Spirit in the Old Testament, Pentecost, the gifts and baptism of the Spirit, the fruit of the Spirit, sanctification, and the charismatic question.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t.id} type="button" onClick={() => { setTab(t.id); setOpenItem(""); }}
              style={{
                padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t.id ? accentColor : "transparent",
                color: tab === t.id ? "#fff" : MUTED,
                border: `1px solid ${tab === t.id ? accentColor : BORDER}`,
                cursor: "pointer", transition: "all .18s"
              }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab !== "videos" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1.25rem", color: accentColor }}>{tabTitle}</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {currentSections.map((section, i) => {
                const key = String(i);
                const open = openItem === key;
                return (
                  <div key={section.title}>
                    <button
                      type="button"
                      style={accordionBtn(open, section.color)}
                      onClick={() => setOpenItem(open ? "" : key)}
                    >
                      <span>{section.title}</span>
                      <span style={{ color: section.color, fontSize: "1.1rem", lineHeight: 1 }}>{open ? "−" : "+"}</span>
                    </button>
                    {open && (
                      <div style={{
                        background: `${section.color}0A`,
                        border: `1px solid ${section.color}20`,
                        borderRadius: 10,
                        padding: "1rem 1.25rem",
                        marginBottom: 8,
                      }}>
                        <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{section.desc}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1.25rem", color: TEAL }}>
              Video Teaching on the Holy Spirit
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <div key={v.videoId}>
                  <div style={{ fontWeight: 700, color: TEXT, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{v.title}</div>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {[
            { label: "Trinity Guide", href: "/christian-trinity-guide" },
            { label: "Pneumatology Guide", href: "/pneumatology-guide" },
            { label: "Sanctification Guide", href: "/sanctification-guide" },
            { label: "Soteriology Guide", href: "/soteriology-guide" },
          ].map((l) => (
            <a key={l.href} href={l.href} style={{ padding: "0.4rem 1rem", borderRadius: 999, fontSize: "0.82rem", fontWeight: 700, border: `1px solid ${BORDER}`, color: MUTED, textDecoration: "none" }}>
              {l.label}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
