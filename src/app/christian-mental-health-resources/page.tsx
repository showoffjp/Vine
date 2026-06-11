"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";


const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "resources" | "theology" | "voices" | "journal" | "videos";

const TOPICS = ["All", "Anxiety", "Depression", "Trauma", "Relationships", "Grief", "Identity"];

const RESOURCES = [
  {
    title: "Grace for the Afflicted",
    author: "Matthew Stanford",
    type: "Book",
    topic: "Depression",
    color: "#3B82F6",
    description: "A clinical psychologist and professor of psychology/neuroscience addresses mental illness from both a scientific and theological perspective. Stanford argues that the church has often failed people with mental illness by reducing it to spiritual failure or weak faith. He provides a framework that takes both the biological reality of mental illness and the spiritual dimensions of human suffering seriously — without collapsing one into the other.",
    why: "The best single resource for Christians or church leaders trying to understand mental illness without either medicalizing or spiritualizing it.",
    url: "https://www.amazon.com/Grace-Afflicted-Clinical-Psychiatry-Theology/dp/1616388722/",
    initials: "GFA",
  },
  {
    title: "Running on Empty",
    author: "Fil Anderson",
    type: "Book",
    topic: "Anxiety",
    color: PURPLE,
    description: "Former Young Life director Fil Anderson writes about his own experience of spiritual exhaustion, performance-driven ministry, and the slow discovery of genuine rest in God's unconditional love. It is not a book about mental health per se, but about the spiritual roots of anxiety and exhaustion that many Christians experience — the fear that God only loves you when you're productive and performing. A deeply personal and honest account.",
    why: "For Christians who feel chronically exhausted in their faith but can't name why.",
    url: "https://www.amazon.com/Running-Empty-Fil-Anderson/dp/1593251858/",
    initials: "ROE",
  },
  {
    title: "Darkness Is My Closest Friend",
    author: "Catherine Campbell",
    type: "Book",
    topic: "Depression",
    color: "#EF4444",
    description: "A meditation on Psalm 88 — the only lament psalm that doesn't end in resolution, only darkness. Campbell walks through her own experience of severe depression as a Christian alongside a careful reading of this neglected psalm. She argues that biblical lament is not a failure of faith but the language God gave us for when faith is all we have left, and that even darkness is held by God.",
    why: "For Christians in severe depression who are afraid that their struggle means they've lost their faith.",
    url: "https://www.amazon.com/Darkness-Is-My-Closest-Friend/dp/0825442834/",
    initials: "DMC",
  },
  {
    title: "Riddance",
    author: "Cynthia Eddy & Ed Welch",
    type: "Booklet",
    topic: "Anxiety",
    color: GREEN,
    description: "CCEF (Christian Counseling and Education Foundation) produces a series of practical booklets for specific struggles. CCEF's approach, developed by biblical counselors David Powlison and Ed Welch, integrates Scripture directly into the experience of mental and emotional difficulty without bypassing the real pain. Welch's When People Are Big and God Is Small is the longer treatment of fear and anxiety from a biblical counseling perspective.",
    why: "CCEF's free online articles and booklets are some of the most practically useful biblical counseling resources available.",
    url: "https://www.ccef.org/resources/booklets/",
    initials: "CFC",
  },
  {
    title: "The CCEF Resource Library",
    author: "Christian Counseling and Education Foundation",
    type: "Website",
    topic: "Anxiety",
    color: "#F59E0B",
    description: "The most comprehensive biblical counseling resource library available for free online. Founded by Jay Adams, developed by David Powlison, Ed Welch, Paul Tripp, and others, CCEF has produced hundreds of articles, mini-books, and resources on depression, anxiety, anger, addiction, grief, marriage conflict, and more. Their approach takes both Scripture and human experience seriously without reducing one to the other.",
    why: "Before buying any self-help book, check CCEF's free library. Many answers are already there.",
    url: "https://www.ccef.org/resources/",
    initials: "CFL",
  },
  {
    title: "New Life Live (Radio Program)",
    author: "Steve Arterburn, Dr. John Townsend",
    type: "Podcast/Radio",
    topic: "Relationships",
    color: "#10B981",
    description: "The most widely heard Christian call-in counseling program in America, with millions of listeners. Steve Arterburn (founder of New Life Ministries) and clinical psychologists including Dr. John Townsend and Dr. Henry Cloud field real calls about depression, addiction, marriage problems, trauma, and family conflict. The program integrates clinical psychology with a broadly evangelical Christian worldview. Many episodes are available as a podcast.",
    why: "Accessible, real-world counseling content from licensed professionals within a Christian framework.",
    url: "https://newlife.com/new-life-live/",
    initials: "NLL",
  },
  {
    title: "Hope for the Heart (Crisis Helpline & Resources)",
    author: "June Hunt / Hope for the Heart",
    type: "Website / Hotline",
    topic: "Grief",
    color: "#EC4899",
    description: "Hope for the Heart (founded by June Hunt) provides a biblically-based counseling line (1-800-488-HOPE) as well as thousands of free resources on depression, abuse, grief, addiction, codependency, eating disorders, and more. The materials are designed for counselors, pastors, and individuals in crisis. June Hunt is also known for her 'Counseling Through Your Bible Handbook' used by biblical counselors worldwide.",
    why: "When someone is in crisis and needs immediate help with a Christian counseling perspective.",
    url: "https://www.hopefortheheart.org/",
    initials: "HFH",
  },
  {
    title: "Renovare (Spiritual Formation Resources)",
    author: "Richard Foster, Dallas Willard, others",
    type: "Website",
    topic: "Identity",
    color: "#A855F7",
    description: "Founded by Richard Foster (author of Celebration of Discipline), Renovare provides resources for spiritual formation and soul care — the practices that form a well-ordered inner life. Their approach recognizes that many mental and emotional struggles have a spiritual dimension: fragmented identity, habitual anxiety, and relational dysfunction are addressed through formation of the whole person. Their reading plans, retreat guides, and community tools support Christians seeking deeper wholeness.",
    why: "For those whose mental health struggles are intertwined with questions of identity, formation, and spiritual depth.",
    url: "https://renovare.org/",
    initials: "REN",
  },
  {
    title: "Boundaries",
    author: "Dr. Henry Cloud & Dr. John Townsend",
    type: "Book",
    topic: "Relationships",
    color: "#00D4AA",
    description: "The bestselling Christian psychology book on what a healthy self looks like — specifically the concept of biblical limits, ownership of our own choices, and the freedom to say no. Cloud and Townsend ground their clinical model in the doctrine of imago Dei and the character of God himself. Criticized by some as too individualistic, but widely credited with helping millions of Christians escape unhealthy patterns in relationships, families, and church contexts.",
    why: "The most widely used Christian resource on relational health and codependency.",
    url: "https://www.amazon.com/Boundaries-When-Take-Control-Your/dp/0310247454/",
    initials: "BND",
  },
  {
    title: "A Grief Observed",
    author: "C.S. Lewis",
    type: "Book",
    topic: "Grief",
    color: "#F59E0B",
    description: "Lewis's raw journal written in the weeks after his wife Joy Davidman died of cancer. Published under a pseudonym (N.W. Clerk) because of its unusual honesty about the terror, anger, and disorientation of acute grief — including the sense that God has gone silent and locked the door. Lewis eventually concludes that his sense of God's absence was itself a kind of presence — the door was never locked, but he had been listening for the wrong kind of answer.",
    why: "The most honest account of Christian grief available. For anyone who has recently lost someone and is confused by the silence.",
    url: "https://www.amazon.com/Grief-Observed-C-S-Lewis/dp/0060652381/",
    initials: "AGO",
  },
  {
    title: "Trauma and the Soul",
    author: "Donald Kalsched",
    type: "Book (advanced)",
    topic: "Trauma",
    color: PURPLE,
    description: "For those wanting a deeper, more scholarly treatment — this Jungian psychoanalytic work on trauma and soul formation has influenced many Christian pastoral counselors who work with abuse survivors. It is not explicitly Christian but engages questions of the inner world, spiritual damage, and deep healing that intersect significantly with a Christian anthropology. Best read by trained counselors or those in therapy.",
    why: "For pastoral counselors and those in serious therapy dealing with complex trauma.",
    url: "https://www.amazon.com/Trauma-Soul-Psycho-Spiritual-Development/dp/0415681537/",
    initials: "TAS",
  },
  {
    title: "BetterHelp / Talkspace (Christian Therapist Filters)",
    author: "Online Therapy Platforms",
    type: "Service",
    topic: "Anxiety",
    color: "#3B82F6",
    description: "Both BetterHelp and Talkspace allow users to filter for therapists who are Christian-affirming or hold Christian worldviews. While neither platform is exclusively Christian, many licensed therapists on these platforms identify as Christians and integrate faith into their practice. For those unable to find a Christian therapist locally or who need more accessible pricing, these platforms provide a starting point. Psychology Today's therapist directory also allows filtering for 'Christian' as a specialty.",
    why: "For immediate access to licensed Christian-friendly therapists without long waitlists.",
    url: "https://www.betterhelp.com/",
    initials: "BTH",
  },
];

const MH_THEOLOGY = [
  {
    id: 1,
    title: "The Whole Person",
    icon: "🧠",
    scripture: "Genesis 2:7; 1 Thessalonians 5:23",
    scriptureRef: "spirit, soul, and body",
    description: "God does not save a soul and leave the body behind, nor does he care for the mind while ignoring the spirit. The Christian vision of the human person is holistic: we are embodied souls, and what happens in the brain matters to God. Mental illness is not a spiritual failure any more than diabetes is a spiritual failure — it is a real affliction of a real creature God loves.",
    application: "Seeking professional mental health care is an act of stewardship, not weakness. To care for your mind is to care for the person God made you to be.",
  },
  {
    id: 2,
    title: "The Psalms as Mental Health Scripture",
    icon: "📖",
    scripture: "Psalm 22; Psalm 42; Psalm 88",
    scriptureRef: "Why are you cast down, O my soul?",
    description: "The Psalter is the Bible's prayer book, and it contains profound expressions of depression, anxiety, suicidal ideation, abandonment, and lament. Psalm 88 ends in darkness with no resolution. Psalm 22 opens with the cry of dereliction Jesus quoted from the cross. God did not edit these psalms out of Scripture. He preserved them as the language he gives his people when their own words fail.",
    application: "When depression or anxiety makes prayer impossible, pray the lament psalms. You are not leaving Scripture behind; you are entering its most honest territory.",
  },
  {
    id: 3,
    title: "Elijah's Depression",
    icon: "💙",
    scripture: "1 Kings 19:1-8",
    scriptureRef: "It is enough; now, O Lord, take away my life",
    description: "After the greatest miracle of his ministry at Mount Carmel, Elijah collapses under a broom tree and asks to die. He is exhausted, afraid, and alone. God does not rebuke him, give him a sermon, or tell him to pray harder. God sends an angel with food, water, and rest. Only after Elijah is physically restored does God address his calling. The order is not accidental.",
    application: "Care before task. When you are depleted, God's first response is often provision and rest, not spiritual instruction. Physical care is not a distraction from spiritual health; it is often the first step toward it.",
  },
  {
    id: 4,
    title: "The Groaning of Creation",
    icon: "🌍",
    scripture: "Romans 8:18-25",
    scriptureRef: "the whole creation has been groaning",
    description: "Mental suffering does not happen in a spiritual vacuum. Paul places human suffering within the cosmic context of a creation subjected to futility, groaning toward redemption. Mental illness is not evidence of God's absence or your spiritual failure. It participates in the broader reality of a fallen world that is not yet what God intends it to be. The groan itself is a cry toward hope.",
    application: "Suffering is not proof of an absent God. The creation's groan and yours are heard by the same Spirit who intercedes for us with groanings too deep for words.",
  },
  {
    id: 5,
    title: "Renewing of the Mind",
    icon: "🔄",
    scripture: "Romans 12:2; Philippians 4:8",
    scriptureRef: "be transformed by the renewing of your mind",
    description: "Scripture's call to renew the mind is not contradicted by what neuroscience has discovered about neuroplasticity. The brain is a physical organ that changes in response to experience, habit, and practice. What we call spiritual formation and what researchers call neural rewiring are not at war. Scripture, prayer, community, and professional therapy can all participate in the transformation of the mind God calls us to.",
    application: "Do not set spiritual disciplines and therapy against each other. Scripture, prayer, and therapy can work together as instruments of the mind's renewal. God is not limited to only one means of grace.",
  },
  {
    id: 6,
    title: "Bearing One Another's Burdens",
    icon: "🤝",
    scripture: "Galatians 6:2; James 5:16",
    scriptureRef: "confess your sins to one another and pray for one another",
    description: "Community is not an optional supplement to individual healing. It is God's primary context for it. James calls for mutual confession and prayer. Paul commands burden-sharing as the fulfillment of the law of Christ. Isolation is not simply a psychological risk factor for mental illness; it is a departure from the shape of the life God designed. The church exists, in part, as a community of mutual healing.",
    application: "Confess your struggle to someone safe. Refuse to carry your burden alone. The command to bear one another's burdens is not a metaphor; it is a description of how God usually works.",
  },
];

const VOICES_MH = [
  {
    id: 1,
    name: "Martyn Lloyd-Jones",
    era: "1899-1981",
    context: "Spiritual Depression: Its Causes and Cure",
    bio: "A trained physician who left medicine for the pulpit, Lloyd-Jones brought unusual clinical precision to the pastoral care of souls. His lectures published as Spiritual Depression represent the most careful pre-modern analysis of Christian depression — distinguishing spiritual, psychological, and physical causes without collapsing them into each other.",
    quote: "Have you realized that most of your unhappiness in life is due to the fact that you are listening to yourself instead of talking to yourself?",
    contribution: "First major evangelical voice to take depression seriously as a clinical reality while maintaining its spiritual dimensions.",
  },
  {
    id: 2,
    name: "Ed Welch",
    era: "b. 1950",
    context: "Depression: A Stubborn Darkness; Shame Interrupted",
    bio: "A biblical counselor with a PhD in neuropsychology, Welch has spent his career at CCEF developing a model of care that takes mental illness seriously as a real affliction without reducing it to sin or dismissing its spiritual dimensions. His work on depression, shame, anxiety, and addiction has shaped an entire generation of Christian counselors.",
    quote: "Depression is a reminder that we are dust. It is not a punishment, not a spiritual failure, not evidence of absent faith. It is a suffering that God sees.",
    contribution: "Developed the most rigorous biblical counseling framework for mental illness that refuses both medicalization and spiritualization.",
  },
  {
    id: 3,
    name: "Diane Langberg",
    era: "b. 1946",
    context: "Suffering and the Heart of God; Trauma and the Soul",
    bio: "A licensed psychologist with over fifty years of clinical experience, Langberg pioneered the integration of trauma-informed care with Christian theology and pastoral formation. She has trained thousands of Christian therapists and spoken prophetically to the church about its failures in protecting abuse survivors. Her voice on trauma, body, and soul has no parallel in evangelical Christianity.",
    quote: "The church is called to be a place of refuge for the traumatized, not a place that adds to their burden by demanding they perform faith they cannot feel.",
    contribution: "Pioneer of faith-integrated trauma care; brought trauma theology into the evangelical church decades before it was fashionable.",
  },
  {
    id: 4,
    name: "Kay Warren",
    era: "b. 1954",
    context: "Mental health advocacy after her son Matthew's suicide (2013)",
    bio: "Co-founder of Saddleback Church with her husband Rick Warren, Kay Warren used the most devastating loss of her life as the catalyst for a national conversation about mental health in the church. Matthew Warren's death broke a silence that had persisted in evangelicalism for decades. She has since co-founded the Saddleback Church mental health ministry and become one of the most visible Christian advocates for mental health care.",
    quote: "The church must be the safest place on earth for the most broken people on earth. We have failed at this, and we must do better.",
    contribution: "Broke the silence on suicide and mental illness in evangelical Christianity; launched one of the most influential church mental health ministries in America.",
  },
  {
    id: 5,
    name: "Rachael Denhollander",
    era: "b. 1984",
    context: "Abuse survivor, advocate, and speaker on trauma and the Christian community",
    bio: "The first woman to publicly accuse USA Gymnastics doctor Larry Nassar, Denhollander has since become a leading voice on how Christian communities respond to abuse, trauma, and survivors. She speaks and writes about the theology of the body, the church's obligation to the vulnerable, and how trauma intersects with faith and community. Her testimony before Judge Rosemarie Aquilina became one of the most widely read statements in recent American legal history.",
    quote: "The church has the most beautiful message for the broken — if we will live it. And living it means sitting with people in their darkness, not rushing them toward the light.",
    contribution: "Brought the theology of the body and the church's responsibility to abuse survivors into the center of evangelical discourse on trauma and mental health.",
  },
];

const MH_VIDEOS = [
  { id: "j9phNEaPrv8", title: "Forgotten God Part 1: Why Do I Need the Spirit?", speaker: "Francis Chan" },
  { id: "dy9nwe9zeU8", title: "The Prodigal Sons", speaker: "Tim Keller" },
  { id: "iK0NjiBXKN4", title: "Don't Waste Your Life", speaker: "John Piper" },
  { id: "zMbUXpFiFeo", title: "The Reason for God at Google", speaker: "Tim Keller" },
  { id: "52ZXFH1wzc8", title: "How Great Is Our God", speaker: "Louie Giglio" },
  { id: "3Dv4-n6OYGI", title: "The Holiness of God", speaker: "R.C. Sproul" },
];

export default function ChristianMentalHealthResourcesPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_christian-mental-health-resources_tab", "resources");
  const [topic, setTopic] = usePersistedState<string>("vine_christian-mental-health-resources_topic", "All");
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<number>(1);

  const filtered = RESOURCES.filter(r => topic === "All" || r.topic === topic);
  const resource = RESOURCES.find(r => r.title === selected);
  const voice = VOICES_MH.find(v => v.id === selectedVoice)!;

  const [cmhrEntries, setCmhrEntries] = useState<{ id: string; date: string; struggle: string; truth: string; step: string }[]>(() => {
    try { const s = localStorage.getItem("vine_cmhr_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [cmhrForm, setCmhrForm] = useState({ struggle: "", truth: "", step: "" });
  const [cmhrSaved, setCmhrSaved] = useState(false);
  useEffect(() => { localStorage.setItem("vine_cmhr_entries", JSON.stringify(cmhrEntries)); }, [cmhrEntries]);
  function saveCmhrEntry() {
    if (!cmhrForm.struggle.trim()) return;
    setCmhrEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...cmhrForm }, ...prev]);
    setCmhrForm({ struggle: "", truth: "", step: "" });
    setCmhrSaved(true); setTimeout(() => setCmhrSaved(false), 2000);
  }
  function deleteCmhrEntry(id: string) { setCmhrEntries(prev => prev.filter(e => e.id !== id)); };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🧠</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Mental Health Resources</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The church is not called to choose between the gospel and mental health care &mdash; it is called to offer both. These resources take Scripture and psychological reality seriously at the same time.
          </p>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 36, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {(["resources", "theology", "voices", "journal", "videos"] as const).map(t => (
            <button type="button" key={t} onClick={() => setActiveTab(t)} style={{ flex: 1, background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "resources" ? "Resources" : t === "theology" ? "Theology" : t === "voices" ? "Voices" : t === "journal" ? "📓 My Journal" : "Videos"}
            </button>
          ))}
        </div>

        {/* Resources tab */}
        {activeTab === "resources" && (
          <div>
            <div style={{ background: `${PURPLE}15`, border: `1px solid ${PURPLE}30`, borderRadius: 12, padding: 18, marginBottom: 28 }}>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                <strong style={{ color: PURPLE }}>In a crisis?</strong> Call or text 988 (Suicide &amp; Crisis Lifeline) or text HOME to 741741 (Crisis Text Line). Hope for the Heart: 1-800-488-HOPE. These are available 24/7 with Christian counselors available.
              </p>
            </div>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {TOPICS.map(t => (
                <button type="button" key={t} onClick={() => setTopic(t)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${topic === t ? GREEN : BORDER}`, background: topic === t ? `${GREEN}15` : "transparent", color: topic === t ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {t}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: resource ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((r, i) => (
                  <button type="button" key={i} onClick={() => setSelected(selected === r.title ? null : r.title)}
                    style={{ background: selected === r.title ? `${r.color}12` : CARD, border: `1px solid ${selected === r.title ? r.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${r.color}20`, border: `1px solid ${r.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: r.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                        {r.initials}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{r.title}</span>
                          <span style={{ background: `${r.color}15`, color: r.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{r.type}</span>
                        </div>
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{r.author}</div>
                      </div>
                      <span style={{ color: MUTED, fontSize: 11, flexShrink: 0 }}>{r.topic}</span>
                    </div>
                  </button>
                ))}
              </div>

              {resource && (
                <div style={{ background: CARD, border: `1px solid ${resource.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 12, background: `${resource.color}20`, border: `1px solid ${resource.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: resource.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                      {resource.initials}
                    </div>
                    <div>
                      <h2 style={{ color: resource.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{resource.title}</h2>
                      <div style={{ color: MUTED, fontSize: 12 }}>{resource.author} &middot; {resource.type}</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
                    <span style={{ background: `${resource.color}12`, color: resource.color, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{resource.topic}</span>
                    <span style={{ background: `${PURPLE}12`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{resource.type}</span>
                  </div>

                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{resource.description}</p>

                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12, marginBottom: 16 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHY THIS RESOURCE</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{resource.why}</p>
                  </div>

                  <a href={resource.url} target="_blank" rel="noopener noreferrer"
                    style={{ background: `${resource.color}15`, border: `1px solid ${resource.color}30`, color: resource.color, padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    🔗 Access Resource
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Theology tab */}
        {activeTab === "theology" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 28 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                What does Scripture actually say about the mind, the soul, and mental suffering? These six theological threads form the foundation for a Christian understanding of mental health that refuses both shallow spiritualization and secular reductionism.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {MH_THEOLOGY.map(entry => (
                <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <span style={{ fontSize: 28 }}>{entry.icon}</span>
                    <div>
                      <h3 style={{ color: TEXT, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{entry.title}</h3>
                      <p style={{ color: GREEN, fontStyle: "italic", fontSize: 13, margin: 0 }}>{entry.scripture} &mdash; &ldquo;{entry.scriptureRef}&rdquo;</p>
                    </div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>{entry.description}</p>
                  <div style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: 14 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4, textTransform: "uppercase", letterSpacing: 1 }}>Application</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{entry.application}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Voices tab */}
        {activeTab === "voices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 28 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                {VOICES_MH.length} voices &mdash; physicians, counselors, psychologists, and survivors &mdash; who have shaped the church&rsquo;s understanding of mental health. Each brought something the others couldn&rsquo;t: clinical precision, pastoral wisdom, lived experience, or prophetic courage.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "210px 1fr", gap: 20, alignItems: "start" }}>
              {/* Left panel */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 100 }}>
                {VOICES_MH.map(v => (
                  <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                    style={{ background: selectedVoice === v.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE + "60" : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ color: selectedVoice === v.id ? TEXT : MUTED, fontWeight: 800, fontSize: 13, marginBottom: 2 }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: 11 }}>{v.era}</div>
                  </button>
                ))}
              </div>
              {/* Right detail */}
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voice.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13, marginBottom: 8 }}>{voice.era}</div>
                  <span style={{ background: `${GREEN}12`, color: GREEN, padding: "3px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{voice.context}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{voice.bio}</p>
                <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}25`, borderRadius: 10, padding: 18, marginBottom: 20 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Notable Quote</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, fontStyle: "italic", margin: 0 }}>
                    &ldquo;{voice.quote}&rdquo;
                  </p>
                </div>
                <div style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 14 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4, textTransform: "uppercase", letterSpacing: 1 }}>Contribution</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{voice.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Videos tab */}
        {activeTab === "journal" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>My Mental Health Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Record struggles you are working through, truths that sustain you, and steps you are taking toward healing.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28, marginBottom: 32 }}>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Struggle or Area</label>
                <input value={cmhrForm.struggle} onChange={e => setCmhrForm(f => ({ ...f, struggle: e.target.value }))} placeholder="e.g. Anxiety, depression, trauma, grief, burnout..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Truth That Sustains You</label>
                <textarea value={cmhrForm.truth} onChange={e => setCmhrForm(f => ({ ...f, truth: e.target.value }))} placeholder="What Scripture, promise, or truth about God are you holding onto?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>One Step Toward Healing</label>
                <textarea value={cmhrForm.step} onChange={e => setCmhrForm(f => ({ ...f, step: e.target.value }))} placeholder="What one concrete step toward healing are you taking — therapy, community, prayer, rest?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveCmhrEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                {cmhrSaved ? "Saved!" : "Save Entry"}
              </button>
            </div>
            {cmhrEntries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {cmhrEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                      <div>
                        <div style={{ color: PURPLE, fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{e.struggle}</div>
                        <div style={{ color: MUTED, fontSize: 11 }}>{e.date}</div>
                      </div>
                      <button type="button" onClick={() => deleteCmhrEntry(e.id)} style={{ background: "transparent", border: `1px solid ${BORDER}`, borderRadius: 6, padding: "4px 10px", color: MUTED, fontSize: 11, cursor: "pointer" }}>Delete</button>
                    </div>
                    {e.truth && <div style={{ marginBottom: 10 }}><div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 3, textTransform: "uppercase" }}>Sustaining Truth</div><div style={{ color: TEXT, fontSize: 13 }}>{e.truth}</div></div>}
                    {e.step && <div><div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 3, textTransform: "uppercase" }}>Step Toward Healing</div><div style={{ color: TEXT, fontSize: 13 }}>{e.step}</div></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 28 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Six essential sermons and talks from trusted Christian voices &mdash; on grace, the gospel, the purpose of life, and the character of God. Start anywhere.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: 20 }}>
              {MH_VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <div style={{ padding: "14px 18px" }}>
                    <div style={{ color: TEXT, fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{v.title}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{v.speaker}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
