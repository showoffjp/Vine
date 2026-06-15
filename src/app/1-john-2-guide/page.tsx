"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Christ Our Advocate",
  "Do Not Love the World",
  "The Antichrist Warning",
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
    heading: "Overview of 1 John 2",
    reference: "1 John 2:1&ndash;29",
    paragraphs: [
      "First John chapter 2 is one of the most densely packed chapters in the New Testament epistles, moving through a remarkable range of themes in swift succession. John writes to his &ldquo;little children&rdquo; &mdash; his term of pastoral affection that he will return to again and again &mdash; with the express purpose that they might not sin. Yet he immediately holds out the assurance that when they do sin, &ldquo;we have an advocate with the Father, Jesus Christ the righteous&rdquo; (v.1). The chapter then expands outward from that anchor point through teaching on obedience as the test of genuine knowledge of God, the new commandment of love, a chiastic address to different generations within the church, a solemn warning against loving the world and its passing desires, and a sustained alarm about the antichrist spirit that was already at work in false teachers who had departed from the community.",
      "The chapter holds together through a single controlling concern: genuine Christian life is a life of abiding. To abide in Christ is to keep his commandments, to walk as he walked, to love the brother, to resist the world, and to remain in what was heard from the beginning. The chapter ends where it begins &mdash; with the assurance that the anointing of the Holy Spirit, given to every believer, is an inner teacher who guards the community against deception and enables them to abide in the Son and in the Father, with the promise of eternal life (v.25).",
      "John&rsquo;s style in this chapter is circular and cumulative rather than linear. He introduces a theme, loops back to it, deepens it, and sets it in relation to another theme. The test of knowing God (keeping his commandments) is introduced in verses 3&ndash;6, then love as the content of the commandment is introduced in verses 7&ndash;11, and both are brought back at the end of the chapter in the call to abide (v.24&ndash;29). This spiral structure is deliberate &mdash; John is not presenting a systematic treatise but a pastoral letter designed to reassure genuine believers and warn those whose profession does not match their practice.",
      "The historical context matters greatly. False teachers had arisen within the Johannine community &mdash; people who claimed a special spiritual knowledge, who denied that Jesus was the Christ come in the flesh, and who apparently believed that their enlightened status placed them beyond the ordinary moral demands of Christian obedience. John&rsquo;s response is not to engage their philosophy in abstract debate but to set out the concrete marks of genuine faith: obedience, love, and abiding in the apostolic testimony about Jesus. The antichrists of verse 18 had &ldquo;gone out from us&rdquo; (v.19) &mdash; they left the community, and their departure itself demonstrated that they were never truly of the community.",
      "Reading 1 John 2 requires holding two things together that the false teachers had pulled apart: doctrinal confession and moral transformation. John insists that you cannot truly know Jesus Christ the righteous while walking in disobedience and hatred. But equally, you cannot have genuine Christian ethics without the true confession that Jesus is the Christ, the Son of the Father who came in the flesh. Christology and ethics, the indicative of who Christ is and the imperative of how believers must live, are inseparable throughout this chapter.",
    ],
  },
  {
    id: "Christ Our Advocate",
    heading: "Christ Our Advocate and the Commandment of Love",
    reference: "1 John 2:1&ndash;17",
    paragraphs: [
      "The chapter opens with one of the most pastorally precise sentences in all of John&rsquo;s letters: &ldquo;My little children, I am writing these things to you so that you may not sin. But if anyone does sin, we have an advocate with the Father, Jesus Christ the righteous&rdquo; (v.1). The purpose of John&rsquo;s letter is to discourage sin &mdash; not to provide a comfortable excuse for it. But he is equally insistent that the gospel does not leave the sinning believer without recourse. The word &ldquo;advocate&rdquo; (&ldquo;Paraclete&rdquo; in Greek) is the same word Jesus used in the Gospel of John for the Holy Spirit. Here it is applied to Jesus himself, who stands before the Father on our behalf.",
      "Verse 2 expands the basis of Christ&rsquo;s advocacy: &ldquo;He is the propitiation for our sins, and not for ours only but also for the sins of the whole world.&rdquo; The word &ldquo;propitiation&rdquo; (Greek: &ldquo;hilasmos&rdquo;) carries the weight of the Old Testament sacrificial system. It means an atoning sacrifice that turns away divine wrath and satisfies the righteous requirement of a holy God. John is not softening the seriousness of sin here &mdash; he is showing that Christ&rsquo;s death was serious enough to deal with it. The scope is breathtaking: not merely for the community John addresses but for the whole world. The sufficient provision of Christ&rsquo;s atoning work is universal even as its effective application comes through faith.",
      "The test of genuine knowledge of God is then introduced plainly: &ldquo;By this we know that we have come to know him, if we keep his commandments. Whoever says &lsquo;I know him&rsquo; but does not keep his commandments is a liar, and the truth is not in him&rdquo; (vv.3&ndash;4). John is not teaching salvation by obedience here &mdash; he is teaching that true saving knowledge of Christ transforms the one who has it. To claim to know God while living in habitual disobedience is a self-contradiction, a lie. The one who keeps God&rsquo;s word, however, demonstrates that God&rsquo;s love has been truly &ldquo;perfected&rdquo; &mdash; brought to its intended goal &mdash; in them (v.5). The test is practical and observable.",
      "John then introduces what he calls both an old commandment and a new one (vv.7&ndash;8). It is old because it goes back to the beginning of the community&rsquo;s life in Christ &mdash; the word they heard from the beginning (v.7). But it is new because it is being fulfilled in Christ and in believers in a new way: &ldquo;the darkness is passing away and the true light is already shining&rdquo; (v.8). The new commandment is to love one another, as Jesus stated in John 13:34&ndash;35. What makes it new is that it is grounded in the love of Christ himself and enabled by the dawning of the new age of light. To walk in the light is to love your brother; to hate your brother is to be still in the darkness.",
      "Verses 12&ndash;14 contain one of the most beautifully structured passages in the epistle &mdash; a chiasm in which John addresses &ldquo;little children,&rdquo; &ldquo;fathers,&rdquo; and &ldquo;young men&rdquo; in two parallel sets of three. Commentators have debated whether John is addressing different age groups or different levels of spiritual maturity. In either case the content of each address is telling: little children are assured that their sins are forgiven and that they know the Father; fathers are defined by their deep, long knowledge of &ldquo;him who is from the beginning&rdquo; (v.13) &mdash; the same Christ who existed before all things; and young men are celebrated for their strength, their victory over the evil one, and the word of God abiding in them. Together these addresses picture the richness of the Christian community as a family encompassing all stages of faith and life.",
      "The warning against loving the world in verses 15&ndash;17 is one of John&rsquo;s most memorable passages. &ldquo;Do not love the world or the things in the world. If anyone loves the world, the love of the Father is not in him&rdquo; (v.15). By &ldquo;the world&rdquo; John does not mean the creation as such &mdash; that would contradict John 3:16 where God so loved the world. He means the world as a system organized in opposition to God, with its values, boasts, and desires. He identifies three characteristic expressions of that worldly orientation: &ldquo;the desires of the flesh and the desires of the eyes and pride of life&rdquo; (v.16). These are not the desires proper to creaturely existence but desires that have become autonomous, untethered from their proper end in God. The world with all of these is passing away, but the one who does the will of God abides forever (v.17). The contrast is between the fleeting and the eternal.",
    ],
  },
  {
    id: "Do Not Love the World",
    heading: "The Anointing and Abiding in Christ",
    reference: "1 John 2:18&ndash;29",
    paragraphs: [
      "With verse 18 John shifts the register of the letter significantly. He has been speaking about the positive marks of genuine Christian life; now he addresses a crisis that has already struck the community he is writing to. &ldquo;Children, it is the last hour, and as you have heard that antichrist is coming, so now many antichrists have come. Therefore we know that it is the last hour&rdquo; (v.18). The appearance of these antichrists is itself a sign that confirms the community&rsquo;s place in the final age of history &mdash; the time between Christ&rsquo;s first and second coming. The proliferation of false teaching is not evidence that the gospel has failed but that the eschatological hour is exactly as Scripture predicted.",
      "John&rsquo;s identification of these antichrists is striking precisely because of where they came from: &ldquo;They went out from us, but they were not of us; for if they had been of us, they would have continued with us. But they went out, that it might become plain that they all are not of us&rdquo; (v.19). The false teachers were not pagans from outside; they were insiders who had been part of the community and then departed. Their departure itself is interpreted theologically &mdash; it was a revelation of the true state of their hearts. Genuine belonging to the community of Christ expresses itself in remaining; those who are truly united to Christ do not ultimately abandon the community and its confession.",
      "Against the anxiety that these defections might produce, John offers a striking assurance: &ldquo;But you have been anointed by the Holy One, and you all have knowledge&rdquo; (v.20). The anointing is the gift of the Holy Spirit given to every believer &mdash; not just to a spiritual elite. This is in direct contrast to the false teachers, who apparently claimed a special gnosis (knowledge) that set them apart. John counters that all genuine believers, not only the spiritually advanced, have been anointed and have knowledge. The Spirit himself is the teacher who enables the community to know the truth.",
      "Verses 22&ndash;23 identify the specific doctrinal error of the antichrists: &ldquo;Who is the liar but he who denies that Jesus is the Christ? This is the antichrist, he who denies the Father and the Son. No one who denies the Son has the Father. Whoever confesses the Son has the Father also.&rdquo; The central error is a Christological one &mdash; the false teachers separated the man Jesus from the divine Christ, denying the full identity of the incarnate Son. John sees this as no minor theological dispute but as the defining lie, the denial that cuts a person off from the Father himself. You cannot have God the Father while rejecting God the Son; the two are inseparable.",
      "The positive counsel that follows is also Christological: &ldquo;Let what you heard from the beginning abide in you. If what you heard from the beginning abides in you, then you too will abide in the Son and in the Father&rdquo; (v.24). The way forward for the community is not new revelation or deeper esoteric knowledge &mdash; it is fidelity to the original apostolic testimony about Jesus. To abide in that word is to abide in the Son. The promise attached to this abiding is eternal life (v.25), which the Father has promised in the Son. John closes the chapter with the encouragement that the anointing &ldquo;teaches you about everything, and is true, and is no lie&rdquo; (v.27) &mdash; the Spirit-given instinct for truth that guards believers against deception. The chapter ends with an urgent appeal: &ldquo;Abide in him, so that when he appears we may have confidence and not shrink from him in shame at his coming&rdquo; (v.28).",
      "The final verse (v.29) provides a crucial connecting principle between the Christology of the chapter and its ethics: &ldquo;If you know that he is righteous, you may be sure that everyone who practices righteousness has been born of him.&rdquo; Righteous conduct is the evidence of new birth. The chapter began with Jesus Christ the righteous (v.1) and ends with the call to practice the righteousness that flows from being born of the Righteous One. The circle is complete: the advocate who is righteous before the Father produces in his people a righteousness that reflects his own character. This is what genuine abiding looks like &mdash; a life shaped by the nature of the one in whom we abide.",
    ],
  },
  {
    id: "The Antichrist Warning",
    heading: "The Antichrist Warning: Testing the Spirits",
    reference: "1 John 2:18&ndash;27",
    paragraphs: [
      "The concept of &ldquo;antichrist&rdquo; in 1 John 2 is one of the most frequently misread passages in the New Testament, largely because later Christian tradition has associated the term almost exclusively with a single end-times figure of enormous power. John&rsquo;s usage is both broader and more immediate. He writes that &ldquo;antichrist is coming&rdquo; &mdash; he does not deny the expectation of a singular coming figure &mdash; but he immediately adds that &ldquo;now many antichrists have come&rdquo; (v.18). The presence of many antichrists in the present is the very evidence that the last hour has arrived. The spirit of antichrist is already at work in the world through those who deny that Jesus is the Christ.",
      "The Greek prefix &ldquo;anti&rdquo; can mean both &ldquo;against&rdquo; and &ldquo;in place of.&rdquo; Both meanings likely operate in John&rsquo;s use of the term. The false teachers were against Christ in that they denied his true identity, but they were also, in some sense, offering a substitute Christ &mdash; a spiritual figure detached from the historical, incarnate Jesus of Nazareth. This is the prototypical pattern of antichrist deception: it is not raw atheism but a counterfeit religion that uses the name of Christ while emptying him of his true content.",
      "The specific doctrinal test John provides is straightforward: does the person confess that Jesus is the Christ, the Son of God who came in the flesh? The denial of the Son is simultaneously a denial of the Father (v.23). This is because in John&rsquo;s theology the Father and the Son are so closely united that the one who truly knows the Father will recognize and receive the Son. The false teachers claimed to know God while rejecting the Son &mdash; John says this is impossible. The God they claimed to know was not the God revealed in Jesus Christ.",
      "What makes John&rsquo;s response so pastorally powerful is that he does not respond to the departure of these false teachers by urging the community to develop ever more sophisticated theological tools for discernment. Instead he points them back to two things they already have: the apostolic word they heard from the beginning (v.24), and the anointing of the Holy Spirit (v.20, 27). These two together &mdash; the external word of the apostolic testimony and the internal anointing of the Spirit &mdash; are sufficient to guard the community against the lie. The Spirit does not lead believers into new truths that contradict the original testimony; the Spirit leads them deeper into the truth they have already received.",
      "There is also a deeply ecclesiological dimension to John&rsquo;s warning. The antichrists &ldquo;went out from us&rdquo; (v.19). Remaining in the community &mdash; maintaining the bonds of fellowship with those who hold the apostolic confession &mdash; is itself a mark of genuine belonging to Christ. The false teachers&rsquo; departure revealed their true state, but their departure also served the community by making visible the division that already existed at the level of the heart and the confession. The church&rsquo;s unity is not merely organizational; it is rooted in a shared confession of the one true Christ.",
      "The warning about antichrist ultimately serves a pastoral rather than merely predictive purpose. John is not primarily trying to map the end-times calendar; he is trying to protect his community from spiritual seduction. The tools he gives them are not esoteric &mdash; they are the ordinary means of grace: the word heard from the beginning, the anointing of the Spirit, the fellowship of believers who abide in Christ, and the hope of his appearing (v.28). To abide in Christ against the spirit of antichrist is not a heroic feat of theological sophistication; it is the daily, humble practice of holding fast to what you have already been given in the gospel.",
    ],
  },
];

const videoItems = [
  { videoId: "1V5yMqHSo_I", title: "1 John 2 - Christ Our Advocate and Abiding in Him" },
  { videoId: "eN3vABzuW9A", title: "The New Commandment and Walking in the Light - 1 John" },
  { videoId: "NTBJJiePBn8", title: "Do Not Love the World - 1 John 2 Explained" },
  { videoId: "HPdwwt3KDNY", title: "The Antichrist Warning and the Anointing - 1 John 2" },
];

export default function John2GuidePage() {
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
            1 John Chapter 2
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Christ as our advocate and propitiation, keeping his commandments as the test of knowing him, the old-yet-new commandment of love, the warning against loving the world and its passing desires, the antichrist spirit already at work in false teachers who denied the Son, and the call to abide in what was heard from the beginning through the teaching of the Spirit&rsquo;s anointing.
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

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of 1 John 2 through these video teachings on Christ our advocate, the new commandment, the warning against loving the world, and the antichrist spirit.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Abide in What You Heard from the Beginning</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First John 2 calls believers back to the simplest and most profound Christian practice: abiding. To abide in Christ is to keep his commandments, to love the brother, to resist the world&rsquo;s passing appeal, to hold fast to the apostolic confession of the Son, and to trust the Spirit&rsquo;s anointing as the teacher who guards the community against every lie. The one who does the will of God &mdash; who abides in the Son and in the Father &mdash; abides forever.
          </p>
        </div>
      </main>
    </div>
  );
}
