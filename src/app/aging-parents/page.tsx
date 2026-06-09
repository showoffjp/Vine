"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Honoring Father and Mother Does Not Mean Destroying Yourself", verse: "Exodus 20:12", text: "Honor your father and your mother, so that you may live long in the land the Lord your God is giving you. The fifth commandment is cited without the condition that defines it in practice: honor does not mean unlimited self-sacrifice. The word honor (kabod) means to give weight, to hold in high regard — it is a posture of the heart and an orientation of action, but it does not specify any particular caregiving arrangement. Honoring aging parents can take many forms: arranging professional care, making difficult decisions about memory care facilities, setting limits on personal depletion — all while maintaining the deep regard the command requires." },
  { title: "The Grief of Role Reversal Is Real and Legitimate", verse: "Ecclesiastes 12:1-5", text: "Remember your Creator in the days of your youth, before the evil days come and the years approach when you will say, 'I find no pleasure in them.' The Preacher's meditation on aging is one of Scripture's most honest. The strong man bows down (the back bends), the grinders cease (teeth go), those looking through windows grow dim (eyes fail), the doors on the street are shut (hearing fades). This is not pessimism — it is permission to name what aging does honestly. The adult child watching a parent decline is watching the Ecclesiastes passage in real time. That grief is legitimate, not a failure of faith." },
  { title: "God's Faithfulness to Your Parents Does Not Require You to Be Their Only Support", verse: "Isaiah 46:4", text: "Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you. God's promise to sustain in old age is God's promise to make — not your promise to keep alone. The adult child who takes on sole caregiving responsibility as an act of faith may actually be functioning as though no God exists. The promise is God's burden to bear, not the child's burden to alone fulfill. Professional caregivers, siblings, community resources, residential facilities — these are the instruments through which God sustains, not replacements for faith." },
  { title: "Sibling Conflict Over Aging Parents Is Ancient and Real", verse: "Genesis 4:9", text: "Then the Lord said to Cain, 'Where is your brother Abel?' 'I don't know,' he replied. 'Am I my brother's keeper?' The sibling question — who is responsible for the parent? — surfaces in almost every aging-parents situation and almost always produces conflict. Someone does more, someone does less; someone is geographically closer, someone earns more; old family dynamics resurface with new intensity. The theological question — am I my sibling's keeper in the caregiving project? — has no simple answer, but pretending the conflict isn't there makes it worse. Naming the inequity and negotiating explicitly is more faithful than silent resentment." },
  { title: "The Body's Decline Points Toward Resurrection — Not Abandonment", verse: "2 Corinthians 5:1-2", text: "For we know that if the earthly tent we live in is destroyed, we have a building from God, an eternal house in heaven, not built by human hands. Meanwhile we groan, longing to be clothed instead with our heavenly dwelling. The Christian framework for aging and bodily decline is not stoic acceptance — it is resurrection hope. The groaning is real; the hope is also real. For the adult child watching a parent decline, the theological category is not just grief but eschatological anticipation. This parent's story is not ending — it is transitioning. The love invested in their care is not wasted — it is sown toward a harvest." },
];

const voices = [
  { id: "hr", name: "Henry Cloud & John Townsend", role: "Authors, Boundaries", quote: "Honoring your parents and having appropriate limits with your parents are not opposites. You can deeply love and care for an aging parent while also maintaining the structure that keeps you functional as a spouse, parent, and employee. In fact, the adult child who destroys themselves in unlimited caregiving often ends up resentful — which does not serve the parent, the marriage, or the caregiver.", bio: "Cloud and Townsend's work on limits has direct application to adult-child caregiving situations. The pattern of guilt-driven over-giving is as destructive in the caregiving relationship as in any other, and the framework of appropriate responsibility in a relationship of honor is directly applicable." },
  { id: "jv", name: "Amy Goyer", role: "AARP Family and Caregiving Expert, Author of Juggling Life, Work, and Caregiving", quote: "The biggest mistake I see adult children make is waiting too long to have the hard conversations — about finances, about housing, about wishes at end of life. These conversations are hard before a crisis. They become impossible during one. The families who navigate aging parents with the least trauma are the families who talked early, repeatedly, and honestly.", bio: "Goyer's professional expertise in the practical dimensions of caregiving — logistics, finances, housing, sibling dynamics, employment impact — is indispensable for adult children navigating aging parents. Her work makes actionable what is often overwhelming." },
  { id: "nb", name: "Nouwen & Gaffney", role: "Authors, Aging: The Fulfillment of Life", quote: "When we grow old, we are invited to slowly loosen the bonds that tie us to this world and to allow our deepest self to become visible. The task of the aging parent's family is not merely management — it is the spiritual privilege of being present to someone as the superficial falls away and the essential remains.", bio: "Nouwen's meditation on aging as a spiritual journey reframes the adult caregiver's role from logistical manager to spiritual companion. His emphasis on the dying person's interiority — the deepening that can accompany decline — offers a theological vision for presence in the caregiving relationship." },
];

const practices = [
  { icon: "📋", title: "Have the Advance Directive Conversation Before Crisis", text: "Before a medical crisis, aging parents should have completed: (1) an advance directive / living will specifying treatment wishes; (2) a healthcare proxy / power of attorney designating a decision-maker; (3) a durable power of attorney for finances; (4) a conversation about housing preferences as decline progresses. These documents must exist before incapacity, not after. The Conversation Project (theconversationproject.org) provides starter guides for families to have these discussions." },
  { icon: "🤝", title: "Name the Sibling Inequity and Negotiate Explicitly", text: "Most caregiving situations produce a primary caregiver — usually the sibling who lives closest, has the most flexible schedule, or feels the most responsible. The inequity is real, and resentment is its natural product. Naming it explicitly rather than performing martyrdom is more faithful. Practical negotiation: who handles what; how financial contributions substitute for time contributions; what decisions require consensus; how primary caregivers will be supported and relieved. A family meeting with a mediator or therapist is often worth the investment." },
  { icon: "⚕️", title: "Explore the Full Spectrum of Care Options", text: "Many families default to either: (1) the adult child does everything, or (2) nursing home placement. The spectrum between these extremes is vast: in-home aides, adult day programs, assisted living, memory care communities, continuing care retirement communities. Aging Life Care Managers (aaginglifecare.org) are professionals who assess needs and coordinate services — often the most efficient use of a caregiver's resources. The child who researches options is giving their parent the same gift as the child who shows up." },
  { icon: "💔", title: "Grieve the Loss That Happens Before Death", text: "When a parent develops dementia, loses mobility, or loses personality to illness, the adult child often begins grieving years before the parent dies. This is called anticipatory grief or the 'long goodbye.' It is real grief, it deserves real support, and it does not dishonor the parent still living. A therapist, a support group (especially for dementia caregivers — alz.org), or a spiritual director can provide the space this grief requires. The child who grieves well serves the parent better than the child who suppresses grief in order to function." },
  { icon: "✝️", title: "Invest in Spiritual Presence, Not Just Physical Presence", text: "The aging parent who is declining often has the most to offer spiritually — their perspective on a long life, their faith tested and refined, their wisdom about what matters. Adult children who are present only as managers — scheduling appointments, managing medications, handling finances — often miss this. Making space for conversation about their life, their faith, their fears, their hopes — this is the spiritual work of the relationship that caregiving can crowd out if it is not specifically protected." },
];

const scriptures = [
  { verse: "Exodus 20:12", text: "Honor your father and your mother, so that you may live long in the land the Lord your God is giving you." },
  { verse: "1 Timothy 5:8", text: "Anyone who does not provide for their relatives, and especially for their own household, has denied the faith and is worse than an unbeliever." },
  { verse: "Isaiah 46:4", text: "Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you." },
  { verse: "Proverbs 16:31", text: "Gray hair is a crown of splendor; it is attained in the way of righteousness." },
  { verse: "Ecclesiastes 12:1", text: "Remember your Creator in the days of your youth, before the evil days come and the years approach when you will say, 'I find no pleasure in them.'" },
  { verse: "2 Corinthians 5:1", text: "For we know that if the earthly tent we live in is destroyed, we have a building from God, an eternal house in heaven, not built by human hands." },
];


type APEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function AgingParentsPage() {
  const [tab, setTab] = useState("theology");
  const [apJournal, setApJournal] = useState<APEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_agingparentsj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_agingparentsj_entries", JSON.stringify(apJournal)); } catch {}
  }, [apJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setApJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }
  function deleteEntry(id: string) { setApJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Family &amp; Caregiving</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Caring for Aging Parents</h1>
        <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
          The theology and practice of honoring parents through decline — navigating grief, limits, siblings, and spiritual presence.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? PURPLE : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
                <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.15rem" }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "0.95rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
              <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <textarea placeholder="What is hardest about this caregiving season right now?" value={jFeeling} onChange={e => setJFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="What truth about God's faithfulness grounds me here?" value={jTruth} onChange={e => setJTruth(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="One practical step or conversation I need to take this week" value={jStep} onChange={e => setJStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {apJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : apJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Weight:</strong> {e.feeling}</p>}
                {e.truth && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Truth:</strong> {e.truth}</p>}
                {e.step && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Step:</strong> {e.step}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "sJSFmO6gGlo", title: "Caregiver Burnout: What It Is and How to Recover", channel: "Joni and Friends", description: "Joni Eareckson Tada on the invisible toll of caregiving — what compassion fatigue looks like, why it is so common among Christian caregivers of aging parents, and how to build sustainable rhythms." },
              { videoId: "ZGk1hl1nNrw", title: "Compassion Fatigue: Signs and Solutions", channel: "Diane Langberg", description: "Langberg on the clinical reality of compassion fatigue in long-term caregiving — what it looks like physiologically and psychologically, who is most at risk, and what recovery requires beyond simply 'taking a break'." },
              { videoId: "m2uDNE9kcSE", title: "Caring for the Caregiver", channel: "Focus on the Family", description: "Practical and pastoral resources for those in long-term caregiving roles — how to ask for help, what self-care looks like without guilt, and how the church can better support family caregivers." },
              { videoId: "7KMPN9OLoNo", title: "Joni Eareckson Tada on Suffering and God's Grace", channel: "Desiring God", description: "Joni speaks from decades of experience about what she has learned of God's grace in weakness — particularly relevant for adult children watching parents suffer through decline and asking what faithfulness looks like in this season." },
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
