"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import VerseRef from "@/components/VerseRef";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB";
const GOLD = "#D97706", TEAL = "#0D9488", ROSE = "#E11D48";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

const videoItems = [
  { videoId: "j4RrO6sL_0A", title: "James 5 - Patient Prayer and Perseverance" },
  { videoId: "P3sCJnmZFLQ", title: "The Prayer of Faith - James 5:13-18" },
  { videoId: "qGOV3HZMNLA", title: "Warning to the Rich - James 5:1-6" },
  { videoId: "XGqwDIZPQb0", title: "Restoring the Wandering - James 5:19-20" },
];

const KEY_THEMES = [
  {
    color: ROSE,
    title: "Woe to the Rich (vv. 1-6)",
    body: "James opens chapter 5 with a prophetic woe oracle addressed to the oppressive wealthy. Their gold and silver have corroded; their garments are moth-eaten; the wages they withheld from harvesters cry out to the Lord of Hosts. The rich have lived in self-indulgence and fattened themselves for the day of slaughter. This is not a condemnation of wealth itself but of wealth used to exploit, hoard, and silence the righteous poor. James stands in the line of Amos, Isaiah, and Jeremiah&mdash;the great prophetic tradition of economic accountability before God.",
  },
  {
    color: GOLD,
    title: "Patient Endurance: Farmer and Job (vv. 7-11)",
    body: "The central virtue of James 5 is <em>makrothumia</em>&mdash;patient endurance or long-suffering. The farmer who plants seed does not dig it up daily to check progress; he waits for the early and late rains with confidence in the harvest. Job endured unimaginable suffering while maintaining trust in a God he could not see or fully understand, and &ldquo;the Lord is full of compassion and mercy&rdquo; was the verdict at the end. The Lord&rsquo;s coming is near; the Judge stands at the door. This eschatological urgency both motivates and consoles.",
  },
  {
    color: TEAL,
    title: "On Oaths (v. 12)",
    body: "James 5:12 parallels Jesus&rsquo; teaching in Matthew 5:33-37 almost exactly: &ldquo;Do not swear&mdash;not by heaven or by earth or by anything else. All you need to say is a simple Yes or No. Otherwise you will be condemned.&rdquo; Oath-taking in the ancient world was a formal invocation of divine witness to guarantee truth-telling. James&rsquo; point is not that oaths are inherently wicked but that a person of integrity should not need them. Let your yes be yes and your no be no&mdash;a life of consistent truthfulness makes elaborate oaths unnecessary.",
  },
  {
    color: GREEN,
    title: "The Prayer of Faith That Heals (vv. 13-18)",
    body: "James gives the most extended NT passage on healing prayer. The Greek <em>euchomai</em> (pray/vow) and the &ldquo;prayer of faith&rdquo; that &ldquo;will make the sick person well&rdquo; (<em>iaomai</em>&mdash;heal) point to a robust pneumatology embedded in community practice. The elders are called to pray over the sick and anoint with oil in the Lord&rsquo;s name. Elijah is the paradigm: a human being &ldquo;with a nature like ours&rdquo; whose earnest prayer moved the heavens. The righteous person&rsquo;s prayer is powerful and effective (<em>energeo</em>&mdash;at work, active, operative).",
  },
  {
    color: PURPLE,
    title: "Restoring the Wandering (vv. 19-20)",
    body: "James closes with what may be his most urgent pastoral word: if anyone among you wanders from the truth and someone brings them back, that person saves a soul from death and covers a multitude of sins. The Greek <em>epistrepho</em> (turn/restore) carries connotations of full conversion and return. This is the church&rsquo;s ongoing mission not just outward to the world but inward to its own members. Mutual accountability, truth-speaking in love, and spiritual pursuit of the wandering&mdash;these are the marks of genuine Christian community.",
  },
];

const VERSE_SECTIONS = [
  {
    label: "vv. 1-3 | Woe to the Hoarding Rich",
    body: "James addresses the oppressive wealthy with stark prophetic language: &ldquo;Come now, you rich people, weep and wail because of the misery that is coming on you.&rdquo; Their wealth is decaying&mdash;garments moth-eaten, gold and silver corroded. The corrosion will testify against them and eat their flesh like fire. The phrase &ldquo;in the last days&rdquo; grounds this warning eschatologically: their self-indulgence is being catalogued before the divine court. The hoarding impulse exposes a fundamental failure to recognize that earthly wealth is temporary and morally accountable.",
  },
  {
    label: "vv. 4-6 | Withheld Wages Cry Out",
    body: "The specific sin named is the withholding of wages from laborers who harvested their fields. The Greek word <em>aphustereo</em> (defraud, deprive) describes a deliberate act of economic theft. These cries have &ldquo;reached the ears of the Lord Almighty&rdquo;&mdash;Sabaoth, the God of hosts, the Lord of cosmic armies. The rich have lived on earth &ldquo;in luxury and self-indulgence&rdquo; and have &ldquo;fattened yourselves in the day of slaughter.&rdquo; The righteous man they condemned and murdered&mdash;a probable reference to Christ and/or the poor&mdash;did not resist them.",
  },
  {
    label: "vv. 7-8 | Be Patient Like the Farmer",
    body: "The transition from woe to encouragement is sharp: &ldquo;Be patient, then, brothers and sisters, until the Lord&rsquo;s coming.&rdquo; The agricultural metaphor is telling. The farmer plants precious seed and then waits&mdash;not passively but with confident expectation&mdash;for the early rain (October-November, for germination) and late rain (March-April, for grain ripening). The harvest is certain because the rains are covenant mercies. So the believer waits for the Lord&rsquo;s coming with the same settled confidence: the harvest will come because the Lord is faithful.",
  },
  {
    label: "v. 9 | Do Not Grumble",
    body: "In the midst of calling believers to patient endurance, James inserts a sharp warning: &ldquo;Don&rsquo;t grumble against one another, brothers and sisters, or you will be judged. The Judge is standing at the door!&rdquo; Suffering has a way of producing internal conflict within communities. The grumbling (<em>stenazete</em>&mdash;groan, sigh against) that James prohibits is the blaming and scapegoating of fellow believers under pressure. The nearness of the Judge should produce both urgency and sobriety in how the community treats its own members.",
  },
  {
    label: "vv. 10-11 | The Prophets and Job",
    body: "James offers two models of patient endurance. The prophets who spoke in the name of the Lord suffered for their faithful speech. Job&rsquo;s suffering was extreme, protracted, and apparently without explanation&mdash;yet he endured. The phrase &ldquo;the Lord&rsquo;s purpose&rdquo; (<em>telos kyriou</em>) points to the end result of the Lord&rsquo;s action in Job: restoration and revelation of God&rsquo;s compassion. The point is not that suffering always ends in earthly restoration, but that the Lord&rsquo;s character is full of compassion (<em>polysplanchnos</em>) and mercy (<em>oiktirmon</em>).",
  },
  {
    label: "v. 12 | Let Your Yes Be Yes",
    body: "&ldquo;Above all, my brothers and sisters, do not swear&mdash;not by heaven or by earth or by anything else. All you need to say is a simple &lsquo;Yes&rsquo; or &lsquo;No.&rsquo; Otherwise you will be condemned.&rdquo; The phrase &ldquo;above all&rdquo; does not mean this is the most important command, but introduces a concluding exhortation. Jesus&rsquo; teaching in Matthew 5 is the clear background. The integrity of speech is the visible evidence of inner integrity. When yes always means yes and no always means no, oath-taking becomes redundant.",
  },
  {
    label: "vv. 13-14 | Pray, Praise, Call the Elders",
    body: "James establishes a comprehensive framework for the prayerful life: those suffering should pray; those joyful should sing psalms (<em>psallete</em>&mdash;sing praise); those sick should call the elders (<em>presbuteroi</em>) for anointing with oil and prayer in the Lord&rsquo;s name. The anointing with oil may be medicinal (reflecting ancient practice) or symbolic of the Spirit&rsquo;s presence and power. Either way, it is performed in the Lord&rsquo;s name&mdash;not as a magical rite but as an embodied act of faith in his authority and compassion.",
  },
  {
    label: "v. 15 | The Prayer of Faith Will Heal",
    body: "&ldquo;And the prayer offered in faith will make the sick person well; the Lord will raise them up. If they have sinned, they will be forgiven.&rdquo; This is one of the most discussed and debated verses in James. The Greek for &ldquo;make well&rdquo; is <em>sozo</em>&mdash;also the word for save&mdash;suggesting both physical healing and spiritual wholeness. The connection to forgiveness suggests that James sees healing prayer as a holistic act addressing the whole person. The promise is conditional not on a formula but on faith&mdash;trust in the Lord who heals.",
  },
  {
    label: "v. 16 | Confess to One Another",
    body: "&ldquo;Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.&rdquo; The &ldquo;therefore&rdquo; connects mutual confession to the context of healing prayer. Unconfessed sin can be a barrier to wholeness. The practice James describes is not hierarchical sacramental confession to a priest but horizontal mutual transparency between believers. The righteous person&rsquo;s prayer is <em>energeo</em>&mdash;at work, active, operative&mdash;a word used for the energy of God in Paul&rsquo;s letters.",
  },
  {
    label: "vv. 17-18 | Elijah: A Man Like Us",
    body: "Elijah&rsquo;s example is deliberately democratizing: &ldquo;Elijah was a human being, even as we are (<em>homoiopathes</em>&mdash;subject to the same passions and limitations).&rdquo; He was not a superhuman mystic but an ordinary man who prayed earnestly. His prayer shut the rain for three and a half years; his prayer opened it again. James&rsquo; point: the power belongs not to the person but to the God who hears. The righteous person who prays with earnestness can move what appears immovable because they are praying to the Lord who commands the rain.",
  },
  {
    label: "vv. 19-20 | Bringing Back the Wandering",
    body: "&ldquo;My brothers and sisters, if one of you should wander from the truth and someone should bring that person back, remember this: Whoever turns a sinner from the error of their way will save them from death and cover over a multitude of sins.&rdquo; The Greek <em>epistrepho</em> (turn/restore) is the word used for conversion throughout the NT. The person who brings back the wanderer participates in salvific action&mdash;whether rescuing from spiritual death or from the consequences of sin-leading-to-death. This last word of James frames the entire letter&rsquo;s ethics as fundamentally about saving lives through loving community.",
  },
];

const GREEK_WORDS = [
  { word: "makrothumia", transliteration: "mak-ro-thoo-MEE-ah", definition: "Patient endurance; long-suffering; the ability to bear long under difficulty without giving way to anger or despair. Used of the farmer waiting for rain (v.7) and the prophets enduring suffering (v.10).", color: GOLD },
  { word: "euchomai", transliteration: "yoo-KHO-my", definition: "To pray or to vow; in v.16 used for the mutual prayer of believers. Related to the noun <em>euche</em> (prayer/vow). James grounds healing in this communal act of prayer.", color: GREEN },
  { word: "iaomai", transliteration: "ee-AH-oh-my", definition: "To heal; to restore to health; used in v.16 for physical and spiritual healing that results from the prayer of the righteous. Points to a holistic restoration encompassing body and soul.", color: TEAL },
  { word: "epistrepho", transliteration: "ep-ee-STREH-phoh", definition: "To turn, return, or restore; the word for conversion and restoration throughout the NT. In v.19-20, the act of turning back a wanderer participates in salvific action that covers a multitude of sins.", color: PURPLE },
  { word: "energeo", transliteration: "en-er-GEH-oh", definition: "To be effective, operative, at work; from which we get &lsquo;energy.&rsquo; In v.16, the prayer of the righteous is energeo&mdash;not merely sincere but actively powerful, accomplishing real effects in the world.", color: ROSE },
];

interface PrayerEntry {
  id: number;
  request: string;
  date: string;
  outcome: string;
  answered: boolean;
}

export default function James5GuidePage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const [activeTab, setActiveTab] = useState("Overview");
  const [open, setOpen] = useState<number>(-1);
  const [prayerEntries, setPrayerEntries] = useState<PrayerEntry[]>([]);
  const [newRequest, setNewRequest] = useState("");
  const [editOutcome, setEditOutcome] = useState<{ [id: number]: string }>({});

  function addPrayerEntry() {
    if (!newRequest.trim()) return;
    const entry: PrayerEntry = {
      id: Date.now(),
      request: newRequest.trim(),
      date: new Date().toLocaleDateString(),
      outcome: "",
      answered: false,
    };
    setPrayerEntries((prev) => [entry, ...prev]);
    setNewRequest("");
  }

  function markAnswered(id: number) {
    setPrayerEntries((prev) =>
      prev.map((e) =>
        e.id === id
          ? { ...e, answered: true, outcome: editOutcome[id] ?? e.outcome }
          : e
      )
    );
  }

  function updateOutcome(id: number, val: string) {
    setEditOutcome((prev) => ({ ...prev, [id]: val }));
  }

  function removeEntry(id: number) {
    setPrayerEntries((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <Navbar />
      <main
        id="main-content"
        style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 5rem" }}
      >
        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>&#x1F64F;</div>
          <h1
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              fontWeight: 900,
              color: TEXT,
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            James 5: Warning to the Rich, Patient Endurance, Prayer, and Mutual Accountability
          </h1>
          <p
            style={{
              color: MUTED,
              maxWidth: 640,
              margin: "0 auto",
              lineHeight: 1.7,
              fontSize: "1rem",
            }}
            dangerouslySetInnerHTML={{
              __html:
                "A deep study of James 5 &mdash; the prophetic woe to the wealthy, <em>makrothumia</em> like the farmer and Job, the prayer of faith that heals, and the communal task of restoring wandering believers.",
            }}
          />
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "1rem",
            }}
          >
            {(["James 5:1-6", "James 5:7-11", "James 5:13-18", "James 5:19-20"] as const).map(
              (ref) => (
                <VerseRef key={ref} reference={ref} inline={false} />
              )
            )}
          </div>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "2rem",
            justifyContent: "center",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "0.5rem 1.2rem",
                borderRadius: 20,
                border: `1px solid ${activeTab === t ? GREEN : BORDER}`,
                background: activeTab === t ? `${GREEN}22` : CARD,
                color: activeTab === t ? GREEN : MUTED,
                fontWeight: activeTab === t ? 700 : 400,
                cursor: "pointer",
                fontSize: "0.88rem",
                transition: "all 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* === TAB: Overview === */}
        {activeTab === "Overview" && (
          <div>
            <div
              style={{
                background: CARD,
                borderRadius: 16,
                border: `1px solid ${BORDER}`,
                padding: "2rem",
                marginBottom: "1.5rem",
              }}
            >
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.4rem", marginBottom: "1rem" }}>
                Overview of James 5
              </h2>
              <p
                style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "James 5 is the climactic final chapter of the earliest letter in the New Testament. It opens with a thunderous prophetic denunciation of the oppressive wealthy (vv.1&ndash;6) that would not be out of place in Amos or Isaiah, then pivots to tender pastoral encouragement for believers enduring unjust suffering (vv.7&ndash;11). After a brief but weighty word on oath-taking (v.12), the chapter gives the New Testament&rsquo;s most extensive teaching on healing prayer and mutual confession (vv.13&ndash;18), before closing with a call to restore wandering believers (vv.19&ndash;20).",
                }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter&rsquo;s coherence lies in its twin focus on <em>waiting</em> and <em>praying</em>. The patient endurance called for in vv.7&ndash;11 is not passive resignation but active trust expressed through prayer, praise, confession, and mutual care. The eschatological horizon &mdash; &ldquo;the Lord&rsquo;s coming is near,&rdquo; &ldquo;the Judge is standing at the door&rdquo; &mdash; both motivates perseverance and frames the urgency of community life.",
                }}
              />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                  gap: "1rem",
                  marginTop: "1.5rem",
                }}
              >
                {[
                  ["Book", "James"],
                  ["Chapter", "5 (vv. 1-20)"],
                  ["Author", "James, brother of Jesus"],
                  ["Date", "c. AD 45-50"],
                  ["Key Word", "makrothumia (patience)"],
                  ["Key Verse", "James 5:16"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    style={{
                      background: BG,
                      borderRadius: 10,
                      border: `1px solid ${BORDER}`,
                      padding: "1rem",
                    }}
                  >
                    <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.25rem" }}>
                      {k}
                    </div>
                    <div style={{ color: TEXT, fontWeight: 700 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Structure */}
            <div
              style={{
                background: CARD,
                borderRadius: 16,
                border: `1px solid ${BORDER}`,
                padding: "2rem",
                marginBottom: "1.5rem",
              }}
            >
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1rem" }}>
                Structure of James 5
              </h2>
              {[
                ["vv. 1-6", ROSE, "Prophetic Woe to the Oppressive Rich"],
                ["vv. 7-11", GOLD, "Call to Patient Endurance: Farmer, Prophets, Job"],
                ["v. 12", TEAL, "On Oaths: Let Your Yes Be Yes"],
                ["vv. 13-18", GREEN, "The Prayer of Faith, Anointing, Elijah"],
                ["vv. 19-20", PURPLE, "Restoring the Wandering Believer"],
              ].map(([ref, color, desc]) => (
                <div
                  key={ref as string}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      background: `${color}22`,
                      color: color as string,
                      border: `1px solid ${color}44`,
                      borderRadius: 8,
                      padding: "0.3rem 0.7rem",
                      fontWeight: 700,
                      fontSize: "0.82rem",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {ref}
                  </span>
                  <span style={{ color: MUTED, lineHeight: 1.6, paddingTop: "0.2rem" }}>{desc}</span>
                </div>
              ))}
            </div>

            {/* Videos */}
            <div
              style={{
                background: CARD,
                borderRadius: 16,
                border: `1px solid ${BORDER}`,
                padding: "2rem",
              }}
            >
              <h2
                style={{
                  color: PURPLE,
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  marginBottom: "1.25rem",
                }}
              >
                Video Resources
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                {videoItems.map((item) => (
                  <div
                    key={item.videoId}
                    style={{
                      background: BG,
                      borderRadius: 12,
                      border: `1px solid ${BORDER}`,
                      overflow: "hidden",
                    }}
                  >
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <div style={{ padding: "0.75rem 1rem" }}>
                      <div style={{ color: TEXT, fontWeight: 600, fontSize: "0.9rem" }}>
                        {item.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* === TAB: Key Themes === */}
        {activeTab === "Key Themes" && (
          <div>
            <h2
              style={{
                color: GREEN,
                fontWeight: 800,
                fontSize: "1.4rem",
                marginBottom: "1.25rem",
              }}
            >
              Key Themes in James 5
            </h2>

            {KEY_THEMES.map((theme, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  borderRadius: 14,
                  border: `1px solid ${BORDER}`,
                  padding: "1.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    color: theme.color,
                    fontWeight: 800,
                    fontSize: "1.05rem",
                    marginBottom: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: theme.color,
                      flexShrink: 0,
                    }}
                  />
                  {theme.title}
                </div>
                <p
                  style={{ color: MUTED, lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: theme.body }}
                />
              </div>
            ))}

            {/* Greek Word Study */}
            <div
              style={{
                background: CARD,
                borderRadius: 14,
                border: `1px solid ${BORDER}`,
                padding: "1.75rem",
                marginTop: "1.5rem",
              }}
            >
              <h3
                style={{
                  color: TEAL,
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  marginBottom: "1.25rem",
                }}
              >
                Greek Word Study
              </h3>
              {GREEK_WORDS.map((gw, i) => (
                <div
                  key={i}
                  style={{
                    borderLeft: `3px solid ${gw.color}`,
                    paddingLeft: "1rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "baseline", flexWrap: "wrap", marginBottom: "0.4rem" }}>
                    <span style={{ color: gw.color, fontWeight: 800, fontStyle: "italic", fontSize: "1.05rem" }}>
                      {gw.word}
                    </span>
                    <span style={{ color: MUTED, fontSize: "0.82rem" }}>({gw.transliteration})</span>
                  </div>
                  <p
                    style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: gw.definition }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* === TAB: Verse by Verse === */}
        {activeTab === "Verse by Verse" && (
          <div>
            <h2
              style={{
                color: GOLD,
                fontWeight: 800,
                fontSize: "1.4rem",
                marginBottom: "1.25rem",
              }}
            >
              Verse by Verse: James 5:1-20
            </h2>

            {VERSE_SECTIONS.map((sec, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${open === i ? GOLD : BORDER}`,
                  borderRadius: 12,
                  marginBottom: "0.75rem",
                  overflow: "hidden",
                  transition: "border-color 0.15s",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "1.1rem 1.3rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ color: TEXT, fontWeight: 700, lineHeight: 1.4 }}>
                    {sec.label}
                  </span>
                  <span style={{ color: GOLD, fontSize: "1.2rem", flexShrink: 0 }}>
                    {open === i ? "-" : "+"}
                  </span>
                </button>
                {open === i && (
                  <div style={{ padding: "0 1.3rem 1.3rem" }}>
                    <p
                      style={{ color: MUTED, lineHeight: 1.85, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: sec.body }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Key Verse Highlight */}
            <div
              style={{
                background: `${GREEN}18`,
                border: `1px solid ${GREEN}44`,
                borderRadius: 14,
                padding: "1.5rem",
                marginTop: "1.5rem",
              }}
            >
              <div style={{ color: GREEN, fontWeight: 800, marginBottom: "0.75rem" }}>
                Key Verse &mdash; James 5:16
              </div>
              <blockquote
                style={{
                  borderLeft: `3px solid ${GREEN}`,
                  paddingLeft: "1rem",
                  color: TEXT,
                  fontStyle: "italic",
                  lineHeight: 1.85,
                  margin: 0,
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "&ldquo;Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.&rdquo; (James 5:16)",
                }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.8, marginTop: "1rem", marginBottom: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The word <em>energeo</em> (powerful and effective) describes prayer that is not merely sincere but operative &mdash; actively at work in the world, accomplishing what God purposes. The righteous person is not morally perfect but is one who lives in right relationship with God, walking in repentance and faith.",
                }}
              />
            </div>
          </div>
        )}

        {/* === TAB: Application === */}
        {activeTab === "Application" && (
          <div>
            <h2
              style={{
                color: PURPLE,
                fontWeight: 800,
                fontSize: "1.4rem",
                marginBottom: "1.25rem",
              }}
            >
              Application: Living James 5 Today
            </h2>

            {/* Application Questions */}
            <div
              style={{
                display: "grid",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              {[
                {
                  color: GREEN,
                  q: "How do we pray with faith?",
                  body: "James does not describe prayer as a technique or formula but as an act of trust in a personal, compassionate God. The &ldquo;prayer of faith&rdquo; is not a guarantee based on human certainty but a confident petition grounded in God&rsquo;s character. Practical steps: pray specifically (name the need), pray communally (call the elders, pray with others), pray persistently (Elijah prayed earnestly &mdash; the Greek suggests intensity and duration), and pray transparently (confess sin that may be a barrier to wholeness). The God who hears is &ldquo;full of compassion and mercy&rdquo; (v.11).",
                },
                {
                  color: TEAL,
                  q: "What does it mean to restore a wandering believer?",
                  body: "James 5:19-20 describes a communal task: if someone wanders from the truth, they need someone to actively bring them back. This requires courage (truth-speaking), humility (not condemnation), and persistence (they may resist). The language of &lsquo;covering a multitude of sins&rsquo; echoes Proverbs 10:12 (&ldquo;love covers all wrongs&rdquo;) and 1 Peter 4:8. Restoration is not enabling sin or pretending it doesn&rsquo;t exist; it is speaking the truth in love with the goal of saving the person from death &mdash; spiritual and, potentially, physical consequences of persistent sin.",
                },
                {
                  color: GOLD,
                  q: "What does patient endurance look like in suffering?",
                  body: "The farmer does not panic when the rains have not yet come. He trusts in the rhythm of seasons and the covenant faithfulness of God who governs creation. Similarly, the believer who suffers unjustly is called not to bitterness, grumbling against fellow believers, or vengeance-seeking, but to the kind of patience rooted in the certainty of the Lord&rsquo;s return. Job&rsquo;s endurance was not passivity &mdash; he cried out, questioned, and lamented. But he did not abandon his trust in the God who is ultimately just and merciful.",
                },
                {
                  color: ROSE,
                  q: "How should we think about economic justice?",
                  body: "James 5:1-6 is one of the most radical texts in the NT on economic ethics. The specific sin is withholding wages &mdash; a structural, systemic wrong, not merely a personal moral failure. The cry of defrauded workers reaches the Lord of Hosts. This calls believers and communities to examine not just personal charity but structural participation: do the economic systems we benefit from exploit or protect the vulnerable? James doesn&rsquo;t call the oppressed poor to violent revolution, but he calls the wealthy oppressors to tremble before the divine court.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    borderRadius: 14,
                    border: `1px solid ${BORDER}`,
                    padding: "1.75rem",
                  }}
                >
                  <div
                    style={{
                      color: item.color,
                      fontWeight: 800,
                      fontSize: "1rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {item.q}
                  </div>
                  <p
                    style={{ color: MUTED, lineHeight: 1.85, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>

            {/* Prayer Journal Tracker */}
            <div
              style={{
                background: CARD,
                borderRadius: 16,
                border: `1px solid ${GREEN}44`,
                padding: "2rem",
              }}
            >
              <h3
                style={{
                  color: GREEN,
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  marginBottom: "0.5rem",
                }}
              >
                Prayer Journal Tracker
              </h3>
              <p
                style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1.25rem", lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Practicing James 5:16 &mdash; record prayer requests and track how God answers. &ldquo;The prayer of a righteous person is powerful and effective.&rdquo;",
                }}
              />

              {/* Add Entry */}
              <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                <input
                  type="text"
                  value={newRequest}
                  onChange={(e) => setNewRequest(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addPrayerEntry()}
                  placeholder="Enter a prayer request..."
                  style={{
                    flex: 1,
                    minWidth: 220,
                    background: BG,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 8,
                    color: TEXT,
                    padding: "0.65rem 1rem",
                    fontSize: "0.92rem",
                  }}
                />
                <button
                  onClick={addPrayerEntry}
                  style={{
                    background: GREEN,
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    padding: "0.65rem 1.25rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontSize: "0.92rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  Add Request
                </button>
              </div>

              {/* Entry List */}
              {prayerEntries.length === 0 && (
                <p
                  style={{ color: MUTED, fontSize: "0.88rem", textAlign: "center", padding: "1.5rem 0" }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "No prayer requests yet. Add your first request above and begin tracking how God answers.",
                  }}
                />
              )}
              {prayerEntries.map((entry) => (
                <div
                  key={entry.id}
                  style={{
                    background: BG,
                    borderRadius: 10,
                    border: `1px solid ${entry.answered ? GREEN + "66" : BORDER}`,
                    padding: "1rem 1.25rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem", flexWrap: "wrap" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ color: entry.answered ? GREEN : TEXT, fontWeight: 700, marginBottom: "0.25rem" }}>
                        {entry.request}
                        {entry.answered && (
                          <span
                            style={{
                              marginLeft: "0.5rem",
                              background: `${GREEN}22`,
                              color: GREEN,
                              borderRadius: 6,
                              padding: "0.1rem 0.5rem",
                              fontSize: "0.75rem",
                              fontWeight: 700,
                            }}
                          >
                            Answered
                          </span>
                        )}
                      </div>
                      <div style={{ color: MUTED, fontSize: "0.78rem" }}>Added: {entry.date}</div>
                      {entry.answered && entry.outcome && (
                        <div style={{ color: MUTED, fontSize: "0.85rem", marginTop: "0.4rem", fontStyle: "italic" }}>
                          Outcome: {entry.outcome}
                        </div>
                      )}
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0, flexWrap: "wrap" }}>
                      {!entry.answered && (
                        <button
                          onClick={() => markAnswered(entry.id)}
                          style={{
                            background: `${GREEN}22`,
                            color: GREEN,
                            border: `1px solid ${GREEN}44`,
                            borderRadius: 6,
                            padding: "0.3rem 0.7rem",
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            cursor: "pointer",
                          }}
                        >
                          Mark Answered
                        </button>
                      )}
                      <button
                        onClick={() => removeEntry(entry.id)}
                        style={{
                          background: `${ROSE}18`,
                          color: ROSE,
                          border: `1px solid ${ROSE}33`,
                          borderRadius: 6,
                          padding: "0.3rem 0.7rem",
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  {!entry.answered && (
                    <div style={{ marginTop: "0.75rem" }}>
                      <input
                        type="text"
                        value={editOutcome[entry.id] ?? ""}
                        onChange={(e) => updateOutcome(entry.id, e.target.value)}
                        placeholder="Record outcome when answered..."
                        style={{
                          width: "100%",
                          background: CARD,
                          border: `1px solid ${BORDER}`,
                          borderRadius: 6,
                          color: MUTED,
                          padding: "0.4rem 0.75rem",
                          fontSize: "0.82rem",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}

              {prayerEntries.filter((e) => e.answered).length > 0 && (
                <div
                  style={{
                    marginTop: "1rem",
                    padding: "0.75rem 1rem",
                    background: `${GREEN}11`,
                    borderRadius: 8,
                    border: `1px solid ${GREEN}22`,
                    color: GREEN,
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  {prayerEntries.filter((e) => e.answered).length} of {prayerEntries.length} prayers answered &mdash; to the glory of God
                </div>
              )}
            </div>

            {/* Reflection Questions */}
            <div
              style={{
                background: CARD,
                borderRadius: 16,
                border: `1px solid ${BORDER}`,
                padding: "2rem",
                marginTop: "1.5rem",
              }}
            >
              <h3
                style={{
                  color: GOLD,
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  marginBottom: "1rem",
                }}
              >
                Reflection Questions
              </h3>
              {[
                "Is there someone in your community who is wandering? What would it look like to actively pursue them with truth and love?",
                "Where do you most need <em>makrothumia</em> right now &mdash; patient endurance in waiting on God? How does the farmer metaphor reframe your waiting?",
                "Do you have a community in which mutual confession and healing prayer are practiced? What would need to change for that to become real in your life?",
                "In what ways do your financial choices affect the vulnerable? How does James 5:1-6 call you to examine your economic participation?",
                "How does the example of Elijah &mdash; a person &ldquo;with a nature like ours&rdquo; &mdash; change how you view your own prayers?",
              ].map((q, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      background: `${GOLD}22`,
                      color: GOLD,
                      borderRadius: "50%",
                      width: 26,
                      height: 26,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: "0.82rem",
                      flexShrink: 0,
                      marginTop: "0.1rem",
                    }}
                  >
                    {i + 1}
                  </span>
                  <p
                    style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
