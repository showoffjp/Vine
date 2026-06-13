"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Fruit of the Spirit", "Mastering the Passions", "Taming the Tongue", "Discipline and Training", "Freedom in Self-Mastery", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Fruit of the Spirit",
    heading: "Self-Control as the Final Fruit of the Spirit",
    paragraphs: [
      "When Paul reaches the end of his list of the fruit of the Spirit in Galatians 5:22-23, the final quality he names is self-control: &ldquo;love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control.&rdquo; The Greek word is &ldquo;enkrateia,&rdquo; which means literally &ldquo;mastery&rdquo; or &ldquo;the ability to hold oneself in&rdquo; &mdash; the power to govern oneself, to rule one&rsquo;s own desires, impulses, and appetites rather than being ruled by them. It is a fitting climax to the list, for in a sense self-control is what makes all the other fruit possible: without the capacity to govern ourselves, our love is inconstant, our patience collapses, and our gentleness gives way to impulse.",
      "There is a profound paradox at the very heart of this fruit. We naturally think of self-control as the supreme act of willpower &mdash; the white-knuckled clenching of the jaw, the heroic exertion of the self against the self. But Paul calls it a fruit of the Spirit. It is not self-generated; it is Spirit-produced. The control in &ldquo;self-control&rdquo; is real, but its source is not the unaided self. This is one of the great mysteries of the Christian life: the Spirit produces in us a genuine mastery over ourselves, so that the discipline is truly ours, truly exercised by us, and yet it is grace from beginning to end. We work out what God works in (Philippians 2:12-13).",
      "This reframes the whole struggle. The person trying to gain self-control purely by gritting their teeth will eventually exhaust their willpower and collapse, because willpower is a finite and depletable resource. But the person who walks by the Spirit finds that self-mastery grows in them as fruit grows on a branch &mdash; organically, over time, as the byproduct of a life rooted in Christ. This does not mean effort is unnecessary; the language of fruit does not imply passivity. It means that our effort is empowered, that we strain and discipline ourselves while leaning the whole time on a strength not our own.",
      "It is illuminating to set self-control against the works of the flesh that Paul lists just before the fruit (Galatians 5:19-21): &ldquo;sexual immorality, impurity, sensuality, idolatry, sorcery, enmity, strife, jealousy, fits of anger, rivalries, dissensions, divisions, envy, drunkenness, orgies, and things like these.&rdquo; What is striking is that nearly every one of these is precisely a failure of self-control &mdash; a loss of governance over the passions. Sexual immorality, fits of anger, drunkenness, orgies: these are the marks of a self that has been overrun by its own appetites. The works of the flesh are, in large part, what self-control prevents. The flesh is the self in revolt against its own proper rule.",
      "So self-control stands as a kind of guardian over the whole of the Christian character. It is the inner government that keeps the appetites in their proper place &mdash; not denying them, for many of them are good gifts of God, but ordering them, ranking them, ensuring that the lower does not usurp the higher. A life without self-control is a life at the mercy of whatever desire happens to be strongest in the moment. A life with self-control is a life in which the deepest commitments and the truest loves govern the passing impulses, rather than the reverse.",
      "Because it is the final fruit named, self-control has sometimes been treated as a kind of summary or capstone of the whole list &mdash; the quality that secures and protects all the rest. There is wisdom in this. The Spirit who produces love also produces the self-mastery that keeps love faithful; the Spirit who produces peace also produces the self-control that keeps us from the fits of anger that shatter peace. To pray for self-control is therefore not a narrow request; it is a prayer that God would make us people whose inner life is ordered, governed, and free &mdash; people in whom the Spirit reigns all the way down to the level of our impulses and desires.",
    ],
  },
  {
    id: "Mastering the Passions",
    heading: "Mastering the Passions",
    paragraphs: [
      "The Bible has a clear-eyed understanding of disordered desire. The Greek word &ldquo;epithumia&rdquo; can simply mean strong desire, but in the New Testament it most often carries the negative sense of craving that has slipped its proper bounds &mdash; lust, covetousness, the appetite that has become a tyrant. The passions, in this sense, are not evil in themselves; they are good desires that have become disordered, that have escaped the governance of reason and faith and now drive us rather than serve us. Mastering the passions is not about killing desire but about reordering it, putting each appetite back in its proper place beneath the love of God.",
      "Paul gives the practical strategy in Romans 13:14: &ldquo;Put on the Lord Jesus Christ, and make no provision for the flesh, to gratify its desires.&rdquo; The phrase &ldquo;make no provision&rdquo; is shrewd. It recognizes that the battle against disordered desire is usually won or lost long before the moment of temptation, in the decisions about what provision we make &mdash; what we keep within reach, what we feed our minds, what situations we deliberately walk into. The mastered passion is often the passion we have starved by refusing to provision it. We cannot always control the first stirring of desire, but we have enormous control over whether we lay in supplies for its gratification.",
      "Paul uses himself as the example of strenuous self-mastery in 1 Corinthians 9:27: &ldquo;I discipline my body and keep it under control, lest after preaching to others I myself should be disqualified.&rdquo; The verb he uses is vivid &mdash; it means to strike under the eye, to beat black and blue, the language of a boxer pummeling an opponent into submission. Paul treats his own body and its appetites as something to be brought into subjection, not indulged at every prompting. And his motivation is sobering: even the great apostle feared that an unmastered appetite could disqualify him. No one is so spiritually advanced that they can safely stop disciplining their desires.",
      "It is essential to distinguish between healthy, God-given appetites and their disordered misuse, because the failure to do so leads either to indulgence or to a false asceticism that treats the body as evil. Hunger is good; God made us to eat and gave us food richly to enjoy. Sexual desire is good; God made it and called it very good within its proper covenantal home. The desire for rest, for pleasure, for achievement &mdash; these are gifts. The problem is never the appetite as such but its disordering: when the good desire for food becomes gluttony, the good desire for sex becomes lust, the good desire for rest becomes sloth. Self-control does not despise the appetites; it restores them to their right order and measure.",
      "Behind all of this lies the war Paul describes in Galatians 5:17: &ldquo;For the desires of the flesh are against the Spirit, and the desires of the Spirit are against the flesh, for these are opposed to each other, to keep you from doing the things you want to do.&rdquo; The Christian life is lived in the middle of this conflict. There is no neutral ground, no demilitarized zone where the appetites are simply left to themselves. To walk by the Spirit is to be at war with the disordered cravings of the flesh, and to indulge the flesh is to grieve the Spirit. The mastery of the passions is not a one-time conquest but a daily campaign, won and lost and won again in countless small skirmishes.",
      "Yet this war is not fought in despair, for the outcome is assured in Christ. The flesh, though still active, no longer reigns over the believer; its dominion was broken at the cross, and the Spirit who indwells us is stronger than the cravings that assail us. So we fight the passions not as those uncertain of victory but as those who have already been freed from their ultimate tyranny and are now learning, day by day, to live out that freedom. The mastery of the passions is the steady, Spirit-empowered translation of an accomplished freedom into the concrete habits of an ordered life.",
      "Practically, mastering the passions means learning to recognize the early stirrings of disordered desire and to respond before they gather momentum, for a craving caught early is far more easily mastered than one indulged until it roars. It means cultivating the deeper loves that crowd out the lesser ones &mdash; for the surest way to master a wrong desire is often to be captured by a stronger and better one. The heart governed by a great love for God finds the tyranny of small cravings progressively loosened, until the passions that once ruled become servants of a life ordered toward him.",
    ],
  },
  {
    id: "Taming the Tongue",
    heading: "Self-Control Over the Tongue, Appetite, and Anger",
    paragraphs: [
      "Self-control is not an abstraction; it is tested in specific arenas of daily life, and Scripture names them with precision. Three stand out as the classic battlegrounds where the presence or absence of self-mastery becomes most visible: the tongue, the appetite, and anger. These are the places where the ungoverned self most readily spills out, and where the Spirit&rsquo;s work of producing enkrateia is most concretely needed. A person&rsquo;s real measure of self-control can be read in how they speak, how they eat and drink, and how they handle provocation.",
      "James devotes an entire chapter to the tongue, and his verdict is stark: &ldquo;If anyone does not stumble in what he says, he is a perfect man, able also to bridle his whole body&rdquo; (James 3:2). He treats the control of speech as the supreme test of self-mastery &mdash; if you can govern your tongue, you can govern everything. He compares the tongue to the bit in a horse&rsquo;s mouth and the rudder of a ship: a tiny thing that steers the whole. And he warns of its destructive power: &ldquo;How great a forest is set ablaze by such a small fire!&rdquo; (3:5). The unguarded word, the cutting remark, the gossip, the lie, the angry outburst &mdash; these are failures of self-control that do enormous damage, and the bridling of the tongue is among the hardest and most revealing of all disciplines.",
      "The appetite for food and drink is the second great arena, and Scripture is candid about the dangers of gluttony and drunkenness. These sins are easy to minimize because they are so ordinary, yet the Bible takes them seriously as failures of self-mastery in which a good appetite has become a ruling craving. Drunkenness is named among the works of the flesh; Proverbs warns repeatedly against the bondage of wine; and gluttony is treated as a failure to govern one of the most basic appetites. The point is not that food and drink are evil &mdash; they are gifts &mdash; but that the person who cannot say no to their own appetite at the table is being trained in a habit of yielding that will weaken them everywhere else.",
      "Anger is the third arena, and Proverbs gives it one of its most memorable lines: &ldquo;Whoever is slow to anger is better than the mighty, and he who rules his spirit than he who takes a city&rdquo; (Proverbs 16:32). The image is striking. The conquest of a fortified city was the supreme feat of ancient strength, yet Scripture ranks the mastery of one&rsquo;s own temper above it. The person who can rule their own spirit in the face of provocation has achieved something greater than military glory. Anger is not always sinful &mdash; there is a righteous anger &mdash; but the ungoverned, quick, explosive anger that the self-controlled person learns to restrain is among the most destructive of the failures of self-mastery.",
      "To these three the Bible adds sexual desire as a fourth crucial arena, perhaps the one where the stakes of self-control are highest and the consequences of failure most far-reaching. Paul repeatedly links self-control to sexual purity, urging believers to control their own bodies in holiness and honor rather than in the passion of lust like those who do not know God (1 Thessalonians 4:3-5). In an age saturated with sexual stimulation, the disciplined governance of this powerful and good desire is one of the defining tests of Christian self-mastery, and one of the areas where making no provision for the flesh is most urgently practical.",
      "What unites all these arenas is that each involves a powerful, often good, impulse that demands immediate gratification and must instead be brought under the governance of a higher loyalty. The tongue wants to speak the cutting word now; the appetite wants the extra indulgence now; the temper wants to explode now; desire wants its object now. Self-control is the Spirit-given capacity to insert a space between impulse and action &mdash; to pause, to weigh, to choose against the immediate craving for the sake of a greater good. That small space, repeated and strengthened over time, is where character is forged.",
      "It is encouraging to notice that growth in any one of these arenas tends to strengthen the others, for they all draw on the same Spirit-produced capacity to govern the self. The person who learns to bridle the tongue is being trained in the same self-mastery that restrains the appetite and cools the temper. This is why the disciplines that target one appetite, such as fasting, can produce strength that shows up everywhere. The Spirit is forming a single, unified character of self-government, expressed in many particular battles but rooted in one transformed and ordered heart.",
    ],
  },
  {
    id: "Discipline and Training",
    heading: "Discipline and Training",
    paragraphs: [
      "Self-control is not merely received in a moment; it is cultivated over time through the spiritual disciplines. While enkrateia is a fruit of the Spirit, the Spirit characteristically produces it through the practices that train and strengthen the soul&rsquo;s capacity for self-governance. The disciplines are not ways of earning God&rsquo;s favor but means of grace &mdash; arenas in which we place ourselves before God and cooperate with his work of forming us. Among these, several have a direct bearing on the development of self-control.",
      "Fasting is the discipline that most directly trains the appetite. By voluntarily abstaining from food for a time, the believer practices the very thing self-control requires everywhere else: saying no to a clamoring physical craving for the sake of a higher good. Fasting teaches the body that it is not in charge, that the appetite can be denied without catastrophe, that the self can govern its own hunger. This is why fasting has always been understood as foundational training for self-mastery. The person who has learned, through fasting, that they can say no to the most basic of appetites is being equipped to say no to lesser cravings as well.",
      "Prayer and solitude train self-control in a different but related way. In solitude we are removed from the constant stimulation and distraction that keep the disordered self reactive and impulsive; we learn to be still, to be alone with God, to govern the restless craving for noise and novelty. In prayer we bring our desires before God, name them, surrender them, and ask for the strength to order them rightly. The deliberate practice of saying no to lesser desires for the sake of greater goods &mdash; the very essence of self-control &mdash; is built into the rhythm of a disciplined devotional life. We are training the muscle of refusal in the presence of God.",
      "Paul reaches for the athletic metaphor to capture all of this in 1 Corinthians 9:24-27: &ldquo;Every athlete exercises self-control in all things. They do it to receive a perishable wreath, but we an imperishable.&rdquo; The image is the disciplined training of the competitor &mdash; the runner who orders their whole life around the race, who denies themselves many lawful things for the sake of the prize, who submits to a regimen of rigorous training. Self-control, Paul implies, is like athletic conditioning: it is built up through consistent, deliberate practice, and it cannot be improvised in the moment of competition. The athlete who has not trained will fail when the race comes; the believer who has not practiced self-denial will fail when temptation comes.",
      "This points to the crucial role of habit and the slow formation of character. Self-control is not chiefly a matter of dramatic, heroic exertions but of the accumulated weight of countless small choices that gradually form a settled disposition. Every time we choose the greater good over the immediate craving, we strengthen the habit; every time we indulge, we weaken it. Character is the long-term residue of these repeated choices. This is why the formation of self-control is patient work, measured in years rather than moments, and why the disciplines must be sustained over time rather than attempted in occasional bursts of resolve.",
      "It is vital to insist that this is grace-empowered effort, not legalism. The danger in all talk of discipline and training is that it can slide into a self-reliant project of moral self-improvement, a striving to master ourselves by our own strength in order to earn standing before God. That is precisely what the gospel excludes. The disciplines are not the flesh straining to perfect itself; they are the means by which we put ourselves in the path of grace and cooperate with the Spirit&rsquo;s work. The effort is real and strenuous, but it is empowered effort &mdash; we labor, yet it is the grace of God working in us (1 Corinthians 15:10).",
      "Held together, then, the truth is paradoxical but coherent: self-control is a fruit of the Spirit that we nonetheless cultivate through disciplined effort. There is no contradiction here, only the ordinary pattern of the Christian life, in which we work because God is at work in us. We fast and pray and practice self-denial not to manufacture a self-control that God then rewards, but to dispose ourselves to the Spirit who produces it. The athlete trains; the Spirit gives the strength; and over time a person genuinely incapable of governing themselves becomes, by grace, a person who can.",
    ],
  },
  {
    id: "Freedom in Self-Mastery",
    heading: "Freedom in Self-Mastery",
    paragraphs: [
      "We come now to the great paradox that overturns our intuitions about self-control: it is not bondage but freedom. To the modern ear, self-control sounds like restriction, the curtailing of desire, the saying of no &mdash; a diminishment of the self. The culture tells us that freedom means the unimpeded satisfaction of whatever we happen to want, and that any limit on desire is a limit on freedom. The Christian vision turns this completely on its head. It insists that the person enslaved is precisely the one who must obey every desire, and that the self-controlled person is the truly free one.",
      "Peter states the principle directly: &ldquo;Whatever overcomes a person, to that he is enslaved&rdquo; (2 Peter 2:19). This is the key to the whole matter. The person who cannot say no to a desire is owned by it; the desire, not the person, is in charge. The one who must have the drink, the substance, the indulgence, the outburst &mdash; whatever it is they cannot refuse &mdash; is a slave to it, however much they may speak of freedom. The ungoverned appetite does not liberate; it masters. And a self ruled by its own cravings is not free at all but is dragged about by whatever impulse happens to be strongest in the moment.",
      "Here lies the great deception at the heart of disordered desire: it promises freedom but delivers slavery. Every temptation comes dressed as liberation &mdash; throw off the restriction, satisfy the craving, be free to do what you want. But the actual trajectory of indulgence runs the opposite way. What begins as a chosen pleasure becomes a need, then a compulsion, then a chain. The promise was freedom; the delivery is bondage. This is the universal grammar of sin, and it is why the serpent&rsquo;s offer in Eden was a lie: the freedom it promised was the doorway to a slavery from which humanity could not, by itself, escape.",
      "Addiction is the clearest and most tragic illustration of this dynamic. No one sets out to become an addict; everyone begins with what feels like a free choice, an exercise of liberty. But the substance or behavior that promised pleasure and escape slowly becomes a tyrant that demands ever more and gives ever less, until the person who began by indulging a desire is now ruled by it, unable to stop even when they desperately want to. Addiction lays bare the truth about all disordered desire: that the path of unrestrained craving leads not to freedom but to the most abject slavery a human being can know.",
      "By contrast, the self-controlled person possesses a genuine liberty &mdash; the freedom of a life governed by the Spirit rather than driven by impulse. To be able to say no to a craving is to be free; to be able to choose the good even when the appetite pulls toward the immediate is to be one&rsquo;s own master under God. This is not the cold freedom of having no desires but the rich freedom of having ordered desires, of being able to enjoy good things without being enslaved by them, of being driven by deep commitments rather than passing impulses. The self-controlled person is free precisely because they are not at the mercy of their own appetites.",
      "There is a further dimension: this freedom is not finally self-generated but is the fruit of being mastered by the right Master. The Christian paradox is that we become free not by belonging to no one but by belonging to Christ, whose service is perfect freedom. The Spirit who produces self-control liberates us from the tyranny of disordered desire and brings us under the gentle rule of God, and it is precisely there, governed by the Spirit, that we discover what we could never find in the unrestrained pursuit of our cravings: a self that is finally its own, ordered, and free.",
      "So self-control turns out to be the gateway to a free, ordered, and flourishing life. Far from being the grim suppression of the self, it is the condition under which the self can finally flourish &mdash; can love faithfully, work fruitfully, enjoy God&rsquo;s good gifts without being destroyed by them, and live for purposes larger than the next craving. The person mastered by their passions is a slave; the person whom the Spirit has taught to govern themselves is free. And that freedom &mdash; the liberty of a life ordered toward God and no longer driven by impulse &mdash; is one of the richest gifts the gospel brings.",
    ],
  },
];

const videoItems = [
  { videoId: "Wj7g5dwBs3w", title: "Self-Control as a Fruit of the Spirit" },
  { videoId: "yQ0xT1Hn0Hk", title: "Mastering Your Passions - A Biblical View" },
  { videoId: "lL0g3SDCQ9k", title: "Self-Control and Spiritual Discipline" },
];

export default function ChristianSelfControlGuidePage() {
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
            Christian Guide to Self-Control
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Self-control through a Christian lens &mdash; the final fruit of the Spirit, mastering the disordered passions, governing the tongue, appetite, and anger, the role of spiritual disciplines and training, and the surprising freedom that comes from godly self-mastery.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;Whoever is slow to anger is better than the mighty, and he who rules his spirit than he who takes a city.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>Proverbs 16:32</p>
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
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>Self-Control Is the Doorway to Freedom</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>Whatever overcomes a person, to that he is enslaved. Disordered desire promises freedom and delivers bondage; self-control, the final fruit of the Spirit, delivers the genuine liberty of a life governed by the Spirit rather than driven by impulse. It is not self-generated willpower but grace-empowered mastery &mdash; cultivated through discipline, and leading to a free, ordered, and flourishing life.</p>
        </div>
      </main>
    </div>
  );
}
