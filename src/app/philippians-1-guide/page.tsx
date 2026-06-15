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
  "To Live Is Christ",
  "Partnership in the Gospel",
  "Joy in Suffering",
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
    heading: "Overview of Philippians 1",
    reference: "Philippians 1:1&ndash;30",
    paragraphs: [
      "Philippians is one of the most warm and personally intimate letters in the entire New Testament. Paul writes it from prison &mdash; most likely his Roman imprisonment &mdash; to a congregation he founded on his second missionary journey, the first church he planted on European soil. The city of Philippi was a Roman colony in Macedonia, and its church was made up of people Paul loved deeply. He calls them his &ldquo;joy and crown&rdquo; elsewhere in the letter, and that affection is present from the very first line of chapter one.",
      "The letter opens with Paul and Timothy identifying themselves simply as &ldquo;servants of Christ Jesus&rdquo; &mdash; a striking contrast with many of Paul&rsquo;s other letters in which he opens by asserting his apostolic authority. With the Philippians he needs no such defense of his credentials; the relationship is built on years of trust, mutual affection, and shared suffering for the gospel. He writes not to correct a doctrinal crisis or rebuke a moral failing, but primarily to thank them for their partnership and to encourage them toward greater unity and joy.",
      "Chapter one covers three major movements. First, Paul&rsquo;s thanksgiving and prayer for the Philippians (vv. 1&ndash;11): he gives thanks for their koinonia &mdash; their participation, fellowship, partnership &mdash; in the gospel from the first day until now, and he prays that their love will abound more and more in knowledge and discernment. Second, the advance of the gospel through Paul&rsquo;s imprisonment (vv. 12&ndash;26): what looks like catastrophe &mdash; the apostle in chains &mdash; has in fact served to advance the gospel; the guards have heard the message, and other believers have grown bold. Third, the call to stand firm together in the face of suffering and opposition (vv. 27&ndash;30).",
      "The theological heartbeat of the chapter is the declaration of verse 21: &ldquo;For to me to live is Christ, and to die is gain.&rdquo; This verse encapsulates a posture toward life that is only possible when Jesus Christ is genuinely the source, center, and goal of all one&rsquo;s existence. For Paul, living means the ongoing work of Christ through him; dying means finally arriving in the presence of Christ without the labors and sufferings of this age. Both options are framed as gain &mdash; which is itself a remarkable reframing of the human situation.",
      "Philippians 1 also introduces several of Paul&rsquo;s characteristic themes: the certainty that God completes what He begins (v. 6), the centrality of prayer as partnership in the gospel (vv. 3&ndash;4, 9&ndash;11), the willingness to rejoice even when the circumstances look bleak (vv. 18&ndash;19), and the call to live as citizens of heaven in a Roman colony (v. 27). These themes will recur and deepen throughout the rest of the letter, but they are all present in seed form in this opening chapter.",
      "It is worth noting the tone Paul strikes from the very beginning: grace and peace from God our Father and the Lord Jesus Christ. This is not a polite formality. &ldquo;Grace&rdquo; and &ldquo;peace&rdquo; were the two great realities of the gospel &mdash; the unmerited favor of God and the reconciliation it produces. Every word of the letter flows from these two foundations. The Philippians had experienced grace and peace together with Paul; now he writes to remind them of what they already have in Christ, and to call them to live out of that abundance rather than from fear, rivalry, or self-interest.",
    ],
  },
  {
    id: "To Live Is Christ",
    heading: "To Live Is Christ, To Die Is Gain",
    reference: "Philippians 1:19&ndash;26",
    paragraphs: [
      "The great declaration of Philippians 1:21 &mdash; &ldquo;For to me to live is Christ, and to die is gain&rdquo; &mdash; is not a casual remark but the distilled confession of a man who has genuinely reckoned with death and found it robbed of its terror. Paul writes these words while in prison, facing a trial whose outcome he genuinely does not know. The possibility of execution is not hypothetical; it is real and imminent. And yet his framing of the situation is one of astonishing freedom.",
      "The logic of the passage runs from verse 19 through verse 26. Paul begins with his confidence that he will be delivered through the prayers of the Philippians and the supply of the Spirit of Jesus Christ (v. 19). He is not, in other words, simply whistling in the dark; he expects God to be active in his situation. But his eagerness is not merely to be released &mdash; it is that &ldquo;Christ will be honored in my body, whether by life or by death&rdquo; (v. 20). The goal is not Paul&rsquo;s comfort or even his survival; it is the magnification of Christ.",
      "This is the key to understanding the famous verse 21. When Paul says &ldquo;to live is Christ,&rdquo; he means that his continued earthly existence has no content apart from Christ &mdash; its purpose is Christocentric, its source is Christ, its daily experience is shaped by union with Christ. When he says &ldquo;to die is gain,&rdquo; he means that death would bring him into the immediate, unmediated presence of the one in whom he already lives. Death is not loss for Paul because it does not take him away from Christ &mdash; it takes him deeper into Christ.",
      "Paul then introduces a tension that he calls being &ldquo;hard pressed between two&rdquo; (v. 23). On one hand he has the desire to &ldquo;depart and be with Christ, for that is far better.&rdquo; The word translated &ldquo;depart&rdquo; (analusai) was used of a ship weighing anchor &mdash; leaving harbor for the open sea. Death for Paul would be the anchor lifting, the voyage beginning, the harbor of this earthly life giving way to the arrival he has been sailing toward. But on the other hand, to remain in the flesh is more necessary for the sake of the Philippians &mdash; for their progress and joy in the faith.",
      "What is striking here is that Paul does not resolve this tension by minimizing death or by romanticizing suffering. He is honest that dying would be better for him personally. But he subordinates his personal preference to the needs of others and to the calling God has given him. This is the very logic of Christian love: choosing what is fruitful for others even when something else might be preferable for oneself. It anticipates the great call of Philippians 2:4 &mdash; &ldquo;Let each of you look not only to his own interests, but also to the interests of others.&rdquo;",
      "Paul&rsquo;s confidence that he will remain and continue with the Philippians (v. 25) is not presumption but faith operating within the framework of his apostolic calling. He can see that there is still work to be done, still people to be built up, still gospel to be proclaimed. The fruitful labor he speaks of is not a burden he reluctantly bears; it is an expression of Christ living and working through him. Every day of continued earthly life is another day of Christ being made known through a human vessel.",
      "The pastoral application of this passage is profound. In a culture that treats death as the ultimate enemy and survival as the ultimate good, Paul offers a radically different frame: death has been defanged for those who are in Christ. It is not something to be feared or avoided at any cost, but something to be lived past &mdash; not in the sense of pretending it does not come, but in the sense of knowing that the one who matters most is on the other side of it, and that the journey there is already under way. &ldquo;To live is Christ, to die is gain&rdquo; is not a pep talk but a theology of death.",
    ],
  },
  {
    id: "Partnership in the Gospel",
    heading: "Partnership in the Gospel",
    reference: "Philippians 1:1&ndash;18",
    paragraphs: [
      "The word that structures the first eleven verses of Philippians 1 is koinonia &mdash; translated &ldquo;partnership&rdquo; or &ldquo;fellowship&rdquo; in verse 5. This is not a casual term. In the ancient world koinonia described a business partnership, a shared enterprise in which multiple parties contributed to a common cause and shared in its outcomes. When Paul uses this word of his relationship with the Philippians, he is saying that they are co-investors in the project of the gospel. They have skin in the game.",
      "Paul&rsquo;s thanksgiving is remarkable in its confidence and specificity. He thanks God &ldquo;upon every remembrance&rdquo; of the Philippians, and he prays for them &ldquo;with joy&rdquo; because of their partnership from &ldquo;the first day until now&rdquo; (vv. 3&ndash;5). The Philippians had supported Paul from the very beginning of his ministry in their city &mdash; they were among the first to send him financial support after he left them, and they had continued to do so across years and miles. Their giving was not a transaction but an expression of genuine gospel fellowship.",
      "Verse 6 is one of the most beloved promises in the New Testament: &ldquo;And I am sure of this, that he who began a good work in you will bring it to completion at the day of Jesus Christ.&rdquo; The confidence Paul expresses here is not in the Philippians&rsquo; own faithfulness or spiritual stability; it is in the faithfulness of the God who started something in them. The work of grace is God&rsquo;s work, and God does not abandon His projects. What He begins, He finishes. This is not a statement about passive Christianity but about the sure foundation beneath all Christian effort: the unbreakable commitment of God to complete what He has initiated.",
      "Paul&rsquo;s prayer in verses 9&ndash;11 is worth dwelling on at length. He prays not that the Philippians would simply love more &mdash; an easy and vague aspiration &mdash; but that their &ldquo;love may abound more and more, with knowledge and all discernment.&rdquo; This is love with muscle and bone, love that knows how to actually help, love calibrated by understanding. Paul wants them to be able to &ldquo;approve what is excellent&rdquo; (v. 10) &mdash; the Greek word is dokimazein, used for testing metal to see if it is genuine. Christian love that abounds in knowledge can distinguish between what is merely good and what is truly excellent.",
      "The purpose of this discerning love is two-fold: that the Philippians may be &ldquo;pure and blameless for the day of Christ&rdquo; (v. 10), and that they may be &ldquo;filled with the fruit of righteousness that comes through Jesus Christ, to the glory and praise of God&rdquo; (v. 11). Both goals are fundamentally God-directed rather than self-directed. The Christian life as Paul envisions it is not primarily about self-improvement or spiritual achievement; it is about being shaped into a vessel that honors God and bears fruit for Him.",
      "Verses 12&ndash;18 then shift to what might be called Paul&rsquo;s theology of providence in adversity. His imprisonment, which might have seemed like the end of his gospel ministry, has in fact served the advance of the gospel (v. 12). The whole praetorian guard has heard about Christ. Other brothers have grown confident and bold in their own proclamation, emboldened by Paul&rsquo;s example. The gospel is not chained even when the apostle is.",
      "Paul&rsquo;s acknowledgment that some preach Christ &ldquo;from envy and rivalry&rdquo; while others do so &ldquo;from goodwill&rdquo; (vv. 15&ndash;17) is startlingly honest. There were apparently preachers who were taking advantage of Paul&rsquo;s imprisonment to advance their own standing, deliberately trying to add to his troubles. Paul&rsquo;s response is neither defensive nor bitter: &ldquo;What then? Only that in every way, whether in pretense or in truth, Christ is proclaimed, and in that I rejoice&rdquo; (v. 18). His joy is not in the preachers but in the proclamation. As long as Christ is being made known, even impure motives become vehicles for the gospel.",
    ],
  },
  {
    id: "Joy in Suffering",
    heading: "Joy in Suffering and Standing Firm",
    reference: "Philippians 1:27&ndash;30",
    paragraphs: [
      "The final paragraph of Philippians 1 pivots from Paul&rsquo;s personal situation to a direct charge to the Philippians themselves. The charge is introduced with the word &ldquo;only&rdquo; (monon), signaling that whatever else might be uncertain about Paul&rsquo;s circumstances, this one thing is non-negotiable: &ldquo;let your manner of life be worthy of the gospel of Christ&rdquo; (v. 27). The word translated &ldquo;manner of life&rdquo; is politeuesthe &mdash; a civic or political term meaning to live as a citizen. In a Roman colony like Philippi, where civic identity was prized and Roman citizenship was a badge of honor, this language would have landed with particular force.",
      "Paul is essentially saying: you are citizens of heaven (a claim he will make explicit in 3:20), and that citizenship carries obligations. A Roman citizen was expected to live according to the dignity of Rome. A citizen of heaven is called to live according to the values and the character of the kingdom to which they belong. The gospel is not just a message to believe; it is a reality to inhabit, a community to embody, a life to live out even in the middle of a culture organized around very different values.",
      "The specific shape of this worthy manner of life that Paul calls for in these verses is unity and fearlessness. He wants the Philippians to be &ldquo;standing firm in one spirit, with one mind striving side by side for the faith of the gospel&rdquo; (v. 27). The phrase &ldquo;side by side&rdquo; translates a single Greek word (sunathleo) that carries athletic overtones &mdash; teammates competing together, pulling in the same direction, each one&rsquo;s strength adding to the whole. The Philippians are not spectators of the gospel; they are players in the contest.",
      "The fearlessness Paul commands &mdash; &ldquo;not frightened in anything by your opponents&rdquo; (v. 28) &mdash; is tied directly to the logic of verses 21&ndash;26 that precede it. If &ldquo;to die is gain,&rdquo; then the ultimate threat your opponents can make has been disarmed. The opponents can take your property, your reputation, your freedom, even your life &mdash; but they cannot take you from Christ, and they cannot touch what matters most. This is not recklessness; it is the settled confidence of people who know that the outcome of history has already been decided.",
      "The fearlessness of believers functions as a &ldquo;clear sign&rdquo; to their opponents &mdash; a sign of their destruction and of the believers&rsquo; salvation (v. 28). This is not triumphalism but eschatology: the existence of a community that cannot be shaken by threats is itself a testimony to a reality that transcends the present order. When the church refuses to be intimidated, it proclaims in action what the gospel proclaims in word: there is a King whose authority surpasses every earthly power.",
      "Verses 29&ndash;30 introduce a remarkable reframe of suffering: &ldquo;For it has been granted to you that for the sake of Christ you should not only believe in him but also suffer for his sake, engaged in the same conflict that you saw I had and now hear that I still have.&rdquo; Paul uses the language of gift &mdash; it has been &ldquo;granted&rdquo; or &ldquo;given&rdquo; to the Philippians both to believe and to suffer. Suffering for Christ is not a punishment or a sign of God&rsquo;s disfavor; it is a privilege granted to those who belong to Him. The Philippians are not suffering alone or by accident; they are sharing in the same conflict that Paul himself is engaged in.",
      "This reframe of suffering is not theoretical for Paul &mdash; he is writing it from prison. The credibility of his words comes from the fact that he is living them. And for the Philippians, to know that their suffering is shared &mdash; shared with Paul, shared with the body of Christ across the empire, and ultimately shared with Christ himself who suffered for them &mdash; is itself a source of the joy that runs like a thread through the whole letter. Suffering is not the negation of the gospel; it is one of the forms the gospel takes in a fallen world. The community that knows this is free to stand firm even when standing is costly.",
    ],
  },
];

const videoItems = [
  { videoId: "BUnm2RqJ_aM", title: "Philippians Overview - BibleProject" },
  { videoId: "rNB8c4hFtbA", title: "Philippians 1 - To Live Is Christ" },
  { videoId: "7TjwWOB8Bsw", title: "Paul in Prison - Rejoicing in Chains" },
  { videoId: "_cSzH_pOVmM", title: "Partnership in the Gospel - Philippians Study" },
];

export default function Philippians1GuidePage() {
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
            Philippians 1
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul writes from prison with thanksgiving for the Philippians&rsquo; partnership in the gospel, confidence that God will complete the work He began, and the soaring declaration: &ldquo;For to me to live is Christ, and to die is gain.&rdquo;
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
            >
              {t}
            </button>
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

        <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {videoItems.map((v) => (
            <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId={v.videoId} title={v.title} />
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>For to Me to Live Is Christ</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Philippians 1 is Paul&rsquo;s letter of joy from a prison cell &mdash; a testimony that neither chains, nor rivals, nor the prospect of death can quench the confidence of one whose life is hidden in Christ. The same Spirit who sustained Paul in his imprisonment is offered to every believer who faces opposition, uncertainty, or the shadow of suffering. To know that God completes what He begins, that Christ is honored in life and in death, and that suffering is a gift rather than an accident, is to be set free for the kind of fearless, fruitful living that Paul both describes and embodies in this opening chapter.
          </p>
        </div>
      </main>
    </div>
  );
}
