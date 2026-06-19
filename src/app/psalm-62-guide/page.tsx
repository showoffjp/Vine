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
  { videoId: "rNcERbkSTXU", title: "Psalm 62 - For God Alone My Soul Waits in Silence" },
  { videoId: "OjJ7GkWCHvA", title: "He Alone Is My Rock - The Meaning of the Hebrew Ak" },
  { videoId: "pHBzJ2dVXgk", title: "Pour Out Your Heart Before Him - God Is a Refuge for Us" },
  { videoId: "3sO5FH2ybPY", title: "Power and Steadfast Love - Why God Is Perfectly Trustworthy" },
];

interface ThemeItem {
  id: string;
  title: string;
  reference: string;
  body: string;
}

const themeItems: ThemeItem[] = [
  {
    id: "t-silence",
    title: "Waiting in Silence for God Alone",
    reference: "Psalm 62:1, 5",
    body:
      "<p>The heartbeat of the psalm is its refrain: &ldquo;For God alone my soul waits in silence; from him comes my salvation&rdquo; (62:1), repeated in turn as a command to the soul: &ldquo;For God alone, O my soul, wait in silence, for my hope is from him&rdquo; (62:5). The Hebrew word behind &ldquo;silence&rdquo; (dumiyah) describes a stillness that is not empty but full &mdash; a quiet, expectant trust.</p>" +
      "<p>This silent waiting is not passivity or resignation; it is the most active form of faith. It is the soul ceasing to scheme and strive, hushing its anxious noise, and resting wholly in God. To &ldquo;wait in silence&rdquo; is to refuse the frantic self-defense that trouble tempts us toward, and instead to be still and let God be God.</p>" +
      "<p>The same posture echoes through Scripture: &ldquo;Be still, and know that I am God&rdquo; (Psalm 46:10); &ldquo;in quietness and in trust shall be your strength&rdquo; (Isaiah 30:15). The waiting soul of Psalm 62 has learned that its salvation is not won by clamor but received in stillness, from God alone.</p>",
  },
  {
    id: "t-only",
    title: "The Hebrew Ak: Only, Alone, Surely",
    reference: "Psalm 62:1-9",
    body:
      "<p>One small Hebrew word shapes the whole psalm: <em>ak</em>, meaning &ldquo;only,&rdquo; &ldquo;alone,&rdquo; or &ldquo;surely.&rdquo; It appears six times, opening verses 1, 2, 4, 5, 6, and 9, like a drumbeat of exclusive trust. &ldquo;<em>Only</em> for God my soul waits&hellip; he <em>alone</em> is my rock&hellip; <em>surely</em> they plan to thrust him down&hellip; men of low estate are <em>but</em> a breath.&rdquo;</p>" +
      "<p>This repeated &ldquo;ak&rdquo; gives the psalm its meditative, single-minded quality. Trust in God is not one option among many but the only sure ground. &ldquo;He alone is my rock and my salvation, my fortress; I shall not be greatly shaken&rdquo; (62:2). The word strips away every rival refuge until only God remains.</p>" +
      "<p>This is the exclusivity of true faith. &ldquo;Whom have I in heaven but you? And there is nothing on earth that I desire besides you&rdquo; (Psalm 73:25). The repeated &ldquo;only&rdquo; trains the heart to look away from every false security &mdash; wealth, power, schemes, allies &mdash; and to rest in God alone.</p>",
  },
  {
    id: "t-rock",
    title: "My Rock Versus a Leaning Wall",
    reference: "Psalm 62:2-4",
    body:
      "<p>The psalm draws a sharp contrast between the stability of God and the fragility of those who attack. God is &ldquo;my rock&hellip; my fortress; I shall not be greatly shaken&rdquo; (62:2). But the enemies who batter the psalmist are themselves unstable: &ldquo;How long will all of you attack a man to batter him, like a leaning wall, a tottering fence?&rdquo; (62:3).</p>" +
      "<p>The images are striking. The believer who rests on God is a rock that cannot be greatly shaken; the attacker, for all his aggression, is a leaning wall and a tottering fence &mdash; about to collapse. They &ldquo;bless with their mouths, but inwardly they curse&rdquo; (62:4), all hypocrisy and hidden hostility, with no solid ground beneath them.</p>" +
      "<p>This contrast steadies the soul under assault. Those who threaten us may look formidable, but they are themselves crumbling. The one whose foundation is God will stand when the leaning wall finally falls. &ldquo;The grass withers, the flower fades, but the word of our God will stand forever&rdquo; (Isaiah 40:8).</p>",
  },
  {
    id: "t-pour",
    title: "Trust Him and Pour Out Your Heart",
    reference: "Psalm 62:8",
    body:
      "<p>Having found his own refuge, the psalmist turns to call the whole community in: &ldquo;Trust in him at all times, O people; pour out your heart before him; God is a refuge for us&rdquo; (62:8). Personal faith overflows into an invitation to others &mdash; this rock is not for one man only but a &ldquo;refuge for us.&rdquo;</p>" +
      "<p>&ldquo;Pour out your heart before him&rdquo; is one of Scripture&rsquo;s great models of honest prayer. It pictures emptying the whole heart &mdash; its fears, griefs, complaints, and longings &mdash; before God like water poured out, holding nothing back. The same Hebrew picture appears when Hannah &ldquo;was pouring out my soul before the LORD&rdquo; (1 Samuel 1:15).</p>" +
      "<p>To trust God &ldquo;at all times&rdquo; and pour out the heart before him is the rhythm of the believing life: not pretending before God, but bringing him everything. &ldquo;Cast all your anxieties on him, because he cares for you&rdquo; (1 Peter 5:7). The refuge is found not by hiding our hearts but by emptying them before him.</p>",
  },
  {
    id: "t-riches",
    title: "The Vanity of Trusting Riches",
    reference: "Psalm 62:9-10",
    body:
      "<p>The psalm exposes the emptiness of every rival to God. &ldquo;Those of low estate are but a breath; those of high estate are a delusion; in the balances they go up; they are together lighter than a breath&rdquo; (62:9). Weighed on the scales, all human standing &mdash; high or low &mdash; amounts to nothing.</p>" +
      "<p>So the warning comes: &ldquo;Put no trust in extortion; set no vain hopes on robbery; if riches increase, set not your heart on them&rdquo; (62:10). Wealth gained by oppression is empty, but even honest riches must not capture the heart. The danger is not having riches but trusting them &mdash; letting the heart settle its hopes upon them.</p>" +
      "<p>Jesus took up this very warning: &ldquo;Do not lay up for yourselves treasures on earth&hellip; for where your treasure is, there your heart will be also&rdquo; (Matthew 6:19-21). And he told of the rich fool who stored up goods for himself but was &ldquo;not rich toward God&rdquo; (Luke 12:15-21). The soul that waits for God alone holds wealth loosely, refusing to set its heart on what is but a breath.</p>",
  },
  {
    id: "t-power-love",
    title: "Power and Steadfast Love Belong to God",
    reference: "Psalm 62:11-12",
    body:
      "<p>The psalm closes with a great affirmation set in a striking form: &ldquo;Once God has spoken; twice have I heard this: that power belongs to God, and that to you, O Lord, belongs steadfast love&rdquo; (62:11-12). God has revealed two things that together make him perfectly trustworthy.</p>" +
      "<p>First, <em>power</em> belongs to God &mdash; he is able to do all he wills, and no leaning wall of an enemy can finally prevail. Second, <em>steadfast love</em> (hesed) belongs to him &mdash; his power is governed by covenant faithfulness and mercy. A God of power without love would be fearsome; a God of love without power could not save. But the God of Psalm 62 has both.</p>" +
      "<p>This is why the soul can wait for him in silence: the One in whom we trust is both strong enough to deliver and loving enough to want to. &ldquo;You will render to a man according to his work&rdquo; (62:12) flows from both &mdash; his power to judge and his love that is never unjust. Here is the firm ground of all trust.</p>",
  },
  {
    id: "t-glory",
    title: "My Salvation and My Glory",
    reference: "Psalm 62:7",
    body:
      "<p>At the center of his confession the psalmist gathers everything into God: &ldquo;On God rests my salvation and my glory; my mighty rock, my refuge is God&rdquo; (62:7). Not only his rescue but his very honor, his standing, his &ldquo;glory,&rdquo; rests on God rather than on himself.</p>" +
      "<p>This is a profound surrender. We are tempted to build our salvation on our own efforts and our glory on our own reputation. The psalmist locates both outside himself, in God. His worth does not rise or fall with the opinions of the leaning-wall attackers; it is anchored in the unshakable rock.</p>" +
      "<p>The believer can say the same. &ldquo;Let the one who boasts, boast in the Lord&rdquo; (1 Corinthians 1:31). When our salvation and our glory rest on God and not ourselves, the threats of others lose their power to shake us, for what they assault is no longer the ground on which we stand.</p>",
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
    reference: "Psalm 62:1-2",
    title: "For God Alone My Soul Waits in Silence",
    body:
      "<p>&ldquo;For God alone my soul waits in silence; from him comes my salvation. He alone is my rock and my salvation, my fortress; I shall not be greatly shaken&rdquo; (62:1-2).</p>" +
      "<p>The psalm opens with its refrain, sounding the note that will return throughout: the soul waits &ldquo;for God alone,&rdquo; and it waits &ldquo;in silence&rdquo; &mdash; a still, expectant trust (Hebrew dumiyah). Salvation comes not from the psalmist&rsquo;s struggle but &ldquo;from him.&rdquo;</p>" +
      "<p>The Hebrew &ldquo;ak&rdquo; (only, alone, surely) opens both verses, piling up the exclusivity of trust: &ldquo;he <em>alone</em> is my rock and my salvation, my fortress.&rdquo; The result is quiet confidence: &ldquo;I shall not be greatly shaken.&rdquo; Not unshaken in every tremor, but never overthrown &mdash; for the rock beneath holds firm.</p>",
  },
  {
    id: "v-2",
    reference: "Psalm 62:3-4",
    title: "How Long Will You Batter a Man?",
    body:
      "<p>&ldquo;How long will all of you attack a man to batter him, like a leaning wall, a tottering fence? They only plan to thrust him down from his high position. They take pleasure in falsehood. They bless with their mouths, but inwardly they curse&rdquo; (62:3-4).</p>" +
      "<p>The psalmist turns to his attackers with a weary &ldquo;how long?&rdquo; They batter him relentlessly &mdash; yet the image of the &ldquo;leaning wall&rdquo; and &ldquo;tottering fence&rdquo; describes their own instability as much as their target&rsquo;s peril. For all their aggression, they themselves are about to fall.</p>" +
      "<p>Their hostility is hypocritical: &ldquo;they bless with their mouths, but inwardly they curse.&rdquo; Outwardly polite, inwardly murderous, they take pleasure in falsehood. The contrast with the steady rock of the previous verse is stark &mdash; one foundation endures, the other is collapsing.</p>",
  },
  {
    id: "v-3",
    reference: "Psalm 62:5-7",
    title: "My Hope Is From Him",
    body:
      "<p>&ldquo;For God alone, O my soul, wait in silence, for my hope is from him. He only is my rock and my salvation, my fortress; I shall not be shaken. On God rests my salvation and my glory; my mighty rock, my refuge is God&rdquo; (62:5-7).</p>" +
      "<p>The refrain returns, now turned inward as a command to the self: &ldquo;O my soul, wait in silence.&rdquo; The psalmist preaches to his own heart, urging it back to the stillness and trust it is tempted to abandon under attack. Faith here addresses faith.</p>" +
      "<p>The confession deepens: not only salvation but &ldquo;my glory&rdquo; rests on God (62:7). His honor and standing are anchored outside himself, in the &ldquo;mighty rock.&rdquo; And note the quiet growth in confidence &mdash; verse 2 said &ldquo;not greatly shaken&rdquo;; verse 6 now says simply &ldquo;I shall not be shaken.&rdquo; Waiting in silence has strengthened the soul.</p>",
  },
  {
    id: "v-4",
    reference: "Psalm 62:8",
    title: "Pour Out Your Heart Before Him",
    body:
      "<p>&ldquo;Trust in him at all times, O people; pour out your heart before him; God is a refuge for us. Selah&rdquo; (62:8).</p>" +
      "<p>The psalmist turns outward, inviting the whole community into his own discovery: &ldquo;Trust in him at all times, O people.&rdquo; The refuge he has found is not private but shared &mdash; &ldquo;God is a refuge for <em>us</em>.&rdquo;</p>" +
      "<p>&ldquo;Pour out your heart before him&rdquo; offers a model of honest prayer: to empty the whole heart before God like water poured out, holding nothing back (compare Hannah in 1 Samuel 1:15). To trust &ldquo;at all times&rdquo; &mdash; in good seasons and bad &mdash; and to bring God everything is the rhythm of the believing life.</p>",
  },
  {
    id: "v-5",
    reference: "Psalm 62:9-10",
    title: "Set Not Your Heart on Riches",
    body:
      "<p>&ldquo;Those of low estate are but a breath; those of high estate are a delusion; in the balances they go up; they are together lighter than a breath. Put no trust in extortion; set no vain hopes on robbery; if riches increase, set not your heart on them&rdquo; (62:9-10).</p>" +
      "<p>The psalm weighs every human refuge and finds it wanting. High or low, all people on the scales are &ldquo;lighter than a breath&rdquo; &mdash; no firm ground for trust. To rest one&rsquo;s hope on human standing or strength is to lean on vapor.</p>" +
      "<p>So the warning falls on wealth: not only the plunder of extortion and robbery, but even honest riches. &ldquo;If riches increase, set not your heart on them.&rdquo; The peril is not possession but devotion &mdash; letting the heart settle its hope on what cannot save. Jesus echoes this exactly (Matthew 6:19-21; Luke 12:15-21).</p>",
  },
  {
    id: "v-6",
    reference: "Psalm 62:11-12",
    title: "Power and Steadfast Love Belong to God",
    body:
      "<p>&ldquo;Once God has spoken; twice have I heard this: that power belongs to God, and that to you, O Lord, belongs steadfast love. For you will render to a man according to his work&rdquo; (62:11-12).</p>" +
      "<p>The psalm ends with its great affirmation, framed by a numerical saying &mdash; &ldquo;once&hellip; twice&rdquo; &mdash; that fixes attention on two truths heard from God himself. First, &ldquo;power belongs to God.&rdquo; Second, &ldquo;to you, O Lord, belongs steadfast love.&rdquo;</p>" +
      "<p>These are the two attributes that together make God perfectly trustworthy: he is strong enough to save and loving enough to will it. Power without love would terrify; love without power could not rescue. The God of Psalm 62 holds both &mdash; and from both flows his just rendering to each &ldquo;according to his work.&rdquo; Here the waiting soul finds its firm and final ground.</p>",
  },
];

interface AppSection {
  id: string;
  title: string;
  body: string;
}

const appSections: AppSection[] = [
  {
    id: "a-silence",
    title: "Learn the Discipline of Silent Waiting",
    body:
      "<p>Psalm 62 calls us to &ldquo;wait in silence&rdquo; for God alone (62:1, 5). This silence (dumiyah) is not emptiness but a full, expectant stillness &mdash; the soul ceasing to scheme and clamor, and resting wholly in God. In a noisy, anxious age, this is a lost art worth recovering.</p>" +
      "<p>When trouble tempts you to frantic self-defense, practice the opposite: be still. &ldquo;Be still, and know that I am God&rdquo; (Psalm 46:10); &ldquo;in quietness and in trust shall be your strength&rdquo; (Isaiah 30:15). Set aside time to quiet your soul before the Lord, hush its noise, and wait. Salvation is received in stillness, not won by clamor.</p>",
  },
  {
    id: "a-only",
    title: "Let God Alone Be Your Rock",
    body:
      "<p>Six times the psalm sounds the Hebrew &ldquo;ak&rdquo; &mdash; only, alone, surely. It trains the heart toward exclusive trust: &ldquo;he alone is my rock and my salvation&rdquo; (62:2). We are prone to spread our trust across many securities &mdash; savings, status, allies, our own competence &mdash; and so to be shaken when any one of them fails.</p>" +
      "<p>Ask honestly where your trust actually rests. Then let the repeated &ldquo;only&rdquo; do its work, stripping away every rival until God alone remains your rock. &ldquo;Whom have I in heaven but you? And there is nothing on earth that I desire besides you&rdquo; (Psalm 73:25). The soul resting on God alone &ldquo;shall not be greatly shaken.&rdquo;</p>",
  },
  {
    id: "a-pour",
    title: "Pour Out Your Heart in Honest Prayer",
    body:
      "<p>&ldquo;Trust in him at all times, O people; pour out your heart before him&rdquo; (62:8). God invites not polished, guarded prayers but the emptying of the whole heart &mdash; its fears, griefs, complaints, and longings &mdash; like water poured out before him. Hannah did exactly this, &ldquo;pouring out my soul before the LORD&rdquo; (1 Samuel 1:15).</p>" +
      "<p>Do not hide your heart from God or pretend before him. Bring him everything, at all times, in the bright seasons and the dark. &ldquo;Cast all your anxieties on him, because he cares for you&rdquo; (1 Peter 5:7). The refuge is found not by concealing the heart but by emptying it before the God who is &ldquo;a refuge for us.&rdquo;</p>",
  },
  {
    id: "a-riches",
    title: "Hold Wealth Loosely",
    body:
      "<p>&ldquo;If riches increase, set not your heart on them&rdquo; (62:10). The danger Psalm 62 names is subtle: not the possession of wealth but the setting of the heart upon it. Riches make a treacherous rock; weighed in the balances, all human security is &ldquo;lighter than a breath&rdquo; (62:9).</p>" +
      "<p>Examine where your heart is anchored. Jesus warned, &ldquo;Where your treasure is, there your heart will be also&rdquo; (Matthew 6:19-21), and told of the rich fool who was &ldquo;not rich toward God&rdquo; (Luke 12:15-21). Hold your possessions with an open hand, use them generously, and set your heart not on what you own but on the God who owns all.</p>",
  },
  {
    id: "a-power-love",
    title: "Rest in His Power and His Love",
    body:
      "<p>The psalm gives the deepest reason we can trust God: &ldquo;power belongs to God, and&hellip; to you, O Lord, belongs steadfast love&rdquo; (62:11-12). These two attributes together make God perfectly trustworthy &mdash; he is strong enough to help and loving enough to want to.</p>" +
      "<p>When you are tempted to doubt, return to this twofold truth. Is God able? Power belongs to him. Is God willing? Steadfast love belongs to him. A God of power alone might be feared but not loved; a God of love alone might be loved but not relied upon. Our God is both &mdash; the firm and final ground on which the waiting soul rests in silence.</p>",
  },
];

const reflectionQuestions = [
  "What does it mean to &ldquo;wait in silence&rdquo; (62:1) for God? Is this stillness familiar to you, or does trouble tend to drive you toward noise and frantic activity?",
  "The Hebrew &ldquo;ak&rdquo; (only/alone) sounds six times in the psalm. Where are you tempted to spread your trust across many securities rather than resting on God alone?",
  "The attackers are pictured as a &ldquo;leaning wall, a tottering fence&rdquo; (62:3). How does seeing their instability change the way you face those who threaten or oppose you?",
  "What would it look like for you to &ldquo;pour out your heart before him&rdquo; (62:8) without holding anything back? What have you been keeping hidden from God?",
  "&ldquo;If riches increase, set not your heart on them&rdquo; (62:10). How does this warning &mdash; and Jesus&rsquo;s words in Matthew 6:19-21 &mdash; speak to where your heart is anchored?",
  "How does the closing pairing of God&rsquo;s &ldquo;power&rdquo; and &ldquo;steadfast love&rdquo; (62:11-12) strengthen your confidence that he is fully trustworthy?",
];

const closingPrayer =
  "<p>For you alone, O God, my soul waits in silence; from you comes my salvation. You only are my rock and my salvation, my fortress; I shall not be greatly shaken. Teach my anxious heart this stillness, and draw me back to it whenever I am tempted to scheme and strive.</p>" +
  "<p>When others batter me like a leaning wall and bless me with their mouths while cursing within, let me not fear them, for they are crumbling and you endure. On you rests my salvation and my glory; my mighty rock, my refuge is God. Help me to trust in you at all times and to pour out my heart before you, holding nothing back.</p>" +
  "<p>Keep me from setting my heart on riches that are lighter than a breath. Fix my hope on you alone. For you have spoken, and I have heard this twice: that power belongs to you, and to you belongs steadfast love. In your strength and your mercy I rest, through Jesus Christ our Lord. Amen.</p>";

export default function Psalm62Guide() {
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
            Psalm 62
          </h1>
          <p style={{ fontSize: "1.2rem", color: MUTED, margin: "0 0 1.75rem", fontWeight: 500 }}>
            The Soul That Waits in Silence for God Alone &mdash; A Psalm of David
          </p>
          <div style={{ background: CARD, border: "1px solid " + BORDER, borderLeft: "4px solid " + GOLD, borderRadius: 10, padding: "1.5rem 1.75rem" }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: GOLD, marginBottom: 10 }}>
              Key Verse &mdash; Psalm 62:1
            </div>
            <p
              style={{ margin: 0, fontSize: "1.18rem", lineHeight: 1.6, fontStyle: "italic", color: TEXT }}
              dangerouslySetInnerHTML={{
                __html:
                  "&ldquo;For God alone my soul waits in silence; from him comes my salvation.&rdquo;",
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
                  "<p>Psalm 62 is a psalm of David marked above all by quiet, settled trust. Its refrain sets the tone: &ldquo;For God alone my soul waits in silence; from him comes my salvation&rdquo; (62:1), repeated as a command to the self in verse 5. The Hebrew word for &ldquo;silence&rdquo; (dumiyah) describes a stillness that is full of expectant faith, not empty resignation &mdash; the most active trust looks like rest.</p>" +
                  "<p>The psalm is bound together by the small Hebrew word &ldquo;ak&rdquo; (only, alone, surely), which opens six of its verses like a drumbeat of exclusive trust: &ldquo;he alone is my rock and my salvation, my fortress; I shall not be greatly shaken&rdquo; (62:2). David contrasts the stability of God with the fragility of his attackers, who are &ldquo;like a leaning wall, a tottering fence&rdquo; (62:3), and calls the whole community to &ldquo;trust in him at all times&hellip; pour out your heart before him; God is a refuge for us&rdquo; (62:8). It warns against trusting in extortion, robbery, and riches (62:10), and ends with a great affirmation: &ldquo;power belongs to God, and&hellip; to you, O Lord, belongs steadfast love&rdquo; (62:11-12).</p>",
              }}
            />
            <div style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, padding: "1.5rem 1.75rem", margin: "1.5rem 0" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0 0 0.75rem", color: PURPLE }}>Structure</h3>
              <div
                style={{ fontSize: "1.02rem", lineHeight: 1.7, color: "#D9D9E8" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<p>The psalm circles around its refrain in three movements:</p>" +
                    "<ul style='margin: 0.5rem 0 0; padding-left: 1.25rem;'>" +
                    "<li><strong>62:1-2</strong> &mdash; The refrain: for God alone the soul waits in silence; he alone is my rock.</li>" +
                    "<li><strong>62:3-4</strong> &mdash; The attackers exposed; a leaning wall, blessing with the mouth but cursing within.</li>" +
                    "<li><strong>62:5-7</strong> &mdash; The refrain turned inward; my salvation and my glory rest on God.</li>" +
                    "<li><strong>62:8</strong> &mdash; The call to the community; trust at all times, pour out your heart, God is a refuge for us.</li>" +
                    "<li><strong>62:9-10</strong> &mdash; The vanity of human standing and riches; set not your heart on them.</li>" +
                    "<li><strong>62:11-12</strong> &mdash; The closing affirmation; power and steadfast love both belong to God.</li>" +
                    "</ul>",
                }}
              />
            </div>
            <div
              style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#D9D9E8" }}
              dangerouslySetInnerHTML={{
                __html:
                  "<p><strong>Context.</strong> Psalm 62 arises from a time when David is under attack &mdash; battered by enemies who plan to thrust him down (62:3-4). Yet the psalm&rsquo;s tone is not panic but peace. The repeated &ldquo;ak&rdquo; (only/alone/surely) gives it a meditative, single-minded quality, and the posture of &ldquo;silent waiting&rdquo; (dumiyah) models active trust rather than passive defeat. Its warning against trusting riches connects directly to Jesus&rsquo;s teaching (Matthew 6:19-21; Luke 12:15-21), and its closing pairing &mdash; God has both power AND steadfast love &mdash; names the two attributes that together make him perfectly trustworthy. &ldquo;Pour out your heart before him&rdquo; (62:8) stands as one of Scripture&rsquo;s clearest models of honest prayer.</p>",
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
