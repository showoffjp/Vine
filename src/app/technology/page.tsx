"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const FRAMEWORKS = [
  { title: "Technology Is Not Neutral", body: "Every technology is not merely a tool — it embeds values, shapes attention, and forms habits. The printing press didn't just move information faster; it changed how people thought about authority, literacy, and private interpretation. Smartphones don't just connect us; they restructure attention spans, relationships, and the capacity for solitude. Christians must ask not only 'What can I use this for?' but 'What does this use me for?'" },
  { title: "The Attention Economy and the Spiritual Life", body: "Technology companies profit from capturing and holding attention. Notification design, infinite scroll, algorithmic feeds, and variable reward mechanisms are deliberately engineered to maximize time-on-platform. This is not neutral for the soul. Contemplative traditions have always known that the quality of our attention shapes the quality of our spiritual life. We cannot simultaneously form deep attention toward God and fragment it across a hundred digital stimuli." },
  { title: "Image-Bearing in a Digital World", body: "We were created to work with our bodies, maintain relationships in person, rest, and create. Digital life can support all of these — or erode them. The question is not whether to use technology but whether its use is consistent with our nature as embodied, social, creative image-bearers. Work that fragments rather than focuses, 'community' that replaces rather than supplements physical presence, and consumption that displaces creation all work against how God made us." },
  { title: "Sabbath as Digital Resistance", body: "The Sabbath commandment was revolutionary in its ancient context — rest one day in seven, regardless of economic pressure. It is no less countercultural today. A regular day without screens, notifications, and digital demands is a spiritual practice and a prophetic witness. It declares that our worth is not in productivity or connectivity — it is in the image of God we bear." },
];

const PRACTICES = [
  { category: "Daily Rhythms", icon: "🕐", color: "#3B82F6", items: [
    "No phone for the first 30 minutes after waking — begin with prayer instead",
    "No phone during meals with family or friends",
    "Remove social media apps from your phone — use browser only",
    "Turn off all non-essential notifications",
    "Phone charged outside the bedroom",
    "A 10-minute digital pause before bed",
  ]},
  { category: "Weekly Rhythms", icon: "📅", color: "#10B981", items: [
    "A weekly screen-free period (Sabbath or another day)",
    "One fully offline activity per week: walk, craft, meal, conversation",
    "Weekly review: did screens serve you or own you this week?",
    "Audit your social media follows — remove what isn't building you up",
  ]},
  { category: "Content Choices", icon: "🎯", color: PURPLE, items: [
    "Subscribe to a few high-quality newsletters instead of endless scrolling",
    "Choose books over feeds for long-form content",
    "Curate a short list of trusted information sources",
    "Be conscious of what you consume before sleep",
    "Unsubscribe from emails that don't serve you",
  ]},
  { category: "Relationships", icon: "🤝", color: "#F59E0B", items: [
    "Prefer a phone call or in-person meeting over a text for hard conversations",
    "Don't let group chats replace actual community",
    "Be physically present when with others — phone away or off",
    "Express care and conflict in person when possible, not over text",
  ]},
];

const QUESTIONS = [
  { q: "Is my phone use bringing me closer to or farther from God?", cat: "Spiritual" },
  { q: "Am I using social media or does it use me?", cat: "Spiritual" },
  { q: "How many hours per day am I on screens? Is that consistent with my stated priorities?", cat: "Stewardship" },
  { q: "Am I more or less able to sit in silence than I was five years ago?", cat: "Formation" },
  { q: "Does my digital life reflect who I am trying to become?", cat: "Character" },
  { q: "What would I do with my phone-time if it were freed up?", cat: "Vision" },
  { q: "Do my children or spouse feel they compete with my phone for my attention?", cat: "Relationships" },
  { q: "When did I last read a book, sit in silence, or create something without a screen?", cat: "Embodiment" },
];

type Tab = "theology" | "thinkers" | "practices" | "audit" | "videos";

const THINKERS = [
  {
    id: "mcluhan",
    name: "Marshall McLuhan",
    era: "1911-1980",
    context: "Canadian philosopher of communication; 'the medium is the message'",
    bio: "McLuhan is the foundational theorist of media and technology. A Catholic convert, his analysis was deeply shaped by a sacramental understanding of matter — that physical forms carry meaning. His famous aphorism 'the medium is the message' means that the form of a communication technology shapes consciousness more profoundly than any content transmitted through it. Television didn't just carry content — it rewired how people processed information. The internet didn't just deliver text — it restructured attention, identity, and community.",
    quote: "The medium is the message. We shape our tools, and thereafter our tools shape us. We are becoming what we behold.",
    contribution: "McLuhan gave Christians the conceptual vocabulary to ask not just 'what am I using technology for?' but 'what is technology doing to me through use?' His analysis of how media forms shape consciousness is directly applicable to smartphones, social media, and digital culture. His insight that each new medium creates new environments of sense (and destroys old ones) warns against the naive assumption that digital tools are neutral containers for Christian content.",
  },
  {
    id: "crouch",
    name: "Andy Crouch",
    era: "1968-present",
    context: "Former executive editor of Christianity Today; author of Culture Making and The Tech-Wise Family",
    bio: "Crouch is the most important Christian thinker on technology and culture for the evangelical world. 'Culture Making' (2008) argued that Christians are called to make culture, not merely critique or consume it. 'The Tech-Wise Family' (2017) brought the analysis to practical home life: ten commitments for a household that uses technology rather than being used by it. His 'The Life We're Looking For' (2022) examines how technology undermines the embodied, personal life we were made for.",
    quote: "The defining question is not 'what does technology allow us to do?' but 'what kind of people are we becoming through its use?' Device-free zones and times are not restrictions but invitations to the life we actually want.",
    contribution: "Crouch gave the evangelical world a positive, constructive account of engagement with technology — not mere resistance but active cultural making. His Tech-Wise Family commitments (devices in public spaces only, no phones at meals, no technology in bedrooms) have been practically influential in Christian households. His concept of 'effortlessness' — the danger of technology that removes productive resistance from human life — is one of the most penetrating critiques of contemporary digital culture.",
  },
  {
    id: "carr",
    name: "Nicholas Carr",
    era: "1959-present",
    context: "American technology writer; The Shallows, The Glass Cage",
    bio: "Carr's 'The Shallows: What the Internet Is Doing to Our Brains' (2010) made the case, grounded in neuroscience, that sustained internet use physically rewires the brain — reducing the capacity for deep reading, sustained attention, and contemplative thinking. A secular writer, Carr was prescient about what digital Christianity had failed to notice: that the medium of screen-based, hyperlinked, notification-driven information fundamentally works against the kind of attention required for spiritual formation. 'The Glass Cage' (2014) extended the analysis to automation.",
    quote: "The net is designed to be an interruption system, a machine geared to dividing attention. It undermines the quiet, attentive mind that is the ground of deep thought.",
    contribution: "Carr's neuroscientific analysis gives Christians empirical ground for what contemplative tradition has always known: that the quality of attention is the quality of the soul. If sustained internet use reduces the capacity for deep attention, it reduces the capacity for prayer, lectio divina, and any practice that requires sustained contemplative focus. Carr is not a Christian writer, but his work is more useful for spiritual formation than most Christian technology books because it takes the physiological reality seriously.",
  },
  {
    id: "reinke",
    name: "Tony Reinke",
    era: "1977-present",
    context: "Author; staff writer at Desiring God",
    bio: "Reinke's '12 Ways Your Phone Is Changing You' (2017) and 'Competing Spectacles' (2019) are the most widely-read evangelical treatments of digital technology and the soul. Drawing on John Piper's theology of desire — that we were made to be satisfied by the glory of God and are constantly distracted from it — Reinke analyzes how smartphones reconfigure desire, attention, and identity. 'Competing Spectacles' argues that the fundamental human question is what we behold, and that spectacular digital images compete directly with the spectacle of the gospel.",
    quote: "Your smartphone is a mirror — it shows you exactly what you crave. What you see will tell you what you love. And what you love will tell you what kind of person you are becoming.",
    contribution: "Reinke gave evangelical Christians a pastoral framework for engaging technology that is rooted in a theology of desire, not merely a technology of boundaries. His framing — that the spectacle of digital culture and the spectacle of the cross are in direct competition for the gaze of the soul — makes the technology question fundamentally a worship question. This integration of Augustinian desire-theology with media analysis is his distinctive contribution.",
  },
  {
    id: "turkle",
    name: "Sherry Turkle",
    era: "1948-present",
    context: "MIT psychologist; Alone Together, Reclaiming Conversation",
    bio: "Turkle's 'Alone Together: Why We Expect More from Technology and Less from Each Other' (2011) and 'Reclaiming Conversation' (2015) document the relational and psychological cost of perpetual connectivity. Based on decades of research, she shows that smartphone use during conversations communicates to the other person that they are not fully valued, that teenagers are losing the capacity for empathy through reduced face-to-face interaction, and that 'always-on' connectivity produces loneliness rather than curing it.",
    quote: "We are being shaped by technology to prefer connection over conversation — and we are losing the ability to be alone with ourselves. These are not merely social changes; they are changes to the self.",
    contribution: "Turkle's empirical documentation of technology's relational costs gives Christians concrete evidence for what the theology of embodiment implies: that digital substitutes for embodied presence are impoverished, and that the incapacity for solitude is directly related to the incapacity for authentic relationship. Her work is particularly relevant for understanding youth formation — and for asking what discipleship looks like in a generation that has grown up without the development of deep conversational capacity.",
  },
];

interface CheckItem { id: string; text: string; cat: string; done: boolean; }

export default function TechnologyPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_technology_tab", "theology");
  const [selectedThinker, setSelectedThinker] = usePersistedState("vine_technology_selected_thinker", "mcluhan");
  const thinker = THINKERS.find(t => t.id === selectedThinker)!;
  const [checks, setChecks] = useState<CheckItem[]>(() => {
    try {
      const s = localStorage.getItem("vine_tech_checks");
      if (s) return JSON.parse(s);
    } catch {}
    const items: CheckItem[] = [];
    PRACTICES.forEach(cat => cat.items.forEach((text, i) => items.push({ id: `${cat.category}-${i}`, text, cat: cat.category, done: false })));
    return items;
  });

  useEffect(() => { try { localStorage.setItem("vine_tech_checks", JSON.stringify(checks)); } catch {} }, [checks]);

  const toggle = (id: string) => setChecks(prev => prev.map(c => c.id === id ? { ...c, done: !c.done } : c));
  const done = checks.filter(c => c.done).length;

  const CAT_COLORS: Record<string, string> = { "Daily Rhythms": "#3B82F6", "Weekly Rhythms": "#10B981", "Content Choices": PURPLE, "Relationships": "#F59E0B" };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📱</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Faith & Technology</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Technology is not neutral — it shapes attention, habits, and formation. Christians must ask not only what they use technology for, but what technology uses them for.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "thinkers" as const, label: "Thinkers", icon: "💡" },
            { id: "practices" as const, label: "Practices", icon: "✅" },
            { id: "audit" as const, label: "Self-Audit", icon: "🔍" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            {FRAMEWORKS.map((f, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 12 }}>{f.title}</h3>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{f.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "thinkers" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {THINKERS.map(t => (
                <button type="button" key={t.id} onClick={() => setSelectedThinker(t.id)}
                  style={{ width: "100%", background: selectedThinker === t.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedThinker === t.id ? PURPLE + "70" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedThinker === t.id ? PURPLE : TEXT, fontWeight: 800, fontSize: 13, marginBottom: 2 }}>{t.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{t.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>{thinker.era}</div>
                  <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 24, marginBottom: 4 }}>{thinker.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{thinker.context}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{thinker.bio}</p>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18, marginBottom: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 10 }}>IN THEIR OWN WORDS</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>&ldquo;{thinker.quote}&rdquo;</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{thinker.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ color: TEXT, fontWeight: 700 }}>Practices adopted</div>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 18 }}>{done}/{checks.length}</div>
            </div>
            {PRACTICES.map(cat => {
              const catChecks = checks.filter(c => c.cat === cat.category);
              return (
                <div key={cat.category} style={{ background: CARD, border: `1px solid ${cat.color}30`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                    <span style={{ fontSize: 20 }}>{cat.icon}</span>
                    <h3 style={{ color: cat.color, fontWeight: 800, fontSize: 17, margin: 0 }}>{cat.category}</h3>
                    <span style={{ color: MUTED, fontSize: 12, marginLeft: "auto" }}>{catChecks.filter(c => c.done).length}/{catChecks.length}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {catChecks.map(item => (
                      <div key={item.id} onClick={() => toggle(item.id)}
                        style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer", padding: "8px 12px", borderRadius: 8, background: item.done ? `${cat.color}10` : "transparent", border: `1px solid ${item.done ? cat.color + "30" : "transparent"}` }}>
                        <div style={{ width: 18, height: 18, borderRadius: 4, border: `2px solid ${item.done ? cat.color : BORDER}`, background: item.done ? cat.color : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                          {item.done && <span style={{ color: BG, fontSize: 11, fontWeight: 900 }}>✓</span>}
                        </div>
                        <span style={{ color: item.done ? cat.color : TEXT, fontSize: 14, lineHeight: 1.5, textDecoration: item.done ? "line-through" : "none" }}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "audit" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These questions are not designed to produce guilt — they are diagnostic tools. Sit with each one in prayer and let honest answers surface. The goal is awareness, not condemnation.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {QUESTIONS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 800, fontSize: 13, flexShrink: 0 }}>{i + 1}</div>
                  <div>
                    <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "2px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700, display: "inline-block", marginBottom: 6 }}>{item.cat}</span>
                    <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.65, margin: 0 }}>{item.q}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on Christians and technology.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "gmojQk1lgDc", title: "A Theology of Technology | Genesis 4", channel: "Andrew Wilson", description: "Andrew Wilson unpacks what Genesis 4 teaches about the origins of human technology, its possibilities, and its dangers — and how Christians should think Christianly about it." },
                  { videoId: "Bk_n34xGhBI", title: "A Theology of Technology | Genesis 4:19-22", channel: "Gordon-Conwell Theological Seminary", description: "A seminary lecture examining what the Bible has to say about technology, smartphones, computers, and more, rooted in the earliest chapters of Scripture." },
                  { videoId: "5YuvgAUj1X0", title: "The Christian Response to AI & Technology", channel: "Church Teaching", description: "A message exploring how AI is reshaping the way people live, work, think, and communicate — and what a faithful Christian response looks like." },
                  { videoId: "QL1kViROrKM", title: "How Should Christians Engage with Technology?", channel: "Christian Teaching", description: "A thoughtful exploration of Christian engagement with apps, AI, social media, and modern communication — and the discernment required to use them well." },
                  { videoId: "0kNXJYa3Mqk", title: "A History of Technology and Christianity", channel: "Wes Huff", description: "Wes Huff traces the historical relationship between technology and Christianity, showing how the church has engaged — for better and worse — with technological change across centuries." },
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
      </main>
      <Footer />
    </div>
  );
}
