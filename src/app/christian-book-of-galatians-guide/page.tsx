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
  "The Crisis in Galatia",
  "Paul&rsquo;s Defense of the Gospel",
  "Justified by Faith, Not Works",
  "Freedom in Christ",
  "The Fruit of the Spirit",
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
    id: "The Crisis in Galatia",
    heading: "The Crisis in Galatia",
    reference: "Galatians 1",
    paragraphs: [
      "Galatians is Paul&rsquo;s most passionate and polemical letter, written with white-hot urgency to churches he himself had founded. Word has reached him that these young congregations are being led astray by teachers commonly called &ldquo;Judaizers&rdquo; &mdash; those insisting that Gentile Christians must be circumcised and keep the Mosaic law in order to be fully saved. For Paul this is not a secondary quarrel about customs; it is an assault on the gospel itself.",
      "The intensity is evident from the very first lines. In every other letter Paul opens with a warm thanksgiving for his readers, but here he omits it entirely and plunges straight into rebuke: &ldquo;I am astonished that you are so quickly deserting him who called you in the grace of Christ and are turning to a different gospel&rdquo; (1:6). There is no time for pleasantries when the heart of the faith is at stake.",
      "Paul then does something startling: he pronounces a curse. &ldquo;Even if we or an angel from heaven should preach to you a gospel contrary to the one we preached to you, let him be accursed&rdquo; (1:8). He repeats the anathema in the next verse for emphasis. No human authority, no angelic vision, no apostolic reputation can stand if it contradicts the gospel of grace. The truth of the message outranks every messenger.",
      "Why such severity? Because for Paul the issue is the very definition of the gospel. To add the works of the law to faith as a requirement for salvation is not to improve the gospel but to abolish it. If acceptance with God depends even partly on human performance, then grace is no longer grace and the cross of Christ is emptied of its meaning. A gospel of &ldquo;faith plus law&rdquo; is, in Paul&rsquo;s eyes, a different gospel altogether &mdash; which is to say, no gospel at all.",
      "This is why Galatians has been called the charter of Christian freedom. It draws the sharpest possible line between salvation as God&rsquo;s free gift, received by faith, and salvation as something earned by religious effort. The whole letter is an argument that the believer stands before God on the basis of what Christ has done, not on the basis of what the believer achieves.",
      "It is no accident that Galatians became a seedbed of the Reformation. Martin Luther found in it the clearest biblical statement of justification by faith alone, the doctrine on which he believed the church stands or falls. He lectured on it repeatedly and spoke of it with deep affection, calling Galatians his &ldquo;Katharina von Bora&rdquo; &mdash; the epistle to which, like his wife, he was wedded. The crisis in first-century Galatia turns out to be a perennial crisis of the human heart, ever inclined to trust its own works rather than the grace of God.",
    ],
  },
  {
    id: "Paul&rsquo;s Defense of the Gospel",
    heading: "Paul&rsquo;s Defense of the Gospel",
    reference: "Galatians 1&ndash;2",
    paragraphs: [
      "Because the Judaizers could not easily refute Paul&rsquo;s message, they attacked his credentials. They suggested that Paul was a second-hand apostle, dependent on the Jerusalem leaders, who had watered down the true requirements of the faith to make it easier for Gentiles. To defend the gospel, then, Paul must first defend his own apostolic authority &mdash; not out of pride, but because the integrity of his message was bound up with the integrity of his calling.",
      "His first claim is foundational: &ldquo;the gospel that was preached by me is not man&rsquo;s gospel. For I did not receive it from any man, nor was I taught it, but I received it through a revelation of Jesus Christ&rdquo; (1:11&ndash;12). Paul&rsquo;s message came directly from the risen Lord who confronted him on the Damascus road. It was not a tradition handed down to him to be edited at will, but a revelation entrusted to him to be faithfully proclaimed.",
      "To prove this, Paul recounts his own history. He reminds the Galatians of his former life as a zealous persecutor of the church, advancing in Judaism beyond his peers. After his conversion he did not rush to Jerusalem to be authorized by the apostles; he went away to Arabia, and only years later met briefly with Peter and James. The point is that his gospel was not borrowed from Jerusalem but received independently and then recognized by the other apostles as the same gospel.",
      "The most dramatic episode in this defense is the confrontation at Antioch (2:11&ndash;14). Peter, the chief of the apostles, had been freely eating with Gentile believers &mdash; a powerful sign that Jew and Gentile were one in Christ. But when certain men came from the circumcision party, Peter drew back and separated himself, out of fear. His example pulled others, even Barnabas, into the same hypocrisy.",
      "Paul&rsquo;s response was public and unflinching: he &ldquo;opposed him to his face, because he stood condemned&rdquo; (2:11). He saw that Peter&rsquo;s withdrawal, however motivated by social pressure, implicitly betrayed the gospel. If sharing the table with Gentiles required them to live like Jews, then in practice justification was being made to depend on the law rather than on faith in Christ. The behavior preached a false gospel even where the words did not.",
      "That Paul would rebuke Peter himself, before the whole church, shows how much was at stake. This was not a clash of personalities but a defense of the truth that all believers, Jew and Gentile alike, are accepted by God on exactly the same terms. The defense of his apostleship in these chapters is finally a defense of the equality of all Christians before the grace of God &mdash; and a refusal to let even the most revered leader compromise it.",
    ],
  },
  {
    id: "Justified by Faith, Not Works",
    heading: "Justified by Faith, Not Works",
    reference: "Galatians 2&ndash;3",
    paragraphs: [
      "At the theological heart of Galatians lies one of the clearest statements of justification by faith in all of Scripture: &ldquo;we know that a person is not justified by works of the law but through faith in Jesus Christ&hellip; because by works of the law no one will be justified&rdquo; (2:16). To be &ldquo;justified&rdquo; is to be declared righteous, accepted before God &mdash; and Paul insists this verdict comes through faith in Christ, never through human achievement.",
      "Paul roots this truth in his own experience of union with Christ: &ldquo;I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me&rdquo; (2:20). Justification is not a cold legal transaction; it flows from a living union with the crucified and risen Lord. The believer&rsquo;s old self has died with Christ, and a new life has begun.",
      "To prove that this was always God&rsquo;s way, Paul turns to Abraham (ch. 3), the father of the Jewish people. Abraham &ldquo;believed God, and it was counted to him as righteousness&rdquo; &mdash; and crucially, this happened before the law was given through Moses and before circumcision. Abraham was justified by faith. Therefore the true children of Abraham are not those who possess the law, but those who share Abraham&rsquo;s faith. The promise came by faith, and the law that came later cannot annul it.",
      "If the law cannot justify, what was its purpose? Paul answers that the law was never meant to save. It was given to expose sin and to function as a &ldquo;guardian&rdquo; &mdash; the Greek paidagogos, the household servant who supervised and disciplined a child until he came of age. The law had a real but temporary role: to guard and instruct God&rsquo;s people &ldquo;until Christ came, in order that we might be justified by faith&rdquo; (3:24). With Christ&rsquo;s arrival, the era of the guardian is over.",
      "Paul also points to the curse of the law: all who rely on the law are under its curse, because no one keeps it perfectly. But &ldquo;Christ redeemed us from the curse of the law by becoming a curse for us&rdquo; (3:13), bearing in our place the judgment the law pronounced. The blessing promised to Abraham &mdash; and the gift of the Spirit &mdash; thus comes to all peoples through Christ, received not by law-keeping but by faith.",
      "The result is a radical equality. &ldquo;There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus&rdquo; (3:28). In Christ the old divisions that ranked and separated people lose their power to determine standing before God. All who belong to Christ by faith are, together, Abraham&rsquo;s offspring and heirs according to the promise. Justification by faith is not only the door into the gospel; it is the foundation of a new and reconciled humanity.",
    ],
  },
  {
    id: "Freedom in Christ",
    heading: "Freedom in Christ",
    reference: "Galatians 4&ndash;5",
    paragraphs: [
      "Having established that believers are justified by faith and not by law, Paul presses the Galatians not to slide back into bondage. He cannot understand why those who have come to know God &mdash; or rather, to be known by God &mdash; would want to return to the &ldquo;weak and worthless&rdquo; elementary principles, submitting themselves again to a system of religious obligation that could never set them free. To go back to the law is, for Paul, to choose slavery over the freedom Christ has won.",
      "He drives the point home with an allegory drawn from the story of Abraham&rsquo;s two sons (ch. 4). Hagar the slave woman and Sarah the free woman represent two covenants: the one bearing children for slavery, corresponding to the present Jerusalem under the law; the other free, corresponding to the heavenly Jerusalem and the children of promise. Believers, Paul says, are children not of the slave but of the free woman &mdash; born by promise, heirs of liberty, not of bondage.",
      "Then comes the ringing declaration that gives the letter its banner: &ldquo;For freedom Christ has set us free; stand firm therefore, and do not submit again to a yoke of slavery&rdquo; (5:1). Freedom is not merely one benefit of the gospel among many; it is the very purpose for which Christ liberated his people. And it is something to be guarded &mdash; the Galatians must stand firm, refusing to let anyone bind them once more under the law as a means of justification.",
      "But Paul is careful to define this freedom rightly, for he knows it can be twisted. Christian liberty is not a license to do as one pleases. &ldquo;You were called to freedom, brothers. Only do not use your freedom as an opportunity for the flesh, but through love serve one another&rdquo; (5:13). The same gospel that frees us from the law as a way of earning salvation also frees us for love &mdash; freedom is given not for self-indulgence but for self-giving service.",
      "Remarkably, Paul says the whole law finds its fulfillment in a single command: &ldquo;You shall love your neighbor as yourself&rdquo; (5:14). The law could not justify, but it pointed all along toward love, and what the law demanded externally the Spirit now produces from within. The believer freed from the law does not become lawless; rather, in loving the neighbor, the believer fulfills everything the law was reaching toward.",
      "Christian liberty, then, has two sides. It is freedom from the law as a means of justification &mdash; no longer must we earn God&rsquo;s acceptance by religious performance. And it is freedom for love as the natural expression of faith &mdash; now we serve one another, not to be saved, but because we are saved. To return to law-keeping would forfeit the first; to abuse grace would betray the second. The path of the gospel runs between legalism and license: liberty governed by love.",
    ],
  },
  {
    id: "The Fruit of the Spirit",
    heading: "The Fruit of the Spirit",
    reference: "Galatians 5&ndash;6",
    paragraphs: [
      "In the closing section of the letter Paul contrasts two ways of living: according to the flesh or according to the Spirit. The &ldquo;flesh&rdquo; here is not merely the body but the whole self in its rebellion against God, the impulse to live for self apart from his grace. The Christian life, freed from the law, is not lived in a moral vacuum but is now to be lived under the leading and power of the Holy Spirit.",
      "Paul first lists the &ldquo;works of the flesh&rdquo; (5:19&ndash;21) &mdash; a sobering catalogue that includes sexual immorality, idolatry, sorcery, enmity, strife, jealousy, fits of anger, rivalries, dissensions, divisions, and drunkenness. These are the marks of a life ruled by the self apart from the Spirit, and Paul warns plainly that those who make a practice of such things will not inherit the kingdom of God. Freedom from the law never means freedom to sin.",
      "Against this stands &ldquo;the fruit of the Spirit&rdquo; (5:22&ndash;23): love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control. Here is the character that the Spirit grows in the believer &mdash; not a list of rules to be kept, but a portrait of the life Christ produces from within. Tellingly, against such things, Paul adds, there is no law: the Spirit-filled life more than satisfies everything the law ever aimed at.",
      "It is worth noting that Paul speaks of &ldquo;fruit&rdquo; in the singular, not &ldquo;fruits.&rdquo; These nine qualities are not separate achievements to be earned one by one, but a single, organic character &mdash; the integrated likeness of Christ &mdash; that the Spirit cultivates as a whole. Just as a healthy tree naturally bears its fruit, so the believer who walks by the Spirit naturally grows in this Christlike character. It is produced, not manufactured; received, not earned.",
      "This brings the whole argument of Galatians to its practical resolution. The Christian life is neither legalism &mdash; the attempt to be justified by works &mdash; nor license &mdash; freedom without love. It is life in the Spirit, who alone can produce in the believer the character of Christ. The same Spirit who unites us to Christ and assures us we are children of God also transforms us from within, so that the righteousness the law demanded becomes the fruit the Spirit grows.",
      "Paul closes (ch. 6) with down-to-earth exhortations that flesh out this Spirit-led life: &ldquo;Bear one another&rsquo;s burdens, and so fulfill the law of Christ.&rdquo; Restore the fallen gently. Do not grow weary in doing good, for in due season we will reap if we do not give up. And he returns one final time to the cross, glorying in nothing else: &ldquo;far be it from me to boast except in the cross of our Lord Jesus Christ, by which the world has been crucified to me, and I to the world&rdquo; (6:14). The letter that began with the gospel of grace ends, fittingly, at the foot of the cross.",
    ],
  },
];

const videoItems = [
  { videoId: "vmx4UjRFp0M", title: "BibleProject — Book of Galatians Overview" },
  { videoId: "JU2sjkVx0lA", title: "Justification by Faith in Galatians" },
  { videoId: "qe0Bb9j5xQc", title: "The Fruit of the Spirit — Galatians 5 Explained" },
];

export default function ChristianBookOfGalatiansGuidePage() {
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
            The Book of Galatians
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul&rsquo;s charter of Christian liberty &mdash; the gospel of justification by faith, his defense of the true gospel against the Judaizers, the conflict with Peter at Antioch, freedom in Christ, and the fruit of the Spirit.
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
              Deepen your study of Galatians through visual teaching on the structure of the letter, the doctrine of justification by faith, and the fruit of the Spirit.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Stand Firm in Freedom</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Galatians remains the great defense of grace against every attempt to earn God&rsquo;s acceptance by human effort. Its call still rings out: stand firm in the freedom Christ has won, refuse the yoke of slavery, and let the Spirit bear in you the fruit of a life made new &mdash; faith working through love.
          </p>
        </div>
      </main>
    </div>
  );
}
