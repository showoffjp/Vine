"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#6B4FBB";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "What Was Given to You as God Was Not God",
    body: "Many adults carry deep wounds from the version of Christianity they received in childhood — a God who was primarily angry, watching for failure, and pleased only by performance; a church culture of shame, fear, or control; parents who used Christian language to abuse, manipulate, or control. The first and most important theological distinction is this: what was presented to you as God may have been a distortion of God. The God of scripture is Father, not tyrant; reconciler, not score-keeper; the One who runs toward the returning child, not the One who lists their failures.",
  },
  {
    title: "The Wound That Creates the Distortion",
    body: "Attachment research and trauma science both confirm: how we experienced our parents and primary caregivers shapes how we conceive of God. If your earliest experiences of love were conditional, frightening, or absent — your conception of God will likely reflect that template until it is actively healed. This is not a theological failure; it is the predictable outcome of early relational wounding. Healing requires both psychological work on attachment and explicit theological reconstruction — learning who God actually is, not just affirming the doctrine.",
  },
  {
    title: "Jesus and the Corrective Image of God",
    body: "Jesus said, \"Whoever has seen me has seen the Father\" (John 14:9). This is the central corrective for wounded God-images: look at Jesus. How did Jesus treat the woman caught in adultery (John 8)? The bleeding woman who interrupted him (Luke 8)? The children his disciples tried to turn away (Matthew 19)? The leper who asked to be healed \"if you are willing\" and received the answer \"I am willing\" (Mark 1:40-41)? Jesus is not the nice counterpart to an angry Father. He is the revelation of who the Father has always been. If your childhood gave you a different picture, the Gospels are the corrective.",
  },
  {
    title: "A Generous Orthodoxy on the Parent Who Harmed You",
    body: "Christian healing from childhood faith harm does not require excusing the people who harmed you in the name of God. Forgiveness — which is not the same as trust, reconciliation, or pretending the harm did not happen — is a process that takes time and often requires therapeutic support. You can be in the process of forgiving your parents, your pastors, or your church community while also being honest about the harm they did. Holding both is not hypocritical — it is the difficult work of mature faith.",
  },
  {
    title: "The God Who Restores What the Locusts Have Eaten",
    body: "\"I will restore to you the years that the swarming locust has eaten\" (Joel 2:25). This promise is spoken to a people whose abundance has been stripped by agricultural devastation. Many adults recovering from childhood faith harm experience exactly this: years of spiritual formation that were distorted or stolen, a relationship with God that had to be rebuilt from scratch, a faith life that is years behind where it might have been. Joel's promise stands: what was taken can be restored — not returned unchanged, but genuinely restored in new form.",
  },
];

const voices = [
  {
    name: "Dan Allender",
    role: "Psychologist and author of The Wounded Heart; founder of the Allender Center",
    quote: "The church has been slow to acknowledge that it has harmed people — often deeply and systematically. Healing from religious trauma requires both honest acknowledgment of the harm and genuine encounter with the God who is different from what religion presented. These are not in competition.",
  },
  {
    name: "Richard Rohr",
    role: "Franciscan friar, author of Falling Upward; writes on the second half of life and spiritual maturity",
    quote: "First-half-of-life religion too often operates on the basis of law, exclusion, and tribal belonging. When that framework fails — as it must — we experience it as a death. But it is a necessary dying. What emerges from the ruins, if we allow it, is a faith that can hold more complexity and more grace.",
  },
  {
    name: "Bessel van der Kolk",
    role: "Author of The Body Keeps the Score; trauma researcher",
    quote: "Religious trauma is real trauma. It happens in the context of relationships that are supposed to provide safety and meaning. When those relationships harm instead of heal, the body holds that harm in the same way it holds any other trauma. Healing requires the same combination of honest acknowledgment, safe relationship, and sometimes direct trauma treatment.",
  },
  {
    name: "David Benner",
    role: "Psychologist and spiritual director; author of Surrender to Love",
    quote: "Most people approach God through the lens of their earliest experiences of love. If that lens is distorted by wound, God will appear distorted too. The healing of the God-image is some of the most important spiritual and psychological work a person can do. And it is possible — remarkably, stubbornly possible.",
  },
];

const practices = [
  {
    title: "Find a Therapist Trained in Religious Trauma and Attachment",
    body: "Healing from childhood faith harm is not primarily about getting the right theology — though that matters. It is about healing the relational wounds that the harmful theology reflected and reinforced. Find a therapist who understands religious trauma, attachment theory, and ideally Christian faith. The Allender Center, the Religious Trauma Institute, and AACC (American Association of Christian Counselors) all maintain therapist directories. Give yourself time — this is deep work.",
  },
  {
    title: "Read the Gospels in a New Translation",
    body: "Many adults who experienced childhood faith harm have deep associations between specific biblical texts and the harm done to them. Reading the Gospels in a translation you have never used before — one associated with different voices, different communities, different memories — can open space to encounter Jesus without those associations. Read slowly. Let yourself notice what is actually there, not what you were told was there.",
  },
  {
    title: "Seek a Different Community",
    body: "If the community of your childhood harmed you, you are not required to return to it for healing. Find a different community — one known for psychological safety, theological honesty, and the absence of the specific dynamics that harmed you. Ask questions before committing. How does this community handle disagreement? How are vulnerable people protected? Is leadership accountable? You have earned the right to assess carefully.",
  },
  {
    title: "Separate the Doctrine from the Deliverer",
    body: "Much of what was presented to you as Christian truth may have been theological distortion filtered through a wounded, harmful, or controlling person. The work of reconstruction involves asking: what did I receive, and from whom? What was actually taught by Jesus in the Gospels, and what was added by the culture, the denomination, or the specific individuals who harmed me? This discernment takes time and is best done with a skilled spiritual director or therapist.",
  },
  {
    title: "Practice Receiving Care as a Spiritual Exercise",
    body: "Many people who were harmed in religious contexts were taught that their needs were secondary, sinful, or obstacles to holiness. Learning to receive care — to accept help, to ask for what you need, to be known and held by others — is a spiritual exercise, not just a relational one. The God of scripture is depicted as wanting to give his children good gifts (Matthew 7:11). Practicing the reception of good gifts, including care, is part of learning who God actually is.",
  },
  {
    title: "Allow the Anger to Be Part of the Prayer",
    body: "Anger at God — and at the people who misrepresented God — is a valid and often necessary part of healing from childhood faith harm. The Psalms give explicit permission: \"How long, O Lord? Will you forget me forever?\" (Psalm 13:1); \"You have rejected and humbled us\" (Psalm 44:9). Bring the anger into prayer rather than suppressing it. Anger at a distorted God-image is often the path toward encountering the real one.",
  },
];

const scriptures = [
  { ref: "John 14:9", text: "Jesus said to him, 'Have I been with you so long, and you still do not know me, Philip? Whoever has seen me has seen the Father. How can you say, Show us the Father?'" },
  { ref: "Joel 2:25", text: "I will restore to you the years that the swarming locust has eaten, the hopper, the destroyer, and the cutter, my great army, which I sent among you." },
  { ref: "Luke 15:20", text: "But while he was still a long way off, his father saw him and felt compassion, and ran and embraced him and kissed him." },
  { ref: "Mark 1:41", text: "Moved with pity, he stretched out his hand and touched him and said to him, 'I will; be clean.'" },
  { ref: "Matthew 7:11", text: "If you then, who are evil, know how to give good gifts to your children, how much more will your Father who is in heaven give good things to those who ask him!" },
  { ref: "Isaiah 42:3", text: "A bruised reed he will not break, and a faintly burning wick he will not quench; he will faithfully bring forth justice." },
];

const videos = [
  { videoId: "qFBnfCnBIiA", title: "Dan Allender — Healing from Religious Childhood Wounds" },
  { videoId: "Wt3ZPsSqWs4", title: "When Childhood Christianity Caused Harm — A Path to Healing" },
  { videoId: "fkGBWb1LVRY", title: "Reconstructing Your God-Image After Religious Trauma" },
  { videoId: "Ku6KBQs_HpI", title: "David Benner — Surrender to Love: Meeting the Real God" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function ChildhoodFaithHarmAdultHealingPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<{ id: number; date: string; today: string; godImage: string; prayer: string }[]>([]);
  const [form, setForm] = useState({ today: "", godImage: "", prayer: "" });
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_childhoodfaithharmonhealing_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!form.today.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), ...form }, ...entries];
    setEntries(next);
    localStorage.setItem("vine_childhoodfaithharmonhealing_entries", JSON.stringify(next));
    setForm({ today: "", godImage: "", prayer: "" });
  }

  return (
    <main style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: `linear-gradient(135deg, ${ACCENT}22 0%, #0d0d1a 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: "0.75rem" }}>Vine Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            Healing from Childhood Faith Harm
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            What was given to you as God was not God. For adults healing from the version of Christianity they received in childhood — reconstructing faith on a foundation that can hold truth.
          </p>
          <div style={{ marginTop: "1.5rem", padding: "0.75rem 1rem", background: `${ACCENT}18`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 6px 6px 0", fontSize: "0.9rem", color: MUTED }}>
            <strong style={{ color: TEXT }}>Support resources:</strong> Allender Center: <strong style={{ color: TEXT }}>theallendercenter.org</strong> &bull; Religious Trauma Institute: <strong style={{ color: TEXT }}>religioustraumainstitute.com</strong> &bull; Crisis: <strong style={{ color: TEXT }}>988</strong>
          </div>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", color: tab === i ? ACCENT : MUTED, borderBottom: tab === i ? `2px solid ${ACCENT}` : "2px solid transparent", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.95rem", whiteSpace: "nowrap" }}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1.5rem" }}>
        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Biblical & Theological Foundations</h2>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.25rem", background: "none", border: "none", color: TEXT, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "Georgia, serif", fontSize: "1rem", fontWeight: 600 }}>
                  {item.title}
                  <span style={{ color: ACCENT, fontSize: "1.2rem", flexShrink: 0, marginLeft: "1rem" }}>{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <div style={{ padding: "0 1.25rem 1.25rem", color: MUTED, lineHeight: 1.8 }}>{item.body}</div>}
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Voices of Experience</h2>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <p style={{ color: TEXT, lineHeight: 1.8, fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "0.75rem" }}>
                  <div style={{ fontWeight: 700, color: ACCENT }}>{v.name}</div>
                  <div style={{ fontSize: "0.85rem", color: MUTED }}>{v.role}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Practical Guidance</h2>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <h3 style={{ color: ACCENT, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Scripture for the Journey</h2>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 10px 10px 0", padding: "1.25rem 1.5rem" }}>
                <div style={{ fontWeight: 700, color: ACCENT, marginBottom: "0.5rem", fontSize: "0.9rem", letterSpacing: "0.05em" }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>Healing Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Stored only on this device. A space for reconstruction without performance.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Where are you in your healing today?</label>
                <textarea value={form.today} onChange={e => setForm(f => ({ ...f, today: e.target.value }))} rows={3} placeholder="Angry, rebuilding, encountering something new, still numb..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What image of God are you carrying? Is it changing?</label>
                <textarea value={form.godImage} onChange={e => setForm(f => ({ ...f, godImage: e.target.value }))} rows={2} placeholder="The God I received as a child was... The God I am encountering now seems..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer or honest word to God (optional)</label>
                <textarea value={form.prayer} onChange={e => setForm(f => ({ ...f, prayer: e.target.value }))} rows={2} placeholder="If you are different from what I was taught, show me. I am looking..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ alignSelf: "flex-start", background: ACCENT, color: "#fff", border: "none", borderRadius: 6, padding: "0.65rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h3 style={{ color: MUTED, fontSize: "0.95rem" }}>Previous Entries</h3>
                {entries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.75rem" }}>{e.date}</div>
                    {e.today && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Today: </span>{e.today}</p>}
                    {e.godImage && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>God-image: </span>{e.godImage}</p>}
                    {e.prayer && <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}><span style={{ color: MUTED, fontStyle: "normal", fontSize: "0.8rem" }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === 5 && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>Video Resources</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Teaching and testimony for adults healing from childhood religious harm.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
              {videos.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.75rem 1rem", fontSize: "0.9rem", color: MUTED }}>{v.title}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
