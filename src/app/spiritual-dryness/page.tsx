"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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

const PRACTICES = [
  { title: "Stay Faithful in Practice", desc: "The most important thing to do in spiritual dryness is to maintain practice even without feeling. Show up to prayer, Scripture, and worship not because you feel something but because you trust Someone. Feelings follow obedience; they rarely precede it.", icon: "⚓" },
  { title: "Lament Rather Than Fake", desc: "Bring your dryness to God explicitly. Pray Psalm 42, 22, or 88 — psalms that name the absence of God's felt presence to God himself. Naming the problem to God is not faithlessness; it is the first act of faith in the darkness.", icon: "😔" },
  { title: "Find a Spiritual Director", desc: "A spiritual director is trained to accompany souls through exactly these seasons. Unlike a counselor (who addresses psychological issues) or a pastor (who preaches and leads), a spiritual director asks questions and listens — helping you discern what God is doing in your particular experience.", icon: "🧭" },
  { title: "Read the Mystics", desc: "Thomas Merton, John of the Cross, Julian of Norwich, and the anonymous author of 'The Cloud of Unknowing' all wrote from and about spiritual desolation. Reading them tells you that you are not uniquely broken — you are on a road that the most serious Christians have walked.", icon: "📚" },
  { title: "Reduce Before Adding", desc: "In dryness, the temptation is to add more practices, more activities, more noise. Often the opposite is needed: reduce, simplify, and create space for silence. Elijah did not need a sermon — he needed food, rest, and a gentle whisper (1 Kings 19:12).", icon: "🔇" },
  { title: "Trust the Long Arc", desc: "No spiritual season lasts forever. The Psalms that begin in darkness do not (usually) end there. Trust the testimony of Christians across two thousand years who have described dryness, endured it faithfully, and found themselves in a different place. The ending of dryness is often quiet — not dramatic restoration but a gradual return of warmth.", icon: "🌅" },
];

export default function SpiritualDrynessPage() {
  const [activeTab, setActiveTab] = useState<"causes" | "saints" | "practices">("causes");
  const [selectedCause, setSelectedCause] = useState("Sin Blocking the Way");
  const [selectedSaint, setSelectedSaint] = useState("Mother Teresa");

  const cause = CAUSES.find(c => c.cause === selectedCause)!;
  const saint = SAINTS.find(s => s.name === selectedSaint)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
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
            { id: "causes" as const, label: "Causes & Responses", icon: "🔍" },
            { id: "saints" as const, label: "You Are Not Alone", icon: "👁️" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "causes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                Not all spiritual dryness is the same — and different causes have different responses. Identifying the most likely cause is the first step toward an appropriate response.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {CAUSES.map(c => (
                <button key={c.cause} onClick={() => setSelectedCause(c.cause)}
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

        {activeTab === "saints" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                Spiritual dryness is not a sign of spiritual failure — it is one of the most consistent experiences of the most serious Christians across history. You are in company.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {SAINTS.map(s => (
                <button key={s.name} onClick={() => setSelectedSaint(s.name)}
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

        {activeTab === "practices" && (
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
      </div>
    </div>
  );
}
