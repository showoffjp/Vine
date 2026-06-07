"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const CAUSES = [
  { cause: "Sin Blocking the Way", color: "#EF4444", desc: "Unconfessed sin creates a distance in the relationship with God that is often experienced as dryness. David describes it: 'When I kept silent, my bones wasted away through my groaning all day long' (Psalm 32:3). The resolution is confession — not only the feeling of remorse but the specific naming of the specific sin. Psalm 51 is the model.", response: "Examine your conscience specifically, not generally. Name the sin to God and, where appropriate, to another person. Receive absolution or assurance of forgiveness. The dryness often lifts when the sin is brought into the light." },
  { cause: "Spiritual Negligence", color: "#F59E0B", desc: "Spiritual vitality requires input — Scripture, prayer, community, worship, silence. When these are consistently neglected, dryness is the predictable result. It is not God withdrawing; it is like a fire that has not been fed. Many people who describe spiritual dryness have, on examination, significantly reduced or eliminated the practices that feed their souls.", response: "Before diagnosing a profound spiritual crisis, honestly assess whether you have been consistently in Scripture, praying, and in community. Often the solution is not theological but practical: return to the basics." },
  { cause: "The Dark Night of the Soul", color: "#8B5CF6", desc: "John of the Cross described a period in which God deliberately withdraws the felt sense of his presence to produce mature, purified faith. This is not punishment — it is spiritual formation. Mother Teresa experienced it for decades. The person in a dark night is often doing everything right; the absence of feeling is not evidence of absence. This is the most demanding cause to identify because it requires ruling out others first.", response: "Stay the course. Remain faithful in practice without expecting reward. Read John of the Cross, Thomas Merton, or others who name this experience. Find a spiritual director. The dark night ends — sometimes in sudden restoration, sometimes in a deeper, quieter sense of God's presence that transcends feeling." },
  { cause: "Exhaustion and Depletion", color: "#3B82F6", desc: "Physical, emotional, and spiritual exhaustion overlap. Elijah, after his greatest victory, collapsed in suicidal despair (1 Kings 19). God's response was not a sermon — it was food, water, and sleep. Many spiritual dryness seasons are primarily physical. Extended caregiving, burnout, sleep deprivation, or emotional overwhelm can produce a state that feels like spiritual abandonment.", response: "Rest before interpreting. Before deciding you are in a spiritual crisis, sleep, eat, step back from ministry obligations, and give your body what it needs. Many people emerge from 'spiritual dryness' after they have physically recovered." },
  { cause: "Major Life Transition", color: GREEN, desc: "Grief, divorce, job loss, illness, relocation — major transitions disrupt every pattern including spiritual practice. The prayer rhythms, community, and worship forms that sustained you before may not be accessible or may not function the same way in the new season. This is not spiritual failure; it is disruption requiring adaptation.", response: "Give yourself grace in the transition. Maintain minimal faithful practice even when the usual forms don't work. Find a new faith community if you've relocated. Let the lament psalms (22, 42, 88) give you language for the disruption. Transitions have endpoints." },
];

const SAINTS = [
  { name: "Mother Teresa", quote: "Where is my faith? Even deep down there is nothing but emptiness and darkness... I am told God lives in me — and yet the reality of darkness and coldness and emptiness is so great that nothing touches my soul.", context: "Teresa experienced almost fifty years of spiritual darkness — while serving the poorest of the poor and being recognized as the world's greatest living saint. Her letters, published posthumously, revealed that her exterior ministry was sustained without interior consolation." },
  { name: "C.S. Lewis", quote: "When you are happy... if you remember yourself and turn to Him with gratitude and praise, you will be — or so it feels — welcomed with open arms. But go to Him when your need is desperate, when all other help is vain, and what do you find? A door slammed in your face, and a sound of bolting and double bolting on the inside.", context: "Written in 'A Grief Observed' after his wife Joy died of cancer. Lewis worked through one of the most honest accounts of faith under devastating loss ever written — and came out the other side with deeper (not easier) faith." },
  { name: "David", quote: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? I cry out by day, but you do not answer, by night, but I find no rest.", context: "Psalm 22:1-2. The same words Jesus quoted from the cross (Matthew 27:46). David's experience of divine abandonment was real enough that Jesus identified with it at the moment of maximum desolation." },
  { name: "John of the Cross", quote: "To reach what you know not, you must go by a way you know not. To reach what you possess not, you must go by a way you possess not.", context: "The 16th-century Spanish mystic who named and mapped the 'dark night of the soul' in his classic works. He understood spiritual dryness as a purgative process — God stripping away the soul's dependence on spiritual consolation so that it can love God for God's sake alone." },
];

const LAMENT_PSALMS = [
  {
    id: "psalm22",
    name: "Psalm 22",
    heading: "My God, My God, Why Have You Forsaken Me?",
    color: "#EF4444",
    openingVerses: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? I cry out by day, but you do not answer, by night, but I find no rest. (Psalm 22:1-2)",
    structure: "The psalm moves through three phases: deep lament and accusation (vv.1-21), then a pivot point of memory ('Yet you are enthroned as the Holy One,' v.3), and finally a burst of trust and praise that comes before any change in circumstances (vv.22-31).",
    how: "This psalm teaches that lament can be addressed directly to God — not about him but to him. 'My God' is still a form of address, still a relationship claim. The pivot in verse 22 comes without any explanation of the dryness — the trust is not based on resolution but on character. Jesus's use of this psalm from the cross (Matthew 27:46) sanctifies the experience of divine abandonment as something the Son of God himself entered.",
  },
  {
    id: "psalm42",
    name: "Psalm 42-43",
    heading: "As the Deer Pants for Water",
    color: "#3B82F6",
    openingVerses: "As the deer pants for streams of water, so my soul pants for you, my God. My soul thirsts for God, for the living God. When can I go and meet with God? My tears have been my food day and night. (Psalm 42:1-3)",
    structure: "Psalms 42 and 43 are a single lament poem with a recurring refrain that functions as a self-coaching device: 'Why, my soul, are you downcast? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Savior and my God' (42:5, 11; 43:5). The psalmist repeats this refrain three times — talking to himself, preaching to himself.",
    how: "The repeated refrain reveals the spiritual practice at the heart of the psalm: preaching the gospel to yourself. The psalmist feels forsaken; he tells himself to hope anyway. He does not wait for the feeling to align with the theological truth — he speaks the truth to the feeling. Martyn Lloyd-Jones famously took this pattern as the key to addressing depression and dryness: stop listening to yourself and start talking to yourself.",
  },
  {
    id: "psalm88",
    name: "Psalm 88",
    heading: "The Darkest Psalm — No Resolution",
    color: "#8B5CF6",
    openingVerses: "Lord, you are the God who saves me; day and night I cry out to you. May my prayer come before you; turn your ear to my cry. I am overwhelmed with troubles and my life draws near to death. (Psalm 88:1-3)",
    structure: "Psalm 88 is unique in the Psalter: it begins in darkness and ends in darkness. There is no pivot, no resolution, no final trust statement. The last line is: 'Darkness is my closest friend' (v.18). Unlike nearly every other lament psalm, this one does not move from lament to praise.",
    how: "The presence of Psalm 88 in the canon is itself the answer to those who wonder if their darkness is too dark. God included a psalm with no resolution. The psalm begins 'Lord, you are the God who saves me' — but the speaker never feels saved during the psalm. The prayer throughout is addressed to God even when God seems absent. Psalm 88 says: you can be faithful, praying, addressing God — and still feel nothing. That is still faith. The act of address is itself the act of trust.",
  },
  {
    id: "psalm13",
    name: "Psalm 13",
    heading: "How Long, O Lord?",
    color: "#F59E0B",
    openingVerses: "How long, Lord? Will you forget me forever? How long will you hide your face from me? How long must I wrestle with my thoughts and day after day have sorrow in my heart? (Psalm 13:1-2)",
    structure: "Psalm 13 is brief (6 verses) and moves quickly: two verses of accusation ('How long?'), two verses of petition ('Look on me and answer'), two verses of trust and praise. The pivot in verse 5 is not preceded by a changed circumstance — it is chosen. 'But I trust in your unfailing love; my heart rejoices in your salvation' (v.5) comes before any answer.",
    how: "The 'How long?' questions are among the most honest words in Scripture — and they are addressed to God. The fourfold repetition in verses 1-2 is not careful rhetoric; it is the repetition of genuine distress. The psalm gives permission to be honest about duration: dryness can feel forever. But the pivot in verse 5 demonstrates that trust is an act — something chosen — not a feeling that emerges. The dryness is not resolved; the trust is chosen anyway.",
  },
  {
    id: "psalm77",
    name: "Psalm 77",
    heading: "I Remember the Deeds of the Lord",
    color: GREEN,
    openingVerses: "I cried out to God for help; I cried out to God to hear me. When I was in distress, I sought the Lord; at night I stretched out untiring hands, and I would not be comforted. (Psalm 77:1-2)",
    structure: "Psalm 77 pivots on the word 'Then I thought' (v.10) — a deliberate act of memory. The psalmist asks five questions about God's absence (vv.7-9), then decides to remember God's past deeds rather than stay in the present darkness. The psalm moves from lament to meditation on the Exodus — the defining past act of God's faithfulness.",
    how: "The spiritual practice in Psalm 77 is memory — deliberate recall of what God has done. The psalmist is not feeling God's presence in the moment. He is choosing to remember what God was like historically — the parting of the Red Sea, the leading through the wilderness — and allowing that memory to anchor present trust. The practice translates directly: when the present feels dry, remember. Keep a record of God's past faithfulness. In the darkness, read it back.",
  },
];

const PRACTICES = [
  { title: "Stay Faithful in Practice", desc: "The most important thing to do in spiritual dryness is to maintain practice even without feeling. Show up to prayer, Scripture, and worship not because you feel something but because you trust Someone. Feelings follow obedience; they rarely precede it.", icon: "⚓" },
  { title: "Lament Rather Than Fake", desc: "Bring your dryness to God explicitly. Pray Psalm 42, 22, or 88 — psalms that name the absence of God's felt presence to God himself. Naming the problem to God is not faithlessness; it is the first act of faith in the darkness.", icon: "😔" },
  { title: "Find a Spiritual Director", desc: "A spiritual director is trained to accompany souls through exactly these seasons. Unlike a counselor (who addresses psychological issues) or a pastor (who preaches and leads), a spiritual director asks questions and listens — helping you discern what God is doing in your particular experience.", icon: "🧭" },
  { title: "Read the Mystics", desc: "Thomas Merton, John of the Cross, Julian of Norwich, and the anonymous author of 'The Cloud of Unknowing' all wrote from and about spiritual desolation. Reading them tells you that you are not uniquely broken — you are on a road that the most serious Christians have walked.", icon: "📚" },
  { title: "Reduce Before Adding", desc: "In dryness, the temptation is to add more practices, more activities, more noise. Often the opposite is needed: reduce, simplify, and create space for silence. Elijah did not need a sermon — he needed food, rest, and a gentle whisper (1 Kings 19:12).", icon: "🔇" },
  { title: "Trust the Long Arc", desc: "No spiritual season lasts forever. The Psalms that begin in darkness do not (usually) end there. Trust the testimony of Christians across two thousand years who have described dryness, endured it faithfully, and found themselves in a different place. The ending of dryness is often quiet — not dramatic restoration but a gradual return of warmth.", icon: "🌅" },
];

type Tab = "causes" | "saints" | "psalms" | "practices" | "journal" | "videos";

export default function SpiritualDrynessPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_spiritual-dryness_tab", "causes");
  const [selectedCause, setSelectedCause] = usePersistedState("vine_spiritual-dryness_selected_cause", "Sin Blocking the Way");
  const [selectedSaint, setSelectedSaint] = usePersistedState("vine_spiritual-dryness_selected_saint", "Mother Teresa");
  const [selectedPsalm, setSelectedPsalm] = usePersistedState("vine_spiritual-dryness_selected_psalm", "psalm22");

  const [dryEntries, setDryEntries] = useState<{ id: string; date: string; cause: string; honest: string; holding: string; }[]>(() => {
    try { const s = localStorage.getItem("vine_dry_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [dyForm, setDyForm] = useState({ cause: "", honest: "", holding: "" });
  const [dySaved, setDySaved] = useState(false);

  useEffect(() => { try { localStorage.setItem("vine_dry_journal", JSON.stringify(dryEntries)); } catch {} }, [dryEntries]);

  const saveDyEntry = () => {
    setDryEntries(prev => [{ id: Date.now().toString(), date: new Date().toISOString().split("T")[0], ...dyForm }, ...prev]);
    setDyForm({ cause: "", honest: "", holding: "" });
    setDySaved(true);
    setTimeout(() => setDySaved(false), 2000);
  };

  const deleteDyEntry = (id: string) => setDryEntries(prev => prev.filter(e => e.id !== id));

  const cause = CAUSES.find(c => c.cause === selectedCause)!;
  const saint = SAINTS.find(s => s.name === selectedSaint)!;
  const psalm = LAMENT_PSALMS.find(p => p.id === selectedPsalm)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌵</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Spiritual Dryness</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            'My God, my God, why have you forsaken me?' David said it. Jesus quoted it from the cross. The absence of felt nearness to God is not evidence of divine absence — it is one of the oldest experiences in the life of faith.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "causes" as const, label: "Causes", icon: "🔍" },
            { id: "saints" as const, label: "You Are Not Alone", icon: "👁️" },
            { id: "psalms" as const, label: "Lament Psalms", icon: "📜" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "journal" as const, label: "Journal", icon: "✍️" },
            { id: "videos" as const, label: "Videos", icon: "▶️" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "causes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                Not all spiritual dryness is the same — and different causes have different responses. Identifying the most likely cause is the first step toward an appropriate response.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {CAUSES.map(c => (
                <button type="button" key={c.cause} onClick={() => setSelectedCause(c.cause)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedCause === c.cause ? c.color : BORDER}`, background: selectedCause === c.cause ? `${c.color}15` : "transparent", color: selectedCause === c.cause ? c.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {c.cause}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${cause.color}30`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: cause.color, fontWeight: 900, fontSize: 20, marginBottom: 16 }}>{cause.cause}</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>{cause.desc}</p>
              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>RESPONSE</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{cause.response}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "saints" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                Spiritual dryness is not a sign of spiritual failure — it is one of the most consistent experiences of the most serious Christians across history. You are in company.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {SAINTS.map(s => (
                <button type="button" key={s.name} onClick={() => setSelectedSaint(s.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedSaint === s.name ? PURPLE : BORDER}`, background: selectedSaint === s.name ? `${PURPLE}20` : "transparent", color: selectedSaint === s.name ? PURPLE : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {s.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 20, marginBottom: 16 }}>{saint.name}</h2>
              <div style={{ background: BG, borderRadius: 10, padding: 18, marginBottom: 16, borderLeft: `3px solid ${PURPLE}` }}>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>"{saint.quote}"</p>
              </div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{saint.context}</p>
            </div>
          </div>
        )}

        {tab === "psalms" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {LAMENT_PSALMS.map(p => (
                <button type="button" key={p.id} onClick={() => setSelectedPsalm(p.id)}
                  style={{ width: "100%", textAlign: "left", background: selectedPsalm === p.id ? `${p.color}18` : CARD, border: `1px solid ${selectedPsalm === p.id ? p.color : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer" }}>
                  <div style={{ color: selectedPsalm === p.id ? p.color : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 3 }}>{p.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{p.heading}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${psalm.color}40`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: psalm.color, fontWeight: 900, fontSize: 20, marginBottom: 4 }}>{psalm.name}</h2>
              <div style={{ color: MUTED, fontSize: 13, fontStyle: "italic", marginBottom: 16 }}>{psalm.heading}</div>
              <blockquote style={{ borderLeft: `3px solid ${psalm.color}`, paddingLeft: 16, marginBottom: 16 }}>
                <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>{psalm.openingVerses}</p>
              </blockquote>
              <div style={{ background: BG, borderRadius: 8, padding: "10px 14px", marginBottom: 14 }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 6 }}>STRUCTURE OF THE PSALM</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{psalm.structure}</p>
              </div>
              <div style={{ background: `${psalm.color}08`, border: `1px solid ${psalm.color}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: psalm.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>HOW TO PRAY THIS PSALM IN DRYNESS</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{psalm.how}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The practices for spiritual dryness are different from the practices for spiritual vitality — they are oriented toward faithfulness without feeling, endurance without reward, and trust without consolation.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                In dryness, writing is often more faithful than praying. Name the season honestly. Over time, looking back at these entries may reveal that God was present where you felt his absence.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 18 }}>Dryness Journal</h3>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>What I think might be causing this dryness</label>
                <textarea value={dyForm.cause} onChange={e => setDyForm(f => ({ ...f, cause: e.target.value }))} rows={2}
                  placeholder="Busyness, grief, sin, disappointment with God, season of life, theological question..."
                  style={{ display: "block", width: "100%", marginTop: 6, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>What this feels like honestly</label>
                <textarea value={dyForm.honest} onChange={e => setDyForm(f => ({ ...f, honest: e.target.value }))} rows={3}
                  placeholder="Don't perform here. 'I feel nothing.' 'God feels distant.' 'I don't want to pray.' All of this is allowable."
                  style={{ display: "block", width: "100%", marginTop: 6, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>What (if anything) I'm holding onto</label>
                <textarea value={dyForm.holding} onChange={e => setDyForm(f => ({ ...f, holding: e.target.value }))} rows={2}
                  placeholder="A promise, a memory of God's presence, a person, or simply the decision to stay..."
                  style={{ display: "block", width: "100%", marginTop: 6, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveDyEntry}
                style={{ padding: "12px 28px", borderRadius: 10, border: "none", background: GREEN, color: "#fff", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
                {dySaved ? "Saved ✓" : "Save Entry"}
              </button>
            </div>
            {dryEntries.length > 0 && (
              <div>
                <h3 style={{ color: MUTED, fontSize: 14, fontWeight: 700, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>Journal History</h3>
                {dryEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 12, position: "relative" }}>
                    <button type="button" onClick={() => deleteDyEntry(e.id)}
                      style={{ position: "absolute", top: 12, right: 12, background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 16 }}>×</button>
                    <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{e.date}</div>
                    {e.cause && <p style={{ color: "#F59E0B", fontSize: 13, margin: "0 0 6px" }}>Possible cause: {e.cause}</p>}
                    {e.honest && <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: "0 0 6px" }}>{e.honest}</p>}
                    {e.holding && <p style={{ color: GREEN, fontSize: 13, fontStyle: "italic", margin: 0 }}>Holding onto: {e.holding}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "npEDqbE6faE", title: "Overcoming Spiritual Dryness", channel: "Desiring God", description: "John Piper's series on how to fight for joy when God feels distant — practical and theologically grounded guidance for dry seasons." },
                  { videoId: "IvSuGyJQ6oM", title: "If God Is Good, Why Do I Suffer?", channel: "Ligonier Ministries", description: "R.C. Sproul addresses the hard question of why God permits suffering and spiritual desolation, with pastoral wisdom for those in the valley." },
                  { videoId: "sIaT8Jl2zpI", title: "Let the Psalms Teach You to Pray", channel: "Desiring God", description: "How the lament psalms give language for spiritual dryness and model bringing our darkest experiences honestly before God." },
                  { videoId: "3Dv4-n6OYGI", title: "What We Need to Know About Evil", channel: "Desiring God", description: "John Piper helps Christians understand suffering and spiritual darkness within God's sovereign purposes — essential for seasons of dryness." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
