"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#E11D48", TEXT = "#F2F2F8", MUTED = "#9898B3";

type GSPEntry = { id: string; date: string; situation: string; conviction: string; alternative: string };

export default function ChristianGossipPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<GSPEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christiangossip_entries") ?? "[]"); } catch { return []; }
  });
  const [jSituation, setJSituation] = useState("");
  const [jConviction, setJConviction] = useState("");
  const [jAlternative, setJAlternative] = useState("");

  useEffect(() => { localStorage.setItem("vine_christiangossip_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jSituation.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), situation: jSituation, conviction: jConviction, alternative: jAlternative }, ...prev]);
    setJSituation(""); setJConviction(""); setJAlternative("");
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
          Taming the Tongue: Gossip &amp; Speech
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          James calls the tongue a fire, a world of unrighteousness &mdash; small, but capable of setting a whole forest ablaze. Gossip is one of the most socially acceptable sins in the church, often dressed up as concern or prayer. This guide examines what Scripture says about our speech and how to use words to build rather than burn.
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
                title: "The Tongue Is a Fire — James on the Power of Speech (James 3:5-10)",
                body: "The tongue is a small member, yet it boasts of great things. How great a forest is set ablaze by such a small fire! James&rsquo;s treatment of the tongue is the most extended biblical meditation on speech: the tongue is untameable by human effort alone, a restless evil, full of deadly poison &mdash; and yet with it we bless our Lord and Father. The incongruity James names is the heart of the matter: from the same mouth come blessing and cursing. My brothers, these things ought not to be so. The tongue reveals the heart (Luke 6:45 &mdash; out of the abundance of the heart the mouth speaks), which means speech problems are heart problems, and taming the tongue begins not with the mouth but with what fills it.",
              },
              {
                title: "What Proverbs Says About the Whisperer (Prov 11:13; 16:28; 26:20)",
                body: "Whoever goes about slandering reveals secrets, but he who is trustworthy in spirit keeps a thing covered (11:13). A dishonest man spreads strife, and a whisperer separates close friends (16:28). For lack of wood the fire goes out, and where there is no whisperer, quarreling ceases (26:20). The Hebrew word often translated whisperer or gossip pictures speech that operates in the shadows &mdash; said behind backs, never to faces. Proverbs diagnoses both the damage (separated friends, sustained quarrels, revealed secrets) and the remedy: the fire goes out when it is denied fuel. The gossip economy collapses when believers simply refuse to supply or consume the product. Proverbs 18:8 adds the uncomfortable truth that gossip is pleasurable &mdash; the words of a whisperer are like delicious morsels &mdash; which is precisely why it is so hard to resist.",
              },
              {
                title: "Slander, Gossip, and Discernment — Drawing the Lines",
                body: "Not all speech about absent people is sin, so distinctions matter. Slander (Greek katalalia, diabolos &mdash; the devil is literally the slanderer) is false or malicious speech intended to damage someone&rsquo;s reputation. Gossip is the sharing of private, unflattering, or unverified information about someone without their consent and without a constructive purpose &mdash; it can be entirely true and still be sin. Discernment, by contrast, is truthful speech shared with the right people for a protective or restorative purpose: warning someone about a genuinely dangerous person, seeking counsel about a conflict, reporting abuse to authorities. The test questions: Is it true? Is this person part of the problem or part of the solution? Is my motive protection and restoration, or is it the pleasure of the telling? Would I say this if the person were present?",
              },
              {
                title: "Prayer Requests and Social Media — Gossip&rsquo;s Respectable Covers",
                body: "Gossip in Christian communities rarely announces itself; it borrows the vocabulary of piety. We need to pray for the Johnsons &mdash; did you hear what their son did? converts gossip into intercession and makes the listener complicit under the guise of spiritual concern. The test is simple: does the prayer request contain more detail than prayer requires, and was it shared with the subject&rsquo;s consent? Social media multiplies the problem &mdash; vague-posting about unnamed offenders, sharing screenshots, piling onto a public failure, or spreading an accusation before facts are established turns a whisper into a broadcast. Proverbs 18:13 speaks directly to the retweet: if one gives an answer before he hears, it is his folly and shame. The platforms reward exactly what Scripture forbids: speed, outrage, and the delicious morsel.",
              },
              {
                title: "Building Up, Guarding Reputations, and the Matthew 18 Path (Eph 4:29; Matt 18:15-17)",
                body: "Let no corrupting talk come out of your mouths, but only such as is good for building up, as fits the occasion, that it may give grace to those who hear (Eph 4:29). Paul&rsquo;s standard is not merely negative (no corrupting talk) but positive: speech that gives grace, fitted to the occasion and the hearer. Part of loving a neighbor is guarding their reputation &mdash; the Reformed catechisms read the ninth commandment as requiring us to defend our neighbor&rsquo;s good name as eagerly as we defend our own. And when someone genuinely sins against us, Jesus gives the path in Matthew 18: go to them first, alone. Not to your friends, not to the group chat, not to the church &mdash; to them. Escalation to others is permitted only after direct conversation fails, and even then the goal at every stage is winning the brother back, not winning the argument or the audience.",
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
              "Before sharing anything about an absent person, run the three-gate test: Is it true? Is it necessary for this listener to know? Is it kind &mdash; or at least protective in motive? If it fails any gate, keep it covered (Prov 11:13).",
              "Practice being the place where gossip dies. When someone brings you a delicious morsel, decline gently but clearly: <em>I don&rsquo;t think I should hear this without them here</em> &mdash; or redirect: <em>Have you talked to them directly?</em> Where there is no wood, the fire goes out (Prov 26:20).",
              "Audit your prayer requests for a month: share only what the person has consented to share, with only the detail that prayer actually requires. When in doubt, ask them first or pray without broadcasting.",
              "Install a 24-hour rule for social media: never post, share, or comment about another person&rsquo;s failure, controversy, or private business in the heat of the moment. Most of what feels urgent to say online is just Proverbs 18:8 with a screen.",
              "When someone sins against you, follow the Matthew 18 sequence literally: go to them alone first. Write down what you plan to say, aim at restoration rather than victory, and tell no one else until that step is genuinely exhausted.",
              "Practice Ephesians 4:29 positively: once a day, deliberately say something about an absent person that builds them up &mdash; defend a reputation, credit someone&rsquo;s work, speak well of someone who cannot hear you.",
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
                name: "Dietrich Bonhoeffer",
                work: "Life Together",
                quote: "Often we combat our evil thoughts most effectively if we absolutely refuse to allow them to be expressed in words... It must be a decisive rule of every Christian fellowship that each individual is prohibited from saying much that occurs to him about others in secret.",
                bio: "Dietrich Bonhoeffer was a German pastor and theologian executed by the Nazis in 1945. In Life Together, his manual for Christian community drawn from the underground seminary at Finkenwalde, he made a ban on speaking about a brother in his absence one of the community&rsquo;s foundational rules &mdash; arguing that where this discipline holds, the destructive spiral of judgment and resentment never gets the oxygen it needs.",
              },
              {
                name: "Thomas Watson",
                work: "The Ten Commandments",
                quote: "He that raises a slander, carries the devil in his tongue; and he that receives it, carries the devil in his ear. The receiver is as bad as the thief; if there were no receivers of slander, there would not be so many traders in it.",
                bio: "Thomas Watson was a 17th-century Puritan pastor whose exposition of the Decalogue treats the ninth commandment with characteristic precision. His insight that gossip requires a market &mdash; that listeners are co-conspirators, not bystanders &mdash; anticipates the modern recognition that the gossip economy collapses only when believers refuse to consume as well as produce.",
              },
              {
                name: "Paul David Tripp",
                work: "War of Words",
                quote: "Word problems are heart problems. The people and situations around us do not make us say what we say; they are only the occasion for our hearts to reveal themselves in words.",
                bio: "Paul David Tripp is a pastor, counselor, and author whose War of Words applies a biblical theology of the heart to everyday speech. Following Luke 6:45, he argues that lasting change in how we talk about others never comes from mere mouth-management but from the transformation of what the heart treasures &mdash; making gossip a worship problem before it is a discipline problem.",
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
              { ref: "James 3:5-6", text: "So also the tongue is a small member, yet it boasts of great things. How great a forest is set ablaze by such a small fire! And the tongue is a fire, a world of unrighteousness." },
              { ref: "Proverbs 11:13", text: "Whoever goes about slandering reveals secrets, but he who is trustworthy in spirit keeps a thing covered." },
              { ref: "Proverbs 16:28", text: "A dishonest man spreads strife, and a whisperer separates close friends." },
              { ref: "Proverbs 26:20", text: "For lack of wood the fire goes out, and where there is no whisperer, quarreling ceases." },
              { ref: "Ephesians 4:29", text: "Let no corrupting talk come out of your mouths, but only such as is good for building up, as fits the occasion, that it may give grace to those who hear." },
              { ref: "Matthew 18:15", text: "If your brother sins against you, go and tell him his fault, between you and him alone. If he listens to you, you have gained your brother." },
              { ref: "Psalm 141:3", text: "Set a guard, O LORD, over my mouth; keep watch over the door of my lips!" },
              { ref: "Luke 6:45", text: "The good person out of the good treasure of his heart produces good, and the evil person out of his evil treasure produces evil, for out of the abundance of the heart his mouth speaks." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Speech Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>Describe a recent situation where you gossiped, listened to gossip, or were tempted to.</label>
                  <textarea
                    value={jSituation}
                    onChange={e => setJSituation(e.target.value)}
                    placeholder="Who was being discussed, and what made the morsel feel delicious?"
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What conviction is the Spirit bringing &mdash; what does this reveal about your heart?</label>
                  <textarea
                    value={jConviction}
                    onChange={e => setJConviction(e.target.value)}
                    placeholder="Out of the abundance of the heart the mouth speaks (Luke 6:45)..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What is the grace-giving alternative next time (Eph 4:29)?</label>
                  <textarea
                    value={jAlternative}
                    onChange={e => setJAlternative(e.target.value)}
                    placeholder="Decline, redirect, go to the person directly, speak a word that builds up..."
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
                {e.situation && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Situation</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.situation}</p></div>}
                {e.conviction && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Conviction</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.conviction}</p></div>}
                {e.alternative && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Alternative</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.alternative}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="qn-hLHWwRYY" title="The Book of James &mdash; Overview (BibleProject)" />
            <VideoEmbed videoId="AzmYV8GNAIM" title="The Book of Proverbs &mdash; Overview (BibleProject)" />
            <VideoEmbed videoId="0h1eoBeR4Jk" title="Words &mdash; The Power of Speech in the Biblical Story" />
            <VideoEmbed videoId="VhmlJBUIoLk" title="Taming the Tongue &mdash; A Sermon on James 3" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
