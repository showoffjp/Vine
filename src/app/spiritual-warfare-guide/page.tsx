"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type SWEntry = { id: string; date: string; attack: string; weapon: string; victory: string };

const theology = [
  { title: "The Reality of the Demonic — What Scripture Actually Teaches", verse: "Eph 6:12", text: "We do not wrestle against flesh and blood but against rulers, authorities, and cosmic powers. The New Testament is unambiguous about the reality of demonic opposition. Jesus exorcised demons; Paul wrote about spiritual warfare; Peter warned that the devil prowls like a roaring lion. The Western dismissal of the demonic is a cultural projection onto the text, not an exegetical conclusion." },
  { title: "Ephesians 6 — the Armor of God as Christological Reality", verse: "Eph 6:13-18", text: "Each piece of armor in Paul is a Christological reality: the belt of truth (Christ who is the truth), breastplate of righteousness (Christ's righteousness credited to us), gospel shoes (the good news already announced), shield of faith, helmet of salvation, sword of the Spirit (the word of God). Spiritual warfare is fought with what Christ has already accomplished, not with techniques or formulas." },
  { title: "The Three Enemies — World, Flesh, and Devil", verse: "James 4:7", text: "The classical Reformed and Wesleyan taxonomy of spiritual opposition identifies three enemies: the world (the systemic ordering of life apart from God), the flesh (the internal pull toward self-sovereignty), and the devil (personal, intentional spiritual opposition). The three enemies operate differently and require different responses. Most spiritual warfare is actually with the flesh and the world, which are less dramatic and more persistent than demonic attack." },
  { title: "Spiritual Warfare Is Not Primarily About Demons — It Is About Prayer", verse: "Eph 6:18", text: "Paul's conclusion to the armor passage is prayer: pray at all times in the Spirit, with all prayer and supplication. The primary weapon of spiritual warfare is persistent, faith-filled, Spirit-empowered prayer. The dramatic deliverance emphasis in some charismatic and Pentecostal traditions often eclipses the quieter, more demanding warfare of sustained intercession." },
  { title: "When Spiritual Warfare Is Real — Discernment, Not Sensationalism", verse: "1 Pet 5:8-9", text: "The twin errors: dismissing all unusual spiritual experience as psychological (cessationist over-reaction) or attributing everything negative to demonic attack (charismatic over-emphasis). Discernment requires both spiritual sensitivity and psychological wisdom. The criteria for genuine spiritual opposition versus psychological distress matter enormously — when to engage spiritually, when to refer for counseling." },
];

const voices = [
  { name: "C.S. Lewis", role: "The Screwtape Letters", quote: "There are two equal and opposite errors into which our race can fall about the devils. One is to disbelieve in their existence. The other is to believe, and to feel an excessive and unhealthy interest in them. They themselves are equally pleased by both errors and hail a materialist or a magician with the same delight.", bio: "The Screwtape Letters remains the most widely read popular treatment of spiritual warfare in the English language. Lewis approaches the subject through satirical inversion — the letters of a senior demon to a junior one — and manages to illuminate the mechanics of temptation with more insight than most theological treatments." },
  { name: "Clinton Arnold", role: "3 Crucial Questions About Spiritual Warfare", quote: "The armor of God is not a set of rituals to perform but a set of realities to appropriate by faith. Everything Paul describes is something Christ has already accomplished. The warfare is real; the victory is already secured. The Christian's task is not to win a battle but to stand in one that has already been won.", bio: "Clinton Arnold is a New Testament scholar whose work on spiritual warfare is both exegetically careful and practically useful. His treatment of the armor of God in its first-century context shows how deeply Paul's imagery was shaped by the Greco-Roman world's concern with supernatural powers and the Christian response to them." },
  { name: "Walter Wink", role: "Engaging the Powers", quote: "The principalities and powers are not simply individual demonic beings floating in the air. They are the spirituality of institutions, the internalized spirit of corporations, states, and social systems. To engage the powers is to engage the spiritual dimension of structures that have turned away from their divine vocation.", bio: "Walter Wink's Powers trilogy offers a more progressive theological reading that locates the principalities and powers partly within social and institutional structures. Included here for theological breadth — his analysis of systemic evil and structural sin complements, rather than replaces, the more personal and cosmic dimensions of Pauline spiritual warfare." },
];

const practices = [
  { title: "Daily Examen with Spiritual Warfare Awareness", text: "Where did I yield to the flesh, the world, or the devil today? The daily prayer of examen, practiced with spiritual warfare awareness, trains attentiveness to the patterns of temptation and the specific enemies most active in a given season of life." },
  { title: "Scripture Meditation as Sword Practice", text: "Memorizing specific passages for specific areas of temptation is what Paul means by the sword of the Spirit. This is not magic — it is having the right word available at the moment of attack, as Jesus did in the wilderness." },
  { title: "Fasting as Spiritual Warfare Discipline", text: "Fasting has a particular connection to spiritual warfare in the tradition (Matt 17:21 context). It disciplines the body, weakens the pull of the flesh, and creates space for focused intercession. It is one of the most underused spiritual weapons in the contemporary church." },
  { title: "Accountability for Persistent Temptation", text: "Specific areas of persistent temptation that have not yielded to private prayer and discipline often require the accountability of a trusted brother or sister. James 5:16 — confess your sins to one another and pray for one another, that you may be healed." },
  { title: "Intercessory Prayer for Those Under Spiritual Attack", text: "Interceding specifically for those under evident spiritual attack is a form of warfare. The intercessor enters the fight on behalf of another. This is one of the most concrete forms of spiritual warfare available to ordinary Christians." },
];

const scriptures = [
  { verse: "Eph 6:12", text: "For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world and against the spiritual forces of evil in the heavenly realms." },
  { verse: "Eph 6:13-18", text: "Therefore put on the full armor of God, so that when the day of evil comes, you may be able to stand your ground, and after you have done everything, to stand." },
  { verse: "1 Pet 5:8-9", text: "Be sober-minded; be watchful. Your adversary the devil prowls around like a roaring lion, seeking someone to devour. Resist him, firm in your faith, knowing that the same kinds of suffering are being experienced by your brotherhood throughout the world." },
  { verse: "James 4:7", text: "Submit yourselves therefore to God. Resist the devil, and he will flee from you." },
  { verse: "2 Cor 10:4-5", text: "The weapons we fight with are not the weapons of the world. On the contrary, they have divine power to demolish strongholds. We demolish arguments and every pretension that sets itself up against the knowledge of God." },
  { verse: "Rev 12:11", text: "And they have conquered him by the blood of the Lamb and by the word of their testimony, for they loved not their lives even unto death." },
];

const videos = [
  { id: "NLzGFsEWkiY", title: "The Biblical Framework for Spiritual Warfare" },
  { id: "HzPBc7EVZEM", title: "The Armor of God Explained" },
  { id: "XYQY7XGpO-U", title: "Spiritual Warfare and Prayer" },
  { id: "vFfPqwXyUBs", title: "Discernment and Spiritual Opposition" },
];

export default function SpiritualWarfareGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SWEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_warfare_entries") ?? "[]"); } catch { return []; }
  });
  const [jAttack, setJAttack] = useState("");
  const [jWeapon, setJWeapon] = useState("");
  const [jVictory, setJVictory] = useState("");

  useEffect(() => { localStorage.setItem("vine_warfare_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jAttack.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), attack: jAttack, weapon: jWeapon, victory: jVictory }, ...prev]);
    setJAttack(""); setJWeapon(""); setJVictory("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Spiritual Formation</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Spiritual Warfare</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>The biblical framework for engaging the demonic and resisting evil — the armor of God, the three enemies, and the primary weapons of sustained spiritual warfare.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? PURPLE : BORDER}`, background: tab === t.id ? PURPLE + "22" : "transparent", color: tab === t.id ? PURPLE : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: PURPLE, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 8 }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: PURPLE, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Your Spiritual Battle</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to bring your spiritual warfare honestly and prayerfully before God.</p>
            {[
              { label: "Attack — an area where you sense spiritual opposition", val: jAttack, set: setJAttack },
              { label: "Weapon — a spiritual weapon you are using", val: jWeapon, set: setJWeapon },
              { label: "Victory — a victory or breakthrough you have seen or are trusting for", val: jVictory, set: setJVictory },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: PURPLE }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: PURPLE, fontWeight: 600 }}>Attack:</span> {e.attack}</p>
                      {e.weapon && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: PURPLE, fontWeight: 600 }}>Weapon:</span> {e.weapon}</p>}
                      {e.victory && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: PURPLE, fontWeight: 600 }}>Victory:</span> {e.victory}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: PURPLE }}>{v.title}</h3>
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
