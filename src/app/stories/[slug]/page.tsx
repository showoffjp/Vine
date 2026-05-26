import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Share2, Bookmark, ChevronRight, ArrowLeft, Clock, Globe } from "lucide-react";

const stories: Record<string, {
  name: string; flag: string; location: string; avatar: string; color: string;
  title: string; excerpt: string; category: string; categoryColor: string;
  readTime: string; hearts: number; date: string;
  content: Array<{ type: "p" | "h2" | "quote"; text: string; attribution?: string }>;
  related: Array<{ title: string; slug: string; name: string; flag: string; category: string; categoryColor: string }>;
}> = {
  "carlos-mendez-drug-cartel-to-church-planter": {
    name: "Carlos Mendez",
    flag: "🇨🇴",
    location: "Bogotá, Colombia",
    avatar: "CM",
    color: "#10B981",
    title: "From Drug Cartel Enforcer to Church Planter",
    excerpt: "I was 23 years old, knee-deep in cartel work, certain I was going to die before 30.",
    category: "Redemption",
    categoryColor: "#10B981",
    readTime: "12 min",
    hearts: 5832,
    date: "April 12, 2026",
    content: [
      { type: "p", text: "I was 23 years old, knee-deep in cartel work, certain I was going to die before 30. That was just a fact in my neighborhood. You didn't age gracefully — you either left Medellín, or you got buried there. I had chosen the third option: make enough money to not care." },
      { type: "p", text: "I collected debts. That's the polite way to say it. I was good at the job because I genuinely didn't care what happened to the people who owed what they owed. That numbness wasn't natural — it was learned, carefully, over years. You don't feel nothing by accident." },
      { type: "h2", text: "The Night Everything Broke" },
      { type: "p", text: "I ended up in jail in 2015. Not for the work I'd actually done — something stupid, a street fight, the kind of thing that finally catches up to you when you've been living careless. A priest came to the cell block on Tuesdays. Most of us ignored him. One night, for reasons I still don't fully understand, I didn't." },
      { type: "p", text: "He handed me a Bible. I threw it across the cell. He didn't flinch. He said, 'You can throw it as many times as you want. I'll keep bringing them.' He left. I stared at the Bible on the floor for three days." },
      { type: "quote", text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.", attribution: "Romans 8:38-39" },
      { type: "p", text: "Two weeks later, I picked it up. I started in the middle — Psalms. I didn't know why. I read Psalm 34:18: 'The Lord is close to the brokenhearted and saves those who are crushed in spirit.' I read it twelve times. I wasn't broken or crushed. Or so I had convinced myself. Reading it the thirteenth time, I started crying. I hadn't cried since I was eight years old." },
      { type: "h2", text: "The Slow Rebuild" },
      { type: "p", text: "My conversion wasn't dramatic in the movie sense. There was no lightning bolt. There was just a slow, painful process of having everything I had built my identity on stripped away and replaced with something I didn't yet understand. I started going to the priest's sessions voluntarily. I asked questions I was embarrassed to ask. He answered every one without condescension." },
      { type: "p", text: "When I got out, I went back to Bogotá. My old contacts expected me to return to work. I didn't. I started attending a church in the same barrio where I had spent years doing things I won't detail. People looked at me sideways. The pastor didn't." },
      { type: "h2", text: "The Church in the Same Streets" },
      { type: "p", text: "Today I lead a church of 340 people. It meets in a building that used to be a warehouse I once used for things that would have horrified my congregation if they knew the history. Maybe some of them do know. Either way, they come. They worship. They bring their broken lives and we try to point them toward the only thing that ever reached mine — a God who didn't keep his distance from where I had been." },
      { type: "p", text: "I'm 34 now. Against every actuarial table and every expectation of everyone who knew me at 23. I didn't age gracefully. I aged gratefully. Those are very different things." },
    ],
    related: [
      { title: "We Sold Everything and Moved to Mozambique", slug: "isabella-ferreira-mozambique", name: "Isabella Ferreira", flag: "🇧🇷", category: "Missions", categoryColor: "#D4AF37" },
      { title: "The Night I Prayed to Die — and Why I'm Grateful God Said No", slug: "samuel-mwangi-mental-health", name: "Samuel Mwangi", flag: "🇰🇪", category: "Mental Health", categoryColor: "#3B82F6" },
    ],
  },
  "lydia-bohm-deconstruction": {
    name: "Lydia Böhm",
    flag: "🇩🇪",
    location: "Berlin, Germany",
    avatar: "LB",
    color: "#6B4FBB",
    title: "I Deconstructed My Faith — and Then Found It Again, Better",
    excerpt: "I left evangelical Christianity at 24. I was done. Four years later, I walked back in.",
    category: "Deconstruction",
    categoryColor: "#6B4FBB",
    readTime: "11 min",
    hearts: 6104,
    date: "March 28, 2026",
    content: [
      { type: "p", text: "At 24, I had a list of grievances with my faith. They weren't shallow. They were the kinds of questions I had been building since I was fourteen and first noticed that some of what I had been taught didn't hold together under honest scrutiny." },
      { type: "p", text: "I left. Not quietly. I wrote a long blog post — the kind that was popular in certain circles in the early deconstruction wave — explaining all the reasons evangelical Christianity was intellectually bankrupt, morally compromised, and emotionally abusive. I got a lot of traffic. I got a lot of sympathetic replies from people going through the same thing. I felt vindicated." },
      { type: "h2", text: "Four Years of Not Finding an Alternative" },
      { type: "p", text: "Here's what nobody tells you about deconstruction: it's much easier to leave something than to arrive somewhere. I had a very clean picture of what I didn't believe. I had no picture at all of what I did believe, or what a life built on something else would look like." },
      { type: "quote", text: "You have made us for yourself, O Lord, and our heart is restless until it rests in you.", attribution: "Augustine of Hippo, Confessions" },
      { type: "p", text: "I tried secular humanism. I found it intellectually honest but emotionally thin. I read a lot of Camus. I appreciated his honesty. I didn't find what I needed. I tried Buddhism for about eight months. The practices helped. But I kept finding myself talking to the universe, and the universe wasn't answering." },
      { type: "h2", text: "What Brought Me Back" },
      { type: "p", text: "What brought me back wasn't arguments, though arguments helped. It was a person. A priest in Berlin — not evangelical, Anglican — who was willing to sit with all my questions without needing them to resolve immediately. He never told me what to think. He kept asking better questions than mine." },
      { type: "p", text: "He gave me C.S. Lewis's 'Surprised by Joy.' Then Alvin Plantinga. Then N.T. Wright. I encountered a version of Christianity I had genuinely never met — intellectually serious, historically grounded, and honest about its own complexity." },
      { type: "p", text: "I walked back into a church at 28. It was awkward. Some of my old community were suspicious of me. Some of my new secular friends were baffled. But I had arrived somewhere. Not where I started — somewhere better. Somewhere that had been tested by four years of genuine doubt and hadn't collapsed." },
    ],
    related: [
      { title: "From Drug Cartel Enforcer to Church Planter", slug: "carlos-mendez-drug-cartel-to-church-planter", name: "Carlos Mendez", flag: "🇨🇴", category: "Redemption", categoryColor: "#10B981" },
      { title: "Raised Buddhist, Found Christ at 31", slug: "ji-woo-park-buddhist-to-christian", name: "Ji-Woo Park", flag: "🇰🇷", category: "Faith Transition", categoryColor: "#EC4899" },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(stories).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = stories[slug];
  if (!story) return { title: "Story — Vine" };
  return {
    title: `${story.title} — Vine`,
    description: story.excerpt,
  };
}

export default async function StoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = stories[slug];

  if (!story) {
    return (
      <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
        <Navbar />
        <div className="pt-24 pb-20 text-center max-w-2xl mx-auto px-4">
          <p className="text-6xl mb-6">📭</p>
          <h1 className="text-3xl font-black mb-4">Story not found</h1>
          <a href="/stories" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-black" style={{ background: "linear-gradient(135deg, #D4AF37, #B8942C)" }}>
            Browse all stories
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <a href="/stories" className="inline-flex items-center gap-2 text-sm mb-8" style={{ color: "#6A6A88" }}>
            <ArrowLeft size={14} /> All Stories
          </a>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: `${story.categoryColor}15`, color: story.categoryColor }}>
                {story.category}
              </span>
              <span className="text-xs" style={{ color: "#4A4A68" }}>⭐ Featured Story</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black mb-5 leading-tight" style={{ color: "#F2F2F8" }}>{story.title}</h1>

            {/* Author */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center font-black"
                style={{ background: `${story.color}25`, color: story.color, border: `2px solid ${story.color}30`, fontSize: "0.9rem" }}
              >
                {story.avatar}
              </div>
              <div>
                <p className="font-black text-base" style={{ color: "#F2F2F8" }}>{story.name} {story.flag}</p>
                <p className="text-sm flex items-center gap-1" style={{ color: "#6A6A88" }}>
                  <Globe size={12} /> {story.location}
                </p>
                <div className="flex items-center gap-3 mt-1 text-xs" style={{ color: "#4A4A68" }}>
                  <span>{story.date}</span>
                  <span className="flex items-center gap-1"><Clock size={10} /> {story.readTime} read</span>
                  <span className="flex items-center gap-1"><Heart size={10} style={{ color: "#EC4899" }} /> {story.hearts.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px mb-10" style={{ background: `linear-gradient(90deg, ${story.color}40, transparent)` }} />

          {/* Content */}
          <div className="mb-12">
            {story.content.map((block, i) => {
              if (block.type === "h2") return (
                <h2 key={i} className="text-2xl font-black mt-10 mb-4" style={{ color: "#F2F2F8" }}>{block.text}</h2>
              );
              if (block.type === "p") return (
                <p key={i} className="text-base leading-relaxed mb-6" style={{ color: "#C0C0D8", lineHeight: "1.9" }}>{block.text}</p>
              );
              if (block.type === "quote") return (
                <blockquote key={i} className="my-8 p-6 rounded-2xl" style={{ background: "rgba(212,175,55,0.06)", borderLeft: `3px solid ${story.color}` }}>
                  <p className="text-lg italic mb-3" style={{ color: "#C8A84B" }}>&ldquo;{block.text}&rdquo;</p>
                  {block.attribution && <p className="text-sm font-bold" style={{ color: "#8A6A20" }}>— {block.attribution}</p>}
                </blockquote>
              );
              return null;
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 py-6 mb-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
              style={{ background: "rgba(236,72,153,0.1)", color: "#EC4899", border: "1px solid rgba(236,72,153,0.2)" }}>
              <Heart size={14} /> {story.hearts.toLocaleString()}
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
              style={{ background: "rgba(212,175,55,0.08)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.2)" }}>
              <Bookmark size={14} /> Save
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
              style={{ background: "rgba(255,255,255,0.04)", color: "#8A8AA8", border: "1px solid rgba(255,255,255,0.08)" }}>
              <Share2 size={14} /> Share
            </button>
          </div>

          {/* Submit your own */}
          <div className="rounded-2xl p-6 mb-10 text-center"
            style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(107,79,187,0.06) 100%)", border: "1px solid rgba(212,175,55,0.15)" }}>
            <p className="text-sm italic mb-3" style={{ color: "#8A8AA8" }}>
              &ldquo;They triumphed over him by the blood of the Lamb and by the word of their testimony.&rdquo; — Revelation 12:11
            </p>
            <a href="/stories" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-black"
              style={{ background: "linear-gradient(135deg, #D4AF37, #B8942C)" }}>
              Share Your Story <ChevronRight size={14} />
            </a>
          </div>

          {/* Related */}
          {story.related.length > 0 && (
            <div>
              <h3 className="font-black text-lg mb-5" style={{ color: "#F2F2F8" }}>More Stories</h3>
              <div className="space-y-3">
                {story.related.map((r) => (
                  <a key={r.slug} href={`/stories/${r.slug}`}
                    className="flex items-center justify-between p-4 rounded-xl group transition-all hover:bg-white/[0.03]"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", textDecoration: "none" }}
                  >
                    <div>
                      <span className="text-xs font-bold" style={{ color: r.categoryColor }}>{r.category}</span>
                      <p className="font-bold text-sm group-hover:text-[#D4AF37] transition-colors" style={{ color: "#F2F2F8" }}>{r.title}</p>
                      <p className="text-xs" style={{ color: "#4A4A68" }}>{r.name} {r.flag}</p>
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
