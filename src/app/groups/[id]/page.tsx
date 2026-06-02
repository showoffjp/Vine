import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JoinGroupButton from "@/components/JoinGroupButton";
import CreatePostModal from "@/components/CreatePostModal";
import ReplyUpvote from "@/components/ReplyUpvote";
import {
  ArrowLeft,
  Users,
  MessageSquare,
  Pin,
  Plus,
  Shield,
  Star,
  TrendingUp,
} from "lucide-react";

type Post = {
  title: string;
  author: string;
  avatar: string;
  avatarColor: string;
  upvotes: number;
  replies: number;
  time: string;
  flair?: string;
  flairColor?: string;
  pinned?: boolean;
};

type Group = {
  id: string;
  name: string;
  emoji: string;
  color: string;
  members: number;
  description: string;
  founded: string;
  moderators: string[];
  pinnedDiscussion?: string;
  posts: Post[];
  rules: string[];
  relatedGroups: Array<{ name: string; emoji: string; id: string }>;
};

const groups: Record<string, Group> = {
  "theology-doctrine": {
    id: "theology-doctrine",
    name: "Theology & Doctrine",
    emoji: "📜",
    color: "#6B4FBB",
    members: 24100,
    description:
      "Deep theological discussion grounded in Scripture and church history. From Trinitarianism to soteriology, eschatology to hermeneutics — this is where iron sharpens iron.",
    founded: "2023",
    moderators: ["Rev. David Osei", "Dr. Priya Singh"],
    pinnedDiscussion: "The Council of Nicaea and why 325 AD still matters",
    posts: [
      {
        title: "The Council of Nicaea and why 325 AD still matters",
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        upvotes: 1842,
        replies: 97,
        time: "2h ago",
        flair: "Church History",
        flairColor: "#6B4FBB",
        pinned: true,
      },
      {
        title: "Does penal substitutionary atonement require eternal conscious torment?",
        author: "Dr. Priya Singh",
        avatar: "PS",
        avatarColor: "#6B4FBB",
        upvotes: 934,
        replies: 143,
        time: "5h ago",
        flair: "Soteriology",
        flairColor: "#4F8FBB",
      },
      {
        title: "The filioque controversy: Western addition or heresy? A civil conversation",
        author: "Thomas Nakamura",
        avatar: "TN",
        avatarColor: "#4F8FBB",
        upvotes: 612,
        replies: 68,
        time: "8h ago",
        flair: "Trinitarianism",
        flairColor: "#BB4F7A",
      },
      {
        title: "Calvinist and Arminian lurking in the same thread — let's talk total depravity",
        author: "Lydia Böhm",
        avatar: "LB",
        avatarColor: "#6B4FBB",
        upvotes: 487,
        replies: 211,
        time: "1d ago",
        flair: "Soteriology",
        flairColor: "#4F8FBB",
      },
      {
        title: "Hermeneutics 101: Why your interpretive method matters more than your conclusion",
        author: "Samuel Mwangi",
        avatar: "SM",
        avatarColor: "#3B82F6",
        upvotes: 329,
        replies: 44,
        time: "2d ago",
        flair: "Hermeneutics",
        flairColor: "#BB7A4F",
      },
    ],
    rules: [
      "Ground every argument in Scripture or recognized theological sources",
      "Disagree charitably — no ad hominem or condescension",
      "Label your tradition (Reformed, Arminian, Catholic, etc.) for context",
      "No political culture war threads — this is a theology space",
      "New members: read the pinned primer before posting",
    ],
    relatedGroups: [
      { name: "Doubts & Questions", emoji: "❓", id: "doubts-questions" },
      { name: "Mental Health & Faith", emoji: "💙", id: "mental-health-faith" },
      { name: "Young Adults (18-30)", emoji: "🔥", id: "young-adults" },
      { name: "Faith & Career", emoji: "💼", id: "faith-career" },
    ],
  },

  "mental-health-faith": {
    id: "mental-health-faith",
    name: "Mental Health & Faith",
    emoji: "💙",
    color: "#3a7d56",
    members: 18700,
    description:
      "A safe space where faith and mental wellness intersect. No toxic positivity, no 'just pray more.' Honest conversations about depression, anxiety, trauma, and healing.",
    founded: "2023",
    moderators: ["Isabella Ferreira", "Ji-Woo Park"],
    pinnedDiscussion:
      "After 3 years of depression and praying for healing, I finally got therapy — and it changed everything.",
    posts: [
      {
        title:
          "After 3 years of depression and praying for healing, I finally got therapy — and it changed everything.",
        author: "Isabella Ferreira",
        avatar: "IF",
        avatarColor: "#EC4899",
        upvotes: 2341,
        replies: 89,
        time: "1h ago",
        flair: "Testimony",
        flairColor: "#3a7d56",
        pinned: true,
      },
      {
        title: "The church told me to 'rejoice always.' I had panic attacks. What do I do with that?",
        author: "Ji-Woo Park",
        avatar: "JP",
        avatarColor: "#EC4899",
        upvotes: 1203,
        replies: 114,
        time: "4h ago",
        flair: "Anxiety",
        flairColor: "#4F8FBB",
      },
      {
        title: "Christian counselor vs. secular therapist: real experiences from this community",
        author: "Amara Osei",
        avatar: "AO",
        avatarColor: "#3a7d56",
        upvotes: 876,
        replies: 73,
        time: "9h ago",
        flair: "Resources",
        flairColor: "#6B4FBB",
      },
      {
        title: "Trauma, forgiveness, and why I stopped conflating the two",
        author: "Maria Santos",
        avatar: "MS",
        avatarColor: "#F59E0B",
        upvotes: 654,
        replies: 58,
        time: "1d ago",
        flair: "Healing",
        flairColor: "#BB7A4F",
      },
      {
        title: "Medication and faith: does taking antidepressants mean I don't trust God?",
        author: "Thomas Nakamura",
        avatar: "TN",
        avatarColor: "#4F8FBB",
        upvotes: 412,
        replies: 96,
        time: "2d ago",
        flair: "Discussion",
        flairColor: "#4A4A68",
      },
    ],
    rules: [
      "This is a safe space — no toxic positivity or 'just pray harder' responses",
      "Do not give medical advice — share experiences, not prescriptions",
      "Trigger warnings required for graphic content",
      "Confidentiality: what's shared here stays here",
      "Report any content that promotes self-harm immediately",
    ],
    relatedGroups: [
      { name: "Doubts & Questions", emoji: "❓", id: "doubts-questions" },
      { name: "Young Adults (18-30)", emoji: "🔥", id: "young-adults" },
      { name: "Christian Parenting", emoji: "👨‍👩‍👧", id: "christian-parenting" },
      { name: "Theology & Doctrine", emoji: "📜", id: "theology-doctrine" },
    ],
  },

  "young-adults": {
    id: "young-adults",
    name: "Young Adults (18-30)",
    emoji: "🔥",
    color: "#4FBBAA",
    members: 31200,
    description:
      "For Christians navigating college, early careers, dating, and faith in a post-Christian world. Authentic. Real. No performance.",
    founded: "2023",
    moderators: ["Amara Osei", "Thomas Nakamura"],
    pinnedDiscussion:
      "Dating as a Christian in 2026 is genuinely hard. Anyone else feel like the apps are working against you?",
    posts: [
      {
        title:
          "Dating as a Christian in 2026 is genuinely hard. Anyone else feel like the apps are working against you?",
        author: "Amara Osei",
        avatar: "AO",
        avatarColor: "#3a7d56",
        upvotes: 789,
        replies: 124,
        time: "3h ago",
        flair: "Dating",
        flairColor: "#4FBBAA",
        pinned: true,
      },
      {
        title: "My secular coworkers think Christianity is anti-intellectual. How do you handle it?",
        author: "Ji-Woo Park",
        avatar: "JP",
        avatarColor: "#EC4899",
        upvotes: 543,
        replies: 87,
        time: "6h ago",
        flair: "Apologetics",
        flairColor: "#3B82F6",
      },
      {
        title: "How do you maintain your faith through college when everything is deconstructing around you?",
        author: "Samuel Mwangi",
        avatar: "SM",
        avatarColor: "#3B82F6",
        upvotes: 412,
        replies: 63,
        time: "12h ago",
        flair: "College",
        flairColor: "#6B4FBB",
      },
      {
        title:
          "Signed my first job offer today. How do I honor God in the corporate world?",
        author: "Lydia Böhm",
        avatar: "LB",
        avatarColor: "#6B4FBB",
        upvotes: 298,
        replies: 41,
        time: "1d ago",
        flair: "Career",
        flairColor: "#BB4F7A",
      },
      {
        title: "Is it okay to leave your home church when you move cities? Dealing with the guilt",
        author: "Thomas Nakamura",
        avatar: "TN",
        avatarColor: "#4F8FBB",
        upvotes: 187,
        replies: 55,
        time: "2d ago",
        flair: "Church Life",
        flairColor: "#BB7A4F",
      },
    ],
    rules: [
      "Authenticity over performance — no highlight-reel Christianity",
      "Be kind to those deconstructing; they are still your siblings",
      "Dating advice: offer perspective, not pressure",
      "No gatekeeping which struggles are 'real enough' to share",
      "Respect age range — this space is specifically 18-30",
    ],
    relatedGroups: [
      { name: "Mental Health & Faith", emoji: "💙", id: "mental-health-faith" },
      { name: "Faith & Career", emoji: "💼", id: "faith-career" },
      { name: "Doubts & Questions", emoji: "❓", id: "doubts-questions" },
      { name: "Theology & Doctrine", emoji: "📜", id: "theology-doctrine" },
    ],
  },

  "christian-parenting": {
    id: "christian-parenting",
    name: "Christian Parenting",
    emoji: "👨‍👩‍👧",
    color: "#BB4F7A",
    members: 12400,
    description:
      "Raising kids in faith takes a village. Share wisdom, ask hard questions, and find solidarity with parents who take both Jesus and their children seriously.",
    founded: "2023",
    moderators: ["Maria Santos", "Rev. David Osei"],
    pinnedDiscussion:
      "When your teenager says they don't believe anymore — what did you do?",
    posts: [
      {
        title:
          "When your teenager says they don't believe anymore — what did you do?",
        author: "Maria Santos",
        avatar: "MS",
        avatarColor: "#F59E0B",
        upvotes: 1043,
        replies: 178,
        time: "2h ago",
        flair: "Teens",
        flairColor: "#BB4F7A",
        pinned: true,
      },
      {
        title: "Family devotionals that actually work for ages 5-10 — share your go-tos",
        author: "Lydia Böhm",
        avatar: "LB",
        avatarColor: "#6B4FBB",
        upvotes: 612,
        replies: 84,
        time: "7h ago",
        flair: "Resources",
        flairColor: "#6B4FBB",
      },
      {
        title: "Talking to your kids about sex from a biblical perspective without making it weird",
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        upvotes: 489,
        replies: 112,
        time: "1d ago",
        flair: "Hard Topics",
        flairColor: "#EF4444",
      },
      {
        title: "Private Christian school vs. public school + strong home faith — the perennial debate",
        author: "Samuel Mwangi",
        avatar: "SM",
        avatarColor: "#3B82F6",
        upvotes: 334,
        replies: 96,
        time: "2d ago",
        flair: "Education",
        flairColor: "#4F8FBB",
      },
      {
        title: "Grace-based parenting vs. discipline: false dichotomy or real tension?",
        author: "Isabella Ferreira",
        avatar: "IF",
        avatarColor: "#EC4899",
        upvotes: 218,
        replies: 47,
        time: "3d ago",
        flair: "Discipline",
        flairColor: "#BB7A4F",
      },
    ],
    rules: [
      "No parenting shaming — we are all doing our best",
      "Cite sources when making strong claims about child development",
      "Keep political debates (school choice, etc.) civil and focused on faith",
      "Respect that families come in different configurations",
      "Crisis posts about child safety will be pinned and moderated closely",
    ],
    relatedGroups: [
      { name: "Mental Health & Faith", emoji: "💙", id: "mental-health-faith" },
      { name: "Young Adults (18-30)", emoji: "🔥", id: "young-adults" },
      { name: "Faith & Career", emoji: "💼", id: "faith-career" },
      { name: "Theology & Doctrine", emoji: "📜", id: "theology-doctrine" },
    ],
  },

  "faith-career": {
    id: "faith-career",
    name: "Faith & Career",
    emoji: "💼",
    color: "#4F8FBB",
    members: 9800,
    description:
      "Integrating faith into your professional life. Kingdom entrepreneurship, ethical dilemmas at work, calling vs. career, and using your vocation as ministry.",
    founded: "2023",
    moderators: ["Thomas Nakamura", "Amara Osei"],
    pinnedDiscussion:
      "The 'calling vs. career' distinction is a false one — and it's burning Christians out",
    posts: [
      {
        title:
          "The 'calling vs. career' distinction is a false one — and it's burning Christians out",
        author: "Thomas Nakamura",
        avatar: "TN",
        avatarColor: "#4F8FBB",
        upvotes: 743,
        replies: 91,
        time: "1h ago",
        flair: "Calling",
        flairColor: "#4F8FBB",
        pinned: true,
      },
      {
        title: "My boss asked me to fudge the numbers. I refused. Here's what happened.",
        author: "Amara Osei",
        avatar: "AO",
        avatarColor: "#3a7d56",
        upvotes: 1204,
        replies: 63,
        time: "5h ago",
        flair: "Ethics",
        flairColor: "#EF4444",
      },
      {
        title: "Is it possible to be a faithful Christian in finance / investment banking?",
        author: "Ji-Woo Park",
        avatar: "JP",
        avatarColor: "#EC4899",
        upvotes: 534,
        replies: 109,
        time: "1d ago",
        flair: "Finance",
        flairColor: "#F59E0B",
      },
      {
        title:
          "Starting a business as an act of worship — the theology of Christian entrepreneurship",
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        upvotes: 398,
        replies: 55,
        time: "2d ago",
        flair: "Entrepreneurship",
        flairColor: "#6B4FBB",
      },
      {
        title: "How do you talk about your faith at work without becoming 'that guy'?",
        author: "Samuel Mwangi",
        avatar: "SM",
        avatarColor: "#3B82F6",
        upvotes: 287,
        replies: 72,
        time: "3d ago",
        flair: "Culture",
        flairColor: "#4FBBAA",
      },
    ],
    rules: [
      "Share real experiences — not just inspirational platitudes",
      "Ethical dilemmas are welcome; preachy responses are not",
      "No MLM or 'kingdom business' recruiting posts",
      "Career advice should be grounded in both practical and biblical wisdom",
      "Confidentiality: anonymize your employer when sharing sensitive situations",
    ],
    relatedGroups: [
      { name: "Young Adults (18-30)", emoji: "🔥", id: "young-adults" },
      { name: "Theology & Doctrine", emoji: "📜", id: "theology-doctrine" },
      { name: "Doubts & Questions", emoji: "❓", id: "doubts-questions" },
      { name: "Christian Parenting", emoji: "👨‍👩‍👧", id: "christian-parenting" },
    ],
  },

  "doubts-questions": {
    id: "doubts-questions",
    name: "Doubts & Questions",
    emoji: "❓",
    color: "#BB7A4F",
    members: 15300,
    description:
      "The questions you're afraid to ask in church. Honest wrestling with hard theology, unanswered prayers, suffering, and deconstruction — without judgment.",
    founded: "2023",
    moderators: ["Ji-Woo Park", "Lydia Böhm"],
    pinnedDiscussion:
      "How do you handle doubt without losing faith? The thread that started this group.",
    posts: [
      {
        title:
          "How do you handle doubt without losing faith? The thread that started this group.",
        author: "Samuel Mwangi",
        avatar: "SM",
        avatarColor: "#3B82F6",
        upvotes: 2103,
        replies: 204,
        time: "3h ago",
        flair: "Doubt",
        flairColor: "#BB7A4F",
        pinned: true,
      },
      {
        title: "Does free will actually exist if God is omniscient? A philosophy student asks.",
        author: "Thomas Nakamura",
        avatar: "TN",
        avatarColor: "#4F8FBB",
        upvotes: 847,
        replies: 132,
        time: "6h ago",
        flair: "Theology",
        flairColor: "#6B4FBB",
      },
      {
        title: "I prayed for years and nothing changed. How do you keep going?",
        author: "Amara Osei",
        avatar: "AO",
        avatarColor: "#3a7d56",
        upvotes: 634,
        replies: 89,
        time: "1d ago",
        flair: "Prayer",
        flairColor: "#4F8FBB",
      },
      {
        title: "The problem of evil: every answer I've heard still feels hollow",
        author: "Lydia Böhm",
        avatar: "LB",
        avatarColor: "#6B4FBB",
        upvotes: 512,
        replies: 174,
        time: "2d ago",
        flair: "Theodicy",
        flairColor: "#EF4444",
      },
      {
        title: "I'm deconstructing and I don't know if I'm coming back. Is there room for me here?",
        author: "Ji-Woo Park",
        avatar: "JP",
        avatarColor: "#EC4899",
        upvotes: 1891,
        replies: 263,
        time: "3d ago",
        flair: "Deconstruction",
        flairColor: "#BB4F7A",
      },
    ],
    rules: [
      "No question is too dangerous — this is a judgment-free zone",
      "Do not respond to doubt with pat answers or Bible verse dumps",
      "Listen before you speak — empathy first, theology second",
      "Deconstruction stories are welcome and will be treated with respect",
      "If someone is in crisis, point them to professional resources first",
    ],
    relatedGroups: [
      { name: "Theology & Doctrine", emoji: "📜", id: "theology-doctrine" },
      { name: "Mental Health & Faith", emoji: "💙", id: "mental-health-faith" },
      { name: "Young Adults (18-30)", emoji: "🔥", id: "young-adults" },
      { name: "Faith & Career", emoji: "💼", id: "faith-career" },
    ],
  },

  "fathers-of-faith": {
    id: "fathers-of-faith",
    name: "Fathers of Faith",
    emoji: "👨‍👧‍👦",
    color: "#3B82F6",
    members: 8921,
    description: "Christian fathers encouraging each other in leading their homes with integrity, love, and biblical wisdom. From toddlers to teenagers, every stage of fatherhood covered.",
    founded: "2024",
    moderators: ["Pastor David Kim", "Marcus Johnson"],
    pinnedDiscussion: "What does it look like to be a 'priest' of your home without becoming controlling?",
    posts: [
      { title: "What does it look like to be a 'priest' of your home without becoming controlling?", author: "Marcus Johnson", avatar: "MJ", avatarColor: "#3B82F6", upvotes: 743, replies: 112, time: "2h ago", flair: "Family", flairColor: "#3B82F6", pinned: true },
      { title: "My teenage son told me faith is just for weak people. How do I respond without losing him?", author: "Daniel Osei", avatar: "DO", avatarColor: "#F59E0B", upvotes: 891, replies: 204, time: "5h ago", flair: "Teenagers", flairColor: "#F59E0B" },
      { title: "How do you lead family devotions when your kids don't want to participate?", author: "James Whitfield", avatar: "JW", avatarColor: "#10B981", upvotes: 512, replies: 89, time: "1d ago", flair: "Devotions", flairColor: "#10B981" },
      { title: "Confession: I've been a better pastor to my congregation than a father to my children", author: "Anonymous", avatar: "?", avatarColor: "#4A4A68", upvotes: 2103, replies: 347, time: "2d ago", flair: "Vulnerable", flairColor: "#BB4F7A" },
    ],
    rules: ["Lead with love, not law", "This is a safe space for honest fatherhood struggles", "No shaming for imperfection", "Practical advice over theoretical lectures"],
    relatedGroups: [{ name: "Christian Parenting", emoji: "👨‍👩‍👧", id: "christian-parenting" }, { name: "Biblical Marriage", emoji: "💍", id: "biblical-marriage" }, { name: "Theology & Doctrine", emoji: "📜", id: "theology-doctrine" }],
  },

  "global-prayer-warriors": {
    id: "global-prayer-warriors",
    name: "Global Prayer Warriors",
    emoji: "🙏",
    color: "#3a7d56",
    members: 34502,
    description: "Interceding for the nations 24/7. Rotating prayer chains, unreached people group updates, and live prayer sessions connecting believers across every timezone.",
    founded: "2023",
    moderators: ["Rev. Amara Osei", "Pastor Ruth Nakamura"],
    pinnedDiscussion: "LIVE NOW: 24-hour prayer chain for the persecuted church — every 30 minutes",
    posts: [
      { title: "LIVE NOW: 24-hour prayer chain for the persecuted church — every 30 minutes", author: "Rev. Amara Osei", avatar: "AO", avatarColor: "#3a7d56", upvotes: 4210, replies: 892, time: "Live", flair: "Prayer Chain", flairColor: "#3a7d56", pinned: true },
      { title: "Praying for North Korea's underground church — what we know and how to intercede", author: "Daniel Park", avatar: "DP", avatarColor: "#3B82F6", upvotes: 1843, replies: 201, time: "3h ago", flair: "Persecuted Church", flairColor: "#EF4444" },
      { title: "Praise report: The woman we prayed for in Yemen is safe and has found community", author: "Sarah M.", avatar: "SM", avatarColor: "#F59E0B", upvotes: 3891, replies: 412, time: "1d ago", flair: "Praise Report", flairColor: "#3a7d56" },
      { title: "How do you sustain a consistent prayer life? Share your rhythms", author: "Lydia Böhm", avatar: "LB", avatarColor: "#6B4FBB", upvotes: 743, replies: 189, time: "2d ago", flair: "Practice", flairColor: "#6B4FBB" },
    ],
    rules: ["All prayer requests treated with dignity and confidentiality", "No political agendas in prayer threads", "Praise reports always welcome", "Respect the time zone rotation schedule"],
    relatedGroups: [{ name: "Theology & Doctrine", emoji: "📜", id: "theology-doctrine" }, { name: "Christian Parenting", emoji: "👨‍👩‍👧", id: "christian-parenting" }, { name: "Faith & Career", emoji: "💼", id: "faith-career" }],
  },

  "biblical-marriage": {
    id: "biblical-marriage",
    name: "Biblical Marriage",
    emoji: "💍",
    color: "#EF4444",
    members: 7634,
    description: "Building covenant marriages that reflect Christ and the Church. Practical tools, honest conversations, and prayer for marriages in every season — from newlyweds to empty nesters.",
    founded: "2024",
    moderators: ["Dr. Sarah Whitfield", "Pastor James & Ruth Kim"],
    pinnedDiscussion: "Marriage is a covenant, not a contract — why the distinction changes everything",
    posts: [
      { title: "Marriage is a covenant, not a contract — why the distinction changes everything", author: "Dr. Sarah Whitfield", avatar: "SW", avatarColor: "#EF4444", upvotes: 1204, replies: 178, time: "4h ago", flair: "Theology", flairColor: "#6B4FBB", pinned: true },
      { title: "We almost divorced after 12 years. Here's what saved our marriage", author: "Anonymous", avatar: "?", avatarColor: "#4A4A68", upvotes: 4821, replies: 503, time: "1d ago", flair: "Testimony", flairColor: "#10B981" },
      { title: "How do you maintain intimacy (emotional and physical) when both spouses are exhausted?", author: "David & Rachel K.", avatar: "DK", avatarColor: "#F59E0B", upvotes: 892, replies: 241, time: "2d ago", flair: "Practical", flairColor: "#F59E0B" },
      { title: "My spouse isn't a believer. How do you live 2 Corinthians 6:14 while staying married?", author: "Hannah P.", avatar: "HP", avatarColor: "#EC4899", upvotes: 1103, replies: 317, time: "3d ago", flair: "Unequally Yoked", flairColor: "#BB4F7A" },
    ],
    rules: ["Marriages in crisis welcome without judgment", "No unilateral divorce advice without pastoral care context", "Gender roles discussions must be civil and scriptural", "Respect that couples are at different stages"],
    relatedGroups: [{ name: "Fathers of Faith", emoji: "👨‍👧‍👦", id: "fathers-of-faith" }, { name: "Christian Parenting", emoji: "👨‍👩‍👧", id: "christian-parenting" }, { name: "Women in the Word", emoji: "📖", id: "women-in-the-word" }],
  },

  "women-in-the-word": {
    id: "women-in-the-word",
    name: "Women in the Word",
    emoji: "📖",
    color: "#F59E0B",
    members: 22118,
    description: "A community for Christian women to study Scripture deeply, share life honestly, mentor one another, and walk in their God-given calling — whatever season of life they're in.",
    founded: "2023",
    moderators: ["Pastor Ruth Adeyemi", "Priscilla Chen", "Dr. Naomi Clark"],
    pinnedDiscussion: "What does Proverbs 31 actually teach? A responsible exegesis",
    posts: [
      { title: "What does Proverbs 31 actually teach? A responsible exegesis", author: "Dr. Naomi Clark", avatar: "NC", avatarColor: "#F59E0B", upvotes: 2104, replies: 312, time: "3h ago", flair: "Bible Study", flairColor: "#F59E0B", pinned: true },
      { title: "Being a Christian woman in a secular workplace in 2026 — your experiences", author: "Priscilla Chen", avatar: "PC", avatarColor: "#EC4899", upvotes: 1542, replies: 234, time: "6h ago", flair: "Work & Faith", flairColor: "#3B82F6" },
      { title: "Finding your worth outside of your role as wife/mother — not anti-family, just honest", author: "Amara Osei", avatar: "AO", avatarColor: "#3a7d56", upvotes: 3201, replies: 489, time: "1d ago", flair: "Identity", flairColor: "#6B4FBB" },
      { title: "Church hurt from patriarchal leadership — how do you heal and stay?", author: "Anonymous", avatar: "?", avatarColor: "#4A4A68", upvotes: 2891, replies: 401, time: "2d ago", flair: "Church Hurt", flairColor: "#BB4F7A" },
    ],
    rules: ["This space centers the experiences of Christian women", "Complementarian and egalitarian views both welcome with respect", "No condescending theology", "Mentorship connections encouraged"],
    relatedGroups: [{ name: "Biblical Marriage", emoji: "💍", id: "biblical-marriage" }, { name: "Mental Health & Faith", emoji: "💙", id: "mental-health-faith" }, { name: "Theology & Doctrine", emoji: "📜", id: "theology-doctrine" }],
  },

  "college-faith-network": {
    id: "college-faith-network",
    name: "College Faith Network",
    emoji: "🎓",
    color: "#10B981",
    members: 19304,
    description: "Navigating university life as a Christian. Faith, apologetics, campus ministry, dating, identity questions, and everything in between — for students and recent grads.",
    founded: "2023",
    moderators: ["Samuel Okafor", "Grace Nakamura", "Thomas Whitfield"],
    pinnedDiscussion: "The top 5 questions secular professors use to challenge your faith — and how to engage",
    posts: [
      { title: "The top 5 questions secular professors use to challenge your faith — and how to engage", author: "Samuel Okafor", avatar: "SO", avatarColor: "#10B981", upvotes: 3421, replies: 421, time: "2h ago", flair: "Apologetics", flairColor: "#6B4FBB", pinned: true },
      { title: "How to find (and build) Christian community on a secular campus", author: "Grace Nakamura", avatar: "GN", avatarColor: "#F59E0B", upvotes: 1204, replies: 187, time: "8h ago", flair: "Community", flairColor: "#3a7d56" },
      { title: "I almost deconstructed in sophomore year. Here's what kept me", author: "Ji-Woo Park", avatar: "JP", avatarColor: "#EC4899", upvotes: 2891, replies: 312, time: "1d ago", flair: "Testimony", flairColor: "#10B981" },
      { title: "Christian dating on campus — navigating apps, purity culture, and real relationships", author: "Anonymous", avatar: "?", avatarColor: "#4A4A68", upvotes: 1892, replies: 401, time: "3d ago", flair: "Dating", flairColor: "#BB4F7A" },
    ],
    rules: ["Every question is valid here", "Be a resource, not a recruiter", "Respect deconstruction without celebrating it uncritically", "Campus ministry reps welcome to promote events"],
    relatedGroups: [{ name: "Young Adults (18-30)", emoji: "🔥", id: "young-adults" }, { name: "Doubts & Questions", emoji: "❓", id: "doubts-questions" }, { name: "Faith & Career", emoji: "💼", id: "faith-career" }],
  },

  "creative-christians": {
    id: "creative-christians",
    name: "Creative Christians",
    emoji: "🎨",
    color: "#EC4899",
    members: 5217,
    description: "Artists, musicians, filmmakers, writers — redeeming culture for Christ. Share your work, get feedback, find collaborators, and discuss the theology of creativity.",
    founded: "2024",
    moderators: ["Eva van der Berg", "Carlos Mendez"],
    pinnedDiscussion: "What does it mean to make 'Christian art' — and is that even a helpful category?",
    posts: [
      { title: "What does it mean to make 'Christian art' — and is that even a helpful category?", author: "Eva van der Berg", avatar: "EV", avatarColor: "#EC4899", upvotes: 1204, replies: 198, time: "1h ago", flair: "Philosophy", flairColor: "#6B4FBB", pinned: true },
      { title: "Show us your work: post your art, music, writing, or film here", author: "Carlos Mendez", avatar: "CM", avatarColor: "#10B981", upvotes: 891, replies: 312, time: "4h ago", flair: "Share", flairColor: "#EC4899" },
      { title: "How do you make a living as a Christian creative without compromising your calling?", author: "Ama Christabel", avatar: "AC", avatarColor: "#3a7d56", upvotes: 743, replies: 187, time: "1d ago", flair: "Career", flairColor: "#3B82F6" },
      { title: "Is secular music okay for Christians? The worship vs. mainstream debate", author: "Ji-Woo Park", avatar: "JP", avatarColor: "#EC4899", upvotes: 2103, replies: 401, time: "2d ago", flair: "Worship", flairColor: "#F59E0B" },
    ],
    rules: ["All creative disciplines welcome", "Critiques must be constructive", "No gatekeeping what counts as 'Christian art'", "Commercial promotion limited to 1 post per week"],
    relatedGroups: [{ name: "Theology & Doctrine", emoji: "📜", id: "theology-doctrine" }, { name: "Young Adults (18-30)", emoji: "🔥", id: "young-adults" }, { name: "Women in the Word", emoji: "📖", id: "women-in-the-word" }],
  },

  "grief-hope": {
    id: "grief-hope",
    name: "Grief & Hope",
    emoji: "🕊️",
    color: "#6B4FBB",
    members: 4891,
    description: "A tender space for those walking through loss — death, divorce, miscarriage, estrangement, illness. You don't have to be okay here. Hope is real, but grief takes time.",
    founded: "2024",
    moderators: ["Rev. Amara Osei", "Dr. Jennifer Nakamura"],
    pinnedDiscussion: "To anyone who just lost someone: this community is here, and grief is not faithlessness",
    posts: [
      { title: "To anyone who just lost someone: this community is here, and grief is not faithlessness", author: "Rev. Amara Osei", avatar: "AO", avatarColor: "#6B4FBB", upvotes: 2891, replies: 301, time: "1h ago", flair: "Welcome", flairColor: "#6B4FBB", pinned: true },
      { title: "Our daughter was stillborn three weeks ago. I don't know how to talk to God anymore.", author: "Anonymous", avatar: "?", avatarColor: "#4A4A68", upvotes: 5210, replies: 712, time: "4h ago", flair: "Loss", flairColor: "#BB4F7A" },
      { title: "One year since my husband died. What I wish someone had told me.", author: "Amara Osei", avatar: "AO", avatarColor: "#3a7d56", upvotes: 4103, replies: 512, time: "2d ago", flair: "Testimony", flairColor: "#10B981" },
      { title: "Is lament biblical? A deep dive into the Psalms of loss", author: "Dr. Jennifer Nakamura", avatar: "JN", avatarColor: "#F59E0B", upvotes: 892, replies: 134, time: "3d ago", flair: "Bible Study", flairColor: "#F59E0B" },
    ],
    rules: ["Grief is not weakness and never will be here", "No toxic positivity or rushed comfort", "Professional crisis resources are pinned — use them", "Respect the privacy of those sharing vulnerable stories"],
    relatedGroups: [{ name: "Mental Health & Faith", emoji: "💙", id: "mental-health-faith" }, { name: "Doubts & Questions", emoji: "❓", id: "doubts-questions" }, { name: "Global Prayer Warriors", emoji: "🙏", id: "global-prayer-warriors" }],
  },

  "apologetics-lab": {
    id: "apologetics-lab",
    name: "Apologetics Lab",
    emoji: "🧠",
    color: "#3B82F6",
    members: 7102,
    description: "Practicing answers to hard questions. Debate, discuss, and refine your defense of the faith in a supportive environment. From the existence of God to the reliability of Scripture.",
    founded: "2024",
    moderators: ["Dr. Marcus Webb", "James Okafor"],
    pinnedDiscussion: "The Kalam Cosmological Argument: still the best opening for the existence of God?",
    posts: [
      { title: "The Kalam Cosmological Argument: still the best opening for the existence of God?", author: "Dr. Marcus Webb", avatar: "MW", avatarColor: "#6B4FBB", upvotes: 2891, replies: 312, time: "3h ago", flair: "Cosmological", flairColor: "#6B4FBB", pinned: true },
      { title: "How do you respond when someone says 'you can't prove God exists'?", author: "James Okafor", avatar: "JO", avatarColor: "#3B82F6", upvotes: 1834, replies: 289, time: "5h ago", flair: "Practical", flairColor: "#3B82F6" },
      { title: "The Moral Argument explained simply — my best conversation-starter", author: "AnonymousApologist", avatar: "AA", avatarColor: "#10B981", upvotes: 1412, replies: 198, time: "1d ago", flair: "Moral Argument", flairColor: "#10B981" },
      { title: "My most challenging conversation with an atheist professor — and what I learned", author: "Lydia Böhm", avatar: "LB", avatarColor: "#F59E0B", upvotes: 3102, replies: 412, time: "2d ago", flair: "Experience", flairColor: "#F59E0B" },
    ],
    rules: ["Engage ideas not people", "Cite sources where possible", "Bad-faith arguments will be removed", "Intellectual humility is a virtue here"],
    relatedGroups: [{ name: "Theology & Doctrine", emoji: "📜", id: "theology-doctrine" }, { name: "Doubts & Questions", emoji: "❓", id: "doubts-questions" }, { name: "College Faith Network", emoji: "🎓", id: "college-faith-network" }],
  },

  "frontier-missions-network": {
    id: "frontier-missions-network",
    name: "Frontier Missions Network",
    emoji: "🌍",
    color: "#10B981",
    members: 3204,
    description: "For those called to the unreached. Practical missions training, cross-cultural ministry, language learning, partner networks, and prayer for the 10/40 window.",
    founded: "2024",
    moderators: ["Carlos Mendez", "Dr. Priya Singh"],
    pinnedDiscussion: "The Joshua Project: 7,000+ unreached people groups still waiting for the Gospel",
    posts: [
      { title: "The Joshua Project: 7,000+ unreached people groups still waiting for the Gospel", author: "Dr. Priya Singh", avatar: "PS", avatarColor: "#10B981", upvotes: 1204, replies: 89, time: "2h ago", flair: "Stats", flairColor: "#10B981", pinned: true },
      { title: "Preparing to go: what no missions agency told me before my first long-term deployment", author: "Carlos Mendez", avatar: "CM", avatarColor: "#6B4FBB", upvotes: 2891, replies: 312, time: "6h ago", flair: "Training", flairColor: "#6B4FBB" },
      { title: "Is tent-making missions actually effective? An honest assessment", author: "Samuel Mwangi", avatar: "SM", avatarColor: "#3B82F6", upvotes: 743, replies: 201, time: "1d ago", flair: "Tent-Making", flairColor: "#3B82F6" },
      { title: "Prayer for the Fulani people of West Africa — 32 million with less than 0.1% Christian", author: "Rev. Amara Osei", avatar: "AO", avatarColor: "#3a7d56", upvotes: 1891, replies: 134, time: "2d ago", flair: "Prayer", flairColor: "#3a7d56" },
    ],
    rules: ["Practical missions experience valued here", "Short-term mission trips welcome but context matters", "Paternalism and saviorism will be called out respectfully", "Cultural humility is not optional"],
    relatedGroups: [{ name: "Global Prayer Warriors", emoji: "🙏", id: "global-prayer-warriors" }, { name: "Theology & Doctrine", emoji: "📜", id: "theology-doctrine" }, { name: "Young Adults (18-30)", emoji: "🔥", id: "young-adults" }],
  },
};

export async function generateStaticParams() {
  return Object.keys(groups).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const group = groups[id];
  if (!group) return { title: "Group — Vine" };
  return {
    title: `${group.name} — Vine`,
    description: group.description.slice(0, 155),
  };
}

export default async function GroupPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const group = groups[id];

  if (!group) {
    return (
      <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
        <Navbar />
        <div className="page-body pb-20 text-center max-w-2xl mx-auto px-4">
          <p className="text-6xl mb-6">👥</p>
          <h1 className="text-3xl font-black mb-4">Group not found</h1>
          <a
            href="/groups"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-black"
            style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)" }}
          >
            Back to Groups
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <a
            href="/groups"
            className="inline-flex items-center gap-2 text-sm mb-6 hover:text-[#3a7d56] transition-colors"
            style={{ color: "#6A6A88" }}
          >
            <ArrowLeft size={14} /> All Groups
          </a>

          {/* Group Header */}
          <div
            className="rounded-2xl p-7 mb-8"
            style={{
              background: `linear-gradient(135deg, ${group.color}12 0%, rgba(7,7,15,1) 100%)`,
              border: `1px solid ${group.color}30`,
            }}
          >
            <div className="flex items-start gap-5 flex-wrap">
              <span className="text-6xl leading-none">{group.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h1 className="text-3xl font-black" style={{ color: "#F2F2F8" }}>
                    {group.name}
                  </h1>
                  <span
                    className="text-xs px-3 py-1 rounded-full font-bold"
                    style={{ background: `${group.color}20`, color: group.color, border: `1px solid ${group.color}30` }}
                  >
                    Public Group
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-4 max-w-2xl" style={{ color: "#8A8AA8" }}>
                  {group.description}
                </p>
                <div className="flex items-center gap-6 flex-wrap text-xs" style={{ color: "#6A6A88" }}>
                  <span className="flex items-center gap-1.5">
                    <Users size={13} style={{ color: group.color }} />
                    <strong style={{ color: "#C0C0D8" }}>{group.members.toLocaleString()}</strong> members
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star size={13} style={{ color: "#F59E0B" }} />
                    Founded {group.founded}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <TrendingUp size={13} style={{ color: "#3a7d56" }} />
                    Active community
                  </span>
                </div>
              </div>
              <JoinGroupButton groupId={group.id} color={group.color} />
            </div>
          </div>

          {/* 3-column layout */}
          <div className="flex gap-8">
            {/* Main feed */}
            <div className="flex-1 min-w-0">
              {/* Post to Group bar */}
              <div
                className="rounded-2xl p-4 mb-5 flex items-center gap-3"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black shrink-0"
                  style={{ background: `${group.color}25`, color: group.color }}
                >
                  You
                </div>
                <div
                  className="flex-1 rounded-xl px-4 py-2.5 text-sm cursor-text"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#4A4A68",
                  }}
                >
                  Share something with the group...
                </div>
                <CreatePostModal label="Post" variant="outline" />
              </div>

              {/* Posts */}
              <div className="space-y-4">
                {group.posts.map((post, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-5 cursor-pointer transition-all"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: post.pinned
                        ? `1px solid ${group.color}35`
                        : "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {/* Pinned badge */}
                    {post.pinned && (
                      <div className="flex items-center gap-1.5 mb-3">
                        <Pin size={11} style={{ color: group.color }} />
                        <span className="text-xs font-bold" style={{ color: group.color }}>
                          Pinned Discussion
                        </span>
                      </div>
                    )}

                    {/* Flair */}
                    {post.flair && (
                      <span
                        className="inline-block text-xs px-2 py-0.5 rounded-full font-semibold mb-2"
                        style={{
                          background: `${post.flairColor ?? group.color}15`,
                          color: post.flairColor ?? group.color,
                        }}
                      >
                        {post.flair}
                      </span>
                    )}

                    <h3 className="font-black text-base leading-snug mb-3" style={{ color: "#F2F2F8" }}>
                      {post.title}
                    </h3>

                    {/* Meta */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black"
                        style={{ background: `${post.avatarColor}25`, color: post.avatarColor }}
                      >
                        {post.avatar}
                      </div>
                      <span className="text-xs font-semibold" style={{ color: "#C0C0D8" }}>
                        {post.author}
                      </span>
                      <span className="text-xs" style={{ color: "#4A4A68" }}>
                        {post.time}
                      </span>
                      <div className="ml-auto flex items-center gap-3">
                        <ReplyUpvote initialCount={post.upvotes} size={11} />
                        <span className="flex items-center gap-1 text-xs" style={{ color: "#6A6A88" }}>
                          <MessageSquare size={11} /> {post.replies}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0 space-y-5">
              {/* Moderators */}
              <div
                className="rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <h3 className="font-black text-sm mb-4 flex items-center gap-2" style={{ color: "#F2F2F8" }}>
                  <Shield size={14} style={{ color: group.color }} /> Moderators
                </h3>
                <div className="space-y-3">
                  {group.moderators.map((mod) => (
                    <div key={mod} className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shrink-0"
                        style={{ background: `${group.color}20`, color: group.color }}
                      >
                        {mod
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                      <span className="text-xs font-semibold" style={{ color: "#C0C0D8" }}>
                        {mod}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group Stats */}
              <div
                className="rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <h3 className="font-black text-sm mb-4 flex items-center gap-2" style={{ color: "#F2F2F8" }}>
                  <TrendingUp size={14} style={{ color: "#3a7d56" }} /> Group Stats
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span style={{ color: "#6A6A88" }}>Members</span>
                    <span className="font-bold" style={{ color: "#F2F2F8" }}>
                      {group.members.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "#6A6A88" }}>Founded</span>
                    <span className="font-bold" style={{ color: "#F2F2F8" }}>{group.founded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "#6A6A88" }}>Posts this week</span>
                    <span className="font-bold" style={{ color: "#3a7d56" }}>
                      {group.posts.length * 7}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "#6A6A88" }}>Moderators</span>
                    <span className="font-bold" style={{ color: "#F2F2F8" }}>
                      {group.moderators.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Rules */}
              <div
                className="rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <h3 className="font-black text-sm mb-4" style={{ color: "#F2F2F8" }}>
                  Community Rules
                </h3>
                <ol className="space-y-3">
                  {group.rules.map((rule, i) => (
                    <li key={i} className="flex gap-3 text-xs leading-relaxed" style={{ color: "#8A8AA8" }}>
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-black shrink-0 mt-0.5"
                        style={{ background: `${group.color}15`, color: group.color }}
                      >
                        {i + 1}
                      </span>
                      {rule}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Related Groups */}
              <div
                className="rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <h3 className="font-black text-sm mb-4" style={{ color: "#F2F2F8" }}>
                  Related Groups
                </h3>
                <div className="space-y-3">
                  {group.relatedGroups.map((rg) => (
                    <a
                      key={rg.id}
                      href={`/groups/${rg.id}`}
                      className="flex items-center gap-3 group/rg"
                    >
                      <span className="text-xl">{rg.emoji}</span>
                      <span
                        className="text-xs font-semibold group-hover/rg:text-[#3a7d56] transition-colors"
                        style={{ color: "#C0C0D8" }}
                      >
                        {rg.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
