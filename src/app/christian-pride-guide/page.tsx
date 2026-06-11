"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#E11D48", TEXT = "#F2F2F8", MUTED = "#9898B3";

type PRDEntry = { id: string; date: string; manifestation: string; root: string; remedy: string };

export default function ChristianPrideGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PRDEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christianpride_entries") ?? "[]"); } catch { return []; }
  });
  const [jManifestation, setJManifestation] = useState("");
  const [jRoot, setJRoot] = useState("");
  const [jRemedy, setJRemedy] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianpride_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jManifestation.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), manifestation: jManifestation, root: jRoot, remedy: jRemedy }, ...prev]);
    setJManifestation(""); setJRoot(""); setJRemedy("");
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
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Character &amp; Virtue</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Overcoming Pride
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Pride is the original sin &mdash; the root beneath every other fall. It is the only vice that makes every other virtue dangerous, turning prayer into performance and service into self-promotion. This guide maps pride&rsquo;s anatomy and the road out.
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
                title: "The Original Sin &mdash; Isaiah 14 and Genesis 3",
                body: "How you have fallen from heaven, morning star, son of the dawn! You said in your heart, I will ascend to the heavens; I will raise my throne above the stars of God... I will make myself like the Most High (Isaiah 14:12-14). Whether read as a literal account of Lucifer&rsquo;s fall or as a taunt against Babylon&rsquo;s king, Isaiah 14 identifies the shape of the primal sin: the creature grasping for the place of the Creator. In Genesis 3, the serpent&rsquo;s temptation follows the same architecture: you will be like God. Pride is not primarily the failure of self-esteem but the overreach of the creature into the territory of the Creator &mdash; the insistence on being the center, the judge, the self-sufficient one.",
              },
              {
                title: "Self-Deception &mdash; Obadiah 3-4 and Jeremiah 17:9",
                body: "The pride of your heart has deceived you... Though you soar like the eagle and make your nest among the stars, from there I will bring you down (Obadiah 3-4). The most dangerous feature of pride is that it is self-concealing: it convinces its host that the problem lies outside, not within. The heart is deceitful above all things (Jer 17:9) &mdash; and pride is particularly adept at disguising itself as discernment, standards, or righteous indignation. The proud person rarely identifies as proud; they are merely realistic about their superior insight. This is why the examination of pride requires outside perspective &mdash; a confessor, a trusted critic, or the slow work of prayerful self-examination.",
              },
              {
                title: "Pride in Ministry &mdash; Matthew 23:5-12",
                body: "They do all their deeds to be seen by others. They love the place of honor at feasts and the best seats in the synagogues... Whoever exalts himself will be humbled, and whoever humbles himself will be exalted. Jesus&rsquo;s critique of the Pharisees is not that they are irreligious but that their religion has become a vehicle for pride. Ministry pride is particularly insidious because it is hidden beneath apparently godly activity: teaching, fasting, giving, praying. The tell is the question: would I still do this if no one knew? Would I serve if it brought no recognition, no platform, no status? The Pharisees had confused the map (religious practice) with the destination (love of God and neighbor) &mdash; and pride was the confusion.",
              },
              {
                title: "Comparing Yourself to Others &mdash; Luke 18:9-14",
                body: "He also told this parable to some who trusted in themselves that they were righteous, and treated others with contempt: The Pharisee stood and was praying thus to himself, &lsquo;God, I thank You that I am not like other people.&rsquo; Social comparison is one of pride&rsquo;s primary mechanisms. The self elevates by diminishing others: I am not like them. The tax collector in the parable cannot even lift his eyes but beats his breast and says, God, be merciful to me, a sinner &mdash; and Jesus declares him justified, not the Pharisee. Comparative righteousness always locates the problem outside the self. The humble person refuses the comparison; they have too clear a sight of their own need to be occupied with the failings of others.",
              },
              {
                title: "Nebuchadnezzar&rsquo;s Fall &mdash; Daniel 4:28-37",
                body: "All this happened to King Nebuchadnezzar. At the end of twelve months he was walking on the roof of the royal palace of Babylon, and the king answered and said, Is not this great Babylon, which I have built by my mighty power as a royal residence and for the glory of my majesty? While the words were still in the king&rsquo;s mouth, a voice fell from heaven. Nebuchadnezzar&rsquo;s story is Scripture&rsquo;s most extended case study in the judgment of pride and the restoration through humility. His boast &mdash; I built this by my own power &mdash; is the archetypal pride claim. His humiliation &mdash; seven years of madness living as an animal &mdash; mirrors the judgment of Isaiah 14. But the story ends not in destruction but in restoration: when he lifted his eyes to heaven, his reason returned. Acknowledging the Most High reverses the fall of the proud.",
              },
              {
                title: "Repentance Patterns for Pride &mdash; James 4:1-10",
                body: "What causes quarrels and what causes fights among you? Is it not this, that your passions are at war within you? You desire and do not have, so you murder. Pride is not merely a disposition but an engine &mdash; it generates conflict, covetousness, slander, and competition. James gives a full prescription for pride&rsquo;s antidote: submit to God, resist the devil, draw near to God, cleanse your hands, purify your hearts, be wretched and mourn and weep. Repentance from pride is not a single moment but a reorientation &mdash; a consistent choosing of God&rsquo;s priority over one&rsquo;s own, and a willingness to take the low place repeatedly until the habit of humility forms.",
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
              "Ask a trusted friend, spouse, or pastor: in what areas of my life do you see pride operating? Commit to receiving the answer without defending yourself. Sit with what you hear for at least 24 hours before responding.",
              "When you catch yourself making a mental comparison &mdash; I&rsquo;m better than them in this way &mdash; stop and name it aloud (privately) as pride. Then name three things you genuinely respect or admire about the person you were comparing yourself to.",
              "Examine your service and ministry: are there things you do only when there is an audience? Identify one act of service you can do anonymously this week &mdash; without anyone knowing, including those you help if possible.",
              "Practice asking for help in an area where you are competent enough not to need it. Pride hoards self-sufficiency; asking for help is a small act of dependency that erodes the pride habit.",
              "Read James 4:1-10 as a diagnostic: identify the specific quarrels, competitions, or conflicts in your life and trace them back to what you are demanding that you are not getting. Bring those demands to God in honest prayer.",
              "When you receive recognition or praise, notice your internal response. Do you feel entitled to it? Do you feel that the recognition is too small? Do you compare it to what others receive? Name what you notice without judgment and bring it to God.",
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
                name: "C.S. Lewis",
                work: "Mere Christianity",
                quote: "According to Christian teachers, the essential vice, the utmost evil, is Pride. Unchastity, anger, greed, drunkenness, and all that, are mere fleabites in comparison: it was through Pride that the devil became the devil: Pride leads to every other vice: it is the complete anti-God state of mind.",
                bio: "C.S. Lewis was an Oxford and Cambridge literary scholar whose chapter on pride in Mere Christianity is perhaps the most widely-read Protestant treatment of the subject. Lewis identifies pride as competitive by nature &mdash; it is not the pleasure of having something but the pleasure of having more than others. His thesis that pride is the complete anti-God state of mind because it is the one disposition that is structurally incompatible with looking up has shaped how evangelical Christianity understands the root of sin.",
              },
              {
                name: "Jonathan Edwards",
                work: "Thoughts on the Revival",
                quote: "Spiritual pride is the main door by which the devil comes into the hearts of those who are zealous for the advancement of religion. It is the chief inlet of smoke from the bottomless pit, to darken the mind and mislead the judgment. It is the main handle by which Satan takes hold of religious persons, and the chief source of all the mischief that he introduces into the church.",
                bio: "Jonathan Edwards was an 18th-century American pastor and theologian widely regarded as the greatest mind in American Christian history. His treatment of spiritual pride &mdash; pride that attaches to genuine religious experience &mdash; in Thoughts on the Revival and Religious Affections remains the most searching analysis of this particular danger. Edwards was writing in the context of the First Great Awakening, where genuine spiritual renewal was being mixed with self-congratulatory enthusiasm.",
              },
              {
                name: "Bernard of Clairvaux",
                work: "The Steps of Humility and Pride",
                quote: "Pride is the love of one&rsquo;s own excellence... The proud man, wishing to appear great, makes himself great in his own estimation. He exalts himself above what he is; he claims more than is his due; he arrogates to himself what belongs to God. He holds himself to be what he is not &mdash; and this self-deception is the foundation of all his other sins.",
                bio: "Bernard of Clairvaux was a 12th-century French abbot and theologian who shaped medieval spirituality through his preaching, writing, and the Cistercian reform movement. His Steps of Humility and Pride (written as a mirror image, tracing the descent into pride so that readers recognize themselves) remains a classic of Christian moral psychology. Bernard identified twelve degrees of pride, from curiosity and levity to the presumption of sin &mdash; a taxonomy still recognizable today.",
              },
              {
                name: "John Stott",
                work: "The Cross of Christ",
                quote: "Every time we look at the cross Christ seems to say to us, &lsquo;I am here because of you. It is your sin I am bearing, your curse I am suffering, your debt I am paying, your death I am dying.&rsquo; Nothing in history or in the universe cuts us down to size like the cross... We are sinners who deserve to die; Christ is righteous and died for us. The cross levels us.",
                bio: "John Stott was a Church of England pastor and theologian who served for decades at All Souls Church, Langham Place, London, and became one of the most respected evangelical voices of the 20th century. His theology of the cross in The Cross of Christ grounds Christian ethics in the atonement: it is precisely because Christ bore what we deserved that the ground at the foot of the cross is level, and boasting is excluded (Romans 3:27).",
              },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: TEXT }}>{v.name}</div>
                  <div style={{ color: ACCENT, fontSize: "0.85rem", marginTop: "0.15rem" }}><em>{v.work}</em></div>
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
              { ref: "Proverbs 16:18", text: "Pride goes before destruction, and a haughty spirit before a fall." },
              { ref: "Isaiah 14:12-14", text: "How you have fallen from heaven, morning star, son of the dawn! You have been cast down to the earth... You said in your heart, &lsquo;I will ascend to the heavens; I will raise my throne above the stars of God&hellip; I will make myself like the Most High.&rsquo;" },
              { ref: "Daniel 4:30-32", text: "The king reflected and said, &ldquo;Is this not Babylon the great, which I myself have built as a royal residence by the might of my power and for the glory of my majesty?&rdquo; While the word was still in the king&rsquo;s mouth, a voice came from heaven: &ldquo;King Nebuchadnezzar, to you it is declared: sovereignty has been removed from you.&rdquo;" },
              { ref: "Proverbs 11:2", text: "When pride comes, then comes disgrace, but with the humble is wisdom." },
              { ref: "Romans 3:27", text: "Then what becomes of our boasting? It is excluded. By what kind of law? By a law of works? No, but by the law of faith." },
              { ref: "Luke 18:13-14", text: "But the tax collector, standing far off, would not even lift up his eyes to heaven, but beat his breast, saying, &ldquo;God, be merciful to me, a sinner!&rdquo; I tell you, this man went down to his house justified, rather than the other. For everyone who exalts himself will be humbled, but the one who humbles himself will be exalted." },
              { ref: "Galatians 6:3-4", text: "For if anyone thinks he is something, when he is nothing, he deceives himself. But let each one test his own work, and then his reason to boast will be in himself alone and not in his neighbor." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.text }} />
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Pride Examination Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>How is pride manifesting in you right now?</label>
                  <textarea
                    value={jManifestation}
                    onChange={e => setJManifestation(e.target.value)}
                    placeholder="Where are you comparing, competing, performing, or seeking to be seen..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What is the root desire or fear underneath this pride?</label>
                  <textarea
                    value={jRoot}
                    onChange={e => setJRoot(e.target.value)}
                    placeholder="What are you afraid of losing, or what do you desperately want to secure..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What is your remedy &mdash; what step of repentance or humility will you take?</label>
                  <textarea
                    value={jRemedy}
                    onChange={e => setJRemedy(e.target.value)}
                    placeholder="A confession, an apology, an act of service, a releasing of outcome..."
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
                {e.manifestation && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Manifestation</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.manifestation}</p></div>}
                {e.root && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Root</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.root}</p></div>}
                {e.remedy && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Remedy</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.remedy}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="oEKalxFODpE" title="C.S. Lewis on Pride: The Great Sin" />
            <VideoEmbed videoId="DqiGFaVUJ7c" title="Spiritual Pride: The Subtlest Danger in Ministry" />
            <VideoEmbed videoId="bvRy7SKDFEc" title="Nebuchadnezzar&rsquo;s Fall and the Humbling of the Proud &mdash; Daniel 4" />
            <VideoEmbed videoId="rmHfFaX4a9k" title="Overcoming Pride: The Path of Repentance and Humility" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
