"use client";
import { useState } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "When the Body Will Not Recover: The Theology of Persistent Illness",
    body: "Long COVID, ME/CFS (myalgic encephalomyelitis/chronic fatigue syndrome), fibromyalgia, and other post-viral conditions share a devastating feature: they strip function from previously healthy people, resist clear diagnosis, and often improve without returning to baseline. The Christian sufferer faces a particular challenge: the theology of healing they brought into illness does not always fit the illness they actually have. Scripture acknowledges illnesses that do not resolve. Paul's thorn remains (2 Cor 12:7-10). Lazarus's sisters wait four days. Job's suffering is not explained. Persistent illness is not theological failure.",
  },
  {
    title: "Invisible Illness and the Witness of the Body",
    body: "Long COVID and related conditions are frequently invisible — sufferers look healthy while experiencing debilitating fatigue, cognitive impairment, pain, and systemic dysfunction. This invisibility compounds suffering: disbelief from physicians, employers, family, and sometimes church communities adds the wound of invalidation to the wound of illness. The Christian tradition's language of bearing witness — of naming what is real — is exactly what chronic invisible illness sufferers need: communities that believe them and take their experience as authoritative about their own bodies.",
  },
  {
    title: "Grief, Loss, and the Life That Was Interrupted",
    body: "Long COVID frequently interrupts life at its fullest: careers cut short, parenting capacity diminished, athletic and creative capacities erased, social life contracted to almost nothing. This is not a minor inconvenience but a profound loss — of a previous self, a previous life, a previous future. The Psalms of lament (22, 38, 88) give voice to this kind of radical disruption. Psalm 88, uniquely, offers no resolution — the psalm ends in darkness. God does not flinch from that darkness, and neither need you.",
  },
  {
    title: "The Grace of Limitation: A Counterintuitive Gift",
    body: "Many people in long-term illness describe — often years in — an unexpected discovery: the illness stripped away what was not essential and revealed what was. Forced to stop, they discovered who they actually were outside of productivity. This is not a promise that illness is secretly good, nor an invitation to toxic positivity about suffering. It is the testimony of sufferers who found that God was present in the diminishment, and that the diminished life was not without meaning. Paul writes from prison. Many mystics wrote from bed.",
  },
  {
    title: "The Community's Obligation",
    body: "Chronic illness is not the individual's problem alone. The body of Christ is described in 1 Corinthians 12 with language that is explicitly about members who 'cannot function' as they once did: 'the eye cannot say to the hand, I don't need you.' Churches that disappear from the chronically ill — whose pastoral care is calibrated for short-term crisis, not long-term presence — are failing this dimension of their calling. The suffering Christian is also the member the community needs for its own wholeness.",
  },
];

const voices = [
  {
    name: "Kate Bowler",
    role: "Author, Everything Happens for a Reason (and Other Lies I've Loved); diagnosed with stage IV cancer",
    quote: "Blessed and beloved. Not because of what I do, not because of what I produce, not because of what I can accomplish. Just beloved. This is what I needed someone to say to me. This is what chronic illness teaches if we let it.",
  },
  {
    name: "Joni Eareckson Tada",
    role: "Author and founder of Joni and Friends; quadriplegic since age 17",
    quote: "I would rather be in this wheelchair knowing God than on my feet without Him. Not because the wheelchair is good, but because what God has given me in the wheelchair has been greater than what I lost.",
  },
  {
    name: "Dr. Diane Sherwood",
    role: "Long COVID researcher and patient advocate",
    quote: "Long COVID patients are often treated as if their illness is exaggerated or psychological. The validation of their experience — by family, physicians, and faith communities — is not a luxury. It is medicine.",
  },
  {
    name: "Barbara Brown Taylor",
    role: "Author, Learning to Walk in the Dark",
    quote: "I have learned things in the dark that I could never have learned in the light, things that have saved my life over and over again, so that there is really only one logical conclusion. I need darkness as much as I need light.",
  },
];

const practices = [
  {
    title: "Pace, Do Not Push Through",
    body: "Post-exertional malaise (PEM) — worsening of symptoms after physical or cognitive exertion — is a hallmark of ME/CFS and Long COVID. The instinct to push through, normalize, or fight the illness with effort can cause significant worsening (often called a 'crash'). Pacing — the deliberate management of energy expenditure to stay within your available envelope — is the evidence-based approach supported by ME/CFS specialists. Work with a physician familiar with these conditions before engaging in exercise programs.",
  },
  {
    title: "Seek a Specialist",
    body: "General practitioners are often under-equipped to treat Long COVID and ME/CFS. Seek referral to a Long COVID clinic (major medical centers now have these) or a specialist in post-viral illness. Organizations like the ME Association and the Long COVID Alliance publish patient-friendly resources for finding appropriate care. Keep records of your symptoms and their relationship to activity and rest.",
  },
  {
    title: "Grieve the Losses Specifically",
    body: "Name the specific losses your illness has produced: the career, the hobby, the social life, the parenting capacity, the athletic identity, the future you had planned. Do not minimize them as 'just physical problems.' They are real losses of a real life, and they require real grief work — ideally with a therapist familiar with chronic illness and health grief.",
  },
  {
    title: "Ask Your Church Community for Sustained Presence",
    body: "Chronic illness sufferers often find that the initial surge of support from their church community fades after weeks or months. Consider having a direct, specific conversation with your pastor or a trusted leader about what sustained support looks like: regular check-ins, meal support during crashes, inclusion in community worship through online access, and visits. Specific asks are more sustainable than open invitations.",
  },
  {
    title: "Connect With Others Who Understand",
    body: "The Long COVID Alliance, Solve ME/CFS Initiative forums, and faith-based chronic illness communities (Joni and Friends offers connection resources) provide peer relationships that most general social networks cannot. People who actually understand your daily experience can provide both practical information and emotional solidarity in ways that well-intentioned friends who are healthy cannot.",
  },
  {
    title: "Protect Your Spiritual Life at Low Energy Cost",
    body: "Traditional spiritual practices — long worship services, extended prayer, Bible study groups — may be inaccessible during illness severity. Explore low-energy alternatives: breath prayer, short psalms read aloud, listening to worship music, written prayers others have composed. The Northumbria Community, the Daily Office in brief forms, and lectio divina on single verses are all practices that have sustained Christians in periods of serious illness for centuries.",
  },
];

const scriptures = [
  { ref: "2 Corinthians 12:9-10", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me." },
  { ref: "Psalm 88:1-2,18", text: "Lord, you are the God who saves me; day and night I cry out to you. May my prayer come before you; turn your ear to my cry... Darkness is my closest friend." },
  { ref: "Isaiah 40:29-31", text: "He gives strength to the weary and increases the power of the weak. Even youths grow tired and weary... but those who hope in the Lord will renew their strength." },
  { ref: "1 Corinthians 12:22", text: "On the contrary, those parts of the body that seem to be weaker are indispensable." },
  { ref: "Lamentations 3:32-33", text: "Though he brings grief, he will show compassion, so great is his unfailing love. For he does not willingly bring affliction or grief to anyone." },
  { ref: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
];

const videos = [
  { videoId: "yT-SaQfWWk0", title: "Long COVID and Faith: Navigating Chronic Illness" },
  { videoId: "v3FphCMGkMw", title: "Kate Bowler: Blessed and Beloved Despite Illness" },
  { videoId: "wMuMdCgpMcg", title: "ME/CFS and Pacing: What Every Patient Needs to Know" },
  { videoId: "3b0_nFJDwH8", title: "Finding God in the Diminished Life — Chronic Illness Spirituality" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_longhaulcovid_entries";
interface JournalEntry { id: string; date: string; today: string; loss: string; presence: string; }

export default function LongHaulCovidPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [form, setForm] = useState({ today: "", loss: "", presence: "" });
  const [saved, setSaved] = useState(false);

  function saveEntry() {
    const entry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      today: form.today,
      loss: form.loss,
      presence: form.presence,
    };
    const updated = [entry, ...entries].slice(0, 30);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setForm({ today: "", loss: "", presence: "" });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Pastoral Care</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1.2 }}>
          Long COVID and Chronic Post-Viral Illness: Faith in the Diminished Life
        </h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          For Christians navigating Long COVID, ME/CFS, and other chronic post-viral conditions — finding God in persistent illness, grieving the life interrupted, and surviving the invisibility of conditions others cannot see.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 6, border: `1px solid ${tab === t ? GREEN : BORDER}`,
              background: tab === t ? GREEN : CARD, color: TEXT, cursor: "pointer", fontSize: "0.9rem",
            }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: GREEN, marginBottom: "0.75rem" }}>{item.title}</h2>
                <p style={{ color: TEXT, lineHeight: 1.75 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map((v) => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <p style={{ color: TEXT, lineHeight: 1.75, fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ fontWeight: 700, color: GREEN }}>{v.name}</div>
                <div style={{ color: MUTED, fontSize: "0.875rem" }}>{v.role}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: GREEN, color: "#fff", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.875rem", flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>{p.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.75 }}>{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s) => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.5rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.75, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, color: GREEN, marginBottom: "1.25rem" }}>Private Reflection</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>How is your body today, honestly?</label>
                <textarea value={form.today} onChange={(e) => setForm({ ...form, today: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What specific loss is hardest to grieve today?</label>
                <textarea value={form.loss} onChange={(e) => setForm({ ...form, loss: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>Where have you sensed God&apos;s presence in the illness today?</label>
                <textarea value={form.presence} onChange={(e) => setForm({ ...form, presence: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: 700 }}>
                {saved ? "Saved" : "Save Entry"}
              </button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.875rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.875rem" }}>Delete</button>
                </div>
                {e.today && <><div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: 4 }}>My body today</div><p style={{ color: TEXT, marginBottom: "0.75rem", lineHeight: 1.6 }}>{e.today}</p></>}
                {e.loss && <><div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: 4 }}>Grief</div><p style={{ color: TEXT, marginBottom: "0.75rem", lineHeight: 1.6 }}>{e.loss}</p></>}
                {e.presence && <><div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: 4 }}>God&apos;s presence</div><p style={{ color: TEXT, lineHeight: 1.6 }}>{e.presence}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {videos.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} style={{ width: "100%", aspectRatio: "16/9" }} />
                <div style={{ padding: "1rem" }}>
                  <p style={{ color: TEXT, fontWeight: 600 }}>{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
          <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: "1rem" }}>Crisis & Support Resources</h3>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>988 Suicide & Crisis Lifeline</strong> — Call or text 988. Chronic illness significantly elevates depression and suicidal ideation risk; please reach out if you are struggling.
          </p>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>Long COVID Alliance</strong> — longcovidalliance.org — Patient resources and research on Long COVID.
          </p>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>Solve ME/CFS Initiative</strong> — solvecfs.org — Resources for ME/CFS patients and families.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>Joni and Friends</strong> — joniandfriends.org — Christian disability community offering connection, resources, and support.
          </p>
        </div>
      </div>
    </div>
  );
}
