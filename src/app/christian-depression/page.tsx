"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#3B82F6", TEXT = "#F2F2F8", MUTED = "#9898B3";

type DEPEntry = { id: string; date: string; symptom: string; truth: string; step: string };

export default function ChristianDepressionPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DEPEntry[]>(() => {
    try { const s = localStorage.getItem("vine_christiandepression_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [jSymptom, setJSymptom] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => { localStorage.setItem("vine_christiandepression_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jSymptom.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), symptom: jSymptom, truth: jTruth, step: jStep }, ...prev]);
    setJSymptom(""); setJTruth(""); setJStep("");
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
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Faith &amp; Mental Health</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Depression &amp; the Christian
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Depression is not evidence of weak faith. Elijah asked to die under a broom tree; David&rsquo;s psalms plumbed depths of despair; Jeremiah cursed the day of his birth. The Bible does not explain away suffering &mdash; it teaches us to bring it honestly before a God who is present in the darkness, and to seek healing through every means he has provided.
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
                title: "Biblical Figures with Depression &mdash; Elijah, David, and Jeremiah",
                body: "Some of the most towering figures in Scripture experienced what we would today recognize as severe depression. Elijah, fresh from his greatest triumph at Carmel, collapsed under a broom tree and prayed to die: <em>It is enough; now, O Lord, take away my life</em> (1 Kings 19:4). God&rsquo;s response was not rebuke but care &mdash; food, water, sleep, and a gentle presence. David&rsquo;s psalms chart the full geography of the interior life, including profound despair: <em>My soul is cast down within me</em> (Ps 42:6), <em>I am weary with my moaning; every night I flood my bed with tears</em> (Ps 6:6). Jeremiah cursed the day of his birth (Jer 20:14-18). These are not spiritual failures &mdash; they are testimonies that authentic faith makes room for darkness.",
              },
              {
                title: "Clinical Depression vs. Spiritual Dryness &mdash; A Critical Distinction",
                body: "Not all depression is the same, and the pastoral category of <em>spiritual dryness</em> or <em>the dark night of the soul</em> must be distinguished from clinical depression without being opposed to it. Spiritual dryness is typically a season in which God&rsquo;s presence is less felt, prayer seems flat, and the practices of faith feel hollow &mdash; what John of the Cross called the dark night of the soul. Clinical depression is a medical condition involving persistent low mood, anhedonia, disrupted sleep, cognitive impairment, and often biological dysfunction in serotonin or dopamine systems. These can overlap &mdash; depression can produce spiritual dryness, and spiritual dryness can be accompanied by depressive symptoms. The critical pastoral error is treating clinical depression as though it were purely a spiritual problem, withholding or discouraging medical treatment.",
              },
              {
                title: "When to Seek Counseling or Medication &mdash; Grace Through Means",
                body: "The Reformers developed the principle of <em>means of grace</em> &mdash; God typically works not through bypassing the physical world but through it. Therapy and medication are means through which God&rsquo;s healing can come. There is no more spiritual virtue in refusing an antidepressant for clinical depression than in refusing insulin for diabetes. The church must clearly communicate that seeking professional help is an act of wisdom, not a failure of faith. A pastor who counsels someone with severe depression to pray more rather than to see a psychiatrist has confused a category. Good pastoral care in the face of depression includes: active listening without quick answers, encouragement of professional help where warranted, community support, and the long patience to be present in darkness.",
              },
              {
                title: "Lament as Spiritual Discipline &mdash; the Psalms of Darkness",
                body: "Roughly one third of the Psalms are laments &mdash; poems of complaint, confusion, and raw grief addressed directly to God. The lament psalm is structurally revelatory: it typically moves from cry (God, where are you?) to complaint to petition to some form of expression of trust &mdash; but the trust is earned through the lament, not bypassed by it. Walter Brueggemann argues that the church&rsquo;s marginalization of lament leaves it with an impoverished theology &mdash; unable to make theological sense of suffering. The person with depression is not being unfaithful when they cry out from the darkness; they are practicing one of the most ancient and theologically rich forms of prayer. Psalm 88 &mdash; uniquely in the Psalter &mdash; ends without resolution, in darkness: <em>darkness is my closest friend.</em>",
              },
              {
                title: "Joy as Spiritual Discipline and Suicide Prevention",
                body: "The Christian tradition affirms joy as a fruit of the Spirit (Gal 5:22) and a commandment (<em>Rejoice in the Lord always</em>, Phil 4:4) &mdash; but this joy is not synonymous with the absence of depression or the presence of happiness. Lewis distinguished joy from pleasure and happiness; Aquinas treated joy as a theological virtue rather than an emotion. Practicing joy as a discipline includes: gratitude exercises, attention to beauty, active memory of God&rsquo;s faithfulness, and the deliberate choice to orient toward God even when feeling nothing. Regarding suicide: the church must be a place where suicidal thoughts can be named without judgment. If you or someone you know is in crisis, contact the <strong>988 Suicide and Crisis Lifeline</strong> (call or text 988). Suicide is a medical emergency, not a sin to be condemned. The gospel speaks directly to the lie that things will never improve: <em>I am making all things new</em> (Rev 21:5).",
              },
              {
                title: "Community as Healing &mdash; God&rsquo;s Presence Through Others",
                body: "Isolation is both a symptom and a driver of depression &mdash; the depressed person withdraws from community precisely when community is most healing. The body of Christ is designed for mutual burden-bearing: <em>Bear one another&rsquo;s burdens, and so fulfill the law of Christ</em> (Gal 6:2). This requires a church culture where vulnerability is safe, where &ldquo;I am not doing well&rdquo; can be spoken without triggering pity, advice, or discomfort. The friend who simply shows up and sits with the depressed person &mdash; like the three friends of Job before they opened their mouths &mdash; is practicing one of the most profound forms of Christian ministry. Community does not replace professional care but provides the relational soil in which healing can take root.",
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
              "If your depression is persistent (more than two weeks) or significantly impairing daily function, <strong>see a doctor or licensed therapist</strong>. This is not a failure of faith; it is wisdom. Depression often has biological components that respond to treatment. Seeking help is an act of stewardship of the life God gave you.",
              "Practice <strong>lament prayer</strong> by reading a lament psalm (Psalm 42, 43, 88, 22, 130) aloud slowly, and then writing your own lament &mdash; naming before God exactly what you feel without softening it. God is not fragile; he can hold your honest darkness.",
              "Identify <strong>one person</strong> in your community who can be told the truth about how you are doing. Depression thrives in isolation; naming it to a trusted person is often the first step toward the light. Ask that person to check in regularly rather than waiting for you to initiate.",
              "Practice <strong>behavioral activation</strong> &mdash; a well-evidenced therapeutic technique: even when motivation is absent, act as though it were. Take the walk. Make the call. Attend the service. Feelings often follow behavior; waiting to feel ready before acting can deepen the cycle.",
              "Memorize or write out <strong>Psalm 42:5</strong> &mdash; <em>Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God</em> &mdash; and return to it when the darkness is acute. The psalmist is talking to himself, not pretending the darkness is not there.",
              "If you have thoughts of suicide or self-harm, <strong>tell someone immediately</strong> and contact the 988 Suicide and Crisis Lifeline (call or text <strong>988</strong>). These thoughts are a symptom of the illness, not the truth about your worth or your future.",
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
                name: "C.H. Spurgeon",
                work: "Lectures to My Students / Sermons",
                quote: "I am the subject of depressions of spirit so fearful that I hope none of you ever get to such extremes of wretchedness as I go to. You might think that ministers are all happy people &mdash; but there are seasons when we are despondent and despair of ourselves. The Lord knows that some of his most useful servants have passed through the deepest waters.",
                bio: "Charles Haddon Spurgeon, the great Victorian Baptist preacher, struggled with clinical depression for much of his life. His candor about his own darkness &mdash; unusual for Victorian public life &mdash; makes him a rare and precious voice. Spurgeon refused to spiritualize his depression away and refused to hide it from his congregation, modeling the kind of honest pastoral presence the church still needs.",
              },
              {
                name: "Walter Brueggemann",
                work: "Spirituality of the Psalms",
                quote: "The Psalms of disorientation &mdash; the lament psalms &mdash; are crucial because they give voice to the fact that there are seasons when the old orientation no longer holds and the new has not yet arrived. They refuse the cheap grace of forced positivity. They are permission to tell the truth.",
                bio: "Walter Brueggemann is one of the foremost Old Testament scholars of the 20th and 21st centuries, whose work on the Psalms transformed how the church understands lament. His distinction between psalms of orientation, disorientation, and reorientation provides a framework for understanding how the life of faith moves through seasons of darkness &mdash; and why those seasons are not evidence of failure.",
              },
              {
                name: "Matthew Stanford",
                work: "Grace for the Afflicted",
                quote: "The church should be the most informed, most compassionate, most helpful community for those suffering from mental illness. Mental illness is not a spiritual problem to be prayed away. It is a brain disorder requiring professional treatment &mdash; and the grace of God works through that treatment.",
                bio: "Matthew Stanford is a neuroscientist and professor who founded the Hope and Healing Center &amp; Institute in Houston, Texas, devoted to integrating faith and mental health care. <em>Grace for the Afflicted</em> is a landmark text for pastors and churches, providing both a neuroscientific account of mental illness and a theological framework for pastoral care that neither reduces mental illness to sin nor ignores the spiritual dimension of suffering.",
              },
              {
                name: "John of the Cross",
                work: "The Dark Night of the Soul",
                quote: "God deprives the soul of the satisfaction which it previously obtained from spiritual exercises, in order to wean it from spiritual childhood... The soul does not know what has happened to it. Aridity and spiritual emptiness are the school of humility and the stripping of all that is not God.",
                bio: "John of the Cross was a 16th-century Spanish Carmelite mystic and priest whose <em>The Dark Night of the Soul</em> remains the most searching theological account of the experience of spiritual desolation in the Christian tradition. His work is essential for distinguishing the spiritual dark night &mdash; a purgative work of grace &mdash; from clinical depression, while also offering consolation to those whose interior darkness includes both.",
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
              { ref: "Psalm 42:5", text: "Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God." },
              { ref: "Psalm 88:1-3", text: "O Lord, God of my salvation; I cry out day and night before you. Let my prayer come before you; incline your ear to my cry! For my soul is full of troubles, and my life draws near to Sheol." },
              { ref: "1 Kings 19:4-5", text: "But he himself went a day&rsquo;s journey into the wilderness and came and sat down under a broom tree. And he asked that he might die, saying, &ldquo;It is enough; now, O Lord, take away my life, for I am no better than my fathers.&rdquo; And he lay down and slept under a broom tree. And behold, an angel touched him and said to him, &ldquo;Arise and eat.&rdquo;" },
              { ref: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you." },
              { ref: "Psalm 34:18", text: "The Lord is near to the brokenhearted and saves the crushed in spirit." },
              { ref: "Matthew 5:4", text: "Blessed are those who mourn, for they shall be comforted." },
              { ref: "Romans 8:38-39", text: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord." },
              { ref: "Psalm 130:1-2", text: "Out of the depths I cry to you, O Lord! O Lord, hear my voice! Let your ears be attentive to the voice of my pleas for mercy!" },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Lament Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What symptom or darkness are you experiencing right now?</label>
                  <textarea
                    value={jSymptom}
                    onChange={e => setJSymptom(e.target.value)}
                    placeholder="Name what you are experiencing honestly — no need to soften it before God..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What is a true thing about God or yourself that you can hold onto?</label>
                  <textarea
                    value={jTruth}
                    onChange={e => setJTruth(e.target.value)}
                    placeholder="A verse, a memory of grace, a promise — even a small one you can still believe..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What one step can you take today toward healing or connection?</label>
                  <textarea
                    value={jStep}
                    onChange={e => setJStep(e.target.value)}
                    placeholder="Texting a friend, calling a counselor, taking a walk, attending a service..."
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
                {e.symptom && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Symptom / Darkness</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.symptom}</p></div>}
                {e.truth && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Truth</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.truth}</p></div>}
                {e.step && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Next Step</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.step}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="wBrCxBbBH8c" title="Depression and the Christian &mdash; Is It a Sin to Be Depressed?" />
            <VideoEmbed videoId="qLxlPQKBFCk" title="Elijah Under the Broom Tree &mdash; God&rsquo;s Response to Depression in 1 Kings 19" />
            <VideoEmbed videoId="7MCE-NXYNAI" title="Lament Psalms &mdash; How the Bible Teaches Us to Grieve" />
            <VideoEmbed videoId="5g17CWQBE4Y" title="Faith and Mental Health &mdash; Should Christians Take Antidepressants?" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
