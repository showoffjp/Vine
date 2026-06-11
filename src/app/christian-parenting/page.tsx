"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

type CPEntry = { id: string; date: string; challenge: string; principle: string; action: string };

export default function ChristianParentingPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CPEntry[]>(() => {
    try { const s = localStorage.getItem("vine_christianparenting_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [jChallenge, setJChallenge] = useState("");
  const [jPrinciple, setJPrinciple] = useState("");
  const [jAction, setJAction] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianparenting_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jChallenge.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), challenge: jChallenge, principle: jPrinciple, action: jAction }, ...prev]);
    setJChallenge(""); setJPrinciple(""); setJAction("");
  };

  const deleteEntry = (id: string) => setEntries(prev => prev.filter(e => e.id !== id));

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Family &amp; Relationships</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Christian Parenting
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Raising children in faith is one of the most sacred and demanding callings in the Christian life. This guide explores the theology, practices, and wisdom of passing faith to the next generation &mdash; with grace, prayer, and steady presence.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "0.45rem 1.1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
              borderColor: tab === t.id ? ACCENT : BORDER, background: tab === t.id ? ACCENT + "22" : "transparent", color: tab === t.id ? ACCENT : MUTED,
            }}>{t.label}</button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              {
                title: "Children as Heritage and Gift &mdash; Psalm 127:3",
                body: "Behold, children are a heritage from the Lord, the fruit of the womb a reward (Ps 127:3). Before strategies and techniques, Christian parenting rests on a theology of gift. Children are not self-made achievements, not burdens to be managed, not projects for parental ambition &mdash; they are entrusted gifts from God. This reframes everything. The question is not &ldquo;How do I produce a successful child?&rdquo; but &ldquo;How do I steward this person God has given me?&rdquo; The parent is a steward, not an owner. This posture of stewardship cultivates humility, awe, and dependence on God rather than parental performance anxiety.",
              },
              {
                title: "The Deuteronomy Mandate &mdash; Deuteronomy 6:4-9",
                body: "Hear, O Israel: The Lord our God, the Lord is one. You shall love the Lord your God with all your heart... and you shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way (Deut 6:4-7). The Shema is Israel&rsquo;s foundational confession, and it comes with a parenting mandate. Faith transmission is not delegated to institutions (synagogue, school, church) &mdash; it is first the work of parents in the dailiness of home life: at meals, in the car, at bedtime, in the middle of ordinary conversation. Faith is caught before it is taught.",
              },
              {
                title: "Discipline with Grace &mdash; Proverbs 13:24 and Hebrews 12:5-11",
                body: "Whoever spares the rod hates his son, but he who loves him is diligent to discipline him (Prov 13:24). Hebrews 12 uses the parent-child relationship to illuminate God&rsquo;s own discipline: the Lord disciplines the one he loves. Biblical discipline is not punishment for punishment&rsquo;s sake &mdash; it is formative love, the work of shaping a soul toward wisdom and virtue. The goal is not compliance but character. Discipline administered in anger, harshness, or contempt falls outside the biblical model. The corrective standard is the heavenly Father&rsquo;s own patient, loving firmness.",
              },
              {
                title: "Baptism, Faith, and the Household &mdash; Acts 16:31-33",
                body: "Believe in the Lord Jesus, and you will be saved, you and your household (Acts 16:31). The question of children and saving faith has divided traditions: paedobaptist traditions (Presbyterian, Lutheran, Anglican, Catholic) baptize infants as covenant children, trusting God&rsquo;s promise to families; credobaptist traditions (Baptist) baptize only upon profession of faith, emphasizing personal conversion. Both take seriously that children of believers grow up within the covenant household, surrounded by prayer, Word, and community. Both call children toward their own living faith &mdash; they differ on the sign and timing, not on the urgency of the child&rsquo;s own response to God.",
              },
              {
                title: "Passing Faith to the Next Generation &mdash; 2 Timothy 1:5",
                body: "I am reminded of your sincere faith, a faith that dwelt first in your grandmother Lois and your mother Eunice and now, I am sure, dwells in you as well (2 Tim 1:5). Paul traces Timothy&rsquo;s faith through three generations of women. Faith can be transmitted &mdash; not automatically or genetically, but through faithful, praying, exemplifying ancestors and parents. Research consistently shows that the single most powerful factor in whether a young person retains faith into adulthood is whether they have a parent (especially a father) who models authentic, practicing faith at home. The church cannot substitute for what only parents can give.",
              },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Practices</h2>
            {[
              "Establish a simple family devotion rhythm &mdash; even five minutes at dinner or bedtime. Read a short passage, ask one question (&ldquo;What do you think this means?&rdquo;), and pray together. Consistency over length: a brief daily rhythm forms more than an intense weekly event.",
              "Pray with your children by name and specifically &mdash; not only over meals but at bedtime, in moments of fear or grief, before hard days at school. Let them hear you intercede for them. Let them hear you confess and trust God with your own struggles. Children learn to pray by hearing authentic prayer.",
              "Narrate the Christian calendar into your home: Advent, Christmas, Lent, Easter, Pentecost. These seasons form a liturgical rhythm that shapes the imagination. The question &ldquo;What season are we in?&rdquo; teaches children to locate themselves in the story of God before any other story.",
              "When navigating screen time and culture, use the <em>ASK</em> framework: Affirm what is good (beauty, creativity, truth in culture); Scrutinize what is off (what values does this content assume?); Keep the conversation going &mdash; watching and discussing together is far more forming than prohibition alone.",
              "Practice family repentance and forgiveness &mdash; let children see you say &ldquo;I was wrong, I&rsquo;m sorry, will you forgive me?&rdquo; both to your spouse and to them. Children who grow up in families where repentance and forgiveness are practiced are far better equipped for the interior life of faith than those who only see parental authority asserted without humility.",
            ].map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ background: ACCENT + "22", color: ACCENT, fontWeight: 800, borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.9rem" }}>{i + 1}</div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: p }} />
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Voices</h2>
            {[
              {
                name: "John Piper",
                work: "What&rsquo;s the Difference? / Desiring God",
                quote: "The greatest thing you can do for your children is not protect them from all hardship but show them, in your own life, that God is more satisfying than anything the world offers. Let them see you treasure Christ above comfort, above reputation, above ease.",
                bio: "John Piper is the founder of Desiring God and a Reformed Baptist theologian whose concept of &ldquo;Christian Hedonism&rdquo; &mdash; the idea that God is most glorified when we are most satisfied in him &mdash; shapes his approach to parenting. He has written and spoken extensively on the father&rsquo;s role in spiritual formation and on the long-term work of modeling faith rather than merely instructing it.",
              },
              {
                name: "Paul David Tripp",
                work: "Parenting: 14 Gospel Principles That Can Radically Change Your Family",
                quote: "Your children don&rsquo;t need perfect parents. They need parents who are honest about their own need for grace, who model repentance, and who point consistently to the One who alone is perfect. Your weakness can become their greatest theological education.",
                bio: "Paul David Tripp is a pastor, counselor, and author whose work on parenting argues that most parenting problems are ultimately gospel problems &mdash; parents trying to control outcomes rather than trust the God who sovereignly works through all things, including family chaos. His framework focuses on the heart rather than behavior management and has deeply influenced Christian counseling approaches to family.",
              },
              {
                name: "Marjorie Thompson",
                work: "Family the Forming Center",
                quote: "The family is the first and most potent school of the soul. Before a child understands doctrine, she absorbs postures &mdash; whether God is feared or loved, whether prayer is duty or delight, whether forgiveness is extended or withheld. The atmosphere of a home forms more than the lessons given in it.",
                bio: "Marjorie Thompson is a spiritual director and author in the Presbyterian tradition whose <em>Family the Forming Center</em> is one of the most theologically rich treatments of home as a place of spiritual formation. She draws on the contemplative tradition to describe how the ordinary rhythms of family life &mdash; meals, sleep, play, conflict, repair &mdash; are the raw material of sanctification.",
              },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: TEXT }}>{v.name}</div>
                  <div style={{ color: ACCENT, fontSize: "0.85rem", marginTop: "0.15rem" }}><em dangerouslySetInnerHTML={{ __html: v.work }} /></div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>
                  &ldquo;<span dangerouslySetInnerHTML={{ __html: v.quote }} />&rdquo;
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.bio }} />
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Scripture</h2>
            {[
              { ref: "Deuteronomy 6:6-7", text: "And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise.", insight: "Faith transmission happens in the dailiness of life, not only in formal instruction." },
              { ref: "Psalm 127:3", text: "Behold, children are a heritage from the Lord, the fruit of the womb a reward.", insight: "Children are gift and trust, not achievement or project." },
              { ref: "Proverbs 22:6", text: "Train up a child in the way he should go; even when he is old he will not depart from it.", insight: "Formation is directional &mdash; it bends the will and imagination toward God&rsquo;s way over time." },
              { ref: "Ephesians 6:4", text: "Fathers, do not provoke your children to anger, but bring them up in the discipline and instruction of the Lord.", insight: "Biblical authority in the home is formative and gracious, never provoking or contemptuous." },
              { ref: "2 Timothy 1:5", text: "I am reminded of your sincere faith, a faith that dwelt first in your grandmother Lois and your mother Eunice and now, I am sure, dwells in you as well.", insight: "Faith can be transmitted across generations through faithful, praying parents and grandparents." },
              { ref: "Matthew 18:3", text: "&ldquo;Truly, I say to you, unless you turn and become like children, you will never enter the kingdom of heaven.&rdquo;", insight: "Jesus held up the child as a model of faith &mdash; receptive, trusting, dependent. Parenting flows in both directions." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 0.5rem" }} dangerouslySetInnerHTML={{ __html: s.text }} />
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.insight }} />
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Parenting Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What parenting challenge are you facing right now?</label>
                  <textarea
                    value={jChallenge}
                    onChange={e => setJChallenge(e.target.value)}
                    placeholder="Describe the situation honestly &mdash; what is hard, confusing, or discouraging..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What biblical principle speaks to this challenge?</label>
                  <textarea
                    value={jPrinciple}
                    onChange={e => setJPrinciple(e.target.value)}
                    placeholder="A passage, a truth, a promise that applies to what you are navigating..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What one action will you take this week?</label>
                  <textarea
                    value={jAction}
                    onChange={e => setJAction(e.target.value)}
                    placeholder="A concrete, specific step &mdash; a conversation, a prayer, a change in approach..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
              </div>
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.6rem 1.5rem", background: ACCENT, border: "none", borderRadius: 8, color: "#fff", cursor: "pointer", fontWeight: 700, fontSize: "0.93rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.82rem" }}>Delete</button>
                </div>
                {e.challenge && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Challenge</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.challenge}</p></div>}
                {e.principle && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Principle</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.principle}</p></div>}
                {e.action && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Action</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.action}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="ZlGiMWMO7tg" title="Christian Parenting Tips &mdash; Raising Children in Faith" />
            <VideoEmbed videoId="xBqLDHouMpk" title="Raising Godly Children &mdash; Biblical Principles for Parents" />
            <VideoEmbed videoId="4Eg_di-O8nM" title="Family Devotions &mdash; A Practical Guide for Christian Homes" />
            <VideoEmbed videoId="sUUKxHEBFYU" title="Christian Discipline &mdash; Grace-Based Parenting in the Bible" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
