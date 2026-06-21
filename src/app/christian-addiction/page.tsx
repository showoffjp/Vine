"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";

const STORAGE_KEY = "vine_christianaddiction_entries";

interface ADCEntry {
  id: string;
  date: string;
  struggle: string;
  triggerIdentified: string;
  accountability: string;
}

const theologySections = [
  {
    title: "&ldquo;Everything Is Permissible but Not Everything Is Beneficial&rdquo; &mdash; 1 Corinthians 6:12",
    body: "Paul&rsquo;s statement in 1 Corinthians 6:12 introduces a principle that cuts to the heart of addiction: &ldquo;Everything is permissible for me but not everything is beneficial. Everything is permissible for me but I will not be mastered by anything.&rdquo; The crucial word is mastered. Paul is not simply describing things that are harmful; he is describing a relationship between a person and a thing in which the power runs the wrong direction. The person who is mastered by alcohol, by pornography, by a drug, by compulsive spending, has handed dominion of their life to something other than God. Paul&rsquo;s freedom is freedom for God and for genuine human flourishing &mdash; not libertine license, but not the fearful abstinence of the legalist either. The question addiction forces us to ask is not &ldquo;is this permissible?&rdquo; but &ldquo;who is master here?&rdquo;",
  },
  {
    title: "&ldquo;Your Body Is a Temple&rdquo; &mdash; 1 Corinthians 6:19-20",
    body: "&ldquo;Do you not know that your body is a temple of the Holy Spirit within you, whom you have from God? You are not your own, for you were bought with a price. So glorify God in your body.&rdquo; This passage is often cited in contexts of sexual ethics, but its implications for addiction are equally profound. If the body is the temple of the Holy Spirit &mdash; the dwelling place of God himself &mdash; then the deliberate, repeated poisoning or degradation of the body is a theological act as much as a moral one. It is the desecration of a sanctuary. This is not intended to heap additional shame on the addict; shame is rarely the medicine that heals. But it is a theological grounding for the project of recovery: you are pursuing physical and psychological freedom not simply for personal well-being but because your body belongs to God and the Spirit has taken up residence in it.",
  },
  {
    title: "Addiction as Disordered Worship",
    body: "The most theologically penetrating account of addiction is not primarily moral but liturgical. Addiction is the story of a person who wants transcendence, relief, connection, aliveness &mdash; all legitimate and even God-given desires &mdash; and who has found a substance or behavior that delivers a chemical counterfeit of what they are actually seeking. Gerald May, in Addiction and Grace, argues that addiction is an attachment &mdash; and that all humans are addicted to something, that the addict is simply a visible, urgent version of the universal human condition. Augustine&rsquo;s &ldquo;our hearts are restless until they rest in you&rdquo; is the theological anthropology that makes sense of addiction: the addict is a worshipper whose worship has been hijacked. Idols always promise what only God can deliver. Recovery, then, is not merely the breaking of a habit; it is the reorientation of worship.",
  },
  {
    title: "The Neuroscience of Addiction and Theological Categories",
    body: "Modern neuroscience has revealed that repeated substance use or compulsive behavior produces measurable, lasting changes in the brain&rsquo;s reward system &mdash; particularly in the dopamine pathways connecting the nucleus accumbens and the prefrontal cortex. These changes make craving compulsive and relapse neurologically predictable rather than simply chosen. This does not eliminate moral agency; it complicates it. The church that understands addiction only as sin, requiring only repentance, misses the neurobiological dimension. The therapist who understands addiction only as disease, requiring only medication and behavioral therapy, misses the spiritual dimension. Both matter. Grace is not magic that bypasses the brain; it typically works through means &mdash; community, accountability, appropriate medication where indicated, sustained spiritual practice, and the slow reorientation of desire. Both/and, not either/or.",
  },
  {
    title: "The Role of Community in Recovery &mdash; James 5:16",
    body: "&ldquo;Confess your sins to one another and pray for one another, that you may be healed&rdquo; (James 5:16). Alcoholics Anonymous understood this before most churches did: the addict cannot recover alone. Willpower is not the solution because the will itself is compromised by addiction. What the person in the grip of addiction needs is not a stronger will but a different environment &mdash; a community of honest people who know their struggle, who will speak truth, who will be present for the 2 a.m. phone call. The mutual accountability structure of AA and Celebrate Recovery is not a secular borrowing that Christians merely tolerate; it is a recovery of a New Testament principle that the church had largely forgotten. The &ldquo;one another&rdquo; commands &mdash; confess, pray, bear burdens, encourage &mdash; are a recovery program.",
  },
  {
    title: "Shame vs. Guilt in Recovery &mdash; the Crucial Distinction",
    body: "Brene Brown&rsquo;s research has given the church a crucial vocabulary: shame is &ldquo;I am bad,&rdquo; guilt is &ldquo;I did something bad.&rdquo; This distinction is not merely psychological; it is profoundly theological. The gospel produces guilt &mdash; the honest acknowledgment of specific wrong actions &mdash; and then dissolves it through forgiveness and grace. Shame &mdash; the conviction that I am fundamentally defective, unredeemable, beyond the pale &mdash; is not of the gospel. Shame is the lie the addict tells themselves after relapse: &ldquo;I am hopeless, God is done with me, nothing will ever change.&rdquo; This shame spiral is often more spiritually dangerous than the relapse itself, because it drives the person further from the community and from God precisely when they most need both. Guilt says &ldquo;I did wrong, I need to confess and change.&rdquo; Shame says &ldquo;I am wrong, and there is no hope.&rdquo; The gospel is the death of shame.",
  },
  {
    title: "The Prodigal Son as the Archetypal Addiction and Recovery Narrative (Luke 15)",
    body: "Luke 15 is the story of addiction and recovery before those categories existed. The younger son demands his inheritance early &mdash; an act of extreme self-centeredness &mdash; and &ldquo;squandered it in wild living&rdquo; (v.13). He ends up in a pigsty, feeding pigs while starving. He has reached the bottom. And then &mdash; the hinge of the story &mdash; &ldquo;he came to himself&rdquo; (v.17). This is the moment of clarity that recovery programs call &ldquo;hitting bottom&rdquo; or &ldquo;the moment of surrender.&rdquo; He rehearses a confession. He begins the walk home. And while he is still a long way off, his father sees him, runs to him, and throws a party. The father does not wait for the son to prove he has changed. He does not interrogate his sincerity. He kills the fatted calf. The parable is addressed to the addict in the pigsty and the recovering person on the road home: the Father is running toward you.",
  },
  {
    title: "Alcoholics Anonymous and Christianity &mdash; Overlap and Difference",
    body: "Bill Wilson and Bob Smith, the founders of Alcoholics Anonymous, were directly influenced by the Oxford Group, an evangelical Christian movement, and by the writing of William James on religious experience. The 12 steps are saturated with theological categories &mdash; powerlessness, surrender, moral inventory, confession, restitution, prayer, service &mdash; that map closely onto Christian spirituality. The key difference is AA&rsquo;s deliberate abstention from defining the &ldquo;Higher Power,&rdquo; making it accessible to people of any faith or none. Celebrate Recovery (founded 1991 at Saddleback Church) fills this gap, explicitly grounding the 12 steps in Christ and the Beatitudes. Christians can and do benefit from both &mdash; AA&rsquo;s radical honesty and community structure, CR&rsquo;s explicit christological grounding. What matters most is not which program but whether the person is in genuine community with others who know their struggle.",
  },
  {
    title: "Why White-Knuckle Sobriety Fails Without Heart Transformation",
    body: "The person who stops using alcohol through sheer force of will &mdash; without addressing the root desires, without community, without spiritual transformation &mdash; has achieved what is sometimes called &ldquo;white-knuckle sobriety&rdquo; or &ldquo;dry drunk syndrome.&rdquo; They are not drinking, but the underlying patterns &mdash; the isolation, the shame, the disordered worship, the hijacked desire for transcendence &mdash; remain intact. Often they transfer the compulsion to another target: food, work, screens, relationships. Jesus described this dynamic in Matthew 12:43-45: the empty, swept house that invites seven worse spirits. Genuine recovery requires not just the removal of the substance but the occupation of the vacated space by something better &mdash; the Spirit of God, genuine community, the slow reorientation of desire toward what can actually satisfy. This is why the gospel is not an add-on to recovery but its foundation.",
  },
];

const practices = [
  {
    name: "Name the Struggle Without Euphemism",
    body: "The beginning of recovery is the end of euphemism. &ldquo;I drink too much sometimes&rdquo; is not the same as &ldquo;I am an alcoholic and my drinking is destroying my marriage.&rdquo; &ldquo;I look at pornography occasionally&rdquo; is not the same as &ldquo;I am addicted to pornography and it has affected my capacity for intimacy.&rdquo; James 5:16 says to confess sins to one another &mdash; specific, concrete, honest naming. Begin with God: tell him exactly what the struggle is, exactly how long it has been going on, exactly what it has cost. Then tell one other person. The naming is not the cure, but nothing else begins without it.",
  },
  {
    name: "Connect with a Recovery Community",
    body: "Willpower alone does not produce lasting recovery from addiction. Community does. Connect with a Celebrate Recovery group at a local church, an AA or NA meeting, or a similar structured community of people who know their own struggle and can walk alongside yours. If CR or AA is not available locally, a small group of trusted friends willing to hear your struggle and hold you accountable is the next best thing. The key features are regularity (meeting consistently, not occasionally), honesty (no performance, no pretense), and mutual accountability (you know their struggle and they know yours). Recovery without community is almost always temporary.",
  },
  {
    name: "Identify and Disrupt Triggers",
    body: "Every addiction has triggers &mdash; emotional states, environments, relationships, times of day, or circumstances that predictably precede craving. Common triggers include HALT: Hungry, Angry, Lonely, Tired. The practice is simple: begin keeping a journal of when cravings are strongest, and over two to three weeks a pattern will emerge. Once you know your triggers, you can interrupt the sequence before the craving becomes acute &mdash; not by white-knuckling through the craving but by addressing the underlying state (eat something, call someone, sleep) before it reaches the point of acute craving. This is not primarily a willpower strategy; it is environmental and relational restructuring.",
  },
  {
    name: "Practice the Distinction Between Shame and Guilt",
    body: "When you relapse or struggle, practice naming what happened with precision: not &ldquo;I am hopeless, I will never change, God is done with me&rdquo; (shame) but &ldquo;I drank last night; I need to call my sponsor today and confess it honestly&rdquo; (guilt). The first is a verdict on your identity; the second is an honest account of a specific action that can be confessed and addressed. Memorize 1 John 1:9: &ldquo;If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.&rdquo; The gospel is the death of shame. Relapse is a data point about where more support is needed, not a verdict on whether God is still for you.",
  },
  {
    name: "Build a Daily Rhythm That Occupies the Empty House",
    body: "Matthew 12:43-45 describes the danger of the empty, swept house &mdash; the removed addiction that is replaced by nothing. Recovery requires not just removal but replacement: prayer at fixed times, Scripture reading, physical exercise, regular meals, consistent sleep, committed community attendance. These are not optional extras for the spiritually ambitious; they are the basic structure that the recovering person needs to make relapse less likely. Morning prayer and evening examination are particularly powerful: beginning the day by placing yourself in God&rsquo;s care, ending it by reviewing where you were strong and where you needed grace. The disciplined life is not legalism; it is the structure inside which freedom can be practiced.",
  },
  {
    name: "When Relapse Happens, Return Immediately",
    body: "Relapse is common in recovery from addiction, and the most important question is not whether it happens but what happens next. The shame spiral &mdash; withdrawal from community, hiding from God, the conviction that this time you have gone too far &mdash; is the enemy of recovery. The prodigal son&rsquo;s crucial action was coming to himself and beginning the walk home while he was still a long way off. Do not wait until you feel worthy to return. Return immediately. Call your sponsor or accountability partner that day. Come to God exactly as you are, without self-improvement as a precondition. Lamentations 3:22-23 &mdash; his mercies are new every morning &mdash; is addressed to the person who failed again last night.",
  },
];

const voices = [
  {
    name: "Ed Welch",
    work: "Addictions: A Banquet in the Grave",
    bio: "Edward Welch is a licensed psychologist and faculty member at CCEF (Christian Counseling and Educational Foundation) whose book Addictions: A Banquet in the Grave is widely regarded as the most theologically serious and pastorally warm treatment of addiction from a Christian perspective. Welch&rsquo;s central argument is that addictions are &ldquo;a feast in the house of death&rdquo; &mdash; a grotesque fulfillment of real human longings in a place that destroys. He takes both the neurobiological reality of addiction and the spiritual category of disordered worship with full seriousness, refusing to collapse one into the other. The book is demanding and does not offer easy answers, which is precisely what makes it trustworthy.",
    quote: "Addictions are about a person who is controlled by desires &mdash; someone whose wants have become something more like needs. The great reversal is not simply stopping the behavior but having the wants themselves changed by the gospel.",
  },
  {
    name: "Timothy Lane",
    work: "Addictions: A Banquet in the Grave (co-author, CCEF)",
    bio: "Timothy Lane is a pastor and counselor who co-wrote the CCEF curriculum on addiction with Edward Welch. His contribution to the Christian conversation on addiction centers on the relational and community dimensions of recovery &mdash; the &ldquo;one another&rdquo; commands of the New Testament as a recovery framework, and the local church as the primary locus of accountability, encouragement, and the slow transformation of desire. Lane&rsquo;s pastoral experience gives his work a groundedness that purely theoretical treatments lack.",
    quote: "Recovery is not a solo project. The addict who tries to get free alone is fighting with one arm tied behind their back. The gospel creates a community of people who are honest about their own weakness and therefore equipped to walk alongside yours.",
  },
  {
    name: "Gerald May",
    work: "Addiction and Grace",
    bio: "Gerald May was a psychiatrist and senior fellow at the Shalem Institute for Spiritual Formation whose 1988 book Addiction and Grace remains one of the most theologically sophisticated treatments of addiction available. May&rsquo;s central contribution is the argument that addiction &mdash; understood broadly as compulsive attachment to anything &mdash; is the primary spiritual problem of human existence, and that grace is its only ultimate cure. May writes from both clinical experience and deep contemplative practice, drawing on the mystical tradition of the church alongside modern psychology. The book is accessible, honest, and deeply moving.",
    quote: "Grace is the most powerful force in the universe. It can transcend repression, addiction, and every other binding of the human spirit. Grace is not exempt from the struggle &mdash; it is the ultimate triumph over it.",
  },
  {
    name: "Henri Nouwen",
    work: "The Return of the Prodigal Son",
    bio: "Henri Nouwen was a Dutch Catholic priest and spiritual director who spent the last years of his life living in community at L&rsquo;Arche Daybreak with people with disabilities. His meditation on Rembrandt&rsquo;s painting of the prodigal son is one of the most beloved works of Christian spirituality of the twentieth century. While not explicitly about addiction, The Return of the Prodigal Son speaks with extraordinary power to the experience of the addict: the younger son&rsquo;s journey into the far country, the bottom, the turning, the walk home, and the running father. Nouwen identified himself with all three characters in the parable, including the father &mdash; the person whose vocation is to receive the returning prodigal with radical welcome.",
    quote: "The parable of the prodigal son is the story of a God who goes out to meet us when we are still far away, who runs to meet us, who throws a party for us &mdash; not because we have earned it but because we were lost and are found, were dead and are alive again.",
  },
  {
    name: "Russell Brand",
    work: "Recovery: Freedom from Our Addictions (secular but spiritually rich)",
    bio: "Russell Brand is a British comedian and actor who has been in recovery from drug and alcohol addiction for many years and whose book Recovery: Freedom from Our Addictions is a reworking of the 12 steps for a general audience. Brand writes from an explicitly spiritual (though not specifically Christian) perspective, and his account of addiction as a spiritual problem requiring a spiritual solution resonates deeply with the Christian understanding. His book is valuable for Christians not as a theological statement but as one of the most honest, funny, and self-aware accounts of addiction available &mdash; and as a bridge to conversations with people outside the church who are struggling.",
    quote: "Addiction is not a moral failing &mdash; it is an attempt to solve a problem. The problem is usually something like loneliness, fear, anxiety, or meaninglessness. The solution is usually connection, courage, and the willingness to face what we have been avoiding.",
  },
  {
    name: "John Piper",
    work: "Desiring God; Future Grace",
    bio: "John Piper is a Baptist pastor and theologian whose concept of &ldquo;Christian Hedonism&rdquo; &mdash; the idea that God is most glorified in us when we are most satisfied in him &mdash; has profound implications for understanding addiction. Piper argues that addiction is not the problem of too much desire but too little &mdash; the settling for the dim satisfaction of a substance when the infinite satisfaction of God is available. His application of Jonathan Edwards&rsquo;s theology of desire to the struggle against sin provides one of the most compelling frameworks for understanding why white-knuckle sobriety fails: it attacks the behavior without addressing the deeper longing that the behavior is (miserably) trying to satisfy. The solution is not less desire but redirected desire toward the only object that can satisfy it.",
    quote: "The great problem of addiction is not that people desire too much pleasure but too little. We are too easily satisfied &mdash; with the short-circuit pleasure of a substance when the infinite, unending pleasure of God himself is on offer.",
  },
];

const scriptures = [
  {
    ref: "1 Corinthians 6:12",
    text: "&ldquo;Everything is permissible for me&rdquo; &mdash; but not everything is beneficial. &ldquo;Everything is permissible for me&rdquo; &mdash; but I will not be mastered by anything.",
    note: "Paul draws the line not at permissibility but at mastery. The question addiction forces is not &ldquo;is this technically allowed?&rdquo; but &ldquo;who is master here?&rdquo; Freedom in Christ is freedom from being mastered by anything other than God.",
  },
  {
    ref: "1 Corinthians 6:19-20",
    text: "Do you not know that your body is a temple of the Holy Spirit within you, whom you have from God? You are not your own, for you were bought with a price. So glorify God in your body.",
    note: "The body is not an obstacle to the spiritual life; it is the temple of the Spirit. Its care and freedom from compulsive destruction is a theological project, not merely a health goal.",
  },
  {
    ref: "Luke 15:17-20",
    text: "But when he came to himself, he said, &ldquo;How many of my father&rsquo;s hired servants have more than enough bread, but I perish here with hunger! I will arise and go to my father, and I will say to him, Father, I have sinned.&rdquo; And he arose and came to his father. But while he was still a long way off, his father saw him and felt compassion, and ran and embraced him.",
    note: "The prodigal son&rsquo;s story is the archetypal recovery narrative: the bottom, the coming to oneself, the rehearsed confession, the walk home, and the father running. The Father is running toward you.",
  },
  {
    ref: "James 5:16",
    text: "Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working.",
    note: "James does not say &ldquo;confess your sins to God and you will be healed&rdquo; &mdash; he says confess to one another. Healing from addiction has a communal structure that is not optional but intrinsic.",
  },
  {
    ref: "Romans 7:15",
    text: "For I do not understand my own actions. For I do not do what I want, but I do the very thing I hate.",
    note: "Paul&rsquo;s account of the enslaved will is the most psychologically honest passage in the New Testament. The addict who cries &ldquo;I don&rsquo;t want to do this but I can&rsquo;t stop&rdquo; is not making an excuse; they are describing a real experience that Scripture names and takes seriously.",
  },
  {
    ref: "1 John 1:9",
    text: "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.",
    note: "Memorize this for the morning after relapse. It is unconditional. It does not say &ldquo;if we confess our sins once and never relapse again.&rdquo; The faithfulness it describes is God&rsquo;s character, not a quota system. Confession restores what relapse damages.",
  },
];

const videos = [
  { videoId: "5iXMNcCLkDI", title: "Addiction as Disordered Worship &mdash; A Theological Framework" },
  { videoId: "UUGTMnH0Ys4", title: "The Prodigal Son and the Journey of Recovery (Luke 15)" },
  { videoId: "DYVFqn-3xao", title: "Ed Welch on Addiction: A Banquet in the Grave" },
  { videoId: "Zd3z2c3RLNA", title: "Shame, Guilt, and the Gospel in Recovery" },
  { videoId: "B3b1gHE2_d0", title: "Celebrate Recovery: How the Beatitudes Become a Recovery Program" },
  { videoId: "PVkYYg7zIxE", title: "Why Willpower Fails: Neuroscience, Addiction, and Grace" },
];

const relatedPages = [
  { href: "/christian-mental-health", label: "Christian Mental Health" },
  { href: "/christian-suffering", label: "Christian Suffering" },
  { href: "/grace", label: "Grace" },
  { href: "/repentance-guide", label: "Repentance" },
  { href: "/community", label: "Community" },
  { href: "/forgiveness", label: "Forgiveness" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianAddictionPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ADCEntry[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [struggle, setStruggle] = useState("");
  const [triggerIdentified, setTriggerIdentified] = useState("");
  const [accountability, setAccountability] = useState("");

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
    if (!struggle.trim()) return;
    const entry: ADCEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      struggle: struggle.trim(),
      triggerIdentified: triggerIdentified.trim(),
      accountability: accountability.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setStruggle("");
    setTriggerIdentified("");
    setAccountability("");
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
    resize: "vertical" as const,
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
            background: GREEN + "22",
            color: GREEN,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Freedom &amp; Recovery
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Free Indeed: A Christian Approach to Addiction
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          Addiction is disordered worship &mdash; the desperate attempt to find in a substance or behavior what only
          God can give. The body is a temple. The prodigal son&rsquo;s story is the archetypal recovery narrative.
          And white-knuckle sobriety fails without heart transformation, because grace does not bypass the brain:
          it works through community, accountability, and the slow reorientation of desire toward the living God.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores the theology of addiction and freedom, the neuroscience of craving alongside the
          categories of grace, the role of community in recovery, shame versus guilt, and the practices that build
          genuine &mdash; not white-knuckled &mdash; freedom.
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
                borderColor: tab === t.id ? GREEN : BORDER,
                background: tab === t.id ? GREEN + "22" : "transparent",
                color: tab === t.id ? GREEN : MUTED,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              A Theology of Addiction and Freedom
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Nine movements through Scripture, neuroscience, and the Christian tradition on what addiction is,
              why willpower alone fails, and how grace produces genuine freedom.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{item.body}</p>
              </div>
            ))}
            <div style={{ background: GREEN + "11", border: `1px solid ${GREEN}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Addiction is not simply a moral failure requiring stronger willpower, nor simply a disease requiring
                only medical treatment. It is a form of broken worship &mdash; real human desire misdirected toward
                an idol that delivers diminishing returns. The gospel&rsquo;s answer is not just the removal of the
                substance but the reorientation of the heart: &ldquo;If the Son sets you free, you will be free
                indeed&rdquo; (John 8:36). That freedom is worked out through community, honest confession,
                sustained practice, and the inexhaustible mercy that meets the prodigal on the road home.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              Practices for Recovery and Freedom
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six practices for those in addiction or supporting someone in it &mdash; rooted in Scripture and the
              hard-won wisdom of Christian recovery communities.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: GREEN + "22",
                  color: GREEN,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              Voices on Addiction and Freedom
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Counselors, theologians, pastors, and authors whose work has helped the church think more clearly and
              compassionately about addiction and recovery.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                </div>
                <div style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: v.work }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}>{v.bio}</p>
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${GREEN}`,
                  background: GREEN + "0E",
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              Scripture on Addiction, Freedom, and Grace
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts to read slowly, pray through, and return to &mdash; in the grip of craving, after
              relapse, and in the long, ordinary days of sustained recovery.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: "0 0 0.9rem",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  borderLeft: `3px solid ${GREEN}`,
                  paddingLeft: "1rem",
                }}
                  dangerouslySetInnerHTML={{ __html: s.text }} />
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: GREEN + "11", border: `1px solid ${GREEN}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>After relapse, open to:</strong> Luke 15:11-24, 1 John 1:9, and
                Lamentations 3:22-23. Read them slowly. The Father is running. His mercies are new this morning.
                Confess and return &mdash; that is all that is required.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: 0 }}>
              Recovery Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Name the struggle honestly, identify a trigger you have recognized, and name an accountability step
              you have taken or will take. Entries are saved privately in your browser &mdash; no account, no server,
              no one but you and the God who already knows.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="adc-struggle" style={labelStyle}>The struggle I am naming honestly</label>
                <textarea
                  id="adc-struggle"
                  value={struggle}
                  onChange={e => setStruggle(e.target.value)}
                  rows={2}
                  placeholder="e.g. Alcohol; pornography; gambling; prescription medication; social media compulsion..."
                  style={inputStyle}
                />
                <p style={hintStyle}>Name it without euphemism. The naming is the beginning of recovery, not the end of it.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="adc-trigger" style={labelStyle}>A trigger I have identified</label>
                <textarea
                  id="adc-trigger"
                  value={triggerIdentified}
                  onChange={e => setTriggerIdentified(e.target.value)}
                  rows={2}
                  placeholder="e.g. Loneliness on Sunday evenings; stress at work; conflict with my spouse; late nights..."
                  style={inputStyle}
                />
                <p style={hintStyle}>What emotional state, environment, or circumstance precedes the craving?</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="adc-accountability" style={labelStyle}>An accountability step I have taken or will take</label>
                <textarea
                  id="adc-accountability"
                  value={accountability}
                  onChange={e => setAccountability(e.target.value)}
                  rows={2}
                  placeholder="e.g. Called my sponsor; attended a CR meeting; told one friend; confessed to God and asked for help..."
                  style={inputStyle}
                />
                <p style={hintStyle}>Recovery requires community. Name the person or step that connects you to it.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!struggle.trim()}
                style={{
                  background: struggle.trim() ? GREEN : BORDER,
                  color: struggle.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: struggle.trim() ? "pointer" : "not-allowed",
                }}
              >
                Save Entry
              </button>
            </div>

            <div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
                Your Entries{loaded && entries.length > 0 && (
                  <span style={{ color: MUTED, fontWeight: 600, fontSize: "0.85rem" }}> ({entries.length})</span>
                )}
              </h3>

              {!loaded && (
                <p style={{ color: MUTED, fontSize: "0.92rem", margin: 0 }}>Loading your journal&hellip;</p>
              )}

              {loaded && entries.length === 0 && (
                <div style={{ background: CARD, border: `1px dashed ${BORDER}`, borderRadius: 12, padding: "1.5rem", textAlign: "center" }}>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.92rem", lineHeight: 1.7 }}>
                    No entries yet. The Father is running. Begin above &mdash; one honest naming of the struggle.
                  </p>
                </div>
              )}

              {loaded && entries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {entries.map(entry => (
                    <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", position: "relative" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                        <span style={{ color: MUTED, fontSize: "0.82rem" }}>{entry.date}</span>
                        <button
                          onClick={() => deleteEntry(entry.id)}
                          aria-label="Delete entry"
                          style={{
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
                      </div>
                      <div style={{ marginBottom: "0.75rem" }}>
                        <div style={{ color: GREEN, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Struggle
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.struggle}</p>
                      </div>
                      {entry.triggerIdentified && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: GREEN, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Trigger Identified
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.triggerIdentified}</p>
                        </div>
                      )}
                      {entry.accountability && (
                        <div>
                          <div style={{ color: GREEN, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Accountability Step
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.accountability}</p>
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on addiction as disordered worship, the prodigal son, shame and grace in recovery,
              and the neuroscience of craving &mdash; for those who struggle and those who walk alongside them.
            </p>
            {videos.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "0.98rem", margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: v.title }} />
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
            &ldquo;While he was still a long way off, his father saw him and felt compassion, and ran and embraced
            him&rdquo; &mdash; Luke 15:20. The Father is running. You do not have to be cleaned up before you turn
            toward home. The confession can happen on the road. The party is already being prepared. Come back.
          </p>
        </div>
      </main>
    </div>
  );
}
