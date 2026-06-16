"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function FirstTimothy3GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "oHX3r1GXQE4", title: "1 Timothy 3 -- Qualifications for Overseers and Deacons" },
    { videoId: "QxJ6r5Vovzo", title: "The Mystery of Godliness Hymn -- 1 Timothy 3:16" },
    { videoId: "VsPwxHcNe9A", title: "Church Leadership and Character -- 1 Timothy 3" },
    { videoId: "z0Nwm4kn3Hs", title: "The Household of God -- 1 Timothy 3:14-15" },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "key-themes", label: "Key Themes" },
    { id: "verse-by-verse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(160deg, #0f0f22 0%, #07070F 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "56px 20px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${PURPLE}18`, border: `1px solid ${PURPLE}40`, borderRadius: 8, padding: "4px 14px", fontSize: 12, fontWeight: 700, color: PURPLE, letterSpacing: "0.08em", marginBottom: 20 }}>
            1 TIMOTHY 3
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 18, color: TEXT }}>
            The Household of God &mdash; Overseers, Deacons, and the Mystery of Godliness
          </h1>
          <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.75, maxWidth: 660, margin: "0 auto 28px" }}
            dangerouslySetInnerHTML={{ __html: "First Timothy 3 gives the church its most detailed early portrait of leadership qualifications &mdash; not a job description but a character description. The chapter concludes with one of the earliest Christian hymns: the &ldquo;mystery of godliness&rdquo; creedal fragment that summarizes the entire gospel in six lines about Jesus Christ." }}
          />
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <div style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}35`, borderRadius: 8, padding: "6px 16px", fontSize: 13, color: GREEN, fontWeight: 600 }}>1 Timothy 3:1-16</div>
            <div style={{ background: `${PURPLE}15`, border: `1px solid ${PURPLE}35`, borderRadius: 8, padding: "6px 16px", fontSize: 13, color: PURPLE, fontWeight: 600 }}>Leadership &amp; Godliness</div>
            <div style={{ background: `${TEAL}15`, border: `1px solid ${TEAL}35`, borderRadius: 8, padding: "6px 16px", fontSize: 13, color: TEAL, fontWeight: 600 }}>Circa AD 62-65</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", padding: "0 20px" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "16px 20px",
                background: "transparent",
                border: "none",
                borderBottom: activeTab === tab.id ? `2px solid ${PURPLE}` : "2px solid transparent",
                color: activeTab === tab.id ? PURPLE : MUTED,
                fontWeight: activeTab === tab.id ? 700 : 400,
                fontSize: 14,
                cursor: "pointer",
                transition: "color 0.15s",
                letterSpacing: "0.01em",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            {/* Context card */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 32, marginBottom: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 16, marginTop: 0 }}>
                Historical and Literary Context
              </h2>
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, marginBottom: 16, marginTop: 0 }}
                dangerouslySetInnerHTML={{ __html: "First Timothy is one of the Pastoral Epistles &mdash; a group of letters (1 Timothy, 2 Timothy, Titus) addressed to Paul&rsquo;s co-workers in ministry rather than to congregations. Paul is writing to Timothy, who has been left in Ephesus to &ldquo;command certain people not to teach any different doctrine&rdquo; (1 Timothy 1:3). False teaching &mdash; likely a form of Jewish speculation about the law mixed with proto-Gnostic elevation of special knowledge &mdash; is threatening the community." }}
              />
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, marginBottom: 16, marginTop: 0 }}
                dangerouslySetInnerHTML={{ __html: "Chapter 3 addresses what was probably an urgent practical need: as the church grew and faced internal doctrinal pressures, the question of who was qualified to lead became critical. False teachers were presumably inside the community. The qualifications Paul gives are not credential lists but character portraits &mdash; the kind of person whose life demonstrates that the gospel has actually taken hold." }}
              />
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, marginTop: 0, marginBottom: 0 }}
                dangerouslySetInnerHTML={{ __html: "The chapter&rsquo;s conclusion (vv.14&ndash;16) reveals the theological ground of everything that precedes it. Paul is writing to explain how one &ldquo;ought to behave in the household of God, which is the church of the living God, the pillar and buttress of the truth.&rdquo; Leadership qualifications matter because the church has a cosmic vocation: to hold and display the truth about Jesus Christ. The mystery of godliness hymn (v.16) is the content of that truth." }}
              />
            </div>

            {/* The Two Offices */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 24 }}>
                <div style={{ color: PURPLE, fontWeight: 800, fontSize: 12, letterSpacing: "0.1em", marginBottom: 14 }}>OVERSEERS (EPISKOPOS)</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 17, marginTop: 0, marginBottom: 12 }}>vv. 1-7</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, marginTop: 0, marginBottom: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Fifteen qualifications, most of them character qualities rather than skills: above reproach, husband of one wife, sober-minded, self-controlled, respectable, hospitable, able to teach, not a drunkard, not violent, gentle, not quarrelsome, not a lover of money, managing his household well, not a recent convert, well thought of by outsiders." }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 24 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 12, letterSpacing: "0.1em", marginBottom: 14 }}>DEACONS (DIAKONOS)</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 17, marginTop: 0, marginBottom: 12 }}>vv. 8-13</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, marginTop: 0, marginBottom: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Deacons likewise: dignified, not double-tongued, not addicted to wine, not greedy for dishonest gain, holding the mystery of the faith with a clear conscience. They are tested first. Women likewise: dignified, not slanderers, sober-minded, faithful in all things." }}
                />
              </div>
            </div>

            {/* The mystery of godliness hymn */}
            <div style={{ background: `${TEAL}0A`, border: `1px solid ${TEAL}35`, borderRadius: 16, padding: 32, marginBottom: 28, textAlign: "center" }}>
              <div style={{ color: TEAL, fontWeight: 800, fontSize: 12, letterSpacing: "0.12em", marginBottom: 14 }}>1 TIMOTHY 3:16 -- THE MYSTERY OF GODLINESS</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, maxWidth: 520, margin: "0 auto 16px", textAlign: "left" }}>
                {[
                  { line: "He was manifested in the flesh,", note: "Incarnation" },
                  { line: "vindicated by the Spirit,", note: "Resurrection" },
                  { line: "seen by angels,", note: "Cosmic recognition" },
                  { line: "proclaimed among the nations,", note: "Mission" },
                  { line: "believed on in the world,", note: "Faith" },
                  { line: "taken up in glory.", note: "Ascension" },
                ].map((l, i) => (
                  <div key={i} style={{ background: `${TEAL}12`, border: `1px solid ${TEAL}25`, borderRadius: 8, padding: "10px 14px" }}>
                    <div style={{ color: TEXT, fontSize: 13, fontStyle: "italic", lineHeight: 1.5, marginBottom: 4 }}>{l.line}</div>
                    <div style={{ color: TEAL, fontSize: 11, fontWeight: 700, letterSpacing: "0.06em" }}>{l.note}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>The earliest creedal summary of the gospel &mdash; Christ&rsquo;s full story in six movements</p>
            </div>

            {/* Structure overview */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 28 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 20, marginTop: 0, marginBottom: 20 }}>Chapter Structure</h2>
              {[
                { ref: "vv. 1-7", label: "Qualifications for Overseers", color: PURPLE, desc: "The saying is trustworthy: aspiring to the office of overseer is a noble task. Paul then lists fifteen character qualifications -- above reproach, hospitable, able to teach, not a lover of money, managing his own household well." },
                { ref: "v. 8-10", label: "Qualifications for Deacons", color: GREEN, desc: "Deacons likewise must be dignified, not double-tongued, not addicted to wine, not greedy for dishonest gain. They hold the mystery of the faith with a clear conscience and must be tested first." },
                { ref: "v. 11", label: "Women -- Deaconesses or Wives", color: GOLD, desc: "Women likewise must be dignified, not slanderers, but sober-minded and faithful in all things. This disputed verse may refer to female deacons (deaconesses) or to deacons' wives." },
                { ref: "vv. 12-13", label: "Deacon Household and Reward", color: GREEN, desc: "Deacons must be husbands of one wife, managing their children and households well. Those who serve well gain a good standing and great confidence in the faith that is in Christ Jesus." },
                { ref: "vv. 14-15", label: "The Household of God", color: TEAL, desc: "Paul explains the purpose of his instructions: so that Timothy will know how one ought to behave in the household of God -- the church of the living God, the pillar and buttress of the truth." },
                { ref: "v. 16", label: "The Mystery of Godliness Hymn", color: TEAL, desc: "Great indeed is the mystery of godliness: He was manifested in flesh, vindicated by the Spirit, seen by angels, proclaimed among the nations, believed on in the world, taken up in glory." },
              ].map((s) => (
                <div key={s.ref} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 18 }}>
                  <div style={{ background: `${s.color}15`, border: `1px solid ${s.color}35`, borderRadius: 8, padding: "4px 12px", fontSize: 12, fontWeight: 700, color: s.color, whiteSpace: "nowrap", marginTop: 2 }}>{s.ref}</div>
                  <div>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{s.label}</div>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "key-themes" && (
          <div>
            <div style={{ marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 24, marginTop: 0, marginBottom: 8 }}>Key Themes in 1 Timothy 3</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginTop: 0, marginBottom: 0 }}
                dangerouslySetInnerHTML={{ __html: "The chapter holds together three theological centers: the character of those who lead, the identity of the community they lead, and the content of the message they proclaim." }}
              />
            </div>

            {[
              {
                color: PURPLE,
                title: "Character Over Credentials",
                ref: "1 Timothy 3:1-7",
                summary: "The overseer qualifications are almost entirely character qualities, not professional competencies. Paul is describing a kind of person, not a kind of resume.",
                body1: "Of the fifteen qualifications listed for overseers, only one is a skill: &ldquo;able to teach&rdquo; (didaktikon, v.2). The rest are descriptions of character &mdash; sober-minded, self-controlled, respectable, hospitable, not a drunkard, not violent, gentle, not quarrelsome, not a lover of money. The word translated &ldquo;above reproach&rdquo; (anepilemptos, v.2) is a comprehensive term: a life that gives no one a handle to grab hold of in accusation.",
                body2: "This is a profound statement about what the church values in leadership. The world selects leaders based on competence, charisma, and credentials. Paul selects them based on character. The logic is that a person whose inner life has been shaped by the gospel &mdash; who is genuinely sober-minded, gentle, hospitable, and not controlled by money &mdash; will lead in a gospel-shaped way. Character is not a qualifying hurdle to clear on the way to ministry; it is the substance of ministry.",
              },
              {
                color: GREEN,
                title: "The Overseer&rsquo;s Household as a Model",
                ref: "1 Timothy 3:4-5",
                summary: "Managing his own household well is not a bureaucratic requirement but a theological argument: the church is a household, and how you lead your family reveals how you will lead God&rsquo;s family.",
                body1: "Verses 4&ndash;5 make the argument explicit: &ldquo;He must manage his own household well, with all dignity keeping his children submissive, for if someone does not know how to manage his own household, how will he care for God&rsquo;s church?&rdquo; The logic is typological: the home is a microcosm of the church. The relational and spiritual skills required to lead a household faithfully &mdash; patience, authority without domination, love that disciplines, consistent presence &mdash; are exactly the skills required to lead the church.",
                body2: "This does not mean that only married people with children can serve, or that single people are disqualified. Paul&rsquo;s argument is that leadership must be assessed from the ground up &mdash; from the closest and most pressured relationships outward. Leadership in the church is not a performance for an audience but a service rendered in the closest quarters.",
              },
              {
                color: GOLD,
                title: "Women in 1 Timothy 3:11",
                ref: "1 Timothy 3:11",
                summary: "The brief verse about 'women likewise' is among the most debated in the New Testament -- whether it refers to female deacons or to the wives of deacons.",
                body1: "Verse 11 reads: &ldquo;Women likewise must be dignified, not slanderers, but sober-minded, faithful in all things.&rdquo; The Greek word is gynaikas, which can mean &ldquo;women&rdquo; or &ldquo;wives.&rdquo; The key question is: is Paul describing a third category (female deacons), or is he inserting qualifications for the wives of the deacons already under discussion?",
                body2: "Arguments for &ldquo;deaconesses&rdquo; include: the parallel structure (overseers, deacons, women &mdash; each introduced by &ldquo;likewise&rdquo;); the fact that Paul&rsquo;s co-worker Phoebe is called a diakonos in Romans 16:1; and the impracticality of specifying wives of deacons but not wives of overseers. Arguments for &ldquo;wives&rdquo; include: the absence of the article (&ldquo;deaconesses&rdquo;) and the resumption of &ldquo;deacons&rdquo; in verse 12. Both readings have strong defenders among scholars, and both affirm women as full participants in the ministry of the church.",
              },
              {
                color: TEAL,
                title: "The Church as the Household of God",
                ref: "1 Timothy 3:15",
                summary: "Verse 15 gives the most concentrated ecclesiology in the Pastoral Epistles: the church is God's household, the community of the living God, and the pillar and buttress of the truth.",
                body1: "The three descriptions of the church in verse 15 accumulate: (1) &ldquo;the household of God&rdquo; (oikos theou) &mdash; the church is a family, with the relationships, obligations, and intimacies that family implies; (2) &ldquo;the church of the living God&rdquo; &mdash; not a human institution but the assembly of the God who is alive and active, in contrast to the dead idols of the surrounding culture; (3) &ldquo;the pillar and buttress of the truth&rdquo; &mdash; the church has a structural role in holding up the truth about God and Christ in the world.",
                body2: "The &ldquo;pillar and buttress&rdquo; language is architecturally specific. A pillar holds something up; a buttress stabilizes it against lateral pressure. The church does not generate the truth &mdash; the truth is given in the gospel. But the church is the institution entrusted with holding and displaying it. This is why character matters in leadership: leaders of a household of truth must themselves embody truthful lives.",
              },
              {
                color: ROSE,
                title: "The Deacon&rsquo;s Qualification: Holding the Mystery with a Clear Conscience",
                ref: "1 Timothy 3:9",
                summary: "Of all the qualifications for deacons, verse 9 is the most theologically distinctive: they must hold the mystery of the faith with a clear conscience.",
                body1: "The &ldquo;mystery of the faith&rdquo; in Paul usually refers to the gospel &mdash; the content of Christian proclamation that was hidden in previous ages and has now been disclosed in Christ Jesus (cf. Romans 16:25&ndash;26, Colossians 1:26&ndash;27). Deacons are not just administrators; they are custodians of the gospel. Their service in the practical needs of the community is rooted in their grasp of and fidelity to the substance of the Christian message.",
                body2: "The phrase &ldquo;with a clear conscience&rdquo; is crucial. It is not enough to know the content of the mystery; the deacon must hold it with a conscience that is not secretly contradicted by their life. A person who teaches one thing and lives another has a divided or defiled conscience. The deacon who holds the mystery of the faith with a clear conscience is one whose interior life and external life are integrated &mdash; who means what they confess.",
              },
              {
                color: TEAL,
                title: "The Mystery of Godliness Hymn",
                ref: "1 Timothy 3:16",
                summary: "Great indeed is the mystery of godliness -- the six-line hymnic summary of Christ's story is one of the earliest creedal statements in Christian history.",
                body1: "Verse 16 introduces itself with the phrase &ldquo;great indeed is the mystery of godliness,&rdquo; which signals that what follows is a known formula &mdash; something already confessed in the community. The six lines fall into three pairs: (1) manifested in the flesh / vindicated by the Spirit &mdash; the earthly life of Jesus under the Spirit&rsquo;s witness; (2) seen by angels / proclaimed among the nations &mdash; the cosmic and historical dimensions of his significance; (3) believed on in the world / taken up in glory &mdash; the response of faith and the final exaltation.",
                body2: "The hymn is a summary of the entire gospel in concentrated form &mdash; from incarnation to ascension, from the cosmic realm of angels to the historical realm of nations, from individual faith to final glory. As a creedal fragment, it served the early church the way a great hymn serves a congregation: as a memory device, a confessional anchor, and a devotional prompt. The &ldquo;mystery of godliness&rdquo; is not a difficult puzzle to solve but the astounding event of God becoming human and being exalted &mdash; the content that the church as &ldquo;pillar and buttress of the truth&rdquo; is entrusted to proclaim.",
              },
            ].map((theme) => (
              <div key={theme.ref} style={{ background: CARD, border: `1px solid ${theme.color}25`, borderRadius: 16, padding: 28, marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
                  <h3 style={{ color: theme.color, fontWeight: 800, fontSize: 19, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: theme.title }}
                  />
                  <div style={{ background: `${theme.color}15`, border: `1px solid ${theme.color}35`, borderRadius: 8, padding: "3px 12px", fontSize: 12, fontWeight: 700, color: theme.color }}>{theme.ref}</div>
                </div>
                <p style={{ color: TEXT, fontWeight: 600, fontSize: 15, lineHeight: 1.7, marginBottom: 14, marginTop: 0, fontStyle: "italic" }}
                  dangerouslySetInnerHTML={{ __html: theme.summary }}
                />
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, marginBottom: 12, marginTop: 0 }}
                  dangerouslySetInnerHTML={{ __html: theme.body1 }}
                />
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, marginBottom: 0, marginTop: 0 }}
                  dangerouslySetInnerHTML={{ __html: theme.body2 }}
                />
              </div>
            ))}
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse-by-verse" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 24, marginTop: 0, marginBottom: 8 }}>Verse by Verse Commentary</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginTop: 0, marginBottom: 0 }}
                dangerouslySetInnerHTML={{ __html: "A close reading of 1 Timothy 3, moving through each section with attention to the Greek, the historical context, and the theological significance of the qualifications Paul lists." }}
              />
            </div>

            {[
              {
                ref: "1 Timothy 3:1",
                heading: "The Saying Is Trustworthy -- A Noble Task",
                color: PURPLE,
                body: [
                  "Paul introduces the overseer qualifications with one of his &ldquo;faithful saying&rdquo; formulas (pistos ho logos), which he uses five times in the Pastoral Epistles to flag an especially important affirmation. The saying is: &ldquo;If anyone aspires to the office of overseer, he desires a noble task.&rdquo;",
                  "This opening is easy to read past, but it is doing important work. In the ancient Mediterranean world, leadership in religious and civic life was often pursued for status, honor, and power. Paul does not condemn the aspiration to lead &mdash; he calls it &ldquo;a noble task&rdquo; (kalon ergon, literally a beautiful or good work). But the word &ldquo;task&rdquo; (ergon, work) rather than &ldquo;position&rdquo; or &ldquo;honor&rdquo; reframes the aspiration: this is an aspiration to serve, not to rule.",
                  "The Greek word episkopos (overseer or bishop) was used in the secular world for administrative supervisors &mdash; those who oversaw projects or populations. Paul is taking a civic term and filling it with gospel content: the overseer in the church is the one who watches over the flock with the character and care of a shepherd.",
                ],
              },
              {
                ref: "1 Timothy 3:2-7",
                heading: "The Overseer Must Be Above Reproach",
                color: PURPLE,
                body: [
                  "The word &ldquo;above reproach&rdquo; (anepilemptos) is the umbrella qualification under which all the others fall. It describes someone who gives critics no toehold &mdash; whose life, not in the sense of sinless perfection but in the sense of publicly observable integrity, does not provide grounds for valid accusation. The qualifications that follow are expansions of what this looks like.",
                  "The &ldquo;husband of one wife&rdquo; (mias gynaikos andra, literally &ldquo;a one-woman man&rdquo;) is one of the most debated phrases in the chapter. The three main interpretations are: (1) prohibition of polygamy; (2) prohibition of remarriage after divorce; (3) a positive description of marital faithfulness &mdash; a man wholly devoted to his wife. Most contemporary scholarship leans toward the third reading: the phrase is about the quality of faithfulness to a spouse, not a marital-status credential. The parallel for deaconesses or deacons&rsquo; wives in verse 11 (&ldquo;faithful in all things&rdquo;) suggests the same emphasis on integral devotion.",
                  "The qualifications move through three spheres: inner character (sober-minded, self-controlled), social relations (respectable, hospitable, not quarrelsome, not a lover of money), and specific negatives (not a drunkard, not violent, gentle). The last two qualifications in verses 6&ndash;7 are uniquely forward-looking: not a recent convert (to avoid the sin of pride that destroyed the devil), and well thought of by outsiders (so that the church&rsquo;s reputation in the community is not damaged by its leader). Leadership has a public dimension that reaches beyond the congregation.",
                ],
              },
              {
                ref: "1 Timothy 3:8-10",
                heading: "Deacons Likewise Must Be Dignified",
                color: GREEN,
                body: [
                  "The word &ldquo;likewise&rdquo; (hosautos) ties the deacon qualifications to the overseer qualifications &mdash; they are parallel movements in the same argument. The word &ldquo;dignified&rdquo; (semnos) describes gravity or seriousness of character &mdash; someone who is taken seriously, not frivolous or trivial. In a role that involves practical service (distributing food, caring for widows, handling finances), dignity of character prevents the ministry from being compromised by small-mindedness.",
                  "The prohibition of being &ldquo;double-tongued&rdquo; (dilogos &mdash; literally &ldquo;two-worded&rdquo;) is specific to the deacon&rsquo;s practical role. A deacon who serves multiple households must not say different things to different people &mdash; telling one household one thing and another household something else. Integrity of speech is a requirement that flows directly from the nature of the service.",
                  "The most theologically distinctive qualification is verse 9: &ldquo;They must hold the mystery of the faith with a clear conscience.&rdquo; The &ldquo;mystery of the faith&rdquo; is the gospel content &mdash; the revelation of Jesus Christ that was hidden and has now been disclosed. Deacons are not merely hired helpers; they are stewards of the gospel. Their service in practical needs is rooted in a clear grasp of and fidelity to the gospel message, held with a conscience that their life does not secretly contradict.",
                ],
              },
              {
                ref: "1 Timothy 3:11",
                heading: "Women Likewise Must Be Dignified",
                color: GOLD,
                body: [
                  "Verse 11 is brief but contested: &ldquo;Women likewise must be dignified, not slanderers, but sober-minded, faithful in all things.&rdquo; The key question is whether Paul is describing female deacons (a third category in the list) or the wives of the deacons already under discussion.",
                  "The structure of the passage suggests the former: overseers are introduced in verse 1 with a trustworthy saying, deacons in verse 8 with &ldquo;likewise,&rdquo; and women in verse 11 with &ldquo;likewise.&rdquo; The pattern of parallel introductions implies a third category. Romans 16:1 calls Phoebe a diakonos, the same word used for deacons here &mdash; providing a Pauline precedent for female deacons. The fact that qualifications are given for overseers&rsquo; wives would be expected if Paul were addressing wives of deacons here, but no such qualifications appear for overseers in verses 1&ndash;7.",
                  "Whether &ldquo;women&rdquo; or &ldquo;wives,&rdquo; the qualifications &mdash; dignified, not slanderers, sober-minded, faithful in all things &mdash; are themselves a positive description of a woman whose character is shaped by the gospel. &ldquo;Not slanderers&rdquo; (me diabolous &mdash; literally &ldquo;not devils,&rdquo; since diabolos means the slanderer or accuser) is the female counterpart of &ldquo;not double-tongued&rdquo; in verse 8. The speech of those who serve must be trustworthy.",
                ],
              },
              {
                ref: "1 Timothy 3:12-13",
                heading: "Deacons -- Household Management and the Reward of Service",
                color: GREEN,
                body: [
                  "Verse 12 returns to the deacons and applies the household-management criterion from the overseers: &ldquo;Let deacons each be the husband of one wife, managing their children and their own households well.&rdquo; The household qualification is not a bureaucratic requirement but a theological argument: how a person leads the closest and most demanding relationships reveals how they will lead in the church.",
                  "Verse 13 offers one of the few explicit promises in the chapter: &ldquo;For those who serve well as deacons gain a good standing for themselves and also great confidence in the faith that is in Christ Jesus.&rdquo; The word translated &ldquo;confidence&rdquo; (parresia) is a remarkable word in the New Testament &mdash; it describes the boldness of speech before God and human beings that comes from an integrated life. The deacon who serves faithfully develops a spiritual confidence that is itself a reward of faithful service.",
                  "This is an important theological observation about the nature of ministry: faithful service in practical care for the community is not a second-class calling but a spiritually formative one. Those who serve tables do not merely serve the community &mdash; they are themselves deepened by the service. The diaconal vocation forms the minister even as the minister serves the congregation.",
                ],
              },
              {
                ref: "1 Timothy 3:14-16",
                heading: "The Household of God and the Mystery of Godliness",
                color: TEAL,
                body: [
                  "Verses 14&ndash;15 provide the purpose statement for the entire letter. Paul writes that he hopes to come soon but gives his instructions &ldquo;so that, if I delay, you may know how one ought to behave in the household of God, which is the church of the living God, the pillar and buttress of the truth.&rdquo; The qualifications in chapter 3, the instructions about prayer in chapter 2, the warnings against false teachers in chapter 1 &mdash; all of this is about behaviour in God&rsquo;s household.",
                  "The three descriptions of the church carry enormous theological weight. &ldquo;The household of God&rdquo; frames the church as a family under the Father &mdash; with all the relational obligations and intimacies that implies. &ldquo;The church of the living God&rdquo; distinguishes it from the many temples and religious societies of Ephesus: this community belongs to a God who is alive and acts in history. &ldquo;The pillar and buttress of the truth&rdquo; gives the church a structural vocation: it does not create the truth but holds and supports it, making it visible and accessible to the world.",
                  "Verse 16 concludes with the doxological cry &ldquo;Great indeed, we confess, is the mystery of godliness&rdquo; and then the six-line hymn. The structure of the hymn &mdash; three contrasting pairs &mdash; covers the full sweep of Christ&rsquo;s redemptive work: from the humility of incarnation to the exaltation of ascension, from the intimacy of the Spirit&rsquo;s vindication to the breadth of proclamation among the nations, from angelic recognition to human faith. This is what the church as &ldquo;pillar and buttress of the truth&rdquo; is tasked with proclaiming: the story of Jesus from flesh to glory.",
                ],
              },
            ].map((section) => (
              <div key={section.ref} style={{ background: CARD, border: `1px solid ${section.color}25`, borderRadius: 16, padding: 28, marginBottom: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, flexWrap: "wrap", gap: 10 }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 19, margin: 0 }}>{section.heading}</h3>
                  <div style={{ background: `${section.color}15`, border: `1px solid ${section.color}35`, borderRadius: 8, padding: "4px 14px", fontSize: 13, fontWeight: 700, color: section.color }}>{section.ref}</div>
                </div>
                {section.body.map((para, idx) => (
                  <p key={idx} style={{ color: idx === 0 ? TEXT : MUTED, fontSize: 15, lineHeight: 1.85, marginTop: 0, marginBottom: idx < section.body.length - 1 ? 14 : 0 }}
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>
            ))}
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 24, marginTop: 0, marginBottom: 8 }}>Application for Today</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginTop: 0, marginBottom: 0 }}
                dangerouslySetInnerHTML={{ __html: "First Timothy 3 is not ancient ecclesiastical procedure. It is a living theology of character, community, and gospel proclamation that speaks directly into every church in every generation." }}
              />
            </div>

            {[
              {
                color: PURPLE,
                icon: "I",
                title: "Character Over Credentials as the Mark of Leadership",
                ref: "1 Timothy 3:2-7",
                body1: "The contemporary church often selects leaders by the same metrics the surrounding culture uses: charisma, professional achievement, organizational skill, institutional credentials. Paul&rsquo;s list in 1 Timothy 3 is almost entirely character-based. The logic is that a person who is sober-minded, self-controlled, hospitable, gentle, and not controlled by money has already demonstrated the gospel&rsquo;s transforming power in their actual life &mdash; and that transformation is what qualifies them to help it transform others.",
                body2: "This does not mean that competence and skill are irrelevant. &ldquo;Able to teach&rdquo; (v.2) is a genuine skill. The point is that skill without character produces leaders who serve themselves through the church rather than the church through themselves. The overseer&rsquo;s character is not a preliminary hurdle to clear before the real work starts; it is itself the primary qualification because it demonstrates that the gospel has actually taken root in a life.",
                body3: "Practically, this means that communities of faith should resist the temptation to appoint the most talented, visible, or successful person to leadership without asking the harder character questions: How does this person handle conflict? What is their relationship with money? Are they known for gentleness? Have they managed their household well? These questions feel intrusive but Paul makes them the center of the assessment.",
              },
              {
                color: TEAL,
                icon: "II",
                title: "The Church as God&rsquo;s Household",
                ref: "1 Timothy 3:15",
                body1: "The image of the church as God&rsquo;s household (oikos theou) is not a metaphor to be quickly noted and moved past. It is a claim about the kind of community the church is: a family. Families are not clubs with membership criteria or businesses with performance metrics; they are communities of belonging, obligation, mutual care, and permanent commitment. You belong to your family not because of your performance but because of your relationship.",
                body2: "This framing changes how we think about nearly everything in church life: church discipline (as a family handles wayward members, not as an organization enforces its rules), care for the vulnerable (as a family cares for those who cannot care for themselves, not as a charity manages clients), and hospitality (as a family welcomes guests into genuine relational space, not as a program executes a welcome strategy).",
                body3: "The household image also grounds the leadership qualifications. The overseer is not a CEO but a paterfamilias &mdash; a household head whose primary calling is care for the family. The question &ldquo;does he manage his own household well?&rdquo; is not an administrative check but a theological probe: does his closest family experience the same gospel-shaped leadership he would exercise in the wider community of God&rsquo;s family?",
              },
              {
                color: TEAL,
                icon: "III",
                title: "The Mystery of Godliness as a Creedal Summary",
                ref: "1 Timothy 3:16",
                body1: "The six-line hymn of verse 16 was probably known to Timothy and the Ephesian church before Paul quoted it. Paul introduces it as a confession (&ldquo;we confess&rdquo;) &mdash; something the community already affirmed together. This is the function of a creed: a shared, repeatable, memorable statement of the faith that anchors a community in the truth it holds.",
                body2: "The hymn covers the full range of Christ&rsquo;s identity and work: his humanity (manifested in the flesh), his vindication (by the Spirit &mdash; likely referring to the resurrection as the Spirit&rsquo;s act of validation), his cosmic significance (seen by angels), his universal reach (proclaimed among the nations), the response of faith (believed on in the world), and his final exaltation (taken up in glory). No single line is the whole gospel; together they tell the whole story.",
                body3: "For the church today, the mystery of godliness hymn is an invitation to return to the center. In a culture of constant theological drift and controversy, Paul&rsquo;s impulse is to anchor the community in the event of Jesus Christ. When everything else is disputed &mdash; practices, structures, cultural expressions &mdash; what remains is the &ldquo;mystery of godliness&rdquo;: the incarnate, risen, exalted, proclaimed, believed-on, glorified Lord. Great indeed is this mystery.",
              },
              {
                color: GREEN,
                icon: "IV",
                title: "Aspiring to Serve Rather Than to Rule",
                ref: "1 Timothy 3:1, 13",
                body1: "The opening statement that aspiring to the office of overseer is &ldquo;a noble task&rdquo; does something subtle: it reframes ambition. The Greek word for &ldquo;aspires&rdquo; (oregetai) can describe a strong, reaching desire. Paul does not condemn this desire; he endorses it. But he immediately reframes what the desire is for: &ldquo;a noble task&rdquo; (ergon, work or deed) not a noble position.",
                body2: "This reframing matters enormously in practice. People who aspire to lead in order to have authority, influence, or status will use the office for what they came for. People who aspire to lead because they want to serve, to build, to care for the community &mdash; who want the work, not the title &mdash; will use the office differently. The whole list of qualifications is essentially a description of someone who desires the task rather than the position: a person for whom leadership is a form of service rather than a form of rule.",
                body3: "Verse 13 adds that those who serve well as deacons gain &ldquo;great confidence in the faith.&rdquo; The reward of faithful service is not promotion or recognition but a deeper integration of faith and life &mdash; a boldness (parresia) that comes from having lived what one confesses. The most spiritually confident people in any community are often not the most prominent but the most faithful in quiet, sustained, costly service.",
              },
            ].map((app) => (
              <div key={app.title} style={{ background: CARD, border: `1px solid ${app.color}25`, borderRadius: 16, padding: 28, marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${app.color}20`, border: `2px solid ${app.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: app.color, fontWeight: 800, fontSize: 13, flexShrink: 0 }}>{app.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ color: app.color, fontWeight: 800, fontSize: 18, margin: "0 0 4px" }}
                      dangerouslySetInnerHTML={{ __html: app.title }}
                    />
                    <div style={{ color: MUTED, fontSize: 12, fontWeight: 600 }}>{app.ref}</div>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginTop: 0, marginBottom: 14 }}
                  dangerouslySetInnerHTML={{ __html: app.body1 }}
                />
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, marginTop: 0, marginBottom: 14 }}
                  dangerouslySetInnerHTML={{ __html: app.body2 }}
                />
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, marginTop: 0, marginBottom: 0 }}
                  dangerouslySetInnerHTML={{ __html: app.body3 }}
                />
              </div>
            ))}

            {/* Reflection questions */}
            <div style={{ background: `${PURPLE}0A`, border: `1px solid ${PURPLE}30`, borderRadius: 16, padding: 28, marginBottom: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, marginTop: 0, marginBottom: 18 }}>Reflection Questions</h3>
              {[
                "Looking at the list of overseer qualifications, which qualities do you see most clearly developed in yourself? Which are still growing? How does the list reframe what you aspire to in leadership?",
                "How does thinking of the church as &ldquo;the household of God&rdquo; change how you relate to other members of your congregation? To those you find difficult to love?",
                "The deacon must hold &ldquo;the mystery of the faith with a clear conscience.&rdquo; Is there a gap between what you confess and how you live? What would it look like to close that gap?",
                "The mystery of godliness hymn summarizes the gospel in six lines. If you had to summarize what you believe about Jesus in six sentences, what would they be? How does verse 16 correct or expand your summary?",
                "Verse 1 says aspiring to serve is a noble desire; verse 13 says faithful service produces great confidence. Where are you currently serving in a way that is forming you spiritually? Where might you aspire to serve more?",
              ].map((q, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: i < 4 ? 16 : 0 }}>
                  <div style={{ width: 26, height: 26, borderRadius: "50%", background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 800, fontSize: 12, flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                </div>
              ))}
            </div>

            {/* Prayer prompt */}
            <div style={{ background: `${TEAL}0A`, border: `1px solid ${TEAL}30`, borderRadius: 16, padding: 28 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, marginTop: 0, marginBottom: 14 }}>A Prayer from 1 Timothy 3</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.9, marginTop: 0, marginBottom: 0, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "Lord, thank you for the gift of your household &mdash; the community of your people gathered around the mystery of your Son. Form in me the character your word describes: sober-minded, self-controlled, gentle, hospitable, free from the love of money, faithful in what is closest before I aspire to what is further. Make me a person who holds the mystery of the faith with a clear conscience &mdash; whose life and confession are integrated rather than divided. And when I am tempted to seek leadership for position rather than task, remind me of the one who came not to be served but to serve and to give his life as a ransom for many. Great indeed is the mystery of godliness: he was manifested in the flesh. I worship him. Amen." }}
              />
            </div>
          </div>
        )}

        {/* Videos section (always visible below tabs) */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, marginTop: 0, marginBottom: 8 }}>Teaching Videos</h2>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginTop: 0, marginBottom: 28 }}
            dangerouslySetInnerHTML={{ __html: "Video teachings on 1 Timothy 3 &mdash; the qualifications for overseers and deacons, the church as the household of God, and the mystery of godliness hymn." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 20 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 15, marginTop: 0, marginBottom: 4 }}>{item.title}</h4>
                  <p style={{ color: MUTED, fontSize: 13, marginTop: 0, marginBottom: 0 }}>1 Timothy 3 Study</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
