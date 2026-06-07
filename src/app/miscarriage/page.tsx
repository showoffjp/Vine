"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Your Baby Was a Person — This Is Real Loss", verse: "Psalm 139:13", body: "'For you created my inmost being; you knit me together in my mother's womb' (Psalm 139:13). Miscarriage is the loss of a person whom God knew and formed. This is not an abstraction, a failed pregnancy, or a medical event that shouldn't be grieved too heavily. This is the death of someone. The church has historically underacknowledged this, leaving many families grieving in a strange silence that compounds the pain. You are not overreacting. Your grief is proportionate to your loss." },
  { title: "God Sees What Others Pass Over", verse: "Genesis 16:13", body: "When Hagar was alone and suffering in the wilderness, she named God 'El-Roi' — the God who sees. The text gives her name and records her pain in detail even though she was a slave, a refugee, and a person of no social standing. God records what society considers beneath record-keeping. Your loss is not too small for God's attention because the larger world has minimized it." },
  { title: "Lament Is the Right Response — Not Gratitude Performance", verse: "Job 3:1-3", body: "Job, in his anguish, cursed the day he was born. He did not perform gratitude for surviving. He did not immediately trust God's plan. He wept, he raged, and the text records his lament without condemning it. The God of Scripture does not require that you skip grief in favor of immediate faith. The Psalms of lament vastly outnumber the Psalms of thanksgiving. You are allowed to mourn before you are allowed to hope." },
  { title: "Children Are with God", verse: "Matthew 18:3-4", body: "Jesus spoke of children as inhabiting the kingdom of heaven, used them as models of faith, and warned anyone who harmed them in the severest terms. While Scripture does not give us a systematic theology of infant death, the consistent posture of the text is that children are near to God and that God is near to children. Many Christians throughout history have held, on theological grounds, that children who die before accountability are received into God's presence. You may grieve with hope." },
  { title: "Resurrection Is Real and Bodily", verse: "1 Corinthians 15:43", body: "'It is sown in dishonor; it is raised in glory. It is sown in weakness; it is raised in power.' Paul's theology of resurrection is concrete and embodied — not the spiritualization of the dead, but the transformation and restoration of what was lost. Many who have grieved children have found comfort in holding this hope not as a platitude but as a genuine promise: the resurrection changes the permanent nature of every death, including this one." },
];

const VOICES = [
  { id: "vroegop", name: "Mark Vroegop", era: "1975–present", context: "Pastor; Dark Clouds, Deep Mercy; lament", bio: "Vroegop and his wife Sarah have experienced multiple miscarriages, and his writing on lament theology — particularly Dark Clouds, Deep Mercy — emerged directly from that grief. He argues that the church has largely lost the practice of biblical lament, and that restoring it is essential for accompanying people through the grief that Scripture actually prepares them for.", quote: "Miscarriage put us in a strange grief — intense and real, but invisible to others. There were no casseroles, no funeral, no official acknowledgment. We grieved something that much of the world didn't fully recognize as a loss. The church can be that community that refuses to minimize what God hasn't minimized.", contribution: "Vroegop gave the church a biblical framework for lament that applies directly to pregnancy loss — holding both honest grief and genuine hope without collapsing one into the other." },
  { id: "wolfe", name: "Sherri Devashrayee Wittwer", era: "Contemporary", context: "Author; Gone Too Soon; pregnancy loss ministry", bio: "Wittwer's Gone Too Soon is one of the most widely used Christian resources for pregnancy loss — written with theological care and deep pastoral sensitivity. She addresses the specific isolation of miscarriage grief and provides practical guidance for both sufferers and those who want to support them.", quote: "What makes miscarriage grief particularly hard is that you are mourning someone only you knew was there. You were the universe of this person's life. The public has little framework for that grief, and the church often follows the public rather than Scripture in how much space it gives.", contribution: "Wittwer provided a pastoral resource specifically for pregnancy loss that helped hundreds of churches develop ministry to grieving parents who had previously been served inadequately." },
  { id: "lewis", name: "C.S. Lewis", era: "1898–1963", context: "A Grief Observed; grief theology", bio: "Though Lewis's A Grief Observed concerned the death of his wife Joy, his unflinching account of grief — the anger at God, the emptiness, the sense that reality has changed — speaks to any profound loss. His willingness to write honestly about the disorientation of grief, including his theological disorientation, gave many permission to be honestly lost in their grief before they found their way through it.", quote: "No one ever told me that grief felt so like fear. I am not afraid, but the sensation is like being afraid. The same fluttering in the stomach, the same restlessness, the yawning. I keep on swallowing. At other times it feels like being mildly drunk, or concussed.", contribution: "Lewis's raw honesty about grief, including his questions about God during grief, modeled a faith that can hold the full weight of loss rather than performing hope before it has been genuinely found." },
];

const PRACTICES = [
  { title: "Acknowledge the Loss Formally", icon: "🕯️", color: PURPLE, desc: "Many families find that giving some formal acknowledgment to the loss — a name, a ceremony, a marker, a recorded date — helps give the grief somewhere to go. You are allowed to create ritual where society has not provided it.", steps: ["Consider naming your baby, even if you don't know the sex", "Mark the date of the loss in your calendar — anniversaries are real and worth noting", "Some families plant a tree, create a small memorial, or commission a piece of art", "A brief service, even just family, can give grief its proper shape"] },
  { title: "Give the Grief Room", icon: "💔", color: "#EF4444", desc: "The timeline others give for grief — 'you'll feel better soon', 'at least it was early', 'at least you know you can get pregnant' — is not the timeline grief operates on. Grief takes the time it takes. Rushing it produces a kind of delayed grief that resurfaces later.", steps: ["Tell the well-meaning minimizers: 'I appreciate that you care, but I need space to grieve this fully'", "Don't gauge your recovery by others' expectations", "Watch for grief reemerging at expected times: due dates, announcements, baby showers, Mother's Day", "If grief feels stuck, unmoving, or all-consuming after several months, consider professional support"] },
  { title: "Protect Your Marriage in Grief", icon: "🤝", color: GREEN, desc: "Partners grieve differently and on different timelines — which can make couples feel deeply alone at the very time they most need each other. The most common error is interpreting your partner's different grief style as not caring.", steps: ["Check in regularly: 'How are you doing with this today?'", "Don't assume your partner has grieved less because they grieve differently", "Physical touch and presence without pressure to talk can be deeply important", "If the loss becomes a wedge rather than a shared experience, couple's therapy is not a failure"] },
  { title: "Find Community Who Knows", icon: "💬", color: PURPLE, desc: "The specific grief of pregnancy loss is best accompanied by others who have experienced it. The unspoken understanding — the nod across a room, the lack of need to explain — is irreplaceable.", steps: ["Look for local pregnancy loss support groups (many hospitals and churches run them)", "Share Your Story (sharingparents.org) and MEND (mendnational.org) are Christian networks", "Online communities allow anonymous connection at 2am when grief is sharpest", "Let your doctor, midwife, or OB know the emotional dimension of your care needs"] },
];

const SCRIPTURE = [
  { verse: "Psalm 139:13", text: "For you created my inmost being; you knit me together in my mother's womb." },
  { verse: "Psalm 34:18", text: "The LORD is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Matthew 5:4", text: "Blessed are those who mourn, for they will be comforted." },
  { verse: "Romans 8:38-39", text: "Neither death nor life... nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
  { verse: "Job 3:3", text: "May the day of my birth perish, and the night that said, 'A boy is conceived!' — Job, in lament, permitted by God." },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function MiscarriagePage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_miscarriage_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_miscarriage_voice", "vroegop");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type MiscarriageJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [mcJournal, setMcJournal] = useState<MiscarriageJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_miscarriagej_entries") ?? "[]"); } catch { return []; } });
  const [jmcFeeling, setJmcFeeling] = useState("");
  const [jmcTruth, setJmcTruth] = useState("");
  const [jmcStep, setJmcStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_miscarriagej_entries", JSON.stringify(mcJournal)); } catch {} }, [mcJournal]);
  function saveMcEntry() {
    if (!jmcFeeling.trim() && !jmcTruth.trim()) return;
    setMcJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jmcFeeling, truth: jmcTruth, step: jmcStep }, ...prev]);
    setJmcFeeling(""); setJmcTruth(""); setJmcStep("");
  }
  function deleteMcEntry(id: string) { setMcJournal(prev => prev.filter(e => e.id !== id)); }

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
        <div style={{ fontSize: 52, marginBottom: 12 }}>🕯️</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Miscarriage &amp; Pregnancy Loss</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto 24px", lineHeight: 1.75 }}>
          This was a person. This is a real loss. You are not overreacting.
          Theology, voices, and a place to grieve for those who have lost a child before birth.
        </p>
        <div style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}30`, borderRadius: 10, padding: "14px 20px", maxWidth: 440, margin: "0 auto", fontSize: 14, color: "#B0D8BE", lineHeight: 1.7 }}>
          <strong>If you are in crisis:</strong> Call <strong>988</strong> (Suicide &amp; Crisis Lifeline).<br />
          <strong>Pregnancy Loss:</strong> MEND (mendnational.org) · Share Pregnancy &amp; Infant Loss Support
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
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Grief Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                You are allowed to grieve as long and as fully as this loss deserves.
                Write without minimizing. Your baby was real. Your grief is real.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jmcFeeling} onChange={e => setJmcFeeling(e.target.value)}
                  placeholder="What am I feeling today? What am I missing? What do I want to say?"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jmcTruth} onChange={e => setJmcTruth(e.target.value)}
                  placeholder="Something true I am holding — a Scripture, a memory, a hope, however small..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jmcStep} onChange={e => setJmcStep(e.target.value)}
                  placeholder="One thing I will do today to care for myself or honor this loss..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveMcEntry}
                  style={{ alignSelf: "flex-start", background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {mcJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. Your grief deserves to be written down.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {mcJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteMcEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
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
              { videoId: "FV0Kb14TnPU", title: "Grieving a Miscarriage — Mark Vroegop", channel: "The Gospel Coalition", description: "Pastor Mark Vroegop, who has experienced multiple miscarriages with his wife, speaks about how biblical lament provides a framework for pregnancy loss — giving grief its honest voice without abandoning hope." },
              { videoId: "kP_ZSz2UGEU", title: "When You Lose a Baby — What the Bible Says", channel: "Desiring God", description: "A theological treatment of pregnancy loss — addressing questions about the personhood of the unborn, the fate of children who die, and how to hold grief and faith together." },
              { videoId: "tXdHBGMbpng", title: "How to Support Someone Who Has Had a Miscarriage", channel: "Crossroads Church", description: "Practical guidance for both those who have experienced pregnancy loss and those who want to support them — what to say, what not to say, and how to create space for grief that many minimize." },
              { videoId: "eCYalLxHSDs", title: "Finding God in Pregnancy Loss", channel: "She Reads Truth", description: "Women who have experienced miscarriage share their stories and the Scripture that accompanied them through grief — honest, pastoral, and deeply supportive for those in the middle of loss." },
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
