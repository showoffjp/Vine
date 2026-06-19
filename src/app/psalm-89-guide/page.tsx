"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 89 - The Davidic Covenant Remembered" },
  { videoId: "Q2oNOlXzBhY", title: "When God's Promises Seem to Fail" },
  { videoId: "8phkAg8PMHE", title: "The Steadfast Love of the LORD Forever" },
  { videoId: "fNk_zzaMoSs", title: "From Praise to Lament: Reading Psalm 89" },
];

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const themeItems = [
  {
    id: "t1",
    color: PURPLE,
    title: "Sustained Praise of Steadfast Love and Faithfulness",
    body: "The psalm opens not with complaint but with a flood of worship: &ldquo;I will sing of the steadfast love of the LORD forever; with my mouth I will make known your faithfulness to all generations&rdquo; (89:1). Two Hebrew words anchor the entire psalm and recur again and again: <em>hesed</em> (steadfast love, covenant loyalty) and <em>emunah</em> (faithfulness, reliability). Ethan resolves that &ldquo;steadfast love will be built up forever; in the heavens you will establish your faithfulness&rdquo; (89:2). The structure of the psalm depends on this opening: the singer commits to praising God&rsquo;s <em>hesed</em> and <em>emunah</em> at the very beginning, so that when the lament comes (vv.38-51) it is not the cynicism of an unbeliever but the anguish of one who has staked everything on these two attributes. The whole poem is, in a sense, a wrestling match between the confessed character of God and the painful evidence of present circumstance. Cross-references: Lamentations 3:22-23 (&ldquo;his mercies never come to an end; they are new every morning; great is your faithfulness&rdquo;); Exodus 34:6 (the LORD &ldquo;abounding in steadfast love and faithfulness&rdquo;); Psalm 36:5 (&ldquo;your steadfast love, O LORD, extends to the heavens, your faithfulness to the clouds&rdquo;)."
  },
  {
    id: "t2",
    color: GOLD,
    title: "The Recital of the Covenant with David",
    body: "At the heart of the opening section God himself speaks: &ldquo;I have made a covenant with my chosen one; I have sworn to David my servant: &lsquo;I will establish your offspring forever, and build your throne for all generations&rsquo;&rdquo; (89:3-4). This is the poetic re-presentation of the Davidic covenant first given in 2 Samuel 7, where God promised David an enduring house, throne, and kingdom. The language is unconditional and irrevocable in tone: God has <em>sworn</em> (taken an oath), and an oath cannot be broken without God denying his own faithfulness. Verses 19-37 expand the oath: &ldquo;I have found David my servant; with my holy oil I have anointed him&rdquo; (89:20), &ldquo;My steadfast love I will keep for him forever, and my covenant will stand firm for him&rdquo; (89:28). The covenant is the structural and theological backbone of the psalm; everything that follows &mdash; both the praise and the protest &mdash; flows from it. Cross-references: 2 Samuel 7:8-16; Psalm 132:11-12 (&ldquo;The LORD swore to David a sure oath from which he will not turn back&rdquo;); Acts 2:30 (Peter sees the resurrection as God keeping the oath sworn to David)."
  },
  {
    id: "t3",
    color: TEAL,
    title: "The Incomparable God Who Rules the Raging Sea",
    body: "Before unfolding the covenant promises, the psalm grounds them in the surpassing greatness of the covenant-maker (89:5-18). &ldquo;Let the heavens praise your wonders, O LORD&rdquo; (89:5); &ldquo;For who in the skies can be compared to the LORD? Who among the heavenly beings is like the LORD?&rdquo; (89:6). The point is pastoral as well as doxological: a covenant is only as secure as the one who makes it, so the psalmist piles up evidence of God&rsquo;s incomparable power. &ldquo;You rule the raging of the sea; when its waves rise, you still them&rdquo; (89:9) &mdash; in the ancient world the sea was the great symbol of chaos, and the God who tames the sea can certainly keep a promise to a dynasty. &ldquo;Righteousness and justice are the foundation of your throne; steadfast love and faithfulness go before you&rdquo; (89:14). The section ends with beatitude: &ldquo;Blessed are the people who know the festal shout, who walk, O LORD, in the light of your face&rdquo; (89:15). Cross-references: Psalm 93:3-4 (&ldquo;the floods have lifted up their voice... mightier than the thunders of many waters... the LORD on high is mighty&rdquo;); Job 38:8-11; Mark 4:39 (Jesus stills the storm, doing what only God does in the Psalms)."
  },
  {
    id: "t4",
    color: GREEN,
    title: "Discipline Without Abandonment: 'I Will Not Violate My Covenant'",
    body: "One of the most important theological moves in the psalm comes in 89:30-37, where God anticipates the failure of David&rsquo;s sons: &ldquo;If his children forsake my law and do not walk according to my rules... I will punish their transgression with the rod and their iniquity with stripes, but I will not remove from him my steadfast love or be false to my faithfulness. I will not violate my covenant or alter the word that went forth from my lips&rdquo; (89:30-34). This is the crucial distinction between <em>conditional discipline</em> and <em>unconditional commitment</em>. The covenant allows for the punishment of individual unfaithful kings (the rod), yet insists that the covenant itself cannot be annulled. God binds the permanence of the Davidic line to the permanence of the created order: &ldquo;His offspring shall endure forever, his throne as long as the sun before me. Like the moon it shall be established forever&rdquo; (89:36-37). This is precisely what makes the lament that follows so agonizing &mdash; the king has not merely been disciplined; the throne appears to have been thrown down altogether. Cross-references: 2 Samuel 7:14-15; Psalm 132:12; Hebrews 12:6 (&ldquo;the Lord disciplines the one he loves&rdquo;)."
  },
  {
    id: "t5",
    color: ROSE,
    title: "The Devastating Turn to Lament: 'But Now You Have Cast Off'",
    body: "At verse 38 the psalm pivots with a single shattering word: &ldquo;<em>But now</em> you have cast off and rejected; you are full of wrath against your anointed&rdquo; (89:38). The contrast with everything before it is brutal and intentional. &ldquo;You have renounced the covenant with your servant; you have defiled his crown in the dust&rdquo; (89:39). &ldquo;You have breached all his walls; you have laid his strongholds in ruins&rdquo; (89:40). &ldquo;You have made his splendor cease and cast his throne to the ground&rdquo; (89:44). Notice that every verb is addressed directly to God in the second person: <em>you</em> have done this. The psalmist does not blame chance, enemies, or even the king&rsquo;s sin in these verses; he lays the apparent collapse of the covenant at God&rsquo;s feet, because it was God who swore the oath. This is the lament of faith pushed to its limit. The closing cry is &ldquo;How long, O LORD? Will you hide yourself forever?&rdquo; (89:46) and &ldquo;Lord, where is your steadfast love of old, which by your faithfulness you swore to David?&rdquo; (89:49) &mdash; the two great words of verse 1, <em>hesed</em> and <em>emunah</em>, hurled back to God as a question. Cross-references: Psalm 44:9-26; Psalm 74:1; Lamentations 5:20-22; Romans 8:35-39 (the New Testament answer that nothing can separate us from God&rsquo;s love)."
  },
  {
    id: "t6",
    color: GOLD,
    title: "The Unresolved Tension Resolved in the Son of David",
    body: "Psalm 89 deliberately ends without resolution. The final words of the lament proper are a question, not an answer: &ldquo;How long?&rdquo; The doxology of verse 52 (&ldquo;Blessed be the LORD forever! Amen and Amen&rdquo;) is the closing of Book 3 of the Psalter, not a tidy solution to the crisis. The psalm leaves the reader holding the tension between the sworn promise and the shattered throne. From a Christian reading, this tension is not finally resolved within the psalm itself but in the gospel: the covenant with David did not fail, because there came a Son of David whose throne truly is established forever. The angel told Mary that her son would receive &ldquo;the throne of his father David, and... his kingdom there will be no end&rdquo; (Luke 1:32-33). Peter declared that God &ldquo;had sworn with an oath to him that he would set one of his descendants on his throne&rdquo; and fulfilled it in the resurrection (Acts 2:30). Paul opens Romans by describing Jesus as &ldquo;descended from David according to the flesh&rdquo; (Romans 1:3). Psalm 89 teaches us to hold God to his promises even when every visible sign says they have failed &mdash; and the resurrection of the crucified Son of David is the vindication of that faith. Cross-references: Luke 1:32-33; Acts 2:30-36; Romans 1:3-4; Revelation 22:16 (&ldquo;I am the root and the descendant of David&rdquo;)."
  },
];

const verseItems = [
  {
    id: "v1",
    ref: "89:1-4",
    label: "Psalm 89:1-4 &mdash; The Vow to Sing and the Oath to David",
    body: "&ldquo;I will sing of the steadfast love of the LORD forever; with my mouth I will make known your faithfulness to all generations. For I said, &lsquo;Steadfast love will be built up forever; in the heavens you will establish your faithfulness.&rsquo;&rdquo; (89:1-2). The psalm begins with the singer&rsquo;s firm resolve, repeating the two governing words <em>hesed</em> (steadfast love) and <em>emunah</em> (faithfulness). Then God&rsquo;s own voice breaks in with the covenant oath: &ldquo;I have made a covenant with my chosen one; I have sworn to David my servant: &lsquo;I will establish your offspring forever, and build your throne for all generations&rsquo;&rdquo; (89:3-4). The verbs <em>establish</em> and <em>build</em> echo the language God used in 2 Samuel 7, where he promised to build David a house. This opening lays the foundation stone of the whole psalm: God has bound himself by oath. The agony of the later verses depends entirely on the seriousness of this opening commitment &mdash; you cannot lament the breaking of a promise that was never made."
  },
  {
    id: "v2",
    ref: "89:5-18",
    label: "Psalm 89:5-18 &mdash; The Incomparable God Who Stills the Sea",
    body: "&ldquo;Let the heavens praise your wonders, O LORD, your faithfulness in the assembly of the holy ones! For who in the skies can be compared to the LORD?&rdquo; (89:5-6). This long central section establishes the credentials of the covenant-maker. God is feared in the council of the holy ones (89:7), supreme over every heavenly being. His power is displayed in creation: &ldquo;You rule the raging of the sea; when its waves rise, you still them&rdquo; (89:9), the same chaos-taming power that scatters his enemies (89:10) and owns the heavens and the earth (89:11). &ldquo;Righteousness and justice are the foundation of your throne; steadfast love and faithfulness go before you&rdquo; (89:14) &mdash; the very attributes the king will depend on. The section closes with a beatitude: &ldquo;Blessed are the people who know the festal shout, who walk, O LORD, in the light of your face&rdquo; (89:15-18). The logic is clear: a promise is only as good as the one who gives it, and this God is incomparable, so his promise must be sure."
  },
  {
    id: "v3",
    ref: "89:19-29",
    label: "Psalm 89:19-29 &mdash; 'I Have Found David My Servant'",
    body: "&ldquo;Of old you spoke in a vision to your godly one, and said: &lsquo;I have... exalted one chosen from the people. I have found David my servant; with my holy oil I have anointed him&rsquo;&rdquo; (89:19-20). God recounts the choosing and anointing of David, promising to sustain and strengthen him against his enemies (89:21-23). &ldquo;My faithfulness and my steadfast love shall be with him, and in my name shall his horn be exalted&rdquo; (89:24). The privileges of the king reach their summit in verses 26-27: &ldquo;He shall cry to me, &lsquo;You are my Father, my God, and the Rock of my salvation.&rsquo; And I will make him the firstborn, the highest of the kings of the earth.&rdquo; The Davidic king is granted a unique sonship and the rank of firstborn among kings &mdash; language the New Testament will apply to Jesus (Colossians 1:15-18; Hebrews 1:5-6). The section ends with the promise of permanence: &ldquo;My steadfast love I will keep for him forever, and my covenant will stand firm for him. I will establish his offspring forever and his throne as the days of the heavens&rdquo; (89:28-29)."
  },
  {
    id: "v4",
    ref: "89:30-37",
    label: "Psalm 89:30-37 &mdash; Discipline With the Rod, But the Covenant Stands",
    body: "&ldquo;If his children forsake my law and do not walk according to my rules... then I will punish their transgression with the rod and their iniquity with stripes, but I will not remove from him my steadfast love or be false to my faithfulness&rdquo; (89:30-33). Here is the careful distinction at the center of the psalm: the sons of David may be disciplined for sin, but the covenant cannot be revoked. &ldquo;I will not violate my covenant or alter the word that went forth from my lips. Once for all I have sworn by my holiness; I will not lie to David&rdquo; (89:34-35). God stakes his own holiness and truthfulness on keeping this oath. He then ties the endurance of David&rsquo;s line to the most permanent things in creation: &ldquo;His offspring shall endure forever, his throne as long as the sun before me. Like the moon it shall be established forever, a faithful witness in the skies&rdquo; (89:36-37). The brightness of this promise is exactly what makes the darkness of the next section so unbearable. The psalmist has just heard God swear by his own holiness never to lie to David &mdash; and then he looks at the ruined throne."
  },
  {
    id: "v5",
    ref: "89:38-45",
    label: "Psalm 89:38-45 &mdash; 'But Now You Have Cast Off and Rejected'",
    body: "The hinge of the psalm: &ldquo;But now you have cast off and rejected; you are full of wrath against your anointed. You have renounced the covenant with your servant; you have defiled his crown in the dust&rdquo; (89:38-39). The poem turns from the sworn promise to the shattered reality. Every line is an accusation directed at God himself: &ldquo;You have breached all his walls; you have laid his strongholds in ruins&rdquo; (89:40); &ldquo;You have exalted the right hand of his foes; you have made all his enemies rejoice&rdquo; (89:42); &ldquo;You have made his splendor cease and cast his throne to the ground. You have cut short the days of his youth; you have covered him with shame&rdquo; (89:44-45). This is most likely the voice of the exile, when no Davidic king sat enthroned in Jerusalem and the temple lay in ruins. The boldness is breathtaking: the psalmist does not soften the contradiction or pretend the promise was conditional. He holds the unbreakable covenant in one hand and the rubble of the kingdom in the other and refuses to let go of either. This is lament at its most honest &mdash; faith that protests precisely because it still believes."
  },
  {
    id: "v6",
    ref: "89:46-52",
    label: "Psalm 89:46-52 &mdash; 'How Long, O LORD?' and the Doxology of Book 3",
    body: "&ldquo;How long, O LORD? Will you hide yourself forever? How long will your wrath burn like fire?&rdquo; (89:46). The psalmist appeals to the brevity of human life: &ldquo;Remember how short my time is!&rdquo; (89:47) &mdash; I will not live long enough to see the promise fulfilled unless you act now. Then comes the climactic question that gathers up the whole psalm: &ldquo;Lord, where is your steadfast love of old, which by your faithfulness you swore to David?&rdquo; (89:49). The two words of verse 1, <em>hesed</em> and <em>emunah</em>, return as a question flung back at God. He pleads the taunts and reproaches the people bear (89:50-51). And then, abruptly, verse 52: &ldquo;Blessed be the LORD forever! Amen and Amen.&rdquo; This is not a resolution of the lament; it is the doxology that closes Book 3 of the Psalter (Books 1-5 each end with such a benediction). The psalm itself leaves the &ldquo;How long?&rdquo; unanswered, teaching God&rsquo;s people to keep praising even while the question still hangs in the air &mdash; until the day the Son of David is raised and the throne is established forever."
  },
];

const applicationItems = [
  {
    id: "a1",
    color: PURPLE,
    title: "Praise Before, During, and After the Crisis",
    body: "Psalm 89 frames lament inside worship. It opens with &ldquo;I will sing of the steadfast love of the LORD forever&rdquo; and closes with &ldquo;Blessed be the LORD forever! Amen and Amen.&rdquo; The protest is in the middle, surrounded on both sides by praise. This is a model for the believer in seasons when God&rsquo;s promises seem to have failed: we are not asked to suppress the lament, but neither do we abandon the worship. The same lips that cry &ldquo;How long?&rdquo; have already vowed to make known God&rsquo;s faithfulness &ldquo;to all generations.&rdquo; When you cannot feel God&rsquo;s steadfast love, you can still rehearse it &mdash; and that rehearsal is itself an act of faith. Praise that survives the crisis is praise that has been tested and proven genuine, like gold refined in the fire (1 Peter 1:7)."
  },
  {
    id: "a2",
    color: TEAL,
    title: "Bringing Your 'How Long?' Honestly to God",
    body: "The boldness of verses 38-51 gives believers permission to be honest with God. The psalmist does not pretend everything is fine; he tells God plainly that the situation looks like a broken promise. &ldquo;How long, O LORD? Will you hide yourself forever?&rdquo; is a prayer, not a betrayal. Scripture sanctions this kind of frank wrestling: roughly a third of the Psalms are laments. The believer who feels that God has been silent, distant, or even contradictory is not outside the bounds of faith by saying so &mdash; provided, like Ethan, they say it <em>to God</em> and not merely about him. Honest lament directed Godward keeps the relationship alive; cynicism directed elsewhere lets it die. Bring your questions to the One who swore the oath. Cross-reference: Habakkuk 1:2 (&ldquo;O LORD, how long shall I cry for help, and you will not hear?&rdquo;); the cry &ldquo;My God, my God, why have you forsaken me?&rdquo; that Jesus prayed from the cross (Matthew 27:46)."
  },
  {
    id: "a3",
    color: GOLD,
    title: "Standing on God's Sworn Character When Circumstances Contradict It",
    body: "The psalm teaches us to hold to who God has revealed himself to be even when present evidence runs the other way. Ethan does not resolve the contradiction by deciding God is unfaithful; he holds the promise and the pain together and waits. Faith is not the absence of unanswered questions but the decision to trust God&rsquo;s sworn character through them. God &ldquo;has sworn by his holiness&rdquo; that he will not lie to David (89:35); his faithfulness is more permanent than the sun and moon (89:36-37). When the throne lies in the dust, the believer&rsquo;s anchor is not the visible situation but the invisible oath. This is the posture of Abraham, who &ldquo;in hope... believed against hope&rdquo; (Romans 4:18), and of every saint who clings to the promise in the dark. Cross-reference: Hebrews 6:17-19 (God confirmed his promise &ldquo;with an oath, so that... we who have fled for refuge might have strong encouragement&rdquo;)."
  },
  {
    id: "a4",
    color: GREEN,
    title: "Seeing the Covenant Kept in the Son of David",
    body: "The Christian reads Psalm 89 from the other side of the resurrection. The throne that was cast to the ground (89:44) has been raised up in Jesus, the Son of David whose kingdom has no end (Luke 1:32-33). What looked like the end of the covenant in 586 BC was not its annulment but the long night before its fulfillment. The same God who seemed to have renounced the covenant was in fact preparing to keep it in a way greater than Ethan could have imagined &mdash; not merely restoring a political dynasty but raising up an eternal King who rules forever. This is the hope that lets us pray Psalm 89 today: every &ldquo;How long?&rdquo; in the believer&rsquo;s life is held inside the certainty that God keeps his promises, often through, not around, the valley. Cross-reference: Acts 2:30-32; Romans 1:3-4; 2 Corinthians 1:20 (&ldquo;all the promises of God find their Yes in him&rdquo;)."
  },
];

const reflectionQuestions = [
  "Psalm 89 opens with a vow to sing of God&rsquo;s steadfast love and faithfulness &ldquo;forever.&rdquo; In what specific situation right now is it costly for you to keep rehearsing God&rsquo;s faithfulness when you cannot feel it?",
  "The psalm distinguishes between God disciplining David&rsquo;s sons (the rod) and God abandoning the covenant (which he refuses to do). How does that distinction reshape the way you interpret hard seasons in your own life?",
  "Verses 38-51 boldly say &ldquo;<em>you</em> have done this&rdquo; directly to God. Are there honest words about God&rsquo;s apparent absence that you have been afraid to bring to him in prayer? What would it look like to bring them?",
  "The psalm ends with an unanswered &ldquo;How long?&rdquo; rather than a tidy resolution. How comfortable are you with living faithfully inside questions God has not yet answered?",
  "The covenant tension is resolved in Christ, the Son of David whose throne is established forever. How does the resurrection of Jesus give you confidence in a specific promise of God that currently looks unfulfilled?",
  "Who in your life is currently crying &ldquo;How long?&rdquo; &mdash; and how might you sit with them in honest lament rather than rushing them to easy answers?",
];

export default function Psalm89Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;
  const toggle = (id: string) => setOpen(open === id ? null : id);

  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: "12px",
    padding: "1.5rem",
    marginBottom: "1.25rem",
  };
  const accordionHeader = (active: boolean): React.CSSProperties => ({
    width: "100%",
    textAlign: "left",
    background: active ? "#181830" : "transparent",
    color: TEXT,
    border: "none",
    borderBottom: `1px solid ${BORDER}`,
    padding: "1rem 1.25rem",
    fontSize: "1.05rem",
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <section style={{ maxWidth: 980, margin: "0 auto", padding: "2.5rem 1.25rem 1rem" }}>
        <p style={{ color: GOLD, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Book of Psalms &middot; Book 3
        </p>
        <h1 style={{ fontSize: "2.6rem", lineHeight: 1.1, margin: "0 0 0.75rem", fontWeight: 800 }}>
          Psalm 89: The Davidic Covenant and the Anguish of a Promise That Seems to Fail
        </h1>
        <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.6, maxWidth: 760 }}>
          A maskil of Ethan the Ezrahite &mdash; the longest sustained reflection on God&rsquo;s covenant with David, moving from soaring praise to shattering lament, and ending not with resolution but with the cry &ldquo;How long, O LORD?&rdquo;
        </p>
        <blockquote style={{ marginTop: "1.75rem", borderLeft: `4px solid ${PURPLE}`, background: CARD, padding: "1.25rem 1.5rem", borderRadius: "0 12px 12px 0" }}>
          <p style={{ fontSize: "1.25rem", lineHeight: 1.55, fontStyle: "italic", margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;I will sing of the steadfast love of the LORD forever; with my mouth I will make known your faithfulness to all generations.&rdquo;" }} />
          <footer style={{ marginTop: "0.75rem", color: GOLD, fontWeight: 700 }}>Psalm 89:1</footer>
        </blockquote>
      </section>

      <nav style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 10, background: BG, borderBottom: `1px solid ${BORDER}`, marginTop: "1.5rem" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 1.25rem", display: "flex", gap: "0.5rem", overflowX: "auto" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                background: "transparent",
                color: tab === t ? TEXT : MUTED,
                border: "none",
                borderBottom: tab === t ? `3px solid ${GOLD}` : "3px solid transparent",
                padding: "0.9rem 0.75rem",
                fontSize: "0.98rem",
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>
      </nav>

      <main style={{ maxWidth: 980, margin: "0 auto", padding: "2rem 1.25rem 4rem" }}>
        {tab === "overview" && (
          <div>
            <div style={cardStyle}>
              <h2 style={{ marginTop: 0, fontSize: "1.5rem" }}>Summary</h2>
              <div style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "Psalm 89 is the great psalm of the Davidic covenant. For thirty-seven verses it celebrates God&rsquo;s unbreakable promise to David&rsquo;s dynasty &mdash; the sworn oath that David&rsquo;s throne would endure as long as the sun and moon. Then, with one devastating word in verse 38 (&ldquo;But now&rdquo;), it turns to lament: the throne has been cast to the ground, the crown defiled in the dust, the covenant apparently renounced. The psalm does not resolve this tension. It ends with the raw question &ldquo;How long, O LORD?&rdquo; and the appeal &ldquo;Lord, where is your steadfast love of old?&rdquo; This is the believer&rsquo;s psalm for the moment when God&rsquo;s promises seem to have failed &mdash; and the gospel&rsquo;s answer is the Son of David whose throne truly is established forever." }} />
            </div>

            <div style={cardStyle}>
              <h2 style={{ marginTop: 0, fontSize: "1.5rem" }}>Structure</h2>
              <div style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "<strong style=\"color:#F2F2F8\">Verses 1-4 &mdash; Opening Praise and the Covenant Oath:</strong> The vow to sing of <em>hesed</em> and <em>emunah</em>, and God&rsquo;s sworn promise to David.<br/><br/><strong style=\"color:#F2F2F8\">Verses 5-18 &mdash; The Incomparable Creator:</strong> The heavens praise God; he rules the raging sea; righteousness and justice are the foundation of his throne.<br/><br/><strong style=\"color:#F2F2F8\">Verses 19-37 &mdash; The Covenant Expanded:</strong> God anoints David, makes him firstborn among kings, and swears by his holiness never to violate the covenant even when David&rsquo;s sons sin.<br/><br/><strong style=\"color:#F2F2F8\">Verses 38-45 &mdash; The Lament:</strong> &ldquo;But now you have cast off and rejected&rdquo; &mdash; the throne is in ruins.<br/><br/><strong style=\"color:#F2F2F8\">Verses 46-52 &mdash; The Cry and the Doxology:</strong> &ldquo;How long, O LORD?&rdquo; followed by the benediction that closes Book 3 of the Psalter." }} />
            </div>

            <div style={cardStyle}>
              <h2 style={{ marginTop: 0, fontSize: "1.5rem" }}>Context</h2>
              <div style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "Psalm 89 is attributed to Ethan the Ezrahite, a wisdom figure named in 1 Kings 4:31. It is the climactic psalm of Book 3 of the Psalter (Psalms 73-89), a collection heavy with lament over the apparent failure of the nation, the temple, and the monarchy. The covenant it celebrates is the one God gave David in 2 Samuel 7 &mdash; the promise of an enduring house, throne, and kingdom. The lament of verses 38-51 is most naturally read against the catastrophe of the Babylonian exile (after 586 BC), when Jerusalem fell, the temple was destroyed, and no son of David reigned. The psalm gives voice to the unbearable question of that moment: if God swore an everlasting covenant to David, how can the throne now lie in the dust? The tension is left open in the psalm and resolved only in the New Testament, where Jesus &mdash; descended from David, raised from the dead, enthroned forever &mdash; is the Son in whom the oath is finally and fully kept (Luke 1:32-33; Acts 2:30; Romans 1:3)." }} />
            </div>
          </div>
        )}

        {tab === "themes" && (
          <div>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Six interlocking themes carry the psalm from praise to lament and toward its ultimate resolution. Tap each to expand.
            </p>
            {themeItems.map((item) => (
              <div key={item.id} style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
                <button onClick={() => toggle(item.id)} style={accordionHeader(open === item.id)}>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: item.color }} />
                    {item.title}
                  </span>
                  <span style={{ color: MUTED, fontSize: "1.4rem", lineHeight: 1 }}>{open === item.id ? "-" : "+"}</span>
                </button>
                {open === item.id && (
                  <div style={{ padding: "1.25rem 1.5rem", color: MUTED, fontSize: "1.02rem", lineHeight: 1.75 }}
                    dangerouslySetInnerHTML={{ __html: item.body }} />
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "verse" && (
          <div>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Work through Psalm 89 section by section, tracing the arc from the sworn covenant to the shattered throne. Tap each passage to expand.
            </p>
            {verseItems.map((item) => (
              <div key={item.id} style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
                <button onClick={() => toggle(item.id)} style={accordionHeader(open === item.id)}>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ color: GOLD, fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{item.ref}</span>
                    <span dangerouslySetInnerHTML={{ __html: item.label }} />
                  </span>
                  <span style={{ color: MUTED, fontSize: "1.4rem", lineHeight: 1 }}>{open === item.id ? "-" : "+"}</span>
                </button>
                {open === item.id && (
                  <div style={{ padding: "1.25rem 1.5rem", color: MUTED, fontSize: "1.02rem", lineHeight: 1.75 }}
                    dangerouslySetInnerHTML={{ __html: item.body }} />
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "application" && (
          <div>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Psalm 89 trains us to hold praise and protest together, to bring our honest questions to God, and to anchor our faith in his sworn character &mdash; ultimately fulfilled in the Son of David.
            </p>
            {applicationItems.map((item) => (
              <div key={item.id} style={{ ...cardStyle, borderLeft: `4px solid ${item.color}` }}>
                <h3 style={{ marginTop: 0, fontSize: "1.25rem" }}>{item.title}</h3>
                <div style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.75 }}
                  dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}

            <div style={{ ...cardStyle, borderLeft: `4px solid ${GOLD}` }}>
              <h3 style={{ marginTop: 0, fontSize: "1.3rem" }}>Questions for Reflection</h3>
              <ol style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.7, paddingLeft: "1.25rem", margin: 0 }}>
                {reflectionQuestions.map((q, i) => (
                  <li key={i} style={{ marginBottom: "0.9rem" }} dangerouslySetInnerHTML={{ __html: q }} />
                ))}
              </ol>
            </div>

            <h3 style={{ fontSize: "1.4rem", margin: "2.25rem 0 1.25rem" }}>Watch and Reflect</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ padding: "0.85rem 1rem", margin: 0, color: TEXT, fontSize: "0.95rem", fontWeight: 600 }}>{v.title}</p>
                </div>
              ))}
            </div>

            <div style={{ ...cardStyle, marginTop: "2.25rem", borderLeft: `4px solid ${PURPLE}` }}>
              <h3 style={{ marginTop: 0, fontSize: "1.3rem" }}>Closing Prayer</h3>
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.75, fontStyle: "italic", margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Faithful God, you swore an everlasting covenant and you cannot lie. When your promises seem buried in the dust and our hearts cry &ldquo;How long?&rdquo;, teach us to keep singing of your steadfast love and your faithfulness to all generations. Give us the courage to bring our honest questions to you and the faith to wait for your answer. We thank you that the throne cast to the ground has been raised in Jesus, the Son of David, whose kingdom has no end. In the strength of his sure mercy we trust you in the dark. Amen and Amen." }} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
