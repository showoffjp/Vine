"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Calls Himself the Defender of Widows", verse: "Psalm 68:5", text: "A father to the fatherless, a defender of widows, is God in his holy dwelling. This is not a metaphor or a generalization — it is a declaration of divine identity. God's character is specifically shaped toward the widow. The woman who has lost her husband is not forgotten in the biblical vision; she is at the center of it. The specific loneliness of late-life widowhood is seen by a God who has named himself in relation to it." },
  { title: "Mourning Is Not Faithlessness", verse: "1 Thessalonians 4:13", text: "Brothers and sisters, we do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope. The text permits grief — it qualifies the kind of grief, not its existence. Christians grieve with hope, not without grief. The widow who weeps for her husband of 40 or 50 years is not acting outside of faith. She is acting within the full range of human experience that the Christian gospel holds and redeems." },
  { title: "The Body's Loneliness After a Lifetime of Companionship Is Real", verse: "Ruth 1:16-17", text: "Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God. Where you die I will die, and there I will be buried. Ruth's words were spoken into the specific desolation of a widow's world. The bond between Naomi and Ruth — two women navigating loss and late-life displacement — became one of the Bible's most celebrated relationships. God tends to the specific loneliness of those who have lost their lifelong companion." },
  { title: "Late Life Is Not a Postscript — It Is Still Story", verse: "Psalm 71:18", text: "Even when I am old and gray, do not forsake me, my God, till I declare your power to the next generation, your mighty acts to all who are to come. The psalmist in old age still has something to say and someone to say it to. Late-life widowhood is not the end of a story but the final act of one — and God is present in it, not merely watching from outside." },
  { title: "God Provides Through Community When the Household Is Reduced", verse: "Acts 2:44-45", text: "All the believers were together and had everything in common. They sold property and possessions to give to anyone who had need. The early church's economic sharing was specifically structured to meet the needs of the vulnerable — and widows were consistently among those named. The church's care for widows in Acts 6 was significant enough to require structural attention. Widows in late life are not a pastoral afterthought; they are a test of whether the church is what it claims to be." },
];

const voices = [
  { id: "v1", name: "Elisabeth Elliot", role: "Widowed three times, author of Suffering Is Never for Nothing, The Path of Loneliness", quote: "Loneliness is not a problem to be solved. It is a gift to be offered — the emptiness that creates the space for God to fill. I have been alone three times. And three times I found that he was enough.", bio: "Elisabeth Elliot's life included three profound experiences of widowhood, including the early death of her first husband Jim Elliot at the hands of the Auca people in 1956. Her writing on loneliness, suffering, and the faithfulness of God in loss has sustained millions of people in grief, and her specific attention to widowhood is theologically and pastorally rich." },
  { id: "v2", name: "Henri Nouwen", role: "Author of A Letter of Consolation, The Road to Daybreak, priest and spiritual director", quote: "Grief requires time. The mistake we make is treating grief as a problem with a solution rather than a journey with a destination.", bio: "Henri Nouwen wrote A Letter of Consolation to his father after his mother's death — a letter that became a meditation on grief, aging, and the slowly emerging goodness of loss. His work on loneliness and community speaks directly to older adults who have lost a spouse and find themselves at the intersection of grief and the approach of their own death." },
  { id: "v3", name: "Jerry Sittser", role: "Author of A Grace Disguised, lost wife, daughter, and mother in one accident", quote: "Loss does not diminish the soul — it can expand it. The soul, stretched by loss, never quite returns to its former size. Something larger inhabits it.", bio: "Jerry Sittser's A Grace Disguised, written after losing his wife, mother, and daughter in a single car accident, has become one of the most important Christian texts on grief. His reflections on how loss can deepen the soul rather than diminish it are particularly relevant for older widows and widowers who face late-life loss after long years of companionship." },
  { id: "v4", name: "Megan Devine", role: "Author of It's OK That You're Not OK, grief counselor", quote: "We do not need to fix grief. We need to be present to it, and to the person in it. The widow at 75 who has lost the person who knew her whole story needs presence, not problem-solving.", bio: "Megan Devine's work on grief has shaped pastoral and therapeutic approaches to loss across age groups. Her insistence that grief is not a pathology to be treated but a natural response to love that deserves witness is particularly important for older adults, who are often expected to accept loss with equanimity and may receive less community support than younger widows." },
];

const practices = [
  { icon: "🏘️", title: "Accept Help Without Shame", text: "Late-life widowhood often arrives with a cultural expectation that older adults are settled enough to cope. In reality, the loss of a lifelong companion at 70 or 80 is often more destabilizing than loss at 40 — the identity merger has been deeper and longer, the practical dependencies greater, and the peer community smaller. Accepting help from family, church, and community is not weakness; it is wisdom." },
  { icon: "📅", title: "Structure Your Days Deliberately", text: "After a lifetime of building days around a spouse, the collapse of that structure is disorienting. Creating intentional daily rhythms — a morning Scripture reading, a weekly lunch with a friend, a regular service commitment — provides external structure while internal equilibrium slowly rebuilds. Structure is not distraction; it is scaffolding." },
  { icon: "📖", title: "Read the Psalms at the Pace of Your Grief", text: "The 150 Psalms offer every emotional register of the grieving process — rage (Ps 109), desolation (Ps 88), trust (Ps 23), hope (Ps 121), gratitude (Ps 103). Reading one psalm slowly per day, sitting with its emotional content rather than moving quickly, gives language to experiences that otherwise remain wordless." },
  { icon: "🤝", title: "Connect With GriefShare or a Widow-Specific Support Group", text: "GriefShare (griefshare.org) runs grief support groups through churches nationwide and has specific resources for spousal loss. Many churches also have widow/widower ministries. The combination of peer understanding — speaking with others who have lost a spouse — and structured engagement with grief content accelerates healing in ways that general pastoral care often cannot." },
  { icon: "🏥", title: "Watch for Complicated Grief and Seek Clinical Help If It Appears", text: "Most grief follows a trajectory of intense early pain, gradually integrating into daily life over months and years. Complicated grief (also called prolonged grief disorder) does not follow this trajectory and is treatable. Signs include functional impairment lasting more than six months, persistent inability to accept the death, or feeling that life has no meaning without the deceased. If these are present, seek a therapist trained in complicated grief treatment." },
  { icon: "✉️", title: "Write Letters to Your Spouse", text: "Many grief therapists and spiritual directors recommend writing letters to the deceased as part of the integration process. This is not communication with the dead — it is the ongoing processing of a relationship that now exists in memory and in God's keeping. The letters can be read to a therapist, burned, buried, or kept private. The act of writing externalizes the internal conversation and makes it workable." },
];

const scriptures = [
  { verse: "Psalm 68:5", text: "A father to the fatherless, a defender of widows, is God in his holy dwelling." },
  { verse: "Ruth 1:16", text: "Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God." },
  { verse: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you." },
  { verse: "Psalm 73:26", text: "My flesh and my heart may fail, but God is the strength of my heart and my portion forever." },
  { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
];

type WidowEntry = { id: string; date: string; memory: string; gift: string; prayer: string };

export default function LateLifeWidowhoodPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<WidowEntry[]>([]);
  const [memory, setMemory] = useState(""), [gift, setGift] = useState(""), [prayer, setPrayer] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_latelifewidowhoodj_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!memory.trim()) return;
    const e: WidowEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), memory: memory.trim(), gift: gift.trim(), prayer: prayer.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_latelifewidowhoodj_entries", JSON.stringify(updated));
    setMemory(""); setGift(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_latelifewidowhoodj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];
  const inp: React.CSSProperties = { width: "100%", background: "#07070F", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" };

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: PURPLE, color: "#fff", borderRadius: 20, padding: "4px 16px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: 1 }}>PASTORAL CARE</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Late-Life Widowhood</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For those who have lost a lifelong companion in their later years — and for the churches that are called to be present in the long, quiet aftermath of that loss.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Support:</strong> 988 Lifeline (call/text 988) &nbsp;|&nbsp; GriefShare: griefshare.org &nbsp;|&nbsp; AARP Grief Support: aarp.org/grief</p>
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
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What memory of your spouse is with you most right now?</label>
              <textarea value={memory} onChange={e => setMemory(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="A small moment or a large one..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What gift did you receive through your years together that you still carry?</label>
              <textarea value={gift} onChange={e => setGift(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Something they gave you that remains..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What are you asking God for in this season?</label>
              <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Presence, peace, purpose, people..." />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: PURPLE }}>Memory:</strong> {e.memory}</p>
                {e.gift && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Gift:</strong> {e.gift}</p>}
                {e.prayer && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop on recovering lament as a faithful practice — the biblical tradition that gives older adults permission to name loss fully rather than performing acceptance." },
              { videoId: "4Eg_di-O8nM", title: "When Grief Feels Unbearable", channel: "Francis Chan", description: "Chan on sitting with grief that does not resolve quickly — relevant for anyone in the long aftermath of significant loss." },
              { videoId: "oNpTha80yyE", title: "The Sovereignty of God and Suffering", channel: "R.C. Sproul — Ligonier", description: "Sproul on God's sovereignty over loss and death — foundational theology for anyone asking where God is in the death of a spouse." },
              { videoId: "SqGRnlXplx0", title: "The Rest of God", channel: "Eugene Peterson — Regent College", description: "Eugene Peterson on Sabbath and rest as spiritual practices — particularly meaningful for older adults whose daily rhythms have been restructured by loss." },
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
  );
}
