"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#D97706", TEXT = "#F2F2F8", MUTED = "#9898B3";

type DVEntry = { id: string; date: string; question: string; biblical_view: string; grace: string };

export default function ChristianDivorcePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DVEntry[]>(() => {
    try { const s = localStorage.getItem("vine_christiandivorce_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [jQuestion, setJQuestion] = useState("");
  const [jBiblicalView, setJBiblicalView] = useState("");
  const [jGrace, setJGrace] = useState("");

  useEffect(() => { localStorage.setItem("vine_christiandivorce_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jQuestion.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), question: jQuestion, biblical_view: jBiblicalView, grace: jGrace }, ...prev]);
    setJQuestion(""); setJBiblicalView(""); setJGrace("");
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
          Divorce &amp; Remarriage: A Christian Guide
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Divorce touches more lives in the church than we often acknowledge. This guide examines what Scripture says with care and honesty &mdash; not to condemn but to offer clarity, compassion, and the hope of healing and restoration.
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
                title: "God&rsquo;s Design for Marriage &mdash; the Creational Norm (Matthew 19:4-6)",
                body: "Have you not read that he who created them from the beginning made them male and female, and said, &lsquo;Therefore a man shall leave his father and his mother and hold fast to his wife, and the two shall become one flesh&rsquo;? So they are no longer two but one flesh. What therefore God has joined together, let not man separate. Jesus grounds marriage not in Mosaic law but in creation itself &mdash; the pattern established before the fall. The permanence of marriage is not an arbitrary divine preference; it is woven into what marriage is. The &ldquo;one flesh&rdquo; union (Hebrew: basar echad) is a comprehensive joining of persons &mdash; physical, emotional, legal, spiritual. Understanding this is prerequisite to understanding why divorce, wherever it occurs, is a rupture of something profound.",
              },
              {
                title: "Why Moses Permitted Divorce &mdash; Hardness of Heart (Matthew 19:7-9)",
                body: "They said to him, &ldquo;Why then did Moses command one to give a certificate of divorce and to send her away?&rdquo; He said to them, &ldquo;Because of your hardness of heart Moses allowed you to divorce your wives, but from the beginning it was not so.&rdquo; The Mosaic permission in Deuteronomy 24:1-4 was a concession to human sinfulness &mdash; not a divine endorsement but a legal regulation of a practice that was happening. Jesus distinguishes sharply between the Mosaic permission and the original design, and he calls his disciples back to the original design. The Pharisees&rsquo; debate was between the strict school of Shammai (divorce only for sexual immorality) and the broad school of Hillel (divorce for nearly any reason); Jesus&rsquo; answer aligns with Shammai but goes deeper, rooting his teaching in creation rather than law.",
              },
              {
                title: "Malachi&rsquo;s Warning &mdash; God Hates Divorce (Malachi 2:13-16)",
                body: "This second thing you do. You cover the LORD&rsquo;s altar with tears, with weeping and groaning because he no longer regards the offering or accepts it with favor from your hand. But you say, &ldquo;Why does he not?&rdquo; Because the LORD was witness between you and the wife of your youth, to whom you have been faithless, though she is your companion and your wife by covenant. Malachi speaks to men who were abandoning their wives to pursue foreign women and dismissing God&rsquo;s judgment by continuing temple worship. The phrase &ldquo;God hates divorce&rdquo; is often quoted out of context; it is a statement about how God regards the particular abuse of abandonment and covenant-breaking, not a statement that divorce is the unforgivable sin. The context is exploitation &mdash; the strong discarding the vulnerable. The text is a call to fidelity and covenant-keeping, not a hammer for those already broken.",
              },
              {
                title: "The Pauline Exception &mdash; Abandonment by an Unbelieving Spouse (1 Corinthians 7:12-15)",
                body: "But if the unbelieving partner separates, let it be so. In such cases the brother or sister is not enslaved. God has called you to peace. Paul&rsquo;s teaching in 1 Corinthians 7 addresses a situation Jesus did not directly address: a believer married to a non-believer who wishes to leave. Paul&rsquo;s counsel is that the believer should not pursue separation, but if the unbelieving partner departs, the believer is &ldquo;not enslaved&rdquo; (ou dedoulotai) &mdash; a term suggesting freedom from marital obligation. This has come to be called the &ldquo;Pauline privilege&rdquo; or desertion clause. Most Protestant theologians alongside the Matthew 19 exception (porneia) recognize this as a second biblical ground for divorce.",
              },
              {
                title: "Remarriage After Divorce &mdash; the Complexity of the Question",
                body: "Christian traditions differ significantly on whether remarriage is permissible after divorce. Roman Catholic teaching generally holds that the first valid marriage is indissoluble; remarriage after civil divorce is adultery without an annulment. Most Protestant traditions permit remarriage at least when the divorce was for biblical grounds (adultery or abandonment). Some extend permission more broadly. The central text is Matthew 19:9: &ldquo;Whoever divorces his wife, except for sexual immorality, and marries another, commits adultery.&rdquo; The exception clause has been interpreted narrowly (only adultery, only before marriage) and broadly (any serious covenant-breaking). Faithful Christians who have studied the texts carefully land in different places. The church&rsquo;s call is to help people navigate this with both clarity about what Scripture teaches and genuine compassion for those who have already remarried.",
              },
              {
                title: "Grace, Healing, and the Divorced Person in the Church",
                body: "Whatever one concludes about the biblical permissibility of divorce in various circumstances, the church&rsquo;s calling toward those who have been divorced is unambiguous: to provide the kind of community that Jesus himself showed to the broken, the failed, the outcast. The Samaritan woman at the well (John 4) had five husbands and was living with a sixth man; Jesus did not lead with condemnation but with living water. The shame that attaches to divorce in many church cultures &mdash; the sense that divorced people are permanently second-class &mdash; is not the gospel. Restoration, healing, and the ongoing work of sanctification are available to everyone, including those whose marriages have ended.",
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
              "If you are walking through divorce or its aftermath, find a Christian counselor who can help you process both the legal and spiritual dimensions. Divorce involves grief; grief requires care, not suppression.",
              "For churches: create explicit community for the divorced and separated &mdash; not a &ldquo;divorce support group&rdquo; as a concession, but genuine hospitality. A divorced person sitting alone in a church built around nuclear families is experiencing a parable of exclusion. Correct it.",
              "Study the relevant passages carefully and honestly: Matthew 19:3-12, 1 Corinthians 7:10-16, Malachi 2:13-16, and Deuteronomy 24:1-4. Do not read a theology of divorce from proof texts alone; understand the genre, context, and argument of each passage.",
              "If you are considering divorce, exhaust the alternatives first. Seek qualified biblical counseling, consider mediation, and if the marriage is in crisis, pursue intensive marriage ministry. Many marriages that appeared terminal have been restored. Divorce should not be the first resort.",
              "If children are involved in a divorce, they bear costs they did not choose. Their wellbeing should be the organizing concern at every stage. The church can provide specific care for children of divorce &mdash; consistent adult relationships, stability, the assurance that they are not responsible for the break.",
              "Receive the forgiveness and grace available in Christ for whatever role you played in a failed marriage. Ongoing self-condemnation is not sanctification &mdash; it is spiritual paralysis. Bring the specific failures to God, receive absolution, and step into the future God has for you.",
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
                name: "David Instone-Brewer",
                work: "Divorce and Remarriage in the Church",
                quote: "Jesus was not providing a new law about divorce &mdash; he was calling people back to the heart of the law, to covenant faithfulness. And Paul makes clear that the same principle applies: do not break a covenant if you can possibly avoid it. But if the other person breaks it, you are not bound.",
                bio: "David Instone-Brewer is a Senior Research Fellow at Tyndale House, Cambridge, and is considered one of the foremost scholars of divorce in the ancient Jewish and early Christian world. His work on the background of Matthew 19 and 1 Corinthians 7 demonstrates that Jesus&rsquo; teaching on divorce would have been understood by his original audience against the background of Deuteronomy 24 and the rabbinic debates of his day. His conclusion is that Jesus affirmed both the adultery and the neglect/abandonment grounds for divorce that were recognized in Jewish law.",
              },
              {
                name: "Andrew Cornes",
                work: "Divorce &amp; Remarriage: Biblical Principles &amp; Pastoral Practice",
                quote: "There is a tension in the New Testament teaching that we must not resolve too quickly. Jesus calls us to a radical standard of permanence that is not merely Mosaic law but creational design. At the same time, he and Paul make provision for situations in which the covenant has been catastrophically violated. The pastoral task is to hold both truths without letting either collapse.",
                bio: "Andrew Cornes offers one of the more careful conservative treatments of the biblical texts on divorce and remarriage, arguing that the church must take seriously both the exceptional cases Scripture permits and the extraordinary standard of permanence it upholds. He resists both the laxity that treats divorce as a simple pastoral option and the harshness that treats divorced people as permanently disqualified from full participation in church life.",
              },
              {
                name: "Jim Newheiser",
                work: "Marriage, Divorce, and Remarriage",
                quote: "The goal of all biblical counseling in marriage crisis is not to secure the divorce or to prevent the divorce but to bring the glory of God to bear &mdash; which includes taking sin seriously, taking grace seriously, and taking the wellbeing of everyone involved seriously.",
                bio: "Jim Newheiser is a biblical counselor whose treatment of marriage, divorce, and remarriage is notable for its integration of careful exegesis with practical pastoral counsel. He engages the hard cases: abuse, addiction, abandonment, and persistent unrepentant sin. His framework is useful for pastors and counselors who need both theological clarity and practical wisdom for navigating the most difficult marital situations.",
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
              { ref: "Matthew 19:4-6", text: "&ldquo;Have you not read that he who created them from the beginning made them male and female, and said, &lsquo;Therefore a man shall leave his father and his mother and hold fast to his wife, and the two shall become one flesh&rsquo;? So they are no longer two but one flesh. What therefore God has joined together, let not man separate.&rdquo;" },
              { ref: "Matthew 19:9", text: "&ldquo;And I say to you: whoever divorces his wife, except for sexual immorality, and marries another, commits adultery.&rdquo;" },
              { ref: "1 Corinthians 7:10-11", text: "&ldquo;To the married I give this charge (not I, but the Lord): the wife should not separate from her husband (but if she does, she should remain unmarried or else be reconciled to her husband), and the husband should not divorce his wife.&rdquo;" },
              { ref: "1 Corinthians 7:15", text: "&ldquo;But if the unbelieving partner separates, let it be so. In such cases the brother or sister is not enslaved. God has called you to peace.&rdquo;" },
              { ref: "Malachi 2:13-14", text: "&ldquo;The LORD was witness between you and the wife of your youth, to whom you have been faithless, though she is your companion and your wife by covenant.&rdquo;" },
              { ref: "John 4:13-14", text: "&ldquo;Jesus said to her, &lsquo;Everyone who drinks of this water will be thirsty again, but whoever drinks of the water that I will give him will never be thirsty again. The water that I will give him will become in him a spring of water welling up to eternal life.&rsquo;&rdquo;" },
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
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What question are you bringing to Scripture about divorce or remarriage?</label>
                  <textarea
                    value={jQuestion}
                    onChange={e => setJQuestion(e.target.value)}
                    placeholder="Name your question honestly &mdash; God is not threatened by hard questions..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What does the biblical framework offer in response?</label>
                  <textarea
                    value={jBiblicalView}
                    onChange={e => setJBiblicalView(e.target.value)}
                    placeholder="What does Scripture actually say? What have you learned from studying it?"
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>Where are you trusting God for grace, healing, or direction?</label>
                  <textarea
                    value={jGrace}
                    onChange={e => setJGrace(e.target.value)}
                    placeholder="What does receiving grace look like for you in this season?"
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
                {e.question && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Question</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.question}</p></div>}
                {e.biblical_view && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Biblical View</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.biblical_view}</p></div>}
                {e.grace && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Grace</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.grace}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="DdD_Gz4VRFY" title="What Does the Bible Say About Divorce? Matthew 19 Explained" />
            <VideoEmbed videoId="ZbqFz3wMnqQ" title="Biblical Grounds for Divorce &mdash; Adultery and Abandonment" />
            <VideoEmbed videoId="5A4CRwcXGqI" title="Remarriage After Divorce: A Biblical and Pastoral View" />
            <VideoEmbed videoId="SxVcXlk3-Ck" title="Healing After Divorce: Grace, Restoration, and Moving Forward" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
