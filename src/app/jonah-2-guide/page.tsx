"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Jonah2Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { id: "CE8QbkUCNK4", title: "Jonah Overview - BibleProject" },
    { id: "WZ0bB-GXFQU", title: "Jonah and the Psalms of Lament" },
    { id: "6LmRNVxAjMA", title: "The Sign of Jonah - Matthew 12:40" },
    { id: "XpNxCPHrRIY", title: "Descent and Ascent in Scripture" },
  ];
  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };
  const toggle = (id: string) => setOpen(open === id ? null : id);

  const themeItems = [
    {
      id: "sheol",
      color: PURPLE,
      title: "Prayer from the Belly of Sheol &mdash; The Deepest Possible Place",
      body: "Jonah 2:2 uses striking language: &ldquo;Out of the belly of Sheol I cried, and you heard my voice.&rdquo; Sheol in the Hebrew Bible is the realm of the dead &mdash; not hell in the sense of eternal punishment, but the underworld, the place of shadows, the destination of all the dead. For Jonah to describe the fish&rsquo;s belly as the &ldquo;belly of Sheol&rdquo; is to say: I was in the place of no return. I was as close to not-existing as a living person can be. And yet &mdash; God heard. This theological claim is revolutionary. The Psalms often ask whether God is present in Sheol (Psalm 88:10&ndash;12; 139:8). Joel answers in narrative form: yes, God can hear from there. The fish is simultaneously a place of dying and a place of rescue. It is a grave that becomes a womb. The motif of prayer from the depths connects Jonah 2 to Lamentations 3:55 (&ldquo;I called on your name, O LORD, from the depths of the pit&rdquo;) and to the cry of Jesus from the cross (&ldquo;My God, my God, why have you forsaken me?&rdquo; &mdash; Psalm 22:1 / Matthew 27:46). The Christian tradition reads Jonah&rsquo;s descent as a figure of Christ&rsquo;s descent into death itself.",
    },
    {
      id: "descent",
      color: TEAL,
      title: "The Descent-Ascent Pattern &mdash; Prefiguring Death and Resurrection",
      body: "Jonah 2 is structured by a movement of descent followed by ascent, and this movement is explicitly linked to Christ in Matthew 12:40: &ldquo;For just as Jonah was three days and three nights in the belly of the great fish, so will the Son of Man be three days and three nights in the heart of the earth.&rdquo; Jesus does not merely reference Jonah as a miracle &mdash; he identifies the pattern. The descent-ascent movement is one of Scripture&rsquo;s most fundamental narrative structures: Joseph in the pit, Israel in Egypt, the exiles in Babylon, the psalmist in the depths, Jesus in the tomb. In each case, God does not rescue before the descent; he rescues through and after it. Jonah&rsquo;s three days in the fish is not an accident of timing &mdash; it is the literary shape of death-and-resurrection. Jonah 2:6b is the pivot point: &ldquo;yet you brought up my life from the pit, O LORD my God.&rdquo; The word &ldquo;yet&rdquo; (<em>wa</em>) is the hinge on which the entire prayer turns, and on which the entire biblical story of salvation turns. God brings up from the pit.",
    },
    {
      id: "anatomy",
      color: GOLD,
      title: "The Anatomy of Jonah&rsquo;s Prayer &mdash; Distress, Cry, Heard, Depths, Yet, Vow",
      body: "Jonah 2 is a carefully crafted psalm with a classic Hebrew structure. It moves through six identifiable movements: (1) <strong>Distress stated</strong> (v.2a &mdash; &ldquo;I called out to the LORD out of my distress&rdquo;); (2) <strong>The cry made</strong> (v.2b &mdash; &ldquo;out of the belly of Sheol I cried&rdquo;); (3) <strong>Heard</strong> (v.2c &mdash; &ldquo;you heard my voice&rdquo;); (4) <strong>The depths described</strong> (vv.3&ndash;6a &mdash; waves, flood, weeds, roots of mountains, the bars of the earth); (5) <strong>The turn</strong> (v.6b &mdash; &ldquo;yet you brought up my life from the pit&rdquo;); (6) <strong>The vow</strong> (v.9 &mdash; &ldquo;what I have vowed I will pay. Salvation belongs to the LORD!&rdquo;). This structure is common in the Psalter &mdash; Psalms 18, 30, 42, 69, 88, 116, 120 all exhibit similar movements from distress through cry through remembered rescue to vow of praise. Jonah is not composing original theology; he is praying the received language of Israel&rsquo;s worship. He uses scripture to pray. The irony is that Jonah &mdash; who fled God&rsquo;s command &mdash; knows the psalms perfectly well. Knowledge of scripture is not itself obedience.",
    },
    {
      id: "idols",
      color: ROSE,
      title: "Worthless Idols and Forfeited Steadfast Love",
      body: "Jonah 2:8 contains a compressed but theologically rich statement: &ldquo;Those who pay regard to worthless idols forsake their hope of steadfast love.&rdquo; The word translated &ldquo;worthless idols&rdquo; is <em>havlei-shav</em> &mdash; literally &ldquo;vapors of emptiness,&rdquo; related to the word <em>hevel</em> used throughout Ecclesiastes for vanity or vapor. Idols are not merely stone statues &mdash; they are anything that one treats as the ultimate source of security, meaning, or help. To cling to them is to &ldquo;forsake&rdquo; (literally: abandon, leave behind) one&rsquo;s <em>hesed</em> &mdash; the steadfast covenant love that God offers. The word <em>hesed</em> is one of the most theologically loaded words in the Hebrew Bible: it is God&rsquo;s unfailing loyalty, the covenant faithfulness that persists beyond deserving. Jonah&rsquo;s observation is precise: idol-worship does not merely fail to deliver &mdash; it actively costs you the love that God was holding out. The alternative Jonah demonstrates is prayer: even from the belly of Sheol, the one who cries to the LORD has not abandoned <em>hesed</em>.",
    },
    {
      id: "salvation",
      color: GREEN,
      title: "&ldquo;Salvation Belongs to the LORD&rdquo; &mdash; The Theological Climax",
      body: "Jonah 2:9 ends with what reads as the theological thesis of the entire book: &ldquo;Salvation belongs to the LORD!&rdquo; (<em>la-YHWH ha-yeshuah</em>). The word <em>yeshuah</em> is the Hebrew root of the name &ldquo;Jesus&rdquo; (Yeshua). To say &ldquo;salvation belongs to the LORD&rdquo; is to say that deliverance is not a human achievement, not a matter of being good enough or brave enough or religious enough &mdash; it belongs to God as his own possession, and he distributes it as he chooses. This is the confession that erupts from the belly of the fish after three days of darkness. It is not the conclusion of careful theological reflection in a comfortable setting &mdash; it is the cry that comes when every other resource has been exhausted. The book of Jonah proceeds from this climax with a structural irony: Jonah knows that salvation belongs to the LORD, which is precisely why he is angry that God extends it to Nineveh (4:2). He confesses the doctrine but resists its implications for the nations. The church has often done the same.",
    },
  ];

  const verseItems = [
    {
      id: "v12",
      color: PURPLE,
      title: "Jonah 2:1-2 &mdash; Jonah Cried from the Belly of Sheol",
      body: "&ldquo;Then Jonah prayed to the LORD his God from the belly of the fish, saying, &lsquo;I called out to the LORD, out of my distress, and he answered me; out of the belly of Sheol I cried, and you heard my voice.&rsquo;&rdquo; (2:1&ndash;2). The prayer begins where all genuine prayer must begin: with a specific, named situation of distress. Jonah is not praying from comfort or obligation &mdash; he is praying because he has nowhere else to turn. The Hebrew for &ldquo;I called out&rdquo; uses the perfect tense, which in Hebrew prayer often describes a past event that the speaker is recounting with gratitude. Jonah is not just asking to be rescued; he is already confessing that God answered him &mdash; the prayer is simultaneously petition and thanksgiving, which is the distinctive grammar of Hebrew lament that moves toward trust. The identification of the fish&rsquo;s belly with &ldquo;the belly of Sheol&rdquo; is not metaphor in the dismissive sense. Jonah genuinely experienced the encounter with death. The darkness, the pressure, the seaweed, the sense of descent &mdash; these were real. And God was real in them.",
    },
    {
      id: "v36a",
      color: TEAL,
      title: "Jonah 2:3-6a &mdash; The Descent: Waves, Flood, Weeds, Roots of Mountains",
      body: "&ldquo;For you cast me into the deep, into the heart of the seas, and the flood surrounded me; all your waves and your billows passed over me. Then I said, &lsquo;I am driven away from your sight; yet I shall again look upon your holy temple.&rsquo; The waters closed in over me to take my life; the deep surrounded me; weeds were wrapped about my head at the roots of the mountains. I went down to the land whose bars closed upon me forever&rdquo; (2:3&ndash;6a). The language is deliberately excessive &mdash; waves upon waves, the deep, weeds around the head, the roots of the mountains, the bars of the earth. This is poetic hyperbole that captures an emotional and spiritual truth: Jonah experienced total engulfment. He had reached the very bottom of what can be experienced while still alive. Notice the phrase &ldquo;I am driven away from your sight&rdquo; (v.4a) &mdash; Jonah feared precisely what his flight from God&rsquo;s presence had enacted. He had tried to flee from God&rsquo;s face (1:3) and now feared that he had succeeded. Yet the very next clause &mdash; &ldquo;yet I shall again look upon your holy temple&rdquo; &mdash; is an act of defiant hope in the midst of the depths. The psalm of Psalms 42 is close: &ldquo;Deep calls to deep at the roar of your waterfalls; all your breakers and your waves have gone over me&rdquo; (Ps 42:7). Jonah draws on this shared vocabulary of spiritual drowning.",
    },
    {
      id: "v6b7",
      color: GOLD,
      title: "Jonah 2:6b-7 &mdash; The Turn: Yet You Brought Up My Life",
      body: "&ldquo;Yet you brought up my life from the pit, O LORD my God. When my life was fainting away, I remembered the LORD, and my prayer came to you, into your holy temple&rdquo; (2:6b&ndash;7). Verse 6b is the pivot point of the entire prayer &mdash; and arguably the pivot point of the entire book. The conjunction &ldquo;yet&rdquo; in Hebrew is simply <em>wa</em>, the ordinary conjunction &ldquo;and.&rdquo; But here it marks the reversal: descent gives way to ascent, death gives way to life, abandonment gives way to divine hearing. &ldquo;You brought up my life from the pit&rdquo; uses the verb <em>alah</em> (to bring up, to ascend) &mdash; the same verb used of the resurrection hope throughout the Psalms and the prophets. The prayer reaches God in &ldquo;your holy temple&rdquo; (v.7) &mdash; the same place Jonah hoped to look upon again in verse 4. God did not wait for Jonah to reach the temple to hear him; he heard him from the depths. Distance, whether geographic or spiritual, does not prevent prayer from arriving at the divine presence. The image is intimate: a cry from the ocean floor reaches the temple.",
    },
    {
      id: "v8",
      color: ROSE,
      title: "Jonah 2:8 &mdash; Worthless Idols, Forfeited Steadfast Love",
      body: "&ldquo;Those who pay regard to worthless idols forsake their hope of steadfast love&rdquo; (2:8). This single verse stands slightly apart from the surrounding narrative of Jonah&rsquo;s personal descent and rescue. It is a <em>gnomic</em> statement &mdash; a general theological principle embedded in a particular prayer. Who are &ldquo;those who pay regard to worthless idols&rdquo;? In context, the contrast may be with Jonah himself (who, despite his flight, is still crying to the LORD rather than to idols) and with the sailors of chapter 1, who cried to their gods and then came to recognize the LORD. The irony will deepen in chapters 3&ndash;4: the Ninevites abandon their idols and their evil ways (3:8&ndash;10), and they are shown <em>hesed</em>. Jonah, who knows the formula of God&rsquo;s steadfast love (4:2), is the one who cannot receive the implications of it. The verse also anticipates the theological argument of Paul in Romans 1: those who exchange the truth of God for created things suppress what they know. Idols do not merely fail &mdash; they cost you the love you were being offered.",
    },
    {
      id: "v910",
      color: GREEN,
      title: "Jonah 2:9-10 &mdash; The Vow of Praise and the Fish Obeys",
      body: "&ldquo;But I with the voice of thanksgiving will sacrifice to you; what I have vowed I will pay. Salvation belongs to the LORD!&rdquo; And the LORD spoke to the fish, and it vomited Jonah out upon the dry land&rdquo; (2:9&ndash;10). The prayer closes with a vow of sacrifice and praise. In the ancient world, vows made in distress were binding: if God rescued, the worshiper would offer a sacrifice of thanksgiving (Psalm 116:12&ndash;14 uses the identical structure). &ldquo;What I have vowed I will pay&rdquo; is Jonah committing himself to follow through &mdash; language that will echo ironically when Jonah needs to re-vow his obedience in chapter 3. The climax &mdash; &ldquo;Salvation belongs to the LORD&rdquo; &mdash; is the confession that unlocks the door. And immediately: the LORD speaks to the fish, and the fish obeys. The entire cosmic drama (the storm, the fish, the rescue) has been the LORD commanding the natural world. Creation obeys the Creator. Only Jonah has struggled with obedience. The dry land onto which Jonah is vomited is the place of his second chance &mdash; and the LORD&rsquo;s word will come to him a second time (3:1). God gives second chances to prophets who confess that salvation belongs to him.",
    },
  ];

  const appItems = [
    {
      id: "app1",
      color: PURPLE,
      title: "God Hears from the Deepest Possible Place",
      body: "Jonah 2 establishes a principle that runs through the entire Bible: God hears prayer from the belly of Sheol. This is not a comfortable idea &mdash; it means that there is no situation so dark, so far-gone, so hopeless that prayer is unavailable. The person in the grip of addiction, the one in a psychiatric ward, the one who has failed catastrophically and feels they have placed themselves beyond grace &mdash; Jonah says: cry out from there. You do not need to clean yourself up, climb out, and present yourself properly before praying. You pray from where you are. The fish&rsquo;s belly is a valid prayer location. What Jonah teaches is not that God will always rescue exactly as Jonah was rescued &mdash; but that no depth is beyond his hearing. The question this poses: Is there a depth in your own experience that you have treated as a place too dark to pray from?",
    },
    {
      id: "app2",
      color: TEAL,
      title: "The Pattern of Descent Before Ascent",
      body: "Matthew 12:40 makes explicit what Jonah 2 implies: Jesus went down before he went up. The resurrection is the ultimate ascent, but it follows the ultimate descent &mdash; crucifixion, death, burial. The pattern teaches something important about how God works: he does not typically shortcut the valley. The invitation is not to seek the pain but to trust that when the descent comes &mdash; through loss, failure, illness, grief &mdash; the pattern of Jonah and Jesus applies. Verse 6b is God&rsquo;s characteristic move: &ldquo;yet you brought up my life from the pit.&rdquo; If you are currently in the descent, the word &ldquo;yet&rdquo; is for you. The question this poses: Where are you in the descent-ascent pattern right now, and how does Jonah&rsquo;s structure reframe what God might be doing?",
    },
    {
      id: "app3",
      color: GOLD,
      title: "Pray the Psalms When You Have No Words",
      body: "Jonah does not compose original prayer in the fish&rsquo;s belly &mdash; he prays the Psalms. His prayer is saturated with Psalm language: Psalms 18, 30, 42, 69, 88, 116, 120 all appear in Jonah 2. This is a profound teaching on prayer. When you are in the depths &mdash; when grief or fear or shame has stripped away your ability to form your own words &mdash; Scripture gives you words. The Psalms were written precisely for this: to be borrowed, to be prayed by people in extremity who could not produce their own language. The practice of praying the Psalms is ancient, Jewish, and Christian. Jonah models it at the moment of greatest need. Application: Pick one of the Psalms that shows up in Jonah 2&rsquo;s background (Ps 18, 30, 42, 69, 88, 116) and pray it this week. Let the text carry you when you cannot carry yourself.",
    },
    {
      id: "app4",
      color: ROSE,
      title: "Identify the Worthless Idols That Cost You <em>Hesed</em>",
      body: "Jonah 2:8 warns that clinging to worthless idols costs you the steadfast love God is holding out. This is not primarily about ancient statues. In the NT, Paul expands the category: greed is idolatry (Colossians 3:5); anything that functions as your ultimate trust, security, or source of meaning is an idol. The question Jonah 2:8 asks is precise: What are you clinging to that is causing you to pass over the <em>hesed</em> God is offering? It might be a relationship you are using as a substitute for God. It might be a reputation you are protecting at the cost of honesty. It might be comfort or approval or control. The vapors of emptiness are everywhere. Application: Name one thing in your life that functions as a &ldquo;worthless idol.&rdquo; What <em>hesed</em> might you be passing over by clinging to it?",
    },
    {
      id: "app5",
      color: GREEN,
      title: "Salvation Belongs to the LORD &mdash; Which Means It Does Not Belong to You",
      body: "The confession &ldquo;Salvation belongs to the LORD&rdquo; is liberating and humbling at once. It is liberating because it means your rescue is not dependent on your adequacy &mdash; it belongs to God as his own possession to give. Jonah was not rescued because he finally became a good enough prophet. He was rescued because God chose to rescue him and sent a fish. But the confession is also humbling because it means you cannot control who else God chooses to save &mdash; including the people you think should not qualify. Jonah learned this the hard way in chapter 4 when God extended salvation to Nineveh. Application: Is there someone in your life whose repentance or salvation you are resisting or doubting God would accept? How does &ldquo;salvation belongs to the LORD&rdquo; speak to that posture?",
    },
  ];

  const reflectionQs = [
    "Jonah prays from &ldquo;the belly of Sheol&rdquo; &mdash; the deepest, most death-adjacent place imaginable. Have you ever prayed from a place like that? What did that prayer feel or sound like?",
    "Jonah&rsquo;s prayer is built from the Psalms &mdash; he borrows scriptural language when he is in the depths. Which Psalm or Scripture passage has most served as your language for prayer in hard seasons?",
    "The descent-ascent pattern in Jonah 2 prefigures Christ&rsquo;s death and resurrection (Matthew 12:40). Where in your life do you see the pattern of descent giving way to unexpected ascent &mdash; in your own story, or in someone you know?",
    "Jonah 2:8 says that clinging to worthless idols causes one to forfeit steadfast love. What is the most persuasive idol in your own life right now &mdash; what thing are you treating as your ultimate source of security or meaning?",
    "The fish vomits Jonah onto dry land immediately after Jonah confesses &ldquo;salvation belongs to the LORD.&rdquo; The LORD then speaks to Jonah a second time (3:1). God gives second chances. In what area of your life do you most need to receive &mdash; or extend &mdash; a second chance?",
    "Jonah knows God&rsquo;s character precisely (he quotes it in 4:2) but resists its implications for Nineveh. Is there a theological truth you know well in your head but resist in its practical implications &mdash; especially regarding people or groups you would prefer God not to extend grace toward?",
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #000d14 0%, #12121F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ background: TEAL, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>MINOR PROPHETS</span>
            <span style={{ color: MUTED, fontSize: 14 }}>Jonah 2:1&ndash;10</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
            Jonah 2 Study Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem,2vw,1.15rem)", color: MUTED, maxWidth: 680, lineHeight: 1.75, margin: "0 0 24px" }}>
            A psalm from the belly of the great fish. Descent into Sheol. The turn of divine rescue. And the confession that salvation belongs to the LORD.
          </p>
          <div style={{ background: `${TEAL}18`, border: `1px solid ${TEAL}44`, borderRadius: 10, padding: "16px 20px", maxWidth: 640 }}>
            <div style={{ color: TEAL, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>KEY VERSE &mdash; JONAH 2:9</div>
            <div style={{ fontStyle: "italic", lineHeight: 1.7, color: TEXT }} dangerouslySetInnerHTML={{ __html: "&ldquo;But I with the voice of thanksgiving will sacrifice to you; what I have vowed I will pay. Salvation belongs to the LORD!&rdquo;" }} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
        <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "16px 20px",
                border: "none",
                background: "none",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                whiteSpace: "nowrap",
                color: tab === t ? TEAL : MUTED,
                borderBottom: tab === t ? `2px solid ${TEAL}` : "2px solid transparent",
                transition: "color 0.15s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 12 }}>Overview</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }} dangerouslySetInnerHTML={{ __html: "Jonah 2 is one of the strangest and most beautiful chapters in the Hebrew Bible. It is a psalm &mdash; a fully formed Hebrew poem of lament and thanksgiving &mdash; embedded in a narrative prose account of a reluctant prophet swallowed by a great fish. The chapter occupies a single remarkable moment: Jonah is inside the fish for three days and three nights, and he prays. What emerges is not an original composition but a mosaic of Israel&rsquo;s psalmic tradition, rearranged by a man at the very edge of death." }} />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 14, marginBottom: 32 }}>
              {[
                { label: "Chapter", value: "Jonah 2" },
                { label: "Genre", value: "Psalm of thanksgiving / lament" },
                { label: "Setting", value: "Belly of the great fish" },
                { label: "Key Verse", value: "Jonah 2:9" },
                { label: "NT Connection", value: "Matthew 12:40" },
                { label: "Psalm Echoes", value: "Ps 18, 30, 42, 69, 88, 116" },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontWeight: 600, fontSize: 14 }} dangerouslySetInnerHTML={{ __html: item.value }} />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12 }}>The Structure of Jonah 2</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "2:1&ndash;2", desc: "Setting and opening: Jonah cried from the belly of Sheol &mdash; the LORD heard" },
                  { ref: "2:3&ndash;6a", desc: "The descent: waves, the deep, weeds, roots of mountains, the bars of the earth" },
                  { ref: "2:6b&ndash;7", desc: "The turn: &ldquo;yet you brought up my life from the pit&rdquo; &mdash; remembered the LORD" },
                  { ref: "2:8", desc: "Theological aside: those who cling to worthless idols forfeit steadfast love" },
                  { ref: "2:9&ndash;10", desc: "The vow of thanksgiving; &ldquo;Salvation belongs to the LORD!&rdquo;; the fish obeys" },
                ].map(p => (
                  <div key={p.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: TEAL, fontWeight: 700, fontSize: 13, minWidth: 80, paddingTop: 2 }} dangerouslySetInnerHTML={{ __html: p.ref }} />
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.55 }} dangerouslySetInnerHTML={{ __html: p.desc }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16, marginBottom: 24 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <h3 style={{ fontWeight: 700, marginBottom: 10, fontSize: 15, color: GOLD }}>Jonah 2 in Its Narrative Context</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Chapter 1 ended with Jonah thrown overboard and swallowed. The fish&rsquo;s role is complex: it is both judgment (Jonah is swallowed because of his disobedience) and grace (the fish prevents Jonah from drowning). Chapter 2 is entirely interior &mdash; we are inside Jonah&rsquo;s prayer, inside the fish, inside the experience of near-death. Chapter 3 will begin with Jonah on dry land receiving the word of the LORD a second time. Chapter 2 is the hinge: it is where Jonah moves from flight to re-commissioning, though as chapter 4 shows, his inner transformation is incomplete." }} />
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <h3 style={{ fontWeight: 700, marginBottom: 10, fontSize: 15, color: ROSE }}>The Sign of Jonah &mdash; Matthew 12:39-41</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: "When the Pharisees demanded a sign, Jesus said the only sign they would receive is the sign of the prophet Jonah: &ldquo;For just as Jonah was three days and three nights in the belly of the great fish, so will the Son of Man be three days and three nights in the heart of the earth&rdquo; (Matt 12:40). Jesus does not reference Jonah&rsquo;s preaching to Nineveh as the sign &mdash; he references the death-and-resurrection pattern of chapter 2. This makes Jonah 2 the most Christologically significant chapter in a book that is already deeply Christological. The fish&rsquo;s belly is a type of the tomb. The dry land is a type of the empty tomb." }} />
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 14 }}>Jonah 2 and the Psalms of Israel</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Jonah 2 is not Jonah&rsquo;s original composition &mdash; it is a prayer assembled from the language of Israel&rsquo;s Psalter. Here are key parallels:" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { jonah: "2:2 &mdash; &ldquo;out of my distress I called&rdquo;", psalm: "Ps 120:1 &mdash; same phrase" },
                  { jonah: "2:3 &mdash; &ldquo;all your waves and billows passed over me&rdquo;", psalm: "Ps 42:7 &mdash; identical imagery" },
                  { jonah: "2:4 &mdash; &ldquo;yet I shall look upon your holy temple&rdquo;", psalm: "Ps 18:6; 88:2 &mdash; prayer reaching the temple" },
                  { jonah: "2:6 &mdash; &ldquo;you brought up my life from the pit&rdquo;", psalm: "Ps 30:3 &mdash; &ldquo;O LORD, you have brought up my soul from Sheol&rdquo;" },
                  { jonah: "2:7 &mdash; &ldquo;when my life was fainting away&rdquo;", psalm: "Ps 142:3; 143:4 &mdash; the fainting soul" },
                  { jonah: "2:9 &mdash; vow of thanksgiving and sacrifice", psalm: "Ps 116:12&ndash;18 &mdash; same pattern" },
                ].map(item => (
                  <div key={item.jonah} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "8px 0", borderBottom: `1px solid ${BORDER}` }}>
                    <span style={{ color: TEAL, fontWeight: 600, fontSize: 13, minWidth: 200, paddingTop: 1 }} dangerouslySetInnerHTML={{ __html: item.jonah }} />
                    <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: item.psalm }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* THEMES */}
        {tab === "themes" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Key Themes</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }} dangerouslySetInnerHTML={{ __html: "Jonah 2 is dense with theological content despite its brevity. It touches on prayer, death, resurrection typology, idolatry, divine hearing, and the nature of salvation &mdash; all in ten verses." }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {themeItems.map(item => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => toggle(item.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, flexShrink: 0, marginLeft: 12 }}>{open === item.id ? "-" : "+"}</span>
                  </button>
                  {open === item.id && (
                    <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${TEAL}44`, borderRadius: 12, padding: 28, marginTop: 32 }}>
              <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 14 }}>The Anatomy of Jonah&rsquo;s Prayer</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { step: "1. Distress", ref: "v.2a", desc: "Named situation: &ldquo;out of my distress I called&rdquo;" },
                  { step: "2. Cry Made", ref: "v.2b", desc: "&ldquo;out of the belly of Sheol I cried&rdquo; &mdash; the prayer is made" },
                  { step: "3. Heard", ref: "v.2c", desc: "&ldquo;you heard my voice&rdquo; &mdash; divine reception confirmed" },
                  { step: "4. Depths Described", ref: "vv.3&ndash;6a", desc: "Full account of the descent &mdash; waves, flood, weeds, roots, bars" },
                  { step: "5. The Turn", ref: "v.6b", desc: "&ldquo;yet you brought up my life from the pit&rdquo; &mdash; the pivot" },
                  { step: "6. Vow of Praise", ref: "v.9", desc: "&ldquo;Salvation belongs to the LORD!&rdquo; &mdash; the climactic confession" },
                ].map(s => (
                  <div key={s.step} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "10px 0", borderBottom: `1px solid ${BORDER}` }}>
                    <span style={{ color: TEAL, fontWeight: 800, fontSize: 13, minWidth: 120, paddingTop: 1 }}>{s.step}</span>
                    <span style={{ color: PURPLE, fontWeight: 700, fontSize: 13, minWidth: 60, paddingTop: 1 }} dangerouslySetInnerHTML={{ __html: s.ref }} />
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: s.desc }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VERSE BY VERSE */}
        {tab === "verse" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Verse by Verse</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }} dangerouslySetInnerHTML={{ __html: "A detailed walk through all ten verses of Jonah 2, tracing Jonah&rsquo;s movement from the cry of distress through the descent into death-like darkness and back to the surface, culminating in the theological climax of &ldquo;Salvation belongs to the LORD.&rdquo;" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {verseItems.map(item => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${item.color}33`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => toggle(item.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, flexShrink: 0, marginLeft: 12 }}>{open === item.id ? "-" : "+"}</span>
                  </button>
                  {open === item.id && (
                    <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 24, marginTop: 32 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 14 }}>Why Is There a Psalm Here?</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Some readers find the psalm of Jonah 2 jarring in its literary context &mdash; why does the prose narrative suddenly shift to poetry? But this is actually a well-attested Hebrew literary technique called an <em>embedded hymn</em>. Compare the Song of Moses (Exodus 15) after the crossing of the sea, the Song of Deborah (Judges 5) after the battle, or Hannah&rsquo;s song (1 Samuel 2) after the birth of Samuel. In each case, the poem provides the theological interpretation of the preceding narrative event. Jonah 2&rsquo;s psalm tells us how to understand the fish: not as punishment alone, but as a vessel of divine rescue. The psalm is the meaning of the miracle." }} />
            </div>
          </div>
        )}

        {/* APPLICATION */}
        {tab === "application" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Application</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }} dangerouslySetInnerHTML={{ __html: "Jonah 2 is not a chapter about what happened to one reluctant prophet in the ancient Near East. It is a map of the spiritual life &mdash; the descent, the cry, the divine hearing, the unexpected rescue, and the confession that reorients everything." }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
              {appItems.map(item => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${item.color}33`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => toggle(item.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, flexShrink: 0, marginLeft: 12 }}>{open === item.id ? "-" : "+"}</span>
                  </button>
                  {open === item.id && (
                    <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  )}
                </div>
              ))}
            </div>

            {/* Reflection Questions */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {reflectionQs.map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, padding: "14px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: TEAL, fontWeight: 800, flexShrink: 0, fontSize: 16, paddingTop: 1 }}>{i + 1}.</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Video Section */}
            <div style={{ marginBottom: 40 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 8 }}>Video Teaching</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 20 }} dangerouslySetInnerHTML={{ __html: "Explore Jonah 2 through these teaching resources on prayer, descent and ascent, and the sign of Jonah." }} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
                {videoItems.map(v => (
                  <div key={v.id}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>{v.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Prayer */}
            <div style={{ background: `linear-gradient(135deg, ${TEAL}18 0%, ${CARD} 100%)`, border: `1px solid ${TEAL}33`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 14 }}>Closing Prayer</h3>
              <p style={{ color: MUTED, lineHeight: 1.85, fontSize: 15, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Lord God, you heard Jonah from the belly of Sheol &mdash; from the very place where no one goes and returns. Teach us that there is no depth too deep for your hearing. Whatever in us feels like the fish&rsquo;s belly right now &mdash; the darkness, the entrapment, the sense of being as far from you as it is possible to be &mdash; let it become the place where we learn to cry to you and be heard.<br/><br/>We confess that we too have our worthless idols, the vapors of emptiness we cling to at the cost of your steadfast love. By your Spirit, loosen our grip on what cannot save and turn our hands upward in prayer.<br/><br/>And we rest in the confession that Jonah made from the darkest place he had ever been: Salvation belongs to you, LORD. Not to us, not to our performance, not to our worthiness. To you alone. Bring us up from whatever pit we are in. Speak to us a second time. Send us where you are sending us.<br/><br/>You are the God who brings up life from the pit. We trust you. Amen." }} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
