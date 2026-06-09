"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "You Were Not Called to Disappear",
    verse: "Mark 6:31",
    text: "\"Then, because so many people were coming and going that they did not even have a chance to eat, he said to them, 'Come with me by yourselves to a quiet place and get some rest.'\" Jesus took his disciples away from ministry to rest. He did not rebuke them for needing it. The theology of rest is not a concession to weakness — it is a creation-embedded reality. Caregivers who disappear into their role have stopped being the person they were called to be.",
  },
  {
    title: "The Caregiver's Need Is Not Subordinate to the Patient's Need",
    verse: "Leviticus 19:18",
    text: "\"Love your neighbor as yourself.\" This command presupposes that the self has needs worth attending to — that the standard of neighbor-love is not self-erasure but self-knowledge. A caregiver who has ceased to care for themselves cannot sustain the love they have been called to extend. The command is symmetrical.",
  },
  {
    title: "Compassion Fatigue Is a Wound, Not a Character Flaw",
    verse: "Matthew 26:40–41",
    text: "\"Then he returned to his disciples and found them sleeping. 'Couldn't you men keep watch with me for one hour?' he asked Peter. 'Watch and pray so that you will not fall into temptation. The spirit is willing, but the flesh is weak.'\" The disciples' exhaustion during Gethsemane is not framed as moral failure — Jesus acknowledges the weakness of the flesh. Caregivers who collapse under the weight of sustained caring are not failing their calling; they are human.",
  },
  {
    title: "The Body of Christ Exists Precisely for This",
    verse: "Galatians 6:2",
    text: "\"Carry each other's burdens, and in this way you will fulfill the law of Christ.\" The community of faith was designed to distribute weight. Caregiver burnout is frequently a symptom of a church that has failed to surround a family with shared burden-bearing. The solution is not for the caregiver to try harder — it is for the church to actually function as a body.",
  },
  {
    title: "Lament Is Available to You",
    verse: "Psalm 77:1–3",
    text: "\"I cried out to God for help; I cried out to God to hear me. When I was in distress, I sought the Lord; at night I stretched out untiring hands, and I would not be comforted. I remembered you, God, and I groaned; I meditated, and my spirit grew faint.\" The psalmist reached for God and found not immediate relief but the freedom to groan without shame. Caregivers are permitted to be in distress, to groan, and to say that the weight is real.",
  },
];

const voices = [
  {
    id: 1,
    name: "Dr. Leah Weiss",
    role: "Stanford Researcher, Author of How We Work",
    quote: "Compassion fatigue is not caused by having too much compassion. It is caused by carrying compassion without adequate support or renewal.",
    bio: "Weiss's research on sustainable compassion and caregiver wellbeing has helped reframe burnout not as a personal failure but as a systemic and structural problem that requires structural solutions.",
  },
  {
    id: 2,
    name: "Amy Simpson",
    role: "Author, Troubled Minds: Mental Illness and the Church",
    quote: "Family caregivers of those with serious illness are often invisible to the church — they get lost behind the person who is visibly suffering.",
    bio: "Simpson, who grew up with a mother with severe mental illness, has written and spoken extensively about the invisible suffering of family caregivers and the church's responsibility to see them.",
  },
  {
    id: 3,
    name: "Dr. Pauline Boss",
    role: "Psychologist, Author of Ambiguous Loss",
    quote: "Caregivers often grieve someone who is still alive. This ambiguous loss — present absence — is one of the most disorienting grief experiences a person can have.",
    bio: "Boss's concept of ambiguous loss has been transformative for caregivers of those with dementia, chronic illness, and severe disability — naming the unique grief of caring for someone who is simultaneously present and gone.",
  },
  {
    id: 4,
    name: "Dr. Naomi Rachel Remen",
    role: "Physician, Author of Kitchen Table Wisdom",
    quote: "The expectation that we can be immersed in suffering and loss daily and not be touched by it is as unrealistic as expecting to be able to walk through water without getting wet.",
    bio: "Remen's work on the spirituality of caregiving and the inevitability of being affected by those you serve has helped both medical professionals and family caregivers normalize compassion fatigue.",
  },
];

const practices = [
  {
    icon: "📅",
    title: "Schedule Non-Negotiable Respite",
    text: "Respite is not a luxury — it is a medical necessity for caregivers. Schedule regular breaks (daily, weekly, monthly) before you need them. Identify trusted respite care for your loved one so you can step away without guilt.",
  },
  {
    icon: "🏥",
    title: "Get Your Own Medical Care",
    text: "Caregivers frequently defer their own medical appointments. Research consistently shows caregiver health declines significantly over time. Make and keep your own medical, dental, and mental health appointments. Your health is not a secondary priority.",
  },
  {
    icon: "👥",
    title: "Find a Caregiver-Specific Support Group",
    text: "NAMI Family Support Groups, the Caregiver Action Network, Alzheimer's Association groups, and condition-specific support groups exist for family caregivers. Peer support from others who understand is irreplaceable.",
  },
  {
    icon: "🗣️",
    title: "Name Your Grief to Someone",
    text: "The grief of caregiving — anticipatory grief, ambiguous loss, grief at lost life plans — must be spoken aloud to be processed. Find a therapist, a pastor, or a trusted friend who can hold your grief without rushing to fix it.",
  },
  {
    icon: "✍️",
    title: "Practice Honest Prayer",
    text: "If prayer has become difficult, give yourself permission to pray Psalms of lament rather than praise. Psalm 22, 42, 77, and 88 are particularly honest prayers for those who are weary and cannot manufacture comfort.",
  },
  {
    icon: "📞",
    title: "Reach Out to the National Caregiver Hotline",
    text: "The Caregiver Action Network operates a caregiver help desk (1-855-227-3640). NAMI's helpline (1-800-950-6264) supports families of those with mental illness. You do not have to navigate this alone.",
  },
];

const scriptures = [
  { verse: "Isaiah 40:29–31", text: "\"He gives strength to the weary and increases the power of the weak. Even youths grow tired and weary, and young men stumble and fall; but those who hope in the LORD will renew their strength.\"" },
  { verse: "Psalm 23:1–3", text: "\"The LORD is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.\"" },
  { verse: "Matthew 11:28–29", text: "\"Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.\"" },
  { verse: "2 Corinthians 4:16–17", text: "\"Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day. For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all.\"" },
  { verse: "Galatians 6:9", text: "\"Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.\"" },
  { verse: "Philippians 4:7", text: "\"And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.\"" },
];

type CaregiverEntry = {
  id: string;
  date: string;
  weight: string;
  need: string;
  prayer: string;
};

export default function CaregiverBurnoutPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CaregiverEntry[]>([]);
  const [weight, setWeight] = useState("");
  const [need, setNeed] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_caregiverburnout_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!weight.trim()) return;
    const entry: CaregiverEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      weight,
      need,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_caregiverburnout_entries", JSON.stringify(updated));
    setWeight(""); setNeed(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_caregiverburnout_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🫶</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>
            Chronic Illness Caregiving & Burnout
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For family caregivers navigating the long exhaustion of caring for someone with chronic illness — pastoral care that sees the caregiver, not just the patient, and makes space for their grief and need.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Caregiver Support: <strong>Caregiver Help Desk:</strong> 1-855-227-3640 | <strong>NAMI:</strong> 1-800-950-6264 | <strong>988</strong> Suicide & Crisis Lifeline
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer",
              background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED,
              fontWeight: tab === t ? "bold" : "normal", fontSize: "0.875rem",
              textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", color: "#fff", flexShrink: 0 }}>
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: TEXT }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.role}</div>
                  </div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", margin: "0 0 0.75rem" }}>
                  "{v.quote}"
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${GREEN}` }}>
                <div style={{ color: GREEN, fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, marginBottom: "1rem", fontWeight: "bold" }}>Private Journal</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What weight am I carrying today as a caregiver?</label>
                <textarea value={weight} onChange={e => setWeight(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What do I need that I haven't been able to ask for?</label>
                <textarea value={need} onChange={e => setNeed(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer for yourself — not for the person you're caring for:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.weight && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Weight:</strong> {e.weight}</p>}
                {e.need && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Need:</strong> {e.need}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="0Rnq1NpHdmw" title="Caregiver Burnout: What It Is and How to Heal" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Caregiver Burnout: Recognition and Recovery</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Clinical overview of caregiver burnout, compassion fatigue, and what sustainable caregiving requires</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="kDLa6L3emSw" title="Ambiguous Loss — Pauline Boss on Caregiver Grief" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Ambiguous Loss: Grieving Someone Who Is Still Here</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Pauline Boss explains the unique grief of caregivers and why it is often unrecognized and unsupported</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="t1MUmx4rwLQ" title="The Church's Role in Supporting Family Caregivers" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>The Church's Role in Supporting Family Caregivers</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Practical guidance for faith communities on becoming genuine support systems for caregiving families</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="6TFlFbIB-dU" title="Rest as Spiritual Practice for Caregivers" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Rest as Theology: Sabbath and the Caregiver</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Biblical and spiritual reflection on why rest is not optional for caregivers and how to claim it</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
