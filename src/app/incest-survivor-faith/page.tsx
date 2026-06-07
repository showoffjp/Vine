"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "God Sees What Happened in the Dark",
    verse: "Genesis 16:13",
    text: "Hagar names God El-Roi — 'the God who sees me' — after she is used, dismissed, and abandoned. She did not name him El-Healer or El-Rescuer. She named him the One who sees. When the abuse happened behind closed doors, within the family, in secret — God saw. He did not look away."
  },
  {
    title: "The Violation Was the Sinner's Sin, Not Yours",
    verse: "Ezekiel 18:20",
    text: "The soul who sins shall die. The child of an abuser does not bear the guilt of the abuser's sin. Scripture is explicit: moral guilt belongs to the one who chose the act. Whatever shame you carry was placed on you by the perpetrator. It was never yours. God's word confirms this."
  },
  {
    title: "Jesus Was Betrayed by Someone Close",
    verse: "Mark 14:45",
    text: "Judas betrayed Jesus with a kiss — the sign of intimacy turned into an act of destruction. The one who should have been a friend became the instrument of harm. Jesus knows what it is to be betrayed by closeness. He does not approach your wound as a stranger."
  },
  {
    title: "Lamentation Is Permitted — Required Even",
    verse: "Lamentations 2:11",
    text: "My eyes fail from weeping, my bowels are troubled, my liver is poured out on the earth — this is Scripture. Biblical lament is not a failure of faith. It is the honest speech of someone whose wound is real and whose God is large enough to receive it without flinching."
  },
  {
    title: "Healing Does Not Require Protecting the Abuser",
    verse: "Psalm 82:3-4",
    text: "Defend the weak and the fatherless; uphold the cause of the poor and oppressed. Rescue the weak and needy; deliver them from the hand of the wicked. Scripture does not require silence to protect family systems. Telling the truth, seeking protection, and refusing to minimize are acts consistent with God's own character."
  }
];

const voices = [
  {
    id: "v1",
    name: "Dan Allender",
    role: "Founder, The Allender Center; Author, The Wounded Heart",
    quote: "The healing of abuse is not the removal of the story — it is the redemption of the story. You are not defined by what was done to you. But pretending it wasn't done will not set you free.",
    bio: "Dan Allender's The Wounded Heart is the landmark Christian text on sexual abuse recovery. He understands that healing requires naming what happened fully, grieving it deeply, and receiving the redemptive work God does not skip past."
  },
  {
    id: "v2",
    name: "Diane Langberg",
    role: "Psychologist; Author, Suffering and the Heart of God",
    quote: "The church has often asked survivors to forgive quickly, reconcile with perpetrators, and keep family systems intact. This is not the gospel. The gospel is not a cover for systems of abuse.",
    bio: "Diane Langberg has spent 50 years treating trauma survivors and training clinicians and pastors. She specifically addresses how religious communities have compounded harm through misapplied forgiveness theology and systems-protecting silence."
  },
  {
    id: "v3",
    name: "Rachael Denhollander",
    role: "Lawyer, author, survivor advocate; Author, What Is a Girl Worth?",
    quote: "Forgiveness is not the absence of consequences. Forgiveness does not mean telling abusers they were right, or that the harm doesn't matter, or that you must remain in relationship with them.",
    bio: "Rachael Denhollander survived Larry Nassar's abuse and has become one of the most theologically articulate voices on abuse, forgiveness, justice, and the church's responsibility. Her voice is essential for incest survivors navigating family pressure."
  },
  {
    id: "v4",
    name: "Curt Thompson",
    role: "Psychiatrist; Author, The Soul of Shame",
    quote: "Shame says: what happened to me is what I am. But shame is a liar. The neural pathways of shame can be interrupted, rewritten — not through willpower, but through being truly known by safe others.",
    bio: "Curt Thompson's work on shame and interpersonal neurobiology is particularly relevant for incest survivors, for whom shame is typically the primary burden. His integration of neuroscience and theology offers a path through what willpower alone cannot reach."
  }
];

const practices = [
  {
    icon: "🔒",
    title: "Safety First — Always",
    text: "If you are currently in a situation involving abuse — any age — your first need is safety, not healing. Contact the National Sexual Assault Hotline (RAINN: 1-800-656-4673), a trusted adult outside the family system, or law enforcement. Healing cannot begin while harm is ongoing."
  },
  {
    icon: "🧠",
    title: "Find a Trauma-Specialized Therapist",
    text: "Incest is one of the most complex trauma presentations. You need a therapist trained in trauma (EMDR, somatic therapy, or trauma-focused CBT), not just a supportive listener. The Psychology Today directory filters by 'trauma and PTSD' and 'sexual abuse.' The Allender Center offers referrals."
  },
  {
    icon: "🚫",
    title: "You Are Not Obligated to Protect the System",
    text: "Family systems often pressure survivors to maintain silence for the sake of the family. This pressure is not biblical and not healthy. You are not responsible for managing other people's responses to the truth. Your healing is not a threat to your family — the abuse was."
  },
  {
    icon: "📖",
    title: "Understand the Theology of Forgiveness Correctly",
    text: "Biblical forgiveness releases your right to personal vengeance — it does not require reconciliation, silence, or denial of consequences. It does not require you to pretend trust that hasn't been earned. Many survivors need to correct a distorted forgiveness theology before healing can progress."
  },
  {
    icon: "👥",
    title: "Connect With Survivors Who Understand",
    text: "Isolation amplifies shame. Survivor communities — RAINN, The Allender Center's online communities, SNAP (Survivors Network) — provide witness from people whose understanding is not theoretical. Being known by someone who has walked this path is itself healing."
  },
  {
    icon: "🕊️",
    title: "Bring the Whole Story to God",
    text: "Many survivors feel they cannot take their actual story to God — that it is too dark, too shameful, too sexual to bring into prayer. But the Psalms are full of cries from people whose stories were exactly this dark. God does not require a cleaned-up version of your wound."
  }
];

const scriptures = [
  { verse: "Genesis 16:13", text: "She gave this name to the Lord who spoke to her: 'You are the God who sees me,' for she said, 'I have now seen the One who sees me.'" },
  { verse: "Ezekiel 18:20", text: "The soul who sins is the one who will die. The son will not share the guilt of the father, nor will the father share the guilt of the son." },
  { verse: "Psalm 82:3-4", text: "Defend the weak and the fatherless; uphold the cause of the poor and oppressed. Rescue the weak and needy; deliver them from the hand of the wicked." },
  { verse: "Lamentations 3:55-57", text: "I called on your name, Lord, from the depths of the pit. You heard my plea: 'Do not close your ears to my cry for relief.' You came near when I called you, and you said, 'Do not fear.'" },
  { verse: "Isaiah 61:3", text: "To bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning, and a garment of praise instead of a spirit of despair." },
  { verse: "Psalm 27:10", text: "Though my father and mother forsake me, the Lord will receive me." }
];

type SurvivorEntry = { id: string; date: string; memory: string; lie: string; truth: string };

export default function IncestSurvivorFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SurvivorEntry[]>([]);
  const [memory, setMemory] = useState("");
  const [lie, setLie] = useState("");
  const [truth, setTruth] = useState("");
  const [expandedVoice, setExpandedVoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_incestsurvivorj_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!memory.trim()) return;
    const entry: SurvivorEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), memory, lie, truth };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_incestsurvivorj_entries", JSON.stringify(updated));
    setMemory(""); setLie(""); setTruth("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_incestsurvivorj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, padding: "2rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ color: PURPLE, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.5rem" }}>Trauma & Faith Recovery</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.2 }}>Incest Survivor & Faith</h1>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: 600 }}>
            When the person who harmed you was family. When the wound lives inside the place that was supposed to be home. When shame, silence, and religious pressure have kept the truth buried. God saw what happened. He is not asking you to protect the system that covered it.
          </p>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${PURPLE}` : "2px solid transparent", color: tab === t ? PURPLE : MUTED, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize", whiteSpace: "nowrap", fontFamily: "Georgia, serif" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>

        {tab === "theology" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Scripture for those whose wound came from within the family. God's word speaks directly to betrayal, to shame that was placed rather than earned, and to the God who sees in the dark.</p>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontStyle: "italic", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Therapists, theologians, and advocates who take both the wound and the faith seriously — without requiring silence or premature forgiveness.</p>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "0.75rem" }}>"{v.quote}"</p>
                <button onClick={() => setExpandedVoice(expandedVoice === v.id ? null : v.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.4rem 0.75rem", borderRadius: 4, cursor: "pointer", fontSize: "0.8rem" }}>{expandedVoice === v.id ? "Less" : "More"}</button>
                {expandedVoice === v.id && <p style={{ color: MUTED, lineHeight: 1.7, marginTop: "0.75rem" }}>{v.bio}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Steps toward safety, truth-telling, and healing — in the right order.</p>
            <div style={{ background: "#1a0808", border: "1px solid #6b2020", borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "0.75rem", fontSize: "1rem" }}>If you are in immediate danger or currently being abused</div>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                <strong style={{ color: TEXT }}>Call 911</strong> if you are in immediate danger.<br />
                <strong style={{ color: TEXT }}>RAINN National Sexual Assault Hotline: 1-800-656-HOPE (4673)</strong><br />
                RAINN Online Chat: <strong style={{ color: TEXT }}>rainn.org/get-help</strong><br />
                <strong style={{ color: TEXT }}>Crisis Text Line: Text HOME to 741741</strong><br />
                <strong style={{ color: TEXT }}>988 Suicide &amp; Crisis Lifeline</strong> — available 24/7 for any crisis<br />
                SNAP (Survivors Network): <strong style={{ color: TEXT }}>snapnetwork.org</strong>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Verses for survivors carrying shame that was never theirs — and for those who need to know that God sees, and does not require silence.</p>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${PURPLE}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>A private space for truth-telling. What happened. What lies it seeded. What God says instead. Entries remain on your device only.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.25rem", color: PURPLE }}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What memory or pain am I carrying right now?</label>
                <textarea value={memory} onChange={e => setMemory(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What lie about myself did the abuse plant in me?</label>
                <textarea value={lie} onChange={e => setLie(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What does God's word say is true about me instead?</label>
                <textarea value={truth} onChange={e => setTruth(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: 700 }}>Save Entry</button>
            </div>
            {entries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", fontStyle: "italic" }}>No entries yet. Your reflections will appear here.</p>
            ) : (
              entries.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "1rem" }}>{e.date}</div>
                  {e.memory && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>CARRYING</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.memory}</p></div>}
                  {e.lie && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>LIE</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.lie}</p></div>}
                  {e.truth && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>TRUTH</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.truth}</p></div>}
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer", fontSize: "0.75rem", marginTop: "0.5rem" }}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Teaching on trauma healing, the theology of abuse, and survival through faith.</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>The Wounded Heart: Dan Allender on Sexual Abuse</div>
              <VideoEmbed videoId="53RX2ESIqLM" title="The Wounded Heart: Dan Allender on Sexual Abuse" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Diane Langberg: When the Church Gets Abuse Wrong</div>
              <VideoEmbed videoId="ZwDlGPCEUoE" title="Diane Langberg: When the Church Gets Abuse Wrong" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Rachael Denhollander: Forgiveness, Justice, and Survival</div>
              <VideoEmbed videoId="eBl7gT7gQ6g" title="Rachael Denhollander: Forgiveness, Justice, and Survival" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Shame and the Soul: Curt Thompson</div>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Shame and the Soul: Curt Thompson" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
