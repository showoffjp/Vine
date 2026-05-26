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
