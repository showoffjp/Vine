"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Psalm4Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "rNcERbkSTXU", title: "Psalm 4 Explained: An Evening Prayer of Peace" },
    { videoId: "OjJ7GkWCHvA", title: "Be Angry and Do Not Sin: Psalm 4:4 and Ephesians 4:26" },
    { videoId: "pHBzJ2dVXgk", title: "Joy Greater Than Grain and Wine" },
    { videoId: "3sO5FH2ybPY", title: "In Peace I Will Lie Down and Sleep" },
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
      color: TEAL,
      title: "Answer Me, O God of My Righteousness",
      cross: "Psalm 4:1 &middot; Psalm 17:1 &middot; 2 Corinthians 5:21",
      body:
        "The psalm opens with confident urgency: &ldquo;Answer me when I call, O God of my righteousness! You have given me relief when I was in distress.&rdquo; David does not approach as one trusting his own merit &mdash; he calls God the <strong>God of my righteousness</strong>, the source and guarantor of his right standing. The plea &lsquo;answer me&rsquo; assumes a God who hears and responds. And the prayer is anchored in memory: &lsquo;you have given me relief when I was in distress&rsquo; &mdash; literally, you made room for me in a tight place. Past deliverance fuels present boldness. The New Testament deepens this title: our righteousness is finally not our own but Christ&rsquo;s, &lsquo;that in him we might become the righteousness of God&rsquo; (2 Corinthians 5:21).",
    },
    {
      id: "t2",
      color: ROSE,
      title: "How Long Will You Love Vain Words?",
      cross: "Psalm 4:2&ndash;3 &middot; Psalm 2:1 &middot; 2 Timothy 2:19",
      body:
        "David turns to address &ldquo;the sons of men&rdquo; who turn his honor into shame and &ldquo;love vain words and seek after lies. <em>Selah</em>.&rdquo; They chase emptiness and falsehood &mdash; perhaps the slander and self-serving counsel that swirl around a troubled king. To them David announces a settled truth: &ldquo;The LORD has set apart the godly for himself; the LORD hears when I call to him.&rdquo; The word <strong>set apart</strong> speaks of a covenant people God has marked as his own. Against the loud confidence of those who love lies stands the quiet certainty of one who knows he belongs to God and is heard. &lsquo;The Lord knows those who are his&rsquo; (2 Timothy 2:19).",
    },
    {
      id: "t3",
      color: GOLD,
      title: "Be Angry and Do Not Sin",
      cross: "Psalm 4:4&ndash;5 &middot; Ephesians 4:26 &middot; James 1:19&ndash;20",
      body:
        "&ldquo;Be angry, and do not sin; ponder in your own hearts on your beds, and be silent. <em>Selah</em>.&rdquo; This is one of the most quoted lines in the Psalter, taken up by <strong>Paul in Ephesians 4:26</strong> as wisdom for the church. Anger is not forbidden &mdash; it is to be governed: feel it, but do not let it carry you into sin. The remedy prescribed is striking: go to your bed, search your own heart, and grow quiet. Stillness and self-examination disarm the fury that words would inflame. Then comes the constructive turn (v. 5): &lsquo;Offer right sacrifices, and put your trust in the LORD.&rsquo; The way out of restless anger is worship offered in sincerity and faith placed firmly in God.",
    },
    {
      id: "t4",
      color: PURPLE,
      title: "Lift Up the Light of Your Face",
      cross: "Psalm 4:6 &middot; Numbers 6:24&ndash;26 &middot; 2 Corinthians 4:6",
      body:
        "&ldquo;There are many who say, who will show us some good? Lift up the light of your face upon us, O LORD!&rdquo; The crowd cries for &lsquo;some good&rsquo; &mdash; any improvement in fortune, any tangible blessing. David answers their generic longing with a specific, higher request: the <strong>light of God&rsquo;s face</strong>. The phrase deliberately echoes the priestly blessing &mdash; &lsquo;the LORD make his face to shine upon you&rsquo; (Numbers 6:25). The deepest human need is not better circumstances but the favorable presence of God himself. Paul applies the same image to the gospel: God &lsquo;has shone in our hearts to give the light of the knowledge of the glory of God in the face of Jesus Christ&rsquo; (2 Corinthians 4:6).",
    },
    {
      id: "t5",
      color: GREEN,
      title: "Joy Greater Than Grain and Wine",
      cross: "Psalm 4:7 &middot; Habakkuk 3:17&ndash;18 &middot; Philippians 4:11&ndash;12",
      body:
        "&ldquo;You have put more joy in my heart than they have when their grain and wine abound.&rdquo; Here is the heart of the psalm&rsquo;s contentment. The world measures gladness by harvest &mdash; full barns, overflowing vats, material abundance. David testifies to a joy that runs <strong>deeper than prosperity</strong>, given by God directly into the heart, independent of the size of the crop. This is the secret Paul learned: &lsquo;I have learned in whatever situation I am to be content&rsquo; (Philippians 4:11). It is Habakkuk&rsquo;s defiant joy when the fields fail (Habakkuk 3:17&ndash;18). When God is your portion, your joy does not rise and fall with your circumstances.",
    },
    {
      id: "t6",
      color: TEAL,
      title: "In Peace I Will Both Lie Down and Sleep",
      cross: "Psalm 4:8 &middot; Psalm 3:5 &middot; Proverbs 3:24",
      body:
        "The psalm closes as an evening prayer: &ldquo;In peace I will both lie down and sleep; for you alone, O LORD, make me dwell in safety.&rdquo; Where Psalm 3 is the morning psalm of one who woke sustained, Psalm 4 is the <strong>evening psalm</strong> of one who lies down in trust. The peace is comprehensive &mdash; &lsquo;in peace I will both lie down and sleep&rsquo; &mdash; and its ground is the exclusive sufficiency of God: &lsquo;you alone.&rsquo; Not armies, not allies, not full barns, but the LORD alone makes him dwell secure. &lsquo;When you lie down, you will not be afraid; your sleep will be sweet&rsquo; (Proverbs 3:24). The day that began in faith ends in rest.",
    },
  ];

  const verses = [
    {
      id: "v1",
      color: TEAL,
      ref: "Psalm 4:1",
      label: "The Opening Cry",
      body:
        "<strong>&ldquo;Answer me when I call, O God of my righteousness! You have given me relief when I was in distress. Be gracious to me and hear my prayer.&rdquo;</strong><br/><br/>The psalm begins with bold, confident prayer. David does not wonder whether God will listen; he calls God &lsquo;the God of my righteousness&rsquo; &mdash; the one who establishes and vindicates him. The opening leans on history: &lsquo;you have given me relief&rsquo; (you enlarged me when I was hemmed in). Remembered grace becomes the basis of present petition. The verse closes with humility &mdash; &lsquo;be gracious to me&rsquo; &mdash; holding confidence and dependence together.",
    },
    {
      id: "v2",
      color: ROSE,
      ref: "Psalm 4:2&ndash;3",
      label: "To the Sons of Men",
      body:
        "<strong>&ldquo;O men, how long shall my honor be turned into shame? How long will you love vain words and seek after lies? Selah. But know that the LORD has set apart the godly for himself; the LORD hears when I call to him.&rdquo;</strong><br/><br/>David turns from God to confront his opponents. They prize emptiness and falsehood and trade his honor for shame. His answer is not retaliation but assurance: God has <em>set apart</em> the godly as his own treasured possession, and he hears their prayers. The certainty that he belongs to God and is heard by God is enough to steady David against the noise of those who love lies.",
    },
    {
      id: "v3",
      color: GOLD,
      ref: "Psalm 4:4&ndash;5",
      label: "Be Angry and Do Not Sin",
      body:
        "<strong>&ldquo;Be angry, and do not sin; ponder in your own hearts on your beds, and be silent. Selah. Offer right sacrifices, and put your trust in the LORD.&rdquo;</strong><br/><br/>This is the counsel Paul borrows in Ephesians 4:26. Anger is permitted but bounded &mdash; do not sin in it. The discipline is inward and quiet: on your bed, search your heart and be still rather than letting anger spill into rash words. Then comes the positive command &mdash; &lsquo;offer right sacrifices, and put your trust in the LORD.&rsquo; Sincere worship and settled trust are the antidote to the restlessness that fuels sin.",
    },
    {
      id: "v4",
      color: PURPLE,
      ref: "Psalm 4:6&ndash;7",
      label: "The Light of Your Face",
      body:
        "<strong>&ldquo;There are many who say, who will show us some good? Lift up the light of your face upon us, O LORD! You have put more joy in my heart than they have when their grain and wine abound.&rdquo;</strong><br/><br/>The crowd longs vaguely for &lsquo;some good&rsquo; &mdash; any improvement. David redirects the longing to its true object: the shining of God&rsquo;s face (Numbers 6:25). Then he testifies to the result &mdash; a joy in the heart greater than the gladness of a record harvest. God-given joy outweighs the abundance of grain and wine; the presence of God satisfies more deeply than any material increase ever could.",
    },
    {
      id: "v5",
      color: GREEN,
      ref: "Psalm 4:8",
      label: "The Peace of Sleep",
      body:
        "<strong>&ldquo;In peace I will both lie down and sleep; for you alone, O LORD, make me dwell in safety.&rdquo;</strong><br/><br/>The key verse and the psalm&rsquo;s serene conclusion. Having entrusted his cause, his anger, his longing, and his joy to God, David lies down in peace. The peace is whole &mdash; &lsquo;both lie down and sleep&rsquo; &mdash; and its sole foundation is the LORD: &lsquo;you alone.&rsquo; This is the evening counterpart to Psalm 3:5. The two psalms together teach a daily rhythm of trust: we wake because God sustains us, and we sleep because God alone keeps us safe.",
    },
  ];

  const applications = [
    {
      color: TEAL,
      title: "Pray with Confidence Rooted in Past Grace",
      body:
        "David prays &lsquo;answer me&rsquo; because &lsquo;you have given me relief.&rsquo; Remembered deliverance is the fuel for present boldness. When you pray, do not start from a blank anxiety &mdash; start from the record of God&rsquo;s faithfulness. Recall the tight places he has already enlarged, the prayers he has already answered. Let that history give your prayers the same confidence David shows: not presumption, but trust grounded in a God who has proven himself before.",
    },
    {
      color: GOLD,
      title: "Handle Anger the Psalm 4 Way",
      body:
        "&lsquo;Be angry, and do not sin&rsquo; &mdash; Scripture neither shames anger nor licenses it. The prescription is concrete: go to your bed, search your own heart, and be silent before God. So much sin happens in the gap between feeling anger and acting on it &mdash; the rash reply, the late-night message, the words you cannot unsay. Psalm 4 (and Paul after it, Ephesians 4:26) counsels stillness and self-examination instead. When anger rises, do not feed it with speech; quiet it with reflection and entrust the matter to God.",
    },
    {
      color: GREEN,
      title: "Seek Joy Deeper Than Circumstances",
      body:
        "The world asks &lsquo;who will show us some good?&rsquo; and measures the answer in grain and wine &mdash; in raises, possessions, and pleasant circumstances. David has found a joy that does not depend on the harvest. When your contentment is tethered to your bank balance or your comfort, every downturn shakes your peace. Ask instead for the light of God&rsquo;s face. The joy he gives into the heart is steadier and deeper than any abundance, and it remains when the barns are empty.",
    },
    {
      color: PURPLE,
      title: "End the Day in Trust",
      body:
        "Psalm 4:8 is a prayer to pray as you turn out the light. After the cares, conflicts, and unfinished business of the day, lay it all down with David&rsquo;s words: &lsquo;in peace I will both lie down and sleep, for you alone make me dwell in safety.&rsquo; Sleep is a daily relinquishing of control &mdash; a confession that the LORD alone keeps you. Make the last act of your day an act of faith, releasing tomorrow into the hands of the God who never sleeps.",
    },
  ];

  const questions = [
    "David begins by remembering that God &lsquo;gave relief when I was in distress.&rsquo; What past deliverances can you recall, and how might remembering them give you confidence to pray boldly now?",
    "Where in your life are you tempted to &lsquo;love vain words and seek after lies&rsquo; &mdash; chasing things that are ultimately empty? What would it look like to turn instead to the God who has set you apart for himself?",
    "How do you typically handle anger? What would change if you practiced David&rsquo;s counsel to &lsquo;ponder in your own heart on your bed, and be silent&rsquo; before responding?",
    "The crowd asks &lsquo;who will show us some good?&rsquo; Where are you looking for &lsquo;good&rsquo; &mdash; and how would seeking the light of God&rsquo;s face reorder those desires?",
    "David has &lsquo;more joy than when grain and wine abound.&rsquo; Is your joy tied to your circumstances and possessions, or does it rest in God himself? How can you tell the difference?",
    "Psalm 4:8 ends the day in peaceful sleep, trusting that the LORD alone keeps us safe. What worries do you carry to bed, and how might you make lying down a deliberate act of trust tonight?",
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: PURPLE, textTransform: "uppercase" }}>Psalms &middot; Book One</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Psalm 4: The Evening Psalm of Peace
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }}>
            The evening companion to Psalm 3, this psalm moves from confident prayer through the discipline of anger to a joy deeper than any harvest &mdash; and ends with David lying down to sleep, secure because the LORD alone keeps him safe.
          </p>
          <div style={{ marginTop: "1.5rem", background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderLeft: `3px solid ${PURPLE}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <div style={{ fontWeight: 800, color: PURPLE, fontSize: "0.8rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.4rem" }}>Key Verse &middot; Psalm 4:8</div>
            <p style={{ color: TEXT, fontSize: "1.2rem", lineHeight: 1.6, fontStyle: "italic", margin: 0 }}
              dangerouslySetInnerHTML={{ __html: "&ldquo;In peace I will both lie down and sleep; for you alone, O LORD, make me dwell in safety.&rdquo;" }} />
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => { setTab(t); setOpen(null); }}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED,
                border: `1px solid ${tab === t ? PURPLE : BORDER}`, cursor: "pointer", transition: "all .18s" }}>
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: PURPLE }}>Summary</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "Psalm 4 is the evening prayer that answers the morning of Psalm 3. It opens with David calling confidently on &lsquo;the God of my righteousness,&rsquo; remembering past relief in distress. He then turns to the &lsquo;sons of men&rsquo; who love vain words and seek lies, reminding them &mdash; and himself &mdash; that the LORD has set apart the godly for himself and hears their prayers. The famous counsel &lsquo;be angry and do not sin&rsquo; calls for stillness, self-examination, right sacrifices, and trust. To a crowd asking &lsquo;who will show us some good?&rsquo; David asks instead for the light of God&rsquo;s face, and testifies that God has given him a joy greater than any abundance of grain and wine. The psalm ends in serene rest: &lsquo;in peace I will both lie down and sleep, for you alone, O LORD, make me dwell in safety.&rsquo;" }} />
            </div>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: TEAL }}>Structure</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "The psalm moves through five compact movements. Verse 1 is <strong>the opening cry</strong> &mdash; &lsquo;answer me when I call, O God of my righteousness.&rsquo; Verses 2&ndash;3 turn <strong>to the sons of men</strong> who love vain words, with the assurance that the LORD sets apart the godly. Verses 4&ndash;5 give the <strong>discipline of the heart</strong> &mdash; &lsquo;be angry and do not sin&rsquo; &mdash; followed by right sacrifices and trust. Verses 6&ndash;7 move from the crowd&rsquo;s cry for &lsquo;some good&rsquo; to <strong>the light of God&rsquo;s face</strong> and a joy surpassing harvest. Verse 8 is <strong>the peace of sleep</strong>. Two <em>Selahs</em> mark pauses for reflection after verses 2 and 4." }} />
            </div>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: GOLD }}>Historical Context</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "Psalm 4 carries the heading &lsquo;To the choirmaster: with stringed instruments. A Psalm of David,&rsquo; marking it for liturgical use in Israel&rsquo;s worship. While it lacks the specific historical superscription of Psalm 3, the two psalms have been read together since antiquity as a complementary pair &mdash; Psalm 3 the <strong>morning psalm</strong> of one who woke sustained, Psalm 4 the <strong>evening psalm</strong> of one who lies down in peace. Both move from pressure and opposition to confident rest. Psalm 4 also became important in the New Testament: Paul quotes verse 4, &lsquo;be angry and do not sin,&rsquo; in <strong>Ephesians 4:26</strong> as practical wisdom for the church&rsquo;s common life. The psalm&rsquo;s themes &mdash; contentment surpassing material abundance and peace grounded in God alone &mdash; have made it a beloved text for evening prayer across the church&rsquo;s history." }} />
            </div>
          </div>
        )}

        {tab === "themes" && (
          <div style={card}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: PURPLE }}>Key Themes</h2>
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
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: TEAL }}>Verse by Verse</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}
              dangerouslySetInnerHTML={{ __html: "Work through Psalm 4 in its five movements. Each section opens to reveal the text and a close reading." }} />
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
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GREEN }}>Living Psalm 4</h2>
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

            <div style={{ ...card, background: `${TEAL}10`, border: `1px solid ${TEAL}30` }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: TEAL }}>A Closing Prayer</h2>
              <p style={{ color: TEXT, lineHeight: 1.9, fontStyle: "italic", margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Answer me when I call, O God of my righteousness; you have given me relief when I was in distress. Quiet my anger and search my heart, that I would ponder and be silent before you rather than sin. When I am tempted to ask only &lsquo;who will show me some good?&rsquo; lift up the light of your face upon me, and put more joy in my heart than the world finds in its abundance. And now, O LORD, in peace I will both lie down and sleep, for you alone make me dwell in safety. Amen." }} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
