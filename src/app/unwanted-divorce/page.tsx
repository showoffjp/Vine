"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Being Abandoned in Marriage Is Not the Abandoned Party's Fault", verse: "1 Corinthians 7:15", text: "But if the unbeliever leaves, let it be so. The brother or the sister is not bound in such circumstances; God has called us to live in peace. Paul's instructions directly address the situation of someone who did not choose to end their marriage but had the choice made for them. The phrase 'not bound' is significant: the one who was abandoned is not in a position of ongoing obligation to a marriage the other party unilaterally ended. God's design for marriage does not require one person to maintain a marriage that the other person has destroyed." },
  { title: "God Hates the Violence That Leads to Abandonment, Not Only the Technical Divorce', verse: 'Malachi 2:16", text: "'For the man who hates and divorces his wife,' says the Lord, 'does violence to the one he should protect.' God's concern in this verse is for the abandoned spouse — the one being left. The 'hate and divorce' construction describes the act of a spouse who has turned against their partner. If you were abandoned, this verse is spoken in your defense, not your condemnation." },
  { title: "God Meets the Rejected in Their Rejection", verse: "Hosea 3:1", text: "The Lord said to me, 'Go, show your love to your wife again, though she is loved by another man and is an adulteress. Love her as the Lord loves the Israelites, though they have turned to other gods.' Hosea's marriage — in which he was abandoned and betrayed by a spouse who left for others — became a living parable of God's experience with Israel. God's response to Hosea's abandonment was not distance but identification. God knows what betrayal and abandonment in covenant feel like." },
  { title: "The Divorced Person Is Not Defined by Their Marital Status", verse: "Isaiah 54:5", text: "For your Maker is your husband — the Lord Almighty is his name — the Holy One of Israel is your Redeemer; he is called the God of all the earth. This verse is addressed specifically to those who have been left — 'the wife who married young' (v.6) and was abandoned. God names himself in relation to that person's specific wound: your Maker is your husband. The one who was left is not defined by being left; they are defined by being held by the one who cannot be taken away." },
  { title: "Grief Over a Marriage Is Holy, Not Shameful", verse: "Lamentations 1:2", text: "Bitterly she weeps at night, tears are on her cheeks. Among all her lovers there is no one to comfort her. All her friends have betrayed her; they have become her enemies. Lamentations gives language to the specific grief of abandonment — the one who was close and is now gone, the comfort that is no longer available, the betrayal that compounds the loss. This grief is legitimate. It is not a sign of insufficient faith to mourn a marriage that was ended against your will." },
];

const voices = [
  { id: "v1", name: "Leslie Vernick", role: "Author of The Emotionally Destructive Marriage, counselor", quote: "Many people who were abandoned in marriage are still grieving not only the loss but the shame — feeling that somehow they should have been enough, done enough, been different enough. That shame is not from God.", bio: "Leslie Vernick's work on marriage, abuse, and divorce has specifically addressed the situation of those abandoned by a spouse — including the specific shame that attaches when a Christian marriage ends against one person's will. She is a consistent voice insisting that the abandoned party's dignity and grief deserve full pastoral attention." },
  { id: "v2", name: "Jim Conway", role: "Author of Adult Children of Legal or Emotional Divorce, pastor", quote: "Unwanted divorce is a form of bereavement. The person did not choose to lose their marriage. They are grieving a death that someone else decided to cause. The church must treat it as such.", bio: "Jim Conway has written extensively about divorce recovery from within an evangelical framework. His recognition of unwanted divorce as bereavement — not moral failure — has helped many church communities recalibrate their pastoral response from judgment to accompaniment." },
  { id: "v3", name: "Becky Roper", role: "DivorceCare program director, divorce recovery specialist", quote: "The person who did not want the divorce is often the one who carries the most shame in the church. That is backwards. The shame belongs to the covenant-breaker, not the one who tried to hold the covenant together.", bio: "Becky Roper's work with DivorceCare has given her extensive contact with the specific pastoral needs of those abandoned in marriage. Her insight that the church often inadvertently shames the non-initiating spouse is an important corrective to common pastoral mistakes." },
  { id: "v4", name: "Nicholas Wolterstorff", role: "Philosopher, author of Lament for a Son", quote: "Grief is not a problem to be solved but a form of love that has nowhere to go. The person who grieves their marriage is not stuck — they are honoring something that mattered.", bio: "Nicholas Wolterstorff's philosophical and theological work on grief has helped many people understand that the long duration of grief after significant loss is not pathology — it is love expressing itself through absence. His framework is directly applicable to those grieving the end of a marriage they did not choose to end." },
];

const practices = [
  { icon: "🏥", title: "Treat This as Bereavement, Including Clinically", text: "Unwanted divorce is a bereavement experience. The loss of a marriage, a future, a household, and the person you believed you were building a life with is a major loss. Seeking grief counseling — not just legal consultation and practical organization — is appropriate and important. GriefShare (griefshare.org) has specific divorce recovery resources." },
  { icon: "⚖️", title: "Protect Yourself Legally Regardless of What You Wish Were True", text: "The desire for reconciliation is understandable. But legal processes move independently of reconciliation desires. Consult an attorney immediately about your rights, regardless of whether you hope the divorce will be reversed. Failing to engage the legal process because of reconciliation hopes often results in worse outcomes in the event that reconciliation does not occur." },
  { icon: "📖", title: "Read Hosea as Your Story", text: "Hosea's marriage was a story of abandonment and betrayal by a covenant partner. God commanded Hosea to love his wife despite her abandonment of the marriage. The book is not a prescription for what every abandoned person must do — it is a window into God's experience of being in covenant with an unfaithful partner, and his unwillingness to let the story end with abandonment. It gives theological dignity to your experience." },
  { icon: "🤝", title: "Connect With DivorceCare", text: "DivorceCare is a church-based divorce recovery program that specifically addresses the grief and practical needs of those going through or recovering from divorce. It distinguishes between the initiating and non-initiating party and offers pastoral support to both. Find a group at divorcecare.org." },
  { icon: "⏳", title: "Give Yourself Two to Three Years Before Major Decisions", text: "Research on divorce adjustment consistently shows that the first two years are the most psychologically unstable. Major decisions about housing, relationships, finances, and geography made in that window are often regretted. The instruction to 'wait and see' is not passivity — it is wisdom about the unreliability of judgment under acute grief." },
  { icon: "🙏", title: "Pray the Psalms of Betrayal Without Editing Them", text: "Psalms 55 and 109 are prayers from people who were abandoned and betrayed by covenant partners. They do not clean up the anger. They name perpetrators. They ask God for justice. Praying these psalms as they are — with the full weight of your anger and grief — is not spiritually inferior to more positive prayers. It is bringing the full truth of your experience to God." },
];

const scriptures = [
  { verse: "Isaiah 54:5", text: "For your Maker is your husband — the Lord Almighty is his name — the Holy One of Israel is your Redeemer; he is called the God of all the earth." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "1 Corinthians 7:15", text: "But if the unbeliever leaves, let it be so. The brother or the sister is not bound in such circumstances; God has called us to live in peace." },
  { verse: "Hosea 3:1", text: "The Lord said to me, 'Go, show your love to your wife again, though she is loved by another man.'" },
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
];

type DivorceEntry = { id: string; date: string; grief: string; anger: string; hope: string };

export default function UnwantedDivorcePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DivorceEntry[]>([]);
  const [grief, setGrief] = useState(""), [anger, setAnger] = useState(""), [hope, setHope] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_unwanteddivorcej_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const e: DivorceEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), grief: grief.trim(), anger: anger.trim(), hope: hope.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_unwanteddivorcej_entries", JSON.stringify(updated));
    setGrief(""); setAnger(""); setHope("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_unwanteddivorcej_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];
  const inp: React.CSSProperties = { width: "100%", background: "#07070F", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" };

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: PURPLE, color: "#fff", borderRadius: 20, padding: "4px 16px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: 1 }}>PASTORAL CARE</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Unwanted Divorce</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For those whose marriage ended against their will — who held their covenant while their spouse chose to leave — and who carry both grief and the church's misplaced shame.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Support:</strong> 988 Lifeline (call/text 988) &nbsp;|&nbsp; DivorceCare: divorcecare.org &nbsp;|&nbsp; GriefShare: griefshare.org</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: 1 }}>{t.verse}</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ fontWeight: 800, color: TEXT, fontSize: "1rem" }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.82rem", fontWeight: 600, margin: "0.25rem 0 0.75rem" }}>{v.role}</div>
                <blockquote style={{ color: TEXT, fontStyle: "italic", borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ color: TEXT, fontWeight: 700, margin: "0 0 0.4rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What loss are you most aware of today?</label>
              <textarea value={grief} onChange={e => setGrief(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="The future you imagined, the person you lost, the family you had..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What are you angry about — and have you named it to God?</label>
              <textarea value={anger} onChange={e => setAnger(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="What feels most unjust right now..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>Where do you see the smallest thread of hope?</label>
              <textarea value={hope} onChange={e => setHope(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Even something very small..." />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: PURPLE }}>Grief:</strong> {e.grief}</p>
                {e.anger && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Anger:</strong> {e.anger}</p>}
                {e.hope && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Hope:</strong> {e.hope}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "ZR-J8DQGFOI", title: "When to Keep Trying in Marriage", channel: "Leslie Vernick", description: "Leslie Vernick on discerning destructive marriages and the specific situation of someone who wanted reconciliation but could not prevent the divorce." },
              { videoId: "kfcVPh2VDhQ", title: "Forgiveness: Why It Is So Hard", channel: "Timothy Keller", description: "Keller on the theology and psychology of forgiving a spouse who has abandoned the marriage — one of the most difficult forms of forgiveness." },
              { videoId: "57LVVwba6_8", title: "The Joseph Story: Forgiveness", channel: "Timothy Keller", description: "Keller on the long arc of forgiveness in Joseph's story — how God redeems even the deepest betrayals and how forgiveness takes the shape of the betrayal it addresses." },
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop on lament as the practice for those in the acute pain of loss — the practice that holds grief in God's presence without rushing to resolution." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
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
