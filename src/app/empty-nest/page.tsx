"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "You Were Always More Than a Parent", verse: "Colossians 3:3-4", text: "Your life is hidden with Christ in God. Your identity was never finally located in your role as the parent of children at home. The empty nest is painful in part because the role occupied so much — but it also creates space to rediscover who you are in Christ apart from that role." },
  { title: "They Were Never Yours to Keep", verse: "1 Samuel 1:27-28", text: "Hannah prayed for Samuel and then gave him back to God, saying, 'I prayed for this child, and the Lord has granted me what I asked of him. So now I give him to the Lord.' The hardest theology of parenting is that children are given to be released. Grief over their leaving is right — but releasing them to God's hands is the fullness of faithful parenting." },
  { title: "This Is Not Loss; It Is Completion", verse: "Psalm 127:3-5", text: "Children are described as arrows — weapons formed to be launched. An arrow held is not an arrow fulfilling its purpose. The departure of children is the proof that the work was done well. The house that feels empty is evidence of faithfulness." },
  { title: "New Seasons Are Still from God", verse: "Ecclesiastes 3:1-3", text: "There is a time for every season under heaven — including the season when the house goes quiet, the dinner table shrinks, and the schedule opens. God is in this season too. The question is not whether this season has meaning, but what God is calling you into within it." },
  { title: "Your Marriage Was Designed for This Moment", verse: "Genesis 2:24", text: "The original human unit was two — not two plus children. The leaving-and-cleaving design of marriage anticipates that children depart. Many couples find the empty nest is the invitation to rediscover and deepen the covenant they made before children arrived. This is not diminishment; it is return." },
];

const voices = [
  { id: "jf", name: "Jim and Cathy Burns", role: "Authors, Finding Joy in the Empty Nest", quote: "The empty nest is not the end of your most important season — it is the beginning of a new one. Your children need you to thrive in this season, not mourn it.", bio: "Jim Burns has spent decades working with parents on the transitions of family life. His work on the empty nest argues that parents who invest in their own growth, marriage, and calling during the empty nest are better positioned to support adult children through what comes next." },
  { id: "sc", name: "Sandra Stanley", role: "Author, Breathing Room", quote: "When our last child left, I realized I had no idea who I was outside of being a mother. That was terrifying — and one of the most spiritually formative experiences of my life.", bio: "Stanley has written and spoken honestly about the identity disorientation of the empty nest. Her work encourages women to resist the temptation to fill the void immediately with activity, and instead to let the quiet become a place of spiritual discovery." },
  { id: "gk", name: "Gary and Barbara Rosberg", role: "Authors, The 5 Love Needs of Men and Women", quote: "Many couples arrive at the empty nest having invested everything in their children and almost nothing in each other. The good news is that it is not too late. The marriage you rebuild in this season can be the best of your life.", bio: "The Rosbergs have worked extensively with couples transitioning through the empty nest. They report that couples who see this season as an opportunity to reinvest in their marriage often find richer intimacy than they experienced in any earlier season." },
];

const practices = [
  { icon: "💑", title: "Reinvest in Your Marriage", text: "Plan a trip, schedule regular date nights, and have honest conversations about who you both are now and what you want the next chapter to hold. Many couples find this season opens relational depth that the busyness of parenting crowded out." },
  { icon: "🎯", title: "Discover Your Calling Without Children at Home", text: "What has God placed in you that parenting left little room to pursue? Service, creative work, ministry, education, travel? The empty nest can be a season of personal flourishing that serves God and models aliveness to your adult children." },
  { icon: "✉️", title: "Redefine the Relationship With Adult Children", text: "The parent-child relationship does not end — it transforms. Resist the pull to maintain the old structure. Learn to relate as adults, respect their autonomy, and build genuine friendship. This transition takes time and intentionality on both sides." },
  { icon: "🙏", title: "Let Grief Be Grief", text: "It is right to grieve the end of a season that was rich and full. Do not rush past the grief into productivity. Bring the loss honestly to God in prayer. Let Him meet you in the transition, not just the arrival." },
];

const scriptures = [
  { verse: "Colossians 3:3", text: "For you died, and your life is now hidden with Christ in God." },
  { verse: "Psalm 127:4", text: "Like arrows in the hands of a warrior are children born in one's youth." },
  { verse: "Ecclesiastes 3:1", text: "There is a time for everything, and a season for every activity under the heavens." },
  { verse: "Isaiah 43:19", text: "See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland." },
  { verse: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future." },
  { verse: "Genesis 2:24", text: "That is why a man leaves his father and mother and is united to his wife, and they become one flesh." },
];

const videos = [
  { id: "en_1", title: "The Empty Nest — Finding Yourself After Parenting", channel: "Focus on the Family" },
  { id: "en_2", title: "Your Marriage After the Kids Leave", channel: "FamilyLife Today" },
  { id: "en_3", title: "New Purpose in the Empty Nest Season", channel: "Proverbs 31 Ministries" },
  { id: "en_4", title: "Launching Your Kids and Landing Well — Theology of the Empty Nest", channel: "The Gospel Coalition" },
];

type ENEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function EmptyNestPage() {
  const [tab, setTab] = useState("theology");
  const [enJournal, setEnJournal] = useState<ENEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_emptynestj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_emptynestj_entries", JSON.stringify(enJournal)); } catch {}
  }, [enJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setEnJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setEnJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Life Seasons</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Empty Nest</h1>
        <p style={{ color: MUTED, marginBottom: "2rem" }}>Grief, identity, and new beginnings when children leave home</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Theology for the Quiet House</h2>
            {theology.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.8rem", color: GREEN, fontWeight: 600, marginBottom: "0.3rem" }}>{s.verse}</div>
                <h3 style={{ margin: "0 0 0.75rem", fontSize: "1.1rem" }}>{s.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Voices for This Season</h2>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", fontStyle: "italic", color: TEXT }}>"{v.quote}"</blockquote>
                <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Navigating the Transition</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Scripture for New Seasons</h2>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.85rem", color: GREEN, fontWeight: 600, marginBottom: "0.4rem" }}>{s.verse}</div>
                <p style={{ margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: GREEN }}>Your Reflection Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries are saved privately in your browser. No account needed.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What is this transition stirring in you?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="Right now I feel..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What do you sense God saying about this season?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="I sense God is saying..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What does this new chapter look like for you?</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="In this new chapter I want to..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: GREEN, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {enJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. Your story has more chapters — start writing when you are ready.</p>}
            {enJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>STIRRING</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT GOD IS SAYING</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>NEW CHAPTER</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
                <button onClick={() => deleteEntry(e.id)} style={{ fontSize: "0.75rem", color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Video Resources</h2>
            {videos.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.3rem" }}>{v.channel}</div>
                <p style={{ margin: 0, fontWeight: 600 }}>{v.title}</p>
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
