"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

type FGEntry = { id: string; date: string; offense: string; process: string; freedom: string };

export default function ChristianForgivenessPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<FGEntry[]>(() => {
    try { const s = localStorage.getItem("vine_christianforgiveness_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [jOffense, setJOffense] = useState("");
  const [jProcess, setJProcess] = useState("");
  const [jFreedom, setJFreedom] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianforgiveness_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jOffense.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), offense: jOffense, process: jProcess, freedom: jFreedom }, ...prev]);
    setJOffense(""); setJProcess(""); setJFreedom("");
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
          Forgiveness: The Christian Way
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Forgiveness is not minimizing what was done, forgetting, or restoring trust unconditionally &mdash; it is releasing the debt and the right to revenge, freeing both the forgiver and the forgiven from the prison of the offense. The gospel makes this not optional but essential, and also makes it possible.
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
                title: "Forgiveness as Gospel Imperative &mdash; The Parable of the Unmerciful Servant (Matthew 18:21-35)",
                body: "When Peter asks how many times he must forgive &mdash; up to seven times? &mdash; Jesus answers seventy-seven times (or seventy times seven), a number that means without limit. The parable that follows is stark: a servant forgiven an astronomical debt (ten thousand talents &mdash; more than a lifetime&rsquo;s wages) immediately imprisons a fellow servant over a trivial sum. The king&rsquo;s response is fury. This is Jesus&rsquo; most direct teaching on forgiveness: the one who has been forgiven the unpayable debt of sin has no grounds to withhold forgiveness for smaller offenses. Refusing to forgive is not merely a moral failure; it is a failure to understand what has been done for us. The gospel creates the conditions and the imperative for human forgiveness.",
              },
              {
                title: "Be Kind to One Another, Tenderhearted, Forgiving &mdash; Ephesians 4:32",
                body: "Paul grounds the command to forgive in the experience of being forgiven: forgiving one another, as God in Christ forgave you. The word translated forgiving (charizomai) is the word for grace &mdash; to grace someone, to give freely what is not deserved. The logic is participatory, not merely imitative: because you have received grace, you participate in the same movement of grace toward others. This is not the forgiveness of those who are naturally magnanimous; it is the forgiveness of those who have internalized the gospel. Colossians 3:13 echoes the same pattern, adding the note that forgiveness is required even when there is genuine grievance: if anyone has a complaint against another, forgiving each other; as the Lord has forgiven you, so you also must forgive.",
              },
              {
                title: "Forgiveness vs. Reconciliation &mdash; A Critical Distinction",
                body: "Forgiveness is a unilateral act of the will: the release of the debt and the right to revenge, which the wronged person can offer regardless of the other party&rsquo;s response. Reconciliation is bilateral: the restoration of the relationship, which requires repentance, changed behavior, rebuilt trust, and the participation of both parties. Conflating these two has caused enormous harm. The survivor of abuse is not required to reconcile with the abuser in order to forgive; forgiveness does not require resuming the relationship. It is possible &mdash; sometimes necessary &mdash; to forgive someone while maintaining distance or no contact. The church has sometimes used forgiveness language to pressure victims back into dangerous situations; this is a serious theological and pastoral error.",
              },
              {
                title: "Forgiving the Unrepentant &mdash; When the Other Person Won&rsquo;t Say Sorry",
                body: "The most common pastoral question about forgiveness is whether it is possible or required when the person who caused harm has not apologized, refuses to acknowledge the wrong, or is no longer living. Christian tradition, especially Lewis Smedes, argues that forgiveness is primarily for the forgiver: holding onto the offense does not punish the offender but imprisons the injured party. Forgiveness releases the forgiver from the loop of replaying the injury and planning retaliation. It does not excuse the offense, restore the relationship, or require any response from the other party. The forgiveness of the cross &mdash; Father, forgive them, for they know not what they do &mdash; was offered without waiting for the soldiers&rsquo; contrition.",
              },
              {
                title: "Forgiving Yourself &mdash; Receiving What God Has Already Given",
                body: "Many Christians are quicker to forgive others than themselves. Persistent self-condemnation after genuine repentance and received absolution is not humility but a failure to receive the gift. 1 John 1:9 promises that if we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness &mdash; the cleansing is thorough. Refusing to forgive oneself sometimes reflects an implicit belief that our sins are too large for the cross, which is a form of pride. The Psalmist knows: as far as the east is from the west, so far does he remove our transgressions from us (Ps 103:12). Self-forgiveness is not minimizing what we did but accepting what has already been done for us.",
              },
              {
                title: "Forgiveness and Trauma &mdash; When Healing Takes Time",
                body: "For survivors of serious trauma &mdash; abuse, assault, profound betrayal &mdash; the call to forgive can feel like a demand to minimize or rush past real injury. Trauma-informed pastoral care recognizes that forgiveness is not a single decision but often a process, sometimes a long one, that may require professional support. The person who forgives today and finds the anger return tomorrow has not failed; they are doing the work. Dan Allender&rsquo;s work in The Wounded Heart and Diane Langberg&rsquo;s on trauma and the church are essential resources. The church that rushes forgiveness past legitimate injury does not help survivors; it re-injures them with spiritual coercion.",
              },
              {
                title: "The Prodigal Son &mdash; The Father Who Runs (Luke 15:11-32)",
                body: "The parable of the prodigal son is among the most profound pictures of forgiveness in Scripture. The father does not wait for the son to complete his carefully-rehearsed speech; he sees him while he is still far off and runs &mdash; a significant detail, since a man of dignity in that culture did not run &mdash; and embraces him before a word is spoken. The forgiveness precedes and enables the confession; the welcome is not contingent on the quality of the returning sinner&rsquo;s performance. The older brother&rsquo;s response is the third act of the parable that is typically underexamined: his inability to participate in the father&rsquo;s forgiveness exposes the bitterness of the dutiful, the ones who have never understood that they too are dependent on grace.",
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
              "Name the offense specifically and honestly. Forgiveness that is vague is rarely real. In prayer or in writing, name what was done to you as clearly as you can &mdash; not what you wish had happened or a softened version of it, but the actual offense. This specificity is not about nursing grievance; it is about bringing the real thing before God rather than a sanitized abstraction.",
              "Distinguish between forgiving and forgetting, or forgiving and reconciling. If you are confusing these, you may be trying to do the impossible (forgetting traumatic injury) while avoiding the possible (releasing the debt). Settle clearly in your own mind: I am not being asked to pretend this did not happen or to restore a relationship without trust being rebuilt; I am being asked to release my right to collect on this debt.",
              "Pray for the person who harmed you. This is Jesus&rsquo; command (Matt 5:44) and it is not primarily for their benefit but yours: it is very difficult to simultaneously pray for someone&rsquo;s genuine good and remain in a posture of revenge. Start small if needed: God, I ask that you bless [name] with what is truly good. It does not need to feel genuine at first; begin the practice and let the feelings follow.",
              "If self-forgiveness is the struggle, write out 1 John 1:9, Psalm 103:12, and Romans 8:1 and sit with them. Ask specifically: Do I believe this is true for others but not for me? If so, what is the basis of that exception? Bring it to confession &mdash; whether in a liturgical setting or in prayer &mdash; and receive the declaration of forgiveness as a real statement about reality, not a formality.",
              "If you are working through forgiveness of a serious offense, consider doing it with a therapist, spiritual director, or trusted mentor who can hold the complexity with you. Forgiveness work for severe trauma is not a solo endeavor; it often requires a guided process over time, not a single prayer.",
              "Read Lewis Smedes&rsquo; Forgive and Forget: Healing the Hurts We Don&rsquo;t Deserve slowly, one chapter at a time. Smedes is the most accessible and pastorally wise guide to the mechanics of forgiveness available, and his insistence that forgiveness is for the forgiver has liberated many people stuck in the loop of waiting for an apology that will never come.",
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
                name: "Lewis Smedes",
                work: "Forgive and Forget: Healing the Hurts We Don&rsquo;t Deserve",
                quote: "When you forgive someone, you slice away the wrong from the person who did it. You disengage that person from his hurtful act. You recreate him. At one moment you identify him ineradicably as the person who did you wrong. The next moment you change that identity. He is remade in your memory. Forgiving is a creative act.",
                bio: "Lewis Smedes was a theologian and ethics professor at Fuller Theological Seminary whose 1984 book Forgive and Forget became the most widely read popular treatment of Christian forgiveness. His insistence that forgiveness is primarily for the forgiver &mdash; that it frees the injured party from the prison of bitterness, regardless of the offender&rsquo;s response &mdash; was both theologically grounded and pastorally liberating. His careful distinction between forgiving, forgetting, and reconciling has shaped how generations of pastors and counselors approach the subject.",
              },
              {
                name: "C.S. Lewis",
                work: "Mere Christianity",
                quote: "Everyone says forgiveness is a lovely idea, until they have something to forgive, as we had during the war. And then, to mention the subject at all is to be greeted with howls of anger. It is not that people think this too high and difficult a virtue: it is that they think it hateful and contemptible.",
                bio: "C.S. Lewis&rsquo;s treatment of forgiveness in Mere Christianity is brief but devastating. He acknowledges with characteristic honesty that forgiveness is not a pleasant abstraction but a concrete demand that meets resistance precisely when the offense is real. His most demanding note &mdash; that we must forgive even the Gestapo &mdash; written during World War II, refuses the comfortable caveat that forgiveness is only required for small or forgivable things.",
              },
              {
                name: "Desmond Tutu",
                work: "No Future Without Forgiveness",
                quote: "Forgiveness is not forgetting; it is not condoning or excusing. In forgiving, people are not being asked to forget. On the contrary, it is important to remember, so that we should not let such atrocities happen again. Forgiveness does not mean condoning what has been done. It means taking what happened seriously and not minimizing it; drawing out the sting in the memory that threatens to poison our entire existence.",
                bio: "Desmond Tutu, the South African archbishop and Nobel Peace Prize laureate, chaired the Truth and Reconciliation Commission after apartheid. His theological understanding of forgiveness was tested not in the abstract but in the face of systematic, violent oppression. No Future Without Forgiveness is his account of what forgiveness looks like in political reality &mdash; rigorously honest about what forgiveness is not (forgetting, condoning, bypassing accountability) while insisting it remains the only path to genuine social healing.",
              },
              {
                name: "Miroslav Volf",
                work: "Exclusion and Embrace",
                quote: "The will to give ourselves to others and &lsquo;welcome&rsquo; them, to readjust our identities to make space for them, is prior to any judgement about others, except that of identifying them as human beings who belong to the same world as I and whose alterity I must respect.",
                bio: "Miroslav Volf, a Croatian theologian at Yale Divinity School, wrote Exclusion and Embrace in the shadow of the war crimes of the former Yugoslavia, including offenses against his own community. It is among the most theologically rigorous treatments of forgiveness, reconciliation, and the nature of embrace as a Christian posture toward the other. Volf does not resolve the tension between the demand to forgive and the reality of atrocity; he holds both in a way that is honest about the difficulty without abandoning the gospel imperative.",
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
              { ref: "Matthew 18:21-22", text: "Then Peter came up and said to him, &ldquo;Lord, how often will my brother sin against me, and I forgive him? As many as seven times?&rdquo; Jesus said to him, &ldquo;I do not say to you seven times, but seventy-seven times.&rdquo;" },
              { ref: "Ephesians 4:31-32", text: "Let all bitterness and wrath and anger and clamor and slander be put away from you, along with all malice. Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you." },
              { ref: "Colossians 3:13", text: "Bearing with one another and, if one has a complaint against another, forgiving each other; as the Lord has forgiven you, so you also must forgive." },
              { ref: "Luke 15:20", text: "And he arose and came to his father. But while he was still a long way off, his father saw him and felt compassion, and ran and embraced him and kissed him." },
              { ref: "Luke 23:34", text: "And Jesus said, &ldquo;Father, forgive them, for they know not what they do.&rdquo;" },
              { ref: "Matthew 6:14-15", text: "For if you forgive others their trespasses, your heavenly Father will also forgive you, but if you do not forgive others their trespasses, neither will your Father forgive your trespasses." },
              { ref: "Psalm 103:11-12", text: "For as high as the heavens are above the earth, so great is his steadfast love toward those who fear him; as far as the east is from the west, so far does he remove our transgressions from us." },
              { ref: "Romans 8:1", text: "There is therefore now no condemnation for those who are in Christ Jesus." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Forgiveness Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What offense are you working to forgive?</label>
                  <textarea
                    value={jOffense}
                    onChange={e => setJOffense(e.target.value)}
                    placeholder="Name what was done, by whom, and why it matters..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What does your process of forgiving look like?</label>
                  <textarea
                    value={jProcess}
                    onChange={e => setJProcess(e.target.value)}
                    placeholder="Prayers, conversations, decisions, what you are releasing and how..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What freedom are you hoping for on the other side?</label>
                  <textarea
                    value={jFreedom}
                    onChange={e => setJFreedom(e.target.value)}
                    placeholder="Released from bitterness, healed memory, restored relationship, peace..."
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
                {e.offense && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Offense</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.offense}</p></div>}
                {e.process && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Process</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.process}</p></div>}
                {e.freedom && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Freedom</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.freedom}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="LjBo4UhBGLI" title="What Is Forgiveness? The Christian Understanding" />
            <VideoEmbed videoId="N9Blw_RiuwY" title="Forgiveness vs. Reconciliation &mdash; An Important Distinction" />
            <VideoEmbed videoId="pJObVQAzObw" title="The Parable of the Prodigal Son: A Father&rsquo;s Forgiveness" />
            <VideoEmbed videoId="5MXHWAKxDos" title="Forgiving Those Who Won&rsquo;t Apologize &mdash; Lewis Smedes" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
