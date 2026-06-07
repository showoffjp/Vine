"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Pain of Unfulfilled Longing Is Honoured in Scripture", verse: "1 Samuel 1:10", body: "'In her deep anguish Hannah prayed to the LORD, weeping bitterly' (1 Samuel 1:10). Hannah's infertility is not treated in the text as a spiritual deficiency to be quickly resolved. It is described with specificity and gravity: a woman in deep anguish, weeping bitterly before God, year after year. The Bible does not rush past infertility. It gives it full weight. Your longing for a child is not a sign of insufficient faith — it is a deeply human desire that God himself has placed in you, and your anguish about it does not embarrass him." },
  { title: "God Does Not Require Silence About Suffering", verse: "Psalm 13:1", body: "'How long, LORD? Will you forget me forever? How long will you hide your face from me?' (Psalm 13:1). This is Scripture — not an expression of weak faith but of the honest relationship God invites. The psalms of lament vastly outnumber the psalms of straightforward praise. You are not required to perform contentment or gratitude before you are genuinely at peace. Bringing your raw anguish to God is not rebellion; it is the precise posture the psalms model." },
  { title: "Children Are a Gift — But Not Having Children Is Not a Curse", verse: "Psalm 127:3", body: "Psalm 127:3 calls children a heritage and reward from the LORD — and this is genuinely true. But the Christian tradition has sometimes used this text in ways that make childlessness feel like punishment or spiritual failure. The same canon that celebrates parenthood includes Elijah without children, Paul without children, and Jesus without children — none of whom were living diminished or cursed lives. Your worth is not measured by parenthood. The longing is real; the curse is not." },
  { title: "God Sees Those Who Wait", verse: "Genesis 16:13", body: "Hagar, in her wilderness exile, named God El-Roi: 'the God who sees.' The text gives detailed attention to people in waiting and suffering — to Hannah year after year, to Sarah at ninety, to Elizabeth in her old age. The extended accounts of waiting are not accidental; they signal that God is not indifferent to the waiting. He does not solve every situation on the timeline we prefer, but Scripture is consistent that he is present in the waiting itself." },
  { title: "The Resurrection Means Nothing Is Permanently Lost", verse: "Romans 8:23", body: "'Not only so, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sonship, the redemption of our bodies' (Romans 8:23). Paul's theology of hope is not a denial of present pain — it acknowledges the groaning. But it grounds that groaning in an eschatological hope: that all things broken will be made new, that all longings oriented toward love and life and flourishing are not ultimately denied by a God of resurrection. You can hold hope and grief simultaneously." },
];

const VOICES = [
  { id: "vroegop", name: "Mark Vroegop", era: "1975–present", context: "Pastor; Dark Clouds, Deep Mercy; grief and lament", bio: "Vroegop and his wife Sarah have experienced the grief of infertility and pregnancy loss, and his writing on lament theology emerged directly from that waiting. His emphasis on biblical lament as a practice — bringing honest grief to God without abandoning faith — speaks directly to the experience of those who are waiting and suffering without resolution.", quote: "Infertility is a grief that comes back every month. It is hope and loss on a cycle that is exhausting in ways that are hard to explain to those who haven't lived it. What I learned is that lament is not the opposite of faith — it is often the most faithful thing you can do with pain you cannot resolve.", contribution: "Vroegop gave the church a framework for accompanying those in prolonged, unresolved grief — including infertility — that neither minimizes the pain nor abandons hope." },
  { id: "wolgemuth", name: "Amy Julia Becker", era: "Contemporary", context: "Author; White Picket Fences; disability and longing", bio: "Becker's writing on unexpected paths — including the grief of plans that don't materialize — provides theological grounding for those navigating the gap between the life they hoped for and the life they have. Her work on learning to receive the life God gives rather than the life we designed is relevant to infertility without ever minimizing the genuine loss.", quote: "I spent years curating the life I expected. What I learned — slowly and painfully — is that the life I was given was not the consolation prize for the life I didn't get. It was the actual gift. That does not make the grief of what we longed for disappear. It just reframes where we look for meaning.", contribution: "Becker helped Christians navigate the gap between anticipated and actual life — including the particular grief of infertility — without toxic positivity and without despair." },
  { id: "barr", name: "Sarah Philpott", era: "Contemporary", context: "Infertility advocate; Loved Baby; pregnancy loss and infertility ministry", bio: "Philpott's ministry at Loved Baby specifically serves those navigating infertility and pregnancy loss within the Christian community. Her work addresses the specific isolation of infertility grief — the baby showers, the announcements, the well-meaning comments — and provides community and resources for those walking an often lonely road.", quote: "The hardest thing about infertility in the church is the silence — the sense that this is too personal to acknowledge, too painful to name in community. But silence with sufferers is not pastoral; it is abandonment. The church can and should be the community where this grief is named and held.", contribution: "Philpott created specific ministry resources for infertility within the Christian community, addressing the particular ways the church can both fail and support those in this specific form of grief." },
];

const PRACTICES = [
  { title: "Give Yourself Permission to Grieve Repeatedly", icon: "💔", color: PURPLE, desc: "Infertility grief is cyclical — it comes back every month, at every pregnancy announcement, at every baby shower. This does not mean you are not healing; it means the loss is real and recurring. You are allowed to grieve each time.", steps: ["You do not owe anyone performance of contentment you don't feel", "Identify the recurring triggers (due dates, announcements, certain church seasons) and plan for them", "Tell your spouse, a friend, or a counselor when the grief is sharp — don't process it alone", "Give yourself exit routes: from baby showers, from conversations that are too much"] },
  { title: "Be Honest with God", icon: "🙏", color: GREEN, desc: "Hannah wept bitterly and prayed honestly — and the text records this with approval. You are not required to thank God for the infertility before you are genuinely at peace with it. Honest lament is not rebellion; it is relationship.", steps: ["Write a prayer that says exactly what you actually feel — including the anger, confusion, and grief", "Read the psalms of lament (Ps 13, 22, 88) as your permission to pray honestly", "Tell God what you want. He knows already, but the asking is part of the relationship", "Look for the presence of God in the waiting itself — not only in the eventual answer"] },
  { title: "Find Your People", icon: "🤝", color: "#F59E0B", desc: "The specific grief of infertility is best held by people who know it from the inside. The church is often inadequately equipped for this — but communities of those who have walked this road exist.", steps: ["Resolve to Conceive (resolvenet.org) has Christian infertility support groups", "MEND (mendnational.org) supports those experiencing infertility and pregnancy loss", "Consider asking your pastor to connect you with others in the church who have navigated infertility", "Online communities allow anonymous connection when in-person is not accessible"] },
  { title: "Hold Medical Decisions with Theological Carefulness", icon: "⚕️", color: PURPLE, desc: "The medical options available to those experiencing infertility raise genuine ethical and theological questions — particularly around IVF, donor options, and embryo disposition. These decisions deserve prayerful theological reflection, not reactive decision-making under grief.", steps: ["Take time before committing to medical interventions — grief can compress decision-making", "Research the specific ethical questions your medical options raise within Christian ethics", "Talk to a pastor or Christian bioethicist who is familiar with the options", "Know that faithful Christians hold different positions on different interventions — this deserves careful thought, not condemnation"] },
];

const SCRIPTURE = [
  { verse: "1 Samuel 1:10", text: "In her deep anguish Hannah prayed to the LORD, weeping bitterly." },
  { verse: "Psalm 13:1-2", text: "How long, LORD? Will you forget me forever? How long will you hide your face from me? How long must I wrestle with my thoughts and day after day have sorrow in my heart?" },
  { verse: "Romans 8:23", text: "We ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sonship, the redemption of our bodies." },
  { verse: "Psalm 34:18", text: "The LORD is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Isaiah 40:31", text: "Those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint." },
  { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function InfertilityPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_infertility_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_infertility_voice", "vroegop");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type InfertilityJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [infJournal, setInfJournal] = useState<InfertilityJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_infertilityj_entries") ?? "[]"); } catch { return []; } });
  const [jifFeeling, setJifFeeling] = useState("");
  const [jifTruth, setJifTruth] = useState("");
  const [jifStep, setJifStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_infertilityj_entries", JSON.stringify(infJournal)); } catch {} }, [infJournal]);
  function saveInfEntry() {
    if (!jifFeeling.trim() && !jifTruth.trim()) return;
    setInfJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jifFeeling, truth: jifTruth, step: jifStep }, ...prev]);
    setJifFeeling(""); setJifTruth(""); setJifStep("");
  }
  function deleteInfEntry(id: string) { setInfJournal(prev => prev.filter(e => e.id !== id)); }

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" }, { id: "voices", label: "🎓 Voices" },
    { id: "practices", label: "🛤️ Practices" }, { id: "scripture", label: "✝️ Scripture" },
    { id: "journal", label: "📓 Journal" }, { id: "videos", label: "▶️ Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content">
      <div style={{ background: "linear-gradient(180deg, rgba(107,79,187,0.08) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>🌿</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Infertility &amp; Waiting for Children</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 620, margin: "0 auto 24px", lineHeight: 1.75 }}>
          Your longing is real. Your grief is proportionate. God does not require you to perform contentment before you have found it.
          Theology and voices for those who are waiting.
        </p>
        <div style={{ background: `${PURPLE}18`, border: `1px solid ${PURPLE}40`, borderRadius: 10, padding: "14px 20px", maxWidth: 440, margin: "0 auto", fontSize: 14, color: "#D0C0F8", lineHeight: 1.7 }}>
          <strong>If you are struggling:</strong> Call <strong>988</strong> (Suicide &amp; Crisis Lifeline).<br />
          <strong>Support:</strong> RESOLVE (resolve.org) · MEND (mendnational.org)
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ display: "flex", gap: 4, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, margin: "28px 0", overflowX: "auto" }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 14px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", whiteSpace: "nowrap" }}>
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
                  <span style={{ fontSize: 12, color: PURPLE, fontWeight: 700, whiteSpace: "nowrap", background: `${PURPLE}15`, border: `1px solid ${PURPLE}30`, borderRadius: 6, padding: "3px 10px" }}>{item.verse}</span>
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
              <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 16 }}>{voice.context}</div>
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
                <div style={{ color: PURPLE, fontWeight: 800, fontSize: 14, marginBottom: 10 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Write honestly about where you are — the longing, the grief, the hope, the fatigue of waiting.
                You don&rsquo;t have to resolve any of it here. Just be honest about what is true today.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jifFeeling} onChange={e => setJifFeeling(e.target.value)}
                  placeholder="What am I feeling today? What is hard? What am I hoping for?"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jifTruth} onChange={e => setJifTruth(e.target.value)}
                  placeholder="One true thing I can hold onto today — about God, about myself, about the future..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jifStep} onChange={e => setJifStep(e.target.value)}
                  placeholder="One step I can take today — toward care, toward community, toward God..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveInfEntry}
                  style={{ alignSelf: "flex-start", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {infJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. Your waiting is worth recording honestly.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {infJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteInfEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
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
              { videoId: "X3r1MFxAM78", title: "Waiting on God Through Infertility", channel: "The Gospel Coalition", description: "A pastoral conversation about the experience of infertility — the recurring grief, the theological questions it raises, and what it looks like to hold faith and lament together over years of waiting." },
              { videoId: "mH7z1Bm1hBQ", title: "Hannah's Prayer: Lament and Infertility", channel: "Desiring God", description: "A close reading of Hannah's experience in 1 Samuel — her anguish, her honest prayer, and what her story offers those in the middle of infertility grief." },
              { videoId: "F29CtMhk4ZA", title: "Finding God When You Can't Get Pregnant", channel: "Focus on the Family", description: "Stories and theological reflection from couples who have navigated infertility — what sustained faith during the waiting, what helped and what didn't, and how to find community." },
              { videoId: "kP1vQb3Rncg", title: "Infertility and the Ethics of Assisted Reproduction", channel: "The Gospel Coalition", description: "A careful theological discussion of the ethical questions raised by infertility treatment options — IVF, donor gametes, embryo disposition — helping couples think through decisions with theological carefulness." },
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
