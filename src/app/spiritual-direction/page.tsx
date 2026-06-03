"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "what" | "tradition" | "finding" | "session" | "videos";

const TABS: { id: Tab; label: string }[] = [
  { id: "what", label: "What Is Spiritual Direction?" },
  { id: "tradition", label: "The Tradition" },
  { id: "finding", label: "Finding a Director" },
  { id: "session", label: "What Happens in a Session?" },
  { id: "videos", label: "🎬 Videos" },
];

const WHAT_ITEMS = [
  {
    id: "definition",
    title: "Definition",
    body: "Spiritual direction is, in Gerald May's words, 'the art of helping a person notice and respond to God.' It is distinct from counseling, therapy, mentoring, or preaching. The director is primarily a listener — not a teacher, therapist, or advice-giver. The goal is to help the directee pay attention to God's presence and movement in their own life.",
  },
  {
    id: "holyspirit",
    title: "The Holy Spirit Directs",
    body: "The spiritual director is a 'mid-wife,' not the source. Ignatius of Loyola taught that the director's role is to help the directee perceive what God is already doing — not to impose a spiritual program or project their own experience. The Holy Spirit is the true director; the human director simply creates space for the directee to hear.",
  },
  {
    id: "history",
    title: "History",
    body: "Spiritual direction is one of the oldest practices in the church. It begins with the Desert Fathers and Mothers (3rd–4th centuries), whose 'abba' and 'amma' sayings were records of their guidance. The tradition passed through monastic communities, was systematized by Ignatius of Loyola in the 16th century, cultivated by Francis de Sales for lay people, and is now experiencing a widespread Protestant rediscovery.",
  },
  {
    id: "whoneeds",
    title: "Who Needs a Spiritual Director?",
    body: "Spiritual direction is not just for mystics, clergy, or those in religious life. It is for any ordinary Christian in a season of seeking, transition, spiritual aridity, or deepening. If you long to grow in prayer, to understand your own soul better, or to discern God's direction in a particular season — direction may be exactly what you need.",
  },
  {
    id: "soulcare",
    title: "Spiritual Direction vs. Soul Care",
    body: "Spiritual direction focuses specifically on God's movement in one's life — the interior spiritual journey. Counseling focuses on psychological health, trauma, and emotional wellbeing. They are complementary, not competing. Many people benefit from both simultaneously. A good director knows the difference and refers when appropriate.",
  },
  {
    id: "protestant",
    title: "Finding Direction in Protestant Contexts",
    body: "The tradition of spiritual direction is primarily Catholic and Orthodox in its historical roots. However, it has been actively recovered by Protestant renewal movements — notably Renovaré (founded by Richard Foster), Spiritual Directors International, and an increasing number of Protestant seminaries. Evangelicals are finding that the tradition, carefully received, is deeply consistent with Scripture.",
  },
];

const TRADITION_ITEMS = [
  {
    id: "desert",
    name: "The Desert Fathers and Mothers",
    period: "3rd–4th Century",
    context:
      "Beginning in the Egyptian desert around 270 AD, men and women fled to the wilderness seeking God away from a Christianized empire. Around these abbas and ammas gathered disciples seeking a 'word' — a brief, potent piece of spiritual counsel.",
    contribution:
      "The foundational model of spiritual accompaniment: a brief, humble word from one who has gone deeper into prayer, given to help the seeker find their own way. The 'apophthegmata patrum' (Sayings of the Desert Fathers) record hundreds of these exchanges.",
    writings: "Sayings of the Desert Fathers (Apophthegmata Patrum), The Conferences of John Cassian",
    quote:
      "Abba Moses said: 'A man who lives apart from other men is like a ripe grape. And one who lives among men is like a sour grape.' The sayings were not systematic teaching but Spirit-prompted words for a specific person in a specific moment.",
  },
  {
    id: "ignatius",
    name: "Ignatius of Loyola",
    period: "1491–1556",
    context:
      "A Spanish soldier converted through illness, Ignatius became the founder of the Jesuits and the systematizer of spiritual direction. His Spiritual Exercises created a 30-day retreat framework that remains in use today.",
    contribution:
      "The formal structure of directed prayer and discernment of spirits. Ignatius distinguished consolation (interior movements toward God — peace, love, joy) from desolation (movements away — confusion, dryness, anxiety). He taught directors to help directees read their interior weather.",
    writings: "The Spiritual Exercises, Autobiography, Letters",
    quote:
      "'The director of the Exercises ought not to urge the exercitant more to poverty or any promise than to the contrary, nor to one state of life or way of living more than to another… it belongs to the Creator to communicate Himself to the devout soul.' — Ignatius, Annotation 15",
  },
  {
    id: "desales",
    name: "Francis de Sales",
    period: "1567–1622",
    context:
      "Bishop of Geneva and Counter-Reformation preacher, Francis de Sales was unusual for his era in extending the spiritual life — and spiritual direction — to lay people, not just clergy and monastics.",
    contribution:
      "The democratization of spiritual direction. His 'Introduction to the Devout Life' was written for an ordinary lay woman (his cousin Madame de Charmoisy) and argued that all Christians, whatever their vocation, are called to devout life and can benefit from a director.",
    writings: "Introduction to the Devout Life, Treatise on the Love of God",
    quote:
      "'Tell me, Philothea, our heart is tender and frail, and temptation is very powerful. How shall we stand unless we have someone to lead us by the hand?' — Francis de Sales, Introduction to the Devout Life",
  },
  {
    id: "merton",
    name: "Thomas Merton",
    period: "1915–1968",
    context:
      "A Trappist monk at Gethsemani Abbey in Kentucky, Merton became the most widely read spiritual writer of the 20th century — a bridge between the ancient contemplative tradition and modern seekers across all traditions.",
    contribution:
      "Bringing the contemplative tradition of spiritual direction to a modern, ecumenical audience. Merton wrote explicitly on the theory and practice of direction, and his autobiographical work modeled what interior transformation under guidance looks like.",
    writings: "Spiritual Direction and Meditation, The Climate of Monastic Prayer, The Seven Storey Mountain, New Seeds of Contemplation",
    quote:
      "'The whole purpose of spiritual direction is to penetrate beneath the surface of a man's life, to get behind the fagade of conventional gestures and attitudes which he presents to the world, and to bring out his inner spiritual freedom.' — Thomas Merton",
  },
  {
    id: "may",
    name: "Gerald May",
    period: "1940–2005",
    context:
      "A psychiatrist and theologian at the Shalem Institute for Spiritual Formation in Washington D.C., Gerald May was a pioneer in integrating psychological insight with classical spiritual direction — making the tradition accessible to Protestants.",
    contribution:
      "The integration of spiritual direction and psychology without collapsing one into the other. May argued that spiritual direction and therapy are complementary disciplines, and that directors need to understand psychology without becoming therapists. He helped make the tradition welcoming to evangelicals and mainline Protestants.",
    writings: "Care of Mind, Care of Spirit; Addiction and Grace; The Awakened Heart; Will and Spirit",
    quote:
      "'The spiritual director does not direct. The director simply helps the directee to notice and to respond to what God is doing.' — Gerald May, Care of Mind, Care of Spirit",
  },
];

const FINDING_STEPS = [
  {
    num: 1,
    title: "Pray First",
    body: "Ask the Holy Spirit to guide the search. This is a spiritual relationship, not merely a professional engagement. Begin with openness and trust that God can provide the right person at the right time.",
  },
  {
    num: 2,
    title: "Know What You're Looking For",
    body: "A good director listens far more than they speak. They have an active prayer life, know their own spiritual tradition well, and have supervision from another director or peer group. They hold what you share with care and confidentiality.",
  },
  {
    num: 3,
    title: "Where to Look",
    body: "Spiritual Directors International (sdiworld.org) maintains a global directory. Renovaré has trained directors across Protestant traditions. Your denomination's retreat centers, seminary professors, and experienced pastors are also good starting points.",
  },
  {
    num: 4,
    title: "Interview Before Committing",
    body: "Most directors offer a trial session or initial conversation. Ask: What tradition do you come from? Do you have a supervisor? How do you understand your role? What does a typical session look like? Their answers will tell you much.",
  },
  {
    num: 5,
    title: "Red Flags",
    body: "Be cautious of directors who give too much advice, who project their own spiritual experience onto you, who blur appropriate boundaries, or who lack supervision themselves. A good director holds the space without filling it.",
  },
  {
    num: 6,
    title: "The First Few Sessions",
    body: "Early sessions are about building trust and sharing your spiritual history. You and your director begin to notice patterns together — in your prayer life, in your interior movements, in how God seems to be at work.",
  },
  {
    num: 7,
    title: "How Long Does Direction Last?",
    body: "Monthly sessions are typical. Seasons of one to three years are common, though direction can be lifelong. There is no fixed end — some people continue with the same director for decades; others move on when a season concludes.",
  },
];

const SESSION_ITEMS = [
  {
    id: "format",
    title: "Frequency and Format",
    body: "Sessions are typically one hour and occur monthly. They may be in person or via video call. Most directors begin with a period of silence — a deliberate slowing down before conversation begins. The pace is unhurried.",
  },
  {
    id: "directeerole",
    title: "The Directee's Role",
    body: "You share what has been happening in your prayer, your life, and your relationship with God since the last session. You come with honesty, not performance. You do not need to have had dramatic spiritual experiences — dryness and confusion are as welcome as consolation.",
  },
  {
    id: "directorrole",
    title: "The Director's Role",
    body: "The director listens more than they speak. They ask gentle, open questions. They reflect back what they hear. Occasionally they may offer a Scripture passage, an image, or an observation. They pray — silently and often aloud at the close of the session.",
  },
  {
    id: "discernment",
    title: "Discernment of Consolation and Desolation",
    body: "Drawing on Ignatian vocabulary: consolation describes interior movements toward God — peace, love, joy, increased faith. Desolation describes movements away — darkness, confusion, restlessness, decreased faith. Learning to read your interior weather, and to respond wisely, is a core skill direction develops.",
  },
  {
    id: "bring",
    title: "What to Bring",
    body: "Your prayer journal if you keep one. Significant dreams or images that have stayed with you. Periods of dryness or spiritual confusion. Moments of unexpected clarity or peace. Decisions you are facing. There is no wrong thing to bring.",
  },
  {
    id: "notdirection",
    title: "What Direction Is NOT",
    body: "Spiritual direction is not confession, though it may include moments of honest acknowledgment. It is not therapy or counseling. It is not advice-giving or problem-solving. It is not Bible study or discipleship training. It is attending — together — to God's presence and movement in your life.",
  },
];

function Accordion({
  items,
  expanded,
  toggle,
}: {
  items: { id: string; title: string; body: string }[];
  expanded: Record<string, boolean>;
  toggle: (id: string) => void;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Navbar />
      {items.map((item) => {
        const open = !!expanded[item.id];
        return (
          <div
            key={item.id}
            style={{
              background: CARD,
              border: `1px solid ${open ? PURPLE : BORDER}`,
              borderRadius: 10,
              overflow: "hidden",
              transition: "border-color 0.2s",
            }}
          >
            <button
              onClick={() => toggle(item.id)}
              style={{
                width: "100%",
                background: "none",
                border: "none",
                padding: "18px 24px",
                textAlign: "left",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
              }}
            >
              <span style={{ color: TEXT, fontWeight: 600, fontSize: 16 }}>{item.title}</span>
              <span
                style={{
                  color: PURPLE,
                  fontSize: 20,
                  fontWeight: 300,
                  lineHeight: 1,
                  flexShrink: 0,
                  transform: open ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
              >
                +
              </span>
            </button>
            {open && (
              <div
                style={{
                  padding: "0 24px 20px",
                  color: MUTED,
                  fontSize: 15,
                  lineHeight: 1.75,
                }}
              >
                {item.body}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function TabWhat({
  expanded,
  toggle,
}: {
  expanded: Record<string, boolean>;
  toggle: (id: string) => void;
}) {
  return (
    <div>
      <h2 style={{ color: TEXT, fontSize: 26, fontWeight: 700, marginBottom: 8 }}>
        What Is Spiritual Direction?
      </h2>
      <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 32, maxWidth: 680 }}>
        Spiritual direction is an ancient Christian practice of holy conversation — one person helping another pay
        attention to God. Explore the accordion sections below to understand what it is, where it came from, and
        whether it might be right for you.
      </p>
      <Accordion items={WHAT_ITEMS} expanded={expanded} toggle={toggle} />
    </div>
  );
}

function TabTradition({ selected, setSelected }: { selected: string; setSelected: (id: string) => void }) {
  const director = TRADITION_ITEMS.find((t) => t.id === selected) ?? TRADITION_ITEMS[0];
  return (
    <div>
      <h2 style={{ color: TEXT, fontSize: 26, fontWeight: 700, marginBottom: 8 }}>
        The Tradition
      </h2>
      <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 32, maxWidth: 680 }}>
        Spiritual direction has a rich history spanning nearly two millennia. Select a figure to explore their
        context, contribution, and key writings.
      </p>
      <div style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
        {/* Left list */}
        <div
          style={{
            minWidth: 220,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            position: "sticky",
            top: 24,
          }}
        >
          {TRADITION_ITEMS.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelected(t.id)}
              style={{
                background: selected === t.id ? PURPLE + "22" : "transparent",
                border: `1px solid ${selected === t.id ? PURPLE : BORDER}`,
                borderRadius: 8,
                padding: "12px 16px",
                textAlign: "left",
                cursor: "pointer",
                color: selected === t.id ? TEXT : MUTED,
                fontWeight: selected === t.id ? 600 : 400,
                fontSize: 14,
                lineHeight: 1.4,
                transition: "all 0.15s",
              }}
            >
              <div>{t.name}</div>
              <div style={{ color: PURPLE, fontSize: 12, marginTop: 2 }}>{t.period}</div>
            </button>
          ))}
        </div>

        {/* Right detail */}
        <div
          style={{
            flex: 1,
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: 12,
            padding: "28px 32px",
          }}
        >
          <div style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 4, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {director.period}
          </div>
          <h3 style={{ color: TEXT, fontSize: 22, fontWeight: 700, marginBottom: 20 }}>{director.name}</h3>

          <div style={{ marginBottom: 20 }}>
            <div style={{ color: GREEN, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
              Context
            </div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: 0 }}>{director.context}</p>
          </div>

          <div style={{ marginBottom: 20 }}>
            <div style={{ color: GREEN, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
              Key Contribution
            </div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: 0 }}>{director.contribution}</p>
          </div>

          <div style={{ marginBottom: 20 }}>
            <div style={{ color: GREEN, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
              Key Writings
            </div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: 0 }}>{director.writings}</p>
          </div>

          <div
            style={{
              background: PURPLE + "18",
              border: `1px solid ${PURPLE}40`,
              borderLeft: `3px solid ${PURPLE}`,
              borderRadius: 6,
              padding: "14px 18px",
            }}
          >
            <div style={{ color: PURPLE, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
              Representative Approach / Quote
            </div>
            <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{director.quote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabFinding() {
  return (
    <div>
      <h2 style={{ color: TEXT, fontSize: 26, fontWeight: 700, marginBottom: 8 }}>
        Finding a Director
      </h2>
      <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 40, maxWidth: 680 }}>
        Finding the right spiritual director takes patience and discernment. Follow these seven steps as a
        practical guide for beginning your search.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {FINDING_STEPS.map((step, idx) => (
          <div key={step.num} style={{ display: "flex", gap: 24, position: "relative" }}>
            {/* Timeline line */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 40, flexShrink: 0 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: PURPLE,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 16,
                  flexShrink: 0,
                  zIndex: 1,
                  position: "relative",
                }}
              >
                {step.num}
              </div>
              {idx < FINDING_STEPS.length - 1 && (
                <div
                  style={{
                    width: 2,
                    flex: 1,
                    background: BORDER,
                    minHeight: 32,
                  }}
                />
              )}
            </div>

            {/* Content */}
            <div style={{ paddingBottom: idx < FINDING_STEPS.length - 1 ? 32 : 0, paddingTop: 6, flex: 1 }}>
              <div style={{ color: TEXT, fontWeight: 700, fontSize: 17, marginBottom: 6 }}>{step.title}</div>
              <div style={{ color: MUTED, fontSize: 15, lineHeight: 1.75 }}>{step.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TabSession({
  expanded,
  toggle,
}: {
  expanded: Record<string, boolean>;
  toggle: (id: string) => void;
}) {
  return (
    <div>
      <h2 style={{ color: TEXT, fontSize: 26, fontWeight: 700, marginBottom: 8 }}>
        What Happens in a Session?
      </h2>
      <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 32, maxWidth: 680 }}>
        Many people wonder what a spiritual direction session actually looks and feels like. These accordion items
        walk through the format, the roles, and what to expect.
      </p>
      <Accordion items={SESSION_ITEMS} expanded={expanded} toggle={toggle} />
    </div>
  );
}

export default function SpiritualDirectionPage() {
  const [activeTab, setActiveTab] = useState<Tab>("what");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedDirector, setSelectedDirector] = useState<string>("desert");

  function toggle(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: 80,
        paddingBottom: 80,
        color: TEXT,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div
            style={{
              display: "inline-block",
              background: GREEN + "18",
              border: `1px solid ${GREEN}40`,
              color: GREEN,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "4px 12px",
              borderRadius: 20,
              marginBottom: 16,
            }}
          >
            Contemplative Practice
          </div>
          <h1 style={{ color: TEXT, fontSize: 36, fontWeight: 800, marginBottom: 12, lineHeight: 1.2 }}>
            Spiritual Direction
          </h1>
          <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.7, maxWidth: 640, margin: 0 }}>
            One of the oldest practices in Christian history — helping a person notice and respond to God. Explore
            the what, the history, how to find a director, and what a session actually involves.
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 4,
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: 12,
            padding: 6,
            marginBottom: 40,
            flexWrap: "wrap",
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: "1 1 auto",
                background: activeTab === tab.id ? PURPLE : "transparent",
                border: "none",
                borderRadius: 8,
                padding: "10px 18px",
                color: activeTab === tab.id ? "#fff" : MUTED,
                fontWeight: activeTab === tab.id ? 600 : 400,
                fontSize: 14,
                cursor: "pointer",
                transition: "all 0.15s",
                whiteSpace: "nowrap",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "what" && (
          <TabWhat expanded={expanded} toggle={toggle} />
        )}
        {activeTab === "tradition" && (
          <TabTradition selected={selectedDirector} setSelected={setSelectedDirector} />
        )}
        {activeTab === "finding" && <TabFinding />}
        {activeTab === "session" && (
          <TabSession expanded={expanded} toggle={toggle} />
        )}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings on spiritual direction, contemplative prayer, and the practice of listening for God.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "ZIl-SaUTOis", title: "Contemplative Prayer — Spiritual Directions Podcast", channel: "Spiritual Directions", description: "A practical introduction to contemplative prayer for those who want to go deeper in their relationship with God but can't find a formal spiritual director." },
                  { videoId: "J0jZb5iJzno", title: "An Inward Life of Confidence Before God", channel: "Wheaton College (Richard Foster)", description: "Richard Foster — author of Celebration of Discipline — on cultivating the interior life and the practice of spiritual direction as an ancient Christian tradition." },
                  { videoId: "4R87Hl52fgY", title: "The Sanctuary of the Soul", channel: "Wheaton College (Richard Foster)", description: "Foster explores the deep interior life — drawing on the great Christian directors from Ignatius to Teresa of Avila — and what it means to create space for God in the soul." },
                  { videoId: "FDiH992tO_o", title: "Ignatian Contemplation Prayer — Discernment Series", channel: "Ignatian Spirituality", description: "An introduction to Ignatian contemplative prayer — the method developed by Ignatius of Loyola and used by spiritual directors for 500 years to help believers encounter Christ in Scripture." },
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
