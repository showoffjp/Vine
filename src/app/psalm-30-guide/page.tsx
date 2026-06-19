"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

interface Accordion {
  id: string;
  title: string;
  ref: string;
  body: string;
}

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const videoItems = [
  { id: "rNcERbkSTXU", title: "Psalm 30 - Joy Comes With the Morning" },
  { id: "OjJ7GkWCHvA", title: "From Mourning to Dancing - A Study of Psalm 30" },
  { id: "pHBzJ2dVXgk", title: "The Danger of Self-Sufficiency in Prosperity" },
  { id: "3sO5FH2ybPY", title: "Thanksgiving After Deliverance - Praying Psalm 30" },
];

const overviewBlocks: { heading: string; body: string }[] = [
  {
    heading: "A Song of Thanksgiving After the Night",
    body:
      "Psalm 30 is a psalm of thanksgiving, the joyful counterpart to the laments. Where the lament cries out from the depths, the thanksgiving psalm looks back from the far side of rescue and tells the story of how God brought the singer up. David has passed through some near-fatal crisis &mdash; a deadly illness, a brush with the grave, a season when his soul itself seemed to be sinking down to Sheol &mdash; and he has come out the other side alive. This psalm is the overflow of a heart that has been spared, and it pulses with the wonder of one who knows he should not still be here. Its most famous line has comforted the grieving for three thousand years: &ldquo;Weeping may tarry for the night, but joy comes with the morning.&rdquo;",
  },
  {
    heading: "The Shape of the Psalm",
    body:
      "Psalm 30 moves through a clear progression. It opens with exuberant praise for deliverance (vv.&nbsp;1&ndash;3), then calls the whole congregation to join in thanksgiving and states the great principle that God&rsquo;s anger is brief but His favor lasts a lifetime (vv.&nbsp;4&ndash;5). The middle of the psalm is a candid confession: David admits that in his days of ease he grew proud and self-secure, saying &ldquo;I shall never be moved,&rdquo; until God hid His face and David was dismayed (vv.&nbsp;6&ndash;7). He then recounts the desperate prayer he prayed in his distress (vv.&nbsp;8&ndash;10), and finally celebrates the deliverance God granted &mdash; turning mourning into dancing &mdash; resolving to give thanks forever (vv.&nbsp;11&ndash;12). The psalm thus carries us full circle, from praise to confession to plea and back to praise.",
  },
  {
    heading: "Context: A Psalm for the Dedication of the House",
    body:
      "The superscription of Psalm 30 reads, &ldquo;A Psalm of David. A Song at the dedication of the temple,&rdquo; or more literally, the dedication of &ldquo;the house.&rdquo; This connects the psalm to a moment of beginning and consecration. Some take it to point ahead to the dedication of God&rsquo;s house, the temple Solomon would build; others to the dedication of David&rsquo;s own royal house after his deliverance. Either way, a deeply personal song of rescue from death became a corporate song of consecration &mdash; the testimony of one man&rsquo;s deliverance taken up into the worship of the whole people, marking the dedication of a place where God&rsquo;s favor would dwell. The personal and the communal, the individual&rsquo;s rescue and the people&rsquo;s praise, are woven together.",
  },
];

const themeItems: Accordion[] = [
  {
    id: "t1",
    title: "Thanksgiving After Deliverance From Death",
    ref: "Psalm 30:1&ndash;3",
    body:
      "<p>Psalm 30 is born out of rescue. &ldquo;I will extol you, O LORD, for you have drawn me up&hellip; you have healed me&hellip; you brought up my soul from Sheol&rdquo; (30:1&ndash;3). The imagery is of a man hauled up out of a deep pit, snatched back from the very entrance of the grave. Whatever the precise nature of the crisis &mdash; serious illness is the most natural reading &mdash; David had genuinely been at the threshold of death, and God reached down and pulled him back to life.</p>" +
      "<p>The right response to deliverance is praise that names the Deliverer. David does not credit his recovery to good fortune, to his own constitution, or to the skill of physicians. He says to God, &ldquo;<em>you</em> have drawn me up; <em>you</em> have healed me; <em>you</em> brought up my soul.&rdquo; The whole psalm is an act of testimony, telling out what God has done so that others may know and trust Him too. Gratitude that stays silent withers; gratitude that is spoken aloud becomes worship and witness.</p>" +
      "<p>Cross references: <strong>Psalm 116:1&ndash;9</strong> (&ldquo;you have delivered my soul from death&rdquo;); <strong>Jonah 2:1&ndash;9</strong> (a thanksgiving prayed from the belly of the deep); <strong>Isaiah 38:9&ndash;20</strong> (Hezekiah&rsquo;s song after recovery from a deadly illness); <strong>Psalm 103:1&ndash;5</strong> (&ldquo;who heals all your diseases&rdquo;).</p>",
  },
  {
    id: "t2",
    title: "Weeping for a Night, Joy in the Morning",
    ref: "Psalm 30:4&ndash;5",
    body:
      "<p>At the heart of Psalm 30 lies one of the most quoted promises in all of Scripture: &ldquo;For his anger is but for a moment, and his favor is for a lifetime. Weeping may tarry for the night, but joy comes with the morning&rdquo; (30:5). David sets two pairs in deliberate contrast. God&rsquo;s anger is measured in <em>moments</em>; His favor is measured in <em>lifetimes</em>. Weeping is given the span of a single <em>night</em>; joy belongs to the <em>morning</em> that surely follows. The arithmetic of grace is weighted overwhelmingly toward favor and joy.</p>" +
      "<p>This is not a denial that the night is real. Weeping does &ldquo;tarry&rdquo; &mdash; it lodges with us, it overstays, the hours of darkness can feel endless. But the night, however long, is not the final word. Morning is built into the order of things for the people of God. The phrase has carried countless mourners through their darkest hours because it does not pretend the sorrow away; it simply insists, on God&rsquo;s authority, that sorrow has a sunrise.</p>" +
      "<p>Cross references: <strong>2 Corinthians 4:17</strong> (&ldquo;this light momentary affliction is preparing&hellip; an eternal weight of glory&rdquo;); <strong>John 16:20&ndash;22</strong> (&ldquo;your sorrow will turn into joy&rdquo;); <strong>Revelation 21:4</strong> (&ldquo;he will wipe away every tear&rdquo;); <strong>Psalm 126:5&ndash;6</strong> (&ldquo;those who sow in tears shall reap with shouts of joy&rdquo;).</p>",
  },
  {
    id: "t3",
    title: "The Danger of Self-Sufficiency in Prosperity",
    ref: "Psalm 30:6&ndash;7",
    body:
      "<p>One of the most honest moments in the Psalter comes in verse 6: &ldquo;As for me, I said in my prosperity, &lsquo;I shall never be moved.&rsquo;&rdquo; David confesses that his days of ease had quietly bred a dangerous pride. When all was well, he forgot the source of his security and began to imagine himself self-made, unshakeable, beyond the reach of trouble. Prosperity, which seems so safe, had become a spiritual peril. It lulled him into a forgetfulness of God that adversity would never have allowed.</p>" +
      "<p>Then comes the humbling. &ldquo;You hid your face; I was dismayed&rdquo; (30:7). David recognizes, looking back, that his standing was never the achievement he had assumed but a gift &mdash; &ldquo;by your favor, O LORD, you made my mountain stand strong.&rdquo; The moment God withdrew the sense of His presence, the whole proud structure collapsed and David was undone. This is a mercy in disguise: the trouble that shattered his self-sufficiency drove him back to the only true ground of his security, which is God Himself.</p>" +
      "<p>Cross references: <strong>Deuteronomy 8:11&ndash;18</strong> (the warning not to forget the LORD when full and prosperous); <strong>Luke 12:16&ndash;21</strong> (the rich fool who said &ldquo;I shall not be moved&rdquo; in his abundance); <strong>1 Corinthians 10:12</strong> (&ldquo;let anyone who thinks that he stands take heed lest he fall&rdquo;); <strong>Proverbs 30:8&ndash;9</strong> (the prayer against riches that make us forget God).</p>",
  },
  {
    id: "t4",
    title: "God Turns Mourning Into Dancing",
    ref: "Psalm 30:11&ndash;12",
    body:
      "<p>The climax of the psalm is pure transformation: &ldquo;You have turned for me my mourning into dancing; you have loosed my sackcloth and clothed me with gladness&rdquo; (30:11). David uses the vivid pictures of his culture. Sackcloth was the rough garment of grief and repentance; dancing and festal clothing belonged to celebration. God did not merely lessen David&rsquo;s sorrow; He reversed it, stripping off the funeral garb and dressing him in joy. The same hand that had hidden its face now lifts the mourner up and sets his feet to dancing.</p>" +
      "<p>And there is a purpose in this deliverance, stated in the final verse: &ldquo;that my glory may sing your praise and not be silent. O LORD my God, I will give thanks to you forever&rdquo; (30:12). David was not rescued merely for his own comfort but so that he might praise. God restores the silent, dust-bound, dying soul precisely so that it can lift its voice. The end of deliverance is doxology &mdash; a redeemed life given over to thanksgiving that will not be silenced, that intends to praise &ldquo;forever.&rdquo;</p>" +
      "<p>Cross references: <strong>Jeremiah 31:13</strong> (&ldquo;I will turn their mourning into joy&rdquo;); <strong>Isaiah 61:3</strong> (&ldquo;the garment of praise instead of a faint spirit&rdquo;); <strong>Luke 15:22&ndash;24</strong> (the father clothes the returned son and the household celebrates); <strong>Psalm 149:3</strong> (praising God with dancing).</p>",
  },
  {
    id: "t5",
    title: "Night to Morning &mdash; A Pattern of the Christian Life",
    ref: "Psalm 30:5; Romans 6",
    body:
      "<p>The movement from night to morning, from mourning to dancing, is more than a single episode in David&rsquo;s life; it is a pattern woven through the whole Christian experience and ultimately through the gospel itself. The believer walks a path that repeatedly leads through nights of weeping into mornings of restored joy, learning each time that the darkness is real but never final. Every small deliverance is a rehearsal of the great one.</p>" +
      "<p>Supremely, this night-to-morning shape is fulfilled in Christ. The cross was the deepest night the world has known, the hiding of the Father&rsquo;s face in earnest, and the entrance of the eternal Son into the grave. But the third morning came. The resurrection of Jesus is the great morning after the great night, the moment when mourning was turned into dancing for the whole people of God. Because of Easter, the believer can sing Psalm 30 with unshakable confidence: the night of the cross has given way forever to the morning of the empty tomb, and that morning will have no end.</p>" +
      "<p>Cross references: <strong>Luke 24:1&ndash;7</strong> (the women come to the tomb at early dawn); <strong>1 Corinthians 15:54&ndash;57</strong> (&ldquo;Death is swallowed up in victory&rdquo;); <strong>Romans 6:4&ndash;5</strong> (united with Christ in death and resurrection); <strong>Revelation 22:5</strong> (&ldquo;night will be no more&rdquo;).</p>",
  },
];

const verseItems: Accordion[] = [
  {
    id: "v1",
    title: "Drawn Up From Sheol &mdash; The Opening Praise",
    ref: "Psalm 30:1&ndash;3",
    body:
      "<p>&ldquo;I will extol you, O LORD, for you have drawn me up and have not let my foes rejoice over me. O LORD my God, I cried to you for help, and you have healed me. O LORD, you have brought up my soul from Sheol; you restored me to life from among those who go down to the pit&rdquo; (30:1&ndash;3). The psalm opens at full volume with praise. The verb &ldquo;drawn me up&rdquo; pictures a bucket being hauled up from a deep well &mdash; David had sunk that low, and God lifted him out.</p>" +
      "<p>Three times in these verses David addresses God by name, and three ways he describes the rescue: God drew him up, healed him, and brought up his soul from Sheol. Sheol and &ldquo;the pit&rdquo; are the Old Testament language for the realm of the dead. David is testifying that he had been all but gone, and that his recovery is nothing less than a restoration to life from the very edge of the grave. He had cried out for help, and God had answered &mdash; and now the answer becomes the occasion of his song.</p>" +
      "<p>Notice the detail that God did not &ldquo;let my foes rejoice over me.&rdquo; David&rsquo;s deliverance is also a vindication; the enemies who would have gloated at his death are silenced by his recovery. The whole opening is a model of how to begin our thanksgiving: by remembering specifically and gratefully what God has done, and by giving Him the unmistakable credit.</p>",
  },
  {
    id: "v2",
    title: "His Anger a Moment, His Favor a Lifetime",
    ref: "Psalm 30:4&ndash;5",
    body:
      "<p>&ldquo;Sing praises to the LORD, O you his saints, and give thanks to his holy name. For his anger is but for a moment, and his favor is for a lifetime. Weeping may tarry for the night, but joy comes with the morning&rdquo; (30:4&ndash;5). Here David turns from his own story to summon the whole congregation of the faithful into the song. Thanksgiving that begins as a private testimony reaches outward to draw others into praise.</p>" +
      "<p>The reason he gives for this corporate praise is the great truth of verse 5, with its two beautifully balanced contrasts. God&rsquo;s anger is &ldquo;but for a moment,&rdquo; while His favor lasts &ldquo;for a lifetime.&rdquo; The discipline of God toward His own children is real, but it is never the dominant note; it is the brief shadow over a life lived under His enduring kindness. And then the second contrast, even more tender: &ldquo;Weeping may tarry for the night, but joy comes with the morning.&rdquo;</p>" +
      "<p>The word for &ldquo;tarry&rdquo; suggests weeping that comes to lodge for the night like a guest who stays till dawn &mdash; but only till dawn. The verse does not deny the long, dark hours; it simply promises that they are bounded, that morning is appointed, and that joy arrives with it as surely as the sun. For the saints who sing this psalm, the night always has a morning on the other side of it.</p>",
  },
  {
    id: "v3",
    title: "The Confession of False Security",
    ref: "Psalm 30:6&ndash;7",
    body:
      "<p>&ldquo;As for me, I said in my prosperity, &lsquo;I shall never be moved.&rsquo; By your favor, O LORD, you made my mountain stand strong; you hid your face; I was dismayed&rdquo; (30:6&ndash;7). With disarming honesty David exposes the spiritual blindness that crept over him in his good days. Comfort had made him careless. Secure and prosperous, he had begun to say in his heart, &ldquo;I shall never be moved&rdquo; &mdash; as though his stability were a permanent fixture of his own making.</p>" +
      "<p>The irony is sharp, for David then admits the truth he had forgotten: &ldquo;<em>By your favor</em>, O LORD, you made my mountain stand strong.&rdquo; His security had never been his own achievement; it was a gift, held in being moment by moment by the favor of God. Prosperity is dangerous precisely because it can hide this dependence from us, tempting us to mistake God&rsquo;s gifts for our own accomplishments and to forget the Giver.</p>" +
      "<p>So God taught him. &ldquo;You hid your face; I was dismayed.&rdquo; The moment the felt presence and favor of God were withdrawn, David&rsquo;s confidence collapsed in an instant. The proud man who thought himself immovable was thrown into dismay by the mere hiding of God&rsquo;s face. It was a hard lesson, but a saving one, exposing the emptiness of self-sufficiency and driving him back to his true and only security.</p>",
  },
  {
    id: "v4",
    title: "The Prayer in Distress",
    ref: "Psalm 30:8&ndash;10",
    body:
      "<p>&ldquo;To you, O LORD, I cry, and to the Lord I plead for mercy: &lsquo;What profit is there in my death, if I go down to the pit? Will the dust praise you? Will it tell of your faithfulness? Hear, O LORD, and be merciful to me! O LORD, be my helper!&rsquo;&rdquo; (30:8&ndash;10). David now recounts the prayer he prayed when his face fell and dismay overtook him. Stripped of his pride, he did the one right thing: he cried out to God for mercy.</p>" +
      "<p>His argument is bold and even daring. &ldquo;What profit is there in my death? Will the dust praise you?&rdquo; David reasons with God on the basis of God&rsquo;s own glory: a dead man cannot sing God&rsquo;s praise, and silent dust cannot proclaim His faithfulness. In effect he pleads, &ldquo;Keep me alive, Lord, and you will have a worshiper; let me die, and one more voice of praise falls silent.&rdquo; This is how the saints have prayed in extremity &mdash; laying hold of God&rsquo;s purposes and pleading for life so that God may be glorified.</p>" +
      "<p>Notice that the proud man of verse 6 has become the pleading man of verse 10: &ldquo;Be merciful to me! O LORD, be my helper!&rdquo; The crisis has done its work. The self-sufficiency is gone, and in its place is naked dependence on the mercy of God. This is the lowly posture from which deliverance comes &mdash; not the boast &ldquo;I shall never be moved,&rdquo; but the cry &ldquo;be my helper.&rdquo;</p>",
  },
  {
    id: "v5",
    title: "Mourning Into Dancing &mdash; The Deliverance",
    ref: "Psalm 30:11&ndash;12",
    body:
      "<p>&ldquo;You have turned for me my mourning into dancing; you have loosed my sackcloth and clothed me with gladness, that my glory may sing your praise and not be silent. O LORD my God, I will give thanks to you forever&rdquo; (30:11&ndash;12). The psalm ends in glorious reversal. The God who hid His face has now shown it again, and the change is total. Mourning has become dancing; the rough sackcloth of grief has been stripped away and replaced with garments of gladness.</p>" +
      "<p>The transformation is entirely God&rsquo;s doing &mdash; &ldquo;<em>you</em> have turned&hellip; <em>you</em> have loosed&hellip; <em>you</em> have clothed.&rdquo; David adds nothing to his own rescue; he simply receives it and rejoices. And the purpose of it all is praise: &ldquo;that my glory may sing your praise and not be silent.&rdquo; The very prayer of verse 9 is answered &mdash; the dust would have been silent, but the living David will sing. God spared him so that there might be one more voice lifted in worship.</p>" +
      "<p>The final word is &ldquo;forever.&rdquo; This is no momentary gratitude that fades when the crisis passes; it is a settled resolve to give thanks without end. The deliverance of a single season has produced a lifetime &mdash; indeed an eternity &mdash; of praise. And in this we glimpse the goal of every rescue God works for His people: a redeemed life that will never stop singing of His steadfast faithfulness.</p>",
  },
];

const applicationBlocks: { heading: string; body: string }[] = [
  {
    heading: "Tell the Story of Your Deliverance",
    body:
      "<p>Psalm 30 is testimony set to music. David refuses to keep his rescue to himself; he names it, sings it, and calls others to praise God with him. When God brings you through a hard season &mdash; a health crisis, a depression, a danger survived, a prayer finally answered &mdash; do not let the memory fade in silence. Speak it aloud. Tell others what God has done. Write it down. Gratitude that is voiced becomes both worship to God and encouragement to everyone who hears it, for your story of His faithfulness may be exactly what carries another person through their own dark night.</p>",
  },
  {
    heading: "Trust That the Night Has a Morning",
    body:
      "<p>&ldquo;Weeping may tarry for the night, but joy comes with the morning.&rdquo; If you are in the night right now, this verse is not a command to feel better but a promise to hold onto. The weeping is real; God does not minimize it. But on His authority you may believe that the night is bounded and the morning is coming. Resist the lie that the darkness is permanent. The same God who has appointed the dawn after every literal night has appointed a morning after this night too. When you cannot see it, trust the One who has promised it, and let that promise steady you until the light breaks.</p>",
  },
  {
    heading: "Beware the Spiritual Danger of Comfort",
    body:
      "<p>It is one of the great surprises of the spiritual life that prosperity is often more dangerous to the soul than adversity. David did not grow proud and forgetful in his troubles; he grew proud in his ease, saying &ldquo;I shall never be moved.&rdquo; Examine your own heart in your good seasons. When life is comfortable and secure, are you drifting toward a quiet self-sufficiency, mistaking God&rsquo;s gifts for your own achievements and slowly forgetting the Giver? Hold your blessings with open hands and a thankful heart, remembering that every stable mountain stands only &ldquo;by your favor, O LORD.&rdquo; Let your prosperity drive you toward gratitude, not away from dependence.</p>",
  },
  {
    heading: "Let Deliverance Lead to Doxology",
    body:
      "<p>God restored David, in his own words, &ldquo;that my glory may sing your praise and not be silent.&rdquo; The purpose of deliverance is praise. When God answers your prayer and lifts you out of the pit, the question is not merely &ldquo;What will I do now that I am free?&rdquo; but &ldquo;How will I praise the One who freed me?&rdquo; A rescued life is meant to be a thankful life. Make your gratitude active and lasting: worship, serve, give, and tell of His faithfulness, resolving with David to give thanks not for a moment but &ldquo;forever.&rdquo; Above all, see in your every small deliverance a pledge of the great one &mdash; the resurrection morning that has dawned in Christ and will never end.</p>",
  },
];

const reflectionQuestions = [
  "When has God &ldquo;drawn you up&rdquo; from a low place? Have you taken the time to thank Him specifically, and to tell others what He did?",
  "Are you in a season of &ldquo;weeping&rdquo; right now? What would it mean to trust, on God&rsquo;s authority, that &ldquo;joy comes with the morning&rdquo;?",
  "In what ways might comfort and prosperity be quietly breeding self-sufficiency in your heart? Where are you tempted to say, &ldquo;I shall never be moved&rdquo;?",
  "David admits that his security was always &ldquo;by your favor, O LORD.&rdquo; How does remembering that your blessings are gifts change the way you hold them?",
  "David prayed that God would keep him alive so he could praise Him. What is the purpose of your life&rsquo;s &ldquo;mornings&rdquo; after the night &mdash; how do they fuel your worship?",
  "How does the resurrection of Jesus &mdash; the great morning after the great night of the cross &mdash; deepen your confidence as you sing Psalm 30?",
];

const closingPrayer =
  "<p>O LORD my God, I will extol you, for you have drawn me up out of depths I could not escape on my own. You have heard my cry and restored my soul. Forgive me for the seasons of comfort when I grew proud and forgot that my mountain stands strong only by your favor. Humble me gently, and where you have hidden your face, draw near again. I cling to your promise that your anger is but for a moment and your favor for a lifetime, that weeping tarries only for the night and joy comes with the morning. Turn my mourning into dancing; loose my sackcloth and clothe me with gladness, that my whole life may sing your praise and not be silent. And because the morning of Christ&rsquo;s resurrection has dawned and will never end, I will give thanks to you forever. In the name of the risen Jesus, Amen.</p>";

export default function Psalm30Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const accordionStyle = (active: boolean): React.CSSProperties => ({
    background: CARD,
    border: `1px solid ${active ? GOLD : BORDER}`,
    borderRadius: 12,
    marginBottom: 14,
    overflow: "hidden",
    transition: "border-color 0.2s ease",
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${GOLD}22`, color: "#F0C089", borderRadius: 999, padding: "5px 14px", fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 18 }}>
            Psalms Deep Dive
          </div>
          <h1 style={{ fontSize: "2.6rem", lineHeight: 1.1, margin: "0 0 14px", fontWeight: 800, letterSpacing: -1 }}>
            Psalm 30
          </h1>
          <p style={{ fontSize: "1.2rem", color: MUTED, margin: "0 0 26px", lineHeight: 1.5, maxWidth: 640 }}>
            Thanksgiving for deliverance &mdash; weeping that tarries for the night, and the joy that comes with the morning.
          </p>
          <div
            style={{
              background: `linear-gradient(135deg, ${CARD}, #1f1708)`,
              border: `1px solid ${BORDER}`,
              borderLeft: `4px solid ${GOLD}`,
              borderRadius: 14,
              padding: "1.5rem 1.6rem",
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: TEAL, marginBottom: 10 }}>
              Key Verse &mdash; Psalm 30:5
            </div>
            <p
              style={{ margin: 0, fontSize: "1.18rem", lineHeight: 1.6, fontStyle: "italic", color: TEXT }}
              dangerouslySetInnerHTML={{
                __html:
                  "&ldquo;For his anger is but for a moment, and his favor is for a lifetime. Weeping may tarry for the night, but joy comes with the morning.&rdquo;",
              }}
            />
          </div>
        </header>

        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: "2rem",
            borderBottom: `1px solid ${BORDER}`,
            paddingBottom: 14,
          }}
        >
          {TABS.map((t) => {
            const active = tab === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                style={{
                  background: active ? GOLD : "transparent",
                  color: active ? "#1a1208" : MUTED,
                  border: `1px solid ${active ? GOLD : BORDER}`,
                  borderRadius: 999,
                  padding: "9px 18px",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.18s ease",
                }}
              >
                {TAB_LABELS[t]}
              </button>
            );
          })}
        </nav>

        {tab === "overview" && (
          <section>
            {overviewBlocks.map((b, i) => (
              <div key={i} style={{ marginBottom: "1.9rem" }}>
                <h2 style={{ fontSize: "1.5rem", margin: "0 0 12px", fontWeight: 700, color: TEXT }}>{b.heading}</h2>
                <p
                  style={{ margin: 0, fontSize: "1.05rem", lineHeight: 1.75, color: "#D6D6E6" }}
                  dangerouslySetInnerHTML={{ __html: b.body }}
                />
              </div>
            ))}
            <div
              style={{
                marginTop: "2rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: "1.5rem 1.6rem",
              }}
            >
              <h3 style={{ margin: "0 0 14px", fontSize: "1.15rem", color: TEAL, fontWeight: 700 }}>
                The Structure at a Glance
              </h3>
              <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none" }}>
                {[
                  { label: "Praise", ref: "vv.&nbsp;1&ndash;3", desc: "drawn up, healed, brought from Sheol" },
                  { label: "Principle", ref: "vv.&nbsp;4&ndash;5", desc: "joy comes with the morning" },
                  { label: "Confession", ref: "vv.&nbsp;6&ndash;7", desc: "I said, I shall never be moved" },
                  { label: "Plea", ref: "vv.&nbsp;8&ndash;10", desc: "what profit is there in my death?" },
                  { label: "Deliverance", ref: "vv.&nbsp;11&ndash;12", desc: "mourning turned into dancing" },
                ].map((row, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "baseline",
                      padding: "10px 0",
                      borderBottom: i < 4 ? `1px solid ${BORDER}` : "none",
                    }}
                  >
                    <span style={{ color: GOLD, fontWeight: 700, minWidth: 96 }}>{row.label}</span>
                    <span
                      style={{ color: MUTED, fontSize: 13, minWidth: 86 }}
                      dangerouslySetInnerHTML={{ __html: row.ref }}
                    />
                    <span
                      style={{ color: "#D6D6E6", fontSize: 14 }}
                      dangerouslySetInnerHTML={{ __html: row.desc }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {tab === "themes" && (
          <section>
            {themeItems.map((item) => {
              const active = open === item.id;
              return (
                <div key={item.id} style={accordionStyle(active)}>
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      color: TEXT,
                      padding: "1.1rem 1.3rem",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <span>
                      <span
                        style={{ display: "block", fontSize: "1.1rem", fontWeight: 700 }}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                      <span
                        style={{ display: "block", fontSize: 12.5, color: GOLD, marginTop: 4, fontWeight: 600 }}
                        dangerouslySetInnerHTML={{ __html: item.ref }}
                      />
                    </span>
                    <span style={{ color: GOLD, fontSize: 22, lineHeight: 1, flexShrink: 0 }}>
                      {active ? "-" : "+"}
                    </span>
                  </button>
                  {active && (
                    <div
                      style={{ padding: "0 1.3rem 1.3rem", fontSize: "1.02rem", lineHeight: 1.75, color: "#D6D6E6" }}
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  )}
                </div>
              );
            })}
          </section>
        )}

        {tab === "verse" && (
          <section>
            <p style={{ color: MUTED, marginBottom: "1.6rem", fontSize: "1.02rem", lineHeight: 1.6 }}>
              Work through Psalm 30 section by section. Tap each heading to expand the commentary.
            </p>
            {verseItems.map((item) => {
              const active = open === item.id;
              return (
                <div key={item.id} style={accordionStyle(active)}>
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      color: TEXT,
                      padding: "1.1rem 1.3rem",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <span>
                      <span
                        style={{ display: "block", fontSize: 12.5, color: TEAL, fontWeight: 700, letterSpacing: 0.5, marginBottom: 4 }}
                        dangerouslySetInnerHTML={{ __html: item.ref }}
                      />
                      <span
                        style={{ display: "block", fontSize: "1.1rem", fontWeight: 700 }}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                    </span>
                    <span style={{ color: TEAL, fontSize: 22, lineHeight: 1, flexShrink: 0 }}>
                      {active ? "-" : "+"}
                    </span>
                  </button>
                  {active && (
                    <div
                      style={{ padding: "0 1.3rem 1.3rem", fontSize: "1.02rem", lineHeight: 1.75, color: "#D6D6E6" }}
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  )}
                </div>
              );
            })}
          </section>
        )}

        {tab === "application" && (
          <section>
            {applicationBlocks.map((b, i) => (
              <div key={i} style={{ marginBottom: "1.9rem" }}>
                <h2 style={{ fontSize: "1.4rem", margin: "0 0 12px", fontWeight: 700, color: TEXT }}>{b.heading}</h2>
                <div
                  style={{ fontSize: "1.04rem", lineHeight: 1.75, color: "#D6D6E6" }}
                  dangerouslySetInnerHTML={{ __html: b.body }}
                />
              </div>
            ))}

            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${TEAL}`,
                borderRadius: 14,
                padding: "1.6rem 1.7rem",
                margin: "2.2rem 0",
              }}
            >
              <h3 style={{ margin: "0 0 16px", fontSize: "1.25rem", color: TEAL, fontWeight: 700 }}>
                Questions for Reflection
              </h3>
              <ol style={{ margin: 0, paddingLeft: "1.2rem", color: "#D6D6E6" }}>
                {reflectionQuestions.map((q, i) => (
                  <li
                    key={i}
                    style={{ marginBottom: 14, fontSize: "1.02rem", lineHeight: 1.65 }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>

            <h3 style={{ fontSize: "1.4rem", margin: "2.4rem 0 1.2rem", fontWeight: 700, color: TEXT, borderBottom: `2px solid ${PURPLE}`, paddingBottom: 8, display: "inline-block" }}>
              Watch &amp; Reflect
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 18,
                marginBottom: "2.4rem",
              }}
            >
              {videoItems.map((v) => (
                <div
                  key={v.id}
                  style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}
                >
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <div style={{ padding: "0.9rem 1rem", fontSize: 14, color: "#D6D6E6", lineHeight: 1.45 }}>
                    {v.title}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: `linear-gradient(135deg, ${CARD}, #14201d)`,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${GREEN}`,
                borderRadius: 14,
                padding: "1.7rem 1.8rem",
              }}
            >
              <h3 style={{ margin: "0 0 14px", fontSize: "1.25rem", color: GREEN, fontWeight: 700 }}>
                A Closing Prayer
              </h3>
              <div
                style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#E4E2F0", fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: closingPrayer }}
              />
            </div>

            <p style={{ marginTop: "2.4rem", textAlign: "center", color: MUTED, fontSize: 14 }}>
              <span style={{ color: ROSE }}>&hearts;</span>&nbsp; Continue your study with Psalm 13, where the &ldquo;how long?&rdquo; lament turns to trust, and with the thanksgiving of Psalm 116.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
