"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const FRAMEWORKS = [
  {
    id: "cross",
    name: "The Cross",
    icon: "✝️",
    color: "#EF4444",
    verse: "Romans 8:32",
    title: "God Is Not Untouched by Suffering",
    body: "The most powerful Christian answer to suffering is not an argument but an event: the incarnation and crucifixion of Jesus. God did not observe human suffering from a safe distance and offer philosophical comfort. He entered it — fully, bodily, unjustly. The cross means that whatever suffering you face, you face it with a God who has been there. He is not explaining suffering from outside; he is present in it from inside.",
  },
  {
    id: "romans8",
    name: "Romans 8",
    icon: "⚓",
    color: "#3B82F6",
    verse: "Romans 8:18, 28",
    title: "Suffering Is Not the Final Word",
    body: "'I consider that our present sufferings are not worth comparing with the glory that will be revealed in us' (8:18). Paul wrote this in chains. He is not minimizing suffering — he is putting it in eschatological perspective. Suffering is real, but it is penultimate. The final chapter has not been written. 'All things work together for good' (8:28) is not a promise that all things feel good — it is a promise about the trajectory of history under God's sovereignty.",
  },
  {
    id: "formation",
    name: "Spiritual Formation",
    icon: "🔥",
    color: "#F59E0B",
    verse: "Romans 5:3–4, James 1:2–4",
    title: "Suffering Produces What Ease Cannot",
    body: "'We also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope' (Romans 5:3-4). The character qualities most prized in the kingdom — patience, compassion, endurance, hope — are almost exclusively produced by difficulty. This does not make suffering good in itself; it means God is at work through it. The refiner's fire does not love the gold less; it works on it more.",
  },
  {
    id: "communion",
    name: "Communion with Christ",
    icon: "🤝",
    color: PURPLE,
    verse: "Philippians 3:10",
    title: "Sharing in His Sufferings",
    body: "Paul speaks of wanting to know 'the fellowship of sharing in his sufferings, becoming like him in his death' (Phil. 3:10) — as if suffering creates a form of intimacy with Christ that comfort does not. This is not masochism; it is the recognition that the cross-shaped life is participation in the life of Jesus. Those who have suffered most deeply often speak of encountering Christ most vividly in the darkness.",
  },
  {
    id: "witness",
    name: "Witness",
    icon: "💡",
    color: "#10B981",
    verse: "2 Corinthians 4:8–10",
    title: "The World Watches How We Suffer",
    body: "'We are hard pressed on every side, but not crushed... struck down, but not destroyed. We always carry around in our body the death of Jesus, so that the life of Jesus may also be revealed in our body' (2 Cor. 4:8-10). How Christians suffer is itself a form of witness. The peace that passes understanding, the hope that doesn't evaporate, the love that persists — these are visible when they are present under pressure.",
  },
];

const WRONG_ANSWERS = [
  { wrong: "Your suffering is punishment for specific sin.", why: "Job's friends argued this. God rebuked them directly (Job 42:7). Jesus denied it in John 9:3. Not all suffering is divine discipline for personal failure." },
  { wrong: "If you had enough faith, you wouldn't be suffering.", why: "Paul prayed three times to have his thorn removed and was told no (2 Cor. 12:7-9). Jesus' disciples suffered and died. Faith does not immunize against suffering." },
  { wrong: "God won't give you more than you can handle.", why: "Paul wrote that he was 'under great pressure, far beyond our ability to endure, so that we despaired of life itself' (2 Cor. 1:8). The promise in 1 Cor. 10:13 is about temptation to sin, not suffering in general." },
  { wrong: "Everything happens for a reason (so there's no need to grieve).", why: "Jesus wept at the tomb of Lazarus — whom he was about to raise (John 11:35). God's sovereignty does not cancel grief. Both can be true: God is in control and this is genuinely terrible." },
  { wrong: "Just trust God and you'll feel peace immediately.", why: "The Psalms show that honest prayer in suffering is often prolonged, dark, and unresolved (Psalm 88 ends without resolution). Trust and anguish coexist in biblical faith." },
];

const HOW_TO_HELP = [
  { do: "Show up. Stay.", why: "The most powerful thing Job's friends did was sit silently with him for seven days (Job 2:13). Presence matters more than answers." },
  { do: "Ask rather than explain.", why: "'What do you need most right now?' is better than launching into a theology of suffering while someone is in crisis." },
  { do: "Lament with them.", why: "'Weep with those who weep' (Romans 12:15). Don't rush to silver linings. Let the grief be acknowledged as grief." },
  { do: "Bring practical help.", why: "Meals, childcare, errands — these are not lesser than spiritual care. They are spiritual care embodied." },
  { do: "Give it time.", why: "Grief moves slowly. Check in at 3 months, 6 months, a year — not just the first week. The acute phase ends; the suffering doesn't." },
];

export default function SufferingPage() {
  const [activeTab, setActiveTab] = useState<"frameworks" | "wrong" | "help">("frameworks");
  const [selected, setSelected] = useState("cross");

  const frame = FRAMEWORKS.find(f => f.id === selected)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🕯️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Why Do We Suffer?</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Christianity does not offer a tidy explanation for suffering — it offers a God who enters it. The cross is not an answer to pain but a presence in it.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "frameworks" as const, label: "Biblical Frameworks", icon: "📖" },
            { id: "wrong" as const, label: "What Not to Say", icon: "🚫" },
            { id: "help" as const, label: "Helping Others", icon: "🤝" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "frameworks" && (
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160 }}>
              {FRAMEWORKS.map(f => (
                <button key={f.id} onClick={() => setSelected(f.id)}
                  style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selected === f.id ? f.color : BORDER}`, background: selected === f.id ? `${f.color}18` : CARD, color: selected === f.id ? f.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", textAlign: "left" }}>
                  {f.icon} {f.name}
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ background: CARD, border: `1px solid ${frame.color}40`, borderRadius: 14, padding: 26 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <span style={{ fontSize: 32 }}>{frame.icon}</span>
                  <div>
                    <h2 style={{ color: frame.color, fontWeight: 900, fontSize: 20, margin: 0 }}>{frame.title}</h2>
                    <span style={{ background: `${frame.color}20`, color: frame.color, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{frame.verse}</span>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "16px 0 0" }}>{frame.body}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "wrong" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Well-meaning Christians often say things that compound suffering rather than relieve it. These responses usually contain a grain of truth applied at the wrong moment in the wrong way. Theology should serve people, not silence them.
              </p>
            </div>
            {WRONG_ANSWERS.map((w, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid #EF444430`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "#EF4444", fontSize: 18, flexShrink: 0 }}>✗</span>
                  <div>
                    <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 15, marginBottom: 8, fontStyle: "italic" }}>"{w.wrong}"</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{w.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "help" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Most people don't need more information when they're suffering — they need presence, witness, and practical love. Here is what the most helpful people do.
              </p>
            </div>
            {HOW_TO_HELP.map((h, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: GREEN, fontSize: 18, flexShrink: 0 }}>✓</span>
                  <div>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{h.do}</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{h.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
