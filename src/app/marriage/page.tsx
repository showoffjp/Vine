"use client";
import { useState } from "react";
import VerseRef from "@/components/VerseRef";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB";
const GOLD = "#c9a227";
const TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "foundation" | "covenant" | "communication" | "seasons" | "challenges" | "videos";

const FOUNDATION_ITEMS = [
  {
    title: "Marriage Is God's Idea",
    verse: "Genesis 2:18-24",
    color: GOLD,
    body: "Before the fall, before sin, before any brokenness entered creation — God said 'It is not good for man to be alone.' Marriage is not a cultural invention or a legal convenience. It is a theological statement built into the fabric of creation. When God fashioned Eve from Adam's rib and brought her to him, the first human response in Scripture is poetry: 'This at last is bone of my bones and flesh of my flesh' (Gen. 2:23). Marriage begins in wonder, delight, and recognition — and it is meant to preserve those things through the long arc of a lifetime.",
    practices: [
      "Return regularly to Genesis 2 — read it aloud together on anniversaries",
      "Discuss: What does it mean that your marriage is God's idea, not your own?",
      "Resist letting your marriage become merely functional — preserve the poetry"
    ]
  },
  {
    title: "Marriage Mirrors the Gospel",
    verse: "Ephesians 5:25-32",
    color: PURPLE,
    body: "Paul's most stunning claim about marriage is that it exists to display the relationship between Christ and the church: 'This mystery is profound, and I am saying that it refers to Christ and the church' (Eph. 5:32). This means your marriage is not primarily about you. It is a lived parable. When a husband loves his wife sacrificially, observers catch a glimpse of how Christ loves. When a wife trusts and honors her husband, observers catch a glimpse of the church's response to Christ. The stakes of your marriage are cosmic.",
    practices: [
      "Ask: Does our marriage tell the gospel story to our children, neighborhood, and church?",
      "Study Ephesians 5:21-33 together — read all the way through before pulling out individual verses",
      "Discuss what 'Christ gave himself up for her' actually looks like in daily domestic life"
    ]
  },
  {
    title: "Song of Solomon: The Bible Celebrates Eros",
    verse: "Song of Solomon 1:2-4",
    color: "#EC4899",
    body: "The Song of Solomon is eight chapters of erotic poetry in the middle of the Bible, and it is there on purpose. Jewish rabbis called it the 'Holy of Holies' of Scripture. The beloved says: 'Let him kiss me with the kisses of his mouth — for your love is better than wine' (1:2). The lover says: 'How beautiful you are, my darling! Oh, how beautiful!' (1:15). The church has sometimes been embarrassed by these passages, but the Spirit was not. Physical love within marriage is not merely permitted — it is celebrated, named, and honored as a gift of God worthy of its own book.",
    practices: [
      "Read the Song of Solomon together — it is a gift, not a source of embarrassment",
      "Discuss: what would it mean to prioritize physical intimacy as a spiritual and relational investment?",
      "Address any shame around physical intimacy — shame in this area often requires pastoral care or counseling"
    ]
  },
  {
    title: "Mutual Submission Comes First",
    verse: "Ephesians 5:21",
    color: GREEN,
    body: "Ephesians 5:21 — 'Submit to one another out of reverence for Christ' — is the grammatical and theological heading over everything that follows in the household code. Wives and husbands are addressed within a framework of mutual self-giving, not a one-way authority structure. The husband who leads by Christ's definition is leading as a servant. The wife who submits is doing so in partnership with a husband who is laying down his life for her. The whole vision is one of mutual sacrifice and mutual honor — not of power and subordination.",
    practices: [
      "Practice daily acts of preference: put your spouse's interests ahead of your own in small, concrete ways",
      "Ask each other: 'Where do you most feel seen and served by me? Where do you feel neglected?'",
      "Pray together daily — even 5 minutes — as an act of spiritual submission to God as a couple"
    ]
  },
  {
    title: "Love Is a Practice, Not a Feeling",
    verse: "1 Corinthians 13:4-7",
    color: "#3B82F6",
    body: "1 Corinthians 13 is not primarily a poem about a feeling — it is a list of practices. Love is patient. Love is kind. Love does not envy, boast, or dishonor. It is not easily angered. It keeps no record of wrongs. Every line is active, behavioral, and costly. Tim Keller argued that marriage is the institution that teaches you how to love — not the institution you enter because you already know how. You learn to love by practicing love even when it costs you, especially when the feeling has ebbed. The feeling follows the practice far more reliably than the practice follows the feeling.",
    practices: [
      "Memorize 1 Corinthians 13:4-7 together and return to it monthly",
      "Pick one quality from the list each week and practice it deliberately toward your spouse",
      "When you feel 'out of love,' ask: which practice have I neglected?"
    ]
  },
];

const COVENANT_ITEMS = [
  {
    q: "What is the difference between a contract and a covenant?",
    a: "A contract is conditional: I will fulfill my obligations as long as you fulfill yours. If you breach, I am released. A covenant is unconditional: I bind myself to you regardless of your performance, because the covenant is about who I am, not what you do. When God makes a covenant with Israel, he keeps it even when Israel is faithless (Hosea 11:8-9). This is the model for Christian marriage. The vows you made are not performance-based agreements — they are covenant declarations about your identity: 'I am the person who keeps this promise.' When you hit difficulty, the question is not 'Is the contract still worth keeping?' but 'Who am I in this covenant?'"
  },
  {
    q: "What does 'till death do us part' actually mean?",
    a: "The permanence of marriage vows is not a burden imposed on unwilling people — it is a gift that enables depth of intimacy that temporary relationships cannot provide. When both spouses know the relationship is unconditional, risk is possible. Vulnerability is possible. Long-term investment in each other is rational. The certainty of the covenant creates the conditions for genuine love to develop. Marriages that are always one bad year away from dissolution never develop the kind of love that only decades of shared life can produce. The permanence is the point."
  },
  {
    q: "How do we renew our covenant intentionally?",
    a: "Many couples make vows once and then coast on them for decades without ever returning to them. Consider an annual or major anniversary covenant renewal: read your vows aloud to each other, pray together, speak specifically about what you are committing to in the coming year. Some couples write new, more specific vows at 10-year intervals — not replacing the original but deepening it. The covenant is not self-maintaining. It must be actively tended."
  },
  {
    q: "What about separation and divorce?",
    a: "The Bible takes the seriousness of marriage vows seriously — Jesus's teaching in Matthew 19 raises the bar significantly from the Mosaic provision for divorce. Most Christian traditions recognize grounds for divorce in cases of adultery and abandonment (Matthew 19:9, 1 Corinthians 7:15), and many extend this to patterns of serious abuse where a spouse's safety is genuinely at risk. But the covenantal vision of marriage means divorce is always a tragedy — the death of something that was meant to be permanent — never merely a legal convenience. The church should grieve with those who divorce, not shame them, while maintaining the high value of the covenant."
  },
  {
    q: "The theology of the wedding ceremony",
    a: "The Christian wedding ceremony is a covenant-making liturgy. The presence of witnesses is not merely traditional — it is covenantal. In ancient Near Eastern covenant-making, witnesses held both parties accountable to the terms. The vows are spoken in public, before God and community, because the community is invested in the covenant being kept. This is why marriage is a church matter, not merely a personal one. The community that witnesses the covenant has a responsibility to support, protect, and — when necessary — call the couple back to their vows."
  },
];

const COMMUNICATION_ITEMS = [
  {
    title: "The Soft Startup",
    color: "#3B82F6",
    body: "John Gottman's decades of research at the Love Lab produced a finding that has transformed marriage therapy: the way a conflict conversation begins predicts how it will end with 96% accuracy. A 'harsh startup' — beginning with criticism, contempt, or a defensive statement — almost always produces a destructive conversation, no matter the content. A 'soft startup' — beginning with 'I feel... when... and I need...' — gives the conversation a chance. The application is simple but demands self-awareness: before you open your mouth in a tense moment, ask how your first sentence will sound to your spouse.",
    tip: "Before bringing a complaint: pause, pray briefly, and frame your opening as an 'I feel' statement, not a 'you always' statement."
  },
  {
    title: "James 1:19 in Marriage",
    color: GREEN,
    body: "'Quick to listen, slow to speak, slow to become angry' (James 1:19). Most marital communication inverts this sequence: slow to listen, quick to speak, quick to anger. The order in James is not arbitrary — it is psychologically sound. Listening first gathers information, communicates respect, and regulates your own emotional temperature. Speaking second, after you understand, means your words address the actual issue rather than a caricature of it. Being slow to anger means that even when you feel angry (which will happen), you do not lead with the anger. The sequence is a practice, not a feeling.",
    tip: "In your next disagreement, commit to fully understanding your spouse's position before stating your own. Ask questions. Reflect back what you heard."
  },
  {
    title: "The Four Horsemen (and Their Antidotes)",
    color: "#EF4444",
    body: "Gottman identified four communication patterns — contempt, criticism, defensiveness, and stonewalling — that predict divorce with accuracy. Contempt is the worst: eye-rolling, mockery, condescension — it communicates 'I am better than you.' Criticism attacks character rather than behavior. Defensiveness refuses responsibility. Stonewalling shuts down emotionally. The antidotes: replace criticism with a complaint about behavior; replace contempt with appreciation and respect; replace defensiveness with responsibility; replace stonewalling with a physiological self-soothing break (20-30 minutes away before returning).",
    tip: "Run a 'Four Horsemen audit' on your last significant argument: Which patterns appeared? What would the antidote have looked like?"
  },
  {
    title: "Repair Attempts",
    color: GOLD,
    body: "One of the most important findings in marriage research: the ability to make repair attempts during conflict — and the willingness to accept them — is a key marker of marriage health. A repair attempt is any behavior that de-escalates tension: a gentle touch, a self-deprecating joke, a direct apology mid-argument, an acknowledgment of the other's point. Distressed marriages have as many repair attempts as healthy ones, but they are rejected. Healthy couples accept them. Learning to offer and receive repair attempts changes the trajectory of conflict.",
    tip: "Agree with your spouse on a repair signal — a word, gesture, or phrase that means 'I want to de-escalate.' Use it freely."
  },
  {
    title: "Weekly Check-In",
    color: PURPLE,
    body: "Many marriages operate on a relational deficit because the couple never creates protected space for connection. The Weekly Check-In is a 20-minute, phone-free conversation: the high and low of your week; one thing you appreciate about your spouse; one thing on your mind that you haven't said. The content matters less than the practice — it creates a rhythm of emotional transparency that prevents the buildup of resentment and distance. Couples who do this consistently report dramatically higher relational satisfaction.",
    tip: "Schedule it on the same day each week. Put it in the calendar like a meeting. Protect it from competing demands."
  },
  {
    title: "Apologizing Well",
    color: "#10B981",
    body: "Most marital apologies are inadequate — and inadequate apologies make things worse rather than better. 'I'm sorry you feel that way' is not an apology — it deflects responsibility. 'I'm sorry, but...' negates the apology with the excuse that follows. A genuine apology has three components: naming what I did specifically, acknowledging how it affected my spouse, and committing to change. 'I was wrong when I said X. I know that hurt you because Y. I want to do better — will you forgive me?' This kind of apology requires humility that is only possible when your identity is secure in Christ, not in being right.",
    tip: "Practice saying 'I was wrong' without a qualifier. The absence of 'but' is the test of genuine repentance."
  },
];

const SEASONS_ITEMS = [
  {
    season: "The Early Years",
    icon: "🌱",
    color: GREEN,
    years: "Years 1-5",
    reality: "The romantic merger collides with two actual people with different histories, habits, and families of origin. The discovery that your spouse is different from who you imagined is not betrayal — it is the beginning of real marriage.",
    practices: [
      "Establish household rhythms together from scratch — don't assume your family-of-origin patterns are universal",
      "Navigate the in-law relationships intentionally — 'leave and cleave' (Gen. 2:24) is a command for both spouses",
      "Address conflict patterns early — what you establish in years 1-3 tends to calcify",
      "Consider premarital or early-marriage counseling proactively, not only in crisis"
    ],
    verse: "Therefore a man shall leave his father and his mother and hold fast to his wife. — Genesis 2:24"
  },
  {
    season: "Parenting Years",
    icon: "👨‍👩‍👧",
    color: "#F59E0B",
    years: "Varied — typically years 3-25",
    reality: "Nothing stress-tests a marriage like children. Sleep deprivation, divided attention, financial pressure, differing parenting philosophies, and the sheer volume of domestic labor can erode the couple relationship if it is not actively protected.",
    practices: [
      "Protect your marriage relationship as the primary relationship — not your child's happiness",
      "Maintain date nights and physical intimacy — these are not luxuries but maintenance",
      "Divide domestic labor explicitly and equitably — assumed inequality breeds resentment",
      "Present a united front with your children — disagree in private, agree in public"
    ],
    verse: "He who finds a wife finds what is good and receives favor from the LORD. — Proverbs 18:22"
  },
  {
    season: "Midlife and Crisis",
    icon: "⚡",
    color: "#EF4444",
    years: "Often years 15-30",
    reality: "Many marriages that have functioned adequately for years begin to unravel in midlife, when both spouses have the resources to leave and the growing sense that time is running out. The 'midlife crisis' is often a crisis of meaning — the recognition that the scripts you've been living by are not enough.",
    practices: [
      "Take the crisis of meaning seriously — don't dismiss it with clichés",
      "Invest in marriage counseling before crisis hits if possible",
      "Revisit your shared vision and calling — what are we building together in this next season?",
      "Address any addiction, pornography, or emotional affair early — these almost always precede physical infidelity"
    ],
    verse: "Two are better than one, because they have a good return for their labor. — Ecclesiastes 4:9"
  },
  {
    season: "Empty Nest",
    icon: "🏠",
    color: PURPLE,
    years: "Typically years 20-35",
    reality: "Couples who have organized their marriage around parenting often discover they are strangers when the children leave. The empty nest forces a reckoning: who are we to each other? This is either a crisis or a second honeymoon — the difference is whether the couple has maintained their relationship through the parenting years.",
    practices: [
      "Begin investing in your post-parenting marriage before the children leave",
      "Develop shared interests and friendships that don't revolve around children",
      "Have honest conversations about expectations for this season",
      "Consider a renewal of vows or a significant trip to mark the new season"
    ],
    verse: "My beloved is mine, and I am his. — Song of Solomon 2:16"
  },
  {
    season: "Later Years and Legacy",
    icon: "🌅",
    color: GOLD,
    years: "Years 35+",
    reality: "Long marriages carry irreplaceable depth: shared history, mutual knowledge, the comfort of being truly known. They also face real challenges: health decline, loss of friends, changing bodies, grief. The couple that has tended their covenant through decades possesses a resource that cannot be manufactured.",
    practices: [
      "Speak gratitude explicitly and often — gratitude is the oxygen of long marriages",
      "Discuss health, death, and legacy while you are well enough to do it clearly",
      "Be intentional about pouring into younger couples — your model is a ministry",
      "Pray together and worship together — the couple that has prayed together carries something irreplaceable"
    ],
    verse: "Let love and faithfulness never leave you; bind them around your neck, write them on the tablet of your heart. — Proverbs 3:3"
  },
];

const CHALLENGES_ITEMS = [
  {
    challenge: "Infidelity and Betrayal",
    icon: "💔",
    color: "#EF4444",
    body: "Infidelity is not necessarily a death sentence for a marriage, but recovery requires three things that are genuinely costly: complete cessation and transparency from the unfaithful spouse, genuine grief and accountability (not just apology), and a willingness from the betrayed spouse to pursue forgiveness — not forgetting, not minimizing, but the deliberate choice to release the debt and rebuild. This process typically takes 2-5 years and almost always requires professional help. The marriages that survive infidelity and rebuild strongly often report becoming closer after recovery than they were before.",
    resources: ["Affair Recovery (affairrecovery.com)", "Harboring Hope program", "Christian marriage counselor specializing in betrayal trauma", "Gottman couples therapy"]
  },
  {
    challenge: "Pornography and Sexual Addiction",
    icon: "🔒",
    color: "#8B5CF6",
    body: "Pornography use in marriage produces what researchers call 'partner betrayal trauma' — even in the absence of physical infidelity. The deception, the objectification, and the withdrawal of emotional and sexual investment from the marriage wound the betrayed spouse deeply. Recovery requires: complete transparency, accountability software and community, address of underlying trauma or shame in the user, and support for the betrayed spouse. Addiction recovery requires community — isolation maintains the cycle.",
    resources: ["Covenant Eyes accountability software", "Celebrate Recovery", "Fight the New Drug resources", "SAA (Sex Addicts Anonymous) — faith-integrated track"]
  },
  {
    challenge: "Financial Conflict",
    icon: "💰",
    color: GOLD,
    body: "Money is one of the top predictors of divorce, but money conflict is rarely actually about money — it is about values, power, security, and generosity. A spender and a saver in the same marriage are expressing different theologies of security. The path through financial conflict requires: transparency (no hidden accounts, no financial secrets), shared budgeting, agreement on a giving priority (Proverbs 3:9-10), and mutual submission in financial decisions.",
    resources: ["Dave Ramsey Financial Peace University", "Crown Financial Ministries", "Christian financial counselors (CCEF)", "Envelopes / zero-based budgeting apps"]
  },
  {
    challenge: "Growing in Different Directions",
    icon: "↗️",
    color: GREEN,
    body: "One spouse becomes more devout; the other drifts from faith. One enters therapy and changes significantly; the other resists change. One grows in education or career; the other feels left behind. Differential growth in marriage is one of the most underacknowledged sources of marital pain. The answer is not to stop growing — it is to grow in ways that invite and celebrate the other's growth. Peter's counsel to the believing spouse whose partner is unbelieving (1 Pet. 3:1-2) is instructive: the most powerful witness is a life lived with 'purity and reverence,' not lectures and pressure.",
    resources: ["Marriage counseling focused on differentiation", "Yoked Together ministry for spiritually mismatched couples", "Conversation starters: 'Where are you growing? What would help you grow?'"]
  },
  {
    challenge: "Abuse: When Safety Is the Issue",
    icon: "🛡️",
    color: "#EF4444",
    body: "Nothing in Christian marriage theology requires a spouse to remain in a physically or sexually dangerous situation. The covenantal vision of marriage assumes two people capable of making and keeping covenant — abuse destroys this foundation. Safety must come first. The gospel does not demand that victims accept ongoing harm in the name of covenant-keeping. Churches have sometimes failed to protect abuse victims by prioritizing the appearance of an intact marriage over the safety of the abused spouse and children. If you are in danger: call 1-800-799-7233 (National Domestic Violence Hotline).",
    resources: ["National Domestic Violence Hotline: 1-800-799-7233", "RAVE (Religion and Violence E-Learning)", "Mending the Soul ministry", "Flying Free community for Christian women in abusive marriages"]
  },
  {
    challenge: "When You Feel Like Giving Up",
    icon: "🌊",
    color: PURPLE,
    body: "The feeling of wanting to leave a marriage is not a sin, and it is not necessarily a sign that the marriage is beyond repair. Most couples who divorce later report that they wish they had tried harder, waited longer, or gotten better help. Before any decision is made: seek good counseling — licensed marriage therapists are trained in ways that most pastors are not. Read The Meaning of Marriage. Contact a retreat like the National Marriage Encounter or a weekend intensive. The feeling of wanting out is often the beginning of a breakthrough, not the end of the story.",
    resources: ["A Weekend to Remember (FamilyLife)", "National Marriage Encounter", "Gottman Method Couples Therapy", "AACC Christian counselor directory"]
  },
];

const VIDEOS = [
  { videoId: "Mi-wj8Jey9M", title: "Why Marriage Is a Sacred Covenant", channel: "Tim Keller", description: "Keller explains why marriage is a covenant and not merely a contract, and what it means to make and keep vows before God — even when it is costly." },
  { videoId: "XoxYPXqqO34", title: "The Meaning of Marriage", channel: "Tim & Kathy Keller", description: "Tim and Kathy Keller lead through the core ideas in their book — how the gospel reshapes everything we thought we knew about love and commitment." },
  { videoId: "OYrRoafD3OU", title: "Tim and Kathy Keller on Christian Marriage", channel: "Gospel Coalition", description: "Tim and Kathy Keller in conversation about the realities of long Christian marriage — sanctification, conflict, intimacy, and the grace that sustains a covenant across decades." },
  { videoId: "H-mTqMOFLWI", title: "Sacred Marriage — Gary Thomas", channel: "Saddleback Church", description: "Gary Thomas teaches on his central insight: what if God designed marriage to make us holy more than to make us happy? A paradigm-shifting framework." },
];

export default function MarriagePage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_marriage_tab", "foundation");
  const [openItem, setOpenItem] = useState<number | null>(0);
  const [openCovItem, setOpenCovItem] = useState<number | null>(null);
  const [openCommItem, setOpenCommItem] = useState<number | null>(null);
  const [openChalItem, setOpenChalItem] = useState<number | null>(null);
  const [activeSeason, setActiveSeason] = useState(0);

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "foundation", label: "Foundation", icon: "📖" },
    { id: "covenant", label: "Covenant", icon: "💍" },
    { id: "communication", label: "Communication", icon: "💬" },
    { id: "seasons", label: "Seasons", icon: "🌿" },
    { id: "challenges", label: "Challenges", icon: "⚡" },
    { id: "videos", label: "Videos", icon: "🎬" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />

      {/* Hero */}
      <div style={{
        background: `linear-gradient(160deg, ${CARD} 0%, #1a0a2e 50%, ${BG} 100%)`,
        borderBottom: `1px solid ${BORDER}`,
        padding: "100px 20px 60px",
        textAlign: "center",
      }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>💍</div>
        <h1 style={{
          fontFamily: "var(--font-cormorant, Georgia, serif)",
          fontSize: "clamp(36px, 5vw, 58px)",
          fontWeight: 700,
          marginBottom: 16,
          background: `linear-gradient(135deg, ${GOLD}, ${TEXT})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>Christian Marriage</h1>
        <p style={{ color: MUTED, fontSize: 18, maxWidth: 600, margin: "0 auto 24px", lineHeight: 1.7 }}>
          Marriage as covenant, not contract. A resource for building, strengthening, and sustaining the marriage God designed for his glory and your flourishing.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          {["Genesis 2", "Ephesians 5", "Song of Solomon", "1 Corinthians 13"].map(ref => (
            <span key={ref} style={{ background: `${GOLD}20`, border: `1px solid ${GOLD}40`, color: GOLD, padding: "4px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>{ref}</span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* Tab Nav */}
        <div style={{ display: "flex", gap: 4, margin: "32px 0", background: CARD, borderRadius: 14, padding: 6, border: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)} style={{
              flex: "1 1 auto",
              padding: "10px 12px",
              borderRadius: 10,
              border: "none",
              background: activeTab === t.id ? PURPLE : "transparent",
              color: activeTab === t.id ? "#fff" : MUTED,
              fontWeight: 700,
              fontSize: 13,
              cursor: "pointer",
              transition: "all 0.2s",
              minWidth: 100,
            }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* FOUNDATION TAB */}
        {activeTab === "foundation" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: GOLD, fontSize: 28, fontWeight: 700, marginBottom: 8 }}>The Biblical Vision of Marriage</h2>
              <p style={{ color: TEXT, fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                Before we can discuss how to have a good marriage, we need to understand what marriage is for. The Bible&apos;s answer is both more demanding and more beautiful than anything our culture proposes. Marriage is a covenant — a binding, unconditional, self-giving promise — designed to mirror the love of God for his people and the love of Christ for his church.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {FOUNDATION_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${openItem === i ? item.color + "60" : BORDER}`, borderRadius: 14, overflow: "hidden", transition: "border-color 0.2s" }}>
                  <button type="button" onClick={() => setOpenItem(openItem === i ? null : i)} style={{
                    width: "100%", padding: "18px 24px", background: "transparent", border: "none", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0, display: "block" }} />
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: 16 }}>{item.title}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                      <span style={{ background: `${item.color}20`, color: item.color, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}><VerseRef reference={item.verse} /></span>
                      <span style={{ color: MUTED, fontSize: 18, transform: openItem === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
                    </div>
                  </button>
                  {openItem === i && (
                    <div style={{ padding: "0 24px 22px" }}>
                      <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 18 }}>{item.body}</p>
                      <div style={{ background: `${item.color}0d`, border: `1px solid ${item.color}30`, borderRadius: 10, padding: 16 }}>
                        <div style={{ color: item.color, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Practices</div>
                        {item.practices.map((p, pi) => (
                          <div key={pi} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
                            <span style={{ color: item.color, fontWeight: 800, flexShrink: 0, marginTop: 2 }}>→</span>
                            <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.65 }}>{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ background: `${PURPLE}18`, border: `1px solid ${PURPLE}40`, borderRadius: 14, padding: 28, marginTop: 24, textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: TEXT, fontSize: 22, fontStyle: "italic", lineHeight: 1.6, marginBottom: 12 }}>
                &ldquo;What if God designed marriage to make us holy more than to make us happy?&rdquo;
              </p>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>— Gary Thomas, <em>Sacred Marriage</em></p>
            </div>
          </div>
        )}

        {/* COVENANT TAB */}
        {activeTab === "covenant" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: GOLD, fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Covenant, Not Contract</h2>
              <p style={{ color: TEXT, fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                The difference between a contract and a covenant is the difference between conditional performance and unconditional love. Understanding your marriage as a covenant changes everything — including how you fight, how you invest, and what you are willing to endure.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${GOLD}40`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, fontSize: 18, marginBottom: 16 }}>Contract vs. Covenant</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ background: "#EF444410", border: "1px solid #EF444430", borderRadius: 10, padding: 16 }}>
                  <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 14, marginBottom: 10 }}>Contract Thinking</div>
                  {["Conditional: if you perform, I perform", "Exit clause: breach releases me", "Focuses on rights and obligations", "Measures: 'Is this worth it?'", "Based on the other's behavior"].map((t, i) => (
                    <div key={i} style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, marginBottom: 6, paddingLeft: 12, borderLeft: "2px solid #EF444440" }}>{t}</div>
                  ))}
                </div>
                <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 14, marginBottom: 10 }}>Covenant Thinking</div>
                  {["Unconditional: I am bound regardless", "No exit clause: the covenant holds", "Focuses on identity and character", "Asks: 'Who am I in this covenant?'", "Based on my own commitment to God"].map((t, i) => (
                    <div key={i} style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, marginBottom: 6, paddingLeft: 12, borderLeft: `2px solid ${GREEN}40` }}>{t}</div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {COVENANT_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${openCovItem === i ? GOLD + "60" : BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <button type="button" onClick={() => setOpenCovItem(openCovItem === i ? null : i)} style={{
                    width: "100%", padding: "18px 24px", background: "transparent", border: "none", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left"
                  }}>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.q}</span>
                    <span style={{ color: MUTED, fontSize: 18, transform: openCovItem === i ? "rotate(45deg)" : "none", transition: "transform 0.2s", flexShrink: 0, marginLeft: 12 }}>+</span>
                  </button>
                  {openCovItem === i && (
                    <div style={{ padding: "0 24px 22px" }}>
                      <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 28, marginTop: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: 18, marginBottom: 12 }}>Vow Renewal Practice</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                Consider reading your original wedding vows aloud on each anniversary — or rewriting them with added specificity for the season you&apos;re entering. Covenant renewal is not a sign of weakness but of intentionality.
              </p>
              <div style={{ background: BG, borderRadius: 10, padding: 16, borderLeft: `3px solid ${GREEN}` }}>
                <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: 0 }}>
                  &ldquo;I take you to be my wedded spouse, to have and to hold from this day forward, for better for worse, for richer for poorer, in sickness and in health, to love and to cherish, till death do us part, according to God&apos;s holy ordinance; and thereto I pledge you my faithfulness.&rdquo;
                </p>
              </div>
            </div>
          </div>
        )}

        {/* COMMUNICATION TAB */}
        {activeTab === "communication" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: GOLD, fontSize: 28, fontWeight: 700, marginBottom: 8 }}>The Art of Marriage Communication</h2>
              <p style={{ color: TEXT, fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                Most marriage problems are communication problems. And most communication problems are listening problems. The research is clear and the Scripture is consistent: learning to communicate in marriage is a lifelong discipline that produces love or erodes it, depending on which patterns you reinforce.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {COMMUNICATION_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${openCommItem === i ? item.color + "60" : BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <button type="button" onClick={() => setOpenCommItem(openCommItem === i ? null : i)} style={{
                    width: "100%", padding: "18px 24px", background: "transparent", border: "none", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 12, height: 12, borderRadius: 3, background: item.color, flexShrink: 0 }} />
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: 18, transform: openCommItem === i ? "rotate(45deg)" : "none", transition: "transform 0.2s", flexShrink: 0, marginLeft: 12 }}>+</span>
                  </button>
                  {openCommItem === i && (
                    <div style={{ padding: "0 24px 22px" }}>
                      <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{item.body}</p>
                      <div style={{ background: `${item.color}12`, border: `1px solid ${item.color}30`, borderRadius: 10, padding: 14 }}>
                        <span style={{ color: item.color, fontWeight: 700, fontSize: 12 }}>PRACTICE: </span>
                        <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.65 }}>{item.tip}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: 18, marginBottom: 14 }}>Five Love Languages — Quick Reference</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>Gary Chapman&apos;s insight: people give and receive love in different primary ways. Speaking your spouse&apos;s language — not your own — is the practice of love.</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: 12 }}>
                {[
                  { lang: "Words of Affirmation", icon: "💬", color: "#3B82F6", desc: "Verbal praise, gratitude, encouragement" },
                  { lang: "Acts of Service", icon: "🤲", color: GREEN, desc: "Doing helpful things; taking tasks off their plate" },
                  { lang: "Receiving Gifts", icon: "🎁", color: GOLD, desc: "Thoughtful gestures and tangible expressions of love" },
                  { lang: "Quality Time", icon: "⏰", color: PURPLE, desc: "Undivided, focused, phone-free presence" },
                  { lang: "Physical Touch", icon: "🤗", color: "#EC4899", desc: "Affection, physical closeness, holding hands" },
                ].map(l => (
                  <div key={l.lang} style={{ background: BG, border: `1px solid ${l.color}30`, borderRadius: 12, padding: 16, textAlign: "center" }}>
                    <div style={{ fontSize: 24, marginBottom: 8 }}>{l.icon}</div>
                    <div style={{ color: l.color, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{l.lang}</div>
                    <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.5 }}>{l.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SEASONS TAB */}
        {activeTab === "seasons" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: GOLD, fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Marriage Through the Seasons</h2>
              <p style={{ color: TEXT, fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                Every marriage moves through distinct seasons, each with its own gifts and dangers. Knowing the terrain of each season helps couples invest wisely and avoid the traps that end otherwise salvageable marriages.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              {SEASONS_ITEMS.map((s, i) => (
                <button type="button" key={i} onClick={() => setActiveSeason(i)} style={{
                  flex: "1 1 auto",
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: `1px solid ${activeSeason === i ? s.color : BORDER}`,
                  background: activeSeason === i ? `${s.color}18` : CARD,
                  color: activeSeason === i ? s.color : MUTED,
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "all 0.2s",
                }}>
                  <span>{s.icon}</span> {s.season}
                </button>
              ))}
            </div>
            {(() => {
              const s = SEASONS_ITEMS[activeSeason];
              return (
                <div style={{ background: CARD, border: `1px solid ${s.color}40`, borderRadius: 14, padding: 28 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                    <span style={{ fontSize: 36 }}>{s.icon}</span>
                    <div>
                      <h3 style={{ color: s.color, fontWeight: 800, fontSize: 22, margin: 0 }}>{s.season}</h3>
                      <div style={{ color: MUTED, fontSize: 13 }}>{s.years}</div>
                    </div>
                  </div>
                  <div style={{ background: `${s.color}10`, borderRadius: 10, padding: "14px 18px", margin: "16px 0", borderLeft: `3px solid ${s.color}` }}>
                    <p style={{ color: TEXT, fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{s.reality}</p>
                  </div>
                  <h4 style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Practices for This Season</h4>
                  {s.practices.map((p, pi) => (
                    <div key={pi} style={{ display: "flex", gap: 12, marginBottom: 10, alignItems: "flex-start" }}>
                      <span style={{ color: s.color, fontWeight: 800, fontSize: 16, flexShrink: 0 }}>→</span>
                      <span style={{ color: TEXT, fontSize: 15, lineHeight: 1.65 }}>{p}</span>
                    </div>
                  ))}
                  <div style={{ background: BG, borderRadius: 10, padding: 16, marginTop: 20, borderLeft: `3px solid ${GOLD}` }}>
                    <p style={{ color: GOLD, fontSize: 14, fontStyle: "italic", margin: 0 }}><VerseRef reference={s.verse} /></p>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* CHALLENGES TAB */}
        {activeTab === "challenges" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: GOLD, fontSize: 28, fontWeight: 700, marginBottom: 8 }}>When Marriage Is Hard</h2>
              <p style={{ color: TEXT, fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                Every marriage encounters seasons of genuine difficulty. The following are the most common and the most serious challenges couples face — addressed with honesty, compassion, and practical resources.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {CHALLENGES_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${openChalItem === i ? item.color + "60" : BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <button type="button" onClick={() => setOpenChalItem(openChalItem === i ? null : i)} style={{
                    width: "100%", padding: "18px 24px", background: "transparent", border: "none", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 22 }}>{item.icon}</span>
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.challenge}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: 18, transform: openChalItem === i ? "rotate(45deg)" : "none", transition: "transform 0.2s", flexShrink: 0, marginLeft: 12 }}>+</span>
                  </button>
                  {openChalItem === i && (
                    <div style={{ padding: "0 24px 22px" }}>
                      <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{item.body}</p>
                      <div style={{ background: `${item.color}10`, border: `1px solid ${item.color}30`, borderRadius: 10, padding: 16 }}>
                        <div style={{ color: item.color, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Resources</div>
                        {item.resources.map((r, ri) => (
                          <div key={ri} style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, marginBottom: 6, paddingLeft: 12, borderLeft: `2px solid ${item.color}40` }}>{r}</div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 24, marginTop: 24 }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Remember: Marriage counseling is not a last resort.</div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Seeking help early — before crisis — is the smartest investment you can make in your marriage. The couples who recover best are those who got skilled help before things broke beyond repair. Find a licensed Christian marriage therapist at the AACC directory (aacc.net) or through your church&apos;s referral network.
              </p>
            </div>
          </div>
        )}

        {/* VIDEOS TAB */}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: GOLD, fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0 }}>Sermons, lectures, and conversations from trusted voices on Christian marriage, covenant love, and building a lasting partnership.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <iframe
                    width="100%"
                    style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                    src={`https://www.youtube.com/embed/${v.videoId}`}
                    title={v.title}
                    allowFullScreen
                  />
                  <div style={{ padding: "16px 20px" }}>
                    <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 17, marginBottom: 4 }}>{v.title}</h4>
                    <p style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 8 }}>{v.channel}</p>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
