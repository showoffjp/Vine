"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Users, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";

const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const MUTED = "#9898B3";
const TEXT = "#F2F2F8";

const TABS = ["overview", "comp", "egal", "passages", "scholars", "church", "journal", "videos"] as const;
type Tab = (typeof TABS)[number];

const TAB_LABELS: Record<Tab, string> = {
  overview: "Overview",
  comp: "Complementarian",
  egal: "Egalitarian",
  passages: "Key Passages",
  scholars: "Scholars",
  church: "In the Church",
  journal: "Journal",
  videos: "Videos",
};

const COMP_ARGUMENTS = [
  {
    title: "Creation Order",
    verse: "1 Timothy 2:12–13; Genesis 2",
    body: "Paul grounds male leadership not in culture but in creation: Adam was formed first, then Eve (1 Tim 2:13). Complementarians argue this pre-fall order is normative for all time and church contexts, not a cultural accommodation.",
  },
  {
    title: "Headship in Marriage",
    verse: "Ephesians 5:22–33",
    body: "Husband-wife relationship mirrors Christ-church relationship. The husband is called to sacrificial servant-leadership; the wife to willing submission. Complementarians extend this pattern to church structure.",
  },
  {
    title: "Male Eldership / Pastorate",
    verse: "1 Timothy 3:1–7; Titus 1:5–9",
    body: "Elder qualifications use masculine language ('husband of one wife') and are consistently given to men in NT churches. Complementarians see this as prescriptive, not merely descriptive of the first-century culture.",
  },
  {
    title: "1 Corinthians 14:34–35",
    verse: "1 Corinthians 14:34–35",
    body: "'Women should be silent in the churches.' Complementarians (esp. traditionalists) read this as restricting women from authoritative public teaching. Some hold it refers to disrupting evaluations of prophecy; others apply it to all public teaching.",
  },
  {
    title: "Design Theology",
    verse: "Genesis 1–2",
    body: "Complementarians argue that male and female are designed for different but equal roles — not hierarchy in value but in function. This is described as a good gift, not a consequence of the fall.",
  },
];

const EGAL_ARGUMENTS = [
  {
    title: "Galatians 3:28 — The New Creation",
    verse: "Galatians 3:28",
    body: "'There is neither Jew nor Greek, slave nor free, nor is there male and female, for you are all one in Christ Jesus.' Egalitarians argue this inaugurates a new-creation order where the Gen 2–3 hierarchy of the fall is being undone in Christ.",
  },
  {
    title: "Pentecost Fulfillment",
    verse: "Acts 2:17–18; Joel 2:28",
    body: "Peter quotes Joel: 'Your sons and daughters will prophesy.' The Spirit's outpouring in Acts shows women prophesying (Acts 21:9; 1 Cor 11:5) with Paul's apparent approval, indicating public authoritative speech by women is expected.",
  },
  {
    title: "Women Leaders in Scripture",
    verse: "Romans 16:7; Judges 4; Acts 18:26",
    body: "Junia is 'outstanding among the apostles' (Rom 16:7). Deborah judged and led Israel (Judg 4). Priscilla taught Apollos (Acts 18:26). Phoebe is a deacon (Rom 16:1). Egalitarians argue biblical precedent includes women in authoritative roles.",
  },
  {
    title: "1 Timothy 2 as Occasional Letter",
    verse: "1 Timothy 2:11–15",
    body: "1 Tim 2:12 may address specific false teaching in Ephesus where women were spreading Artemis-cult influenced heresy (the 'I do not permit' is present tense / situational). Egalitarians argue the passage is context-specific, not a universal prohibition.",
  },
  {
    title: "Mutual Submission",
    verse: "Ephesians 5:21",
    body: "Ephesians 5:21 — 'Submit to one another' — precedes the husband-wife section. Egalitarians argue mutual submission is the framework, and v.22–33 shows what this looks like in marriage, not a hierarchy overriding v.21.",
  },
];

const KEY_PASSAGES = [
  {
    ref: "1 Timothy 2:11–15",
    comp: "Universal prohibition on women teaching or exercising authority over men in the church, grounded in creation order.",
    egal: "Occasional instruction to a specific Ephesian context where women were spreading false teaching influenced by local Artemis cult worship.",
  },
  {
    ref: "1 Corinthians 14:34–35",
    comp: "Women should be silent in church gatherings — restricts public authoritative teaching.",
    egal: "May refer to disruptive questioning during prophecy evaluation, or may be Paul quoting a Corinthian position he will then refute (v.36).",
  },
  {
    ref: "Galatians 3:28",
    comp: "Addresses spiritual standing before God (equal salvation), not church role structure.",
    egal: "Announces a new-creation order in which the fall's curse (Gen 3:16 domination) is being reversed in Christ.",
  },
  {
    ref: "Ephesians 5:22–33",
    comp: "Husband as head mirrors Christ-church; a creation-grounded structure carried into the new covenant.",
    egal: "Illustrates mutual submission (v.21) worked out; Christ's 'headship' means self-giving, not authority.",
  },
  {
    ref: "Romans 16:7 — Junia",
    comp: "Junia is 'well known to the apostles' (not necessarily 'among' the apostles); likely a traveling missionary.",
    egal: "Junia is 'outstanding among the apostles' — a female apostle recognized by Paul, indicating women can hold authoritative apostolic roles.",
  },
  {
    ref: "Acts 2:17–18 / Joel 2:28",
    comp: "Describes the gift of prophecy broadly; prophecy in the NT is not equivalent to the authoritative teaching role of eldership.",
    egal: "Peter directly applies Joel's prophecy — daughters prophesying publicly — to the new covenant age, indicating women in authoritative public speech.",
  },
];

const SCHOLARS = [
  {
    name: "Wayne Grudem",
    position: "Complementarian",
    color: BLUE,
    work: "Recovering Biblical Manhood and Womanhood (co-edited with John Piper)",
    note: "Systematic theologian, one of the most comprehensive complementarian scholarly works. Standard reference for the position.",
  },
  {
    name: "John Piper",
    position: "Complementarian",
    color: BLUE,
    work: "What's the Difference?; What Does It Mean to Be a Man?",
    note: "Founder of Desiring God. Argues complementarianism reflects the eternal nature of God's design for human flourishing.",
  },
  {
    name: "Thomas Schreiner",
    position: "Complementarian",
    color: BLUE,
    work: "Women in the Church (co-edited with Köstenberger)",
    note: "NT scholar at Southern Seminary. Detailed exegetical defense of the complementarian reading of 1 Tim 2 and 1 Cor 14.",
  },
  {
    name: "Philip Payne",
    position: "Egalitarian",
    color: TEAL,
    work: "Man and Woman, One in Christ",
    note: "One of the most exegetically detailed egalitarian works. Challenges complementarian readings of 1 Tim 2:12 at the manuscript and linguistic level.",
  },
  {
    name: "N.T. Wright",
    position: "Egalitarian",
    color: TEAL,
    work: "Women's Service in the Church: The Biblical Basis",
    note: "Anglican bishop and NT scholar. Argues for women in ordained ministry; his essay on 1 Tim 2 is widely read.",
  },
  {
    name: "Lucy Peppiatt",
    position: "Egalitarian",
    color: TEAL,
    work: "Women and Worship at Corinth",
    note: "Argues that 1 Cor 11 and 14 contain a Corinthian quotation Paul is critiquing, not a prescription he is giving.",
  },
  {
    name: "Kathy Keller",
    position: "Complementarian",
    color: BLUE,
    work: "Jesus, Justice, and Gender Roles",
    note: "Argues complementarianism is compatible with strong female leadership in many church roles, just not the senior pastorate.",
  },
  {
    name: "Scot McKnight",
    position: "Egalitarian",
    color: TEAL,
    work: "The Blue Parakeet",
    note: "Accessible introduction to reading the Bible on women's roles. Challenges proof-texting in favor of seeing the full biblical trajectory.",
  },
];

const CHURCH_APPROACHES = [
  {
    title: "Hard Complementarian",
    desc: "No female teaching over men in any church context. No women elders, deacons, or teaching mixed adult groups. Some restrict women from leading in prayer or reading Scripture publicly.",
    examples: "Presbyterian Church in America (PCA), Southern Baptist Convention (SBC), Reformed Baptist churches",
  },
  {
    title: "Soft Complementarian",
    desc: "Women may serve in many ministry roles (deacons, teachers, missionaries, ministry directors) but the senior pastor/elder role is reserved for men. Women can teach mixed groups in non-authoritative teaching settings.",
    examples: "Many Anglican, evangelical, and non-denominational churches",
  },
  {
    title: "Egalitarian",
    desc: "Women may serve in all roles including senior pastor and elder. Ministry roles are distributed by gifting, not gender.",
    examples: "United Methodist Church, Assemblies of God, Vineyard, Anglican Church of Canada, many evangelical colleges",
  },
  {
    title: "Soft Egalitarian",
    desc: "Women may serve as elders and pastors but the church maintains some male-led structures in family life. Distinct from radical egalitarianism in affirming complementarity in marriage.",
    examples: "Many evangelical-egalitarian congregations; CBE International churches",
  },
];

const VIDEOS = [
  { id: "J4TJI3HNRNU", title: "Complementarianism Explained — Desiring God" },
  { id: "Eu5bkZtTiZs", title: "Egalitarianism — The Case For Women in Ministry" },
  { id: "3U3AXRbVbFM", title: "N.T. Wright on Women in Ministry" },
  { id: "QpzH8TnJ3IU", title: "What Does the Bible Say? — Women in Church Leadership" },
];

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

export default function CompEgalPage() {
  const [tab, setTab] = useLocalStorage("vine_compegal_tab", "overview");
  const [expandedPassage, setExpandedPassage] = useLocalStorage("vine_compegal_passage", "");
  const [journalPosition, setJournalPosition] = useLocalStorage("vine_compegal_position", "");
  const [journalPassage, setJournalPassage] = useLocalStorage("vine_compegal_passage_journal", "");
  const [journalChurch, setJournalChurch] = useLocalStorage("vine_compegal_church", "");

  const togglePassage = (ref: string) => setExpandedPassage(expandedPassage === ref ? "" : ref);

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      {/* Header */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
        <Link href="/dashboard" style={{ color: MUTED, display: "flex", alignItems: "center" }}>
          <ArrowLeft size={18} />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: PURPLE + "22", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Users size={18} color={PURPLE} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 17 }}>Complementarianism & Egalitarianism</div>
            <div style={{ color: MUTED, fontSize: 12 }}>The women-in-ministry debate — a balanced biblical guide</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "0 20px", display: "flex", gap: 2, overflowX: "auto" }}>
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: "12px 12px",
              background: "none",
              border: "none",
              borderBottom: tab === t ? `2px solid ${PURPLE}` : "2px solid transparent",
              color: tab === t ? TEXT : MUTED,
              fontWeight: tab === t ? 600 : 400,
              fontSize: 12,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {TAB_LABELS[t]}
          </button>
        ))}
      </div>

      <div style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>The Debate at a Glance</h2>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              Few questions divide evangelical churches more than the roles of women in church and home. Both positions are held by serious, Scripture-loving Christians who read the same Bible and arrive at different conclusions.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
              <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${BLUE}44`, padding: 16 }}>
                <div style={{ color: BLUE, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>COMPLEMENTARIAN</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>
                  Men and women are equal in dignity and salvation but designed for different roles. Male headship in marriage and male-only eldership/senior pastorate in the church reflect God's creation order.
                </p>
              </div>
              <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${TEAL}44`, padding: 16 }}>
                <div style={{ color: TEAL, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>EGALITARIAN</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>
                  Men and women are equal in dignity, salvation, and gifting. All ministry roles — including pastor and elder — should be open to women based on gifting, not gender. Christ's redemption undoes the fall's hierarchy.
                </p>
              </div>
            </div>
            <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16, marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>What Both Sides Agree On</div>
              <ul style={{ fontSize: 13, color: MUTED, margin: 0, paddingLeft: 16, lineHeight: 1.8 }}>
                <li>Men and women are equally made in God's image (Gen 1:26–27)</li>
                <li>Women are equally heirs of salvation (Gal 3:28)</li>
                <li>Women played critical roles in Jesus's ministry and the early church</li>
                <li>The Holy Spirit distributes gifts to men and women alike (Acts 2; 1 Cor 12)</li>
                <li>This debate does not determine one's salvation</li>
              </ul>
            </div>
            <div style={{ background: "#F59E0B11", border: `1px solid #F59E0B33`, borderRadius: 10, padding: 14 }}>
              <p style={{ fontSize: 12, color: "#FDE68A", margin: 0 }}>
                <strong>A note on charity:</strong> This is an intra-evangelical debate. Some of the most faithful, Scripture-centered Christians hold each position. This page presents both positions as argued by their best advocates, not caricatures.
              </p>
            </div>
          </div>
        )}

        {/* COMPLEMENTARIAN */}
        {tab === "comp" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>The Complementarian Position</h2>
            <p style={{ color: BLUE, fontSize: 12, marginBottom: 16 }}>
              Held by: PCA, SBC, CBMW, Reformed Baptist, many evangelical churches
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {COMP_ARGUMENTS.map((arg, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BLUE}33`, padding: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{arg.title}</div>
                  <div style={{ color: BLUE, fontSize: 11, fontWeight: 600, marginBottom: 8 }}>{arg.verse}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{arg.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EGALITARIAN */}
        {tab === "egal" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>The Egalitarian Position</h2>
            <p style={{ color: TEAL, fontSize: 12, marginBottom: 16 }}>
              Held by: CBE International, Assemblies of God, United Methodist, Vineyard, many Anglican churches
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {EGAL_ARGUMENTS.map((arg, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${TEAL}33`, padding: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{arg.title}</div>
                  <div style={{ color: TEAL, fontSize: 11, fontWeight: 600, marginBottom: 8 }}>{arg.verse}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{arg.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* KEY PASSAGES */}
        {tab === "passages" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Key Passages — Both Readings</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>
              Tap each passage to see how complementarians and egalitarians read it.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {KEY_PASSAGES.map((p) => {
                const isOpen = expandedPassage === p.ref;
                return (
                  <div key={p.ref} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}` }}>
                    <button
                      onClick={() => togglePassage(p.ref)}
                      style={{ width: "100%", background: "none", border: "none", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}
                    >
                      <span style={{ fontWeight: 600, fontSize: 14, textAlign: "left" }}>{p.ref}</span>
                      {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 16px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
                        <div style={{ background: BLUE + "11", borderLeft: `3px solid ${BLUE}`, padding: "8px 12px", borderRadius: "0 6px 6px 0" }}>
                          <div style={{ color: BLUE, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>COMPLEMENTARIAN READING</div>
                          <p style={{ fontSize: 12, color: "#BFDBFE", margin: 0 }}>{p.comp}</p>
                        </div>
                        <div style={{ background: TEAL + "11", borderLeft: `3px solid ${TEAL}`, padding: "8px 12px", borderRadius: "0 6px 6px 0" }}>
                          <div style={{ color: TEAL, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>EGALITARIAN READING</div>
                          <p style={{ fontSize: 12, color: "#CCFBF1", margin: 0 }}>{p.egal}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SCHOLARS */}
        {tab === "scholars" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Voices & Scholars</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>
              Leading thinkers who have defined each position at a scholarly level.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {SCHOLARS.map((s, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${s.color}33`, padding: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{s.name}</div>
                    <span style={{ background: s.color + "22", color: s.color, borderRadius: 20, padding: "2px 8px", fontSize: 10, fontWeight: 700 }}>
                      {s.position.toUpperCase()}
                    </span>
                  </div>
                  <div style={{ color: s.color, fontSize: 11, fontWeight: 600, marginBottom: 6 }}>{s.work}</div>
                  <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* IN THE CHURCH */}
        {tab === "church" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>How It Plays Out in Churches</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>
              These positions exist on a spectrum. Most churches are not at the extremes.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {CHURCH_APPROACHES.map((a, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{a.title}</div>
                  <p style={{ fontSize: 13, color: "#C4C4DC", marginBottom: 8 }}>{a.desc}</p>
                  <div style={{ background: GREEN + "11", borderRadius: 6, padding: "6px 10px" }}>
                    <span style={{ color: GREEN, fontSize: 11, fontWeight: 600 }}>EXAMPLES: </span>
                    <span style={{ fontSize: 11, color: MUTED }}>{a.examples}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, background: PURPLE + "11", border: `1px solid ${PURPLE}33`, borderRadius: 10, padding: 14 }}>
              <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>
                <strong style={{ color: TEXT }}>Navigating a church with a different view:</strong> If your church holds a position you disagree with, consider: Is this a salvation issue? (No.) Does the church have other markers of health? Can you raise questions respectfully? Consider whether this is a hill to leave over — most complementarian churches still highly value women's ministry; most egalitarian churches still value marriage.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Personal Reflection</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Saved to your device only.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>
                  Where do you currently land, and why? What has shaped your view?
                </label>
                <textarea
                  value={journalPosition}
                  onChange={(e) => setJournalPosition(e.target.value)}
                  placeholder="My church taught… I've been reading… the passage that most challenges me is…"
                  rows={4}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }}
                />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>
                  Which passages do you find most challenging to your current view?
                </label>
                <textarea
                  value={journalPassage}
                  onChange={(e) => setJournalPassage(e.target.value)}
                  placeholder="I struggle with 1 Tim 2:12 because… / Galatians 3:28 seems to suggest…"
                  rows={3}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }}
                />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>
                  How does your church handle this, and how are you navigating it?
                </label>
                <textarea
                  value={journalChurch}
                  onChange={(e) => setJournalChurch(e.target.value)}
                  placeholder="My church is complementarian / egalitarian, and I feel…"
                  rows={3}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }}
                />
              </div>
              {(journalPosition || journalPassage || journalChurch) && (
                <p style={{ fontSize: 11, color: MUTED, textAlign: "center" }}>Saved automatically to your device.</p>
              )}
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Presentations of both positions by their advocates.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {VIDEOS.map((v) => (
                <div key={v.id} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <div style={{ padding: "10px 14px" }}>
                    <p style={{ fontSize: 13, fontWeight: 600, margin: 0 }}>{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Related */}
      <div style={{ padding: "0 20px 32px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 16 }}>
          <p style={{ fontSize: 12, color: MUTED, marginBottom: 10 }}>Related Topics</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { label: "Biblical Womanhood", href: "/biblical-womanhood" },
              { label: "Biblical Manhood", href: "/biblical-manhood" },
              { label: "Christian Marriage", href: "/christian-marriage" },
              { label: "Women in Ministry", href: "/womens-ministry-guide" },
              { label: "Spiritual Gifts", href: "/spiritual-gifts" },
            ].map((r) => (
              <Link key={r.href} href={r.href} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "4px 12px", fontSize: 12, color: MUTED }}>
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
