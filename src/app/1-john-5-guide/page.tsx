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
  "Overview",
  "Overcoming the World",
  "Three Witnesses",
  "God's Testimony",
  "Assurance of Eternal Life",
  "Prayer and Idols",
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
    id: "Overview",
    heading: "Overview of 1 John 5",
    reference: "1 John 5:1&ndash;21",
    paragraphs: [
      "First John 5 brings John&rsquo;s first letter to its triumphant conclusion, weaving together the great themes of the epistle &mdash; love, faith, and eternal life &mdash; into a final declaration about what it means to know God through his Son. Written to a community troubled by false teaching about the person of Christ, this chapter answers the confusion with clarity: the Jesus who came in history, testified to by three witnesses, is the Son of God, and everyone who believes in him has eternal life.",
      "The chapter opens by connecting love for God with love for his children, and then immediately ties love for God to keeping his commandments. But John does not leave this as mere moral obligation. He insists that &ldquo;his commandments are not burdensome&rdquo; (5:3), because the one who has been born of God possesses a faith that is itself the victory over the world. Obedience is not the path to new birth; it is the fruit of it, and the new birth gives a person resources that make obedience possible.",
      "The theological core of the chapter is the threefold witness to Jesus as the Son of God: the Spirit, the water, and the blood. These three witnesses agree, and their testimony is greater than any human witness because it is the testimony of God himself. The false teachers troubling John&rsquo;s community apparently denied that Jesus had come fully in the flesh, separating the divine Christ from the human Jesus. John counters this with the insistence that Jesus came not by water only &mdash; as if only at his baptism &mdash; but by water and blood, encompassing his whole ministry from Jordan to Calvary.",
      "From testimony John moves to assurance. Those who believe in the Son of God have the testimony of God dwelling within them, and on that basis they can know &mdash; not merely hope or suspect &mdash; that they have eternal life. The word &ldquo;know&rdquo; rings through the closing verses of the letter: we know we have eternal life, we know God hears our prayers, we know we can intercede for one another, we know we are of God. This is the assurance that John wants his readers to possess, not presumption but the quiet confidence of those who rest in the Son.",
      "The chapter closes with practical instruction about prayer, including a difficult word about &ldquo;sin that leads to death,&rdquo; before ending abruptly and memorably with the command: &ldquo;Little children, keep yourselves from idols&rdquo; (5:21). The letter that began with the Word of life ends with a warning against the idols that would displace him. In a world full of competing loyalties and false claims to ultimate reality, the Christian&rsquo;s task is to hold fast to the one who is &ldquo;the true God and eternal life&rdquo; (5:20).",
    ],
  },
  {
    id: "Overcoming the World",
    heading: "Overcoming the World Through Faith",
    reference: "1 John 5:1&ndash;5",
    paragraphs: [
      "John opens the chapter with a logical sequence that has the feel of a mathematical proof. Everyone who believes that Jesus is the Christ has been born of God (5:1a). Everyone who loves the Father loves whoever has been born of him (5:1b). Therefore, love for God&rsquo;s children is the test of love for God &mdash; and love for God is expressed in keeping his commandments (5:2&ndash;3). Faith, love, and obedience are not three separate tracks but a single river flowing from the same source: the new birth.",
      "The declaration that God&rsquo;s commandments &ldquo;are not burdensome&rdquo; (5:3) stands in deliberate contrast to the legalistic view that sees obedience as the heavy labor by which one earns God&rsquo;s favor. John&rsquo;s point is that the one who has been born of God has a new nature, and the new nature finds its joy in doing what God commands. The commandments feel burdensome only when one tries to obey them in the flesh, apart from the power of the Spirit. The person who has truly been born of God is not straining against the law from the outside; they love God, and love fulfills the law naturally.",
      "Then comes one of the most striking statements in the entire letter: &ldquo;For everyone who has been born of God overcomes the world. And this is the victory that has overcome the world &mdash; our faith&rdquo; (5:4). The tense is significant: the victory has already been won. The Christian does not fight for victory but from victory. Faith is described not merely as the instrument of overcoming but as the victory itself &mdash; because faith lays hold of the one who has already triumphed over the world, its ruler, and its false claims.",
      "The world, as John uses the term throughout this letter, is not the physical creation but the entire system of values, desires, and allegiances organized around opposition to God. It is the world that &ldquo;lies in the power of the evil one&rdquo; (5:19) &mdash; a realm of idolatry, pride, and the love of created things above the Creator. To overcome the world is to be freed from its gravitational pull, to love the Father more than what the world offers, and to see through its false promises.",
      "The question of verse 5 brings everything to a sharp focus: &ldquo;Who is it that overcomes the world except the one who believes that Jesus is the Son of God?&rdquo; The answer is implicit: no one else. All the striving of human religion, all the self-improvement projects of moral philosophy, all the social reforms of political ideology &mdash; none of these overcome the world, because none of them deal with the root of the problem, which is the human heart&rsquo;s natural alignment with a world in rebellion against God. Only faith in Jesus as the Son of God accomplishes this, because only this faith connects a person to the one who has already won.",
    ],
  },
  {
    id: "Three Witnesses",
    heading: "The Three Witnesses",
    reference: "1 John 5:6&ndash;8",
    paragraphs: [
      "&ldquo;This is he who came by water and blood &mdash; Jesus Christ; not by the water only but by the water and the blood. And the Spirit is the one who testifies, because the Spirit is the truth&rdquo; (5:6). These verses address a specific heresy that was threatening John&rsquo;s community: the teaching that the divine Christ descended upon the human Jesus at his baptism (water) but departed before his crucifixion (blood). This separation of the divine from the suffering and dying Jesus effectively gutted the atonement.",
      "John insists with emphasis &mdash; &ldquo;not by the water only but by the water and the blood&rdquo; &mdash; that Jesus Christ came through the whole arc of his ministry, from the Jordan to Golgotha. The one who was baptized and the one who bled on the cross are the same person: Jesus Christ, the Son of God. The cross is not a scene of human tragedy from which the divine Christ had already retreated; it is the climax of his saving mission, the moment at which the Son of God gave his life as a ransom. Any theology that protects the divine Christ from the suffering of the cross has lost the gospel.",
      "The three witnesses &mdash; Spirit, water, and blood &mdash; are then presented as a unified testimony. The law of Moses required two or three witnesses to establish a matter (Deuteronomy 19:15), and John is invoking that legal standard to say: the identity and mission of Jesus are established beyond doubt by a threefold concordant witness. The Spirit testifies to Christ in the believer&rsquo;s own experience, in Scripture, and through the proclamation of the gospel. The water of Jesus&rsquo; baptism testified to his identity as the beloved Son. The blood of his cross testified to the reality and completeness of his atoning work.",
      "It is striking that John says &ldquo;these three agree&rdquo; (5:8). They do not give three separate verdicts that happen to coincide; they speak with one voice. The testimony of the Spirit in the believer&rsquo;s heart does not contradict the historical testimony of water and blood &mdash; it confirms and interprets it. The inner witness of the Spirit is not some private spiritual experience disconnected from the Jesus of history; it is the Spirit&rsquo;s own testimony to the same Christ who walked into the Jordan and hung on the cross.",
      "For John&rsquo;s first-century readers, these verses were a call to hold fast to the full Christ &mdash; not a spiritualized deity who hovered above human suffering, but the incarnate Son of God who entered into flesh and blood, was baptized in solidarity with sinners, and died for the sins of the world. For contemporary readers, the same call applies: to resist every impulse to make Jesus safe and comfortable by evacuating his suffering of its saving significance, and instead to confess that the crucified Jesus is the Son of God, and that in his blood there is forgiveness, healing, and life.",
    ],
  },
  {
    id: "God's Testimony",
    heading: "God&rsquo;s Own Testimony About His Son",
    reference: "1 John 5:9&ndash;12",
    paragraphs: [
      "John now scales the argument to its highest level. &ldquo;If we receive the testimony of men, the testimony of God is greater, for this is the testimony of God that he has borne concerning his Son&rdquo; (5:9). Human courts function on the basis of human testimony, which is fallible, limited, and sometimes false. The testimony that establishes the identity of Jesus as the Son of God is nothing less than the testimony of God himself &mdash; and the God who cannot lie, who knows all things, who was present at the creation of all things, bears witness that Jesus is his Son.",
      "This testimony of God is not abstract. It is received and internalized by the believer: &ldquo;Whoever believes in the Son of God has the testimony in himself&rdquo; (5:10a). The inner witness of the Holy Spirit, which Paul also describes in Romans 8:16 when he says the Spirit bears witness with our spirit that we are children of God, is here presented as the testimony of God himself dwelling within the believer. This is a remarkable claim: those who believe in Jesus carry within themselves the testimony of the Almighty regarding his Son.",
      "The contrast between the believer and the unbeliever is correspondingly stark. The person who does not believe God &ldquo;has made him a liar&rdquo; (5:10b) &mdash; because he has rejected the testimony that God has given. Unbelief is not a neutral stance; it is, in effect, a charge against the character of God. To reject the gospel is to say that God has either deceived us or been deceived. John draws the line with characteristic clarity: there is no middle ground between receiving God&rsquo;s testimony about his Son and calling God a liar.",
      "The content of God&rsquo;s testimony is then stated with luminous simplicity: &ldquo;And this is the testimony, that God gave us eternal life, and this life is in his Son&rdquo; (5:11). Eternal life is not a reward distributed to the deserving; it is a gift from God, and it resides in a person &mdash; the Son of God. This means eternal life is not a commodity that can be separated from Christ himself. You cannot have eternal life while rejecting Jesus; you cannot lose eternal life while remaining in Jesus. Life and the Son are inseparable.",
      "The consequence follows with irresistible logic: &ldquo;Whoever has the Son has life; whoever does not have the Son of God does not have life&rdquo; (5:12). This is perhaps the clearest statement of the exclusivity of salvation through Christ in the entire New Testament. It is not harsh or narrow-spirited; it is simply the consequence of the fact that life is in the Son. God did not distribute eternal life across a variety of religious traditions like seeds scattered on the wind; he concentrated it in his Son, so that to have the Son is to have life, and to lack the Son is to lack life. John wrote this to assure his readers who believe &mdash; not to condemn those who do not, but to clarify what is at stake.",
    ],
  },
  {
    id: "Assurance of Eternal Life",
    heading: "Assurance of Eternal Life",
    reference: "1 John 5:13&ndash;15",
    paragraphs: [
      "&ldquo;I write these things to you who believe in the name of the Son of God, that you may know that you have eternal life&rdquo; (5:13). With this verse John states the purpose of the entire letter. He did not write to the uncertain so they might become more uncertain, or to the doubting so they might acquire more doubt. He wrote to believers so they might move from hope to knowledge, from anxiety to assurance, from the fragile sense that they might have eternal life to the settled confidence that they do.",
      "The word &ldquo;know&rdquo; here is oida in Greek, which refers to certain, settled knowledge &mdash; not the tentative knowing of incomplete information but the confident knowing of one who has good reason for their conviction. John is asserting that assurance of salvation is not arrogance; it is the normal and intended experience of the Christian believer. To be perpetually uncertain about one&rsquo;s eternal standing, when God has given testimony about his Son and the Spirit dwells within, is not humility &mdash; it is a failure to receive what God has freely given.",
      "The assurance of eternal life immediately produces confidence in prayer: &ldquo;And this is the confidence that we have toward him, that if we ask anything according to his will he hears us&rdquo; (5:14). The connection is not accidental. The person who knows they are a child of God also knows they have the ear of their Father. Prayer is not a desperate attempt to penetrate the indifference of a distant deity; it is the conversation of a child with a Father who has already shown his love by giving his Son.",
      "The condition &ldquo;according to his will&rdquo; is not a limiting clause that introduces uncertainty; it is a focusing clause that gives direction. Praying according to God&rsquo;s will means that our requests are shaped by our knowledge of God &mdash; his character, his promises, his revealed purposes. The more we know him, the more naturally our prayers align with what he has already committed himself to do. And when we pray in that alignment, we can know &mdash; again that word of certainty &mdash; that he hears us, and that if he hears us, we have the requests we have asked of him.",
      "This confidence is not presumption about specific outcomes, as if the believer could command God to perform specific actions on demand. It is confidence in a relationship &mdash; the confidence of a child who knows that their father hears every word they say, even when the answer comes differently than the child expected. John&rsquo;s readers were being pressured by false teachers and may have wondered whether God really heard them. The answer John gives is grounded not in their feelings but in who God is: the Father who gave his Son will certainly hear the prayers of those who come to him through that Son.",
    ],
  },
  {
    id: "Prayer and Idols",
    heading: "Intercession, the Sin Unto Death, and Idols",
    reference: "1 John 5:16&ndash;21",
    paragraphs: [
      "John extends the confidence of prayer into the arena of intercession for other believers: &ldquo;If anyone sees his brother committing a sin not leading to death, he shall ask, and God will give him life &mdash; to those who commit sins that do not lead to death&rdquo; (5:16). Christians are not merely to pray for themselves; they are to bear one another&rsquo;s burdens in prayer, interceding for brothers and sisters who stumble. And God hears that intercession: he will give life through the prayers of his people.",
      "The &ldquo;sin that leads to death&rdquo; is one of the most debated phrases in the New Testament. John says about it simply: &ldquo;There is sin that leads to death; I do not say that one should pray for that&rdquo; (5:16b). He does not define what this sin is, and commentators have debated it for centuries &mdash; some identifying it with the unforgivable sin of Matthew 12, some with the deliberate apostasy of Hebrews 6 and 10, some with the specific sin of denying that Jesus is the Christ (which is the particular false teaching John&rsquo;s letter addresses). Whatever its precise reference, John&rsquo;s point seems to be that there is a point of settled rejection of Christ beyond which the ordinary prayer for restoration does not apply, though he does not prohibit such prayer &mdash; he simply declines to command it.",
      "The closing verses thunder with the word &ldquo;know.&rdquo; &ldquo;We know that everyone who has been born of God does not keep on sinning&rdquo; (5:18) &mdash; not that the believer never sins, but that habitual, unrepentant sin is incompatible with the new birth. &ldquo;We know that we are from God, and the whole world lies in the power of the evil one&rdquo; (5:19) &mdash; a sober realism about the spiritual condition of humanity apart from Christ, paired with the quiet confidence of those who know whose side they are on. &ldquo;We know that the Son of God has come and has given us understanding, so that we may know him who is true&rdquo; (5:20) &mdash; the incarnation was not just a rescue mission but a revelation, opening the eyes of those born of God to see the true God.",
      "The identification of Jesus Christ as &ldquo;the true God and eternal life&rdquo; (5:20) is one of the strongest affirmations of the full deity of Christ in the Johannine writings. The one who came by water and blood, whose identity has been the subject of the chapter&rsquo;s extended argument, is here identified with &ldquo;him who is true&rdquo; &mdash; that is, with the Father himself. In Jesus, the eternal life that is in the Father has been made visible and accessible. To see Jesus is to see the true God.",
      "The final verse is famously abrupt: &ldquo;Little children, keep yourselves from idols&rdquo; (5:21). After the theological heights of the preceding verses, this landing may seem anticlimactic &mdash; but it is profoundly fitting. The entire letter has been a warning against the false teaching that would substitute a different Christ for the real one. Any theological system, any spiritual experience, any religious loyalty that displaces the true God &mdash; who has revealed himself in Jesus Christ, testified to by Spirit, water, and blood &mdash; is an idol. John ends where every age of the church must begin: holding fast to the true God, who is eternal life, and keeping oneself from every counterfeit.",
    ],
  },
];

const videoItems = [
  { videoId: "ds5yMBMZpFk", title: "1 John 5 - Faith That Overcomes the World" },
  { videoId: "N8xPAj3HQHE", title: "Three Witnesses - Water, Blood, and Spirit in 1 John 5" },
  { videoId: "KvBT8YXbKD4", title: "Assurance of Salvation - What 1 John 5 Really Teaches" },
  { videoId: "QrLPg3GmVnA", title: "Eternal Life in the Son - 1 John 5:11-13 Explained" },
];

export default function OneJohn5GuidePage() {
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
            1 John 5 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Overcoming the world through faith in Jesus Christ &mdash; John&rsquo;s closing chapter weaves together love for God, the threefold witness to the Son, God&rsquo;s own testimony about eternal life, the assurance of salvation, confident prayer, and the final charge to keep ourselves from idols.
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

        {currentSection && activeTab !== "Videos" && (
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

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of 1 John 5 through these video teachings on faith overcoming the world, the three witnesses to Christ, the assurance of eternal life, and confident prayer in God&rsquo;s name.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>This Is the Victory That Overcomes the World</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First John 5 calls believers to a settled, confident faith in Jesus Christ &mdash; the Son of God who came by water and blood, who is testified to by the Spirit, and in whom alone eternal life is found. The world and its false claims do not have the final word; faith in the Son does. Keep yourself from idols, hold fast to the true God, and know that you have eternal life.
          </p>
        </div>
      </main>
    </div>
  );
}
