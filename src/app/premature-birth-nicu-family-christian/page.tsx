"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "The Premature Baby Was Known Before They Were Born",
    verse: "Psalm 139:13–16",
    text: "\"For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made... My frame was not hidden from you when I was made in the secret place, when I was woven together in the depths of the earth. Your eyes saw my unformed body.\" The God who saw your child's unformed body is not surprised by the NICU. The monitors, the isolette, the tiny body with wires — God saw it all and knew this child before you did.",
  },
  {
    title: "God Is in the NICU with You",
    verse: "Psalm 23:4",
    text: "\"Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.\" The NICU is a darkest valley. There is no other honest description. The presence promised here is not conditional on outcome. God is in the room with the baby who is fighting. God is in the room when the outcome is uncertain. God is in the room with the parents who are terrified.",
  },
  {
    title: "You Are Allowed to Grieve the Birth You Expected",
    verse: "Lamentations 2:19",
    text: "\"Arise, cry out in the night, as the watches of the night begin; pour out your heart like water in the presence of the Lord.\" The birth of a premature child involves multiple simultaneous griefs: the expected birth, the early weeks at home, the uncertainty about outcomes, the loss of normal new-parenthood. These are legitimate griefs that deserve to be named, not suppressed in favor of gratitude that the baby is alive.",
  },
  {
    title: "Fear Does Not Mean Faithlessness",
    verse: "Mark 9:24",
    text: "\"Immediately the boy's father exclaimed, 'I do believe; help me overcome my unbelief!'\" The father of the sick child in Mark 9 combined belief and unbelief in the same breath. Jesus did not rebuke the unbelief — he responded to the faith that was mixed with it. The NICU parent who prays while terrified, who trusts while overwhelmed with doubt, is praying the same prayer this father prayed.",
  },
  {
    title: "The Church Is Called to Practical, Sustained Support",
    verse: "Galatians 6:2",
    text: "\"Carry each other's burdens, and in this way you will fulfill the law of Christ.\" The NICU journey is months long for many families. Initial support from church communities often fades after the first few weeks. Faithful burden-bearing for NICU families means sustained, practical help — meals, childcare for siblings, hospital parking, household support, and ongoing presence — for as long as the journey continues.",
  },
];

const voices = [
  {
    id: 1,
    name: "Dr. Stacy Beck",
    role: "Neonatologist, NICU Family Advocate",
    quote: "The NICU is one of the most disorienting places a human being can inhabit — and parents need to hear that everything they are feeling is a normal response to an abnormal situation.",
    bio: "Beck's clinical and advocacy work has been focused on the psychological and spiritual needs of NICU parents, including the importance of acknowledging grief, trauma, and fear as appropriate responses.",
  },
  {
    id: 2,
    name: "Kristin Mackintosh",
    role: "NICU Parent, Author",
    quote: "The hardest thing was not knowing whether to pray for healing or for peace — and not knowing if asking for the wrong thing would somehow fail my son.",
    bio: "Mackintosh's memoir of her NICU journey has given language to the specific theological disorientation many Christian parents feel — particularly around prayer, God's will, and outcome.",
  },
  {
    id: 3,
    name: "Dr. Diane Langberg",
    role: "Psychologist, Author of Suffering and the Heart of God",
    quote: "Trauma that happens in the presence of medical equipment, bright lights, and clinical expertise is still trauma — the clinical context does not protect against the emotional wound.",
    bio: "Langberg's work on trauma helps NICU families understand that PTSD-level responses to their experience are real, recognized, and require appropriate therapeutic attention rather than dismissal.",
  },
  {
    id: 4,
    name: "Rachel Jankovic",
    role: "Author, Loving the Little Years; NICU Parent",
    quote: "The NICU teaches you something that comfortable Christianity never does: that you cannot control whether the people you love live or die. That is a devastating and transforming truth.",
    bio: "Jankovic has written honestly about the specific spiritual formation that NICU parenthood produced — a deepened dependence that could not have been acquired any other way.",
  },
];

const practices = [
  {
    icon: "🤲",
    title: "Practice Kangaroo Care",
    text: "When medically permitted, skin-to-skin contact (kangaroo care) with your premature baby is one of the most powerful things you can do — for their development and for your bond. It is documented to stabilize heart rate, improve oxygenation, and support brain development. Ask your NICU team when you can begin.",
  },
  {
    icon: "📔",
    title: "Keep a NICU Journal",
    text: "Document the journey — milestones, setbacks, weights, days on oxygen. This journal becomes the record of your child's fight and your family's resilience. It also provides a way to process the experience in real time and gives the child a story of their beginning.",
  },
  {
    icon: "🤝",
    title: "Connect with NICU Parent Support Groups",
    text: "Hand to Hold (handtohold.org), Graham's Foundation (grahamsfoundation.org), and March of Dimes (marchofdimes.org) all offer peer support programs for NICU and premature birth families. Speaking with parents who have been in the NICU breaks the isolation.",
  },
  {
    icon: "💬",
    title: "Tell Your Church What You Actually Need",
    text: "Churches want to help but often do not know how. Be specific: meals on specific days, childcare for siblings, hospital parking funds, someone to answer calls when you cannot. A designated point person who coordinates church support significantly reduces the emotional labor on NICU families.",
  },
  {
    icon: "🧠",
    title: "Watch for NICU PTSD",
    text: "Post-traumatic stress in NICU parents is well-documented — up to 40% of NICU parents meet PTSD criteria. Symptoms include intrusive memories, hypervigilance, sleep disruption, and emotional numbness. If these persist after discharge, seek a trauma-informed therapist.",
  },
  {
    icon: "✝️",
    title: "Receive Chaplaincy Care",
    text: "Most level III NICUs have chaplains who are trained to sit with parents through uncertainty, grief, and fear. Chaplains are not there to offer answers — they are trained to offer presence. Request chaplaincy care. You do not have to manage the spiritual dimension of this alone.",
  },
];

const scriptures = [
  { verse: "Isaiah 49:15–16", text: "\"Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you! See, I have engraved you on the palms of my hands.\"" },
  { verse: "Psalm 22:9–10", text: "\"Yet you brought me out of the womb; you made me trust in you, even at my mother's breast. From birth I was cast on you; from my mother's womb you have been my God.\"" },
  { verse: "Matthew 18:10", text: "\"See that you do not despise one of these little ones. For I tell you that their angels in heaven always see the face of my Father in heaven.\"" },
  { verse: "Romans 8:26", text: "\"In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.\"" },
  { verse: "Psalm 27:13–14", text: "\"I remain confident of this: I will see the goodness of the LORD in the land of the living. Wait for the LORD; be strong and take heart and wait for the LORD.\"" },
  { verse: "Philippians 4:7", text: "\"And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.\"" },
];

type NicuEntry = {
  id: string;
  date: string;
  today: string;
  milestone: string;
  prayer: string;
};

export default function PrematureBirthNicuPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<NicuEntry[]>([]);
  const [today, setToday] = useState("");
  const [milestone, setMilestone] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_prematurebirthnicufamily_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!today.trim()) return;
    const entry: NicuEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      today,
      milestone,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_prematurebirthnicufamily_entries", JSON.stringify(updated));
    setToday(""); setMilestone(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_prematurebirthnicufamily_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>👶</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>
            Premature Birth, NICU & Christian Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For families in the NICU or processing their premature birth experience — pastoral care that honors the grief, the fear, and the love simultaneously, and practical support for one of the most disorienting journeys a family can walk.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Support: <strong>988 Suicide & Crisis Lifeline</strong> | <strong>Hand to Hold:</strong> handtohold.org | <strong>March of Dimes:</strong> 1-888-663-4637 | <strong>Graham&apos;s Foundation:</strong> grahamsfoundation.org
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
              <h3 style={{ color: PURPLE, marginBottom: "1rem", fontWeight: "bold" }}>NICU Journal</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>How is my baby today? How am I today?</label>
                <textarea value={today} onChange={e => setToday(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A milestone, moment, or detail I want to remember from today:</label>
                <textarea value={milestone} onChange={e => setMilestone(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer for my baby, for my family, for the medical team:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.today && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Today:</strong> {e.today}</p>}
                {e.milestone && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Milestone:</strong> {e.milestone}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="4K5R4a6K5q8" title="NICU Parent Mental Health — What to Expect and How to Cope" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>NICU Parent Mental Health: What to Expect and How to Cope</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Clinical overview of the psychological experience of NICU parenthood, including PTSD, grief, and the bonding challenges of the NICU</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="j2h-q3ZPKFI" title="Where Is God in the NICU? — Pastoral Reflection" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Where Is God in the NICU? Pastoral Reflection for NICU Families</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Theological reflection on God's presence in the specific context of the NICU — uncertainty, machines, and love</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="oNpTha80yyE" title="Kangaroo Care — The Power of Skin-to-Skin for Premature Babies" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Kangaroo Care: The Science of Skin-to-Skin Contact for Premature Babies</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Evidence-based overview of kangaroo care and its documented benefits for premature baby development and parent bonding</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="NnGBhG03g4M" title="How the Church Can Support NICU Families" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>How the Church Can Support Families Through the NICU Journey</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Practical guidance for faith communities on providing sustained, appropriate support to families in the NICU</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
