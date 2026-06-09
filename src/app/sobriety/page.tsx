"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Long-Term Sobriety Is a Daily Return", verse: "Lamentations 3:22-23", text: "The steadfast love of the Lord never ceases; his mercies never come to an end — they are new every morning. Sobriety is not a one-time achievement that is either permanently secured or permanently lost. It is a daily return to the source of life and mercy. This is theologically consistent with how the Christian life works: not a single moment of arrival, but a daily recommitment, a daily receiving of new mercy. Each sober morning is a participation in the resurrection pattern." },
  { title: "Craving Is Not Shameful — Honesty About It Is Healing", verse: "Psalm 40:1-2", text: "I waited patiently for the Lord; he turned to me and heard my cry. He lifted me out of the slimy pit, out of the mud and mire. Long-term sobriety does not mean the absence of craving — for many people, cravings continue for years or decades. The invitation is not to be a person who never wants a drink or a hit; it is to be a person who, when the craving comes, knows where to turn. Honesty about the craving — with God, with a sponsor, with a trusted person — is one of the most powerful protective factors in sustained recovery." },
  { title: "Identity Is the Anchor", verse: "2 Corinthians 5:17", text: "If anyone is in Christ, he is a new creation; the old has gone, the new is here. One of the most dangerous beliefs in long-term sobriety is the belief that you are still fundamentally an addict who is just temporarily behaving well. The gospel offers a different identity: you are a person made new in Christ, for whom substances are not an inevitable destiny. This identity does not eliminate vulnerability — but it provides an anchor when the pull is strong." },
  { title: "The Body Must Be Stewarded — Not Punished", verse: "1 Corinthians 6:19-20", text: "Your body is a temple of the Holy Spirit. Long-term sobriety requires attention to the whole person — including sleep, exercise, nutrition, and physical health. The same patterns of self-neglect that once expressed themselves through substance use can reappear as workaholism, eating disorders, sexual compulsivity, or other forms of harm. Stewardship of the body — caring for it with the same reverence due a temple — is part of sustained recovery, not peripheral to it." },
  { title: "Community Is Not Optional — It Is Infrastructure", verse: "Galatians 6:2", text: "Carry each other's burdens, and in this way you will fulfill the law of Christ. Isolation is the most consistent predictor of relapse. Long-term sobriety requires ongoing community — whether a 12-step group, a church small group aware of your history, a therapist, a sponsor, or some combination. The lie of long-term recovery is: I've got this now, I don't need the help anymore. The person who stops going to meetings because they feel strong is removing the very infrastructure that made them strong." },
];

const voices = [
  { id: "jv", name: "Jerry Sittser", role: "Author, A Grace Disguised", quote: "Recovery from addiction, like recovery from loss, does not mean returning to who you were before. It means becoming someone you could not have been otherwise — someone who has been broken and remade, who knows the depths and has chosen life.", bio: "While Sittser's primary focus is grief, his theology of transformation through suffering speaks directly to the long-term recovery journey. The person in long-term sobriety is not the same person who was in active addiction — they carry wounds and wisdom that reshape everything." },
  { id: "bb", name: "Brennan Manning", role: "Author, The Ragamuffin Gospel", quote: "The gospel declares that no matter how dutiful or prayerful we are, we can't save ourselves. What Jesus did is sufficient. My brokenness is a better bridge for people than my pretend wholeness ever was.", bio: "Manning, himself a recovering alcoholic, wrote with unusual honesty about the intersection of addiction, grace, and faith. The Ragamuffin Gospel and All Is Grace are essential reading for anyone navigating long-term recovery who needs a theology big enough to hold both failure and redemption." },
  { id: "hb", name: "Howard Brown", role: "Author, Shattered: Finding Hope and Healing Through the Losses of Life", quote: "Sobriety is not the end of the story. It is the beginning of the real one — the one where you find out who you actually are when you are not numbing yourself from being that person.", bio: "Brown's work addresses the grief and loss dimensions of recovery — including the grief of years lost to addiction, relationships damaged, and identity confused. Long-term sobriety requires processing these losses, not just abstaining from substances." },
];

const practices = [
  { icon: "📅", title: "Keep Your Recovery Infrastructure Even When You Feel Fine", text: "The time you most need to attend a meeting, see your sponsor, or call a recovery friend is when you feel like you don't need to. The maintenance of community and accountability is not a sign of weakness — it is the actual practice of sobriety. Many relapses happen not in moments of crisis but in seasons of success, when the person believes the infrastructure is no longer necessary." },
  { icon: "🔄", title: "Identify and Address Dry Drunk Patterns", text: "Dry drunk syndrome — abstinence without the internal change that makes sobriety sustainable — is real. Symptoms include resentment, self-pity, isolation, dishonesty, and grandiosity. A person who is sober but not in recovery is still living from the same emotional patterns that drove the addiction. If you recognize dry drunk patterns in yourself, this is not failure — it is an invitation to go deeper in recovery work." },
  { icon: "🙏", title: "Integrate Faith and Recovery — Do Not Separate Them", text: "Church and recovery community sometimes exist in parallel rather than integrated. Many people in long-term sobriety find that integration — bringing their recovery honestly into their church community, and bringing their faith genuinely into their recovery community — produces a much more resilient sobriety. Hiding your recovery history from your church means living a divided life. Your story is not a liability — it is your ministry." },
  { icon: "📊", title: "Have a Relapse Plan — Not Because You Expect to Relapse", text: "Knowing what you will do if you relapse is part of responsible long-term recovery, not pessimism. Know who you will call in the first hour. Know whether you will go inpatient or outpatient. Know how you will tell your family. Having this plan does not make relapse more likely — it makes recovery from relapse faster if it happens. Shame spirals are more dangerous than the relapse itself." },
  { icon: "💬", title: "Use Your Story", text: "One of the most powerful protective factors in long-term sobriety is being of service to people who are earlier in recovery. Telling your story to a newcomer, sponsoring someone, leading a group — these activities reinforce your own recovery while helping someone else. Your story is not something to be ashamed of and kept private. It is the most valuable thing you have to offer the next person who walks into a meeting." },
];

const scriptures = [
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
  { verse: "1 Corinthians 10:13", text: "No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it." },
  { verse: "Philippians 4:13", text: "I can do all this through him who gives me strength." },
  { verse: "James 5:16", text: "Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective." },
  { verse: "Isaiah 43:18-19", text: "Forget the former things; do not dwell on the past. See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland." },
  { verse: "Romans 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is — his good, pleasing and perfect will." },
];

type SobrietyEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function SobrietyPage() {
  const [tab, setTab] = useState("theology");
  const [sobrietyJournal, setSobrietyJournal] = useState<SobrietyEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_sobrietyj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_sobrietyj_entries", JSON.stringify(sobrietyJournal)); } catch {}
  }, [sobrietyJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setSobrietyJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setSobrietyJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Recovery & Faith</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Long-Term Sobriety</h1>
        <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
          Sustaining recovery over years and decades — with honesty, community, and the daily mercy of God.
        </p>
        <div style={{ background: CARD, border: `1px solid ${GREEN}`, borderRadius: 8, padding: "0.75rem 1rem", marginBottom: "2rem", fontSize: "0.9rem" }}>
          <span style={{ color: GREEN, fontWeight: 600 }}>Crisis Resources: </span>
          <span style={{ color: MUTED }}>SAMHSA Helpline: </span><span style={{ color: TEXT }}>1-800-662-4357</span>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; Celebrate Recovery: </span><span style={{ color: TEXT }}>celebraterecovery.com</span>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; Crisis Line: </span><span style={{ color: TEXT }}>988</span>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", marginBottom: "0.75rem" }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.85rem", color: GREEN, fontWeight: 600, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Recovery Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>Where am I in my recovery today — what am I feeling or facing?</label>
                <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What truth anchors me when the pull is strong?</label>
                <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>One recovery action I will take today</label>
                <textarea value={jStep} onChange={e => setJStep(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 60, boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 8, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {sobrietyJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {sobrietyJournal.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{entry.date}</div>
                    {entry.feeling && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Today: </span>{entry.feeling}</p>}
                    {entry.truth && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Anchor: </span>{entry.truth}</p>}
                    {entry.step && <p style={{ fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Action: </span>{entry.step}</p>}
                    <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "0.25rem 0.75rem", cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "j9phNEaPrv8", title: "Is Addiction a Sign That Someone Is Not a Christian?", channel: "Ligonier Ministries", description: "Burk Parsons addresses whether ongoing struggle with addiction disqualifies someone from faith, and what steps toward repentance and freedom look like in long-term recovery." },
              { videoId: "dy9nwe9zeU8", title: "How to Overcome Your Addictions", channel: "Tony Evans", description: "Dr. Tony Evans preaches on overcoming addiction through the power of the Holy Spirit, grounding recovery in the truth of a new identity in Christ — essential for long-term sobriety." },
              { videoId: "iK0NjiBXKN4", title: "How Do I Get Free from Addiction for Good?", channel: "Bible Teaching", description: "A biblical teaching on breaking the cycle of addiction for the long term — addressing the spiritual roots of compulsive behavior and why identity-based recovery outlasts willpower-based approaches." },
              { videoId: "zMbUXpFiFeo", title: "Gospel Freedom from Compulsion", channel: "Desiring God", description: "Francis Chan and John Piper on living faithfully — including discussion of gospel freedom from the compulsions that enslave — speaking to the theological core of sustaining long-term sobriety." },
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
