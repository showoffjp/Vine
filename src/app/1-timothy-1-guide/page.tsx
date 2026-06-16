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
const TEAL = "#0D9488";
const ROSE = "#E11D48";

type Tab = "overview" | "themes" | "versebyverse" | "application";

export default function Timothy1GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "7RoqnGcEjcs", title: "1 Timothy 1 - Sound Doctrine and the Purpose of the Law" },
    { videoId: "LWvNKKyGMnI", title: "Christ Jesus Came to Save Sinners - Paul's Testimony in 1 Timothy 1" },
    { videoId: "XZfyVT2ekxk", title: "The Pastoral Epistles: Introduction and 1 Timothy 1 Overview" },
    { videoId: "9GE4RdkXpTg", title: "The Foremost of Sinners - Grace for the Worst" },
  ];

  const TABS: { id: Tab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "themes", label: "Key Themes" },
    { id: "versebyverse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(160deg, #0d0d1a 0%, #12121F 60%, #07070F 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "56px 20px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${PURPLE}18`, border: `1px solid ${PURPLE}40`, borderRadius: 8, padding: "4px 14px", marginBottom: 18 }}>
            <span style={{ color: PURPLE, fontSize: 13, fontWeight: 700, letterSpacing: "0.06em" }}>1 TIMOTHY 1</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 18, letterSpacing: "-0.02em" }}>
            Sound Doctrine, the Purpose of the Law,&nbsp;
            <span style={{ color: PURPLE }}>and Paul&rsquo;s Testimony</span>
          </h1>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.75, maxWidth: 640, margin: "0 auto 28px" }}
            dangerouslySetInnerHTML={{ __html: "The opening chapter of the Pastoral Epistles &mdash; a charge to Timothy to guard sound doctrine, a careful explanation of the law&rsquo;s proper use, and one of the most extraordinary personal testimonies in all of Scripture: &ldquo;Christ Jesus came into the world to save sinners, of whom I am the foremost.&rdquo;" }}
          />
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <div style={{ background: `${CARD}`, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "10px 20px", textAlign: "center" }}>
              <div style={{ color: GOLD, fontWeight: 800, fontSize: 20 }}>20</div>
              <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>Verses</div>
            </div>
            <div style={{ background: `${CARD}`, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "10px 20px", textAlign: "center" }}>
              <div style={{ color: ROSE, fontWeight: 800, fontSize: 20 }}>c. 62&ndash;65 AD</div>
              <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>Written</div>
            </div>
            <div style={{ background: `${CARD}`, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "10px 20px", textAlign: "center" }}>
              <div style={{ color: TEAL, fontWeight: 800, fontSize: 20 }}>Ephesus</div>
              <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>Context</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: 0, zIndex: 10 }}>
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
                borderBottom: activeTab === tab.id ? `2px solid ${PURPLE}` : "2px solid transparent",
                color: activeTab === tab.id ? PURPLE : MUTED,
                fontWeight: activeTab === tab.id ? 700 : 500,
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

      {/* Main content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            {/* Introduction card */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 32, marginBottom: 28 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 16, margin: "0 0 16px" }}>Introduction to the Pastoral Epistles</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "First Timothy opens what scholars call the Pastoral Epistles &mdash; 1 Timothy, 2 Timothy, and Titus &mdash; three letters addressed not to congregations but to individual pastoral workers. Paul is writing to Timothy, his &ldquo;true child in the faith&rdquo; (v.2), whom he has left in Ephesus to address specific problems in the church there. The letters are called &ldquo;pastoral&rdquo; because they deal primarily with the life, order, and teaching of local churches, and with the personal formation of those who lead them." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Ephesus was one of the most significant cities in the Roman world &mdash; a major port city in Asia Minor, home to the Temple of Artemis (one of the Seven Wonders of the Ancient World), a center of commerce, philosophy, and religious syncretism. The church there had been founded during Paul&rsquo;s third missionary journey (Acts 19-20) and had already produced some of the most doctrinally rich writing in the New Testament (the letter to the Ephesians, and later the Johannine literature). But it was also a church under theological pressure from within." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The problem Paul addresses in chapter 1 is false teaching &mdash; a blend of Jewish-Christian speculation involving the law (myths and endless genealogies, v.4), combined with a misuse of the law itself (vv.8-10). Timothy&rsquo;s task is to &ldquo;charge certain persons not to teach any different doctrine&rdquo; (v.3). This is not a personality conflict but a gospel issue: the false teachers are promoting speculative controversy rather than what Paul calls &ldquo;the stewardship from God that is by faith&rdquo; (v.4)." }}
              />
            </div>

            {/* Two column: Timothy + The false teachers */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 28 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 16, marginBottom: 12, margin: "0 0 12px" }}>Who Was Timothy?</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Timothy was Paul&rsquo;s most trusted co-worker, mentioned in more of Paul&rsquo;s letters than any other individual. He was from Lystra (Acts 16:1-3), the son of a Jewish mother (Eunice) and Greek father. He joined Paul&rsquo;s missionary team on the second journey and served as Paul&rsquo;s representative and delegate in multiple difficult situations (Corinth, Thessalonica, Ephesus). Paul&rsquo;s letters to Timothy reveal a young leader who was apparently prone to timidity (1 Tim 4:12, 2 Tim 1:7-8) and who needed both encouragement and clear instruction to navigate the complex pastoral challenges he faced." }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <h3 style={{ color: ROSE, fontWeight: 800, fontSize: 16, marginBottom: 12, margin: "0 0 12px" }}>The False Teachers</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Paul identifies Hymenaeus and Alexander by name in verse 20 as those who have &ldquo;made shipwreck of their faith.&rdquo; The broader group of false teachers (v.3, &ldquo;certain persons&rdquo;) are not outsiders but insiders who have &ldquo;wandered away&rdquo; (v.6, exetrapasan, literally turned aside off the path) from the goal of genuine instruction. Their error is twofold: they are preoccupied with speculative content (myths and endless genealogies) and they are using the law in a way Paul will correct in vv.8-11. They are theologically active but pastorally destructive." }}
                />
              </div>
            </div>

            {/* Central verse */}
            <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}35`, borderRadius: 14, padding: 28, marginBottom: 28, textAlign: "center" }}>
              <p style={{ color: MUTED, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 12, margin: "0 0 12px" }}>THE TRUSTWORTHY SAYING &mdash; 1 TIMOTHY 1:15</p>
              <p style={{ color: TEXT, fontSize: 20, lineHeight: 1.6, fontStyle: "italic", margin: "0 0 10px" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;The saying is trustworthy and deserving of full acceptance, that Christ Jesus came into the world to save sinners, of whom I am the foremost.&rdquo;" }}
              />
              <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>ESV</p>
            </div>

            {/* Structure overview */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 28 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 20, marginBottom: 20, margin: "0 0 20px" }}>Structure of the Chapter</h2>
              {[
                { ref: "vv. 1-2", title: "Greeting: Apostle by Command", color: TEAL, desc: "A standard Pauline greeting, but with theological weight: Paul is an apostle &ldquo;by command of God our Savior and of Christ Jesus our hope.&rdquo; This is not a title Paul assumed; it is a commission he received. Timothy is called his &ldquo;true child in the faith&rdquo; &mdash; language of deep pastoral affection and spiritual parenthood." },
                { ref: "vv. 3-7", title: "The Charge to Timothy: Guard Sound Doctrine", color: PURPLE, desc: "Paul states Timothy&rsquo;s task at Ephesus directly: charge certain persons to stop teaching different doctrine. The goal of instruction is not theological accuracy for its own sake but &ldquo;love that issues from a pure heart and a good conscience and a sincere faith&rdquo; (v.5). The false teachers have missed this goal and swerved into &ldquo;vain discussion.&rdquo;" },
                { ref: "vv. 8-11", title: "The Law: Good When Used Lawfully", color: GOLD, desc: "Paul corrects the misuse of the law without rejecting the law itself. The law is good &mdash; when used for its proper purpose: exposing and convicting those who are lawless and disobedient. The law is not for the righteous (those already justified) but for those who have not yet been confronted with their sinfulness. The standard is the &ldquo;gospel of the glory of the blessed God.&rdquo;" },
                { ref: "vv. 12-14", title: "Paul&rsquo;s Testimony: Mercy for the Worst", color: ROSE, desc: "Paul&rsquo;s personal testimony: formerly a blasphemer, persecutor, and insolent opponent. He received mercy because he had acted ignorantly in unbelief &mdash; and the grace of the Lord overflowed. This is not excuse but explanation: ignorance did not make Paul innocent, but it opened the way for mercy rather than judgment." },
                { ref: "vv. 15-17", title: "The Trustworthy Saying: Christ Saves Sinners", color: PURPLE, desc: "One of five &ldquo;trustworthy saying&rdquo; formulas in the Pastoral Epistles, this one contains the core of the gospel: Christ Jesus came into the world to save sinners. Paul applies it to himself personally: he is the foremost of sinners, and the purpose of mercy shown to him is to display &ldquo;perfect patience&rdquo; as an example for all who would believe." },
                { ref: "vv. 18-20", title: "The Charge Entrusted: Wage the Good Warfare", color: GREEN, desc: "Paul entrusts the charge to Timothy, grounding it in the prophetic words that accompanied his calling. The metaphor shifts to warfare: Timothy is to &ldquo;wage the good warfare&rdquo; with faith and a good conscience. Two who have shipwrecked their faith serve as warning examples. The chapter ends as it began: with the gravity of the gospel trust." },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: i < 5 ? 20 : 0, alignItems: "flex-start" }}>
                  <div style={{ background: `${s.color}18`, border: `1px solid ${s.color}40`, borderRadius: 8, padding: "6px 12px", whiteSpace: "nowrap", flexShrink: 0 }}>
                    <span style={{ color: s.color, fontWeight: 700, fontSize: 13 }}>{s.ref}</span>
                  </div>
                  <div>
                    <h4 style={{ color: s.color, fontWeight: 700, fontSize: 15, marginBottom: 6, margin: "0 0 6px" }}
                      dangerouslySetInnerHTML={{ __html: s.title }}
                    />
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: s.desc }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Historical context */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 20, marginBottom: 16, margin: "0 0 16px" }}>Why This Chapter Matters</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "First Timothy 1 is foundational for understanding what Christian teaching is for. Paul&rsquo;s statement in verse 5 &mdash; &ldquo;the goal of our instruction is love that issues from a pure heart and a good conscience and a sincere faith&rdquo; &mdash; is one of the most important sentences in the New Testament about the purpose of Christian doctrine. Doctrine is not an end in itself; it is in service of love. Teaching that generates controversy without generating love has missed the point, however theologically sophisticated it may be." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The testimony in verses 12-17 is equally significant. It is not merely a biographical note about Paul but a theological exhibit: the grace that reached him &mdash; former blasphemer, persecutor, insolent opponent &mdash; is the same grace that is available to every sinner who believes. Paul presents himself as &ldquo;the foremost&rdquo; of sinners not to dramatize his past but to maximize the gospel&rsquo;s reach: if mercy found him, it can find anyone. This is the logic of testimony: the greater the sin, the greater the demonstration of grace." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The section on the law (vv.8-11) addresses a perennial challenge: what is the law&rsquo;s role after the coming of Christ? Paul&rsquo;s answer is neither antinomian (the law is obsolete) nor nomistic (the law is the ground of justification). The law is good and has a specific function: it diagnoses sin and exposes lawlessness so that sinners know their need of the gospel. The law and the gospel are not opposites; the law serves the gospel by creating the diagnosis that the gospel answers." }}
              />
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "themes" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "Six major theological themes run through 1 Timothy 1, each with profound implications for the life of the church and the individual believer." }}
            />
            {[
              {
                color: PURPLE,
                title: "The Goal of Instruction Is Love",
                ref: "v. 5",
                body: "Paul&rsquo;s single most important statement about Christian teaching is compressed into verse 5: &ldquo;the goal of our instruction is love that issues from a pure heart and a good conscience and a sincere faith.&rdquo; The Greek word for &ldquo;goal&rdquo; (telos) means the end toward which something is aimed, the outcome that defines the activity. Teaching that does not aim at this three-fold love &mdash; from a pure heart, from a clear conscience, from a genuine faith &mdash; has gone off course, however sophisticated the theology may be. The false teachers at Ephesus are a case study in theological activity that has missed this goal: they are &ldquo;desiring to be teachers of the law, without understanding either what they are saying or the things about which they make confident assertions&rdquo; (v.7). Sound doctrine is not doctrine that is merely accurate; it is doctrine that forms the love, conscience, and faith that Paul describes.",
              },
              {
                color: GOLD,
                title: "The Misuse and Proper Use of the Law",
                ref: "vv. 8-11",
                body: "Paul&rsquo;s treatment of the law in this passage is a compressed but enormously important statement. Three key affirmations: (1) &ldquo;we know that the law is good, if one uses it lawfully&rdquo; &mdash; the law is not the problem; misuse of the law is the problem. (2) The law was laid down for the lawless and disobedient, not for the righteous &mdash; the law functions as a diagnostic and convicting instrument for those who have not yet been confronted with their sin and need. (3) This use of the law is in accord with the gospel of the glory of the blessed God (v.11) &mdash; the law serves the gospel by identifying the need that the gospel answers. The false teachers at Ephesus were using the law wrongly &mdash; probably as a source of speculative material rather than as a mirror that shows sinners their true condition. Paul does not reject the law; he insists on its proper function.",
              },
              {
                color: TEAL,
                title: "The Gospel Entrusted to Paul",
                ref: "vv. 11-12",
                body: "Paul describes the gospel as something &ldquo;with which I have been entrusted&rdquo; (v.11) and thanks Christ Jesus for &ldquo;appointing me to his service&rdquo; (v.12). The language of stewardship and appointment is significant: Paul did not choose the gospel or construct it; he received it as a trust and was assigned to its delivery. This is the foundation of his authority in the letter &mdash; not personal charisma or theological achievement but a commission received from Christ. The specific phrase &ldquo;the gospel of the glory of the blessed God&rdquo; (v.11) is striking: the gospel is the announcement of the glory that belongs to the eternally blessed God, the radiance of his character and purposes made visible in the person and work of Jesus Christ.",
              },
              {
                color: ROSE,
                title: "Paul as Trophy of God&rsquo;s Patience",
                ref: "vv. 13-16",
                body: "Paul&rsquo;s self-description is remarkable in its candor: &ldquo;formerly I was a blasphemer, persecutor, and insolent opponent&rdquo; (v.13). These are not rhetorical exaggerations; they are accurate descriptions of Saul of Tarsus as we meet him in Acts 8-9. He participated in the stoning of Stephen, he dragged Christians from their homes, he tried to compel them to blaspheme, and he voted for their execution. Yet he received mercy. Paul&rsquo;s explanation in verse 16 is theologically essential: &ldquo;I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience, as an example to those who were to believe in him for eternal life.&rdquo; Paul is not the hero of his testimony; God&rsquo;s patience is. The purpose of Paul&rsquo;s life as a former persecutor who received grace is to function as a permanent exhibit of what the gospel can do &mdash; so that no sinner will ever be able to say they are beyond its reach.",
              },
              {
                color: PURPLE,
                title: "The Trustworthy Saying: Christ Came to Save Sinners",
                ref: "v. 15",
                body: "The formula &ldquo;the saying is trustworthy and deserving of full acceptance&rdquo; introduces one of five such sayings in the Pastoral Epistles, and this is perhaps the most theologically central: &ldquo;Christ Jesus came into the world to save sinners.&rdquo; Three elements deserve attention: (1) &ldquo;came into the world&rdquo; &mdash; the incarnation, the fact that Christ entered human history as a participant; (2) &ldquo;to save&rdquo; &mdash; the purpose was rescue, not merely teaching or example; (3) &ldquo;sinners&rdquo; &mdash; the category of the saved is not the virtuous but the guilty. Paul applies this personally and without qualification: &ldquo;of whom I am the foremost.&rdquo; The present tense &ldquo;I am&rdquo; (not &ldquo;I was&rdquo;) reflects Paul&rsquo;s ongoing self-understanding as a sinner saved by grace, not a saint who has left sin behind.",
              },
              {
                color: GREEN,
                title: "Waging the Good Warfare",
                ref: "vv. 18-20",
                body: "Paul closes the chapter with a military metaphor: Timothy is to &ldquo;wage the good warfare&rdquo; (v.18). The language of warfare in Paul&rsquo;s letters is not aggressive or triumphalist; it is descriptive of the genuine conflict involved in faithful ministry. The weapons are not worldly &mdash; the warfare is fought with faith and a good conscience (v.19). The warning examples of Hymenaeus and Alexander are sobering: they had faith and conscience, and they rejected them, making &ldquo;shipwreck of their faith.&rdquo; The image of a shipwreck is violent and final-sounding: a ship does not quietly drift; it crashes and breaks. This is what Paul says can happen when faith and conscience are rejected in favor of false teaching. The good warfare is fought internally as much as externally: keeping faith and a good conscience is the front line of faithful ministry.",
              },
            ].map((theme, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${theme.color}30`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ background: `${theme.color}18`, border: `1px solid ${theme.color}50`, borderRadius: 8, padding: "4px 12px" }}>
                    <span style={{ color: theme.color, fontWeight: 700, fontSize: 12 }}>{theme.ref}</span>
                  </div>
                  <h3 style={{ color: theme.color, fontWeight: 800, fontSize: 18, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: theme.title }}
                  />
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: theme.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "versebyverse" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "A verse-by-verse exposition of 1 Timothy 1, attending to the Greek text, the context of the Pastoral Epistles, and the theological weight of each section." }}
            />
            {[
              {
                ref: "vv. 1-2",
                heading: "Greeting &mdash; Apostle by Command of God Our Savior",
                color: TEAL,
                verses: [
                  {
                    v: "vv. 1-2",
                    text: "Paul, an apostle of Christ Jesus by command of God our Savior and of Christ Jesus our hope, To Timothy, my true child in the faith: Grace, mercy, and peace from God the Father and Christ Jesus our Lord.",
                    comment: "The greeting establishes Paul&rsquo;s authority from the outset. He is an apostle not by self-appointment or community recognition but &ldquo;by command&rdquo; (kat&rsquo; epitagen, by commandment). The description of God as &ldquo;our Savior&rdquo; and Christ Jesus as &ldquo;our hope&rdquo; is theologically loaded &mdash; these are not decorative titles but essential descriptions of who God and Christ are in relation to the people they have rescued. The Pastoral Epistles alone in the Pauline corpus add &ldquo;mercy&rdquo; to the standard &ldquo;grace and peace&rdquo; greeting, perhaps reflecting the heightened pastoral awareness of these letters. Timothy as &ldquo;my true child in the faith&rdquo; (gnesio tekno) emphasizes genuine, not merely formal, spiritual relationship.",
                  },
                ],
              },
              {
                ref: "vv. 3-7",
                heading: "Charge Timothy &mdash; The Goal of Instruction Is Love",
                color: PURPLE,
                verses: [
                  {
                    v: "vv. 3-4",
                    text: "As I urged you when I was going to Macedonia, remain at Ephesus so that you may charge certain persons not to teach any different doctrine, nor to devote themselves to myths and endless genealogies, which promote speculations rather than the stewardship from God that is by faith.",
                    comment: "The immediate pastoral context: Paul has left Ephesus and needs Timothy to stay and address the false teachers. The problem is not simply that the false teachers are wrong but that they are promoting &ldquo;speculations&rdquo; (zeteseis, controversies, debates) rather than &ldquo;the stewardship from God that is by faith&rdquo; (oikonomia theou en pistei, God&rsquo;s ordering or administration apprehended by faith). The myths and genealogies likely refer to Jewish-Christian elaboration of Old Testament narratives into speculative systems &mdash; the kind of exegetical activity that generates theological sophistication without spiritual edification.",
                  },
                  {
                    v: "v.5",
                    text: "The goal of our instruction is love that issues from a pure heart and a good conscience and a sincere faith.",
                    comment: "One of the most important verses in the Pastoral Epistles &mdash; a comprehensive statement of what Christian teaching is aimed at producing. Love (agape) is the goal; pure heart, good conscience, and sincere faith are its sources. The heart (kardia) is the seat of intention and will; a pure heart is one with undivided allegiance to God. Conscience (syneidesis) is the moral faculty that evaluates actions in light of what one knows; a good conscience is one that is not suppressing or denying moral knowledge. Sincere faith (anupokritos pistis) is unhypocritical, real faith &mdash; not performance but genuine trust.",
                  },
                  {
                    v: "vv. 6-7",
                    text: "Certain persons, by swerving from these, have wandered away into vain discussion, desiring to be teachers of the law, without understanding either what they are saying or the things about which they make confident assertions.",
                    comment: "The false teachers have &ldquo;swerved&rdquo; (astochesantes, missed the mark) from the pure heart, good conscience, and sincere faith that produce love, and wandered into &ldquo;vain discussion&rdquo; (mataiologia, empty talk). The indictment is devastating: they want to be teachers of the law but &ldquo;without understanding.&rdquo; Their confident assertions are ungrounded. This is the pastoral danger of theology-as-performance: it generates authoritative-sounding speech that is disconnected from genuine understanding and genuine love.",
                  },
                ],
              },
              {
                ref: "vv. 8-11",
                heading: "The Law Is Good When Used Lawfully",
                color: GOLD,
                verses: [
                  {
                    v: "v.8",
                    text: "Now we know that the law is good, if one uses it lawfully.",
                    comment: "Paul affirms the law against any antinomian misreading: the law is good (kalos, beautiful, fitting). But its goodness depends on being used as it was intended &mdash; &ldquo;lawfully&rdquo; (nomimos, in accordance with its purpose). The play on &ldquo;law&rdquo; and &ldquo;lawfully&rdquo; is deliberate: one must use the law according to the law&rsquo;s own purpose. This verse sits at the center of Paul&rsquo;s theology of the law: the law is not abolished or irrelevant; it is for a specific, God-given purpose that the false teachers are missing.",
                  },
                  {
                    v: "vv. 9-10",
                    text: "understanding this, that the law is not laid down for the just but for the lawless and disobedient, for the ungodly and sinners, for the unholy and profane, for those who strike their fathers and mothers, for murderers, the sexually immoral, men who practice homosexuality, enslavers, liars, perjurers, and whatever else is contrary to sound doctrine,",
                    comment: "The list of those for whom the law is laid down is striking: it follows roughly the order of the Ten Commandments and covers comprehensive categories of moral violation. The law&rsquo;s diagnostic function is to expose and confront those who are living in open rebellion against God&rsquo;s created order. It is not for those who are &ldquo;just&rdquo; (dikaios, righteous) &mdash; that is, those who have already been confronted with their sin and have received justification. The law is the instrument of conviction that precedes the grace of the gospel. The phrase &ldquo;contrary to sound doctrine&rdquo; (hygiainouse didaskalia) introduces a key term in the Pastoral Epistles: sound doctrine, literally &ldquo;healthy teaching,&rdquo; is doctrine that produces moral and spiritual health.",
                  },
                  {
                    v: "v.11",
                    text: "in accordance with the gospel of the glory of the blessed God with which I have been entrusted.",
                    comment: "The law&rsquo;s proper use is validated by its harmony with the gospel. The gospel is described as &ldquo;the gospel of the glory of the blessed God&rdquo; &mdash; perhaps the most exalted description of the gospel in Paul&rsquo;s letters. It is the gospel that announces and displays the glory that belongs to the eternally blessed, self-sufficient God. And Paul has been entrusted with it: the verb pisteuo in its passive form carries the weight of stewardship and accountability.",
                  },
                ],
              },
              {
                ref: "vv. 12-14",
                heading: "Mercy for the Blasphemer, Persecutor, and Insolent Opponent",
                color: ROSE,
                verses: [
                  {
                    v: "v.12",
                    text: "I thank him who has given me strength, Christ Jesus our Lord, because he judged me faithful, appointing me to his service,",
                    comment: "The gratitude is not for the position but for the strength: Paul thanks Christ for &ldquo;giving me strength&rdquo; (endunamosanti, empowering me). The one who appointed Paul to service also supplies the capacity for it. Christ judged Paul &ldquo;faithful&rdquo; (pistos) not on the basis of Paul&rsquo;s track record (his track record was persecution) but on the basis of what Christ himself would make him. This is a profound statement about divine calling: it does not wait for the called person to be ready.",
                  },
                  {
                    v: "v.13",
                    text: "though formerly I was a blasphemer, persecutor, and insolent opponent. But I received mercy because I had acted ignorantly in unbelief,",
                    comment: "Paul&rsquo;s three-fold self-description is carefully chosen: blasphemer (blasphemos, one who speaks against God or Christ), persecutor (dioktes, one who drives out or hunts down), insolent opponent (hybristeis, one who treats others with violent contempt &mdash; this is the word for hubris). The qualifier &ldquo;ignorantly in unbelief&rdquo; does not excuse but explains: Paul was not committing what Hebrews calls the willful sin of apostasy (sinning against full knowledge) but was sinning under the genuine misapprehension that he was serving God by destroying the church. This opened the door to mercy rather than judgment.",
                  },
                  {
                    v: "v.14",
                    text: "and the grace of our Lord overflowed for me with the faith and love that are in Christ Jesus.",
                    comment: "The language of overflow (hyperepleonasen, to overflow beyond measure, to super-abound) is striking. Grace did not trickle to Paul; it overwhelmed him. The gifts that accompanied the overflow &mdash; faith and love &mdash; are specifically those that are &ldquo;in Christ Jesus,&rdquo; not qualities Paul produced but realities that are located in Christ and distributed to those who are united to him. Faith to trust and love to serve: these are the fruits of grace, not its conditions.",
                  },
                ],
              },
              {
                ref: "vv. 15-17",
                heading: "The Trustworthy Saying and the Doxology",
                color: PURPLE,
                verses: [
                  {
                    v: "v.15",
                    text: "The saying is trustworthy and deserving of full acceptance, that Christ Jesus came into the world to save sinners, of whom I am the foremost.",
                    comment: "The &ldquo;trustworthy saying&rdquo; formula (pistos ho logos) appears five times in the Pastoral Epistles as a marker of a recognized, authoritative gospel statement. This one has the structure of a creedal proclamation: it is not Paul&rsquo;s private reflection but a shared Christian confession. &ldquo;Came into the world&rdquo; implies a prior existence and a deliberate entry &mdash; the incarnation as purposeful act. &ldquo;To save sinners&rdquo; states the mission without qualification. &ldquo;Of whom I am the foremost&rdquo; &mdash; note the present tense, not &ldquo;was.&rdquo; Paul does not recategorize himself after conversion; he remains a sinner saved by grace, and the ongoing present tense is the theological bedrock of Christian humility.",
                  },
                  {
                    v: "v.16",
                    text: "But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience, as an example to those who were to believe in him for eternal life.",
                    comment: "The &ldquo;but&rdquo; turns the apparent problem (why show mercy to the foremost of sinners?) into the theological point. Paul&rsquo;s reception of mercy was purposeful: it was &ldquo;for this reason&rdquo; (pros touto, toward this end) &mdash; the display of &ldquo;perfect patience&rdquo; (pasan makrothymian, the full measure of long-suffering). The word &ldquo;display&rdquo; (endeixetai) means to exhibit, to show as a model. Paul is a permanent exhibit in the gallery of grace. The purpose is explicitly for those who will believe in the future: his story functions as precedent and encouragement that the grace of Christ can reach anyone.",
                  },
                  {
                    v: "v.17",
                    text: "To the King of the ages, immortal, invisible, the only God, be honor and glory forever and ever. Amen.",
                    comment: "The reflection on grace erupts into doxology. Four attributes of God: King of the ages (eternal sovereignty over all of history), immortal (aphtharto, incorruptible, beyond decay), invisible (aoratos, not perceivable by unaided human senses), only God (monos theos, the exclusive claim against all polytheism). The doxology is not formulaic decoration; it is the natural overflow of a mind that has grasped what grace has done. When the gospel is rightly understood &mdash; the eternal, invisible, immortal, only God condescending to save the foremost of sinners &mdash; the only fitting response is praise.",
                  },
                ],
              },
              {
                ref: "vv. 18-20",
                heading: "The Charge Entrusted: Wage the Good Warfare",
                color: GREEN,
                verses: [
                  {
                    v: "v.18",
                    text: "This charge I entrust to you, Timothy, my child, in accordance with the prophecies previously made about you, that by them you may wage the good warfare,",
                    comment: "Paul returns to the charge of verse 3 and makes it formal: he entrusts (paratithemi, to deposit as a trust) it to Timothy. The grounding in prophecy is significant: Timothy&rsquo;s calling was not self-generated but spoken over him by the prophetic community. These prophetic words now become a resource for his warfare &mdash; &ldquo;by them you may wage the good warfare.&rdquo; The ministry is a battle, and Timothy&rsquo;s assurance of calling is a weapon in that battle.",
                  },
                  {
                    v: "v.19",
                    text: "holding faith and a good conscience. By rejecting this, some have made shipwreck of their faith,",
                    comment: "The means of waging good warfare: holding faith and a good conscience. These are not separate items but a unified pair &mdash; genuine trust in Christ combined with the moral integrity that keeps that trust honest. The warning is stark and personal: &ldquo;some have made shipwreck of their faith&rdquo; by rejecting precisely these. Shipwreck (naugeo, to suffer shipwreck) is a violent image &mdash; not gradual drift but catastrophic destruction. The cause is rejection (apotheomai, to push away, thrust aside) of the very things that kept them afloat.",
                  },
                  {
                    v: "v.20",
                    text: "among whom are Hymenaeus and Alexander, whom I have handed over to Satan that they may learn not to blaspheme.",
                    comment: "Paul names names. Hymenaeus appears again in 2 Timothy 2:17-18, where he and Philetus are said to have &ldquo;swerved from the truth, saying that the resurrection has already happened.&rdquo; Alexander may be the coppersmith mentioned in 2 Timothy 4:14. &ldquo;Handed over to Satan&rdquo; is the same language Paul uses in 1 Corinthians 5:5 for the severe discipline of the incestuous man &mdash; a removal from the protective community of the church, with the hope that the experience of the world apart from that protection will bring them to repentance. The stated purpose is remedial: &ldquo;that they may learn not to blaspheme.&rdquo;",
                  },
                ],
              },
            ].map((section, si) => (
              <div key={si} style={{ background: CARD, border: `1px solid ${section.color}30`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ background: `${section.color}18`, border: `1px solid ${section.color}50`, borderRadius: 8, padding: "5px 14px" }}>
                    <span style={{ color: section.color, fontWeight: 700, fontSize: 13 }}>{section.ref}</span>
                  </div>
                  <h3 style={{ color: section.color, fontWeight: 800, fontSize: 18, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: section.heading }}
                  />
                </div>
                {section.verses.map((vv, vi) => (
                  <div key={vi} style={{ marginBottom: vi < section.verses.length - 1 ? 22 : 0, paddingBottom: vi < section.verses.length - 1 ? 22 : 0, borderBottom: vi < section.verses.length - 1 ? `1px solid ${BORDER}` : "none" }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ background: `${section.color}18`, color: section.color, fontWeight: 700, fontSize: 12, padding: "3px 8px", borderRadius: 6, flexShrink: 0 }}>{vv.v}</span>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, fontStyle: "italic", margin: 0, opacity: 0.9 }}
                        dangerouslySetInnerHTML={{ __html: "&ldquo;" + vv.text + "&rdquo;" }}
                      />
                    </div>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 0 2px" }}
                      dangerouslySetInnerHTML={{ __html: vv.comment }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "Four areas of personal and communal application drawn from 1 Timothy 1, with questions for reflection and practical direction for those who teach, lead, and testify." }}
            />
            {[
              {
                color: PURPLE,
                icon: "Doctrine",
                title: "Keeping Sound Doctrine Centered on Love",
                body: "The great danger Paul identifies in the Ephesian church is not heterodoxy per se but theological activity that has become disconnected from love. The false teachers are not necessarily preaching explicit error about the person of Christ; they are generating controversy and speculation that produces heat without light, debate without love. The corrective Paul prescribes is not just better theology but theology in service of love &mdash; &ldquo;love that issues from a pure heart and a good conscience and a sincere faith&rdquo; (v.5). For any teacher, small-group leader, or person who engages in theological discussion, the question is not only &ldquo;Am I theologically accurate?&rdquo; but &ldquo;Is my theological engagement producing love in myself and others, or is it producing pride, controversy, and division?&rdquo;",
                questions: [
                  "Where in your theological life (reading, discussion, social media engagement) is the goal controversy or winning rather than love and edification?",
                  "How would your teaching, preaching, or discussions change if you evaluated them primarily by whether they produced &ldquo;love from a pure heart, a good conscience, and a sincere faith&rdquo;?",
                  "What would it look like for your church&rsquo;s small groups or Bible studies to actively cultivate the connection between theological content and loving community?",
                ],
              },
              {
                color: GOLD,
                icon: "Law",
                title: "The Law&rsquo;s Proper Purpose for Unbelievers",
                body: "Paul&rsquo;s teaching on the law in verses 8-11 has significant implications for evangelism, personal ethics, and pastoral care. The law is not the ground of justification for Christians, but it is God&rsquo;s diagnostic instrument for those who have not yet been confronted with their sin. This means that in evangelism, there is a proper place for using the law to help unbelievers understand their moral condition before God before presenting the gospel as the answer. It also means that Christians who have been justified are no longer under the law as a condemning force &mdash; but that does not make the law irrelevant; it still expresses God&rsquo;s moral character and informs the shape of Christian obedience.",
                questions: [
                  "When sharing the gospel, do you take time to help people understand their moral condition before God &mdash; or do you move immediately to grace without the diagnosis?",
                  "How do you understand the relationship between law and grace in your own life? Are you still unconsciously trying to earn favor by law-keeping, or have you understood that grace precedes and grounds obedience?",
                  "What does &ldquo;sound doctrine&rdquo; (v.10) look like in practice in a small group, a sermon, or a one-on-one conversation?",
                ],
              },
              {
                color: ROSE,
                icon: "Testimony",
                title: "Paul&rsquo;s Testimony as a Model for Sharing Our Own Story",
                body: "Paul&rsquo;s personal testimony in verses 12-17 is a masterclass in gospel-centered personal narrative. He does not minimize his past (blasphemer, persecutor, insolent opponent), he explains the mercy he received (ignorance in unbelief, not apostasy), and he interprets the meaning of his conversion: not his achievement but a display of God&rsquo;s perfect patience. Every Christian has a testimony that follows a similar pattern: a past that demonstrates the need for grace, a moment or process of receiving mercy, and an ongoing life that is evidence of what God can do. Paul&rsquo;s testimony functions as precedent: if grace reached him, it can reach anyone. Your testimony functions the same way in your community.",
                questions: [
                  "How would you describe your own story using Paul&rsquo;s structure: who you were before grace, how you received mercy, and what your life now displays about God&rsquo;s patience?",
                  "Are you tempted to minimize your past (to appear more respectable) or to dramatize it (to appear more interesting)? What would honest, gospel-centered testimony look like?",
                  "Who in your life might be encouraged by hearing your story presented as evidence that God&rsquo;s grace can reach anyone?",
                ],
              },
              {
                color: GREEN,
                icon: "Warfare",
                title: "The Grace That Reaches the Worst Sinners",
                body: "The theological logic of verses 15-16 is among the most important in all of Paul&rsquo;s letters: he received mercy as the foremost of sinners precisely so that his story could function as a permanent exhibit of what grace can do. This has two implications. First, no one is beyond the reach of the gospel &mdash; Paul&rsquo;s case is the worst case, and it was met with &ldquo;perfect patience&rdquo; (the full measure of long-suffering). Second, those who have received grace from the most extreme starting points are, for that reason, the most powerful testimonies to what God can do. The church must resist the tendency to consider some sins or some histories as too bad for grace; Paul explicitly positions himself as the exhibit that disproves this logic.",
                questions: [
                  "Is there someone in your life or community whom you have privately written off as beyond the reach of grace? What does Paul&rsquo;s testimony say about that assessment?",
                  "How does understanding yourself as a recipient of mercy &mdash; not a deserving person who found God &mdash; change the way you relate to people who are far from faith?",
                  "What would it mean for your church to be known as a place where people with the worst histories encounter the perfect patience of Christ?",
                ],
              },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${item.color}30`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ background: `${item.color}18`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "4px 14px" }}>
                    <span style={{ color: item.color, fontWeight: 700, fontSize: 12, letterSpacing: "0.06em" }}>{item.icon.toUpperCase()}</span>
                  </div>
                  <h3 style={{ color: item.color, fontWeight: 800, fontSize: 18, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 18 }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
                <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                  <div style={{ color: item.color, fontWeight: 700, fontSize: 12, letterSpacing: "0.06em", marginBottom: 12 }}>REFLECTION QUESTIONS</div>
                  {item.questions.map((q, qi) => (
                    <div key={qi} style={{ display: "flex", gap: 10, marginBottom: qi < item.questions.length - 1 ? 10 : 0, alignItems: "flex-start" }}>
                      <span style={{ color: item.color, fontWeight: 700, fontSize: 13, flexShrink: 0, marginTop: 2 }}>{qi + 1}.</span>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: q }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Closing doxology */}
            <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}35`, borderRadius: 14, padding: 28, textAlign: "center" }}>
              <p style={{ color: MUTED, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 14, margin: "0 0 14px" }}>1 TIMOTHY 1:17</p>
              <p style={{ color: TEXT, fontSize: 18, lineHeight: 1.7, fontStyle: "italic", margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;To the King of the ages, immortal, invisible, the only God, be honor and glory forever and ever. Amen.&rdquo;" }}
              />
              <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>ESV</p>
            </div>
          </div>
        )}

        {/* VIDEO SECTION - always visible below tabs */}
        <div style={{ marginTop: 56, paddingTop: 48, borderTop: `1px solid ${BORDER}` }}>
          <div style={{ marginBottom: 28 }}>
            <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 24, marginBottom: 8, margin: "0 0 8px" }}>Teaching Videos</h2>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: "Video teachings on 1 Timothy 1 &mdash; exploring sound doctrine, the purpose of the law, Paul&rsquo;s testimony, and the trustworthy saying that Christ Jesus came to save sinners." }}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{item.title}</h4>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>1 Timothy 1 &mdash; The Vine Bible Study</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
