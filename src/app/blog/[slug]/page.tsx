import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, Eye, MessageSquare, Heart, Share2, Bookmark, ChevronRight, ArrowLeft } from "lucide-react";

const articles: Record<string, {
  title: string; excerpt: string; author: string; role: string; avatar: string; avatarColor: string;
  date: string; readTime: string; views: string; comments: number; category: string; categoryColor: string;
  tags: string[]; content: Array<{ type: "h2" | "p" | "quote" | "verse"; text: string; attribution?: string }>;
  related: Array<{ title: string; slug: string; readTime: string; category: string; categoryColor: string }>;
}> = {
  "why-the-resurrection-changes-everything": {
    title: "Why the Resurrection Changes Everything — Not Just After Death",
    excerpt: "Paul's declaration in 1 Corinthians 15 isn't a footnote to Christianity — it's the entire foundation.",
    author: "Dr. Marcus Webb",
    role: "Professor of Biblical Studies, Oxford",
    avatar: "MW",
    avatarColor: "#6B4FBB",
    date: "May 24, 2026",
    readTime: "8 min read",
    views: "24.3k",
    comments: 142,
    category: "Theology",
    categoryColor: "#6B4FBB",
    tags: ["Resurrection", "Theology", "Easter", "1 Corinthians"],
    content: [
      { type: "p", text: "Paul didn't hedge when he wrote to the Corinthians. 'If Christ has not been raised,' he declared, 'your faith is futile and you are still in your sins.' That's not the language of a theological footnote. That's the language of someone who understands that everything stands or falls on a single historical fact." },
      { type: "h2", text: "Not Just a Future Promise" },
      { type: "p", text: "The popular presentation of the resurrection is almost entirely about the afterlife — a guarantee that we too will rise one day. And that's true. But it profoundly undersells what Paul is doing in 1 Corinthians 15 and Romans 6. The resurrection isn't just a future promise; it's the engine of present-day Christian living." },
      { type: "quote", text: "We were buried therefore with him by baptism into death, in order that, just as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life.", attribution: "Romans 6:4" },
      { type: "p", text: "Notice the grammar: 'we too might walk in newness of life.' Present tense. The resurrection of Jesus isn't only about what happens when we die — it's the basis for how we live right now. The same power that raised Jesus from the dead is the power available to Christians for daily, ordinary faithfulness." },
      { type: "h2", text: "The Historical Question Is Primary" },
      { type: "p", text: "This is why apologists like N.T. Wright, Gary Habermas, and Michael Licona spend so much time on the historical case for the empty tomb and the post-resurrection appearances. They're not doing this as an academic exercise. They're defending the very foundation of Christian ethics, identity, and hope." },
      { type: "p", text: "If Jesus didn't rise, Christianity doesn't just lose its afterlife component — it loses everything. It becomes just another ancient teacher with good advice. The resurrection is what distinguishes Jesus from Socrates, from the Buddha, from every other moral philosopher in history." },
      { type: "h2", text: "What This Means for Monday Morning" },
      { type: "p", text: "Practically, this means the resurrection should rewire how we think about suffering, work, relationships, and death itself. Christians can look at suffering differently because they know the final verdict has already been pronounced. They can work with purpose because they know their labor 'is not in vain in the Lord' (1 Cor 15:58). They can face death without terror because they know it has been defeated." },
      { type: "verse", text: "Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain.", attribution: "1 Corinthians 15:58" },
      { type: "p", text: "The resurrection isn't a belief we hold at arm's length, to be deployed at funerals and Easter services. It's the lived reality that should permeate everything we do — every Monday morning, every conflict, every act of service, every moment of doubt." },
    ],
    related: [
      { title: "The Problem of Evil: Why Suffering Doesn't Disprove God", slug: "problem-of-evil", readTime: "10 min", category: "Apologetics", categoryColor: "#EF4444" },
      { title: "N.T. Wright's Resurrection Case — A Summary", slug: "nt-wright-resurrection", readTime: "7 min", category: "Theology", categoryColor: "#6B4FBB" },
      { title: "Historical Evidence for the Empty Tomb", slug: "empty-tomb-evidence", readTime: "12 min", category: "Apologetics", categoryColor: "#EF4444" },
    ],
  },
  "ai-chatgpt-church": {
    title: "AI, ChatGPT, and the Church: A Faithful Reckoning",
    excerpt: "Artificial intelligence isn't going away. Three frameworks for thinking about AI through a biblical lens.",
    author: "James Okafor",
    role: "Technology ethicist & pastor",
    avatar: "JO",
    avatarColor: "#3B82F6",
    date: "May 22, 2026",
    readTime: "9 min read",
    views: "32.1k",
    comments: 217,
    category: "Culture",
    categoryColor: "#3B82F6",
    tags: ["Technology", "Ethics", "Church", "AI"],
    content: [
      { type: "p", text: "My congregation has questions I wasn't trained to answer in seminary. 'Pastor, is it okay to use ChatGPT to write my sermon outline?' 'Should I use AI to help me journal?' 'Is artificial intelligence a threat to what it means to be human?' These aren't fringe concerns anymore. They're Tuesday night Bible study questions." },
      { type: "h2", text: "Framework 1: Technology as Tool, Not Master" },
      { type: "p", text: "The Bible doesn't address AI directly, but it has a great deal to say about tools and their proper place. Paul's exhortation in 1 Corinthians 10:23 — 'all things are lawful, but not all things are helpful' — is a good starting point. AI is a tool, and like all tools, its moral weight lies in how it's used." },
      { type: "quote", text: "All things are lawful, but not all things are helpful. All things are lawful, but not all things build up.", attribution: "1 Corinthians 10:23" },
      { type: "p", text: "The danger with AI — and it's a real danger — is that we let it become a substitute for the hard, slow, deeply human work of spiritual formation. Using AI to explore a Bible passage is different from using AI to replace your own wrestling with the text." },
      { type: "h2", text: "Framework 2: The Image of God and What Makes Us Human" },
      { type: "p", text: "Christian anthropology has always emphasized that humans are uniquely made in the image of God — the imago Dei. This has implications for how we think about AI. Machines can process language. They cannot love. They can mimic creativity. They cannot worship. The distinction matters." },
      { type: "h2", text: "Framework 3: Wisdom Over Fear" },
      { type: "p", text: "The Church's historical response to new technologies has often been fear first, engagement second. This has not served us well. The printing press, the radio, the internet — in each case, Christians who engaged thoughtfully were better positioned to use the technology for the Kingdom than those who simply retreated." },
      { type: "p", text: "The question is not whether AI will reshape how we communicate, learn, and work — it already has. The question is whether the Church will engage that transformation with wisdom, grace, and clarity about what it means to be human." },
    ],
    related: [
      { title: "Can an AI Have a Soul? A Biblical Anthropology", slug: "ai-have-soul", readTime: "8 min", category: "Apologetics", categoryColor: "#EF4444" },
      { title: "The Digital Sabbath: How to Rest in a Hyper-Connected World", slug: "digital-sabbath", readTime: "6 min", category: "Life & Faith", categoryColor: "#00FF88" },
    ],
  },
  "problem-of-evil": {
    title: "The Problem of Evil: Why Suffering Doesn't Disprove God",
    excerpt: "The oldest objection to theism deserves a serious answer. Philosophers from Plantinga to C.S. Lewis have shown that suffering and an all-good God are not only compatible — they may be inseparable.",
    author: "Dr. Priya Singh",
    role: "Philosopher of Religion, Cambridge",
    avatar: "PS",
    avatarColor: "#6B4FBB",
    date: "May 23, 2026",
    readTime: "10 min read",
    views: "18.7k",
    comments: 203,
    category: "Apologetics",
    categoryColor: "#EF4444",
    tags: ["Theodicy", "Suffering", "Apologetics", "Philosophy"],
    content: [
      { type: "p", text: "The problem of evil is the most emotionally powerful objection to the existence of God. If God is all-powerful, all-knowing, and all-good, why does suffering exist? It's a question that has been pressed by philosophers since Epicurus and repeated by every person who has ever sat in a hospital waiting room or stood at a graveside. It deserves a serious, rigorous answer — not a platitude." },
      { type: "h2", text: "Plantinga's Free Will Defense" },
      { type: "p", text: "In the 1970s, philosopher Alvin Plantinga decisively shifted the terms of the debate. His Free Will Defense argues that God, even if omnipotent, cannot create free creatures who always choose good — that would be a logical contradiction, like a married bachelor. The existence of moral evil (evil caused by human choices) is therefore consistent with the existence of an omnipotent, benevolent God. Plantinga showed that the 'logical problem of evil' — the claim that God and evil cannot coexist — had not been successfully established." },
      { type: "quote", text: "It is possible that God, even being omnipotent, could not create a world with free creatures who always do what is right.", attribution: "Alvin Plantinga, The Nature of Necessity" },
      { type: "h2", text: "C.S. Lewis and the Problem of Pain" },
      { type: "p", text: "C.S. Lewis approached the question from a more pastoral direction in The Problem of Pain. Lewis argued that a world without suffering would also be a world without real virtue, genuine love, or the possibility of moral growth. Pain, he suggested, is 'God's megaphone to rouse a deaf world.' This doesn't make suffering pleasant or easy — Lewis himself would later wrestle agonizingly with these ideas after his wife's death, documented in A Grief Observed. But it suggests that suffering is not philosophically incompatible with a good God." },
      { type: "h2", text: "Logical vs. Evidential Problems" },
      { type: "p", text: "Philosophers now distinguish between two versions of the problem. The logical problem — that God and evil cannot both exist — is widely considered defeated, largely thanks to Plantinga. The evidential problem is more modest: it claims that the amount and distribution of suffering in the world makes God's existence improbable, even if not impossible. This is a more serious challenge, but it requires atheists to make confident claims about what God would or wouldn't permit — claims that are difficult to justify." },
      { type: "h2", text: "When Suffering Is Personal, Not Philosophical" },
      { type: "p", text: "The philosophical arguments matter, but they are rarely what someone in acute grief needs first. There is an important distinction between the intellectual problem of evil and the existential problem of suffering. Theodicy — the attempt to justify God's ways — is a valid intellectual enterprise. But when a friend has lost a child, what they need is not a philosophical argument. They need presence, prayer, and a community that mourns with those who mourn. The Christian answer to suffering is not only an argument; it is the cross — a God who entered suffering, not merely a God who permitted it from a distance." },
      { type: "verse", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", attribution: "Romans 8:28" },
    ],
    related: [
      { title: "Why the Resurrection Changes Everything...", slug: "why-the-resurrection-changes-everything", readTime: "8 min", category: "Theology", categoryColor: "#6B4FBB" },
      { title: "How Do You Handle Doubt Without Losing Faith?", slug: "faith-and-doubt", readTime: "7 min", category: "Life & Faith", categoryColor: "#00FF88" },
    ],
  },
  "digital-sabbath": {
    title: "The Digital Sabbath: How to Rest in a Hyper-Connected World",
    excerpt: "Your phone has colonized Sunday. Reclaiming the ancient practice of Sabbath may be the most countercultural — and spiritually transformative — thing you do this week.",
    author: "Rachel Kim",
    role: "Spiritual director & author",
    avatar: "RK",
    avatarColor: "#EC4899",
    date: "May 21, 2026",
    readTime: "6 min read",
    views: "41.2k",
    comments: 389,
    category: "Life & Faith",
    categoryColor: "#00FF88",
    tags: ["Sabbath", "Tech", "Rest", "Spiritual Discipline"],
    content: [
      { type: "p", text: "Last Sunday morning I reached for my phone before I reached for my Bible. I checked email during the sermon — just a quick glance. I posted a photo from the fellowship lunch before I'd finished eating it. By the time Sunday evening came, I felt not rested but strangely depleted. My phone had colonized the one day I had set aside to stop. Sound familiar?" },
      { type: "h2", text: "What Shabbat Actually Means" },
      { type: "p", text: "The Hebrew word Shabbat comes from a root meaning 'to stop' or 'to cease.' It's not primarily about rest in the sense of sleep or leisure — it's about ceasing productive activity and creating space for a different kind of being. When God rested on the seventh day, it wasn't because he was tired. It was because he was done. He stopped making things and simply was. The Sabbath invites us into that same posture: not doing, just being — and being with God." },
      { type: "verse", text: "Remember the Sabbath day by keeping it holy. Six days you shall labor and do all your work, but the seventh day is a sabbath to the Lord your God. On it you shall not do any work.", attribution: "Exodus 20:8–10" },
      { type: "h2", text: "The 24-Hour Experiment" },
      { type: "p", text: "Three years ago I tried my first intentional digital Sabbath — 24 hours without my phone, from Saturday sundown to Sunday sundown. The first hour felt like withdrawal. The second hour I realized I was noticing things: the quality of light in the late afternoon, the sound of my neighbor's wind chimes, the way my kids talked to each other when I wasn't half-present. By Sunday morning I arrived at worship genuinely hungry — not just going through motions but actually seeking something." },
      { type: "h2", text: "Silence as Invitation" },
      { type: "p", text: "The spiritual directors in the Christian contemplative tradition understood something we have largely forgotten: silence is not the absence of something, it's the presence of something. When we turn off the noise — the notifications, the feeds, the background hum of connectivity — we don't encounter emptiness. We encounter God. Or rather, we encounter God more clearly, because we've stopped drowning him out. Elijah heard God not in the earthquake or the fire, but in the still small voice. You cannot hear a still small voice while your phone is buzzing." },
      { type: "h2", text: "How to Start" },
      { type: "p", text: "You don't have to go cold turkey. Begin with a two-hour window on Sunday afternoon — phone in a drawer, no screens. Then try a morning. Then a full day. Tell your family or a friend so there's accountability. The resistance you feel in the first few attempts is diagnostic: it reveals how thoroughly our devices have occupied the space that was meant for God. That resistance is exactly why the practice is worth persisting through. The soul that learns to be quiet in a noisy world has discovered a superpower." },
    ],
    related: [
      { title: "AI, ChatGPT, and the Church", slug: "ai-chatgpt-church", readTime: "9 min", category: "Culture", categoryColor: "#3B82F6" },
    ],
  },
  "prayer-that-works": {
    title: "Prayer That Actually Works: Moving Beyond the Shopping List",
    excerpt: "Most of us learned to pray by listing requests. But the ancient Christian tradition — and Jesus himself — points to something richer, stranger, and more transformative.",
    author: "Bishop Emmanuel Adeyemi",
    role: "Archbishop, Lagos Christian Fellowship",
    avatar: "EA",
    avatarColor: "#F59E0B",
    date: "May 20, 2026",
    readTime: "7 min read",
    views: "29.4k",
    comments: 156,
    category: "Devotional",
    categoryColor: "#F59E0B",
    tags: ["Prayer", "Spiritual Discipline", "Devotional", "Intercession"],
    content: [
      { type: "p", text: "I grew up in a church where prayer was essentially a shopping list presented to a divine supplier. We asked for things — healings, jobs, exam results, good weather for the harvest festival. God was good and powerful, and we needed things, so we asked. There's nothing wrong with any of that. But at some point I realized my prayers were leaving me unchanged. I was treating God like an ATM: insert request, collect blessing, leave. Something essential was missing." },
      { type: "h2", text: "The ACTS Framework" },
      { type: "p", text: "One of the most useful structures for prayer comes from the ancient church: ACTS — Adoration, Confession, Thanksgiving, Supplication. The sequence is deliberate and transformative. You begin with Adoration: not 'what do I need from God' but 'who is God.' You spend time dwelling on his character, his greatness, his love. Then Confession: you bring yourself honestly, without the mask. Thanksgiving follows — counting what has already been given, which recalibrates everything. Only then, after your heart has been repositioned, do you move to Supplication — the asking." },
      { type: "h2", text: "Contemplative vs. Petitionary Prayer" },
      { type: "p", text: "Western Christianity has largely emphasized petitionary prayer — prayer as asking. The contemplative tradition, running from the Desert Fathers through Teresa of Ávila to Thomas Merton, emphasizes a different mode: prayer as presence. Not speaking to God but being with God. Brother Lawrence called it 'practicing the presence of God' — a continuous, quiet orientation toward the divine that doesn't require words. Both modes are biblical. Both are necessary. A prayer life that is only petitionary is exhausting; a prayer life that is only contemplative can drift into vagueness. The healthiest prayer integrates both." },
      { type: "quote", text: "Lord, teach us to pray.", attribution: "Luke 11:1 — the disciples' request to Jesus" },
      { type: "h2", text: "The Lord's Prayer as Template" },
      { type: "p", text: "When the disciples asked Jesus to teach them to pray, he gave them what we call the Lord's Prayer. It's worth noting what it contains and what it doesn't. It opens with adoration: 'Our Father in heaven, hallowed be your name.' It orients toward God's purposes: 'your kingdom come, your will be done.' It includes daily needs: 'give us this day our daily bread.' It addresses the relational dimension: 'forgive us our debts as we forgive our debtors.' It closes with protection and doxology. Jesus gave us not a prayer to repeat mechanically but a map of what prayer should navigate." },
      { type: "verse", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.", attribution: "Philippians 4:6–7" },
      { type: "h2", text: "A Practical 10-Minute Structure" },
      { type: "p", text: "If you want to deepen your prayer life but don't know where to start: spend two minutes in silence, simply becoming aware of God's presence. Spend two minutes in adoration — you can use a psalm or simply speak what is true about God's character. Spend two minutes in honest confession. Spend two minutes in thanksgiving — three to five specific things from the past 24 hours. Spend the final two minutes in supplication — your needs, your community's needs, the world's needs. Ten minutes. Do it every day for 30 days and see what happens to you." },
    ],
    related: [
      { title: "The Digital Sabbath", slug: "digital-sabbath", readTime: "6 min", category: "Life & Faith", categoryColor: "#00FF88" },
      { title: "Why the Resurrection Changes Everything", slug: "why-the-resurrection-changes-everything", readTime: "8 min", category: "Theology", categoryColor: "#6B4FBB" },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Article — Vine" };
  return {
    title: `${article.title} — Vine`,
    description: article.excerpt,
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
        <Navbar />
        <div className="page-body pb-20 text-center max-w-2xl mx-auto px-4">
          <p className="text-6xl mb-6">📭</p>
          <h1 className="text-3xl font-black mb-4">Article not found</h1>
          <p className="mb-8" style={{ color: "#6A6A88" }}>This article may have moved or been removed.</p>
          <a href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-black" style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}>
            Browse all articles
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <a href="/blog" className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-[#00FF88]" style={{ color: "#6A6A88" }}>
            <ArrowLeft size={14} /> Back to Blog
          </a>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: `${article.categoryColor}15`, color: article.categoryColor }}>
                {article.category}
              </span>
              {article.tags.slice(1).map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.04)", color: "#6A6A88" }}>{t}</span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl font-black mb-5 leading-tight" style={{ color: "#F2F2F8" }}>{article.title}</h1>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: "#8A8AA8" }}>{article.excerpt}</p>

            {/* Author + Meta */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black"
                  style={{ background: `${article.avatarColor}25`, color: article.avatarColor }}>
                  {article.avatar}
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: "#F2F2F8" }}>{article.author}</p>
                  <p className="text-xs" style={{ color: "#6A6A88" }}>{article.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs" style={{ color: "#4A4A68" }}>
                <span>{article.date}</span>
                <span className="flex items-center gap-1"><Clock size={11} /> {article.readTime}</span>
                <span className="flex items-center gap-1"><Eye size={11} /> {article.views}</span>
                <span className="flex items-center gap-1"><MessageSquare size={11} /> {article.comments}</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px mb-10" style={{ background: "rgba(255,255,255,0.06)" }} />

          {/* Content */}
          <div className="prose max-w-none mb-12">
            {article.content.map((block, i) => {
              if (block.type === "h2") return (
                <h2 key={i} className="text-2xl font-black mt-10 mb-4" style={{ color: "#F2F2F8" }}>{block.text}</h2>
              );
              if (block.type === "p") return (
                <p key={i} className="text-base leading-relaxed mb-5" style={{ color: "#C0C0D8", lineHeight: "1.85" }}>{block.text}</p>
              );
              if (block.type === "quote") return (
                <blockquote key={i} className="my-8 p-6 rounded-2xl" style={{ background: "rgba(0,255,136,0.06)", borderLeft: "3px solid #00FF88" }}>
                  <p className="text-lg italic mb-3" style={{ color: "#00DD77" }}>&ldquo;{block.text}&rdquo;</p>
                  {block.attribution && <p className="text-sm font-bold" style={{ color: "#007A33" }}>— {block.attribution}</p>}
                </blockquote>
              );
              if (block.type === "verse") return (
                <div key={i} className="my-8 p-5 rounded-xl text-center" style={{ background: "rgba(107,79,187,0.07)", border: "1px solid rgba(107,79,187,0.2)" }}>
                  <p className="text-base italic mb-2" style={{ color: "#C0C0D8" }}>&ldquo;{block.text}&rdquo;</p>
                  {block.attribution && <p className="text-xs font-bold" style={{ color: "#6B4FBB" }}>{block.attribution}</p>}
                </div>
              );
              return null;
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 py-6 mb-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              style={{ background: "rgba(236,72,153,0.1)", color: "#EC4899", border: "1px solid rgba(236,72,153,0.2)" }}>
              <Heart size={14} /> Like
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
              style={{ background: "rgba(0,255,136,0.08)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.2)" }}>
              <Bookmark size={14} /> Save
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
              style={{ background: "rgba(255,255,255,0.04)", color: "#8A8AA8", border: "1px solid rgba(255,255,255,0.08)" }}>
              <Share2 size={14} /> Share
            </button>
          </div>

          {/* Author Card */}
          <div className="rounded-2xl p-6 mb-10" style={{ background: `${article.avatarColor}08`, border: `1px solid ${article.avatarColor}20` }}>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center font-black"
                style={{ background: `${article.avatarColor}25`, color: article.avatarColor, fontSize: "1rem" }}>
                {article.avatar}
              </div>
              <div>
                <p className="font-black text-base mb-0.5" style={{ color: "#F2F2F8" }}>{article.author}</p>
                <p className="text-sm mb-2" style={{ color: article.avatarColor }}>{article.role}</p>
                <p className="text-sm" style={{ color: "#8A8AA8" }}>
                  Contributing writer at Vine. Specializing in biblical theology, apologetics, and the intersection of faith and contemporary culture.
                </p>
              </div>
            </div>
          </div>

          {/* Related */}
          {article.related.length > 0 && (
            <div>
              <h3 className="font-black text-lg mb-5" style={{ color: "#F2F2F8" }}>Related Articles</h3>
              <div className="space-y-3">
                {article.related.map((r) => (
                  <a key={r.slug} href={`/blog/${r.slug}`}
                    className="flex items-center justify-between p-4 rounded-xl group transition-all hover:bg-white/[0.03]"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", textDecoration: "none" }}
                  >
                    <div>
                      <span className="text-xs font-bold" style={{ color: r.categoryColor }}>{r.category}</span>
                      <p className="font-bold text-sm group-hover:text-[#00FF88] transition-colors" style={{ color: "#F2F2F8" }}>{r.title}</p>
                      <p className="text-xs" style={{ color: "#4A4A68" }}>{r.readTime}</p>
                    </div>
                    <ChevronRight size={16} style={{ color: "#4A4A68" }} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
