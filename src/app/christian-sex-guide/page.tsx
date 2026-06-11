"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#E11D48", TEXT = "#F2F2F8", MUTED = "#9898B3";

type SXGuideEntry = { id: string; date: string; question: string; truth: string; application: string };

export default function ChristianSexGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SXGuideEntry[]>(() => {
    try { const s = localStorage.getItem("vine_christiansex_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [jQuestion, setJQuestion] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jApplication, setJApplication] = useState("");

  useEffect(() => { localStorage.setItem("vine_christiansex_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jQuestion.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), question: jQuestion, truth: jTruth, application: jApplication }, ...prev]);
    setJQuestion(""); setJTruth(""); setJApplication("");
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
          Sex, Marriage &amp; the Christian
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Sexuality is not a problem to be managed but a gift to be understood &mdash; one that Scripture addresses with surprising frankness and beauty. This guide explores the theology of marital sexuality from Genesis to Song of Solomon, what purity means inside marriage, and the path of healing for those wounded by sexual brokenness.
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
                title: "Sexuality as God&rsquo;s Good Design &mdash; Genesis 2:24-25",
                body: "Before the Fall, Adam and Eve were naked and unashamed (Genesis 2:25). Sexuality is not a consequence of sin; it is part of God&rsquo;s very good creation (Genesis 1:31). The one-flesh union &mdash; leaving father and mother, cleaving to a spouse, becoming one flesh &mdash; is presented as the culmination of God&rsquo;s creative work. The sexual union is a sign of the covenant: exclusive, permanent, total self-giving. Christian teaching has sometimes treated sexuality as a necessary concession to human weakness; the biblical text itself does not. Sexuality in marriage is holy, purposeful, and celebrated.",
              },
              {
                title: "The Three Purposes of Marital Sex",
                body: "Christian theology has historically identified three purposes of marital sexuality: procreation (be fruitful and multiply, Genesis 1:28), union (the one-flesh bond that deepens covenant), and pleasure (the unashamed delight of Song of Solomon). The Reformation rejected the view that sex was only justified by procreative intent. The Song of Solomon devotes eight chapters to the celebration of erotic love between husband and wife without reference to children. The union and pleasure purposes are fully legitimate in their own right. Recognizing all three purposes prevents both a reductively mechanical view (sex is only for children) and a purely recreational one (sex is only for personal satisfaction).",
              },
              {
                title: "Song of Solomon &mdash; The Bible&rsquo;s Celebration of Marital Eros",
                body: "The Song of Solomon (Song of Songs) is the most sexually explicit book in the Bible. The beloved and the lover celebrate each other&rsquo;s bodies with unrestrained joy and desire. Orthodox Jewish and Christian traditions have long recognized the Song as both a celebration of human erotic love and an allegory of God&rsquo;s love for his people. The allegorical reading does not cancel the literal one; if anything, the fact that human sexuality can serve as an analogy for divine love intensifies its dignity. The Song gives Christian married couples explicit scriptural permission to celebrate and cultivate erotic love within the covenant.",
              },
              {
                title: "Sex as Covenant Sign &mdash; 1 Corinthians 6:16-20",
                body: "Paul&rsquo;s treatment of sexual immorality in 1 Corinthians 6 grounds his argument in the nature of sexual union: do you not know that he who unites himself with a prostitute is one with her in body? For it is said, &lsquo;The two will become one flesh.&rsquo; Paul&rsquo;s point is that sexual union is always covenantally significant; it always creates a one-flesh bond. This is why sexual immorality &mdash; sex outside the covenant of marriage &mdash; is a uniquely serious sin: it sins against one&rsquo;s own body and misuses something designed to be a covenant sign. The positive implication is equally important: marital sex is a covenant renewal, a re-enactment of the total self-giving that marriage represents.",
              },
              {
                title: "The Mutual Obligation of Marital Intimacy &mdash; 1 Corinthians 7:3-5",
                body: "The husband should give to his wife her conjugal rights, and likewise the wife to her husband. For the wife does not have authority over her own body, but the husband does. Likewise, the husband does not have authority over his own body, but the wife does. Do not deprive one another, except perhaps by agreement for a limited time, that you may devote yourselves to prayer. Paul&rsquo;s framing is striking: he grounds the mutual sexual obligation in mutual authority, not in the husband&rsquo;s rights alone. Both spouses have legitimate needs; both have obligations to one another. Chronic sexual deprivation within marriage is a serious problem that Paul treats as a danger to the marriage &mdash; not a spiritual virtue.",
              },
              {
                title: "Pornography&rsquo;s Damage to the Covenant",
                body: "Pornography is one of the most significant threats to Christian marriages today. It operates on multiple levels of damage: it rewires the brain&rsquo;s reward pathways through novelty and dopamine, creating tolerance and requiring escalation; it trains the viewer to experience sexual arousal in response to images rather than to a person, degrading the capacity for genuine relational intimacy; it introduces the reality of a third party into the exclusive covenant of marriage; and it almost always involves secrets that corrode the honesty and trust on which marriage depends. The spouse who discovers their partner&rsquo;s pornography use typically experiences it as a form of betrayal &mdash; a response that is theologically appropriate, not merely emotional.",
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
              "Read Song of Solomon together as a couple &mdash; slowly, without embarrassment. The Bible&rsquo;s most explicit celebration of marital eros is canonical Scripture. Receive it as permission and invitation, not merely as allegory.",
              "If sexual intimacy has declined in your marriage, resist the temptation to address it as primarily a physical problem. Ask first: where are we emotionally? Is there unresolved conflict, accumulated resentment, or emotional distance that sexual intimacy is reflecting? Address the upstream issue.",
              "If you or your spouse struggles with pornography use, name it clearly, seek professional help from a therapist trained in sexual compulsivity, and pursue accountability that goes beyond willpower. Willpower alone has a poor track record; structural change and therapeutic support are necessary.",
              "Discuss openly &mdash; including with your spouse &mdash; the differences in desire, preference, and frequency that most couples experience. Different desire levels are nearly universal; the question is whether you can discuss them honestly and navigate them as a team rather than as a source of shame or accusation.",
              "If there is a history of sexual abuse, pornography use, or prior sexual experiences that are affecting your marriage, consider working with a Christian therapist who specializes in sexual healing. Healing is possible, but it typically requires more than prayer and willpower alone.",
              "Pray together, including about your sexual relationship. The vulnerability of bringing your sexual life before God together is itself an act of intimacy, and it signals that your sexuality is not a secret compartment but a part of your shared covenant.",
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
                name: "Gary Thomas",
                work: "Sacred Marriage / Married Sex",
                quote: "Sex in a Christian marriage is not just a physical act &mdash; it is a spiritual discipline, a covenant renewal, and a form of worship. When we give ourselves to our spouse, we are enacting the very gospel we preach.",
                bio: "Gary Thomas is an author and speaker whose books on Christian marriage and sexuality have sold millions of copies. His Sacred Marriage (2000) reframed marriage as primarily a vehicle for sanctification rather than happiness. His later Married Sex (2021) addresses sexual intimacy in marriage with pastoral directness, drawing on Song of Solomon to celebrate marital eros as holy and God-honoring.",
              },
              {
                name: "Tim Keller",
                work: "The Meaning of Marriage",
                quote: "Sex is supposed to be a foretaste of the complete union with God for which we were made &mdash; and that is why the distortion of sex, whether through lust or pornography or adultery, is such a profound spiritual desecration. You are misusing a sign of the kingdom of God.",
                bio: "Timothy Keller was founding pastor of Redeemer Presbyterian Church in Manhattan and one of the most influential evangelical theologians of his generation. The Meaning of Marriage (2011, co-authored with Kathy Keller) addresses sexuality with the theological depth and cultural engagement characteristic of Keller&rsquo;s work, grounding sexual ethics not in prohibition but in the gospel&rsquo;s view of what sex is for.",
              },
              {
                name: "Christopher West",
                work: "Theology of the Body for Beginners",
                quote: "The body &mdash; and in a particular way the sexual body &mdash; makes visible what is invisible: the spousal love of God. This is why the body and sexuality can never be treated as merely biological. They are sacramental &mdash; they speak of God.",
                bio: "Christopher West is a Catholic theologian who has spent decades popularizing John Paul II&rsquo;s Theology of the Body &mdash; a sustained philosophical and theological reflection on human sexuality developed across 129 papal addresses. West&rsquo;s accessible presentations have influenced both Catholic and Protestant understanding of sexuality as inherently theological, not merely moral.",
              },
              {
                name: "Juli Slattery",
                work: "Rethinking Sexuality",
                quote: "Sexuality is not primarily about what you do with your body. It is about the deepest longings of your heart for intimacy, belonging, and love &mdash; longings that God himself placed there and that find their ultimate answer only in him.",
                bio: "Juli Slattery is a clinical psychologist, author, and founder of Authentic Intimacy, a ministry that addresses sexuality from a Christian perspective. Her Rethinking Sexuality (2018) argues for a comprehensive theology of sexuality that goes beyond behavioral rules to address the deeper spiritual and relational realities that sexual behavior reflects. She speaks with particular care about sexual brokenness and healing.",
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
              { ref: "Genesis 2:24-25", text: "Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh. And the man and his wife were both naked and were not ashamed." },
              { ref: "Song of Solomon 1:2", text: "Let him kiss me with the kisses of his mouth! For your love is better than wine." },
              { ref: "Song of Solomon 4:10", text: "How beautiful is your love, my sister, my bride! How much better is your love than wine, and the fragrance of your oils than any spice!" },
              { ref: "1 Corinthians 7:3-5", text: "The husband should give to his wife her conjugal rights, and likewise the wife to her husband. For the wife does not have authority over her own body, but the husband does. Likewise, the husband does not have authority over his own body, but the wife does. Do not deprive one another, except perhaps by agreement for a limited time, that you may devote yourselves to prayer; but then come together again, so that Satan may not tempt you because of your lack of self-control." },
              { ref: "1 Corinthians 6:18-20", text: "Flee from sexual immorality. Every other sin a person commits is outside the body, but the sexually immoral person sins against his own body. Or do you not know that your body is a temple of the Holy Spirit within you, whom you have from God? You are not your own, for you were bought with a price. So glorify God in your body." },
              { ref: "Hebrews 13:4", text: "Let marriage be held in honor among all, and let the marriage bed be undefiled, for God will judge the sexually immoral and adulterous." },
              { ref: "Proverbs 5:18-19", text: "Let your fountain be blessed, and rejoice in the wife of your youth, a lovely deer, a graceful doe. Let her breasts fill you at all times with delight; be intoxicated always in her love." },
              { ref: "Ephesians 5:31-32", text: "&ldquo;Therefore a man shall leave his father and mother and hold fast to his wife, and the two shall become one flesh.&rdquo; This mystery is profound, and I am saying that it refers to Christ and the church." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What question or struggle about sexuality are you bringing before God?</label>
                  <textarea
                    value={jQuestion}
                    onChange={e => setJQuestion(e.target.value)}
                    placeholder="Name the question, fear, wound, or confusion honestly..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What does Scripture or sound theology say is true in this area?</label>
                  <textarea
                    value={jTruth}
                    onChange={e => setJTruth(e.target.value)}
                    placeholder="What is the truth that corrects, heals, or anchors you?"
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What concrete step or application does this call you toward?</label>
                  <textarea
                    value={jApplication}
                    onChange={e => setJApplication(e.target.value)}
                    placeholder="A conversation, a habit to break or build, a person to see, a Scripture to sit with..."
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
                {e.question && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Question / Struggle</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.question}</p></div>}
                {e.truth && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Truth</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.truth}</p></div>}
                {e.application && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Application</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.application}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="pBX5B8XsIWg" title="Sexual Intimacy in Marriage &mdash; Gary Thomas" />
            <VideoEmbed videoId="VTIeGCIb1cQ" title="Song of Solomon &mdash; What the Bible Really Says About Sex" />
            <VideoEmbed videoId="UNEpEbg1OuE" title="Theology of the Body &mdash; Christopher West" />
            <VideoEmbed videoId="HqVyb9INrjo" title="Healing from Pornography in Marriage" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
