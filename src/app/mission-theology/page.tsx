"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "missio-dei", label: "Missio Dei" },
  { id: "commission", label: "Great Commission" },
  { id: "evangelism-justice", label: "Evangelism & Justice" },
  { id: "contextualization", label: "Contextualization" },
  { id: "unreached", label: "Unreached Peoples" },
  { id: "local", label: "Local Mission" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const MISSION_TEXTS = [
  {
    ref: "Matthew 28:18-20",
    text: "All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them... teaching them to observe all that I have commanded you.",
    note: "The Great Commission: grounded in Christ's authority, commanded to all disciples, aimed at discipleship of all nations.",
  },
  {
    ref: "Acts 1:8",
    text: "But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth.",
    note: "The mission's scope: concentric circles from local to global. The Spirit empowers witness.",
  },
  {
    ref: "John 20:21",
    text: "As the Father has sent me, even so I am sending you.",
    note: "The Trinitarian shape of mission: the Father sent the Son; the Son sends us. Mission flows from the character of God.",
  },
  {
    ref: "Revelation 7:9",
    text: "After this I looked, and behold, a great multitude that no one could number, from every nation, from all tribes and peoples and languages, standing before the throne.",
    note: "The eschatological goal: every people group represented before the throne. Mission is heading toward this.",
  },
  {
    ref: "Isaiah 49:6",
    text: "I will make you as a light for the nations, that my salvation may reach to the end of the earth.",
    note: "The OT foundation: Israel's calling was always missional — to be light to the nations. Jesus fulfills and extends this.",
  },
];

const MISSIO_DEI_CONTENT = [
  {
    title: "God Is a Missionary God",
    desc: "Mission does not begin with the church's obedience — it begins with God's character. The missio Dei (Latin: 'mission of God') is the theological claim that the Trinitarian God is inherently a sending God: the Father sends the Son, the Father and Son send the Spirit, the Spirit sends the church.",
    color: GREEN,
  },
  {
    title: "Mission Flows from the Trinity",
    desc: "Karl Barth and David Bosch recovered this insight for modern missiology. The church does not have a mission — the mission has a church. Mission is not a program the church does; it is the nature of a God in whom we participate.",
    color: TEAL,
  },
  {
    title: "The Whole Bible Is Missionary",
    desc: "The Bible is not primarily a book about Israel and the church — it is the story of God's mission to reclaim a fallen world. From Abraham ('all nations will be blessed through you') to Revelation's multinational throne scene, the whole story is missional.",
    color: PURPLE,
  },
  {
    title: "Incarnational Mission",
    desc: "The Son's incarnation is the model for mission: entering the world, becoming vulnerable, engaging from within rather than from above. This is why mission involves presence, not just proclamation — dwelling among people, learning their languages and cultures.",
    color: GOLD,
  },
];

const COMMISSION_CONTENT = [
  {
    element: "Authority",
    desc: "The commission is grounded in Christ's all-authority (Matthew 28:18). This is not human confidence but derived authority — the King sends his ambassadors with royal authority. Mission is not presumption but obedience to the King.",
    color: BLUE,
  },
  {
    element: "Make Disciples",
    desc: "The main verb is 'make disciples' — not merely 'make converts' or 'get decisions.' Discipleship involves ongoing formation: learning, obedience, community, and growth into Christ's character over time.",
    color: GREEN,
  },
  {
    element: "All Nations",
    desc: "Panta ta ethne — all the peoples. Not just all political nations but all ethnolinguistic people groups. Jesus's commission is explicitly universal. No people is excluded from the scope of his Lordship.",
    color: TEAL,
  },
  {
    element: "Baptizing",
    desc: "Incorporation into the covenant community through baptism is part of the commission. Discipleship is not a solo spiritual journey — it happens in the body of Christ.",
    color: PURPLE,
  },
  {
    element: "Teaching Obedience",
    desc: "The commission includes teaching 'everything I have commanded' — not just evangelism but the full scope of Christian ethics and discipleship. Mission aims at whole-life transformation, not just conversion.",
    color: GOLD,
  },
  {
    element: "Promise",
    desc: "'I am with you always, to the end of the age' — the commission ends with a promise, not just a command. Mission is not accomplished by human effort alone but by the presence of the risen Christ.",
    color: TEAL,
  },
];

const EVANGELISM_JUSTICE = [
  {
    position: "Evangelism Is Primary",
    desc: "The primary calling in mission is verbal proclamation of the gospel — the announcement that Jesus died for sins and rose, and that repentance and faith bring salvation. Social action is a consequence of gospel transformation but not the core task.",
    figures: "D.A. Carson, John Piper, Billy Graham",
    color: GREEN,
  },
  {
    position: "Social Action Is Primary",
    desc: "The gospel is fundamentally about justice and liberation for the oppressed. The kingdom of God means transforming social structures. Liberation theology emphasizes God's preferential option for the poor and the church's obligation to political transformation.",
    figures: "Gustavo Gutierrez, Jurgen Moltmann, Walter Brueggemann",
    color: BLUE,
  },
  {
    position: "Evangelism and Social Action as Partners",
    desc: "The Lausanne Covenant (1974) articulated the classic evangelical balance: evangelism and social action are both part of the church's duty, though evangelism has a certain primacy because eternal souls are at stake. They are not competitors but partners.",
    figures: "John Stott, Christopher Wright, Tim Keller",
    color: GOLD,
  },
  {
    position: "Integral Mission",
    desc: "The Micah Network's integral mission framework insists that evangelism and social transformation are so intertwined that they cannot be separated. Proclamation has social implications; social action has proclamatory dimensions. Both are dimensions of one holistic mission.",
    figures: "Rene Padilla, Samuel Escobar",
    color: TEAL,
  },
];

const CONTEXTUALIZATION_POINTS = [
  {
    title: "What Is Contextualization?",
    desc: "Contextualization is the process of translating and communicating the gospel in ways that are meaningful within a specific cultural context — without distorting the gospel's essential content. It is neither syncretism (gospel absorbed by culture) nor irrelevance (gospel unintelligible to culture).",
    color: GREEN,
  },
  {
    title: "The Incarnation as Model",
    desc: "Jesus entered human culture fully — speaking Aramaic, observing Jewish customs, using cultural forms. He contextualized without compromising. This is the missionary model: full engagement with culture without surrender to it.",
    color: TEAL,
  },
  {
    title: "Paul's Flexibility",
    desc: "1 Corinthians 9:19-23: 'I have become all things to all people, that by all means I might save some.' Paul adapted his communication style, cultural sensitivities, and entry points — while keeping the content of the gospel constant.",
    color: PURPLE,
  },
  {
    title: "The Dangers",
    desc: "Two dangers: (1) Syncretism — the gospel is distorted by cultural assumptions; (2) Foreignness — the gospel is presented in culturally alien forms that prevent hearing. Neither the culture nor the gospel can be the non-negotiable — only the gospel can be.",
    color: GOLD,
  },
  {
    title: "Insider Movements",
    desc: "Recent debates about 'insider movements' — Muslim or Hindu followers of Jesus who remain within their cultural/religious community — illustrate contextualization's limits. The question: what is the irreducible core that must not be compromised?",
    color: BLUE,
  },
];

const UNREACHED_CONTENT = [
  {
    title: "What Is an Unreached People Group?",
    desc: "A people group in which fewer than 2% are evangelical Christians and there is no indigenous church capable of evangelizing the rest. There are approximately 7,000 unreached people groups with a combined population of over 3 billion people.",
    color: RED,
  },
  {
    title: "The 10/40 Window",
    desc: "The region between 10 and 40 degrees north latitude — stretching from West Africa through the Middle East, South Asia, and East Asia — contains the majority of the world's unreached peoples and the world's least-evangelized countries.",
    color: GOLD,
  },
  {
    title: "Frontier Mission",
    desc: "The frontier mission movement focuses specifically on unreached peoples — not reinvesting in already-reached populations but crossing cultural frontiers to plant the first churches among peoples who have no access to the gospel.",
    color: GREEN,
  },
  {
    title: "The Church-Planting Goal",
    desc: "The vision is not just evangelism but the planting of self-sustaining, self-reproducing, self-governing indigenous churches within each people group — so that they can evangelize their own community without ongoing outside dependence.",
    color: TEAL,
  },
];

const VIDEOS = [
  { videoId: "gXwfUaeDYX0", title: "The Missio Dei — God's Mission in the World" },
  { videoId: "CY4QGkjGl0U", title: "The Great Commission Explained" },
  { videoId: "r1_7Y-A1dvI", title: "Lausanne and the Holistic Gospel" },
  { videoId: "TtcWlBl7L7k", title: "Reaching Unreached Peoples" },
];

export default function MissionTheologyPage() {
  const [tab, setTab] = useLocalStorage("vine_mission_tab", "overview");
  const [openEJ, setOpenEJ] = useLocalStorage("vine_mission_ej", "");
  const [openCont, setOpenCont] = useLocalStorage("vine_mission_cont", "");
  const [journal, setJournal] = useLocalStorage("vine_mission_journal", "");

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🌍</div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>Theology of Mission</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>
            The church does not have a mission — a missionary God has a church. A comprehensive theology of the missio Dei, the Great Commission, evangelism and justice, contextualization, and reaching all peoples.
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
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GREEN }}>The Missionary Heart of God</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Mission is not a department of the church&apos;s activity — it is the church&apos;s existence. The church is defined by its participation in the mission of the Trinitarian God. &ldquo;As the Father has sent me, even so I am sending you&rdquo; (John 20:21). Every believer is sent.</p>
            </div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Key Scriptures</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {MISSION_TEXTS.map(t => (
                <div key={t.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem" }}>
                  <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.25rem" }}>{t.ref}</div>
                  <p style={{ fontStyle: "italic", color: TEXT, margin: "0 0 0.25rem" }}>&ldquo;{t.text}&rdquo;</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>{t.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MISSIO DEI */}
        {tab === "missio-dei" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>The Missio Dei</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {MISSIO_DEI_CONTENT.map(m => (
                <div key={m.title} style={{ background: CARD, border: `1px solid ${m.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${m.color}` }}>
                  <div style={{ fontWeight: 700, color: m.color, marginBottom: "0.4rem" }}>{m.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* COMMISSION */}
        {tab === "commission" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: BLUE }}>The Great Commission: An Analysis</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Matthew 28:18-20 is the definitive missionary text. Every element is theologically loaded. Understanding what Jesus commissioned — and what he did not — shapes how we think about mission&apos;s scope, method, and goal.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {COMMISSION_CONTENT.map(c => (
                <div key={c.element} style={{ background: CARD, border: `1px solid ${c.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${c.color}` }}>
                  <div style={{ fontWeight: 700, color: c.color, marginBottom: "0.4rem" }}>{c.element}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EVANGELISM & JUSTICE */}
        {tab === "evangelism-justice" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GOLD }}>Evangelism and Social Action</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>One of the most important debates in missiology: what is the relationship between preaching the gospel (evangelism) and working for justice (social action)? This question has divided the church, created false dichotomies, and generated major ecumenical discussions.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {EVANGELISM_JUSTICE.map((ej, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenEJ(openEJ === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 700, color: ej.color, textAlign: "left" }}>{ej.position}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openEJ === String(i) ? "−" : "+"}</span>
                  </button>
                  {openEJ === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem" }}>
                      <p style={{ color: TEXT, lineHeight: 1.7, marginBottom: "0.5rem" }}>{ej.desc}</p>
                      <p style={{ color: MUTED, fontStyle: "italic", fontSize: "0.85rem", margin: 0 }}>Key figures: {ej.figures}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTEXTUALIZATION */}
        {tab === "contextualization" && (
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {CONTEXTUALIZATION_POINTS.map((c, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenCont(openCont === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 700, color: c.color, textAlign: "left" }}>{c.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openCont === String(i) ? "−" : "+"}</span>
                  </button>
                  {openCont === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem", color: MUTED, lineHeight: 1.7 }}>{c.desc}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* UNREACHED */}
        {tab === "unreached" && (
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {UNREACHED_CONTENT.map(u => (
                <div key={u.title} style={{ background: CARD, border: `1px solid ${u.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${u.color}` }}>
                  <div style={{ fontWeight: 700, color: u.color, marginBottom: "0.4rem" }}>{u.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LOCAL */}
        {tab === "local" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: TEAL }}>Local Mission</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Mission begins in Jerusalem (Acts 1:8). Every Christian is a local missionary in their neighborhood, workplace, and community. The global perspective does not replace the local — both are essential dimensions of one mission.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "You Are Already Sent", desc: "Jesus's commission begins with you where you are: your family, neighborhood, city. You do not need to cross an ocean to be a missionary — you are already sent to the people around you.", color: GREEN },
                { title: "Presence Precedes Proclamation", desc: "Evangelism happens in the context of relationships. Being known, trusted, and present in people's lives creates the soil for the gospel to take root. Speed is overrated; faithfulness over time is underrated.", color: TEAL },
                { title: "The Church as Embassy", desc: "The local church is the embassy of the Kingdom — a colony of the new creation, visible in the world. The quality of community life is itself a missional statement: 'By this all people will know that you are my disciples, if you have love for one another' (John 13:35).", color: PURPLE },
                { title: "Hospitality as Mission", desc: "The practice of table fellowship — opening your home, sharing meals, welcoming strangers — is a powerful form of local mission. It was central to early Christianity and remains one of the most accessible ways to embody the gospel.", color: GOLD },
                { title: "Word and Deed Together", desc: "Good works without verbal witness leaves people with needs met but without the gospel. Verbal witness without practical care can ring hollow. Local mission integrates both: demonstrating and declaring the Kingdom.", color: BLUE },
              ].map(l => (
                <div key={l.title} style={{ background: CARD, border: `1px solid ${l.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${l.color}` }}>
                  <div style={{ fontWeight: 700, color: l.color, marginBottom: "0.4rem" }}>{l.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{l.desc}</p>
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
              <p style={{ color: MUTED, marginBottom: "1rem", fontSize: "0.9rem" }}>Where are you sent? Who are the unreached in your life?</p>
              <textarea value={journal} onChange={e => setJournal(e.target.value)}
                placeholder="Reflect on your participation in God's mission. Who are your 'Jerusalem' neighbors — the people immediately around you who don't yet know Jesus? What would it mean to take the Great Commission personally?"
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
      <Footer />
    </>
  );
}
