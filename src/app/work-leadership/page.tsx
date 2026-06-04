"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";
import {
  Briefcase,
  Users,
  Star,
  Target,
  TrendingUp,
  Shield,
  ChevronRight,
  Lightbulb,
  Award,
  Compass,
  Bookmark,
} from "lucide-react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "principles" | "leaders" | "ethics" | "voices" | "videos";

const principles = [
  {
    icon: "⚙️",
    title: "Work as Worship",
    body: "Colossians 3:23 doesn't say 'do ministry for the Lord' — it says 'whatever you do.' Your cubicle, your jobsite, your clinic is a place of worship.",
    verse: "Colossians 3:23",
  },
  {
    icon: "🦁",
    title: "Servant Leadership",
    body: "Jesus redefined power entirely. The leader who washes feet, listens well, and empowers others is the most dangerous — in the best way.",
    verse: "Mark 10:42-45",
  },
  {
    icon: "🎯",
    title: "Excellence as Witness",
    body: "Daniel and Joseph rose to the top of pagan systems through exceptional competence. Your excellence is a testimony.",
    verse: "Daniel 6:3",
  },
  {
    icon: "⚖️",
    title: "Ethical Courage",
    body: "Integrity costs more when it matters most. Standing for what's right in a compromised workplace is costly and Christlike.",
    verse: "Proverbs 11:3",
  },
];

const frameworks = [
  {
    icon: Compass,
    title: "Faith Integration Map",
    description: "How to authentically bring your faith into work without being preachy or fake.",
    level: "Foundational",
    color: "#3a7d56",
  },
  {
    icon: Users,
    title: "Managing Like Jesus",
    description: "A practical framework for leading teams with both excellence and compassion.",
    level: "Leadership",
    color: "#6B4FBB",
  },
  {
    icon: Target,
    title: "Calling vs Career vs Job",
    description: "Not everything is a calling. Understanding the distinctions sets you free.",
    level: "Vocation",
    color: "#10B981",
  },
  {
    icon: Shield,
    title: "Ethical Decision-Making",
    description: "A biblical framework for navigating grey areas, office politics, and moral compromise.",
    level: "Ethics",
    color: "#3B82F6",
  },
  {
    icon: TrendingUp,
    title: "Ambition, Redeemed",
    description: "Is Christian ambition an oxymoron? No — but it must be pointed in the right direction.",
    level: "Growth",
    color: "#F59E0B",
  },
  {
    icon: Lightbulb,
    title: "Rest & Sabbath at Work",
    description: "Why the most productive Christians in history were also the most disciplined resters.",
    level: "Rhythms",
    color: "#EC4899",
  },
];

const models = [
  {
    name: "Daniel",
    role: "Government Official",
    takeaway: "Excellence and integrity in a hostile system — without compromise on core convictions.",
    color: "#3a7d56",
    avatar: "DA",
  },
  {
    name: "Nehemiah",
    role: "Project Manager",
    takeaway: "Vision-casting, stakeholder management, and team motivation in the face of opposition.",
    color: "#6B4FBB",
    avatar: "NE",
  },
  {
    name: "Joseph",
    role: "Executive",
    takeaway: "Rising through unjust circumstances, handling power wisely, and forgiving those who wronged you.",
    color: "#10B981",
    avatar: "JO",
  },
  {
    name: "Deborah",
    role: "Judge & Leader",
    takeaway: "Courageous leadership regardless of gender expectations — decisive, wise, and collaborative.",
    color: "#EC4899",
    avatar: "DE",
  },
];

const articles = [
  { emoji: "🏢", title: "How to Talk About Faith at Work Without Being Weird", time: "7 min", tag: "Integration", href: "/blog/faith-at-work" },
  { emoji: "📈", title: "Is Ambition a Sin? What Scripture Actually Says", time: "9 min", tag: "Ambition", href: "/blog/biblical-ambition" },
  { emoji: "😓", title: "Burned Out and Faithful: How to Rest Without Guilt", time: "9 min", tag: "Burnout", href: "/blog/digital-sabbath" },
  { emoji: "🤝", title: "When Your Boss Is Unethical: A Biblical Response", time: "8 min", tag: "Ethics", href: "/blog/servant-leadership-jesus" },
  { emoji: "💼", title: "The Theology of Monday: Reclaiming Secular Work", time: "8 min", tag: "Theology", href: "/blog/theology-of-monday" },
  { emoji: "🌍", title: "Using Your Influence for Kingdom Impact", time: "8 min", tag: "Impact", href: "/blog/servant-leadership-jesus" },
];

const WORK_LEADERS = [
  {
    id: 1,
    name: "William Wilberforce",
    role: "Political Reformer",
    era: "1759–1833",
    bio: "British parliamentarian and evangelical Christian who led the 20-year campaign to abolish the transatlantic slave trade, succeeded in 1807, and lived to see full abolition in 1833, three days before his death. Member of the Clapham Sect, a network of Christian social reformers.",
    leadership_style: "Wilberforce modeled long-suffering, coalition-building, and moral courage in public life. He refused to separate his faith from his political vocation, treating his seat in Parliament as his God-given calling rather than a career. He was willing to be unpopular for decades on behalf of those without a voice.",
    quote: "You may choose to look the other way but you can never say again that you did not know.",
  },
  {
    id: 2,
    name: "George Muller",
    role: "Faith-Based Organization Leader",
    era: "1805–1898",
    bio: "German-born evangelist who founded the Ashley Down orphanage in Bristol, England, caring for over 10,000 orphans across his lifetime — without ever making public financial appeals. He kept meticulous records of over 50,000 answered prayers and ran the organization entirely on donations received through prayer.",
    leadership_style: "Muller pioneered what might be called faith-based organizational management — radical dependence on God for provision, transparent financial accountability, and refusal to go into debt. His leadership demonstrated that institutions could operate with integrity, excellence, and supernatural expectation simultaneously.",
    quote: "The beginning of anxiety is the end of faith, and the beginning of true faith is the end of anxiety.",
  },
  {
    id: 3,
    name: "Truett Cathy",
    role: "Founder, Chick-fil-A",
    era: "1921–2014",
    bio: "Founder of Chick-fil-A, the fast-food chain he built from a single diner in Hapeville, Georgia into the highest-grossing fast food chain per restaurant in America. Famous for his policy of closing every location on Sundays — a conviction rooted in his Baptist faith that employees deserve a day of rest and worship.",
    leadership_style: "Cathy integrated servant leadership and biblical values into every aspect of his business — from the closed-Sunday policy, to his WinShape Foundation for youth development, to his personal mentoring of franchise operators. He demonstrated that faithfully held Christian convictions in business could produce both commercial success and employee flourishing.",
    quote: "I'd like to be remembered as one who kept my priorities in the right order. We live in a changing world, but we need to be reminded that the important things have not changed.",
  },
  {
    id: 4,
    name: "Max De Pree",
    role: "CEO, Herman Miller",
    era: "1924–2017",
    bio: "Chairman and CEO of Herman Miller, the design and furniture company, and author of Leadership Is an Art (1987), one of the most influential books on servant leadership in American business history. His father D.J. De Pree had founded the company's distinctive culture on Christian values.",
    leadership_style: "De Pree articulated servant leadership with precision: the leader's first responsibility is to define reality; the last is to say thank you. He emphasized that leaders are stewards, not owners — accountable to those they lead. He also pioneered worker participation in management and profit-sharing decades before it became fashionable.",
    quote: "The first responsibility of a leader is to define reality. The last is to say thank you. In between the two, the leader must become a servant and a debtor.",
  },
  {
    id: 5,
    name: "C. William Pollard",
    role: "Chairman & CEO, ServiceMaster",
    era: "1938–present",
    bio: "Led ServiceMaster, a diversified service company, through dramatic growth from $1 billion to $7 billion in revenues during the 1980s and 1990s. Author of The Soul of the Firm (1996), in which he articulated the company's four objectives: Honor God in all we do; Help people develop; Pursue excellence; Grow profitably — in that order.",
    leadership_style: "Pollard's leadership was defined by putting people first and profit last — not as a branding strategy but as a theological conviction. He believed work had inherent dignity because workers are image-bearers of God, and that the leader's task was to create conditions in which people could develop into the fullness of who they were created to be.",
    quote: "Profit is a means, not an end. The end is people and their development.",
  },
];

const WORK_ETHICS = [
  {
    id: 1,
    principle: "Honesty & No Deception",
    icon: "🔍",
    scripture: "Proverbs 11:1",
    description: "A dishonest scale is an abomination to the Lord, but an accurate weight is His delight. The biblical tradition consistently frames deception in commerce and work as not merely unethical but as a direct offense against God's character.",
    application: "Applies to: contract terms, financial reporting, resumes and credentials, performance reviews, client billing, marketing claims. Practical question: Would the other party feel deceived if they knew everything I know?",
  },
  {
    id: 2,
    principle: "Sabbath — Rest from Work",
    icon: "🌙",
    scripture: "Exodus 20:8-10",
    description: "The fourth commandment is the only one that concerns time rather than an act. God rested on the seventh day not because He was tired but to establish a pattern of rhythm for human flourishing. Sabbath is a statement that human beings are not machines.",
    application: "Applies to: working excessive hours, never disconnecting from email, building teams that are chronically overworked, treating Sunday as a productivity day. Practical question: Does my pace of work reflect that I trust God to sustain what I cannot do on my own?",
  },
  {
    id: 3,
    principle: "Fair Wages",
    icon: "💰",
    scripture: "Leviticus 19:13; James 5:4",
    description: "Do not defraud your neighbor or rob him. Do not hold back the wages of a hired worker overnight. James echoes this with force: The wages you failed to pay your workers cry out against you. Wage theft and exploitation of workers are not peripheral biblical concerns — they are repeatedly condemned.",
    application: "Applies to: paying market wages, compensating overtime fairly, not using unpaid interns for commercial work, not delaying payments to contractors, not exploiting workers who have no leverage. Practical question: Are the people at the bottom of my organization paid fairly for the value they create?",
  },
  {
    id: 4,
    principle: "Avoiding Partiality",
    icon: "⚖️",
    scripture: "James 2:1-4; Proverbs 24:23",
    description: "These also are sayings of the wise: To show partiality in judgment is not good. The New Testament connects partiality to dishonoring those made in God's image. Favoritism in hiring, promotion, and opportunity is not just unfair — it reflects a failure to see people as God sees them.",
    application: "Applies to: hiring decisions, performance reviews, mentorship and sponsorship, who gets high-visibility assignments, how grievances are handled. Practical question: Are the criteria I use for evaluating people applied consistently regardless of who they are or who they know?",
  },
  {
    id: 5,
    principle: "Excellence as Worship",
    icon: "✨",
    scripture: "Colossians 3:23-24",
    description: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters. The biblical call to excellence in work is not about impressing people or advancing a career — it is about rendering your work as an offering to God. Mediocrity is therefore a spiritual problem, not merely a professional one.",
    application: "Applies to: quality of deliverables, preparation for meetings, follow-through on commitments, continuous skill development, attention to craft. Practical question: Would I be satisfied with the quality of this work if I knew God were reviewing it rather than my manager?",
  },
  {
    id: 6,
    principle: "Caring for Employees",
    icon: "🤝",
    scripture: "Deuteronomy 24:14-15; Matthew 20:1-16",
    description: "Do not take advantage of a hired worker who is poor and needy. Jesus's parable of the workers in the vineyard shows an employer who is generous beyond what contracts require. The biblical pattern for employers is not merely contractual compliance but active concern for those in their care.",
    application: "Applies to: benefits, working conditions, psychological safety, handling underperformance with dignity, layoff practices, creating development opportunities. Practical question: Do the people who work for me experience my leadership as genuinely caring about their flourishing — not just their productivity?",
  },
];

const VOICES_WORK = [
  {
    id: 1,
    name: "Dorothy Sayers",
    era: "1893–1957",
    context: "Creed or Chaos — Work Theology",
    bio: "British novelist, essayist, and Christian apologist, best known for the Lord Peter Wimsey detective stories and her translation of Dante's Divine Comedy. Her 1942 essay Why Work? and the lecture collection Creed or Chaos articulated a theology of vocation that challenged Christians to take their work seriously as a form of worship.",
    quote: "The Church's approach to an intelligent carpenter is usually confined to exhorting him not to be drunk and disorderly in his leisure hours, and to come to church on Sundays. What the Church should be telling him is this: that the very first demand his religion makes upon him is that he should make good tables.",
    contribution: "Sayers was one of the first 20th-century Christian thinkers to argue that the quality and integrity of one's daily work — not just religious devotion — is the primary arena of Christian faithfulness. Her work anticipated the contemporary theology of vocation by decades and influenced later thinkers like Os Guinness and Tim Keller.",
  },
  {
    id: 2,
    name: "Miroslav Volf",
    era: "1956–present",
    context: "Work in the Spirit",
    bio: "Croatian-American theologian, professor at Yale Divinity School, and founder of the Yale Center for Faith and Culture. His 1991 book Work in the Spirit: Toward a Theology of Work provided the most rigorous systematic treatment of work theology in the Protestant tradition, grounding it in pneumatology rather than creation orders.",
    quote: "Human work is not merely a necessary evil or a neutral means to an end, but a participation in the ongoing creative work of God in the world.",
    contribution: "Volf argued that all legitimate human work — not just explicitly religious work — can be understood as cooperation with the Spirit in the new creation. His framework moved work theology beyond Luther's doctrine of vocation (which focused on creation orders and fixed callings) toward a more dynamic, eschatological understanding of work as anticipating the kingdom of God.",
  },
  {
    id: 3,
    name: "Os Guinness",
    era: "1941–present",
    context: "The Call",
    bio: "British-American author and social critic, great-great-great-grandson of Arthur Guinness. His 1998 book The Call: Finding and Fulfilling the Central Purpose of Your Life became the definitive evangelical treatment of vocation. Born in China to missionary parents, educated at Oxford, Guinness has written prolifically on faith in public life.",
    quote: "A life lived listening to the decisive call of God is a life lived before one audience that trumps all others — the Audience of One.",
    contribution: "Guinness distinguished between the primary call (to God himself) and secondary calls (to particular roles and tasks), arguing that most confusion about vocation comes from reversing this order — treating career as the primary call and God as the means to achieve it. His framework freed Christians from both the sacred/secular divide and the idolatry of career identity.",
  },
  {
    id: 4,
    name: "Tim Keller",
    era: "1950–2023",
    context: "Every Good Endeavor",
    bio: "Presbyterian pastor and founder of Redeemer Presbyterian Church in Manhattan. His 2012 book Every Good Endeavor: Connecting Your Work to God's Work, co-written with Katherine Leary Alsdorf, became the most widely read evangelical theology of work of the 21st century, synthesizing Reformed theology, cultural apologetics, and practical vocational guidance.",
    quote: "Work is not primarily a thing you do to support yourself or to make something of yourself; work is primarily the way you love your neighbor.",
    contribution: "Keller synthesized the best of Reformed work theology — Luther, Calvin, Sayers, and Volf — into an accessible framework showing how the gospel transforms work motivation, work content, and the rhythms of work and rest. His account of work as neighbor-love moved work ethics from duty to desire and became formative for an entire generation of urban professionals.",
  },
  {
    id: 5,
    name: "Lester DeKoster",
    era: "1916–2009",
    context: "Work: The Meaning of Your Life",
    bio: "Reformed librarian, editor, and theologian who served as editor of The Banner (Christian Reformed Church) for 25 years. His 1982 book Work: The Meaning of Your Life — A Christian Perspective argued that work is the form in which we make ourselves useful to others, and through which civilization itself is sustained — making it a profoundly spiritual activity.",
    quote: "Work is the form in which we make ourselves useful to others, the form in which the human race builds civilization and the individual gains self-realization.",
    contribution: "DeKoster wrote the most concise and compelling case for work as civilization-building and neighbor-service in the evangelical tradition. His small book — only 100 pages — argued that every act of work, however ordinary, participates in the web of interdependence that sustains human community, making it inherently meaningful regardless of its religious or secular framing.",
  },
];

export default function WorkLeadershipPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_work-leadership_tab", "principles");
  const [savedPrinciples, setSavedPrinciples] = useState<Set<string>>(() => {
    try {
      const s = localStorage.getItem("vine_work_principles");
      return s ? new Set(JSON.parse(s) as string[]) : new Set();
    } catch { return new Set(); }
  });
  const [selectedLeader, setSelectedLeader] = useState<number | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<number>(1);

  useEffect(() => {
    try { localStorage.setItem("vine_work_principles", JSON.stringify([...savedPrinciples])); } catch {}
  }, [savedPrinciples]);

  const togglePrinciple = (title: string) => {
    setSavedPrinciples((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  const voice = VOICES_WORK.find(v => v.id === selectedVoice)!;
  const leader = WORK_LEADERS.find(l => l.id === selectedLeader);

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: "#3a7d56" }}>
              Life &amp; Faith &middot; Work &amp; Leadership
            </span>
            <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
              Monday matters{" "}
              <span style={{ background: "linear-gradient(135deg, #3a7d56, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                as much as Sunday.
              </span>
            </h1>
            <p className="text-lg mb-8" style={{ color: "#6A6A88" }}>
              Biblical wisdom for leaders, professionals, and anyone navigating the tension between career and calling. Your work is your mission field.
            </p>
            <div
              className="inline-block px-6 py-4 rounded-2xl text-sm italic"
              style={{
                background: "rgba(58,125,86,0.06)",
                border: "1px solid rgba(58,125,86,0.15)",
                color: "#00DD77",
                maxWidth: "520px",
              }}
            >
              <p className="mb-1">&ldquo;Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.&rdquo;</p>
              <p className="text-xs not-italic font-bold" style={{ color: "#007A33" }}>— Colossians 3:23</p>
            </div>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div style={{ display: "flex", gap: 6, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 6, width: "fit-content" }}>
            {(["principles", "leaders", "ethics", "voices", "videos"] as const).map(t => (
              <button key={t} onClick={() => setActiveTab(t)}
                style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                {t === "principles" ? "Principles" : t === "leaders" ? "Leaders" : t === "ethics" ? "Ethics" : t === "voices" ? "Voices" : "Videos"}
              </button>
            ))}
          </div>
        </div>

        {/* Principles Tab */}
        {activeTab === "principles" && (
          <>
            {/* Core Principles */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
              <h2 className="text-2xl font-black mb-8" style={{ color: "#F2F2F8" }}>
                {principles.length} Core Principles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {principles.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-2xl p-6"
                    style={{
                      background: savedPrinciples.has(p.title) ? "rgba(58,125,86,0.04)" : "rgba(255,255,255,0.02)",
                      border: `1px solid ${savedPrinciples.has(p.title) ? "rgba(58,125,86,0.2)" : "rgba(58,125,86,0.08)"}`,
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-3xl">{p.icon}</span>
                      <button
                        onClick={() => togglePrinciple(p.title)}
                        className="p-1.5 rounded-lg transition-all"
                        style={{ color: savedPrinciples.has(p.title) ? "#3a7d56" : "#4A4A68" }}
                        title={savedPrinciples.has(p.title) ? "Saved" : "Save principle"}
                      >
                        <Bookmark size={14} fill={savedPrinciples.has(p.title) ? "#3a7d56" : "none"} />
                      </button>
                    </div>
                    <h3 className="font-bold text-xl mb-2" style={{ color: "#F2F2F8" }}>{p.title}</h3>
                    <p className="text-sm mb-3 leading-relaxed" style={{ color: "#6A6A88" }}>{p.body}</p>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(58,125,86,0.1)", color: "#3a7d56" }}
                    >
                      📜 {p.verse}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
              <h2 className="text-2xl font-black mb-8" style={{ color: "#F2F2F8" }}>
                Leadership Frameworks
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {frameworks.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.title}
                      className="group rounded-xl p-5 cursor-pointer transition-all"
                      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `${f.color}40`;
                        e.currentTarget.style.background = `${f.color}06`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: `${f.color}20` }}
                      >
                        <Icon size={18} style={{ color: f.color }} />
                      </div>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full mb-2 inline-block"
                        style={{ background: `${f.color}15`, color: f.color }}
                      >
                        {f.level}
                      </span>
                      <h3 className="font-bold text-base mb-1.5 group-hover:text-[#3a7d56] transition-colors" style={{ color: "#F2F2F8" }}>
                        {f.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#6A6A88" }}>{f.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Biblical Models */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
              <h2 className="text-2xl font-black mb-3" style={{ color: "#F2F2F8" }}>
                Biblical Leadership Models
              </h2>
              <p className="text-base mb-8" style={{ color: "#6A6A88" }}>
                Scripture&rsquo;s Hall of Fame for workplace and organizational leadership.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {models.map((m) => (
                  <div
                    key={m.name}
                    className="rounded-2xl p-5 text-center"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black mx-auto mb-3"
                      style={{ background: `${m.color}25`, color: m.color, border: `2px solid ${m.color}40` }}
                    >
                      {m.avatar}
                    </div>
                    <h3 className="font-black text-lg mb-0.5" style={{ color: "#F2F2F8" }}>{m.name}</h3>
                    <p className="text-xs mb-3 font-semibold" style={{ color: m.color }}>{m.role}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#6A6A88" }}>{m.takeaway}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Article Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
              <h2 className="text-2xl font-black mb-8" style={{ color: "#F2F2F8" }}>Top Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {articles.map((art, i) => (
                  <Link
                    key={i}
                    href={art.href}
                    className="group rounded-xl p-5 cursor-pointer transition-all flex gap-4 block"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                      e.currentTarget.style.borderColor = "rgba(58,125,86,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    }}
                  >
                    <span className="text-2xl shrink-0">{art.emoji}</span>
                    <div>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full mb-1.5 inline-block"
                        style={{ background: "rgba(58,125,86,0.1)", color: "#3a7d56" }}
                      >
                        {art.tag}
                      </span>
                      <h3 className="font-bold text-sm leading-snug group-hover:text-[#3a7d56] transition-colors" style={{ color: "#F2F2F8" }}>
                        {art.title}
                      </h3>
                      <p className="text-xs mt-1" style={{ color: "#4A4A68" }}>{art.time} read</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className="rounded-2xl p-10 text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(58,125,86,0.06) 0%, rgba(107,79,187,0.06) 100%)",
                  border: "1px solid rgba(58,125,86,0.12)",
                }}
              >
                <Briefcase size={32} style={{ color: "#3a7d56" }} className="mx-auto mb-4" />
                <h3 className="text-2xl font-black mb-3" style={{ color: "#F2F2F8" }}>
                  Join the Work &amp; Leadership Circle
                </h3>
                <p className="text-base mb-6 max-w-lg mx-auto" style={{ color: "#6A6A88" }}>
                  Connect with Christian professionals and leaders navigating the same tension between faith and career.
                </p>
                <div className="flex items-center gap-4 justify-center flex-wrap">
                  <Link
                    href="/community"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-black"
                    style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)" }}
                  >
                    Join the Community <ChevronRight size={16} />
                  </Link>
                  <Link
                    href="/ai-companion"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#C0C0D8" }}
                  >
                    Ask AI Companion
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Leaders Tab */}
        {activeTab === "leaders" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6, color: TEXT }}>Christian Leaders in History</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Five leaders who integrated faith and work in ways that changed organizations — and the world.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {WORK_LEADERS.map(l => (
                <div key={l.id}
                  style={{ background: CARD, border: `1px solid ${selectedLeader === l.id ? PURPLE + "60" : BORDER}`, borderRadius: 14, padding: 24, cursor: "pointer" }}
                  onClick={() => setSelectedLeader(selectedLeader === l.id ? null : l.id)}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: selectedLeader === l.id ? 20 : 0 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 12, background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 900, fontSize: 16, flexShrink: 0 }}>
                      {l.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
                        <span style={{ color: TEXT, fontWeight: 800, fontSize: 17 }}>{l.name}</span>
                        <span style={{ background: `${PURPLE}18`, color: PURPLE, fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 6 }}>{l.role}</span>
                        <span style={{ background: `${GREEN}12`, color: GREEN, fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 6 }}>{l.era}</span>
                      </div>
                      <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>{l.bio.slice(0, 140)}{l.bio.length > 140 && !selectedLeader ? "..." : ""}</p>
                    </div>
                    <div style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{selectedLeader === l.id ? "▲" : "▼"}</div>
                  </div>
                  {selectedLeader === l.id && (
                    <div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, marginBottom: 16 }}>{l.bio}</p>
                      <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 14, marginBottom: 14 }}>
                        <div style={{ color: PURPLE, fontSize: 11, fontWeight: 700, marginBottom: 6 }}>LEADERSHIP STYLE</div>
                        <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{l.leadership_style}</p>
                      </div>
                      <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 14 }}>
                        <div style={{ color: GREEN, fontSize: 11, fontWeight: 700, marginBottom: 6 }}>MEMORABLE QUOTE</div>
                        <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{l.quote}&rdquo;</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ethics Tab */}
        {activeTab === "ethics" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6, color: TEXT }}>Workplace Ethics</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Six biblical principles for navigating the ethics of daily work.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))", gap: 16 }}>
              {WORK_ETHICS.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <span style={{ fontSize: 26 }}>{e.icon}</span>
                    <div>
                      <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 16, margin: "0 0 3px" }}>{e.principle}</h3>
                      <span style={{ background: `${PURPLE}18`, color: PURPLE, fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 6 }}>{e.scripture}</span>
                    </div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, marginBottom: 14 }}>{e.description}</p>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12 }}>
                    <div style={{ color: GREEN, fontSize: 10, fontWeight: 700, marginBottom: 6 }}>PRACTICAL APPLICATION</div>
                    <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.65, margin: 0 }}>{e.application}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Voices Tab */}
        {activeTab === "voices" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6, color: TEXT }}>Theological Voices on Work</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>The thinkers who have most shaped a Christian theology of work and vocation.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 20, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {VOICES_WORK.map(v => (
                  <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                    style={{ background: selectedVoice === v.id ? `${PURPLE}18` : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE + "60" : BORDER}`, borderRadius: 10, padding: "14px 16px", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ color: TEXT, fontWeight: 800, fontSize: 14 }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{v.era} &middot; {v.context}</div>
                  </button>
                ))}
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                <div style={{ marginBottom: 16 }}>
                  <h3 style={{ color: TEXT, fontWeight: 900, fontSize: 22, margin: "0 0 8px" }}>{voice.name}</h3>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ background: `${PURPLE}18`, color: PURPLE, fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 6 }}>{voice.era}</span>
                    <span style={{ background: `${GREEN}12`, color: GREEN, fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 6 }}>{voice.context}</span>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, marginBottom: 18 }}>{voice.bio}</p>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}25`, borderRadius: 10, padding: 16, marginBottom: 18 }}>
                  <div style={{ color: PURPLE, fontSize: 11, fontWeight: 700, marginBottom: 8 }}>MEMORABLE QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{voice.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontSize: 11, fontWeight: 700, marginBottom: 8 }}>LASTING CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{voice.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on work and leadership.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "4KjjPr-6Wl4", title: "The Qualities of a Leader", channel: "Billy Graham Evangelistic Association", description: "Billy Graham's classic sermon on the qualities God looks for in a leader — character, humility, integrity, and servant-heartedness rooted in biblical truth." },
                  { videoId: "tz464hHSCHc", title: "Servant Leadership | Christian Ethics", channel: "The Theology Academy", description: "A theological exploration of servant leadership from a Christian ethics perspective — showing why Jesus's model of leadership is both radical and essential." },
                  { videoId: "OgjR2N9OQ58", title: "Lessons on Leadership from the Bible | The Heart of a King", channel: "Church Teaching", description: "Character, not accomplishment, is the most important quality of a leader — this sermon unpacks what biblical kingship reveals about godly leadership in any context." },
                  { videoId: "rAC5ILbsDOc", title: "John C. Maxwell — Leadership Principles from the Bible", channel: "John C. Maxwell", description: "Maxwell draws leadership principles directly from Scripture — showing how biblical wisdom has shaped great leaders across history and cultures." },
                  { videoId: "R1Z6sxuQqP4", title: "Qualities of a Christian Leader: Lessons from 2 Corinthians 1", channel: "Church Teaching", description: "An insightful sermon on the key characteristics of a Christian leader drawn from Paul's second letter to the Corinthians." },
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
      <Footer />
    </div>
  );
}
