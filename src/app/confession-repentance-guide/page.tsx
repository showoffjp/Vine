"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";


const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56",
  PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3", GOLD = "#D97706",
  TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = ["Overview","Biblical Words","Psalm 51","Godly Sorrow","Prodigal Son","Community Confession","After Repentance","Journal","Videos"];

const BIBLICAL_WORDS = [
  { q: "Shuv — Return (Hebrew)", a: "The most common OT word for repentance (shuv) literally means to turn around, to return. It is deeply relational: Israel has wandered from God, and repentance is the physical/spiritual act of turning back. The prophets use it extensively: 'Return (shuv) to me with all your heart' (Joel 2:12). 'Let the wicked forsake their way and the evil person their thoughts. Let them turn (shuv) to the Lord, and he will have mercy on them' (Is 55:7). Repentance is not primarily an emotion but a directional change." },
  { q: "Nacham — Comfort/Relent (Hebrew)", a: "Nacham is the word used when God 'repents' or 'relents' in response to human repentance. When Jonah preaches in Nineveh and they repent, God 'relented (nacham) and did not bring on them the destruction he had threatened' (Jon 3:10). The word contains sorrow and comfort together — it describes the softening that happens when judgment is met with genuine turning. It reveals that God is genuinely responsive to human repentance." },
  { q: "Metanoia — Change of Mind/Heart (Greek)", a: "The NT word for repentance (metanoia) is from meta (change) + nous (mind). But it is not merely intellectual — the nous in ancient thought is the whole orienting faculty of the person. Metanoia is a change of the fundamental direction of the self. John the Baptist: 'Repent (metanoeite), for the kingdom of heaven has come near.' Jesus's first public sermon: 'The kingdom of God has come near. Repent and believe the good news' (Mark 1:15). Repentance and faith are not sequential but simultaneous: turning from is turning toward." },
  { q: "Exomologeo — Confess Openly (Greek)", a: "The Greek word for confession (exomologeo — to confess out, to acknowledge fully) appears in James 5:16: 'Confess your sins to each other and pray for each other so that you may be healed.' And 1 John 1:9: 'If we confess (homologomen) our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.' Confession involves acknowledgment — the same word is used for public profession of faith — an open, honest declaration of what is true." },
];

const PSALM51_ITEMS = [
  { q: "The Occasion: David and Bathsheba", a: "The superscription places Psalm 51 after the prophet Nathan confronted David about his adultery with Bathsheba and the murder of Uriah (2 Sam 11–12). This gives the psalm historical concreteness: it is not abstract theology but a record of real repentance from catastrophic sin. David's prayer models what the worst failure can look like when it meets genuine contrition." },
  { q: "The Appeal to Covenant Love (51:1)", a: "'Have mercy on me, O God, according to your steadfast love; according to your abundant mercy blot out my transgressions.' David does not appeal to his record, his position, or his intentions. He appeals to two names of God's character: hesed (steadfast love/covenant loyalty) and rahamim (abundant mercy/womb-like compassion). Repentance begins with the right ground: not my goodness, but God's character." },
  { q: "The Three Hebrew Words for Sin (51:1–2)", a: "David uses three different Hebrew words for sin in just two verses: pesha (transgression — willful rebellion against an authority), avon (iniquity — the twisted, bent nature of sin), and chata (sin — missing the mark). The accumulation is comprehensive: David's failure was not an accident or a moment of weakness alone but an act of rebellion arising from a corrupt inner nature. True repentance names sin fully." },
  { q: "Against You Only Have I Sinned (51:4)", a: "'Against you, you only, have I sinned and done what is evil in your sight.' This seems shocking given that Bathsheba and Uriah were clearly wronged. But David's point is theological: all sin is ultimately against God, who is the source and definer of moral reality. Sin against people is also sin against the God in whose image they bear, and whose law they live under. The vertical dimension of sin grounds the horizontal." },
  { q: "Create in Me a Clean Heart (51:10)", a: "'Create in me a clean heart, O God, and renew a right spirit within me.' The verb bara (create) is used only of God in the OT — it is the same word as in Genesis 1:1. David asks for a new creation, not a renovation. True repentance recognizes that the problem is not merely behavioral but ontological: the heart needs to be recreated, not merely cleaned. This is the theology that leads to Ezekiel 36:26: 'I will give you a new heart.'" },
  { q: "The Sacrifice God Desires (51:17)", a: "'My sacrifice, O God, is a broken spirit; a broken and contrite heart you, God, will not despise.' After all the sacrificial language of the psalm, the final word is this: God is not ultimately interested in ritual performance but in the broken, opened heart. The Hebrew dakah (contrite) means crushed, beaten down, pulverized. Paradoxically, the crushed heart is the one God will not despise — it is precisely the condition that creates space for grace." },
];

const GODLY_SORROW = [
  { q: "Godly Sorrow vs. Worldly Sorrow (2 Cor 7:9–11)", a: "'Godly sorrow brings repentance that leads to salvation and leaves no regret, but worldly sorrow brings death. See what this godly sorrow has produced in you: what earnestness, what eagerness to clear yourselves, what indignation, what alarm, what longing, what concern, what readiness to see justice done.' Worldly sorrow is sorrow about consequences: regret for being caught, fear of punishment, shame before others. Godly sorrow is sorrow about the offense itself — grief that God has been dishonored and relationship broken." },
  { q: "The Seven Fruits of Genuine Repentance", a: "Paul lists seven fruit-markers of genuine repentance in 2 Corinthians 7:11: (1) Earnestness — seriousness about the issue. (2) Eagerness to clear themselves — a desire for accountability and restoration. (3) Indignation — anger at the sin itself, not just its consequences. (4) Alarm — holy fear about where sin leads. (5) Longing — desire for restored relationship. (6) Concern — care for those wronged. (7) Readiness to see justice done — willingness to make it right. These markers distinguish genuine metanoia from merely feeling bad." },
  { q: "John the Baptist: Fruits Worthy of Repentance (Luke 3:8)", a: "'Produce fruit in keeping with repentance. And do not begin to say to yourselves, We have Abraham as our father.' John refuses to let religious heritage substitute for transformed behavior. He specifies: 'Anyone who has two shirts should share with the one who has none. The one who has food should do the same' (3:11). Tax collectors: collect only what is required. Soldiers: no extortion, no false accusation, be content with your wages. Genuine repentance is always behavioral and specific — it changes how you treat people." },
  { q: "The Difference Between Guilt and Shame", a: "Guilt says: I did something wrong. Shame says: I am something wrong. Biblical repentance works with guilt — specific acts of sin that can be named, confessed, and forgiven. It does not work through shame, which is a global verdict on the self that cannot be addressed by forgiveness because the accusation is about identity rather than acts. The gospel speaks directly to shame: 'you are not condemned' (Rom 8:1) — a verdict about identity, not just behavior. True repentance + the gospel = freedom from both guilt and shame." },
];

const PRODIGAL_CARDS = [
  { icon: "🏃", color: RED, title: "The Far Country (Luke 15:13)", text: "The younger son took his inheritance — essentially wishing his father dead — and went to a 'far country' where he wasted it in reckless living. The distance is physical and spiritual: he put maximum space between himself and home. The far country is everywhere human autonomy leads when it turns from the Father: freedom that becomes slavery, pleasure that becomes emptiness, abundance that becomes famine." },
  { icon: "🐷", color: GOLD, title: "He Came to Himself (Luke 15:17)", text: "'When he came to himself he said, How many of my father's hired servants have food to spare, and here I am starving to death!' The turning point is not a vision, not a voice, not a dramatic intervention — it is clear-eyed self-assessment: he recognized his condition as what it was. 'He came to himself' — in the far country, he had been dis-integrated, out of alignment with his true identity. Repentance begins with seeing reality clearly." },
  { icon: "💨", color: TEAL, title: "The Father Who Ran (Luke 15:20)", text: "'But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.' In the ancient Middle East, a man of dignity did not run — it was undignified, requiring hitching up the robe. The father ran. He was watching for the son's return and sprinted to meet him before the son could complete his rehearsed speech. This is the character of the God to whom we return: already running toward us." },
  { icon: "🎉", color: GREEN, title: "The Robe, Ring, and Feast (Luke 15:22–24)", text: "'Quick! Bring the best robe and put it on him. Put a ring on his finger and sandals on his feet. Bring the fattened calf and kill it. Let's have a feast and celebrate. For this son of mine was dead and is alive again; he was lost and is found.' The robe = restored dignity; the ring = restored authority; the sandals = restored sonship (slaves went barefoot). The feast = joy that belongs to the whole community. Repentance leads not to probationary status but full restoration." },
];

const COMMUNITY_ITEMS = [
  { q: "Confession to One Another (James 5:16)", a: "'Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.' James embeds confession in community — it is not primarily a private transaction between the individual and God (though that is included) but a relational act that involves the body. The promise attached is healing — not exclusively physical but holistic restoration. Horizontal accountability and vertical forgiveness are joined." },
  { q: "The Protestant Rediscovery of Confession", a: "Luther's Reformation did not abolish confession but transformed it. In the Large Catechism, Luther writes that private confession — confessing specific sins to another person and hearing the personal word of absolution — is a profound gift. Dietrich Bonhoeffer in Life Together: 'The pious man knows no loneliness... The grace of the gospel... is only available through community. The Christian needs another Christian who speaks God's Word to him.' Breaking isolation through confession is the gift of the body." },
  { q: "When to Confess to Another Person", a: "Confessing sins directly to God (1 John 1:9) is always available and sufficient for forgiveness. The additional practice of confessing to another Christian offers: (1) the embodied word of assurance — hearing forgiveness spoken by a person; (2) accountability — someone who knows the struggle; (3) prayer support — intercession for specific named weaknesses; (4) the defeat of shame through naming sin in the light rather than hiding it in the dark. John Owen: hidden sin grows; named sin loses its power." },
  { q: "Boundaries in Community Confession", a: "James 5:16 does not require universal public disclosure of all sins. Wisdom governs: confess to the person or people affected; confess in the appropriate scope; ensure the person you confess to has the capacity to hold it well. A trusted spiritual director, mentor, or close Christian friend is the ordinary context. Confessing to the whole congregation sins that affect only the individual can harm both the confessor (public shame that does not serve healing) and the community (information burden)." },
];

const AFTER_REPENTANCE = [
  { q: "The Assurance of Forgiveness (1 John 1:9)", a: "'If we confess our sins, he is faithful and just to forgive us our sins and to purify us from all unrighteousness.' The promise is categorical and grounded in God's character: faithful (trustworthy, covenant-keeping) and just (the cross has dealt with the legal question; forgiveness is not a waiving of justice but justice fulfilled in Christ). The purification is comprehensive: not just the specific act confessed but all unrighteousness — the whole network of distortion. There is no asterisk on this promise." },
  { q: "No Condemnation (Romans 8:1)", a: "'Therefore, there is now no condemnation for those who are in Christ Jesus.' This is the post-repentance location: in Christ, the verdict has changed. Not conditionally — there is now (present tense) no condemnation. The enemy's accusation cannot overturn a verdict already rendered. Repentance clears the path back to this reality; the gospel announces that the reality has never changed. The difference between the Spirit's conviction (which leads to repentance and rest) and the Accuser's condemnation (which leads to despair and paralysis) is their destination." },
  { q: "The Joy of Forgiveness (Ps 32:1–2)", a: "'Blessed is the one whose transgressions are forgiven, whose sins are covered. Blessed is the one whose sin the Lord does not count against them and in whose spirit is no deceit.' Psalm 32 opens with the ecstatic declaration of the forgiven person. Before: bones wasted away; groaning all day; God's hand heavy. After: the weight lifted, covered, not counted. The sequence: confession → forgiveness → blessedness → testimony. David's repentance becomes instruction: 'I will teach you in the way you should go.'" },
  { q: "Restitution and Repair", a: "Where repentance is real, it seeks to repair what sin has broken where possible. Zacchaeus: 'Look, Lord! Here and now I give half of my possessions to the poor, and if I have cheated anybody out of anything, I will pay back four times the amount' (Luke 19:8). Jesus's response: 'Today salvation has come to this house.' The restitution does not earn salvation, but it is evidence of transformed orientation. Making right what can be made right is part of the fruit of repentance — a sign that the turning is genuine." },
];

const VIDEOS = [
  { videoId: "ZMNkE3CjY0w", title: "What Is Repentance? – Tim Keller" },
  { videoId: "fwCdeSXIepI", title: "Psalm 51 – A Model of Repentance" },
  { videoId: "YfBiMmPt3Ak", title: "The Prodigal Son – The Greatest Story Ever Told" },
];

export default function ConfessionRepentanceGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<string>("vine_conf_tab", "Overview");
  const [openWord, setOpenWord] = useState<number>(-1);
  const [openPs51, setOpenPs51] = useState<number>(-1);
  const [openSorrow, setOpenSorrow] = useState<number>(-1);
  const [openCom, setOpenCom] = useState<number>(-1);
  const [openAfter, setOpenAfter] = useState<number>(-1);
  const [journal, setJournal] = usePersistedState<string>("vine_conf_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui,sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: ".5rem" }}>🙇</div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 900, color: TEXT, marginBottom: ".5rem" }}>Confession and Repentance</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>A Comprehensive Christian Guide — turning from sin to God: the biblical words, Psalm 51, godly vs. worldly sorrow, the prodigal son's return, and the joy that follows forgiveness.</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t) => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ padding: ".5rem 1.1rem", borderRadius: 20, border: `1px solid ${activeTab === t ? PURPLE : BORDER}`, background: activeTab === t ? `${PURPLE}22` : CARD, color: activeTab === t ? PURPLE : MUTED, fontWeight: activeTab === t ? 700 : 400, cursor: "pointer", fontSize: ".85rem" }}>{t}</button>
          ))}
        </div>

        {/* Tab 0: Overview */}
        {activeTab === "Overview" && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.4rem", marginBottom: "1rem" }}>Overview: The Gift of Repentance</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Repentance is not a gloomy obligation but a liberating gift. It is the God-given capacity to turn — to change direction from death toward life, from autonomy toward relationship, from self-destruction toward restoration. The Reformers called it one of the central graces of the Christian life, practiced not once at conversion but continuously, daily.</p>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Martin Luther's first of the 95 Theses: "When our Lord and Master Jesus Christ said 'Repent' (Matt 4:17), he willed the entire life of believers to be one of repentance." The whole Christian life is a repentance life — a life of continuous turning toward God. Far from being a burden, this practice is the path of increasing freedom, because it brings every area of life progressively under the transforming mercy of God.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "1rem", marginTop: "1.5rem" }}>
              {[["Hebrew: Shuv","To turn, return"],["Hebrew: Nacham","To relent, feel compassion"],["Greek: Metanoia","Change of mind/direction"],["Greek: Exomologeo","Confess openly"],["Model Psalm","Psalm 51 (David)"],["Model Parable","The Prodigal Son"]].map(([k,v]) => (
                <div key={k} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: ".75rem", marginBottom: ".25rem" }}>{k}</div>
                  <div style={{ color: TEXT, fontWeight: 700 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 1: Biblical Words */}
        {activeTab === "Biblical Words" && (
          <div>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Biblical Words for Repentance</h2>
            {BIBLICAL_WORDS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openWord === i ? TEAL : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenWord(openWord === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: TEAL, fontSize: "1.2rem" }}>{openWord === i ? "−" : "+"}</span>
                </button>
                {openWord === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Psalm 51 */}
        {activeTab === "Psalm 51" && (
          <div>
            <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Psalm 51 — The Model Penitential Prayer</h2>
            {PSALM51_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openPs51 === i ? PURPLE : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenPs51(openPs51 === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: PURPLE, fontSize: "1.2rem" }}>{openPs51 === i ? "−" : "+"}</span>
                </button>
                {openPs51 === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Godly Sorrow */}
        {activeTab === "Godly Sorrow" && (
          <div>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Godly Sorrow vs. Worldly Sorrow</h2>
            {GODLY_SORROW.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openSorrow === i ? RED : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenSorrow(openSorrow === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: RED, fontSize: "1.2rem" }}>{openSorrow === i ? "−" : "+"}</span>
                </button>
                {openSorrow === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Prodigal Son */}
        {activeTab === "Prodigal Son" && (
          <div>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Prodigal Son — Repentance Illustrated</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {PRODIGAL_CARDS.map(c => (
                <div key={c.title} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem" }}>
                  <div style={{ display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.8rem" }}>{c.icon}</span>
                    <div>
                      <div style={{ color: c.color, fontWeight: 800, marginBottom: ".5rem" }}>{c.title}</div>
                      <div style={{ color: MUTED, lineHeight: 1.8 }}>{c.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Community Confession */}
        {activeTab === "Community Confession" && (
          <div>
            <h2 style={{ color: BLUE, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Confession in Community</h2>
            {COMMUNITY_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openCom === i ? BLUE : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenCom(openCom === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: BLUE, fontSize: "1.2rem" }}>{openCom === i ? "−" : "+"}</span>
                </button>
                {openCom === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 6: After Repentance */}
        {activeTab === "After Repentance" && (
          <div>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Grace That Follows Repentance</h2>
            {AFTER_REPENTANCE.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openAfter === i ? GREEN : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenAfter(openAfter === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: GREEN, fontSize: "1.2rem" }}>{openAfter === i ? "−" : "+"}</span>
                </button>
                {openAfter === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 7: Journal */}
        {activeTab === "Journal" && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: ".5rem" }}>Study Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1rem", fontSize: ".9rem" }}>Reflect on confession and repentance. Your notes are saved locally.</p>
            {[
              "Is there an area where you have been experiencing worldly sorrow (regret about consequences) rather than godly sorrow (grief about the offense)? What would the difference look like in practice?",
              "Read Psalm 51 slowly. Which verse most captures where you are right now — either in need of its prayer, or in the gratitude of its assurance?",
              "Is there someone in your life who could serve as a safe person for mutual confession and accountability? What is holding you back from that kind of transparency?",
            ].map((q, i) => <p key={i} style={{ color: GOLD, fontSize: ".85rem", fontStyle: "italic", marginBottom: ".4rem" }}>{i + 1}. {q}</p>)}
            <textarea
              value={journal}
              onChange={e => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 220, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, color: TEXT, padding: "1rem", fontSize: ".95rem", lineHeight: 1.7, resize: "vertical", marginTop: ".75rem", boxSizing: "border-box" }}
            />
            {journal && <p style={{ color: MUTED, fontSize: ".8rem", marginTop: ".5rem" }}>Saved automatically.</p>}
          </div>
        )}

        {/* Tab 8: Videos */}
        {activeTab === "Videos" && (
          <div>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Video Resources</h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
