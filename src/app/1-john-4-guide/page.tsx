"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Testing the Spirits",
  "God Is Love",
  "Perfect Love",
  "Application",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Overview",
    heading: "Overview of 1 John 4",
    reference: "1 John 4:1&ndash;21",
    paragraphs: [
      "First John 4 is one of the most concentrated theological passages in all of Scripture. Within twenty-one verses it moves from a warning about false spirits to the declaration &ldquo;God is love,&rdquo; from the historical reality of the incarnation to the inner witness of the Spirit, from the command to test every spirit to the assurance that perfect love casts out fear. It is at once rigorously doctrinal and intensely personal &mdash; a letter that addresses a community under pressure from false teachers who denied the full humanity of Christ, while simultaneously drawing that community into the depths of the divine love that sent the Son.",
      "The letter was written by the apostle John, most likely in the final decades of the first century, to communities in Asia Minor who had recently experienced a painful split. A group of teachers had left the fellowship (2:19) promoting a version of the faith that separated the spiritual Christ from the human Jesus &mdash; an early form of the Docetic or proto-Gnostic error. John writes to assure the &ldquo;little children&rdquo; who remain that they have the truth, to expose the false teaching by its failure to confess Jesus Christ coming in the flesh, and to anchor the community&rsquo;s identity in the mutual love that flows from knowing the God who is love.",
      "Chapter 4 builds on the foundation laid in chapter 3, where John has already declared that we are children of God and that the one born of God does not make a practice of sin. Now he turns to the spirits &mdash; both the spirit of truth and the spirit of error that animate the rival teachers &mdash; and then to the ground of all Christian love: God&rsquo;s own prior love revealed in the mission of his Son. The chapter&rsquo;s two great affirmations (&ldquo;God is love,&rdquo; vv. 8 and 16) are not merely maxims but theological arguments: because God is love and has acted in love, his people must love one another.",
      "The structure of the chapter is chiastic and circular, as is characteristic of John&rsquo;s writing. It does not progress in a straight line but spirals around its central themes: the incarnation as the definitive act of love, the indwelling Spirit as the source of our love, and the love-command as the test and expression of genuine knowledge of God. Each repetition deepens rather than merely restates, so that by verse 21 the command to love one&rsquo;s brother is not experienced as a burden but as the natural fruit of abiding in the God who loved us first.",
      "To read 1 John 4 well requires holding together two things that are often separated: the doctrinal and the ethical, the theological and the relational. John refuses to let his readers know God in the abstract while failing to love their brothers and sisters in the concrete. &ldquo;If anyone says, &lsquo;I love God,&rsquo; and hates his brother, he is a liar&rdquo; (4:20). The test of authentic faith is not intellectual assent alone but the love that such assent, rightly held, always produces. Orthodoxy without love is, for John, self-contradictory.",
      "Understanding this chapter also requires attending to its historical urgency. John is not writing theology from a position of comfortable security but from the pastoral frontline of a community shaken by spiritual deception and division. His tone shifts between pastoral warmth (&ldquo;beloved&rdquo; appears repeatedly) and sharp doctrinal clarity. He cares too much for the health and survival of these communities to leave them theologically vague. The love he commends is not sentimental tolerance but the costly, concrete, tested love that flows from a robust and carefully guarded faith in the incarnate Son of God.",
    ],
  },
  {
    id: "Testing the Spirits",
    heading: "Testing the Spirits: Discerning Truth from Error",
    reference: "1 John 4:1&ndash;6",
    paragraphs: [
      "&ldquo;Beloved, do not believe every spirit, but test the spirits to see whether they are from God, for many false prophets have gone out into the world&rdquo; (4:1). With this word, John places his readers on alert. The early church lived in a world dense with spiritual claims &mdash; prophets, teachers, and visionaries of all kinds moved through the communities of the Roman Empire, and not all of them spoke the truth. The command to &ldquo;test the spirits&rdquo; is not cynicism or spiritual cowardice; it is wisdom. The capacity to discern is a gift the Spirit gives precisely because the community faces real danger from deception.",
      "John&rsquo;s test is christological and concrete: &ldquo;Every spirit that confesses that Jesus Christ has come in the flesh is from God, and every spirit that does not confess Jesus is not from God&rdquo; (4:2&ndash;3). The key phrase is &ldquo;come in the flesh&rdquo; &mdash; &ldquo;en sarki eleluthota.&rdquo; The false teachers apparently denied the full incarnation of the eternal Son, perhaps asserting that the divine Christ only appeared to be human, or that he temporarily inhabited the man Jesus but departed before the crucifixion. John&rsquo;s test cuts through such speculation: a spirit from God will confess that the eternal Word actually and fully became flesh.",
      "The historical particularity of the test is significant. The criterion is not a general belief in God, or in love, or in spiritual experience, but a specific confession about a specific historical person: Jesus Christ, come in the flesh. Christianity stands or falls with the claim that in Jesus of Nazareth, born of Mary, crucified under Pontius Pilate, the eternal Son of God took on genuine human nature &mdash; not as a disguise, not as a temporary vehicle, but as an irrevocable and permanent act of divine condescension. Any spiritual teaching that undermines this claim, however appealing it might seem, is not from God.",
      "John introduces the spirit of antichrist, which even now is &ldquo;already in the world&rdquo; (4:3). The antichrist is not only a future eschatological figure (though John acknowledges such expectations in 2:18) but a present spiritual force that expresses itself wherever the incarnation is denied. This spirit was at work in the false teachers who had left the community (2:19), and it continues to operate through any teaching that severs the divine Son from the human Jesus.",
      "Then John pivots to assurance: &ldquo;Little children, you are from God and have overcome them, for he who is in you is greater than he who is in the world&rdquo; (4:4). The community is not defenseless. The Spirit who indwells them is greater than any deceptive spirit &mdash; greater than the spirit of error, greater than the spirit of antichrist, greater than the world that listens to false prophets. The victory has already been won, not by the community&rsquo;s superior discernment but by the greater power of the Spirit of truth who dwells in them.",
      "The contrast between the spirit of truth and the spirit of error (4:6) gives the church a further criterion: those who are from God listen to the apostolic testimony, to those who &ldquo;know God&rdquo; through the original eyewitness tradition. John is here asserting the authority of the apostolic message as the standard against which all spiritual claims must be measured. In every age, testing the spirits means returning to the testimony of those who were with the Word from the beginning &mdash; which is, in practice, returning to Scripture.",
    ],
  },
  {
    id: "God Is Love",
    heading: "God Is Love: The Theological Heart of the Chapter",
    reference: "1 John 4:7&ndash;16",
    paragraphs: [
      "&ldquo;Beloved, let us love one another, for love is from God, and whoever loves has been born of God and knows God. Anyone who does not love does not know God, because God is love&rdquo; (4:7&ndash;8). These three verses are among the most theologically dense in the New Testament. John does not merely say that God is loving, or that God loves, or that God acts lovingly &mdash; though all of this is true. He says &ldquo;God is love.&rdquo; Love is not a property God happens to possess alongside other properties; it is the very character of his being, the deepest description of who he is in himself.",
      "This identification has a radical corollary: the test of whether one knows God is whether one loves. Not whether one has correct doctrine, though doctrine is important. Not whether one has powerful spiritual experiences, though the Spirit is at work. Not whether one can perform miracles or speak in tongues. The most fundamental evidence of genuine knowledge of God is love for other people &mdash; because God himself is love, and knowing him means being shaped by what he is. A person who does not love &ldquo;does not know God&rdquo; (4:8), regardless of what they profess.",
      "John then grounds love&rsquo;s possibility in a specific historical event: &ldquo;In this the love of God was made manifest among us, that God sent his only Son into the world, so that we might live through him. In this is love, not that we have loved God but that he loved us and sent his Son to be the propitiation for our sins&rdquo; (4:9&ndash;10). The love John speaks of is not a warm feeling or an aspiration; it is an accomplished act. God acted first. He sent the Son. He did not wait for humanity to reach out toward him before he extended his love; while we were yet sinners, the Son came in the flesh.",
      "The word &ldquo;propitiation&rdquo; (&ldquo;hilasmon&rdquo;) is one of the strongest words in the New Testament for the atonement. It speaks of the removal of God&rsquo;s righteous wrath against sin through the sacrifice of the Son. John is not offering a vague spirituality of divine benevolence; he is describing a God who takes sin seriously, whose holiness cannot simply overlook rebellion, and who solved the problem not by lowering his standards but by bearing the cost himself in the person of his Son. It is precisely because the love is costly &mdash; because it required this &mdash; that it is such staggering love.",
      "&ldquo;No one has ever seen God; if we love one another, God abides in us and his love is perfected in us&rdquo; (4:12). The invisibility of God, which might seem like a problem for knowledge of God, is resolved through the community&rsquo;s love for one another. God becomes visible in the world through the love that his people practice. The church is not merely an organization that knows about God&rsquo;s love; it is meant to be the place where that love becomes present and tangible &mdash; where the unseen God is, in some real sense, seen.",
      "The repetition of &ldquo;God is love&rdquo; in verse 16 (&ldquo;God is love, and whoever abides in love abides in God, and God abides in him&rdquo;) deepens the first occurrence. To abide in love is to abide in God &mdash; and to abide in God is to abide in love. The two are not identical (love is not God) but they are inseparable. The one who truly knows who God is, and who genuinely remains in relationship with him, will be a person whose life is increasingly characterized by the love that is God&rsquo;s own nature.",
    ],
  },
  {
    id: "Perfect Love",
    heading: "Perfect Love Casts Out Fear",
    reference: "1 John 4:17&ndash;21",
    paragraphs: [
      "&ldquo;There is no fear in love, but perfect love casts out fear. For fear has to do with punishment, and whoever fears has not been perfected in love&rdquo; (4:18). This verse is among the most liberating in the New Testament, and also among the most misunderstood. John is not describing an emotional state of constant fearlessness; he is describing the objective reality of the love that God has toward those who are in him. When we speak of &ldquo;perfect love,&rdquo; the word &ldquo;perfect&rdquo; translates the Greek &ldquo;teleia&rdquo; &mdash; love that has reached its goal, its full expression, its completion.",
      "The context is verse 17: &ldquo;By this is love perfected with us, so that we may have confidence for the day of judgment, because as he is so also are we in this world.&rdquo; The fear John has in mind is specifically the fear of judgment &mdash; the dread that on the last day one will be found wanting, condemned, cast away. This fear is not the healthy reverence of one who takes God seriously, but the slavish terror of one who does not know whether they are loved or not. And the answer John gives is not a list of moral achievements to remove that fear but the love of God already poured out in the sending of the Son.",
      "The logic is precise: the one who fears punishment has not yet grasped the fullness of what God has done in love. The propitiation of verse 10 &mdash; the bearing away of the wrath that sin deserved &mdash; has removed the grounds for condemnation. &ldquo;There is therefore now no condemnation for those who are in Christ Jesus&rdquo; (Romans 8:1). To still live in fear of judgment is not humility; it is a failure to believe the good news. The cure is not more effort but more love &mdash; a deeper apprehension of the love that God has already lavished on us.",
      "&ldquo;We love because he first loved us&rdquo; (4:19) is one of the most compact and profound sentences in the New Testament. It establishes priority: God&rsquo;s love is not a response to our love; our love is a response to his. This has both theological and psychological implications. Theologically, it rules out any system in which human beings initiate the relationship with God or earn his love by their performance. Psychologically, it means that the capacity to love others genuinely flows not from summoning heroic willpower but from being loved by God &mdash; from receiving and resting in the love that he has already given.",
      "The chapter culminates with one of John&rsquo;s characteristic antitheses: &ldquo;If anyone says, &lsquo;I love God,&rsquo; and hates his brother, he is a liar; for he who does not love his brother whom he has seen cannot love God whom he has not seen&rdquo; (4:20). John will not permit a spirituality that floats above the particular messiness of human relationships. Love for God must come down to earth. The brother or sister who is difficult, ungrateful, different from us, irritating, or demanding is precisely the test of whether our declared love for God is real. It is easy to love an invisible God in the abstract; it is hard to love a visible neighbor in the concrete. John insists that we cannot have the former without the latter.",
      "The final verse states the command that is now not a burden but a description: &ldquo;And this commandment we have from him: whoever loves God must also love his brother&rdquo; (4:21). The must here is not the must of naked obligation but the must of logic and nature. If we have been born of the God who is love, if his Spirit dwells in us and his love has been perfected in us, then love for the brothers and sisters is the natural and necessary expression of all that. The command is not new information laid on top of nature; it is the articulation of what the new nature, born from above, already desires to do.",
    ],
  },
  {
    id: "Application",
    heading: "Applying 1 John 4 Today",
    reference: "1 John 4:1&ndash;21",
    paragraphs: [
      "The first practical call of 1 John 4 is the call to test the spirits &mdash; to bring every spiritual claim, every teaching that shapes the community, every influential voice into contact with the concrete apostolic confession about Jesus Christ come in the flesh. This is not a suspicious or defensive posture toward the world; it is the simple wisdom of a people who know that the stakes of getting Christ right are infinite. In an age saturated with spiritual content &mdash; podcasts, social media teachers, bestselling books, online platforms of every kind &mdash; the discipline of testing is more urgent than ever, and the standard has not changed: what does this teaching say about Jesus, and does it align with the testimony of those who knew him?",
      "The second application is the most personal and the most searching: does our life show evidence that we know the God who is love? John&rsquo;s test is not primarily a test of doctrinal knowledge but of relational fruit. Are we people characterized by love for our brothers and sisters in the body of Christ? Do we prefer them to ourselves? Do we give concretely and sacrificially to those in need (as John makes clear in 3:17)? Do we forgive readily, speak well of one another, seek reconciliation rather than nursing grievances? These are not add-ons to the Christian life; they are the evidence that the God who is love actually dwells in us.",
      "The declaration that &ldquo;we love because he first loved us&rdquo; has profound implications for spiritual formation. It means that the primary discipline for growing in love is not trying harder but receiving more fully. The Christian who wants to love better should return again and again to the love that God has already shown &mdash; to the sending of the Son, to the propitiation for sins, to the testimony that God did not wait for us but came to us. Contemplating this love, receiving it, sitting with it in worship and prayer and Scripture &mdash; these are the practices that fill the well from which love for others flows.",
      "The freedom from fear that 1 John 4 offers is one of the most practically important gifts of the gospel. Many believers live under a low-grade anxiety about their standing with God &mdash; a nagging uncertainty about whether they have done enough, prayed enough, believed enough. John&rsquo;s answer is not a call to greater moral effort but a direction toward the completed love of God in Christ. The day of judgment need not be a source of dread for those who are in him, because the judge is the one who sent the Son &ldquo;not to condemn the world, but that the world might be saved through him&rdquo; (John 3:17). To receive this fully is to find the fear evaporating in the warmth of a love that chose us first.",
      "The practical command to love the visible brother rather than only the invisible God has immediate implications for church life. The community of faith is where the rubber meets the road for 1 John 4. The person we find most difficult in the congregation, the one whose personality grates against ours, the one who offended us three years ago and has not yet apologized, the one whose background or politics or worship preferences differ from ours &mdash; this person is the brother or sister whose presence in our lives is the gift and the test of our love for God. To love them is not to feel warm feelings about them but to choose their good, to speak truthfully and kindly, to pray for them and serve them in practical ways.",
      "Finally, 1 John 4 gives the church a vision of its identity that is rooted in being rather than doing. We love because we are born of God, because we abide in him, because his Spirit dwells in us. The imperative flows from the indicative: what we are in Christ determines what we do. This means that when love feels difficult &mdash; when we are exhausted, hurt, depleted &mdash; the answer is not sheer willpower but return. Return to the love of God that is not contingent on our performance. Return to the one in whom we abide. Return to the testimony that the Son has come, that the propitiation has been made, that the Spirit of God dwells in all who believe. From that place, love becomes not a duty imposed from outside but a life lived from the inside out.",
    ],
  },
];

const videoItems = [
  { videoId: "l3QkE4nPjlw", title: "1 John 4 - God Is Love (Full Chapter Teaching)" },
  { videoId: "RXWBGp24Dis", title: "Perfect Love Casts Out Fear - 1 John 4:18 Explained" },
  { videoId: "TgfKuUiRtnk", title: "Testing the Spirits - Discernment in 1 John 4" },
  { videoId: "2V05mFmH0YA", title: "Abiding in Love - The Heart of 1 John 4" },
];

export default function FirstJohn4GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            1 John 4 &mdash; God Is Love
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            John&rsquo;s call to test every spirit, his profound declaration that &ldquo;God is love,&rdquo; the historical grounding of love in the sending of the Son, the freedom that comes when perfect love casts out fear, and the command to love one another as the indispensable mark of knowing God.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3rem", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
            Explore 1 John 4 through these video teachings on the nature of God&rsquo;s love, testing the spirits, perfect love casting out fear, and abiding in love.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>We Love Because He First Loved Us</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First John 4 anchors Christian love not in human resolve but in the prior, initiating love of God revealed in the sending of his Son. The one who abides in God abides in love, and the one who abides in love abides in God. Perfect love &mdash; the love that God himself has shown &mdash; casts out every fear, fulfills every command, and becomes visible in the world through the concrete, costly love of the people of God for one another.
          </p>
        </div>
      </main>
    </div>
  );
}
