"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Psalm3Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "CE8QbkUCNK4", title: "Psalm 3 Explained: A Morning Prayer of Trust" },
    { videoId: "Q2oNOlXzBhY", title: "David and Absalom: The Story Behind Psalm 3" },
    { videoId: "8phkAg8PMHE", title: "The LORD, the Lifter of My Head" },
    { videoId: "fNk_zzaMoSs", title: "Sleep as an Act of Faith: Praying Psalm 3" },
  ];

  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const card: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 16,
    padding: "1.5rem",
  };

  const themes = [
    {
      id: "t1",
      color: ROSE,
      title: "How Many Are My Foes",
      cross: "Psalm 3:1&ndash;2 &middot; 2 Samuel 15:13 &middot; Psalm 25:19",
      body:
        "The psalm opens not with a polite invocation but with an honest cry over the sheer <strong>quantity</strong> of opposition: &ldquo;O LORD, how many are my foes! Many are rising against me.&rdquo; The Hebrew piles up the word <em>rabbim</em> &mdash; &lsquo;many, many, many&rsquo; &mdash; three times in two verses. David is not exaggerating. When Absalom&rsquo;s revolt swept Jerusalem, &ldquo;the hearts of the men of Israel have gone after Absalom&rsquo; (2 Samuel 15:13). The lament psalms teach us that faith does not require us to minimize the scale of our trouble. David names the math precisely &mdash; and then refuses to let the math have the last word. Naming the enemy honestly is the first step toward bringing it before God rather than letting it fester in silence.",
    },
    {
      id: "t2",
      color: PURPLE,
      title: "The Taunt: No Salvation in God",
      cross: "Psalm 3:2 &middot; Psalm 22:7&ndash;8 &middot; Matthew 27:43",
      body:
        "The sharpest pain is not the spears but the sneer: &ldquo;Many are saying of my soul, there is no salvation for him in God. <em>Selah</em>.&rdquo; This is spiritual warfare aimed at the conscience. The enemies do not merely want David dead &mdash; they want him to believe that God has abandoned him, perhaps because of his own sin with Bathsheba and the judgment Nathan foretold (2 Samuel 12:10&ndash;12). The same taunt is hurled at Christ on the cross: &ldquo;He trusts in God; let God deliver him now&rdquo; (Matthew 27:43, echoing Psalm 22:8). The accusation that <strong>God will not save you</strong> is the oldest weapon of the enemy. Psalm 3 models how to answer it &mdash; not by arguing, but by turning to address God directly in the very next breath.",
    },
    {
      id: "t3",
      color: GOLD,
      title: "A Shield and the Lifter of My Head",
      cross: "Psalm 3:3&ndash;4 &middot; Genesis 15:1 &middot; Psalm 27:6",
      body:
        "Against the taunt David sets a defiant &ldquo;But you, O LORD.&rdquo; God is a <strong>shield about me</strong> &mdash; not merely a shield in front, but a protection on every side (the same word God speaks to Abram in Genesis 15:1). God is &ldquo;my glory&rdquo; &mdash; the one who restores honor to a king publicly shamed. And God is &ldquo;the lifter of my head.&rdquo; A bowed head is the posture of defeat, grief, and shame; to lift the head is to restore dignity, courage, and hope (compare Psalm 27:6, &lsquo;now my head shall be lifted up above my enemies&rsquo;). David then testifies: &ldquo;I cried aloud to the LORD, and he answered me from his holy hill. <em>Selah</em>.&rdquo; The God taunted as absent answers from Zion.",
    },
    {
      id: "t4",
      color: TEAL,
      title: "I Lay Down and Slept",
      cross: "Psalm 3:5&ndash;6 &middot; Psalm 4:8 &middot; Leviticus 26:6",
      body:
        "The hinge of the psalm is a quiet miracle: &ldquo;I lay down and slept; I woke again, for the LORD sustained me.&rdquo; In the middle of a military coup, with thousands hunting him, David <strong>sleeps</strong>. Sleep is an act of trust &mdash; it is the body&rsquo;s daily confession that we are not in control, that the world runs while we are unconscious, that someone else holds the watch. To sleep soundly amid danger is to entrust the night to God. Waking again is grace: &lsquo;I woke&rsquo; presumes the possibility that he might not have. On this foundation David declares: &ldquo;I will not be afraid of many thousands of people who have set themselves against me all around.&rdquo; The many of verse 1 have not shrunk &mdash; David&rsquo;s confidence has grown.",
    },
    {
      id: "t5",
      color: GREEN,
      title: "Salvation Belongs to the LORD",
      cross: "Psalm 3:7&ndash;8 &middot; Jonah 2:9 &middot; Revelation 7:10",
      body:
        "The psalm closes with petition and benediction. &ldquo;Arise, O LORD! Save me, O my God!&rdquo; echoes the cry over the ark in the wilderness (Numbers 10:35). David is bold &mdash; he asks God to strike the cheek and break the teeth of the wicked, the vivid imagery of an enemy rendered harmless. Then the great summary: &ldquo;Salvation belongs to the LORD.&rdquo; This is the heart of biblical faith &mdash; rescue is not a human achievement but a divine gift (Jonah 2:9; Revelation 7:10). And the psalm that began with one man&rsquo;s peril ends with a prayer for the whole community: &ldquo;Your blessing be on your people! <em>Selah</em>.&rdquo; The king&rsquo;s deliverance becomes the people&rsquo;s blessing.",
    },
    {
      id: "t6",
      color: PURPLE,
      title: "The First Selah and the Morning Pairing",
      cross: "Psalm 3:2, 4, 8 &middot; Psalm 4 &middot; Psalm 5:3",
      body:
        "Psalm 3 contains the <strong>first appearance of Selah</strong> in the Psalter &mdash; a term whose exact meaning is uncertain but which likely signals a musical or reflective pause, an invitation to stop and weigh what has been said. It falls three times here: after the taunt, after God&rsquo;s answer, after the benediction. The early church and Jewish tradition long read Psalm 3 as a <strong>morning psalm</strong> &mdash; &lsquo;I lay down and slept; I woke again&rsquo; &mdash; paired with Psalm 4 as its evening counterpart (&lsquo;in peace I will both lie down and sleep&rsquo;). Together they bracket the day in trust: we wake because God sustained us; we sleep because God keeps us. The rhythm of rest and rising becomes a daily liturgy of dependence.",
    },
  ];

  const verses = [
    {
      id: "v1",
      color: ROSE,
      ref: "Psalm 3:1&ndash;2",
      label: "The Complaint",
      body:
        "<strong>&ldquo;O LORD, how many are my foes! Many are rising against me; many are saying of my soul, there is no salvation for him in God. Selah.&rdquo;</strong><br/><br/>The superscription sets the scene: &lsquo;A Psalm of David, when he fled from Absalom his son&rsquo; &mdash; the events of 2 Samuel 15&ndash;17, when David&rsquo;s own son seized the throne and David fled Jerusalem barefoot and weeping up the Mount of Olives. The psalm begins where David is: surrounded. The triple &lsquo;many&rsquo; hammers home the odds. But the most wounding blow is verbal &mdash; the enemies declare that even God will not save him. The first <em>Selah</em> of the Psalter falls here, inviting us to sit with the weight of the accusation before the answer comes.",
    },
    {
      id: "v2",
      color: GOLD,
      ref: "Psalm 3:3&ndash;4",
      label: "The Confidence",
      body:
        "<strong>&ldquo;But you, O LORD, are a shield about me, my glory, and the lifter of my head. I cried aloud to the LORD, and he answered me from his holy hill. Selah.&rdquo;</strong><br/><br/>The decisive word is <em>but</em>. Over against the many who say there is no salvation, David sets the one who saves. Three titles answer three fears: a <strong>shield</strong> answers the threat of attack; <strong>my glory</strong> answers the public shame of a fugitive king; the <strong>lifter of my head</strong> answers the bowed posture of despair. The tense shifts to testimony &mdash; &lsquo;I cried&rsquo; and &lsquo;he answered&rsquo; &mdash; God replies from his holy hill (Zion), the very city David has fled. Distance from the sanctuary does not mean distance from the God of the sanctuary.",
    },
    {
      id: "v3",
      color: TEAL,
      ref: "Psalm 3:5&ndash;6",
      label: "The Peace",
      body:
        "<strong>&ldquo;I lay down and slept; I woke again, for the LORD sustained me. I will not be afraid of many thousands of people who have set themselves against me all around.&rdquo;</strong><br/><br/>Here is the psalm&rsquo;s key verse and its emotional center. The man who could not sleep for fear now sleeps and wakes, and credits God: &lsquo;the LORD sustained me.&rsquo; The verb suggests being upheld, propped, supported through the helpless hours. From this experience of preservation flows fearless resolve: the &lsquo;many&rsquo; of verse 1 are now reckoned as &lsquo;many thousands,&rsquo; and David still will not fear. Faith does not deny the size of the threat; it relocates the threat under the larger reality of God&rsquo;s sustaining hand.",
    },
    {
      id: "v4",
      color: GREEN,
      ref: "Psalm 3:7&ndash;8",
      label: "Petition and Benediction",
      body:
        "<strong>&ldquo;Arise, O LORD! Save me, O my God! For you strike all my enemies on the cheek; you break the teeth of the wicked. Salvation belongs to the LORD; your blessing be on your people! Selah.&rdquo;</strong><br/><br/>David turns from confidence back to petition &mdash; trust does not make us passive; it makes us bold to ask. &lsquo;Arise, O LORD&rsquo; recalls the ancient battle cry over the ark (Numbers 10:35). The imagery of striking the cheek and breaking teeth pictures enemies disarmed and rendered harmless, not personal vengeance. The climactic confession, &lsquo;Salvation belongs to the LORD,&rsquo; is the theological summit of the psalm. And it ends outward: the deliverance of the one becomes the blessing of the many &mdash; &lsquo;your blessing be on your people.&rsquo; The final <em>Selah</em> lets the benediction linger.",
    },
  ];

  const applications = [
    {
      color: ROSE,
      title: "Bring the Real Numbers to God",
      body:
        "Psalm 3 gives us permission to be specific about our trouble. David does not pray a vague &lsquo;Lord, things are a bit hard.&rsquo; He counts the foes, names the taunt, describes the encirclement. Honest prayer is not unbelief &mdash; it is the prelude to faith. When you are overwhelmed, do not edit your prayer down to something more spiritual-sounding. Tell God exactly how many, exactly how loud, exactly how afraid. Then, like David, let the honest complaint become the on-ramp to the great &lsquo;but you, O LORD.&rsquo;",
    },
    {
      color: TEAL,
      title: "Let Sleep Be a Confession of Faith",
      body:
        "Few things expose our trust like the ability to rest. Anxiety keeps us awake, scanning for threats, rehearsing worst cases, trying to manage the night by sheer wakefulness. David shows another way: to lie down and sleep is to hand the watch to God. &lsquo;He who keeps Israel will neither slumber nor sleep&rsquo; (Psalm 121:4) &mdash; so we can. Tonight, when you put your head down, make it a deliberate act of entrustment. You are not abandoning your post; you are confessing that the post was never finally yours to keep.",
    },
    {
      color: GOLD,
      title: "Answer the Accusation by Addressing God",
      body:
        "The taunt &lsquo;there is no salvation for him in God&rsquo; is still whispered &mdash; sometimes by others, often by our own accusing hearts, especially when we have failed. Notice that David does not argue with the accusers. He turns and speaks to God: &lsquo;But you, O LORD, are a shield about me.&rsquo; The best answer to the lie that God has abandoned you is to address the God who has not. Move from talking <em>about</em> your fears to talking <em>to</em> your Father. The accusation loses its grip the moment prayer begins.",
    },
    {
      color: GREEN,
      title: "Pray for Your People, Not Only Yourself",
      body:
        "Psalm 3 ends where private deliverance opens into public blessing: &lsquo;your blessing be on your people.&rsquo; The king does not hoard his rescue. When God lifts your head, let your gratitude widen into intercession &mdash; for your family, your church, those still surrounded by their own many foes. Salvation that belongs to the LORD is never merely individual; it is meant to overflow. Make your own deliverance an occasion to ask God&rsquo;s blessing on the whole community of faith.",
    },
  ];

  const questions = [
    "What are the &lsquo;many foes&rsquo; in your life right now &mdash; the troubles, accusations, or pressures that feel overwhelming? Have you named them honestly before God, or only carried them silently?",
    "Where do you hear the taunt &lsquo;there is no salvation for him in God&rsquo; &mdash; from others, from circumstances, or from your own heart? How might you answer it by turning to address God directly?",
    "David calls God &lsquo;the lifter of my head.&rsquo; In what area of life is your head bowed in shame, grief, or defeat, and what would it mean for God to lift it?",
    "How well do you sleep when you are anxious? What would it look like to make lying down at night a deliberate act of trust, as David did in the middle of a coup?",
    "The psalm moves from &lsquo;save me&rsquo; to &lsquo;salvation belongs to the LORD&rsquo; to &lsquo;your blessing be on your people.&rsquo; How can your own need for rescue widen into prayer for others?",
    "Psalm 3 (morning) is paired with Psalm 4 (evening). How might praying these two psalms bracket your day in a rhythm of trust &mdash; waking because God sustained you, sleeping because God keeps you?",
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: TEAL, textTransform: "uppercase" }}>Psalms &middot; Book One</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Psalm 3: The Morning Psalm of Trust
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }}>
            Written as David fled from his son Absalom, Psalm 3 turns a desperate night into a confession of faith. Surrounded by many foes and taunted that even God will not save him, David sleeps, wakes, and declares that salvation belongs to the LORD.
          </p>
          <div style={{ marginTop: "1.5rem", background: `${TEAL}10`, border: `1px solid ${TEAL}30`, borderLeft: `3px solid ${TEAL}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <div style={{ fontWeight: 800, color: TEAL, fontSize: "0.8rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.4rem" }}>Key Verse &middot; Psalm 3:5</div>
            <p style={{ color: TEXT, fontSize: "1.2rem", lineHeight: 1.6, fontStyle: "italic", margin: 0 }}
              dangerouslySetInnerHTML={{ __html: "&ldquo;I lay down and slept; I woke again, for the LORD sustained me.&rdquo;" }} />
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => { setTab(t); setOpen(null); }}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t ? TEAL : "transparent", color: tab === t ? "#fff" : MUTED,
                border: `1px solid ${tab === t ? TEAL : BORDER}`, cursor: "pointer", transition: "all .18s" }}>
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: TEAL }}>Summary</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "Psalm 3 is the first morning prayer of the Psalter and the first psalm with a historical superscription. It belongs to the long night of David&rsquo;s flight from Absalom, when his own son raised an army against him and the city of Jerusalem turned its heart away. Surrounded and slandered &mdash; the enemies sneering that &lsquo;there is no salvation for him in God&rsquo; &mdash; David does the unexpected. He addresses the LORD as a shield about him, his glory, and the lifter of his head. Then, in the most striking line of all, he simply goes to sleep and wakes again, sustained by God through the dangerous hours. From that experience of preservation he draws fearless resolve and the great confession that &lsquo;salvation belongs to the LORD,&rsquo; closing with a blessing not on himself but on all God&rsquo;s people." }} />
            </div>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: PURPLE }}>Structure</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "The psalm unfolds in four movements, each marked or echoed by the rhythm of <em>Selah</em>. Verses 1&ndash;2 voice <strong>the complaint</strong> &mdash; the many foes and the cutting taunt. Verses 3&ndash;4 pivot to <strong>the confidence</strong> &mdash; &lsquo;but you, O LORD&rsquo; &mdash; with God as shield, glory, and the lifter of the head, answering from his holy hill. Verses 5&ndash;6 give us <strong>the peace</strong> &mdash; lying down, sleeping, waking, and refusing to fear the many thousands. Verses 7&ndash;8 close with <strong>petition and benediction</strong> &mdash; &lsquo;Arise, O LORD! Save me!&rsquo; &mdash; resolving into &lsquo;salvation belongs to the LORD&rsquo; and a blessing on God&rsquo;s people. Three <em>Selahs</em> punctuate the song, the very first occurrences of the term in the Bible." }} />
            </div>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: GOLD }}>Historical Context</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "The superscription anchors Psalm 3 to one of the darkest chapters of David&rsquo;s life: the rebellion of Absalom recorded in 2 Samuel 15&ndash;17. Absalom, David&rsquo;s handsome and ambitious son, spent years stealing the hearts of Israel before declaring himself king at Hebron. David fled Jerusalem, crossing the Kidron and climbing the Mount of Olives weeping, his head covered and his feet bare (2 Samuel 15:30). Along the way he was cursed by Shimei and counseled to surrender. This is the backdrop of &lsquo;how many are my foes.&rsquo; Jewish and Christian tradition has long read Psalm 3 as a <strong>morning psalm</strong> &mdash; the prayer of one who woke to find that God had carried him through the night &mdash; pairing it with Psalm 4 as its evening companion. Together the two psalms frame the whole rhythm of the day in dependence on God." }} />
            </div>
          </div>
        )}

        {tab === "themes" && (
          <div style={card}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: TEAL }}>Key Themes</h2>
            <div>
              {themes.map((th) => {
                const isOpen = open === th.id;
                return (
                  <div key={th.id}>
                    <button type="button" onClick={() => toggle(th.id)}
                      style={{ width: "100%", textAlign: "left", display: "flex", justifyContent: "space-between",
                        alignItems: "center", padding: "1rem 1.25rem", background: isOpen ? `${th.color}12` : "transparent",
                        border: `1px solid ${isOpen ? th.color + "40" : BORDER}`, borderRadius: 12, cursor: "pointer",
                        marginBottom: 8, color: TEXT, fontWeight: 700, transition: "all .2s" }}>
                      <span>{th.title}</span>
                      <span style={{ color: th.color }}>{isOpen ? "-" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div style={{ background: `${th.color}0A`, border: `1px solid ${th.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                        <div style={{ fontSize: "0.78rem", fontWeight: 700, color: th.color, letterSpacing: 0.5, marginBottom: "0.6rem" }}
                          dangerouslySetInnerHTML={{ __html: th.cross }} />
                        <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
                          dangerouslySetInnerHTML={{ __html: th.body }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "verse" && (
          <div style={card}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: PURPLE }}>Verse by Verse</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}
              dangerouslySetInnerHTML={{ __html: "Work through Psalm 3 in its four movements. Each section opens to reveal the text and a close reading." }} />
            <div>
              {verses.map((v) => {
                const isOpen = open === v.id;
                return (
                  <div key={v.id}>
                    <button type="button" onClick={() => toggle(v.id)}
                      style={{ width: "100%", textAlign: "left", display: "flex", justifyContent: "space-between",
                        alignItems: "center", padding: "1rem 1.25rem", background: isOpen ? `${v.color}12` : "transparent",
                        border: `1px solid ${isOpen ? v.color + "40" : BORDER}`, borderRadius: 12, cursor: "pointer",
                        marginBottom: 8, color: TEXT, fontWeight: 700, transition: "all .2s" }}>
                      <span dangerouslySetInnerHTML={{ __html: `${v.ref} &mdash; ${v.label}` }} />
                      <span style={{ color: v.color }}>{isOpen ? "-" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div style={{ background: `${v.color}0A`, border: `1px solid ${v.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                        <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
                          dangerouslySetInnerHTML={{ __html: v.body }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "application" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GREEN }}>Living Psalm 3</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {applications.map((a) => (
                  <div key={a.title} style={{ background: `${a.color}08`, border: `1px solid ${a.color}25`, borderRadius: 12, padding: "1.1rem 1.25rem" }}>
                    <h3 style={{ fontWeight: 800, color: a.color, marginBottom: "0.4rem", marginTop: 0 }}>{a.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: a.body }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GOLD }}>Reflection Questions</h2>
              <ol style={{ color: MUTED, lineHeight: 1.8, paddingLeft: "1.25rem", margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {questions.map((q, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: q }} />
                ))}
              </ol>
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: TEAL }}>Video Teaching</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {videoItems.map((v) => (
                  <div key={v.videoId}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ color: MUTED, fontSize: "0.85rem", marginTop: "0.5rem", fontWeight: 600 }}>{v.title}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ ...card, background: `${PURPLE}10`, border: `1px solid ${PURPLE}30` }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: PURPLE }}>A Closing Prayer</h2>
              <p style={{ color: TEXT, lineHeight: 1.9, fontStyle: "italic", margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "O LORD, how many are my foes &mdash; yet you are a shield about me, my glory, and the lifter of my head. When voices within and without say there is no salvation for me in you, teach me to answer by turning my face to yours. Sustain me through the night, that I may lie down and sleep and wake again unafraid. Arise, O LORD; save me, O my God. For salvation belongs to you alone &mdash; let your blessing rest on all your people. Amen." }} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
