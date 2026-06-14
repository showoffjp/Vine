"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "No Longer I But Christ",
  "Justified by Faith Galatians",
  "Paul Confronts Peter",
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
    heading: "Overview of Galatians 2",
    reference: "Galatians 2:1&ndash;21",
    paragraphs: [
      "Galatians 2 is one of the most explosive chapters in Paul&rsquo;s letters &mdash; a chapter that crackles with personal conflict, apostolic authority, and the most radical statement of Christian identity ever penned: &ldquo;I have been crucified with Christ. It is no longer I who live, but Christ who lives in me&rdquo; (2:20). The chapter moves in two great movements: a narrative account of Paul&rsquo;s visit to Jerusalem and his public confrontation with Peter at Antioch, and a theological declaration about the meaning of justification by faith that dismantles every attempt to add human achievement to the work of Christ.",
      "The chapter opens with Paul recounting a visit to Jerusalem fourteen years after his conversion. He went up in response to a revelation, taking Barnabas and Titus with him, and laid before the Jerusalem apostles the gospel he had been preaching among the Gentiles. This was not a submission for approval &mdash; Paul insists his gospel did not come from human tradition &mdash; but a conference to ensure that those running the race were not working at cross-purposes. The Jerusalem pillars &mdash; James, Peter, and John &mdash; added nothing to Paul&rsquo;s gospel and extended to him the right hand of fellowship. The unity of the apostolic mission was confirmed.",
      "But the unity of Antioch was soon broken by a failure of nerve that Paul refused to overlook. When certain people came from James in Jerusalem, Peter began withdrawing from table fellowship with Gentile believers &mdash; eating with them when no one from Jerusalem was present, but separating himself when the circumcision group arrived. This was not merely a matter of social awkwardness; it was a capitulation to a false gospel, a practical denial that Gentile believers in Christ stood fully accepted before God without observing the food laws of Moses. The hypocrisy even spread to Barnabas, whom Paul calls a fellow traveler led astray.",
      "Paul&rsquo;s response was immediate and public: &ldquo;I opposed him to his face, because he stood condemned&rdquo; (2:11). The confrontation at Antioch is a vivid reminder that theological truth is not merely an academic matter &mdash; it has consequences for how people eat together, live together, and relate to one another as the body of Christ. When Peter&rsquo;s actions effectively told Gentile believers they were second-class members of the community unless they adopted Jewish practice, he was not just being socially awkward. He was distorting the truth of the gospel.",
      "The chapter reaches its apex in verses 15&ndash;21, where Paul sets out the theological principle at stake in the confrontation. Justification &mdash; the declaration that a person is righteous before God &mdash; comes through faith in Jesus Christ and not through works of the law. &ldquo;By works of the law no human being will be justified&rdquo; (2:16), Paul declares, echoing Psalm 143:2. And then comes the towering conclusion: if justification comes through the law, then Christ died for no purpose. But Christ did not die for no purpose. Therefore justification does not come through the law. The logic is airtight, the stakes are everything.",
    ],
  },
  {
    id: "No Longer I But Christ",
    heading: "No Longer I Who Live, But Christ",
    reference: "Galatians 2:20",
    paragraphs: [
      "&ldquo;I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me&rdquo; (Galatians 2:20). In these three clauses, Paul compresses the entire reality of Christian existence into words that have shaped Christian theology, devotion, and experience for two millennia. No other verse in Paul&rsquo;s letters captures more completely what has happened to the believer in union with Christ.",
      "The statement &ldquo;I have been crucified with Christ&rdquo; (the Greek uses a perfect tense, indicating a past action with continuing present results) is a claim about union &mdash; not metaphor. Paul is not saying he has decided to crucify his old habits or that he is trying to be less selfish. He is saying that when Christ died on the cross, something definitively happened to Paul. His old self &mdash; the &ldquo;I&rdquo; that was defined by its relationship to sin, to the law, to the powers of this age &mdash; was put to death with Christ. This is the same reality Romans 6 unpacks at length: &ldquo;We know that our old self was crucified with him in order that the body of sin might be brought to nothing&rdquo; (Romans 6:6).",
      "Yet it is not the end of &ldquo;I&rdquo; altogether. Paul immediately says, &ldquo;it is no longer I who live, but Christ who lives in me.&rdquo; There is still a Paul who speaks, thinks, and acts. But that Paul is now defined by a different reality &mdash; the indwelling life of Christ through the Spirit. This is the mystery of Christian identity: the self is both put to death and given new life. The old &ldquo;I&rdquo; that sought justification through law-keeping, that defined itself by ethnic and religious boundary markers, that was enslaved to the fear of death and the power of sin &mdash; that &ldquo;I&rdquo; is dead. The new &ldquo;I&rdquo; is alive in Christ, hidden with Christ in God (Colossians 3:3), and progressively being conformed to his image.",
      "The final clause grounds this entire reality in a specific historical act: &ldquo;the Son of God, who loved me and gave himself for me.&rdquo; Paul moves from the cosmic and theological to the intensely personal. The Son of God &mdash; the one who was with God and was God, through whom all things were made &mdash; loved me. Not humanity in the abstract. Not a category of the elect as a collective. Me, Paul, the former persecutor who dragged believers to prison and consented to their deaths. He loved me and gave himself for me. This is the foundation on which the whole structure of Galatians 2:20 rests: a love so particular and so costly that it demands a total response.",
      "The phrase &ldquo;I live by faith in the Son of God&rdquo; is programmatic for the entire letter to the Galatians. Faith is not merely an initial act of conversion &mdash; it is the ongoing mode of Christian existence. Just as justification is received by faith and not by works of law, so the daily life of the believer is sustained, animated, and directed by the same faith. To live &ldquo;by faith in the Son of God&rdquo; is to live in constant dependence on the one who loved us, in continual orientation toward him rather than toward our own performance, in reliance on his righteousness rather than our own.",
      "The practical implication of Galatians 2:20 is a fundamental reorientation of the self. The person who grasps this verse cannot maintain a Christianity of religious duty and moral self-improvement tacked onto an otherwise self-directed life. To say &ldquo;it is no longer I who live, but Christ who lives in me&rdquo; is to concede the throne of one&rsquo;s life to another. It is not the loss of personhood but its liberation &mdash; the discovery that the self is most fully alive not when asserting its own independence but when living in the flow of Christ&rsquo;s own indwelling life.",
    ],
  },
  {
    id: "Justified by Faith Galatians",
    heading: "Justification by Faith Alone",
    reference: "Galatians 2:15&ndash;21",
    paragraphs: [
      "The doctrine of justification by faith is the theological backbone of the letter to the Galatians and nowhere is it stated more precisely than in Galatians 2:15&ndash;21. Paul sets out his argument from a starting point that he and Peter share: both are Jews by birth and know themselves to be sinners who need a righteousness they cannot manufacture. The question is how that righteousness is obtained. Paul&rsquo;s answer is unambiguous: &ldquo;We know that a person is not justified by works of the law but through faith in Jesus Christ, so we also have believed in Christ Jesus, in order to be justified by faith in Christ and not by works of the law, because by works of the law no one will be justified&rdquo; (2:16).",
      "The word &ldquo;justified&rdquo; (dikaio&ocirc;) in Paul&rsquo;s usage carries the sense of a legal declaration &mdash; the act by which a judge pronounces a verdict of &ldquo;righteous&rdquo; on the accused. In the context of the biblical narrative, the great question hanging over the covenant people of God is: how can sinful human beings stand before the holy God and be declared righteous? The Mosaic law made the requirements of righteousness clear, but it could not supply the power to meet them. No matter how carefully one observed the 613 commandments, the law remained a mirror that showed the face of sin without providing the soap to wash it away.",
      "The phrase &ldquo;works of the law&rdquo; in Galatians has been the subject of intense scholarly debate. Some scholars argue it refers specifically to the &ldquo;boundary markers&rdquo; of Jewish identity &mdash; circumcision, food laws, and Sabbath &mdash; the practices that most visibly distinguished Jews from Gentiles. Others understand it more broadly as any attempt to earn acceptance with God through legal obedience. Both dimensions are likely present. In the immediate context of Galatians 2, the specific issue is Peter&rsquo;s withdrawal from table fellowship because of circumcision-group pressure &mdash; a vivid illustration of how &ldquo;works of the law&rdquo; created barriers between the people of God.",
      "Paul&rsquo;s sharpest argument comes in verse 21: &ldquo;I do not nullify the grace of God, for if righteousness were through the law, then Christ died for no purpose.&rdquo; This is the reductio ad absurdum of all law-based religion. If human beings could achieve a standing of righteousness before God through their own obedience to any law or standard &mdash; whether Mosaic, natural, or self-imposed &mdash; then the death of the Son of God was an unnecessary gesture. But the entire New Testament is a thunderous testimony that Christ&rsquo;s death was the most necessary event in the history of the universe &mdash; the only way sinners could be reconciled to a holy God.",
      "Justification by faith, rightly understood, does not mean that faith is itself the meritorious ground of our acceptance. Faith is not a work that we perform which is then credited as righteousness. Rather, faith is the empty hand that receives the gift &mdash; the instrument by which we are united to Christ, whose righteousness is then reckoned to our account. This is what Reformed theology has called imputation: the righteousness of Christ is not infused into us gradually (though sanctification is real and progressive) but credited to us immediately upon faith, so that we stand before God clothed not in our own record but in his.",
      "The social implications of justification by faith are enormous, and this is precisely what the Peter episode illustrates. If all believers &mdash; Jew and Gentile, slave and free, male and female &mdash; are justified by the same faith and stand equally accepted before God through Christ alone, then no ethnic, social, or religious boundary marker can create a hierarchy within the body of Christ. Peter&rsquo;s withdrawal from table fellowship was not merely a personal lapse in courage; it was a structural denial of the gospel&rsquo;s equalizing power. When Paul confronted him, he was defending not just doctrine but the social reality of the new humanity that the gospel creates.",
    ],
  },
  {
    id: "Paul Confronts Peter",
    heading: "Paul Confronts Peter at Antioch",
    reference: "Galatians 2:11&ndash;14",
    paragraphs: [
      "The confrontation between Paul and Peter at Antioch &mdash; described in Galatians 2:11&ndash;14 &mdash; is one of the most dramatic moments in all of church history. Two apostles, face to face, over a question that goes to the heart of the gospel. The scene has fascinated and troubled readers for two thousand years: here is Peter, the leader of the twelve, the man on whom Christ promised to build his church, called out publicly by Paul for conduct that was &ldquo;not in step with the truth of the gospel&rdquo; (2:14). What are we to make of it?",
      "The situation had developed at Antioch, the church that served as the home base for Paul&rsquo;s missionary work and a model of Jewish-Gentile fellowship. When Peter first arrived, he was eating freely with Gentile believers &mdash; sharing meals that mixed Jewish and Gentile food practices, breaking down the wall of separation that the food laws had maintained for centuries. This was a significant act in the ancient world, where table fellowship was a powerful expression of social and religious solidarity. Peter&rsquo;s willingness to eat with Gentiles was a lived declaration that in Christ the dividing wall had been broken down.",
      "But then &ldquo;certain people came from James&rdquo; (2:12). Who exactly these people were, and whether they came representing James&rsquo;s own views or acting on their own authority claiming his name, is not entirely clear. What is clear is that their arrival triggered a change in Peter&rsquo;s behavior: &ldquo;he drew back and separated himself, fearing the circumcision party.&rdquo; The verb &ldquo;fearing&rdquo; is important &mdash; it was not theological conviction but social fear that drove Peter&rsquo;s retreat. He was afraid of what these Jerusalem observers would think, afraid perhaps of reports going back to Jerusalem, afraid of conflict. Fear, not principle, was in the driver&rsquo;s seat.",
      "The tragedy of Peter&rsquo;s failure was its contagious power. &ldquo;The rest of the Jews acted hypocritically along with him, so that even Barnabas was led astray by their hypocrisy&rdquo; (2:13). Barnabas was Paul&rsquo;s closest colleague, the man who had vouched for Paul when the Jerusalem church was still afraid of him (Acts 9:27), the man who had partnered with him through the rigors of the first missionary journey. That even Barnabas was swept along shows how powerful the social dynamics were &mdash; and how much is at stake when leaders fail to live consistently with the truth they profess.",
      "Paul&rsquo;s response was to confront Peter publicly and directly. &ldquo;But when I saw that their conduct was not in step with the truth of the gospel, I said to Cephas before them all...&rdquo; (2:14). The confrontation was public because the offense was public. Peter had not made a private theological mistake; he had enacted a visible social policy that was teaching the Gentile believers at Antioch a false lesson about their standing before God. A private word would not have addressed a public distortion. Paul understood that truth is not only spoken but enacted &mdash; and that when leaders enact error, it requires a public correction.",
      "The lesson of Antioch is as relevant today as it was in the first century. Leaders of the church are not exempt from the pressures of fear, social approval, and the desire to avoid conflict. The temptation to moderate the gospel&rsquo;s claims in the presence of those who find it uncomfortable &mdash; whether they are religious traditionalists or progressive cultural voices &mdash; is perennial. Paul&rsquo;s willingness to confront Peter &ldquo;to his face&rdquo; is a model not of contentiousness but of courage in service of truth. The health of the gospel community depends on leaders who will not let fear determine their theology.",
    ],
  },
  {
    id: "Application",
    heading: "Living the Truths of Galatians 2",
    reference: "Galatians 2 &mdash; Applied",
    paragraphs: [
      "The truths of Galatians 2 are not historical curiosities about a first-century apostolic dispute. They are living words that address the most fundamental questions of human existence: How do I stand before God? Who am I? What is the basis of my acceptance? How should I relate to other believers who are different from me? The answers Galatians 2 provides are as radical and liberating today as they were when Paul first wrote them.",
      "The first application concerns the foundation of our standing before God. Every human religion and every human heart tends toward the same error that Paul confronts in Galatians 2: the assumption that we must do something &mdash; observe something, achieve something, maintain something &mdash; to secure our acceptance with God. This takes different forms in different cultures. In Paul&rsquo;s day it was circumcision and food laws; in our day it might be church attendance, moral performance, emotional experiences, or social justice activism. The form changes; the underlying error does not. We are not justified by works of any law. We are justified by faith in Christ, who loved us and gave himself for us.",
      "The second application concerns Christian identity. Galatians 2:20 poses a question that every believer must answer not once but daily: who is the &ldquo;I&rdquo; that wakes up in the morning and goes about my life? If the old self has been crucified with Christ and Christ now lives in me, then the self that I bring to each day is not the autonomous, self-defining, self-justifying self that our culture celebrates. It is a self that is already defined &mdash; loved, claimed, and indwelt by the Son of God. This is not the loss of identity but its discovery. We are most fully ourselves when we are most fully in Christ.",
      "The third application concerns the courage to stand for the gospel when it is socially costly. Peter&rsquo;s failure at Antioch was a failure of nerve under social pressure &mdash; and this is a temptation that no believer, regardless of maturity or prominence, is immune to. We live in a social world where our positions are visible, where disapproval has real costs, and where the easier path is always to soften or qualify the gospel&rsquo;s more demanding claims. The example of Paul at Antioch calls us to a different standard &mdash; not quarrelsomeness or combativeness, but a willingness to let the truth of the gospel determine our practice even when it costs us social acceptance.",
      "The fourth application concerns the unity of the church across human divisions. The table fellowship crisis in Antioch was, at its root, a question about whether the gospel creates a new humanity that transcends the deepest social divisions of its day. Paul&rsquo;s answer was an unqualified yes. In Christ there is neither Jew nor Greek, slave nor free, male nor female (3:28) &mdash; not because these distinctions have been erased, but because they are no longer the currency of acceptance before God or of status within the body of Christ. Every wall that human beings build between themselves &mdash; racial, economic, educational, cultural &mdash; has been broken down by the cross. The church that actually lives this out becomes a witness to the world of the power of the gospel.",
      "Finally, Galatians 2 calls us to a life of ongoing faith &mdash; not a one-time transaction but a continuous orientation of trust toward the Son of God who loved us and gave himself for us. The life Paul describes in verse 20 is not a state of achievement reached and then maintained; it is a living relationship, a daily dying to self and rising in Christ, a continual reaching out of the empty hand of faith to receive what only Christ can give. &ldquo;The life I now live in the flesh I live by faith.&rdquo; This is the shape of the Christian life from beginning to end: not law but faith, not self-effort but Christ, not my record but his, not my love for him but his love for me &mdash; crucified, risen, reigning, and living in me.",
    ],
  },
];

const videoItems = [
  { videoId: "vmTiPx0EqOI", title: "Galatians 2 - Crucified with Christ - Bible Study" },
  { videoId: "i4tTEGjJBIQ", title: "I Have Been Crucified with Christ - Galatians 2:20 Explained" },
  { videoId: "IkB4FzVAFEs", title: "Paul Confronts Peter at Antioch - Galatians 2 Study" },
  { videoId: "5RFNEaOs5G0", title: "Justification by Faith Alone - What Paul Teaches in Galatians" },
];

export default function Galatians2GuidePage() {
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
            Galatians 2 &mdash; Crucified with Christ
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul&rsquo;s declaration that he has been crucified with Christ, his confrontation of Peter at Antioch, and the bedrock truth that justification comes through faith in Jesus Christ alone &mdash; not by works of any law.
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

        <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
            Deepen your study of Galatians 2 through visual teaching on justification by faith, the meaning of being crucified with Christ, the confrontation at Antioch, and the life of faith in the Son of God who loved us and gave himself for us.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>It Is No Longer I Who Live</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Galatians 2 confronts us with the most radical reorientation the gospel demands: the death of the self-justifying &ldquo;I&rdquo; and its replacement by the indwelling life of Christ. We are not justified by anything we do, observe, or achieve. We are justified by faith in the Son of God who loved us and gave himself for us &mdash; and that faith, once kindled, becomes the unceasing mode of our existence until the day we see him face to face.
          </p>
        </div>
      </main>
    </div>
  );
}
