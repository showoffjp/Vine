"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_opioid_recovery_entries";
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
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `18px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function OpioidRecovery() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [draft, setDraft] = useState("");

  function saveEntry() {
    if (!draft.trim()) return;
    const next = [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
    setDraft("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
  }

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Addiction & Recovery</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Opioid Addiction, Recovery, and Christian Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>Finding a path through pain, dependence, and the grace that meets you in the hardest chapters.</p>
        <div style={{ background: "#071a0e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#a0d4b3" }}>
          <strong style={{ color: ACCENT }}>Help Now:</strong> SAMHSA Helpline: <strong>1-800-662-4357</strong> (free, 24/7, confidential) &nbsp;|&nbsp; Crisis Text Line: text HOME to <strong>741741</strong> &nbsp;|&nbsp; 988 Lifeline
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Opioid Addiction Is Not a Moral Failure</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>The opioid crisis began largely with prescribed medications — pain management following surgery, injury, or chronic illness. For many Christians, addiction arrived not through rebellion but through suffering and a medical system that did not protect them. Even when use became recreational, the neuroscience is clear: opioids restructure the brain&apos;s reward circuitry in ways that are not undone by willpower or prayer alone. Calling this a moral failure or a character flaw is theologically inaccurate. It misunderstands the nature of the disease and increases the shame that makes recovery harder. Jesus encountered sick people. He did not tell them to try harder. He healed them.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Medication-Assisted Treatment and Faith</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Buprenorphine (Suboxone) and methadone are evidence-based treatments that dramatically reduce overdose deaths and support stable recovery. Some faith communities have wrongly told people that using these medications is not really being sober, or that accepting medical help is a lack of faith. This teaching has cost lives. There is no theological principle that requires a person to refuse effective medicine for a brain disease. Accepting medical treatment for opioid use disorder is no different from accepting insulin for diabetes. A God who created medicine and gifted healers to humanity is not dishonored when his people use those gifts.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Prodigal Son and the Long Road Home</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Jesus told the story of a son who lost everything to his own choices, came to himself in the far country, and returned to a father who saw him coming while he was still a long way off (Luke 15:20). The father ran. There is no lecture at the door, no period of probation, no conditions. This is the posture of God toward anyone in recovery — not waiting with crossed arms but watching the road with hope. If you have relapsed, if you have been gone a long time, if you have done things that make you certain the door is now closed: it is not. The father is still watching the road.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Shame Is the Enemy of Recovery</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Research consistently shows that shame-based approaches to addiction worsen outcomes. Shame drives people into hiding, prevents them from seeking help, and triggers relapse. The gospel offers something different: not the removal of accountability but the removal of shame&apos;s power. Paul writes in Romans 8:1 that there is therefore now no condemnation for those who are in Christ Jesus. This is not permission to continue using — it is the foundation on which change becomes possible. Recovery is much easier when you are running toward something good than when you are running from a verdict of worthlessness.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Community That Makes Recovery Possible</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Isolation is lethal in opioid addiction. People do not recover alone, and the church at its best is designed to be the kind of community that makes recovery possible — people who know your name, who will call when you go quiet, who will sit with you in the hard moments without flinching. In Ecclesiastes 4:9–10, Qohelet observes that two are better than one, because if either falls, the other can help the fallen one up. But pity the person who falls and has no one to help them up. The recovery community exists because the church has not always been that place. It can be. And when it is, it is the church at its most faithful.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "William Cope Moyers", title: "Broken: My Story of Addiction and Redemption", quote: "Recovery is not the absence of cravings — it is the presence of community, purpose, and a reason to keep choosing life one day at a time." },
              { name: "Greg Williams", title: "The Anonymous People (filmmaker)", quote: "The silence around addiction is the biggest barrier to recovery. When we tell our stories, we save lives — including our own." },
              { name: "Nadia Bolz-Weber", title: "Shameless", quote: "You are not what you did in your worst moment. The grace that finds you in the gutter is the same grace that walks with you in recovery. There is no version of your story that is too far gone." },
              { name: "Keith Miller", title: "A Hunger for Healing", quote: "The 12 Steps and the Sermon on the Mount are addressing the same wound — the self that has been living as if it were God. Surrender is not weakness. It is the beginning of the only kind of life worth having." },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, marginBottom: 12 }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ color: ACCENT, fontWeight: 600 }}>{v.name}</div>
                <div style={{ color: MUTED, fontSize: 13 }}>{v.title}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "SAMHSA Treatment Locator (findtreatment.gov)", body: "The federal treatment locator finds opioid treatment programs, including buprenorphine providers, methadone clinics, and residential programs near you. Search by zip code. SAMHSA Helpline: 1-800-662-4357, 24/7, free, confidential. They can also locate naloxone (Narcan) distribution for overdose prevention." },
              { title: "Medication-Assisted Treatment (MAT)", body: "Ask a doctor about buprenorphine/naloxone (Suboxone) or methadone. These FDA-approved medications reduce cravings, prevent withdrawal, and cut overdose death risk by more than 50%. They are the gold standard of treatment, not a shortcut. Many primary care physicians can now prescribe buprenorphine — you do not need a specialty clinic." },
              { title: "Narcotics Anonymous (na.org)", body: "NA has meetings in virtually every city and country in the world. Online meetings are available 24/7 at virtual.na.org. NA is spiritually grounded but non-denominational and welcomes people at any stage of recovery, including those on MAT. Attending a meeting when you are struggling may be the most important thing you do today." },
              { title: "Celebrate Recovery", body: "A Christ-centered 12-step program, available in thousands of churches. celebraterecovery.com has a meeting locator. CR addresses all hurts, habits, and hangups — not just substance use — and integrates Scripture and faith community explicitly into the recovery process." },
              { title: "Naloxone (Narcan) — Have It", body: "Naloxone reverses opioid overdose in minutes. It is available without a prescription at most pharmacies in the US. If you are in recovery or love someone who is, having naloxone on hand saves lives. NEXT Distro (nextdistro.org) and NASEN (nasen.org) provide free naloxone by mail in many states." },
              { title: "Peer Support Specialists", body: "People with lived experience of addiction who are now in stable recovery. Peer support has strong evidence for improving outcomes. SAMHSA has a national directory. Many states certify Peer Recovery Support Specialists (PRSS) who can walk alongside you during early recovery — not as therapists but as people who understand from the inside." },
            ].map(p => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: ACCENT, fontSize: 17, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
              { ref: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him." },
              { ref: "Isaiah 43:19", text: "See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland." },
              { ref: "Ecclesiastes 4:9–10", text: "Two are better than one, because they have a good return for their labor: if either of them falls down, one can help the other up. But pity anyone who falls and has no one to help them up." },
              { ref: "2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, the new creation has come: the old has gone, the new is here!" },
              { ref: "Psalm 40:2", text: "He lifted me out of the slimy pit, out of the mud and mire; he set my feet on a rock and gave me a firm place to stand." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 600, marginBottom: 8 }}>{s.ref}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.8 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ACCENT, marginBottom: 12 }}>Private Journal</h3>
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>Stored only on this device. Not shared with anyone.</p>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="Where are you today? What do you need? What are you holding?"
                style={{ width: "100%", minHeight: 140, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 15, resize: "vertical", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 10, padding: "10px 24px", background: ACCENT, color: TEXT, border: "none", borderRadius: 8, cursor: "pointer", fontSize: 15 }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{e.date}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{e.text}</p>
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: 10, padding: "6px 14px", background: "transparent", color: MUTED, border: `1px solid ${BORDER}`, borderRadius: 6, cursor: "pointer", fontSize: 13 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <VideoEmbed videoId="4Eg_di-O8nM" title="Addiction, Grace, and the God Who Does Not Give Up" />
            <VideoEmbed videoId="G-2e9mMf7E8" title="Opioid Recovery — Finding Hope in the Darkest Valley" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="The Prodigal Son and What Recovery Really Looks Like" />
            <VideoEmbed videoId="7_CGP-12AE0" title="No Condemnation — Romans 8 and the Recovering Soul" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
