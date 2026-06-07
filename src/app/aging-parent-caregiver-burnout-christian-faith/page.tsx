"use client";
import { useState, useEffect } from "react";

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

const JOURNAL_KEY = "vine_caregiver_burnout_entries";
interface JournalEntry { id: string; date: string; text: string; }

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function CaregiverBurnoutPage() {
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
          Caring for Aging Parents
        </h1>
        <p style={{ color: MUTED, fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
          You love your parent. You are also exhausted, grieving, sometimes resentful,
          and quietly disappearing into a role that leaves no room for you.
          Caregiver burnout is real, and it is not a sign that you love insufficiently.
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
              { title: "Honor Your Father and Mother — With Wisdom", body: "The fifth commandment is often quoted in caregiver contexts as if it requires unlimited personal sacrifice. But honoring a parent is not the same as destroying yourself for one. Ancient caregiving was communal — embedded in extended families, villages, and social structures that distributed responsibility. The singular caregiver carrying everything alone is a modern problem, not a biblical ideal. Honoring your parent can include arranging professional care, setting limits, and asking for help." },
              { title: "Anticipatory Grief Is Real Grief", body: "Caregivers of aging parents are often grieving before death — watching a parent lose capacity, personality, and self. This is called anticipatory grief, and it accumulates invisibly over years. By the time the parent dies, the caregiver may have been grieving for a decade. The church often rushes to support at death without recognizing the ongoing grief that preceded it." },
              { title: "The Invisible Caregiver — Usually a Woman", body: "Research consistently shows that adult daughters bear a disproportionate share of elder caregiving — in time, emotional labor, and career sacrifice. This inequity is often reinforced by church cultures that see caregiving as a female vocation. The burden being borne unequally is not only an economic and social problem — it is a justice problem that the church must name." },
              { title: "Resentment Is Information, Not Sin", body: "Resentment in caregivers signals that needs are going unmet and that the burden is unsustainable. It is a normal response to an impossible situation, not a sign of lack of love. Treating resentment as sin and suppressing it produces more damage than acknowledging it as information. What is resentment pointing to? What needs have been consistently overridden?" },
              { title: "Placing a Parent in Care Is Not Abandonment", body: "Many caregivers experience profound guilt when they arrange for residential care — interpreting it as failure or abandonment. Professional care, when needed, is an act of love, not surrender. You are not abandoning your parent; you are arranging for their needs to be met by people with training, rest, and resources that you may not have. Visiting regularly, advocating within the facility, and remaining emotionally present is a full expression of caregiving that does not require your physical destruction." },
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
              { name: "Ruth (Ruth 1)", role: "Biblical Figure", quote: "Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God.", insight: "Ruth's commitment to Naomi is one of the most celebrated acts of loyalty in Scripture. But notice: Ruth was not legally obligated. Orpah — who returned home — is not condemned. The text honors Ruth's choice without mandating it. Caregiving done from love is beautiful; caregiving coerced by guilt is different." },
              { name: "Pauline Boss", role: "Family Therapist, Ambiguous Loss", quote: "Ambiguous loss is the most difficult loss. The caregiver grieves the person who is there but not fully there — especially in dementia. The body remains; the person recedes.", insight: "Boss's framework of ambiguous loss is particularly relevant for caregivers of parents with dementia. The grief of watching a parent lose themselves is real and continuous — and society rarely makes space for it." },
              { name: "Mary (Luke 10:38–42)", role: "Biblical Figure", quote: "Mary has chosen what is better, and it will not be taken from her.", insight: "The Mary/Martha text is not a rebuke of service — it is a rebuke of anxious, resentful service that drives out the relational purpose of service. The application for caregivers: sustainability requires attending to your own soul, not just the tasks." },
              { name: "Naomi (Ruth 1)", role: "Biblical Figure", quote: "Call me Mara, because the Almighty has made my life very bitter. I went away full, but the Lord has brought me back empty.", insight: "Naomi does not suppress her grief or perform gratitude. She renames herself Bitterness. This honesty is not punished — it is the precondition for her eventual restoration. Caregivers need permission to name their own bitterness." },
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
              { title: "Take the Caregiver Self-Assessment", body: "AARP and the Family Caregiver Alliance offer free online assessments to measure caregiver burden, identify areas of risk, and connect with resources. Naming where you are is the first step. Many caregivers are in crisis without recognizing it — because the crisis developed slowly over years." },
              { title: "Use Respite Care Without Guilt", body: "Respite care — temporary relief for caregivers through adult day programs, in-home respite services, or short-term residential care — exists specifically so caregivers do not burn out. Using it is not abandoning your parent; it is ensuring that you remain capable of caring for them long-term. Contact your local Area Agency on Aging (eldercare.acl.gov, 1-800-677-1116) to find services." },
              { title: "Build a Care Team, Not a Solo Role", body: "Identify other family members, church members, friends, and paid professionals who can share specific tasks. Use a care coordination app (CareZone, CaringBridge) to distribute information and tasks. Have a direct conversation with siblings about equitable burden sharing. The most loving thing you can do for your parent may be asking others to help shoulder the care." },
              { title: "Maintain One Thing for Yourself", body: "Identify one regular activity — an hour, a morning, a weekly commitment — that belongs entirely to you. Not to be productive. Not to serve anyone. This is non-negotiable self-care, not selfishness. Research shows that caregivers who maintain personal activity have significantly lower depression rates and provide better care for longer periods." },
              { title: "Grieve What You Are Losing in Your Parent", body: "Name the specific losses as they happen: the parent who remembered your childhood, the parent who gave advice, the parent who could be a friend. Grief does not wait for death. Give it language in prayer, in journaling, with a therapist or trusted friend. Suppressed grief does not disappear — it converts to resentment, depression, or physical illness." },
              { title: "Consider a Caregiver Support Group", body: "Caregiver support groups — in person or online — provide the specific kind of community that only people in the same situation can offer. AARP Caregiver Support, the Alzheimer's Association (for dementia caregivers), and local Area Agencies on Aging all offer group connections. You do not have to carry this only with people who do not understand it." },
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
                  { label: "Eldercare Locator", val: "1-800-677-1116 — eldercare.acl.gov" },
                  { label: "Family Caregiver Alliance", val: "caregiver.org — 1-800-445-8106" },
                  { label: "Alzheimer's Association Helpline", val: "1-800-272-3900 — for dementia caregivers" },
                  { label: "AARP Caregiver Support", val: "aarp.org/caregiving" },
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
              { ref: "Exodus 20:12", text: "Honor your father and your mother, so that you may live long in the land the Lord your God is giving you.", note: "Honor is a relational posture, not an unlimited service contract. The commandment does not define the mechanism — it names the orientation. Arranging excellent professional care honors a parent." },
              { ref: "Luke 10:41–42", text: "Martha, Martha, you are worried and upset about many things, but few things are needed — or indeed only one. Mary has chosen what is better, and it will not be taken from her.", note: "Jesus redirects anxious, resentful service toward present, relational presence. The caregiver who is burning out has often lost this center." },
              { ref: "Matthew 11:28–30", text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.", note: "The invitation is to the weary and burdened — not to people who have finished their work. Rest is not earned through exhaustion; it is offered in the middle of it." },
              { ref: "Galatians 6:2", text: "Carry each other's burdens, and in this way you will fulfill the law of Christ.", note: "Burden-bearing is a community practice, not a solitary one. The law of Christ is fulfilled when the load is shared, not when one person carries it alone." },
              { ref: "Psalm 23:1–3", text: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.", note: "Soul refreshment is God's initiative, not the caregiver's reward for sufficient service. God offers rest to the depleted before the work is done." },
              { ref: "Isaiah 40:29–31", text: "He gives strength to the weary and increases the power of the weak. Even youths grow tired and weary, and young men stumble and fall; but those who hope in the Lord will renew their strength.", note: "Weariness is acknowledged — even in the young and strong. The renewal is not earned but received through hoping in God. This is not a promise of never being tired; it is a promise of renewed strength for those who wait on God." },
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
                  "What is the resentment pointing to? What specific needs of yours have been consistently set aside in the caregiving role?",
                  "What aspects of your parent are you grieving right now, before they are gone? Name them specifically.",
                  "Who else could be sharing this burden who is not? What is stopping you from asking for or requiring their help?",
                  "What is one thing you could do this week that belongs entirely to you — that is not for anyone else?",
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
              Teaching on caregiver burnout, anticipatory grief, sustainable love, and honoring parents without self-destruction.
            </p>
            <div style={{ display: "grid", gap: 20 }}>
              <VideoEmbed videoId="G-2e9mMf7E8" title="Caregiver Burnout: What Sustainable Love Actually Looks Like" />
              <VideoEmbed videoId="4Eg_di-O8nM" title="Anticipatory Grief: Mourning a Parent Who Is Still Here" />
              <VideoEmbed videoId="sIaT8Jl2zpI" title="Honor Your Parents: What That Command Actually Requires" />
              <VideoEmbed videoId="7_CGP-12AE0" title="The Resentment That Signals You Need Help" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
