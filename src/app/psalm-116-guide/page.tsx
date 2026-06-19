"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

interface Accordion { id: string; title: string; ref: string; body: string; }

const THEME_ITEMS: Accordion[] = [
  {
    id: "theme-love",
    title: "Love Born of Answered Prayer",
    ref: "Psalm 116:1&ndash;2",
    body:
      "<p>Psalm 116 opens with one of the most personal confessions in the whole Psalter: &ldquo;I love the LORD, because he has heard my voice and my pleas for mercy. Because he inclined his ear to me, therefore I will call on him as long as I live&rdquo; (116:1&ndash;2). The love that fills this psalm is not abstract or theoretical; it is love that has a history, love that can point to a moment when God bent down and listened.</p>" +
      "<p>Notice the order of things. The psalmist does not say, &ldquo;I love the LORD, therefore he heard me.&rdquo; He says the opposite: he loves the LORD <em>because</em> God first heard him. Love here is a response to grace already received. God inclined his ear &mdash; he stooped, he leaned in, he gave his full attention to a desperate cry &mdash; and the result is a heart bound to him in gratitude and affection.</p>" +
      "<p>This is the pattern of all true love for God. &ldquo;We love because he first loved us&rdquo; (1 John 4:19). The believer does not generate love for God out of nothing; love is kindled by the experience of being heard, helped, and rescued. And the fruit of that love is a settled resolve: &ldquo;therefore I will call on him as long as I live.&rdquo; The one who has been heard once will keep coming back, for he knows the door is open and the ear of God is inclined toward him.</p>",
  },
  {
    id: "theme-death",
    title: "The Snares of Death and the Cry for Deliverance",
    ref: "Psalm 116:3&ndash;4",
    body:
      "<p>The psalmist does not hide how close he came to ruin. &ldquo;The snares of death encompassed me; the pangs of Sheol laid hold on me; I suffered distress and anguish&rdquo; (116:3). The imagery is vivid and frightening &mdash; cords of death wrapped around him, the grip of the grave tightening, distress and anguish closing in on every side. This was no minor trouble; it was a brush with death itself.</p>" +
      "<p>Out of that extremity came a single, simple cry: &ldquo;Then I called on the name of the LORD: &lsquo;O LORD, I pray, deliver my soul!&rsquo;&rdquo; (116:4). When all other help was gone, the psalmist did the one thing that mattered &mdash; he called on the name of the LORD. He did not argue or bargain; he simply pleaded for his life from the only One who could save it.</p>" +
      "<p>There is great comfort here for everyone who has felt the snares of death tightening. The psalm does not pretend that the life of faith is free from terror or pain. It teaches instead that the place of deepest distress can become the place of the truest prayer. The God who hears is not far from those who are perishing; the shortest road to him is a cry from the heart, &ldquo;O LORD, deliver my soul.&rdquo; (See also Psalm 18:4&ndash;6 and Jonah 2:2.)</p>",
  },
  {
    id: "theme-grace",
    title: "Gracious, Righteous, and Merciful",
    ref: "Psalm 116:5&ndash;7",
    body:
      "<p>Having been delivered, the psalmist turns to praise the character of his Deliverer: &ldquo;Gracious is the LORD, and righteous; our God is merciful&rdquo; (116:5). These are not random adjectives but a deliberate echo of God&rsquo;s own self-revelation to Moses: &ldquo;The LORD, the LORD, a God merciful and gracious&rdquo; (Exodus 34:6). The psalmist has tasted in his own experience what God declared about himself long ago.</p>" +
      "<p>God&rsquo;s grace and his righteousness stand together here without tension. He is gracious &mdash; freely kind to those who have no claim on him &mdash; and he is righteous &mdash; perfectly just and faithful in all he does. His mercy is not a softening of his justice but the overflow of his goodness toward the weak. &ldquo;The LORD preserves the simple; when I was brought low, he saved me&rdquo; (116:6). It is precisely the lowly and the helpless that he guards.</p>" +
      "<p>Then comes one of the tenderest lines in the psalm: &ldquo;Return, O my soul, to your rest; for the LORD has dealt bountifully with you&rdquo; (116:7). Like David in Psalm 103, the psalmist preaches to his own soul, calling it back from fear and turmoil into rest. The ground of that rest is the bountiful dealing of God &mdash; not a vague optimism, but the remembered, concrete generosity of the One who has already saved. The soul finds its true rest only when it returns to the Lord who deals bountifully with it. (Compare Matthew 11:28&ndash;29.)</p>",
  },
  {
    id: "theme-render",
    title: "What Shall I Render? The Cup of Salvation",
    ref: "Psalm 116:12&ndash;14",
    body:
      "<p>At the heart of the psalm stands a question that every grateful believer eventually asks: &ldquo;What shall I render to the LORD for all his benefits to me?&rdquo; (116:12). The psalmist has been overwhelmed by mercy, and he searches for a fitting response. What can a rescued person possibly give back to the God who saved his life?</p>" +
      "<p>The answer is striking, because it is not a payment but a receiving: &ldquo;I will lift up the cup of salvation and call on the name of the LORD&rdquo; (116:13). The truest response to grace is not to repay God &mdash; as if the debt could ever be settled &mdash; but to take up the cup he offers, to receive his salvation gladly, and to keep calling on his name. Worship that honors God begins by accepting his gifts with open hands and a thankful heart.</p>" +
      "<p>To this the psalmist adds public faithfulness: &ldquo;I will pay my vows to the LORD in the presence of all his people&rdquo; (116:14). The vows made in the day of distress are not forgotten once the danger has passed. Gratitude keeps its promises, and it keeps them openly, before the whole congregation. The rescued believer does not hide his thanksgiving but lifts the cup of salvation where others can see and be drawn to praise the same God. (The &ldquo;cup of salvation&rdquo; here resonates richly with the Passover cups and with the cup of the Lord&rsquo;s Supper; see Luke 22:20.)</p>",
  },
  {
    id: "theme-precious",
    title: "Precious in the Sight of the LORD",
    ref: "Psalm 116:15",
    body:
      "<p>One of the most profound statements in all the Psalms appears almost without warning: &ldquo;Precious in the sight of the LORD is the death of his saints&rdquo; (116:15). In a psalm so full of deliverance from death, this verse turns to consider death itself &mdash; and declares that even the dying of God&rsquo;s people is precious in his eyes.</p>" +
      "<p>The word &ldquo;precious&rdquo; means costly, weighty, of great value. The death of a believer is not a cheap or careless thing to God. He does not lose track of his own; he does not forget them when they pass from this life. Their deaths are held as something rare and precious before him, watched over with the same care that guards a treasure. Not a single saint slips away unnoticed.</p>" +
      "<p>This is a deep comfort for all who grieve and for all who must one day face death. The believer is never lost or forgotten, in life or in death. To &ldquo;fall asleep&rdquo; in the Lord is to be gathered into the keeping of the One to whom that death is precious. Paul could therefore write that to depart and be with Christ is &ldquo;far better&rdquo; (Philippians 1:23), and that neither death nor life can separate us from the love of God (Romans 8:38&ndash;39). The God who heard the psalmist&rsquo;s cry will keep his saints even through the valley of the shadow.</p>",
  },
  {
    id: "theme-thanksgiving",
    title: "The Servant Who Offers Thanksgiving",
    ref: "Psalm 116:16&ndash;19",
    body:
      "<p>The psalm closes with the language of glad servitude: &ldquo;O LORD, I am your servant; I am your servant, the son of your maidservant. You have loosed my bonds&rdquo; (116:16). Twice over the psalmist calls himself God&rsquo;s servant, claiming the title not as a burden but as a privilege. The God who loosed the bonds of death has every right to his rescued servant&rsquo;s life.</p>" +
      "<p>Gratitude now overflows in worship: &ldquo;I will offer to you the sacrifice of thanksgiving and call on the name of the LORD. I will pay my vows to the LORD in the presence of all his people&rdquo; (116:17&ndash;18). The repetition is deliberate &mdash; the psalmist cannot stop returning to his vows, his thanksgiving, his calling on the name of the LORD. A heart that has been delivered keeps pouring itself out in praise.</p>" +
      "<p>And this praise is rooted in the gathered people of God: &ldquo;in the courts of the house of the LORD, in your midst, O Jerusalem. Praise the LORD!&rdquo; (116:19). The psalm does not end in private gratitude but in public worship, in the courts of God&rsquo;s house, surrounded by his people. Personal deliverance leads naturally to corporate praise. The one who has been saved lifts his voice with the congregation and calls all to bless the name of the LORD. (On the sacrifice of thanksgiving, see Hebrews 13:15.)</p>",
  },
];

const VERSE_ITEMS: Accordion[] = [
  {
    id: "verse-1",
    title: "I Love the LORD Because He Has Heard My Voice",
    ref: "Psalm 116:1&ndash;4",
    body:
      "<p>&ldquo;I love the LORD, because he has heard my voice and my pleas for mercy. Because he inclined his ear to me, therefore I will call on him as long as I live&rdquo; (116:1&ndash;2). The psalm begins where all true devotion begins &mdash; with love that answers grace. The psalmist loves God because God first listened, bending down to hear a desperate cry.</p>" +
      "<p>He then recounts the danger he was in: &ldquo;The snares of death encompassed me; the pangs of Sheol laid hold on me; I suffered distress and anguish&rdquo; (116:3). The cords of death had wrapped around him; the grip of the grave had taken hold; distress and anguish pressed in. This was a real and terrible extremity, not a passing worry.</p>" +
      "<p>Out of that distress came the cry that changed everything: &ldquo;Then I called on the name of the LORD: &lsquo;O LORD, I pray, deliver my soul!&rsquo;&rdquo; (116:4). When every other refuge failed, the psalmist turned to the name of the LORD with a plea as simple as it was urgent. The opening section sets the whole psalm in motion: a soul in mortal danger, a cry to God, and the God who hears.</p>",
  },
  {
    id: "verse-2",
    title: "Gracious Is the LORD; Return, O My Soul, to Your Rest",
    ref: "Psalm 116:5&ndash;7",
    body:
      "<p>&ldquo;Gracious is the LORD, and righteous; our God is merciful&rdquo; (116:5). The psalmist describes his Deliverer in the very words God once used of himself at Sinai (Exodus 34:6). Grace, righteousness, and mercy meet together in the character of the God who saved him &mdash; freely kind, perfectly just, tender toward the weak.</p>" +
      "<p>&ldquo;The LORD preserves the simple; when I was brought low, he saved me&rdquo; (116:6). It is the lowly and the helpless &mdash; those with no strength or cleverness of their own &mdash; whom the LORD especially keeps. The psalmist counts himself among them: he was brought low, and God saved him. Salvation came not to the strong but to the one who had reached the end of himself.</p>" +
      "<p>&ldquo;Return, O my soul, to your rest; for the LORD has dealt bountifully with you&rdquo; (116:7). The psalmist now speaks to his own soul, calling it home from fear into rest. The ground of that rest is the bountiful dealing of God. Having been heard and saved, the soul has every reason to lay down its turmoil and rest in the generosity of the Lord.</p>",
  },
  {
    id: "verse-3",
    title: "You Have Delivered My Soul; I Will Walk Before the LORD",
    ref: "Psalm 116:8&ndash;11",
    body:
      "<p>&ldquo;For you have delivered my soul from death, my eyes from tears, my feet from stumbling&rdquo; (116:8). The deliverance is total &mdash; soul, eyes, and feet are all rescued. Death is turned back, tears are wiped away, and the stumbling feet are set firm. God&rsquo;s salvation reaches the whole person in the whole of his trouble.</p>" +
      "<p>&ldquo;I will walk before the LORD in the land of the living&rdquo; (116:9). The rescued life is now lived consciously in God&rsquo;s presence, here among the living. To &ldquo;walk before the LORD&rdquo; is to order one&rsquo;s days under his eye and for his glory, a life that gratefully belongs to the One who preserved it.</p>" +
      "<p>&ldquo;I believed, even when I spoke: &lsquo;I am greatly afflicted&rsquo;; I said in my alarm, &lsquo;All mankind are liars&rsquo;&rdquo; (116:10&ndash;11). The psalmist held on to faith even while he poured out his affliction and confessed his alarm. Faith and honest lament are not enemies. The Apostle Paul takes up this very verse &mdash; &ldquo;I believed, and so I spoke&rdquo; &mdash; as the spirit of his own ministry under pressure (2 Corinthians 4:13). Belief that speaks even in affliction is faith of the truest kind.</p>",
  },
  {
    id: "verse-4",
    title: "What Shall I Render? I Will Lift Up the Cup of Salvation",
    ref: "Psalm 116:12&ndash;14",
    body:
      "<p>&ldquo;What shall I render to the LORD for all his benefits to me?&rdquo; (116:12). The flood of mercy provokes the great question of grateful response. The psalmist has received so much that he searches for some fitting way to answer such kindness.</p>" +
      "<p>&ldquo;I will lift up the cup of salvation and call on the name of the LORD&rdquo; (116:13). The answer is not a payment but a glad receiving. He takes up the cup God offers &mdash; the cup of salvation &mdash; and keeps calling on the name that has already saved him. True thanksgiving honors God by gratefully accepting his gifts and proclaiming his name. The image of the &ldquo;cup&rdquo; reaches forward to the Passover and to the cup of the Lord&rsquo;s Supper, where the cup of salvation is filled to the brim in Christ.</p>" +
      "<p>&ldquo;I will pay my vows to the LORD in the presence of all his people&rdquo; (116:14). Gratitude keeps its promises, and it keeps them in the open. The vows made in distress are now paid before the whole congregation, so that the praise of one rescued soul becomes the praise of all God&rsquo;s people.</p>",
  },
  {
    id: "verse-5",
    title: "Precious Is the Death of His Saints; I Will Pay My Vows",
    ref: "Psalm 116:15&ndash;19",
    body:
      "<p>&ldquo;Precious in the sight of the LORD is the death of his saints&rdquo; (116:15). In a psalm of rescue from death, the psalmist pauses to declare that even the death of God&rsquo;s people is precious to him &mdash; costly, weighty, never careless. The saints are not lost or forgotten when they die; their passing is held as a treasure in the eyes of the LORD.</p>" +
      "<p>&ldquo;O LORD, I am your servant; I am your servant, the son of your maidservant. You have loosed my bonds&rdquo; (116:16). The rescued one gladly names himself God&rsquo;s servant. The God who loosed the bonds of death has every claim on the life he set free, and the psalmist offers it back with joy.</p>" +
      "<p>&ldquo;I will offer to you the sacrifice of thanksgiving and call on the name of the LORD. I will pay my vows to the LORD in the presence of all his people, in the courts of the house of the LORD, in your midst, O Jerusalem. Praise the LORD!&rdquo; (116:17&ndash;19). The psalm ends in the courts of God&rsquo;s house, amid his gathered people, with thanksgiving offered up and vows fulfilled. Private deliverance flows out into public, congregational praise &mdash; &ldquo;Praise the LORD!&rdquo;</p>",
  },
];

const APPLICATION_ITEMS: Accordion[] = [
  {
    id: "app-remember",
    title: "Remember and Recount Your Deliverances",
    ref: "Psalm 116:1&ndash;2",
    body:
      "<p>The psalmist&rsquo;s love for God is anchored in a remembered rescue: &ldquo;I love the LORD, because he has heard my voice.&rdquo; Our own love for God grows cold when we forget what he has done. The remedy is to keep a deliberate memory of his mercies &mdash; the prayers he answered, the dangers he carried us through, the times he inclined his ear when we cried out.</p>" +
      "<p>Make it a habit to recount God&rsquo;s deliverances by name. Write them down. Tell them to your children and your friends. Let the memory of past grace fuel present love and future prayer. The one who remembers being heard will keep calling on God &ldquo;as long as I live.&rdquo;</p>",
  },
  {
    id: "app-cry",
    title: "Cry Out in the Day of Distress",
    ref: "Psalm 116:3&ndash;4",
    body:
      "<p>When the snares of death encompassed him, the psalmist did not despair into silence &mdash; he called on the name of the LORD. The life of faith does not exempt us from anguish, but it gives us somewhere to turn when anguish comes. The shortest, truest prayer is often the simplest: &ldquo;O LORD, deliver my soul.&rdquo;</p>" +
      "<p>Do not wait until your words are eloquent or your faith is strong. In the moment of distress, cry out. The God who heard the psalmist from the grip of the grave is not far from you. He inclines his ear to the lowly, and the place of deepest trouble can become the place of the most honest and answered prayer.</p>",
  },
  {
    id: "app-rest",
    title: "Preach Rest to Your Own Soul",
    ref: "Psalm 116:7",
    body:
      "<p>&ldquo;Return, O my soul, to your rest; for the LORD has dealt bountifully with you.&rdquo; The psalmist does not wait for his feelings to settle; he speaks to his soul and calls it back to rest. We can do the same. When fear and turmoil rise, we need not be passive captives of our moods. We can preach the gospel to ourselves and summon our souls back to the Lord.</p>" +
      "<p>The ground of that rest is not wishful thinking but the bountiful dealing of God &mdash; his proven, concrete generosity. When you are restless and afraid, remind your soul of how God has already dealt bountifully with you, and call it home to its true rest in him. (See Matthew 11:28&ndash;30.)</p>",
  },
  {
    id: "app-render",
    title: "Respond to Grace by Receiving and Confessing",
    ref: "Psalm 116:12&ndash;14",
    body:
      "<p>&ldquo;What shall I render to the LORD for all his benefits to me?&rdquo; The right answer is not to repay God &mdash; we never could &mdash; but to lift the cup of salvation, to receive his grace gladly, and to keep calling on his name. The most God-honoring response to mercy is open-handed gratitude, not anxious self-effort.</p>" +
      "<p>And gratitude is meant to be public: &ldquo;I will pay my vows in the presence of all his people.&rdquo; Keep the promises you made in your distress. Confess God&rsquo;s goodness openly, in the gathered church, so that your thanksgiving draws others to praise. Receive the cup of salvation that comes to its fullness in the Lord&rsquo;s Supper, and let your whole life be a returning of thanks.</p>",
  },
  {
    id: "app-death",
    title: "Live and Die in the Confidence That You Are Precious to God",
    ref: "Psalm 116:15&ndash;16",
    body:
      "<p>&ldquo;Precious in the sight of the LORD is the death of his saints.&rdquo; This verse reaches the deepest fear of the human heart and answers it with comfort. The believer is never lost or forgotten, in life or in death. Your dying is not a careless thing to God; it is precious in his eyes, watched over and guarded.</p>" +
      "<p>Let this confidence shape both how you grieve and how you face your own mortality. When you stand at the grave of a fellow believer, remember that their death is precious to the Lord and that they are safe in his keeping. When you face your own end, rest in the truth that to depart and be with Christ is far better, and that nothing &mdash; not even death &mdash; can separate you from the love of God (Philippians 1:23; Romans 8:38&ndash;39).</p>",
  },
];

const REFLECTION_QUESTIONS: string[] = [
  "The psalmist says, &ldquo;I love the LORD, because he has heard my voice.&rdquo; What specific deliverances has God worked in your life that kindle your love for him? How might recounting them rekindle your devotion?",
  "When have you felt the &ldquo;snares of death&rdquo; closing in &mdash; whether through illness, loss, or deep distress? How did you call on the name of the LORD, and how did he answer?",
  "The psalmist preaches to his own soul: &ldquo;Return, O my soul, to your rest.&rdquo; What truths about God&rsquo;s bountiful dealing do you most need to preach to your own restless heart this week?",
  "&ldquo;What shall I render to the LORD for all his benefits to me?&rdquo; If the answer is to receive the cup of salvation and call on his name, how can you respond to grace this week by gratitude rather than anxious self-effort?",
  "How does the statement &ldquo;Precious in the sight of the LORD is the death of his saints&rdquo; change the way you think about death &mdash; your own and that of fellow believers?",
  "The psalm moves from private rescue to public praise &ldquo;in the presence of all his people.&rdquo; How can you make your gratitude more visible and shared within the gathered church?",
];

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 116 &mdash; I Love the LORD Because He Has Heard My Voice" },
  { videoId: "Q2oNOlXzBhY", title: "The Cup of Salvation &mdash; Thanksgiving for Deliverance" },
  { videoId: "8phkAg8PMHE", title: "Precious in the Sight of the LORD Is the Death of His Saints" },
  { videoId: "fNk_zzaMoSs", title: "What Shall I Render? A Study of Psalm 116" },
];

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

export default function Psalm116Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;
  const toggle = (id: string) => setOpen(open === id ? null : id);

  const wrap: React.CSSProperties = { maxWidth: 880, margin: "0 auto", padding: "0 1.25rem" };
  const card: React.CSSProperties = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.6rem", marginBottom: "1.25rem" };
  const sectionTitle: React.CSSProperties = { color: GOLD, fontSize: "1.35rem", fontWeight: 700, margin: "0 0 0.85rem" };
  const para: React.CSSProperties = { color: TEXT, fontSize: "1.02rem", lineHeight: 1.75 };

  const renderAccordion = (items: Accordion[], accent: string) => (
    <div>
      {items.map((it) => {
        const isOpen = open === it.id;
        return (
          <div key={it.id} style={{ border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: "0.85rem", overflow: "hidden", background: CARD }}>
            <button
              type="button"
              onClick={() => toggle(it.id)}
              aria-expanded={isOpen}
              style={{
                width: "100%", textAlign: "left", background: "transparent", border: "none", cursor: "pointer",
                padding: "1.1rem 1.3rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem",
              }}
            >
              <span style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <span style={{ color: TEXT, fontSize: "1.08rem", fontWeight: 650 }}>{it.title}</span>
                <span style={{ color: accent, fontSize: "0.85rem", fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: it.ref }} />
              </span>
              <span style={{ color: accent, fontSize: "1.4rem", lineHeight: 1, flexShrink: 0 }}>{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen && (
              <div
                style={{ padding: "0 1.3rem 1.3rem", color: TEXT, fontSize: "1.0rem", lineHeight: 1.75 }}
                dangerouslySetInnerHTML={{ __html: it.body }}
              />
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      {/* Hero */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: `linear-gradient(160deg, ${CARD}, ${BG})` }}>
        <div style={{ ...wrap, paddingTop: "2.75rem", paddingBottom: "2.5rem" }}>
          <p style={{ color: GREEN, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.82rem", margin: "0 0 0.65rem" }}>
            A Study Guide &mdash; The Vine
          </p>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, margin: "0 0 0.75rem", lineHeight: 1.15 }}>
            Psalm 116
          </h1>
          <p style={{ color: MUTED, fontSize: "1.12rem", lineHeight: 1.6, margin: "0 0 1.5rem", maxWidth: 640 }}
            dangerouslySetInnerHTML={{ __html: "A personal thanksgiving of one delivered from death &mdash; part of the Egyptian Hallel (Psalms 113&ndash;118) sung at Passover, and very likely among the hymns Jesus sang at the Last Supper." }}
          />
          <div style={{ background: "rgba(58,125,86,0.10)", border: `1px solid ${GREEN}`, borderRadius: 14, padding: "1.3rem 1.5rem" }}>
            <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.07em", textTransform: "uppercase", margin: "0 0 0.55rem" }}>
              Key Verse &mdash; Psalm 116:12&ndash;13
            </p>
            <p style={{ color: TEXT, fontSize: "1.22rem", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}
              dangerouslySetInnerHTML={{ __html: "&ldquo;What shall I render to the LORD for all his benefits to me? I will lift up the cup of salvation and call on the name of the LORD.&rdquo;" }}
            />
          </div>
        </div>
      </div>

      {/* Tab bar */}
      <div style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 10, background: BG, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ ...wrap, display: "flex", gap: "0.4rem", overflowX: "auto", paddingTop: "0.7rem", paddingBottom: "0.7rem" }}>
          {TABS.map((t) => {
            const activeTab = tab === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => { setTab(t); setOpen(null); }}
                style={{
                  flexShrink: 0, padding: "0.55rem 1.05rem", borderRadius: 999, cursor: "pointer",
                  fontSize: "0.92rem", fontWeight: 650,
                  border: `1px solid ${activeTab ? GREEN : BORDER}`,
                  background: activeTab ? GREEN : "transparent",
                  color: activeTab ? "#FFFFFF" : MUTED,
                }}
              >
                {TAB_LABELS[t]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Panels */}
      <div style={{ ...wrap, paddingTop: "2rem", paddingBottom: "4rem" }}>
        {tab === "overview" && (
          <div>
            <div style={card}>
              <h2 style={sectionTitle}>Summary</h2>
              <p style={para} dangerouslySetInnerHTML={{ __html: "Psalm 116 is the heartfelt thanksgiving of a believer who has been rescued from the very brink of death. It begins with a confession of love &mdash; &ldquo;I love the LORD, because he has heard my voice&rdquo; &mdash; and traces the whole arc of deliverance: the snares of death that once encompassed him, the desperate cry &ldquo;O LORD, deliver my soul,&rdquo; the gracious and merciful character of the God who answered, and the overflowing question, &ldquo;What shall I render to the LORD for all his benefits to me?&rdquo;" }} />
              <p style={para} dangerouslySetInnerHTML={{ __html: "The psalmist answers his own question not with a payment but with a glad receiving: &ldquo;I will lift up the cup of salvation and call on the name of the LORD.&rdquo; Along the way he pauses to declare one of Scripture&rsquo;s most comforting truths &mdash; &ldquo;Precious in the sight of the LORD is the death of his saints&rdquo; &mdash; before closing in public worship, paying his vows in the courts of the house of the LORD with the sacrifice of thanksgiving." }} />
            </div>
            <div style={card}>
              <h2 style={sectionTitle}>Structure</h2>
              <p style={para} dangerouslySetInnerHTML={{ __html: "<strong>116:1&ndash;4 &mdash; The Cry and the Hearing.</strong> Love kindled because God heard; the snares of death; the plea, &ldquo;O LORD, deliver my soul.&rdquo;" }} />
              <p style={para} dangerouslySetInnerHTML={{ __html: "<strong>116:5&ndash;7 &mdash; The Gracious Deliverer.</strong> The LORD is gracious, righteous, and merciful; he preserves the simple; the soul is called back to its rest." }} />
              <p style={para} dangerouslySetInnerHTML={{ __html: "<strong>116:8&ndash;11 &mdash; Deliverance and Faith.</strong> Soul, eyes, and feet delivered; walking before the LORD; &ldquo;I believed, even when I spoke.&rdquo;" }} />
              <p style={para} dangerouslySetInnerHTML={{ __html: "<strong>116:12&ndash;14 &mdash; The Grateful Response.</strong> &ldquo;What shall I render?&rdquo;; the cup of salvation; vows paid before all the people." }} />
              <p style={para} dangerouslySetInnerHTML={{ __html: "<strong>116:15&ndash;19 &mdash; Precious Death and Public Praise.</strong> The precious death of the saints; the servant&rsquo;s thanksgiving; vows paid in the courts of the LORD&rsquo;s house." }} />
            </div>
            <div style={card}>
              <h2 style={sectionTitle}>Context</h2>
              <p style={para} dangerouslySetInnerHTML={{ __html: "Psalm 116 belongs to the Egyptian Hallel (Psalms 113&ndash;118), a cluster of psalms sung at the great festivals of Israel, especially Passover. These were the hymns of redemption, celebrating God&rsquo;s rescue of his people from Egypt and his ongoing deliverance of those who cry to him. It is very likely that Psalm 116 was among the songs Jesus and his disciples sang at the Last Supper before going out to the Mount of Olives (Matthew 26:30)." }} />
              <p style={para} dangerouslySetInnerHTML={{ __html: "This setting gives the psalm&rsquo;s imagery a striking depth. &ldquo;The cup of salvation&rdquo; (116:13) resonates with the cups of the Passover meal and points forward to the cup of the Lord&rsquo;s Supper, where the cup of salvation is filled to the brim in the blood of Christ. The line &ldquo;I believed, and so I spoke&rdquo; (116:10) is taken up by the Apostle Paul as the very spirit of gospel ministry under affliction (2 Corinthians 4:13)." }} />
              <p style={para} dangerouslySetInnerHTML={{ __html: "Whether the psalmist&rsquo;s brush with death came through illness, persecution, or some other peril, the psalm teaches every generation how to respond to deliverance: with remembered love, glad thanksgiving, public worship, and the unshakeable confidence that the death of God&rsquo;s saints is precious in his sight." }} />
            </div>
          </div>
        )}

        {tab === "themes" && (
          <div>
            <p style={{ color: MUTED, fontSize: "1.0rem", lineHeight: 1.6, margin: "0 0 1.4rem" }}
              dangerouslySetInnerHTML={{ __html: "Six themes that carry the heart of Psalm 116. Tap each to open. Cross-references are woven throughout to connect the psalm to the wider testimony of Scripture." }}
            />
            {renderAccordion(THEME_ITEMS, GOLD)}
          </div>
        )}

        {tab === "verse" && (
          <div>
            <p style={{ color: MUTED, fontSize: "1.0rem", lineHeight: 1.6, margin: "0 0 1.4rem" }}
              dangerouslySetInnerHTML={{ __html: "Move through Psalm 116 section by section. Each entry opens to a close reading of the text in its own movement, from the cry out of death to the public payment of vows." }}
            />
            {renderAccordion(VERSE_ITEMS, TEAL)}
          </div>
        )}

        {tab === "application" && (
          <div>
            <p style={{ color: MUTED, fontSize: "1.0rem", lineHeight: 1.6, margin: "0 0 1.4rem" }}
              dangerouslySetInnerHTML={{ __html: "Psalm 116 is not only to be admired but lived. These applications, questions, teaching videos, and a closing prayer are offered to help the truth of the psalm take root in daily life." }}
            />
            {renderAccordion(APPLICATION_ITEMS, PURPLE)}

            <div style={{ ...card, marginTop: "1.75rem", borderColor: ROSE }}>
              <h2 style={{ ...sectionTitle, color: ROSE }}>Questions for Reflection</h2>
              <ol style={{ margin: 0, paddingLeft: "1.25rem" }}>
                {REFLECTION_QUESTIONS.map((q, i) => (
                  <li key={i} style={{ color: TEXT, fontSize: "1.0rem", lineHeight: 1.7, marginBottom: "0.85rem" }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>

            <h2 style={{ ...sectionTitle, marginTop: "2.25rem" }}>Teaching Videos</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.4rem", marginBottom: "1rem" }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden", background: CARD }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: "0.92rem", padding: "0.8rem 1rem", margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: v.title }}
                  />
                </div>
              ))}
            </div>

            <div style={{ ...card, marginTop: "1.5rem", background: "rgba(107,79,187,0.10)", borderColor: PURPLE }}>
              <h2 style={{ ...sectionTitle, color: PURPLE }}>A Closing Prayer</h2>
              <p style={para} dangerouslySetInnerHTML={{ __html: "Gracious and righteous LORD, our God who is merciful, we bless you because you have heard our voice and our pleas for mercy, and because you inclined your ear to us in our distress. When the snares of death encompassed us, you delivered our souls; you wiped the tears from our eyes and set our feet on solid ground." }} />
              <p style={para} dangerouslySetInnerHTML={{ __html: "Teach us to ask, with the psalmist, &ldquo;What shall we render to you for all your benefits?&rdquo; and to answer rightly &mdash; lifting the cup of salvation, calling on your name, and paying our vows in the presence of all your people. Return our souls to their rest in you, for you have dealt bountifully with us." }} />
              <p style={para} dangerouslySetInnerHTML={{ __html: "We thank you that the death of your saints is precious in your sight, that we are never lost or forgotten in life or in death. Make us your faithful servants, that we may offer the sacrifice of thanksgiving all our days, until we praise you forever in your courts. Through Jesus Christ our Lord, who lifted the cup for us. Amen." }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
