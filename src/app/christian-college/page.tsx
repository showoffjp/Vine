"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#3B82F6", TEXT = "#F2F2F8", MUTED = "#9898B3";

type CCEntry = { id: string; date: string; challenge: string; anchor: string; action: string };

export default function ChristianCollegePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CCEntry[]>(() => {
    try { const s = localStorage.getItem("vine_christiancollege_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [jChallenge, setJChallenge] = useState("");
  const [jAnchor, setJAnchor] = useState("");
  const [jAction, setJAction] = useState("");

  useEffect(() => { localStorage.setItem("vine_christiancollege_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jChallenge.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), challenge: jChallenge, anchor: jAnchor, action: jAction }, ...prev]);
    setJChallenge(""); setJAnchor(""); setJAction("");
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
          Faith in College
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          College is one of the most faith-shaping seasons of life &mdash; for better or worse. The questions are real, the pressures are intense, and the formation that happens in those four years tends to stick. This guide is for those who want to finish college with a faith stronger, deeper, and more genuinely their own than when they arrived.
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
                title: "Intellectual Faith &mdash; Loving God with Your Mind (Mark 12:30)",
                body: "You shall love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength (Mark 12:30). The university is precisely the place where the &ldquo;mind&rdquo; part is demanded. The anti-intellectual strain in popular Christianity &mdash; the idea that asking hard questions is a sign of weak faith &mdash; is simply unbiblical. The Christian tradition has always included rigorous intellectual engagement: Augustine, Aquinas, Calvin, Edwards, C.S. Lewis. A faith that cannot survive the scrutiny of a university classroom was not deeply rooted to begin with. College is an opportunity to develop an intellectually robust faith, not a threat to a genuine one. The goal is integration: thinking Christianly <em>through</em> your discipline, not cordoning off faith from your academic life.",
              },
              {
                title: "The Plausibility Structure &mdash; Why College Shakes Faith",
                body: "Peter Berger&rsquo;s concept of the &ldquo;plausibility structure&rdquo; explains why many students lose faith in college: faith is sustained by a community of people for whom it is normal and expected. When you enter an environment where faith is neither normal nor expected &mdash; where smart, articulate people operate as though God does not exist &mdash; the plausibility of your faith is challenged not primarily by arguments but by social atmosphere. The best response is not to avoid the challenge but to find a Christian community on campus &mdash; a campus ministry, a church, a small group &mdash; that provides an alternative plausibility structure. Community is not a crutch; it is the normal means by which any belief system is sustained.",
              },
              {
                title: "Doubt as Part of Mature Faith &mdash; Not Its Opposite",
                body: "Honest doubt in college is not a sign that you are losing your faith &mdash; it is often a sign that your faith is growing up. The faith you inherited from your parents or youth group was never meant to carry the weight of adult life permanently; it must become <em>your own</em>. That process involves real questioning. Paul writes: When I was a child, I spoke like a child, I thought like a child, I reasoned like a child. When I became a man, I gave up childish ways (1 Corinthians 13:11). Maturing faith does not mean never doubting; it means bringing your doubts to God and to the tradition honestly, as did Thomas, David, Jeremiah, and Jesus himself in Gethsemane. Doubt in community is far less dangerous than faith never genuinely tested.",
              },
              {
                title: "The Importance of Local Church &mdash; Not Just Campus Ministry",
                body: "Campus ministries &mdash; InterVarsity, Cru, Navigators, Reformed University Fellowship, and others &mdash; are valuable and often formative. But they are not a substitute for the local church. The local church includes people of every age, background, class, and stage of life; it is the body of Christ as it is actually constituted, not a peer group with shared demographics. College students who spend four years only in campus ministries often struggle to integrate into a church after graduation. The discipline of committing to a local congregation &mdash; even an imperfect one &mdash; during college is formative in ways that peer-only community cannot replicate.",
              },
              {
                title: "Identity Before Achievement &mdash; Gospel-Grounded Security",
                body: "College is a high-achievement environment where identity is constantly being constructed around performance: GPA, internships, social status, athletic success. The gospel offers a radically different grounding: your identity is established not by what you achieve but by who you are in Christ &mdash; loved, known, and accepted before you accomplish anything. You are a child of God not because of your performance but because of his grace (Galatians 4:4-7). This grounding matters enormously in college, where the pressure to perform is intense and the fear of failure can be spiritually and psychologically devastating. The student whose identity is rooted in Christ can take academic and social risks that the performance-driven student cannot.",
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
              "Find a local church and commit to it within the first two weeks &mdash; not when you feel settled, not after you&rsquo;ve explored your options for a semester, but early. The longer you wait, the harder it becomes. Show up, serve, introduce yourself to people outside your age group.",
              "Join a campus ministry (InterVarsity, Cru, Navigators, RUF, or equivalent) and attend a small group within it. Peer community that holds your faith seriously is not optional in college; it is the primary practical means of staying rooted.",
              "Maintain a daily time alone with God &mdash; even five to ten minutes of Scripture and prayer &mdash; and protect it from the schedule chaos of college life. Put it in your calendar like a class. It is easier to shrink this practice than almost any other, and harder to restart once it has stopped.",
              "When your faith is challenged &mdash; in class, in conversation, by a book &mdash; write the challenge down precisely. Then find a thoughtful Christian &mdash; a campus minister, a pastor, a professor &mdash; and ask them directly. Do not let unaddressed doubts calcify into quiet disbelief.",
              "In dating relationships, be explicit about your faith commitments early &mdash; before the relationship deepens. The most common faith-compromising dynamic in college is not intellectual challenge but relational entanglement with someone who does not share your values.",
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
                work: "Mere Christianity / Surprised by Joy",
                quote: "I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else. The Christian faith is not a conclusion drawn from the evidence but the lens through which all other evidence becomes intelligible.",
                bio: "C.S. Lewis was an atheist Oxford academic who became a Christian after years of intellectual resistance &mdash; making him one of the most useful voices for college students navigating the secular university. His conversion, detailed in Surprised by Joy, was driven by intellectual honesty as much as anything else. Mere Christianity began as radio broadcasts aimed at ordinary people and has brought more college students through intellectual doubt than perhaps any other book of the 20th century. Lewis shows that Christianity is not an escape from thinking but its most rigorous expression.",
              },
              {
                name: "J.P. Moreland",
                work: "Love Your God with All Your Mind",
                quote: "Intellectual discipleship &mdash; the ongoing development of a Christian mind &mdash; is not optional for the serious follower of Jesus. It is part of what it means to love God with all your mind, and the failure to take it seriously has left the church ill-equipped to engage the culture it inhabits.",
                bio: "J.P. Moreland is a philosopher at Biola University and one of the leading voices for Christian intellectual engagement in contemporary evangelicalism. Love Your God with All Your Mind makes the case that developing a Christian mind is not optional for serious discipleship &mdash; and provides a road map for doing so. For college students who feel the tension between their faith and their academic environment, Moreland gives both theological warrant and practical tools for integration.",
              },
              {
                name: "Kenda Creasy Dean",
                work: "Almost Christian",
                quote: "The church has successfully transmitted a kind of &lsquo;moralistic therapeutic deism&rsquo; to young people &mdash; a faith that is about being nice, feeling good, and having God available in emergencies. This is not Christianity. Young people will leave it because it does not ask enough of them.",
                bio: "Kenda Creasy Dean is a Princeton Theological Seminary professor whose research on adolescent faith (published as Almost Christian) identified the dominant form of religion among young Americans as &ldquo;Moralistic Therapeutic Deism&rdquo; &mdash; a therapeutic, low-demand spirituality far from historic Christianity. Her diagnosis is painful but clarifying: students who lose faith in college often lose a version of Christianity that was never robust enough to sustain scrutiny. Her constructive proposal is that young people need to be formed in a&nbsp;consequential faith &mdash; one that costs something and therefore means something.",
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
              { ref: "Mark 12:30", text: "You shall love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength.", insight: "The commandment to love God with your <em>mind</em> is the foundation of Christian intellectual life. The university is a primary arena for this obedience." },
              { ref: "Romans 12:2", text: "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.", insight: "Nonconformity to the dominant culture is the baseline call. Renewal of mind is the mechanism. In a secular university, this requires intentional countercultural formation." },
              { ref: "1 Peter 3:15", text: "But in your hearts honor Christ the Lord as holy, always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect.", insight: "Intellectual readiness (&ldquo;a defense&rdquo;) is coupled with character qualities (&ldquo;gentleness and respect&rdquo;). Apologetics without virtue produces heat without light." },
              { ref: "Colossians 2:8", text: "See to it that no one takes you captive by philosophy and empty deceit, according to human tradition, according to the elemental spirits of the world, and not according to Christ.", insight: "Paul does not warn against philosophy itself but against a particular kind: hollow, humanly-constructed, disconnected from Christ. The antidote is not avoiding ideas but developing discernment." },
              { ref: "Galatians 4:6-7", text: "And because you are sons, God has sent the Spirit of his Son into our hearts, crying, &lsquo;Abba! Father!&rsquo; So you are no longer a slave, but a son, and if a son, then an heir through God.", insight: "Identity as a child of God is the ground of freedom from performance-based identity in college. You are already the heir of the universe; you have nothing to prove." },
              { ref: "Hebrews 10:24-25", text: "And let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near.", insight: "Community is not optional &mdash; it is commanded. The habit of gathering together (in church, in small groups) is precisely the habit most at risk in the busy, individualistic culture of college." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 0.6rem" }} dangerouslySetInnerHTML={{ __html: s.text }} />
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.insight }} />
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Faith in College Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What challenge to your faith are you navigating?</label>
                  <textarea
                    value={jChallenge}
                    onChange={e => setJChallenge(e.target.value)}
                    placeholder="An intellectual question, a social pressure, a relationship, a doubt..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What anchor in Scripture or the faith holds you steady?</label>
                  <textarea
                    value={jAnchor}
                    onChange={e => setJAnchor(e.target.value)}
                    placeholder="A verse, a truth, a name of God, something from community..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What action will you take in response?</label>
                  <textarea
                    value={jAction}
                    onChange={e => setJAction(e.target.value)}
                    placeholder="Find a mentor, read a book, join a small group, have a conversation..."
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
                {e.anchor && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Anchor</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.anchor}</p></div>}
                {e.action && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Action</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.action}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="w8SxSMBkzMA" title="How to Keep Your Faith in College &mdash; Sean McDowell" />
            <VideoEmbed videoId="sRJO6CvJ5xQ" title="Why Do Students Lose Their Faith in College? &mdash; The Gospel Coalition" />
            <VideoEmbed videoId="oNfEBvLmMOs" title="Defending Your Faith on a Secular Campus &mdash; Frank Turek" />
            <VideoEmbed videoId="RvIK_UgBBm0" title="Finding Christian Community in College &mdash; InterVarsity" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
