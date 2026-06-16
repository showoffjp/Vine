"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const ACCENT = GOLD;

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
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
    heading: "Overview of Romans 1",
    reference: "Romans 1:1&ndash;32",
    paragraphs: [
      "Romans is the most theologically comprehensive letter in the New Testament, and its first chapter sets the entire argument in motion. Paul writes to a church he has never visited, in the capital of the empire, and he opens by introducing himself, his gospel, and the burning thesis that will occupy the next eleven chapters: that in the gospel the righteousness of God is revealed, received by faith, available to every person who believes. From the very first verse Paul presents himself as &ldquo;a servant of Christ Jesus, called to be an apostle, set apart for the gospel of God&rdquo; (1:1), grounding his authority not in himself but in the commission he has received.",
      "The chapter divides naturally into several movements. First comes an extended greeting (1:1&ndash;7) in which Paul compresses the heart of the gospel into a single sweeping sentence about God&rsquo;s Son, descended from David according to the flesh and declared the Son of God in power by the resurrection. Then Paul expresses his longing to visit Rome and his eagerness to preach the gospel there (1:8&ndash;15), confessing that he is under obligation to Greeks and barbarians, to the wise and the foolish alike.",
      "At the center of the chapter stand two of the most important verses in all of Scripture: &ldquo;For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes, to the Jew first and also to the Greek. For in it the righteousness of God is revealed from faith for faith, as it is written, The righteous shall live by faith&rdquo; (1:16&ndash;17). These verses announce the theme of the letter and lit the fuse of the Protestant Reformation when Martin Luther finally understood what the righteousness of God meant.",
      "From this towering summit Paul descends to describe the dark backdrop against which the gospel shines. The rest of the chapter (1:18&ndash;32) unfolds the revelation of the wrath of God against all ungodliness and unrighteousness. Paul argues that what can be known about God is plain to all, displayed in the things he has made, so that every human being is without excuse. Yet humanity has suppressed this truth, exchanged the glory of God for images, and worshiped the creature rather than the Creator.",
      "The chapter then traces a tragic downward spiral. Three times Paul declares that &ldquo;God gave them up&rdquo; - first to the lusts of their hearts, then to dishonorable passions, and finally to a debased mind. The chapter closes with a sobering catalog of human corruption and the verdict that those who practice such things deserve death, yet they not only do them but give hearty approval to those who practice them. Romans 1 thus establishes the universal need that only the gospel can meet: a world under wrath, without excuse, desperately in need of the righteousness that comes from God.",
      "Understood rightly, Romans 1 is not primarily a chapter about human sin but a chapter about the gospel of God. The grim diagnosis of verses 18 through 32 exists to make the good news of verses 16 and 17 shine all the brighter. Paul is a physician who must show the patient the depth of the disease before announcing the cure. The whole letter that follows is the unfolding of how the righteous God justifies the ungodly through faith in Jesus Christ, and it all begins here, in the soaring confidence of an apostle who is not ashamed of the gospel.",
    ],
  },
  {
    id: "Key Themes",
    heading: "Key Themes in Romans 1",
    reference: "Major Theological Threads",
    paragraphs: [
      "The first great theme of Romans 1 is the gospel as the power of God for salvation. Paul calls it &ldquo;the gospel of God&rdquo; (1:1) and &ldquo;the gospel of his Son&rdquo; (1:9), and he insists that he is not ashamed of it because it is dynamite - the Greek word is dynamis, the very power of God unleashed for the rescue of everyone who believes. The gospel is not advice to be followed or a philosophy to be admired; it is an announcement of what God has done, and it carries within it the saving power it proclaims. This power extends to the Jew first and also to the Greek, embracing all peoples without distinction.",
      "The second theme is the righteousness of God, the dikaiosyne theou that stands at the heart of the letter. This phrase can mean both an attribute of God - his own perfect righteousness - and a gift from God - a right standing that he grants to those who believe. Paul declares that this righteousness is revealed in the gospel &ldquo;from faith for faith&rdquo; (1:17), a phrase that emphasizes that faith is the means from beginning to end. The righteousness God requires he himself provides; the righteousness humanity cannot achieve he freely gives. This is the engine of justification that drives the entire epistle.",
      "Closely tied to this is the third theme, the principle that &ldquo;the righteous shall live by faith&rdquo; (1:17), a quotation from Habakkuk 2:4. This single line became the watchword of the Reformation. Martin Luther wrestled for years with the phrase &ldquo;the righteousness of God,&rdquo; terrified by what he thought was the righteousness by which God punishes sinners. When he finally grasped that it was a righteousness God gives by faith, he said he felt himself reborn and to have gone through open gates into paradise. The doctrine of justification by faith alone flows directly from this verse.",
      "The fourth theme is general or natural revelation and the universal accountability it produces. Paul teaches that &ldquo;what can be known about God is plain&rdquo; to all people, because &ldquo;his invisible attributes, namely, his eternal power and divine nature, have been clearly perceived, ever since the creation of the world, in the things that have been made&rdquo; (1:19&ndash;20). The heavens declare the glory of God, as Psalm 19 sings, and this testimony leaves every person &ldquo;without excuse.&rdquo; Humanity does not perish for lack of evidence but for suppression of the evidence it already has.",
      "The fifth theme is idolatry as the root sin. Paul describes a great exchange at the heart of human rebellion: &ldquo;they exchanged the glory of the immortal God for images resembling mortal man and birds and animals and creeping things&rdquo; (1:23). The fundamental human sin is not first immorality but mis-worship - the redirecting of glory and devotion from the Creator to created things. Idolatry is the fountain from which the other sins flow; when worship is disordered, everything downstream is disordered as well.",
      "The sixth theme is the wrath of God and the dreadful phrase &ldquo;God gave them up.&rdquo; Three times Paul uses the verb paredoken - God handed them over (1:24, 1:26, 1:28). This is not divine indifference but active judgment: God gives sinners over to the very desires they have chosen, allowing sin to become its own punishment. The wrath revealed here is not a loss of temper but the steady, righteous response of a holy God to persistent rebellion, a judgment already at work in the present age even before the final day.",
    ],
  },
  {
    id: "Verse by Verse",
    heading: "Walking Through Romans 1",
    reference: "Romans 1:1&ndash;32",
    paragraphs: [
      "Paul opens with one of the longest and richest greetings in any of his letters (1:1&ndash;7). He calls himself &ldquo;a servant of Christ Jesus, called to be an apostle, set apart for the gospel of God&rdquo; - three descriptions that move from humble submission to divine commission to consecrated purpose. He immediately roots the gospel in history, noting that it was &ldquo;promised beforehand through his prophets in the holy Scriptures&rdquo; (1:2). The gospel is no novelty; it is the fulfillment of everything God had been announcing across the centuries of the Old Testament.",
      "The content of that gospel is the Son himself, &ldquo;who was descended from David according to the flesh and was declared to be the Son of God in power according to the Spirit of holiness by his resurrection from the dead&rdquo; (1:3&ndash;4). Here Paul holds together the full humanity of Jesus, his royal Davidic lineage, and his divine sonship vindicated by the resurrection. Through this Christ, Paul says, &ldquo;we have received grace and apostleship to bring about the obedience of faith for the sake of his name among all the nations&rdquo; (1:5). The greeting closes by addressing the believers in Rome as &ldquo;loved by God and called to be saints&rdquo; (1:7).",
      "In verses 8 through 15 Paul pours out his heart toward the Roman church. He thanks God that their faith is &ldquo;proclaimed in all the world&rdquo; (1:8) and assures them that he prays for them constantly, longing to visit so that he might impart some spiritual gift and be mutually encouraged by their shared faith. He confesses that he has often planned to come but has been prevented, and that he feels himself &ldquo;under obligation both to Greeks and to barbarians, both to the wise and to the foolish&rdquo; (1:14). His eagerness to preach the gospel in Rome flows from a sense of debt that the gospel itself has created in him.",
      "Then comes the thesis statement, verses 16 and 17, the hinge on which the whole letter turns. &ldquo;For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes&rdquo; (1:16). In a city that prized power, status, and honor, Paul plants his flag on a message about a crucified Jew, declaring it the truest power in the universe. The righteousness of God is revealed in this gospel &ldquo;from faith for faith,&rdquo; confirmed by the prophet Habakkuk: &ldquo;The righteous shall live by faith&rdquo; (1:17). These words have re-formed the church again and again.",
      "At verse 18 the tone shifts dramatically as Paul begins his indictment of humanity: &ldquo;For the wrath of God is revealed from heaven against all ungodliness and unrighteousness of men, who by their unrighteousness suppress the truth&rdquo; (1:18). The problem is not ignorance but suppression. God has made himself known through creation, so that his &ldquo;eternal power and divine nature&rdquo; have been clearly perceived &ldquo;in the things that have been made,&rdquo; leaving all people &ldquo;without excuse&rdquo; (1:19&ndash;20). The evidence is everywhere; the human heart has chosen not to see it.",
      "Verses 21 through 25 describe the great exchange and its consequences. &ldquo;For although they knew God, they did not honor him as God or give thanks to him, but they became futile in their thinking, and their foolish hearts were darkened&rdquo; (1:21). Claiming to be wise, they became fools, and they &ldquo;exchanged the glory of the immortal God for images&rdquo; of created things (1:23). The first &ldquo;God gave them up&rdquo; appears here: &ldquo;Therefore God gave them up in the lusts of their hearts to impurity&rdquo; (1:24), because they worshiped and served the creature rather than the Creator, who is blessed forever.",
      "Verses 26 through 27 record the second handing over: &ldquo;For this reason God gave them up to dishonorable passions&rdquo; (1:26). Paul describes the disordering of human desire as a sign and consequence of the deeper disorder of refusing to honor God. The point is not to single out one sin above others but to show how the rejection of the Creator distorts the whole created order of human life, including the most basic patterns God established. The catalog illustrates a creation that has been turned against its own design through the suppression of the truth about its Maker.",
      "Verses 28 through 32 record the third and climactic giving up: &ldquo;And since they did not see fit to acknowledge God, God gave them up to a debased mind to do what ought not to be done&rdquo; (1:28). Paul then unfurls a sweeping list of sins - unrighteousness, evil, covetousness, malice, envy, murder, strife, deceit, gossip, slander, hatred of God, insolence, pride, disobedience, faithlessness, heartlessness, ruthlessness. The chapter ends with a chilling verdict: such people &ldquo;know God&rsquo;s righteous decree that those who practice such things deserve to die,&rdquo; yet &ldquo;they not only do them but give approval to those who practice them&rdquo; (1:32). The applause of evil is its final corruption.",
    ],
  },
  {
    id: "Application",
    heading: "Living Romans 1 Today",
    reference: "Personal and Community Application",
    paragraphs: [
      "Romans 1 confronts every reader with the foundational question of worship: where is your glory and gratitude directed? Paul identifies the root of human rebellion not as a failure of conduct but as a failure of worship - the refusal to honor God as God and to give thanks (1:21). Before we examine our behavior, we are invited to examine our affections. The modern person no longer bows before carved images of birds and beasts, but the same exchange happens whenever we give the weight of our trust, our identity, and our deepest devotion to anything other than the living God - career, comfort, romance, reputation, or self.",
      "The chapter also calls us to recover Paul&rsquo;s gospel confidence: &ldquo;I am not ashamed of the gospel&rdquo; (1:16). In a culture that often treats Christian conviction as embarrassing or naive, believers are tempted to soften, hide, or apologize for the message of the cross. Paul models a different posture - not arrogance, but unembarrassed boldness rooted in the conviction that the gospel really is the power of God for salvation. To grasp that this message is the truest power in the world is to be freed from the fear of human opinion and emboldened to share it freely.",
      "Romans 1:17 invites a deeply personal reckoning with justification by faith. The doctrine that &ldquo;the righteous shall live by faith&rdquo; is not an abstract theological formula but the answer to the most pressing human question: how can a guilty person stand before a holy God? The application is to stop trusting in our own performance, our religious effort, or our moral track record, and instead to receive as a gift the righteousness God provides in Christ. Luther found in this verse the gateway to paradise, and every generation must walk through that same gate by faith alone.",
      "The teaching on natural revelation has profound implications for how we view the people around us and the world we inhabit. Because God&rsquo;s &ldquo;eternal power and divine nature&rdquo; are displayed in creation (1:20), there is no truly secular space and no person who is genuinely ignorant of God. This frees believers from the fear that the gospel is intruding on neutral ground; we are always speaking to people who already know, at some level, that God is real. It also calls us to a posture of wonder, learning to read the heavens, the cells, the seasons, and the stars as a continuous testimony to their Maker, as Psalm 19 invites us to do.",
      "The sobering doctrine of &ldquo;God gave them up&rdquo; warns us to take sin and its trajectory seriously. Sin is not static; left unchecked, it deepens, hardens, and eventually becomes its own punishment as God hands rebels over to the desires they have chosen. This should drive believers to vigilance over their own hearts, to repentance that does not delay, and to compassion rather than smugness toward those caught in destructive patterns. We were all under the same wrath, and only grace has made the difference. The chapter forbids both moral indifference and self-righteous superiority.",
      "Finally, Romans 1 should reshape how we understand evangelism and our own assurance. The chapter establishes that all people, without exception, are without excuse and under wrath apart from Christ - which makes the gospel not optional but urgently necessary for every human being. Yet the same chapter declares that this gospel is the power of God for salvation to everyone who believes. The Christian holds these two truths together: a clear-eyed view of human lostness and an unshakeable confidence in the saving power of the message we carry. The darkness of verses 18 through 32 is the very reason the light of verses 16 and 17 is such astonishing good news.",
    ],
  },
];

const reflectionQuestions = [
  "Where in your life are you tempted to be ashamed of the gospel, and what would unembarrassed confidence look like in those settings?",
  "What created things compete for the worship and glory that belong to God alone, and how might you recognize and turn from these subtle idolatries?",
  "How does the truth that the righteousness of God is a gift received by faith change the way you approach God when you fail?",
  "In what ways do you see the testimony of God in creation, and how can you cultivate a deeper sense of wonder at his eternal power and divine nature?",
  "How does the principle that God hands people over to their chosen desires shape the way you guard your own heart and respond to others caught in sin?",
];

const videoItems = [
  { videoId: "0SNH-7gV9-Q", title: "Romans 1 - The Gospel and the Power of God for Salvation" },
  { videoId: "ej_6dVdJSIU", title: "The Righteous Shall Live by Faith - Justification in Romans" },
  { videoId: "GswSg2ohqmA", title: "The Wrath of God Revealed - Natural Revelation and Accountability" },
  { videoId: "WoEZl_uX7Wk", title: "Idolatry and the Great Exchange in Romans 1" },
];

export default function Romans1GuidePage() {
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
            Romans 1 &mdash; The Gospel of God
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "&ldquo;For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes, to the Jew first and also to the Greek. For in it the righteousness of God is revealed from faith for faith.&rdquo; &mdash; Romans 1:16&ndash;17" }} />
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem", position: "sticky", top: "var(--header-height, 80px)", background: BG, zIndex: 10 }}>
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

            {activeTab === "Application" && (
              <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${PURPLE}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
                <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.25rem" }}>Questions for Reflection</h3>
                <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                  {reflectionQuestions.map((q, i) => (
                    <li
                      key={i}
                      style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.7 }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  ))}
                </ol>
              </div>
            )}
          </section>
        )}

        <section style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }} dangerouslySetInnerHTML={{ __html: "Deepen your study of Romans 1 through these video teachings on the gospel as the power of God, justification by faith, natural revelation, and the wrath of God revealed against all ungodliness." }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${GREEN}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Not Ashamed of the Gospel</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Romans 1 lays bare the desperate condition of a world that has suppressed the truth, exchanged the glory of God for idols, and been given over to its own desires - precisely so that the announcement of verses 16 and 17 may shine like the dawn. The righteousness humanity could never achieve, God freely gives to all who believe. This is the gospel Paul was not ashamed to preach, and it remains the power of God for salvation to everyone who believes today." }} />
        </div>
      </main>
    </div>
  );
}
