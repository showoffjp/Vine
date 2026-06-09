"use client";

import { useState } from "react";

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
  { id: "blessings", label: "Spiritual Blessings" },
  { id: "ch2", label: "Dead to Alive" },
  { id: "mystery", label: "The Mystery" },
  { id: "prayers", label: "Paul\'s Prayers" },
  { id: "walk", label: "Walk Worthy" },
  { id: "armor", label: "Armor of God" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const BLESSINGS_ITEMS = [
  {
    id: "bl1",
    title: "\'Blessed... with Every Spiritual Blessing\' (1:3)",
    content: "Paul opens with an extended sentence of praise (1:3–14) that is a single sentence in Greek — an elaborate doxology. God \'has blessed us in the heavenly realms with every spiritual blessing in Christ.\' The Christian is not waiting to receive blessings — they already possess every spiritual blessing \'in Christ.\' The sphere is \'the heavenly realms\' (epouraniois) — a characteristic Ephesian phrase (1:3,20; 2:6; 3:10; 6:12). This is the realm of spiritual reality that overlaps with earthly existence — the same realm where Christ is enthroned and where spiritual warfare is waged.",
  },
  {
    id: "bl2",
    title: "Predestined and Elected (1:4–6)",
    content: "\'For he chose us in him before the creation of the world to be holy and blameless in his sight. In love he predestined us for adoption to sonship through Jesus Christ, in accordance with his pleasure and will.\' The election is \'in Christ\' — not abstract individual selection but inclusion in the Beloved Son. The purpose: holiness and blameless living (not just heaven). The goal of election is conformity to Christ\'s character. The basis: God\'s pleasure and will, not foreseen faith or merit. Ephesians 1:4–6 is the most compressed statement of election in the NT — \'before the creation of the world.\'",
  },
  {
    id: "bl3",
    title: "Sealed with the Holy Spirit (1:13–14)",
    content: "\'And you also were included in Christ when you heard the message of truth, the gospel of your salvation. When you believed, you were marked in him with a seal, the promised Holy Spirit, who is a deposit guaranteeing our inheritance until the redemption of those who are God\'s possession.\' The Spirit is the seal (authenticating mark), the arrabōn (the first installment, down payment — a commercial term: money paid to guarantee a future transaction), and the guarantee of inheritance. The Spirit\'s presence in the believer is God\'s binding commitment to complete what he started. Assurance of salvation has a pneumatological basis.",
  },
  {
    id: "bl4",
    title: "Prayer for Wisdom and Knowledge (1:15–23)",
    content: "Paul\'s first prayer: that God would give the Ephesians \'the Spirit of wisdom and revelation, so that you may know him better\' — the eyes of the heart enlightened. Three things to know: (1) the hope to which he has called you; (2) his glorious inheritance in his holy people; (3) his incomparably great power toward those who believe. The power that works for us is the same power that raised Christ from the dead and seated him \'far above all rule and authority, power and dominion\' — at the right hand in the heavenly realms. The risen Christ is \'head over everything for the church, which is his body.\' The church is Christ\'s body filling all in all.",
  },
];

const CH2_ITEMS = [
  {
    title: "Ephesians 2:1–10 — Dead to Alive",
    color: GOLD,
    body: "The most complete statement of the human condition and its divine solution. Dead in trespasses and sins (2:1) — not sick, not struggling, not spiritually wounded but dead. Following the ways of the world, the prince of the power of the air (Satan), the cravings of the flesh. \'Like the rest, we were by nature deserving of wrath\' (2:3). Then the great pivot: \'But God, being rich in mercy, because of the great love with which he loved us, even when we were dead in our trespasses, made us alive together with Christ\' (2:4–5 ESV). Salvation is resurrection from death — not improvement but new creation. The triad: grace, faith, gift — not of works, so that no one may boast.",
  },
  {
    title: "Ephesians 2:8–9 — Sola Gratia, Sola Fide",
    color: GREEN,
    body: "\'For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast.\' The Reformation rallying cry: grace alone, through faith alone. Grace is the source; faith is the instrument; the whole is a gift. The \'this\' that is the gift — the most natural reading is the entire salvation event (being saved by grace through faith), not just faith itself. The purpose of non-works salvation: \'so that no one may boast.\' All boasting is excluded; the only legitimate boast is in Christ (Gal 6:14).",
  },
  {
    title: "Ephesians 2:10 — Created for Good Works",
    color: TEAL,
    body: "\'For we are God\'s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.\' The Greek is poiēma — masterpiece, work of art. Salvation is not the end of the story but the beginning of a new one: we are created \'in Christ Jesus\' for good works. The Reformation clarification: works do not save, but salvation produces works. The saved person is God\'s artistry — and the artwork has a purpose: good works \'prepared in advance\' by God. The Christian life is the living out of a divine calling, not the earning of divine acceptance.",
  },
  {
    title: "Ephesians 2:11–22 — The Wall Torn Down",
    color: PURPLE,
    body: "The Gentiles were \'foreigners to the covenants of the promise, without hope and without God in the world\' (2:12). But in Christ, \'you who once were far away have been brought near by the blood of Christ. For he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility\' (2:13–14). The wall between Jew and Gentile (the dividing wall in the Jerusalem temple that Gentiles could not pass on pain of death) has been abolished. The two are now \'one new humanity\' (2:15) — neither Jew nor Gentile but a third thing: the church. \'You are no longer foreigners and strangers, but fellow citizens with God\'s people and also members of his household\' (2:19).",
  },
];

const MYSTERY_ITEMS = [
  {
    title: "Ephesians 3:1–13 — The Mystery Revealed",
    color: GOLD,
    body: "\'The mystery of Christ, which was not made known to people in other generations as it has now been revealed... This mystery is that through the gospel the Gentiles are heirs together with Israel, members together of one body, and sharers together in the promise in Christ Jesus\' (3:4–6). The \'mystery\' (mystērion) is not a secret but a formerly hidden divine plan now disclosed: Jews and Gentiles are one body in Christ. Paul is the steward of this mystery — to \'proclaim the unsearchable riches of Christ\' to the Gentiles and to \'make plain to everyone the administration of this mystery.\' The church\'s existence is the display of God\'s wisdom to the principalities and powers in the heavenly realms (3:10).",
  },
  {
    title: "Ephesians 3:14–21 — Paul\'s Second Prayer",
    color: GREEN,
    body: "The most profound prayer in Paul\'s letters. That God would strengthen them \'in the inner being through his Spirit\'; that Christ would dwell in their hearts through faith; that they would be rooted and grounded in love; that they would \'have power... to grasp how wide and long and high and deep is the love of Christ, and to know this love that surpasses knowledge.\' The paradox: to know what surpasses knowledge. Then the doxology: \'to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us, to him be glory in the church and in Christ Jesus throughout all generations, forever and ever!\' (3:20–21).",
  },
];

const WALK_ITEMS = [
  {
    id: "w1",
    title: "Walk Worthy (4:1–6) — Unity in the Spirit",
    content: "\'I urge you to walk in a manner worthy of the calling to which you have been called\' (4:1). The hinge verse of Ephesians: chapters 1–3 are indicative (who you are in Christ); chapters 4–6 are imperative (how to live accordingly). The first practical call: unity. Seven foundations of unity: one body, one Spirit, one hope, one Lord, one faith, one baptism, one God and Father. \'There is one body and one Spirit — just as you were called to one hope when you were called.\' The church\'s unity is not constructed by human effort — it is given in Christ; the call is to \'make every effort to keep the unity of the Spirit through the bond of peace.\'"
  },
  {
    id: "w2",
    title: "Walk Worthy (4:7–16) — Gifts for the Body",
    content: "Christ gave gifts to the church when he ascended (citing Ps 68:18): apostles, prophets, evangelists, pastors and teachers. Their purpose: \'to equip his people for works of service, so that the body of Christ may be built up\' — not to do ministry for the people but to equip the people to do ministry. The goal: \'until we all reach unity in the faith and in the knowledge of the Son of God and become mature, attaining to the whole measure of the fullness of Christ.\' The church grows by \'speaking the truth in love\' — truth without love is harsh; love without truth is spineless; both together produce Christlike maturity."
  },
  {
    id: "w3",
    title: "Walk Worthy (4:17–32) — Put Off / Put On",
    content: "The old self (palaios anthrōpos) is to be \'put off\' — the former way of life, darkened in understanding, given over to sensuality. The new self (kainos anthrōpos) is to be \'put on\' — \'created to be like God in true righteousness and holiness\' (4:24). Specific applications: put off falsehood, put on truthful speech; manage anger without sinning (don\'t let the sun go down on your anger); stop stealing, start working to give; no corrupting talk, but building speech. \'Do not grieve the Holy Spirit of God.\' Put off bitterness, wrath, anger, slander; put on kindness, compassion, forgiveness — \'just as in Christ God forgave you.\' (4:32)"
  },
  {
    id: "w4",
    title: "Walk Worthy (5:1–21) — Imitators of God",
    content: "\'Follow God\'s example, therefore, as dearly loved children and walk in the way of love, just as Christ loved us and gave himself up for us as a fragrant offering and sacrifice to God.\' Sexual immorality, impurity, and greed: not even a hint. \'Find out what pleases the Lord.\' Do not be drunk with wine but be filled with the Spirit — evidenced by psalms and hymns and spiritual songs, giving thanks, submitting to one another. The household codes follow (5:22–6:9): husbands and wives, parents and children, masters and servants. The marriage code (5:22–33) grounds Christian marriage in the cosmic relationship between Christ and the church."
  },
];

const ARMOR_ITEMS = [
  { piece: "Belt of Truth", color: GOLD, ref: "6:14a", body: "The Roman soldier\'s belt held everything else in place. Spiritual truth — the objective truth of the gospel, not subjective sincerity — is the foundation that orders everything else. Without truth, the armor falls apart. The lies of the enemy begin by attacking truth: \'Did God really say...?\'" },
  { piece: "Breastplate of Righteousness", color: GREEN, ref: "6:14b", body: "Covering the heart and vital organs. The righteousness of Christ imputed to the believer (justification) is the protection against the enemy\'s accusations. Satan is the \'accuser of the brothers\' (Rev 12:10) — but the breastplate means his accusations find no purchase. The answer to condemnation: Christ\'s righteousness is mine." },
  { piece: "Feet Fitted with the Gospel", color: TEAL, ref: "6:15", body: "The Roman soldier\'s caligae (military sandals) gave firm footing and mobility. \'The gospel of peace\' provides stability (you know who you are and where you stand) and mobility (you can go anywhere with this good news). Readiness to share the gospel is part of the armor — offence and defence together." },
  { piece: "Shield of Faith", color: PURPLE, ref: "6:16", body: "The thureos — a large Roman shield (door-shaped, interlocking with others) soaked in water to quench flaming arrows. Faith — trust in God\'s promises — extinguishes the devil\'s \'flaming arrows\': accusations, doubts, fears, and lies. Note: shields interlock — faith is partially a communal practice. The army of God defends together." },
  { piece: "Helmet of Salvation", color: GOLD, ref: "6:17a", body: "Protection for the mind. The certainty of salvation — past (justified), present (being sanctified), future (will be glorified) — protects the Christian from the mental and psychological assaults of the enemy. Discouragement, despair, and identity confusion are attacks on the helmet. \'I know whom I have believed.\' (2 Tim 1:12)" },
  { piece: "Sword of the Spirit", color: GREEN, ref: "6:17b", body: "\'The word of God\' (rhēma — the spoken word). The only offensive weapon. Jesus modeled its use against Satan\'s temptations with three \'It is written\' citations (Matt 4). Scripture wielded precisely and accurately is effective in spiritual combat. This requires knowing Scripture — not just affirming its authority but having it ready to deploy. \'Your word I have hidden in my heart, that I might not sin against you\' (Ps 119:11)." },
];

const VIDEOS = [
  { videoId: "Y71r-T98E2Q", title: "The Book of Ephesians — BibleProject Overview" },
  { videoId: "Y71r-T98E2Q", title: "Ephesians Part 1 — BibleProject" },
  { videoId: "xNG-YWGM4bY", title: "Ephesians Part 2 — BibleProject" },
  { videoId: "iIqfXiZGCsI", title: "Ephesians 2:8–9 — Grace Through Faith" },
  { videoId: "JnHLrxIQCQo", title: "The Armor of God — Ephesians 6 Deep Dive" },
  { videoId: "yjlq8mrAVwg", title: "Marriage in Ephesians 5 — What Paul Really Says" },
];

export default function EphesiansGuide() {
  const [activeTab, setActiveTab] = useLocalStorage("vine_eph_tab", "overview");
  const [openBless, setOpenBless] = useLocalStorage("vine_eph_bless", "");
  const [openWalk, setOpenWalk] = useLocalStorage("vine_eph_walk", "");
  const [journal, setJournal] = useLocalStorage("vine_eph_journal", "");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>
        <div style={{ marginBottom: 8 }}>
          <span style={{ color: GOLD, fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>Bible Study</span>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>The Book of Ephesians</h1>
        <p style={{ color: MUTED, marginBottom: 24, lineHeight: 1.6 }}>
          Ephesians is Paul&apos;s most cosmic epistle — spanning from eternity past (election before creation) to the present spiritual battle in the heavenly realms to the household of God. It divides cleanly into who we are in Christ (chapters 1–3) and how to live accordingly (chapters 4–6), joined by the hinge: &ldquo;walk in a manner worthy of the calling.&rdquo;
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

        {activeTab === "overview" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Introduction to Ephesians</h2>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }}>
                Ephesians was likely a circular letter sent to multiple churches in Asia Minor (some manuscripts lack &#8220;in Ephesus&#8221; in 1:1). Written from prison (c. 60–62 AD), it is the most systematic of Paul&apos;s letters — less addressed to specific controversies (unlike Galatians or Corinthians) and more a comprehensive statement of the gospel and its implications.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>
                The letter is organized by the indicative/imperative pattern: what God has done in Christ (1–3) determines what Christians are to do (4–6). The theological density of chapters 1–3 is matched by the practical specificity of chapters 4–6 — from spiritual warfare to household ethics to the armor of God.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 12 }}>Structure</h3>
              {[
                "Ch 1: Spiritual blessings — election, redemption, sealing with the Spirit; prayer for wisdom",
                "Ch 2: Dead to alive (2:1–10); the wall torn down — Jew and Gentile one body (2:11–22)",
                "Ch 3: The mystery of the church; Paul\'s second prayer",
                "Ch 4: Unity in the body; put off / put on",
                "Ch 5: Walk in love; imitators of God; marriage as gospel display",
                "Ch 6: Household codes; the armor of God",
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                  <span style={{ color: GOLD, fontWeight: 700, minWidth: 24 }}>{i + 1}.</span>
                  <span style={{ color: MUTED }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "blessings" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Spiritual Blessings (Eph 1)</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>The great praise of Ephesians 1:3–14 — a single sentence in Greek cataloging every spiritual blessing the believer already possesses in Christ.</p>
            {BLESSINGS_ITEMS.map((item) => {
              const isOpen = openBless === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenBless(isOpen ? "" : item.id)}
                    style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontWeight: 700 }}>{item.title}</span>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.7 }}>{item.content}</div>}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "ch2" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Dead to Alive (Eph 2)</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {CH2_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "mystery" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>The Mystery of the Church (Eph 3)</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {MYSTERY_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "prayers" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Paul&apos;s Two Prayers</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {[
                { title: "Prayer 1 — Eyes of the Heart Enlightened (1:15–23)", color: GOLD, body: "Paul prays for the Spirit of wisdom and revelation so that they may know God better. The eyes of the heart enlightened to know: (1) the hope of his calling; (2) the riches of his glorious inheritance in his holy people; (3) his incomparably great power for us who believe — the same power that raised Christ from the dead. This is a prayer for experiential knowledge, not just propositional knowledge. The Christian can know truths and not be transformed by them; Paul prays for the kind of knowing that changes lives." },
                { title: "Prayer 2 — Rooted and Grounded in Love (3:14–21)", color: GREEN, body: "\'I kneel before the Father... that he may strengthen you with power through his Spirit in your inner being, so that Christ may dwell in your hearts through faith.\' Four dimensions of Christ\'s love: wide, long, high, deep — \'to know this love that surpasses knowledge, that you may be filled to the measure of all the fullness of God.\' The doxology: \'to him who is able to do immeasurably more than all we ask or imagine...\' The word is hyperekperissou — \'super-abundantly, far beyond\' — Greek exhausting itself to describe divine excess. God always does more than we can conceive." },
              ].map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "walk" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Walk Worthy (Eph 4–5)</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>Chapters 4–6 show what it looks like to live out the identity declared in chapters 1–3. The imperative always flows from the indicative.</p>
            {WALK_ITEMS.map((item) => {
              const isOpen = openWalk === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenWalk(isOpen ? "" : item.id)}
                    style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontWeight: 700 }}>{item.title}</span>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.7 }}>{item.content}</div>}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "armor" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>The Armor of God (Eph 6:10–20)</h2>
            <p style={{ color: MUTED, marginBottom: 16, lineHeight: 1.6 }}>\'Put on the full armor of God, so that you can take your stand against the devil\'s schemes. For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world and against the spiritual forces of evil in the heavenly realms\' (6:11–12).</p>
            <div style={{ display: "grid", gap: 12 }}>
              {ARMOR_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 16, borderLeft: `4px solid ${item.color}` }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
                    <h3 style={{ fontWeight: 700, color: item.color }}>{item.piece}</h3>
                    <span style={{ color: MUTED, fontSize: 12 }}>({item.ref})</span>
                  </div>
                  <p style={{ color: MUTED, lineHeight: 1.6, fontSize: 14 }}>{item.body}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${TEAL}40`, borderRadius: 12, padding: 20, marginTop: 16, borderLeft: `4px solid ${TEAL}` }}>
              <h3 style={{ fontWeight: 700, color: TEAL, marginBottom: 8 }}>Pray in the Spirit (6:18–20)</h3>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>\'And pray in the Spirit on all occasions with all kinds of prayers and requests. With this in mind, be alert and always keep on praying for all the Lord\'s people. Pray also for me, that whenever I speak, words may be given me so that I will fearlessly make known the mystery of the gospel.\' Prayer is not a seventh piece of armor — it is the power that animates all the rest. The armor must be worn in constant dependence on God. Paul asks the Ephesians to pray for him — the great apostle needs the prayers of ordinary saints. Spiritual warfare is inherently communal.</p>
            </div>
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Study Journal</h2>
            <p style={{ color: MUTED, marginBottom: 16, lineHeight: 1.6 }}>Which piece of the armor do you most need to put on today? What would it look like to \'walk worthy of your calling\'?</p>
            <textarea value={journal} onChange={(e) => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 200, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, color: TEXT, fontSize: 15, lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }} />
            <p style={{ color: MUTED, fontSize: 12, marginTop: 8 }}>Saved locally to your device.</p>
          </div>
        )}

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
  );
}
