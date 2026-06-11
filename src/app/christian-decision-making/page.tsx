"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#3B82F6", TEXT = "#F2F2F8", MUTED = "#9898B3";

type DECEntry = { id: string; date: string; decision: string; counsel: string; peace: string };

export default function ChristianDecisionMakingPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DECEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christiandecision_entries") ?? "[]"); } catch { return []; }
  });
  const [jDecision, setJDecision] = useState("");
  const [jCounsel, setJCounsel] = useState("");
  const [jPeace, setJPeace] = useState("");

  useEffect(() => { localStorage.setItem("vine_christiandecision_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jDecision.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), decision: jDecision, counsel: jCounsel, peace: jPeace }, ...prev]);
    setJDecision(""); setJCounsel(""); setJPeace("");
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
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Faith &amp; Life</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Making Decisions God&rsquo;s Way
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          God&rsquo;s will is not a tightrope you might fall off with one wrong choice. Scripture calls believers to trust in the Lord with all their heart (Prov 3:5-6) and to grow in wisdom &mdash; not to decode hidden messages. This guide walks through a biblical, wisdom-based approach to decisions large and small.
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
                title: "Three Senses of God&rsquo;s Will — Sovereign, Moral, Individual (Deut 29:29)",
                body: "The secret things belong to the Lord our God, but the things that are revealed belong to us and to our children forever. Theologians distinguish three senses of &ldquo;God&rsquo;s will.&rdquo; The sovereign (decretive) will is God&rsquo;s hidden plan that governs all that happens &mdash; it cannot be missed and is known only in hindsight. The moral (preceptive) will is God&rsquo;s revealed commands in Scripture &mdash; it can be disobeyed and is fully knowable. The individual will &mdash; a supposed detailed blueprint for each choice (this job, this house, this spouse) that we must discover in advance &mdash; is where much anxiety lives. Scripture never commands us to find such a blueprint before deciding. We are responsible for the revealed will; the secret will is God&rsquo;s business.",
              },
              {
                title: "Trust Over Technique — Proverbs 3:5-6",
                body: "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths. This beloved passage is often read as a promise of guidance signals, but its center is relational: wholehearted trust and acknowledgment of God in every sphere of life. &ldquo;He will make straight your paths&rdquo; is not a pledge to reveal the future but an assurance that the God-trusting life arrives where God intends. The command is not &ldquo;decode the path before walking&rdquo; but &ldquo;walk with the Lord and the path will be made straight.&rdquo; Decision making God&rsquo;s way is less a technique to master than a trust to inhabit.",
              },
              {
                title: "Wisdom-Based Decision Making vs. Mystical Guidance (Jas 1:5)",
                body: "If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him. Notice what James says God promises to give the deciding believer: not a sign, an inner voice, or a fleece &mdash; but wisdom. The dominant biblical pattern for decisions is sapiential: gather facts, weigh options against God&rsquo;s moral will, seek counsel, consider gifts and circumstances, pray for wisdom, and then choose freely within the wide field of the permissible. God can guide supernaturally &mdash; Acts records visions and direct words &mdash; but these are sovereign surprises, never techniques believers are commanded to seek before acting. Where Scripture has spoken, obey; where it is silent, be wise and free.",
              },
              {
                title: "Gideon&rsquo;s Fleece — Why It Is Not a Model (Judg 6:36-40)",
                body: "Gideon laid out a fleece and asked God for confirming signs &mdash; and God graciously answered. But read in context, the fleece is not a model of faith; it is a concession to weak faith. Gideon already had God&rsquo;s explicit word and commission (Judg 6:14-16); the fleece was a request for reassurance Gideon himself acknowledged might provoke God&rsquo;s anger (6:39). Jesus warned against sign-seeking (Matt 16:4), and putting God to the test is expressly forbidden (Deut 6:16). God&rsquo;s patience with Gideon shows his kindness to the doubting &mdash; not a method to imitate. When we already have God&rsquo;s revealed will and a field of wise options, manufacturing tests for God substitutes superstition for trust.",
              },
              {
                title: "Just Do Something — Decision Paralysis and Trusting God After Deciding (Phil 4:6-7)",
                body: "Kevin DeYoung&rsquo;s pointedly titled Just Do Something diagnoses a modern malady: believers paralyzed before good options, waiting for a certainty God never promised, treating &ldquo;discerning God&rsquo;s will&rdquo; as a spiritualized cover for indecision. His counsel: love God, obey his moral will, get wisdom, seek counsel, pray &mdash; then choose, and do not torture yourself afterward. Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God (Phil 4:6). After a decision made in faith, the believer rests in God&rsquo;s sovereignty: even our imperfect choices cannot derail his plan (Rom 8:28). The peace of God guards the heart not because we chose perfectly, but because God reigns over the outcome.",
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
              "For any significant decision, walk the five converging factors in order of weight: Scripture (does any option violate God&rsquo;s moral will?), prayer (ask for wisdom, Jas 1:5), counsel (two or three wise believers who know you), circumstances (what is actually possible?), and peace (a settled conscience &mdash; the weakest signal alone, but meaningful in convergence).",
              "Write the decision down with the realistic options beneath it; for each option list how it serves God, others, and your responsibilities. Naming options on paper breaks the fog that fuels paralysis.",
              "Seek counsel the biblical way (Prov 15:22): ask advisers to challenge you, not to confirm you &mdash; and tell them the facts you are tempted to leave out.",
              "Refuse fleece-setting: do not invent tests for God (<em>if the phone rings by noon, I&rsquo;ll take the job</em>). Where God has spoken, obey; where he has not, choose wisely and freely.",
              "Set a decision deadline proportionate to the stakes. If after due diligence two options remain genuinely good, recognize that as freedom, not failure &mdash; choose one and thank God for both.",
              "After deciding, practice Philippians 4:6-7: commit the outcome to God with thanksgiving, refuse rumination over the road not taken, and trust his sovereignty over your imperfect choice (Rom 8:28).",
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
                name: "Kevin DeYoung",
                work: "Just Do Something",
                quote: "God&rsquo;s will for your life is pretty straightforward: Be holy like Jesus, by the power of the Spirit, for the glory of God... So the end of the matter is this: Live for God. Obey the Scriptures. Think of others before yourself. Be holy. Love Jesus. And as you do these things, do whatever else you like, with whomever you like, wherever you like.",
                bio: "Kevin DeYoung is a Reformed pastor and author whose short book Just Do Something has freed countless believers from decision paralysis. DeYoung argues that the conventional approach &mdash; treating God&rsquo;s will as a hidden blueprint to be divined before acting &mdash; is neither biblical nor liberating. God promises wisdom, not a road map; faithfulness in the revealed will is the path to freedom in everything else.",
              },
              {
                name: "Garry Friesen",
                work: "Decision Making and the Will of God",
                quote: "In nonmoral decisions, the goal of the believer is to make wise decisions on the basis of spiritual expediency... Where there is no command, God gives us freedom (and responsibility) to choose.",
                bio: "Garry Friesen, longtime professor at Multnomah University, wrote the landmark study that challenged the &ldquo;individual will&rdquo; tradition. His &ldquo;way of wisdom&rdquo; holds that within the moral will of God the believer is genuinely free, responsible to choose wisely rather than to decode a hidden dot of God&rsquo;s perfect will. The book reframed a generation&rsquo;s conversation about guidance around wisdom rather than signs.",
              },
              {
                name: "J.I. Packer",
                work: "Knowing God",
                quote: "Wisdom is the power to see, and the inclination to choose, the best and highest goal, together with the surest means of attaining it... The effect of his gift of wisdom is to make us more humble, more joyful, more godly, more quick-sighted as to his will.",
                bio: "J.I. Packer was a theologian whose classic Knowing God includes a penetrating treatment of divine guidance. Packer warned against treating guidance as inner impressions divorced from Scripture, noting that God&rsquo;s regular way of guiding is through the renewed mind applying biblical wisdom. The God who guides is first the God who is known &mdash; guidance flows from relationship, not technique.",
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
              { ref: "Prov 3:5-6", text: "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths." },
              { ref: "Jas 1:5", text: "If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him." },
              { ref: "Ps 119:105", text: "Your word is a lamp to my feet and a light to my path." },
              { ref: "Prov 15:22", text: "Without counsel plans fail, but with many advisers they succeed." },
              { ref: "Prov 16:9", text: "The heart of man plans his way, but the Lord establishes his steps." },
              { ref: "Phil 4:6-7", text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus." },
              { ref: "Rom 12:2", text: "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Decision Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What decision are you facing?</label>
                  <textarea
                    value={jDecision}
                    onChange={e => setJDecision(e.target.value)}
                    placeholder="Name the decision and the realistic options before you..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What do Scripture and wise counsel say?</label>
                  <textarea
                    value={jCounsel}
                    onChange={e => setJCounsel(e.target.value)}
                    placeholder="Relevant commands or principles, and the advice of believers who know you..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>Where do you sense peace &mdash; and what are you entrusting to God?</label>
                  <textarea
                    value={jPeace}
                    onChange={e => setJPeace(e.target.value)}
                    placeholder="Bring the outcome to God with thanksgiving (Phil 4:6-7) and note where your conscience is settled..."
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
                {e.peace && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Peace</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.peace}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="AzmYV8GNAIM" title="The Book of Proverbs &mdash; What Biblical Wisdom Looks Like" />
            <VideoEmbed videoId="lrsQ1tc-2wk" title="Ecclesiastes &mdash; Decisions in a World You Cannot Control" />
            <VideoEmbed videoId="Gab04dPs_uA" title="How Do I Know God&rsquo;s Will for My Life?" />
            <VideoEmbed videoId="xmFPS0f-kzs" title="The Gospel of the Kingdom &mdash; Living Under God&rsquo;s Reign" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
