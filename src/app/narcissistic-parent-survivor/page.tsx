"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "You Were Made to Know You Are Loved — And Weren't Shown",
    verse: "Psalm 27:10",
    text: "Though my father and mother forsake me, the Lord will receive me. A parent with narcissistic traits does not forsake through absence — they forsake through using. The child of a narcissistic parent grows up having met the shape of a parent but not the substance of one. The conditional love, the invisible shame, the way the parent's needs always came first — this is a form of forsaking. God's word holds the one who was not received by their parent."
  },
  {
    title: "The Commandment Does Not Require Pretending",
    verse: "Exodus 20:12",
    text: "Honor your father and your mother. Honor is not the same as denial, compliance, or the suppression of reality. Honoring a parent whose behavior was harmful does not require pretending it was not. It does not require ongoing access, unconditional trust, or silence. Honor can be given at a safe distance. The commandment has never been a command to be re-harmed."
  },
  {
    title: "Truth Is a Form of Love — Even When It Costs",
    verse: "Ephesians 4:15",
    text: "Speaking the truth in love. Speaking truth about what a parent's behavior did to you is not dishonoring. It is the beginning of healing. Many adult children of narcissistic parents have been told by the church that naming the harm is sin. This is a distortion of both the commandment and the gospel. Truth is not betrayal."
  },
  {
    title: "God Is the Father That Was Missing",
    verse: "Matthew 6:9",
    text: "Our Father in heaven, hallowed be your name. Jesus teaches us to address God as Father — but many who grew up with narcissistic parents carry a corrupted template for what a father is. The work of healing often involves learning what a father who is actually for you looks like, sounds like, and feels like. God is patient with that re-learning."
  },
  {
    title: "What Was Done to You Shaped You — But Does Not Define You",
    verse: "2 Corinthians 5:17",
    text: "Therefore, if anyone is in Christ, the new creation has come: the old has gone, the new is here. The patterns instilled by a narcissistic parent — hypervigilance, people-pleasing, shame, the constant performance of worthiness — are real and deep. They do not disappear by declaration. But they are not the final word about who you are or who you will be."
  }
];

const voices = [
  {
    id: "v1",
    name: "Dan Allender",
    role: "Founder, The Allender Center; Author, The Wounded Heart and Bold Love",
    quote: "The child of a parent who could not truly see them grows up not knowing what it is to be seen. They learn to manage, to perform, to please — but not to be known. The healing is learning for the first time what it is to be seen by someone who actually looks.",
    bio: "Dan Allender's work on the wounds of childhood and the healing of trauma is essential for adult children of narcissistic parents. He names the specific damage done by conditional love and the misuse of parental power with theological depth and clinical precision."
  },
  {
    id: "v2",
    name: "Diane Langberg",
    role: "Psychologist; Author, Suffering and the Heart of God",
    quote: "Narcissistic parents use their children for their own emotional regulation. This is a form of abuse — not because it involves physical harm, but because it involves the systematic suppression of the child's personhood for the parent's benefit.",
    bio: "Diane Langberg's 50 years of treating trauma survivors includes extensive work with adults whose childhood homes were defined by narcissistic parental dynamics. She gives name to patterns many adult children did not have language for."
  },
  {
    id: "v3",
    name: "Curt Thompson",
    role: "Psychiatrist; Author, The Soul of Shame",
    quote: "Children of narcissistic parents often grow up with a shame that has no name — because the message was never delivered in words. It was delivered in what was not there: the delight, the safety, the being-known that every child needs and was never consistently given.",
    bio: "Curt Thompson's neuroscience-informed theology of shame is particularly important for adult children of narcissistic parents, for whom shame is often the invisible water they have always swum in. His work makes visible what has been structurally present their whole lives."
  },
  {
    id: "v4",
    name: "Harriet Lerner",
    role: "Psychologist; Author, The Dance of Anger",
    quote: "In a system built around one person's needs, children learn to manage the emotional temperature of the household rather than developing their own emotional lives. Healing requires first noticing that you have an emotional life that belongs to you.",
    bio: "Harriet Lerner's family systems work helps adult children of narcissistic parents understand the roles they were assigned and the process of differentiating enough to build a life that is genuinely theirs."
  }
];

const practices = [
  {
    icon: "🔍",
    title: "Name the Patterns — Give Them a Name",
    text: "Many adult children of narcissistic parents do not know the word for what they experienced. Learning the clinical language — narcissistic personality, enmeshment, parentification, golden child/scapegoat dynamics — is not labeling your parent cruelly. It is giving yourself a map."
  },
  {
    icon: "🧠",
    title: "Find a Therapist Who Understands Narcissistic Family Systems",
    text: "Not all therapists are trained in the specific dynamics of narcissistic family systems. Look for someone trained in complex PTSD, attachment trauma, or internal family systems. The Allender Center maintains a referral network. Psychology Today's directory allows filtering by childhood trauma specialization."
  },
  {
    icon: "🚧",
    title: "Set and Hold Limits on Contact",
    text: "You are not obligated to maintain unlimited access to a parent who continues to harm you. Reduced contact, structured contact, or no contact are all within the range of faithful responses to a harmful relationship. The right choice depends on your specific situation — not on a general rule about filial duty."
  },
  {
    icon: "🪞",
    title: "Learn to Recognize Your Own Needs",
    text: "Children of narcissistic parents often cannot identify their own needs — only others'. This is the legacy of a parent who used them for their own emotional needs. Learning to ask 'What do I need right now?' — and to trust that the answer is valid — is itself a healing practice."
  },
  {
    icon: "🙏",
    title: "Rebuild Your Image of God as Father",
    text: "For those whose earthly father was narcissistic, the word 'father' carries corrupted meaning. Healing often requires deliberately reexamining what Scripture says about God as Father — delight, protection, the father running toward the returning son — and allowing those images to replace the distorted ones inherited from childhood."
  },
  {
    icon: "📖",
    title: "Read the Literature on This Specific Wound",
    text: "Books like Will I Ever Be Good Enough? (Karyl McBride), Adult Children of Emotionally Immature Parents (Lindsay Gibson), and Will I Ever Be Free of You? (Karyl McBride) give language, validation, and practical guidance to adult children of narcissistic parents."
  }
];

const scriptures = [
  { verse: "Psalm 27:10", text: "Though my father and mother forsake me, the Lord will receive me." },
  { verse: "Ephesians 4:15", text: "Instead, speaking the truth in love, we will grow to become in every respect the mature body of him who is the head, that is, Christ." },
  { verse: "2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, the new creation has come: the old has gone, the new is here!" },
  { verse: "Isaiah 49:15", text: "Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you!" },
  { verse: "Psalm 34:18", text: "The Lord is near to the brokenhearted and saves the crushed in spirit." },
  { verse: "Matthew 6:9", text: "This, then, is how you should pray: 'Our Father in heaven, hallowed be your name.'" }
];

type NarcParentEntry = { id: string; date: string; pattern: string; need: string; truth: string };

export default function NarcissisticParentSurvivorPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<NarcParentEntry[]>([]);
  const [pattern, setPattern] = useState("");
  const [need, setNeed] = useState("");
  const [truth, setTruth] = useState("");
  const [expandedVoice, setExpandedVoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_narcparentj_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!pattern.trim()) return;
    const entry: NarcParentEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), pattern, need, truth };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_narcparentj_entries", JSON.stringify(updated));
    setPattern(""); setNeed(""); setTruth("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_narcparentj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, padding: "2rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ color: PURPLE, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.5rem" }}>Childhood Trauma & Recovery</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.2 }}>Raised by a Narcissistic Parent</h1>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: 600 }}>
            When the parent who was supposed to see you only saw themselves. When you grew up learning to manage their emotions instead of developing your own. When the church told you to honor them in ways that meant re-erasing yourself. God saw you then. He sees you now.
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Theological foundations for adult children of narcissistic parents — addressing the honor command with honesty and recovering the Father God that a narcissistic parent obscured.</p>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Psychologists and theologians who name the narcissistic parenting wound with precision — and point toward healing.</p>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Steps toward understanding the wound, setting limits, and rebuilding a self that was never quite allowed to form.</p>
            <div style={{ background: "#1a0d0d", border: "1px solid #5a2020", borderRadius: 8, padding: "1.25rem", marginBottom: "2rem" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "0.5rem" }}>Crisis Support</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: TEXT }}>988 Suicide &amp; Crisis Lifeline</strong> — complex childhood trauma carries significant depression risk.<br />
                <strong style={{ color: TEXT }}>Crisis Text Line: Text HOME to 741741</strong><br />
                RAINN (if abuse was also sexual or physical): <strong style={{ color: TEXT }}>1-800-656-4673</strong>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Verses for the adult child who grew up not being seen — and who is learning what it is to be seen by God.</p>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>A private space to name the patterns, discover your needs, and replace inherited lies. Entries stay on your device only.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.25rem", color: PURPLE }}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What pattern from my upbringing am I noticing in myself today?</label>
                <textarea value={pattern} onChange={e => setPattern(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What do I need right now — for myself, not for someone else?</label>
                <textarea value={need} onChange={e => setNeed(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What is God's truth about me — as opposed to what I was told?</label>
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
                  {e.pattern && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>PATTERN</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.pattern}</p></div>}
                  {e.need && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>MY NEED</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.need}</p></div>}
                  {e.truth && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>TRUTH</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.truth}</p></div>}
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer", fontSize: "0.75rem", marginTop: "0.5rem" }}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Teaching on childhood emotional wounds, shame, and the healing of the parent-formed self.</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>The Wound of Being Unseen: Dan Allender</div>
              <VideoEmbed videoId="53RX2ESIqLM" title="The Wound of Being Unseen: Dan Allender" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Shame and the Soul: Curt Thompson</div>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Shame and the Soul: Curt Thompson" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Toxic Family Systems: When Honor Gets Twisted</div>
              <VideoEmbed videoId="ZwDlGPCEUoE" title="Toxic Family Systems: When Honor Gets Twisted" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Healing the Father Wound: God as the Father Who Sees</div>
              <VideoEmbed videoId="NnGBhG03g4M" title="Healing the Father Wound: God as the Father Who Sees" />
            </div>
          </div>
        )}

      </div>
    </div>
      <Footer />
    </>
  );
}
