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
  "Joy in Chains",
  "The Mind of Christ",
  "Knowing Christ",
  "Pressing On",
  "The Secret of Contentment",
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
    id: "Joy in Chains",
    heading: "Joy in Chains",
    reference: "Philippians 1",
    paragraphs: [
      "Philippians is Paul&rsquo;s most affectionate and joyful letter, written from prison &mdash; most likely Rome &mdash; to a church he loved deeply. The Philippian congregation was the first he founded in Europe, born from the dramatic events of Acts 16: the conversion of Lydia, the deliverance of a slave girl, and the midnight earthquake that opened the jailer&rsquo;s heart along with his prison doors. From the very beginning, this was a church marked by partnership in the gospel.",
      "The dominant theme is joy. The words &ldquo;joy&rdquo; and &ldquo;rejoice&rdquo; appear some sixteen times across the four short chapters &mdash; a remarkable note given that Paul writes in chains, with his future uncertain and his very life at stake. This is no shallow optimism that depends on circumstances; it is a deep, settled gladness rooted in Christ that even imprisonment cannot extinguish. Paul&rsquo;s joy in suffering is itself part of his message.",
      "He opens with warm thanksgiving for the Philippians&rsquo; &ldquo;partnership in the gospel from the first day until now&rdquo; (1:5). They had shared in his ministry through prayer, support, and steadfast fellowship, and Paul holds them in his heart. He is &ldquo;sure of this, that he who began a good work in you will bring it to completion at the day of Jesus Christ&rdquo; (1:6) &mdash; a promise that the God who saves also finishes what he starts.",
      "Paul then reframes his imprisonment in a striking way. Rather than lamenting his confinement, he reports that it has actually &ldquo;served to advance the gospel&rdquo; (1:12). His chains have become known throughout the imperial guard, and his courage has emboldened other believers to preach more boldly. What looked like a setback for the mission has become, in God&rsquo;s providence, an instrument of its spread. Paul refuses to measure his situation by appearances.",
      "His personal posture in the face of possible death is stunning: &ldquo;For to me to live is Christ, and to die is gain&rdquo; (1:21). If he lives, it means fruitful labor; if he dies, it means being with Christ, which is &ldquo;far better.&rdquo; Death holds no terror for Paul, because Christ is his life on both sides of the grave. His whole existence is so bound up with Christ that neither life nor death can be a loss.",
      "Torn between the longing to depart and be with Christ and the need to remain for the Philippians&rsquo; sake, Paul chooses to count their progress more important than his own relief. &ldquo;To remain in the flesh is more necessary on your account&rdquo; (1:24). His desire is genuine, but his love bends it toward service. This self-forgetful concern for others&rsquo; growth in faith is the very pattern of the gospel he proclaims.",
      "Paul closes the chapter with a call to steadfastness: let the Philippians live worthy of the gospel, standing firm in one spirit, striving side by side, and unafraid of their opponents. He even reminds them that it has been &ldquo;granted&rdquo; to them not only to believe in Christ but also to suffer for his sake (1:29). Suffering, rightly understood, is a gift that unites the believer to Christ &mdash; and joy can flourish even in chains.",
    ],
  },
  {
    id: "The Mind of Christ",
    heading: "The Mind of Christ",
    reference: "Philippians 2",
    paragraphs: [
      "The heart of the letter is the great Christ hymn of 2:5&ndash;11, one of the earliest and most profound Christological passages in the New Testament. Many scholars believe Paul is quoting an existing hymn of the early church, which means we are hearing how the first generation of believers worshiped and confessed Christ. Whatever its origin, Paul presses it into service for an intensely practical purpose: the cultivation of humility and unity.",
      "The context is a plea against selfish ambition and conceit. &ldquo;Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves&rdquo; (2:3). The Philippians, like every church, were tempted by rivalry and self-promotion. Paul&rsquo;s remedy is not a technique but a person: he points them to the mind of Christ. &ldquo;Have this mind among yourselves, which is yours in Christ Jesus&rdquo; (2:5).",
      "Then comes the great downward movement of the incarnation. Though Christ was &ldquo;in the form of God,&rdquo; he &ldquo;did not count equality with God a thing to be grasped, but emptied himself, by taking the form of a servant, being born in the likeness of men&rdquo; (2:6&ndash;7). The eternal Son did not cling to his rightful glory but freely set it aside, descending from the highest place to the lowest, taking the very nature of a slave.",
      "The descent goes lower still: &ldquo;he humbled himself by becoming obedient to the point of death, even death on a cross&rdquo; (2:8). Crucifixion was the most shameful and degrading death the ancient world knew, reserved for slaves and criminals. The Lord of glory traveled the entire distance from heaven&rsquo;s throne to a criminal&rsquo;s cross. This is the staggering humility Paul holds up as the pattern for every believer.",
      "Then the hymn turns upward. &ldquo;Therefore God has highly exalted him and bestowed on him the name that is above every name, so that at the name of Jesus every knee should bow, in heaven and on earth and under the earth, and every tongue confess that Jesus Christ is Lord, to the glory of God the Father&rdquo; (2:9&ndash;11). The one who humbled himself is exalted by God to universal lordship; the path of descent becomes the path to glory.",
      "The pattern of Christ &mdash; humbling self, then exalted by God &mdash; is the pattern for the believer. We are not called to grasp at status and recognition but to pour ourselves out in service, trusting God to lift up the humble in his own time. This is how a church guards its unity: not by each member defending his rights, but by each adopting the self-emptying mind of Christ toward the others.",
      "Paul then applies the principle concretely, urging the Philippians to &ldquo;work out your own salvation with fear and trembling, for it is God who works in you, both to will and to work for his good pleasure&rdquo; (2:12&ndash;13). He commends two living examples of the Christ-like mind: Timothy, who genuinely cares for their welfare, and Epaphroditus, who risked his life for the work of Christ. The hymn is not abstract theology; it is a way of life made visible in real people.",
    ],
  },
  {
    id: "Knowing Christ",
    heading: "Knowing Christ",
    reference: "Philippians 3",
    paragraphs: [
      "In chapter 3 Paul turns sharply to warn against those who put confidence in the flesh &mdash; the Judaizers who insisted that Gentile believers must be circumcised and keep the law to be truly accepted by God. Paul calls them &ldquo;dogs&rdquo; and &ldquo;evildoers&rdquo; and insists that the true circumcision are those &ldquo;who worship by the Spirit of God and glory in Christ Jesus and put no confidence in the flesh&rdquo; (3:3). Religious credentials count for nothing before God.",
      "Paul then plays his opponents at their own game. If anyone could boast in the flesh, it is he: &ldquo;circumcised on the eighth day, of the people of Israel, of the tribe of Benjamin, a Hebrew of Hebrews; as to the law, a Pharisee&hellip; as to righteousness under the law, blameless&rdquo; (3:5&ndash;6). By every standard of his heritage and zeal, Paul stood at the summit. His r&eacute;sum&eacute; of religious achievement was second to none.",
      "Yet all of it he now reckons as nothing. &ldquo;But whatever gain I had, I counted as loss for the sake of Christ. Indeed, I count everything as loss because of the surpassing worth of knowing Christ Jesus my Lord. For his sake I have suffered the loss of all things and count them as rubbish, in order that I may gain Christ&rdquo; (3:7&ndash;8). The word translated &ldquo;rubbish&rdquo; is deliberately strong &mdash; refuse, dung &mdash; underscoring how worthless his former boasts now appear beside Christ.",
      "At the center of this passage is Paul&rsquo;s single, consuming ambition: &ldquo;that I may know him and the power of his resurrection, and may share his sufferings, becoming like him in his death&rdquo; (3:10). To know Christ is not merely to know about him but to be united with him in both his power and his suffering, conformed to his death in hope of sharing his resurrection. This is the goal that relativizes every other gain.",
      "Crucially, Paul defines the righteousness he seeks not as &ldquo;a righteousness of my own that comes from the law, but that which comes through faith in Christ, the righteousness from God that depends on faith&rdquo; (3:9). Here is one of the clearest statements of the gospel of grace in all of Paul&rsquo;s writings: acceptance with God is received, not achieved &mdash; a gift grasped by faith, never a wage earned by performance.",
      "The contrast Paul draws could not be sharper. On one side stands the whole apparatus of human religious effort: lineage, law-keeping, zeal, and moral attainment. On the other stands simple trust in the crucified and risen Christ. Everything Paul once relied on to commend himself to God he has thrown away as garbage, that he might be found in Christ alone.",
      "This vision reorders every value. To know Christ is the one treasure worth losing all else to gain, and the believer who has glimpsed his surpassing worth holds everything else loosely. Knowing Christ is not a doctrine to be filed away but a relationship to be pursued with the whole heart, until the day when faith gives way to sight.",
    ],
  },
  {
    id: "Pressing On",
    heading: "Pressing On",
    reference: "Philippians 3:12&ndash;21",
    paragraphs: [
      "Having spoken of his consuming desire to know Christ, Paul guards against any hint of complacency. &ldquo;Not that I have already obtained this or am already perfect, but I press on to make it my own, because Christ Jesus has made me his own&rdquo; (3:12). Even the great apostle does not regard himself as having arrived. The Christian life is not a possession to be congratulated on but a goal to be pursued, and the pursuit is powered by the prior grasp of Christ&rsquo;s love.",
      "Paul reaches for the image of an athlete straining toward the finish line. &ldquo;Forgetting what lies behind and straining forward to what lies ahead, I press on toward the goal for the prize of the upward call of God in Christ Jesus&rdquo; (3:13&ndash;14). The runner does not glance back at the track already covered; his whole body leans forward toward the tape. So the believer refuses to rest in past attainments or be paralyzed by past failures, pressing on with single-minded focus.",
      "This forward-leaning posture defines the Christian life as Paul understands it. It is not static, a matter of having reached a settled plateau, but dynamic &mdash; a continual movement toward Christ and the prize of his calling. &ldquo;Let those of us who are mature think this way&rdquo; (3:15), he adds, suggesting that true maturity is precisely the humility that knows it has not yet arrived and keeps on running.",
      "Paul then sets before them two ways of living, embodied in two kinds of people. With tears he warns of those who &ldquo;walk as enemies of the cross of Christ,&rdquo; whose &ldquo;god is their belly,&rdquo; who &ldquo;glory in their shame, with minds set on earthly things&rdquo; (3:18&ndash;19). Their appetites and ambitions reach no higher than this world, and their end is destruction. Their lives are oriented downward, toward the perishing things of the present age.",
      "Against this stands the believer&rsquo;s true allegiance: &ldquo;But our citizenship is in heaven, and from it we await a Savior, the Lord Jesus Christ&rdquo; (3:20). The Philippians lived in a proud Roman colony and prized their imperial citizenship; Paul lifts their eyes to a higher one. The believer is a citizen of a coming kingdom, living now as a colony of heaven on earth, awaiting the King who will appear.",
      "And the hope is concrete and bodily. The returning Christ &ldquo;will transform our lowly body to be like his glorious body, by the power that enables him even to subject all things to himself&rdquo; (3:21). The same redemption that has claimed the soul will one day reach the body, conforming it to the resurrection glory of Christ. The race Paul runs ends not in mere survival but in transformation.",
      "So the believer lives now as a citizen of a coming kingdom, pressing on toward a sure and glorious end. The forward strain of the Christian life is not anxious striving but hope-filled pursuit, sustained by the certainty that the One who calls us upward will himself bring us home and make us like himself.",
    ],
  },
  {
    id: "The Secret of Contentment",
    heading: "The Secret of Contentment",
    reference: "Philippians 4",
    paragraphs: [
      "The final chapter is dense with treasured promises, the kind of verses believers carry with them through life&rsquo;s hardest seasons. Paul has just urged two members, Euodia and Syntyche, to be reconciled, and now he gathers the whole church into a sustained call to joy, peace, and trust. The themes of the letter converge here in a stream of pastoral encouragement.",
      "It begins with a command repeated for emphasis: &ldquo;Rejoice in the Lord always; again I will say, rejoice&rdquo; (4:4). Joy is not left to spontaneous feeling but is commanded, because its ground is not changing circumstances but the unchanging Lord. From a prison cell Paul calls a church to constant gladness &mdash; and the &ldquo;always&rdquo; means precisely that no situation is exempt.",
      "Then comes the great antidote to anxiety: &ldquo;Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus&rdquo; (4:6&ndash;7). Worry is to be replaced by prayer; and the result is a peace that defies explanation, standing guard like a sentinel over the believer&rsquo;s heart.",
      "Paul also directs their thinking. &ldquo;Whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable&hellip; think about these things&rdquo; (4:8). The peace of God is accompanied by the discipline of the mind: a deliberate turning of attention toward what is good and worthy. What we dwell on shapes what we become, and Paul calls the Philippians to fill their thoughts with the excellent and the praiseworthy.",
      "Then he shares the secret he has learned through long experience: &ldquo;I have learned in whatever situation I am to be content. I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger, abundance and need&rdquo; (4:11&ndash;12). Contentment, Paul insists, was not his natural temperament but a learned discipline, acquired in the school of both want and plenty.",
      "The source of that contentment is named in one of the most quoted verses in Scripture: &ldquo;I can do all things through him who strengthens me&rdquo; (4:13). Read in context, this is not a promise of unlimited success but the secret of contentment in every condition: whether full or hungry, rich or poor, Paul is sustained by Christ&rsquo;s strength. His sufficiency is not in himself or his circumstances but in his Lord.",
      "The letter closes with warm gratitude for the Philippians&rsquo; financial gift, which Paul receives as &ldquo;a fragrant offering, a sacrifice acceptable and pleasing to God&rdquo; (4:18). And he leaves them with a final, sweeping promise: &ldquo;My God will supply every need of yours according to his riches in glory in Christ Jesus&rdquo; (4:19). The God who began a good work in them will also provide for them &mdash; and so the epistle of joy ends, fittingly, in confidence and praise.",
    ],
  },
];

const videoItems = [
  { videoId: "8gjUiwS0sGc", title: "BibleProject — Philippians Overview" },
  { videoId: "Mkgk1Oh4hUM", title: "The Christ Hymn — Philippians 2 Explained" },
  { videoId: "uPGgn8jRdR8", title: "Rejoice in the Lord Always — Philippians 4" },
];

export default function ChristianBookOfPhilippiansGuidePage() {
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
            The Book of Philippians
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul&rsquo;s epistle of joy, written from prison &mdash; partnership in the gospel, the great Christ hymn and the mind of humility, the surpassing worth of knowing Christ, pressing on toward the goal, and the secret of contentment in every circumstance.
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
              Deepen your study of Philippians through visual teaching on the structure of the letter, the great Christ hymn of Philippians 2, and the call to rejoice in the Lord always.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Rejoice in the Lord Always</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Philippians proves that joy is not the absence of hardship but the presence of Christ. Written from a prison cell, it calls believers to the humble mind of Christ, the surpassing worth of knowing him, the forward strain of pressing on, and the learned secret of contentment &mdash; a peace that surpasses all understanding and guards the heart in every circumstance.
          </p>
        </div>
      </main>
    </div>
  );
}
