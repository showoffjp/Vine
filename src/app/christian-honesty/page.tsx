"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#3B82F6", TEXT = "#F2F2F8", MUTED = "#9898B3";

type HONEntry = { id: string; date: string; temptation: string; truth: string; commitment: string };

export default function ChristianHonestyPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<HONEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christianhonesty_entries") ?? "[]"); } catch { return []; }
  });
  const [jTemptation, setJTemptation] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jCommitment, setJCommitment] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianhonesty_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jTemptation.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), temptation: jTemptation, truth: jTruth, commitment: jCommitment }, ...prev]);
    setJTemptation(""); setJTruth(""); setJCommitment("");
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
          Honesty &amp; Integrity
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          The God of the Bible cannot lie, and his people are called to be truth-tellers in a world of spin. Integrity means being the same person in every room &mdash; in business, in marriage, online, and alone. This guide examines the ninth commandment, the small lies we excuse, and what it means to live without hypocrisy.
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
                title: "The Ninth Commandment — More Than Courtroom Perjury (Exod 20:16)",
                body: "You shall not bear false witness against your neighbor. The commandment&rsquo;s original setting is the courtroom, where a false witness could cost an innocent person their property, freedom, or life. But the tradition has always read it more broadly: the catechisms extend it to all lying, deceit, flattery, misrepresentation, and the failure to defend a neighbor&rsquo;s good name. Behind the commandment stands the character of God himself &mdash; a God who never lies (Titus 1:2; Num 23:19) and whose covenant words can be trusted absolutely. Truth-telling is therefore not merely an ethical rule but an act of imaging God; deception, conversely, speaks the devil&rsquo;s native language, for when he lies, he speaks out of his own character, for he is a liar and the father of lies (John 8:44).",
              },
              {
                title: "White Lies, Exaggeration, and the Erosion of Trust",
                body: "Most Christians do not commit perjury; they round up. The inflated resume line, the I&rsquo;m five minutes away sent from the driveway, the exaggerated story that gets a better laugh each telling, the compliment we do not mean, the excuse that shades the truth to protect our image &mdash; these are the respectable lies. Jesus&rsquo;s standard cuts through them: let what you say be simply Yes or No; anything more than this comes from evil (Matt 5:37). The deepest cost of small dishonesty is not any single lie but the erosion of the self: each white lie trains the heart to treat truth as negotiable when self-interest is at stake, and trains others to discount our words. Luke 16:10 states the principle: one who is faithful in very little is also faithful in much, and one who is dishonest in very little is also dishonest in much.",
              },
              {
                title: "Integrity in Business and Marriage — Honest Scales, Honest Hearts (Prov 11:1)",
                body: "A false balance is an abomination to the LORD, but a just weight is his delight. Scripture is strikingly concrete about commercial honesty: accurate weights and measures (Lev 19:35-36), wages paid on time (James 5:4), contracts honored even when costly &mdash; the one who swears to his own hurt and does not change (Ps 15:4). Padding an invoice, fudging a timesheet, misleading marketing, and quiet tax dishonesty all fall under the false balance. The same principle reaches into marriage, where honesty is the load-bearing wall: hidden spending, secret accounts, concealed habits, and edited histories hollow out a covenant from the inside. Spouses are called to walk in the light with one another (1 John 1:7) &mdash; not cruelty disguised as candor, but the refusal to build a shared life on managed images and curated truths.",
              },
              {
                title: "Confession, Psalm 15, and the Warning of Ananias and Sapphira (Ps 15; Acts 5:1-11)",
                body: "O LORD, who shall sojourn in your tent? ... He who walks blamelessly and does what is right and speaks truth in his heart (Ps 15:1-2). Psalm 15&rsquo;s portrait of the person who may dwell with God is dominated by speech-integrity: truth in the heart, no slander on the tongue, oaths kept even at personal cost. Confession is honesty&rsquo;s Godward face &mdash; if we confess our sins, he is faithful and just to forgive (1 John 1:9); the person who hides sin from God is lying to the only One who already knows. Ananias and Sapphira stand as the New Testament&rsquo;s severest warning: their sin was not keeping part of the money, which Peter says was theirs to keep, but performing a generosity they did not practice &mdash; you have not lied to man but to God (Acts 5:4). The story&rsquo;s target is religious image-management: the gap between the self we present to the church and the self we actually are.",
              },
              {
                title: "Speaking Truth in Love and Living Without Hypocrisy (Eph 4:15, 25)",
                body: "Speaking the truth in love, we are to grow up in every way into him who is the head, into Christ (Eph 4:15). Truth without love is a weapon; love without truth is sentimentality &mdash; Paul binds them together as the very mechanism of the church&rsquo;s maturity. Ten verses later he grounds honesty in our union with each other: having put away falsehood, let each one of you speak the truth with his neighbor, for we are members one of another (4:25) &mdash; lying to a fellow believer is the body deceiving itself. The Greek hypokrites originally meant a stage actor, one who speaks from behind a mask; Jesus reserved his sharpest words for religious performance (Matt 23). Integrity, from the Latin integer (whole, undivided), is the opposite of the mask: one undivided self before God, spouse, employer, church, and screen. Let love be genuine &mdash; literally, unhypocritical (Rom 12:9).",
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
              "Run a one-week truthfulness audit: each evening, review the day for every exaggeration, white lie, flattering untruth, or convenient omission. Do not rationalize &mdash; just name them. Most people are startled by the count.",
              "Practice Matthew 5:37 in small commitments: stop saying <em>I&rsquo;m almost there</em>, <em>I&rsquo;ll pray for you</em>, or <em>let&rsquo;s get coffee sometime</em> unless it is simply true. Let your yes be yes in the trivial things, and the large things will follow (Luke 16:10).",
              "Identify one place where honesty would cost you something &mdash; correcting an invoice, amending a return, confessing a concealed habit to your spouse, retracting an exaggerated claim &mdash; and do it this week. Psalm 15 commends the one who swears to his own hurt and does not change.",
              "Make confession a daily, specific practice: name actual sins to God in plain language rather than vague generalities, receiving 1 John 1:9 as a promise. Consider regular confession to a trusted believer as well (James 5:16).",
              "Audit your public image against your private reality &mdash; social media, church persona, professional self-presentation. Where Ananias-and-Sapphira gaps exist (performing virtues you do not practice), close the gap by changing the practice or retiring the performance.",
              "Before a hard truth-telling conversation, apply the Ephesians 4:15 test in both directions: Is it true (not just my frustration dressed as candor)? Is it loving (aimed at the other person&rsquo;s good, delivered so they can receive it)?",
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
                name: "Augustine of Hippo",
                work: "On Lying (De Mendacio)",
                quote: "When regard for truth has been broken down or even slightly weakened, all things will remain doubtful.",
                bio: "Augustine, the 4th-century bishop of Hippo, wrote two treatises on lying and took the rigorist position that a lie is never justified, even to save a life &mdash; because every lie wounds the speaker&rsquo;s relationship to the God who is Truth. Whatever one concludes about the hard cases, Augustine&rsquo;s core insight endures: trust is an ecosystem, and each deception pollutes the whole of it.",
              },
              {
                name: "Dietrich Bonhoeffer",
                work: "Ethics",
                quote: "It is only the cynic who claims to speak the truth at all times and in all places to all men in the same way... He dons the halo of the fanatical devotee of truth who can make no allowance for human weaknesses; but, in fact, he is destroying the living truth between men.",
                bio: "Dietrich Bonhoeffer, the German pastor-theologian executed for resisting Hitler, wrestled with truthfulness under a regime built on lies. His essay What Is Meant by Telling the Truth? argues that real truthfulness is not the cynic&rsquo;s indiscriminate disclosure but speech that honors God, the hearer, and the relationship &mdash; truth in love rather than truth as a bludgeon.",
              },
              {
                name: "Charles Spurgeon",
                work: "Sermons",
                quote: "A lie can travel half way around the world while the truth is putting on its shoes... Be true to your word, even if it be to your own hindrance; a Christian&rsquo;s bare word should be as good as another man&rsquo;s oath.",
                bio: "Charles Spurgeon, the 19th-century Baptist preacher, returned constantly to practical integrity &mdash; honest trade, kept promises, and the credibility of Christian witness. He saw plainly that the gospel&rsquo;s reputation rises and falls with the trustworthiness of the people who profess it: a believer whose word requires verification has already preached a counter-sermon.",
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
              { ref: "Exodus 20:16", text: "You shall not bear false witness against your neighbor." },
              { ref: "Psalm 15:1-2", text: "O LORD, who shall sojourn in your tent? Who shall dwell on your holy hill? He who walks blamelessly and does what is right and speaks truth in his heart." },
              { ref: "Proverbs 11:1", text: "A false balance is an abomination to the LORD, but a just weight is his delight." },
              { ref: "Proverbs 12:22", text: "Lying lips are an abomination to the LORD, but those who act faithfully are his delight." },
              { ref: "Matthew 5:37", text: "Let what you say be simply &ldquo;Yes&rdquo; or &ldquo;No&rdquo;; anything more than this comes from evil." },
              { ref: "Acts 5:3-4", text: "But Peter said, &ldquo;Ananias, why has Satan filled your heart to lie to the Holy Spirit and to keep back for yourself part of the proceeds of the land? ... You have not lied to man but to God.&rdquo;" },
              { ref: "Ephesians 4:15", text: "Rather, speaking the truth in love, we are to grow up in every way into him who is the head, into Christ." },
              { ref: "Ephesians 4:25", text: "Therefore, having put away falsehood, let each one of you speak the truth with his neighbor, for we are members one of another." },
              { ref: "1 John 1:9", text: "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Integrity Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>Where are you currently tempted toward dishonesty, exaggeration, or image-management?</label>
                  <textarea
                    value={jTemptation}
                    onChange={e => setJTemptation(e.target.value)}
                    placeholder="A conversation, a number, a habit you are concealing, a persona you are performing..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What is the plain truth of the situation, stated honestly before God?</label>
                  <textarea
                    value={jTruth}
                    onChange={e => setJTruth(e.target.value)}
                    placeholder="Speak truth in your heart (Ps 15:2) &mdash; no spin, no rounding up..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What concrete commitment to honesty will you make, even if it costs you?</label>
                  <textarea
                    value={jCommitment}
                    onChange={e => setJCommitment(e.target.value)}
                    placeholder="The one who swears to his own hurt and does not change (Ps 15:4)..."
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
                {e.temptation && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Temptation</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.temptation}</p></div>}
                {e.truth && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Truth</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.truth}</p></div>}
                {e.commitment && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Commitment</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.commitment}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="jH_aojNJM3E" title="Exodus 19-40 &mdash; The Ten Commandments in Context (BibleProject)" />
            <VideoEmbed videoId="CGbNw855ksw" title="Acts 1-12 &mdash; Including Ananias &amp; Sapphira (BibleProject)" />
            <VideoEmbed videoId="AzmYV8GNAIM" title="The Book of Proverbs &mdash; Wisdom and Honest Living (BibleProject)" />
            <VideoEmbed videoId="G_OlRWGLdnw" title="Why Integrity Matters &mdash; Living Without Hypocrisy" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
