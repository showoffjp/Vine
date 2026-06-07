"use client";
import { useState } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "The Uniqueness of Missionary Burnout",
    body: "Missionary burnout differs from pastoral or professional burnout in several key ways: the calling itself is perceived as non-negotiable, support systems are separated by oceans, cultural isolation compounds emotional depletion, and the theological stakes feel absolute — if you rest, people may not hear the gospel. This constellation of pressures produces a particular form of collapse where the exhausted worker cannot simply resign or take a break without feeling they are abandoning God. Understanding this uniqueness is the first step toward honest care.",
  },
  {
    title: "Elijah Under the Broom Tree",
    body: "1 Kings 19 is the canonical text for missionary and ministry burnout. Elijah, immediately after a great victory over the prophets of Baal, collapses under a broom tree and asks to die: 'It is enough; now, O Lord, take away my life.' God's response is noteworthy: He does not rebuke Elijah's theology or demand he return to ministry. He gives him food, water, and rest — twice. Then He asks, gently, 'What are you doing here, Elijah?' God met physical need before addressing spiritual condition. This is pastoral theology for burned-out workers.",
  },
  {
    title: "The Mission Belongs to God, Not to You",
    body: "One of the most insidious theologies of mission is that outcomes depend on the individual worker's presence, productivity, and faithfulness. This is a form of functional saviorism that places unbearable weight on human shoulders. The mission belongs to God (Acts 1:8 — 'You will be my witnesses'). Jesus builds His church (Matthew 16:18). The Spirit precedes the missionary. This does not excuse laziness; it frees the worker from the anxiety that their personal depletion is costing people eternity.",
  },
  {
    title: "Limitation Is Not Sin",
    body: "The incarnation is the supreme argument that embodied limitation is not sinful. Jesus slept in a boat while a storm raged. He withdrew from the crowds. He said 'I am tired' at Jacob's well. He did not heal every sick person in Judea; He healed those placed before Him. If the Son of God operated within the limits of embodied existence, the missionary is not spiritually deficient for having them. Limitation, honored, is stewardship. Limitation denied, in the name of ministry, produces collapse.",
  },
  {
    title: "Coming Home Is Not Failure",
    body: "Many missionaries return from the field carrying grief, shame, and a sense of having let God — and their sending community — down. The theology of return matters: coming home for health reasons, mental health crises, family need, or simply the end of a season is not failure. Paul revisited churches he had planted; Barnabas advocated for Mark who had turned back. The work of God in a person's life during their field experience, however incomplete, is not wasted. God's purposes are not defeated by a plane ticket home.",
  },
];

const voices = [
  {
    name: "Dorothea Hover-Kramer",
    role: "Missionary care specialist and author",
    quote: "We would not send soldiers into combat for years without rotation, debriefing, and treatment. Yet we routinely do exactly this to missionaries. The attrition rate is not a mystery — it is a predictable result of how we deploy and neglect our workers.",
  },
  {
    name: "Dave Pollock",
    role: "Co-founder, Interaction International; Third Culture Kids researcher",
    quote: "TCK children of missionaries carry their own profound losses — of home, of belonging, of rootedness. The family system on the field is under a strain that must be acknowledged if the worker and the family are to survive intact.",
  },
  {
    name: "Kelly O'Donnell",
    role: "Psychologist, Member Care Associates",
    quote: "Member care is not a luxury for missionaries who can't handle the field. It is the biblical practice of the body caring for each other so that the whole body remains capable of what only the whole body can do.",
  },
  {
    name: "Amy Carmichael",
    role: "Missionary to India; author of His Thoughts Said, His Father Said",
    quote: "I have come to see that the hardest field in which I labor is sometimes the field of my own soul. The one who will not learn to be tended cannot long tend others.",
  },
];

const practices = [
  {
    title: "Access Member Care Before You Are in Crisis",
    body: "Most major mission agencies now have member care staff. Contact them for check-ins, not just emergencies. Organizations like Member Care Associates and ReachGlobal's Alongside program provide professional psychological support specifically for cross-cultural workers. Regular care is far more effective than emergency intervention after collapse.",
  },
  {
    title: "Debrief Properly When Returning",
    body: "Debriefing — structured processing of field experiences with a trained professional — is one of the most evidence-based practices for preventing long-term trauma and burnout sequelae. Agencies like Barnabas International and Link Care specialize in missionary debriefing. If your agency does not offer it, pursue it independently. Do not return to field or home ministry until this process is complete.",
  },
  {
    title: "Grieve the Specific Losses",
    body: "Missionary life involves particular losses: the loss of home culture fluency, the loss of watching children grow up abroad, the loss of ordinary domestic life, the accumulation of local grief from working in poverty and suffering, and the grief of colleagues and communities left behind. These losses are real and require specific grief work, not just theological reframing. A therapist who understands cross-cultural workers can help.",
  },
  {
    title: "Address TCK Children's Experience",
    body: "If you have children who grew up on the field (Third Culture Kids), their emotional and developmental needs during your burnout recovery are a priority. TCK-specialized counselors and communities like Interaction International provide support both for the children and for parents processing guilt about what their children experienced.",
  },
  {
    title: "Permit Yourself Physical Recovery",
    body: "Sleep debt, nutritional deficit, chronic parasitic or tropical illness, and unaddressed physical health problems are extremely common in returning missionaries. A thorough physical examination — including tropical disease screening — is step one of recovery. Follow through on treatment and allow your body the recovery time it needs before evaluating your calling or next steps.",
  },
  {
    title: "Revisit Your Theology of Calling",
    body: "Burnout almost always involves a distorted theology of calling that has become performative and anxiety-driven rather than restful and responsive. Work with a spiritual director or pastor to revisit the foundational question: 'Is my calling God's invitation or my own willpower?' The answer shapes everything about recovery and sustainable re-engagement.",
  },
];

const scriptures = [
  { ref: "1 Kings 19:5-7", text: "He lay down and slept under a juniper tree; and behold, there was an angel touching him... and he arose and ate and drank, and went in the strength of that food forty days and forty nights." },
  { ref: "Matthew 11:28-29", text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls." },
  { ref: "John 4:6", text: "Jacob's well was there, and Jesus, tired as he was from the journey, sat down by the well." },
  { ref: "2 Corinthians 4:7-9", text: "But we have this treasure in jars of clay to show that this all-surpassing power is from God and not from us. We are hard pressed on every side, but not crushed; perplexed, but not in despair." },
  { ref: "Acts 15:38-39", text: "But Paul did not think it wise to take him, because he had deserted them in Pamphylia and had not continued with them in the work. They had such a sharp disagreement that they parted company." },
  { ref: "Galatians 6:9", text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up." },
];

const videos = [
  { videoId: "R9mvHMiPXas", title: "Missionary Burnout: When the Field Worker Breaks" },
  { videoId: "7TFnCbGMXcA", title: "Member Care for Cross-Cultural Workers" },
  { videoId: "a7h8WVPhWXQ", title: "Debriefing Missionaries: Why It Matters" },
  { videoId: "u5mHmDmrXUE", title: "Third Culture Kids and Missionary Families" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_missionaryburnout_entries";
interface JournalEntry { id: string; date: string; depleted: string; theology: string; need: string; }

export default function MissionaryBurnoutPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [form, setForm] = useState({ depleted: "", theology: "", need: "" });
  const [saved, setSaved] = useState(false);

  function saveEntry() {
    const entry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      depleted: form.depleted,
      theology: form.theology,
      need: form.need,
    };
    const updated = [entry, ...entries].slice(0, 30);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setForm({ depleted: "", theology: "", need: "" });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Pastoral Care</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1.2 }}>
          Missionary Burnout: When Field Workers Break
        </h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          For cross-cultural workers, field missionaries, and their families navigating burnout, reentry grief, and the theology of limitation in service to God.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 6, border: `1px solid ${tab === t ? GREEN : BORDER}`,
              background: tab === t ? GREEN : CARD, color: TEXT, cursor: "pointer", fontSize: "0.9rem",
            }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: GREEN, marginBottom: "0.75rem" }}>{item.title}</h2>
                <p style={{ color: TEXT, lineHeight: 1.75 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map((v) => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <p style={{ color: TEXT, lineHeight: 1.75, fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ fontWeight: 700, color: GREEN }}>{v.name}</div>
                <div style={{ color: MUTED, fontSize: "0.875rem" }}>{v.role}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: GREEN, color: "#fff", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.875rem", flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>{p.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.75 }}>{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s) => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.5rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.75, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, color: GREEN, marginBottom: "1.25rem" }}>Private Reflection</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What aspect of ministry has most depleted you?</label>
                <textarea value={form.depleted} onChange={(e) => setForm({ ...form, depleted: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What belief about calling or limitation is hardest to hold right now?</label>
                <textarea value={form.theology} onChange={(e) => setForm({ ...form, theology: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What is the most immediate thing you need today?</label>
                <textarea value={form.need} onChange={(e) => setForm({ ...form, need: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: 700 }}>
                {saved ? "Saved" : "Save Entry"}
              </button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.875rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.875rem" }}>Delete</button>
                </div>
                {e.depleted && <><div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: 4 }}>Source of depletion</div><p style={{ color: TEXT, marginBottom: "0.75rem", lineHeight: 1.6 }}>{e.depleted}</p></>}
                {e.theology && <><div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: 4 }}>Belief being wrestled</div><p style={{ color: TEXT, marginBottom: "0.75rem", lineHeight: 1.6 }}>{e.theology}</p></>}
                {e.need && <><div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: 4 }}>Immediate need</div><p style={{ color: TEXT, lineHeight: 1.6 }}>{e.need}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {videos.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} style={{ width: "100%", aspectRatio: "16/9" }} />
                <div style={{ padding: "1rem" }}>
                  <p style={{ color: TEXT, fontWeight: 600 }}>{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
          <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: "1rem" }}>Crisis & Support Resources</h3>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>988 Suicide & Crisis Lifeline</strong> — Call or text 988 if you are in a mental health crisis, regardless of where in the world you are located.
          </p>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>Barnabas International</strong> — barnabas.org — Specialized missionary care, debriefing, and counseling referrals.
          </p>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>Link Care Center</strong> — linkcare.org — Assessment, restoration, and care for cross-cultural workers.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>Member Care Associates</strong> — Psychological services specifically for missionary and aid workers globally.
          </p>
        </div>
      </div>
    </div>
  );
}
