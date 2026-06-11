"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "ceremony" | "premarital" | "vows" | "journal" | "videos";

const theologyPoints = [
  {
    title: "Marriage Is a Covenant, Not a Contract",
    content: "A contract is conditional — 'I will do X if you do Y.' A covenant is unconditional commitment — 'I will do X, period.' Marriage in Scripture is explicitly covenantal language (Malachi 2:14 — 'the wife of your marriage covenant'). The difference matters enormously: a covenant-keeper stays when circumstances become hard; a contract-keeper leaves when the terms are no longer advantageous. The Christian wedding ceremony is the founding of a covenant — witnessed by the community and before God."
  },
  {
    title: "Marriage Signifies the Gospel",
    content: "Ephesians 5:22-33 is the theological load-bearing wall of Christian marriage: 'This is a profound mystery — but I am talking about Christ and the church.' The husband's self-giving love signifies Christ's love for the church; the wife's trust signifies the church's responsive faith. Marriage is therefore not merely a social institution — it is a living parable of the gospel. How a married couple treats each other is a sermon, whether or not they intend it to be."
  },
  {
    title: "The Wedding Is a Public Act",
    content: "Marriage in every human culture is a public act — not a private feeling. The wedding ceremony is the community's witness to and support of the covenant. This is why marriage before witnesses matters: the community is not mere spectators but participants who are called to hold the couple accountable and support them through difficulty. 'Witnessing' a wedding is an active commitment, not passive observation."
  },
  {
    title: "A Christian Wedding Centers Christ, Not Romance",
    content: "The contemporary wedding culture in the Western world centers the couple's love story, their aesthetic, their feelings — Christianity recenters the wedding on the God who invented marriage and designed it for his glory. This does not mean the wedding is joyless or impersonal. It means the foundation is theological: we are gathering to acknowledge that this man and this woman are entering a covenantal union that belongs first to God, not to them."
  },
  {
    title: "Marriage Is for Holiness as Much as Happiness",
    content: "Gary Thomas (Sacred Marriage): 'What if God designed marriage to make us holy more than to make us happy?' The pursuit of happiness as the primary goal of marriage sets couples up for failure, because happiness is a byproduct of faithful love, not its foundation. The Christian couple understands that the refining fire of sustained covenant love — including conflict, forgiveness, sacrifice, and long-suffering — is one of God's primary instruments for their sanctification."
  },
  {
    title: "Premarital Preparation Is Not Optional",
    content: "Research consistently shows that premarital preparation reduces divorce rates significantly — by 30% or more in some studies. The church that marries couples without requiring serious premarital counseling is setting them up for preventable failure. Healthy premarital preparation covers: communication, conflict resolution, finances, sexual expectations, in-law boundaries, spiritual life, children and parenting, and the theology of marriage."
  }
];

const ceremonyElements = [
  {
    element: "Processional",
    color: "#8B5CF6",
    meaning: "The gathering of the community and the entrance of the couple mark the transition from ordinary time to sacred time. The processional is the visual declaration: something holy is beginning.",
    options: [
      "Traditional: bride processed by father (symbolizing father's blessing and transfer of covenant responsibility)",
      "Contemporary: both parties process together as equals entering covenant",
      "Liturgical: procession with cross leads the couple",
      "Congregational: couple enters together after the pastor and wedding party"
    ],
    scriptures: ["Psalm 45 (royal wedding psalm)", "Song of Solomon 3:11"],
    note: "Whatever the processional form, begin with a brief opening statement from the officiant that grounds the ceremony in biblical theology of marriage."
  },
  {
    element: "Scripture Readings",
    color: "#10B981",
    meaning: "The reading of Scripture in the wedding grounds the covenant in God's word and signals: this is not merely a cultural ceremony but a theological event.",
    options: [
      "Genesis 2:18-24 (the first wedding; the foundational text)",
      "Song of Solomon 8:6-7 (the power of love as strong as death)",
      "1 Corinthians 13 (the nature of love — most popular; most misunderstood)",
      "Ephesians 5:22-33 (the gospel and marriage)",
      "Ruth 1:16-17 (covenant loyalty; works for any relationship)",
      "Colossians 3:12-14 (the character that makes marriage work)"
    ],
    note: "1 Corinthians 13 describes the love of Christ, not romantic love. Using it as the primary text without explanation can mislead couples about the nature of the love required."
  },
  {
    element: "The Sermon / Address",
    color: "#F59E0B",
    meaning: "The wedding sermon is the most heard sermon most guests will ever receive. It should be gospel-centered, hopeful, honest about difficulty, and directly relevant to the couple and their covenant.",
    options: [
      "Expository: preach the foundational text (Genesis 2, Ephesians 5, or Song of Solomon)",
      "Thematic: one central theological claim about marriage (covenant, gospel signification, sanctification)",
      "Testimonial: brief but grounded in Scripture — stories of the couple's journey with theological commentary",
      "Length: 8-15 minutes. Short enough to honor the ceremony; long enough to preach the gospel."
    ],
    note: "This is not the time for humor-heavy roast-style remarks. The couple and their guests need to hear about God, not just laugh at embarrassing memories."
  },
  {
    element: "The Vows",
    color: "#EF4444",
    meaning: "The vows are the covenantal speech-act — the performative words that constitute the marriage. 'I do' is not a description of existing feeling; it is a binding commitment that creates a new reality.",
    options: [
      "Traditional: 'I take you... to have and to hold, from this day forward, for better for worse...'",
      "Written vows: personalized but should retain the covenantal language of permanence and total commitment",
      "Ring exchange vows: shorter commitment statements accompanying the rings",
      "Alternative: couples may write full vows but should review them with the officiant for theological accuracy"
    ],
    note: "Avoid vows that condition the commitment on feelings ('I promise to love you as long as I love you') or that omit permanence. The 'til death do us part' clause is not archaic — it is the essence of covenant."
  },
  {
    element: "Ring Exchange",
    color: "#3B82F6",
    meaning: "The ring is the sign of the covenant — circular, unending, precious, worn publicly. It is the visible mark of the invisible commitment.",
    options: [
      "Traditional formula: 'With this ring, I thee wed. All that I am I give to you...'",
      "Simple: 'This ring is a symbol of my vow, and with all that I am, I honor you.'",
      "Extended: include a verse or personal word with each ring",
      "Unity Candle/Sand: optional symbol of two becoming one — not sacramental but meaningful"
    ],
    note: "The ring exchange is a visible embodiment of the invisible covenant. Treat it with appropriate gravity."
  },
  {
    element: "Declaration and Benediction",
    color: "#6B4FBB",
    meaning: "The officiant's declaration ('I now pronounce you husband and wife') is the legal and spiritual confirmation of the covenant. The benediction sends the couple into their new life with divine blessing.",
    options: [
      "Numbers 6:24-26 (The Aaronic Blessing: 'The Lord bless you and keep you...')",
      "Ephesians 3:14-21 (Paul's great prayer for love and fullness)",
      "Philippians 1:9-11 (love abounding in knowledge and discernment)",
      "Ruth 1:17 close: 'May God do so to you if anything but death parts you'"
    ],
    note: "The benediction is a prayer over the couple's life together, not merely a closing formula. Pray it with conviction."
  }
];

const premaritalTopics = [
  {
    topic: "Communication & Conflict",
    color: "#EF4444",
    questions: [
      "How did your family of origin handle conflict?",
      "What does 'winning' an argument look like for you?",
      "How do you communicate when you're hurt, scared, or angry?",
      "What is your pattern when you feel criticized or defensive?"
    ],
    exercises: "Do the Prepare/Enrich assessment. Practice a difficult conversation with a mediator present.",
    resource: "The Seven Principles for Making Marriage Work (John Gottman)"
  },
  {
    topic: "Finances",
    color: "#10B981",
    questions: [
      "What does each of you earn, owe, and save?",
      "Who will manage day-to-day finances? Who will handle investments?",
      "What do you do with a major purchase disagreement?",
      "What is your philosophy on debt? Giving? Savings?"
    ],
    exercises: "Build a first-year budget together. Disclose all debt, credit scores, and financial commitments before the wedding.",
    resource: "The Total Money Makeover (Dave Ramsey) or The Millionaire Next Door"
  },
  {
    topic: "Spiritual Life",
    color: "#8B5CF6",
    questions: [
      "How do you pray individually? How will you pray together?",
      "What is your relationship with the local church and its authority?",
      "What does a spiritually healthy marriage look like in practice?",
      "How will you handle spiritual conflict or seasons of doubt?"
    ],
    exercises: "Commit to a shared devotional plan for the first year. Identify your church home before the wedding.",
    resource: "Sacred Marriage (Gary Thomas), Disciplines of a Godly Man/Woman (R. Kent Hughes)"
  },
  {
    topic: "Sexuality & Intimacy",
    color: "#F59E0B",
    questions: [
      "What are your expectations for frequency and quality of intimacy?",
      "Are there histories (past relationships, pornography, trauma) that need to be shared?",
      "How do you handle seasons of low desire, pain, or disconnection?",
      "What does consent and mutual delight look like in your relationship?"
    ],
    exercises: "Read a theologically grounded book on sexuality together before the wedding. Have an honest premarital conversation with a pastor or counselor.",
    resource: "The Meaning of Marriage (Tim Keller), Real Sex (Lauren Winner)"
  },
  {
    topic: "Children & Parenting",
    color: "#3B82F6",
    questions: [
      "Do you want children? How many? When?",
      "What if you cannot have biological children — what are your options and feelings?",
      "What are your primary parenting philosophies and commitments?",
      "How will you raise your children spiritually?"
    ],
    exercises: "Discuss Deuteronomy 6 and your vision for family discipleship. Visit a family counselor if parenting philosophies significantly diverge.",
    resource: "Parenting (Paul David Tripp), Give Them Grace (Elyse Fitzpatrick)"
  },
  {
    topic: "In-Laws & Family",
    color: "#6B7280",
    questions: [
      "What does 'leaving and cleaving' look like with your families of origin?",
      "How often will you see parents and siblings? Who decides?",
      "How will you handle significant family-of-origin dysfunction?",
      "Who do you turn to in a marital crisis — and who should you not?"
    ],
    exercises: "Define 'leaving' specifically: discuss holiday plans, weekly contact expectations, and financial independence as separate topics.",
    resource: "Boundaries (Cloud and Townsend), Married and Still Loving It (Gary Chapman)"
  }
];

const traditionalVows = [
  {
    title: "Traditional Protestant Vows",
    text: "I, [Name], take you, [Name], to be my wedded [husband/wife], to have and to hold from this day forward, for better for worse, for richer for poorer, in sickness and in health, to love and to cherish, until we are parted by death. This is my solemn vow.",
    origin: "Book of Common Prayer tradition; in use since the English Reformation"
  },
  {
    title: "Episcopal / Anglican Vows (BCP 1979)",
    text: "In the name of God, I, [Name], take you, [Name], to be my [husband/wife], to have and to hold from this day forward, for better for worse, for richer for poorer, in sickness and in health, to love and to cherish, until we are parted by death. This is my solemn vow.",
    origin: "Book of Common Prayer 1979; slight modification of traditional form"
  },
  {
    title: "Reformed / Presbyterian Vows",
    text: "I, [Name], take you, [Name], to be my [wife/husband], and I do promise and covenant, before God and these witnesses, to be your loving and faithful [husband/wife], in plenty and in want, in joy and in sorrow, in sickness and in health, as long as we both shall live.",
    origin: "Westminster tradition; emphasizes covenant language"
  },
  {
    title: "Simple Evangelical Vows",
    text: "I, [Name], choose you, [Name], to be my [wife/husband]. I commit to you my love and faithfulness, in joy and in sorrow, in poverty and in wealth, in sickness and in health, for all the days of my life. I give you this ring as a pledge of my love and fidelity.",
    origin: "Contemporary evangelical modification; retains the covenantal elements"
  }
];

export default function ChristianWeddingGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_christian-wedding-guide_tab", "theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedElement, setSelectedElement] = useState(ceremonyElements[0]);

  const [cwedEntries, setCwedEntries] = useState<{ id: string; date: string; topic: string; scripture: string; applying: string }[]>(() => {
    try { const s = localStorage.getItem("vine_cwed_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [cwedForm, setCwedForm] = useState({ topic: "", scripture: "", applying: "" });
  const [cwedSaved, setCwedSaved] = useState(false);
  useEffect(() => { localStorage.setItem("vine_cwed_entries", JSON.stringify(cwedEntries)); }, [cwedEntries]);
  function saveCwedEntry() {
    if (!cwedForm.topic.trim()) return;
    setCwedEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...cwedForm }, ...prev]);
    setCwedForm({ topic: "", scripture: "", applying: "" });
    setCwedSaved(true); setTimeout(() => setCwedSaved(false), 2000);
  }
  function deleteCwedEntry(id: string) { setCwedEntries(prev => prev.filter(e => e.id !== id)); }

  const toggle = (k: string) => setExpanded(p => ({ ...p, [k]: !p[k] }));

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology of Marriage" },
    { id: "ceremony", label: "The Ceremony" },
    { id: "premarital", label: "Premarital Topics" },
    { id: "vows", label: "Traditional Vows" },
    { id: "journal", label: "📓 My Journal" },
    { id: "videos", label: "🎬 Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)", fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: "#EF4444", color: "#fff", padding: "4px 16px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>
            COVENANT & MARRIAGE
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, margin: "0 0 12px" }}>
            Christian Wedding Guide
          </h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
            A Christian wedding is not a performance of a cultural ritual — it is the founding of a covenant before God. Here is the theology, the ceremony, the premarital preparation, and the vows that make it so.
          </p>
        </div>

        {/* Banner */}
        <div style={{ background: "#EF444411", border: "1px solid #EF444433", borderRadius: 12, padding: "14px 24px", marginBottom: 32, textAlign: "center" }}>
          <p style={{ margin: 0, fontStyle: "italic", fontWeight: 600 }}>
            "This is a profound mystery — but I am talking about Christ and the church." — Ephesians 5:32
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                background: activeTab === t.id ? GREEN : CARD,
                color: activeTab === t.id ? "#000" : TEXT,
                border: `1px solid ${activeTab === t.id ? GREEN : BORDER}`,
                borderRadius: 8, padding: "8px 18px", cursor: "pointer", fontWeight: 600, fontSize: 14
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Theology */}
        {activeTab === "theology" && (
          <div style={{ maxWidth: 720 }}>
            {theologyPoints.map((pt, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, marginBottom: 12 }}>
                <button type="button"
                  onClick={() => toggle(`pt-${i}`)}
                  style={{
                    width: "100%", background: "none", border: "none", color: TEXT,
                    padding: "16px 20px", textAlign: "left", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    fontWeight: 700, fontSize: 15
                  }}
                >
                  {pt.title}
                  <span style={{ color: MUTED }}>{expanded[`pt-${i}`] ? "−" : "+"}</span>
                </button>
                {expanded[`pt-${i}`] && (
                  <div style={{ padding: "0 20px 16px", color: MUTED, lineHeight: 1.7, fontSize: 14 }}>
                    {pt.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Ceremony */}
        {activeTab === "ceremony" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {ceremonyElements.map(el => (
                  <div
                    key={el.element}
                    onClick={() => setSelectedElement(el)}
                    style={{
                      background: selectedElement.element === el.element ? el.color + "22" : CARD,
                      border: `2px solid ${selectedElement.element === el.element ? el.color : BORDER}`,
                      borderRadius: 10, padding: 16, cursor: "pointer"
                    }}
                  >
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>{el.element}</div>
                    <div style={{ fontSize: 12, color: MUTED }}>{el.meaning.substring(0, 80)}…</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              width: 360, flexShrink: 0, background: CARD, border: `1px solid ${BORDER}`,
              borderRadius: 12, padding: 24, position: "sticky", top: 20
            }}>
              <h3 style={{ margin: "0 0 10px", fontSize: 18, fontWeight: 800, color: selectedElement.color }}>{selectedElement.element}</h3>
              <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, marginBottom: 14 }}>{selectedElement.meaning}</p>
              <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 8 }}>OPTIONS & FORMS</div>
              {selectedElement.options.map((opt, i) => (
                <div key={i} style={{ background: BG, borderRadius: 6, padding: "8px 12px", marginBottom: 6, fontSize: 12, color: MUTED }}>
                  {opt}
                </div>
              ))}
              {selectedElement.scriptures && (
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 10, marginTop: 12 }}>
                  <div style={{ fontSize: 11, color: PURPLE, fontWeight: 700, marginBottom: 6 }}>SUGGESTED SCRIPTURES</div>
                  {selectedElement.scriptures.map(s => (
                    <div key={s} style={{ fontSize: 11, color: MUTED, marginBottom: 3 }}>• {s}</div>
                  ))}
                </div>
              )}
              <div style={{ background: "#F59E0B11", border: "1px solid #F59E0B33", borderRadius: 8, padding: 10, marginTop: 12 }}>
                <span style={{ fontSize: 11, color: "#F59E0B", fontWeight: 700 }}>NOTE: </span>
                <span style={{ fontSize: 12, color: MUTED }}>{selectedElement.note}</span>
              </div>
            </div>
          </div>
        )}

        {/* Premarital */}
        {activeTab === "premarital" && (
          <div>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 28, maxWidth: 720 }}>
              Research shows premarital preparation reduces divorce risk by 30%+. These {premaritalTopics.length} topic areas are the essential conversations every couple must have before the wedding.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
              {premaritalTopics.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, borderTop: `3px solid ${t.color}` }}>
                  <h3 style={{ margin: "0 0 14px", fontSize: 17 }}>{t.topic}</h3>
                  <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 8 }}>DISCUSSION QUESTIONS</div>
                  {t.questions.map((q, j) => (
                    <div key={j} style={{ fontSize: 12, color: MUTED, marginBottom: 6, paddingLeft: 12, borderLeft: `2px solid ${BORDER}` }}>
                      {q}
                    </div>
                  ))}
                  <div style={{ background: BG, borderRadius: 8, padding: 10, marginTop: 12, marginBottom: 10 }}>
                    <div style={{ fontSize: 11, color: PURPLE, fontWeight: 700, marginBottom: 4 }}>EXERCISES</div>
                    <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>{t.exercises}</p>
                  </div>
                  <div style={{ fontSize: 12, color: MUTED }}>
                    <strong style={{ color: MUTED }}>Resource: </strong>{t.resource}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Vows */}
        {activeTab === "vows" && (
          <div style={{ maxWidth: 720 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 28 }}>
              The vows are the heart of the wedding ceremony — the covenantal words that constitute the marriage. These traditional forms have been used by the church for centuries. They should retain the language of permanence and total commitment.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {traditionalVows.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                  <h3 style={{ margin: "0 0 12px", fontSize: 17, color: PURPLE }}>{v.title}</h3>
                  <div style={{ background: BG, borderRadius: 10, padding: 20, marginBottom: 12 }}>
                    <p style={{ fontSize: 15, fontStyle: "italic", lineHeight: 1.8, margin: 0, color: TEXT }}>
                      &ldquo;{v.text}&rdquo;
                    </p>
                  </div>
                  <div style={{ fontSize: 12, color: MUTED }}>
                    <strong style={{ color: MUTED }}>Origin: </strong>{v.origin}
                  </div>
                </div>
              ))}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ margin: "0 0 12px", fontSize: 17, color: GREEN }}>Writing Your Own Vows</h3>
                <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, marginBottom: 14 }}>
                  Personal vows are meaningful when done well. They should:
                </p>
                {[
                  "Retain the language of permanence: 'for all the days of my life', 'until death parts us'",
                  "Be addressed to your spouse, not to the audience — it's a promise, not a performance",
                  "Avoid conditions: not 'as long as we love each other' but unconditional commitment",
                  "Be reviewed by your officiant before the ceremony",
                  "Be roughly equal in length between the two of you",
                  "Be spoken from memory or read — not performed theatrically"
                ].map((tip, j) => (
                  <div key={j} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                    <div style={{ color: GREEN, flexShrink: 0 }}>✓</div>
                    <div style={{ fontSize: 13, color: MUTED }}>{tip}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>My Wedding & Marriage Journal</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 24 }}>Reflect on marriage theology and your journey toward the altar. Saved privately in your browser.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <div style={{ marginBottom: 14 }}>
                <label style={{ color: MUTED, fontSize: 13, display: "block", marginBottom: 6 }}>What topic about marriage or your wedding are you thinking through?</label>
                <textarea value={cwedForm.topic} onChange={e => setCwedForm(f => ({ ...f, topic: e.target.value }))}
                  placeholder="Covenant theology, ceremony, vows, roles, premarital..." rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ color: MUTED, fontSize: 13, display: "block", marginBottom: 6 }}>What Scripture speaks to this?</label>
                <textarea value={cwedForm.scripture} onChange={e => setCwedForm(f => ({ ...f, scripture: e.target.value }))}
                  placeholder="Verse or passage guiding you..." rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ color: MUTED, fontSize: 13, display: "block", marginBottom: 6 }}>How are you applying this to your relationship or preparation?</label>
                <textarea value={cwedForm.applying} onChange={e => setCwedForm(f => ({ ...f, applying: e.target.value }))}
                  placeholder="A decision, conversation, or commitment..." rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveCwedEntry}
                style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                {cwedSaved ? "Saved ✓" : "Save Entry"}
              </button>
            </div>
            {cwedEntries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {cwedEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteCwedEntry(e.id)}
                        style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>
                    </div>
                    {e.topic && <div style={{ marginBottom: 8 }}><span style={{ color: GREEN, fontSize: 12, fontWeight: 700 }}>TOPIC </span><span style={{ color: TEXT, fontSize: 14 }}>{e.topic}</span></div>}
                    {e.scripture && <div style={{ marginBottom: 8 }}><span style={{ color: PURPLE, fontSize: 12, fontWeight: 700 }}>SCRIPTURE </span><span style={{ color: TEXT, fontSize: 14 }}>{e.scripture}</span></div>}
                    {e.applying && <div><span style={{ color: MUTED, fontSize: 12, fontWeight: 700 }}>APPLYING </span><span style={{ color: TEXT, fontSize: 14 }}>{e.applying}</span></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on Christian marriage, wedding theology, and covenant love.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "mC-zw0zCCtg", title: "Marriage is About Christ and the Church", channel: "Desiring God / John Piper", description: "John Piper on Ephesians 5 — the theological foundation that makes Christian marriage different from every other understanding of marriage." },
                  { videoId: "7_CGP-12AE0", title: "The Making and Meaning of Marriage", channel: "Voddie Baucham", description: "Voddie Baucham on the biblical definition of marriage as covenant — what it means, why it matters, and how it reflects the gospel." },
                  { videoId: "OqwbFGoRYVo", title: "Marriage for the Glory of God", channel: "Paul Washer / John Piper / Voddie Baucham", description: "Three of evangelical Christianity's strongest voices on the foundational biblical concept that marriage belongs to God and exists for his glory." },
                  { videoId: "gV9JugO_5Mk", title: "This Momentary Marriage", channel: "Desiring God / John Piper", description: "John Piper on marriage as a covenant that portrays Christ's love for the church — and why that makes it both glorious and urgent." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
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
