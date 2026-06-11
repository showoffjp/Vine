"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

const theology = [
  {
    title: "God Has Always Been with the Imprisoned",
    body: "Joseph was falsely imprisoned in Egypt and God was with him there (Gen 39:21). Paul and Silas sang hymns at midnight in a Philippian jail (Acts 16:25). John the Baptist sent a message from prison asking if Jesus was really the one (Matt 11:2-3). Jesus described visiting those in prison as visiting Him (Matt 25:36). The prison cell has never been beyond the reach of God, and the person inside it has never been invisible to Him.",
  },
  {
    title: "Your Crime Does Not Define You",
    body: "The most persistent lie of the criminal justice system — and sometimes of the church — is that what you did is who you are. This is not the logic of the gospel. Paul murdered Christians before his conversion and became the church's greatest missionary. Peter denied Christ three times and became the rock on which the church was built. David committed adultery and murder and was called a man after God's own heart. What you did was real and it had real consequences. It is not your permanent identity.",
  },
  {
    title: "Justice, Restoration, and the Biblical Vision",
    body: "The Bible's vision of justice is not primarily punitive — it is restorative. The Hebrew word for justice (mishpat) and the word for righteousness (tzedakah) together describe a social order in which everyone has enough, the vulnerable are protected, and broken relationships are repaired. Restorative justice — focused on repairing harm to victims, communities, and offenders — reflects this biblical vision more than retributive justice alone. Many Christians are finding a faith-driven vocation in restorative justice work.",
  },
  {
    title: "Reentry as Resurrection",
    body: "Leaving prison — even after serving time for real harm done — is its own kind of death and resurrection. The person who walks out is not the same person who walked in, and the world they return to has changed. Finding housing, employment, restored relationships, and community while carrying the stigma of a record is extraordinarily hard. The resurrection narrative — new life emerging from what was dead and entombed — speaks to this experience in ways that deserve pastoral development.",
  },
  {
    title: "The Church's Obligation to the Formerly Incarcerated",
    body: "Hebrews 13:3 calls believers to 'remember those in prison as if you were together with them in prison, and those who are mistreated as if you yourselves were suffering.' The church has largely failed this call — stigmatizing rather than welcoming formerly incarcerated people, refusing them leadership, treating them as permanent second-class members. The early church welcomed people regardless of their legal status in Roman society. The call to the contemporary church is the same.",
  },
];

const voices = [
  {
    name: "Nicky Cruz",
    role: "Gang leader turned evangelist, former juvenile offender",
    quote: "The love of God reached me in the worst place. I know it can reach you too — no matter what you've done, no matter where you've been.",
  },
  {
    name: "Bryan Stevenson",
    role: "Author, Just Mercy; founder of Equal Justice Initiative",
    quote: "The true measure of a society's character is how it treats the poor, the disfavored, the accused, the incarcerated, and the condemned. We are all implicated in creating the conditions that lead people to prison.",
  },
  {
    name: "Shane Claiborne",
    role: "Author, The Irresistible Revolution",
    quote: "The church should be the most hospitable community on earth for formerly incarcerated people — because we believe in transformation, in second chances, in resurrection.",
  },
  {
    name: "Harold Dean Trulear",
    role: "Director of Healing Communities USA, professor of applied theology",
    quote: "The church must engage mass incarceration not just as a justice issue but as a family issue — because incarceration affects entire families and communities, including our congregations.",
  },
];

const practices = [
  {
    title: "Prison Fellowship and Faith-Based Programs",
    body: "Prison Fellowship (prisonfellowship.org) is the largest prison ministry in the US, operating in hundreds of facilities. It provides in-prison programming and reentry support. Many states have faith-based dorms or programs within correctional facilities. These programs provide community, structure, and spiritual formation that can be transformative during incarceration and in reentry. Ask the facility chaplain about available programs.",
  },
  {
    title: "Reentry Support: The Practical Necessities",
    body: "Reentry from incarceration requires rapid navigation of multiple practical systems: housing (many landlords and shelters screen out people with records), employment (many employers will not hire), benefits (Medicaid, SNAP, food assistance vary by state), ID and documentation (often lost during incarceration), and transportation. The National Reentry Resource Center (nationalreentryresourcecenter.org) and local reentry organizations can help. 211 connects to local reentry services.",
  },
  {
    title: "Expungement and Record Clearing",
    body: "Many states allow expungement or sealing of criminal records under certain conditions — which can dramatically improve housing and employment prospects. Legal aid organizations can provide free help evaluating eligibility. Clean Slate Initiatives in many states are expanding automatic expungement. A record does not have to follow you forever; find out what options are available in your state.",
  },
  {
    title: "Relationships with Families",
    body: "Incarceration severely damages family relationships — especially with children, partners, and parents. Rebuilding these relationships takes time, consistency, and often professional support. Family therapy, parenting programs for returning parents, and organizations like the National Partnership for Community Leadership (which trains formerly incarcerated leaders) help rebuild family connections. Be patient with family members who are cautious — they were hurt too.",
  },
  {
    title: "Finding a Church That Actually Welcomes You",
    body: "Not all churches will welcome formerly incarcerated people genuinely. Look for congregations with established prison ministry connections — they tend to have more realistic and grace-based understandings of incarceration and reentry. Celebrate Recovery programs in churches are typically welcoming to people with criminal histories. Being honest with a pastor about your background before you commit to a congregation can help you identify whether genuine welcome exists.",
  },
  {
    title: "Peer Support and Community",
    body: "Other formerly incarcerated people are the most effective source of peer support during reentry — they understand the specific challenges from the inside. Peer mentoring programs through Prison Fellowship, local reentry organizations, and faith communities connect new returnees with those who have navigated reentry successfully. This community is not just support; it is often the difference between successful reentry and return to incarceration.",
  },
];

const scriptures = [
  {
    ref: "Matthew 25:35-36",
    text: "For I was hungry and you gave me something to eat, I was thirsty and you gave me something to drink, I was a stranger and you invited me in... I was in prison and you came to visit me.",
  },
  {
    ref: "Genesis 39:21",
    text: "But while Joseph was there in the prison, the Lord was with him; he showed him kindness and granted him favor in the eyes of the prison warden.",
  },
  {
    ref: "Isaiah 61:1",
    text: "The Spirit of the Sovereign Lord is on me, because the Lord has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners.",
  },
  {
    ref: "Hebrews 13:3",
    text: "Continue to remember those in prison as if you were together with them in prison, and those who are mistreated as if you yourselves were suffering.",
  },
  {
    ref: "Romans 8:1",
    text: "Therefore, there is now no condemnation for those who are in Christ Jesus.",
  },
  {
    ref: "Isaiah 43:18-19",
    text: "Forget the former things; do not dwell on the past. See, I am doing a new thing! Now it springs up; do you not perceive it?",
  },
];

const JOURNAL_KEY = "vine_incarceration_reentry_entries";

interface JournalEntry {
  id: string;
  date: string;
  text: string;
}

const videos = [
  { videoId: "4Eg_di-O8nM", title: "God Is Working – Elevation Church" },
  { videoId: "hJkLBPIbZr4", title: "Freedom in Christ – Steven Furtick" },
  { videoId: "sIaT8Jl2zpI", title: "You Say – Lauren Daigle" },
  { videoId: "7_CGP-12AE0", title: "The Story of the Bible – BibleProject" },
];

export default function IncarcerationReentryPage() {
  const [activeTab, setActiveTab] = useState("Theology");
  const [journalText, setJournalText] = useState("");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });

  function saveEntry() {
    if (!journalText.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), text: journalText.trim() };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setJournalText("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: GREEN + "22", border: `1px solid ${GREEN}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GREEN, marginBottom: 16 }}>
            Incarceration & Reentry
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            Incarceration, Prison & Reentry
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            What you did is not who you are. Paul, Peter, David — God has always built His kingdom through people who failed catastrophically and were restored.
          </p>
        </div>

        {/* Resource Banner */}
        <div style={{ background: "#1a1a2e", border: `1px solid ${GREEN}66`, borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
          <div style={{ fontWeight: 700, color: GREEN, marginBottom: 8 }}>Support Resources</div>
          <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.8 }}>
            <strong style={{ color: TEXT }}>Prison Fellowship:</strong> prisonfellowship.org — in-prison and reentry support<br />
            <strong style={{ color: TEXT }}>National Reentry Resource Center:</strong> nationalreentryresourcecenter.org<br />
            <strong style={{ color: TEXT }}>Dial 211</strong> — local reentry resources for housing, employment<br />
            <strong style={{ color: TEXT }}>988 Lifeline:</strong> call or text 988 — 24/7 crisis support
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${activeTab === tab ? GREEN : BORDER}`, background: activeTab === tab ? GREEN + "22" : "transparent", color: activeTab === tab ? GREEN : MUTED, cursor: "pointer", fontSize: 14, fontWeight: activeTab === tab ? 600 : 400 }}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: GREEN, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v) => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <div style={{ fontWeight: 700, color: TEXT, fontSize: 16 }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: 13, marginBottom: 14 }}>{v.role}</div>
                <blockquote style={{ margin: 0, padding: "14px 18px", borderLeft: `3px solid ${GREEN}`, background: GREEN + "11", borderRadius: "0 8px 8px 0", color: MUTED, lineHeight: 1.8, fontStyle: "italic" }}>
                  "{v.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {practices.map((p) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: GREEN, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {scriptures.map((s) => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontStyle: "italic", fontSize: 16 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.7 }}>
              Write what you carry. Write what you hope for. Write your honest prayer. Your entries are saved locally on this device only.
            </p>
            <textarea
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              placeholder="Write here..."
              style={{ width: "100%", minHeight: 140, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, color: TEXT, fontSize: 15, resize: "vertical", boxSizing: "border-box", outline: "none" }}
            />
            <button
              onClick={saveEntry}
              style={{ marginTop: 12, padding: "10px 28px", background: GREEN, color: "#fff", border: "none", borderRadius: 8, fontWeight: 600, cursor: "pointer", fontSize: 15 }}
            >
              Save Entry
            </button>
            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 16 }}>
              {entries.map((entry) => (
                <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{entry.date}</div>
                  <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, whiteSpace: "pre-wrap" }}>{entry.text}</p>
                  <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: 12, fontSize: 12, color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {videos.map((v) => (
              <VideoEmbed key={v.videoId} {...v} />
            ))}
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
