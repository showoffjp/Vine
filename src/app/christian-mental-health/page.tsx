"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const INDIGO = "#6366F1";

const STORAGE_KEY = "vine_mentalhealth_entries";

interface MHLEntry {
  id: string;
  date: string;
  struggle: string;
  soughtHelp: string;
  faithStep: string;
}

const theologySections = [
  {
    title: "Faith and Psychology Are Not Enemies",
    body: "One of the most damaging myths in some Christian communities is that psychology is secular and therefore suspect, and that faith alone — properly applied — renders professional mental health care unnecessary. This is not only wrong theologically; it causes serious, measurable harm to real people. God is the author of all truth, and the insights of psychology and psychiatry are, like medicine or chemistry, discoveries about the world he made. The Hebrew view of the human person was never the Greek body-soul dualism that filtered into much Western Christianity. The nephesh — often translated soul — refers to the whole living person, body included. A Christian anthropology does not cordon off the brain as somehow beneath the concern of care. To seek help for a struggling mind is no different, theologically, from seeking help for a failing heart.",
  },
  {
    title: "The Hebrew Nephesh — No Body-Soul Split",
    body: "When Genesis 2:7 says God breathed into the man and he became a living soul (nephesh), it does not describe a soul imprisoned in a body. The nephesh is the whole animated person. Ancient Israel did not think of the soul as the real self trapped in fleshly hardware — that was Plato, not Moses. This matters enormously for mental health. If the human person is an indivisible whole — embodied, emotional, spiritual, relational — then mental illness is not a problem confined to one department (the spiritual) that other departments (medical, psychological, relational) are forbidden to address. Scripture's holistic anthropology actually demands holistic care. The brain is not less sacred than the spirit, and its suffering is not less worthy of treatment.",
  },
  {
    title: "Why the Church Has Stigmatized Mental Illness",
    body: "The stigma attached to mental illness in many Christian communities has deep and tangled roots. Some of it derives from an over-spiritualized anthropology: if all suffering is ultimately spiritual in cause, then persistent mental illness becomes evidence of persistent sin, weak faith, or insufficient prayer. Some of it reflects cultural discomfort with vulnerability and the loss of control that serious mental illness can involve. Some of it is driven by fear — of the unfamiliar, of what cannot be fixed quickly, of people who behave in ways that are hard to interpret. The result is that the church, which ought to be the safest community in the world for the mentally ill, has often been among the least safe. Sufferers have been told their depression is sin, their anxiety is faithlessness, their psychosis is demonic, and their ongoing struggle is evidence of spiritual failure. This must be named, repented of, and changed.",
  },
  {
    title: "Elijah&rsquo;s Depression — Physical Care Before Spiritual Rebuke (1 Kings 19)",
    body: "First Kings 19 is one of the most clinically precise accounts of a depressive episode in ancient literature. Elijah, immediately after his greatest prophetic triumph at Carmel, runs in fear, collapses under a broom tree, and asks God to take his life. He is experiencing what we would recognize as exhaustion, burnout, despair, and suicidal ideation. God&rsquo;s response is instructive: he does not rebuke Elijah for lack of faith, does not call the experience sin, does not immediately correct his theology. He lets him sleep. Twice. He provides food and water. &ldquo;The journey is too great for you,&rdquo; the angel says — validating the exhaustion rather than dismissing it. Physical care precedes spiritual conversation. The theological lesson comes after the rest and the food. Pastoral care for the mentally ill must learn from God&rsquo;s own pastoral method with Elijah: start with the body.",
  },
  {
    title: "Jesus Healed People Holistically — Not Just Spiritually",
    body: "Jesus healed the whole person. He gave sight to the blind, hearing to the deaf, mobility to the paralyzed, speech to the mute — and in doing so demonstrated that bodily suffering matters to God and that its relief is a sign of the kingdom arriving. In healing the Gadarene demoniac (Mark 5), Jesus restored not only spiritual freedom but sanity, self-possession, and social reintegration — the man was found sitting, clothed and in his right mind. In raising Lazarus, Jesus wept before he acted — validating grief as real, as something God himself shares rather than dismisses. The holistic healing ministry of Jesus is the model for the church&rsquo;s ministry to the suffering. We are not called to choose between prayer and therapy, between Scripture and medication — we are called to bring every resource to bear on the whole person.",
  },
  {
    title: "Spiritual Attack or Mental Illness — a Complex Distinction",
    body: "The New Testament depicts both demonic influence and ordinary human suffering, and discerning between them — or recognizing that they can overlap — requires pastoral wisdom rather than formulaic certainty. The church has erred in both directions: dismissing as purely psychological what has spiritual dimensions, and diagnosing as demonic what is a treatable medical condition. The practical danger of the second error is greater, because it delays or forecloses medical treatment. A person experiencing psychosis does not need exorcism instead of psychiatry — they need psychiatry, and often the community's prayer and presence alongside it. The spiritual and physical dimensions of a person's suffering are not mutually exclusive, and good pastoral care resists the urge to force a single category.",
  },
  {
    title: "When to Seek Professional Help — It Is Not Lack of Faith",
    body: "No one considers it a lack of faith to take antibiotics for an infection or to see a cardiologist for chest pain. Mental health care should be understood the same way. The person who seeks therapy for depression or takes medication for bipolar disorder is not demonstrating distrust of God — they are making wise use of the resources God has provided through common grace. When should a Christian seek professional help? When persistent sadness, anxiety, or mood disruption impairs daily function. When suicidal thoughts are present. When trauma symptoms (flashbacks, hypervigilance, avoidance) are unremitting. When patterns of thought or behavior are causing significant harm. The wisdom tradition of Scripture — &ldquo;in an abundance of counselors there is safety&rdquo; (Proverbs 11:14) — actively endorses seeking skilled counsel.",
  },
  {
    title: "Lament and Mental Health",
    body: "Roughly one-third of the Psalms are laments — honest, sometimes brutal expressions of anguish, complaint, and disorientation brought directly to God. &ldquo;My tears have been my food day and night&rdquo; (Psalm 42:3). &ldquo;Why have you forsaken me?&rdquo; (Psalm 22:1). &ldquo;I am a worm and not a man&rdquo; (Psalm 22:6). Psalm 88, the darkest Psalm of all, ends without resolution — in darkness and silence. The Psalms model what good mental health care also recommends: the honest acknowledgment of what is actually happening emotionally, without pretense. The &ldquo;praise-only&rdquo; culture of some churches — in which the only acceptable spiritual response is gratitude and joy — is not biblical and is pastorally harmful. Lament is not the opposite of faith; it is one of faith&rsquo;s authentic forms. The person in the depths of depression has scriptural warrant for bringing exactly that depth to God.",
  },
  {
    title: "Community as Therapy — Hebrews 10:24-25",
    body: "&ldquo;Let us consider how to stir up one another to love and good works, not neglecting to meet together&rdquo; (Hebrews 10:24-25). The research on social connection and mental health is extensive and consistent: isolation is a risk factor for depression, anxiety, and psychosis; genuine community is protective. The author of Hebrews, writing without access to modern psychology, understood this. The gathered community is not merely a religious obligation — it is a mental health resource of the first order. Churches that build genuine community — small groups, pastoral care, mutual accountability, shared meals — are doing something clinically significant. Conversely, churches that gather hundreds for a performance but leave people fundamentally anonymous do significant harm through neglect. The &ldquo;one another&rdquo; commands of the New Testament are a pastoral care manual.",
  },
  {
    title: "Hope for Those with Chronic Mental Illness",
    body: "Some people will deal with depression, anxiety disorders, bipolar disorder, schizophrenia, or other conditions for their entire lives — managing them well in some seasons and poorly in others, with medication and therapy and community and prayer all playing roles. The gospel has specific and profound things to say to this person. First: their condition is not evidence of God&rsquo;s displeasure or their own spiritual failure. Second: the same Christ who wept at Lazarus&rsquo;s tomb is present with them in their suffering — not as a distant spectator but as a fellow-sufferer who knows what it is to cry out &ldquo;my God, why have you forsaken me?&rdquo; Third: the resurrection is not only a future category — it is the present, ongoing defeat of all the powers of death and diminishment, including the diminishment of mental illness. And fourth: the new creation that Scripture promises includes the healing of every wound. Revelation 21:4 — &ldquo;he will wipe away every tear&rdquo; — is addressed to exactly these people.",
  },
];

const practices = [
  {
    name: "Seek Professional Care Without Shame",
    body: "If you are experiencing persistent depression, anxiety, or other mental health symptoms that impair your daily life, make an appointment with a therapist, counselor, or psychiatrist this week. Bring to that appointment the same faith you would bring to a doctor&rsquo;s office for a physical illness — trusting that God provides healing through multiple means. If the first provider is not a good fit, try another. Seeking care is wisdom, not weakness. If you are in crisis or having thoughts of suicide, contact the 988 Suicide and Crisis Lifeline (call or text 988) immediately.",
  },
  {
    name: "Practice the Psalms of Lament as Honest Prayer",
    body: "Read Psalms 42, 43, 77, and 88 slowly, as if they were written about your own experience. They may be. Bring your actual emotional state to God rather than the state you think you should have. Tell him you are exhausted, afraid, despairing, angry. The psalmists did, and they were called faithful. Over time, adopt the practice of writing your own brief lament — a raw, honest address to God about what is hard. This is not self-pity or faithlessness; it is prayer in the tradition of David, Jeremiah, and Jesus himself.",
  },
  {
    name: "Break Isolation by Telling One Person",
    body: "Mental illness thrives in secrecy and isolation. The shame that attaches to it is dissolved, slowly, by exposure to trusted love. Choose one person in your community — a friend, a pastor, a small group member — and tell them specifically what you are going through. Not to fix it, not for advice, but to not be alone in it. &ldquo;I have been dealing with depression for several months and I wanted you to know&rdquo; is a complete and sufficient disclosure. The person who knows your struggle can pray for you specifically, notice warning signs, and provide the kind of low-grade presence that community is meant to offer.",
  },
  {
    name: "Advocate for Your Church to Take Mental Health Seriously",
    body: "Ask your pastor or elders whether your church has a referral list of trusted Christian therapists. Ask whether the church has ever addressed mental health from the pulpit — and if not, why not. Advocate for a mental health support group or a pastoral care team trained in recognizing and responding to mental illness. If you have your own story of mental health struggle and recovery, consider sharing it — a personal testimony from a trusted community member does more to reduce stigma than a dozen sermons. The change that needs to happen in the church&rsquo;s culture around mental health begins with individual voices.",
  },
  {
    name: "Tend the Body as a Spiritual Discipline",
    body: "Sleep, exercise, nutrition, and time in nature are not peripheral to mental health — they are foundational. The sleep deprivation, sedentary lifestyle, and processed-food diet that characterize much of modern life are mental health risk factors with strong evidence behind them. God&rsquo;s care for Elijah began with sleep and food (1 Kings 19:5-8). The spiritual disciplines of fasting, prayer, and Sabbath all have mental health dimensions: fasting trains the will, regular prayer anchors the emotional life, and Sabbath rest protects against the driven, anxious exhaustion that often precedes depression. Tend your body. It is the temple of the Holy Spirit (1 Corinthians 6:19), and its care is not opposed to spiritual life but part of it.",
  },
  {
    name: "Read and Give Away Amy Simpson&rsquo;s <em>Troubled Minds</em>",
    body: "Amy Simpson&rsquo;s book Troubled Minds: Mental Illness and the Church&rsquo;s Mission is the most practical, biblically grounded, and emotionally honest resource available for Christians who want to understand what the church should be doing differently. Simpson, whose mother has lived with schizophrenia, writes with both theological depth and personal credibility. Read it yourself and then give it to your pastor, your small group leader, your elder board. Many church leaders who have good intentions about mental health simply lack the knowledge and framework to act well; Troubled Minds provides both.",
  },
];

const voices = [
  {
    name: "Ed Welch",
    work: "Running Scared; Depression: A Stubborn Darkness",
    bio: "Edward Welch is a licensed psychologist and faculty member at the Christian Counseling and Educational Foundation (CCEF) who has written some of the most careful and pastorally warm literature available on mental health from a Christian perspective. Depression: A Stubborn Darkness is a guide for both sufferers and those who walk alongside them, refusing to reduce depression to either sin alone or biology alone. Running Scared addresses the anxiety disorders that now affect more than a third of the population. Welch writes with intellectual rigor and genuine compassion — neither over-spiritualizing mental illness nor evacuating its spiritual dimensions.",
    quote: "Depression is not primarily a problem to be solved but a suffering to be accompanied. The sufferer does not need easy answers or more willpower &mdash; they need presence, honesty about weakness, and the God who enters darkness rather than avoiding it.",
  },
  {
    name: "Diane Langberg",
    work: "Suffering and the Heart of God; Trauma and the Soul",
    bio: "Diane Langberg is a psychologist with over fifty years of clinical experience specializing in trauma, abuse, and the intersection of Christian faith and psychological care. She has worked with survivors of sexual abuse, war trauma, and persecution, and her writing is marked by both clinical precision and deep theological grounding. Langberg is perhaps the foremost Christian voice on trauma and its long-term effects on the whole person — body, mind, and spirit. Her work challenges the church to take seriously the damage that trauma does and the patience that genuine healing requires.",
    quote: "Trauma is a thief. It steals a person&rsquo;s sense of safety, trust, and meaning. The church that does not understand trauma will inadvertently revictimize the traumatized person &mdash; and the church that understands it can be a profoundly healing place.",
  },
  {
    name: "Bessel van der Kolk",
    work: "The Body Keeps the Score (secular)",
    bio: "Bessel van der Kolk is a psychiatrist and researcher whose book The Body Keeps the Score fundamentally changed how trauma is understood and treated in both clinical and popular contexts. His central argument — that trauma is stored in the body, not just the mind, and that effective treatment must address the body — has profound implications for pastoral care. While van der Kolk writes from a secular perspective, his insistence on the embodied, holistic nature of trauma and healing resonates deeply with a biblical anthropology that refuses to separate body and soul. Christians working in mental health care or pastoral counseling need to understand his research.",
    quote: "The body keeps the score: if the memory of trauma is encoded in the viscera, in heartbreaking and gut-wrenching sensations, in autoimmune disorders and skeletal and muscular problems, then the healing must include the body.",
  },
  {
    name: "Amy Simpson",
    work: "Troubled Minds: Mental Illness and the Church&rsquo;s Mission",
    bio: "Amy Simpson is a writer and advocate whose mother has lived with schizophrenia for decades. Troubled Minds is the most practically useful book available for churches that want to understand and serve the mentally ill among them and in their communities. Simpson writes with both the authority of personal, long-term experience and a clear theological framework for why the church&rsquo;s response to mental illness matters. She is unflinching about the harm the church has caused through stigma and silence, and equally clear about the profound good the church can do when it takes this population seriously.",
    quote: "The church has good intentions toward the mentally ill, but intentions without knowledge and without changed practices cause harm. The mentally ill are not a project for the church to take on &mdash; they are part of the body, and their suffering is ours.",
  },
  {
    name: "Matthew Stanford",
    work: "Grace for the Afflicted",
    bio: "Matthew Stanford is a neuroscientist and psychologist at Baylor University who has written extensively on the relationship between Christian faith and mental health. Grace for the Afflicted is addressed to both sufferers and church communities — providing accurate clinical information about the most common mental illnesses alongside a clear theological framework for the church&rsquo;s response. Stanford is a committed evangelical who refuses both the false choice between faith and medicine and the over-spiritualization of mental illness that has caused so much pastoral damage.",
    quote: "The church should be the safest place in the world for a person with mental illness. It often is not. This is a failure of both theology and love, and it must change.",
  },
  {
    name: "Philip Yancey",
    work: "Where Is God When It Hurts?",
    bio: "Philip Yancey is one of the most widely read Christian writers of the late twentieth and early twenty-first centuries, and his work on pain, suffering, and the presence of God in difficulty has helped millions of readers hold faith and honest suffering together. Where Is God When It Hurts? is a theological and pastoral meditation on the purpose of pain and the problem of a good God in a suffering world. Yancey writes not from the position of a theologian with answers but from the position of a doubter who has wrestled long and hard — making him a uniquely trustworthy guide for those whose mental health struggles have led them to question God&rsquo;s goodness or presence.",
    quote: "Pain is God&rsquo;s megaphone to rouse a deaf world — but what God most wants, I have come to believe, is not our suffering but our trust, our presence, our willingness to keep walking toward him even in the dark.",
  },
];

const scriptures = [
  {
    ref: "Psalm 42:11",
    text: "Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God.",
    note: "The Psalmist models what good mental health care also commends: honest acknowledgment of the emotional reality, without pretense, brought directly to God. The &ldquo;why are you cast down?&rdquo; is not a rebuke but a prayer.",
  },
  {
    ref: "1 Kings 19:5-8",
    text: "And he lay down and slept under a broom tree. And behold, an angel touched him and said to him, &ldquo;Arise and eat.&rdquo; And he looked, and behold, there was at his head a cake baked on hot stones and a jar of water. And he ate and drank and lay down again.",
    note: "God&rsquo;s first pastoral response to Elijah&rsquo;s suicidal depression was sleep and food &mdash; physical care before spiritual direction. The model for mental health ministry is here: start with the body.",
  },
  {
    ref: "John 11:35",
    text: "Jesus wept.",
    note: "The shortest verse in the Bible and one of the most theologically significant for mental health. Jesus wept at a tomb he was about to empty. Grief is real; God in Christ has entered it fully. Your suffering is not beneath his notice.",
  },
  {
    ref: "2 Corinthians 1:8-9",
    text: "For we were so utterly burdened beyond our strength that we despaired of life itself. Indeed, we felt that we had received the sentence of death. But that was to make us rely not on ourselves but on God who raises the dead.",
    note: "Paul describes what we would recognize as a mental health crisis &mdash; despair of life itself, the sense of a death sentence. He interprets it not as spiritual failure but as a divinely permitted education in dependence. The sufferer is not disqualified; they are being formed.",
  },
  {
    ref: "Hebrews 10:24-25",
    text: "And let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near.",
    note: "Community is not optional for the mentally ill Christian &mdash; it is medication. The &ldquo;one another&rdquo; commands of the New Testament constitute a pastoral care manual, and this passage&rsquo;s emphasis on mutual encouragement speaks directly to the isolation that mental illness both causes and deepens.",
  },
  {
    ref: "Proverbs 11:14",
    text: "Where there is no guidance, a people falls, but in an abundance of counselors there is safety.",
    note: "The wisdom tradition of Scripture actively endorses the seeking of skilled counsel &mdash; not as a supplement to faith when faith has failed, but as an expression of the wisdom that faith produces. Seeking a therapist or psychiatrist is the pursuit of &ldquo;abundance of counselors.&rdquo;",
  },
];

const videos = [
  { videoId: "fH_y0STIAPI", title: "Faith and Mental Health: Breaking the Stigma in the Church" },
  { videoId: "UNqMBuZKAbY", title: "Elijah&rsquo;s Depression and God&rsquo;s Response — 1 Kings 19" },
  { videoId: "sSKcZ_LSFdA", title: "Ed Welch on Depression: A Stubborn Darkness" },
  { videoId: "2dU2v8LNJWQ", title: "Diane Langberg on Trauma, the Church, and Healing" },
  { videoId: "oH_WVmFIPQU", title: "Why Lament Matters: The Psalms and Mental Health" },
  { videoId: "B1k5bpGgMzs", title: "The Body Keeps the Score: Implications for Christian Ministry" },
];

const relatedPages = [
  { href: "/christian-suffering", label: "Christian Suffering" },
  { href: "/christian-addiction", label: "Christian Addiction" },
  { href: "/christian-anxiety", label: "Christian Anxiety" },
  { href: "/lament", label: "Lament" },
  { href: "/incarnation", label: "The Incarnation" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianMentalHealthPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<MHLEntry[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [struggle, setStruggle] = useState("");
  const [soughtHelp, setSoughtHelp] = useState("");
  const [faithStep, setFaithStep] = useState("");

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
    const entry: MHLEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      struggle: struggle.trim(),
      soughtHelp: soughtHelp.trim(),
      faithStep: faithStep.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setStruggle("");
    setSoughtHelp("");
    setFaithStep("");
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
            background: INDIGO + "22",
            color: INDIGO,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Faith &amp; Healing
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Your Body Is a Temple: Christian Mental Health
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          Mental illness is not a spiritual failure &mdash; it is a sign of being human in a broken world. Scripture&rsquo;s
          Hebrew anthropology refuses the body&ndash;soul split; Elijah&rsquo;s depression received food and sleep before
          theological correction; Jesus healed the whole person. The church has sometimes stigmatized the mentally ill.
          It is called to do better.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores the integration of faith and psychology, the biblical case for seeking professional help,
          lament as a spiritual practice, community as medicine, and the hope of the gospel for those with chronic
          mental illness.
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
                borderColor: tab === t.id ? INDIGO : BORDER,
                background: tab === t.id ? INDIGO + "22" : "transparent",
                color: tab === t.id ? INDIGO : MUTED,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: INDIGO, margin: "0 0 0.25rem" }}>
              A Theology of Mental Health
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Ten movements through Scripture and the Christian tradition on faith, psychology, the body, and the hope
              of the gospel for those who struggle with mental illness.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: INDIGO, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{item.body}</p>
              </div>
            ))}
            <div style={{ background: INDIGO + "11", border: `1px solid ${INDIGO}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: INDIGO, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                A Christian theology of mental health begins with the conviction that human beings are whole persons
                &mdash; embodied, emotional, relational, and spiritual &mdash; made in the image of a God who himself
                entered our suffering in Jesus. It insists that the brain is as sacred as the soul, that seeking help
                is wisdom rather than faithlessness, and that the community gathered around the Supper is, when it
                functions well, among the most powerful therapeutic environments available to any human being.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: INDIGO, margin: "0 0 0.25rem" }}>
              Practices for Mental Health and Wholeness
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six practices rooted in Scripture and the wisdom of Christian mental health care &mdash; for sufferers,
              for those who walk alongside them, and for the church community.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: INDIGO + "22",
                  color: INDIGO,
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
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", margin: "0.25rem 0 0.5rem" }}
                    dangerouslySetInnerHTML={{ __html: p.name }} />
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: INDIGO, margin: "0 0 0.25rem" }}>
              Voices on Faith and Mental Health
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Counselors, researchers, authors, and advocates whose work has helped the church think more carefully and
              compassionately about mental illness.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                </div>
                <div style={{ color: INDIGO, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: v.work }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}>{v.bio}</p>
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${INDIGO}`,
                  background: INDIGO + "0E",
                  borderRadius: "0 8px 8px 0",
                  color: TEXT,
                  fontStyle: "italic",
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                }}>
                  &ldquo;<span dangerouslySetInnerHTML={{ __html: v.quote }} />&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: INDIGO, margin: "0 0 0.25rem" }}>
              Scripture on Mental Health and Suffering
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts to read slowly, pray through, and return to in seasons of mental and emotional struggle.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: INDIGO, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: "0 0 0.9rem",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  borderLeft: `3px solid ${INDIGO}`,
                  paddingLeft: "1rem",
                }}
                  dangerouslySetInnerHTML={{ __html: s.text }} />
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: INDIGO + "11", border: `1px solid ${INDIGO}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>For the person in acute distress:</strong> Psalm 88 &mdash; the
                darkest Psalm, which ends without resolution &mdash; was preserved in the canon for you. It tells you
                that the honest cry of the desperate soul is not outside the bounds of prayer. You are permitted to
                bring exactly the darkness you are living to the God who made you.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: INDIGO, margin: 0 }}>
              Mental Health Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Name a mental health struggle honestly, note whether you have sought help (therapy, community, a doctor),
              and record one faith step you have taken. Entries are saved privately in your browser &mdash; no account,
              no server, no one but you.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="mhl-struggle" style={labelStyle}>A mental health struggle I am carrying</label>
                <textarea
                  id="mhl-struggle"
                  value={struggle}
                  onChange={e => setStruggle(e.target.value)}
                  rows={2}
                  placeholder="e.g. Depression that has lasted six months; anxiety that interrupts sleep; grief I cannot shake..."
                  style={inputStyle}
                />
                <p style={hintStyle}>Name it as specifically and honestly as you can. Naming is the first step of care.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="mhl-help" style={labelStyle}>Have I sought help? (therapy, community, doctor, medication)</label>
                <textarea
                  id="mhl-help"
                  value={soughtHelp}
                  onChange={e => setSoughtHelp(e.target.value)}
                  rows={2}
                  placeholder="e.g. I started therapy last month; I told one friend; I have not yet sought help but I want to..."
                  style={inputStyle}
                />
                <p style={hintStyle}>Seeking help is an act of wisdom and faith &mdash; not a failure of either.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="mhl-faith" style={labelStyle}>One faith step I have taken</label>
                <textarea
                  id="mhl-faith"
                  value={faithStep}
                  onChange={e => setFaithStep(e.target.value)}
                  rows={2}
                  placeholder="e.g. I prayed a Psalm of lament; I told my small group; I asked God to meet me in this..."
                  style={inputStyle}
                />
                <p style={hintStyle}>A small, concrete faith response &mdash; not a complete solution, just a step.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!struggle.trim()}
                style={{
                  background: struggle.trim() ? INDIGO : BORDER,
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
                    No entries yet. You are not alone in your struggle. Begin above &mdash; even one honest sentence
                    to God is a beginning.
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
                        <div style={{ color: INDIGO, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Struggle
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.struggle}</p>
                      </div>
                      {entry.soughtHelp && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: INDIGO, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Help Sought
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.soughtHelp}</p>
                        </div>
                      )}
                      {entry.faithStep && (
                        <div>
                          <div style={{ color: INDIGO, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Faith Step
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.faithStep}</p>
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: INDIGO, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on faith, mental health, depression, trauma, and the church&rsquo;s responsibility to those who
              struggle &mdash; from pastors, counselors, and researchers.
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
            Mental illness is not disqualifying. The God who met Elijah under a broom tree, who wept at Lazarus&rsquo;s
            tomb, who cried out &ldquo;why have you forsaken me?&rdquo; &mdash; this is the God who meets you in the
            depths. You are not outside his reach. You are not beyond his care. The body and the soul he made are both
            worth tending, and the community he is building is meant to be the safest place in the world to be
            struggling.
          </p>
        </div>
      </main>
    </div>
  );
}
