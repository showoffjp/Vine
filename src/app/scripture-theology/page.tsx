"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Inspiration: God-Breathed", verse: "2 Timothy 3:16-17", body: "'All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work' (2 Timothy 3:16-17). Theopneustos — God-breathed — describes Scripture not as human words about God but as words breathed out by God through human authors. Inspiration does not mean dictation (where human personality is bypassed) but superintendence (where God worked through the full humanity of the authors to produce his intended word)." },
  { title: "The Human Dimension", verse: "2 Peter 1:20-21", body: "'Above all, you must understand that no prophecy of Scripture came about by the prophet's own interpretation of things. For prophecy never had its origin in the human will, but prophets, though human, spoke from God as they were carried along by the Holy Spirit' (2 Peter 1:20-21). Scripture is simultaneously fully human and fully divine — analogous to the Incarnation. The human authors researched (Luke 1:1-4), wrote from experience, showed personality, and used their own vocabulary. The Spirit worked through, not despite, their full humanity." },
  { title: "Inerrancy and Its Scope", verse: "Psalm 119:160", body: "'All your words are true' (Psalm 119:160). Inerrancy is the claim that Scripture, in its original manuscripts, teaches nothing that is false. The Chicago Statement on Biblical Inerrancy (1978) remains the fullest evangelical definition. Important: inerrancy applies to what Scripture affirms, not to every number in every manuscript tradition, every historical reference, or the accuracy of quoted speech. It also does not claim scientific precision in genre that is not scientific. Understanding what inerrancy claims — and doesn't claim — prevents both over-extending it and abandoning it unnecessarily." },
  { title: "The Canon: Which Books?", verse: "Luke 24:44", body: "The biblical canon (from the Greek for 'rule' or 'measuring rod') refers to the collection of books recognized as authoritative Scripture. The Protestant canon has 66 books (39 OT, 27 NT); the Catholic canon adds the Deuterocanonical books (the Apocrypha). The NT canon was not decreed by church councils but recognized — the church identified as authoritative books that bore the marks of apostolic origin, widespread use, and theological consistency with the rule of faith. Councils (Carthage, 397) confirmed what the church already received." },
  { title: "Sufficiency and Clarity", verse: "Psalm 119:105", body: "The Reformation recovered two important doctrines: the sufficiency of Scripture (sola scriptura) — Scripture contains all that is necessary for salvation and Christian life; no additional revelation is required — and the clarity of Scripture (perspicuity) — the message necessary for salvation is clear enough that an ordinary person can understand it. Neither doctrine claims that all Scripture is equally clear or that interpretation is unnecessary. They claim that what Scripture says about what matters most is accessible to careful, prayerful reading." },
];

const DOCTRINES = [
  { name: "Revelation", color: GREEN, desc: "God has disclosed himself through creation (general revelation: Romans 1:20) and through Scripture and Christ (special revelation). Special revelation is necessary because sin has darkened the human capacity to read general revelation correctly. Without Scripture, God is knowable in outline but not in the saving detail of his character and purposes." },
  { name: "Inspiration", color: PURPLE, desc: "The process by which God superintended human authors to produce his intended word. Three models: verbal-plenary (every word, in all areas, is inspired), limited inspiration (inspiration extends only to matters of faith and practice), and neo-orthodox (Scripture becomes the word of God in encounter). Evangelicals typically hold verbal-plenary inspiration." },
  { name: "Inerrancy", color: "#F59E0B", desc: "Scripture, in its original manuscripts, teaches nothing that is false. Infallibility (a weaker claim) holds that Scripture does not mislead on matters of faith and practice. Both terms appear in evangelical confessions; inerrancy is the stronger and more technically precise claim about the truthfulness of all that Scripture affirms." },
  { name: "Authority", color: "#EF4444", desc: "Scripture's authority derives from its divine origin — it carries the authority of its Author. Sola scriptura (Scripture alone) means Scripture is the supreme norm by which all other authorities are measured. This does not mean the church, tradition, and reason have no role — they serve as interpreters under Scripture's authority." },
  { name: "Sufficiency", color: "#3B82F6", desc: "Scripture contains everything necessary for salvation and for a fully equipped Christian life (2 Timothy 3:17). Sola scriptura does not deny tradition's value but denies that tradition can add binding requirements for salvation or obligatory beliefs beyond Scripture. The Reformers recovered this against medieval additions to the deposit of faith." },
  { name: "Clarity (Perspicuity)", color: "#10B981", desc: "The central message of Scripture — what God requires for salvation and the basic shape of Christian life — is clear enough for ordinary people to understand through careful, prayerful reading. This does not mean all Scripture is equally clear or that expert interpretation is unnecessary. It means the good news is not hidden behind a specialist class." },
];

const PRACTICES = [
  { title: "Read It, Not Just About It", desc: "The most important thing for your theology of Scripture is actually reading it. Many Christians have a high view of biblical authority in theory while neglecting actual engagement. A Bible that is inerrantly authoritative but consistently closed is practically indistinguishable from no Bible at all.", icon: "📖" },
  { title: "Read with the Church's Help", desc: "Two thousand years of careful interpreters have read these texts. Use commentaries, read the church fathers, engage the creeds. Private interpretation was not the Reformers' goal — their goal was interpretation accountable to Scripture, not independent of the interpretive tradition. Luther's insight needs Augustine's rigor.", icon: "⛪" },
  { title: "Take Genre Seriously", desc: "Apocalyptic literature is not read the same way as historical narrative; poetry is not read the same way as law. Taking genre seriously is not diminishing Scripture's authority but honoring its actual character. The first question in interpretation is: what kind of writing is this?", icon: "🔍" },
  { title: "Memorize Broadly", desc: "The goal of memorization is not a collection of proof texts but a mind saturated with the patterns, rhythms, and images of Scripture. Broad memorization — whole psalms, chapters, extended passages — produces a different kind of scriptural formation than verse-by-verse memorization alone.", icon: "🧠" },
  { title: "Let Hard Texts Remain Hard", desc: "Some texts are difficult, obscure, or in genuine tension with other texts. Resist the urge to prematurely resolve them with a system that papers over the difficulty. The difficulty is often where the most careful and fruitful interpretation happens. Let the text be as hard as it is.", icon: "⚖️" },
  { title: "Apply Before You Move On", desc: "James warns against being a hearer who does not do (1:22-24). Before moving to the next passage in your reading plan, ask: what does this text require of me? Not every passage has an immediate application, but the discipline of asking the question shapes a reading practice that changes lives.", icon: "🎯" },
];

export default function ScriptureTheologyPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "doctrines" | "practices">("theology");
  const [selectedDoc, setSelectedDoc] = useState("Revelation");

  const doc = DOCTRINES.find(d => d.name === selectedDoc)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📜</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Theology of Scripture</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            What is the Bible, and why should anyone trust it? The doctrines of inspiration, inerrancy, authority, and sufficiency provide the theological foundation for Scripture's place in the Christian life.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "doctrines" as const, label: "Key Doctrines", icon: "🏛️" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "doctrines" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {DOCTRINES.map(d => (
                <button key={d.name} onClick={() => setSelectedDoc(d.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedDoc === d.name ? d.color : BORDER}`, background: selectedDoc === d.name ? `${d.color}20` : "transparent", color: selectedDoc === d.name ? d.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {d.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${doc.color}30`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: doc.color, fontWeight: 900, fontSize: 22, marginBottom: 16 }}>{doc.name}</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{doc.desc}</p>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                A high view of Scripture without a high engagement with Scripture is inconsistent. These practices align the doctrine with the life.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
