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
  { videoId: "cbxN0JBQfkE", title: "2 Peter 2 - False Teachers Exposed" },
  { videoId: "V1HHrMZZ_o0", title: "Recognizing False Prophets - 2 Peter 2" },
  { videoId: "G5Xd5vUGkx4", title: "The Judgment of False Teachers 2 Peter 2" },
  { videoId: "RFzVHN5kgA8", title: "Balaam and the Wages of Wickedness" },
];

const KEY_THEMES = [
  {
    color: ROSE,
    title: "False Prophets Who Introduce Destructive Heresies (vv. 1-3)",
    body: "Peter opens with a chilling historical parallel: just as false prophets arose among the people of Israel, so there will be false teachers among you. The Greek <em>pseudoprophetes</em> (false prophet) does not denote mere theological error but active spiritual deception. Their method is &ldquo;secretly introducing&rdquo; destructive <em>hairesis</em> (heresies/factions). The word translated &ldquo;destructive&rdquo; is <em>apoleia</em>&mdash;the same word as &ldquo;perdition&rdquo;&mdash;pointing to the eternal stakes. They even &ldquo;deny the sovereign Lord who bought them,&rdquo; a stunning repudiation of the very One who ransomed them.",
  },
  {
    color: GOLD,
    title: "God's Judgment: Angels, Noah, Sodom (vv. 4-10)",
    body: "Peter marshals three historical precedents of divine judgment to establish that God does not leave wickedness unjudged. Angels who sinned were cast into Tartarus (Greek underworld), held in chains of darkness for judgment. The ancient world perished in the flood&mdash;only Noah, &ldquo;a preacher of righteousness,&rdquo; and seven others were saved. Sodom and Gomorrah were reduced to ashes, made an example of what is coming to the ungodly. Yet Lot, though &ldquo;tormented in his righteous soul&rdquo; by what he witnessed, was delivered. The pattern is consistent: God knows how to rescue the godly and hold the unrighteous for punishment.",
  },
  {
    color: PURPLE,
    title: "Characteristics of False Teachers (vv. 10-16)",
    body: "Peter provides an unflinching profile of false teachers. They &ldquo;follow the corrupt desire of the flesh&rdquo; (<em>aselgeia</em>&mdash;sensuality/licentiousness) and &ldquo;despise authority.&rdquo; Bold and arrogant, they even slander celestial beings&mdash;something angels themselves do not do when disputing with the devil. They are like irrational animals driven by instinct, destined for destruction. Their feasts are &ldquo;blots and blemishes&rdquo; who revel in their pleasures. They have eyes full of adultery; they seduce the unstable; their heart is trained in <em>pleonexia</em> (greed/covetousness). They are accursed children.",
  },
  {
    color: TEAL,
    title: "Balaam Who Loved the Wages of Wickedness (vv. 15-16)",
    body: "Balaam son of Bosor becomes Peter&rsquo;s paradigm for the money-motivated false teacher. Balaam was a genuine prophet who knew the voice of God but chose the wages of wickedness over faithfulness. The Old Testament narrative (Numbers 22-24) shows a man whose prophetic gift became corrupted by financial incentive. He was rebuked by his own donkey&mdash;a wordless animal suddenly possessed of prophetic speech to restrain a prophet&rsquo;s madness. Peter&rsquo;s use of Balaam underscores that spiritual gifting without integrity leads to corruption and judgment.",
  },
  {
    color: ROSE,
    title: "The Tragedy of Return to Corruption (vv. 17-22)",
    body: "Peter reserves his most devastating language for those who have &ldquo;escaped the corruption of the world by knowing our Lord and Savior Jesus Christ&rdquo; and then are again entangled and overcome. They are like springs without water, mists driven by storm&mdash;promising moisture but delivering nothing. The last state is worse than the first. Peter applies two proverbs: a dog returns to its vomit (Proverbs 26:11) and a sow after washing goes back to wallowing in the mud. These are not images of theological precision but of visceral revulsion&mdash;the horror of apostasy from one who truly knew the way of righteousness.",
  },
];

const VERSE_SECTIONS = [
  {
    label: "v. 1 | False Prophets Among the People",
    body: "Peter begins with a historical reality: &ldquo;But there were also false prophets among the people, just as there will be false teachers among you.&rdquo; The &ldquo;but&rdquo; contrasts with the preceding verses on genuine prophecy. The false teachers will &ldquo;secretly introduce destructive heresies.&rdquo; The Greek <em>pareisago</em> (secretly introduce) means to bring in alongside&mdash;these teachings don&rsquo;t arrive with warning labels; they are smuggled into the community. They even &ldquo;deny the sovereign Lord who bought them&mdash;bringing swift destruction on themselves.&rdquo; The word <em>despoten</em> (sovereign Lord) is a title emphasizing absolute authority and ownership.",
  },
  {
    label: "vv. 2-3 | Many Will Follow Their Depraved Conduct",
    body: "The alarming feature is not that false teachers exist but that &ldquo;many will follow their depraved conduct.&rdquo; The Greek <em>aselgeia</em> (depraved conduct/sensuality) describes a shameless, flagrant disregard for propriety. Because of these false teachers, &ldquo;the way of truth will be brought into disrepute.&rdquo; Their motivation is transparent: &ldquo;In their greed these teachers will exploit you with fabricated stories.&rdquo; The word for exploit (<em>emporeuomai</em>) means to traffic in, to make merchandise of&mdash;these teachers treat their followers as commodities to be monetized. Their judgment has long been hanging over them and their destruction is not asleep.",
  },
  {
    label: "vv. 4-5 | The Angels and Noah",
    body: "The first two precedents of divine judgment: God did not spare angels when they sinned but cast them into Tartarus (<em>tartaroo</em>&mdash;the deepest abyss in Greek cosmology), held in chains of darkness until judgment. And God did not spare the ancient world when he brought the flood, &ldquo;but protected Noah, a preacher of righteousness, and seven others.&rdquo; Noah is striking here: Peter calls him a preacher of righteousness. His entire life before and during the ark-building was a public witness to a world that did not listen. God preserved the righteous remnant even while destroying the rebellious majority.",
  },
  {
    label: "vv. 6-8 | Sodom, Gomorrah, and Righteous Lot",
    body: "The third precedent: &ldquo;if he condemned the cities of Sodom and Gomorrah by burning them to ashes, and made them an example of what is going to happen to the ungodly&mdash;and if he rescued Lot, a righteous man, who was distressed by the depraved conduct of the lawless.&rdquo; Lot&rsquo;s righteousness is contested in the Genesis narrative, yet Peter insists on it: he was &ldquo;tormented in his righteous soul by the lawless deeds he saw and heard day after day.&rdquo; The capacity to be troubled by wickedness&mdash;to have a conscience that is not seared&mdash;is itself a mark of righteousness.",
  },
  {
    label: "vv. 9-10a | God Knows How to Rescue and Punish",
    body: "&ldquo;...if this is so, then the Lord knows how to rescue the godly from trials and to hold the unrighteous for punishment on the day of judgment. This is especially true of those who follow the corrupt desire of the flesh and despise authority.&rdquo; The three historical examples from vv.4-8 support one conclusion: divine judgment is certain and divine rescue is equally certain. The Lord is not an absentee deity; he is actively holding the unrighteous for the day of judgment. This is simultaneously a warning and a comfort: the persecuted righteous are not abandoned.",
  },
  {
    label: "vv. 10b-12 | Bold, Arrogant, and Irrational",
    body: "The false teachers are described as &ldquo;bold and arrogant&rdquo;&mdash;they &ldquo;are not afraid to heap abuse on celestial beings.&rdquo; The contrast with angelic restraint is striking: &ldquo;yet even angels, although they are stronger and more powerful, do not heap abuse on such beings when bringing judgment on them from the Lord.&rdquo; These teachers are like irrational animals&mdash;creatures of instinct born to be caught and destroyed&mdash;who slander what they do not understand. In their destruction they will be destroyed. The logic is stark: to slander spiritual realities you don&rsquo;t understand, while angels who do understand them speak with restraint, is profound spiritual presumption.",
  },
  {
    label: "vv. 13-14 | Blots and Blemishes at Your Love Feasts",
    body: "&ldquo;They will be paid back with harm for the harm they have done. Their idea of pleasure is to carouse in broad daylight. They are blots and blemishes, reveling in their pleasures while they feast with you.&rdquo; The love feast (agape) was the early church&rsquo;s communal meal, often associated with the Lord&rsquo;s Supper. The presence of false teachers at these intimate gatherings is a desecration: they are &ldquo;blots and blemishes&rdquo; (<em>spiloi kai momoi</em>). They have &ldquo;eyes full of adultery&rdquo; and &ldquo;never stop sinning&rdquo;&mdash;present participle indicating continuous, habitual sin. They &ldquo;seduce the unstable&rdquo; and are &ldquo;experts in greed.&rdquo; An accursed brood.",
  },
  {
    label: "vv. 15-16 | Balaam and the Way of Wickedness",
    body: "&ldquo;They have left the straight way and wandered off to follow the way of Balaam son of Bozer, who loved the wages of wickedness.&rdquo; The Balaam narrative (Numbers 22-24, 31) presents a genuine prophet whose loyalty was purchasable. He was hired by Balak to curse Israel but God turned his mouth to blessing. Yet he advised Balak to seduce Israel through Moabite women&mdash;a calculated spiritual corruption. His donkey, seeing the angel of the Lord blocking their path, spoke human words to restrain his master&rsquo;s madness. The sign was unmistakable, yet Balaam persisted until his death among the enemies of Israel.",
  },
  {
    label: "vv. 17-19 | Springs Without Water",
    body: "Peter shifts to vivid metaphors of disappointment and deception: these teachers are &ldquo;springs without water and mists driven by a storm.&rdquo; In a dry and thirsty land, a spring that contains no water is more devastating than no spring at all&mdash;it promises and deceives. They &ldquo;mouth empty, boastful words and, by appealing to the lustful desires of the flesh, they entice people who are just escaping from those who live in error.&rdquo; They promise freedom while being themselves slaves of depravity: &ldquo;for people are slaves to whatever has mastered them.&rdquo; The false teacher offers liberation but delivers bondage.",
  },
  {
    label: "vv. 20-22 | Worse Than the Beginning",
    body: "&ldquo;If they have escaped the corruption of the world by knowing our Lord and Savior Jesus Christ and are again entangled in it and are overcome, they are worse off at the end than they were at the beginning.&rdquo; This is Peter&rsquo;s most severe warning. Those who escape and then return face a deeper corruption than they had before. &ldquo;It would have been better for them not to have known the way of righteousness, than to have known it and then to turn their backs on the sacred commandment that was passed on to them.&rdquo; Two proverbs underscore the horror: the dog returns to its vomit; the sow to the mud. Reformation without regeneration produces only a temporary, reversible change.",
  },
];

const GREEK_WORDS = [
  { word: "pseudoprophetes", transliteration: "psyoo-dop-rof-EH-tace", definition: "False prophet; one who claims to speak for God but speaks lies. Used in v.1 to establish the historical parallel between OT false prophets and NT false teachers infiltrating the church.", color: ROSE },
  { word: "hairesis", transliteration: "HAY-reh-sis", definition: "Heresy, faction, or sect; a destructive opinion or party that divides from the truth. In v.1, &lsquo;destructive heresies&rsquo; (<em>haireseis apoleias</em>) points to teachings that lead to eternal ruin.", color: GOLD },
  { word: "aselgeia", transliteration: "ah-SEL-gay-ah", definition: "Sensuality, licentiousness, debauchery; flagrant, shameless immorality. Used in vv.2, 7, and 18 to describe both the false teachers&rsquo; conduct and the corrupted world from which believers have escaped.", color: PURPLE },
  { word: "pleonexia", transliteration: "play-on-ex-EE-ah", definition: "Greed, covetousness, the desire to have more than one&rsquo;s rightful share. Used in v.14 to describe the false teachers&rsquo; mastery in avarice. In Paul, this vice is equated with idolatry (Col 3:5).", color: TEAL },
  { word: "kataphtheiro", transliteration: "kah-taf-THAY-roh", definition: "To corrupt thoroughly, to destroy, to bring to ruin. Used in v.12 of the false teachers themselves: &lsquo;they will be destroyed in their destruction.&rsquo; The word implies a moral corruption that works itself out in ultimate ruin.", color: GREEN },
];

const TRUE_VS_FALSE = [
  { true_mark: "Exalts Christ, the sovereign Lord (v.1)", false_mark: "Denies the sovereign Lord who bought them (v.1)", category: "Christology" },
  { true_mark: "Speaks the prophetic word of Scripture (2 Pet 1:20-21)", false_mark: "Introduces teachings secretly alongside Scripture (v.1)", category: "Authority" },
  { true_mark: "Motivated by love for the flock (1 Pet 5:2)", false_mark: "Motivated by greed; exploits followers with fabricated stories (v.3)", category: "Motivation" },
  { true_mark: "Lives in holiness; is troubled by sin (vv.7-8)", false_mark: "Follows corrupt desire of the flesh; revels in pleasure (vv.10, 13)", category: "Character" },
  { true_mark: "Speaks with restraint about spiritual realities (v.11)", false_mark: "Heaps abuse on celestial beings; speaks of what they don&rsquo;t understand (vv.10-12)", category: "Humility" },
  { true_mark: "Calls people to freedom from sin through Christ (2 Pet 1:3-4)", false_mark: "Promises freedom while enslaved to depravity (v.19)", category: "Gospel" },
];

export default function SecondPeter2GuidePage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const [activeTab, setActiveTab] = useState("Overview");
  const [open, setOpen] = useState<number>(-1);
  const [checkedMarks, setCheckedMarks] = useState<{ [key: string]: boolean }>({});

  function toggleMark(key: string) {
    setCheckedMarks((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const checkedCount = Object.values(checkedMarks).filter(Boolean).length;

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
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>&#x26A0;&#xFE0F;</div>
          <h1
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              fontWeight: 900,
              color: TEXT,
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            2 Peter 2: False Prophets, Judgment, and the Corruption of the Ungodly
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
                "A verse-by-verse study of 2 Peter 2 &mdash; the marks of false prophets, God&rsquo;s certain judgment on the ungodly, the way of Balaam, and the tragedy of those who return to corruption after escaping it.",
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
            {(["2 Peter 2:1", "2 Peter 2:9", "2 Peter 2:15", "2 Peter 2:20"] as const).map(
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
                border: `1px solid ${activeTab === t ? ROSE : BORDER}`,
                background: activeTab === t ? `${ROSE}22` : CARD,
                color: activeTab === t ? ROSE : MUTED,
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
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: "1.4rem", marginBottom: "1rem" }}>
                Overview of 2 Peter 2
              </h2>
              <p
                style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Second Peter 2 is one of the New Testament&rsquo;s most concentrated warnings against false teaching. Peter writes with the urgency of a man who knows his death is near (2 Pet 1:14) and wants his readers equipped to recognize and resist spiritual deception after he is gone. The chapter is dense with historical precedent, psychological profile, and vivid metaphor&mdash;all in service of protecting the flock from teachers who would lead them to destruction.",
                }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter shares significant material with Jude&rsquo;s letter&mdash;particularly the references to fallen angels, Noah, Sodom, and Balaam&mdash;suggesting either common source material or direct literary dependence. Both letters address the same crisis: infiltration of the church by teachers whose lifestyle and doctrine have departed from apostolic truth. Peter&rsquo;s contribution is the extended meditation on the tragedy of return to corruption (vv.20&ndash;22).",
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
                  ["Book", "2 Peter"],
                  ["Chapter", "2 (vv. 1-22)"],
                  ["Author", "Simon Peter, apostle"],
                  ["Date", "c. AD 64-68"],
                  ["Key Word", "pseudoprophetes (false prophet)"],
                  ["Key Theme", "Discernment and judgment"],
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
                Structure of 2 Peter 2
              </h2>
              {[
                ["vv. 1-3", ROSE, "The Rise of False Teachers: Heresy, Exploitation, and Certain Judgment"],
                ["vv. 4-10a", GOLD, "Historical Precedents: Angels, Noah, Sodom; God Rescues and Judges"],
                ["vv. 10b-16", PURPLE, "Profile of False Teachers: Arrogance, Sensuality, Greed, the Way of Balaam"],
                ["vv. 17-19", TEAL, "Empty Promises: Springs Without Water, Slavery Disguised as Freedom"],
                ["vv. 20-22", ROSE, "The Tragedy of Apostasy: Worse Off Than the Beginning"],
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
                color: ROSE,
                fontWeight: 800,
                fontSize: "1.4rem",
                marginBottom: "1.25rem",
              }}
            >
              Key Themes in 2 Peter 2
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
              Verse by Verse: 2 Peter 2:1-22
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
                background: `${ROSE}18`,
                border: `1px solid ${ROSE}44`,
                borderRadius: 14,
                padding: "1.5rem",
                marginTop: "1.5rem",
              }}
            >
              <div style={{ color: ROSE, fontWeight: 800, marginBottom: "0.75rem" }}>
                Key Verse &mdash; 2 Peter 2:9
              </div>
              <blockquote
                style={{
                  borderLeft: `3px solid ${ROSE}`,
                  paddingLeft: "1rem",
                  color: TEXT,
                  fontStyle: "italic",
                  lineHeight: 1.85,
                  margin: 0,
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "&ldquo;...if this is so, then the Lord knows how to rescue the godly from trials and to hold the unrighteous for punishment on the day of judgment.&rdquo; (2 Peter 2:9)",
                }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.8, marginTop: "1rem", marginBottom: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "This is the conclusion Peter draws from three OT examples of judgment and rescue. The Lord is not passive or indifferent to the moral state of the world. He is actively holding the unrighteous &mdash; the present tense in Greek (<em>terein</em>) suggests ongoing custody, not future action &mdash; for the judgment to come. And he knows how to rescue the godly: not from all trial, but through it.",
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
              Application: Discernment and Faithfulness Today
            </h2>

            {/* Application Questions */}
            <div style={{ display: "grid", gap: "1rem", marginBottom: "2rem" }}>
              {[
                {
                  color: ROSE,
                  q: "How do we identify false teaching?",
                  body: "Peter gives us a multi-layered profile. False teachers (1) secretly introduce teachings rather than openly presenting them for testing; (2) deny the sovereign Lord in practice if not in words; (3) are motivated by financial gain and exploit followers; (4) live in sensuality and model the <em>aselgeia</em> they teach is acceptable; (5) promise freedom while being slaves to depravity; (6) target the unstable rather than building up the mature. No single mark is definitive in isolation, but a pattern of these characteristics across teaching and lifestyle is a serious warning sign.",
                },
                {
                  color: GOLD,
                  q: "What are the marks of false prophets today?",
                  body: "In contemporary context, the marks Peter describes show up in: teachers who build platforms around their own charisma rather than the apostolic word; ministries whose primary product is financial extraction from followers; communities where sexual ethics are redefined to accommodate leadership; the silencing of correction and accountability; the promise of spiritual experience, financial blessing, or personal fulfillment in place of the cross. The &ldquo;way of Balaam&rdquo; is particularly relevant: genuine gifting monetized into exploitation.",
                },
                {
                  color: TEAL,
                  q: "How do we protect against the way of Balaam?",
                  body: "Balaam&rsquo;s story is a warning about the corrupting power of financial incentive on those with genuine spiritual gifts. The NT pattern of protection includes: plurality of elders (not single-leader governance), financial transparency, external accountability structures, teaching tested against apostolic tradition, and communities where correction is welcome rather than suppressed. Peter&rsquo;s answer is not suspicion of all leadership but a return to the solid prophetic word (2 Pet 1:16&ndash;21) as the standard by which all teaching is measured.",
                },
                {
                  color: PURPLE,
                  q: "What is the tragedy Peter describes in vv.20-22?",
                  body: "The greatest tragedy Peter describes is not those who never knew the way of truth, but those who &ldquo;escaped the corruption of the world by knowing our Lord and Savior Jesus Christ&rdquo; and then returned to it. The proverbs of the dog and the sow are deliberately visceral. Peter does not provide a neat doctrinal resolution to the question of whether such people were genuinely regenerate; his pastoral goal is stark warning. Familiarity with truth without transformation of heart produces the most dangerous spiritual state: those who know enough to resist the Spirit&rsquo;s work but not enough to be saved by it.",
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

            {/* False Teaching Diagnostic */}
            <div
              style={{
                background: CARD,
                borderRadius: 16,
                border: `1px solid ${ROSE}44`,
                padding: "2rem",
                marginBottom: "1.5rem",
              }}
            >
              <h3
                style={{
                  color: ROSE,
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  marginBottom: "0.5rem",
                }}
              >
                False Teaching Diagnostic: True vs. False Teaching
              </h3>
              <p
                style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1.5rem", lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Drawn from 2 Peter 2. Check the marks of true teaching you observe in your own community&rsquo;s leadership as a discernment practice.",
                }}
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ color: GREEN, fontWeight: 800, fontSize: "0.85rem", paddingBottom: "0.5rem", borderBottom: `1px solid ${GREEN}44` }}>
                  Marks of True Teaching
                </div>
                <div style={{ color: ROSE, fontWeight: 800, fontSize: "0.85rem", paddingBottom: "0.5rem", borderBottom: `1px solid ${ROSE}44` }}>
                  Marks of False Teaching
                </div>
              </div>

              {TRUE_VS_FALSE.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.5rem",
                    marginBottom: "0.6rem",
                    alignItems: "start",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "flex-start",
                      cursor: "pointer",
                    }}
                    onClick={() => toggleMark(`true-${i}`)}
                  >
                    <span
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: 4,
                        border: `2px solid ${checkedMarks[`true-${i}`] ? GREEN : BORDER}`,
                        background: checkedMarks[`true-${i}`] ? `${GREEN}33` : "transparent",
                        flexShrink: 0,
                        marginTop: "0.1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.7rem",
                        color: GREEN,
                      }}
                    >
                      {checkedMarks[`true-${i}`] ? "v" : ""}
                    </span>
                    <p
                      style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: row.true_mark }}
                    />
                  </div>
                  <div
                    style={{
                      background: `${ROSE}0D`,
                      borderRadius: 6,
                      padding: "0.5rem 0.75rem",
                    }}
                  >
                    <p
                      style={{ color: ROSE, fontSize: "0.82rem", lineHeight: 1.6, margin: 0, opacity: 0.85 }}
                      dangerouslySetInnerHTML={{ __html: row.false_mark }}
                    />
                  </div>
                </div>
              ))}

              {checkedCount > 0 && (
                <div
                  style={{
                    marginTop: "1.25rem",
                    padding: "0.75rem 1rem",
                    background: `${GREEN}11`,
                    borderRadius: 8,
                    border: `1px solid ${GREEN}22`,
                    color: GREEN,
                    fontSize: "0.88rem",
                    fontWeight: 700,
                  }}
                >
                  {checkedCount} of {TRUE_VS_FALSE.length} marks of true teaching observed &mdash; keep seeking the Lord who guards his flock
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
                "What frameworks do you currently use to evaluate teaching? How does Peter&rsquo;s profile in 2 Peter 2 sharpen or challenge your discernment?",
                "Have you ever encountered the &ldquo;way of Balaam&rdquo;&mdash;genuine spiritual gifting monetized or corrupted by financial incentive? What did that look like?",
                "Peter says the Lord knows how to rescue the godly from trials. Where do you need that rescue right now, and how does this promise ground your trust?",
                "What structures of accountability exist in your community that would help identify and address false teaching? What is missing?",
                "The dog returns to its vomit; the sow to the mud. What does Peter&rsquo;s stark language about apostasy reveal about the seriousness with which he views ongoing spiritual formation?",
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
