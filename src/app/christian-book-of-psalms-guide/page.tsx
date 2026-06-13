"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "What Are the Psalms",
  "Types of Psalms",
  "Jesus and the Psalms",
  "Praying the Psalms",
  "The Imprecatory Psalms",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "What Are the Psalms",
    heading: "What Are the Psalms?",
    reference: "Psalms 1&ndash;150",
    paragraphs: [
      "The Book of Psalms is at once the most ancient and the most contemporary book in the Bible. It is a collection of 150 poems, songs, and prayers composed over many centuries &mdash; from Moses (Psalm 90, the oldest) through David&rsquo;s court, the Asaphite guild, the sons of Korah, and unnamed writers across the entire history of Israel. No other book in Scripture has been used as continuously and as universally: the Psalms were sung in the Jerusalem Temple, chanted in the ancient synagogue, recited by Jesus and his disciples at the Last Supper (the Hallel, Psalms 113&ndash;118), and have structured Christian worship from the earliest communities to the present.",
      "The Psalms are arranged into five books &mdash; Psalms 1&ndash;41, 42&ndash;72, 73&ndash;89, 90&ndash;106, and 107&ndash;150 &mdash; a structure that almost certainly mirrors the five books of Moses (the Pentateuch). Each book ends with a doxology (41:13, 72:18&ndash;19, 89:52, 106:48), and the entire collection concludes with the great crescendo of Psalms 146&ndash;150, each of which begins and ends with &ldquo;Praise the LORD&rdquo; (Hallelujah). The arrangement is not random but deliberate: the collection moves broadly from lament and petition toward praise, ending in a sustained outburst of worship.",
      "The superscriptions &mdash; the brief headings that precede most psalms &mdash; give important historical and musical information. Seventy-three psalms are attributed to David, fourteen to Asaph (the director of Temple music), eleven to the sons of Korah, and two to Solomon. The psalms of ascent (120&ndash;134) were sung by pilgrims traveling up to Jerusalem for the great feasts. The musical terms &mdash; &ldquo;to the choirmaster,&rdquo; &ldquo;with stringed instruments,&rdquo; &ldquo;according to The Doe of the Dawn&rdquo; &mdash; indicate these were living, performed pieces of music, not merely literary texts.",
      "No book of the Old Testament is quoted more frequently in the New Testament than the Psalms. Jesus quotes them repeatedly; Paul&rsquo;s letters are saturated with them; Hebrews reads them as the theological scaffolding for the priesthood of Christ; Revelation&rsquo;s worship scenes draw heavily on their imagery. The early church did not simply read the Psalms as devotional poetry &mdash; it read them as prophecy, as the voice of Christ, as the script that the Messiah came to inhabit and fulfill.",
      "Augustine of Hippo, writing his Confessions in the fourth century, captured what makes the Psalms unique: &ldquo;Our heart is restless until it rests in Thee.&rdquo; The Psalms are the grammar of that restlessness &mdash; the authorized vocabulary for the full range of human experience before God. They give words to the wordless, form to the formless, and permission to bring everything &mdash; rage, gratitude, despair, exultation, confusion, love &mdash; into the presence of God without sanitizing or suppressing any of it.",
      "Dietrich Bonhoeffer, writing from a Nazi prison about the Psalms, made a startling claim: when we pray the Psalms, we are not merely praying our own prayers through them; we are praying with and in Christ. The Psalms, Bonhoeffer argued, are Christ&rsquo;s prayer book. He prayed them; they express his inner life before the Father; and we pray them because we are &ldquo;in Christ.&rdquo; This insight &mdash; that the Psalms are not just Israel&rsquo;s prayers but the Son&rsquo;s prayers that we enter through union with him &mdash; transforms the entire enterprise of praying the Psalter.",
      "The Psalms are poetry, and reading them as such matters. Hebrew poetry does not primarily use rhyme; it uses parallelism &mdash; the repetition and development of ideas across two or three lines. &ldquo;The Lord is my shepherd; I shall not want&rdquo; (Ps. 23:1): the second clause unpacks the first. &ldquo;He leads me beside still waters; he restores my soul&rdquo; (23:2&ndash;3a): concrete image followed by spiritual application. Reading the Psalms slowly, attending to how the lines develop each other, is a fundamentally different act from rapid linear reading. The Psalms were made to be savored.",
    ],
  },
  {
    id: "Types of Psalms",
    heading: "Types of Psalms",
    reference: "Key examples across the Psalter",
    paragraphs: [
      "Biblical scholars have identified several major genres within the Psalter, and understanding these genres helps the reader hear each psalm on its own terms rather than forcing them all into a single mold. The genre of a psalm determines how it moves, what it expects of the reader or singer, and what emotional journey it is designed to facilitate. The great form-critic Hermann Gunkel established this framework in the early twentieth century, and while scholars debate the details, the basic genre distinctions have proved enormously illuminating.",
      "Praise psalms (hymns) are the most immediately accessible. They follow a simple three-part structure: a call to praise (&ldquo;Praise the LORD!&rdquo;), reasons for praise (&ldquo;for he is good, for his steadfast love endures forever&rdquo;), and a renewed call to praise. Psalms 8, 19, 100, and 150 are classic examples. Psalm 8 begins and ends with &ldquo;O LORD, our Lord, how majestic is your name in all the earth!&rdquo; &mdash; a perfect envelope structure. These psalms are not merely expressions of individual devotion; they are communal declarations about the nature of God and the proper posture of creation before its Creator.",
      "Lament psalms are the largest single category in the Psalter &mdash; over sixty, by most counts. Individual laments (Ps. 22, 51, 130) address personal crisis: suffering, sin, abandonment, illness, betrayal. Communal laments (Ps. 44, 80) address national disaster or defeat. The structure of lament is consistent: address to God, complaint (the situation is stated honestly), petition (specific requests), expression of trust (often a dramatic turn called the Vertrauensbekenntnis, or confession of trust), and a vow of praise. Crucially, most laments end not in despair but in trust &mdash; the movement is from honest complaint to renewed confidence in God&rsquo;s character, even when the circumstances have not changed.",
      "Royal psalms (Ps. 2, 45, 72, 89, 110) celebrate the Davidic king and were probably used in coronation ceremonies and royal festivals. They speak of the king as God&rsquo;s son (2:7), as the agent of God&rsquo;s justice (72:2&ndash;4), as a priest after the order of Melchizedek (110:4). These psalms cannot be fully satisfied by any historical king of Israel, which is precisely why the New Testament reads them as pointing beyond Israel&rsquo;s kings to Israel&rsquo;s Messiah. The unfulfilled excess of the royal psalms is not poetic exaggeration; it is prophetic anticipation.",
      "Wisdom psalms (Ps. 1, 37, 49, 73, 112, 119, 128) are concerned with instruction in right living and the problem of theodicy &mdash; why the righteous suffer and the wicked prosper. Psalm 1, which serves as the gateway to the entire Psalter, describes two ways: the way of the righteous (meditating on Torah, like a tree planted by streams) and the way of the wicked (like chaff blown away). Psalm 73 is perhaps the most sophisticated theodicy in the Psalms: the psalmist nearly despairs when he sees the wicked prospering, until he enters the sanctuary and sees their end from God&rsquo;s perspective.",
      "The psalms of ascent (120&ndash;134) form a distinct group that pilgrims sang as they made the journey up to Jerusalem for the three great feasts (Passover, Pentecost, Tabernacles). They are mostly short, concentrated, and memory-friendly. They move through themes of trust (121: &ldquo;I lift up my eyes to the hills&rdquo;), longing for Jerusalem (122), communal unity (133: &ldquo;how good and pleasant it is when brothers dwell in unity&rdquo;), and hope in the LORD (130: &ldquo;out of the depths I cry to you&rdquo;). Their journey-character gives them a natural shape: they are pilgrimage songs for pilgrims on the way.",
      "Thanksgiving psalms are responses to specific answered prayer &mdash; what the lament had asked for has been received, and the psalmist returns to report to the community and publicly acknowledge God&rsquo;s faithfulness. Psalm 116 is a beautiful example: &ldquo;I love the LORD, because he has heard my voice and my pleas for mercy... The snares of death encompassed me... then I called on the name of the LORD: &lsquo;O LORD, I pray, deliver my soul!&rsquo;&rdquo; And he did. The thanksgiving psalm is not merely private relief; it is a public witness designed to build the community&rsquo;s faith.",
    ],
  },
  {
    id: "Jesus and the Psalms",
    heading: "Jesus and the Psalms",
    reference: "The Psalms in the New Testament",
    paragraphs: [
      "No book of the Old Testament is more central to understanding Jesus than the Psalms. Jesus did not merely quote them occasionally; he prayed them, inhabited them, and fulfilled them in his life, death, and resurrection. Luke 24:44 is the hermeneutical key: &ldquo;These are my words that I spoke to you while I was still with you, that everything written about me in the Law of Moses and the Prophets and the Psalms must be fulfilled.&rdquo; The Psalms are not incidentally connected to Jesus &mdash; they are his script, the text he came to inhabit and complete.",
      "The most dramatic use of the Psalms by Jesus occurs on the cross: &ldquo;My God, my God, why have you forsaken me?&rdquo; (Matt. 27:46; Mark 15:34) is the first verse of Psalm 22, recited in Hebrew (Eloi, Eloi, lema sabachthani). This was not merely a cry of despair; in quoting Psalm 22:1, Jesus was directing attention to the entire psalm. Psalm 22 moves from the deepest abandonment (&ldquo;I am a worm and not a man&rdquo;) through vivid descriptions of crucifixion-like suffering (pierced hands and feet, bones out of joint, garments divided by lot) to a triumphant conclusion: &ldquo;He has not despised or scorned the suffering of the afflicted one; he has not hidden his face from him but has listened to his cry for help&rdquo; (22:24). Jesus dies quoting a psalm that ends in vindication.",
      "Psalm 110:1 is the most quoted Old Testament text in the New Testament: &ldquo;The LORD said to my Lord: &lsquo;Sit at my right hand, until I make your enemies your footstool.&rsquo;&rdquo; Jesus himself uses it to stump the Pharisees (Matt. 22:41&ndash;46): how can the Messiah be David&rsquo;s son if David calls him &ldquo;my Lord&rdquo;? The Apostles use Psalm 110 to explain the resurrection and ascension (Acts 2:34&ndash;35), the high priesthood of Christ (Hebrews 5:6, 7:17, 110:4 &mdash; the Melchizedek connection), and the session of Christ at the right hand of the Father. No single verse does more theological work in the New Testament.",
      "Psalm 2:7 &mdash; &ldquo;You are my Son; today I have begotten you&rdquo; &mdash; is heard at Jesus&rsquo;s baptism (Matt. 3:17: &ldquo;This is my beloved Son&rdquo;), at the transfiguration (Matt. 17:5), and throughout the Letter to the Hebrews as the foundation for Christ&rsquo;s divine sonship. Psalm 118:22 &mdash; &ldquo;The stone that the builders rejected has become the cornerstone&rdquo; &mdash; Jesus quotes in the parable of the tenants (Matt. 21:42) as a reference to his own rejection and vindication. Psalm 69:9 (&ldquo;Zeal for your house has consumed me&rdquo;) is quoted in John 2:17 at the Temple cleansing. The Psalms provide the vocabulary for the most decisive events of Jesus&rsquo;s life.",
      "The Last Supper almost certainly ended with the singing of the Hallel &mdash; Psalms 113&ndash;118 &mdash; which was the Passover tradition. Matthew 26:30 notes that after supper they &ldquo;sang a hymn&rdquo; and went out to the Mount of Olives. Jesus walked to Gethsemane having just sung &ldquo;It is better to take refuge in the LORD than to trust in man&rdquo; (118:8&ndash;9) and &ldquo;This is the day that the LORD has made; let us rejoice and be glad in it&rdquo; (118:24). The Psalms were not background music at the Last Supper; they were the theological preparation for the events that followed.",
      "What does it mean that Jesus prayed the lament psalms? He prayed Psalm 22 in extremis on the cross; he presumably prayed Psalm 88 (&ldquo;darkness is my closest friend&rdquo;) and Psalm 69 (&ldquo;I have come into deep waters, and the flood sweeps over me&rdquo;). Bonhoeffer&rsquo;s point becomes vivid: if Jesus prayed these psalms from within the depths of human suffering, then when we pray them we are not merely expressing our own pain &mdash; we are entering into the prayer of the one who has already been to the uttermost depth and come back. The lament psalms are not evidence that God is absent; they are evidence that God in Christ went there first.",
      "The resurrection changes how all the Psalms are read. Psalm 16:10 &mdash; &ldquo;you will not abandon my soul to Sheol, or let your holy one see corruption&rdquo; &mdash; Peter applies directly to the resurrection of Jesus (Acts 2:27). Psalm 22, which began in abandonment, points through the cross to the vindication of the resurrection. Psalm 110:1, the king seated at God&rsquo;s right hand, is the explanation of the ascension. The Psalms are not superseded by the New Testament; they are fulfilled in it &mdash; which means they now illuminate the New Testament from within, and the New Testament illuminates the Psalms from without.",
    ],
  },
  {
    id: "Praying the Psalms",
    heading: "Praying the Psalms",
    reference: "The Psalter as a school of prayer",
    paragraphs: [
      "The Psalms were not written to be studied &mdash; they were written to be prayed. Their natural habitat is not the library but the sanctuary, the bedroom at 3 a.m., the long commute, the moment of crisis when words will not come on their own. The genius of the Psalter is that it gives us words when we have none: it authorizes the full range of human experience before God and models what honest prayer looks like in every season of life. Bonhoeffer put it directly: &ldquo;Whenever the Psalter is abandoned, an incomparable treasure vanishes from the Christian church.&rdquo;",
      "The practice of lectio divina with a psalm is one of the oldest forms of Christian prayer. It involves four movements: reading (lectio) the psalm slowly, allowing individual words or phrases to stand out; meditation (meditatio) on what has arrested your attention; response (oratio) in personal prayer that arises from the text; and contemplation (contemplatio) &mdash; resting in God&rsquo;s presence with what has emerged. This is not a technique for extracting information from the Bible; it is a practice of letting the Bible pray in you. Thomas Merton described lectio divina as &ldquo;the encounter with God in his word, not merely the reading of it.&rdquo;",
      "The Daily Office &mdash; the tradition of structured morning and evening prayer &mdash; has been organized around the Psalms since at least the fourth century. The Anglican tradition (drawing on Cranmer&rsquo;s 1549 Book of Common Prayer) divides the 150 psalms across 30 days, so that those who pray the daily office morning and evening read through the entire Psalter every month &mdash; twelve times a year. Over a lifetime of this practice, the Psalms become the furniture of the mind: the words are there before conscious thought, shaping perception before deliberate reflection. This is formation, not information.",
      "Walter Brueggemann&rsquo;s three categories of psalms &mdash; psalms of orientation, psalms of disorientation, and psalms of new orientation &mdash; offer perhaps the most practically useful framework for finding your place in the Psalter. Psalms of orientation (23, 1, 145) speak from a place of settled confidence and gratitude; life is ordered, God is present and good. Psalms of disorientation (22, 88, 130) speak from crisis, loss, or desolation; the world has come apart. Psalms of new orientation (30, 40, 116) speak from the other side of crisis, where God has acted and gratitude is shot through with the memory of darkness. Knowing which category you are in helps you find the psalm that speaks from where you actually are.",
      "For specific emotional states, specific psalms have served Christians across the centuries. Psalm 23 for fear and threat of death &mdash; the shepherd&rsquo;s care in the valley of the shadow. Psalm 46 for civic catastrophe and global upheaval &mdash; &ldquo;God is our refuge and strength, a very present help in trouble... though the mountains be moved into the heart of the sea.&rdquo; Psalm 51 for confession &mdash; David&rsquo;s prayer after Bathsheba, the most comprehensive prayer of repentance in Scripture. Psalm 88 for depression and God&rsquo;s apparent absence &mdash; the only psalm that ends without a turn to hope, giving permission to the one for whom hope is not yet possible. Psalm 131 for anxious striving &mdash; the image of the weaned child resting on its mother&rsquo;s breast.",
      "Eugene Peterson, author of The Message and a pastor of thirty years, described his practice of Psalm-praying in &ldquo;Answering God&rdquo;: the Psalms teach us to pray by changing the subject from ourselves to God. Most of our natural prayer begins with our needs and stays there. The Psalms begin with God &mdash; who he is, what he has done, what he promises &mdash; and then bring our needs into that larger context. This is not denial of need but the proper ordering of it: the need is real, and it is addressed by a God who is more real. The Psalms are not therapy; they are theology in the first person.",
      "The practice of praying a psalm as your own prayer &mdash; not merely reading it but speaking it to God as your actual words &mdash; requires a certain kind of trust. Some psalms will feel exactly right immediately; others will feel foreign, even dishonest. The discipline is to pray them anyway &mdash; to inhabit the words that don&rsquo;t yet fit, trusting that they will eventually shape the soul. Bonhoeffer wrote that the Psalms we find most alien are often the ones we most need, because they expand the range of what we are willing to bring before God. The prayer that cannot yet say &ldquo;I will bless the LORD at all times&rdquo; (Ps. 34:1) may need to begin there precisely because it cannot get there on its own.",
    ],
  },
  {
    id: "The Imprecatory Psalms",
    heading: "The Imprecatory Psalms",
    reference: "Psalms 137, 109, 69",
    paragraphs: [
      "The imprecatory psalms are the most troubling texts in the Psalter and among the most troubling in all of Scripture. Psalm 137, composed after the Babylonian exile, ends with the infamous verse: &ldquo;Happy shall he be who takes your little ones and dashes them against the rock!&rdquo; (137:9). Psalm 109 calls down curses on an enemy with extraordinary specificity: may his days be few, may another take his office, may his children be fatherless and his wife a widow, may his posterity be cut off. Psalm 69:22&ndash;28 petitions God to pour out his wrath on enemies, let them not be forgiven, and blot them out of the book of life. C.S. Lewis called these psalms &ldquo;a devilish spirit&rdquo; and admitted he found them &ldquo;terrible.&rdquo;",
      "The first interpretive approach is historical and contextual reading: these psalms express what the enemies deserve, voiced by people who have suffered enormously at their hands. Psalm 137 was written by survivors of the Babylonian conquest, during which children actually were killed. The imprecation is not a personal vendetta but an appeal to God&rsquo;s justice in the face of atrocity. To read the prayer against its historical context &mdash; refugees weeping by a foreign river, their city in ruins, their children killed &mdash; is to hear it differently. It is the prayer of someone for whom polite theodicy is not an option: God, do you see? Will you act?",
      "The second approach is christological: Christ on the cross absorbed the curse that these psalms call down on enemies. Galatians 3:13 states that Christ became a curse for us. The imprecatory prayers find their fulfillment not in the destruction of the enemy but in the destruction of the curse itself &mdash; borne by Christ, so that those who deserved the curse might receive mercy instead. This reading does not require us to pray these psalms literally against actual human enemies; it reads them as anticipating the cross, where God&rsquo;s justice and mercy met. The enemy in the psalm becomes the enemy within &mdash; sin and death &mdash; which Christ defeated.",
      "The third approach is eschatological: the imprecatory psalms are prayers for God&rsquo;s ultimate justice at the end of history. This is consistent with Revelation 6:9&ndash;10, where the martyrs cry out from under the altar: &ldquo;O Sovereign Lord, holy and true, how long before you will judge and avenge our blood on those who dwell on the earth?&rdquo; The imprecation is not vigilante justice but eschatological petition &mdash; a plea that God&rsquo;s final judgment will vindicate the innocent and punish the guilty. Prayed in this key, Psalm 137 is not a wish to harm babies but a cry that the violence done to the innocent will not be forgotten or left unanswered.",
      "The fourth approach is pastoral: the imprecatory psalms give authorized language for rage that must go somewhere. The alternatives to bringing your hatred and desire for revenge before God are to suppress it (which does not make it go away, it makes it toxic), to act on it (which is forbidden), or to carry it alone (which destroys you). The Psalms offer a fourth option: pour it out before God, and let God decide what to do with it. This is not moral endorsement of the content; it is pastoral wisdom about what to do with dark emotions. The imprecatory psalm says: this is how I feel. God, you handle it.",
      "C.S. Lewis, despite his discomfort, arrived at a nuanced position in &ldquo;Reflections on the Psalms.&rdquo; He recognized that the hatred in these psalms is at least honest &mdash; it does not pretend to feelings that are not there. And he saw that the psalmists take their grievances to God rather than acting on them. &ldquo;They leave vengeance to God,&rdquo; Lewis noted &mdash; which is precisely what Paul commands in Romans 12:19: &ldquo;Vengeance is mine, I will repay, says the Lord.&rdquo; The imprecatory psalms are the pre-Pauline enactment of this same principle: bringing the desire for justice before God and placing it in his hands.",
      "The consensus among thoughtful interpreters is that these psalms should not simply be excised from Christian use &mdash; to do so would be to sanitize the Psalter and to leave people without authorized language for some of their darkest experiences. At the same time, they must be prayed with theological self-awareness: not as personal curses against individual enemies, but as honest depositing of rage before God, as eschatological appeals for divine justice, and as texts that point forward to the cross where the ultimate answer to human violence was given. They are difficult psalms precisely because they refuse to let us pretend that evil is not real or that we do not sometimes want it destroyed.",
    ],
  },
];

const videoItems = [
  { videoId: "8cXTlLe3Wno", title: "Tim Keller on the Psalms — Praying Your Emotions" },
  { videoId: "l9EFJkJbKjs", title: "How to Pray the Psalms — Eugene Peterson" },
  { videoId: "aaFMEMJRXDo", title: "Walter Brueggemann on the Psalms of Lament" },
];

export default function PsalmsGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;
  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: ACCENT, color: "#fff", padding: "4px 18px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>
            ISRAEL&rsquo;S PRAYER BOOK &amp; HYMNAL
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, margin: "0 0 14px", lineHeight: 1.15 }}>
            Book of Psalms Guide
          </h1>
          <p style={{ color: MUTED, maxWidth: 600, margin: "0 auto", lineHeight: 1.75, fontSize: 16 }}>
            The Psalms are the authorized vocabulary of the soul before God &mdash; 150 poems covering the full range of human experience: praise and lament, confidence and despair, royal celebration and exile&rsquo;s grief.
          </p>
        </div>

        {/* Key verse banner */}
        <div style={{ background: ACCENT + "18", border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "14px 24px", marginBottom: "2.5rem", textAlign: "center" }}>
          <p style={{ margin: 0, fontStyle: "italic", fontWeight: 600, color: TEXT, fontSize: 15 }}>
            &ldquo;Out of the depths I cry to you, O LORD! O Lord, hear my voice! Let your ears be attentive to the voice of my pleas for mercy.&rdquo; &mdash; Psalm 130:1&ndash;2
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: "2rem", flexWrap: "wrap" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                background: tab === t ? ACCENT : CARD,
                color: tab === t ? "#fff" : MUTED,
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                borderRadius: 8,
                padding: "8px 16px",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 14,
                transition: "all 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Content: text tabs */}
        {tab !== "Videos" && currentSection && (
          <div>
            <div style={{ marginBottom: "1.75rem" }}>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: ACCENT, margin: "0 0 6px" }}>
                {currentSection.heading}
              </h2>
              <div
                style={{ color: MUTED, fontSize: 14, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: currentSection.reference }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderLeft: `3px solid ${ACCENT}`,
                    borderRadius: "0 10px 10px 0",
                    padding: "1.25rem 1.5rem",
                    lineHeight: 1.85,
                    fontSize: 15,
                    color: TEXT,
                  }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Videos tab */}
        {tab === "Videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: 22, marginBottom: 8, marginTop: 0 }}>
                Teaching Videos
              </h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: "1.5rem", lineHeight: 1.7, margin: "0 0 1.5rem" }}>
                Scholars and pastors on the Book of Psalms &mdash; how to pray them, understand them, and let them shape the soul.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {videoItems.map((v) => (
                  <div
                    key={v.videoId}
                    style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}
                  >
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: ACCENT, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{v.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Closing callout */}
        <div style={{ marginTop: "3rem", background: ACCENT + "12", border: `1px solid ${ACCENT}33`, borderRadius: 14, padding: "2rem", textAlign: "center" }}>
          <h3 style={{ color: ACCENT, fontWeight: 800, fontSize: 20, marginTop: 0, marginBottom: 10 }}>
            Enter the Psalter
          </h3>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
            Begin with Psalm 1 and Psalm 23. Then find the psalm that matches where you are: Psalm 51 for confession, Psalm 46 for fear, Psalm 88 for darkness, Psalm 100 for gratitude. Let the Psalms teach you to pray.
          </p>
        </div>
      </main>
    </div>
  );
}
