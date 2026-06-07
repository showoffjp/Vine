"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Some Griefs Do Not Resolve on a Timeline", verse: "2 Samuel 18:33", text: "The king was shaken. He went up to the room over the gateway and wept. As he went, he said: 'O my son Absalom! My son, my son Absalom! If only I had died instead of you — O Absalom, my son, my son!' David's grief over Absalom was raw and inconsolable. He had not properly grieved many earlier losses, and this one collapsed him. The Bible does not prescribe grief timelines. Some losses — of a child, of a marriage, of years, of potential — resist the five-stage model. Chronic grief is not pathological by nature; it is the appropriate weight of loving someone or something deeply." },
  { title: "The God Who Grieves Is Your Companion", verse: "John 11:35", text: "Jesus wept. Jesus wept at Lazarus's tomb even though he was about to raise Lazarus. His tears were not confusion — they were compassion. He entered the grief of Mary and Martha even knowing the resolution he was about to provide. The God who grieves is your companion in chronic grief. He does not sit above the loss explaining it; he enters it with you. The shortest verse in Scripture carries one of the deepest theological claims: God is not unmoved by your losses." },
  { title: "Lament Is Not a Stage You Pass Through", verse: "Psalm 13:1-2", text: "How long, Lord? Will you forget me forever? How long will you hide your face from me? How long must I wrestle with my thoughts and day after day have sorrow in my heart? The psalms of lament are not transitional states on the way to resolution. Many of them simply end in darkness or in partial trust without full resolution. The canonical placement of these psalms — throughout, not clustered in one section — signals that lament is a permanent mode of prayer available to the faithful, not a phase to be completed." },
  { title: "Resurrection Is the Theology of Grief, Not Denial of It", verse: "1 Thessalonians 4:13", text: "Brothers and sisters, we do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope. Paul's instruction is striking: he does not say 'do not grieve.' He says do not grieve as those without hope. The distinction is between hopeless grief (which needs no modification) and hopeful grief (which is the Christian form). Resurrection does not eliminate grief — it gives it a different orientation." },
  { title: "The Resurrection Body Is the Clue to What Was Lost's Value", verse: "1 Corinthians 15:44", text: "It is sown a natural body, it is raised a spiritual body. If there is a natural body, there is also a spiritual body. Paul's description of the resurrection body — glorified, continuous with but transformed from the earthly body — affirms that what God raises is real, specific, and valued. The loss of a specific person — not a generic person but this person — is not dismissed in resurrection theology. What is raised is the particular beloved. Grief honors this particularity." },
];

const voices = [
  { id: "v1", name: "C.S. Lewis", role: "Author", quote: "No one ever told me that grief felt so like fear. I am not afraid, but the sensation is like being afraid. The same fluttering in the stomach, the same restlessness, the yawning.", bio: "C.S. Lewis wrote A Grief Observed after the death of his wife Joy Davidman. What began as private journal entries became one of the most honest accounts of Christian grief ever written — including his rage at God, his sense of God's absence, and the slow, non-linear movement toward something like peace. It is required reading for anyone navigating loss, particularly the kind that refuses to resolve." },
  { id: "v2", name: "Mark Vroegop", role: "Pastor, Author", quote: "The church has often made grief impossible by making lament impermissible. When we cannot cry out honestly, we are left to grieve alone — which is where grief becomes most dangerous.", bio: "Mark Vroegop is the pastor of College Park Church and the author of Dark Clouds, Deep Mercy: Discovering the Grace of Lament. His work on lament — its biblical warrant, its pastoral necessity, and its practical form — has been widely used by Christians learning to grieve honestly within a faith framework that honors both the pain and the promise." },
  { id: "v3", name: "Granger Westberg", role: "Chaplain, Author", quote: "Grief is not an illness that needs curing. It is love's natural response to loss, and the faith community's job is to stay present with it, not to accelerate past it.", bio: "Granger Westberg was a hospital chaplain who wrote Good Grief, one of the foundational works on Christian grief. His model — not five stages but a continuum of experiences — helped an entire generation of pastors and chaplains understand grief as a natural process to be accompanied rather than a problem to be solved." },
  { id: "v4", name: "Nicholas Wolterstorff", role: "Philosopher, Author", quote: "There is something I do not understand about God. It is not the explanation I want. Explanations don't console. What I want is for my son to still be alive.", bio: "Nicholas Wolterstorff is a philosopher and theologian who wrote Lament for a Son after the death of his 25-year-old son in a climbing accident. His meditation on grief, theodicy, and God's presence in loss is one of the most intellectually and pastorally honest accounts available — the work of a man who could not reconcile his loss with easy answers and refused to pretend otherwise." },
];

const practices = [
  { icon: "⏱️", title: "Release Grief from Timelines", text: "Someone else's grief schedule — the idea that after one year or two years you should be 'over it' — is not a biblical or clinical standard for complex grief. Allow yourself to grieve on the actual timeline of the loss, not a prescribed one. This is not weakness; it is proportionality." },
  { icon: "📖", title: "Pray the Lament Psalms Regularly", text: "Psalms 13, 22, 42, 43, 55, 77, 88, and 130 are psalms of darkness and unresolved grief. Praying them regularly — not as a path toward resolution but as ongoing honest address to God — maintains the posture of prayer even when grief does not lift." },
  { icon: "🤝", title: "Find Someone Who Can Stay in the Grief with You", text: "Chronic grief often outlasts the community's capacity to witness it. Finding one person — a counselor, spiritual director, close friend — who is willing to continue sitting with you in the grief rather than pushing you toward resolution, is among the most important relational resources available." },
  { icon: "🏥", title: "Distinguish Grief from Clinical Depression", text: "Grief and depression share many features but are clinically distinct. Grief tends to remain focused on the loss and comes in waves; clinical depression tends to be pervasive and persistent. Both can be present simultaneously. If grief is accompanied by inability to function, persistent hopelessness, or thoughts of self-harm, professional support is warranted." },
  { icon: "🕯️", title: "Mark Significant Dates", text: "Anniversaries, birthdays, holidays associated with the lost person or thing are often the hardest days in chronic grief. Rather than trying to get through them as quickly as possible, consider marking them intentionally: a ritual of memory, a visit to a meaningful place, a meal of remembrance. Honoring what was lost honors the love it represented." },
  { icon: "🙏", title: "Hold 1 Thessalonians 4:13 as Your Grief Theology", text: "Not 'do not grieve.' Grieve — but with hope. The hope of resurrection does not eliminate grief; it gives it a trajectory that is not toward permanent darkness. Allowing both the grief and the hope to be fully present simultaneously is the theological task of Christian mourning." },
];

const scriptures = [
  { verse: "John 11:35", text: "Jesus wept." },
  { verse: "Psalm 13:1", text: "How long, Lord? Will you forget me forever? How long will you hide your face from me?" },
  { verse: "1 Thessalonians 4:13", text: "Brothers and sisters, we do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope." },
  { verse: "Lamentations 3:32-33", text: "Though he brings grief, he will show compassion, so great is his unfailing love. For he does not willingly bring affliction or grief to anyone." },
  { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
];

type CGEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function ChronicGriefPage() {
  const [tab, setTab] = useState("theology");
  const [cgJournal, setCgJournal] = useState<CGEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setCgJournal(JSON.parse(localStorage.getItem("vine_chronicgriefj_entries") ?? "[]")); } catch { setCgJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: CGEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...cgJournal];
    setCgJournal(updated);
    localStorage.setItem("vine_chronicgriefj_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = cgJournal.filter(e => e.id !== id);
    setCgJournal(updated);
    localStorage.setItem("vine_chronicgriefj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg, #0a1f14 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌧️</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Chronic Grief</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>When grief does not resolve on anyone's timeline — staying in the lament with a God who wept at a tomb.</p>
        <div style={{ background: "#0a1f14", border: `1px solid ${GREEN}`, borderRadius: 8, padding: "0.75rem 1.25rem", maxWidth: 480, margin: "0 auto", fontSize: "0.85rem", color: MUTED }}>
          <strong style={{ color: GREEN }}>If you are in crisis:</strong> 988 Lifeline &nbsp;|&nbsp; Crisis Text: text HOME to 741741
        </div>
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
              <textarea placeholder="What does my grief feel like today? What triggers it?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What do I believe God sees and feels about my grief?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="One way to honor what I am grieving this week:" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {cgJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{e.feeling}</p>}
                {e.truth && <p style={{ color: MUTED, fontStyle: "italic", marginBottom: "0.4rem", fontSize: "0.88rem" }}>{e.truth}</p>}
                {e.step && <p style={{ color: GREEN, fontSize: "0.85rem", margin: 0 }}>Honoring: {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Long Suffering", channel: "Mark Vroegop", description: "Vroegop on how lament is not a stage to pass through but a permanent mode of honest address to God — especially for those whose grief does not resolve on anyone's timeline." },
              { videoId: "4Eg_di-O8nM", title: "When Grief Feels Unbearable", channel: "Francis Chan", description: "Francis Chan on how the gospel speaks to the weight of loss that does not lift — and what hope in resurrection means when the grief is still fully present." },
              { videoId: "FV0Kb14TnPU", title: "Grieving When Life Does Not Go as Planned", channel: "The Gospel Coalition", description: "Vroegop on the shape of biblical grief — how the psalms of lament model honest engagement with God in losses that resist quick resolution." },
              { videoId: "oNpTha80yyE", title: "The Sovereignty of God in Loss", channel: "Ligonier Ministries", description: "R.C. Sproul on what it means to trust God's sovereignty when the loss is real, the grief is ongoing, and the explanations are insufficient." },
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
  );
}
