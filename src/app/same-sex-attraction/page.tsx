"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "You Are Seen and Known — All of You", verse: "Psalm 139:1-4", text: "God searches you and knows you — your sitting down and rising up, your going out and lying down. Every part of you is known to Him. Christians who experience same-sex attraction often carry this in isolation, as something that must remain hidden even from God. But there is nowhere you can go from His presence. He already knows, and He has not withdrawn." },
  { title: "Temptation Is Not Sin", verse: "Hebrews 4:15", text: "Jesus was tempted in every way, just as we are — yet He did not sin. This distinction between temptation and sin is foundational. Experiencing same-sex attraction is not itself sin. It is a form of temptation and suffering that, like all temptation, invites trust in God rather than accusation. Many faithful Christians have carried this burden for decades without acting on it." },
  { title: "Celibacy Is a Calling — Not a Punishment", verse: "Matthew 19:12", text: "Jesus explicitly affirms those who are celibate for the kingdom of heaven, saying 'the one who can accept this should accept it.' This is not a grudging accommodation — it is a genuine vocation. Paul speaks of singleness as a gift (1 Cor 7:7). Many Christians who experience same-sex attraction choose celibacy not as a lesser life but as a genuine calling toward radical availability for God and community." },
  { title: "The Family of God Is Your Family", verse: "Mark 10:29-30", text: "Jesus promises that those who leave family for His sake will receive a hundredfold — houses and brothers and sisters and mothers and children — in this present age. The church, when it functions as it should, is the family that those without biological family or without traditional marriage can call home. This promise is especially urgent for celibate Christians who need real community to thrive." },
  { title: "You Are Not Defined by Your Sexuality", verse: "Colossians 3:3", text: "Your life is hidden with Christ in God. The deepest truth about you is not your sexuality, your struggles, or your history. It is that you are in Christ. This identity is not the denial of the rest of your experience — it is the foundation from which the rest is navigated. Same-sex attraction is part of your story; it is not the whole of who you are." },
];

const voices = [
  { id: "wa", name: "Wesley Hill", role: "Author, Washed and Waiting", quote: "I am gay. I am also a Christian. These two facts about me do not cancel each other out. I am learning to live with the tension, to find the grace that is sufficient for the particular form of weakness that is mine.", bio: "Hill is a New Testament professor and one of the most careful and compassionate Christian writers on same-sex attraction. His book Washed and Waiting is widely considered essential reading for Christians navigating this experience. He writes from within the experience, not outside it." },
  { id: "rw", name: "Rosaria Champagne Butterfield", role: "Author, The Secret Thoughts of an Unlikely Convert", quote: "I once had a life like yours. I lived partnered lesbian life. I was tenured at a secular university. I loved my life... and then the wheels came off in ways I did not expect. God's grace is not gentle. It is not always comfortable. It is always good.", bio: "Butterfield's conversion story from lesbian academic to Presbyterian pastor's wife is one of the most debated and discussed in evangelical Christianity. Whatever one thinks of her trajectory, her work on hospitality, community, and the cost of following Jesus is deeply valuable." },
  { id: "jr", name: "Julie Rodgers", role: "Author, Outlove", quote: "The church often wants to 'love the sinner' without actually loving the person — without actually knowing us, sitting with us, staying when it gets complicated. What LGBTQ people in the church need is not programs. They need to belong.", bio: "Rodgers writes and advocates for LGBTQ Christians from a position of deep pastoral care. Her work focuses on what real belonging in Christian community looks like for people who experience same-sex attraction, moving beyond abstract theological positions to actual embodied community." },
];

const practices = [
  { icon: "👥", title: "Find a Community That Knows and Stays", text: "The greatest danger for Christians navigating same-sex attraction is isolation. You need people who know your full story and stay anyway. Look for Spiritual Friendship (spiritualfriendship.org), Living Out (livingout.org), and Side B communities of Christians committed to celibacy who provide real mutual care and belonging." },
  { icon: "📖", title: "Read the Honest Voices of Those Who Have Walked This Road", text: "Books: Washed and Waiting by Wesley Hill, Spiritual Friendship by Wesley Hill, Single, Gay, Christian by Gregory Coles, Glorious Ruin by Tullian Tchividjian. These are voices of people living with this tension, not voices observing it from outside. Let their hard-won wisdom be a companion." },
  { icon: "🤝", title: "Find a Spiritual Director or Counselor", text: "The journey of navigating sexuality, faith, and vocation is too complex to do alone. Seek a spiritual director or counselor who is theologically orthodox and genuinely compassionate — someone who will hold the tension without dismissing either your faith or your experience. Avoid practitioners who promise change in orientation; focus on integration, faithfulness, and flourishing." },
  { icon: "✝️", title: "Take the Long View on Vocation", text: "If you are discerning whether celibacy is your calling, take years, not weeks. Pray, seek counsel, read, and engage in community. Vocation is discerned over time in the context of community and prayer — not decided in crisis. Many people find that clarity about vocation comes slowly and requires significant spiritual companionship." },
];

const scriptures = [
  { verse: "Psalm 139:1-4", text: "You have searched me, Lord, and you know me. You know when I sit and when I rise; you perceive my thoughts from afar. You discern my going out and my lying down; you are familiar with all my ways." },
  { verse: "Hebrews 4:15-16", text: "We do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are — yet he did not sin. Let us then approach God's throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need." },
  { verse: "Matthew 19:12", text: "There are those who choose to live like eunuchs for the sake of the kingdom of heaven. The one who can accept this should accept it." },
  { verse: "Mark 10:29-30", text: "No one who has left home or brothers or sisters or mother or father or children or fields for me and the gospel will fail to receive a hundred times as much in this present age." },
  { verse: "Colossians 3:3", text: "For you died, and your life is now hidden with Christ in God." },
  { verse: "Romans 8:38-39", text: "I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
];

const videos = [
  { id: "ssa_1", title: "Washed and Waiting — Wesley Hill on Same-Sex Attraction and Faithfulness", channel: "The Gospel Coalition" },
  { id: "ssa_2", title: "What Celibate Gay Christians Want the Church to Know", channel: "Spiritual Friendship" },
  { id: "ssa_3", title: "Living Out — Stories of Gay Christians Living by Conviction", channel: "Living Out" },
  { id: "ssa_4", title: "The Church and LGBTQ People — What Genuine Welcome Looks Like", channel: "Christianity Today" },
];

type SSAEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function SameSexAttractionPage() {
  const [tab, setTab] = useState("theology");
  const [ssaJournal, setSsaJournal] = useState<SSAEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_ssatractionj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_ssatractionj_entries", JSON.stringify(ssaJournal)); } catch {}
  }, [ssaJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setSsaJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setSsaJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Faith and Sexuality</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Same-Sex Attraction and Faith</h1>
        <p style={{ color: MUTED, marginBottom: "0.5rem" }}>Pastoral theology, community, and faithfulness for Christians navigating same-sex attraction</p>

        <div style={{ background: "#0a0a1a", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ margin: 0, fontSize: "0.9rem", color: TEXT }}>
            <strong style={{ color: PURPLE }}>This page is for:</strong> Christians who experience same-sex attraction and are seeking to live faithfully according to a traditional sexual ethic, those seeking community with others who share this experience, and churches seeking to serve these brothers and sisters well.<br /><br />
            <strong>988 Lifeline:</strong> Call or text 988 — LGBTQ+ line available (press 3 after connecting)
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Theology for the Long Road</h2>
            {theology.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.8rem", color: PURPLE, fontWeight: 600, marginBottom: "0.3rem" }}>{s.verse}</div>
                <h3 style={{ margin: "0 0 0.75rem", fontSize: "1.1rem" }}>{s.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Voices From Within the Experience</h2>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem", fontStyle: "italic", color: TEXT }}>"{v.quote}"</blockquote>
                <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Practices for Faithfulness and Flourishing</h2>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.05rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.6 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Scripture for This Journey</h2>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.85rem", color: PURPLE, fontWeight: 600, marginBottom: "0.4rem" }}>{s.verse}</div>
                <p style={{ margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: PURPLE }}>Your Private Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries are saved privately in your browser only. No account, no sharing, no visibility to anyone else.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What are you carrying in this particular season?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="In this season I am carrying..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What truth about God is sustaining you right now?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="What is sustaining me is..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What is one step toward deeper community or faithfulness this season?</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="One step I am taking..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {ssaJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. Your journey is real. Your faith is real. Begin when you are ready.</p>}
            {ssaJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>CARRYING</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT SUSTAINS ME</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>STEP TAKEN</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
                <button onClick={() => deleteEntry(e.id)} style={{ fontSize: "0.75rem", color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Video Resources</h2>
            {videos.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.3rem" }}>{v.channel}</div>
                <p style={{ margin: 0, fontWeight: 600 }}>{v.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
