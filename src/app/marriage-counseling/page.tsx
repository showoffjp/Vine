"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ROSE = "#E11D48", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Seeking Help for Your Marriage Is Wisdom, Not Weakness", verse: "Proverbs 11:14", text: "Where there is no guidance, a people falls, but in an abundance of counselors there is safety. The shame that keeps couples from seeking counseling is not humility — it is pride operating in disguise. Proverbs places seeking counsel among the most practical of wisdoms, not the most desperate of failures. The couple who sits down with a counselor before the crisis becomes a catastrophe is not failing at marriage; they are practicing the very wisdom Proverbs commends. God has given pastors, counselors, therapists, and wise community for exactly this purpose. To refuse their help in the name of keeping appearances is to choose suffering over wisdom." },
  { title: "The Covenant Holds Even When the Marriage Is Struggling", verse: "Malachi 2:16", text: "For the man who does not love his wife but divorces her, says the Lord, the God of Israel, covers his garment with violence. God designed marriage as a covenant — a binding commitment structured like his own faithfulness to Israel — not as a contract that dissolves when performance falls short. This means that the marriage struggling through conflict, coldness, or injury is still a marriage, still under the covenant, still capable of restoration. The presence of struggle is not the dissolution of the covenant. It is the test of it. The covenant does not make struggling marriages easy; it makes their repair worth attempting, and their restoration possible." },
  { title: "Confession and Forgiveness Are the Core Repair Mechanisms", verse: "James 5:16", text: "Therefore, confess your sins to one another and pray for one another, that you may be healed. James 5:16 was written for the community of believers broadly, but it is perhaps most urgently applicable inside the covenant of marriage. The core repair mechanism in a damaged marriage is not technique or communication skill — though these help — but the willingness to confess specifically and to forgive genuinely. Healing in marriage requires that both spouses be willing to say 'I was wrong' without qualification and 'I forgive you' without keeping records. This is not natural to sinners. It is supernatural — it is the gospel operating inside a home." },
  { title: "Both Spouses Are Sinners — The Question Is Who Goes First", verse: "Matthew 7:3-5", text: "Why do you see the speck that is in your brother's eye, but do not notice the log that is in your own eye? … First take the log out of your own eye, and then you will see clearly to take out the speck. The most common pattern in marital conflict is that each spouse is genuinely aware of the other's contribution to the problem and genuinely blind to their own. Jesus's log-and-speck image is not a metaphor about differing levels of sin; it is a diagnosis of how sinners see. The person convinced that their spouse is the primary problem is experiencing the normal distortion of human perception. The first step in counseling is almost always the same: each person examines their own contribution before addressing the other's." },
  { title: "Restoration Is Possible — But Both Must Want It", verse: "Galatians 6:1", text: "Brothers, if anyone is caught in any transgression, you who are spiritual should restore him in a spirit of gentleness. Keep watch on yourself, lest you too be tempted. Galatians 6:1 names the goal of Christian community response to sin as restoration — not punishment, not exposure, but restoration, in a spirit of gentleness. This is the theological framework for Christian marriage counseling. The goal is restoration of the relationship and both persons, not winning an argument or assigning blame. But restoration requires willingness on both sides. The counselor can facilitate, the community can support, but no one can force genuine repentance or genuine forgiveness. Both spouses must want the marriage to be restored for counseling to work." },
];

const warning_signs = [
  { icon: "🔴", title: "You're Having the Same Fight With No Resolution", text: "Every couple has conflict. The sign that professional help is needed is not conflict itself but recurring, unresolved conflict that follows the same pattern each time. If you find yourself returning to the same argument — same triggers, same escalation, same unresolved conclusion — you are not failing to communicate; you are stuck in a pattern that has become self-reinforcing. A counselor can help you identify what is actually driving the pattern beneath the presenting argument, which is almost never what the argument appears to be about." },
  { icon: "💔", title: "Contempt Has Replaced Affection", text: "John Gottman's research identifies contempt — the sense that your spouse is beneath you, that their perspective is not worth engaging — as the single strongest predictor of divorce. When the emotional environment of a marriage has shifted from warmth and respect to eye-rolling, dismissiveness, sarcasm, and emotional distance, the relationship is under serious threat. Cold emotional distance is not just unhappiness; it is the withdrawal of the fundamental regard that makes repair possible. If you no longer feel basic goodwill toward your spouse, seek help before indifference becomes permanent." },
  { icon: "🚫", title: "Physical or Emotional Abuse — Seek Safety First", text: "If there is physical violence, threatening behavior, or systematic emotional abuse in your marriage, the first priority is safety — not counseling. Traditional couples counseling is not appropriate when abuse is present, because the power imbalance makes honest communication unsafe and can make the situation worse. If you are in an abusive relationship, reach out to the National Domestic Violence Hotline (1-800-799-7233), a trusted pastor or counselor individually, or a safe family member. Safety comes before reconciliation. Leslie Vernick's The Emotionally Destructive Marriage is a Christian resource specifically designed for this situation." },
  { icon: "❄️", title: "Emotional Shutdown — One or Both Have Stopped Trying", text: "Stonewalling — the physiological and emotional shutdown where one or both spouses simply stop responding — is another of Gottman's Four Horsemen predictors of divorce. When one spouse has withdrawn to the point of no longer engaging, arguing, or caring, the relationship is in a different kind of danger than active conflict. Stonewalling is often the result of accumulated hurt and a self-protective response to feeling chronically flooded. It feels like peace but is actually the absence of the investment that makes repair possible. If you or your spouse have emotionally checked out, intervention is urgent." },
  { icon: "📱", title: "A Third Party Is Involved — Affair or Emotional Infidelity", text: "Whether the infidelity is physical or emotional — a physical affair, an emotional affair, or a significant attachment to another person — the presence of a third party in the marriage creates a crisis that almost always requires professional help to navigate. Recovery from infidelity is possible; many couples who have walked through it report that their marriages became stronger on the other side. But it is not possible without expert guidance, extended time, complete transparency, and genuine repentance and grief. If infidelity has occurred, find a therapist with specific experience in affair recovery alongside pastoral support." },
];

const voices = [
  { id: "jg", name: "John Gottman", role: "Marriage Researcher; Author, The Seven Principles for Making Marriage Work", quote: "The goal in marriage is not to think alike, but to think together. Couples who stay together do not avoid conflict; they have learned how to repair after conflict. The presence of the Four Horsemen — criticism, contempt, defensiveness, and stonewalling — predicts divorce not because conflict is present but because repair has failed. The couples who make it are not the ones who fight less; they are the ones who say 'I'm sorry' sooner and mean it.", bio: "Gottman's decades of research at the University of Washington's Love Lab produced the most empirically grounded model of marital stability available. His Four Horsemen framework — criticism, contempt, defensiveness, stonewalling — gives counselors and couples specific behavioral patterns to identify and address. The Seven Principles for Making Marriage Work is the most practical translation of his research into actionable guidance." },
  { id: "gc", name: "Gary Chapman", role: "Author, The Five Love Languages; Marriage Counselor", quote: "People speak different love languages, and most marital unhappiness is the result of speaking your own language rather than your spouse's. We tend to love our spouses in the way we ourselves want to be loved — which is natural but often unhelpful. The question that transforms a marriage is not 'what makes me feel loved?' but 'what makes my spouse feel loved?' — and then choosing to speak that language consistently, even when it does not come naturally.", bio: "Chapman's Five Love Languages — words of affirmation, acts of service, receiving gifts, quality time, and physical touch — has become one of the most widely used frameworks in Christian marriage counseling. Its primary contribution is a language for the common experience of partners who are investing in the marriage but still feeling unloved: they are speaking the wrong language. The assessment and the framework together give couples a practical starting point for understanding disconnection." },
  { id: "lv", name: "Leslie Vernick", role: "Author, The Emotionally Destructive Marriage; Licensed Counselor", quote: "Not every unhappy marriage is a destructive marriage, but it's important to know the difference. An unhappy marriage is one where two people are struggling to connect, communicate, or grow together — and with help, that can change. A destructive marriage is one where one person's patterns are causing serious damage to the other's physical, emotional, or spiritual wellbeing. The Christian community has sometimes encouraged endurance in situations that required something more urgent than endurance: safety, protection, and accountability.", bio: "Vernick's The Emotionally Destructive Marriage addresses a gap in most Christian marriage literature: the category of marriages that are not merely difficult but genuinely destructive. Her work gives pastors, counselors, and spouses a framework for distinguishing an unhappy marriage (which should be worked on) from a destructive one (which requires different intervention). She writes from a deeply Christian framework that takes both the sanctity of marriage and the dignity of persons seriously — refusing to sacrifice one for the other." },
];

const scriptures = [
  { verse: "Malachi 2:14", text: "But you say, 'Why does he not?' Because the Lord was witness between you and the wife of your youth, to whom you have been faithless, though she is your companion and your wife by covenant." },
  { verse: "James 5:16", text: "Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working." },
  { verse: "Proverbs 11:14", text: "Where there is no guidance, a people falls, but in an abundance of counselors there is safety." },
  { verse: "Matthew 7:3-5", text: "Why do you see the speck that is in your brother's eye, but do not notice the log that is in your own eye? Or how can you say to your brother, 'Let me take the speck out of your eye,' when there is the log in your own eye? You hypocrite, first take the log out of your own eye, and then you will see clearly to take out the speck that is in your brother's eye." },
  { verse: "Colossians 3:13", text: "Bearing with one another and, if one has a complaint against another, forgiving each other; as the Lord has forgiven you, so you also must forgive." },
  { verse: "1 Corinthians 13:7", text: "Love bears all things, believes all things, hopes all things, endures all things." },
];

type MCEntry = { id: string; date: string; struggle: string; contribution: string; change: string };

export default function MarriageCounselingPage() {
  const [tab, setTab] = useState("theology");
  const [mcJournal, setMcJournal] = useState<MCEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_marrcounseling_entries") ?? "[]"); } catch { return []; }
  });
  const [jStruggle, setJStruggle] = useState("");
  const [jContribution, setJContribution] = useState("");
  const [jChange, setJChange] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_marrcounseling_entries", JSON.stringify(mcJournal)); } catch {}
  }, [mcJournal]);

  function saveEntry() {
    if (!jStruggle.trim() && !jContribution.trim()) return;
    setMcJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), struggle: jStruggle, contribution: jContribution, change: jChange }, ...prev]);
    setJStruggle(""); setJContribution(""); setJChange("");
  }
  function deleteEntry(id: string) { setMcJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "warning-signs", "voices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
          <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Marriage &amp; Family</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Marriage Counseling</h1>
          <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Seeking help for your marriage from a Christian perspective — the theology of covenant and restoration, signs that counseling is needed, and the voices that have guided couples through struggle toward healing.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? ROSE : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>
                {t === "warning-signs" ? "Warning Signs" : t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
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

          {tab === "warning-signs" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {warning_signs.map((w, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", display: "flex", gap: "1rem" }}>
                  <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{w.icon}</div>
                  <div>
                    <h3 style={{ margin: "0 0 0.5rem", fontSize: "0.95rem" }}>{w.title}</h3>
                    <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{w.text}</p>
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
                <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Marriage Journal</h3>
                <textarea placeholder="What specific pattern or struggle are we experiencing in our marriage?" value={jStruggle} onChange={e => setJStruggle(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What has each of us contributed to this struggle (being honest)?" value={jContribution} onChange={e => setJContribution(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What specific change am I willing to make?" value={jChange} onChange={e => setJChange(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
                <button onClick={saveEntry} style={{ background: ROSE, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
              </div>
              {mcJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : mcJournal.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                  {e.struggle && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>The struggle:</strong> {e.struggle}</p>}
                  {e.contribution && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>My contribution:</strong> {e.contribution}</p>}
                  {e.change && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Change I'll make:</strong> {e.change}</p>}
                  <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { videoId: "YsA2NLpGE6A", title: "The Gospel and Your Marriage", channel: "The Gospel Coalition", description: "How the gospel of grace — not merely moral resolve — is the power that transforms marriages. The pattern of Christ's self-giving love for the church is the model and the enabling grace for how husbands and wives relate to one another." },
                { videoId: "0X4t4bnIr9Y", title: "Conflict, Forgiveness, and Repair in Marriage", channel: "Focus on the Family", description: "A Christian counseling perspective on the anatomy of marital conflict — why the same fights recur, what forgiveness actually requires, and how couples learn to repair after rupture rather than accumulate injury." },
                { videoId: "il8H5VytxUk", title: "When Your Marriage Is in Crisis — Finding Help", channel: "Focus on the Family", description: "Practical guidance for couples in serious marital difficulty — how to find a qualified Christian counselor, what to expect in the counseling process, and why seeking help is an act of faith rather than failure." },
                { videoId: "RL1xwNJaOvE", title: "Emotionally Destructive Relationships — Leslie Vernick", channel: "Leslie Vernick", description: "Vernick on recognizing the difference between a difficult marriage and a destructive one — and what the Christian response to each situation looks like, including when safety requires action beyond endurance." },
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
        </div>
      </div>
      <Footer />
    </>
  );
}
