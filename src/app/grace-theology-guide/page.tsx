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
  { id: "kinds", label: "Kinds of Grace" },
  { id: "tulip", label: "TULIP" },
  { id: "prevenient", label: "Prevenient Grace" },
  { id: "freewill", label: "Grace & Free Will" },
  { id: "means", label: "Means of Grace" },
  { id: "living", label: "Living by Grace" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const KINDS = [
  {
    title: "Common Grace",
    color: GOLD,
    body: "Common grace is God's unmerited favor to all people regardless of their spiritual status. It includes the preservation of creation (Gen 8:22), the restraint of sin so society doesn't completely collapse (2 Thess 2:6–7), the capacity for human beings to do civic good, the beauty of art, music, and culture, and natural blessings like sun and rain on the unjust as well as the just (Matt 5:45). Common grace does not save — it simply sustains human flourishing in a fallen world. It is the reason non-Christians can be kind, brilliant, and morally admirable.",
  },
  {
    title: "Special (Saving) Grace",
    color: GREEN,
    body: "Special grace is God's unmerited favor directed toward the elect for salvation. It includes effectual calling, regeneration, faith, justification, adoption, sanctification, and glorification. Unlike common grace, special grace overcomes the spiritual deadness of the sinner and restores the relationship with God broken by the Fall. It is entirely monergistic in Reformed theology (God alone does the work of salvation) or synergistic in Arminian/Wesleyan theology (God enables and the human responds). Either way, the source is entirely God's grace — \'not of works, so that no one may boast\' (Eph 2:8–9).",
  },
  {
    title: "Prevenient Grace",
    color: TEAL,
    body: "Used especially in Wesleyan-Arminian theology, prevenient grace (from Latin praevenire — \'to go before\') is the grace that precedes and enables human response to the gospel. Because all humans are dead in sin and unable to seek God on their own (Rom 3:11), God graciously goes before every person, convicting them of sin, awakening spiritual awareness, and making it genuinely possible for them to respond in faith. In this view, prevenient grace restores enough free will for a real choice — but does not compel the choice. It is what John Wesley called \'the grace that goes before all grace.\'",
  },
  {
    title: "Actual vs. Habitual Grace",
    color: PURPLE,
    body: "A traditional Catholic and scholastic distinction. Habitual (sanctifying) grace is a permanent quality infused into the soul at baptism that transforms the person\'s nature — it is the state of being in grace. Actual grace is specific divine assistance given for particular acts — the help God gives in the moment of temptation, prayer, or decision. Protestant theology tends to resist the \'infusion\' language (preferring \'imputation\' for justification) but preserves the insight that God both transforms character and gives moment-by-moment help. Both are expressions of God\'s unmerited generosity.",
  },
];

const TULIP = [
  {
    id: "t1",
    letter: "T",
    title: "Total Depravity",
    content: "Total depravity does not mean that humans are as sinful as they could possibly be — it means that sin has affected every part of human nature: intellect, will, emotions, desires, and relationships. The will is in bondage (Luther\'s Bondage of the Will): we cannot and will not choose God apart from grace. Key texts: Rom 3:10–12 (none righteous, none who seeks God); John 6:44 (no one can come to me unless the Father draws him); Eph 2:1–3 (dead in trespasses). This is the foundation of the Calvinist system: because we cannot save ourselves, God must initiate entirely.",
  },
  {
    id: "t2",
    letter: "U",
    title: "Unconditional Election",
    content: "God chose the elect before the foundation of the world (Eph 1:4–5) — not based on foreseen faith or merit, but according to God\'s sovereign will and good pleasure. Election is \'unconditional\' because there is no condition in the human that merits or triggers it. Key texts: Rom 9:11–16 (Jacob loved/Esau hated before birth — \'not because of works but because of him who calls\'); Acts 13:48 (as many as were appointed to eternal life believed). Arminian response: God elects based on foreknowing who will freely respond (conditional election).",
  },
  {
    id: "t3",
    letter: "L",
    title: "Limited (Definite) Atonement",
    content: "Christ\'s atoning work was specifically intended and effectively accomplished for the elect. The atonement is \'definite\' (a preferred term) in its design — Jesus did not merely make salvation possible for all, but actually secured it for those given to him by the Father. Key texts: John 10:11 (lays down life \'for the sheep\' — not for all sheep); John 17:9 (Jesus prays for those the Father gave him, \'not for the world\'); Eph 5:25 (Christ loved the church and gave himself up \'for her\'). The most disputed point among the five: many who accept TUIP reject L and are called \'four-point Calvinists\' or Amyraldians.",
  },
  {
    id: "t4",
    letter: "I",
    title: "Irresistible (Effectual) Grace",
    content: "When God purposes to save someone, his grace effectively accomplishes its goal — it is not ultimately resistable. This is not \'against the will\' but a transformation of the will so that the sinner freely and gladly comes to Christ. Augustine: \'Our heart is restless until it rests in thee.\' Key texts: John 6:37 (all the Father gives me will come to me); Phil 2:13 (God works in you both to will and to act); Acts 16:14 (the Lord opened Lydia\'s heart to pay attention to Paul\'s words). Arminian response: grace can genuinely be resisted — God woos but does not compel (Acts 7:51: \'You always resist the Holy Spirit\').",
  },
  {
    id: "t5",
    letter: "P",
    title: "Perseverance of the Saints",
    content: "Those whom God has genuinely regenerated and elected will persevere in faith to the end — they cannot ultimately fall away and lose their salvation. This is not about sinless perfection but final perseverance: the elect will stumble but not fall away permanently. Key texts: John 10:28–29 (no one can snatch them out of my hand); Rom 8:38–39 (nothing can separate us from the love of God); Phil 1:6 (he who began a good work will carry it to completion). Arminian response: genuine believers can apostatize — warnings in Hebrews (6:4–6; 10:26–31) describe real danger. Both sides take assurance and warning seriously.",
  },
];

const FREEWILL_ITEMS = [
  {
    id: "fw1",
    title: "The Compatibilist View (Reformed)",
    content: "Compatibilism holds that human free will and divine sovereignty are compatible. Humans make genuine choices according to their desires and nature — there is no external coercion. But because sin has corrupted human nature, unregenerate people always freely choose sin (they do what they most want to do, and they want to sin). Regeneration changes the desires so that the person freely chooses God. The will is free in the sense of \'acting according to one\'s nature,\' and God changes the nature. Jonathan Edwards\' Freedom of the Will is the classic defense.",
  },
  {
    id: "fw2",
    title: "The Libertarian View (Arminian/Molinist)",
    content: "Libertarian free will holds that for a choice to be genuinely free, the person must have been able to choose otherwise. God does not determine choices — he genuinely gives creatures the capacity to accept or reject him. Arminians ground this in prevenient grace (which restores enough freedom to choose); Molinists ground it in God\'s \'middle knowledge\' — God knows what free creatures would do in any possible circumstance, and uses that knowledge to achieve his purposes without determining free choices (Luis de Molina, C.S. Lewis, Alvin Plantinga).",
  },
  {
    id: "fw3",
    title: "The Open Theism View",
    content: "Open theism (Greg Boyd, Clark Pinnock) is a minority evangelical view that takes libertarian free will to its logical conclusion: if creatures are genuinely free, God does not fully foreknow their future free choices. God is infinitely wise and responsive but the future is genuinely open — God enters into real risk and real relationship. Key text: Genesis 22:12 (\'Now I know that you fear God, because you have not withheld your son\') — suggesting God discovered something. Critics: this undermines prophecy, prayer, and divine sovereignty. Open theists argue it makes prayer and suffering more intelligible.",
  },
  {
    id: "fw4",
    title: "Practical Conclusion: Grace All the Way Down",
    content: "Across the spectrum, orthodox Christians agree on the essentials: salvation is entirely by grace, human beings cannot save themselves, and whatever role free will plays, it is enabled by grace. The debates are about the precise relationship between divine sovereignty and human agency — a genuine mystery Scripture holds in tension. Practically: we pray as if everything depends on God (because it does) and we evangelize as if everything depends on us (because the Spirit works through our witness). Humility is warranted on all sides.",
  },
];

const MEANS = [
  {
    title: "The Word of God",
    color: GOLD,
    body: "The preaching and hearing of the Word is the primary means by which grace is communicated. \'Faith comes from hearing, and hearing through the word of Christ\' (Rom 10:17). The Reformation insisted on the centrality of the preached Word against a purely sacramental system. The Word is both \'law\' (revealing sin and need) and \'gospel\' (announcing grace and forgiveness). Luther: the Word is the external word that creates the internal faith — it is not merely information but the Spirit-empowered address of God to the human soul.",
  },
  {
    title: "Baptism",
    color: GREEN,
    body: "In Lutheran and Reformed theologies, baptism is a means of grace — not because the water itself saves, but because it is God\'s word and promise joined to water. It is a sign and seal of union with Christ, of dying and rising with him (Rom 6:3–4), and of entry into the covenant community. Baptist traditions see baptism as a public testimony of grace already received rather than a vehicle of grace. All traditions see it as commanded by Christ and significant for the Christian life.",
  },
  {
    title: "The Lord\'s Supper",
    color: TEAL,
    body: "The Lord\'s Supper (Communion/Eucharist) is among the most contested areas of Christian theology. Catholic/Orthodox: the body and blood of Christ are truly present (transubstantiation/real presence). Lutheran: Christ\'s body and blood are truly present \'in, with, and under\' the bread and wine (sacramental union). Reformed: Christ is truly present spiritually — the elements are signs pointing to the reality. Baptist: memorial — a proclamation of the Lord\'s death until he comes (1 Cor 11:26). All share the conviction that the Table is a means of encountering the grace of Christ.",
  },
  {
    title: "Prayer and Community",
    color: PURPLE,
    body: "Prayer is a means of grace — not information-transfer to God (who knows all), but a relationship of dependence that God uses to form us and to work in the world. \'Pray without ceasing\' (1 Thess 5:17). Community (the gathered church, small groups, spiritual direction, mentorship) is also a means of grace — iron sharpens iron (Prov 27:17), bearing one another\'s burdens fulfills the law of Christ (Gal 6:2). The Christian life is not solo. Grace reaches us through Word, sacrament, prayer, and the Body of Christ together.",
  },
];

const LIVING = [
  {
    title: "Grace vs. Legalism",
    color: GOLD,
    body: "Legalism is the attempt to earn God\'s favor through rule-keeping, or to define Christian identity by what we avoid. Paul\'s letter to the Galatians is the great assault on legalism: \'You who are trying to be justified by the law have been alienated from Christ; you have fallen away from grace\' (5:4). Legalism treats the Christian life as a contract: I perform, God accepts. Grace treats it as a relationship: God accepts, therefore I grow. The motive for obedience shifts from fear to love — from \'I must\' to \'I get to.\'",
  },
  {
    title: "Grace vs. License (Antinomianism)",
    color: GREEN,
    body: "The opposite error: if grace covers all sin, why not sin freely? \'Shall we go on sinning so that grace may increase? By no means!\' (Rom 6:1–2). Grace does not abolish the law as the standard of God\'s character — it fulfills it. The one who has been forgiven much loves much (Luke 7:47). The regenerate person is not freed from holiness but freed for holiness — the desire to please God is the Spirit\'s work within them. Dietrich Bonhoeffer\'s \'cheap grace\' critique: \'Cheap grace is the preaching of forgiveness without requiring repentance... grace without the cross.\'",
  },
  {
    title: "Grace and Sanctification",
    color: TEAL,
    body: "Sanctification is often misunderstood as the part of the Christian life where we take over from grace — grace saves us, then we work. But Paul is clear: \'he who began a good work in you will carry it to completion\' (Phil 1:6). Sanctification is both God\'s work and our work — we \'work out\' our salvation \'because it is God who works in you\' (Phil 2:12–13). The mortification of sin, the cultivation of virtue, the practice of disciplines — all are enabled by grace and are themselves means through which grace operates. We grow in grace (2 Pet 3:18), not out of it.",
  },
  {
    title: "Assurance and Grace",
    color: PURPLE,
    body: "Because grace is God\'s work and not our performance, assurance of salvation rests on God\'s promise rather than our spiritual achievement. The three grounds of assurance: (1) the objective — what Christ accomplished for us; (2) the subjective — the witness of the Spirit (\'the Spirit himself testifies with our spirit that we are God\'s children\' — Rom 8:16); (3) the evidential — the fruit of the Spirit and genuine love for others (1 John 3:14). Periods of doubt do not indicate loss of salvation — they are normal to the Christian life. Grace holds us even when we cannot feel it.",
  },
];

const VIDEOS = [
  { videoId: "sUIxk3p5Mu4", title: "What Is Grace? Theology of Grace Explained" },
  { videoId: "fz3dD-FyVUE", title: "Common Grace vs. Saving Grace" },
  { videoId: "4CL4dBRgGhU", title: "TULIP — The Five Points of Calvinism" },
  { videoId: "6yFX-L6Kwnc", title: "Prevenient Grace — Wesleyan Theology" },
  { videoId: "WnRYoalYFqo", title: "Grace and Free Will — The Full Debate" },
  { videoId: "y07klgOLiNk", title: "Means of Grace — Word and Sacrament" },
];

export default function GraceTheologyGuide() {
  const [activeTab, setActiveTab] = useLocalStorage("vine_grace_tab", "overview");
  const [openTulip, setOpenTulip] = useLocalStorage("vine_grace_tulip", "");
  const [openFw, setOpenFw] = useLocalStorage("vine_grace_fw", "");
  const [journal, setJournal] = useLocalStorage("vine_grace_journal", "");

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>
        <div style={{ marginBottom: 8 }}>
          <span style={{ color: GOLD, fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>Systematic Theology</span>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Theology of Grace</h1>
        <p style={{ color: MUTED, marginBottom: 24, lineHeight: 1.6 }}>
          Grace — the unmerited favor of God — is the foundation of the entire Christian story. Without it, there is no salvation, no sanctification, no hope. This guide explores the different kinds of grace, the five points of Calvinism (TULIP), Arminian prevenient grace, the grace-vs-free-will debate, the means by which grace reaches us, and what it means to actually live as people under grace rather than law.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ padding: "8px 16px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
                background: activeTab === t.id ? GREEN : CARD,
                color: activeTab === t.id ? "#fff" : MUTED }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Introduction to Grace</h2>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }}>
                The Greek word is <em>charis</em> — translated \'grace\' or \'favor.\' In the OT, the parallel is <em>hesed</em> — covenant loyalty and lovingkindness — and <em>chen</em> — unmerited favor. In the NT, grace appears over 150 times. John&apos;s Gospel opens: \'The Word became flesh... full of grace and truth... From his fullness we have all received grace upon grace\' (1:14,16). Paul&apos;s letters begin and end with grace: \'Grace to you and peace from God our Father and the Lord Jesus Christ.\'
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>
                The central Reformation confession: we are saved by grace alone (sola gratia), through faith alone (sola fide), in Christ alone (solus Christus). Grace is not a supplement to human effort — it is the entire basis of our standing before God. Yet grace does not make us passive — it is the power that transforms, sanctifies, and enables every act of obedience.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 12 }}>Key Grace Texts</h3>
              {[
                { ref: "Ephesians 2:8–9", text: "\'For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast.\'" },
                { ref: "Romans 5:20", text: "\'Where sin increased, grace abounded all the more.\'" },
                { ref: "2 Corinthians 12:9", text: "\'My grace is sufficient for you, for my power is made perfect in weakness.\'" },
                { ref: "John 1:16", text: "\'From his fullness we have all received grace upon grace.\'" },
                { ref: "Titus 2:11–12", text: "\'For the grace of God has appeared that offers salvation to all people. It teaches us to say no to ungodliness and worldly passions.\'" },
              ].map((item, i) => (
                <div key={i} style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 12, marginBottom: 12 }}>
                  <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{item.ref}</div>
                  <div style={{ color: MUTED, lineHeight: 1.6, fontStyle: "italic" }}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* KINDS */}
        {activeTab === "kinds" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Kinds of Grace</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {KINDS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TULIP */}
        {activeTab === "tulip" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>The Five Points of Calvinism (TULIP)</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>
              The \'five points\' were formulated at the Synod of Dort (1618–19) in response to the Arminian Remonstrance. They summarize the Reformed understanding of grace and salvation. Not all who hold Reformed theology agree on every point — \'four-point Calvinism\' (accepting all except Limited Atonement) is common.
            </p>
            {TULIP.map((item) => {
              const isOpen = openTulip === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenTulip(isOpen ? "" : item.id)}
                    style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ background: GREEN, color: "#fff", fontWeight: 900, fontSize: 18, width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.letter}</span>
                      <span style={{ fontWeight: 700 }}>{item.title}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.7 }}>{item.content}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* PREVENIENT */}
        {activeTab === "prevenient" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Prevenient Grace</h2>
            <div style={{ background: CARD, border: `1px solid ${GOLD}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${GOLD}`, marginBottom: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 12 }}>Prevenient grace is a cornerstone of Wesleyan-Arminian theology. John Wesley taught that because all humans are born spiritually dead in sin and incapable of responding to God, God graciously precedes every person with awakening grace. This grace does not compel — it enables a genuine choice. Without it, no one could respond; with it, all can respond; some do, some don&apos;t.</p>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Wesley saw prevenient grace in John 1:9 (the true light that gives light to every person coming into the world), Titus 2:11 (grace that has appeared to all people), and the universal gospel call. It is the ground of universal evangelism — every person can respond because God has already gone before them.</p>
            </div>
            <div style={{ display: "grid", gap: 16 }}>
              {[
                { title: "What Prevenient Grace Is", color: GOLD, body: "A continuous, universal operation of the Holy Spirit prior to regeneration. It counteracts original sin enough to restore moral agency — not enough to save, but enough to make a genuine response possible. It is the light that shines in every conscience, the restlessness Augustine described: \'Our heart is restless until it rests in thee.\' It makes the offer of the gospel a genuine offer to all, not a cruel taunt to those who cannot respond." },
                { title: "What It Is Not", color: GREEN, body: "Prevenient grace is not the same as saving grace. It does not regenerate. It does not guarantee salvation. It is not resistable only in theory — people genuinely resist it (Acts 7:51). It is not Pelagian (which says humans can choose God by natural capacity without divine help). The difference from Reformed theology is not \'grace vs. no grace\' but \'does grace ensure response or merely enable it?\'" },
                { title: "Reformed Objections", color: TEAL, body: "Calvinists generally argue: if prevenient grace is universally given and yet only some respond, then the difference between the saved and the lost is ultimately their own choice — making ultimate salvation dependent on human will rather than divine grace. The Calvinist prefers: God\'s electing grace ensures that all whom he calls will come (John 6:37). Arminians respond that the Calvinist God seems to elect arbitrarily — electing some and not others, for no reason in the person." },
                { title: "Points of Agreement", color: PURPLE, body: "Both traditions agree: (1) humans cannot save themselves; (2) divine grace must initiate the process; (3) salvation is ultimately by grace, not merit; (4) Christ died for sinners; (5) all genuine believers will be saved. The debate is about the mechanism of grace and the nature of free will. Both traditions have produced saints, missionaries, and deep theologians. Humility on both sides is the appropriate posture." },
              ].map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FREE WILL */}
        {activeTab === "freewill" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Grace &amp; Free Will</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>
              The tension between divine sovereignty and human free will is one of the oldest in Christian theology. Augustine and Pelagius debated it in the 5th century; Luther and Erasmus in the 16th; Calvinism and Arminianism have debated it since the 17th. Scripture holds both — God is sovereign (Eph 1:11; Rom 9) and humans are genuinely responsible (John 3:36; Rev 22:17). The debate is about how to hold them together.
            </p>
            {FREEWILL_ITEMS.map((item) => {
              const isOpen = openFw === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenFw(isOpen ? "" : item.id)}
                    style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontWeight: 700 }}>{item.title}</span>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.7 }}>{item.content}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* MEANS */}
        {activeTab === "means" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Means of Grace</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>The \'means of grace\' are the ordinary channels through which God communicates and strengthens grace in the life of the believer. They are not magical — their power is from God — but they are appointed by God as the ordinary means by which his grace works.</p>
            <div style={{ display: "grid", gap: 16 }}>
              {MEANS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LIVING */}
        {activeTab === "living" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Living by Grace</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {LIVING.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {activeTab === "journal" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Study Journal</h2>
            <p style={{ color: MUTED, marginBottom: 16, lineHeight: 1.6 }}>Reflect on your understanding of grace. Do you tend toward legalism or license? How has your experience of grace shaped your relationship with God?</p>
            <textarea value={journal} onChange={(e) => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 200, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, color: TEXT, fontSize: 15, lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }} />
            <p style={{ color: MUTED, fontSize: 12, marginTop: 8 }}>Saved locally to your device.</p>
          </div>
        )}

        {/* VIDEOS */}
        {activeTab === "videos" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Video Teaching</h2>
            <div style={{ display: "grid", gap: 20 }}>
              {VIDEOS.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                  </div>
                  <div style={{ padding: "12px 16px" }}>
                    <p style={{ color: TEXT, fontWeight: 600, fontSize: 14 }}>{v.title}</p>
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
