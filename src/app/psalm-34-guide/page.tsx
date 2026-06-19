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

interface Accord {
  id: string;
  title: string;
  ref: string;
  body: string[];
}

const overviewBlocks: { heading: string; body: string }[] = [
  {
    heading: "Praise Born in the Cave",
    body:
      "Psalm 34 is one of the great praise psalms of the Psalter, brimming with confidence in the goodness of God &mdash; &ldquo;Taste and see that the LORD is good.&rdquo; Yet its superscription roots it in one of the most desperate and even humiliating moments of David&rsquo;s life. It reads, &ldquo;Of David, when he changed his behavior before Abimelech, so that he drove him out, and he went away.&rdquo; This points to the episode in 1 Samuel 21, when David, fleeing for his life from King Saul, took refuge among the Philistines at Gath &mdash; only to be recognized as Israel&rsquo;s great warrior, and to escape by pretending to be insane, scratching at the city gates and letting spittle run down his beard before the Philistine king.",
  },
  {
    heading: "From Terror to Testimony",
    body:
      "It is striking that so radiant a psalm was born out of such a dangerous and undignified situation. The Philistine king here is called Abimelech in the title (a royal title, like Pharaoh) and Achish in the narrative. David had every earthly reason to despair &mdash; a hunted man, alone, surrounded by enemies, reduced to feigning madness to survive. And yet, looking back on his deliverance, David does not write a lament; he writes a song of praise. The God who delivered him from his fears in that cornered moment is worthy to be blessed at all times.",
  },
  {
    heading: "An Acrostic by Design",
    body:
      "Psalm 34 is an acrostic poem: each verse begins with a successive letter of the Hebrew alphabet, from aleph to taw. This was a deliberate teaching device, a way of arranging truth so it could be memorized and held in the heart &mdash; truth ordered from A to Z. The acrostic form signals that this is wisdom meant to be learned and passed on, and indeed the heart of the psalm is an invitation to the young: &ldquo;Come, O children, listen to me; I will teach you the fear of the LORD&rdquo; (34:11). The carefully ordered lines are a catechism in the goodness of God.",
  },
  {
    heading: "Echoes in the New Testament",
    body:
      "Psalm 34 reaches forward into the New Testament in two memorable ways. The apostle Peter quotes verse 8 &mdash; &ldquo;taste and see that the LORD is good&rdquo; &mdash; in 1 Peter 2:3, applying it to those who have tasted the kindness of the Lord in the gospel. And the evangelist John sees verse 20, &ldquo;he keeps all his bones; not one of them is broken,&rdquo; fulfilled at the cross, where the soldiers did not break Jesus&rsquo; legs (John 19:36). So this psalm, born in a Philistine city, points beyond David to Christ, the righteous sufferer whom God preserved.",
  },
];

const themeItems: Accord[] = [
  {
    id: "t-taste",
    title: "Taste and See That the LORD Is Good",
    ref: "Psalm 34:8; 1 Peter 2:3",
    body: [
      "At the center of the psalm stands its most famous invitation: &ldquo;Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in him!&rdquo; (34:8). The goodness of God is not offered here as an abstract idea to be debated but as an experience to be had. &ldquo;Taste&rdquo; is the language of personal, firsthand knowledge &mdash; the difference between reading a description of honey and putting it on your tongue.",
      "David has tasted, and he invites us to taste too. He knows the goodness of God not from theory but from a Philistine city where he was delivered out of all his fears. Having found the LORD good in the worst of circumstances, he calls everyone within reach to come and prove it for themselves.",
      "Peter takes up this very verse in 1 Peter 2:3, applying it to believers who &ldquo;have tasted that the Lord is good&rdquo; in the gospel of Christ. The kindness we taste in the cross and resurrection is the same goodness David tasted in his deliverance. To taste and see is, finally, to come to Jesus and find him good.",
    ],
  },
  {
    id: "t-sought",
    title: "I Sought the LORD, and He Delivered Me from All My Fears",
    ref: "Psalm 34:4; Philippians 4:6&ndash;7",
    body: [
      "&ldquo;I sought the LORD, and he answered me and delivered me from all my fears&rdquo; (34:4). This is David&rsquo;s personal testimony, the experience out of which the whole psalm flows. In the terror of Gath, cornered and afraid, David sought the LORD &mdash; and the LORD did not merely calm his circumstances but delivered him from his fears themselves.",
      "Notice the scope: &ldquo;all my fears.&rdquo; David does not say some of his fears were eased. He says he was delivered from all of them. The God who answers the one who seeks him is able to address not only the dangers we face but the dread that grips us within.",
      "A few verses later David adds, &ldquo;This poor man cried, and the LORD heard him and saved him out of all his troubles&rdquo; (34:6). The pattern is consistent: the one who seeks, who cries out, who looks to the LORD, is heard and answered. This is the same confidence Paul urges in Philippians 4 &mdash; in everything, by prayer, let your requests be made known to God, and his peace will guard your heart.",
    ],
  },
  {
    id: "t-angel",
    title: "The Angel of the LORD Encamps Around Those Who Fear Him",
    ref: "Psalm 34:7; 2 Kings 6:16&ndash;17",
    body: [
      "&ldquo;The angel of the LORD encamps around those who fear him, and delivers them&rdquo; (34:7). Having spoken of his own deliverance, David lifts his eyes to the unseen protection that surrounds the people of God. The image is military &mdash; the angel of the LORD makes camp, sets up a defensive ring, around those who fear him.",
      "This is the truth Elisha&rsquo;s servant glimpsed when his eyes were opened to see the mountain full of horses and chariots of fire surrounding the prophet (2 Kings 6). The fearful soul sees only the encircling enemy; faith sees the encircling host of heaven. David, who had been ringed about by Philistines, knew that a greater encampment surrounded him still.",
      "The protection belongs to &ldquo;those who fear him&rdquo; &mdash; a phrase that runs all through this psalm. To fear the LORD is not to cower before him but to reverence and trust him above all rival fears. And precisely those who fear God rightly are freed from being ruled by the fears of this world, for the angel of the LORD has pitched his tent around them.",
    ],
  },
  {
    id: "t-near",
    title: "The LORD Is Near to the Brokenhearted",
    ref: "Psalm 34:18; Psalm 147:3",
    body: [
      "&ldquo;The LORD is near to the brokenhearted and saves the crushed in spirit&rdquo; (34:18). This is one of the most quoted and most cherished verses in all of Scripture, a balm carried into countless hospital rooms, funerals, and dark nights of the soul. It tells us that brokenness, far from pushing God away, is the very thing that draws him near.",
      "The world tends to gravitate toward the strong, the whole, the successful. God moves toward the broken. The &ldquo;crushed in spirit&rdquo; &mdash; those whose hearts lie shattered by grief, failure, or despair &mdash; are not abandoned by him but are the special objects of his nearness and his saving help.",
      "This is the consistent witness of Scripture: &ldquo;He heals the brokenhearted and binds up their wounds&rdquo; (Psalm 147:3). And it is gathered up in Jesus, who came to bind up the brokenhearted and was himself a man of sorrows. Whatever has crushed you, this verse promises that God is not distant from your pain but nearer to you in it than you can feel.",
    ],
  },
  {
    id: "t-afflictions",
    title: "Many Are the Afflictions of the Righteous",
    ref: "Psalm 34:19; 2 Corinthians 4:8&ndash;9",
    body: [
      "Psalm 34 is gloriously honest. It does not promise the righteous a trouble-free life. &ldquo;Many are the afflictions of the righteous, but the LORD delivers him out of them all&rdquo; (34:19). The first half of the verse is as important as the second. The righteous are not exempt from affliction; indeed their afflictions are many.",
      "This realism is one of the psalm&rsquo;s great gifts. It does not peddle a false gospel in which faith guarantees ease. David, the anointed king, spent years as a hunted fugitive. The path of the righteous runs through real suffering, and Scripture never pretends otherwise.",
      "Yet the second half of the verse holds the hope: &ldquo;but the LORD delivers him out of them all.&rdquo; Not from all, but out of all &mdash; through and finally beyond every affliction. Paul echoes this exactly: &ldquo;afflicted in every way, but not crushed; perplexed, but not driven to despair&rdquo; (2 Corinthians 4:8&ndash;9). The deliverance is sure, even when it comes through the fire rather than around it.",
    ],
  },
  {
    id: "t-bones",
    title: "He Keeps All His Bones &mdash; Not One Is Broken",
    ref: "Psalm 34:20; John 19:36",
    body: [
      "&ldquo;He keeps all his bones; not one of them is broken&rdquo; (34:20). On the surface this is a vivid promise of God&rsquo;s detailed care for his servant &mdash; protection so complete that even his bones are kept. But the New Testament sees something deeper here.",
      "When Jesus hung on the cross, the soldiers came to break the legs of the crucified to hasten their deaths. But finding Jesus already dead, they did not break his legs. John records this and declares, &ldquo;These things took place that the Scripture might be fulfilled: Not one of his bones will be broken&rdquo; (John 19:36).",
      "So this line about the righteous sufferer reaches its ultimate fulfillment in the supremely righteous Sufferer, Jesus Christ. The same imagery also recalls the Passover lamb, of which no bone was to be broken (Exodus 12:46). David&rsquo;s song of God&rsquo;s protecting care becomes, in the providence of God, a prophecy of the crucified Christ &mdash; the truly righteous one whom God preserved through death itself.",
    ],
  },
  {
    id: "t-fear",
    title: "Come, Children &mdash; I Will Teach You the Fear of the LORD",
    ref: "Psalm 34:11&ndash;14; Proverbs 1:7",
    body: [
      "At its midpoint the psalm turns to instruction: &ldquo;Come, O children, listen to me; I will teach you the fear of the LORD&rdquo; (34:11). The acrostic form was always pointing here &mdash; this is wisdom literature, a teacher passing on the most important lesson of all to the next generation.",
      "And what does the fear of the LORD look like in practice? David is concrete: &ldquo;Keep your tongue from evil and your lips from speaking deceit. Turn away from evil and do good; seek peace and pursue it&rdquo; (34:13&ndash;14). The fear of the LORD is not a feeling only; it shapes the tongue, turns the will from evil, bends the life toward good and toward peace.",
      "This is the beginning of wisdom (Proverbs 1:7), and it is the thread that ties the whole psalm together. Those who fear the LORD are the ones the angel encamps around, the ones who lack no good thing, the ones whose cry he hears. To learn the fear of the LORD is to learn the whole of the good life.",
    ],
  },
];

const verseItems: Accord[] = [
  {
    id: "v-1-3",
    title: "I Will Bless the LORD at All Times",
    ref: "Psalm 34:1&ndash;3",
    body: [
      "&ldquo;I will bless the LORD at all times; his praise shall continually be in my mouth. My soul makes its boast in the LORD; let the humble hear and be glad&rdquo; (34:1&ndash;2). The psalm opens with a settled resolve. David does not say he will bless the LORD when things go well, but &ldquo;at all times&rdquo; &mdash; including, remarkably, the kind of time he had just survived in Gath.",
      "His boast is not in himself, his cunning, or his escape, but in the LORD. And he notices who will be gladdened by such boasting: &ldquo;let the humble hear and be glad.&rdquo; The proud are not cheered to hear that God gets the credit; the humble are. David&rsquo;s praise is good news to the lowly.",
      "Then he widens the circle: &ldquo;Oh, magnify the LORD with me, and let us exalt his name together!&rdquo; (34:3). Praise is not meant to be solitary. Having tasted God&rsquo;s goodness himself, David cannot help but gather others into a chorus. Worship overflows into invitation.",
    ],
  },
  {
    id: "v-4-7",
    title: "I Sought the LORD and He Answered Me",
    ref: "Psalm 34:4&ndash;7",
    body: [
      "&ldquo;I sought the LORD, and he answered me and delivered me from all my fears&rdquo; (34:4). Here is the testimony at the root of the psalm. In his extremity David sought the LORD and was answered &mdash; delivered not only from danger but from the fears that danger breeds.",
      "&ldquo;Those who look to him are radiant, and their faces shall never be ashamed&rdquo; (34:5). There is a transformation in those who look to God. The downcast, fearful face becomes radiant; the shame of the cornered fugitive gives way to a face lit with confidence. To look to God is to be changed by the looking.",
      "&ldquo;This poor man cried, and the LORD heard him and saved him out of all his troubles&rdquo; (34:6). David calls himself simply &ldquo;this poor man&rdquo; &mdash; not the mighty warrior, but a needy man who cried out. And the LORD heard.",
      "&ldquo;The angel of the LORD encamps around those who fear him, and delivers them&rdquo; (34:7). David draws the general truth from his particular rescue: an unseen guard surrounds all who fear God. He was never as alone in Gath as he seemed.",
    ],
  },
  {
    id: "v-8-10",
    title: "Taste and See &mdash; Those Who Seek Lack No Good Thing",
    ref: "Psalm 34:8&ndash;10",
    body: [
      "&ldquo;Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in him!&rdquo; (34:8). The invitation rings out at the heart of the psalm. God&rsquo;s goodness is to be experienced, not merely discussed; and the one who takes refuge in him is blessed indeed. Peter will quote this very line in 1 Peter 2:3.",
      "&ldquo;Oh, fear the LORD, you his saints, for those who fear him have no lack!&rdquo; (34:9). To fear the LORD is to find that he supplies every true need. The reverent and trusting soul is not impoverished by its devotion but enriched.",
      "&ldquo;The young lions suffer want and hunger; but those who seek the LORD lack no good thing&rdquo; (34:10). David draws a pointed contrast. Even the young lions, strongest of hunters, can go hungry; but the one who seeks the LORD lacks nothing that is truly good. Strength may fail and run short, but the God-seeker is supplied from a source that does not run dry.",
    ],
  },
  {
    id: "v-11-14",
    title: "Come, Children &mdash; The Teaching Section",
    ref: "Psalm 34:11&ndash;14",
    body: [
      "&ldquo;Come, O children, listen to me; I will teach you the fear of the LORD&rdquo; (34:11). The psalm shifts from testimony to teaching. David takes the posture of a wise elder gathering the young to pass on the one lesson that matters most.",
      "&ldquo;What man is there who desires life and loves many days, that he may see good?&rdquo; (34:12). He frames it as a question that catches every heart, for who does not desire life and good days? The fear of the LORD, he is about to show, is the path to the very life everyone longs for.",
      "&ldquo;Keep your tongue from evil and your lips from speaking deceit&rdquo; (34:13). The first mark of the fear of the LORD is a guarded tongue &mdash; no evil speech, no deceit. The reverent heart shows itself first in honest, kind, controlled words.",
      "&ldquo;Turn away from evil and do good; seek peace and pursue it&rdquo; (34:14). Then the will: a decisive turning from evil, an active doing of good, and an eager pursuit of peace. The fear of the LORD is not passive piety but a whole way of life, tongue and will and feet all bent toward God.",
    ],
  },
  {
    id: "v-15-18",
    title: "The LORD Is Near to the Brokenhearted",
    ref: "Psalm 34:15&ndash;18",
    body: [
      "&ldquo;The eyes of the LORD are toward the righteous and his ears toward their cry&rdquo; (34:15). God is attentive to his people &mdash; his eyes upon them, his ears open to their cry. The righteous are never out of his sight or beyond his hearing.",
      "&ldquo;The face of the LORD is against those who do evil, to cut off the memory of them from the earth&rdquo; (34:16). The same God who watches over the righteous sets his face against persistent evildoers. His attentiveness is a comfort to the one and a warning to the other.",
      "&ldquo;When the righteous cry for help, the LORD hears and delivers them out of all their troubles&rdquo; (34:17). The promise of verses 4 and 6 is now stated as a settled rule: the cry of the righteous is heard and answered with deliverance.",
      "&ldquo;The LORD is near to the brokenhearted and saves the crushed in spirit&rdquo; (34:18). Here is the tender summit of the psalm. Brokenness does not banish God; it draws him close. To the crushed in spirit he comes near, and near to save. No verse has comforted more sufferers across the centuries.",
    ],
  },
  {
    id: "v-19-22",
    title: "Many Afflictions, but the LORD Delivers and Redeems",
    ref: "Psalm 34:19&ndash;22",
    body: [
      "&ldquo;Many are the afflictions of the righteous, but the LORD delivers him out of them all&rdquo; (34:19). The psalm is honest to the end. The righteous suffer many afflictions; faith is no shield against trouble. Yet through every one of them the LORD delivers.",
      "&ldquo;He keeps all his bones; not one of them is broken&rdquo; (34:20). God&rsquo;s care is detailed and complete &mdash; so complete that John sees it fulfilled at the cross, where Jesus&rsquo; bones were left unbroken (John 19:36). The righteous sufferer is preserved, and the supremely righteous Sufferer above all.",
      "&ldquo;Affliction will slay the wicked, and those who hate the righteous will be condemned&rdquo; (34:21). The contrast that has run through the psalm reaches its end. The very afflictions the righteous are delivered through will overwhelm the wicked who have no refuge in God.",
      "&ldquo;The LORD redeems the life of his servants; none of those who take refuge in him will be condemned&rdquo; (34:22). The psalm closes on redemption and safety. The Hebrew word for redeem speaks of a price paid to set free, and it points beyond David to the great redemption purchased by Christ &mdash; in whom no one who takes refuge will ever be condemned.",
    ],
  },
];

const appBlocks: { heading: string; body: string }[] = [
  {
    heading: "Bless the LORD at All Times",
    body:
      "David resolved to bless the LORD &ldquo;at all times&rdquo; &mdash; and he wrote it remembering a moment when he had been reduced to feigning madness to escape death (v.1). Praise that depends on good circumstances is fragile; praise rooted in the unchanging goodness of God endures every season. Make it a settled resolve, not a passing mood. When the day is dark and your situation feels like Gath, deliberately choose to magnify the LORD anyway. The God who delivered David from all his fears is just as good when you cannot feel it, and praise spoken in the hard place is often the truest worship of all.",
  },
  {
    heading: "Bring Your Fears to God and Taste His Goodness",
    body:
      "&ldquo;I sought the LORD, and he answered me and delivered me from all my fears&rdquo; (v.4). Notice that God delivered David not merely from his dangers but from his fears &mdash; the inner dread that so often outlasts the outward threat. Whatever you are afraid of today, seek the LORD with it specifically. And do not stop at seeking; taste (v.8). Move from knowing about God&rsquo;s goodness to experiencing it &mdash; in prayer, in his Word, in the fellowship of his people, at the table of his grace. Faith grows not by debating God&rsquo;s goodness but by feeding on it.",
  },
  {
    heading: "Draw Near When You Are Broken",
    body:
      "&ldquo;The LORD is near to the brokenhearted and saves the crushed in spirit&rdquo; (v.18). When we are crushed, our instinct is often to withdraw &mdash; to assume God is distant, or that we must put ourselves back together before we approach him. This verse says the opposite. Brokenness is the very condition to which God draws near. If your heart is shattered by grief, guilt, or despair, do not wait until you feel stronger to come to him. Come now, broken as you are, and you will find him nearer than your pain. And carry this verse to others who are crushed; it is a lifeline meant to be shared.",
  },
  {
    heading: "Expect Affliction, but Trust the Deliverer",
    body:
      "&ldquo;Many are the afflictions of the righteous, but the LORD delivers him out of them all&rdquo; (v.19). This psalm refuses to sell a false promise of an easy life. The righteous will face many afflictions &mdash; do not be surprised or disillusioned when they come. But fix your hope on the second half of the verse: the LORD delivers, out of them all. Sometimes the deliverance comes in this life; ultimately it comes in the redemption secured by Christ, in whom none who take refuge will be condemned (v.22). Let realism about suffering and confidence in deliverance live together in your heart.",
  },
];

const reflectionQuestions: string[] = [
  "David wrote this praise psalm out of one of the most desperate moments of his life (1 Samuel 21). Can you look back on a frightening or humiliating season and find reasons to bless God for how he carried you through it?",
  "Verse 4 says God delivered David from &ldquo;all his fears.&rdquo; What specific fears are you carrying right now, and what would it look like to seek the LORD with them this week?",
  "What does it mean for you, practically, to &ldquo;taste and see that the LORD is good&rdquo; (v.8) rather than merely believe it in theory?",
  "Verse 18 promises that God is near to the brokenhearted. Is there an area of brokenness where you have assumed God is distant, and how does this verse reshape that?",
  "The teaching section (vv.11&ndash;14) describes the fear of the LORD in terms of a guarded tongue and a life that turns from evil and pursues peace. Which of these is God currently calling you to grow in?",
  "John applies &ldquo;not one of his bones broken&rdquo; (v.20) to Christ on the cross (John 19:36). How does seeing Jesus as the ultimate righteous Sufferer of this psalm deepen your reading of it?",
];

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 34 &mdash; Taste and See That the LORD Is Good" },
  { videoId: "OjJ7GkWCHvA", title: "The Story Behind Psalm 34 &mdash; David at Gath" },
  { videoId: "pHBzJ2dVXgk", title: "Near to the Brokenhearted &mdash; A Study of Psalm 34" },
  { videoId: "3sO5FH2ybPY", title: "The Fear of the LORD &mdash; Wisdom from Psalm 34" },
];

export default function Psalm34Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const renderAccordion = (items: Accord[], accent: string) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div key={item.id} style={{ background: CARD, border: `1px solid ${isOpen ? accent : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.15s" }}>
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", cursor: "pointer", padding: "1.1rem 1.4rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, fontFamily: "inherit" }}
            >
              <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ color: TEXT, fontSize: "1.12rem", fontWeight: 700 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <span style={{ color: accent, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }} dangerouslySetInnerHTML={{ __html: item.ref }} />
              </span>
              <span aria-hidden style={{ color: accent, fontSize: 22, fontWeight: 700, lineHeight: 1, flexShrink: 0, transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                +
              </span>
            </button>
            {isOpen && (
              <div style={{ padding: "0 1.4rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {item.body.map((para, i) => (
                  <p key={i} style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.04rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${TEAL}22`, color: TEAL, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament &middot; Acrostic Psalm of Praise
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 34: Taste and See That the LORD Is Good
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: "0 0 1.75rem" }}>
            An acrostic song of praise born in a Philistine city &mdash; I sought the LORD and he delivered me from all my fears, the angel of the LORD encamps around those who fear him, and the LORD is near to the brokenhearted.
          </p>
          <div style={{ background: CARD, border: `1px solid ${TEAL}55`, borderLeft: `4px solid ${TEAL}`, borderRadius: 10, padding: "1.4rem 1.6rem" }}>
            <div style={{ color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Key Verse &middot; Psalm 34:18</div>
            <p style={{ color: TEXT, fontSize: "1.18rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;The LORD is near to the brokenhearted and saves the crushed in spirit.&rdquo;" }} />
          </div>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => { setTab(t); setOpen(null); }}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${tab === t ? TEAL : BORDER}`,
                background: tab === t ? TEAL : CARD,
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
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 1.5rem" }}>Overview</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              {overviewBlocks.map((b, i) => (
                <div key={i}>
                  <h3 style={{ color: TEAL, fontSize: "1.25rem", fontWeight: 700, margin: "0 0 0.6rem" }} dangerouslySetInnerHTML={{ __html: b.heading }} />
                  <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: b.body }} />
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Key Themes</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.75rem" }} dangerouslySetInnerHTML={{ __html: "Seven threads run through this psalm &mdash; from tasting the goodness of God to the nearness of the LORD to the brokenhearted. Tap each theme to open it." }} />
            {renderAccordion(themeItems, TEAL)}
          </section>
        )}

        {tab === "verse" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Verse by Verse</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.75rem" }} dangerouslySetInnerHTML={{ __html: "Work through Psalm 34 in six movements, from the resolve to bless the LORD at all times (vv.1&ndash;3) to the promise of redemption for all who take refuge in him (vv.19&ndash;22)." }} />
            {renderAccordion(verseItems, PURPLE)}
          </section>
        )}

        {tab === "application" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 1.5rem" }}>Application</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginBottom: "3rem" }}>
              {appBlocks.map((b, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${GOLD}`, borderRadius: 10, padding: "1.4rem 1.6rem" }}>
                  <h3 style={{ color: GOLD, fontSize: "1.2rem", fontWeight: 700, margin: "0 0 0.6rem" }} dangerouslySetInnerHTML={{ __html: b.heading }} />
                  <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: b.body }} />
                </div>
              ))}
            </div>

            <div style={{ marginBottom: "3rem" }}>
              <h3 style={{ color: GREEN, fontSize: "1.35rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Questions for Reflection</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {reflectionQuestions.map((q, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ color: GREEN, fontWeight: 800, fontSize: "1.1rem", flexShrink: 0 }}>{i + 1}</span>
                    <p style={{ color: MUTED, fontSize: "1.03rem", lineHeight: 1.75, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "3rem" }}>
              <h3 style={{ color: ROSE, fontSize: "1.35rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Video Teaching</h3>
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.75rem" }} dangerouslySetInnerHTML={{ __html: "Go deeper into Psalm 34 with teaching on the goodness of God, the story behind the psalm at Gath, the nearness of the LORD to the brokenhearted, and the fear of the LORD as the path of wisdom." }} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
                {videoItems.map((v) => (
                  <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }} dangerouslySetInnerHTML={{ __html: v.title }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${TEAL}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Closing Prayer</h3>
              <p style={{ color: MUTED, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "LORD, I will bless you at all times, even in the place that feels like Gath &mdash; cornered, afraid, and weak. I seek you now; deliver me from all my fears, and let me taste and see that you are good. Encamp around me with your unseen protection, and teach me the fear of the LORD that I may guard my tongue, turn from evil, and pursue peace. When my heart is broken and my spirit crushed, remind me that you are not far off but near, near to save. Though my afflictions be many, deliver me through them all, and let me rest in the redemption you have purchased in Christ, in whom no one who takes refuge will ever be condemned. To you be all praise, amen." }} />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
