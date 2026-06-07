"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Church Is Called to Be a Place of Welcome and Truth", verse: "Romans 15:7", text: "Accept one another as Christ accepted you. This verse does not resolve doctrinal disagreements about same-sex marriage, but it does set the tone: before debate comes dignity. People who have left same-sex marriages to pursue celibacy or who remain in theological uncertainty need churches that hold them — not churches that weaponize their pain." },
  { title: "The Bible Holds Together Conviction and Compassion", verse: "Jude 1:22-23", text: "Be merciful to those who doubt; save others by snatching them from the fire; to others show mercy, mixed with fear. Jude envisions a complex pastoral landscape where different people need different responses. Faithful Christian engagement with same-sex marriage aftermath cannot be reduced to a single posture — it requires wisdom about each person's situation." },
  { title: "Divorce Is Always Painful, Even Theologically Motivated Divorce", verse: "Malachi 2:16", text: "'I hate divorce,' says the Lord. This word is not a condemnation of the person who divorces but an acknowledgment of the devastation divorce brings — including divorces pursued out of sincere religious conviction. The pain is real. God sees it. 'He covers his garment with violence' — even righteous separations leave wounds." },
  { title: "Shame Has No Power Over Those Who Are in Christ", verse: "Romans 8:1", text: "There is therefore now no condemnation for those who are in Christ Jesus. Whether someone left a same-sex marriage because of faith conviction, was left by a spouse who came out, or is navigating a complex story neither category captures, this promise holds: condemnation is not God's word over those who trust Christ. Shame and spiritual identity are incompatible." },
  { title: "God Redeems Complicated Stories", verse: "Genesis 50:20", text: "What you intended for harm, God intended for good. Joseph's story is morally complex — involving deception, slavery, broken family bonds — yet God weaves redemption through it. People whose lives hold same-sex marriage history are not beyond the reach of a God who specializes in complex stories. Redemption is not erasure; it is transformation." },
];

const voices = [
  { id: "v1", name: "Wesley Hill", role: "Anglican priest, celibate gay Christian, author of Washed and Waiting", quote: "Gay celibate Christians don't need our sexuality fixed. We need the church to be the kind of community where it becomes possible to live faithfully.", bio: "Wesley Hill has written extensively about gay Christian identity, celibacy, and the church's pastoral failures. He did not leave a same-sex marriage, but his theological framework helps churches understand the spectrum of those who have chosen faithfulness as they understand it." },
  { id: "v2", name: "Eve Tushnet", role: "Catholic writer, lesbian Christian, author of Gay and Catholic", quote: "A church that treats celibacy as merely a burden or a deprivation will fail gay Catholics. It must be held up as a genuine Christian vocation.", bio: "Eve Tushnet converted to Catholicism as a lesbian woman and has written and spoken about the specific pastoral and spiritual needs of gay and lesbian Christians who remain in the Church. Her work is essential for those navigating the aftermath of same-sex relationships and marriage within a faith framework." },
  { id: "v3", name: "Rosaria Butterfield", role: "Former professor, now Presbyterian pastor's wife, author of The Secret Thoughts of an Unlikely Convert", quote: "Repentance is not the same as shame. And leaving a 10-year same-sex relationship was the hardest, most grief-filled thing I have ever done.", bio: "Rosaria Butterfield's story — a lesbian professor who became a Reformed Christian — is one of the most cited testimonies in this space. Her books document the profound grief and loss involved in leaving a same-sex relationship and marriage. She insists that the church must be prepared for the complexity and duration of that grief." },
  { id: "v4", name: "Preston Sprinkle", role: "Author of People to Be Loved, president of Center for Faith, Sexuality, and Gender", quote: "The church often has a theology of same-sex attraction but not a pastoral theology for same-sex relationships that actually ended. Those are different tasks.", bio: "Preston Sprinkle leads the Center for Faith, Sexuality, and Gender and has written extensively about pastoral engagement with LGBTQ+ people. He emphasizes that churches need specific practices — not just doctrines — for accompanying people through the aftermath of same-sex marriage dissolution." },
];

const practices = [
  { icon: "🏥", title: "Grieve Fully Before Explaining Theologically", text: "The immediate aftermath of leaving a same-sex marriage — or being left — is a season of grief, not a teachable moment. Before any theological conversation, the person needs to be held, mourned with, and allowed to process loss. Churches that rush to doctrinal clarity in the middle of acute grief do harm, not good." },
  { icon: "🤝", title: "Find a Counselor Who Holds Both Pastoral and Clinical Competence", text: "Look for a therapist who is both affirming of your faith convictions (in whatever direction those are) and clinically competent in grief and attachment. Many who have left same-sex marriages report that secular therapists couldn't honor their faith commitments, while some Christian counselors had no clinical training in grief and relationship loss. Both skill sets are needed." },
  { icon: "🏘️", title: "Seek Community Rather Than Anonymity", text: "The instinct after the dissolution of a same-sex marriage may be to hide. Church community can feel unsafe. But isolation deepens shame. Finding even two or three people who can hold your story without judgment — whether in a small group, a spiritual director, or a counselor — is essential for long-term flourishing." },
  { icon: "📖", title: "Read the Psalms as Permission to Lament", text: "Psalms of lament (Ps 13, 22, 88) give theological permission to feel loss without immediately moving to resolution. If your pain comes from leaving a marriage you loved out of conviction, or from being left by someone you loved, or from years of longing — lament is the biblical language for that. You do not have to perform certainty or peace." },
  { icon: "⏳", title: "Allow Years, Not Months, for Reconstruction", text: "Identity reconstruction after a significant relationship ends — especially one tied to sexual identity — takes years. Studies on ex-spouses of gay or lesbian partners show years-long adjustment periods. Give yourself that time. Plan for seasons of doubt, re-grief, and reconstruction rather than expecting linear recovery." },
  { icon: "🔍", title: "Be Careful With Narratives That Erase Complexity", text: "The temptation — from multiple directions — is to reduce your story to a simple arc: either 'I escaped a sinful life' or 'I was harmed by religion.' Real stories are more complex. The marriage may have contained genuine love. The theological conviction may be genuine. Both things can be true simultaneously, and a healthy integration holds that complexity." },
];

const scriptures = [
  { verse: "Romans 15:7", text: "Accept one another, then, just as Christ accepted you, in order to bring praise to God." },
  { verse: "Psalm 31:9-10", text: "Be merciful to me, Lord, for I am in distress; my eyes grow weak with sorrow, my soul and body with grief. My life is consumed by anguish and my years by groaning." },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "Lamentations 3:31-32", text: "For no one is cast off by the Lord forever. Though he brings grief, he will show compassion, so great is his unfailing love." },
  { verse: "Isaiah 42:3", text: "A bruised reed he will not break, and a smoldering wick he will not snuff out. In faithfulness he will bring forth justice." },
];

type SSMEntry = { id: string; date: string; loss: string; anchor: string; question: string };

export default function SameSexMarriageAftermathPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SSMEntry[]>([]);
  const [loss, setLoss] = useState(""), [anchor, setAnchor] = useState(""), [question, setQuestion] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_ssmaftermath_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!loss.trim()) return;
    const e: SSMEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), loss: loss.trim(), anchor: anchor.trim(), question: question.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_ssmaftermath_entries", JSON.stringify(updated));
    setLoss(""); setAnchor(""); setQuestion("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_ssmaftermath_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];
  const inp: React.CSSProperties = { width: "100%", background: "#07070F", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" };

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: GREEN, color: "#fff", borderRadius: 20, padding: "4px 16px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: 1 }}>PASTORAL CARE</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Same-Sex Marriage Aftermath</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 auto 1.5rem" }}>Whether you left a same-sex marriage out of faith conviction, were left by a spouse who came out, or are navigating a story that defies easy categories — the Church is called to hold your grief without weaponizing it.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Crisis Support:</strong> 988 Suicide & Crisis Lifeline (call/text 988) &nbsp;|&nbsp; Crisis Text Line: text HOME to 741741 &nbsp;|&nbsp; Center for Faith, Sexuality & Gender: centerforfaith.com</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: 1 }}>{t.verse}</div>
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
                <div style={{ color: GREEN, fontSize: "0.82rem", fontWeight: 600, margin: "0.25rem 0 0.75rem" }}>{v.role}</div>
                <blockquote style={{ color: TEXT, fontStyle: "italic", borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", lineHeight: 1.7 }}>{v.quote}</blockquote>
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
                <div style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What loss are you most aware of today?</label>
              <textarea value={loss} onChange={e => setLoss(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="Name what you are grieving..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What Scripture or truth is anchoring you right now?</label>
              <textarea value={anchor} onChange={e => setAnchor(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Even a fragment..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What question are you bringing to God?</label>
              <textarea value={question} onChange={e => setQuestion(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Unanswered questions are allowed..." />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: GREEN }}>Loss:</strong> {e.loss}</p>
                {e.anchor && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Anchor:</strong> {e.anchor}</p>}
                {e.question && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Question:</strong> {e.question}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "PKyLYSfmTwI", title: "Healing After Spiritual Abuse", channel: "Allender Center", description: "Dan Allender addresses the ways religious communities cause harm and how healing begins with honest acknowledgment of the wound." },
              { videoId: "eBl7gT7gQ6g", title: "Emotionally Healthy Spirituality", channel: "Peter Scazzero", description: "Scazzero on integrating emotional health and the interior life — essential for anyone rebuilding spiritual identity after significant loss." },
              { videoId: "kfcVPh2VDhQ", title: "Forgiveness: Why It Is So Hard", channel: "Timothy Keller", description: "Keller unpacks the theology and psychology of forgiveness — relevant whether forgiving a church community, a former spouse, or yourself." },
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame", channel: "Curt Thompson", description: "Curt Thompson on shame, its neurological and spiritual roots, and how Christian community can be the arena where shame is finally undone." },
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
  );
}
