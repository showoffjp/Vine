"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "models" | "offices" | "discipline" | "membership" | "videos";

const MODELS = [
  {
    model: "Episcopal / Bishop-Led",
    color: PURPLE,
    tradition: "Catholic, Orthodox, Anglican, Methodist, Lutheran (some)",
    description: "Authority resides in bishops who stand in apostolic succession — a continuous chain of ordained leadership from the original Apostles. Bishops oversee multiple congregations; priests serve individual parishes; deacons assist. The episcopal model emphasizes the unity of the universal church and the continuity of tradition. The Bishop of Rome (Pope) holds supreme authority in the Roman Catholic Church; Eastern Orthodox churches have patriarchs with coordinated (not unified) authority.",
    strengths: ["Protects against local church heresy through external oversight", "Strong sense of historical continuity and global unity", "Clear authority structure for resolving conflicts", "Effective for large-scale church planting and mission"],
    weaknesses: ["Risk of hierarchical corruption and abuse of power", "Individual congregations have less autonomy", "Bureaucratic distance from local ministry needs", "Historical track record of bishops overriding Scripture for political ends"],
    examples: "Roman Catholic Church; Eastern Orthodox churches; Anglican/Episcopal churches; United Methodist Church",
    key_text: "Acts 20:28; 1 Timothy 3:1-7; Titus 1:5-9; Ignatius of Antioch's letters (~110 AD)"
  },
  {
    model: "Presbyterian / Elder-Led",
    color: GREEN,
    tradition: "Presbyterian, Reformed, many non-denominational reformed churches",
    description: "Authority rests in a plurality of elders (presbyters) at multiple levels. The local church is governed by a session (board of elders). Sessions connect to a presbytery (regional body of elders); presbyteries connect to a General Assembly. This system balances local church authority with external accountability. No single person holds final authority — all decisions are made by representative bodies of elders.",
    strengths: ["Checks and balances prevent abuse by individual leaders", "Qualified plurality of elders at local level", "Mutual accountability between churches through presbytery", "Rich tradition of theological precision and doctrinal standards"],
    weaknesses: ["Can move slowly on decisions requiring responsiveness", "Presbytery politics can consume energy better spent on mission", "Risk of bureaucratic entrenchment", "Some churches struggle to identify multiple qualified elders in smaller congregations"],
    examples: "Presbyterian Church in America (PCA); Orthodox Presbyterian Church (OPC); Christian Reformed Church; Reformed Church in America",
    key_text: "Acts 15 (Jerusalem Council); 1 Timothy 5:17; Titus 1:5; 1 Peter 5:1-4"
  },
  {
    model: "Congregational / Church-Led",
    color: "#3B82F6",
    tradition: "Baptist, Congregationalist, most independent evangelical churches",
    description: "Final authority rests with the congregation as a whole. Each local church is autonomous — accountable to no external body. Members vote on major decisions: calling a pastor, adopting a budget, accepting and disciplining members. Pastors/elders lead and teach but are ultimately accountable to the congregation. The Anabaptist and Puritan traditions both contributed to congregationalism; it is the most common model in American evangelical churches.",
    strengths: ["Every member participates in church governance", "No external hierarchy to override local church decisions", "Church membership has genuine weight and meaning", "Local church community knows its situation best"],
    weaknesses: ["Vulnerable to congregational sin (voting out a faithful pastor who preaches hard truths)", "No external accountability when leadership abuses occur", "Democracy does not always produce the outcome that the Spirit requires", "Autonomy can become isolation from the broader church"],
    examples: "Southern Baptist churches; most independent evangelical churches; many non-denominational churches; Congregationalist tradition",
    key_text: "Matthew 18:15-20; Acts 6:1-7; 1 Corinthians 5:4-5"
  },
  {
    model: "Elder-Led with Congregational Accountability",
    color: "#EF4444",
    tradition: "Many contemporary evangelical and reformed churches; Acts 29 network",
    description: "A hybrid model: a plurality of elders leads the congregation in most decisions, but the congregation retains authority over certain matters — particularly membership and major decisions (significant financial commitments, calling a pastor, church discipline). This model attempts to preserve the biblical pattern of plural elder leadership while maintaining the congregation's responsibility to recognize and affirm God's work in their community.",
    strengths: ["Plurality of elders protects against individual pastoral abuse", "Congregational accountability at key decision points", "More agile than pure congregationalism for day-to-day leadership", "Most faithfully reflects the New Testament pattern for many scholars"],
    weaknesses: ["Potential for elder/congregation conflict over decision boundaries", "Requires clear constitutional definition of what requires congregational vote", "Risk of elders accumulating authority beyond their mandate over time"],
    examples: "Many contemporary evangelical churches; Acts 29 network churches; most Mark Dever/9Marks affiliated churches",
    key_text: "Acts 20:28; Hebrews 13:17; 1 Timothy 5:17-22; Acts 14:23"
  },
];

const OFFICES = [
  { office: "Elder / Bishop / Overseer", greek: "episkopos (overseer), presbyteros (elder)", color: GREEN, interchangeable: true, texts: "Acts 20:17, 28; Titus 1:5-7; 1 Peter 5:1-2; Philippians 1:1", qualifications: "Above reproach; husband of one wife; temperate; self-controlled; respectable; hospitable; able to teach; not given to drunkenness; not violent but gentle; not quarrelsome; not a lover of money; manages own family well; not a recent convert; has a good reputation with outsiders (1 Tim 3:1-7)", functions: "Teaching and preaching the Word; governing the church; overseeing doctrine; caring for the spiritual wellbeing of the congregation; guarding against false teaching; visiting the sick and suffering", note: "The New Testament uses elder and overseer/bishop interchangeably in the same passages (Acts 20:17/28; Titus 1:5/7; 1 Peter 5:1/2), suggesting they are the same office with different emphases. The professional distinction between 'teaching elder' (pastor) and 'ruling elder' (lay elder) developed later in Presbyterian polity." },
  { office: "Deacon", greek: "diakonos (servant)", color: PURPLE, interchangeable: false, texts: "Acts 6:1-7; 1 Timothy 3:8-13; Philippians 1:1", qualifications: "Worthy of respect; sincere; not indulging in much wine; not pursuing dishonest gain; holds the deep truths of the faith with a clear conscience; tested first; not hypocrites (1 Tim 3:8-10)", functions: "The office emerged from Acts 6 to handle the distribution of food to widows — releasing the Apostles for prayer and ministry of the Word. Deacons historically handle the mercy ministry of the church: physical needs, benevolence funds, care for widows and orphans, practical service. Not teachers or governors — servants who free the elders to fulfill their primary calling.", note: "Whether deaconesses (female deacons) are affirmed depends on the interpretation of Romans 16:1 (Phoebe) and 1 Timothy 3:11 (either wives of deacons or female deacons). This is one of the most contested questions in contemporary church polity." },
  { office: "Pastor / Teaching Elder", greek: "poimen (shepherd)", color: "#3B82F6", interchangeable: true, texts: "Ephesians 4:11; 1 Peter 5:1-4; Acts 20:28; 1 Timothy 5:17-18", qualifications: "Same as elder (see above) plus particular giftedness in teaching and preaching; recognized calling by the congregation and the broader church body", functions: "Primarily teaching and preaching (the ministry of the Word); leading worship; pastoral counseling; administering the sacraments (in many traditions); visionary leadership; equipping the saints for ministry (Eph 4:11-12)", note: "In many churches, 'pastor' simply refers to the elder who leads and preaches full-time (the 'teaching elder'). 1 Timothy 5:17-18 suggests that elders who work hard at preaching and teaching deserve 'double honor' — indicating the New Testament itself distinguishes between teaching and ruling elders in practice, if not in formal category." },
];

const DISCIPLINE_STEPS = [
  { step: "Matthew 18:15", label: "Private Confrontation", color: GREEN, desc: "If your brother or sister sins, go and point out their fault, just between the two of you. If they listen to you, you have won them over. The first step is always private — going directly to the person, not talking to others about the problem. This step alone resolves most conflicts. Skipping this step to go directly to leadership is usually gossip dressed up as concern." },
  { step: "Matthew 18:16", label: "Small Witness", color: PURPLE, desc: "But if they will not listen, take one or two others along, so that 'every matter may be established by the testimony of two or three witnesses.' The witnesses are not intended to gang up on the offender but to ensure accurate representation and provide mediation. The goal is still restoration — and the presence of witnesses creates accountability for both parties." },
  { step: "Matthew 18:17a", label: "Church Leadership", color: "#3B82F6", desc: "If they still refuse to listen, tell it to the church — meaning the leadership of the church. Elders investigate, confirm the sin, and determine whether repentance has occurred. This is not a public announcement but a formal pastoral process. The elders' role is to call the person to repentance with pastoral care and gospel clarity, not to execute judgment." },
  { step: "Matthew 18:17b", label: "Formal Exclusion", color: "#EF4444", desc: "If they refuse to listen even to the church, treat them as you would a pagan or a tax collector. This final step — formal exclusion from the covenant community — is the most misunderstood. It is not permanent exclusion but the removal of the privileges of covenant membership (Lord's Supper, formal belonging) for the purpose of awakening the person to the seriousness of their unrepentant sin. Paul's instruction in 1 Corinthians 5 follows this pattern." },
  { step: "2 Thessalonians 3:14-15; 2 Corinthians 2:6-8", label: "Restoration", color: "#F59E0B", desc: "Do not regard them as an enemy, but warn them as you would a fellow believer. When repentance comes — and the goal of all discipline is always repentance — the response is immediate, full restoration. 2 Corinthians 2 shows Paul urging the Corinthians to restore a disciplined member who has repented, 'so that he will not be overwhelmed by excessive sorrow. I urge you to reaffirm your love for him.'" },
];

const MEMBERSHIP = [
  { aspect: "What membership is", color: GREEN, content: "Church membership is the formal, mutual commitment between a believer and a particular local church — the church commits to disciple, care for, and exercise oversight of the member; the member commits to attend, serve, give, and submit to the church's pastoral authority. Hebrews 13:17 assumes a definable group over whom the leaders exercise authority; Matthew 18 assumes a formal community that can render judgment. Informal attendance without membership makes these exercises of authority meaningless." },
  { aspect: "What membership is not", color: PURPLE, content: "Membership is not a salvation declaration, a guarantee of holiness, or a contract with exchange value. It does not mean uncritical acceptance of leadership. It does not mean the church owns the member. Biblical membership is a covenant relationship — the same kind of mutual obligation and accountability that marriage creates, but at the community level. It is serious, not casual." },
  { aspect: "Why membership has been abandoned", color: "#EF4444", content: "The contemporary evangelical church has largely abandoned meaningful membership. Church shopping, consumer Christianity, and the expectation that church attendance is purely voluntary have eroded the concept. Churches with hundreds of 'members' who cannot be contacted, who attend other churches, and who have never been through any vetting process have meaningless membership rolls. Mark Dever and Jonathan Leeman of 9Marks have argued that recovering meaningful church membership is one of the most important ecclesiological reforms needed in the contemporary church." },
  { aspect: "The membership process", color: "#3B82F6", content: "Healthy churches typically: (1) require attendance at a membership class explaining the church's beliefs, practices, and expectations; (2) require a personal testimony of faith and baptism; (3) require agreement with the church's statement of faith; (4) formally receive members at a congregational meeting or service. Some churches require an elder interview; some require a period of formal observation. The process is the point — it creates the mutual understanding that makes membership meaningful." },
  { aspect: "Covenant membership and the Lord's Supper", color: "#F59E0B", content: "Historically, the Lord's Supper has been the primary marker of covenant membership — the visible sign of belonging to Christ and his body. 'Closed communion' (only members or those in good standing with a Reformed/evangelical church may partake) reflects this theology. Paul's warning in 1 Corinthians 11:27-29 about eating 'unworthily' suggests that the Supper's meaning depends on a defined community with defined standards. Open communion (all baptized believers welcome) reflects a different ecclesiology." },
];

const POLITY_VIDEOS = [
  { videoId: "Z8lkuuhVkOI", title: "Church Government: Why It Matters", channel: "The Gospel Coalition", description: "An overview of the major models of church polity — episcopalian, presbyterian, and congregational — and their biblical grounding." },
  { videoId: "ACZbpLkY8To", title: "Elder-Led Church Government", channel: "9Marks", description: "Mark Dever on why elder-led congregationalism is the biblical model for church governance." },
  { videoId: "KbFKcFxqVlo", title: "The Role of Deacons", channel: "Desiring God", description: "John Piper on the biblical office of deacon — what deacons do, how they serve, and how they support elders." },
  { videoId: "fJnGJN6laqE", title: "Building a Healthy Church Structure", channel: "Ligonier Ministries", description: "R.C. Sproul on the importance of proper church government for the health and faithfulness of the local church." },
];

export default function ChurchPolityGuidePage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_church-polity-guide_tab", "models");
  const [selected, setSelected] = useState(MODELS[0].model);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const sel = MODELS.find(m => m.model === selected) || MODELS[0];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 44, marginBottom: 10 }}>⛪</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Church Governance Guide</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, margin: "0 auto" }}>
            The four models of church polity, the biblical offices of elder and deacon, how church discipline works, and why membership matters — practical ecclesiology for real churches.
          </p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["models", "offices", "discipline", "membership", "videos"] as Tab[]).map(t => (
            <button type="button" key={t} onClick={() => setTab(t)}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t === "models" ? "Governance Models" : t === "offices" ? "Church Offices" : t === "discipline" ? "Church Discipline" : t === "membership" ? "Church Membership" : "Videos"}
            </button>
          ))}
        </div>

        {tab === "models" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {MODELS.map((m) => (
                <div role="button" tabIndex={0} key={m.model} onClick={() => setSelected(m.model)}
                  style={{ background: CARD, border: `1px solid ${selected === m.model ? m.color + "60" : BORDER}`, borderRadius: 12, padding: 18, cursor: "pointer" }}>
                  <div style={{ color: m.color, fontWeight: 800, fontSize: 14 }}>{m.model}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{m.tradition}</div>
                </div>
              ))}
            </div>
            <div style={{ position: "sticky", top: 20, background: CARD, border: `1px solid ${sel.color}40`, borderRadius: 14, padding: 20 }}>
              <div style={{ color: sel.color, fontWeight: 900, fontSize: 16, marginBottom: 4 }}>{sel.model}</div>
              <div style={{ color: MUTED, fontSize: 11, marginBottom: 12 }}>{sel.tradition}</div>
              <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.7, marginBottom: 14 }}>{sel.description}</p>
              <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 6 }}>STRENGTHS</div>
              {sel.strengths.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 6, marginBottom: 4 }}>
                  <div style={{ color: GREEN, fontSize: 11, flexShrink: 0 }}>+</div>
                  <span style={{ color: TEXT, fontSize: 12 }}>{s}</span>
                </div>
              ))}
              <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 6, marginTop: 10 }}>WEAKNESSES</div>
              {sel.weaknesses.map((w, i) => (
                <div key={i} style={{ display: "flex", gap: 6, marginBottom: 4 }}>
                  <div style={{ color: "#EF4444", fontSize: 11, flexShrink: 0 }}>−</div>
                  <span style={{ color: TEXT, fontSize: 12 }}>{w}</span>
                </div>
              ))}
              <div style={{ marginTop: 12, color: MUTED, fontSize: 11 }}>Key Texts: {sel.key_text}</div>
            </div>
          </div>
        )}

        {tab === "offices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {OFFICES.map((o, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${o.color}25`, borderRadius: 12, padding: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div>
                    <div style={{ color: o.color, fontWeight: 900, fontSize: 16, marginBottom: 3 }}>{o.office}</div>
                    <div style={{ color: MUTED, fontSize: 11 }}>Greek: {o.greek}</div>
                  </div>
                </div>
                <div style={{ color: MUTED, fontSize: 11, marginBottom: 10 }}>Key Texts: {o.texts}</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                  <div>
                    <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>QUALIFICATIONS</div>
                    <div style={{ color: TEXT, fontSize: 12, lineHeight: 1.6 }}>{o.qualifications}</div>
                  </div>
                  <div>
                    <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>FUNCTIONS</div>
                    <div style={{ color: TEXT, fontSize: 12, lineHeight: 1.6 }}>{o.functions}</div>
                  </div>
                </div>
                <div style={{ background: `${o.color}08`, border: `1px solid ${o.color}15`, borderRadius: 8, padding: "8px 12px" }}>
                  <span style={{ color: o.color, fontWeight: 700, fontSize: 11 }}>Note: </span>
                  <span style={{ color: TEXT, fontSize: 12 }}>{o.note}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "discipline" && (
          <div>
            <div style={{ background: `${PURPLE}15`, border: `1px solid ${PURPLE}30`, borderRadius: 10, padding: "14px 18px", marginBottom: 20 }}>
              <div style={{ color: PURPLE, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>The Purpose of Church Discipline</div>
              <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>Church discipline is not punitive — it is redemptive. Its goal is always the restoration of the wandering believer, the protection of the congregation from corruption, and the credibility of the gospel before a watching world. A church that exercises no discipline has no meaningful standard; a church that exercises discipline vindictively has no meaningful love. Both are failures.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {DISCIPLINE_STEPS.map((d, i) => (
                <div key={i} style={{ display: "flex", gap: 0 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 16 }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: d.color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 11, color: BG, flexShrink: 0 }}>{i + 1}</div>
                    {i < DISCIPLINE_STEPS.length - 1 && <div style={{ width: 2, flex: 1, background: BORDER, minHeight: 20, marginTop: 4, marginBottom: 4 }} />}
                  </div>
                  <div style={{ background: CARD, border: `1px solid ${d.color}25`, borderRadius: 12, padding: "16px 20px", marginBottom: 12, flex: 1 }}>
                    <div style={{ color: d.color, fontWeight: 800, fontSize: 14, marginBottom: 2 }}>{d.label}</div>
                    <div style={{ color: MUTED, fontSize: 11, marginBottom: 10 }}>{d.step}</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "membership" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {MEMBERSHIP.map((m, i) => (
              <div role="button" tabIndex={0} key={i} style={{ background: CARD, border: `1px solid ${expanded[m.aspect] ? m.color + "40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button type="button" onClick={() => setExpanded(e => ({ ...e, [m.aspect]: !e[m.aspect] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ color: m.color, fontWeight: 800, fontSize: 15 }}>{m.aspect}</div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{expanded[m.aspect] ? "−" : "+"}</span>
                </button>
                {expanded[m.aspect] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 0" }}>{m.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {POLITY_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                  src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
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
