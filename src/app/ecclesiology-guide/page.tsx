"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

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

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "nature", label: "Nature of Church" },
  { id: "marks", label: "Marks" },
  { id: "government", label: "Government" },
  { id: "sacraments", label: "Sacraments" },
  { id: "membership", label: "Membership" },
  { id: "mission", label: "Mission" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const CHURCH_TEXTS = [
  { ref: "Matthew 16:18", text: "I tell you that you are Peter, and on this rock I will build my church, and the gates of Hades will not overcome it.", color: GREEN },
  { ref: "Ephesians 2:19–22", text: "You are fellow citizens with God's people and also members of his household... a holy temple in the Lord... a dwelling in which God lives by his Spirit.", color: BLUE },
  { ref: "1 Peter 2:9–10", text: "You are a chosen people, a royal priesthood, a holy nation, God's special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.", color: GOLD },
  { ref: "Acts 2:42–47", text: "They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer... Every day they continued to meet together in the temple courts.", color: TEAL },
  { ref: "Ephesians 5:25–27", text: "Christ loved the church and gave himself up for her to make her holy, cleansing her by the washing with water through the word, to present her to himself as a radiant church.", color: PURPLE },
];

const CHURCH_IMAGES = [
  { title: "Body of Christ", ref: "1 Cor 12; Eph 4:12–16", desc: "The most organic image — Christ is the head, believers are members of his body. Emphasizes interdependence, diversity of gifts serving the whole, and Christ's inseparable union with his people.", color: GREEN },
  { title: "Family of God", ref: "Eph 2:19; Gal 6:10", desc: "Believers are children of God, members of one household. Emphasizes the relational, covenantal dimension — obligations of care, the elder-young dynamic, belonging. 'Household of faith.'", color: BLUE },
  { title: "Temple of the Spirit", ref: "Eph 2:21–22; 1 Cor 3:16", desc: "Both the corporate community (1 Cor 3:16) and individual believers (1 Cor 6:19) are the Spirit's temple. God's presence dwells in his people — the new covenant fulfillment of the tabernacle and temple.", color: TEAL },
  { title: "Bride of Christ", ref: "Eph 5:25–32; Rev 19:7–9", desc: "The most intimate image — the church is Christ's beloved bride for whom he gave himself. Points to the covenant love, the eschatological consummation (the wedding supper of the Lamb), and the purity required.", color: GOLD },
  { title: "Royal Priesthood", ref: "1 Pet 2:9–10; Rev 1:6", desc: "Every believer participates in the priestly role — direct access to God, offering spiritual sacrifices, proclaiming God's excellencies. The Reformation's doctrine of the priesthood of all believers flows from this image.", color: PURPLE },
];

const MARKS_OF_CHURCH = [
  {
    title: "True Preaching of the Word (Reformers)",
    desc: "Calvin and Luther emphasized that where the Word of God is truly preached and received, there is the church. The Word creates and sustains the community. This excludes communities that have abandoned Scripture's authority.",
    color: GOLD,
  },
  {
    title: "Right Administration of Sacraments",
    desc: "The sacraments (baptism and the Lord's Supper — or Lord's Supper alone in the Baptist tradition) must be administered according to Christ's institution. They mark membership in the covenant community and nourish the people of God.",
    color: BLUE,
  },
  {
    title: "Faithful Exercise of Church Discipline",
    desc: "Added by Calvin, Bucer, and Knox as a third mark — church discipline (Matt 18:15–20) is necessary for the church to maintain its integrity. A community that tolerates flagrant unrepentant sin without confronting it has abandoned one of its defining functions.",
    color: RED,
  },
  {
    title: "The Four Creedal Marks",
    desc: "The Nicene Creed (381) identifies the church as one, holy, catholic, and apostolic. One: single body united in Christ. Holy: set apart for God. Catholic: universal, not sectarian. Apostolic: founded on the apostolic gospel and continuing in apostolic teaching.",
    color: TEAL,
  },
];

const GOVERNMENT_MODELS = [
  {
    title: "Episcopalianism",
    desc: "Governance by bishops (Gk: episkopos) in a hierarchical structure. Bishops have authority over multiple congregations; the succession of bishops connects the church to the apostles. Practiced by Catholic, Orthodox, Anglican/Episcopal, and Methodist traditions.",
    pros: "Historical continuity; clear lines of accountability; guards against congregational factionalism.",
    cons: "Risk of top-down authoritarianism; bishops can become disconnected from local congregations.",
    color: PURPLE,
  },
  {
    title: "Presbyterianism",
    desc: "Governance by elders (Gk: presbyteros) at congregational, regional, and national levels. Multiple elders lead each congregation (the session); presbyteries oversee multiple churches. Reformed/Presbyterian tradition.",
    pros: "Collegial leadership guards against pastoral autocracy; regional accountability; elder plurality.",
    cons: "Complex structures; risk of bureaucracy; individual churches can be overruled by higher courts.",
    color: BLUE,
  },
  {
    title: "Congregationalism",
    desc: "Authority resides in the local congregation — the assembled body of regenerate members who covenant together. Each church is self-governing. Baptist, Congregationalist, and many evangelical churches.",
    pros: "Member ownership; local accountability; no outside authority over the congregation.",
    cons: "Risk of congregational tyranny; no external check on pastoral or member abuse; prone to fragmentation.",
    color: GREEN,
  },
  {
    title: "Single Elder/Pastor-Led",
    desc: "A single senior pastor holds primary authority, often with a board serving in an advisory or accountability role. Common in charismatic and some Baptist/evangelical contexts. Not a formally named polity but a common de facto structure.",
    pros: "Clear vision and leadership; pastoral authority is concentrated for decisive action.",
    cons: "High risk of abuse without accountability; personality-centered church; no biblical model for solo leadership.",
    color: GOLD,
  },
];

const SACRAMENTS_CONTENT = [
  {
    title: "Views on the Sacraments/Ordinances",
    desc: "Major traditions disagree on the number, nature, and effect of the sacraments.",
    items: [
      { label: "Roman Catholic", val: "Seven sacraments; sacraments confer grace ex opere operato (by the act itself). Baptism regenerates; the Eucharist is a sacrifice of Christ's body and blood (transubstantiation)." },
      { label: "Lutheran (Sacramental Union)", val: "Baptism regenerates; Christ is truly present 'in, with, and under' the bread and wine (real presence). Two sacraments: baptism and Lord's Supper." },
      { label: "Reformed/Calvinist", val: "Christ is spiritually present in the Supper (virtual presence). Sacraments are signs and seals of covenant grace — they confirm, not confer, what is received by faith. Baptism is the covenant sign." },
      { label: "Zwinglian/Memorial", val: "The Lord's Supper is a memorial — Christ is not physically present; the bread and wine signify his body and blood. Many Baptist and evangelical churches." },
    ],
    color: TEAL,
  },
  {
    title: "Baptism: Mode and Meaning",
    desc: "Two major debates: (1) Mode: immersion only (Baptist) vs. any mode (pouring/sprinkling) acceptable (Reformed/Lutheran/Catholic/Orthodox). (2) Subjects: believer's baptism only (credobaptism) vs. infant baptism for covenant children (paedobaptism). The debate between them is substantive — involving different understandings of the new covenant, regeneration, and church membership.",
    items: [],
    color: BLUE,
  },
  {
    title: "The Lord's Supper: Frequency and Practice",
    desc: "Calvin wanted weekly Communion; the Geneva city council allowed only quarterly. Most Reformed churches today observe monthly or quarterly. Many evangelical churches observe monthly. Catholic and Orthodox communities observe weekly or daily. The NT pattern (Acts 2:42–46) suggests frequent observance.",
    items: [],
    color: GOLD,
  },
];

const MEMBERSHIP_DISCIPLINE = [
  {
    title: "Church Membership",
    desc: "The NT assumes belonging to a particular local community (Acts 2:41–47; 1 Cor 5:1–13). Membership is not merely organizational but covenantal — a commitment to love, serve, submit to, and be accountable to a specific body of believers. Mark Dever and others have argued that formal membership is essential to meaningful church discipline.",
    color: GREEN,
  },
  {
    title: "Church Discipline (Matthew 18:15–20)",
    desc: "Jesus outlines a four-step process: private confrontation, small group witness, church confrontation, then exclusion from the community if unrepentant. The goal is restoration, not punishment (Gal 6:1; 2 Cor 2:6–8). Most evangelical churches rarely practice formal church discipline — the result is both moral laxity and a diminished understanding of membership.",
    color: RED,
  },
  {
    title: "Accountability and Submission",
    desc: "Hebrews 13:17: 'Have confidence in your leaders and submit to their authority, because they keep watch over you as those who must give an account.' Healthy church membership involves real submission to real shepherds — not blind obedience but the willingness to be known, guided, and corrected.",
    color: BLUE,
  },
];

const MISSION_CONTENT = [
  {
    title: "The Church's Dual Commission",
    desc: "The church is sent both to proclaim the gospel (evangelism) and to embody kingdom values (social engagement). These are not alternatives — the whole gospel calls for both. The church is simultaneously a gathered community (worship and formation) and a scattered community (witness and service).",
    color: GREEN,
  },
  {
    title: "Gathered and Scattered",
    desc: "The church's rhythms include gathering for worship, teaching, and mutual care (ekklesia — called out) and scattering for witness, service, and cultural engagement. Many churches are strong at gathering but neglect the scattered dimension. Others emphasize social engagement while neglecting the gathered community.",
    color: BLUE,
  },
  {
    title: "Local and Global",
    desc: "Every local congregation participates in both local and global mission. Local: serving the neighborhood — the poor, the marginalized, neighbors. Global: supporting, sending, and praying for cross-cultural missionaries. The Great Commission is 'to all nations' — no church can be obedient to it while ignoring either dimension.",
    color: TEAL,
  },
  {
    title: "Word and Deed",
    desc: "The church's mission includes verbal proclamation of the gospel and concrete deeds of mercy and justice. These belong together — the gospel is announced and embodied. Social action without proclamation is incomplete; proclamation without social action undermines its credibility.",
    color: GOLD,
  },
];

const VIDEOS = [
  { videoId: "r2NkiRzZnfM", title: "What Is the Church? — Mark Dever" },
  { videoId: "xyNQW8VYWZo", title: "Church Membership — Tim Keller" },
  { videoId: "a0IZN_QVSB4", title: "Why Church Discipline? — Jonathan Leeman" },
  { videoId: "sNh2B9Q5i28", title: "The Mission of the Church — Kevin DeYoung" },
  { videoId: "vDt0N1ZHSW8", title: "Church Government Models Compared" },
];

export default function EcclesiologyGuidePage() {
  const [tab, setTab] = useLocalStorage("vine_eccl_tab", "overview");
  const [openGov, setOpenGov] = useLocalStorage("vine_eccl_gov", "");
  const [openMark, setOpenMark] = useLocalStorage("vine_eccl_mark", "");
  const [journal, setJournal] = useLocalStorage("vine_eccl_journal", "");

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" };
  const accordionBtn = (open: boolean, color: string) => ({
    width: "100%", textAlign: "left" as const, display: "flex", justifyContent: "space-between",
    alignItems: "center", padding: "1rem 1.25rem", background: open ? `${color}12` : "transparent",
    border: `1px solid ${open ? color + "40" : BORDER}`, borderRadius: 12, cursor: "pointer", marginBottom: 8,
    color: TEXT, fontWeight: 700, transition: "all .2s",
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>⛪</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: BLUE, textTransform: "uppercase" }}>Systematic Theology</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Ecclesiology: The Doctrine of the Church
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }}>
            What is the church? Ecclesiology is the branch of theology devoted to understanding the nature, marks, structure, ordinances, and mission of the community Christ is building — his body, his bride, his family.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t.id} type="button" onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t.id ? BLUE : "transparent", color: tab === t.id ? "#fff" : MUTED,
                border: `1px solid ${tab === t.id ? BLUE : BORDER}`, cursor: "pointer", transition: "all .18s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: BLUE }}>Key Texts on the Church</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {CHURCH_TEXTS.map((t) => (
                  <div key={t.ref} style={{ background: `${t.color}10`, border: `1px solid ${t.color}30`, borderRadius: 12, padding: "1rem 1.25rem", borderLeft: `3px solid ${t.color}` }}>
                    <span style={{ fontWeight: 800, color: t.color, fontSize: "0.85rem" }}>{t.ref}</span>
                    <p style={{ color: TEXT, lineHeight: 1.7, marginTop: "0.3rem" }}>{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ ...card }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GOLD }}>Biblical Images of the Church</h2>
              <div style={{ display: "grid", gap: "1rem" }}>
                {CHURCH_IMAGES.map((item) => (
                  <div key={item.title} style={{ background: `${item.color}0A`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1rem" }}>
                    <div style={{ display: "flex", gap: "0.75rem", alignItems: "baseline", marginBottom: "0.4rem" }}>
                      <span style={{ fontWeight: 800, color: item.color }}>{item.title}</span>
                      <span style={{ fontSize: "0.8rem", color: MUTED }}>{item.ref}</span>
                    </div>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "nature" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GREEN }}>The Nature of the Church</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "Visible and Invisible Church", desc: "The invisible church is the totality of all true believers across all times and places — known only to God. The visible church includes all who profess faith and their children (for paedobaptists) — including hypocrites and unregenerate members. Augustine's tares among the wheat (Matt 13:24–30). This distinction explains why the church is simultaneously holy (invisible) and marked by sin (visible).", color: GREEN },
                { title: "Local and Universal", desc: "The church is both a local congregation (1 Cor 1:2 — 'the church of God in Corinth') and the universal body of all believers in Christ (Eph 1:22–23; Col 1:18). The local church is not a branch of the universal church but a full expression of it — the whole of Christ is present where two or three gather in his name (Matt 18:20).", color: BLUE },
                { title: "The Church's Foundation", desc: "Matthew 16:18: Jesus will build his church on 'this rock.' Protestants generally hold the rock is Peter's confession ('You are the Messiah, the Son of the living God') — the church is built on the apostolic gospel. Catholics hold the rock is Peter himself — the first pope. The church's foundation is apostolic doctrine (Eph 2:20).", color: TEAL },
                { title: "The Church in God's Plan", desc: "The church is not a contingency plan — it is God's eternal purpose: 'to bring unity to all things in heaven and on earth under Christ' (Eph 1:9–10). The church is 'the fullness of him who fills everything in every way' (Eph 1:23). Central to eschatology — the bride who will be presented to her bridegroom at the consummation (Rev 21).", color: GOLD },
              ].map((item) => (
                <div key={item.title} style={{ background: `${item.color}0A`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1.25rem" }}>
                  <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "marks" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: TEAL }}>Marks of the True Church</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              What distinguishes a true church from a counterfeit? The Reformers and later confessional theologians identified marks that constitute the presence of the true church.
            </p>
            {MARKS_OF_CHURCH.map((m, i) => {
              const key = String(i);
              const open = openMark === key;
              return (
                <div key={m.title}>
                  <button type="button" style={accordionBtn(open, m.color)} onClick={() => setOpenMark(open ? "" : key)}>
                    <span>{m.title}</span>
                    <span style={{ color: m.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${m.color}0A`, border: `1px solid ${m.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{m.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "government" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: BLUE }}>Church Government Models</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              How should the church be governed? Three main models represent different convictions about the NT pattern and the distribution of authority.
            </p>
            {GOVERNMENT_MODELS.map((m, i) => {
              const key = String(i);
              const open = openGov === key;
              return (
                <div key={m.title}>
                  <button type="button" style={accordionBtn(open, m.color)} onClick={() => setOpenGov(open ? "" : key)}>
                    <span>{m.title}</span>
                    <span style={{ color: m.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${m.color}0A`, border: `1px solid ${m.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "0.75rem" }}>{m.desc}</p>
                      <p style={{ color: GREEN, fontSize: "0.9rem", marginBottom: "0.3rem" }}><strong>Strengths:</strong> {m.pros}</p>
                      <p style={{ color: GOLD, fontSize: "0.9rem" }}><strong>Challenges:</strong> {m.cons}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "sacraments" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: TEAL, margin: 0 }}>Sacraments and Ordinances</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              How many sacraments? What do they do? Who should receive them? These questions divide Christians across traditions but concern the most tangible, embodied practices of the church.
            </p>
            {SACRAMENTS_CONTENT.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: item.items.length > 0 ? "1rem" : 0 }}>{item.desc}</p>
                {item.items.map((entry) => (
                  <div key={entry.label} style={{ background: `${item.color}08`, borderRadius: 8, padding: "0.75rem", marginBottom: "0.5rem" }}>
                    <span style={{ fontWeight: 700, color: item.color }}>{entry.label}: </span>
                    <span style={{ color: MUTED }}>{entry.val}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {tab === "membership" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: GREEN, margin: 0 }}>Membership and Discipline</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              Church membership and discipline are among the most neglected topics in contemporary evangelicalism — yet they are essential to what the church is and how it functions.
            </p>
            {MEMBERSHIP_DISCIPLINE.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "mission" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: TEAL, margin: 0 }}>The Mission of the Church</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              The church exists for both worship and witness. Its mission encompasses proclamation of the gospel and demonstration of kingdom values through service, justice, and community.
            </p>
            {MISSION_CONTENT.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: PURPLE }}>Personal Reflection</h2>
            <p style={{ color: MUTED, marginBottom: "1rem" }}>What is your relationship to a local church community? What aspect of ecclesiology — membership, discipline, sacraments, government — most challenges or shapes your understanding of belonging?</p>
            <textarea
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 200, background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", outline: "none", boxSizing: "border-box" }}
            />
            {journal && <div style={{ marginTop: "0.75rem", fontSize: "0.82rem", color: MUTED }}>Auto-saved · {journal.length} characters</div>}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: TEAL }}>Video Teaching on the Church</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <div key={v.videoId}>
                  <div style={{ fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>{v.title}</div>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 12, overflow: "hidden" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {[
            { label: "Church Membership", href: "/church-membership" },
            { label: "Church Planting", href: "/church-planting-guide" },
            { label: "Sacraments & Ordinances", href: "/sacraments-ordinances" },
            { label: "Spiritual Formation", href: "/spiritual-formation" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ padding: "0.4rem 1rem", borderRadius: 999, fontSize: "0.82rem", fontWeight: 700, border: `1px solid ${BORDER}`, color: MUTED, textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
