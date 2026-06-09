"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Addiction Is Not Primarily a Moral Failure",
    verse: "Romans 7:15",
    text: "\"I do not understand what I do. For what I want to do I do not do, but what I hate I do.\" Paul's anguished description of the divided self — wanting to do right and doing otherwise — resonates across centuries with every person trapped in addiction. Modern neuroscience has confirmed what Paul intuited: addiction rewires the brain's reward and control systems in ways that make the will genuinely compromised. This is not a theological concession to excuse sin. It is an honest account of how opioid addiction works. The person who cannot stop using fentanyl is not simply choosing destruction — they are living in a body that has been neurologically hijacked.",
  },
  {
    title: "Overdose Is Not Suicide and Is Not a Judgment",
    verse: "Lamentations 3:22",
    text: "\"Because of the LORD's great love we are not consumed, for his compassions never fail.\" Many Christian families who have lost someone to opioid overdose are haunted by the question of eternal judgment. The church has sometimes been too hasty to categorize overdose as an act of deliberate self-destruction. It is more accurately understood as the outcome of a disease — one that is frequently fatal, and one that the person was often desperately trying to escape. God's mercies are not predicated on clean toxicology reports.",
  },
  {
    title: "Healing Requires Community, Not Shame",
    verse: "Galatians 6:1–2",
    text: "\"Brothers and sisters, if someone is caught in a sin, you who live by the Spirit should restore that person gently. But watch yourselves, or you also may be tempted. Carry each other's burdens, and in this way you will fulfill the law of Christ.\" The word translated 'restore' is the Greek katartizo — to mend, as a fisherman mends a net, or a physician sets a bone. It presupposes skill, patience, and contact with the damage. Shame-based responses to addiction do not mend anything. They drive people further from the communities that might actually help.",
  },
  {
    title: "Medication-Assisted Treatment Is Not a Lesser Recovery",
    verse: "Sirach 38:4",
    text: "\"The Lord created medicines from the earth, and a sensible person will not hesitate to use them.\" (Deuterocanonical text, widely recognized in church history.) The stigma around medication-assisted treatment (MAT) — buprenorphine, methadone, naltrexone — is one of the most harmful myths in Christian communities. MAT reduces overdose deaths by 50%. It is not 'trading one addiction for another' — it is a medical treatment for a medical condition. Rejecting MAT on spiritual grounds costs lives.",
  },
  {
    title: "Relapse Is Part of the Disease, Not the End of the Story",
    verse: "Proverbs 24:16",
    text: "\"For though the righteous fall seven times, they rise again, but the wicked stumble when calamity strikes.\" Relapse rates for opioid use disorder are similar to other chronic diseases: diabetes, hypertension, asthma. Most people in sustained recovery have relapsed. Each relapse is dangerous — fentanyl overdose is now the leading cause of death for Americans aged 18–49 — but relapse does not mean the person is beyond help or hope. It means the disease remains active and treatment needs adjustment.",
  },
];

const voices = [
  {
    id: 1,
    name: "Sam Quinones",
    role: "Journalist, Author of Dreamland and The Least of Us",
    quote: "Fentanyl has changed everything. It's not the same as the heroin crisis. It's a mass casualty event happening in slow motion, in every community, in every church.",
    bio: "Quinones's reporting on the opioid epidemic — from OxyContin's origins to the fentanyl crisis — is the most comprehensive journalistic account of how the epidemic developed and what it has done to communities, families, and faith.",
  },
  {
    id: 2,
    name: "Johann Hari",
    role: "Author, Chasing the Scream",
    quote: "The opposite of addiction is not sobriety. The opposite of addiction is connection.",
    bio: "Hari's research on addiction reshaped popular understanding of the social and relational roots of substance use disorders, emphasizing that community — including faith community — is the most powerful protective factor against addiction.",
  },
  {
    id: 3,
    name: "Dr. Nora Volkow",
    role: "Director, National Institute on Drug Abuse",
    quote: "Addiction is a brain disease. It is not a moral failing. And it is treatable — if we remove the stigma that prevents people from seeking care.",
    bio: "Volkow's neurobiological research on addiction has been foundational to the shift from moral frameworks to medical frameworks — with significant implications for how Christian communities should respond to those struggling with opioids.",
  },
  {
    id: 4,
    name: "Fr. Bill Hultberg",
    role: "Catholic priest and addiction recovery chaplain",
    quote: "People in addiction are not failing God. They are suffering. The church's job is to be a hospital for the suffering — not a courtroom for the guilty.",
    bio: "Hultberg has ministered to people in addiction for decades in parish and treatment settings, developing a pastoral theology of addiction that integrates medical understanding with sacramental care.",
  },
];

const practices = [
  {
    icon: "🏥",
    title: "Seek Medical Treatment First",
    text: "Opioid use disorder is a medical condition. The first priority is safety: if someone is in active addiction, contact SAMHSA's National Helpline (1-800-662-4357) or a local addiction medicine physician. Medication-assisted treatment (buprenorphine/Suboxone, methadone, naltrexone/Vivitrol) is the most effective treatment for opioid use disorder and dramatically reduces overdose death risk.",
  },
  {
    icon: "💊",
    title: "Carry Naloxone (Narcan)",
    text: "Every family member of someone with opioid use disorder should carry naloxone (Narcan). It is available over the counter in most states and reverses opioid overdose within minutes. Knowing how to use it and having it available is a life-or-death practical step. Contact your local pharmacy or harm reduction organization to get trained.",
  },
  {
    icon: "🤝",
    title: "Attend Al-Anon or Nar-Anon as a Family Member",
    text: "Addiction does not only affect the person using — it reshapes entire families. Al-Anon and Nar-Anon offer free peer support groups for family members of people with substance use disorders. Many Christian versions exist (Celebrate Recovery and its family track). Family members need support that is independent of the person in recovery.",
  },
  {
    icon: "⛪",
    title: "Connect with Celebrate Recovery or Refuge Recovery",
    text: "Celebrate Recovery is the largest Christ-centered 12-step program, with groups in thousands of churches. It provides structured peer support, sponsorship, and spiritual community for people in recovery. Find a local group at celebraterecovery.com. If the person in recovery is not ready for explicitly Christian settings, Refuge Recovery offers a peer-support alternative.",
  },
  {
    icon: "🚫",
    title: "Understand Enabling vs. Supporting",
    text: "There is a meaningful difference between enabling (providing money, housing, or cover for continued use) and supporting (connection, presence, treatment access). Families often enable in the name of love. An addiction counselor or therapist can help families identify enabling patterns and replace them with responses that actually support recovery. This is not about tough love — it is about effective love.",
  },
  {
    icon: "🕊️",
    title: "Pray With and For the Person — Not At Them",
    text: "Spiritual care for someone in addiction works best when it is offered, not imposed. Ask if you can pray together. Offer to read Scripture or attend church together, but do not make your relationship conditional on their spiritual performance. The person in addiction is frequently already overwhelmed by shame; adding spiritual condemnation does not help — it drives them away from the resources that might.",
  },
];

const scriptures = [
  { verse: "Isaiah 61:1", text: "\"The Spirit of the Sovereign LORD is on me, because the LORD has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners.\"" },
  { verse: "Psalm 40:2", text: "\"He lifted me out of the slimy pit, out of the mud and mire; he set my feet on a rock and gave me a firm place to stand.\"" },
  { verse: "Romans 8:1", text: "\"Therefore, there is now no condemnation for those who are in Christ Jesus.\"" },
  { verse: "2 Corinthians 12:9", text: "\"My grace is sufficient for you, for my power is made perfect in weakness.\"" },
  { verse: "Galatians 6:2", text: "\"Carry each other's burdens, and in this way you will fulfill the law of Christ.\"" },
  { verse: "Jeremiah 29:11", text: "\"For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.\"" },
];

type OpioidEntry = {
  id: string;
  date: string;
  situation: string;
  honest: string;
  prayer: string;
};

export default function AddictionOpioidFentanylRecoveryChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<OpioidEntry[]>([]);
  const [situation, setSituation] = useState("");
  const [honest, setHonest] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_opioidfentanylrecovery_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!situation.trim()) return;
    const entry: OpioidEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      situation,
      honest,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_opioidfentanylrecovery_entries", JSON.stringify(updated));
    setSituation(""); setHonest(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_opioidfentanylrecovery_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌿</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>
            Opioid & Fentanyl Addiction Recovery: Christian Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For those in opioid addiction, families of those struggling, and those who have lost someone — pastoral theology without shame, medical clarity without condemnation, and practical pathways toward recovery and wholeness.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Crisis: <strong>988 Suicide & Crisis Lifeline</strong> | <strong>SAMHSA Helpline:</strong> 1-800-662-4357 | <strong>Poison Control (overdose):</strong> 1-800-222-1222
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer",
              background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED,
              fontWeight: tab === t ? "bold" : "normal", fontSize: "0.875rem",
              textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", color: "#fff", flexShrink: 0 }}>
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: TEXT }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.role}</div>
                  </div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", margin: "0 0 0.75rem" }}>
                  "{v.quote}"
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${GREEN}` }}>
                <div style={{ color: GREEN, fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, marginBottom: "1rem", fontWeight: "bold" }}>Private Journal</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>Where are things right now — in recovery, in relapse, in the family situation?</label>
                <textarea value={situation} onChange={e => setSituation(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What is the most honest thing you can say about today?</label>
                <textarea value={honest} onChange={e => setHonest(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer — for yourself or for the person you love:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.situation && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Situation:</strong> {e.situation}</p>}
                {e.honest && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Honest:</strong> {e.honest}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="ao8L-0nSYzg" title="Sam Quinones — Fentanyl and the Crisis Devastating American Communities" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Sam Quinones: Fentanyl and the Crisis Devastating American Communities</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Journalist Sam Quinones on how fentanyl changed the nature of the opioid crisis and what communities — including faith communities — can do</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="ReRcHdeUG9Y" title="Celebrate Recovery — A Christ-Centered Approach to Addiction" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Celebrate Recovery: The Christ-Centered 12-Step Program</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Overview of Celebrate Recovery — how the program works, what it offers, and how to find a group in your area</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="Y7dQWKloLjA" title="Medication-Assisted Treatment — What the Church Needs to Know About MAT" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Medication-Assisted Treatment: What Faith Communities Need to Know</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Why MAT (buprenorphine, methadone, naltrexone) is not a lesser recovery — and why stigma against it costs lives in Christian communities</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="e9dZQelULDk" title="How to Use Narcan — Naloxone Overdose Reversal Training" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>How to Use Narcan: Naloxone Overdose Reversal Training</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Step-by-step training on recognizing an opioid overdose and administering naloxone — every family affected by opioid use disorder should watch this</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
