"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];
const JOURNAL_KEY = "vine_bipolar_entries";

interface JournalEntry { id: string; date: string; text: string; }

function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", background: CARD, border: `1px solid ${BORDER}` }}>
      {playing ? (
        <iframe
          width="100%"
          style={{ aspectRatio: "16/9", display: "block" }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          onClick={() => setPlaying(true)}
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #0a1a0e 0%, #061008 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(58,125,86,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `16px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function BipolarDisorderPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]")); } catch { setEntries([]); }
  }, []);

  function saveEntry() {
    if (!draft.trim()) return;
    const updated = [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setDraft("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 13, letterSpacing: 3, color: ACCENT, textTransform: "uppercase", marginBottom: 12 }}>Bipolar Disorder &amp; Christian Faith</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, margin: "0 0 16px", lineHeight: 1.2 }}>
            The Whole You Belongs to God — in Every Season
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Bipolar disorder is a mood disorder with neurobiological roots, not a character defect or a spiritual failure. Living faithfully with bipolar disorder is one of the harder callings — and it is a calling, not a disqualification.
          </p>
        </div>

        <div style={{ background: "#0d1f15", border: `1px solid ${ACCENT}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 36, fontSize: 14 }}>
          <strong style={{ color: ACCENT }}>Crisis Resources: </strong>
          <span style={{ color: MUTED }}>988 Suicide &amp; Crisis Lifeline — call or text </span>
          <strong style={{ color: TEXT }}>988</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; NAMI Helpline: </span>
          <strong style={{ color: TEXT }}>1-800-950-6264</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; Depression and Bipolar Support Alliance: </span>
          <strong style={{ color: TEXT }}>dbsalliance.org</strong>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`, background: tab === i ? `${ACCENT}22` : "transparent", color: tab === i ? ACCENT : MUTED, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "The Diagnosis Does Not Define You — But It Is Real", body: "Bipolar disorder is characterized by episodes of mania or hypomania alternating with depressive episodes. It is among the most heritable psychiatric conditions and has clear neurobiological underpinnings. It is not a spiritual condition caused by sin, weak faith, or demonic influence. The diagnosis describes a pattern of brain function — it is not an identity, but it is also not something to minimize or deny. Accurate diagnosis is the first step toward effective management." },
              { title: "Taking Medication Is Not a Lack of Faith", body: "The church's discomfort with psychiatric medication has caused genuine harm to people with bipolar disorder. Lithium, mood stabilizers, and atypical antipsychotics are often life-saving for people with bipolar I. Stopping medication — sometimes encouraged by well-meaning pastors during manic phases when the person feels unusually spiritual — can cause catastrophic episodes. Medication for bipolar disorder is analogous to insulin for Type 1 diabetes: the body cannot regulate without it." },
              { title: "Manic Episodes Are Not Spiritual Highs", body: "The elevated mood, grandiosity, and sense of special calling or spiritual intensity in mania can feel like genuine spiritual experience. This is one of the most dangerous aspects of bipolar disorder in Christian contexts: mania mimics zeal. Decisions made during manic episodes — financial, relational, vocational — often cause enormous damage. A trusted accountability partner who knows your diagnosis and can recognize early warning signs is among the most important safety structures you can build." },
              { title: "God Is Present in the Depressive Episodes Too", body: "The depressive phases of bipolar disorder are often the most spiritually distressing — not only because the suffering is intense but because the absence of feeling that characterizes bipolar depression makes it feel like God has withdrawn. This is not divine withdrawal; it is neurological. The Psalms — especially the dark ones — are the theological companion for these seasons. God does not require you to feel the faith to remain in it." },
              { title: "The Body of Christ Bears One Another's Burdens", body: "Galatians 6:2 describes mutual burden-bearing as the fulfillment of the law of Christ. For someone managing bipolar disorder, the community role is concrete: accompanying to appointments, watching for early warning signs, maintaining relationship during depressive withdrawal, avoiding enabling during manic highs. This is expensive friendship. Few churches have built this kind of structure. Advocating for it is a legitimate mission." },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
                <h3 style={{ color: ACCENT, fontSize: "1.1rem", margin: "0 0 12px", fontWeight: 500 }}>{title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}>{body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Kay Warren", role: "Co-founder of Saddleback Church, mental health advocate", quote: "My son Matthew lived with undiagnosed mental illness that we did not understand and the church did not equip us to address. He died by suicide in 2013. The church must do better — name mental illness, fund treatment, reduce stigma, and embrace people who struggle at the center of community life, not the margins.", note: "Warren's public grief after Matthew's death catalyzed a mental health movement within evangelical Christianity. Her work through the Hope for Mental Health initiative at Saddleback has trained thousands of church leaders." },
              { name: "Dr. Francis Collins", role: "Former director, National Institutes of Health; geneticist and Christian", quote: "Mental illness is not a moral failing. The brain is an organ, just like the heart and the kidney. When it malfunctions, it needs treatment — and that treatment is an act of stewardship of the body God gave us.", note: "Collins's combination of scientific credibility and public Christian faith has been important in challenging the evangelical tendency to spiritualize conditions with clear neurobiological bases." },
              { name: "Marya Hornbacher", role: "Author of Madness: A Bipolar Life", quote: "I was absolutely certain, in my mania, that God was speaking to me directly. I was wrong. I was sick. I needed a doctor and a mood stabilizer, not a prophet's platform. Understanding the difference may have saved my life.", note: "Hornbacher's memoir is one of the most clinically detailed and honest accounts of bipolar disorder available. Her honesty about religious experience and manic symptoms is essential reading for pastors and clinicians." },
              { name: "Elijah (prophet)", role: "Old Testament figure, 1 Kings 19", quote: "It is enough; now, O Lord, take away my life, for I am no better than my fathers.", note: "After the spiritual peak of Mount Carmel came complete collapse — suicidal ideation, exhaustion, withdrawal. God's response was not rebuke but food, water, sleep, and presence. The angel came twice. This is biblical mental health care." },
            ].map(({ name, role, quote, note }) => (
              <div key={name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
                <div style={{ marginBottom: 12 }}>
                  <div style={{ color: TEXT, fontWeight: 600, fontSize: "1.05rem" }}>{name}</div>
                  <div style={{ color: ACCENT, fontSize: 13, marginTop: 2 }}>{role}</div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 16, margin: "0 0 12px", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{note}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Commit to Medication Management with a Psychiatrist", body: "Bipolar disorder typically requires lifetime medication management. A psychiatrist (not just a primary care physician) should oversee medication — the titration of mood stabilizers requires specialist expertise. DBSA (dbsalliance.org) and NAMI (nami.org) both have provider directories. If you cannot afford a psychiatrist, community mental health centers provide sliding-scale services." },
              { title: "Build a Wellness Plan for Both Poles", body: "A wellness plan documents your early warning signs for mania (increased activity, decreased need for sleep, irritability, grandiosity) and depression (withdrawal, sleep changes, loss of interest), your trusted contacts, your medication plan, and what you want people to do if they see warning signs. DBSA's free Wellness Tracker app supports this. Build the plan during a stable period, not during an episode." },
              { title: "Regulate Sleep as a Medical Priority", body: "Sleep disruption is both a symptom and a trigger for bipolar episodes. Maintaining a consistent sleep schedule — same bedtime and wake time even on weekends — is one of the highest-leverage behavioral interventions for bipolar stability. Social Rhythm Therapy, a bipolar-specific therapeutic approach, specifically targets circadian rhythm stabilization." },
              { title: "DBSA Peer Support Groups", body: "The Depression and Bipolar Support Alliance runs peer-led support groups — in person and online — specifically for people with bipolar disorder. Peer support from others who live with the condition reduces hospitalization rates. The lived expertise in these groups is irreplaceable. Find groups at dbsalliance.org/support." },
              { title: "Disclosure Decisions in Church Contexts", body: "Whether to disclose a bipolar diagnosis in church contexts is a genuine dilemma. Full disclosure can bring stigma, unsolicited advice about prayer and medication, or removal from ministry roles. Partial disclosure to a few trusted people — your small group leader, a pastor you trust, one close friend — can build the support network you need without exposing yourself to the congregation's potential mishandling of the information." },
              { title: "CBT and IPSRT Therapy", body: "Cognitive Behavioral Therapy adapted for bipolar disorder (CBT-E) helps identify thought patterns that precede mood episodes. Interpersonal and Social Rhythm Therapy (IPSRT) specifically targets the relationship between life rhythms and mood stability. Both are adjuncts to medication, not replacements. A therapist with specific bipolar disorder training is preferred over a generalist." },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
                <h3 style={{ color: ACCENT, fontSize: "1.05rem", margin: "0 0 10px", fontWeight: 600 }}>{title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "1 Kings 19:4–6", text: "He asked that he might die, saying, It is enough; now, O Lord, take away my life. And he lay down and slept under a broom tree. And behold, an angel touched him and said to him, Arise and eat.", note: "After Carmel came complete collapse. God's response was not theological correction but physical care: food, water, rest. The angel came twice — God knew Elijah needed it." },
              { ref: "Psalm 88:13–14", text: "But I, O Lord, cry to you; in the morning my prayer comes before you. O Lord, why do you cast my soul away? Why do you hide your face from me?", note: "The darkest Psalm — it ends without resolution. For those in bipolar depression, this Psalm gives permission to stay in the dark without forcing a false ending." },
              { ref: "Galatians 6:2", text: "Bear one another's burdens, and so fulfill the law of Christ.", note: "The law of Christ fulfilled in mutual burden-bearing. For bipolar disorder, this is a practical call to accompany, monitor, and support." },
              { ref: "2 Corinthians 12:9", text: "But he said to me, My grace is sufficient for you, for my power is made perfect in weakness. Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.", note: "Paul's thorn was not removed. Faithfulness with a permanent condition — neither denying it nor being defined by it — is the pattern Paul models." },
              { ref: "Psalm 42:5", text: "Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God.", note: "The psalmist addresses his own depressed soul. The praise is future-oriented: I shall again. Not today, but again." },
              { ref: "Romans 8:38–39", text: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.", note: "Nor mania, nor depression, nor hospitalization, nor episode. Nothing separates." },
            ].map(({ ref, text, note }) => (
              <div key={ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
                <div style={{ color: ACCENT, fontWeight: 600, marginBottom: 8, fontSize: "0.95rem" }}>{ref}</div>
                <div style={{ color: TEXT, fontStyle: "italic", marginBottom: 10, lineHeight: 1.7, fontSize: "1rem" }}>&ldquo;{text}&rdquo;</div>
                <div style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{note}</div>
              </div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
              <h3 style={{ color: ACCENT, margin: "0 0 8px", fontSize: "1.05rem" }}>Your Reflection Space</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", margin: "0 0 16px", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="What have been your early warning signs? What support has helped most? What do you wish your community understood?"
                style={{ width: "100%", minHeight: 120, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 14, color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 10, padding: "10px 24px", background: ACCENT, border: "none", borderRadius: 8, color: TEXT, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ color: MUTED, fontSize: 13 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>Delete</button>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, whiteSpace: "pre-wrap" }}>{e.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 5 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <VideoEmbed videoId="hJkLBPIbZr4" title="When Your Mind Fights You — Mental Health and Faith" />
            <VideoEmbed videoId="G-2e9mMf7E8" title="Living with Bipolar Disorder: Hope and Healing" />
            <VideoEmbed videoId="4Eg_di-O8nM" title="God in the Darkness — When You Cannot Feel Him" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="The Church and Mental Health: What We Must Do Better" />
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}`, textAlign: "center", color: MUTED, fontSize: 13 }}>
          <p>Every season belongs to God — including this one. You are not your diagnosis, but your diagnosis is real and deserves real care.</p>
          <p style={{ marginTop: 8 }}>DBSA: dbsalliance.org &nbsp;|&nbsp; NAMI: 1-800-950-6264 &nbsp;|&nbsp; 988 Lifeline</p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
