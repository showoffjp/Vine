"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";

const TABS = [
  "Joy vs. Happiness",
  "Joy in Philippians",
  "The Fruit of the Spirit",
  "The Joy Set Before Jesus",
  "Joy as Resistance",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

export default function ChristianJoyGuidePage() {
  const [tab, setTab] = useState<Tab>("Joy vs. Happiness");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? GOLD : BORDER}`,
    background: active ? "rgba(217, 119, 6, 0.12)" : "transparent",
    color: active ? GOLD : MUTED,
    cursor: "pointer",
    fontSize: "0.88rem",
    fontWeight: active ? 600 : 400,
    transition: "all 0.15s ease",
  });

  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 12,
    padding: "1.5rem",
  };

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        {/* Hero */}
        <header style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              fontSize: "0.78rem",
              color: GOLD,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: "0.6rem",
            }}
          >
            Joy &amp; Delight
          </div>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Christian Joy Guide
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Joy is not happiness. It is deeper, sturdier, and available in prison cells and dark
            nights. This guide traces the theology of joy &mdash; from Lewis&rsquo;s Sehnsucht and
            Philippians written behind bars, through the fruit of the Spirit, the joy set before
            Jesus on the cross, and why rejoicing is a subversive theological act.
          </p>
          <div
            style={{
              marginTop: "1.75rem",
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderLeft: `3px solid ${GOLD}`,
              borderRadius: 12,
              padding: "1.25rem 1.5rem",
            }}
          >
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
              &ldquo;Rejoice in the Lord always. I will say it again: Rejoice!&rdquo;
            </p>
            <p style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 600 }}>Philippians 4:4</p>
          </div>
        </header>

        {/* Tabs */}
        <nav
          aria-label="Page sections"
          style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: "2.25rem" }}
        >
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={tabButtonStyle(tab === t)}>
              {t}
            </button>
          ))}
        </nav>

        {/* Tab: Joy vs. Happiness */}
        {tab === "Joy vs. Happiness" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              The distinction between joy and happiness is not merely semantic &mdash; it is the
              foundation of the entire biblical theology of joy. Until this distinction is made,
              Scripture&rsquo;s commands to rejoice seem either cruel or delusional.
            </p>

            {[
              {
                title: "Happiness vs. Joy &mdash; The Critical Distinction",
                body: "Happiness, in its modern English sense, comes from the Old English &ldquo;hap&rdquo; &mdash; luck, chance, what happens. It is the feeling that arises when circumstances are favorable: things are going well, desires are satisfied, threats are absent. Happiness is entirely dependent on happenings. Joy in the biblical sense is categorically different. It is the settled orientation of a person whose hope is anchored in God regardless of what is happening. Happiness is weather; joy is climate. This is why Paul can command joy (&ldquo;Rejoice in the Lord always&rdquo;) from a prison cell while he cannot sensibly command happiness: circumstances have not changed, but joy is not grounded in circumstances. It is grounded in the Lord, whose character and promises do not change.",
              },
              {
                title: "The Hebrew Simcha and the Greek Chara",
                body: "The Old Testament uses simcha (שִׂמְחָה) as its primary word for joy &mdash; a word that includes gladness, delight, and festive celebration, often associated with the presence of God and the communal life of the covenant people. The New Testament uses chara (χαρά), which shares its root with charis (grace) and charisma (gift). Joy is, at its etymological root, a grace-word: it is received rather than produced. Both words appear in contexts of suffering, scarcity, and danger, which is the evidence that neither the Hebrew nor the Greek concept of joy is equivalent to the feeling of happiness. Simcha can coexist with mourning (Nehemiah 8:9-10); chara can coexist with thlipsis, tribulation (James 1:2). The biblical concept is structurally different from the emotional one.",
              },
              {
                title: "C.S. Lewis &mdash; Sehnsucht: The Longing That Points Beyond",
                body: "C.S. Lewis titled his spiritual autobiography Surprised by Joy because the experience of a particular kind of longing &mdash; he called it Joy (capitalized) or by the German word Sehnsucht &mdash; was the most important clue in his journey from atheism to faith. This Joy is not ordinary happiness or pleasure. It is an unexpected stab of intense desire, produced by experiences of beauty, music, mythology, or nature &mdash; but never satisfied by them. The experience always left Lewis wanting something that the beautiful thing could not give. His argument: if no earthly thing can satisfy the longing that earthly beauty produces, then the longing is evidence of a Maker who designed the soul for something beyond creation. Every experience of profound joy that leaves you wanting more is the soul recognizing that the beautiful thing was a signpost, not the destination.",
              },
              {
                title: "Joy as Theological Category vs. Emotional State",
                body: "One of the most important shifts in thinking about Christian joy is from treating it as primarily an emotional state (something you feel) to treating it as primarily a theological category (a truth about your relationship to God and the world). Joy, theologically understood, is the appropriate orientation of a creature who knows who made them, who redeemed them, who holds them, and where they are going. It is the response of faith to the character of God. This means joy can be real even when the feeling of happiness is entirely absent &mdash; even in the pit of grief, depression, or chronic pain. Paul&rsquo;s &ldquo;sorrowful yet always rejoicing&rdquo; (2 Cor 6:10) is not a contradiction but a description of the theological category of joy held alongside the emotional reality of grief.",
              },
              {
                title: "Prosperity Gospel&rsquo;s Distortion of Joy",
                body: "The prosperity gospel &mdash; the teaching that faith produces material blessing, health, and positive emotions as God&rsquo;s normal will for believers &mdash; is among the most damaging distortions of the Christian theology of joy. It collapses joy into happiness, which it then equates with financial prosperity and physical health. The person who is suffering, poor, or chronically ill is implicitly told that their faith is deficient, because genuine faith would have produced the happiness that prosperity gospel promises. This is the theology of Job&rsquo;s friends applied to contemporary American Christianity. It leaves the suffering with nothing: no language for honest lament, no theology of the cross as solidarity, no category for the joy that coexists with pain. The biblical theology of joy is a direct rebuke to the prosperity gospel&rsquo;s domestication of God.",
              },
            ].map((item) => (
              <article key={item.title} style={cardStyle}>
                <h2
                  style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12, lineHeight: 1.35, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </article>
            ))}
          </section>
        )}

        {/* Tab: Joy in Philippians */}
        {tab === "Joy in Philippians" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              Philippians is the New Testament&rsquo;s most concentrated meditation on joy &mdash; and
              it was written from prison. The epistle&rsquo;s setting is its credential: this is not
              greeting-card cheerfulness but joy that has been tested against chains and possible
              execution and found to hold.
            </p>

            {[
              {
                title: "Philippians as the Epistle of Joy",
                body: "Paul uses the words &ldquo;joy&rdquo; and &ldquo;rejoice&rdquo; sixteen times in Philippians&rsquo; four short chapters &mdash; more than in any other letter. This is striking given the context: Paul is in a Roman prison, chained to a guard, facing a verdict that could mean his execution, and dealing with rival preachers who are trying to cause him additional distress (Phil 1:17). Yes, and I will rejoice (Phil 1:18). The prison setting is not incidental to the joy theme; it is its credential. The reader is meant to understand that the joy Paul describes is not contingent on favorable circumstances, because Paul&rsquo;s circumstances at the time of writing were as unfavorable as they could be. Philippians is not a treatise on joy written from comfort; it is a testimony of joy written from chains.",
              },
              {
                title: "&ldquo;Rejoice in the Lord Always&rdquo; &mdash; What &ldquo;in the Lord&rdquo; Means",
                body: "&ldquo;Rejoice in the Lord always. I will say it again: Rejoice!&rdquo; (Phil 4:4). The doubled command signals that what is being commanded is difficult and counter-intuitive &mdash; Paul knows it needs saying twice. But the phrase &ldquo;in the Lord&rdquo; is the key to the entire command. The joy is not in the circumstances (which are terrible), not in Paul&rsquo;s feelings (which are under pressure), but in the Lord &mdash; in the character, promises, presence, and purposes of Jesus Christ. Because the Lord does not change when the circumstances change, joy &ldquo;in the Lord&rdquo; can be commanded in all circumstances. The command is not to feel happy; it is to orient the self toward the One whose goodness is not affected by what is happening. This is possible always precisely because &ldquo;the Lord is near&rdquo; (Phil 4:5) &mdash; present in every situation, holding every moment.",
              },
              {
                title: "The Peace That Surpasses Understanding &mdash; Philippians 4:7",
                body: "&ldquo;And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus&rdquo; (Phil 4:7). This peace arrives as a result of the practice described in verse 6: prayer with thanksgiving, bringing every anxiety to God. The peace is not explained or achieved; it exceeds the understanding &mdash; it surpasses the rational calculation of what peace is possible given the circumstances. And it &ldquo;guards&rdquo; (phroure&icirc; &mdash; the military word for a garrison holding a city) the heart and mind. The image is of God&rsquo;s peace standing as an armed garrison at the entrance to the interior life, preventing anxiety from occupying the space that joy inhabits. Joy and peace are not passive feelings but actively defended states.",
              },
              {
                title: "Contentment as the Ground of Joy &mdash; Philippians 4:11-12",
                body: "&ldquo;I have learned, in whatever situation I am, to be content. I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger, abundance and need&rdquo; (Phil 4:11-12). Paul&rsquo;s contentment is explicitly learned &mdash; the Greek word is memathem&eacute;mai, from manthan&ocirc;, to learn through practice and experience. It is not a natural disposition or a gift received at conversion; it is a discipline acquired through the repeated experience of finding God sufficient in both abundance and need. Contentment is the ground from which joy grows: the person who has learned that God is sufficient in all circumstances has discovered the root system from which joy can flower in any season.",
              },
              {
                title: "&ldquo;I Can Do All Things&rdquo; in Its Actual Context",
                body: "&ldquo;I can do all things through him who strengthens me&rdquo; (Phil 4:13) is among the most commonly misquoted verses in the New Testament. The &ldquo;all things&rdquo; is routinely taken to mean athletic achievement, professional success, or overcoming personal challenges through divine assistance. In its actual context, the verse is about contentment in poverty and abundance: having learned to be content in all circumstances, Paul says he can face any of them &mdash; including the humiliating ones, including hunger, including need &mdash; through Christ who strengthens him. The verse is a statement about the sufficiency of grace for navigating difficult circumstances with joy and contentment, not a blank promise of worldly success. Its power is greater in its actual context: Paul found Christ sufficient for chains.",
              },
            ].map((item) => (
              <article key={item.title} style={cardStyle}>
                <h2
                  style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12, lineHeight: 1.35, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </article>
            ))}
          </section>
        )}

        {/* Tab: The Fruit of the Spirit */}
        {tab === "The Fruit of the Spirit" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              Joy appears second in the fruit of the Spirit &mdash; after love, before peace. Its
              position is theologically significant, and the singular &ldquo;fruit&rdquo; (not
              fruits) tells us something crucial about how it is produced.
            </p>

            {[
              {
                title: "Joy as the Second Fruit &mdash; After Love, Before Peace",
                body: "&ldquo;But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control&rdquo; (Gal 5:22-23). The sequence is deliberate: love is the foundational orientation of the Spirit-filled life; joy is its immediate emotional overflow; peace is its relational and interior fruit. The person who is genuinely loving God and neighbor will find that joy is the natural byproduct of that love &mdash; the gladness of the creature living in alignment with its design and relationship. Joy&rsquo;s position as the second fruit suggests that it is not peripheral but central: the Spirit-filled life is a joyful life, not occasionally but as a structural feature of what it means to be alive in the Spirit.",
              },
              {
                title: "The Fruit Is Singular &mdash; Not Fruits",
                body: "The Greek karpos (fruit) in Galatians 5:22 is singular, not plural. Paul does not list nine separate fruits; he describes one integrated fruit of the Spirit that has nine characteristics. The implications are significant: you cannot have the Spirit&rsquo;s fruit in some dimensions and not in others; the nine characteristics are the unified expression of a single Spirit-shaped character. You cannot have genuine love without joy; you cannot have genuine peace without goodness. Joy is not one of nine separate achievements to pursue; it is one expression of the integrated life of a person who is abiding in the Spirit. This means the absence of joy is always, at some level, a question about the depth of the abiding, not just the difficulty of the circumstances.",
              },
              {
                title: "The Relationship Between Love and Joy",
                body: "The placement of joy immediately after love in the fruit list suggests an intrinsic connection. Joy is what love feels like from the inside: the person who genuinely loves God and neighbor, who is freed from the self-referential anxiety of the flesh, who is oriented toward the other rather than the self &mdash; that person experiences the delight that is the natural overflow of love. Jesus makes this connection explicit in John 15:9-11: &ldquo;As the Father has loved me, so have I loved you. Abide in my love&hellip; that my joy may be in you and that your joy may be full.&rdquo; The path to full joy runs through abiding in love &mdash; receiving it, remaining in it, and allowing it to produce its natural overflow.",
              },
              {
                title: "Joy as the Spirit&rsquo;s Work, Not Human Achievement",
                body: "The agricultural metaphor of fruit in Galatians 5 is deliberately chosen: fruit does not manufacture itself. The branch does not produce fruit by effort or willpower; it produces fruit by staying connected to the vine. Joy, as the fruit of the Spirit, is not a human achievement but a divine gift received through abiding. This is why &ldquo;trying harder to be joyful&rdquo; almost always fails &mdash; the direct pursuit of joy as an end in itself tends to collapse into performance or frustration. The question is not &ldquo;how do I produce joy?&rdquo; but &ldquo;where has my connection to the vine thinned out?&rdquo; The practices of Scripture, prayer, worship, and community are not techniques for manufacturing joy; they are the root system through which joy is received.",
              },
              {
                title: "When Joy Feels Absent &mdash; Dark Night of the Soul vs. Depression",
                body: "The spiritual tradition distinguishes between the dark night of the soul (what John of the Cross called the passive night) and clinical depression &mdash; though the two can coexist and are sometimes confused. In the dark night, God withdraws the felt sense of his presence in order to deepen the soul&rsquo;s dependence on faith rather than feeling: the joy that was previously felt in prayer, worship, or Scripture becomes inaccessible, not as punishment but as purification. The appropriate response is to continue the practices of abiding without demanding the felt return of joy. In clinical depression, the neurological capacity for positive affect is impaired and requires medical and therapeutic attention. Both can be present simultaneously, and both deserve care. The absence of felt joy is not evidence of the absence of God or of spiritual failure; it is often the entry point into a deeper and more tested form of joy.",
              },
            ].map((item) => (
              <article key={item.title} style={cardStyle}>
                <h2
                  style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12, lineHeight: 1.35, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </article>
            ))}
          </section>
        )}

        {/* Tab: The Joy Set Before Jesus */}
        {tab === "The Joy Set Before Jesus" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              Hebrews 12:2 contains one of the most striking statements in the New Testament: Jesus
              endured the cross for joy. Understanding what that joy was transforms the entire
              theology of Christian suffering and endurance.
            </p>

            {[
              {
                title: "Hebrews 12:2 &mdash; For the Joy Set Before Him",
                body: "&ldquo;Looking to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross, despising the shame, and is seated at the right hand of the throne of God&rdquo; (Heb 12:2). The Greek anti t&ecirc;s prokeimenēs autō charas can be translated either &ldquo;for the joy&rdquo; (joy as the motive) or &ldquo;instead of the joy&rdquo; (joy as what was exchanged). Most contemporary scholars prefer &ldquo;for the joy&rdquo; &mdash; joy as the purpose and motive of the cross. Jesus did not endure the cross despite the absence of joy; he endured it because of a joy set before him that made the cross worth enduring. Joy, not mere duty, was the engine of the atonement.",
              },
              {
                title: "What This Joy Was &mdash; The Restored Communion with Humanity",
                body: "What was the joy set before Jesus? The letter to the Hebrews, read in its entirety, gives the answer: the restored communion between God and humanity that the cross achieves. The high priest language of Hebrews points to the Day of Atonement, when the way into God&rsquo;s presence was opened. Jesus, as the great high priest, opens the way permanently and completely (Heb 10:19-22). The joy set before him was the joy of a shepherd who has found the lost sheep, the joy of a father who has his child restored to him, the joy of God bringing &ldquo;many sons and daughters to glory&rdquo; (Heb 2:10). The cross was not tragic but purposive: it was the price of a joy that was worth every part of what it cost.",
              },
              {
                title: "Joy as the Motive of the Incarnation and Passion",
                body: "If joy set before him motivated the cross, the same logic applies to the incarnation: God became human, not as a grim necessity, but in joyful pursuit of the reunion with humanity that was his creative intent from the beginning. The Word became flesh and dwelt among us (John 1:14) &mdash; tabernacled, pitched his tent in the human neighborhood &mdash; because the joy of that dwelling was worth the cost of the humiliation. This transforms the entire shape of the Christian narrative: the story of redemption is not a tragedy with a happy ending but a comedy in the classical sense &mdash; a story whose ending is joy, and whose middle sections, however dark, are purposively aimed at that ending. The cross is not the point; the joy is the point; the cross is the path.",
              },
              {
                title: "How This Transforms Christian Suffering",
                body: "Hebrews 12:1-2 places this Christological principle within an explicit framework for Christian endurance: &ldquo;Let us run with endurance the race that is set before us, looking to Jesus&hellip;&rdquo; The same logic that governed Jesus&rsquo;s endurance governs ours: we endure for joy, not despite the absence of it. The Christian in suffering is not asked to pretend the suffering does not hurt but to fix their eyes on the joy set before them &mdash; the same eschatological joy for which Jesus went to the cross. We endure because the joy at the end is real, certain, and worth the cost of the present pain. This is not stoic detachment from pain but purposive orientation toward a joy that the pain cannot destroy.",
              },
              {
                title: "We Endure for Joy, Not Despite It",
                body: "The most important theological inversion that Hebrews 12:2 produces is this: endurance in Christian suffering is not the gritted-teeth absence of joy but the joyful anticipation of it. The person who endures suffering by sheer willpower, without the horizon of the coming joy, will eventually break. The person who endures in the pattern of Jesus &mdash; eyes fixed on the joy set before them, seeing the present suffering in light of its eschatological outcome &mdash; has an interior resource that willpower alone cannot provide. Joy is not the reward for endurance; it is the fuel of it. We do not endure and then receive joy; we endure because joy is already set before us, drawing us forward through the darkness toward what lies on the other side.",
              },
            ].map((item) => (
              <article key={item.title} style={cardStyle}>
                <h2
                  style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12, lineHeight: 1.35, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </article>
            ))}
          </section>
        )}

        {/* Tab: Joy as Resistance */}
        {tab === "Joy as Resistance" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              Christian joy is not merely personal or emotional &mdash; it is political and
              eschatological. To rejoice in the Lord in the face of empire, oppression, and the
              principalities of darkness is a subversive act. This section traces joy as resistance.
            </p>

            {[
              {
                title: "Nehemiah 8:10 &mdash; The Joy of the LORD Is Your Strength",
                body: "&ldquo;Do not be grieved, for the joy of the LORD is your strength&rdquo; (Neh 8:10). The context is the reading of the Law to the returned exiles, who are weeping at what they have heard. Nehemiah and Ezra command them to stop mourning, to feast, to send portions to those who have nothing. The joy of the LORD &mdash; the gladness of restored covenant relationship with God &mdash; is their strength for the enormous task of rebuilding a shattered community. Joy here is not decorative; it is fortifying. The people returning from exile are living under the shadow of imperial power; their joy in the LORD is the resource from which their strength to rebuild, resist, and persist is drawn. To rejoice in exile is to refuse to let the empire define the conditions of life.",
              },
              {
                title: "Joy in the Face of Empire &mdash; The Psalms as Resistance Songs",
                body: "Many of the psalms were written and sung under the shadow of imperial power &mdash; Babylonian exile, Assyrian threat, Persian domination. The psalms of praise and joy that were sung in these conditions were not naive; they were subversive. To sing &ldquo;The LORD reigns&rdquo; (Ps 96-99) when Babylon or Persia apparently reigns is a political statement. It refuses to grant ultimate authority to the visible power. Psalm 46 &mdash; &ldquo;God is our refuge and strength, a very present help in trouble&rdquo; &mdash; is a song of joy in the midst of national catastrophe, a declaration that the city of God is more real and more permanent than the empires that are shaking around it. The Psalms teach that joy in God is itself an act of political resistance.",
              },
              {
                title: "The Black Church&rsquo;s Tradition of Joy Amid Oppression",
                body: "One of the most powerful testimonies to joy as resistance in Christian history is the tradition of worship and music in the Black church in America. Under slavery, in the Jim Crow South, through decades of systematic dehumanization and terror, Black Christians sustained communities of extraordinary joy. The spirituals &mdash; &ldquo;Swing Low, Sweet Chariot,&rdquo; &ldquo;Go Down, Moses,&rdquo; &ldquo;We Shall Overcome&rdquo; &mdash; are simultaneously songs of lament, hope, coded communication, and extravagant joy. This joy was not the denial of suffering; it was the defiant declaration that the suffering was not the last word. The slaveholder could own the body; he could not own the joy that came from knowing whose image the body bore. The Black church tradition is the most sustained demonstration in American history that Christian joy is a form of resistance.",
              },
              {
                title: "Advent Joy as Eschatological &mdash; Already but Not Yet",
                body: "The season of Advent captures the structure of Christian joy in a liturgical form: it is the joy of those who live between the first and second comings of Christ, who know that the King has come and that he is coming again. Advent joy is eschatological &mdash; it is the joy of the already-but-not-yet, the joy of those who have the firstfruits of the Kingdom and are waiting for the full harvest. This joy is realistic about the present darkness (Advent begins in the longest nights of the year) but refuses to be defined by it. The candles lit in the darkness are a liturgical declaration: the light has come, the light is coming, and the darkness cannot overcome it. Advent trains Christians in the practice of eschatological joy &mdash; the joy that looks at the present condition of the world and says: this is not the end.",
              },
              {
                title: "The Beatitudes as Surprising Joy",
                body: "The Beatitudes (Matt 5:3-12) open the Sermon on the Mount with a series of pronouncements that invert every cultural assumption about who is flourishing: Blessed (makarioi &mdash; joyful, happy, flourishing) are the poor in spirit, the mourning, the meek, the persecuted. These are not promises that these conditions will soon end; they are declarations that the conditions create the context for a joy that empire cannot give and cannot take away. The poor in spirit have discovered that the Kingdom of Heaven belongs to those who have nothing left to offer; the mourning have found that God&rsquo;s comfort meets them in the grief. The Beatitudes are a subversive catalog of the conditions in which Christian joy is most fully available &mdash; not because suffering is good but because those conditions empty the soul of everything but God. Joy as resistance begins here: in the declaration that the meek are flourishing.",
              },
            ].map((item) => (
              <article key={item.title} style={cardStyle}>
                <h2
                  style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12, lineHeight: 1.35, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </article>
            ))}

            <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                Joy as a theological act
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                To rejoice in the LORD in the middle of darkness, poverty, oppression, or grief is to
                make a theological declaration: this is not the last word. The empire does not define
                reality. The darkness does not define the future. God reigns, the Kingdom is coming,
                and the joy of that Kingdom is available now as a foretaste and a weapon. Joy, fully
                understood, is one of the most subversive things a Christian can do.
              </p>
            </div>
          </section>
        )}

        {/* Tab: Videos */}
        {tab === "Videos" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              Three video teachings on the theology of joy &mdash; Tim Keller on joy and Philippians,
              C.S. Lewis and Surprised by Joy, and John Piper on Christian Hedonism and the pursuit
              of joy in God.
            </p>

            {[
              {
                videoId: "VgBSAZfRL1s",
                title: "Tim Keller on Joy and Philippians",
                description:
                  "Tim Keller explores Philippians as the epistle of joy &mdash; written from prison, structured around rejoicing in the Lord, and grounded in the contentment that Paul calls a learned secret.",
              },
              {
                videoId: "WyHVKXz1k5I",
                title: "C.S. Lewis &mdash; Surprised by Joy",
                description:
                  "An exploration of C.S. Lewis&rsquo;s concept of Joy (Sehnsucht) &mdash; the intense longing that beauty produces but cannot satisfy, and what it reveals about the soul&rsquo;s design and destination.",
              },
              {
                videoId: "vMf7FH-UQXQ",
                title: "John Piper on Christian Hedonism and Joy",
                description:
                  "John Piper presents his theology of Christian Hedonism &mdash; the argument that God is most glorified in us when we are most satisfied in him, and that the pursuit of joy in God is not optional but our highest calling.",
              },
            ].map((video) => (
              <article key={video.videoId} style={cardStyle}>
                <VideoEmbed videoId={video.videoId} title={video.title} />
                <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: "1rem 0 0.4rem" }}>
                  {video.title}
                </h3>
                <p
                  style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: video.description }}
                />
              </article>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
