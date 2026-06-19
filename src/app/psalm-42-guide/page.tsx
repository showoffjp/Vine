"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

interface ThemeItem {
  id: string;
  title: string;
  refs: string;
  body: string;
}

interface VerseItem {
  id: string;
  ref: string;
  label: string;
  body: string;
}

interface AppItem {
  title: string;
  accent: string;
  body: string;
}

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const overviewParas: string[] = [
  "Psalm 42 is one of the most honest and most beloved laments in the entire Psalter. It opens with an image that has comforted and pierced the hearts of believers for three thousand years: a deer panting for flowing streams. &ldquo;As a deer pants for flowing streams, so pants my soul for you, O God&rdquo; (42:1). Here is a soul in the grip of spiritual thirst, longing for the living God with an intensity that has become a desperate ache. This is not the song of a settled, contented faith; it is the cry of a believer who feels the absence of God and yet will not let go of him.",
  "The psalm is titled &ldquo;A Maskil of the Sons of Korah,&rdquo; a contemplative or instructive song from the Levitical singers descended from Korah. A &ldquo;maskil&rdquo; is a psalm meant to teach wisdom, and this one teaches the hard, necessary wisdom of how to walk with God through seasons of darkness. The Sons of Korah were temple worshipers, and the psalm aches with the memory of corporate worship now lost to the writer, who finds himself far from the sanctuary and surrounded by those who mock his faith.",
  "Many scholars believe that Psalm 42 and Psalm 43 were originally a single psalm. They share the same recurring refrain &mdash; &ldquo;Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him&rdquo; &mdash; which appears at 42:5, 42:11, and 43:5. Psalm 43 has no title of its own and flows naturally out of the thought of Psalm 42, so the two are best read together as one extended meditation on spiritual depression and the discipline of hope.",
  "What makes this psalm so precious is its refusal to pretend. The psalmist does not bury his sorrow under forced cheerfulness, nor does he abandon his faith in despair. Instead he does something braver and wiser than either: he preaches to his own soul. Three times he turns inward and asks his downcast heart why it is so disturbed, and three times he commands it to hope in God. This is the great pattern of healthy faith in the dark &mdash; not to be ruled by our feelings, but to speak God&rsquo;s truth back to them.",
  "The structure of Psalm 42 moves in two cycles, each ending in the refrain. The first cycle (42:1&ndash;5) describes the thirst, the tears, and the painful memory of past worship, before turning to self-counsel. The second cycle (42:6&ndash;11) descends into the imagery of deep waters and breakers, voices the complaint that God has forgotten, and yet rises again to the same stubborn hope. The psalm does not resolve into easy triumph; it ends still wrestling, still hoping, still waiting &mdash; which is precisely why it speaks so truly to the experience of faith.",
  "For anyone who has known seasons of spiritual dryness, of feeling distant from God, of depression that drains the colour from worship and prayer, Psalm 42 is a gift. It legitimizes the sorrow without surrendering to it. It shows that the saints of God have walked this valley before us, that thirst itself can be a form of seeking, and that the soul which pants for God has not lost him &mdash; for only those who have tasted his presence can so deeply mourn its absence.",
];

const structurePoints: { heading: string; text: string }[] = [
  { heading: "The Thirst (42:1&ndash;2)", text: "The deer panting for flowing streams becomes the image of a soul thirsting for the living God, longing to come and appear before him." },
  { heading: "The Tears and the Memory (42:3&ndash;4)", text: "Tears have become his food day and night while enemies taunt, &lsquo;Where is your God?&rsquo; He remembers leading the throng to the house of God." },
  { heading: "The First Refrain (42:5)", text: "He turns to address his own soul: &lsquo;Why are you cast down? Hope in God; for I shall again praise him.&rsquo;" },
  { heading: "The Deep and the Steadfast Love (42:6&ndash;8)", text: "From the land of the Jordan his soul is cast down; deep calls to deep; yet by day the LORD commands his steadfast love, and at night his song is with him." },
  { heading: "The Complaint (42:9&ndash;10)", text: "He cries to God his rock, &lsquo;Why have you forgotten me?&rsquo; as his adversaries taunt him all the day with &lsquo;Where is your God?&rsquo;" },
  { heading: "The Second Refrain (42:11)", text: "Again he preaches to his soul the same word of hope, ending the psalm not in despair but in stubborn, waiting faith." },
];

const themeItems: ThemeItem[] = [
  {
    id: "thirst",
    title: "The Soul That Thirsts for the Living God",
    refs: "Psalm 42:1&ndash;2; John 4:13&ndash;14; John 7:37&ndash;38; Psalm 63:1",
    body: "&ldquo;As a deer pants for flowing streams, so pants my soul for you, O God. My soul thirsts for God, for the living God&rdquo; (42:1&ndash;2). The opening image is of a hunted or drought-stricken deer, sides heaving, searching desperately for water it must have to live. This is not a polite religious preference but a matter of survival. The psalmist&rsquo;s deepest need is not relief from his circumstances but God himself &mdash; the &ldquo;living God,&rdquo; the only fountain that can satisfy a soul made for him. <br/><br/>This thirst is itself a sign of spiritual life, not its absence. A dead soul does not pant for God; only one that has known him can so ache for him. The very longing is evidence that God has already been at work. Augustine famously prayed, &ldquo;You have made us for yourself, and our heart is restless until it rests in you&rdquo; &mdash; and Psalm 42 is the cry of that restless, God-shaped thirst. <br/><br/>Jesus took up this very image: &ldquo;Whoever drinks of the water that I will give him will never be thirsty again&rdquo; (John 4:14), and he stood and cried, &ldquo;If anyone thirsts, let him come to me and drink&rdquo; (John 7:37). The thirst of Psalm 42 finds its fountain in Christ. The psalm teaches us not to be ashamed of our thirst but to bring it to the One who alone can quench it.",
  },
  {
    id: "depression",
    title: "Spiritual Depression and the Felt Absence of God",
    refs: "Psalm 42:3, 9&ndash;10; Psalm 13:1&ndash;2; Psalm 88; Lamentations 3:1&ndash;24",
    body: "&ldquo;My tears have been my food day and night, while they say to me all the day long, &lsquo;Where is your God?&rsquo;&rdquo; (42:3). The psalmist describes a season many believers know but few speak of honestly: spiritual depression, the felt absence of God. His tears have replaced his bread; sorrow has become the thing he lives on. Worse than the sorrow are the taunts of those who use his darkness as evidence that his God has abandoned him &mdash; or never existed at all. <br/><br/>Later he cries, &ldquo;I say to God, my rock: &lsquo;Why have you forgotten me?&rsquo;&rdquo; (42:9). Notice that even in the depths he still calls God his rock. This is the paradox of faith in the dark: he feels forgotten and yet addresses the very God he feels has forgotten him. He does not stop praying because God seems distant; he prays his distress directly to God. The felt absence does not silence his faith; it shapes the content of his prayer. <br/><br/>Scripture never treats such seasons as a sign of failed faith. The psalms of lament &mdash; like Psalm 13, Psalm 88, and the book of Lamentations &mdash; give holy words to the suffering soul. Psalm 42 assures the depressed believer that he is in good company, that God can be sought precisely when he cannot be felt, and that the darkness is not the end of the story.",
  },
  {
    id: "memory",
    title: "The Painful Memory of Past Worship",
    refs: "Psalm 42:4; Psalm 84:1&ndash;2; Psalm 122:1; Hebrews 10:25",
    body: "&ldquo;These things I remember, as I pour out my soul: how I would go with the throng and lead them in procession to the house of God with glad shouts and songs of praise, a multitude keeping festival&rdquo; (42:4). The psalmist&rsquo;s grief is sharpened by memory. He recalls the days when he led the joyful crowds up to the temple, when worship was glad and his place among the people of God was secure. Now he is far away, cut off from the sanctuary and the congregation, and the contrast is almost unbearable. <br/><br/>This is a particular and tender kind of sorrow: to remember a former nearness to God and to feel its loss keenly. Memory can wound, but it can also feed hope. He pours out his soul as he remembers, and the very remembering keeps alive his longing to return. The pain of missing worship is itself a testimony to how good and necessary that worship was. <br/><br/>For believers cut off from the gathered church &mdash; by illness, distance, exile, or a season of the soul&rsquo;s winter &mdash; this verse honours the ache of absence and points to its remedy. Hebrews urges us not to neglect &ldquo;to meet together&rdquo; (10:25), for the soul was made to praise God among his people. The memory of past joy is not meant to keep us paralysed in grief but to draw us back, in hope, to the house of God again.",
  },
  {
    id: "deep",
    title: "Deep Calls to Deep: Overwhelmed Yet Held",
    refs: "Psalm 42:6&ndash;8; Jonah 2:3; Psalm 69:1&ndash;2; Psalm 130:1",
    body: "&ldquo;Deep calls to deep at the roar of your waterfalls; all your breakers and your waves have gone over me&rdquo; (42:7). From the region of the Jordan and Mount Hermon, far from Jerusalem, the psalmist looks at the rushing waters and finds in them an image of his own overwhelmed soul. Wave upon wave of sorrow breaks over him; one trouble summons the next, as deep calls to deep. He feels as though he is drowning. <br/><br/>Yet even here, faith does not let go. He calls these the breakers of God &mdash; &ldquo;your breakers and your waves&rdquo; &mdash; recognizing that even the floods are somehow within the providence of his God. And in the very next breath he says, &ldquo;By day the LORD commands his steadfast love, and at night his song is with me, a prayer to the God of my life&rdquo; (42:8). In the daylight he clings to God&rsquo;s covenant love (hesed); in the darkness he has a song and a prayer. <br/><br/>This is the secret of survival in the deep: not the absence of waves, but the presence of the One who rules them. Jonah, sinking beneath the waters, prayed almost these very words (Jonah 2:3). The believer who feels submerged may take this comfort: the breakers may go over you, but they cannot separate you from the steadfast love of God, who gives a song even in the night.",
  },
  {
    id: "refrain",
    title: "Preaching to Your Own Soul: The Discipline of Hope",
    refs: "Psalm 42:5, 11; Psalm 43:5; Psalm 103:1&ndash;2; Romans 15:13",
    body: "&ldquo;Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God&rdquo; (42:5). This is the heartbeat of the psalm, repeated at 42:5, 42:11, and 43:5. The psalmist does something profoundly wise: rather than passively listening to his downcast soul, he turns and speaks to it. He cross-examines his own despair, asking it to give a reason for itself, and then he commands it to hope in God. <br/><br/>As the preacher Martyn Lloyd-Jones observed, much of our spiritual unhappiness comes from listening to ourselves instead of talking to ourselves. The psalmist will not simply be carried along by his feelings; he takes himself in hand and preaches the truth to his own heart. He does not deny the turmoil &mdash; he names it honestly &mdash; but he refuses to let it have the final word. The final word is hope. <br/><br/>And the ground of that hope is not a change in circumstances but the character of God: &ldquo;I shall again praise him, my salvation and my God.&rdquo; He is sure that the darkness is temporary and the praise will return. This is the discipline every believer must learn for the dark seasons: to address our souls, to anchor our hope not in feelings but in God, and to keep saying &lsquo;again&rsquo; &mdash; I shall again praise him &mdash; until the again becomes now.",
  },
];

const verseItems: VerseItem[] = [
  {
    id: "v1",
    ref: "Psalm 42:1&ndash;2",
    label: "As a deer pants, so pants my soul",
    body: "&ldquo;As a deer pants for flowing streams, so pants my soul for you, O God. My soul thirsts for God, for the living God. When shall I come and appear before God?&rdquo; The psalm opens with one of Scripture&rsquo;s most enduring images. A deer, perhaps fleeing pursuers or driven by drought, pants with heaving sides for the running water it must have to survive. So the psalmist&rsquo;s whole inner being pants for God. <br/><br/>The object of his thirst is precise: not religion, not relief, but &ldquo;the living God.&rdquo; He longs for the God who is alive, real, and present &mdash; not an idea but a Person. His question, &ldquo;When shall I come and appear before God?&rdquo; reveals that he is far from the sanctuary, aching to stand once more in God&rsquo;s presence. The thirst itself is the seeking; the longing is already a kind of prayer. Only a soul that has known the living God could thirst for him like this.",
  },
  {
    id: "v3",
    ref: "Psalm 42:3&ndash;4",
    label: "My tears have been my food; I remember the throng",
    body: "&ldquo;My tears have been my food day and night, while they say to me all the day long, &lsquo;Where is your God?&rsquo; These things I remember, as I pour out my soul: how I would go with the throng and lead them in procession to the house of God with glad shouts and songs of praise, a multitude keeping festival.&rdquo; <br/><br/>Sorrow has become his sustenance; weeping fills the place that bread should fill. The taunt of the enemies cuts deepest of all &mdash; &ldquo;Where is your God?&rdquo; &mdash; using his apparent abandonment as a weapon against his faith. Against this present misery he sets a memory: the glad days when he led the festal crowds up to the temple with shouts and songs. The contrast between that joy and this desolation is almost too much to bear, yet the memory keeps his longing alive and draws his heart back toward the house of God.",
  },
  {
    id: "v5",
    ref: "Psalm 42:5",
    label: "Why are you cast down, O my soul? (the refrain)",
    body: "&ldquo;Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God.&rdquo; Here the psalm turns a corner. Instead of merely feeling his despair, the psalmist speaks to it. He interrogates his downcast soul, asking it to account for its turmoil, and then issues a command: &ldquo;Hope in God.&rdquo; <br/><br/>This is faith taking itself in hand. He does not deny the sorrow &mdash; he names the casting down and the turmoil honestly &mdash; but he refuses to be ruled by it. His hope rests on the steady character of God, not on his changing circumstances, and on the confident expectation that &ldquo;I shall again praise him.&rdquo; The word &lsquo;again&rsquo; is full of faith: this darkness is not forever; the praise will return. This refrain, repeated through Psalms 42 and 43, is the great pattern for the believer in the dark.",
  },
  {
    id: "v6",
    ref: "Psalm 42:6&ndash;8",
    label: "Deep calls to deep; the LORD commands his steadfast love",
    body: "&ldquo;My soul is cast down within me; therefore I remember you from the land of Jordan and of Hermon, from Mount Mizar. Deep calls to deep at the roar of your waterfalls; all your breakers and your waves have gone over me. By day the LORD commands his steadfast love, and at night his song is with me, a prayer to the God of my life.&rdquo; <br/><br/>Far from Jerusalem, in the northern country near the sources of the Jordan, the psalmist looks at the cascading waters and sees his own soul. Wave after wave of sorrow breaks over him &mdash; yet he calls them God&rsquo;s breakers and waves, holding even his troubles within God&rsquo;s sovereignty. And in the same breath he testifies to grace: by day the LORD commands his covenant love (hesed); by night a song and a prayer keep him company. Even in the deep, the God of his life has not left him without a song.",
  },
  {
    id: "v9",
    ref: "Psalm 42:9&ndash;10",
    label: "I say to God my rock, why have you forgotten me?",
    body: "&ldquo;I say to God, my rock: &lsquo;Why have you forgotten me? Why do I go mourning because of the oppression of the enemy?&rsquo; As with a deadly wound in my bones, my adversaries taunt me, while they say to me all the day long, &lsquo;Where is your God?&rsquo;&rdquo; <br/><br/>This is faith&rsquo;s honest complaint. The psalmist feels forgotten by God, and he says so &mdash; not behind God&rsquo;s back but to his face, addressing him still as &ldquo;my rock.&rdquo; The taunts of his enemies pierce like a wound in his very bones, their relentless &ldquo;Where is your God?&rdquo; echoing through every day. Yet notice that even his complaint is a prayer; he brings his sense of abandonment straight to the One he feels has abandoned him. To pour out such honest grief to God is not the failure of faith but one of its most courageous expressions.",
  },
  {
    id: "v11",
    ref: "Psalm 42:11",
    label: "Hope in God again (the refrain returns)",
    body: "&ldquo;Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God.&rdquo; The psalm closes its second cycle exactly where it closed the first &mdash; with the great refrain of self-counsel and hope. After descending into the deep waters and voicing his complaint, the psalmist once more turns to his own soul and preaches hope to it. <br/><br/>Nothing in his circumstances has changed; the enemies still taunt and the sanctuary is still far away. What has changed is where he fixes his eyes. He looks away from his trouble and toward his God: his salvation and his God. The psalm does not end in triumph but in stubborn, waiting hope &mdash; which is exactly why it rings so true. Faith in the dark is not the absence of struggle but the repeated, deliberate choice to hope in God again, and again, until the darkness lifts.",
  },
];

const appItems: AppItem[] = [
  {
    title: "Let Your Thirst Drive You to God, Not Away from Him",
    accent: GREEN,
    body: "When the soul feels dry and distant from God, the temptation is to give up the means of grace &mdash; to stop praying, stop reading, stop gathering with God&rsquo;s people &mdash; because they no longer feel as they once did. Psalm 42 calls us the opposite direction. The thirsty deer does not wander away from the water; it pants toward it. Let your very thirst become your seeking. Bring the dryness itself to God and say, with the psalmist, &ldquo;My soul thirsts for you, for the living God.&rdquo; The thirst is not a sign that God has left; it is the sign of a soul still alive to him.",
  },
  {
    title: "Learn to Preach to Your Own Soul",
    accent: PURPLE,
    body: "The great lesson of this psalm is to stop merely listening to ourselves and to start talking to ourselves. When your heart is cast down, do not simply be carried along by your feelings. Turn to your own soul as the psalmist did and ask it, &ldquo;Why are you cast down?&rdquo; Then preach the truth back to it: &ldquo;Hope in God.&rdquo; Remind your soul of who God is, what he has promised, and how he has helped you before. This is not denial of your sorrow &mdash; the psalmist names his honestly &mdash; but the refusal to let sorrow have the final word. Make the refrain of Psalm 42 your own daily practice in the dark.",
  },
  {
    title: "Be Honest with God in the Depths",
    accent: TEAL,
    body: "Psalm 42 gives us permission to be honest. The psalmist weeps, complains, and even asks God why he has forgotten him &mdash; all without ever ceasing to call God his rock. We do not need to hide our sorrow behind a forced smile or pretend that everything is fine. God can bear the full weight of our grief, our doubt, and our questions. Bring them to him directly, as the psalmist did. Honest lament is a form of faith, because it keeps speaking to God even when he seems silent. The prayer that pours out the soul is far better than the false peace that pretends there is no wound.",
  },
  {
    title: "Anchor Your Hope in God&rsquo;s Character, Not Your Circumstances",
    accent: GOLD,
    body: "Notice that the psalmist&rsquo;s hope does not depend on his situation improving. At the end of the psalm his enemies still taunt and he is still far from the sanctuary &mdash; yet he hopes. His confidence rests on something that cannot change: God is his salvation and his God; the LORD commands his steadfast love. When you are in a season where nothing seems to be getting better, learn to fasten your hope not to your circumstances but to the unchanging character of God. He is faithful, his love is steadfast, and his promise stands: you shall again praise him.",
  },
  {
    title: "Receive God&rsquo;s Song in the Night",
    accent: ROSE,
    body: "&ldquo;By day the LORD commands his steadfast love, and at night his song is with me&rdquo; (42:8). Even in the deepest waters, God gives his people a song in the night. The night seasons of the soul are real, but they are not songless. Look for the grace God gives in the dark: a verse that steadies you, a hymn that rises unbidden, a prayer you can pray when you can pray nothing else. In your hardest hours, ask God for the night-song he has promised, and let it carry you until the morning comes.",
  },
];

const reflectionQuestions: string[] = [
  "Where in your own life have you felt the kind of spiritual thirst Psalm 42 describes &mdash; and what did you do with it?",
  "The psalmist preaches to his own soul rather than simply listening to it. What truths about God most need to be preached to your heart in this season?",
  "How honest are you willing to be with God about your sorrow, doubt, or sense of his absence? What keeps you from bringing your full grief to him?",
  "The psalmist remembers past worship to feed his present hope. What memories of God&rsquo;s nearness can you call to mind to sustain you now?",
  "&ldquo;Why are you cast down, O my soul? Hope in God.&rdquo; What would it look like, practically, for you to fix your hope on God&rsquo;s character rather than your circumstances this week?",
  "Where might God be giving you a &lsquo;song in the night&rsquo; even now &mdash; and how can you receive it with gratitude?",
];

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 42 &mdash; As a Deer Pants for the Living God" },
  { videoId: "Q2oNOlXzBhY", title: "Spiritual Depression &mdash; Preaching to Your Own Soul" },
  { videoId: "8phkAg8PMHE", title: "Deep Calls to Deep &mdash; Hope in the Overwhelming Waters" },
  { videoId: "fNk_zzaMoSs", title: "Why Are You Cast Down, O My Soul? The Discipline of Hope" },
];

export default function Psalm42Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: `${PURPLE}22`, color: "#b9a8f0", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Psalms Deep Dive
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 42: As a Deer Pants for the Living God
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: "0 0 1.75rem" }}>
            A maskil of the Sons of Korah &mdash; the soul&rsquo;s thirst for the living God, the honest cry of spiritual depression, the painful memory of past worship, and the recurring refrain of self-counsel and hope: &ldquo;Why are you cast down, O my soul? Hope in God.&rdquo; A primary biblical text for the seasons of spiritual dryness and the discipline of remembering and hoping in the dark.
          </p>
          <div style={{ background: CARD, border: `1px solid ${PURPLE}55`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
            <div style={{ color: "#b9a8f0", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>Key Verse &mdash; Psalm 42:1&ndash;2</div>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.7, margin: 0, fontStyle: "italic", color: TEXT }} dangerouslySetInnerHTML={{ __html: "&ldquo;As a deer pants for flowing streams, so pants my soul for you, O God. My soul thirsts for God, for the living God.&rdquo;" }} />
          </div>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${tab === t ? PURPLE : BORDER}`,
                background: tab === t ? PURPLE : CARD,
                color: tab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </nav>

        {tab === "overview" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 1.5rem" }}>Overview of Psalm 42</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {overviewParas.map((p, i) => (
                <p key={i} style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "2.75rem 0 1.25rem" }}>The Shape of the Psalm</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {structurePoints.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.25rem" }}>
                  <div style={{ color: "#b9a8f0", fontWeight: 700, fontSize: "1rem", marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: s.heading }} />
                  <div style={{ color: MUTED, fontSize: "0.98rem", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: s.text }} />
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.15rem" }}>Context: One Psalm in Two Parts</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Psalm 42 and Psalm 43 were almost certainly one psalm originally. They share the same refrain (42:5; 42:11; 43:5), and Psalm 43 has no title of its own, flowing directly from the thought of Psalm 42. Read them together as one extended meditation on spiritual depression and the discipline of hope. The Sons of Korah were Levitical temple singers, which gives the psalm&rsquo;s ache for the &lsquo;house of God&rsquo; a particular poignancy &mdash; these were the very people whose calling was to lead Israel in worship." }} />
            </div>
          </section>
        )}

        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.75rem" }}>Key Themes</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Five threads run through this psalm of thirst and hope. Tap each to open.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {themeItems.map((t) => (
                <div key={t.id} style={{ background: CARD, border: `1px solid ${open === t.id ? PURPLE : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => toggle(t.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", color: TEXT, padding: "1.1rem 1.4rem", cursor: "pointer", fontFamily: "inherit", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span>
                      <span style={{ display: "block", fontSize: "1.1rem", fontWeight: 700 }} dangerouslySetInnerHTML={{ __html: t.title }} />
                      <span style={{ display: "block", color: "#b9a8f0", fontSize: 12, fontWeight: 600, marginTop: 4, letterSpacing: 0.5 }} dangerouslySetInnerHTML={{ __html: t.refs }} />
                    </span>
                    <span style={{ color: PURPLE, fontSize: 22, flexShrink: 0 }}>{open === t.id ? "-" : "+"}</span>
                  </button>
                  {open === t.id && (
                    <div style={{ padding: "0 1.4rem 1.4rem", color: MUTED, fontSize: "1.02rem", lineHeight: 1.85 }} dangerouslySetInnerHTML={{ __html: t.body }} />
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "verse" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.75rem" }}>Verse by Verse</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Walk through Psalm 42 in its two cycles, each ending in the great refrain. Tap each section to open.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {verseItems.map((v) => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${open === v.id ? TEAL : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => toggle(v.id)}
                    style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", color: TEXT, padding: "1.1rem 1.4rem", cursor: "pointer", fontFamily: "inherit", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                  >
                    <span>
                      <span style={{ display: "block", color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: v.ref }} />
                      <span style={{ display: "block", fontSize: "1.08rem", fontWeight: 700 }} dangerouslySetInnerHTML={{ __html: v.label }} />
                    </span>
                    <span style={{ color: TEAL, fontSize: 22, flexShrink: 0 }}>{open === v.id ? "-" : "+"}</span>
                  </button>
                  {open === v.id && (
                    <div style={{ padding: "0 1.4rem 1.4rem", color: MUTED, fontSize: "1.02rem", lineHeight: 1.85 }} dangerouslySetInnerHTML={{ __html: v.body }} />
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "application" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.75rem" }}>Application</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              How the thirst, the lament, and the refrain of Psalm 42 shape the life of faith in seasons of darkness.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {appItems.map((a, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${a.accent}55`, borderLeft: `4px solid ${a.accent}`, borderRadius: 10, padding: "1.4rem 1.6rem" }}>
                  <h3 style={{ color: a.accent, fontWeight: 700, margin: "0 0 0.6rem", fontSize: "1.15rem" }} dangerouslySetInnerHTML={{ __html: a.title }} />
                  <p style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "1.02rem" }} dangerouslySetInnerHTML={{ __html: a.body }} />
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "2.75rem 0 1.25rem" }}>Questions for Reflection</h3>
            <ol style={{ margin: 0, paddingLeft: "1.4rem", display: "flex", flexDirection: "column", gap: 14 }}>
              {reflectionQuestions.map((q, i) => (
                <li key={i} style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, paddingLeft: 6 }} dangerouslySetInnerHTML={{ __html: q }} />
              ))}
            </ol>

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "2.75rem 0 1.25rem" }}>Video Teaching</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }} dangerouslySetInnerHTML={{ __html: v.title }} />
                </div>
              ))}
            </div>

            <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${PURPLE}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: "#b9a8f0", fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Closing Prayer</h3>
              <p style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "1.03rem" }} dangerouslySetInnerHTML={{ __html: "Living God, my soul thirsts for you as a deer pants for flowing streams. In the seasons when you seem far away, when tears have been my food and the enemy taunts, &lsquo;Where is your God?&rsquo;, teach me to seek you all the more. When my soul is cast down and in turmoil within me, give me grace to preach hope to my own heart and to wait for you. By day command your steadfast love over me, and by night give me your song. I will hope in you, my salvation and my God, until I again praise you face to face. Amen." }} />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
