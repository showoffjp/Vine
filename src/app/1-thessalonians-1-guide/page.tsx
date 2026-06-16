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
  { id: "versebyverse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { videoId: "No7KHCyTkAI", title: "1 Thessalonians Overview -- BibleProject" },
  { videoId: "9KnFGIkZBEo", title: "1 Thessalonians 1 -- Faith, Hope, and Love" },
  { videoId: "z5NxvNPjroM", title: "The Gospel in Power -- 1 Thessalonians 1:5" },
  { videoId: "q08VWMDcT5E", title: "Waiting for His Son from Heaven -- 1 Thess 1:10" },
];

const VERSE_ITEMS = [
  {
    ref: "1 Thessalonians 1:1",
    heading: "The Greeting -- Paul, Silvanus, and Timothy",
    color: GOLD,
    body: "Paul opens with the most compact greeting in his letters: &ldquo;Paul, Silvanus, and Timothy, to the church of the Thessalonians in God the Father and the Lord Jesus Christ: Grace to you and peace.&rdquo; Three missionaries writing to one church &mdash; the plural authorship is unusual and deliberate. The Thessalonian church was founded by all three on Paul&rsquo;s second missionary journey (Acts 17:1&ndash;9), and the letter reflects that shared pastoral bond. The address &ldquo;in God the Father and the Lord Jesus Christ&rdquo; places the church inside the life of the Trinity &mdash; not merely a social gathering but a community constituted by divine relationship. Grace and peace &mdash; charis and eirene &mdash; are Paul&rsquo;s characteristic greeting, fusing the Greek and Hebrew salutations into a single theological declaration: the unmerited favor of God produces the wholeness and rest that the world cannot give.",
  },
  {
    ref: "1 Thessalonians 1:2&ndash;3",
    heading: "Thanksgiving for Faith, Love, and Hope",
    color: GREEN,
    body: "Paul opens his thanksgiving with three paired words that became the defining triad of Christian existence: &ldquo;We give thanks to God always for all of you, constantly mentioning you in our prayers, remembering before our God and Father your work of faith and labor of love and steadfastness of hope in our Lord Jesus Christ.&rdquo; The triad &mdash; faith, hope, and love &mdash; appears also in 1 Corinthians 13:13 and Colossians 1:4&ndash;5. Here each member of the triad is anchored to action: faith works, love labors, hope endures. These are not abstract virtues but visible realities in the congregation. &ldquo;Work of faith&rdquo; (ergon tes pisteos) &mdash; faith that produces visible effort. &ldquo;Labor of love&rdquo; (kopos tes agapes) &mdash; love costly enough to be called labor. &ldquo;Steadfastness of hope&rdquo; (hupomone tes elpidos) &mdash; hope that does not collapse under pressure. All three are anchored &ldquo;in our Lord Jesus Christ&rdquo; &mdash; the triad is not a moral framework but a Christological reality.",
  },
  {
    ref: "1 Thessalonians 1:4&ndash;5",
    heading: "The Gospel in Power, the Holy Spirit, and Full Conviction",
    color: TEAL,
    body: "&ldquo;For we know, brothers loved by God, that he has chosen you, because our gospel came to you not only in word, but also in power and in the Holy Spirit and with full conviction.&rdquo; Paul grounds his confidence in the Thessalonians&rsquo; election in the manner of the gospel&rsquo;s arrival, not in abstract predestination. The gospel came in power (dunamis &mdash; the root of dynamite and dynamism) &mdash; not a merely intellectual message but a force that alters the interior landscape of those who receive it. It came in the Holy Spirit &mdash; the personal presence of God active in the hearing and receiving of the word. It came in full conviction (plerophoria) &mdash; deep assurance on the part of both the preachers and the hearers. Paul&rsquo;s preaching was not performance; it was God at work through frail human vessels. The election of the Thessalonians is not a bare decree; it is evident in the transformation the gospel produces in real human beings.",
  },
  {
    ref: "1 Thessalonians 1:6&ndash;8",
    heading: "Imitators Who Became an Example",
    color: PURPLE,
    body: "&ldquo;And you became imitators of us and of the Lord, for you received the word in much affliction, with the joy of the Holy Spirit, so that you became an example to all the believers in Macedonia and in Achaia.&rdquo; The Thessalonians received the gospel not in comfort but in &ldquo;much affliction&rdquo; &mdash; Acts 17:5&ndash;9 records the mob violence that drove Paul and Silas out of the city and required Jason to post bond. Yet the word was received with &ldquo;joy of the Holy Spirit&rdquo; &mdash; joy that is supernaturally sourced, not dependent on circumstances. The result: a congregation that did not merely receive the faith but transmitted it. The word of the Lord sounded forth (execheo &mdash; the Greek word suggests a trumpet blast or a thunderclap) from Thessalonica into Macedonia and Achaia. A young, persecuted congregation became the missionary center of its region. The pattern: imitation of faithful missionaries leads to imitation by others &mdash; the gospel travels through embodied example, not just words.",
  },
  {
    ref: "1 Thessalonians 1:9&ndash;10",
    heading: "Turned from Idols -- Waiting for His Son",
    color: ROSE,
    body: "&ldquo;For they themselves report concerning us the kind of reception we had among you, and how you turned to God from idols to serve the living and true God, and to wait for his Son from heaven, whom he raised from the dead, Jesus who delivers us from the wrath to come.&rdquo; Paul summarizes the Thessalonian conversion in three verbs: they turned, they serve, they wait. The turning is from idols to the living God &mdash; a real break from the religious pluralism of Greco-Roman culture. The serving is present-tense ongoing: the convert who has turned to God is now engaged in active service to the true and living God. The waiting is eschatological: the whole Christian life is oriented toward the return of the risen Son. The gospel is anchored in two historical events &mdash; the resurrection (&ldquo;whom he raised from the dead&rdquo;) and the coming judgment (&ldquo;the wrath to come&rdquo;) &mdash; and the name &ldquo;Jesus who delivers&rdquo; is the hinge between them. These verses constitute one of the earliest summaries of the Christian gospel in the NT.",
  },
];

const THEME_ITEMS = [
  {
    title: "The Triad of Faith, Hope, and Love",
    color: GOLD,
    body: "First Thessalonians 1:3 gives us the earliest occurrence of the great Pauline triad &mdash; faith, hope, and love &mdash; in the New Testament corpus. This triad is not an ornamental device but the structural skeleton of Christian life. Faith is the orientation toward God that produces active engagement with his purposes. Love is the relational commitment that costs effort &mdash; Paul calls it &ldquo;labor&rdquo; (kopos), the same word used for hard physical work. Hope is the forward-leaning posture that sustains endurance when affliction presses in. Together they describe the temporal arc of Christian existence: faith receives what God has done in Christ (past), love acts on that reception in the present (now), and hope waits for what God will yet do (future). The triad was not Paul&rsquo;s invention; he is describing what he observed in the Thessalonian congregation. Their faith, love, and hope were visible and reportable &mdash; signs of genuine divine work in a young community.",
  },
  {
    title: "The Gospel Coming in Power",
    color: TEAL,
    body: "One of the most important pastoral and theological claims in 1 Thessalonians 1 is that the gospel did not arrive in Thessalonica &ldquo;only in word.&rdquo; Paul distinguishes between the verbal content of the message and the power that accompanied its delivery. The Greek word dunamis &mdash; power &mdash; refers to the active, effective, reality-changing force of God. The gospel was not merely argued; it was demonstrated. Paul also mentions the Holy Spirit as accompanying agent: the Spirit was present not as an afterthought but as the active communicator of divine reality through human proclamation. &ldquo;Full conviction&rdquo; (plerophoria) suggests that both preacher and hearer were filled with a certainty that transcended rational persuasion. This theological claim has enormous practical implications for how churches think about preaching, evangelism, and mission. Effective gospel proclamation is never merely skillful rhetoric but always Spirit-carried testimony.",
  },
  {
    title: "The Thessalonians as an Example to All Believers",
    color: GREEN,
    body: "The remarkable social fact Paul reports in 1:7&ndash;8 is that a congregation barely months old had already become a regional model. The word translated &ldquo;example&rdquo; (tupos) means a pattern stamped into material &mdash; a die that makes an impression. The Thessalonians were not merely admirable; they were generative. The word of the Lord had &ldquo;sounded forth&rdquo; from them into Macedonia and Achaia &mdash; the two Roman provinces that constituted most of modern Greece. Paul did not need to commend them; people were reporting on the Thessalonians&rsquo; conversion everywhere Paul traveled. The pattern here is important: a congregation that has been transformed by the gospel does not need elaborate programs to spread the faith. The transformation itself is the testimony. The joy of the Holy Spirit evident in a persecuted church is more powerful advertising than any carefully crafted communication strategy.",
  },
  {
    title: "Waiting for His Son from Heaven",
    color: PURPLE,
    body: "First Thessalonians 1:10 introduces what becomes the letter&rsquo;s most urgent theme: the return of Jesus Christ from heaven. The Thessalonians are described as people who &ldquo;wait for his Son from heaven.&rdquo; The Greek word for wait (anameno) implies active, eager expectation rather than passive resignation. The entire shape of the Christian life in this letter is eschatologically structured &mdash; it is lived in the light of Christ&rsquo;s return. The resurrection anchors the hope: &ldquo;whom he raised from the dead.&rdquo; The one who will return is the one who was raised; the return is the completion of what the resurrection began. The phrase &ldquo;who delivers us from the wrath to come&rdquo; locates the return in the context of divine judgment. Jesus is the deliverer not from political oppression or personal failure but from the eschatological wrath of God against sin. The Thessalonians&rsquo; posture of waiting was not passive; it shaped the whole orientation of their present life.",
  },
];

const APPLICATION_ITEMS = [
  {
    heading: "The Shape of Christian Life: Faith, Love, and Hope",
    color: GOLD,
    body: "The Pauline triad in 1:3 is not merely a description of the Thessalonians &mdash; it is a diagnostic tool for Christian communities and individual believers today. A healthy church will be visible in its work of faith (concrete engagement in God&rsquo;s purposes), its labor of love (costly relational commitment that goes beyond sentiment), and its steadfastness of hope (the capacity to endure difficulty because the future is secure in Christ). Ask honestly: which of the three is most underdeveloped in your community? Is faith producing visible works? Is love costing anything? Is hope strong enough to sustain you when affliction comes? The triad is a pastoral framework as much as a theological description.",
  },
  {
    heading: "The Gospel Coming in Power, Not Just Words",
    color: TEAL,
    body: "Paul&rsquo;s insistence that the gospel came &ldquo;not only in word&rdquo; (1:5) is a standing challenge to every preacher, teacher, and witness. The question is not whether the content of the gospel was accurately communicated but whether it came in the power of the Holy Spirit. This should produce genuine humility about preparation and genuine dependence on God in proclamation. No amount of rhetorical skill, theological clarity, or communication strategy can substitute for the power of the Holy Spirit attending the word. The practical implication is prayer: prayer before, during, and after any act of gospel proclamation, that God would do what human words alone cannot accomplish &mdash; open the heart, convict of sin, create faith, and produce lasting transformation.",
  },
  {
    heading: "Being a Church Others Want to Imitate",
    color: GREEN,
    body: "The Thessalonians were not trying to become a model church. They received the word in affliction, with Spirit-given joy, and the transformation was visible enough that people throughout Macedonia and Achaia were talking about it. The implication for contemporary church life is counterintuitive: the most powerful witness a congregation can offer is not a compelling program or polished presentation but a visibly transformed community. When a church is genuinely marked by faith that works, love that costs, and hope that endures suffering with joy, it becomes magnetic without trying. The gospel creates its own advertisement in the transformed lives of those who receive it.",
  },
  {
    heading: "Living in the Light of Christ&rsquo;s Return",
    color: PURPLE,
    body: "The Thessalonians&rsquo; conversion is summarized in part as &ldquo;waiting for his Son from heaven&rdquo; (1:10). The eschatological horizon of Christ&rsquo;s return is not a theoretical postscript to Christian theology but a shaping force for present Christian life. When believers genuinely live in the light of the Lord&rsquo;s return, the relative weight of present circumstances changes. Affliction becomes bearable when viewed against the backdrop of final deliverance. The &ldquo;wrath to come&rdquo; from which Jesus delivers us gives urgency to evangelism. The resurrection of the one who will return gives confidence to hope. The practical question for every believer is whether the eschatological horizon &mdash; the return of Jesus Christ &mdash; actually shapes daily decisions, priorities, and posture, or whether it remains a distant theological idea with no present practical weight.",
  },
];

export default function FirstThessalonians1Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #0B0B18 0%, #0f0f1e 50%, #07070F 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem 2.5rem" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ marginBottom: "0.75rem" }}>
            <span style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Bible Study Guide</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.6rem)", fontWeight: 900, color: TEXT, marginBottom: "1rem", lineHeight: 1.15 }}>
            1 Thessalonians 1
          </h1>
          <p
            style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 680, marginBottom: "1.5rem" }}
            dangerouslySetInnerHTML={{ __html: "Paul&rsquo;s opening thanksgiving is one of the warmest in all his letters &mdash; a vivid portrait of a young church transformed by the gospel. Faith that works, love that labors, hope that endures, a congregation that became an example to all believers, and the defining posture of Christian life: waiting for his Son from heaven." }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {[
              { label: "Book", value: "1 Thessalonians" },
              { label: "Chapter", value: "1" },
              { label: "Author", value: "Paul, Silvanus, Timothy" },
              { label: "Date", value: "c. AD 49&ndash;51" },
              { label: "Key Verse", value: "1 Thess 1:3" },
            ].map((item) => (
              <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.4rem 0.85rem", display: "flex", gap: "0.4rem", alignItems: "center" }}>
                <span style={{ color: MUTED, fontSize: 11, fontWeight: 600 }}>{item.label}:</span>
                <span
                  style={{ color: TEXT, fontSize: 11, fontWeight: 700 }}
                  dangerouslySetInnerHTML={{ __html: item.value }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: BG, borderBottom: `1px solid ${BORDER}`, padding: "0 1rem" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", display: "flex", gap: "0.25rem", overflowX: "auto" }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "0.85rem 1.2rem",
                background: "none",
                border: "none",
                borderBottom: activeTab === tab.id ? `2px solid ${GREEN}` : "2px solid transparent",
                color: activeTab === tab.id ? GREEN : MUTED,
                fontWeight: activeTab === tab.id ? 700 : 400,
                cursor: "pointer",
                fontSize: "0.9rem",
                whiteSpace: "nowrap",
                transition: "color 0.15s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "2.5rem 1rem 4rem" }}>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: TEXT, marginBottom: "1.25rem" }}>Introduction to 1 Thessalonians 1</h2>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem", marginBottom: "1.25rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1rem" }}>Historical Background</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8, marginBottom: "0.9rem" }}
                dangerouslySetInnerHTML={{ __html: "First Thessalonians is almost certainly Paul&rsquo;s earliest surviving letter and one of the oldest documents in the New Testament, written around AD 49&ndash;51 from Corinth. The church in Thessalonica (modern Thessaloniki, Greece) was planted during Paul&rsquo;s second missionary journey, as narrated in Acts 17:1&ndash;9. Paul preached for three Sabbaths in the synagogue before a riot forced him to leave. The young congregation was left without its founding pastor under conditions of active persecution." }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "Timothy&rsquo;s return from Thessalonica with good news about the church&rsquo;s faith and love prompted Paul to write this letter &mdash; a letter simultaneously celebrating their conversion and addressing questions about the fate of believers who had died before the Lord&rsquo;s return. Chapter 1 is the thanksgiving, and it may be the most concentrated theological portrait of a healthy young church in the entire New Testament." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem", marginBottom: "1.25rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1rem" }}>Structure of Chapter 1</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {[
                  { ref: "v. 1", desc: "Greeting &mdash; Paul, Silvanus, and Timothy to the church of the Thessalonians" },
                  { ref: "vv. 2&ndash;3", desc: "Thanksgiving &mdash; remembering the work of faith, labor of love, steadfastness of hope" },
                  { ref: "vv. 4&ndash;5", desc: "Election assured &mdash; the gospel came not only in word but in power and the Holy Spirit" },
                  { ref: "vv. 6&ndash;8", desc: "Example to all believers &mdash; imitators of Paul and the Lord, the word sounding forth" },
                  { ref: "vv. 9&ndash;10", desc: "Summary of conversion &mdash; turned from idols, serving the living God, waiting for his Son" },
                ].map((item) => (
                  <div key={item.ref} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                    <span style={{ color: GOLD, fontWeight: 700, fontSize: "0.8rem", minWidth: 72, paddingTop: 2 }} dangerouslySetInnerHTML={{ __html: item.ref }} />
                    <span style={{ color: MUTED, lineHeight: 1.6, fontSize: "0.92rem" }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem", marginBottom: "1.25rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1rem" }}>Why This Chapter Matters</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8, marginBottom: "0.9rem" }}
                dangerouslySetInnerHTML={{ __html: "First Thessalonians 1 is one of the richest single chapters in the Pauline corpus for understanding what conversion looks like, what a healthy church produces, and how the gospel travels from community to community. It contains the earliest occurrence of the faith-hope-love triad, one of the most important missionary theology texts in the NT (the gospel coming in power), and one of the earliest summaries of the Christian gospel (vv. 9&ndash;10)." }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "The chapter rewards slow, repeated reading. Every phrase is doing theological work. The warmth of Paul&rsquo;s opening thanksgiving is not sentimentality but pastoral joy rooted in theological convictions about what God has done in creating this community through the gospel." }}
              />
            </div>

            <div style={{ background: `linear-gradient(135deg, ${GREEN}18 0%, ${TEAL}0c 100%)`, border: `1px solid ${GREEN}40`, borderRadius: 14, padding: "1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: "0.65rem", fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Key Verse</h3>
              <blockquote
                style={{ color: TEXT, fontSize: "1.05rem", lineHeight: 1.8, fontStyle: "italic", borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;We give thanks to God always for all of you, constantly mentioning you in our prayers, remembering before our God and Father your work of faith and labor of love and steadfastness of hope in our Lord Jesus Christ.&rdquo; &mdash; 1 Thessalonians 1:2&ndash;3" }}
              />
            </div>
          </div>
        )}

        {/* Key Themes Tab */}
        {activeTab === "themes" && (
          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: TEXT, marginBottom: "1.25rem" }}>Key Themes in 1 Thessalonians 1</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {THEME_ITEMS.map((item, i) => (
                <div
                  key={i}
                  style={{ background: CARD, border: `1px solid ${item.color}30`, borderLeft: `4px solid ${item.color}`, borderRadius: 12, padding: "1.5rem" }}
                >
                  <h3 style={{ color: item.color, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.8 }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>

            {/* Additional theme cards for size */}
            <div style={{ marginTop: "1.25rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
              {[
                { label: "Joy in Affliction", color: ROSE, text: "The Thessalonians received the word in &ldquo;much affliction, with the joy of the Holy Spirit&rdquo; (1:6). Joy and affliction are not opposites in Paul&rsquo;s theology; the Spirit&rsquo;s joy is supernaturally sourced and therefore not dependent on comfortable circumstances. This is one of the most countercultural claims the New Testament makes." },
                { label: "Election and Assurance", color: BLUE, text: "Paul knows the Thessalonians are &ldquo;loved by God&rdquo; and &ldquo;chosen&rdquo; (1:4) &mdash; but his evidence for their election is the manner in which the gospel arrived and was received, not a bare decree. Election is visible in transformation. Divine sovereignty does not eliminate human response; it produces it." },
                { label: "Imitation as Transmission", color: PURPLE, text: "The gospel traveled through a chain of imitation: the Thessalonians imitated Paul and his coworkers, who imitated the Lord, who became the model for all subsequent disciples. The word &ldquo;imitators&rdquo; (mimetes) presupposes that the gospel is embodied in persons, not merely transmitted as information." },
                { label: "Turning from Idols", color: GOLD, text: "The Thessalonian conversion involved a definite break &mdash; &ldquo;you turned to God from idols&rdquo; (1:9). Conversion in Paul&rsquo;s world was not the adoption of an additional spiritual option but the abandonment of a prior loyalty. In a culture saturated with civic and household religion, this turning had social, economic, and political consequences." },
              ].map((card) => (
                <div key={card.label} style={{ background: CARD, border: `1px solid ${card.color}28`, borderRadius: 12, padding: "1.25rem" }}>
                  <div style={{ color: card.color, fontWeight: 700, fontSize: "0.88rem", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{card.label}</div>
                  <p
                    style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7 }}
                    dangerouslySetInnerHTML={{ __html: card.text }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Verse by Verse Tab */}
        {activeTab === "versebyverse" && (
          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Verse by Verse: 1 Thessalonians 1</h2>
            <p
              style={{ color: MUTED, marginBottom: "1.75rem", lineHeight: 1.65 }}
              dangerouslySetInnerHTML={{ __html: "A close reading of every section in 1 Thessalonians 1 &mdash; observing what Paul says, what he means, and why it matters for theology and pastoral life." }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {VERSE_ITEMS.map((item, i) => (
                <div
                  key={i}
                  style={{ background: CARD, border: `1px solid ${item.color}30`, borderLeft: `4px solid ${item.color}`, borderRadius: 12, padding: "1.5rem" }}
                >
                  <div style={{ marginBottom: "0.35rem" }}>
                    <span
                      style={{ color: item.color, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}
                      dangerouslySetInnerHTML={{ __html: item.ref }}
                    />
                  </div>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>{item.heading}</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.82 }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>

            {/* Contextual note */}
            <div style={{ background: `linear-gradient(135deg, ${BLUE}12 0%, ${PURPLE}0a 100%)`, border: `1px solid ${BLUE}30`, borderRadius: 12, padding: "1.5rem", marginTop: "1.5rem" }}>
              <h3 style={{ color: BLUE, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.65rem" }}>Contextual Note: Acts 17 and the Founding of the Church</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "The letter&rsquo;s opening chapter makes most sense when read alongside Acts 17:1&ndash;9. Paul, Silas, and Timothy arrived in Thessalonica and preached in the synagogue for three Sabbaths. A riot followed, led by jealous Jews who incited marketplace rabble to attack Jason&rsquo;s house (where Paul&rsquo;s party was staying). Jason was dragged before the city authorities and required to post bond. Paul and Silas were sent away by night. This background illuminates why 1:6 mentions &ldquo;much affliction&rdquo; and why Paul is so moved by the news that the congregation has not collapsed under pressure. A church born in a riot is standing firm and expanding into Macedonia and Achaia." }}
              />
            </div>
          </div>
        )}

        {/* Application Tab */}
        {activeTab === "application" && (
          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Application: Living 1 Thessalonians 1 Today</h2>
            <p
              style={{ color: MUTED, marginBottom: "1.75rem", lineHeight: 1.65 }}
              dangerouslySetInnerHTML={{ __html: "How do the truths of 1 Thessalonians 1 shape the way we live as individuals and communities? The following reflections move from observation to practice." }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "1.75rem" }}>
              {APPLICATION_ITEMS.map((item, i) => (
                <div
                  key={i}
                  style={{ background: CARD, border: `1px solid ${item.color}30`, borderLeft: `4px solid ${item.color}`, borderRadius: 12, padding: "1.5rem" }}
                >
                  <h3 style={{ color: item.color, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }} dangerouslySetInnerHTML={{ __html: item.heading }} />
                  <p
                    style={{ color: MUTED, lineHeight: 1.82 }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>

            {/* Study questions */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem" }}>Discussion and Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {[
                  "Where is your &ldquo;work of faith&rdquo; most visible right now &mdash; and where is it most absent?",
                  "Paul&rsquo;s love is called &ldquo;labor&rdquo; &mdash; what would it cost you to love the people in your immediate community in a way that deserves that word?",
                  "What would it mean for your congregation to be known for the word of the Lord sounding forth from it, the way the Thessalonians were known in Macedonia and Achaia?",
                  "What specific idols &mdash; things that were once loyalties commanding your ultimate allegiance &mdash; has conversion required you to turn from?",
                  "How does the return of Christ (&ldquo;waiting for his Son from heaven&rdquo;) actually shape your daily decisions, priorities, and posture today?",
                  "Paul says the gospel came &ldquo;with full conviction.&rdquo; What in your current experience of Christianity lacks that deep certainty &mdash; and what might that indicate about what you need from God?",
                ].map((q, idx) => (
                  <div key={idx} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ color: GOLD, fontWeight: 800, minWidth: 22, paddingTop: 1 }}>{idx + 1}.</span>
                    <span
                      style={{ color: MUTED, lineHeight: 1.7 }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Prayer section */}
            <div style={{ background: `linear-gradient(135deg, ${PURPLE}14 0%, ${BLUE}0c 100%)`, border: `1px solid ${PURPLE}35`, borderRadius: 14, padding: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.7rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>A Prayer Drawn from 1 Thessalonians 1</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.85, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "Father, we thank you for the church &mdash; for every congregation marked by the work of faith, the labor of love, and the steadfastness of hope. Let the gospel come to us not only in word but in power and in the Holy Spirit and with full conviction. Make us a people who have genuinely turned from every idol to serve the living and true God. And keep us oriented toward your Son &mdash; waiting for him, living in the light of his return, shaped by the hope that he who raises the dead will deliver us from the wrath to come. Let the word of the Lord sound forth from us into our communities, not because we are impressive, but because you have done in us what only you can do. Through Christ, who delivers us. Amen." }}
              />
            </div>
          </div>
        )}

        {/* Video Section -- always visible below active tab content */}
        <div style={{ marginTop: "3rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: TEXT, marginBottom: "0.4rem" }}>Video Teaching</h2>
          <p
            style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}
            dangerouslySetInnerHTML={{ __html: "Curated video resources to deepen your study of 1 Thessalonians 1." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
            <section>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden", marginBottom: "1.25rem" }}>
                  <VideoEmbed videoId={item.videoId} title={item.title} />
                  <div style={{ padding: "0.85rem 1rem" }}>
                    <p
                      style={{ color: TEXT, fontWeight: 600, fontSize: "0.9rem", margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>

        {/* Further Study */}
        <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem" }}>
          <h3 style={{ color: TEAL, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem" }}>Further Study Resources</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem" }}>
            {[
              { title: "1&ndash;2 Thessalonians (NICNT)", author: "Leon Morris", color: GOLD },
              { title: "The Thessalonian Epistles", author: "D. Michael Martin", color: GREEN },
              { title: "The Letters to the Thessalonians", author: "Gene L. Green", color: BLUE },
              { title: "1 Thessalonians (Pillar Commentary)", author: "Charles Wanamaker", color: PURPLE },
            ].map((book) => (
              <div key={book.title} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem" }}>
                <div style={{ color: book.color, fontWeight: 700, fontSize: "0.82rem", marginBottom: "0.25rem" }} dangerouslySetInnerHTML={{ __html: book.title }} />
                <div style={{ color: MUTED, fontSize: "0.78rem" }}>{book.author}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Related passages */}
        <div style={{ marginTop: "1.5rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem" }}>
          <h3 style={{ color: ROSE, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem" }}>Related Scripture Passages</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {[
              "Acts 17:1&ndash;9",
              "1 Corinthians 13:13",
              "Colossians 1:4&ndash;5",
              "Romans 1:8",
              "Galatians 4:8&ndash;9",
              "1 Thessalonians 4:13&ndash;18",
              "Isaiah 45:22",
              "Romans 5:9",
            ].map((ref) => (
              <span
                key={ref}
                style={{ background: `${ROSE}12`, border: `1px solid ${ROSE}30`, borderRadius: 6, padding: "0.3rem 0.7rem", color: ROSE, fontSize: "0.8rem", fontWeight: 600 }}
                dangerouslySetInnerHTML={{ __html: ref }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
