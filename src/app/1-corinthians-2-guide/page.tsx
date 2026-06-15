"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "The Power of the Cross Over Wisdom",
  "Secret Wisdom and the Spirit",
  "The Natural Man and the Mind of Christ",
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
    heading: "Overview of 1 Corinthians 2",
    reference: "1 Corinthians 2:1&ndash;16",
    paragraphs: [
      "First Corinthians chapter 2 stands as one of the most profound treatments of Christian epistemology in all of Scripture. The apostle Paul, writing to a deeply divided congregation that had become enamored with rhetorical brilliance and human wisdom, makes a stunning and counterintuitive argument: the power of the gospel does not come from eloquent words or sophisticated philosophy, but from the demonstration of the Holy Spirit working through a message that the world considers foolish.",
      "Paul opens by recalling how he had come to Corinth. He arrived, he says, &ldquo;not with lofty speech or wisdom&rdquo; (v. 1), and he had made a deliberate decision to know nothing among them except Jesus Christ, and him crucified (v. 2). Far from the polished rhetoric that the Corinthians admired in their favored teachers, Paul presented himself in &ldquo;weakness and in fear and much trembling&rdquo; (v. 3). His speech and his message were not in plausible words of wisdom, but in demonstration of the Spirit and of power (v. 4&ndash;5), so that the Corinthians&rsquo; faith might rest not on human wisdom but on God&rsquo;s power.",
      "Paul then makes an important distinction in verses 6 through 16. There is a wisdom Paul does speak &mdash; but it is wisdom &ldquo;among the mature&rdquo; and not the wisdom of this age or of the rulers of this age, who are passing away (v. 6). This is a secret and hidden wisdom that God decreed before the ages for his people&rsquo;s glory (v. 7). The rulers of this age did not understand it, for if they had, they would not have crucified the Lord of glory (v. 8).",
      "The Spirit is the key to receiving and understanding this divine wisdom. Paul quotes what appears to be a loose interpretation of Isaiah 64:4, declaring that &ldquo;no eye has seen, nor ear heard, nor the heart of man imagined, what God has prepared for those who love him&rdquo; (v. 9) &mdash; but these things God has revealed to us through the Spirit. The Spirit searches everything, even the depths of God (v. 10). Just as a human spirit alone can truly know a person&rsquo;s inner life, so only the Spirit of God truly knows the things of God.",
      "Believers have received not the spirit of the world but the Spirit who is from God, so that they might know the things freely given to them by God (v. 12). Paul interprets spiritual realities in spiritual terms &mdash; comparing spiritual things with spiritual (v. 13). By contrast, the natural person (the &ldquo;psychikos&rdquo; person) does not accept the things of the Spirit of God, for they are folly to him, and he is not able to understand them because they are spiritually discerned (v. 14).",
      "The chapter closes with one of the most extraordinary claims Paul makes anywhere in his letters. He quotes Isaiah 40:13 &mdash; &ldquo;Who has known the mind of the Lord so as to instruct him?&rdquo; &mdash; a rhetorical question whose implied answer is: no one. Yet Paul then delivers the stunning conclusion: &ldquo;But we have the mind of Christ&rdquo; (v. 16). This is the destination the whole chapter has been building toward. Through the Spirit, believers are given genuine access to the wisdom, purposes, and perspective of God himself as revealed in Christ. This is not the world&rsquo;s wisdom; it is something entirely beyond it.",
    ],
  },
  {
    id: "The Power of the Cross Over Wisdom",
    heading: "The Power of the Cross Over Wisdom",
    reference: "1 Corinthians 2:1&ndash;5",
    paragraphs: [
      "When Paul arrived in Corinth, he made a deliberate and costly choice. The city of Corinth was a great cosmopolitan center of the Roman world, a place where sophists and rhetoricians competed for followings, where skill in public speaking was the currency of prestige. The Corinthian church had absorbed this cultural sensibility and had begun to rank their teachers by rhetorical brilliance. It was into this environment that Paul came &mdash; and he chose to come without it.",
      "The contrast with his approach in Athens is instructive. In Acts 17, Paul stood on the Areopagus and engaged the philosophers on their own terms, reasoning from natural theology and quoting Greek poets. The results were modest: a few believed, but there was no church established. When Paul then moved on to Corinth in Acts 18, there is significant scholarly debate about whether he deliberately altered his approach after Athens. Whether or not Acts 18 directly reflects a conscious recalibration, what 1 Corinthians 2 makes clear is that in Corinth Paul committed himself to a single message: &ldquo;I decided to know nothing among you except Jesus Christ and him crucified&rdquo; (v. 2).",
      "The word translated &ldquo;decided&rdquo; (Greek: &ldquo;ekrina&rdquo;) carries the sense of a judicial decision, a deliberate and settled resolve. Paul was not simply unpolished or rhetorically limited. He was making a theological point through his method. The manner of proclamation had to be consistent with the content. A gospel of God&rsquo;s power displayed through weakness &mdash; through a crucified Messiah &mdash; had to be proclaimed through what appeared to be weakness and folly, not through impressive human persuasion. To dress the cross up in polished rhetoric would be to contradict it.",
      "Paul describes his own state at Corinth with remarkable candor: he was there in &ldquo;weakness and in fear and much trembling&rdquo; (v. 3). This is not false modesty or rhetorical humility deployed as a persuasive device. Paul speaks elsewhere of his physical ailments, his imprisonments, his beatings, and the constant pressure he felt for all the churches. At Corinth, by his own account, he was genuinely fragile. And the paradox the chapter insists on is that this fragility was precisely the medium through which God chose to work.",
      "The result of this deliberately un-impressive proclamation was that the Corinthians believed &mdash; and their faith rested on &ldquo;the power of God&rdquo; rather than on human wisdom (v. 5). This matters enormously because of what it means for the stability of their faith. A faith built on the persuasive power of a brilliant teacher will crumble when that teacher falls, when a more impressive rival appears, or when the listener&rsquo;s critical faculties are engaged. But a faith that rests on the demonstration of the Spirit &mdash; on the inward witness of God&rsquo;s power &mdash; has a foundation that no human argument can undermine.",
      "This was the very problem the Corinthians were experiencing. They had begun to divide along lines of rhetorical preference &mdash; &ldquo;I follow Paul&rdquo; or &ldquo;I follow Apollos&rdquo; or &ldquo;I follow Cephas&rdquo; (1 Corinthians 1:12). By elevating human teachers on the basis of eloquence, they had made their faith dependent on exactly the kind of human wisdom Paul was arguing against. The remedy was not a different rhetorical style. It was a return to the cross and to the recognition that the power belongs to God alone. The contemporary church does well to heed this warning whenever it finds itself measuring ministry by the brilliance of its communicators rather than by the transforming work of the Spirit.",
    ],
  },
  {
    id: "Secret Wisdom and the Spirit",
    heading: "Secret Wisdom and the Spirit&rsquo;s Revelation",
    reference: "1 Corinthians 2:6&ndash;13",
    paragraphs: [
      "Having established why he did not come to Corinth with rhetorical polish, Paul now makes a striking clarification: this does not mean he has no wisdom to offer. There is a wisdom Paul does speak &mdash; but it operates in an entirely different register from the wisdom of this age. It is wisdom &ldquo;among the mature,&rdquo; a wisdom that belongs to those who have progressed beyond spiritual infancy (v. 6). This connects forward to the rebuke Paul will issue in chapter 3, where he tells the Corinthians they are still infants in Christ, still being fed milk rather than solid food (3:1&ndash;2).",
      "The wisdom Paul describes is designated with two powerful terms: it is &ldquo;secret&rdquo; (Greek: &ldquo;mysterion,&rdquo; mystery) and &ldquo;hidden&rdquo; (v. 7). In the ancient world, &ldquo;mystery&rdquo; often referred to esoteric knowledge reserved for initiates of religious cults. Paul repurposes the term entirely. The mystery of God is not hidden because it is kept from ordinary people and reserved for an elite. It is hidden because it was concealed throughout the ages in the purposes of God, waiting for the appointed moment of revelation in Christ. It was hidden in plain sight in the Hebrew Scriptures, but unrecognizable apart from the key of the gospel.",
      "The most arresting statement in this section is the one about the rulers of this age. These rulers &mdash; whether referring to the Roman and Jewish authorities who condemned Jesus, or to the spiritual powers behind them, or to both &mdash; &ldquo;would not have crucified the Lord of glory&rdquo; if they had understood God&rsquo;s wisdom (v. 8). The title &ldquo;Lord of glory&rdquo; is breathtaking in context: the one they crucified, the one who died in apparent defeat, was the Lord of all glory. The crucifixion appeared to be the triumph of worldly power over an itinerant Galilean teacher. It was, in fact, the undoing of the entire system of worldly power &mdash; but only those given eyes to see could recognize it as such.",
      "The Spirit&rsquo;s role in all of this is irreplaceable. Paul draws an analogy that has become one of the most quoted passages in pneumatology: just as the spirit of a human being is the only thing that truly knows the inner life of that person, so the Spirit of God is the only one who fully knows the inner life of God (v. 11). This is not a statement about divine psychology so much as an affirmation of the Spirit&rsquo;s absolute intimacy with the Father. The Spirit does not receive information about God from some external source; the Spirit exists in that deepest place of divine self-knowledge.",
      "Because believers have received &ldquo;not the spirit of the world, but the Spirit who is from God&rdquo; (v. 12), they are given genuine access to what Paul calls &ldquo;the things freely given us by God.&rdquo; The Greek word translated &ldquo;freely given&rdquo; (charizomai) shares its root with &ldquo;charis&rdquo; (grace) &mdash; these are grace-gifts, things that cannot be earned or discovered by independent human effort, only received as gift through the Spirit.",
      "Verse 13 introduces a hermeneutical principle that has been much debated: Paul speaks these things &ldquo;not in words taught by human wisdom but taught by the Spirit, interpreting spiritual truths to those who are spiritual&rdquo; (or possibly, &ldquo;comparing spiritual things with spiritual&rdquo;). The key insight is that the very language in which the gospel is communicated is Spirit-taught language. The Spirit does not merely enable the hearer to understand humanly constructed words; the Spirit shapes the very words Paul uses to communicate divine realities. This has profound implications for how Christians understand the inspiration of Scripture and the role of the Spirit in authentic theological interpretation.",
    ],
  },
  {
    id: "The Natural Man and the Mind of Christ",
    heading: "The Natural Man and the Mind of Christ",
    reference: "1 Corinthians 2:14&ndash;16",
    paragraphs: [
      "The final three verses of 1 Corinthians 2 present a stark anthropological contrast that has shaped Christian theology for two millennia. Paul introduces two kinds of persons: the &ldquo;natural man&rdquo; (Greek: &ldquo;psychikos anthropos&rdquo;) and the &ldquo;spiritual person&rdquo; (Greek: &ldquo;pneumatikos&rdquo;). These are not different types of human beings by nature or creation. They are defined entirely by their relationship to the Spirit of God.",
      "The natural person &mdash; the person living solely according to natural human capacities, without the indwelling Spirit &mdash; &ldquo;does not accept the things of the Spirit of God, for they are folly to him, and he is not able to understand them because they are spiritually discerned&rdquo; (v. 14). Paul says both that the natural person does not accept them (a volitional statement) and that he is not able to understand them (a capacity statement). This is not a contradiction. The incapacity is rooted in the condition of the unrenewed person; it is not an excuse but a diagnosis. The natural person lacks the hermeneutical key: the Spirit who alone can interpret the things of God.",
      "It is worth sitting with the sheer radicality of this claim. Paul is not merely saying that spiritual things are somewhat difficult without the Spirit&rsquo;s help. He is saying they appear as &ldquo;folly&rdquo; &mdash; as nonsense, as beneath serious intellectual consideration. This is the experiential reality: to the sophisticated first-century philosopher, the message of a crucified God-man who rose from the dead and was now the only way to salvation was simply ridiculous. No amount of rhetorical skill could make it otherwise to a person whose faculties of evaluation were calibrated entirely by the standards of this age.",
      "The spiritual person, by contrast, &ldquo;judges all things but is himself to be judged by no one&rdquo; (v. 15). The word &ldquo;judges&rdquo; here is the Greek &ldquo;anakrino,&rdquo; meaning to examine, discern, or evaluate. The spiritual person possesses a Spirit-given capacity for discernment that extends across all of reality. This does not mean the spiritual person is infallible or omniscient. It means that through the Spirit, the Christian has access to a perspective on reality &mdash; the perspective of God&rsquo;s purposes in creation and redemption &mdash; that enables a kind of evaluation unavailable to the natural person alone.",
      "Paul then quotes Isaiah 40:13, one of the great rhetorical questions of the Hebrew Bible: &ldquo;Who has known the mind of the Lord so as to instruct him?&rdquo; In its original context, the question functions as a doxology: the Lord&rsquo;s ways are so far above human comprehension that no creature could presume to counsel or correct him. The implied answer is: no one. And this is exactly where Paul&rsquo;s argument seems to be heading &mdash; until the final clause lands with extraordinary force: &ldquo;But we have the mind of Christ.&rdquo;",
      "This concluding statement is one of the most audacious in the New Testament. Paul is not claiming that believers have exhaustive knowledge of all things, or that they are incapable of error. He is saying that through the Holy Spirit, who is the Spirit of the Son as well as the Father, believers are given genuine access to the mind &mdash; the perspective, the values, the wisdom, the disposition &mdash; of Christ himself. This has massive implications for Christian epistemology: how we know what is true, how we read Scripture, how we make moral decisions, how we evaluate the world. It is also the ultimate answer to Corinthian factionalism. If all believers have the mind of Christ, the question of which human teacher to follow becomes secondary; the primary relationship is with Christ himself, whose Spirit indwells every member of his body.",
    ],
  },
];

const videoItems = [
  { videoId: "Xd2HMhPJNlA", title: "1 Corinthians 2 - The Spirit Reveals God's Wisdom" },
  { videoId: "pR7NzPVqBE8", title: "The Mind of Christ - 1 Corinthians 2 Explained" },
  { videoId: "kLmTq3fJhNc", title: "Human Wisdom vs God's Wisdom - Paul's Argument in 1 Corinthians" },
  { videoId: "mWZq9Gf4dRs", title: "The Holy Spirit and Spiritual Discernment - 1 Corinthians 2:10-16" },
];

export default function Corinthians2GuidePage() {
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
            1 Corinthians Chapter 2
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul&rsquo;s revolutionary argument that the cross is not a liability to be decorated with human eloquence but the very power of God &mdash; and that the Spirit alone opens the eyes of believers to the secret wisdom of God hidden before the ages and revealed in the crucified Lord of glory.
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
              Explore 1 Corinthians 2 through these video teachings on the power of the cross, the Spirit&rsquo;s revelation of God&rsquo;s wisdom, and the astounding truth that believers have the mind of Christ.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>But We Have the Mind of Christ</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Corinthians 2 challenges every generation of the church to resist dressing the cross in the clothing of cultural sophistication. The wisdom of God, revealed through the Spirit, does not need the approval of the wisdom of this age. Those who receive the Spirit receive access to a perspective on reality that no human philosophy can provide &mdash; the very mind of the risen Christ, who is himself the wisdom and power of God.
          </p>
        </div>
      </main>
    </div>
  );
}
