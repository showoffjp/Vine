"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["The Root of All Sin", "How God Opposes Pride", "The Humility of Christ", "True vs False Humility", "The Path to Humility", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "The Root of All Sin",
    heading: "Pride: The Root and Essence of All Sin",
    paragraphs: [
      "Few claims in the Christian tradition are as consistent or as startling as this: that pride is not merely one sin among many but the root from which every other sin grows. Augustine, Aquinas, and C.S. Lewis stand in a long line of teachers who locate at the center of the human problem not lust, not greed, not anger, but pride &mdash; the deep, self-referential turning of the soul away from God and toward itself. Augustine defined sin in the &ldquo;City of God&rdquo; as a kind of misdirected love, and he traced the first and worst disorder to pride, which he called the beginning of all sin: the soul forsaking the unchangeable Good and becoming a good unto itself. Pride, in this reading, is not a vice that sits alongside the others; it is the soil in which the whole catalog of vices takes root.",
      "C.S. Lewis gave this ancient teaching its most memorable modern expression in &ldquo;Mere Christianity,&rdquo; in the chapter he titled &ldquo;The Great Sin.&rdquo; He wrote that pride is &ldquo;the essential vice, the utmost evil&rdquo; &mdash; the sin through which the devil became the devil, and the one vice of which almost no one in the world is free, while almost everyone is convinced they are free of it. &ldquo;There is no fault,&rdquo; Lewis observed, &ldquo;which makes a man more unpopular, and no fault which we are more unconscious of in ourselves.&rdquo; The reason pride is so deadly, in his account, is that it is the &ldquo;complete anti-God state of mind&rdquo; &mdash; the posture of a self that sets itself up as the center of the universe, the throne on which only God belongs.",
      "What makes pride uniquely dangerous, Lewis argued, is that it is competitive by its very nature. The other vices may be triggered by circumstance &mdash; we are greedy for a particular thing, lustful for a particular person, angry at a particular offense &mdash; but pride takes no pleasure in having something, only in having more of it than the next person. &ldquo;Pride gets no pleasure out of having something, only out of having more of it than the next man,&rdquo; he wrote. &ldquo;It is the comparison that makes you proud: the pleasure of being above the rest.&rdquo; This is why pride is so corrosive of community and so resistant to satisfaction: it cannot rest content, because its entire energy is bent on rising above others. A proud heart can never simply enjoy a good; it must always be measuring itself against someone else.",
      "The Christian tradition reads the very first sins through this lens. The fall of Lucifer &mdash; pictured in the church&rsquo;s reflection on passages like Isaiah 14 (&ldquo;I will ascend to heaven; I will set my throne on high&hellip; I will make myself like the Most High&rdquo;) &mdash; is read as the archetype of pride: the creature&rsquo;s refusal to occupy the place of a creature and its grasping after the place of God. And the temptation in Eden follows exactly this script. The serpent&rsquo;s decisive promise is not about the fruit&rsquo;s sweetness but about status: &ldquo;you will be like God, knowing good and evil&rdquo; (Genesis 3:5). The original sin, in this account, is not primarily appetite but pride &mdash; the desire to displace God and to become the arbiter of good and evil for oneself.",
      "This is why Lewis could call pride the &ldquo;complete anti-God state of mind&rdquo; without exaggeration. Every other sin can, in a twisted way, coexist with some acknowledgment of God; but pride, in its essence, is the refusal to acknowledge any authority above the self. It is the self set up as god. Aquinas, following Augustine, defined pride (superbia) as an inordinate desire for one&rsquo;s own excellence &mdash; an appetite for self-exaltation that exceeds the bounds of reason and reverence. And he identified a closely related root, vainglory, as one of the capital vices precisely because so many other sins are committed in its service: we lie, we boast, we manipulate, we tear others down, all in pursuit of our own glory.",
      "Understanding pride as the root of all sin reframes the entire Christian moral life. If pride is the disease, then the cure cannot simply be better behavior; it must be a fundamental reorientation of the self away from its own throne and back toward God. This is why the gospel strikes at pride more directly than at any other sin. The very structure of salvation by grace &mdash; the insistence that we cannot save ourselves, that we contribute nothing to our rescue, that we are received as beggars and not as benefactors &mdash; is precisely calibrated to humble pride. Lewis noted that a proud man is always looking down on things and people, and as long as he is looking down, he cannot see what is above him. Pride, in the end, is the sin that blinds us to God by keeping our eyes fixed on ourselves.",
    ],
  },
  {
    id: "How God Opposes Pride",
    heading: "God Opposes the Proud but Gives Grace to the Humble",
    paragraphs: [
      "One principle is stated so often in Scripture, and in such nearly identical words, that it functions almost as a refrain of the whole biblical drama: &ldquo;God opposes the proud but gives grace to the humble.&rdquo; James cites it (James 4:6) and Peter cites it (1 Peter 5:5), both drawing on Proverbs 3:34. The repetition is itself a kind of emphasis. This is not a peripheral observation but a settled law of the moral universe as Scripture describes it. There is a posture of the heart that God actively resists, and there is a posture toward which his grace flows freely. The proud and the humble are not merely different temperaments; they stand in fundamentally different relationships to God.",
      "The verb in the phrase &ldquo;God opposes the proud&rdquo; is striking and deserves to be felt in its full force. It is not that God merely declines to help the proud, or gently withholds his favor; the word carries the sense of active resistance, of God setting himself against the proud as an opposing force. To be proud, in the biblical vision, is to place oneself in a posture of opposition to God &mdash; and God answers that posture in kind. There is something almost merciful in this opposition, for it is the resistance that a loving parent offers to a child running toward a cliff. God&rsquo;s opposition to pride is not arbitrary divine jealousy; it is the necessary stance of reality itself against the lie that the creature can be its own god.",
      "Proverbs gives the principle its most famous proverbial form: &ldquo;Pride goes before destruction, and a haughty spirit before a fall&rdquo; (Proverbs 16:18). This is not a threat so much as a diagnosis. Pride contains its own destruction within it, because pride is a fundamental misalignment with reality. The proud person has constructed a false picture of the world &mdash; one in which they are larger, more central, and more self-sufficient than they actually are &mdash; and reality always eventually corrects such pictures, often catastrophically. The fall is not an external punishment arbitrarily attached to pride; it is the inevitable collision between an inflated self and the hard edges of a world that does not in fact revolve around it.",
      "Scripture illustrates this principle with vivid case studies. Nebuchadnezzar, the most powerful king of his age, surveys his magnificent Babylon and declares: &ldquo;Is not this great Babylon, which I have built by my mighty power as a royal residence and for the glory of my majesty?&rdquo; (Daniel 4:30). The words are barely out of his mouth before he is humbled &mdash; driven from human society, living like a beast in the fields, until he learns &ldquo;that the Most High rules the kingdom of men&rdquo; (4:25). Only when he lifts his eyes to heaven and acknowledges God is his reason and his kingdom restored. The story is a parable of pride&rsquo;s arc: exaltation, blindness, fall, and the possibility of restoration only through humbling.",
      "The judgment can be swifter and more terrible still. In Acts 12, Herod Agrippa accepts the crowd&rsquo;s flattering cry &mdash; &ldquo;The voice of a god, and not of a man!&rdquo; &mdash; and the text says that &ldquo;immediately an angel of the Lord struck him down, because he did not give God the glory, and he was eaten by worms and breathed his last&rdquo; (Acts 12:22&ndash;23). The juxtaposition is deliberate and devastating: the man hailed as a god is reduced, in a single sentence, to food for worms. The contrast with Nebuchadnezzar, who repented, underscores the stakes. Pride that refuses the humbling becomes its own executioner.",
      "Beyond these dramatic judgments, Scripture and Christian experience testify to the quieter ways that pride destroys: it blinds and it isolates. Pride blinds because it cannot tolerate any information that threatens the inflated self &mdash; correction is felt as insult, criticism as attack, and so the proud person becomes incapable of seeing themselves truly. And pride isolates, because the competitive heart cannot truly love; it can only compare, and comparison turns every relationship into a contest. The proud person ends up alone at the top of a kingdom no one else can see, defended against the very honesty and intimacy that might have saved them. This is the long, slow destruction to which the haughty spirit leads, even when no angel strikes and no worms come.",
      "The other half of the principle is the gospel itself: God &ldquo;gives grace to the humble.&rdquo; To the one who has come to the end of pride &mdash; who has stopped defending the inflated self and is willing to stand before God as they actually are, empty-handed and needy &mdash; grace flows. This is why the tax collector who would not lift his eyes, beating his breast and crying &ldquo;God, be merciful to me, a sinner,&rdquo; went home justified rather than the self-congratulating Pharisee (Luke 18:9&ndash;14). The whole logic of grace runs against pride and toward humility. There is no other way to receive a free gift than with an open and empty hand, and pride keeps its hands clenched around its own achievements.",
    ],
  },
  {
    id: "The Humility of Christ",
    heading: "The Humility of Christ: The Supreme Model",
    paragraphs: [
      "If pride is the great sin, then humility is the great virtue &mdash; and the Christian does not learn humility primarily from a list of rules but from a person. The supreme model of humility is Jesus Christ, and the supreme text is Paul&rsquo;s great hymn in Philippians 2. There Paul appeals to the example of Christ to settle a petty congregational rivalry, and in doing so he reaches the very heights of Christian theology: &ldquo;Have this mind among yourselves, which is yours in Christ Jesus, who, though he was in the form of God, did not count equality with God a thing to be grasped, but emptied himself, by taking the form of a servant&hellip; And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross&rdquo; (Philippians 2:5&ndash;8).",
      "The movement of this passage is the exact inverse of pride. Pride grasps upward, straining to ascend, to be like God, to set its throne on high. Christ, who alone had every right to that height because he genuinely was &ldquo;in the form of God,&rdquo; moved in the opposite direction: downward. He &ldquo;did not count equality with God a thing to be grasped&rdquo; &mdash; the one being in the universe entitled to insist on his own glory refused to clutch it. Instead he &ldquo;emptied himself,&rdquo; taking the form of a servant. The Greek word, kenosis, has anchored centuries of reflection: the eternal Son did not cease to be God, but he poured himself out, veiling his glory and embracing the limitations of a creature. The descent did not stop at incarnation; it continued all the way down to death, and not merely death but the most shameful and degrading death the ancient world knew &mdash; crucifixion.",
      "This downward movement is not incidental to who God is; it reveals who God is. The proud imagination assumes that to be God is to be infinitely self-asserting, to demand service and to brook no rival. The cross shatters that assumption. It turns out that the God who made the universe is, at his very heart, self-giving love &mdash; the kind of love that empties itself for the sake of others. Humility, then, is not God lowering himself to do something beneath him; it is God revealing the truth of his own character. When Christ kneels, he is not less divine but most fully showing what divinity has always been.",
      "Nowhere is this clearer than in the upper room. On the night before his death, knowing &ldquo;that the Father had given all things into his hands, and that he had come from God and was going back to God&rdquo; (John 13:3), Jesus does the unthinkable: he rises from supper, ties a towel around his waist, and washes his disciples&rsquo; feet &mdash; the task of the lowest household slave. John frames the act precisely against the backdrop of Jesus&rsquo; full authority. It is because he knew exactly who he was, and that all things were in his hands, that he was free to take the towel. Secure identity is the soil of humble service. Then he tells them: &ldquo;If I then, your Lord and Teacher, have washed your feet, you also ought to wash one another&rsquo;s feet&rdquo; (John 13:14). He establishes downward service as the permanent pattern of his kingdom.",
      "Even the way Jesus entered Jerusalem to claim his throne was an enacted parable of humility. The prophets had foretold a king who would come &ldquo;humble and mounted on a donkey&rdquo; (Zechariah 9:9), and Jesus fulfilled it deliberately, riding not a war-horse but a borrowed colt into the city of David. The King of kings arrived in conscious lowliness, refusing every trapping of the conquering ruler the crowds expected. His whole life was a sustained subversion of the human assumption that greatness means rising above others. &ldquo;Whoever would be great among you must be your servant,&rdquo; he told his status-seeking disciples, &ldquo;and whoever would be first among you must be slave of all. For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many&rdquo; (Mark 10:43&ndash;45).",
      "And Jesus issued an invitation that pride can never accept but the weary soul longs to hear: &ldquo;Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls&rdquo; (Matthew 11:28&ndash;29). It is the only place in the Gospels where Jesus describes his own heart, and the words he chooses are &ldquo;gentle and lowly.&rdquo; The center of the divine character, made flesh, is not severity or self-importance but lowliness. To &ldquo;learn from him&rdquo; is therefore not first to acquire information but to absorb a disposition &mdash; to let the gentle, lowly heart of Christ reshape the proud, anxious, self-protecting heart of the disciple.",
      "This is why the Christian pursuit of humility is never a matter of mere self-improvement. We do not become humble by gritting our teeth and trying harder to think lowly thoughts. We become humble by beholding Christ &mdash; by gazing so long and so lovingly at the one who emptied himself for us that something of his gentleness begins to seep into us. Humility is, finally, a fruit of communion with the humble Christ. The more we know the love that stooped to wash our feet and die in our place, the more the grasping, comparing, self-exalting reflexes of pride lose their grip, and the freer we become to take the towel ourselves.",
    ],
  },
  {
    id: "True vs False Humility",
    heading: "True Humility and Its Counterfeits",
    paragraphs: [
      "One of the great obstacles to humility is that we so often mistake other things for it &mdash; and, just as dangerously, mistake legitimate goods for pride. Not every form of self-regard is sinful pride, and not every form of self-abasement is genuine humility. The Christian tradition has always insisted that sin lies not in the things God made good but in their disordering, and the same applies here. Healthy self-respect, appropriate confidence, and honest joy in good work are not the enemies of humility; they are often its companions. To despise the gifts and capacities God has given you is not humility at all &mdash; it is a kind of ingratitude dressed up in pious clothing.",
      "Consider healthy self-respect. The same Scripture that condemns pride also affirms that human beings are made in the image of God, crowned with glory and honor (Psalm 8). To know one&rsquo;s own dignity as a beloved creature of God, to refuse to be treated as worthless, to carry oneself with the quiet confidence of one who is loved &mdash; this is not pride. A person can stand up straight before others without standing over them. The difference between self-respect and pride is not the presence of a self but the orientation of that self: self-respect rests in a worth received as a gift, while pride strains to manufacture a worth by rising above others.",
      "The same is true of appropriate confidence and of joy in good work. A surgeon who knows she is skilled, a craftsman who takes satisfaction in a job done well, an athlete confident in his training &mdash; none of these is necessarily proud. Indeed, false modesty about genuine competence can be its own subtle dishonesty. The biblical writers were not embarrassed to acknowledge their callings and gifts. Paul could speak frankly of his labors and even his sufferings, while insisting that whatever he was, he was &ldquo;by the grace of God&rdquo; (1 Corinthians 15:10). That little phrase is the hinge. Confidence becomes pride precisely when it forgets that everything it has was received, and begins to imagine that it is self-made.",
      "This points to one of the most clarifying definitions of humility in the modern tradition, an insight often attributed to C.S. Lewis: that humility is &ldquo;not thinking less of yourself but thinking of yourself less.&rdquo; Whatever its exact origin, the saying captures something profoundly true. The humble person is not someone consumed with how lowly they are &mdash; for that is still to be consumed with the self, only with a negative balance. True humility is a kind of self-forgetfulness, a freedom from the exhausting project of constantly assessing one&rsquo;s own standing. The humble person, Lewis suggested, is not what we expect: not an oily, groveling figure forever telling you he is nobody, but a cheerful, intelligent person genuinely interested in you, because he has stopped being obsessed with himself.",
      "This exposes one of pride&rsquo;s most cunning disguises: false humility. There is a self-deprecation that is not humility at all but pride in reverse &mdash; the studied lowliness that fishes for affirmation, the &ldquo;oh, I&rsquo;m terrible at this&rdquo; offered in hope of being contradicted, the refusal of every compliment that secretly demands the compliment be repeated. This counterfeit keeps the self firmly at the center of attention, merely wearing the mask of modesty. The tradition has long warned against it. To be endlessly preoccupied with one&rsquo;s own unworthiness is still to be endlessly preoccupied with oneself. False humility is pride that has learned to talk like a saint while still demanding the spotlight.",
      "Another counterfeit is the false humility of self-hatred, which can masquerade as Christian lowliness but is in fact a refusal to receive God&rsquo;s verdict. To loathe oneself, to be unable to accept love or forgiveness, to insist on one&rsquo;s own irredeemable worthlessness &mdash; this is not the humility of the gospel. It is, in a strange way, a kind of pride: an insistence that one&rsquo;s own assessment of oneself outweighs God&rsquo;s, that one&rsquo;s sin is somehow beyond the reach of grace. True humility actually requires the courage to accept being loved and forgiven, to let God have the final word about one&rsquo;s worth rather than clinging to one&rsquo;s own harsher and more self-centered verdict.",
      "True humility, then, is rooted in truth &mdash; the truth about both our smallness and our belovedness held together. It sees clearly that we are creatures, not the Creator; sinners in need of grace, not self-sufficient heroes; recipients of every good gift, not its source. But it also sees that we are loved, dignified, and called &mdash; not worthless, but worth the blood of Christ. The humble person can hear both their faults and their praise without being unsettled by either, because their identity does not rest on their own performance. This is the freedom toward which humility points: not a low view of self, but a true view of self, held lightly, in the secure light of God&rsquo;s love.",
    ],
  },
  {
    id: "The Path to Humility",
    heading: "The Path to Humility: Gospel Self-Forgetfulness",
    paragraphs: [
      "Here we arrive at the great paradox of humility, the one that has tripped every sincere seeker after it: humility cannot be achieved by trying to be humble. The moment you congratulate yourself on your progress in humility, you have lost it. C.S. Lewis warned that if anyone thinks he is not conceited, he is very conceited indeed. The proud self is endlessly resourceful; it will gladly take up the project of becoming humble and turn it into one more arena for competition and self-congratulation. &ldquo;Look how humble I have become&rdquo; is, of course, a perfectly proud thought. The direct pursuit of humility, undertaken by the will alone, collapses into pride at the moment it appears to succeed.",
      "If humility cannot be willed into being directly, how does it grow? The answer the gospel gives is that humility grows indirectly &mdash; as a by-product of seeing oneself truly in the light of God&rsquo;s grace. The gospel humbles and lifts at the same time. It humbles us by telling us the truth we most resist: that we are sinners, more flawed and more lost than we ever dared admit, unable to save ourselves. And in the same breath it lifts us higher than we ever dared hope: that we are loved, accepted, and welcomed in Christ, not because of our worth but because of his. To hold both truths together &mdash; deeply sinful, yet deeply loved &mdash; is the very posture of humility, and it is a gift the gospel gives, not an achievement we produce.",
      "This is what some have called gospel humility, or gospel self-forgetfulness. When my identity rests entirely on the unearned love of God in Christ, the frantic engine of pride finally has nothing to do. I no longer need to prove myself, to win every comparison, to defend my fragile reputation, because my worth is settled by a verdict that has already been rendered in my favor and cannot be revoked. The blessed result is that I can stop thinking about myself so much. I am free to forget myself &mdash; not to despise myself, but simply to lose the exhausting habit of self-reference. This is the freedom of self-forgetfulness, and it is the truest and most liberating form of humility.",
      "From this gospel root, several practical disciplines help humility grow. The first is service. Humility is learned not in contemplation but on our knees with a towel in hand, doing the lowly tasks that pride considers beneath it. When we deliberately serve others &mdash; especially in ways that bring no recognition, for people who cannot repay us &mdash; we are walking the downward path of Christ, and the proud heart is slowly retrained. Jesus did not merely teach humility; he washed feet, and he told us to do likewise. Hidden, unglamorous service is one of God&rsquo;s ordinary schools of humility.",
      "A second discipline is gratitude. Pride is sustained by the illusion that we are self-made, that our gifts and successes are our own achievements. Gratitude shatters that illusion by training us to recognize that all is gift &mdash; our existence, our breath, our abilities, our opportunities, the love we have received, the faith we hold. &ldquo;What do you have that you did not receive?&rdquo; Paul asks. &ldquo;And if you received it, why do you boast as though you did not?&rdquo; (1 Corinthians 4:7). The grateful person cannot easily be proud, because gratitude keeps before the eyes the constant truth that everything good has come from a hand other than their own. To cultivate thankfulness is to starve pride of its food.",
      "A third discipline is the willingness to accept correction. Pride recoils from criticism, treating every rebuke as an attack to be repelled. Humility, by contrast, can receive correction as a gift &mdash; can say &ldquo;you are right, I was wrong,&rdquo; can be taught, can change its mind. &ldquo;Let a righteous man strike me &mdash; it is a kindness,&rdquo; says the psalmist (Psalm 141:5). Few practices expose and dismantle pride more effectively than learning to genuinely welcome the truth about ourselves from others, even when it stings. The person who can apologize sincerely, who can be challenged without becoming defensive, who can take rebuke as medicine rather than insult, is being formed in real humility.",
      "Underlying all of these is the daily death to self that the Christian life requires &mdash; what Jesus called taking up the cross daily and following him (Luke 9:23). Humility is not won in a single decisive battle but in ten thousand small surrenders: the choice to let another go first, to leave the last word unspoken, to forgive the slight, to share the credit, to serve unseen. Each is a little dying of the proud self, and each makes a little more room for the gentle, lowly heart of Christ to take shape in us. The path to humility is therefore not a technique to be mastered but a lifelong journey of being remade &mdash; until, in the freedom of self-forgetfulness, we finally find the rest that Christ promised to those who learn from him.",
    ],
  },
];

const videoItems = [
  { videoId: "Mqp_25p7iMU", title: "Tim Keller on Pride and Self-Forgetfulness" },
  { videoId: "Vl9u29UEpkE", title: "C.S. Lewis on Pride - The Great Sin" },
  { videoId: "1Ot5IGBClwo", title: "The Humility of Christ - Philippians 2" },
];

export default function ChristianPrideHumilityGuidePage() {
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
            Faith &amp; Character
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Pride and Humility
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Pride and humility through a Christian lens &mdash; why pride is called the root and essence of all sin, how God opposes the proud, the self-emptying humility of Christ, the difference between true humility and its counterfeits, and the gospel path to self-forgetfulness.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;God opposes the proud but gives grace to the humble.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>James 4:6</p>
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
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>The Freedom of Self-Forgetfulness</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>Pride cannot be conquered by trying harder to be humble &mdash; it can only be undone by the gospel. When our worth rests entirely on the unearned love of God in Christ, the frantic engine of comparison and self-defense finally falls silent. We are freed not to think less of ourselves, but to think of ourselves less &mdash; and to take up the towel, as the gentle and lowly Christ took it up for us.</p>
        </div>
      </main>
    </div>
  );
}
