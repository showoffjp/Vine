"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "This Grief Has Its Own Shape", verse: "Lamentations 1:12", text: "Is it nothing to you, all you who pass by? Look around and see. Is any suffering like my suffering? Suicide loss is a distinct grief. It carries features that other losses don't carry: the question of why, the question of whether you could have prevented it, the guilt, the stigma, the social silence around the word suicide itself. These features make the grief more complicated, more isolating, and often more prolonged than other deaths. Naming the distinctiveness of this grief is not self-pity. It is accurate description." },
  { title: "God Is Not Absent in the Incomprehensible', verse: 'Psalm 88:18", text: "You have taken from me friend and neighbor — darkness is my closest friend. Psalm 88 is the one psalm in the Psalter that offers no resolution — it ends in darkness. The person in it is not comforted; they are not rescued. But they are speaking. They are still bringing their unresolved, unmitigated darkness to God. This is a model for suicide loss: not that the darkness resolves quickly, not that the grief is tidied up by theology, but that even in the darkest places, speech to God is possible and the darkness itself is a form of prayer." },
  { title: "Suicide Does Not Determine Salvation', verse: 'Romans 8:38-39", text: "Neither death nor life... nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord. The theological question of where the person who died by suicide is now is one that survivors often carry with acute anguish. The Reformed tradition, the Catholic tradition, and most Protestant traditions have moved away from definitive condemnation, recognizing that the state of mind in suicidal crisis is often not a state of clear moral choice. God's judgment is not ours to pronounce. The love that does not let go is the love described here." },
  { title: "Grief Does Not Have a Timetable', verse: 'Ecclesiastes 3:4", text: "A time to weep and a time to laugh, a time to mourn and a time to dance. Suicide loss survivors are frequently pressured toward premature resolution — the cultural anxiety about extended grief, the religious pressure to demonstrate faith by not grieving excessively. Ecclesiastes allows the mourning season without qualification. The 'time to weep' does not end on schedule. The church that can sit with the bereaved in their extended grief, without insisting on resolution, is being genuinely present." },
  { title: "You Are Not Responsible for What You Could Not Control', verse: 'Ezekiel 18:20", text: "The one who sins is the one who will die. The child will not share the guilt of the parent, nor will the parent share the guilt of the child. The theological category of individual responsibility speaks directly to the survivor's guilt that saturates suicide loss. You did not make the choice. The pain of their death does not transfer responsibility to you. This is genuinely difficult to receive — the heart insists on finding ways it was responsible. Receiving the theological truth about individual responsibility is part of the long work of healing." },
];

const voices = [
  { id: "as", name: "Albert Hsu", role: "Author, Grieving a Suicide", quote: "Suicide grief is uniquely complicated by the question that never stops: why? Other bereaved people have difficult questions too. But suicide survivors have a question that the person who could answer it took with them. Learning to live with that unanswered question — without being destroyed by it — is one of the central tasks of suicide loss grief.", bio: "Hsu's Grieving a Suicide is the foremost Christian book on suicide loss. Written after his own father's suicide, it addresses the theological, emotional, and relational dimensions of this specific grief with unusual honesty and pastoral depth." },
  { id: "sp", name: "Suicide Prevention Resource Center", role: "SPRC — Survivor Support Resources", quote: "Suicide loss survivors are at elevated risk for suicidal ideation themselves — not because they are weak, but because the loss is so destabilizing and the risk factors are sometimes shared. Anyone who has lost someone to suicide should be connected with survivor-specific support and should have their own safety and wellbeing specifically attended to.", bio: "The American Foundation for Suicide Prevention (afsp.org) maintains the International Survivors of Suicide Loss Day resources and a directory of suicide loss support groups. The Alliance of Hope for Suicide Loss Survivors (allianceofhope.org) provides online community specifically for this grief." },
  { id: "dk", name: "David Kessler", role: "Author, Finding Meaning; Grief Expert", quote: "Suicide grief often includes what survivors call 'the question' — the relentless loop of wondering what they missed, what they could have said, what might have changed the outcome. That question is not answerable. Learning to live alongside the unanswerable question, rather than requiring it to be answered before you can heal, is the work.", bio: "Kessler's work on grief includes specific attention to the distinctive features of traumatic and complicated grief. His finding-meaning framework provides a path through the kind of grief that does not resolve through standard bereavement processes." },
];

const practices = [
  { icon: "🤝", title: "Find Suicide-Loss-Specific Support", text: "Standard grief support groups are not the same as suicide loss support. The specific features of this grief — the guilt, the stigma, the unanswerable why — require a group that understands them from the inside. The American Foundation for Suicide Prevention (afsp.org) maintains a directory of survivor support groups across the country. The Alliance of Hope for Suicide Loss Survivors (allianceofhope.org) offers online community. Connecting with other survivors is one of the most important things you can do." },
  { icon: "💬", title: "Work With a Grief Therapist Who Understands Complicated Grief", text: "Suicide loss frequently produces complicated grief — grief that does not follow the standard bereavement process and does not resolve without professional support. A therapist who specializes in complicated grief or trauma-informed grief will understand the specific dynamics. EMDR and other trauma-informed approaches are often more useful than standard talk therapy for this kind of loss. Find a therapist through Psychology Today (filter by grief and trauma) or through your AFSP chapter." },
  { icon: "🛡️", title: "Attend to Your Own Safety", text: "Suicide loss survivors are at elevated risk for suicidal ideation. This is not weakness or instability — it is a documented, understandable response to this specific kind of loss. Please tell your therapist and doctor that you have lost someone to suicide. Have a safety plan. Know who you will call if thoughts of suicide arise. You are not responsible for what happened to your loved one. Your own life matters. Crisis line: 988." },
  { icon: "📖", title: "Read — When You Are Ready", text: "Albert Hsu's Grieving a Suicide, Kay Warren's Choose Joy, Carla Fine's No Time to Say Goodbye — the literature of suicide loss survivor grief is substantial. You do not need to read it in the acute phase. But when you are ready, there is a body of writing by people who have walked this road and come through it, carrying wisdom about what helped and what didn't." },
];

const scriptures = [
  { verse: "Psalm 88:1-2", text: "Lord, you are the God who saves me; day and night I cry out to you. May my prayer come before you; turn your ear to my cry." },
  { verse: "Romans 8:38-39", text: "Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you." },
  { verse: "Lamentations 3:32-33", text: "Though he brings grief, he will show compassion, so great is his unfailing love. For he does not willingly bring affliction or grief to anyone." },
  { verse: "John 11:35", text: "Jesus wept." },
];

type SLEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function SuicideLossPage() {
  const [tab, setTab] = useState("theology");
  const [slJournal, setSlJournal] = useState<SLEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_suicidelossjj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_suicidelossjj_entries", JSON.stringify(slJournal)); } catch {}
  }, [slJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setSlJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setSlJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Grief & Loss</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Suicide Loss</h1>
        <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
          For those who have lost someone to suicide — the specific grief, the unanswerable questions, and the God who remains.
        </p>
        <div style={{ background: CARD, border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "0.75rem 1rem", marginBottom: "2rem", fontSize: "0.9rem" }}>
          <span style={{ color: PURPLE, fontWeight: 600 }}>If you are in crisis: </span>
          <span style={{ color: TEXT }}>Call or text <strong>988</strong></span>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; AFSP: </span><span style={{ color: TEXT }}>afsp.org</span>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; Alliance of Hope: </span><span style={{ color: TEXT }}>allianceofhope.org</span>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", marginBottom: "0.75rem" }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.85rem", color: PURPLE, fontWeight: 600, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Grief Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>Where is my grief today — what am I carrying?</label>
                <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What do I want to say about the person I lost?</label>
                <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>One step I will take toward support or care for myself today</label>
                <textarea value={jStep} onChange={e => setJStep(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 60, boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 8, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {slJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {slJournal.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{entry.date}</div>
                    {entry.feeling && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Grief: </span>{entry.feeling}</p>}
                    {entry.truth && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Memory: </span>{entry.truth}</p>}
                    {entry.step && <p style={{ fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Step: </span>{entry.step}</p>}
                    <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "0.25rem 0.75rem", cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop on lament as the biblical language for those who are suffering and still believe — how to pray honestly in the darkness of suicide loss, which is among the most disorienting forms of grief." },
              { videoId: "4Eg_di-O8nM", title: "When Grief Feels Unbearable", channel: "Desiring God", description: "Pastoral teaching on grief — what the Bible says about mourning, why God invites lament rather than suppressing it, and how the Psalms give language for the darkest seasons including traumatic loss." },
              { videoId: "FV0Kb14TnPU", title: "Grieving Traumatic Loss — Mark Vroegop", channel: "The Gospel Coalition", description: "Vroegop on how biblical lament provides a framework for traumatic loss — giving grief its honest voice without abandoning faith. Deeply relevant to suicide loss survivors." },
              { videoId: "mC-zw0zCCtg", title: "The Psalms of Lament: Permission to Grieve", channel: "The Bible Project", description: "An exploration of the lament psalms — how they model honest, raw prayer in the midst of suffering, including Psalm 88 which ends without resolution, the psalm that most fits suicide loss." },
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
