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
    title: "Honor Does Not Require Agreement",
    verse: "Exodus 20:12",
    text: "'Honor your father and your mother.' This command is among the most misapplied in Christian pastoral care for adult caregivers. Honoring an aging parent does not mean agreeing with every decision, providing unlimited self-sacrifice, or pretending all is well. Honor is a posture of dignity and respect that can coexist with limits, frustration, and grief.",
  },
  {
    title: "The Role Reversal as Sacred Work",
    verse: "Isaiah 46:4",
    text: "'Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you.' God's commitment to sustain his people through old age is the model for adult children who now carry parents who once carried them. The reversal is not just cultural — it is theological.",
  },
  {
    title: "The Grief No One Names",
    verse: "Lamentations 1:12",
    text: "'Is it nothing to you, all you who pass by? Look around and see. Is any suffering like my suffering?' The grief of watching a parent decline — their personality altered by dementia, their independence stripped by illness — is profound and largely invisible. Naming it as grief rather than duty gives it its proper weight and opens it to God's presence.",
  },
  {
    title: "Limits Are Not Sin",
    verse: "Mark 6:31",
    text: "'Come with me by yourselves to a quiet place and get some rest.' Jesus gave his disciples permission to withdraw, rest, and not meet every demand. The adult caregiver who is depleted is not failing their parent — they are being required, by exhaustion, to do what Jesus modeled: seek rest.",
  },
  {
    title: "The Gift of Presence",
    verse: "Romans 12:15",
    text: "'Mourn with those who mourn.' What aging parents often need most is not a solution to their decline but a presence in it. The adult child who can sit with a parent's grief — about loss of independence, loss of peers, loss of the self they were — is offering the ministry of presence that Paul identifies as essential to the body of Christ.",
  },
];

const voices = [
  {
    id: 1,
    name: "Amy Julia Becker",
    role: "Author & Family Caregiver Advocate",
    quote: "The invitation in caregiving is not to become a martyr but to become present — to discover what love looks like when it costs something.",
    bio: "Amy Julia Becker writes at the intersection of disability, family, and faith. Her reflections on caregiving emphasize the spiritual formation that happens for the caregiver — not as compensation for suffering, but as genuine encounter with God through the weakness of those we love.",
  },
  {
    id: 2,
    name: "Amy Florian",
    role: "Grief Educator & Author",
    quote: "When your parent no longer remembers your name, you are grieving someone who is still alive. That grief has its own name: ambiguous loss.",
    bio: "Amy Florian specializes in ambiguous grief — the grief of people who lose someone to dementia or chronic decline. Her framework helps adult children name their experience and find community rather than silence in the invisible grief of parental decline.",
  },
  {
    id: 3,
    name: "Pauline Boss",
    role: "Researcher & Author, Ambiguous Loss",
    quote: "Ambiguous loss is the most difficult kind of loss — because you cannot mourn what is not yet gone, and you cannot move on because the person is still there.",
    bio: "Pauline Boss coined the term 'ambiguous loss' and her research has provided language for millions of caregivers whose loved ones are present in body but absent in personality, memory, or capacity. Her work is not explicitly Christian but has been widely integrated by Christian caregiving communities.",
  },
  {
    id: 4,
    name: "Henri Nouwen",
    role: "Author, Can You Drink the Cup?",
    quote: "The mystery of ministry is that we are called to find the burning bush, the holy ground, the place where God speaks — often in the face of the one we are serving.",
    bio: "Henri Nouwen, who served profoundly disabled adults at L'Arche communities, understood care as a mutual encounter. His insight — that caregivers often receive as much as they give — opens adult children to the unexpected gifts that come through serving aging parents.",
  },
];

const practices = [
  {
    icon: "🗺️",
    title: "Clarify Your Role and Its Limits",
    text: "Have an honest conversation — with yourself, your spouse, your siblings — about what you can and cannot provide. Unrealistic expectations (that you can be there constantly, that you can manage everything, that you will not burn out) harm both you and your parent. Naming your real limits is wisdom, not failure.",
  },
  {
    icon: "🤝",
    title: "Build a Care Team, Not a Solo Operation",
    text: "Caring for an aging parent is not a solo task. Identify what siblings, neighbors, church members, and paid professionals can contribute. Contact your local Area Agency on Aging (eldercare.acl.gov) to learn what services exist. You are not giving up by accepting help — you are sustaining yourself for the long term.",
  },
  {
    icon: "🌿",
    title: "Name Your Grief, Do Not Manage It",
    text: "The grief of watching a parent decline is real and deserves its own name — not just stress or exhaustion. Find a counselor or support group where you can speak honestly about both love and resentment, grief and frustration. Both can be true simultaneously.",
  },
  {
    icon: "📖",
    title: "Sabbath From Caregiving",
    text: "Schedule regular Sabbath time from caregiving — time when someone else is responsible, when you do not answer calls about your parent, when you are simply yourself. This is not abandonment. It is the rhythm of rest that makes sustained care possible.",
  },
  {
    icon: "🙏",
    title: "Pray the Examen for Caregivers",
    text: "Each evening: Where did I experience God today in caring for my parent? Where did I notice frustration, tenderness, or grief? What do I need to release before tomorrow? This brief review keeps the spiritual interior of caregiving alive and resists the reduction of it to pure task management.",
  },
  {
    icon: "📞",
    title: "Have the Conversations Before You Must",
    text: "While your parent can still participate: discuss their wishes for medical care, housing, finances, and legacy. These conversations are difficult — but forcing them when crisis hits is far more traumatic. Advance directives, healthcare proxies, and honest conversation now are gifts to everyone.",
  },
];

const scriptures = [
  { verse: "Exodus 20:12", text: "Honor your father and your mother, so that you may live long in the land the Lord your God is giving you." },
  { verse: "Isaiah 46:4", text: "Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you." },
  { verse: "1 Timothy 5:8", text: "Anyone who does not provide for their relatives, and especially for their own household, has denied the faith and is worse than an unbeliever." },
  { verse: "Galatians 6:9", text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up." },
  { verse: "Mark 6:31", text: "Then, because so many people were coming and going that they did not even have a chance to eat, he said to them, 'Come with me by yourselves to a quiet place and get some rest.'" },
  { verse: "Romans 12:15", text: "Rejoice with those who rejoice; mourn with those who mourn." },
];

type ACEntry = { id: string; date: string; hard: string; received: string; prayer: string };

export default function AdultChildAgingParentReversalPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ACEntry[]>([]);
  const [hard, setHard] = useState("");
  const [received, setReceived] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_adultchildagingparentj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!hard.trim() && !received.trim() && !prayer.trim()) return;
    const entry: ACEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      hard: hard.trim(),
      received: received.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_adultchildagingparentj_entries", JSON.stringify(updated));
    setHard(""); setReceived(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_adultchildagingparentj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>👴</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Caring for Aging Parents
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For adult children navigating the role reversal of caring for aging parents — honoring
            without losing yourself, grieving the invisible losses, and finding God in the work.
          </p>
        </div>

        <div style={{ background: "#0a0a1a", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: MUTED, fontWeight: "bold", margin: "0 0 0.5rem" }}>Caregiver support resources:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            988 Lifeline — call or text <strong style={{ color: TEXT }}>988</strong> |{" "}
            <a href="https://eldercare.acl.gov" style={{ color: PURPLE }}>eldercare.acl.gov</a> |{" "}
            <a href="https://www.caregiver.org" style={{ color: PURPLE }}>caregiver.org</a> |{" "}
            Crisis Text Line: text <strong style={{ color: TEXT }}>HOME</strong> to <strong style={{ color: TEXT }}>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 6, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : CARD, color: TEXT, cursor: "pointer", fontSize: "0.875rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.25rem" }}>{v.name}</h3>
                <div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic" }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ color: TEXT, fontSize: "1rem", margin: "0 0 0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, margin: 0, lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, margin: "0 0 1rem" }}>Today&apos;s Reflection</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What is hardest about caregiving right now?</label>
              <textarea value={hard} onChange={(e) => setHard(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What have you received — unexpectedly — through this season?</label>
              <textarea value={received} onChange={(e) => setReceived(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer for your parent and for yourself today:</label>
              <textarea value={prayer} onChange={(e) => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>
                {saved ? "Saved" : "Save Entry"}
              </button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {entries.map((e) => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                      <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                      <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                    </div>
                    {e.hard && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Hard: </span>{e.hard}</p>}
                    {e.received && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Received: </span>{e.received}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="jJPVNIAFmvA" title="Caring for Aging Parents — Faith and Family" />
            <VideoEmbed videoId="NnGBhG03g4M" title="Honor Your Father and Mother — A Theology of Caregiving" />
            <VideoEmbed videoId="oNpTha80yyE" title="The Grief of Watching a Parent Decline" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Prayer for Caregivers and Their Parents" />
          </div>
        )}
      </div>
    </div>
  );
}
