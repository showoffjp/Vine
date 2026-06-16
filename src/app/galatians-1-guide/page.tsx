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

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const KEY_THEMES = [
  {
    color: ROSE,
    title: "No Other Gospel -- The Double Anathema",
    body: "Paul opens Galatians 1 with a declaration that strikes like lightning: if anyone preaches a gospel different from the one he preached, &ldquo;let him be accursed&rdquo; (anathema, v.8). Remarkably, Paul repeats the curse in verse 9 -- not for rhetorical effect alone but because the stakes are that high. Even if &ldquo;an angel from heaven&rdquo; brought a different message, the anathema stands. The gospel of grace is not one option among many; it is the singular good news on which every soul depends. Adding any human work as a requirement of salvation does not supplement the gospel -- it destroys it entirely.",
  },
  {
    color: GOLD,
    title: "Apostleship by Direct Revelation -- Not Human Authority",
    body: "A key polemical move in Galatians 1 is Paul&rsquo;s insistence that his apostleship came &ldquo;not from men nor through man, but through Jesus Christ and God the Father&rdquo; (v.1). The Judaizers had apparently questioned his credentials -- suggesting he was a derivative apostle who depended on Jerusalem for authority. Paul dismantles this: his gospel was received &ldquo;through a revelation of Jesus Christ&rdquo; (v.12), not taught by any human teacher. He did not go up to Jerusalem immediately after his conversion; he went to Arabia, then Damascus. Only three years later did he visit Peter -- and for only fifteen days. His commission is divine, not ecclesiastical.",
  },
  {
    color: PURPLE,
    title: "Man-Pleasing as the Enemy of Authentic Ministry",
    body: "Verse 10 is one of the most searching verses in the Pauline corpus: &ldquo;For am I now seeking the approval of man, or of God? Or am I trying to please man? If I were still trying to please man, I would not be a servant of Christ.&rdquo; Paul frames man-pleasing and Christ-serving as mutually exclusive. The pressure the Judaizers were exerting on the Galatian churches was fundamentally social: conform, fit in, satisfy the cultural expectations of Jewish identity markers. Paul refuses. The servant of Christ must be oriented entirely toward divine approval -- not indifferent to people, but not governed by their approval either.",
  },
  {
    color: TEAL,
    title: "Grace as the Foundation of Calling",
    body: "In verses 15-16, Paul describes his own conversion in striking terms borrowed from the prophets: God &ldquo;set me apart before I was born&rdquo; and &ldquo;called me by his grace.&rdquo; The language echoes Jeremiah 1:5 and Isaiah 49:1 -- Paul sees himself as a prophet-like figure whose calling preceded his own existence. This is not pride but humility: his ministry did not originate in his own choice, zeal, or worthiness. He had been a violent persecutor of the church (v.13). That God would call such a person is itself a demonstration of grace -- and a preview of the theology he is about to defend.",
  },
  {
    color: GREEN,
    title: "The Dramatic Reversal -- Persecutor to Preacher",
    body: "One of the most powerful elements of Galatians 1 is the biographical testimony of Paul&rsquo;s conversion (vv.13-17, 23-24). He was not merely indifferent to Christianity -- he &ldquo;was advancing in Judaism beyond many of my own age among my people, so extremely zealous was I for the traditions of my fathers&rdquo; (v.14). He had been &ldquo;trying to destroy&rdquo; the church. The contrast with his subsequent preaching of the faith is so dramatic that the churches of Judea, who had never met him, were &ldquo;glorifying God because of me&rdquo; (v.24). The transformed persecutor is itself an argument for the power of the gospel.",
  },
];

const VERSE_SECTIONS = [
  {
    ref: "Galatians 1:1-5 -- The Greeting",
    color: GOLD,
    content: "Paul opens with an apostolic greeting that is already theologically loaded. He identifies himself as &ldquo;an apostle -- not from men nor through man, but through Jesus Christ and God the Father, who raised him from the dead.&rdquo; The resurrection of Christ is embedded in the very first sentence, because it is the resurrection that constitutes Jesus as Lord and validates Paul&rsquo;s encounter with him on the Damascus road. The greeting of &ldquo;grace and peace&rdquo; is the standard Pauline opening -- but these are not mere pleasantries. Grace (charis) is the undeserved favor of God; peace (eirene) is the shalom of right relationship with God. Both are given &ldquo;from God our Father and the Lord Jesus Christ&rdquo; -- the two sources are named together, implying the deity of Christ. Verse 4 states the purpose of Christ&rsquo;s death with precision: &ldquo;who gave himself for our sins to deliver us from the present evil age.&rdquo; The self-giving is voluntary; the purpose is rescue from a corrupt age-order; the agent is Christ himself. This is substitutionary, liberating, and eschatological all at once.",
  },
  {
    ref: "Galatians 1:6-9 -- The Astonishment and the Anathema",
    color: ROSE,
    content: "Paul&rsquo;s alarm is immediate and striking. He foregoes the customary thanksgiving (present in all his other letters) and launches straight into rebuke: &ldquo;I am astonished that you are so quickly deserting him who called you in the grace of Christ and are turning to a different gospel.&rdquo; Three elements deserve attention. First, the defection is described as deserting not a doctrine but a person -- &ldquo;him who called you.&rdquo; Theological error is always relational at root; it is a turning away from the calling God himself. Second, what the Judaizers offer is called &ldquo;a different gospel&rdquo; -- but Paul immediately qualifies: it is &ldquo;not that there is another one&rdquo; (v.7). There is only one gospel; what is being offered is a counterfeit, a perversion. Third, the double anathema (vv.8-9) is deliberately extreme. Even the hypothetical case of Paul himself or an angel from heaven preaching a different gospel earns the curse. The gospel cannot be improved, supplemented, or accommodated. Any addition is a subtraction -- because if faith plus works saves, then faith alone in Christ is insufficient, and Christ&rsquo;s death was unnecessary.",
  },
  {
    ref: "Galatians 1:10 -- Man-Pleasing vs. Serving Christ",
    color: PURPLE,
    content: "Verse 10 functions as a hinge -- the harshness of the anathema might have seemed calculated to win approval from one side, so Paul addresses the charge directly: &ldquo;For am I now seeking the approval of man, or of God? Or am I trying to please man? If I were still trying to please man, I would not be a servant of Christ.&rdquo; The word &ldquo;now&rdquo; may carry temporal weight -- in his former life as a Pharisee, Paul was very much oriented toward peer approval within Judaism. The radical transformation of his conversion included a reorientation of his fundamental audience. A doulos (slave/servant) of Christ takes orders from one master only. The Galatian crisis was partly created by the social pressure of the Judaizers -- circumcision would make the Gentile converts more acceptable to the Jewish community. Paul refuses the social calculus entirely. Ministry shaped by the desire for human approval will inevitably compromise the message.",
  },
  {
    ref: "Galatians 1:11-12 -- The Divine Origin of the Gospel",
    color: TEAL,
    content: "Paul states his thesis with maximum clarity: &ldquo;For I would have you know, brothers, that the gospel that was preached by me is not man&rsquo;s gospel. For I did not receive it from any man, nor was I taught it, but I received it through a revelation of Jesus Christ.&rdquo; The double negative is emphatic: not received, not taught -- two different channels of human transmission are excluded. The Greek word for &ldquo;revelation&rdquo; is apokalypsis -- an unveiling, a disclosure from beyond the human. This matters for the entire argument of the letter: if Paul&rsquo;s gospel is merely a human tradition, then the Judaizers&rsquo; modification might be a legitimate development. But if it is divine revelation, it cannot be altered. The content of the gospel and the source of Paul&rsquo;s apostolic authority are bound together: both came from Christ directly, which means both carry his authority and neither can be overridden by Jerusalem, by tradition, or by social pressure.",
  },
  {
    ref: "Galatians 1:13-17 -- Paul&rsquo;s Former Life and Conversion",
    color: GREEN,
    content: "Paul provides a compressed autobiography: his former conduct in Judaism -- &ldquo;I was advancing in Judaism beyond many of my own age among my people, so extremely zealous was I for the traditions of my fathers&rdquo; (v.14). The intensity of his former zeal makes the transformation all the more striking. He was not a half-hearted opponent of Christianity; he &ldquo;was trying to destroy&rdquo; the church (v.13). Then the pivot: &ldquo;But when he who had set me apart before I was born, and who called me by his grace, was pleased to reveal his Son to me&rdquo; (vv.15-16). God&rsquo;s sovereign initiative precedes Paul&rsquo;s response entirely -- he was set apart before birth, called by grace, and the Son was revealed &ldquo;to me&rdquo; (literally &ldquo;in me&rdquo; -- the revelation was interior as well as external). The purpose: &ldquo;in order that I might preach him among the Gentiles.&rdquo; After this, Paul did not go to Jerusalem for apostolic validation: he went to Arabia (likely for reflection and prayer in the wilderness) and then returned to Damascus. The independence from Jerusalem is not stubbornness -- it is the natural consequence of receiving the gospel directly from its Author.",
  },
  {
    ref: "Galatians 1:18-24 -- The Visit to Jerusalem and the Response of the Churches",
    color: GOLD,
    content: "Three years after his conversion, Paul went up to Jerusalem &ldquo;to visit Cephas&rdquo; -- the Greek word (historesai) suggests an investigative visit, getting acquainted rather than receiving instruction. He stayed fifteen days; he saw no other apostle except James, the Lord&rsquo;s brother. Paul solemnly swears (&ldquo;before God, I do not lie!&rdquo;) that this account is accurate -- the oath indicates that the Judaizers had been spreading a different story about his relationship to Jerusalem, perhaps claiming he had been commissioned by the Jerusalem apostles and was now departing from their teaching. The subsequent section (vv.21-24) describes his movements to Syria and Cilicia, entirely away from the Jerusalem church. The Judean churches knew him only by reputation: &ldquo;He who used to persecute us is now preaching the faith he once tried to destroy.&rdquo; Their response? Not suspicion but worship: &ldquo;And they glorified God because of me.&rdquo; The transformation of the persecutor is itself an occasion for glorifying God.",
  },
];

const APPLICATION_POINTS = [
  {
    color: ROSE,
    title: "Standing Firm on Grace Alone",
    body: "Galatians 1 calls believers to a kind of theological stubbornness -- not the stubbornness of pride but of conviction. The gospel of grace alone, through faith alone, in Christ alone is not a starting point to be left behind as one matures. It is the permanent foundation. The pressure to add human performance -- whether circumcision in Paul&rsquo;s day or any form of religious merit-earning today -- comes from a deep human need to feel that one&rsquo;s standing before God depends on one&rsquo;s own effort. The corrective is not more effort but a deeper grasp of grace: that God called us &ldquo;by his grace&rdquo; (v.15), that Christ &ldquo;gave himself for our sins&rdquo; (v.4), and that nothing we can do improves or secures what he has already accomplished. Theological vigilance is a pastoral duty -- not to be suspicious of everyone but to guard the gospel foundation that everything else is built on.",
  },
  {
    color: GOLD,
    title: "Recognizing Man-Pleasing as a Ministry Threat",
    body: "Paul&rsquo;s verse 10 diagnosis is uncomfortably contemporary. Christian ministers, teachers, and leaders face constant pressure to shape their message around audience approval -- to soften the harder edges of the gospel, to affirm where the culture affirms, to be silent where the culture prefers silence. Paul names this not as a personality flaw but as a fundamental orientation problem: if your audience is human approval, you cannot simultaneously be a servant of Christ. The application is not to be needlessly provocative or unkind. It is to be clear about whose verdict matters. Preaching, teaching, and living shaped by the desire for Christ&rsquo;s approval -- not the crowd&rsquo;s -- will sometimes be socially costly. Paul&rsquo;s entire ministry is an exhibit of this cost, and his entire ministry is an exhibit of its fruit.",
  },
  {
    color: TEAL,
    title: "The Sufficiency of Direct Encounter with Christ",
    body: "Paul&rsquo;s insistence that his gospel came through direct revelation raises a question for contemporary believers: how does the risen Christ speak today? The canon of Scripture is closed -- new apostolic revelations are not expected in the same mode as Paul&rsquo;s Damascus road encounter. But the principle that matters is the sufficiency of Christ himself, mediated now through his Word and Spirit. Just as Paul did not need Jerusalem to validate the revelation he had received, believers do not need additional religious systems, works, or credentials to validate their standing in Christ. The encounter with Christ through the gospel is itself sufficient. This does not make the church or community unnecessary -- but it means that no human authority can add to or subtract from what Christ has already secured.",
  },
  {
    color: GREEN,
    title: "Ministry Not Measured by Human Approval",
    body: "The biographical section of Galatians 1 is not merely historical -- it is pastoral modeling. Paul describes a ministry that was validated by God and despised by the religious establishment simultaneously. His conversion provoked worship among the Judean churches (v.24), but his independence from Jerusalem probably provoked suspicion among the Judaizers. The measure of authentic ministry in Galatians 1 is not how many powerful people approve it, but whether it is aligned with the gospel of grace that comes from Christ. For believers today, the application runs in both directions: evaluate the teachers and messages you receive by the gospel standard (does this preach grace alone?), and evaluate your own motivations for ministry (am I doing this for Christ&rsquo;s approval or the crowd&rsquo;s?).",
  },
  {
    color: PURPLE,
    title: "The Transforming Power of the Gospel as Evidence",
    body: "The churches of Judea who glorified God because of Paul&rsquo;s transformation were responding to the most powerful apologetic available: a life utterly changed by an encounter with Christ. Paul the persecutor became Paul the preacher -- not because of gradual moral improvement, not because of religious education, not because of social pressure, but because &ldquo;God was pleased to reveal his Son&rdquo; to him (v.16). Every believer who has experienced genuine transformation carries this same testimony. The gospel does not merely offer better behavior; it offers a new orientation of the whole person toward God. When the community around us witnesses that transformation and is provoked to glorify God, the evangelistic power of Galatians 1 is still at work.",
  },
];

const videoItems = [
  { videoId: "jOe4BrgCxYg", title: "Galatians 1 -- BibleProject Explanation and Context" },
  { videoId: "vmx4UjRFp0M", title: "The Book of Galatians Overview -- BibleProject" },
  { videoId: "Ej8IG8N8sUc", title: "Paul&rsquo;s Apostleship and the Gospel of Grace -- Teaching" },
  { videoId: "dQw4w9WgXcQ", title: "Galatians 1: No Other Gospel -- Sermon Series" },
];

export default function Galatians1GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openVerse, setOpenVerse] = useState("");

  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #0e0920 0%, #07070F 60%, #0a1a0e 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 16px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ background: `${GOLD}22`, color: GOLD, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: "4px 10px", borderRadius: 4 }}>Bible Study</span>
            <span style={{ color: MUTED, fontSize: 13 }}>&mdash; Galatians Series</span>
          </div>
          <h1 style={{ fontSize: "clamp(24px, 5vw, 40px)", fontWeight: 800, marginBottom: 12, lineHeight: 1.15, letterSpacing: -0.5 }}>
            Galatians 1: <span style={{ color: GOLD }}>No Other Gospel</span>
          </h1>
          <p dangerouslySetInnerHTML={{ __html: "Paul&rsquo;s most impassioned letter opens with a thunderclap &mdash; no pleasantries, no thanksgiving, only urgent alarm. The Galatians are deserting the gospel of grace for a counterfeit. Paul&rsquo;s response is the most concentrated defense of the gospel of grace in all of Scripture." }} style={{ color: MUTED, lineHeight: 1.7, fontSize: 16, maxWidth: 650, marginBottom: 24 }} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              { label: "Galatians 1:1-24", color: GOLD },
              { label: "Grace Alone", color: GREEN },
              { label: "Paul&rsquo;s Apostleship", color: PURPLE },
              { label: "The Double Anathema", color: ROSE },
            ].map((tag) => (
              <span key={tag.label} dangerouslySetInnerHTML={{ __html: tag.label }} style={{ background: `${tag.color}18`, color: tag.color, fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20, border: `1px solid ${tag.color}35` }} />
            ))}
          </div>
        </div>
      </div>

      {/* Intro callout */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px 0" }}>
        <div style={{ background: CARD, border: `1px solid ${GOLD}40`, borderLeft: `4px solid ${GOLD}`, borderRadius: 12, padding: "20px 24px", marginBottom: 28 }}>
          <p dangerouslySetInnerHTML={{ __html: "&ldquo;I am astonished that you are so quickly deserting him who called you in the grace of Christ and are turning to a different gospel &mdash; not that there is another one, but there are some who trouble you and want to distort the gospel of Christ.&rdquo;" }} style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, marginBottom: 6, fontSize: 15 }} />
          <p style={{ color: MUTED, fontSize: 13 }}>Galatians 1:6-7 (ESV)</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 20px",
                borderRadius: 24,
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 600,
                background: activeTab === t.id ? GREEN : CARD,
                color: activeTab === t.id ? "#fff" : MUTED,
                transition: "background 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Introduction to Galatians 1</h2>

            <div style={{ display: "grid", gap: 16, marginBottom: 24 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 10, fontSize: 15 }}>Historical Setting</h3>
                <p dangerouslySetInnerHTML={{ __html: "Galatians is almost certainly Paul&rsquo;s earliest letter, written around AD 48-49, possibly before the Jerusalem Council of Acts 15. He had planted churches in the region of Galatia on his first missionary journey. After his departure, a group of Jewish-Christian teachers &mdash; commonly called Judaizers &mdash; had arrived insisting that Gentile converts must be circumcised and observe the Mosaic law to be fully saved. This was not a peripheral dispute; it struck at the heart of the gospel. Paul writes in a state of urgent alarm, foregoing even the standard thanksgiving he includes in every other letter." }} style={{ color: MUTED, lineHeight: 1.75, fontSize: 14 }} />
              </div>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 10, fontSize: 15 }}>The Structure of Galatians 1</h3>
                <div style={{ display: "grid", gap: 10 }}>
                  {[
                    { ref: "vv. 1-5", label: "Apostolic Greeting -- not from men but from Christ" },
                    { ref: "vv. 6-9", label: "The Crisis -- the double anathema against any other gospel" },
                    { ref: "v. 10", label: "The Hinge -- man-pleasing versus serving Christ" },
                    { ref: "vv. 11-12", label: "The Source -- gospel received by divine revelation" },
                    { ref: "vv. 13-17", label: "Paul&rsquo;s Former Life -- persecutor transformed by grace" },
                    { ref: "vv. 18-24", label: "Paul&rsquo;s Independence from Jerusalem -- visits and movements" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span dangerouslySetInnerHTML={{ __html: item.ref }} style={{ color: GOLD, fontWeight: 700, fontSize: 12, minWidth: 60, paddingTop: 2 }} />
                      <span dangerouslySetInnerHTML={{ __html: item.label }} style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }} />
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 10, fontSize: 15 }}>Why This Chapter Matters</h3>
                <p dangerouslySetInnerHTML={{ __html: "Galatians 1 is not merely the introduction to a letter &mdash; it is a model of theological vigilance. Paul demonstrates that genuine love for people requires guarding the gospel they depend on. The double anathema is not harshness; it is the pastoral instinct of a man who knows that souls hang on whether the gospel of grace is kept pure. Martin Luther called Galatians his &ldquo;Katharina von Bora&rdquo; &mdash; the letter he was married to &mdash; because it was the Reformation battleground for grace alone. Galatians 1 is where that battle is declared." }} style={{ color: MUTED, lineHeight: 1.75, fontSize: 14 }} />
              </div>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12, fontSize: 15 }}>Key Words in Galatians 1</h3>
                <div style={{ display: "grid", gap: 10 }}>
                  {[
                    { word: "Anathema (v.8-9)", def: "Greek: a thing devoted to destruction; a formal curse. Paul invokes it twice to communicate that no compromise with the gospel is permissible." },
                    { word: "Apostolos (v.1)", def: "Sent one -- an authorized messenger. Paul&rsquo;s apostleship came directly from Christ, not through human ordination or delegation." },
                    { word: "Apokalypsis (v.12)", def: "Revelation -- an unveiling from above. Paul&rsquo;s gospel was not deduced, learned, or transmitted; it was revealed by Jesus Christ himself." },
                    { word: "Euangelion (v.6-9)", def: "Gospel -- good news. Used four times in vv.6-9 alone, underscoring that the crisis is about the gospel&rsquo;s content, not peripheral matters." },
                    { word: "Doulos (v.10)", def: "Slave/servant. Paul identifies himself as a slave of Christ -- a person with one master and one governing approval." },
                  ].map((item, i) => (
                    <div key={i} style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: 12 }}>
                      <p style={{ color: TEXT, fontWeight: 700, fontSize: 13, marginBottom: 3 }}>{item.word}</p>
                      <p dangerouslySetInnerHTML={{ __html: item.def }} style={{ color: MUTED, fontSize: 13, lineHeight: 1.5 }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Key Themes Tab */}
        {activeTab === "themes" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Key Themes in Galatians 1</h2>
            <p dangerouslySetInnerHTML={{ __html: "Galatians 1 establishes the theological and personal foundation for everything that follows. These five themes run throughout the chapter and resurface throughout the letter." }} style={{ color: MUTED, marginBottom: 24, lineHeight: 1.6 }} />
            <div style={{ display: "grid", gap: 16 }}>
              {KEY_THEMES.map((theme, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${theme.color}35`, borderLeft: `4px solid ${theme.color}`, borderRadius: 12, padding: 20 }}>
                  <h3 style={{ color: theme.color, fontWeight: 700, marginBottom: 10, fontSize: 15 }}>{theme.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: theme.body }} style={{ color: MUTED, lineHeight: 1.75, fontSize: 14 }} />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginTop: 24 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12, fontSize: 15 }}>Theological Connections</h3>
              <p dangerouslySetInnerHTML={{ __html: "The themes of Galatians 1 connect to the entire Pauline corpus. The &ldquo;no other gospel&rdquo; principle appears in 2 Corinthians 11:4, where Paul warns against &ldquo;another Jesus&rdquo; and &ldquo;a different gospel.&rdquo; The apostleship-by-revelation theme connects to 1 Corinthians 15:8-10, where Paul places his Damascus encounter alongside the resurrection appearances. The man-pleasing warning connects to 1 Thessalonians 2:4: &ldquo;We speak, not to please man, but to please God who tests our hearts.&rdquo; Galatians 1 is not an isolated argument; it is Paul&rsquo;s clearest articulation of principles that govern his entire ministry." }} style={{ color: MUTED, lineHeight: 1.75, fontSize: 14 }} />
            </div>
          </div>
        )}

        {/* Verse by Verse Tab */}
        {activeTab === "verse" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Verse by Verse: Galatians 1</h2>
            <p dangerouslySetInnerHTML={{ __html: "Click each passage to expand the verse-by-verse commentary. Work through each section to build a complete picture of Paul&rsquo;s argument in Galatians 1." }} style={{ color: MUTED, marginBottom: 24, lineHeight: 1.6 }} />
            <div style={{ display: "grid", gap: 12 }}>
              {VERSE_SECTIONS.map((section, i) => {
                const isOpen = openVerse === section.ref;
                return (
                  <div key={i} style={{ background: CARD, border: `1px solid ${isOpen ? section.color + "60" : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.15s" }}>
                    <button
                      onClick={() => setOpenVerse(isOpen ? "" : section.ref)}
                      style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span style={{ width: 10, height: 10, borderRadius: "50%", background: section.color, flexShrink: 0, display: "block" }} />
                        <span dangerouslySetInnerHTML={{ __html: section.ref }} style={{ fontWeight: 700, fontSize: 14 }} />
                      </div>
                      <span style={{ color: MUTED, fontSize: 16, flexShrink: 0 }}>{isOpen ? "^" : "v"}</span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 20px 20px" }}>
                        <div style={{ height: 1, background: `${section.color}30`, marginBottom: 16 }} />
                        <p dangerouslySetInnerHTML={{ __html: section.content }} style={{ color: MUTED, lineHeight: 1.8, fontSize: 14 }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: 20, marginTop: 24 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12, fontSize: 15 }}>The Argument at a Glance</h3>
              <div style={{ display: "grid", gap: 8 }}>
                {[
                  { step: "1", label: "Paul&rsquo;s apostleship is from Christ, not from men (vv.1-5)" },
                  { step: "2", label: "Any deviation from the gospel of grace is a curse-worthy perversion (vv.6-9)" },
                  { step: "3", label: "The true servant of Christ is not governed by human approval (v.10)" },
                  { step: "4", label: "Paul&rsquo;s gospel came by direct revelation &mdash; not human tradition (vv.11-12)" },
                  { step: "5", label: "His transformation from persecutor to preacher demonstrates grace&rsquo;s power (vv.13-17)" },
                  { step: "6", label: "His independence from Jerusalem confirms his divine commissioning (vv.18-24)" },
                ].map((item) => (
                  <div key={item.step} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ width: 22, height: 22, borderRadius: "50%", background: `${GREEN}30`, color: GREEN, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{item.step}</span>
                    <p dangerouslySetInnerHTML={{ __html: item.label }} style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0 }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Application Tab */}
        {activeTab === "application" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Application: Living Galatians 1</h2>
            <p dangerouslySetInnerHTML={{ __html: "Galatians 1 is not merely historical theology &mdash; it is a living challenge to every believer. These five application points draw out the practical force of Paul&rsquo;s argument for contemporary life and ministry." }} style={{ color: MUTED, marginBottom: 24, lineHeight: 1.6 }} />

            <div style={{ display: "grid", gap: 16, marginBottom: 28 }}>
              {APPLICATION_POINTS.map((point, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${point.color}35`, borderLeft: `4px solid ${point.color}`, borderRadius: 12, padding: 20 }}>
                  <h3 style={{ color: point.color, fontWeight: 700, marginBottom: 10, fontSize: 15 }}>{point.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: point.body }} style={{ color: MUTED, lineHeight: 1.75, fontSize: 14 }} />
                </div>
              ))}
            </div>

            <div style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 12, fontSize: 15 }}>Reflection Questions</h3>
              <div style={{ display: "grid", gap: 12 }}>
                {[
                  "Where in your life are you most tempted to add something to faith in Christ as a condition of God&rsquo;s acceptance -- whether moral performance, religious practice, or social approval?",
                  "In what areas of your ministry or witness do you feel the pull of man-pleasing most acutely? What would it look like to serve from the orientation of Christ&rsquo;s approval alone?",
                  "Paul describes his calling as initiated by God &ldquo;before I was born.&rdquo; How does the conviction that God&rsquo;s call precedes your response shape how you understand your own vocation?",
                  "The Judean churches glorified God because of Paul&rsquo;s transformation. Who in your life has been moved to glorify God because of change they have witnessed in you?",
                  "Where do you need the double anathema posture of Galatians 1 -- not personal condemnation of others but a firm refusal to compromise the gospel of grace, regardless of social cost?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ width: 22, height: 22, borderRadius: "50%", background: `${GREEN}25`, color: GREEN, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{i + 1}</span>
                    <p dangerouslySetInnerHTML={{ __html: q }} style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12, fontSize: 15 }}>Suggested Study Practice</h3>
              <p dangerouslySetInnerHTML={{ __html: "Read Galatians 1 aloud in a single sitting &mdash; slowly, attending to the emotional register as well as the theological content. Notice where Paul&rsquo;s tone shifts from alarm (vv.6-9) to personal testimony (vv.13-24). Then read Acts 9:1-31 alongside it &mdash; Luke&rsquo;s account of the Damascus road and its aftermath. The two accounts complement each other: Luke provides the narrative drama, Paul provides the theological interpretation. Finish by writing a one-paragraph summary of the gospel as Paul defines it in this chapter &mdash; in your own words, for someone who has never heard it." }} style={{ color: MUTED, lineHeight: 1.75, fontSize: 14 }} />
            </div>
          </div>
        )}

        {/* Video Section -- always visible */}
        <div style={{ borderTop: `1px solid ${BORDER}`, marginTop: 40, paddingTop: 32, paddingBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>Video Teaching</h2>
          <p dangerouslySetInnerHTML={{ __html: "Deepen your study of Galatians 1 with these curated video teachings and overviews." }} style={{ color: MUTED, marginBottom: 24, lineHeight: 1.6 }} />
          <div style={{ display: "grid", gap: 20 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "12px 16px" }}>
                  <p dangerouslySetInnerHTML={{ __html: item.title }} style={{ color: TEXT, fontWeight: 600, fontSize: 14, margin: 0 }} />
                  <p dangerouslySetInnerHTML={{ __html: "Galatians 1 &mdash; Bible Study" }} style={{ color: MUTED, fontSize: 12, marginTop: 4, margin: 0 }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Further Study */}
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 40 }}>
          <h3 style={{ fontWeight: 700, marginBottom: 16, fontSize: 16 }}>Further Study: Related Passages</h3>
          <div style={{ display: "grid", gap: 12 }}>
            {[
              { ref: "Acts 9:1-31", desc: "Luke&rsquo;s narrative of Paul&rsquo;s conversion and its aftermath -- the complementary account to Galatians 1:13-17" },
              { ref: "Acts 15:1-35", desc: "The Jerusalem Council that settled (publicly) the controversy Galatians addresses -- circumcision is not required for Gentile salvation" },
              { ref: "2 Corinthians 11:1-15", desc: "Paul again defends against &ldquo;super-apostles&rdquo; preaching another gospel and another Jesus &mdash; the same pattern as Galatians 1" },
              { ref: "Philippians 3:4-11", desc: "Paul&rsquo;s second great autobiographical passage &mdash; his Jewish credentials counted as &ldquo;loss&rdquo; compared to the surpassing worth of knowing Christ" },
              { ref: "Romans 1:1-7", desc: "Paul&rsquo;s greeting to Rome &mdash; a slightly more restrained version of the same apostolic self-identification, set apart by the gospel and called as an apostle" },
              { ref: "1 Corinthians 15:1-11", desc: "Paul&rsquo;s most compact gospel summary, including his own status as &ldquo;the least of the apostles&rdquo; who persecuted the church &mdash; grace expressed in the same terms as Galatians 1:15" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, borderLeft: `3px solid ${GOLD}50`, paddingLeft: 12 }}>
                <div>
                  <p style={{ color: GOLD, fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{item.ref}</p>
                  <p dangerouslySetInnerHTML={{ __html: item.desc }} style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
