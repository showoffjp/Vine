"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "The Pain of Infertility Is Biblical, Not Faithless",
    verse: "1 Samuel 1:10",
    text: "\"In her deep anguish Hannah prayed to the LORD, weeping bitterly.\" Hannah's story is one of the most honest depictions of infertility grief in any literature. She wept bitterly. She was misunderstood by her husband. She was accused of drunkenness at prayer by the priest. And God heard her. Hannah's anguish is not treated as faithlessness in the text — it is prayer. The grief of infertility does not disqualify from God's attention.",
  },
  {
    title: "Children Are a Gift, Not a Right",
    verse: "Psalm 127:3",
    text: "\"Children are a heritage from the LORD, offspring a reward from him.\" This verse has sometimes been weaponized against the childless, as if those without children have been withheld a reward they deserved. But a gift is not an entitlement — its absence is grief, not punishment. The theology of children as gift means that those who never receive this particular gift are not being judged; they are in the company of many beloved figures in Scripture.",
  },
  {
    title: "Childlessness Is Not Spiritual Incompleteness",
    verse: "Isaiah 56:3–5",
    text: "\"Let no eunuch complain, 'I am only a dry tree.' For this is what the LORD says: 'To the eunuchs who keep my Sabbaths, who choose what pleases me and hold fast to my covenant — to them I will give within my temple and its walls a memorial and a name better than sons and daughters.'\" God explicitly addresses those who will never have biological children and declares that their lives are not diminished. Their legacy is different — not lesser.",
  },
  {
    title: "The Church Often Wounds Without Knowing It",
    verse: "Proverbs 12:18",
    text: "\"The words of the reckless pierce like swords, but the tongue of the wise brings healing.\" Baby dedications, Mother's Day services, constant pregnancy announcements, unsolicited advice about prayer and relaxing and adoption — all of these can pierce the heart of someone walking through infertility. The church rarely wounds intentionally. It wounds through theological assumption and inattention to who is in the room.",
  },
  {
    title: "Not Every Story Ends with the Longed-For Child",
    verse: "Hebrews 11:39",
    text: "\"These were all commended for their faith, yet none of them received what had been promised.\" The faith chapter of Hebrews names people who lived and died without receiving what they had been promised. This is not failure — it is faith. Some infertility stories do not end with a baby. The church must make space for the faith of those whose stories end differently, not just those whose stories end with the miracle.",
  },
];

const voices = [
  {
    id: 1,
    name: "Sheridan Voysey",
    role: "Author, Resurrection Year; Radio Broadcaster",
    quote: "When God doesn't answer the prayer the way you prayed it, you have to find out who God is in the silence — and that is the most important theological work you will ever do.",
    bio: "Voysey and his wife Merryn lived through ten years of infertility and failed IVF before eventually closing the chapter on biological parenthood. His memoir Resurrection Year is a rare honest account of grieving a hope without closure.",
  },
  {
    id: 2,
    name: "Beth Vogt",
    role: "Novelist, Infertility Speaker",
    quote: "The church told me God would give me the desires of my heart. Nobody prepared me for the possibility that my heart might need to be changed.",
    bio: "Vogt has written and spoken publicly about navigating infertility as a woman in evangelical culture, where the assumption that God rewards faith with biological children can cause devastating theological harm.",
  },
  {
    id: 3,
    name: "Dr. William Cutrer",
    role: "OB/GYN, Author of The Infertility Companion",
    quote: "Infertility is a medical diagnosis with profound spiritual implications — and Christians deserve both good medicine and good theology, not forced to choose.",
    bio: "Cutrer has provided one of the most practically useful Christian treatments of infertility — covering the medical, ethical, emotional, and theological dimensions with unusual care and depth.",
  },
  {
    id: 4,
    name: "Lore Ferguson Wilbert",
    role: "Author, A Curious Faith; Writer on Calling and Childlessness",
    quote: "There is a form of fruitfulness that does not require a uterus — and the church must learn to honor it as clearly as it honors biological motherhood.",
    bio: "Wilbert has written thoughtfully about involuntary childlessness within the church, particularly for women whose identity and worth have been implicitly tied to biological reproduction.",
  },
];

const practices = [
  {
    icon: "💬",
    title: "Find Language for Your Grief",
    text: "Infertility grief is often disenfranchised — society and the church do not always recognize it as real loss. Finding language for what you are grieving — the child you imagined, the pregnancy you lost, the future you expected — is foundational to processing it.",
  },
  {
    icon: "🏥",
    title: "Get Thorough Medical Evaluation",
    text: "Both partners should be evaluated. Male factor infertility accounts for roughly half of all cases and is often overlooked. Seek a reproductive endocrinologist for thorough diagnosis before assuming treatment path. Knowledge of the actual cause matters for both medical and spiritual processing.",
  },
  {
    icon: "🤝",
    title: "Find Community with Others Who Understand",
    text: "RESOLVE (the National Infertility Association, resolve.org) offers support groups, peer mentors, and advocacy resources. Connecting with others who have lived the experience breaks the isolation that infertility almost always creates.",
  },
  {
    icon: "🙏",
    title: "Give Yourself Permission to Grieve Honestly",
    text: "Infertility involves repeated cycles of hope and loss — each negative test, each failed cycle. The accumulation of these losses is traumatic. Allow yourself to grieve each one. Do not rush to acceptance or meaning-making before the grief has been honored.",
  },
  {
    icon: "📅",
    title: "Protect Yourself on Hard Days",
    text: "Baby showers, Mother's Day, pregnancy announcements — these have their own specific pain. It is not faithless or bitter to take steps to protect yourself on hard days: limiting social media, skipping certain services, being honest with close friends about your limits.",
  },
  {
    icon: "🌳",
    title: "Explore All Forms of Fruitfulness",
    text: "Biological parenthood is one form of fruitfulness. Adoption, foster care, mentorship, godparenting, community care, creative work, and vocational investment are others. This exploration is not resignation — it is an expanded theology of calling that the church has often made too narrow.",
  },
];

const scriptures = [
  { verse: "Psalm 34:18", text: "\"The LORD is close to the brokenhearted and saves those who are crushed in spirit.\"" },
  { verse: "Romans 8:26", text: "\"In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.\"" },
  { verse: "John 15:8", text: "\"This is to my Father's glory, that you bear much fruit, showing yourselves to be my disciples.\"" },
  { verse: "Lamentations 3:22–23", text: "\"Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.\"" },
  { verse: "Isaiah 55:8–9", text: "\"'For my thoughts are not your thoughts, neither are your ways my ways,' declares the LORD. 'As the heavens are higher than the earth, so are my ways higher than your ways and my thoughts than your thoughts.'\"" },
  { verse: "Jeremiah 29:11", text: "\"For I know the plans I have for you,' declares the LORD, 'plans to prosper you and not to harm you, plans to give you hope and a future.'\"" },
];

type InfertilityEntry = {
  id: string;
  date: string;
  grief: string;
  holding: string;
  prayer: string;
};

export default function InfertilityChildlessnessFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<InfertilityEntry[]>([]);
  const [grief, setGrief] = useState("");
  const [holding, setHolding] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_infertilitychildlessness_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const entry: InfertilityEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      grief,
      holding,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_infertilitychildlessness_entries", JSON.stringify(updated));
    setGrief(""); setHolding(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_infertilitychildlessness_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌱</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>
            Infertility, Childlessness & Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For those navigating the grief of infertility or involuntary childlessness in a church culture that often equates fruitfulness with biological parenthood — honest theology, community, and pastoral care for every part of the journey.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Support: <strong>RESOLVE:</strong> resolve.org | 1-866-NOT-ALONE | <strong>988</strong> Suicide & Crisis Lifeline
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer",
              background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED,
              fontWeight: tab === t ? "bold" : "normal", fontSize: "0.875rem",
              textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{item.verse}</div>
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
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", color: "#fff", flexShrink: 0 }}>
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: TEXT }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.role}</div>
                  </div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", margin: "0 0 0.75rem" }}>
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
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${PURPLE}` }}>
                <div style={{ color: PURPLE, fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, marginBottom: "1rem", fontWeight: "bold" }}>Private Journal</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What grief am I carrying today about this journey?</label>
                <textarea value={grief} onChange={e => setGrief(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What am I still holding onto — hope, question, or surrender?</label>
                <textarea value={holding} onChange={e => setHolding(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer — even if the only honest word right now is Hannah's weeping:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.grief && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Grief:</strong> {e.grief}</p>}
                {e.holding && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Holding:</strong> {e.holding}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="E0JSXU0NLTE" title="Sheridan Voysey — Resurrection Year and Infertility" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Sheridan Voysey: Infertility, Grief, and Resurrection Hope</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Voysey on ten years of infertility, closing the chapter on biological parenthood, and finding resurrection on the other side</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="z2b5Fyz0aW4" title="Hannah's Prayer — Infertility in Scripture" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Hannah's Prayer: A Biblical Theology of Infertility</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Theological reflection on Hannah's story and what it teaches about grief, prayer, and God's response to the childless</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="Vp4BdnhBfzY" title="How the Church Can Better Support Those Walking Through Infertility" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>How the Church Wounds and How It Can Heal Those with Infertility</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Pastoral guidance on what churches do accidentally to harm those with infertility and what genuine support looks like</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="FmYx2HFkQYY" title="Involuntary Childlessness and the Theology of Fruitfulness" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Beyond Biological Parenthood: Theology of Fruitfulness</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Expanding the church's understanding of fruitfulness beyond biological children for those who remain childless</p>
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
