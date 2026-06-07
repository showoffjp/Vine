"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#6B4FBB";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const tabs = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof tabs[number];

const theology = [
  {
    title: "What Is Ambiguous Loss?",
    body: "Psychologist Pauline Boss coined 'ambiguous loss' to describe grief that lacks clear resolution — a loved one with dementia who is physically present but psychologically absent; a missing child; an estranged family member; a miscarriage; a relationship that ended without closure. The grief is real and profound, but there is no casket, no ceremony, no clear moment to grieve. The church often struggles to name and hold this kind of loss.",
  },
  {
    title: "Lament When There Is No Grave to Visit",
    body: "The Psalms contain a form of prayer designed precisely for ambiguous loss: lament. Psalm 88 ends without resolution — no happy turn, no 'but God.' It simply cries into darkness. This is not faithlessness. It is honest worship in the middle of what cannot be fixed. Christians are permitted — invited — to lament losses that don't fit neatly into grief categories. God is large enough for the crying that cannot explain itself.",
  },
  {
    title: "The Resurrection Reframes — But Does Not Erase — Present Loss",
    body: "The Christian hope of resurrection is real and it matters. But Paul grieves 'as those who have hope' — not as those who have no grief (1 Thess 4:13). Hope does not eliminate sorrow; it holds sorrow within a larger story. The resurrection means that ambiguous loss is not the final word. But right now, in this body, in this time, the loss is real and deserves to be wept over without theological hurry.",
  },
  {
    title: "God Holds What We Cannot Resolve",
    body: "Many ambiguous losses cannot be processed to resolution because the situation remains unresolved — a person with advancing Alzheimer's, a prodigal who never returned, a marriage that dissolved in silence. The spiritual task is not to achieve closure but to entrust the unresolved to God. 'Casting all your anxieties on him, because he cares for you' (1 Pet 5:7) — including the anxieties that have no answer this side of eternity.",
  },
  {
    title: "Community and the Unnamed Loss",
    body: "Ambiguous loss is especially isolating because others rarely recognize it as grief. The person whose parent has dementia receives no casseroles. The one whose child chose estrangement gets no condolence cards. The church can be countercultural here: naming, witnessing, and holding losses that society cannot see. 'Bear one another's burdens' (Gal 6:2) extends to the burdens that have no clear shape.",
  },
];

const voices = [
  {
    name: "Pauline Boss, PhD",
    title: "Family Therapist, Originator of Ambiguous Loss Theory",
    quote: "Ambiguous loss is the most difficult loss because it defies resolution. The temptation is to say 'get over it,' but there is nothing to get over — the situation remains. Learning to live with unresolved grief is a profound act of strength.",
  },
  {
    name: "Shelly Rambo",
    title: "Author, 'Spirit and Trauma'",
    quote: "What the Christian tradition most needs to recover is the capacity to remain in the middle — not rushing survivors to resurrection when they are still in Holy Saturday. Easter is real, but Holy Saturday is where most of us live. God is present in that in-between space.",
  },
  {
    name: "Jerry Sittser",
    title: "Author, 'A Grace Disguised'",
    quote: "The quickest way to reach the light of day is not to run toward the sunset, trying to out-race the darkness. It is to head east and walk straight into the darkness until you come out the other side. Grief must be entered, not bypassed.",
  },
  {
    name: "Kate Bowler",
    title: "Author, 'Everything Happens for a Reason (And Other Lies I've Loved)'",
    quote: "Ambiguous suffering is not a theological problem to be solved. Sometimes the most loving thing we can do is sit with someone in their unresolved darkness — not fixing, not explaining, just staying. The presence of another human being in suffering is itself a form of grace.",
  },
];

const practices = [
  {
    title: "Naming the Loss Aloud",
    body: "Ambiguous loss often goes unnamed because there are no social scripts for it. A crucial first step is to say it out loud — to yourself, to God, to a trusted person: 'I am grieving that my father is physically alive but no longer recognizes me. I am grieving this as a real loss.' Naming moves the loss from a vague, pervasive ache to something that can be witnessed and held.",
  },
  {
    title: "Ritual Without Closure",
    body: "Traditional grief rituals (funerals, memorials) work by providing a clear moment of acknowledgment. You can create your own rituals for unresolved losses: light a candle each week for an estranged child; write an unsent letter; tend a plant that represents the relationship; gather a few trusted people and speak the loss aloud together. Ritual marks what cannot be marked any other way.",
  },
  {
    title: "Permission to Grieve Without Timeline",
    body: "Ambiguous loss does not follow the stages of grief because the situation does not end. Give yourself permission to grieve without a completion date. When the situation changes (the estranged person makes contact, the dementia worsens, the missing person is found), the grief shifts — it may intensify. This is not regression. It is honest engagement with an ongoing reality.",
  },
  {
    title: "Holding Both Things",
    body: "The spiritual practice of holding tension — 'my parent is here and not here'; 'my child is alive but has chosen to disappear from my life' — is harder than choosing one reality. Practicing 'and': 'I am grieving AND I am trusting God. I do not have resolution AND I believe God holds this.' Both things can be true simultaneously. This is not denial; it is a profound form of mature faith.",
  },
  {
    title: "Grief-Informed Spiritual Direction",
    body: "A spiritual director who understands ambiguous loss can provide something that well-meaning friends rarely can: the space to grieve the same loss repeatedly without being hurried toward resolution. If you cannot find a grief-informed spiritual director, a licensed therapist who specializes in complicated grief is essential. ADAA's therapist finder and Psychology Today's directory allow filtering by specialization.",
  },
  {
    title: "Psalms of Lament as a Daily Practice",
    body: "Read one psalm of lament daily for a season — Psalms 10, 13, 22, 42, 43, 55, 88. Let the text give you language when you have none. The psalmists move through complaint, memory, petition, and often arrive at a fragile, trust-against-the-evidence. They do not resolve the pain — they bring it before God as it is. This is the pattern ambiguous grief requires.",
  },
];

const scriptures = [
  {
    ref: "Psalm 88:13–14, 18",
    text: "But I, O LORD, cry to you; in the morning my prayer comes before you. O LORD, why do you cast my soul away? ... Darkness is my closest friend.",
    note: "The only psalm that ends in unresolved darkness. Permission granted for grief that finds no morning — yet still speaks to God in the night.",
  },
  {
    ref: "Lamentations 3:19–21",
    text: "Remember my affliction and my wanderings, the wormwood and the gall! My soul continually remembers it and is bowed down within me. But this I call to mind, and therefore I have hope.",
    note: "Jeremiah holds the full weight of loss and does not minimize it. Hope is not the absence of sorrow — it is what he calls to mind while sorrow remains.",
  },
  {
    ref: "Romans 8:26",
    text: "The Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words.",
    note: "Ambiguous loss often leaves us without words. The Spirit prays what we cannot articulate. Our inarticulate grief is still held.",
  },
  {
    ref: "1 Thessalonians 4:13",
    text: "We do not want you to be uninformed, brothers, about those who are asleep, that you may not grieve as others do who have no hope.",
    note: "Note what Paul does not say: 'Do not grieve.' He says: grieve, but within a larger story. Grief and hope are not opposites.",
  },
  {
    ref: "Revelation 21:4",
    text: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore.",
    note: "The resolution of ambiguous loss is eschatological — on the other side of the resurrection. Today we grieve. That day, every unresolved tear will be answered.",
  },
  {
    ref: "John 11:35",
    text: "Jesus wept.",
    note: "Jesus knew Lazarus would rise. He wept anyway. Permission to weep even when you believe in resurrection. The tears and the hope are both real.",
  },
];

const videos = [
  { id: "XtwIT8JjddM", title: "10,000 Reasons — Matt Redman" },
  { id: "IvSuGyJQ6oM", title: "Goodness of God — Bethel Music" },
  { id: "G-2e9mMf7E8", title: "Gospel of John — BibleProject" },
  { id: "nQWFzMvCfLE", title: "What A Beautiful Name — Hillsong Worship" },
];

const JOURNAL_KEY = "vine_ambiguous_loss_entries";

function JournalTab() {
  const [entries, setEntries] = useState<{ id: number; date: string; text: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [draft, setDraft] = useState("");
  const save = () => {
    if (!draft.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
    setDraft("");
  };
  const remove = (id: number) => {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
  };
  const prompts = [
    "What is the loss I am carrying that no one else seems to see?",
    "What would I say to God right now about this unresolved grief?",
    "Where have I been pressured to 'move on' before I was ready? What do I wish someone had said instead?",
    "What small ritual might help me acknowledge this loss today?",
  ];
  return (
    <div>
      <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
        <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "1rem" }}>Reflection Prompts</h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {prompts.map((p, i) => (
            <li key={i} style={{ color: MUTED, fontSize: "0.9rem", paddingLeft: "1rem", borderLeft: `2px solid ${ACCENT}40` }}>{p}</li>
          ))}
        </ul>
      </div>
      <textarea
        value={draft}
        onChange={e => setDraft(e.target.value)}
        placeholder="Write freely — your words are private and stay only on your device..."
        rows={5}
        style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }}
      />
      <button onClick={save} style={{ marginTop: 8, padding: "0.6rem 1.6rem", background: ACCENT, color: "#fff", border: "none", borderRadius: 6, fontWeight: 600, cursor: "pointer" }}>Save Entry</button>
      {entries.length > 0 && (
        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {entries.map(e => (
            <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ color: MUTED, fontSize: "0.78rem" }}>{e.date}</span>
                <button onClick={() => remove(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.78rem" }}>Delete</button>
              </div>
              <p style={{ color: TEXT, fontSize: "0.92rem", margin: 0, whiteSpace: "pre-wrap" }}>{e.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AmbiguousLossComplexGriefChristian() {
  const [activeTab, setActiveTab] = useState<Tab>("Theology");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg, ${ACCENT}18 0%, transparent 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "4rem 1.5rem 3rem" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: `${ACCENT}22`, border: `1px solid ${ACCENT}44`, borderRadius: 20, padding: "4px 14px", fontSize: "0.75rem", fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem" }}>
              Grief & Loss
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
              Ambiguous Loss<br />
              <span style={{ color: ACCENT }}>Grief Without a Grave</span>
            </h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 620, marginBottom: "1.5rem" }}>
              For those grieving what cannot be named — the parent who no longer knows you, the child who walked away, the love that ended without goodbye. Your grief is real, even without a casket. God holds what cannot be resolved.
            </p>
            <div style={{ background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`, borderRadius: 8, padding: "1rem 1.2rem", maxWidth: 520 }}>
              <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>
                Crisis Support: <strong>988</strong> Suicide & Crisis Lifeline — call or text 988<br />
                <span style={{ fontWeight: 400, color: MUTED }}>Complicated Grief Treatment: Columbia University Center for Complicated Grief — <a href="tel:12128510435" style={{ color: ACCENT }}>212-851-0435</a></span>
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: `1px solid ${BORDER}`, background: BG, position: "sticky", top: 0, zIndex: 10 }}>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", overflowX: "auto", gap: 0 }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setActiveTab(t)} style={{ padding: "1rem 1.4rem", background: "none", border: "none", borderBottom: activeTab === t ? `2px solid ${ACCENT}` : "2px solid transparent", color: activeTab === t ? ACCENT : MUTED, fontWeight: activeTab === t ? 700 : 400, cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s" }}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "2.5rem 1.5rem" }}>

          {activeTab === "Theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {theology.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Voices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {voices.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                  <p style={{ color: TEXT, lineHeight: 1.8, fontSize: "1rem", fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p>
                  <div>
                    <div style={{ color: ACCENT, fontWeight: 700, fontSize: "0.9rem" }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Practices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {practices.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{p.body}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {scriptures.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${ACCENT}`, borderRadius: 10, padding: "1.5rem" }}>
                  <div style={{ color: ACCENT, fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>{s.ref}</div>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.75, marginBottom: "0.75rem" }}>&ldquo;{s.text}&rdquo;</p>
                  <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{s.note}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Journal" && <JournalTab />}

          {activeTab === "Videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {videos.map((v) => (
                <div key={v.id} style={{ background: CARD, borderRadius: 10, overflow: "hidden", border: `1px solid ${BORDER}` }}>
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <div style={{ padding: "1rem 1.2rem" }}>
                    <p style={{ color: TEXT, fontWeight: 600, margin: 0 }}>{v.title}</p>
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
