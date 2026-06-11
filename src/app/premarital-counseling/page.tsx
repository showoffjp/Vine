"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ROSE = "#E11D48", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Marriage Is a Covenant, Not a Contract — and the Difference Is Everything", verse: "Malachi 2:14", text: "The Lord has been a witness between you and the wife of your youth, because you have broken faith with her, though she is your partner, the wife of your marriage covenant. Malachi names what modern culture has largely forgotten: marriage is a covenant witnessed by God himself. A contract is broken when one party fails to perform. A covenant holds even when — especially when — the other party fails, because it is grounded in the character of the one who made it, not in the performance of either party. Premarital preparation that begins here produces couples who understand what they are actually entering." },
  { title: "The Gospel Is the Pattern for Marriage — Not Just a Blessing on It", verse: "Ephesians 5:25", text: "Husbands, love your wives, just as Christ loved the church and gave himself up for her. Paul's framework for marriage is not mutual benefit, compatibility, or romantic fulfillment — it is the gospel itself. Christ's self-giving love for the church is the model and the measure. This means that Christian marriage is structured around self-donation rather than self-fulfillment. Premarital counseling that does not address the difference between a consumer model of marriage and a covenantal one produces couples who will be bewildered when the consumer logic eventually fails." },
  { title: "Conflict in Marriage Is Inevitable — How You Fight Is What Matters", verse: "Ephesians 4:26-27", text: "In your anger do not sin. Do not let the sun go down while you are still angry, and do not give the devil a foothold. Paul does not say 'do not be angry in marriage.' He says do not let anger become sin, and resolve it before sleep. Premarital preparation for conflict is not planning for marriage failure — it is the realistic acknowledgment that two sinners sharing a life will produce friction, and that the quality of repair determines the health of the marriage far more than the absence of conflict does. Every couple needs a conflict vocabulary before they need it." },
  { title: "Two Specific Families Are Joining — and Leaving — When You Marry", verse: "Genesis 2:24", text: "That is why a man leaves his father and mother and is united to his wife, and they become one flesh. The word leave in Genesis 2 is structural, not emotional — it describes the transfer of primary loyalty and attachment. Marriage requires leaving the family of origin as the primary relational unit and establishing a new one. This does not mean abandoning family; it means that the new covenant unit takes precedence. Many marriages struggle for years because one or both spouses have not made this transfer — in practice or in the understanding of their parents. Premarital counseling that surfaces this issue before marriage prevents years of confusion after it." },
  { title: "Sexual Intimacy in Marriage Is Good, Designed, and Requires Preparation", verse: "Song of Songs 4:1", text: "How beautiful you are, my darling! Oh, how beautiful! The Song of Songs is in the canon because physical, erotic love within marriage is not a concession to human weakness but a gift of God's good design. Christian premarital preparation often handles sexuality with either too much silence (producing shame) or too much clinical instruction (missing the relational depth). The Song's language — extravagant, embodied, delighted — models how Scripture actually addresses sexual intimacy: not as a problem to manage but as a garden to tend." },
];

const topics = [
  { icon: "💬", title: "Communication Styles and Conflict Patterns", text: "The Gottman Institute's research identifies four communication patterns that predict divorce with 90%+ accuracy: contempt, criticism, defensiveness, and stonewalling (the Four Horsemen). Premarital counseling should help couples identify their default conflict styles, practice repair attempts, and develop explicit agreements about how they will fight — how they will call time-outs, how they will return to difficult conversations, and what 'resolved' actually looks like in your relationship." },
  { icon: "💰", title: "Money, Spending, and Financial Values", text: "Financial conflict is the leading cause of divorce, and it is almost always a values conflict, not a math problem. Premarital counseling should surface: Who is the spender and who is the saver? What did your family of origin model about money? What are your financial goals and timelines? How will you make major financial decisions? What is your theology of giving and tithing? Getting explicit about financial expectations before marriage prevents the discovery — often years in — that you married someone with a fundamentally different relationship with money." },
  { icon: "👨‍👩‍👧", title: "Parenting Philosophy and Expectations", text: "Do you want children? How many? When? What will discipline look like? What are your expectations about work and childcare? What values will you explicitly try to pass on? These questions — if they have different answers — are easier to navigate before marriage than after. Couples who discover they have irreconcilable differences on children after marriage face a much harder situation than couples who surface these differences before the wedding." },
  { icon: "⛪", title: "Church, Faith, and Spiritual Leadership", text: "Will you attend the same church? Who will take spiritual leadership in the home, and what does that mean practically? How do you pray together now, and what do you want that to look like after marriage? What does spiritual formation in marriage look like — Bible reading, prayer, small groups, service? These questions matter because spiritual intimacy either deepens the bond of Christian marriage or, when neglected, creates a void that other things fill less well." },
  { icon: "👨‍👩‍👴", title: "Family of Origin and Extended Family Roles", text: "How close do you expect to be to your families of origin after marriage? Whose family do you spend holidays with, and how are decisions made about that? What relationships do each of you have with your parents — are those relationships healthy, or are there patterns (enmeshment, conflict, distance) that will affect your marriage? The most predictive question is often: does each partner's family of origin affirm the primacy of the new marriage, or do they compete with it?" },
];

const scriptures = [
  { verse: "Genesis 2:24", text: "That is why a man leaves his father and mother and is united to his wife, and they become one flesh." },
  { verse: "Ephesians 5:25", text: "Husbands, love your wives, just as Christ loved the church and gave himself up for her." },
  { verse: "Malachi 2:14", text: "The Lord has been a witness between you and the wife of your youth — the wife of your marriage covenant." },
  { verse: "Proverbs 18:22", text: "He who finds a wife finds what is good and receives favor from the Lord." },
  { verse: "1 Corinthians 13:4-5", text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking." },
  { verse: "Ecclesiastes 4:9-10", text: "Two are better than one, because they have a good return for their labor: if either of them falls down, one can help the other up." },
];

const voices = [
  { id: "gb", name: "Gary Thomas", role: "Author, Sacred Marriage; Marriage Speaker", quote: "The most transformative question you can ask about your marriage is not 'Will this person make me happy?' but 'Will this marriage make me holy?' Sacred marriage is designed not primarily to make us comfortable but to make us like Christ. Couples who enter marriage expecting sanctification rather than only fulfillment are better equipped for what actually happens in a good marriage.", bio: "Thomas's Sacred Marriage reframes the entire purpose of marriage — from romantic fulfillment (which marriage sometimes provides and sometimes withholds) to spiritual formation (which a faithful marriage reliably produces). His work has helped countless couples reorient their expectations in ways that make the hard seasons of marriage interpretable rather than disorienting." },
  { id: "jg", name: "John Gottman", role: "Marriage Researcher; Author, Seven Principles for Making Marriage Work", quote: "What separates stable from unstable couples is not the absence of conflict — all couples fight — but the ratio of positive to negative interactions. Stable couples have at least five positive interactions for every negative one. The couples who maintain friendship, express admiration, and turn toward each other in small daily moments are the ones who weather the inevitable storms.", bio: "Gottman's four decades of marriage research have produced the most empirically grounded premarital and marriage counseling tools available. His work — from the Gottman Method to the concept of Love Maps and the Four Horsemen — has been widely integrated into Christian premarital counseling because it provides a research foundation for practical skills without being incompatible with a covenantal theology of marriage." },
  { id: "le", name: "Les & Leslie Parrott", role: "Authors, Saving Your Marriage Before It Starts", quote: "Most couples spend more time planning the wedding than preparing for the marriage. The research is clear: couples who invest in serious premarital preparation have measurably stronger marriages. The investment required is small; the return is large. The skills learned in good premarital counseling — communication, conflict resolution, financial agreement — are the same skills that sustain marriage for fifty years.", bio: "The Parrotts' Saving Your Marriage Before It Starts is one of the most widely used and evidence-based premarital curricula in Christian ministry. Their integration of psychology, marriage research, and Christian theology makes their resources accessible for both pastoral and clinical contexts." },
];

type PMEntry = { id: string; date: string; topic: string; discussion: string; action: string };

export default function PremaritalCounselingPage() {
  const [tab, setTab] = useState("theology");
  const [pmJournal, setPmJournal] = useState<PMEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_premarital_entries") ?? "[]"); } catch { return []; }
  });
  const [jTopic, setJTopic] = useState("");
  const [jDiscussion, setJDiscussion] = useState("");
  const [jAction, setJAction] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_premarital_entries", JSON.stringify(pmJournal)); } catch {}
  }, [pmJournal]);

  function saveEntry() {
    if (!jTopic.trim()) return;
    setPmJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), topic: jTopic, discussion: jDiscussion, action: jAction }, ...prev]);
    setJTopic(""); setJDiscussion(""); setJAction("");
  }
  function deleteEntry(id: string) { setPmJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "topics", "voices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
        <main id="main-content" style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
          <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Marriage &amp; Family</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Premarital Preparation</h1>
          <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Preparing for a covenant, not just a wedding — the theology of Christian marriage, the questions that matter before you say yes, and the skills that sustain the long journey together.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            {tabs.map(t => (
              <button type="button" key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? ROSE : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
            ))}
          </div>

          {tab === "theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {theology.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: ROSE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{t.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "topics" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {topics.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", display: "flex", gap: "1rem" }}>
                  <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                  <div>
                    <h3 style={{ margin: "0 0 0.5rem", fontSize: "0.95rem" }}>{p.title}</h3>
                    <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "voices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {voices.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ fontWeight: 700, marginBottom: "0.15rem" }}>{v.name}</div>
                  <div style={{ color: ROSE, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                  <blockquote style={{ borderLeft: `3px solid ${ROSE}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {scriptures.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: ROSE, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                  <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Preparation Journal</h3>
                <textarea placeholder="What topic are we discussing or working through?" value={jTopic} onChange={e => setJTopic(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What came up in our conversation — agreements, tensions, discoveries?" value={jDiscussion} onChange={e => setJDiscussion(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What action or follow-up do we need from this conversation?" value={jAction} onChange={e => setJAction(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
                <button type="button" onClick={saveEntry} style={{ background: ROSE, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
              </div>
              {pmJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : pmJournal.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                  {e.topic && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Topic:</strong> {e.topic}</p>}
                  {e.discussion && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Discussion:</strong> {e.discussion}</p>}
                  {e.action && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Next step:</strong> {e.action}</p>}
                  <button type="button" onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { videoId: "4H1sMnV6O5g", title: "Sacred Marriage — What If God Designed Marriage to Make Us Holy?", channel: "Gary Thomas", description: "Thomas on the purpose of marriage — why the primary design is not happiness but holiness, and how that reframe changes how we interpret difficulty in marriage and what we expect from a spouse." },
                { videoId: "v5Dy6lvqsGE", title: "The Four Horsemen of Marriage Conflict — Gottman Research", channel: "The Gottman Institute", description: "John Gottman explains the four communication patterns that predict relationship failure — contempt, criticism, defensiveness, and stonewalling — and the antidotes couples can practice instead." },
                { videoId: "1M_MHlPGEsA", title: "Marriage as Covenant — Tim Keller on Ephesians 5", channel: "Redeemer Presbyterian", description: "Keller on the covenantal structure of Christian marriage — how the gospel pattern of Christ and the church defines the shape of husband-wife love and why it is so counterintuitive in our culture." },
                { videoId: "8wyNIiGJ_Lg", title: "Premarital Counseling Questions Every Couple Should Ask", channel: "Focus on the Family", description: "Practical guide to the most important conversations couples should have before marriage — money, family, faith, children, conflict — with tools for having them productively." },
              ].map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: ROSE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                    <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                    <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
