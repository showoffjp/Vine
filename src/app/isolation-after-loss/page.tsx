"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Grief Changes Social Reality — God Knows This", verse: "Psalm 31:11-12", text: "Because of all my enemies, I am the utter contempt of my neighbors and an object of dread to my closest friends — those who see me on the street flee from me. I am forgotten as though I were dead. The Psalmist articulated what the bereaved know: grief alters relationships. Friends disappear. The social world reorganizes around the absence. Scripture is honest about this." },
  { title: "Jesus Grieved Publicly and Drew Others Into His Grief", verse: "John 11:33-35", text: "When Jesus therefore saw her weeping, and the Jews also weeping which came with her, he groaned in the spirit, and was troubled... Jesus wept. Jesus did not grieve alone, and he did not hide from others who were grieving. His presence with the mourning was an incarnation of divine solidarity." },
  { title: "The Community of Believers Is Designed to Bear Weight Together", verse: "Romans 12:15", text: "Mourn with those who mourn. This is a command, not a suggestion. The church was designed specifically to do what the broader social world fails to do: stay present with grief, bear the weight with the bereaved, not disappear when loss becomes prolonged or complicated." },
  { title: "Elijah in Isolation — God Pursues the Lonely Griever", verse: "1 Kings 19:4-7", text: "Elijah sat down under a juniper tree and asked that he might die. He was alone, depleted, and done. God did not rebuke him. He sent an angel who touched him twice, fed him, and said: the journey is too great for you. God pursues those who have retreated in grief." },
  { title: "The Resurrection Makes Connection Permanent", verse: "1 Thessalonians 4:13-14", text: "Brothers and sisters, we do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope. Grief is real and loss is real. But resurrection means the separation is not final. Connection lost to death is not the last word." },
];

const voices = [
  { id: "v1", name: "C.S. Lewis", role: "Author, A Grief Observed", quote: "Grief is like a long valley, a winding valley where any bend may reveal a totally new landscape.", bio: "Lewis wrote candidly about how his wife's death transformed his social world — how people avoided him, how he avoided them, and how grief creates a peculiar isolation even in community. His honest witness has helped millions name what they are experiencing." },
  { id: "v2", name: "Nicholas Wolterstorff", role: "Author, Lament for a Son", quote: "Will I ever again be the same person? The wound is always there. But slowly my life is being rebuilt around the wound.", bio: "After losing his son Eric to a climbing accident, Wolterstorff wrote a philosophical and theological reflection on grief that names specifically how loss isolates — how the bereaved inhabit a different world than those who have not suffered the same loss." },
  { id: "v3", name: "Megan Devine", role: "Author, It's OK That You're Not OK", quote: "Some things cannot be fixed. They can only be carried. Your loss is real. Your grief is real. And it deserves to be witnessed.", bio: "Devine's work pushes back against the grief-support industry's attempt to 'fix' grief, instead arguing that what the bereaved need is not solutions but presence — someone willing to sit with them in the unsolvable reality." },
  { id: "v4", name: "Jerry Sittser", role: "Author, A Grace Disguised", quote: "I did not get over the loss. I got around it and found a way to keep living — carrying it with me into a larger, not smaller, life.", bio: "Sittser lost his wife, daughter, and mother in a single car accident. His account of rebuilding community after catastrophic loss addresses the specific isolation that comes when grief exceeds what most relationships can hold." },
];

const practices = [
  { icon: "🗣️", title: "Name the Isolation, Do Not Accept It Silently", text: "Many bereaved people disappear from social life because they do not want to burden others, or because others have pulled back. Name what is happening — to a pastor, counselor, or trusted person. The isolation is real, it is common, and it can be broken if it is named." },
  { icon: "📞", title: "Contact One Person This Week — Not to Talk About Grief, Just to Connect", text: "Loss can make people feel they have become their grief, and that the only possible conversation is about the loss. Try contacting someone simply to be in the world again: a walk, a meal, a movie, a task shared. Connection does not require processing grief out loud." },
  { icon: "🏘️", title: "Find a Grief Group Where Others Understand", text: "The isolation of grief is partly because most of your social world cannot understand. A grief support group — GriefShare, Compassionate Friends, or a church-based group — puts you with people who have been in the same valley. You do not have to explain yourself there." },
  { icon: "📖", title: "Read Psalms of Desolation and Corporate Lament", text: "Psalms 22, 31, 88, and the book of Lamentations were written to be prayed communally. Even if you feel alone, you are entering the prayer of millions who have stood in the same darkness and cried the same words." },
  { icon: "🕯️", title: "Create a Small Ritual of Remembrance", text: "Isolation after loss is often intensified by the sense that the lost person is being forgotten. A weekly candle, a journal entry, a regular walk to a place they loved — these anchor grief and honor the lost person in a way that does not require others to participate." },
  { icon: "🧠", title: "Consider Grief Counseling", text: "If isolation has become prolonged and is affecting function, a therapist who specializes in grief is not a sign of weakness. It is the recognition that this weight is real and that professional support can make the journey survivable." },
];

const scriptures = [
  { verse: "Psalm 25:16", text: "Turn to me and be gracious to me, for I am lonely and afflicted." },
  { verse: "Lamentations 1:2", text: "Bitterly she weeps at night, tears are on her cheeks. Among all her lovers there is no one to comfort her. All her friends have betrayed her; they have become her enemies." },
  { verse: "John 11:35", text: "Jesus wept." },
  { verse: "Romans 12:15", text: "Rejoice with those who rejoice; mourn with those who mourn." },
  { verse: "Psalm 68:6", text: "God sets the lonely in families, he leads out the prisoners with singing." },
  { verse: "1 Thessalonians 4:13", text: "Brothers and sisters, we do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope." },
];

type IsolationEntry = { id: string; date: string; loss: string; isolation: string; connection: string };

export default function IsolationAfterLossPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<IsolationEntry[]>([]);
  const [form, setForm] = useState({ loss: "", isolation: "", connection: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_isolationafterlossj_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.loss.trim()) return;
    const e: IsolationEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_isolationafterlossj_entries", JSON.stringify(updated));
    setForm({ loss: "", isolation: "", connection: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_isolationafterlossj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Grief and Loss</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>The Isolation That Follows Loss</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>When someone dies — or when a significant loss reshapes your world — the social isolation that follows is not weakness or failure. It is one of grief's most painful dimensions. People pull back, relationships change, and you are left in a different world than others occupy. This page is for that place.</p>

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
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", marginTop: 0 }}>Support Resources</h3>
              <ul style={{ color: MUTED, lineHeight: 1.9, margin: 0, paddingLeft: "1.25rem" }}>
                <li><strong style={{ color: TEXT }}>GriefShare</strong> — griefshare.org, find a local group</li>
                <li><strong style={{ color: TEXT }}>The Compassionate Friends</strong> — compassionatefriends.org (child loss)</li>
                <li><strong style={{ color: TEXT }}>988 Lifeline</strong> — if grief has become a mental health crisis</li>
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
              <textarea value={form.loss} onChange={e => setForm(f => ({ ...f, loss: e.target.value }))} placeholder="What have you lost, and when?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.isolation} onChange={e => setForm(f => ({ ...f, isolation: e.target.value }))} placeholder="How has the isolation been showing up — in relationships, in routine, in yourself?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.connection} onChange={e => setForm(f => ({ ...f, connection: e.target.value }))} placeholder="One small move toward connection you can make this week" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.loss && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Loss:</strong> {e.loss}</p>}
                {e.isolation && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Isolation:</strong> {e.isolation}</p>}
                {e.connection && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Connection:</strong> {e.connection}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop on the biblical practice of lament — how to bring grief and isolation honestly to God rather than suppressing it or pretending it away." },
              { videoId: "4Eg_di-O8nM", title: "When Grief Feels Unbearable", channel: "Francis Chan", description: "Chan addresses the kind of grief that disconnects us from community and from God, and what faithfulness looks like when loss is overwhelming." },
              { videoId: "FV0Kb14TnPU", title: "Grieving a Miscarriage", channel: "The Gospel Coalition", description: "Mark Vroegop on grief that others do not always acknowledge or understand — how to lament publicly when social support is lacking." },
              { videoId: "oNpTha80yyE", title: "The Sovereignty of God in Suffering", channel: "R.C. Sproul — Ligonier", description: "Sproul on how trust in God's sovereign character can anchor us in grief's isolation when we cannot yet feel his presence or see his purposes." },
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
