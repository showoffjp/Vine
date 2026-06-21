"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const RED = "#EF4444";

const STORAGE_KEY = "vine_spiritualwarfare_entries";

interface SWREntry {
  id: string;
  date: string;
  attackRecognized: string;
  weaponUsed: string;
  victoryGround: string;
}

const theologySections = [
  {
    title: "Ephesians 6:10-18 — The Armor of God",
    body: "Paul's extended metaphor of spiritual armor in Ephesians 6:10-18 is the New Testament's most systematic account of how the Christian engages in spiritual conflict. Each piece is significant. The belt of truth secures everything else — without truthfulness and doctrinal integrity, the other pieces cannot stay in place. The breastplate of righteousness guards the vitals: the enemy's primary assault is often through accusation, and only a clear conscience before God resists it. The shoes of readiness given by the gospel of peace speak to a soldier's stability — the believer stands firm precisely because the gospel of peace has made them secure, not anxious. The shield of faith — held out in front, overlapping with the shields of fellow soldiers in the Roman phalanx formation Paul's readers would have recognized — extinguishes \"all the flaming darts of the evil one\": the sudden doubts, sinful suggestions, and accusatory lies that arrive without warning. The helmet of salvation protects the mind — assurance of salvation is not a luxury; it is armor. And the sword of the Spirit, which is the word of God, is the only offensive weapon in the set, the same instrument Jesus wielded in the wilderness against every temptation. Critically, Paul commands the believer to stand, not to advance and conquer. The battle has already been won at the cross; the armor enables the Christian to hold ground that Christ has secured.",
  },
  {
    title: "1 Peter 5:8 — Your Enemy Prowls",
    body: "\"Be sober-minded; be watchful. Your adversary the devil prowls around like a roaring lion, seeking someone to devour\" (1 Peter 5:8). Peter's counsel is balanced: take spiritual warfare seriously without becoming paranoid. A roaring lion is both genuinely dangerous and sometimes a bluff — lions roar to frighten prey into panicked movement that makes them easier to catch. The Christian response, according to Peter, is not fearful retreat but sobriety and watchfulness — a calm, alert awareness that is the opposite of both naivety and obsession. The context is crucial: Peter has just told his readers to humble themselves under God's mighty hand and cast all their anxieties on God (5:6-7). The warfare passage follows the peace passage, not the other way around. Spiritual warfare is conducted from a position of security in God's care, not from a position of fear. The practical implication is a lifestyle of attentiveness: noticing when thought patterns, relational dynamics, or circumstances seem to be working against your soul — and responding with prayer, the word, and community rather than either dismissal or spiraling alarm.",
  },
  {
    title: "Colossians 2:15 — Christ Disarmed the Powers",
    body: "\"He disarmed the rulers and authorities and put them to open shame, by triumphing over them in him\" (Colossians 2:15). This verse is the theological anchor for all Christian spiritual warfare: the decisive victory has already been won. Paul uses the language of a Roman triumph — the military parade in which a victorious general marched his defeated enemies through the streets in public humiliation before the watching city. That is what Christ did to the demonic powers at the cross. They are disarmed. They can still create noise and fear — a disarmed enemy is still frightening — but they cannot deliver the wound they threaten. This has enormous practical consequence: Christian spiritual warfare is not a battle whose outcome is uncertain. It is mopping-up operation, enforcement of a peace already signed. The believer resists the enemy not to defeat him — Christ already did that — but to refuse to live under the tyranny of a power that has already lost its authority. The enemy's primary tactic in the post-cross era is deception: convincing believers that the victory was not really won, that they are still under the dominion of sin and death, that they should live in fear. The answer is always and only the cross.",
  },
  {
    title: "Territorial Spirits and Spiritual Mapping — A Nuanced Treatment",
    body: "The concept of territorial spirits — demonic powers assigned to geographic regions or institutions — has received significant theological and missiological attention since Peter Wagner's work on spiritual mapping in the 1990s. The biblical basis is real but limited: Daniel 10:12-13 describes a \"prince of the kingdom of Persia\" who hindered an angelic messenger for twenty-one days, and Revelation 2-3 addresses churches through the framework of overcoming, suggesting spiritual realities at work behind observable circumstances. The missiological insight — that organized prayer against spiritual opposition over a region has historically preceded major revivals — is taken seriously by large portions of the global church. However, several cautions are warranted. First, the Bible does not give us a detailed geography of demonic territorial jurisdiction; speculative mapping risks confident claims Scripture does not support. Second, the focus in New Testament spiritual warfare is consistently on the individual believer's life and the local church community, not strategic spiritual cartography. Third, an overemphasis on territorial spirits can subtly shift attention from Christ's already-accomplished victory to our strategic effectiveness. The most defensible position holds that territorial spirits may be real, prayer for cities and regions is clearly mandated (Jeremiah 29:7), and we should pray boldly without claiming to map demonic jurisdictions God has not revealed.",
  },
  {
    title: "Spiritual Warfare and Mental Illness — A Critical Pastoral Distinction",
    body: "One of the most pastorally important and theologically treacherous areas of spiritual warfare is discerning the relationship between spiritual oppression and mental illness. The history of the church includes many cases of individuals with schizophrenia, severe depression, bipolar disorder, or psychosis who were subjected to exorcism or deliverance ministry rather than receiving medical treatment — with often devastating results. The New Testament itself does not flatten these categories: Luke, writing as a physician, distinguishes between healing and exorcism in his accounts (Luke 13:11-13 depicts a bent woman whose condition is named as a spirit; other healings are described without any demonic attribution). Mature pastoral practice holds both realities simultaneously: evil is real, demonic oppression is real, and so is brain chemistry, trauma, and diagnosable psychiatric illness. A person presenting with auditory hallucinations, paranoid delusions, or extreme emotional dysregulation needs a psychiatrist alongside a pastor, not instead of one. The church's responsibility is to refer to medical care, pray for the whole person, and resist the arrogance that insists every presenting symptom has a spiritual cause. The demonic can influence and intensify mental suffering, but the presence of mental suffering does not diagnose demonic activity.",
  },
  {
    title: "The Christian's Authority in Christ — Luke 10:19",
    body: "\"Behold, I have given you authority to tread on serpents and scorpions, and over all the power of the enemy, and nothing shall hurt you\" (Luke 10:19). Jesus spoke these words to the seventy-two disciples who had returned from a mission trip marveling that even demons had submitted to his name. The authority he describes is delegated — it is his authority, exercised in his name, by his servants. This shapes how the believer engages: not through personal spiritual power, accumulated virtue, or ritual technique, but through the explicit authority of the risen Christ. James 4:7 describes the mechanics simply: \"Submit yourselves therefore to God. Resist the devil, and he will flee from you.\" The order is essential — submission to God precedes resistance of the devil. Authority flows from relationship and alignment with Christ, not from spiritual seniority or charismatic gifting. This is simultaneously humbling and liberating: the ordinary believer who is walking in submission to Christ has more spiritual authority than the impressive spiritual warrior who operates in pride, because the authority was never personal to begin with.",
  },
  {
    title: "Two Errors: Obsession and Neglect",
    body: "The Western church's relationship to spiritual warfare has historically lurched between two equally dangerous errors. The first is the church that ignores the demonic entirely — treating every adversity as either psychological or circumstantial, reducing prayer to therapy, and functioning as if the New Testament's warfare language were purely metaphorical. C.S. Lewis, in the preface to The Screwtape Letters, identified this as one of two equal and opposite errors: the error is to disbelieve in their existence. The second error is the church obsessed with the demonic — seeing demons behind every difficulty, practicing elaborate deliverance rituals, attributing every sin to spiritual attack rather than the flesh, and creating a spiritual culture of fear in which the enemy gets far more attention than Christ. Lewis named this error too: the other mistake is to feel an excessive and unhealthy interest in them. The corrective to both errors is a Christocentric theology that takes the enemy seriously precisely because it takes Christ's victory more seriously: the devil is a real and dangerous adversary who has been decisively defeated, and living in light of that victory requires neither naivety nor obsession.",
  },
  {
    title: "Prayer as Primary Weapon",
    body: "When Paul concludes his armor passage in Ephesians 6:18, he does not add prayer as an afterthought; he describes the atmosphere in which all the armor operates: \"praying at all times in the Spirit, with all prayer and supplication.\" Prayer is not the seventh piece of armor; it is the field of battle in which the armor is worn. It is also striking that Paul immediately requests prayer for himself — for boldness to declare the gospel as he ought (6:19-20). The most experienced spiritual warrior in the New Testament does not present himself as self-sufficient; he asks for prayer. Daniel's prayer in Daniel 9 and 10 corresponds directly to angelic activity and demonic resistance; the Psalms of lament create a template for bringing the full reality of spiritual opposition before God with honesty and expectation. Paul's call to pray \"at all times\" and \"for all the saints\" locates spiritual warfare in the ordinary, unceasing rhythm of a prayerful life rather than in occasional dramatic confrontations. The Christian who maintains consistent, Scripture-saturated, community-embedded prayer is doing more spiritual warfare than the one who engages in sporadic crisis moments of dramatic spiritual confrontation.",
  },
  {
    title: "Resisting with the Word — Jesus in the Wilderness",
    body: "Matthew 4:1-11 is the most instructive account in the Gospels of spiritual warfare in action. Jesus, led by the Spirit into the wilderness, is tempted three times by Satan with sophisticated, scripture-quoting attacks on his identity, his mission, and his worship. Each time, Jesus responds not with personal spiritual power or angelic appeal but with three words: \"It is written.\" He meets every temptation with the precise word of God that addresses it — Deuteronomy 8:3, 6:16, and 6:13. This is the sword of the Spirit demonstrated: the word of God, known deeply enough to be wielded precisely in the moment of assault. This has practical implications for spiritual formation: the Christian who has internalized Scripture through memorization, meditation, and regular reading has a sharper sword than one who is familiar with the Bible's general ideas but cannot locate a specific verse in the moment of pressure. Martin Luther described singing as a weapon against the devil, and the hymns that sustained many Christian prisoners were saturated with Scripture. The Word memorized and sung is the Word available when under attack, when fear rises, when the lies begin, when the night comes. Jesus in the wilderness shows us that the most basic spiritual warfare practice is the most ancient one: fill your mind with the word of God.",
  },
];

const practices = [
  {
    name: "Daily Armor-Putting-On",
    body: "Begin each morning with a deliberate prayer through Ephesians 6:10-18, naming each piece of armor as you would put it on. \"Father, I receive the belt of truth — let me live in integrity and hold fast to your word today. I put on the breastplate of righteousness — silence the accuser with Christ's justification of my life.\" Work through all six pieces. This is not magic; it is intentional theological orientation. You are reminding yourself before the day begins of who you are, what has been given to you, and what you are engaged in. Many Christians who practice this report that it shifts their posture from reactive anxiety to the standing, alert stability Paul describes. The prayer takes two to three minutes and repays the time many times over.",
  },
  {
    name: "Scripture Memorization as Weapon",
    body: "Following Jesus in the wilderness, choose one passage per month to memorize and deploy against the specific temptations or fears that most consistently trouble you. If the enemy's primary attack is doubt, memorize Romans 8:38-39. If fear is the point of assault, memorize Isaiah 41:10 or Psalm 46. If accusation is the pattern, memorize Romans 8:1 and Revelation 12:10-11. Write the verse on a card and carry it. Read it aloud when the pressure rises — Luther said the devil hates the spoken word of Scripture. Over a year you will have twelve scriptures by heart, and you will find yourself wielding them in moments of attack without pausing to look them up. This is what it means to have the sword ready.",
  },
  {
    name: "The Warfare Journal",
    body: "Use the Journal tab on this page or a physical notebook to record spiritual attacks recognized, the weapon or practice used to resist, and the ground of victory stood on. Over time this creates a personal warfare map: you will see patterns in when and how the enemy attacks, which weapons have been most effective for you, and how God's faithfulness has been consistent across many confrontations. Clinton Arnold calls this \"spiritual discernment\" — the trained ability to recognize what is happening spiritually in situations that might otherwise be read as purely circumstantial or psychological. Your journal becomes evidence of Christ's faithfulness across many small battles.",
  },
  {
    name: "Corporate Prayer and Confession",
    body: "Spiritual warfare is not a solo sport. James 5:16 — \"confess your sins to one another and pray for one another\" — appears in the same passage as healing prayer and is equally relevant to warfare. The enemy has little purchase in a life held accountable in transparent community. Isolation is his preferred staging ground. Find two or three believers with whom you will be honest about sin patterns, fear, and the areas where the enemy seems to gain ground in your life. Pray together regularly. This is not therapy; it is warfare. The confession that brings things into light removes the enemy's ability to accuse and shame in the dark, and the prayers of fellow soldiers carry weight that solitary prayer sometimes struggles to sustain.",
  },
  {
    name: "Submitting Before Resisting",
    body: "James 4:7 is a two-step command with an essential order: \"Submit yourselves therefore to God. Resist the devil, and he will flee from you.\" The second step depends on the first. Before any session of prayer against spiritual opposition, take time for genuine surrender to God: confess known sin, release control of areas where you have been operating independently, re-align your will with his. Many people try to resist the enemy while still clinging to areas of disobedience, and then wonder why their spiritual warfare has little effect. Submission removes the footholds — Paul's word for the enemy's leverage point in a believer's life (Ephesians 4:27) — that make resistance difficult. Warfare starts with the posture of worship, not the posture of confrontation.",
  },
  {
    name: "Singing Psalms and Hymns",
    body: "Luther, Bunyan, and many Christians in severe spiritual pressure have testified that singing Scripture and theologically rich hymns has particular power in warfare. Paul links being filled with the Spirit directly to \"addressing one another in psalms and hymns and spiritual songs, singing and making melody to the Lord with your heart\" (Ephesians 5:18-19) — in the verses that immediately precede the armor passage. The Psalms of lament and confidence, sung aloud, reorient the soul from the voice of the enemy to the voice of God. Choose five or six hymns or psalms that speak directly to the spiritual battles you face — on anxiety, on accusation, on fear, on the victory of Christ — and learn to sing them from memory. In the dark night of the soul, when the mind is too scattered for coherent prayer, the body's memory of a song can carry what the mind cannot.",
  },
];

const voices = [
  {
    name: "C.S. Lewis",
    years: "1898–1963",
    role: "The Screwtape Letters — satirist of the demonic",
    body: "Lewis's \"The Screwtape Letters\" (1942) remains the most widely read work on spiritual warfare in the English language, and its method is ingenious: it is a series of letters from a senior demon (Screwtape) to a junior one (Wormwood), advising him on the most effective ways to corrupt a newly converted Christian. By inverting the perspective, Lewis makes visible the enemy's strategies in a way that straightforward theological treatment cannot: the manipulation of emotion, the exploitation of boredom, the weaponization of familiarity in marriage and friendships, the gradual drift from vibrant faith to lukewarm respectability. Lewis himself said in the preface that he believed in the existence of devils as firmly as in that of God, but that his equal concern was the opposite danger of unhealthy fascination. His contribution to spiritual warfare theology is not a systematic account of demonic powers but an unnervingly accurate map of the ordinary tactics by which the enemy slowly wears down ordinary Christian lives — making the book one of the best practical guides to what spiritual warfare actually looks like on a Tuesday morning.",
    quote: "There are two equal and opposite errors into which our race can fall about the devils. One is to disbelieve in their existence. The other is to believe, and to feel an excessive and unhealthy interest in them.",
  },
  {
    name: "Clinton Arnold",
    years: "1958–",
    role: "New Testament scholar of Ephesians and spiritual warfare",
    body: "Arnold is a New Testament scholar whose dissertation on Paul's letter to the Ephesians examined the specific context of magic, power, and spiritual forces in the city of Ephesus, helping readers understand why the armor passage appears where it does in that particular letter. His book \"Powers of Darkness\" provides one of the most exegetically grounded accounts of what Paul meant by \"rulers, authorities, powers, and spiritual forces of evil in the heavenly realms\" (Ephesians 6:12). Arnold argues that Paul is addressing both personal demonic beings and the institutionalized structures of corporate evil that those beings animate — meaning spiritual warfare has both personal and social dimensions. His subsequent book \"Three Crucial Questions About Spiritual Warfare\" is one of the most balanced available treatments, distinguishing careful biblical teaching from the speculative excesses that sometimes accompany popular spiritual warfare literature.",
    quote: "Paul does not want the Ephesians to be afraid of these powers. He wants them to recognize what they are up against so they can avail themselves of the divine resources for resisting them.",
  },
  {
    name: "Gregory Boyd",
    years: "1957–",
    role: "Open theist theologian of spiritual conflict",
    body: "Boyd's \"God at War\" (1997) and \"Satan and the Problem of Evil\" (2001) offer the most comprehensive theological treatment of spiritual warfare in recent evangelical scholarship. Drawing on what he calls the \"warfare worldview\" of the biblical narrative, Boyd argues that Scripture consistently frames the problem of evil within the context of a real, ongoing conflict between God and rebellious supernatural powers — and that this worldview makes better sense of the biblical text (and of pastoral experience) than either the \"blueprint worldview\" that reads everything as God's direct will or the demythologized worldview that removes personal evil from the picture entirely. Boyd is associated with open theism, which makes some of his conclusions controversial, but his exegetical and historical work on the warfare theme in Scripture has been influential far beyond open theist circles and has given many pastors and theologians a richer vocabulary for engaging the reality of evil.",
    quote: "The warfare worldview does not minimize God's sovereignty; it locates the actual cause of evil where Scripture consistently locates it — in the free choices of rebel creatures, angelic and human — and refuses to make God the author of atrocities.",
  },
  {
    name: "Walter Wink",
    years: "1935–2012",
    role: "Powers trilogy — structural and systemic warfare",
    body: "Wink's three-volume study \"Naming the Powers,\" \"Unmasking the Powers,\" and \"Engaging the Powers\" represents the most thorough examination of Paul's \"powers\" language in twentieth-century scholarship. Wink argues that the New Testament's language of rulers, authorities, and principalities refers to the spiritual dimension of earthly institutions, systems, and structures — the inner spirit, as it were, of corporations, governments, economic systems, and cultural patterns. For Wink, spiritual warfare is therefore as much about the principalities behind racism, economic exploitation, and militarism as it is about personal demonic attack. His work has been deeply influential in liberation theology and in movements for social justice that ground their activism in spiritual prayer and resistance. Not all evangelical scholars follow Wink's interpretation, but his insistence that the powers are both spiritual and structural has enriched the church's understanding of spiritual warfare beyond the purely individualistic.",
    quote: "The Powers are not simply people; they are the spirituality of institutions, the 'within' of corporate structures and systems, the inner essence of outer organizations of power.",
  },
  {
    name: "Neil Anderson",
    years: "1942–",
    role: "The Bondage Breaker — identity-based freedom",
    body: "Anderson's \"The Bondage Breaker\" (1990) and the \"Steps to Freedom in Christ\" that accompany it have been used in thousands of churches and counseling contexts to help believers identify and renounce areas of spiritual bondage. Anderson's approach is distinctive: rather than confrontational exorcism or dramatic deliverance encounters, he focuses on the believer's identity in Christ and the renunciation of lies believed, sins committed, and spiritual doorways opened through occult involvement, unforgiveness, or sexual sin. The approach is relatively calm and cognitive, which critics sometimes find insufficiently supernaturalistic, but Anderson's method has shown considerable pastoral effectiveness — particularly with Christians who have carried shame-based spiritual struggles for years without resolution. His core conviction is that the answer to spiritual bondage is always truth: who you are in Christ is the ground on which freedom is built.",
    quote: "You are not the helpless victim of the devil's schemes. You are a child of God, alive in Christ, and the same Spirit that raised Jesus from the dead lives in you.",
  },
  {
    name: "Mark Bubeck",
    years: "1928–2022",
    role: "Intercessory warfare prayer practitioner",
    body: "Bubeck's \"The Adversary\" (1975) and \"Overcoming the Adversary\" are foundational texts in a tradition of specifically intercessory, Scripture-based warfare prayer that has influenced generations of prayer warriors and spiritual directors. Bubeck's contribution is intensely practical: he provides models for praying the blood of Christ, for claiming ground in specific areas of life, for interceding against spiritual opposition over family members who are not walking with Christ. His approach is rooted in the completeness of Christ's atonement and the authority of the believer's position in Christ, rather than in spiritual gifts or charismatic experience. Pastors who work in contexts of significant occult involvement, generational spiritual bondage, or intense spiritual opposition have found Bubeck's framework one of the most practically useful available for sustained intercessory engagement.",
    quote: "The blood of Christ is not a magical formula; it is the ground of every prayer we offer. We pray in the authority of what was accomplished at Calvary, not in the authority of our own spiritual achievement.",
  },
];

const scriptures = [
  {
    ref: "Ephesians 6:11-12",
    text: "Put on the whole armor of God, that you may be able to stand against the schemes of the devil. For we do not wrestle against flesh and blood, but against the rulers, against the authorities, against the cosmic powers over this present darkness, against the spiritual forces of evil in the heavenly places.",
    note: "Paul's foundational definition of the Christian's conflict: the true adversary is not visible enemies but spiritual powers. The armor is provided by God and must be \"put on\" — deliberately received and worn, not automatically present.",
  },
  {
    ref: "Colossians 2:15",
    text: "He disarmed the rulers and authorities and put them to open shame, by triumphing over them in him.",
    note: "The decisive victory has already been won at the cross. Spiritual warfare is conducted from a position of established triumph, not uncertain battle. The enemy is disarmed — dangerous but no longer sovereign.",
  },
  {
    ref: "1 Peter 5:8-9",
    text: "Be sober-minded; be watchful. Your adversary the devil prowls around like a roaring lion, seeking someone to devour. Resist him, firm in your faith, knowing that the same kinds of suffering are being experienced by your brotherhood throughout the world.",
    note: "Sobriety and watchfulness — not fear and paralysis. The resistance Peter describes is corporate as much as individual: the whole worldwide church is engaged in the same conflict, which means we are never fighting alone.",
  },
  {
    ref: "James 4:7",
    text: "Submit yourselves therefore to God. Resist the devil, and he will flee from you.",
    note: "Two steps, one sequence. Submission to God comes before resistance of the devil — not as a formula but as the structural reality that makes resistance effective. Authority flows from alignment with Christ, not from spiritual experience or technique.",
  },
  {
    ref: "Luke 10:19",
    text: "Behold, I have given you authority to tread on serpents and scorpions, and over all the power of the enemy, and nothing shall hurt you.",
    note: "The authority is Christ's, delegated to his servants. The seventy-two had it not as spiritual heroes but as ordinary sent ones. The same delegation extends to every believer — not as license for recklessness but as reassurance in faithfulness.",
  },
  {
    ref: "Matthew 4:10-11",
    text: "Then Jesus said to him, \"Be gone, Satan! For it is written, 'You shall worship the Lord your God and him only shall you serve.'\" Then the devil left him, and behold, angels came and were ministering to him.",
    note: "The Word spoken with authority ends the attack. Jesus's victory in the wilderness is the template: submission to Scripture, resistance with Scripture, and then the ministry of angels. Endurance in the word is rewarded with reinforcement.",
  },
];

const videos = [
  { videoId: "q1Ot_3zOLgQ", title: "The Armor of God — Ephesians 6 Explained" },
  { videoId: "WjyHXWJfD5E", title: "Spiritual Warfare: What the Bible Actually Teaches" },
  { videoId: "dBR0-OvDhoo", title: "Christ's Victory Over the Powers — Colossians 2:15" },
  { videoId: "HB3U_kZ2jdY", title: "Screwtape and the Devil's Ordinary Tactics — C.S. Lewis" },
  { videoId: "qEEj8pPmfVU", title: "Identity in Christ and Freedom from Spiritual Bondage" },
  { videoId: "A6oS_QIOQ7s", title: "Prayer as Spiritual Warfare — Standing Firm Together" },
];

const relatedPages = [
  { href: "/christian-prayer-guide", label: "Christian Prayer" },
  { href: "/christian-self-control", label: "Temptation" },
  { href: "/holy-spirit", label: "The Holy Spirit" },
  { href: "/christian-identity", label: "Identity in Christ" },
  { href: "/christian-suffering", label: "Suffering & the Cross" },
  { href: "/spiritual-disciplines", label: "Spiritual Disciplines" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianSpiritualWarfarePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SWREntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [attackRecognized, setAttackRecognized] = useState("");
  const [weaponUsed, setWeaponUsed] = useState("");
  const [victoryGround, setVictoryGround] = useState("");

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
    if (!attackRecognized.trim()) return;
    const entry: SWREntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      attackRecognized: attackRecognized.trim(),
      weaponUsed: weaponUsed.trim(),
      victoryGround: victoryGround.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setAttackRecognized("");
    setWeaponUsed("");
    setVictoryGround("");
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
            background: RED + "22",
            color: RED,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Spiritual Warfare
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Stand Firm: Christian Spiritual Warfare
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          &ldquo;Put on the whole armor of God, that you may be able to stand against the schemes of the devil&rdquo;
          (Ephesians 6:11). The New Testament takes spiritual warfare seriously without making the enemy the center
          of attention. Christ has already disarmed the powers (Colossians 2:15) &mdash; the Christian&rsquo;s task
          is to stand firm in that accomplished victory, not to secure an uncertain one.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide engages the full theology of spiritual conflict: the armor of God, the enemy&rsquo;s tactics,
          Christ&rsquo;s total victory, territorial spirits, the crucial pastoral distinction between spiritual
          oppression and mental illness, and the everyday weapons of prayer and the word.
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
                borderColor: tab === t.id ? RED : BORDER,
                background: tab === t.id ? RED + "22" : "transparent",
                color: tab === t.id ? RED : MUTED,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: RED, margin: "0 0 0.25rem" }}>
              A Theology of Spiritual Warfare
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Nine movements through Scripture&rsquo;s teaching on spiritual conflict &mdash; from the armor of God
              to the wilderness temptation of Jesus, and the two equal errors of obsession and neglect.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: RED, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{item.body}</p>
              </div>
            ))}
            <div style={{ background: RED + "11", border: `1px solid ${RED}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: RED, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Christian spiritual warfare is conducted from a throne, not a trench. The believer who puts on the
                armor, takes up the word, and prays without ceasing is not hoping for victory &mdash; they are
                enforcing the victory Christ won at the cross. The enemy is real, the conflict is real, and the
                outcome is not in question. &ldquo;The God of peace will soon crush Satan under your feet&rdquo;
                (Romans 16:20). Stand firm. The ground is already his.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: RED, margin: "0 0 0.25rem" }}>
              Practices of Spiritual Warfare
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six practices that give the armor daily reality &mdash; grounded in Scripture, communal in structure,
              and rooted in Christ&rsquo;s accomplished victory rather than personal spiritual performance.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: RED + "22",
                  color: RED,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: RED, margin: "0 0 0.25rem" }}>
              Voices on Spiritual Warfare
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six voices &mdash; a satirist, a New Testament scholar, two systematic theologians, and two
              practitioners &mdash; who together map the biblical, theological, and practical terrain of
              Christian spiritual warfare.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{v.years}</span>
                </div>
                <div style={{ color: RED, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}>{v.body}</p>
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${RED}`,
                  background: RED + "0E",
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: RED, margin: "0 0 0.25rem" }}>
              Scripture on Spiritual Warfare
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts that span the whole arc of biblical warfare theology &mdash; from the armor to
              Christ&rsquo;s triumph, from the prowling lion to the wilderness victory of Jesus.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: RED, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: "0 0 0.9rem",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  borderLeft: `3px solid ${RED}`,
                  paddingLeft: "1rem",
                }}>
                  {s.text}
                </p>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: RED + "11", border: `1px solid ${RED}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>For memorization:</strong> begin with Ephesians 6:10-11 and James
                4:7. These two texts together give you the full picture &mdash; put on the armor, submit to God,
                resist the devil. Every other warfare passage illuminates and applies these two foundations.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: RED, margin: 0 }}>
              Spiritual Warfare Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Name a spiritual attack you recognized, the weapon or practice used to resist, and the ground of
              victory you stood on. Over time, your journal becomes a personal map of the enemy&rsquo;s patterns
              and Christ&rsquo;s faithfulness. Entries are saved privately in your browser.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="swr-attack" style={labelStyle}>The attack I recognized</label>
                <textarea
                  id="swr-attack"
                  value={attackRecognized}
                  onChange={e => setAttackRecognized(e.target.value)}
                  rows={2}
                  placeholder="e.g. Persistent accusation that I am disqualified from ministry; sudden anxiety before sharing my faith; relational division being stirred within our team..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Name it specifically. Naming the attack is the first act of resistance.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="swr-weapon" style={labelStyle}>The weapon or practice I used</label>
                <textarea
                  id="swr-weapon"
                  value={weaponUsed}
                  onChange={e => setWeaponUsed(e.target.value)}
                  rows={2}
                  placeholder="e.g. Prayed Romans 8:1 aloud; sang Psalm 46 three times; called a trusted friend and confessed the struggle; put on the armor in prayer each morning for a week..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Be concrete &mdash; which scripture, which prayer, which community act.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="swr-victory" style={labelStyle}>The ground of victory I stood on</label>
                <textarea
                  id="swr-victory"
                  value={victoryGround}
                  onChange={e => setVictoryGround(e.target.value)}
                  rows={2}
                  placeholder="e.g. Colossians 2:15 — Christ disarmed the powers; Romans 8:38-39 — nothing can separate me from his love; my baptism and identity as God's child..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>
                  The ground of victory is always Christ&rsquo;s accomplished work, not your spiritual
                  achievement. Name the specific truth that held.
                </p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!attackRecognized.trim()}
                style={{
                  background: attackRecognized.trim() ? RED : BORDER,
                  color: attackRecognized.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: attackRecognized.trim() ? "pointer" : "not-allowed",
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
                    No entries yet. Begin your warfare record above &mdash; name the attack, name the weapon,
                    name the ground.
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
                        <div style={{ color: RED, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Attack Recognized
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.attackRecognized}</p>
                      </div>
                      {entry.weaponUsed && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: RED, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Weapon Used
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.weaponUsed}</p>
                        </div>
                      )}
                      {entry.victoryGround && (
                        <div>
                          <div style={{ color: RED, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Ground of Victory
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.victoryGround}</p>
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: RED, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on the armor of God, Christ&rsquo;s victory over the powers, the Screwtape Letters&rsquo;
              vision of the enemy&rsquo;s tactics, and practical prayer for spiritual warfare.
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
            &ldquo;The God of peace will soon crush Satan under your feet. The grace of our Lord Jesus Christ be
            with you&rdquo; (Romans 16:20). The battle is real. The outcome is settled. Put on the armor, take up
            the word, and stand firm in the victory that is already yours in Christ.
          </p>
        </div>
      </main>
    </div>
  );
}
