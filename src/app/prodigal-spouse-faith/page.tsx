"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Grief of a Covenant Refused",
    verse: "Hosea 2:2",
    text: "\"Plead with your mother, plead — for she is not my wife, and I am not her husband.\" God himself has experienced the rejection of a covenant spouse. Hosea's marriage to the unfaithful Gomer was a lived parable of God's relationship with Israel. When your spouse walks away from faith, from the marriage, from the promises they made, you are not alone in that grief. God knows it from the inside."
  },
  {
    title: "You Cannot Carry Another Person's Faith",
    verse: "Ezekiel 18:20",
    text: "\"The soul who sins shall die. The son shall not suffer for the iniquity of the father, nor the father suffer for the iniquity of the son. The righteousness of the righteous shall be upon himself, and the wickedness of the wicked shall be upon himself.\" Each person stands before God in their own faith or faithlessness. You cannot believe for your spouse, repent for them, or compel their return. Their choices are their own before God. Your faithfulness is yours."
  },
  {
    title: "The Praying Spouse Is Not Helpless",
    verse: "James 5:16",
    text: "\"The prayer of a righteous person has great power as it is working.\" The praying spouse may feel entirely powerless. But intercession is not passivity — it is the most direct engagement possible with the God who can reach a prodigal where no human can. Prayer is not self-soothing; it is the actual application of the greatest power available to you."
  },
  {
    title: "Holy Sorrow Without Bitterness",
    verse: "Hebrews 12:15",
    text: "\"See to it that no one fails to obtain the grace of God; that no root of bitterness springs up and causes trouble, and by it many become defiled.\" The waiting spouse is at high risk for bitterness — a grief that calcifies into a permanent posture of resentment. Holy sorrow mourns what is lost without becoming poison. Bitterness destroys the person who holds it even more than the person it is directed at. Guard against it actively."
  },
  {
    title: "The Question of When to Stay",
    verse: "1 Corinthians 7:15-16",
    text: "\"But if the unbelieving partner separates, let it be so. In such cases the brother or sister is not enslaved. God has called you to peace. For how do you know, wife, whether you will save your husband?\" Paul's pastoral instruction is honest: you do not know whether you will save your spouse. Stay in the marriage where it is safe and possible. But do not sacrifice your own soul on the altar of someone else's refusal to return."
  }
];

const voices = [
  {
    id: "v1", name: "Gary Thomas", role: "Author, 'Sacred Marriage' and 'Cherish'",
    quote: "The praying spouse who has been faithful for years in a difficult marriage is practicing a sanctifying discipline that most Christians will never know. It is not wasted. It is forming you.",
    bio: "Gary Thomas's theology of marriage as a crucible of sanctification speaks directly to the prodigal-spouse situation. His book 'Sacred Marriage' argues that marriage's primary purpose is not happiness but holiness — a perspective that reframes what it means to stay when staying is hard."
  },
  {
    id: "v2", name: "Leslie Vernick", role: "Counselor, Author of 'The Emotionally Destructive Marriage'",
    quote: "Staying in a marriage does not always mean staying silent about what is wrong. Faithful love includes honest truth-telling, clear limits, and sometimes protective separation.",
    bio: "Leslie Vernick is essential for distinguishing a prodigal spouse situation from an abusive one. Her work on emotionally destructive marriages provides a framework for when the faithful spouse's responsibility is to stay and when it is to set protective limits or leave."
  },
  {
    id: "v3", name: "Gretchen Ronnevik", role: "Author, 'Ragged: Spiritual Disciplines for the Spiritually Exhausted'",
    quote: "You cannot pour from an empty vessel. The spouse who is faithful in a hard marriage needs to receive as much as they give — from God, from community, from rest.",
    bio: "Gretchen Ronnevik writes about the exhaustion of sustained spiritual faithfulness in difficult circumstances. Her work is particularly relevant to spouses who have been faithful in hard marriages for years and whose own spiritual and emotional reserves are depleted."
  },
  {
    id: "v4", name: "Paul David Tripp", role: "Author, 'What Did You Expect?'",
    quote: "Every marriage is a marriage between two sinners who need grace. The prodigal spouse situation does not exempt either person from that reality — but it concentrates the weight on the one who stays.",
    bio: "Paul David Tripp's 'What Did You Expect?' is one of the most pastorally honest books on marriage difficulty. His theological grounding helps the faithful spouse resist the temptation toward either bitter self-pity or naïve optimism, holding instead to a realistic, gospel-centered hope."
  }
];

const practices = [
  {
    icon: "📿",
    title: "Intercessory Prayer as a Discipline",
    text: "Commit to consistent intercessory prayer for your spouse — not as emotional management but as genuine faith that God can reach the person you cannot. Keep a prayer journal specifically for this. Record what you are asking for, what you observe, and where you sense God at work."
  },
  {
    icon: "🧠",
    title: "Your Own Therapy",
    text: "The faithful spouse in a prodigal-spouse marriage needs their own therapist — not couples therapy (which requires both parties) but individual therapy to process grief, maintain emotional health, and think clearly about difficult decisions. Do not neglect this."
  },
  {
    icon: "🫂",
    title: "Community Who Knows the Full Story",
    text: "Find at least two or three people who know the full truth of your situation and can provide honest, informed support. Not people who will simply tell you what you want to hear, and not people who will immediately tell you to leave — people who can hold the complexity with you."
  },
  {
    icon: "📏",
    title: "Know the Difference Between Faithfulness and Enabling",
    text: "Staying in the marriage is different from accepting destructive behavior without limit. Faithfulness to your spouse's long-term good may include consequences for behavior that is harmful to you or your children. Consult a Christian counselor about what appropriate limits look like in your specific situation."
  },
  {
    icon: "✝️",
    title: "Your Own Discipleship — Not Just Theirs",
    text: "It is easy for the faithful spouse to lose their own faith in the labor of maintaining a marriage to someone who has left it. Protect your own spiritual life: your own prayer, worship, scripture, and community that is not organized around the crisis of your spouse's faith. You matter before God independently of your spouse."
  },
  {
    icon: "🕊️",
    title: "Prepare for Both Outcomes",
    text: "Some prodigals return. Many do not. Wisdom requires preparing spiritually and practically for both. This is not faithlessness — it is realism. Know what your limits are, what your resources are, and what your plan is if the situation does not change. That preparation does not prevent the return you are hoping for."
  }
];

const scriptures = [
  { verse: "Hosea 2:14", text: "Therefore, behold, I will allure her, and bring her into the wilderness, and speak tenderly to her." },
  { verse: "James 5:16", text: "Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working." },
  { verse: "1 Corinthians 7:15-16", text: "But if the unbelieving partner separates, let it be so. In such cases the brother or sister is not enslaved. God has called you to peace. For how do you know, wife, whether you will save your husband?" },
  { verse: "Hebrews 12:15", text: "See to it that no one fails to obtain the grace of God; that no root of bitterness springs up and causes trouble, and by it many become defiled." },
  { verse: "Lamentations 3:21-23", text: "But this I call to mind, and therefore I have hope: The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness." },
  { verse: "1 Peter 3:1", text: "Likewise, wives, be subject to your own husbands, so that even if some do not obey the word, they may be won without a word by the conduct of their wives." }
];

type PsEntry = { id: string; date: string; grief: string; prayer: string; boundary: string };

export default function ProdigalSpouseFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PsEntry[]>([]);
  const [grief, setGrief] = useState("");
  const [prayer, setPrayer] = useState("");
  const [boundary, setBoundary] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_prodigalspousefaithj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const entry: PsEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), grief, prayer, boundary };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_prodigalspousefaithj_entries", JSON.stringify(updated));
    setGrief(""); setPrayer(""); setBoundary("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_prodigalspousefaithj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>💍</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>The Prodigal Spouse</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For the spouse left behind — married to someone who has walked away from faith, from the marriage, or from both — trying to remain faithful when the covenant is being refused.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Support:</strong> 988 Lifeline (call/text 988) &bull; Focus on the Family: 1-855-771-4357 &bull; DV Hotline: 1-800-799-7233 &bull; Crisis Text: 741741
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`,
              background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED,
              cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize"
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ fontSize: "1rem", fontWeight: "bold", color: TEXT }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", margin: "0 0 0.75rem" }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.8rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem", color: TEXT }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: TEXT }}>Faithful Spouse Journal</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What grief am I carrying today about my spouse?</label>
                  <textarea value={grief} onChange={e => setGrief(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What am I praying for my spouse today?</label>
                  <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What limit or boundary do I need to hold for my own wellbeing?</label>
                  <textarea value={boundary} onChange={e => setBoundary(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold", alignSelf: "flex-start" }}>
                  {saved ? "Saved" : "Save Entry"}
                </button>
              </div>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.5rem" }}>{e.date}</div>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "1rem" }}>×</button>
                </div>
                {e.grief && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.25rem" }}><strong>Grief:</strong> {e.grief}</p>}
                {e.prayer && <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.25rem" }}><strong>Prayer:</strong> {e.prayer}</p>}
                {e.boundary && <p style={{ color: PURPLE, fontSize: "0.85rem", margin: 0 }}><strong>Boundary:</strong> {e.boundary}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Sacred Marriage: Sanctification in Hard Marriages</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Gary Thomas on how difficult marriages form the people in them — and what faithful staying costs and gives</p>
              <VideoEmbed videoId="kfcVPh2VDhQ" title="Sacred Marriage: Sanctification in Hard Marriages" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>When Your Spouse Walks Away From Faith</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Pastoral guidance for the Christian whose spouse has left the faith</p>
              <VideoEmbed videoId="eBl7gT7gQ6g" title="When Your Spouse Walks Away From Faith" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Faithful Love Without Enabling</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Leslie Vernick on the difference between faithful love and destructive accommodation</p>
              <VideoEmbed videoId="G5gLrHClpKQ" title="Faithful Love Without Enabling" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>The Power of Intercessory Prayer</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>The prayer of the faithful spouse as the most powerful thing available in an impossible situation</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="The Power of Intercessory Prayer" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
