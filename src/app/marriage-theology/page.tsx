"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", PINK = "#EC4899";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "purposes", label: "Purposes" },
  { id: "covenant", label: "Covenant" },
  { id: "husband-wife", label: "Husband & Wife" },
  { id: "mystery", label: "Gospel Mystery" },
  { id: "challenges", label: "Challenges" },
  { id: "divorce", label: "Divorce & Remarriage" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const MARRIAGE_TEXTS = [
  {
    ref: "Genesis 2:24",
    text: "Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh.",
    note: "Jesus quotes this as the foundational institution — marriage predates law, culture, and the Fall.",
  },
  {
    ref: "Ephesians 5:25-27",
    text: "Husbands, love your wives, as Christ loved the church and gave himself up for her, that he might sanctify her.",
    note: "Paul grounds the husband's role in the gospel: sacrificial, purifying love that reflects Christ.",
  },
  {
    ref: "Proverbs 18:22",
    text: "He who finds a wife finds a good thing and obtains favor from the Lord.",
    note: "Marriage is a gift and a blessing — a sign of God's favor.",
  },
  {
    ref: "Hebrews 13:4",
    text: "Let marriage be held in honor among all, and let the marriage bed be undefiled.",
    note: "The NT explicitly honors marriage and sexual intimacy within it.",
  },
  {
    ref: "Matthew 19:6",
    text: "What therefore God has joined together, let not man separate.",
    note: "Jesus affirms creation-order marriage as God's joining — it is not merely a human institution.",
  },
];

const PURPOSES = [
  {
    purpose: "Companionship",
    verse: "Genesis 2:18",
    desc: "God declares that it is not good for man to be alone. Marriage addresses the fundamental human need for companionship, intimacy, and partnership. The first purpose of marriage is not children but union.",
    color: PINK,
  },
  {
    purpose: "Procreation and Family",
    verse: "Genesis 1:28",
    desc: "The first command given to the human couple is to be fruitful and multiply. Bearing and raising children is a primary purpose of marriage — participating in God's work of filling the earth with image-bearers.",
    color: GREEN,
  },
  {
    purpose: "Sanctification",
    verse: "Ephesians 5:26",
    desc: "Marriage is designed to make both partners more holy. The intimacy, conflict, and sacrifice of marriage expose self-centeredness and cultivate Christlike character in ways no other relationship does.",
    color: PURPLE,
  },
  {
    purpose: "Sexual Fidelity",
    verse: "1 Corinthians 7:2",
    desc: "Marriage is the God-ordained context for sexual intimacy. Paul grounds this not in prudishness but in the reality that sexual union is a profound covenant act — a mystery of union. Marriage protects and honors this.",
    color: TEAL,
  },
  {
    purpose: "Displaying the Gospel",
    verse: "Ephesians 5:32",
    desc: "Paul calls marriage a great mystery — it is a sign of Christ's covenant love for the church. This is the ultimate theological purpose: Christian marriage is a living parable of the gospel before a watching world.",
    color: GOLD,
  },
];

const COVENANT_POINTS = [
  {
    title: "Marriage Is a Covenant, Not a Contract",
    desc: "A contract is conditional and self-interested: I will do X if you do Y. A covenant is unconditional and other-interested: I will be faithful regardless. Biblical marriage is covenantal — patterned on God's covenant faithfulness to Israel and Christ's covenant with the church.",
    color: GOLD,
  },
  {
    title: "Witnessed and Public",
    desc: "Marriage covenants are made before God and witnesses — not merely private agreements. The public dimension matters: community witnesses and holds the couple accountable. 'Before God' means the Creator is the one joining them.",
    color: TEAL,
  },
  {
    title: "Permanent by Design",
    desc: "Jesus says what God joins, let no one separate (Matthew 19:6). The covenant is intended to be permanent — 'until death do us part' is not just tradition but theological substance. Permanence enables the depth of trust, vulnerability, and sacrifice marriage requires.",
    color: GREEN,
  },
  {
    title: "Exclusive",
    desc: "The covenant is between one man and one woman. While polygamy appears in the OT patriarchs, the NT consistently holds to the creation design of one man and one woman. Jesus appeals to Genesis 2, not cultural practice.",
    color: PURPLE,
  },
];

const HUSBAND_WIFE = [
  {
    role: "Headship",
    side: "Husband",
    desc: "Paul calls the husband the head of the wife as Christ is the head of the church (Ephesians 5:23). Crucially, Paul defines headship by Christ's example: self-sacrificial love that gives up its own welfare for the beloved. Headship is servant-leadership, not domination.",
    verse: "Ephesians 5:25",
    color: BLUE,
  },
  {
    role: "Submission",
    side: "Wife",
    desc: "Paul calls wives to submit to their husbands as to the Lord (Ephesians 5:22). In context: this submission is voluntary, mutual in spirit (5:21), and entirely different from servility. It is a response to Christlike headship — not to any husband, but to the kind of sacrificial love Christ shows.",
    verse: "Ephesians 5:22",
    color: PINK,
  },
  {
    role: "Mutual Love",
    side: "Both",
    desc: "Ephesians 5:21 precedes the husband/wife commands: 'submitting to one another in the fear of Christ.' Mutual deference and love undergird the specific commands. Marriage is not a hierarchy of worth but a differentiated partnership.",
    verse: "Ephesians 5:21",
    color: GREEN,
  },
  {
    role: "The Egalitarian View",
    side: "Alternative",
    desc: "Many evangelical Christians (including many scholars) argue the husband/wife commands are culturally conditioned expressions of a deeper principle (mutual love and deference), not permanent role prescriptions. Eph 5:21 is primary; the subordination language reflects first-century culture.",
    verse: "Galatians 3:28",
    color: GOLD,
  },
];

const GOSPEL_MYSTERY = [
  "Ephesians 5:32 calls marriage a 'great mystery' — and then immediately explains: it refers to Christ and the church.",
  "The husband's role images Christ: he loved the church, gave himself for her, and works to present her holy and unblemished.",
  "The wife's role images the church: she trusts, responds to, and honors the one who loves her sacrificially.",
  "Marriage is not just an institution — it is a living sermon. Every Christian marriage declares something about the gospel to those who see it.",
  "This is why Christian marriage is under particular attack: when it is distorted, broken, or redefined, the gospel sign is obscured.",
  "It also means that a beautiful Christian marriage — marked by sacrificial love and trusting response — is one of the most powerful forms of witness available to ordinary Christians.",
];

const DIVORCE_VIEWS = [
  {
    view: "No Divorce (Strict)",
    desc: "Some traditions (Catholic, Eastern Orthodox, some Anabaptist) hold that sacramental marriage is indissoluble — it cannot be truly ended, only broken. Separation may be permitted but remarriage never.",
    color: "#EF4444",
  },
  {
    view: "Divorce for Sexual Immorality",
    desc: "Jesus permits divorce in the case of porneia (sexual immorality) — Matthew 5:32 and 19:9. Reformed and many evangelical interpreters hold this is a legitimate exception. Whether remarriage is permitted varies.",
    color: GOLD,
  },
  {
    view: "Divorce for Desertion",
    desc: "Paul permits separation (not remarriage) when an unbelieving spouse abandons a believer (1 Corinthians 7:15). Many interpret the 'not under bondage' clause as permitting remarriage in this case.",
    color: TEAL,
  },
  {
    view: "Divorce for Abuse",
    desc: "Many pastoral theologians argue that severe, sustained abuse constitutes a form of desertion and covenant-breaking. The victim is not bound to an abuser. This is not explicitly in Scripture but follows from the covenant nature of marriage and the obligation of safety.",
    color: BLUE,
  },
  {
    view: "Remarriage",
    desc: "Views on remarriage range from 'never' (strict indissolubility) to 'after divorce for biblical reasons' to 'after a period of healing and repentance.' Most evangelical traditions permit remarriage after death of a spouse and after divorce for sexual immorality or desertion.",
    color: PURPLE,
  },
];

const CHALLENGES = [
  {
    challenge: "Redefinition of Marriage",
    desc: "Contemporary Western culture has redefined marriage from a creation-order covenant to a contract between any consenting adults. Christians affirm the dignity of all persons while maintaining the creation-order definition: one man and one woman in permanent covenant.",
  },
  {
    challenge: "Cohabitation",
    desc: "Many couples live together before or instead of marriage, often presenting it as a trial marriage. Research consistently shows cohabitation before marriage is associated with higher divorce rates. Theologically: the covenant precedes the sexual union, not the reverse.",
  },
  {
    challenge: "No-Fault Divorce Culture",
    desc: "No-fault divorce makes ending a marriage easier than ending a cell phone contract. While Christians recognize legitimate grounds for divorce, the ease of divorce has made permanence seem optional. The church's witness requires both honoring divorce laws and discipling toward marital permanence.",
  },
  {
    challenge: "Pornography",
    desc: "Pornography use is epidemic and is among the most common threats to marriage. It trains the viewer to treat persons as objects, creates unrealistic expectations, and breaks the covenant of exclusive intimacy. Jesus's teaching on lust (Matthew 5:28) addresses this directly.",
  },
];

const VIDEOS = [
  { videoId: "wIFxJpxA3Rg", title: "Theology of Marriage — Tim Keller" },
  { videoId: "YUxdPHv5mYo", title: "Marriage as a Gospel Sign — Ephesians 5" },
  { videoId: "RVv5Gqgg_pE", title: "Covenant vs Contract: What Marriage Is" },
  { videoId: "cGh0oiGxRHo", title: "Biblical Sexuality and Marriage Overview" },
];

export default function MarriageTheologyPage() {
  const [tab, setTab] = useLocalStorage("vine_marriage_tab", "overview");
  const [openHW, setOpenHW] = useLocalStorage("vine_marriage_hw", "");
  const [openDiv, setOpenDiv] = useLocalStorage("vine_marriage_div", "");
  const [openChal, setOpenChal] = useLocalStorage("vine_marriage_chal", "");
  const [journal, setJournal] = useLocalStorage("vine_marriage_journal", "");

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>💍</div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>Theology of Marriage</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>
            Marriage is not merely a social institution or legal contract — it is a creation ordinance, a sacred covenant, and a living parable of the gospel. Understanding marriage theologically transforms how we live it.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem", background: tab === t.id ? GREEN : CARD, color: tab === t.id ? "#fff" : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${PINK}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${PINK}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: PINK }}>What Is Marriage?</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Marriage is a covenant union between one man and one woman, instituted by God at creation, intended to be permanent and exclusive, encompassing companionship, procreation, sanctification, and — most profoundly — a sign of Christ&apos;s covenant love for the church.</p>
            </div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Key Scriptures</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {MARRIAGE_TEXTS.map(t => (
                <div key={t.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem" }}>
                  <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.25rem" }}>{t.ref}</div>
                  <p style={{ fontStyle: "italic", color: TEXT, margin: "0 0 0.25rem" }}>&ldquo;{t.text}&rdquo;</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>{t.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PURPOSES */}
        {tab === "purposes" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>The Purposes of Marriage</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {PURPOSES.map(p => (
                <div key={p.purpose} style={{ background: CARD, border: `1px solid ${p.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${p.color}` }}>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "baseline", marginBottom: "0.4rem" }}>
                    <div style={{ fontWeight: 700, color: p.color }}>{p.purpose}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{p.verse}</div>
                  </div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* COVENANT */}
        {tab === "covenant" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GOLD }}>Marriage as Covenant</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The Reformers retrieved the covenantal understanding of marriage from biblical theology. Marriage is not a contract between two parties but a covenant before God — patterned on God&apos;s covenants in Scripture, characterized by faithfulness, permanence, and exclusive commitment.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {COVENANT_POINTS.map(c => (
                <div key={c.title} style={{ background: CARD, border: `1px solid ${c.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${c.color}` }}>
                  <div style={{ fontWeight: 700, color: c.color, marginBottom: "0.4rem" }}>{c.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HUSBAND & WIFE */}
        {tab === "husband-wife" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: BLUE }}>Husband and Wife Roles</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Ephesians 5:22-33 is the NT&apos;s most extensive treatment of marriage. It grounds husband-wife roles in the Christ-church relationship, not in culture or pragmatics. Christians debate whether these roles are permanent creation norms or culturally conditioned expressions — both views are held by serious evangelical scholars.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {HUSBAND_WIFE.map((h, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenHW(openHW === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ textAlign: "left" }}>
                      <span style={{ fontWeight: 700, color: h.color }}>{h.role}</span>
                      <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{h.side} · {h.verse}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openHW === String(i) ? "−" : "+"}</span>
                  </button>
                  {openHW === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem", color: MUTED, lineHeight: 1.7 }}>{h.desc}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GOSPEL MYSTERY */}
        {tab === "mystery" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${PINK}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${PINK}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: PINK }}>Marriage as a Gospel Sign</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Paul&apos;s most radical statement about marriage is in Ephesians 5:31-32. He quotes Genesis 2:24 (&ldquo;the two shall become one flesh&rdquo;) and then says: &ldquo;This mystery is profound, and I am saying that it refers to Christ and the church.&rdquo; Marriage is a sign — a living parable — of the gospel.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {GOSPEL_MYSTERY.map((point, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <div style={{ background: PINK, color: "#fff", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0 }}>{i + 1}</div>
                  <p style={{ color: TEXT, margin: 0, lineHeight: 1.7 }}>{point}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CHALLENGES */}
        {tab === "challenges" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Contemporary Challenges</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {CHALLENGES.map((c, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenChal(openChal === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 700, color: "#EF4444", textAlign: "left" }}>{c.challenge}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openChal === String(i) ? "−" : "+"}</span>
                  </button>
                  {openChal === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem", color: MUTED, lineHeight: 1.7 }}>{c.desc}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DIVORCE & REMARRIAGE */}
        {tab === "divorce" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GOLD }}>Divorce and Remarriage</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Divorce is a painful reality in every generation. Jesus affirms marriage&apos;s permanence while acknowledging exceptions. The church must hold both the high calling of covenant faithfulness and pastoral grace for those whose marriages have broken. This is one of the most debated pastoral questions in evangelicalism.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {DIVORCE_VIEWS.map((d, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenDiv(openDiv === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 700, color: d.color, textAlign: "left" }}>{d.view}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openDiv === String(i) ? "−" : "+"}</span>
                  </button>
                  {openDiv === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem", color: MUTED, lineHeight: 1.7 }}>{d.desc}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "0.5rem", color: GREEN }}>Personal Reflection</h2>
              <p style={{ color: MUTED, marginBottom: "1rem", fontSize: "0.9rem" }}>How does a deeper theology of marriage change how you see your marriage or your hope for marriage?</p>
              <textarea value={journal} onChange={e => setJournal(e.target.value)}
                placeholder="Reflect on what you've learned. If you're married: how does viewing your marriage as a gospel sign change your approach? If single: how does this theology shape what you hope for and how you wait?"
                style={{ width: "100%", minHeight: 220, background: BG, color: TEXT, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              <div style={{ color: MUTED, fontSize: "0.8rem", marginTop: "0.5rem" }}>Saved automatically.</div>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Video Teaching</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))", gap: "1.25rem" }}>
              {VIDEOS.map(v => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
