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
    title: "The Calling Is Real — So Is the Cost",
    verse: "James 1:27",
    text: "\"Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress and to keep oneself from being polluted by the world.\" Foster care is among the clearest embodiments of this text. But the calling to look after vulnerable children does not come with immunity to exhaustion, grief, or compassion fatigue. The cost is real and must be named, not spiritualized away.",
  },
  {
    title: "Secondary Trauma Is a Real Wound",
    verse: "Numbers 11:14–15",
    text: "\"I cannot carry all these people by myself; the burden is too heavy for me. If this is how you are going to treat me, please go ahead and kill me — if I have found favor in your eyes — and do not let me face my own ruin.\" Moses's collapse under the weight of others' suffering is one of the most honest moments of burnout in Scripture. Compassion fatigue and secondary trauma are not signs of weak faith — they are signs that you have been carrying real weight.",
  },
  {
    title: "God Does Not Ask You to Rescue Children Alone",
    verse: "Exodus 18:17–18",
    text: "\"Jethro said to Moses, 'What you are doing is not good. You and these people who come to you will only wear yourselves out. The work is too heavy for you; you cannot handle it alone.'\" Jethro's counsel to Moses is pastoral wisdom for foster families: the work of caring for vulnerable people is never meant to fall on one household alone. Foster care requires community, not just individual calling.",
  },
  {
    title: "Grief at a Child Leaving Is Not a Sign of Failure",
    verse: "John 11:35",
    text: "\"Jesus wept.\" The grief of a foster parent at reunification — loving a child who leaves, over and over — is legitimate grief. It does not mean you failed. It means you loved. A church that does not make space for this particular grief has not understood what foster care costs.",
  },
  {
    title: "The Work Matters Even When It Feels Invisible",
    verse: "Matthew 25:40",
    text: "\"The King will reply, 'Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.'\" Foster families often work in profound invisibility — absorbing behaviors that are misunderstood, navigating systems that are indifferent, loving children who may never say thank you. Jesus saw this work before you began it.",
  },
];

const voices = [
  {
    id: 1,
    name: "Dr. John DeGarmo",
    role: "Foster Care Author, Advocate, and Licensed Foster Parent",
    quote: "Foster parenting is not for the faint of heart, and the church must understand that supporting foster families is not optional — it is the gospel in action.",
    bio: "DeGarmo has fostered more than 50 children over two decades and written extensively on the emotional and spiritual challenges of long-term foster parenting and system navigation.",
  },
  {
    id: 2,
    name: "Jason Johnson",
    role: "Author, ReFraming Foster Care; Founder, Everyone Can Do Something",
    quote: "The church is the most natural community on earth to care for children without families — because the church is itself a family formed around adoption.",
    bio: "Johnson's work has mobilized thousands of churches to build foster care support systems that go beyond family placement to build entire communities of care around foster families.",
  },
  {
    id: 3,
    name: "Dr. Karyn Purvis",
    role: "Author of The Connected Child; Trust-Based Relational Intervention Founder",
    quote: "Children from hard places have experienced harm in relationship, and they can only be healed in relationship. This is deeply Christian work.",
    bio: "Purvis's research on Trust-Based Relational Intervention (TBRI) transformed how foster and adoptive parents understand trauma-responsive parenting, especially for children from difficult backgrounds.",
  },
  {
    id: 4,
    name: "Herbie Newell",
    role: "President, Lifeline Children's Services",
    quote: "Orphan care is not a special calling for special Christians. It is the church's vocation — lived out differently by different members, but owned by the whole body.",
    bio: "Newell has led one of the largest Christian foster and adoption agencies and consistently pushed the church toward a communal rather than individual model of care for vulnerable children.",
  },
];

const practices = [
  {
    icon: "🤝",
    title: "Build a Care Team Before You Need One",
    text: "Every foster family needs a dedicated care team of at least 6–8 people who rotate practical support: meals, respite childcare, grocery runs, school pickup. Form this team before placement — not in crisis.",
  },
  {
    icon: "🛌",
    title: "Take Respite Regularly",
    text: "Scheduled respite — planned breaks with certified respite caregivers — is not abandoning a child. It is sustainable caregiving. Families who do not take regular respite burn out and disrupt placements, which is worse for the child.",
  },
  {
    icon: "🧠",
    title: "Get Trauma-Informed Yourself",
    text: "Read The Connected Child or complete TBRI training online. Understanding why a child from a hard place behaves as they do transforms frustration into compassion — and compassion is sustainable in ways frustration is not.",
  },
  {
    icon: "💬",
    title: "Find Peer Support from Other Foster Families",
    text: "Other foster families understand what others cannot. Join a local foster family support group, a faith-based foster care network, or an online community. Isolation is the primary accelerant of foster care burnout.",
  },
  {
    icon: "📞",
    title: "Know Your Caseworker Escalation Path",
    text: "Document every contact, concern, and incident. Know the supervisor above your caseworker. Know your state's foster parent rights. Systems can fail children — informed, documented foster parents catch more failures and navigate more effectively.",
  },
  {
    icon: "⛪",
    title: "Ask Your Church for Structural Support",
    text: "Ask your church to formally organize its foster care support — not just meals in a crisis. This means organized respite, a foster care liaison, financial help for legal costs, and trained volunteers who understand trauma.",
  },
];

const scriptures = [
  { verse: "Psalm 68:5–6", text: "\"A father to the fatherless, a defender of widows, is God in his holy dwelling. God sets the lonely in families.\"" },
  { verse: "Isaiah 49:15", text: "\"Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you!\"" },
  { verse: "Deuteronomy 10:18", text: "\"He defends the cause of the fatherless and the widow, and loves the foreigner residing among you, giving them food and clothing.\"" },
  { verse: "Galatians 6:9", text: "\"Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.\"" },
  { verse: "Matthew 18:5", text: "\"And whoever welcomes one such child in my name welcomes me.\"" },
  { verse: "Romans 8:15", text: "\"The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship. And by him we cry, 'Abba, Father.'\"" },
];

type FosterEntry = {
  id: string;
  date: string;
  carrying: string;
  need: string;
  prayer: string;
};

export default function FosterCareBurnoutPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<FosterEntry[]>([]);
  const [carrying, setCarrying] = useState("");
  const [need, setNeed] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_fostercareburnout_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!carrying.trim()) return;
    const entry: FosterEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      carrying,
      need,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_fostercareburnout_entries", JSON.stringify(updated));
    setCarrying(""); setNeed(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_fostercareburnout_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🏠</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>
            Foster Care Burnout & Christian Calling
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For foster families navigating compassion fatigue, secondary trauma, grief at transitions, and the weight of a calling that the church often celebrates but rarely supports concretely.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Support: <strong>988 Suicide & Crisis Lifeline</strong> — call or text 988 | <strong>National Foster Parent Association:</strong> nfpaonline.org | <strong>Foster Care Alumni:</strong> fostercarealumni.org
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
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What weight am I carrying in the foster care work right now?</label>
                <textarea value={carrying} onChange={e => setCarrying(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What specific support do I need from my community or church?</label>
                <textarea value={need} onChange={e => setNeed(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer for the child, for yourself, for the work:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.carrying && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Carrying:</strong> {e.carrying}</p>}
                {e.need && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Need:</strong> {e.need}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="ZHvH4bkSJ0Q" title="The Connected Child — Understanding Children from Hard Places" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>The Connected Child: TBRI and Trauma-Informed Parenting</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Dr. Karyn Purvis on understanding and connecting with children from hard places</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="9EFpBDVDDkM" title="Foster Care Burnout and How Churches Can Help" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Foster Care Burnout: What the Church Needs to Know</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Practical guidance on recognizing and preventing burnout in foster families</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="nXgJsLNAzGE" title="ReFraming Foster Care — Jason Johnson" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>ReFraming Foster Care — The Church as a Family of Families</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Jason Johnson on how churches can build sustainable systems of support around foster families</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="YZQJJ8MnCLM" title="Grief at Foster Child Transition — Pastoral Care for Foster Families" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Grieving the Child Who Left: Pastoral Care for Foster Families</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>How churches can support foster families through the grief of reunification and transitions</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
