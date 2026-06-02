"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "books" | "premarriage" | "counseling" | "principles";

const BOOKS = [
  { title: "The Meaning of Marriage", author: "Timothy & Kathy Keller", color: GREEN, description: "The most theologically complete treatment of Christian marriage available for a general audience. Keller argues that modern culture's view of marriage — as a romantic arrangement between self-actualized individuals — is fundamentally incompatible with the biblical picture of covenant love. Marriage is not primarily for happiness but for holiness, and it reveals the gospel in unique ways no other relationship can.", verdict: "Essential — the best starting point for any couple wanting to think biblically about marriage" },
  { title: "Sacred Marriage", author: "Gary Thomas", color: PURPLE, description: "What if God designed marriage to make us holy more than to make us happy? Thomas's central question reframes the entire goal of marriage. He argues that the friction, disappointment, and sacrifice of marriage are not problems to be solved but the very mechanism God uses to conform us to Christ. One of the most transformative marriage books because it changes your objective.", verdict: "Essential for couples in hard seasons or whose expectations haven't been met" },
  { title: "The Marriage Builder", author: "Larry Crabb", color: "#3B82F6", description: "Crabb argues that most marital conflict stems from spouses trying to get from each other what only God can provide — unconditional acceptance, security, and significance. When spouses stop demanding these from each other and receive them from God, they become capable of genuinely loving rather than manipulating.", verdict: "Essential for understanding the root of marital conflict" },
  { title: "Love & Respect", author: "Emerson Eggerichs", color: "#F59E0B", description: "Based on Ephesians 5:33 — wives are commanded to respect, husbands to love — Eggerichs argues that wives most deeply need love while husbands most deeply need respect, and that violating these needs triggers a destructive cycle. The practical framework has been used in marriage conferences worldwide.", verdict: "Useful for understanding gender-differentiated needs; some find the framework overstated" },
  { title: "His Needs, Her Needs", author: "Willard Harley", color: "#10B981", description: "Harley identifies the top 5 emotional needs of husbands and wives and argues that affairs happen when spouses fail to meet each other's deepest needs. A practically oriented book for couples wanting to understand what their spouse actually needs rather than what they assume they need.", verdict: "Practically useful; not distinctively Christian but widely used in Christian counseling" },
  { title: "When Sinners Say I Do", author: "Dave Harvey", color: "#EF4444", description: "Grounded in Reformed theology, Harvey examines how the doctrines of grace — particularly total depravity — explain why marriage is hard and how the gospel provides the resources to sustain it. Honest about how selfishness and sin are the actual problems in most marriages.", verdict: "Best Reformed theology applied to marriage — bracing and honest" },
  { title: "Sheet Music", author: "Kevin Leman", color: "#EC4899", description: "Dr. Leman (Christian psychologist) addresses the sexual dimension of Christian marriage with directness, humor, and biblical grounding. Written as a practical guide for married couples, not a theology of sexuality. The most widely used Christian resource on the topic of sex within marriage.", verdict: "Recommended for any married couple wanting frank, Christian guidance on sexual intimacy" },
];

const PRE_MARRIAGE = [
  { title: "Preparing for Marriage", author: "Dennis Rainey", color: GREEN, type: "Workbook", description: "The standard pre-marriage workbook from FamilyLife Ministries. Covers finances, communication, conflict resolution, sexual expectations, spiritual leadership, and extended family. Designed to be worked through by couples with a mentor couple or pastor." },
  { title: "Dates of Destiny", author: "Mark Driscoll", color: PURPLE, type: "Study Guide", description: "A premarital study designed around dates that help couples discuss key topics — finances, parenting philosophy, conflict styles, extended family expectations, and spiritual leadership. More conversational than workbook format." },
  { title: "Saving Your Marriage Before It Starts", author: "Les & Leslie Parrott", color: "#3B82F6", type: "Book & Workbook", description: "Based on research on what predicts marital success and failure. The Parrotts identify the 7 questions every couple needs to discuss before marriage — covering expectations, communication styles, money, and spiritual foundations. Separate him/her workbooks." },
  { title: "FamilyLife Weekend to Remember", author: "FamilyLife Ministries", color: "#F59E0B", type: "Conference", description: "One of the most widely attended pre-marriage and marriage enrichment conferences in America. A full weekend retreat for engaged or married couples covering communication, conflict, spiritual intimacy, and physical intimacy. Hosted at locations across the US. familylife.com/weekend-to-remember" },
];

const PRINCIPLES = [
  { principle: "Marriage is a covenant, not a contract", color: GREEN, explanation: "A contract is conditional: I will perform as long as you do. A covenant is unconditional: I will be faithful regardless. The difference is not semantic — it determines whether divorce becomes thinkable when the contract terms are violated.", scripture: "Malachi 2:14; Matthew 19:6" },
  { principle: "The gospel is the power for marriage", color: PURPLE, explanation: "You cannot love your spouse the way Scripture commands without receiving God's love for yourself. Every demand you make of your spouse that only God can meet will corrupt the relationship. The gospel frees you to love without extracting payment.", scripture: "Ephesians 5:25-33; 1 John 4:19" },
  { principle: "Conflict is normal — contempt is not", color: "#EF4444", explanation: "John Gottman's research identified four predictors of divorce: criticism, contempt, defensiveness, and stonewalling. All four are documented in Proverbs. Conflict between two sinners in a covenant is inevitable; contempt (treating your spouse as beneath you) is the killer.", scripture: "Proverbs 18:2; Ephesians 4:29" },
  { principle: "Communication is more than talking", color: "#3B82F6", explanation: "Most couples communicate about logistics (who picks up the kids, what time is the meeting). What sustains marriage is emotional attunement — understanding your spouse's interior world: fears, hopes, dreams, wounds. Gottman calls it building Love Maps. Proverbs calls it seeking understanding.", scripture: "Proverbs 20:5; James 1:19" },
  { principle: "Forgiveness is not optional", color: "#F59E0B", explanation: "Marriage between two sinners guarantees repeated injury. Unforgiveness transforms isolated failures into accumulating resentments that redefine how you see your spouse. Forgiveness does not mean excusing or forgetting — it means releasing the debt and choosing not to let the offense define the relationship.", scripture: "Ephesians 4:32; Colossians 3:13" },
  { principle: "Spiritual intimacy deepens physical intimacy", color: "#10B981", explanation: "Couples who pray together, study Scripture together, and worship together report significantly higher sexual satisfaction than those who do not. This is not a causation mystery — spiritual intimacy removes barriers, heals wounds, and creates the safety that authentic physical intimacy requires.", scripture: "1 Peter 3:7; 1 Corinthians 7:3-5" },
  { principle: "Your spouse is not your enemy", color: "#EC4899", explanation: "In high-conflict moments, the enemy feels like the person in front of you. Scripture identifies the real enemy as the spiritual forces of darkness that exploit sin patterns in marriages. Remembering you are on the same team against the same enemy changes everything about how you fight.", scripture: "Ephesians 6:12; 1 Peter 5:8" },
];

const COUNSELING_RESOURCES = [
  { name: "Focus on the Family Counseling", desc: "Free initial consultations with a licensed Christian counselor; referral network for ongoing counseling. focusonthefamily.com/counseling", color: GREEN },
  { name: "Association of Biblical Counselors", desc: "Directory of certified biblical counselors. Emphasis on Scripture-saturated, gospel-centered counseling. christiancounseling.com", color: PURPLE },
  { name: "Institute for Christian Counseling & Therapy", desc: "Training and referral network for Christian counselors integrating psychology and theology. Includes online counseling options. icct.com", color: "#3B82F6" },
  { name: "Gottman Method (Christian therapists)", desc: "Many Christian therapists are trained in Gottman Method — the research-based approach to marriage counseling. Search for Gottman-trained therapists on therapy finder sites.", color: "#F59E0B" },
  { name: "FamilyLife Homebuilders Studies", desc: "Small group couples studies covering communication, conflict, finances, and spiritual intimacy. Designed for community use in churches. familylife.com/homebuilders", color: "#10B981" },
  { name: "The Marriage Course (Holy Trinity Brompton)", desc: "A 7-session marriage enrichment course developed at Holy Trinity Brompton (London). Widely used in churches globally; based on practical communication exercises. themarriagecourse.org", color: "#EF4444" },
];

export default function MarriageResourcesPage() {
  const [tab, setTab] = useState<Tab>("books");
  const [selected, setSelected] = useState<string | null>(null);

  const book = BOOKS.find(b => b.title === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>💍</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Marriage Resources</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            The best books, premarriage resources, biblical principles, and counseling options for Christian couples — for every season from engagement to decades of marriage.
          </p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 28, background: CARD, borderRadius: 10, padding: 4, width: "fit-content" }}>
          {(["books", "premarriage", "principles", "counseling"] as Tab[]).map(t => (
            <button key={t} onClick={() => { setTab(t); setSelected(null); }}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t === "books" ? "Books" : t === "premarriage" ? "Pre-Marriage" : t === "principles" ? "Principles" : "Counseling"}
            </button>
          ))}
        </div>

        {tab === "books" && (
          <div style={{ display: "grid", gridTemplateColumns: book ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {BOOKS.map((b, i) => (
                <button key={i} onClick={() => setSelected(selected === b.title ? null : b.title)}
                  style={{ background: selected === b.title ? `${b.color}12` : CARD, border: `1px solid ${selected === b.title ? b.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: TEXT, fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{b.title}</div>
                  <div style={{ color: MUTED, fontSize: 12 }}>{b.author}</div>
                </button>
              ))}
            </div>
            {book && (
              <div style={{ background: CARD, border: `1px solid ${book.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                <h2 style={{ color: book.color, fontWeight: 900, fontSize: 18, margin: "0 0 4px" }}>{book.title}</h2>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{book.author}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{book.description}</p>
                <div style={{ background: `${book.color}10`, border: `1px solid ${book.color}25`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: book.color, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>VERDICT</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{book.verdict}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "premarriage" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {PRE_MARRIAGE.map((r, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${r.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
                  <div style={{ color: r.color, fontWeight: 800, fontSize: 15 }}>{r.title}</div>
                  <span style={{ background: `${r.color}15`, color: r.color, padding: "2px 8px", borderRadius: 6, fontSize: 10, fontWeight: 700 }}>{r.type}</span>
                </div>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{r.author}</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{r.description}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "principles" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {PRINCIPLES.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${p.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 6, borderRadius: 3, background: p.color, alignSelf: "stretch", flexShrink: 0, minHeight: 40 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ color: p.color, fontWeight: 800, fontSize: 14, marginBottom: 8 }}>{p.principle}</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: "0 0 8px" }}>{p.explanation}</p>
                    <div style={{ color: MUTED, fontSize: 11 }}>{p.scripture}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "counseling" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {COUNSELING_RESOURCES.map((r, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${r.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: r.color, fontWeight: 800, fontSize: 14, marginBottom: 8 }}>{r.name}</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
