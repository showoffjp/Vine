"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { AlertTriangle, Globe, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";

const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const RED = "#EF4444";
const AMBER = "#F59E0B";
const BLUE = "#3B82F6";
const MUTED = "#9898B3";
const TEXT = "#F2F2F8";

const TABS = ["overview", "definition", "critique", "theology", "alternatives", "voices", "journal", "videos"] as const;
type Tab = (typeof TABS)[number];

const DEFINITIONS = [
  {
    label: "Christian Nationalism (hard form)",
    color: RED,
    desc: "The view that the United States (or any nation) is or should be a specifically Christian nation — with Christian values embedded in law, Christian identity bound to national identity, and government structured to promote Christian dominance. In its strongest form, it advocates for legal privileges for Christianity and suppression of competing religious or secular influence.",
  },
  {
    label: "Christian Nationalism (soft / cultural form)",
    color: AMBER,
    desc: "The view that a nation's identity and laws should reflect its Christian heritage and majority-Christian values, without necessarily advocating state establishment of religion. Often expressed as nostalgia for a 'Christian America' and resistance to secularization.",
  },
  {
    label: "Christian Patriotism",
    color: GREEN,
    desc: "Love for one's country, gratitude for its founding ideals, civic engagement, and prayer for national leaders — held by Christians without fusing national and church identity. Distinguishable from nationalism by its lack of exceptionalism claims or calls for Christian legal dominance.",
  },
  {
    label: "Two Kingdoms Theology",
    color: BLUE,
    desc: "The classical Reformed view that God governs the world through two distinct kingdoms — the church (spiritual kingdom) and the state (civil kingdom). Christians participate in both but do not conflate them. Resists both theocracy and secularism.",
  },
];

const CRITIQUE_POINTS = [
  {
    id: "identity",
    title: "It Fuses Two Separate Identities",
    body: "Christian nationalism conflates two things the NT clearly separates: citizenship in God's kingdom (Phil 3:20 — 'our citizenship is in heaven') and earthly political citizenship. The church is explicitly 'from every nation, tribe, people, and language' (Rev 7:9) — its identity is inherently transnational.",
    verse: "Philippians 3:20; Revelation 7:9",
  },
  {
    id: "history",
    title: "The 'Christian Nation' Historical Claim Is Weak",
    body: "The Founders were a mixed group — deists, Unitarians, Anglicans, and some orthodox Christians. The Constitution deliberately omits God. The First Amendment was designed to protect religious minorities from established state religion, not to establish one. The historical revisionism required by Christian nationalism is documented in detail by historians from both secular and Christian perspectives.",
    verse: "1st Amendment; US Constitution (no divine mention)",
  },
  {
    id: "power",
    title: "Jesus Rejected Political Messianism",
    body: "The crowd wanted Jesus to be a political Messiah who would overthrow Rome (John 6:15). He fled. His kingdom was 'not of this world' (John 18:36). The apostles' witness spread not through seizing political power but through suffering, service, and proclamation. The NT pattern is subversion through faithful witness, not dominance through political control.",
    verse: "John 6:15; John 18:36; Matthew 20:25–28",
  },
  {
    id: "exclusion",
    title: "It Creates a Hierarchy That Excludes",
    body: "When national and Christian identity are fused, non-Christian citizens become implicitly second-class. This contradicts the NT's vision where the church embraces 'neither Jew nor Greek' (Gal 3:28) and the Roman church included slaves, freedmen, and emperors' households. The early church's power came precisely from its radical inclusion.",
    verse: "Galatians 3:28; Romans 16; Acts 10",
  },
  {
    id: "credibility",
    title: "It Damages the Gospel's Credibility",
    body: "When Christianity is associated with political power, ethnic identity, or national exceptionalism, the gospel's universal invitation is obscured. The church's greatest evangelistic failures have often been moments of maximum political power (Christendom). The gospel spreads most powerfully when the church is a minority community witnessing by transformed lives.",
    verse: "1 Peter 2:12; Matthew 5:16",
  },
  {
    id: "idolatry",
    title: "The Underlying Danger: National Idolatry",
    body: "Christian nationalism can subtly make the nation an idol — a sacred object of devotion that rivals God. The prophets repeatedly confronted Israel for fusing national identity with covenant identity while treating non-Israelites as enemies of God. Amos, Isaiah, and Jeremiah all warned against the assumption that national belonging equals divine favor.",
    verse: "Amos 9:7; Jeremiah 7:1–15; Isaiah 1:10–17",
  },
];

const POLITICAL_THEOLOGY = [
  {
    tradition: "Two Kingdoms (Reformed)",
    color: BLUE,
    desc: "God rules both the civil and spiritual kingdoms but through different means. The state promotes justice and order; the church proclaims the gospel. Christians engage politics as citizens without expecting the state to do the church's work or vice versa.",
    figures: "Calvin, Luther, David VanDrunen, Michael Horton",
  },
  {
    tradition: "Sphere Sovereignty (Kuyper)",
    color: GREEN,
    desc: "Abraham Kuyper's vision: God's sovereignty extends over every sphere — family, church, state, arts, science. Each sphere has its own God-given authority. Christians should engage every sphere with a Christian worldview without seeking state establishment of religion.",
    figures: "Abraham Kuyper, Al Wolters, James K.A. Smith",
  },
  {
    tradition: "Public Theology / Common Good",
    color: PURPLE,
    desc: "Christians bring their values into public life and argue for policies they believe serve human flourishing — not because they claim America is Christian, but because they believe Christian ethics serve everyone. They argue on common-ground terms, not divine mandate.",
    figures: "Miroslav Volf, Tim Keller, Martin Luther King Jr.",
  },
  {
    tradition: "Anabaptist / Witness Model",
    color: AMBER,
    desc: "The church's political calling is to be a counter-cultural community that witnesses against state power rather than wielding it. Political transformation comes through the church being the church — not through legislation.",
    figures: "John Howard Yoder, Stanley Hauerwas, Brian Zahnd",
  },
];

const VOICES = [
  { name: "Andrew Whitehead & Samuel Perry", stance: "Critical Sociologists", color: RED, work: "Taking America Back for God (2020)", note: "Sociological study of Christian nationalism as a cultural ideology. Documents its relationship to racial hierarchy, gender traditionalism, and authoritarianism based on survey data." },
  { name: "Paul Miller", stance: "Critical (Evangelical)", color: RED, work: "The Religion of American Greatness (2022)", note: "National Security Council staffer and evangelical Christian. Argues Christian nationalism is a religion that competes with Christianity. One of the most careful Christian critiques from inside the evangelical world." },
  { name: "Stephen Wolfe", stance: "Advocate", color: AMBER, work: "The Case for Christian Nationalism (2022)", note: "Reformed academic arguing for a form of Christian nationalism as a legitimate political theology rooted in the natural law tradition. Sparked major debate among Reformed scholars." },
  { name: "Doug Wilson", stance: "Advocate (Federal Vision)", color: AMBER, work: "Blog & Mablog; Mere Christendom (2023)", note: "Moscow, Idaho pastor and theonomist-adjacent thinker arguing for a 'mere Christendom' and Christian cultural dominance. Influential in the Reformed/Calvinist nationalist space." },
  { name: "Tim Keller", stance: "Critical", color: GREEN, work: "Rediscovering Jonah; Center Church", note: "Late pastor who argued Christian nationalism is antithetical to the gospel. His Jonah book addresses the danger of nationalizing divine favor. Advocated political engagement without partisan capture." },
  { name: "Russell Moore", stance: "Critical (SBC)", color: GREEN, work: "Losing Our Religion (2023)", note: "Former SBC Ethics president who warns that Christian nationalism is producing a church that has traded the gospel for political power, driving millions from faith." },
];

const VIDEOS = [
  { id: "8JL8H4gNMFE", title: "What Is Christian Nationalism? — Russell Moore" },
  { id: "c7Vl-5_QHPU", title: "Christian Nationalism and the Bible — Tim Keller" },
  { id: "0P3DHeFyiT8", title: "The Case FOR Christian Nationalism — Stephen Wolfe" },
  { id: "RqnFMXq7RYI", title: "Two Kingdoms vs. Transformationist Politics" },
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

export default function ChristianNationalismPage() {
  const [tab, setTab] = useLocalStorage("vine_chnatn_tab", "overview");
  const [expandedCrit, setExpandedCrit] = useLocalStorage("vine_chnatn_crit", "");
  const [journalView, setJournalView] = useLocalStorage("vine_chnatn_view", "");
  const [journalConcern, setJournalConcern] = useLocalStorage("vine_chnatn_concern", "");
  const [journalVision, setJournalVision] = useLocalStorage("vine_chnatn_vision", "");

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: "#07070F", color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      {/* Header */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
        <Link href="/dashboard" style={{ color: MUTED, display: "flex", alignItems: "center" }}>
          <ArrowLeft size={18} />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: PURPLE + "22", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Globe size={18} color={PURPLE} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 17 }}>Christian Nationalism</div>
            <div style={{ color: MUTED, fontSize: 12 }}>A biblical and theological assessment</div>
          </div>
        </div>
      </div>

      {/* Warning Banner */}
      <div style={{ background: AMBER + "11", borderBottom: `1px solid ${AMBER}33`, padding: "10px 20px", display: "flex", gap: 8, alignItems: "flex-start" }}>
        <AlertTriangle size={15} color={AMBER} style={{ marginTop: 2, flexShrink: 0 }} />
        <p style={{ fontSize: 12, color: "#FDE68A", margin: 0 }}>
          This page presents Christian nationalism as a theological issue — examining it from Scripture and church history, not partisan politics. Both critical and supportive voices are included. Our goal is biblical fidelity, not political alignment.
        </p>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "0 20px", display: "flex", gap: 2, overflowX: "auto" }}>
        {TABS.map((t) => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "12px 12px", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${PURPLE}` : "2px solid transparent", color: tab === t ? TEXT : MUTED, fontWeight: tab === t ? 600 : 400, fontSize: 12, cursor: "pointer", whiteSpace: "nowrap", textTransform: "capitalize" }}>
            {t === "alternatives" ? "Alternatives" : t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <div style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>

        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Why This Matters</h2>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              Christian nationalism has become one of the most contested terms in American Christianity. For some, it describes a legitimate vision of a nation governed by Christian principles. For others, it names a dangerous fusion of faith and political power that has historically damaged both the church and those it excludes.
            </p>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              Understanding this issue is not primarily about partisan politics. It is about the nature of the church, the nature of the kingdom of God, and whether Jesus's way of engaging power matches the model being proposed.
            </p>
            <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>Key Questions to Explore</div>
              {[
                "What is Christian nationalism, and what is it not?",
                "Is the US a 'Christian nation' — biblically or historically?",
                "What does Scripture say about the relationship between church and state?",
                "What alternative political theologies exist within orthodox Christianity?",
                "How does Christian nationalism affect evangelism and discipleship?",
              ].map((q, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
                  <span style={{ color: PURPLE, fontWeight: 700, flexShrink: 0 }}>→</span>
                  <span style={{ fontSize: 13, color: MUTED }}>{q}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "definition" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>What Is (and Isn't) Christian Nationalism</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>The term covers a wide spectrum. Distinguishing these positions matters.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {DEFINITIONS.map((d, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${d.color}33`, padding: 16 }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
                    <span style={{ background: d.color + "22", color: d.color, borderRadius: 6, padding: "2px 10px", fontSize: 11, fontWeight: 700 }}>
                      {i === 0 ? "HARD FORM" : i === 1 ? "SOFT FORM" : i === 2 ? "DISTINCT: PATRIOTISM" : "DISTINCT: TWO KINGDOMS"}
                    </span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{d.label}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "critique" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Biblical Concerns</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>These concerns apply primarily to the hard and soft forms of Christian nationalism — not to Christian patriotism or civic engagement.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {CRITIQUE_POINTS.map((pt) => {
                const isOpen = expandedCrit === pt.id;
                return (
                  <div key={pt.id} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}` }}>
                    <button onClick={() => setExpandedCrit(isOpen ? "" : pt.id)} style={{ width: "100%", background: "none", border: "none", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}>
                      <span style={{ fontWeight: 600, fontSize: 14, textAlign: "left" }}>{pt.title}</span>
                      {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 16px 14px" }}>
                        <p style={{ fontSize: 13, color: "#C4C4DC", marginBottom: 10 }}>{pt.body}</p>
                        <div style={{ background: GREEN + "11", borderLeft: `3px solid ${GREEN}`, padding: "6px 10px", borderRadius: "0 6px 6px 0" }}>
                          <span style={{ color: GREEN, fontSize: 11, fontWeight: 600 }}>{pt.verse}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Key Biblical Texts on Church & State</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { ref: "Romans 13:1–7", text: "The governing authorities are God's servants for good. Pay taxes, obey laws.", note: "Written to Christians under the Roman Empire — the state is legitimate, not inherently Christian. Paul wrote this after Nero became emperor." },
                { ref: "1 Peter 2:13–17", text: "Submit for the Lord's sake to every human authority. Live as free people, but do not use freedom as cover for evil.", note: "The church is 'sojourners and exiles' (v.11) in the world — resident aliens whose primary citizenship is elsewhere." },
                { ref: "John 18:36", text: "My kingdom is not of this world. If it were, my servants would fight.", note: "Jesus explicitly declines to use political power to establish his kingdom. This is programmatic for NT political theology." },
                { ref: "Matthew 22:21", text: "Render to Caesar what is Caesar's and to God what is God's.", note: "Jesus separates the two realms without collapsing one into the other or condemning civic engagement." },
                { ref: "Revelation 13", text: "The beast rises from the sea — the Roman Empire as a demonic system demanding worship.", note: "The NT also presents state power in its dark form — as idolatrous, violent, and demanding allegiance that belongs to God alone." },
                { ref: "Jeremiah 29:7", text: "Seek the welfare of the city where I have sent you into exile… for in its welfare you will find your welfare.", note: "The exilic model: engage civic life for the common good without becoming it or being captured by it." },
              ].map((v, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 14 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>{v.ref}</div>
                  <p style={{ fontSize: 13, fontStyle: "italic", color: TEXT, margin: "0 0 8px" }}>&ldquo;{v.text}&rdquo;</p>
                  <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{v.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "alternatives" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Alternative Political Theologies</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>
              Orthodox Christian political theology does not leave Christians with no model. These traditions offer principled frameworks for Christian public engagement without nationalism.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {POLITICAL_THEOLOGY.map((pt, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${pt.color}33`, padding: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: pt.color, marginBottom: 8 }}>{pt.tradition}</div>
                  <p style={{ fontSize: 13, color: "#C4C4DC", marginBottom: 8 }}>{pt.desc}</p>
                  <div style={{ background: pt.color + "11", borderRadius: 6, padding: "6px 10px" }}>
                    <span style={{ color: pt.color, fontSize: 11, fontWeight: 600 }}>KEY FIGURES: </span>
                    <span style={{ fontSize: 11, color: MUTED }}>{pt.figures}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Key Voices</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Critics and advocates — read both.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {VOICES.map((v, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${v.color}33`, padding: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                    <span style={{ background: v.color + "22", color: v.color, borderRadius: 20, padding: "2px 8px", fontSize: 10, fontWeight: 700 }}>{v.stance.toUpperCase()}</span>
                  </div>
                  <div style={{ color: v.color, fontSize: 11, fontWeight: 600, marginBottom: 6 }}>{v.work}</div>
                  <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{v.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Personal Reflection</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Saved to your device only.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>How have you seen Christian nationalism expressed in your church or community? How do you respond to it?</label>
                <textarea value={journalView} onChange={(e) => setJournalView(e.target.value)} placeholder="I've seen… I find myself agreeing/disagreeing because…" rows={4} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>What concerns you most about how political power and Christianity are currently being mixed?</label>
                <textarea value={journalConcern} onChange={(e) => setJournalConcern(e.target.value)} placeholder="I'm concerned about… I worry that the church…" rows={3} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>What does faithful Christian civic engagement look like to you?</label>
                <textarea value={journalVision} onChange={(e) => setJournalVision(e.target.value)} placeholder="I think Christians should engage politics by… The church's role in society is…" rows={3} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              {(journalView || journalConcern || journalVision) && (
                <p style={{ fontSize: 11, color: MUTED, textAlign: "center" }}>Saved automatically to your device.</p>
              )}
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Perspectives from multiple sides of the debate.</p>
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
              { label: "Political Theology", href: "/political-theology" },
              { label: "Justice", href: "/justice" },
              { label: "Systematic Theology", href: "/systematic-theology-101" },
              { label: "Toxic Theology", href: "/toxic-theology" },
              { label: "Race & Reconciliation", href: "/race-reconciliation" },
            ].map((r) => (
              <Link key={r.href} href={r.href} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "4px 12px", fontSize: 12, color: MUTED }}>
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
