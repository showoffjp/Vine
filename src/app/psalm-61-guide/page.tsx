"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 61 - Lead Me to the Rock That Is Higher Than I" },
  { videoId: "Q2oNOlXzBhY", title: "The Shelter of Your Wings - Refuge in God's Presence" },
  { videoId: "8phkAg8PMHE", title: "From the End of the Earth I Call - Praying When the Heart Is Faint" },
  { videoId: "fNk_zzaMoSs", title: "Dwelling in God's Tent Forever - The Christ Who Reigns" },
];

interface ThemeItem {
  id: string;
  title: string;
  reference: string;
  body: string;
}

const themeItems: ThemeItem[] = [
  {
    id: "t-faint",
    title: "Crying Out When the Heart Is Faint",
    reference: "Psalm 61:1-2",
    body:
      "<p>&ldquo;Hear my cry, O God, listen to my prayer; from the end of the earth I call to you when my heart is faint&rdquo; (61:1-2). The psalm opens not from a place of strength but from the very edge of endurance &mdash; &ldquo;the end of the earth,&rdquo; the farthest reach of distance and exhaustion, where the heart grows faint and prayer feels like a thin cry sent across an immense distance.</p>" +
      "<p>This is the honest starting point of so much true prayer. David does not wait until he feels strong or near; he calls out precisely when he is far off and failing. The fainting heart is not a barrier to prayer but its occasion. God does not require us to gather ourselves before we cry; he bids us call to him in our weakness.</p>" +
      "<p>The New Testament gathers up this same comfort: &ldquo;Let us then with confidence draw near to the throne of grace, that we may receive mercy and find grace to help in time of need&rdquo; (Hebrews 4:16). The faint heart at the end of the earth is exactly the heart the LORD hears, for he is &ldquo;near to the brokenhearted&rdquo; (Psalm 34:18).</p>",
  },
  {
    id: "t-rock",
    title: "The Rock That Is Higher Than I",
    reference: "Psalm 61:2",
    body:
      "<p>&ldquo;Lead me to the rock that is higher than I&rdquo; (61:2). This is the great cry at the heart of the psalm. David does not ask for a refuge that matches his own strength; he asks to be led to a rock higher than himself &mdash; a place of safety above and beyond his own reach, his own striving, his own ability to climb.</p>" +
      "<p>The phrase confesses a deep truth: our true refuge lies higher than we can rise on our own. When the floodwaters rise and our footing fails, we need a rock we cannot scale by ourselves; we need to be <em>led</em> there. The very prayer is an admission that we cannot save ourselves &mdash; and a plea for the God who is higher than we are to lift us up.</p>" +
      "<p>Christians have long heard in this rock a foretaste of Christ, the rock of refuge and the cleft in which sinners hide. &ldquo;On Christ the solid Rock I stand,&rdquo; the hymn confesses. He is the rock higher than ourselves, to whom the Spirit leads the faint heart, and on whom alone the storm-tossed soul can finally stand secure.</p>",
  },
  {
    id: "t-refuge",
    title: "A Refuge and a Strong Tower",
    reference: "Psalm 61:3",
    body:
      "<p>&ldquo;For you have been my refuge, a strong tower against the enemy&rdquo; (61:3). The prayer to be led to the rock rests upon a memory: God has already been a refuge in the past. David does not approach a stranger but the God who has sheltered him before. Past deliverance becomes the ground of present hope.</p>" +
      "<p>The image of the &ldquo;strong tower&rdquo; pictures God as a fortified height into which the besieged may run and be safe. Proverbs makes the same picture explicit: &ldquo;The name of the LORD is a strong tower; the righteous man runs into it and is safe&rdquo; (Proverbs 18:10). The tower is not a wall we build but a stronghold we run into.</p>" +
      "<p>To remember that God &ldquo;has been&rdquo; our refuge steadies us when we pray that he &ldquo;will be.&rdquo; The faithfulness already shown is the pledge of faithfulness still to come. We pray for refuge not on the basis of our deserving but on the basis of God&rsquo;s proven character.</p>",
  },
  {
    id: "t-tent",
    title: "Dwelling in God's Tent Forever",
    reference: "Psalm 61:4",
    body:
      "<p>&ldquo;Let me dwell in your tent forever! Let me take refuge under the shelter of your wings!&rdquo; (61:4). David&rsquo;s deepest longing is not merely rescue from danger but permanent nearness to God &mdash; to dwell in his &ldquo;tent,&rdquo; the place of his presence, not for a night but &ldquo;forever.&rdquo; The tent recalls the tabernacle, where God met his people; to dwell there is to live in his very company.</p>" +
      "<p>This is the same longing that pulses through the Psalter: &ldquo;One thing have I asked of the LORD&hellip; that I may dwell in the house of the LORD all the days of my life&rdquo; (Psalm 27:4); &ldquo;a day in your courts is better than a thousand elsewhere&rdquo; (Psalm 84:10). The heart that has tasted God&rsquo;s shelter cannot be content with anything less than to abide there always.</p>" +
      "<p>What David longed for, Christ secures: &ldquo;In my Father&rsquo;s house are many rooms&hellip; I go to prepare a place for you&rdquo; (John 14:2). The yearning to dwell in God&rsquo;s tent forever finds its answer in the new Jerusalem, where &ldquo;the dwelling place of God is with man&rdquo; (Revelation 21:3) and his people dwell with him eternally.</p>",
  },
  {
    id: "t-wings",
    title: "The Shelter of Your Wings",
    reference: "Psalm 61:4",
    body:
      "<p>&ldquo;Let me take refuge under the shelter of your wings&rdquo; (61:4). The tender image of being hidden &ldquo;under the wings&rdquo; of God runs like a thread through the Psalms &mdash; the picture of a parent bird gathering its young beneath its feathers, safe from the storm and the predator.</p>" +
      "<p>The image recurs again and again: &ldquo;Keep me as the apple of your eye; hide me in the shadow of your wings&rdquo; (Psalm 17:8); &ldquo;the children of mankind take refuge in the shadow of your wings&rdquo; (Psalm 36:7); &ldquo;in the shadow of your wings I will take refuge, till the storms of destruction pass by&rdquo; (Psalm 57:1); &ldquo;he will cover you with his pinions, and under his wings you will find refuge&rdquo; (Psalm 91:4).</p>" +
      "<p>Jesus took up this very image with aching tenderness over Jerusalem: &ldquo;How often would I have gathered your children together as a hen gathers her brood under her wings, and you were not willing!&rdquo; (Matthew 23:37). The shelter of God&rsquo;s wings is offered still; the only refusal is our own unwillingness to come and be gathered in.</p>",
  },
  {
    id: "t-king",
    title: "Prolong the Life of the King",
    reference: "Psalm 61:6-7",
    body:
      "<p>&ldquo;Prolong the life of the king; may his years endure to all generations! May he be enthroned forever before God; appoint steadfast love and faithfulness to watch over him!&rdquo; (61:6-7). The psalm turns suddenly to prayer for the king, the royal element that marks Psalm 61 as more than a private cry.</p>" +
      "<p>As David&rsquo;s own prayer, these verses ask for the security and endurance of the throne. But the language strains beyond any mortal king: years that &ldquo;endure to all generations,&rdquo; a reign that is &ldquo;enthroned forever before God.&rdquo; No son of David ever lived such years &mdash; except the Son of David whose reign truly has no end.</p>" +
      "<p>So the prayer reaches toward the eternal King, Christ, &ldquo;of whose kingdom there will be no end&rdquo; (Luke 1:33). The steadfast love and faithfulness asked to watch over the king are the very attributes of the God-man who reigns forever. To pray these verses is to pray for the everlasting throne of the Lord Jesus.</p>",
  },
  {
    id: "t-vow",
    title: "The Vow of Continual Praise",
    reference: "Psalm 61:5, 8",
    body:
      "<p>The psalm is framed by vows. &ldquo;For you, O God, have heard my vows; you have given me the heritage of those who fear your name&rdquo; (61:5), and it closes: &ldquo;So will I ever sing praises to your name, as I perform my vows day after day&rdquo; (61:8). The response to refuge is a life of continual praise and faithful keeping of vows.</p>" +
      "<p>Praise here is not a single song but a settled habit &mdash; &ldquo;day after day,&rdquo; &ldquo;forever.&rdquo; The one who has been sheltered under God&rsquo;s wings does not thank him once and forget; he turns his whole life into an ongoing offering of praise. The vow is not a burden but the glad answer of a rescued heart.</p>" +
      "<p>This is the shape of the redeemed life: &ldquo;Through him then let us continually offer up a sacrifice of praise to God, that is, the fruit of lips that acknowledge his name&rdquo; (Hebrews 13:15). Having found the rock higher than ourselves, we spend our days singing the praises of the One who led us there.</p>",
  },
];

interface VerseSection {
  id: string;
  reference: string;
  title: string;
  body: string;
}

const verseSections: VerseSection[] = [
  {
    id: "v-1",
    reference: "Psalm 61:1-2",
    title: "Hear My Cry from the End of the Earth",
    body:
      "<p>&ldquo;Hear my cry, O God, listen to my prayer; from the end of the earth I call to you when my heart is faint. Lead me to the rock that is higher than I&rdquo; (61:1-2).</p>" +
      "<p>The psalm opens with urgent appeal. David is at &ldquo;the end of the earth&rdquo; &mdash; whether literally far from home or simply at the farthest reach of his strength, the words capture the experience of distance and exhaustion. His heart is &ldquo;faint,&rdquo; overwhelmed and failing, and from that low place he lifts his cry.</p>" +
      "<p>The whole psalm is gathered into the great petition of verse 2: &ldquo;Lead me to the rock that is higher than I.&rdquo; David does not ask for a refuge equal to his own strength but for one higher than himself, a safety he cannot reach alone. He asks to be <em>led</em> there, confessing that his deliverance must come from above his own ability.</p>",
  },
  {
    id: "v-2",
    reference: "Psalm 61:3-4",
    title: "My Refuge and the Shelter of Your Wings",
    body:
      "<p>&ldquo;For you have been my refuge, a strong tower against the enemy. Let me dwell in your tent forever! Let me take refuge under the shelter of your wings!&rdquo; (61:3-4).</p>" +
      "<p>The prayer for the rock rests on memory: God &ldquo;has been&rdquo; a refuge and &ldquo;a strong tower against the enemy.&rdquo; Past deliverance fuels present hope. The strong tower (compare Proverbs 18:10) is the stronghold into which the threatened may run and be safe.</p>" +
      "<p>From rescue David rises to his deepest longing: not merely to be saved but to <em>dwell</em> &mdash; to dwell in God&rsquo;s tent &ldquo;forever&rdquo; and take refuge &ldquo;under the shelter of your wings.&rdquo; The tent is the place of God&rsquo;s presence; the wings are his tender, covering care (compare Psalm 17:8; 36:7; 57:1; 91:4). The heart that has tasted shelter longs to abide there always.</p>",
  },
  {
    id: "v-3",
    reference: "Psalm 61:5",
    title: "You Have Heard My Vows",
    body:
      "<p>&ldquo;For you, O God, have heard my vows; you have given me the heritage of those who fear your name&rdquo; (61:5).</p>" +
      "<p>David grounds his confidence in what God has already done: he has &ldquo;heard my vows.&rdquo; The vows are the promises of devotion the worshiper makes to God; that God has heard them assures David that he is known and answered, not ignored.</p>" +
      "<p>And God has granted him &ldquo;the heritage of those who fear your name&rdquo; &mdash; a share in the inheritance of God&rsquo;s covenant people. To fear God&rsquo;s name is to belong to him and to receive what he gives his own: the heritage of his presence, his protection, and his promised blessing. This belonging is the secure foundation beneath the whole prayer.</p>",
  },
  {
    id: "v-4",
    reference: "Psalm 61:6-7",
    title: "Prolong the Life of the King",
    body:
      "<p>&ldquo;Prolong the life of the king; may his years endure to all generations! May he be enthroned forever before God; appoint steadfast love and faithfulness to watch over him!&rdquo; (61:6-7).</p>" +
      "<p>The psalm turns to prayer for the king. As David&rsquo;s own prayer this asks God to establish and preserve the throne. But the words reach beyond any mortal reign &mdash; &ldquo;years&rdquo; that &ldquo;endure to all generations,&rdquo; a king &ldquo;enthroned forever before God.&rdquo; No earthly king lives such years.</p>" +
      "<p>The language points to the everlasting King, the Son of David, &ldquo;of whose kingdom there will be no end&rdquo; (Luke 1:33). &ldquo;Steadfast love and faithfulness&rdquo; &mdash; the great covenant attributes of God &mdash; are appointed to guard the king, attributes perfectly embodied in Christ, who reigns forever before God on our behalf.</p>",
  },
  {
    id: "v-5",
    reference: "Psalm 61:8",
    title: "So Will I Ever Sing Your Praises",
    body:
      "<p>&ldquo;So will I ever sing praises to your name, as I perform my vows day after day&rdquo; (61:8).</p>" +
      "<p>The psalm closes where the redeemed life always closes &mdash; in praise. Having cried from the end of the earth, been led to the rock, and found shelter under God&rsquo;s wings, David answers with a vow of continual song: &ldquo;I will <em>ever</em> sing praises&hellip; <em>day after day</em>.&rdquo;</p>" +
      "<p>The vows mentioned in verse 5 are now to be performed faithfully, not once but daily. Praise becomes the settled rhythm of a sheltered life. The psalm that began in faintness ends in song &mdash; for the one who has found refuge in God cannot but make his days an ongoing offering of praise to the name that saved him.</p>",
  },
];

interface AppSection {
  id: string;
  title: string;
  body: string;
}

const appSections: AppSection[] = [
  {
    id: "a-faint",
    title: "Pray from Wherever You Are",
    body:
      "<p>Psalm 61 begins at &ldquo;the end of the earth,&rdquo; with a heart that is faint (61:2). It teaches us that we need not wait until we feel strong, near, or worthy before we pray. The faint heart at the farthest distance is exactly the heart God hears. When you are exhausted and far off, do not delay prayer until you recover; cry out precisely there.</p>" +
      "<p>Make David&rsquo;s opening your own: &ldquo;Hear my cry, O God, listen to my prayer&rdquo; (61:1). The throne of grace is open to the weak and weary (Hebrews 4:16). Let your weakness become the very occasion of your prayer, not an excuse to be silent.</p>",
  },
  {
    id: "a-rock",
    title: "Ask to Be Led to the Higher Rock",
    body:
      "<p>&ldquo;Lead me to the rock that is higher than I&rdquo; (61:2) is a prayer worth praying daily. It confesses that our true refuge lies higher than we can climb on our own &mdash; that we cannot save ourselves and must be led to safety above our own strength. This is the posture of humble faith.</p>" +
      "<p>When trouble rises and your footing fails, do not scramble to build your own security. Ask God to lead you to the rock higher than yourself. For the Christian, that rock is Christ, on whom alone the storm-tossed soul stands secure. &ldquo;On Christ the solid Rock I stand; all other ground is sinking sand.&rdquo;</p>",
  },
  {
    id: "a-dwell",
    title: "Long to Dwell, Not Just to Be Rescued",
    body:
      "<p>David&rsquo;s deepest desire was not merely escape from danger but permanent nearness to God: &ldquo;Let me dwell in your tent forever!&rdquo; (61:4). It is possible to want God&rsquo;s help without wanting God himself. Psalm 61 calls us higher &mdash; to long not only for rescue from trouble but for the abiding presence of the LORD.</p>" +
      "<p>Cultivate this longing. Let your prayers reach past &ldquo;deliver me&rdquo; to &ldquo;let me dwell with you.&rdquo; What David longed for, Christ secures for his people: a place prepared in the Father&rsquo;s house (John 14:2) and an eternal dwelling with God (Revelation 21:3). Set your heart on that home.</p>",
  },
  {
    id: "a-wings",
    title: "Take Refuge Under His Wings",
    body:
      "<p>&ldquo;Let me take refuge under the shelter of your wings&rdquo; (61:4). When fear presses in, picture the tenderness of this image &mdash; the parent bird gathering its young beneath its feathers, hidden from the storm. God offers this same covering care to all who will come (compare Psalm 17:8; 36:7; 57:1; 91:4).</p>" +
      "<p>Jesus longed to gather his people &ldquo;as a hen gathers her brood under her wings&rdquo; (Matthew 23:37); the only refusal is our own unwillingness. So come. When you are afraid, run beneath the shelter of his wings, and let his nearness be the refuge that stills your heart.</p>",
  },
  {
    id: "a-praise",
    title: "Answer Refuge with Daily Praise",
    body:
      "<p>The psalm ends with a vow of continual praise: &ldquo;So will I ever sing praises to your name, as I perform my vows day after day&rdquo; (61:8). The fitting response to God&rsquo;s shelter is not a single thank-you but a settled habit of praise that fills our days.</p>" +
      "<p>Let your gratitude become a rhythm. Keep the vows you make to God; turn your days into an ongoing offering of praise (Hebrews 13:15). Having been led to the rock and hidden under his wings, spend your life singing the praises of the One who brought you there.</p>",
  },
];

const reflectionQuestions = [
  "When has your heart felt &ldquo;faint&rdquo; and far off, as if praying &ldquo;from the end of the earth&rdquo; (61:2)? How does it comfort you that God hears precisely such cries?",
  "What does it mean that the rock is &ldquo;higher than I&rdquo; (61:2)? Where are you tempted to rely on a refuge no higher than your own strength?",
  "David longs not just to be rescued but to &ldquo;dwell in your tent forever&rdquo; (61:4). Is your desire for God himself as strong as your desire for his help?",
  "The image of taking refuge &ldquo;under the shelter of your wings&rdquo; (61:4) recurs across the Psalms (17:8; 36:7; 57:1; 91:4). What fear could you bring beneath his wings today?",
  "The prayer for the king (61:6-7) points beyond any mortal reign to Christ&rsquo;s eternal throne. How does the everlasting reign of Jesus steady you in an uncertain world?",
  "How might you answer God&rsquo;s shelter with the continual, &ldquo;day after day&rdquo; praise the psalm vows (61:8)?",
];

const closingPrayer =
  "<p>Hear my cry, O God; listen to my prayer. From the end of the earth I call to you when my heart is faint. Lead me to the rock that is higher than I, for you have been my refuge, a strong tower against the enemy.</p>" +
  "<p>Let me dwell in your tent forever; let me take refuge under the shelter of your wings. When I am weak and far off, gather me in, and hold me in the secret place of your presence. Give me the heritage of those who fear your name, and let me know that I belong to you.</p>" +
  "<p>We bless you for the eternal King, the Son of David, enthroned forever before you, over whose kingdom there is no end. Let his steadfast love and faithfulness watch over us. And so will we ever sing praises to your name, performing our vows day after day, through Jesus Christ our Lord. Amen.</p>";

export default function Psalm61Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: TEAL + "22", color: TEAL, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Psalms Deep Dive
          </div>
          <h1 style={{ fontSize: "2.5rem", lineHeight: 1.1, margin: "0 0 0.75rem", fontWeight: 800 }}>
            Psalm 61
          </h1>
          <p style={{ fontSize: "1.2rem", color: MUTED, margin: "0 0 1.75rem", fontWeight: 500 }}>
            A Prayer from the End of the Earth &mdash; For Refuge and Abiding in God&rsquo;s Presence
          </p>
          <div style={{ background: CARD, border: "1px solid " + BORDER, borderLeft: "4px solid " + GOLD, borderRadius: 10, padding: "1.5rem 1.75rem" }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: GOLD, marginBottom: 10 }}>
              Key Verse &mdash; Psalm 61:2
            </div>
            <p
              style={{ margin: 0, fontSize: "1.18rem", lineHeight: 1.6, fontStyle: "italic", color: TEXT }}
              dangerouslySetInnerHTML={{
                __html:
                  "&ldquo;From the end of the earth I call to you when my heart is faint. Lead me to the rock that is higher than I.&rdquo;",
              }}
            />
          </div>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2rem", borderBottom: "1px solid " + BORDER, paddingBottom: 12 }}>
          {TABS.map((t) => {
            const active = t === tab;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                style={{
                  background: active ? TEAL : "transparent",
                  color: active ? "#fff" : MUTED,
                  border: "1px solid " + (active ? TEAL : BORDER),
                  borderRadius: 8,
                  padding: "8px 16px",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {TAB_LABELS[t]}
              </button>
            );
          })}
        </nav>

        {tab === "overview" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1rem" }}>Overview</h2>
            <div
              style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#D9D9E8" }}
              dangerouslySetInnerHTML={{
                __html:
                  "<p>Psalm 61 is a short prayer of David that rises from a place of distress and distance to a longing for permanent nearness to God. Its opening cry is unforgettable: &ldquo;From the end of the earth I call to you when my heart is faint. Lead me to the rock that is higher than I&rdquo; (61:2). From the farthest reach of weakness, David asks to be led to a refuge above his own strength.</p>" +
                  "<p>The prayer moves quickly from rescue to longing. David remembers that God &ldquo;has been my refuge, a strong tower against the enemy&rdquo; (61:3), and then reaches past mere deliverance to his deepest desire: &ldquo;Let me dwell in your tent forever! Let me take refuge under the shelter of your wings!&rdquo; (61:4). The psalm includes a royal element &mdash; a prayer for the king (61:6-7) whose reign reaches &ldquo;forever&rdquo; &mdash; and closes with a vow of continual praise: &ldquo;So will I ever sing praises to your name, as I perform my vows day after day&rdquo; (61:8).</p>",
              }}
            />
            <div style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, padding: "1.5rem 1.75rem", margin: "1.5rem 0" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0 0 0.75rem", color: PURPLE }}>Structure</h3>
              <div
                style={{ fontSize: "1.02rem", lineHeight: 1.7, color: "#D9D9E8" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<p>The psalm moves from cry to refuge to praise:</p>" +
                    "<ul style='margin: 0.5rem 0 0; padding-left: 1.25rem;'>" +
                    "<li><strong>61:1-2</strong> &mdash; The cry from the end of the earth; &ldquo;lead me to the rock that is higher than I.&rdquo;</li>" +
                    "<li><strong>61:3-4</strong> &mdash; God as refuge and strong tower; the longing to dwell in his tent and under his wings.</li>" +
                    "<li><strong>61:5</strong> &mdash; God has heard the vows and granted the heritage of those who fear his name.</li>" +
                    "<li><strong>61:6-7</strong> &mdash; Prayer for the king, enthroned forever before God.</li>" +
                    "<li><strong>61:8</strong> &mdash; The closing vow of continual, daily praise.</li>" +
                    "</ul>",
                }}
              />
            </div>
            <div
              style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#D9D9E8" }}
              dangerouslySetInnerHTML={{
                __html:
                  "<p><strong>Context.</strong> Psalm 61 arises from a season of distress and distance &mdash; David far off, weary, and faint of heart. Its imagery gathers up some of the most beloved pictures in the Psalter: the rock higher than ourselves, the strong tower of refuge, the longing to dwell in God&rsquo;s tent, and above all the &ldquo;shelter of your wings&rdquo; (cf. Psalm 17:8; 36:7; 57:1; 91:4). The royal verses (61:6-7), praying that the king be &ldquo;enthroned forever before God,&rdquo; reach beyond any mortal reign to the eternal King, Christ, the Son of David whose kingdom has no end (Luke 1:33). The psalm teaches the redeemed response to refuge: a vow of praise sung &ldquo;day after day.&rdquo;</p>",
              }}
            />
          </section>
        )}

        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Key Themes</h2>
            {themeItems.map((item) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, marginBottom: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", padding: "1.1rem 1.5rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span>
                      <span style={{ display: "block", fontSize: "1.1rem", fontWeight: 700, color: TEXT }}>{item.title}</span>
                      <span style={{ display: "block", fontSize: 13, color: TEAL, marginTop: 4, fontWeight: 600 }}>{item.reference}</span>
                    </span>
                    <span style={{ color: MUTED, fontSize: 22, flexShrink: 0 }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{ padding: "0 1.5rem 1.4rem", fontSize: "1.02rem", lineHeight: 1.75, color: "#D9D9E8", borderTop: "1px solid " + BORDER }}
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
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Verse by Verse</h2>
            {verseSections.map((sec) => {
              const isOpen = open === sec.id;
              return (
                <div key={sec.id} style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, marginBottom: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => toggle(sec.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", padding: "1.1rem 1.5rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span>
                      <span style={{ display: "block", fontSize: 13, color: PURPLE, fontWeight: 700, letterSpacing: 0.5 }}>{sec.reference}</span>
                      <span style={{ display: "block", fontSize: "1.1rem", fontWeight: 700, color: TEXT, marginTop: 4 }}>{sec.title}</span>
                    </span>
                    <span style={{ color: MUTED, fontSize: 22, flexShrink: 0 }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{ padding: "0 1.5rem 1.4rem", fontSize: "1.02rem", lineHeight: 1.75, color: "#D9D9E8", borderTop: "1px solid " + BORDER }}
                      dangerouslySetInnerHTML={{ __html: sec.body }}
                    />
                  )}
                </div>
              );
            })}
          </section>
        )}

        {tab === "application" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Application</h2>
            {appSections.map((sec) => (
              <div key={sec.id} style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, padding: "1.4rem 1.6rem", marginBottom: 14 }}>
                <h3 style={{ fontSize: "1.18rem", fontWeight: 700, margin: "0 0 0.6rem", color: GREEN }}>{sec.title}</h3>
                <div
                  style={{ fontSize: "1.02rem", lineHeight: 1.75, color: "#D9D9E8" }}
                  dangerouslySetInnerHTML={{ __html: sec.body }}
                />
              </div>
            ))}

            <div style={{ background: CARD, border: "1px solid " + BORDER, borderLeft: "4px solid " + ROSE, borderRadius: 10, padding: "1.5rem 1.75rem", margin: "1.75rem 0" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "0 0 1rem", color: ROSE }}>Questions for Reflection</h3>
              <ol style={{ margin: 0, paddingLeft: "1.3rem", display: "flex", flexDirection: "column", gap: 12 }}>
                {reflectionQuestions.map((q, i) => (
                  <li
                    key={i}
                    style={{ fontSize: "1.02rem", lineHeight: 1.65, color: "#D9D9E8" }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>

            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, margin: "2rem 0 1.25rem" }}>Watch and Reflect</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.9rem 1.1rem", fontSize: "0.95rem", fontWeight: 600, color: TEXT, lineHeight: 1.4 }}>{v.title}</div>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: "1px solid " + BORDER, borderLeft: "4px solid " + TEAL, borderRadius: 10, padding: "1.75rem 1.9rem", marginTop: "2.25rem" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 1rem", color: TEAL }}>A Closing Prayer</h3>
              <div
                style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#E4E4F0", fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: closingPrayer }}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
