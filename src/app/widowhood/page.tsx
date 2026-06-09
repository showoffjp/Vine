"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Specifically Protects Widows", verse: "Psalm 68:5", text: "God is a father to the fatherless and a defender of widows. This is not a generic promise — it is a specific designation. God sees the particular vulnerability of those who have lost their life partner, and He places Himself in the position of protector and advocate. Your need is not invisible to Him." },
  { title: "The Early Church Made Caring for Widows a Priority", verse: "James 1:27", text: "Pure and undefiled religion includes caring for widows in their distress. The early church had a formal list of widows they supported (1 Tim 5:9). The New Testament treats care for widows not as charity but as the basic expression of the body of Christ functioning as it should. If your church has not shown up for you, that is a failure of the church — not of your worth." },
  { title: "Grief Is Not a Sign of Insufficient Faith", verse: "1 Thessalonians 4:13-14", text: "Paul does not tell the Thessalonians not to grieve — he says not to grieve as those who have no hope. The distinction is not grief vs. faith. It is hopeless grief vs. grief that is anchored in resurrection. Grief is the right response to real loss. It honors the reality of what was and what is gone. Your tears are not a failure to trust God." },
  { title: "Ruth and Naomi — The Theology of Companion in Loss", verse: "Ruth 1:16-17", text: "Ruth's famous words to Naomi were spoken in the context of widowhood: 'Where you go I will go, and where you stay I will stay.' The story of widowhood in Scripture is often also a story of companion faithfulness. God often provides the presence and loyalty of another person to walk through loss alongside. Notice who God has placed near you." },
  { title: "God Knows the Full Weight of What Was Lost", verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. This is not a dismissal of the tears — it is the promise that God himself will personally wipe them. He knows what the tears are for. He knows what the marriage was. He knows the length of the years and the depth of the loss. The final wiping of tears is the acknowledgment of every single one of them." },
];

const voices = [
  { id: "jl", name: "Joyce Rupp", role: "Author, Praying Our Goodbyes", quote: "Grief is the price of love. If you are devastated by the loss, it is because the love was real. The devastation is not the measure of your weakness — it is the measure of what you had.", bio: "Rupp's writing on grief and loss is among the most compassionate in Christian literature. Her approach honors the full weight of loss without rushing toward resolution or cheap comfort." },
  { id: "sb", name: "Shelby and Dale Johnson", role: "GriefShare Founders", quote: "GriefShare exists because no one should have to grieve alone, and because the church is supposed to be the community where the brokenhearted find family. We built it because too many widows told us the church disappeared after the casseroles stopped coming.", bio: "GriefShare (griefshare.org) is one of the most widely used Christian grief support resources in the world, with thousands of groups in churches. Their widowhood-specific materials address the particular combination of practical loss and relational grief." },
  { id: "hp", name: "Harold Ivan Smith", role: "Author, Grieving the Death of a Friend", quote: "Society gives you three days and expects you back at full capacity. God gives you as long as it takes. There is no grief timeline in the Psalms.", bio: "Smith has written extensively on grief, loss, and the church's often inadequate response to prolonged mourning. His work challenges the Western cultural expectation that grief should be quick and contained, arguing instead for extended, community-supported mourning." },
];

const practices = [
  { icon: "👥", title: "Find Peer Community — Not Just Sympathy", text: "The most healing relationships for widows and widowers are often with others who are in the same experience. GriefShare (griefshare.org) has thousands of groups in churches worldwide. The companionship of someone who actually understands — not just sympathizes — is qualitatively different. Find your people." },
  { icon: "📋", title: "Address Practical Needs Without Shame", text: "Widowhood often comes with massive practical complexity: finances, property, insurance, estate, social security, children's needs. You do not have to figure this out alone. Ask for specific help from specific people: 'Can you help me with X this week?' People want to help but often do not know how. Tell them." },
  { icon: "📖", title: "Pray With the Psalms", text: "The Psalms contain every emotion in the grief journey — disorientation, anger, questioning, longing, gratitude, trust, despair, hope. Read one psalm a day. Some will land with recognition. Let them speak what you cannot yet form into words. Psalms 23, 34, 46, 62, 71, 73, 91, 121, 139 are especially meaningful for the grief journey." },
  { icon: "⏳", title: "Resist Major Decisions for the First Year", text: "Grief profoundly affects judgment, especially in the first year. Where possible, delay major decisions — moving, significant financial changes, remarriage — until the initial shock has stabilized. Give yourself time to know who you are on the other side of loss before making irreversible decisions." },
];

const scriptures = [
  { verse: "Psalm 68:5", text: "A father to the fatherless, a defender of widows, is God in his holy dwelling." },
  { verse: "Ruth 1:16-17", text: "But Ruth replied, Don't urge me to leave you or to turn back from you. Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God. Where you die I will die, and there I will be buried." },
  { verse: "1 Thessalonians 4:13-14", text: "Brothers and sisters, we do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope. For we believe that Jesus died and rose again, and so we believe that God will bring with Jesus those who have fallen asleep in him." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Isaiah 54:5", text: "For your Maker is your husband — the Lord Almighty is his name — the Holy One of Israel is your Redeemer; he is called the God of all the earth." },
  { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
];

const videos = [
  { id: "wd_1", title: "GriefShare — Support for Those Who Have Lost a Spouse", channel: "GriefShare" },
  { id: "wd_2", title: "The Theology of Grief — God Does Not Ask Us Not to Weep", channel: "The Gospel Coalition" },
  { id: "wd_3", title: "What the Church Gets Wrong About Widowhood — and How to Fix It", channel: "Christianity Today" },
  { id: "wd_4", title: "Ruth and Naomi — The Faithfulness of God in Loss", channel: "Desiring God" },
];

type WEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function WidowhoodPage() {
  const [tab, setTab] = useState("theology");
  const [wJournal, setWJournal] = useState<WEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_widowhoodj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_widowhoodj_entries", JSON.stringify(wJournal)); } catch {}
  }, [wJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setWJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setWJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Loss and Grief</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Widowhood</h1>
        <p style={{ color: MUTED, marginBottom: "0.5rem" }}>Theology, community, and God's specific care for those who have lost a spouse</p>

        <div style={{ background: "#0a0a1a", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ margin: 0, fontWeight: 600, color: PURPLE }}>Support Resources</p>
          <p style={{ margin: "0.4rem 0 0", fontSize: "0.9rem", color: TEXT }}>
            <strong>GriefShare:</strong> griefshare.org — find a grief support group near you<br />
            <strong>988 Lifeline:</strong> Call or text 988 — 24/7 crisis support<br />
            <strong>American Widow Project:</strong> americanwidowproject.org — military widow support
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>God's Specific Care for the Bereaved</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Voices for the Grieving</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Navigating Life After Loss</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Scripture for the Bereaved</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: PURPLE }}>Your Grief Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries are saved privately in your browser. No account needed. There is no right way to use this.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What are you carrying today?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="Today I am..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What truth about God is reaching you in the grief?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="Something I am holding onto is..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>One small step forward today</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="One thing I can do today is..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {wJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. Your grief is real and it belongs here. Begin when you are ready.</p>}
            {wJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>CARRYING TODAY</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>HOLDING ONTO</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>ONE SMALL STEP</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
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
      <Footer />
    </>
  );
}
