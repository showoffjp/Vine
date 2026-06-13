"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "God Is Light",
  "Walking in the Light",
  "God Is Love",
  "The Tests of Faith",
  "Assurance of Salvation",
  "Videos",
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
    id: "God Is Light",
    heading: "God Is Light",
    reference: "1 John 1",
    paragraphs: [
      "Written by the apostle John late in his life to churches facing false teaching &mdash; likely an early form of Gnosticism that denied Christ&rsquo;s true humanity &mdash; 1 John is a pastoral letter about how to know that one truly belongs to God. The aged apostle writes not to a single congregation but to a circle of churches under his care, addressing them tenderly as &ldquo;my little children&rdquo; even as he confronts a serious threat to their faith.",
      "The false teachers troubling these churches seem to have claimed a superior spiritual knowledge while denying that the Son of God had truly come in the flesh. Against this, John writes to reassure genuine believers and to expose the error for what it is. His pastoral aim throughout is assurance: he wants those who truly believe to rest secure, and he wants to unmask any counterfeit spirituality that severs faith from the real, historical Christ.",
      "The letter opens with an echo of John&rsquo;s Gospel: &ldquo;That which was from the beginning, which we have heard, which we have seen with our eyes&hellip; concerning the word of life&rdquo; (1:1). The piling up of sensory verbs &mdash; heard, seen, looked upon, touched &mdash; is deliberate and emphatic. John insists on the tangible reality of the incarnation against those who denied it. The Word of life was no phantom; the apostles handled him with their hands.",
      "From this eyewitness foundation John moves to fellowship. The purpose of his proclamation is &ldquo;so that you too may have fellowship with us; and indeed our fellowship is with the Father and with his Son Jesus Christ&rdquo; (1:3). The gospel is not merely information to be believed but communion to be shared &mdash; with the apostles, and through them with God himself. And he writes &ldquo;so that our joy may be complete,&rdquo; for true fellowship is the soil in which joy grows.",
      "John&rsquo;s first great declaration about God&rsquo;s character then follows: &ldquo;God is light, and in him is no darkness at all&rdquo; (1:5). This is the message the apostles heard from Christ himself and now pass on. It stands at the head of the letter as a defining truth about who God is, the standard against which all claims to know him must be measured.",
      "Light represents God&rsquo;s holiness, truth, and moral purity. To say there is &ldquo;no darkness at all&rdquo; in him is to affirm his utter perfection &mdash; no shadow of evil, no trace of falsehood, no hidden corruption. This is the God with whom the false teachers claimed fellowship while their lives told another story, and John will not allow such a contradiction to stand unchallenged.",
      "To claim fellowship with God while &ldquo;walking in darkness&rdquo; is to lie; genuine fellowship with the God who is light means walking in the light, in honesty and righteousness. John draws the line sharply at the very start: the character of God determines the shape of the life that truly knows him. One cannot belong to the light and live in the dark.",
    ],
  },
  {
    id: "Walking in the Light",
    heading: "Walking in the Light",
    reference: "1 John 1-2",
    paragraphs: [
      "Walking in the light does not mean sinless perfection &mdash; John is emphatic about this against any who claim to be without sin. It would be easy to misread &ldquo;walking in the light&rdquo; as a boast of moral flawlessness, but John immediately closes off that escape. The very next verses guard against both false humility and false perfectionism, charting a path of honest, ongoing dependence on Christ.",
      "&ldquo;If we say we have no sin, we deceive ourselves, and the truth is not in us. If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness&rdquo; (1:8-9). This is one of the most precious promises in Scripture: ongoing confession meets ongoing cleansing through the blood of Jesus. God is &ldquo;faithful and just&rdquo; to forgive &mdash; not merely merciful but just, because the price has already been paid at the cross.",
      "John writes &ldquo;so that you may not sin,&rdquo; but adds immediately, &ldquo;if anyone does sin, we have an advocate with the Father, Jesus Christ the righteous. He is the propitiation for our sins&rdquo; (2:1-2). The goal is holiness, never an excuse for sin; yet when the believer does fall, there is no despair, for Christ himself stands as advocate before the Father. He is both the one who pleads our case and the sacrifice that satisfies it.",
      "The word &ldquo;advocate&rdquo; pictures a defender who stands alongside the accused, and &ldquo;propitiation&rdquo; speaks of a sacrifice that turns away wrath and answers the demands of God&rsquo;s justice. Together they assure the troubled conscience that forgiveness rests not on the believer&rsquo;s performance but on the finished work and present ministry of Christ. The advocate who pleads our case is the very sacrifice that secures the verdict.",
      "The Christian life, then, is not a claim to perfection but a posture of walking in the light &mdash; honest about sin, quick to confess, and resting in the finished work of Christ who is both advocate and atoning sacrifice. To walk in the light is, paradoxically, to be willing to have one&rsquo;s sin exposed by that light, brought into the open, and washed away. Darkness hides sin; light confesses it and finds cleansing.",
      "The proof of knowing God is keeping his commandments and walking as Jesus walked. &ldquo;Whoever says he abides in him ought to walk in the same way in which he walked&rdquo; (2:6). John offers a plain test: the one who truly knows God will increasingly live as Jesus lived. Profession without obedience is empty, but genuine knowledge of God bears the fruit of a transformed life.",
      "So the believer holds two truths together without contradiction. We aim at holiness and grieve over sin, yet we never rest our security on our own attainment. We walk in the light by being honest about our darkness, confessing freely because the advocate is faithful and the propitiation is sufficient. This is the steady, humble rhythm of the Christian life.",
    ],
  },
  {
    id: "God Is Love",
    heading: "God Is Love",
    reference: "1 John 4",
    paragraphs: [
      "The letter&rsquo;s second great declaration about God comes in chapter 4: &ldquo;God is love&rdquo; (4:8, 16) &mdash; one of the most profound statements about God in all of Scripture. Set alongside &ldquo;God is light&rdquo; from chapter 1, it completes the portrait: the holy God is also, in his very being, love. These are not competing attributes but a single, perfect character, holiness and love forever united in him.",
      "But John roots this not in sentiment but in the cross: &ldquo;In this is love, not that we have loved God but that he loved us and sent his Son to be the propitiation for our sins&rdquo; (4:10). Love is not defined by our feelings or even by our love for God, but by God&rsquo;s prior, initiating love for us. He moves first, while we are still sinners, and the proof is the sending of his Son.",
      "The love of God is therefore defined by self-giving sacrifice, supremely the death of Christ. John will not let love drift into vague sentiment; he anchors it to a bloody cross. To know what love is, one must look not inward to one&rsquo;s emotions but outward to Calvary, where the Son was given as the propitiation that turns away wrath and reconciles us to God.",
      "And this love is meant to flow through believers to one another: &ldquo;Beloved, if God so loved us, we also ought to love one another&hellip; if we love one another, God abides in us and his love is perfected in us&rdquo; (4:11-12). The love we have received is not meant to terminate on us; it is meant to pass through us. As we love one another, the invisible God becomes visible, and his love reaches its intended completion.",
      "Love and the knowledge of God are inseparable: &ldquo;Whoever does not love does not know God, because God is love.&rdquo; The logic is simple and searching. Since love is the very nature of God, a loveless life proves a stranger to him, whatever it may profess. To know the God who is love is necessarily to become, however imperfectly, a person who loves.",
      "Perfect love casts out fear (4:18) &mdash; the one who rests in God&rsquo;s love need not dread judgment. Fear and the assurance of love cannot coexist; as love grows, dread diminishes. The believer who grasps how fully God has loved him in Christ is freed from the terror of the day of judgment, for the One who is his judge has already proven himself his Savior and Friend.",
      "To abide in love is to abide in God himself. &ldquo;Whoever abides in love abides in God, and God abides in him&rdquo; (4:16). Here love is no longer merely a duty but a dwelling place. The Christian life, at its heart, is a remaining in the love of God &mdash; receiving it, resting in it, and letting it overflow to others &mdash; and in that abiding we find God himself, who is love.",
    ],
  },
  {
    id: "The Tests of Faith",
    heading: "The Tests of Faith",
    reference: "1 John (throughout)",
    paragraphs: [
      "1 John is structured around a series of &ldquo;tests&rdquo; by which believers can examine whether their faith is genuine. Rather than developing a single linear argument, John circles repeatedly around a few key themes, returning to them again and again like a spiral. Read this way, the letter becomes a kind of self-examination, helping anxious believers discern whether their faith is real and exposing counterfeit profession.",
      "There are three recurring tests, woven throughout the letter, and they appear and reappear in different combinations. They are not three separate doors but three windows into the same house &mdash; three angles from which to view a single, genuine spiritual life. Where the life is real, all three will, over time, be present together.",
      "The first is the doctrinal test: do you believe that Jesus is the Christ, the Son of God come in the flesh? (2:22-23, 4:2-3). Against the false teachers who denied the incarnation, John makes right belief about the person of Christ a non-negotiable mark of true faith. To deny the Son is to forfeit the Father; to confess Jesus as the Christ come in the flesh is the confession of the Spirit of God.",
      "The second is the moral test: do you obey God&rsquo;s commandments and walk in righteousness? (2:3-6, 3:6-10). &ldquo;By this we know that we have come to know him, if we keep his commandments&rdquo; (2:3). Genuine faith produces obedience &mdash; not perfection, but a real and growing direction of life away from sin and toward righteousness. The one born of God does not make a settled practice of sin.",
      "The third is the relational and social test: do you love your fellow believers? (2:9-11, 3:14-18, 4:7-21). Love for the brethren is perhaps the test John presses most insistently. Hatred of a brother is the mark of darkness; love is the mark of one who has passed from death to life. And this love must be concrete &mdash; &ldquo;not in word or talk but in deed and in truth&rdquo; (3:18).",
      "These three &mdash; right belief, right behavior, and love for the brethren &mdash; function together as evidence of authentic spiritual life. John is not teaching salvation by works but describing the inevitable fruit of genuine regeneration: those truly born of God will believe rightly, increasingly obey, and love their brothers and sisters. The tree is known by its fruit, and these are the fruits the new birth always, in some measure, produces.",
      "&ldquo;We know that we have passed out of death into life, because we love the brothers&rdquo; (3:14). The tests are not meant to torment the sincere believer but to assure him. Where faith in Christ, a life turning from sin, and genuine love for God&rsquo;s people are present, the believer may rest in the confidence that he has truly been born again and belongs to God.",
    ],
  },
  {
    id: "Assurance of Salvation",
    heading: "Assurance of Salvation",
    reference: "1 John 5",
    paragraphs: [
      "John states his purpose plainly: &ldquo;I write these things to you who believe in the name of the Son of God, that you may know that you have eternal life&rdquo; (5:13). This verse is the key that unlocks the whole letter. Everything John has written &mdash; the declarations about God, the tests of genuine faith, the warnings against false teaching &mdash; serves this single pastoral end: that believers may know, with settled certainty, that eternal life is already theirs.",
      "Where John&rsquo;s Gospel was written that people might believe (John 20:31), this letter is written that believers might know &mdash; might have settled assurance. The Gospel evangelizes; the letter assures. Together they show that God means not only to bring his people to faith but to bring them to confidence, freeing them from the gnawing uncertainty that they might, after all, not truly belong to him.",
      "The grounds of assurance are the very tests John has laid out: belief in Christ, obedience to God, and love for others provide evidence that one has truly been born again. Assurance is not wishful thinking or mere positive feeling; it rests on objective marks that the Spirit produces in a regenerate life. Where these are present, the believer has solid ground to stand on, not in himself but in the work God has done in him.",
      "At the center stands the possession of the Son: &ldquo;Whoever has the Son has life; whoever does not have the Son of God does not have life&rdquo; (5:12). Eternal life is not finally a matter of measuring up but of having Christ. To possess the Son is to possess life itself; to be without him is to be without life, however religious one may appear. Assurance, then, points the believer back again and again to Christ.",
      "John assures believers of answered prayer, victory over sin, and the confidence that &ldquo;everyone who has been born of God&hellip; the evil one does not touch him&rdquo; (5:18). The one born of God is kept by God; the devil cannot finally claim him. Alongside this protection comes boldness in prayer &mdash; the confidence that God hears every request made according to his will &mdash; and a real, if not yet perfect, triumph over the dominion of sin.",
      "The letter closes with the certainty that the Son of God has come and given understanding, that believers are &ldquo;in him who is true,&rdquo; and the final pastoral warning: &ldquo;Little children, keep yourselves from idols&rdquo; (5:21). Having grounded his readers in assurance, John ends with a tender charge to guard their hearts against every false god that would draw them from the one true God in whom they have life.",
      "The dominant note of the letter is assurance &mdash; that those who believe in Christ and walk in his light and love may know, with confidence, that they belong to God. 1 John has rightly been called the epistle of assurance. It does not leave the sincere believer in anxious doubt but lifts his eyes to Christ and to the marks of grace within him, that he may rest, secure, in the love of the God who is light and love.",
    ],
  },
];

const videoItems = [
  { videoId: "1elml6Tj7Mc", title: "BibleProject - 1-3 John Overview" },
  { videoId: "udmWO1A5x1A", title: "God Is Love - 1 John 4 Explained" },
  { videoId: "Pn6vqYQYpiI", title: "Assurance of Salvation in 1 John" },
];

export default function ChristianBookOf1JohnGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The First Letter of John
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The epistle of assurance &mdash; God is light and God is love, walking in the light and confessing sin, the tests of genuine faith, and the confidence that those who believe in Christ may know they have eternal life.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                background: tab === t ? ACCENT : CARD,
                color: tab === t ? "#fff" : MUTED,
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

        {tab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of 1 John through visual teaching on the structure of the letter, the truth that God is love, and the assurance of salvation it was written to give.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>That You May Know</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            1 John was written that believers might know they have eternal life. The God who is light and love has sent his Son as both advocate and atoning sacrifice, so that those who believe in Christ, walk in his light, and love one another may rest with confidence in him who is true.
          </p>
        </div>
      </main>
    </div>
  );
}
