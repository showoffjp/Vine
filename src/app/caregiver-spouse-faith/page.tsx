"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "This Is What the Vow Looks Like",
    verse: "Ruth 1:16–17",
    text: "Where you go I will go, and where you stay I will stay. Ruth's vow to Naomi — in sickness, in diminishment, in dependency — is one of the Bible's most beautiful portraits of covenant faithfulness. Your daily caregiving is not a reduced version of your marriage. It is the vow, embodied.",
  },
  {
    title: "Service That Is Not Reciprocated Is Still Holy",
    verse: "Mark 10:45",
    text: "For even the Son of Man did not come to be served, but to serve, and to give his life. The marriage you imagined was partnership. What you have now is asymmetrical. Jesus warns his disciples that greatness looks like the servant — and then models it on the cross. Your unreciprocated service does not make you a lesser spouse. It may make you a more Christlike one.",
  },
  {
    title: "You Are Allowed to Grieve the Marriage You Lost",
    verse: "Lamentations 3:47–48",
    text: "We have suffered terror and pitfalls, ruin and destruction. Streams of tears flow from my eyes because my people are destroyed. There is a marriage that ended when the illness began — not in divorce but in transformation. The loss of the partner you had, the future you planned, the reciprocity you needed, deserves full grief. Grief and love coexist.",
  },
  {
    title: "The Body That Endures Is Held",
    verse: "Isaiah 46:4",
    text: "Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you. The God who asks you to carry your spouse also promises to carry you. The carrying does not go only one direction.",
  },
  {
    title: "Sabbath Is Not Optional for Caregivers",
    verse: "Exodus 20:10",
    text: "On the seventh day you shall not do any work. The Sabbath commandment did not include an exception for caregivers, though the church has often implied one. Rest for the caregiver is not selfishness — it is obedience. Sustained caregiving without intentional rest is not holy heroism; it is a violation of the body's created design.",
  },
];

const voices = [
  {
    id: "v1",
    name: "Joni Tada",
    role: "Disability advocate, author, married to Ken Tada",
    quote: "My husband did not sign up to care for a quadriplegic. He signed up to marry me. And every morning when he helps me start my day, I see the vow lived out in ways most couples will never know. It is costly. It is also one of the most sacred things I have witnessed.",
    bio: "Joni Eareckson Tada (Joni and Friends, A Spectacle of Glory) and her husband Ken have modeled decades of spousal caregiving lived as covenant faithfulness. Joni speaks uniquely from both sides — as the one cared for and as someone who knows the cost it has exacted on her spouse.",
  },
  {
    id: "v2",
    name: "Amy Young",
    role: "Author, chronic illness community",
    quote: "The caregiver spouse is often invisible in the illness narrative. Everyone asks how the sick person is doing. No one asks the well spouse: How are you doing? Do you have what you need? Is anyone caring for you?",
    bio: "Amy Young (Looming Transitions, The Messy Middle) writes on chronic illness and its effect on the whole family system. Her advocacy for the visibility of caregiver spouses is essential — naming the particular grief and exhaustion of being the well spouse in an asymmetrical marriage.",
  },
  {
    id: "v3",
    name: "Gary Thomas",
    role: "Author, Sacred Marriage",
    quote: "Sacred Marriage asks: what if God is more interested in your holiness than your happiness? The caregiver spouse may be living the most concentrated answer to that question. The daily death to self in this calling is extraordinary.",
    bio: "Gary Thomas (Sacred Marriage, Cherish) argues that marriage is fundamentally a spiritual formation project, not primarily a happiness delivery system. His framework helps caregiver spouses understand that the asymmetry of their marriage has spiritual significance — without dismissing their legitimate need for care and support.",
  },
  {
    id: "v4",
    name: "Diane Langberg",
    role: "Christian trauma psychologist",
    quote: "Caregiver spouses often develop secondary trauma — not from fighting, but from sustained witnessing of suffering in someone they love, with no reprieve. That is a real clinical reality. The church must learn to care for the caregiver, not just the sick.",
    bio: "Diane Langberg (Suffering and the Heart of God) addresses the way sustained exposure to a loved one's suffering produces real psychological wounds. Her pastoral care framework for caregiver spouses takes seriously both the calling and the cost.",
  },
];

const practices = [
  {
    icon: "🧠",
    title: "Name Your Grief — Including the Ambiguous Kind",
    text: "Caregiver spouses experience ambiguous loss: your spouse is present but also partly absent. The person who walked into your marriage may be changed by illness in ways that feel like loss. That grief is real even though your spouse is still alive. Naming it with a therapist or trusted friend is not disloyalty — it is survival.",
  },
  {
    icon: "🏥",
    title: "Connect with Caregiver Support Resources",
    text: "The Caregiver Action Network (caregiveraction.org), Well Spouse Association (wellspouse.org), and Alzheimer's Association all offer support specifically for spousal caregivers. Well Spouse is especially valuable — peer support from people who understand exactly what you are living.",
  },
  {
    icon: "🛑",
    title: "Schedule Regular Respite",
    text: "Respite must be scheduled in advance and protected. It does not happen spontaneously. Work with your church, a home health aide, or respite care services to build regular intervals where you are fully off duty. Even a few hours per week changes the sustainability calculation.",
  },
  {
    icon: "🤝",
    title: "Let the Church Actually Help",
    text: "Specific helps caregiver spouses need: meal trains for high-stress periods, someone to sit with the ill spouse so the caregiver can attend worship, a friend who calls regularly without requiring a report on the patient, practical help with home maintenance. Let people in with specific asks.",
  },
  {
    icon: "💬",
    title: "Maintain Your Own Friendships",
    text: "Social isolation in caregiver spouses is both a risk factor for depression and a common outcome of the role's demands. Protect at minimum two or three friendships that are entirely about you — not your spouse's condition, not caregiving updates. You need people who know you, not just your situation.",
  },
  {
    icon: "📖",
    title: "Read Ruth Slowly",
    text: "The book of Ruth is a sustained meditation on covenant faithfulness in circumstances of grief, loss, and asymmetrical dependence. Read it as your story — not Ruth and Naomi's. Notice how Boaz notices Ruth, how the community is involved, how provision comes through relationship rather than heroic individual endurance.",
  },
];

const scriptures = [
  { verse: "Ruth 1:16–17", text: "But Ruth replied, 'Don't urge me to leave you or to turn back from you. Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God.'" },
  { verse: "Isaiah 46:4", text: "Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you." },
  { verse: "Galatians 6:2", text: "Carry each other's burdens, and in this way you will fulfill the law of Christ." },
  { verse: "Lamentations 3:47–48", text: "We have suffered terror and pitfalls, ruin and destruction. Streams of tears flow from my eyes because my people are destroyed." },
  { verse: "Mark 10:45", text: "For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many." },
  { verse: "Psalm 73:26", text: "My flesh and my heart may fail, but God is the strength of my heart and my portion forever." },
];

type CareEntry = { id: string; date: string; cost: string; filled: string; need: string };

export default function CaregiverSpouseFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CareEntry[]>([]);
  const [cost, setCost] = useState("");
  const [filled, setFilled] = useState("");
  const [need, setNeed] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_caregiverspousej_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!cost.trim()) return;
    const entry: CareEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      cost,
      filled,
      need,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_caregiverspousej_entries", JSON.stringify(updated));
    setCost(""); setFilled(""); setNeed("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_caregiverspousej_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>Marriage & Chronic Illness</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Caregiver Spouse: Faith in an Asymmetrical Marriage
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          For spouses who have become primary caregivers — who are living the vow in its most costly form. The grief is real. The exhaustion is real. The love is real. And you need care too.
        </p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#e07070", fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>Caregiver crisis resources</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>
            988 Suicide & Crisis Lifeline &nbsp;·&nbsp; Well Spouse Association: <span style={{ color: GREEN }}>wellspouse.org</span> &nbsp;·&nbsp; Caregiver Action Network: <span style={{ color: GREEN }}>caregiveraction.org</span>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.45rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t) => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{t.verse}</p>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.1rem" }}>{v.name}</h3>
                <p style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</p>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0" }}>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{v.quote}&rdquo;</p>
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{p.icon}</span>
                  <div>
                    <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>{p.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s) => (
              <div key={s.verse} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, fontWeight: 700, marginBottom: "1rem" }}>Journal Entry</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What is this calling costing you most right now?</label>
                <textarea value={cost} onChange={(e) => setCost(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What last genuinely filled you?</label>
                <textarea value={filled} onChange={(e) => setFilled(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What specific care do you need that you have not asked for?</label>
                <textarea value={need} onChange={(e) => setNeed(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.cost && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Cost:</strong> {e.cost}</p>}
                {e.filled && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Filled by:</strong> {e.filled}</p>}
                {e.need && <p style={{ color: TEXT, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Need:</strong> {e.need}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "sJSFmO6gGlo", title: "Caregiver Compassion Fatigue", channel: "Joni and Friends", description: "Joni and Friends addresses the spiritual and emotional weight of sustained caregiving — naming compassion fatigue, legitimate need for rest, and God's care for the caregiver." },
              { videoId: "y-DQH-M1HuM", title: "When Your Marriage Is Reshaped by Illness", channel: "Focus on the Family", description: "Pastoral conversation about the transformation of marriage under the weight of chronic illness — how couples navigate changed roles, grief, and renewed covenant." },
              { videoId: "m2uDNE9kcSE", title: "Marriage and Chronic Illness: The Well Spouse", channel: "Well Spouse Association", description: "Support and solidarity for the spouse who is well — addressing the particular grief and isolation of the caregiver role within marriage." },
              { videoId: "7TBHqMqBmBo", title: "Lament as Spiritual Practice", channel: "Soong-Chan Rah", description: "Biblical language for grief and loss — giving voice to the grief of the caregiver spouse who mourns a marriage that changed, a future that shifted, a partner who is present but different." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
