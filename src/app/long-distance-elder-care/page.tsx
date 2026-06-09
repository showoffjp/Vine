"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Honoring from Afar Is Still Honor",
    verse: "Exodus 20:12",
    text: "The fifth commandment makes no geographic exception. Honoring a parent does not require physical proximity — it requires love, faithfulness, and action within your actual constraints. Distance complicates the how; it does not eliminate the calling."
  },
  {
    title: "Doing What You Can, Not What You Wish You Could",
    verse: "2 Corinthians 8:12",
    text: "Paul says a gift is acceptable according to what you have, not what you do not have. God does not evaluate your caregiving against an imaginary version of yourself who lives nearby. He sees what you are actually doing with what you actually have."
  },
  {
    title: "The Grief of Watching From a Distance",
    verse: "Lamentations 1:12",
    text: "Watching a parent decline without being able to intervene is its own kind of sorrow — the grief of helplessness. Lamentations validates suffering that cannot be fixed by trying harder. Some losses are simply losses, and God meets us in them rather than resolving them."
  },
  {
    title: "Entrusting What You Cannot Control",
    verse: "Psalm 31:5",
    text: "Into your hand I commit my spirit — David's prayer has always been a prayer of releasing what you cannot hold. Committing a parent into God's hands is not abandonment. It is the most honest form of trust: naming your limits and surrendering to the One who has none."
  },
  {
    title: "God Does Not Require the Impossible",
    verse: "Micah 6:8",
    text: "God requires you to act justly, love mercy, and walk humbly — not to be omnipresent. The guilt that accumulates when you cannot do the impossible is not from God. Faithfulness within your actual circumstances is the whole of what is asked."
  }
];

const voices = [
  {
    id: "v1",
    name: "Barbara Deane",
    role: "Founder, CareGiving.com; Author on long-distance caregiving",
    quote: "Long-distance caregiving is real caregiving. The guilt that you're not doing enough is rarely accurate — it is almost always the gap between the ideal and the possible.",
    bio: "Barbara Deane has spent decades helping adult children navigate the logistical, emotional, and spiritual weight of caring for aging parents across miles. Her work validates that love does not require constant presence."
  },
  {
    id: "v2",
    name: "Amy Goyer",
    role: "AARP Family and Caregiving Expert; Author, Juggling Life, Work, and Caregiving",
    quote: "The hardest part of long-distance caregiving is not the flights or the phone calls — it is tolerating uncertainty. Not knowing is its own exhaustion.",
    bio: "Amy Goyer speaks with authority from personal experience, having cared for multiple family members simultaneously. She addresses the real logistics while acknowledging the emotional terrain."
  },
  {
    id: "v3",
    name: "Joni Eareckson Tada",
    role: "Founder, Joni and Friends; disability theologian",
    quote: "Dependency is not indignity. When a parent loses capacity, something holy is still present. Receiving care gracefully may be the last great thing they offer you.",
    bio: "Joni's lifelong engagement with disability and caregiving gives her insight into the spiritual dimension of aging, decline, and dependence — both for the parent and the adult child watching."
  },
  {
    id: "v4",
    name: "Gary Thomas",
    role: "Author, Sacred Influence and Cherishing",
    quote: "The love that stays faithful across inconvenience, across distance, across decline — that is the love that forms you into someone who looks like Jesus.",
    bio: "Gary Thomas regularly addresses how suffering and obligation become the unexpected school of Christlikeness. He helps caregivers see their service as spiritual formation, not just duty."
  }
];

const practices = [
  {
    icon: "📋",
    title: "Create a Care Coordination Plan",
    text: "Establish a single shared document (Google Doc, CareZone, Lotsa Helping Hands) with all providers, medications, emergency contacts, and care preferences. Know who is the primary local point of contact before a crisis, not during one."
  },
  {
    icon: "📞",
    title: "Schedule Regular Check-In Calls",
    text: "Consistency matters more than length. A brief daily or every-other-day call gives your parent connection and gives you real information. Video calls allow you to see — not just hear — how they are actually doing."
  },
  {
    icon: "🏠",
    title: "Assess and Arrange Local Support",
    text: "Identify what support exists near your parent: neighbors, church members, home health aides, senior centers, meal delivery (Meals on Wheels), or geriatric care managers. You cannot be there; build a team that can."
  },
  {
    icon: "⚖️",
    title: "Clarify Legal and Financial Documents",
    text: "Ensure power of attorney (medical and financial), advance directives, and will are in place and accessible. Having these in order before a crisis is an act of love — for your parent and for every family member who follows."
  },
  {
    icon: "✈️",
    title: "Plan Intentional Visits",
    text: "When you visit, use the time strategically: meet with doctors, inspect living conditions, stock supplies, and have the conversations you have been avoiding. Visits are not vacations — they are concentrated care windows."
  },
  {
    icon: "🙏",
    title: "Name the Grief and Guilt Honestly",
    text: "Long-distance caregivers carry a specific guilt that does not dissolve through logic alone. Bring it to God, to a therapist, or to a caregiver support group. Naming it reduces its power to distort your judgment about what you are actually doing."
  }
];

const scriptures = [
  { verse: "Exodus 20:12", text: "Honor your father and your mother, that your days may be long in the land that the Lord your God is giving you." },
  { verse: "2 Corinthians 8:12", text: "For if the readiness is there, it is acceptable according to what a person has, not according to what he does not have." },
  { verse: "Psalm 31:5", text: "Into your hand I commit my spirit; you have redeemed me, O Lord, faithful God." },
  { verse: "Micah 6:8", text: "He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?" },
  { verse: "Isaiah 46:4", text: "Even to your old age I am he, and to gray hairs I will carry you. I have made, and I will bear; I will carry and will save." },
  { verse: "Lamentations 1:12", text: "Is it nothing to you, all you who pass by? Look and see if there is any sorrow like my sorrow." }
];

type ElderCareEntry = { id: string; date: string; worry: string; action: string; release: string };

export default function LongDistanceElderCarePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ElderCareEntry[]>([]);
  const [worry, setWorry] = useState("");
  const [action, setAction] = useState("");
  const [release, setRelease] = useState("");
  const [expandedVoice, setExpandedVoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_longdistanceeldercarej_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!worry.trim()) return;
    const entry: ElderCareEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), worry, action, release };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_longdistanceeldercarej_entries", JSON.stringify(updated));
    setWorry(""); setAction(""); setRelease("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_longdistanceeldercarej_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, padding: "2rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ color: GREEN, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.5rem" }}>Caring for Aging Parents</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.2 }}>Long-Distance Elder Care</h1>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: 600 }}>
            When the miles between you and your aging parent feel like a failing. When you cannot be there for the fall, the appointment, the bad night. When guilt lives in your chest like a stone. You are doing something real — even from far away.
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Distance does not disqualify your love or your obedience. These theological foundations address the guilt, the grief, and the faithfulness of caring for an aging parent across miles.</p>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Practitioners and theologians who understand the impossible math of long-distance caregiving.</p>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Practical and spiritual steps for caring well across the miles.</p>
            <div style={{ background: "#1a0d0d", border: "1px solid #5a2020", borderRadius: 8, padding: "1.25rem", marginBottom: "2rem" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "0.5rem" }}>Crisis Resources</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                If your parent is in immediate danger: <strong style={{ color: TEXT }}>911</strong>.<br />
                Caregiver distress: <strong style={{ color: TEXT }}>988 Suicide &amp; Crisis Lifeline</strong> — also for caregivers in crisis.<br />
                Eldercare Locator: <strong style={{ color: TEXT }}>1-800-677-1116</strong> (connects to local elder services).<br />
                AARP Caregiver Support: <strong style={{ color: TEXT }}>aarp.org/caregiving</strong>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Verses for the long-distance caregiver carrying guilt, grief, and the weight of limitations.</p>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>A private space to process the specific guilt and grief of distance. Entries stay on your device only.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.25rem", color: GREEN }}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What am I worried I'm failing at right now?</label>
                <textarea value={worry} onChange={e => setWorry(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What action can I actually take from where I am?</label>
                <textarea value={action} onChange={e => setAction(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What am I releasing into God's hands today?</label>
                <textarea value={release} onChange={e => setRelease(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: 700 }}>Save Entry</button>
            </div>
            {entries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", fontStyle: "italic" }}>No entries yet. Your reflections will appear here.</p>
            ) : (
              entries.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "1rem" }}>{e.date}</div>
                  {e.worry && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>WORRY</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.worry}</p></div>}
                  {e.action && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>ACTION</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.action}</p></div>}
                  {e.release && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>RELEASED</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.release}</p></div>}
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer", fontSize: "0.75rem", marginTop: "0.5rem" }}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Teaching and testimony on caregiving, honoring parents, and releasing guilt to God.</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>When You Can't Be There: Long-Distance Caregiving</div>
              <VideoEmbed videoId="sJSFmO6gGlo" title="When You Can't Be There: Long-Distance Caregiving" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Caring for Aging Parents — Faith and Fatigue</div>
              <VideoEmbed videoId="y-DQH-M1HuM" title="Caring for Aging Parents — Faith and Fatigue" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>The Spiritual Formation of Caregiving</div>
              <VideoEmbed videoId="m2uDNE9kcSE" title="The Spiritual Formation of Caregiving" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Releasing Control: Entrusting Your Parent to God</div>
              <VideoEmbed videoId="7TBHqMqBmBo" title="Releasing Control: Entrusting Your Parent to God" />
            </div>
          </div>
        )}

      </div>
    </div>
      <Footer />
    </>
  );
}
