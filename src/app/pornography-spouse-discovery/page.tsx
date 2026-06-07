"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Discovery Is Not the Beginning — Only the Revelation",
    verse: "Luke 8:17",
    text: "Nothing hidden will remain hidden; what has been concealed will be brought into the open. Discovery does not create the problem — it surfaces what was already there. The disorientation of discovery is real, but so is this: what is brought into the light can now be addressed. Hiddenness was the greater danger."
  },
  {
    title: "Your Revulsion Is Not Prudishness — It Is Appropriate",
    verse: "1 Corinthians 6:18-19",
    text: "Flee from sexual immorality. Your body is a temple of the Holy Spirit. Your response to discovering pornography use is not squeamishness or overreaction. The betrayal you feel is a correct reading of what happened. Sexual sin against the marriage covenant is precisely what Paul says it is — a sin against one's own body, and against the One who lives in it."
  },
  {
    title: "Betrayal Trauma Is Real — Name It",
    verse: "Psalm 55:12-13",
    text: "If an enemy were insulting me, I could endure it. But it is you, a man like myself, my companion, my close friend. David's psalm of betrayal by a trusted companion is language for the spouse who discovers pornography: the wound is worse because it came from the inside. This is trauma, not simply disappointment."
  },
  {
    title: "Healing Is Possible — But Not Automatic",
    verse: "Hosea 2:14-15",
    text: "I will lead her into the desert and speak tenderly to her. There I will give her back her vineyards and will make the Valley of Achor a door of hope. God uses Hosea's betrayed marriage as a picture of His own betrayed covenant — and his process for healing is slow, intimate, and deliberate. Healing is possible, but it requires real work, not just confession."
  },
  {
    title: "You Are Not Required to Stay — But You Are Not Required to Leave",
    verse: "1 Corinthians 7:15",
    text: "The believing spouse is not bound in such circumstances. The decision about the future of the marriage belongs to you and to God — not to the pornography user, and not to church culture. Both staying and leaving can be faithful. Neither is automatic. Both require time, discernment, and support."
  }
];

const voices = [
  {
    id: "v1",
    name: "Marsha Means",
    role: "Therapist; Author, Living With Your Husband's Secret Wars",
    quote: "The spouse who discovers pornography is not a secondary victim. She is a primary one. Her trauma is real, her need for support is legitimate, and she should not have to manage her husband's recovery at the expense of her own healing.",
    bio: "Marsha Means has worked with hundreds of women in the aftermath of discovering a spouse's pornography use. She distinguishes between supporting a spouse's recovery and losing yourself in it — and insists that the betrayed spouse's healing must be primary, not secondary."
  },
  {
    id: "v2",
    name: "Jay Stringer",
    role: "Therapist; Author, Unwanted",
    quote: "Pornography is always a symptom of something else — unaddressed wounds, unmet needs, shame that has never been brought into the light. A spouse who wants healing needs to understand this without using it as an excuse for the behavior.",
    bio: "Jay Stringer's work on pornography goes deeper than behavior management, exploring the developmental and emotional roots that make pornography compulsive. His framework helps betrayed spouses understand the complexity without being asked to minimize the harm."
  },
  {
    id: "v3",
    name: "Sheila Wray Gregoire",
    role: "Author, The Great Sex Rescue; Marriage researcher",
    quote: "Too many churches have told women to be more sexually available to prevent their husbands' pornography use. This is not only incorrect — it is harmful. Pornography use is the husband's responsibility. Full stop.",
    bio: "Sheila Wray Gregoire's research-backed work on Christian marriage has been particularly important for betrayed spouses who have received harmful pastoral advice placing responsibility on themselves. She gives women permission to reject that frame."
  },
  {
    id: "v4",
    name: "Leslie Vernick",
    role: "Counselor; Author, The Emotionally Destructive Marriage",
    quote: "Forgiveness is not the same as reconciliation. Reconciliation requires safety, which requires sustained change, which requires time. A betrayed spouse is not required to rush any of these.",
    bio: "Leslie Vernick helps betrayed spouses distinguish between authentic forgiveness — releasing the right to vengeance — and the false reconciliation that many church communities pressure spouses toward before genuine change has occurred. Her work is practically essential."
  }
];

const practices = [
  {
    icon: "🚨",
    title: "You Do Not Have to Manage His Recovery",
    text: "The discovery of pornography does not make you responsible for your spouse's healing. His recovery is his work. Your healing is yours. These can coexist in a marriage that is trying — but they should never be confused. Seek your own support independently of what he is or is not doing."
  },
  {
    icon: "🧠",
    title: "Seek Betrayal Trauma Support",
    text: "Discovery of pornography in a marriage meets clinical criteria for betrayal trauma. You need a therapist who understands this — not general marriage counseling that treats both partners as equally wounded. Organizations like btr.org (Betrayal Trauma Recovery) offer specialized support."
  },
  {
    icon: "📋",
    title: "Request Full Disclosure — With a Professional Present",
    text: "Knowing the scope of the behavior is often necessary for healing, but discovery-in-pieces (trickle truth) retraumatizes repeatedly. A therapist or trained counselor can help structure a formal disclosure process that gives you information without weaponizing it."
  },
  {
    icon: "⏰",
    title: "Do Not Make Major Decisions Immediately",
    text: "In the acute aftermath of discovery, your nervous system is in crisis. Do not make final decisions about the marriage in the first weeks. Seek safety, seek support, and allow yourself time to regulate before determining the future of the relationship."
  },
  {
    icon: "⛪",
    title: "Choose Your Pastoral Support Carefully",
    text: "Not all pastors are equipped for betrayal trauma. If you receive advice that minimizes your pain, places responsibility on you, or demands immediate forgiveness and reconciliation — seek a different voice. Your wound is real and requires real care, not premature resolution."
  },
  {
    icon: "🤝",
    title: "Connect With Other Betrayed Spouses",
    text: "Isolation amplifies shame. Betrayal Trauma Recovery (btr.org), S-Anon (sanon.org), and Covenant Eyes spouse support communities connect you with others who understand specifically what you are carrying. Being known by someone who has been there is irreplaceable."
  }
];

const scriptures = [
  { verse: "Psalm 55:12-14", text: "If an enemy were insulting me, I could endure it; if a foe were rising against me, I could hide. But it is you, a man like myself, my companion, my close friend, with whom I once enjoyed sweet fellowship at the house of God." },
  { verse: "1 Corinthians 6:18-19", text: "Flee from sexual immorality. Every other sin a person commits is outside the body, but the sexually immoral person sins against his own body. Do you not know that your body is a temple of the Holy Spirit within you?" },
  { verse: "Luke 8:17", text: "For nothing is hidden that will not be made manifest, nor is anything secret that will not be known and come to light." },
  { verse: "Hosea 2:14", text: "Therefore I am now going to allure her; I will lead her into the wilderness and speak tenderly to her." },
  { verse: "Malachi 2:14", text: "The Lord is the witness between you and the wife of your youth. You have been unfaithful to her, though she is your partner, the wife of your marriage covenant." },
  { verse: "Isaiah 61:3", text: "To bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning, and a garment of praise instead of a spirit of despair." }
];

type DiscoveryEntry = { id: string; date: string; feeling: string; boundary: string; prayer: string };

export default function PornographySpouseDiscoveryPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DiscoveryEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [boundary, setBoundary] = useState("");
  const [prayer, setPrayer] = useState("");
  const [expandedVoice, setExpandedVoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_pornspousediscoveryj_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: DiscoveryEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling, boundary, prayer };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_pornspousediscoveryj_entries", JSON.stringify(updated));
    setFeeling(""); setBoundary(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_pornspousediscoveryj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, padding: "2rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ color: PURPLE, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.5rem" }}>Marriage & Betrayal</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.2 }}>Discovering a Spouse's Pornography Use</h1>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: 600 }}>
            When you found what you found and nothing is the same. When you don't know who you married, or what was real, or what comes next. Your pain is not an overreaction. This is betrayal trauma — and you need real support, not quick resolution.
          </p>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${PURPLE}` : "2px solid transparent", color: tab === t ? PURPLE : MUTED, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize", whiteSpace: "nowrap", fontFamily: "Georgia, serif" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>

        {tab === "theology" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Scripture for the betrayed spouse — validating the wound, refusing to place blame on the innocent, and holding space for both grief and the possibility of healing.</p>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontStyle: "italic", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Therapists and researchers who speak specifically to the betrayed spouse's experience — not as a secondary concern, but as the primary one.</p>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "0.75rem" }}>"{v.quote}"</p>
                <button onClick={() => setExpandedVoice(expandedVoice === v.id ? null : v.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.4rem 0.75rem", borderRadius: 4, cursor: "pointer", fontSize: "0.8rem" }}>{expandedVoice === v.id ? "Less" : "More"}</button>
                {expandedVoice === v.id && <p style={{ color: MUTED, lineHeight: 1.7, marginTop: "0.75rem" }}>{v.bio}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Steps for the betrayed spouse — your healing first, discernment second.</p>
            <div style={{ background: "#1a0808", border: "1px solid #6b2020", borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "0.75rem" }}>Crisis Support</div>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                <strong style={{ color: TEXT }}>988 Suicide &amp; Crisis Lifeline</strong> — betrayal trauma can become a mental health crisis.<br />
                Betrayal Trauma Recovery: <strong style={{ color: TEXT }}>btr.org</strong><br />
                S-Anon (for spouses of sex addicts): <strong style={{ color: TEXT }}>sanon.org</strong><br />
                <strong style={{ color: TEXT }}>Crisis Text Line: Text HOME to 741741</strong>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Verses that hold the betrayed spouse's pain with honesty and do not rush past it.</p>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${PURPLE}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>A private space to process what was found — what you feel, what boundaries you need, and what you are bringing to God. Entries remain on your device only.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.25rem", color: PURPLE }}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What am I feeling right now — honestly?</label>
                <textarea value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What boundaries do I need in order to be safe right now?</label>
                <textarea value={boundary} onChange={e => setBoundary(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What am I bringing to God that has no other place to go?</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: 700 }}>Save Entry</button>
            </div>
            {entries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", fontStyle: "italic" }}>No entries yet. Your reflections will appear here.</p>
            ) : (
              entries.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "1rem" }}>{e.date}</div>
                  {e.feeling && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>FEELING</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.feeling}</p></div>}
                  {e.boundary && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>BOUNDARY</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.boundary}</p></div>}
                  {e.prayer && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>PRAYER</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.prayer}</p></div>}
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer", fontSize: "0.75rem", marginTop: "0.5rem" }}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Teaching for the betrayed spouse — on betrayal trauma, healing, and navigating the road ahead.</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Betrayal Trauma: When Discovery Changes Everything</div>
              <VideoEmbed videoId="ZR-J8DQGFOI" title="Betrayal Trauma: When Discovery Changes Everything" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>For the Spouse: Healing After Pornography Discovery</div>
              <VideoEmbed videoId="2b0PxJcUCNM" title="For the Spouse: Healing After Pornography Discovery" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Leslie Vernick: The Emotionally Destructive Marriage</div>
              <VideoEmbed videoId="kfcVPh2VDhQ" title="Leslie Vernick: The Emotionally Destructive Marriage" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Unwanted: Jay Stringer on Pornography and Healing</div>
              <VideoEmbed videoId="psN1DORYYV0" title="Unwanted: Jay Stringer on Pornography and Healing" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
