"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Moral Injury Is a Theological Category", verse: "Psalm 38:4", body: "'My guilt has overwhelmed me like a burden too heavy to bear' (Psalm 38:4). Moral injury — the deep damage caused by participating in, witnessing, or failing to prevent actions that violate one's moral code — is not merely psychological. It is theological. When a soldier has done something in combat, or failed to prevent something, that violated their deepest sense of what is right, the injury reaches into their relationship with God, with themselves, and with the moral order. This requires theological resources, not merely clinical ones." },
  { title: "Warriors in Scripture Needed Spiritual Reintegration", verse: "Numbers 31:19-20", body: "After Israel's military campaigns, Moses commanded: 'Anyone who has killed someone or touched someone who was killed must stay outside the camp seven days. On the third and seventh day you must purify yourselves and your captives' (Numbers 31:19). The ancient Israelite practice of requiring soldiers to undergo a period of ritual purification and reintegration was not incidental. It recognized that participation in war — even righteous war — requires spiritual and communal processing before a person can simply return to civilian life. The church has largely abandoned this wisdom." },
  { title: "God Is Present in the Aftermath of Violence", verse: "Psalm 23:4", body: "'Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me' (Psalm 23:4). The valley of the shadow of death is not a metaphor in the Psalm — it is the literal landscape of danger, loss, and aftermath. The promise is not that God removes you from the dark valley but that he is with you in it. The God who is present with the veteran in the aftermath of war is not standing in judgment; he is walking in the valley alongside." },
  { title: "Asking Hard Questions About War Is Not Faithlessness", verse: "Habakkuk 1:2", body: "'How long, LORD, must I call for help, but you do not listen? Or cry out to you, \"Violence!\" but you do not save?' (Habakkuk 1:2). Habakkuk's question to God about violence is recorded in the canon as legitimate prophecy, not rebellion. The questions that veterans bring back from combat — about God's presence, about just war, about their own actions and their moral weight — are not signs of weak faith. They are legitimate theological questions that deserve serious theological engagement, not dismissal." },
  { title: "Healing Can Include Others Who Have Witnessed Your War", verse: "Galatians 6:2", body: "'Carry each other's burdens, and in this way you will fulfill the law of Christ' (Galatians 6:2). The research on PTSD consistently shows that social support — specifically people willing to bear witness to the veteran's story without flinching — is one of the most significant factors in recovery. The command to carry each other's burdens is not metaphorical; it describes the specific work of communities that create enough safety for veterans to tell what they have seen and done, and to find that they are still held." },
];

const VOICES = [
  { id: "tick", name: "Jonathan Shay", era: "1941–present", context: "Achilles in Vietnam; moral injury pioneer", bio: "Shay's Achilles in Vietnam was one of the first major works to develop the concept of moral injury — the spiritual and moral wound caused by betrayal by leadership, witnessing atrocity, or being ordered to participate in actions that violate one's moral code. His work drew on both Homer and clinical experience treating Vietnam veterans, and his framework has become central to military trauma care.", quote: "PTSD is a fear-based condition. Moral injury is something different — it is the damage done to the soul when a person's moral world is shattered. When a soldier has done something he cannot reconcile with who he believed himself to be, the wound is not primarily psychological. It is moral and spiritual, and it requires moral and spiritual resources to address.", contribution: "Shay's concept of moral injury gave the military, clinical, and religious communities language for a dimension of combat trauma that was being systematically missed by purely psychological approaches." },
  { id: "grey", name: "Naomi Krueger", era: "Contemporary", context: "Veterans' spiritual care; military chaplaincy", bio: "Chaplains working with veterans in VA settings and military transition contexts have developed some of the most nuanced approaches to the intersection of combat trauma, moral injury, and Christian faith. Their clinical and spiritual work demonstrates that the two dimensions cannot be separated — and that genuine healing requires both psychological processing and theological reckoning.", quote: "Most veterans I work with do not come to me asking about PTSD. They come asking: How can God forgive me? Does what I did put me beyond redemption? Why did God let this happen? Those are theological questions. They require theological care, not just symptom management.", contribution: "Military chaplains pioneered the integration of theological care with clinical treatment for moral injury — recognizing that the two dimensions are inseparable and that healing requires attention to both." },
  { id: "walling", name: "Dave Roever", era: "1943–present", context: "Vietnam veteran; speaker; veteran ministry", bio: "Roever, a Vietnam veteran who was severely burned and disfigured in combat, has spent decades ministering to veterans and military families. His personal experience of both the physical and spiritual aftermath of war — including the long journey back to faith and community — speaks with authority to those who have served and are now struggling with the reintegration that no one adequately prepared them for.", quote: "Nobody tells you that when you come home from war, you may not feel at home anywhere — not in your own body, not in your family, not in your church. The church I came back to didn't know what to do with me. Most churches still don't. But the God who met me in the VA ward has not moved. He is still there for veterans who are trying to find their way back.", contribution: "Roever's personal testimony and ministry gave veterans a model of someone who navigated the full range of war's aftermath — physical, psychological, spiritual — and found a way through, giving others permission to believe they could too." },
];

const PRACTICES = [
  { title: "Name Both the PTSD and the Moral Injury", icon: "🔍", color: PURPLE, desc: "PTSD (fear-based, triggered by threat exposure) and moral injury (shame and guilt-based, triggered by moral violation) are different wounds requiring different care. Many veterans carry both without distinguishing them — which makes treatment less effective.", steps: ["Ask: is this primarily fear and hypervigilance, or primarily guilt and shame?", "PTSD responds well to trauma-focused therapy (EMDR, Prolonged Exposure, CPT)", "Moral injury benefits additionally from theological engagement: confession, forgiveness, spiritual direction", "A military-aware therapist can help distinguish and address both dimensions"] },
  { title: "Seek Specialized Treatment", icon: "⚕️", color: "#EF4444", desc: "Effective PTSD and moral injury treatment is available — but it requires specialized providers familiar with combat trauma, not general counselors.", steps: ["VA Mental Health Services: 1-800-827-1000 (available to all veterans)", "Veterans Crisis Line: dial 988 then press 1, or text 838255", "Cohen Veterans Network (cohenveteransnetwork.org) — free/low-cost mental health for veterans", "The Headstrong Project provides free mental health care for post-9/11 veterans"] },
  { title: "Find a Community That Can Receive Your Story", icon: "🤝", color: GREEN, desc: "One of the most consistent findings in combat trauma research: veterans who can tell their stories to communities that can receive them without judgment or deflection heal more completely than those who cannot. Finding that community is essential.", steps: ["Veterans groups specifically (American Legion, VFW, Team Red White and Blue) provide veteran-to-veteran community", "Ask your church if it has military veterans in leadership who can provide peer support", "Some churches have developed specific veterans ministries — seek them out", "Be patient: finding community that can genuinely receive what you carry takes time"] },
  { title: "Engage the Theological Questions Honestly", icon: "📖", color: PURPLE, desc: "The theological questions that come back from combat are not peripheral — they are central to healing. Finding a pastor, chaplain, or spiritual director willing to sit with them honestly rather than deflecting with easy answers is essential.", steps: ["Write out your specific theological questions: What did God do with what I did? Can he forgive actions done in war? Why did God not protect the people who died?", "Find a pastor or chaplain who has experience with veterans and will not flinch at hard questions", "Read Jonathan Shay and draw on the resources in the Voices tab here", "The Moral Injury Project at Syracuse University has resources specifically for theological engagement with combat moral injury"] },
];

const SCRIPTURE = [
  { verse: "Psalm 23:4", text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
  { verse: "Psalm 38:4", text: "My guilt has overwhelmed me like a burden too heavy to bear." },
  { verse: "Isaiah 61:1", text: "The Spirit of the Sovereign LORD is on me, because the LORD has anointed me to proclaim freedom for the captives and release from darkness for the prisoners." },
  { verse: "Romans 8:38-39", text: "Neither death nor life... nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "Psalm 34:18", text: "The LORD is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Micah 4:3", text: "They will beat their swords into plowshares and their spears into pruning hooks. Nation will not take up sword against nation, nor will they train for war anymore." },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function VeteranTraumaPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_veteran_trauma_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_veteran_trauma_voice", "tick");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type VeteranJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [vtJournal, setVtJournal] = useState<VeteranJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_veteranj_entries") ?? "[]"); } catch { return []; } });
  const [jvtFeeling, setJvtFeeling] = useState("");
  const [jvtTruth, setJvtTruth] = useState("");
  const [jvtStep, setJvtStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_veteranj_entries", JSON.stringify(vtJournal)); } catch {} }, [vtJournal]);
  function saveVtEntry() {
    if (!jvtFeeling.trim() && !jvtTruth.trim()) return;
    setVtJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jvtFeeling, truth: jvtTruth, step: jvtStep }, ...prev]);
    setJvtFeeling(""); setJvtTruth(""); setJvtStep("");
  }
  function deleteVtEntry(id: string) { setVtJournal(prev => prev.filter(e => e.id !== id)); }

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
        <div style={{ fontSize: 52, marginBottom: 12 }}>🎖️</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Veteran Trauma &amp; Moral Injury</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto 24px", lineHeight: 1.75 }}>
          For veterans navigating PTSD, moral injury, and the hard work of reintegration.
          Theology that does not flinch, voices that understand, and a community that can receive your story.
        </p>
        <div style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.35)", borderRadius: 10, padding: "16px 20px", maxWidth: 520, margin: "0 auto", fontSize: 14, color: "#F8B0B0", lineHeight: 1.8 }}>
          <strong>Veterans Crisis Line:</strong> Dial <strong>988</strong>, then press <strong>1</strong><br />
          Text <strong>838255</strong> · Chat at VeteransCrisisLine.net<br />
          <strong>VA Mental Health:</strong> 1-800-827-1000
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
                Write honestly about what you carry — what you have seen, what you have done, what questions you cannot put down. This is a space with no easy answers and no judgment.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jvtFeeling} onChange={e => setJvtFeeling(e.target.value)}
                  placeholder="What am I carrying today? What is the hardest part of where I am?"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jvtTruth} onChange={e => setJvtTruth(e.target.value)}
                  placeholder="One true thing I am holding — about God, about myself, about what healing might look like..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jvtStep} onChange={e => setJvtStep(e.target.value)}
                  placeholder="One small step today — toward care, toward community, toward the questions..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveVtEntry}
                  style={{ alignSelf: "flex-start", background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {vtJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. What you carry deserves to be written down.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {vtJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteVtEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
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
              { videoId: "WqPwGtNFsJk", title: "Moral Injury: The Invisible War Wound", channel: "The Atlantic", description: "An exploration of moral injury as distinct from PTSD — what it is, how it differs, and why the spiritual and theological dimensions of combat trauma have been so inadequately addressed by existing systems of care." },
              { videoId: "1pkP_BI_fkQ", title: "Faith After Combat — Dave Roever", channel: "Dave Roever Ministries", description: "Roever on his personal journey from severe combat injury through long recovery to faith and ministry — specifically addressing the theological questions that combat veterans bring back, and what genuine healing requires." },
              { videoId: "3Mv-XMSoxek", title: "Healing Moral Injury Through Confession and Grace", channel: "Carey Nieuwhof Leadership Podcast", description: "A pastoral conversation about how the theological resources of confession, absolution, and grace — long practiced in the church — speak directly to the specific wounds of moral injury in veterans." },
              { videoId: "XGAGk7vlCjE", title: "The Church and the Veteran: Practical Welcome", channel: "Focus on the Family", description: "Practical guidance for churches wanting to better welcome and support veterans — what veterans typically experience in church settings, what they need that they rarely receive, and what concrete changes help." },
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
