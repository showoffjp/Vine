"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Sibling Conflict Has Biblical Roots and Biblical Resolution", verse: "Genesis 33:4", text: "But Esau ran to meet Jacob and embraced him; he threw his arms around his neck and kissed him. And they wept. The biblical narrative is saturated with sibling conflict: Cain and Abel, Jacob and Esau, Joseph and his brothers, the prodigal and his elder brother. What is notable is not just the conflict but the resolution — the weeping of reconciliation in Genesis 33, the revelation and forgiveness in Genesis 45. The Bible does not treat broken sibling relationships as inevitable or permanent. It treats them as wounds that can be healed." },
  { title: "Old Roles Assigned in Childhood Often Persist", verse: "1 Corinthians 13:11", text: "When I was a child, I talked like a child, I thought like a child, I reasoned like a child. When I became a man, I put the ways of childhood behind me. Many adult sibling conflicts are really conflicts about old family roles that were assigned in childhood — the responsible one, the wild one, the favored one, the overlooked one — and that neither person has examined or renegotiated as adults. Putting away childish things, in this context, means renegotiating the family system you were born into rather than continuing to play parts in a script written decades ago." },
  { title: "Parents Are Not the Arbiter of Sibling Truth", verse: "Proverbs 18:17", text: "In a lawsuit the first to speak seems right, until someone comes forward and questions them. In family systems, the parent often mediates sibling conflict — but parents also have their own perceptions, biases, and investments in the narrative. The sibling who has had more access to parents, or who is more skilled at presenting their case, may appear to have the truth. The gospel calls us to seek the perspective of the other — even when our parents have not." },
  { title: "Forgiveness Does Not Require Relationship Resumption", verse: "Romans 12:18", text: "If it is possible, as far as it depends on you, live at peace with everyone. The qualifier 'if it is possible' and 'as far as it depends on you' establishes that Paul does not require relationship resumption in every case. Forgiving a sibling is commanded. Trusting a sibling who has not changed, or resuming close relationship with a sibling who continues to harm you, is not. Forgiveness and appropriate boundaries can coexist." },
  { title: "Reconciliation Requires Both Parties", verse: "Matthew 18:15", text: "If your brother or sister sins against you, go and point out their fault, just between the two of you. If they listen to you, you have won them over. The Matthew 18 process assumes two parties: the one who goes and the one who listens. Reconciliation is bilateral. You can forgive unilaterally; you cannot reconcile unilaterally. When a sibling refuses to engage, you can grieve the loss of the relationship rather than continuing to pursue it indefinitely." },
];

const voices = [
  { id: "v1", name: "Harriet Lerner, PhD", role: "Psychologist, Author", quote: "Family relationships are the most intense and the most difficult — and the ones we most often understand the least clearly because we are inside them.", bio: "Harriet Lerner is the author of The Dance of Anger and The Dance of Connection, which examine how family systems create and maintain relationship patterns. Her Bowen family systems framework is widely used in Christian counseling and pastoral care for understanding why sibling conflicts persist long after childhood ends — and what changing one's own part in the pattern requires." },
  { id: "v2", name: "Cloud and Townsend", role: "Authors, Counselors", quote: "Adult sibling relationships are often broken by the same patterns that broke them in childhood — but adults have options children do not. You can choose how much access to give, and under what conditions.", bio: "Henry Cloud and John Townsend are the authors of Boundaries and numerous related resources. Their work on relational boundaries — applied to sibling dynamics — provides one of the most widely used Christian frameworks for navigating adult sibling conflict, including when estrangement may be appropriate and what responsible reconciliation requires." },
  { id: "v3", name: "Joanna Weaver", role: "Author, Speaker", quote: "Sibling rivalry is not always about what happened between the siblings. It is often about what was missing in the original family — the love, attention, or safety that neither sibling received enough of.", bio: "Joanna Weaver is a Christian author and speaker who has addressed family conflict, sibling dynamics, and the generational patterns that sustain them. Her work helps Christians recognize that sibling conflict is often less about the sibling and more about an unresolved family system — which reframes both the problem and the solution." },
  { id: "v4", name: "Dan Allender", role: "Psychologist, Author", quote: "To understand your adult sibling conflict, you have to understand the family story that shaped both of you — because you are each carrying different versions of the same wound.", bio: "Dan Allender is the founder of the Allender Center and the author of The Wounded Heart and To Be Told. His narrative approach to healing addresses how family-of-origin stories — the specific roles, alliances, wounds, and patterns — shape adult sibling conflict in ways that require story-level understanding, not just conflict resolution techniques." },
];

const practices = [
  { icon: "🔍", title: "Identify Your Family Role", text: "What role were you assigned in your family of origin? The responsible one? The scapegoat? The invisible one? The favored one? Most sibling conflict is a conflict between these assigned roles, not between the actual people. Naming your role and your sibling's role begins the process of renegotiating them." },
  { icon: "📖", title: "Read the Joseph Story in Full", text: "Genesis 37-50 is the most detailed account of sibling conflict and reconciliation in Scripture. Read it slowly, attending to the complexity: Joseph was genuinely wronged; his brothers genuinely changed; reconciliation was gradual and tested before it was complete. The pattern is instructive for adult sibling work." },
  { icon: "💬", title: "Have One Honest Conversation Without Triangulation", text: "Much adult sibling conflict is conducted through parents, partners, or other family members rather than directly. Having one honest, two-person conversation — without reporting it to other family members afterward — breaks the triangulation that sustains conflict and creates the possibility of genuine contact." },
  { icon: "⚖️", title: "Grieve the Sibling Relationship You Wanted", text: "Many adults carrying sibling wounds are also carrying grief for the sibling relationship they never had — the protective older brother, the confiding sister, the ally in the family system. This grief is real and deserves to be acknowledged, not skipped over in the rush to either reconciliation or estrangement." },
  { icon: "🤝", title: "Decide What Kind of Relationship Is Possible Now", text: "Adult sibling relationships exist on a spectrum: close confidants, functional cordial relationships, minimal contact for family events, or estrangement. Deciding honestly what is possible — given who your sibling actually is, not who you wish they were — is a form of wisdom, not defeat." },
  { icon: "🙏", title: "Forgive Even When Reconciliation Is Not Possible", text: "Forgiveness releases you from the ongoing injury of carrying resentment. It does not require proximity, trust, or resumed relationship. Bring your sibling specifically before God, name what they did, and release the claim of retribution — not for their sake but for yours." },
];

const scriptures = [
  { verse: "Genesis 33:4", text: "But Esau ran to meet Jacob and embraced him; he threw his arms around his neck and kissed him. And they wept." },
  { verse: "Romans 12:18", text: "If it is possible, as far as it depends on you, live at peace with everyone." },
  { verse: "Matthew 18:15", text: "If your brother or sister sins against you, go and point out their fault, just between the two of you. If they listen to you, you have won them over." },
  { verse: "Proverbs 17:17", text: "A friend loves at all times, and a brother is born for a time of adversity." },
  { verse: "1 Peter 3:8-9", text: "Finally, all of you, be like-minded, be sympathetic, love one another, be compassionate and humble. Do not repay evil with evil or insult with insult. On the contrary, repay evil with blessing." },
];

type ASEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function AdultSiblingConflictPage() {
  const [tab, setTab] = useState("theology");
  const [asJournal, setAsJournal] = useState<ASEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setAsJournal(JSON.parse(localStorage.getItem("vine_adultsiblingj_entries") ?? "[]")); } catch { setAsJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: ASEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...asJournal];
    setAsJournal(updated);
    localStorage.setItem("vine_adultsiblingj_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = asJournal.filter(e => e.id !== id);
    setAsJournal(updated);
    localStorage.setItem("vine_adultsiblingj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #0a1f14 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>👥</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Adult Sibling Conflict</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>When family becomes fractured — finding wisdom for forgiveness, boundaries, and what reconciliation requires.</p>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", padding: "1rem", overflowX: "auto", justifyContent: "center", flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
        ))}
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" }}>
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.3rem", textTransform: "uppercase" }}>{t.verse}</p>
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
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{v.name}</p>
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
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", borderLeft: `4px solid ${GREEN}` }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, color: TEXT, marginBottom: "1rem", fontSize: "1rem" }}>Private Journal</h3>
              <textarea placeholder="What is the core wound in my sibling relationship? What role was I given?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What does forgiveness look like here — even without reconciliation?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What kind of relationship is actually possible or wise right now?" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {asJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{e.feeling}</p>}
                {e.truth && <p style={{ color: MUTED, fontStyle: "italic", marginBottom: "0.4rem", fontSize: "0.88rem" }}>{e.truth}</p>}
                {e.step && <p style={{ color: GREEN, fontSize: "0.85rem", margin: 0 }}>Wisdom: {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "kfcVPh2VDhQ", title: "Forgiveness: Why It Is So Difficult", channel: "Tim Keller", description: "Keller on why forgiveness is so costly, what it actually requires, and how it differs from excusing or reconciling — directly applicable to sibling wounds that run deep." },
              { videoId: "57LVVwba6_8", title: "The Joseph Story: Forgiveness and Reconciliation", channel: "Tim Keller", description: "Keller walks through the most detailed reconciliation narrative in Scripture — Joseph and his brothers — with pastoral depth and practical wisdom." },
              { videoId: "E65KV3M8RZE", title: "What Forgiveness Is Not", channel: "The Gospel Coalition", description: "A clarifying resource on the distinctions between forgiveness, trust, reconciliation, and enabling — essential for navigating complex sibling dynamics with theological clarity." },
              { videoId: "ZwDlGPCEUoE", title: "Healing Relational Trauma", channel: "Dan Allender", description: "Dan Allender on how family-of-origin wounds shape adult relationships and what narrative-level healing requires — directly applicable to adult sibling conflict." },
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
      <Footer />
    </>
  );
}
