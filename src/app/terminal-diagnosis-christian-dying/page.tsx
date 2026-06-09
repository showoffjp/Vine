"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Death Is the Enemy — and It Has Been Defeated",
    verse: "1 Corinthians 15:26",
    text: "\"The last enemy to be destroyed is death.\" The Christian tradition does not celebrate death as a friend or a beautiful transition. It names it honestly as an enemy — the consequence of a fallen creation, the thing that should not be. But the resurrection declares that this enemy has been defeated: not avoided, not circumvented, but defeated through. Jesus did not bypass death; he went through it. The terminal diagnosis is not the final word. But it is a real word, and the person receiving it is allowed — is encouraged — to name it as the enemy it is.",
  },
  {
    title: "Fear of Death Is Not Lack of Faith",
    verse: "Luke 22:44",
    text: "\"And being in anguish, he prayed more earnestly, and his sweat was like drops of blood falling to the ground.\" The night before his death, Jesus experienced physical distress at what was coming. Gethsemane is the definitive theological response to the idea that the Christian should face death without fear. Jesus, who was fully human and fully divine, sweat blood at the prospect of what was approaching. The person with a terminal diagnosis who is afraid is in good company. The person who faces death without any fear may simply be dissociated.",
  },
  {
    title: "There Is Time for Lament and Time for Hope — Often in the Same Breath",
    verse: "Psalm 22:1,4",
    text: "\"My God, my God, why have you forsaken me?... In you our ancestors put their trust; they trusted and you delivered them.\" The psalm of abandonment is also the psalm of trust. The person dying holds both things: the anguish of what is happening and the thread of trust in the God who has always come through. This is not cognitive dissonance. It is the full range of Christian experience in extremity. The faith that has room for both the cry and the trust is more honest — and more enduring — than a faith that permits only the trust.",
  },
  {
    title: "The Body Is Good, and Its Decline Is a Grief",
    verse: "Romans 8:23",
    text: "\"We ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sonship, the redemption of our bodies.\" Paul's framework for bodily suffering is not that the body doesn't matter, but that it is longing for redemption that has not yet fully arrived. The person whose body is failing from a terminal illness is experiencing the full weight of what it means to live in a creation that is groaning toward its restoration. The body matters. Its decline is a loss to be grieved, not spiritualized away.",
  },
  {
    title: "Dying Well Is a Form of Faithful Witness",
    verse: "2 Timothy 4:7",
    text: "\"I have fought the good fight, I have finished the race, I have kept the faith.\" Paul's letter from prison, likely written near his execution, is one of the most theologically rich accounts of facing death in the New Testament. The language of fighting, finishing, keeping — these are not passive. They describe an active engagement with one's own dying that constitutes a form of witness. How a person dies — with honesty, with dignity, with faith, with love — is a gift to those who remain.",
  },
];

const voices = [
  {
    id: 1,
    name: "Paul Kalanithi",
    role: "Neurosurgeon, Author of When Breath Becomes Air",
    quote: "I don't think I'm dying. I'm just trying to figure out what it means to be alive. The terminal diagnosis made me ask the question more urgently than I had before.",
    bio: "Kalanithi's memoir of dying from lung cancer at 36 — written as his own physician's mind watched his body fail — is one of the most precise, honest, and beautiful accounts of what it means to face death while still believing in life.",
  },
  {
    id: 2,
    name: "Atul Gawande",
    role: "Surgeon, Author of Being Mortal",
    quote: "We've medicalized dying, and in doing so we've made it worse. We give people more treatment and less conversation. More intervention and less preparation. More procedures and less meaning.",
    bio: "Gawande's Being Mortal is the most important contemporary account of how medicine fails dying people by focusing on treatment rather than living, and what good end-of-life care — including spiritual care — actually looks like.",
  },
  {
    id: 3,
    name: "Henri Nouwen",
    role: "Catholic priest, Author of Our Greatest Gift",
    quote: "Our death can be a gift to others. Not a tragedy to be minimized but a passage to be made in full view — a way of saying, 'I trust what I cannot see, and I pass that trust to you.'",
    bio: "Nouwen's small book Our Greatest Gift is the most theologically rich Christian account of dying well — how the process of dying can be a gift of witness to those who watch, if it is done with honesty and love.",
  },
  {
    id: 4,
    name: "Dr. Ira Byock",
    role: "Palliative Care Physician, Author of The Four Things That Matter Most",
    quote: "Most people, at the end of life, need to say four things: Forgive me. I forgive you. Thank you. I love you. The rest is usually distraction from these four things.",
    bio: "Byock's palliative care practice and writing has identified the relational tasks of dying — the conversations that make dying well possible and that allow both the dying and those left behind to enter death with less unfinished business.",
  },
];

const practices = [
  {
    icon: "📋",
    title: "Complete Your Advance Directive and Healthcare Proxy",
    text: "An advance directive (living will) documents your wishes for end-of-life medical care. A healthcare proxy designates the person who will make decisions if you cannot. Both are essential and should be completed while you are still able to communicate clearly. Your palliative care team can help you complete them. Having these documents in place is a gift to your family — it removes the burden of guessing what you would want.",
  },
  {
    icon: "🏥",
    title: "Request a Palliative Care Consultation",
    text: "Palliative care is specialized medical care focused on relief from pain, symptoms, and stress of serious illness. It is not the same as hospice (though hospice is a form of palliative care). Palliative care can be received alongside curative treatment. It significantly improves quality of life and, in some studies, extends life. Many hospitals have palliative care teams — ask your oncologist or primary care physician for a referral.",
  },
  {
    icon: "💬",
    title: "Have the Four Conversations",
    text: "Dr. Byock identifies four things most people need to say before death: 'Please forgive me,' 'I forgive you,' 'Thank you,' and 'I love you.' Create the conditions for these conversations. Consider who needs to hear each of these from you — and who you need to hear them from. These conversations often do not happen spontaneously; they need to be intentionally created.",
  },
  {
    icon: "✍️",
    title: "Write Letters or Create Ethical Wills",
    text: "An ethical will is a document in which a person records their values, life lessons, and blessings for those who will survive them. Unlike a legal will, it is not about property — it is about what you want to pass on spiritually and morally. Writing letters to children, grandchildren, or friends who will outlive you is one of the most meaningful acts of the dying process.",
  },
  {
    icon: "⛪",
    title: "Invite Spiritual Care Into Your Medical Team",
    text: "Most hospitals have chaplains on staff who can provide spiritual care regardless of your religious tradition. Ask for a chaplain visit. If you have a pastor or spiritual director, ask them to be involved in your care alongside the medical team. Spiritual care at end of life is not a luxury — it is a documented contributor to peace and quality of dying.",
  },
  {
    icon: "🕯️",
    title: "Practice the Daily Examination of Gratitude and Peace",
    text: "The Jesuit practice of the Examen — a daily review of where you found God and where you struggled — takes on particular depth in terminal illness. Each day, name what you are grateful for, what you need to let go of, and where you felt the presence of something larger. This practice has been used by the dying for centuries to orient the final chapter of a life toward meaning rather than terror.",
  },
];

const scriptures = [
  { verse: "Psalm 23:4", text: "\"Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.\"" },
  { verse: "John 11:25–26", text: "\"Jesus said to her, 'I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die.'\"" },
  { verse: "2 Corinthians 5:1", text: "\"For we know that if the earthly tent we live in is destroyed, we have a building from God, an eternal house in heaven, not built by human hands.\"" },
  { verse: "Romans 8:38–39", text: "\"Neither death nor life... will be able to separate us from the love of God that is in Christ Jesus our Lord.\"" },
  { verse: "Revelation 21:4", text: "\"He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.\"" },
  { verse: "Philippians 1:21", text: "\"For to me, to live is Christ and to die is gain.\"" },
];

type DyingEntry = {
  id: string;
  date: string;
  today: string;
  unsaid: string;
  prayer: string;
};

export default function TerminalDiagnosisChristianDyingPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DyingEntry[]>([]);
  const [today, setToday] = useState("");
  const [unsaid, setUnsaid] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_terminaldiagnosischristiandying_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!today.trim()) return;
    const entry: DyingEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      today,
      unsaid,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_terminaldiagnosischristiandying_entries", JSON.stringify(updated));
    setToday(""); setUnsaid(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_terminaldiagnosischristiandying_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🕊️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>
            Terminal Diagnosis & Dying: Christian Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For those facing a terminal diagnosis — and for those who love someone who is dying — pastoral theology that honors both the fear and the hope, practical guidance for dying well, and honest accompaniment through the final chapter.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Support: <strong>988 Suicide & Crisis Lifeline</strong> | <strong>National Hospice Helpline:</strong> 1-800-658-8898 | <strong>Caregiver Action Network:</strong> 1-855-227-3640
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer",
              background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED,
              fontWeight: tab === t ? "bold" : "normal", fontSize: "0.875rem",
              textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{item.verse}</div>
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
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", color: "#fff", flexShrink: 0 }}>
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: TEXT }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.role}</div>
                  </div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", margin: "0 0 0.75rem" }}>
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
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${PURPLE}` }}>
                <div style={{ color: PURPLE, fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, marginBottom: "1rem", fontWeight: "bold" }}>Private Journal</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>Where are you today — physically, emotionally, spiritually?</label>
                <textarea value={today} onChange={e => setToday(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What is still unsaid — to someone you love, to God, to yourself?</label>
                <textarea value={unsaid} onChange={e => setUnsaid(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer — for today, for those you love, for what lies ahead:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.today && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Today:</strong> {e.today}</p>}
                {e.unsaid && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Unsaid:</strong> {e.unsaid}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="ld-SpG2-GCU" title="Atul Gawande — Being Mortal: What Medicine Gets Wrong About Dying" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Atul Gawande: Being Mortal — What Medicine Gets Wrong About Dying</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Surgeon and author Atul Gawande on how medicine fails dying people and what good end-of-life care — including meaning-focused care — actually looks like</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="fHOtUNqGUQQ" title="Henri Nouwen — Our Greatest Gift: A Meditation on Dying and Caring" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Henri Nouwen: Our Greatest Gift — A Meditation on Dying and Caring</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Nouwen on how dying can be a gift of witness to those who remain — one of the most theologically rich Christian perspectives on facing death faithfully</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="49yJJ5P0fHg" title="The Four Things That Matter Most — Ira Byock on What Dying People Need to Say" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>The Four Things That Matter Most: What Dying People Need to Say</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Palliative care physician Ira Byock on the four relational statements that most dying people need to make — and how to create the conditions for these conversations</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="88Lsoo5y74Q" title="When Breath Becomes Air — Paul Kalanithi on Facing Death While Still Living" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>When Breath Becomes Air: Paul Kalanithi on Facing Death While Still Living</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Neurosurgeon Paul Kalanithi, dying of lung cancer at 36, on what it means to be alive — and what the terminal diagnosis clarifies rather than destroys</p>
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
