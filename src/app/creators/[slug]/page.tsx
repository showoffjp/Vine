import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CreatorProfileActions, { CreatorFollowSidebar } from "@/components/CreatorProfileActions";
import {
  CheckCircle,
  Users,
  PlayCircle,
  FileText,
  Headphones,
  BookOpen,
  ArrowLeft,
} from "lucide-react";

type RecentContentItem = {
  type: "video" | "article" | "devotional";
  title: string;
  views: string;
  time: string;
};

type CreatorProfile = {
  name: string;
  flag: string;
  country: string;
  role: string;
  followers: string;
  posts: number;
  videos: number;
  avatarColors: [string, string];
  gradient: string;
  bio: string;
  tags: string[];
  verified: boolean;
  accentColor: string;
  initials: string;
  aboutParagraphs: string[];
  recentContent: RecentContentItem[];
  relatedCreators: Array<{ name: string; slug: string; role: string }>;
  connectLinks: Array<{ label: string; href: string }>;
  topicSlugs: Array<{ label: string; slug: string }>;
};

const creators: Record<string, CreatorProfile> = {
  "ama-christabel": {
    name: "Ama Christabel",
    flag: "🇬🇭",
    country: "Ghana",
    role: "Bible Teacher & Devotional Author",
    followers: "84,200",
    posts: 847,
    videos: 124,
    avatarColors: ["#00FF88", "#6B4FBB"],
    gradient: "linear-gradient(135deg, #1A1430 0%, #2D1B69 50%, #1A2A0A 100%)",
    bio: "Teaching the unchanging Word in a changing world. From Accra to the global church, I help believers go deeper into Scripture with joy and clarity. I believe every Christian — regardless of education level — can understand and love the Bible.",
    tags: ["Bible Study", "Devotionals", "Women's Ministry", "Ghanaian Church"],
    verified: true,
    accentColor: "#00FF88",
    initials: "AC",
    aboutParagraphs: [
      "Ama Christabel grew up in Accra attending her grandmother's small Pentecostal congregation, where the Bible was read aloud every Sunday and memorized by the children in the pews. That early immersion in Scripture shaped everything that followed — her teaching style, her devotional voice, and her deep conviction that the Word of God is not the exclusive domain of seminarians.",
      "After studying at the University of Ghana and completing a postgraduate diploma in Biblical Studies at Akrofi-Christaller Institute, Ama began writing short devotionals for women in her local church. Within two years, those devotionals had found readers across Africa and the diaspora. Her series on the Psalms — \"Songs From the Deep\" — has been translated into six languages and downloaded over a million times.",
      "Today Ama teaches, writes, and hosts a weekly video series walking through books of the Bible. Her approach is marked by warmth, scholarly rigor, and a remarkable ability to make the ancient world of Scripture feel immediately relevant to the present. She is particularly passionate about equipping women in African churches to become confident readers and teachers of the Bible.",
    ],
    recentContent: [
      { type: "video", title: "The Book of Ruth — Week 4: Love That Crosses Every Line", views: "12.4K", time: "2d ago" },
      { type: "article", title: "Finding Joy in the Psalms When Life Feels Dry", views: "8.1K", time: "5d ago" },
      { type: "devotional", title: "Morning Devotional: Proverbs 31 — More Than Virtue Signaling", views: "6.7K", time: "1w ago" },
    ],
    relatedCreators: [
      { name: "Marcus Osei", slug: "marcus-osei", role: "Bible Teacher" },
      { name: "Ruth Adeyemi", slug: "ruth-adeyemi", role: "Worship Leader" },
      { name: "Eva van der Berg", slug: "eva-van-der-berg", role: "Christian Therapist" },
    ],
    connectLinks: [
      { label: "YouTube", href: "#" },
      { label: "Substack", href: "#" },
      { label: "Instagram", href: "#" },
    ],
    topicSlugs: [
      { label: "#PrayerAndFasting", slug: "prayer-fasting" },
      { label: "#ChristianMentalHealth", slug: "mental-health-god" },
    ],
  },
  "marcus-osei": {
    name: "Marcus Osei",
    flag: "🇬🇭",
    country: "Ghana",
    role: "Bible Teacher",
    followers: "52,000",
    posts: 312,
    videos: 87,
    avatarColors: ["#00FF88", "#8B4513"],
    gradient: "linear-gradient(135deg, #0A1A0A 0%, #1A3A0A 100%)",
    bio: "Making deep theology accessible to everyday believers. Trained at Regent College, Vancouver — now teaching from Accra. My goal is to make Bonhoeffer and Barth as readable as a text message.",
    tags: ["Theology", "Expository Preaching", "Men's Ministry", "Reformed"],
    verified: true,
    accentColor: "#10B981",
    initials: "MO",
    aboutParagraphs: [
      "Marcus Osei spent three years at Regent College in Vancouver, immersed in the works of the great theologians — Barth, Bonhoeffer, Moltmann, Volf. He returned to Accra with one driving question: how do you translate the riches of academic theology into something a bricklayer or a taxi driver can actually use on Monday morning?",
      "That question has defined his ministry ever since. Through his Sunday teaching series, his podcast \"Theology for the Street,\" and his weekly long-form essays, Marcus translates dense theological concepts into plain, powerful language without sacrificing depth or precision. He insists that the failure to make theology accessible is not a failure of the laity — it is a failure of the teacher.",
      "Marcus is particularly interested in Reformed theology and its African expressions, men's spiritual formation, and the relationship between Christian doctrine and public life in West Africa. He is a teaching elder at Cornerstone Reformed Church in Accra and lectures part-time at Akrofi-Christaller Institute of Theology.",
    ],
    recentContent: [
      { type: "video", title: "Bonhoeffer on Cheap Grace — And Why It's Everywhere in African Churches", views: "9.2K", time: "3d ago" },
      { type: "article", title: "What Does It Mean for Men to Lead in the Home? A Theological Rethink", views: "6.4K", time: "6d ago" },
      { type: "devotional", title: "Daily Theology: The Sovereignty of God and Your Monday Morning", views: "4.1K", time: "1w ago" },
    ],
    relatedCreators: [
      { name: "Ama Christabel", slug: "ama-christabel", role: "Bible Teacher & Devotional Author" },
      { name: "Tunde Coker", slug: "tunde-coker", role: "Apologist" },
      { name: "Ruth Adeyemi", slug: "ruth-adeyemi", role: "Worship Leader" },
    ],
    connectLinks: [
      { label: "Podcast", href: "#" },
      { label: "Substack", href: "#" },
      { label: "Twitter/X", href: "#" },
    ],
    topicSlugs: [
      { label: "#PrayerAndFasting", slug: "prayer-fasting" },
      { label: "#GenZFaith", slug: "genz-church" },
    ],
  },
  "tunde-coker": {
    name: "Tunde Coker",
    flag: "🇳🇬",
    country: "Nigeria",
    role: "Apologist",
    followers: "67,000",
    posts: 428,
    videos: 203,
    avatarColors: ["#1A6B2A", "#4FBBAA"],
    gradient: "linear-gradient(135deg, #0A1A14 0%, #1A2A1A 100%)",
    bio: "Defending the faith with grace and intellectual rigor. Former atheist, now devoted to showing that Christianity is the most intellectually defensible worldview on offer. I specialize in Islam-Christianity dialogue and the problem of evil.",
    tags: ["Apologetics", "Philosophy", "Islam & Christianity", "Problem of Evil"],
    verified: true,
    accentColor: "#4FBBAA",
    initials: "TC",
    aboutParagraphs: [
      "Tunde Coker spent his twenties as a committed atheist, reading Dawkins and Hitchens in Lagos and debating Christians online with the zeal of a convert going the wrong direction. The conversion that eventually came — after a long engagement with C.S. Lewis, Alvin Plantinga, and N.T. Wright — was not dramatic in the cinematic sense. It was a slow intellectual capitulation followed by a sudden spiritual surrender.",
      "He now applies the same rigorous analytical mind to defending the faith he once attacked. Tunde holds a master's degree in Philosophy from the University of Lagos and has completed advanced studies in Islamic studies, making him one of the most credible voices in Islam-Christianity dialogue in West Africa. His debates — available on YouTube with over 4 million combined views — are known for their fairness, precision, and complete absence of condescension.",
      "His book \"The God I Never Expected\" — a memoir of his journey from atheism to Christianity — became a bestseller in Nigeria and has been used extensively in university Christian unions across West and East Africa. He teaches at Lagos Business School and speaks regularly at universities, churches, and public forums throughout the continent.",
    ],
    recentContent: [
      { type: "video", title: "Does the Problem of Evil Disprove God? My Full Answer", views: "21.7K", time: "1d ago" },
      { type: "article", title: "What Islam and Christianity Actually Agree On — and Where They Part Ways", views: "14.3K", time: "4d ago" },
      { type: "devotional", title: "The Apologetics of Easter: Why the Resurrection Is History, Not Myth", views: "9.8K", time: "1w ago" },
    ],
    relatedCreators: [
      { name: "Marcus Osei", slug: "marcus-osei", role: "Bible Teacher" },
      { name: "Ama Christabel", slug: "ama-christabel", role: "Bible Teacher & Devotional Author" },
      { name: "Eva van der Berg", slug: "eva-van-der-berg", role: "Christian Therapist" },
    ],
    connectLinks: [
      { label: "YouTube", href: "#" },
      { label: "Podcast", href: "#" },
      { label: "Website", href: "#" },
    ],
    topicSlugs: [
      { label: "#DeconstructionStories", slug: "deconstruction" },
      { label: "#ChristianAIEthics", slug: "christian-ai-ethics" },
    ],
  },
  "eva-van-der-berg": {
    name: "Eva van der Berg",
    flag: "🇳🇱",
    country: "Netherlands",
    role: "Christian Therapist",
    followers: "38,000",
    posts: 289,
    videos: 42,
    avatarColors: ["#4FBBAA", "#1A4A6B"],
    gradient: "linear-gradient(135deg, #0A1A1A 0%, #0A1428 100%)",
    bio: "Licensed therapist and follower of Jesus. I integrate evidence-based psychology with biblical truth to help believers find healing — especially from trauma, anxiety, and religious shame. Mental health care is not the opposite of faith; it's an expression of it.",
    tags: ["Mental Health", "Trauma", "Faith-Based Counseling", "Anxiety"],
    verified: true,
    accentColor: "#4FBBAA",
    initials: "EV",
    aboutParagraphs: [
      "Eva van der Berg trained as a clinical psychologist at the University of Amsterdam before completing a postdoctoral fellowship in trauma-informed care at the Vrije Universiteit. She is a licensed therapist with a private practice in Utrecht and a specialist in the intersection of faith, trauma, and mental health — a territory that is still too rarely mapped with both clinical rigor and theological sensitivity.",
      "Growing up in a conservative Dutch Reformed church, Eva experienced firsthand the damage that can be done when mental health needs are framed as spiritual failures. Her own journey through anxiety and the help she eventually found — both in therapy and in a deepened, more honest faith — became the foundation for her public ministry. She is committed to dismantling the false choice between faith and mental health care that still circulates in many Christian communities.",
      "Eva's approach integrates Cognitive Behavioral Therapy, EMDR for trauma, and attachment theory within a framework that takes both Scripture and neuroscience seriously. Her online courses on healing from religious trauma and anxiety have served thousands of believers across Europe, North America, and Africa. She speaks regularly at churches, conferences, and seminaries and is currently writing her first book on faith and psychological healing.",
    ],
    recentContent: [
      { type: "video", title: "Religious Trauma Is Real: What It Is and How to Begin Healing", views: "17.2K", time: "2d ago" },
      { type: "article", title: "Anxiety and Faith: Stop Choosing Between Them", views: "11.4K", time: "5d ago" },
      { type: "devotional", title: "The God Who Sees: Hagar, Shame, and Being Truly Known", views: "7.3K", time: "1w ago" },
    ],
    relatedCreators: [
      { name: "Ama Christabel", slug: "ama-christabel", role: "Bible Teacher & Devotional Author" },
      { name: "Ruth Adeyemi", slug: "ruth-adeyemi", role: "Worship Leader" },
      { name: "Tunde Coker", slug: "tunde-coker", role: "Apologist" },
    ],
    connectLinks: [
      { label: "Instagram", href: "#" },
      { label: "Substack", href: "#" },
      { label: "Practice Website", href: "#" },
    ],
    topicSlugs: [
      { label: "#ChristianMentalHealth", slug: "mental-health-god" },
      { label: "#GenZFaith", slug: "genz-church" },
    ],
  },
  "sarah-jennings": {
    name: "Sarah Jennings",
    flag: "🇺🇸",
    country: "USA",
    role: "Worship Leader",
    followers: "118,000",
    posts: 412,
    videos: 287,
    avatarColors: ["#6B4FBB", "#BB4F7A"],
    gradient: "linear-gradient(135deg, #1A0A2A 0%, #2A0A1A 100%)",
    bio: "Leading hearts into the presence of God through prophetic worship. Based in Nashville, passionate about creating encounters with Jesus through song. Every song is a prayer.",
    tags: ["Worship Music", "Songwriting", "Charismatic", "Prophetic"],
    verified: true,
    accentColor: "#6B4FBB",
    initials: "SJ",
    aboutParagraphs: [
      "Sarah Jennings grew up in a small Assemblies of God church in rural Tennessee, where the worship was raw, unpolished, and undeniably powerful. She remembers the moment she understood that worship wasn't performance — it was pursuit. She was fourteen. A woman in her congregation began singing a spontaneous song in the middle of a prayer meeting. The whole room shifted. Sarah has been chasing that kind of encounter ever since.",
      "After graduating from Belmont University with a degree in Music Business, Sarah joined the worship team at Cross Point Church in Nashville, where she served for seven years and wrote over forty original songs. Her 2022 album 'Set Apart' debuted at #3 on the Billboard Christian Charts, and its lead single 'You Are Still Here' became an international worship standard.",
      "Sarah is now a sought-after worship leader, speaker, and songwriter who travels globally leading worship at conferences, revival meetings, and large church events. She is particularly passionate about equipping local worship teams to move beyond the performance mindset and into genuine encounter-focused worship.",
    ],
    recentContent: [
      { type: "video", title: "Live Worship Night 2026 — Full Session", views: "34.2K", time: "3d ago" },
      { type: "article", title: "Why Spontaneous Worship Is Not Chaos — It's Faith", views: "12.8K", time: "6d ago" },
      { type: "devotional", title: "Devotional: Worship When You Don't Feel Like It", views: "9.1K", time: "1w ago" },
    ],
    relatedCreators: [
      { name: "Ruth Adeyemi", slug: "ruth-adeyemi", role: "Worship Leader" },
      { name: "Ama Christabel", slug: "ama-christabel", role: "Bible Teacher" },
      { name: "Marcus Osei", slug: "marcus-osei", role: "Bible Teacher" },
    ],
    connectLinks: [
      { label: "Spotify", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "Instagram", href: "#" },
    ],
    topicSlugs: [
      { label: "#PrayerAndFasting", slug: "prayer-fasting" },
      { label: "#GenZFaith", slug: "genz-church" },
    ],
  },
  "ji-yeon-park": {
    name: "Ji-Yeon Park",
    flag: "🇰🇷",
    country: "South Korea",
    role: "Devotional Writer",
    followers: "29,000",
    posts: 624,
    videos: 38,
    avatarColors: ["#4F8FBB", "#1A1A60"],
    gradient: "linear-gradient(135deg, #0A0A1A 0%, #0A1A2A 100%)",
    bio: "Writing devotionals that bridge Eastern thought and biblical truth. From Seoul to the global church, I believe the Holy Spirit speaks through every culture — including mine.",
    tags: ["Devotionals", "Prayer", "Korean Church", "Contemplative"],
    verified: false,
    accentColor: "#4F8FBB",
    initials: "JY",
    aboutParagraphs: [
      "Ji-Yeon Park grew up in a Presbyterian church in Seoul where daily devotional practice was taken as seriously as Sunday attendance. Her grandmother kept a prayer journal for forty years — its worn, ink-stained pages became Ji-Yeon's first encounter with what it looks like to walk with God over a lifetime.",
      "After studying Korean Literature and Theology at Yonsei University, Ji-Yeon began writing short devotionals that drew on both biblical wisdom and the deep vein of contemplative tradition she found in Eastern Christianity and Korean church culture. She has a particular gift for making the interior life of faith accessible — helping readers move from surface-level devotion to genuine encounter with God.",
      "Ji-Yeon writes in Korean and English and has a growing readership across both communities. Her daily devotional newsletter reaches 28,000 subscribers. She is a member of the Presbyterian Church of Korea and leads a women's prayer group in Seoul that has been meeting every Friday morning for six years.",
    ],
    recentContent: [
      { type: "devotional", title: "Morning Devotional: 'Be Still and Know' — What Psalm 46 Says to a Busy World", views: "7.3K", time: "1d ago" },
      { type: "article", title: "The Korean Church's Gift of Prayer — and What the Global Church Can Learn", views: "5.4K", time: "5d ago" },
      { type: "devotional", title: "40 Days of Gratitude: Day 23 — Gratitude for Unanswered Prayers", views: "4.1K", time: "1w ago" },
    ],
    relatedCreators: [
      { name: "Ama Christabel", slug: "ama-christabel", role: "Bible Teacher" },
      { name: "Eva van der Berg", slug: "eva-van-der-berg", role: "Christian Therapist" },
      { name: "Marcus Osei", slug: "marcus-osei", role: "Bible Teacher" },
    ],
    connectLinks: [
      { label: "Newsletter", href: "#" },
      { label: "Instagram", href: "#" },
    ],
    topicSlugs: [
      { label: "#PrayerAndFasting", slug: "prayer-fasting" },
      { label: "#ChristianMentalHealth", slug: "mental-health-god" },
    ],
  },
  "luiz-figueiredo": {
    name: "Luiz Figueiredo",
    flag: "🇧🇷",
    country: "Brazil",
    role: "Youth Pastor",
    followers: "45,000",
    posts: 519,
    videos: 182,
    avatarColors: ["#2A8A2A", "#00FF88"],
    gradient: "linear-gradient(135deg, #0A1A0A 0%, #1A2A0A 100%)",
    bio: "Equipping the next generation of Brazilian believers for mission. Youth pastor in São Paulo who believes Gen Z is not losing faith — they're waiting for the real thing.",
    tags: ["Youth Ministry", "Evangelism", "Discipleship", "Brazilian Church"],
    verified: false,
    accentColor: "#00FF88",
    initials: "LF",
    aboutParagraphs: [
      "Luiz Figueiredo has spent twelve years working with teenagers and young adults in São Paulo, one of the world's largest cities and home to one of the world's most dynamic evangelical churches. He has watched the Brazilian church struggle with the same question facing the global church: how do you disciple a generation whose default mode is digital, whose attention is fragmented, and whose tolerance for inauthenticity is essentially zero?",
      "His answer — developed through years of trial, error, and genuine relationship with hundreds of young people — is that Gen Z is not leaving faith because they are less spiritual. They are leaving because they are more allergic to performance. The youth ministry that reaches them is the one that is ruthlessly honest, deeply relational, and genuinely prayerful.",
      "Luiz leads the youth ministry at Primeira Igreja Batista in São Paulo, where the youth program has grown from 40 to over 400 in six years. He trains youth pastors across Latin America and recently launched a Portuguese-language discipleship platform that serves youth workers in Brazil, Portugal, Angola, and Mozambique.",
    ],
    recentContent: [
      { type: "video", title: "Why Brazilian Gen Z Is Still Coming to Church — And What We Did Differently", views: "18.3K", time: "2d ago" },
      { type: "article", title: "Discipleship That Survives the Smartphone: A Practical Framework", views: "9.7K", time: "5d ago" },
      { type: "devotional", title: "Devo for Youth Leaders: The Temptation to Fake It", views: "5.2K", time: "1w ago" },
    ],
    relatedCreators: [
      { name: "Marcus Osei", slug: "marcus-osei", role: "Bible Teacher" },
      { name: "Tunde Coker", slug: "tunde-coker", role: "Apologist" },
      { name: "Ama Christabel", slug: "ama-christabel", role: "Bible Teacher" },
    ],
    connectLinks: [
      { label: "YouTube", href: "#" },
      { label: "Instagram", href: "#" },
    ],
    topicSlugs: [
      { label: "#GenZFaith", slug: "genz-church" },
      { label: "#Resurrection", slug: "resurrection" },
    ],
  },
  "grace-wanjiku": {
    name: "Grace Wanjiku",
    flag: "🇰🇪",
    country: "Kenya",
    role: "Devotional Writer",
    followers: "22,000",
    posts: 743,
    videos: 21,
    avatarColors: ["#BB4F7A", "#4A1A1A"],
    gradient: "linear-gradient(135deg, #1A0A1A 0%, #2A0A10 100%)",
    bio: "Pouring out the faithfulness of God one story at a time. From Nairobi, I write for the woman who is doing everything right and still feels unseen. God sees you.",
    tags: ["Devotionals", "Women of Faith", "African Church", "Nairobi"],
    verified: false,
    accentColor: "#BB4F7A",
    initials: "GW",
    aboutParagraphs: [
      "Grace Wanjiku began writing in the middle of a personal crisis. Her first child had been stillborn. Her marriage was under strain. And the prosperity gospel she had grown up with — which had promised that faithfulness would be rewarded with flourishing — had nothing meaningful to offer her in that darkness. So she went back to her Bible and started writing, slowly, what she was finding.",
      "Those early posts — raw, honest, theologically searching — found a readership that surprised her. Women across Kenya, and then across East Africa, and then across the diaspora, recognized themselves in what Grace was writing. Here was someone who refused to make faith look easy — and who simultaneously refused to make God look absent.",
      "Grace writes primarily for women navigating loss, disappointment, and the gap between the faith they profess and the life they are living. Her writing is marked by unflinching honesty, deep reverence for Scripture, and a warmth that her readers often describe as like hearing from a wise older sister. She hosts a weekly women's devotional gathering in Nairobi and leads a growing online community.",
    ],
    recentContent: [
      { type: "article", title: "For the Woman Who Prayed and Didn't Get What She Asked For", views: "14.8K", time: "2d ago" },
      { type: "devotional", title: "Morning Reflection: Hannah's Prayer and the Theology of Waiting", views: "8.9K", time: "5d ago" },
      { type: "article", title: "Why I Left the Prosperity Gospel — And What I Found Instead", views: "21.3K", time: "1w ago" },
    ],
    relatedCreators: [
      { name: "Ama Christabel", slug: "ama-christabel", role: "Bible Teacher" },
      { name: "Eva van der Berg", slug: "eva-van-der-berg", role: "Christian Therapist" },
      { name: "Ji-Yeon Park", slug: "ji-yeon-park", role: "Devotional Writer" },
    ],
    connectLinks: [
      { label: "Newsletter", href: "#" },
      { label: "Instagram", href: "#" },
    ],
    topicSlugs: [
      { label: "#ChristianMentalHealth", slug: "mental-health-god" },
      { label: "#MarriageFaith", slug: "marriage-faith" },
    ],
  },
  "ben-harrison": {
    name: "Ben Harrison",
    flag: "🇦🇺",
    country: "Australia",
    role: "Apologist",
    followers: "57,000",
    posts: 381,
    videos: 219,
    avatarColors: ["#4F8FBB", "#1A3A1A"],
    gradient: "linear-gradient(135deg, #0A1428 0%, #0A1A0A 100%)",
    bio: "Showing that Christianity is not only livable — it's intellectually compelling. Sydney-based apologist, science communicator, and recovering skeptic. Formerly worked in marine biology.",
    tags: ["Apologetics", "Science & Faith", "Atheism", "Evolution"],
    verified: true,
    accentColor: "#3B82F6",
    initials: "BH",
    aboutParagraphs: [
      "Ben Harrison has the unusual biography of a scientist who became a Christian in his mid-thirties — not despite his scientific training but partially because of it. A marine biologist by education, Ben spent years assuming that science and faith were incompatible. His deconstruction of that assumption began with reading Francis Collins and concluded several years later with a late-night conversation with a Presbyterian elder in a pub in Sydney.",
      "He now operates at the interface of science, philosophy, and Christian faith, helping Christians engage the intellectual challenges that arise from living in a secular, scientifically sophisticated culture. His YouTube channel — 'Evidence and Faith' — has over 800,000 subscribers and is known for its combination of scientific rigor, philosophical precision, and genuine pastoral warmth.",
      "Ben holds a PhD in Marine Biology from the University of New South Wales and studied theology part-time at Moore Theological College in Sydney. He lectures in both contexts — a fact that continues to baffle and delight colleagues in both fields. He is a member of the Anglican Church of Australia and speaks regularly at churches, universities, and public forums.",
    ],
    recentContent: [
      { type: "video", title: "Can You Be a Scientist and a Christian? My Honest Answer After 15 Years", views: "29.4K", time: "1d ago" },
      { type: "article", title: "Francis Collins Was Right: The Language of God Still Holds", views: "17.2K", time: "4d ago" },
      { type: "video", title: "The Fine-Tuning Argument Explained Without the Jargon", views: "22.1K", time: "1w ago" },
    ],
    relatedCreators: [
      { name: "Tunde Coker", slug: "tunde-coker", role: "Apologist" },
      { name: "Marcus Osei", slug: "marcus-osei", role: "Bible Teacher" },
      { name: "Ama Christabel", slug: "ama-christabel", role: "Bible Teacher" },
    ],
    connectLinks: [
      { label: "YouTube", href: "#" },
      { label: "Podcast", href: "#" },
      { label: "Website", href: "#" },
    ],
    topicSlugs: [
      { label: "#Resurrection", slug: "resurrection" },
      { label: "#ChristianAIEthics", slug: "christian-ai-ethics" },
    ],
  },
  "carlos-mendoza": {
    name: "Carlos Mendoza",
    flag: "🇨🇴",
    country: "Colombia",
    role: "Marriage Counselor",
    followers: "31,000",
    posts: 287,
    videos: 94,
    avatarColors: ["#00FF88", "#BB4F4F"],
    gradient: "linear-gradient(135deg, #0A1A0A 0%, #1A0A0A 100%)",
    bio: "Helping couples build Christ-centered, lasting covenant marriages. Biblical counselor in Bogotá, working at the intersection of faith, trauma, and relationship healing.",
    tags: ["Marriage", "Family", "Biblical Counseling", "Covenant"],
    verified: false,
    accentColor: "#10B981",
    initials: "CM",
    aboutParagraphs: [
      "Carlos Mendoza came to marriage counseling through the hardest door: his own marriage nearly ended in its third year. The couple who sat across from their pastor in Bogotá — struggling to communicate, carrying wounds from very different family systems — eventually found their way through. That journey, and the counselor who walked it with them, changed the trajectory of Carlos's life.",
      "He retrained as a biblical counselor, completing a certificate program through the Association of Certified Biblical Counselors and studying pastoral care at the South American Theological Seminary in Londrina. Today his practice in Bogotá serves couples across the full spectrum of need — from premarital preparation to crisis intervention. He sees approximately fifteen couples per week and trains pastoral counselors across Colombia.",
      "Carlos is particularly interested in the intersection of cultural expectations around marriage — especially the machismo tradition that is both culturally pervasive and often spiritually validated — and the genuinely countercultural vision of marriage that Jesus and Paul present in Scripture. His work is marked by directness, compassion, and zero tolerance for the kind of advice that keeps people in harmful situations.",
    ],
    recentContent: [
      { type: "video", title: "The 3 Conversations Every Couple Needs to Have Before They Break Down", views: "19.3K", time: "2d ago" },
      { type: "article", title: "Is Divorce Ever the Right Answer? A Biblical Counselor's Honest Take", views: "24.7K", time: "5d ago" },
      { type: "devotional", title: "For Couples: The Servant-Leadership Model Is Not What You Think", views: "8.4K", time: "1w ago" },
    ],
    relatedCreators: [
      { name: "Eva van der Berg", slug: "eva-van-der-berg", role: "Christian Therapist" },
      { name: "Grace Wanjiku", slug: "grace-wanjiku", role: "Devotional Writer" },
      { name: "Ama Christabel", slug: "ama-christabel", role: "Bible Teacher" },
    ],
    connectLinks: [
      { label: "Instagram", href: "#" },
      { label: "Podcast", href: "#" },
    ],
    topicSlugs: [
      { label: "#MarriageFaith", slug: "marriage-faith" },
      { label: "#ChristianMentalHealth", slug: "mental-health-god" },
    ],
  },
  "priya-rajan": {
    name: "Priya Rajan",
    flag: "🇮🇳",
    country: "India",
    role: "Bible Teacher",
    followers: "19,000",
    posts: 438,
    videos: 72,
    avatarColors: ["#E07030", "#6B4FBB"],
    gradient: "linear-gradient(135deg, #1A0A00 0%, #1A0A2A 100%)",
    bio: "Bringing the light of Christ to the subcontinent through the Word. From Chennai, teaching New Testament women's Bible study to believers across South Asia and the diaspora.",
    tags: ["Women's Ministry", "New Testament", "Indian Church", "Tamil"],
    verified: false,
    accentColor: "#E07030",
    initials: "PR",
    aboutParagraphs: [
      "Priya Rajan grew up in a small CSI (Church of South India) congregation in Chennai, the daughter of a Tamil pastor who read the Bible aloud at the dinner table every night. She credits her love of Scripture to those dinner-table readings — not because they were especially dramatic, but because they were consistent, year after year, until the cadences of Paul and the Psalms became the background music of her inner life.",
      "After studying English Literature at Madras Christian College and completing a theology diploma at Union Biblical Seminary in Pune, Priya began teaching women's Bible study at her local church. What started as a small group of twelve women grew, over several years, into a network of women's study groups across Tamil Nadu. She now teaches primarily online, where her quiet, precise, deeply careful approach to Scripture has found a following among Tamil Christian women around the world.",
      "Priya specializes in the New Testament letters, particularly Paul's letters to women-led churches and his theology of the body of Christ. She is particularly concerned with what she calls 'the invisibility problem' — the tendency of global Christian culture to treat male Western voices as the default authorities on Scripture, marginalizing the insights of women, and of the Global South church, in the process. Her teaching aims to correct that imbalance, one Bible study at a time.",
    ],
    recentContent: [
      { type: "devotional", title: "Galatians 3:28 and What It Still Hasn't Resolved — A Tamil Perspective", views: "6.8K", time: "2d ago" },
      { type: "article", title: "What the Indian Church Sees in the New Testament That the West Misses", views: "9.2K", time: "5d ago" },
      { type: "video", title: "Women in the New Testament: A Fresh Look at Phoebe, Junia, and Priscilla", views: "11.4K", time: "1w ago" },
    ],
    relatedCreators: [
      { name: "Ama Christabel", slug: "ama-christabel", role: "Bible Teacher" },
      { name: "Grace Wanjiku", slug: "grace-wanjiku", role: "Devotional Writer" },
      { name: "Ji-Yeon Park", slug: "ji-yeon-park", role: "Devotional Writer" },
    ],
    connectLinks: [
      { label: "Newsletter", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    topicSlugs: [
      { label: "#MarriageFaith", slug: "marriage-faith" },
      { label: "#ChristianMentalHealth", slug: "mental-health-god" },
    ],
  },
  "joel-pastrana": {
    name: "Joel Pastrana",
    flag: "🇵🇭",
    country: "Philippines",
    role: "Missionary",
    followers: "14,000",
    posts: 198,
    videos: 67,
    avatarColors: ["#4FBBAA", "#4F8FBB"],
    gradient: "linear-gradient(135deg, #0A1A1A 0%, #0A0A1A 100%)",
    bio: "Planting churches across the unreached islands of Southeast Asia. Based in Mindanao. I document the real challenges and real miracles of frontier missions for those called to pray and give.",
    tags: ["Missions", "Church Planting", "Southeast Asia", "Unreached Peoples"],
    verified: false,
    accentColor: "#4FBBAA",
    initials: "JP",
    aboutParagraphs: [
      "Joel Pastrana grew up in Manila in a large Catholic family. His conversion to Protestant Christianity came through a university campus ministry, and his call to missions came through a short-term trip to a remote island in Mindanao where a small group of new believers had no pastor, no Bible in their language, and no one to help them grow. Joel came back changed.",
      "After completing theological training at the Asian Theological Seminary in Manila, Joel and his wife Cecilia moved to Mindanao, where they have spent the past eight years planting churches in communities with little to no evangelical presence. They have seen four congregations established, three of which are now self-sustaining and led by local pastors. They currently focus on Muslim-background believers, one of the most sensitive and courageous mission fields in Southeast Asia.",
      "Joel documents his work publicly — the breakthroughs and the setbacks — for a simple reason: he believes the global church needs to see what frontier missions actually looks like. It's not cinematic. It's slow, costly, and full of quiet faithfulness. But it is also occasionally marked by miracles that no one has a naturalistic explanation for.",
    ],
    recentContent: [
      { type: "video", title: "What a Muslim-Background Believer's Baptism Looks Like — And the Cost He Paid", views: "31.7K", time: "3d ago" },
      { type: "article", title: "The Problem With Short-Term Mission Trips (And How to Do Them Right)", views: "14.2K", time: "6d ago" },
      { type: "devotional", title: "Field Devotional: Matthew 10:16 — Sent as Lambs Among Wolves", views: "6.8K", time: "1w ago" },
    ],
    relatedCreators: [
      { name: "Tunde Coker", slug: "tunde-coker", role: "Apologist" },
      { name: "Marcus Osei", slug: "marcus-osei", role: "Bible Teacher" },
      { name: "Luiz Figueiredo", slug: "luiz-figueiredo", role: "Youth Pastor" },
    ],
    connectLinks: [
      { label: "Newsletter", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    topicSlugs: [
      { label: "#GenZFaith", slug: "genz-church" },
      { label: "#Resurrection", slug: "resurrection" },
    ],
  },
  "ruth-adeyemi": {
    name: "Ruth Adeyemi",
    flag: "🇬🇧",
    country: "UK",
    role: "Worship Leader",
    followers: "73,000",
    posts: 198,
    videos: 312,
    avatarColors: ["#6B4FBB", "#00FF88"],
    gradient: "linear-gradient(135deg, #1A0A2A 0%, #0A1A14 100%)",
    bio: "Crafting anthems of praise that move both heaven and earth. Nigerian-British worship leader based in London. I write songs that emerge from the collision of African gospel tradition and contemporary worship — recorded in London, sung in Lagos, Accra, and Houston.",
    tags: ["Worship", "Gospel", "African Diaspora", "Songwriting"],
    verified: true,
    accentColor: "#6B4FBB",
    initials: "RA",
    aboutParagraphs: [
      "Ruth Adeyemi grew up between two worlds — the Yoruba-speaking Redeemed Christian Church of God congregation her parents attended in Peckham, and the Church of England school where she sang in the choir and learned to read music. That collision of traditions never resolved; it deepened. And it became the source of everything she creates.",
      "After studying music at the Royal Academy in London, Ruth spent four years leading worship at a multicultural evangelical church in Brixton before her original songs began circulating beyond the church walls. Her debut EP \"New Every Morning\" — recorded live in a railway arch in Bermondsey — found its way onto Christian playlists in Lagos, Accra, Houston, and Seoul. The song \"Faithful\" has been translated into fourteen languages.",
      "Ruth is now based in London but travels extensively for recording, speaking, and leading worship at festivals and conferences. She is passionate about the particular gift that the African diaspora brings to global Christian worship — a joyful, embodied, communal tradition that she believes the Western church desperately needs. She leads worship regularly at churches and events across the UK, Nigeria, and the United States.",
    ],
    recentContent: [
      { type: "video", title: "Live Worship Session: 'Faithful' + New Song Premiere", views: "28.9K", time: "1d ago" },
      { type: "article", title: "Why African Gospel Needs to Lead the Global Worship Conversation", views: "13.1K", time: "4d ago" },
      { type: "devotional", title: "Devotional: When Praise Feels Impossible — Habakkuk 3", views: "8.4K", time: "1w ago" },
    ],
    relatedCreators: [
      { name: "Ama Christabel", slug: "ama-christabel", role: "Bible Teacher & Devotional Author" },
      { name: "Marcus Osei", slug: "marcus-osei", role: "Bible Teacher" },
      { name: "Eva van der Berg", slug: "eva-van-der-berg", role: "Christian Therapist" },
    ],
    connectLinks: [
      { label: "Spotify", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "Instagram", href: "#" },
    ],
    topicSlugs: [
      { label: "#PrayerAndFasting", slug: "prayer-fasting" },
      { label: "#GenZFaith", slug: "genz-church" },
    ],
  },
};

const contentIcons = {
  video: PlayCircle,
  article: FileText,
  devotional: Headphones,
};

export async function generateStaticParams() {
  return Object.keys(creators).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const creator = creators[slug];
  if (!creator) return { title: "Creator Not Found — Vine" };
  return {
    title: `${creator.name} — Vine`,
    description: creator.bio.slice(0, 160),
  };
}

export default async function CreatorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const creator = creators[slug];

  if (!creator) {
    return (
      <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
        <Navbar />
        <div className="page-body pb-24 flex flex-col items-center justify-center text-center px-4">
          <p className="text-7xl mb-6">🔍</p>
          <h1 className="text-3xl font-black mb-3">Creator Not Found</h1>
          <p className="mb-8 text-base" style={{ color: "#6A6A88" }}>
            We could not find a creator with that profile URL.
          </p>
          <a
            href="/creators"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm"
            style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)", color: "#07070F" }}
          >
            <ArrowLeft size={14} /> Back to Creators
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  const accent = creator.accentColor;

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />

      <main className="page-body pb-24">
        {/* ── Cover Banner ── */}
        <div
          className="relative h-52 sm:h-64"
          style={{ background: creator.gradient }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 60% 80% at 20% 50%, ${accent}22 0%, transparent 60%)`,
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-24"
            style={{ background: "linear-gradient(to top, #07070F, transparent)" }}
          />

          {/* Back link inside banner */}
          <div className="absolute top-5 left-4 sm:left-8">
            <a
              href="/creators"
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm transition-opacity hover:opacity-100 opacity-80"
              style={{ background: "rgba(7,7,15,0.5)", color: "#F2F2F8", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <ArrowLeft size={12} /> All Creators
            </a>
          </div>
        </div>

        {/* ── Profile Header ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative">
          <div className="flex flex-col sm:flex-row sm:items-end gap-5 mb-8">
            {/* Avatar */}
            <div
              className="w-28 h-28 rounded-2xl flex items-center justify-center text-3xl font-black flex-shrink-0 relative z-10"
              style={{
                background: `linear-gradient(135deg, ${creator.avatarColors[0]} 0%, ${creator.avatarColors[1]} 100%)`,
                border: "3px solid #07070F",
                color: "#07070F",
              }}
            >
              {creator.initials}
            </div>

            {/* Name / Meta */}
            <div className="flex-1 pb-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="text-2xl sm:text-3xl font-black" style={{ color: "#F2F2F8" }}>
                  {creator.name}
                </h1>
                <span className="text-xl">{creator.flag}</span>
                <span className="text-sm" style={{ color: "#6A6A88" }}>
                  {creator.country}
                </span>
                {creator.verified && (
                  <CheckCircle size={17} style={{ color: "#00FF88" }} />
                )}
              </div>
              <p className="text-sm mb-3" style={{ color: "#8A8AA8" }}>
                {creator.role}
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-6">
                {[
                  { label: "Followers", value: creator.followers },
                  { label: "Posts", value: creator.posts.toLocaleString() },
                  { label: "Videos", value: creator.videos.toLocaleString() },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-lg font-black" style={{ color: "#F2F2F8" }}>
                      {s.value}
                    </p>
                    <p className="text-xs" style={{ color: "#6A6A88" }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <CreatorProfileActions accent={accent} />
          </div>

          {/* ── Two-column layout ── */}
          <div className="flex gap-8 flex-col lg:flex-row">
            {/* ── Main Column ── */}
            <div className="flex-1 min-w-0 space-y-8">
              {/* Bio */}
              <div
                className="rounded-2xl p-6"
                style={{ background: "#12121F", border: "1px solid #1E1E32" }}
              >
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#C0C0D8", lineHeight: "1.85" }}>
                  {creator.bio}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {creator.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full font-semibold"
                      style={{
                        background: `${accent}15`,
                        color: accent,
                        border: `1px solid ${accent}30`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recent Content */}
              <div>
                <h2 className="text-base font-black mb-4" style={{ color: "#F2F2F8" }}>
                  Recent Content
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {creator.recentContent.map((item) => {
                    const Icon = contentIcons[item.type];
                    return (
                      <div
                        key={item.title}
                        className="rounded-xl p-4 flex flex-col gap-3 cursor-pointer transition-all hover:bg-white/[0.03]"
                        style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: `${accent}18` }}
                        >
                          <Icon size={18} style={{ color: accent }} />
                        </div>
                        <div>
                          <p
                            className="text-xs font-bold uppercase tracking-wide mb-1"
                            style={{ color: accent }}
                          >
                            {item.type}
                          </p>
                          <p className="text-sm font-semibold leading-snug" style={{ color: "#E0E0F0" }}>
                            {item.title}
                          </p>
                          <p className="text-[11px] mt-1.5" style={{ color: "#6A6A88" }}>
                            {item.views} views · {item.time}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* About */}
              <div>
                <h2 className="text-base font-black mb-4" style={{ color: "#F2F2F8" }}>
                  About {creator.name.split(" ")[0]}
                </h2>
                <div
                  className="rounded-2xl p-6 space-y-4"
                  style={{ background: "#12121F", border: "1px solid #1E1E32" }}
                >
                  {creator.aboutParagraphs.map((para, i) => (
                    <p key={i} className="text-sm leading-relaxed" style={{ color: "#A0A0C0", lineHeight: "1.85" }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <aside className="lg:w-64 xl:w-72 shrink-0 space-y-5">
              {/* Connect */}
              <div
                className="rounded-2xl p-4"
                style={{ background: "#12121F", border: "1px solid #1E1E32" }}
              >
                <h4
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: accent }}
                >
                  Connect
                </h4>
                <div className="space-y-2">
                  {creator.connectLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center justify-between text-xs font-semibold px-3 py-2 rounded-lg transition-all hover:opacity-80"
                      style={{
                        background: `${accent}10`,
                        color: accent,
                        border: `1px solid ${accent}20`,
                        textDecoration: "none",
                      }}
                    >
                      {link.label}
                      <span style={{ color: `${accent}80` }}>→</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Related Creators */}
              <div
                className="rounded-2xl p-4"
                style={{ background: "#12121F", border: "1px solid #1E1E32" }}
              >
                <h4
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "#00FF88" }}
                >
                  You Might Also Like
                </h4>
                <div className="space-y-3">
                  {creator.relatedCreators.map((rel) => (
                    <a
                      key={rel.slug}
                      href={`/creators/${rel.slug}`}
                      className="flex items-center gap-3 group"
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black flex-shrink-0"
                        style={{ background: "rgba(0,255,136,0.15)", color: "#00FF88" }}
                      >
                        <BookOpen size={14} />
                      </div>
                      <div className="min-w-0">
                        <p
                          className="text-xs font-bold truncate transition-colors group-hover:text-[#00FF88]"
                          style={{ color: "#E0E0F0" }}
                        >
                          {rel.name}
                        </p>
                        <p className="text-[10px] truncate" style={{ color: "#6A6A88" }}>
                          {rel.role}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Topics */}
              <div
                className="rounded-2xl p-4"
                style={{ background: "#12121F", border: "1px solid #1E1E32" }}
              >
                <h4
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "#00FF88" }}
                >
                  Topics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {creator.topicSlugs.map((t) => (
                    <a
                      key={t.slug}
                      href={`/topics/${t.slug}`}
                      className="text-[11px] font-semibold px-3 py-1 rounded-full transition-opacity hover:opacity-80"
                      style={{
                        background: "rgba(107,79,187,0.12)",
                        color: "#9B7FEB",
                        border: "1px solid rgba(107,79,187,0.22)",
                        textDecoration: "none",
                      }}
                    >
                      {t.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Community CTA */}
              <div
                className="rounded-2xl p-5 text-center"
                style={{
                  background: `linear-gradient(135deg, ${accent}0A 0%, rgba(7,7,15,1) 100%)`,
                  border: `1px solid ${accent}20`,
                }}
              >
                <Users size={24} className="mx-auto mb-2" style={{ color: accent }} />
                <p className="font-bold text-sm mb-1" style={{ color: "#F2F2F8" }}>
                  Join {creator.name.split(" ")[0]}&rsquo;s Community
                </p>
                <CreatorFollowSidebar accent={accent} followers={creator.followers} />
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
