import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReplyBox from "@/components/ReplyBox";
import { ArrowLeft, MessageSquare, ChevronUp, Share2, Bookmark, Flag, ChevronRight } from "lucide-react";

const threads: Record<string, {
  title: string; body: string; hub: string; hubColor: string;
  author: string; avatar: string; avatarColor: string; flag: string;
  upvotes: number; date: string; pinned?: boolean;
  replies: Array<{
    author: string; avatar: string; avatarColor: string; flag: string;
    body: string; upvotes: number; date: string; isOp?: boolean;
    verse?: string; children?: Array<{
      author: string; avatar: string; avatarColor: string; flag: string;
      body: string; upvotes: number; date: string;
    }>;
  }>;
}> = {
  "faith-and-doubt-001": {
    title: "How do you handle doubt without losing faith?",
    body: "I've been a Christian for 15 years. Grew up in the church, led worship, went on mission trips. But the last six months have shaken me in ways I didn't expect. Not a specific crisis — just a slow accumulation of questions I can't answer as easily as I used to. I'm not leaving. But I'm struggling. How do others navigate seasons of doubt without it consuming them?",
    hub: "r/FaithAndDoubt",
    hubColor: "#6B4FBB",
    author: "Samuel Mwangi",
    avatar: "SM",
    avatarColor: "#3B82F6",
    flag: "🇰🇪",
    upvotes: 2103,
    date: "May 21, 2026",
    replies: [
      {
        author: "Lydia Böhm",
        avatar: "LB",
        avatarColor: "#6B4FBB",
        flag: "🇩🇪",
        body: "I left for four years. Came back. The doubt didn't disappear — it transformed. What changed was I stopped expecting my faith to feel certain and started expecting it to be tested. C.S. Lewis said faith is the art of holding on to what your reason once accepted in spite of your changing moods. That reframe helped me enormously.",
        upvotes: 847,
        date: "May 21, 2026",
        verse: "Hebrews 11:1",
        children: [
          {
            author: "Ji-Woo Park",
            avatar: "JP",
            avatarColor: "#EC4899",
            flag: "🇰🇷",
            body: "This. The assumption that mature faith means certainty is actually not biblical. Thomas doubted. John the Baptist doubted from prison. David's psalms are full of lament and confusion. Doubt can be the beginning of deeper faith, not the end of faith.",
            upvotes: 412,
            date: "May 21, 2026",
          },
        ],
      },
      {
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "As a pastor I'll say something you might not expect: doubt is not the enemy of faith. Certainty without examination is. The faith that survives a real crisis of doubt is far more robust than the faith that was never tested. Keep asking the questions. Don't run from them. Run toward them, but run toward them with Scripture, community, and honest theologians — not just online comment sections.",
        upvotes: 1204,
        date: "May 22, 2026",
        children: [
          {
            author: "Samuel Mwangi",
            avatar: "SM",
            avatarColor: "#3B82F6",
            flag: "🇰🇪",
            body: "Thank you for this. The idea that I should run toward the questions rather than away from them is actually something I haven't fully tried. I've been trying to suppress the questions, which might be why they feel so loud.",
            upvotes: 203,
            date: "May 22, 2026",
          },
        ],
      },
      {
        author: "Amara Osei",
        avatar: "AO",
        avatarColor: "#00FF88",
        flag: "🇬🇭",
        isOp: false,
        body: "Practical suggestion: Find one honest, intellectually serious Christian to talk to about this in person. Not to resolve the doubt — just to not be alone in it. Isolation makes doubt feel much larger than it is. The book of Job is literally a long argument between Job and his friends. God shows up at the end not to explain everything but to be present. Sometimes that's enough.",
        upvotes: 634,
        date: "May 22, 2026",
        verse: "Job 38:1-4",
      },
      {
        author: "Dr. Priya Singh",
        avatar: "PS",
        avatarColor: "#6B4FBB",
        flag: "🇮🇳",
        body: "Alvin Plantinga's work on 'warranted Christian belief' was transformative for me. The idea that Christian belief can be rational — not just emotionally comforting but genuinely epistemically justified — gave me a new framework. If you haven't read him, start with 'Knowledge and Christian Belief' (the shorter version of his main work). It's rigorous but accessible.",
        upvotes: 291,
        date: "May 23, 2026",
      },
    ],
  },
  "free-will-omniscience-003": {
    title: "Does free will actually exist if God is omniscient? Looking for serious theological discussion.",
    body: "I'm a philosophy student and a committed Christian, and this question is genuinely keeping me up at night. If God knew before creation every choice I would ever make, in what sense am I actually making free choices? I've read Calvin, Arminius, and Molinism — but I'd love to hear how everyday Christians think through this.",
    hub: "r/Theology&Doctrine",
    hubColor: "#6B4FBB",
    author: "Thomas Nakamura",
    avatar: "TN",
    avatarColor: "#4F8FBB",
    flag: "🇯🇵",
    upvotes: 847,
    date: "May 24, 2026",
    replies: [
      {
        author: "Dr. Priya Singh",
        avatar: "PS",
        avatarColor: "#6B4FBB",
        flag: "🇮🇳",
        body: "The Molinist answer is the one I find most philosophically satisfying, though it's not without critics. Luis de Molina proposed that God possesses 'middle knowledge' — knowledge of counterfactuals, of what any free creature would freely do in any circumstance. God doesn't cause your choices; he simply knows them with perfect certainty because he knows all possible worlds and which one he actualized. Your freedom is preserved because the knowledge is logically posterior to your choice, even if temporally prior to it. It's a subtle distinction but a real one.",
        upvotes: 623,
        date: "May 24, 2026",
        verse: "Romans 8:29",
        children: [],
      },
      {
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "The Arminian tradition would say that foreknowledge and predetermination are not the same thing. God knowing what you will choose is categorically different from God causing you to choose it. Think of it this way: if I watch a recording of a chess match and I know every move before the players make it, I haven't determined those moves — I've simply observed them out of sequence. God's eternal perspective allows him to 'observe' all of time simultaneously without that observation constituting control.",
        upvotes: 491,
        date: "May 24, 2026",
        children: [
          {
            author: "Thomas Nakamura",
            avatar: "TN",
            avatarColor: "#4F8FBB",
            flag: "🇯🇵",
            body: "That analogy actually helps — though I suspect a determined Calvinist would push back on the recording illustration since it assumes the recording was made from events that already happened freely. The circularity is the thing I keep tripping over. But I appreciate the frame. Going to sit with this.",
            upvotes: 87,
            date: "May 25, 2026",
          },
        ],
      },
      {
        author: "Lydia Böhm",
        avatar: "LB",
        avatarColor: "#6B4FBB",
        flag: "🇩🇪",
        body: "I came to peace with this through compatibilism — the view that free will and determinism are not actually in conflict. A choice is 'free' not because it is uncaused, but because it flows from your own desires, values, and reasoning without external coercion. God can ordain all things and you can still be genuinely, meaningfully free in the compatibilist sense. Philippians 2:13 is interesting here: 'for it is God who works in you to will and to act in order to fulfill his good purpose.' God working in us to will — and yet the willing is ours.",
        upvotes: 312,
        date: "May 25, 2026",
        verse: "Philippians 2:13",
        children: [],
      },
    ],
  },
  "depression-therapy-faith-005": {
    title: "After 3 years of depression and praying for healing, I finally got therapy — and it changed everything.",
    body: "I want to preface this: I love God. I have not stopped believing. But for three years I believed that if I just had enough faith, my depression would lift. My pastor said 'the joy of the Lord is your strength' as if it were a prescription. I was drowning and ashamed. Eight months ago I finally started seeing a Christian counselor. I want to share what happened.",
    hub: "r/MentalHealth&Faith",
    hubColor: "#00FF88",
    author: "Isabella Ferreira",
    avatar: "IF",
    avatarColor: "#EC4899",
    flag: "🇧🇷",
    upvotes: 2341,
    date: "May 22, 2026",
    replies: [
      {
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "As a pastor, I want to say clearly: I am sorry for what you experienced. Using 'the joy of the Lord is your strength' as a substitute for mental health care is a failure of pastoral responsibility, and I've seen it cause real harm. Psalm 34:18 says 'The Lord is close to the brokenhearted and saves those who are crushed in spirit' — he does not tell the crushed spirit to perform joy. Therapy is not a lack of faith. In many cases it is the wisest, most faithful use of the means God has given us. Thank you for sharing this.",
        upvotes: 1204,
        date: "May 22, 2026",
        verse: "Psalm 34:18",
        children: [],
      },
      {
        author: "Dr. Priya Singh",
        avatar: "PS",
        avatarColor: "#6B4FBB",
        flag: "🇮🇳",
        body: "The integration of faith and psychology is not a compromise — it's a recognition that humans are embodied, neurological beings whose spiritual lives interact with their biochemistry. Depression is not a spiritual failure any more than diabetes is. A Christian counselor who holds both the clinical and the theological with integrity can be extraordinarily effective precisely because they understand the whole person. I'm so glad you found that.",
        upvotes: 847,
        date: "May 22, 2026",
        children: [
          {
            author: "Isabella Ferreira",
            avatar: "IF",
            avatarColor: "#EC4899",
            flag: "🇧🇷",
            body: "Thank you for putting it that way. 'Depression is not a spiritual failure' — I needed to read that sentence maybe three hundred times. The shame was almost worse than the depression itself. Eight months later I feel like a different person. Not because the depression is completely gone — but because I have tools now, and a framework, and someone who takes both my brain and my faith seriously at the same time.",
            upvotes: 203,
            date: "May 23, 2026",
          },
        ],
      },
      {
        author: "Ji-Woo Park",
        avatar: "JP",
        avatarColor: "#EC4899",
        flag: "🇰🇷",
        body: "I went through something similar after a major life collapse at nineteen. For a long time I thought seeking help meant I didn't trust God enough. What changed for me was realizing that God is the one who created human beings with the capacity for psychology, neuroscience, and healing relationships. Using those things is not a rejection of him — it's moving through the world he made.",
        upvotes: 412,
        date: "May 23, 2026",
        children: [],
      },
    ],
  },
  "cancer-free-praise-005": {
    title: "UPDATE: I posted 6 months ago asking for prayer for my dad's stage 4 diagnosis — HE IS CANCER FREE.",
    body: "I am shaking as I type this. The doctors called it 'medically inexplicable.' Six months ago, 247 of you prayed with me in this thread. My father had stage 4 pancreatic cancer — the kind with a 3% survival rate. Three rounds of chemo, countless prayers, many tears. Yesterday his oncologist said the words I never thought I'd hear. I want every single one of you to know: the prayer worked. God heard us.",
    hub: "r/PraiseReports",
    hubColor: "#4F8FBB",
    author: "Maria Santos",
    avatar: "MS",
    avatarColor: "#F59E0B",
    flag: "🇵🇭",
    upvotes: 5621,
    date: "May 25, 2026",
    replies: [
      {
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "PRAISE GOD. This is exactly what Jeremiah 33:3 promises: 'Call to me and I will answer you and tell you great and unsearchable things you do not know.' The community prayed. God answered. I am in tears reading this and I do not apologize for that. All glory to God. Your father's life is a testimony. Bless you and your family, Maria.",
        upvotes: 2841,
        date: "May 25, 2026",
        verse: "Jeremiah 33:3",
        children: [],
      },
      {
        author: "Lydia Böhm",
        avatar: "LB",
        avatarColor: "#6B4FBB",
        flag: "🇩🇪",
        body: "Psalm 118:23 — 'The Lord has done this, and it is marvelous in our eyes.' I was one of the 247. I prayed for your father by name on a Tuesday morning in Berlin not knowing whether I would ever hear the outcome. I am overwhelmed. Thank you for coming back to tell us. This is what the body of Christ is supposed to be.",
        upvotes: 1987,
        date: "May 25, 2026",
        verse: "Psalm 118:23",
        children: [],
      },
      {
        author: "Amara Osei",
        avatar: "AO",
        avatarColor: "#00FF88",
        flag: "🇬🇭",
        body: "James 5:16 says 'The prayer of a righteous person is powerful and effective.' Two hundred and forty-seven righteous people went before God for a man they had never met. And God moved. I don't have adequate words. Just tears and thanksgiving. Hug your father tight tonight, Maria.",
        upvotes: 1643,
        date: "May 25, 2026",
        verse: "James 5:16",
        children: [],
      },
    ],
  },
  "christian-dating-apps-007": {
    title: "Dating as a Christian in 2026 is genuinely hard. Anyone else feel like the apps are working against you?",
    body: "I'm 27, committed to my faith, not looking to hook up, want to eventually find someone to build a life with centered on Christ. I've tried Hinge, Bumble, Christian Mingle, and even a small group matchmaking attempt at my church. The results have been... discouraging. I know I'm not alone in this. How are other Christians navigating this?",
    hub: "r/YoungAdults",
    hubColor: "#4FBBAA",
    author: "Amara Osei",
    avatar: "AO",
    avatarColor: "#00FF88",
    flag: "🇬🇭",
    upvotes: 789,
    date: "May 23, 2026",
    replies: [
      {
        author: "Ji-Woo Park",
        avatar: "JP",
        avatarColor: "#EC4899",
        flag: "🇰🇷",
        body: "Christian Mingle's filter system is the problem. It surfaces anyone who checks 'Christian' in their profile, which in practice means a vast spectrum of theological commitment, church involvement, and lifestyle values — all labeled the same. I matched with someone who hadn't been to church in six years and listed 'Christian' because he was baptized as a child. The label without the substance is almost worse than no label at all, because it creates false expectations. General apps with honest bio writing might actually yield better results if you're specific about what faith actually means in your daily life.",
        upvotes: 412,
        date: "May 23, 2026",
        children: [],
      },
      {
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "I'll say something pastorally that I believe sincerely: the most durable Christian marriages I've performed began in the context of shared service. Not a matchmaking event, not an app — but two people who were both showing up consistently to serve, lead, or contribute to something larger than themselves. You can't fake long-term service commitment. It reveals character more reliably than any dating profile. My practical advice: find somewhere to serve faithfully and let that be where you're known.",
        upvotes: 634,
        date: "May 24, 2026",
        verse: "Proverbs 31:30",
        children: [],
      },
      {
        author: "Thomas Nakamura",
        avatar: "TN",
        avatarColor: "#4F8FBB",
        flag: "🇯🇵",
        body: "Something that helped me: getting genuinely clear — not as a checklist but as a vision — on what kind of partnership I was actually seeking before trying to find a person. Not 'she must attend church X times per week' but 'what does a life of shared faith and shared sacrifice actually look like, and am I living toward that myself?' Once I could answer that honestly, I stopped feeling desperate in the search and started becoming someone worth finding. The search went better after that.",
        upvotes: 387,
        date: "May 24, 2026",
        children: [],
      },
    ],
  },
  "resurrection-evidence-002": {
    title: "What's the single strongest piece of historical evidence for the resurrection?",
    body: "I'm in a discussion with a skeptic friend and want to give the most honest, non-circular argument for the resurrection. Not Bible quotes — historical evidence. What do you think is the strongest single piece of evidence?",
    hub: "r/Apologetics",
    hubColor: "#3B82F6",
    author: "Ji-Woo Park",
    avatar: "JP",
    avatarColor: "#EC4899",
    flag: "🇰🇷",
    upvotes: 1847,
    date: "May 20, 2026",
    replies: [
      {
        author: "Dr. Priya Singh",
        avatar: "PS",
        avatarColor: "#6B4FBB",
        flag: "🇮🇳",
        body: "The conversion of Paul. He was an active persecutor of Christians who had every social, political, and personal reason NOT to convert. He reports seeing the risen Jesus. He then suffers beatings, imprisonment, and eventually execution for this claim. People die for beliefs they think are true — but rarely for beliefs they personally fabricated. The best skeptical response to this isn't great.",
        upvotes: 923,
        date: "May 20, 2026",
        verse: "Galatians 1:13-17",
        children: [],
      },
      {
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "The empty tomb plus the failure of Jewish authorities to produce the body. If the body was still in the tomb, the resurrection claim could have been definitively silenced with one simple act. Instead the authorities claimed the disciples stole it — which actually concedes the tomb was empty. Even they didn't deny that part.",
        upvotes: 741,
        date: "May 20, 2026",
        children: [],
      },
    ],
  },
  "deconstruction-faith-008": {
    title: "I've been deconstructing for 2 years. Has anyone come out the other side?",
    body: "Two years ago I started asking hard questions about faith. The purity culture I grew up in, the political Christianity I saw in my family, the unanswered prayers, the pastor scandals. I haven't left — but I barely recognize my faith anymore. Has anyone deconstructed and found something real on the other side, or does it just lead to nothing?",
    hub: "r/FaithAndDoubt",
    hubColor: "#6B4FBB",
    author: "Anonymous",
    avatar: "?",
    avatarColor: "#4A4A68",
    flag: "🇺🇸",
    upvotes: 3841,
    date: "May 18, 2026",
    replies: [
      {
        author: "Lydia Böhm",
        avatar: "LB",
        avatarColor: "#6B4FBB",
        flag: "🇩🇪",
        body: "Yes. Four years for me. I came out the other side with something smaller, quieter, and more honest — and to my surprise, more durable. I had to let go of the version of Christianity that was really just a system for feeling okay about myself. What I found underneath it was a Jesus I hadn't met before. Not the one from the culture war, but the one from the Sermon on the Mount. It was worth the pain to get there.",
        upvotes: 1204,
        date: "May 18, 2026",
        verse: "Matthew 5:1-12",
        children: [
          {
            author: "Ji-Woo Park",
            avatar: "JP",
            avatarColor: "#EC4899",
            flag: "🇰🇷",
            body: "This resonates so much. I think the version of faith that breaks during deconstruction often needs to break. The question is whether you're willing to let something new grow in its place or whether you just clear the land and walk away. Both are understandable. But the first option is available.",
            upvotes: 893,
            date: "May 18, 2026",
          },
        ],
      },
      {
        author: "Pastor Daniel Abara",
        avatar: "DA",
        avatarColor: "#10B981",
        flag: "🇳🇬",
        body: "I want to say something honest from a pastor's perspective: some of what people deconstruct deserves to be deconstructed. Not the core — not the resurrection, not the love of God — but the cultural accretions, the power dynamics, the prosperity gospel, the political capture of the church. If deconstructing that gets you to the genuine article, that's not loss, that's gain. The problem is when deconstruction becomes an identity rather than a process. At some point reconstruction has to begin.",
        upvotes: 2103,
        date: "May 19, 2026",
        children: [],
      },
      {
        author: "Amara Osei",
        avatar: "AO",
        avatarColor: "#00FF88",
        flag: "🇬🇭",
        body: "What helped me most was finding a community of people who were asking honest questions AND staying in the faith. Not people who had all the answers, but people who were willing to sit in the tension with me. That combination — honesty plus perseverance — was rarer than I expected but absolutely exists. Don't let the algorithm show you only the people who walked away.",
        upvotes: 1567,
        date: "May 19, 2026",
        verse: "Job 38:1",
        children: [],
      },
    ],
  },
  "tithing-biblical-or-cultural-010": {
    title: "Is tithing 10% still a biblical command for Christians, or is it Old Covenant?",
    body: "My pastor says tithing is mandatory. My friend says it was part of the Mosaic Law and doesn't apply to Christians. I've looked at the passages and I'm genuinely confused. Malachi 3:10 is Old Testament. Does the New Testament teach tithing or is it more of a principle? What does good scholarship say?",
    hub: "r/Theology",
    hubColor: "#3B82F6",
    author: "Michael Adebayo",
    avatar: "MA",
    avatarColor: "#3B82F6",
    flag: "🇿🇦",
    upvotes: 1847,
    date: "May 22, 2026",
    replies: [
      {
        author: "Dr. Sarah Whitfield",
        avatar: "SW",
        avatarColor: "#F59E0B",
        flag: "🇦🇺",
        body: "The tithe was a specific Mosaic institution — actually closer to a 23% total when you include all three tithes (Levitical tithe, festival tithe, poor tithe). The NT doesn't command a 10% standard. What it does teach extensively is radical, joyful, Spirit-led generosity — see 2 Corinthians 8-9. For many western Christians, 10% is actually *less* than Spirit-led giving might call for. For others in poverty, it can be oppressive. The principle matters more than the percentage.",
        upvotes: 934,
        date: "May 22, 2026",
        verse: "2 Corinthians 9:7",
        children: [
          {
            author: "Michael Adebayo",
            avatar: "MA",
            avatarColor: "#3B82F6",
            flag: "🇿🇦",
            body: "This is exactly the kind of answer I needed. The 23% figure is something I've never heard before. And the point about 10% being a floor for some and a ceiling for others — that reframes the whole thing for me.",
            upvotes: 312,
            date: "May 22, 2026",
          },
        ],
      },
      {
        author: "Rev. Charles Mwangi",
        avatar: "CM",
        avatarColor: "#6B4FBB",
        flag: "🇰🇪",
        body: "I've been a pastor for 20 years and I'll be honest: a lot of tithing teaching is financially motivated by church leadership. That doesn't mean giving isn't important — it absolutely is. But the teaching that you're under a curse if you don't give 10% to your specific church is manipulative and without NT basis. Give generously, cheerfully, as you've been blessed, starting with your local church but not limited to it.",
        upvotes: 1203,
        date: "May 22, 2026",
        children: [],
      },
    ],
  },
  "prayer-doesnt-feel-real-009": {
    title: "I pray and pray and nothing seems to happen. Is God actually listening?",
    body: "I know this is vulnerable to share, but I've been praying about the same situation for 3 years. Nothing has changed. I believe God exists. But sometimes in the silence I wonder if prayer is just... talking to myself? I feel guilty even writing this. Has anyone else been here?",
    hub: "r/Prayer",
    hubColor: "#00FF88",
    author: "Hannah P.",
    avatar: "HP",
    avatarColor: "#EC4899",
    flag: "🇬🇧",
    upvotes: 4219,
    date: "May 20, 2026",
    pinned: false,
    replies: [
      {
        author: "Pastor Marcus Webb",
        avatar: "MW",
        avatarColor: "#6B4FBB",
        flag: "🇺🇸",
        body: "This is one of the most important questions in all of Christianity and you shouldn't feel guilty for asking it. The Psalms are *full* of this — 'How long, O Lord? Will you forget me forever?' (Ps 13:1). 'My God, my God, why have you forsaken me?' (Ps 22:1 — which Jesus Himself quoted on the cross). Unanswered prayer is not evidence that you're doing something wrong or that God isn't listening. It's a universal experience of every serious person of faith in history.",
        upvotes: 2841,
        date: "May 20, 2026",
        verse: "Psalm 13:1-6",
        children: [
          {
            author: "Hannah P.",
            avatar: "HP",
            avatarColor: "#EC4899",
            flag: "🇬🇧",
            body: "Knowing Jesus himself prayed 'why have you forsaken me' is actually... really grounding. I've never thought of it that way before. Thank you.",
            upvotes: 1104,
            date: "May 20, 2026",
          },
        ],
      },
      {
        author: "Amara Osei",
        avatar: "AO",
        avatarColor: "#00FF88",
        flag: "🇬🇭",
        body: "Practical and honest response: I've been through seasons where prayer felt completely empty. What helped me was changing what I was asking from 'God, change this situation' to 'God, change me in this situation.' It's not that God ignores the first kind of prayer — he doesn't — but the second kind has a different quality. It's more available to be answered, in some way, every day.",
        upvotes: 1893,
        date: "May 20, 2026",
        children: [],
      },
      {
        author: "Ji-Woo Park",
        avatar: "JP",
        avatarColor: "#EC4899",
        flag: "🇰🇷",
        body: "What also helped me: reading the mystics — Teresa of Ávila, John of the Cross, Thomas à Kempis. They described 'the dark night of the soul' centuries ago. What you're experiencing has a name, has been walked before, and people have come through it to deeper faith. You're not alone and you're not failing.",
        upvotes: 1207,
        date: "May 21, 2026",
        verse: "Romans 8:26",
        children: [],
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(threads).map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const thread = threads[id];
  if (!thread) return { title: "Discussion — Vine" };
  return { title: `${thread.title} — Vine`, description: thread.body.slice(0, 150) };
}

export default async function DiscussionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const thread = threads[id];

  if (!thread) {
    return (
      <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
        <Navbar />
        <div className="page-body pb-20 text-center max-w-2xl mx-auto px-4">
          <p className="text-6xl mb-6">💬</p>
          <h1 className="text-3xl font-black mb-4">Thread not found</h1>
          <a href="/discussions" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-black"
            style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}>
            Back to Discussions
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  const totalReplies = thread.replies.reduce((acc, r) => acc + 1 + (r.children?.length ?? 0), 0);

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <a href="/discussions" className="inline-flex items-center gap-2 text-sm mb-6 hover:text-[#00FF88] transition-colors" style={{ color: "#6A6A88" }}>
            <ArrowLeft size={14} /> Discussions
          </a>

          {/* Hub pill */}
          <a href="/discussions" className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full mb-5"
            style={{ background: `${thread.hubColor}15`, color: thread.hubColor, border: `1px solid ${thread.hubColor}25` }}>
            <MessageSquare size={10} /> {thread.hub}
          </a>

          {/* Thread Title */}
          <h1 className="text-2xl sm:text-3xl font-black mb-4 leading-tight" style={{ color: "#F2F2F8" }}>{thread.title}</h1>

          {/* OP Meta */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black"
              style={{ background: `${thread.avatarColor}25`, color: thread.avatarColor }}>
              {thread.avatar}
            </div>
            <div>
              <p className="text-sm font-bold" style={{ color: "#F2F2F8" }}>{thread.author} {thread.flag}</p>
              <p className="text-xs" style={{ color: "#4A4A68" }}>{thread.date}</p>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <button className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg"
                style={{ background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.15)", color: "#00FF88" }}>
                <ChevronUp size={12} /> {thread.upvotes.toLocaleString()}
              </button>
              <button className="p-1.5 rounded-lg" style={{ color: "#4A4A68" }}><Share2 size={14} /></button>
              <button className="p-1.5 rounded-lg" style={{ color: "#4A4A68" }}><Bookmark size={14} /></button>
            </div>
          </div>

          {/* OP Body */}
          <div className="rounded-2xl p-6 mb-8" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-base leading-relaxed" style={{ color: "#C0C0D8", lineHeight: "1.8" }}>{thread.body}</p>
          </div>

          {/* Reply count */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-black text-lg" style={{ color: "#F2F2F8" }}>
              {totalReplies} {totalReplies === 1 ? "Reply" : "Replies"}
            </h2>
            <select className="text-xs rounded-lg px-3 py-1.5 outline-none"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#6A6A88" }}>
              <option>Best</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>

          {/* Replies */}
          <div className="space-y-5 mb-10">
            {thread.replies.map((reply, i) => (
              <div key={i}>
                {/* Top-level reply */}
                <div className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shrink-0"
                      style={{ background: `${reply.avatarColor}25`, color: reply.avatarColor }}>
                      {reply.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-sm" style={{ color: "#F2F2F8" }}>{reply.author} {reply.flag}</span>
                        {reply.isOp && <span className="text-xs px-1.5 py-0.5 rounded font-bold" style={{ background: `${thread.hubColor}20`, color: thread.hubColor }}>OP</span>}
                        <span className="text-xs" style={{ color: "#4A4A68" }}>{reply.date}</span>
                      </div>
                    </div>
                    <button className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg shrink-0"
                      style={{ background: "rgba(255,255,255,0.04)", color: "#6A6A88" }}>
                      <ChevronUp size={11} /> {reply.upvotes.toLocaleString()}
                    </button>
                  </div>

                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#C0C0D8", lineHeight: "1.75" }}>{reply.body}</p>

                  {reply.verse && (
                    <span className="text-xs px-2 py-0.5 rounded-full inline-flex items-center gap-1"
                      style={{ background: "rgba(0,255,136,0.08)", color: "#00FF88" }}>
                      📜 {reply.verse}
                    </span>
                  )}
                </div>

                {/* Nested children */}
                {reply.children && reply.children.length > 0 && (
                  <div className="ml-8 mt-3 space-y-3">
                    {reply.children.map((child, j) => (
                      <div key={j} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.04)" }}>
                        <div className="flex items-start gap-3 mb-2">
                          <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0"
                            style={{ background: `${child.avatarColor}25`, color: child.avatarColor }}>
                            {child.avatar}
                          </div>
                          <div className="flex-1">
                            <span className="font-bold text-xs" style={{ color: "#F2F2F8" }}>{child.author} {child.flag}</span>
                            <span className="text-xs ml-2" style={{ color: "#4A4A68" }}>{child.date}</span>
                          </div>
                          <button className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-lg shrink-0"
                            style={{ background: "rgba(255,255,255,0.04)", color: "#6A6A88" }}>
                            <ChevronUp size={10} /> {child.upvotes}
                          </button>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: "#A0A0C0", lineHeight: "1.7" }}>{child.body}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Reply Box */}
          <ReplyBox />
        </div>
      </div>
      <Footer />
    </div>
  );
}
