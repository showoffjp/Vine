import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReplyBox from "@/components/ReplyBox";
import DiscussionActions from "@/components/DiscussionActions";
import ReplyUpvote from "@/components/ReplyUpvote";
import { ArrowLeft, MessageSquare, Flag, ChevronRight } from "lucide-react";

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
        avatarColor: "#3a7d56",
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
    hubColor: "#3a7d56",
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
        avatarColor: "#3a7d56",
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
    avatarColor: "#3a7d56",
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
        avatarColor: "#3a7d56",
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
    hubColor: "#3a7d56",
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
        avatarColor: "#3a7d56",
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
  "biblical-finances-stewardship-007": {
    title: "How I applied Proverbs 3:9 to pay off $40K in debt — and what the church never taught me",
    body: "Three years ago I was $40K in debt — credit cards, a car loan, and a personal loan I took out to help a family member. I was a committed Christian, titheing regularly, and somehow still drowning financially. Here's what changed everything: I stopped treating money as a secular problem and started treating it as a discipleship issue. I'll share the exact steps, the verses that guided me, and the hard lessons about how the Western church rarely talks about money in practical terms.",
    hub: "r/BiblicalFinances",
    hubColor: "#10B981",
    author: "Marcus Johnson",
    avatar: "MJ",
    avatarColor: "#10B981",
    flag: "🇺🇸",
    upvotes: 1847,
    date: "May 19, 2026",
    pinned: false,
    replies: [
      {
        author: "Rev. Sarah Okonkwo",
        avatar: "SO",
        avatarColor: "#6B4FBB",
        flag: "🇳🇬",
        body: "This is something I preach on regularly. The 10-10-80 principle — give 10%, save 10%, live on 80% — is one of the most actionable financial frameworks I've seen rooted in Scripture. Malachi 3:10, Proverbs 21:20, Luke 16:10. The church is afraid of money talk because it feels crass, but Jesus talked about money more than any other topic except the Kingdom. If we're serious about discipleship, we need to get serious about stewardship.",
        upvotes: 923,
        date: "May 19, 2026",
        verse: "Proverbs 21:20",
        children: [
          {
            author: "Marcus Johnson",
            avatar: "MJ",
            avatarColor: "#10B981",
            flag: "🇺🇸",
            body: "Exactly. The 10-10-80 model is what I used. Once I saw it as biblical stewardship rather than a budgeting trick, my whole mindset shifted. The debt didn't go away overnight, but the anxiety did — because I finally had a framework I could trust.",
            upvotes: 445,
            date: "May 19, 2026",
          },
        ],
        isOp: false,
      },
      {
        author: "Samuel Mwangi",
        avatar: "SM",
        avatarColor: "#3B82F6",
        flag: "🇰🇪",
        body: "Coming from a Kenyan perspective — the church here often preaches 'prosperity gospel' which creates very different problems. Debt isn't viewed as sin, but wealth is viewed as divine favor, so poor financial decisions get spiritualized. What your post describes — treating money as discipleship — is the corrective. Proverbs 22:7 says 'the borrower is slave to the lender.' That's not condemnation, it's wisdom. We'd do well to preach that more.",
        upvotes: 712,
        date: "May 20, 2026",
        verse: "Proverbs 22:7",
        children: [],
      },
    ],
  },
  "lunch-break-devotional-006": {
    title: "How I turned my lunch break into a 15-minute prayer/devotional habit that transformed my work life",
    body: "I work in finance — high stress, long hours, secular environment. Started blocking my calendar for 15 min every day at 12:30 and doing a quick devotional in my car. Six months in and I genuinely can't imagine my workday without it. Here's exactly what I do, and why it's made such a difference. For anyone in a demanding career who feels like faith is getting squeezed out by work pressure, this is for you.",
    hub: "r/FaithAndCareer",
    hubColor: "#4F8FBB",
    author: "Thomas Nakamura",
    avatar: "TN",
    avatarColor: "#4F8FBB",
    flag: "🇺🇸",
    upvotes: 634,
    date: "May 22, 2026",
    replies: [
      {
        author: "Amara Osei",
        avatar: "AO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "I do something similar but I use the YouVersion verse of the day + 5 minutes of silence in my office with the door closed. My coworkers know not to disturb me. Even secular colleagues have started asking me about it because they've noticed a difference in how I handle stress. Kingdom witness in the marketplace doesn't always look like preaching — sometimes it's just visibly being grounded.",
        upvotes: 289,
        date: "May 22, 2026",
        verse: "Colossians 3:23",
        children: [
          {
            author: "Thomas Nakamura",
            avatar: "TN",
            avatarColor: "#4F8FBB",
            flag: "🇺🇸",
            body: "\"Kingdom witness doesn't always look like preaching — sometimes it's just visibly being grounded.\" This is exactly it. Thank you for articulating what I've been trying to put into words.",
            upvotes: 145,
            date: "May 22, 2026",
          },
        ],
      },
      {
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "The Puritans called this 'practicing the presence of God' — a theological tradition that runs from Brother Lawrence to A.W. Tozer. The idea that sacred and secular are separate categories is a modern invention. What you're doing is reclaiming integrated discipleship. 15 minutes of intentional presence with God mid-day is spiritually more powerful than many people's Sunday morning.",
        upvotes: 412,
        date: "May 23, 2026",
        verse: "Proverbs 3:6",
        children: [],
      },
      {
        author: "Ji-Woo Park",
        avatar: "JP",
        avatarColor: "#EC4899",
        flag: "🇰🇷",
        body: "For anyone wanting to try this: I use the ESV Bible app with audio — I listen on 1.25x speed while eating at my desk. Then 5 minutes journaling in the Notes app. Completely transformed how I re-enter afternoon meetings. I'm less reactive, more patient, more able to see the bigger picture.",
        upvotes: 321,
        date: "May 23, 2026",
        children: [],
      },
    ],
  },
  "worship-feels-empty-011": {
    title: "Worship used to make me cry. Now it feels like karaoke. What happened?",
    body: "I'm not being flippant or dramatic. For years, worship music genuinely moved me — I'd feel God's presence during the singing in a way that felt undeniable. I'd weep. I'd feel filled afterward. Now I stand there, singing the same songs, and it's just... words. The musicians are talented. The arrangements haven't changed. But something in me has. I'm still going to church. Still reading. But worship has become hollow. Has anyone experienced this? Is this a spiritual problem, an emotional one, or am I just in a season?",
    hub: "r/DoubtAndQuestions",
    hubColor: "#BB7A4F",
    author: "Rachel Kimura",
    avatar: "RK",
    avatarColor: "#BB7A4F",
    flag: "🇯🇵",
    upvotes: 2108,
    date: "May 24, 2026",
    replies: [
      {
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "What you're describing is one of the most common and least talked-about experiences in the Christian life. The technical term is spiritual aridity — seasons where the emotional consolations of faith withdraw, and you're left with pure will and discipline. John of the Cross called it 'the dark night of the soul.' The medieval mystics wrote extensively about it. What's significant is that they all agreed: it's not abandonment. It's invitation.",
        upvotes: 891,
        date: "May 24, 2026",
        verse: "Psalm 22:1-2",
        children: [
          {
            author: "Rachel Kimura",
            avatar: "RK",
            avatarColor: "#BB7A4F",
            flag: "🇯🇵",
            body: "I've heard of the dark night of the soul but always assumed it was for mystics and monks, not regular churchgoers. The idea that this might be normal — even spiritually significant — is genuinely comforting. Thank you.",
            upvotes: 312,
            date: "May 24, 2026",
          },
        ],
      },
      {
        author: "Lydia Böhm",
        avatar: "LB",
        avatarColor: "#6B4FBB",
        flag: "🇩🇪",
        body: "I went through this for almost two years. What helped me wasn't trying to manufacture the feeling back — it was changing my definition of worship. Worship stopped being about how it made me feel and started being about what it declared about God regardless of my feelings. That shift took the pressure off and slowly — very slowly — the emotional connection came back. But it was different. More grounded. Less dependent on the music.",
        upvotes: 743,
        date: "May 25, 2026",
        verse: "Psalm 34:1",
        children: [],
      },
      {
        author: "Dr. Samuel Owusu",
        avatar: "SO",
        avatarColor: "#3B82F6",
        flag: "🇬🇭",
        body: "There's also a neurological dimension worth mentioning — repeated exposure to any stimulus reduces emotional response over time. This is normal brain function, not spiritual failure. The early church's corporate worship looked very different from contemporary praise music. If contemporary worship is your only practice, experimenting with ancient liturgy, silence, lamentation, or even physical postures (kneeling, prostration) can re-engage worship through different channels.",
        upvotes: 521,
        date: "May 25, 2026",
        children: [],
      },
    ],
  },
  "job-loss-faith-012": {
    title: "Laid off at 47 with three kids in college. Trying to trust God's provision but honestly struggling.",
    body: "Twenty years at the same company. I was a senior director. Got called into HR on a Thursday afternoon — the whole department was let go. I'm not naive — I know layoffs happen. I know God is sovereign. I know Philippians 4:19. But knowing the verses and feeling the truth of them when you're staring at three tuition bills and a mortgage are two different things. I'm applying everywhere. I'm praying. I'm trying. But I'd be lying if I said this hasn't shaken my faith in ways I didn't expect. Anyone else been here?",
    hub: "r/FaithAndCareer",
    hubColor: "#4F8FBB",
    author: "David Chen",
    avatar: "DC",
    avatarColor: "#4F8FBB",
    flag: "🇺🇸",
    upvotes: 3247,
    date: "May 23, 2026",
    replies: [
      {
        author: "Carlos Mendez",
        avatar: "CM",
        avatarColor: "#10B981",
        flag: "🇨🇴",
        body: "Brother, I was displaced at 42 — different circumstances but the same hollow feeling between faith and fear. What I can tell you from the other side: the provision came, but not how I expected. God didn't restore my old life. He built something new. Looking back I can see his hand in every closed door. In the middle of it, I could see almost nothing. That's where you are. You're not failing — you're in the gap between the promise and the fulfillment.",
        upvotes: 1204,
        date: "May 23, 2026",
        verse: "Jeremiah 29:11",
        children: [
          {
            author: "David Chen",
            avatar: "DC",
            avatarColor: "#4F8FBB",
            flag: "🇺🇸",
            body: "\"You're in the gap between the promise and the fulfillment.\" I'm writing this down. This is what I needed to hear — that the gap is not the destination. Thank you.",
            upvotes: 487,
            date: "May 23, 2026",
          },
        ],
      },
      {
        author: "Amara Osei",
        avatar: "AO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "I lost my husband when my children were young and had no income. What I learned is that Philippians 4:19 isn't a formula — it's a testimony. Paul wrote it from prison, having been in need, having been in plenty. He knew both. The peace that guards your heart isn't peace from the situation — it's peace in spite of it. That peace is available to you right now, in the middle of this, before anything changes.",
        upvotes: 892,
        date: "May 24, 2026",
        verse: "Philippians 4:6-7",
        children: [],
      },
      {
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "Practically: 1) Tell your church. Pride will isolate you; community will carry you. 2) The next opportunity is probably not the same shape as the last one. Stay open. 3) Update your resume and LinkedIn today — action combats anxiety. 4) Give something away. It sounds counterintuitive in scarcity, but generosity in hard seasons has a way of supernaturally aligning your heart with God's economy. Praying for you, David.",
        upvotes: 1043,
        date: "May 24, 2026",
        verse: "Luke 6:38",
        children: [],
      },
    ],
  },
  "marriage-hard-church-silent-013": {
    title: "My marriage is quietly falling apart and I'm too ashamed to tell anyone at church",
    body: "My husband and I have served on the worship team together for four years. We lead a small group. People come to us for marriage advice. And for the last eight months, we've barely spoken beyond logistics. No intimacy. No real connection. Just coexistence. I know we need help but every time I think about telling someone at church, I imagine the whispers, the looks, the loss of our roles. So we keep performing. And I keep wondering if this is it — if this is what the rest of our marriage looks like. Is this happening to anyone else? And how do you get help without the whole church knowing your business?",
    hub: "r/YoungAdults",
    hubColor: "#4FBBAA",
    author: "Anonymous (Vine User)",
    avatar: "AN",
    avatarColor: "#4FBBAA",
    flag: "🇺🇸",
    upvotes: 4891,
    date: "May 24, 2026",
    replies: [
      {
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "First: what you're describing is more common than you could imagine, even — especially — among ministry couples. The gap between public image and private reality is one of the most painful places to live. Please hear this clearly: getting help is not a failure of faith. It is wisdom. Jesus said the healthy don't need a doctor. Find a Christian marriage counselor outside your church — the confidentiality is protected, and you deserve a space where you can be honest without fear.",
        upvotes: 1821,
        date: "May 24, 2026",
        verse: "Proverbs 11:14",
        children: [
          {
            author: "Anonymous (Vine User)",
            avatar: "AN",
            avatarColor: "#4FBBAA",
            flag: "🇺🇸",
            body: "\"Getting help is not a failure of faith. It is wisdom.\" I needed to hear that. I've been treating our silence like a private battle we should be winning on our own. Maybe that's wrong.",
            upvotes: 632,
            date: "May 25, 2026",
          },
        ],
      },
      {
        author: "Naomi Park",
        avatar: "NP",
        avatarColor: "#EC4899",
        flag: "🇺🇸",
        body: "My husband and I went through something very similar in our seventh year of marriage — also in ministry. We almost didn't make it. What saved us was a counselor who saw us separately first, then together, and created a space where we didn't have to be the people everyone at church thought we were. Now, 12 years later, our marriage is genuinely good. But we had to be willing to be seen at our worst before it could get better. The shame you feel is real. The help is also real. Please get it.",
        upvotes: 1403,
        date: "May 25, 2026",
        children: [],
      },
      {
        author: "Lydia Böhm",
        avatar: "LB",
        avatarColor: "#6B4FBB",
        flag: "🇩🇪",
        body: "A practical suggestion: many Christian counselors offer telehealth sessions which means no one in your local area will know. Psychology Today has a filter for 'Christian counselor' + 'marriage.' You can also find counselors through Focus on the Family's referral service. The anonymity of finding help outside your immediate circle might be exactly what you need to take the first step.",
        upvotes: 987,
        date: "May 25, 2026",
        verse: "Ecclesiastes 4:9-10",
        children: [],
      },
    ],
  },
  "prodigal-child-prayers-014": {
    title: "Parents of prodigal children — how do you keep praying when years go by with no change?",
    body: "My son walked away from faith at 19. He's 27 now. Eight years of praying the same prayers, watching him make choices that break my heart. I believe in the prodigal son story. I believe God is pursuing him. But the father in the parable waited — it doesn't say how long. It might have been years. I'm tired. I'm still faithful but I'm tired of being faithful. How do other parents of prodigal children sustain long-season prayer without bitterness, without despair, without feeling like God isn't hearing you?",
    hub: "r/ChristianParenting",
    hubColor: "#BB4F7A",
    author: "Margaret Sorensen",
    avatar: "MS",
    avatarColor: "#BB4F7A",
    flag: "🇺🇸",
    upvotes: 5312,
    date: "May 22, 2026",
    replies: [
      {
        author: "Pastor Marcus Webb",
        avatar: "MW",
        avatarColor: "#3a7d56",
        flag: "🇺🇸",
        body: "I've walked with dozens of families in this situation over 25 years of ministry, and there is one thing I've observed consistently: the parents who maintain long-season faith in this are the ones who anchor their prayer in God's character rather than in outcomes. You are not praying to change God's mind — you are praying in alignment with what God already wants. He loves your son more than you do. That's not a platitude. It's the bedrock.",
        upvotes: 1847,
        date: "May 22, 2026",
        verse: "1 Timothy 2:4",
        children: [
          {
            author: "Margaret Sorensen",
            avatar: "MS",
            avatarColor: "#BB4F7A",
            flag: "🇺🇸",
            body: "\"He loves your son more than you do.\" I know that theologically. But when you said it just now I actually felt it. I needed to hear it as a statement of fact, not a comfort phrase. Thank you.",
            upvotes: 743,
            date: "May 22, 2026",
          },
        ],
      },
      {
        author: "Amara Osei",
        avatar: "AO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "My mother prayed for my father for 22 years before he came to faith. He died three years after that — but those three years were the most whole years of his life. Twenty-two years of her faithful prayer. She always said she prayed herself into peace before she prayed him into faith. That's the order, I think. Your peace in the waiting is not resignation — it's trust becoming embodied.",
        upvotes: 1203,
        date: "May 23, 2026",
        verse: "Philippians 4:6-7",
        children: [],
      },
      {
        author: "Samuel Mwangi",
        avatar: "SM",
        avatarColor: "#3B82F6",
        flag: "🇰🇪",
        body: "I came back at 31 after seven years away. What brought me back was not the sermons — it was watching my parents continue to love me without condition, to pray for me without pressure, to hold space for me without manipulation. They never stopped including me. They never made me feel like a project. They just stayed present and faithful and kind. That is the most powerful apologetic I've ever encountered. You may be doing more than you know.",
        upvotes: 2108,
        date: "May 23, 2026",
        verse: "Luke 15:20",
        children: [],
      },
    ],
  },
  "faith-doubt-workplace-015": {
    title: "How do you actually live out your faith at work without being the 'weird Christian'?",
    body: "I'm a software engineer at a fairly secular tech company. Most of my colleagues are atheist or agnostic. I don't want to hide my faith, but I also don't want to be the person who turns every conversation into an evangelism opportunity. Is there a way to be authentically Christian in a secular workplace without either erasing your identity or making your coworkers uncomfortable? Looking for real, practical stories — not generic 'just shine your light' advice.",
    hub: "r/FaithAndWork",
    hubColor: "#3a7d56",
    author: "Kwame Asante",
    avatar: "KA",
    avatarColor: "#3a7d56",
    flag: "🇬🇭",
    upvotes: 3891,
    date: "May 21, 2026",
    replies: [
      {
        author: "James Okafor",
        avatar: "JO",
        avatarColor: "#3B82F6",
        flag: "🇳🇬",
        body: "I've worked in London's financial sector for fifteen years as a Christian, and here's what I've found: the most effective 'witness' is simply being the kind of person people want on their team. Trustworthy, calm under pressure, generous with credit, honest about mistakes. People notice. They don't always connect it to faith, but they notice. When they eventually learn you're Christian, it recontextualizes everything they've seen — and that's far more interesting than any conversation you could initiate.",
        upvotes: 1654,
        date: "May 21, 2026",
        children: [
          {
            author: "Kwame Asante",
            avatar: "KA",
            avatarColor: "#3a7d56",
            flag: "🇬🇭",
            body: "This is exactly the kind of concrete answer I needed. 'It recontextualizes everything they've seen' — that's the model. Thank you.",
            upvotes: 478,
            date: "May 22, 2026",
          },
        ],
      },
      {
        author: "Dr. Lydia Cross",
        avatar: "LC",
        avatarColor: "#6B4FBB",
        flag: "🇨🇦",
        body: "One practical thing: be genuinely interested in your colleagues as people. Not strategically — genuinely. Ask about their families, remember what they share, celebrate their wins. Most people in secular workplaces have never had a Christian coworker who was primarily interested in them as human beings rather than as conversion targets. That difference is enormous and immediately felt.",
        upvotes: 1203,
        date: "May 22, 2026",
        verse: "Matthew 5:16",
        children: [],
      },
      {
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "Also: you're allowed to simply tell the truth when asked. If a colleague asks 'why do you seem so unbothered right now?' you can say 'I have a faith that really does help me hold things.' That's not weird. That's honest. Most people are fascinated, not repelled. The 'weird Christian' reputation usually comes from people who bring up faith unprompted or in ways that feel like an agenda. Honesty when asked is something else entirely.",
        upvotes: 987,
        date: "May 22, 2026",
        children: [],
      },
    ],
  },
  "sunday-church-attendance-016": {
    title: "Is Sunday attendance actually required? I love God but dread church — and I'm tired of feeling guilty about it.",
    body: "I'm a committed Christian. I pray daily, read Scripture, listen to sermons, serve in my community. But I genuinely dread Sunday morning services at my local church — the culture, the performance, the smalltalk that feels hollow. I've tried different churches. I've tried house churches. I just feel more connected to God on a walk in the woods than in 90 minutes of singing and announcements. Is Hebrews 10:25 actually a command that requires a Sunday pew? I'm not asking permission to leave God — I'm asking whether the specific institution of weekly corporate gathering is biblically mandated or culturally assumed.",
    hub: "r/ChurchLife",
    hubColor: "#EC4899",
    author: "Anonymous",
    avatar: "AN",
    avatarColor: "#8A8AA8",
    flag: "🇺🇸",
    upvotes: 6241,
    date: "May 20, 2026",
    replies: [
      {
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "The honest answer is that Hebrews 10:25 says 'do not give up meeting together' — it doesn't specify Sunday, a building, or a particular format. The early church met in homes, daily, in small groups. What the New Testament assumes is Christian community — genuine, committed, mutually accountable fellowship with other believers. Whether that happens in a 1,200-seat auditorium or around a dinner table is not prescribed. What is prescribed is that you not do the Christian life alone. That you are genuinely known, challenged, and prayed for by other believers who know your name.",
        upvotes: 2341,
        date: "May 20, 2026",
        verse: "Hebrews 10:24-25",
        children: [
          {
            author: "Anonymous",
            avatar: "AN",
            avatarColor: "#8A8AA8",
            flag: "🇺🇸",
            body: "That distinction between 'Sunday service' and 'genuine community' is actually liberating. I think I've conflated them because every church I've been to has treated them as the same thing.",
            upvotes: 891,
            date: "May 21, 2026",
          },
        ],
      },
      {
        author: "Lydia Böhm",
        avatar: "LB",
        avatarColor: "#6B4FBB",
        flag: "🇩🇪",
        body: "I went through a nearly identical season. What I found was that the issue wasn't church — it was the specific form of church I'd always known. I eventually found a small contemplative community that meets twice monthly. Not a Sunday service in the traditional sense. Lectio Divina, shared prayer, dinner together. It fundamentally changed my relationship with corporate worship because it met the actual need (accountability, fellowship, shared faith) without the parts that had become obstacles for me.",
        upvotes: 1547,
        date: "May 21, 2026",
        children: [],
      },
      {
        author: "Dr. Samuel Owusu",
        avatar: "SO",
        avatarColor: "#10B981",
        flag: "🇬🇭",
        body: "I'd also gently push back on 'dread church vs. feel connected on a walk.' The spiritual experiences you have alone are real and valid. But there are things that only community can form in you: the friction of loving people you didn't choose, the discipline of showing up when you don't feel like it, being known across time by the same people. Solo spirituality can become very self-curated in a way that avoids that formation. The question isn't Sunday service vs. walks — it's whether you have people who know you and hold you accountable.",
        upvotes: 1823,
        date: "May 21, 2026",
        verse: "1 Corinthians 12:12",
        children: [],
      },
    ],
  },
  "what-is-biblical-manhood-017": {
    title: "What does 'biblical manhood' actually mean in 2026? Serious question, not a culture war.",
    body: "I'm a 28-year-old Christian man genuinely trying to figure out what it means to be a man in a way that's rooted in Scripture rather than reaction — either to the hypermasculinity I see in some Christian spaces or the complete rejection of gender distinctions I see in others. The cultural noise on both sides makes it almost impossible to think clearly. What does the Bible actually say? What does Jesus model? I'm looking for serious biblical engagement, not political talking points from either direction.",
    hub: "r/MenOfFaith",
    hubColor: "#F59E0B",
    author: "Tyler Brooks",
    avatar: "TB",
    avatarColor: "#F59E0B",
    flag: "🇺🇸",
    upvotes: 4127,
    date: "May 19, 2026",
    replies: [
      {
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "The most honest biblical answer I can give: Jesus is the model of manhood, and he is simultaneously the most traditionally 'strong' figure in Scripture — clearing the temple, rebuking the Pharisees, dying rather than capitulating — and the most tender. He wept. He touched lepers. He commended the faith of women. He served. The hypermasculine version of Jesus that you see in some spaces strips out the tenderness. The version that strips out strength and conviction isn't honest either. Biblical manhood is Christlike manhood — and Christ was both.",
        upvotes: 2108,
        date: "May 19, 2026",
        verse: "Ephesians 5:25",
        children: [
          {
            author: "Tyler Brooks",
            avatar: "TB",
            avatarColor: "#F59E0B",
            flag: "🇺🇸",
            body: "The 'Christ was both' framing is the most helpful thing I've read on this. Most of what I see online emphasizes one or the other and then claims the full picture.",
            upvotes: 743,
            date: "May 19, 2026",
          },
        ],
      },
      {
        author: "Dr. Samuel Owusu",
        avatar: "SO",
        avatarColor: "#10B981",
        flag: "🇬🇭",
        body: "I'd point you to Paul's description of the overseer in 1 Timothy 3 — self-controlled, above reproach, hospitable, able to teach, gentle, not quarrelsome. These are presented as masculine leadership qualities. Notice what's absent from that list: aggression, dominance, toughness, stoicism. The biblical picture of maturity in a man is not 'warrior' or 'provider' first — it's character. The fruit of the Spirit applied to a man's life IS biblical manhood.",
        upvotes: 1654,
        date: "May 19, 2026",
        verse: "1 Timothy 3:1-7",
        children: [],
      },
      {
        author: "Naomi Park",
        avatar: "NP",
        avatarColor: "#EC4899",
        flag: "🇰🇷",
        body: "As a woman who is married to a man genuinely trying to do this well — the thing that matters most to me is not whether he 'leads' in the way culture has defined it. It's whether he is present, honest, willing to be wrong, and growing. The man described in Proverbs 31:10-31 as a worthy husband is praised for trusting his wife, benefiting her, and letting her flourish. That passage is mostly about a woman, but the husband in it gives her room to grow. That's what I actually want.",
        upvotes: 1891,
        date: "May 20, 2026",
        children: [],
      },
    ],
  },
  "baptism-debate-018": {
    title: "Infant baptism vs. believer's baptism — can we stop acting like this divides us?",
    body: "I grew up Reformed Presbyterian (paedobaptist), married a Baptist, and now we attend a church where this comes up constantly. My wife and I have made peace with our different convictions. But I keep watching Christians act like this is a first-tier gospel issue. It's not, right? What's your view — and more importantly, how do you hold it graciously?",
    hub: "r/Theology&Doctrine",
    hubColor: "#6B4FBB",
    author: "Thomas Brentwood",
    avatar: "TB",
    avatarColor: "#6B4FBB",
    flag: "🇺🇸",
    upvotes: 1823,
    date: "May 20, 2026",
    replies: [
      {
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "You're right that it's a secondary issue — and I say that as a convinced credobaptist. The real question isn't which position is correct (though I have views!) but whether we're willing to distinguish between closed-hand and open-hand doctrines. The Nicene Creed doesn't specify baptismal mode. The gospel doesn't either. Christians have disagreed on this since the Reformation, and godly people land on both sides.",
        upvotes: 742,
        date: "May 20, 2026",
        verse: "Ephesians 4:3-6",
        children: [
          {
            author: "Thomas Brentwood",
            avatar: "TB",
            avatarColor: "#6B4FBB",
            flag: "🇺🇸",
            body: "Thank you, Rev. Osei. This is exactly the posture I've been trying to model in my own family. The covenant theology framework I grew up with actually helps me understand why Baptists land where they do — we just read the typology differently.",
            upvotes: 312,
            date: "May 20, 2026",
          },
        ],
      },
      {
        author: "Dr. Priya Singh",
        avatar: "PS",
        avatarColor: "#6B4FBB",
        flag: "🇮🇳",
        body: "I'm a church historian and I'd add: the early church is actually ambiguous on this. The Didache (early 2nd century) describes what looks like believer's baptism. But there are clear references to household baptisms in Acts that likely included infants. Both sides can claim historical support. Holding this humbly seems not just wise — it seems honest.",
        upvotes: 591,
        date: "May 21, 2026",
        children: [],
      },
      {
        author: "Lydia Böhm",
        avatar: "LB",
        avatarColor: "#EC4899",
        flag: "🇩🇪",
        body: "Coming from the Lutheran tradition, baptism is deeply meaningful to me — and I've had to learn not to be defensive when Baptist friends push back. What I've found helpful: both of us believe baptism matters. We just disagree on what it does and when. Starting from that common ground changes the conversation completely.",
        upvotes: 428,
        date: "May 21, 2026",
        children: [],
      },
    ],
  },
  "homosexuality-church-019": {
    title: "How does your church handle LGBTQ+ members? Looking for wisdom not culture war.",
    body: "My nephew just came out and wants to keep coming to church. I'm traditional in my convictions but I desperately want to love him well and not lose him. I'm not asking for a theology debate. I'm asking: what does gracious, faithful pastoral care look like in practice? What has your church done that actually helped?",
    hub: "r/ChurchLife",
    hubColor: "#EC4899",
    author: "Linda Whitmore",
    avatar: "LW",
    avatarColor: "#BB4F7A",
    flag: "🇺🇸",
    upvotes: 4201,
    date: "May 19, 2026",
    replies: [
      {
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "This is one of the most important questions facing the church right now, and I'm grateful for how you've framed it — with your nephew, not a policy debate. Practical answer: your nephew needs to know that your love for him is not conditional on his sexuality or his theological conclusions. Keep showing up. Keep inviting. The moment he feels like a project rather than a person, you'll lose him.",
        upvotes: 1842,
        date: "May 19, 2026",
        verse: "1 John 4:19",
        children: [
          {
            author: "Linda Whitmore",
            avatar: "LW",
            avatarColor: "#BB4F7A",
            flag: "🇺🇸",
            body: "Thank you. That reframe — project vs. person — is exactly what I needed. I think I've been treating this as a problem to solve rather than a relationship to maintain.",
            upvotes: 684,
            date: "May 19, 2026",
          },
        ],
      },
      {
        author: "Dr. Eva van der Berg",
        avatar: "EV",
        avatarColor: "#4FBBAA",
        flag: "🇳🇱",
        body: "As a therapist who works with LGBTQ+ Christians: the thing that consistently harms people isn't doctrinal clarity — it's shame. The people who survive churches with traditional convictions are the ones whose church loves them lavishly even while disagreeing with them. Rejection in the name of God is a profound wound. Disagreement with visible, costly love is survivable.",
        upvotes: 2103,
        date: "May 20, 2026",
        children: [],
      },
      {
        author: "Ji-Woo Park",
        avatar: "JP",
        avatarColor: "#EC4899",
        flag: "🇰🇷",
        body: "My church has a small group specifically for people navigating sexuality and faith. No pressure to resolve the theological questions — just space to be honest and supported. Several LGBTQ+ members have stayed for years precisely because they feel heard rather than fixed. That's not compromise on conviction — it's faithfulness to the person in front of you.",
        upvotes: 1342,
        date: "May 20, 2026",
        children: [],
      },
    ],
  },
  "theodicy-suffering-021": {
    title: "My 13-year-old asked me why God allows suffering — and I froze. How do you explain theodicy to a teen?",
    body: "She came home from school after a classmate's parent died of cancer and asked point blank: 'Why would a good God let that happen?' I gave some generic answer and felt terrible about it. She's a bright kid who deserves a real answer, not a platitude. How do you have this conversation with a teenager in a way that's honest and faith-building rather than dismissive?",
    hub: "r/ChristianParenting",
    hubColor: "#BB4F7A",
    author: "Rachel Brentwood",
    avatar: "RB",
    avatarColor: "#BB4F7A",
    flag: "🇺🇸",
    upvotes: 412,
    date: "May 26, 2026",
    replies: [
      {
        author: "Dr. Marcus Webb",
        avatar: "MW",
        avatarColor: "#6B4FBB",
        flag: "🇬🇧",
        body: "You froze because the question is genuinely hard — and that's actually a good thing to tell her. Start with honesty: 'That's one of the hardest questions humans have ever asked, and I've been thinking about it since you asked.' Then work through it together. The fact that she's asking is a sign of faith, not a threat to it. The three classical responses: (1) Free will theodicy — God values genuine love over forced compliance; (2) Soul-making theodicy — suffering can produce virtue and depth; (3) Mystery theodicy — we're finite creatures trying to evaluate infinite purposes. None are fully satisfying. That's okay. Job wasn't satisfied either, and God still showed up.",
        upvotes: 287,
        date: "May 26, 2026",
        verse: "Job 40:4",
        children: [
          {
            author: "Rachel Brentwood",
            avatar: "RB",
            avatarColor: "#BB4F7A",
            flag: "🇺🇸",
            body: "I love this — especially starting with 'I've been thinking about it too.' It opens dialogue instead of closing it. She's going to respect honesty more than a canned answer.",
            upvotes: 104,
            date: "May 26, 2026",
          },
        ],
      },
      {
        author: "Rev. Sarah Okonkwo",
        avatar: "SO",
        avatarColor: "#3a7d56",
        flag: "🇳🇬",
        body: "A few things that resonate with teens specifically: First, Jesus himself asked 'My God, my God, why have you forsaken me?' — so asking the question isn't doubt, it's scriptural. Second, God is not absent from suffering — he entered it. The cross is not God watching from a safe distance; it's God in the middle of the worst thing imaginable. That framing tends to land with young people in a way that abstract theodicy doesn't.",
        upvotes: 341,
        date: "May 26, 2026",
        verse: "Matthew 27:46",
        children: [],
      },
      {
        author: "Ji-Woo Park",
        avatar: "JP",
        avatarColor: "#EC4899",
        flag: "🇰🇷",
        body: "C.S. Lewis's 'The Problem of Pain' and then 'A Grief Observed' together are the best one-two punch for this. Start with The Problem of Pain for the intellectual case, then A Grief Observed to see Lewis fall apart when his wife died and have to rebuild. The second book is more honest and more useful. For a 13-year-old, reading them together shows that intellectual answers don't inoculate against real grief — and that's not a failure of faith.",
        upvotes: 213,
        date: "May 27, 2026",
        children: [],
      },
      {
        author: "Amara Osei",
        avatar: "AO",
        avatarColor: "#3a7d56",
        flag: "🇬🇭",
        body: "Something I'd add: make space for her grief first before the theology. Her classmate's parent died. That's traumatic. Before you explain why God allows suffering, sit with her in the fact that it's genuinely terrible that this happened. Lament before logic. Psalm 22 starts in desolation and moves toward trust — that's the pastoral model.",
        upvotes: 398,
        date: "May 27, 2026",
        verse: "Psalm 22:1",
        children: [],
      },
    ],
  },
  "interracial-marriage-020": {
    title: "Is there anything in Scripture against interracial marriage? Church is split on this.",
    body: "My girlfriend is Nigerian-British and I'm white American. We're both serious Christians, both committed to the same church. But some older members have expressed concerns about 'unequal yokes' being applied to race. I've read Galatians 3:28, Acts 17:26, Numbers 12 — but I want to hear from the community. Is this a genuine biblical concern or cultural prejudice dressed in theological language?",
    hub: "r/Relationships",
    hubColor: "#EC4899",
    author: "Tyler Dawson",
    avatar: "TD",
    avatarColor: "#3B82F6",
    flag: "🇺🇸",
    upvotes: 5812,
    date: "May 18, 2026",
    replies: [
      {
        author: "Dr. Samuel Owusu",
        avatar: "SO",
        avatarColor: "#6B4FBB",
        flag: "🇬🇭",
        body: "This is biblical theology, not a close call. The 'unequal yoke' of 2 Corinthians 6:14 is explicitly about the believer/unbeliever distinction — Paul is addressing idolatry, not ethnicity. Moses married a Cushite (Ethiopian) woman in Numbers 12, and God judged Miriam for objecting. Ruth was a Moabite. Boaz was an Israelite. That marriage is in the genealogy of Jesus. Anyone applying 'unequal yoke' to race is doing eisegesis, not exegesis.",
        upvotes: 3241,
        date: "May 18, 2026",
        verse: "Galatians 3:28",
        children: [
          {
            author: "Tyler Dawson",
            avatar: "TD",
            avatarColor: "#3B82F6",
            flag: "🇺🇸",
            body: "Thank you for this. The Numbers 12 passage was the one I kept coming back to. The fact that God rebuked Miriam for her objection seems pretty conclusive to me.",
            upvotes: 1104,
            date: "May 18, 2026",
          },
        ],
      },
      {
        author: "Amara Osei",
        avatar: "AO",
        avatarColor: "#3a7d56",
        flag: "🇬🇭",
        body: "As a Ghanaian woman married to a white British man, I want to say: the concerns you'll face are mostly cultural, not theological. And they'll come from both sides. Prepare for that with grace and patience — not because your relationship is wrong but because some people take time. The biblical case for your relationship is rock solid. The pastoral case for taking it slowly with your church community is also real.",
        upvotes: 2891,
        date: "May 19, 2026",
        children: [],
      },
      {
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "Marriage across ethnic lines is not just permitted in Scripture — it's featured prominently in redemptive history. Rahab. Ruth. Moses's wife. The early church's expansion across ethnic borders was itself a statement about the nature of the Kingdom. What does matter is shared faith, shared values, and shared commitment to the local church community. Those are the questions worth asking.",
        upvotes: 1923,
        date: "May 19, 2026",
        children: [],
      },
    ],
  },
  "antidepressants-faith-022": {
    title: "I've been on antidepressants for 3 years as a Christian. I'm tired of the stigma from church people.",
    body: "Three years ago my doctor (who is also a follower of Jesus) diagnosed me with clinical depression and prescribed an antidepressant. It changed my life — I can pray, worship, think clearly, show up for my family again. But in my church community, medication is treated like a spiritual failure. Last month someone in my small group said I needed to 'just pray more and have more faith.' I'm done quietly absorbing this. What does Scripture actually say about mental illness? And why is the church so far behind on this?",
    hub: "r/MentalHealthAndFaith",
    hubColor: "#4FBBAA",
    author: "Grace Winters",
    avatar: "GW",
    avatarColor: "#4FBBAA",
    flag: "🇺🇸",
    upvotes: 6204,
    date: "May 22, 2026",
    pinned: false,
    replies: [
      {
        author: "Dr. Sarah Kimani",
        avatar: "SK",
        avatarColor: "#3a7d56",
        flag: "🇰🇪",
        body: "As a biblical counselor and licensed therapist who is also a committed Christian, let me be direct: antidepressants are not a spiritual failure. They are medicine. We don't tell diabetics that insulin means weak faith. We don't tell people with broken legs to 'pray harder instead of getting a cast.' The brain is an organ. When it needs medical support, getting that support is good stewardship of the body God gave you. Elijah was suicidal under a broom tree (1 Kings 19). God's response wasn't 'pray harder' — it was 'eat something and sleep.' Physical care came first.",
        upvotes: 4891,
        date: "May 22, 2026",
        verse: "1 Kings 19:5-8",
        children: [
          {
            author: "Grace Winters",
            avatar: "GW",
            avatarColor: "#4FBBAA",
            flag: "🇺🇸",
            body: "The Elijah passage makes me cry every time. God didn't lecture him. He fed him and let him sleep. That is so tender and so different from what I've experienced in the church.",
            upvotes: 2103,
            date: "May 22, 2026",
          },
        ],
        isOp: false,
      },
      {
        author: "Rev. Marcus Webb",
        avatar: "MW",
        avatarColor: "#6B4FBB",
        flag: "🇺🇸",
        body: "I'm a pastor and I've been on antidepressants for 5 years. I'm telling you this publicly because the shame and silence in the church is doing real harm. Depression is not a character flaw. It's not a faith deficiency. It's often a biological condition that responds to biological intervention. My faith is deeper now than it was before I got help — because I can actually think clearly, and I can actually feel God's presence instead of being numb under a cloud of untreated illness. Please get help if you need it. Please stay in your church and help change the culture from the inside.",
        upvotes: 5412,
        date: "May 23, 2026",
        verse: "Psalm 88:1",
        children: [],
        isOp: false,
      },
      {
        author: "Ji-Woo Park",
        avatar: "JP",
        avatarColor: "#EC4899",
        flag: "🇰🇷",
        body: "In South Korea the stigma around mental health in the church is even more pronounced — it's tied to shame culture, 'losing face,' and a prosperity-adjacent theology that treats suffering as spiritual weakness. I want to challenge that framing. Psalm 88 is the only psalm in the Bible with no resolution — it ends in darkness. That psalm is in Scripture for a reason. It tells us that raw, unresolved anguish is allowed in God's presence. Your medication-assisted healing is not less holy than someone else's 'miraculous' healing.",
        upvotes: 3201,
        date: "May 23, 2026",
        children: [],
        isOp: false,
      },
      {
        author: "Dr. Priya Singh",
        avatar: "PS",
        avatarColor: "#6B4FBB",
        flag: "🇮🇳",
        body: "Something I teach in my counseling practice: the same people who resist antidepressants often have no issue with caffeine, which is a mood-altering substance. Or with taking ibuprofen for pain. The inconsistency reveals that the resistance isn't theological — it's cultural stigma dressed in theological language. I don't say this to be harsh, but to help people see the inconsistency in their own reasoning.",
        upvotes: 2891,
        date: "May 24, 2026",
        children: [],
        isOp: false,
      },
    ],
  },
  "women-in-ministry-leadership-023": {
    title: "As a woman called to preach, I'm exhausted from justifying my calling. Can we have an honest conversation about women in ministry?",
    body: "I've been in full-time ministry for 12 years. I've planted two churches. I've led hundreds of women — and men — to Christ. I've preached in 18 countries. And I'm still regularly asked to justify whether women should be allowed to teach mixed-gender audiences. I'm not angry. I'm just tired. I want a real conversation grounded in Scripture — not proof-texting, not culture war. What does the whole witness of Scripture say about women in ministry? I'll start with my own study. Please engage with grace.",
    hub: "r/WomenOfFaith",
    hubColor: "#BB4F7A",
    author: "Rev. Josephine Kamau",
    avatar: "JK",
    avatarColor: "#BB4F7A",
    flag: "🇰🇪",
    upvotes: 5831,
    date: "May 23, 2026",
    pinned: false,
    replies: [
      {
        author: "Dr. Grace Mbeki",
        avatar: "GM",
        avatarColor: "#10B981",
        flag: "🇿🇦",
        body: "The biblical case is stronger than many churches acknowledge. Deborah judged Israel and led its armies — she was not a secondary figure, she was the primary leader (Judges 4-5). Priscilla, named before her husband Aquila in 4 of 6 New Testament references, taught Apollos — the most learned preacher of his time — 'the way of God more accurately' (Acts 18:26). Phoebe is called a 'deacon' and a 'patron' of Paul himself in Romans 16:1-2. The Greek word used for Junia in Romans 16:7 — 'prominent among the apostles' — has been deliberately obscured in translation history. The complementarian case relies heavily on two passages in Paul (1 Tim 2, 1 Cor 14) while ignoring the broader weight of evidence.",
        upvotes: 4201,
        date: "May 23, 2026",
        verse: "Galatians 3:28",
        children: [
          {
            author: "Rev. Josephine Kamau",
            avatar: "JK",
            avatarColor: "#BB4F7A",
            flag: "🇰🇪",
            body: "Thank you for naming Junia specifically. The history of translators changing her name to a male name ('Junias') to avoid the implication that a woman was called an apostle is well-documented and genuinely troubling. It's not a conspiracy theory — it's academic history. Gordon Fee, N.T. Wright, and Craig Keener have all written extensively on this.",
            upvotes: 2891,
            date: "May 23, 2026",
          },
        ],
        isOp: false,
      },
      {
        author: "Pastor David Chen",
        avatar: "DC",
        avatarColor: "#3B82F6",
        flag: "🇺🇸",
        body: "I want to speak as a complementarian who tries to hold this view with humility and without condescension. I genuinely believe that the New Testament teaches male eldership in the local church — but I also believe that position has been weaponized to diminish, marginalize, and silence women in ways that go far beyond what Scripture requires. Complementarianism, rightly understood, still requires men to honor, elevate, and amplify the voices and gifts of women in all areas except elder-level authority. The way many churches practice it — where women can't even lead mixed-gender Bible studies or serve as deacons — goes beyond the text. I'm sorry for the ways this position has been used to wound people like you.",
        upvotes: 3104,
        date: "May 24, 2026",
        children: [],
        isOp: false,
      },
      {
        author: "Amara Osei",
        avatar: "AO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "In West Africa, the debate looks different. Women have always led churches, taught Scripture, and pastored communities — often because men were unavailable, or because the women were the ones with the calling and the training. The Western importing of this debate has sometimes been more colonial than biblical. I say this not as a criticism but as a perspective the global church needs to hear. The Holy Spirit has no gender restrictions in how He distributes gifts (1 Corinthians 12:4-11).",
        upvotes: 2789,
        date: "May 24, 2026",
        verse: "1 Corinthians 12:4-11",
        children: [],
        isOp: false,
      },
      {
        author: "Rev. Sarah Okonkwo",
        avatar: "SO",
        avatarColor: "#BB4F7A",
        flag: "🇳🇬",
        body: "Acts 2:17-18 — 'Your sons and daughters will prophesy.' Joel's prophecy, fulfilled at Pentecost, explicitly includes daughters prophesying. Prophecy in the New Testament includes public proclamation and teaching. If daughters can prophesy — and this was the defining sign of the Spirit's arrival — the question isn't whether women can speak in church. The question is whether we read the whole Bible or just the passages convenient to existing power structures.",
        upvotes: 4103,
        date: "May 25, 2026",
        verse: "Acts 2:17-18",
        children: [],
        isOp: false,
      },
    ],
  },

  "faith-grief-death-024": {
    title: "My son died 6 months ago. I still believe in God. And I have more questions than ever.",
    body: "I'm not writing this to vent or to get theological answers. I'm writing because I need the church to know what it looks like to grieve while believing. My son was 24. He died in an accident. I still go to church. I still pray. My faith didn't collapse — but it changed shape completely. I have more questions than I did before, not fewer. And I need people who can sit with me in that without rushing me to resolution.",
    hub: "Grief & Loss",
    hubColor: "#4F8FBB",
    author: "Margaret Holloway",
    avatar: "MH",
    avatarColor: "#4F8FBB",
    flag: "🇺🇸",
    upvotes: 9204,
    date: "May 24, 2026",
    replies: [
      {
        author: "Rev. Emeka Nwosu",
        avatar: "EN",
        avatarColor: "#10B981",
        flag: "🇳🇬",
        body: "Grief and faith are not opposites. In the Old Testament, the most spiritually honest people were often the most grief-saturated. Job, David, Jeremiah — these weren't people with weak faith. They were people who brought everything to God, including the unbearable. What you're experiencing isn't a faith crisis. It's a faith deepening. It just doesn't feel that way from inside it.",
        upvotes: 4821,
        date: "May 24, 2026",
        verse: "Psalm 88:18",
        children: [
          {
            author: "Margaret Holloway",
            avatar: "MH",
            avatarColor: "#4F8FBB",
            flag: "🇺🇸",
            body: "Psalm 88 ends in darkness. I found out that it's the only Psalm that never resolves into praise. My pastor was confused when I said that comforted me. But it did. It told me God had room for the psalms that don't wrap up neatly.",
            upvotes: 3104,
            date: "May 24, 2026",
          },
        ],
        isOp: false,
      },
      {
        author: "Dr. Rachel Kim",
        avatar: "RK",
        avatarColor: "#EC4899",
        flag: "🇺🇸",
        body: "I'm a grief counselor and a Christian. The theological instinct to rush people to 'Romans 8:28' in the middle of fresh grief is well-meaning and harmful. The verse is true — but grief has a timeline that doesn't answer to theology's timetable. What you're describing — more questions, not fewer — is completely normal and, I'd argue, healthy. A faith that can't tolerate questions is fragile. A faith that survives them is forged.",
        upvotes: 3892,
        date: "May 25, 2026",
        verse: "Ecclesiastes 3:4",
        children: [],
        isOp: false,
      },
      {
        author: "Thomas Okafor",
        avatar: "TO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "I lost my wife two years ago. I remember sitting in church 4 months after she died while everyone clapped and worshipped and wondering why I felt nothing. I thought something was wrong with me spiritually. A wise deacon pulled me aside after service and said: 'Thomas, God is not offended by your numbness. He is right here in it.' That one sentence held me for months. You're not failing. You're surviving. That's enough right now.",
        upvotes: 5103,
        date: "May 25, 2026",
        children: [],
        isOp: false,
      },
      {
        author: "Sr. Mary Catherine O'Brien",
        avatar: "MO",
        avatarColor: "#8B5CF6",
        flag: "🇮🇪",
        body: "Lamentations 3:20 — 'My soul is downcast within me.' This isn't a verse of failure. It's a verse of presence — Jeremiah bringing the fullness of his grief into God's presence. What you're carrying is real. The church needs to learn to sit with people in that without fixing, explaining, or rushing them forward. Thank you for speaking.",
        upvotes: 2847,
        date: "May 26, 2026",
        verse: "Lamentations 3:20",
        children: [],
        isOp: false,
      },
    ],
  },

  "church-hurt-healing-025": {
    title: "I was hurt by church leadership. I left. Now I'm trying to find my way back to God (not necessarily back to church). How?",
    body: "Leadership abuse, financial exploitation, spiritual manipulation — I experienced all three in the same church over six years. I left 2 years ago. I haven't been back anywhere. But I miss God, not religion. I still pray sometimes, quietly. I still read the Psalms. But organized church feels impossible. How do you separate the two after they've been so entangled?",
    hub: "Faith & Doubt",
    hubColor: "#8B9BCC",
    author: "Anonymous",
    avatar: "AN",
    avatarColor: "#6B7280",
    flag: "",
    upvotes: 7831,
    date: "May 25, 2026",
    replies: [
      {
        author: "Dr. Valerie Chen",
        avatar: "VC",
        avatarColor: "#3B82F6",
        flag: "🇨🇦",
        body: "What you experienced — spiritual abuse, financial exploitation, manipulation — is a form of trauma. The neurological and psychological response to it is often identical to other forms of institutional abuse. Your inability to return to church isn't a spiritual failing. It's a protective response. Healing from this often starts not with finding a new church but with distinguishing the institution from the Person you're looking for.",
        upvotes: 6104,
        date: "May 25, 2026",
        verse: "Psalm 55:12-14",
        children: [
          {
            author: "Anonymous",
            avatar: "AN",
            avatarColor: "#6B7280",
            flag: "",
            body: "The verse you quoted — 'if an enemy were insulting me I could endure it... but it is you, a man like myself, my companion, my close friend.' That hit me hard. That's exactly it. The betrayal by people I trusted God with.",
            upvotes: 4203,
            date: "May 25, 2026",
          },
        ],
        isOp: false,
      },
      {
        author: "Pastor James Whitfield",
        avatar: "JW",
        avatarColor: "#3a7d56",
        flag: "🇺🇸",
        body: "I've been a pastor for 18 years and let me say something plainly: what happened to you was wrong. Full stop. The people who did it bear full responsibility. God is not asking you to minimize it, rush past it, or perform forgiveness on their timeline. He is patient. He has been in the waiting with you for two years and He will still be there when you're ready. You don't have to rush back to anything.",
        upvotes: 5891,
        date: "May 25, 2026",
        verse: "Isaiah 42:3",
        children: [],
        isOp: false,
      },
      {
        author: "Mimi Osei",
        avatar: "MO",
        avatarColor: "#F59E0B",
        flag: "🇬🇭",
        body: "I walked away from church for 3 years after something similar. What brought me back was a small house church of 8 people — no platform, no leadership hierarchy, no stage. Just people reading Scripture together and praying. It took me 6 months before I could pray aloud. They never pressured me. That slower, smaller version of community was what I needed. Maybe 'church' doesn't have to mean what it meant in the place that hurt you.",
        upvotes: 4721,
        date: "May 26, 2026",
        verse: "Matthew 18:20",
        children: [],
        isOp: false,
      },
      {
        author: "Rev. Ana Costa",
        avatar: "AC",
        avatarColor: "#EC4899",
        flag: "🇧🇷",
        body: "Jesus himself was suspicious of religious institutions. 'Woe to you, teachers of the law and Pharisees...' — he said this multiple times. The church can wound people precisely because it's supposed to be safe. But the One who founded it was himself betrayed by his closest companions and still said 'I will build my church.' Your disillusionment with the institution doesn't have to be your disillusionment with Him.",
        upvotes: 3104,
        date: "May 26, 2026",
        verse: "Matthew 23:27",
        children: [],
        isOp: false,
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
          <Link href="/discussions" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-black"
            style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)" }}>
            Back to Discussions
          </Link>
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
          <Link href="/discussions" className="inline-flex items-center gap-2 text-sm mb-6 hover:text-[#3a7d56] transition-colors" style={{ color: "#6A6A88" }}>
            <ArrowLeft size={14} /> Discussions
          </Link>

          {/* Hub pill */}
          <Link href="/discussions" className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full mb-5"
            style={{ background: `${thread.hubColor}15`, color: thread.hubColor, border: `1px solid ${thread.hubColor}25` }}>
            <MessageSquare size={10} /> {thread.hub}
          </Link>

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
            <div className="ml-auto">
              <DiscussionActions initialUpvotes={thread.upvotes} id={id} />
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
                    <ReplyUpvote initialCount={reply.upvotes} size={11} />
                  </div>

                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#C0C0D8", lineHeight: "1.75" }}>{reply.body}</p>

                  {reply.verse && (
                    <span className="text-xs px-2 py-0.5 rounded-full inline-flex items-center gap-1"
                      style={{ background: "rgba(58,125,86,0.08)", color: "#3a7d56" }}>
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
                          <ReplyUpvote initialCount={child.upvotes} size={10} />
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
