"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const ACCENT = PURPLE;

type VideoEntry = { videoId: string; title: string };

const VIDEOS: VideoEntry[] = [
  { videoId: "ps131v01", title: "Psalm 131 -- The Weaned Soul at Rest" },
  { videoId: "ps131v02", title: "Songs of Ascents: Humility and Quiet Trust" },
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
  { label: "Author", value: "David (superscription: 'A Song of Ascents. Of David')" },
  { label: "Position", value: "Twelfth of the 15 Songs of Ascents (Psalm 131)" },
  { label: "Collection", value: "Songs of Ascents -- pilgrim psalms to Jerusalem" },
  { label: "Genre", value: "Psalm of trust and humility (wisdom flavor)" },
  { label: "Length", value: "One of the shortest psalms -- only 3 verses" },
  { label: "Key Verse", value: "v. 2 -- I have calmed and quieted my soul, like a weaned child with its mother" },
  { label: "NT Connection", value: "Matthew 18:3-4 become like children; 1 Peter 5:6-7 humble yourselves, cast your cares" },
];

const THEMES = [
  {
    color: PURPLE,
    title: "My Heart Is Not Lifted Up: The Anatomy of Humility",
    body: `Psalm 131 opens with one of the most precise descriptions of humility in all of Scripture: "O LORD, my heart is not lifted up; my eyes are not raised too high; I do not occupy myself with things too great and too marvelous for me." Three dimensions of pride are renounced in turn -- the heart, the eyes, and the activity of the mind -- and in each case David testifies to a deliberate, achieved humility.
<br/><br/>
The "lifted up heart" (gavah lev) is the biblical idiom for arrogance, the inner self-exaltation that places oneself above one's proper station. Throughout the OT, the lifted-up heart is the root of downfall: it was the sin of Uzziah (2 Chronicles 26:16), the danger Moses warned Israel against (Deuteronomy 8:14), the characteristic of the proud king of Babylon (Daniel 5:20). David, the king who had every worldly reason for a lifted-up heart, testifies that his heart is not lifted up. This is remarkable precisely because of who is saying it: the anointed king, the giant-slayer, the man after God's own heart, claims the posture of humility.
<br/><br/>
The "eyes raised too high" (rum einayim) parallels the lifted heart with the outward gesture of arrogance -- the haughty look that surveys others from above. Proverbs 6:17 lists "haughty eyes" first among the things the LORD hates. The "things too great and too marvelous" (gedolot...niphla'ot) that David refuses to occupy himself with are matters beyond his proper station and comprehension -- perhaps the secret counsels of God, perhaps ambitions beyond his calling, perhaps the prideful grasping after knowledge and status that is not his to have.
<br/><br/>
Calvin notes the difficulty and the genuineness of this claim: "It is no common attainment to be able truly to say before God, 'My heart is not lifted up.' For pride is so deeply rooted in us that we can scarcely speak of humility without betraying some secret arrogance. David's testimony is the fruit of long self-discipline and the grace of God." For the New Testament, this humility is supremely embodied in Christ, who, "though he was in the form of God, did not count equality with God a thing to be grasped, but emptied himself" (Philippians 2:6-7). The non-grasping humility of Psalm 131 finds its perfection in the incarnation.`,
  },
  {
    color: TEAL,
    title: "Like a Weaned Child: The Central Image of Quieted Trust",
    body: `The heart of Psalm 131 is its central image in verse 2: "But I have calmed and quieted my soul, like a weaned child with its mother; like a weaned child is my soul within me." The choice of a weaned child rather than a nursing infant is theologically precise and deeply significant. A nursing infant at its mother's breast is content only because it is being fed; its peace depends on getting what it wants. A weaned child, by contrast, has learned to be with its mother without demanding the breast -- it rests in her presence for her own sake, not merely for what she provides.
<br/><br/>
This distinction is the key to the psalm's spiritual maturity. The weaned child has passed through the trauma of weaning -- the painful process of being denied the breast it once depended on, the crying and restlessness of learning to do without. But having passed through it, the weaned child achieves a new and higher contentment: it can simply be with its mother, quiet and at peace, not because it is being fed but because it is with the one it loves and trusts. This is a picture of mature faith that has moved beyond demanding things from God to simply resting in God himself.
<br/><br/>
The verbs "calmed and quieted" (shivviti vedomamti) describe a deliberate, achieved stillness. The first verb (shavah) suggests composing or leveling, smoothing out the agitations of the soul; the second (damam) means to be silent, still, at rest. This is not natural temperament but spiritual discipline -- David has worked to still his soul, to quiet the inner clamor of ambition and anxiety. The repetition "like a weaned child is my soul within me" lingers on the image, inviting the reader to dwell in the picture of the soul finally at rest.
<br/><br/>
Charles Spurgeon, who knew deep seasons of depression, wrote movingly of this verse: "It is not easy thus to wean the soul from the breast of earthly comfort and ambition. The weaning is a painful process, but the result is a peace that the nursing infant never knows -- the peace of one who has learned to rest in God for God's own sake." Tremper Longman III adds: "The weaned child image captures the difference between immature faith that values God for his gifts and mature faith that values God for himself. The weaned soul has learned to want God more than God's blessings." Jesus's call to "become like children" (Matthew 18:3) is fulfilled not in childish demanding but in this childlike trust.`,
  },
  {
    color: GOLD,
    title: "Things Too Great for Me: The Wisdom of Knowing Your Limits",
    body: `David's refusal to "occupy myself with things too great and too marvelous for me" (v. 1) embodies a crucial dimension of biblical wisdom: the humble acceptance of creaturely limits. There are matters too great for any human mind to comprehend and too high for any human station to reach, and the wise person learns to leave these matters in God's hands rather than grasping after them in prideful ambition.
<br/><br/>
This theme connects Psalm 131 to the climax of the book of Job, where God answers Job's questions not with explanations but with a tour of the cosmos that humbles Job into silence: "Where were you when I laid the foundation of the earth?...Have you comprehended the expanse of the earth? Declare, if you know all this!" (Job 38:4, 18). Job's response is the response of the weaned soul: "I have uttered what I did not understand, things too wonderful for me, which I did not know...therefore I despise myself, and repent in dust and ashes" (Job 42:3, 6). The same word "too wonderful/marvelous" (niphla'ot) appears in both Job 42:3 and Psalm 131:1.
<br/><br/>
The wisdom of accepting one's limits is not anti-intellectualism or false modesty. It is the recognition that the creature is not the Creator, that there are depths of divine providence and purpose that exceed human comprehension, and that the appropriate response to these depths is not anxious grasping but humble trust. Deuteronomy 29:29 states the principle: "The secret things belong to the LORD our God, but the things that are revealed belong to us and to our children forever." David occupies himself with what is revealed and entrusts the secret things to God.
<br/><br/>
Derek Kidner observes: "There is a kind of restless ambition, even in the spiritual life, that must understand everything, resolve every mystery, attain every height. Psalm 131 renounces this restlessness in favor of a childlike trust that is content to leave the great things with God." For the Christian, this means resting in the goodness of God even when his providence is incomprehensible, trusting the Father's wisdom even when his ways are past finding out (Romans 11:33). The weaned soul does not need to understand everything; it needs only to trust the One who does.`,
  },
  {
    color: GREEN,
    title: "Hope in the LORD: From Personal Stillness to Communal Call",
    body: `The psalm closes in verse 3 by turning outward from David's personal testimony to a call addressed to the whole community: "O Israel, hope in the LORD from this time forth and forevermore." Having described his own quieted soul, David does not keep this peace to himself but commends it to all God's people. The personal discipline of the weaned soul becomes the communal calling of Israel.
<br/><br/>
This movement from personal testimony to communal exhortation is characteristic of the Psalter and especially of the Songs of Ascents. The individual who has found peace in trust invites the community into the same peace. David's "I have calmed and quieted my soul" becomes "O Israel, hope in the LORD." The path he has walked -- from the lifted-up heart through the painful weaning to the quieted soul -- is the path he commends to all God's people.
<br/><br/>
The phrase "from this time forth and forevermore" (me'attah ve'ad olam) is the same liturgical formula found in Psalms 113:2, 115:18, 121:8, and 125:2. It locates the call to hope in both the present moment and the eternal future. The hope David commends is not a temporary expedient for a season of difficulty but a permanent orientation of the soul, stretching from "now" into "forever." This is hope as a settled disposition, not a passing feeling.
<br/><br/>
The word "hope" (yachal) carries the sense of waiting expectantly, of patient trust in God's faithfulness. It is the same posture as the weaned child resting with its mother: not anxious, not demanding, not grasping, but quietly confident in the goodness and presence of the One who is trusted. For Christians, this hope is anchored in Christ, "the hope of glory" (Colossians 1:27), and is described in Hebrews 6:19 as "a sure and steadfast anchor of the soul." The quieted soul of Psalm 131 and the anchored hope of Hebrews are the same reality: a heart at rest in the faithfulness of God, from this time forth and forevermore.`,
  },
];

const VERSES = [
  {
    ref: "v. 1",
    text: "O LORD, my heart is not lifted up; my eyes are not raised too high; I do not occupy myself with things too great and too marvelous for me.",
    comment: `David renounces three dimensions of pride: the inner disposition ("heart not lifted up," gavah lev -- the biblical idiom for arrogance), the outward gesture ("eyes not raised too high," rum einayim -- the haughty look the LORD hates, Proverbs 6:17), and the mental activity ("not occupy myself with things too great"). The "things too great and too marvelous" (gedolot...niphla'ot) are matters beyond his proper station and comprehension -- the secret counsels of God, ambitions beyond his calling, the prideful grasping after status and knowledge that is not his to have. The remarkable thing is the speaker: David, the anointed king and giant-slayer, claims the posture of humility. Calvin: "It is no common attainment to say truly before God, 'My heart is not lifted up,' for pride is so deeply rooted that we can scarcely speak of humility without betraying some secret arrogance."`,
  },
  {
    ref: "v. 2",
    text: "But I have calmed and quieted my soul, like a weaned child with its mother; like a weaned child is my soul within me.",
    comment: `The psalm's central image and one of the most tender in the Psalter. The verbs "calmed and quieted" (shivviti vedomamti) describe a deliberate, achieved stillness -- not natural temperament but spiritual discipline. The choice of a "weaned child" (gamul) rather than a nursing infant is crucial: a nursing infant is content only while being fed, its peace dependent on getting what it wants; a weaned child has passed through the painful process of weaning and learned to rest in its mother's presence for her own sake, not for what she provides. This is the picture of mature faith that values God for himself, not merely for his gifts. The repetition "like a weaned child is my soul within me" lingers on the image. Spurgeon: "The weaning is painful, but the result is a peace the nursing infant never knows."`,
  },
  {
    ref: "v. 3",
    text: "O Israel, hope in the LORD from this time forth and forevermore.",
    comment: `The psalm turns outward from personal testimony to communal exhortation. Having described his own quieted soul, David commends the same peace to all God's people: "O Israel, hope in the LORD." The personal discipline becomes the communal calling. "Hope" (yachal) means to wait expectantly, to trust patiently in God's faithfulness -- the same posture as the weaned child resting with its mother. The formula "from this time forth and forevermore" (me'attah ve'ad olam), shared with Psalms 113:2, 115:18, 121:8, and 125:2, locates this hope in both the present and the eternal future. The hope is not a temporary expedient but a permanent orientation of the soul. Kidner: "The psalm that began with the renunciation of pride ends with the commendation of hope -- for the humble soul is precisely the soul set free to hope in God alone."`,
  },
];

const APPLICATIONS = [
  {
    color: PURPLE,
    title: "The Discipline of Weaning: How the Soul Finds Rest",
    body: `Psalm 131's central image of the weaned child offers a profound model for the spiritual life. The weaned child has passed through a painful transition: the denial of the breast it once depended on, the crying and restlessness of learning to do without, the gradual acceptance of a new way of being with its mother. Only on the far side of this painful weaning does the higher contentment emerge -- the peace of simply being with the mother, not for what she provides but for who she is.
<br/><br/>
The spiritual application is searching. Much of our restlessness with God comes from relating to him as a nursing infant relates to the breast: we are content only when he is giving us what we want, and we become agitated, demanding, and anxious when the blessings are withheld. The weaning process -- often experienced as a season of spiritual dryness, unanswered prayer, or the removal of comforts we had depended on -- is precisely the means by which God matures us beyond this. He weans us from his gifts so that we may learn to rest in him alone.
<br/><br/>
<em>Prayer prompt</em>: Lord, I confess that I often come to you like a nursing infant, content only when you are giving me what I want, restless and demanding when the blessings are withheld. Do the painful work of weaning in my soul. Teach me to rest in your presence for your own sake, not merely for your gifts. Calm and quiet my soul, like a weaned child with its mother, that I may find the peace that does not depend on getting what I want. Amen.`,
  },
  {
    color: TEAL,
    title: "Renouncing the Lifted-Up Heart in an Age of Self-Promotion",
    body: `David's testimony -- "my heart is not lifted up; my eyes are not raised too high" -- is profoundly countercultural in an age built on self-promotion, personal branding, and the relentless cultivation of status. The contemporary world trains us toward exactly the opposite of Psalm 131: to lift up our hearts in self-regard, to raise our eyes in comparison and ambition, to occupy ourselves with things too great as we strive to be more, have more, and be seen as more.
<br/><br/>
The humility of Psalm 131 is not low self-esteem or false modesty; it is the accurate self-assessment of the creature before the Creator, combined with a deliberate refusal to grasp after what is not one's to have. It is, paradoxically, a deeply restful posture: the one who has renounced the lifted-up heart is freed from the exhausting work of self-promotion and comparison. The weaned soul does not need to be impressive; it needs only to rest in God.
<br/><br/>
1 Peter 5:6-7 provides the New Testament application: "Humble yourselves, therefore, under the mighty hand of God so that at the proper time he may exalt you, casting all your anxieties on him, because he cares for you." Notice the connection Peter makes, which is exactly the connection of Psalm 131: humility and the casting off of anxiety go together. The lifted-up heart is an anxious heart, always striving and comparing. The humbled heart is a restful heart, casting its cares on the God who cares. <em>Practical step</em>: identify one area where you are grasping after "things too great" -- a status, a recognition, a control that is not yours to seize -- and deliberately surrender it to God, choosing the rest of the weaned soul over the restlessness of ambition.`,
  },
  {
    color: GOLD,
    title: "Content Not to Understand: Trusting God with the Great Things",
    body: `David's refusal to "occupy myself with things too great and too marvelous for me" speaks directly to a particular form of spiritual restlessness: the compulsion to understand everything, to resolve every theological mystery, to have an answer for every hard providence. While the pursuit of understanding is good and the study of Scripture is commanded, there is a kind of restless grasping after comprehension that actually reflects pride rather than devotion -- the refusal to accept that some things belong to God alone.
<br/><br/>
Deuteronomy 29:29 draws the line: "The secret things belong to the LORD our God, but the things that are revealed belong to us and to our children." The wise person occupies themselves diligently with what God has revealed while entrusting the secret things to God. This is especially important in seasons of suffering, when the temptation is strongest to demand explanations: why did this happen? why has God allowed this? The weaned soul learns to trust God's goodness even when his providence is incomprehensible.
<br/><br/>
This does not mean abandoning the life of the mind or refusing to wrestle with hard questions. It means holding our questions with humility, recognizing the limits of creaturely comprehension, and resting in the trustworthiness of God when answers do not come. Job never received an explanation for his suffering; he received an encounter with God that was enough. <em>Application</em>: when faced with a providence you cannot understand, practice the discipline of the weaned soul -- bring the question honestly to God, then lay it down, trusting that the One who laid the foundations of the earth knows what he is doing, even when you do not.`,
  },
  {
    color: GREEN,
    title: "From This Time Forth: Hope as a Settled Orientation",
    body: `The psalm's closing call -- "O Israel, hope in the LORD from this time forth and forevermore" -- frames hope not as a passing feeling but as a permanent orientation of the soul. The quieted, weaned soul of verse 2 becomes the hoping community of verse 3. Having found rest in trust, David commends that same hope to all God's people, anchoring it in both the present moment ("from this time forth") and the eternal future ("forevermore").
<br/><br/>
This is significant for how Christians understand hope. Biblical hope is not optimism (a temperamental expectation that things will work out) nor wishful thinking (a desire for an uncertain outcome). It is the settled, expectant trust in the faithfulness of God -- the same posture as the weaned child resting with its mother. This hope does not depend on favorable circumstances; it depends on the unchanging character of God. It can therefore endure "from this time forth and forevermore," through every season of life and beyond death itself.
<br/><br/>
Hebrews 6:19 describes this hope as "a sure and steadfast anchor of the soul" -- an image of stability in the storm. The anchored soul does not toss with every wave of circumstance because it is fixed to something unmovable: the faithfulness of God in Christ. <em>Practical encouragement</em>: cultivate hope as a discipline, not merely a feeling. When circumstances are dark and the future is uncertain, return deliberately to the call of Psalm 131:3 -- "hope in the LORD." Let the quieted soul that rests in God's presence become the hoping soul that trusts God's future. This hope is available "from this time forth and forevermore" -- there is no season of life in which it is not offered to those who trust the LORD.`,
  },
];

export default function Psalm131Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openTheme, setOpenTheme] = useState<number | null>(null);
  const [openVerse, setOpenVerse] = useState<number | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #0d0a1a 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ background: ACCENT, color: "#fff", fontSize: "0.75rem", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.08em", padding: "0.25rem 0.75rem", borderRadius: "999px", textTransform: "uppercase" }}>Psalm 131</span>
            <span style={{ color: MUTED, fontSize: "0.85rem", fontFamily: "sans-serif" }}>Song of Ascents &bull; David &bull; 3 Verses</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 1rem" }}>
            Like a Weaned Child Is My Soul
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: "680px", margin: "0 0 1.5rem" }}>
            One of the shortest and tenderest psalms -- David's portrait of humble, quieted trust: a heart not lifted up, a soul calmed like a weaned child with its mother, and a call for all Israel to hope in the LORD from this time forth and forevermore.
          </p>
          <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1.25rem", margin: "0", color: TEXT, fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7 }}>
            &ldquo;I have calmed and quieted my soul, like a weaned child with its mother; like a weaned child is my soul within me.&rdquo;
            <span style={{ display: "block", fontSize: "0.85rem", color: MUTED, fontStyle: "normal", marginTop: "0.5rem" }}>&mdash; Psalm 131:2</span>
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
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.25rem", color: ACCENT }}>Overview of Psalm 131</h2>
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `Psalm 131 is one of the shortest psalms in the Psalter -- only three verses -- yet it is among the most beloved for its tender portrait of humble, quieted trust. Attributed to David and the twelfth of the fifteen Songs of Ascents, it presents a soul that has learned to rest in God like a weaned child resting with its mother. Charles Spurgeon called it "one of the shortest psalms to read, but one of the longest to learn."` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The psalm's structure is simple and profound. Verse 1 is a triple renunciation of pride: David testifies that his heart is not lifted up, his eyes are not raised too high, and he does not occupy himself with things too great and too marvelous for him. Verse 2 is the psalm's heart: David describes how he has calmed and quieted his soul, "like a weaned child with its mother." Verse 3 turns outward, commending to all Israel the same hope in the LORD that David has found, "from this time forth and forevermore."` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The choice of the weaned child as the central image is the psalm's most distinctive feature. A weaned child is different from a nursing infant: the nursing infant is content only while being fed, its peace dependent on getting what it wants, but the weaned child has passed through the painful process of weaning and learned to rest in its mother's presence for her own sake. This is a picture of mature faith that values God for himself, not merely for his gifts &mdash; faith that has been "weaned" from demanding things of God and has learned simply to rest in him.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `It is striking that this psalm of humility is attributed to David &mdash; the anointed king, the giant-slayer, the man whose life was filled with great deeds and great responsibilities. That such a man could say "my heart is not lifted up" and describe his soul as a weaned child reveals that this humility is not the humility of those who have no reason for pride, but the achieved humility of one who has deliberately stilled his soul before God. It is the fruit of long spiritual discipline and the grace of God working in a great man.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: `For Christians, Psalm 131 anticipates Jesus's teaching that we must "become like children" to enter the kingdom (Matthew 18:3) and Peter's call to "humble yourselves under the mighty hand of God...casting all your anxieties on him" (1 Peter 5:6&ndash;7). The non-grasping humility of the psalm finds its perfection in Christ himself, who "did not count equality with God a thing to be grasped, but emptied himself" (Philippians 2:6&ndash;7). The weaned soul at rest in God is the soul conformed to the image of the humble Son.` }} />

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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>How Psalm 131 shapes humility, rest, and hope.</p>
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
