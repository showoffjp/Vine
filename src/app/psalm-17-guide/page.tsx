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
  { videoId: "rNcERbkSTXU", title: "Psalm 17 - A Prayer for Vindication" },
  { videoId: "OjJ7GkWCHvA", title: "The Apple of Your Eye: Psalm 17 Explained" },
  { videoId: "pHBzJ2dVXgk", title: "Hide Me in the Shadow of Your Wings" },
  { videoId: "3sO5FH2ybPY", title: "I Shall Behold Your Face: The Hope of Psalm 17" },
];

const VERSE_SECTIONS = [
  {
    id: "vp1",
    ref: "Psalm 17:1-2",
    title: "Hear a Just Cause: The Plea of Innocent Lips",
    color: GOLD,
    content:
      "Hear a just cause, O LORD; attend to my cry! Give ear to my prayer from lips free of deceit! From your presence let my vindication come! Let your eyes behold the right! The psalm opens as a legal appeal, a courtroom prayer. David asks the LORD to hear his tsedeq &mdash; his right, his just cause &mdash; and to attend to his rinnah (his ringing cry) and his tefillah (his prayer). The remarkable qualifier is that this prayer comes belo siphte mirmah, &lsquo;from lips without deceit.&rsquo; This is not a boast of sinless perfection; it is a specific claim of integrity in the matter at hand. David is bringing a genuine grievance, not a manufactured one, and he can stand before God without the duplicity that marks his accusers. Verse 2 makes the legal imagery explicit: &lsquo;From your presence (mi-lefaneykha, from before your face) let my mishpat (judgment, verdict, vindication) come.&rsquo; David does not appeal to a human court, which can be swayed by flattery and false witness; he appeals over the heads of his enemies to the highest court of all, asking that the verdict of his case come directly from the face of God. &lsquo;Let your eyes behold the right&rsquo; (meysharim, what is straight, level, upright) &mdash; he asks the all-seeing God simply to look honestly at his case, confident that the God who sees truly will judge rightly.",
  },
  {
    id: "vp2",
    ref: "Psalm 17:3-5",
    title: "You Have Tried My Heart: The Integrity of the Tested Servant",
    color: TEAL,
    content:
      "You have tried my heart, you have visited me by night, you have tested me, and you will find nothing; I have purposed that my mouth will not transgress. With regard to the works of man, by the word of your lips I have avoided the ways of the violent. My steps have held fast to your paths; my feet have not slipped. David appeals to a divine investigation already conducted. The LORD has tried (bachanta, assayed as one assays metal) his heart, visited (paqadta, inspected, examined) him by night &mdash; that vulnerable hour when the true self is exposed &mdash; and tested (tseraphta, refined as in a furnace) him. The cluster of metallurgical and investigative verbs is striking: David invites the most rigorous scrutiny because he is confident of the result: &lsquo;you will find nothing.&rsquo; Again, this is not a claim of total sinlessness but of integrity in the specific cause he brings; he has not done the wrong of which his enemies are guilty. He has purposed (zamoti, resolved, determined) that his mouth will not cross the line into transgression. In a psalm so concerned with deceitful speech, David sets his own resolved, honest speech against the lies around him. Verses 4-5 describe a life kept on track: &lsquo;by the word of your lips&rsquo; (the same divine speech the wicked despise) he has avoided the paths of the parits (the violent, the ruthless plunderer). His steps have tamak (held fast, gripped, clung) to God&rsquo;s tracks, and his feet have not slipped &mdash; a quiet confidence that grace, not merely willpower, has kept him.",
  },
  {
    id: "vp3",
    ref: "Psalm 17:6-9",
    title: "The Apple of Your Eye: Keep Me, Hide Me",
    color: PURPLE,
    content:
      "I call upon you, for you will answer me, O God; incline your ear to me; hear my words. Wondrously show your steadfast love, O Savior of those who seek refuge from their adversaries at your right hand. Keep me as the apple of your eye; hide me in the shadow of your wings, from the wicked who do me violence, my deadly enemies who surround me. This is the heart of the psalm and contains two of the most beloved images of refuge in all of Scripture. David is confident of being heard: &lsquo;I call upon you, for you will answer me.&rsquo; He asks God to haphleh chasadeykha &mdash; to make his chesed (steadfast covenant love) wonderful, marvelous, set apart &mdash; toward those who seek refuge (chosim) at his right hand. Then come the two petitions. First: &lsquo;Keep me as the apple of your eye.&rsquo; The Hebrew is vivid &mdash; ishon bat ayin, literally &lsquo;the little man, the daughter of the eye,&rsquo; the pupil. The pupil is the most precious, most sensitive, most instinctively protected part of the body; we flinch and shield it without thinking. David asks to be guarded with exactly that reflexive, total protectiveness (cf. Deuteronomy 32:10, where God kept Israel &lsquo;as the apple of his eye&rsquo;). Second: &lsquo;Hide me in the shadow of your wings.&rsquo; This is the image of a bird sheltering its young beneath its outstretched wings &mdash; intimate, warm, sheltering refuge. The same image recurs across the Psalter (Psalm 36:7, 57:1, 63:7, 91:4) and is taken up by Jesus himself, longing to gather Jerusalem &lsquo;as a hen gathers her brood under her wings&rsquo; (Matthew 23:37). David seeks not merely deliverance but the nearness and tenderness of God.",
  },
  {
    id: "vp4",
    ref: "Psalm 17:10-12",
    title: "Like a Lion Eager to Tear: The Portrait of the Enemies",
    color: ROSE,
    content:
      "They close their hearts to pity; with their mouths they speak arrogantly. They have now surrounded our steps; they set their eyes to cast us to the ground. He is like a lion eager to tear, as a young lion lurking in ambush. Having sought refuge, David now describes the threat from which he flees. The enemies have closed their chelev &mdash; their fat, their heart &mdash; meaning they are callous, unfeeling, hardened against all pity. Their mouths speak be-geut, with arrogance and pride. There is the same coupling found throughout these psalms: hardened hearts and arrogant speech, cruelty paired with boasting. The imagery turns predatory and intensifies. The enemies have surrounded David&rsquo;s steps and fixed their eyes (they set their gaze, calculating) to strike him down to the ground. Then the climactic image: the chief adversary is like an aryeh (a lion) that yiksoph (longs, craves, is greedy) litroph (to tear, to rend its prey), and like a kephir (a young, vigorous lion) lurking in concealment, crouched in ambush. The picture is of a powerful, patient, merciless predator stalking helpless prey. It is precisely against this lion-like ferocity that the two tender images of the previous verses &mdash; the protected pupil of the eye and the sheltering wings &mdash; shine so brightly. The refuge David seeks is proportionate to the danger he faces.",
  },
  {
    id: "vp5",
    ref: "Psalm 17:13-14",
    title: "Arise, O LORD: Deliver My Soul from Men of This World",
    color: GREEN,
    content:
      "Arise, O LORD! Confront him, subdue him! Deliver my soul from the wicked by your sword, from men by your hand, O LORD, from men of the world whose portion is in this life. You fill their womb with treasure; they are satisfied with children, and they leave their abundance to their infants. David&rsquo;s prayer reaches its petition for action: qumah, &lsquo;Arise, O LORD!&rsquo; &mdash; the same urgent call for God to take the field that resounds through the Psalter. He asks God to confront (qaddemah, to meet him head-on, to get in front of him) the lion-like enemy and to make him bow. The deliverance is to come &lsquo;by your sword&rsquo; and &lsquo;by your hand&rsquo; &mdash; David entrusts the execution of justice to God rather than seizing it himself. Then comes a profound theological observation about the enemies: they are mete cheled, &lsquo;men of the world,&rsquo; men of fleeting time, whose cheleq (portion, allotted share) is ba-chayyim, in this life. This is the decisive contrast that the final verse will resolve. The wicked are not without blessings &mdash; God even fills their belly, gives them children, and lets them leave an inheritance to their little ones. The point is sharp and sobering: this is all they have. Their entire portion is consumed within the boundaries of this present life. They are full now, but their fullness has no future beyond the grave. David is being prepared to say something the wicked cannot say: that his own portion is not in this life at all.",
  },
  {
    id: "vp6",
    ref: "Psalm 17:15",
    title: "I Shall Behold Your Face: The Hope That Transcends",
    color: GOLD,
    content:
      "As for me, I shall behold your face in righteousness; when I awake, I shall be satisfied with your likeness. The psalm ends on one of the most luminous notes in the entire Psalter. Against the men whose portion is only in this life (v.14), David lifts his contrasting hope with an emphatic ani, &lsquo;As for me.&rsquo; His portion is not treasure, children, or inheritance &mdash; it is God himself. &lsquo;I shall behold your face (achezeh paneykha) in righteousness.&rsquo; To see the face of God is the deepest longing of the believing heart and the very thing the priestly blessing invokes (Numbers 6:25-26). Where the wicked are satisfied (saba) with the fleeting goods of this world (v.14), David will be satisfied (esbeah, the same verb, deliberately echoed) with something incomparably greater: temunatekha, your form, your likeness, the very presence of God. The clinching phrase is &lsquo;when I awake&rsquo; (be-haqits). At its simplest this may mean waking from the troubled night of distress to a new morning of God&rsquo;s favor. But the language of awaking, set against enemies whose portion ends with death, has long been read as reaching beyond this life &mdash; a hope of resurrection and of the beatific vision, the day when the believer awakes from the sleep of death to see God face to face. The apostle John gives the same hope its fullest form: &lsquo;we know that when he appears we shall be like him, because we shall see him as he is&rsquo; (1 John 3:2). This is the satisfaction that no enemy can touch and no grave can end.",
  },
];

const THEMES = [
  {
    color: GOLD,
    title: "Vindication from the Face of God",
    body:
      "Psalm 17 is a prayer for vindication framed as a legal appeal. David asks God to hear his &lsquo;just cause&rsquo; and to let his vindication come &lsquo;from your presence&rsquo; (vv.1-2). The key move is that David refuses to fight for his reputation in the court of human opinion, which can be swayed by flattery and false witness. He appeals over the heads of his accusers to the highest court &mdash; the face of God, who sees the truth and judges rightly. This is the same posture the New Testament commends: &lsquo;It is the Lord who judges me&rsquo; (1 Corinthians 4:4), and &lsquo;he committed no sin, but continued entrusting himself to him who judges justly&rsquo; (1 Peter 2:22-23). For the believer wrongly accused, Psalm 17 models the freedom of leaving vindication to God rather than grasping for it through self-defense or retaliation.",
  },
  {
    color: TEAL,
    title: "The Tested Heart and Honest Speech",
    body:
      "David appeals to a divine investigation already conducted: &lsquo;You have tried my heart, you have visited me by night, you have tested me, and you will find nothing&rsquo; (v.3). The cluster of refining verbs &mdash; tried, visited, tested &mdash; invites God&rsquo;s most rigorous scrutiny, especially the night-time examination when the true self is exposed. This is not a claim of sinless perfection but of integrity in the cause at hand: David has &lsquo;lips free of deceit&rsquo; (v.1) and a mouth that will not transgress (v.3). In a psalm surrounded by arrogant and deceitful speech, David sets his own honest, resolved speech as a contrast. The theme connects to Psalm 139 (&lsquo;Search me, O God, and know my heart&rsquo;) and to the blessing on &lsquo;the pure in heart, for they shall see God&rsquo; (Matthew 5:8) &mdash; which, strikingly, is exactly the hope Psalm 17 ends with.",
  },
  {
    color: PURPLE,
    title: "The Apple of the Eye and the Shadow of the Wings",
    body:
      "Verse 8 contains two of the most cherished images of refuge in Scripture, set side by side: &lsquo;Keep me as the apple of your eye; hide me in the shadow of your wings.&rsquo; The &lsquo;apple of the eye&rsquo; renders the Hebrew ishon bat ayin, &lsquo;the little man, the daughter of the eye&rsquo; &mdash; the pupil, the most precious and instinctively guarded part of the body, the part we shield by reflex. The phrase recalls Deuteronomy 32:10, where God kept Israel as the apple of his eye. The &lsquo;shadow of your wings&rsquo; pictures a mother bird sheltering her young, an image of intimate, tender refuge that recurs at Psalm 36:7, 57:1, 63:7, and 91:4, and culminates in Jesus longing to gather Jerusalem as a hen gathers her chicks (Matthew 23:37). Together they teach that God&rsquo;s protection is both vigilant (the watching eye) and intimate (the sheltering wing).",
  },
  {
    color: ROSE,
    title: "Two Portions: This Life or the Face of God",
    body:
      "The decisive contrast of the psalm is between the enemies whose &lsquo;portion is in this life&rsquo; (v.14) and the psalmist whose hope is to behold the face of God (v.15). The wicked are not portrayed as deprived &mdash; God fills their belly, gives them children, lets them leave an inheritance. The point is that this is all they have; their entire allotted share is consumed within the boundaries of the present life. They are full now, but their fullness has no future. David&rsquo;s portion is utterly different: not treasure or children but God himself. The same word for &lsquo;satisfied&rsquo; describes both, deliberately echoed: the wicked are satisfied with the world&rsquo;s goods; David will be satisfied with God&rsquo;s likeness. Jesus presses the same contrast in the parable of the rich fool (Luke 12:16-21) and in the warning that one cannot serve God and mammon. The believer is invited to choose the portion that death cannot end.",
  },
  {
    color: GREEN,
    title: "Awaking to See God: The Hope of Resurrection and the Beatific Vision",
    body:
      "The closing line &mdash; &lsquo;when I awake, I shall be satisfied with your likeness&rsquo; (v.15) &mdash; has long been read as a hope reaching beyond this present life. At one level &lsquo;awaking&rsquo; may mean rising from a troubled night into a new morning of God&rsquo;s favor. But set against enemies whose portion ends with death, the language of awaking points further: to the day when the believer awakes from the sleep of death to see God face to face. This is the beatific vision &mdash; the unmediated sight of God that is the soul&rsquo;s final satisfaction. The hope is given its fullest form in 1 John 3:2: &lsquo;when he appears we shall be like him, because we shall see him as he is.&rsquo; Job glimpsed it too: &lsquo;in my flesh I shall see God&rsquo; (Job 19:26). Psalm 17 thus carries within an Old Testament prayer a profoundly forward-looking hope &mdash; that the deepest longing of the human heart, to see the face of God, will not be denied even by the grave.",
  },
];

export default function Psalm17Guide() {
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
            Book of Psalms &middot; Psalm 17
          </div>
          <h1 style={{ color: TEXT, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, margin: "0 0 12px", lineHeight: 1.2 }}>
            Psalm 17: A Prayer for Protection and the Hope of Beholding God
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: "0 0 20px", maxWidth: 680 }}
            dangerouslySetInnerHTML={{ __html: "Psalm 17 is David&rsquo;s prayer for vindication and protection, pressed from &lsquo;lips free of deceit&rsquo; (vv.1&ndash;5) and rising to the tender petition, &lsquo;keep me as the apple of your eye; hide me in the shadow of your wings&rsquo; (v.8). Surrounded by ruthless enemies &lsquo;like a lion eager to tear&rsquo; (vv.10&ndash;12), David ends with a hope that transcends every present trouble: &lsquo;I shall behold your face&hellip; when I awake, I shall be satisfied with your likeness&rsquo; (v.15)." }}
          />

          {/* Key verse callout */}
          <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderLeft: `4px solid ${PURPLE}`, borderRadius: 12, padding: "18px 22px", marginBottom: 20 }}>
            <div style={{ color: PURPLE, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Key Verse &middot; Psalm 17:8</div>
            <p style={{ color: TEXT, fontSize: 16, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}
              dangerouslySetInnerHTML={{ __html: "&ldquo;Keep me as the apple of your eye; hide me in the shadow of your wings.&rdquo;" }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
            {[
              { label: "Book", value: "Psalms", color: PURPLE },
              { label: "Psalm", value: "17 (15 verses)", color: TEAL },
              { label: "Author", value: "David", color: GOLD },
              { label: "Type", value: "Prayer / Lament", color: GREEN },
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
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Psalm Overview</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Psalm 17 is titled simply &lsquo;A Prayer of David,&rsquo; one of only a handful of psalms given that exact designation. It is the prayer of a righteous man under threat, pleading with God for vindication and protection against ruthless enemies. From beginning to end it is addressed directly to God, with the urgency of someone whose life is genuinely in danger." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The psalm moves through several clear stages: an appeal for a just hearing from honest lips (vv.1-2), a protestation of integrity rooted in God&rsquo;s own testing (vv.3-5), the central plea for protection in the most tender images of refuge in Scripture (vv.6-9), a vivid portrait of lion-like enemies (vv.10-12), an urgent cry for God to arise (vv.13-14), and a climactic hope of beholding God&rsquo;s face (v.15)." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "What lifts Psalm 17 above an ordinary cry for help is its final verse. The whole poem builds toward the contrast between enemies whose &lsquo;portion is in this life&rsquo; and a believer whose hope is God himself: &lsquo;when I awake, I shall be satisfied with your likeness.&rsquo; This is one of the clearest glimpses in the Psalter of a hope that reaches beyond the grave." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>The Structure of Psalm 17</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "vv.1-2", label: "The Appeal: Hear a Just Cause from Lips Free of Deceit", color: GOLD },
                  { ref: "vv.3-5", label: "The Integrity: You Have Tried My Heart and Found Nothing", color: TEAL },
                  { ref: "vv.6-9", label: "The Plea: The Apple of Your Eye, the Shadow of Your Wings", color: PURPLE },
                  { ref: "vv.10-12", label: "The Enemies: Hardened Hearts, Like a Lion Eager to Tear", color: ROSE },
                  { ref: "vv.13-14", label: "The Cry: Arise, O LORD; Their Portion Is in This Life", color: GREEN },
                  { ref: "v.15", label: "The Hope: I Shall Behold Your Face When I Awake", color: GOLD },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: BG, borderRadius: 10, padding: "12px 14px" }}>
                    <span style={{ background: `${item.color}22`, border: `1px solid ${item.color}44`, borderRadius: 6, padding: "2px 10px", fontSize: 11, color: item.color, fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}>{item.ref}</span>
                    <span style={{ color: TEXT, fontSize: 14 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Historical and Literary Context</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "No specific occasion is given for Psalm 17, but its language of being surrounded, hunted, and pursued by deadly enemies fits the seasons of David&rsquo;s life when he was a fugitive &mdash; especially the years fleeing from Saul. The image of the lion crouched in ambush and the plea to be hidden in the shadow of God&rsquo;s wings both suit a man living in caves and wilderness, dependent on God for daily survival." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Psalm 17 sits among a group of psalms (especially 16-18) that share a strong hope concerning life with God beyond present danger. Psalm 16 ends with &lsquo;you will not abandon my soul to Sheol&hellip; in your presence there is fullness of joy.&rsquo; Psalm 17 ends with the hope of awaking to behold God&rsquo;s face. The two psalms together form part of the Old Testament soil in which the New Testament hope of resurrection and the vision of God would later flower (1 John 3:2; 1 Corinthians 13:12)." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Key Hebrew Words</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { word: "Ishon Bat Ayin", transliteration: "ee-SHOHN bat AH-yin", meaning: "The little man, the daughter of the eye; the pupil, the most protected part", verse: "v.8 &mdash; keep me as the apple of your eye", color: PURPLE },
                  { word: "Kanaph", transliteration: "ka-NAHF", meaning: "Wing; the sheltering wing of a mother bird, an image of refuge", verse: "v.8 &mdash; hide me in the shadow of your wings", color: TEAL },
                  { word: "Tsedeq", transliteration: "TSEH-dek", meaning: "Righteousness, a just cause, what is right", verse: "v.1 &mdash; hear a just cause (tsedeq), O LORD", color: GOLD },
                  { word: "Cheleq", transliteration: "CHEH-lek", meaning: "Portion, allotted share, inheritance", verse: "v.14 &mdash; men whose portion (cheleq) is in this life", color: ROSE },
                  { word: "Temunah", transliteration: "te-moo-NAH", meaning: "Form, likeness, the visible presence of God", verse: "v.15 &mdash; satisfied with your likeness (temunah)", color: GREEN },
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
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes in Psalm 17</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Five themes organize the theology of Psalm 17 &mdash; vindication from God&rsquo;s face, the tested heart and honest speech, the twin images of refuge, the contrast of two portions, and the climactic hope of awaking to behold God. Each is rooted in the text and connected to the wider witness of Scripture." }}
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
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>The Shadow of His Wings Across the Psalter</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The image of taking refuge under the shadow of God&rsquo;s wings, introduced here in verse 8, becomes one of the most beloved metaphors of trust in the Psalter. Tracing it shows how richly the picture is developed:" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "Psalm 17:8", text: "Hide me in the shadow of your wings, from the wicked who do me violence.", color: PURPLE },
                  { ref: "Psalm 36:7", text: "The children of mankind take refuge in the shadow of your wings.", color: TEAL },
                  { ref: "Psalm 57:1", text: "In the shadow of your wings I will take refuge, till the storms of destruction pass by.", color: GOLD },
                  { ref: "Psalm 63:7", text: "For you have been my help, and in the shadow of your wings I will sing for joy.", color: GREEN },
                  { ref: "Psalm 91:4", text: "He will cover you with his pinions, and under his wings you will find refuge.", color: ROSE },
                ].map(item => (
                  <div key={item.ref} style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${item.color}` }}>
                    <div style={{ color: item.color, fontSize: 12, fontWeight: 700, marginBottom: 6 }}>{item.ref}</div>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{item.text}</p>
                  </div>
                ))}
              </div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}
                dangerouslySetInnerHTML={{ __html: "The image reaches its tenderest expression on the lips of Jesus, who longed to gather Jerusalem &lsquo;as a hen gathers her brood under her wings&rsquo; (Matthew 23:37). The refuge David sought under the wings of God is offered to all in the sheltering arms of Christ." }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse: Psalm 17</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "All fifteen verses of Psalm 17 are grouped below by movement &mdash; appeal, integrity, plea for refuge, the portrait of the enemies, the cry for deliverance, and the climactic hope. Each accordion provides detailed commentary on the Hebrew text and its connections across Scripture. Click any section to expand." }}
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
                {["Psalm 17:1", "Psalm 17:3", "Psalm 17:6", "Psalm 17:8", "Psalm 17:13", "Psalm 17:14", "Psalm 17:15", "Deuteronomy 32:10", "Psalm 91:4", "Matthew 23:37", "1 John 3:2", "Numbers 6:25"].map(ref => (
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
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Application: Praying Under Pressure, Hoping Beyond It</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Psalm 17 is a gift to anyone who has been wrongly accused, surrounded by hostility, or pressed to the edge of endurance. It teaches how to pray under pressure &mdash; with honest lips, a tested heart, and a confidence that runs not to self-defense but to the protecting presence of God. And it lifts the eyes of the sufferer beyond the present trouble to the deepest hope of all: to behold the face of God." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The applications below move from the most immediate (how to pray when wrongly attacked) to the most ultimate (how to live in the light of beholding God)." }}
              />
            </div>

            {[
              {
                color: GOLD,
                title: "Take Your Just Cause to the Highest Court",
                icon: "01",
                body: "When you are wrongly accused, the instinct is to defend your reputation in the court of human opinion &mdash; to argue, to retaliate, to win the argument. David models a different path: he takes his just cause to God and asks that his vindication come from God&rsquo;s presence (vv.1-2). This is the freedom Peter describes of Christ, who &lsquo;when he was reviled, did not revile in return&hellip; but continued entrusting himself to him who judges justly&rsquo; (1 Peter 2:23). The practical application is to release the verdict to God. You may still need to speak truthfully and defend yourself appropriately, but the deep work is to stop demanding that people see you rightly and to rest in the knowledge that God sees you truly. The God whose eyes behold the right will not be deceived by any false witness.",
              },
              {
                color: TEAL,
                title: "Invite God's Searching of Your Heart",
                icon: "02",
                body: "David appeals to a God who has already tried his heart, visited him by night, and tested him (v.3). He does not fear the divine investigation; he invites it. The night-time examination is significant &mdash; the true self is often most exposed in the small hours, when no audience is watching. The application is the same as Psalm 139: &lsquo;Search me, O God, and know my heart; try me and know my thoughts.&rsquo; This is not morbid self-scrutiny but the confidence of a person who would rather be known truly by God than admired falsely by people. Cultivate the practice of honest examination before God, especially regarding your speech &mdash; for the believer who longs to be free of deceitful lips must begin by laying every word open before the God who hears them all.",
              },
              {
                color: PURPLE,
                title: "Pray the Tender Prayers of Refuge",
                icon: "03",
                body: "Verse 8 gives us words to pray when we are afraid: &lsquo;Keep me as the apple of your eye; hide me in the shadow of your wings.&rsquo; These are not abstract requests but intimate, almost childlike pleas for the nearness of God. The apple of the eye is the part we protect by reflex, without thinking; David asks to be guarded with that same instinctive care. The shadow of the wings is the warmth of a mother bird sheltering her young. The application is to make these words your own in seasons of fear &mdash; to ask not merely for deliverance from danger but for the felt nearness and tenderness of God in the midst of it. When you cannot see a way out, you can still pray to be hidden close to the heart of God.",
              },
              {
                color: ROSE,
                title: "Refuse the Portion That Ends with This Life",
                icon: "04",
                body: "Psalm 17 draws a sharp line between the wicked, whose &lsquo;portion is in this life&rsquo; (v.14), and the believer, whose portion is God himself (v.15). The wicked are not deprived &mdash; they have treasure, children, an inheritance to leave behind. The sobering point is that this is all they have. Jesus presses the same warning in the parable of the rich fool who stored up treasure for himself but was not rich toward God (Luke 12:21). The application is a regular, honest audit of where your true portion lies. Are you, in practice, investing your hope in goods that death will end &mdash; comfort, security, reputation, accumulation? Or is your deepest treasure God himself, the one portion that the grave cannot touch? &lsquo;Where your treasure is, there your heart will be also&rsquo; (Matthew 6:21).",
              },
              {
                color: GREEN,
                title: "Live Now in the Light of Beholding God",
                icon: "05",
                body: "The psalm ends with the believer&rsquo;s ultimate hope: &lsquo;when I awake, I shall be satisfied with your likeness&rsquo; (v.15). This hope of seeing God face to face &mdash; the beatific vision, given fullest form in 1 John 3:2 &mdash; is not merely a comfort for the deathbed; it is a present, purifying, satisfying reality. The person who genuinely expects to be satisfied with the likeness of God is freed from grasping for satisfaction in lesser things now. The application is to let the future vision reshape present desire. When you are tempted to seek satisfaction where it cannot finally be found, remember the awaking that is coming &mdash; the morning when you will see the face you were made for, and at last be satisfied. Let that hope steady you through every troubled night.",
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

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 8 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "David asks for vindication to come from God's presence rather than from human courts (vv.1-2). Where are you tempted to fight for your reputation, and what would it look like to release the verdict to God?",
                  "David invites God to try his heart and visit him by night (v.3). Are you willing to be searched honestly by God, especially regarding your speech? What might God find in the small hours?",
                  "The petition 'keep me as the apple of your eye; hide me in the shadow of your wings' (v.8) asks for God's nearness, not just his rescue. In what current fear do you most need to pray these words?",
                  "The enemies are described as 'whose portion is in this life' (v.14). Honestly, where are you investing your hope in things that death will end? Where is your true treasure?",
                  "The psalm ends with the hope of beholding God's face and being satisfied with his likeness (v.15). How does the hope of seeing God face to face shape the desires and choices of your present life?",
                  "Psalm 17 holds together honest realism about danger and confident hope in God. How can you face the lions of your own life without either pretending they aren't there or despairing that God cannot deliver?",
                ].map((q, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${PURPLE}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{q}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderLeft: `4px solid ${GOLD}`, borderRadius: 14, padding: 28, marginTop: 16 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>A Closing Prayer</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "O LORD, hear a just cause; attend to our cry from lips that long to be free of deceit. Try our hearts, visit us in the night, and make us honest before you. When we are surrounded by those who close their hearts to pity and stalk like a lion eager to tear, be our defense. Keep us as the apple of your eye; hide us in the shadow of your wings. Teach us not to envy the portion of those whose treasure ends with this life, but to set our hope on you alone. And grant us, at the last, the satisfaction for which we were made: that we shall behold your face in righteousness, and when we awake, we shall be satisfied with your likeness. We ask it through Jesus Christ, in whose face the light of the knowledge of your glory has shone. Amen." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 16 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Teaching Videos</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>
                Video resources for further study and teaching on Psalm 17.
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
