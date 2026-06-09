"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Gambling Is Not Primarily a Money Problem — It Is a Worship Problem", verse: "Matthew 6:24", text: "No one can serve two masters. Either you will hate the one and love the other, or you will be devoted to the one and despise the other. You cannot serve both God and money. Problem gambling is rarely about money at its root. The compulsive gambler chases not money but the sensation — the adrenaline of risk, the hope of the win, the temporary relief from other pain, the feeling of control in an uncontrollable life. Like all addictions, its theological anatomy is misplaced worship: the brain has been trained to seek what only God can provide through a source that cannot deliver it. The money problem is the symptom; the worship displacement is the disease." },
  { title: "Shame Keeps the Cycle Running — Confession Breaks It", verse: "James 5:16", text: "Therefore confess your sins to each other and pray for each other so that you may be healed. The secret nature of gambling addiction is part of its mechanism: the shame drives concealment, concealment enables continuation, continuation deepens shame. James's counsel is not primarily therapeutic — it is about the community function of sin's exposure. When what is hidden is brought into the light of safe relationship, its power to compel diminishes. The person with a gambling problem who has confessed it to one trusted person has done something more significant than they likely realize." },
  { title: "Financial Damage Is Real and Requires Honest Reckoning", verse: "Luke 14:28", text: "Suppose one of you wants to build a tower. Won't you first sit down and estimate the cost to see if you have enough money to complete it? Jesus' observation about honest accounting applies with some irony to the gambler: the compulsion precisely resists the calm accounting that Jesus describes. Part of recovery is the willingness to face the full financial damage honestly — the debts, the hidden accounts, the lies to family members about money. This reckoning is painful, but it is also the beginning of repair. It cannot be skipped." },
  { title: "Recovery Requires Community — Not Just Willpower", verse: "Ecclesiastes 4:9-10", text: "Two are better than one, because they have a good return for their labor: if either of them falls down, one can help the other up. But pity anyone who falls and has no one to help them up. Gambling addiction has one of the highest rates of relapse when treated in isolation. The structure of accountability — a sponsor, a recovery community, someone who knows and asks — is not a supplement to willpower. It is its replacement. The person trying to stop gambling alone, through self-discipline and prayer without community, is following a strategy that rarely works and that the wisdom literature itself questions." },
  { title: "Restoration Is Possible — and Requires Time", verse: "Joel 2:25", text: "I will repay you for the years the locusts have eaten. The financial, relational, and vocational damage that gambling addiction produces can feel permanent. The Joel promise is not a guarantee of specific financial recovery — it is a theological declaration that the God of restoration enters situations of comprehensive loss. Many who have recovered from serious gambling addiction testify that the years of rebuilding — slowly, with accountability, with amends — produced a life and character that the years before had not. The locusts' years are real. So is the promise." },
];

const voices = [
  { id: "nc", name: "Gamblers Anonymous", role: "Recovery Community Founded 1957", quote: "The only requirement for membership is a desire to stop gambling. We have found that we could not manage our own lives. That our lives had become unmanageable. That probably no human power could have relieved our compulsion to gamble. That God could and would if He were sought.", bio: "Gamblers Anonymous (gamblersanonymous.org) provides 12-step community specifically for gambling addiction. The program addresses the specific psychological and behavioral patterns of the gambling compulsion, including the specific type of denial and magical thinking that characterizes it. For many, it has been the primary vehicle of lasting recovery." },
  { id: "hm", name: "Howard Shaffer", role: "Harvard Medical School, Division on Addiction", quote: "Problem gambling is a behavioral addiction with the same neurological profile as substance addiction — the same dopamine dysregulation, the same tolerance and withdrawal, the same craving circuitry. It is not a character defect or a spiritual failure, though it has spiritual dimensions. It requires clinical treatment, not moral exhortation.", bio: "Shaffer's research at Harvard has been foundational in establishing gambling disorder's clinical profile and treatment needs. His work helps the church understand that moral frameworks alone are insufficient for a disorder with documented neurological mechanisms, while not dismissing the spiritual and relational dimensions." },
  { id: "mb", name: "Mark Laaser", role: "Author, Healing the Wounds of Sexual Addiction; Addiction Counselor", quote: "Behavioral addictions all share the same architecture: they begin as solutions to pain, become compulsive when they work, and produce the very pain they were designed to solve. The Christian who is struggling with gambling addiction is not a weak person — they are a person whose pain-management strategy has turned on them. Treatment addresses the pain beneath the behavior, not just the behavior.", bio: "Laaser's work on behavioral addictions from a Christian therapeutic perspective offers the framework for understanding gambling addiction as a self-medication strategy. His emphasis on addressing the pain that the behavior medicates, rather than only the behavior itself, is clinically sound and theologically informed." },
];

const practices = [
  { icon: "🤝", title: "Join Gamblers Anonymous", text: "Gamblers Anonymous (gamblersanonymous.org) has meetings in most cities and online. The program is specifically designed for gambling addiction, with a 12-step framework adapted to the specific patterns of the gambling compulsion — the magical thinking, the chase behavior, the financial recklessness, the secrecy. A sponsor who has been through recovery from gambling addiction understands the specific temptations and patterns in a way that a general addiction program may not. Many people who have tried to stop gambling repeatedly without community have found GA to be the turning point." },
  { icon: "💳", title: "Implement Financial Controls — Not as Punishment, But as Protection", text: "Recovery from gambling addiction requires structural financial protections: removing access to credit cards and large amounts of cash, having a trusted person oversee financial accounts, blocking online gambling sites, self-exclusion from casinos (most states have programs). These are not humiliating punishments — they are the removal of access that allows the compulsion space to operate. Just as the recovering alcoholic does not keep liquor in the house, the recovering gambler does not maintain unmonitored access to the financial tools the addiction requires." },
  { icon: "💬", title: "Disclose the Full Damage to Someone Safe — Then to Those Harmed", text: "Recovery requires honest disclosure: first to a therapist, sponsor, or pastor — someone who will receive the disclosure without retribution; then, as stability increases, amends to those who were financially or relationally harmed. The Gamblers Anonymous program specifically addresses amends. Many Christian counselors are equipped to guide this process in a theologically informed way. The full disclosure is not a one-time event — it is the beginning of a trust-rebuilding process that takes years." },
  { icon: "🧠", title: "Seek a Therapist Trained in Behavioral Addictions", text: "Cognitive Behavioral Therapy adapted for gambling disorder is the most evidence-supported clinical treatment. A CBT-trained therapist helps identify: the triggers that precede gambling urges, the cognitive distortions specific to gambling (gambler's fallacy, illusion of control, near-miss beliefs), and the alternative behaviors that can interrupt the cycle. The National Council on Problem Gambling (ncpgambling.org) maintains a helpline (1-800-522-4700) and a directory of treatment providers." },
  { icon: "✝️", title: "Address the Pain the Gambling Was Medicating", text: "Almost all behavioral addictions began as responses to something — anxiety, trauma, depression, loneliness, boredom, low self-worth. The gambling that started as excitement-seeking or pain-relief reveals a need that needs a genuine source of supply. This is the spiritual work: discovering what the gambling was trying to give, and finding it in God, community, honest work, and relationships. Christian counselors and spiritual directors are equipped to help with this dimension that purely clinical approaches may not address." },
];

const scriptures = [
  { verse: "Matthew 6:24", text: "No one can serve two masters. Either you will hate the one and love the other, or you will be devoted to the one and despise the other. You cannot serve both God and money." },
  { verse: "James 5:16", text: "Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective." },
  { verse: "Ecclesiastes 4:9-10", text: "Two are better than one, because they have a good return for their labor: if either of them falls down, one can help the other up. But pity anyone who falls and has no one to help them up." },
  { verse: "Joel 2:25", text: "I will repay you for the years the locusts have eaten — my great army that I sent among you." },
  { verse: "Proverbs 13:11", text: "Dishonest money dwindles away, but whoever gathers money little by little makes it grow." },
  { verse: "1 Timothy 6:6", text: "But godliness with contentment is great gain." },
];


type GAEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function GamblingAddictionPage() {
  const [tab, setTab] = useState("theology");
  const [gaJournal, setGaJournal] = useState<GAEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_gamblingaddictionj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_gamblingaddictionj_entries", JSON.stringify(gaJournal)); } catch {}
  }, [gaJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setGaJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }
  function deleteEntry(id: string) { setGaJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Addiction &amp; Recovery</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Gambling Addiction</h1>
        <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
          Compulsive gambling as a behavioral addiction — theology, recovery, financial rebuilding, and the community that makes it possible.
        </p>
        <div style={{ background: "#1a2a1a", border: "1px solid #2a5a2a", borderRadius: 8, padding: "1rem", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
          <strong>Crisis Resources:</strong> NCPG Helpline 1-800-522-4700 · Gamblers Anonymous gamblersanonymous.org · 988 Lifeline
        </div>

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
              <textarea placeholder="What is driving the urge or what am I feeling right now?" value={jFeeling} onChange={e => setJFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="What truth or promise grounds me in this moment?" value={jTruth} onChange={e => setJTruth(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="One recovery step or person I will contact today" value={jStep} onChange={e => setJStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {gaJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : gaJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Feeling:</strong> {e.feeling}</p>}
                {e.truth && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Truth:</strong> {e.truth}</p>}
                {e.step && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Step:</strong> {e.step}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "j9phNEaPrv8", title: "Is Addiction a Sign That Someone Is Not a Christian?", channel: "Ligonier Ministries", description: "Burk Parsons addresses whether ongoing addiction disqualifies someone from faith, and what steps toward repentance and freedom look like in Christ — including behavioral addictions like gambling." },
              { videoId: "dy9nwe9zeU8", title: "How to Overcome Your Addictions", channel: "Tony Evans", description: "Dr. Tony Evans preaches on overcoming addiction through the power of the Holy Spirit, grounding recovery in the truth that Christ sets captives free — applicable to gambling addiction's specific compulsion." },
              { videoId: "iK0NjiBXKN4", title: "How Do I Get Free from Addiction for Good?", channel: "Bible Teaching", description: "A biblical teaching on breaking the cycle of addiction, addressing the spiritual roots of compulsive behavior and the path to lasting freedom — applicable to the specific patterns of gambling disorder." },
              { videoId: "zMbUXpFiFeo", title: "Gospel Freedom from Compulsion", channel: "Desiring God", description: "Francis Chan and John Piper on living faithfully, including a discussion of gospel freedom from the compulsions that enslave — speaking to the theological core of addiction recovery." },
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
