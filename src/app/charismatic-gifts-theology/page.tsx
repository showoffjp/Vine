"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "tongues" | "prophecy" | "healing" | "videos";

const TABS: { id: Tab; label: string }[] = [
  { id: "theology", label: "Theology of Charismatic Gifts" },
  { id: "tongues", label: "Tongues" },
  { id: "prophecy", label: "Prophecy" },
  { id: "healing", label: "Healing" },
  { id: "videos", label: "🎬 Videos" },
];

const THEOLOGY_ITEMS = [
  {
    id: "what-are",
    title: "What Are Charismatic Gifts?",
    body: `The charismata (χαρίσματα) are Spirit-given capacities for ministry, distinct from natural talents and from the fruit of the Spirit. Paul provides three primary lists: 1 Corinthians 12 (word of wisdom, word of knowledge, faith, healing, miracles, prophecy, distinguishing spirits, tongues, interpretation of tongues), Romans 12 (prophecy, service, teaching, exhortation, giving, leading, mercy), and Ephesians 4 (apostles, prophets, evangelists, pastors-teachers). These lists overlap but are not identical, strongly suggesting they are representative rather than exhaustive. The gifts differ from the fruit of the Spirit (Galatians 5:22-23) in a critical way: the fruit concerns Christlike character and is required of every believer, while gifts are distributed variously as the Spirit wills (1 Corinthians 12:11). A person may exercise spectacular gifts while being deeply deficient in fruit — the Corinthian situation illustrates this danger exactly.`,
  },
  {
    id: "pentecost",
    title: "The Pentecost Moment",
    body: `Acts 2 narrates the foundational outpouring of the Spirit on the 120 disciples gathered at Pentecost, fulfilling Joel 2:28-32: "Your sons and daughters will prophesy, your old men will dream dreams, your young men will see visions. Even on my servants, both men and women, I will pour out my Spirit in those days." This oracle is explosive in its social radicalism — gender, age, and social class are no barriers to Spirit reception. Peter declares this outpouring as the inauguration of the last days, and the fire and wind echo both Sinai (Exodus 19) and Elijah (1 Kings 19). The church historian impact is enormous: Pentecost establishes Spirit-endowment as a universal expectation for all believers, not just prophetic elites as in the OT. The question of whether Pentecost was a once-for-all historical event or a pattern to be experienced repeatedly divides cessationists from continuationists.`,
  },
  {
    id: "renewal",
    title: "The Charismatic Renewal",
    body: `Modern Pentecostalism traces its origin to the Azusa Street Revival (Los Angeles, 1906), where William Seymour led a multiracial community that emphasized tongues as the initial evidence of Spirit baptism. From this movement grew the classical Pentecostal denominations (Assemblies of God, Church of God in Christ). The Charismatic Renewal (1960s) brought Spirit-baptism experience into mainline Protestant and Catholic churches — notably Dennis Bennett's 1960 Episcopal declaration sparked widespread renewal. The Third Wave (1980s) emerged through John Wimber and the Vineyard movement: continuationist in theology but rejecting the initial-evidence doctrine, emphasizing signs and wonders in ordinary church ministry without the subculture of Pentecostalism. Today the Global South hosts the most explosive charismatic growth — Nigeria, Brazil, South Korea, and China — where Pentecostal/charismatic Christianity now encompasses over 600 million people worldwide, making it the fastest-growing expression of Christianity in history.`,
  },
  {
    id: "discernment",
    title: "The Discernment Imperative",
    body: `The NT never assumes that spiritual phenomena are automatically trustworthy. 1 Corinthians 14:29 instructs that when prophets speak, "the others should weigh carefully what is said." 1 Thessalonians 5:19-21 commands: "Do not quench the Spirit. Do not treat prophecies with contempt but test them all; hold on to what is good." 1 John 4:1 is bluntest: "Do not believe every spirit, but test the spirits to see whether they are from God, because many false prophets have gone out into the world." The gift of "distinguishing between spirits" (1 Corinthians 12:10) is itself a charismatic gift, suggesting that the Spirit's work requires Spirit-gifted evaluation. The theological logic: because Satan can counterfeit spiritual experiences (2 Corinthians 11:14), and because human enthusiasm can be mistaken for divine inspiration, rigorous discernment is not a sign of unbelief — it is itself a spiritual act. Charismatic culture that discourages evaluation of claimed gifts is disobedient to Paul.`,
  },
  {
    id: "order",
    title: "Order and Gifts",
    body: `The Corinthian church was charismatically exuberant and ecclesially chaotic — multiple people speaking in tongues simultaneously, prophets interrupting one another, worship verging on bedlam. Paul's response in 1 Corinthians 14:26-33 does not suppress the gifts; it governs them: "Everything should be done in a fitting and orderly way. For God is not a God of disorder but of peace." The regulations are specific: tongues-speakers limited to two or three in a meeting, interpretation required, prophets speaking one at a time with others evaluating. The principle behind the rules: intelligibility (14:9), edification of others (14:5), and the witness to unbelievers (14:23-25). Reformed churches have sometimes used this passage to justify wholesale suppression of tongues and prophecy — but Paul's argument is about regulation, not elimination. He explicitly forbids forbidding tongues (14:39): "do not forbid speaking in tongues."`,
  },
  {
    id: "salvation",
    title: "Gifts and Salvation",
    body: `One of the most dangerous misconceptions in charismatic culture is that exercising spiritual gifts is evidence of salvation or spiritual maturity. The NT argues the opposite. 1 Corinthians 13:1-3 is devastating: "If I speak in the tongues of men or of angels, but do not have love, I am only a resounding gong... If I have the gift of prophecy and can fathom all mysteries and all knowledge... but do not have love, I am nothing." Spiritual gifts can be exercised through genuine but carnal Christians (the Corinthians), and arguably through those who are never truly regenerate. Matthew 7:22-23 records Jesus saying that on judgment day many will appeal to prophesying, driving out demons, and performing miracles in his name — and be told "I never knew you." Some scholars apply this to Judas, who presumably participated in the disciples' mission and miracle-working (Matthew 10:1-8). Gifts confirm nothing about salvation; fruit and faithfulness do.`,
  },
];

const TONGUES_TOPICS = [
  {
    id: "acts2",
    label: "Acts 2 Tongues",
    content: `Acts 2 describes xenolalia — the disciples speaking in actual known human languages they had not learned, as diaspora Jews from across the empire each heard them "declaring the wonders of God" in their native tongue (Acts 2:11). This is a deliberate reversal of Babel (Genesis 11): where Babel scattered humanity through linguistic confusion, Pentecost unites it through miraculous comprehension. Paul connects tongues to the sign function for Israel in 1 Corinthians 14:21-22, quoting Isaiah 28:11-12: "Through people of strange tongues and through the lips of foreigners I will speak to this people." Tongues in Acts 2 is a sign of judgment on unbelieving Israel and of the dawning new age. N.T. Wright emphasizes that Pentecost must be read within the context of Jewish eschatological expectation: the Spirit poured out marks the beginning of the new creation age that Jesus' resurrection inaugurated. On Wright's reading, xenolalia in Acts 2 is historically unique to that foundational moment.`,
  },
  {
    id: "1cor",
    label: "1 Corinthians 12–14 Tongues",
    content: `The tongues of 1 Corinthians 12-14 may differ from Acts 2. Paul describes a gift that, when uninterpreted, is unintelligible to the congregation (14:9), that the speaker himself may not understand cognitively (14:14: "my spirit prays, but my mind is unfruitful"), and that may be a "language of angels" (13:1) — suggesting a heavenly or unknown language rather than a human one. Some scholars (Gordon Fee, Mark Cartledge) argue this is glossolalia distinct from the xenolalia of Acts 2. Paul's regulations are specific: no more than two or three tongues-speakers per gathering (14:27), an interpreter required for corporate use (14:28), and silence if no interpreter is present. Without interpretation, tongues in public worship is self-indulgent: "you may be giving thanks well enough, but no one else is edified" (14:17). The exegetical question of whether Acts 2 and 1 Corinthians 14 describe the same phenomenon remains genuinely disputed among NT scholars.`,
  },
  {
    id: "prayer",
    label: "The Private Prayer Language",
    content: `Paul describes a distinct use of tongues in private prayer. 1 Corinthians 14:4 states "Anyone who speaks in a tongue edifies themselves," and 14:14-15 envisions Paul himself praying "with my spirit" in tongues privately. This has given rise to the concept of a "private prayer language" — tongues exercised not for corporate edification but for personal communion with God, perhaps as a form of Spirit-assisted intercession (connecting to Romans 8:26: "the Spirit himself intercedes for us through wordless groans"). Cessationists (notably John MacArthur) argue there is no warrant for a private prayer language in the NT and that 1 Corinthians 14 is entirely about corporate regulation. Pentecostals and many charismatics see Paul's statement in 14:18-19 ("I thank God that I speak in tongues more than all of you. But in the church I would rather speak five intelligible words...") as evidence that he practiced tongues extensively outside the corporate gathering. The "edifies oneself" debate is significant: cessationists read it as neutral description or mild correction; continuationists read it as a genuine positive use case.`,
  },
  {
    id: "evidence",
    label: "The Initial Evidence Debate",
    content: `Classical Pentecostal doctrine — articulated at the Assemblies of God's formation (1914) and normative in most Pentecostal denominations — holds that speaking in tongues is "the initial physical evidence" of the baptism of the Holy Spirit. This doctrine appeals to the pattern in Acts: the disciples at Pentecost spoke in tongues (2:4), the Samaritans received the Spirit with something observable (8:17-18, though tongues isn't mentioned), Cornelius's household spoke in tongues (10:46), and the Ephesian disciples spoke in tongues (19:6). Critics (including Third Wave leaders like Wayne Grudem and John Wimber) argue that no single NT text explicitly teaches tongues as the necessary initial evidence; that the Acts pattern is descriptive not prescriptive; and that the doctrine has produced immense pastoral harm by making believers feel they lack the Spirit if they haven't spoken in tongues. The Third Wave alternative: the Spirit's fullness manifests in various gifts and fruit, tongues being one available gift but not the necessary sign.`,
  },
  {
    id: "well",
    label: "Exercising Tongues Well",
    content: `Paul's regulations in 1 Corinthians 14 provide a practical framework. In corporate worship: tongues require an interpreter, only two or three speakers maximum, silence if no interpreter is present. The purpose test: does it edify the body? Tongues without interpretation "is like speaking into the air" (14:9) and can alienate unbelievers who will conclude "you are out of your mind" (14:23). Pastoral guidance from Vineyard and charismatic traditions: avoid performative tongues (loud, attention-seeking utterances) — the Corinthian dysfunction was partly about status display through spectacular gifts. Private tongues: pray freely as a devotional practice, understanding that the Spirit intercedes through you. In corporate contexts: wait for the appropriate moment, yield to congregational leadership, never push others toward tongues, never create a two-tier spirituality (those who speak in tongues vs. those who don't). The healthiest charismatic churches hold tongues lightly — available, practiced, but never elevated as the mark of genuine Spirit-filled Christianity.`,
  },
];

const PROPHECY_ITEMS = [
  {
    id: "ot-vs-nt",
    title: "OT Prophecy vs. NT Prophecy",
    body: `OT canonical prophecy operated under a strict standard: the prophet spoke with "thus says the LORD," claiming direct divine speech with binding authority. Deuteronomy 18:20-22 set the test — if a prophecy failed, the prophet was to be put to death. NT congregational prophecy appears to work differently. 1 Corinthians 14:29 commands that prophecies be "weighed carefully," implying they might contain error. The prophecy of Agabus (Acts 21:10-11) predicts Paul's imprisonment in Jerusalem, and the details differ in some respects from what actually happened — which has led scholars like Wayne Grudem to argue that NT congregational prophecy is a "reception and report" of a divine prompting that may be imperfectly expressed, not the ipsissima verba of God. The traditional cessationist alternative: Agabus was essentially accurate, and the weighing in 1 Corinthians 14 is about doctrinal evaluation, not error-correction. The distinction between "forthtelling" (speaking God's truth into a situation) and "foretelling" (predicting future events) applies in both Testaments, but the authority and inerrancy question looks different across the canonical divide.`,
  },
  {
    id: "grudem",
    title: "Wayne Grudem's Contribution",
    body: `Wayne Grudem's 1988 work "The Gift of Prophecy in the New Testament and Today" (Crossway) fundamentally reframed the continuationist-cessationist debate. Grudem's central argument: there are two levels of prophecy in the NT. The first level is apostolic prophecy — the words of the apostles carried the authority of Scripture, were essentially infallible as God's word, and were foundational for the church (Ephesians 2:20). This level ceased with the death of the apostles. The second level is congregational prophecy — the ordinary believers' exercise described in 1 Corinthians 14, which Grudem argues involves reporting a spontaneous prompting from the Spirit but may be expressed imperfectly and requires weighing. This level continues. The implications are significant: Grudem provides cessationists a reason not to fear continuationism (it doesn't threaten Scripture's authority because congregational prophecy was never on a par with canonical prophecy) while giving continuationists a biblically defensible framework for a fallible gift. Critics (from both sides) have challenged his exegesis of the Greek prophēteia, but Grudem's framework remains the most influential academic contribution to the debate.`,
  },
  {
    id: "macarthur",
    title: "John MacArthur's Response",
    body: `John MacArthur's "Strange Fire" conference (2013) and accompanying book mounted the most prominent recent cessationist counterattack. MacArthur's critique of Grudem: if prophecy is fallible, it cannot be God's word, and calling it prophecy is therefore misleading and dangerous. The pastoral concern is acute — when people treat fallible impressions as divine words ("God told me..."), they confuse human intuitions with divine speech, can spiritually manipulate others, and erode Scripture's unique authority. MacArthur also argued that the modern charismatic movement has produced more aberration than authentic spiritual fruit, and that the failure to rigorously distinguish Spirit activity from emotionalism and spiritual counterfeiting is epidemic in charismatic churches. His strongest critique targets the prosperity gospel and name-it-claim-it healing teachers, arguing that the charismatic framework creates the theological soil in which these heresies flourish. The response from continuationists: MacArthur commits the genetic fallacy (abuses don't disprove authentic gifts), misreads the NT evidence, and his own Reformed tradition's history includes figures who claimed direct divine guidance without being labeled false prophets.`,
  },
  {
    id: "storms",
    title: "Sam Storms' Response to MacArthur",
    body: `Sam Storms — a Reformed cessationist turned continuationist — published a detailed rebuttal to "Strange Fire" and has written extensively in works like "Convergence" and "The Beginner's Guide to Spiritual Gifts." Storms' approach is irenic but substantive. He argues that MacArthur commits category errors: conflating all charismatics with prosperity preachers, demanding that NT congregational prophecy meet OT canonical standards, and assuming that any fallibility in a gift disqualifies it from being a genuine work of the Spirit (human preaching is also fallible but still genuine). Storms represents the "open but cautious" position: affirm all NT gifts as available today, insist on rigorous biblical testing, distinguish healthy charismatic practice from aberration, and refuse to judge the whole movement by its worst representatives. His engagement with Grudem's framework: he largely accepts the two-level prophecy distinction and combines it with his own complementarian-charismatic ecclesiology. Storms' work has been influential in Reformed and neo-Calvinist circles that were moving toward openness to gifts, particularly in Acts 29 and Together for the Gospel adjacent communities.`,
  },
  {
    id: "testing",
    title: "Testing Prophecy",
    body: `1 Corinthians 14:29 establishes the norm: "Two or three prophets should speak, and the others should weigh carefully what is said." The Greek diakrinō (weigh, evaluate, judge) is the same word used for the gift of discernment in 12:10, suggesting the evaluation process is itself a Spirit-enabled act. What does testing prophecy look like practically? First, theological evaluation: does the content contradict Scripture? Any prophecy that contradicts biblical revelation is false by definition (Galatians 1:8). Second, moral consistency: does the prophet's life display the fruit of the Spirit, or is there a pattern of self-promotion, financial manipulation, or sexual immorality? Third, track record: for predictive prophecy, does it come to pass? The Deuteronomy 18:22 standard ("If what a prophet proclaims in the name of the LORD does not take place or come true, that is a message the LORD has not spoken") remains applicable even if NT congregational prophecy is held to a different authority level — a pattern of inaccurate predictions is disqualifying. What to do with a prophecy that doesn't come true: on Grudem's model, acknowledge it was imperfectly expressed; on a stricter model, disqualify the prophet from future public prophecy.`,
  },
  {
    id: "abuse",
    title: "Prophetic Weirdness and Abuse",
    body: `The history of charismatic prophecy includes both genuine fruit and spectacular failure. The prosperity prophets who promised Donald Trump's electoral victory in 2020 — Jeremiah Johnson, Kris Vallotton, and dozens of others — offer a case study in how prophetic culture goes wrong: no accountability structures, financial incentives aligned with spectacular claims, audiences primed to receive rather than evaluate, and the psychology of escalating commitment that makes correction feel like betrayal of God. When the prophecies failed, most "prophets" issued non-apologies or doubled down. The New Apostolic Reformation (NAR) and Apostolic Reformation movements have institutionalized the problem: claiming office-of-apostle and office-of-prophet authority, demanding submission to prophetic networks, and treating criticism as spiritual rebellion. C. Peter Wagner and his successors built theological frameworks that effectively insulated false prophecy from evaluation. Healthy charismatic churches — Vineyard, some Anglican charismatic communities, Reformed charismatic networks — handle prophetic ministry very differently: no prophecy goes unweighed, public prophets are accountable to eldership, and predictive prophecies are recorded and checked. The goal is neither suppression of the gift nor unaccountable exercise of it, but the ordered, evaluated, edifying practice Paul describes in 1 Corinthians 14.`,
  },
];

const HEALING_ITEMS = [
  {
    id: "jesus",
    title: "The Healing Ministry of Jesus",
    body: `The Gospels record Jesus healing everyone who came to him — the blind, the lame, lepers, the hemorrhaging woman, paralytics, those with withered hands, the demon-possessed. Matthew 11:4-5 (quoting Isaiah 35:5-6 and 61:1) frames these healings as the fulfillment of Kingdom-of-God prophecy: "The blind receive sight, the lame walk, those who have leprosy are cleansed, the deaf hear, the dead are raised." Healing in Jesus' ministry is a sign that the Kingdom has arrived — that God is reclaiming his creation from the forces of corruption, disease, and death. This is the theology of shalom: healing is the restoration of right-relationship between the human person and God's good creation. The question of why Jesus healed everyone he encountered (unlike the disciples and the apostolic church, where not all are healed) has generated significant theological reflection: some argue Jesus operated under unique messianic authority; others (N.T. Wright) argue that Jesus' comprehensive healing prefigures the comprehensive restoration of the new creation, which is now inaugurated but not yet complete — hence partial healing in the present age.`,
  },
  {
    id: "james5",
    title: "James 5:13–16",
    body: `James 5:13-16 provides the most explicit pastoral framework for healing ministry in the NT: "Is anyone among you sick? Let them call the elders of the church to pray over them and anoint them with oil in the name of the Lord. And the prayer offered in faith will make the sick person well; the Lord will raise them up. If they have sinned, they will be forgiven. Therefore confess your sins to each other and pray for each other so that you may be healed." Several features of this text deserve attention: healing is located within the community (the elders come to the sick person), it is connected to confession of sin (suggesting illness and spiritual condition may sometimes be related), and it involves oil (widely used in first-century medicine, suggesting the integration of natural and supernatural means). The promise "the prayer offered in faith will make the sick person well" is both encouraging and theologically demanding — it raises the question of what constitutes "prayer offered in faith" and why some faithful prayers for healing go unanswered. Most careful interpreters read this as a general pattern with exceptions, not an absolute promise that guarantees healing in every instance.`,
  },
  {
    id: "history",
    title: "Healing in Church History",
    body: `The cessationist argument claims that miraculous healing gifts ceased with the apostolic age — the miracles served to authenticate the apostolic message and were withdrawn once the NT canon was complete. The historical evidence complicates this claim. Irenaeus (writing c. 180 AD) describes healing miracles and exorcisms as current occurrences in the church. Most significantly, Augustine of Hippo — whose early theology supported cessationism — reversed his position in City of God (Book 22), recording dozens of specific miraculous healings he had personally witnessed and whose eyewitnesses he could name. This Augustinian reversal is a significant embarrassment for cessationists who appeal to Augustine. The Global South experience is even more challenging to cessationism: the explosive growth of Christianity in sub-Saharan Africa, Latin America, and Southeast Asia is deeply entangled with accounts of healing, exorcism, and prophecy that workers in those contexts describe as routine. Whether Western theological skepticism is good hermeneutics or cultural imperialism is a live question in global theology — Craig Keener's two-volume "Miracles" (2011) documents contemporary healing accounts across cultures with academic rigor.`,
  },
  {
    id: "inner",
    title: "Physical vs. Inner Healing",
    body: `The Greek word sōzō (σώζω) — translated "save" in soteriological contexts — also means "heal" and "make whole." The woman with the hemorrhage (Luke 8:48), the blind Bartimaeus (Mark 10:52), and the ten lepers (Luke 17:19) are all told "your faith has sōzō'd you" — in most English translations, "made you well" rather than "saved you." This linguistic porousness reflects a Hebrew-biblical concept of salvation that is holistic: body, soul, psyche, and community. Inner healing ministry (associated with Leanne Payne, John Wimber, and Francis MacNutt) applies this holistic vision to emotional and psychological wounds: healing of memories, healing of childhood trauma, deliverance from shame and broken identity. The theological framework: if Jesus restores shalom — right relationship with God, self, others, and creation — then salvation includes healing of the whole person, not only the escape of the soul from hell. Critics raise concerns about the potential confusion with psychological therapy and the risk of manufacturing false memories or pseudo-spiritual experiences in susceptible people. Wise practitioners insist on integration with professional psychological care and careful boundaries.`,
  },
  {
    id: "suffering",
    title: "When Healing Doesn't Come",
    body: `Joni Eareckson Tada — paralyzed from a diving accident at 17, an evangelical leader for decades — has built a theology of suffering that takes both healing prayer and unanswered prayer seriously. Her framework: God can heal, sometimes does, and every healing prayer is appropriate; but God's purposes in suffering may include transformation, witness, and the display of grace through weakness in ways that healing would prevent. Paul's "thorn in the flesh" (2 Corinthians 12:7-9) is paradigmatic: three times he asked the Lord to remove it, and the answer was "My grace is sufficient for you, for my power is made perfect in weakness." Hezekiah prayed for healing and received 15 more years of life (Isaiah 38) — yet those extra years included the siring of Manasseh, Judah's most wicked king. Timothy's stomach ailment is treated with wine (1 Timothy 5:23), not miraculous healing. Trophimus is left sick at Miletus (2 Timothy 4:20). The NT evidence, read carefully, shows that apostles did not heal indiscriminately — healing was a Spirit-directed sign, not a spiritual vending machine. The theology of lament (Psalms, Job, Lamentations) provides resources for living faithfully in unhealed bodies without abandoning faith in a healing God.`,
  },
  {
    id: "word-of-faith",
    title: "The Word of Faith Problem",
    body: `The Word of Faith movement ("name it and claim it," "health and wealth gospel") teaches that healing is in the atonement — that Christ's death guarantees physical healing for all believers who exercise sufficient faith, and that sickness is therefore always a result of insufficient faith or unconfessed sin. Teachers like Kenneth Copeland, Kenneth Hagin, Jesse Duplantis, and Andrew Wommack built ministries on this framework. The pastoral harm is well-documented: sick people who are told they weren't healed because they lacked faith, families who abandon medical treatment trusting divine healing instead, bereaved believers who are told their loved one died because of their unbelief. N.T. Wright's critique is exegetical: the atonement passage cited (Isaiah 53:5, "by his wounds we are healed") refers in its NT application (1 Peter 2:24) to spiritual healing from sin, not physical healing; and the universal-healing doctrine fails to account for Paul's thorn, Timothy's stomach, and the NT deaths of faithful believers. The distinction between Andrew Wommack (consistent WoF) and the Vineyard/Third Wave approach (healing prayer without guarantee) is significant: the Vineyard prays "come, Holy Spirit" and then responds to what the Spirit does, rather than demanding healing as a right of faith. The WoF version is not merely enthusiastic healing ministry — it is a different theological system.`,
  },
];

function AccordionItem({
  id,
  title,
  body,
  expanded,
  onToggle,
}: {
  id: string;
  title: string;
  body: string;
  expanded: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <div
      style={{
        border: `1px solid ${BORDER}`,
        borderRadius: 8,
        marginBottom: 12,
        background: CARD,
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => onToggle(id)}
        style={{
          width: "100%",
          textAlign: "left",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <span style={{ color: TEXT, fontWeight: 600, fontSize: 15 }}>{title}</span>
        <span
          style={{
            color: GREEN,
            fontSize: 20,
            lineHeight: 1,
            flexShrink: 0,
            transform: expanded ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          +
        </span>
      </button>
      {expanded && (
        <div
          style={{
            padding: "0 20px 20px",
            color: MUTED,
            fontSize: 14,
            lineHeight: 1.75,
            borderTop: `1px solid ${BORDER}`,
            paddingTop: 16,
          }}
        >
          {body}
        </div>
      )}
    </div>
  );
}

export default function CharismaticGiftsTheologyPage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [activeTongue, setActiveTongue] = useState<string>(TONGUES_TOPICS[0].id);

  function toggleAccordion(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const activeTongueTopic = TONGUES_TOPICS.find((t) => t.id === activeTongue);

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: 40,
        color: TEXT,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* Header */}
        <div style={{ marginBottom: 40, textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              background: PURPLE + "22",
              border: `1px solid ${PURPLE}`,
              borderRadius: 20,
              padding: "4px 16px",
              fontSize: 12,
              color: PURPLE,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Theology
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 44px)",
              fontWeight: 800,
              color: TEXT,
              margin: "0 0 12px",
              lineHeight: 1.2,
            }}
          >
            Charismatic Gifts
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            A comprehensive theological resource on the charismata — tongues, prophecy, healing, and the ongoing debate about the Spirit's gifts in the church today.
          </p>
        </div>

        {/* Tab Bar */}
        <div
          style={{
            display: "flex",
            gap: 4,
            background: CARD,
            borderRadius: 10,
            padding: 4,
            border: `1px solid ${BORDER}`,
            marginBottom: 36,
            overflowX: "auto",
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: "1 1 auto",
                padding: "10px 16px",
                borderRadius: 7,
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 600,
                whiteSpace: "nowrap",
                background: activeTab === tab.id ? PURPLE : "transparent",
                color: activeTab === tab.id ? "#fff" : MUTED,
                transition: "background 0.15s, color 0.15s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab: Theology */}
        {activeTab === "theology" && (
          <div>
            <h2 style={{ color: GREEN, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>
              Theology of Charismatic Gifts — 6 Topics
            </h2>
            {THEOLOGY_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
                expanded={!!expanded[item.id]}
                onToggle={toggleAccordion}
              />
            ))}
          </div>
        )}

        {/* Tab: Tongues */}
        {activeTab === "tongues" && (
          <div>
            <h2 style={{ color: GREEN, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>
              Tongues — Select a Topic
            </h2>
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              {/* Left List */}
              <div
                style={{
                  width: 220,
                  flexShrink: 0,
                  position: "sticky",
                  top: 20,
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                {TONGUES_TOPICS.map((topic, idx) => (
                  <button
                    key={topic.id}
                    onClick={() => setActiveTongue(topic.id)}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      padding: "13px 16px",
                      background: activeTongue === topic.id ? PURPLE + "33" : "transparent",
                      border: "none",
                      borderBottom: idx < TONGUES_TOPICS.length - 1 ? `1px solid ${BORDER}` : "none",
                      cursor: "pointer",
                      color: activeTongue === topic.id ? GREEN : MUTED,
                      fontSize: 13,
                      fontWeight: activeTongue === topic.id ? 700 : 400,
                      borderLeft: activeTongue === topic.id ? `3px solid ${GREEN}` : "3px solid transparent",
                      transition: "all 0.15s",
                    }}
                  >
                    {topic.label}
                  </button>
                ))}
              </div>

              {/* Right Detail */}
              <div style={{ flex: 1, minWidth: 0 }}>
                {activeTongueTopic && (
                  <div
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 10,
                      padding: 28,
                    }}
                  >
                    <h3
                      style={{
                        color: TEXT,
                        fontSize: 18,
                        fontWeight: 700,
                        marginTop: 0,
                        marginBottom: 16,
                        borderBottom: `1px solid ${BORDER}`,
                        paddingBottom: 12,
                      }}
                    >
                      {activeTongueTopic.label}
                    </h3>
                    <p
                      style={{
                        color: MUTED,
                        fontSize: 14,
                        lineHeight: 1.8,
                        margin: 0,
                      }}
                    >
                      {activeTongueTopic.content}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab: Prophecy */}
        {activeTab === "prophecy" && (
          <div>
            <h2 style={{ color: GREEN, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>
              Prophecy — 6 Topics
            </h2>
            {PROPHECY_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
                expanded={!!expanded[item.id]}
                onToggle={toggleAccordion}
              />
            ))}
          </div>
        )}

        {/* Tab: Healing */}
        {activeTab === "healing" && (
          <div>
            <h2 style={{ color: GREEN, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>
              Healing — 6 Topics
            </h2>
            {HEALING_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
                expanded={!!expanded[item.id]}
                onToggle={toggleAccordion}
              />
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Lectures, debates, and teachings on the charismatic gifts — tongues, prophecy, healing — and the cessationism vs. continuationism question.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "hRgaZNBYOjo", title: "The Debate Over Holy Spirit Gifts: Cessationism vs Continuationism", channel: "Theological Debate", description: "A clear presentation of both sides of the debate — do miraculous gifts like tongues and prophecy continue today, or did they cease with the apostles?" },
                  { videoId: "qy5Tyra2qTM", title: "What Is Cessationism? A Continuationist Perspective", channel: "Sam Storms", description: "Sam Storms, a leading continuationist theologian, explains what cessationism claims and why he believes the biblical case for continuing gifts is stronger." },
                  { videoId: "P-DMS1hVYRM", title: "Tongues, Healing, Prophecy: For Today?", channel: "Theological Discussion", description: "A balanced examination of what the New Testament actually teaches about tongues, prophecy, and healing — and whether those gifts are available to the church today." },
                  { videoId: "bI3P0TYp94c", title: "Miraculous Gifts Today — Debating Cessationism vs. Continuationism Pt. 1", channel: "Theology Debate", description: "A formal debate between cessationists and continuationists on whether miraculous gifts have ceased or continue in the contemporary church." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
