"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Honor Does Not Require Exposure to Harm",
    verse: "Ephesians 6:2",
    text: "Honor your father and mother — which is the first commandment with a promise. The commandment to honor parents does not specify how. It does not require enmeshment, proximity, or submission to behavior that harms you or your children. Honor can be maintained through prayer, the absence of contempt, and the refusal to defame — without requiring a relationship that is unsafe.",
  },
  {
    title: "Wisdom Includes Limits Around Danger",
    verse: "Proverbs 22:3",
    text: "The prudent see danger and take refuge, but the simple keep going and pay the penalty. The Bible treats self-protective discernment as wisdom, not weakness. Seeing that a relationship is dangerous and limiting exposure to it is the behavior of the prudent, not the faithless.",
  },
  {
    title: "Even Jesus Had Family Conflict",
    verse: "Mark 3:21",
    text: "When his family heard about this, they went to take charge of him, for they said, 'He is out of his mind.' Jesus' family members thought he had lost his mind and came to intervene. Family conflict — even with those you love — is present in Jesus' own life. You are not the first Christian whose family did not understand or support your faith and choices.",
  },
  {
    title: "Love Does Not Require Exposure to Destruction",
    verse: "Matthew 10:14",
    text: "If anyone will not welcome you or listen to your words, leave that home or town and shake the dust off your feet. Jesus authorized the disciples to disengage from environments that were hostile. He did not require endless presence in harmful environments as a form of faithfulness. Sometimes love looks like leaving.",
  },
  {
    title: "Family in Christ Is a Real Category",
    verse: "Mark 3:34–35",
    text: "Then he looked at those seated in a circle around him and said, 'Here are my mother and my brothers! Whoever does the will of God is my brother and sister and mother.' Jesus redefined family to include those who share kingdom allegiance, not only biological bond. Your church community, your chosen family — these are real family in the most theologically significant sense.",
  },
];

const voices = [
  {
    id: "v1",
    name: "Dan Allender",
    role: "Trauma therapist, author, founder of The Seattle School",
    quote: "Family systems that function on shame, control, or emotional violence are not neutral environments. They are harmful ones. Calling them family does not make them safe. And the church's insistence that you repair those relationships before they are repaired by genuine change is a form of re-trauma.",
    bio: "Dan Allender (The Wounded Heart, Bold Love, The Healing Path) writes from a Christian perspective on family harm, abuse, and the conditions under which relationships can be restored. His work is essential for Christians trying to navigate toxic family dynamics with both theological seriousness and psychological clarity.",
  },
  {
    id: "v2",
    name: "Harriet Lerner",
    role: "Psychologist, relationship author",
    quote: "Families that depend on one member's silence, compliance, and self-erasure in order to function are not families you are called to sacrifice yourself for indefinitely. Your wellness matters too. Your family's demand for your self-erasure is not a higher calling.",
    bio: "Harriet Lerner (The Dance of Anger, Why Won't You Apologize?) writes on family systems and the dynamics of control, silence, and emotional regulation. Her work helps people understand the systemic nature of family toxicity and what it actually costs to remain enmeshed in it.",
  },
  {
    id: "v3",
    name: "Leslie Vernick",
    role: "Christian counselor, author",
    quote: "The Bible does not call us to enable destructive behavior in the name of love. Love that has no boundaries is not love — it is compliance. And compliance with someone's destructive behavior is never what God meant by the command to love.",
    bio: "Leslie Vernick (The Emotionally Destructive Relationship, The Emotionally Destructive Marriage) writes directly on the intersection of Christian faith and destructive relationships. Her framework helps Christians understand that protective limits are not unChristian — they are, in many cases, exactly what love requires.",
  },
  {
    id: "v4",
    name: "Peter Scazzero",
    role: "Author, Emotionally Healthy Spirituality",
    quote: "Your family of origin shaped your interior life — often in ways you cannot see yet. The work of becoming emotionally healthy requires going back, seeing clearly, grieving what was not given, and rebuilding your identity from something other than what that system said about you.",
    bio: "Peter Scazzero (Emotionally Healthy Spirituality, The Emotionally Healthy Leader) integrates family systems theory with Christian spiritual formation. His work helps people understand how family-of-origin wounds show up in their faith life and what healing looks like from a Christian spiritual formation perspective.",
  },
];

const practices = [
  {
    icon: "🔍",
    title: "Name the Pattern, Not Just the Incident",
    text: "Toxic family patterns are systemic: scapegoating, enmeshment, emotional abuse, control, shame-based communication, triangulation. Learning the vocabulary of family systems helps you see the pattern rather than just reacting to the latest incident. Books like Toxic Parents by Susan Forward or The Dance of Anger give you language.",
  },
  {
    icon: "🏗️",
    title: "Distinguish Limit from Abandonment",
    text: "A limit is not abandonment. Reducing contact, requiring specific behavior before a visit, declining certain conversations, requiring your children not to be alone with someone — these are limits, not rejections. You can maintain them without contempt, without defamation, and without the pretense that nothing has happened.",
  },
  {
    icon: "🧠",
    title: "Work with a Family Systems Therapist",
    text: "Family toxicity is rarely about one person. It involves roles, rules, and dynamics that have developed over generations. A therapist trained in family systems — Bowen theory, differentiation, enmeshment — can help you see the whole system clearly rather than just your role in it.",
  },
  {
    icon: "⛪",
    title: "Find a Church That Does Not Idealize Family",
    text: "Many churches reinforce toxic family dynamics by treating family as an absolute value regardless of what is happening inside it. Seek a community that holds family with both love and realism — one that can say: families can harm, limits are sometimes love, chosen family is real family.",
  },
  {
    icon: "📖",
    title: "Grieve What Was Not Given",
    text: "The grief of a toxic family is not just the grief of what happened — it is the grief of what was never given: safety, delight, unconditional acceptance, attunement. This is an ambiguous loss that requires genuine mourning. Let yourself grieve the childhood you deserved and did not receive.",
  },
  {
    icon: "💌",
    title: "Build Your Chosen Family Intentionally",
    text: "Jesus said those who do God's will are his family. Invest in friendships and church relationships with the intentionality most people reserve for family of origin. A holiday table that includes non-biological family is not a consolation prize. It may be the most genuine expression of kingdom community in your life.",
  },
];

const scriptures = [
  { verse: "Ephesians 6:2–3", text: "Honor your father and mother — which is the first commandment with a promise — so that it may go well with you and that you may enjoy long life on the earth." },
  { verse: "Proverbs 22:3", text: "The prudent see danger and take refuge, but the simple keep going and pay the penalty." },
  { verse: "Mark 3:34–35", text: "Then he looked at those seated in a circle around him and said, 'Here are my mother and my brothers! Whoever does the will of God is my brother and sister and mother.'" },
  { verse: "Psalm 27:10", text: "Though my father and mother forsake me, the LORD will receive me." },
  { verse: "Matthew 10:34–36", text: "Do not suppose that I have come to bring peace to the earth. I did not come to bring peace, but a sword. For I have come to turn a man against his father, a daughter against her mother..." },
  { verse: "Galatians 5:1", text: "It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery." },
];

type ToxicEntry = { id: string; date: string; pattern: string; limit: string; grief: string };

export default function ToxicFamilyFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ToxicEntry[]>([]);
  const [pattern, setPattern] = useState("");
  const [limit, setLimit] = useState("");
  const [grief, setGrief] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_toxicfamilyj_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!pattern.trim()) return;
    const entry: ToxicEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      pattern,
      limit,
      grief,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_toxicfamilyj_entries", JSON.stringify(updated));
    setPattern(""); setLimit(""); setGrief("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_toxicfamilyj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>Family & Faith</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Toxic Family Dynamics and Christian Faith
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          For Christians navigating harmful family systems — emotional abuse, control, enmeshment, scapegoating, or manipulation. Honoring your father and mother does not require exposing yourself or your children to ongoing harm. Limits are sometimes love.
        </p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#e07070", fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>If you are in crisis</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>
            988 Suicide & Crisis Lifeline (call or text 988) &nbsp;·&nbsp; National Domestic Violence Hotline: 1-800-799-7233 &nbsp;·&nbsp; Crisis Text Line: text HOME to 741741
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.45rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t) => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{t.verse}</p>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.1rem" }}>{v.name}</h3>
                <p style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</p>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0" }}>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{v.quote}&rdquo;</p>
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{p.icon}</span>
                  <div>
                    <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>{p.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s) => (
              <div key={s.verse} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, fontWeight: 700, marginBottom: "1rem" }}>Journal Entry</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What pattern is most present in your family right now?</label>
                <textarea value={pattern} onChange={(e) => setPattern(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What limit do you need to establish or reinforce?</label>
                <textarea value={limit} onChange={(e) => setLimit(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What are you grieving about your family of origin?</label>
                <textarea value={grief} onChange={(e) => setGrief(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.pattern && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Pattern:</strong> {e.pattern}</p>}
                {e.limit && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Limit:</strong> {e.limit}</p>}
                {e.grief && <p style={{ color: TEXT, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Grief:</strong> {e.grief}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "ZwDlGPCEUoE", title: "Family Systems and Trauma", channel: "Diane Langberg", description: "Langberg on how toxic family dynamics produce trauma, how shame operates in family systems, and what healing looks like from a Christian psychological perspective." },
              { videoId: "53RX2ESIqLM", title: "The Body Keeps the Score: Family Trauma", channel: "Bessel van der Kolk", description: "Van der Kolk on how adverse childhood experiences and family dysfunction are stored in the body — the science behind why family-of-origin wounds have such lasting effects." },
              { videoId: "kfcVPh2VDhQ", title: "Forgiveness vs. Reconciliation", channel: "Tim Keller", description: "Keller distinguishes between the personal spiritual work of forgiveness and the separate — and conditional — question of reconciliation. Essential for those navigating toxic family relationships." },
              { videoId: "4yRlBMcNNjY", title: "Boundaries and the Christian Life", channel: "N.T. Wright", description: "Theological reflection on what genuine Christian love actually requires — including the possibility that limits and protective distance are sometimes the most loving response to harmful relationships." },
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
    </main>
      <Footer />
    </>
  );
}
