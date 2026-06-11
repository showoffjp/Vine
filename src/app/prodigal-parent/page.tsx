"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", AMBER = "#F59E0B", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Father Who Ran — the Posture of the Waiting Parent", verse: "Luke 15:20", text: "While he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son. The father in the parable does not chase the son into the far country. He lets him go. He watches and waits. He runs when the son returns. This is both a theology of parenting and a theology of God. The posture of the prodigal's parent is not pursuit or control — it is release without abandonment, watching without stalking, running when the son turns. The father's eye is always toward the horizon. He has not moved on; he has not given up. He has simply learned the discipline of the long wait, holding the tension between love that will not let go and love that will not force its way." },
  { title: "Faith Cannot Be Inherited — the Limits of What Parents Can Do", verse: "Prov 22:6", text: "Train up a child in the way he should go — and the assumption too often attached to this verse is that faithful training guarantees faithful outcomes. It does not. Faith is a gift of God, not a product of parenting technique. Godly parents can have children who walk away; the assumption that faith-departure proves parenting failure is not biblical — it is toxic. Eli's sons were corrupt despite a priestly father. Timothy's faith came from his mother and grandmother, not his father. The transmission of faith is ultimately God's work. The parent's responsibility is faithfulness, not outcome-control. Releasing the illusion of control is not resignation — it is the beginning of genuine intercession." },
  { title: "What You Say About Them Matters — Praying Their Identity, Not Their Failure", verse: "Luke 15:17", text: "The prodigal son came to himself — he remembered who he was. The parent who prays defeat — God, fix my rebellious child — is praying a different prayer than the parent who prays identity — God, remind my son of who he is in you. What we say about our absent children, in prayer and in conversation, matters more than we know. Speaking words of identity over absent children — calling them by what God says they are, not by what they are currently doing — is not denial. It is intercession. Keeping their name before God rather than their failures is the posture of the parent who believes that God is more committed to the child's return than the parent is." },
  { title: "The Long Wait — Sustaining Faith Through Years of No Change", verse: "Lam 3:25-26", text: "The Lord is good to those whose hope is in him, to the one who seeks him; it is good to wait quietly for the salvation of the Lord. Some parents wait for decades. The psalms of lament are the scriptural permission and vocabulary for this season — they name the grief, the confusion, and the unanswered prayer without resolving it prematurely. Habakkuk's declaration stands: though the fig tree does not bud, yet I will praise the Lord. The spiritual dangers of the extended wait are real: bitterness, bargaining, despair, giving up on God. The grace that sustains the parent who is in it for the long obedience is not optimism — it is a stubborn orientation toward the God who has not moved, even when the child has." },
  { title: "When They Come Back — Preparing for the Return and Reconciliation", verse: "Luke 15:22-24", text: "The prodigal who returns is not the same person who left. The parent who waited is not the same person who released. What reconciliation requires when the child returns is not a performance of instant restoration — it is listening before speaking, grieving together, rebuilding trust slowly. The temptation to perform the fatted-calf celebration before the relational work is done is real. So is the older brother's anger — the resentment of the faithful parent who has held things together while the prodigal was away. That anger is not wrong; it is human. But it must be named and brought to God rather than visited on the child who has just come home. The return is a beginning, not a resolution." },
];

const voices = [
  { name: "Ruth Bell Graham", role: "Prodigals and Those Who Love Them", quote: "You release them into the hands of God, and you pray without ceasing, and you do not stop loving them — and you learn that release is not the same as giving up. It is the most costly form of love: to hold someone in your heart while letting them go in your hands, and to trust the God who loves them more than you do.", bio: "Ruth Bell Graham, wife of Billy Graham, raised five children and experienced firsthand the grief of a prodigal. Her book Prodigals and Those Who Love Them gathers poetry, Scripture, and reflection from her own journals. It is one of the most honest and pastoral books written for parents in this season." },
  { name: "Henri Nouwen", role: "The Return of the Prodigal Son", quote: "Becoming the waiting father — or the welcoming father — is, I have come to believe, the deepest call of the Christian life. Not the excited younger son who has come home, not even the dutiful older son — but the father who has learned to stand at the edge of the road and to scan the horizon with a love that neither demands nor diminishes, that sees the beloved from a great way off and runs.", bio: "Henri Nouwen spent months meditating on Rembrandt's painting of the prodigal son, and his reflections produced one of the most beloved works of Christian spirituality in the twentieth century. His insight — that we are called to become the father, not merely to identify with one of the sons — reframes the entire story for parents in the season of waiting." },
  { name: "Mark Stibbe", role: "The Father You Never Had", quote: "The parents who wait for their prodigals need to be fathered themselves — by the Father who never abandons, never gives up, and never stops watching the road. What is wounded in us by our own earthly fathers is healed not by better parenting but by encounter with the father heart of God. From that healing, we can wait without bitterness and love without conditions.", bio: "Mark Stibbe is a British author and speaker who writes on the father heart of God and healing from father wounds. His work is particularly relevant to parents waiting for prodigals who carry their own wounds from their families of origin — recognizing that the capacity to wait well is often formed through the healing of our own father stories." },
];

const practices = [
  "The release prayer — specifically, verbally releasing your child to God — not once but as often as the anxiety returns, naming them and handing them back to the Father who loves them more than you do",
  "Keeping a prayer journal specifically for this child: prayers, Scriptures, moments of hope, dates when you sensed God moving — a record of faithfulness to look back on in the dark seasons",
  "Maintaining connection without applying pressure — staying in relationship without making every interaction about the departure or the return; being present without an agenda",
  "Building a community of parents in the same season — you are not alone, and the isolation of this grief is one of its most damaging dimensions; find the others",
  "Reading the prodigal son parable in Luke 15 monthly as a sustained spiritual practice — letting its different characters speak to you in different seasons, and letting yourself be found in the story",
];

const scriptures = [
  { verse: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him." },
  { verse: "Luke 15:11-13", text: "Jesus continued: There was a man who had two sons. The younger one said to his father, Father, give me my share of the estate. So he divided his property between them. Not long after that, the younger son got together all he had, set off for a distant country and there squandered his wealth in wild living." },
  { verse: "Prov 22:6", text: "Start children off on the way they should go, and even when they are old they will not turn from it." },
  { verse: "Lam 3:25-26", text: "The Lord is good to those whose hope is in him, to the one who seeks him; it is good to wait quietly for the salvation of the Lord." },
  { verse: "Hab 3:17-18", text: "Though the fig tree does not bud and there are no grapes on the vines, though the olive crop fails and the fields produce no food... yet I will rejoice in the Lord, I will be joyful in God my Savior." },
  { verse: "Ps 130:5", text: "I wait for the Lord, my whole being waits, and in his word I put my hope." },
];

const videos = [
  { id: "gYIGiHLDCKI", title: "The Parable of the Prodigal Son — Deep Study" },
  { id: "5hMMXOuJZVM", title: "Praying for a Prodigal Child" },
  { id: "6NWxBh4Yqsc", title: "How to Love a Child Who Has Walked Away from Faith" },
  { id: "cP2SEZUQ4uA", title: "The Waiting Father — Henri Nouwen on the Prodigal" },
];

type PPEntry = { id: string; date: string; child: string; prayer: string; trust: string };

export default function ProdigalParentPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PPEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_prodigalparent_entries") ?? "[]"); } catch { return []; }
  });
  const [jChild, setJChild] = useState("");
  const [jPrayer, setJPrayer] = useState("");
  const [jTrust, setJTrust] = useState("");

  useEffect(() => { localStorage.setItem("vine_prodigalparent_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jChild.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), child: jChild, prayer: jPrayer, trust: jTrust }, ...prev]);
    setJChild(""); setJPrayer(""); setJTrust("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Parenting &amp; Family Faith</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Waiting for the Prodigal</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Praying and waiting for a child who has walked away from faith — theology, practices, and community for the long season.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? AMBER : BORDER}`, background: tab === t.id ? AMBER + "22" : "transparent", color: tab === t.id ? AMBER : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: AMBER, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
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
                <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.65 }}>{p}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: AMBER, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${AMBER}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: AMBER, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Pray for Your Child</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to bring your child before God honestly and specifically.</p>
            {[
              { label: "Child — the child you are praying for", val: jChild, set: setJChild },
              { label: "Prayer — your current prayer for them", val: jPrayer, set: setJPrayer },
              { label: "Trust — what you are trusting God with in this season", val: jTrust, set: setJTrust },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: AMBER, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: AMBER }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: AMBER, fontWeight: 600 }}>Child:</span> {e.child}</p>
                      {e.prayer && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: AMBER, fontWeight: 600 }}>Prayer:</span> {e.prayer}</p>}
                      {e.trust && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: AMBER, fontWeight: 600 }}>Trust:</span> {e.trust}</p>}
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
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: AMBER }}>{v.title}</h3>
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
