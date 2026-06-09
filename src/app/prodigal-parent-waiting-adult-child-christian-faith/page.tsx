"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
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
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #0a1a0e 0%, #061008 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(58,125,86,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `16px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

const JOURNAL_KEY = "vine_prodigal_parent_entries";
interface JournalEntry { id: string; date: string; text: string; }

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function ProdigalParentPage() {
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
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED, textTransform: "uppercase", letterSpacing: 2 }}>
          Vine Pastoral Care
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, marginBottom: 12, lineHeight: 1.2 }}>
          Waiting for a Prodigal Child
        </h1>
        <p style={{ color: MUTED, fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
          Your adult child has walked away — from faith, from you, from the life you hoped for them.
          The waiting is its own kind of grief. You are not alone in the watching.
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
              { title: "The Father's Posture: Watching, Not Pursuing", body: "In Luke 15, the father sees his returning son 'while he was still a long way off' — meaning he was watching the horizon. The father did not chase the son into the far country. He waited at home, scanning the road, with an active posture of longing. This models what faithful parenting of a prodigal looks like: present, attentive, ready, but not coercive or invasive." },
              { title: "You Are Not the Savior of Your Child", body: "One of the most painful theological clarifications for parents is that their child's faith is not ultimately their responsibility to produce or maintain. The Reformation doctrine of individual conscience — the priesthood of all believers — applies even to your own child. You can plant and water; God gives the growth (1 Corinthians 3:6). Carrying the weight of your child's soul as if it belongs to you produces anxiety, control, and estrangement." },
              { title: "Grief Without a Clear Loss", body: "Psychologists call this 'ambiguous loss' (Pauline Boss). Your child is alive, but the relationship is fractured. You cannot fully mourn because there is no closure. You cannot fully hope because the outcome is uncertain. This type of grief is uniquely exhausting because there is no culturally recognized ritual for it. The church must create space to name this grief explicitly." },
              { title: "The Danger of Ultimatums and Manipulation", body: "The temptation is to leverage every contact point — holidays, grandchildren, money — to pressure your child's return to faith. Research consistently shows this accelerates estrangement. Jesus' father did not manipulate the timeline of his son's return; the son 'came to himself' through consequence and reflection. Coercion does not produce genuine faith; it produces compliance or flight." },
              { title: "God Also Waits for Prodigals", body: "The parable's father is transparently a portrait of God — which means God knows this waiting. The One who 'is not willing that any should perish' (2 Peter 3:9) understands the ache of watching someone you love choose a path that harms them. You are not outside God's understanding. You are inside it." },
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
              { name: "Pauline Boss", role: "Family Therapist, Ambiguous Loss (1999)", quote: "Ambiguous loss is the most difficult loss. It defies resolution and creates long-term grief for those who must cope with it.", insight: "Boss coined the term 'ambiguous loss' to describe losses without closure — including estrangement from living family members. Her framework gives parents language for a grief the church often doesn't recognize." },
              { name: "The Father in Luke 15", role: "Parabolic Figure", quote: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.", insight: "The father in this parable did three things before his son said a single word: saw him, was moved with compassion, and ran. The reunion preceded the speech. This models a posture of unconditional welcome that does not require prior repentance to activate love." },
              { name: "James Bryan Smith", role: "Author, The Good and Beautiful God", quote: "We cannot manufacture faith in another person, including our children. What we can do is stay connected, love well, and trust a God who pursues more relentlessly than we ever could.", insight: "Smith's work on spiritual formation and the kingdom of God has helped many parents find peace in releasing control of their adult children's spiritual lives while maintaining hope." },
              { name: "Mark Yaconelli", role: "Author, Contemplative Youth Ministry", quote: "The most powerful thing a parent can do for a wandering child is to become someone worth returning to.", insight: "Yaconelli challenges parents to focus their energy on their own spiritual depth and relational health rather than on monitoring, correcting, or pressuring the child — because a whole, joyful, non-anxious parent creates a relational home worth coming back to." },
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
              { title: "Name the Grief Specifically", body: "Identify what exactly you are grieving: the faith you hoped for? The closeness you once had? Holiday traditions that now feel hollow? Grandchildren being raised without the church? Each of these is a separate grief. Giving names to the specific losses makes them more manageable than the formless ache of 'my child is lost.'" },
              { title: "Detach with Love (Al-Anon Wisdom)", body: "Al-Anon's concept of 'detaching with love' — developed for families of people with addiction — applies broadly to estrangement. It means releasing the outcome of your child's life to God while maintaining a posture of unconditional love. It is not detachment from the person; it is detachment from controlling the person's choices. Many parents of prodigals find Al-Anon meetings genuinely helpful." },
              { title: "Maintain Relationship Over Agreement", body: "Research on estrangement (Karl Pillemer, Cornell University) shows that the most common driver of adult child estrangement is the parent prioritizing values/beliefs over the relationship. Staying in contact — without religious agenda — keeps the door open. Show up to secular events. Celebrate secular milestones. Be present without a sermon." },
              { title: "Find Your Own Support System", body: "Parents of prodigals are often isolated because the church celebrates children 'raised right' and has little vocabulary for parents whose children walked away. Find other parents in this situation — through Prodigals International, through a therapist, through a small group of honest peers. You need a place to grieve fully without having to protect other people's comfort." },
              { title: "Pray Without Manipulating God", body: "Be honest in prayer about what you are asking for. Then be honest about whether you are using prayer to maintain control — to bend God toward your preferred outcome. Praying 'convict him of sin' can become a way of staying in the fight. Surrendering prayer — 'Your will be done, and give me peace while I wait' — is harder but more honest." },
              { title: "Build a Life That Is Genuinely Good", body: "One of the best things you can do for your prodigal is become a person whose life is worth returning to. Find meaning, joy, and community in the present. Pursue interests, friendships, and growth. An anxious parent who has made the child the center of their emotional world creates an unsafe system to return to. A flourishing parent says, by their life, 'it is good here.'" },
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
                  { label: "988 Suicide & Crisis Lifeline", val: "Call or text 988 (if in crisis)" },
                  { label: "Prodigals International", val: "prodigalsinternational.org — support for parents of prodigals" },
                  { label: "Al-Anon Family Groups", val: "al-anon.org — 1-888-425-2666" },
                  { label: "NAMI Helpline", val: "1-800-950-6264 — if mental health issues are involved" },
                  { label: "Family Estrangement Research", val: "Karl Pillemer, Cornell — strangers in our own families" },
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
              { ref: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.", note: "The posture of the watching father — present, compassionate, ready. Not chasing; not absent." },
              { ref: "2 Peter 3:9", text: "The Lord is not slow in keeping his promise, as some understand slowness. Instead he is patient with you, not wanting anyone to perish, but everyone to come to repentance.", note: "God's patience on behalf of the lost is cosmic in scale. We wait in company with God's own waiting." },
              { ref: "1 Corinthians 3:6–7", text: "I planted the seed, Apollos watered it, but God has been making it grow. So neither the one who plants nor the one who waters is anything, but only God, who makes things grow.", note: "Parenting plants and waters. The outcome belongs to God. You are not the Spirit." },
              { ref: "Psalm 131:2", text: "But I have calmed and quieted myself, I am like a weaned child with its mother; like a weaned child I am content.", note: "The psalm of surrender — a model for releasing anxious striving and resting in God's character even when nothing has resolved." },
              { ref: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.", note: "When you don't know how to pray for your child, the Spirit prays on your behalf. You are never praying alone." },
              { ref: "Isaiah 49:15–16", text: "Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you! See, I have engraved you on the palms of my hands.", note: "God's love for the wanderer exceeds even parental love. Your child is held in hands that do not let go." },
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
                  "What specific losses are bundled inside 'my child has walked away'? Name them one by one.",
                  "Where in your relationship with your child are you prioritizing your values over your connection? What would it look like to choose the relationship without abandoning your values?",
                  "What would it look like to 'watch the road' in your current situation — maintaining hope without trying to control the outcome?",
                  "How is your own life right now? What would help you flourish while you wait?",
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
              Teaching on prodigal children, parental grief, and the posture of watching love.
            </p>
            <div style={{ display: "grid", gap: 20 }}>
              <VideoEmbed videoId="G-2e9mMf7E8" title="The Waiting Father: A Fresh Look at Luke 15" />
              <VideoEmbed videoId="4Eg_di-O8nM" title="Ambiguous Loss: When Your Child Is Gone But Still Here" />
              <VideoEmbed videoId="sIaT8Jl2zpI" title="Detaching with Love: Supporting Without Controlling" />
              <VideoEmbed videoId="hJkLBPIbZr4" title="Keeping the Door Open: Parenting Estranged Adult Children" />
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
