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
  { videoId: "0DhzJc-r0LA", title: "2 Peter 3 - The Day of the Lord" },
  { videoId: "XBUAVHBWs_A", title: "God's Patience and the Second Coming 2 Peter 3" },
  { videoId: "dZVTqVWETjU", title: "Scoffers and the End Times - 2 Peter 3" },
  { videoId: "J8f3lBQ0FdE", title: "Growing in Grace - 2 Peter 3:17-18" },
];

const VERSE_SECTIONS = [
  {
    id: "vs1",
    ref: "2 Peter 3:1-4",
    title: "Scoffers Who Deny the Parousia",
    color: ROSE,
    content:
      "This is now the second letter that I am writing to you, beloved. In both of them I am stirring up your sincere mind by way of reminder, that you should remember the predictions of the holy prophets and the commandment of the Lord and Savior through your apostles, knowing this first of all, that scoffers will come in the last days with scoffing, following their own sinful desires. They will say, 'Where is the promise of his coming? For ever since the fathers fell asleep, all things are continuing as they were from the beginning of creation.' Peter opens chapter 3 with a pastoral reminder: his letter is a deliberate act of memory-stirring. The Greek word for scoffers is empaigtes &mdash; one who mocks and ridicules. In the context of 2 Peter, these scoffers are not outside pagans but false teachers within the community who use intellectual sophistication to undermine apostolic teaching. Their central argument is what philosophers call 'uniformitarianism': since the natural order has continued unchanged since creation, there is no reason to expect a dramatic intervention by God in history. The argument sounds reasonable. It sounds scientific. But Peter will show that it ignores crucial data points: the creation event itself, the flood, and the promised dissolution of the present order. The scoffers 'follow their own sinful desires' &mdash; their theology is not dispassionate inquiry but desire-driven rationalization. They want a world without judgment, and they construct an argument to produce one. This is the anatomy of theological error in every age: intellectual scaffolding erected to protect a preferred way of life.",
  },
  {
    id: "vs2",
    ref: "2 Peter 3:5-7",
    title: "The Flood as Proof of Divine Intervention",
    color: TEAL,
    content:
      "For they deliberately overlook this fact, that the heavens existed long ago, and the earth was formed out of water and through water by the word of God, and that by means of these the world that then existed was deluged with water and perished. But by the same word the heavens and earth that now exist are stored up for fire, being kept until the day of judgment and destruction of the ungodly. The scoffers' claim of unbroken continuity is described as deliberate oversight: they 'willingly are ignorant' (KJV). This is not innocent ignorance but culpable blindness. Peter points to two events that shatter the uniformitarian assumption: the original creation and the Noahic flood. Both demonstrate that God intervenes in history with world-altering power, that the natural order is not self-sustaining but dependent on the divine word that called it into being and can dissolve it. The creation was formed 'out of water and through water by the word of God' &mdash; a reference to the primordial waters of Genesis 1 and the role of the divine command in bringing order from chaos. The same waters that were gathered and organized at creation became the instrument of the flood's destruction. And now, Peter announces, the present heavens and earth are 'stored up for fire' &mdash; held in reserve, reserved for the eschatological fire of the Day of the Lord. The symmetry is deliberate: water in the past, fire in the future, both by the same word of the same God.",
  },
  {
    id: "vs3",
    ref: "2 Peter 3:8-9",
    title: "A Thousand Years as a Day: God's Perspective on Time",
    color: PURPLE,
    content:
      "But do not overlook this one fact, beloved, that with the Lord one day is as a thousand years, and a thousand years as one day. The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance. Verse 8 is one of the most often quoted and most often misunderstood verses in 2 Peter. Peter is not doing mathematics &mdash; he is not teaching that a divine 'day' equals a human millennium. He is making a qualitative point about God's relationship to time. God does not experience time as creatures do; he is not bound by the sequential passing of moments. For God, vast stretches of time that feel to us like indefinite delay are no obstacle to the fulfillment of his promises. The quotation echoes Psalm 90:4 &mdash; Moses' meditation on the eternal God in contrast to mortal human beings. The theological implication is crucial: the apparent delay of Christ's return is not evidence that the promise is false, but evidence that God operates from a different relationship to time than we assume. Verse 9 then provides the pastoral and theological interpretation of the delay: it is not slowness but makrothumia &mdash; patience, long-suffering. The Greek word denotes a sustained willingness to wait when action could be taken. God is not unable to bring the Day; he is unwilling to bring it before the fullness of the appointed number has come to repentance. The delay is an expression of grace, not failure.",
  },
  {
    id: "vs4",
    ref: "2 Peter 3:10",
    title: "The Day of the Lord: Coming Like a Thief",
    color: GOLD,
    content:
      "But the day of the Lord will come like a thief, and then the heavens will pass away with a roar, and the heavenly bodies will be burned up and dissolved, and the earth and the works that are done on it will be exposed. Verse 10 is one of the most cosmologically dramatic verses in the New Testament. The Day of the Lord &mdash; a phrase drawn from the prophetic tradition of Isaiah, Joel, Amos, and Zephaniah &mdash; arrives without warning, 'like a thief.' The imagery of the thief is shared with Jesus's own teaching (Matthew 24:43-44; Luke 12:39-40) and with Paul (1 Thessalonians 5:2-4). The point is not the thief's malice but his unexpected arrival. The righteous are not caught off guard in the sense of being unprepared &mdash; they are warned and live in preparedness. But the Day comes without an announced schedule. The cosmological description that follows is staggering: the heavens pass away 'with a roar' (Greek: rhoizedon, a word used of rushing wind, whistling arrows, or crashing waves), the stoicheia (heavenly bodies or elemental substances) are dissolved by burning, and the earth and its 'works' (human achievements, civilizations, structures) are 'exposed' &mdash; laid bare, revealed for what they truly are before the judgment of God. The precise meaning of the 'earth being exposed' (Greek: heurethesetai, 'will be found') has generated considerable textual and interpretive discussion, but the sense is clear: nothing will be hidden; everything will be brought into the light of divine scrutiny.",
  },
  {
    id: "vs5",
    ref: "2 Peter 3:11-13",
    title: "The Dissolution of Elements and the Hope of New Creation",
    color: GREEN,
    content:
      "Since all these things are thus to be dissolved, what sort of people ought you to be in lives of holiness and godliness, waiting for and hastening the coming of the day of God, because of which the heavens will be set on fire and dissolved, and the heavenly bodies will melt as they burn! But according to his promise we are waiting for new heavens and a new earth in which righteousness dwells. Verses 11-13 contain the ethical heart of the chapter. The dissolution of the cosmos is not a cause for despair but a reason for holy living. Peter's question &mdash; 'what sort of people ought you to be?' &mdash; is one of the most practically urgent questions in the New Testament. If everything material and temporary will be dissolved, what possesses lasting value? The answer is the character of the person: holiness and godliness. These qualities are not dissolved when the stoicheia dissolve; they are precisely what survives into the new order. The phrase 'waiting for and hastening the coming of the day of God' is remarkable. Believers are not merely passive spectators of eschatological events; they participate in 'hastening' the Day through their prayer (cf. Matthew 6:10, 'Your kingdom come'), their repentance, and their proclamation of the gospel that brings people to repentance. The chapter's climax &mdash; 'new heavens and a new earth in which righteousness dwells' &mdash; is drawn from Isaiah 65:17 and 66:22. This is not annihilation but renewal: the present created order, cleansed and transformed, becomes the dwelling place of righteousness. Peter's eschatology is not escapism but transformation.",
  },
  {
    id: "vs6",
    ref: "2 Peter 3:14-16",
    title: "The Patience of the Lord Is Salvation: Paul's Letters as Scripture",
    color: TEAL,
    content:
      "Therefore, beloved, since you are waiting for these things, be diligent to be found by him without spot or blemish, and at peace. And count the patience of our Lord as salvation, just as our beloved brother Paul also wrote to you according to the wisdom given him, as he does in all his letters when he speaks in these matters. There are some things in them that are hard to understand, which the ignorant and unstable twist to their own destruction, as they do the other Scriptures. Verse 14 opens with a practical exhortation grounded in eschatological hope. Those waiting for the new heavens and new earth are called to be 'without spot or blemish, and at peace' &mdash; language that echoes the sacrificial imagery of the Old Testament. The believer's posture toward the Day is active purification, not passive waiting. Verse 15 contains one of the most theologically important statements in the New Testament: Peter's reframing of the delay as salvation. The time that appears to be God's slowness is actually God's patience, and that patience is the very means by which salvation comes to those who repent. The delay is grace extended. Peter then does something remarkable: he cites Paul's letters as Scripture, placing them alongside 'the other Scriptures' (v.16). This is one of the earliest Christian acknowledgments that Paul's letters carry scriptural authority. Peter also acknowledges that Paul writes difficult things that the 'ignorant and unstable' twist to their destruction &mdash; an important pastoral note that difficulty in Scripture is not a reason to dismiss it but a reason for careful, humble interpretation.",
  },
  {
    id: "vs7",
    ref: "2 Peter 3:17-18",
    title: "Growing in Grace and Knowledge: The Final Charge",
    color: PURPLE,
    content:
      "You therefore, beloved, knowing this beforehand, take care that you are not carried away with the error of lawless people and lose your own stability. But grow in the grace and knowledge of our Lord and Savior Jesus Christ. To him be the glory both now and to the day of eternity. Amen. The letter closes with a double charge that encapsulates the whole pastoral purpose of 2 Peter. First, the negative: beware of being 'carried away' by the error of the lawless. The Greek for 'carried away' (sunapachthentes) is a strong word describing being dragged along by a powerful current. The false teachers represent a spiritual riptide. Those who are not grounded in the truth of the prophetic word and the apostolic teaching are vulnerable to being swept away. Second, the positive: grow in the grace and knowledge (epignosis) of Jesus Christ. This epignosis &mdash; the deep, experiential, transforming knowledge of Christ &mdash; is the running theme of 2 Peter from its opening verse. It is the channel of divine provision (1:3), the goal of the ladder of virtue (1:5-7), and now the safeguard against eschatological error. To know Christ more deeply is to be more firmly anchored against the currents of false teaching and the despair induced by apparent divine delay. The doxology &mdash; 'to him be the glory both now and to the day of eternity' &mdash; gives the chapter a proper eschatological frame: all of history, from the present moment to the Day of the Lord and beyond, belongs to Christ and redounds to his glory.",
  },
];

const THEMES = [
  {
    color: ROSE,
    title: "Empaigtes: Scoffers Who Deny the Second Coming (vv.1-7)",
    body:
      "The Greek word empaigtes (scoffer, mocker) appears only here and in Jude 1:18 in the New Testament, drawing on the Hebrew prophetic tradition's critique of those who mock the word of God (Proverbs 1:22; Isaiah 28:14). The scoffers in 2 Peter 3 are not external enemies but internal false teachers who use intellectual argument to undermine eschatological hope. Their argument &mdash; 'where is the promise of his coming? Everything continues as before' &mdash; is a form of theological uniformitarianism that ignores the evidence of divine intervention in the past (creation, the flood) and the promise of divine intervention in the future (the Day of the Lord). The NT consistently warns that the last days will be characterized by this kind of theological erosion from within: 1 Timothy 4:1, 2 Timothy 3:1-5, Jude 17-18 all describe a pattern of apostasy in which teachers who once appeared orthodox use their influence to draw people away from apostolic teaching. The antidote Peter prescribes is not more sophisticated counter-arguments but a return to remembrance: 'remember the predictions of the holy prophets and the commandment of the Lord and Savior through your apostles' (3:2). The scoffers have a short memory; the faithful must cultivate a long one.",
  },
  {
    color: PURPLE,
    title: "Makrothumia: God's Patience as the Meaning of the Delay (vv.8-9)",
    body:
      "The Greek word makrothumia (patience, long-suffering, forbearance) is used throughout the New Testament to describe both God's character and the quality required of believers in the face of suffering and opposition. In 2 Peter 3:9 it describes God's deliberate choice to extend time rather than bring immediate judgment, because he is 'not wishing that any should perish, but that all should reach repentance.' This verse has been discussed extensively in theological debates about predestination and the universal will of God. Whatever one's position on those debates, the pastoral function of the verse is clear: the apparent delay of Christ's return is not a problem to be explained away but a gift to be received with gratitude. Every day of history is a day in which repentance is still possible, in which the gospel is still being proclaimed, in which the patience of God is still being extended. Romans 2:4 makes the same connection: 'God's kindness is meant to lead you to repentance.' The delay is not divine forgetfulness or impotence; it is makrothumia &mdash; the patient love of a God who could bring the age to a close at any moment but chooses to wait.",
  },
  {
    color: GOLD,
    title: "Parousia: The Coming of the Lord as the Horizon of All Christian Life (vv.10-13)",
    body:
      "The Greek word parousia (coming, presence, arrival) was used in the Hellenistic world to describe the official visit of a king or emperor to a city &mdash; an event that required preparation, honor, and realignment of all civic life around the visitor's coming. In the New Testament, parousia is the standard term for the second coming of Christ (Matthew 24:3, 27, 37, 39; 1 Thessalonians 2:19; 4:15; 5:23; James 5:7-8). Its use in 2 Peter 3:4 (the scoffers ask 'Where is the promise of his coming?') and its implicit presence throughout the chapter establishes the parousia as the organizing eschatological event. The Day of the Lord arrives 'like a thief' &mdash; unexpected in its timing but not in its nature or certainty. Christians are not caught off guard by the content of what the Day will bring, but they cannot predict its timing. The proper response to the parousia's certainty and the uncertainty of its timing is the life described in verses 11-14: holiness, godliness, peace, and active waiting that 'hastens' the Day through prayer and proclamation.",
  },
  {
    color: TEAL,
    title: "Stoicheia: The Dissolution of the Elements (vv.10-12)",
    body:
      "The Greek word stoicheia (elements, basic components) appears in 2 Peter 3:10, 12 to describe what will be dissolved by fire at the Day of the Lord. In Greek philosophy, the stoicheia were the four fundamental components of the physical world: earth, water, fire, and air. In other New Testament uses (Galatians 4:3, 9; Colossians 2:8, 20), stoicheia can refer to the basic principles or elemental spirits that govern the present age. In 2 Peter 3, the most natural reading is physical &mdash; the basic components of the present created order will be dissolved. But the point is not scientific cosmology; it is theological: the present order, however impressive and permanent it appears, is temporary. It is not self-existent; it was made by the word of God and it will be dissolved by that same word. The stoicheia's dissolution is not annihilation but the clearing of the ground for the new heavens and new earth. The fire that dissolves is purifying rather than annihilating &mdash; as Romans 8:21 speaks of creation being 'set free from its bondage to corruption,' 2 Peter 3 envisions the present order being transformed through judgment into the new order.",
  },
  {
    color: GREEN,
    title: "Epignosis: Growing in Deep Knowledge of Christ (vv.17-18)",
    body:
      "The Greek word epignosis (full knowledge, deep recognition, experiential knowing) appears at the beginning of 2 Peter (1:2, 3, 8) and at its very close (3:18). Peter uses epignosis rather than the simpler gnosis to emphasize a quality of knowing that is relational, transforming, and progressive rather than merely informational. To have epignosis of Jesus Christ is not to possess facts about him but to know him in the way that a person is known by someone who loves them &mdash; with growing intimacy, deepening trust, and increasing conformity of character. The closing command 'grow in the grace and knowledge of our Lord and Savior Jesus Christ' (3:18) is the positive counterpart to the warning against being 'carried away by the error of lawless people' (3:17). Doctrinal stability and eschatological faithfulness are not primarily achieved by better arguments against false teaching; they are achieved by the deepening of a relationship with Christ that makes his word more authoritative, his character more compelling, and his coming more eagerly anticipated. The false teachers of 2 Peter have lost this epignosis &mdash; they have reverted to the corruption of the world they once escaped (2:20-22). The safeguard is not defensive but progressive: grow.",
  },
];

const REFLECTION_PROMPTS = [
  {
    icon: "01",
    color: ROSE,
    title: "Confronting the Scoffer's Argument",
    body: "The scoffer's logic is seductive: 'Nothing has changed since the beginning; why expect God to intervene?' Where do you find this argument most persuasive or most troubling? What would you say to someone who uses it to dismiss the gospel?",
  },
  {
    icon: "02",
    color: PURPLE,
    title: "Receiving the Delay as Grace",
    body: "Peter says the patience of God is salvation &mdash; the delay of the Day is extended mercy. Who in your life is still in that window of grace? How does reframing the delay as makrothumia change how you pray for them?",
  },
  {
    icon: "03",
    color: GOLD,
    title: "What Sort of People Ought We to Be?",
    body: "Peter's question in verse 11 is one of the most searching in Scripture. If you genuinely believed the present order was temporary and the new heavens and new earth were coming, what would change about your priorities, your time, your money, and your character?",
  },
  {
    icon: "04",
    color: GREEN,
    title: "Growing in Grace and Knowledge",
    body: "The closing command is to grow. What does growth in the grace and epignosis of Jesus Christ look like for you in this season? What practices or relationships are most helping you know him more deeply?",
  },
  {
    icon: "05",
    color: TEAL,
    title: "Hastening the Day Through Holy Living",
    body: "Peter says believers 'wait for and hasten' the Day of God (v.12). The early church understood this to include evangelism, prayer, and holy living as ways of participating in the unfolding of God's redemptive purposes. How does the awareness of eternity shape the urgency of your witness?",
  },
];

export default function TwoPeter3GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openSection, setOpenSection] = useState<string | null>(null);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px 60px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: `${PURPLE}22`, border: `1px solid ${PURPLE}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: PURPLE, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
            New Testament &middot; 2 Peter 3
          </div>
          <h1 style={{ color: TEXT, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, margin: "0 0 12px", lineHeight: 1.2 }}>
            2 Peter 3: The Day of the Lord, God&rsquo;s Patience, and Holy Living
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: "0 0 20px", maxWidth: 680 }}
            dangerouslySetInnerHTML={{ __html: "Peter&rsquo;s final chapter addresses scoffers who deny Christ&rsquo;s coming, reveals God&rsquo;s relationship to time and the depth of his makrothumia, describes the dissolution of the stoicheia on the Day of the Lord, and calls believers to holy living, active waiting, and growth in the epignosis of Jesus Christ." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
            {[
              { label: "Book", value: "2 Peter", color: PURPLE },
              { label: "Chapter", value: "3 (18 verses)", color: TEAL },
              { label: "Key Word", value: "Makrothumia", color: GOLD },
              { label: "Theme", value: "Eschatology", color: GREEN },
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
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Chapter Overview</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The third chapter of 2 Peter is one of the most concentrated eschatological passages in the entire New Testament. Writing near the end of his life, Peter has two goals: to arm his readers against false teachers who deny the second coming of Christ, and to anchor their daily lives in the certain hope of that coming. He achieves both goals through a single, sustained argument that moves from the scoffers&rsquo; challenge to the theological response to the practical implications." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The chapter divides into four movements: (1) The Challenge of the Scoffers (vv.1&ndash;7): false teachers who deny Christ&rsquo;s return on the grounds that history has always continued unchanged; (2) God&rsquo;s Relationship to Time (vv.8&ndash;9): the divine perspective on time and the meaning of the apparent delay as makrothumia &mdash; patient grace; (3) The Day of the Lord (vv.10&ndash;13): the certain, sudden arrival of the Day, the dissolution of the stoicheia, and the hope of new heavens and new earth; (4) The Response of Holy Living (vv.14&ndash;18): the practical life of those who live in the light of eternity, including Peter&rsquo;s remarkable citation of Paul&rsquo;s letters as Scripture." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "What makes 2 Peter 3 remarkable is the depth of its pastoral wisdom. Peter does not merely refute the scoffers&rsquo; argument; he reframes the apparent problem (the delay) as the very mechanism of salvation (makrothumia). And he does not merely assert that Christ is coming; he asks the most searching question a pastor can ask: &lsquo;What sort of people ought you to be?&rsquo; (v.11). The chapter demands not just correct eschatology but transformed living." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Context in 2 Peter</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Chapter 3 is the climax and conclusion of 2 Peter. Chapter 1 established the foundation: God has granted everything needed for life and godliness, and Scripture comes from God through the Spirit-carried human authors. Chapter 2 described in vivid and alarming detail the false teachers who have entered the community &mdash; their character, their method, and their certain doom. Chapter 3 now addresses the specific eschatological error these false teachers promote: the denial of Christ&rsquo;s return." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The connection between the three chapters is important. The false teachers of chapter 2 are morally characterized by following &lsquo;their own sinful desires&rsquo; (3:3). This is the same phrase used in 2:10 (those who &lsquo;indulge in the lust of defiling passion&rsquo;). Eschatological error and moral license are connected: a theology that denies coming judgment is convenient for those who wish to live without accountability. Chapter 3&rsquo;s remedy &mdash; holy living in light of the Day &mdash; is the direct antidote to chapter 2&rsquo;s portrait of moral ruin." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Key Greek Words</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { word: "Empaigtes", transliteration: "em-PAIG-tes", meaning: "Scoffer, mocker, one who ridicules", verse: "v.3 &mdash; scoffers will come in the last days", color: ROSE },
                  { word: "Parousia", transliteration: "pa-ROO-see-ah", meaning: "Coming, presence, arrival", verse: "v.4 &mdash; where is the promise of his coming?", color: PURPLE },
                  { word: "Makrothumia", transliteration: "mak-ro-thu-MEE-ah", meaning: "Patience, long-suffering, forbearance", verse: "v.9 &mdash; the Lord is patient toward you", color: GOLD },
                  { word: "Stoicheia", transliteration: "stoi-KAY-ah", meaning: "Elements, basic components, elemental substances", verse: "vv.10,12 &mdash; the elements dissolved with fire", color: TEAL },
                  { word: "Epignosis", transliteration: "ep-IG-no-sis", meaning: "Full knowledge, deep recognition, experiential knowing", verse: "v.18 &mdash; grow in the knowledge of our Lord", color: GREEN },
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
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes in 2 Peter 3</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "2 Peter 3 addresses five major theological themes that are foundational to Christian eschatology: the nature and danger of theological scoffing, God&rsquo;s patient grace, the parousia as the horizon of Christian life, the dissolution and renewal of creation, and the growing knowledge of Christ as the anchor of eschatological faithfulness." }}
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
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>The Eschatological Sequence in 2 Peter 3</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Peter&rsquo;s eschatological argument in chapter 3 follows a clear logical sequence:" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
                {[
                  { step: "1", label: "Scoffers deny the coming (vv.3-4)", desc: "The challenge: uniformitarianism argues against divine intervention", color: ROSE },
                  { step: "2", label: "The flood refutes uniformitarianism (vv.5-7)", desc: "God has intervened before; the present order is stored up for fire", color: GOLD },
                  { step: "3", label: "The delay is makrothumia (vv.8-9)", desc: "God&rsquo;s patience is salvation; the delay is extended mercy", color: PURPLE },
                  { step: "4", label: "The Day comes suddenly (v.10)", desc: "Like a thief: certain, unannounced, complete in its revelation", color: TEAL },
                  { step: "5", label: "Holy living in light of eternity (vv.11-18)", desc: "The eschatological hope demands transformed character now", color: GREEN },
                ].map(item => (
                  <div key={item.step} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: BG, borderRadius: 10, padding: 14 }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${item.color}22`, border: `2px solid ${item.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, fontWeight: 800, fontSize: 14, flexShrink: 0 }}>{item.step}</div>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: item.label }} />
                      <div style={{ color: MUTED, fontSize: 13 }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse: 2 Peter 3</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "2 Peter 3&rsquo;s eighteen verses are grouped below by thematic unit. Click any section to expand the commentary. All verses 1&ndash;18 are covered in the accordion below." }}
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
                {["2 Peter 3:3", "2 Peter 3:8", "2 Peter 3:9", "2 Peter 3:10", "2 Peter 3:11", "2 Peter 3:13", "2 Peter 3:15", "2 Peter 3:18"].map(ref => (
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
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Application: How Awareness of Christ&rsquo;s Return Shapes How We Live Today</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "2 Peter 3 raises the fundamental question that every generation of Christians must answer: if Christ is truly coming again, if the present order is genuinely temporary, and if the Day of the Lord is as certain as the flood was in Noah&rsquo;s time &mdash; how does that change the way we live right now? Peter&rsquo;s own answer is not abstract: &lsquo;What sort of people ought you to be in lives of holiness and godliness?&rsquo; (v.11). The chapter demands not just correct eschatology but transformed living." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The world Peter describes is our world: full of people who find the idea of divine judgment implausible, who treat the delay of Christ&rsquo;s return as evidence that it will never come, and who construct sophisticated intellectual frameworks to protect a way of life that does not want to be accountable. The church in every generation faces the empaigtes in various forms &mdash; not always as open mockers, but as voices that make the eternal seem implausible and the temporary seem all-important." }}
              />
            </div>

            {REFLECTION_PROMPTS.map(item => (
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

            {/* Holy Living in Light of Eternity Reflection Tool */}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 14, padding: 28, marginTop: 8, marginBottom: 20 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, margin: "0 0 6px" }}>Holy Living in Light of Eternity: A Reflection Tool</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>
                Peter asks &lsquo;what sort of people ought you to be?&rsquo; Use this framework to examine how awareness of eternity reshapes the way you live. Consider each area honestly.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { area: "Time", question: "If the present order is temporary, how am I investing my time in what endures?", color: PURPLE },
                  { area: "Money", question: "Am I laying up treasures on earth that will be dissolved, or investing in the kingdom that cannot be shaken?", color: GOLD },
                  { area: "Relationships", question: "Am I living in peace with others (v.14) in a way that reflects the coming peace of the new creation?", color: GREEN },
                  { area: "Character", question: "Am I pursuing holiness and godliness (v.11) as the qualities that will survive into the new heavens and new earth?", color: TEAL },
                  { area: "Witness", question: "Am I participating in the hastening of the Day through prayer, proclamation, and living as a sign of the coming kingdom?", color: ROSE },
                ].map(item => (
                  <div key={item.area} style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${item.color}` }}>
                    <div style={{ color: item.color, fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>{item.area}</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.question}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 8 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Teaching Videos</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>
                Video resources for further study and teaching on 2 Peter 3.
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
