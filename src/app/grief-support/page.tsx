"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", INDIGO = "#6366F1", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Blessed Are Those Who Mourn — the Beatitude That Surprises Us", verse: "Matt 5:4", text: "Blessed are those who mourn, for they will be comforted. Jesus names mourning as a blessed state — not a state to escape immediately but one that receives the comfort of God. The instinct to hurry through grief, suppress it, or spiritualize it away violates both what we know about the human psyche and what Jesus says here. To tell a grieving person that their loved one is in a better place, or that God has a plan, or that they should be grateful for the years they had, is to skip over the beatitude — to demand that they arrive at comfort without passing through mourning. But Jesus names the sequence: mourning first, then comfort. Mourning is not an obstacle to comfort; it is the path to it. The church that can sit with mourning, that does not rush to resolution, is the church that can genuinely offer the comfort this beatitude promises." },
  { title: "Lament in the Psalms — the Vocabulary the Church Has Lost", verse: "Ps 22:1-2", text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? Approximately 60 of the 150 Psalms are lament psalms — psalms of complaint, confusion, and desperate petition addressed directly to God. Lament is the biblically sanctioned language of suffering. It is not resignation to fate; it is a cry hurled at the living God who is expected to respond. The structure of the lament psalm moves through complaint (this is what is happening and it is terrible), petition (God, do something), and an often surprising turn toward trust — not because the situation has resolved but because the act of crying out to God has reoriented the psalmist. The contemporary church has largely abandoned lament in favor of praise, with the result that Christians who suffer have no biblical vocabulary for their experience. They feel that their grief is faithlessness. Recovering lament as a spiritual practice is one of the most urgent needs in pastoral care." },
  { title: "Jesus Wept — the Grief of God and What It Means for Ours", verse: "John 11:35", text: "Jesus wept. The shortest verse in the Bible is one of the most theologically rich. Jesus arrives at the tomb of his friend Lazarus knowing that he is about to raise him. He knows what he is about to do. He weeps anyway. Why? Because grief is not a mistake — it is the appropriate, fully human response to death in a world that was not made for death. Jesus's tears over Lazarus are not a performance of sympathy; they are the tears of God confronting the obscenity of death in a world he created for life. His tears consecrate our tears. Grief is not faithlessness. Grief is the appropriate response of a creature who has been made in the image of a God who loves, and who therefore loses. To grieve is to have loved. Jesus's weeping at Lazarus's tomb authorizes every tear shed at every graveside by every person who has loved and lost." },
  { title: "Grief Has No Timetable — Against Premature Closure", verse: "Lam 3:32-33", text: "Though he brings grief, he will show compassion, so great is his unfailing love. For he does not willingly bring affliction or grief to anyone. The cultural pressure to be over grief by a certain date — six months, a year, the passage of a season — has no biblical warrant. Jeremiah wept for extended periods. David's laments were sustained across multiple psalms. The Psalms of Ascent are preceded by Psalm 88, which ends without resolution. The stage model of grief associated with Kubler-Ross has been significantly revised in subsequent grief research: the stages were never intended as a linear sequence, and current research shows that grief trajectories vary enormously between individuals. What is consistent is this: grief that is suppressed rather than expressed tends to resurface later with more force. The pressure for premature closure is not compassion — it is discomfort with someone else's grief. The church that can refuse that pressure and sit in sustained accompaniment with the grieving is offering genuine pastoral care." },
  { title: "Grief Upon Grief — Cumulative Loss and the Exhausted Griever", verse: "Ps 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit. Some people arrive at a season of life in which losses accumulate faster than they can be processed. The parent who dies, followed six months later by a marriage that ends, followed a year after that by a job that disappears — the person carrying this stack of unprocessed grief is not simply sad. They are exhausted at a level that ordinary pastoral care does not reach. Cumulative grief produces a particular kind of numbness, a sense that the ground itself has become unreliable, and sometimes a frightening inability to imagine that things will ever be otherwise. Pastoral care for the overwhelmed griever requires first the recognition of what they are actually carrying — naming the losses one by one, refusing to let them be minimized as ordinary human difficulty — and then a commitment to accompaniment that is measured in months and years rather than weeks." },
];

const voices = [
  { name: "C.S. Lewis", role: "A Grief Observed", quote: "No one ever told me that grief felt so like fear. I am not afraid, but the sensation is like being afraid. The same fluttering in the stomach, the same restlessness, the yawning. I keep on swallowing. At other times it feels like being mildly drunk, or concussed. There is a sort of invisible blanket between the world and me. I find it hard to take in what anyone says.", bio: "C.S. Lewis wrote A Grief Observed in 1961 following the death of his wife Joy Davidman from cancer. It was originally published under a pseudonym because Lewis was not sure he wanted the world to see the raw ferocity of his grief and his temporary sense of God's absence. The book remains one of the most honest accounts of Christian grief ever written — not a manual for surviving loss, but a diary of surviving it. Lewis found his way through to faith renewed, but he did not skip the darkness." },
  { name: "Jerry Sittser", role: "A Grace Disguised", quote: "The experience of loss does not have to be the defining moment of our lives. Instead, the defining moment can be our response to the loss. It is not what happens to us but what happens in us that will determine whether the loss is ultimately a destructive or a creative force in our lives. I did not get over the loss of my mother, my wife, and my daughter. I absorbed it into my life, like soil receiving decaying matter, until it became part of who I am.", bio: "Jerry Sittser lost his mother, his wife, and his four-year-old daughter in a single automobile accident. A Grace Disguised is his account of the years that followed. His central argument is counterintuitive: that the soul does not shrink from catastrophic loss but can, if the grief is entered and not avoided, expand to hold more of life, more of compassion, more of God. It is not a book about getting over grief but about what grief, fully entered, can produce." },
  { name: "Nicholas Wolterstorff", role: "Lament for a Son", quote: "I shall look at the world through tears. Perhaps I shall see things that dry-eyed I could not see. The wound of grief never fully heals. But the wound gradually becomes the place where the most serious things in life are learned — about love, about loss, about what we were made for and what we have been denied, about the God who suffers alongside us and promises to wipe every tear.", bio: "Nicholas Wolterstorff is a philosopher and theologian who lost his 25-year-old son Eric to a mountain-climbing accident. Lament for a Son is a short, searing book — part grief journal, part theology, part letter to a dead son. Wolterstorff refuses the consolations that do not console, and he arrives not at resolution but at something more honest: a grief that does not end but that opens rather than closes the soul." },
];

const practices = [
  { icon: "📓", title: "Grief Journaling", text: "Grief journaling as a spiritual practice is different from ordinary journaling. The form is lament: write directly to God about the loss, in the tradition of the Psalms. Not journaling about God from a reflective distance, but addressing God directly with the full weight of what has happened. What do you want God to know? What do you need from him? What are you angry about? What do you not understand? This practice gives the grief a container and keeps it oriented toward God rather than turned inward as depression." },
  { icon: "🕯️", title: "Creating a Grief Ritual", text: "A grief ritual is an annual practice — a specific act on a specific day — that honors the person or thing lost without requiring that grief be over. It might be visiting a grave, cooking a meal the person loved, lighting a candle, reading a letter aloud, or gathering with others who loved them. A ritual communicates that the loss is real and permanent and worth marking. It prevents both the suppression of grief (pretending the anniversary means nothing) and the sense that every day must be a day of mourning." },
  { icon: "👥", title: "Grief Support Groups", text: "There is something a grief support group provides that no amount of individual pastoral care can replace: the experience of being with other people who know loss from the inside. Well-meaning friends and family who have not experienced comparable loss often say the wrong thing not because they do not care but because they do not know. A grief support group is the community of those who have been where you are. GriefShare and similar church-based programs are widely available and have supported millions of people." },
  { icon: "💭", title: "Sitting with the Full Memory", text: "Grief requires access to the whole person, not just the sanitized version. There is a natural tendency to idealize the dead — to remember only the good and to feel that honoring them requires suppressing the complicated. But grief that is built on an idealized memory is grief that cannot complete itself. Sitting with the full memory means allowing the difficult parts to be part of the grief: the ways the relationship was hard, the things left unsaid or unresolved, the anger alongside the love. This is not dishonoring the dead — it is honoring the actual relationship." },
  { icon: "🙏", title: "Praying Psalm 22 and Psalm 88 in Their Entirety", text: "Psalm 22 and Psalm 88 are the two darkest psalms in Scripture. Psalm 88 is unique in that it ends without resolution — the final word is darkness. Praying these psalms in their entirety, aloud and slowly, is to give permission to your darkest moments of grief. These psalms are in the canon. They are Scripture. God received them. He will receive yours. Jesus quoted Psalm 22 from the cross, which means that the darkest human prayer has already been prayed by the Son of God." },
];

const scriptures = [
  { verse: "Matt 5:4", text: "Blessed are those who mourn, for they will be comforted." },
  { verse: "John 11:35", text: "Jesus wept." },
  { verse: "Ps 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Rev 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
  { verse: "Lam 3:32-33", text: "Though he brings grief, he will show compassion, so great is his unfailing love. For he does not willingly bring affliction or grief to anyone." },
  { verse: "Ps 88:1-3", text: "You are the God who saves me; day and night I cry out to you. May my prayer come before you; turn your ear to my cry. I am overwhelmed with troubles and my life draws near to death." },
];

const videos = [
  { id: "BcqGAHZj8gg", title: "The Theology of Grief — Why Christians Still Mourn" },
  { id: "N7jBkQY9yLo", title: "Lament — the Language the Church Has Forgotten" },
  { id: "K7zAbRHANqY", title: "Walking with the Grieving — a Pastoral Guide" },
  { id: "jqoLN_hGHR8", title: "A Grace Disguised — Grief and the Expansion of the Soul" },
];

type GREntry = { id: string; date: string; loss: string; feeling: string; comfort: string };

export default function GriefSupportPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<GREntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_grief_entries") ?? "[]"); } catch { return []; }
  });
  const [jLoss, setJLoss] = useState("");
  const [jFeeling, setJFeeling] = useState("");
  const [jComfort, setJComfort] = useState("");

  useEffect(() => { localStorage.setItem("vine_grief_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jLoss.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), loss: jLoss, feeling: jFeeling, comfort: jComfort }, ...prev]);
    setJLoss(""); setJFeeling(""); setJComfort("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Suffering &amp; Hope</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Grief Support</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>The Christian journey through death, loss, and mourning — theology, lament, and practices for those who grieve and those who walk beside them.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? INDIGO : BORDER}`, background: tab === t.id ? INDIGO + "22" : "transparent", color: tab === t.id ? INDIGO : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: INDIGO, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem" }}>{p.title}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: INDIGO, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${INDIGO}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: INDIGO, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Your Grief</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to bring your loss before God in honesty and lament.</p>
            {[
              { label: "Loss — what or who you have lost", val: jLoss, set: setJLoss },
              { label: "Feeling — what you are feeling right now about that loss", val: jFeeling, set: setJFeeling },
              { label: "Comfort — what is bringing you comfort, or what you are asking God for", val: jComfort, set: setJComfort },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: INDIGO, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: INDIGO }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: INDIGO, fontWeight: 600 }}>Loss:</span> {e.loss}</p>
                      {e.feeling && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: INDIGO, fontWeight: 600 }}>Feeling:</span> {e.feeling}</p>}
                      {e.comfort && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: INDIGO, fontWeight: 600 }}>Comfort:</span> {e.comfort}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: INDIGO }}>{v.title}</h3>
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
