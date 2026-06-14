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
  "The Elder to Gaius",
  "Walking in the Truth",
  "Hospitality to Missionaries",
  "The Pride of Diotrephes",
  "Imitate What Is Good",
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
    id: "The Elder to Gaius",
    heading: "The Elder to Gaius",
    reference: "3 John 1&ndash;4",
    paragraphs: [
      "The Third Epistle of John opens, like its companion, with the simple self-designation of the author: &ldquo;The elder to the beloved Gaius, whom I love in truth&rdquo; (v. 1). Once again the writer is the apostle John in his later years, the last living link to the earthly ministry of Jesus, writing from Ephesus toward the end of the first century. Where 2 John was addressed to a household or congregation, 3 John is the most personal of the three Johannine letters &mdash; a note written to a single named friend, Gaius, a man John holds dear and loves &ldquo;in truth.&rdquo;",
      "We know little of Gaius beyond what this short letter reveals, for the name was among the most common in the Roman world. What we do learn is that he was a beloved and respected member of a local church, a man of generous spirit and steadfast faith whose hospitality to traveling preachers had become known to the elder. John writes to commend him, to encourage him, and to address a difficult situation that had arisen in his congregation through the conduct of a man named Diotrephes.",
      "John&rsquo;s opening wish is famous for its warmth: &ldquo;Beloved, I pray that all may go well with you and that you may be in good health, as it goes well with your soul&rdquo; (v. 2). This was a customary form of greeting in ancient letters, a wish for the recipient&rsquo;s bodily welfare, yet under John&rsquo;s pen it carries spiritual depth. He prays that Gaius&rsquo;s outward circumstances and physical health would match the flourishing of his soul &mdash; and the very prayer implies that Gaius&rsquo;s soul was indeed prospering. It is a striking benchmark: would we dare pray that our bodies and finances be only as healthy as our souls?",
      "The cause of John&rsquo;s joy soon comes to light: &ldquo;For I rejoiced greatly when the brothers came and testified to your truth, as indeed you are walking in the truth&rdquo; (v. 3). Traveling believers had brought back word of Gaius&rsquo;s faithfulness, and their report gladdened the old apostle&rsquo;s heart. As in 2 John, the test of genuine faith is a life that walks in the truth, not merely a profession that claims it.",
      "Then comes one of the most tender verses in all of John&rsquo;s writings: &ldquo;I have no greater joy than to hear that my children are walking in the truth&rdquo; (v. 4). John calls Gaius and the believers under his care his &ldquo;children,&rdquo; the spiritual offspring of his long ministry. Nothing on earth brings the aged apostle more happiness than the news that those he has nurtured in the faith are persevering in it. This is the heart of a true shepherd, whose deepest joy lies not in his own comfort but in the spiritual health of his flock.",
      "These opening verses set the tone for everything that follows. John&rsquo;s love for Gaius, his joy in Gaius&rsquo;s faithfulness, and his concern for the practical health of the church together frame a letter that is at once a warm personal note and a piece of pastoral correction. The truth that Gaius walks in is the same truth John has defended throughout his letters &mdash; and in 3 John we see what that truth looks like when it takes the concrete form of welcoming the stranger and supporting the work of the gospel.",
    ],
  },
  {
    id: "Walking in the Truth",
    heading: "Walking in the Truth",
    reference: "3 John 3&ndash;4",
    paragraphs: [
      "The phrase that anchors the whole letter is &ldquo;walking in the truth.&rdquo; John uses it twice in the opening verses, and it serves as the standard by which everything in the letter is measured. To walk in the truth is to let the reality of the gospel govern the whole conduct of one&rsquo;s life. It is the same expression that lit up the apostle&rsquo;s heart in 2 John, and here in 3 John we are given a living portrait of what such a walk actually looks like in practice.",
      "For Gaius, walking in the truth meant opening his home and his resources to the traveling brothers who came preaching the gospel. The truth he believed did not remain locked inside his heart; it flowed outward in costly, practical love. This is John&rsquo;s consistent vision across all his writings: truth and love are never severed. The one who truly knows the truth will love the brethren, and the one who truly loves will hold fast to the truth. Gaius embodied both.",
      "It is worth weighing the report that brought John such joy. &ldquo;The brothers came and testified to your truth&rdquo; (v. 3). Gaius&rsquo;s faithfulness was not a private matter; it had become a testimony, carried by witnesses from one congregation to another. A life lived in the truth leaves a trail of testimony behind it, an influence that travels far beyond the person himself and encourages believers in distant places who may never meet him face to face.",
      "John&rsquo;s declaration that he has &ldquo;no greater joy&rdquo; than to hear of his children walking in the truth tells us where a faithful minister&rsquo;s treasure lies. The elder had seen much in his long life &mdash; the ministry of Jesus, the birth and spread of the church, persecution, controversy, and the passing of the other apostles. Yet what gives him his deepest gladness is simply this: that those he loves are continuing to walk faithfully. Their perseverance is his crown and his joy.",
      "This emphasis carries a gentle challenge for every generation of believers. We may be tempted to measure spiritual life by feelings, experiences, knowledge, or reputation. John measures it by the walk &mdash; the daily, faithful, often unspectacular obedience that keeps to the road of truth. The truth is something to be walked, not merely admired; a path to be traveled, not merely a position to be held.",
      "And the truth Gaius walked in was not a vague spirituality but the specific apostolic gospel of Jesus Christ, the same teaching John defended so fiercely in his other letters. To walk in that truth was, for Gaius, to align his whole life &mdash; his home, his hospitality, his generosity &mdash; with the message of the crucified and risen Lord. The next sections show that walk taking shape in the support of missionaries and in the refusal to follow the proud example of Diotrephes.",
    ],
  },
  {
    id: "Hospitality to Missionaries",
    heading: "Hospitality to Missionaries",
    reference: "3 John 5&ndash;8",
    paragraphs: [
      "John now turns to commend Gaius directly for his hospitality: &ldquo;Beloved, it is a faithful thing you do in all your efforts for these brothers, strangers as they are&rdquo; (v. 5). Gaius had welcomed and supported traveling Christian workers, even those he had never met before. In a world without hotels as we know them and full of dangers for travelers, the homes of believers were the lifeline of the gospel mission, and Gaius had opened his without reserve, even to strangers, because they came in the name of Christ.",
      "These brothers had carried their report back to the church: &ldquo;who testified to your love before the church&rdquo; (v. 6). Gaius&rsquo;s generosity became a public testimony of love, the visible fruit of his faith. John then urges him to continue and even deepen this ministry: &ldquo;You will do well to send them on their journey in a manner worthy of God.&rdquo; To &ldquo;send them on their journey&rdquo; was a technical phrase for equipping missionaries with provisions, money, and companionship for the road ahead &mdash; not a grudging handout but support &ldquo;worthy of God,&rdquo; fitting for those who serve him.",
      "John explains why such support is essential: &ldquo;For they have gone out for the sake of the name, accepting nothing from the Gentiles&rdquo; (v. 7). These missionaries traveled for the sake of the name of Jesus, and as a matter of principle they refused to take support from unbelievers, the &ldquo;Gentiles&rdquo; or pagans among whom they preached. They would not give the impression that the gospel was for sale or that they preached for personal gain. Their integrity, however, meant they depended entirely on the generosity of fellow believers like Gaius.",
      "From this John draws a principle that reaches every Christian: &ldquo;Therefore we ought to support people like these, that we may be fellow workers for the truth&rdquo; (v. 8). Here is a profound encouragement. Those who cannot themselves travel as missionaries become &ldquo;fellow workers for the truth&rdquo; when they support those who do. The one who gives, the one who prays, and the one who hosts share in the labor and in the reward of the one who preaches. The whole church is bound together in a single mission.",
      "This passage offers a beautiful theology of Christian partnership in the gospel. The advance of the truth has never depended on preachers alone, but on a whole network of believers who supply, send, shelter, and sustain them. Gaius may never have stood up to preach, yet by his open home he was a true partner in the apostolic mission, and John honors him as such. The kingdom moves forward on the quiet faithfulness of the Gaiuses of the church.",
      "For the church today, verses 5 through 8 remain a charter for missionary support and Christian hospitality. They commend a generosity that is faithful, public, worthy of God, and motivated by the name of Christ rather than calculated return. And they assure every believer who gives toward gospel work, opens a home to a servant of Christ, or strengthens those on the front lines that such labor is not peripheral but central &mdash; it makes the giver a genuine partner in the truth.",
    ],
  },
  {
    id: "The Pride of Diotrephes",
    heading: "The Pride of Diotrephes",
    reference: "3 John 9&ndash;10",
    paragraphs: [
      "Against the bright example of Gaius, John sets a dark foil: &ldquo;I have written something to the church, but Diotrephes, who likes to put himself first, does not acknowledge our authority&rdquo; (v. 9). Diotrephes was evidently a leader, or an aspiring leader, in a local congregation, and his besetting sin is named with painful clarity &mdash; he loved to be first. Pride and the craving for preeminence had captured his heart, and from that root sprang every wrong that follows.",
      "John lists the symptoms of Diotrephes&rsquo;s pride with the precision of a physician. First, he &ldquo;does not acknowledge our authority&rdquo; &mdash; he rejected even the apostle John and the letter John had sent. Second, he was &ldquo;talking wicked nonsense against us&rdquo; (v. 10), spreading malicious and baseless words about John and his associates. Pride that will not submit soon turns to slander against those whose authority rebukes it.",
      "The damage went further still. Diotrephes &ldquo;refuses to welcome the brothers,&rdquo; shutting his door against the very traveling missionaries whom Gaius had so generously received. And worse, &ldquo;he also stops those who want to and puts them out of the church&rdquo; (v. 10). He not only withheld his own hospitality but forbade others to show it, and excommunicated those who defied him by welcoming the brothers. His pride had become tyranny, using the authority of the church as a weapon to enforce his own dominance.",
      "It is a striking and sobering portrait. Diotrephes is not accused of false doctrine, as the deceivers of 2 John were; his sin is not heresy but pride. He may well have professed all the right beliefs while his heart was consumed by the love of preeminence. This is a warning that the church can be wounded not only by error in doctrine but by ambition in leadership &mdash; by those who use ministry as a platform for themselves rather than a service to Christ and his people.",
      "John responds not with passivity but with the resolve of apostolic authority: &ldquo;So if I come, I will bring up what he is doing&rdquo; (v. 10). The aged apostle will not let such behavior go unaddressed. Love for the church requires that wickedness in its leaders be confronted, not ignored. John&rsquo;s gentleness toward Gaius and his firmness toward Diotrephes are two expressions of the same pastoral love &mdash; a love that protects the flock from those who would lord it over them.",
      "The figure of Diotrephes stands in Scripture as a perpetual warning. He is the very opposite of the One who, though he was in the form of God, did not grasp at preeminence but humbled himself to the point of death. Wherever the love of being first creeps into Christian leadership &mdash; the unwillingness to submit, the slandering of rivals, the closing of doors, the controlling of others &mdash; there the spirit of Diotrephes is at work, and there the example of Christ and of Gaius is most needed.",
    ],
  },
  {
    id: "Imitate What Is Good",
    heading: "Imitate What Is Good",
    reference: "3 John 11&ndash;15",
    paragraphs: [
      "Having held up Gaius and Diotrephes side by side, John draws the moral with a clear exhortation: &ldquo;Beloved, do not imitate evil but imitate good. Whoever does good is from God; whoever does evil has not seen God&rdquo; (v. 11). The contrast is not merely between two personalities but between two ways of being. Gaius is the pattern to follow; Diotrephes is the pattern to avoid. And the deciding test is the same one that runs through all of John&rsquo;s writings: a person&rsquo;s deeds reveal whether or not he truly belongs to God.",
      "John&rsquo;s principle here echoes his first epistle, where he repeatedly insists that the one who is born of God practices righteousness, while the one who persists in evil shows that he has neither known nor seen God. This is not a doctrine of earning salvation by works; it is the recognition that genuine faith inevitably produces a changed life. The good that Gaius does flows from his being &ldquo;from God&rdquo;; the evil that Diotrephes does exposes a heart that, for all its religious activity, has not truly seen God.",
      "John then introduces a third figure as a model of the good: &ldquo;Demetrius has received a good testimony from everyone, and from the truth itself. We also add our testimony, and you know that our testimony is true&rdquo; (v. 12). Demetrius may have been the bearer of this very letter, a traveling brother commended to Gaius&rsquo;s welcome. His good reputation is confirmed from three directions &mdash; from everyone who knows him, from the truth of the gospel that his life embodies, and from the apostle John himself. He is the very opposite of Diotrephes: a man whose walk in the truth has earned a universal good testimony.",
      "As the letter closes, John&rsquo;s tone returns to the warmth with which it began: &ldquo;I had much to write to you, but I would rather not write with pen and ink. I hope to see you soon, and we will talk face to face&rdquo; (vv. 13&ndash;14). Just as in 2 John, the elder prefers personal presence to the written word. Letters were a gift, but they were no substitute for the fellowship of being together. John longs to come and speak with Gaius mouth to mouth, that nothing of the heart be lost.",
      "The final words are a benediction and a greeting: &ldquo;Peace be to you. The friends greet you. Greet the friends, each by name&rdquo; (v. 15). The peace of Christ rests upon Gaius, and the warmth of Christian friendship binds the scattered believers together. That lovely instruction &mdash; &ldquo;greet the friends, each by name&rdquo; &mdash; reminds us that the church is not an anonymous mass but a fellowship of named and known individuals, each one loved and remembered before God.",
      "3 John, the shortest book in the Bible, leaves the church with an enduring and practical wisdom. It commends the open-handed hospitality of Gaius, exposes the proud ambition of Diotrephes, holds up the good testimony of Demetrius, and calls every reader to imitate good and not evil. In a few brief lines it shows that the truth we profess must take flesh in the way we treat one another &mdash; in welcome, in generosity, in humility, and in peace.",
    ],
  },
];

const videoItems = [
  { videoId: "RuziBYbi-PE", title: "BibleProject - Overview - 1, 2 and 3 John" },
  { videoId: "l3QkE6nKylM", title: "Reading the Letters of John - Background and Context" },
  { videoId: "TQH77V3hQjQ", title: "Hospitality and the Gospel Mission in the Early Church" },
  { videoId: "8RB1l86Jm0M", title: "3 John - Gaius, Diotrephes and Demetrius Explained" },
];

export default function ChristianBookOf3JohnGuidePage() {
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
            The Third Epistle of John
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Truth lived out in hospitality and humility &mdash; the elder writes to beloved Gaius, rejoicing that he walks in the truth, commending his support of traveling missionaries for the sake of the Name, exposing the proud ambition of Diotrephes, and urging the church to imitate good and not evil.
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
              Deepen your study of 3 John through visual teaching on the letters of John, the practice of Christian hospitality, the support of gospel missionaries, and the contrast between Gaius, Diotrephes, and Demetrius.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Imitate Good, Not Evil</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            3 John is the shortest book in the Bible, yet it shows the truth taking flesh in everyday life. In Gaius we see faithful hospitality; in Diotrephes the ruin of pride; in Demetrius a life of good testimony. The closing call still rings clear: do not imitate evil but imitate good, for whoever does good is from God &mdash; and may peace be upon all who walk in the truth.
          </p>
        </div>
      </main>
    </div>
  );
}
