"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Estrangement from Church Is Not Estrangement from Christ", verse: "John 10:27-28", text: "My sheep hear my voice, and I know them, and they follow me. The church is not the same as Christ. Institutional hurt does not sever the relationship with the Shepherd. Many who are outside church buildings are still inside his hand." },
  { title: "The Body of Christ Has Been Wounded Throughout History", verse: "Galatians 2:11-14", text: "When Peter came to Antioch, I opposed him to his face, because he stood condemned. Paul publicly confronted the failure of church leadership. The New Testament itself documents how badly the church can fail. Your experience is not an anomaly — it is a wound in an old pattern." },
  { title: "Bitterness and Grief Are Different Spiritual States", verse: "Hebrews 12:15", text: "See to it that no one fails to obtain the grace of God; that no root of bitterness springs up and causes trouble. Grief over what the church failed to be is legitimate. Bitterness — consuming resentment that defines and imprisons you — is the danger. Both deserve honest naming." },
  { title: "Rest Is Permitted After Wounding", verse: "1 Kings 19:7", text: "The angel of the Lord came back a second time and touched him and said, 'Get up and eat, for the journey is too great for you.' After Elijah fled the religious establishment that had failed him, God's first response was food and rest — not rebuke, not instruction, not re-commissioning. There is grace for the fugitive." },
  { title: "Community Remains God's Design Even After Betrayal", verse: "Hebrews 10:24-25", text: "Let us consider how we may spur one another on toward love and good deeds, not giving up meeting together. The command to gather is not cancelled by church hurt. But the form, the timeline, and the particular community are not specified. God's design for community does not require returning to the place of harm." },
];

const voices = [
  { id: "v1", name: "Scot McKnight", role: "Author, A Church Called Tov", quote: "Churches that form around a celebrity or a system rather than around the character of Jesus will always reproduce harm.", bio: "McKnight's analysis of church abuse distinguishes toxic church cultures from the body of Christ itself, helping estranged Christians locate what went wrong without abandoning faith." },
  { id: "v2", name: "Diane Langberg", role: "Psychologist, Author, Redeeming Power", quote: "The church has an enormous capacity for harm precisely because it claims to represent God. That betrayal is distinctly spiritual in its damage.", bio: "Langberg has spent 50 years treating trauma survivors, including many harmed by churches and clergy. Her work gives language for the specific wound of spiritual betrayal and what healing requires." },
  { id: "v3", name: "Wade Mullen", role: "Author, Something's Not Right", quote: "Abuse in institutions is maintained by impression management — by leaders protecting the reputation of the system over the wellbeing of the people.", bio: "Mullen's research on institutional abuse in Christian organizations helps survivors understand that what happened to them was not their fault and that naming it accurately is a form of faithfulness." },
  { id: "v4", name: "Peter Scazzero", role: "Author, Emotionally Healthy Spirituality", quote: "When we are wounded in the context of community, we can only heal in the context of community — but it may need to be a very different community.", bio: "Scazzero's work addresses how church cultures can stunt emotional and spiritual growth, and how new kinds of Christian community can provide what toxic churches failed to offer." },
];

const practices = [
  { icon: "🛑", title: "Name What Happened Accurately", text: "Minimizing church hurt — 'it wasn't that bad,' 'every church has problems' — delays healing. Name what actually occurred: manipulation, spiritual abuse, exclusion, cover-up, betrayal. Accurate naming is not bitterness. It is honesty before God." },
  { icon: "🏕️", title: "Allow a Season of Wilderness", text: "The wilderness between Egypt and Canaan was not wasted time — it was formation time. A season outside institutional church is not failure. It may be necessary rest and healing. Set a boundary with yourself: this is a season, not a permanent state, and I will stay connected to God during it." },
  { icon: "🤝", title: "Find One Safe Christian Witness", text: "Isolation from church does not require isolation from all Christians. Find one person — a spiritual director, a trusted friend, a counselor — who is safe, genuinely faithful, and not invested in defending the institution that hurt you. Stay anchored to at least one human witness." },
  { icon: "📖", title: "Read Psalms of Lament and Betrayal", text: "Psalm 55 (David's betrayal by a friend), Psalm 74 (the sanctuary destroyed), Psalm 89 (God's covenant seemingly failed) — these were written by and for people whose religious community failed them. Praying them is not abandoning faith; it is entering its oldest tradition." },
  { icon: "🔍", title: "Distinguish the Church from Christ", text: "The institution failed you. The people failed you. Ask what you still believe about Jesus himself — his resurrection, his character, his promises. Many people who cannot attend church can still answer that question honestly. Start there rather than with the institution." },
  { icon: "🌱", title: "Move Toward Community Slowly and on Your Terms", text: "When healing begins, re-engagement with Christian community does not require returning to institutional church. House churches, spiritual direction groups, online communities, and para-church gatherings are legitimate forms of the body. Find something that is safe before it is familiar." },
];

const scriptures = [
  { verse: "Psalm 55:12-14", text: "If an enemy were insulting me, I could endure it; if a foe were rising against me, I could hide. But it is you, a man like myself, my companion, my close friend, with whom I once enjoyed sweet fellowship at the house of God." },
  { verse: "Ezekiel 34:4-5", text: "You have not strengthened the weak or healed the sick or bound up the injured. You have not brought back the strays or searched for the lost. So they were scattered, because there was no shepherd." },
  { verse: "Jeremiah 23:1", text: "Woe to the shepherds who are destroying and scattering the sheep of my pasture! declares the Lord." },
  { verse: "Matthew 18:6", text: "If anyone causes one of these little ones — those who believe in me — to stumble, it would be better for them to have a large millstone hung around their neck and to be drowned in the depths of the sea." },
  { verse: "Psalm 22:1", text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish?" },
  { verse: "Revelation 21:4-5", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away. He who was seated on the throne said, 'I am making everything new!'" },
];

type EstrangementEntry = { id: string; date: string; wound: string; anchor: string; desire: string };

export default function EstrangementFromChurchPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<EstrangementEntry[]>([]);
  const [form, setForm] = useState({ wound: "", anchor: "", desire: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_estrangementchurchj_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.wound.trim()) return;
    const e: EstrangementEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_estrangementchurchj_entries", JSON.stringify(updated));
    setForm({ wound: "", anchor: "", desire: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_estrangementchurchj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Church Hurt</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>When the Church Fails You</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>Being estranged from the church after being hurt by it is one of the most spiritually disorienting experiences a Christian can face. The very institution meant to embody Christ becomes the source of deep wound. This page is for those navigating that exile with faith intact or barely holding on.</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{item.title}</h3>
                  <span style={{ color: MUTED, fontSize: "0.8rem", fontStyle: "italic" }}>{item.verse}</span>
                </div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: "1rem" }}>{v.name}</span>
                  <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{v.role}</span>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem", marginTop: 0 }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${GREEN}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", marginTop: 0 }}>Resources</h3>
              <ul style={{ color: MUTED, lineHeight: 1.9, margin: 0, paddingLeft: "1.25rem" }}>
                <li><strong style={{ color: TEXT }}>988 Lifeline</strong> — if church hurt has become a mental health crisis</li>
                <li><strong style={{ color: TEXT }}>GRACE</strong> — netgrace.org, investigates and supports survivors of church abuse</li>
                <li><strong style={{ color: TEXT }}>Spiritual Directors International</strong> — sdicompanions.org, find a director outside your denomination</li>
              </ul>
            </div>
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1.05rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", marginTop: 0 }}>New Entry</h3>
              <textarea value={form.wound} onChange={e => setForm(f => ({ ...f, wound: e.target.value }))} placeholder="What happened, and what did it cost you?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.anchor} onChange={e => setForm(f => ({ ...f, anchor: e.target.value }))} placeholder="What, if anything, still feels true about God or Jesus?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.desire} onChange={e => setForm(f => ({ ...f, desire: e.target.value }))} placeholder="What do you still want — from God, from community, from your faith?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.wound && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>What happened:</strong> {e.wound}</p>}
                {e.anchor && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Anchor:</strong> {e.anchor}</p>}
                {e.desire && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Desire:</strong> {e.desire}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "3_-OEdC2uaY", title: "When Church Hurts", channel: "The Gospel Coalition", description: "An honest examination of what happens when the church fails its members and how the gospel speaks to institutional betrayal without dismissing the wound." },
              { videoId: "DShV4sG1LoE", title: "A Church Called Tov", channel: "Scot McKnight — Northern Seminary", description: "McKnight unpacks what distinguishes toxic church cultures from healthy ones, helping survivors name what happened and find a path forward." },
              { videoId: "PKyLYSfmTwI", title: "Healing After Spiritual Abuse", channel: "Dan Allender Center", description: "Dan Allender addresses the specific trauma of spiritual abuse — how authority and theology can be weaponized, and what healing requires." },
              { videoId: "ZGk1hl1nNrw", title: "Resilience and Compassion in Hard Times", channel: "Diane Langberg", description: "Langberg on the psychological and spiritual damage done by those who represent God when they harm rather than protect, and the long road to healing." },
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
