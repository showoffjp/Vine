"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "seminaries" | "degrees" | "alternatives" | "discernment";

const SEMINARIES = [
  {
    name: "Westminster Theological Seminary",
    location: "Glenside, PA",
    tradition: "Reformed / Presbyterian",
    url: "wts.edu",
    color: PURPLE,
    founded: "1929",
    size: "~400 students",
    strengths: ["Biblical theology (Vos tradition)", "Presuppositionalism / apologetics", "Old Testament / New Testament scholarship", "Westminster Standards formation"],
    programs: "MDiv, ThM, PhD, DMin, MAR",
    notable_faculty: "Meredith Kline (late), Richard Gaffin, Lane Tipton, William Edgar",
    best_for: "Students who want rigorous Reformed theology; those pursuing academic careers in biblical studies; Presbyterian ministry preparation",
    accreditation: "ATS and Middle States"
  },
  {
    name: "Covenant Theological Seminary",
    location: "St. Louis, MO",
    tradition: "Presbyterian Church in America (PCA)",
    url: "covenantseminary.edu",
    color: GREEN,
    founded: "1956",
    size: "~350 students",
    strengths: ["Christ-centered preaching (Bryan Chapell's influence)", "Gospel-centered counseling", "Reformed practical theology", "Affordable — subsidized by the PCA"],
    programs: "MDiv, MRE, MAR, DMin, online options",
    notable_faculty: "Bryan Chapell (former president), Jerram Barrs, Michael Williams",
    best_for: "PCA ordination; gospel-centered counseling; students wanting affordable Reformed education",
    accreditation: "ATS and Higher Learning Commission"
  },
  {
    name: "The Southern Baptist Theological Seminary",
    location: "Louisville, KY",
    tradition: "Southern Baptist Convention",
    url: "sbts.edu",
    color: "#EF4444",
    founded: "1859",
    size: "~3,500 students",
    strengths: ["Largest evangelical seminary in the world", "Conservative biblical scholarship", "Boyce College undergrad", "Low tuition for Southern Baptists"],
    programs: "MDiv, ThM, PhD, EdD, DMin — wide range",
    notable_faculty: "Al Mohler (president), Tom Schreiner, Brian Vickers, Mark Coppenger",
    best_for: "Southern Baptist ordination; students wanting institutional weight and conservative evangelical formation; broad program range",
    accreditation: "ATS and SACSCOC"
  },
  {
    name: "Reformed Theological Seminary",
    location: "Multiple campuses: Orlando, Charlotte, DC, Jackson, Atlanta, NYC, Houston",
    tradition: "Reformed / Non-denominational",
    url: "rts.edu",
    color: "#3B82F6",
    founded: "1966",
    size: "~800 students across campuses",
    strengths: ["Multiple campuses and robust online program", "Broad Reformed tradition (not just Presbyterian)", "Strong practical ministry formation", "Global student body"],
    programs: "MDiv, MAR, ThM, DMin — fully online options",
    notable_faculty: "Michael Kruger (Charlotte campus president), Guy Waters, Douglas Kelly",
    best_for: "Students who need geographic flexibility; broadly Reformed students (PCA, EPC, Reformed Baptist, Anglican); strong online program",
    accreditation: "ATS and SACSCOC"
  },
  {
    name: "Trinity Evangelical Divinity School",
    location: "Deerfield, IL",
    tradition: "Evangelical Free Church / Broadly Evangelical",
    url: "teds.edu",
    color: "#F59E0B",
    founded: "1897",
    size: "~700 students",
    strengths: ["Breadth of evangelical tradition", "Strong faculty across theology, Bible, and ministry", "Evangelical Theological Society connection", "Journal: Trinity Journal"],
    programs: "MDiv, MA, ThM, PhD, DMin — full range",
    notable_faculty: "D.A. Carson (former), John Feinberg, Kevin Vanhoozer, Thomas McCall",
    best_for: "Students wanting breadth across evangelical traditions; academic careers in theology; non-denominational ministry preparation",
    accreditation: "ATS and Higher Learning Commission"
  },
  {
    name: "Gordon-Conwell Theological Seminary",
    location: "South Hamilton, MA; Charlotte, NC; Jacksonville, FL; Boston, MA",
    tradition: "Broadly Evangelical / Non-denominational",
    url: "gordonconwell.edu",
    color: "#10B981",
    founded: "1969 (merger of Gordon Divinity and Conwell)",
    size: "~1,500 students",
    strengths: ["Haddon Robinson's preaching legacy", "Strong New England academic culture", "Center for the Study of Global Christianity", "Multiple campuses and online"],
    programs: "MDiv, MA, ThM, DMin — multiple specializations",
    notable_faculty: "Scott Sunquist (president), Haddon Robinson (former), Gary Pratico",
    best_for: "Students wanting broad evangelical formation; preaching emphasis; global missions focus; non-denominational ministry",
    accreditation: "ATS and New England Commission of Higher Education"
  },
  {
    name: "Dallas Theological Seminary",
    location: "Dallas, TX",
    tradition: "Dispensational / Non-denominational",
    url: "dts.edu",
    color: "#EC4899",
    founded: "1924",
    size: "~2,000 students",
    strengths: ["Dispensational premillennialism — the definitive center for this tradition", "Strong Hebrew and Greek language requirements", "ThM program (4-year) — one of the most rigorous in America", "Howard Hendricks — Christian education legacy"],
    programs: "ThM, MDiv, MA, DMin, PhD — DTS's signature degree is the ThM",
    notable_faculty: "Mark Bailey (president), Daniel Wallace (Greek), Darrell Bock, Michael Svigel",
    best_for: "Students interested in dispensational theology; rigorous biblical language training; non-denominational evangelical ministry",
    accreditation: "ATS and SACSCOC"
  },
  {
    name: "Regent College",
    location: "Vancouver, BC, Canada",
    tradition: "Broadly Evangelical / Ecumenical",
    url: "regent-college.edu",
    color: "#6366F1",
    founded: "1968",
    size: "~350 students",
    strengths: ["Theology of work and vocation (distinctive emphasis)", "Layperson-focused graduate theological education", "James Houston — spiritual formation tradition", "Luci Shaw — writing and the arts"],
    programs: "MCS (Master of Christian Studies), MDiv, DipCS, ThM",
    notable_faculty: "James Houston (founder), John Stackhouse, Loren Wilkinson, Craig Gay",
    best_for: "Laypeople wanting graduate theological education without ordination track; theology and culture integration; arts and vocation focus",
    accreditation: "ATS and Government of British Columbia"
  },
];

const DEGREES = [
  { degree: "Master of Divinity (MDiv)", length: "3 years (90 credit hours)", color: PURPLE, purpose: "Ordination preparation — the standard credential for pastoral ministry in most denominations", covers: "Biblical languages (Greek and Hebrew), systematic theology, church history, biblical studies, preaching, pastoral counseling, Christian education, ministry practicum", who: "Those pursuing ordination as pastor/elder in a local church; most denominations require MDiv for senior pastor roles", note: "The most demanding and comprehensive seminary degree — equivalent to a professional doctorate in professional scope" },
  { degree: "Master of Arts (MA)", length: "1.5-2 years (48-60 credit hours)", color: GREEN, purpose: "Focused theological education without the full breadth of MDiv — for specialized ministry, teaching, or further academic study", covers: "Varies by specialization: MA in Biblical Studies, MA in Counseling, MA in Christian Education, MA in Theological Studies, MA in Ministry", who: "Those in specialized ministry roles (hospital chaplaincy, campus ministry, Christian education); those pursuing PhD without MDiv; laypeople wanting graduate theological education", note: "More accessible and less expensive than MDiv; typically does not include biblical languages requirement" },
  { degree: "Master of Theology (ThM)", length: "1 year beyond MDiv (30-32 credit hours)", color: "#3B82F6", purpose: "Advanced academic theology — deeper specialization in one area of theology or biblical studies after MDiv", covers: "Deep specialization in one field: New Testament, Old Testament, systematic theology, church history, etc. Thesis required.", who: "Those planning PhD; those with MDiv wanting deeper academic formation; academic pastors wanting advanced theological education", note: "DTS's ThM is uniquely their base degree (4 years); most schools' ThM is a post-MDiv add-on" },
  { degree: "Doctor of Ministry (DMin)", length: "3 years part-time beyond MDiv", color: "#EF4444", purpose: "Advanced professional ministry education — applying academic theology to ministry practice through research", covers: "Ministry context research, strategic leadership, preaching, discipleship, missional church, counseling — varies by focus", who: "Experienced pastors (typically 5+ years) wanting to deepen ministry practice; those required to hold DMin for denominational roles", note: "Part-time, cohort-based — designed for working ministers; research-based final project rather than traditional dissertation" },
  { degree: "Doctor of Philosophy (PhD)", length: "4-7 years beyond MDiv/ThM", color: "#F59E0B", purpose: "Academic preparation for teaching, research, and writing in theology, biblical studies, or church history", covers: "Advanced research in one specialized field; comprehensive exams; dissertation making an original contribution to the field", who: "Those called to academic ministry (seminary professor, Christian university faculty); those wanting to produce serious academic theological scholarship", note: "Highly competitive admission; most who teach at the graduate level hold this degree; funding (stipend + tuition) is available at many schools" },
];

const ALTERNATIVES = [
  { name: "The Gospel Coalition Resources", url: "thegospelcoalition.org", type: "Free Online", desc: "Thousands of articles, sermons, and courses on theology, ministry, and Christian living. The TGC Courses section has structured content from leading teachers. Substantial free theological education for those who cannot afford or access seminary.", color: GREEN },
  { name: "Desiring God Theological Education", url: "desiringgod.org", type: "Free Online", desc: "John Piper's ministry contains 30+ years of expository sermons, books (many free), articles, and Ask Pastor John podcasts covering systematic theology, Christian living, and biblical exposition in depth. A free seminary education in all but the credential.", color: PURPLE },
  { name: "Logos University", url: "logos.com", type: "Structured Online Courses", desc: "Seminary-quality courses in biblical languages, biblical studies, and theology — accredited through partnership with several seminaries. Integrated with the Logos Bible software ecosystem. Pay-per-course model makes it accessible.", color: "#3B82F6" },
  { name: "BiblicalTraining.org", url: "biblicaltraining.org", type: "Free Online Seminary", desc: "Free seminary-level audio and video courses from teachers at Gordon-Conwell, Reformed Theological Seminary, and other institutions. One of the best completely free alternatives to seminary education for those who cannot access formal programs.", color: "#EF4444" },
  { name: "Ligonier Connect", url: "ligonier.org/learn", type: "Structured Online Courses", desc: "R.C. Sproul's Ligonier Ministries has produced hundreds of video teaching series covering systematic theology, Bible studies, church history, and Christian living. The online academy offers structured courses with assessments.", color: "#F59E0B" },
  { name: "The Master's Seminary Freebooks", url: "tms.edu", type: "Free Resources", desc: "John MacArthur's seminary provides free audio from many courses and free books. MacArthur's multiple-decade sermon archive at gty.org covers most books of the Bible — effectively a free expository preaching education.", color: "#10B981" },
  { name: "Local Church Mentorship", url: undefined, type: "Informal / Free", desc: "The Reformers recovered the idea that theological education primarily happens in local churches under the mentorship of pastors. Many denominations (particularly PCA, Anglican, and ACNA) have formal pathways to ordination through local church internship and mentorship alongside examination — not requiring residential seminary.", color: "#EC4899" },
];

const DISCERNMENT = [
  { question: "Do I have a clear sense of calling — confirmed by others?", color: GREEN, reflection: "1 Timothy 3 and Titus 1 describe the qualifications for elder/overseer. Before applying to seminary, the question is not 'do I want this?' but 'does my community affirm this calling?' The local church — not the individual — is the primary discerner of ministry calling. If your elders and community do not affirm your gifts and character for ministry, seminary tuition money may be premature." },
  { question: "Which tradition do I want to serve in, and what credential does it require?", color: PURPLE, reflection: "Different denominations have different ordination pathways. The PCA requires an MDiv from a PCA-approved seminary plus several examinations. Southern Baptist churches typically require MDiv from an SBC seminary or accredited equivalent. Non-denominational churches may have no formal requirement. Know your context before selecting a seminary — the right credential matters as much as the education." },
  { question: "What am I willing to sacrifice for theological education?", color: "#3B82F6", reflection: "The average seminary graduate carries $40,000+ in debt, has relocated their family, and has spent 3 years not earning income. Online and extension programs reduce this burden but reduce the formation that comes from residential community. There is no neutral option. Count the cost before signing the promissory note — seminary debt has derailed many ministry trajectories." },
  { question: "What tradition produces the theology I believe?", color: "#EF4444", reflection: "Seminary is not the time to find your theological identity — it is the time to deepen one you already have. If you hold Reformed soteriology, attend a Reformed seminary. If you hold dispensational hermeneutics, DTS exists for you. Going to seminary in opposition to your theological convictions rarely ends well. Know what you believe before you enter the institution that will shape how you minister." },
  { question: "Am I spiritually and maritally ready for ministry preparation?", color: "#F59E0B", reflection: "Gordon-Conwell and other seminaries have noted that the marriage divorce rate during seminary years is alarming — the intensity of formation and academic pressure, combined with financial stress and relocation, strains marriages that were already fragile. Seminarians who arrive with unresolved spiritual wounds, patterns of sin, or relational dysfunction often have those amplified, not resolved. Deal with the soul before pursuing the credential." },
  { question: "Is the local church my primary community, or am I fleeing to an institution?", color: "#10B981", reflection: "Seminary forms through community — and that community is not only the seminary; it is the local church. Seminary graduates who are not embedded in local church life during their training frequently emerge with theological knowledge but ministerial immaturity. The best seminary students are also faithful church members — serving, teaching, and being known by their congregation while studying." },
];

export default function SeminaryGuidePage() {
  const [tab, setTab] = useState<Tab>("seminaries");
  const [selected, setSelected] = useState(SEMINARIES[0].name);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const sel = SEMINARIES.find(s => s.name === selected) || SEMINARIES[0];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 44, marginBottom: 10 }}>🎓</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Seminary & Theological Education Guide</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, margin: "0 auto" }}>
            Leading seminaries, degree options, free alternatives, and honest discernment questions for those considering formal theological education.
          </p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["seminaries", "degrees", "alternatives", "discernment"] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t === "seminaries" ? "Top Seminaries" : t === "degrees" ? "Degree Guide" : t === "alternatives" ? "Free Alternatives" : "Discernment"}
            </button>
          ))}
        </div>

        {tab === "seminaries" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {SEMINARIES.map((s) => (
                <div key={s.name} onClick={() => setSelected(s.name)}
                  style={{ background: CARD, border: `1px solid ${selected === s.name ? s.color + "60" : BORDER}`, borderRadius: 12, padding: 18, cursor: "pointer" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ color: s.color, fontWeight: 800, fontSize: 14 }}>{s.name}</div>
                      <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{s.location} · {s.tradition}</div>
                    </div>
                    <div style={{ color: MUTED, fontSize: 10 }}>{s.size}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ position: "sticky", top: 20, background: CARD, border: `1px solid ${sel.color}40`, borderRadius: 14, padding: 20 }}>
              <div style={{ color: sel.color, fontWeight: 900, fontSize: 15, marginBottom: 2 }}>{sel.name}</div>
              <div style={{ color: MUTED, fontSize: 11, marginBottom: 12 }}>{sel.tradition} · Founded {sel.founded} · {sel.url}</div>
              <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 6 }}>KEY STRENGTHS</div>
              <div style={{ marginBottom: 14 }}>
                {sel.strengths.map((str, i) => (
                  <div key={i} style={{ display: "flex", gap: 6, marginBottom: 4 }}>
                    <div style={{ color: sel.color, fontSize: 12, flexShrink: 0 }}>•</div>
                    <span style={{ color: TEXT, fontSize: 12 }}>{str}</span>
                  </div>
                ))}
              </div>
              <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>PROGRAMS</div>
              <div style={{ color: TEXT, fontSize: 12, marginBottom: 10 }}>{sel.programs}</div>
              <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>NOTABLE FACULTY</div>
              <div style={{ color: TEXT, fontSize: 12, marginBottom: 12 }}>{sel.notable_faculty}</div>
              <div style={{ background: `${sel.color}10`, border: `1px solid ${sel.color}20`, borderRadius: 8, padding: "10px 12px" }}>
                <div style={{ color: sel.color, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>BEST FOR</div>
                <div style={{ color: TEXT, fontSize: 12 }}>{sel.best_for}</div>
              </div>
            </div>
          </div>
        )}

        {tab === "degrees" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {DEGREES.map((d, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${d.color}25`, borderRadius: 12, padding: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div>
                    <div style={{ color: d.color, fontWeight: 900, fontSize: 16 }}>{d.degree}</div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{d.length}</div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 10 }}>
                  <div>
                    <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>PURPOSE</div>
                    <div style={{ color: TEXT, fontSize: 12 }}>{d.purpose}</div>
                  </div>
                  <div>
                    <div style={{ color: MUTED, fontSize: 10, fontWeight: 800, marginBottom: 4 }}>WHO IT IS FOR</div>
                    <div style={{ color: TEXT, fontSize: 12 }}>{d.who}</div>
                  </div>
                </div>
                <div style={{ background: `${d.color}08`, border: `1px solid ${d.color}15`, borderRadius: 8, padding: "8px 12px" }}>
                  <span style={{ color: d.color, fontWeight: 700, fontSize: 11 }}>Note: </span>
                  <span style={{ color: TEXT, fontSize: 12 }}>{d.note}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "alternatives" && (
          <div>
            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 10, padding: "14px 18px", marginBottom: 20 }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>You Do Not Need Seminary to Be Theologically Formed</div>
              <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>The Apostles had no seminaries. The Reformation was led by men who had university educations but no MDiv. Many of the most theologically serious Christians in history were educated through reading, mentorship, and the local church. Seminary is the right path for many — but it is not the only path to theological formation, and it is often not the wisest path for everyone.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {ALTERNATIVES.map((a, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${a.color}25`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <div>
                      <div style={{ color: a.color, fontWeight: 800, fontSize: 14 }}>{a.name}</div>
                      {a.url && <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{a.url}</div>}
                    </div>
                    <div style={{ background: `${a.color}20`, color: a.color, padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700 }}>{a.type}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "discernment" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {DISCERNMENT.map((d, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${expanded[d.question] ? "#F59E0B40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button onClick={() => setExpanded(e => ({ ...e, [d.question]: !e[d.question] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 14, paddingRight: 16 }}>{d.question}</div>
                  <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{expanded[d.question] ? "−" : "+"}</span>
                </button>
                {expanded[d.question] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 0" }}>{d.reflection}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
