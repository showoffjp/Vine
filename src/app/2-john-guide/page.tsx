"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import VerseRef from "@/components/VerseRef";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB";
const GOLD = "#D97706", TEAL = "#0D9488", ROSE = "#E11D48";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { videoId: "nXgFAp2Iqok", title: "2 John - Walking in Truth and Love" },
  { videoId: "bNEjMFdH0aU", title: "2 John Explained - False Teachers and Hospitality" },
  { videoId: "tL3JVRhLhcI", title: "The Letters of John - Overview" },
  { videoId: "kgymPVH-Ebs", title: "Doctrine and Love in the Epistles of John" },
];

const VERSE_SECTIONS = [
  {
    id: "vj1",
    ref: "2 John 1-3",
    title: "The Elder Greets the Chosen Lady and Her Children",
    color: PURPLE,
    content:
      "The letter opens with a greeting that is both warm and theologically loaded: &lsquo;The elder to the elect lady and her children, whom I love in truth, and not only I, but also all who know the truth&rsquo; (v.1). The author calls himself simply &lsquo;the elder&rsquo; (Greek: ho presbyteros), a title of seniority and established authority in the early church. The phrase does not require us to choose between an office and an age &mdash; John was both an old man and a recognized leader by the time this letter was written, probably from Ephesus near the end of the first century. The recipients are &lsquo;the elect lady and her children&rsquo; (eklekte kyria kai tois teknois autes). Interpreters have long debated whether this refers to a specific Christian woman and her household or is a symbolic address for a local congregation &mdash; the &lsquo;elect lady&rsquo; as the church, her &lsquo;children&rsquo; its members. Both readings are ancient. The closing verse (v.13), which sends greetings from &lsquo;the children of your elect sister,&rsquo; supports the ecclesial reading: two sister-churches exchanging correspondence through their common apostolic patron. Notice how the Greek word for truth (aletheia) appears five times in the first four verses alone. Truth for John is not an abstract proposition but a living reality &mdash; the truth about Jesus Christ &mdash; that dwells in believers and constitutes their shared communion. The benediction in verse 3 names grace, mercy, and peace from both the Father and Jesus Christ the Son, quietly affirming the full deity of Christ before the incarnation controversy erupts later in the letter.",
  },
  {
    id: "vj2",
    ref: "2 John 4-6",
    title: "Walking in Truth and the Command to Love",
    color: GREEN,
    content:
      "Verse 4 is the emotional center of the letter's opening: &lsquo;I rejoiced greatly to find some of your children walking in the truth, just as we were commanded by the Father.&rsquo; The Greek peripatountas (walking) is the standard Johannine and Pauline metaphor for the whole conduct of life. To walk in the truth is not merely to assent to correct doctrine but to let the truth of the gospel shape every step. The pastoral heart behind the phrase &lsquo;I rejoiced greatly&rsquo; (echarein lian) recalls John&rsquo;s declaration in 3 John 4: &lsquo;I have no greater joy than to hear that my children are walking in the truth.&rsquo; John does not take spiritual faithfulness for granted; he treasures it. The slight note of qualification &mdash; &lsquo;some of your children&rsquo; &mdash; may hint gently that not all were doing so, though John does not press the point here. In verse 5, John turns to the love command, being careful to note it is not new: &lsquo;not as though I were writing a new commandment, but the one we have had from the beginning.&rsquo; This deliberate reference to &lsquo;the beginning&rsquo; (ap&rsquo; arches) is a counter-move against false teachers who boasted of progressive new revelation. Against novelty, John insists the church has had what it needs from the start. Verse 6 supplies one of John&rsquo;s characteristic circular definitions: love is walking according to the commandments, and the commandment is to walk in love. The circle is not a vicious one but a virtuous one &mdash; love and obedience are two facets of a single life oriented toward God and neighbour.",
  },
  {
    id: "vj3",
    ref: "2 John 7-9",
    title: "Warning Against the Deceivers Who Deny the Incarnation",
    color: ROSE,
    content:
      "The tone shifts sharply at verse 7: &lsquo;For many deceivers have gone out into the world, those who do not confess the coming of Jesus Christ in the flesh. Such a one is the deceiver and the antichrist.&rsquo; The Greek verb &lsquo;do not confess&rsquo; (me homologountes) is a present participle, suggesting an ongoing, characteristic refusal. What they will not confess is the coming of Jesus Christ in the flesh (erchomenon en sarki). The present participle erchomenon (coming, not simply &lsquo;having come&rsquo;) may emphasize the ongoing, continuing significance of the incarnation, not just its historical occurrence. The error in view is an early proto-Gnostic or Docetic teaching: that Jesus only appeared to be human, that the divine Christ could not truly have taken on material flesh since matter is evil or inferior. John&rsquo;s response is uncompromising: this is the spirit of the deceiver and of the antichrist. The antichrist (antichristos) in John&rsquo;s usage is not a single eschatological figure but a spirit and a category &mdash; anyone who opposes or seeks to replace the real Christ with a counterfeit. To deny the incarnation is not a minor theological adjustment; it destroys the gospel, because a Christ who did not truly take on flesh did not truly suffer, die, and rise for our salvation. Verse 8 issues a warning: &lsquo;Watch yourselves, so that you may not lose what we have worked for, but may win a full reward.&rsquo; The danger is not merely theological error but personal and spiritual loss &mdash; the undoing of what has been built. Verse 9 provides the test: abiding in the teaching of Christ versus &lsquo;going on ahead&rsquo; of it. The false teachers prided themselves on progress, on advancing beyond the simple gospel. John&rsquo;s verdict: to run ahead of the teaching of Christ is to run away from God. To abide (menon) is the Johannine watchword for life in God.",
  },
  {
    id: "vj4",
    ref: "2 John 10-11",
    title: "Refusing Hospitality to False Teachers",
    color: GOLD,
    content:
      "Verse 10 contains one of the most startling instructions in the NT epistles: &lsquo;If anyone comes to you and does not bring this teaching, do not receive him into your house or give him any greeting, for whoever greets him takes part in his wicked works.&rsquo; To modern ears accustomed to hospitality as simple courtesy, this sounds harsh &mdash; even unloving. The key is the first-century setting. The &lsquo;house&rsquo; (oikian) was typically where the congregation met; to receive an itinerant teacher was to give him a platform and to extend the community&rsquo;s public endorsement of his message. The greeting (chairein) John forbids was not ordinary civility to a stranger but the formal welcome that would identify the church with the visitor&rsquo;s teaching. To extend this welcome was to co-sign the deceiver&rsquo;s error and enable its spread to others. This is why John says the one who greets him &lsquo;takes part in his wicked works&rsquo; (koinonei tois ergois autou tois ponerois). The Greek koinonei (shares, participates, has fellowship with) describes a genuine participation in the project. To support the false teacher is to become a stakeholder in the damage he does. This passage must be handled carefully in application. John is not prescribing incivility toward all who disagree, nor is he arming church members with a weapon for every secondary dispute. The deceivers in view had abandoned the gospel itself &mdash; the incarnation of Jesus Christ. The principle applies to those who repudiate the core Christological truth, not to every theological divergence.",
  },
  {
    id: "vj5",
    ref: "2 John 12-13",
    title: "Closing: The Hope of Face-to-Face Fellowship",
    color: TEAL,
    content:
      "After the sharp warnings of the preceding section, the letter closes with warmth: &lsquo;Though I have much to write to you, I would rather not use paper and ink. Instead I hope to come to you and talk face to face, so that our joy may be complete&rsquo; (v.12). The Greek for &lsquo;face to face&rsquo; is stoma pros stoma &mdash; literally &lsquo;mouth to mouth&rsquo; &mdash; an idiom for direct personal encounter. John is aware of the limitations of the letter form. Some things can only be carried by presence. The completeness of joy (he chara hemon pepleromena) that he envisions points to the conviction that genuine Christian fellowship &mdash; sharing the same truth, the same love, the same Lord &mdash; is the context in which joy reaches its fullness. The letter, for all its authority, is a substitute for the personal presence that John longs to restore. The final verse is brief and tender: &lsquo;The children of your elect sister greet you&rsquo; (v.13). A sister congregation, almost certainly in the same Johannine network, sends its love through the elder. The image is quietly beautiful: two communities of faith, separated by geography, bound together by the truth about Jesus and the love that truth requires, exchanging greetings through the hands of their apostolic pastor. So the shortest NT letter ends exactly where it began &mdash; in truth and in love, the inseparable twins of authentic Christianity.",
  },
];

const THEMES = [
  {
    color: PURPLE,
    title: "Aletheia: Truth as the Bond of the Community (vv.1-4)",
    body:
      "The Greek word aletheia (truth) appears five times in the first four verses of 2 John &mdash; a density that signals its foundational importance. For John, truth is not primarily a set of correct propositions to be affirmed but a living reality that &lsquo;abides in us and will be with us forever&rsquo; (v.2). Truth is the substance of Christian fellowship: John loves the elect lady &lsquo;in truth,&rsquo; and so do all who know the truth. The community is constituted by shared knowledge of the truth about Jesus Christ. The practical implication is significant: fellowship that ignores or relativizes truth is not the deep fellowship John has in mind. Genuine Christian community is built on truth held in common, not merely on warmth of feeling or common activity. This does not make truth cold or cerebral &mdash; quite the opposite. In John&rsquo;s understanding, truth and love are not rivals but partners: the same truth that unites the community also commands it to love one another.",
  },
  {
    color: GREEN,
    title: "Agape: Love That Walks in Obedience (vv.5-6)",
    body:
      "John&rsquo;s definition of love in verse 6 is characteristically concrete: &lsquo;this is love, that we walk according to his commandments.&rsquo; Love for John is not a feeling but a practice &mdash; the deliberate, obedient shaping of life around God&rsquo;s commands. The command he highlights is the one &lsquo;from the beginning&rsquo;: love one another. This anchor in &lsquo;the beginning&rsquo; is not nostalgia but apologetics &mdash; a defense against those who claimed to have moved beyond the original gospel to something more advanced. The original gospel, John insists, already contains everything the community needs, including the love commandment that defines its internal life. The circularity of verses 5-6 &mdash; love is keeping the commands, and the command is to love &mdash; reflects the integrated character of Christian ethics: you cannot separate loving God from obeying God or obeying God from loving the neighbour. The circle has no weak link.",
  },
  {
    color: ROSE,
    title: "Antichristos: The Spirit That Denies the Incarnation (v.7)",
    body:
      "The word antichristos (antichrist) appears in the NT only in John&rsquo;s letters. In 1 John he writes of &lsquo;many antichrists&rsquo; who have gone out from the community (2:18-19) and of &lsquo;the spirit of the antichrist&rsquo; (4:3). In 2 John the singular &lsquo;the deceiver and the antichrist&rsquo; gathers these into a single stark identification. The antichrist spirit is defined by a specific denial: the refusal to confess that Jesus Christ has come in the flesh. This is not a personality or a political figure but a theological posture &mdash; the disposition that replaces the real, incarnate, suffering, dying, rising Jesus with a counterfeit. The test of the antichrist spirit is Christological: what do you do with the incarnation? John gives the community a doctrinal diagnostic that cuts through spiritual claims and charisma to the one question that cannot be fudged: did Jesus Christ truly come in the flesh?",
  },
  {
    color: GOLD,
    title: "Entole: Commandment as the Structure of Love (vv.4-6)",
    body:
      "The Greek word entole (commandment) appears four times in 2 John, which is remarkable for a letter of only thirteen verses. John&rsquo;s use of entole connects this short letter to the deep current of his Gospel and First Epistle: &lsquo;If you love me, you will keep my commandments&rsquo; (John 14:15); &lsquo;whoever keeps his word, in him truly the love of God is perfected&rsquo; (1 John 2:5). The commandment is not an external imposition on a free Christian life but the very structure within which love operates. To love without the commandment is sentiment; the commandment without love is legalism. John&rsquo;s integration of the two &mdash; love is keeping the commandments, and the commandment is to love &mdash; is his version of Jesus&rsquo;s summary of the Law: love God and love neighbour (Matthew 22:37-40). The commandment gives love its shape and direction; love gives the commandment its motive and energy.",
  },
  {
    color: TEAL,
    title: "Philoxenia vs. Discernment: When Not to Be Hospitable (vv.10-11)",
    body:
      "The NT consistently commends philoxenia &mdash; love of strangers, hospitality &mdash; as a Christian virtue (Romans 12:13; Hebrews 13:2; 1 Peter 4:9). The network of itinerant teachers and missionaries that served the early church depended on believers opening their homes. It is against this background that 2 John 10-11 is so striking: there is a category of person to whom Christian hospitality must be refused. The false teacher who denies the incarnation is not simply a guest with different opinions; he is an agent of deception whose ministry, if supported, will harm the flock. John does not command the community to be rude or hostile to such a person; he commands them not to extend the formal endorsement that receiving him into the house-church would represent. This is a limit on hospitality, not a license for unkindness. The discernment required is: what will my welcome communicate, and to whom will it give platform? Love for the community sometimes requires withholding what would, in other circumstances, be an act of love.",
  },
];

export default function TwoJohnGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [truthScore, setTruthScore] = useState(3);
  const [loveScore, setLoveScore] = useState(3);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  function getDiagnosticLabel(t: number, l: number): string {
    if (t >= 4 && l >= 4) return "Walking in truth and love &mdash; the Johannine ideal";
    if (t >= 4 && l < 3) return "Doctrinally strong, relationally cool &mdash; grow in warmth";
    if (t < 3 && l >= 4) return "Warm-hearted, but truth needs to be a higher priority";
    if (t < 3 && l < 3) return "Both need attention &mdash; return to the basics of 2 John";
    return "Growing in both dimensions &mdash; keep walking";
  }

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px 60px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: `${PURPLE}22`, border: `1px solid ${PURPLE}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: PURPLE, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
            General Epistle &middot; 2 John
          </div>
          <h1 style={{ color: TEXT, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, margin: "0 0 12px", lineHeight: 1.2 }}>
            2 John: Walking in Truth and Love, Guarding Against False Teachers
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: "0 0 20px", maxWidth: 680 }}
            dangerouslySetInnerHTML={{ __html: "The shortest book in the New Testament &mdash; just thirteen verses &mdash; packs the entire Johannine program into a single letter: truth and love held together, the command to walk as we have heard from the beginning, a sharp warning against those who deny that Jesus Christ has come in the flesh, and a startling instruction about hospitality. The &ldquo;elder&rdquo; writes to the &ldquo;chosen lady and her children&rdquo; &mdash; almost certainly a house church in John&rsquo;s network &mdash; as a briefer, more personal companion to 1 John." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
            {[
              { label: "Book", value: "2 John", color: PURPLE },
              { label: "Verses", value: "13 (shortest NT book)", color: TEAL },
              { label: "Author", value: "John the Elder/Apostle", color: GOLD },
              { label: "Key Words", value: "Truth / Love / Abide", color: GREEN },
            ].map(item => (
              <div key={item.label} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 10, padding: "12px 14px" }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{item.label}</div>
                <div style={{ color: item.color, fontWeight: 700, fontSize: 14 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 18px",
                borderRadius: 20,
                border: `1px solid ${activeTab === t.id ? PURPLE : BORDER}`,
                background: activeTab === t.id ? `${PURPLE}22` : "transparent",
                color: activeTab === t.id ? PURPLE : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Overview of 2 John</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Second John is the shortest book in the New Testament by verse count (thirteen verses). Written by &ldquo;the elder&rdquo; &mdash; understood by the early church to be the apostle John &mdash; to &ldquo;the elect lady and her children,&rdquo; it functions as a condensed companion to 1 John, hitting the same major notes in briefer, more personal form. The most likely occasion is a report John has received about the community: some are walking faithfully in the truth, but false teachers &mdash; who deny that Jesus Christ has come in the flesh &mdash; have been circulating through the churches and may arrive at this community's door." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The letter divides naturally into four movements: a greeting that establishes the twin pillars of truth and love (vv.1-3); joy at those walking in truth and the recall of the love commandment (vv.4-6); a sharp warning against the Christological deceivers and instructions for how to handle them (vv.7-11); and a warm closing expressing the hope for face-to-face fellowship (vv.12-13). The shape of the letter mirrors the shape of John&rsquo;s theology: you cannot have one without the other &mdash; truth without love becomes cold orthodoxy; love without truth becomes sentimental compromise." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The setting of 2 John in early church history is important. Itinerant teachers were common in the late first century, and the church had not yet developed the institutional structures that would later provide a filter for who could teach and who could not. House churches depended on networks of trust, and welcoming a visiting teacher into your home was effectively to give them a pulpit. John&rsquo;s instruction &mdash; do not receive the one who does not bring the teaching of Christ &mdash; is not anti-hospitality in general but a specific hedge around the congregation&rsquo;s doctrinal integrity at a vulnerable point of access." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Structure of 2 John</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "vv.1-3", label: "Greeting: Truth and Love as the Community's Foundation", color: PURPLE },
                  { ref: "v.4", label: "Joy at Children Walking in Truth", color: GREEN },
                  { ref: "vv.5-6", label: "The Command to Love: From the Beginning", color: TEAL },
                  { ref: "vv.7-9", label: "Warning: Deceivers and the Antichrist Spirit", color: ROSE },
                  { ref: "vv.10-11", label: "Instructions: Do Not Receive the False Teacher", color: GOLD },
                  { ref: "vv.12-13", label: "Closing: Hope for Face-to-Face Fellowship", color: MUTED },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: BG, borderRadius: 10, padding: "12px 14px" }}>
                    <span style={{ background: `${item.color}22`, border: `1px solid ${item.color}44`, borderRadius: 6, padding: "2px 10px", fontSize: 11, color: item.color, fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}>{item.ref}</span>
                    <span style={{ color: TEXT, fontSize: 14 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Key Greek Words in 2 John</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { word: "Aletheia", transliteration: "ah-LEH-thay-ah", meaning: "Truth; the living reality of who Jesus is, dwelling in believers", verse: "vv.1-4 &mdash; appears five times in the opening verses alone", color: PURPLE },
                  { word: "Agape", transliteration: "ah-GAH-pay", meaning: "Unconditional, self-giving love; the distinctive Christian love that flows from truth", verse: "vv.1, 3, 6 &mdash; love and truth are the twin pillars of 2 John", color: GREEN },
                  { word: "Entole", transliteration: "en-toe-LAY", meaning: "Commandment; the structure within which love operates and takes concrete form", verse: "vv.4-6 &mdash; four uses in thirteen verses, defining love as obedience", color: GOLD },
                  { word: "Antichristos", transliteration: "an-TEE-khris-tos", meaning: "Antichrist; the spirit or person who opposes or counterfeits Christ by denying his incarnation", verse: "v.7 &mdash; the test: does he confess Jesus Christ come in the flesh?", color: ROSE },
                  { word: "Menon", transliteration: "MEN-on", meaning: "Abiding, remaining, dwelling; the Johannine word for life in God through the teaching of Christ", verse: "v.9 &mdash; whoever abides in the teaching has both the Father and the Son", color: TEAL },
                ].map(item => (
                  <div key={item.word} style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${item.color}` }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "baseline", flexWrap: "wrap", marginBottom: 4 }}>
                      <span style={{ color: item.color, fontWeight: 800, fontSize: 16 }}>{item.word}</span>
                      <span style={{ color: MUTED, fontSize: 13, fontStyle: "italic" }}>{item.transliteration}</span>
                    </div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{item.meaning}</div>
                    <div style={{ color: MUTED, fontSize: 13 }} dangerouslySetInnerHTML={{ __html: item.verse }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* THEMES TAB */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes in 2 John</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Despite its brevity, 2 John contains five major theological themes that interlocking with one another and with the broader Johannine corpus. Understanding them together &mdash; rather than as isolated commands &mdash; is essential to reading the letter with full comprehension." }}
              />
            </div>
            {THEMES.map(theme => (
              <div key={theme.title} style={{ background: CARD, border: `1px solid ${theme.color}44`, borderRadius: 14, padding: 24, marginBottom: 16 }}>
                <h3 style={{ color: theme.color, fontWeight: 800, fontSize: 17, margin: "0 0 12px" }}>{theme.title}</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: theme.body }}
                />
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 8 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Truth and Love: Partners, Not Rivals</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The central interpretive challenge of 2 John is holding truth and love together. The letter is sometimes read as prioritizing doctrinal defense over relational warmth. But John does not pit them against each other &mdash; he grounds the love in the truth and shows the truth issuing in love. Key verses where the two appear together:" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "v.1", text: "The elder to the elect lady and her children, whom I love in truth.", color: PURPLE },
                  { ref: "v.3", text: "Grace, mercy, and peace will be with us, from God the Father and from Jesus Christ the Father's Son, in truth and love.", color: GREEN },
                  { ref: "v.4", text: "I rejoiced greatly to find some of your children walking in the truth, just as we were commanded by the Father.", color: TEAL },
                  { ref: "v.6", text: "And this is love, that we walk according to his commandments.", color: GOLD },
                ].map(item => (
                  <div key={item.ref} style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${item.color}` }}>
                    <div style={{ color: item.color, fontSize: 12, fontWeight: 700, marginBottom: 6 }}>{item.ref}</div>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{item.text}</p>
                  </div>
                ))}
              </div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}
                dangerouslySetInnerHTML={{ __html: "John loves the elect lady &lsquo;in truth&rsquo; (v.1). The benediction offers grace, mercy, and peace &lsquo;in truth and love&rsquo; (v.3). He rejoices at children walking in truth. Love is defined as walking in obedience (v.6). Truth and love are so interwoven in John&rsquo;s theology that you cannot separate them without destroying both." }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse: 2 John 1-13</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "All thirteen verses of 2 John are grouped below by thematic unit. Each accordion section provides detailed commentary on the Greek text, the theological argument, and the connection to the broader NT canon and the Johannine letters. Click any section to expand." }}
              />
            </div>

            {VERSE_SECTIONS.map(section => (
              <div
                key={section.id}
                style={{ background: CARD, border: `1px solid ${openSection === section.id ? section.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden", transition: "border-color 0.15s" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ background: `${section.color}22`, border: `1px solid ${section.color}44`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: section.color, fontWeight: 700, whiteSpace: "nowrap" }}>
                      {section.ref}
                    </span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{section.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18, marginLeft: 12, flexShrink: 0 }}>{openSection === section.id ? "-" : "+"}</span>
                </button>
                {openSection === section.id && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginTop: 16 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 17, margin: "0 0 14px" }}>Key Verse References</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["2 John 1:1", "2 John 1:4", "2 John 1:5", "2 John 1:6", "2 John 1:7", "2 John 1:8", "2 John 1:9", "2 John 1:10", "2 John 1:12"].map(ref => (
                  <VerseRef key={ref} reference={ref} inline={false} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Application: Walking in Truth and Love</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The central question 2 John presses on every reader is this: can I hold truth and love together the way John does? The easy errors are to let one collapse into the other &mdash; to pursue doctrinal faithfulness at the cost of warmth and relationship, or to cultivate relational warmth at the cost of doctrinal conviction. John refuses both exits. He loves the elect lady &lsquo;in truth,&rsquo; and the truth he defends always issues in love for those who hold it. Second John is not primarily a text about how to handle false teachers; it is primarily a text about what it looks like when truth and love coexist as partners in a healthy community of faith." }}
              />
            </div>

            {[
              {
                color: PURPLE,
                title: "How Do You Hold Truth and Love Together?",
                icon: "01",
                body: "The Johannine synthesis of truth and love is among the most demanding achievements in Christian life. We tend to be better at one than the other. Some communities are theologically precise but relationally brittle &mdash; correct but cold. Others are warm and welcoming but doctrinally vague &mdash; loving in mood but loose about what they believe. John insists that these are not stable equilibria. A community that loses truth loses the foundation of its love (it no longer knows what or who it is loving in God). A community that loses love has already begun to betray the truth, because the truth about Jesus is, at its center, the truth that God so loved the world. The practical first step: examine your own congregation. Which direction does it tend to err? What would it look like to strengthen the weaker dimension without abandoning the stronger one?",
              },
              {
                color: GREEN,
                title: "Guarding Doctrine Without Becoming Cold",
                icon: "02",
                body: "The instruction not to receive the false teacher (vv.10-11) has sometimes been used as a justification for a suspicious, fortress-mentality Christianity that views every outsider as a potential threat. John does not intend this. The false teacher in view had abandoned the gospel itself &mdash; the incarnation of Jesus Christ. This is a high bar, not a license for cutting off every person who disagrees on secondary matters. The community that guards its doctrine well does so out of love for the flock, not out of fear or tribalism. The question is: what are you protecting, and why? If the answer is &lsquo;we are protecting the person of Jesus Christ as the ground of salvation,&rsquo; the protection is Johannine. If the answer is &lsquo;we are protecting our tradition from anyone who might challenge it,&rsquo; something has gone wrong.",
              },
              {
                color: ROSE,
                title: "The Antichrist Test Today: What Do You Do with the Incarnation?",
                icon: "03",
                body: "John&rsquo;s diagnostic &mdash; does this person confess that Jesus Christ has come in the flesh? &mdash; sounds like a first-century question about proto-Gnosticism. But the denial of the full humanity of Christ takes new forms in every generation. In our own time it appears as a therapeutic Jesus who never judges, a cosmic consciousness that transcends the historical person, a social-justice symbol emptied of divine identity, or a &lsquo;spirit of Christ&rsquo; divorced from the Jesus who was born of Mary, died under Pontius Pilate, and rose bodily from the dead. The Johannine test remains current: is the Jesus being presented the real, incarnate, fully human and fully divine Son of God who suffered and rose? Or is it a projection, a metaphor, a spiritual concept? The creedal tradition exists precisely to keep this test sharp.",
              },
              {
                color: GOLD,
                title: "What Walking in Truth Looks Like Monday Through Saturday",
                icon: "04",
                body: "John rejoices at children &lsquo;walking in the truth&rsquo; (v.4). The walking metaphor &mdash; peripatountas in Greek &mdash; describes the whole movement of life, not merely Sunday attendance or correct belief. Walking in truth means that the truth about Jesus Christ shapes the practical decisions of ordinary life: how you use money, how you treat colleagues, how you handle conflict, what you say when no one is watching, whether your private life matches your public profession. It means the truth is not merely a possession you hold but a road you travel. The test John applies is not &lsquo;do you know the right answers?&rsquo; but &lsquo;does the truth you profess show up in how you walk?&rsquo;",
              },
              {
                color: TEAL,
                title: "The Joy of Full Fellowship: Why Presence Matters",
                icon: "05",
                body: "John closes by saying he would rather speak face to face than write, &lsquo;so that our joy may be complete&rsquo; (v.12). The letter is not enough; personal presence is the fullness of fellowship. In an age of digital communication, John&rsquo;s longing for physical presence is a counter-cultural word. The early church knew that the community of truth and love is not fully real until it is embodied &mdash; until people who share the same Christ are actually in the same room, eating together, praying together, bearing one another&rsquo;s burdens. The digital church is a supplement to embodied fellowship, not a substitute for it. The completeness of joy John envisions requires presence. Are you investing in the embodied community that makes joy complete?",
              },
            ].map(item => (
              <div key={item.icon} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${item.color}22`, border: `2px solid ${item.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, fontWeight: 800, fontSize: 12, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <h3 style={{ color: item.color, fontWeight: 800, fontSize: 16, margin: "0 0 10px" }}>{item.title}</h3>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Truth and Love Diagnostic */}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 14, padding: 28, marginTop: 8 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, margin: "0 0 8px" }}>Truth and Love Diagnostic</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 24px" }}
                dangerouslySetInnerHTML={{ __html: "John&rsquo;s letter holds truth and love together as two equal and inseparable pillars. Use this simple diagnostic to reflect on where you stand on each axis &mdash; not to grade yourself, but to identify where growth is most needed." }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
                <div>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Truth commitment (1 = low, 5 = high)</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {[1,2,3,4,5].map(n => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setTruthScore(n)}
                        style={{ width: 40, height: 40, borderRadius: 8, border: `2px solid ${truthScore === n ? PURPLE : BORDER}`, background: truthScore === n ? `${PURPLE}33` : BG, color: truthScore === n ? PURPLE : MUTED, fontWeight: 800, fontSize: 15, cursor: "pointer" }}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Love in practice (1 = low, 5 = high)</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {[1,2,3,4,5].map(n => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setLoveScore(n)}
                        style={{ width: 40, height: 40, borderRadius: 8, border: `2px solid ${loveScore === n ? GREEN : BORDER}`, background: loveScore === n ? `${GREEN}33` : BG, color: loveScore === n ? GREEN : MUTED, fontWeight: 800, fontSize: 15, cursor: "pointer" }}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ background: BG, borderRadius: 10, padding: "16px 20px", borderLeft: `4px solid ${PURPLE}` }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Your diagnostic result</div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: getDiagnosticLabel(truthScore, loveScore) }} />
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 16 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "John rejoices &lsquo;greatly&rsquo; when he hears of children walking in the truth (v.4). When you hear of someone in your church living out their faith faithfully, is your response joy? What does that say about whether you genuinely want truth to flourish in those around you?",
                  "The love commandment in 2 John is described as &lsquo;from the beginning&rsquo; (vv.5-6). In a culture that prizes novelty and progress, how do you hold onto the original gospel commandment without treating it as mere tradition?",
                  "Verse 9 warns against those who &lsquo;go on ahead&rsquo; of the teaching of Christ. What does &lsquo;going on ahead&rsquo; look like in your context? Are there teachings or spiritual experiences being offered in your church circles that feel like progress beyond the gospel?",
                  "The instruction not to receive false teachers (vv.10-11) requires discernment. How do you distinguish between someone who holds a different secondary view and someone who has genuinely abandoned the gospel? What does that discernment process look like in practice?",
                  "John closes by saying that presence, not correspondence, is what makes joy complete (v.12). In what ways are you substituting digital or remote forms of fellowship for the embodied community that produces full joy?",
                ].map((q, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${PURPLE}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 16 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Teaching Videos</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>
                Video resources for further study and teaching on 2 John.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {videoItems.map(item => (
                  <div key={item.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <div style={{ padding: "12px 16px" }}>
                      <h4 style={{ color: TEXT, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
