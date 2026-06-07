"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Gray Hair Is a Crown of Glory", verse: "Proverbs 16:31", text: "Scripture does not view aging as failure or tragedy. Gray hair is described as a crown of glory obtained through a righteous life. The accumulation of years is not something to hide or reverse — it is visible evidence of a life lived. Western culture's contempt for aging is not God's view." },
  { title: "You Are Still Being Made New", verse: "2 Corinthians 4:16", text: "Even as the outer self wastes away, Paul says the inner self is being renewed day by day. This is not spiritual spin on physical decline — it is a theological claim that spiritual formation deepens with age for those who walk with God. The body diminishes; the soul enlarges." },
  { title: "God Has Never Abandoned You", verse: "Isaiah 46:4", text: "God explicitly promises: 'Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you.' This is not conditional. This is covenant. The God who carried you through youth carries you still." },
  { title: "The End Is Better Than the Beginning", verse: "Ecclesiastes 7:8", text: "Qohelet says the end of a matter is better than its beginning. For the believer, aging moves toward — not away from — fullness. This is a journey home. Death is not the enemy who wins; it is the door through which the fullness of God is entered." },
  { title: "Legacy Is a Spiritual Act", verse: "Psalm 71:17-18", text: "The psalmist prays: 'Do not forsake me until I declare your power to the next generation.' The transmission of faith — through stories, presence, prayer, and witness — is one of the most significant works of the later years. Legacy is not optional; it is calling." },
];

const voices = [
  { id: "je", name: "John Eldredge", role: "Author, Moving Mountains", quote: "The older saints I know who have kept their hearts alive and growing share one thing in common: they kept saying yes to God, even when saying yes was costly.", bio: "Eldredge's work on spiritual formation argues that the heart must be intentionally tended through all seasons of life, and that older believers who are spiritually vibrant chose ongoing surrender and engagement rather than spiritual retirement." },
  { id: "dp", name: "Daniel Doriani", role: "Theologian, Aging in Grace", quote: "Aging believers have what younger Christians desperately need: the testimony of a life that survived suffering, disappointment, and confusion, and still found God faithful.", bio: "Doriani's theological work on the later years argues that aging is a gift to the community — the embodied proof that faith holds. The older saint who has kept their faith through loss is a living sermon no younger voice can replicate." },
  { id: "hb", name: "Henri Nouwen", role: "Author, The Road to Daybreak", quote: "Aging is not a problem to be solved but a gift to be received. The gradual letting go of the things we hold most tightly can become the greatest spiritual liberation.", bio: "Nouwen wrote extensively on aging, disability, and dying as spiritual formation. His time caring for Henri, an L'Arche community member with severe disabilities, shaped his theology that vulnerability and dependency are not diminishments of the human but pathways into deeper communion with God." },
];

const practices = [
  { icon: "📖", title: "Narrate Your Faith Story", text: "Write or record your testimony — not the highlights, but the whole arc: doubt, loss, rescue, transformation. This is not vanity; it is the work of legacy. Future generations need the testimony of those who walked with God over decades. Consider a simple memoir, an audio recording, or letters to grandchildren." },
  { icon: "🙏", title: "Develop an Intercessory Prayer Life", text: "The later years often bring more time and less capacity for physical action — but intercessory prayer has no age limit. Many older believers discover that what they lost in mobility they gained in prayer depth. To intercede for children, grandchildren, church, and nation is one of the most powerful callings available." },
  { icon: "👥", title: "Stay Rooted in Community", text: "Isolation is one of the greatest spiritual dangers of aging. Depression, cognitive decline, and loss of faith all worsen in isolation. Stay actively connected to a local church body — even if circumstances require adjustment. Intergenerational relationships are specifically protective for older adults." },
  { icon: "✝️", title: "Embrace the Theology of Enough", text: "Aging often requires releasing control — of health, of outcomes, of others' choices. This is not loss; it is practice for resurrection. Begin to distinguish between what is yours to hold and what is God's to carry. The simplification of later life can deepen, rather than diminish, spiritual awareness." },
];

const scriptures = [
  { verse: "Psalm 71:17-18", text: "Since my youth, God, you have taught me, and to this day I declare your marvelous deeds. Even when I am old and gray, do not forsake me, my God, till I declare your power to the next generation." },
  { verse: "Isaiah 46:4", text: "Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you." },
  { verse: "2 Corinthians 4:16-17", text: "Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day. For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all." },
  { verse: "Proverbs 16:31", text: "Gray hair is a crown of splendor; it is attained in the way of righteousness." },
  { verse: "Psalm 92:14", text: "They will still bear fruit in old age, they will stay fresh and green." },
  { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
];

const videos = [
  { id: "ag_1", title: "Aging Gracefully — A Theological Conversation About Growing Old", channel: "The Gospel Coalition" },
  { id: "ag_2", title: "What Does the Bible Say About Aging?", channel: "Desiring God" },
  { id: "ag_3", title: "Henri Nouwen on Aging, Dying, and Eternal Life", channel: "Henri Nouwen Society" },
  { id: "ag_4", title: "Legacy and the Later Years — How to Finish Well", channel: "Focus on the Family" },
];

type AgingEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function AgingPage() {
  const [tab, setTab] = useState("theology");
  const [agingJournal, setAgingJournal] = useState<AgingEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_agingj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_agingj_entries", JSON.stringify(agingJournal)); } catch {}
  }, [agingJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setAgingJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setAgingJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Life Seasons</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Aging in Faith</h1>
        <p style={{ color: MUTED, marginBottom: "2rem" }}>Theology for the later years — legacy, loss, and being carried home</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>What God Says About Getting Older</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Voices on the Later Years</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Spiritual Practices for the Later Years</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Scripture for the Journey Home</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: PURPLE }}>Your Reflection Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries are saved privately in your browser. No account needed.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What are you carrying in this season?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="In this season I am..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What has God proven faithful in over your lifetime?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="Looking back, I have seen God..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What legacy are you building or leaving?</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="I want to pass on..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {agingJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. Your story matters — begin when you are ready.</p>}
            {agingJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>THIS SEASON</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>GOD'S FAITHFULNESS</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>LEGACY</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
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
