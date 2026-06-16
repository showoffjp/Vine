"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

const overviewParagraphs: string[] = [
  "Galatians 3 is the theological heart of Paul&rsquo;s most urgent letter &mdash; a sustained argument from Scripture that justification before God comes through faith alone, not through works of the law. The Galatian churches, having received the gospel of grace, were being pressured by teachers who insisted that Gentile believers must also observe the Mosaic law &mdash; especially circumcision &mdash; in order to be fully accepted before God. Paul&rsquo;s response is not gentle correction but fierce astonishment: &ldquo;O foolish Galatians! Who has bewitched you?&rdquo; (3:1).",
  "The genius of Paul&rsquo;s argument in this chapter is that he goes behind Moses to Abraham. If the Galatian teachers wanted to appeal to the heritage of Israel, Paul could take that heritage further back than they could: to the father of the faithful himself, Abraham, whose faith was &ldquo;counted to him as righteousness&rdquo; four hundred and thirty years before the law was ever given (Genesis 15:6). If Abraham was justified by faith &mdash; not by circumcision (that came later, in Genesis 17) and certainly not by the law of Moses (which had not yet been revealed) &mdash; then the principle of faith has always been God&rsquo;s way of reckoning people righteous.",
  "Paul&rsquo;s argument unfolds in several movements. He begins experientially: the Galatians received the Holy Spirit by hearing with faith, not by works of the law. He then moves to Scripture: Abraham believed and it was counted to him as righteousness; those who are of faith are the sons of Abraham and receive the same blessing. He then establishes the curse: all who rely on works of the law stand under the curse, because no one can keep it perfectly. Into this curse Christ entered, becoming a curse for us, so that the blessing of Abraham &mdash; the gift of the Spirit by faith &mdash; might come to the Gentiles.",
  "The chapter then addresses the relationship between the Abrahamic covenant and the Mosaic law. The covenant God made with Abraham and his offspring (singular: Christ) was a promise; the law, which came 430 years later, cannot annul or add conditions to that promise. The law was added for a specific purpose &mdash; to expose and restrain transgression &mdash; and had a defined endpoint: it was our guardian until Christ came, so that we might be justified by faith. Now that faith has come, the guardian is no longer needed.",
  "The chapter culminates in one of Paul&rsquo;s most breathtaking declarations: &ldquo;There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus. And if you are Christ&rsquo;s, then you are Abraham&rsquo;s offspring, heirs according to promise&rdquo; (3:28&ndash;29). The social and ethnic distinctions that defined ancient identity are not erased but transcended: in Christ, all believers equally receive the covenant promise made to Abraham. This is not spiritual improvement on top of the old system; it is the fulfillment of what the old system was always pointing toward.",
  "Galatians 3 has been called the Magna Carta of Christian freedom. It is the chapter that Luther clung to in his Reformation breakthrough, that Calvin expounded with doctrinal precision, and that liberation theologians have read as dismantling every hierarchy based on birth or race. It is, at its core, about the nature of the gospel itself: not a system of requirements to be met but a promise to be received through faith in the One who met all the requirements on our behalf.",
];

const keyThemes: { title: string; color: string; body: string }[] = [
  {
    title: "The Galatians Bewitched: Experience as Evidence",
    color: GOLD,
    body: "Paul opens with an appeal to the Galatians&rsquo; own experience: they received the Holy Spirit by hearing with faith, not by performing works of the law (3:2&ndash;5). Miracles were worked among them by faith. This experiential argument is not anti-intellectual; it is an invitation to think theologically about what they have already seen. If God gives his Spirit through faith rather than through law-observance, then the teachers demanding law-observance are adding a condition God himself has not required. The bewitching Paul refers to is not literal magic but the seductive logic that says grace must be supplemented by human effort &mdash; a lie that has always held a strange power over human religion.",
  },
  {
    title: "Abraham&rsquo;s Faith Counted as Righteousness",
    color: GREEN,
    body: "The cornerstone of Paul&rsquo;s argument is Genesis 15:6: &ldquo;Abraham believed God, and it was counted to him as righteousness.&rdquo; Paul&rsquo;s exegesis is precise: Abraham was not justified by circumcision (Genesis 17 comes later) or by the law (which had not yet been given) but purely by faith. This means the principle of justification by faith is not a Pauline novelty but the original pattern God established with his first great covenant man. The descendants of Abraham who matter are not defined by ethnic lineage or legal observance but by sharing Abraham&rsquo;s faith. &ldquo;Those of faith are blessed along with Abraham, the man of faith&rdquo; (3:9).",
  },
  {
    title: "The Curse of the Law and Christ&rsquo;s Redemption",
    color: "#E11D48",
    body: "Paul quotes Deuteronomy 27:26 to establish that all who rely on works of the law for their standing before God are under a curse, because the law demands perfect obedience that no one delivers. He then cites Habakkuk 2:4 (&ldquo;The righteous shall live by faith&rdquo;) and Leviticus 18:5 (&ldquo;The one who does them shall live by them&rdquo;) to show that faith and law-doing are two different principles &mdash; and God&rsquo;s word associates life with faith. But the climax is christological: Christ redeemed us from the curse of the law &ldquo;by becoming a curse for us &mdash; for it is written, &lsquo;Cursed is everyone who is hanged on a tree&rsquo;&rdquo; (3:13, citing Deuteronomy 21:23). The cross is the place where Christ absorbed the covenant curse that law-breakers deserved, so that the blessing could flow freely to all who believe.",
  },
  {
    title: "The Promise to Abraham and His Offspring (Singular)",
    color: PURPLE,
    body: "Paul notices something in the Abrahamic covenant that his readers might have passed over: the promise is not to &ldquo;offsprings&rdquo; (plural) but to &ldquo;offspring&rdquo; (singular &mdash; 3:16). While the immediate referent is the nation of Israel, Paul sees the singular as ultimately pointing to Christ, the one true Seed in whom all the covenant blessings are concentrated. This means the covenant is not a general arrangement with the Jewish people but a specific promise fulfilled in and through Christ, who then distributes the covenant blessings to all who are united to him by faith. The law, which came 430 years after the promise, cannot nullify what God had already confirmed.",
  },
  {
    title: "The Law as Guardian Until Christ",
    color: "#3B82F6",
    body: "Paul uses the image of a paidagogos &mdash; a household guardian or tutor who supervised a child until the child came of age &mdash; to describe the function of the Mosaic law (3:24&ndash;25). The law was not the destination; it was the escort. It supervised Israel&rsquo;s life, revealed the depth of their sin, kept them restrained and accountable, and pointed forward to the one who would fulfill everything it required. Now that Christ has come and faith has arrived, the guardian role is complete. Believers are not under the guardian. This does not mean the law is bad (Paul says elsewhere it is &ldquo;holy, righteous, and good&rdquo;) but that it has fulfilled its supervisory function and the era of direct sonship through faith in Christ has begun.",
  },
  {
    title: "Neither Jew nor Greek: Unity in Christ",
    color: "#0D9488",
    body: "The culminating declaration of Galatians 3 is one of the most radical statements in all of ancient literature: &ldquo;There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus&rdquo; (3:28). Paul is not denying that these distinctions exist; he is declaring that they are no longer determinative of one&rsquo;s standing before God or status within the covenant community. The three pairs he names (ethnic, social, and gender distinctions) were the three defining lines of social hierarchy in the ancient world. In Christ, access to the covenant promise is equally available to all, and the community formed around that promise is radically egalitarian in its standing before God. All who are in Christ are Abraham&rsquo;s offspring and heirs of the promise.",
  },
];

const verseByVerse: { ref: string; heading: string; color: string; paras: string[] }[] = [
  {
    ref: "Galatians 3:1&ndash;5",
    heading: "O Foolish Galatians &mdash; The Spirit Received by Faith",
    color: GOLD,
    paras: [
      "Paul opens with language that is deliberately startling: &ldquo;O foolish Galatians! Who has bewitched you? It was before your eyes that Jesus Christ was publicly portrayed as crucified&rdquo; (3:1). The word &ldquo;bewitched&rdquo; (baskain&#333;) was used in the ancient world for the effect of an &ldquo;evil eye,&rdquo; a mysterious malign influence. Paul is not suggesting literal sorcery; he is saying that the teachers who have drawn the Galatians away from the gospel of grace have accomplished something almost as inexplicable, luring people away from what was clearly set before them.",
      "The evidence Paul marshals is their own experience: &ldquo;Did you receive the Spirit by works of the law or by hearing with faith?&rdquo; (3:2). He expects only one possible answer. The Galatians did not receive the Holy Spirit because they had achieved a certain level of law-observance &mdash; they received him when they heard and believed the gospel. Having started by the Spirit, are they now going to be &ldquo;perfected by the flesh&rdquo; &mdash; by human religious effort? The question is not rhetorical but diagnostic: if you began this way, how could any other way finish it?",
      "Paul grounds his appeal in the evidence of miracles: God has been working powerfully among them through the Spirit, and this happened not because they were performing the law but because of the hearing of faith (3:5). The Galatians&rsquo; very experience has been a continuous argument for justification by faith. They simply had not connected the dots. Paul&rsquo;s opening is both a rebuke and an invitation: look at what you have actually experienced, and trace it back to its source. What you received came through faith &mdash; why would you go back?",
    ],
  },
  {
    ref: "Galatians 3:6&ndash;9",
    heading: "Abraham Believed God &mdash; The Sons of Abraham by Faith",
    color: GREEN,
    paras: [
      "&ldquo;Abraham believed God, and it was counted to him as righteousness&rdquo; (3:6, quoting Genesis 15:6). This is the cornerstone verse of Paul&rsquo;s entire argument &mdash; he had already deployed it in Romans 4 &mdash; and it cuts to the heart of the matter. Abraham, the founding father of the Jewish people, the one with whom God made his first great covenant, was reckoned righteous not by circumcision (that comes in Genesis 17, fifteen years later), not by any law (which had not yet been given), but by naked faith. If the father of the faithful was justified by faith, the principle of justification by faith is not a novelty; it is the original.",
      "Paul draws out the implication with precision: &ldquo;Know then that it is those of faith who are the sons of Abraham&rdquo; (3:7). The definition of Abraham&rsquo;s family is not ethnic (descent from Abraham according to the flesh) but theological (sharing Abraham&rsquo;s faith). This does not erase ethnic Israel but it refocuses the question of belonging: who are the heirs of the Abrahamic promise? Those who share the faith of Abraham, regardless of ethnicity.",
      "Scripture foresaw that God would justify the Gentiles by faith and &ldquo;preached the gospel beforehand to Abraham, saying, &lsquo;In you shall all the nations be blessed&rsquo;&rdquo; (3:8, quoting Genesis 12:3 and 18:18). The mission to the Gentiles is not Plan B or an afterthought; it is embedded in the original Abrahamic covenant. Abraham was told that through him all nations (Gentiles) would be blessed. That blessing is now flowing through Christ to all who believe. &ldquo;So then, those who are of faith are blessed along with Abraham, the man of faith&rdquo; (3:9).",
    ],
  },
  {
    ref: "Galatians 3:10&ndash;14",
    heading: "The Curse of the Law &mdash; Christ Becomes a Curse for Us",
    color: "#E11D48",
    paras: [
      "Paul now states the negative case against law-reliance with devastating clarity: &ldquo;For all who rely on works of the law are under a curse; for it is written, &lsquo;Cursed be everyone who does not abide by all things written in the Book of the Law, and do them&rsquo;&rdquo; (3:10, quoting Deuteronomy 27:26). The logic is simple: the law demands perfect, comprehensive obedience. No one delivers it. Therefore everyone who attempts to be justified by law-keeping stands under the law&rsquo;s own verdict of curse. The law, pursued as a means of justification, condemns those who pursue it.",
      "Paul then establishes the positive principle from two other Scripture texts. Habakkuk 2:4 (&ldquo;The righteous shall live by faith&rdquo;) shows that the principle of faith is the one God associates with life. Leviticus 18:5 (&ldquo;The one who does them shall live by them&rdquo;) shows that the law&rsquo;s own principle is doing, not believing &mdash; and these are two different routes. The law&rsquo;s route, Paul implies, leads nowhere because no one can walk it all the way. Faith&rsquo;s route leads to life because it lays hold of another who has walked perfectly for us.",
      "The solution to the curse is christological: &ldquo;Christ redeemed us from the curse of the law by becoming a curse for us &mdash; for it is written, &lsquo;Cursed is everyone who is hanged on a tree&rsquo;&rdquo; (3:13, quoting Deuteronomy 21:23). This is one of the starkest statements of substitutionary atonement in the New Testament. Jesus did not merely suffer alongside us; he took our place under the law&rsquo;s verdict, bearing the curse that covenant-breakers deserve. The result: &ldquo;so that in Christ Jesus the blessing of Abraham might come to the Gentiles, so that we might receive the promised Spirit through faith&rdquo; (3:14). The whole chain &mdash; curse borne, blessing given, Spirit received &mdash; flows through faith in the crucified and risen Christ.",
    ],
  },
  {
    ref: "Galatians 3:15&ndash;18",
    heading: "The Covenant with Abraham &mdash; The Law Cannot Annul the Promise",
    color: PURPLE,
    paras: [
      "Paul now addresses a natural objection: if the law came 430 years after the Abrahamic covenant, doesn&rsquo;t that supersede the older arrangement? He answers with an analogy from human legal practice: even a human will or covenant, once ratified, cannot be set aside or added to by a later document. How much more is the covenant God made with Abraham inviolable? The law that came 430 years later &ldquo;does not annul a covenant previously ratified by God, so as to make the promise void&rdquo; (3:17). The Mosaic law was not a new covenant that replaced the Abrahamic promise; it was an addition that served a different purpose.",
      "Paul&rsquo;s observation about the grammar of Genesis is striking: &ldquo;Now the promises were made to Abraham and to his offspring. It does not say &lsquo;And to offsprings,&rsquo; referring to many, but referring to one, &lsquo;And to your offspring,&rsquo; who is Christ&rdquo; (3:16). This is typological exegesis: Paul sees in the singular &ldquo;offspring&rdquo; (zera in Hebrew, sperma in Greek) an ultimate referent that goes beyond the nation of Israel to Christ himself, the one true Seed in whom all the covenant blessings are concentrated and through union with whom they flow to all believers.",
      "The point Paul is making is theological and irreversible: God gave the inheritance to Abraham by a promise, not by law. &ldquo;For if the inheritance comes by the law, it no longer comes by promise; but God gave it to Abraham by a promise&rdquo; (3:18). You cannot mix the two systems. If salvation is by law-keeping, then God&rsquo;s promise to Abraham is irrelevant. But if it is by promise &mdash; by God&rsquo;s gracious word received through faith &mdash; then the law cannot add a requirement. The Galatian teachers were not adding an optional extra; they were dismantling the entire structure of the gospel.",
    ],
  },
  {
    ref: "Galatians 3:19&ndash;22",
    heading: "Why the Law? Added Because of Transgressions",
    color: GOLD,
    paras: [
      "Having shown what the law cannot do (justify, annul the promise), Paul asks the obvious question: &ldquo;Why then the law?&rdquo; (3:19). His answer is precise: it &ldquo;was added because of transgressions, until the offspring should come to whom the promise had been made.&rdquo; The law was not the covenant itself but a temporary addition to the covenant arrangement. Its purpose was to expose and restrain transgressions &mdash; to make the reality of sin visible and to hold it in check &mdash; during the long centuries between Abraham and Christ. It had a defined time limit: &ldquo;until the offspring should come.&rdquo;",
      "Paul notes another characteristic of the law that distinguishes it from the promise: it came through mediators. It &ldquo;was put in place through angels by an intermediary&rdquo; &mdash; Moses. But a mediator implies two parties, and two parties means a bilateral arrangement that can be broken. God&rsquo;s promise to Abraham, by contrast, was unilateral &mdash; God alone made and confirmed it. &ldquo;But God is one&rdquo; (3:20): his promise depends on no human party&rsquo;s performance. This is precisely why grace rather than law is the ground of the promise: a unilateral divine promise can never be nullified by human failure.",
      "&ldquo;Is the law then contrary to the promises of God? Certainly not!&rdquo; (3:21). Paul guards against the misreading that he is saying the law is evil or opposed to God&rsquo;s purposes. The law is good, but it was never designed to do what the promise does. &ldquo;For if a law had been given that could give life, then righteousness would indeed be by the law&rdquo; &mdash; but no such law exists. Instead, &ldquo;the Scripture imprisoned everything under sin, so that the promise by faith in Jesus Christ might be given to those who believe&rdquo; (3:22). The law&rsquo;s work of exposing and condemning sin is in the service of the promise: it clears away every basis for human confidence so that the only remaining shelter is the grace of God received through faith.",
    ],
  },
  {
    ref: "Galatians 3:23&ndash;29",
    heading: "The Law as Guardian &mdash; Sons of God Through Faith, Heirs of Abraham",
    color: "#3B82F6",
    paras: [
      "Paul now describes the era before Christ&rsquo;s coming in terms of custody and minority: &ldquo;Now before faith came, we were held captive under the law, imprisoned until the coming faith would be revealed&rdquo; (3:23). The word &ldquo;imprisoned&rdquo; is strong; the law did not merely supervise but restrained and held in custody. This was not the law as tyrant but the law as protective confinement during Israel&rsquo;s minority &mdash; keeping the covenant people from the worst consequences of sin and preserving them until the appointed time.",
      "The image shifts to one Paul&rsquo;s readers would recognize from daily life: &ldquo;So then, the law was our guardian until Christ came, in order that we might be justified by faith&rdquo; (3:24). The paidagogos was not a teacher but a household slave who accompanied the child everywhere, enforced discipline, and delivered the child safely to the schoolmaster. His job was temporary and preparatory. The law played exactly this role for Israel: not the goal of their spiritual life but the escort to it. &ldquo;But now that faith has come, we are no longer under a guardian&rdquo; (3:25). The escort has completed his task; the child has reached the schoolmaster. Returning to the escort as if Christ has not come is the theological error of the Galatian teachers.",
      "The contrast between minority and sonship is the key to everything: &ldquo;For in Christ Jesus you are all sons of God, through faith&rdquo; (3:26). Not wards under a guardian, not minors waiting for an inheritance, but sons and daughters with full standing in the household. Paul then introduces the image of baptism as the moment of putting on Christ: &ldquo;For as many of you as were baptized into Christ have put on Christ&rdquo; (3:27). To be in Christ is to wear Christ as one&rsquo;s identity &mdash; his righteousness, his standing, his inheritance.",
      "The chapter ends with its most sweeping declaration: &ldquo;There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus. And if you are Christ&rsquo;s, then you are Abraham&rsquo;s offspring, heirs according to promise&rdquo; (3:28&ndash;29). The three pairs Paul names cover the defining social divisions of the ancient Mediterranean world: ethnic (Jew and Greek), legal-economic (slave and free), and biological (male and female). In Christ, these divisions do not determine covenant standing. All are equally heirs. All are equally Abraham&rsquo;s offspring. The logic that said Gentiles needed to become Jews to enter the covenant, that certain believers were second-class members of the community, is dismantled at its root.",
    ],
  },
];

const applicationItems: { title: string; color: string; body: string }[] = [
  {
    title: "Resting in Justification by Faith",
    color: GREEN,
    body: "The experiential question Paul asks the Galatians is exactly the right question for us: by what means did you receive the Spirit? Every genuine Christian can trace their reception of the Spirit to a moment or season of faith, not to a religious performance. The application is rest. We do not improve our standing before God by adding law-keeping to faith; our standing is the righteousness of Christ, received through union with him. The chronic anxiety of trying to be accepted by God through effort is the same &ldquo;bewitching&rdquo; Paul confronted in Galatia. Bring your performance anxiety back to the foot of the cross and to the empty tomb. The verdict &ldquo;justified&rdquo; is already in. Live from that verdict rather than toward it.",
  },
  {
    title: "Understanding the Law&rsquo;s Role in Leading Us to Christ",
    color: GOLD,
    body: "Paul&rsquo;s image of the law as a paidagogos &mdash; guardian, escort, tutor &mdash; is liberating for Bible readers who sometimes feel that the Old Testament law is a burden or an obstacle. The law was never designed to be the final word; it was always pointing forward to Christ. When you read the commands and realize you cannot keep them, the law is doing its work: exposing your need for a Savior. When you see the sacrifices and the tabernacle and ask &ldquo;what do these point to?&rdquo; the law is doing its work: directing your gaze toward the one true sacrifice and the one true dwelling of God. The law is a gift because it is a guardian that delivers us safely to Jesus.",
  },
  {
    title: "Living as Children of Abraham by Faith",
    color: PURPLE,
    body: "One of the most personally significant truths in Galatians 3 is that Gentile believers are heirs of the Abrahamic covenant. You may have no ethnic connection to Abraham, no Jewish heritage, no history with the Torah. But if you are in Christ by faith, you are Abraham&rsquo;s offspring and an heir of the promise God made to him &mdash; the promise that through his seed all nations would be blessed. This means the whole sweep of God&rsquo;s redemptive history is your story. The God of Abraham is your God. His covenant faithfulness is the ground of your confidence. You are not a spiritual orphan attached to an alien heritage; you are a child of Abraham, grafted into the oldest family on earth by the grace of God and the faith you have been given.",
  },
  {
    title: "The Unity of All Believers in Christ",
    color: "#0D9488",
    body: "The declaration that there is neither Jew nor Greek, slave nor free, male nor female in Christ (3:28) has radical implications for the life of the church. Every form of hierarchy based on ethnicity, social status, or gender that affects how we receive one another and value one another&rsquo;s contributions to the community is at odds with the gospel. This does not mean differences vanish or that there are no distinct roles; it means those differences do not determine covenant standing or access to the inheritance. Every member of the body of Christ is equally an heir, equally a child of Abraham, equally clothed in Christ. Churches that reflect this in their practice &mdash; where all are genuinely welcomed and honored regardless of background &mdash; are living embodiments of Galatians 3:28.",
  },
  {
    title: "Guarding Against the Subtle Return to Law",
    color: "#E11D48",
    body: "Paul&rsquo;s alarm about the Galatians applies to patterns we can slip into without noticing. The return to law rarely looks like someone announcing: &ldquo;We are abandoning grace.&rdquo; It usually looks like a quiet accumulation of requirements: you must pray a certain amount, give a certain percentage, attend a certain number of times, achieve a certain moral track record before you can feel confident in your standing with God. Each requirement may be good in itself; the error is making it a condition of acceptance rather than a fruit of grace already given. Regular examination of what actually gives you assurance before God &mdash; is it Christ&rsquo;s work or yours? &mdash; is the kind of spiritual vigilance Galatians 3 calls for.",
  },
  {
    title: "Praying the Promise: Claiming Your Inheritance in Christ",
    color: "#3B82F6",
    body: "The concept of inheritance in Galatians 3 is not merely legal &mdash; it is personal and devotional. If you are Abraham&rsquo;s offspring, you are an heir. Heirs do not earn what they receive; they receive what their Father has promised. A practice suggested by this chapter is prayer that consciously claims the covenant promises as your own. Not a formalistic claiming, but a humble reception: &ldquo;Lord, you have promised your Spirit to those who believe, and I believe. You have promised the blessing of Abraham to those who are in Christ, and I am in Christ. I receive what you have promised, not on the basis of my performance but on the basis of your word.&rdquo; This is faith as Paul means it: resting the entire weight of your life on the Word and work of God.",
  },
];

const videoItems = [
  { videoId: "ZtSB8N3QToM", title: "Galatians 3 - Justification by Faith Alone Explained" },
  { videoId: "tA3wNMPKy8Y", title: "Abraham and the Covenant - Galatians 3 Deep Study" },
  { videoId: "Rx9MFG9q08Y", title: "The Law as Guardian Until Christ - Galatians 3:23-29" },
  { videoId: "bqJNFJgGMKM", title: "Neither Jew Nor Greek - Unity in Christ from Galatians 3" },
];

export default function Galatians3GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [activeVerseIdx, setActiveVerseIdx] = useState(0);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const currentVerse = verseByVerse[activeVerseIdx];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>

        {/* Page header */}
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${GREEN}22`, color: GREEN, borderRadius: 6, padding: "4px 14px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 18 }}>
            Pauline Letters &mdash; New Testament
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.1rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.12 }}>
            Galatians 3
          </h1>
          <p
            style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.75, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "The theological heart of Galatians &mdash; Paul&rsquo;s argument from Abraham that justification is by faith alone, the curse of the law redeemed by Christ, the law as guardian until Christ, and the declaration that all believers are one in Christ Jesus, heirs according to the promise." }}
          />
        </header>

        {/* Tab navigation */}
        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActiveTab(t)}
              style={{
                padding: "9px 18px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? GREEN : BORDER}`,
                background: activeTab === t ? GREEN : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {/* OVERVIEW TAB */}
        {activeTab === "Overview" && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Overview of Galatians 3" }} />
            </div>
            <div
              style={{ color: GREEN, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }}
              dangerouslySetInnerHTML={{ __html: "Galatians 3:1&ndash;29" }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
              {overviewParagraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>

            {/* Quick reference box */}
            <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.15rem" }} dangerouslySetInnerHTML={{ __html: "At a Glance: The Structure of Galatians 3" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { ref: "vv. 1&ndash;5", label: "The experiential argument &mdash; the Spirit received by faith, not law" },
                  { ref: "vv. 6&ndash;9", label: "The scriptural argument &mdash; Abraham justified by faith; the blessing to the nations" },
                  { ref: "vv. 10&ndash;14", label: "The curse of the law &mdash; Christ becomes a curse for us; blessing to the Gentiles" },
                  { ref: "vv. 15&ndash;18", label: "The historical argument &mdash; the promise cannot be annulled by the law 430 years later" },
                  { ref: "vv. 19&ndash;22", label: "The purpose of the law &mdash; added because of transgressions; Scripture imprisons everything under sin" },
                  { ref: "vv. 23&ndash;29", label: "The era of faith &mdash; the law as guardian; now sons of God, heirs of Abraham" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span
                      style={{ background: `${GREEN}20`, color: GREEN, borderRadius: 5, padding: "2px 9px", fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2 }}
                      dangerouslySetInnerHTML={{ __html: item.ref }}
                    />
                    <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.label }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Context callout */}
            <div style={{ marginTop: "1.5rem", background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
              <h4 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 0.6rem", fontSize: "1rem" }} dangerouslySetInnerHTML={{ __html: "Why Galatians Is Paul&rsquo;s Most Urgent Letter" }} />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Unlike letters written from prison with measured theological reflection, Galatians was written in a state of genuine alarm. False teachers had followed in Paul&rsquo;s footsteps and persuaded the Galatian churches that faith in Christ was not sufficient &mdash; that the Mosaic law must be added. Paul saw this not as a minor disagreement but as &ldquo;a different gospel, which is really no gospel at all&rdquo; (1:6&ndash;7). The stakes of chapter 3 are nothing less than the nature of the gospel itself." }}
              />
            </div>
          </section>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "Key Themes" && (
          <section>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0 0 0.5rem" }} dangerouslySetInnerHTML={{ __html: "Key Themes in Galatians 3" }} />
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}
              dangerouslySetInnerHTML={{ __html: "Six major theological threads run through this chapter, each one essential to understanding Paul&rsquo;s argument and its implications for Christian faith and community." }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {keyThemes.map((theme, i) => (
                <div
                  key={i}
                  style={{ background: CARD, border: `1px solid ${theme.color}30`, borderRadius: 12, padding: "1.6rem 1.75rem" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "0.85rem" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: theme.color, flexShrink: 0 }} />
                    <h3
                      style={{ color: theme.color, fontWeight: 700, fontSize: "1.05rem", margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: theme.title }}
                    />
                  </div>
                  <p
                    style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: theme.body }}
                  />
                </div>
              ))}
            </div>

            {/* Cross-reference callout */}
            <div style={{ marginTop: "2rem", background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
              <h4 style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1rem" }} dangerouslySetInnerHTML={{ __html: "Key Cross-References" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  { ref: "Genesis 15:6", note: "Abraham believed God, and it was counted to him as righteousness &mdash; the foundational text of the whole argument" },
                  { ref: "Deuteronomy 27:26", note: "Cursed be everyone who does not abide by all things written in the Book of the Law &mdash; the basis for Paul&rsquo;s curse argument" },
                  { ref: "Habakkuk 2:4", note: "The righteous shall live by faith &mdash; the principle that underlies all of Paul&rsquo;s gospel proclamation" },
                  { ref: "Deuteronomy 21:23", note: "Cursed is everyone who is hanged on a tree &mdash; applied by Paul to Christ&rsquo;s crucifixion as curse-bearing" },
                  { ref: "Romans 4", note: "Paul&rsquo;s fullest exposition of Abraham&rsquo;s faith, developing the same Genesis 15:6 argument at greater length" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span style={{ background: `${GOLD}20`, color: GOLD, borderRadius: 4, padding: "1px 8px", fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2 }} dangerouslySetInnerHTML={{ __html: item.ref }} />
                    <p style={{ color: MUTED, fontSize: 13, margin: 0, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.note }} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "Verse by Verse" && (
          <section>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0 0 0.5rem" }} dangerouslySetInnerHTML={{ __html: "Verse by Verse: Galatians 3" }} />
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.75rem" }}
              dangerouslySetInnerHTML={{ __html: "A close reading of each major passage in Galatians 3, section by section, with attention to Paul&rsquo;s argument, his use of the Old Testament, and the theological stakes of each move." }}
            />

            {/* Section selector */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2rem" }}>
              {verseByVerse.map((v, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveVerseIdx(i)}
                  style={{
                    padding: "7px 14px",
                    borderRadius: 8,
                    border: `1px solid ${activeVerseIdx === i ? v.color : BORDER}`,
                    background: activeVerseIdx === i ? `${v.color}18` : CARD,
                    color: activeVerseIdx === i ? v.color : MUTED,
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: "inherit",
                  }}
                  dangerouslySetInnerHTML={{ __html: v.ref }}
                />
              ))}
            </div>

            {/* Current section */}
            <div style={{ background: CARD, border: `1px solid ${currentVerse.color}30`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <div
                style={{ color: currentVerse.color, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.6rem" }}
                dangerouslySetInnerHTML={{ __html: currentVerse.ref }}
              />
              <h3
                style={{ color: TEXT, fontWeight: 700, fontSize: "1.3rem", margin: "0 0 1.5rem" }}
                dangerouslySetInnerHTML={{ __html: currentVerse.heading }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {currentVerse.paras.map((para, i) => (
                  <p
                    key={i}
                    style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.025rem", lineHeight: 1.85, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>
            </div>

            {/* Navigation between sections */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1.5rem", gap: 12 }}>
              <button
                type="button"
                onClick={() => setActiveVerseIdx((i) => Math.max(0, i - 1))}
                disabled={activeVerseIdx === 0}
                style={{
                  padding: "10px 20px",
                  borderRadius: 8,
                  border: `1px solid ${BORDER}`,
                  background: activeVerseIdx === 0 ? "transparent" : CARD,
                  color: activeVerseIdx === 0 ? BORDER : MUTED,
                  cursor: activeVerseIdx === 0 ? "default" : "pointer",
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "inherit",
                }}
                dangerouslySetInnerHTML={{ __html: activeVerseIdx === 0 ? "&larr; First section" : `&larr; ${verseByVerse[activeVerseIdx - 1].ref}` }}
              />
              <button
                type="button"
                onClick={() => setActiveVerseIdx((i) => Math.min(verseByVerse.length - 1, i + 1))}
                disabled={activeVerseIdx === verseByVerse.length - 1}
                style={{
                  padding: "10px 20px",
                  borderRadius: 8,
                  border: `1px solid ${activeVerseIdx === verseByVerse.length - 1 ? BORDER : GREEN}`,
                  background: activeVerseIdx === verseByVerse.length - 1 ? "transparent" : `${GREEN}15`,
                  color: activeVerseIdx === verseByVerse.length - 1 ? BORDER : GREEN,
                  cursor: activeVerseIdx === verseByVerse.length - 1 ? "default" : "pointer",
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "inherit",
                }}
                dangerouslySetInnerHTML={{ __html: activeVerseIdx === verseByVerse.length - 1 ? "Last section &rarr;" : `${verseByVerse[activeVerseIdx + 1].ref} &rarr;` }}
              />
            </div>
          </section>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "Application" && (
          <section>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0 0 0.5rem" }} dangerouslySetInnerHTML={{ __html: "Application: Living Galatians 3" }} />
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}
              dangerouslySetInnerHTML={{ __html: "Galatians 3 is not primarily a theological puzzle to be solved but a word to be lived. How does the truth that justification is by faith, that we are heirs of Abraham, and that all believers are one in Christ change the way we pray, relate to God, and treat one another?" }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {applicationItems.map((item, i) => (
                <div
                  key={i}
                  style={{ background: CARD, border: `1px solid ${item.color}28`, borderRadius: 12, padding: "1.6rem 1.75rem" }}
                >
                  <h3
                    style={{ color: item.color, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p
                    style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>

            {/* Summary callout */}
            <div style={{ marginTop: "2.25rem", background: `${GREEN}0e`, border: `1px solid ${GREEN}35`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.15rem" }} dangerouslySetInnerHTML={{ __html: "The Freedom for Which Christ Set Us Free" }} />
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: 14 }}
                dangerouslySetInnerHTML={{ __html: "Galatians 3 is the doctrinal backbone of Galatians 5:1 &mdash; &ldquo;For freedom Christ has set us free; stand firm therefore, and do not submit again to a yoke of slavery.&rdquo; The freedom Paul speaks of is not moral license but freedom from the exhausting, impossible project of earning your standing before God through religious performance. You are an heir, not a worker trying to earn wages. You are a child, not a slave trying to buy freedom. You are Abraham&rsquo;s offspring by faith, not by ethnic origin or religious achievement." }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: 14 }}
                dangerouslySetInnerHTML={{ __html: "The practical implication is immense: serve God from the joy of an heir rather than the anxiety of a probationer. Give because you have been given to, not to earn God&rsquo;s favor. Love your neighbor not as a religious duty that might contribute to your justification but as the natural overflow of someone who has been justified freely by the grace of God. This is the life that Galatians 3 makes possible." }}
              />
            </div>
          </section>
        )}

        {/* Video section - always visible below tabs */}
        <div style={{ marginTop: "3.5rem" }}>
          <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.5rem" }} dangerouslySetInnerHTML={{ __html: "Video Teaching on Galatians 3" }} />
            <p
              style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, margin: "0 0 1.75rem" }}
              dangerouslySetInnerHTML={{ __html: "Deepen your study of Galatians 3 through video teaching on justification by faith, the Abrahamic covenant, the purpose of the law, and the unity of all believers in Christ Jesus." }}
            />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer callout */}
        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${PURPLE}40`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.15rem" }} dangerouslySetInnerHTML={{ __html: "Heirs According to Promise" }} />
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: 14 }}
            dangerouslySetInnerHTML={{ __html: "The last verse of Galatians 3 is its trumpet note: &ldquo;And if you are Christ&rsquo;s, then you are Abraham&rsquo;s offspring, heirs according to promise&rdquo; (3:29). Everything in this chapter &mdash; the argument from experience, the argument from Abraham, the curse borne by Christ, the law&rsquo;s guardian role, and the unity of all in Christ &mdash; flows into this single declaration. If you believe in Jesus Christ, you are an heir. The entire inheritance of God&rsquo;s covenant promise, confirmed to Abraham and fulfilled in Christ, is yours. Not because of who you are or what you have done, but because of whose you are." }}
          />
        </div>
      </main>
    </div>
  );
}
