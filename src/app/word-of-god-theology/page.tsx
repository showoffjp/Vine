"use client";
import { useState } from "react";
import VideoEmbed from "@/components/VideoEmbed";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "inspiration", label: "Inspiration" },
  { id: "inerrancy", label: "Inerrancy" },
  { id: "canon", label: "Canon" },
  { id: "authority", label: "Authority" },
  { id: "clarity", label: "Clarity & Sufficiency" },
  { id: "views", label: "Views Compared" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const SCRIPTURE_TEXTS = [
  {
    ref: "2 Timothy 3:16-17",
    text: "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work.",
    note: "The key inspiration text: theopneustos (God-breathed). Scripture originates from God, not merely human wisdom.",
  },
  {
    ref: "2 Peter 1:20-21",
    text: "No prophecy of Scripture comes from someone's own interpretation. For no prophecy was ever produced by the will of man, but men spoke from God as they were carried along by the Holy Spirit.",
    note: "The mechanism: the Holy Spirit 'carried' human authors — they were genuine authors, but the Spirit ensured what they wrote was from God.",
  },
  {
    ref: "John 10:35",
    text: "Scripture cannot be broken.",
    note: "Jesus's own view of Scripture: it is inviolable and authoritative — not merely a human tradition.",
  },
  {
    ref: "Psalm 119:160",
    text: "The sum of your word is truth, and every one of your righteous rules endures forever.",
    note: "The truthfulness and permanence of God's word — it will not pass away or be overturned.",
  },
  {
    ref: "Isaiah 55:11",
    text: "So shall my word be that goes out from my mouth; it shall not return to me empty, but it shall accomplish that which I purpose.",
    note: "God's word is effective and purposeful — not merely informational but transformative.",
  },
];

const INSPIRATION_CONTENT = [
  {
    title: "Verbal Plenary Inspiration",
    desc: "The historic Protestant position: the Holy Spirit guided the human authors in such a way that every word (verbal) of all Scripture (plenary) is exactly what God intended. Not just the ideas but the words themselves are inspired.",
    color: GREEN,
  },
  {
    title: "Dual Authorship",
    desc: "Scripture has both divine and human authors — genuinely both. The human authors used their own vocabulary, style, research, and personality. Yet what they wrote is exactly what God intended. This is analogous to the incarnation: fully divine and fully human.",
    color: TEAL,
  },
  {
    title: "Not Dictation",
    desc: "Verbal plenary inspiration does not mean mechanical dictation — that God spoke and the human authors merely took notes. The authors' personalities, research methods, emotional states, and literary styles are all genuinely present. The Spirit guided, not overrode.",
    color: PURPLE,
  },
  {
    title: "The Spirit's Role",
    desc: "2 Peter 1:21 uses the metaphor of a ship 'carried' by the wind. The human authors were genuine sailors — steering, navigating, active — but the Spirit determined the direction and destination. They arrived where God intended.",
    color: GOLD,
  },
  {
    title: "Degrees of Inspiration?",
    desc: "All Scripture is equally inspired (2 Timothy 3:16 — 'all Scripture'). But not all Scripture is equally applicable in all situations, or equally clear, or equally direct in addressing Christian life today. Inspiration is uniform; applicability requires hermeneutical wisdom.",
    color: BLUE,
  },
];

const INERRANCY_CONTENT = [
  {
    term: "Inerrancy",
    def: "Scripture, in its original manuscripts, is without error in all that it affirms. What the Bible teaches — whether in history, theology, ethics, or any other domain — is true. The Chicago Statement on Biblical Inerrancy (1978) is the defining evangelical document.",
    color: GREEN,
  },
  {
    term: "Infallibility",
    def: "Scripture does not fail in its purposes — particularly in leading people to salvation and equipping them for life. Some use 'infallible' as a weaker claim than inerrancy; others use them as synonyms. The key question is: does the Bible err in what it intends to teach?",
    color: TEAL,
  },
  {
    term: "Phenomena of Scripture",
    def: "Inerrancy must account for the Bible's phenomena: approximate numbers, round figures, non-technical descriptions of nature, phenomenological language ('the sun rose'), free quotations of OT in NT, differing accounts of the same event. These do not constitute errors; they reflect ancient literary conventions.",
    color: PURPLE,
  },
  {
    term: "Limited Inerrancy",
    def: "A mediating view: Scripture is inerrant in matters of faith and practice (theology and ethics) but may contain historical or scientific errors. Most evangelical scholars reject this as unstable — if Scripture errs in one area, why trust it in others?",
    color: GOLD,
  },
  {
    term: "Original Manuscripts",
    def: "The inerrancy claim is technically about the autographs (original manuscripts). We do not have these — we have copies. But text criticism has established that our manuscripts are highly reliable, and no key doctrine depends on disputed text.",
    color: BLUE,
  },
];

const CANON_CONTENT = [
  {
    title: "How the Canon Formed",
    desc: "The NT canon was not created by a council — it emerged over the first three centuries as the church recognized which writings were apostolic, consistent with the rule of faith, and universally accepted. The Council of Carthage (397 AD) formally affirmed what was already de facto accepted.",
    color: GREEN,
  },
  {
    title: "OT Canon",
    desc: "Protestant OT canon = 39 books, following the Hebrew Bible (the Tanakh). Catholics and Orthodox include the Deuterocanonical/Apocryphal books (Maccabees, Sirach, etc.). The Reformers followed the Hebrew canon, arguing these books were not cited as Scripture by Jesus or the apostles.",
    color: TEAL,
  },
  {
    title: "NT Canon Criteria",
    desc: "The church applied roughly three tests: (1) Apostolicity — written by or associated with an apostle; (2) Catholicity — universally accepted; (3) Orthodoxy — consistent with the rule of faith. Books like the Gospel of Thomas and Shepherd of Hermas failed these tests.",
    color: PURPLE,
  },
  {
    title: "The Canon Is Closed",
    desc: "Protestant theology holds that the canon is complete — God's special revelation in Scripture is finished. No new revelation is being added. The Spirit's work today is to illuminate and apply what has already been given, not to supplement it.",
    color: GOLD,
  },
];

const AUTHORITY_CONTENT = [
  {
    title: "Sola Scriptura",
    desc: "The Reformation principle: Scripture alone is the supreme and final authority for Christian faith and practice. Tradition, councils, and reason are servants and guides — not co-equal authorities with Scripture. Where they conflict, Scripture prevails.",
    color: GREEN,
  },
  {
    title: "Not Solo Scriptura",
    desc: "Sola Scriptura does not mean Scripture alone without the guidance of tradition, community, or reason — that would be 'solo Scriptura' (reading the Bible in isolation). The church's historic interpretation carries weight, even if Scripture remains the final judge.",
    color: TEAL,
  },
  {
    title: "The Wesleyan Quadrilateral",
    desc: "John Wesley proposed four sources: Scripture (primary), tradition, reason, and experience. Most Methodists and Arminians use this. Critics worry that tradition, reason, and experience too often become co-equal with Scripture in practice.",
    color: PURPLE,
  },
  {
    title: "Authority over All of Life",
    desc: "Scripture's authority is not limited to 'religious' matters — it speaks with authority to ethics, family, work, politics, culture, and every domain of life. The Lordship of Christ extends everywhere; Scripture is his revealed will for how his Lordship is lived out.",
    color: GOLD,
  },
];

const CLARITY_POINTS = [
  {
    term: "Perspicuity (Clarity)",
    def: "The central message of Scripture — the way of salvation and the rule of life — is sufficiently clear to be understood by ordinary readers. Difficult passages exist, but the overall teaching is accessible. This does not mean every passage is equally clear.",
    color: GREEN,
  },
  {
    term: "Sufficiency",
    def: "Scripture contains everything necessary for salvation and for knowing God's will for Christian life. We do not need additional revelation to be saved or to live faithfully. The canon is complete and sufficient for its purposes.",
    color: BLUE,
  },
  {
    term: "What the Spirit Does",
    def: "The Holy Spirit illuminates the mind of the reader to understand and receive Scripture's meaning. Illumination is not new inspiration — the Spirit does not add to the text — but he enables readers to grasp what is already there.",
    color: TEAL,
  },
];

const VIEWS_COMPARED = [
  {
    view: "Classic Evangelical / Reformed",
    desc: "Verbal plenary inspiration, full inerrancy of the autographs, sola Scriptura, closed canon. Scripture is self-authenticating and the supreme authority.",
    figures: "B.B. Warfield, J.I. Packer, Wayne Grudem, D.A. Carson",
    color: GREEN,
  },
  {
    view: "Roman Catholic",
    desc: "Scripture and Tradition are co-equal sources of revelation, both derived from divine revelation and interpreted by the Magisterium (teaching office of the Church). The Church produced Scripture and has authority to interpret it.",
    figures: "Council of Trent, Vatican II (Dei Verbum), Pope Benedict XVI",
    color: BLUE,
  },
  {
    view: "Eastern Orthodox",
    desc: "Scripture exists within the church and is interpreted by the living Tradition. The two are not separate — Scripture emerged from the church's apostolic tradition and must be read within it. The Fathers and councils provide authoritative interpretation.",
    figures: "John Meyendorff, Alexander Schmemann",
    color: TEAL,
  },
  {
    view: "Neo-Orthodox / Barthian",
    desc: "Scripture is not itself the Word of God but becomes the Word of God when it encounters the reader through the Holy Spirit. The Bible is a witness to revelation (Christ), not revelation itself. This allows for errors in Scripture.",
    figures: "Karl Barth, Emil Brunner",
    color: PURPLE,
  },
  {
    view: "Liberal / Historical-Critical",
    desc: "Scripture is primarily a human document — a record of ancient Israel's and the early church's experiences of God. It must be evaluated critically like any other historical document. Authority is derived, not intrinsic.",
    figures: "Schleiermacher, Harnack, Rudolf Bultmann",
    color: GOLD,
  },
];

const VIDEOS = [
  { videoId: "oU2_Gc_JJWM", title: "What Is Biblical Inerrancy? — R.C. Sproul" },
  { videoId: "5OBkyX4VVmE", title: "The Bible's Inspiration Explained" },
  { videoId: "r4OU_s5E4Go", title: "How the Canon Was Formed" },
  { videoId: "UYFLIv9akG4", title: "Scripture's Authority — Why Sola Scriptura" },
];

export default function WordOfGodPage() {
  const [tab, setTab] = useLocalStorage("vine_word_tab", "overview");
  const [openInsp, setOpenInsp] = useLocalStorage("vine_word_insp", "");
  const [openViews, setOpenViews] = useLocalStorage("vine_word_views", "");
  const [journal, setJournal] = useLocalStorage("vine_word_journal", "");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>📜</div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>Theology of the Word of God</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>
            What is the Bible, and why should we trust it? The doctrine of Scripture — inspiration, inerrancy, canon, authority, clarity, and sufficiency.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem", background: tab === t.id ? GREEN : CARD, color: tab === t.id ? "#fff" : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${GREEN}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GREEN }}>The Bible&apos;s Claims About Itself</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The Bible is unique among religious texts in making explicit claims about its own divine origin and authority. These are not external claims imposed on it — they arise from within the text itself. If these claims are false, Christianity collapses. If they are true, the implications are total.</p>
            </div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Key Scriptures</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {SCRIPTURE_TEXTS.map(t => (
                <div key={t.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem" }}>
                  <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.25rem" }}>{t.ref}</div>
                  <p style={{ fontStyle: "italic", color: TEXT, margin: "0 0 0.25rem" }}>&ldquo;{t.text}&rdquo;</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>{t.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INSPIRATION */}
        {tab === "inspiration" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: TEAL }}>How God Inspired Scripture</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Inspiration (theopneustos — &ldquo;God-breathed&rdquo;) refers to the divine process by which the Holy Spirit guided human authors so that what they wrote is exactly what God intended. It is one of the most carefully nuanced doctrines in Christian theology.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {INSPIRATION_CONTENT.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenInsp(openInsp === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 700, color: item.color, textAlign: "left" }}>{item.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openInsp === String(i) ? "−" : "+"}</span>
                  </button>
                  {openInsp === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem", color: MUTED, lineHeight: 1.7 }}>{item.desc}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INERRANCY */}
        {tab === "inerrancy" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GREEN }}>Inerrancy and Infallibility</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Inerrancy is the claim that the Bible, in its original manuscripts, contains no errors in what it affirmatively teaches. This is not a claim that the Bible is an encyclopedia of natural science, but that when it speaks — on any subject — it speaks truly.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {INERRANCY_CONTENT.map(item => (
                <div key={item.term} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${item.color}` }}>
                  <div style={{ fontWeight: 700, color: item.color, marginBottom: "0.4rem" }}>{item.term}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{item.def}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CANON */}
        {tab === "canon" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>The Canon of Scripture</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {CANON_CONTENT.map(c => (
                <div key={c.title} style={{ background: CARD, border: `1px solid ${c.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${c.color}` }}>
                  <div style={{ fontWeight: 700, color: c.color, marginBottom: "0.4rem" }}>{c.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AUTHORITY */}
        {tab === "authority" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Scripture&apos;s Authority</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {AUTHORITY_CONTENT.map(a => (
                <div key={a.title} style={{ background: CARD, border: `1px solid ${a.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${a.color}` }}>
                  <div style={{ fontWeight: 700, color: a.color, marginBottom: "0.4rem" }}>{a.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CLARITY & SUFFICIENCY */}
        {tab === "clarity" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Clarity and Sufficiency</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
              {CLARITY_POINTS.map(c => (
                <div key={c.term} style={{ background: CARD, border: `1px solid ${c.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${c.color}` }}>
                  <div style={{ fontWeight: 700, color: c.color, marginBottom: "0.4rem" }}>{c.term}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{c.def}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
              <div style={{ fontWeight: 700, color: GOLD, marginBottom: "0.5rem" }}>What Sufficiency Does NOT Mean</div>
              <ul style={{ color: MUTED, paddingLeft: "1.2rem", margin: 0, lineHeight: 1.8 }}>
                <li>It does not mean the Bible addresses every question (business strategy, medical treatment, etc.).</li>
                <li>It does not mean tradition, reason, and experience have no value.</li>
                <li>It means Scripture provides everything needed for a right relationship with God and faithful Christian life.</li>
                <li>Questions the Bible does not address are answered by wisdom (applying biblical principles), not additional revelation.</li>
              </ul>
            </div>
          </div>
        )}

        {/* VIEWS */}
        {tab === "views" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Views Compared</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {VIEWS_COMPARED.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenViews(openViews === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 700, color: v.color, textAlign: "left" }}>{v.view}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openViews === String(i) ? "−" : "+"}</span>
                  </button>
                  {openViews === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem" }}>
                      <p style={{ color: TEXT, lineHeight: 1.7, marginBottom: "0.5rem" }}>{v.desc}</p>
                      <p style={{ color: MUTED, fontSize: "0.85rem", fontStyle: "italic", margin: 0 }}>Key figures: {v.figures}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "0.5rem", color: GREEN }}>Personal Reflection</h2>
              <p style={{ color: MUTED, marginBottom: "1rem", fontSize: "0.9rem" }}>How does your view of Scripture shape your relationship with it? Where do you struggle to trust it?</p>
              <textarea value={journal} onChange={e => setJournal(e.target.value)}
                placeholder="Reflect on your relationship with Scripture. Do you read it as God's word speaking to you? Where do you have doubts about its reliability or authority? How does the doctrine of inspiration change how you approach the Bible?"
                style={{ width: "100%", minHeight: 220, background: BG, color: TEXT, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              <div style={{ color: MUTED, fontSize: "0.8rem", marginTop: "0.5rem" }}>Saved automatically.</div>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Video Teaching</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))", gap: "1.25rem" }}>
              {VIDEOS.map(v => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
