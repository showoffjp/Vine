"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

type FRDEntry = { id: string; date: string; need: string; investment: string; fruit: string };

export default function ChristianFriendshipPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<FRDEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christianfriendship_entries") ?? "[]"); } catch { return []; }
  });
  const [jNeed, setJNeed] = useState("");
  const [jInvestment, setJInvestment] = useState("");
  const [jFruit, setJFruit] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianfriendship_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jNeed.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), need: jNeed, investment: jInvestment, fruit: jFruit }, ...prev]);
    setJNeed(""); setJInvestment(""); setJFruit("");
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
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Faith &amp; Relationships</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Spiritual Friendship
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Friendship is not a luxury bolted onto the Christian life; it is a means of grace. Jesus said, &ldquo;I have called you friends&rdquo; (John 15:15), and from David and Jonathan to Aelred of Rievaulx, Scripture and the tradition treat deep friendship as a school of holiness. This guide walks through the theology, practice, and cultivation of spiritual friendship.
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
                title: "David and Jonathan — Covenant Friendship (1 Sam 18:1-3)",
                body: "The soul of Jonathan was knit to the soul of David, and Jonathan loved him as his own soul... Then Jonathan made a covenant with David, because he loved him as his own soul. The friendship of David and Jonathan is the Bible&rsquo;s most extended portrait of friendship, and its defining feature is covenant: a deliberate, spoken commitment that binds two people beyond convenience. Jonathan&rsquo;s friendship cost him everything &mdash; he strengthened David&rsquo;s hand in God (1 Sam 23:16) knowing that David, not he, would inherit his father&rsquo;s throne. Biblical friendship is not mere affinity; it is loyalty that survives competing interests, sealed by promise rather than sustained by mood.",
              },
              {
                title: "&ldquo;I Have Called You Friends&rdquo; — the Friendship of Jesus (John 15:13-15)",
                body: "Greater love has no one than this, that someone lay down his life for his friends... No longer do I call you servants, for the servant does not know what his master is doing; but I have called you friends, for all that I have heard from my Father I have made known to you. Jesus defines friendship by two marks: sacrificial love and disclosed knowledge. A servant obeys without understanding; a friend is brought inside the purposes of the other. That God in Christ calls human beings friends is the foundation of all Christian friendship &mdash; we befriend others as people already befriended by God, and every human friendship becomes an echo and apprenticeship of that prior friendship.",
              },
              {
                title: "The Wisdom of Proverbs — Loyalty, Wounds, and Sharpening (Prov 17:17; 27:6, 17)",
                body: "A friend loves at all times, and a brother is born for adversity (17:17). Faithful are the wounds of a friend; profuse are the kisses of an enemy (27:6). Iron sharpens iron, and one man sharpens another (27:17). Proverbs gives friendship a three-fold anatomy: constancy (love that does not evaporate in adversity), honesty (the friend who wounds you with truth loves you more than the flatterer), and formation (friends shape each other the way iron files iron &mdash; with friction, contact, and time). A friendship with no capacity for truthful confrontation is not yet deep; a friendship that survives faithful wounds is one of God&rsquo;s chief instruments of sanctification.",
              },
              {
                title: "Brothers and Sisters — Male and Female Friendship in the Church (1 Tim 5:1-2)",
                body: "Encourage... older women as mothers, younger women as sisters, in all purity. Paul&rsquo;s instruction to Timothy assumes that men and women in the church will relate to one another &mdash; not with fearful avoidance, but as family. The church has often oscillated between naivety and paranoia about cross-sex friendship; Scripture&rsquo;s category is sibling-hood: warm, honoring, bounded by purity, and ordered toward the good of the whole household of God. The body of Christ is the one community where men and women who are not married to each other are explicitly given a relationship &mdash; brother and sister &mdash; with both real affection and real wisdom about its shape.",
              },
              {
                title: "The Loneliness Epidemic — Friendship as the Church&rsquo;s Witness (Eccl 4:9-12; Gen 2:18)",
                body: "Two are better than one... For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has not another to lift him up. Public health officials now describe loneliness as an epidemic with mortality effects comparable to smoking; the average adult reports fewer close friends than a generation ago, and many report none. Genesis 2:18 &mdash; it is not good that the man should be alone &mdash; was spoken before the fall: aloneness is the one thing in unfallen creation called not good. A church that practices genuine friendship &mdash; presence, table fellowship, burden-bearing (Gal 6:2) &mdash; is not offering a social program but a witness: in Christ, the deepest human ache has an answer.",
              },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
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
              "Treat friendship as something you schedule, not something that happens to you: adult friendships rarely form by accident the way they did at school. Put a recurring time on the calendar &mdash; a weekly walk, a monthly meal &mdash; with one or two people you want to go deeper with, and protect it like an appointment.",
              "Practice repeated, unplanned proximity: sociologists note that friendship grows from regular contact in shared settings. Join (and keep showing up to) one consistent context &mdash; a small group, a serving team, a men&rsquo;s or women&rsquo;s breakfast &mdash; for at least a year before judging whether friendships are forming.",
              "Move one conversation per week one layer deeper than logistics: ask a real question (<em>What are you anxious about? Where have you seen God lately? What are you avoiding?</em>) and answer honestly when asked. Vulnerability offered in small increments is the currency of deepening friendship.",
              "Be the friend of Proverbs 27:6: when a friend invites your honesty, speak the loving, faithful wound rather than the easy flattery &mdash; and receive correction from friends without defensiveness, treating it as iron sharpening iron (Prov 27:17).",
              "Make a covenantal commitment explicit with one or two friends, as Jonathan did with David: tell them you intend to be their friend for the long haul, pray for them by name regularly, and show up in adversity &mdash; the hospital waiting room, the funeral, the job loss &mdash; without being asked.",
              "If you are lonely, take the first step rather than waiting to be pursued: extend two invitations this week, accept the awkwardness of early-stage friendship, and remember that nearly everyone around you is lonelier than they appear and grateful to be invited.",
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
                work: "The Four Loves",
                quote: "Friendship is unnecessary, like philosophy, like art, like the universe itself... It has no survival value; rather it is one of those things which give value to survival. Friendship is born at the moment when one man says to another, &lsquo;What! You too? I thought that no one but myself...&rsquo;",
                bio: "C.S. Lewis devoted a full chapter of The Four Loves to philia, arguing that modern people ignore friendship precisely because it seems unnecessary &mdash; and that this is exactly backwards. For Lewis, friendship is the least jealous of loves, typically born side-by-side over a shared truth or pursuit rather than face-to-face, and at its best it becomes the instrument by which God reveals to each of us the beauties of the others.",
              },
              {
                name: "Aelred of Rievaulx",
                work: "Spiritual Friendship",
                quote: "Here we are, you and I, and I hope a third, Christ, is in our midst... In friendship are joined honor and charm, truth and joy, sweetness and good will, affection and action. And all these take their beginning from Christ, advance through Christ, and are perfected in Christ.",
                bio: "Aelred was a 12th-century Cistercian abbot in Yorkshire whose dialogue Spiritual Friendship is the classic Christian treatment of the subject. Reworking Cicero&rsquo;s treatise on friendship in the light of the gospel, Aelred dared to say that God is friendship &mdash; that genuine friendship begins in Christ, proceeds in Christ, and finds its perfection in Christ, and is therefore a real path toward the love and knowledge of God rather than a distraction from it.",
              },
              {
                name: "Timothy Keller",
                work: "The Meaning of Marriage (on friendship)",
                quote: "Friendship is a deep oneness that develops when two people, speaking the truth in love to one another, journey together to the same horizon... A friend always lets you in and never lets you down.",
                bio: "Timothy Keller, longtime pastor of Redeemer Presbyterian Church in New York City, preached and wrote extensively on friendship as the often-forgotten love at the center of Christian community. Drawing on Proverbs, Keller taught that friendship is forged through constancy and transparency, and that the gospel &mdash; Christ&rsquo;s befriending of sinners at his own cost &mdash; is both the model and the power for becoming a true friend.",
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
              { ref: "1 Sam 18:1, 3", text: "The soul of Jonathan was knit to the soul of David, and Jonathan loved him as his own soul... Then Jonathan made a covenant with David, because he loved him as his own soul." },
              { ref: "John 15:13-15", text: "Greater love has no one than this, that someone lay down his life for his friends. You are my friends if you do what I command you. No longer do I call you servants... but I have called you friends, for all that I have heard from my Father I have made known to you." },
              { ref: "Prov 17:17", text: "A friend loves at all times, and a brother is born for adversity." },
              { ref: "Prov 27:6", text: "Faithful are the wounds of a friend; profuse are the kisses of an enemy." },
              { ref: "Prov 27:17", text: "Iron sharpens iron, and one man sharpens another." },
              { ref: "Eccl 4:9-10", text: "Two are better than one, because they have a good reward for their toil. For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has not another to lift him up!" },
              { ref: "Prov 18:24", text: "A man of many companions may come to ruin, but there is a friend who sticks closer than a brother." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Friendship Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>Where do you feel the need for deeper friendship right now?</label>
                  <textarea
                    value={jNeed}
                    onChange={e => setJNeed(e.target.value)}
                    placeholder="Name the loneliness, the longing, or the relationship you want to go deeper..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What concrete investment will you make this week?</label>
                  <textarea
                    value={jInvestment}
                    onChange={e => setJInvestment(e.target.value)}
                    placeholder="An invitation, a scheduled walk, a hard honest conversation, a prayer commitment..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What fruit have you seen God grow through friendship?</label>
                  <textarea
                    value={jFruit}
                    onChange={e => setJFruit(e.target.value)}
                    placeholder="Iron sharpening iron, a burden carried, a truth spoken in love, joy shared..."
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
                {e.need && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Need</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.need}</p></div>}
                {e.investment && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Investment</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.investment}</p></div>}
                {e.fruit && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Fruit</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.fruit}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="N0I2yK0aP9I" title="Jonathan and David: Spiritual Friendship" />
            <VideoEmbed videoId="i9iUYsQuY3w" title="Spiritual Friendship &mdash; Timothy Keller" />
            <VideoEmbed videoId="3hM4izbColg" title="The Four Loves: Philia (Friendship) by C.S. Lewis" />
            <VideoEmbed videoId="8Tc4VIQrXdE" title="Friendship &mdash; Timothy Keller" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
