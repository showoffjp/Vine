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
const BLUE = "#3B82F6";
const ROSE = "#E11D48";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const OVERVIEW_FACTS = [
  { key: "Book", value: "2 Corinthians" },
  { key: "Chapter", value: "13 (final chapter)" },
  { key: "Genre", value: "Apostolic Letter" },
  { key: "Date", value: "c. AD 55-56" },
  { key: "Key Verse", value: "2 Cor 13:14 &mdash; The grace of the Lord Jesus Christ, the love of God, and the fellowship of the Holy Spirit." },
  { key: "Theme", value: "Final warning, self-examination, and the Trinitarian benediction" },
];

const THEMES = [
  {
    id: "third-visit",
    color: ROSE,
    title: "Paul&rsquo;s Third Visit and Final Warning",
    verse: "2 Corinthians 13:1-2",
    body: "&ldquo;This will be my third visit to you.&rsquo;Every matter must be established by the testimony of two or three witnesses.&rsquo; I already gave you a warning when I was with you the second time. I now repeat it while absent: On my return I will not spare those who sinned earlier or any of the others.&rdquo; Paul is not bluffing. The letter has been building to this moment: a community that has welcomed &lsquo;super-apostles&rsquo; who preach a different Jesus, a different spirit, and a different gospel (2 Cor 11:4) will face apostolic confrontation. The reference to Deuteronomy 19:15 (&ldquo;two or three witnesses&rdquo;) casts the upcoming visit in juridical terms &mdash; this is not a pastoral check-in but an apostolic tribunal. The mercy extended over two previous visits is now at its limit."
  },
  {
    id: "weakness-power",
    color: GOLD,
    title: "Crucified in Weakness, Living by Power",
    verse: "2 Corinthians 13:3-4",
    body: "&ldquo;He is not weak in dealing with you, but is powerful among you. For to be sure, he was crucified in weakness, yet he lives by God&rsquo;s power. Likewise, we are weak in him, yet by God&rsquo;s power we will live with him in our dealing with you.&rdquo; This is the Christological axis on which the entire argument of 2 Corinthians turns. The cross and the resurrection are not sequential events but a permanent pattern: weakness and power, suffering and glory, dying and living. Christ was crucified in weakness &mdash; this is a scandalous fact, not an embarrassment to be explained away. Yet he lives by God&rsquo;s power &mdash; the resurrection vindicates the cross. Paul inhabits this same pattern: his weakness (unimpressive appearance, refusal of payment, suffering) is not a problem with his apostleship but a demonstration of it. The power manifest in weakness is recognizably God&rsquo;s power, not human performance."
  },
  {
    id: "self-examination",
    color: TEAL,
    title: "Examine Yourselves &mdash; The Test of Faith",
    verse: "2 Corinthians 13:5-7",
    body: "&ldquo;Examine yourselves to see whether you are in the faith; test yourselves. Do you not realize that Christ Jesus is in you &mdash; unless, of course, you fail the test? And I trust that you will discover that we have not failed the test.&rdquo; This is one of the most searching commands in all of Paul&rsquo;s letters. The Corinthians have been questioning Paul&rsquo;s apostolic credentials; he turns the question back on them: examine yourselves. The test is straightforward: is Christ Jesus in you? The indwelling of Christ &mdash; not religious activity, not moral performance, not spiritual gifts &mdash; is the criterion. Paul adds a characteristic reversal: he trusts they will discover that he (Paul) has not failed the test &mdash; that his weakness, which seemed like apostolic deficiency, is actually the pattern of genuine apostolic ministry, since it corresponds to the pattern of crucified-yet-living Christ."
  },
  {
    id: "truth-authority",
    color: BLUE,
    title: "Authority to Build Up, Not Tear Down",
    verse: "2 Corinthians 13:8-10",
    body: "&ldquo;For we cannot do anything against the truth, but only for the truth... We are glad whenever we are weak but you are strong; and our prayer is that you may be fully restored. This is why I write these things when I am absent, that when I come I may not have to be harsh in my use of authority &mdash; the authority the Lord gave me for building up, not for tearing down.&rdquo; Paul describes his apostolic authority with unusual clarity: it is given by the Lord, its purpose is construction (oikodome, building up), not demolition. This does not mean apostolic authority is toothless &mdash; Paul has been warning throughout the letter that he will not spare wrongdoers when he comes. But the goal is never discipline for its own sake; it is always the restoration of the community to health. The logic: a community that corrects itself (through self-examination) will not need to be corrected by the apostle. Paul&rsquo;s hard letter is itself an act of building up."
  },
  {
    id: "peace-unity",
    color: GREEN,
    title: "Aim for Restoration and Peace",
    verse: "2 Corinthians 13:11-12",
    body: "&ldquo;Finally, brothers and sisters, rejoice! Strive for full restoration, encourage one another, be of one mind, live in peace. And the God of love and peace will be with you. Greet one another with a holy kiss.&rdquo; The closing exhortations are deceptively brief and demanding. &lsquo;Strive for full restoration&rsquo; translates katartizesthe &mdash; the same word used for setting a broken bone, mending a net, or equipping soldiers. It implies that the community is broken and needs skilled repair &mdash; not cosmetic improvement but structural restoration. The command to be &lsquo;of one mind&rsquo; and &lsquo;live in peace&rsquo; builds on the letter&rsquo;s sustained argument: a community that has accepted false apostles, divided into factions, and criticized its founding pastor is not a community of peace. The holy kiss was the embodied sign of the unity Paul is commanding."
  },
  {
    id: "trinitarian",
    color: PURPLE,
    title: "The Trinitarian Benediction",
    verse: "2 Corinthians 13:14",
    body: "&ldquo;May the grace of the Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit be with you all.&rdquo; This is the most explicitly Trinitarian sentence in the Pauline corpus &mdash; and one of the most influential sentences in Christian history. Each phrase designates a distinct divine person and a distinct gift: the grace of Christ (charis &mdash; the free favor of the Savior), the love of God (the Father&rsquo;s own love as the source of all salvation), and the fellowship of the Holy Spirit (koinonia &mdash; the participation in and with the Spirit that unites believers to one another and to God). The order is not chronological or hierarchical but experiential: believers typically first encounter divine grace in Christ, then understand that this grace flows from the Father&rsquo;s love, and then experience the Spirit&rsquo;s fellowship as the continuing reality of both. This benediction has shaped Christian liturgy for two thousand years."
  },
];

const VERSES = [
  {
    ref: "vv.1-2",
    text: "This will be my third visit to you. 'Every matter must be established by the testimony of two or three witnesses.' I already gave you a warning when I was with you the second time. I now repeat it while absent: On my return I will not spare those who sinned earlier or any of the others.",
    heading: "The Third Visit",
    color: ROSE,
    commentary: "Paul&rsquo;s letter has been a sustained defense of his apostleship and a warning about a community that has drifted toward false teaching. The opening verses of chapter 13 make explicit what the letter has been building toward: the third visit will not be a gentle pastoral call but an apostolic reckoning. The citation of Deuteronomy 19:15 (&ldquo;two or three witnesses&rdquo;) frames the visit as a legal proceeding. The sins in view are the acceptance of the &lsquo;super-apostles&rsquo; and the persistent rebellion against Paul&rsquo;s gospel (described in 12:20-21). The mercy of the first two visits is now at its limit &mdash; not because Paul is vindictive, but because discipline delayed indefinitely is no discipline at all."
  },
  {
    ref: "vv.3-4",
    text: "...since you are demanding proof that Christ is speaking through me. He is not weak in dealing with you, but is powerful among you. For to be sure, he was crucified in weakness, yet he lives by God's power. Likewise, we are weak in him, yet by God's power we will live with him in our dealing with you.",
    heading: "Weakness and Power",
    color: GOLD,
    commentary: "The Corinthians want &lsquo;proof&rsquo; of Christ speaking through Paul &mdash; presumably something impressive, rhetorically polished, or miraculously spectacular. Paul&rsquo;s answer is counterintuitive: the proof is Christological. Christ himself was crucified in weakness. If they find Paul&rsquo;s ministry too weak to be apostolic, they have misunderstood both apostleship and Christ. The resurrection (&ldquo;yet he lives by God&rsquo;s power&rdquo;) does not cancel the cross &mdash; it vindicates it. Similarly, Paul&rsquo;s weakness does not cancel his apostleship; it demonstrates it. The power manifest through Paul is God&rsquo;s power, which is always made perfect in weakness (12:9). When Paul comes in his third visit, the power of Christ will be evident &mdash; not through impressive personal force but through apostolic authority exercised for the community&rsquo;s restoration."
  },
  {
    ref: "vv.5-7",
    text: "Examine yourselves to see whether you are in the faith; test yourselves. Do you not realize that Christ Jesus is in you &mdash; unless, of course, you fail the test? And I trust that you will discover that we have not failed the test. Now we pray to God that you will not do anything wrong &mdash; not so that people will see that we have stood the test but so that you will do what is right even though we may seem to have failed.",
    heading: "Examine Yourselves",
    color: TEAL,
    commentary: "This is the most daring rhetorical move in the chapter. The community has been testing Paul&rsquo;s apostolic credentials; he inverts the test: examine yourselves. The criterion is clear: is Christ Jesus in you? Not: are you morally improving? Not: are you producing the right spiritual experiences? But: is the living Christ genuinely present in you by the Spirit? Paul&rsquo;s prayer in v.7 is remarkable: he prays that the Corinthians will do what is right &mdash; even if that means Paul himself appears to have failed the test (because his third visit will be mild, not the harsh display of power they expected). He is willing to &lsquo;appear&rsquo; weak if the community is actually healthy. His concern is their restoration, not his reputation. This is the most self-forgetful moment in the letter."
  },
  {
    ref: "vv.8-10",
    text: "For we cannot do anything against the truth, but only for the truth. We are glad whenever we are weak but you are strong; and our prayer is that you may be fully restored. This is why I write these things when I am absent, that when I come I may not have to be harsh in my use of authority &mdash; the authority the Lord gave me for building up, not for tearing down.",
    heading: "For Truth and Building Up",
    color: BLUE,
    commentary: "Verse 8 contains a striking apostolic self-limitation: &ldquo;We cannot do anything against the truth.&rdquo; Apostolic authority is not absolute; it is bounded by the truth of the gospel. Paul&rsquo;s use of his authority is always &lsquo;for the truth&rsquo; &mdash; for the restoration of the community to the gospel of Christ. The prayer that the Corinthians will be &lsquo;fully restored&rsquo; (katartisis) expresses his pastoral heart: he wants to arrive and find them repaired, not broken further. Verse 10 makes the purpose of the letter explicit: it is preemptive discipline &mdash; a written confrontation intended to produce repentance before the face-to-face confrontation arrives. The final phrase &mdash; &ldquo;for building up, not tearing down&rdquo; &mdash; is the clearest statement of apostolic purpose in the entire letter. All apostolic authority, however severe its exercise may sometimes be, is inherently constructive."
  },
  {
    ref: "vv.11-12",
    text: "Finally, brothers and sisters, rejoice! Strive for full restoration, encourage one another, be of one mind, live in peace. And the God of love and peace will be with you. Greet one another with a holy kiss. All God's holy people here send their greetings.",
    heading: "Restoration and Greeting",
    color: GREEN,
    commentary: "The shift from the severity of vv.1-10 to the warmth of vv.11-12 is striking &mdash; and deliberate. Paul does not end his most confrontational letter with condemnation but with imperative joy and restoration. The five commands (rejoice, strive for full restoration, encourage one another, be of one mind, live in peace) describe a community that has received the letter well and is actively working to repair what is broken. The promise that follows &mdash; &ldquo;the God of love and peace will be with you&rdquo; &mdash; links the community&rsquo;s pursuit of peace to God&rsquo;s own character. The holy kiss (1 Thessalonians 5:26; Romans 16:16) was a liturgical greeting in early Christian worship &mdash; a tactile enactment of the unity Paul is commanding. Greetings from &ldquo;all God&rsquo;s holy people here&rdquo; extend the letter&rsquo;s social world beyond Corinth."
  },
  {
    ref: "v.13",
    text: "May the grace of the Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit be with you all.",
    heading: "The Trinitarian Benediction",
    color: PURPLE,
    commentary: "This single verse has shaped the liturgy of the church for twenty centuries. Each phrase carries irreducible weight. &lsquo;The grace of the Lord Jesus Christ&rsquo;: grace (charis) is the defining characteristic of Christ&rsquo;s saving work &mdash; the free, undeserved favor that took the form of incarnation and crucifixion. &lsquo;The love of God&rsquo;: the Father&rsquo;s own love is the ultimate source from which grace flows (John 3:16; Romans 5:8). &lsquo;The fellowship of the Holy Spirit&rsquo;: koinonia is participation, sharing, communion &mdash; the Spirit creates the bond that unites believers to one another and to God. The benediction moves from the experienced entry point (Christ&rsquo;s grace, first encountered in the gospel) to the divine source (the Father&rsquo;s love) to the continuing reality (the Spirit&rsquo;s fellowship). It is simultaneously a gift (&ldquo;may it be with you&rdquo;) and a description of what Christian life in community actually is: a participation in the life of the Triune God."
  },
];

const APPLICATION_CARDS = [
  {
    icon: "examine",
    color: TEAL,
    title: "Regular Self-Examination of Faith",
    body: "The command of verse 5 &mdash; &ldquo;Examine yourselves to see whether you are in the faith; test yourselves&rdquo; &mdash; is one of the most neglected in Protestant Christianity. The Reformers recovered the biblical doctrine of assurance but sometimes allowed assurance to become complacency. Paul&rsquo;s command is not designed to produce anxiety but clarity: is Christ actually in you? Is your faith in Christ the organizing center of your life, or have other loyalties displaced it? The examination is not a works-righteousness audit but a relational check: is the relationship with Christ real and living, or has it become nominal? The practice: set aside time quarterly for an honest self-examination. Not &lsquo;am I sinning less?&rsquo; but &lsquo;is Christ in me? Is his presence real and transformative in my actual daily life?&rsquo;"
  },
  {
    icon: "weakness",
    color: GOLD,
    title: "The Grace of Christ Active Through Weakness",
    body: "The pattern of 2 Corinthians 13:3-4 &mdash; crucified in weakness, living by power &mdash; is not only apostolic biography; it is the template for every believer&rsquo;s life. The places of our weakness are not obstacles to God&rsquo;s work but the preferred locations of it. Paul does not say that God works in spite of weakness but through it (&lsquo;when I am weak, then I am strong,&rsquo; 12:10). The application is both personal and ecclesial. Personally: the areas of your life where you feel most inadequate &mdash; relational failure, professional limitation, chronic struggle &mdash; may be the very places where God&rsquo;s power is most clearly at work, if you allow it. Ecclesially: a church that presents a front of strength and competence may be hiding the weakness through which Christ could be most clearly seen."
  },
  {
    icon: "peace",
    color: GREEN,
    title: "Seeking Peace and Unity in the Church",
    body: "The five commands of verse 11 &mdash; rejoice, strive for full restoration, encourage one another, be of one mind, live in peace &mdash; describe an intentional community project, not an accidental outcome. Churches that are &lsquo;at peace&rsquo; in the sense of merely avoiding open conflict are not the same as churches that are &lsquo;at peace&rsquo; in Paul&rsquo;s sense. His peace involves active katartisis &mdash; the repair of what is broken, the setting of what is dislocated. This requires honest conversation about division, willingness to be corrected, and commitment to the unity of the community over personal preference. The promise (v.11b) &mdash; &lsquo;the God of love and peace will be with you&rsquo; &mdash; is conditional on the community&rsquo;s pursuit. God&rsquo;s presence is not withdrawn from divided churches, but his full blessing is promised where peace and love are actively pursued."
  },
  {
    icon: "trinity",
    color: PURPLE,
    title: "The Trinitarian Foundation of Christian Life",
    body: "The benediction of verse 13 is not merely a liturgical formula &mdash; it is a compressed theology of Christian existence. Christian life is Trinitarian through and through: it begins in the grace of Christ (encountered in the gospel), is rooted in the love of the Father (the eternal ground of salvation), and is sustained by the fellowship of the Spirit (the ongoing, communal, living reality of God&rsquo;s presence). The application is that Christian life cannot be flattened into a relationship with &lsquo;God in general.&rsquo; The Father&rsquo;s love, the Son&rsquo;s grace, and the Spirit&rsquo;s fellowship are distinct gifts from distinct persons of the one God. To know God more fully is to know each of these more fully &mdash; and to receive each of these gifts with distinct gratitude. The benediction is also the basis of Christian community: the fellowship the Spirit creates is the ground of all other community."
  },
  {
    icon: "authority",
    color: BLUE,
    title: "The Proper Use of Authority",
    body: "Paul&rsquo;s description of his apostolic authority in verse 10 &mdash; &lsquo;for building up, not for tearing down&rsquo; &mdash; provides a criterion for all authority exercised within the church. Authority in the church is never self-referential (maintaining one&rsquo;s position) or punitive (making people feel the consequences of their failure). It is always constructive &mdash; aimed at the restoration of the community and its members to health in Christ. Pastors, elders, and leaders of all kinds should apply this test: does the exercise of my authority actually build the people up? When correction is necessary (as it was for the Corinthians), it is always a means to restoration, never an end in itself. The church that disciplines well is the church that produces repentance and restoration, not shame and alienation."
  },
];

const videoItems = [
  { videoId: "WfI8K6GZayk", title: "2 Corinthians 13 - Paul&rsquo;s Final Warning and the Trinitarian Blessing" },
  { videoId: "nX8bz4NtMCk", title: "Examine Yourselves - Self-Examination and Assurance of Faith" },
  { videoId: "Fz5LwHe1qZk", title: "The Grace Benediction - 2 Corinthians 13:14 Explained" },
  { videoId: "pB9a4GxWqXs", title: "Crucified in Weakness, Living by Power - 2 Corinthians 13:3-4" },
];

export default function TwoCorinthians13GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [activeTheme, setActiveTheme] = useState("third-visit");
  const [activeVerse, setActiveVerse] = useState(0);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const theme = THEMES.find((t) => t.id === activeTheme) || THEMES[0];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(160deg, #0c0c1a 0%, #100d1f 60%, #07070F 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, borderRadius: 20, padding: "4px 16px", color: PURPLE, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", marginBottom: "1.2rem" }}>
            BIBLE STUDY GUIDE
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 5vw, 3rem)", fontWeight: 900, margin: "0 0 0.75rem", lineHeight: 1.15 }}>
            2 Corinthians 13
          </h1>
          <p style={{ color: MUTED, fontSize: "clamp(0.95rem, 2vw, 1.1rem)", maxWidth: 640, margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
            The conclusion of Paul&rsquo;s most personal and painful letter &mdash; ending with the most famous Trinitarian benediction in Scripture. Weakness and power, self-examination, and the grace of the Lord Jesus Christ.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            {[{ label: "Book", value: "2 Corinthians" }, { label: "Chapter", value: "13" }, { label: "Verses", value: "14" }].map((item) => (
              <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "0.5rem 1.2rem", textAlign: "center" }}>
                <div style={{ color: MUTED, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em" }}>{item.label}</div>
                <div style={{ color: TEXT, fontWeight: 800, fontSize: "1.05rem" }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: 880, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "1rem 1.4rem",
                border: "none",
                borderBottom: activeTab === tab.id ? `2px solid ${PURPLE}` : "2px solid transparent",
                background: "transparent",
                color: activeTab === tab.id ? PURPLE : MUTED,
                fontWeight: activeTab === tab.id ? 700 : 400,
                fontSize: "0.9rem",
                cursor: "pointer",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "2rem 1.25rem 4rem" }}>

        {/* ===== OVERVIEW ===== */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "2rem", marginBottom: "1.5rem" }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.4rem", margin: "0 0 1rem" }}>Overview of 2 Corinthians 13</h2>
              <p
                style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem", fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{ __html: "Second Corinthians 13 is the conclusion of what scholars widely regard as the most emotionally intense of Paul&rsquo;s surviving letters. Written around AD 55-56, 2 Corinthians is Paul&rsquo;s most personal self-disclosure &mdash; a window into a pastor&rsquo;s heart under sustained attack. His apostleship has been questioned, his appearance criticized, his refusal of financial support treated as evidence of bad faith, and &lsquo;super-apostles&rsquo; have successfully undermined his authority in the community he founded." }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem", fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{ __html: "Chapter 13 brings the letter to its climax in two movements. The first (vv.1-10) is the final warning: Paul is coming for his third visit, and this time he will not be lenient with those who have sinned and refused to repent. He inverts the community&rsquo;s test of his apostleship by commanding them to test themselves &mdash; to examine whether Christ is actually in them. He describes his apostolic authority as given for building up, not tearing down." }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.85, fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{ __html: "The second movement (vv.11-14) is the benediction: a call to rejoice, strive for restoration, encourage, agree, and live in peace &mdash; followed by the most explicitly Trinitarian sentence in the Pauline corpus. &ldquo;May the grace of the Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit be with you all.&rdquo; The letter that began in severity ends in grace." }}
              />
            </div>

            {/* Quick facts grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.85rem", marginBottom: "1.5rem" }}>
              {OVERVIEW_FACTS.map((fact) => (
                <div key={fact.key} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem 1.2rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.07em", marginBottom: "0.35rem" }}>{fact.key.toUpperCase()}</div>
                  <div
                    style={{ color: TEXT, fontWeight: 600, fontSize: "0.9rem", lineHeight: 1.5 }}
                    dangerouslySetInnerHTML={{ __html: fact.value }}
                  />
                </div>
              ))}
            </div>

            {/* Key verse callout */}
            <div style={{ background: `${PURPLE}0d`, border: `1px solid ${PURPLE}35`, borderRadius: 14, padding: "1.6rem 1.8rem", marginBottom: "1.5rem" }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em", marginBottom: "0.6rem" }}>THE TRINITARIAN BENEDICTION</div>
              <blockquote style={{ margin: 0 }}>
                <p
                  style={{ color: TEXT, fontSize: "1.1rem", fontWeight: 700, lineHeight: 1.55, fontStyle: "italic", margin: "0 0 0.5rem" }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;May the grace of the Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit be with you all.&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: "0.85rem" }}>2 Corinthians 13:14</cite>
              </blockquote>
            </div>

            {/* Chapter structure */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.8rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: "1.15rem", margin: "0 0 1.2rem" }}>Chapter Structure</h3>
              {[
                { ref: "vv.1-2", title: "The Third Visit Warning", desc: "Paul announces his coming third visit; invokes the two-or-three-witnesses rule (Deut 19:15); warns he will not spare those who sinned" },
                { ref: "vv.3-4", title: "Crucified in Weakness, Living by Power", desc: "Christ crucified in weakness yet living by God&rsquo;s power; Paul weak in him yet living by God&rsquo;s power in dealing with Corinth" },
                { ref: "vv.5-7", title: "Examine Yourselves", desc: "The test: is Christ Jesus in you? Paul trusts they will discover he has not failed the test; prays they do right even if he appears to have failed" },
                { ref: "vv.8-10", title: "Truth and Authority", desc: "Paul cannot act against the truth; prayer for their full restoration; authority given for building up not tearing down" },
                { ref: "vv.11-12", title: "Final Exhortations", desc: "Rejoice, strive for restoration, encourage, be of one mind, live in peace; God of love and peace will be with you; greet with holy kiss" },
                { ref: "v.13", title: "The Trinitarian Benediction", desc: "The grace of the Lord Jesus Christ, the love of God, the fellowship of the Holy Spirit &mdash; be with you all" },
              ].map((item) => (
                <div key={item.ref} style={{ display: "flex", gap: "1rem", marginBottom: "0.9rem", alignItems: "flex-start" }}>
                  <div style={{ background: `${PURPLE}18`, border: `1px solid ${PURPLE}40`, borderRadius: 8, padding: "3px 10px", color: PURPLE, fontSize: "0.78rem", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{item.ref}</div>
                  <div>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: "0.92rem", marginBottom: "0.2rem" }}>{item.title}</div>
                    <div
                      style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Context box */}
            <div style={{ marginTop: "1.5rem", background: `${TEAL}0d`, border: `1px solid ${TEAL}35`, borderRadius: 14, padding: "1.6rem 1.8rem" }}>
              <div style={{ color: TEAL, fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em", marginBottom: "0.6rem" }}>LETTER CONTEXT</div>
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                dangerouslySetInnerHTML={{ __html: "Second Corinthians is structurally complex because it appears to preserve what scholars call a &lsquo;painful letter&rsquo; in chapters 10-13 &mdash; a tone-shift so sharp that many commentators believe these chapters were originally separate. Whether the letter is a unity or a composite, chapters 10-13 represent Paul at his most vulnerable and most combative: defending his apostleship with ironic boasting, cataloguing his sufferings, describing his thorn in the flesh, and warning of a coming confrontation. Chapter 13 is the conclusion of this material. It is simultaneously a final warning (vv.1-10) and a benediction (vv.11-14) &mdash; the last word of the letter is grace." }}
              />
            </div>
          </div>
        )}

        {/* ===== KEY THEMES ===== */}
        {activeTab === "themes" && (
          <div>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: "1.4rem", margin: "0 0 0.4rem" }}>Key Themes in 2 Corinthians 13</h2>
            <p
              style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}
              dangerouslySetInnerHTML={{ __html: "Six interlocking themes bring Paul&rsquo;s most personal letter to its conclusion. Select a theme to explore it in depth." }}
            />
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTheme(t.id)}
                  style={{
                    padding: "0.45rem 1rem",
                    borderRadius: 20,
                    border: `1px solid ${activeTheme === t.id ? t.color : BORDER}`,
                    background: activeTheme === t.id ? `${t.color}18` : CARD,
                    color: activeTheme === t.id ? t.color : MUTED,
                    fontWeight: activeTheme === t.id ? 700 : 400,
                    fontSize: "0.82rem",
                    cursor: "pointer",
                  }}
                >
                  {t.title.replace("&rsquo;", "'").split(" ").slice(0, 3).join(" ")}
                </button>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${theme.color}35`, borderRadius: 16, padding: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.6rem" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: theme.color, flexShrink: 0 }} />
                <span style={{ color: theme.color, fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.07em" }}>{theme.verse}</span>
              </div>
              <h3
                style={{ color: theme.color, fontWeight: 800, fontSize: "1.3rem", margin: "0 0 1.1rem", lineHeight: 1.3 }}
                dangerouslySetInnerHTML={{ __html: theme.title }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.85, fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{ __html: theme.body }}
              />
            </div>

            {/* All themes summary grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.85rem", marginTop: "1.5rem" }}>
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTheme(t.id)}
                  style={{
                    background: CARD,
                    border: `1px solid ${activeTheme === t.id ? t.color + "60" : BORDER}`,
                    borderRadius: 12,
                    padding: "1rem 1.2rem",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ color: t.color, fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.05em", marginBottom: "0.3rem" }}>{t.verse}</div>
                  <div
                    style={{ color: TEXT, fontWeight: 600, fontSize: "0.9rem", lineHeight: 1.4 }}
                    dangerouslySetInnerHTML={{ __html: t.title }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ===== VERSE BY VERSE ===== */}
        {activeTab === "verse" && (
          <div>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: "1.4rem", margin: "0 0 0.4rem" }}>Verse by Verse Commentary</h2>
            <p
              style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}
              dangerouslySetInnerHTML={{ __html: "A close reading of 2 Corinthians 13 section by section. Select a passage to read the commentary." }}
            />

            {/* Verse selector */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {VERSES.map((v, i) => (
                <button
                  key={v.ref}
                  type="button"
                  onClick={() => setActiveVerse(i)}
                  style={{
                    padding: "0.4rem 0.9rem",
                    borderRadius: 8,
                    border: `1px solid ${activeVerse === i ? v.color : BORDER}`,
                    background: activeVerse === i ? `${v.color}18` : CARD,
                    color: activeVerse === i ? v.color : MUTED,
                    fontWeight: activeVerse === i ? 700 : 400,
                    fontSize: "0.82rem",
                    cursor: "pointer",
                  }}
                >
                  {v.ref}
                </button>
              ))}
            </div>

            {/* Active verse card */}
            {VERSES.map((v, i) => activeVerse === i && (
              <div key={v.ref} style={{ background: CARD, border: `1px solid ${v.color}35`, borderRadius: 16, padding: "2rem", marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ background: `${v.color}18`, border: `1px solid ${v.color}40`, borderRadius: 8, padding: "3px 10px", color: v.color, fontSize: "0.78rem", fontWeight: 700 }}>{v.ref}</span>
                  <span style={{ color: v.color, fontWeight: 700, fontSize: "0.9rem" }}>{v.heading}</span>
                </div>
                <blockquote style={{ margin: "0 0 1.2rem", padding: "1rem 1.4rem", background: `${v.color}0a`, borderLeft: `3px solid ${v.color}`, borderRadius: "0 10px 10px 0" }}>
                  <p
                    style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.96rem" }}
                    dangerouslySetInnerHTML={{ __html: v.text }}
                  />
                </blockquote>
                <div style={{ color: MUTED, fontSize: "0.88rem", fontWeight: 600, letterSpacing: "0.07em", marginBottom: "0.6rem" }}>COMMENTARY</div>
                <p
                  style={{ color: MUTED, lineHeight: 1.85, fontSize: "0.97rem", margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: v.commentary }}
                />
              </div>
            ))}

            {/* Verse navigation */}
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "space-between" }}>
              <button
                type="button"
                onClick={() => setActiveVerse((prev) => Math.max(0, prev - 1))}
                disabled={activeVerse === 0}
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.6rem 1.2rem", color: activeVerse === 0 ? BORDER : MUTED, cursor: activeVerse === 0 ? "not-allowed" : "pointer", fontWeight: 600, fontSize: "0.85rem" }}
              >
                &larr; Previous
              </button>
              <span style={{ color: MUTED, fontSize: "0.85rem", alignSelf: "center" }}>{activeVerse + 1} of {VERSES.length}</span>
              <button
                type="button"
                onClick={() => setActiveVerse((prev) => Math.min(VERSES.length - 1, prev + 1))}
                disabled={activeVerse === VERSES.length - 1}
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.6rem 1.2rem", color: activeVerse === VERSES.length - 1 ? BORDER : MUTED, cursor: activeVerse === VERSES.length - 1 ? "not-allowed" : "pointer", fontWeight: 600, fontSize: "0.85rem" }}
              >
                Next &rarr;
              </button>
            </div>

            {/* Special highlight: v.14 expanded */}
            <div style={{ marginTop: "2rem", background: `${PURPLE}0d`, border: `1px solid ${PURPLE}35`, borderRadius: 14, padding: "1.8rem" }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em", marginBottom: "0.8rem" }}>DEEP DIVE &mdash; THE TRINITARIAN STRUCTURE OF V.14</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                {[
                  { person: "The Lord Jesus Christ", gift: "Grace (charis)", color: ROSE, desc: "The free, undeserved favor of the Savior &mdash; the entry point of all salvation. Grace took the form of incarnation, crucifixion, and resurrection." },
                  { person: "God (the Father)", gift: "Love (agape)", color: GOLD, desc: "The Father&rsquo;s own love is the eternal source from which grace flows. &lsquo;God so loved the world that he gave his only Son.&rsquo; (John 3:16)" },
                  { person: "The Holy Spirit", gift: "Fellowship (koinonia)", color: TEAL, desc: "The Spirit creates communion &mdash; with God and with one another. Koinonia is participation in the divine life, the bond of the community." },
                ].map((item) => (
                  <div key={item.person} style={{ background: CARD, border: `1px solid ${item.color}30`, borderRadius: 12, padding: "1.1rem" }}>
                    <div style={{ color: item.color, fontWeight: 700, fontSize: "0.82rem", marginBottom: "0.3rem" }}>{item.person}</div>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{item.gift}</div>
                    <p
                      style={{ color: MUTED, fontSize: "0.83rem", lineHeight: 1.6, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== APPLICATION ===== */}
        {activeTab === "application" && (
          <div>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: "1.4rem", margin: "0 0 0.4rem" }}>Application</h2>
            <p
              style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.8rem" }}
              dangerouslySetInnerHTML={{ __html: "2 Corinthians 13 ends with severe warning and majestic benediction. Both have practical consequences for the life of faith and the health of the church. Here is how each theme connects to real Christian life." }}
            />

            <div style={{ display: "grid", gap: "1rem" }}>
              {APPLICATION_CARDS.map((card) => (
                <div key={card.icon} style={{ background: CARD, border: `1px solid ${card.color}30`, borderRadius: 14, padding: "1.6rem 1.8rem" }}>
                  <div style={{ color: card.color, fontWeight: 800, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{card.title}</div>
                  <p
                    style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: card.body }}
                  />
                </div>
              ))}
            </div>

            {/* Personal reflection prompts */}
            <div style={{ marginTop: "2rem", background: `${TEAL}0d`, border: `1px solid ${TEAL}35`, borderRadius: 16, padding: "1.8rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 1rem" }}>Personal Reflection Questions</h3>
              <ol style={{ margin: 0, paddingLeft: "1.3rem", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                {[
                  "Take the test of verse 5 seriously: is Christ Jesus in you? Is his presence active and transformative in your daily life, or has it become nominal?",
                  "Where in your life are you experiencing weakness? Could this be a location where God&rsquo;s power is at work rather than an obstacle to it?",
                  "Is there a broken relationship or division in your church community that calls for active katartisis &mdash; the patient work of repair?",
                  "How would your prayer life change if you prayed the Trinitarian benediction of v.14 daily &mdash; consciously receiving the grace of Christ, resting in the Father&rsquo;s love, and depending on the Spirit&rsquo;s fellowship?",
                  "What does it mean for you personally that apostolic authority is given for &lsquo;building up, not tearing down&rsquo;? How does this shape how you use whatever authority you have &mdash; as parent, leader, friend, or colleague?",
                  "Where is the &lsquo;super-apostle&rsquo; temptation in your own life &mdash; the tendency to be impressed by strength, polish, and success in ministry while being suspicious of weakness and suffering?",
                ].map((q, i) => (
                  <li key={i}>
                    <p
                      style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.93rem" }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </li>
                ))}
              </ol>
            </div>

            {/* The benediction expanded */}
            <div style={{ marginTop: "1.5rem", background: `${PURPLE}0d`, border: `1px solid ${PURPLE}35`, borderRadius: 16, padding: "1.8rem" }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em", marginBottom: "0.8rem" }}>THE BENEDICTION IN LITURGICAL HISTORY</div>
              <blockquote style={{ margin: "0 0 1rem" }}>
                <p
                  style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.75, fontSize: "1rem" }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;May the grace of the Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit be with you all.&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: "0.85rem" }}>2 Corinthians 13:14</cite>
              </blockquote>
              <p
                style={{ color: MUTED, lineHeight: 1.8, marginBottom: 0, fontSize: "0.93rem" }}
                dangerouslySetInnerHTML={{ __html: "This benediction has been used to close Christian worship services for at least seventeen hundred years. It appears in the Didache (late first century), in the liturgies of Hippolytus (early third century), and in virtually every subsequent order of service across Catholic, Orthodox, Anglican, Lutheran, Reformed, and Free Church traditions. Its persistence is not accidental &mdash; it is the most compact Trinitarian summary in Scripture, and it ends a letter about community conflict with a reminder of the ultimate ground of Christian community: not human agreement but Trinitarian grace. To close worship with this benediction is to send the congregation back into the world carrying the grace of Christ, rooted in the Father&rsquo;s love, held together by the Spirit&rsquo;s fellowship." }}
              />
            </div>

            {/* Comparison with Hebrews 13 */}
            <div style={{ marginTop: "1.5rem", background: `${BLUE}0d`, border: `1px solid ${BLUE}30`, borderRadius: 14, padding: "1.6rem 1.8rem" }}>
              <div style={{ color: BLUE, fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em", marginBottom: "0.6rem" }}>COMPARE &mdash; TWO LETTER CONCLUSIONS</div>
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.93rem" }}
                dangerouslySetInnerHTML={{ __html: "Both Hebrews 13 and 2 Corinthians 13 are the final chapters of major epistles that end with practical exhortations and blessing. Hebrews 13 concludes with the great benediction of vv.20-21: &ldquo;May the God of peace, who through the blood of the eternal covenant brought back from the dead our Lord Jesus, that great Shepherd of the sheep, equip you with everything good for doing his will.&rdquo; Second Corinthians 13 ends with the Trinitarian benediction of v.14. Together they remind us that the New Testament letters &mdash; however theologically dense and pastorally urgent their bodies may be &mdash; always end in blessing. The final word of apostolic ministry is not warning but grace." }}
              />
            </div>
          </div>
        )}

        {/* ===== VIDEO SECTION (always visible at bottom) ===== */}
        <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: `1px solid ${BORDER}` }}>
          <h2 style={{ color: TEXT, fontWeight: 800, fontSize: "1.3rem", margin: "0 0 0.4rem" }}>Teaching Videos</h2>
          <p
            style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1.5rem" }}
            dangerouslySetInnerHTML={{ __html: "Video teachings on 2 Corinthians 13 &mdash; covering Paul&rsquo;s final warning, self-examination, the weakness-power paradox, and the Trinitarian benediction." }}
          />
          <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.2rem" }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "0.9rem 1rem" }}>
                  <p
                    style={{ color: TEXT, fontWeight: 600, fontSize: "0.9rem", margin: 0, lineHeight: 1.4 }}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                </div>
              </div>
            ))}
          </section>
        </div>

      </div>
    </div>
  );
}
