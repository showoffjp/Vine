"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const JOURNAL_KEY = "vine_men_depression_entries";
interface JournalEntry { id: string; date: string; text: string; }

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function DepressionMenPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(JOURNAL_KEY);
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!draft.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() };
    const updated = [entry, ...entries];
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
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED, textTransform: "uppercase", letterSpacing: 2 }}>
          Vine Pastoral Care
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, marginBottom: 12, lineHeight: 1.2 }}>
          Depression in Men
        </h1>
        <p style={{ color: MUTED, fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
          Men are half as likely to be diagnosed with depression and far more likely to die by suicide.
          The gap between suffering and help-seeking is often filled with silence. That silence costs lives.
        </p>

        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{
              padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`,
              background: tab === i ? ACCENT : "transparent", color: tab === i ? TEXT : MUTED,
              cursor: "pointer", fontSize: 14, fontWeight: tab === i ? 700 : 400, transition: "all 0.2s"
            }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Male Depression Often Looks Different", body: "In men, depression frequently presents not as sadness but as irritability, anger, risk-taking, overwork, substance use, emotional withdrawal, and physical complaints. Men are culturally and neurologically less likely to label internal pain as depression — which means it goes unnamed and untreated. What looks like 'being difficult' is often being devastated." },
              { title: "Biblical Men Who Collapsed Under the Weight", body: "The Bible does not portray male emotional breakdown as weakness or faithlessness. Elijah collapsed under a juniper tree and asked to die (1 Kings 19). Jeremiah cursed the day he was born (Jeremiah 20:14–18). Job demanded an audience with God to lodge his complaint. David wrote psalms soaked in despair. These are not marginal figures — they are prophets and kings, men of profound faith who also fell apart." },
              { title: "Christian Masculinity and the Silence Mandate", body: "Many men in the church have absorbed a version of masculinity that equates emotional strength with emotional absence — and spiritual leadership with having things together. This creates a double bind: men cannot admit struggle without feeling like failures as men and as Christians. This toxic fusion of cultural masculinity and spiritual performance must be named and dismantled." },
              { title: "Asking for Help Is Strength", body: "There is a growing movement redefining strength not as independence but as courage — and going to therapy or asking a friend for help is an act of courage, not failure. Research by Terrence Real (founder of the Relational Life Institute) shows that men's help-seeking barriers are primarily cultural, not intrinsic. When the culture changes and men are given permission, they use mental health resources at similar rates to women." },
              { title: "The Risk of Untreated Depression", body: "Men complete suicide at four times the rate of women. Untreated depression is a leading driver of that statistic. Men over 65 have the highest rates of completed suicide of any demographic group. The stakes of male silence about depression are not abstract — they are the difference between life and death for fathers, husbands, pastors, sons, and friends." },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 8, fontSize: 17 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Elijah (1 Kings 19)", role: "Prophet", quote: "I have had enough, Lord. Take my life; I am no better than my ancestors.", insight: "After his greatest professional triumph (Mt. Carmel), Elijah collapsed. God's response was not rebuke — it was rest, food, and water, twice, before any theological conversation. The sequence matters: God addressed the body before the soul. Elijah's depression was treated, not condemned." },
              { name: "Terrence Real", role: "Therapist, Author of I Don't Want to Talk About It", quote: "Male depression is a secret epidemic. Men hide it from their families, their doctors, and from themselves — and the cost is staggering.", insight: "Real's groundbreaking work identified 'covert depression' as the primary way depression presents in men — through action, anger, and withdrawal rather than overt sadness. His framework has helped thousands of men finally name what they have been carrying." },
              { name: "Andrew Solomon", role: "Author, The Noonday Demon", quote: "The opposite of depression is not happiness but vitality — and it was vitality that seemed to seep away from me in that early summer.", insight: "Solomon's Pulitzer Prize–winning work on depression — including his own — provides language for an experience that defies easy description. His TED Talk on depression has been viewed over 7 million times." },
              { name: "David (Psalm 22, 38, 88)", role: "King, Psalmist", quote: "I am a worm and not a man, scorned by everyone, despised by the people. All who see me mock me... Why, Lord, do you stand far off? (Psalm 22:6-7, 1)", insight: "David's psalms of desolation give men permission to use the full emotional register in prayer. The psalms of lament are not edited for male stoicism — they are raw, unfiltered, and God-addressed." },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ fontWeight: 700, color: TEXT, fontSize: 16 }}>{v.name}</div>
                <div style={{ color: ACCENT, fontSize: 13, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 16, color: TEXT, fontStyle: "italic", margin: "0 0 12px" }}>"{v.quote}"</blockquote>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{v.insight}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Name What You're Experiencing Without Filtering", body: "Before anything else: give your experience a name. Write it down or say it out loud: 'I am depressed.' Not 'I've been a little off.' Not 'I've been stressed.' The act of accurate naming breaks the first level of isolation. You are not weak for experiencing this. You are human." },
              { title: "Talk to One Person", body: "The research on male depression shows that men with a single close friend who knows about their mental state do significantly better. One person. Not a group. Not public disclosure. Find one person you trust — a friend, a pastor, a spouse, a brother — and tell them you are struggling. The secret keeps you sick; the telling begins the healing." },
              { title: "See a Doctor", body: "Depression has biological components. A full physical including thyroid function, testosterone levels, vitamin D, B12, and sleep quality is a legitimate starting point. Some men's depression is primarily biological and responds well to medication. This is not weakness — it is medicine. A GP or psychiatrist is the right first stop." },
              { title: "Exercise as Treatment", body: "Research shows that regular aerobic exercise (30 minutes, 3–5 times per week) is as effective as antidepressants for mild to moderate depression. For men, who often have physical activity as an existing self-regulation strategy, this is an accessible entry point. The goal is not fitness — it is neurochemistry." },
              { title: "Find a Therapist Who Works with Men", body: "Not all therapists are equally skilled at working with men. Look for someone trained in relational life therapy, men's issues, or who explicitly works with men's emotional health. Many men find male therapists easier to start with. Open Path Collective (openpathcollective.org) offers reduced-cost therapy for those without means." },
              { title: "Monitor for Crisis", body: "Know the warning signs that depression has escalated to crisis: giving away possessions, saying goodbye, acquiring means for self-harm, withdrawing from everything. If you see these in yourself or another man, act immediately. The 988 Lifeline is available 24/7 — call or text 988." },
            ].map(p => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 8, fontSize: 16 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.body}</p>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>Crisis & Support Resources</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { label: "988 Suicide & Crisis Lifeline", val: "Call or text 988 — 24/7" },
                  { label: "Crisis Text Line", val: "Text HOME to 741741" },
                  { label: "NAMI Helpline", val: "1-800-950-6264" },
                  { label: "Open Path Collective", val: "openpathcollective.org — affordable therapy" },
                  { label: "Relational Life Institute", val: "terryreal.com — men's emotional health resources" },
                ].map(r => (
                  <div key={r.label} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <span style={{ color: TEXT, fontWeight: 600, minWidth: 200 }}>{r.label}:</span>
                    <span style={{ color: MUTED }}>{r.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "1 Kings 19:5–6", text: "All at once an angel touched him and said, 'Get up and eat.' He looked around, and there by his head was some bread baked over hot coals, and a jar of water. He ate and drank and then lay down again.", note: "God's first response to Elijah's suicidal collapse was not a sermon — it was bread and water. Physical care preceded spiritual care. This models what the church must do for depressed men." },
              { ref: "Psalm 31:10–12", text: "My life is consumed by anguish and my years by groaning; my strength fails because of my affliction, and my bones grow weak. Because of all my enemies, I am the utter contempt of my neighbors and an object of dread to my closest friends.", note: "David's description of depression is clinical in its precision — physical deterioration, social isolation, cognitive distortion. He addressed it to God, not away from God." },
              { ref: "Jeremiah 20:14", text: "Cursed be the day I was born! May the day my mother bore me not be blessed!", note: "Jeremiah's cry — the canonical equivalent of wishing he had never been born — is in the Bible. It was not edited out. Men can bring this level of despair to God." },
              { ref: "Matthew 26:38", text: "My soul is overwhelmed with sorrow to the point of death. Stay here and keep watch with me.", note: "Jesus — in Gethsemane — used the language of overwhelming sorrow to the point of death. He did not manage his emotions silently. He named them and asked for company." },
              { ref: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", note: "Not distant from, not disappointed by — close to. The brokenhearted have God's particular nearness. This is promise, not platitude." },
              { ref: "Romans 5:3–4", text: "We also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope.", note: "This text has been misused to shame men out of acknowledging their pain. Read carefully: it does not deny suffering. It traces a slow arc through it. The starting point is suffering — real and named." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: 6 }}>{s.ref}</div>
                <div style={{ color: TEXT, fontStyle: "italic", marginBottom: 8, lineHeight: 1.6 }}>"{s.text}"</div>
                <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{s.note}</div>
              </div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 16 }}>Reflection Prompts</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                {[
                  "What messages have you received — from family, church, culture — about what men are supposed to do with pain? Where did those messages come from?",
                  "When did you last feel genuinely okay? What has changed since then?",
                  "Who in your life knows how you actually are? If no one, who could you tell one true thing to this week?",
                  "What does 'being strong' mean to you? Is that definition helping you or hurting you?",
                ].map(q => (
                  <div key={q} style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, paddingLeft: 12, borderLeft: `2px solid ${BORDER}` }}>{q}</div>
                ))}
              </div>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="Write your thoughts here..."
                style={{ width: "100%", minHeight: 120, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 14, resize: "vertical", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 12, padding: "10px 24px", background: ACCENT, color: TEXT, border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                Save Entry
              </button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ color: MUTED, fontSize: 13 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 12 }}>Delete</button>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, whiteSpace: "pre-wrap" }}>{e.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 5 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              Teaching on male depression, emotional honesty, biblical men who broke down, and the path to help.
            </p>
            <div style={{ display: "grid", gap: 20 }}>
              <VideoEmbed videoId="G-2e9mMf7E8" title="Men and Depression: Breaking the Silence" />
              <VideoEmbed videoId="4Eg_di-O8nM" title="Elijah Under the Juniper Tree: When Strong Men Collapse" />
              <VideoEmbed videoId="hJkLBPIbZr4" title="Biblical Masculinity and the Full Emotional Life" />
              <VideoEmbed videoId="7_CGP-12AE0" title="Asking for Help Is Strength: A New Story for Men" />
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
