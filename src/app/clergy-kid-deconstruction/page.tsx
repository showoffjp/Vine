"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Faith Is Not Inherited; It Must Become Your Own", verse: "John 6:44", text: "No one can come to me unless the Father who sent me draws them. Jesus said this to people who had grown up in synagogues, in families of faith, surrounded by religious observance. The faith of parents — even pastors — cannot transfer to their children through proximity. This is not a failure of the family; it is the nature of genuine faith. The PKs who have walked away are not the first, and the Father who draws people is not finished with them." },
  { title: "Anger at the Church Is Not the Same as Anger at God", verse: "Psalm 73:13-17", text: "Surely in vain I have kept my heart pure and have washed my hands in innocence. All day long I have been afflicted, and every morning brings new punishments... When I tried to understand all this, it troubled me deeply till I entered the sanctuary of God. Asaph's near-collapse was not about atheism — it was about the apparent gap between what he was taught and what he observed. PKs who have deconstructed have often experienced the same gap in an unusually acute form. The Psalm suggests the sanctuary — honest encounter with God — is where the crisis resolves." },
  { title: "God Is Larger Than the Version You Were Given", verse: "Isaiah 55:8-9", text: "My thoughts are not your thoughts, neither are your ways my ways, declares the Lord. As the heavens are higher than the earth, so are my ways higher than your ways and my thoughts than your thoughts. The God many PKs leave is not the God who is. The performance-based, reputation-managing, public-facing God of clergy culture is not the God of the Bible. Deconstruction — at its best — is the dismantling of a human-constructed deity so that the real God can be encountered." },
  { title: "Doubt Is Not the Opposite of Faith", verse: "Matthew 14:31", text: "Immediately Jesus reached out his hand and caught him. 'You of little faith,' he said, 'why did you doubt?' Jesus catches Peter mid-sinking and asks about the doubt only after ensuring his safety. The question 'why did you doubt?' is not condemnation — it is an invitation to understand the mechanics of the fear. Peter's doubt and Jesus's catching are simultaneous. Jesus reaches for doubters; he does not wait for certainty before extending his hand." },
  { title: "Home Is Still Available for Those Who Return", verse: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him. The prodigal's father does not only represent God's response to sinners — he represents God's response to anyone who has been away and is returning. PKs who have left and are considering return are greeted not with 'where have you been?' but with a father who was watching the horizon for them." },
];

const voices = [
  { id: "v1", name: "Mike McHargue", role: "Author of Finding God in the Waves, raised Baptist, lost and recovered faith", quote: "I did not leave faith because I was rebellious. I left because I could not figure out how to keep believing things I had seen reason to doubt. Coming back required a bigger God than the one I was raised with.", bio: "Mike McHargue grew up in a deeply religious family, lost his faith entirely, and then found his way back through a surprising encounter at a church service. His memoir Finding God in the Waves documents the specific journey of someone who left not out of rebellion but out of intellectual honesty — and the very different faith he found on the other side." },
  { id: "v2", name: "Barnabas Piper", role: "Author of The Pastor's Kid, son of John Piper", quote: "There is a specific kind of loneliness that comes from growing up in the fishbowl. Everyone watches you. Your failures are public. Your questions are suspicious. That pressure produced more deconversions than theological error ever did.", bio: "Barnabas Piper's The Pastor's Kid is the most widely read account of the unique pressures children of clergy face — the public scrutiny, the identity construction that happens around a parent's ministry, and the specific way that church culture's expectations can make genuine faith formation harder. He does not advocate for deconstruction but gives vocabulary for the dynamics that produce it." },
  { id: "v3", name: "Rachel Held Evans", role: "Author of Searching for Sunday, Faith Unraveled", quote: "I left because I thought it was the only honest thing to do. I came back because the table turned out to be bigger than I thought — and I was hungry.", bio: "Rachel Held Evans (1981–2019) wrote from her experience as a doubter and partial deconstructionist who eventually found her way to a different, more expansive form of faith. Her memoir Searching for Sunday documents the journey out and back, and her work specifically addresses people who feel they have outgrown the faith they were handed." },
  { id: "v4", name: "Kara Powell", role: "Author of Sticky Faith, director of Fuller Youth Institute", quote: "The research is clear: young people who are allowed to voice their doubts within faith communities stay at much higher rates than those who feel their questions are threats. Doubt expressed is faith strengthened. Doubt suppressed produces the crisis we feared.", bio: "Kara Powell's Sticky Faith research at the Fuller Youth Institute examined why young people from religious families leave the faith after leaving home. Her findings about the role of safe doubt expression, intergenerational mentorship, and identity formation have reshaped youth ministry practice and offer a diagnostic framework for understanding the PK deconstruction phenomenon." },
];

const practices = [
  { icon: "🔍", title: "Distinguish the Faith From the Culture That Carried It", text: "Many PKs leave Christianity when they should be leaving a specific cultural expression of Christianity. The abuses, the performative religiosity, the social control, the intellectual dishonesty — these are features of a particular religious culture, not of the core of the faith. This distinction is not easy to make from the inside, but it is a critical diagnostic question: What exactly are you leaving?" },
  { icon: "📖", title: "Read Primary Sources Instead of Secondhand Accounts", text: "Much deconstruction happens in reaction to critiques of Christianity rather than engagement with Christianity itself. Before leaving, read the actual texts: the Gospels, the Psalms, Romans, Job. Read the best thinkers: Augustine, Lewis, Weil, Tolkien, Chesterton. Ask whether the God being critiqued is actually the God of these texts. You may find you have a quarrel with a particular version, not the original." },
  { icon: "🤝", title: "Find a Spiritual Director Rather Than a Defender", text: "What deconstructing PKs often need is not someone who argues them back into faith, but someone who accompanies them without an agenda — a spiritual director who can hold the questions alongside them. The Spiritual Directors International directory (sdicompanions.org) has referrals to trained directors across traditions and denominations." },
  { icon: "💬", title: "Name the Specific Wounds Before Addressing the Theology", text: "For many PKs, deconstruction is as much a wound as an intellectual position. The wound must be named and tended before the theology can be examined honestly. Working with a therapist who can hold the relational and spiritual dimensions of the pain — and who will not rush to closure — is often necessary before theological reconstruction becomes possible." },
  { icon: "⏳", title: "Give Yourself Permission to Be in Process Without a Deadline", text: "There is no schedule for faith reconstruction. The pressure to resolve quickly — either to return definitively or to leave definitively — is almost always external. Taking years to move slowly through the questions, to hold uncertainty without a declared position, and to return only when and if something genuine draws you back is a more honest process than forced resolution." },
  { icon: "🏘️", title: "If You Return, Find a Different Kind of Community", text: "PKs who return to faith almost never return to the same kind of church they grew up in. The faith that survives deconstruction tends to be more robust, more honest, and more comfortable with complexity than what was inherited. Finding a community with high tolerance for questions, genuine liturgical depth, or a tradition of honest engagement with doubt may be necessary for a sustainable re-entry." },
];

const scriptures = [
  { verse: "Psalm 73:16-17", text: "When I tried to understand all this, it troubled me deeply till I entered the sanctuary of God; then I understood their final destiny." },
  { verse: "John 20:27", text: "Then he said to Thomas, 'Put your finger here; see my hands. Reach out your hand and put it into my side. Stop doubting and believe.'" },
  { verse: "Isaiah 55:8-9", text: "For my thoughts are not your thoughts, neither are your ways my ways, declares the Lord. As the heavens are higher than the earth, so are my ways higher than your ways." },
  { verse: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him." },
  { verse: "Jeremiah 29:13", text: "You will seek me and find me when you seek me with all your heart." },
];

type PKEntry = { id: string; date: string; wound: string; question: string; draw: string };

export default function ClergyKidDeconstructionPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PKEntry[]>([]);
  const [wound, setWound] = useState(""), [question, setQuestion] = useState(""), [draw, setDraw] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_clergykidj_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!wound.trim()) return;
    const e: PKEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), wound: wound.trim(), question: question.trim(), draw: draw.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_clergykidj_entries", JSON.stringify(updated));
    setWound(""); setQuestion(""); setDraw("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_clergykidj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];
  const inp: React.CSSProperties = { width: "100%", background: "#07070F", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" };

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: GREEN, color: "#fff", borderRadius: 20, padding: "4px 16px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: 1 }}>PASTORAL CARE</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Clergy Kids and Deconstruction</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For pastors' kids who have walked away from the faith — and for those who love them. The God you are leaving may be smaller than the God who is.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Support:</strong> 988 Lifeline (call/text 988) &nbsp;|&nbsp; Spiritual Directors International: sdicompanions.org &nbsp;|&nbsp; The Allender Center: theallendercenter.org</p>
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
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What specific wound from growing up in church still hurts most?</label>
              <textarea value={wound} onChange={e => setWound(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="Name it without minimizing..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What theological question do you most need an honest space to explore?</label>
              <textarea value={question} onChange={e => setQuestion(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="What are you really asking..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>Is there anything about the Christian story that still draws or moves you?</label>
              <textarea value={draw} onChange={e => setDraw(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="No pressure to have an answer..." />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: GREEN }}>Wound:</strong> {e.wound}</p>
                {e.question && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Question:</strong> {e.question}</p>}
                {e.draw && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Draw:</strong> {e.draw}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "3_-OEdC2uaY", title: "When Church Hurts", channel: "The Gospel Coalition", description: "TGC on the experience of being wounded by the church — and what faithful engagement with that wound looks like for someone considering whether to return." },
              { videoId: "PKyLYSfmTwI", title: "Healing After Spiritual Abuse", channel: "Allender Center", description: "Dan Allender on the specific wounds that religious contexts can create and how healing begins with honest naming of what happened." },
              { videoId: "eBl7gT7gQ6g", title: "Emotionally Healthy Spirituality", channel: "Peter Scazzero", description: "Scazzero on integrating emotional health and spiritual formation — essential for PKs who learned to perform faith rather than inhabit it." },
              { videoId: "Hq1t7kMjXAY", title: "The Parable of the Prodigal Son", channel: "Timothy Keller", description: "Keller on the parable that frames God's response to those who have been away and are considering whether to come home." },
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
