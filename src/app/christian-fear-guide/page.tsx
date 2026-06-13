"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Fear Not", "Two Kinds of Fear", "The Fear of Death", "Perfect Love Casts Out Fear", "Facing Fear with Faith", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Fear Not",
    heading: "Fear Not: The Most Repeated Command in the Bible",
    paragraphs: [
      "&ldquo;Do not be afraid&rdquo; is often called the most repeated command in the Bible &mdash; appearing in various forms hundreds of times, spoken by God, by angels, and by Jesus. From God&rsquo;s word to Abraham (&ldquo;Fear not, Abram, I am your shield,&rdquo; Gen 15:1) to the angel&rsquo;s announcement to the shepherds (&ldquo;Fear not, for behold, I bring you good news of great joy,&rdquo; Luke 2:10) to the risen Christ&rsquo;s words (&ldquo;Fear not, I am the first and the last,&rdquo; Rev 1:17), the call to courage runs through the whole of Scripture. Significantly, the command &ldquo;fear not&rdquo; is almost always grounded in a reason &mdash; not &ldquo;fear not because there is nothing to fear,&rdquo; but &ldquo;fear not because I am with you.&rdquo; &ldquo;Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you&rdquo; (Isa 41:10). The antidote to fear is not denial of danger but the presence of God. Fear is a universal human experience, and God does not shame us for feeling it; he meets us in it with his presence and his promises.",
      "The sheer frequency of this command is itself a kind of revelation. A God who repeats &ldquo;fear not&rdquo; more than any other instruction is a God who knows the human heart intimately &mdash; who understands that fear is not an occasional intruder but a constant companion of finite, vulnerable creatures living in a dangerous world. The repetition is not nagging; it is tenderness. It is the voice of a parent who, knowing the child will be afraid again and again, says again and again: &ldquo;I am here. You are not alone. Do not be afraid.&rdquo; The command is gentle precisely because it is so frequent. It anticipates that we will need to hear it many times, in many circumstances, across the whole span of a life.",
      "It matters who speaks these words and when. To Abraham, childless and aging, God says &ldquo;fear not&rdquo; before the promise of descendants. To Hagar in the wilderness, the angel says &ldquo;do not be afraid&rdquo; when she is desperate and alone. To Joshua at the threshold of an overwhelming task, God says &ldquo;be strong and courageous; do not be frightened&rdquo; (Josh 1:9). To Mary, troubled by an angelic visit, Gabriel says &ldquo;do not be afraid&rdquo; before announcing the impossible. The command consistently arrives at the edge of human limitation &mdash; at the precise point where the situation exceeds the person&rsquo;s capacity to manage it. Fear is the honest signal that we are not in control; &ldquo;fear not&rdquo; is God&rsquo;s assurance that he is.",
      "The disciples in the storm-tossed boat illustrate the pattern vividly. Terrified by the wind and waves, they wake Jesus, who rebukes the storm and then asks, &ldquo;Why are you so afraid? Have you still no faith?&rdquo; (Mark 4:40). The rebuke is not contempt for their fear but an invitation to a deeper trust. The same Jesus who slept through the storm walks on the water toward them in another (Matt 14:27), saying, &ldquo;Take heart; it is I. Do not be afraid.&rdquo; The presence of Christ in the storm does not always calm the wind immediately; sometimes it simply gives the frightened the assurance that they are not facing the storm alone. The fear is met not first with an explanation but with a Person.",
      "It is worth dwelling on the grammar of these promises. God almost never says &ldquo;fear not&rdquo; as a bare imperative hanging in the air. He grounds it: &ldquo;for I am with you,&rdquo; &ldquo;for I have redeemed you,&rdquo; &ldquo;for I have called you by name, you are mine&rdquo; (Isa 43:1). The command and its ground are inseparable. This means Christian courage is never the stoic act of mastering oneself through sheer willpower; it is the response of a heart that has heard a promise. To obey &ldquo;fear not&rdquo; is, at bottom, to believe &ldquo;I am with you.&rdquo; The two stand or fall together. Where the promise is grasped, the fear loosens its grip; where the promise is forgotten, even brave people tremble.",
      "This is why the biblical answer to fear is never mere positive thinking or the suppression of feeling. Scripture does not tell the afraid to pretend the danger is not real. The shepherds had reason to be terrified; the glory of the Lord shone around them. Mary had reason to be troubled; an angel stood before her. The danger and the difficulty are acknowledged, named, and real. What changes is not the situation but the company: the God who is greater than the danger has drawn near. &ldquo;Fear not&rdquo; is therefore not a denial of reality but the announcement of a larger reality &mdash; the presence of the living God within the very situation that frightens us.",
      "To live inside the &ldquo;fear not&rdquo; of Scripture is to learn, slowly, to reinterpret our fear. Every wave of fear becomes an occasion to remember the promise; every threat becomes a chance to say, &ldquo;but you are with me.&rdquo; The psalmist walks &ldquo;through the valley of the shadow of death&rdquo; and fears no evil &mdash; not because the valley is safe but because &ldquo;you are with me&rdquo; (Ps 23:4). The believer does not graduate beyond fear into a life of perpetual calm. Rather, the believer learns to carry fear to God again and again, hearing again and again the oldest and most frequent word he speaks to his frightened children: do not be afraid, for I am with you.",
    ],
  },
  {
    id: "Two Kinds of Fear",
    heading: "Two Kinds of Fear: Godly Reverence and Sinful Anxiety",
    paragraphs: [
      "The Bible speaks of fear in two very different senses, and distinguishing them is essential. There is a fear that Scripture commends &mdash; &ldquo;the fear of the Lord&rdquo; &mdash; which is reverent awe, wonder, and respect before the holy God. &ldquo;The fear of the Lord is the beginning of wisdom&rdquo; (Prov 9:10). This godly fear is not terror that drives us from God but reverence that draws us to him; it is the appropriate response of a creature before the Creator, and it actually frees us from lesser fears. Then there is the fear that Scripture addresses as a problem &mdash; the anxious, controlling, faithless fear of circumstances, people, and the unknown. This fear &ldquo;of man&rdquo; lays a snare (Prov 29:25); it can paralyze, distort judgment, and drive us to sin. The remarkable dynamic of Scripture is that the right fear (of God) displaces the wrong fears (of everything else). When God is rightly feared as the greatest reality, the threats that once loomed large are put in proportion. &ldquo;Whom shall I fear?&rdquo; asks the psalmist who knows the Lord is his light and salvation (Ps 27:1).",
      "The fear of the Lord can be difficult for modern readers to grasp, because we tend to hear &ldquo;fear&rdquo; only as something negative &mdash; a thing to be eliminated. But the biblical fear of God is closer to what we mean by awe, reverence, and wonder than to what we mean by anxiety or dread. It is the response of standing before something vastly greater than ourselves: the trembling delight of the creature before the Creator, the worshiper before the Holy. It includes a recognition of God&rsquo;s holiness and our smallness, his majesty and our dependence. Far from being incompatible with love, this fear is the soil in which awe-filled love grows. We do not love God less by fearing him rightly; we love him truly only when we have first seen how great he is.",
      "Scripture presents the fear of the Lord as the foundation of wisdom and the beginning of knowledge (Prov 1:7; 9:10). This is profound. It claims that we cannot rightly understand the world, ourselves, or how to live until we have taken God&rsquo;s reality into account &mdash; until we have reckoned with the fact that we are not autonomous but accountable, not the center but creatures. The fear of the Lord reorders our whole map of reality, putting God at the center where he belongs. From that vantage, everything else falls into truer proportion. Wisdom is not first a matter of cleverness or information; it begins with reverence.",
      "Sinful fear, by contrast, is the fear that treats some created thing &mdash; the opinion of people, the loss of security, the threat of pain or failure &mdash; as if it were ultimate. The &ldquo;fear of man&rdquo; that Scripture warns against is precisely this: granting to other human beings a power over us that belongs to God alone, so that we are controlled by their approval or disapproval, ruled by what they might think or do. &ldquo;The fear of man lays a snare, but whoever trusts in the Lord is safe&rdquo; (Prov 29:25). This kind of fear enslaves; it makes us small, anxious, and easily manipulated. It distorts our judgment and drives us to compromise. Much of the cowardice and people-pleasing that corrodes the soul is rooted here.",
      "The genius of the biblical vision is that these two fears are inversely related: the more we fear God rightly, the less we are enslaved to the fear of everything else. When the Lord is the supreme reality in our hearts, the threats of people and circumstances shrink to their proper size. This is why those who have most deeply feared God have often been the most fearless before human power &mdash; the prophets who confronted kings, the apostles who defied the Sanhedrin (&ldquo;We must obey God rather than men,&rdquo; Acts 5:29), the martyrs who faced death with peace. Their courage was not the absence of fear but the redirection of it: having learned to fear God, they were liberated from the tyranny of lesser fears.",
      "Isaiah captures this dynamic in a striking passage where God says, in effect, do not fear what the people fear: &ldquo;Do not fear what they fear, nor be in dread. But the Lord of hosts, him you shall honor as holy. Let him be your fear, and let him be your dread&rdquo; (Isa 8:12-13). The remedy for being controlled by anxious fear is not to stop fearing altogether but to fear the right thing. A heart will fear something; the question is what occupies the place of ultimate concern. When God occupies that place, the heart is anchored; when something smaller does, the heart is tossed about by every threat to that idol.",
      "Discerning which fear is at work in us is a vital spiritual skill. Godly fear humbles us before God and draws us toward him in worship, trust, and obedience; it produces wisdom, peace, and a strange fearlessness before lesser threats. Sinful fear turns us in on ourselves, drives us away from trust, and produces anxiety, compromise, and bondage. The same word, &ldquo;fear,&rdquo; names both &mdash; but they move in opposite directions. The mature Christian life involves cultivating the one while being delivered from the other: growing in reverent awe before the holy God, and being set free, by that very reverence, from the host of anxious fears that would otherwise rule us.",
    ],
  },
  {
    id: "The Fear of Death",
    heading: "The Fear of Death and the Hope of Resurrection",
    paragraphs: [
      "Beneath many human fears lies the ultimate fear: the fear of death. The author of Hebrews names it directly &mdash; that through fear of death people are &ldquo;subject to lifelong slavery&rdquo; (Heb 2:15). The fear of death casts a shadow over everything, and much of human striving is, at root, an attempt to escape or deny mortality. The Christian gospel confronts this fear head-on with the resurrection of Jesus. Because Christ has died and risen, death has been &ldquo;swallowed up in victory&rdquo; (1 Cor 15:54). Christ shared in flesh and blood &ldquo;that through death he might destroy the one who has the power of death&hellip; and deliver all those who through fear of death were subject to lifelong slavery&rdquo; (Heb 2:14-15). This does not make death pleasant &mdash; it remains an enemy &mdash; but it removes its ultimate sting. Paul can say, &ldquo;For to me to live is Christ, and to die is gain&rdquo; (Phil 1:21), and &ldquo;O death, where is your victory? O death, where is your sting?&rdquo; (1 Cor 15:55). The believer faces death not with denial but with hope grounded in the empty tomb.",
      "The insight of Hebrews 2:15 is psychologically penetrating: the fear of death produces &ldquo;lifelong slavery.&rdquo; Even when death is not consciously in view, the dread of it operates underground, shaping our anxieties, our grasping after security, our frantic attempts to matter and to last. Much of what looks like ordinary fear &mdash; of failure, of insignificance, of loss &mdash; is the fear of death wearing other masks. The human being who has not faced mortality is, in a sense, always running from it, and that flight distorts the whole of life. To be delivered from the fear of death is therefore not a small thing; it is to be set free at the deepest level from a bondage that touches everything.",
      "The Christian answer to this fear is not a philosophy but an event. It is not the abstract claim that the soul is immortal, nor a sentiment that our loved ones live on in memory. It is the concrete, historical claim that Jesus of Nazareth was crucified, was buried, and on the third day rose bodily from the dead &mdash; and that his resurrection is the firstfruits of a coming resurrection of all who are his (1 Cor 15:20-23). Christian hope in the face of death stands or falls with this event. &ldquo;If Christ has not been raised,&rdquo; Paul admits frankly, &ldquo;your faith is futile&rdquo; (1 Cor 15:17). But if he has been raised &mdash; and the church has staked everything on the testimony that he was &mdash; then death has met its conqueror.",
      "It is important to be honest that this hope does not make death cease to be an enemy. Scripture calls death &ldquo;the last enemy to be destroyed&rdquo; (1 Cor 15:26). Christian faith does not ask us to pretend that death is natural, good, or welcome. It is a violation, an intruder, the wage of sin, the rending of what God made to be whole. The grief that accompanies death is right and proper; even Jesus wept at a grave. What the resurrection changes is not that death stops being terrible but that it stops being final. The enemy still attacks, but its defeat is certain; the sting remains painful, but the venom has been drawn.",
      "This is why Paul can hold together what seem like opposites: a clear-eyed recognition that death is an enemy, and a startling confidence that, for the believer, &ldquo;to die is gain.&rdquo; He does not minimize death; he relativizes it. Because Christ is on the other side of it, death has become for the believer a doorway rather than a wall &mdash; the means by which we are brought to be &ldquo;with Christ, which is far better&rdquo; (Phil 1:23). The Christian does not love death or seek it, but neither is the Christian finally enslaved to the fear of it. The worst that death can do has been undone by the resurrection.",
      "The early Christians were famous in the ancient world for the way they faced death. In times of plague, when others fled, Christians stayed to nurse the sick, including strangers, because they did not fear death as the pagans did. The martyrs went to their deaths singing. This was not bravado or a denial of the reality of suffering; it was the visible fruit of a real hope. People who genuinely believe that death has been conquered live differently &mdash; more freely, more generously, more courageously &mdash; than those for whom death is the absolute end. The Christian witness in the face of death has always been one of the most powerful testimonies to the truth of the resurrection.",
      "For the believer wrestling with the fear of death &mdash; whether their own or that of those they love &mdash; the gospel does not offer easy reassurance but a sturdy hope to be held onto, often through tears. The practice is to return again and again to the empty tomb: to rehearse the promise, to take communion as a foretaste of the wedding feast, to say with the church across the ages, &ldquo;I believe in the resurrection of the body and the life everlasting.&rdquo; The fear may still rise; the hope does not depend on the fear&rsquo;s absence. It depends on the One who walked out of his own grave and who holds &ldquo;the keys of Death and Hades&rdquo; (Rev 1:18). Because he lives, those who are his will live also.",
    ],
  },
  {
    id: "Perfect Love Casts Out Fear",
    heading: "Perfect Love Casts Out Fear",
    paragraphs: [
      "One of the most profound statements about fear in Scripture is 1 John 4:18: &ldquo;There is no fear in love, but perfect love casts out fear. For fear has to do with punishment, and whoever fears has not been perfected in love.&rdquo; Much of our deepest fear is, at root, the fear of judgment and rejection &mdash; the fear that we are not acceptable, not safe, not loved. John&rsquo;s answer is that the perfect love of God, demonstrated in the sending of his Son as the propitiation for our sins (4:10), removes the ground of this fear. The one who truly grasps that they are loved by God &mdash; loved not because they earned it but freely, sacrificially, eternally &mdash; is set free from the fear of condemnation. This is not the elimination of all fear by willpower but the displacement of fear by a greater reality: being perfectly loved. As believers grow in the assurance of God&rsquo;s love, the fears that once gripped them lose their power. Resting in the love of God is the deepest remedy for the fearful heart.",
      "It is worth noticing what kind of fear John has in view. He specifies that &ldquo;fear has to do with punishment&rdquo; &mdash; the fear of condemnation, of being found guilty and rejected, of facing the judgment of God without a defense. This is arguably the most fundamental human fear, the one beneath the others: the dread of being exposed, weighed, and found wanting. John&rsquo;s claim is that this particular fear is dissolved by love &mdash; not by lowering the standard of judgment, nor by pretending we have nothing to answer for, but by the love of God that has already met the judgment in the cross of Christ. The propitiation has been made; the punishment has been borne; there is no condemnation left for those who are in Christ (Rom 8:1).",
      "This connects fear directly to the gospel of grace. The reason perfect love casts out fear is that perfect love has already absorbed the punishment that fear dreads. The believer does not face the future with the anxious question, &ldquo;Will I be condemned?&rdquo; because the answer has already been given at the cross. &ldquo;God shows his love for us in that while we were still sinners, Christ died for us&rdquo; (Rom 5:8). The love of God is not a vague benevolence but a costly, demonstrated, blood-bought love that has dealt decisively with the very thing we are afraid of. To grasp this is to have the floor of fear drop out from under us.",
      "John is careful to speak of love being &ldquo;perfected&rdquo; in us &mdash; suggesting a process, not an instantaneous event. &ldquo;Whoever fears has not been perfected in love&rdquo; is not a condemnation of those who still struggle with fear, as though their fear proved a deficiency of faith to be ashamed of. It is, rather, a description of the direction of growth: as we are increasingly grasped by the love of God, fear progressively loses its hold. Most believers know this experientially &mdash; that on the days when God&rsquo;s love feels near and real, fear recedes; and on the days when his love feels distant and abstract, fear surges. The remedy is not to berate ourselves for fearing but to return to the love that casts fear out.",
      "This means the deepest answer to a fearful heart is not, primarily, more willpower, more techniques, or even more courage. It is a deeper experiential knowledge of being loved by God. The fearful person does not most need to be told to stop being afraid; they need to be brought again to the love of God in Christ &mdash; to hear, and to begin to believe, that they are fully known and fully loved, that there is no condemnation, that nothing &ldquo;will be able to separate us from the love of God in Christ Jesus our Lord&rdquo; (Rom 8:39). The fears that have ruled us were always, in part, the fear that we were finally alone and finally unsafe. The love of God answers exactly that.",
      "There is a beautiful order in John&rsquo;s logic: &ldquo;We love because he first loved us&rdquo; (4:19). The whole movement begins not with our love for God, which is fragile and intermittent, but with his love for us, which is unwavering. Our security does not rest on the strength of our grip on him but on the strength of his grip on us. This is why the love that casts out fear is called &ldquo;perfect&rdquo; love &mdash; it is God&rsquo;s love, complete and faithful, not our love, which is always partial. The fearful heart is invited to rest not on its own capacity to love or to believe, but on the perfect love of the One who loved us first and loves us still.",
      "To grow in freedom from fear, then, is largely to grow in the assurance of God&rsquo;s love. This is the slow work of the Christian life: meditating on the cross, receiving the Scriptures&rsquo; testimony to God&rsquo;s steadfast love, allowing the Spirit to pour that love into our hearts (Rom 5:5), and learning in the company of God&rsquo;s people that we are held. As that assurance deepens, the old fears find less and less to hold onto. They may never vanish entirely in this life, but they are progressively dethroned. The fearful heart finds its rest, finally, not in the absence of all danger but in the presence of perfect love &mdash; the love that has already faced our worst fear and overcome it.",
    ],
  },
  {
    id: "Facing Fear with Faith",
    heading: "Facing Fear with Faith: Practical Steps",
    paragraphs: [
      "Scripture does not treat fear as a sin to be ashamed of but as a reality to be brought to God and overcome by faith. Practical wisdom from the Bible and Christian tradition: First, bring the specific fear to God in prayer rather than letting it circulate vaguely &mdash; &ldquo;cast all your anxieties on him, because he cares for you&rdquo; (1 Pet 5:7). Second, fill the mind with God&rsquo;s promises; the antidote to anxious thoughts is meditation on truth (Phil 4:8). Third, remember God&rsquo;s past faithfulness &mdash; the psalmists repeatedly counter present fear by recalling what God has done. Fourth, act in faith despite the feeling of fear; courage is not the absence of fear but doing the right thing while afraid, as David faced Goliath and Esther approached the king. Fifth, lean on community &mdash; we are not meant to face fear alone. And finally, recognize that some fear is severe and clinical (panic disorder, phobias, PTSD) and may require professional help alongside spiritual practice &mdash; seeking such help is wisdom, not faithlessness. The goal is not a life without fear but a faith that is greater than the fear. &ldquo;When I am afraid, I put my trust in you&rdquo; (Ps 56:3).",
      "The first discipline &mdash; bringing the specific fear to God &mdash; is more important than it sounds. Fear thrives in vagueness. When anxiety circulates as a formless dread, it grows; when it is named, articulated, and brought into the light of prayer, it shrinks to a manageable size. Paul&rsquo;s counsel in Philippians 4:6-7 is precise: &ldquo;Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.&rdquo; The promise attached is not that the circumstances will change but that &ldquo;the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.&rdquo; To pray a specific fear is already to begin loosening its grip.",
      "The second discipline &mdash; filling the mind with truth &mdash; addresses the cognitive dimension of fear. Fear is largely a matter of attention: of what the mind dwells on, rehearses, and magnifies. The anxious mind runs catastrophic scenarios on a loop, and each repetition deepens the groove. Paul&rsquo;s counsel to dwell on &ldquo;whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely&rdquo; (Phil 4:8) is a deliberate redirection of attention. Memorizing Scripture, particularly the promises of God&rsquo;s presence and care, gives the mind something solid to return to when fear pulls it toward the abyss. This is not denial; it is the disciplined choice of what to think about.",
      "The third discipline &mdash; remembering God&rsquo;s past faithfulness &mdash; is the psalmists&rsquo; favorite weapon against fear. Again and again they counter present terror by recalling what God has done: the exodus, the deliverances, the answered prayers. &ldquo;I will remember the deeds of the Lord; yes, I will remember your wonders of old&rdquo; (Ps 77:11). Fear lives in an imagined future; memory anchors us in a real past where God has already proven faithful. David encouraged himself before Goliath by recalling the lion and the bear that God had already delivered him from (1 Sam 17:37). Keeping a record of God&rsquo;s faithfulness &mdash; answered prayers, provisions, deliverances &mdash; gives the frightened heart concrete evidence to set against its fears.",
      "The fourth discipline &mdash; acting in faith despite fear &mdash; corrects a common misunderstanding. Courage is not the absence of fear; it is doing the right thing while afraid. The Bible&rsquo;s heroes were frequently terrified. David surely felt fear facing a giant; Esther, approaching the king uninvited, said, &ldquo;if I perish, I perish&rdquo; (Esth 4:16) &mdash; the words of someone acting in spite of dread, not someone who felt none. Faith does not wait for the fear to subside before it obeys; it obeys while the fear is still present, trusting God with the outcome. Often the fear only diminishes after the obedient step is taken. Waiting to feel unafraid before acting is a recipe for paralysis; faith moves through the fear.",
      "The fifth discipline &mdash; leaning on community &mdash; recognizes that we are not meant to face fear in isolation. Fear isolates; it whispers that no one else would understand, that we must hide our anxiety, that we are alone. The body of Christ is God&rsquo;s ordinary provision against this lie. To confess our fears to trusted believers, to be prayed for, to be reminded of truth by another voice when we cannot remember it ourselves &mdash; this is essential. &ldquo;Bear one another&rsquo;s burdens&rdquo; (Gal 6:2) includes the burden of fear. Many a believer has been carried through a season of dread not by their own strength of faith but by the faith of friends who held them up.",
      "Finally, it is crucial to recognize that some fear is not merely spiritual but clinical. Panic disorder, generalized anxiety disorder, phobias, and PTSD are real conditions that involve the body and brain, and they may require professional treatment &mdash; therapy, sometimes medication &mdash; alongside spiritual practice. To seek such help is not a failure of faith any more than treating a broken bone or diabetes is. The same God who works through prayer works through doctors and counselors. A wise Christian approach holds both together: bringing fear to God in prayer and to the appropriate caregivers when the fear is severe. The goal, in every case, is not a life with no fear at all, but a faith that is greater than the fear &mdash; a trust that, even trembling, says with the psalmist, &ldquo;When I am afraid, I put my trust in you&rdquo; (Ps 56:3).",
    ],
  },
];

const videoItems = [
  { videoId: "Ghd_Gc4tQGk", title: "Tim Keller on Fear and Faith" },
  { videoId: "8gA7sfy4Lzo", title: "Do Not Be Afraid - The Bibles Most Repeated Command" },
  { videoId: "6dqJpKkqJ9w", title: "Overcoming Fear with the Gospel" },
];

export default function ChristianFearGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        {/* Hero */}
        <header style={{ marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "0.78rem", color: ACCENT, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.6rem" }}>
            Faith &amp; Fear
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Fear
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Fear through a Christian lens &mdash; the most repeated command in the Bible (&ldquo;fear not&rdquo;), the difference between godly fear and sinful fear, the fear of death and judgment, perfect love casting out fear, and practical steps for facing fear with faith.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>Isaiah 41:10</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? `rgba(107, 79, 187, 0.12)` : "transparent",
              color: tab === t ? ACCENT : MUTED,
              cursor: "pointer", fontSize: "0.88rem", fontWeight: tab === t ? 600 : 400,
              transition: "all 0.15s ease", whiteSpace: "nowrap" as const,
            }}>
              {t}
            </button>
          ))}
        </nav>

        {/* Text tab content */}
        {currentSection && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>{currentSection.heading}</h2>
            {currentSection.paragraphs.map((para, i) => (
              <p key={i} style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </section>
        )}

        {/* Videos tab */}
        {tab === "Videos" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>Videos</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {videoItems.map((video) => (
                <div key={video.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={video.videoId} title={video.title} />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <h3 style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }}>{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Closing callout */}
        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.5rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>The Antidote to Fear Is Presence</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>God does not shame us for being afraid; he meets us in our fear with his presence and his promises. The goal of faith is not a life without fear but a trust that is greater than the fear &mdash; a heart that, even trembling, can say with the psalmist, &ldquo;When I am afraid, I put my trust in you.&rdquo; Perfect love casts out fear, and that love has already faced our worst fear and overcome it at the empty tomb.</p>
        </div>
      </main>
    </div>
  );
}
