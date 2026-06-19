"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

interface ThemeItem { id: string; title: string; ref: string; body: string; }
interface VerseItem { id: string; ref: string; label: string; body: string; }
interface AppItem { id: string; title: string; body: string; }

export default function Psalm110Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "CE8QbkUCNK4", title: "Psalm 110: The Messiah as Priest-King" },
    { videoId: "Q2oNOlXzBhY", title: "Sit at My Right Hand: Christ Enthroned" },
    { videoId: "8phkAg8PMHE", title: "A Priest Forever: The Order of Melchizedek" },
    { videoId: "fNk_zzaMoSs", title: "David&rsquo;s Lord: The Deity of the Messiah" },
  ];

  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };
  const toggle = (id: string) => setOpen(open === id ? null : id);

  const overviewParas: string[] = [
    "Psalm 110 is, by almost any measure, the most important messianic psalm in the entire Bible. It is the most quoted and most alluded-to passage of the Old Testament in the New, cited or echoed more than two dozen times across the Gospels, Acts, the letters of Paul and Peter, and above all the book of Hebrews. In just seven compact verses, David sets before us a figure who is at once King and Priest, enthroned at the right hand of God, sworn into an eternal priesthood, and destined to subdue every enemy beneath his feet. The early church read this psalm as a portrait of the risen and ascended Jesus Christ, and so did Jesus himself.",
    "The psalm opens with one of the most arresting lines in all of Scripture: &ldquo;The LORD says to my Lord: Sit at my right hand, until I make your enemies your footstool&rdquo; (110:1). David, the greatest king of Israel, speaks of a coming King whom he calls &ldquo;my Lord&rdquo; &mdash; one greater than David himself. Jesus seized on this very verse in his debate with the Pharisees (Matthew 22:41&ndash;46), asking how the Messiah could be both David&rsquo;s son and David&rsquo;s Lord. The only answer is that the Messiah is more than a man: he is the divine Son who shares the throne of God.",
    "Structurally the psalm unfolds in two parallel movements, each introduced by a divine word. The first oracle (vv.1&ndash;3) installs the Messiah as King at God&rsquo;s right hand and promises him a willing people. The second oracle (v.4), sealed by a divine oath, installs him as Priest forever &ldquo;after the order of Melchizedek.&rdquo; The closing verses (vv.5&ndash;7) then unfold the consequences: the warrior-King shatters hostile rulers, executes judgment among the nations, and presses on to final victory.",
    "What makes Psalm 110 so extraordinary is its fusion of two offices that Israel kept rigorously separate. Kings came from the tribe of Judah; priests came from the tribe of Levi through Aaron. No legitimate king of Israel could also serve as priest &mdash; King Uzziah was struck with leprosy for daring to enter the temple to burn incense (2 Chronicles 26). Yet here God swears that the Messiah will be both King and Priest in one person. The only precedent is Melchizedek, the mysterious king of Salem and &ldquo;priest of God Most High&rdquo; who blessed Abraham in Genesis 14:18&ndash;20.",
    "The book of Hebrews builds its entire argument for the superiority of Christ&rsquo;s priesthood on Psalm 110:4. Because Jesus is a priest &ldquo;after the order of Melchizedek&rdquo; rather than the order of Aaron, his priesthood is permanent, established by a divine oath, and grounded in &ldquo;the power of an indestructible life&rdquo; (Hebrews 7:16). He need not offer sacrifice repeatedly, for he offered himself once for all and now intercedes for his people forever (Hebrews 7:25). The seated posture of verse 1 &mdash; &ldquo;Sit at my right hand&rdquo; &mdash; signals that his saving work is finished.",
    "For the believer, Psalm 110 is not cold doctrine but warm assurance. The One who died for us is now enthroned in glory, reigning until every enemy is subdued, and serving as our ever-living High Priest who pleads our cause before the Father. His victory is certain, his intercession is unceasing, and his throne is forever. To read this psalm is to lift our eyes from the chaos of the present age to the Christ who already reigns at the right hand of God.",
  ];

  const themes: ThemeItem[] = [
    {
      id: "t1",
      title: "The Opening Oracle: Davids Lord at Gods Right Hand",
      ref: "Psalm 110:1; Matthew 22:41&ndash;46",
      body: "&ldquo;The LORD says to my Lord: Sit at my right hand, until I make your enemies your footstool&rdquo; (110:1). The verse contains two distinct figures: &ldquo;the LORD&rdquo; (Yahweh, the covenant God) and &ldquo;my Lord&rdquo; (Adonai, the one David addresses as his sovereign). David, the supreme king of Israel, bows to a coming King whom he calls his own Lord. Jesus pressed this puzzle on the Pharisees: &ldquo;If then David calls him Lord, how is he his son?&rdquo; (Matthew 22:45). The crowd was silenced, for the answer exposes the deity of the Messiah. He is David&rsquo;s descendant according to the flesh, yet David&rsquo;s Lord according to his eternal nature. To &ldquo;sit at the right hand&rdquo; is to occupy the place of highest honor and authority, sharing the very rule of God. Paul applies this to the risen Christ in Ephesians 1:20 and Colossians 3:1, and Peter in 1 Peter 3:22.",
    },
    {
      id: "t2",
      title: "The Enthronement: The Most Cited Verse in the New Testament",
      ref: "Psalm 110:1; Acts 2:34&ndash;35; Hebrews 1:13; 1 Corinthians 15:25",
      body: "No single Old Testament verse is quoted or echoed in the New Testament more often than Psalm 110:1. At Pentecost, Peter declares that David did not ascend into the heavens, but the risen Jesus did, fulfilling the words &ldquo;Sit at my right hand&rdquo; (Acts 2:34&ndash;35). The author of Hebrews asks which angel God ever addressed this way, proving the Son&rsquo;s supremacy (Hebrews 1:13). Paul writes that Christ &ldquo;must reign until he has put all his enemies under his feet&rdquo; (1 Corinthians 15:25), and lists death itself as the last enemy. The same enthronement language appears in Ephesians 1:20, Hebrews 8:1, Hebrews 10:12&ndash;13, Hebrews 12:2, and 1 Peter 3:22. The seated Christ is the reigning Christ: his enemies are not yet visibly destroyed, but their defeat is already decreed, and history is the slow making of them into his footstool.",
    },
    {
      id: "t3",
      title: "King and Priest in One Figure",
      ref: "Psalm 110:1, 4; Zechariah 6:13; Genesis 14:18&ndash;20",
      body: "Israel guarded a strict separation between the throne and the altar. Kings descended from Judah; priests from Levi through Aaron. When King Uzziah presumed to burn incense in the temple, he was struck with leprosy (2 Chronicles 26:16&ndash;21). Yet Psalm 110 unites both offices in a single person: he sits enthroned as King (v.1) and is sworn in as Priest forever (v.4). The prophet Zechariah glimpsed the same union, foretelling a Branch who would &ldquo;sit and rule on his throne&rdquo; and &ldquo;be a priest on his throne&rdquo; (Zechariah 6:13). The only Old Testament figure who held both offices was Melchizedek, &ldquo;king of Salem&rdquo; and &ldquo;priest of God Most High,&rdquo; who blessed Abraham (Genesis 14:18&ndash;20). In Jesus the two offices finally and permanently converge: he rules his people as King and reconciles them to God as Priest.",
    },
    {
      id: "t4",
      title: "A Priest Forever After the Order of Melchizedek",
      ref: "Psalm 110:4; Hebrews 5&ndash;7",
      body: "&ldquo;The LORD has sworn and will not change his mind: You are a priest forever after the order of Melchizedek&rdquo; (110:4). This single verse becomes the foundation of the central argument of Hebrews 5&ndash;7. Melchizedek appears in Genesis &ldquo;without father or mother or genealogy, having neither beginning of days nor end of life&rdquo; (Hebrews 7:3), a fitting type of the eternal Son. Because Christ&rsquo;s priesthood is of Melchizedek&rsquo;s order and not Aaron&rsquo;s, it is grounded in a divine oath, not in lineage; it is permanent, not interrupted by death; and it rests on &ldquo;the power of an indestructible life&rdquo; (Hebrews 7:16). Aaron&rsquo;s priests died and were replaced, and offered sacrifices again and again. Christ offered himself once for all, lives forever, and &ldquo;always lives to make intercession&rdquo; for those who draw near to God through him (Hebrews 7:25).",
    },
    {
      id: "t5",
      title: "The Messiahs Victory Over the Kings of the Earth",
      ref: "Psalm 110:1, 5&ndash;6; Revelation 19:11&ndash;16",
      body: "The psalm frames the Messiah&rsquo;s reign as a certain conquest. His enemies become his footstool (v.1); &ldquo;the Lord is at your right hand; he will shatter kings on the day of his wrath&rdquo; (v.5); &ldquo;he will execute judgment among the nations&rdquo; (v.6). This is not the language of a defeated or merely suffering Messiah but of a triumphant warrior-King who will subdue every rebellious power. The New Testament gathers up this hope in the vision of Christ returning as the rider on the white horse, from whose mouth comes a sharp sword &ldquo;with which to strike down the nations,&rdquo; who treads the winepress of the wrath of God, and who bears the name &ldquo;King of kings and Lord of lords&rdquo; (Revelation 19:11&ndash;16). The cross was not the end of the story. The crucified Savior is the reigning King, and his enemies&rsquo; days are numbered.",
    },
  ];

  const verses: VerseItem[] = [
    {
      id: "v1",
      ref: "Psalm 110:1",
      label: "Sit at My Right Hand",
      body: "&ldquo;The LORD says to my Lord: Sit at my right hand, until I make your enemies your footstool.&rdquo; The psalm begins with a divine decree, an oracle from God himself. &ldquo;The LORD&rdquo; (Yahweh) speaks to &ldquo;my Lord&rdquo; (Adonai), and David, Israel&rsquo;s anointed king, calls this coming One his own sovereign. To &ldquo;sit at the right hand&rdquo; is to be granted the seat of supreme honor and delegated authority beside the King of the universe. The image of enemies as a &ldquo;footstool&rdquo; comes from the ancient practice of a conquering king placing his foot on the neck of the vanquished. The little word &ldquo;until&rdquo; does not mean the reign ends; it means the reign continues precisely while every enemy is being subdued. Jesus applied this verse to himself in Matthew 22:44, and Peter announced its fulfillment in the ascension (Acts 2:34&ndash;35).",
    },
    {
      id: "v2",
      ref: "Psalm 110:2&ndash;3",
      label: "The Mighty Scepter from Zion",
      body: "&ldquo;The LORD sends forth from Zion your mighty scepter. Rule in the midst of your enemies! Your people will offer themselves freely on the day of your power.&rdquo; The King&rsquo;s rule advances not from the margins but from the very center of opposition: he reigns &ldquo;in the midst of&rdquo; his enemies, his authority radiating outward from Zion. The scepter is the symbol of royal power, extended by God himself. Yet alongside the imagery of conquest comes a tender note: his people offer themselves freely, willingly, gladly. This is no reign of coerced subjects but of a glad and devoted people, arrayed &ldquo;in holy garments&rdquo; like a priestly army, fresh as the dew of the morning. The reign of the Messiah creates a willing community who delight to serve him &mdash; a foreshadowing of the church, the redeemed who present their bodies as living sacrifices (Romans 12:1).",
    },
    {
      id: "v3",
      ref: "Psalm 110:4",
      label: "A Priest Forever",
      body: "&ldquo;The LORD has sworn and will not change his mind: You are a priest forever after the order of Melchizedek.&rdquo; This is the hinge of the psalm and the seed from which Hebrews 5&ndash;7 grows. God binds himself by oath &mdash; the strongest possible form of divine commitment &mdash; declaring the Messiah a priest not for a generation but &ldquo;forever.&rdquo; And his priesthood is not of the order of Aaron but of Melchizedek, the king-priest who predated and outranked the Levitical system. Because God &ldquo;will not change his mind,&rdquo; this priesthood can never be revoked or replaced. The implication is staggering: the One enthroned as King in verse 1 is also installed as eternal Priest in verse 4, uniting the offices of intercession and dominion. He both rules over his people and pleads for them before God, and he does so without end.",
    },
    {
      id: "v4",
      ref: "Psalm 110:5&ndash;6",
      label: "He Will Shatter Kings",
      body: "&ldquo;The Lord is at your right hand; he will shatter kings on the day of his wrath. He will execute judgment among the nations, filling them with corpses; he will shatter chiefs over the wide earth.&rdquo; The perspective now shifts: where the Messiah sat at God&rsquo;s right hand in verse 1, here God stands at the Messiah&rsquo;s right hand to fight for him. The language is martial and severe, depicting a day of decisive judgment when proud rulers and their armies are crushed. This is the sobering counterpart to the comfort of the earlier verses: the same King who gathers a willing people will also break every defiant power that refuses his rule. The New Testament does not soften this. The reigning Christ will return to judge the nations and put down all rebellion (Revelation 19:11&ndash;21), vindicating his people and establishing perfect justice.",
    },
    {
      id: "v5",
      ref: "Psalm 110:7",
      label: "He Will Lift Up His Head",
      body: "&ldquo;He will drink from the brook by the way; therefore he will lift up his head.&rdquo; The psalm closes with a single vivid image of the victorious King pausing in the midst of his campaign to drink from a wayside stream, then pressing on refreshed and triumphant. To &ldquo;lift up the head&rdquo; is to be exalted in victory, raised in honor and vindication. The picture is of a warrior who does not stop until the conquest is complete, sustained along the way and crowned at the end. Christian readers have long heard in this verse an echo of Christ&rsquo;s path through suffering to glory: he humbled himself, drank the cup given to him, and was therefore exalted, lifting up his head in resurrection and ascension. The pattern of the gospel &mdash; humiliation followed by exaltation &mdash; is written into the final line of this remarkable psalm.",
    },
  ];

  const appSections: AppItem[] = [
    {
      id: "a1",
      title: "Worship the Christ Who Reigns Now",
      body: "Psalm 110 lifts our eyes from the turbulence of the present age to the throne of heaven, where Jesus already sits at the right hand of God. We do not wait for him to begin reigning; he reigns now, and history is unfolding under his sovereign hand until every enemy becomes his footstool. When the headlines unsettle us, when evil seems to triumph, when our own circumstances feel chaotic, this psalm anchors us in a deeper reality: the crucified Savior is the enthroned King, and his rule cannot be overthrown. Let this truth move you to worship. The One who loved you and gave himself for you is the very One before whom every knee will bow.",
    },
    {
      id: "a2",
      title: "Rest in Your Ever-Living High Priest",
      body: "Because Jesus is a priest forever after the order of Melchizedek, his work on your behalf never ceases. He offered himself once for all, and now he &ldquo;always lives to make intercession&rdquo; for you (Hebrews 7:25). When you sin, you do not face an angry God alone; you have an advocate who pleads his own finished sacrifice. When you pray, you do not approach a closed throne; you draw near with confidence through a Priest who sympathizes with your weakness (Hebrews 4:14&ndash;16). His seated posture in verse 1 means his saving work is complete &mdash; there is nothing left for you to add. Rest in that completed work, and bring every burden boldly to the throne of grace.",
    },
    {
      id: "a3",
      title: "Offer Yourself Freely",
      body: "The psalm promises that on the day of the King&rsquo;s power, &ldquo;your people will offer themselves freely&rdquo; (110:3). The Messiah does not rule by coercion but gathers a willing, glad-hearted people. The proper response to his reign is not grudging compliance but joyful surrender. Paul echoes this when he appeals to us &ldquo;by the mercies of God&rdquo; to present our bodies as a living sacrifice (Romans 12:1). Ask yourself where you are still holding back &mdash; what part of your time, your resources, your ambitions, your relationships you have not yet freely offered to the King who freely gave himself for you. To belong to this King is the highest privilege; to serve him gladly is the truest freedom.",
    },
    {
      id: "a4",
      title: "Take Courage in the Certain Victory",
      body: "Psalm 110 does not flinch from the reality of opposition. The King reigns &ldquo;in the midst of&rdquo; his enemies, and a day of judgment is coming when proud powers will be shattered. For the believer, this is not a cause for fear but for courage. The outcome is not in doubt: every enemy &mdash; including the last enemy, death itself (1 Corinthians 15:25&ndash;26) &mdash; will be subdued beneath his feet. You may suffer for his name now, you may feel surrounded, you may grow weary in the long campaign. But like the King who drinks from the wayside brook and lifts up his head, you press on toward certain victory. Endure, knowing that the One who reigns will see his cause through to the end.",
    },
  ];

  const reflectionQuestions: string[] = [
    "Jesus used Psalm 110:1 to show that the Messiah is David&rsquo;s Lord, not merely his son. How does this psalm deepen your understanding of who Jesus is?",
    "What does it mean for your daily life that Christ is seated and reigning at the right hand of God right now?",
    "How does knowing that Jesus is your ever-living High Priest change the way you approach God in prayer and in your failures?",
    "Verse 3 describes a people who offer themselves freely. In what area of your life is God calling you toward more willing, joyful surrender?",
    "The psalm holds together comfort (a willing people) and judgment (shattered kings). How do both of these truths shape a healthy fear and love of God?",
    "Where do you most need the courage of certain victory, trusting that Christ will subdue every enemy beneath his feet?",
  ];

  const closingPrayer =
    "Lord Jesus, enthroned at the right hand of the Father, we worship you as our King and our Priest forever. We thank you that you reign even now, ruling in the midst of your enemies until every foe becomes your footstool. We thank you that you ever live to intercede for us, pleading your finished sacrifice on our behalf. Make us a willing people, glad to offer ourselves freely to you. Give us courage in the long campaign, that we may press on toward the certain victory you have secured. Lift up our heads, that we may see you in your glory and serve you with joy, until the day you return as King of kings and Lord of lords. Amen.";

  const sectionTitle = (text: string, color: string): React.CSSProperties => ({
    color,
    fontSize: "1.5rem",
    fontWeight: 700,
    margin: "0 0 1rem",
    letterSpacing: "-0.01em",
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 1.25rem 5rem" }}>
        {/* Hero */}
        <header style={{ padding: "3rem 0 2rem", borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Bible Study Guide
          </div>
          <h1 style={{ fontSize: "2.6rem", fontWeight: 800, margin: "0 0 0.75rem", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Psalm 110
          </h1>
          <p style={{ color: MUTED, fontSize: "1.15rem", margin: "0 0 1.75rem", lineHeight: 1.5 }}>
            The Messiah as Priest-King &mdash; the most quoted and alluded-to psalm in the New Testament.
          </p>
          <blockquote
            style={{
              margin: 0,
              padding: "1.5rem 1.75rem",
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderLeft: `4px solid ${GOLD}`,
              borderRadius: 12,
            }}
          >
            <p
              style={{ fontSize: "1.2rem", lineHeight: 1.6, margin: "0 0 0.6rem", fontStyle: "italic", color: TEXT }}
              dangerouslySetInnerHTML={{ __html: "&ldquo;The LORD says to my Lord: &lsquo;Sit at my right hand, until I make your enemies your footstool.&rsquo;&rdquo;" }}
            />
            <cite style={{ color: GOLD, fontSize: "0.95rem", fontStyle: "normal", fontWeight: 700 }}>Psalm 110:1</cite>
          </blockquote>
        </header>

        {/* Tab bar */}
        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            padding: "1.5rem 0",
            position: "sticky",
            top: "var(--header-height, 80px)",
            background: BG,
            zIndex: 10,
          }}
        >
          {TABS.map((t) => {
            const activeTab = tab === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                style={{
                  padding: "0.6rem 1.1rem",
                  borderRadius: 999,
                  border: `1px solid ${activeTab ? PURPLE : BORDER}`,
                  background: activeTab ? PURPLE : "transparent",
                  color: activeTab ? "#fff" : MUTED,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {TAB_LABELS[t]}
              </button>
            );
          })}
        </nav>

        {/* Overview */}
        {tab === "overview" && (
          <section>
            <h2 style={sectionTitle("Overview", PURPLE)}>Overview</h2>
            {overviewParas.map((p, i) => (
              <p
                key={i}
                style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.75, margin: "0 0 1.25rem" }}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}

            <div style={{ marginTop: "2rem", display: "grid", gap: "1rem" }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <h3 style={{ color: TEAL, fontSize: "1.1rem", fontWeight: 700, margin: "0 0 0.75rem" }}>Structure</h3>
                <p
                  style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, margin: 0 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "The psalm unfolds in two divine oracles. The first (vv.1&ndash;3) enthrones the Messiah as King at God&rsquo;s right hand and promises a willing people. The second (v.4), sealed by a divine oath, installs him as Priest forever after the order of Melchizedek. The closing verses (vv.5&ndash;7) unfold the consequences: the warrior-King shatters hostile rulers and presses on to final, lifted-up victory.",
                  }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <h3 style={{ color: GREEN, fontSize: "1.1rem", fontWeight: 700, margin: "0 0 0.75rem" }}>Context</h3>
                <p
                  style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, margin: 0 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "Attributed to David, Psalm 110 was prized by the early church as a window into the exaltation of Jesus. Psalm 110:1 is the most-quoted Old Testament verse in the New Testament (Matthew 22:44; Mark 12:36; Luke 20:42&ndash;43; Acts 2:34&ndash;35; Hebrews 1:13), and Psalm 110:4 (the Melchizedek priest) is the foundation of Hebrews 5&ndash;7. Melchizedek, both king of Salem and priest of God Most High (Genesis 14:18&ndash;20), stands as a type of Christ who is both King and Priest.",
                  }}
                />
              </div>
            </div>
          </section>
        )}

        {/* Themes */}
        {tab === "themes" && (
          <section>
            <h2 style={sectionTitle("Key Themes", TEAL)}>Key Themes</h2>
            <div style={{ display: "grid", gap: "0.85rem" }}>
              {themes.map((item) => {
                const isOpen = open === item.id;
                return (
                  <div key={item.id} style={{ background: CARD, border: `1px solid ${isOpen ? TEAL : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "1.25rem 1.5rem",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        color: TEXT,
                      }}
                    >
                      <span>
                        <span style={{ display: "block", fontSize: "1.1rem", fontWeight: 700 }}>{item.title}</span>
                        <span style={{ display: "block", color: TEAL, fontSize: "0.85rem", fontWeight: 600, marginTop: "0.3rem" }} dangerouslySetInnerHTML={{ __html: item.ref }} />
                      </span>
                      <span style={{ color: TEAL, fontSize: "1.5rem", flexShrink: 0, transform: isOpen ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 1.5rem 1.5rem" }}>
                        <p style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.75, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Verse by verse */}
        {tab === "verse" && (
          <section>
            <h2 style={sectionTitle("Verse by Verse", GOLD)}>Verse by Verse</h2>
            <div style={{ display: "grid", gap: "0.85rem" }}>
              {verses.map((item) => {
                const isOpen = open === item.id;
                return (
                  <div key={item.id} style={{ background: CARD, border: `1px solid ${isOpen ? GOLD : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "1.25rem 1.5rem",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        color: TEXT,
                      }}
                    >
                      <span>
                        <span style={{ display: "block", color: GOLD, fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.05em" }} dangerouslySetInnerHTML={{ __html: item.ref }} />
                        <span style={{ display: "block", fontSize: "1.1rem", fontWeight: 700, marginTop: "0.25rem" }}>{item.label}</span>
                      </span>
                      <span style={{ color: GOLD, fontSize: "1.5rem", flexShrink: 0, transform: isOpen ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 1.5rem 1.5rem" }}>
                        <p style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.75, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Application */}
        {tab === "application" && (
          <section>
            <h2 style={sectionTitle("Application", ROSE)}>Application</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {appSections.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${ROSE}`, borderRadius: 12, padding: "1.5rem" }}>
                  <h3 style={{ color: TEXT, fontSize: "1.2rem", fontWeight: 700, margin: "0 0 0.75rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.75, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
              ))}
            </div>

            <h3 style={{ color: PURPLE, fontSize: "1.35rem", fontWeight: 700, margin: "2.5rem 0 1rem" }}>Reflection Questions</h3>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem 1.5rem 1.5rem 1rem" }}>
              <ol style={{ margin: 0, paddingLeft: "1.5rem", display: "grid", gap: "0.9rem" }}>
                {reflectionQuestions.map((q, i) => (
                  <li key={i} style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.65 }} dangerouslySetInnerHTML={{ __html: q }} />
                ))}
              </ol>
            </div>

            <h3 style={{ color: TEAL, fontSize: "1.35rem", fontWeight: 700, margin: "2.5rem 0 1rem" }}>Watch and Learn</h3>
            <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <span style={{ color: TEXT, fontSize: "0.95rem", fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: v.title }} />
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{ color: GOLD, fontSize: "1.35rem", fontWeight: 700, margin: "2.5rem 0 1rem" }}>Closing Prayer</h3>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${GOLD}`, borderRadius: 12, padding: "1.75rem" }}>
              <p style={{ color: TEXT, fontSize: "1.05rem", lineHeight: 1.8, margin: 0, fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: closingPrayer }} />
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
