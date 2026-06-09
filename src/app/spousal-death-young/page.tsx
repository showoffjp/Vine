"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "A God Who Knows This Specific Grief",
    verse: "Luke 7:12-13",
    text: "When Jesus encountered the widow of Nain, he did not wait to be asked. He saw her grief — a widow with a dead son, the double loss of husband and child — and acted. His first recorded emotion is compassion. He stops the funeral procession. He already knew what it was to see a widow carrying more than one loss at once."
  },
  {
    title: "The Children Will Be Carried",
    verse: "Isaiah 49:15",
    text: "Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you. When you grieve a spouse and parent your children through it simultaneously, God has not stopped attending to your children. The promise extends to them."
  },
  {
    title: "You Are Permitted to Be Undone",
    verse: "Psalm 6:6-7",
    text: "I am weary with my moaning; every night I flood my bed with tears. My eye wastes away because of grief. This is the Bible's language for grief — not composure, not holding it together for the children. The Psalms give you permission to be utterly undone while still addressing God."
  },
  {
    title: "God Is a Father to the Fatherless",
    verse: "Psalm 68:5",
    text: "Father of the fatherless and protector of widows is God in his holy habitation. This is not a metaphor. It is a covenant commitment. God specifically identifies widows and orphaned children as those under his particular care. He is not absent from your children's loss."
  },
  {
    title: "Grief Does Not Mean Weak Faith",
    verse: "John 11:35",
    text: "Jesus wept. He knew Lazarus would rise. He wept anyway. He did not skip the grief because he had the answer. Grief is not the failure of faith — it is the honest response of love to loss. Weeping is not a sign that you believe too little. It is a sign that you loved well."
  }
];

const voices = [
  {
    id: "v1",
    name: "Jerry Sittser",
    role: "Author, A Grace Disguised; Professor of Theology",
    quote: "The quickest way for anyone to reach the sun and the light of day is not to run west, chasing the setting sun, but to head east, plunging into the darkness until one comes to the sunrise.",
    bio: "Jerry Sittser lost his mother, wife, and young daughter in a single car accident. His A Grace Disguised is the most rigorous and honest Christian treatment of catastrophic grief available. He writes for those who know loss is not survivable in the ordinary sense — and still find God on the other side."
  },
  {
    id: "v2",
    name: "Megan Devine",
    role: "Therapist; Author, It's OK That You're Not OK",
    quote: "Some things cannot be fixed. They can only be carried. The goal of grief is not to get over it — it is to learn to carry what cannot be put down.",
    bio: "Megan Devine lost her partner suddenly and became a grief therapist from the inside of catastrophic loss. She writes against the cultural insistence that grief should resolve, and for the bereaved who feel betrayed by healing timelines that don't match their reality."
  },
  {
    id: "v3",
    name: "Hope Edelman",
    role: "Author, Motherless Daughters and The AfterGrief",
    quote: "Grief does not end — it changes shape. What we call 'getting over it' is actually learning to integrate the loss into the ongoing story of who we are.",
    bio: "Hope Edelman's research and writing on long-term grief is especially relevant for young parents whose children will grow up shaped by the parent they lost. She validates grief that does not follow a timeline."
  },
  {
    id: "v4",
    name: "Joni Eareckson Tada",
    role: "Author, theologian; Joni and Friends",
    quote: "Suffering is never for nothing. I don't say that easily. I say it from the inside of decades of unresolved pain. But God wastes nothing — not even the worst thing.",
    bio: "Joni speaks to the young parent facing loss with particular authority, because she knows what it is to live in a body and a life you did not choose, and to find that God is genuinely present in it."
  }
];

const practices = [
  {
    icon: "🧒",
    title: "Let the Children Grieve Honestly",
    text: "Children need honest, age-appropriate information. Do not tell them Daddy is 'sleeping' or Mommy 'went away.' Use the words died and death. Children's grief is real and is not helped by protective distortion. Books like The Invisible String help children hold both death and connection."
  },
  {
    icon: "🤝",
    title: "Accept Practical Help Without Guilt",
    text: "Meals, childcare, lawn care, finances — every offer of help that is accepted is not weakness. You are doing something nobody is designed to do alone. The community around you has a God-given role in this season. Receiving is not a burden you place on others; it is how the body of Christ functions."
  },
  {
    icon: "🧠",
    title: "Find a Grief-Informed Therapist",
    text: "Young widowhood with children is a specific trauma presentation. Find a therapist who understands complicated grief — not just a general counselor. Organizations like Soaring Spirits (soaringspirits.org) connect young widows and widowers specifically."
  },
  {
    icon: "📅",
    title: "Mark Anniversaries and Hard Dates Intentionally",
    text: "Birthdays, holidays, the anniversary of the death — these days do not need to be dreaded in silence. Create family rituals around remembering: a candle, a meal they loved, stories told. Memory rituals let children integrate loss rather than avoid it."
  },
  {
    icon: "💰",
    title: "Address Financial Reality Quickly",
    text: "Young widows and widowers often face financial crises within weeks. A financial advisor, a church deacon fund, or a widow-specific organization (Widow's Might, widowsmight.org) can help navigate immediate decisions without predatory actors."
  },
  {
    icon: "⛪",
    title: "Find a Community That Stays",
    text: "Many communities rush to support in the first weeks and disappear. Six months and two years out, the grief is often harder. Seek a grief community — GriefShare, Soaring Spirits, a church that takes long-term discipleship seriously — that stays in the story."
  }
];

const scriptures = [
  { verse: "Psalm 68:5", text: "Father of the fatherless and protector of widows is God in his holy habitation." },
  { verse: "John 11:35", text: "Jesus wept." },
  { verse: "Psalm 6:6-7", text: "I am weary with my moaning; every night I flood my bed with tears; I drench my couch with my weeping. My eye wastes away because of grief." },
  { verse: "Isaiah 49:15", text: "Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you!" },
  { verse: "Lamentations 3:32-33", text: "Though he brings grief, he will show compassion, so great is his unfailing love. For he does not willingly bring affliction or grief to anyone." },
  { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." }
];

type WidowEntry = { id: string; date: string; memory: string; hard: string; need: string };

export default function SpouslDeathYoungPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<WidowEntry[]>([]);
  const [memory, setMemory] = useState("");
  const [hard, setHard] = useState("");
  const [need, setNeed] = useState("");
  const [expandedVoice, setExpandedVoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_spousaldeath_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!memory.trim()) return;
    const entry: WidowEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), memory, hard, need };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_spousaldeath_entries", JSON.stringify(updated));
    setMemory(""); setHard(""); setNeed("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_spousaldeath_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, padding: "2rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ color: GREEN, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.5rem" }}>Grief & Loss</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.2 }}>Young Spousal Loss</h1>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: 600 }}>
            When you lose your spouse too soon — and you still have children to raise, a home to run, a future that no longer looks like what you planned. When grief and parenthood crash into each other every single day. God does not look away from this.
          </p>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${GREEN}` : "2px solid transparent", color: tab === t ? GREEN : MUTED, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize", whiteSpace: "nowrap", fontFamily: "Georgia, serif" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>

        {tab === "theology" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Theological foundations for a grief that is both yours and your children's — and that God meets at both levels.</p>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontStyle: "italic", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Those who have written from inside catastrophic grief and from decades of walking alongside it.</p>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "0.75rem" }}>"{v.quote}"</p>
                <button onClick={() => setExpandedVoice(expandedVoice === v.id ? null : v.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.4rem 0.75rem", borderRadius: 4, cursor: "pointer", fontSize: "0.8rem" }}>{expandedVoice === v.id ? "Less" : "More"}</button>
                {expandedVoice === v.id && <p style={{ color: MUTED, lineHeight: 1.7, marginTop: "0.75rem" }}>{v.bio}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Practical and spiritual guidance for surviving and parenting in the wake of spousal death.</p>
            <div style={{ background: "#1a0d0d", border: "1px solid #5a2020", borderRadius: 8, padding: "1.25rem", marginBottom: "2rem" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "0.5rem" }}>Crisis Resources</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: TEXT }}>988 Suicide &amp; Crisis Lifeline</strong> — grief can bring suicidal thoughts; please reach out.<br />
                GriefShare: <strong style={{ color: TEXT }}>griefshare.org</strong><br />
                Soaring Spirits (young widow/widower community): <strong style={{ color: TEXT }}>soaringspirits.org</strong><br />
                Widow's Might (financial): <strong style={{ color: TEXT }}>widowsmight.org</strong>
              </p>
            </div>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Verses for the young widow or widower who is grieving, parenting, and wondering where God is in all of it.</p>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${GREEN}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>A private space to carry the grief that has no easy home. Entries stay on your device only.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.25rem", color: GREEN }}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>A memory of them I'm holding today</label>
                <textarea value={memory} onChange={e => setMemory(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What is hardest today — for me, or for my children?</label>
                <textarea value={hard} onChange={e => setHard(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What do I need from God right now?</label>
                <textarea value={need} onChange={e => setNeed(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: 700 }}>Save Entry</button>
            </div>
            {entries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", fontStyle: "italic" }}>No entries yet. Your reflections will appear here.</p>
            ) : (
              entries.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "1rem" }}>{e.date}</div>
                  {e.memory && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>MEMORY</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.memory}</p></div>}
                  {e.hard && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>HARDEST</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.hard}</p></div>}
                  {e.need && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>NEED</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.need}</p></div>}
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer", fontSize: "0.75rem", marginTop: "0.5rem" }}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Teaching and testimony on grief, widowhood, and raising children through loss.</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>A Grace Disguised: Jerry Sittser on Catastrophic Loss</div>
              <VideoEmbed videoId="SqGRnlXplx0" title="A Grace Disguised: Jerry Sittser on Catastrophic Loss" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Grief That Has No Timeline: Megan Devine</div>
              <VideoEmbed videoId="oNpTha80yyE" title="Grief That Has No Timeline: Megan Devine" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>God and Grief: When Loss Comes Too Soon</div>
              <VideoEmbed videoId="4Eg_di-O8nM" title="God and Grief: When Loss Comes Too Soon" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>The Weight of Loss: Finding God in the Dark</div>
              <VideoEmbed videoId="7TBHqMqBmBo" title="The Weight of Loss: Finding God in the Dark" />
            </div>
          </div>
        )}

      </div>
    </div>
      <Footer />
    </>
  );
}
