"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const ACCENT = ROSE;

type VideoEntry = { videoId: string; title: string };

const VIDEOS: VideoEntry[] = [];

function VideoEmbed({ v }: { v: VideoEntry }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: "1rem" }}>
      {open ? (
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src={`https://www.youtube.com/embed/${v.videoId}?autoplay=1`}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
          />
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: "8px", padding: "1rem", cursor: "pointer", textAlign: "left", color: TEXT }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "1.25rem" }}>&#9654;</span>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{v.title}</div>
              <div style={{ fontSize: "0.85rem", color: MUTED }}>Click to play</div>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

const TABS = ["Overview", "Themes", "Verse by Verse", "Application"];

const KEY_DETAILS = [
  { label: "Author", value: "Anonymous" },
  { label: "Position", value: "Tenth of the 15 Songs of Ascents (Psalm 129)" },
  { label: "Collection", value: "Songs of Ascents -- pilgrim psalms to Jerusalem" },
  { label: "Genre", value: "Communal psalm of confidence with imprecation" },
  { label: "Structure", value: "Testimony of survived affliction (vv. 1-4) + Prayer against Zion's haters (vv. 5-8)" },
  { label: "Key Verse", value: "v. 2 -- Greatly have they afflicted me from my youth, yet they have not prevailed against me" },
  { label: "NT Connection", value: "2 Corinthians 4:8-9 afflicted but not crushed; Romans 8:37 more than conquerors" },
];

const THEMES = [
  {
    color: ROSE,
    title: "From My Youth: The Long History of Affliction and Survival",
    body: `Psalm 129 opens with a call to communal memory: "Greatly have they afflicted me from my youth -- let Israel now say -- greatly have they afflicted me from my youth, yet they have not prevailed against me." The phrase "from my youth" (mine'uray) personifies Israel as an individual recalling a lifetime of affliction stretching back to the nation's beginnings. Israel's "youth" refers to its formative period -- the slavery in Egypt, the wilderness wanderings, the oppression by surrounding nations during the period of the Judges.
<br/><br/>
The repetition of "greatly have they afflicted me from my youth" (rabbat tseraruni mine'uray) is a deliberate liturgical device, inviting the congregation to echo and own the testimony. The "let Israel now say" formula (identical to Psalm 124:1) makes this a corporate confession: the whole community is invited to recall and affirm the long history of affliction and survival. This is not the lament of an individual but the collective memory of a people who have been repeatedly oppressed and have repeatedly survived.
<br/><br/>
The crucial turn comes in the second half of verse 2: "yet they have not prevailed against me" (gam lo yakhlu li). Despite the greatness and duration of the affliction, the enemies have not won. Israel has been afflicted but not annihilated, oppressed but not extinguished. This is the central testimony of the psalm: the survival of God's people through centuries of opposition is itself a witness to God's faithfulness. The nation that should have been destroyed many times over still exists, still sings, still makes pilgrimage to Zion.
<br/><br/>
Derek Kidner observes: "The survival of Israel against all the odds is one of the standing miracles of history, and this psalm celebrates it. Every empire that set out to destroy this people has itself passed away, while the afflicted people endures." For the New Testament church, this theme is taken up in the promise that "the gates of hell shall not prevail against" the church (Matthew 16:18) and in Paul's testimony: "We are afflicted in every way, but not crushed; perplexed, but not driven to despair; persecuted, but not forsaken; struck down, but not destroyed" (2 Corinthians 4:8-9). The pattern of affliction-without-defeat that marks Israel's history marks the church's history too.`,
  },
  {
    color: GOLD,
    title: "The Plowers Plowed Upon My Back: The Imagery of Brutal Oppression",
    body: `Verse 3 supplies one of the most vivid and disturbing images in the Psalter: "The plowers plowed upon my back; they made long their furrows." The metaphor draws on the familiar agricultural practice of plowing -- cutting deep, parallel furrows into the soil to prepare it for planting. But here the field being plowed is Israel's own back, and the furrows are the wounds of oppression, perhaps evoking the literal scars of the lash on the backs of slaves and prisoners.
<br/><br/>
The image is one of systematic, deliberate, prolonged cruelty. Plowing is not a single blow but a sustained process of cutting furrow after furrow across a field. "They made long their furrows" emphasizes the extent and duration of the affliction -- the oppressors did not strike once but cut deep and long, working their cruelty methodically across the whole expanse of the people's suffering. The personification of Israel as a plowed field captures the way oppression treats persons as mere objects to be worked over for the oppressor's benefit.
<br/><br/>
Christian readers have long seen in this verse a foreshadowing of the suffering of Christ, whose back was literally plowed by the Roman scourge: "I gave my back to those who strike, and my cheeks to those who pull out the beard" (Isaiah 50:6). The Servant of Isaiah 53, "wounded for our transgressions" and "with his stripes we are healed" (Isaiah 53:5), embodies in his own flesh the affliction that Psalm 129 describes for the whole people. The afflicted people finds its representative and substitute in the afflicted Servant, whose plowed back becomes the means of the people's healing.
<br/><br/>
Tremper Longman III notes: "The plowing image is striking because plowing is normally productive -- it prepares for harvest. But this plowing is purely destructive, an act of cruelty rather than cultivation. Yet in the larger biblical story, even the destructive plowing of God's people becomes, mysteriously, the soil from which redemption springs." The affliction that seemed only to wound becomes, in God's providence, the furrow into which the seed of resurrection is sown.`,
  },
  {
    color: TEAL,
    title: "The LORD Is Righteous: The Cords of the Wicked Cut",
    body: `Verse 4 is the theological hinge of the psalm: "The LORD is righteous; he has cut the cords of the wicked." After the testimony of affliction (vv. 1-3), the psalm pivots to the declaration of God's righteous intervention. The "cords of the wicked" (avot resha'im) most likely refer to the ropes or harness by which the oppressors held Israel captive -- the bonds of slavery and domination. To "cut the cords" is to sever the instruments of oppression, setting the captive free.
<br/><br/>
The declaration "the LORD is righteous" (YHWH tzaddiq) is the ground of the deliverance. God's righteousness is not an abstract attribute but an active commitment to set right what is wrong, to vindicate the oppressed, to break the power of the oppressor. The righteousness of God is the reason the wicked do not finally prevail: because God is righteous, he cannot permanently tolerate the oppression of his people. The cutting of the cords is the outworking of the divine righteousness in history.
<br/><br/>
The connection to the plowing image of verse 3 may be deliberate: if the oppressors are the plowers, the "cords" may evoke the harness or traces by which plow animals (and the plow itself) are connected. To cut the cords is to stop the plowing -- to bring the relentless oppression to an end by severing the very means of its operation. God does not merely comfort the afflicted; he disables the machinery of affliction.
<br/><br/>
Calvin comments: "The psalmist ascribes the deliverance of the church to the righteousness of God, that we may learn that God, in delivering his people, is not moved by their merits but by his own righteous character, which cannot endure that the wicked should forever triumph over the godly." For Christians, the supreme cutting of the cords is the cross and resurrection, where Christ "disarmed the rulers and authorities and put them to open shame, by triumphing over them" (Colossians 2:15). The righteous LORD has cut the cords of sin, death, and the devil, setting his people free forever.`,
  },
  {
    color: PURPLE,
    title: "Grass on the Housetops: The Withering of Zion's Haters",
    body: `Verses 5-8 turn from testimony to imprecation -- a prayer against those who hate Zion: "May all who hate Zion be put to shame and turned backward! Let them be like the grass on the housetops, which withers before it grows up." The central image is the grass that springs up on the flat earthen roofs of ancient Near Eastern houses. Such grass, rooted in the thin layer of soil and dust on the rooftop, sprouts quickly after rain but, having no depth of soil and exposed to the sun, withers almost immediately -- often before it can even be harvested.
<br/><br/>
This image is the precise inverse of the flourishing tree of Psalm 1:3 ("like a tree planted by streams of water...its leaf does not wither") and the palm and cedar of Psalm 92:12-14. Where the righteous are deeply rooted and enduringly fruitful, the haters of Zion are like rootless rooftop grass: a brief, showy appearance followed by rapid withering. The contrast captures the fundamental difference between the destiny of those aligned with God's purposes and those opposed to them.
<br/><br/>
The image is extended in verses 7-8: "with which the reaper does not fill his hand nor the binder of sheaves his arms, nor do those who pass by say, 'The blessing of the LORD be upon you! We bless you in the name of the LORD!'" The rooftop grass is so meager that no reaper bothers to gather it, and no passerby pronounces the traditional harvest blessing over it (cf. Ruth 2:4, where Boaz and the reapers exchange exactly this blessing). The haters of Zion will produce nothing worth harvesting and will receive no blessing. Their opposition to God's people is ultimately barren.
<br/><br/>
The imprecation must be understood within the framework of the psalm's concern: these are not personal enemies but "those who hate Zion" -- those who oppose God's redemptive purposes centered in his dwelling place. To pray against the haters of Zion is to pray for the triumph of God's purposes over all that opposes them. The withholding of the harvest blessing is the withholding of fruitfulness from a cause that is set against God himself. For Christians, this points to the ultimate barrenness of all opposition to Christ and his church, and to the final vindication of God's people in the new Jerusalem, where the haters of Zion have no place (Revelation 21:27).`,
  },
];

const VERSES = [
  {
    ref: "vv. 1-2",
    text: "Greatly have they afflicted me from my youth -- let Israel now say -- greatly have they afflicted me from my youth, yet they have not prevailed against me.",
    comment: `The psalm opens with personified Israel recalling a lifetime of affliction "from my youth" (mine'uray) -- the nation's formative period of slavery in Egypt and oppression in the wilderness and the time of the Judges. The "let Israel now say" formula (identical to Psalm 124:1) makes this a corporate liturgical confession, inviting the congregation to echo and own the testimony. The repetition of "greatly have they afflicted me from my youth" intensifies the sense of prolonged, severe suffering. But the decisive word is the second half of verse 2: "yet they have not prevailed against me" (gam lo yakhlu li). The affliction was great and long, but it did not win. Survival itself is the testimony. Spurgeon: "The afflictions have been many and severe, but they have not been victorious; the church has been struck but not slain."`,
  },
  {
    ref: "v. 3",
    text: "The plowers plowed upon my back; they made long their furrows.",
    comment: `The vivid and disturbing metaphor of plowing depicts systematic, prolonged cruelty. Israel's back is the field; the oppressors are the plowers; the furrows are the wounds of affliction, evoking the scars of the lash on the backs of slaves. "They made long their furrows" emphasizes the duration and extent of the suffering -- not a single blow but methodical, repeated cutting across the whole expanse of the people's pain. The personification treats persons as objects worked over for the oppressor's benefit. Christian interpreters have long seen here a foreshadowing of the scourging of Christ (Isaiah 50:6; 53:5), whose plowed back becomes the means of the people's healing.`,
  },
  {
    ref: "v. 4",
    text: "The LORD is righteous; he has cut the cords of the wicked.",
    comment: `The theological hinge of the psalm. After the testimony of affliction, the psalm pivots to God's righteous intervention. "The LORD is righteous" (YHWH tzaddiq) grounds the deliverance in God's character: because God is righteous, he cannot permanently tolerate the oppression of his people. "He has cut the cords of the wicked" -- the avot resha'im, the ropes or harness of oppression -- pictures God severing the very instruments by which the wicked held Israel captive. If the oppressors are the plowers of verse 3, the cords may be the harness connecting them to their cruel work; to cut the cords is to stop the plowing. God does not merely comfort the afflicted; he disables the machinery of affliction. Calvin: "God delivers his people not for their merits but from his own righteousness, which cannot endure that the wicked should forever triumph."`,
  },
  {
    ref: "vv. 5-6",
    text: "May all who hate Zion be put to shame and turned backward! Let them be like the grass on the housetops, which withers before it grows up.",
    comment: `The psalm turns to imprecation against "those who hate Zion" (sone'e tzion) -- not merely personal enemies but those opposed to God's redemptive purposes centered in his dwelling place. The petition "put to shame and turned backward" asks for the defeat and humiliation of these enemies. The central image is rooftop grass: grass that sprouts in the thin soil and dust on the flat earthen roofs of ancient houses, springing up quickly after rain but withering almost immediately under the sun, having no depth of root. This is the precise inverse of the flourishing, deeply-rooted tree of Psalm 1:3 and the palm and cedar of Psalm 92. The haters of Zion are rootless, their opposition showy but brief and ultimately barren.`,
  },
  {
    ref: "vv. 7-8",
    text: "...with which the reaper does not fill his hand nor the binder of sheaves his arms, nor do those who pass by say, 'The blessing of the LORD be upon you! We bless you in the name of the LORD!'",
    comment: `The rooftop-grass image is extended to its conclusion. The grass is so meager that no reaper bothers to gather it ("does not fill his hand") and no binder of sheaves can carry it. And crucially, no passerby pronounces the traditional harvest blessing over it. The blessing quoted -- "The blessing of the LORD be upon you! We bless you in the name of the LORD!" -- is exactly the exchange between Boaz and his reapers in Ruth 2:4, the customary greeting at harvest. The haters of Zion will produce nothing worth harvesting and will receive no blessing; their opposition to God's people is ultimately fruitless. Kidner: "The withholding of the harvest blessing is the final word on those who set themselves against God's purposes -- their cause is barren, and even the courtesies of blessing are absent from it."`,
  },
];

const APPLICATIONS = [
  {
    color: ROSE,
    title: "Afflicted but Not Prevailed Against: Hope for the Persecuted Church",
    body: `Psalm 129's central testimony -- "greatly have they afflicted me from my youth, yet they have not prevailed against me" -- is a word of profound hope for Christians suffering persecution and for the persecuted church throughout history. The psalm does not deny the reality or the severity of affliction; it acknowledges that the affliction has been great and prolonged, stretching back to the people's very beginning. But it testifies that affliction, however severe, has not resulted in defeat.
<br/><br/>
This is the consistent pattern of God's people across redemptive history: afflicted but not destroyed, struck down but not extinguished. Pharaoh tried to wipe out the Hebrews and failed. The nations surrounding Israel tried repeatedly and failed. The Roman Empire tried to crush the early church and failed -- and the empire itself eventually passed away while the church endured. Every age has its plowers who plow long furrows on the back of God's people, and every age witnesses the same testimony: they have not prevailed.
<br/><br/>
<em>Prayer prompt</em>: Lord, for your suffering church around the world -- those afflicted from their youth, those whose backs have been plowed by oppressors -- I pray the testimony of this psalm. They have afflicted your people greatly, but they have not prevailed. You are righteous; cut the cords of the wicked. Sustain those who suffer for your name with the assurance that no affliction, however severe, can finally defeat the people you have redeemed. Amen.`,
  },
  {
    color: GOLD,
    title: "The Plowed Back and the Suffering Servant",
    body: `The image of the plowed back in verse 3 connects Psalm 129 to the deepest theme of biblical redemption: the suffering of God's Servant for the healing of his people. Isaiah 50:6 ("I gave my back to those who strike") and Isaiah 53:5 ("with his stripes we are healed") describe the Servant whose own plowed back becomes the means of redemption. When Christ was scourged before his crucifixion, the image of Psalm 129:3 became literal flesh: the plowers plowed upon his back, and they made long their furrows.
<br/><br/>
This connection transforms how the believer reads the affliction of God's people. The plowing of Israel's back, the suffering of the church, the affliction of the individual believer -- all of it is taken up into the suffering of Christ, who bore the ultimate affliction on behalf of his people. The believer who suffers does not suffer alone or meaninglessly; they participate in "the fellowship of his sufferings" (Philippians 3:10) and fill up "what is lacking in Christ's afflictions for the sake of his body" (Colossians 1:24).
<br/><br/>
Moreover, the plowing metaphor itself carries a hidden hope. Plowing, though destructive in Psalm 129, is normally the preparation for planting and harvest. In God's providence, even the cruel plowing of his people becomes the furrow into which the seed of resurrection is sown. "Unless a grain of wheat falls into the earth and dies, it remains alone; but if it dies, it bears much fruit" (John 12:24). The plowed back of the Servant became the soil of the world's redemption.`,
  },
  {
    color: TEAL,
    title: "The LORD Is Righteous: Trusting God to Cut the Cords",
    body: `Verse 4 -- "The LORD is righteous; he has cut the cords of the wicked" -- anchors the believer's hope in the character of God rather than in the changing circumstances of oppression. The deliverance of God's people is grounded not in their own strength or merit but in God's righteousness, which cannot permanently tolerate the triumph of the wicked over the godly. This is a crucial reorientation for those suffering under oppression: the hope of deliverance rests on who God is, not on the apparent balance of power.
<br/><br/>
This means that the believer waiting for deliverance can rest in God's righteous character even when deliverance is delayed. The cords have not yet been cut in every situation; the plowing continues in many places. But the righteousness of God guarantees that the cords will be cut, that the oppression will not be permanent, that the machinery of affliction will finally be disabled. The believer's confidence is not in the timing but in the certainty grounded in God's nature.
<br/><br/>
The supreme demonstration of God cutting the cords is the cross and resurrection, where Christ "disarmed the rulers and authorities and put them to open shame, by triumphing over them in him" (Colossians 2:15). The cords of sin, death, and the devil have already been decisively cut at Calvary. <em>Application</em>: when facing situations of bondage -- whether external oppression or internal slavery to sin -- the believer prays and trusts on the basis of God's righteousness: "Lord, you are righteous; cut the cords that bind. You have done it at the cross; do it now in my situation."`,
  },
  {
    color: PURPLE,
    title: "Rootless Grass: The Ultimate Barrenness of Opposing God",
    body: `The rooftop-grass imagery of verses 5-8 offers a sobering meditation on the ultimate futility of all opposition to God and his people. The haters of Zion may appear, for a season, to flourish -- the rooftop grass does spring up green and vigorous after the rain. But lacking root and depth, it withers before it can be harvested, producing nothing of value and receiving no blessing.
<br/><br/>
This is a word of both warning and comfort. The warning is to anyone tempted to set themselves against God's purposes: opposition to God may seem to prosper briefly, but it is ultimately as barren and short-lived as rooftop grass. The comfort is to God's people who watch the apparent flourishing of those who oppose them: do not be deceived by the green appearance; it has no root and will not last. The contrast with the deeply-rooted, enduringly-fruitful tree of the righteous (Psalm 1:3; 92:12-14) is absolute.
<br/><br/>
The withheld harvest blessing of verse 8 is particularly poignant. The traditional blessing "The blessing of the LORD be upon you" (Ruth 2:4) is the natural greeting exchanged among God's people at harvest. Its absence over the rooftop grass signals the complete exclusion of the haters of Zion from the community of blessing. <em>Reflection</em>: this psalm invites self-examination. Am I planting my life in the deep soil of the fear of the LORD, rooted by the streams of water, destined for enduring fruit? Or am I building on the thin soil of opposition to God's purposes, destined to wither? The choice between the rooted tree and the rootless grass is the choice between two destinies.`,
  },
];

export default function Psalm129Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openTheme, setOpenTheme] = useState<number | null>(null);
  const [openVerse, setOpenVerse] = useState<number | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #1a0507 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ background: ACCENT, color: "#fff", fontSize: "0.75rem", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.08em", padding: "0.25rem 0.75rem", borderRadius: "999px", textTransform: "uppercase" }}>Psalm 129</span>
            <span style={{ color: MUTED, fontSize: "0.85rem", fontFamily: "sans-serif" }}>Song of Ascents &bull; 8 Verses</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 1rem" }}>
            Greatly Have They Afflicted Me from My Youth
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: "680px", margin: "0 0 1.5rem" }}>
            A Song of Ascents recalling Israel's long history of affliction and survival -- the plowers who plowed long furrows on its back, the righteous LORD who cut the cords of the wicked, and the rooftop grass that pictures the barren end of all who hate Zion.
          </p>
          <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1.25rem", margin: "0", color: TEXT, fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7 }}>
            &ldquo;Greatly have they afflicted me from my youth, yet they have not prevailed against me.&rdquo;
            <span style={{ display: "block", fontSize: "0.85rem", color: MUTED, fontStyle: "normal", marginTop: "0.5rem" }}>&mdash; Psalm 129:2</span>
          </blockquote>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)} style={{ padding: "1rem 1.5rem", background: "none", border: "none", borderBottom: activeTab === i ? `2px solid ${ACCENT}` : "2px solid transparent", color: activeTab === i ? ACCENT : MUTED, fontWeight: activeTab === i ? 700 : 400, cursor: "pointer", whiteSpace: "nowrap", fontFamily: "sans-serif", fontSize: "0.95rem", transition: "color 0.2s" }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1.5rem" }}>

        {/* OVERVIEW */}
        {activeTab === 0 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.25rem", color: ACCENT }}>Overview of Psalm 129</h2>
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `Psalm 129 is the tenth of the fifteen Songs of Ascents and a companion to Psalm 124 in its communal recollection of God's deliverance. Both psalms open with the liturgical formula "let Israel now say" (vv. 1; cf. 124:1), inviting the assembled congregation to echo and own the testimony. Where Psalm 124 celebrates a specific rescue from a near-fatal danger, Psalm 129 takes a longer view, recalling the entire history of Israel's affliction "from my youth" &mdash; from the nation's very beginnings &mdash; and testifying that through it all, the enemies "have not prevailed."` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The psalm divides cleanly into two movements. The first (vv. 1&ndash;4) is a testimony of survived affliction: Israel personified recalls a lifetime of oppression, depicts that oppression with the vivid image of plowers plowing long furrows on its back, and then declares the LORD's righteous intervention in cutting the cords of the wicked. The second movement (vv. 5&ndash;8) is an imprecation against "those who hate Zion," praying that they would be like the rootless grass on the housetops &mdash; springing up briefly but withering before harvest, producing nothing and receiving no blessing.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The central testimony of the psalm &mdash; "greatly have they afflicted me from my youth, yet they have not prevailed against me" &mdash; celebrates one of the standing miracles of history: the survival of God's people against overwhelming odds. Empires that set out to destroy Israel have themselves passed into history, while the afflicted people endures and continues to make pilgrimage to Zion. This survival is not credited to Israel's strength but to the righteousness of the LORD, who "has cut the cords of the wicked" (v. 4).` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The vivid image of the plowed back (v. 3) has rich resonances with the Suffering Servant of Isaiah, who "gave his back to those who strike" (Isaiah 50:6) and through whose stripes God's people are healed (Isaiah 53:5). When Christ was scourged before his crucifixion, the metaphor of Psalm 129 became literal: the plowers plowed upon his back. The afflicted people finds its representative and substitute in the afflicted Servant, whose suffering becomes the means of redemption.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: `For the New Testament church, Psalm 129's pattern of affliction-without-defeat is taken up in Christ's promise that "the gates of hell shall not prevail" against his church (Matthew 16:18) and in Paul's testimony of being "afflicted in every way, but not crushed...struck down, but not destroyed" (2 Corinthians 4:8&ndash;9). The rooftop grass that pictures the haters of Zion stands as a warning of the ultimate barrenness of all opposition to God's purposes, which will finally be excluded from the new Jerusalem (Revelation 21:27).` }} />

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: ACCENT, fontFamily: "sans-serif" }}>Key Details</h3>
              <div style={{ display: "grid", gap: "0.75rem" }}>
                {KEY_DETAILS.map(({ label, value }) => (
                  <div key={label} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "0.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "0.75rem" }}>
                    <span style={{ color: MUTED, fontSize: "0.85rem", fontFamily: "sans-serif", fontWeight: 600 }}>{label}</span>
                    <span style={{ color: TEXT, fontSize: "0.95rem" }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: TEXT, fontFamily: "sans-serif" }}>Video Resources</h3>
            {VIDEOS.map((v) => <VideoEmbed key={v.videoId} v={v} />)}
          </div>
        )}

        {/* THEMES */}
        {activeTab === 1 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: ACCENT }}>Major Themes</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>Click each theme to expand the full discussion.</p>
            {THEMES.map((theme, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: "10px", marginBottom: "1rem", overflow: "hidden" }}>
                <button onClick={() => setOpenTheme(openTheme === i ? null : i)} style={{ width: "100%", background: openTheme === i ? CARD : "transparent", border: "none", padding: "1.25rem 1.5rem", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: theme.color, flexShrink: 0 }} />
                    <span style={{ color: TEXT, fontWeight: 600, fontSize: "1rem" }}>{theme.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: "1.25rem", flexShrink: 0 }}>{openTheme === i ? "-" : "+"}</span>
                </button>
                {openTheme === i && (
                  <div style={{ padding: "0 1.5rem 1.5rem", borderTop: `1px solid ${BORDER}` }}>
                    <div style={{ height: "1rem" }} />
                    <div style={{ lineHeight: 1.8, color: TEXT }} dangerouslySetInnerHTML={{ __html: theme.body }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: ACCENT }}>Verse-by-Verse Commentary</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>Click each verse to expand the commentary.</p>
            {VERSES.map((v, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: "10px", marginBottom: "1rem", overflow: "hidden" }}>
                <button onClick={() => setOpenVerse(openVerse === i ? null : i)} style={{ width: "100%", background: openVerse === i ? CARD : "transparent", border: "none", padding: "1.25rem 1.5rem", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
                    <div>
                      <span style={{ color: ACCENT, fontWeight: 700, fontFamily: "sans-serif", fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>{v.ref}</span>
                      <span style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.6 }}>&ldquo;{v.text}&rdquo;</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.25rem", flexShrink: 0 }}>{openVerse === i ? "-" : "+"}</span>
                  </div>
                </button>
                {openVerse === i && (
                  <div style={{ padding: "0 1.5rem 1.5rem", borderTop: `1px solid ${BORDER}` }}>
                    <div style={{ height: "1rem" }} />
                    <div style={{ lineHeight: 1.8, color: TEXT }} dangerouslySetInnerHTML={{ __html: v.comment }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* APPLICATION */}
        {activeTab === 3 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: ACCENT }}>Application</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>How Psalm 129 sustains the persecuted and warns the opposers of God.</p>
            {APPLICATIONS.map((app, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${app.color}`, borderRadius: "10px", padding: "1.5rem", marginBottom: "1.25rem" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: app.color, marginBottom: "0.75rem", fontFamily: "sans-serif" }}>{app.title}</h3>
                <div style={{ lineHeight: 1.8, color: TEXT }} dangerouslySetInnerHTML={{ __html: app.body }} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
