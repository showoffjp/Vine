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
    title: "What Happened to You Was Wrong",
    body: "Many survivors of church hurt and spiritual abuse spend years wondering if they were the problem — if they were too sensitive, too divisive, or insufficiently submitted. The first theological claim you need to hear is simple: what happened to you was wrong. The misuse of spiritual authority, the manipulation of conscience, the use of Scripture to control rather than liberate — these are abuses of the pastoral office and violations of God's design for the church. God is not neutral on this. He specifically warns against shepherds who 'lord it over' their flocks (1 Pet 5:3) and teachers who 'devour widows' houses' (Mark 12:40).",
  },
  {
    title: "God Is Not Your Abuser",
    body: "One of the most devastating effects of spiritual abuse is the fusing of the abuser's image with God's image. When God-language was used to control, shame, or harm you, the brain begins to associate God with the experience of abuse. This is one of the most serious harms of spiritual abuse — it hijacks the language of the sacred. Rebuilding a relationship with God after spiritual abuse requires carefully separating what you were told God was from what Scripture actually reveals about Him. This often requires a skilled therapist who understands spiritual trauma.",
  },
  {
    title: "Jesus Reserved His Harshest Words for Religious Leaders",
    body: "The Pharisees and scribes did not harm people with secular power — they harmed them with religious authority. Jesus's condemnation of them in Matthew 23 is the most sustained and fierce passage in the Gospels: 'They tie up heavy burdens, hard to bear, and lay them on people's shoulders... They devour widows' houses and for a pretense make long prayers... Woe to you, hypocrites!' He reserved this language for religious abuse specifically. Your anger at what was done in God's name is not a departure from Jesus — it aligns with it.",
  },
  {
    title: "The Church Is Both Institution and Body of Christ",
    body: "The church you were hurt in is not the same thing as the universal body of Christ. Institutions can be corrupted, controlled, and weaponized. The body of Christ — the community of genuine disciples who are being transformed by Christ — continues to exist even when specific institutions fail catastrophically. Recovery from church hurt sometimes requires distinguishing between these two things: grieving and being angry at the institution, while remaining connected to (or slowly returning to) the body.",
  },
  {
    title: "Leaving Is Not Apostasy",
    body: "Many survivors of spiritual abuse are told — directly or implicitly — that leaving the church is abandoning God. This is false. God does not live in a specific building, under a specific pastor's authority, or within a specific denominational structure. The New Testament defines the church as wherever two or three gather in Christ's name (Matt 18:20). Leaving an abusive church is not leaving God — it may be the most spiritually healthy thing you can do. Healing sometimes requires distance.",
  },
];

const voices = [
  {
    name: "Diane Langberg",
    title: "Psychologist, Author of 'Redeeming Power: Understanding Authority and Abuse in the Church'",
    quote: "Spiritual abuse is abuse. It is not less harmful because it is done in God's name — it is more harmful. It attacks the most intimate layers of identity and faith. Recovery requires naming it correctly, finding safe community, and doing the slow work of untangling what God is actually like from what an abuser told you He was like.",
  },
  {
    name: "Wade Mullen",
    title: "Author, 'Something's Not Right: Decoding the Hidden Tactics of Abuse'",
    quote: "Abusive systems are built on impression management — creating a version of reality that makes the institution look good and the victim look unreliable. One of the first steps toward recovery is learning to trust your own experience again: what you saw, what you felt, what was done to you. Your perception was not wrong. You were told it was.",
  },
  {
    name: "Scot McKnight & Laura Barringer",
    title: "Authors, 'A Church Called Tov'",
    quote: "Toxic church culture is not an accident. It is built, brick by brick, through specific practices: leader-protection over truth-telling, image management over person-protection, and the silencing of those who question. Recognizing the pattern matters — not to excuse individuals but to understand the system that formed and protected them.",
  },
  {
    name: "Rachael Denhollander",
    title: "Lawyer, Survivor Advocate, Author of 'What Is a Girl Worth?'",
    quote: "The same grace that covers sin also calls it what it is. Cheap grace says 'forgive and forget' and protects abusers. Real grace names the wrong, seeks justice for the harmed, and holds the institution accountable. That is not bitterness. That is the work of the gospel.",
  },
];

const practices = [
  {
    title: "Finding a Trauma-Informed Therapist",
    body: "Spiritual abuse and church hurt are forms of trauma and should be treated as such. Find a therapist who specifically understands religious trauma — one who is neither dismissive of faith nor unable to understand the religious context of the harm. The Faith & Mental Health directory (faithandhealthmh.org) and Psychology Today's faith-sensitive filter can help. A therapist who has personal experience navigating complex religious environments is often most effective.",
  },
  {
    title: "Naming Specifically What Was Done",
    body: "Recovery from spiritual abuse often stalls when the experience remains vague: 'I had a bad church experience.' Getting specific — 'my pastor told me that my doubts were demonic'; 'the elders told me to stay in an abusive marriage for the sake of the church's reputation'; 'I was shunned when I reported a leader's misconduct' — is painful but necessary. Precision in naming the harm is not bitterness. It is the beginning of accurate grieving.",
  },
  {
    title: "Distinguishing God from Your Abuser",
    body: "A helpful spiritual practice: write down what you were told about God in the abusive environment. Then, for each item, search Scripture independently to see if it is actually there. This is not deconstruction for its own sake — it is rebuilding your theology on Scripture rather than on a specific human authority's interpretation. You may need a trusted guide (a chaplain, a theologically trained therapist, a safe pastor from outside the abusive context) to help with this work.",
  },
  {
    title: "Grieving What Church Was Supposed to Be",
    body: "Many church hurt survivors are not simply angry — they are also deeply grieving. They grieve the community they lost, the faith they had before it was complicated, the sense of belonging that was taken from them. This grief is legitimate and must be honored. Naming it as grief — not just anger — allows you to move through it rather than around it.",
  },
  {
    title: "Slow Re-entry Into Community",
    body: "Re-entry into Christian community after spiritual abuse is rarely linear or quick. Some survivors eventually find safe communities; others find that a small group, an online community, or a single trusted friendship is enough for a season. Move at your own pace. A few markers of a safer environment: leaders who can be questioned without retaliation; diversity of voice in leadership; policies for accountability and response to misconduct; openness about finances. None of these guarantee safety but they are reasonable indicators.",
  },
  {
    title: "Reporting and Accountability",
    body: "Where abuse included criminal conduct (sexual abuse, financial fraud, physical harm), reporting to appropriate civil authorities is appropriate — and may be legally required in some jurisdictions. Ecclesiastical accountability mechanisms often fail survivors; civil accountability does not. The organization GRACE (Godly Response to Abuse in the Christian Environment, netgrace.org) helps churches and individuals navigate these processes. You are not obligated to protect an institution that did not protect you.",
  },
];

const scriptures = [
  {
    ref: "Matthew 23:4",
    text: "They tie up heavy burdens, hard to bear, and lay them on people's shoulders, but they themselves are not willing to move them with their finger.",
    note: "Jesus saw religious leaders using their authority to burden, not liberate, those in their care. He named it specifically. He condemned it explicitly. Your experience was not a departure from Jesus's concern — it is exactly what He warned about.",
  },
  {
    ref: "Ezekiel 34:2–4",
    text: "Ah, shepherds of Israel who have been feeding yourselves! Should not shepherds feed the sheep? You eat the fat, you clothe yourselves with the wool, you slaughter the fat ones, but you do not feed the sheep. The weak you have not strengthened, the sick you have not healed, the injured you have not bound up, the strayed you have not brought back, the lost you have not sought, and with force and harshness you have ruled them.",
    note: "God's assessment of abusive shepherds. He sees it, He names it — and the rest of Ezekiel 34 describes His own response: He will shepherd His sheep Himself.",
  },
  {
    ref: "Psalm 27:10",
    text: "For my father and my mother have forsaken me, but the LORD will take me in.",
    note: "The people who should have protected you — spiritual parents, pastors, elders — failed you or actively harmed you. God's response is not theological abstraction: He takes you in.",
  },
  {
    ref: "Isaiah 61:1",
    text: "The Spirit of the Lord GOD is upon me, because the LORD has anointed me to bring good news to the poor; he has sent me to bind up the brokenhearted, to proclaim liberty to the captives, and the opening of the prison to those who are bound.",
    note: "Jesus read this passage about Himself in His first sermon (Luke 4). He came for the captives — which includes those held captive by religious systems that should have freed them.",
  },
  {
    ref: "Micah 6:8",
    text: "He has told you, O man, what is good; and what does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God?",
    note: "Justice is not optional. Naming what was done to you, seeking accountability, and protecting others from the same harm is not vengeance — it is justice, which God requires.",
  },
  {
    ref: "Romans 8:38–39",
    text: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
    note: "Church systems can separate you from a community. Religious leaders can separate you from their institution. Nothing can separate you from the love of God. Not their actions, not their theology, not their authority.",
  },
];

const videos = [
  { id: "QS04WbSnxok", title: "Trust In God — Elevation Worship" },
  { id: "n_aVFVveJNs", title: "Trust In You — Lauren Daigle" },
  { id: "ej_6dVdJSIU", title: "Romans Overview Pt. 1 — BibleProject" },
  { id: "Sc6SSHuZvQE", title: "Reckless Love — Bethel Music" },
];

const JOURNAL_KEY = "vine_church_hurt_entries";

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
    "What specifically happened that hurt you? Can I name it precisely, without minimizing it or making excuses for it?",
    "What was I told about God that I am no longer sure is true? What do I actually believe about God when I'm being honest?",
    "What do I miss about church, about community, about faith before this happened?",
    "What would a safe Christian community look like for me? What would need to be different?",
  ];
  return (
    <div>
      <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
        <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "1rem" }}>Reflection Prompts</h3>
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

export default function ChurchHurtSpiritualAbuseRecoveryChristian() {
  const [activeTab, setActiveTab] = useState<Tab>("Theology");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg, ${ACCENT}18 0%, transparent 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "4rem 1.5rem 3rem" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: `${ACCENT}22`, border: `1px solid ${ACCENT}44`, borderRadius: 20, padding: "4px 14px", fontSize: "0.75rem", fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem" }}>
              Church Hurt & Spiritual Abuse
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
              Hurt by the Church,<br />
              <span style={{ color: ACCENT }}>Still Held by God</span>
            </h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 620, marginBottom: "1.5rem" }}>
              For Christians navigating spiritual abuse, toxic church culture, or religious harm — what was done to you was wrong, God is not your abuser, and healing is possible even when it requires distance from the institution that hurt you.
            </p>
            <div style={{ background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`, borderRadius: 8, padding: "1rem 1.2rem", maxWidth: 520 }}>
              <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>
                Crisis: <strong>988</strong> Suicide & Crisis Lifeline — call or text 988<br />
                <span style={{ fontWeight: 400, color: MUTED }}>GRACE (Religious Abuse): netgrace.org | Spiritual Abuse Recovery: spiritualsafetynet.com</span>
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
