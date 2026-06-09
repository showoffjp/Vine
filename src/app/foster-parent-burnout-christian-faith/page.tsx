"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

const theology = [
  {
    title: "Foster Care Is a Ministry of Presence",
    body: "The call to care for orphans and vulnerable children is among the most explicit in Scripture: 'Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress' (James 1:27). Foster care is one of the most direct embodiments of this call available to Christians. But the gap between the call and the reality — the trauma in the children, the dysfunction of the system, the secondary trauma of caregivers — is profound. Burnout in this ministry is not faithlessness; it is the cost of deeply embodied love.",
  },
  {
    title: "You Cannot Pour from an Empty Cup",
    body: "Elijah, who had just finished an extraordinary ministry moment, burned out so completely that he 'went a day's journey into the wilderness' and asked to die. God's response was not 'what happened to your faith?' — it was food, sleep, and a companion for the road. Caregivers who are depleted cannot care well. Foster parents who reach burnout need restoration before they can continue serving. Seeking restoration is not abandoning the mission; it is what makes the mission sustainable.",
  },
  {
    title: "Secondary Trauma Is Real",
    body: "Children who enter foster care have often experienced significant trauma — abuse, neglect, separation, instability. Caring for traumatized children is itself traumatizing. Secondary traumatic stress — also called compassion fatigue or vicarious trauma — is a recognized condition in which caregivers absorb the trauma of those they care for. Symptoms include intrusive thoughts, hypervigilance, emotional numbing, and physical exhaustion. This is not weakness; it is the price of genuine empathy.",
  },
  {
    title: "Grief for Children Who Leave",
    body: "One of the most specific griefs in foster care is the loss that happens when children you have loved leave your home — for reunification, for adoption by others, for group settings. This loss is often not recognized by the broader community as a real bereavement. But it is. The love was real, the attachment was real, and the loss is real. Creating space for this grief — in community, in therapy, in prayer — is essential for continuing in foster care and for the wellbeing of the family.",
  },
  {
    title: "The Long Game of Redemption",
    body: "Foster care often feels like failure — children don't get better fast, the system doesn't work, outcomes are uncertain. But the Christian theology of redemption is not about immediate, visible outcomes. Seeds are planted in the dark. The child who seemed unchanged by your care may carry a memory of safety and love that becomes crucial fifteen years later. The long game of redemption cannot be measured in placement outcomes. It is measured in seeds sown in love.",
  },
];

const voices = [
  {
    name: "Jason Johnson",
    role: "Author, ReFraming Foster Care",
    quote: "Foster care is not a program you run. It is an incarnational ministry — the word becoming flesh and moving into the mess. That costs something real.",
  },
  {
    name: "Mike Berry",
    role: "Foster/adoptive parent and blogger, Confessions of an Adoptive Parent",
    quote: "Burnout is not a sign that you weren't called. It is often a sign that you were doing exactly what you were called to do — loving hard children with everything you had.",
  },
  {
    name: "Daniel Akin",
    role: "President, Southeastern Baptist Theological Seminary",
    quote: "The church is called to be a family to the fatherless. Not just to support an agency, but to actually take children into their homes and lives.",
  },
  {
    name: "Jedd Medefind",
    role: "President, Christian Alliance for Orphan Care",
    quote: "Foster and adoptive families need more than encouragement — they need practical support, trained respite caregivers, and communities willing to share the weight of complex children.",
  },
];

const practices = [
  {
    title: "Respite Care: Taking It, Not Just Giving It",
    body: "Respite care — temporary relief for foster families — is essential for sustainability. Most states have formal respite care programs through the foster care agency; ask your caseworker. Informal respite through trained members of your church community is also effective. Regularly scheduled respite — even just one weekend a month — prevents burnout better than crisis respite after a family has already collapsed. If your church has a foster care ministry, respite provision is one of the highest-impact ways to support foster families.",
  },
  {
    title: "Trauma-Informed Therapy for the Entire Family",
    body: "Children in foster care typically need trauma-focused therapy; foster families often need their own support. Trauma-informed therapists who understand the dynamics of fostering — including secondary trauma, compassion fatigue, and attachment challenges — can support both the children and the caregivers. Many states provide therapy services for foster children at no cost; ask your caseworker about available resources.",
  },
  {
    title: "Foster Parent Support Groups and Networks",
    body: "The isolation of foster parenting — the confidentiality requirements, the social difficulty of explaining why a child suddenly disappeared from your family, the exhaustion that makes social connection hard — is profound. Foster parent support groups, both in-person and online, provide community with people who understand from the inside. The Christian Alliance for Orphans (cafo.org) connects churches and individuals committed to orphan care. Your state foster care agency also typically offers support groups.",
  },
  {
    title: "Advocating Within the System",
    body: "Foster parents are often frustrated — justifiably — by a child welfare system that sometimes makes decisions that seem harmful to the children they love. Learning to advocate effectively within the system — for services, for stable placements, for children's educational needs, for adoption when appropriate — is a skill that can be developed. Legal advocates for foster children and Court Appointed Special Advocates (CASA) are resources. Document everything; build relationships with caseworkers and judges; know the law.",
  },
  {
    title: "Honest Conversations About Capacity",
    body: "One of the most important practices is brutal honesty about capacity — with your spouse, with your family, with your agency. Taking another placement before you are ready, or keeping a child in your home when you have genuinely reached your limit, does not serve anyone. Saying 'we cannot continue' or 'we need a break' is not failure; it is truthfulness that allows the child to be placed with a family who has the resources to serve them well.",
  },
  {
    title: "Spiritual Practices for Depletion",
    body: "When you are depleted, typical spiritual practices can feel impossible. Shorter, honest prayers replace long devotionals. Lectio divina (slow reading of one short passage) replaces systematic Bible study. Walking prayer, contemplative presence, and the Jesus Prayer ('Lord Jesus Christ, Son of God, have mercy on me') provide sustenance when there is no capacity for more. God meets the burned-out caregiver at their actual level of depletion — not at the level they imagine they should be at.",
  },
];

const scriptures = [
  {
    ref: "James 1:27",
    text: "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress and to keep oneself from being polluted by the world.",
  },
  {
    ref: "Isaiah 40:29-31",
    text: "He gives strength to the weary and increases the power of the weak... those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
  },
  {
    ref: "Matthew 25:40",
    text: "The King will reply, 'Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.'",
  },
  {
    ref: "Psalm 127:3",
    text: "Children are a heritage from the Lord, offspring a reward from him.",
  },
  {
    ref: "1 Kings 19:5",
    text: "Then he lay down under the bush and fell asleep. All at once an angel touched him and said, 'Get up and eat.'",
  },
  {
    ref: "Galatians 6:9",
    text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
  },
];

const JOURNAL_KEY = "vine_foster_parent_burnout_entries";

interface JournalEntry {
  id: string;
  date: string;
  text: string;
}

const videos = [
  { videoId: "4Eg_di-O8nM", title: "God Is Working – Elevation Church" },
  { videoId: "hJkLBPIbZr4", title: "Strength for the Weary – Steven Furtick" },
  { videoId: "sIaT8Jl2zpI", title: "You Say – Lauren Daigle" },
  { videoId: "7_CGP-12AE0", title: "The Story of the Bible – BibleProject" },
];

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
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #1a0a2e 0%, #0d0618 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `18px solid white`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function FosterParentBurnoutPage() {
  const [activeTab, setActiveTab] = useState("Theology");
  const [journalText, setJournalText] = useState("");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });

  function saveEntry() {
    if (!journalText.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), text: journalText.trim() };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setJournalText("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: PURPLE + "22", border: `1px solid ${PURPLE}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: PURPLE, marginBottom: 16 }}>
            Foster Care & Parenting
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            Foster Parent Burnout
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            You cannot pour from an empty cup. Burnout is the cost of deeply embodied love — and restoration is what makes the mission sustainable.
          </p>
        </div>

        {/* Resource Banner */}
        <div style={{ background: "#1a1a2e", border: `1px solid ${PURPLE}66`, borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
          <div style={{ fontWeight: 700, color: PURPLE, marginBottom: 8 }}>Support Resources</div>
          <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.8 }}>
            <strong style={{ color: TEXT }}>Christian Alliance for Orphans:</strong> cafo.org — church foster care networks<br />
            <strong style={{ color: TEXT }}>CASA:</strong> casaforchildren.org — court advocates for foster children<br />
            <strong style={{ color: TEXT }}>Confessions of an Adoptive Parent:</strong> confessionsofanadoptiveparent.com<br />
            <strong style={{ color: TEXT }}>988 Lifeline:</strong> call or text 988 — 24/7 crisis support
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${activeTab === tab ? PURPLE : BORDER}`, background: activeTab === tab ? PURPLE + "22" : "transparent", color: activeTab === tab ? PURPLE : MUTED, cursor: "pointer", fontSize: 14, fontWeight: activeTab === tab ? 600 : 400 }}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: PURPLE, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v) => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <div style={{ fontWeight: 700, color: TEXT, fontSize: 16 }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: 13, marginBottom: 14 }}>{v.role}</div>
                <blockquote style={{ margin: 0, padding: "14px 18px", borderLeft: `3px solid ${PURPLE}`, background: PURPLE + "11", borderRadius: "0 8px 8px 0", color: MUTED, lineHeight: 1.8, fontStyle: "italic" }}>
                  "{v.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {practices.map((p) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: PURPLE, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {scriptures.map((s) => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontStyle: "italic", fontSize: 16 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.7 }}>
              Write your honest grief. Write your hope. Write what you need. Your entries are saved locally on this device only.
            </p>
            <textarea
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              placeholder="Write here..."
              style={{ width: "100%", minHeight: 140, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, color: TEXT, fontSize: 15, resize: "vertical", boxSizing: "border-box", outline: "none" }}
            />
            <button
              onClick={saveEntry}
              style={{ marginTop: 12, padding: "10px 28px", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, fontWeight: 600, cursor: "pointer", fontSize: 15 }}
            >
              Save Entry
            </button>
            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 16 }}>
              {entries.map((entry) => (
                <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{entry.date}</div>
                  <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, whiteSpace: "pre-wrap" }}>{entry.text}</p>
                  <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: 12, fontSize: 12, color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {videos.map((v) => (
              <VideoEmbed key={v.videoId} {...v} />
            ))}
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
