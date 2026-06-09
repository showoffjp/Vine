"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "God Sees the Neglected Child",
    verse: "Genesis 16:13",
    text: "She gave this name to the LORD who spoke to her: 'You are the God who sees me.' Hagar was alone, abandoned, and afraid — not cared for, not provided for, not protected. El Roi — the God Who Sees — found her in the wilderness. God is the God who sees the child who went unseen. He saw you then. He sees you now.",
  },
  {
    title: "The Absence of Good Is Also a Wound",
    verse: "Psalm 27:10",
    text: "Though my father and mother forsake me, the LORD will receive me. The Hebrew word here for forsake means abandon, leave behind, relinquish. It is not just abuse that wounds — it is the absence of what should have been there. The parents who were emotionally unavailable, who did not delight in you, who did not protect you — their absence is a real wound. God does not minimize it. He promises to receive you.",
  },
  {
    title: "The Ache for What Should Have Been",
    verse: "Ezekiel 16:4–6",
    text: "On the day you were born your cord was not cut, nor were you washed with water to make you clean, nor were you rubbed with salt or wrapped in cloths. No one looked on you with pity or had compassion enough to do any of these things for you... and when I looked at you and saw you kicking about in your blood, I said to you, 'Live!' God speaks to the unwashed, unattended newborn — the child no one cared for properly — and says: Live. The one who was not cared for is not therefore unwanted by God.",
  },
  {
    title: "The Father Who Runs",
    verse: "Luke 15:20",
    text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him. The father in the parable does what neglected children were denied: he sees his child from a distance, he runs, he embraces, he kisses. Jesus presents this as the image of God toward the returning child. The parental welcome you did not receive — God is offering it.",
  },
  {
    title: "Healing Is Possible, Though Slow",
    verse: "Isaiah 61:1–3",
    text: "The Spirit of the Sovereign LORD is on me... to bind up the brokenhearted... to comfort all who mourn... to bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning, and a garment of praise instead of a spirit of despair. The binding of brokenhearted wounds takes time. Isaiah 61 does not promise instant recovery. It promises the One who has come to do the binding.",
  },
];

const voices = [
  {
    id: "v1",
    name: "Dan Allender",
    role: "Trauma therapist, author, The Wounded Heart",
    quote: "Childhood neglect is the wound that nobody saw. There was no dramatic event, no single incident to point to — just the ongoing absence of what should have been there. That makes it harder to name, harder to grieve, and harder for others to validate. But the wound is as real as any abuse wound.",
    bio: "Dan Allender (The Wounded Heart, The Healing Path, Bold Love) has done the most sustained Christian therapeutic work on childhood abuse and neglect. His framework for the different forms of childhood harm — and the distinct recovery paths each requires — is essential for adult survivors of neglect.",
  },
  {
    id: "v2",
    name: "Bessel van der Kolk",
    role: "Psychiatrist, trauma researcher",
    quote: "The child who was not seen, not soothed, not protected — that child grows up with an internal world shaped by that absence. The nervous system organizes around what was not there. Healing requires providing, in relationship, what was absent.",
    bio: "Bessel van der Kolk (The Body Keeps the Score) documents the neurological impact of childhood neglect — how the absence of attuned care shapes the developing nervous system and produces the anxiety, dissociation, and relational difficulties that adult survivors of neglect carry. His work validates the seriousness of what is often minimized.",
  },
  {
    id: "v3",
    name: "Curt Thompson",
    role: "Christian psychiatrist, author",
    quote: "The neglected child did not learn that they were worth noticing. That becomes the deep assumption — you are not worth noticing. Healing begins when someone notices: your story, your pain, your specific person. That noticing is what God does, and what the body of Christ is called to do.",
    bio: "Curt Thompson (The Soul of Shame, Anatomy of the Soul) integrates interpersonal neurobiology with Christian theology. His framework — that shame installs a narrative of unworthiness, and that healing happens through attunement and being seen — is directly applicable to the core wound of neglect.",
  },
  {
    id: "v4",
    name: "Diane Langberg",
    role: "Christian trauma psychologist",
    quote: "Neglect teaches children that their needs are not legitimate, their voice does not matter, and their presence does not delight anyone. Adult survivors carry these convictions into adulthood, into relationships, into church, into their relationship with God. They need to encounter a God who delights in them — and they need that encounter mediated through people who genuinely delight in their presence.",
    bio: "Diane Langberg (Suffering and the Heart of God, Redeeming Power) writes on trauma and pastoral care from decades of clinical experience. Her work on neglect specifically names what was absent and what healing requires — genuine encounter with delight, attunement, and the particular care that was not given.",
  },
];

const practices = [
  {
    icon: "🧠",
    title: "Name the Specific Absence",
    text: "Neglect is named by what was not there: food, protection, emotional attunement, delight, presence, encouragement, physical safety. Name the specific absences. Not vaguely — my childhood was bad — but specifically: my mother was never emotionally available when I was upset. Specific naming is how the wound becomes grievable.",
  },
  {
    icon: "💬",
    title: "Work with a Trauma-Informed Therapist",
    text: "Childhood neglect produces specific patterns: difficulty identifying and expressing emotions, hypervigilance, shame-based self-concept, relational avoidance, difficulty accepting care. A therapist trained in attachment-focused therapy, EMDR, or somatic approaches can work with these patterns where they actually live — in the body and relational nervous system.",
  },
  {
    icon: "🕯️",
    title: "Grieve What Should Have Been",
    text: "The grief of neglect is the grief of absence: the parent who should have delighted in you, the protection that should have been provided, the attunement that should have shaped your nervous system. This grief is different from the grief of loss — it is the grief of what never existed. It is real. It needs space.",
  },
  {
    icon: "👥",
    title: "Practice Being Received",
    text: "The adult survivor of neglect has learned not to need, not to ask, not to show vulnerability. The repair requires the opposite: practicing being received. Letting someone care for you. Accepting a meal, a gesture, a check-in. Each act of receiving teaches your nervous system something new: you are worth caring for.",
  },
  {
    icon: "📖",
    title: "Read Ezekiel 16:1–14 as Your Story",
    text: "Ezekiel 16 describes God as the one who found the unwashed, unwanted, uncared-for infant — and chose her, named her, clothed her, adorned her, and said: you are mine. It is the most direct biblical address to the neglected child. Read it slowly. Let God speak the words that should have been spoken over you.",
  },
  {
    icon: "⛪",
    title: "Find a Church That Practices Attunement",
    text: "The body of Christ is meant to be the community that provides what was absent in your family of origin. Find a church where people notice you, remember your story, check in specifically, express genuine interest. A pastor who knows your name is a starting point. A community that knows your story is the repair.",
  },
];

const scriptures = [
  { verse: "Psalm 27:10", text: "Though my father and mother forsake me, the LORD will receive me." },
  { verse: "Genesis 16:13", text: "She gave this name to the LORD who spoke to her: 'You are the God who sees me,' for she said, 'I have now seen the One who sees me.'" },
  { verse: "Isaiah 49:15–16", text: "Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you! See, I have engraved you on the palms of my hands." },
  { verse: "Ezekiel 16:6", text: "Then I passed by and saw you kicking about in your blood, and as you lay there in your blood I said to you, 'Live!'" },
  { verse: "Zephaniah 3:17", text: "The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing." },
  { verse: "Isaiah 61:1", text: "The Spirit of the Sovereign LORD is on me, because the LORD has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners." },
];

type NeglectEntry = { id: string; date: string; absence: string; received: string; truth: string };

export default function AdultSurvivorNeglectPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<NeglectEntry[]>([]);
  const [absence, setAbsence] = useState("");
  const [received, setReceived] = useState("");
  const [truth, setTruth] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_adultsurvivorneglectj_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!absence.trim()) return;
    const entry: NeglectEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      absence,
      received,
      truth,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_adultsurvivorneglectj_entries", JSON.stringify(updated));
    setAbsence(""); setReceived(""); setTruth("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_adultsurvivorneglectj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>Childhood Trauma</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Adult Survivor of Childhood Neglect
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          For adults who grew up unseen, unprovided for, or undelighted in — where the wound is not what happened, but what never did. The God who sees you is El Roi. He found Hagar alone in the wilderness. He is finding you now.
        </p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#e07070", fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>If you are in crisis</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>
            988 Suicide & Crisis Lifeline (call or text 988) &nbsp;·&nbsp; RAINN: 1-800-656-4673 &nbsp;·&nbsp; Crisis Text Line: text HOME to 741741
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.45rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t) => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{t.verse}</p>
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
                <p style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</p>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0" }}>
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
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>{s.verse}</p>
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
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>Name one specific absence from your childhood — what was not there that should have been.</label>
                <textarea value={absence} onChange={(e) => setAbsence(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>When did you allow yourself to be cared for this week — even in a small way?</label>
                <textarea value={received} onChange={(e) => setReceived(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What truth about God&apos;s delight in you do you most need to hear today?</label>
                <textarea value={truth} onChange={(e) => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.absence && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Absence:</strong> {e.absence}</p>}
                {e.received && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Received:</strong> {e.received}</p>}
                {e.truth && <p style={{ color: TEXT, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Truth:</strong> {e.truth}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "53RX2ESIqLM", title: "The Body Keeps the Score: Neglect and the Nervous System", channel: "Bessel van der Kolk", description: "Van der Kolk on how childhood neglect — the absence of attuned care — shapes the nervous system and produces lasting patterns in adult life. The science that validates what survivors know." },
              { videoId: "ZwDlGPCEUoE", title: "Attachment Wounds and Healing", channel: "Diane Langberg", description: "Langberg on attachment wounds from childhood — how neglect produces specific relational and spiritual patterns, and what healing requires: genuine attunement and the experience of being seen." },
              { videoId: "mC-zw0zCCtg", title: "Shame and the Neglected Self", channel: "Curt Thompson", description: "Curt Thompson on how the neglected child develops a shame-based self-concept — and how that narrative is interrupted by relationship and the encounter with God who delights." },
              { videoId: "4yRlBMcNNjY", title: "The Father Who Runs: A Theology of Receive", channel: "N.T. Wright", description: "Wright on the prodigal father — why the father running is the central image, what it means for people who never received the welcome they needed, and how God offers what was withheld." },
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
    </main>
      <Footer />
    </>
  );
}
