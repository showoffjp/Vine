"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TEAL = "#0D9488";

const STORAGE_KEY = "vine_prayerhealing_entries";

interface PHLEntry {
  id: string;
  date: string;
  prayedFor: string;
  whatPrayed: string;
  whatHappened: string;
}

const theologySections = [
  {
    title: "James 5:14-16 — Elders, Anointing, and Healing",
    body: "James 5:14-16 is the most explicit instruction in the New Testament on praying for the sick: \"Is anyone among you sick? Let him call for the elders of the church, and let them pray over him, anointing him with oil in the name of the Lord. And the prayer of faith will save the one who is sick, and the Lord will raise him up.\" Several things are striking here. First, the practice is communal — the individual is not told to believe harder in private but to call the church's leaders. Second, the anointing with oil connects to the medicinal and symbolic practices of the ancient world, suggesting a both/and posture: medicine and prayer together, not instead of. Third, James grounds the promise in the \"prayer of faith,\" not a formula, and immediately points to Elijah as an example of an ordinary human whose prayer shut the sky. The passage does not explain exceptions or offer a theology of why healing sometimes does not come — it simply calls the church to the practice and trusts God with the outcome. This text functions as the standing instruction that makes healing prayer a normative part of church life, not an exceptional event for specially gifted individuals alone.",
  },
  {
    title: "Matthew 4:23 — The Healing Ministry of Jesus",
    body: "\"And he went throughout all Galilee, teaching in their synagogues and proclaiming the gospel of the kingdom and healing every disease and every affliction among the people\" (Matthew 4:23). This summary verse appears twice in Matthew's Gospel (again in 9:35), bookending the Sermon on the Mount and the calling of the Twelve. The pattern it describes is not occasional or random: Jesus healed consistently, publicly, and across every category of illness the ancient world knew. The Gospels record over thirty individual healing accounts and numerous summaries of mass healings. What is theologically significant is that healing was not incidental to Jesus's ministry but integral to his proclamation of the kingdom: the in-breaking reign of God was visible in bodies made whole. To follow Jesus into the world, then, is at least partly to continue the signs of the kingdom's arrival. The church does not heal in its own power, but it prays for healing as testimony that the same kingdom Jesus announced is still advancing — that sickness and death remain enemies that the risen Christ is defeating, even now, one prayer at a time.",
  },
  {
    title: "Isaiah 53:5 — \"By His Wounds You Are Healed\"",
    body: "\"But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed\" (Isaiah 53:5). This verse sits at the center of one of the most contested theological debates in healing theology. The \"healing\" here, read in its original context, refers to spiritual restoration — the healing of the breach between humanity and God caused by sin. Peter quotes this verse in 1 Peter 2:24 in precisely that sense, connecting it to Christ's atoning work. Matthew, however, cites Isaiah 53 in connection with physical healing miracles (Matthew 8:17), suggesting that what was true spiritually overflows into the physical. The debate between those who emphasize the primarily spiritual referent and those who argue that the atonement includes provision for physical healing is genuine and deserves honest engagement. What both sides agree on is this: in the ultimate eschatological consummation, every form of brokenness — spiritual, physical, relational — will be healed, because Christ's work is total. The question of \"when\" that healing is accessed — now or only at the resurrection — shapes much of the practical theology of healing prayer.",
  },
  {
    title: "Cessationism — The View That Healing Gifts Ended",
    body: "The cessationist position, associated historically with B.B. Warfield and in contemporary theology with John MacArthur, holds that the miraculous gifts of the Spirit — including the gift of healing — served a specific purpose in the apostolic age: to authenticate the apostles and the message they preached before the canon of Scripture was complete. Once the New Testament was established, the argument goes, the authenticating signs were no longer necessary and thus ceased. Warfield's \"Counterfeit Miracles\" (1918) argued historically that documented miraculous gifts disappear from the church record after the apostolic generation. Cessationists do not generally deny that God can and does heal; they deny that there is a continuing spiritual gift of healing that certain Christians possess as a regular endowment of the Spirit. For practical purposes, this means cessationists affirm the validity of praying for the sick while remaining skeptical of healing ministries that claim to operate a gift parallel to that of the apostles. This is a minority position globally, though it has been influential in Western Reformed and dispensationalist circles.",
  },
  {
    title: "Continuationism — Gifts Continue in the Majority Church",
    body: "The continuationist position holds that the gifts of the Spirit described in 1 Corinthians 12 and Romans 12 — including healing — continue throughout the church age until Christ returns. This is the position of the majority of global Christianity: the entire Pentecostal and charismatic movement (numbering roughly 600 million), most of the Global South church, and an increasing number of evangelical scholars (Gordon Fee, Craig Keener, Wayne Grudem). The biblical case draws on 1 Corinthians 13:8-10, which connects the cessation of prophecy and tongues not to the closing of the canon but to \"the perfect\" — most naturally read as the return of Christ. Historically, continuationists point to documented accounts of healing across the centuries — Justin Martyr, Irenaeus, Augustine later in his ministry, healing accounts through the medieval period, and the extraordinary explosion of healing testimony in the twentieth-century Global South — as evidence that the gifts did not cease. The practical implication is that every local church ought to expect, practice, and occasionally witness divine healing as a normal, if unpredictable, dimension of life in the Spirit.",
  },
  {
    title: "Why God Does Not Always Heal — The Hard Question",
    body: "If God can heal, if Jesus consistently healed, if we are commanded to pray — why do faithful, praying people suffer and die of illness? This is not a theoretical question; it is pastoral and urgent. Scripture itself refuses to give a single tidy answer. Paul describes a \"thorn in the flesh\" (2 Corinthians 12:7-10) that he begged God three times to remove. God's answer was not healing but grace: \"My grace is sufficient for you, for my power is made perfect in weakness.\" The thorn remained, and in remaining, produced a depth of dependence on God that removal might have prevented. Epaphroditus \"was ill, near to death\" (Philippians 2:27), and God had mercy — but only barely. Timothy's \"frequent ailments\" (1 Timothy 5:23) were addressed with practical medicine (a little wine), not miraculous healing. The theology of the cross suggests that suffering is not always the absence of God's favor but can be the site of his most transforming work. Joni Eareckson Tada, paralyzed since age 17 and a global voice on disability theology, has written that her wheelchair has done more for her soul than her legs ever would have. None of this means we should stop asking, or stop expecting. It means we hold expectation and submission in the same hand — \"Lord, if you are willing\" — and trust that the God who sometimes heals and sometimes doesn't is always working toward a wholeness that exceeds our current vision.",
  },
  {
    title: "The Gift of Healing vs. the Command to Pray for the Sick",
    body: "A critical pastoral distinction runs through all healing theology: the difference between the spiritual gift of healing (1 Corinthians 12:9) and the general command to pray for the sick (James 5:14-16, Mark 16:18). Not everyone has the gift — the Spirit distributes gifts \"as he wills\" (1 Corinthians 12:11), and Paul's rhetorical question \"do all work miracles? Do all possess gifts of healing?\" expects the answer no. But James does not address the gifted; he addresses every elder, and by extension, every believer. This matters because it liberates ordinary Christians from the anxiety of needing a special gift before they dare ask. You do not need to be gifted to pray for your friend's cancer, your child's fever, your colleague's depression. You need only to be willing to ask the Father who \"gives generously to all\" (James 1:5). The gift of healing describes a consistent, extraordinary manifestation of healing through a particular person's prayer; the command to pray describes the standing responsibility of the whole people of God to bring the sick before the throne of grace.",
  },
  {
    title: "Healing and Faith — Does Faith Produce Healing?",
    body: "Few questions in healing theology create more pastoral damage than this one: if healing depends on faith, and healing does not come, does that mean the person lacked faith? This can lead to a devastating double wound — suffering plus spiritual shame. The biblical data is more complex than a simple faith-healing equation. Jesus does connect faith and healing in numerous instances: \"Your faith has made you well\" (Mark 5:34, Luke 17:19). He also notes that he could do few miracles in Nazareth because of their unbelief (Matthew 13:58). Yet he healed the man at the pool of Bethesda who had no idea who Jesus was (John 5:1-15). He raised Lazarus without any faith expressed by Lazarus himself. He healed ten lepers and only one returned with gratitude — yet all ten were healed. The relationship between faith and healing is real but not mechanical. Faith is the atmosphere of expectant trust rather than the force that compels God's action. Healing prayer can and should be offered with genuine expectation, and that expectation is itself a form of faith. But when healing does not come, it does not follow that faith was absent — it may mean that God's timing, God's purpose, or God's better gift is in view.",
  },
  {
    title: "How to Pray for Healing — With Expectation, Without Manipulation",
    body: "Healing prayer at its best holds two things in tension: genuine expectation that God can and may heal now, and honest submission to God's wisdom if he does not. The model is Jesus in Gethsemane: \"Father, all things are possible for you. Remove this cup from me. Yet not what I will, but what you will\" (Mark 14:36). That prayer is neither passive resignation nor demanding presumption. It brings a real request with real urgency, acknowledges God's limitless power, and then surrenders the outcome. Practically: pray specifically — name the condition, the person, the hope. Pray with touch when welcome (the laying on of hands has scriptural warrant and is a powerful embodied act of blessing). Pray expectantly but without guaranteeing outcomes to the sick person, which is manipulation rather than faith. Make space for God to speak or give impressions while you pray. And if healing does not come immediately, pray again — the persistent widow (Luke 18:1-8) is a model for healing prayer as much as anything else. Keep records of what you prayed and what happened, including the cases where healing was slow, partial, or absent. God's faithfulness is visible across those records even when individual outcomes are not what you hoped.",
  },
];

const practices = [
  {
    name: "The Laying On of Hands",
    body: "Practice the ancient gesture of placing your hands on a person while you pray for their healing. This is explicitly modeled in the Gospels (Mark 6:5, Luke 4:40) and recommended in the New Testament (James 5:14). Ask permission first — physical touch is a gift and must not be imposed. When the person consents, place your hands gently on their shoulder or the affected area (if appropriate), and pray aloud: specific, personal, expecting. The physical act embodies the spiritual truth that you are bringing this person before the Father. Even if nothing dramatic happens, you have performed an act of compassion that says: I see your suffering, I am with you, and I believe God is near.",
  },
  {
    name: "The Healing Journal",
    body: "George Müller kept meticulous records of every prayer and its answer. Adopt this discipline for healing prayer. In a notebook or the Journal tab on this page, record: who you prayed for, what the condition was, what you specifically asked, and what happened — including \"nothing visible,\" partial improvement, or eventual death. Over months and years this ledger will reveal patterns you cannot see in individual moments: how often prayer preceded recovery, what prayers preceded slow healing, and the cases where God's grace came in a form different from the one requested. Honesty is essential — a healing journal that only records successes distorts reality and eventually collapses under the weight of the exceptions.",
  },
  {
    name: "Communal Healing Services",
    body: "James 5 envisions communal healing prayer, not private individual practice. If your church does not regularly offer opportunities for healing prayer, begin advocating for them: a few minutes at the end of a service, a monthly prayer ministry team available after worship, anointing with oil offered during communion seasons. If you are in a position to lead, model the practice yourself — brief, specific, expectant, honest about outcomes. Many Western churches have abdicated this dimension of New Testament Christianity, leaving their members to either embrace manipulative healing ministries or abandon healing prayer altogether. The third way is humble, faithful, expectant prayer in community, offered without guarantee and without shame when healing does not come.",
  },
  {
    name: "Praying Through Scripture",
    body: "When praying for the sick, let Scripture shape the content of the prayer. Read Isaiah 53:5 aloud and ask for its fulfilment in this body. Pray Psalm 103:3 — \"who heals all your diseases\" — as an affirmation of who God is before making any specific request. Personalize Matthew 4:23 — \"Lord, you went about healing every disease; come now to this disease.\" This practice prevents healing prayer from degenerating into either clinical petition or magical formula; it roots the request in the character of the God to whom we pray. It also helps the sick person hear what God has said about himself regarding their condition, which is often as healing to the heart as medicine is to the body.",
  },
  {
    name: "Sitting With the Unhealed",
    body: "Healing theology that only celebrates recovery fails the people Jesus most consistently sought: the chronically ill, the lifelong disabled, the dying. Practice the ministry of presence with those for whom healing has not come: visit them regularly, pray for them continually, resist the temptation to offer explanations for why they have not been healed (Job's friends are the model to avoid), and listen for what God is doing in and through their suffering. Joni Eareckson Tada describes her disability as a doorway into a depth of prayer and dependence she could not have reached without it. The church's ministry to the unhealed is not a consolation prize when healing prayer fails — it is the heart of the gospel worked out in real bodies over real time.",
  },
  {
    name: "Expectant, Submitted Prayer",
    body: "Develop the habit of Mark 14:36 prayer — \"not what I will, but what you will\" — not as a retreat from expectation but as its deepest expression. Begin healing prayer by declaring what you believe God can do: \"Father, you raised Jesus from the dead; there is nothing beyond your power.\" Then make the specific request: \"Heal this cancer. Restore this body. Drive out this infection.\" Then release the outcome: \"We ask this in faith, but we trust your wisdom and your love if healing comes another way or another time.\" This structure prevents both the passivity that never really asks and the presumption that demands and then blames God or the sick person when healing does not come. It is the prayer Jesus taught his disciples to pray — thy will be done — offered not as resignation but as trust in a Father whose will is always good.",
  },
];

const voices = [
  {
    name: "Francis MacNutt",
    years: "1925–2020",
    role: "Dominican priest and pioneer of healing prayer renewal",
    body: "MacNutt was a Dominican priest who became one of the most influential voices for healing prayer in Catholic and ecumenical Christianity during the charismatic renewal of the 1960s and 70s. His book \"Healing\" (1974) became a foundational text, offering a balanced, pastoral theology of physical and inner healing that rejected both cessationist skepticism and word-of-faith manipulation. MacNutt prayed for thousands of people over decades, kept honest records, and insisted on the importance of medical care alongside prayer. He later married and founded Christian Healing Ministries in Jacksonville, Florida, which trained generations of ministers in healing prayer. His legacy is a model of how healing prayer can be theologically serious, pastorally careful, and genuinely expectant without being sensationalist.",
    quote: "Healing prayer is not a technique. It is an encounter between a suffering person and the compassion of Christ, mediated through ordinary, praying people.",
  },
  {
    name: "John Wimber",
    years: "1934–1997",
    role: "Vineyard founder and teacher of \"power evangelism\"",
    body: "Wimber was a former rock musician and church-growth consultant who became a pastor and one of the most significant figures in the renewal of healing ministry in evangelical Protestantism. Founding the Association of Vineyard Churches, he developed the concept of \"power evangelism\" — the idea that the gospel's proclamation is naturally accompanied by signs and wonders that confirm its truth, as in Acts. His books \"Power Evangelism\" and \"Power Healing\" introduced a generation of evangelicals to healing prayer who had previously written it off as the province of television faith healers. Wimber was notably honest about failure — he kept records of outcomes and openly discussed the cases where healing did not come, which gave his teaching a credibility that triumphalist healing ministries lacked. His teaching model of \"pray, observe, pray again\" remains influential in continuationist circles.",
    quote: "I am just a fat man trying to get to heaven. I pray for the sick because Jesus told me to, and because he is still the same compassionate Lord he was in Galilee.",
  },
  {
    name: "Jack Deere",
    years: "1945–",
    role: "Former cessationist turned continuationist scholar",
    body: "Deere is a former Dallas Theological Seminary professor who was a committed cessationist until a series of experiences — including what he describes as a prophetic word that preceded his son's death — compelled him to reexamine the scriptural and historical evidence. His book \"Surprised by the Power of the Spirit\" (1993) became one of the most influential arguments for continuationism written by a scholar with credentialed Reformed training. Deere's value is his inside knowledge of cessationist arguments, which allows him to engage them charitably and precisely rather than dismissively. He acknowledges both the reality of genuine gifts and the prevalence of counterfeit experiences, and he argues that the biblical evidence for the continuation of healing gifts is stronger than the theological tradition that denied it. His personal story — including later grief — adds pastoral weight to his intellectual arguments.",
    quote: "The Bible never teaches that the miraculous gifts of the Spirit would cease before the return of Christ. That doctrine was developed to explain an experience of powerlessness, not to exposit a text.",
  },
  {
    name: "Wayne Grudem",
    years: "1948–",
    role: "Systematic theologian and open but cautious continuationist",
    body: "Grudem's treatment of healing in his \"Systematic Theology\" represents perhaps the most careful evangelical middle position: he argues for the continuation of all the gifts (including healing) based on 1 Corinthians 13:8-10, while also insisting that the gift of healing in the New Testament sense does not guarantee healing in every case, and that the New Testament itself shows considerable variation in healing outcomes even during the apostolic period. Grudem is particularly helpful on the \"gift vs. command\" distinction — not everyone has the gift, but every Christian can pray for the sick in expectation. His work on prophecy and spiritual gifts has shaped a generation of Reformed evangelicals willing to remain open to healing prayer without adopting the theology of the health-and-wealth gospel.",
    quote: "We should pray for healing with genuine faith and expectation, knowing that God can heal and often does, while honestly acknowledging that he does not always do so — and that unanswered prayer is not evidence of either God's absence or our lack of faith.",
  },
  {
    name: "John Piper",
    years: "1946–",
    role: "Reformed Baptist pastor and cautious cessationist-leaning voice",
    body: "Piper occupies an interesting position in healing theology: he is not strictly cessationist, affirms that God heals sovereignly in answer to prayer, but is skeptical of the \"gift of healing\" as a continuing office or endowment in the New Testament sense. His pastoral approach — pray earnestly and expectantly, trust God's sovereignty in the outcome, never tell a sick person their faith is insufficient — has shaped a large sector of Reformed evangelicalism. Piper has prayed publicly for healing at his church and written movingly about suffering as a means of grace. His contribution is the insistence that healing prayer can be robust and expectant without becoming a theology that shames the unhealed or domesticates the mystery of God's ways.",
    quote: "Ask God to heal. Ask him again. Ask him a hundred times. And trust that when he does not, he has purposes deeper than your sight and more tender than your pain.",
  },
  {
    name: "Joni Eareckson Tada",
    years: "1949–",
    role: "Disability theologian and voice on unanswered healing prayer",
    body: "Joni Eareckson Tada has been a quadriplegic since a diving accident at age seventeen. She has been prayed over for healing thousands of times, by individuals and in large gatherings, with the laying on of hands and anointing with oil. She has not been healed. What has emerged instead is one of the twentieth and twenty-first century's most profound theologies of suffering: her books \"Joni,\" \"A Lifetime of Wisdom,\" and \"A Place of Healing\" explore how her wheelchair has become the site of extraordinary spiritual formation, global ministry, and a witness to the world that meaning does not depend on physical wholeness. Joni does not oppose healing prayer — she believes in it, practices it, and longs for the resurrection body. But her life is the most powerful available testimony to the pastoral reality that God's refusal to heal can be itself an act of love, and that the unanswered prayer is not the end of the story.",
    quote: "If God can bring joy in the middle of suffering — not despite it, but through it — then I know that my suffering is not wasted, and I know that the God who permitted it is better than any healing could show.",
  },
];

const scriptures = [
  {
    ref: "James 5:14-15",
    text: "Is anyone among you sick? Let him call for the elders of the church, and let them pray over him, anointing him with oil in the name of the Lord. And the prayer of faith will save the one who is sick, and the Lord will raise him up.",
    note: "The standing instruction of the New Testament church: healing prayer is not optional or exceptional but a regular, communal practice. The command is simple and unqualified — call the elders, anoint, pray. God decides the rest.",
  },
  {
    ref: "Matthew 4:23",
    text: "And he went throughout all Galilee, teaching in their synagogues and proclaiming the gospel of the kingdom and healing every disease and every affliction among the people.",
    note: "Healing was not peripheral to Jesus's ministry but constitutive of it — a visible sign that the kingdom of God was arriving in power. To follow Jesus is to continue this witness that disease and death are not the last word.",
  },
  {
    ref: "Isaiah 53:5",
    text: "But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed.",
    note: "The Servant's suffering is redemptive and wide in its reach. The healing won at the cross is ultimately total — spiritual, relational, physical — though the fullness of physical healing awaits the resurrection. We pray now in light of what is coming.",
  },
  {
    ref: "2 Corinthians 12:9",
    text: "But he said to me, \"My grace is sufficient for you, for my power is made perfect in weakness.\" Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.",
    note: "God's response to Paul's prayer for healing was not healing but grace. This is the pastoral anchor for those who pray faithfully and do not receive what they asked for — the grace that sustains in weakness is itself a gift, and the power displayed in it may be greater than any cure.",
  },
  {
    ref: "Mark 5:34",
    text: "And he said to her, \"Daughter, your faith has made you well; go in peace, and be healed of your disease.\"",
    note: "Faith and healing are genuinely connected in the Gospels — not as a transaction but as an atmosphere of trusting expectation. The woman who touched the hem of Jesus's garment did not have certainty; she had desperate, hopeful reach. That was enough.",
  },
  {
    ref: "Mark 14:36",
    text: "And he said, \"Abba, Father, all things are possible for you. Remove this cup from me. Yet not what I will, but what you will.\"",
    note: "Gethsemane is the model for all healing prayer: genuine desire, acknowledged power, surrendered outcome. The cup was not removed, and the cross was the site of the world's greatest redemption. We pray with open hands.",
  },
];

const videos = [
  { videoId: "D9SQxUCgP6s", title: "James 5 and Healing Prayer — A Biblical Foundation" },
  { videoId: "6dQk8N2gFV4", title: "Jesus the Healer — The Kingdom and Physical Healing" },
  { videoId: "M7c0mmhfViI", title: "Why Doesn't God Always Heal? — Honest Theology" },
  { videoId: "3N4S7iakH_s", title: "Cessationism vs. Continuationism — The Gifts Today" },
  { videoId: "fJjLXLzEFp4", title: "Joni Eareckson Tada — Suffering, Hope, and Healing" },
  { videoId: "hh8kZqjxXzc", title: "How to Pray for the Sick — A Practical Guide" },
];

const relatedPages = [
  { href: "/christian-prayer-guide", label: "Christian Prayer" },
  { href: "/christian-suffering", label: "Suffering & the Cross" },
  { href: "/holy-spirit", label: "The Holy Spirit" },
  { href: "/spiritual-gifts", label: "Spiritual Gifts" },
  { href: "/christian-faith-guide", label: "Christian Faith" },
  { href: "/theology-of-body", label: "Theology of the Body" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianPrayerHealingPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PHLEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [prayedFor, setPrayedFor] = useState("");
  const [whatPrayed, setWhatPrayed] = useState("");
  const [whatHappened, setWhatHappened] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed);
      }
    } catch {
      // ignore corrupted storage
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // storage may be unavailable
    }
  }, [entries, loaded]);

  const saveEntry = () => {
    if (!prayedFor.trim()) return;
    const entry: PHLEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      prayedFor: prayedFor.trim(),
      whatPrayed: whatPrayed.trim(),
      whatHappened: whatHappened.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setPrayedFor("");
    setWhatPrayed("");
    setWhatHappened("");
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: BG,
    border: `1px solid ${BORDER}`,
    borderRadius: 10,
    color: TEXT,
    padding: "0.75rem 0.9rem",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: TEXT,
    fontWeight: 700,
    fontSize: "0.88rem",
    marginBottom: "0.4rem",
  };

  const hintStyle: React.CSSProperties = {
    color: MUTED,
    fontSize: "0.8rem",
    margin: "0.3rem 0 0",
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT }}>
      <main id="main-content" style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{
            background: TEAL + "22",
            color: TEAL,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Prayer &amp; Healing
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Is Anyone Sick? Christian Prayer for Healing
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          &ldquo;Is anyone among you sick? Let him call for the elders of the church, and let them pray over him,
          anointing him with oil in the name of the Lord&rdquo; (James 5:14). The New Testament church prayed for
          the sick as a matter of ordinary faithfulness, not extraordinary spectacle &mdash; and the healing
          ministry of Jesus himself wove physical restoration into the very fabric of the kingdom&rsquo;s arrival.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide engages the theology of healing prayer honestly: the cessationist and continuationist debates,
          the hard question of why God does not always heal, the witness of those who prayed and waited and waited
          again, and how to hold expectation and submission in the same hand.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                border: "1px solid",
                borderColor: tab === t.id ? TEAL : BORDER,
                background: tab === t.id ? TEAL + "22" : "transparent",
                color: tab === t.id ? TEAL : MUTED,
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              A Theology of Healing Prayer
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Nine movements through Scripture&rsquo;s teaching on healing &mdash; from the elders anointing the sick
              to the hard question of unanswered prayer, and the practice of asking with open hands.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: TEAL, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{item.body}</p>
              </div>
            ))}
            <div style={{ background: TEAL + "11", border: `1px solid ${TEAL}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Healing prayer lives between two poles: the confidence that says &ldquo;God can and often does heal&rdquo;
                and the honesty that says &ldquo;God does not always heal, and that is not a failure of faith.&rdquo;
                The church that holds both poles &mdash; praying expectantly, recording honestly, sitting faithfully
                with the unhealed &mdash; bears the most truthful witness to the God who is simultaneously all-powerful
                and mysteriously wise.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              Practices of Healing Prayer
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six practices that give shape to healing prayer &mdash; embodied, honest, expectant, and rooted in
              community rather than individual spiritual heroics.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: TEAL + "22",
                  color: TEAL,
                  fontWeight: 800,
                  borderRadius: "50%",
                  width: 34,
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "0.9rem",
                }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", margin: "0.25rem 0 0.5rem" }}>{p.name}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              Voices on Healing Prayer
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six voices &mdash; practitioners, scholars, theologians, and one whose unanswered prayer has become a
              global ministry &mdash; who together map the full terrain of healing prayer in the church.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{v.years}</span>
                </div>
                <div style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}>{v.body}</p>
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${TEAL}`,
                  background: TEAL + "0E",
                  borderRadius: "0 8px 8px 0",
                  color: TEXT,
                  fontStyle: "italic",
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              Scripture on Healing
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts that span the full range of healing theology &mdash; from the command to pray and
              the healing pattern of Jesus to the grace given in unanswered prayer.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: TEAL, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: "0 0 0.9rem",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  borderLeft: `3px solid ${TEAL}`,
                  paddingLeft: "1rem",
                }}>
                  {s.text}
                </p>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: TEAL + "11", border: `1px solid ${TEAL}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>Praying Scripture for the sick:</strong> take one of these texts
                before a healing prayer appointment and read it aloud. Let the person hear what God has already said
                about their condition before you make any request of your own. Scripture shapes the prayer and
                strengthens the faith of everyone in the room.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: 0 }}>
              Healing Prayer Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Record who you prayed for, what you specifically prayed, and what happened &mdash; including when
              healing did not come. An honest ledger of healing prayer, kept over time, reveals God&rsquo;s
              faithfulness in ways that no single outcome can. Entries are saved privately in your browser.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="phl-prayedFor" style={labelStyle}>Who I prayed for</label>
                <textarea
                  id="phl-prayedFor"
                  value={prayedFor}
                  onChange={e => setPrayedFor(e.target.value)}
                  rows={2}
                  placeholder="e.g. My father-in-law, stage 3 lung cancer; a friend recovering from surgery; a child in our congregation with chronic pain..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Name the person and the condition as specifically as you can.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="phl-whatPrayed" style={labelStyle}>What I prayed</label>
                <textarea
                  id="phl-whatPrayed"
                  value={whatPrayed}
                  onChange={e => setWhatPrayed(e.target.value)}
                  rows={2}
                  placeholder="e.g. Prayed for complete healing of the tumor; anointed with oil with three elders; asked specifically for freedom from pain..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Record the actual content of the prayer, not a general description.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="phl-whatHappened" style={labelStyle}>What happened</label>
                <textarea
                  id="phl-whatHappened"
                  value={whatHappened}
                  onChange={e => setWhatHappened(e.target.value)}
                  rows={2}
                  placeholder="e.g. Tumor shrank significantly at next scan; no visible change but peace came; passed away three weeks later — but with great peace..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>
                  Honesty here matters most. Include healing, partial improvement, peace, unchanged conditions,
                  and death. The full ledger is more truthful &mdash; and more faith-building &mdash; than a
                  selective one.
                </p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!prayedFor.trim()}
                style={{
                  background: prayedFor.trim() ? TEAL : BORDER,
                  color: prayedFor.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: prayedFor.trim() ? "pointer" : "not-allowed",
                }}
              >
                Save Entry
              </button>
            </div>

            <div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
                Your Entries {loaded && entries.length > 0 && (
                  <span style={{ color: MUTED, fontWeight: 600, fontSize: "0.85rem" }}>({entries.length})</span>
                )}
              </h3>

              {!loaded && (
                <p style={{ color: MUTED, fontSize: "0.92rem", margin: 0 }}>Loading your journal&hellip;</p>
              )}

              {loaded && entries.length === 0 && (
                <div style={{ background: CARD, border: `1px dashed ${BORDER}`, borderRadius: 12, padding: "1.5rem", textAlign: "center" }}>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.92rem", lineHeight: 1.7 }}>
                    No entries yet. Begin your healing prayer ledger above &mdash; one prayer at a time,
                    honestly recorded.
                  </p>
                </div>
              )}

              {loaded && entries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {entries.map(entry => (
                    <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", position: "relative" }}>
                      <button
                        onClick={() => deleteEntry(entry.id)}
                        aria-label="Delete entry"
                        style={{
                          position: "absolute",
                          top: "0.9rem",
                          right: "0.9rem",
                          background: "transparent",
                          border: `1px solid ${BORDER}`,
                          borderRadius: 8,
                          color: MUTED,
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          padding: "0.25rem 0.65rem",
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                      <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{entry.date}</div>
                      <div style={{ marginBottom: "0.75rem", paddingRight: "4.5rem" }}>
                        <div style={{ color: TEAL, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Prayed For
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.prayedFor}</p>
                      </div>
                      {entry.whatPrayed && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: TEAL, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            What I Prayed
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.whatPrayed}</p>
                        </div>
                      )}
                      {entry.whatHappened && (
                        <div>
                          <div style={{ color: TEAL, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            What Happened
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.whatHappened}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on James 5, the healing ministry of Jesus, the cessationist and continuationist debate,
              and honest pastoral engagement with unanswered healing prayer.
            </p>
            {videos.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "0.98rem", margin: 0 }}>{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Related pages */}
        <div style={{ marginTop: "3rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
            Continue Exploring
          </h2>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {relatedPages.map(r => (
              <Link
                key={r.href}
                href={r.href}
                style={{
                  border: `1px solid ${BORDER}`,
                  background: CARD,
                  color: MUTED,
                  padding: "0.45rem 1rem",
                  borderRadius: 20,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {r.label}
              </Link>
            ))}
          </div>
          <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: 660 }}>
            &ldquo;Is anyone among you sick? Let him call for the elders of the church, and let them pray over
            him.&rdquo; The command has not been revoked. Pray &mdash; specifically, expectantly, honestly,
            repeatedly &mdash; and trust the outcome to the God whose purposes run deeper than any single
            unanswered prayer.
          </p>
        </div>
      </main>
    </div>
  );
}
