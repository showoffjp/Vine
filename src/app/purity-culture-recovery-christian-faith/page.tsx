"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

const theology = [
  {
    title: "Purity Culture Caused Real Harm",
    body: "The purity culture movement of the 1990s and 2000s — characterized by purity pledges, True Love Waits campaigns, modesty culture, and books like I Kissed Dating Goodbye — was built on sincere intentions and has caused significant documented harm. The harmful teachings: that your worth is tied to your sexual history, that women are responsible for men's sexual thoughts, that sex before marriage makes you 'chewed gum' or a 'used tape,' that sexual abuse survivors are 'damaged.' These teachings are not the same as biblical sexuality. They deserve to be named and challenged.",
  },
  {
    title: "The Body Is Not the Enemy",
    body: "Biblical sexuality begins with the goodness of creation: 'God saw all that he had made, and it was very good' (Gen 1:31) — including the human body in its sexual nature. The Song of Solomon is unambiguously erotic and is in the canon. The Incarnation — God taking on a physical human body — is the strongest possible statement about the goodness of embodied human life. A theology that treats the body as inherently threatening, that sexualizes modesty, or that equates holiness with disembodiment is not orthodox Christianity.",
  },
  {
    title: "Shame Is Not the Same as Conviction",
    body: "Christian theology distinguishes between conviction (the Holy Spirit drawing us toward repentance and restoration) and shame (a global judgment on our worth as persons). Purity culture weaponized shame — not just 'what you did was harmful' but 'you are worthless, damaged, impure.' Shame does not lead to healing; it leads to hiding. The gospel is an announcement that there is 'no condemnation for those who are in Christ Jesus' (Rom 8:1) — not no acknowledgment of wrongdoing, but no death sentence on the person.",
  },
  {
    title: "Sexual Abuse Was Not Your Fault",
    body: "One of the most damaging aspects of purity culture was its tendency to hold victims of sexual assault responsible — through teachings about modesty, about 'guarding your heart,' about not being alone with men. If you were sexually abused and the church taught you that your clothing, behavior, or presence contributed to it, that teaching is wrong. Sexual violence is the responsibility of the perpetrator, full stop. Nothing you wore, said, or did made you responsible for someone else's violence against you.",
  },
  {
    title: "A Better Theology of Sexuality",
    body: "Christian sexuality, properly understood, is grounded in covenant love, mutual self-giving, full personhood, and the image of God in every person. Sex within marriage is holy because covenant makes it so — not because it is the only context where desire exists. Sexual ethics should focus on relationship dynamics (power, consent, dignity, faithfulness) rather than a purity framework that reduces people to their sexual choices. The goal is integration — body and soul together — not suppression.",
  },
];

const voices = [
  {
    name: "Sheila Wray Gregoire",
    role: "Author, The Great Sex Rescue and She Deserves Better",
    quote: "We measured Christian books against the research and found that many teachings made marriage worse, not better. The church owes a generation of women an apology.",
  },
  {
    name: "Joshua Harris",
    role: "Author, I Kissed Dating Goodbye (which he later retracted and apologized for)",
    quote: "I want to say clearly to those who have been harmed by my book: I am sorry. I was wrong. The damage done was real and I take responsibility for my part in it.",
  },
  {
    name: "Nadia Bolz-Weber",
    role: "Author, Shameless: A Sexual Reformation",
    quote: "Shame is not of God. A theology that makes people hate their bodies and fear their desires in the name of holiness is not the gospel — it is a counterfeit.",
  },
  {
    name: "Rachael Denhollander",
    role: "Survivor-advocate, attorney, author of What Is a Girl Worth?",
    quote: "The church's response to abuse has often prioritized institutional reputation over survivor safety. That must change. Jesus's harshest words were for those who harm the vulnerable.",
  },
];

const practices = [
  {
    title: "Name What Happened to You",
    body: "Recovery from purity culture harm begins with naming it clearly: the specific teachings that harmed you, the specific messages about your body and worth that you absorbed, the specific ways the church mishandled abuse or victim-blamed. This is not bitterness; it is diagnosis. You cannot begin healing what you refuse to accurately name. A therapist who understands religious trauma can be extraordinarily helpful in this stage.",
  },
  {
    title: "Therapy for Religious Trauma and Sexual Shame",
    body: "The harm caused by purity culture is real enough to warrant trauma-focused therapy. Religious Trauma Syndrome (RTS) is a recognized category — the psychological harm caused by experiences in harmful religious environments. Therapists who specialize in religious trauma (findable through recoveringgrace.org or through the Religious Trauma Institute) can help you distinguish between the harmful teachings and any genuine faith you want to retain.",
  },
  {
    title: "Reading Your Way Back to a Better Theology",
    body: "Many survivors of purity culture find that reading genuinely good Christian theology of sexuality is part of healing. Resources: Sheila Wray Gregoire's The Great Sex Rescue (research-based critique), Christopher West's Theology of the Body (Catholic, but broadly useful), Rachel Held Evans' various writings, Lisa Sharon Harper's The Very Good Gospel. Understanding that the church's tradition is richer and better than what you were taught can rebuild what was damaged.",
  },
  {
    title: "Community with Other Survivors",
    body: "Online communities of purity culture survivors include the #ChurchToo movement, the Exvangelical community, and numerous Facebook and Reddit groups. The Reclaiming My Theology project and the Religious Trauma Institute both offer resources. Finding people who understand the specific damage done — without either abandoning faith entirely or minimizing what happened — is invaluable.",
  },
  {
    title: "If You Were Abused in a Church Context",
    body: "If purity culture teachings were used to minimize or cover up sexual abuse — by a pastor, youth leader, or community member — GRACE (Godly Response to Abuse in the Christian Environment, netgrace.org) specifically advocates for abuse survivors in church contexts. RAINN (1-800-656-4673) provides support for sexual assault survivors. You do not have to protect the institution that harmed you.",
  },
  {
    title: "Rebuilding a Healthy Relationship with Your Body",
    body: "Many purity culture survivors experience bodily disconnection — difficulty experiencing pleasure without shame, inability to trust their own desires, or the physical effects of sexual abuse. A trauma-informed sex therapist (certified through AASECT, aasect.org) can help rebuild a healthy relationship with embodiment and sexuality. This is not a secular concession; it is healing the whole person that God made.",
  },
];

const scriptures = [
  {
    ref: "Genesis 1:31",
    text: "God saw all that he had made, and it was very good. And there was evening, and there was morning — the sixth day.",
  },
  {
    ref: "Romans 8:1",
    text: "Therefore, there is now no condemnation for those who are in Christ Jesus.",
  },
  {
    ref: "Song of Solomon 1:2",
    text: "Let him kiss me with the kisses of his mouth — for your love is more delightful than wine.",
  },
  {
    ref: "1 Corinthians 13:4-5",
    text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking.",
  },
  {
    ref: "Psalm 139:14",
    text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
  },
  {
    ref: "Matthew 23:4",
    text: "They tie up heavy, cumbersome loads and put them on other people's shoulders, but they themselves are not willing to lift a finger to move them.",
  },
];

const JOURNAL_KEY = "vine_purity_culture_recovery_entries";

interface JournalEntry {
  id: string;
  date: string;
  text: string;
}

const videos = [
  { videoId: "4Eg_di-O8nM", title: "Elevation Church – God Is Working" },
  { videoId: "sIaT8Jl2zpI", title: "You Say – Lauren Daigle (You Are More)" },
  { videoId: "G-2e9mMf7E8", title: "Gospel of John – BibleProject" },
  { videoId: "7_CGP-12AE0", title: "The Story of the Bible – BibleProject" },
];

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
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #1a0a2e 0%, #0d0618 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `18px solid white`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function PurityCultureRecoveryPage() {
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
          <div style={{ display: "inline-block", background: PURPLE + "22", border: `1px solid ${PURPLE}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: PURPLE, marginBottom: 16 }}>
            Sexual Shame & Healing
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            Purity Culture Recovery
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            The body is not the enemy. Shame is not the same as conviction. The gospel says 'no condemnation' — and it means it.
          </p>
        </div>

        {/* Crisis Banner */}
        <div style={{ background: "#1a1a2e", border: `1px solid ${PURPLE}66`, borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
          <div style={{ fontWeight: 700, color: PURPLE, marginBottom: 8 }}>Support Resources</div>
          <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.8 }}>
            <strong style={{ color: TEXT }}>GRACE:</strong> netgrace.org — advocacy for church abuse survivors<br />
            <strong style={{ color: TEXT }}>RAINN:</strong> 1-800-656-4673 or rainn.org — sexual violence support<br />
            <strong style={{ color: TEXT }}>Religious Trauma Institute:</strong> religioustraumainstitute.com<br />
            <strong style={{ color: TEXT }}>988 Lifeline:</strong> call or text 988 — 24/7 crisis support
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${activeTab === tab ? PURPLE : BORDER}`, background: activeTab === tab ? PURPLE + "22" : "transparent", color: activeTab === tab ? PURPLE : MUTED, cursor: "pointer", fontSize: 14, fontWeight: activeTab === tab ? 600 : 400 }}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: PURPLE, marginBottom: 12 }}>{item.title}</h3>
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
                <div style={{ color: PURPLE, fontSize: 13, marginBottom: 14 }}>{v.role}</div>
                <blockquote style={{ margin: 0, padding: "14px 18px", borderLeft: `3px solid ${PURPLE}`, background: PURPLE + "11", borderRadius: "0 8px 8px 0", color: MUTED, lineHeight: 1.8, fontStyle: "italic" }}>
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
                <h3 style={{ fontSize: 18, fontWeight: 700, color: PURPLE, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {scriptures.map((s) => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontStyle: "italic", fontSize: 16 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.7 }}>
              What did you absorb? What do you want to reclaim? What does your body need to hear? Your entries are saved locally on this device only.
            </p>
            <textarea
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              placeholder="Write here..."
              style={{ width: "100%", minHeight: 140, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, color: TEXT, fontSize: 15, resize: "vertical", boxSizing: "border-box", outline: "none" }}
            />
            <button
              onClick={saveEntry}
              style={{ marginTop: 12, padding: "10px 28px", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, fontWeight: 600, cursor: "pointer", fontSize: 15 }}
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
