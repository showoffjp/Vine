"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The First Estrangement Was Between Brothers",
    verse: "Genesis 4:8-9",
    text: "Cain rose up against his brother Abel and killed him. Then the Lord said to Cain, 'Where is your brother Abel?' The rupture between siblings is the oldest rupture in Scripture — not a modern dysfunction but the fundamental fracture of the fallen world. God asks where your brother is because God cares about what has been broken between you."
  },
  {
    title: "Joseph and His Brothers: Estrangement That Had a Reason",
    verse: "Genesis 37:4",
    text: "When his brothers saw that their father loved him more than any of them, they hated him and could not speak a kind word to him. Family favoritism, injustice, and genuine harm cause estrangement. Joseph's estrangement from his brothers was not invented — it was the product of real injury. This does not make it less painful. It makes it more true."
  },
  {
    title: "Reconciliation Is a Gift, Not a Command Issued on a Deadline",
    verse: "Matthew 18:15",
    text: "If your brother or sister sins against you, go and show them their fault, just between the two of you. The process Jesus describes for restoring a relationship assumes that restoration is the goal — but also that it requires truth-telling, accountability, and the possibility that it may not succeed. Reconciliation cannot be rushed or forced."
  },
  {
    title: "The Grief of a Living Loss",
    verse: "Lamentations 3:48-49",
    text: "Streams of tears flow from my eyes because my people are destroyed. My eyes will flow unceasingly, without relief. Estrangement from a sibling is a living loss — the person is alive but the relationship is dead or dying. This specific grief — mourning someone who still exists — is legitimate and has its own weight."
  },
  {
    title: "You Cannot Control the Outcome",
    verse: "Romans 12:18",
    text: "If it is possible, as far as it depends on you, live at peace with everyone. Paul acknowledges what we often miss: reconciliation depends on both parties. You can only control your own side. Living at peace with everyone is the goal — not achieving peace with everyone regardless of their willingness. Do what you can. Release what you cannot."
  }
];

const voices = [
  {
    id: "v1",
    name: "Harriet Lerner",
    role: "Psychologist; Author, The Dance of Anger and The Dance of Connection",
    quote: "Sibling estrangement is often more complex than parental estrangement because the relationship was formed in the same wound. Two people shaped by the same family system often wound each other in ways shaped by what they inherited.",
    bio: "Harriet Lerner's work on family systems is essential for understanding sibling estrangement — how dynamics formed in childhood continue to operate in adult sibling relationships, and how the quest for change in one relationship often requires examining the larger system."
  },
  {
    id: "v2",
    name: "Dan Allender",
    role: "Founder, The Allender Center; Author, To Be Told",
    quote: "Our family stories — the ones we inherited, the ones we were assigned, the ones we wrote — are the terrain where our deepest wounds and deepest healing happen. Sibling estrangement is always part of a larger story.",
    bio: "Dan Allender's work on family narrative and healing helps people understand sibling estrangement as part of a larger story rather than an isolated rupture. His approach invites honest examination of the family system that produced the rupture."
  },
  {
    id: "v3",
    name: "Paul David Tripp",
    role: "Author, Relationships: A Mess Worth Making",
    quote: "Every relationship rupture is a theology lesson. The question is always: What does this reveal about us, about our need, and about our God? The estrangement itself is not the last word.",
    bio: "Paul David Tripp's theology of relationships addresses rupture and reconciliation with both gospel depth and practical wisdom. He is useful for Christians trying to understand what faithfulness looks like toward an estranged sibling — both the limits and the ongoing invitation."
  },
  {
    id: "v4",
    name: "Henri Nouwen",
    role: "Author, The Return of the Prodigal Son; Spiritual director",
    quote: "In Rembrandt's painting, both sons are lost. One leaves home and one stays while remaining inwardly far away. The elder son's estrangement is as real as the younger's — it just looks more respectable.",
    bio: "Henri Nouwen's reading of the prodigal son parable extends to sibling estrangement: sometimes the one who stayed and the one who left have both drifted in different directions from the same father. His meditation opens the possibility of return from multiple starting points."
  }
];

const practices = [
  {
    icon: "🔍",
    title: "Understand Your Own Contribution First",
    text: "Before analyzing your sibling's failures, work with a therapist to understand your own role in the dynamic. Not because the estrangement is your fault — but because you can only change yourself. The patterns formed in childhood often operate invisibly until they are named."
  },
  {
    icon: "📝",
    title: "Write the Honest Letter — Even If You Don't Send It",
    text: "Write what you would say to your sibling if the relationship were safe enough to speak honestly. What grievances? What grief? What longing for repair? The act of articulating it honestly (for yourself) often clarifies what is worth pursuing and what needs to be released."
  },
  {
    icon: "🚪",
    title: "Leave the Door Ajar Without Standing in It",
    text: "If you want reconciliation, signal that consistently and without pressure — a brief message at significant moments, an unchanged contact. Then stop pursuing. People who feel chased tend to run. People who feel waited for sometimes return."
  },
  {
    icon: "⚖️",
    title: "Distinguish Forgiveness From Reconciliation",
    text: "Forgiveness is a unilateral act of releasing bitterness and the right to revenge. It does not require your sibling's participation or awareness. Reconciliation is bilateral — it requires both parties to change. You can fully forgive without reconciling. The two must not be confused."
  },
  {
    icon: "👥",
    title: "Do Not Triangulate Through Parents or Other Siblings",
    text: "Using parents or other siblings as messengers, mediators, or informants typically makes estrangement worse. It draws others into the conflict and undermines trust. If you want to address the estrangement, address it directly — or not at all."
  },
  {
    icon: "🙏",
    title: "Grieve the Relationship You Wanted",
    text: "Many estrangements involve grieving not just the relationship that existed but the relationship you hoped for — the sibling who would be your friend, your ally, your witness through life. That grief is real. Give it a name and bring it to God."
  }
];

const scriptures = [
  { verse: "Romans 12:18", text: "If it is possible, as far as it depends on you, live at peace with everyone." },
  { verse: "Genesis 45:14-15", text: "Then he threw his arms around his brother Benjamin and wept, and Benjamin embraced him, weeping. And he kissed all his brothers and wept over them." },
  { verse: "Matthew 18:15", text: "If your brother or sister sins against you, go and show them their fault, just between the two of you. If they listen to you, you have won them over." },
  { verse: "Lamentations 3:48-49", text: "Streams of tears flow from my eyes because my people are destroyed. My eyes will flow unceasingly, without relief." },
  { verse: "Colossians 3:13", text: "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you." },
  { verse: "Psalm 133:1", text: "How good and pleasant it is when God's people live together in unity!" }
];

type SiblingEntry = { id: string; date: string; grief: string; contribution: string; release: string };

export default function SiblingEstrangementFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SiblingEntry[]>([]);
  const [grief, setGrief] = useState("");
  const [contribution, setContribution] = useState("");
  const [release, setRelease] = useState("");
  const [expandedVoice, setExpandedVoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_siblingestrangej_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const entry: SiblingEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), grief, contribution, release };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_siblingestrangej_entries", JSON.stringify(updated));
    setGrief(""); setContribution(""); setRelease("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_siblingestrangej_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, padding: "2rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ color: GREEN, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.5rem" }}>Family Estrangement</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.2 }}>Sibling Estrangement & Faith</h1>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: 600 }}>
            When you and your sibling no longer speak — or no longer know each other at all. When the person who shared your childhood is now a stranger or an adversary. When you carry the grief of a relationship that was supposed to last a lifetime. The rupture between siblings is as old as Cain and Abel. God has always cared about where your brother is.
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Theological foundations drawn from the sibling stories of Scripture — taking sibling estrangement seriously as a real and ancient wound.</p>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Family therapists and theologians who take sibling estrangement seriously as a distinct and complex grief.</p>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Practical and spiritual steps for navigating sibling estrangement — doing what you can and releasing what you cannot.</p>
            <div style={{ background: "#1a0d0d", border: "1px solid #5a2020", borderRadius: 8, padding: "1.25rem", marginBottom: "2rem" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "0.5rem" }}>Support Resources</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: TEXT }}>988 Suicide &amp; Crisis Lifeline</strong> — family estrangement can become a mental health crisis.<br />
                GriefShare (loss of relationship): <strong style={{ color: TEXT }}>griefshare.org</strong><br />
                <strong style={{ color: TEXT }}>Crisis Text Line: Text HOME to 741741</strong>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Verses drawn from the oldest sibling stories in Scripture — rupture, grief, and the possibility of return.</p>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>A private space to process the grief, the unresolved anger, and what you are releasing. Entries stay on your device only.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.25rem", color: GREEN }}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What am I grieving about the relationship?</label>
                <textarea value={grief} onChange={e => setGrief(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What might be my own contribution to the estrangement?</label>
                <textarea value={contribution} onChange={e => setContribution(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
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
                  {e.contribution && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>MY PART</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.contribution}</p></div>}
                  {e.release && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>RELEASED</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.release}</p></div>}
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer", fontSize: "0.75rem", marginTop: "0.5rem" }}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Teaching on family rupture, reconciliation, and the living loss of estrangement.</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Family Estrangement: The Living Loss</div>
              <VideoEmbed videoId="oNpTha80yyE" title="Family Estrangement: The Living Loss" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>The Return of the Prodigal: All Sons Are Lost</div>
              <VideoEmbed videoId="4Eg_di-O8nM" title="The Return of the Prodigal: All Sons Are Lost" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Family Systems and the Gospel: Dan Allender</div>
              <VideoEmbed videoId="53RX2ESIqLM" title="Family Systems and the Gospel: Dan Allender" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Forgiveness and Reconciliation: What They Are and Are Not</div>
              <VideoEmbed videoId="eBl7gT7gQ6g" title="Forgiveness and Reconciliation: What They Are and Are Not" />
            </div>
          </div>
        )}

      </div>
    </div>
      <Footer />
    </>
  );
}
