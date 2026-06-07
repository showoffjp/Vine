"use client";
import { useState, useEffect } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", background: CARD, border: `1px solid ${BORDER}` }}>
      {playing ? (
        <iframe
          width="100%"
          style={{ aspectRatio: "16/9", display: "block" }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          onClick={() => setPlaying(true)}
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #0a0818 0%, #06050f 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(107,79,187,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `16px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

const JOURNAL_KEY = "vine_infidelity_entries";
interface JournalEntry { id: string; date: string; text: string; }

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function InfidelityAffairSurvivorPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(JOURNAL_KEY);
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!draft.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setDraft("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED, textTransform: "uppercase", letterSpacing: 2 }}>
          Vine Pastoral Care
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, marginBottom: 12, lineHeight: 1.2 }}>
          Infidelity & Affair Survival
        </h1>
        <p style={{ color: MUTED, fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
          Your marriage has been shattered. Whether you are trying to rebuild or grieve what cannot be rebuilt,
          you are not alone. Betrayal is one of the most acute traumas a human being can experience.
        </p>

        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{
              padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`,
              background: tab === i ? ACCENT : "transparent", color: tab === i ? TEXT : MUTED,
              cursor: "pointer", fontSize: 14, fontWeight: tab === i ? 700 : 400, transition: "all 0.2s"
            }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Betrayal Trauma is Real Trauma", body: "Infidelity causes post-traumatic stress. Intrusive thoughts, hypervigilance, emotional flooding, and numbness are not overreactions — they are the nervous system's response to a profound violation of safety. The church must name this clearly rather than rushing betrayed spouses to forgiveness before the wound is acknowledged." },
              { title: "Forgiveness Is Not Reconciliation", body: "Many betrayed spouses carry false guilt for not immediately forgiving — or for not reconciling after forgiving. Scripture distinguishes between releasing personal bitterness (which is for the offended person's healing) and restoring a covenant relationship (which requires genuine repentance, accountability, and changed behavior). You can forgive without returning to a dangerous or unrepentant relationship." },
              { title: "God's Own Experience of Betrayal", body: "The entire book of Hosea uses adultery as a metaphor for Israel's spiritual unfaithfulness — and God's anguished response is anything but detached. 'I remember the devotion of your youth' (Jeremiah 2:2). God does not minimize betrayal. God has grieved what you grieve. This is not a distant deity issuing platitudes from above." },
              { title: "The Discovery Wound", body: "For many, finding out is a second trauma separate from the affair itself — a moment where one reality collapses and another emerges. Ongoing disclosure of details (often in phases as the unfaithful partner strategically minimizes) re-traumatizes the betrayed. This is sometimes called 'staggered disclosure,' and therapists who specialize in infidelity recognize it as particularly harmful to recovery." },
              { title: "Rebuilding Is Possible — But Not Guaranteed", body: "Research (John Gottman, Shirley Glass, Esther Perel) indicates that some marriages not only survive but become stronger after infidelity — but only when the unfaithful partner takes full responsibility, the affair ends completely, and both partners engage in sustained, specialized therapeutic work. This is hard, slow, and not always successful. It is not a failure of faith to acknowledge when a marriage cannot be safely rebuilt." },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 8, fontSize: 17 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Shirley Glass", role: "Psychologist, Not Just Friends (2003)", quote: "Affairs are a betrayal of friendship as much as a betrayal of vows. The emotional intimacy built outside the marriage is often what causes the deepest wound.", insight: "Glass pioneered the concept of 'walls and windows' — the unfaithful partner builds emotional windows (openness) toward the affair partner and walls toward the spouse, which must be reversed in recovery." },
              { name: "Esther Perel", role: "Therapist, The State of Affairs (2017)", quote: "Betrayal in love is as old as love itself. And yet, we are all ill-prepared for it.", insight: "Perel challenges both the culture of immediate divorce and the culture of mandatory reconciliation, insisting that couples deserve space to grieve before deciding. Her TED Talks have reached millions navigating this wound." },
              { name: "Hosea (Scripture)", role: "Prophet, Husband of Gomer", quote: "How can I give you up, Ephraim? How can I hand you over, Israel? My heart is changed within me; all my compassion is aroused. (Hosea 11:8)", insight: "Hosea lived the experience he preached — his marriage to an unfaithful wife was a prophetic act that gave him first-hand knowledge of divine grief over betrayal. His story models lament before restoration." },
              { name: "Jay Stringer", role: "Therapist, Author of Unwanted", quote: "Betrayal trauma deserves the same clinical respect we give any other trauma. The betrayed partner is not oversensitive — they are responding appropriately to an actual violation.", insight: "Stringer's work on the intersection of faith and sexual brokenness helps both the betrayed and the unfaithful find pathways to healing that take the spiritual dimension seriously without bypassing the psychological work." },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ fontWeight: 700, color: TEXT, fontSize: 16 }}>{v.name}</div>
                <div style={{ color: ACCENT, fontSize: 13, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 16, color: TEXT, fontStyle: "italic", margin: "0 0 12px" }}>"{v.quote}"</blockquote>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{v.insight}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Find a CSAT (Certified Sex Addiction Therapist)", body: "If the affair was part of a pattern of sexual compulsivity, your spouse needs specialized treatment — not just couples counseling. A CSAT can assess whether there is an underlying sex addiction pattern. Meanwhile, you need your own trauma therapist. Go separately first; combined therapy before individual stabilization often retraumatizes the betrayed spouse." },
              { title: "Create an Immediate Safety Plan", body: "The unfaithful partner must end all contact with the affair partner — in writing, with you present or copied. Block on all platforms. Change passwords. This is not controlling behavior; it is a minimum precondition for considering reconciliation. If your spouse refuses, that tells you something important." },
              { title: "Build a Disclosure Timeline", body: "Ask your therapist about a formal therapeutic disclosure — a structured, prepared statement by the unfaithful spouse detailing the full extent of the affair. This ends staggered disclosure, which repeatedly retraumatizes the betrayed partner. A polygraph may be used to verify completeness. This is not punishment; it gives the betrayed spouse a fixed reality to grieve." },
              { title: "Join a Betrayal Trauma Support Community", body: "Affair Recovery (Gary Thomas / Rick Reynolds) offers online courses and community for betrayed spouses. Pure Desire Ministries runs groups for both the betrayed and the unfaithful. These communities reduce isolation and provide a framework for navigating the process with others who have walked it." },
              { title: "Give Yourself Permission to Not Decide Yet", body: "You do not have to decide in the first week — or the first year — whether you will divorce or reconcile. Both options may be legitimate. Creating false urgency (from your own anxiety or from pressure by your spouse) undermines your ability to make a wise, grounded decision. Stabilize first." },
              { title: "Lament Before Resolution", body: "Find a form of lament. The Psalms of lament (Psalm 88, 22, 55) model crying out to God without resolution. Journaling the raw, uncensored grief — including anger at God — is spiritually appropriate. Do not rush yourself to gratitude. The wound needs to be named before it can be healed." },
            ].map(p => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 8, fontSize: 16 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.body}</p>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>Crisis & Support Resources</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { label: "988 Suicide & Crisis Lifeline", val: "Call or text 988" },
                  { label: "Affair Recovery", val: "affairrecovery.com" },
                  { label: "Pure Desire Ministries", val: "puredesire.org — groups for betrayed spouses and unfaithful partners" },
                  { label: "AASAT (Certified Specialists)", val: "aasat.org — find a trained betrayal trauma therapist" },
                  { label: "National Domestic Violence Hotline", val: "1-800-799-7233 — if affair involves coercion or abuse" },
                ].map(r => (
                  <div key={r.label} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <span style={{ color: TEXT, fontWeight: 600, minWidth: 200 }}>{r.label}:</span>
                    <span style={{ color: MUTED }}>{r.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "Jeremiah 2:2", text: "I remember the devotion of your youth, how as a bride you loved me and followed me through the wilderness, through a land not sown.", note: "God speaks as the grieving faithful partner — a model for the experience of the betrayed." },
              { ref: "Psalm 55:12–14", text: "If an enemy were insulting me, I could endure it... But it is you, a man like myself, my companion, my close friend, with whom I once enjoyed sweet fellowship.", note: "David's lament for betrayal by a friend — the pain of intimacy violated." },
              { ref: "Malachi 2:16", text: "The man who hates and divorces his wife... does violence to the one he should protect, says the Lord Almighty.", note: "God's concern is the protection of the vulnerable in a marriage — not the preservation of the institution at all costs." },
              { ref: "Hosea 11:8", text: "How can I give you up, Ephraim? How can I hand you over, Israel? My heart is changed within me; all my compassion is aroused.", note: "God's own heart in grief — lament coexists with love and does not rush to resolution." },
              { ref: "Matthew 5:32", text: "But I tell you that anyone who divorces his wife, except for sexual immorality, makes her the victim of adultery.", note: "Jesus explicitly names sexual immorality as a condition that changes the moral calculus of divorce — acknowledging real harm." },
              { ref: "Lamentations 3:22–23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.", note: "In the context of devastation and ruin — not triumph — Jeremiah finds mercy. This is the context in which we sing Great Is Thy Faithfulness." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: 6 }}>{s.ref}</div>
                <div style={{ color: TEXT, fontStyle: "italic", marginBottom: 8, lineHeight: 1.6 }}>"{s.text}"</div>
                <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{s.note}</div>
              </div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 16 }}>Reflection Prompts</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                {[
                  "Write out the specific ways the betrayal changed your sense of reality. What did you believe about your marriage that turned out to be false?",
                  "What do you most need from God right now — not what you think you should need, but what you actually need?",
                  "What pressures (from your spouse, family, church, or yourself) are making it hard to give yourself time to grieve?",
                  "If you imagine your wisest, most compassionate self speaking to you right now, what would she or he say?",
                ].map(q => (
                  <div key={q} style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, paddingLeft: 12, borderLeft: `2px solid ${BORDER}` }}>{q}</div>
                ))}
              </div>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="Write your thoughts here..."
                style={{ width: "100%", minHeight: 120, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 14, resize: "vertical", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 12, padding: "10px 24px", background: ACCENT, color: TEXT, border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                Save Entry
              </button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ color: MUTED, fontSize: 13 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 12 }}>Delete</button>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, whiteSpace: "pre-wrap" }}>{e.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 5 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              Teaching on betrayal trauma, forgiveness, and the possibility of healing after infidelity.
            </p>
            <div style={{ display: "grid", gap: 20 }}>
              <VideoEmbed videoId="4Eg_di-O8nM" title="Healing After Betrayal — Understanding the Wound" />
              <VideoEmbed videoId="sIaT8Jl2zpI" title="Forgiveness and Reconciliation: What the Bible Actually Says" />
              <VideoEmbed videoId="hJkLBPIbZr4" title="The God Who Grieves: Hosea and Divine Heartbreak" />
              <VideoEmbed videoId="7_CGP-12AE0" title="When Trust Is Broken: A Path Through Betrayal Trauma" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
