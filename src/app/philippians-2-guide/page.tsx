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
  "The Christ Hymn",
  "Kenosis and Humility",
  "Work Out Your Salvation",
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
    heading: "Overview of Philippians 2",
    reference: "Philippians 2:1&ndash;30",
    paragraphs: [
      "Philippians 2 stands at the heart of one of Paul&rsquo;s most personal and joyful letters, written from prison to a church he loved deeply. The Philippian congregation had supported Paul financially and spiritually throughout his ministry, and his letter to them breathes warmth, gratitude, and pastoral urgency. In chapter 2, Paul turns from thanksgiving to exhortation, urging the believers toward a unity rooted not in shared opinion but in shared humility &mdash; the humility modeled by Christ himself.",
      "The chapter opens with a fourfold appeal: &ldquo;If there is any encouragement in Christ, any comfort from love, any participation in the Spirit, any affection and sympathy&mdash;&rdquo; (2:1). Each &ldquo;if&rdquo; is not expressing doubt but assuming certainty. Paul&rsquo;s argument is: since all of these spiritual realities are genuinely yours, then &ldquo;complete my joy by being of the same mind, having the same love, being in full accord and of one mind&rdquo; (2:2). The unity he seeks is not uniformity of personality but convergence of heart around Christ.",
      "The path to that unity, Paul insists, runs through humility. &ldquo;Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves&rdquo; (2:3). This was a countercultural word in a Roman world that prized honor, status, and self-promotion. Yet Paul grounds it in something far more radical than a social ethic: he grounds it in the very character of the Son of God. What follows in verses 6&ndash;11 is the most magnificent Christological poem in the New Testament &mdash; a hymn to the humiliation and exaltation of Christ that redefines greatness forever.",
      "After the Christ hymn, Paul draws out its practical implications. The Philippians are to work out their salvation &ldquo;with fear and trembling&rdquo; (2:12), not because salvation is earned by effort but because God himself is at work within them, energizing both the will and the action. They are to do all things &ldquo;without grumbling or disputing&rdquo; (2:14), shining as lights in a crooked and twisted generation. This ethical vision is inseparable from its theological foundation: the pattern of the cross is the pattern for the Christian life.",
      "Chapter 2 concludes with Paul presenting two living examples of the Christlike mind he has described: Timothy, who has proven himself by genuinely caring for others rather than seeking his own interests (2:20&ndash;21), and Epaphroditus, who nearly died in service to Paul and to the Philippians&rsquo; need (2:27&ndash;30). These men are portraits of the kenotic, self-giving love Paul has commended &mdash; proof that the mind of Christ is not a theological abstraction but a way of life that real human beings can embody by the grace of God.",
      "Understanding Philippians 2 requires situating it within the whole of Pauline theology. Paul does not present humility as a psychological virtue or a social strategy. He presents it as conformity to the shape of Christ &mdash; as participation in the pattern of death and resurrection. To have the &ldquo;same mind&rdquo; as Christ (2:5) is to be oriented toward self-giving love rather than self-seeking power. The chapter thus connects ethics and Christology at the deepest level: how we treat one another cannot be separated from what we believe about who Jesus is and what he has done.",
    ],
  },
  {
    id: "The Christ Hymn",
    heading: "The Christ Hymn: Philippians 2:6&ndash;11",
    reference: "Philippians 2:6&ndash;11",
    paragraphs: [
      "Philippians 2:6&ndash;11 is one of the most studied passages in all of Scripture. Since at least the work of nineteenth-century scholars, it has been identified as a pre-Pauline hymn &mdash; a carefully structured poem about the descent and ascent of Christ that Paul either composed himself or incorporated from early Christian worship. Whether original to Paul or received from the church, it is a breathtaking statement of who Jesus is and what he has done, and it has shaped Christian theology for two thousand years.",
      "The hymn divides naturally into two movements. The first (vv. 6&ndash;8) describes Christ&rsquo;s descent: from divine equality into human flesh, from human life into servitude, from servitude into death, and from death into the most shameful death of all &mdash; crucifixion. The second movement (vv. 9&ndash;11) describes the Father&rsquo;s response: exaltation to the highest place, the gift of the name above every name, and the universal confession that Jesus Christ is Lord. The structure enacts the very theology it announces: humility leads to exaltation.",
      "The first phrase of the hymn is charged with significance: &ldquo;though he was in the form of God&rdquo; (v. 6). The Greek word &ldquo;morphe&rdquo; (form) is not merely appearance but essential character; to be in the form of God is to truly and fully share the divine nature. This is not a lesser deity or a divine being of secondary rank; this is one who is genuinely equal to God and exists in that equality as his rightful condition.",
      "Yet &ldquo;he did not count equality with God a thing to be grasped&rdquo; (v. 6). The word translated &ldquo;grasped&rdquo; (&ldquo;harpagmon&rdquo;) has generated enormous scholarly debate: does it mean something to be seized and taken, or something already possessed and clung to? Most recent scholarship favors the reading that Christ did not treat his divine equality as something to be exploited for his own advantage. Where Adam grasped at equality with God (Genesis 3), Christ, who already possessed that equality, chose not to use it for self-advancement but poured it out instead.",
      "What follows is a cascade of self-lowering: he &ldquo;emptied himself, taking the form of a servant, being born in the likeness of men&rdquo; (v. 7). The word &ldquo;emptied&rdquo; (&ldquo;kenosen&rdquo;) gives us the theological term &ldquo;kenosis&rdquo; &mdash; the self-emptying of the Son. He then &ldquo;humbled himself by becoming obedient to the point of death, even death on a cross&rdquo; (v. 8). Each phrase deepens the descent: incarnation, servanthood, obedience, death, cross. The cross is the nadir, the lowest possible point, the place of maximum shame and abandonment in the ancient world.",
      "Then comes the great &ldquo;therefore&rdquo; of verse 9: &ldquo;God has highly exalted him and bestowed on him the name that is above every name, so that at the name of Jesus every knee should bow, in heaven and on earth and under the earth, and every tongue confess that Jesus Christ is Lord, to the glory of God the Father.&rdquo; The language of universal obeisance and the gift of the divine name echo Isaiah 45:23, where the Lord declares that every knee will bow to him alone. Paul applies this text to Jesus, placing him on the same throne as the Father. The humility that went all the way down is crowned with a glory that encompasses all creation.",
    ],
  },
  {
    id: "Kenosis and Humility",
    heading: "Kenosis, Self-Emptying, and Christian Humility",
    reference: "Philippians 2:3&ndash;8",
    paragraphs: [
      "The doctrine of kenosis &mdash; from the Greek &ldquo;kenosen,&rdquo; to empty &mdash; has been one of the most fertile and contested doctrines in Christian theology. The question it poses is: what did the eternal Son of God give up, or take on, or set aside in becoming human? And what does his act of self-emptying mean for Christian discipleship? Paul&rsquo;s purpose in the letter to the Philippians is not primarily to deliver a systematic Christology but to call the church to imitate the pattern of Christ &mdash; and yet the Christology he invokes to make that call is staggering in its depth.",
      "The simplest reading of kenosis is that Christ did not empty himself of divinity &mdash; as if he ceased to be God during the incarnation &mdash; but rather emptied himself of divine privilege, the independent exercise of divine prerogatives, and the glory that was his in the Father&rsquo;s presence. He voluntarily limited himself, taking up the condition of a servant and accepting the constraints of creaturely human life. This is why the hymn says he &ldquo;emptied himself&rdquo; by &ldquo;taking the form of a servant&rdquo; &mdash; the emptying is explained and defined by what he took on, not by what he shed.",
      "The Greek word for &ldquo;servant&rdquo; here is &ldquo;doulos,&rdquo; which means a slave &mdash; the lowest rank in the Roman social order. The Son of God, who occupied the highest conceivable position (equality with God), chose the lowest conceivable human position. He did not just become human; he became a slave. And not just a slave, but a slave who was executed by the state in the most degrading fashion reserved for criminals and rebels. The distance traveled from divine glory to Roman cross is the measure of the love of God.",
      "Paul does not allow this Christology to remain in the realm of doctrine. He frames the entire hymn with an exhortation: &ldquo;Have this mind among yourselves, which is yours in Christ Jesus&rdquo; (2:5). The mind of Christ &mdash; his orientation of self-giving rather than self-seeking &mdash; is both a gift (&ldquo;which is yours in Christ Jesus&rdquo;) and a calling (&ldquo;have this mind among yourselves&rdquo;). Christlikeness is not achieved by gritting one&rsquo;s teeth and trying harder; it is the overflow of being united to Christ by faith.",
      "Biblical humility, as Philippians 2 presents it, is not self-deprecation, low self-esteem, or the performance of smallness. It is the reorientation of the will away from self-interest and toward the good of others, grounded in the security of knowing one&rsquo;s true identity in God. Christ could choose the way of the slave precisely because he was secure in who he was &mdash; he did not need to grasp at equality because it was already his. The Philippians can &ldquo;count others more significant&rdquo; than themselves precisely because they are already counted as sons and daughters of God.",
      "The practical shape of this kenotic humility shows up in the texture of ordinary community life: preferring others in seating and honor, speaking encouragingly rather than critically, being willing to do the unglamorous work that no one sees, asking how another is doing rather than talking only about oneself, declining to use one&rsquo;s gifts or position to dominate. None of these acts seems heroic, but each one is, in microcosm, the same movement Christ made &mdash; downward, outward, toward the other. The cross is the pattern; the ordinary interactions of church life are the practice.",
    ],
  },
  {
    id: "Work Out Your Salvation",
    heading: "Work Out Your Salvation: God at Work in You",
    reference: "Philippians 2:12&ndash;18",
    paragraphs: [
      "&ldquo;Therefore, my beloved, as you have always obeyed, so now, not only as in my presence but much more in my absence, work out your own salvation with fear and trembling&rdquo; (2:12). These words have sometimes been misread as teaching that salvation is earned by obedience and moral effort &mdash; a misreading that the very next verse immediately corrects. Paul is not contradicting his theology of grace; he is applying it. The &ldquo;therefore&rdquo; connects this exhortation to everything that has come before: precisely because of what Christ has done, and precisely because God is at work in you, live it out.",
      "The phrase &ldquo;work out&rdquo; translates the Greek &ldquo;katergazesthe,&rdquo; which means to carry something through to its full completion or expression. Paul is not saying &ldquo;work for&rdquo; salvation as if it were a wage to be earned, but &ldquo;work out&rdquo; salvation as one might work out a mathematical problem to its full solution. The salvation that has been given in Christ is to be expressed, enacted, and brought to fruition in the concrete particulars of daily life. Faith is not passive; it produces fruit.",
      "The qualifying phrase &ldquo;with fear and trembling&rdquo; does not describe terror before a God who might condemn at any moment. In Paul&rsquo;s letters, this phrase consistently describes the seriousness and awe-filled attentiveness with which one undertakes a task of great spiritual weight (cf. 1 Corinthians 2:3; 2 Corinthians 7:15). There is a healthy reverence in the Christian life that keeps us from treating grace as cheap or from becoming spiritually casual. The stakes of how we live together in the community of faith are real.",
      "Verse 13 is the theological pivot: &ldquo;for it is God who works in you, both to will and to work for his good pleasure.&rdquo; The word &ldquo;works&rdquo; here (&ldquo;energon&rdquo;) gives us the English word &ldquo;energy.&rdquo; God himself is the internal energy source behind both the desire (&ldquo;to will&rdquo;) and the action (&ldquo;to work&rdquo;) in the believer&rsquo;s life. This is the deepest possible answer to the question of how fallen human beings can ever embody the mind of Christ: not by self-improvement but by divine indwelling. The God who commands is the same God who enables.",
      "&ldquo;Do all things without grumbling or disputing&rdquo; (2:14) &mdash; a deceptively simple verse that strikes at one of the most corrosive habits of community life. Paul echoes the wilderness generation who grumbled against Moses and against God (Exodus 16&ndash;17; Numbers 14). Grumbling is not a minor social irritation; it is a failure of trust. It says, in effect, that God is not good enough, that his provision is not sufficient, that the circumstances he has allowed are intolerable. The antidote is not forced cheerfulness but the deep confidence that the God who is at work in us is sovereign over our circumstances.",
      "The purpose of this blameless, upright life lived in the midst of a &ldquo;crooked and twisted generation&rdquo; (2:15) is missional: the Philippians are to &ldquo;shine as lights in the world.&rdquo; The image echoes Daniel 12:3 and the Sermon on the Mount (Matthew 5:14&ndash;16). The church&rsquo;s internal life of unity, humility, and joy is not merely for the comfort of its members; it is a witness to the watching world that there is a different way of being human, made possible by a crucified and risen Lord. Paul adds that on the day of Christ, the Philippians&rsquo; faithfulness will be his crown of rejoicing &mdash; he will not have run in vain.",
    ],
  },
  {
    id: "Application",
    heading: "Applying Philippians 2 Today",
    reference: "Philippians 2:1&ndash;30",
    paragraphs: [
      "Philippians 2 has never been more countercultural than in an age of relentless self-promotion, competitive achievement, and social media performance. The chapter calls believers to a way of life that runs directly against the grain of contemporary culture: to seek not one&rsquo;s own interests but those of others (2:4), to regard oneself not as the center of the social universe but as a servant of those around us (2:3), and to find in the humiliation of Christ the definition of greatness rather than in wealth, platform, or acclaim. This is not a comfortable message, but it is a liberating one.",
      "The most immediate application is in the life of the local church. Paul wrote Philippians 2 because a specific community of specific people was experiencing specific tensions &mdash; tension enough that he mentions two women by name in chapter 4 who need to &ldquo;agree in the Lord&rdquo; (4:2). Wherever there is a church, there is the potential for the comparison, competition, and jockeying for position that Paul warns against. The prescription is not conflict-avoidance or pretending problems do not exist; it is the active, costly decision to value others above oneself and to look to their interests, not only one&rsquo;s own.",
      "For Christian leaders, Philippians 2 is a searching text. The Christ who possessed divine equality chose the form of a slave. The leader who genuinely embraces this will be more interested in the flourishing of those they lead than in their own reputation or authority. They will be willing to do the unseen work, to give credit to others, to be the last to speak, to serve rather than to be served. Timothy is held up as the example: &ldquo;I have no one like him, who will be genuinely concerned for your welfare&rdquo; (2:20). Genuine concern for the welfare of others, rather than concern for one&rsquo;s own advancement, is the mark of Christlike leadership.",
      "The kenotic pattern also speaks to how Christians engage with suffering. Christ&rsquo;s obedience went &ldquo;to the point of death, even death on a cross.&rdquo; He did not avoid or escape the suffering that came with faithful obedience; he embraced it as the path marked out for him. Christians in difficult circumstances &mdash; whether persecution, illness, relational loss, or vocational sacrifice &mdash; are not suffering outside the scope of God&rsquo;s purposes. They are walking in the footsteps of the one who went the whole way down, trusting that the God who exalted Christ from the grave is faithful to bring life out of every death.",
      "Philippians 2 also invites a regular practice of worship. The Christ hymn was most likely sung in early Christian gatherings, and there is something irreplaceable about singing theology rather than only studying it. When the body of Christ gathers and confesses together that &ldquo;every knee shall bow and every tongue confess that Jesus Christ is Lord,&rdquo; it is not merely reciting doctrine; it is participating by anticipation in the great eschatological confession that all creation will one day make. Worship aligns the heart with the truth that Christ is Lord &mdash; and a heart that regularly declares his lordship is a heart being reshaped into his humility.",
      "Finally, Philippians 2 calls us to hope. The story of the chapter does not end at the cross; it ends with universal exaltation. Every knee in heaven, on earth, and under the earth will bow. Every tongue will confess. The pattern of humiliation-then-exaltation is not only Christ&rsquo;s story but the shape of the whole Christian life and the arc of history itself. The &ldquo;day of Christ&rdquo; toward which Paul looks (2:16) is the day when everything hidden will be revealed, every wrong will be made right, and the one who &ldquo;emptied himself&rdquo; will be seen by all creation in the fullness of his glory. That hope does not make present suffering trivial; it makes it bearable, and more than bearable &mdash; it makes it meaningful.",
    ],
  },
];

const videoItems = [
  { videoId: "oNNZO9i1Gjc", title: "Philippians 2 - The Mind of Christ (Sermon Study)" },
  { videoId: "pPd7LBYORBY", title: "The Christ Hymn - Philippians 2:6-11 Explained" },
  { videoId: "ZCoBC6iq91A", title: "Kenosis - What Did Jesus Empty Himself Of?" },
  { videoId: "9TIFmDJAGPk", title: "Every Knee Shall Bow - The Exaltation of Christ" },
];

export default function Philippians2GuidePage() {
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
            Philippians 2 &mdash; Humility and Exaltation of Christ
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul&rsquo;s call to Christlike humility and the magnificent Christ hymn of Philippians 2:6&ndash;11 &mdash; the kenosis of the Son, the pattern of self-emptying love, the confession that every knee shall bow, and the glory that follows the way of the cross.
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
            Deepen your study of Philippians 2 through these video teachings on the Christ hymn, kenosis, humility, and the exaltation of Jesus.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Have This Mind Among Yourselves</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Philippians 2 redefines greatness by the pattern of the cross. The one who was in the form of God took the form of a slave, was obedient to death, and was therefore exalted above all. His humility is not only our doctrine but our calling &mdash; to count others more significant than ourselves, to look not only to our own interests but to the interests of others, and to shine as lights in the world as we hold fast to the word of life.
          </p>
        </div>
      </main>
    </div>
  );
}
