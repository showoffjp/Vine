"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Body That Changed Is Still His Temple",
    verse: "1 Corinthians 6:19–20",
    text: "Do you not know that your bodies are temples of the Holy Spirit? The Holy Spirit does not move out when the body changes. The paralyzed body, the amputated body, the body that now requires a wheelchair, a catheter, an aide — that body is still a temple. The Spirit dwells in the specific body you now inhabit, not the one you had before.",
  },
  {
    title: "Jesus Knows the Changed Body",
    verse: "John 20:27",
    text: "Then he said to Thomas, 'Put your finger here; see my hands. Reach out your hand and put it into my side.' The risen Christ showed Thomas not a healed, restored, unblemished body — but a body with wounds. The resurrection body of Jesus carried the marks of what it had been through. Your changed body is not excluded from the resurrection hope. It is included in it.",
  },
  {
    title: "Grief at Permanent Loss Is Legitimate",
    verse: "Lamentations 3:19–20",
    text: "I remember my affliction and my wandering, the bitterness and the gall. I well remember them, and my soul is downcast within me. Sudden disability involves real loss — of capacity, identity, plans, freedom, relationships. That loss deserves full grief. The lament is not absence of faith. It is the honest human response to real change.",
  },
  {
    title: "God's Power Is Displayed in Limitation",
    verse: "2 Corinthians 12:9",
    text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' The paradox of weakness as the location of God's power is not a comfort to dismiss the grief — it is a theology to live into over time. What becomes possible from the wheelchair, from the chronic pain, from the adjusted life is real. It is often unexpected. It often surpasses the possible from before.",
  },
  {
    title: "The Body's Resurrection Is Guaranteed",
    verse: "Romans 8:23",
    text: "Not only so, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sonship, the redemption of our bodies. You are groaning for the redemption of your body. That groan is not faithlessness — it is the Spirit-given longing for what is promised. The redemption of your body is guaranteed. What it will look like is beyond imagination.",
  },
];

const voices = [
  {
    id: "v1",
    name: "Joni Eareckson Tada",
    role: "Quadriplegic since age 17, author, Joni and Friends founder",
    quote: "My wheelchair has been my greatest gift. I don't say that glibly — it took years to be able to say it. But without it I would not know Christ as I know him. I would not have the ministry I have. I would not have the depth of dependence that has made me who I am. I don't know that I would trade it.",
    bio: "Joni Eareckson Tada (Joni, A Spectacle of Glory, A Place of Healing) became a quadriplegic at 17 in a diving accident. More than 50 years later, she has built the most significant Christian disability ministry in the world. Her journey — from despair to faith to advocacy — is the most fully developed Christian theology of disability available.",
  },
  {
    id: "v2",
    name: "Amy Julia Becker",
    role: "Author, theologian of disability",
    quote: "Disability challenges our culture's assumption that the good life is the able-bodied life. That is not a Christian assumption. Christian theology insists that the weak are not less than the strong — that in the kingdom, weakness is often exactly where God does his most significant work.",
    bio: "Amy Julia Becker (A Good and Perfect Gift, White Picket Fences, To Be Made Well) writes on disability, weakness, and the Christian life with theological rigor and personal honesty. Her work helps people who have acquired disability understand the theological resources available to them.",
  },
  {
    id: "v3",
    name: "Jean Vanier",
    role: "Founder, L'Arche communities",
    quote: "The weak and the broken need us. But we need them more. Living with people who are disabled — who cannot pretend, who cannot perform, who cannot hide behind success — has taught me more about God than seminary ever did.",
    bio: "Jean Vanier founded the L'Arche communities where able-bodied and disabled people live together intentionally. His theology — that the broken and weak are teachers rather than burdens — has shaped a generation of thinking about disability, weakness, and the body of Christ.",
  },
  {
    id: "v4",
    name: "Kate Bowler",
    role: "Author, stage IV cancer survivor",
    quote: "I had to learn that my body was not a project to be optimized. It is where I live. Learning to love the body I have — not the one I had or the one I planned — is one of the most spiritual things I have done.",
    bio: "Kate Bowler (Everything Happens for a Reason, No Cure for Being Human) writes from inside a stage IV cancer diagnosis about the unexpected richness of a life built inside limitation. Her voice is essential for adults navigating newly acquired disability who are discovering that a different body can still be a full life.",
  },
];

const practices = [
  {
    icon: "🏥",
    title: "Build Your Medical Team Over Time",
    text: "Sudden disability requires a team: physiatrist (rehabilitation physician), physical and occupational therapist, neurologist or relevant specialist, psychologist specializing in adjustment to disability, and your primary care physician. Building this team and maintaining it is an ongoing project. Advocate for yourself in every appointment.",
  },
  {
    icon: "🧠",
    title: "Grieve the Before Self — Don't Rush Past It",
    text: "Adjustment to disability often involves grief for the before-body and before-life. Grief counselors who work with disability adjustment distinguish anticipatory grief (what you fear losing), acute grief (what you have lost), and chronic grief (ongoing acknowledgment of limitation). All three deserve space and professional support.",
  },
  {
    icon: "🌐",
    title: "Find Disability Community",
    text: "Being with people who understand your specific disability — from the inside — changes the experience of it. Joni and Friends disability community, condition-specific support groups, and online communities for your specific diagnosis connect you with people who know what you are navigating without requiring explanation.",
  },
  {
    icon: "⛪",
    title: "Ask Your Church to Include Your Body",
    text: "Is your church building accessible? Are the programs accessible? Are you included in leadership, teaching, and service in forms your body can participate in? Asking your church to genuinely include your changed body is not complaining — it is inviting them to be what they claim to be.",
  },
  {
    icon: "📖",
    title: "Read Joni Slowly",
    text: "Joni Eareckson Tada's memoir Joni covers the first years after her diving accident — the despair, the anger, the faith crisis, the slow and painful journey toward acceptance and meaning. Reading it slowly, over several weeks, gives language and companionship to the interior journey of adjustment.",
  },
  {
    icon: "🎯",
    title: "Ask: What Is Still Possible?",
    text: "The question is not: what was I able to do before? It is: of what remains possible — with accommodations, adaptations, assistive technology, community support — what is worth pursuing? Some people discover more possibility after disability than they had before. The ceiling is rarely as low as the immediate aftermath suggests.",
  },
];

const scriptures = [
  { verse: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'" },
  { verse: "John 20:27", text: "Then he said to Thomas, 'Put your finger here; see my hands. Reach out your hand and put it into my side. Stop doubting and believe.'" },
  { verse: "Romans 8:23", text: "Not only so, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sonship, the redemption of our bodies." },
  { verse: "1 Corinthians 12:22", text: "On the contrary, those parts of the body that seem to be weaker are indispensable." },
  { verse: "Lamentations 3:19–20", text: "I remember my affliction and my wandering, the bitterness and the gall. I well remember them, and my soul is downcast within me." },
  { verse: "Isaiah 46:4", text: "Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you." },
];

type DisabilityEntry = { id: string; date: string; grief: string; possible: string; prayer: string };

export default function SuddenDisabilityAdultPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DisabilityEntry[]>([]);
  const [grief, setGrief] = useState("");
  const [possible, setPossible] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_suddendisabilityj_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const entry: DisabilityEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      grief,
      possible,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_suddendisabilityj_entries", JSON.stringify(updated));
    setGrief(""); setPossible(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_suddendisabilityj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>Disability & Faith</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Sudden Disability as an Adult
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          For adults who have acquired disability through accident, stroke, illness, or injury — navigating the grief of the before-body, the adjustment to the present body, and the question of what faith means when the life you planned is no longer possible.
        </p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#e07070", fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>Resources</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>
            988 Suicide & Crisis Lifeline &nbsp;·&nbsp; Joni and Friends: <span style={{ color: GREEN }}>joniandfriends.org</span> &nbsp;·&nbsp; National Spinal Cord Injury Association: <span style={{ color: GREEN }}>spinalcord.org</span>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.45rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t) => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{t.verse}</p>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.1rem" }}>{v.name}</h3>
                <p style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</p>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0" }}>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{v.quote}&rdquo;</p>
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{p.icon}</span>
                  <div>
                    <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>{p.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s) => (
              <div key={s.verse} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, fontWeight: 700, marginBottom: "1rem" }}>Journal Entry</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What grief about your body needs to be named today?</label>
                <textarea value={grief} onChange={(e) => setGrief(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What is still possible — what have you discovered or rediscovered?</label>
                <textarea value={possible} onChange={(e) => setPossible(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>Write a prayer for your body — honest about what you carry.</label>
                <textarea value={prayer} onChange={(e) => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.grief && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Grief:</strong> {e.grief}</p>}
                {e.possible && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Possible:</strong> {e.possible}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Prayer:</strong> {e.prayer}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "jJPVNIAFmvA", title: "Joni: Faith Inside Disability", channel: "Joni and Friends", description: "Joni Eareckson Tada on the long journey from the day of her accident to a life of meaning inside quadriplegia — the most fully developed Christian testimony of disability faith available." },
              { videoId: "ZGk1hl1nNrw", title: "Adjusting to Acquired Disability", channel: "Psychology Today", description: "Clinical framework for the psychological adjustment to sudden disability — stages of grief, identity reconstruction, and what genuine recovery of meaning looks like." },
              { videoId: "y-DQH-M1HuM", title: "The Body and the Christian Life", channel: "Joni and Friends", description: "Theological exploration of embodiment, disability, and the resurrection — the Christian framework that makes sense of loving a body that has permanently changed." },
              { videoId: "7TBHqMqBmBo", title: "Lament as Spiritual Practice", channel: "Soong-Chan Rah", description: "Biblical lament as the language of adjustment — giving voice to the grief of a changed body, a changed life, and a God who seems absent in the transition." },
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
    </main>
  );
}
