"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#3a7d56";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const tabs = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof tabs[number];

const theology = [
  {
    title: "Caring for Parents Is Biblical Honor, Not Obligation",
    body: "The command to 'honor your father and mother' (Exodus 20:12) is the only commandment with a promise attached. In the New Testament, Jesus condemns those who use religious pretexts to avoid caring for aging parents (Mark 7:9–13). Paul calls it a form of Christian witness: 'If a widow has children or grandchildren, let them first learn to show godliness to their own household... for this is pleasing in the sight of God' (1 Tim 5:4). Caregiving is holy work — but holiness does not prevent exhaustion.",
  },
  {
    title: "Burnout Is Not a Failure of Love",
    body: "Caregiver burnout — the physical, emotional, and spiritual depletion that comes from sustained, often invisible labor — is not a sign that you love your parent less. It is a physiological and psychological response to chronic stress. Jesus himself withdrew from crowds — sometimes urgently — to rest and pray (Mark 1:35, Luke 5:16). Even the Son of God required restoration. The caregiver who runs until collapse serves no one well.",
  },
  {
    title: "The Grief of Watching a Parent Diminish",
    body: "Caregiving for a parent with dementia, Parkinson's, or advanced age involves a particular kind of grief: watching the person you knew slowly become someone else. You mourn a parent who is still alive. This anticipatory grief is real and deserves to be named. Lamentations describes a people who watched what they loved crumble slowly — they wept, they remembered, and they held onto a fragile hope: 'The steadfast love of the LORD never ceases' (Lam 3:22).",
  },
  {
    title: "You Cannot Pour From an Empty Vessel",
    body: "The apostle Paul, writing from prison, distinguishes between suffering that produces endurance and suffering that destroys. The difference is often whether the sufferer receives support or is left to carry alone. Sustainable caregiving requires deliberate self-care — not as self-indulgence but as stewardship of the capacity God has given you to serve. An exhausted caregiver is a diminished one.",
  },
  {
    title: "Asking for Help Is Theology, Not Weakness",
    body: "The body of Christ exists precisely so no one member carries everything alone. The early church in Acts redistributed resources and responsibility so that no one suffered lack (Acts 2:44–45). Allowing the church to help — accepting a meal, a respite, a listening ear — is not pride-swallowing. It is participating in the design God had for human community. Refusing all help is a form of self-sufficiency that Scripture nowhere commends.",
  },
];

const voices = [
  {
    name: "Amy Simpson",
    title: "Author, 'Troubled Minds'",
    quote: "We talk a lot in the church about loving our neighbors. But somehow we've created a culture where asking for help feels like spiritual failure. Caregivers, of all people, need the church to recover its theology of interdependence.",
  },
  {
    name: "Sheryl Sandberg & Adam Grant",
    title: "'Option B: Facing Adversity, Building Resilience'",
    quote: "Resilience is not the absence of needing support — it is the wisdom to build a support structure and the courage to use it. The caregiver who accepts help does not love less. They last longer.",
  },
  {
    name: "Henri Nouwen",
    title: "Priest & Author, 'The Wounded Healer'",
    quote: "We can only give from our abundance — not from our scarcity. The ministry of care requires that we ourselves are cared for. Attending to our own woundedness is not a distraction from ministry; it is its deepest foundation.",
  },
  {
    name: "Gwen Ford Faulkenberry",
    title: "Author, Caregiver Advocate",
    quote: "When my mother could no longer remember my name, I had to find new ways to love her — not by her response, not by her recognition, but as a choice I made every morning. That is when I understood agape. Love that does not require reciprocity.",
  },
];

const practices = [
  {
    title: "Scheduled Respite, Not Guilt",
    body: "Respite — time away from caregiving — is not abandonment. It is a medical and spiritual necessity. Schedule regular breaks, even short ones: a walk, a coffee, a phone call with a friend. Investigate your local Area Agency on Aging (eldercare.acl.gov) for adult day programs, respite care, and volunteer visitor programs. Accept help when a church member or neighbor offers — their offer is a gift, not a burden.",
  },
  {
    title: "Caregiver Support Groups",
    body: "The Alzheimer's Association, AARP, and many hospice organizations run free caregiver support groups. Sitting with others who understand — who have changed adult diapers, witnessed rage, and mourned the slow loss — provides what explanation cannot. Many caregivers report that support groups are the only place they feel fully understood. Call 1-800-272-3900 (Alzheimer's Association) for local group referrals.",
  },
  {
    title: "Brief Daily Prayer Anchors",
    body: "Extended quiet time is often impossible for caregivers with irregular schedules and disrupted nights. Instead, anchor the day with brief prayers at consistent moments: upon waking, before entering the parent's room, at mealtimes, before bed. A two-sentence prayer prayed ten times a day maintains connection with God in ways that an absent one-hour prayer cannot.",
  },
  {
    title: "Honest Conversation with Your Church Community",
    body: "Most churches want to help but do not know what is needed. Be specific: 'I need someone to sit with my mother on Tuesday afternoons for two hours.' 'I need a meal on the first Friday of each month.' 'I need someone to check on me by text every week.' Vague requests ('let me know if you need anything') rarely produce consistent support. Specific asks make it possible for the community to actually show up.",
  },
  {
    title: "Processing Grief for the Parent You Had",
    body: "The parent who is now demanding, confused, or hostile may bear little resemblance to the parent you knew. Grieving this gap — the parent-child relationship you once had, or wished for and never fully got — is legitimate and often unaddressed. A therapist who specializes in caregiver issues or family systems can help you grieve the parent you're losing without guilt, and separate that grief from your present caregiving decisions.",
  },
  {
    title: "Maintaining an Identity Outside of Caregiving",
    body: "Caregiver identity absorption — where your entire selfhood is subsumed into the caregiving role — is a genuine risk. Protect at least one activity or relationship that has nothing to do with your parent's care. A hobby, a friendship, a creative practice, a faith community role. These are not selfish escapes. They are the things that remind you that you are a full human being — not merely a care function.",
  },
];

const scriptures = [
  {
    ref: "Mark 1:35",
    text: "And rising very early in the morning, while it was still dark, he departed and went out to a desolate place, and there he prayed.",
    note: "Jesus was surrounded by urgent needs. He withdrew anyway. Rest and prayer are not luxuries that wait until the work is done — they are what make the work sustainable.",
  },
  {
    ref: "Isaiah 40:29–31",
    text: "He gives power to the faint, and to him who has no might he increases strength. Even youths shall faint and be weary... but they who wait for the LORD shall renew their strength.",
    note: "The promise is for the faint. Not the strong. Caregiver exhaustion is exactly the condition this passage was written for.",
  },
  {
    ref: "Lamentations 3:22–23",
    text: "The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
    note: "Morning by morning — the same rhythm as caregiving. Each day brings new mercy for the renewed demands of the day ahead.",
  },
  {
    ref: "Matthew 11:28–30",
    text: "Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls.",
    note: "This invitation is specifically for those who labor under heavy burdens. Caregiving qualifies. The rest Christ offers is for the soul — which outlasts any single night of physical sleep.",
  },
  {
    ref: "Galatians 6:2, 9",
    text: "Bear one another's burdens, and so fulfill the law of Christ... And let us not grow weary of doing good, for in due season we will reap, if we do not give up.",
    note: "Both verses apply: others should share the caregiver's burden, and the caregiver is encouraged not to give up. The church is implicated in both.",
  },
  {
    ref: "1 Peter 5:7",
    text: "Casting all your anxieties on him, because he cares for you.",
    note: "The anxieties of caregiving — medical decisions, financial strain, sibling conflict, the fear of your parent's death — are exactly what Peter means. Cast them. God's care for you is real.",
  },
];

const videos = [
  { id: "fo236aPoxBc", title: "The Rattle of Resurrection — Elevation Church" },
  { id: "IvSuGyJQ6oM", title: "Goodness of God — Bethel Music" },
  { id: "7_CGP-12AE0", title: "The Story of the Bible — BibleProject" },
  { id: "2qUOHjnDIFs", title: "Great Are You Lord — All Sons & Daughters" },
];

const JOURNAL_KEY = "vine_caregiver_burnout_entries";

function JournalTab() {
  const [entries, setEntries] = useState<{ id: number; date: string; text: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [draft, setDraft] = useState("");
  const save = () => {
    if (!draft.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
    setDraft("");
  };
  const remove = (id: number) => {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
  };
  const prompts = [
    "What do I miss most about who my parent used to be?",
    "What specific support do I need right now that I haven't asked for?",
    "What am I afraid of in this season — for my parent, for myself?",
    "When did I last do something that was purely for me? What would I do if I had two free hours?",
  ];
  return (
    <div>
      <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
        <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "1rem" }}>Reflection Prompts</h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {prompts.map((p, i) => (
            <li key={i} style={{ color: MUTED, fontSize: "0.9rem", paddingLeft: "1rem", borderLeft: `2px solid ${ACCENT}40` }}>{p}</li>
          ))}
        </ul>
      </div>
      <textarea
        value={draft}
        onChange={e => setDraft(e.target.value)}
        placeholder="Write freely — your words are private and stay only on your device..."
        rows={5}
        style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }}
      />
      <button onClick={save} style={{ marginTop: 8, padding: "0.6rem 1.6rem", background: ACCENT, color: "#fff", border: "none", borderRadius: 6, fontWeight: 600, cursor: "pointer" }}>Save Entry</button>
      {entries.length > 0 && (
        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {entries.map(e => (
            <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ color: MUTED, fontSize: "0.78rem" }}>{e.date}</span>
                <button onClick={() => remove(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.78rem" }}>Delete</button>
              </div>
              <p style={{ color: TEXT, fontSize: "0.92rem", margin: 0, whiteSpace: "pre-wrap" }}>{e.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CaregiverBurnoutAgingParentChristian() {
  const [activeTab, setActiveTab] = useState<Tab>("Theology");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg, ${ACCENT}18 0%, transparent 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "4rem 1.5rem 3rem" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: `${ACCENT}22`, border: `1px solid ${ACCENT}44`, borderRadius: 20, padding: "4px 14px", fontSize: "0.75rem", fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem" }}>
              Caregiving & Family
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
              Caregiver Burnout<br />
              <span style={{ color: ACCENT }}>Caring for Aging Parents</span>
            </h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 620, marginBottom: "1.5rem" }}>
              For Christians carrying the weight of caring for an aging or ill parent — navigating exhaustion, grief, and love in one of life's most demanding seasons. You are not alone, and burning out does not make you a bad person or a bad child.
            </p>
            <div style={{ background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`, borderRadius: 8, padding: "1rem 1.2rem", maxWidth: 520 }}>
              <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>
                Eldercare Locator: <a href="tel:18006774111" style={{ color: ACCENT }}>1-800-677-4116</a><br />
                Alzheimer's Association 24/7 Helpline: <a href="tel:18002723900" style={{ color: ACCENT }}>1-800-272-3900</a><br />
                <span style={{ fontWeight: 400, color: MUTED }}>988 Suicide & Crisis Lifeline: call or text 988</span>
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: `1px solid ${BORDER}`, background: BG, position: "sticky", top: 0, zIndex: 10 }}>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", overflowX: "auto", gap: 0 }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setActiveTab(t)} style={{ padding: "1rem 1.4rem", background: "none", border: "none", borderBottom: activeTab === t ? `2px solid ${ACCENT}` : "2px solid transparent", color: activeTab === t ? ACCENT : MUTED, fontWeight: activeTab === t ? 700 : 400, cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s" }}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "2.5rem 1.5rem" }}>

          {activeTab === "Theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {theology.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Voices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {voices.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                  <p style={{ color: TEXT, lineHeight: 1.8, fontSize: "1rem", fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p>
                  <div>
                    <div style={{ color: ACCENT, fontWeight: 700, fontSize: "0.9rem" }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Practices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {practices.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{p.body}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {scriptures.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${ACCENT}`, borderRadius: 10, padding: "1.5rem" }}>
                  <div style={{ color: ACCENT, fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>{s.ref}</div>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.75, marginBottom: "0.75rem" }}>&ldquo;{s.text}&rdquo;</p>
                  <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{s.note}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Journal" && <JournalTab />}

          {activeTab === "Videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {videos.map((v) => (
                <div key={v.id} style={{ background: CARD, borderRadius: 10, overflow: "hidden", border: `1px solid ${BORDER}` }}>
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <div style={{ padding: "1rem 1.2rem" }}>
                    <p style={{ color: TEXT, fontWeight: 600, margin: 0 }}>{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
