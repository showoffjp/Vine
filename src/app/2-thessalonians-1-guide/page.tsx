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
  { videoId: "hKqGFkKCMbg", title: "2 Thessalonians Overview -- BibleProject" },
  { videoId: "3LVNB9PWUUE", title: "2 Thessalonians 1 -- Judgment and Glory" },
  { videoId: "Gb2xBLQg8YQ", title: "God&rsquo;s Righteous Judgment -- 2 Thessalonians 1:5&ndash;10" },
  { videoId: "8UvBf3j3OW4", title: "Glorified in His Saints -- 2 Thess 1:10" },
];

const VERSE_ITEMS = [
  {
    ref: "2 Thessalonians 1:1&ndash;2",
    heading: "The Greeting",
    color: GOLD,
    body: "Second Thessalonians opens with an almost identical greeting to the first letter: &ldquo;Paul, Silvanus, and Timothy, to the church of the Thessalonians in God our Father and the Lord Jesus Christ: Grace to you and peace from God our Father and the Lord Jesus Christ.&rdquo; The slight expansion &mdash; &ldquo;from God our Father&rdquo; added to the standard greeting &mdash; is not accidental. The letter is about to deal with suffering, judgment, and the end of history; it begins by anchoring the reader in the source of grace and peace. The three missionary authors are still the same; the pastoral relationship is continuous. The church is still defined by its location &ldquo;in God our Father and the Lord Jesus Christ&rdquo; &mdash; a community constituted not by geography or ethnicity but by its participation in the divine life. Grace (charis) and peace (eirene) &mdash; the unmerited divine favor and the resulting wholeness &mdash; are not merely wished for the Thessalonians but declared as coming from specific persons: God the Father and the Lord Jesus Christ.",
  },
  {
    ref: "2 Thessalonians 1:3&ndash;4",
    heading: "Thanksgiving for Growing Faith Under Persecution",
    color: GREEN,
    body: "&ldquo;We ought always to give thanks to God for you, brothers, as is right, because your faith is growing abundantly and the love of every one of you for one another is increasing. Therefore we ourselves boast about you in the churches of God for your steadfastness and faith in all your persecutions and in the afflictions that you are enduring.&rdquo; Paul&rsquo;s language here is more theological than in 1 Thessalonians 1:3 &mdash; he says they &ldquo;ought&rdquo; (opheilomen) to give thanks, framing it as obligation grounded in what God has done rather than mere emotional response. The faith and love he celebrated in the first letter have not merely persisted under persecution; they have grown and increased. &ldquo;Growing abundantly&rdquo; (huperauxanei) is a compound verb suggesting superabundant, overflowing growth &mdash; Paul is astonished at the degree of faith-growth evident in a persecuted community. He boasts about them &ldquo;in the churches of God&rdquo; &mdash; the Thessalonians have become a testimony not only in Macedonia and Achaia but throughout the network of Pauline churches.",
  },
  {
    ref: "2 Thessalonians 1:5&ndash;7",
    heading: "Evidence of Righteous Judgment -- Relief for the Afflicted",
    color: TEAL,
    body: "&ldquo;This is evidence of the righteous judgment of God, that you may be considered worthy of the kingdom of God, for which you are also suffering &mdash; since indeed God considers it just to repay with affliction those who afflict you, and to grant relief to you who are afflicted as well as to us, when the Lord Jesus is revealed from heaven with his mighty angels in flaming fire.&rdquo; The logic here is compressed and profound. The Thessalonians&rsquo; persecuted faith is itself &ldquo;evidence&rdquo; (endeigma) of divine judgment &mdash; not a sign that God has abandoned them but a sign that the judgment is operating even now. Their endurance under affliction is the evidence that they are &ldquo;counted worthy of the kingdom.&rdquo; God&rsquo;s justice works in two directions: it brings affliction on those who afflict his people, and it brings &ldquo;relief&rdquo; (anesin &mdash; literally, release or relaxation of pressure) to those who have been afflicted. The timing of that relief is eschatological &mdash; it comes when the Lord Jesus is revealed from heaven with his mighty angels. The revelation of Jesus is not only comfort to the persecuted; it is the moment when perfect divine justice is visibly enacted.",
  },
  {
    ref: "2 Thessalonians 1:8&ndash;10",
    heading: "Flaming Fire and Eternal Destruction -- Glorified in His Saints",
    color: ROSE,
    body: "&ldquo;In flaming fire, inflicting vengeance on those who do not know God and on those who do not obey the gospel of our Lord Jesus. They will suffer the punishment of eternal destruction, away from the presence of the Lord and from the glory of his might, when he comes on that day to be glorified in his saints, and to be marveled at among all who have believed, because our testimony to you was believed.&rdquo; These verses contain some of the most sobering language in the New Testament alongside some of the most glorious. The judgment falls on two groups: those who &ldquo;do not know God&rdquo; (the language of covenantal rejection) and those who &ldquo;do not obey the gospel&rdquo; (moral and volitional rejection of Christ). The punishment &mdash; &ldquo;eternal destruction, away from the presence of the Lord&rdquo; &mdash; is best understood not as annihilation but as permanent exclusion from the divine presence, which is itself the source of all good. In the same moment, Christ is &ldquo;glorified in his saints&rdquo; &mdash; the people of God become the theater in which the glory of Jesus is displayed. The return of Christ is simultaneously the worst news and the best news: devastating judgment for those who rejected him, and the full revelation of glory for those who believed.",
  },
  {
    ref: "2 Thessalonians 1:11&ndash;12",
    heading: "Prayer for Worthiness and Glorification",
    color: PURPLE,
    body: "&ldquo;To this end we always pray for you, that our God may make you worthy of his calling and may fulfill every resolve for good and every work of faith by his power, so that the name of our Lord Jesus may be glorified in you, and you in him, according to the grace of our God and the Lord Jesus Christ.&rdquo; Paul concludes the chapter not with a command but with a prayer. The pastoral response to solemn eschatological teaching is intercession. He prays that God would &ldquo;make you worthy of his calling&rdquo; &mdash; worthiness is not self-generated but divinely produced. The goal is mutual glorification: the name of Jesus glorified in them, and they glorified in him. This mutual glorification anticipates what verse 10 describes at the return of Christ &mdash; Paul is praying that present life in the Thessalonians would be a foretaste of eschatological glory. &ldquo;According to the grace of our God and the Lord Jesus Christ&rdquo; &mdash; the whole movement from calling to glorification operates not by human merit but by divine grace.",
  },
];

const THEME_ITEMS = [
  {
    title: "Faith Growing Abundantly Under Affliction",
    color: GREEN,
    body: "The defining feature of 2 Thessalonians 1 is the theological claim that persecuted faith can not only survive but grow abundantly. The Greek verb huperauxanei (1:3) is unique in the New Testament &mdash; Paul reaches for a compound word to capture a growth that exceeds ordinary expectation. This is not the comfortable expansion of a church in favorable conditions; it is the supernatural escalation of faith under precisely the conditions most likely to erode it. Paul&rsquo;s theology of suffering does not offer a path around affliction but through it: the fire of persecution, rather than destroying the Thessalonians&rsquo; faith, has intensified it. The theological claim is stark: the same suffering that the persecutors intend as destruction becomes the instrument of spiritual deepening in those who are being persecuted. This is the cruciform logic that Paul articulates across his letters &mdash; what appears as defeat from the outside is, in the economy of God, the very mechanism of growth.",
  },
  {
    title: "The Persecuted as Counted Worthy of the Kingdom",
    color: TEAL,
    body: "Paul makes a striking claim in 1:5: the Thessalonians&rsquo; suffering is itself &ldquo;evidence of the righteous judgment of God,&rdquo; specifically in that it demonstrates they are being &ldquo;considered worthy of the kingdom of God.&rdquo; This is not a meritocratic claim &mdash; worthiness here is not achievement but divine verdict. The eschatological kingdom of God is the inheritance of those whose faith has been proven genuine; and persecution, paradoxically, is the furnace in which that genuineness is demonstrated. The phrase &ldquo;for which you are also suffering&rdquo; suggests that suffering and kingdom are causally linked in a way that goes beyond mere correlation. To suffer for the kingdom is to be in a profound sense already participating in it. This is why martyrdom theology in early Christianity was not a celebration of death but an affirmation of kingdom dignity: those who suffer with Christ are participating in the same pattern by which he entered his glory.",
  },
  {
    title: "God&rsquo;s Righteous Judgment",
    color: ROSE,
    body: "Second Thessalonians 1 is one of the clearest statements of divine judgment in the Pauline letters. Paul does not soften the language: those who afflict God&rsquo;s people will receive affliction; those who do not know God and do not obey the gospel will suffer &ldquo;eternal destruction, away from the presence of the Lord.&rdquo; The judgment is described as &ldquo;righteous&rdquo; (dikaias) &mdash; it is not arbitrary or vindictive but the perfect expression of divine justice. In a context where the Thessalonians were experiencing real persecution from real people who were apparently facing no consequences in the present, the doctrine of final judgment was not a theoretical matter but a pastoral lifeline. God sees, God knows, God will act &mdash; and the justice that is not visible in the present order will be fully and permanently enacted at the return of Christ. This is the comfort of eschatological justice for those who suffer unjustly.",
  },
  {
    title: "Eternal Destruction Away from the Presence of the Lord",
    color: PURPLE,
    body: "The phrase &ldquo;eternal destruction, away from the presence of the Lord and from the glory of his might&rdquo; (1:9) is one of the most significant descriptions of final judgment in the NT. The key question is whether &ldquo;destruction&rdquo; (olethron) means annihilation or ruin, and what &ldquo;away from the presence&rdquo; (apo prosopou) means. The dominant patristic and Reformed reading understands this as permanent exclusion from the divine presence &mdash; not the end of existence but the end of any participation in the goodness that flows from God&rsquo;s presence. Since God is the source of all life, joy, beauty, and meaning, exclusion from his presence is the most complete form of deprivation conceivable. The word &ldquo;eternal&rdquo; (aioniou) qualifies the destruction: this is not a temporary punishment but a permanent state. The pastoral implication is that hell is not primarily a place of active torment inflicted by God but the self-chosen consequence of final, irreversible rejection of the one who is the source of all good.",
  },
  {
    title: "Glorification of Christ in His Saints",
    color: GOLD,
    body: "Verse 10 contains one of the most exalted Christological statements in the letter: Christ &ldquo;comes on that day to be glorified in his saints, and to be marveled at among all who have believed.&rdquo; The glorification of Christ at his return is not external to his people; it is visible in and through them. The saints do not merely observe Christ&rsquo;s glory from a distance &mdash; they become the medium in which it is displayed. This echoes John 17:22 (&ldquo;the glory that you have given me I have given to them&rdquo;) and Romans 8:30 (&ldquo;those whom he justified he also glorified&rdquo;). The glorification is mutual: Christ is glorified in his saints, and in 1:12 Paul prays that they would be glorified in him. The eschatological glory that will be fully visible at the parousia is already present in seed form in the lives of those who bear the Holy Spirit, which is why present Christian life is not a waiting room but a foretaste.",
  },
];

const APPLICATION_ITEMS = [
  {
    heading: "Enduring Persecution with Faith and Love as the Mark of Those Counted Worthy",
    color: TEAL,
    body: "Paul&rsquo;s description of the Thessalonians as evidencing God&rsquo;s judgment precisely through their persecuted faith (1:5) reframes how Christians are to think about suffering for the gospel. Suffering is not evidence of God&rsquo;s absence or abandonment. It is, in Paul&rsquo;s remarkable theology, evidence that God is at work producing the kind of faith that is counted worthy of the kingdom. The practical implication is not that Christians should seek suffering, but that when suffering comes for the sake of the gospel, they should not interpret it as a sign of divine disapproval. The community of faith that continues to grow in faith and love under pressure &mdash; as the Thessalonians did &mdash; is exhibiting the most powerful kind of testimony available: transformation that cannot be accounted for by human psychology or social dynamics alone.",
  },
  {
    heading: "The Justice of God as Comfort to the Afflicted",
    color: ROSE,
    body: "For people experiencing injustice &mdash; persecution, oppression, false accusation, systemic wrong &mdash; the doctrine of God&rsquo;s final judgment is not a threat but a pastoral comfort. Paul deploys the judgment text of 2 Thessalonians 1:6&ndash;10 not to frighten the Thessalonians but to reassure them. The God who will repay their persecutors is the same God in whom they are held. The justice that is invisible in the present order is not absent from God&rsquo;s economy; it is deferred to the moment of final reckoning. This shapes how Christians relate to injustice: they do not take personal vengeance (Romans 12:19 &mdash; &ldquo;leave it to the wrath of God&rdquo;), because they believe that God will act with perfect justice at the return of Christ. The eschatological justice of God is the theological foundation for Christian nonretaliation.",
  },
  {
    heading: "Praying to Be Found Worthy of God&rsquo;s Calling",
    color: PURPLE,
    body: "Paul&rsquo;s prayer in 1:11&ndash;12 is a model for pastoral intercession. He does not pray that the Thessalonians would be removed from persecution. He does not pray for their comfort or success. He prays that God would &ldquo;make you worthy of his calling&rdquo; and &ldquo;fulfill every resolve for good and every work of faith by his power.&rdquo; The prayer is theocentric: the worthiness is God-produced, the power is God-supplied, and the goal is the glorification of Jesus in them. This is the shape of mature Christian prayer: not primarily asking for relief from difficulty but for God to do in us what needs to be done to make us fit for the kingdom for which we are suffering. The resolve for good and the work of faith are human responses &mdash; but their fulfillment is divine work. Paul prays for the divine empowerment of human resolve.",
  },
  {
    heading: "Living for Christ&rsquo;s Glorification",
    color: GOLD,
    body: "The final purpose clause of the chapter &mdash; &ldquo;so that the name of our Lord Jesus may be glorified in you, and you in him&rdquo; (1:12) &mdash; sets out the telos of all Christian life. Christians do not live for their own comfort, reputation, or achievement; they live so that the name of Jesus would be glorified in them. Every act of faith, every labor of love, every moment of steadfast hope is a small revelation of Jesus&rsquo; glory in the world. The mutual glorification &mdash; Jesus glorified in them, they glorified in him &mdash; anticipates the eschatological scene of verse 10. The practical question this raises for every believer is simple and searching: in my actual daily life, in the choices I make and the way I relate to others, is the name of Jesus being glorified? Is my life functioning as a display of his character and his worth?",
  },
];

export default function SecondThessalonians1Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #0B0B18 0%, #100a18 50%, #07070F 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem 2.5rem" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ marginBottom: "0.75rem" }}>
            <span style={{ color: ROSE, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Bible Study Guide</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.6rem)", fontWeight: 900, color: TEXT, marginBottom: "1rem", lineHeight: 1.15 }}>
            2 Thessalonians 1
          </h1>
          <p
            style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 680, marginBottom: "1.5rem" }}
            dangerouslySetInnerHTML={{ __html: "Paul opens his second letter to Thessalonica with thanksgiving for faith growing abundantly under persecution, then delivers one of the most solemn and searching passages in all his letters &mdash; a portrait of God&rsquo;s righteous judgment at the return of Christ, devastating to those who rejected him and glorious beyond measure to those who believed." }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {[
              { label: "Book", value: "2 Thessalonians" },
              { label: "Chapter", value: "1" },
              { label: "Author", value: "Paul, Silvanus, Timothy" },
              { label: "Date", value: "c. AD 50&ndash;52" },
              { label: "Key Verse", value: "2 Thess 1:11&ndash;12" },
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
                borderBottom: activeTab === tab.id ? `2px solid ${ROSE}` : "2px solid transparent",
                color: activeTab === tab.id ? ROSE : MUTED,
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
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: TEXT, marginBottom: "1.25rem" }}>Introduction to 2 Thessalonians 1</h2>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem", marginBottom: "1.25rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1rem" }}>Historical Background</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8, marginBottom: "0.9rem" }}
                dangerouslySetInnerHTML={{ __html: "Second Thessalonians was written shortly after the first letter &mdash; perhaps from Corinth around AD 50&ndash;52 &mdash; because problems had emerged or intensified in the congregation. Two issues dominate the letter: eschatological confusion (someone had apparently claimed that &ldquo;the day of the Lord has come,&rdquo; causing alarm) and a group of believers who had stopped working while waiting for the parousia. Chapter 1 addresses neither of these directly; it serves as a pastoral foundation for what follows." }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "The thanksgiving and the judgment passage of chapter 1 establish two foundations: the Thessalonians&rsquo; faith is genuine and growing (so the letter comes as pastoral encouragement, not rebuke), and the God who will judge at Christ&rsquo;s return is both just and powerful (so neither confusion nor idleness can be justified in his light). The chapter is both the warmest and the most theologically severe in the letter." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem", marginBottom: "1.25rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1rem" }}>Structure of Chapter 1</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {[
                  { ref: "vv. 1&ndash;2", desc: "Greeting &mdash; Paul, Silvanus, and Timothy; grace and peace from God our Father and the Lord Jesus Christ" },
                  { ref: "vv. 3&ndash;4", desc: "Thanksgiving &mdash; faith growing abundantly, love increasing; boasting in their steadfastness under persecution" },
                  { ref: "vv. 5&ndash;7", desc: "Evidence of righteous judgment &mdash; counted worthy of the kingdom; relief when Christ is revealed with his mighty angels" },
                  { ref: "vv. 8&ndash;10", desc: "Judgment on those who reject the gospel &mdash; eternal destruction away from the presence of the Lord; glorified in his saints" },
                  { ref: "vv. 11&ndash;12", desc: "Prayer for worthiness &mdash; that God would make them worthy of his calling and that Jesus would be glorified in them" },
                ].map((item) => (
                  <div key={item.ref} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                    <span style={{ color: GOLD, fontWeight: 700, fontSize: "0.8rem", minWidth: 76, paddingTop: 2 }} dangerouslySetInnerHTML={{ __html: item.ref }} />
                    <span style={{ color: MUTED, lineHeight: 1.6, fontSize: "0.92rem" }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem", marginBottom: "1.25rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1rem" }}>Why This Chapter Matters</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8, marginBottom: "0.9rem" }}
                dangerouslySetInnerHTML={{ __html: "Second Thessalonians 1 is one of the most pastorally serious chapters in the Pauline corpus. It addresses the question that every persecuted believer eventually asks: where is God, and what will he do about what is happening to us? Paul&rsquo;s answer is not philosophically abstract; it is rooted in a specific historical event &mdash; the return of Jesus Christ &mdash; which he describes in vivid apocalyptic terms drawn from the Old Testament (cf. Isaiah 66:15; Daniel 7:9&ndash;10)." }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "The chapter also contains one of the richest descriptions of the purpose of Christ&rsquo;s return &mdash; not punishment as an end in itself, but the full revelation of Jesus&rsquo; glory in and through his people. The dual note of judgment and glorification in a single paragraph is quintessentially Pauline: the same event is the worst possible outcome for those who reject Christ and the fulfillment of all hope for those who believe." }}
              />
            </div>

            <div style={{ background: `linear-gradient(135deg, ${ROSE}14 0%, ${PURPLE}0b 100%)`, border: `1px solid ${ROSE}35`, borderRadius: 14, padding: "1.5rem" }}>
              <h3 style={{ color: ROSE, fontWeight: 700, marginBottom: "0.65rem", fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Key Verse</h3>
              <blockquote
                style={{ color: TEXT, fontSize: "1.05rem", lineHeight: 1.8, fontStyle: "italic", borderLeft: `3px solid ${ROSE}`, paddingLeft: "1rem", margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;To this end we always pray for you, that our God may make you worthy of his calling and may fulfill every resolve for good and every work of faith by his power, so that the name of our Lord Jesus may be glorified in you, and you in him, according to the grace of our God and the Lord Jesus Christ.&rdquo; &mdash; 2 Thessalonians 1:11&ndash;12" }}
              />
            </div>
          </div>
        )}

        {/* Key Themes Tab */}
        {activeTab === "themes" && (
          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: TEXT, marginBottom: "1.25rem" }}>Key Themes in 2 Thessalonians 1</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {THEME_ITEMS.map((item, i) => (
                <div
                  key={i}
                  style={{ background: CARD, border: `1px solid ${item.color}30`, borderLeft: `4px solid ${item.color}`, borderRadius: 12, padding: "1.5rem" }}
                >
                  <h3 style={{ color: item.color, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p
                    style={{ color: MUTED, lineHeight: 1.8 }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>

            {/* Supplementary concept grid */}
            <div style={{ marginTop: "1.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
              {[
                { label: "The Revelation of Christ", color: TEAL, text: "The Greek word apokalypsis (revelation/unveiling) is used in 1:7 for Christ&rsquo;s return. His return is a removal of the veil &mdash; not a new event but the disclosure of what has always been true about Jesus. The world will see, at last and fully, what the eyes of faith have perceived all along: that Jesus is Lord." },
                { label: "Mighty Angels", color: BLUE, text: "Christ is revealed &ldquo;with his mighty angels&rdquo; (1:7) &mdash; the angelic host as attendants of the divine King. This language echoes Daniel 7:9&ndash;10 and Matthew 25:31, situating Paul&rsquo;s eschatology within the stream of Jewish apocalyptic tradition. The return is not quiet; it is royal and cosmic." },
                { label: "Those Who Do Not Obey the Gospel", color: ROSE, text: "Verse 8 identifies judgment recipients as those who &ldquo;do not obey the gospel.&rdquo; The word &ldquo;obey&rdquo; (hupakouousin) suggests that the gospel is not merely information to be accepted but a command to be obeyed &mdash; specifically, the call to repentance and faith. Rejection of the gospel is not a neutral intellectual position but a moral failure." },
                { label: "Grace as Foundation", color: GOLD, text: "The final phrase of the chapter &mdash; &ldquo;according to the grace of our God and the Lord Jesus Christ&rdquo; (1:12) &mdash; grounds the entire movement of the chapter in grace. The worthiness Paul prays for, the glorification he anticipates, the faith and love he celebrates: all of it is grace from first to last. The eschatological hope is not earned; it is received." },
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

            {/* Theological comparison */}
            <div style={{ marginTop: "1.5rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem" }}>1 Thessalonians 1 and 2 Thessalonians 1 Compared</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  { label: "1 Thess 1", items: ["Warmest thanksgiving", "Faith, love, hope triad (1:3)", "Gospel in power (1:5)", "Waiting for his Son (1:10)", "Conversion from idols"] },
                  { label: "2 Thess 1", items: ["Obligation to give thanks (1:3)", "Faith growing, love increasing", "Evidence of righteous judgment (1:5)", "Revealed in flaming fire (1:7)", "Prayer for glorification (1:12)"] },
                ].map((col) => (
                  <div key={col.label}>
                    <div style={{ color: GOLD, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{col.label}</div>
                    {col.items.map((item) => (
                      <div key={item} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", marginBottom: "0.4rem" }}>
                        <span style={{ color: GOLD, marginTop: 2 }}>&#8212;</span>
                        <span style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.5 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Verse by Verse Tab */}
        {activeTab === "versebyverse" && (
          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Verse by Verse: 2 Thessalonians 1</h2>
            <p
              style={{ color: MUTED, marginBottom: "1.75rem", lineHeight: 1.65 }}
              dangerouslySetInnerHTML={{ __html: "A close reading of every section in 2 Thessalonians 1 &mdash; working through Paul&rsquo;s pastoral thanksgiving, his solemn eschatological vision, and his prayer for the Thessalonians&rsquo; worthiness." }}
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

            {/* OT Background box */}
            <div style={{ background: `linear-gradient(135deg, ${GOLD}10 0%, ${TEAL}0a 100%)`, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: "1.5rem", marginTop: "1.5rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.65rem" }}>Old Testament Background to the Judgment Vision</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8, marginBottom: "0.75rem" }}
                dangerouslySetInnerHTML={{ __html: "Paul&rsquo;s language in 1:7&ndash;10 is saturated with Old Testament imagery. &ldquo;Flaming fire&rdquo; echoes Isaiah 66:15 (&ldquo;For behold, the LORD will come in fire, and his chariots like the whirlwind, to render his anger in fury&rdquo;) and Daniel 7:9&ndash;10 (the Ancient of Days with a fiery throne). The phrase &ldquo;from the presence of the Lord and from the glory of his might&rdquo; in 1:9 echoes Isaiah 2:10, 19, 21, where sinners flee into caves to hide from &ldquo;the terror of the LORD and the splendor of his majesty.&rdquo;" }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "The effect is to situate the return of Jesus within the long biblical tradition of divine theophany and judgment &mdash; and to identify Jesus as the one who comes in the divine glory that the Old Testament prophets described as the LORD&rsquo;s own coming. This is an implicit Christological claim of the highest order: Jesus returns in the manner the prophets predicted God would return." }}
              />
            </div>

            {/* Greek word study */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginTop: "1.25rem" }}>
              <h3 style={{ color: BLUE, fontWeight: 700, fontSize: "0.95rem", marginBottom: "1rem" }}>Key Greek Words</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { word: "huperauxanei", ref: "1:3", meaning: "Growing superabundantly &mdash; a compound verb unique in the NT, intensifying the idea of growth beyond ordinary expectation." },
                  { word: "endeigma", ref: "1:5", meaning: "Evidence, indication, proof &mdash; the suffering of the Thessalonians is a visible demonstration of God&rsquo;s righteous judgment at work." },
                  { word: "anesin", ref: "1:7", meaning: "Relief, release, relaxation of pressure &mdash; the same word used of loosening a bow; the image is of the tension of persecution being finally released." },
                  { word: "olethron aionion", ref: "1:9", meaning: "Eternal destruction &mdash; not necessarily annihilation but permanent ruin, the lasting consequence of final exclusion from the divine presence." },
                  { word: "opheilomen", ref: "1:3", meaning: "We ought, we owe &mdash; frames the thanksgiving as obligation rooted in what God has done, not merely spontaneous emotion." },
                ].map((entry) => (
                  <div key={entry.word} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ minWidth: 130 }}>
                      <span style={{ color: BLUE, fontWeight: 700, fontSize: "0.85rem", fontStyle: "italic" }}>{entry.word}</span>
                      <span style={{ color: MUTED, fontSize: "0.75rem", display: "block" }}>({entry.ref})</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: entry.meaning }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Application Tab */}
        {activeTab === "application" && (
          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Application: Living 2 Thessalonians 1 Today</h2>
            <p
              style={{ color: MUTED, marginBottom: "1.75rem", lineHeight: 1.65 }}
              dangerouslySetInnerHTML={{ __html: "How do the truths of 2 Thessalonians 1 reshape the way we suffer, pray, live under injustice, and orient our lives toward the return of Christ?" }}
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

            {/* Discussion questions */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem" }}>Discussion and Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {[
                  "Paul gives thanks because the Thessalonians&rsquo; faith is &ldquo;growing abundantly.&rdquo; Is your faith growing under your current circumstances &mdash; or shrinking? What would it take for persecution or difficulty to become a catalyst for growth rather than erosion?",
                  "The Thessalonians&rsquo; suffering under persecution is described as &ldquo;evidence of the righteous judgment of God&rdquo; that they are &ldquo;counted worthy of the kingdom.&rdquo; How does this reframe how you interpret difficulty in your own life?",
                  "Paul describes the judgment as &ldquo;righteous.&rdquo; Where in your life are you tempted to take personal vengeance &mdash; and how does the doctrine of God&rsquo;s final judgment free you to release that impulse?",
                  "What does &ldquo;eternal destruction away from the presence of the Lord&rdquo; tell us about the nature of hell? How does understanding it as exclusion from the divine presence (rather than active torment) shape how you think about and speak about judgment?",
                  "Paul prays that God would &ldquo;make you worthy of his calling.&rdquo; What difference does it make to understand worthiness as God-produced rather than self-achieved?",
                  "The chapter ends with the goal: &ldquo;that the name of our Lord Jesus may be glorified in you.&rdquo; In what specific area of your life do you most need to ask: is Jesus being glorified here, or is something else taking the place of honor?",
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
            <div style={{ background: `linear-gradient(135deg, ${PURPLE}14 0%, ${ROSE}0a 100%)`, border: `1px solid ${PURPLE}35`, borderRadius: 14, padding: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.7rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>A Prayer Drawn from 2 Thessalonians 1</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.85, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "Lord God, we thank you for the faith you have given your people and for the way it grows even under pressure. Grant us the grace to endure whatever afflictions come, knowing that they do not separate us from your love. Give us eyes to see your righteous judgment as comfort rather than threat &mdash; the assurance that you see every injustice and that you will act. Make us worthy of your calling, not by our own strength but by the power that raised Jesus from the dead. Fulfill every resolve for good in us. And in everything, let the name of Jesus be glorified &mdash; in our suffering, in our faith, in our love for one another, and at last, when he is revealed from heaven and we are found in him. Through Christ our Lord. Amen." }}
              />
            </div>
          </div>
        )}

        {/* Video Section */}
        <div style={{ marginTop: "3rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: TEXT, marginBottom: "0.4rem" }}>Video Teaching</h2>
          <p
            style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}
            dangerouslySetInnerHTML={{ __html: "Curated video resources to deepen your study of 2 Thessalonians 1." }}
          />
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

        {/* Further Study */}
        <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem" }}>
          <h3 style={{ color: TEAL, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem" }}>Further Study Resources</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem" }}>
            {[
              { title: "1&ndash;2 Thessalonians (NICNT)", author: "Leon Morris", color: GOLD },
              { title: "The Thessalonian Epistles", author: "D. Michael Martin", color: GREEN },
              { title: "2 Thessalonians (Word Biblical Commentary)", author: "F. F. Bruce", color: BLUE },
              { title: "1 &amp; 2 Thessalonians (Tyndale)", author: "John Stott", color: PURPLE },
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
              "Romans 12:19",
              "Isaiah 66:15",
              "Daniel 7:9&ndash;10",
              "Isaiah 2:10",
              "Matthew 25:31",
              "Romans 8:17&ndash;18",
              "John 17:22",
              "Revelation 19:11&ndash;16",
              "Romans 8:30",
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
