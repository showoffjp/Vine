"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "methods" | "stories" | "training" | "videos";

type Method = {
  id: string; name: string; icon: string; description: string; color: string;
  steps: string[]; verse: string; goodFor: string; example: string;
};

type ConversationTip = {
  scenario: string; icon: string; tips: string[]; avoid: string;
};

type Story = {
  id: string; name: string; country: string; flag: string; method: string; story: string; verse: string;
};

const methods: Method[] = [
  {
    id: "bridge",
    name: "The Bridge Illustration",
    icon: "🌉",
    description: "A simple visual metaphor showing the gap between humanity and God, bridged by the cross of Christ.",
    color: "#3B82F6",
    steps: [
      "Draw two cliffs on paper -- one labeled 'God/Heaven,' one labeled 'Us/Earth.'",
      "Draw a chasm between them labeled 'Sin' -- show the separation this creates.",
      "Ask: 'Have you ever felt far from God? The Bible says we all have this problem.'",
      "Quote Romans 3:23: 'All have sinned and fall short of the glory of God.'",
      "Draw a cross bridging the gap -- explain that Jesus died to bridge this separation.",
      "Quote John 3:16: 'For God so loved the world that he gave his only Son...'",
      "Invite a response: 'Would you like to cross that bridge today?'"
    ],
    verse: "Romans 5:8",
    goodFor: "Visual learners, people who've never heard the Gospel, one-on-one conversations",
    example: "Carlos used this with a coworker over lunch. He sketched it on a napkin. By the end, his coworker said, 'I never knew God was the one reaching out to me -- I always thought I had to earn it.'"
  },
  {
    id: "romans-road",
    name: "The Romans Road",
    icon: "🛣️",
    description: "A series of verses in Romans that trace the path from human sinfulness to salvation through Christ.",
    color: "#3a7d56",
    steps: [
      "Start with the problem: Romans 3:23 -- 'All have sinned and fall short.'",
      "Show the consequence: Romans 6:23a -- 'The wages of sin is death.'",
      "Introduce the gift: Romans 6:23b -- 'But the gift of God is eternal life in Christ.'",
      "Demonstrate God's love: Romans 5:8 -- 'While we were still sinners, Christ died for us.'",
      "Explain the response: Romans 10:9 -- 'If you declare with your mouth, Jesus is Lord...'",
      "Confirm the promise: Romans 10:13 -- 'Everyone who calls on the name of the Lord will be saved.'",
      "Ask: 'Does this make sense? Is there anything stopping you from making this decision today?'"
    ],
    verse: "Romans 10:9-10",
    goodFor: "Scripture-based conversations, people who respect the Bible, structured thinkers",
    example: "Aisha shared this with her neighbor after they talked about death and what happens after. Walking through the verses together, her neighbor said, 'This is the first time the Gospel has ever felt logical to me.'"
  },
  {
    id: "four-spiritual-laws",
    name: "The Four Spiritual Laws",
    icon: "📋",
    description: "Developed by Bill Bright of Campus Crusade for Christ, this presents four principles that frame humanity's relationship with God.",
    color: "#6B4FBB",
    steps: [
      "Law 1: God loves you and has a wonderful plan for your life. (John 3:16, John 10:10)",
      "Law 2: Man is sinful and separated from God -- he cannot know or experience God's love. (Romans 3:23, Romans 6:23)",
      "Law 3: Jesus Christ is God's only provision for man's sin. Through him you can know and experience God's love. (Romans 5:8, 1 Corinthians 15:3-6, John 14:6)",
      "Law 4: We must individually receive Jesus as Savior and Lord. (John 1:12, Ephesians 2:8-9, John 3:1-8)",
      "Present the two circles: self on the throne vs. Christ on the throne.",
      "Ask: 'Which circle best describes your life?' and 'Which circle would you like it to describe?'",
      "Invite them to pray -- read a suggested prayer together if they're willing."
    ],
    verse: "John 3:16",
    goodFor: "Structured and methodical presentations, college campus outreach, follow-up conversations",
    example: "Pastor James uses this at the end of every one-on-one conversation. The 'two circles' diagram consistently prompts people to name exactly where they feel stuck -- and opens the door to genuine response."
  },
  {
    id: "story",
    name: "Your Personal Testimony",
    icon: "💬",
    description: "Sharing your own before/after story -- what life was like before Christ, how you came to faith, what changed. Every believer has this weapon.",
    color: "#F59E0B",
    steps: [
      "BEFORE: What was your life like before Christ? What were you searching for, struggling with, or missing?",
      "ENCOUNTER: How did you come to faith? Who told you? What was the turning point?",
      "AFTER: What changed? How is your life different now -- not perfectly, but genuinely?",
      "Keep it to 3-5 minutes -- brevity is a gift to your listener.",
      "Connect their situation: 'Does anything about my story resonate with where you are?'",
      "Transition: 'Has anyone ever explained how you can have that kind of relationship with God?'",
      "Practice your testimony aloud until it feels natural -- not scripted, but fluid."
    ],
    verse: "Acts 26:2-23",
    goodFor: "Any conversation, especially with people who are skeptical of religion but open to genuine human experience",
    example: "Maria was nervous to share with her older sister -- they'd both grown up in the same household. But she simply said, 'I used to feel completely alone even when surrounded by people. That changed.' Her sister asked, 'When did it change?'"
  },
  {
    id: "questions",
    name: "Asking Good Questions",
    icon: "❓",
    description: "Pioneered by Greg Koukl (Tactics), this approach uses thoughtful questions to create space for the Gospel without pressure or argument.",
    color: "#EC4899",
    steps: [
      "Question 1 -- Understand their view: 'What do you mean by that?' (Avoid arguing with a misunderstood position.)",
      "Question 2 -- Probe their basis: 'How did you come to that conclusion?' or 'What makes you think that's true?'",
      "Question 3 -- Introduce tension: 'Have you ever considered that...?' followed by a gentle challenge.",
      "The Columbo method: ask questions rather than making declarations -- you become a curious learner, not a debater.",
      "If they ask your view: share it briefly and clearly, without aggression.",
      "Plant seeds, don't force harvest: 'That's worth thinking about -- I'd love to hear what you conclude.'",
      "Follow up: 'Can I send you something about this?'"
    ],
    verse: "Colossians 4:5-6",
    goodFor: "Skeptics, intellectual conversations, hostile or defensive people, long-term relationships",
    example: "David's atheist roommate was surprised when David asked, 'What would change your mind about God?' -- not to trap him, but out of genuine curiosity. The question started a year-long conversation that eventually led to faith."
  },
  {
    id: "needs",
    name: "Meeting Felt Needs",
    icon: "🤝",
    description: "Jesus almost always began with a person's immediate need -- physical, emotional, or social -- before moving to spiritual invitation. This is the pattern of incarnational evangelism.",
    color: "#10B981",
    steps: [
      "Listen deeply: What is the person's pressing concern, pain, or longing?",
      "Address the need genuinely -- not as a trick to get to the Gospel, but because Jesus cares about the whole person.",
      "Look for natural bridges: grief to resurrection hope; loneliness to community in Christ; guilt to forgiveness; meaninglessness to purpose.",
      "Share how your faith meets that need in your own life: 'When I was in that same place, I found that...'",
      "Offer to pray with them -- prayer is both practical and a gentle Gospel declaration.",
      "Invite them to explore: 'There's a community of people who would love to walk with you -- would you ever want to come?'",
      "Don't rush the harvest. Trust that meeting real needs with real love is itself a powerful witness."
    ],
    verse: "Matthew 9:35-36",
    goodFor: "Relationships over time, serving contexts (food banks, hospitals, disasters), people in crisis",
    example: "Kim spent three months helping her grieving colleague with childcare, meals, and just presence. When her colleague finally asked, 'Why do you keep doing this?' -- the door to the Gospel opened naturally."
  }
];

const conversationTips: ConversationTip[] = [
  {
    scenario: "They say: 'I'm not religious.'",
    icon: "🙅",
    tips: [
      "Don't argue or debate -- 'I understand. I'm not really religious either in that sense.' (Jesus critiqued religious performance too.)",
      "Ask: 'What do you think of Jesus specifically -- separate from organized religion?'",
      "Share that Christianity is about a relationship, not a religious system."
    ],
    avoid: "Don't immediately defend the Church or religion -- that's a sidetrack."
  },
  {
    scenario: "They say: 'I believe in science, not God.'",
    icon: "🔬",
    tips: [
      "Validate their love of science -- you share it. 'Me too. Many of the best scientists have been Christians.'",
      "Point to the fine-tuning argument or the origin of the universe -- science raises the God question, it doesn't answer it.",
      "Name Francis Collins, John Polkinghorne, Roger Penrose -- serious scientists who are theists."
    ],
    avoid: "Don't imply science and faith are at war -- the question of God is beyond science's scope, not contradicted by it."
  },
  {
    scenario: "They say: 'There's so much evil in the world.'",
    icon: "😔",
    tips: [
      "Don't rush to answer the problem of evil intellectually -- first, agree. 'You're right, and it bothers me too.'",
      "Ask: 'Where does your sense that the evil is really wrong come from?' (This is the moral argument).",
      "Share that Christianity enters suffering -- God became flesh and suffered. He's not distant from pain."
    ],
    avoid: "Don't say 'God has a plan' immediately -- it can feel dismissive of real pain."
  },
  {
    scenario: "They say: 'I used to be a Christian.'",
    icon: "🔄",
    tips: [
      "Listen first -- what happened? Hurt? Doubt? Hypocrisy they witnessed?",
      "Validate the experience: 'That sounds really painful/confusing. I'm sorry.'",
      "Distinguish between the church's failures and Jesus himself -- 'What do you think of Jesus now, separate from that experience?'"
    ],
    avoid: "Don't immediately try to re-convert them or argue against their past experience."
  }
];

const fears = [
  { fear: "What if I say something wrong?", answer: "Your role is to plant seeds, not to convert. Only God changes hearts. You can't mess up a divine appointment by being imperfect." },
  { fear: "What if they ask a question I can't answer?", answer: "Say 'I don't know -- that's a great question. Can I look into it and get back to you?' Honesty is more persuasive than false confidence." },
  { fear: "I don't want to ruin the relationship.", answer: "Sharing what you genuinely believe is loving, not damaging. If you were dying of cancer and your friend found a cure, sharing it would be loving, not rude." },
  { fear: "I'm not a good enough Christian to share.", answer: "The Gospel is 'I found something I needed too' -- not 'I've arrived.' Your weakness is actually more relatable than perfection." },
  { fear: "I don't know the Bible well enough.", answer: "You need one verse (Romans 3:23), one truth (Jesus died for sin), and one story (your own). That's it. Start there." },
];

const EVANG_STORIES: Story[] = [
  {
    id: "dalia",
    name: "Dalia",
    country: "Egypt",
    flag: "🇪🇬",
    method: "Friendship Evangelism",
    story: "Dalia grew up in Cairo in a devout Muslim family. A Christian colleague named Sara never argued theology with her -- she simply lived faithfully and loved her well over two years. When Dalia&rsquo;s mother fell gravely ill, Sara sat with the family for three nights in the hospital. Dalia asked: &ldquo;Why do you love like this?&rdquo; Sara opened her Bible to John 15. Dalia came to faith six weeks later, and within a year her husband and two siblings had followed.",
    verse: "John 13:35"
  },
  {
    id: "marcus",
    name: "Marcus",
    country: "USA",
    flag: "🇺🇸",
    method: "Alpha Course",
    story: "Marcus spent fifteen years as a committed atheist and considered himself intellectually beyond religion. A colleague invited him to Alpha, and he went to refute it. The first night he expected easy targets &mdash; instead he found honest people asking hard questions. Over ten weeks the intellectual objections he had stockpiled began to feel insufficient. &ldquo;I realized I had never actually read the resurrection evidence,&rdquo; he said later. &ldquo;I had been dismissing something I hadn&rsquo;t examined.&rdquo; He came to faith at week eight.",
    verse: "Acts 17:11"
  },
  {
    id: "priya",
    name: "Priya",
    country: "India",
    flag: "🇮🇳",
    method: "Quiet Faithfulness",
    story: "Priya worked in a textile factory in Tamil Nadu alongside a Christian woman named Ruth who never preached at her. Over three years Ruth simply worked faithfully, forgave quickly when wronged, and shared food during hard weeks. After a devastating flood destroyed Priya&rsquo;s home, Ruth&rsquo;s church showed up with supplies and labor. &ldquo;I had to ask why,&rdquo; Priya said. The answer changed everything. She was baptized on Easter Sunday with her two daughters.",
    verse: "1 Peter 3:1-2"
  },
  {
    id: "chen",
    name: "Chen",
    country: "China",
    flag: "🇨🇳",
    method: "Underground Church Witness",
    story: "Chen joined an underground house church in Shenzhen after a factory accident left him with months of recovery. The church&rsquo;s care during his convalescence was unlike anything he had experienced &mdash; a community that treated strangers as family. He came to faith, and despite the risks of public witness, spent the next four years quietly sharing the Gospel with factory workers on his shift. Fourteen of them came to faith and formed a new house church meeting in rotating apartments.",
    verse: "Matthew 5:14-16"
  },
  {
    id: "james",
    name: "James",
    country: "UK",
    flag: "🇬🇧",
    method: "Crusade Evangelism",
    story: "James was a twenty-three-year-old electrician in London when a workmate dragged him to Harringay Arena in 1954 to hear Billy Graham. He went unwillingly and sat near the back. Graham preached from John 3, and James later said he felt as if the sermon had been written for him personally. When the invitation came he walked forward &mdash; one of more than 36,000 decisions recorded during that London crusade. He led his wife and three children to faith over the following decade and served as a church elder for forty years.",
    verse: "John 3:16"
  },
];

interface TrainingModule {
  id: string;
  title: string;
  icon: string;
  duration: string;
  description: string;
  steps: string[];
  scripture: string;
}

const EVANG_TRAINING: TrainingModule[] = [
  {
    id: "testimony",
    title: "Your Personal Testimony",
    icon: "🎤",
    duration: "20 min",
    description: "Every believer has one irreplaceable evangelistic tool: the story of their own transformation. This module teaches you to tell that story clearly, briefly, and compellingly in three minutes or less.",
    steps: [
      "Write out your life before Christ in three sentences: what you were looking for, what was missing, what you were trusting instead of God.",
      "Describe your moment of encounter or turning point -- as specifically as possible. Where were you? What did you hear or read? Who was there?",
      "Write three concrete ways your life is different now -- not perfect, but genuinely changed.",
      "Practice delivering it in three minutes. Record yourself. Edit ruthlessly. The goal is natural, not polished.",
      "End with a bridge question: 'Has anyone ever shared with you how you can have that kind of relationship with God?'",
    ],
    scripture: "Acts 26:2-23 -- Paul's testimony before Agrippa is the model: before/encounter/after, personal and specific.",
  },
  {
    id: "gospel-five",
    title: "The Gospel in 5 Minutes",
    icon: "✝️",
    duration: "30 min",
    description: "Knowing the core of the Gospel so thoroughly that you can share it clearly, warmly, and accurately in five minutes or less -- without fumbling for words or losing the thread.",
    steps: [
      "Memorize the four movements: God's design (creation and dignity), humanity's problem (sin and separation), God's solution (Christ's death and resurrection), the required response (repentance and faith).",
      "Practice each movement in one sentence. Combine them into a flowing two-minute summary.",
      "Identify one verse for each movement that you know cold. Romans 3:23, Romans 6:23, Romans 5:8, Romans 10:9.",
      "Practice with a friend who plays the role of a curious non-Christian. Time yourself. Aim for natural conversation, not recitation.",
    ],
    scripture: "1 Corinthians 15:3-4 -- 'For what I received I passed on to you as of first importance: that Christ died for our sins...that he was raised on the third day.'",
  },
  {
    id: "objections",
    title: "Answering Common Objections",
    icon: "🛡️",
    duration: "45 min",
    description: "The questions and objections you will actually face -- and how to respond with honesty, humility, and clarity rather than defensiveness or dodging.",
    steps: [
      "Objection: 'What about hypocrites in the church?' Response: agree the church fails, distinguish Jesus from his followers, and redirect to Christ himself.",
      "Objection: 'All roads lead to God.' Response: ask what they mean -- then ask what Jesus meant by 'I am the way.' The question is not which religion is nicest, but which one is true.",
      "Objection: 'I'm basically a good person.' Response: agree -- and ask whether they're good enough. The standard isn't other people; it's the holiness of God.",
      "Objection: 'The Bible is full of contradictions.' Response: ask which one. Most people have never read it. Engage the specific claim, not the general assertion.",
      "For every objection: listen fully before responding, acknowledge what's reasonable in the objection, and answer with a question before a declaration.",
    ],
    scripture: "1 Peter 3:15 -- 'Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect.'",
  },
  {
    id: "prayer-evang",
    title: "Prayer Evangelism",
    icon: "🙏",
    duration: "30 min",
    description: "The most underused tool in evangelism is prayer -- specifically, praying for named individuals before, during, and after conversations about faith.",
    steps: [
      "Write down the names of five people in your life who do not yet know Christ. Pray for each by name every day for thirty days.",
      "Ask God specifically: open their hearts, remove the obstacles that are keeping them from faith, bring the right person or experience into their life.",
      "Before any spiritual conversation, pray briefly: 'Lord, give me words and give them ears.'",
      "Offer to pray for people in their immediate need -- even non-Christians are often willing to be prayed for during hardship. Prayer itself is a Gospel declaration.",
    ],
    scripture: "Colossians 4:2-4 -- 'Devote yourselves to prayer...And pray for us, too, that God may open a door for our message.'",
  },
  {
    id: "followup",
    title: "Following Up New Believers",
    icon: "🌱",
    duration: "45 min",
    description: "The decision is the beginning, not the end. How you follow up in the first thirty days of a new believer's faith shapes whether they take root and grow.",
    steps: [
      "Within 24 hours: celebrate with them. Call or meet. This moment matters to them and should matter to you.",
      "Give them a Bible and mark three passages to read first: John 1, Romans 8, and Psalm 23. Explain why each one matters.",
      "Meet with them weekly for at least four weeks. Go through basic discipleship: prayer, reading scripture, confession, community.",
      "Connect them to a local church before week two -- not as a program but as a family that will surround them.",
      "Normalize doubt and struggle: 'New faith is often fragile. Hard questions will come. That is normal and not a sign you were wrong.'",
    ],
    scripture: "1 Thessalonians 2:11-12 -- 'We dealt with each of you as a father deals with his own children, encouraging, comforting and urging you to live lives worthy of God.'",
  },
];

interface EvangelismVideo {
  id: string;
  title: string;
  preacher: string;
  description: string;
  videoId: string;
  duration: string;
}

const EVANG_VIDEOS: EvangelismVideo[] = [
  {
    id: "graham-born-again",
    title: "How to Be Born Again",
    preacher: "Billy Graham",
    description: "The classic Graham crusade message explaining the new birth from John 3 &mdash; the sermon that has been delivered to more people in person than any other in history.",
    videoId: "RUhJVEWBe4g",
    duration: "~30 min",
  },
  {
    id: "washer-shocking-youth",
    title: "Shocking Youth Message",
    preacher: "Paul Washer",
    description: "A confrontational call to examine whether one truly knows Christ &mdash; delivered to 5,000 youth and still one of the most-watched Gospel sermons online.",
    videoId: "uuabITeO4l8",
    duration: "~55 min",
  },
  {
    id: "platt-radical",
    title: "Passion 2011: Radical",
    preacher: "David Platt",
    description: "Platt challenges believers to a costly, global, Gospel-centered life &mdash; the sermon that sparked the &ldquo;Radical&rdquo; movement in American evangelicalism.",
    videoId: "yhiHSf_L6_E",
    duration: "~45 min",
  },
  {
    id: "keller-younger-brother",
    title: "The Prodigal God: The Younger Brother",
    preacher: "Tim Keller",
    description: "Keller unpacks what the younger son represents and how Jesus redefines what it means to be lost &mdash; and what it means to come home.",
    videoId: "KEYcvBTKVVM",
    duration: "~40 min",
  },
  {
    id: "piper-dont-waste",
    title: "Don&rsquo;t Waste Your Life",
    preacher: "John Piper",
    description: "The famous Passion message calling a generation to live for eternal things rather than comfort, safety, and accumulation &mdash; one of the defining evangelical sermons of the 2000s.",
    videoId: "JHdB1dYAteA",
    duration: "~50 min",
  },
  {
    id: "baucham-supremacy-truth",
    title: "The Supremacy of Christ and Truth",
    preacher: "Voddie Baucham",
    description: "Baucham makes the case for Christ in a postmodern world &mdash; arguing that Christianity alone provides the foundation for truth, logic, and human dignity.",
    videoId: "by8ykv7-A3c",
    duration: "~50 min",
  },
];

export default function EvangelismPage() {
  const [activeTab, setActiveTab] = useState<Tab>("methods");
  const [expandedMethod, setExpandedMethod] = useState<string | null>(null);
  const [expandedFear, setExpandedFear] = useState<number | null>(null);
  const [innerMethodTab, setInnerMethodTab] = useState<"methods" | "conversations" | "fears">("methods");
  const [practicedMethods, setPracticedMethods] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_evangelism_practiced"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [savedMethods, setSavedMethods] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_evangelism_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  useEffect(() => {
    try { localStorage.setItem("vine_evangelism_practiced", JSON.stringify([...practicedMethods])); } catch {}
  }, [practicedMethods]);
  useEffect(() => {
    try { localStorage.setItem("vine_evangelism_saved", JSON.stringify([...savedMethods])); } catch {}
  }, [savedMethods]);

  const togglePracticed = (id: string) => setPracticedMethods(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const toggleSaved = (id: string) => setSavedMethods(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "inherit" }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 16px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(58,125,86,0.1)", border: "1px solid rgba(58,125,86,0.25)", borderRadius: 20, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ fontSize: 16 }}>🌱</span>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: GREEN, textTransform: "uppercase" }}>Evangelism</span>
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16, lineHeight: 1.1 }}>
            Sharing Your Faith{" "}
            <span style={{ background: `linear-gradient(135deg, ${GREEN}, #3B82F6)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Naturally
            </span>
          </h1>
          <p style={{ color: MUTED, fontSize: 17, marginBottom: 20, maxWidth: 560, margin: "0 auto 20px" }}>
            Every believer is called to share good news &mdash; not by arguing people into the Kingdom, but by loving them there. Practical methods, real conversations, and stories from around the world.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, maxWidth: 500, margin: "0 auto" }}>
            {[
              { v: practicedMethods.size, label: "Methods Practiced", color: GREEN },
              { v: savedMethods.size, label: "Saved", color: PURPLE },
              { v: methods.length, label: "Total Methods", color: "#3B82F6" },
            ].map(s => (
              <div key={s.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "12px 8px", textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: s.color }}>{s.v}</div>
                <div style={{ fontSize: 11, color: MUTED }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main 4-tab navigation */}
        <div style={{ display: "flex", gap: 6, marginBottom: 28, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 6 }}>
          {(["methods", "stories", "training", "videos"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ flex: 1, background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "background 0.2s" }}>
              {t === "methods" ? "Methods" : t === "stories" ? "Stories" : t === "training" ? "Training" : "Videos"}
            </button>
          ))}
        </div>

        {/* METHODS TAB */}
        {activeTab === "methods" && (
          <div>
            {/* Inner sub-tabs for methods section */}
            <div style={{ display: "flex", gap: 8, marginBottom: 24, borderBottom: `1px solid ${BORDER}` }}>
              {[
                { id: "methods", label: "🛠️ Methods" },
                { id: "conversations", label: "💬 Conversations" },
                { id: "fears", label: "😰 Common Fears" },
              ].map(t => (
                <button key={t.id} onClick={() => setInnerMethodTab(t.id as typeof innerMethodTab)}
                  style={{ padding: "10px 18px", borderRadius: "10px 10px 0 0", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13, background: innerMethodTab === t.id ? CARD : "transparent", color: innerMethodTab === t.id ? TEXT : MUTED, borderBottom: innerMethodTab === t.id ? `2px solid ${GREEN}` : "2px solid transparent" }}>
                  {t.label}
                </button>
              ))}
            </div>

            {innerMethodTab === "methods" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {methods.map(m => {
                  const isExp = expandedMethod === m.id;
                  return (
                    <div key={m.id} style={{ background: CARD, border: `1px solid ${isExp ? m.color + "40" : BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                      <div style={{ padding: "20px 24px" }}>
                        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                          <div style={{ display: "flex", gap: 14, flex: 1 }}>
                            <span style={{ fontSize: 28, flexShrink: 0 }}>{m.icon}</span>
                            <div style={{ flex: 1 }}>
                              <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6, flexWrap: "wrap" }}>
                                <h3 style={{ fontSize: 17, fontWeight: 800, margin: 0, color: TEXT }}>{m.name}</h3>
                                {practicedMethods.has(m.id) && <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: "rgba(58,125,86,0.1)", color: GREEN, fontWeight: 700 }}>✓ Practiced</span>}
                              </div>
                              <p style={{ fontSize: 14, color: MUTED, margin: 0, lineHeight: 1.6 }}>{m.description}</p>
                            </div>
                          </div>
                          <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                            <button onClick={() => toggleSaved(m.id)}
                              style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid ${savedMethods.has(m.id) ? PURPLE : BORDER}`, background: savedMethods.has(m.id) ? "rgba(107,79,187,0.15)" : "transparent", cursor: "pointer", fontSize: 14, color: savedMethods.has(m.id) ? PURPLE : MUTED }}>
                              {savedMethods.has(m.id) ? "🔖" : "📌"}
                            </button>
                            <button onClick={() => setExpandedMethod(isExp ? null : m.id)}
                              style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${m.color}40`, background: `${m.color}10`, color: m.color, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                              {isExp ? "Close" : "Learn"}
                            </button>
                          </div>
                        </div>
                      </div>

                      {isExp && (
                        <div style={{ borderTop: `1px solid ${BORDER}`, padding: "24px" }}>
                          <h4 style={{ fontSize: 13, fontWeight: 800, color: m.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>Step-by-Step Guide</h4>
                          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                            {m.steps.map((step, i) => (
                              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                                <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${m.color}20`, border: `1px solid ${m.color}40`, color: m.color, fontSize: 12, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                                <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, margin: 0 }}>{step}</p>
                              </div>
                            ))}
                          </div>

                          <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 10, padding: "14px 16px", marginBottom: 16 }}>
                            <p style={{ fontSize: 12, fontWeight: 800, color: MUTED, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Best For</p>
                            <p style={{ fontSize: 13, color: "#C0C0D8", margin: 0 }}>{m.goodFor}</p>
                          </div>

                          <div style={{ background: "rgba(58,125,86,0.04)", borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${m.color}`, marginBottom: 20 }}>
                            <p style={{ fontSize: 12, fontWeight: 800, color: m.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Real Example</p>
                            <p style={{ fontSize: 13, color: "#B0D0B0", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{m.example}</p>
                          </div>

                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: "rgba(58,125,86,0.08)", color: GREEN, fontWeight: 600 }}>📖 {m.verse}</span>
                            <button onClick={() => togglePracticed(m.id)}
                              style={{ padding: "8px 18px", borderRadius: 10, border: `1px solid ${practicedMethods.has(m.id) ? GREEN : BORDER}`, background: practicedMethods.has(m.id) ? "rgba(58,125,86,0.1)" : "transparent", color: practicedMethods.has(m.id) ? GREEN : MUTED, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                              {practicedMethods.has(m.id) ? "✓ Practiced" : "Mark as Practiced"}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {innerMethodTab === "conversations" && (
              <div>
                <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>
                  Practical responses to the situations you&rsquo;ll actually face. Each scenario includes what to say, what to avoid, and how to keep the door open.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {conversationTips.map((tip, i) => (
                    <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "20px 24px" }}>
                      <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 16 }}>
                        <span style={{ fontSize: 24 }}>{tip.icon}</span>
                        <h3 style={{ fontSize: 16, fontWeight: 800, margin: 0, color: "#EF4444" }}>{tip.scenario}</h3>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                        {tip.tips.map((t, j) => (
                          <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                            <span style={{ color: GREEN, fontWeight: 900, fontSize: 14, flexShrink: 0, marginTop: 2 }}>✓</span>
                            <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.6, margin: 0 }}>{t}</p>
                          </div>
                        ))}
                      </div>
                      <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 10, padding: "12px 16px" }}>
                        <span style={{ fontSize: 12, fontWeight: 800, color: "#EF4444" }}>⚠ Avoid: </span>
                        <span style={{ fontSize: 13, color: "#D08080" }}>{tip.avoid}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 28, background: `linear-gradient(135deg, rgba(58,125,86,0.06), rgba(107,79,187,0.06))`, border: `1px solid rgba(58,125,86,0.2)`, borderRadius: 16, padding: "24px" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 12 }}>The 3-Minute Rule</h3>
                  <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, marginBottom: 0 }}>
                    In any spiritual conversation, spend the first 3 minutes listening before you say anything about your faith. Ask one genuine question about them. People need to feel heard before they can hear &mdash; and a person who feels genuinely understood is ten times more likely to stay in the conversation.
                  </p>
                </div>
              </div>
            )}

            {innerMethodTab === "fears" && (
              <div>
                <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>
                  Every believer has fears about sharing their faith. These are the most common ones &mdash; and why they don&rsquo;t have to stop you.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {fears.map((f, i) => (
                    <div key={i} style={{ background: CARD, border: `1px solid ${expandedFear === i ? GREEN + "40" : BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                      <button onClick={() => setExpandedFear(expandedFear === i ? null : i)}
                        style={{ width: "100%", textAlign: "left", padding: "18px 24px", background: "transparent", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                          <span style={{ fontSize: 20 }}>😰</span>
                          <span style={{ fontSize: 15, fontWeight: 700, color: TEXT }}>{f.fear}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{expandedFear === i ? "▾" : "▸"}</span>
                      </button>
                      {expandedFear === i && (
                        <div style={{ padding: "0 24px 20px", borderTop: `1px solid ${BORDER}`, paddingTop: 16 }}>
                          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                            <span style={{ color: GREEN, fontWeight: 900, fontSize: 18, flexShrink: 0 }}>→</span>
                            <p style={{ fontSize: 15, color: "#B0F0C0", lineHeight: 1.8, margin: 0 }}>{f.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 32, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "28px 24px", textAlign: "center" }}>
                  <p style={{ fontSize: 28, marginBottom: 12 }}>🙏</p>
                  <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>Begin with Prayer</h3>
                  <p style={{ fontSize: 14, color: MUTED, maxWidth: 400, margin: "0 auto 16px", lineHeight: 1.7 }}>
                    The most powerful preparation for sharing your faith is praying for the specific people in your life. Write their names in your prayer journal and ask God to open doors.
                  </p>
                  <a href="/prayer-journal" style={{ display: "inline-block", padding: "12px 24px", borderRadius: 12, background: `linear-gradient(135deg, ${PURPLE}, ${GREEN})`, color: BG, fontWeight: 800, fontSize: 13, textDecoration: "none" }}>
                    Open Prayer Journal →
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* STORIES TAB */}
        {activeTab === "stories" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>Stories of Faith</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7 }}>
                Real people, real conversions &mdash; from five continents and five different methods. These are not composites. They are the kind of stories the New Testament says God keeps writing.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 20 }}>
              {EVANG_STORIES.map(s => (
                <div key={s.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 22, cursor: "pointer", transition: "border-color 0.2s" }}
                  onClick={() => setSelectedStory(s)}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = GREEN}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = BORDER}>
                  <div style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "center" }}>
                    <div style={{ width: 46, height: 46, borderRadius: "50%", background: `linear-gradient(135deg, ${PURPLE}, ${GREEN})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 900, color: BG, flexShrink: 0 }}>{s.name[0]}</div>
                    <div>
                      <h3 style={{ fontSize: 17, fontWeight: 800, margin: 0 }}>{s.name}</h3>
                      <p style={{ fontSize: 13, color: MUTED, margin: "3px 0 0" }}>{s.flag} {s.country}</p>
                    </div>
                  </div>
                  <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.25)", fontWeight: 700, display: "inline-block", marginBottom: 12 }}>{s.method}</span>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.65, marginBottom: 12 }}
                    dangerouslySetInnerHTML={{ __html: s.story.slice(0, 120) + "..." }} />
                  <span style={{ fontSize: 12, color: GREEN, fontWeight: 600 }}>📖 {s.verse}</span>
                </div>
              ))}
            </div>

            {selectedStory && (
              <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
                onClick={() => setSelectedStory(null)}>
                <div style={{ background: CARD, border: `1px solid rgba(58,125,86,0.3)`, borderRadius: 20, padding: "32px", maxWidth: 560, width: "100%", maxHeight: "90vh", overflowY: "auto" }}
                  onClick={e => e.stopPropagation()}>
                  <div style={{ display: "flex", gap: 12, marginBottom: 20, alignItems: "center" }}>
                    <div style={{ width: 52, height: 52, borderRadius: "50%", background: `linear-gradient(135deg, ${PURPLE}, ${GREEN})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 900, color: BG }}>{selectedStory.name[0]}</div>
                    <div>
                      <h2 style={{ fontSize: 20, fontWeight: 900, margin: 0 }}>{selectedStory.name}</h2>
                      <p style={{ fontSize: 13, color: MUTED, margin: "4px 0 0" }}>{selectedStory.flag} {selectedStory.country} &middot; {selectedStory.method}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 20 }}
                    dangerouslySetInnerHTML={{ __html: selectedStory.story }} />
                  <div style={{ background: "rgba(58,125,86,0.06)", border: "1px solid rgba(58,125,86,0.2)", borderRadius: 10, padding: "12px 16px", marginBottom: 20 }}>
                    <span style={{ fontSize: 13, color: GREEN, fontWeight: 700 }}>📖 {selectedStory.verse}</span>
                  </div>
                  <button onClick={() => setSelectedStory(null)}
                    style={{ width: "100%", padding: "12px", borderRadius: 12, border: "none", background: "rgba(255,255,255,0.08)", color: MUTED, cursor: "pointer", fontSize: 14, fontWeight: 700 }}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TRAINING TAB */}
        {activeTab === "training" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>Evangelism Training</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7 }}>
                Five practical training modules &mdash; each one a skill you can develop with an hour of focused effort. Not theory: actionable steps, anchor scriptures, and real practice.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {EVANG_TRAINING.map((mod, idx) => (
                <div key={mod.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                    <span style={{ fontSize: 30 }}>{mod.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 4 }}>
                        <h3 style={{ fontSize: 19, fontWeight: 800, color: TEXT, margin: 0 }}>{mod.title}</h3>
                        <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "rgba(58,125,86,0.1)", color: GREEN, border: "1px solid rgba(58,125,86,0.25)", fontWeight: 700 }}>{mod.duration}</span>
                      </div>
                    </div>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(107,79,187,0.2)", border: "1px solid rgba(107,79,187,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 900, color: "#A080FF", flexShrink: 0 }}>{idx + 1}</div>
                  </div>
                  <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, marginBottom: 20 }}>{mod.description}</p>

                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: GREEN, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Steps</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {mod.steps.map((step, i) => (
                        <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(58,125,86,0.1)", border: "1px solid rgba(58,125,86,0.25)", color: GREEN, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                          <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, margin: 0 }}>{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ background: "#0D0D1A", borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${PURPLE}` }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#A080FF", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Anchor Verse</div>
                    <p style={{ fontSize: 13, color: "#C0C0D8", lineHeight: 1.65, margin: 0 }}>{mod.scripture}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIDEOS TAB */}
        {activeTab === "videos" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>Evangelism Sermons &amp; Teaching</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 6 }}>
                Six essential sermons on the Gospel, evangelism, and the Christian life &mdash; from preachers who have shaped how millions understand what it means to share their faith.
              </p>
              <p style={{ color: "#6A6A88", fontSize: 13 }}>
                Opens embedded &mdash; may require YouTube in the browser.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: 24 }}>
              {EVANG_VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                  <div style={{ padding: "18px 20px 14px", borderBottom: `1px solid ${BORDER}` }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: "rgba(107,79,187,0.2)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.3)" }}>
                        {v.preacher}
                      </span>
                      <span style={{ fontSize: 11, color: "#6A6A88" }}>{v.duration}</span>
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 800, color: TEXT, marginBottom: 8, lineHeight: 1.3 }}
                      dangerouslySetInnerHTML={{ __html: v.title }} />
                    <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.65, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: v.description }} />
                  </div>
                  <div style={{ padding: 16 }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", borderRadius: 8 }}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
      <Footer />
    </div>
  );
}
