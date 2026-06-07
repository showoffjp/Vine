"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Father Still Watches the Road",
    verse: "Luke 15:20",
    text: "In the parable of the prodigal son, the father — representing the parent — still runs when he sees the child coming from far off. He has not stopped watching. The posture of the waiting parent in Scripture is neither bitter pursuit nor cold withdrawal, but faithful, expectant love that has made peace with the waiting."
  },
  {
    title: "God Knows the Pain of a Child Who Leaves",
    verse: "Isaiah 1:2",
    text: "I have nurtured and brought up children, and they have rebelled against me. God speaks first as the aggrieved parent. Before any command or theology, he names the wound: I raised them and they left. Divine parenthood includes this grief. God does not approach the estranged parent as someone who cannot understand."
  },
  {
    title: "Grief and Hope Can Coexist",
    verse: "Lamentations 3:20-23",
    text: "My soul continually remembers it and is bowed down within me. But this I call to mind, and therefore I have hope — the steadfast love of the Lord never ceases. This is not a command to stop grieving. It is the movement of a soul that can grieve and remember God's faithfulness in the same breath. Both are true."
  },
  {
    title: "You Are Not Responsible for an Adult's Choices",
    verse: "Ezekiel 18:20",
    text: "The soul who sins shall die. The son shall not suffer for the iniquity of the father, nor the father suffer for the iniquity of the son. Whatever role your mistakes played in the estrangement — and most parents carry real guilt — you are not the only cause, and an adult child's choices are ultimately their own. Guilt does not require total ownership of another person's decision."
  },
  {
    title: "Prayer Is Not Passive — It Is the Most Real Thing",
    verse: "Romans 8:26",
    text: "The Spirit intercedes for us with groanings too deep for words. When you cannot reach your child, when words fail, when you don't know what to pray — the Spirit prays. Prayer for an estranged child is not giving up. It is handing them to the only One who can reach them."
  }
];

const voices = [
  {
    id: "v1",
    name: "Sheri McGregor",
    role: "Author, Done With The Crying; Estrangement expert",
    quote: "Parents of estranged adults often feel uniquely judged — as if the estrangement itself is proof of their failure. But estrangement is not a verdict on your worth as a parent. It is a relational rupture, and ruptures have many causes.",
    bio: "Sheri McGregor is a parent who experienced estrangement and became the leading researcher and author on the subject. Done With The Crying specifically addresses the guilt, grief, and social shame that estranged parents carry — and how to find a life again without abandoning hope."
  },
  {
    id: "v2",
    name: "Paul David Tripp",
    role: "Author, Parenting: 14 Gospel Principles; Speaker",
    quote: "Your children were never yours to control. They were entrusted to you to steward. The grief of losing them is real. The release of control was always required.",
    bio: "Paul David Tripp's theology of parenting is deeply grace-based and addresses parents' tendency to measure themselves by their children's outcomes. His framework helps estranged parents distinguish between genuine guilt that needs confession and false guilt that needs release."
  },
  {
    id: "v3",
    name: "Harriet Lerner",
    role: "Psychologist; Author, The Dance of Anger and Why Won't You Apologize",
    quote: "Estrangement is rarely about one event. It accumulates over time, and reconciliation rarely comes through pursuing — it more often comes through changing what you bring to the relationship.",
    bio: "Harriet Lerner's research on family systems and rupture gives estranged parents practical insight into how estrangement works and what, if anything, they can do to create conditions for reconciliation — without pursuing in ways that guarantee continued distance."
  },
  {
    id: "v4",
    name: "Henri Nouwen",
    role: "Author, The Return of the Prodigal Son",
    quote: "The father in the parable is not a passive father. He is a father who has grieved, who has not filled the child's place, who has remained at the window. His waiting is itself a form of love.",
    bio: "Henri Nouwen's meditation on Rembrandt's painting of the prodigal son is the deepest theological treatment of parental grief and love. His reading of the father — not as passive but as actively grieving and actively holding space — is transformative for estranged Christian parents."
  }
];

const practices = [
  {
    icon: "🤲",
    title: "Distinguish True Guilt From False Guilt",
    text: "True guilt requires confession and, where possible, repair. False guilt is the accusation that an adult child's choices are entirely your fault. With a therapist or spiritual director, work through what is genuinely yours to own and what belongs to your child's agency. Carrying both is crushing — and inaccurate."
  },
  {
    icon: "📝",
    title: "Write What You Would Say — Even If You Never Send It",
    text: "Unsent letters are a therapeutic practice with decades of evidence. Write what you would say if your child would listen — not to strategize reconciliation, but to process your own grief. The writing itself is not manipulation; it is care for your own soul."
  },
  {
    icon: "🚪",
    title: "Leave a Door Open Without Standing in the Doorway",
    text: "Actively pursuing an adult child who has requested distance typically increases the distance. The most you can often do is leave a consistent, non-pressuring signal that you remain open — a card on their birthday, a brief message once a year, an unchanged phone number. Then release the outcome."
  },
  {
    icon: "👥",
    title: "Find Community With Other Estranged Parents",
    text: "Estrangement carries a social stigma that isolates. Finding others who understand — online forums, support groups, or communities like those at rejectedparents.net — reduces shame and provides reality-testing from people who are not inside your situation."
  },
  {
    icon: "🌱",
    title: "Build a Life That Is Not on Pause",
    text: "Many estranged parents put their own lives on hold, waiting for reconciliation. This is understandable and also harmful. You are permitted to grieve while also living — cultivating relationships, pursuing meaning, allowing joy. A life on pause does not help your child and destroys you."
  },
  {
    icon: "🙏",
    title: "Pray the Psalms of Lament",
    text: "Psalms 6, 13, 22, 88 are written for grief that does not resolve quickly. Reading them aloud — as your own prayer — gives language to grief that has no easy words. They also remind you that this kind of grief has always been brought to God and that God has always received it."
  }
];

const scriptures = [
  { verse: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him." },
  { verse: "Isaiah 1:2", text: "I have nurtured and brought up children, and they have rebelled against me." },
  { verse: "Lamentations 3:21-23", text: "Yet this I call to mind and therefore I have hope: Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning." },
  { verse: "Jeremiah 31:16-17", text: "Restrain your voice from weeping and your eyes from tears, for your work will be rewarded, declares the Lord. They will return from the land of the enemy. So there is hope for your descendants." },
  { verse: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
  { verse: "Psalm 27:14", text: "Wait for the Lord; be strong and take heart and wait for the Lord." }
];

type EstrangementEntry = { id: string; date: string; grief: string; guilt: string; release: string };

export default function GriefEstrangementParentPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<EstrangementEntry[]>([]);
  const [grief, setGrief] = useState("");
  const [guilt, setGuilt] = useState("");
  const [release, setRelease] = useState("");
  const [expandedVoice, setExpandedVoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_griefestrangeparentj_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const entry: EstrangementEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), grief, guilt, release };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_griefestrangeparentj_entries", JSON.stringify(updated));
    setGrief(""); setGuilt(""); setRelease("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_griefestrangeparentj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, padding: "2rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ color: GREEN, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.5rem" }}>Family Estrangement</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.2 }}>Grieving an Estranged Child</h1>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: 600 }}>
            When your adult child has cut off contact. When you don't know why, or you know too well. When you carry the grief of a child who is alive but unreachable. When guilt and love and confusion weave together into something with no easy name. You are not alone in this — and God is not silent.
          </p>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${GREEN}` : "2px solid transparent", color: tab === t ? GREEN : MUTED, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize", whiteSpace: "nowrap", fontFamily: "Georgia, serif" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>

        {tab === "theology" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Theological foundations for parents carrying the grief and guilt of a child who has gone silent — and for the God who meets them in the waiting.</p>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontStyle: "italic", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Researchers, therapists, and theologians who understand estrangement from the parent's side.</p>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "0.75rem" }}>"{v.quote}"</p>
                <button onClick={() => setExpandedVoice(expandedVoice === v.id ? null : v.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.4rem 0.75rem", borderRadius: 4, cursor: "pointer", fontSize: "0.8rem" }}>{expandedVoice === v.id ? "Less" : "More"}</button>
                {expandedVoice === v.id && <p style={{ color: MUTED, lineHeight: 1.7, marginTop: "0.75rem" }}>{v.bio}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Spiritual and practical steps for the long, uncertain road of parental estrangement.</p>
            <div style={{ background: "#1a0d0d", border: "1px solid #5a2020", borderRadius: 8, padding: "1.25rem", marginBottom: "2rem" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "0.5rem" }}>Support Resources</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: TEXT }}>988 Suicide &amp; Crisis Lifeline</strong> — grief this sustained can become a mental health crisis.<br />
                GriefShare: <strong style={{ color: TEXT }}>griefshare.org</strong><br />
                Estranged parents support: <strong style={{ color: TEXT }}>rejectedparents.net</strong><br />
                Sheri McGregor's community: <strong style={{ color: TEXT }}>reclaimingmotherhood.com</strong>
              </p>
            </div>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Verses for parents who are waiting, grieving, and trusting a God who also knows what it is to have a wayward child.</p>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${GREEN}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>A private space for the grief and guilt that have nowhere easy to go. Entries stay on your device only.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.25rem", color: GREEN }}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What grief am I carrying about my child today?</label>
                <textarea value={grief} onChange={e => setGrief(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What guilt am I carrying — true or false — about my role?</label>
                <textarea value={guilt} onChange={e => setGuilt(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What am I releasing into God's hands today?</label>
                <textarea value={release} onChange={e => setRelease(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: 700 }}>Save Entry</button>
            </div>
            {entries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", fontStyle: "italic" }}>No entries yet. Your reflections will appear here.</p>
            ) : (
              entries.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "1rem" }}>{e.date}</div>
                  {e.grief && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>GRIEF</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.grief}</p></div>}
                  {e.guilt && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>GUILT</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.guilt}</p></div>}
                  {e.release && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>RELEASED</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.release}</p></div>}
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer", fontSize: "0.75rem", marginTop: "0.5rem" }}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Teaching on prodigal children, parental grief, and the God who waits with us.</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Grieving an Estranged Child: Faith and Survival</div>
              <VideoEmbed videoId="oNpTha80yyE" title="Grieving an Estranged Child: Faith and Survival" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>The Return of the Prodigal: Henri Nouwen's Teaching</div>
              <VideoEmbed videoId="4Eg_di-O8nM" title="The Return of the Prodigal: Henri Nouwen's Teaching" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Parenting and the Gospel: Paul Tripp</div>
              <VideoEmbed videoId="NnGBhG03g4M" title="Parenting and the Gospel: Paul Tripp" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>When the Waiting Is Long: Grief and Hope Together</div>
              <VideoEmbed videoId="7TBHqMqBmBo" title="When the Waiting Is Long: Grief and Hope Together" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
