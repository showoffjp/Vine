"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const OVERVIEW_PARAGRAPHS = [
  {
    heading: "A Letter Written in the Shadow of Death",
    body: "Second Timothy is Paul&rsquo;s final letter &mdash; written from a Roman prison, probably around AD 67, with his execution imminent. Unlike his first letter to Timothy, this one is intimate and urgent. It is a farewell charge from a man who knows he will not see his young colleague again. Chapter 2 sits at the center of this final letter with a series of vivid word-pictures and concentrated instruction: be strong, entrust what you have received, share in suffering, remember Jesus Christ, rightly handle the word of truth, flee, pursue, correct opponents with gentleness. Every line carries the weight of a man who has fought long and is passing the baton.",
  },
  {
    heading: "The Problem of Fragility in the Next Generation",
    body: "A major concern running through 2 Timothy is whether the gospel will be faithfully transmitted to the next generation. Paul has suffered for the gospel; Onesiphorus stood by him; but others &mdash; Phygelus, Hermogenes, Demas &mdash; have turned away. Chapter 2 opens with the solution to this fragility: entrust what you have heard to faithful people who will be able to teach others also (v.2). The chain of transmission is explicit: Paul to Timothy to faithful people to others. Four generations of the gospel in one verse. The concern is not just that Timothy preach faithfully; it is that Timothy reproduce faithfully. The gospel is not a solo performance but a relay.",
  },
  {
    heading: "The Structure of Chapter 2",
    body: "The chapter is organized around a series of images and arguments. Verses 1-2 establish the foundation: strength in grace and the faithful transmission of the deposit. Verses 3-7 offer three analogies &mdash; soldier, athlete, farmer &mdash; each illustrating a different aspect of disciplined endurance. Verses 8-13 call Timothy to remember Jesus Christ risen from the dead, and embed a trustworthy saying about dying and living with Christ. Verses 14-19 turn to the ministry of the word: do not quarrel about words, but rightly handle the word of truth; avoid irreverent babble. Verses 20-26 conclude with a practical call to be a vessel for honorable use, flee youthful passions, pursue virtue, and correct opponents with patience and gentleness.",
  },
];

const KEY_THEMES = [
  {
    id: "strong-in-grace",
    color: BLUE,
    title: "Be Strong in the Grace That Is in Christ Jesus",
    verse: "2 Timothy 2:1",
    body: "The opening command seems paradoxical: be strong &mdash; but in grace. Paul is not calling Timothy to self-generated toughness or stoic endurance. He is directing him to a source: the grace that is in Christ Jesus. This is the same pattern as Philippians 4:13 (&ldquo;I can do all things through him who strengthens me&rdquo;) and Ephesians 6:10 (&ldquo;be strong in the Lord and in the strength of his might&rdquo;). The strength Paul has in view is received, not self-produced. Grace &mdash; the unmerited favor and enabling power of God &mdash; is the resource from which Timothy is to draw. This distinction matters enormously for the shape of ministry: it is not willpower deployed for God but weakness leaning on God&rsquo;s power.",
  },
  {
    id: "faithful-transmission",
    color: GREEN,
    title: "The Faithful Transmission of the Gospel",
    verse: "2 Timothy 2:2",
    body: "Verse 2 contains one of the most important discipleship principles in the New Testament, compressed into a single sentence. What Timothy has heard from Paul in the presence of many witnesses &mdash; the public, accountable handing-over of the tradition &mdash; he is to entrust to faithful people who will be able to teach others also. The four-generation chain (Paul, Timothy, faithful people, others) illustrates the nature of gospel transmission. It is not institutional or impersonal; it is relational and intentional. The word &ldquo;entrust&rdquo; (parathou) is the same root as &ldquo;deposit&rdquo; (paratheke) used in 1 Timothy 6:20 &mdash; valuable goods placed in the care of a trusted steward. Faithful transmission requires people who are both faithful (trustworthy in character) and able to teach (competent in the word).",
  },
  {
    id: "analogies",
    color: GOLD,
    title: "Soldier, Athlete, Farmer &mdash; Three Images of Disciplined Endurance",
    verse: "2 Timothy 2:3-7",
    body: "Paul reaches for three images to characterize the life of faithful ministry, each illuminating a different dimension. The soldier does not entangle himself in civilian pursuits &mdash; his one aim is to please his commanding officer. Ministry requires a similar single-mindedness: freedom from entanglement, clarity of purpose, and the capacity to bear hardship without being derailed by it. The athlete competes according to the rules &mdash; there is no crown for those who cut corners. The means matter; the methods must match the message. The farmer is the hard-working one who &ldquo;ought to have the first share of the crops&rdquo; &mdash; labor that is patient, seasonal, and sustained earns its reward in due time. Paul adds: think over what I say, for the Lord will give you understanding. Meditation on these images yields insight; understanding is granted through prayerful reflection.",
  },
  {
    id: "trustworthy-saying",
    color: ROSE,
    title: "The Trustworthy Saying &mdash; Dying and Living with Christ",
    verse: "2 Timothy 2:8-13",
    body: "Paul grounds everything in a single command: remember Jesus Christ, risen from the dead, the offspring of David. Before the theological elaboration comes the concrete historical fact: the resurrection of a particular person from the line of David. This is the gospel Paul suffers for. The word of God is not bound, even when Paul is. Then comes the trustworthy saying &mdash; probably an early Christian hymn &mdash; with its four conditional lines: if we have died with him, we will live with him; if we endure, we will also reign with him; if we deny him, he also will deny us; if we are faithless, he remains faithful, for he cannot deny himself. The structure is not symmetrical: the first three conditions are human actions, the last one is God&rsquo;s character. Even our faithlessness does not make God faithless &mdash; though our denial carries its own sober warning.",
  },
  {
    id: "word-of-truth",
    color: TEAL,
    title: "Rightly Handling the Word of Truth",
    verse: "2 Timothy 2:14-19",
    body: "The command to rightly handle the word of truth (orthotomeo in Greek &mdash; literally &ldquo;to cut straight&rdquo;) is one of the most significant ministerial metaphors in the New Testament. The image may come from a tentmaker (Paul&rsquo;s own trade) cutting leather along a straight line, or from a farmer plowing straight furrows, or from a stonemason cutting stone. The point in each case is the same: sloppy handling has consequences. By contrast, Paul warns against quarreling about words &mdash; a practice that is useless and ruins the hearers &mdash; and against irreverent babble, which leads people into ungodliness. The metaphor of Hymenaeus and Philetus is given as a negative example: their teaching spread like gangrene. God&rsquo;s firm foundation stands: the Lord knows those who are his, and let everyone who names the name of the Lord depart from iniquity.",
  },
  {
    id: "gentle-correction",
    color: PURPLE,
    title: "Correcting Opponents with Gentleness",
    verse: "2 Timothy 2:20-26",
    body: "The chapter closes with a striking combination of calling and method. The calling: to be a vessel for honorable use, set apart and useful to the master, ready for every good work. The prerequisite: cleansing oneself from dishonorable vessels by fleeing youthful passions and pursuing righteousness, faith, love, and peace. The method: the Lord&rsquo;s servant must not be quarrelsome but kind to everyone, able to teach, and patient when wronged. The task with opponents is not to defeat them in argument but to correct them with gentleness &mdash; so that God may perhaps grant them repentance leading to a knowledge of the truth. The entire process &mdash; the correction, the repentance, the escape from the devil&rsquo;s snare &mdash; is framed as a gift from God, not an achievement of the teacher. This humbles the corrector and keeps the door open to the corrected.",
  },
];

const VERSE_SECTIONS = [
  {
    ref: "vv. 1-2",
    title: "Strong in Grace, Faithful in Transmission",
    color: BLUE,
    body: "Paul opens with a double charge: be strong in the grace that is in Christ Jesus, and entrust to faithful people what you have received. The two commands are inseparable. The strength for faithful transmission comes from grace; grace is not merely a gift received but a power in which one lives and ministers. The word for &ldquo;strong&rdquo; (endunamou) is a present passive imperative &mdash; be-being-strengthened, continually, by the grace that is in Christ. The transmission charge is sobering in its precision: what Timothy has heard from Paul in the presence of many witnesses. This is not private revelation but publicly accountable tradition. And it must be entrusted not to the most gifted or most eager but to the faithful &mdash; people of proven character &mdash; who are also able to teach. Both faithfulness and competence are required.",
  },
  {
    ref: "vv. 3-7",
    title: "Soldier, Athlete, Farmer &mdash; Three Models of Endurance",
    color: GOLD,
    body: "Paul offers three word-pictures in rapid succession, each with a distinct emphasis. The soldier image (vv.3-4) stresses undistracted devotion: a good soldier does not get entangled in civilian pursuits. His whole energy is given to pleasing his commanding officer. The ministry implication is about simplicity of aim &mdash; cutting away the secondary concerns that dilute the primary calling. The athlete image (v.5) stresses integrity of method: no crown for those who compete outside the rules. There are no shortcuts; the manner of ministry must reflect the character of the gospel. The farmer image (vv.6-7) stresses patient labor and eventual reward: the hard-working farmer deserves the first share of the crops. Ministry is seasonal; some harvests take years. Paul closes with an invitation to meditation: &ldquo;Think over what I say, for the Lord will give you understanding in everything.&rdquo; These are not automatic insights but rewards of reflection.",
  },
  {
    ref: "vv. 8-13",
    title: "Remember Jesus Christ &mdash; The Gospel Paul Suffers For",
    color: ROSE,
    body: "Paul anchors Timothy&rsquo;s endurance in historical memory: remember Jesus Christ, risen from the dead, descended from David. The two facts &mdash; resurrection and Davidic descent &mdash; are the twin pillars of the gospel Paul preaches (compare Romans 1:3-4). Paul is suffering for this gospel, bound like a criminal, but &ldquo;the word of God is not bound&rdquo; (v.9). This is a remarkable claim from a man in chains: the power of the gospel exceeds any constraint that human authorities can place on its herald. Paul endures everything for the sake of the elect, that they too may obtain salvation with eternal glory. Then comes the trustworthy saying, with its two positive conditionals (die/live; endure/reign), one warning (deny/denied), and one absolute (faithless/he remains faithful). God&rsquo;s faithfulness is the ultimate foundation &mdash; because God cannot deny his own character.",
  },
  {
    ref: "vv. 14-19",
    title: "Rightly Handling the Word &mdash; Approved and Unashamed",
    color: TEAL,
    body: "The transitional &ldquo;remind them of these things&rdquo; (v.14) connects the trustworthy saying to Timothy&rsquo;s ongoing charge to his congregation. He is to charge them before God not to quarrel about words &mdash; a practice Paul calls useless and ruinous. The positive alternative is presented in v.15: &ldquo;Do your best to present yourself to God as one approved, a worker who has no need to be ashamed, rightly handling the word of truth.&rdquo; The Greek word translated &ldquo;rightly handling&rdquo; (orthotomeo) suggests precise, accurate work with the text. The alternative &mdash; irreverent babble &mdash; does not just fail to help; it actively leads people toward ungodliness and spreads like gangrene. Hymenaeus and Philetus are cited as examples: by claiming the resurrection had already happened, they undermined the faith of some. But God&rsquo;s foundation stands firm, sealed with two inscriptions from Numbers 16 and Isaiah 26: the Lord knows his own, and his own depart from iniquity.",
  },
  {
    ref: "vv. 20-26",
    title: "Honorable Vessels and Gentle Correction",
    color: PURPLE,
    body: "Paul&rsquo;s final image is the household: in a great house there are vessels for honorable and dishonorable use. The application is not deterministic &mdash; Paul immediately calls Timothy to actively cleanse himself from what is dishonorable, so that he may be a vessel for honorable use, set apart, useful to the master of the house, and ready for every good work. The precondition is moral: fleeing youthful passions (not only sexual but also ambition, impatience, love of controversy) and pursuing righteousness, faith, love, and peace along with those who call on the Lord from a pure heart. The pattern of &ldquo;flee and pursue&rdquo; appears here as it did in 1 Timothy 6:11. Then comes the portrait of the Lord&rsquo;s servant: not quarrelsome, kind to everyone, able to teach, patient when wronged, correcting opponents with gentleness. The goal is not the opponent&rsquo;s defeat but their repentance &mdash; granted by God, not engineered by the teacher. This frames all correction as ultimately an act of hope.",
  },
];

const APPLICATION_POINTS = [
  {
    color: BLUE,
    title: "Being Strong in Grace, Not in Self-Sufficiency",
    body: "The command &ldquo;be strong&rdquo; is addressed to a man who is apparently struggling &mdash; who needs this word. Paul&rsquo;s wisdom is that the source of ministry strength is not personality, gifting, or sheer determination but grace. This has practical implications: the minister who is running on willpower alone will eventually collapse; the one who has learned to draw from grace has access to a supply that does not run out. Practically this means honest prayer (acknowledging weakness rather than projecting strength), Sabbath rest (trusting the outcome to God rather than grinding), and regular return to the gospel itself (the preacher who is not being fed will have nothing to give). Grace is not a supplement to ministry; it is its engine.",
  },
  {
    color: GREEN,
    title: "Entrusting Sound Doctrine to the Next Generation",
    body: "Paul&rsquo;s four-generation chain (Paul, Timothy, faithful people, others) describes the normal pattern of gospel transmission. The question for every Christian is not only &ldquo;what do I believe?&rdquo; but &ldquo;who am I investing in?&rdquo; Discipleship is not a program; it is a relationship of sustained, accountable accompaniment in which the substance of the faith is being handed on. The two criteria Paul gives for the recipients of this transmission &mdash; faithful and able to teach &mdash; suggest a realistic discernment: not every eager person is faithful; not every faithful person is yet able to teach. Investing in both character and competence is the work of the long-term discipler.",
  },
  {
    color: GOLD,
    title: "Enduring Hardship as a Good Soldier",
    body: "The soldier image addresses one of the most common failure modes in Christian ministry: the entanglement in civilian concerns. Civilian concerns are not sins; they are legitimate preoccupations &mdash; financial security, reputation management, comfort, the avoidance of controversy &mdash; that dilute the single-minded devotion that effective ministry requires. Paul is not calling for a monastic withdrawal from ordinary life but for a clarity of priority that keeps secondary things secondary. The ability to bear hardship without being undone by it &mdash; to stay the course when it is uncomfortable &mdash; is one of the marks of the mature servant.",
  },
  {
    color: TEAL,
    title: "Rightly Handling Scripture in Community",
    body: "The call to rightly handle the word of truth is directed at Timothy as a teacher, but its implications are broader. Every follower of Christ who reads, interprets, and applies Scripture is engaged in some version of this task. The alternatives Paul warns against &mdash; quarreling about words and irreverent babble &mdash; are both failures of handling. Quarreling about words treats the text as an arena for winning arguments rather than a place of encounter with God. Irreverent babble treats it with insufficient seriousness. Rightly handling Scripture requires: reading it in its plain sense, attending to its historical context, reading it in community with others who check our interpretation, and applying it honestly to ourselves before prescribing it to others.",
  },
  {
    color: PURPLE,
    title: "Correcting Opponents with Patience and Hope",
    body: "The final verses of 2 Timothy 2 offer what may be the most counter-cultural counsel in the chapter: correct opponents with gentleness. In an era of social media controversy where the pressure to defeat and expose is enormous, Paul&rsquo;s framework is strikingly different. The goal is not the opponent&rsquo;s humiliation but their repentance &mdash; and Paul frames even that as a gift from God, not an achievement of the corrector. This should produce humility in the one who corrects: if repentance is granted by God, my task is faithfulness in manner, not cleverness in argument. The &ldquo;perhaps&rdquo; of verse 25 (&ldquo;God may perhaps grant them repentance&rdquo;) keeps correction hopeful without being presumptuous. We do not know who will respond; we know we are called to be kind.",
  },
];

const videoItems = [
  { videoId: "N-aCY3fVvMQ", title: "2 Timothy 2 - Be Strong in Grace and Endure" },
  { videoId: "jLqcaHO7k4A", title: "Rightly Handling the Word of Truth - 2 Timothy 2:15" },
  { videoId: "3cB3_NZwROM", title: "The Trustworthy Saying - 2 Timothy 2:8-13 Exposition" },
  { videoId: "1yEMG0oRs_s", title: "Soldier, Athlete, Farmer - 2 Timothy 2 Bible Study" },
];

export default function Timothy2GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(160deg, #0a0e1a 0%, #07070F 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 20px 40px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: `${BLUE}22`, border: `1px solid ${BLUE}55`, borderRadius: 8, padding: "4px 14px", fontSize: 12, fontWeight: 700, color: BLUE, letterSpacing: 1, marginBottom: 18, textTransform: "uppercase" }}>
            Bible Study Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16, color: TEXT }}>
            2 Timothy 2
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 640, marginBottom: 24 }}
            dangerouslySetInnerHTML={{ __html: "Paul&rsquo;s charge to be strong in grace and to entrust the gospel to faithful people &mdash; with the vivid images of the soldier, athlete, and farmer, and the call to rightly handle the word of truth." }}
          />
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              { label: "Book", value: "2 Timothy" },
              { label: "Chapter", value: "2" },
              { label: "Verses", value: "26" },
              { label: "Theme", value: "Endurance &amp; Sound Doctrine" },
            ].map((item) => (
              <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px" }}>
                <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 2 }}
                  dangerouslySetInnerHTML={{ __html: item.label }}
                />
                <div style={{ fontSize: 14, color: TEXT, fontWeight: 700 }}
                  dangerouslySetInnerHTML={{ __html: item.value }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "16px 24px",
                background: "transparent",
                border: "none",
                borderBottom: activeTab === tab.id ? `3px solid ${BLUE}` : "3px solid transparent",
                color: activeTab === tab.id ? BLUE : MUTED,
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 0.15s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: `${BLUE}12`, border: `1px solid ${BLUE}40`, borderRadius: 14, padding: "20px 24px", marginBottom: 32 }}>
              <p style={{ color: BLUE, fontWeight: 700, fontSize: 14, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.8 }}>
                Key Verse
              </p>
              <p style={{ color: TEXT, fontSize: 18, fontStyle: "italic", lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;You then, my child, be strengthened by the grace that is in Christ Jesus, and what you have heard from me in the presence of many witnesses entrust to faithful men, who will be able to teach others also.&rdquo; &mdash; 2 Timothy 2:1-2" }}
              />
            </div>

            {OVERVIEW_PARAGRAPHS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 20 }}>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: TEXT, marginBottom: 12 }}
                  dangerouslySetInnerHTML={{ __html: item.heading }}
                />
                <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginTop: 24 }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, color: TEXT, marginBottom: 18 }}>Chapter Structure at a Glance</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "vv. 1-2", summary: "Be strong in grace; entrust the gospel to faithful people who can teach others also", color: BLUE },
                  { ref: "vv. 3-7", summary: "Share in suffering: the soldier, athlete, and farmer analogies of disciplined endurance", color: GOLD },
                  { ref: "vv. 8-13", summary: "Remember Jesus Christ risen from the dead; the trustworthy saying about dying and living with him", color: ROSE },
                  { ref: "vv. 14-19", summary: "Do not quarrel about words; rightly handle the word of truth; the firm foundation stands", color: TEAL },
                  { ref: "vv. 20-26", summary: "Vessels for honorable use; flee and pursue; correct opponents with gentleness", color: PURPLE },
                ].map((row) => (
                  <div key={row.ref} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ minWidth: 60, fontWeight: 800, fontSize: 13, color: row.color }}>{row.ref}</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: row.summary }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "themes" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "Second Timothy 2 weaves together several major themes of Paul&rsquo;s final letter. Click each theme to expand the full discussion." }}
            />
            {KEY_THEMES.map((theme) => {
              const isOpen = openTheme === theme.id;
              return (
                <div key={theme.id} style={{ background: CARD, border: `1px solid ${isOpen ? theme.color + "60" : BORDER}`, borderRadius: 14, marginBottom: 14, overflow: "hidden", transition: "border-color 0.2s" }}>
                  <button
                    type="button"
                    onClick={() => setOpenTheme(isOpen ? null : theme.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 22px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: theme.color, flexShrink: 0 }} />
                      <div>
                        <div style={{ color: TEXT, fontWeight: 800, fontSize: 16 }}
                          dangerouslySetInnerHTML={{ __html: theme.title }}
                        />
                        <div style={{ color: theme.color, fontSize: 12, fontWeight: 700, marginTop: 2 }}>{theme.verse}</div>
                      </div>
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, fontWeight: 300, flexShrink: 0, marginLeft: 12 }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 22px 22px 44px" }}>
                      <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: theme.body }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "A section-by-section exposition of 2 Timothy 2, from Paul&rsquo;s opening charge to be strong in grace to the final instruction on correcting opponents with gentleness." }}
            />
            {VERSE_SECTIONS.map((section) => {
              const isOpen = openVerse === section.ref;
              return (
                <div key={section.ref} style={{ background: CARD, border: `1px solid ${isOpen ? section.color + "55" : BORDER}`, borderRadius: 14, marginBottom: 16, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => setOpenVerse(isOpen ? null : section.ref)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <span style={{ background: section.color, color: "#fff", borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 800, flexShrink: 0 }}>{section.ref}</span>
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: 16 }}
                        dangerouslySetInnerHTML={{ __html: section.title }}
                      />
                    </div>
                    <span style={{ color: MUTED, fontSize: 22, fontWeight: 300, flexShrink: 0, marginLeft: 12 }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 24px 24px", borderTop: `1px solid ${BORDER}` }}>
                      <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.85, margin: "20px 0 0" }}
                        dangerouslySetInnerHTML={{ __html: section.body }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: `${BLUE}12`, border: `1px solid ${BLUE}40`, borderRadius: 14, padding: "20px 24px", marginBottom: 32 }}>
              <p style={{ color: BLUE, fontWeight: 700, fontSize: 13, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.8 }}>Living It Out</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Second Timothy 2 is addressed to a specific pastor in a specific crisis, but its application reaches every follower of Christ who has received the gospel and is responsible for passing it on. These five points press the chapter&rsquo;s teaching into present-day discipleship." }}
              />
            </div>

            {APPLICATION_POINTS.map((point, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 20, borderLeft: `4px solid ${point.color}` }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: point.color, marginBottom: 12 }}
                  dangerouslySetInnerHTML={{ __html: point.title }}
                />
                <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: point.body }}
                />
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "28px 28px", marginTop: 24 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: TEXT, marginBottom: 20 }}>Discussion Questions</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Paul commands Timothy to be strong &ldquo;in the grace that is in Christ Jesus&rdquo; &mdash; not in personal resolve or gifting. What does drawing strength from grace rather than from self look like practically in your current season of life or ministry?",
                  "Who in your life are you intentionally discipling or investing in? Are they faithful (trustworthy in character) and able to teach? What would it look like to take Paul&rsquo;s four-generation chain seriously in your specific context?",
                  "The three analogies &mdash; soldier, athlete, farmer &mdash; each illuminate a different aspect of disciplined endurance. Which image resonates most with your current situation and why? What &ldquo;civilian entanglements&rdquo; most threaten your focus?",
                  "The trustworthy saying promises that if we are faithless, God remains faithful. How does God&rsquo;s unchanging faithfulness stabilize you when you are discouraged about your own inconsistency or failure?",
                  "Paul calls for correcting opponents with gentleness, &ldquo;so that God may perhaps grant them repentance.&rdquo; Is there a person or situation in your life where you are called to correction? How does this framing &mdash; the outcome belongs to God, not you &mdash; change your posture toward that person?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 18px", background: BG, borderRadius: 10, border: `1px solid ${BORDER}` }}>
                    <span style={{ minWidth: 26, height: 26, borderRadius: "50%", background: `${BLUE}30`, color: BLUE, fontWeight: 800, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIDEO SECTION - always rendered below tabs */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: TEXT, marginBottom: 8 }}>Teaching Videos</h2>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}
            dangerouslySetInnerHTML={{ __html: "Sermons and expositions of 2 Timothy 2 from trusted Bible teachers." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <p style={{ color: TEXT, fontWeight: 700, fontSize: 15, margin: 0, lineHeight: 1.5 }}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
