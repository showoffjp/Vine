"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Commandment in Reverse",
    verse: "Exodus 20:12",
    text: "\"Honor your father and mother.\" No one told you this would mean becoming their parent. The role reversal — where the one who raised you now needs you to manage their finances, drive them to doctors, and handle their confusion — is one of the most disorienting experiences in adult life. Honoring parents does not disappear when the parent can no longer care for themselves. It transforms."
  },
  {
    title: "Grief That Has No Name",
    verse: "Lamentations 1:16",
    text: "\"For these things I weep; my eyes flow with tears; for a comforter is far from me.\" Watching a parent's mind or body fail is a grief that has no clean name — anticipatory grief, ambiguous loss, pre-mourning. You are losing someone who is still alive. The person who comforted you is gone in the ways that mattered most, even if they still sit at your table. This grief is real and it deserves to be named."
  },
  {
    title: "God Does Not Ask the Impossible",
    verse: "2 Corinthians 8:12",
    text: "\"For if the readiness is there, it is acceptable according to what a person has, not according to what he does not have.\" You are not expected to do more than you can. The Christian call to honor parents does not require you to martyr your own health, marriage, finances, and sanity. Sustainable care is better than exhausted care. Asking for help, paying for professional care, and setting limits are not betrayals of love — they are conditions for it."
  },
  {
    title: "Jesus and His Mother",
    verse: "John 19:26-27",
    text: "\"When Jesus therefore saw his mother, and the disciple standing by whom he loved, he said to his mother, 'Woman, behold your son!' Then he said to the disciple, 'Behold your mother!' And from that hour that disciple took her to his own home.\" Even from the cross, Jesus arranged care for his mother — and gave that care to another. He did not insist that care come only from blood. There is no dishonor in arranging care through others."
  },
  {
    title: "The Ministry of Presence",
    verse: "Romans 12:15",
    text: "\"Rejoice with those who rejoice, weep with those who weep.\" When cure is not possible — when dementia advances, when the body fails — presence is the gift. Not fixing, not managing, not problem-solving. Sitting. Holding a hand. Singing an old hymn. Telling the same story for the fortieth time with patience. This is not passive — it is one of the most demanding forms of love."
  }
];

const voices = [
  {
    id: "v1", name: "Amy Goyer", role: "AARP Family and Caregiving Expert",
    quote: "Caregiving is not a sprint; it's a marathon that most families stumble into unprepared. The families who do best are those who get help early and build a team.",
    bio: "Amy Goyer has written extensively about long-distance caregiving and the emotional complexity of caring for aging parents, including her own experience caring for both parents simultaneously. Her book 'Juggling Life, Work, and Caregiving' is a practical guide for adult children caught in the middle."
  },
  {
    id: "v2", name: "Paula Span", role: "New York Times 'The New Old Age' Columnist",
    quote: "The families who navigate elder care most successfully are those who have the hard conversations before the crisis — not during it.",
    bio: "Paula Span covers aging, elder care, and family dynamics for the New York Times. Her reporting on the emotional, financial, and relational complexity of caring for aging parents is essential reading for adult children navigating role reversal."
  },
  {
    id: "v3", name: "Joni Tada", role: "Founder, Joni and Friends; Disability Advocate",
    quote: "Suffering — and watching those we love suffer — is one of the places where faith either deepens into something real or evaporates into something decorative.",
    bio: "Joni Tada, who has lived with quadriplegia since age 17, brings a perspective on dependency, dignity, and care that few can equal. Her work with families navigating disability and aging challenges both caregivers and care recipients to find meaning in suffering."
  },
  {
    id: "v4", name: "Gary Thomas", role: "Author, 'A Lifelong Love' and 'Sacred Marriage'",
    quote: "Every person made in God's image retains their dignity, regardless of what they can no longer do. Caregiving is one of the places we practice seeing the imago Dei in its most vulnerable form.",
    bio: "Gary Thomas writes about the spirituality of difficult relationships and commitments. His understanding of love as an act of will and a spiritual discipline — not merely a feeling — applies powerfully to the demands of elder care and the love required when it is no longer reciprocated in familiar ways."
  }
];

const practices = [
  {
    icon: "📋",
    title: "Legal and Financial Clarity First",
    text: "Before any health crisis: power of attorney (financial and medical), healthcare directives, updated will. These conversations feel premature until they are desperately urgent. Address them in calm moments. A elder law attorney can guide you through what's needed in your state."
  },
  {
    icon: "👥",
    title: "Build a Care Team — Don't Go Alone",
    text: "No one person should carry elder care alone. Identify siblings, extended family, neighbors, church members who can take specific tasks. Meal delivery, transportation, weekly calls, financial oversight — divide responsibilities explicitly. What is everyone's responsibility becomes no one's responsibility."
  },
  {
    icon: "🏥",
    title: "Know the Options Before You Need Them",
    text: "Home care agencies, adult day programs, assisted living, memory care, skilled nursing — know what exists in your area and what costs what before a crisis forces a rushed decision. AARP, your local Area Agency on Aging, and your parent's physician can all provide guidance."
  },
  {
    icon: "💬",
    title: "Name the Grief Out Loud",
    text: "Ambiguous loss — grieving someone who is still alive — is disorienting in part because it is invisible. Find a therapist, support group, or trusted person who can witness this grief without trying to fix it. Caregiver support groups (AARP, Alzheimer's Association, etc.) connect you with others who understand."
  },
  {
    icon: "✝️",
    title: "Bring Faith Into the Room",
    text: "If your parent is a believer, bring faith into visits: read a Psalm aloud, play hymns, pray out loud even if they cannot respond. Even in advanced dementia, familiar hymns and prayers often reach deeper than words. This is both ministry and connection."
  },
  {
    icon: "📿",
    title: "Maintain Your Own Spiritual Practice",
    text: "Caregivers who neglect their own spiritual and physical health become depleted and eventually resentful. Protect your own prayer time, community, and sabbath. You cannot give sustainably from an empty well. Receiving care is also a spiritual act."
  }
];

const scriptures = [
  { verse: "Exodus 20:12", text: "Honor your father and your mother, that your days may be long in the land that the Lord your God is giving you." },
  { verse: "Lamentations 1:16", text: "For these things I weep; my eyes flow with tears; for a comforter is far from me, one to revive my spirit." },
  { verse: "2 Corinthians 8:12", text: "For if the readiness is there, it is acceptable according to what a person has, not according to what he does not have." },
  { verse: "John 19:26-27", text: "When Jesus saw his mother and the disciple whom he loved standing nearby, he said to his mother, 'Woman, behold your son!' Then he said to the disciple, 'Behold your mother!' And from that hour the disciple took her to his own home." },
  { verse: "Romans 12:15", text: "Rejoice with those who rejoice, weep with those who weep." },
  { verse: "Isaiah 46:4", text: "Even to your old age I am he, and to gray hairs I will carry you. I have made, and I will bear; I will carry and will save." }
];

type EpEntry = { id: string; date: string; loss: string; care: string; release: string };

export default function ElderParentRoleReversalPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<EpEntry[]>([]);
  const [loss, setLoss] = useState("");
  const [care, setCare] = useState("");
  const [release, setRelease] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_elderrolereversal_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!loss.trim()) return;
    const entry: EpEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), loss, care, release };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_elderrolereversal_entries", JSON.stringify(updated));
    setLoss(""); setCare(""); setRelease("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_elderrolereversal_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>👴</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>Caring for an Aging Parent</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            When the one who raised you now needs you to parent them. When strength fades, roles reverse, and love asks more of you than you thought you had.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Support:</strong> 988 Suicide &amp; Crisis Lifeline (call/text 988) &bull; Eldercare Locator: 1-800-677-1116 &bull; AARP Caregiving: aarp.org/caregiving &bull; Alzheimer&apos;s Association: alz.org &bull; Crisis Text: 741741
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`,
              background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED,
              cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize"
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ fontSize: "1rem", fontWeight: "bold", color: TEXT }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", margin: "0 0 0.75rem" }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.8rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem", color: TEXT }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: TEXT }}>Caregiver Reflection Journal</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What am I grieving about who my parent used to be?</label>
                  <textarea value={loss} onChange={e => setLoss(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What does honoring them look like today?</label>
                  <textarea value={care} onChange={e => setCare(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What am I releasing to God — including what I cannot fix?</label>
                  <textarea value={release} onChange={e => setRelease(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold", alignSelf: "flex-start" }}>
                  {saved ? "Saved" : "Save Entry"}
                </button>
              </div>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.5rem" }}>{e.date}</div>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "1rem" }}>×</button>
                </div>
                {e.loss && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.25rem" }}><strong>Grief:</strong> {e.loss}</p>}
                {e.care && <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.25rem" }}><strong>Honoring:</strong> {e.care}</p>}
                {e.release && <p style={{ color: PURPLE, fontSize: "0.85rem", margin: 0 }}><strong>Releasing:</strong> {e.release}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Navigating Elder Care</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Amy Goyer on building a caregiving team and avoiding isolation</p>
              <VideoEmbed videoId="sJSFmO6gGlo" title="Navigating Elder Care" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Grief When a Parent Is Still Alive</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Understanding ambiguous loss and anticipatory grief in caregiving</p>
              <VideoEmbed videoId="oNpTha80yyE" title="Grief When a Parent Is Still Alive" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Suffering, Dignity, and Faith</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Joni Tada on finding meaning in caring for those who can no longer care for themselves</p>
              <VideoEmbed videoId="jJPVNIAFmvA" title="Suffering, Dignity, and Faith" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>The Hidden Grief of Caregivers</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>How caregivers can name and process their own loss while still giving care</p>
              <VideoEmbed videoId="7TBHqMqBmBo" title="The Hidden Grief of Caregivers" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
