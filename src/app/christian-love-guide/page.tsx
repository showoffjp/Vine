"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["The Four Loves", "God Is Love", "The Great Commandment", "The Love Chapter", "Loving Your Enemies", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "The Four Loves",
    heading: "The Four Loves",
    paragraphs: [
      "The English word &ldquo;love&rdquo; is a single overworked syllable forced to carry an enormous range of meaning. We say we love our spouse, love our friends, love our country, love a good meal, and love God, using the same word for realities that are profoundly different. The ancient Greeks were wiser. They had a richer vocabulary, distinguishing several kinds of love, and the New Testament was written in their language. C.S. Lewis, in his classic study <em>The Four Loves</em>, drew on this vocabulary to map the varieties of human affection and to show how each finds its place &mdash; and its transformation &mdash; within the Christian vision of love.",
      "The first love is <em>storge</em>, affection &mdash; the quiet, comfortable bond of familiarity. It is the love of a parent for a child, of old companions, of the familiar and the homely. <em>Storge</em> asks for nothing remarkable in its object; it grows simply through nearness and shared life, the warm contentment we feel toward what is ours and well-known. Lewis called it the humblest and most widely diffused of loves, the affection that can exist alongside the others and that needs no qualifications, no merit, no admiration &mdash; only the deep, unspectacular comfort of belonging to one another.",
      "The second is <em>philia</em>, friendship &mdash; the love of those who stand side by side, bound by a common interest, a shared truth, a journey traveled together. Lewis lamented that the modern world had nearly forgotten how to value friendship, treating it as a lesser thing than romantic love. But the ancients prized it highly, and Scripture honors it &mdash; in the covenant of David and Jonathan, in the band of disciples, in the friends who carry one another&rsquo;s burdens. <em>Philia</em> is the least biological and least necessary of the loves, and for that very reason among the most freely chosen and most fully human.",
      "The third is <em>eros</em>, romantic love &mdash; the state of &ldquo;being in love,&rdquo; the desire for the beloved as a particular person rather than merely an object of appetite. Lewis distinguished <em>eros</em> from raw sexuality, seeing in it a longing that reaches beyond pleasure toward union with another whole self. Within marriage, hallowed by God, <em>eros</em> becomes a sign of something greater &mdash; the union of Christ and his church. Yet Lewis also warned that <em>eros</em>, left to itself, can become a tyrant, demanding total devotion and promising more than it can give. Like all the natural loves, it needs to be taken up into something higher to remain good.",
      "The fourth and highest love is <em>agape</em> &mdash; the self-giving, unconditional love that the New Testament makes the distinctively Christian love. Unlike the other three, <em>agape</em> does not arise from natural affinity, attraction, or shared interest. It is not a feeling at all in the first place but an act of the will: the deliberate seeking of another&rsquo;s good, regardless of whether they are lovable, regardless of what they offer in return. It is the love that loves the unlovely, that gives without expecting repayment, that wills the good of the enemy as well as the friend. This is the love the Bible commands, because it is the love that originates not in us but in God.",
      "Lewis&rsquo;s great insight was that the natural loves &mdash; <em>storge</em>, <em>philia</em>, <em>eros</em> &mdash; are genuinely good, gifts of God woven into creation, but they are not self-sufficient. Left to themselves they grow possessive, jealous, and corrupt; the love that begins as a blessing can curdle into an idol. They need to be taken up, purified, and crowned by <em>agape</em>, the love that comes down from God. Only when the natural loves are subordinated to divine love do they become fully themselves. Affection, friendship, and romance are perfected, not abolished, when <em>agape</em> reigns over them.",
      "The New Testament therefore elevates <em>agape</em> above all the rest, making it the mark and measure of the Christian life. It is a love of the will and of action rather than mere feeling, modeled on the love of God himself and made possible only by his Spirit poured into our hearts. We cannot manufacture <em>agape</em> by trying harder to feel warmly; it is the fruit of the Spirit, the overflow of having first been loved by God. To love this way is to love as God loves &mdash; freely, sacrificially, and without condition &mdash; and it is into this love that the whole Christian life is meant to grow.",
    ],
  },
  {
    id: "God Is Love",
    heading: "God Is Love",
    paragraphs: [
      "At the very heart of the Christian understanding of love stands one of the most staggering statements in all of Scripture: &ldquo;Anyone who does not love does not know God, because God is love&rdquo; (1 John 4:8), repeated for emphasis a few verses later: &ldquo;God is love, and whoever abides in love abides in God, and God abides in him&rdquo; (4:16). This is not merely the claim that God is loving, that love is one of his attributes among others. It is the far more radical claim that love is what God most essentially is &mdash; that love defines his very being. To understand love rightly, then, we must begin not with our own experience but with God himself.",
      "The statement &ldquo;God is love&rdquo; raises a profound question that the Christian doctrine of the Trinity uniquely answers. If God is love from all eternity, then before there was any creation to love, whom did he love? Love requires an object; a solitary, single-person deity could not have been love in himself but would have needed to create in order to have someone to love. The Christian answer is that God is not solitary. He is one God in three persons, and from all eternity the Father has loved the Son, the Son has loved the Father, and the Spirit is the bond of their love. God did not become loving when he made the world; he is love within his own triune life, eternally and necessarily.",
      "This means that love is not merely something God does but who God is in his very being. The eternal, mutual, self-giving love among Father, Son, and Spirit is the original from which all other love derives. When we love, we are dimly reflecting the inner life of God. Creation itself is an overflow of this love &mdash; not something God needed in order to be complete, for he was already perfect in the fellowship of the Trinity, but the free outpouring of a love so full that it gives life to others. We exist because God is love, and his love spilled over into the act of creation.",
      "The supreme proof of this love is not found in abstractions but in an event. &ldquo;In this is love, not that we have loved God but that he loved us and sent his Son to be the propitiation for our sins&rdquo; (1 John 4:10). The initiative is entirely God&rsquo;s. We did not first love him and so win his affection; he loved us while we were still turned away from him, and he proved it by sending his Son to bear the penalty our sins deserved. Love, in the Christian account, is not first of all a feeling we have toward God but a fact about what God has done toward us. It is defined by the cross.",
      "Paul makes the same point with unforgettable force: &ldquo;God shows his love for us in that while we were still sinners, Christ died for us&rdquo; (Romans 5:8). The timing is everything. God did not wait until we had cleaned ourselves up, until we were lovely or deserving; he gave his Son for us at our worst, while we were still in rebellion against him. This is <em>agape</em> in its purest form &mdash; love poured out on the undeserving, love that creates worth in its object rather than responding to worth it finds there. The cross is the measuring rod of love, the place where we learn what the word actually means.",
      "The cross thus stands as the supreme demonstration of love, the point at which God&rsquo;s eternal nature became visible in history. &ldquo;Greater love has no one than this, that someone lay down his life for his friends&rdquo; (John 15:13) &mdash; and Christ went further still, laying down his life not for friends only but for enemies. In the suffering and death of Jesus we see the invisible God made visible, the eternal love of the Trinity breaking into time and bleeding upon a Roman cross. Here the statement &ldquo;God is love&rdquo; ceases to be a comforting abstraction and becomes a wound, a gift, a debt of gratitude we can never repay.",
      "Because God is love, the whole Christian life takes on a particular shape: it is a response to having first been loved. &ldquo;We love because he first loved us&rdquo; (1 John 4:19). Our love is never the origin of the story but always the echo; we can love only because love has been poured into us. To know God is therefore inseparable from learning to love, for the God who is love cannot be known by those who refuse to love. The doctrine that God is love is not a sentimental decoration on Christian faith but its very center &mdash; the truth that the ground of all reality is a self-giving, triune, eternal love that reached down to us in Christ.",
    ],
  },
  {
    id: "The Great Commandment",
    heading: "The Great Commandment",
    paragraphs: [
      "When a lawyer, testing Jesus, asked him which commandment in the Law was the greatest, Jesus answered by gathering the whole of God&rsquo;s revealed will into two inseparable demands: &ldquo;You shall love the Lord your God with all your heart and with all your soul and with all your mind. This is the great and first commandment. And a second is like it: You shall love your neighbor as yourself. On these two commandments depend all the Law and the Prophets&rdquo; (Matthew 22:37-40). In a single stroke he reduced the hundreds of commandments of the Torah to their essence and revealed that the entire moral universe hangs upon love.",
      "The first and great commandment calls for love of God that is total &mdash; with all the heart, all the soul, all the mind, all the strength. Nothing is held back; no compartment of life is exempt. This is not merely an emotion but the orientation of the whole person toward God as the supreme good, the ordering of every faculty and affection around him. To love God in this way is the first duty of every creature and the source of all genuine goodness, for when God is loved supremely, everything else falls into its proper place. Disordered love &mdash; loving lesser things more than God &mdash; is the root of all sin.",
      "The second commandment is &ldquo;like&rdquo; the first, Jesus says, and the likeness is crucial. Love of neighbor is not a separate, lower duty tacked on after love of God; it flows from it and is bound up with it. We are to love our neighbor &ldquo;as ourselves&rdquo; &mdash; with the same earnest concern for their good that we instinctively have for our own. This is a searching standard, for we are tireless in seeking our own welfare and quick to excuse our own faults. To extend that same energy of care to another is to love as God commands, and it leaves no room for the indifference and self-preference that come so naturally to us.",
      "Paul confirms that love is the fulfillment of the whole Law: &ldquo;The commandments&hellip;are summed up in this word: You shall love your neighbor as yourself. Love does no wrong to a neighbor; therefore love is the fulfilling of the law&rdquo; (Romans 13:9-10). Every prohibition &mdash; against stealing, lying, killing, coveting &mdash; is simply a description of what love would never do. The person who truly loves needs no list of rules to restrain him from harming his neighbor, for love is already the fountain from which all right action flows. The Law tells us what love looks like; love supplies the power and the desire to do it.",
      "When the lawyer pressed further &mdash; &ldquo;And who is my neighbor?&rdquo; &mdash; seeking to limit the scope of his obligation, Jesus answered with the parable of the Good Samaritan. A man lay beaten on the roadside; the religious professionals passed him by; but a Samaritan, a member of a despised foreign people, stopped, bound his wounds, and paid for his care. The point overturned the question entirely. The neighbor is not a narrow category of those near and like us; the neighbor is anyone in need whom we have the power to help, even &mdash; especially &mdash; the stranger and the outsider. Love refuses to draw a circle around itself and call everyone outside it not my concern.",
      "Crucially, Scripture insists that love for God and love for neighbor cannot be separated, that the one is the test of the other. &ldquo;If anyone says, &lsquo;I love God,&rsquo; and hates his brother, he is a liar; for he who does not love his brother whom he has seen cannot love God whom he has not seen&rdquo; (1 John 4:20). It is impossible to love the invisible God while despising the visible person made in his image. Our treatment of the neighbor is the proof of our love for God; there is no private, vertical piety that bypasses the horizontal demand of love. The two commandments are finally one commandment with two faces.",
      "On these two commandments, Jesus said, depend all the Law and the Prophets &mdash; the entire weight of God&rsquo;s revelation rests here. This means that love is not one virtue among many but the goal and summary of the whole moral life, the thread on which every other duty is strung. To grow in the Christian life is simply to grow in this twofold love: upward toward God with the whole self, and outward toward the neighbor as toward oneself. Everything else &mdash; doctrine, worship, obedience, mission &mdash; exists to serve and express this love, for love is the fulfilling of the law and the very heartbeat of the kingdom of God.",
    ],
  },
  {
    id: "The Love Chapter",
    heading: "The Love Chapter",
    paragraphs: [
      "First Corinthians 13 is the most profound description of love ever written, a passage so luminous that it is read at weddings and funerals, by believers and unbelievers alike, wherever human beings reach for words equal to the greatness of love. Yet its original setting was not romance but conflict. Paul wrote it to a fractured, gifted, quarrelsome church that prized spiritual abilities while neglecting the one thing that mattered most. Into that strife he set this hymn to love, not as a sentimental interlude but as a rebuke and a remedy &mdash; the &ldquo;more excellent way&rdquo; that alone gives meaning to everything else.",
      "He begins by stripping every other glory of its value apart from love: &ldquo;If I speak in the tongues of men and of angels, but have not love, I am a noisy gong or a clanging cymbal. And if I have prophetic powers, and understand all mysteries and all knowledge, and if I have all faith, so as to remove mountains, but have not love, I am nothing&rdquo; (1 Corinthians 13:1-3). Eloquence, knowledge, faith, even the sacrifice of one&rsquo;s own body &mdash; all of it counts for nothing without love. The most impressive gifts are mere noise, the most heroic deeds mere emptiness, unless love is the animating soul within them. Love is not one excellence among many; it is the thing that makes the others worth anything at all.",
      "Then Paul turns to anatomy, dissecting love into its living parts: &ldquo;Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth&rdquo; (13:4-6). Notice that these are not feelings but actions and dispositions &mdash; things love does and refuses to do. Love here is intensely practical, almost unromantic: it waits, it serves, it refuses to envy, it lets go of grievances. This is love as a way of treating people, a discipline of the will, the very opposite of the self-seeking spirit that was tearing the Corinthian church apart.",
      "The portrait rises to a sweeping climax: &ldquo;Love bears all things, believes all things, hopes all things, endures all things&rdquo; (13:7). There is no limit set to love&rsquo;s endurance, no condition on which it quits. It bears what is hard, believes the best, hopes against discouragement, and endures to the end. This is no fragile, fair-weather affection but a love that holds fast through disappointment and pain &mdash; the very love God has shown to us, who bore all things for our sake and endured the cross. To read this verse is to see a description of Christ himself, for he is love made flesh, and every line of the chapter is a portrait of his heart.",
      "Paul then lifts our eyes from the present to the eternal: &ldquo;Love never ends. As for prophecies, they will pass away; as for tongues, they will cease; as for knowledge, it will pass away&rdquo; (13:8). The spiritual gifts the Corinthians prized so highly are temporary, scaffolding for this present age, destined to become unnecessary when we see God face to face. But love belongs to eternity. It will not be outgrown or set aside; it will be perfected. When all the partial things have vanished into the fullness of the world to come, love will remain, for love is the very life of God in which the redeemed will share forever.",
      "And so the chapter ends with its famous verdict: &ldquo;So now faith, hope, and love abide, these three; but the greatest of these is love&rdquo; (13:13). Faith and hope are glorious, but they are oriented toward what is not yet seen and not yet possessed; in heaven, faith will give way to sight and hope to fulfillment. Love alone passes unchanged into eternity, the one of the three that &ldquo;never ends&rdquo; and abides forever. It is therefore the greatest &mdash; greater than the faith that lays hold of salvation, greater than the hope that sustains us, because it is the eternal substance of which the others are temporary servants.",
      "The chapter stands, then, as both a mirror and a summons. It is a mirror in which we measure ourselves and find how far we fall short, for who among us is always patient, never envious, never resentful, bearing and enduring all things? And it is a summons to pursue the more excellent way, to let love govern every gift and word and deed. Above all it points us to Christ, whose name can be substituted for &ldquo;love&rdquo; in every line without strain. He is the patient and kind one; he bore all things and endured all things; his love never ends. To grow in love is simply to grow into his likeness.",
    ],
  },
  {
    id: "Loving Your Enemies",
    heading: "Loving Your Enemies",
    paragraphs: [
      "Of all the commands Jesus gave, none is more radical, more startling, or more contrary to natural human instinct than this: &ldquo;You have heard that it was said, &lsquo;You shall love your neighbor and hate your enemy.&rsquo; But I say to you, Love your enemies and pray for those who persecute you&rdquo; (Matthew 5:43-44). Every culture has prized love for friends and kin; that is the common decency of the human race. But love for enemies &mdash; active goodwill toward those who hate, harm, and persecute us &mdash; was something new, a demand so extreme that it can only have come from the heart of God himself.",
      "Jesus exposes the poverty of merely reciprocal love: &ldquo;For if you love those who love you, what reward do you have? Do not even the tax collectors do the same? And if you greet only your brothers, what more are you doing than others?&rdquo; (Matthew 5:46-47). To love those who love us back is no great achievement; even the worst of people manage that. It costs nothing and proves nothing. The love Jesus commands is of an altogether different order &mdash; a love that does not wait to be deserved, that gives without the prospect of return, that breaks the natural cycle of repaying hatred with hatred and answers evil with good. This is <em>agape</em> at its purest and most demanding.",
      "The supreme example of this love is Christ himself, who did not merely teach enemy-love but enacted it in his death. From the cross, suffering the cruelty of those who had condemned and crucified him, he prayed: &ldquo;Father, forgive them, for they know not what they do&rdquo; (Luke 23:34). He returned blessing for cursing, intercession for murder, love for hatred. And Paul reminds us that this is precisely how God loved us: &ldquo;while we were enemies we were reconciled to God by the death of his Son&rdquo; (Romans 5:10). We did not earn his love by ceasing to be his enemies; he loved us as enemies and so made us his friends. Enemy-love is not an impossible ideal but the very love that saved us.",
      "Jesus grounds the command in the character of God the Father: &ldquo;so that you may be sons of your Father who is in heaven. For he makes his sun rise on the evil and on the good, and sends rain on the just and on the unjust&rdquo; (Matthew 5:45). God does not ration his common kindness only to those who deserve it; he pours out sun and rain on the righteous and the wicked alike. To love our enemies is therefore to reflect the family likeness, to act as true children of a generous Father. The motive is not that our enemies have earned our love but that we have a Father whose love overflows to the undeserving, and we are called to be like him.",
      "This enemy-love is what most sharply distinguishes Christian ethics from every merely human morality. The world&rsquo;s justice is built on reciprocity &mdash; reward the friend, punish the foe, give each what they deserve. The gospel introduces something that shatters this calculus: a love that does not keep score, that absorbs wrong rather than avenging it, that overcomes evil with good. This is not weakness or passivity but a fierce and costly strength, the strength to refuse the satisfaction of retaliation and to seek instead the good of the one who has wronged us. It is the most countercultural thing a Christian can do, and the most Christlike.",
      "It is essential to see that this love is an act of the will, not a warm feeling. We are not commanded to manufacture affection for those who hurt us, nor to pretend that evil is not evil. To love the enemy is to will their good, to pray for them, to refuse to repay harm with harm, and to seek their redemption even while we grieve their wrongdoing. Jesus pairs the command to love with the command to pray: &ldquo;pray for those who persecute you.&rdquo; It is difficult to go on hating someone you are genuinely praying for, and in that prayer the heart is slowly changed, conformed to the mercy of God.",
      "Finally, Jesus makes love the very badge of his disciples, the unmistakable mark by which the world will know to whom we belong: &ldquo;By this all people will know that you are my disciples, if you have love for one another&rdquo; (John 13:35). Not by our knowledge, our success, our power, or our religious performance, but by our love &mdash; and supremely by a love that extends even to enemies &mdash; the world is meant to recognize the followers of Christ. Love is the definitive mark of the Christian, the evidence that the love of God has truly taken root in us. Where this love is found, there the kingdom of God is breaking in; and where it is absent, no profession of faith can take its place.",
    ],
  },
];

const videoItems = [
  { videoId: "yChdw2yzWS8", title: "C.S. Lewis - The Four Loves" },
  { videoId: "Sf2bnH3Ls-Q", title: "The Love Chapter - 1 Corinthians 13" },
  { videoId: "8wYRYg6cl9w", title: "Loving Your Enemies - The Radical Command of Jesus" },
];

export default function ChristianLoveGuidePage() {
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
            Faith &amp; Love
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Love
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Love through a Christian lens &mdash; the four loves of the Greek tradition, agape as self-giving love, the truth that God is love, the great commandment, the love chapter of 1 Corinthians 13, and the radical call to love your enemies.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;So now faith, hope, and love abide, these three; but the greatest of these is love.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>1 Corinthians 13:13</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? `rgba(225, 29, 72, 0.12)` : "transparent",
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
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>The Greatest of These</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>God is love, and he loved us first &mdash; while we were still enemies, Christ died for us. The whole law hangs on loving God and neighbor; the most excellent way is the love that bears, believes, hopes, and endures all things. By this love &mdash; reaching even to our enemies &mdash; the world will know that we are his disciples.</p>
        </div>
      </main>
    </div>
  );
}
