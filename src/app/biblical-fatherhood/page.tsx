"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", BLUE = "#3B82F6", TEXT = "#F2F2F8", MUTED = "#9898B3";

type FHEntry = { id: string; date: string; child: string; action: string; reflection: string };

const theology = [
  { title: "The Father Heart of God — What Earthly Fatherhood Is Supposed to Reflect", verse: "Luke 15:20", text: "In Luke 15:20, the father of the prodigal son saw him while he was still a long way off and ran to meet him. The father in Jesus's parable watches, waits, runs, embraces, and restores. This is not an incidental detail — it is a theological portrait. Every human father is a partial and imperfect image of the divine Father. Fatherhood is not merely a social role or a biological fact; it is a theological vocation, a living parable of God's character played out in the life of a child. The child who watches their father is, at some level, forming their understanding of who God is. This is the weight and the wonder of the calling." },
  { title: "Deuteronomy 6 — the Father as Primary Faith Educator", verse: "Deut 6:4-9", text: "Deuteronomy 6:4-9 commands fathers to impress the commandments of God on their children — to talk about them when sitting at home, walking along the road, lying down and getting up. The father is the primary locus of faith transmission in the Old Testament household. The failure to recover this conviction has left churches attempting to do for fathers what fathers should be doing themselves. Faith is transmitted not primarily through formal instruction but through ordinary conversation woven into ordinary days — a question at the dinner table, a comment during a walk, a prayer at bedtime. The father who does this is not doing something exceptional; he is doing what Deuteronomy always assumed he would do." },
  { title: "Ephesians 6:4 — Do Not Exasperate Your Children", verse: "Eph 6:4", text: "Paul's command to fathers in Ephesians 6:4 is first negative: do not exasperate your children. The positive follows — bring them up in the training and instruction of the Lord. But Paul leads with the warning. Fathers wound children through harshness, contempt, impossible expectations, and emotional absence. The absent father is the epidemic of the era, and its documented spiritual consequences are severe: sons who struggle to trust God as Father, daughters who look for approval in destructive places. What exasperation looks like is worth examining honestly: it is not only anger; it is also the father who is physically present but emotionally unavailable, the father who praises only performance, the father who never says the words." },
  { title: "The Blessing — What Fathers Are Called to Speak Over Their Children", verse: "Gen 48-49", text: "The patriarchal blessings in Genesis 27, 48, and 49 are among the most emotionally charged scenes in the Old Testament. The power of a father's spoken blessing is documented in Scripture and confirmed by psychology. The son or daughter who never received their father's explicit blessing spends their life looking for it. What it means to bless your child is specific: it is not generic encouragement but named, particular affirmation of who this child is and what they are called to become. The father who blesses his child over their identity and calling rather than their performance does the one thing most children need most and receive least." },
  { title: "Repentance and Fatherhood — Recovering From Failure", verse: "Joel 2:25", text: "The father who has been absent, harsh, emotionally withholding, or unfaithful can still change. The gospel applies to fatherhood failure as to every other failure, without exception. What repentance looks like in relationship with adult children requires courage: going to them and saying the words, not explaining or minimizing but owning. The prodigal father ran to his returning son; the returning son is sometimes an adult child who has been waiting for a father who is still far away. Repair is possible, though it takes time and is not guaranteed. The grace of God does not remove the consequences of fatherhood failure — but it does make recovery possible and the attempt required." },
];

const voices = [
  { name: "Paul Tripp", role: "Parenting: 14 Gospel Principles That Can Radically Change Your Family", quote: "The goal of Christian parenting is not well-behaved children. The goal is children whose hearts are captured by the grace of God. Behavior modification without heart transformation produces either rebellion or self-righteousness — neither of which is the gospel. The parent who understands this stops trying to manage behavior and starts pleading with God to change hearts — starting with their own.", bio: "Paul Tripp's Parenting reframes the entire enterprise. His central argument is that parents are not primarily behavioral engineers but instruments of grace in the lives of their children. The parent's own ongoing need for the gospel is not a liability — it is what makes them credible witnesses to the grace they are commending. One of the most important books any father can read." },
  { name: "John Eldredge", role: "Fathered by God", quote: "Every man carries a wound from his father — from absence, harshness, disappointment, or simply inadequacy. And the wound asks a question that every man spends his life trying to answer: Do I have what it takes? The good news is that God is the Father every man needed and never had. He initiates, he calls out, he affirms. The healing of the father wound is not therapy — it is encounter with the Father who was always there.", bio: "Fathered by God addresses the wound that underlies so much of men's struggle — the father wound. Eldredge argues that God himself takes men through a series of developmental stages that the human father was meant to initiate but in most cases did not. Understanding this wound is essential for any father who does not want to pass it to the next generation." },
  { name: "Robert Lewis", role: "Raising a Modern-Day Knight", quote: "A boy does not become a man by age or biology — he becomes a man when the men in his life say he has. What boys need most from their fathers is not comfort but a challenge — a code to live by, a cause worth dying for, and the word from their father that they are ready for both. The absence of this initiation leaves boys in permanent adolescence, looking for the affirmation their fathers never gave.", bio: "Raising a Modern-Day Knight focuses specifically on what fathers owe their sons as they pass through adolescence: a challenge, a code, and a cause. Lewis argues that the crisis of male adolescence is substantially a crisis of fatherhood — boys who have never been told what it means to be a man, who have never been called to anything larger than themselves, and who have never received the blessing their fathers were always supposed to give." },
];

const practices = [
  { icon: "🕐", title: "The Weekly One-on-One", text: "Intentional individual time with each child weekly — undivided attention, no devices, chosen by the child. It does not need to be long or elaborate. What it communicates is irreplaceable: you are worth my undivided attention; I am interested in you specifically, not generically. This practice, done consistently over years, builds the relational equity that makes honest conversation possible when it is desperately needed in adolescence." },
  { icon: "🙌", title: "The Spoken Blessing Practice", text: "Speaking specific, named affirmation over each child regularly — not only when they perform well, but over their character, their identity, and their calling. The blessing is not generic praise; it is a father seeing his child and saying what he sees. This practice is countercultural and will feel awkward at first. Do it anyway. The child who hears their father speak blessing over them specifically and repeatedly builds an internal foundation that no external pressure can easily dismantle." },
  { icon: "📖", title: "Family Devotions", text: "A simple, age-appropriate rhythm of Scripture, prayer, and honest conversation as a family. It does not need to be long — ten minutes done consistently is worth more than an hour done occasionally. The father who leads this practice is doing what Deuteronomy 6 always assumed: taking primary responsibility for the spiritual formation of his household. The goal is not information transfer but habit formation — making faith a household practice rather than a weekly event." },
  { icon: "🙏", title: "The Apology Practice", text: "Modeling repentance to your children when you fail them is one of the most powerful things a father can do. When you lose your temper, dismiss them unfairly, or break a promise, go back and say the words: I was wrong, I am sorry, will you forgive me. This does not undermine your authority — it establishes your credibility. The father who apologizes well teaches his children that failure is not final and that relationships can be repaired. He also shows them that the gospel he professes actually governs his life." },
  { icon: "🎯", title: "The Rite of Passage", text: "Creating intentional transitions from childhood to adolescence and from adolescence to adulthood: a marked moment, a spoken word, a challenge given and received. The culture has largely abandoned rites of passage, leaving boys and girls to find their own transitions through peer pressure and social media. The father who creates a meaningful rite of passage for each child at key developmental moments does something deeply primal and deeply needed: he says, I see who you are becoming, and I call you forward into it." },
];

const scriptures = [
  { verse: "Deut 6:6-7", text: "These commandments that I give you today are to be on your hearts. Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up." },
  { verse: "Eph 6:4", text: "Fathers, do not exasperate your children; instead, bring them up in the training and instruction of the Lord." },
  { verse: "Ps 103:13", text: "As a father has compassion on his children, so the LORD has compassion on those who fear him." },
  { verse: "Prov 22:6", text: "Start children off on the way they should go, and even when they are old they will not turn from it." },
  { verse: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him." },
  { verse: "Mal 4:6", text: "He will turn the hearts of the parents to their children, and the hearts of the children to their parents; or else I will come and strike the land with total destruction." },
];

const videos = [
  { id: "XHHF3DPHFPA", title: "Biblical Fatherhood — What God Calls Fathers To Be" },
  { id: "q5vJiNSfBCo", title: "The Father Wound — John Eldredge on Fathered by God" },
  { id: "MOH8a5PiYjo", title: "Deuteronomy 6 and the Father as Faith Leader" },
  { id: "tEpJzN9T7xQ", title: "Raising a Modern-Day Knight — Rites of Passage for Sons" },
];

export default function BiblicalFatherhoodPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<FHEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_fatherhood_entries") ?? "[]"); } catch { return []; }
  });
  const [jChild, setJChild] = useState("");
  const [jAction, setJAction] = useState("");
  const [jReflection, setJReflection] = useState("");

  useEffect(() => { localStorage.setItem("vine_fatherhood_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jChild.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), child: jChild, action: jAction, reflection: jReflection }, ...prev]);
    setJChild(""); setJAction(""); setJReflection("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Parenting &amp; Family Faith</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Biblical Fatherhood</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>What it means to be a godly father in the 21st century — the theology of fatherhood, voices that will shape your practice, and habits that build a legacy.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? BLUE : BORDER}`, background: tab === t.id ? BLUE + "22" : "transparent", color: tab === t.id ? BLUE : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: BLUE, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem" }}>{p.title}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: BLUE, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${BLUE}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: BLUE, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Your Fatherhood</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to think honestly and prayerfully about your growth as a father.</p>
            {[
              { label: "Child — which child you are reflecting on", val: jChild, set: setJChild },
              { label: "Action — a specific fathering action you took or are planning", val: jAction, set: setJAction },
              { label: "Reflection — what you are learning about yourself as a father", val: jReflection, set: setJReflection },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: BLUE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: BLUE }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: BLUE, fontWeight: 600 }}>Child:</span> {e.child}</p>
                      {e.action && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: BLUE, fontWeight: 600 }}>Action:</span> {e.action}</p>}
                      {e.reflection && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: BLUE, fontWeight: 600 }}>Reflection:</span> {e.reflection}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: BLUE }}>{v.title}</h3>
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
