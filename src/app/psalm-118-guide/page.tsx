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

export default function Psalm118Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "rNcERbkSTXU", title: "Psalm 118: The Climax of the Egyptian Hallel" },
    { videoId: "OjJ7GkWCHvA", title: "The Stone the Builders Rejected" },
    { videoId: "pHBzJ2dVXgk", title: "Blessed Is He Who Comes: The Triumphal Entry" },
    { videoId: "3sO5FH2ybPY", title: "This Is the Day the LORD Has Made" },
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
    "Psalm 118 is the soaring, triumphant conclusion to the Egyptian Hallel, the cluster of praise psalms (113&ndash;118) sung at Israel&rsquo;s great festivals and especially at Passover. After the smaller streams of praise in the preceding psalms, Psalm 118 gathers them into a flood of thanksgiving. Its great refrain frames the whole: &ldquo;Oh give thanks to the LORD, for he is good; for his steadfast love endures forever.&rdquo; This is a psalm of rescue and rejoicing, of a worshiper who cried out from distress and was set free, and who now leads a festival procession up to the temple to give thanks.",
    "Yet Psalm 118 is far more than a personal thanksgiving. It is one of the most richly messianic psalms in the Psalter, woven deeply into the story of Jesus. Its words rang out at his triumphal entry, when the crowds cried, &ldquo;Hosanna! Blessed is he who comes in the name of the LORD!&rdquo; (Matthew 21:9). Jesus himself quoted its most famous image &mdash; the rejected stone become the cornerstone &mdash; and applied it directly to his own death and vindication (Matthew 21:42). And this was very likely the hymn Jesus and his disciples sang on the night of the Last Supper, for the Hallel concludes the Passover meal (Matthew 26:30).",
    "The psalm moves like a great liturgical drama. It opens with a fourfold call to thanksgiving (vv.1&ndash;4), inviting all Israel, the priests, and all who fear the LORD to declare that his steadfast love endures forever. It then recounts a personal testimony of deliverance: hemmed in by enemies, the worshiper called on the LORD and was answered and rescued (vv.5&ndash;18). From this comes a ringing confidence &mdash; &ldquo;The LORD is on my side; I will not fear. What can man do to me?&rdquo; (v.6) &mdash; and the bold counsel that &ldquo;it is better to take refuge in the LORD than to trust in man&rdquo; (v.8).",
    "At the heart of the psalm stands a procession to the temple. The worshiper cries, &ldquo;Open to me the gates of righteousness, that I may enter through them and give thanks to the LORD&rdquo; (v.19). And there, at the gate, comes the great prophetic word: &ldquo;The stone that the builders rejected has become the cornerstone. This is the LORD&rsquo;s doing; it is marvelous in our eyes&rdquo; (vv.22&ndash;23). What seemed rejected and discarded has been chosen by God for the place of highest honor &mdash; a pattern fulfilled supremely in the crucified and risen Christ.",
    "Out of this comes one of the most quoted lines in Christian worship: &ldquo;This is the day that the LORD has made; let us rejoice and be glad in it&rdquo; (v.24). Read first of the festival day of deliverance, it has been heard by the church as the day of salvation and, in long tradition, as the day of resurrection &mdash; the Lord&rsquo;s Day. The psalm then crescendos in the cry &ldquo;Save us, we pray, O LORD!&rdquo; (v.25) &mdash; the Hebrew &ldquo;Hosanna&rdquo; &mdash; and the blessing &ldquo;Blessed is he who comes in the name of the LORD&rdquo; (v.26), the very words the crowds would shout to Jesus.",
    "Psalm 118 thus carries the worshiper from distress to deliverance, from rescue to rejoicing, and from a temple procession to the gates of praise. For the Christian reader it is impossible to read without seeing the face of Jesus &mdash; the rejected stone who became the cornerstone, the One who comes in the name of the LORD, the bringer of the day the LORD has made. It begins and ends on the same triumphant note: &ldquo;his steadfast love endures forever.&rdquo;",
  ];

  const themes: ThemeItem[] = [
    {
      id: "t1",
      title: "His Steadfast Love Endures Forever",
      ref: "Psalm 118:1&ndash;4, 29",
      body: "The psalm is bracketed by a single great refrain: &ldquo;Oh give thanks to the LORD, for he is good; for his steadfast love endures forever&rdquo; (vv.1, 29). At the opening it is sounded four times, as Israel, the house of Aaron, and all who fear the LORD are each called to declare that &ldquo;his steadfast love endures forever.&rdquo; The Hebrew word translated &ldquo;steadfast love&rdquo; (hesed) describes God&rsquo;s loyal, covenant-keeping faithfulness &mdash; a love that does not waver, does not expire, and does not depend on our worthiness. This refrain is the foundation of the whole psalm: every act of deliverance it celebrates flows from this enduring love, and every reader is invited to take it up as their own confession. The God who rescued the psalmist is the same God whose love will never run out.",
    },
    {
      id: "t2",
      title: "Deliverance and the Confidence It Breeds",
      ref: "Psalm 118:5&ndash;14",
      body: "&ldquo;Out of my distress I called on the LORD; the LORD answered me and set me free&rdquo; (v.5). The heart of the psalm is a vivid testimony of rescue. Surrounded and hemmed in &mdash; &ldquo;all nations surrounded me&rdquo; (v.10), like bees, like a fire among thorns &mdash; the worshiper called out and was delivered. From this experience flows a settled, fearless confidence: &ldquo;The LORD is on my side; I will not fear. What can man do to me?&rdquo; (v.6), a line taken up directly in Hebrews 13:6. The deliverance is not credited to human strength but to God alone: &ldquo;The LORD is my strength and my song; he has become my salvation&rdquo; (v.14). Real rescue in the past becomes the ground of real boldness in the present. Because God has answered before, the believer can face opposition without fear.",
    },
    {
      id: "t3",
      title: "Better to Take Refuge in the LORD",
      ref: "Psalm 118:8&ndash;9",
      body: "&ldquo;It is better to take refuge in the LORD than to trust in man. It is better to take refuge in the LORD than to trust in princes&rdquo; (vv.8&ndash;9). These twin verses sit at the very center of the psalm, and by an old reckoning of chapters and verses they stand near the very center of the Bible itself. Their lesson is bracingly simple: human help &mdash; even the help of the powerful and the princely &mdash; is unreliable, but the LORD is a refuge that never fails. The worshiper has learned through deliverance that confidence placed in people will eventually disappoint, while confidence placed in God is never put to shame. This is not a counsel against all human relationships but a call to anchor our ultimate trust in God alone, the only refuge strong enough to bear the full weight of our hope.",
    },
    {
      id: "t4",
      title: "The Rejected Stone Become the Cornerstone",
      ref: "Psalm 118:22&ndash;23; Matthew 21:42; Acts 4:11; 1 Peter 2:7",
      body: "&ldquo;The stone that the builders rejected has become the cornerstone. This is the LORD&rsquo;s doing; it is marvelous in our eyes&rdquo; (vv.22&ndash;23). In its original setting, this may have spoken of a king or a nation despised by the powerful yet chosen by God for the place of honor. But the New Testament hears it ringing with the gospel. Jesus quoted it of himself after the parable of the wicked tenants (Matthew 21:42), identifying himself as the stone the builders &mdash; Israel&rsquo;s leaders &mdash; rejected, whom God exalted through resurrection. Peter preached it before the Sanhedrin (Acts 4:11) and wrote of Christ as the precious cornerstone (1 Peter 2:7). The pattern of the gospel is here in miniature: rejection by men, vindication by God. What the world discards, God makes the foundation of his whole building.",
    },
    {
      id: "t5",
      title: "Hosanna: Blessed Is He Who Comes",
      ref: "Psalm 118:24&ndash;26; Matthew 21:9; 26:30",
      body: "The psalm crescendos in worship: &ldquo;This is the day that the LORD has made; let us rejoice and be glad in it&rdquo; (v.24), followed by the cry &ldquo;Save us, we pray, O LORD!&rdquo; (v.25) and the blessing &ldquo;Blessed is he who comes in the name of the LORD&rdquo; (v.26). The Hebrew for &ldquo;Save us, we pray&rdquo; is &ldquo;Hosanna,&rdquo; and these were the very words the crowds shouted as Jesus rode into Jerusalem on Palm Sunday (Matthew 21:9). The pilgrims welcomed him with a psalm long sung at Passover, unknowingly hailing the One who would become the Passover Lamb. This same psalm, as the close of the Hallel, was very likely the hymn Jesus sang with his disciples after the Last Supper before going out to Gethsemane (Matthew 26:30). The words of this ancient song accompanied Jesus into both his triumph and his passion.",
    },
  ];

  const verses: VerseItem[] = [
    {
      id: "v1",
      ref: "Psalm 118:1&ndash;4",
      label: "Give Thanks: His Love Endures Forever",
      body: "&ldquo;Oh give thanks to the LORD, for he is good; for his steadfast love endures forever!&rdquo; The psalm opens with a sweeping summons to thanksgiving, repeated four times as three groups are each called to confess that &ldquo;his steadfast love endures forever&rdquo; &mdash; &ldquo;Let Israel say&rdquo; (the whole people), &ldquo;Let the house of Aaron say&rdquo; (the priests), and &ldquo;Let those who fear the LORD say&rdquo; (all true worshipers, including foreigners drawn to Israel&rsquo;s God). The fourfold refrain rings like a bell, establishing the theme of the entire psalm. Before any testimony of deliverance is given, the worshiper grounds everything in the unchanging character of God: he is good, and his covenant love (hesed) has no expiration. This is the bedrock on which all the rejoicing that follows is built.",
    },
    {
      id: "v2",
      ref: "Psalm 118:5&ndash;9",
      label: "The LORD Is on My Side",
      body: "&ldquo;Out of my distress I called on the LORD; the LORD answered me and set me free&rdquo; (v.5). The worshiper recounts his rescue and draws from it a fearless confidence: &ldquo;The LORD is on my side; I will not fear. What can man do to me?&rdquo; (v.6). With God as helper, he can look in triumph on those who hate him. Then comes the great central lesson of the psalm: &ldquo;It is better to take refuge in the LORD than to trust in man. It is better to take refuge in the LORD than to trust in princes&rdquo; (vv.8&ndash;9). Human help, however mighty, is unreliable; God alone is a refuge that never fails. These verses, by an old count, stand near the very center of the Bible, and their message is its center too: ultimate trust belongs to the LORD alone.",
    },
    {
      id: "v3",
      ref: "Psalm 118:10&ndash;14",
      label: "In the Name of the LORD I Cut Them Off",
      body: "&ldquo;All nations surrounded me; in the name of the LORD I cut them off!&rdquo; (v.10). The danger is intense and overwhelming: the worshiper is encircled on every side, swarmed like a man set upon by bees, threatened like a fire blazing among thorns. The repetition &mdash; &ldquo;they surrounded me, surrounded me on every side&rdquo; &mdash; conveys how desperate the situation was. Yet three times the refrain returns: &ldquo;in the name of the LORD I cut them off.&rdquo; Victory comes not by the worshiper&rsquo;s own power but through the name and might of God. The section closes with a confession that becomes a song of the redeemed in every age: &ldquo;The LORD is my strength and my song; he has become my salvation&rdquo; (v.14), echoing the song of Moses at the Red Sea (Exodus 15:2).",
    },
    {
      id: "v4",
      ref: "Psalm 118:15&ndash;18",
      label: "I Shall Not Die, but Live",
      body: "&ldquo;Glad songs of salvation are in the tents of the righteous: &lsquo;The right hand of the LORD does valiantly!&rsquo;&rdquo; (v.15). The tone turns to jubilant celebration. Three times the &ldquo;right hand of the LORD&rdquo; is exalted as the source of victory &mdash; the symbol of God&rsquo;s active, saving power. Then comes a triumphant declaration of life over death: &ldquo;I shall not die, but I shall live, and recount the deeds of the LORD&rdquo; (v.17). The worshiper had been brought near to death &mdash; &ldquo;The LORD has disciplined me severely, but he has not given me over to death&rdquo; (v.18) &mdash; yet was preserved to bear witness. Christian readers have long heard in these words an anticipation of resurrection: the One brought to the brink of death emerges alive to declare the works of God. Discipline did not destroy; it gave way to renewed life and praise.",
    },
    {
      id: "v5",
      ref: "Psalm 118:19&ndash;24",
      label: "The Stone the Builders Rejected",
      body: "&ldquo;Open to me the gates of righteousness, that I may enter through them and give thanks to the LORD&rdquo; (v.19). The procession arrives at the temple gates, and the worshiper asks entry to render thanks. Then comes the psalm&rsquo;s most famous prophecy: &ldquo;The stone that the builders rejected has become the cornerstone. This is the LORD&rsquo;s doing; it is marvelous in our eyes&rdquo; (vv.22&ndash;23). What the builders discarded as worthless, God set as the foundation of the whole structure. The New Testament applies this directly to Christ &mdash; rejected by the leaders, raised and exalted by God (Matthew 21:42; Acts 4:11; 1 Peter 2:7). From this marvel bursts the famous acclamation: &ldquo;This is the day that the LORD has made; let us rejoice and be glad in it&rdquo; (v.24), a day of salvation heard by the church as the day of resurrection.",
    },
    {
      id: "v6",
      ref: "Psalm 118:25&ndash;29",
      label: "Hosanna: Blessed Is He Who Comes",
      body: "&ldquo;Save us, we pray, O LORD! O LORD, we pray, give us success!&rdquo; (v.25). The Hebrew cry &ldquo;Save us, we pray&rdquo; is &ldquo;Hosanna,&rdquo; and the next words &mdash; &ldquo;Blessed is he who comes in the name of the LORD&rdquo; (v.26) &mdash; are the very acclamation the crowds shouted as Jesus entered Jerusalem (Matthew 21:9). The festival reaches its climax as the worshipers are blessed from the house of the LORD and the sacrifice is bound to the horns of the altar. The psalm ends where it began: &ldquo;You are my God, and I will give thanks to you; you are my God; I will extol you. Oh give thanks to the LORD, for he is good; for his steadfast love endures forever!&rdquo; (vv.28&ndash;29). The great refrain returns, sealing the whole psalm in thanksgiving to the God whose love never ends.",
    },
  ];

  const appSections: AppItem[] = [
    {
      id: "a1",
      title: "Build Your Life on the Rejected Cornerstone",
      body: "The most important question Psalm 118 presses upon us is what we will do with the stone the builders rejected. The leaders of Israel discarded Jesus as worthless, yet God made him the cornerstone of his entire saving plan. Peter warns that this same stone is either the foundation on which we build or the rock on which we stumble (1 Peter 2:6&ndash;8). There is no neutral ground. Have you built your life on Christ, the cornerstone, trusting his death and resurrection for your salvation? Or are you still among the builders who reject him for something that seems more useful or impressive? To rest your whole weight on this stone is to be founded on what God himself calls marvelous and will never let fall.",
    },
    {
      id: "a2",
      title: "Take Refuge in the LORD, Not in Man",
      body: "&ldquo;It is better to take refuge in the LORD than to trust in man&rdquo; (v.8). We are all tempted to place our deepest security in things that cannot finally hold us &mdash; in people, in leaders, in our own strength, in money, in approval. Psalm 118 gently exposes how fragile such trust is and calls us to anchor our ultimate confidence in God alone. This does not mean despising human help or community, but it does mean refusing to make any created thing our final refuge. Examine your heart: where are you leaning on man or prince in a way that belongs to God alone? Let the central verse of this psalm reorder your trust, so that you can say with the worshiper, &ldquo;The LORD is on my side; I will not fear.&rdquo;",
    },
    {
      id: "a3",
      title: "Rejoice in the Day the LORD Has Made",
      body: "&ldquo;This is the day that the LORD has made; let us rejoice and be glad in it&rdquo; (v.24). The worshiper does not wait for a perfect day to rejoice; he rejoices in the day God has given, the day of his deliverance. For the Christian, every day is one the LORD has made, and the Lord&rsquo;s Day in particular celebrates the resurrection that turned rejection into victory. Joy here is not a denial of hardship &mdash; the psalmist had just come through deep distress &mdash; but a deliberate choice to rejoice in the God who delivers. Cultivate the habit of receiving each day as a gift from his hand, looking for his steadfast love in it, and choosing gladness rooted not in circumstances but in the unchanging goodness of the LORD.",
    },
    {
      id: "a4",
      title: "Make Thanksgiving Your Refrain",
      body: "Psalm 118 begins and ends with the same call: &ldquo;Oh give thanks to the LORD, for he is good; for his steadfast love endures forever.&rdquo; Thanksgiving is the frame around the whole psalm, and it is meant to become the frame around our lives. When we have been delivered, the right response is not merely relief but recounting &mdash; telling out the deeds of the LORD (v.17). Make a practice of remembering specific rescues and naming them in gratitude. Let your prayers, like this psalm, return again and again to the goodness and the never-failing love of God. A grateful heart is a fortified heart; the worshiper who keeps the refrain of thanksgiving will find courage for distress and joy for the day the LORD has made.",
    },
  ];

  const reflectionQuestions: string[] = [
    "The psalm celebrates a rescue from deep distress. What deliverance in your own life can you recount with thanksgiving today?",
    "What does it mean for you to take refuge in the LORD rather than to trust in man or prince in your current circumstances?",
    "Jesus called himself the rejected stone become the cornerstone. Have you built your life on him, and what would it look like to rest your full weight on him?",
    "How can you cultivate the habit of rejoicing in &ldquo;the day the LORD has made&rdquo; even when the day brings difficulty?",
    "The crowds cried &lsquo;Hosanna&rsquo; &mdash; &lsquo;save us&rsquo; &mdash; to Jesus. Where do you most need to bring that same cry to him now?",
    "The psalm is framed by thanksgiving for God&rsquo;s steadfast love that endures forever. How might making thanksgiving your refrain reshape your daily prayers?",
  ];

  const closingPrayer =
    "Father, we give you thanks, for you are good and your steadfast love endures forever. We praise you that when we cried out from our distress, you answered us and set us free. Teach us to take refuge in you rather than in any created thing, and to say without fear, &ldquo;The LORD is on my side.&rdquo; We bless you for Jesus, the stone the builders rejected, whom you have made the cornerstone of our salvation; this is your doing, and it is marvelous in our eyes. Make us a people who rejoice in the day you have made and who never cease to cry, &ldquo;Hosanna &mdash; blessed is he who comes in the name of the LORD.&rdquo; Receive our thanksgiving, now and forever. Amen.";

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
          <div style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Bible Study Guide
          </div>
          <h1 style={{ fontSize: "2.6rem", fontWeight: 800, margin: "0 0 0.75rem", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Psalm 118
          </h1>
          <p style={{ color: MUTED, fontSize: "1.15rem", margin: "0 0 1.75rem", lineHeight: 1.5 }}>
            The climactic thanksgiving of the Egyptian Hallel &mdash; the rejected stone become the cornerstone.
          </p>
          <blockquote
            style={{
              margin: 0,
              padding: "1.5rem 1.75rem",
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderLeft: `4px solid ${TEAL}`,
              borderRadius: 12,
            }}
          >
            <p
              style={{ fontSize: "1.2rem", lineHeight: 1.6, margin: "0 0 0.6rem", fontStyle: "italic", color: TEXT }}
              dangerouslySetInnerHTML={{ __html: "&ldquo;The stone that the builders rejected has become the cornerstone. This is the LORD&rsquo;s doing; it is marvelous in our eyes. This is the day that the LORD has made; let us rejoice and be glad in it.&rdquo;" }}
            />
            <cite style={{ color: TEAL, fontSize: "0.95rem", fontStyle: "normal", fontWeight: 700 }}>Psalm 118:22&ndash;24</cite>
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
                  border: `1px solid ${activeTab ? GREEN : BORDER}`,
                  background: activeTab ? GREEN : "transparent",
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
            <h2 style={sectionTitle("Overview", GREEN)}>Overview</h2>
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
                      "The psalm moves as a liturgical drama: a fourfold call to thanksgiving (vv.1&ndash;4), a personal testimony of deliverance and the confidence it breeds (vv.5&ndash;18), a procession to the temple gates where the rejected stone becomes the cornerstone (vv.19&ndash;24), and a closing acclamation of &lsquo;Hosanna&rsquo; and blessing on the one who comes in the name of the LORD (vv.25&ndash;29). The same refrain &mdash; &lsquo;his steadfast love endures forever&rsquo; &mdash; opens and closes the whole.",
                  }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <h3 style={{ color: GOLD, fontSize: "1.1rem", fontWeight: 700, margin: "0 0 0.75rem" }}>Context</h3>
                <p
                  style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, margin: 0 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "Psalm 118 closes the Egyptian Hallel (Psalms 113&ndash;118) sung at Passover, and was very likely the hymn Jesus sang with his disciples after the Last Supper (Matthew 26:30). &lsquo;Save us&rsquo; (v.25) is &lsquo;Hosanna,&rsquo; and &lsquo;Blessed is he who comes in the name of the LORD&rsquo; (v.26) is what the crowds shouted at the triumphal entry (Matthew 21:9). The rejected stone become the cornerstone (vv.22&ndash;23) is applied to Christ repeatedly (Matthew 21:42; Acts 4:11; 1 Peter 2:7), and verse 8 is often noted as the center of the Bible by verse count.",
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
