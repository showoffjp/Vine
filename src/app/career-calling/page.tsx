"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Vocation Is Not the Same as Career — Every Christian Is Called", verse: "Ephesians 4:1", text: "As a prisoner for the Lord, then, I urge you to live a life worthy of the calling you have received. The word vocation comes from the Latin vocare — to call. Before anyone has a career, they have a calling: to live worthy of the call received in Christ. This primary vocation — to be conformed to Christ, to love God and neighbor, to embody the kingdom — is not in competition with career choices. It is the frame within which every career choice is evaluated. No career path is excluded from this primary calling; all are subject to it." },
  { title: "God's Guidance Is More Like a Conversation Than a Map", verse: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight. The proverb does not say God will reveal a five-year career plan. It says God will make your paths straight as you submit. The guidance is relational and progressive — occurring in the walking, not before it. The person waiting for certainty before moving will often wait forever. The person moving in submission and wisdom will find the path clarified in the going." },
  { title: "Your Gifts, Desires, and the World's Needs Are All Clues — Not Coincidences", verse: "1 Corinthians 12:7", text: "Now to each one the manifestation of the Spirit is given for the common good. The Spirit's gifts are given for the common good — which means they are pointed outward, toward need. Frederick Buechner's definition of vocation — where your deep gladness meets the world's deep hunger — is more theologically grounded than it appears. What you are good at, what you love, and what the world genuinely needs are all data in the discernment process. God's design of gifts and desires is intentional, not accidental." },
  { title: "Suffering and Failure Are Not Signs of the Wrong Path", verse: "Romans 5:3-4", text: "We also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope. Many Christians interpret career difficulty as evidence of the wrong path. Paul's theology of suffering suggests the opposite: suffering produces the character that is the most valuable vocational asset. The person who has endured professional failure, redirected career, difficult workplace, or prolonged discernment has often acquired precisely the formation that the work they were designed for most requires." },
  { title: "Contentment in Every Station Is Both a Command and a Learned Skill", verse: "Philippians 4:11-12", text: "I have learned to be content whatever the circumstances. I know what it is to be in need, and I know what it is to have plenty. I have learned the secret of being content in any and every situation. Paul's language is striking: contentment is learned, not given. The Christian discerning career and calling is not exempt from the discipline of contentment in the present station while working toward the next. The discernment process itself is a school of formation — not just a search for the answer." },
];

const voices = [
  { id: "os", name: "Os Guinness", role: "Author, The Call; Cultural Apologist", quote: "Calling is not primarily about what we do for God; it is primarily about what we are for God. Secondary calling — what we do with our lives — flows from primary calling — who we are in relation to God. Get the order wrong, and career becomes identity and work becomes self-justification. Get the order right, and work becomes worship and vocation becomes freedom.", bio: "Guinness's The Call is the most comprehensive and theologically rich treatment of Christian vocation available. His distinction between primary calling (to God himself) and secondary calling (specific work and sphere) provides the framework that prevents vocation from collapsing into career anxiety or spiritual aspiration from becoming vocational paralysis." },
  { id: "pp", name: "Parker Palmer", role: "Author, Let Your Life Speak; Quaker Educator", quote: "Before I can tell my life what I want to do with it, I must listen to my life telling me who I am. Vocation is not something external that we choose, like a suit of clothes. It is internal, like a DNA that unfolds over time — if we are willing to pay attention to it rather than drown it out with our ambitions, others' expectations, and cultural noise.", bio: "Palmer's Let Your Life Speak offers a contemplative and psychologically informed approach to vocation discernment — listening to the self God has made rather than imposing on it the self we think we should be. His framework for paying attention to what drains versus what gives life provides practical discernment tools." },
  { id: "tk", name: "Tim Keller", role: "Author, Every Good Endeavor; Gospel in Life", quote: "Work is not a necessary evil on the way to more spiritual things. Work was given before the fall, in the garden, as part of what it means to be human. The Christian doctrine of creation means that whatever you do — whatever ordinary, unglamorous work you do — if you do it excellently and faithfully, you are serving God and your neighbors. The question is not whether your work is sacred. All work done faithfully is sacred. The question is whether you are bringing God into it.", bio: "Keller's Every Good Endeavor is the most accessible and theologically grounded treatment of work as Christian vocation. His framing of the cultural mandate, the fall's distortion of work, and the gospel's redemption of it gives Christians a comprehensive framework for thinking about their careers as ministry, not merely as funding ministry." },
];

const practices = [
  { icon: "🔍", title: "Distinguish Primary Calling From Secondary Calling", text: "Before any career decision: your primary calling is to follow Christ, love God and neighbor, and embody the kingdom in whatever sphere you occupy. Secondary calling is where and how you do that — the specific form it takes in a particular career, role, or sphere. Clarity about primary calling is the precondition for wise secondary calling discernment. Many people are paralyzed by secondary calling questions because they have not settled primary calling." },
  { icon: "📝", title: "Map Your Gifts, Passions, and the Needs That Move You", text: "Three questions that together point toward vocation: (1) What are you genuinely good at — not what you were praised for as a child, but what comes naturally and deeply? (2) What do you love — not in the sense of enjoying it always, but in the sense of being drawn back to it repeatedly? (3) What need in the world makes you angry, sad, or urgent? The intersection of gifts, passion, and need is where vocation typically lives. If you cannot answer these, you need more experience before more discernment." },
  { icon: "🤝", title: "Submit the Discernment to Community", text: "Career discernment that happens only in your own head is less reliable than discernment that is tested in community. Find 3-5 people who know you well — who have seen you work, who love you enough to be honest — and ask them: what do you see in me? What do you think I'm made for? The people who have watched you for years often have insights into your gifts and calling that you cannot see because you are inside the picture. Spiritual direction, mentoring, and career counseling all serve this function." },
  { icon: "⏱️", title: "Make the Next Right Move, Not the Perfect Move", text: "The most common vocational mistake is waiting for certainty before moving. The path clarifies in the walking, not before it. What is the next right step that you can take from where you are, with what you know now, in the direction that seems most aligned with your gifts and calling? Take that step. Then reassess. Vocation is typically discerned over years through a series of steps, not revealed in a single moment of clarity." },
  { icon: "✝️", title: "Pray Specifically for Wisdom — and Expect It to Come Over Time", text: "James 1:5: 'If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.' The promise is that wisdom is given — not necessarily in the form of a specific directive or dramatic guidance, but as clarity that increases over time as you walk faithfully in the light you have. Journal the discernment process; looking back at what you wrote a year ago often reveals that clarity has come in ways you did not recognize while you were in the middle of it." },
];

const scriptures = [
  { verse: "Ephesians 4:1", text: "As a prisoner for the Lord, then, I urge you to live a life worthy of the calling you have received." },
  { verse: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." },
  { verse: "1 Corinthians 12:7", text: "Now to each one the manifestation of the Spirit is given for the common good." },
  { verse: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future." },
  { verse: "Romans 12:6-8", text: "We have different gifts, according to the grace given to each of us. If your gift is prophesying, then prophesy in accordance with your faith; if it is serving, then serve; if it is teaching, then teach." },
  { verse: "Colossians 3:23", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters." },
];

type CCEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function CareerCallingPage() {
  const [tab, setTab] = useState("theology");
  const [ccJournal, setCcJournal] = useState<CCEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_careerCallingj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_careerCallingj_entries", JSON.stringify(ccJournal)); } catch {}
  }, [ccJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setCcJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }
  function deleteEntry(id: string) { setCcJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Vocation &amp; Purpose</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Career &amp; Calling</h1>
        <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
          Discerning what you are made for — the theology of vocation, the practice of calling discernment, and the freedom of knowing your work matters to God.
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
              <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Discernment Journal</h3>
              <textarea placeholder="Where am I in my discernment right now, and what is confusing me?" value={jFeeling} onChange={e => setJFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="What do my gifts, passions, and the needs that move me point toward?" value={jTruth} onChange={e => setJTruth(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="What is the next right step I can take from where I am now?" value={jStep} onChange={e => setJStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {ccJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : ccJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Where I am:</strong> {e.feeling}</p>}
                {e.truth && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>What I see:</strong> {e.truth}</p>}
                {e.step && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Next step:</strong> {e.step}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "GGCF3OPWN14", title: "The Upside Down Kingdom — Work and Calling", channel: "Tim Keller / The Gospel Coalition", description: "Keller on how the Kingdom of God reframes work and calling — why the carpenter's shop in Nazareth was as sacred as the temple, and what that means for ordinary career decisions." },
              { videoId: "t6L-F2emwUc", title: "The Joy That Produces Radical Obedience", channel: "Desiring God", description: "Piper on how joy in God is the foundation for vocational freedom — why calling pursued from joy produces more than calling pursued from obligation or anxiety." },
              { videoId: "4Eg_di-O8nM", title: "Every Good Endeavor — Work as Worship", channel: "Francis Chan / Desiring God", description: "On the doctrine of vocation — how ordinary work done faithfully and excellently is an act of worship and service, regardless of whether it is explicitly 'ministry' work." },
              { videoId: "oNpTha80yyE", title: "The Sovereignty of God Over Your Path", channel: "Ligonier Ministries / R.C. Sproul", description: "Sproul on the sovereignty of God over every career circumstance — including the path that looks circuitous, the detours that feel wasted, and the redirections that God is actually using." },
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
