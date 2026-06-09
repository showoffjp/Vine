"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Text Forbids New Marriages to Unbelievers — But It Does Not Abandon Existing Ones", verse: "1 Corinthians 7:12-14", text: "If any brother has a wife who is not a believer and she is willing to live with him, he must not divorce her. And if a woman has a husband who is not a believer and he is willing to live with her, she must not divorce him. For the unbelieving husband is sanctified through his wife. Paul specifically addresses the marriage that exists when one spouse comes to faith. His instruction is striking: stay. The unbelieving spouse is sanctified — set apart in a special way — through the believing one. The children of this union are holy. The believing spouse's faith has weight and reach in the household. The text does not say stay if it's comfortable. It says stay if the unbeliever is willing." },
  { title: "You Are Called to Peace — Not to Conversion by Coercion", verse: "1 Corinthians 7:15-16", text: "But if the unbeliever leaves, let it be so. The brother or the sister is not bound in such circumstances; God has called us to live in peace. How do you know, wife, whether you will save your husband? Or, how do you know, husband, whether you will save your wife? Paul's correction to over-functioning: you do not know whether you will save your spouse. This is a mercy — it releases the believing spouse from the crushing responsibility of engineering the other's conversion. God has called you to peace. The believing spouse's role is faithfulness, not coercion. The outcome belongs to God." },
  { title: "The Witness That Works Is Lived, Not Argued", verse: "1 Peter 3:1-2", text: "Wives, in the same way submit yourselves to your own husbands so that, if any of them do not believe the word, they may be won over without words by the behavior of their wives, when they see the purity and reverence of your lives. Peter's counsel — specifically to believing wives in this text, but with wider application — is counterintuitive: not by argument but by life. Without words. Many believing spouses believe that the path to their partner's faith is more and better theological argument. Peter describes something different: the quality of a lived faith, visible to the unbelieving spouse, that the spouse cannot dismiss because it is enacted rather than argued." },
  { title: "Your Own Faith Cannot Be Outsourced to the Marriage", verse: "Hebrews 10:25", text: "Not giving up meeting together, as some are in the habit of doing, but encouraging one another — and all the more as you see the Day approaching. The believing spouse in an unequally yoked marriage faces a particular spiritual risk: the gravitational pull of the non-believing partner can, over years, erode their own faith. Church attendance, spiritual community, personal prayer, giving — all require individual maintenance when they are not shared. The believing spouse must build and guard their own spiritual life with particular intentionality, not because the marriage is wrong, but because it will not naturally sustain what community does." },
  { title: "The Hope Is Real — and the Timeline Is Not Yours to Control", verse: "1 Corinthians 7:16", text: "How do you know, wife, whether you will save your husband? The question implies a real possibility: you might. The uncertainty — you don't know — is not a denial of hope. Many marriages with a faith differential have seen the non-believing spouse come to faith after years of watching. The testimony of a faithful spouse who loved without coercion and lived without hypocrisy has been the means of faith in many households. The timeline is God's, and the witness is yours to give. The outcome is not yours to secure." },
];

const voices = [
  { id: "gs", name: "Gary Chapman", role: "Author, The Five Love Languages; Marriage Counselor", quote: "The unequally yoked marriage is among the most complex I work with — not because the spouses don't love each other, but because they are navigating a fundamental difference about what life is for. The believing spouse needs realistic expectations: your spouse may come to faith, or may not. Neither outcome makes your marriage a failure. Your faithfulness is the measure, not the result.", bio: "Chapman's decades of pastoral marriage counseling give him particular insight into the practical dynamics of faith-differential marriages — the holiday tensions, the children's religious formation, the spiritual loneliness of the believing spouse. His non-judgmental approach helps couples navigate real differences without contempt." },
  { id: "lp", name: "Leslie Vernick", role: "Counselor, Author of The Emotionally Destructive Marriage", quote: "I need to say clearly: 'unequally yoked' does not mean 'tolerating an abusive marriage.' I've seen women stay in dangerous situations because they were told to win their husbands without words. The 1 Peter passage assumes basic safety. If there is control, cruelty, or abuse, the analysis changes entirely. Safety comes before witness.", bio: "Vernick's work on destructive marriage patterns provides a necessary counterweight to simple 'stay and witness' counsel. She is clear that the unequally yoked principle assumes a relationship where the non-believing spouse is non-abusive. Her work protects believing spouses from misusing the text to justify enduring harm." },
  { id: "fs", name: "Francis & Lisa Chan", role: "Authors, You and Me Forever", quote: "We've watched marriages where one spouse was a deeply devoted follower of Christ and the other was not. In the best cases, the believing spouse's faith was never an accusation — it was an invitation. The marriage was not a debate. It was a daily demonstration of what it looks like to be loved by someone who is being loved by God.", bio: "The Chans' reflection on marriage and faith offers a vision of what witness-without-words can look like practically — not as a passive waiting strategy, but as the active fruit of a genuinely transformed life. Their emphasis on a faith that is visible rather than argued resonates with Peter's instruction." },
];

const practices = [
  { icon: "🛐", title: "Maintain Your Own Spiritual Life With Intentionality", text: "The unequally yoked marriage cannot sustain your spiritual life by default — and it may gradually erode it without your noticing. This requires deliberate structure: a regular church community you attend even alone, personal prayer and Scripture even when not shared with your spouse, giving even when finances are not spiritually aligned, friendships with other believers who speak into your life. The believing spouse's spiritual vitality is not a given in this marriage — it is a tended garden." },
  { icon: "💬", title: "Agree on a Framework for Children's Faith Formation Before Crisis", text: "The most acute tension point in many unequally yoked marriages is the faith formation of children. Proactive, pre-crisis agreement — even imperfect — is far better than recurring conflict. What will Sunday mornings look like? Will children attend church? What language will be used about God? These conversations are hard, but they are far better held calmly before a crisis than in reactivity. Find a marriage counselor familiar with this dynamic if the conversation is too charged to have alone." },
  { icon: "🤐", title: "Learn When to Speak and When to Let Your Life Speak", text: "Many believing spouses over-argue their faith and under-demonstrate it. Peter's counsel — without words — is not silence about your faith; it is the willingness to let the quality of your life carry more weight than your verbal advocacy. This means noticing when you are arguing faith rather than living it, when you are pressing for conversion rather than loving the person in front of you. The non-arguing spouse often has more influence, not less." },
  { icon: "🏘️", title: "Find Community With Others in the Same Situation", text: "The spiritual loneliness of the unequally yoked marriage is real — sitting alone in the pew, navigating the holidays, raising children with one believing parent. Finding even one other person who understands this specific situation changes something. Unequally Yoked Club (online community), local church small groups that welcome this situation honestly, a spiritual director familiar with the dynamics — these reduce the isolation that compounds the difficulty." },
  { icon: "📋", title: "Know the Difference Between Influence and Control", text: "The believing spouse cannot control the unbelieving spouse's faith. Attempts to do so — withdrawing affection when faith is resisted, using children as leverage, escalating spiritual pressure — damage the marriage and undermine the very witness they intend to create. The path of influence is genuine, non-coercive love that is visibly shaped by faith. This is a long, slow, uncertain work. It requires releasing the outcome and investing in the quality of love — which is what faith, at its core, produces." },
];

const scriptures = [
  { verse: "1 Corinthians 7:13-14", text: "If a woman has a husband who is not a believer and he is willing to live with her, she must not divorce him. For the unbelieving husband is sanctified through his wife, and the unbelieving wife is sanctified through her believing husband." },
  { verse: "1 Peter 3:1-2", text: "If any of them do not believe the word, they may be won over without words by the behavior of their wives, when they see the purity and reverence of your lives." },
  { verse: "1 Corinthians 7:15", text: "God has called us to live in peace." },
  { verse: "Hebrews 10:25", text: "Not giving up meeting together, as some are in the habit of doing, but encouraging one another — and all the more as you see the Day approaching." },
  { verse: "1 Peter 3:15", text: "But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect." },
  { verse: "Romans 15:13", text: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit." },
];


type UYEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function UnequallyYokedPage() {
  const [tab, setTab] = useState("theology");
  const [uyJournal, setUyJournal] = useState<UYEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_unequallyYokedj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_unequallyYokedj_entries", JSON.stringify(uyJournal)); } catch {}
  }, [uyJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setUyJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }
  function deleteEntry(id: string) { setUyJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Marriage &amp; Relationships</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Unequally Yoked</h1>
        <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
          When one spouse believes and the other does not — pastoral guidance for living faithfully in a faith-differential marriage.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? GREEN : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
                <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.15rem" }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
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

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: GREEN, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
              <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <textarea placeholder="What is the hardest part of this marriage dynamic right now?" value={jFeeling} onChange={e => setJFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="What truth about God's sovereignty or my calling helps me here?" value={jTruth} onChange={e => setJTruth(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="One concrete way I can love well and witness without words this week" value={jStep} onChange={e => setJStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {uyJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : uyJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Struggle:</strong> {e.feeling}</p>}
                {e.truth && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Truth:</strong> {e.truth}</p>}
                {e.step && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Action:</strong> {e.step}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "2b0PxJcUCNM", title: "The Four Horsemen — Gottman", channel: "The Gottman Institute", description: "Gottman explains the four relationship patterns that most predict marriage failure — relevant for unequally yoked couples navigating recurring conflict over faith differences, since the same destructive patterns are at work." },
              { videoId: "ZR-J8DQGFOI", title: "When to Keep Trying and When to Stop", channel: "Leslie Vernick", description: "Vernick on the critical distinction between a difficult marriage (where sustained effort can rebuild) and a destructive one (where different counsel applies). Essential for clarifying what kind of marriage you are in." },
              { videoId: "kfcVPh2VDhQ", title: "Forgiveness: Why It Is So Difficult", channel: "Tim Keller", description: "Keller on the theology and cost of forgiveness — relevant to the unequally yoked marriage where resentment over faith differences can accumulate and require repeated, costly acts of forgiveness." },
              { videoId: "57LVVwba6_8", title: "The Joseph Story: Forgiveness and Providence", channel: "Tim Keller", description: "An exposition of the most sustained biblical narrative of forgiveness — God's redemptive purposes working through human harm and difference. Speaks to the long, uncertain faith witness of living faithfully before an unbelieving spouse." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
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
