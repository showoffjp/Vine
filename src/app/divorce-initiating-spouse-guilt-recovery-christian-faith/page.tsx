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

const JOURNAL_KEY = "vine_divorce_initiator_entries";
interface JournalEntry { id: string; date: string; text: string; }

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function DivorceInitiatingSpousePage() {
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
          Divorce Recovery: When You Left
        </h1>
        <p style={{ color: MUTED, fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
          You chose to end the marriage. Perhaps it was the hardest decision of your life.
          Now you carry grief, guilt, relief, loss, and the weight of a church culture that
          may have no language for the complexity of your experience.
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
              { title: "The Moral Complexity the Church Prefers to Avoid", body: "The church tends to divide divorce narratives into innocent and guilty parties — the one who was abandoned and the one who left. This binary is rarely accurate. Marriages end through complex accumulations of hurt, incompatibility, safety needs, and failure — usually distributed unevenly but rarely entirely one-sided. The person who filed the papers is not automatically the villain, and the person who was served is not automatically the victim." },
              { title: "Leaving a Marriage Can Be Obedience", body: "When a marriage involves abuse — physical, emotional, sexual, or spiritual — leaving is not the sin. Staying may be the greater danger, for yourself and for your children. The church has historically erred toward preserving marriage at the expense of the safety of the more vulnerable spouse. Naming this harm is not anti-marriage theology; it is the application of the Exodus narrative to covenant relationships: God always sides with the one being harmed." },
              { title: "Guilt as Both Appropriate and Distorted", body: "If your divorce caused genuine harm to your former spouse and children — and most divorces do, regardless of circumstances — appropriate guilt is the healthy response. Guilt that acknowledges real harm, leads to accountability, and motivates repair is constructive. But guilt that becomes permanent self-condemnation, that refuses the grace of forgiveness, that replays the decision endlessly — this is not spiritual maturity but a kind of self-punishment that avoids genuine resolution." },
              { title: "The Relief You Feel Is Not Proof You Were Wrong", body: "Many people who left a marriage experience significant relief — and then feel profoundly guilty about that relief, interpreting it as evidence of callousness. Relief after leaving an unsafe, destructive, or deeply unhappy situation is a normal human response. It coexists with grief and does not cancel it. You can miss what the marriage was supposed to be and still be relieved that it is over." },
              { title: "Rebuilding Identity After the Role of 'The One Who Left'", body: "In the social networks surrounding a divorce, the person who initiated the divorce often carries a named social role that can calcify into permanent identity — especially in church communities. Rebuilding requires differentiating yourself from that social narrative, which may mean finding new community where you are not known through the lens of your divorce." },
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
              { name: "Lundy Bancroft", role: "Author, Why Does He Do That?", quote: "Leaving an abusive relationship is not giving up on your marriage. It is protecting yourself and your children from a person who has already given up on the marriage through his repeated choices to harm.", insight: "Bancroft's work on abuse dynamics is essential reading for anyone who left a marriage due to abuse and is experiencing church pressure to have stayed or returned. His framing reorients the moral question." },
              { name: "Gary Thomas", role: "Author, When to Walk Away", quote: "Some marriages need to end. A marriage is not holy simply because it is intact. A marriage that destroys rather than builds is not serving the purpose for which God designed it.", insight: "Thomas — a proponent of marriage — wrote When to Walk Away specifically addressing toxic relationships, including marriages. His willingness to name when leaving is the righteous choice has given many church-going people permission they could not find elsewhere." },
              { name: "Paul (1 Corinthians 7:15)", role: "Apostle", quote: "But if the unbeliever leaves, let it be so. The brother or the sister is not bound in such cases; God has called us to live in peace.", insight: "The Pauline concession clause — not bound in such cases — has been extended by many theologians to cover marriages marked by persistent cruelty, abandonment, or abuse. Freedom and peace are legitimate goals." },
              { name: "Jennifer Degler", role: "Christian Psychologist, Author of No More Christian Nice Girl", quote: "Women in the church are often taught to be endlessly patient in marriage. But patience is not the same as enabling. Leaving is not always quitting — sometimes it is the first act of genuine self-respect.", insight: "Degler's work addresses the specific intersection of Christian socialization, people-pleasing, and abusive or destructive marriages, helping women distinguish between godly perseverance and harmful accommodation." },
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
              { title: "Differentiate Appropriate from Distorted Guilt", body: "Write out the specific harms your divorce caused — to your former spouse, to children, to extended family. These are real and deserve acknowledgment. Then separately list the distorted guilt: self-condemnation beyond what the situation warranted, guilt for having survived, guilt for feeling relief. Appropriate guilt leads to accountability and repair; distorted guilt leads to paralysis. They require different responses." },
              { title: "Make Amends Where Possible", body: "If your divorce involved actions that harmed others — an affair, financial misconduct, failure to try harder before leaving — making amends is part of healing. This does not mean re-opening the relationship or inviting further harm. It means taking responsibility for what you did, apologizing where appropriate, and changing behavior going forward. A therapist or pastor can help you determine what appropriate amends looks like." },
              { title: "Process with a Therapist, Not Just Supporters", body: "Friends and family who love you will tend to validate your choices entirely. A good therapist provides something different: honest engagement with both the legitimate reasons you left and the genuine costs of leaving. DivorceCare groups offer structured community; an individual therapist offers deeper personal processing." },
              { title: "Protect Your Children from the Narrative War", body: "If there are children, the most important post-divorce practice is refusing to make them participants in the adult story. They do not need to know why you left. They do not need to validate your decision. They need stability, love from both parents, and freedom from the guilt of divided loyalty. Their welfare is a separate priority from your healing." },
              { title: "Give Yourself Time Before Major Decisions", body: "The two years following a divorce are a period of profound psychological reorganization. Major decisions — new relationships, geographic moves, church changes, career shifts — made in this window are less likely to be grounded. Give yourself the gift of time before making choices you cannot easily unmake." },
              { title: "Find a Church That Holds Complexity", body: "Not every church can hold the moral complexity of initiated divorce. Some will permanently cast you as the guilty party. Others offer cheap grace without accountability. Look for a community that can hold both: honest reckoning with real costs AND genuine, unearned grace. DivorceCare at local churches can be a starting point (divorcecare.org)." },
            ].map(p => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 8, fontSize: 16 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.body}</p>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>Support Resources</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { label: "988 Suicide & Crisis Lifeline", val: "Call or text 988" },
                  { label: "DivorceCare", val: "divorcecare.org — church-based support groups" },
                  { label: "National Domestic Violence Hotline", val: "1-800-799-7233 — if leaving involved abuse" },
                  { label: "Open Path Collective", val: "openpathcollective.org — affordable individual therapy" },
                  { label: "NAMI Helpline", val: "1-800-950-6264" },
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
              { ref: "1 Corinthians 7:15", text: "But if the unbeliever leaves, let it be so. The brother or the sister is not bound in such cases; God has called us to live in peace.", note: "Peace is a legitimate theological goal in a marriage relationship. The absence of peace — through chronic harm, abandonment, or cruelty — changes the moral calculus." },
              { ref: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus.", note: "Paul is not speaking of unconsequential choices. He is speaking of the ontological status of those in Christ. Condemnation — final, total rejection — is not the condition of those held by Christ. This does not erase accountability; it precedes it." },
              { ref: "Psalm 51:17", text: "My sacrifice, O God, is a broken and contrite heart; you, God, will not despise.", note: "Genuine contrition — not performed guilt, not endless self-punishment — is what God receives. A broken heart is an offering, not a permanent condition." },
              { ref: "Isaiah 43:18–19", text: "Forget the former things; do not dwell on the past. See, I am doing a new thing! Now it springs up; do you not perceive it?", note: "God does not require permanent dwelling in past failure. The new thing God is doing requires forward orientation — which includes releasing what cannot be undone." },
              { ref: "Malachi 2:16", text: "The man who hates and divorces his wife... does violence to the one he should protect.", note: "This text, which is often used to prohibit all divorce, is specifically condemning divorce driven by hatred and contempt — not divorce driven by the legitimate need for safety or in response to betrayal." },
              { ref: "Luke 7:47–48", text: "Therefore, I tell you, her many sins have been forgiven — as her great love has shown. But whoever has been forgiven little loves little. Then Jesus said to her, 'Your sins are forgiven.'", note: "Jesus does not inventory the specific sins before forgiving. He receives the expression of love and speaks forgiveness. Forgiveness is not earned by sufficient suffering." },
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
                  "What are the specific, real harms your divorce caused? Naming them without minimizing is the starting point for genuine accountability.",
                  "What is the difference between the guilt that is moving you toward repair and the guilt that is keeping you stuck? Where are you living right now?",
                  "What narrative have others constructed about why you left? How much of that narrative is accurate, and what important context is missing?",
                  "What does your life need to look like a year from now for you to believe that genuine healing has occurred?",
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
              Teaching on divorce, moral complexity, appropriate guilt, grace, and the path through for those who initiated separation.
            </p>
            <div style={{ display: "grid", gap: 20 }}>
              <VideoEmbed videoId="4Eg_di-O8nM" title="When You Chose to Leave: Grace for the Initiating Spouse" />
              <VideoEmbed videoId="G-2e9mMf7E8" title="Leaving Is Not Always Quitting: Divorce and the Theology of Peace" />
              <VideoEmbed videoId="sIaT8Jl2zpI" title="Guilt, Contrition, and the No Condemnation of Romans 8" />
              <VideoEmbed videoId="hJkLBPIbZr4" title="Rebuilding After Divorce: Identity Beyond the Narrative Others Made" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
