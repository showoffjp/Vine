"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#6B4FBB";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const tabs = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof tabs[number];

const theology = [
  {
    title: "Safety Is Not Unbiblical — It Is Required",
    body: "One of the most harmful theological errors applied to domestic violence is the claim that enduring abuse is required by Christian submission or that leaving a violent spouse is unbiblical. This is not the teaching of Scripture. Paul's instructions on marriage (Ephesians 5) describe mutual self-giving love — a husband who sacrifices himself for his wife as Christ loved the church. Abuse is the opposite of this. Jesus himself commands that when we are persecuted in one city, we flee to another (Matt 10:23). Safety is not faithlessness. It is wisdom.",
  },
  {
    title: "You Are Not Being Punished",
    body: "Domestic abuse survivors are sometimes told — explicitly or implicitly — that they must have done something to deserve this, or that God is using the abuse to sanctify them. This is not theology; it is the logic of the abuser. God does not ordain abuse as a spiritual formation tool. The God who sees 'the violence done to me and my flesh' (Lam 3:58) is not the author of the abuse. He is on the side of the survivor.",
  },
  {
    title: "Covenant Does Not Sanctify Harm",
    body: "Marriage is a covenant, and covenants matter. But covenants are also broken by the party who violates them. A husband who beats his wife, terrorizes his children, or systematically destroys his wife's dignity has already broken the covenant vow — 'to love and to cherish' — before the survivor considers leaving. Christian theology has historically recognized that persistent, unrepentant infidelity, violence, and abandonment break the marital covenant. Many denominations and theologians affirm separation and divorce as legitimate responses to domestic violence.",
  },
  {
    title: "The Church's Failure and Responsibility",
    body: "Churches have too often failed domestic violence survivors by prioritizing the marriage over the safety of the person, by urging couples to 'work through it' in joint counseling (which is contraindicated in abuse situations and can escalate danger), or by shaming survivors into staying. This is a moral failure the church must name. The biblical command to protect the vulnerable applies with full force inside the church's walls. If your church does not have a clear domestic violence response policy, this is a gap that can be named, advocated for, and filled.",
  },
  {
    title: "God Names What Was Done to You",
    body: "The prophet Malachi records God saying 'I hate violence' (Mal 2:16 ESV footnote / alternate reading). God is not neutral on the violence that was done to you. He sees it, He names it as sin, and His posture toward it is not 'work it out' but judgment. The same God who is 'a husband to the widow' (Jer 31:32) and 'Father to the fatherless' (Ps 68:5) is active on behalf of those who have been abandoned, betrayed, and harmed within what should have been a covenant of safety.",
  },
];

const voices = [
  {
    name: "Lundy Bancroft",
    title: "Author, 'Why Does He Do That? Inside the Minds of Angry and Controlling Men'",
    quote: "The abuser's problem is not anger — it is entitlement. He feels that he has the right to control his partner. Counseling that treats the abuse as an anger management problem consistently fails, because the problem is not anger. It is a belief system about power and rights that anger merely expresses.",
  },
  {
    name: "Catherine Clark Kroeger & Nancy Nason-Clark",
    title: "Authors, 'No Place for Abuse: Biblical & Practical Resources to Counteract Domestic Violence'",
    quote: "When a woman asks her pastor 'Is it okay for me to leave?', the question underneath is: Does God see what is happening to me? The answer is yes. And yes, it is more than okay to leave. Your safety is not less important than the institution of marriage. God is not keeping score on your behalf of the abuser.",
  },
  {
    name: "Rachael Denhollander",
    title: "Survivor Advocate, Author, 'What Is a Girl Worth?'",
    quote: "The thing survivors most need from the church is not programs or resources — though those matter. They need to be believed. The act of being believed by one person is often what makes it possible to take the first step toward safety.",
  },
  {
    name: "Judith Herman",
    title: "Author, 'Trauma and Recovery' — Foundational Text in Trauma Therapy",
    quote: "Recovery unfolds in three stages: the establishment of safety, remembrance and mourning, and reconnection with ordinary life. The first task is always safety. Nothing else can be done well without it. Safety is not a luxury of the recovery process — it is the foundation on which everything else is built.",
  },
];

const practices = [
  {
    title: "Creating a Safety Plan",
    body: "If you are currently in a dangerous situation, a safety plan is the most urgent priority. A safety plan includes: identifying signals that danger is escalating, identifying a place to go, knowing your access to documents (ID, passport, bank information, medication), knowing who to call, and knowing the local shelter options. The National Domestic Violence Hotline (1-800-799-7233) can help you build a safety plan by phone or online chat at thehotline.org.",
  },
  {
    title: "Individual Therapy — Not Joint Counseling",
    body: "Joint counseling (couples counseling or marriage counseling) is contraindicated in domestic violence situations. It can provide the abuser with information to use against the survivor and can create a dynamic where the survivor is afraid to speak honestly. Individual trauma-informed therapy is what survivors need — ideally with a therapist who has specific training in domestic violence and trauma. Many domestic violence shelters offer free individual counseling for survivors.",
  },
  {
    title: "Connecting With a Local Shelter or DV Organization",
    body: "Local domestic violence shelters provide emergency housing, legal advocacy, counseling, childcare support, and safety planning at no cost. They are not only for people who need emergency housing — many offer walk-in counseling and advocacy services for survivors still in or recently out of abusive relationships. The National DV Hotline (thehotline.org) has a searchable database of local resources by zip code.",
  },
  {
    title: "Telling a Safe Person",
    body: "Many survivors carry the secret of abuse for years — partly due to shame, partly due to the abuser's isolation tactics, partly due to fear of not being believed. Telling one safe person — a trusted friend, a family member, a pastor who is known to be safe, a doctor — breaks the isolation that enables continued abuse. You do not have to have a plan or be ready to leave before telling someone. Telling is itself a step.",
  },
  {
    title: "Understanding the Trauma Bond",
    body: "Trauma bonding (sometimes called Stockholm Syndrome in its extreme form) is a well-documented psychological response to ongoing abuse. The cycle of abuse and affection — tension, explosion, honeymoon — creates a powerful neurological attachment that can make it extremely difficult to leave even when the person genuinely wants to. Understanding that this is a trauma response, not weakness or stupidity, is important. Many survivors need multiple attempts to leave before they are able to leave safely.",
  },
  {
    title: "Legal Resources and Orders of Protection",
    body: "An order of protection (also called a restraining order) can provide legal protection from an abuser and is available in all 50 states. Local domestic violence organizations can connect survivors with pro bono legal advocates who can help navigate the process. Many areas have legal aid organizations that provide free legal services to domestic violence survivors. The Violence Against Women Act (VAWA) also provides immigration protections for survivors with immigration concerns.",
  },
];

const scriptures = [
  {
    ref: "Psalm 72:14",
    text: "From oppression and violence he redeems their life, and precious is their blood in his sight.",
    note: "God specifically redeems from violence. Your blood — your life, your physical safety — is precious in His sight. Not to be sacrificed for the sake of an institution.",
  },
  {
    ref: "Matthew 10:23",
    text: "When they persecute you in one town, flee to the next.",
    note: "Jesus's explicit instruction to those in danger: flee. This is not faithlessness. It is the response Jesus himself prescribes for persecution and danger.",
  },
  {
    ref: "Psalm 82:3–4",
    text: "Give justice to the weak and the fatherless; maintain the right of the afflicted and the destitute. Rescue the weak and the needy; deliver them from the hand of the wicked.",
    note: "The call to rescue is active, not passive. God commands rescue — not quiet endurance, not waiting for the abuser to change. Rescue.",
  },
  {
    ref: "Isaiah 1:17",
    text: "Learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead the widow's cause.",
    note: "Seeking justice and correcting oppression is a command, not an option. For survivors: seeking justice — including legal protection — is biblical. For the church: pleading the survivor's cause is required.",
  },
  {
    ref: "Lamentations 3:58–59",
    text: "You have taken up my cause, O Lord; you have redeemed my life. You have seen the wrong done to me, O LORD; judge my cause.",
    note: "God sees the wrong. He does not look away or ask the survivor to explain why they didn't stay. He sees, and He judges the cause of the one who has been wronged.",
  },
  {
    ref: "Romans 8:38–39",
    text: "Neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
    note: "Not the abuser's words. Not the church's failure. Not the shame. Not the fear. Nothing separates you from the love of God. Nothing.",
  },
];

const videos = [
  { id: "IvSuGyJQ6oM", title: "Goodness of God — Bethel Music" },
  { id: "gYR0xP1j4PY", title: "Rescue — Lauren Daigle" },
  { id: "G2XtRuPfaAU", title: "Raise A Hallelujah — Bethel Music" },
  { id: "QS04WbSnxok", title: "Trust In God — Elevation Worship" },
];

const JOURNAL_KEY = "vine_domestic_violence_entries";

function JournalTab() {
  const [entries, setEntries] = useState<{ id: number; date: string; text: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [draft, setDraft] = useState("");
  const save = () => {
    if (!draft.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
    setDraft("");
  };
  const remove = (id: number) => {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
  };
  const prompts = [
    "Is there one person who is safe enough to tell what is happening?",
    "What am I afraid of if I take a step toward safety? Can I name the specific fear?",
    "What do I believe God thinks about what is happening to me? What does Scripture actually say?",
    "What would my life look like if I were safe? What would I do, feel, become?",
  ];
  return (
    <div>
      <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
        <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "1rem" }}>Reflection Prompts</h3>
        <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1rem" }}>If you are in immediate danger, call 911. National DV Hotline: 1-800-799-7233.</p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {prompts.map((p, i) => (
            <li key={i} style={{ color: MUTED, fontSize: "0.9rem", paddingLeft: "1rem", borderLeft: `2px solid ${ACCENT}40` }}>{p}</li>
          ))}
        </ul>
      </div>
      <textarea
        value={draft}
        onChange={e => setDraft(e.target.value)}
        placeholder="Write freely — your words are private and stay only on your device..."
        rows={5}
        style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }}
      />
      <button onClick={save} style={{ marginTop: 8, padding: "0.6rem 1.6rem", background: ACCENT, color: "#fff", border: "none", borderRadius: 6, fontWeight: 600, cursor: "pointer" }}>Save Entry</button>
      {entries.length > 0 && (
        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {entries.map(e => (
            <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ color: MUTED, fontSize: "0.78rem" }}>{e.date}</span>
                <button onClick={() => remove(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.78rem" }}>Delete</button>
              </div>
              <p style={{ color: TEXT, fontSize: "0.92rem", margin: 0, whiteSpace: "pre-wrap" }}>{e.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DomesticViolenceSurvivorChristianFaith() {
  const [activeTab, setActiveTab] = useState<Tab>("Theology");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg, ${ACCENT}18 0%, transparent 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "4rem 1.5rem 3rem" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: `${ACCENT}22`, border: `1px solid ${ACCENT}44`, borderRadius: 20, padding: "4px 14px", fontSize: "0.75rem", fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem" }}>
              Domestic Violence & Abuse
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
              Surviving Abuse<br />
              <span style={{ color: ACCENT }}>God Is On Your Side</span>
            </h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 620, marginBottom: "1.5rem" }}>
              For Christians experiencing or recovering from domestic violence — safety is not unbiblical, leaving is not faithlessness, and what was done to you was not God's will. He sees the wrong done to you. He is on the side of the survivor.
            </p>
            <div style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.4)", borderRadius: 8, padding: "1rem 1.2rem", maxWidth: 520, marginBottom: "1rem" }}>
              <p style={{ color: "#EF4444", fontSize: "0.9rem", fontWeight: 700, margin: 0 }}>
                If you are in immediate danger: Call <strong>911</strong>
              </p>
            </div>
            <div style={{ background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`, borderRadius: 8, padding: "1rem 1.2rem", maxWidth: 520 }}>
              <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>
                National DV Hotline: <a href="tel:18007997233" style={{ color: ACCENT }}>1-800-799-7233</a> (24/7, free, confidential)<br />
                <span style={{ fontWeight: 400, color: MUTED }}>Text START to 88788 | Chat: thehotline.org | 988 Crisis Line: call or text 988</span>
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: `1px solid ${BORDER}`, background: BG, position: "sticky", top: 0, zIndex: 10 }}>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", overflowX: "auto", gap: 0 }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setActiveTab(t)} style={{ padding: "1rem 1.4rem", background: "none", border: "none", borderBottom: activeTab === t ? `2px solid ${ACCENT}` : "2px solid transparent", color: activeTab === t ? ACCENT : MUTED, fontWeight: activeTab === t ? 700 : 400, cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s" }}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "2.5rem 1.5rem" }}>
          {activeTab === "Theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {theology.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === "Voices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {voices.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                  <p style={{ color: TEXT, lineHeight: 1.8, fontSize: "1rem", fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p>
                  <div>
                    <div style={{ color: ACCENT, fontWeight: 700, fontSize: "0.9rem" }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === "Practices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {practices.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{p.body}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === "Scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {scriptures.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${ACCENT}`, borderRadius: 10, padding: "1.5rem" }}>
                  <div style={{ color: ACCENT, fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>{s.ref}</div>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.75, marginBottom: "0.75rem" }}>&ldquo;{s.text}&rdquo;</p>
                  <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{s.note}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === "Journal" && <JournalTab />}
          {activeTab === "Videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {videos.map((v) => (
                <div key={v.id} style={{ background: CARD, borderRadius: 10, overflow: "hidden", border: `1px solid ${BORDER}` }}>
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <div style={{ padding: "1rem 1.2rem" }}>
                    <p style={{ color: TEXT, fontWeight: 600, margin: 0 }}>{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
