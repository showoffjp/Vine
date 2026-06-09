"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "God Does Not Require You to Minimize What Happened",
    verse: "Psalm 22:1–2",
    text: "\"My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? I cry out by day, but you do not answer; by night, but I find no rest.\" Jesus cried this psalm from the cross. The Scripture is full of honest protest to God — not tidy testimony. Childhood trauma survivors do not need to soften their story to gain divine acceptance. God is already inside the unvarnished truth of what happened.",
  },
  {
    title: "Trauma Is a Body Experience, Not Just a Memory",
    verse: "Psalm 31:9–10",
    text: "\"Be merciful to me, LORD, for I am in distress; my eyes grow weak with sorrow, my soul and body with grief. My life is consumed by anguish and my years by groaning; my strength fails because of my affliction, and my bones grow weak.\" The psalmist knew what neuroscience has confirmed: trauma lives in the body. Healing from childhood trauma cannot be merely cognitive — it requires the body, the nervous system, the whole person.",
  },
  {
    title: "The Sins of the Parents Create Real Consequences",
    verse: "Exodus 20:5–6",
    text: "\"I, the LORD your God, am a jealous God, punishing the children for the sin of the parents to the third and fourth generation of those who hate me, but showing love to a thousand generations of those who love me.\" This passage is not an endorsement of intergenerational punishment. It is a sober recognition that parental sin — abuse, addiction, neglect — creates real ripple effects in children's bodies and souls. The Bible has always known what generational trauma is.",
  },
  {
    title: "You Were Made Before Your Wound",
    verse: "Psalm 139:13–14",
    text: "\"For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made.\" Childhood trauma distorts identity — survivors often feel that the wound is who they are. But the theological truth is prior: you were known and loved before the wound was inflicted. Healing is not inventing a new self; it is recovering the self that existed before the damage.",
  },
  {
    title: "The Spirit Helps When We Cannot Find Words",
    verse: "Romans 8:26",
    text: "\"In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.\" Trauma survivors often find that they cannot speak their experience — language fails, memory fragments, words disappear under stress. The Spirit intercedes through wordless groans. You do not have to be articulate to be heard by God.",
  },
];

const voices = [
  {
    id: 1,
    name: "Dr. Bessel van der Kolk",
    role: "Psychiatrist, Author of The Body Keeps the Score",
    quote: "Trauma is not what happens to you. Trauma is what happens inside you as a result of what happened to you.",
    bio: "Van der Kolk's decades of research on developmental trauma has transformed how clinicians and pastors understand the lasting neurological and physiological effects of childhood abuse and neglect.",
  },
  {
    id: 2,
    name: "Diane Langberg",
    role: "Psychologist, Author of Suffering and the Heart of God",
    quote: "The church has often asked trauma survivors to skip the lament and go straight to redemption. But there is no resurrection without death — and no healing without honest grief.",
    bio: "Langberg has spent four decades treating trauma survivors and training the church to be places of genuine safety, integrating clinical insight with deep theological wisdom.",
  },
  {
    id: 3,
    name: "Dr. Dan Allender",
    role: "Author of The Wounded Heart; Founder, The Allender Center",
    quote: "The story of your life — including the dark parts — is the very material God uses to make you into the person he intends you to be.",
    bio: "Allender's therapeutic and theological work on sexual and spiritual abuse recovery has helped thousands of survivors engage their stories with honesty, grief, and eventual hope.",
  },
  {
    id: 4,
    name: "Dr. Judith Herman",
    role: "Psychiatrist, Author of Trauma and Recovery",
    quote: "Recovery can take place only within the context of relationships; it cannot occur in isolation. The core experiences of psychological trauma are disempowerment and disconnection from others.",
    bio: "Herman's foundational clinical work established that complex PTSD from childhood abuse requires relational recovery — not just symptom management — a truth with deep resonance for the church.",
  },
];

const practices = [
  {
    icon: "🧠",
    title: "Find a Trauma-Informed Therapist",
    text: "Look for a therapist trained in EMDR (Eye Movement Desensitization and Reprocessing), somatic therapy, or Internal Family Systems (IFS). Childhood trauma requires more than talk therapy — it requires body-based and memory-processing approaches.",
  },
  {
    icon: "🌊",
    title: "Learn Your Window of Tolerance",
    text: "The window of tolerance is the zone where you can process painful material without becoming overwhelmed or shutting down. Learning to recognize when you are leaving your window — and how to return — is foundational trauma work.",
  },
  {
    icon: "📝",
    title: "Write Your Story Without Redeeming It Yet",
    text: "Trauma survivors are often pressured to narrate their story with a redemption arc immediately attached. Practice writing what happened without explanation, excuse, or resolution. The raw material must be acknowledged before it can be transformed.",
  },
  {
    icon: "🤝",
    title: "Seek Safe Attachment Relationships",
    text: "Childhood trauma often disrupts the capacity for secure attachment. Deliberately cultivating relationships with safe, predictable, non-reactive people — in therapy, in community, in friendship — is not a luxury. It is the primary vehicle of healing.",
  },
  {
    icon: "🏃",
    title: "Use the Body in Recovery",
    text: "Yoga, somatic exercises, walking, regulated breathing, and EMDR all work because trauma is stored somatically. Recovery that addresses only the mind will be incomplete. Physical practices that restore safety to the body are essential.",
  },
  {
    icon: "⛪",
    title: "Find a Community That Can Hold the Story",
    text: "Not every church community is equipped for trauma. Look for communities that make space for lament, do not rush to resolution, do not shame survivors for struggling with faith, and are familiar with the clinical realities of abuse and its effects.",
  },
];

const scriptures = [
  { verse: "Isaiah 61:1", text: "\"He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners.\"" },
  { verse: "Psalm 147:3", text: "\"He heals the brokenhearted and binds up their wounds.\"" },
  { verse: "Lamentations 3:19–21", text: "\"I remember my affliction and my wandering, the bitterness and the gall. I well remember them, and my soul is downcast within me. Yet this I call to mind and therefore I have hope.\"" },
  { verse: "Joel 2:25", text: "\"I will repay you for the years the locusts have eaten.\"" },
  { verse: "Matthew 18:6", text: "\"If anyone causes one of these little ones — those who believe in me — to stumble, it would be better for them to have a large millstone hung around their neck and to be drowned in the depths of the sea.\"" },
  { verse: "2 Corinthians 1:3–4", text: "\"The God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God.\"" },
];

type TraumaEntry = {
  id: string;
  date: string;
  surfaced: string;
  body: string;
  prayer: string;
};

export default function ChildhoodTraumaPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<TraumaEntry[]>([]);
  const [surfaced, setSurfaced] = useState("");
  const [body, setBody] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_childhoodtraumahealing_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!surfaced.trim()) return;
    const entry: TraumaEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      surfaced,
      body,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_childhoodtraumahealing_entries", JSON.stringify(updated));
    setSurfaced(""); setBody(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_childhoodtraumahealing_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌱</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>
            Childhood Trauma & Adult Healing
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For adults living with the long shadow of childhood abuse, neglect, or adverse experiences — pastoral and clinical resources that honor the full complexity of trauma without rushing to resolution.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Crisis Support: <strong>988 Suicide & Crisis Lifeline</strong> — call or text 988 | <strong>RAINN:</strong> 1-800-656-4673 | <strong>Crisis Text Line:</strong> Text HOME to 741741
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer",
              background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED,
              fontWeight: tab === t ? "bold" : "normal", fontSize: "0.875rem",
              textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", color: "#fff", flexShrink: 0 }}>
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: TEXT }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.role}</div>
                  </div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", margin: "0 0 0.75rem" }}>
                  "{v.quote}"
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${GREEN}` }}>
                <div style={{ color: GREEN, fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, marginBottom: "1rem", fontWeight: "bold" }}>Private Journal</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What surfaced today — a memory, a feeling, a body response?</label>
                <textarea value={surfaced} onChange={e => setSurfaced(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>Where do you feel it in your body?</label>
                <textarea value={body} onChange={e => setBody(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer — protest, lament, or silence expressed in words:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.surfaced && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Surfaced:</strong> {e.surfaced}</p>}
                {e.body && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Body:</strong> {e.body}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="53RX2ESIqLM" title="The Body Keeps the Score — Bessel van der Kolk on Trauma" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>The Body Keeps the Score — Trauma and Healing</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Dr. van der Kolk explains how trauma is stored in the body and what body-based healing looks like</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="bM7-eBTH2-k" title="Diane Langberg on Healing from Childhood Trauma" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Diane Langberg: The Church and Trauma Survivors</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Langberg on what faith communities must understand about childhood abuse and adult healing</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="XEYPDrmZFWY" title="EMDR Therapy Explained for Trauma Survivors" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>EMDR: Evidence-Based Trauma Treatment Explained</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>What EMDR is, how it works, and why it is effective for processing childhood trauma memories</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="UMhLBPPtlrY" title="Dan Allender on the Wounded Heart and Story Work" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Dan Allender: Story Work and Redemptive Healing</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Allender on engaging the painful chapters of your story as the material God uses for healing</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
