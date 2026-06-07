"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_healthcare_moral_injury_entries";
interface JournalEntry { id: string; date: string; text: string; }

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
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #0d0820 0%, #060610 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(107,79,187,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `18px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function HealthcareMoralInjury() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [draft, setDraft] = useState("");

  function saveEntry() {
    if (!draft.trim()) return;
    const next = [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
    setDraft("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
  }

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Work & Vocation</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Healthcare Worker Moral Injury and Christian Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>When the system prevents you from giving the care you were called to give — the wound no one prepared you for.</p>
        <div style={{ background: "#1a0a2e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#c9b8f0" }}>
          <strong style={{ color: ACCENT }}>Support:</strong> 988 Lifeline (crisis) &nbsp;|&nbsp; Emotional PPE Project: emotionalppe.org &nbsp;|&nbsp; AMA Mental Health Resources: ama-assn.org/mental-health &nbsp;|&nbsp; Crisis Text Line: text HOME to <strong>741741</strong>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Moral Injury Is Not Burnout</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Burnout is exhaustion from prolonged stress — an empty tank. Moral injury is something deeper: a wound to the conscience and the soul from being required to act in ways that violate your deepest commitments to what is right and good. Healthcare workers experience moral injury when they are forced to discharge patients before they are stable, when inadequate staffing means someone dies who should not have, when administrative systems prevent them from giving the care they know their patient needs, when they work through a pandemic watching colleagues die. The research of Jonathan Shay (originally focused on combat veterans) and Wendy Dean has applied this framework to medicine with devastating accuracy. What you are carrying has a name.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Theology of Calling Under Constraint</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Most Christian healthcare workers entered their field with a sense of vocation — this is what I am made to do, this is service to God and neighbor. When that vocation is systematically constrained by broken systems, profit motives, and impossible ratios, the injury is not just professional but spiritual. It attacks the meaning-structure of your life. Paul writes in Philippians 4:11 that he has learned contentment in all circumstances — but he was not speaking from a broken system that prevented him from doing his calling. The prophets raged against systems that crushed the poor and vulnerable. Rage at unjust systems is a biblical response, not a spiritual failure.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Witnessing Suffering and the Dark Night</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Healthcare workers witness suffering and death at a density that most people never approach. Repeated exposure to severe suffering can produce what clinicians call vicarious trauma or secondary traumatic stress — a reshaping of the helper&apos;s own worldview, emotional responses, and spiritual assumptions. For people of faith, this often manifests as a crisis: Where is God in all this suffering? Why do I pray and patients still die? Why does prayer seem ineffective in the face of this disease, this violence, this structural poverty? The mystics called the experience of God&apos;s hiddenness the dark night of the soul. You are not losing faith. You are being deepened by it.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Body of Christ and the Wounded Healer</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Henri Nouwen wrote about the wounded healer — the minister who serves others not from a position of completeness but from their own wounds. In the resurrection, Jesus appears with his wounds intact (John 20:27). Thomas is not asked to feel smooth, healed skin — he is asked to put his hand into the side that was pierced. The wounds are still there. And yet they are transfigured. The suffering you have witnessed, the moral injuries you have sustained, the weight you are carrying — these do not disqualify you from ministry or from your calling. They may be exactly what allows you to be present with others in suffering in a way that no unwounded person can be.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Permission to Leave — or Stay</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Some healthcare workers feel trapped — financial obligations, training investments, a sense that leaving would be abandoning their calling. Others feel guilty for considering staying when they know the system is harming them. Both are distortions. Leaving a healthcare role that is destroying you is not a failure of vocation — it is stewardship of the person God made you. Staying and advocating for change from within is also faithful. Neither choice is spiritually superior. The question is: what will allow you to remain whole enough to love God, love your neighbors, and eventually love your work again?</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Wendy Dean & Simon Talbot", title: "Moral Injury and Burnout in Medicine (Stat News)", quote: "Moral injury is a damage to identity, meaning-making, and relationships that occurs when people feel they have failed to prevent or participated in events that transgress deeply held moral beliefs." },
              { name: "Henri Nouwen", title: "The Wounded Healer", quote: "The great illusion of leadership is to think that man can be led out of the desert by someone who has never been there. Our wounds are often the openings into the best and most beautiful part of us." },
              { name: "Jonathan Shay", title: "Achilles in Vietnam", quote: "Moral injury is the result of experiencing or participating in actions that violate your own moral code. It is different from fear, exhaustion, and grief — it is the damage done to the soul by the betrayal of what is right." },
              { name: "Makoto Fujimura", title: "Culture Care", quote: "Vocation is not a role. It is a way of being present. When the role becomes a cage, the vocation can still survive — but it may need to find a different form." },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, marginBottom: 12 }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ color: ACCENT, fontWeight: 600 }}>{v.name}</div>
                <div style={{ color: MUTED, fontSize: 13 }}>{v.title}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Therapy with a Trauma-Informed Provider", body: "Moral injury requires more than rest — it requires processing with a skilled therapist who understands occupational trauma. Look for providers trained in EMDR, CPT, or narrative exposure therapy. The AMA's mental health resources (ama-assn.org/mental-health) and the Physicians Support Line (physicianssupportline.com) provide free peer support for physicians. Nurses can contact the American Nurses Foundation (nursingworld.org)." },
              { title: "Peer Support — With People Who Understand", body: "The Emotional PPE Project (emotionalppe.org) connects healthcare workers with volunteer mental health professionals for free therapy. VITAL WorkLife (vitalworklife.com) offers peer support programs. The single most protective factor against moral injury is having colleagues who can hear what you have witnessed without minimizing it." },
              { title: "Name What Happened", body: "Moral injury heals differently than burnout or anxiety. It requires naming specifically what happened: what you saw, what was done or not done, what you believe was wrong, what you wish had been different. Journaling, spiritual direction, and therapy all create space for this naming. Until the wound is named precisely, it cannot be addressed precisely." },
              { title: "Sabbath and Physical Restoration", body: "The body carries the weight of moral injury. Sleep deprivation, poor nutrition, and physical depletion worsen every aspect of the experience. Sabbath — as a genuine, non-negotiable day away from the work and its demands — is not a luxury for healthcare workers. It is a survival practice that God built into creation as law before it was ever a suggestion." },
              { title: "Spiritual Direction", body: "A spiritual director — not a therapist, but a trained companion in the inner life — can help process the faith dimensions of healthcare moral injury. Spiritual Directors International (sdiworld.org) has a global directory. Many spiritual directors are specifically trained in working with people in caring professions." },
              { title: "Advocacy as Spiritual Practice", body: "When individual healing is insufficient without systemic change, advocacy becomes part of recovery. Writing to hospital boards, participating in professional associations that advocate for safe staffing, supporting healthcare worker mental health legislation — these are ways of directing the anger of moral injury toward constructive ends. The prophets always named systemic injustice. You are allowed to do the same." },
            ].map(p => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: ACCENT, fontSize: 17, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "Jeremiah 20:9", text: "But if I say I will not mention his word or speak anymore in his name, his word is in my heart like a fire, a fire shut up in my bones. I am weary of holding it in; indeed, I cannot." },
              { ref: "Psalm 88:1–3", text: "Lord, you are the God who saves me; day and night I cry out to you. May my prayer come before you; turn your ear to my cry. I am overwhelmed with troubles and my life draws near to death." },
              { ref: "Matthew 11:28–30", text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls." },
              { ref: "Isaiah 1:17", text: "Learn to do right; seek justice. Defend the oppressed. Take up the cause of the fatherless; plead the case of the widow." },
              { ref: "John 20:27", text: "Then he said to Thomas, Put your finger here; see my hands. Reach out your hand and put it into my side. Stop doubting and believe." },
              { ref: "2 Corinthians 1:3–4", text: "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 600, marginBottom: 8 }}>{s.ref}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.8 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ACCENT, marginBottom: 12 }}>Private Journal</h3>
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>Stored only on this device. Not shared with anyone.</p>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="What happened that you cannot stop thinking about? What do you wish you could have done differently?"
                style={{ width: "100%", minHeight: 140, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 15, resize: "vertical", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 10, padding: "10px 24px", background: ACCENT, color: TEXT, border: "none", borderRadius: 8, cursor: "pointer", fontSize: 15 }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{e.date}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{e.text}</p>
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: 10, padding: "6px 14px", background: "transparent", color: MUTED, border: `1px solid ${BORDER}`, borderRadius: 6, cursor: "pointer", fontSize: 13 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <VideoEmbed videoId="4Eg_di-O8nM" title="When the Work Wounds the Worker — Moral Injury and Faith" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="The Wounded Healer — Henri Nouwen and Healthcare Calling" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="Burnout, Moral Injury, and Finding Your Way Back" />
            <VideoEmbed videoId="7_CGP-12AE0" title="God in the ICU — Faith Under Extreme Pressure" />
          </div>
        )}
      </div>
    </div>
  );
}
