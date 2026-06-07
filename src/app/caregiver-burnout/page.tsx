"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "God Rested — and So May You", verse: "Genesis 2:2", body: "'By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work' (Genesis 2:2). God did not rest because he was tired; he rested to model rest as a constitutive part of a good human life. If God embedded rest in the structure of creation — before the fall, before burnout, before need — then rest is not a reward earned by sufficient care. It is a necessity built into the design. Caregiver burnout is not a spiritual failure; it is the predictable consequence of ignoring the design." },
  { title: "Jesus Withdrew When Depleted", verse: "Mark 1:35", body: "'Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed' (Mark 1:35). The previous chapter in Mark describes a day of intense healing and ministry. Jesus responded by withdrawing before the demands resumed. He modeled the rhythm of pouring out and replenishing — not continuous, uninterrupted service. If Jesus, the son of God, needed to withdraw from demand to replenish in prayer, it is not weakness for you to need the same." },
  { title: "You Cannot Give What You Do Not Have", verse: "2 Corinthians 9:7", body: "'Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver' (2 Corinthians 9:7). Paul's language about giving describes care freely given from a position of having, not care extracted from a position of emptiness. The church's failure to support caregivers in genuine rest results in compelled, reluctant care that damages both the caregiver and, eventually, the quality of care provided. Attending to your own needs is not selfishness — it is the condition for sustainable love." },
  { title: "Receiving Care Is Also an Act of Faith", verse: "Mark 14:6", body: "When Mary poured expensive perfume on Jesus's feet and others criticized the waste, Jesus defended her: 'Leave her alone.' He received extravagant care without deflecting it. Many caregivers are so conditioned to giving that they cannot receive — and they feel guilty when others try to help. Learning to receive is not weakness; it is the humility that recognizes your own need and trusts others to meet it. It may be one of the hardest things a caregiver learns to do." },
  { title: "Compassion Fatigue Is Real — Name It", verse: "Psalm 73:26", body: "'My flesh and my heart may fail, but God is the strength of my heart and my portion forever' (Psalm 73:26). The Psalmist acknowledges with unambiguous clarity: flesh and heart may fail. This is not a failure of faith; it is a confession of human finitude. Compassion fatigue — the gradual erosion of empathy, energy, and capacity produced by sustained care — is a documented psychological and physiological reality. Naming it accurately is the first step toward addressing it." },
];

const VOICES = [
  { id: "tada", name: "Joni Eareckson Tada", era: "1949–present", context: "Joni and Friends; disability ministry; long-term care", bio: "Tada, who has been a quadriplegic since a diving accident at seventeen and who herself requires constant care, has also been one of the most significant advocates for those who provide care — family caregivers, disability ministry workers, and those who tend the chronically ill. Her work addresses both the theology of suffering and the practical realities of long-term caregiving with rare authority.", quote: "I know what it is to need care 24 hours a day. And I know what it costs those who provide it. The family caregiver is one of the most overlooked people in the church — doing holy work, often in complete isolation, with no one asking how they are. The church that sees the person in the wheelchair but not the person pushing it has only seen half the picture.", contribution: "Tada gave the church a voice for both the disabled and their caregivers — insisting that care ministry is incomplete if it does not attend to the caregiver's own need for support, rest, and community." },
  { id: "scazzero", name: "Peter Scazzero", era: "1956–present", context: "Emotionally Healthy Spirituality; rest and limits", bio: "Scazzero's work on emotional health in Christian discipleship specifically addresses the unsustainable rhythms that produce burnout in ministry and caregiving contexts. His emphasis on Sabbath as a non-negotiable practice — not a reward for sufficient productivity — gives caregivers theological permission to stop.", quote: "Most caregivers I've worked with believe, at some level, that rest is something they have to earn — and they never quite earn enough of it. The theology of Sabbath says the opposite: rest is given before work, built into the structure of creation, available before you've done anything to deserve it. That reframing is essential for the burned-out caregiver.", contribution: "Scazzero's Sabbath theology and emotional health framework gave caregivers practical and theological tools for building sustainable rhythms of care and rest." },
  { id: "langberg", name: "Diane Langberg", era: "1950–present", context: "Psychologist; compassion fatigue; secondary trauma", bio: "Langberg's clinical work includes extensive attention to compassion fatigue and secondary traumatic stress — the psychological cost paid by those who care for traumatized and suffering people. Her work is essential for professional and family caregivers alike who find themselves unexpectedly depleted, emotionally numb, or overwhelmed by the suffering they witness.", quote: "Compassion fatigue is not a character flaw. It is the predictable consequence of sustained exposure to suffering without adequate support, rest, or replenishment. The people most likely to get it are the people who cared the most. That is not a reason for shame — it is a reason for intervention.", contribution: "Langberg brought clinical precision to the experience of caregiver burnout, helping caregivers understand what was happening to them physiologically and psychologically and what recovery actually requires." },
];

const PRACTICES = [
  { title: "Accept Help Without Guilt", icon: "🤝", color: GREEN, desc: "Caregivers typically resist receiving help for longer than they should — partly out of genuine concern for the person they care for, partly out of a distorted sense that accepting help is admitting failure. Both need to be challenged.", steps: ["Identify the 3 most burdensome tasks in your caregiving and ask for specific help with them", "When someone offers help, say yes — even if you have to practice this", "Contact your church's care coordinator, if one exists, about specific needs", "Adult day programs, respite care services, and home health aides exist precisely for this — use them"] },
  { title: "Protect Sabbath Time", icon: "🌙", color: PURPLE, desc: "A regular, consistent period of genuine rest is not a luxury for caregivers — it is a medical necessity. This requires planning and usually requires asking for help to cover the period of rest.", steps: ["Identify one period per week that is genuinely yours — and protect it", "Arrange coverage in advance: a family member, respite volunteer, or paid aide", "Use the time for genuine renewal — not more productive tasks", "If even one day seems impossible, start with 4 hours and build from there"] },
  { title: "Stay Connected to Your Own Needs", icon: "🪞", color: "#F59E0B", desc: "Long-term caregivers often lose track of their own preferences, needs, and personhood. The self that existed before the caregiving role needs to be maintained, not indefinitely deferred.", steps: ["List things you genuinely enjoy that have nothing to do with your caregiving role", "Schedule at least one of them per week, non-negotiably", "Check in weekly: 'How am I doing? What do I actually need right now?'", "Maintain at least one or two friendships that are genuinely mutual — not just about your caregiving"] },
  { title: "Seek Professional Support", icon: "💬", color: PURPLE, desc: "Caregiver burnout benefits significantly from professional support — both for the mental health dimensions and for practical care navigation. Individual therapy, caregiver support groups, and social work consultation are all valuable.", steps: ["AARP Family Caregiving Resources (aarp.org/caregiving) has extensive practical support", "Caregiver Action Network (caregiveraction.org) has support groups and advocacy", "If you are experiencing depression, anxiety, or compassion fatigue: see your physician and a therapist", "The Eldercare Locator (1-800-677-1116) can help find local respite care resources"] },
];

const SCRIPTURE = [
  { verse: "Genesis 2:2", text: "By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work." },
  { verse: "Mark 1:35", text: "Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed." },
  { verse: "Psalm 73:26", text: "My flesh and my heart may fail, but God is the strength of my heart and my portion forever." },
  { verse: "Isaiah 40:29-31", text: "He gives strength to the weary and increases the power of the weak. Even youths grow tired and weary... but those who hope in the LORD will renew their strength." },
  { verse: "Matthew 11:28-29", text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart." },
  { verse: "2 Corinthians 1:3-4", text: "Praise be to the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God." },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function CaregiverBurnoutPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_caregiver_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_caregiver_voice", "tada");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type CaregiverJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [cgJournal, setCgJournal] = useState<CaregiverJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_caregiverj_entries") ?? "[]"); } catch { return []; } });
  const [jcgFeeling, setJcgFeeling] = useState("");
  const [jcgTruth, setJcgTruth] = useState("");
  const [jcgStep, setJcgStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_caregiverj_entries", JSON.stringify(cgJournal)); } catch {} }, [cgJournal]);
  function saveCgEntry() {
    if (!jcgFeeling.trim() && !jcgTruth.trim()) return;
    setCgJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jcgFeeling, truth: jcgTruth, step: jcgStep }, ...prev]);
    setJcgFeeling(""); setJcgTruth(""); setJcgStep("");
  }
  function deleteCgEntry(id: string) { setCgJournal(prev => prev.filter(e => e.id !== id)); }

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" }, { id: "voices", label: "🎓 Voices" },
    { id: "practices", label: "🛤️ Practices" }, { id: "scripture", label: "✝️ Scripture" },
    { id: "journal", label: "📓 Journal" }, { id: "videos", label: "▶️ Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content">
      <div style={{ background: "linear-gradient(180deg, rgba(58,125,86,0.08) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>🤲</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Caregiver Burnout</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 620, margin: "0 auto 24px", lineHeight: 1.75 }}>
          For those caring for aging parents, sick spouses, or children with special needs.
          Your exhaustion is real. Rest is not a reward — it is a necessity built into creation.
        </p>
        <div style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}30`, borderRadius: 10, padding: "14px 20px", maxWidth: 500, margin: "0 auto", fontSize: 14, color: "#B0D8BE", lineHeight: 1.7 }}>
          <strong>If you are in crisis:</strong> Call <strong>988</strong> (Suicide &amp; Crisis Lifeline).<br />
          <strong>Caregiver support:</strong> AARP (aarp.org/caregiving) · Eldercare Locator: 1-800-677-1116
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ display: "flex", gap: 4, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, margin: "28px 0", overflowX: "auto" }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 14px", borderRadius: 8, border: "none", background: tab === t.id ? GREEN : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", whiteSpace: "nowrap" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {THEOLOGY.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: TEXT, margin: 0, flex: 1, paddingRight: 16 }}>{item.title}</h3>
                  <span style={{ fontSize: 12, color: GREEN, fontWeight: 700, whiteSpace: "nowrap", background: `${GREEN}15`, border: `1px solid ${GREEN}30`, borderRadius: 6, padding: "3px 10px" }}>{item.verse}</span>
                </div>
                <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
              {VOICES.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${selectedVoice === v.id ? GREEN : BORDER}`, background: selectedVoice === v.id ? `${GREEN}18` : "transparent", color: selectedVoice === v.id ? GREEN : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {v.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <div style={{ marginBottom: 6 }}><span style={{ fontSize: 22, fontWeight: 900 }}>{voice.name}</span><span style={{ color: MUTED, fontSize: 13, marginLeft: 12 }}>{voice.era}</span></div>
              <div style={{ color: GREEN, fontSize: 13, fontWeight: 700, marginBottom: 16 }}>{voice.context}</div>
              <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{voice.bio}</p>
              <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 18, margin: "0 0 20px", color: "#e0e0f0", fontSize: 15, fontStyle: "italic", lineHeight: 1.75 }}>&ldquo;{voice.quote}&rdquo;</blockquote>
              <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Contribution</div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{voice.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {PRACTICES.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{p.icon}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: TEXT, margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.steps.map((s, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: p.color, fontWeight: 900, fontSize: 13, minWidth: 20 }}>{j + 1}.</span>
                      <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.65 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {SCRIPTURE.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 14, marginBottom: 10 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Write honestly about how you are doing — not just the person you care for. Your experience matters.
                You are allowed to be tired, frustrated, grieving, and grateful all at once.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jcgFeeling} onChange={e => setJcgFeeling(e.target.value)}
                  placeholder="How am I actually doing today? What is hard? What has depleted me?"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jcgTruth} onChange={e => setJcgTruth(e.target.value)}
                  placeholder="One true thing I am holding — about God, about my own need, about rest..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jcgStep} onChange={e => setJcgStep(e.target.value)}
                  placeholder="One thing I will do today to care for myself, not just for the person I care for..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveCgEntry}
                  style={{ alignSelf: "flex-start", background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {cgJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. Your story — not just the person you care for — deserves to be recorded.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {cgJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteCgEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
                    </div>
                    {e.feeling && <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>{e.feeling}</p>}
                    {e.truth && <p style={{ color: GREEN, fontSize: 13, lineHeight: 1.65, marginBottom: 6 }}>✝ {e.truth}</p>}
                    {e.step && <p style={{ color: PURPLE, fontSize: 13, fontStyle: "italic" }}>→ {e.step}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { videoId: "sJSFmO6gGlo", title: "Caregiver Burnout: What It Is and How to Recover", channel: "Joni and Friends", description: "Joni Eareckson Tada on the invisible toll of caregiving — what compassion fatigue looks like, why it is so common among Christian caregivers, and how to build sustainable rhythms of care and rest." },
              { videoId: "VN_Qi4BLMFY", title: "Sabbath for Caregivers — Peter Scazzero", channel: "Emotionally Healthy Discipleship", description: "Scazzero on how Sabbath theology specifically applies to those in caregiving roles — why rest is not earned but given, and how to create genuine margin in a season that seems to allow none." },
              { videoId: "ZGk1hl1nNrw", title: "Compassion Fatigue: Signs and Solutions", channel: "Diane Langberg", description: "Langberg on the clinical reality of compassion fatigue — what it looks like physiologically and psychologically, who is most at risk, and what recovery requires beyond simply 'taking a break'." },
              { videoId: "m2uDNE9kcSE", title: "Caring for the Caregiver", channel: "Focus on the Family", description: "Practical and pastoral resources for those in long-term caregiving roles — how to ask for help, what self-care looks like without guilt, and how the church can better support family caregivers." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
      </main>
      <Footer />
    </div>
  );
}
