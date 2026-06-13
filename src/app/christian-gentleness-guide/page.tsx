"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Fruit of the Spirit", "The Gentleness of Jesus", "Strength Under Control", "Gentleness in Conflict", "A Gentle and Quiet Spirit", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Fruit of the Spirit",
    heading: "Gentleness as a Fruit of the Spirit",
    paragraphs: [
      "When Paul lists the fruit of the Spirit in Galatians 5:22-23 &mdash; &ldquo;love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control&rdquo; &mdash; he places gentleness near the end, as if it were the ripened summary of all that the Spirit produces in a transformed life. The Greek word translated &ldquo;gentleness&rdquo; is <em>prautes</em>, sometimes rendered &ldquo;meekness.&rdquo; It is one of the most misunderstood words in the New Testament, and recovering its true meaning is essential to understanding what kind of people the Spirit of God is forming us to be.",
      "The common misunderstanding is that gentleness is weakness &mdash; that to be gentle is to be timid, passive, spineless, or easily pushed around. In a culture that prizes assertiveness, dominance, and the loud projection of strength, gentleness can sound like a liability, the temperament of those who lack the nerve to stand up for themselves. But this is a profound distortion. The biblical word <em>prautes</em> describes nothing of the kind. It is not the absence of strength but the presence of a particular kind of strength &mdash; strength that has been brought under control, power that has learned restraint, force that has been disciplined by love.",
      "Gentleness, in its true biblical meaning, is a Spirit-produced disposition of mildness, humility, and considerate treatment of others. It is the settled temper of soul that responds to people with warmth rather than harshness, that handles others &mdash; especially the weak, the wounded, and the wrong &mdash; with care rather than violence. The gentle person is not driven by the need to win every argument, to dominate every room, to assert themselves at every turn. They have nothing to prove, because their identity rests secure in God, and so they can afford to be tender.",
      "It is significant that gentleness is a <em>fruit</em> of the Spirit and not an achievement of willpower. We cannot simply decide to become gentle and accomplish it by gritted determination. Gentleness grows organically out of a life rooted in Christ, watered by the Spirit, abiding in the vine. As the Spirit works on the proud and defensive heart &mdash; humbling it, softening it, freeing it from the anxious need for self-protection &mdash; gentleness begins to emerge as the natural expression of a soul at rest in God. It is supernatural produce, not natural temperament.",
      "This means that gentleness is available to every Christian, regardless of natural personality. Some people are temperamentally mild and others are temperamentally fierce, but the gentleness Paul describes is not a matter of native disposition. The naturally mild person may merely be conflict-avoidant, while the naturally fierce person, transformed by the Spirit, may become the most genuinely gentle of all &mdash; their considerable strength now harnessed to the service of love. Gentleness is a fruit the Spirit grows in all kinds of soil.",
      "Ancient writers used <em>prautes</em> to describe a wild animal that had been tamed &mdash; a horse broken to the bridle, retaining all its power but now responsive to the rider&rsquo;s gentlest touch. This is the picture Scripture offers of the gentle Christian: not a weakened person but a strong person who has surrendered their strength to a higher control. The gentle soul has been tamed by grace. And because gentleness is the fruit of a heart that has been mastered by God, it stands as one of the clearest evidences that the Spirit is genuinely at work within a believer.",
      "To pursue gentleness, then, is not to pursue weakness but to pursue the kind of strength that the world cannot manufacture and rarely understands. It is to become someone in whose presence the fragile feel safe, the guilty feel hope, and the hurting feel held. In a world of sharp edges, the gentle Christian carries the unmistakable aroma of Christ &mdash; and that aroma is the Spirit&rsquo;s own work, growing quietly toward harvest.",
    ],
  },
  {
    id: "The Gentleness of Jesus",
    heading: "The Gentleness of Jesus",
    paragraphs: [
      "If we want to know what gentleness truly looks like, we look to Jesus &mdash; and in one remarkable passage he tells us about his own heart in his own words. &ldquo;Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls&rdquo; (Matthew 11:28-29). This is the only place in all the Gospels where Jesus directly describes his own heart, the inner disposition of the Son of God. And of all the words he could have chosen, he chose these: gentle and lowly.",
      "Think of the weight of that revelation. The eternal Son, through whom the worlds were made, who will return as the judge of the living and the dead, opens up his very heart to us &mdash; and what we find there is not severity, not reluctance, not a grudging tolerance of sinners, but gentleness. He is not harsh with the weak. He is not impatient with the struggling. He does not stand at a distance, arms crossed, waiting for us to clean ourselves up. His deepest instinct toward the labored and heavy-laden is to draw them in and give them rest.",
      "The prophet Isaiah had foretold exactly this quality in the coming Messiah: &ldquo;A bruised reed he will not break, and a smoldering wick he will not quench&rdquo; (Isaiah 42:3, quoted in Matthew 12:20). A bruised reed is a fragile thing, already crushed, fit only to be snapped and discarded. A smoldering wick is a dying flame, more smoke than light, the natural thing to extinguish. But the gentleness of Jesus is such that he does not break what is bruised or quench what is barely burning. He tends the flickering flame. He binds up the bent reed. The very people the world discards are the people he gathers.",
      "Dane Ortlund&rsquo;s book <em>Gentle and Lowly</em> has helped countless believers rediscover this tender heart of Christ. Ortlund draws out the startling truth that the Lord Jesus is not reluctant to love sinners and sufferers but is most deeply himself when he is doing so. His gentleness is not a mood he occasionally adopts but the settled disposition of his heart. We tend to assume that God is fundamentally stern and only grudgingly kind, that his patience with us is wearing thin. But Jesus reveals a heart whose default setting, whose natural gravitational pull, is gentleness toward the very people who least deserve it.",
      "We see this gentleness everywhere in the Gospels. He takes children into his arms and blesses them when the disciples would shoo them away. He stops for the bleeding woman who touches the edge of his garment and calls her &ldquo;daughter.&rdquo; He does not condemn the woman caught in adultery but sends her away in dignity and hope. He weeps at the tomb of his friend. He restores Peter, who denied him, not with rebuke but with a threefold commission of love. At every turn, the strong and holy Son of God handles broken people with exquisite tenderness.",
      "This gentleness is not softness about sin &mdash; Jesus speaks the hardest words in Scripture against hypocrisy and pride, overturning the tables of the money-changers and pronouncing woes upon the self-righteous. His gentleness is reserved for the bruised and the burdened, while his severity falls on the proud who crush them. This is the divine pattern: tender toward the weak, fierce toward the oppressor. True gentleness, then, is not undiscerning niceness but a strength that knows exactly where to be tender.",
      "For the Christian, the gentleness of Jesus is both refuge and pattern. It is refuge because we come to him not as to a stern taskmaster but as to a gentle Savior whose heart is drawn to our weakness. And it is pattern because we are called to &ldquo;learn from him&rdquo; &mdash; to take his yoke, to be discipled into his disposition, to become people whose hearts, like his, are gentle and lowly. The more we rest in the gentleness of Christ toward us, the more that same gentleness begins to flow through us toward others.",
    ],
  },
  {
    id: "Strength Under Control",
    heading: "Strength Under Control: The Meaning of Biblical Meekness",
    paragraphs: [
      "The classic definition of biblical meekness or gentleness is &ldquo;power under control&rdquo; or &ldquo;strength harnessed.&rdquo; This single phrase corrects nearly every misunderstanding of the word. Gentleness is not the temperament of those who have no power; it is the disposition of those who possess power yet hold it in disciplined restraint. The gentle person is not gentle because they are too weak to be otherwise, but because they have chosen, under the lordship of love, to govern their considerable strength for the good of others.",
      "The image often used to capture this is the powerful horse brought under the bridle. A wild stallion is magnificent but dangerous, its strength a threat to everyone around it. The same horse, broken and trained, loses none of its power but gains something far more valuable: responsiveness. Now its strength is available to its rider, directed by the lightest touch of the reins. This is meekness &mdash; not the elimination of strength but its harnessing, not the loss of power but its submission to a wise and loving control. The gentle Christian is like that trained warhorse: full of strength, yet utterly responsive to the hand of God.",
      "Scripture gives us a striking example in Moses, who is described as &ldquo;very meek, more than all people who were on the face of the earth&rdquo; (Numbers 12:3). This is the same Moses who stood before Pharaoh and demanded the release of a nation, who confronted an empire, who led a rebellious people through forty years of wilderness, who shattered the tablets of stone in righteous anger at the golden calf. Moses was no doormat. He was one of the boldest, most formidable leaders in human history. Yet Scripture calls him the meekest man on earth. His meekness was not the absence of strength but the presence of a strength wholly surrendered to God&rsquo;s purposes rather than his own.",
      "The supreme example, of course, is Jesus himself. In the garden of Gethsemane, as the soldiers came to arrest him, Peter drew his sword to fight. But Jesus said, &ldquo;Do you think that I cannot appeal to my Father, and he will at once send me more than twelve legions of angels?&rdquo; (Matthew 26:53). Here was power beyond imagining &mdash; the Lord of hosts who could have summoned the armies of heaven and swept his enemies away in an instant. And he chose not to. He went gently to the cross, not because he lacked the strength to resist but because his strength was harnessed to a greater purpose: the salvation of the very people who were crucifying him. That is meekness at its most sublime.",
      "This reframes gentleness entirely. It is not the easy mildness of those with nothing to defend, but the costly restraint of those who could retaliate and choose not to, who could dominate and choose to serve, who could demand their rights and choose to lay them down. Every time a strong person bends low to help a weak one, every time someone with the power to crush chooses instead to heal, every time we absorb an insult we could have returned, we display this strength under control. It is far harder than weakness, and far more Christlike.",
      "Because of this, gentleness requires more strength than aggression, not less. Anyone can lash out; reactivity is the path of least resistance, the discharge of unrestrained impulse. But to feel the full force of provocation and respond with measured calm, to hold real power and wield it for others rather than for self, to have every right to strike back and choose the way of patience &mdash; this demands a fortitude that the merely fierce will never possess. The gentle person is the strongest person in the room precisely because they have mastered the hardest thing: themselves.",
      "Gentleness, then, is not the opposite of strength but its highest expression. The Spirit does not make us weak; he makes us strong enough to be gentle. He takes the raw power of the human personality &mdash; with all its capacity for force, for self-assertion, for domination &mdash; and brings it under the loving control of Christ, so that our strength is no longer a danger to those around us but a gift. This is the meekness that Jesus promised would inherit the earth: not the timidity of the weak, but the disciplined, loving strength of those who have surrendered everything to God.",
    ],
  },
  {
    id: "Gentleness in Conflict",
    heading: "Gentleness in Conflict and Correction",
    paragraphs: [
      "It is easy enough to be gentle when everything is pleasant; the real test of gentleness comes in conflict and correction, when someone has wronged us, when error must be confronted, when truth must be spoken into resistance. And it is precisely here that Scripture insists gentleness must govern our conduct. Paul instructs Timothy that the Lord&rsquo;s servant must &ldquo;correct his opponents with gentleness&rdquo; (2 Timothy 2:25). Correction is necessary, but the manner of correction matters as much as its content. Truth delivered harshly often wounds where it meant to heal.",
      "When a fellow believer falls into sin, the temptation is to respond with indignation, distance, or even a quiet satisfaction at their failure. But Paul commands the opposite: &ldquo;Brothers, if anyone is caught in any transgression, you who are spiritual should restore him in a spirit of gentleness. Keep watch on yourself, lest you too be tempted&rdquo; (Galatians 6:1). The goal is restoration, not condemnation &mdash; and the means is gentleness. The word for &ldquo;restore&rdquo; was used for setting a broken bone, a task that requires both firmness and great tenderness. Notice too the humbling reminder: keep watch on yourself, for you are no less vulnerable than the one who fell.",
      "Paul makes gentleness a public mark of the Christian: &ldquo;Let your gentleness be evident to all&rdquo; (Philippians 4:5, NIV). Not hidden, not occasional, but evident &mdash; visible to everyone who encounters us, the unmistakable atmosphere of our presence. In a world quick to take offense and quicker to give it, the believer is to be known as someone whose reasonableness and forbearance are apparent to all. This is not weakness on display but the strength of a soul so secure in Christ that it need not bristle and defend at every provocation.",
      "The book of Proverbs distilled this wisdom centuries earlier: &ldquo;A soft answer turns away wrath, but a harsh word stirs up anger&rdquo; (Proverbs 15:1). Here is one of the most practical truths in all of Scripture. Harshness escalates; gentleness de-escalates. When we meet anger with anger, we pour fuel on the fire. But when we meet anger with a gentle answer, we drain the conflict of its heat. This is not manipulation but love &mdash; the deliberate choice to lower the temperature, to refuse the escalation, to absorb the harshness rather than return it.",
      "There is a profound strategic truth buried here that the world consistently misses: gentleness rather than harshness actually wins people. Harshness may win an argument while losing the person; it forces compliance while breeding resentment. But gentleness disarms. It catches the offender off guard, dissolves their defenses, and opens a door that aggression slams shut. The person braced for attack and met instead with kindness is far more likely to soften, to listen, and to change. Gentleness is not only more Christlike; it is more effective.",
      "All of this reflects the very heart of Christ, who is gentle and lowly, and who corrects his own people not by crushing them but by tending the bruised reed. When we are gentle in conflict, we are not merely being pleasant; we are putting the character of Jesus on display before a watching world. We are demonstrating that the gospel produces a different kind of person &mdash; one who can hold strong convictions without contempt, who can confront sin without cruelty, who can disagree without dehumanizing. In an age of outrage, this gentleness is itself a powerful witness.",
      "This does not mean gentleness avoids hard conversations or compromises truth. Jesus was gentle, yet he spoke plainly about sin and judgment. Gentleness is not cowardice that refuses to confront, nor flattery that withholds necessary truth. Rather, it is the disposition that speaks the truth in love (Ephesians 4:15), that confronts when confrontation is needed but does so with humility, patience, and genuine care for the other person&rsquo;s good. The gentle Christian is neither a doormat nor a battering ram, but a faithful friend who tells the truth and tells it tenderly.",
    ],
  },
  {
    id: "A Gentle and Quiet Spirit",
    heading: "A Gentle and Quiet Spirit",
    paragraphs: [
      "Peter, writing to Christian women in a culture that valued outward adornment, points to a deeper and more enduring beauty: &ldquo;Let your adorning be the hidden person of the heart with the imperishable beauty of a gentle and quiet spirit, which in God&rsquo;s sight is very precious&rdquo; (1 Peter 3:4). Though addressed in context to wives, the principle radiates outward to all believers, for it names a beauty that does not fade, a loveliness of soul that God himself treasures. While the world&rsquo;s beauty perishes, the beauty of a gentle and quiet spirit is imperishable &mdash; and it is precious in the sight of God.",
      "There is something deeply countercultural about gentleness in our particular moment. We live in an age of outrage and aggression, where the loudest voices are rewarded, where contempt is currency, where social media trains us to react instantly and harshly, to score points, to dunk on our opponents, to perform our indignation for an audience. In such a climate, a gentle and quiet spirit is almost shocking. It does not clamor for attention. It does not need to win every exchange. It carries a stillness and a strength that the anxious, reactive culture around it cannot comprehend.",
      "This quietness is not silence or passivity but a deep inner composure &mdash; a soul that is not perpetually agitated, not driven by the need to assert itself, not tossed about by every provocation. The gentle and quiet spirit has found its rest in God and therefore does not need to fight for its place. It can absorb insult without retaliation, endure misunderstanding without bitterness, and remain steady when others are frantic. This composure is not natural calm but spiritual stability, the fruit of a heart anchored in Christ.",
      "Scripture connects gentleness to true wisdom. James writes, &ldquo;Who is wise and understanding among you? By his good conduct let him show his works in the meekness of wisdom&rdquo; (James 3:13), and then describes the wisdom from above as &ldquo;first pure, then peaceable, gentle, open to reason, full of mercy and good fruits&rdquo; (James 3:17). Worldly wisdom is sharp, ambitious, and self-promoting; it produces &ldquo;jealousy and selfish ambition&rdquo; and the disorder that follows. But the wisdom that comes down from God is gentle. To be genuinely wise, in the biblical sense, is to be gentle &mdash; and the proud, harsh, combative spirit, however clever, is revealed as a kind of folly.",
      "This is why a gentle spirit is one of the most Christlike and attractive qualities a believer can cultivate. People are drawn to gentleness as they are drawn to warmth on a cold day. In the presence of a truly gentle person, the defensive relax, the anxious calm, the wounded feel safe. Such a person becomes a kind of sanctuary, a place where others can lower their guard and breathe. This magnetic quality is nothing other than the aroma of Christ, whose own gentleness drew the weary and heavy-laden to himself. The gentle Christian becomes, in a small way, what Jesus is &mdash; a refuge for the struggling.",
      "We must not mistake this gentleness for an easy or natural sweetness. The gentle and quiet spirit is forged, not found. It is the product of countless small surrenders &mdash; choosing not to retaliate, not to defend, not to insist, not to escalate &mdash; until gentleness becomes the settled habit of the soul. It costs something to be gentle in a harsh world; it requires the daily death of pride and the daily yielding of our rights. But what is forged in that fire is imperishable, a beauty that will outlast every fading glory the world admires.",
      "In the end, gentleness is the strength to be tender. It is power that has learned to bend low, strength that has chosen to serve, force that has been disciplined into kindness. It is the most Christlike of dispositions because it is the very disposition of Christ, who though he was in the form of God did not count equality with God a thing to be grasped, but emptied himself, taking the form of a servant. To cultivate a gentle and quiet spirit is to be conformed to the image of the gentle and lowly Savior &mdash; and there is no more precious beauty in all the world, nor any more pleasing in the sight of God.",
    ],
  },
];

const videoItems = [
  { videoId: "DjFhuVDU0pY", title: "Gentle and Lowly - The Heart of Christ" },
  { videoId: "X9aLb5sz2N0", title: "Gentleness as a Fruit of the Spirit" },
  { videoId: "Wj1nRyT6w7E", title: "Strength Under Control - Biblical Meekness" },
];

export default function ChristianGentlenessGuidePage() {
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
            Faith &amp; Gentleness
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Gentleness
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Gentleness through a Christian lens &mdash; the fruit of the Spirit, the gentleness of Jesus who is gentle and lowly in heart, strength under control, gentleness in correction and conflict, and the imperishable beauty of a gentle and quiet spirit.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>Matthew 11:29</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? `rgba(13, 148, 136, 0.12)` : "transparent",
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
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>Gentleness Is the Strength to Be Tender</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>Gentleness is not weakness but strength under control &mdash; the power to crush held back by love, the force to retaliate laid down for the sake of others. It is the very heart of Christ, who is gentle and lowly, who will not break a bruised reed. To cultivate a gentle and quiet spirit is to be conformed to his image and to carry his aroma into a harsh and weary world.</p>
        </div>
      </main>
    </div>
  );
}
