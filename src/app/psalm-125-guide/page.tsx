"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const ACCENT = GOLD;

type VideoEntry = { videoId: string; title: string };

const VIDEOS: VideoEntry[] = [
  { videoId: "yzaABC789", title: "Psalm 125 -- Like Mount Zion, Unshakeable" },
  { videoId: "defDEF012", title: "Songs of Ascents: The Security of the Trusting Soul" },
];

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
  { label: "Position", value: "Sixth of the 15 Songs of Ascents (Psalm 125)" },
  { label: "Collection", value: "Songs of Ascents -- pilgrim psalms to Jerusalem" },
  { label: "Genre", value: "Wisdom psalm with elements of blessing and warning" },
  { label: "Key Theme", value: "The unshakeable security of those who trust the LORD" },
  { label: "Key Verse", value: "v. 1 -- Those who trust in the LORD are like Mount Zion, which cannot be moved" },
  { label: "NT Connection", value: "Hebrews 12:28 unshakeable kingdom; Matthew 7:24-27 house on the rock" },
];

const CONTRAST_TABLE = [
  { group: "Those who trust the LORD (v. 1)", image: "Like Mount Zion -- cannot be moved", outcome: "Abides forever" },
  { group: "The righteous (vv. 3-4)", image: "Surrounded by the LORD like mountains", outcome: "Do good, at peace" },
  { group: "The upright in heart (v. 4)", image: "Recipients of God's goodness", outcome: "Blessed" },
  { group: "Those who turn to crooked ways (v. 5a)", image: "Alongside wicked deeds", outcome: "Led away with evildoers" },
  { group: "Scepter of wickedness (v. 3)", image: "Resting on righteous -- temporarily", outcome: "Will not remain" },
];

const THEMES = [
  {
    color: GOLD,
    title: "Like Mount Zion: The Theology of Unshakeable Trust",
    body: `The psalm opens with one of the most confident affirmations in the entire Psalter: "Those who trust in the LORD are like Mount Zion, which cannot be moved, but abides forever." The comparison to Mount Zion is not accidental. Zion is Jerusalem's sacred mountain -- the site of the Temple, the place God chose for his dwelling, the city that God said he would establish forever (Psalm 48:8; 132:13-14). To say that those who trust in the LORD are like Mount Zion is to say that they share in Zion's divine stability.
<br/><br/>
The Hebrew word for "trust" (batach) is one of the richest theological terms in the Psalter. It conveys not mere intellectual assent but confident reliance, leaning one's full weight upon something or someone, entrusting one's security to another. The psalmist uses batach throughout the Psalter (Psalm 4:5; 9:10; 13:5; 22:4-5; 25:2; 28:7; 37:3-5) to denote the disposition of the soul that has transferred all its confidence from self and circumstance to God. This is not passive resignation; it is the active choice to make God the foundation of one's security.
<br/><br/>
The result of this trust is Zion-like permanence: "cannot be moved, but abides forever." The Hebrew lo yimot (it cannot be shaken/moved) uses the same root (mot) that appears in Psalm 46:5 ("God is in the midst of her; she shall not be moved") and Psalm 16:8 ("I shall not be moved"). The permanence is not intrinsic to the trusting person; it derives from the God in whom trust is placed. As Mount Zion is stable because God chose it and established it, so the trusting soul is stable because God upholds those who trust in him.
<br/><br/>
Tremper Longman III writes: "The comparison to Zion is powerful precisely because the pilgrim singing this psalm is standing within sight of Zion. They can see the mountain that cannot be moved; they are invited to trust that this same unshakeability is the portion of all who trust in the LORD." For the New Testament believer, Hebrews 12:28 extends this promise: "Therefore let us be grateful for receiving a kingdom that cannot be shaken." The new Zion -- the city of the living God (Hebrews 12:22) -- is the permanent home of all who are in Christ.`,
  },
  {
    color: TEAL,
    title: "The Mountains Around Jerusalem: God's Encircling Presence",
    body: `Verse 2 delivers the psalm's second great image: "As the mountains surround Jerusalem, so the LORD surrounds his people, from this time forth and forevermore." Jerusalem was famous in antiquity for being surrounded by hills -- the Mount of Olives to the east, the Mount of Evil Counsel to the south, Scopus to the northeast. The pilgrim arriving in Jerusalem would have experienced this geography immediately: the city was cupped by mountains on multiple sides, giving a natural sense of enclosure and protection.
<br/><br/>
The psalmist transforms this geographical reality into a theological image: as the mountains physically surround Jerusalem, so the LORD spiritually encircles his people. The surrounding is total -- no gap, no unguarded angle, no direction from which an enemy could approach without encountering the LORD first. This is the "round about" theology of divine protection that appears throughout the Psalter (Psalm 34:7 -- "The angel of the LORD encamps around those who fear him, and delivers them"; Psalm 32:7 -- "You are a hiding place for me; you preserve me from trouble; you surround me with shouts of deliverance").
<br/><br/>
The temporal qualifier "from this time forth and forevermore" (me'attah ve'ad olam) is the same phrase used in Psalm 113:2 ("Blessed be the name of the LORD from this time forth and forevermore") and Psalm 121:8. It encompasses both the present moment and the eternal future. The surrounding protection of the LORD is not a seasonal or circumstantial reality; it is permanent, covenantal, eschatological.
<br/><br/>
Derek Kidner observes: "There is something visually and emotionally powerful about arriving at Jerusalem and looking up at the encircling mountains, then singing 'so the LORD surrounds his people.' The physical reality becomes a sacrament of the spiritual reality -- visible creation teaching invisible covenant." For Christians, this encircling presence is fulfilled in Immanuel -- God with us -- and in the promise of Romans 8:35-39 that nothing "will be able to separate us from the love of God in Christ Jesus our Lord."`,
  },
  {
    color: ROSE,
    title: "The Scepter of Wickedness: The Temporary Toleration of Evil",
    body: `Verse 3 introduces the psalm's most theologically complex line: "For the scepter of wickedness shall not rest on the land allotted to the righteous, lest the righteous stretch out their hands to do wrong." The "scepter of wickedness" (shevet harasha') refers to the rule or dominion of wicked powers -- foreign occupiers, ungodly rulers, unjust structures. The promise is not that such wickedness will never press upon the righteous but that it will not "rest" or "remain" (yanuch) on the land indefinitely.
<br/><br/>
The reason given for this promise is pastoral and morally realistic: "lest the righteous stretch out their hands to do wrong." Prolonged subjection to wicked power has a corrupting effect on even the righteous. When injustice seems permanent, when evil seems entrenched, when there appears to be no way through legitimate means, the temptation to compromise, to adopt the methods of the wicked, to "join them if you can't beat them," becomes severe. God's promise that the scepter of wickedness will not remain is therefore not only a promise of justice but a promise of moral preservation -- the righteous will not be forced into a position where compromise becomes the only apparent option.
<br/><br/>
Calvin writes with great pastoral sensitivity: "God allows the wicked for a time to hold sway over the righteous, but he sets a limit to their tyranny, because he knows how weak his people are, and how great is the danger that long oppression would at last draw away even the elect from the right way." The promise of verse 3 is thus a promise that God will not let the moral calculus run so long in favor of the wicked that his people lose heart and abandon integrity.
<br/><br/>
This theme runs through Revelation, where the "scepter of wickedness" appears as the beast and the harlot Babylon. Yet the repeated assurance of Revelation is that this dominion is temporary and limited: "the great prostitute...for God has put it into their hearts to carry out his purpose" (Revelation 17:17). The final word belongs to the Lamb whose authority is permanent: "The kingdom of the world has become the kingdom of our Lord and of his Christ, and he shall reign forever and ever" (Revelation 11:15).`,
  },
  {
    color: PURPLE,
    title: "Do Good, O LORD: The Pastoral Prayer for the Righteous",
    body: `Verses 4-5 conclude the psalm with a double petition and a warning that together encapsulate its theology. The petition of verse 4 -- "Do good, O LORD, to those who are good, and to those who are upright in their hearts!" -- is one of the simplest and most beautiful prayers in the Psalter. It asks God to do for his people exactly what corresponds to his own character: God is good; those who belong to him are those who are (by his grace) growing in goodness; therefore, let the good God do good to those who are good.
<br/><br/>
The phrase "upright in their hearts" (uliyishrim belibbotam) is important: uprightness is a matter of the heart, not merely external behavior. Spurgeon writes: "The LORD looks at the heart, not the outward show. Those who are good in their hearts -- though they may be weak in performance and stumbling in practice -- are the ones for whom this prayer is offered." The prayer is not for the perfect but for those whose fundamental orientation is toward God and goodness, however imperfectly they walk that road.
<br/><br/>
The warning of verse 5 -- "But those who turn aside to their crooked ways the LORD will lead away with evildoers!" -- contrasts sharply. The word "turn aside" (mattim) suggests a gradual deviation rather than a dramatic apostasy. It is the slow drift, the subtle accommodation, the small compromises that over time constitute a "turning aside" to "crooked ways." The destination of this drift is solidarity with evildoers -- not because the person intended to end up there, but because the direction was wrong from the start.
<br/><br/>
Matthew Henry observes: "The danger this verse describes is not dramatic apostasy but quiet moral drift -- the believer who, one small step at a time, accommodates to the ways of the world until he or she finds, too late, that the company around them is entirely different from what they had intended." The antidote is the uprightness of heart that verse 4 commends: regular return to God, regular checking of direction, regular refusal of the small compromises that seem trivial but accumulate into departure.`,
  },
  {
    color: GREEN,
    title: "Peace Be Upon Israel: The Blessing That Closes",
    body: `The psalm closes with "Peace be upon Israel!" (shalom al yisrael), the same closing benediction used in Psalm 128:6. This brief blessing is more than a liturgical flourish; it is the eschatological hope that the entire psalm has been building toward. The security of Mount Zion, the surrounding presence of the LORD, the promise that the scepter of wickedness will not remain, the prayer for those who are good -- all of it resolves into this petition: shalom upon Israel.
<br/><br/>
Shalom in the OT is not merely the absence of conflict but the presence of everything that constitutes flourishing: right relationship with God, right relationship with neighbor, material wellbeing, physical health, social harmony, justice, and completeness. To say "shalom upon Israel" is to invoke the fullest possible blessing -- the blessing of the age to come anticipated within the present age.
<br/><br/>
Tremper Longman III notes that the closing benediction in the Songs of Ascents (here in 125 and again in 128:6) functions liturgically as the priest's blessing upon the departing pilgrim: you have come to Jerusalem seeking God; now go with God's peace upon you. It is the benediction that sends the pilgrim back into the world that looks like Meshech (Psalm 120) equipped with the assurance that the LORD is surrounding them like mountains.
<br/><br/>
For Christians, "peace be upon Israel" has been extended through the Messiah to all nations. Paul's letter to the Galatians closes: "Peace and mercy be upon all who walk by this rule, and upon the Israel of God" (Galatians 6:16). The Israel of God is the community of all who are in Christ, Jew and Gentile together, upon whom the Abrahamic blessing descends through faith. The final vision of Scripture -- "the new Jerusalem" (Revelation 21:2) -- is Zion made complete, the shalom of Psalm 125 perfected and made permanent: "Behold, the dwelling place of God is with man" (Revelation 21:3).`,
  },
];

const VERSES = [
  {
    ref: "v. 1",
    text: "Those who trust in the LORD are like Mount Zion, which cannot be moved, but abides forever.",
    comment: `The psalm opens with a wisdom-style declaration about those who trust (batach) in the LORD. The comparison to Mount Zion is precisely calibrated: not any mountain, but Zion -- the mountain God specifically chose as his dwelling place, the mountain he promised to establish. The stability of Zion is therefore not geological but theological: it cannot be moved because God chose it and guards it. Similarly, the stability of those who trust in the LORD is theological: they cannot ultimately be moved not because they are strong but because the God in whom they trust is unshakeable. Calvin: "It is not our own virtue that establishes us, but our trust in God -- and God is established forever."`,
  },
  {
    ref: "v. 2",
    text: "As the mountains surround Jerusalem, so the LORD surrounds his people, from this time forth and forevermore.",
    comment: `The second simile operates on the pilgrim's experience of approaching Jerusalem and seeing it cupped by hills and mountains on three sides. This visible geography becomes the vehicle for an invisible theological truth: the LORD's surrounding presence is even more complete than the physical mountains. The temporal phrase "from this time forth and forevermore" (me'attah ve'ad olam) appears also in Psalms 113:2, 115:18, 121:8, 131:3 -- it is a liturgical formula that extends the promise beyond any single historical moment into permanent covenantal reality. Spurgeon: "The surrounding of the mountains is the symbol; the surrounding of the LORD is the substance."`,
  },
  {
    ref: "v. 3",
    text: "For the scepter of wickedness shall not rest on the land allotted to the righteous, lest the righteous stretch out their hands to do wrong.",
    comment: `This verse provides the theological rationale for the security promised in vv. 1-2: God will not permit the dominion of wickedness to become permanent over his people. The "scepter of wickedness" (shevet harasha') denotes governmental or royal authority used for evil -- the rule of oppressive power over the righteous. The qualifier "shall not rest" (lo yanuch) is significant: the scepter may press, may oppress, may seem entrenched -- but it will not settle permanently. The reason given ("lest the righteous stretch out their hands to do wrong") reveals God's pastoral concern: prolonged subjection to wickedness corrodes moral integrity. God limits evil's duration to protect his people's faithfulness.`,
  },
  {
    ref: "v. 4",
    text: "Do good, O LORD, to those who are good, and to those who are upright in their hearts!",
    comment: `The petition is elegant in its symmetry: "Do good...to those who are good." The repeated root (tov/tovim) suggests that God's action flows with the grain of his people's character. This is not works-righteousness; it is a prayer rooted in the doctrine of rewards: God does good to those whom he has made good by his grace. The qualifier "upright in their hearts" (uliyishrim belibbotam) locates the defining quality inwardly: God looks at the heart's orientation, not the external performance. Matthew Henry: "The prayer is for those who, though imperfect in act, are sincere in aim -- those who want to be good, who are good in heart even when they fall short in deed."`,
  },
  {
    ref: "v. 5",
    text: "But those who turn aside to their crooked ways the LORD will lead away with evildoers! Peace be upon Israel!",
    comment: `The final verse presents the dark counterpart to v. 4 and then closes with the benediction. "Turn aside to crooked ways" (mattim 'aqalqallotam) describes a gradual deviation: mattim is a hiphil participle suggesting continuous, ongoing turning aside -- not a moment of dramatic apostasy but a sustained drift. The destination is solidarity with evildoers and the judgment that falls on them. Kidner: "The crooked ways seem like shortcuts or accommodations, but they lead to the company of the wicked, and ultimately to the fate of the wicked." The closing "Peace be upon Israel!" (shalom al yisrael) is the priestly benediction that sends the congregation out with hope: despite the warning, the fundamental word is peace, for those who trust in the LORD like Mount Zion.`,
  },
];

const APPLICATIONS = [
  {
    color: GOLD,
    title: "Building on the Rock: Psalm 125 and Matthew 7:24-27",
    body: `Psalm 125's image of Mount Zion as the model of stability for those who trust in the LORD anticipates Jesus's parable of the two builders (Matthew 7:24-27). The one who builds on rock -- who hears Jesus's words and does them -- will not be moved when the floods come and the winds beat against the house. The one who builds on sand -- who hears but does not do -- will find the house fallen. The stability promised in Psalm 125 is ultimately found in Christ, the one whom Paul identifies as the cornerstone (Ephesians 2:20) and whom Peter describes as the living stone (1 Peter 2:4).
<br/><br/>
The question Psalm 125 presses on every hearer is: what is the foundation of your security? Not "do you have security?" -- everyone has something they trust. But what is it? Is it like Mount Zion -- stable because God chose it and established it? Or is it like sand -- appearances of stability that dissolve under pressure? The psalm commends one and only one foundation: "Those who trust in the LORD are like Mount Zion." All other foundations are explicitly or implicitly contrasted with this one.
<br/><br/>
<em>Prayer prompt</em>: Lord, reveal to me the foundations I have trusted besides you -- the securities I have built on financial stability, health, relationships, reputation, my own virtue. Expose their inadequacy, not to crush me but to redirect my trust. Let me be like Mount Zion -- unshakeable not because of what I am but because of the God in whom I trust. Amen.`,
  },
  {
    color: TEAL,
    title: "Surrounded by the LORD: Practicing the Awareness of Divine Encirclement",
    body: `The image of verse 2 -- "As the mountains surround Jerusalem, so the LORD surrounds his people" -- offers a form of spiritual practice: the deliberate cultivation of awareness of God's surrounding presence. Psalm 125 invites the believer to do what the pilgrim did at Jerusalem: look around at the encircling mountains and see in them a visible sign of an invisible reality. The geography preaches: you are surrounded.
<br/><br/>
Brother Lawrence's classic "Practice of the Presence of God" and the ancient Christian discipline of habitual recollection both point toward this kind of awareness. The goal is not constant emotional intensity but a steady, backgrounded consciousness that God is present, surrounding, encircling. When anxiety rises, when the scepter of wickedness seems to be winning, the discipline of recollection returns the mind to the truth of verse 2: "The LORD surrounds his people."
<br/><br/>
For those in acute distress, this can be practiced literally: close your eyes and imagine the encircling mountains of Jerusalem. Then pray: "As those mountains surround Jerusalem, so you, LORD, surround me -- from this time forth and forevermore." The physical imagination becomes a vehicle for theological meditation, and theological meditation becomes the ground for peace.`,
  },
  {
    color: ROSE,
    title: "The Danger of Crooked Ways: A Warning Against Moral Drift",
    body: `Verse 5 -- "But those who turn aside to their crooked ways the LORD will lead away with evildoers!" -- is one of the sharper warnings in the Songs of Ascents. The key word is "turn aside" (mattim), which describes not a sudden U-turn but a gradual veering. The crooked ways (aqalqallotam -- literally "their twistings") are presented as paths that one enters by degrees. One does not usually choose to become an evildoer; one chooses, repeatedly, small accommodations to crookedness until the destination becomes clear.
<br/><br/>
The pastoral application is the regular examination of direction, not just of behavior. Not "have I sinned today?" (which is important) but "which direction am I trending?" The former is about individual acts; the latter is about the trajectory of a life. Am I gradually growing in uprightness of heart? Or am I gradually turning aside -- in small, seemingly manageable, seemingly reversible ways -- toward the crooked?
<br/><br/>
The Puritan tradition was particularly attentive to this. John Owen's great works on the mortification of sin and the temptation of the heart describe precisely the slow drift that Psalm 125 warns against: sin always promises to remain small and manageable, but never does. The antidote Owen recommends is the same as Psalm 125 commends: keeping the eyes on the LORD (trust, batach), allowing his surrounding presence to be the context of every choice, and praying regularly the prayer of verse 4: "Do good, O LORD, to those who are good."`,
  },
  {
    color: GREEN,
    title: "Peace Be Upon Israel: Living the Benediction",
    body: `The closing benediction -- "Peace be upon Israel!" -- is not merely a liturgical ending. It is the psalm's final theological statement: the destiny of those who trust in the LORD is shalom. The journey that began in Psalm 120 with a cry from Meshech, the distress of living among liars and warmongers, concludes (at least in this segment) with the benediction of peace. The pilgrim who sang Psalm 120 in exile is now standing in Jerusalem hearing: "Peace be upon Israel."
<br/><br/>
This peace is covenantal, eschatological, and personal all at once. It is covenantal because it flows from the LORD's relationship with his people. It is eschatological because it points toward the final shalom of the new creation, when "he will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore" (Revelation 21:4). And it is personal because it comes to each member of the community as individuals who trust the LORD.
<br/><br/>
<em>Living the benediction</em>: The closing of public worship is not an afterthought -- it is the launch. The congregation is sent out with the peace of God into the world that looks like Meshech. They go not as those abandoned to an alien environment but as those who are surrounded by the LORD like mountains, unshakeable like Zion, and destined for the shalom that awaits all who trust in him. Every departure from corporate worship is a fresh deployment of those who carry the benediction into the world.`,
  },
];

export default function Psalm125Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openTheme, setOpenTheme] = useState<number | null>(null);
  const [openVerse, setOpenVerse] = useState<number | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #1a1200 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ background: ACCENT, color: "#fff", fontSize: "0.75rem", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.08em", padding: "0.25rem 0.75rem", borderRadius: "999px", textTransform: "uppercase" }}>Psalm 125</span>
            <span style={{ color: MUTED, fontSize: "0.85rem", fontFamily: "sans-serif" }}>Song of Ascents &bull; 5 Verses</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 1rem" }}>
            Those Who Trust in the LORD Are Like Mount Zion
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: "680px", margin: "0 0 1.5rem" }}>
            A wisdom Song of Ascents declaring the permanent security of those who trust in the LORD, encircled like Jerusalem by its mountains, warned against the slow drift of moral compromise, and sent out with the ancient benediction: Peace be upon Israel.
          </p>
          <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1.25rem", margin: "0", color: TEXT, fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7 }}>
            &ldquo;As the mountains surround Jerusalem, so the LORD surrounds his people, from this time forth and forevermore.&rdquo;
            <span style={{ display: "block", fontSize: "0.85rem", color: MUTED, fontStyle: "normal", marginTop: "0.5rem" }}>&mdash; Psalm 125:2</span>
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
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.25rem", color: ACCENT }}>Overview of Psalm 125</h2>
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `Psalm 125 is the sixth Song of Ascents and a masterpiece of compressed wisdom. Its five verses offer two great images of divine protection (the stability of Mount Zion and the encirclement of Jerusalem's mountains), a sobering promise about the temporary nature of wickedness&rsquo;s dominion (v. 3), a pastoral prayer for the good and upright (v. 4), a sharp warning against moral drift (v. 5a), and the ancient priestly benediction of peace (v. 5b).` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The psalm belongs to the genre of wisdom literature within the Psalter &mdash; like Psalms 1, 37, and 73, it reflects on the contrasting fates of the righteous and the wicked, the trusting and the faithless. But it is wisdom embedded in worship: these truths are not taught in a classroom but sung on the pilgrimage road and in the courts of the Temple. The geography of Jerusalem &mdash; the mountain that cannot be moved, the surrounding hills &mdash; is the visual curriculum for the theological lesson.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The psalm&rsquo;s structure moves from declaration (v. 1 -- those who trust are like Zion) to illustration (v. 2 -- as mountains surround Jerusalem) to assurance (v. 3 -- the scepter of wickedness will not remain) to prayer (v. 4 -- do good to the good) to warning and benediction (v. 5). This tight logical progression makes Psalm 125 one of the most doctrinally coherent of the shorter psalms.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `Calvin observed that Psalm 125 addresses one of the most persistent pastoral problems: how to maintain trust in God when the wicked seem to prosper and the righteous seem to suffer. The psalm&rsquo;s answer is threefold: (1) the righteous are as stable as Zion, even when they do not feel stable; (2) God surrounds his people even when they cannot see the surrounding; (3) the dominion of wickedness is limited &mdash; it will not rest permanently on the righteous. Each of these truths requires faith to receive, which is why they are given as the content of a song: to be rehearsed, repeated, internalized through the practice of worship.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: `For New Testament believers, Psalm 125 finds its fulfillment in the unshakeable kingdom (Hebrews 12:28), the cornerstone that is Christ (Ephesians 2:20), and the new Jerusalem that descends from heaven as the permanent dwelling of God with his people (Revelation 21:2-3). The pilgrim who sang this psalm on the road to earthly Jerusalem was singing, without fully knowing it, of the city whose builder and maker is God (Hebrews 11:10).` }} />

            {/* Contrast Table */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: ACCENT, fontFamily: "sans-serif" }}>The Two Ways in Psalm 125</h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                  <thead>
                    <tr>
                      {["Group", "Image", "Outcome"].map(h => (
                        <th key={h} style={{ textAlign: "left", padding: "0.6rem 0.75rem", borderBottom: `2px solid ${BORDER}`, color: MUTED, fontFamily: "sans-serif", fontWeight: 600, fontSize: "0.8rem" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {CONTRAST_TABLE.map((row, i) => (
                      <tr key={i} style={{ borderBottom: `1px solid ${BORDER}` }}>
                        <td style={{ padding: "0.75rem", color: GOLD }}>{row.group}</td>
                        <td style={{ padding: "0.75rem", color: TEXT }}>{row.image}</td>
                        <td style={{ padding: "0.75rem", color: MUTED }}>{row.outcome}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Details */}
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

            {/* Videos */}
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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>How Psalm 125 shapes trust, vigilance, and peace in Christian life.</p>
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
