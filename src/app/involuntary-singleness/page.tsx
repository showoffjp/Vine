"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Desire for Marriage Is Not Sin — Its Unfulfillment Is Not Punishment", verse: "Proverbs 13:12", text: "Hope deferred makes the heart sick, but a longing fulfilled is a tree of life. The longing for partnership is not a spiritual deficiency. It is named honestly in Scripture as something that, when deferred, causes genuine pain. God does not rebuke the sick heart — he names it as real." },
  { title: "Jesus Was Unmarried and Fully Human", verse: "Hebrews 4:15", text: "For we do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are — yet he did not sin. Jesus was fully human and unmarried. Whatever aloneness, loneliness, or longing he experienced was real. He does not understand involuntary singleness from a distance." },
  { title: "Singleness Is Not a Lesser Life — Paul Called It a Gift", verse: "1 Corinthians 7:7", text: "I wish that all of you were as I am. But each of you has your own gift from God; one has this gift, another has that. Paul calls singleness a charisma — a gift from God. This is not consolation language. It is a genuine theological statement about a way of life with specific advantages and freedoms that marriage does not offer." },
  { title: "The Church Is Your Primary Family — This Changes What Singleness Means", verse: "Mark 10:29-30", text: "No one who has left home or brothers or sisters or mother or father or children or fields for me and the gospel will fail to receive a hundred times as much in this present age: homes, brothers, sisters, mothers, children and fields. The new family of God is the primary family of the Christian. When the church embodies this, singleness is less isolated." },
  { title: "Desire Can Be Honored While Waiting", verse: "Psalm 37:4", text: "Take delight in the Lord, and he will give you the desires of your heart. This is not a vending machine promise — it is a relational one. Delight in God transforms desires, clarifies them, and does not require their suppression. The desire for marriage can be brought to God honestly, with both hope and surrender." },
];

const voices = [
  { id: "v1", name: "Wesley Hill", role: "Author, Washed and Waiting", quote: "The longing for intimacy and love is not cured by sexuality. It is part of what it means to be human — and Christ meets it at a deeper level than marriage can.", bio: "Hill, a gay celibate Christian, writes with unusual depth about the experience of involuntary singleness — including the specific grief of a life structured around celibacy rather than marriage, and what Christian community can actually provide." },
  { id: "v2", name: "Sam Allberry", role: "Author, 7 Myths About Singleness", quote: "The church has functionally taught that singleness is a problem to be solved and marriage is the solution. The New Testament taught the opposite.", bio: "Allberry identifies how evangelical church culture has inadvertently communicated that marriage is normative and singleness is deficient, and how that distorts both the experience of unmarried people and the church's theology." },
  { id: "v3", name: "Rosaria Butterfield", role: "Author, The Gospel Comes with a House Key", quote: "What the single person needs is not a spouse — though that desire is real. What they need is radical hospitality from the church that treats them as family, not as a project.", bio: "Butterfield argues that Christian hospitality — practiced with genuine cost and genuine intimacy — is the community answer to involuntary singleness, and that its absence is a failure of the church before it is a failure of the single person." },
  { id: "v4", name: "Jennie Allen", role: "Author, Find Your People", quote: "The loneliness of involuntary singleness is real. But it is also an invitation to a deeper kind of connection — the kind that requires courage to seek rather than waiting for it to arrive.", bio: "Allen addresses how single adults in the church can build genuine community rather than accepting the peripheral role that church culture sometimes assigns to those who are unmarried." },
];

const practices = [
  { icon: "🏘️", title: "Demand More of Your Church Community", text: "The church has often defaulted to programming for married couples and families, leaving single adults on the margins. You have the right to ask for what the church owes you: genuine friendship, shared meals, inclusion in family life, not just a singles group. Ask specifically. Pursue specifically." },
  { icon: "🤝", title: "Cultivate Deep Friendships, Not Just Acquaintances", text: "The cultural pressure to reserve depth for a romantic partner produces shallow friendships. Invest in friendships with the depth and commitment that your culture reserves for marriage. Name what you need — continuity, honesty, physical presence — and seek it from friends." },
  { icon: "📖", title: "Read 1 Corinthians 7 Carefully", text: "Paul's theology of singleness is not consolation — it is genuine. Singleness allows undivided attention to God, freedom from the particular anxieties of marriage, and mobility in service. Reading this carefully does not make the longing disappear. It provides a theological frame that is honest about the gift and the cost." },
  { icon: "🙏", title: "Bring the Desire to God Without Editing It", text: "Many single Christians pray for acceptance of their singleness rather than for the marriage they want. Bring the actual desire — specifically, honestly — and then surrender it to God's timing and will. Editing the prayer shortchanges both the honesty and the trust." },
  { icon: "🌱", title: "Build a Life That Is Full Now, Not When", text: "Building a full life — friendships, community, work, vocation, practices — while unmarried is not giving up on marriage. It is refusing to put life on hold for something that may or may not arrive on your timeline. The person who has built a full life is better prepared for marriage and better sustained in singleness." },
  { icon: "📚", title: "Read the Single Christians Who Have Gone Before", text: "Amy Carmichael, Corrie ten Boom, Henri Nouwen, Wesley Hill, Sam Allberry — a long tradition of single Christians who have found fullness in lives without marriage. Their accounts resist the cultural narrative that a life without a partner is incomplete." },
];

const scriptures = [
  { verse: "1 Corinthians 7:32-34", text: "I would like you to be free from concern. An unmarried man is concerned about the Lord's affairs — how he can please the Lord. But a married man is concerned about the affairs of this world — how he can please his wife — and his interests are divided." },
  { verse: "Isaiah 56:5", text: "To them I will give within my temple and its walls a memorial and a name better than sons and daughters; I will give them an everlasting name that will endure forever." },
  { verse: "Psalm 68:6", text: "God sets the lonely in families, he leads out the prisoners with singing." },
  { verse: "Matthew 19:12", text: "The one who can accept this should accept it." },
  { verse: "Hebrews 13:5", text: "Never will I leave you; never will I forsake you." },
  { verse: "Proverbs 13:12", text: "Hope deferred makes the heart sick, but a longing fulfilled is a tree of life." },
];

type SinglenessEntry = { id: string; date: string; desire: string; gift: string; community: string };

export default function InvoluntarySinglenessPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SinglenessEntry[]>([]);
  const [form, setForm] = useState({ desire: "", gift: "", community: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_involuntarysinglenessj_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.desire.trim()) return;
    const e: SinglenessEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_involuntarysinglenessj_entries", JSON.stringify(updated));
    setForm({ desire: "", gift: "", community: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_involuntarysinglenessj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Singleness and Community</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Involuntary Singleness</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>Not everyone who is single chose it. For those who want marriage and have not found it — in their 30s, 40s, 50s, or beyond — involuntary singleness carries a specific grief that the church often handles poorly. This page takes that grief seriously and asks what Scripture actually offers.</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{item.title}</h3>
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
                  <span style={{ color: PURPLE, fontWeight: 800, fontSize: "1rem" }}>{v.name}</span>
                  <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{v.role}</span>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{v.quote}</blockquote>
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
                  <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem", marginTop: 0 }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1.05rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", marginTop: 0 }}>New Entry</h3>
              <textarea value={form.desire} onChange={e => setForm(f => ({ ...f, desire: e.target.value }))} placeholder="What is the honest desire of your heart — without editing it for acceptability?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.gift} onChange={e => setForm(f => ({ ...f, gift: e.target.value }))} placeholder="What has your singleness made possible that marriage would not?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.community} onChange={e => setForm(f => ({ ...f, community: e.target.value }))} placeholder="What does your community look like, and what do you need more of?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.desire && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Desire:</strong> {e.desire}</p>}
                {e.gift && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Gift:</strong> {e.gift}</p>}
                {e.community && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Community:</strong> {e.community}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "mC-zw0zCCtg", title: "Praying Our Fears", channel: "Tim Keller", description: "Keller on bringing our deepest fears and longings — including the fear that the life we want will not come — honestly to God in prayer." },
              { videoId: "eBl7gT7gQ6g", title: "Emotionally Healthy Spirituality", channel: "Peter Scazzero", description: "Scazzero on the deep formation work that produces contentment — not as suppression of desire but as genuine rootedness in God's presence." },
              { videoId: "GGCF3OPWN14", title: "The Upside-Down Kingdom", channel: "Tim Keller", description: "Keller on how Jesus inverts the world's metrics of a good life — including the assumption that a partnered life is necessarily fuller than an unmarried one." },
              { videoId: "t6L-F2emwUc", title: "Joy That Produces Radical Obedience", channel: "Desiring God", description: "Piper on the kind of joy that can sustain a life organized around God rather than around the fulfillment of every desire — including the desire for marriage." },
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
