"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const videoItems = [
  { videoId: "kP4tNqWmDcY", title: "Isaiah 16: The Burden of Moab and the Plea for Refuge" },
  { videoId: "wR3yZdLnHmJ", title: "The Throne of Steadfast Love - Isaiah 16:5 Explained" },
  { videoId: "nT8wGhXpBkG", title: "The Pride of Moab and the Prophet's Grief - Isaiah 15-16" },
  { videoId: "rM4sNbVtKrF", title: "BibleProject - Book of Isaiah Overview and the Nations" },
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>

      {/* HERO */}
      <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #1a1a2e 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ color: GOLD, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Old Testament Study</p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>Isaiah Chapter 16</h1>
          <p style={{ color: TEXT, fontSize: "1.05rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: 14, maxWidth: 650 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Then a throne will be established in steadfast love, and on it will sit in faithfulness in the tent of David one who judges and seeks justice and is swift to do righteousness.&rdquo; (Isaiah 16:5)" }} />
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 650 }} dangerouslySetInnerHTML={{ __html: "Isaiah 16 continues the oracle concerning Moab that began in chapter 15, but its tone is anything but cold detachment. Moab, the proud neighbor and ancient rival of Israel, is counseled to send tribute to Jerusalem and to seek refuge under the shadow of Zion. In the very center of this burden of judgment a stunning promise breaks through: a throne established in steadfast love, occupied by a righteous judge in the tent of David &mdash; a messianic glimpse of the coming King. Yet Moab&rsquo;s pride blocks the refuge that is offered, and the chapter dissolves into one of the most poignant laments in all the prophets, as the prophet&rsquo;s own heart moans like a lyre over the ruined vineyards and silenced harvests of a doomed people. The chapter closes with a time-stamped word of judgment: within three years the glory of Moab will be brought into contempt." }} />
        </div>
      </div>

      {/* TABS */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)} style={{ padding: "14px 24px", background: "none", border: "none", color: activeTab === i ? TEXT : MUTED, fontFamily: "Georgia, serif", fontSize: "0.95rem", cursor: "pointer", borderBottom: activeTab === i ? `2px solid ${GOLD}` : "2px solid transparent", whiteSpace: "nowrap" }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px" }}>

        {/* TAB 0: OVERVIEW */}
        {activeTab === 0 && (
          <div>

            {/* Section 1 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: 12 }}>The Place of Isaiah 16</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Isaiah 16 belongs to the great block of oracles against the nations that runs from chapter 13 through chapter 23. Within that block, chapters 15 and 16 form a single, unified burden concerning Moab &mdash; the kingdom that lay east of the Dead Sea, descended from Lot, and long entangled with Israel in a relationship of kinship, conflict, and rivalry. Chapter 15 sounds the alarm of sudden devastation as cities fall in a single night and the roads fill with refugees weeping as they flee. Chapter 16 develops the response: a counsel to seek refuge in Zion, a plea for asylum, a vision of a righteous throne, and finally a lament over the certainty of Moab&rsquo;s ruin." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The chapter unfolds in several movements. Verses 1-5 counsel Moab to send the lamb of tribute to Jerusalem and to seek shelter, and they hold out the astonishing promise of a throne established in steadfast love. Verse 6 names the obstacle: Moab&rsquo;s pride, arrogance, and insolence. Verses 7-12 turn into a sustained lament over Moab&rsquo;s ruined vineyards and silenced joy, in which the prophet&rsquo;s own heart aches. Verses 13-14 conclude with a precise, time-stamped announcement of judgment within three years. The whole chapter holds together the offer of refuge and the certainty of judgment, divine compassion and divine justice." }} />
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: ROSE, marginBottom: 12 }}>Send the Lamb to the Ruler of the Land</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter opens with practical counsel: &ldquo;Send the lamb to the ruler of the land, from Sela, by way of the desert, to the mount of the daughter of Zion&rdquo; (16:1). The lamb is tribute &mdash; an echo of the days when Moab paid lambs and wool to the kings of Israel (2 Kings 3:4). Moab is being urged to renew that submission to Jerusalem, the mount of the daughter of Zion, perhaps in hope of finding protection there. Sela, a rocky stronghold to the south, marks the desperate route of those who have lost their cities and seek shelter elsewhere." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The fugitives are then described with a vivid image: &ldquo;Like fleeing birds, like a scattered nest, so are the daughters of Moab at the fords of the Arnon&rdquo; (16:2). The Arnon was Moab&rsquo;s great river gorge, the natural boundary of the land; now its crossings are crowded with terrified refugees, flushed from their homes like birds whose nest has been overturned. The picture of helpless, panicked flight sets the emotional stage for the plea that follows &mdash; a cry for someone to take them in." }} />
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: 12 }}>A Plea for Refuge and a Throne of Steadfast Love</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "On the lips of Moab&rsquo;s envoys, or perhaps spoken to Zion on Moab&rsquo;s behalf, comes the plea for asylum: &ldquo;Give counsel; grant justice; make your shade like night at the height of noon; shelter the outcasts; do not reveal the fugitive&rdquo; (16:3-4). The imagery is tender. Moab asks Zion to be a deep shadow at the blazing height of noon &mdash; a place of cool protection for those fleeing the heat of destruction. It asks Zion to hide the fugitive, to refuse to hand the outcast over to the destroyer." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Then the oracle lifts to a far horizon. &ldquo;When the oppressor is no more, and destruction has ceased, and he who tramples underfoot has vanished from the land, then a throne will be established in steadfast love, and on it will sit in faithfulness in the tent of David one who judges and seeks justice and is swift to do righteousness&rdquo; (16:4-5). Here, in the middle of an oracle about a pagan neighbor, the prophet sees the Davidic throne &mdash; a throne grounded not in conquest but in chesed, the covenant love of God &mdash; occupied by a king who is faithful, just, and quick to do right. It is a messianic glimpse, a foretaste of the King in whose kingdom even the outcasts of the nations may find refuge." }} />
            </div>

            {/* Section 4 - Key Verse */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 40 }}>
              <h3 style={{ color: GOLD, marginBottom: 12, fontSize: "1.1rem" }}>Key Verse</h3>
              <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 16, margin: 0 }}>
                <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Then a throne will be established in steadfast love, and on it will sit in faithfulness in the tent of David one who judges and seeks justice and is swift to do righteousness.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>Isaiah 16:5 (ESV)</p>
              </blockquote>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GREEN, marginBottom: 12 }}>The Pride of Moab</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The refuge offered in Zion is real, but Moab cannot receive it, and the reason is named bluntly: &ldquo;We have heard of the pride of Moab &mdash; how proud he is! &mdash; of his arrogance, his pride, and his insolence; in his idle boasting he is not right&rdquo; (16:6). The piling up of words for pride &mdash; pride, arrogance, insolence, boasting &mdash; is deliberate. Moab is portrayed as a nation so inflated with self-regard that it cannot stoop to send the lamb, cannot humble itself to seek shelter under Zion&rsquo;s shadow." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Here the chapter exposes the deepest root of Moab&rsquo;s downfall. The offer of mercy stands open, the throne of steadfast love is in view, the shade of Zion is available &mdash; but pride bars the door. Throughout Scripture pride is the posture that refuses refuge, the heart that will not bow to receive grace. Moab&rsquo;s tragedy is not merely that judgment falls but that the very pride which provokes judgment also forecloses the rescue that was held out to it." }} />
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: TEAL, marginBottom: 12 }}>The Lament and the Time-Stamped Judgment</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "From verse 7 the oracle becomes lament. Moab wails for the raisin cakes of Kir-hareseth, the fields of Heshbon languish, the vine of Sibmah &mdash; once spreading its branches to the sea &mdash; is cut down, and the shouts of the grape-treaders fall silent. The harvest joy is stripped away. Most strikingly, the grief is not merely Moab&rsquo;s; the prophet, voicing the heart of God, declares: &ldquo;Therefore my inner parts moan like a lyre for Moab, and my heart for Kir-hareses&rdquo; (16:11). Even judgment is spoken through tears." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Verse 12 notes the futility of Moab&rsquo;s false religion: when Moab wearies himself on the high place and comes to his sanctuary to pray, he will not prevail, for the gods of Moab cannot save. Then verses 13-14 close the oracle with a sober precision. The word the LORD spoke concerning Moab in the past now receives a deadline: &ldquo;In three years, like the years of a hired worker, the glory of Moab will be brought into contempt, in spite of all his great multitude, and those who remain will be very few and feeble&rdquo; (16:14). The certainty and timing of judgment seal the chapter." }} />
            </div>

          </div>
        )}

        {/* TAB 1: KEY THEMES */}
        {activeTab === 1 && (
          <div>

            {/* Theme 1 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GOLD, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Refuge in Zion for the Outcast</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "At the heart of the chapter&rsquo;s opening movement is an offer of refuge. Moab&rsquo;s fugitives are counseled to flee to the mount of the daughter of Zion and to send the lamb of tribute, and Zion is asked to be a shade like night at the height of noon, to shelter the outcasts and hide the fugitive (16:1-4). It is striking that this refuge is offered to Moab &mdash; an ancient enemy, a proud rival &mdash; and not only to Israel. The shadow of Zion is wide enough to cover even the nations." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "This theme of refuge for the outcast runs deep in Isaiah and across Scripture. Zion is repeatedly pictured as the place where the nations stream to find the LORD, where strangers are gathered in, where the outcast is welcomed. The plea &ldquo;shelter the outcasts; do not reveal the fugitive&rdquo; anticipates the gospel welcome to all peoples, the call that goes out to the ends of the earth: come and find refuge under the wings of the God of Israel. The shade of Zion is a foreshadowing of the welcome extended through Christ to all who flee to him." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Yet the refuge offered is not automatic; it must be sought, and it must be sought in humility. Moab is invited to come, but to come it must bend, send the lamb, and submit to the protection of Zion. The tragedy of the chapter is that the very nation invited to find shelter cannot bring itself to seek it. The theme of refuge therefore sits in tension with the theme of pride: the door is open, but only the humble pass through it." }} />
            </div>

            {/* Theme 2 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Pride as the Root of Downfall</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Verse 6 stands as the hinge of the chapter and names the reason judgment falls: &ldquo;We have heard of the pride of Moab &mdash; how proud he is! &mdash; of his arrogance, his pride, and his insolence.&rdquo; The fourfold accumulation of terms for pride is no accident; Moab is defined by its self-exaltation. This is consistent with the wider biblical portrait of Moab as a complacent, settled people, undisturbed and self-satisfied &mdash; Jeremiah 48 famously pictures Moab as wine left undisturbed on its dregs, never poured from vessel to vessel, smug in its security." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Pride in Scripture is never a small fault; it is the great enemy of refuge and the root of ruin. &ldquo;Pride goes before destruction, and a haughty spirit before a fall&rdquo; (Proverbs 16:18). Isaiah&rsquo;s larger vision of the day of the LORD is precisely a day when the proud and lofty are brought low and the LORD alone is exalted (Isaiah 2:11-17). Moab is a case study in this pattern: its arrogance provokes the judgment and simultaneously forecloses the rescue, so that the proud nation falls precisely because it would not stoop to be saved." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The contrast with Zion is pointed. Zion offers a throne established in steadfast love and a refuge for the humble; Moab clings to its idle boasting. The theme presses a searching question into every age: the same pride that exalts a people or a person above the need for grace is the pride that bars the door to grace. The offer of refuge and the warning against pride are two sides of one truth &mdash; only the lowly find shelter in the shadow of God." }} />
            </div>

            {/* Theme 3 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: PURPLE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Messianic Throne of Steadfast Love and Justice</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The theological summit of the chapter is verse 5: &ldquo;A throne will be established in steadfast love, and on it will sit in faithfulness in the tent of David one who judges and seeks justice and is swift to do righteousness.&rdquo; The Hebrew word for steadfast love is chesed &mdash; the loyal, covenant love of God. This throne is not founded on military might or political shrewdness but on chesed and faithfulness, and its occupant is marked by justice and righteousness. The phrase &ldquo;the tent of David&rdquo; ties the throne directly to the Davidic covenant and its promise of an everlasting kingdom (2 Samuel 7)." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "This glimpse of a righteous Davidic king connects to the broader messianic vision of Isaiah. In Isaiah 9 a child is born who reigns on the throne of David to uphold it with justice and righteousness forever; in Isaiah 11 a shoot from the stump of Jesse judges the poor with righteousness and decides with equity for the meek. The throne of chesed in 16:5 belongs to this same line of expectation &mdash; the coming King in whom justice and steadfast love meet, whose reign establishes the security the nations cannot create for themselves." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The New Testament gathers up this hope in Jesus. The angel announces to Mary that her son will be given &ldquo;the throne of his father David,&rdquo; and that &ldquo;he will reign over the house of Jacob forever, and of his kingdom there will be no end&rdquo; (Luke 1:32-33). The throne established in steadfast love, swift to do righteousness, is the throne of the Messiah. That this vision appears in the middle of an oracle to Moab is itself significant: the righteous King of Zion is the refuge not only of Israel but of every outcast who will come and find shelter in his steadfast love." }} />
            </div>

            {/* Theme 4 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GREEN, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Divine Compassion Expressed in Lament</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "One of the most remarkable features of this oracle is that judgment is announced through tears. The prophet does not gloat over Moab&rsquo;s fall; he grieves it. &ldquo;Therefore I weep with the weeping of Jazer for the vine of Sibmah; I drench you with my tears, O Heshbon and Elealeh&rdquo; (16:9). And in verse 11, the deepest note: &ldquo;Therefore my inner parts moan like a lyre for Moab, and my heart for Kir-hareses.&rdquo; The image of the inner being vibrating like the strings of a lyre conveys an aching, resonant sorrow." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "This grief is not merely the prophet&rsquo;s; it discloses the heart of God himself. The LORD does not delight in the death of the wicked but pleads for the turning of the doomed. The God who pronounces judgment on Moab is the same God who weeps over its ruined vineyards. This combination of holiness and compassion runs through the whole prophetic tradition and reaches its fullest expression when Jesus weeps over Jerusalem, longing to gather its children as a hen gathers her chicks, even as he announces its coming desolation." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The lament guards us against two errors. It guards against a sentimental view of God that cannot bear to speak of judgment, for the judgment is real and certain. And it guards against a hard, vindictive view of God that takes pleasure in destruction, for the judgment is spoken with moaning and tears. The God of Isaiah 16 is both just and tender &mdash; he will not leave the proud unjudged, and he will not pronounce that judgment without grief. His compassion does not cancel his justice, and his justice does not silence his compassion." }} />
            </div>

            {/* Theme 5 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: TEAL, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Certainty and Timing of Judgment</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The closing verses of the chapter shift from poetry to precise announcement. &ldquo;This is the word that the LORD spoke concerning Moab in the past. But now the LORD has spoken: In three years, like the years of a hired worker, the glory of Moab will be brought into contempt&rdquo; (16:13-14). The distinction between the word spoken &ldquo;in the past&rdquo; and the word spoken &ldquo;now&rdquo; suggests an older oracle against Moab to which Isaiah now attaches a specific timetable. The vague threat becomes a dated certainty." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The phrase &ldquo;like the years of a hired worker&rdquo; underscores the exactness of the timing. A hired worker counts the days of his contract precisely, neither cutting them short nor extending them; so the three years will be counted exactly. The certainty is not vague foreboding but measured prophecy. The glory and the great multitude of Moab &mdash; the very things in which its pride rested &mdash; will be brought into contempt, and the survivors will be &ldquo;very few and feeble.&rdquo;" }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This time-stamped judgment testifies to the reliability of the prophetic word. God does not announce in order to frighten and then forget; what he speaks, he brings to pass at the appointed time. The fulfillment within a measured span demonstrates that the word of the LORD is not idle. For Moab, the lesson came too late; for the reader, it remains a sober reminder that the warnings of God are neither empty nor open-ended. The day of contempt for the proud arrives on schedule." }} />
            </div>

            {/* Theme 6 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Send the Lamb: A Foreshadowing of the Lamb of God</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter opens with the counsel, &ldquo;Send the lamb to the ruler of the land&rdquo; (16:1). On the historical level, the lamb is tribute &mdash; the renewal of the old arrangement by which Moab paid lambs and wool to the kings of Israel (2 Kings 3:4). To send the lamb is to acknowledge dependence, to submit to the protection of Zion, to seek favor with the ruler of the land. It is an act of humble petition, the opposite of the pride that will soon be named as Moab&rsquo;s undoing." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Many readers across the centuries have heard in this verse a deeper resonance. The way to refuge in Zion is opened by a lamb sent to the ruler of the land &mdash; an image that, read in the light of the whole canon, anticipates the Lamb of God who takes away the sin of the world (John 1:29). It is through a Lamb that the outcast finds shelter, that the door of the King&rsquo;s throne is opened, that mercy is secured. The connection is not the plain sense of Isaiah&rsquo;s words, but the pattern is suggestive: the refuge of Zion is finally reached by way of a lamb." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Set beside the throne established in steadfast love (16:5), the image gathers force. The King who reigns in chesed and the Lamb who is sent to the ruler of the land are, in the fullness of revelation, one and the same Christ &mdash; the Lamb who was slain and who now sits on the throne. In him the refuge offered to Moab is opened to all the nations: the outcast, the fugitive, and the proud-made-humble alike may come and find shelter under the shadow of the Lamb upon the throne." }} />
            </div>

          </div>
        )}

        {/* TAB 2: VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>

            {/* v.1 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 700 }}>Verse 1: Send the Lamb to Zion</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Tribute and Petition</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.1</strong> &mdash; &ldquo;Send the lamb to the ruler of the land, from Sela, by way of the desert, to the mount of the daughter of Zion.&rdquo; Moab is counseled to renew the old tribute of lambs once paid to Israel (2 Kings 3:4), sending it from Sela &mdash; a rocky stronghold in the south &mdash; across the desert route to Jerusalem. The act is one of humble petition: by sending tribute to the ruler of the land, Moab would acknowledge dependence and seek the protection of Zion." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The verse sets the desperate scene. Moab&rsquo;s cities have fallen; its only hope is to look to Jerusalem, the mount of the daughter of Zion, for refuge. The counsel is wise, and the door it points to is open &mdash; but as the chapter will reveal, Moab&rsquo;s pride will not let it walk through. Many readers also hear in &ldquo;send the lamb&rdquo; a far-off foreshadowing of the Lamb through whom the refuge of Zion is finally secured." }} />
            </div>

            {/* vv.2-4 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 2-4: The Plea for Asylum</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Shelter the Outcasts</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.2</strong> &mdash; &ldquo;Like fleeing birds, like a scattered nest, so are the daughters of Moab at the fords of the Arnon.&rdquo; The Arnon gorge marked Moab&rsquo;s northern boundary; now its crossings teem with terrified refugees, scattered like birds whose nest has been destroyed. The image conveys helpless panic &mdash; a people flushed from their homes with nowhere to land." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.3-4</strong> &mdash; &ldquo;Give counsel; grant justice; make your shade like night at the height of noon; shelter the outcasts; do not reveal the fugitive. Let the outcasts of Moab sojourn among you; be a shelter to them from the destroyer.&rdquo; The plea asks Zion to be a deep, cool shadow at the blazing height of noon, to hide the fugitive and refuse to betray the outcast. It is a moving request for asylum &mdash; the cry of the desperate for someone to take them in and protect them from the one who tramples." }} />
            </div>

            {/* vv.4-5 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 4-5: The Throne in Steadfast Love</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>A Messianic Glimpse</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.4b</strong> &mdash; &ldquo;When the oppressor is no more, and destruction has ceased, and he who tramples underfoot has vanished from the land.&rdquo; The vision lifts beyond the present crisis to a time when the violence of the destroyer is finished. The basis for a lasting refuge is not Moab&rsquo;s scheming or Zion&rsquo;s military strength but the coming reign of a righteous king." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.5</strong> &mdash; &ldquo;Then a throne will be established in steadfast love, and on it will sit in faithfulness in the tent of David one who judges and seeks justice and is swift to do righteousness.&rdquo; The throne rests on chesed &mdash; the covenant love of God &mdash; and faithfulness; its king is just, righteous, and quick to do right. The phrase &ldquo;the tent of David&rdquo; anchors the promise in the Davidic covenant. This is a messianic glimpse, the same hope sung in Isaiah 9 and 11 and announced over Mary in Luke 1:32-33 &mdash; the King in whose steadfast love even the nations find shelter." }} />
            </div>

            {/* v.6 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 700 }}>Verse 6: The Pride of Moab</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Obstacle Named</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.6</strong> &mdash; &ldquo;We have heard of the pride of Moab &mdash; how proud he is! &mdash; of his arrogance, his pride, and his insolence; in his idle boasting he is not right.&rdquo; The verse stacks word upon word for pride &mdash; pride, arrogance, insolence, boasting &mdash; to portray a nation utterly inflated with self-regard. This pride is the obstacle: the refuge of Zion is open, but Moab is too proud to stoop and send the lamb." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The verse functions as the hinge of the whole chapter, turning from the offer of refuge to the lament of judgment. It exposes the tragic logic of pride: the same arrogance that provokes God&rsquo;s judgment also forecloses his rescue. Jeremiah 48 develops the same portrait of complacent, self-satisfied Moab. Pride, here as everywhere in Scripture, goes before destruction and bars the door to grace." }} />
            </div>

            {/* vv.7-11 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 700 }}>Verses 7-11: The Lament Over Moab</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>My Heart Moans Like a Lyre</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.7-8</strong> &mdash; &ldquo;Therefore let Moab wail for Moab; let everyone wail. Mourn, utterly stricken, for the raisin cakes of Kir-hareseth. For the fields of Heshbon languish, and the vine of Sibmah.&rdquo; The raisin cakes were the sweet produce of festive joy; now they are objects of mourning. The vine of Sibmah, famed for its abundance, once spread its branches as far as the sea; its destruction signals the loss of Moab&rsquo;s prosperity and gladness." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.9-10</strong> &mdash; &ldquo;Therefore I weep with the weeping of Jazer for the vine of Sibmah; I drench you with my tears, O Heshbon and Elealeh.&rdquo; The shout of joy over the summer fruit and the harvest has fallen silent; gladness and joy are taken away from the fruitful field. No songs are sung in the vineyards; the treader treads out no wine in the presses, for the glad shout has been stilled. The silencing of harvest joy is the sound of a land emptied of its life." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.11</strong> &mdash; &ldquo;Therefore my inner parts moan like a lyre for Moab, and my heart for Kir-hareses.&rdquo; The deepest note of the lament: the prophet&rsquo;s inmost being vibrates with grief like the strings of a lyre. This sorrow voices the very heart of God, who does not delight in the ruin of the proud but grieves over it &mdash; a compassion that anticipates Christ weeping over Jerusalem." }} />
            </div>

            {/* vv.12-14 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 700 }}>Verses 12-14: Futile Prayer and the Three-Year Word</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>In Three Years</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.12</strong> &mdash; &ldquo;And when Moab presents himself, when he wearies himself on the high place, when he comes to his sanctuary to pray, he will not prevail.&rdquo; Moab turns to its own gods on the high places, but its religion is powerless. The deities of Moab cannot save; the weary climb to the sanctuary ends in futility. The contrast with the throne of steadfast love in verse 5 is stark: there is a King who saves, but Moab seeks help where there is none." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.13</strong> &mdash; &ldquo;This is the word that the LORD spoke concerning Moab in the past.&rdquo; The verse marks a distinction between an earlier word against Moab and the new, dated word about to be given. The prophecy is not freshly invented; it is the confirmation and timing of a judgment long announced." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.14</strong> &mdash; &ldquo;But now the LORD has spoken: In three years, like the years of a hired worker, the glory of Moab will be brought into contempt, in spite of all his great multitude, and those who remain will be very few and feeble.&rdquo; The timing is exact &mdash; counted like a hired worker&rsquo;s contracted years, neither shortened nor lengthened. The glory and the multitude in which Moab&rsquo;s pride rested will be reduced to a feeble remnant. The certainty and precision of the word testify that what the LORD speaks he surely brings to pass." }} />
            </div>

          </div>
        )}

        {/* TAB 3: APPLICATION */}
        {activeTab === 3 && (
          <div>

            {/* Application 1 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GOLD, fontSize: "1.1rem", marginBottom: 12 }}>Run to the Refuge That Is Offered</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Isaiah 16 holds out the shade of Zion to a fleeing, frightened people &mdash; and remarkably, to an enemy people. The God who judges is also the God who offers shelter to the outcast and hides the fugitive from the destroyer. The chapter reminds us that refuge is genuinely available, that the shadow of God&rsquo;s protection is wide enough to cover even those who have no claim on it." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The application is to run to that refuge without delay and without pride. The throne established in steadfast love is the throne of Christ, and his welcome extends to every nation and every outcast who will come. Whatever destroyer pursues us &mdash; sin, guilt, fear, judgment &mdash; the call of this chapter is to flee to the King who shelters the fugitive in his chesed, rather than to trust the false high places that cannot save." }} />
            </div>

            {/* Application 2 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: ROSE, fontSize: "1.1rem", marginBottom: 12 }}>Beware the Pride That Bars the Door</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Moab&rsquo;s tragedy was not only that judgment fell but that its pride foreclosed the rescue held out to it. The door of refuge stood open; the throne of steadfast love was in view; yet Moab would not stoop to send the lamb. The same arrogance that provoked the judgment also blocked the mercy that might have averted it." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "This is a sobering warning to every age. Pride is the posture that refuses grace, the heart that will not bow to receive what it cannot earn. The application is to search out the idle boasting in our own hearts &mdash; the self-sufficiency, the complacency, the refusal to admit need &mdash; and to humble ourselves while the door of refuge still stands open. Only the lowly find shelter in the shadow of God." }} />
            </div>

            {/* Application 3 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: PURPLE, fontSize: "1.1rem", marginBottom: 12 }}>Rest in the Throne of Steadfast Love</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "In the middle of an oracle of judgment, Isaiah lifts our eyes to a throne established in steadfast love, occupied by a king who judges with justice and is swift to do righteousness. This is no earthly security; it is the messianic hope fulfilled in Christ, who has been given the throne of his father David and whose kingdom has no end. The believer&rsquo;s deepest security rests not on circumstances but on this throne." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The application is to anchor our hope in the reign of the righteous King when the oppressors and destroyers of this world rage. The thrones of human power rise and fall; the throne of chesed endures. To live under that throne is to know that justice and steadfast love are not finally at war, but meet perfectly in the King who is coming and who reigns even now. We can rest in the certainty that he will set all things right." }} />
            </div>

            {/* Application 4 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Grieve Over Judgment as God Does</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The prophet does not gloat over Moab&rsquo;s fall; his inner parts moan like a lyre, and his tears drench the ruined vineyards. This grief reveals the heart of God, who takes no pleasure in the death of the wicked but pleads for their turning. The same compassion is seen when Jesus weeps over Jerusalem even as he announces its desolation." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The application reaches into how we regard those under judgment, including our enemies. It is easy to take a hard satisfaction in the downfall of the proud or the hostile. Isaiah 16 calls us to a different posture &mdash; to feel the grief of God over the lost, to long for their rescue rather than relish their ruin. To carry both a firm conviction about judgment and a tender, aching compassion for the judged is to share the very heart of God." }} />
            </div>

            {/* Application 5 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: TEAL, fontSize: "1.1rem", marginBottom: 12 }}>Reflection Questions</h3>
              <ol style={{ color: MUTED, lineHeight: 2, paddingLeft: 20, margin: 0 }}>
                <li dangerouslySetInnerHTML={{ __html: "Zion is asked to be a shade like night at the height of noon, to shelter the outcasts. Where in your life do you most need to flee to God as a refuge? What keeps you from running to that shelter?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Moab&rsquo;s pride barred the door to the rescue held out to it. What forms of pride, self-sufficiency, or complacency might be keeping you from receiving the grace God offers?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The throne in verse 5 is established in steadfast love and swift to do righteousness. How does the picture of Christ as this righteous, loving King reshape where you place your security?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The prophet&rsquo;s heart moans like a lyre for Moab. How do you respond to the downfall of those who oppose you or oppose God? What would it mean to grieve over them as God does?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Moab wearied himself on the high place but could not prevail. Are there false sources of help &mdash; idols of money, status, control, or self &mdash; to which you turn in crisis instead of the living God?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The counsel was to send the lamb to the ruler of the land. In the light of the whole Bible, how does the Lamb of God open the way into the refuge of God&rsquo;s presence for you?" }} />
              </ol>
            </div>

            {/* Application 6 */}
            <div style={{ background: `linear-gradient(135deg, ${GREEN}22 0%, ${TEAL}11 100%)`, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Prayer Focus</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Lord, you offered Moab the shade of Zion, and Moab&rsquo;s pride refused it. Guard my heart from the arrogance that bars the door to your grace, and make me humble enough to send the lamb and seek shelter under your shadow. I thank you for the throne established in steadfast love, for Christ the righteous King who judges and seeks justice and is swift to do right; let my security rest there and nowhere else. Teach me your own compassion, that I might grieve over the lost rather than gloat over the fallen, and weep for my enemies as you weep for them. Keep me from the false high places that cannot save, and let me find in you, the living God, the refuge that never fails. Through Jesus Christ, the Lamb upon the throne, amen." }} />
            </div>

          </div>
        )}

        {/* VIDEO SECTION - always visible */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: 8, color: TEXT }}>Video Teaching</h2>
          <p style={{ color: MUTED, marginBottom: 32, fontSize: "0.95rem" }}>Watch these selected teachings to deepen your understanding of Isaiah 16.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "12px 16px" }}>
                  <p style={{ color: TEXT, fontSize: "0.9rem", fontWeight: 600, margin: 0 }}>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
