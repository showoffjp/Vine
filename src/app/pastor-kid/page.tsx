"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "You Did Not Choose This Identity", verse: "Psalm 131:1", text: "My heart is not lifted up; my eyes are not raised too high; I do not occupy myself with things too great and too marvelous for me. Growing up as a pastor's child means inheriting a public identity you did not choose. The pressure to perform faith, to be perpetually well-behaved, to represent the church — this was never part of the gospel. Jesus did not invite Peter's children to ministry by inheritance. Each person's faith is their own, received on their own terms, not through proximity to ordained parents." },
  { title: "God Is Not Your Parent's Employee", verse: "Psalm 27:10", text: "Though my father and mother forsake me, the Lord will receive me. Children of ministers sometimes experience a strange inversion: God seems more like a professional context than a personal refuge. Ministry busyness can leave PKs feeling that they shared their parent with the entire congregation and won no one. But the God your parent served was, first, your parent's own Father — and yours. He is not a vocational construct. He is the one who will receive you when everyone else is occupied." },
  { title: "Inherited Faith Is Not Faith", verse: "John 1:12-13", text: "Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God — children born not of natural descent, nor of human decision or a husband's will, but born of God. You cannot be born a Christian by being born into a Christian household, or a ministry household. Faith is always personal, always a response to grace, always received individually. A PK who finds faith genuinely is a first-generation believer, regardless of family lineage." },
  { title: "The Glass House Is a Specific Suffering", verse: "Lamentations 3:1", text: "I am the man who has seen affliction by the rod of the Lord's wrath. Not all suffering is the same. The pastor's kid experience has distinctive features: public scrutiny of private life, performing normalcy at church while navigating dysfunction at home, watching hypocrisy, absorbing your parent's anxiety about congregational opinion. Lament literature names particular suffering without universalizing it. Your experience is real, and it is yours to name." },
  { title: "Deconstruction After Ministry Childhood Is Common, Not Shameful", verse: "Jeremiah 29:13", text: "You will seek me and find me when you seek me with all your heart. Many PKs go through a period of questioning, deconstructing, or walking away from the faith of their upbringing. This is not spiritual failure — it is often the necessary dismantling of inherited religion to make space for owned faith. God's promise is to those who seek with their whole heart. The seeking — even when it looks like questioning — can be the beginning of the most genuine encounter with God in a PK's story." },
];

const voices = [
  { id: "v1", name: "Paul David Tripp", role: "Author, Pastoral Ministry Expert", quote: "The dangerous thing about ministry is that you can lose your soul to it. The pastor's family is not exempt from this danger — they can be the first casualty of a ministry that became an idol.", bio: "Paul David Tripp is the author of Dangerous Calling, which addresses the unique spiritual hazards of pastoral ministry. His work speaks directly to ministry families — the ways ministry can crowd out genuine personal faith, how congregational expectations become a toxic environment for children, and what healthy pastoral family life requires." },
  { id: "v2", name: "Barnabas Piper", role: "Author, PK", quote: "I grew up knowing everything about God and nothing about him. Ministry knowledge is not the same as a relationship — and I had to discover that distinction the hard way.", bio: "Barnabas Piper is the son of John Piper and the author of The Pastor's Kid: Finding Your Own Faith and Identity. His memoir navigates the experience of growing up in a ministry household with theological transparency and emotional honesty — addressing performance pressure, identity confusion, inherited versus owned faith, and the painful process of finding God for yourself." },
  { id: "v3", name: "Ruth Tucker", role: "Author, Former Professor", quote: "The children of ministers carry a burden no one asked them to carry — and the church rarely acknowledges it, let alone provides support for it.", bio: "Ruth Tucker is the author of Left Behind in a Megachurch World and other works on ministry family dynamics. She writes from both academic and personal experience about the ways institutional church life shapes — and sometimes damages — the children of ministry workers, and what genuine pastoral care for these families requires." },
  { id: "v4", name: "Rachel Held Evans", role: "Late Author, Speaker", quote: "You can love the church and be wounded by it. You can believe and doubt simultaneously. These are not signs of weak faith — they are signs of honest faith.", bio: "Rachel Held Evans grew up in a ministry-adjacent household and wrote extensively about doubt, deconstruction, and re-engagement with Christian faith. Her books A Faith of Her Own and Searching for Sunday speak to the experience of people for whom inherited Christianity collapsed and who are slowly rebuilding something more genuinely their own." },
];

const practices = [
  { icon: "🔓", title: "Separate Your Faith from Your Parent's Role", text: "Your relationship with God is entirely distinct from your parent's vocation. One concrete practice: identify the difference between things you believe because you've experienced them yourself versus things you've always said because they were expected. This is not deconstruction — it is honest self-examination." },
  { icon: "📖", title: "Read Scripture for Yourself, Not Professionally", text: "PKs often grow up hearing Scripture in a ministerial key — as sermon material, as teaching content. Try reading it slowly, privately, as a letter addressed to you personally, with no performance goal. The difference can be significant." },
  { icon: "🤝", title: "Find Other PKs", text: "The experience is distinctive enough that PK-specific community provides something general ministry community cannot. Online PK communities, PK-specific retreats, and informal conversations with others who grew up in ministry households can provide powerful normalization and shared language." },
  { icon: "💬", title: "Name the Grief Without Apologizing for It", text: "Grieving what was lost or never present in ministry childhood — privacy, a parent's undivided attention, a normal peer experience, freedom from performance — is legitimate grief. You do not need to preface it with 'I know my parent did a lot of good.' The grief and the gratitude can both be true." },
  { icon: "🏥", title: "Consider Counseling Specifically for Ministry Family Dynamics", text: "Therapists familiar with ministry family systems (and their unique features: lack of privacy, congregational transference onto PK, financial stress, frequent relocation) can provide care that general counseling may miss. The Institute for Care of Ministers' Families and similar organizations may have referrals." },
  { icon: "🙏", title: "Explore What Prayer Looks Like When No One Is Watching", text: "For many PKs, prayer has always been performed. Discovering what you actually say when no one is measuring it — including silence, complaint, honesty — can be the beginning of a genuine prayer life." },
];

const scriptures = [
  { verse: "Jeremiah 29:13", text: "You will seek me and find me when you seek me with all your heart." },
  { verse: "Psalm 27:10", text: "Though my father and mother forsake me, the Lord will receive me." },
  { verse: "John 1:12", text: "Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God." },
  { verse: "Lamentations 3:31-32", text: "For no one is cast off by the Lord forever. Though he brings grief, he will show compassion, so great is his unfailing love." },
  { verse: "Psalm 131:1-2", text: "My heart is not lifted up; my eyes are not raised too high... But I have calmed and quieted myself, I am like a weaned child with its mother; like a weaned child I am content." },
];

type PKEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function PastorKidPage() {
  const [tab, setTab] = useState("theology");
  const [pkJournal, setPkJournal] = useState<PKEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setPkJournal(JSON.parse(localStorage.getItem("vine_pastorkidj_entries") ?? "[]")); } catch { setPkJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: PKEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...pkJournal];
    setPkJournal(updated);
    localStorage.setItem("vine_pastorkidj_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = pkJournal.filter(e => e.id !== id);
    setPkJournal(updated);
    localStorage.setItem("vine_pastorkidj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>⛪</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Pastor's Kids</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>Growing up in the glass house — finding your own faith when it came pre-packaged.</p>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", padding: "1rem", overflowX: "auto", justifyContent: "center", flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
        ))}
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" }}>
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.3rem", textTransform: "uppercase" }}>{t.verse}</p>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem", color: TEXT }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "1rem", fontSize: "0.95rem" }}>"{v.quote}"</p>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{v.name}</p>
                <p style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ fontWeight: 700, color: TEXT, marginBottom: "0.35rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, lineHeight: 1.65, margin: 0, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", borderLeft: `4px solid ${PURPLE}` }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, color: TEXT, marginBottom: "1rem", fontSize: "1rem" }}>Private Journal</h3>
              <textarea placeholder="What did it feel like growing up as a ministry kid? What was hardest?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What do I actually believe about God when no one is watching?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="One thing I want to own about my faith — not inherited, but mine:" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {pkJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{e.feeling}</p>}
                {e.truth && <p style={{ color: MUTED, fontStyle: "italic", marginBottom: "0.4rem", fontSize: "0.88rem" }}>{e.truth}</p>}
                {e.step && <p style={{ color: PURPLE, fontSize: "0.85rem", margin: 0 }}>My own: {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "DFApBaFl5hM", title: "Ministry Burnout: When Calling Becomes Consuming", channel: "The Gospel Coalition", description: "A candid discussion of how ministry can become all-consuming — essential viewing for PKs who watched their parent's calling crowd out family life." },
              { videoId: "PKyLYSfmTwI", title: "Healing After Spiritual Abuse", channel: "The Allender Center", description: "Dan Allender on recovering from spiritual harm — including harm experienced in ministry environments where the institution was prioritized over people." },
              { videoId: "3_-OEdC2uaY", title: "When Church Hurts", channel: "The Gospel Coalition", description: "A panel on how churches fail people — a framework for PKs processing wounds experienced in and around ministry contexts." },
              { videoId: "eBl7gT7gQ6g", title: "Emotionally Healthy Spirituality", channel: "Peter Scazzero", description: "Scazzero on how inherited religion, emotional immaturity, and family systems shape (and limit) genuine spiritual formation — especially relevant for those raised in ministry households." },
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
      <Footer />
    </>
  );
}
