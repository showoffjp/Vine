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
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

const videoItems = [
  { videoId: "Nd3RmBRDzMw", title: "1 Timothy 2 &mdash; Prayer for All People and Women in Worship" },
  { videoId: "TiXcKqJH-lI", title: "One Mediator Between God and Men &mdash; 1 Timothy 2:5" },
  { videoId: "5hxJCzAzgDs", title: "Women in the Church &mdash; Complementarian and Egalitarian Views" },
  { videoId: "kFpA6kQhKaM", title: "God Desires All People to Be Saved &mdash; 1 Timothy 2:4" },
];

const overviewParagraphs: string[] = [
  "First Timothy 2 is one of the most theologically rich and exegetically contested chapters in the New Testament. Written by the apostle Paul to his young associate Timothy, who was overseeing the church at Ephesus, it moves from the broadest possible vision of intercessory prayer &mdash; encompassing all people and all rulers &mdash; to the most debated question in the chapter: the role of women in public worship.",
  "The chapter opens with an urgent call to prayer that is rooted in the character of God himself. Paul urges that &ldquo;supplications, prayers, intercessions, and thanksgivings be made for all people&rdquo; (2:1). This is not a pious suggestion but a theological imperative: the universality of prayer flows from the universal saving will of God, who &ldquo;desires all people to be saved and to come to the knowledge of the truth&rdquo; (2:4). Prayer for kings and those in authority is not political pragmatism &mdash; it is a theological act grounded in God&rsquo;s desire for all humanity.",
  "At the center of the chapter stands one of the most compressed and powerful Christological statements in the Pauline corpus: &ldquo;For there is one God, and there is one mediator between God and men, the man Christ Jesus, who gave himself as a ransom for all&rdquo; (2:5&ndash;6). The singularity of the mediator corresponds to the singularity of God. Just as there is only one God, there is only one way to that God &mdash; through Christ alone, who bridged the gap between a holy God and sinful humanity by giving himself as a substitutionary ransom.",
  "The second half of the chapter gives instructions for ordered worship. Men are to pray &ldquo;lifting holy hands without anger or quarreling&rdquo; (2:8) &mdash; the disposition of the worshipper matters as much as the act of worship. Women are to adorn themselves in &ldquo;respectable apparel&rdquo; (2:9), with the emphasis falling not on external appearance but on the adornment of good works and godliness (2:10).",
  "Verses 11&ndash;15 have generated more scholarly debate than almost any other passage in the Pauline letters. Paul says a woman is to &ldquo;learn quietly with all submissiveness&rdquo; and that he does not permit a woman &ldquo;to teach or to exercise authority over a man&rdquo; (2:12). The grounding in creation order &mdash; Adam was formed first, then Eve, and Eve was deceived &mdash; has led complementarians to see this as a trans-cultural principle. Egalitarians, by contrast, read the passage as responding to a specific situation of false teaching in Ephesus, where women may have been propagating error. Both readings take the text seriously; both deserve careful engagement.",
  "What is beyond dispute is this: 1 Timothy 2 calls every Christian &mdash; every man and every woman &mdash; to a life of prayer for all people, to confidence in the one mediator Christ Jesus, and to worship conducted with holiness, humility, and genuine godliness. The chapter is not primarily about restriction; it is primarily about the beauty and order of the gathered people of God before their Savior.",
];

const themeItems = [
  {
    color: GOLD,
    title: "Prayer for All People",
    paragraphs: [
      "The chapter opens with a remarkable breadth: &ldquo;I urge that supplications, prayers, intercessions, and thanksgivings be made for all people&rdquo; (2:1). Paul uses four distinct Greek words for prayer &mdash; deeseis (urgent requests), proseuchas (general prayer), enteuxeis (intercessions, drawing near to plead), and eucharistias (thanksgiving) &mdash; suggesting that the fullness of prayer&rsquo;s dimensions should be brought to bear on behalf of all humanity.",
      "The specific command to pray for &ldquo;kings and all who are in high positions&rdquo; (2:2) is striking in its historical context. The Roman emperor and local magistrates were not Christians and sometimes actively persecuted the church. Yet Paul does not call for political activism or withdrawal from society; he calls for prayer. The goal is not merely political convenience (&ldquo;that we may lead a peaceful and quiet life&rdquo;) but a context in which the gospel can be proclaimed and received.",
      "The deepest reason for praying for all people is theological: &ldquo;This is good, and it is pleasing in the sight of God our Savior, who desires all people to be saved and to come to the knowledge of the truth&rdquo; (2:3&ndash;4). Prayer for all is good because God wills the salvation of all. The church&rsquo;s intercession is an alignment with the saving will of God himself. We pray for all because God loves all and gave his Son for all.",
    ],
  },
  {
    color: TEAL,
    title: "The One Mediator",
    paragraphs: [
      "&ldquo;For there is one God, and there is one mediator between God and men, the man Christ Jesus&rdquo; (2:5). The logic is precise: monotheism demands a single mediator. If there is one God, and if humanity needs access to that God, there can only be one way to that God. The exclusivity of Christ is not religious imperialism; it is the logical consequence of monotheism and the uniqueness of the incarnation.",
      "The title &ldquo;mediator&rdquo; (mesites) is drawn from covenant language. A mediator stands between two parties to reconcile them. Christ stands between the holy God and sinful humanity, not as a neutral arbitrator but as the one who takes on himself the barrier between them. He is &ldquo;the man Christ Jesus&rdquo; &mdash; the humanity of Christ is foregrounded, emphasizing that the mediator shares fully in both the divine and human sides of the divide he bridges.",
      "&ldquo;Who gave himself as a ransom for all&rdquo; (2:6) connects directly to the Lord&rsquo;s own words in Mark 10:45: &ldquo;The Son of Man came not to be served but to serve, and to give his life as a ransom for many.&rdquo; The word antilutron (ransom, substitute) carries the force of substitution &mdash; Christ gave himself in the place of those who were enslaved to sin and death. The scope is &ldquo;for all&rdquo; &mdash; his death was sufficient for the sins of all humanity, an expression of the universal saving will of God stated in verse 4.",
    ],
  },
  {
    color: PURPLE,
    title: "The Disposition of Worship",
    paragraphs: [
      "Paul gives attention not merely to the content of worship but to the interior disposition of the worshipper. &ldquo;I desire that in every place the men should pray, lifting holy hands without anger or quarreling&rdquo; (2:8). The lifting of hands was a common posture of ancient prayer; what Paul emphasizes is that the hands must be &ldquo;holy&rdquo; &mdash; clean, set apart, unclouded by unresolved sin or relational hostility.",
      "The twin qualifications &mdash; &ldquo;without anger or quarreling&rdquo; &mdash; address the social dimension of prayer. Prayer is not merely a private vertical act; it is embedded in community life. The man who comes to pray while nursing resentment or engaging in dispute undermines the very nature of worship, which is to draw near to a God of love and peace. This echoes the teaching of Jesus in Matthew 5:23&ndash;24: if you are offering your gift and remember that your brother has something against you, leave the gift and be reconciled first.",
      "For women, the call is to &ldquo;adorn themselves in respectable apparel, with modesty and self-control&rdquo; (2:9). The contrast is not between attractive and unattractive dress but between dress that calls attention to the self and the posture of godliness. The true adornment, Paul says, is &ldquo;good works&rdquo; (2:10) &mdash; a visible life of love and service that reflects the character of the God who is worshipped. The outward and inward are consistent: the person who truly worships God in spirit and truth will bear fruit in visible deeds of goodness.",
    ],
  },
  {
    color: ROSE,
    title: "Women, Teaching, and Authority (vv. 11&ndash;15)",
    paragraphs: [
      "No passage in 1 Timothy &mdash; perhaps in all of Paul&rsquo;s letters &mdash; has generated more careful scholarly debate than verses 11&ndash;15. Paul writes: &ldquo;Let a woman learn quietly with all submissiveness. I do not permit a woman to teach or to exercise authority over a man; she is to remain quiet&rdquo; (2:11&ndash;12). The instruction is grounded in creation order: &ldquo;For Adam was formed first, then Eve; and Adam was not deceived, but the woman was deceived and became a transgressor&rdquo; (2:13&ndash;14).",
      "Complementarians argue that the creation-order grounding makes this a trans-cultural, universal principle rather than a response to a local situation. Just as in 1 Corinthians 11 Paul grounds head-coverings in creation theology, here he grounds the restriction on women teaching men in the fact that Adam was formed first. This order, they argue, reflects a God-designed pattern of authority within the community of God&rsquo;s people that predates the fall.",
      "Egalitarians counter by noting the specific Ephesian context: the false teaching that Paul combats throughout 1 Timothy (1:3&ndash;7; 4:1&ndash;5; 6:3&ndash;5) seems to have involved women as primary conduits. Some scholars read &ldquo;authentein&rdquo; (often translated &ldquo;exercise authority&rdquo;) as referring to a domineering or abusive kind of authority, not authority as such, and argue that Paul&rsquo;s restriction applies to this specific misuse. They also note that Paul elsewhere speaks positively of women who prophesy (1 Cor 11:5), who serve as deacons (Rom 16:1), and who are co-workers in the gospel (Phil 4:2&ndash;3).",
      "Verse 15 &mdash; &ldquo;Yet she will be saved through childbearing&rdquo; &mdash; is among the most contested verses in the NT. Interpretations range from a reference to Mary&rsquo;s bearing of the Messiah (salvation came through a woman giving birth to Christ) to a reference to women being preserved through the experience of childbirth (countering false ascetic teaching about marriage and childbearing in Ephesus) to a reference to women being saved eschatologically as they faithfully inhabit their domestic callings. Scholarly humility is appropriate: the verse resists easy resolution. What is clear is that women are not excluded from salvation; the passage ends on a note of hope, not condemnation.",
      "Christians of good faith and deep love for Scripture have read these verses differently. Both complementarian and egalitarian readers seek to honor the authority of God&rsquo;s Word; they differ on how the passage&rsquo;s specific instructions apply across culture and time. The church is enriched by careful, humble dialogue on these questions, guided always by the full witness of Scripture and a deep commitment to the dignity and gifting of all image-bearers.",
    ],
  },
];

const verseByVerse: { ref: string; color: string; heading: string; paragraphs: string[] }[] = [
  {
    ref: "2:1&ndash;4",
    color: GOLD,
    heading: "Supplications for All People &mdash; God Desires All to Be Saved",
    paragraphs: [
      "&ldquo;First of all, then, I urge that supplications, prayers, intercessions, and thanksgivings be made for all people, for kings and all who are in high positions, that we may lead a peaceful and quiet life, godly and dignified in every way. This is good, and it is pleasing in the sight of God our Savior, who desires all people to be saved and to come to the knowledge of the truth.&rdquo; (1 Tim 2:1&ndash;4)",
      "The phrase &ldquo;first of all&rdquo; signals that what follows is primary &mdash; prayer is not supplementary to the church&rsquo;s mission but foundational to it. The fourfold vocabulary of prayer (supplications, prayers, intercessions, thanksgivings) comprehends the whole range of approach to God: urgent personal need, general adoration, intercessory pleading, and grateful acknowledgment. No dimension of prayer is omitted.",
      "Praying for kings in the first century was a concrete act of faith. Under Nero and later emperors, Roman authority could mean persecution. Yet Paul does not hedge: pray for them. The goal of political peace is not a worldly concession but a missional vision &mdash; peaceful conditions allow the gospel to be proclaimed and received. The wider evangelistic aim is always present.",
      "&ldquo;God our Savior, who desires all people to be saved&rdquo; &mdash; this is one of the clearest statements in the NT of God&rsquo;s universal saving will. Theologians have long distinguished between God&rsquo;s &ldquo;decretive will&rdquo; (what God has sovereignly ordained) and his &ldquo;preceptive will&rdquo; or &ldquo;will of desire&rdquo; (what God desires in terms of what is good and right). This verse speaks of a genuine divine desire for the salvation of all people; the mystery of how this relates to divine sovereignty and human election has occupied theologians for centuries. What is not in dispute is that the passage grounds comprehensive prayer in a comprehensive divine compassion.",
    ],
  },
  {
    ref: "2:5&ndash;7",
    color: TEAL,
    heading: "One God, One Mediator, One Ransom",
    paragraphs: [
      "&ldquo;For there is one God, and there is one mediator between God and men, the man Christ Jesus, who gave himself as a ransom for all, which is the testimony given at the proper time. For this I was appointed a preacher and an apostle (I am telling the truth, I am not lying), a teacher of the Gentiles in faith and truth.&rdquo; (1 Tim 2:5&ndash;7)",
      "The particle &ldquo;for&rdquo; ties verses 5&ndash;7 directly to the preceding call to pray for all people. The reason we pray for all is that there is one God who made all, and one mediator through whom all may come to that God. Monotheism and the universality of the gospel are inseparable. If there are many gods and many ways, the church has no mandate to preach to all; but if there is one God and one mediator, then the church must reach all.",
      "The description of Christ as &ldquo;the man Christ Jesus&rdquo; has Christological density. Against any docetic tendency to deny the full humanity of Christ, Paul insists on his humanity as essential to his mediatorial work. The mediator must share in the nature of both parties; Christ is fully God (the &ldquo;one God&rdquo; of v.5 encompasses him) and fully man (&ldquo;the man Christ Jesus&rdquo;). His humanity is not a temporary accommodation but the permanent nature of the incarnate Son.",
      "&ldquo;Who gave himself as a ransom for all&rdquo; &mdash; the word antilutron appears only here in the NT. It carries the force of a substitutionary payment: Christ gave himself over, in our place, paying the debt we could not pay. The scope &ldquo;for all&rdquo; (huper panton) corresponds precisely to &ldquo;all people&rdquo; in verses 1 and 4, forming a theological arc: God desires all to be saved (v.4), the ransom was given for all (v.6), therefore pray for all (v.1). The atonement is the basis of evangelistic confidence.",
      "Paul briefly defends his apostolic calling &mdash; appointed &ldquo;a preacher and an apostle&rdquo; &mdash; and insists on his truthfulness with notable vehemence (&ldquo;I am telling the truth, I am not lying&rdquo;). This suggests that his authority was being questioned at Ephesus, likely by those spreading the false teaching he addresses throughout the letter. His mission to the Gentiles is not self-appointed but divinely ordained.",
    ],
  },
  {
    ref: "2:8",
    color: BLUE,
    heading: "Men: Holy Hands Without Anger or Quarreling",
    paragraphs: [
      "&ldquo;I desire that in every place the men should pray, lifting holy hands without anger or quarreling.&rdquo; (1 Tim 2:8)",
      "The word translated &ldquo;men&rdquo; here is andras &mdash; male men specifically, not generic humanity (anthropoi). Paul is giving a specific instruction to the male members of the congregation regarding their posture and interior disposition in prayer. The lifting of hands was the common posture of prayer in the ancient world (cf. Ps 28:2; 134:2; 141:2) &mdash; arms extended upward, palms open, in a posture of petition and dependence.",
      "The qualifier &ldquo;holy hands&rdquo; is the key: not merely the physical gesture but the moral condition of the one who gestures. Isaiah 1:15&ndash;17 speaks of God refusing to hear prayers when the worshipper&rsquo;s hands are covered in blood &mdash; not literal murder but the moral filth of injustice and sin. Holy hands are hands dedicated to God and to his ways. The man who comes to pray while harboring sin or relational hostility prays with unclean hands.",
      "&ldquo;Without anger or quarreling&rdquo; targets the specific social vices that were apparently disrupting the Ephesian congregation. Anger (orge) and quarreling (dialogismou &mdash; literally, &ldquo;disputings&rdquo; or &ldquo;contentions&rdquo;) fracture the community of the church and are incompatible with genuine prayer. The man who quarrels with his brother cannot genuinely intercede for that brother &mdash; and cannot genuinely approach a God of reconciliation with an unreconciled heart.",
    ],
  },
  {
    ref: "2:9&ndash;10",
    color: GREEN,
    heading: "Women: Modest Dress and Good Works",
    paragraphs: [
      "&ldquo;Likewise also that women should adorn themselves in respectable apparel, with modesty and self-control, not with braided hair and gold or pearls or costly attire, but with what is proper for women who profess godliness &mdash; with good works.&rdquo; (1 Tim 2:9&ndash;10)",
      "The word &ldquo;likewise&rdquo; connects this instruction to the preceding one about men, suggesting a parallel structure: as men are to bring a certain interior disposition to prayer, women are to bring a certain outward and inward demeanor to the gathered assembly. The instruction is not primarily about fashion; it is about where a woman&rsquo;s emphasis lies when she enters worship.",
      "Braided hair, gold, pearls, and costly clothing were markers of wealth and social status in the Greco-Roman world. Women of high social standing in Ephesus would have used elaborate hairstyles and expensive jewelry to display their rank. Paul is not condemning beauty or even all adornment; he is challenging the use of the gathered worship service as a venue for social display and status competition.",
      "The positive counterpart is revealing: the proper adornment for a woman who professes godliness is &ldquo;good works.&rdquo; Her beauty is to be visible in her love for others, her service to the community, her care for the needy. This is not merely a metaphor &mdash; visible acts of goodness are the clothing that befits a worshipper of the God who is love. The outer and inner are inseparable: what one wears to church reflects what one treasures.",
    ],
  },
  {
    ref: "2:11&ndash;15",
    color: ROSE,
    heading: "Women, Learning, Teaching, and Salvation",
    paragraphs: [
      "&ldquo;Let a woman learn quietly with all submissiveness. I do not permit a woman to teach or to exercise authority over a man; she is to remain quiet. For Adam was formed first, then Eve; and Adam was not deceived, but the woman was deceived and became a transgressor. Yet she will be saved through childbearing &mdash; if they continue in faith and love and holiness, with self-control.&rdquo; (1 Tim 2:11&ndash;15)",
      "The command that &ldquo;a woman learn quietly&rdquo; is, in its first-century context, actually an affirmation of women&rsquo;s full participation in theological education. In many Jewish contexts, women were not taught Torah at all; here Paul insists that women should indeed learn. The manner of learning &mdash; &ldquo;quietly&rdquo; (hesychia) and &ldquo;with all submissiveness&rdquo; &mdash; is the contested part. The word hesychia can mean silence or quietness; it is the same word used in verse 2 of the &ldquo;peaceful and quiet life.&rdquo; It may not refer to total vocal silence but to a calm, receptive, un-disruptive spirit.",
      "Verse 12 is the crux: &ldquo;I do not permit a woman to teach or to exercise authority over a man.&rdquo; Three exegetical questions dominate the discussion. First, is this prescriptive (a universal principle) or descriptive (a temporary directive for Ephesus)? Second, what does &ldquo;authentein&rdquo; (authority) mean &mdash; legitimate authority, or something more aggressive and domineering? Third, how do these verses relate to other Pauline texts that appear to affirm women in leadership roles (e.g., Phoebe as deacon in Rom 16:1; Priscilla as teacher in Acts 18:26; Junia as notable among the apostles in Rom 16:7)?",
      "The appeal to creation order in verses 13&ndash;14 is often understood by complementarians as the decisive signal that Paul is not merely addressing a local situation. The creation narrative is invoked, not the Ephesian situation. Adam being formed first is not a statement of his superiority but of his sequence and the corresponding responsibility that accompanies it. Eve&rsquo;s deception, egalitarians note, might equally refer to the specific deception by false teachers that Paul is combating in Ephesus, where women appear to have been particularly targeted (cf. 2 Tim 3:6&ndash;7).",
      "Verse 15 has no simple interpretation. &ldquo;Saved through childbearing&rdquo; can be read as: (a) salvation comes through the childbearing of Mary, through whom the Savior came; (b) women are not condemned to spiritual second-class status because of Eve&rsquo;s transgression &mdash; they participate fully in salvation while faithfully living out their callings, including motherhood; (c) the false teaching in Ephesus may have forbidden marriage and childbearing (1 Tim 4:3), and Paul affirms that women are not saved by celibacy but through ordinary faithful life including bearing children. The shift to the plural (&ldquo;if they continue&rdquo;) may apply the promise to women in general. What is clear is that salvation is not denied to women; the verse ends on a note of hopeful inclusion, not restriction.",
    ],
  },
];

const applicationParagraphs: string[] = [
  "First Timothy 2 is not merely a chapter to study &mdash; it is a chapter to live. Its primary movement is from the character of God to the life of the worshipper, and it challenges us at every point with the question: does my life reflect what I claim to believe about this God?",
  "The call to pray for all people, including kings and governments, is a call to break out of the natural human tendency to pray within our own tribe. We pray for those who share our politics, our ethnicity, our social circle. Paul calls us to a discipline of prayer that stretches beyond comfortable categories &mdash; to pray for leaders we disagree with, for nations we do not belong to, for people who may be hostile to the gospel. This is not naivety; it is theology. Because God desires all people to be saved, the praying community aligns itself with that divine desire by interceding for all.",
  "The confession of &ldquo;one mediator between God and men, the man Christ Jesus&rdquo; is both the most comforting and the most challenging doctrine in the chapter. Comforting, because it means access to God is not dependent on our own merit, ritual purity, or social standing &mdash; there is one way, and that way is open to all who come through it. Challenging, because it means there is no alternative path, no pluralistic accommodation, no other name under heaven by which we must be saved. The exclusivity of Christ is the exclusivity of grace &mdash; the one mediator gave himself as a ransom so that all who come to him need bring nothing but themselves.",
  "The instructions about the disposition of prayer &mdash; holy hands, no anger, no quarreling &mdash; press the question of integrity in worship. We live in a culture of performative spirituality where it is easy to appear devout while harboring deep relational fractures. Paul does not allow us this self-deception: the God to whom we pray sees through the lifted hands to the heart that lifts them. Before praying, we are to be reconciled. Before interceding, we are to be at peace. Worship and ethics are inseparable.",
  "The most demanding application of this chapter may be the call to study it with genuine humility. The debate over verses 11&ndash;15 has at times been characterized more by heat than light, with both sides caricaturing the other&rsquo;s position. The Christian who approaches these verses with a commitment to the authority of Scripture, a genuine love for the women in his or her community, a willingness to engage the best scholarship on both sides, and a spirit of charitable dialogue, honors the passage even if he or she remains uncertain about its precise application. We hold our interpretive conclusions with conviction but without contempt for those who read the same text differently.",
  "Perhaps the most neglected application of 1 Timothy 2 is the simplest: &ldquo;I urge that supplications, prayers, intercessions, and thanksgivings be made for all people.&rdquo; The chapter begins and ends with the vision of a community whose first instinct, in every circumstance, is to pray. To pray for the persecutor and the president, for the neighbor and the nation, for the person we love and the person we struggle to love. This is the shape of the community formed by the God who gave his Son as a ransom for all.&rdquo;",
];

export default function FirstTimothy2GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>

        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${GOLD}22`, color: GOLD, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            1 Timothy 2 &mdash; Prayer, the Mediator, and Worship
          </h1>
          <p
            style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: MUTED, lineHeight: 1.75, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "Paul calls the church at Ephesus to pray for all people &mdash; including kings and rulers &mdash; grounding that call in the universal saving will of God and the singular mediation of &ldquo;the man Christ Jesus, who gave himself as a ransom for all.&rdquo; He then addresses the disposition of worship: men praying without anger or quarreling, women adorned with good works. The chapter closes with some of the most debated verses in the New Testament on women, teaching, and authority &mdash; passages that have shaped the life of the church for two millennia and still call for careful, humble, prayerful study." }}
          />
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? GOLD : BORDER}`,
                background: activeTab === t ? GOLD : CARD,
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

        {/* -------------------------------------------------- OVERVIEW -------------------------------------------------- */}
        {activeTab === "Overview" && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }}>Overview of 1 Timothy 2</h2>
            </div>
            <div style={{ color: GOLD, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }}>
              1 Timothy 2:1&ndash;15
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
              {overviewParagraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.5rem 1.75rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.1rem" }}>Chapter at a Glance</h3>
              {[
                { label: "vv. 1&ndash;4", desc: "Urgent call to pray for all people, including kings; God desires all to be saved" },
                { label: "vv. 5&ndash;7", desc: "One God, one mediator (Christ Jesus), one ransom for all; Paul&rsquo;s apostolic calling" },
                { label: "v. 8", desc: "Men praying with holy hands, without anger or quarreling" },
                { label: "vv. 9&ndash;10", desc: "Women adorned with respectable apparel and good works, not costly display" },
                { label: "vv. 11&ndash;15", desc: "Women learning quietly; the debated restriction on teaching; salvation through faithfulness" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: i < 4 ? 10 : 0, alignItems: "flex-start" }}>
                  <span
                    style={{ color: GOLD, fontWeight: 700, minWidth: 80, fontSize: 13, paddingTop: 2 }}
                    dangerouslySetInnerHTML={{ __html: item.label }}
                  />
                  <span
                    style={{ color: MUTED, lineHeight: 1.6, fontSize: "0.97rem" }}
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.1rem" }}>Historical and Interpretive Context</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 0.85rem", fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{ __html: "First Timothy is one of the three &ldquo;Pastoral Epistles&rdquo; (1 Timothy, 2 Timothy, Titus), addressed to Paul&rsquo;s delegates overseeing specific churches. Timothy was stationed in Ephesus (1:3), a major port city and cultural center in Asia Minor, home to the Temple of Artemis and a complex mix of Greek, Roman, and Jewish influences. The church there was being troubled by false teachers whose specific errors Paul addresses throughout the letter." }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{ __html: "The authorship of the Pastoral Epistles has been debated since the 19th century. Traditional scholarship (and much evangelical scholarship today) holds that Paul wrote 1 Timothy directly. Critical scholars note differences in vocabulary and style and propose a later Pauline disciple as author. The debate matters for interpretation: if the letter is pseudonymous and addressed to a very specific late-first-century situation, the cultural particularity of its instructions is even more pronounced. If Paul is the author writing to a specific church with specific problems, the question of the instructions&rsquo; universal applicability remains complex but differently framed. Either way, the text is canonical Scripture and calls for careful, theological reading." }}
              />
            </div>
          </section>
        )}

        {/* -------------------------------------------------- KEY THEMES -------------------------------------------------- */}
        {activeTab === "Key Themes" && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }}>Key Themes in 1 Timothy 2</h2>
            </div>
            <div style={{ color: GOLD, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }}>
              The Great Themes of the Chapter
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              {themeItems.map((theme, ti) => (
                <div
                  key={ti}
                  style={{ background: CARD, border: `1px solid ${theme.color}40`, borderRadius: 12, padding: "1.5rem 1.75rem", borderLeft: `4px solid ${theme.color}` }}
                >
                  <h3
                    style={{ color: theme.color, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.15rem" }}
                    dangerouslySetInnerHTML={{ __html: theme.title }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                    {theme.paragraphs.map((para, pi) => (
                      <p
                        key={pi}
                        style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}
                        dangerouslySetInnerHTML={{ __html: para }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${TEAL}44`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.1rem" }}>The Theological Unity of the Chapter</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{ __html: "At first glance, 1 Timothy 2 may seem to move from one subject (prayer) to another (women in worship) without obvious connection. But there is a deep theological unity. The chapter is held together by the vision of ordered, humble, holy worship before the one God who desires all people to be saved. Prayer for all people flows from a God who loves all people. The one mediator grounds the confidence of all who pray. The disposition of prayer &mdash; holy, peaceful, humble &mdash; reflects the character of the God who is approached. And the instructions about women, whatever their precise application, serve the same goal: worship conducted in a manner that reflects the truth, dignity, and order of the God who is worshipped. Everything in the chapter is in the service of doxology." }}
              />
            </div>
          </section>
        )}

        {/* -------------------------------------------------- VERSE BY VERSE -------------------------------------------------- */}
        {activeTab === "Verse by Verse" && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }}>Verse by Verse &mdash; 1 Timothy 2</h2>
            </div>
            <div style={{ color: GOLD, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }}>
              A Close Reading of Every Passage
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {verseByVerse.map((section, si) => (
                <div
                  key={si}
                  style={{ background: CARD, border: `1px solid ${section.color}40`, borderRadius: 12, padding: "1.5rem 1.75rem", borderLeft: `4px solid ${section.color}` }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "0.5rem", flexWrap: "wrap" }}>
                    <span
                      style={{ background: `${section.color}22`, color: section.color, borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 700, letterSpacing: 0.5 }}
                      dangerouslySetInnerHTML={{ __html: section.ref }}
                    />
                  </div>
                  <h3
                    style={{ color: section.color, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}
                    dangerouslySetInnerHTML={{ __html: section.heading }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                    {section.paragraphs.map((para, pi) => (
                      <p
                        key={pi}
                        style={{
                          color: pi === 0 ? TEXT : MUTED,
                          lineHeight: 1.85,
                          margin: 0,
                          fontSize: pi === 0 ? "1rem" : "0.97rem",
                          fontStyle: pi === 0 ? "italic" : "normal",
                        }}
                        dangerouslySetInnerHTML={{ __html: para }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.1rem" }}>Reading the Whole Chapter Together</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 0.85rem", fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{ __html: "The chapter as a whole has an arc: universal (prayer for all) to particular (specific instructions for men and women). It moves from the character of God (Savior who desires all to be saved, verse 3&ndash;4) through the work of Christ (ransom for all, verse 6) to the shape of the community formed by that God and that work. Ordered, holy, humble, prayerful worship is not a burden imposed on the church; it is the natural outflow of a people who know who God is, what Christ has done, and what they themselves have been saved from." }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{ __html: "The debated passage (vv. 11&ndash;15) is surrounded on all sides by a vision of comprehensive grace. Before it comes the one mediator who gave himself for all. After it comes the promise of salvation to the faithful woman. The passage is not an island of restriction in a sea of permission; it is one element in a coherent vision of the community of grace. Reading it well requires reading the whole, not extracting the controversial fragment and reading it in isolation." }}
              />
            </div>

            <div style={{ marginTop: "1.5rem", background: CARD, border: `1px solid ${ROSE}44`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: ROSE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.1rem" }}>The Debate in Summary &mdash; Complementarian and Egalitarian Readings</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <p
                    style={{ color: ROSE, fontWeight: 700, margin: "0 0 0.5rem", fontSize: 13 }}
                    dangerouslySetInnerHTML={{ __html: "Complementarian Reading" }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: "The appeal to creation order (Adam formed first; Eve deceived) indicates that the restriction on women teaching men is trans-cultural and universal. God designed a complementary pattern of authority and submission in which men lead in the home and in the church. Women serve, flourish, and are fully gifted, but the teaching office and governing authority of the local church is reserved for qualified men (cf. 1 Tim 3:1&ndash;7). This is not inequality but differentiation &mdash; reflecting the relationship of the Father and the Son." }}
                  />
                </div>
                <div>
                  <p
                    style={{ color: BLUE, fontWeight: 700, margin: "0 0 0.5rem", fontSize: 13 }}
                    dangerouslySetInnerHTML={{ __html: "Egalitarian Reading" }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: "The specific Ephesian context &mdash; where false teachers targeted women (2 Tim 3:6&ndash;7) and where women may have been propagating error &mdash; makes these instructions situational. The hapax legomenon authentein may carry a negative connotation (to dominate or usurp) rather than a neutral one (to have authority). Paul elsewhere affirms women who prophesy, teach, and serve as deacons and apostles. Galatians 3:28 (&ldquo;neither male nor female&rdquo;) sets the eschatological horizon toward which the church moves." }}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* -------------------------------------------------- APPLICATION -------------------------------------------------- */}
        {activeTab === "Application" && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }}>Application &mdash; Living 1 Timothy 2</h2>
            </div>
            <div style={{ color: GOLD, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }}>
              From the Text to Our Lives
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
              {applicationParagraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: "2rem" }}>
              {[
                {
                  color: GOLD,
                  title: "Expand Your Prayer List",
                  body: "This week, add to your prayers a political leader you find difficult, a nation in conflict, and a person you know who does not follow Christ. Ground each prayer in the truth that God &ldquo;desires all people to be saved.&rdquo;",
                },
                {
                  color: TEAL,
                  title: "Meditate on the Mediator",
                  body: "Read verses 5&ndash;6 slowly each morning for a week. Reflect on what it means that Christ gave himself as your ransom. What barrier between you and God did he remove? How does this shape your confidence in prayer?",
                },
                {
                  color: PURPLE,
                  title: "Examine Your Worship Posture",
                  body: "Before your next time of prayer, pause to ask: is there anger or an unresolved quarrel between me and another? Is there a relationship that needs repair before I approach God? Take one step toward reconciliation.",
                },
                {
                  color: GREEN,
                  title: "Adorn Yourself with Good Works",
                  body: "The adornment Paul commends is not external beauty but visible acts of love. This week, choose one concrete good work &mdash; serving, giving, visiting, encouraging &mdash; that reflects the character of the God you worship.",
                },
                {
                  color: ROSE,
                  title: "Study with Humility and Care",
                  body: "If you have not engaged seriously with both complementarian and egalitarian readings of verses 11&ndash;15, do so before forming a strong opinion. Read a careful advocate of each position. Hold your conclusion with conviction but with charity toward those who differ.",
                },
                {
                  color: BLUE,
                  title: "Confess the One Mediator",
                  body: "In a culture of religious pluralism, the confession of &ldquo;one mediator between God and men&rdquo; is both counter-cultural and deeply compassionate. Pray for the courage to hold and commend this truth with gentleness and respect (1 Pet 3:15), knowing that the one mediator gave himself for all.",
                },
              ].map((card, ci) => (
                <div
                  key={ci}
                  style={{ background: CARD, border: `1px solid ${card.color}40`, borderRadius: 12, padding: "1.25rem", borderTop: `3px solid ${card.color}` }}
                >
                  <h4
                    style={{ color: card.color, fontWeight: 700, margin: "0 0 0.6rem", fontSize: "1rem" }}
                    dangerouslySetInnerHTML={{ __html: card.title }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: card.body }}
                  />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.5rem 1.75rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.1rem" }}>Questions for Personal or Group Study</h3>
              <ol style={{ color: MUTED, lineHeight: 1.85, paddingLeft: "1.5rem", margin: 0, fontSize: "0.97rem" }}>
                {[
                  "Who are the &ldquo;kings and those in high positions&rdquo; in your context? Are you genuinely praying for them? What would it look like to align your prayers with God&rsquo;s desire for their salvation?",
                  "What does it mean to you personally that there is &ldquo;one mediator between God and men&rdquo;? How does the singularity of Christ shape the way you relate to God and to people of other faiths?",
                  "What does the call to pray &ldquo;without anger or quarreling&rdquo; expose in your own prayer life? Are there relationships that need to be repaired before you can pray with integrity?",
                  "How do you understand the relationship between outward adornment and inner character? What does it look like, practically, to be adorned with &ldquo;good works&rdquo;?",
                  "Where do you land in the debate over verses 11&ndash;15, and why? Have you engaged seriously with the strongest version of the position you do not hold? How does your interpretation shape the way you treat the women in your life and church?",
                  "How does the promise at the end of verse 15 &mdash; salvation through faithfulness in ordinary life &mdash; speak to you in your current season?",
                ].map((q, qi) => (
                  <li
                    key={qi}
                    style={{ marginBottom: qi < 5 ? "0.75rem" : 0 }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>

            <div style={{ background: CARD, border: `1px solid ${TEAL}44`, borderRadius: 12, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.1rem" }}>A Closing Prayer for All People</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "0.97rem", fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "Lord God, you are the Savior who desires all people to be saved. You gave your Son as the one mediator, the ransom for all. Teach us to pray as you have commanded &mdash; for all people, for rulers and the ruled, for the neighbor and the stranger, for the friend and the one who opposes us. May we come before you with holy hands, with hearts at peace, without anger and without quarreling. May we be adorned not with the costly display of the world but with the good works of those who have been redeemed. And as we wrestle with the harder passages of your Word, grant us the humility to hear you, the courage to obey what is clear, and the charity to disagree well about what is contested. We ask this through the one mediator, Jesus Christ our Lord. Amen." }}
              />
            </div>

            <div style={{ marginTop: "2rem" }}>
              <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.2rem" }}>Video Teaching</h3>
              <p
                style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, margin: "0 0 1.5rem" }}
                dangerouslySetInnerHTML={{ __html: "Deepen your study of 1 Timothy 2 through these video teachings on prayer for all people, the one mediator, and the debate over women in worship." }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
                {videoItems.map((item) => (
                  <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <p
                      style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
