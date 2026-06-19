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
  { videoId: "rNcERbkSTXU", title: "Psalm 31 - Into Your Hand I Commit My Spirit" },
  { videoId: "OjJ7GkWCHvA", title: "My Times Are in Your Hand - Trusting God's Sovereignty" },
  { videoId: "pHBzJ2dVXgk", title: "Jesus' Last Words from the Cross - Luke 23 and Psalm 31" },
  { videoId: "3sO5FH2ybPY", title: "Be Strong and Take Courage - Hope for the Distressed" },
];

interface ThemeItem {
  id: string;
  title: string;
  reference: string;
  body: string;
}

const themeItems: ThemeItem[] = [
  {
    id: "t-commit",
    title: "Into Your Hand I Commit My Spirit",
    reference: "Psalm 31:5",
    body:
      "<p>&ldquo;Into your hand I commit my spirit; you have redeemed me, O LORD, faithful God&rdquo; (31:5). These words are among the most sacred in all Scripture, for they are the words Jesus prayed as he died: &ldquo;Father, into your hands I commit my spirit!&rdquo; (Luke 23:46). What David spoke in distress, the Son of God took upon his own lips at the very moment of his death, transforming a prayer of trust into the final word of the cross.</p>" +
      "<p>To commit the spirit into God&rsquo;s hand is the ultimate act of trust. It is to hand over the most precious and inviolable thing we possess &mdash; our own life, our own self &mdash; into the keeping of another. David does this not at the end of life but in the thick of trouble, entrusting himself to the &ldquo;faithful God&rdquo; who has already redeemed him.</p>" +
      "<p>Stephen, the first martyr, echoed these words as he died: &ldquo;Lord Jesus, receive my spirit&rdquo; (Acts 7:59). What David committed to the Father, Stephen committed to the risen Christ &mdash; a quiet testimony to the deity of Jesus and to the faith that can face death without fear, because the hand that receives the spirit is faithful.</p>",
  },
  {
    id: "t-refuge",
    title: "The LORD as Rock and Fortress",
    reference: "Psalm 31:1-3",
    body:
      "<p>The psalm opens with a cluster of strong images: &ldquo;In you, O LORD, do I take refuge&hellip; be a rock of refuge for me, a strong fortress to save me! For you are my rock and my fortress&rdquo; (31:1-3). David reaches for the language of immovable strength &mdash; rock, fortress, stronghold &mdash; to describe the God in whom he hides.</p>" +
      "<p>A rock cannot be moved; a fortress cannot be breached. When the storms of life beat against us and enemies press in, we need something solid beneath our feet and strong walls around us. David finds both not in his own resources but in the LORD himself. God is not merely the giver of refuge; he is the refuge.</p>" +
      "<p>Jesus built his teaching on this very image, promising that the one who hears and does his words is like a man who built his house on the rock, and when the floods came, &ldquo;it did not fall, because it had been founded on the rock&rdquo; (Matthew 7:25). To take refuge in the LORD is to build a life that the storms cannot wash away.</p>",
  },
  {
    id: "t-times",
    title: "My Times Are in Your Hand",
    reference: "Psalm 31:14-15",
    body:
      "<p>&ldquo;But I trust in you, O LORD; I say, &lsquo;You are my God.&rsquo; My times are in your hand&rdquo; (31:14-15). This is one of the great statements of trust in all the Bible. To say &ldquo;my times are in your hand&rdquo; is to confess that the whole span of our life &mdash; its length, its seasons, its turning points, its very ending &mdash; rests not in the grip of chance or enemies but in the sovereign hand of God.</p>" +
      "<p>The phrase comes in the same breath as the surrounding distress. David is hunted and afraid, yet precisely there he affirms that his enemies do not hold his times; God does. No hour of his life can be seized before its appointed moment, and no hour can be lost beyond God&rsquo;s keeping. The same hand into which he commits his spirit holds all his times.</p>" +
      "<p>This truth steadies the believer against the deepest fears. We do not know what a day may bring, but we know whose hand holds the day. &ldquo;Are not two sparrows sold for a penny? And not one of them will fall to the ground apart from your Father&rdquo; (Matthew 10:29). Our times, and our deaths, are held by a Father who numbers the hairs of our heads.</p>",
  },
  {
    id: "t-distress",
    title: "Honest Distress: Like One Who Is Dead",
    reference: "Psalm 31:9-13",
    body:
      "<p>Psalm 31 does not paper over suffering. In its central section David describes his anguish with painful honesty: &ldquo;Be gracious to me, O LORD, for I am in distress; my eye is wasted from grief; my soul and my body also&hellip; I have been forgotten like one who is dead; I have become like a broken vessel&rdquo; (31:9-12).</p>" +
      "<p>He speaks of grief that wastes the body, of years consumed by sighing, of being abandoned by friends and dreaded by acquaintances, of &ldquo;terror on every side&rdquo; (31:13). This is the language of real despair &mdash; the feeling of being forgotten, broken, and surrounded by whispering enemies. The psalm gives such suffering a voice and a place before God.</p>" +
      "<p>Here is the pastoral genius of the psalm: it models a faith that does not deny pain. David trusts God and yet describes his agony without flinching. We are not required to pretend before God that all is well. We may bring him the wasted eye, the broken vessel, the terror on every side &mdash; and still, in the same prayer, declare &ldquo;I trust in you.&rdquo;</p>",
  },
  {
    id: "t-goodness",
    title: "Abundant Goodness Stored Up",
    reference: "Psalm 31:19-20",
    body:
      "<p>From the depths the psalm rises to a marveling shout: &ldquo;Oh, how abundant is your goodness, which you have stored up for those who fear you and worked for those who take refuge in you, in the sight of the children of mankind!&rdquo; (31:19). God&rsquo;s goodness is not meager but abundant, not spent but stored up &mdash; a treasury laid aside for those who fear him.</p>" +
      "<p>And God shelters his people in his own presence: &ldquo;In the cover of your presence you hide them from the plots of men; you store them in your shelter from the strife of tongues&rdquo; (31:20). The same enemies whose tongues David dreaded cannot reach him in the shelter of God. The presence of God is itself the hiding place.</p>" +
      "<p>This stored-up goodness points beyond this life to the inheritance kept for the people of God, &ldquo;imperishable, undefiled, and unfading, kept in heaven for you&rdquo; (1 Peter 1:4). What God has stored up for those who fear him is greater than any present trouble, and no enemy can plunder it.</p>",
  },
  {
    id: "t-courage",
    title: "Be Strong and Take Courage",
    reference: "Psalm 31:23-24",
    body:
      "<p>The psalm closes with a turning outward, an exhortation to all the saints: &ldquo;Love the LORD, all you his saints! The LORD preserves the faithful&hellip; Be strong, and let your heart take courage, all you who wait for the LORD!&rdquo; (31:23-24).</p>" +
      "<p>Having traveled through his own distress and come out trusting, David turns to encourage others. The conclusion he draws is not despair but courage, and the ground of that courage is the faithfulness of God who &ldquo;preserves the faithful.&rdquo; The call is to wait &mdash; to keep hoping, keep trusting, keep one&rsquo;s eyes toward the LORD &mdash; and in the waiting to take heart.</p>" +
      "<p>This is the same courage the New Testament commends: &ldquo;Let us hold fast the confession of our hope without wavering, for he who promised is faithful&rdquo; (Hebrews 10:23). The waiting heart is not a passive heart; it is a strong heart, fortified by the faithfulness of the God for whom it waits.</p>",
  },
  {
    id: "t-cross",
    title: "From Distress to Trust and Back",
    reference: "Psalm 31:1-24",
    body:
      "<p>One of the most striking features of Psalm 31 is its rhythm. It does not move in a straight line from sorrow to joy. Instead it swings repeatedly between distress and trust &mdash; confidence in the opening verses, anguish in the middle, renewed trust, then more lament, then praise. The psalm models faith as it actually feels.</p>" +
      "<p>This back-and-forth is not a flaw but a teaching. Real faith in a fallen world is not a single triumphant note but a melody that returns again and again to trust through the verses of grief. David affirms &ldquo;my times are in your hand&rdquo; in the very midst of terror, not after it has passed.</p>" +
      "<p>That the dying Christ took the words of this very psalm onto his lips sanctifies its whole movement. The Lord who endured the deepest distress and yet committed his spirit to the Father has walked this path of distress-and-trust ahead of us, and he walks it with us still.</p>",
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
    reference: "Psalm 31:1-5",
    title: "In You, O LORD, Do I Take Refuge",
    body:
      "<p>&ldquo;In you, O LORD, do I take refuge; let me never be put to shame; in your righteousness deliver me! Incline your ear to me; rescue me speedily! Be a rock of refuge for me, a strong fortress to save me! For you are my rock and my fortress&hellip; Into your hand I commit my spirit; you have redeemed me, O LORD, faithful God&rdquo; (31:1-5).</p>" +
      "<p>The psalm opens with urgent appeal, piling up images of strength &mdash; refuge, rock, fortress. David asks for speedy rescue and grounds it in God&rsquo;s own righteousness and faithfulness, not his own worth.</p>" +
      "<p>The section reaches its summit in verse 5: &ldquo;Into your hand I commit my spirit.&rdquo; This is the heart of the whole psalm and the very prayer Jesus spoke from the cross (Luke 23:46). To commit one&rsquo;s spirit to God is the ultimate act of trust, made possible because God is the &ldquo;faithful God&rdquo; who has already redeemed.</p>",
  },
  {
    id: "v-2",
    reference: "Psalm 31:6-8",
    title: "I Will Rejoice in Your Steadfast Love",
    body:
      "<p>&ldquo;I hate those who pay regard to worthless idols, but I trust in the LORD. I will rejoice and be glad in your steadfast love, because you have seen my affliction; you have known the distress of my soul, and you have not delivered me into the hand of the enemy; you have set my feet in a broad place&rdquo; (31:6-8).</p>" +
      "<p>David sets his trust over against the worthless idols that others serve, and chooses gladness in God&rsquo;s steadfast love. He rejoices not because trouble is absent but because God has seen and known it &mdash; &ldquo;you have known the distress of my soul.&rdquo; To be fully known by God in our affliction is itself a comfort.</p>" +
      "<p>&ldquo;You have set my feet in a broad place&rdquo; (31:8) pictures release from a tight, besieged corner into open ground. God&rsquo;s deliverance gives room to breathe, a spaciousness after the narrow pressure of distress.</p>",
  },
  {
    id: "v-3",
    reference: "Psalm 31:9-13",
    title: "I Am Forgotten Like One Who Is Dead",
    body:
      "<p>&ldquo;Be gracious to me, O LORD, for I am in distress; my eye is wasted from grief; my soul and my body also. For my life is spent with sorrow, and my years with sighing&hellip; I have been forgotten like one who is dead; I have become like a broken vessel. For I hear the whispering of many &mdash; terror on every side!&rdquo; (31:9-13).</p>" +
      "<p>Here the psalm descends into its darkest valley. David describes the wasting of grief upon body and soul, the years consumed with sighing, the abandonment by friends, the feeling of being forgotten like the dead and discarded like a broken pot. &ldquo;Terror on every side&rdquo; names the encircling dread.</p>" +
      "<p>This unflinching honesty is the psalm&rsquo;s gift to sufferers. It does not rush past the pain to a tidy resolution. It dwells, for a while, in the full weight of anguish &mdash; and so gives our own darkest feelings a place in prayer.</p>",
  },
  {
    id: "v-4",
    reference: "Psalm 31:14-18",
    title: "My Times Are in Your Hand",
    body:
      "<p>&ldquo;But I trust in you, O LORD; I say, &lsquo;You are my God.&rsquo; My times are in your hand; rescue me from the hand of my enemies and from my persecutors! Make your face shine on your servant; save me in your steadfast love&rdquo; (31:14-16).</p>" +
      "<p>The great pivot of the psalm is the word &ldquo;but.&rdquo; In the very midst of terror, David turns: &ldquo;But I trust in you.&rdquo; He reaffirms his God and confesses the truth that holds everything together &mdash; &ldquo;my times are in your hand.&rdquo; His life is not in the grip of his persecutors but in the sovereign keeping of God.</p>" +
      "<p>He prays for the shining face of God, the ancient blessing of God&rsquo;s favor turned toward his servant (compare Numbers 6:25). To be saved &ldquo;in your steadfast love&rdquo; is to be rescued by hesed &mdash; not by merit, but by God&rsquo;s faithful, covenant love.</p>",
  },
  {
    id: "v-5",
    reference: "Psalm 31:19-20",
    title: "How Abundant Is Your Goodness",
    body:
      "<p>&ldquo;Oh, how abundant is your goodness, which you have stored up for those who fear you and worked for those who take refuge in you, in the sight of the children of mankind! In the cover of your presence you hide them from the plots of men; you store them in your shelter from the strife of tongues&rdquo; (31:19-20).</p>" +
      "<p>From the depths the psalm rises to wonder. God&rsquo;s goodness is &ldquo;abundant&rdquo; and &ldquo;stored up&rdquo; &mdash; a treasury reserved for those who fear him and take refuge in him. It is goodness already prepared, waiting, kept safe.</p>" +
      "<p>And the refuge is God&rsquo;s own presence: &ldquo;In the cover of your presence you hide them.&rdquo; The same whispering tongues that terrified David in verse 13 cannot reach the soul sheltered in God. The presence of God is the secret place where the plots of men and the strife of tongues fall silent.</p>",
  },
  {
    id: "v-6",
    reference: "Psalm 31:21-24",
    title: "Be Strong and Take Courage",
    body:
      "<p>&ldquo;Blessed be the LORD, for he has wondrously shown his steadfast love to me when I was in a besieged city. I had said in my alarm, &lsquo;I am cut off from your sight.&rsquo; But you heard the voice of my pleas for mercy when I cried to you. Love the LORD, all you his saints!&hellip; Be strong, and let your heart take courage, all you who wait for the LORD!&rdquo; (31:21-24).</p>" +
      "<p>The psalm ends in blessing and exhortation. David remembers a moment of alarm when he thought himself &ldquo;cut off&rdquo; from God&rsquo;s sight &mdash; yet God heard his cry. The feeling of abandonment was real, but it was not the truth; God was listening all along.</p>" +
      "<p>From his own deliverance David turns to encourage all the saints: love the LORD, and &ldquo;be strong, and let your heart take courage, all you who wait for the LORD.&rdquo; The psalm that began in distress closes with a summons to courageous, waiting faith &mdash; grounded in a God who preserves the faithful.</p>",
  },
];

interface AppSection {
  id: string;
  title: string;
  body: string;
}

const appSections: AppSection[] = [
  {
    id: "a-commit",
    title: "Commit Your Spirit Daily",
    body:
      "<p>&ldquo;Into your hand I commit my spirit&rdquo; (31:5) is not only a prayer for the hour of death but a practice for every day. Each morning and each night we may consciously place our life &mdash; our plans, our fears, our very self &mdash; into the faithful hand of God. To commit the spirit is to release our white-knuckled grip on control and to rest in the One who holds us.</p>" +
      "<p>Because Jesus prayed these words as he died, we may pray them in life with confidence. The hand that received his spirit, and that raised him from the dead, is the hand into which we commit ourselves. Make verse 5 a daily prayer, and let it teach your soul to trust.</p>",
  },
  {
    id: "a-times",
    title: "Rest in My Times Are in Your Hand",
    body:
      "<p>So much anxiety comes from feeling that our lives are at the mercy of forces beyond our control &mdash; illness, accident, the schemes of others, the uncertainty of the future. Psalm 31:15 answers that fear at its root: &ldquo;My times are in your hand.&rdquo; The length of our days, the timing of our trials, even the hour of our death, all rest in the sovereign keeping of God.</p>" +
      "<p>When fear of the future presses in, return to this confession. Nothing can touch you apart from your Father&rsquo;s hand and his appointed time. To rest in this truth is not fatalism but faith &mdash; trust in a God who is both sovereign over our times and faithful in his love.</p>",
  },
  {
    id: "a-honest",
    title: "Pray Honestly in Your Distress",
    body:
      "<p>Psalm 31 gives us permission to be honest with God. David does not hide his anguish behind pious phrases; he tells God that his eye is wasted with grief, that he feels forgotten like the dead, that there is terror on every side (31:9-13). Faith does not require us to pretend that we are not suffering.</p>" +
      "<p>When you are in distress, follow David&rsquo;s pattern: name the pain truthfully before God, and in the same prayer keep affirming your trust. &ldquo;But I trust in you&rdquo; (31:14) can be spoken even through tears. Honesty about suffering and confidence in God are not enemies; they belong together.</p>",
  },
  {
    id: "a-shelter",
    title: "Hide in the Cover of His Presence",
    body:
      "<p>When the strife of tongues and the plots of others wound us, Psalm 31 points us to a refuge: &ldquo;In the cover of your presence you hide them&hellip; you store them in your shelter from the strife of tongues&rdquo; (31:20). The presence of God is a hiding place that no enemy can breach.</p>" +
      "<p>Practically, this means drawing near to God in prayer and his Word when we are slandered or surrounded by hostility, rather than stewing in the wound or plotting our own defense. The abundant goodness God has stored up for those who fear him (31:19) is a treasure no whisper can steal.</p>",
  },
  {
    id: "a-courage",
    title: "Wait for the LORD with Courage",
    body:
      "<p>The psalm ends with a command worth obeying: &ldquo;Be strong, and let your heart take courage, all you who wait for the LORD&rdquo; (31:24). Waiting on God is not passive resignation but active, hopeful endurance &mdash; the strong patience that keeps trusting when deliverance is delayed.</p>" +
      "<p>If you are in a long season of waiting, take heart. The God for whom you wait &ldquo;preserves the faithful&rdquo; (31:23). Encourage others as David did, and let your own waiting be marked not by despair but by the courage that rests on the faithfulness of God.</p>",
  },
];

const reflectionQuestions = [
  "Jesus prayed &ldquo;into your hands I commit my spirit&rdquo; as he died (Luke 23:46). How does it change your view of these words to know the dying Savior made them his own?",
  "What does it mean for you, in your present circumstances, that &ldquo;my times are in your hand&rdquo; (31:15)? Which fear does this truth most directly address?",
  "David describes feeling &ldquo;forgotten like one who is dead&rdquo; (31:12). Have you known seasons of such despair? How does the psalm hold honesty and trust together?",
  "Psalm 31 swings repeatedly between distress and trust. Why might it be helpful that the psalm does not move in a straight line from sorrow to joy?",
  "What &ldquo;abundant goodness&rdquo; (31:19) has God stored up for those who fear him? How can dwelling on this steady you in trouble?",
  "How might you obey the closing command to &ldquo;be strong, and let your heart take courage&rdquo; while waiting on the LORD in a difficult season?",
];

const closingPrayer =
  "<p>O LORD, in you do I take refuge; let me never be put to shame. Be my rock of refuge, a strong fortress to save me, for you are my rock and my fortress. Into your hand I commit my spirit; you have redeemed me, O LORD, faithful God.</p>" +
  "<p>When my eye is wasted with grief and I feel forgotten like the dead, when there is terror on every side, teach me still to say: but I trust in you, O LORD; you are my God; my times are in your hand. Rescue me in your steadfast love, and make your face shine on your servant.</p>" +
  "<p>Thank you for the abundant goodness you have stored up for those who fear you, and for the cover of your presence where no plot or whispering tongue can reach. Make me strong, and let my heart take courage as I wait for you. And in my final hour, let me commit my spirit into your hands, as my Savior did before me, through Jesus Christ our Lord. Amen.</p>";

export default function Psalm31Guide() {
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
            Psalm 31
          </h1>
          <p style={{ fontSize: "1.2rem", color: MUTED, margin: "0 0 1.75rem", fontWeight: 500 }}>
            A Prayer of Trust in Distress &mdash; The Source of Jesus&rsquo;s Last Words
          </p>
          <div style={{ background: CARD, border: "1px solid " + BORDER, borderLeft: "4px solid " + GOLD, borderRadius: 10, padding: "1.5rem 1.75rem" }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: GOLD, marginBottom: 10 }}>
              Key Verse &mdash; Psalm 31:5
            </div>
            <p
              style={{ margin: 0, fontSize: "1.18rem", lineHeight: 1.6, fontStyle: "italic", color: TEXT }}
              dangerouslySetInnerHTML={{
                __html:
                  "&ldquo;Into your hand I commit my spirit; you have redeemed me, O LORD, faithful God.&rdquo;",
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
                  "<p>Psalm 31 is a prayer of David in deep distress, and one of the most beloved psalms of trust in the whole Psalter. Its fame rests above all on a single line: &ldquo;Into your hand I commit my spirit&rdquo; (31:5) &mdash; the very words Jesus prayed as he died on the cross (Luke 23:46), and which Stephen echoed as the first Christian martyr (Acts 7:59). To pray this psalm is to walk a path the Savior himself walked.</p>" +
                  "<p>The psalm moves back and forth between distress and trust, refusing to deny suffering even as it clings to God. David honestly describes being &ldquo;forgotten like one who is dead&rdquo; (31:12), surrounded by &ldquo;terror on every side&rdquo; (31:13) &mdash; and yet in the same breath confesses, &ldquo;but I trust in you&hellip; my times are in your hand&rdquo; (31:14-15). It ends with a ringing exhortation to all who suffer: &ldquo;Be strong, and let your heart take courage, all you who wait for the LORD&rdquo; (31:24).</p>",
              }}
            />
            <div style={{ background: CARD, border: "1px solid " + BORDER, borderRadius: 10, padding: "1.5rem 1.75rem", margin: "1.5rem 0" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0 0 0.75rem", color: PURPLE }}>Structure</h3>
              <div
                style={{ fontSize: "1.02rem", lineHeight: 1.7, color: "#D9D9E8" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<p>The psalm alternates between appeal, lament, and praise:</p>" +
                    "<ul style='margin: 0.5rem 0 0; padding-left: 1.25rem;'>" +
                    "<li><strong>31:1-5</strong> &mdash; Refuge in the rock and fortress; &ldquo;into your hand I commit my spirit.&rdquo;</li>" +
                    "<li><strong>31:6-8</strong> &mdash; Rejoicing in steadfast love; feet set in a broad place.</li>" +
                    "<li><strong>31:9-13</strong> &mdash; The depths of distress; forgotten like the dead, terror on every side.</li>" +
                    "<li><strong>31:14-18</strong> &mdash; The pivot of trust; &ldquo;my times are in your hand.&rdquo;</li>" +
                    "<li><strong>31:19-20</strong> &mdash; The abundant goodness stored up; the cover of God&rsquo;s presence.</li>" +
                    "<li><strong>31:21-24</strong> &mdash; Blessing and the closing call to courage for all who wait.</li>" +
                    "</ul>",
                }}
              />
            </div>
            <div
              style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#D9D9E8" }}
              dangerouslySetInnerHTML={{
                __html:
                  "<p><strong>Context.</strong> Psalm 31 arises from a season of acute distress &mdash; David besieged, slandered, abandoned by friends, and surrounded by enemies. Yet its lasting significance reaches far beyond David&rsquo;s circumstances. When Jesus quoted verse 5 from the cross (Luke 23:46), he gathered up the whole psalm and made its trust his own, so that the suffering Son of David fulfilled the prayer of David in the deepest distress of all. &ldquo;My times are in your hand&rdquo; (31:15) stands as one of Scripture&rsquo;s great statements of trust in God&rsquo;s sovereignty over life and death &mdash; a confession the believer can make in every season, because the One who holds our times is faithful.</p>",
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
