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
  { videoId: "CE8QbkUCNK4", title: "Psalm 11 - In the LORD I Take Refuge: An Introduction" },
  { videoId: "Q2oNOlXzBhY", title: "When the Foundations Are Shaken - Faith Versus Fear" },
  { videoId: "8phkAg8PMHE", title: "The LORD in His Holy Temple - God Enthroned Over All" },
  { videoId: "fNk_zzaMoSs", title: "The Upright Shall Behold His Face - Hope of the Vision of God" },
];

const overviewBlocks: { heading: string; body: string }[] = [
  {
    heading: "A Psalm of Confident Refuge",
    body:
      "Psalm 11 is a short psalm of David that reads like a debate held within a single soul. Pressed in on every side, David is given a piece of well-meaning advice: &ldquo;Flee like a bird to your mountain.&rdquo; The danger is real, the foundations seem to be giving way, and every prudent voice says run. But David answers with a settled, almost defiant confidence: &ldquo;In the LORD I take refuge.&rdquo; The whole psalm turns on that opening declaration. Refuge is not a place he flees to in the hills; refuge is a Person he rests in while the storm rages. Where panic counsels flight, faith counsels a steadier course &mdash; to look up at the throne of God and stay put.",
  },
  {
    heading: "Faith Answers the Counsel of Fear",
    body:
      "The structure of the psalm is a dialogue between two voices. The first voice (vv.&nbsp;1&ndash;3) is the counsel of fear, the well-meant advice of friends or the whisper of David&rsquo;s own anxious heart, urging escape because &ldquo;the wicked bend the bow&rdquo; and &ldquo;if the foundations are destroyed, what can the righteous do?&rdquo; The second voice (vv.&nbsp;4&ndash;7) is the counsel of faith, which answers not by denying the danger but by lifting the eyes higher than the danger: &ldquo;The LORD is in his holy temple; the LORD&rsquo;s throne is in heaven.&rdquo; Fear measures the threat and despairs; faith measures the throne and rests. The psalm does not pretend the arrows are not flying. It simply insists that there is a throne above the battlefield, and that the One seated on it sees, tests, and judges with perfect righteousness.",
  },
  {
    heading: "Context: Stability When the Ground Gives Way",
    body:
      "We are not told the exact crisis behind Psalm 11 &mdash; perhaps Saul&rsquo;s relentless pursuit of David, perhaps Absalom&rsquo;s rebellion, perhaps some other hour when the structures of safety collapsed. The ambiguity is part of the psalm&rsquo;s enduring power. &ldquo;If the foundations are destroyed&rdquo; (v.&nbsp;3) is one of the most-quoted lines in all of Scripture in seasons of social, moral, and cultural collapse, when the institutions and certainties people leaned on seem to be crumbling. Into that very anxiety the psalm speaks its great answer: the deepest foundation has not moved at all. God remains in his holy temple, his throne in heaven is unshaken, and therefore the righteous are not left without resource. Their refuge was never the foundations of earth in the first place; it was the LORD himself.",
  },
];

const themeItems: Accordion[] = [
  {
    id: "t1",
    title: "Taking Refuge in the LORD Rather Than Fleeing in Fear",
    ref: "Psalm 11:1",
    body:
      "<p>The psalm opens with a banner planted in the ground: &ldquo;In the LORD I take refuge.&rdquo; This is the great confession that governs everything else David says. To take refuge in the LORD is to make God himself the place of safety, rather than any hiding place, escape route, or strategy of our own devising. David has just been counseled to &ldquo;flee like a bird to your mountain,&rdquo; and the advice is not stupid &mdash; birds do flee predators, and mountains do offer cover. But David has already found a better refuge, and so he refuses the offered escape with a kind of holy astonishment: &ldquo;How can you say to my soul, &lsquo;Flee like a bird to your mountain&rsquo;?&rdquo;</p>" +
      "<p>The theme of God as refuge runs like a golden thread through the whole Psalter. Again and again the believer is invited not merely to ask God for help but to <em>hide in him</em>, to make him the fortress, the rock, the high tower, the shadow under which we shelter. To take refuge in the LORD is an act of faith that reorders our instincts: instead of asking first &ldquo;where can I run?&rdquo; we ask &ldquo;in whom can I rest?&rdquo; And the answer, for David, is never a place but a Person.</p>" +
      "<p>Cross references: <strong>Psalm 2:12</strong> (&ldquo;Blessed are all who take refuge in him&rdquo;); <strong>Psalm 46:1</strong> (&ldquo;God is our refuge and strength, a very present help in trouble&rdquo;); <strong>Psalm 91:1&ndash;2</strong> (dwelling in the shelter of the Most High); <strong>Proverbs 18:10</strong> (&ldquo;The name of the LORD is a strong tower&rdquo;).</p>",
  },
  {
    id: "t2",
    title: "The Counsel of Fear Versus the Counsel of Faith",
    ref: "Psalm 11:1&ndash;4",
    body:
      "<p>Psalm 11 sets two voices side by side. The first is the counsel of fear, which surveys the danger honestly and concludes that the only sane response is escape: the wicked are armed, their arrows are fitted to the string, the moral foundations are crumbling &mdash; so flee while you still can. This is not the voice of an enemy; it sounds like the voice of a friend, and often it is the voice of our own anxious hearts. Fear is not always cowardice; sometimes it is simply a clear-eyed reckoning with a real threat that has lost sight of the throne above the threat.</p>" +
      "<p>The second voice is the counsel of faith. It does not contradict the facts that fear has named; the wicked really are bending the bow. But faith adds the fact that fear has forgotten: &ldquo;The LORD is in his holy temple; the LORD&rsquo;s throne is in heaven.&rdquo; Faith refuses to let the size of the danger be the last word, because it knows a greater word &mdash; the sovereignty of God. The difference between the two voices is not that one sees the danger and the other does not. It is that faith sees the danger <em>and the throne</em>, while fear sees only the danger.</p>" +
      "<p>Cross references: <strong>Isaiah 8:12&ndash;13</strong> (&ldquo;Do not fear what they fear&hellip; the LORD of hosts, him you shall honor as holy&rdquo;); <strong>Matthew 10:28</strong> (&ldquo;Do not fear those who kill the body&rdquo;); <strong>Numbers 13:31&ndash;14:9</strong> (the fearful spies versus the faith of Caleb and Joshua); <strong>2 Kings 6:15&ndash;17</strong> (Elisha&rsquo;s servant taught to see the unseen hosts).</p>",
  },
  {
    id: "t3",
    title: "If the Foundations Are Destroyed, What Can the Righteous Do?",
    ref: "Psalm 11:3",
    body:
      "<p>&ldquo;If the foundations are destroyed, what can the righteous do?&rdquo; Few lines in the Bible are quoted more often in times of crisis. The &ldquo;foundations&rdquo; are the structures that hold a society together &mdash; law, justice, truth, public morality, the institutions that protect the innocent. When those give way, when the courts are corrupt and evil is called good and the wicked rule unchecked, the despairing question rises naturally: what is left for the righteous to do? It can sound like a counsel of hopelessness, the final argument of the voice of fear: everything has collapsed, so there is nothing left but to run.</p>" +
      "<p>The psalm&rsquo;s answer is not given by tinkering with the foundations of earth but by lifting our eyes to a higher foundation entirely. Verse 4 responds at once: &ldquo;The LORD is in his holy temple.&rdquo; The implied answer to the despairing question is therefore profound. What can the righteous do? They can do what they always could: take refuge in the LORD, who is in his holy temple, whose throne in heaven was never shaken by the shaking of the earth. The collapse of human foundations is real and grievous, but it does not reach to the deepest foundation of all, the unmoved sovereignty of God.</p>" +
      "<p>Cross references: <strong>Psalm 75:3</strong> (&ldquo;When the earth totters&hellip; it is I who keep steady its pillars&rdquo;); <strong>Hebrews 12:26&ndash;28</strong> (receiving a kingdom that cannot be shaken); <strong>Isaiah 28:16</strong> (the sure foundation God lays in Zion); <strong>1 Corinthians 3:11</strong> (no other foundation than Jesus Christ).</p>",
  },
  {
    id: "t4",
    title: "The LORD Enthroned in Heaven Who Tests the Children of Man",
    ref: "Psalm 11:4&ndash;5",
    body:
      "<p>At the very center of the psalm stands its towering vision: &ldquo;The LORD is in his holy temple; the LORD&rsquo;s throne is in heaven; his eyes see, his eyelids test the children of man.&rdquo; This is the answer to every fear. While the wicked draw their bows in the dark, God sits enthroned in the light, calmly surveying all. He has not abdicated; he has not been overthrown; he is not anxiously watching events spiral beyond his control. He reigns. The temple and the throne are images of settled, sovereign authority, and from that throne his gaze searches every human heart.</p>" +
      "<p>The picture of God&rsquo;s &ldquo;eyes&rdquo; and &ldquo;eyelids&rdquo; that &ldquo;test&rdquo; is striking. God is not a distant, indifferent monarch but a penetrating examiner who weighs the children of man, sifting the righteous from the wicked. Verse 5 makes the testing personal: &ldquo;The LORD tests the righteous.&rdquo; The trials that frighten David are themselves part of God&rsquo;s testing, the refining fire by which he proves and purifies his own. Far from being evidence that God has lost control, the believer&rsquo;s suffering is held within the gaze of a God who sees everything and governs everything from his unshaken throne.</p>" +
      "<p>Cross references: <strong>Isaiah 6:1</strong> (&ldquo;I saw the Lord sitting upon a throne, high and lifted up&rdquo;); <strong>Psalm 103:19</strong> (&ldquo;The LORD has established his throne in the heavens&rdquo;); <strong>Proverbs 17:3</strong> (&ldquo;the LORD tests hearts&rdquo;); <strong>1 Peter 1:6&ndash;7</strong> (the testing of faith more precious than gold).</p>",
  },
  {
    id: "t5",
    title: "God's Hatred of Violence and the Reward of the Upright",
    ref: "Psalm 11:5&ndash;7",
    body:
      "<p>The psalm ends with a clear declaration of God&rsquo;s moral character: &ldquo;his soul hates the wicked and the one who loves violence.&rdquo; This is not petty divine spite; it is the necessary opposite of God&rsquo;s love of righteousness. A God who loves justice must, by that same love, hate the violence that destroys the innocent. The two are inseparable. Because God is good, he cannot be neutral toward cruelty. His holy hatred of evil is the believer&rsquo;s guarantee that wickedness will not have the last word.</p>" +
      "<p>The consequences are then spelled out in vivid terms. Upon the wicked God &ldquo;will rain coals; fire and sulfur and a scorching wind shall be the portion of their cup&rdquo; &mdash; language that echoes the judgment of Sodom and the fixed reality of a reckoning to come. But the psalm does not end in judgment; it ends in beauty: &ldquo;For the LORD is righteous; he loves righteous deeds; the upright shall behold his face.&rdquo; The reward of the righteous is not merely safety or vindication but the very vision of God himself, the deepest longing of the human heart finally satisfied in seeing his face.</p>" +
      "<p>Cross references: <strong>Genesis 19:24</strong> (fire and sulfur rained on Sodom); <strong>Matthew 5:8</strong> (&ldquo;Blessed are the pure in heart, for they shall see God&rdquo;); <strong>Revelation 22:4</strong> (&ldquo;They will see his face&rdquo;); <strong>Psalm 7:11</strong> (&ldquo;God is a righteous judge&rdquo;).</p>",
  },
];

const verseItems: Accordion[] = [
  {
    id: "v1",
    title: "The Temptation to Flee &mdash; In the LORD I Take Refuge",
    ref: "Psalm 11:1&ndash;3",
    body:
      "<p>&ldquo;In the LORD I take refuge; how can you say to my soul, &lsquo;Flee like a bird to your mountain, for behold, the wicked bend the bow; they have fitted their arrow to the string to shoot in the dark at the upright in heart; if the foundations are destroyed, what can the righteous do?&rsquo;&rdquo; (11:1&ndash;3). The psalm opens not with a description of the crisis but with David&rsquo;s settled response to it. Before we even hear what the danger is, we hear where David has already gone for safety: &ldquo;In the LORD I take refuge.&rdquo;</p>" +
      "<p>Then comes the counsel of fear. Voices around him &mdash; or within him &mdash; urge escape: &ldquo;Flee like a bird to your mountain.&rdquo; The image is of a small bird scattering for cover at the sight of the hunter. And the reasons given are real and frightening. &ldquo;The wicked bend the bow; they have fitted their arrow to the string to shoot in the dark at the upright in heart.&rdquo; The danger is deliberate, deadly, and underhanded &mdash; an ambush against the righteous, loosed under cover of darkness. The wicked are not described as bumbling; they are described as armed, aimed, and ready.</p>" +
      "<p>The argument of fear reaches its crescendo in the famous question of verse 3: &ldquo;If the foundations are destroyed, what can the righteous do?&rdquo; If the very structures of justice and order have collapsed, what hope remains? The voice of fear means it as a checkmate &mdash; there is nothing left but to run. But David has already answered the question before it was asked. His refuge was never the foundations of earth. It was the LORD himself, and that refuge has not been destroyed.</p>",
  },
  {
    id: "v2",
    title: "The Answer of Faith &mdash; The LORD Is in His Holy Temple",
    ref: "Psalm 11:4&ndash;5",
    body:
      "<p>&ldquo;The LORD is in his holy temple; the LORD&rsquo;s throne is in heaven; his eyes see, his eyelids test the children of man. The LORD tests the righteous, but his soul hates the wicked and the one who loves violence&rdquo; (11:4&ndash;5). Here the psalm pivots from fear to faith. David does not refute the danger named in the first three verses; he answers it with a greater reality. Above the bent bows and the shaking foundations there is a throne, and on that throne sits the LORD.</p>" +
      "<p>Every phrase of verse 4 is a quiet rebuke to panic. &ldquo;The LORD is in his holy temple&rdquo; &mdash; he has not vacated his place; he reigns still in holiness. &ldquo;The LORD&rsquo;s throne is in heaven&rdquo; &mdash; his rule is established above all the turbulence of earth, beyond the reach of those who shoot in the dark. &ldquo;His eyes see, his eyelids test the children of man&rdquo; &mdash; nothing escapes his gaze; the very ambush the wicked think is hidden in the dark is fully exposed before his eyes. The God whom fear had forgotten is watching all, weighing all, governing all.</p>" +
      "<p>Verse 5 makes the testing personal and moral. &ldquo;The LORD tests the righteous&rdquo; &mdash; the trial that frightened David is itself in God&rsquo;s hand, a refining of his own people. &ldquo;But his soul hates the wicked and the one who loves violence&rdquo; &mdash; God is not indifferent. He examines, he distinguishes, he loves and he hates with perfect righteousness. The righteous are tested and held; the violent are hated and will be judged. The throne is not a place of detached spectating but of active, moral rule.</p>",
  },
  {
    id: "v3",
    title: "Judgment and Reward &mdash; The Upright Shall Behold His Face",
    ref: "Psalm 11:6&ndash;7",
    body:
      "<p>&ldquo;Let him rain coals on the wicked; fire and sulfur and a scorching wind shall be the portion of their cup. For the LORD is righteous; he loves righteous deeds; the upright shall behold his face&rdquo; (11:6&ndash;7). The psalm closes with two destinies set side by side, the fitting end of the two voices that have run through it. The voice of violence, which bent the bow against the upright, will receive a fitting cup: &ldquo;fire and sulfur and a scorching wind.&rdquo; The language deliberately recalls the destruction of Sodom and Gomorrah, the great biblical picture of God&rsquo;s judgment upon entrenched evil. The arrows the wicked fitted in the dark return upon their own heads.</p>" +
      "<p>But the final word is not judgment; it is the radiant hope of the righteous. &ldquo;For the LORD is righteous; he loves righteous deeds.&rdquo; The whole moral order of the psalm rests on the character of God: because he is righteous, the righteous have nothing ultimately to fear. And the reward held out to them is breathtaking in its intimacy: &ldquo;the upright shall behold his face.&rdquo; The same God whose throne is in heaven, whose holiness might seem unapproachable, opens his face to the upright. The deepest reward is not deliverance from danger but the vision of God himself.</p>" +
      "<p>This closing line anticipates the highest hope of the whole Bible. &ldquo;Blessed are the pure in heart, for they shall see God,&rdquo; Jesus said; and the last vision of Scripture is of the redeemed who &ldquo;will see his face.&rdquo; What David glimpses here in the midst of peril &mdash; that the upright shall behold the face of the LORD &mdash; is the very heaven toward which all faith is reaching. To take refuge in the LORD now is to be drawn at last into the unveiled sight of his face forever.</p>",
  },
];

const applicationBlocks: { heading: string; body: string }[] = [
  {
    heading: "Make the LORD Himself Your Refuge",
    body:
      "<p>Psalm 11 presses one question on every reader: when danger comes, where do you actually run? We all have our instinctive refuges &mdash; our savings, our skills, our relationships, our escape plans, our control. None of these is evil, and David is not against prudent action. But beneath every lesser shelter the psalm calls us to a deeper one: &ldquo;In the LORD I take refuge.&rdquo; To take refuge in the LORD is not a passive resignation but an active hiding of the soul in God, making him &mdash; not our circumstances or strategies &mdash; the ground we stand on. Before you ask &ldquo;what is my plan?&rdquo; learn first to ask, &ldquo;in whom am I resting?&rdquo; The God who is your refuge cannot be taken from you, whatever else may be.</p>",
  },
  {
    heading: "Learn to Tell Fear's Counsel From Faith's",
    body:
      "<p>Much of the practical wisdom of this psalm lies in learning to recognize the two voices it contrasts. The counsel of fear is rarely wicked on its face; it usually sounds reasonable, even kind &mdash; &ldquo;flee like a bird to your mountain.&rdquo; It names real dangers and draws a despairing conclusion: there is nothing to be done but escape. The counsel of faith does not deny those dangers; it simply refuses to let them be the final word, because it remembers the throne. When anxious thoughts press you to run, to give up, to conclude that all is lost, pause and ask: is this fear measuring only the threat, or is it also measuring the throne? Faith always adds the fact that fear forgets &mdash; the LORD is in his holy temple still.</p>",
  },
  {
    heading: "Stand Firm When the Foundations Shake",
    body:
      "<p>Few of us will live without seasons when &ldquo;the foundations&rdquo; seem to be destroyed &mdash; when institutions fail, when public morality crumbles, when the things we trusted to hold society together give way. In such hours the despairing question of verse 3 rises naturally: what can the righteous do? Psalm 11 does not answer by pretending the collapse is not real. It answers by lifting our eyes to the foundation that has never moved. God remains enthroned; his throne in heaven was not shaken by the shaking of the earth. So we are freed from both denial and despair. We can grieve honestly over what is falling, and at the same time stand firm on the one foundation that cannot fall &mdash; the unshaken sovereignty of God, made sure for us in Jesus Christ, the cornerstone.</p>",
  },
  {
    heading: "Live Now for the Vision of His Face",
    body:
      "<p>The psalm ends with a promise that reorders all our priorities: &ldquo;the upright shall behold his face.&rdquo; The deepest reward of the righteous is not merely escaping their enemies but seeing God himself. This is the beatific vision toward which Jesus pointed &mdash; &ldquo;the pure in heart&hellip; shall see God&rdquo; &mdash; and which the book of Revelation promises in glory. Such a hope changes how we live today. If the goal is to behold his face, then purity of heart matters now, and the trials that test the righteous are preparing us for that sight. Let the promise of seeing him draw you upward: refuse the idols that would blind you, pursue the holiness that loves what he loves, and live each shaken day in the steadying hope that, having taken refuge in him now, you will at last behold his face forever.</p>",
  },
];

const reflectionQuestions = [
  "When danger or uncertainty comes, where do you instinctively run first? What would it look like to make the LORD himself your refuge before reaching for any lesser shelter?",
  "Can you recognize the &ldquo;counsel of fear&rdquo; and the &ldquo;counsel of faith&rdquo; in your own heart? Which voice has been louder lately, and why?",
  "Where do the &ldquo;foundations&rdquo; seem to be shaking in your world right now &mdash; and how does the vision of God enthroned in his holy temple change your response?",
  "What does it mean to you that even your trials are God &ldquo;testing the righteous&rdquo; from his throne, rather than evidence that he has lost control?",
  "How does God&rsquo;s holy hatred of violence and love of righteous deeds give you both comfort and a call to pursue justice?",
  "The psalm ends with the promise that &ldquo;the upright shall behold his face.&rdquo; How might living for that final vision of God reshape the way you spend this shaken day?",
];

const closingPrayer =
  "<p>O LORD, in you I take refuge; teach my soul to rest in you when every voice cries, &ldquo;Flee.&rdquo; When the wicked bend the bow and the foundations seem to crumble, lift my eyes above the danger to your unshaken throne. You are in your holy temple; your throne is in heaven; your eyes see and your eyelids test the children of man, and nothing escapes your righteous gaze. Test me and refine me; turn my fear into faith; let me not run from you but hide in you. You are righteous, and you love righteous deeds, so make my heart pure to love what you love. And hold before me the great hope of this psalm &mdash; that the upright shall behold your face. Keep me until that day, when faith gives way to sight and I see you as you are. In the name of Jesus, the sure foundation and the cornerstone, Amen.</p>";

export default function Psalm11Guide() {
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
    border: `1px solid ${active ? PURPLE : BORDER}`,
    borderRadius: 12,
    marginBottom: 14,
    overflow: "hidden",
    transition: "border-color 0.2s ease",
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${PURPLE}22`, color: "#B7A6F0", borderRadius: 999, padding: "5px 14px", fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 18 }}>
            Psalms Deep Dive
          </div>
          <h1 style={{ fontSize: "2.6rem", lineHeight: 1.1, margin: "0 0 14px", fontWeight: 800, letterSpacing: -1 }}>
            Psalm 11
          </h1>
          <p style={{ fontSize: "1.2rem", color: MUTED, margin: "0 0 26px", lineHeight: 1.5, maxWidth: 640 }}>
            Confident refuge when the foundations are shaken &mdash; the counsel of faith answering the counsel of fear from beneath an unshaken throne.
          </p>
          <div
            style={{
              background: `linear-gradient(135deg, ${CARD}, #16122a)`,
              border: `1px solid ${BORDER}`,
              borderLeft: `4px solid ${PURPLE}`,
              borderRadius: 14,
              padding: "1.5rem 1.6rem",
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: GOLD, marginBottom: 10 }}>
              Key Verse &mdash; Psalm 11:4
            </div>
            <p
              style={{ margin: 0, fontSize: "1.18rem", lineHeight: 1.6, fontStyle: "italic", color: TEXT }}
              dangerouslySetInnerHTML={{
                __html:
                  "&ldquo;The LORD is in his holy temple; the LORD&rsquo;s throne is in heaven; his eyes see, his eyelids test the children of man.&rdquo;",
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
                  background: active ? PURPLE : "transparent",
                  color: active ? "#fff" : MUTED,
                  border: `1px solid ${active ? PURPLE : BORDER}`,
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
                  { label: "Fear", ref: "vv.&nbsp;1&ndash;3", desc: "flee like a bird; the wicked bend the bow" },
                  { label: "Faith", ref: "v.&nbsp;4", desc: "the LORD is in his holy temple" },
                  { label: "Testing", ref: "v.&nbsp;5", desc: "the LORD tests the righteous" },
                  { label: "Reward", ref: "vv.&nbsp;6&ndash;7", desc: "the upright shall behold his face" },
                ].map((row, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "baseline",
                      padding: "10px 0",
                      borderBottom: i < 3 ? `1px solid ${BORDER}` : "none",
                    }}
                  >
                    <span style={{ color: GOLD, fontWeight: 700, minWidth: 78 }}>{row.label}</span>
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
                        style={{ display: "block", fontSize: 12.5, color: PURPLE, marginTop: 4, fontWeight: 600 }}
                        dangerouslySetInnerHTML={{ __html: item.ref }}
                      />
                    </span>
                    <span style={{ color: PURPLE, fontSize: 22, lineHeight: 1, flexShrink: 0 }}>
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
              Work through Psalm 11 section by section. Tap each heading to expand the commentary.
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
                        style={{ display: "block", fontSize: 12.5, color: GOLD, fontWeight: 700, letterSpacing: 0.5, marginBottom: 4 }}
                        dangerouslySetInnerHTML={{ __html: item.ref }}
                      />
                      <span
                        style={{ display: "block", fontSize: "1.1rem", fontWeight: 700 }}
                        dangerouslySetInnerHTML={{ __html: item.title }}
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

            <h3 style={{ fontSize: "1.4rem", margin: "2.4rem 0 1.2rem", fontWeight: 700, color: TEXT }}>
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
                  key={v.videoId}
                  style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}
                >
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.9rem 1rem", fontSize: 14, color: "#D6D6E6", lineHeight: 1.45 }}>
                    {v.title}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: `linear-gradient(135deg, ${CARD}, #131f18)`,
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
              <span style={{ color: ROSE }}>&hearts;</span>&nbsp; Continue your study with Psalm 46, where God is our refuge though the mountains fall, and Psalm 27, where David seeks to behold the beauty of the LORD.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
