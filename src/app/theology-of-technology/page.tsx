"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "ai" | "socialmedia" | "practices" | "videos";

const STATS = [
  "Average American spends 7 hours/day on screens",
  "Social media use linked to 2x depression risk in teens",
  "The printing press enabled the Reformation in 1517",
  "Andy Crouch: 'The real question is: what does this make possible, and what does it make impossible?'",
];

const THEOLOGY_ITEMS = [
  {
    title: "Technology as Cultural Mandate",
    body: "Genesis 1-2 establishes humans as image-bearers with a mandate to 'fill the earth and subdue it' (Gen 1:28) and 'work and keep' the garden (Gen 2:15). Andy Crouch, in Culture Making (2008), argues that this cultural mandate includes making things — cultivation and creation are fundamental human vocations. Technology is part of this mandate: a continuation of human creativity reflecting God's own creativity. The printing press, the hospital, the plow, the symphony orchestra, the computer — all are human responses to the cultural mandate. This is the basis for a positive theology of technology: technology, at its best, is humans fulfilling their God-given role as sub-creators.",
  },
  {
    title: "The Fall and the Corruption of Technology",
    body: "The same capacity for creation that produces cathedrals and vaccines also produces Auschwitz and nuclear weapons. Genesis 3 does not leave technology untouched by the Fall. The Tower of Babel (Genesis 11) is the Bible's first parable of technology-powered hubris: 'Come, let us build ourselves a city... so that we may make a name for ourselves.' Technology enables both human flourishing and human self-deification. The question for every technology is not merely 'Can we do this?' but 'Should we do this? What does it do to us? Whom does it serve?' A theology of technology that ignores the Fall produces naive technophilia; a theology that stops at the Fall produces paralyzing technophobia.",
  },
  {
    title: "The Medium Is Not Neutral: Marshall McLuhan",
    body: "Canadian philosopher Marshall McLuhan famously said 'The medium is the message' — meaning that the form of communication shapes the content and the audience, independently of the specific content being communicated. Television trained audiences for passivity and entertainment; it was structurally incompatible with the sustained argument that a book or a sermon requires. The internet trained audiences for speed, skimming, and distraction. Social media trained audiences for performance, validation-seeking, and outrage. Neil Postman, McLuhan's student, applied this to religion: Amusing Ourselves to Death (1985) argued that television was already transforming the church into entertainment before the smartphone existed.",
  },
  {
    title: "Algorithms and Spiritual Formation",
    body: "James K.A. Smith's You Are What You Love (2016) argues that we are formed by our liturgies — the repeated practices that orient our desires and attention. Social media algorithms are liturgies of a kind: they repeat specific patterns of attention, reward, and desire-formation. Scrolling TikTok for an hour is a liturgy that forms the person who does it — toward distraction, comparison, outrage, and insatiability. This is not merely a productivity problem — it is a discipleship problem. The question is: are the algorithm's 'liturgies' forming you toward Jesus, or toward some other set of desires?",
  },
  {
    title: "AI and the Image of God",
    body: "Artificial intelligence raises profound theological questions: (1) If machines can reason, create, and generate, what is distinctive about human intelligence? (2) Is AI-generated art 'creativity' in any meaningful sense? (3) Can AI deceive? Can it be morally responsible? (4) What happens to human dignity in a world where AI does most cognitive work? The Christian answer begins with the imago Dei: human beings are not merely complex information processors. They are relational, morally responsible, embodied persons in covenant with the living God. AI is a tool — extraordinarily powerful — but it is not a person and cannot replace the relationship, accountability, and dignity of persons made in God's image.",
  },
  {
    title: "The Digital Sabbath and the Discipline of Disconnection",
    body: "The Sabbath commandment (Exodus 20:8-11) was given to people who would otherwise never stop working. Its logic applies to digital life: if you cannot stop, you are enslaved — to your email, your notifications, your social media feed. The digital Sabbath is a modern application of an ancient principle: one day (or one hour, or one evening) per week of intentional disconnection, for the purpose of being present to God, to family, and to the actual physical world. This is not a productivity hack — it is a spiritual discipline. It refuses the lie that you must be always available, always connected, always informed.",
  },
];

const AI_ITEMS = [
  {
    title: "What AI Is and Is Not",
    body: "Current AI (Large Language Models, image generation, etc.) are pattern-recognition and prediction systems trained on massive datasets. They generate plausible text and images by statistical prediction — not by understanding, intending, or believing anything. They are extraordinarily useful tools. They are not conscious, not spiritual, not moral agents. The temptation is to anthropomorphize — to project personhood onto systems that mimic it. A Christian anthropology is clear: personhood involves consciousness, moral responsibility, relationship with God, and embodiment. AI has none of these — however impressive its outputs.",
  },
  {
    title: "AI and the Church's Ministry",
    body: "AI tools can assist with: sermon research, writing first drafts, answering frequently asked questions, translating Scripture, accessibility tools (captions, screen reading), pastoral care logistics (scheduling, follow-up reminders). The danger is when AI replaces rather than supports: AI-generated sermons delivered without pastoral engagement, AI counseling without human relationship, AI prayer without the heart of the person praying. Ministry is incarnational — it requires the presence of a person who has been with Jesus. AI can be a useful assistant but never a replacement for the shepherd.",
  },
  {
    title: "AI and Deception",
    body: "AI can generate convincing fake images, audio, and video of real people saying and doing things they never said or did. 'Deepfake' technology is already being used to produce false testimony, false confessions, and false propaganda. For Christians committed to truthfulness ('You shall not bear false witness'), the proliferation of AI-generated deception is a profound ethical concern. Discernment about what is real is increasingly difficult. The church's historic commitment to truth-telling — in a world increasingly awash in algorithmically generated falsehood — is prophetic witness.",
  },
  {
    title: "Creativity and the Question of Authorship",
    body: "If a Christian generates an image using AI with a text prompt, who is the author? If a pastor runs a sermon through an AI to 'improve' it, whose words are being preached? These are not merely academic questions — they touch the authenticity of ministry and art. A Christian theology of creativity insists on the particularity of the person: the specific body, history, suffering, and joy of a particular person matters in the making of art and in the delivery of a sermon. AI-generated art is not wrong — but it is not a substitute for the formed person creating from their particular life.",
  },
  {
    title: "AI and Pastoral Care",
    body: "Some ministries are experimenting with AI chatbots for pastoral care — available 24/7, always patient, never tired. There is real value in a resource that is always available. But pastoral care is not primarily information exchange — it is presence. The person in crisis at 3am needs more than good advice; they need someone who has suffered and can sit with them in suffering. The church's investment should be in training more people to offer genuine pastoral presence — not in outsourcing presence to technology that can simulate it.",
  },
  {
    title: "Responsible AI Use in Daily Life",
    body: "Practical principles: (1) Use AI as a tool, not an oracle — verify everything it tells you; (2) Don't use AI to say things you wouldn't say yourself — if you use AI to write a message to a grieving friend, that's not your care, it's AI's; (3) Protect privacy — don't enter sensitive personal or pastoral data into AI systems; (4) Be transparent about AI use when others might reasonably expect a human; (5) Maintain the practices that AI cannot replicate: prayer, embodied presence, Scripture meditation, honest conversation.",
  },
];

const SOCIAL_ITEMS = [
  {
    title: "The Business Model Is the Problem",
    body: "Social media platforms are not free — they are paid for by attention, which is sold to advertisers. The business model requires maximizing engagement time. Engagement is maximized by content that provokes strong emotion — outrage, fear, envy, and lust perform better algorithmically than nuance, joy, or thoughtfulness. The platform is not neutral — it is designed to produce certain emotional states because those states generate profitable engagement. Understanding this is the first step toward using social media wisely rather than being used by it.",
  },
  {
    title: "Comparison and Envy",
    body: "'You shall not covet' (Exodus 20:17) was given for a world in which you could only covet things you could actually see. Social media makes every person's curated best life continuously visible. Research consistently shows that passive consumption of social media content correlates with envy, depression, and lower self-esteem. The comparison trap is not a character weakness — it is a feature of the product. The antidote is not willpower alone but the practice of gratitude (Phil 4:11), the spiritual discipline of contentment, and the cultivation of genuine community that doesn't require curation.",
  },
  {
    title: "The Performance of the Self",
    body: "Social media encourages a persona — a curated public presentation that is 'better than' the private self: more articulate, better looking, theologically consistent, spiritually successful. This is Pharisaism in digital form: 'They do all their deeds to be seen by others' (Matt 23:5). The cure is hiddenness (Matt 6:1-18): prayer, fasting, giving done 'in secret.' The person who cultivates genuine hiddenness is less susceptible to the platform's demand for performance because they have a self that exists independent of audience approval.",
  },
  {
    title: "Outrage and the Christian Witness",
    body: "Outrage performs well on social media. Outrage about cultural decline, political opponents, theological error, and moral failure generates engagement. Christian accounts can build large followings by being perpetually outraged. But 'the anger of man does not produce the righteousness of God' (James 1:20). The Christian who is most visible as outraged is often least visible as loving. Before posting anything, ask: Does this communicate the love of Christ? Is this true? Is this necessary? Would I say this to the person's face?",
  },
  {
    title: "Time and Attention as Spiritual Resources",
    body: "Time and attention are finite — they are given to us by God to steward, not to surrender to whatever demands them most loudly. The average American spends 2.5 hours per day on social media. That is 17.5 hours per week — more than twice the time spent in prayer and Scripture reading by the average Christian. This is a stewardship question: What is this time for? What is it not for? Is this the life I intend to live? Is this what I would choose if I were choosing freely?",
  },
  {
    title: "Practical Principles for Social Media Use",
    body: "(1) Set a daily time limit and enforce it with Screen Time/Digital Wellbeing tools. (2) Turn off all notifications except from actual humans. (3) Do not use social media for the first hour of the morning or last hour of the evening — guard these for Scripture and prayer. (4) Follow accounts that leave you more curious, more loving, and more grateful; unfollow accounts that leave you more anxious, more angry, or more despairing. (5) Post only what you would be comfortable saying to the person's face; post nothing in anger. (6) Observe a weekly digital Sabbath — 24 hours without social media.",
  },
];

const PRACTICES_CARDS = [
  {
    title: "Digital Sabbath",
    description:
      "Set aside one day per week (traditionally Sunday) for intentional disconnection from work-related technology.",
    steps: [
      "Turn phone to airplane mode from Saturday night through Sunday afternoon",
      "Prepare for Sunday on Saturday (answer urgent messages, set up auto-reply)",
      "Fill the tech-free time with embodied activities: walking, cooking, conversation, worship",
    ],
  },
  {
    title: "Screen-Free Morning",
    description: "The first hour of the day shapes attention and desire for the rest.",
    steps: [
      "Leave your phone in another room overnight",
      "Begin the morning with prayer and Scripture before any screen",
      "Use a physical Bible, physical journal, and printed reading plan — the haptic experience matters",
    ],
  },
  {
    title: "Intentional Consumption Audit",
    description: "Once a month, audit your digital diet.",
    steps: [
      "Use Screen Time/Digital Wellbeing to see exactly how much time you spent on each app",
      "Ask: 'What did this leave me feeling? More anxious? More outraged? More informed about what matters?'",
      "Delete or restrict any app that consistently leaves you worse",
    ],
  },
  {
    title: "Authentic Online Witness",
    description: "Use your online presence for genuine witness, not performance.",
    steps: [
      "Post specifically about what God is actually doing in your life — not a sanitized highlight reel",
      "Engage criticism with curiosity rather than defensiveness",
      "Publicly acknowledge when you were wrong about something — vulnerability is the most countercultural thing a Christian can do online",
    ],
  },
  {
    title: "Family Technology Covenant",
    description: "Establish shared agreements about technology in the home.",
    steps: [
      "Discuss family values around technology at dinner — what do we want this home to prioritize?",
      "Write a one-page 'family technology covenant' covering: devices in bedrooms, meal times, morning and evening limits",
      "Review and revise annually as children grow",
    ],
  },
  {
    title: "Reading Long-Form Again",
    description: "Recover the deep reading that technology erodes.",
    steps: [
      "Read one physical book per month — not on a screen",
      "Practice the Pomodoro technique for digital work: 25 minutes focused, 5-minute break",
      "Consider the Read app or a Kindle with cellular disabled — dedicated reading device with no social apps",
    ],
  },
];

const TABS: { id: Tab; label: string }[] = [
  { id: "theology", label: "Theology of Technology" },
  { id: "ai", label: "AI and Faith" },
  { id: "socialmedia", label: "Social Media and the Soul" },
  { id: "practices", label: "Practices for Wisdom" },
  { id: "videos", label: "Videos" },
];

function AccordionItem({ title, body }: { title: string; body: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        backgroundColor: CARD,
        border: `1px solid ${BORDER}`,
        borderRadius: "10px",
        marginBottom: "10px",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "18px 20px",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <span
          style={{
            color: TEXT,
            fontSize: "15px",
            fontWeight: 600,
            lineHeight: 1.4,
          }}
        >
          {title}
        </span>
        <span
          style={{
            color: GREEN,
            fontSize: "20px",
            fontWeight: 700,
            flexShrink: 0,
            lineHeight: 1,
          }}
        >
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div
          style={{
            padding: "0 20px 18px 20px",
            color: MUTED,
            fontSize: "14px",
            lineHeight: 1.75,
          }}
        >
          {body}
        </div>
      )}
    </div>
  );
}

function PracticeCard({
  title,
  description,
  steps,
}: {
  title: string;
  description: string;
  steps: string[];
}) {
  return (
    <div
      style={{
        backgroundColor: CARD,
        border: `1px solid ${BORDER}`,
        borderRadius: "12px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      <div
        style={{
          width: "36px",
          height: "4px",
          backgroundColor: GREEN,
          borderRadius: "2px",
        }}
      />
      <div
        style={{
          color: TEXT,
          fontSize: "17px",
          fontWeight: 700,
          lineHeight: 1.3,
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: MUTED,
          fontSize: "14px",
          lineHeight: 1.65,
        }}
      >
        {description}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {steps.map((step, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                color: PURPLE,
                fontWeight: 700,
                fontSize: "13px",
                flexShrink: 0,
                marginTop: "1px",
              }}
            >
              {i + 1}.
            </span>
            <span
              style={{
                color: MUTED,
                fontSize: "13px",
                lineHeight: 1.6,
              }}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TheologyOfTechnologyPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_theology-of-technology_tab", "theology");

  return (
    <div
      style={{
        backgroundColor: BG,
        minHeight: "100vh",
        color: TEXT,
        fontFamily: "system-ui, -apple-system, sans-serif",
        paddingTop: 80,
      }}
    >
      <Navbar />
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 20px 80px 20px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "clamp(26px, 5vw, 38px)",
              fontWeight: 800,
              color: TEXT,
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            A Christian Theology of Technology
          </h1>
          <p
            style={{
              color: MUTED,
              fontSize: "16px",
              lineHeight: 1.7,
              maxWidth: "680px",
            }}
          >
            Technology is not neutral. Every tool shapes the person who uses it. A Christian
            theology of technology asks: What is technology doing to us? How do we use it without
            being used by it?
          </p>
        </div>

        {/* Stats Banner */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                backgroundColor: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: "10px",
                padding: "16px 18px",
                borderLeft: `3px solid ${i % 2 === 0 ? GREEN : PURPLE}`,
              }}
            >
              <p
                style={{
                  color: MUTED,
                  fontSize: "13px",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {stat}
              </p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: "6px",
            flexWrap: "wrap",
            marginBottom: "28px",
          }}
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "9px 18px",
                  borderRadius: "8px",
                  border: `1px solid ${isActive ? GREEN : BORDER}`,
                  backgroundColor: isActive ? GREEN : CARD,
                  color: isActive ? BG : MUTED,
                  fontSize: "13px",
                  fontWeight: isActive ? 700 : 500,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab: Theology of Technology */}
        {activeTab === "theology" && (
          <div>
            <h2
              style={{
                color: TEXT,
                fontSize: "20px",
                fontWeight: 700,
                marginBottom: "20px",
              }}
            >
              Theology of Technology
            </h2>
            {THEOLOGY_ITEMS.map((item, i) => (
              <AccordionItem key={i} title={item.title} body={item.body} />
            ))}
          </div>
        )}

        {/* Tab: AI and Faith */}
        {activeTab === "ai" && (
          <div>
            <h2
              style={{
                color: TEXT,
                fontSize: "20px",
                fontWeight: 700,
                marginBottom: "20px",
              }}
            >
              Artificial Intelligence and Faith
            </h2>
            {AI_ITEMS.map((item, i) => (
              <AccordionItem key={i} title={item.title} body={item.body} />
            ))}
          </div>
        )}

        {/* Tab: Social Media and the Soul */}
        {activeTab === "socialmedia" && (
          <div>
            <h2
              style={{
                color: TEXT,
                fontSize: "20px",
                fontWeight: 700,
                marginBottom: "20px",
              }}
            >
              Social Media and the Soul
            </h2>
            {SOCIAL_ITEMS.map((item, i) => (
              <AccordionItem key={i} title={item.title} body={item.body} />
            ))}
          </div>
        )}

        {/* Tab: Practices for Technological Wisdom */}
        {activeTab === "practices" && (
          <div>
            <h2
              style={{
                color: TEXT,
                fontSize: "20px",
                fontWeight: 700,
                marginBottom: "20px",
              }}
            >
              Practices for Technological Wisdom
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "16px",
              }}
            >
              {PRACTICES_CARDS.map((card, i) => (
                <PracticeCard
                  key={i}
                  title={card.title}
                  description={card.description}
                  steps={card.steps}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on theology of technology and AI.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "d5iV8Nc6DkQ", title: "Technology, AI, and the Christian Life", channel: "Oxford Collaboration on Theology & AI", description: "Rev. Lyndon Drake of Oxford discusses how Christians should engage with AI and modern technology in light of Scripture and Christian anthropology." },
                  { videoId: "K2j8053yxbE", title: "Spiritual Formation and AI: A Deep Dive with Andy Crouch and Jay Kim", channel: "Gospel Teaching", description: "Andy Crouch and Jay Kim discuss how technologies like the smartphone and social media have transformed the way we relate to God and to each other." },
                  { videoId: "wN9hU4hDqL8", title: "AI, Faith, and the Future: A Conversation Christians Must Hear", channel: "Christian Teaching", description: "A conversation about how artificial intelligence is reshaping culture, business, education, and the way we think about human identity and dignity." },
                  { videoId: "QL1kViROrKM", title: "How Should Christians Engage with Technology?", channel: "Christian Teaching", description: "A thoughtful exploration of Christian engagement with apps, AI, social media, and modern communication — and the discernment required to use them wisely." },
                  { videoId: "HzvQKLMKDA4", title: "A Christian Theological Approach to Technology and Ethics", channel: "Dr. Jordan B. Cooper", description: "A theological and ethical framework for thinking about technology from a Christian perspective, addressing questions of human dignity, creation, and the common good." },
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
