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
  "Living Rightly in Society",
  "Saved by Grace Not Works",
  "The Washing of Regeneration",
  "Application",
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
    heading: "Overview of Titus 3",
    reference: "Titus 3:1&ndash;15",
    paragraphs: [
      "Titus 3 is the concluding chapter of Paul&rsquo;s brief but densely packed letter to Titus, a co-worker whom the apostle had left on the island of Crete to set in order what remained undone and to appoint elders in every town. The letter as a whole is concerned with the organization of the church, the character of its leaders, the content of sound doctrine, and the practical behavior that flows from that doctrine. In chapter 3 these concerns reach their pastoral climax as Paul addresses the church&rsquo;s life within the wider Roman world, grounds that life in the great theological reality of the gospel, and closes with personal instructions and greetings.",
      "The chapter opens with a command that would have been striking in the social context of first-century Crete: be submissive to rulers and authorities, be obedient, be ready for every good work, speak evil of no one, avoid quarreling, be gentle, and show perfect courtesy to all people. This is not a counsel of political passivity but a practical description of what gospel-shaped citizenship looks like. The Christians of Crete were to be known in their communities not for controversy and contempt for authority but for a gentleness and civic virtue that would make the gospel credible and attractive to those watching from outside.",
      "But Paul does not leave this exhortation hanging as mere moral advice. He grounds it immediately in the transformation the gospel has effected. He reminds the Cretans that they themselves were once foolish, disobedient, led astray, enslaved to passions and pleasures, passing their days in malice and envy, hated and hating one another (3:3). The gentleness Paul calls for is not the gentleness of the naturally mild-tempered; it is the gentleness of people who remember what they were before grace found them and who therefore have no grounds for contempt toward anyone.",
      "The theological centerpiece of the chapter &mdash; and arguably of the entire letter &mdash; is the great gospel summary in verses 4&ndash;7, one of the most compact and beautiful expressions of the doctrine of salvation in all of Paul&rsquo;s letters. Here Paul declares that God saved us not because of any works done in righteousness by us, but according to his own mercy, by the washing of regeneration and the renewing of the Holy Spirit, poured out richly through Jesus Christ our Savior. The grammar of grace is crystal clear: salvation is entirely God&rsquo;s act, flowing from his mercy, executed through the Spirit, grounded in Christ, aimed at justification and inheritance.",
      "The chapter closes with practical and personal instructions. Paul tells Titus to insist on these things, to avoid foolish controversies and genealogies and dissensions, and to deal decisively with a person who stirs up division after two warnings. He then mentions Artemas, Tychicus, Zenas the lawyer, and Apollos, with instructions about traveling companions and assistance. The final exhortation returns to the theme of good works: let our people learn to devote themselves to good works for pressing needs, so that they are not unfruitful. The letter that began with concerns about doctrine and order ends with a vision of a people whose changed lives bear visible fruit in the world.",
    ],
  },
  {
    id: "Living Rightly in Society",
    heading: "Living Rightly in Society",
    reference: "Titus 3:1&ndash;3",
    paragraphs: [
      "Paul opens Titus 3 with a series of rapid-fire imperatives aimed at the social and civic behavior of the Cretan Christians. They are to be submissive to rulers and authorities and to be obedient. They are to be ready for every good work. They are to speak evil of no one, to avoid quarreling, to be gentle, and to show perfect courtesy to all people. What is striking about this list is not its individual elements, which were recognizable to anyone familiar with Greco-Roman ideals of civic virtue, but the community to whom it is addressed: new believers on an island whose population had a reputation for dishonesty and controversy, and whose new faith had sometimes expressed itself in aggressive denunciation of the old religious and social order.",
      "The command to be submissive to rulers and authorities is one that Paul gives in various forms in several of his letters (Romans 13, 1 Timothy 2). It does not imply that political authorities are always right or that Christians should never resist injustice &mdash; the same Paul who wrote these words was imprisoned multiple times for preaching the gospel in defiance of official prohibition. Rather, the point is that the default disposition of the Christian toward civil authority should be one of cooperation, respect, and constructive participation in the public good, rather than a posture of suspicion, contempt, or habitual resistance. The community gathered around Christ was not to be known as a faction that disrupted social order; it was to be known for building it up.",
      "The instruction to be &ldquo;ready for every good work&rdquo; is a recurring theme in the Pastoral Epistles (1 Timothy 6:18; 2 Timothy 2:21; Titus 2:14; 3:8, 14). The phrase points to a readiness that is not merely theoretical but practical and immediate &mdash; a disposition to serve, to help, to contribute wherever need arises. This is the opposite of the kind of religious piety that retreats from the world into a ghetto of internal concerns. The good works Paul envisions are visible, public, and directed outward, shaping how the church is perceived by those who have not yet come to faith.",
      "The social instruction not to speak evil of anyone and to show courtesy to all people is particularly demanding given the context. Cretan society, like much of the ancient world, was organized around sharp distinctions of honor and shame, citizen and foreigner, slave and free. The Christian call to show perfect courtesy to all people &mdash; without distinction &mdash; was countercultural in a deep sense. It reflected the gospel&rsquo;s conviction that every human being bears the image of God and is a potential recipient of his mercy, and that the community of Christ therefore cannot afford the luxury of contempt toward anyone.",
      "Paul&rsquo;s grounding of these imperatives takes an unexpected turn in verse 3. Rather than appealing to natural law or civic virtue as the motivation for good behavior, he appeals to memory: &ldquo;for we ourselves were once foolish, disobedient, led astray, slaves to various passions and pleasures, passing our days in malice and envy, hated by others and hating one another&rdquo; (3:3). This catalogue of pre-Christian vices is not meant to produce self-flagellation but perspective. The Cretan Christians were to be gentle and courteous to all people precisely because they remembered the condition from which grace had rescued them. They had no grounds for pride or contempt; they were beggars who had been fed and were now to share the bread they had received.",
      "The movement from command to memory to gospel in verses 1&ndash;7 illustrates Paul&rsquo;s characteristic theological method: he always grounds the imperative in the indicative, the &ldquo;do this&rdquo; in the &ldquo;God has done this.&rdquo; Social and civic virtue, in Paul&rsquo;s vision, is not produced by moral willpower but by a transformed understanding of one&rsquo;s own condition and of the mercy that has addressed it. The person who has grasped what they once were, and what God has done to change it, becomes capable of a gentleness and courtesy toward others that mere moral instruction alone could never produce.",
    ],
  },
  {
    id: "Saved by Grace Not Works",
    heading: "Saved by Grace, Not by Works",
    reference: "Titus 3:4&ndash;7",
    paragraphs: [
      "The theological heart of Titus 3, and one of the most compact and beautiful summaries of the gospel in the entire New Testament, arrives in verses 4&ndash;7. Paul has just described the human condition in its pre-grace state &mdash; foolish, disobedient, led astray, enslaved to passions and pleasures, filled with malice and envy. Now he introduces the great turning point with two words that carry enormous weight in all of his letters: &ldquo;But when&hellip;&rdquo; What follows is a concise account of the entire drama of salvation, expressed in compressed and luminous prose.",
      "&ldquo;But when the goodness and loving kindness of God our Savior appeared, he saved us, not because of works done by us in righteousness, but according to his own mercy&rdquo; (3:4&ndash;5). The salvation Paul describes here is rooted entirely in the character and initiative of God. The phrase &ldquo;the goodness and loving kindness of God our Savior appeared&rdquo; is sometimes rendered &ldquo;the grace of God appeared,&rdquo; and it refers to the coming of Jesus Christ into the world &mdash; the appearance of divine goodness and mercy in human flesh. God did not wait for humanity to demonstrate righteousness before saving it; he acted in his own time and in accordance with his own mercy.",
      "The negative formulation is as important as the positive one: &ldquo;not because of works done by us in righteousness.&rdquo; Paul is insisting, as he does throughout his letters and nowhere more sharply than in Galatians and Romans, that human moral achievement played no causal role in God&rsquo;s decision to save. This is not because good works are unimportant &mdash; the entire preceding section of the chapter was about good works &mdash; but because they are not the ground of salvation. Salvation comes prior to good works and independent of them. It flows from mercy, not merit; from God&rsquo;s character, not human character.",
      "The means of salvation Paul then describes involves two closely related realities: &ldquo;the washing of regeneration and renewing of the Holy Spirit&rdquo; (3:5). The connection between the &ldquo;washing&rdquo; and Christian baptism is almost universally acknowledged by interpreters, though there is debate about whether Paul is speaking of baptism as a sign that points to spiritual reality or as a means through which spiritual reality is communicated. What is clear is that the washing Paul has in mind is not merely external &mdash; it is a washing of the whole person, a regeneration, a being-born-again in the most comprehensive sense. And it is the work of the Holy Spirit, not a human achievement.",
      "The &ldquo;renewing of the Holy Spirit&rdquo; is the Spirit&rsquo;s ongoing work of transformation within the believer, corresponding to what Paul elsewhere calls the renewing of the mind (Romans 12:2) and the process of being transformed from one degree of glory to another (2 Corinthians 3:18). The Spirit who effects the washing of regeneration does not then withdraw but continues to work within the believer, renewing and reshaping what grace has claimed. This renewing Spirit has been &ldquo;poured out richly through Jesus Christ our Savior&rdquo; (3:6) &mdash; the language of Pentecost, of abundance, of a divine giving that does not trickle but floods.",
      "The purpose clause of verse 7 ties the entire passage together: &ldquo;so that being justified by his grace we might become heirs according to the hope of eternal life.&rdquo; Justification and inheritance are the two great gifts that flow from the mercy, regeneration, and renewal Paul has described. To be justified is to be declared righteous before God&rsquo;s tribunal, not on the basis of what one has done but on the basis of what God has done in Christ. To be an heir is to possess, by right of adoption and grace, the inheritance that belongs to the Son. Both gifts point forward to the consummation still to come &mdash; the hope of eternal life that anchors everything the Christian does and endures in the present.",
    ],
  },
  {
    id: "The Washing of Regeneration",
    heading: "The Washing of Regeneration",
    reference: "Titus 3:5&ndash;7",
    paragraphs: [
      "The phrase &ldquo;the washing of regeneration and renewing of the Holy Spirit&rdquo; in Titus 3:5 has been one of the most carefully studied and debated texts in the history of Christian theology, particularly as it relates to the sacrament of baptism and the doctrine of regeneration. The Greek word translated &ldquo;washing&rdquo; (loutron) appears only here and in Ephesians 5:26 in the New Testament, and in both cases it is connected with cleansing and with the Spirit. The word translated &ldquo;regeneration&rdquo; (palingenesia) is equally rare, appearing elsewhere in the New Testament only in Matthew 19:28, where it refers to the renewal of all things at the end of the age.",
      "The conjunction of &ldquo;washing&rdquo; and &ldquo;regeneration&rdquo; in a single phrase suggests that Paul is describing a single reality viewed from two angles: the external sign of water and the internal reality of new birth. This has led theologians throughout church history to connect the passage closely with baptism, understood as the visible sacramental act through which the Spirit effects or signifies the invisible new birth. The Reformed tradition has generally understood baptism as a sign and seal that points to regeneration but does not automatically effect it, while other traditions have understood baptism as the ordinary means through which the Spirit communicates regeneration.",
      "What is theologically non-negotiable in the text, whatever one&rsquo;s view of the sacraments, is the agency: the washing and the regeneration and the renewing are all described as the work of the Holy Spirit, not of the person receiving them. The passive grammatical form &mdash; &ldquo;he saved us&rdquo; &mdash; places the entire weight of the action on God. The Spirit is not a resource that human beings activate through their faith or their decision; he is the agent of divine grace who acts sovereignly in the life of the one God is saving. This is salvation from first to last as an act of God.",
      "The &ldquo;renewing of the Holy Spirit&rdquo; that follows the washing of regeneration points to an ongoing and progressive work of transformation. In the New Testament, the language of renewal is consistently associated with the Spirit&rsquo;s work in the inner person: the renewing of the mind (Romans 12:2), the inner man being renewed day by day (2 Corinthians 4:16), being renewed in the spirit of the mind (Ephesians 4:23). This renewal is not a one-time event that coincides with new birth but a continuing process that characterizes the whole of the Christian life between regeneration and glorification. The same Spirit who washed and regenerated continues to renew &mdash; moment by moment, day by day, reshaping the believer into the image of Christ.",
      "The richness of the Spirit&rsquo;s outpouring is emphasized in verse 6: &ldquo;poured out richly through Jesus Christ our Savior.&rdquo; The adverb &ldquo;richly&rdquo; is not incidental. The Spirit has not been given in measured, insufficient doses; he has been poured out in abundance. This language echoes the promise of the Old Testament prophets, who spoke of a day when God would pour out his Spirit on all flesh (Joel 2:28), and it points to the event of Pentecost as the fulfillment of that promise. The Spirit who has been given richly to the church is not a residual or reluctant gift; he is the full, lavish, overflowing presence of God dwelling in his people.",
      "The result of this whole process &mdash; the appearing of God&rsquo;s goodness, the saving not by works but by mercy, the washing, the regeneration, the renewing, the outpouring &mdash; is stated in verse 7: justification and heirship. &ldquo;Being justified by his grace we might become heirs according to the hope of eternal life.&rdquo; This is the destination toward which the entire movement of grace has been directed: a people declared righteous before God and constituted as his heirs, possessing by grace what they could never have earned, awaiting the full realization of an inheritance that is certain because it rests not on their performance but on the finished work of Christ and the continuing work of the Spirit.",
    ],
  },
  {
    id: "Application",
    heading: "Applying Titus 3 Today",
    reference: "Titus 3 &mdash; For the Life of the Believer",
    paragraphs: [
      "Titus 3 speaks with immediate relevance into the situation of the contemporary church, which finds itself in a cultural moment not entirely unlike first-century Crete &mdash; a pluralistic society with competing authorities, a church that is often tempted to define itself primarily by what it opposes rather than what it commends, and a generation of Christians who need to understand why the gospel is not merely a private spiritual comfort but a power that transforms the texture of public life. Paul&rsquo;s instructions to Titus are not museum pieces from an ancient church but a living word addressed to the church in every age.",
      "The call to submission, gentleness, and courtesy toward all people is countercultural in an age of online controversy, political tribalism, and the habitual contempt that passes for engagement on social media. Paul&rsquo;s instruction is not a counsel of spineless accommodation but of gospel-shaped virtue: the Christian who remembers being &ldquo;foolish, disobedient, led astray, slaves to various passions and pleasures&rdquo; has no grounds for contempt toward anyone still in that condition. Gentleness toward the unconverted is not weakness; it is the natural overflow of a person who has understood grace and remembers being the recipient of it when they deserved no better than judgment.",
      "The theological center of the chapter &mdash; salvation by grace through the washing of regeneration and renewing of the Holy Spirit &mdash; provides the foundation for a Christian life that is genuinely free from the treadmill of works-righteousness. A great deal of Christian fatigue, depression, and legalism can be traced to a practical misunderstanding of what Paul states so clearly in Titus 3:5: we were saved not because of works done by us in righteousness. The person who has truly grasped this is liberated from the exhausting project of earning or maintaining God&rsquo;s favor and is free to do good works from the overflow of gratitude rather than from the anxiety of obligation.",
      "The Holy Spirit&rsquo;s role in regeneration and renewal &mdash; emphasized so strongly in this passage &mdash; has immediate practical implications for how Christians think about personal transformation. The renewal that Paul describes is not the product of better habits, stronger willpower, or more rigorous spiritual discipline, though those things have their proper place. It is, at its root, the ongoing work of the Spirit poured out richly through Jesus Christ. This means that the Christian&rsquo;s primary relationship in sanctification is not with a program or a technique but with a person: the Holy Spirit, whose renewing work operates at the deepest level of the self, reshaping desires, affections, and understanding over time.",
      "Paul&rsquo;s instruction in verse 9 to avoid foolish controversies, genealogies, and dissensions addresses a perennial temptation of Christian communities: the tendency to become absorbed in speculative or divisive discussions at the expense of the central work of gospel proclamation and practical service. The Pastoral Epistles repeatedly warn against this tendency (1 Timothy 1:4; 4:7; 6:4; 2 Timothy 2:23), not because intellectual engagement is dangerous but because certain kinds of argument generate heat without light, consume time and energy that could be devoted to pressing needs, and damage the unity that the gospel creates. The Cretan church had specific problems with this; every church in every generation has its version of the same problem.",
      "The chapter closes with the exhortation that &ldquo;our people&rdquo; learn to devote themselves to good works for pressing needs, so that they are not unfruitful (3:14). This is Paul&rsquo;s final word, and it is characteristic of his whole theological method: the great doctrinal statement about grace through the Spirit leads directly to the practical imperative of visible good works in the community. Salvation by grace does not produce passive people who float through the world on the cloud of their own justification; it produces people who are &ldquo;zealous for good works&rdquo; (Titus 2:14), ready and eager to address the pressing needs of others with the same generosity and mercy that God has shown them. Titus 3 begins with grace and ends with fruit, and the connection between the two is the whole point.",
    ],
  },
];

const videoItems = [
  { videoId: "7RoqnGcEjcs", title: "Titus 3 - Saved by Grace, Not Works - Bible Study" },
  { videoId: "M_6g5MLKPNA", title: "BibleProject Overview - 1-2 Timothy and Titus" },
  { videoId: "fkDxHHOdT7k", title: "The Washing of Regeneration - Titus 3:5 Explained" },
  { videoId: "yHk6gveGDNM", title: "Titus - The Pastoral Epistles and Life in the Church" },
];

export default function Titus3GuidePage() {
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
            Titus 3 &mdash; Saved by Grace
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Submission to rulers, the memory of what we once were, and the transforming power of God&rsquo;s mercy &mdash; &ldquo;He saved us, not because of works done by us in righteousness, but according to his own mercy, by the washing of regeneration and renewing of the Holy Spirit.&rdquo;
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
              Explore Titus 3 through these video teachings on grace-driven living, the washing of regeneration, the renewing of the Holy Spirit, and the call to good works in the community.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Not by Works, but by Mercy</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Titus 3 anchors the Christian life in the unshakeable reality of divine mercy &mdash; a mercy that appeared in Christ, washed and regenerated through the Spirit, and poured out richly on those who deserved nothing. Saved not by works but by grace, the believer is now free to do good works from love rather than from fear, bearing the fruit of a transformed life in the community and in the world.
          </p>
        </div>
      </main>
    </div>
  );
}
