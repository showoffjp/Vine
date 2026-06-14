"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Teach What Accords",
  "Grace That Trains",
  "Living Godly Now",
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
    heading: "Titus 2 &mdash; Overview",
    reference: "Titus 2:1&ndash;15",
    paragraphs: [
      "Titus 2 is one of the most practically focused chapters in all of Paul&rsquo;s letters. Writing to Titus, his trusted co-worker whom he left in Crete to &ldquo;put what remained into order and appoint elders in every town&rdquo; (1:5), Paul gives detailed instruction about how the gospel should shape concrete behavior in every category of believer: older men, older women, younger women, younger men, and bondservants. The chapter is not a list of religious duties but a portrait of what grace actually produces when it takes root in human lives.",
      "The chapter moves with a clear theological architecture. It opens with a command to Titus: &ldquo;But as for you, teach what accords with sound doctrine&rdquo; (2:1). This sets the frame for everything that follows: the behavioral instructions are not independent moral imperatives but applications of sound teaching. Titus is to model and transmit a body of truth that produces transformed lives. The link between doctrine and conduct is not incidental; it is the entire point.",
      "The centerpiece of the chapter comes in verses 11&ndash;14, one of the most compressed and powerful theological statements in the New Testament. In six verses Paul summarizes the entire structure of salvation: the grace of God has appeared to all people (past), training us to live godly lives (present), while we wait for the blessed hope &mdash; the appearing of the glory of Jesus Christ (future). Past grace, present discipline, future glory &mdash; the whole Christian life is held within this frame.",
      "The Cretan context matters for understanding the chapter. Paul has already quoted the Cretan poet Epimenides to describe the cultural character of the island: &ldquo;Cretans are always liars, evil beasts, lazy gluttons&rdquo; (1:12). This is not mere slander; it describes a cultural environment hostile to the virtues Paul is about to enumerate. The church in Crete is surrounded by and made up of people formed by this culture. The question Titus 2 answers is: how does the gospel transform people who come from that background? The answer is: through the patient, deliberate teaching and modeling of sound doctrine, sustained by the grace of God that trains us from the inside.",
      "There is also a strong missional argument running through the chapter. Several of the behavioral instructions are given &ldquo;so that the word of God may not be reviled&rdquo; (2:5) or &ldquo;so that an opponent may be put to shame, having nothing evil to say about us&rdquo; (2:8). The church&rsquo;s visible conduct is its public witness. When Christians live orderly, self-controlled, and loving lives, they adorn the gospel rather than blot it. The beauty of holy living is itself an argument for the truth of the message.",
      "Titus 2 ends with a bold command: &ldquo;Declare these things; exhort and rebuke with all authority. Let no one disregard you&rdquo; (2:15). Titus is not to be tentative about the demands of sound doctrine. The grace that has appeared is not merely comforting; it is commanding. It makes claims on every person in every category of life, and those claims are to be taught with confidence and clarity. The gentleness with which Paul describes the training of grace is matched by the firmness with which he commands its proclamation.",
    ],
  },
  {
    id: "Teach What Accords",
    heading: "Teach What Accords with Sound Doctrine",
    reference: "Titus 2:1&ndash;10",
    paragraphs: [
      "The opening command of Titus 2 &mdash; &ldquo;But as for you, teach what accords with sound doctrine&rdquo; &mdash; stands in deliberate contrast to the false teachers Paul has just described in chapter 1. Those teachers were &ldquo;teaching what they ought not to teach&rdquo; (1:11) for the sake of shameful gain. Titus is to be their opposite: a teacher whose content is governed not by what is popular or profitable but by what is sound &mdash; a Greek word (hugiaino) that literally means &ldquo;healthy&rdquo; or &ldquo;wholesome.&rdquo; Sound doctrine is doctrine that produces health in the body of Christ.",
      "Paul then applies this sound doctrine to specific groups within the congregation, beginning with older men. They are to be &ldquo;sober-minded, dignified, self-controlled, sound in faith, in love, and in steadfastness&rdquo; (2:2). The list is notable for what is absent: there is no call to heroic feats of ministry or dramatic spiritual experiences. What Paul describes is the quiet, sustained integrity of a man who has grown in the faith over decades &mdash; whose faith is still alive, whose love has not grown cold, whose endurance has not faltered. This is the model of mature Christian manhood.",
      "Older women are to be &ldquo;reverent in behavior, not slanderers or slaves to much wine&rdquo; (2:3). The positive instruction is that they should teach what is good. The word Paul uses for this teaching is not the normal word for formal instruction (didaskein) but a compound word that means to be a &ldquo;teacher of what is good&rdquo; (kalodidaskalos) &mdash; a rich word suggesting the formation of character and values, not merely the transmission of information. Their particular sphere of teaching is the younger women.",
      "The instruction to younger women flows through the older women: the older are to &ldquo;train the younger women to love their husbands and children, to be self-controlled, pure, working at home, kind, and submissive to their own husbands&rdquo; (2:4&ndash;5). The word &ldquo;train&rdquo; here (sophronizo) is the same root as &ldquo;self-controlled&rdquo; (sophron) used throughout the chapter &mdash; suggesting not external compliance but the formation of a wise, disciplined character that shapes all of life. The explicit rationale given is missional: &ldquo;that the word of God may not be reviled.&rdquo; The church&rsquo;s family life is public testimony.",
      "Younger men receive the shortest instruction: &ldquo;urge the younger men to be self-controlled&rdquo; (2:6). The brevity is itself significant. Self-control is named as the single virtue that encompasses everything else a young man needs &mdash; because self-control is the capacity that makes every other virtue possible. The same word (sophrosyne) runs through the whole chapter like a golden thread, applied to older men, older women, younger women, and now younger men. It is the disposition that grace trains, and it is the foundation of a life that adorns the gospel.",
      "Bondservants are to be &ldquo;well-pleasing, not argumentative, not pilfering, but showing all good faith&rdquo; (2:9&ndash;10). The instruction to enslaved people in the ancient household carries enormous theological weight. Paul does not address the institution of slavery here &mdash; that is a larger conversation carried elsewhere in his letters. What he does is make the most radical possible claim within the institution: that even in conditions of servitude, the grace of God transforms a person&rsquo;s character such that they become visible advertisements for &ldquo;the teaching of God our Savior.&rdquo; No social condition puts a person beyond the reach of grace&rsquo;s training.",
    ],
  },
  {
    id: "Grace That Trains",
    heading: "The Grace of God That Trains",
    reference: "Titus 2:11&ndash;13",
    paragraphs: [
      "Verses 11&ndash;14 are the theological engine of the entire letter to Titus. Everything Paul has commanded in the first ten verses of chapter 2 &mdash; and everything he will command in chapter 3 &mdash; rests on this foundation. Paul does not motivate Christian behavior with rules, with threat, or with the approval of others. He motivates it with the gospel: the grace of God has appeared, and its appearance carries with it a transforming power.",
      "&ldquo;For the grace of God has appeared, bringing salvation for all people&rdquo; (2:11). The word &ldquo;appeared&rdquo; (epiphaneia) is a loaded term. It was used in the Greek world for the dramatic appearance of a god or a king, or for the sudden manifestation of divine help in a crisis. Paul uses it here &mdash; and again in verse 13 &mdash; to describe the incarnation of Jesus Christ and his future return. The grace of God is not an abstract principle; it is a Person who entered history at a specific moment and whose appearing has changed everything.",
      "The saving grace that has appeared is said to be &ldquo;training us&rdquo; (2:12). This word (paideuo) is the word used for the education and discipline of children &mdash; the shaping of character through sustained instruction, correction, and formation. Grace is not passive. It does not simply declare us forgiven and leave us where we are. It takes us by the hand, as a father takes a child, and forms us over time into people who &ldquo;renounce ungodliness and worldly passions&rdquo; and live &ldquo;self-controlled, upright, and godly lives in the present age.&rdquo; This is the most important statement in the chapter about the mechanism of Christian sanctification.",
      "The three dimensions of the godly life Paul describes are worth dwelling on: &ldquo;self-controlled&rdquo; (sophronos) speaks to one&rsquo;s inner life and the governance of one&rsquo;s desires; &ldquo;upright&rdquo; (dikaios) speaks to one&rsquo;s conduct toward other people and the fulfillment of relational obligations; &ldquo;godly&rdquo; (eusebos) speaks to one&rsquo;s orientation toward God and the practice of devotion. Together they describe the whole person: internally ordered, relationally faithful, and vertically alive to God. This is the shape of the life that grace trains.",
      "The training of grace operates between two appearances. The first appearance (2:11) is the incarnation, death, and resurrection of Jesus Christ. The second appearance (2:13) is the &ldquo;blessed hope &mdash; the appearing of the glory of our great God and Savior Jesus Christ.&rdquo; Christians live between these two epiphanies, trained by the grace of the first and oriented toward the glory of the second. The &ldquo;present age&rdquo; in which we are to live godly lives is the age between these two events &mdash; an age that is neither final nor endless, but purposeful and bounded.",
      "The description of Christ in verse 13 as &ldquo;our great God and Savior&rdquo; is one of the clearest affirmations of the full deity of Jesus Christ in the New Testament. Greek grammar (the Granville Sharp rule) indicates that &ldquo;great God and Savior&rdquo; refer to a single person: Jesus Christ. Paul is not waiting for the appearing of God the Father; he is waiting for the personal, glorious return of the Lord Jesus, in whom the fullness of the Godhead dwells bodily. The blessed hope is not a state but a Person &mdash; and that Person is the same one whose grace has been training us all along.",
    ],
  },
  {
    id: "Living Godly Now",
    heading: "Living Godly in the Present Age",
    reference: "Titus 2:14&ndash;15",
    paragraphs: [
      "The theological passage that began in verse 11 reaches its climax in verse 14 with a description of what Christ accomplished in his death: &ldquo;who gave himself for us to redeem us from all lawlessness and to purify for himself a people for his own possession who are zealous for good works.&rdquo; The atonement in Titus 2 is not merely transactional &mdash; Christ paying a debt so that we might go free to live as we please. It is thoroughly transformational. He gave himself to purify a people who belong to him and who are characterized by eagerness for good works.",
      "The phrase &ldquo;zealous for good works&rdquo; echoes through the entire letter. In Titus 1:16, Paul describes false teachers as those who &ldquo;profess to know God, but deny him by their works.&rdquo; In Titus 3:1, believers are to be &ldquo;ready for every good work.&rdquo; In Titus 3:14, they are to &ldquo;devote themselves to good works.&rdquo; Good works are not the basis of salvation in Titus; they are the evidence and goal of it. A person redeemed by Christ and trained by his grace will be a person who eagerly, not grudgingly, pursues what is good.",
      "What does &ldquo;living godly in the present age&rdquo; actually look like in the concrete contexts of daily life? The chapter has already given us the answer in exhaustive detail: it looks like an older man whose faith and love have survived decades of ordinary life intact; an older woman who has earned the right to shape the next generation through the quality of her own life; a young wife who loves her husband and children with a self-controlled, wise affection; a young man who has learned to govern his own desires; a worker who brings complete honesty and good faith to their labor. These are not dramatic or headline-grabbing acts. They are the texture of ordinary faithfulness.",
      "There is a sharp contrast implicit in the phrase &ldquo;present age.&rdquo; The present age is characterized by ungodliness and worldly passions &mdash; the very things grace trains us to renounce. To live godly in the present age is always to swim against the current. In Crete, where liars and gluttons set the cultural standard, godly living was countercultural in the most literal sense. In any culture, at any time, the life that grace produces will be distinctive because it is shaped by a different power and oriented toward a different future than the surrounding world.",
      "The &ldquo;blessed hope&rdquo; of verse 13 is not a passive comfort; it is a motivating horizon. Christians live in the knowledge that the present age will end and that the glorious appearing of Jesus Christ is coming. This hope disciplines the present: &ldquo;everyone who has this hope in him purifies himself as he is pure&rdquo; (1 John 3:3). To wait for the appearing of the great God and Savior is to be shaped by that waiting &mdash; to find the patterns of the age to come beginning to take hold in the age that is. Godly living in the present is not merely a duty; it is an anticipation.",
      "Paul closes the chapter with a command to Titus that is as striking in its confidence as anything in the letter: &ldquo;Declare these things; exhort and rebuke with all authority. Let no one disregard you&rdquo; (2:15). Titus is young, working in a hostile culture, surrounded by false teachers. He might be tempted toward timidity. Paul will not permit it. The grace that trains us produces not only gentleness but boldness. The gospel makes authoritative claims, and those claims are to be taught, pressed, and if necessary enforced against opposition &mdash; because the souls of real people in the real congregations of Crete depend on hearing them clearly.",
    ],
  },
  {
    id: "Application",
    heading: "Application for Today",
    reference: "Titus 2 &mdash; Living the Message",
    paragraphs: [
      "Titus 2 speaks with remarkable directness to the contemporary church, because the church today faces many of the same pressures the churches of Crete faced. A surrounding culture that prizes self-expression over self-control, that treats sexual freedom as an unqualified good, that regards the Christian account of gender and family as oppressive and backward &mdash; these pressures are not new. Paul&rsquo;s response was not to soften the message but to deepen the community: to produce, through patient teaching and the modeling of grace, a people whose visible lives make an argument for the truth of what they believe.",
      "The inter-generational structure of Titus 2 is one of its most challenging and most needed elements for the contemporary church. Paul assumes that older men will form younger men, and that older women will form younger women &mdash; that the faith is transmitted not only through formal instruction but through the kind of relationship where life is observed and imitated over time. In an era of age-segregated church programs and attenuated community, the vision of Titus 2 is a rebuke and an invitation: what would it look like for older believers to deliberately invest their lives in the formation of the next generation?",
      "The chapter is also a corrective to two opposite errors. Against moralism, it insists that godly behavior flows from grace &mdash; not from rule-keeping, social pressure, or sheer willpower. The same grace that justified us is the grace that trains us. Sanctification is not a project we accomplish by our own determination; it is what grace does in people who receive it, trust it, and live in light of its two appearances. Against antinomianism, the chapter insists that grace makes demands. The grace that appears does not say, &ldquo;You may live as you please.&rdquo; It says, &ldquo;Renounce ungodliness. Live self-controlled, upright, and godly lives. Be zealous for good works.&rdquo;",
      "For individual believers, the chapter offers a deeply realistic account of what the Christian life looks like in practice. It does not promise dramatic experiences, extraordinary gifts, or rapid transformation. It describes a long, patient process: the grace of God, working over years through the ordinary means of teaching, community, and example, forming people who renounce what destroys them and pursue what truly flourishes. This is not exciting by the world&rsquo;s standards. It is the quiet, daily, costly work of being formed into the image of the one whose grace appeared for us.",
      "The blessed hope at the center of the chapter is also directly applicable to every generation of Christians. We live between the two appearances, and the shape of our present life should be determined by both. The first appearance &mdash; the grace of God in Christ &mdash; tells us what we have been redeemed from and what we have been redeemed for. The second appearance &mdash; the glorious return of Christ &mdash; tells us where we are going and who we are becoming. Between these two poles, &ldquo;self-controlled, upright, and godly&rdquo; describes not a burden to be endured but a life to be inhabited by people who know what has been done for them and what is coming toward them.",
      "Finally, the chapter is an invitation to the local church to take seriously its responsibility as a visible community of grace. The church does not exist merely to provide religious services. It exists to be the display of what grace produces &mdash; a community where older and younger, men and women, workers and employers, are all being trained by the same grace toward the same hope. When the church lives this way, it adorns the teaching of God our Savior. When it does not, it reviles the word of God. Titus 2 is the charge to every generation of believers to take up the long and beautiful work of being shaped by grace for the glory of the one who gave himself to make us his own.",
    ],
  },
];

const videoItems = [
  { videoId: "qE0Ac5bgFkE", title: "Titus 2 - Sound Doctrine and Godly Living Explained" },
  { videoId: "rW6GWJ2O4-M", title: "The Grace of God That Trains Us - Titus 2:11-14" },
  { videoId: "JvUwHd5MKyo", title: "Titus 2 Man - What Does the Bible Say?" },
  { videoId: "S8GtNFm9vSQ", title: "BibleProject - Overview of Titus" },
];

export default function Titus2GuidePage() {
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
            Titus 2 &mdash; Grace That Trains
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The grace of God that has appeared in Jesus Christ trains every believer &mdash; old and young, men and women &mdash; to renounce ungodliness and live self-controlled, upright, and godly lives as we wait for the blessed hope of his glorious appearing.
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

        <section style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.75rem" }}>
            Deepen your study of Titus 2 through visual teaching on sound doctrine, the grace that trains us, and what it means to live godly lives in the present age.
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

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Grace That Does Not Leave You Where It Found You</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Titus 2 reveals that saving grace is also sanctifying grace &mdash; it appears, and it trains. The same Christ who redeemed us from all lawlessness is purifying for himself a people who are zealous for good works. Living between his first appearing and his glorious return, we are not left to ourselves; we are being formed, day by day, into the people we were redeemed to be.
          </p>
        </div>
      </main>
    </div>
  );
}
