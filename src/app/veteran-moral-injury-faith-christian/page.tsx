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
    title: "What Moral Injury Is — and Why It Is Not the Same as PTSD",
    body: "Moral injury is the damage done when a person participates in, witnesses, or fails to prevent events that violate their moral code — and when those in authority betray the trust placed in them. It is distinct from PTSD's fear-based response: moral injury is a wound to the soul, to one's sense of goodness and meaning. Veterans who carry moral injury often say: \"I don't have nightmares about what was done to me. I have nightmares about what I did.\" This distinction matters enormously for pastoral care and treatment.",
  },
  {
    title: "David: The Soldier Who Was Also a Man After God's Heart",
    body: "David killed tens of thousands (1 Samuel 18:7). He is called \"a man after God's own heart\" (1 Samuel 13:14). He is also explicitly told he cannot build the Temple because \"you have shed much blood\" (1 Chronicles 22:8). The Bible holds these truths together without resolution: David's calling, his violence, his consequences, and God's continued love for him. This gives the Christian veteran a framework that refuses easy answers — neither \"it was all fine\" nor \"you are permanently disqualified from God's love.",
  },
  {
    title: "The Cross as the Place God Absorbs Moral Injury",
    body: "The cross is not only about forgiveness of individual sin — it is God's own absorption of the full weight of human violence, betrayal, and moral failure. \"He himself bore our sins in his body on the tree\" (1 Peter 2:24). The veteran carrying the weight of what they did or saw in combat is not carrying something too heavy for God to receive. The cross was the place where God said: give it to me. I will take it. You do not have to carry this alone.",
  },
  {
    title: "Confession, Absolution, and the Permission to Receive Forgiveness",
    body: "Many veterans with moral injury are convinced, at a level below conscious reasoning, that they do not deserve forgiveness — that what they did is too specific, too real, too wrong. The Christian practice of confession (not only to God but to another trusted person, as James 5:16 prescribes) and absolution is one of the most therapeutically and spiritually powerful resources available. Being told \"you are forgiven\" by a human being who has heard the specific thing is qualitatively different from believing it in the abstract.",
  },
  {
    title: "Redemption: Finding Meaning After Moral Injury",
    body: "Recovery from moral injury often involves a stage that therapist Jonathan Shay calls \"communalization of trauma\" — bringing the experience into a community that can witness, receive, and help integrate it. Many veterans have found that advocacy, peer support work, testifying before lawmakers, or serving other veterans is part of how they redeem their experience — not by erasing what happened but by making it matter. This is a deeply Christian pattern: resurrection does not erase the wounds; it transforms them into proof that death is not the end.",
  },
];

const voices = [
  {
    name: "Dr. Jonathan Shay",
    role: "Military psychiatrist, author of Achilles in Vietnam and Odysseus in America",
    quote: "Moral injury requires communalization to heal. The veteran who carries it alone in silence will not recover. The wound requires witnesses — people willing to hear and receive what happened without flinching, without excusing, and without abandoning. The church is uniquely positioned to be this community.",
  },
  {
    name: "Dave Grossman",
    role: "Author of On Killing; military psychologist on the psychology of combat",
    quote: "We ask our warriors to do things that would destroy the average citizen — to kill, to witness death, to make impossible decisions under pressure. And then we send them home and expect them to be okay. They are not okay. They need a community that understands what they were asked to carry.",
  },
  {
    name: "Dr. Warren Kinghorn",
    role: "Psychiatrist, theologian, Duke Divinity School; veteran mental health advocate",
    quote: "Moral injury is a theological problem as much as a psychological one. The church has resources that psychiatry does not — liturgy, confession, absolution, community, the language of guilt and forgiveness, the promise of redemption. These are not peripheral. They may be the most essential tools we have.",
  },
  {
    name: "Carey Nieuwhof",
    role: "Pastor and author; has engaged deeply with veteran mental health in the church",
    quote: "When veterans come home, the church often either ignores what they went through or reflexively glorifies it. Neither helps. What veterans with moral injury need is a community that will say: tell us what actually happened. We will not leave. We will not judge. And we believe God is bigger than this.",
  },
];

const practices = [
  {
    title: "Find a Moral Injury-Informed Therapist or Chaplain",
    body: "Not all therapists understand moral injury; not all PTSD treatment addresses it. Specifically seek a provider trained in Moral Injury therapy, Adaptive Disclosure Therapy (ADT), or Cognitive Processing Therapy (CPT) for veterans. The VA now trains providers in moral injury. Military OneSource (militaryonesource.mil) and Give an Hour (giveanhour.org) connect veterans with mental health support. A military chaplain who understands both faith and combat is also invaluable.",
  },
  {
    title: "Find a Community of Veterans",
    body: "Healing from moral injury is not possible in isolation, and it is not fully possible with civilians who have not shared the experience. Find other veterans — ideally Christian veterans — who can receive your story without requiring it to be sanitized. Mighty Oaks Foundation and Operation Restored Warrior both run Christian veteran programs that specifically address moral injury through a biblical framework.",
  },
  {
    title: "Practice Confession With a Safe Person",
    body: "James 5:16 — \"confess your sins to one another and pray for one another, that you may be healed\" — was written for exactly this kind of wound. Find a pastor, spiritual director, or trusted friend who can receive the specific things you carry. The goal is not to perform guilt but to be heard and pronounced forgiven in the particular. If you belong to a liturgical tradition, formal sacramental confession is available. If you do not, the principle still applies.",
  },
  {
    title: "Engage the Psalms of Lament and Violence",
    body: "The Psalms contain a level of violence, rage, and petition for divine retribution (\"imprecatory psalms\" — Psalms 58, 83, 137) that many Christian traditions avoid. These psalms are in the Bible specifically to give language to people who have experienced and participated in violence. Praying them honestly — allowing the rage and grief to be spoken before God without sanitizing — is part of what it means to bring moral injury to God rather than suppressing it.",
  },
  {
    title: "Make Something That Tells the Truth",
    body: "Many veterans find healing through creating something — writing, artwork, woodworking, building — that allows them to externalize the weight they carry. Veterans who write memoirs, paint combat scenes, compose music, or build memorials are engaging in a therapeutic and spiritual process of making meaning. You do not need to share it publicly. The act of making something true is itself healing.",
  },
  {
    title: "Allow Others to Speak Forgiveness and Worth Over You",
    body: "Many veterans with moral injury cannot receive forgiveness from inside themselves alone — the self-condemnation is too entrenched. This is why community matters: to have someone look you in the eye and say \"you are not worthless, you are not beyond forgiveness, God has not abandoned you, and I am glad you came home\" is not sentimental. It is the voice of God mediated through human presence. Position yourself to receive it.",
  },
];

const scriptures = [
  { ref: "Psalm 51:17", text: "The sacrifices of God are a broken spirit; a broken and contrite heart, O God, you will not despise." },
  { ref: "Isaiah 1:18", text: "Come now, let us reason together, says the Lord: though your sins are like scarlet, they shall be as white as snow; though they are red like crimson, they shall become like wool." },
  { ref: "1 John 1:9", text: "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness." },
  { ref: "Romans 8:1", text: "There is therefore now no condemnation for those who are in Christ Jesus." },
  { ref: "Psalm 34:18", text: "The Lord is near to the brokenhearted and saves the crushed in spirit." },
  { ref: "Lamentations 3:22-23", text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness." },
];

const videos = [
  { videoId: "rH4E5OjCWEI", title: "Moral Injury and the Warrior's Soul — Jonathan Shay" },
  { videoId: "xCr3qVCa6Pk", title: "Mighty Oaks — Christian Healing for Combat Veterans" },
  { videoId: "kTq5j6cAKm8", title: "Warren Kinghorn — Moral Injury and the Church" },
  { videoId: "9FKW7-NkbZM", title: "Operation Restored Warrior — Faith-Based Veteran Recovery" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function VeteranMoralInjuryPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<{ id: number; date: string; carry: string; faith: string; prayer: string }[]>([]);
  const [form, setForm] = useState({ carry: "", faith: "", prayer: "" });
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_veteranmoralinjury_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!form.carry.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), ...form }, ...entries];
    setEntries(next);
    localStorage.setItem("vine_veteranmoralinjury_entries", JSON.stringify(next));
    setForm({ carry: "", faith: "", prayer: "" });
  }

  return (
    <main style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: `linear-gradient(135deg, ${ACCENT}22 0%, #0d0d1a 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: "0.75rem" }}>Vine Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            Veteran Moral Injury & Faith
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            The nightmares are not about what was done to you. For Christian veterans carrying the weight of what they did, witnessed, or failed to prevent — theology for the wound in the soul.
          </p>
          <div style={{ marginTop: "1.5rem", padding: "0.75rem 1rem", background: `${ACCENT}18`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 6px 6px 0", fontSize: "0.9rem", color: MUTED }}>
            <strong style={{ color: TEXT }}>Veterans Crisis Line:</strong> Call <strong style={{ color: TEXT }}>988 then press 1</strong> &bull; Text <strong style={{ color: TEXT }}>838255</strong> &bull; Chat at VeteransCrisisLine.net &bull; Mighty Oaks Foundation: <strong style={{ color: TEXT }}>mightyoaksprograms.org</strong>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Stored only on this device. Private. You do not owe anyone this.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What are you carrying today?</label>
                <textarea value={form.carry} onChange={e => setForm(f => ({ ...f, carry: e.target.value }))} rows={3} placeholder="You can be specific here. This is just for you." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Where is your faith in this today?</label>
                <textarea value={form.faith} onChange={e => setForm(f => ({ ...f, faith: e.target.value }))} rows={2} placeholder="Trusting, doubting, angry, numb, somewhere..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer or cry to God (optional)</label>
                <textarea value={form.prayer} onChange={e => setForm(f => ({ ...f, prayer: e.target.value }))} rows={2} placeholder="God, I don't know how to hold this. I need..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ alignSelf: "flex-start", background: ACCENT, color: "#fff", border: "none", borderRadius: 6, padding: "0.65rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h3 style={{ color: MUTED, fontSize: "0.95rem" }}>Previous Entries</h3>
                {entries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.75rem" }}>{e.date}</div>
                    {e.carry && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Carrying: </span>{e.carry}</p>}
                    {e.faith && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Faith: </span>{e.faith}</p>}
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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Teaching and testimony for veterans carrying moral injury.</p>
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
