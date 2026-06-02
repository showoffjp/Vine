"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  Phone,
  Search,
  Users,
  BookOpen,
  Star,
  ChevronRight,
  Shield,
  Sun,
  Wind,
  AlertTriangle,
  MessageCircle,
  Calendar,
  MapPin,
  Quote,
} from "lucide-react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#00FF88";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "resources" | "theology" | "support" | "voices" | "videos";

const entryPoints = [
  {
    title: "I'm Struggling with Anxiety",
    icon: Wind,
    color: "#6B4FBB",
    gradient: "linear-gradient(135deg, rgba(107,79,187,0.2), rgba(107,79,187,0.05))",
    desc: "Breathing exercises, Scripture for anxiety, and evidence-based techniques from a faith perspective.",
    count: "34 resources",
  },
  {
    title: "I'm Going Through Depression",
    icon: Sun,
    color: "#00FF88",
    gradient: "linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,255,136,0.05))",
    desc: "You're not alone and this is not weakness. Explore stories, resources, and professional support paths.",
    count: "28 resources",
  },
  {
    title: "I've Experienced Trauma",
    icon: Shield,
    color: "#4FBBAA",
    gradient: "linear-gradient(135deg, rgba(79,187,170,0.2), rgba(79,187,170,0.05))",
    desc: "Trauma-informed content, EMDR information, and the theology of lament and healing.",
    count: "19 resources",
  },
  {
    title: "I Just Need Someone to Talk To",
    icon: MessageCircle,
    color: "#BB4F7A",
    gradient: "linear-gradient(135deg, rgba(187,79,122,0.2), rgba(187,79,122,0.05))",
    desc: "Peer support circles, prayer partners, and community resources for connection.",
    count: "Community",
  },
];

const faithBasics = [
  {
    title: "Therapy and Faith Can Coexist",
    body: "Seeking professional help is not a sign of spiritual failure — it is wisdom. Proverbs 11:14 says, 'Where there is no guidance, a people falls, but in an abundance of counselors there is safety.' God created the mind and blesses those who help care for it.",
    icon: "🤝",
  },
  {
    title: "Mental Illness Is Not a Lack of Faith",
    body: "David, Elijah, Jeremiah — some of Scripture's greatest heroes experienced what we would today call depression, anxiety, and despair. Struggling mentally does not mean your faith is weak. It means you are human.",
    icon: "✝️",
  },
  {
    title: "God Meets Us in Our Pain",
    body: "Psalm 34:18 says, 'The Lord is close to the brokenhearted.' Your suffering is not hidden from God. He does not wait for you to be healed to show up — He shows up in the middle of it.",
    icon: "🕊️",
  },
];

const resources = [
  { topic: "Anxiety", type: "Article", title: "When Prayer Feels Like It Isn't Working", time: "8 min read", color: "#6B4FBB", href: "/discussions/prayer-doesnt-feel-real-009" },
  { topic: "Depression", type: "Discussion", title: "My Journey Through the Dark Night of the Soul", time: "Community", color: "#00FF88", href: "/discussions/worship-feels-empty-011" },
  { topic: "Grief", type: "Article", title: "God, Grief, and the Permission to Mourn", time: "12 min read", color: "#4F8FBB", href: "/blog/psalms-permission-to-lament" },
  { topic: "Trauma", type: "Discussion", title: "Healing the Wounds We Don't Show Anyone", time: "Community", color: "#4FBBAA", href: "/discussions/depression-therapy-faith-005" },
  { topic: "Loneliness", type: "Article", title: "The Lonely Christian: You Are Not Abandoned", time: "6 min read", color: "#BB7A4F", href: "/topics/mental-health-god" },
  { topic: "Burnout", type: "Article", title: "Sabbath Is Not Optional — It's Medicine", time: "8 min read", color: "#BB4F7A", href: "/blog/digital-sabbath" },
  { topic: "Addiction", type: "Groups", title: "Breaking Chains: Faith & Recovery Programs", time: "Community", color: "#8A5FBB", href: "/groups/mental-health-faith" },
  { topic: "Relationships", type: "Article", title: "Healthy Boundaries: A Biblical Perspective", time: "8 min read", color: "#4FBBAA", href: "/discussions/marriage-hard-church-silent-013" },
];

const therapists = [
  {
    name: "Dr. Sarah Okafor",
    credentials: "PsyD, LPC",
    specialty: "Anxiety, Depression, Identity",
    faith: "Non-denominational",
    location: "Atlanta, GA · Telehealth Available",
    rating: 4.9,
    reviews: 87,
    initials: "SO",
    color: "#6B4FBB",
  },
  {
    name: "James Whitfield",
    credentials: "LMFT, MA Counseling",
    specialty: "Trauma, PTSD, Marriage",
    faith: "Baptist",
    location: "Dallas, TX · In-Person & Online",
    rating: 4.8,
    reviews: 62,
    initials: "JW",
    color: "#00FF88",
  },
  {
    name: "Maria Elena Reyes",
    credentials: "LPC, NCC",
    specialty: "Grief, Life Transitions, Women's Issues",
    faith: "Catholic",
    location: "Miami, FL · Telehealth Available",
    rating: 5.0,
    reviews: 43,
    initials: "MR",
    color: "#BB4F7A",
  },
  {
    name: "David Park",
    credentials: "PhD Clinical Psychology",
    specialty: "Men's Issues, Addiction, Burnout",
    faith: "Presbyterian",
    location: "Seattle, WA · In-Person & Online",
    rating: 4.7,
    reviews: 118,
    initials: "DP",
    color: "#4FBBAA",
  },
];

const supportGroups = [
  { name: "Anxiety & Faith Circle", members: "2.1k", meets: "Tuesdays 7PM ET", color: "#6B4FBB" },
  { name: "Grief & Loss Support", members: "1.4k", meets: "Sundays 3PM ET", color: "#4F8FBB" },
  { name: "Recovery & Restoration", members: "987", meets: "Mondays 8PM ET", color: "#00FF88" },
  { name: "Women Healing Together", members: "3.2k", meets: "Thursdays 6PM ET", color: "#BB4F7A" },
  { name: "Men's Mental Health Space", members: "1.8k", meets: "Fridays 7PM ET", color: "#4FBBAA" },
];

interface MHTheology {
  id: string;
  question: string;
  answer: string;
  scripture: string;
  insight: string;
}

const MH_THEOLOGY: MHTheology[] = [
  {
    id: "spiritual-failing",
    question: "Is mental illness a spiritual failing?",
    answer: "No. Mental illness is not a sign of weak faith or hidden sin. The mind and body are deeply connected — Scripture teaches that we are embodied souls, not disembodied spirits. Brain chemistry, trauma, genetics, and environment all shape mental health. When these systems are disordered, the result is suffering, not sin. Calling mental illness a spiritual failing adds shame to pain and discourages people from seeking help. The compassionate and truthful response is to treat mental suffering with the same care we give physical illness.",
    scripture: "John 9:2-3",
    insight: "When the disciples asked Jesus whose sin caused a man's blindness, he rejected the premise entirely. Not all suffering is caused by personal sin. Some is simply part of living in a broken world.",
  },
  {
    id: "christian-depression",
    question: "Can Christians have depression?",
    answer: "Yes — and Scripture provides ample evidence. Elijah collapsed under a broom tree and asked God to take his life (1 Kings 19). David wrote psalms from the depths of despair: 'Why, my soul, are you downcast?' (Psalm 42). Jeremiah cursed the day of his birth. The writer of Lamentations sat in ruins and wept. Jesus himself was described as 'a man of sorrows, acquainted with grief.' These are not examples of spiritual failure — they are honest accounts of human suffering, held before God. Depression among believers is real, common, and not disqualifying.",
    scripture: "1 Kings 19:4; Psalm 42:5; Isaiah 53:3",
    insight: "The Bible does not promise immunity from emotional suffering. It promises presence in it. The Psalms are the largest book in the Bible precisely because honest lament is sacred.",
  },
  {
    id: "prayer-mental-health",
    question: "What is the relationship between prayer and mental health?",
    answer: "Prayer and mental health interact in complex and real ways. Prayer can provide genuine comfort, reduce anxiety by anchoring the mind in God's sovereignty, and foster the kind of honest self-examination that leads to health. Practices like the Examen, centering prayer, and lament psalms have documented calming effects. However, prayer is not a substitute for clinical care when clinical care is needed. Telling someone with clinical depression to 'just pray more' can be harmful and dismissive. The most faithful answer is: prayer is powerful and real — and it is not the only tool God has provided.",
    scripture: "Philippians 4:6-7; Psalm 34:18",
    insight: "The peace of God that 'surpasses understanding' is real — and it often works alongside therapy, community, and medicine rather than instead of them.",
  },
  {
    id: "church-response",
    question: "How should the church respond to mental illness?",
    answer: "The church is called to be a community of healing, but many people suffering from mental illness have been wounded by well-meaning responses that minimized their pain, offered spiritual platitudes, or implied shame. A faithful church response: believes people who report suffering, avoids quick-fix spiritual answers, trains leaders to recognize crisis and refer to professionals, removes stigma by speaking openly about mental health from the pulpit, provides practical support (meals, childcare, accompaniment), and advocates for accessible mental health care. The church should be among the safest places for broken people — not the most shaming.",
    scripture: "Galatians 6:2; Romans 12:15",
    insight: "Weeping with those who weep (Romans 12:15) is a spiritual discipline. The church's first calling is presence, not solutions.",
  },
  {
    id: "professional-help-faith",
    question: "Is seeking professional help a lack of faith?",
    answer: "No. This idea has caused enormous harm. Seeking a therapist or psychiatrist is no more a lack of faith than seeing a cardiologist for a heart condition. God works through human agents — doctors, counselors, nurses — as readily as through prayer. The same God who made the human brain also equipped people to study and treat it. Refusing help on grounds of faith can actually reflect pride (the belief that one should be able to handle everything alone) or theological confusion (the assumption that God only heals through supernatural means). Wisdom, in Proverbs, actively seeks counsel.",
    scripture: "Proverbs 11:14; Luke 5:31",
    insight: "Jesus said the sick need a physician. Applying that principle to mental illness is not faithlessness — it is wisdom.",
  },
];

interface MHSupport {
  id: string;
  type: string;
  name: string;
  description: string;
  who_for: string;
  approach: string;
}

const MH_SUPPORT: MHSupport[] = [
  {
    id: "christian-counseling",
    type: "Professional",
    name: "Christian Counseling",
    description: "Licensed therapists who intentionally integrate Christian faith with clinical psychological practice. These counselors are trained in evidence-based modalities (CBT, EMDR, DBT) and bring theological understanding to the therapeutic relationship. They can address clinical diagnoses while honoring the spiritual dimension of a person's experience.",
    who_for: "Those with clinical diagnoses, trauma history, or who want their faith integrated into professional care",
    approach: "Faith-integrated, evidence-based therapy",
  },
  {
    id: "lay-counseling",
    type: "Lay Ministry",
    name: "Lay Counseling",
    description: "Trained non-professional counselors within the church community. These individuals have completed structured training programs (such as the Stephen Ministry model) and provide ongoing supportive care — listening, prayer, practical help — for people navigating grief, life transitions, relational stress, and everyday struggles. Not a substitute for clinical care but a vital layer of the church's care system.",
    who_for: "People navigating ordinary life struggles, grief, transitions, or loneliness who want care within the church community",
    approach: "Trained peer support with spiritual care",
  },
  {
    id: "support-groups",
    type: "Community",
    name: "Support Groups",
    description: "Structured groups organized around shared experience — grief, addiction recovery, anxiety, eating disorders, divorce, chronic illness. In a faith context, these groups combine the therapeutic power of shared story with prayer, Scripture, and spiritual community. Research consistently shows that peer support groups reduce isolation and improve outcomes across a range of mental health conditions.",
    who_for: "Anyone dealing with grief, addiction, anxiety, chronic illness, or life transitions who benefits from shared community",
    approach: "Shared story, mutual support, and spiritual community",
  },
  {
    id: "pastoral-care",
    type: "Church Ministry",
    name: "Pastoral Care",
    description: "The shepherding ministry of pastors, elders, and deacons — visiting, praying with, anointing, and walking alongside members of the congregation through suffering. Pastoral care is not therapy, but it is irreplaceable. It offers the presence of the community, the ministry of prayer, the sacraments, and the authority to speak God's Word into specific situations. Effective pastoral care knows its limits and refers appropriately.",
    who_for: "Church members experiencing suffering, crisis, or existential struggle who need spiritual presence and guidance",
    approach: "Prayer, presence, Scripture, and sacramental care",
  },
  {
    id: "online-resources",
    type: "Digital",
    name: "Online Resources",
    description: "Apps, websites, and digital communities that provide accessible mental health support. Faith-integrated options include apps designed around Scripture-based cognitive reframing, guided prayer for anxiety, online communities for specific struggles, and crisis text lines with trained faith-sensitive responders. Digital resources extend reach beyond geography and remove barriers of cost and stigma.",
    who_for: "Anyone seeking accessible, low-barrier support — especially those in underserved areas or who are not yet ready for in-person help",
    approach: "Accessible, stigma-reducing digital support and education",
  },
  {
    id: "crisis-support",
    type: "Crisis",
    name: "Crisis Support",
    description: "Immediate intervention resources for people in acute mental health crisis — suicidal ideation, self-harm, psychotic episodes, or acute trauma. The 988 Suicide and Crisis Lifeline is available 24/7 by call or text. Crisis stabilization units, emergency psychiatric services, and faith-based crisis intervention teams provide immediate in-person care. Churches with trained Mental Health First Aid staff can serve as a first point of contact.",
    who_for: "Anyone in acute crisis — or those supporting someone in crisis",
    approach: "Immediate, professional, 24/7 crisis intervention",
  },
];

interface Voice {
  id: string;
  name: string;
  era: string;
  context: string;
  bio: string;
  quote: string;
  contribution: string;
}

const VOICES_MH: Voice[] = [
  {
    id: "menninger",
    name: "Karl Menninger",
    era: "1893-1990",
    context: "Psychiatrist, founder of the Menninger Clinic",
    bio: "Karl Menninger was one of the most influential psychiatrists of the 20th century and a committed Christian who believed faith and mental health were deeply connected. His 1973 book 'Whatever Became of Sin?' was a landmark challenge to both the therapeutic culture and the church: he argued that eliminating the concept of personal moral responsibility — sin — had actually harmed mental health by removing the possibility of genuine guilt, repentance, and restoration. Menninger called the church to reclaim its role in moral and spiritual formation as essential to human flourishing.",
    quote: "If the concept of personal responsibility is to be retained, and I believe it must be, it requires the concept of sin.",
    contribution: "Bridged psychiatry and theology, arguing that the church's doctrine of sin and forgiveness provides essential psychological resources that secular therapy cannot replicate.",
  },
  {
    id: "hart",
    name: "Archibald Hart",
    era: "1940-present",
    context: "Clinical psychologist, Fuller Seminary professor",
    bio: "Archibald Hart served for decades as Dean of the Graduate School of Psychology at Fuller Theological Seminary, where he trained generations of Christian mental health professionals. His work focused on the intersection of biology, psychology, and faith — particularly on how physiological factors like adrenaline and cortisol affect the spiritual and emotional life. His books 'Adrenaline and Stress' and 'The Anxiety Cure' brought clinical rigor to Christian audiences and helped destigmatize anxiety as a physiological condition, not a spiritual failure.",
    quote: "Anxiety is not a sign of weak faith — it is often a sign of an overworked adrenal system. God made the body, and the body has limits.",
    contribution: "Gave Christian audiences a physiological framework for understanding anxiety and stress, helping remove the stigma that anxiety equals spiritual weakness.",
  },
  {
    id: "welch",
    name: "Ed Welch",
    era: "1953-present",
    context: "Biblical counselor, CCEF faculty",
    bio: "Ed Welch is a faculty member at the Christian Counseling and Educational Foundation (CCEF) and one of the most respected voices in the biblical counseling movement. His books 'Running Scared' (on fear and anxiety) and 'When People Are Big and God Is Small' (on fear of man) apply careful biblical exegesis to the concrete struggles of mental and emotional life. Welch takes suffering seriously — refusing both to minimize it and to reduce it entirely to medical categories — insisting that human beings are moral agents before God even in the midst of genuine suffering.",
    quote: "Fear and anxiety are not just problems to be managed. They are invitations to know God more deeply.",
    contribution: "Demonstrated how careful biblical theology, not just therapeutic technique, can address fear, anxiety, and emotional suffering with both depth and compassion.",
  },
  {
    id: "langberg",
    name: "Diane Langberg",
    era: "1945-present",
    context: "Psychologist, trauma specialist, author",
    bio: "Diane Langberg has spent five decades working with trauma survivors — abuse victims, war refugees, genocide survivors — and training other therapists. Her books 'Suffering and the Heart of God' and 'Redeeming Power' have shaped Christian understanding of trauma, abuse, and the church's responsibility to survivors. She is a fierce advocate for the vulnerable within Christian institutions and has spoken with moral clarity about the epidemic of spiritual abuse in churches. Her work integrates depth psychology with a robust Christology centered on Christ's own suffering.",
    quote: "Trauma is not just something that happened to you. It lives in your body, your relationships, and your sense of God.",
    contribution: "Brought trauma-informed care into Christian ministry contexts and challenged the church to take the suffering of abuse survivors seriously rather than protecting institutions.",
  },
  {
    id: "thompson",
    name: "Curt Thompson",
    era: "1960-present",
    context: "Psychiatrist, author, interpersonal neurobiology",
    bio: "Curt Thompson is a psychiatrist who has integrated the findings of interpersonal neurobiology — particularly the work of Daniel Siegel — with Christian theology to understand how the brain, attachment, relationships, and spiritual formation interact. His books 'Anatomy of the Soul' and 'The Soul of Shame' argue that shame is the primary weapon the enemy uses against human beings, and that being known — truly known, in community — is the primary antidote. Thompson's work has given Christian counselors and pastors a neuroscientific vocabulary for ancient theological truths.",
    quote: "We are made to be known. Shame isolates; being known heals. This is the pattern of God from the beginning.",
    contribution: "Integrated interpersonal neurobiology with Christian theology, showing how attachment, community, and being known are not just spiritual goods but neurologically necessary for healing.",
  },
];

export default function MentalHealthPage() {
  const [activeTab, setActiveTab] = useState<Tab>("resources");
  const [bookedSessions, setBookedSessions] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_mh_booked"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [joinedGroups, setJoinedGroups] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_mh_groups"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [selectedVoiceId, setSelectedVoiceId] = useState<string>(VOICES_MH[0].id);

  useEffect(() => {
    try { localStorage.setItem("vine_mh_booked", JSON.stringify([...bookedSessions])); } catch {}
  }, [bookedSessions]);
  useEffect(() => {
    try { localStorage.setItem("vine_mh_groups", JSON.stringify([...joinedGroups])); } catch {}
  }, [joinedGroups]);

  const toggleBook = (i: number) => setBookedSessions(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; });
  const toggleJoinGroup = (i: number) => setJoinedGroups(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; });

  const selectedVoice = VOICES_MH.find((v) => v.id === selectedVoiceId) ?? VOICES_MH[0];

  const supportTypeColor = (type: string) => {
    if (type === "Professional") return PURPLE;
    if (type === "Crisis") return "#EF4444";
    if (type === "Community") return GREEN;
    if (type === "Church Ministry") return "#4FBBAA";
    if (type === "Digital") return "#3B82F6";
    return "#F59E0B";
  };

  return (
    <div style={{ background: BG, minHeight: "100vh" }}>

      <main style={{ paddingTop: "80px" }}>
        {/* CRISIS BANNER */}
        <div
          style={{
            background: "rgba(107,79,187,0.12)",
            borderBottom: "1px solid rgba(107,79,187,0.25)",
            padding: "10px 24px",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#C0C0D8", fontSize: "14px" }}>
            <AlertTriangle size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px", color: GREEN }} />
            <strong style={{ color: TEXT }}>If you&apos;re in crisis, please call or text </strong>
            <strong style={{ color: GREEN }}>988</strong>
            <span style={{ color: "#8A8AA8" }}> (Suicide &amp; Crisis Lifeline) — available 24/7.</span>
          </p>
        </div>

        {/* HERO */}
        <section
          style={{
            background: "linear-gradient(180deg, rgba(107,79,187,0.12) 0%, rgba(0,255,136,0.04) 60%, transparent 100%)",
            padding: "72px 24px 60px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(0,255,136,0.1)",
                border: "1px solid rgba(0,255,136,0.25)",
                borderRadius: "100px",
                padding: "6px 16px",
                marginBottom: "24px",
              }}
            >
              <Heart size={14} style={{ color: GREEN }} />
              <span style={{ color: GREEN, fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em" }}>
                MENTAL HEALTH &amp; INNER HEALING
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(38px, 6vw, 68px)",
                fontWeight: 900,
                lineHeight: 1.05,
                marginBottom: "20px",
                background: "linear-gradient(135deg, #FFFFFF 0%, #BBA8D4 60%, #F2F2F8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              You Are Not Alone
            </h1>
            <p style={{ color: "#8A8AA8", fontSize: "18px", lineHeight: 1.8, marginBottom: "12px" }}>
              This is a safe, judgment-free space where faith and mental health meet with honesty, compassion, and real resources.
            </p>
            <p style={{ color: "#6A6A88", fontSize: "15px", fontStyle: "italic" }}>
              &ldquo;The Lord is close to the brokenhearted and saves those who are crushed in spirit.&rdquo; — Psalm 34:18
            </p>
          </div>
        </section>

        {/* TAB BAR */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", gap: 4, padding: "8px 0 0", background: "transparent" }}>
            {(["resources", "theology", "support", "voices", "videos"] as const).map(t => (
              <button key={t} onClick={() => setActiveTab(t)}
                style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                {t === "resources" ? "Resources" : t === "theology" ? "Theology" : t === "support" ? "Support Types" : t === "voices" ? "Voices" : "🎬 Videos"}
              </button>
            ))}
          </div>
          <div style={{ height: 1, background: BORDER, marginBottom: 32, marginTop: 8 }} />
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 80px" }}>

          {/* ── RESOURCES TAB ── */}
          {activeTab === "resources" && (
            <div>
              {/* START HERE */}
              <section style={{ marginBottom: "64px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: 800, color: TEXT, marginBottom: "8px" }}>
                  Start Here
                </h2>
                <p style={{ color: "#8A8AA8", fontSize: "15px", marginBottom: "24px" }}>
                  Wherever you are right now — there&apos;s a path forward.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px" }}>
                  {entryPoints.map((ep, i) => (
                    <div
                      key={i}
                      style={{
                        background: ep.gradient,
                        border: `1px solid ${ep.color}25`,
                        borderRadius: "20px",
                        padding: "28px",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "14px",
                          background: `${ep.color}20`,
                          border: `1px solid ${ep.color}35`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "16px",
                        }}
                      >
                        <ep.icon size={22} style={{ color: ep.color }} />
                      </div>
                      <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "16px", marginBottom: "10px", lineHeight: 1.3 }}>
                        {ep.title}
                      </h3>
                      <p style={{ color: "#8A8AA8", fontSize: "13px", lineHeight: 1.6, marginBottom: "16px" }}>
                        {ep.desc}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ color: ep.color, fontSize: "12px", fontWeight: 600 }}>{ep.count}</span>
                        <ChevronRight size={16} style={{ color: ep.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAITH & MENTAL HEALTH BASICS */}
              <section style={{ marginBottom: "64px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: 800, color: TEXT, marginBottom: "24px" }}>
                  Faith &amp; Mental Health: The Basics
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
                  {faithBasics.map((card, i) => (
                    <div
                      key={i}
                      style={{
                        background: CARD,
                        border: `1px solid ${BORDER}`,
                        borderRadius: "20px",
                        padding: "28px",
                      }}
                    >
                      <div style={{ fontSize: "32px", marginBottom: "16px" }}>{card.icon}</div>
                      <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "17px", marginBottom: "12px", lineHeight: 1.3 }}>
                        {card.title}
                      </h3>
                      <p style={{ color: "#8A8AA8", fontSize: "14px", lineHeight: 1.75 }}>
                        {card.body}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* RESOURCE LIBRARY */}
              <section style={{ marginBottom: "64px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                  <h2 style={{ fontSize: "24px", fontWeight: 800, color: TEXT }}>Resource Library</h2>
                  <button style={{ display: "flex", alignItems: "center", gap: "6px", color: GREEN, fontSize: "14px", fontWeight: 600, background: "none", border: "none", cursor: "pointer" }}>
                    View All <ChevronRight size={16} />
                  </button>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "14px" }}>
                  {resources.map((res, i) => (
                    <a
                      key={i}
                      href={res.href}
                      style={{
                        background: CARD,
                        border: `1px solid ${BORDER}`,
                        borderRadius: "16px",
                        padding: "20px",
                        cursor: "pointer",
                        display: "block",
                        textDecoration: "none",
                        transition: "border-color 0.2s, background 0.2s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${res.color}40`; e.currentTarget.style.background = `${res.color}06`; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.background = CARD; }}
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                        <span
                          style={{
                            background: `${res.color}18`,
                            color: res.color,
                            borderRadius: "100px",
                            padding: "3px 10px",
                            fontSize: "11px",
                            fontWeight: 700,
                          }}
                        >
                          {res.topic}
                        </span>
                        <span style={{ color: "#6A6A88", fontSize: "11px", fontWeight: 600 }}>{res.type}</span>
                      </div>
                      <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "14px", marginBottom: "8px", lineHeight: 1.4 }}>
                        {res.title}
                      </h3>
                      <p style={{ color: "#6A6A88", fontSize: "12px" }}>{res.time}</p>
                    </a>
                  ))}
                </div>
              </section>

              {/* FIND A THERAPIST */}
              <section style={{ marginBottom: "64px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: 800, color: TEXT, marginBottom: "8px" }}>
                  Find a Christian Therapist
                </h2>
                <p style={{ color: "#8A8AA8", fontSize: "15px", marginBottom: "20px" }}>
                  All therapists are licensed, faith-affirming professionals who integrate Christian values with clinical expertise.
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "12px",
                    padding: "0 16px",
                    marginBottom: "20px",
                    maxWidth: "480px",
                  }}
                >
                  <Search size={16} style={{ color: "#6A6A88", flexShrink: 0 }} />
                  <input
                    readOnly
                    placeholder="Search by specialty, faith tradition, or location..."
                    style={{ background: "transparent", border: "none", outline: "none", color: TEXT, padding: "14px 0", fontSize: "14px", width: "100%" }}
                  />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
                  {therapists.map((t, i) => (
                    <div
                      key={i}
                      style={{
                        background: CARD,
                        border: `1px solid ${BORDER}`,
                        borderRadius: "20px",
                        padding: "24px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                        <div
                          style={{
                            width: "52px",
                            height: "52px",
                            borderRadius: "50%",
                            background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 800,
                            fontSize: "18px",
                            color: "white",
                            flexShrink: 0,
                          }}
                        >
                          {t.initials}
                        </div>
                        <div>
                          <p style={{ color: TEXT, fontWeight: 700, fontSize: "15px", marginBottom: "2px" }}>{t.name}</p>
                          <p style={{ color: "#8A8AA8", fontSize: "12px" }}>{t.credentials}</p>
                        </div>
                      </div>
                      <div style={{ marginBottom: "12px" }}>
                        <p style={{ color: "#8A8AA8", fontSize: "12px", marginBottom: "4px" }}>
                          <strong style={{ color: "#C0C0D8" }}>Specialty:</strong> {t.specialty}
                        </p>
                        <p style={{ color: "#8A8AA8", fontSize: "12px", marginBottom: "4px" }}>
                          <strong style={{ color: "#C0C0D8" }}>Faith:</strong> {t.faith}
                        </p>
                        <p style={{ color: "#6A6A88", fontSize: "12px", display: "flex", alignItems: "center", gap: "4px" }}>
                          <MapPin size={11} /> {t.location}
                        </p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px", color: GREEN, fontSize: "13px", fontWeight: 700 }}>
                          <Star size={13} fill={GREEN} /> {t.rating}
                          <span style={{ color: "#6A6A88", fontWeight: 400 }}>({t.reviews})</span>
                        </span>
                      </div>
                      <button
                        onClick={() => toggleBook(i)}
                        style={{
                          width: "100%",
                          background: bookedSessions.has(i) ? "rgba(0,255,136,0.15)" : "linear-gradient(135deg, #00FF88, #B8922A)",
                          color: bookedSessions.has(i) ? GREEN : BG,
                          border: bookedSessions.has(i) ? "1px solid rgba(0,255,136,0.3)" : "none",
                          borderRadius: "10px",
                          padding: "10px",
                          fontWeight: 700,
                          fontSize: "13px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                          transition: "all 0.2s",
                        }}
                      >
                        <Calendar size={13} /> {bookedSessions.has(i) ? "✓ Session Requested!" : "Book Session"}
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* SUPPORT GROUPS */}
              <section style={{ marginBottom: "64px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: 800, color: TEXT, marginBottom: "24px" }}>
                  Community Support Groups
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "14px" }}>
                  {supportGroups.map((group, i) => (
                    <div
                      key={i}
                      style={{
                        background: CARD,
                        border: `1px solid ${BORDER}`,
                        borderRadius: "16px",
                        padding: "20px",
                        borderTop: `3px solid ${group.color}`,
                      }}
                    >
                      <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "15px", marginBottom: "8px" }}>
                        {group.name}
                      </h3>
                      <p style={{ color: "#6A6A88", fontSize: "12px", marginBottom: "4px" }}>
                        <Users size={11} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                        {group.members} members
                      </p>
                      <p style={{ color: "#6A6A88", fontSize: "12px", marginBottom: "16px" }}>
                        <Calendar size={11} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                        {group.meets}
                      </p>
                      <button
                        onClick={() => toggleJoinGroup(i)}
                        style={{
                          width: "100%",
                          background: joinedGroups.has(i) ? group.color : `${group.color}15`,
                          border: `1px solid ${group.color}30`,
                          color: joinedGroups.has(i) ? BG : group.color,
                          borderRadius: "8px",
                          padding: "8px",
                          fontWeight: 700,
                          fontSize: "12px",
                          cursor: "pointer",
                          transition: "all 0.2s",
                        }}
                      >
                        {joinedGroups.has(i) ? "✓ Joined!" : "Join Group"}
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* DAILY ENCOURAGEMENT */}
              <section style={{ marginBottom: "64px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: 800, color: TEXT, marginBottom: "24px" }}>
                  Daily Encouragement
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  <div
                    style={{
                      background: "linear-gradient(135deg, rgba(107,79,187,0.2) 0%, rgba(107,79,187,0.05) 100%)",
                      border: "1px solid rgba(107,79,187,0.25)",
                      borderRadius: "20px",
                      padding: "32px",
                    }}
                  >
                    <p style={{ color: GREEN, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "16px" }}>
                      TODAY&apos;S VERSE
                    </p>
                    <p style={{ color: TEXT, fontSize: "18px", fontStyle: "italic", lineHeight: 1.7, marginBottom: "16px" }}>
                      &ldquo;He heals the brokenhearted and binds up their wounds.&rdquo;
                    </p>
                    <p style={{ color: GREEN, fontWeight: 700, fontSize: "14px" }}>— Psalm 147:3</p>
                  </div>
                  <div
                    style={{
                      background: "linear-gradient(135deg, rgba(0,255,136,0.12) 0%, rgba(0,255,136,0.03) 100%)",
                      border: "1px solid rgba(0,255,136,0.2)",
                      borderRadius: "20px",
                      padding: "32px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                      <Quote size={16} style={{ color: GREEN }} />
                      <p style={{ color: GREEN, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em" }}>
                        FROM SPURGEON ON SUFFERING
                      </p>
                    </div>
                    <p style={{ color: "#C0C0D8", fontSize: "15px", fontStyle: "italic", lineHeight: 1.75, marginBottom: "16px" }}>
                      &ldquo;It is not how much we have, but how much we enjoy, that makes happiness. God&apos;s people are the happiest people in the world even when they are in the most pain, because their joy is from another source.&rdquo;
                    </p>
                    <p style={{ color: "#8A8AA8", fontWeight: 600, fontSize: "13px" }}>— Charles H. Spurgeon</p>
                  </div>
                </div>
              </section>

              {/* PROFESSIONAL HELP vs COMMUNITY */}
              <section style={{ marginBottom: "64px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: 800, color: TEXT, marginBottom: "24px" }}>
                  Professional Help vs. Community Support
                </h2>
                <div
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "20px",
                    padding: "32px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "32px",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(107,79,187,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <BookOpen size={18} style={{ color: PURPLE }} />
                      </div>
                      <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "17px" }}>Professional Therapy</h3>
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {[
                        "Clinical diagnosis and treatment",
                        "Trauma processing (EMDR, CBT)",
                        "Medication management referrals",
                        "Structured, confidential sessions",
                        "Best for: clinical conditions, trauma, crisis",
                      ].map((item, i) => (
                        <li key={i} style={{ color: "#8A8AA8", fontSize: "14px", lineHeight: 1.6, padding: "4px 0", paddingLeft: "16px", borderLeft: "2px solid rgba(107,79,187,0.4)", marginBottom: "4px" }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(0,255,136,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Users size={18} style={{ color: GREEN }} />
                      </div>
                      <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "17px" }}>Community Support</h3>
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {[
                        "Peer support and shared experience",
                        "Prayer and spiritual encouragement",
                        "Accountability partnerships",
                        "Available 24/7, no appointment needed",
                        "Best for: loneliness, everyday struggles, faith questions",
                      ].map((item, i) => (
                        <li key={i} style={{ color: "#8A8AA8", fontSize: "14px", lineHeight: 1.6, padding: "4px 0", paddingLeft: "16px", borderLeft: "2px solid rgba(0,255,136,0.4)", marginBottom: "4px" }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* YOU ARE SEEN CTA */}
              <section>
                <div
                  style={{
                    background: "linear-gradient(135deg, rgba(107,79,187,0.18) 0%, rgba(0,255,136,0.08) 100%)",
                    border: "1px solid rgba(107,79,187,0.25)",
                    borderRadius: "24px",
                    padding: "56px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "48px", marginBottom: "20px" }}>🕊️</div>
                  <h2 style={{ fontSize: "32px", fontWeight: 900, color: TEXT, marginBottom: "16px" }}>
                    You Are Seen. You Are Known. You Are Loved.
                  </h2>
                  <p style={{ color: "#8A8AA8", fontSize: "17px", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto 28px" }}>
                    Whatever you&apos;re carrying today — you don&apos;t have to carry it alone. The Vine community is here, and so is God. Would you let us pray with you?
                  </p>
                  <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                    <button
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "linear-gradient(135deg, #00FF88, #B8922A)",
                        color: BG,
                        border: "none",
                        borderRadius: "12px",
                        padding: "14px 28px",
                        fontWeight: 800,
                        fontSize: "15px",
                        cursor: "pointer",
                      }}
                    >
                      <Heart size={16} /> Request Prayer
                    </button>
                    <button
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "transparent",
                        color: TEXT,
                        border: `1px solid ${BORDER}`,
                        borderRadius: "12px",
                        padding: "14px 28px",
                        fontWeight: 600,
                        fontSize: "15px",
                        cursor: "pointer",
                      }}
                    >
                      <Phone size={16} /> Crisis Resources
                    </button>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* ── THEOLOGY TAB ── */}
          {activeTab === "theology" && (
            <div>
              <div style={{ marginBottom: 32 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, color: TEXT, marginBottom: 8 }}>Faith &amp; Mental Health: Theological Questions</h2>
                <p style={{ color: MUTED, fontSize: 15 }}>Honest answers to the hard questions that keep people from getting help.</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {MH_THEOLOGY.map((entry) => {
                  const isOpen = openAccordion === entry.id;
                  return (
                    <div key={entry.id} style={{ background: CARD, border: `1px solid ${isOpen ? PURPLE + "50" : BORDER}`, borderRadius: 16, overflow: "hidden", transition: "border-color 0.2s" }}>
                      <button
                        onClick={() => setOpenAccordion(isOpen ? null : entry.id)}
                        style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "20px 24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}
                      >
                        <span style={{ fontWeight: 700, fontSize: 16, color: TEXT }}>{entry.question}</span>
                        <span style={{ color: MUTED, fontSize: 20, lineHeight: 1, flexShrink: 0 }}>{isOpen ? "−" : "+"}</span>
                      </button>
                      {isOpen && (
                        <div style={{ padding: "0 24px 24px" }}>
                          <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>{entry.answer}</p>
                          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                            <div style={{ flex: 1, minWidth: 200, padding: "12px 16px", borderRadius: 10, background: `${PURPLE}10`, border: `1px solid ${PURPLE}25` }}>
                              <p style={{ color: "#9B8FEB", fontSize: 11, fontWeight: 700, marginBottom: 4 }}>SCRIPTURE</p>
                              <p style={{ color: "#C0C0D8", fontSize: 13, fontStyle: "italic" }}>{entry.scripture}</p>
                            </div>
                            <div style={{ flex: 2, minWidth: 240, padding: "12px 16px", borderRadius: 10, background: `${GREEN}08`, border: `1px solid ${GREEN}20` }}>
                              <p style={{ color: GREEN, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>INSIGHT</p>
                              <p style={{ color: "#C0C0D8", fontSize: 13 }}>{entry.insight}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── SUPPORT TAB ── */}
          {activeTab === "support" && (
            <div>
              <div style={{ marginBottom: 32 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, color: TEXT, marginBottom: 8 }}>Types of Support</h2>
                <p style={{ color: MUTED, fontSize: 15 }}>A guide to the different layers of care available — so you can find what fits your situation.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
                {MH_SUPPORT.map((item) => {
                  const tColor = supportTypeColor(item.type);
                  return (
                    <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: 24, borderTop: `3px solid ${tColor}` }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                        <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 17 }}>{item.name}</h3>
                        <span style={{ background: `${tColor}18`, color: tColor, border: `1px solid ${tColor}30`, borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 700 }}>{item.type}</span>
                      </div>
                      <p style={{ color: "#C0C0D8", fontSize: 13, lineHeight: 1.75, marginBottom: 16 }}>{item.description}</p>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <div style={{ padding: "8px 12px", borderRadius: 8, background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}` }}>
                          <p style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 2 }}>WHO IT&apos;S FOR</p>
                          <p style={{ color: "#C0C0D8", fontSize: 13 }}>{item.who_for}</p>
                        </div>
                        <div style={{ padding: "8px 12px", borderRadius: 8, background: `${tColor}08`, border: `1px solid ${tColor}20` }}>
                          <p style={{ color: tColor, fontSize: 11, fontWeight: 700, marginBottom: 2 }}>APPROACH</p>
                          <p style={{ color: "#C0C0D8", fontSize: 13 }}>{item.approach}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── VOICES TAB ── */}
          {activeTab === "voices" && (
            <div>
              <div style={{ marginBottom: 32 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, color: TEXT, marginBottom: 8 }}>Voices on Mental Health &amp; Faith</h2>
                <p style={{ color: MUTED, fontSize: 15 }}>Thinkers and practitioners who have shaped the conversation between faith and mental health.</p>
              </div>
              <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                {/* Left panel */}
                <div style={{ width: 220, flexShrink: 0 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {VOICES_MH.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVoiceId(v.id)}
                        style={{
                          textAlign: "left",
                          background: selectedVoiceId === v.id ? `${PURPLE}18` : "transparent",
                          border: selectedVoiceId === v.id ? `1px solid ${PURPLE}40` : "1px solid transparent",
                          borderRadius: 12,
                          padding: "12px",
                          cursor: "pointer",
                        }}
                      >
                        <p style={{ fontWeight: 700, fontSize: 14, color: selectedVoiceId === v.id ? TEXT : MUTED, marginBottom: 2 }}>{v.name}</p>
                        <p style={{ fontSize: 12, color: "#6A6A88" }}>{v.era}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right panel */}
                <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: 28 }}>
                  <span style={{ background: `${PURPLE}18`, color: "#9B8FEB", border: `1px solid ${PURPLE}30`, borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 700 }}>{selectedVoice.era}</span>
                  <h2 style={{ fontSize: 26, fontWeight: 900, color: TEXT, marginTop: 12, marginBottom: 4 }}>{selectedVoice.name}</h2>
                  <p style={{ color: MUTED, fontSize: 14, marginBottom: 20 }}>{selectedVoice.context}</p>

                  <div style={{ padding: "16px 20px", borderRadius: 12, background: "rgba(107,79,187,0.08)", border: "1px solid rgba(107,79,187,0.18)", marginBottom: 20 }}>
                    <p style={{ color: "#C0C0D8", fontSize: 16, fontStyle: "italic", lineHeight: 1.75 }}>&ldquo;{selectedVoice.quote}&rdquo;</p>
                  </div>

                  <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{selectedVoice.bio}</p>

                  <div style={{ padding: "14px 18px", borderRadius: 12, background: `${GREEN}08`, border: `1px solid ${GREEN}20` }}>
                    <p style={{ color: GREEN, fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", marginBottom: 6 }}>CONTRIBUTION</p>
                    <p style={{ color: "#C0C0D8", fontSize: 14 }}>{selectedVoice.contribution}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "videos" && (
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 60px" }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
                <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
                <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                  Sermons, lectures, and teachings on mental health, depression, anxiety, and the intersection of faith and psychological wellbeing.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {[
                    { videoId: "2W_Bl99wNJk", title: "Dealing With Depression: A Biblical Answer to Emotional Suffering", channel: "Dr. David Jeremiah", description: "Dr. David Jeremiah addresses depression with pastoral compassion, drawing from Job's darkest moments to offer a biblical framework for navigating emotional suffering." },
                    { videoId: "817xla1jZPk", title: "To the Christian Battling Depression, Anxiety, and Fear", channel: "Gospel-Centered Teaching", description: "A direct, honest message to believers who struggle with mental health — affirming that God is not angry at you for your weakness and that Scripture speaks to the depths of emotional pain." },
                    { videoId: "_Mussj71QxE", title: "Everything Christians Need to Know About Anxiety, Depression & Godly Joy", channel: "Biblical Counseling", description: "A comprehensive teaching covering what the Bible says about anxiety and depression — distinguishing between spiritual, biological, and circumstantial roots, and offering biblical responses to each." },
                    { videoId: "I0xDryrxp7o", title: "The Biblical Cure for Anxiety — Philippians 4 Explained", channel: "Expository Bible Teaching", description: "An expository examination of Philippians 4:6–7 — the most concentrated biblical passage on anxiety — unpacking what Paul's command to 'not be anxious' actually requires of us." },
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
      </main>

    </div>
  );
}
