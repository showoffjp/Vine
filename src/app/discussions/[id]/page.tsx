import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
          <div className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,255,136,0.15)" }}>
            <p className="text-sm font-bold mb-3" style={{ color: "#F2F2F8" }}>Join the conversation</p>
            <textarea
              rows={4}
              placeholder="Share your thoughts, Scripture, or experience..."
              className="w-full rounded-xl p-4 text-sm resize-none outline-none mb-3"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#F2F2F8" }}
            />
            <div className="flex items-center justify-between">
              <p className="text-xs" style={{ color: "#4A4A68" }}>Be kind, be honest. Ephesians 4:29.</p>
              <button className="px-5 py-2 rounded-xl font-bold text-sm text-black"
                style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}>
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
