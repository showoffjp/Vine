"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type WSDEntry = { id: string; date: string; decision: string; counsel: string; direction: string };

export default function ChristianWisdomPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<WSDEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christianwisdom_entries") ?? "[]"); } catch { return []; }
  });
  const [jDecision, setJDecision] = useState("");
  const [jCounsel, setJCounsel] = useState("");
  const [jDirection, setJDirection] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianwisdom_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jDecision.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), decision: jDecision, counsel: jCounsel, direction: jDirection }, ...prev]);
    setJDecision(""); setJCounsel(""); setJDirection("");
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
          Walking in Wisdom
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Biblical wisdom is not cleverness or accumulated facts but skill in living &mdash; the art of navigating reality in reverence before the God who made it. It begins with the fear of the LORD, grows through counsel and experience, and finds its fullness in Christ, the wisdom of God. This guide walks through its theology and practice.
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
                title: "Ask and It Will Be Given — Wisdom as Gift (James 1:5)",
                body: "If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him. The first and most startling claim of the New Testament about wisdom is that it is asked for, not merely acquired. God gives generously and without reproach &mdash; he does not scold us for needing what we were made to need. James adds one condition: ask in faith, without doubting (1:6), because wisdom is not a commodity God dispenses but a relationship of trust into which he invites us. The wise life begins not in the library but on the knees.",
              },
              {
                title: "The Fear of the LORD Is the Beginning of Wisdom (Proverbs 9:10)",
                body: "The fear of the LORD is the beginning of wisdom, and the knowledge of the Holy One is insight. This is the thesis statement of the entire wisdom tradition (cf. Prov 1:7; Job 28:28; Ps 111:10). The fear of the LORD is not cowering terror but rightly-ordered reverence: living as if God is actually God &mdash; the author of reality, the giver of the moral grain of the universe. Beginning means both starting point and foundation: every act of genuine wisdom rests on it, the way every line of a building rests on its foundation. A brilliant life built on the premise that there is no God to answer to is, in the Bible&rsquo;s vocabulary, folly &mdash; however impressive its achievements.",
              },
              {
                title: "Proverbs — Skill for the Art of Living",
                body: "The book of Proverbs is a training manual in chokmah &mdash; a Hebrew word used elsewhere for the skill of craftsmen who built the tabernacle (Exod 31:3). Wisdom is skill in the medium of everyday life: words, money, work, friendship, anger, sex, leadership. Proverbs personifies wisdom as a woman calling in the streets (Prov 1, 8, 9), present with God at creation &mdash; meaning the world has a grain, and wisdom is learning to work with that grain rather than against it. Crucially, proverbs are not promises but characterizations of how life generally works; that is why Proverbs sits beside Job and Ecclesiastes, which wrestle with the exceptions. Reading the genre rightly is itself an exercise in wisdom.",
              },
              {
                title: "Solomon — The Wisest Fool in Scripture (1 Kings 3-11)",
                body: "Asked by God what he wanted, young Solomon requested a discerning heart to govern your people and to distinguish between right and wrong (1 Kgs 3:9), and God gave him wisdom surpassing all others &mdash; the judgment between the two mothers (1 Kgs 3), the visit of the Queen of Sheba (1 Kgs 10), three thousand proverbs (1 Kgs 4:32). Yet Solomon&rsquo;s end is the Bible&rsquo;s sternest warning: his wives turned his heart after other gods (1 Kgs 11:4), and the kingdom split under his son. The lesson is sobering: wisdom is not a possession to be banked but a relationship to be kept. It is possible to dispense wisdom and not walk in it. The wisest man in Israel&rsquo;s history fell not from a deficit of insight but from a slow drift of the heart.",
              },
              {
                title: "Wisdom vs. Knowledge vs. Intelligence",
                body: "Scripture distinguishes what our culture conflates. Knowledge is the possession of true information; intelligence is the raw capacity to process it; wisdom is the skill and character to apply it rightly &mdash; the right thing, at the right time, in the right way, for the right reason. Knowledge puffs up, but love builds up (1 Cor 8:1). A person can be encyclopedic and foolish, or unlettered and profoundly wise. James offers the diagnostic: wisdom from above is first pure, then peaceable, gentle, open to reason, full of mercy and good fruits, impartial and sincere (Jas 3:17), while jealousy and selfish ambition mark a counterfeit wisdom that is earthly, unspiritual, demonic (Jas 3:15). The test of wisdom is not the brilliance of the argument but the meekness of the life (Jas 3:13).",
              },
              {
                title: "Decision-Making, Godly Counsel, and the Way of Trust (Proverbs 3:5-6; 11:14)",
                body: "Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths. A Christian framework for decisions weaves together several strands: Scripture (does God&rsquo;s revealed will already speak to this?), prayer (asking for wisdom per James 1:5), counsel (in an abundance of counselors there is safety &mdash; Prov 11:14), circumstances and providence, sanctified reason, and the peace of Christ ruling in the heart (Col 3:15). Seeking godly counsel deserves special emphasis: the fool is right in his own eyes, but a wise man listens to advice (Prov 12:15). Wisdom is communal &mdash; God rarely intends us to discern alone, and the willingness to submit a plan to people who may contradict it is itself a mark of the humility in which wisdom grows.",
              },
              {
                title: "Christ — The Wisdom of God (1 Corinthians 1:24)",
                body: "But to those who are called, both Jews and Greeks, Christ the power of God and the wisdom of God. Paul&rsquo;s claim is that wisdom is ultimately not a principle but a Person. The cross looks like folly to the world (1 Cor 1:18), yet in it God outwits human wisdom: the foolishness of God is wiser than men. In Christ are hidden all the treasures of wisdom and knowledge (Col 2:3); he is the one greater than Solomon (Matt 12:42); and the Gospels present him as wisdom incarnate &mdash; the sage whose parables, like proverbs, demand discernment, and whose life is the perfect skill of living in the fear of the LORD. To walk in wisdom is finally to walk with Jesus, and the truly wise person is the one who hears his words and does them &mdash; the builder on the rock (Matt 7:24).",
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
              "Ask first. Before researching, polling friends, or making lists, pray James 1:5 over the decision in front of you &mdash; specifically, expectantly, and in faith. Make asking God for wisdom your reflex rather than your last resort.",
              "Read a chapter of Proverbs a day. With thirty-one chapters, the book maps onto a month; read slowly, and copy out one verse each day that names something true about your actual life &mdash; your words, money, work, or anger.",
              "Build a circle of counselors. Identify two or three people who love God, know you, and will tell you the truth &mdash; and consult them <em>before</em> major decisions, not after. Practice submitting plans to people who are free to contradict them (Prov 11:14; 12:15).",
              "Use a decision framework. For a significant choice, walk deliberately through: What does Scripture say? What have I prayed? What do wise counselors advise? What do circumstances and providence suggest? What does sanctified reason conclude? Where is the peace of Christ (Col 3:15)?",
              "Audit for Solomon&rsquo;s drift. Wisdom is kept, not banked. Examine where small compromises &mdash; in attention, attachments, or appetites &mdash; are slowly turning your heart, and name them before they harden into direction (1 Kgs 11:4).",
              "Test your wisdom by James 3:17. Take a recent conflict or strong opinion and ask: was my contribution pure, peaceable, gentle, open to reason, full of mercy? The tone of your wisdom reveals its source.",
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
                name: "J.I. Packer",
                work: "Knowing God",
                quote: "Wisdom is the power to see, and the inclination to choose, the best and highest goal, together with the surest means of attaining it. Wisdom is, in fact, the practical side of moral goodness. As such, it is found in its fulness only in God.",
                bio: "J.I. Packer was a British-born theologian whose Knowing God has shaped generations of Christians. His chapter on God&rsquo;s wisdom and ours carefully distinguishes biblical wisdom from the demand to decode God&rsquo;s secret providence, arguing that wisdom is not knowing why everything happens but trusting the One who does &mdash; and living realistically, like the writer of Ecclesiastes, in the world as it actually is.",
              },
              {
                name: "Eugene Peterson",
                work: "Run with the Horses",
                quote: "Wisdom has to do with becoming skillful in honoring our parents and raising our children, handling our money and conducting our sexual lives, going to work and exercising leadership... Wisdom is the art of living skillfully in whatever actual conditions we find ourselves.",
                bio: "Eugene Peterson was a pastor, scholar, and translator of The Message whose lifelong project was rescuing spirituality from abstraction. His definition of wisdom as skill in everyday living &mdash; rooted in the Hebrew chokmah &mdash; insists that holiness is worked out in kitchens, offices, and checkbooks rather than only in sanctuaries.",
              },
              {
                name: "Charles Spurgeon",
                work: "Sermons",
                quote: "Wisdom is the right use of knowledge. To know is not to be wise. Many men know a great deal, and are all the greater fools for it. There is no fool so great a fool as a knowing fool. But to know how to use knowledge is to have wisdom.",
                bio: "Charles Spurgeon, the nineteenth-century Baptist preacher of London&rsquo;s Metropolitan Tabernacle, was famous for compressing theology into unforgettable aphorisms. His distinction between knowledge and its right use anticipates a culture drowning in information and starving for judgment, and his sermons return constantly to Christ as the believer&rsquo;s wisdom (1 Cor 1:30).",
              },
              {
                name: "Tim Keller",
                work: "God&rsquo;s Wisdom for Navigating Life",
                quote: "Wisdom is more than just obeying God&rsquo;s ethical norms; it is knowing the right thing to do in the 80 percent of life&rsquo;s situations in which the moral rules don&rsquo;t provide the clear answer.",
                bio: "Tim Keller was the founding pastor of Redeemer Presbyterian Church in New York City. His year of devotions in Proverbs frames wisdom as the competence Scripture gives for the vast territory of decisions &mdash; whom to marry, which job to take, what to say and when &mdash; where no commandment directly legislates, and where character formed by the fear of the LORD must do the navigating.",
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
              { ref: "James 1:5", text: "If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him." },
              { ref: "Proverbs 9:10", text: "The fear of the LORD is the beginning of wisdom, and the knowledge of the Holy One is insight." },
              { ref: "Proverbs 3:5-6", text: "Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths." },
              { ref: "Proverbs 11:14", text: "Where there is no guidance, a people falls, but in an abundance of counselors there is safety." },
              { ref: "1 Kings 3:9", text: "Give your servant therefore an understanding mind to govern your people, that I may discern between good and evil, for who is able to govern this your great people?" },
              { ref: "James 3:17", text: "But the wisdom from above is first pure, then peaceable, gentle, open to reason, full of mercy and good fruits, impartial and sincere." },
              { ref: "1 Corinthians 1:24", text: "But to those who are called, both Jews and Greeks, Christ the power of God and the wisdom of God." },
              { ref: "Colossians 2:2-3", text: "...Christ, in whom are hidden all the treasures of wisdom and knowledge." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Discernment Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What decision are you bringing before God?</label>
                  <textarea
                    value={jDecision}
                    onChange={e => setJDecision(e.target.value)}
                    placeholder="Name the actual choice in front of you, with its real options and stakes..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What counsel have you sought &mdash; from Scripture and from wise people?</label>
                  <textarea
                    value={jCounsel}
                    onChange={e => setJCounsel(e.target.value)}
                    placeholder="In an abundance of counselors there is safety (Prov 11:14). Who have you actually asked?"
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What direction do you sense, and what is your next step of trust?</label>
                  <textarea
                    value={jDirection}
                    onChange={e => setJDirection(e.target.value)}
                    placeholder="Trust in the LORD with all your heart... and he will make straight your paths (Prov 3:5-6)."
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
                {e.decision && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Decision</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.decision}</p></div>}
                {e.counsel && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Counsel</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.counsel}</p></div>}
                {e.direction && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Direction</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.direction}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="AzmYV8GNAIM" title="Overview: Proverbs — The Way of Wisdom" />
            <VideoEmbed videoId="lrsQ1tc-2wk" title="Overview: Ecclesiastes — Wisdom and the Limits of Life Under the Sun" />
            <VideoEmbed videoId="xQwnH8th_fs" title="Overview: Job — Wisdom When Life Doesn&rsquo;t Make Sense" />
            <VideoEmbed videoId="yiHf8klCCc4" title="Overview: 1 Corinthians — Christ, the Wisdom of God" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
