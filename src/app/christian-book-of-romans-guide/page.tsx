"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "The Gospel of God",
  "Justified by Faith",
  "Life in the Spirit",
  "Israel and the Gentiles",
  "The Transformed Life",
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
    id: "The Gospel of God",
    heading: "The Gospel of God",
    reference: "Romans 1&ndash;3",
    paragraphs: [
      "Paul opens Romans with what may be the most carefully constructed theological thesis in the New Testament. He is not ashamed of the gospel, he declares in 1:16&ndash;17, because it is &ldquo;the power of God for salvation to everyone who believes, to the Jew first and also to the Greek.&rdquo; The reason it is powerful: in it &ldquo;the righteousness of God is revealed from faith for faith.&rdquo; The citation of Habakkuk 2:4 &mdash; &ldquo;the righteous shall live by faith&rdquo; &mdash; is not incidental. It was this sentence, encountered by a young Augustinian monk named Martin Luther, that ignited the Protestant Reformation. The verse contains the whole argument of Romans in miniature: righteousness, faith, life &mdash; the three cardinal realities of the gospel.",
      "Before Paul can announce the solution, he must diagnose the disease. Romans 1:18&ndash;32 is the most sustained description of human depravity in the New Testament, describing what happens when humanity &ldquo;exchanges the truth about God for a lie and worships and serves the creature rather than the Creator.&rdquo; The downward spiral is not a punishment applied externally by God but rather a consequence God permits internally: he &ldquo;gives them up&rdquo; (1:24, 26, 28) to the logic of their own idolatry. Sexual disorder, relational breakdown, and moral chaos are not the cause of God&rsquo;s wrath but its first expression.",
      "In 2:1&ndash;3:8, Paul springs his rhetorical trap on the Jewish reader who may have been nodding along to his description of Gentile sin. The one who judges others is doing the same things (2:1). God&rsquo;s judgment is impartial: it falls on Jew and Gentile alike, on those who sin under the law and those who sin without it. The law does not protect the Jew from judgment; it intensifies his accountability. &ldquo;You who boast in the law dishonor God by breaking the law&rdquo; (2:23). Circumcision is valuable if you keep the law, but if you break it, your circumcision has become uncircumcision &mdash; a devastating inversion of Jewish confidence.",
      "The climactic diagnosis arrives in 3:9&ndash;20 in a string of Old Testament quotations assembled like a judicial indictment: &ldquo;None is righteous, no, not one; no one understands; no one seeks for God&rdquo; (Ps. 14:1&ndash;3). &ldquo;There is no fear of God before their eyes&rdquo; (Ps. 36:1). The universality is total: &ldquo;all, both Jews and Greeks, are under sin&rdquo; (3:9). Every mouth is stopped. The entire world is held accountable to God. No exemptions are noted. This is not pessimism; it is precision diagnosis before treatment.",
      "The role of the law in Paul&rsquo;s argument is frequently misunderstood. The law is not evil &mdash; it is &ldquo;holy and righteous and good&rdquo; (7:12). But it is not designed to save. Its purpose is to reveal sin: &ldquo;through the law comes knowledge of sin&rdquo; (3:20). The law is a mirror, not a ladder. It shows you what you are; it cannot make you what you ought to be. This insight is crucial: no amount of increased moral effort in response to the law&rsquo;s demands can produce the righteousness God requires. The law can only prosecute, not acquit.",
      "Why does Paul spend three chapters on universal guilt before turning to the gospel? Because the good news that God justifies the ungodly (4:5) is only genuinely good news to those who know they are ungodly. The depth of your gratitude for the gospel is proportional to your understanding of what you needed to be saved from. Paul&rsquo;s extended diagnosis is not a detour from the gospel &mdash; it is the preparation without which the gospel cannot be heard as the astonishing announcement it is. The &ldquo;But now&rdquo; of 3:21 is the hinge of human history, and you only feel its weight after you have sat in the darkness of 1:18&ndash;3:20.",
      "There is also a cosmic dimension to Paul&rsquo;s argument that modern individualism can miss. The wrath of God is revealed from heaven (1:18), not merely against individual sinners but against &ldquo;all ungodliness and unrighteousness of men.&rdquo; Sin is not just personal moral failure; it is a structural condition of a creation that has turned from its Maker. The gospel&rsquo;s solution must therefore be equally cosmic: a righteousness revealed that encompasses Jew and Gentile, individual and community, the present age and the age to come.",
    ],
  },
  {
    id: "Justified by Faith",
    heading: "Justified by Faith",
    reference: "Romans 3&ndash;5",
    paragraphs: [
      "The great pivot of Romans &mdash; and arguably of all Paul&rsquo;s theology &mdash; arrives at 3:21 with two of the most important words in the New Testament: &ldquo;But now.&rdquo; After three chapters of darkness, those two words signal a decisive turn in the history of God&rsquo;s dealings with humanity. &ldquo;But now the righteousness of God has been manifested apart from the law, although the Law and the Prophets bear witness to it.&rdquo; What was promised has arrived. What the law could not accomplish, God has done. The solution is as universal as the problem: it is &ldquo;for all who believe&rdquo; (3:22), without the ethnic or ceremonial distinctions that had divided humanity.",
      "Justification &mdash; the technical theological term Paul uses &mdash; is a forensic (legal) declaration, not a process of moral improvement. To be justified is to be declared righteous in God&rsquo;s courtroom, not gradually made righteous in one&rsquo;s character. The distinction matters enormously: if justification were a process, assurance would be impossible (how far along am I?), and the foundation of our standing before God would be our own performance. But if justification is a declaration &mdash; a verdict rendered on the basis of what Christ has done and received by faith alone &mdash; then assurance is possible because the verdict is already in. The righteousness that God declares is Christ&rsquo;s righteousness &ldquo;imputed&rdquo; (credited) to the believer&rsquo;s account.",
      "The Abraham argument in chapter 4 is Paul&rsquo;s master stroke. The Jew would object: Abraham was the father of our faith and he was circumcised. But Paul shows from Genesis 15:6 that Abraham&rsquo;s faith was &ldquo;counted to him as righteousness&rdquo; before his circumcision (Genesis 17), not after. Circumcision was the sign of a righteousness Abraham already had by faith &mdash; not the cause of it. Therefore Abraham is the father not only of circumcised believers but of all who believe without circumcision (4:11&ndash;12). The Gentiles&rsquo; inclusion in Abraham&rsquo;s family is not a Pauline innovation but was written into the original covenant.",
      "The consequences of justification are catalogued in 5:1&ndash;11 in language of extraordinary richness. We have peace with God (5:1) &mdash; the hostility that sin created has been ended. We have &ldquo;access&rdquo; into grace (5:2) &mdash; the standing is permanent, not moment-by-moment. We can boast in our sufferings (5:3&ndash;5) because suffering produces endurance, which produces character, which produces hope &mdash; and this hope does not shame us because the love of God has been poured into our hearts through the Holy Spirit. The logic is one of the most compressed and powerful in Paul&rsquo;s letters: suffering leads to hope because the Spirit certifies that the love of God is already present in the believer.",
      "Romans 5:12&ndash;21 introduces one of Paul&rsquo;s most daring theological constructions: the comparison of Adam and Christ as two &ldquo;heads&rdquo; of two humanities. Adam&rsquo;s sin brought condemnation and death to all who are in him; Christ&rsquo;s obedience brought righteousness and life to all who are in him. The parallel is deliberately asymmetrical: the grace that comes through Christ is &ldquo;much more&rdquo; (5:15, 17) than the condemnation that came through Adam. Where sin increased, grace &ldquo;abounded all the more&rdquo; (5:20). This passage is the foundation for the doctrine of original sin and also for what Reformed theology calls &ldquo;the active obedience of Christ&rdquo; &mdash; the positive obedience of Jesus throughout his life counted to the believer, not merely his suffering on the cross.",
      "The phrase &ldquo;the righteousness of God&rdquo; (dikaiosyn&emacr; theou) has been debated for centuries: is it God&rsquo;s attribute (his own righteousness), his gift (the righteousness he gives), or his activity (his saving justice)? The Reformation read it primarily as God&rsquo;s gift, received by faith. The New Perspective on Paul (N.T. Wright, James Dunn) emphasizes it as covenant faithfulness &mdash; God&rsquo;s faithfulness to his covenant promises. These readings are not necessarily opposed: God&rsquo;s gift of righteousness is the expression of his covenant faithfulness. What all agree on is that it is received by faith, not earned by works.",
      "Justification by faith was not merely a doctrinal slogan at the Reformation; it restructured the entire economy of the Christian life. If you are declared righteous by faith in Christ&rsquo;s work, then your standing before God is not contingent on your moral performance, your prayer life, your giving, or your service record. It is settled. This is not antinomianism (Paul addresses that charge immediately in chapter 6); it is the foundation of genuine freedom. The one who is no longer striving to be accepted can begin genuinely loving &mdash; because love done in order to secure acceptance is not love but transaction.",
    ],
  },
  {
    id: "Life in the Spirit",
    heading: "Life in the Spirit",
    reference: "Romans 6&ndash;8",
    paragraphs: [
      "Romans 6 opens with a question Paul knows his argument will provoke: &ldquo;Are we to continue in sin that grace may abound?&rdquo; (6:1). If grace multiplies where sin increases (5:20), why not sin more? Paul&rsquo;s answer is not a moral lecture but a theological one: the person united to Christ by faith has died with Christ and been raised with Christ. &ldquo;We know that our old self was crucified with him in order that the body of sin might be brought to nothing, so that we would no longer be enslaved to sin&rdquo; (6:6). Sin is not merely something the Christian should not do; it is something the Christian has died to. The power of sin over the believer has been broken at the root.",
      "Baptism is Paul&rsquo;s sign of this death and resurrection. To be baptized into Christ is to be baptized into his death (6:3) &mdash; to be buried with him and raised with him in &ldquo;newness of life&rdquo; (6:4). The logic is union: what happened to Christ has happened to the one who is in Christ. This is not experiential (the Christian does not feel dead to sin); it is ontological and legal. The believer&rsquo;s true identity is as one who is &ldquo;alive to God in Christ Jesus&rdquo; (6:11). Paul&rsquo;s ethical imperative follows from this indicative: &ldquo;consider yourselves dead to sin and alive to God&rdquo; (6:11) &mdash; reckon it to be true because it is true.",
      "Romans 7 is one of the most debated passages in Paul&rsquo;s letters. Paul describes an agonized inner conflict: &ldquo;I do not do what I want, but I do the very thing I hate&rdquo; (7:15). The &ldquo;wretched man&rdquo; (7:24) cries out for deliverance. Is this the experience of Paul before his conversion, or after? Augustine initially read it as pre-Christian but later reversed himself to read it as the regenerate Christian&rsquo;s ongoing struggle. Luther and Calvin followed Augustine&rsquo;s mature reading. The New Perspective tends to read it as describing unregenerate Israel confronting the law. The debate has enormous pastoral implications: is Romans 7 the normal Christian life or a depiction of defeat?",
      "Whatever one concludes about Romans 7, Romans 8 is unambiguous. It opens with the most liberating sentence in the New Testament: &ldquo;There is therefore now no condemnation for those who are in Christ Jesus&rdquo; (8:1). The Spirit who raised Christ from the dead now dwells in the believer (8:11). Those who are led by the Spirit of God are sons of God (8:14). The Spirit himself bears witness with our spirit that we are children of God (8:16). The contrast with Romans 7 is stark: there, the law commands but cannot empower; here, the Spirit indwells and actually produces what the law required.",
      "Romans 8:18&ndash;27 expands the horizon to cosmic dimensions: the creation itself is groaning, waiting for the redemption of God&rsquo;s children. The suffering of the present time is real but &ldquo;not worth comparing with the glory that is to be revealed to us&rdquo; (8:18). The Spirit intercedes for the saints &ldquo;with groanings too deep for words&rdquo; (8:26) &mdash; when we do not know how to pray, the Spirit prays in us. This is one of the most tender and practically important texts in Paul: prayer is not merely a human effort but a Trinitarian activity in which the Spirit acts as advocate within the believer before the Father.",
      "The &ldquo;golden chain&rdquo; of 8:29&ndash;30 has been a theological touchstone for Reformed theology: &ldquo;Those whom he foreknew he also predestined to be conformed to the image of his Son... those whom he predestined he also called, and those whom he called he also justified, and those whom he justified he also glorified.&rdquo; Every link in the chain is certain; none is lost along the way. Paul uses the past tense for glorification, even though it is future &mdash; such is the certainty of God&rsquo;s purpose.",
      "Romans 8 concludes with one of the most celebrated passages in all of Scripture (8:31&ndash;39): a series of rhetorical questions that accumulate into a triumphant declaration that nothing in the universe &mdash; neither death nor life, angels nor rulers, things present nor things to come, height nor depth &mdash; can separate us from the love of God in Christ Jesus. This is not triumphalism about the absence of suffering; it is assurance in the midst of suffering that nothing can displace us from God&rsquo;s love. Paul has already described persecution, famine, and sword in the same passage (8:35). The answer to all of them is not escape but the unbreakable love of God.",
    ],
  },
  {
    id: "Israel and the Gentiles",
    heading: "Israel and the Gentiles",
    reference: "Romans 9&ndash;11",
    paragraphs: [
      "Romans 9&ndash;11 is the most theologically demanding section of Romans and possibly of the entire New Testament. Paul moves from the triumphant conclusion of chapter 8 to a passage of profound personal anguish: &ldquo;I have great sorrow and unceasing anguish in my heart. For I could wish that I myself were accursed and cut off from Christ for the sake of my brothers, my kinsmen according to the flesh&rdquo; (9:2&ndash;3). The question these chapters address is urgent: if God&rsquo;s promises to Israel are certain (as chapter 8 implies), why have most Jews rejected the Messiah? Has God&rsquo;s word failed?",
      "Paul&rsquo;s first answer is that not all who are descended from Israel belong to Israel (9:6). The line of promise has always run through election, not biology: Isaac rather than Ishmael, Jacob rather than Esau. God chose before either had done anything good or evil, &ldquo;in order that God&rsquo;s purpose of election might continue&rdquo; (9:11). This is not arbitrary &mdash; it expresses God&rsquo;s freedom to show mercy to whom he wills. The potter-and-clay analogy (9:19&ndash;21) asserts God&rsquo;s sovereign right over his own creation. The objects of wrath and mercy are both prepared according to God&rsquo;s purposes. Paul nowhere suggests this is comfortable; he suggests it is true.",
      "Israel&rsquo;s stumbling is not accidental but voluntary. In 9:30&ndash;10:21, Paul shifts from God&rsquo;s sovereign election to Israel&rsquo;s responsible rejection. Israel pursued righteousness but &ldquo;did not succeed in reaching it&rdquo; (9:31) because they pursued it by works rather than by faith. They were &ldquo;zealous for God&rdquo; (10:2) but without knowledge &mdash; they sought to establish their own righteousness rather than submitting to God&rsquo;s. The gospel is not far off and inaccessible; it is near, in your mouth and heart (10:8). The word of faith that Paul preaches requires only confession and belief (10:9&ndash;10). The gospel was preached to Israel and they heard it; many did not believe.",
      "The famous verse 10:9 &mdash; &ldquo;if you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved&rdquo; &mdash; is sometimes quoted as a simple conversion formula, but in context it is Paul&rsquo;s demonstration that the gospel is accessible. &ldquo;There is no distinction between Jew and Greek; for the same Lord is Lord of all, bestowing his riches on all who call on him&rdquo; (10:12). &ldquo;How beautiful are the feet of those who preach good news!&rdquo; (10:15, from Isaiah 52:7) &mdash; a celebration of the missionary task that the argument requires.",
      "Romans 11 introduces the mystery that resolves Paul&rsquo;s anguish. God has not rejected his people (11:1). There is a remnant by grace &mdash; Paul himself being evidence (11:1). Israel&rsquo;s stumbling has served a purpose: salvation has come to the Gentiles in order to make Israel jealous (11:11). The Gentiles are not the replacement of Israel but a wild olive branch grafted into the cultivated olive tree (11:17&ndash;24). The Gentiles are warned not to become arrogant toward the natural branches &mdash; &ldquo;it is not you who support the root, but the root that supports you&rdquo; (11:18).",
      "The climax of chapter 11 is the most disputed verse in all of Romans: &ldquo;and in this way all Israel will be saved&rdquo; (11:26). Does &ldquo;all Israel&rdquo; mean every ethnic Jew, a future mass conversion, the totality of the elect (Jew and Gentile), or the full number of the elect from Israel across history? Every position has serious defenders. The context of the preceding verses &mdash; the mystery of Israel&rsquo;s partial hardening until the fullness of the Gentiles has come in &mdash; suggests that Paul envisions a future moment when the hardening is lifted and Israel as a people enters the covenant. What is certain is that God&rsquo;s gifts and calling are irrevocable (11:29).",
      "The section concludes with one of the great doxologies of Scripture (11:33&ndash;36): &ldquo;Oh, the depth of the riches and wisdom and knowledge of God! How unsearchable are his judgments and how inscrutable his ways! For who has known the mind of the Lord?&rdquo; This is not evasion but honest acknowledgment: the plan of God for Jew and Gentile is more complex, more beautiful, and more sovereign than any human mind can fully map. The right response to Romans 9&ndash;11 is not systematic resolution but doxology.",
    ],
  },
  {
    id: "The Transformed Life",
    heading: "The Transformed Life",
    reference: "Romans 12&ndash;16",
    paragraphs: [
      "The ethical section of Romans begins with one of the most important hinges in Paul&rsquo;s letters: &ldquo;I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship&rdquo; (12:1). The word &ldquo;therefore&rdquo; (oun) is load-bearing: the ethics that follow are grounded in everything Paul has argued in chapters 1&ndash;11. The transformation of the mind (12:2) &mdash; &ldquo;be transformed by the renewal of your mind, that by testing you may discern what is the will of God&rdquo; &mdash; is the mechanism by which the gospel doctrine of chapters 1&ndash;11 becomes the Christian life of chapters 12&ndash;16.",
      "The community life described in 12:3&ndash;21 is one of the most compressed and comprehensive ethics of love in the New Testament. The spiritual gifts listed in 12:6&ndash;8 (prophecy, service, teaching, exhortation, giving, leading, mercy) are not career options but expressions of the one body&rsquo;s mutual interdependence. The ethics of love in 12:9&ndash;21 include the command to bless those who persecute you (12:14), to weep with those who weep (12:15), to live peaceably with all (12:18), and the stunning climax: &ldquo;Do not be overcome by evil, but overcome evil with good&rdquo; (12:21). This is not passive resignation but active enemy-transformation through the power of genuine love.",
      "Romans 13:1&ndash;7 &mdash; the command to be subject to governing authorities, since all authority is from God &mdash; is the most debated political text in the New Testament. In the twentieth century alone it was used to justify obedience to the Nazi state (by the German Christians) and to justify resistance to it (by Barth and Bonhoeffer). The key question is what Paul means: does he require absolute submission (even to unjust commands), or is submission conditioned on the government fulfilling its God-given function of punishing evil and rewarding good (13:3&ndash;4)? The consensus in Protestant political theology is that submission is the default posture but not absolute: when the government commands what God forbids or forbids what God commands, obedience to God takes precedence (Acts 5:29).",
      "Romans 13:8&ndash;14 transitions from political to eschatological ethics: &ldquo;the hour has come for you to wake from sleep. For salvation is nearer to us now than when we first believed&rdquo; (13:11). The nearness of the end intensifies the moral urgency: &ldquo;put on the Lord Jesus Christ, and make no provision for the flesh, to gratify its desires&rdquo; (13:14). Augustine famously records reading 13:13&ndash;14 in the garden during his conversion &mdash; the precise text that the child&rsquo;s voice had instructed him to read. &ldquo;I neither wished nor needed to read further. At once... it was as though the light of confidence flooded into my heart and all the darkness of doubt was dispelled.&rdquo;",
      "The long section on the strong and the weak (14:1&ndash;15:13) addresses a specific conflict in the Roman church: those with a robust conscience who could eat anything and observe no special days, and those with a more tender conscience who abstained from meat (probably from pagan temple sacrifice) and observed special days. Neither party is to judge or despise the other. The strong are to bear with the failings of the weak and not to please themselves (15:1). The operative principle is that each person acts for the Lord, not for human approval (14:6&ndash;8). This section is one of Paul&rsquo;s most sophisticated treatments of conscience, freedom, and the duty of the strong toward the vulnerable.",
      "Paul&rsquo;s explanation of his letter-writing in 15:14&ndash;33 reveals his missionary strategy. He has written boldly because of the grace given to him to be a minister of Christ Jesus to the Gentiles (15:15&ndash;16). He has fully preached the gospel from Jerusalem to Illyricum (modern-day Albania) &mdash; an arc of thousands of miles. He is now planning Spain, with Rome as his support base. Jerusalem first: he must deliver the collection for the saints there. The collection, which occupies significant portions of 1&ndash;2 Corinthians as well, is Paul&rsquo;s demonstration that Gentile faith is real &mdash; they have shared in spiritual blessings with Jewish believers and are obligated to serve them in material needs (15:27).",
      "The greetings of chapter 16 &mdash; often skipped as a list of unpronounceable names &mdash; are a window into the early church that rewards careful reading. Phoebe is described as a deaconess (or deacon) and a patron (prostatis) of many (16:1&ndash;2). Priscilla (named before her husband Aquila, which is unusual) is Paul&rsquo;s co-worker. Junia is among the apostles (16:7). The chapter lists more women by name than almost any other passage in Paul. It also reveals a church meeting in homes, organized across households, spanning social classes and ethnicities &mdash; a community that the Roman social world had no category for. The letter ends (16:25&ndash;27) where it began: the mystery of the gospel, kept secret for ages but now disclosed, made known to all nations for the obedience of faith.",
    ],
  },
];

const videoItems = [
  { videoId: "Ek5oHvBJAJk", title: "Tim Keller Preaching Romans 1 — The Gospel" },
  { videoId: "A3aN_-9V7xc", title: "John Piper on Romans 8 — No Condemnation" },
  { videoId: "oeqbMZXUBNQ", title: "N.T. Wright on Romans — Justification and the New Perspective" },
];

export default function RomansGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;
  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: ACCENT, color: "#fff", padding: "4px 18px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>
            PAUL&rsquo;S LETTER TO THE ROMANS
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, margin: "0 0 14px", lineHeight: 1.15 }}>
            Book of Romans Guide
          </h1>
          <p style={{ color: MUTED, maxWidth: 600, margin: "0 auto", lineHeight: 1.75, fontSize: 16 }}>
            Paul&rsquo;s letter to Rome is the most systematic exposition of the Christian gospel ever written &mdash; the foundation of Reformation theology, the text that converted Augustine, the letter that changed the world.
          </p>
        </div>

        {/* Key verse banner */}
        <div style={{ background: ACCENT + "18", border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "14px 24px", marginBottom: "2.5rem", textAlign: "center" }}>
          <p style={{ margin: 0, fontStyle: "italic", fontWeight: 600, color: TEXT, fontSize: 15 }}>
            &ldquo;For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes.&rdquo; &mdash; Romans 1:16
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: "2rem", flexWrap: "wrap" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                background: tab === t ? ACCENT : CARD,
                color: tab === t ? "#fff" : MUTED,
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                borderRadius: 8,
                padding: "8px 16px",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 14,
                transition: "all 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Content: text tabs */}
        {tab !== "Videos" && currentSection && (
          <div>
            <div style={{ marginBottom: "1.75rem" }}>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: ACCENT, margin: "0 0 6px" }}>
                {currentSection.heading}
              </h2>
              <div
                style={{ color: MUTED, fontSize: 14, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: currentSection.reference }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderLeft: `3px solid ${ACCENT}`,
                    borderRadius: "0 10px 10px 0",
                    padding: "1.25rem 1.5rem",
                    lineHeight: 1.85,
                    fontSize: 15,
                    color: TEXT,
                  }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Videos tab */}
        {tab === "Videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: 22, marginBottom: 8, marginTop: 0 }}>
                Teaching Videos
              </h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: "1.5rem", lineHeight: 1.7, margin: "0 0 1.5rem" }}>
                Sermons and lectures from leading scholars and preachers on the Book of Romans &mdash; covering the gospel, justification, the Spirit, Israel, and the transformed life.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {videoItems.map((v) => (
                  <div
                    key={v.videoId}
                    style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}
                  >
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: ACCENT, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{v.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Closing callout */}
        <div style={{ marginTop: "3rem", background: ACCENT + "12", border: `1px solid ${ACCENT}33`, borderRadius: 14, padding: "2rem", textAlign: "center" }}>
          <h3 style={{ color: ACCENT, fontWeight: 800, fontSize: 20, marginTop: 0, marginBottom: 10 }}>
            Dig Deeper into Romans
          </h3>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
            Romans rewards slow, repeated reading. Consider reading one chapter per day for 16 days, pausing at the great pivots &mdash; 3:21, 5:1, 8:1, 12:1 &mdash; and asking what Paul has argued that makes each transition possible.
          </p>
        </div>
      </main>
    </div>
  );
}
