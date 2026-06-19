"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Psalm7Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "CE8QbkUCNK4", title: "Psalm 7 &mdash; A Shiggaion of David and the Plea for Vindication" },
    { videoId: "Q2oNOlXzBhY", title: "God the Righteous Judge Who Tests the Heart" },
    { videoId: "8phkAg8PMHE", title: "The Boomerang of Evil: When the Wicked Falls into His Own Pit" },
    { videoId: "fNk_zzaMoSs", title: "I Will Give Thanks to the LORD for His Righteousness" },
  ];

  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };
  const toggle = (id: string) => setOpen(open === id ? null : id);

  const overviewBlocks: { heading: string; color: string; html: string }[] = [
    {
      heading: "A Cry for Vindication",
      color: PURPLE,
      html:
        "<p>Psalm 7 is the prayer of a man wrongly accused. It opens with a soul fleeing for shelter: &ldquo;O LORD my God, in you do I take refuge; save me from all my pursuers and deliver me&rdquo; (7:1). David is hunted, slandered, and in danger of being torn apart &ldquo;like a lion&rdquo; (7:2), and he runs not to a fortress of stone but to the living God. The whole psalm is a sustained appeal to the one Judge whose verdict cannot be bought, bullied, or deceived &mdash; a plea that the truth be brought to light and the righteous established.</p>" +
        "<p>The heading calls it a <em>Shiggaion of David, which he sang to the LORD concerning the words of Cush, a Benjaminite</em>. The word <em>Shiggaion</em> is rare and uncertain, perhaps describing a wild, impassioned poem &mdash; and the psalm does indeed surge with strong feeling. Yet beneath the emotion runs a steady confidence in the moral order of the universe: that God sees, God tests, and God judges, and that in the end evil recoils upon the head of the one who devises it.</p>",
    },
    {
      heading: "The Shape of the Psalm",
      color: TEAL,
      html:
        "<p>Psalm 7 moves through several clear movements. <strong>First (7:1&ndash;2), the appeal for refuge:</strong> David flees to God lest his enemies tear his soul apart. <strong>Second (7:3&ndash;5), the oath of innocence:</strong> he calls down judgment on himself if he is guilty of the charges &mdash; &ldquo;if I have done this&hellip; let the enemy pursue my soul and overtake it.&rdquo; <strong>Third (7:6&ndash;8), the summons to the Judge:</strong> he calls God to arise, to gather the assembly of peoples, and to judge him according to his righteousness. <strong>Fourth (7:9&ndash;11), the righteous Judge who tests hearts:</strong> God who tries the minds and hearts is a shield to the upright and feels indignation at evil every day.</p>" +
        "<p><strong>Fifth (7:12&ndash;16), the recoil of evil:</strong> if a man will not repent, God will whet His sword and bend His bow; meanwhile the wicked conceives mischief and falls into the very pit he has dug. <strong>Finally (7:17), the vow of praise:</strong> &ldquo;I will give to the LORD the thanks due to his righteousness, and I will sing praise to the name of the LORD, the Most High.&rdquo; The psalm travels from danger and accusation all the way to confident thanksgiving in the justice of God.</p>",
    },
    {
      heading: "God Who Tests the Mind and Heart",
      color: GOLD,
      html:
        "<p>At the center of Psalm 7 stands one of Scripture&rsquo;s great affirmations about God: &ldquo;you who test the minds and hearts, O righteous God&rdquo; (7:9). The Hebrew phrase is literally &ldquo;hearts and kidneys&rdquo; &mdash; in the thought of ancient Israel the heart was the seat of thought and will, and the kidneys (the inward parts) the seat of the deepest emotions and motives. Together they name the whole inner life of a person, everything hidden beneath the surface.</p>" +
        "<p>This is the foundation of David&rsquo;s confidence. He cannot prove his innocence to his accusers, but he stands before a Judge who reads the heart itself. &ldquo;Man looks on the outward appearance, but the LORD looks on the heart&rdquo; (1 Samuel 16:7). The God who searches us and knows us (Psalm 139) needs no witnesses and can be fooled by no performance. To such a Judge David willingly opens his whole inner life, asking to be examined &mdash; for a clear conscience before the all-seeing God is worth more than the favor of every accuser on earth.</p>",
    },
    {
      heading: "The Setting and the Superscription",
      color: GREEN,
      html:
        "<p>The psalm is tied to &ldquo;the words of Cush, a Benjaminite.&rdquo; We do not know who Cush was, but the connection to the tribe of Benjamin recalls the days when David, though anointed, was hunted by Saul (also a Benjaminite) and slandered by Saul&rsquo;s supporters. The setting is therefore one of false accusation and mortal danger from people who claimed David had wronged them. Out of that crucible comes a prayer that refuses to take vengeance into its own hands and instead lays the whole case before God.</p>" +
        "<p>This refusal to retaliate is striking. David could have schemed, lied, or struck back; instead he submits his cause to the divine court. The &ldquo;pit&rdquo; imagery of verses 15 and 16 &mdash; the wicked falling into the hole he has dug &mdash; echoes through the Psalter (Psalm 9:15; 35:7&ndash;8; 57:6) and the Proverbs (&ldquo;Whoever digs a pit will fall into it,&rdquo; Proverbs 26:27). It expresses a deep biblical conviction: that God has woven a moral order into the world, so that evil, in the end, turns back upon its author.</p>",
    },
  ];

  const themeItems: { id: string; title: string; color: string; html: string }[] = [
    {
      id: "t-refuge",
      title: "Taking Refuge in God Against the Pursuers",
      color: PURPLE,
      html:
        "<p>&ldquo;O LORD my God, in you do I take refuge; save me from all my pursuers and deliver me, lest like a lion they tear my soul apart&rdquo; (7:1&ndash;2). The first instinct of faith under attack is not to fight back but to flee to God. David does not say he takes refuge in his army, his innocence, or his own cunning &mdash; he takes refuge in the LORD himself. Surrounded by enemies who would rend him like a lion with no one to rescue, he runs to the only shelter that cannot be overthrown.</p>" +
        "<p>This is one of the great recurring images of the Psalms: God as the refuge of the hunted and helpless. &ldquo;The LORD is a stronghold for the oppressed, a stronghold in times of trouble&rdquo; (Psalm 9:9); &ldquo;God is our refuge and strength, a very present help in trouble&rdquo; (Psalm 46:1). The New Testament gathers this hope into Christ, in whom we have &ldquo;fled for refuge&rdquo; and have &ldquo;a strong encouragement to hold fast to the hope set before us&rdquo; (Hebrews 6:18). When falsely accused and surrounded, the believer&rsquo;s first move is still the same as David&rsquo;s: into the shelter of God. <em>Cross references: Psalm 9:9; Psalm 46:1; Psalm 57:1; Hebrews 6:18.</em></p>",
    },
    {
      id: "t-oath",
      title: "The Willingness to Be Examined",
      color: ROSE,
      html:
        "<p>&ldquo;O LORD my God, if I have done this, if there is wrong in my hands&hellip; let the enemy pursue my soul and overtake it&rdquo; (7:3&ndash;5). This is the oath of innocence, a feature of ancient lament: the accused man calls down judgment on his own head if the charges against him are true. It is a breathtaking willingness to be examined. David does not merely protest his innocence; he stakes his very life upon it before God, inviting the worst if he has in fact done wrong.</p>" +
        "<p>This is no claim of sinless perfection &mdash; David elsewhere confesses his sin with deep sorrow (Psalm 51). It is the assertion of a clear conscience with respect to <em>this</em> particular charge. Such honesty before God is the fruit of a heart that fears Him more than it fears men. The believer is invited to the same searching openness: &ldquo;Search me, O God, and know my heart&hellip; and see if there be any grievous way in me&rdquo; (Psalm 139:23&ndash;24). To welcome God&rsquo;s examination is the surest sign of a heart that has nothing to hide. <em>Cross references: Job 31:5&ndash;40; Psalm 26:1&ndash;3; Psalm 139:23&ndash;24; 1 Corinthians 4:4.</em></p>",
    },
    {
      id: "t-judge",
      title: "God the Righteous Judge Who Tests Hearts",
      color: GOLD,
      html:
        "<p>&ldquo;Let the evil of the wicked come to an end, and may you establish the righteous &mdash; you who test the minds and hearts, O righteous God!&rdquo; (7:9). David does not appoint himself judge; he summons the true Judge and rests his case there. God is not a distant or indifferent deity but one who actively tries &mdash; tests, examines, weighs &mdash; the innermost being of every person. To such a Judge no slander sticks and no deception stands.</p>" +
        "<p>This is the bedrock of biblical justice. &ldquo;Shall not the Judge of all the earth do what is just?&rdquo; (Genesis 18:25). The LORD &ldquo;is a righteous judge, and a God who feels indignation every day&rdquo; (7:11) &mdash; His justice is not cold but morally engaged, grieved and angered by evil. The same God who searches the heart is the believer&rsquo;s shield (7:10), for the upright have nothing to fear from a Judge who sees the truth. In Christ this Judge has come near; God &ldquo;will judge the world in righteousness by a man whom he has appointed&rdquo; (Acts 17:31). <em>Cross references: Genesis 18:25; Jeremiah 17:10; Psalm 9:7&ndash;8; Acts 17:31.</em></p>",
    },
    {
      id: "t-sword",
      title: "Divine Judgment: The Sword and the Bow",
      color: TEAL,
      html:
        "<p>&ldquo;If a man does not repent, God will whet his sword; he has bent and readied his bow; he has prepared for him his deadly weapons, making his arrows fiery shafts&rdquo; (7:12&ndash;13). The imagery is vivid and sobering: God portrayed as a warrior sharpening His sword and stringing His bow against the unrepentant. Judgment is not God&rsquo;s eager impulse but His settled response to evil that refuses to turn. Notice the hinge of the whole picture: <em>&ldquo;if a man does not repent.&rdquo;</em></p>" +
        "<p>Here mercy and justice meet. The readied weapons are aimed only at the one who persists in wickedness; the door of repentance stands open until the final moment. God &ldquo;has no pleasure in the death of the wicked, but that the wicked turn from his way and live&rdquo; (Ezekiel 33:11). The same Scripture that warns of the bent bow pleads for the heart to turn. The patience of God is &ldquo;meant to lead you to repentance&rdquo; (Romans 2:4), even as it makes plain that &ldquo;our God is a consuming fire&rdquo; (Hebrews 12:29) to those who will not turn. <em>Cross references: Ezekiel 33:11; Romans 2:4&ndash;5; Deuteronomy 32:41; Hebrews 12:29.</em></p>",
    },
    {
      id: "t-pit",
      title: "The Boomerang of Evil",
      color: GREEN,
      html:
        "<p>&ldquo;He makes a pit, digging it out, and falls into the hole that he has made. His mischief returns upon his own head, and on his own skull his violence descends&rdquo; (7:15&ndash;16). This is one of the most striking pictures in all of Scripture: the wicked, who labors to trap the innocent, is caught in his own snare. The trap springs backward; the pit becomes a grave for its digger; the violence aimed at others falls upon the head that devised it. Evil is, in the end, self-destroying.</p>" +
        "<p>This moral &ldquo;boomerang&rdquo; recurs throughout the Bible. &ldquo;The nations have sunk in the pit that they made; in the net that they hid, their own foot has been caught&rdquo; (Psalm 9:15); &ldquo;Whoever digs a pit will fall into it, and a stone will come back on him who starts it rolling&rdquo; (Proverbs 26:27). Haman built a gallows and was hanged upon it (Esther 7:10). This is not random fate but the working of a moral order God has built into His world: &ldquo;whatever one sows, that will he also reap&rdquo; (Galatians 6:7). The believer need not avenge himself, for God has so ordered things that evil carries the seeds of its own undoing. <em>Cross references: Psalm 9:15&ndash;16; Psalm 35:7&ndash;8; Psalm 57:6; Proverbs 26:27; Galatians 6:7.</em></p>",
    },
    {
      id: "t-thanks",
      title: "The Resolve to Give Thanks for His Righteousness",
      color: PURPLE,
      html:
        "<p>&ldquo;I will give to the LORD the thanks due to his righteousness, and I will sing praise to the name of the LORD, the Most High&rdquo; (7:17). The psalm that began in danger and dread ends in song. David does not wait for the verdict to be visibly carried out; he gives thanks now, confident that the righteous Judge will do right. His praise is directed specifically at God&rsquo;s <em>righteousness</em> &mdash; the very quality that makes Him a safe refuge for the innocent and a terror to the unrepentant.</p>" +
        "<p>This closing vow shows where faith finally rests: not in the downfall of enemies but in the unshakable justice and goodness of God. To praise God for His righteousness is to declare that the world is in trustworthy hands, that wrongs will not stand forever, and that the Judge of all the earth will do what is just. It is the same confidence that lets the New Testament saints sing, &ldquo;Just and true are your ways, O King of the nations&rdquo; (Revelation 15:3). The believer&rsquo;s last word, even amid accusation, is thanksgiving. <em>Cross references: Psalm 9:1&ndash;2; Psalm 35:28; Revelation 15:3&ndash;4; Psalm 145:7.</em></p>",
    },
  ];

  const verseItems: { id: string; ref: string; color: string; html: string }[] = [
    {
      id: "v1",
      ref: "Psalm 7:1&ndash;2 &mdash; In You I Take Refuge",
      color: PURPLE,
      html:
        "<p>&ldquo;O LORD my God, in you do I take refuge; save me from all my pursuers and deliver me, lest like a lion they tear my soul apart, rending it in pieces, with none to deliver.&rdquo;</p>" +
        "<p>The psalm opens with the language of flight and shelter. David is being hunted, and his enemies are described with terrifying force &mdash; like a lion that seizes its prey and tears it apart with none to rescue. Yet the very first words anchor everything that follows: &ldquo;in you do I take refuge.&rdquo; Before he describes the danger, he names his shelter. His confidence is not in his own strength but in the covenant God he calls &ldquo;my God.&rdquo;</p>" +
        "<p>Here is the posture of faith under threat: to flee at once to God rather than to scheme or to despair. The image of the lion makes the peril real &mdash; this is no minor trouble but a matter of life and soul. And the phrase &ldquo;none to deliver&rdquo; underlines that no human help is in sight. It is precisely there, where every other rescue fails, that God alone becomes the refuge of His people. <em>Compare Psalm 17:11&ndash;12; Psalm 22:13; 1 Peter 5:8.</em></p>",
    },
    {
      id: "v2",
      ref: "Psalm 7:3&ndash;5 &mdash; The Oath of Innocence",
      color: ROSE,
      html:
        "<p>&ldquo;O LORD my God, if I have done this, if there is wrong in my hands, if I have repaid my friend with evil or plundered my enemy without cause, let the enemy pursue my soul and overtake it, and let him trample my life to the ground and lay my glory in the dust.&rdquo;</p>" +
        "<p>This is the bold self-imprecation of the accused. David offers himself for examination: if the charges are true &mdash; if there is wrong in his hands, if he has betrayed a friend or wronged even an enemy without cause &mdash; then let the pursuer catch him and trample him into the dust. He stakes his very life on his innocence in this matter. Such an oath was a recognized way of submitting a dispute to the divine court when human witnesses failed.</p>" +
        "<p>The willingness is remarkable. David does not merely protest; he invites the worst upon himself if he is guilty. This is the courage of a clear conscience that fears God more than it fears slander. It is not a claim to be sinless, but a refusal to live with hidden guilt before the all-seeing God. The believer is called to the same transparency: to be able to say, when wrongly accused, &ldquo;Search me and know my heart&rdquo; (Psalm 139:23). <em>Compare Job 31; Psalm 26:1&ndash;6; 1 Samuel 24:11&ndash;12.</em></p>",
    },
    {
      id: "v3",
      ref: "Psalm 7:6&ndash;8 &mdash; Arise, O LORD, and Judge",
      color: TEAL,
      html:
        "<p>&ldquo;Arise, O LORD, in your anger; lift yourself up against the fury of my enemies; awake for me; you have appointed a judgment. Let the assembly of the peoples be gathered about you; over it return on high. The LORD judges the peoples; judge me, O LORD, according to my righteousness and according to the integrity that is in me.&rdquo;</p>" +
        "<p>David now summons the Judge to take His seat. &ldquo;Arise&hellip; awake for me&rdquo; is the cry that God would act, that the court of heaven would be convened. He pictures the assembly of the peoples gathered about God enthroned on high &mdash; the whole world brought before the universal Judge. And then comes the bold petition: &ldquo;judge me&hellip; according to my righteousness and the integrity that is in me.&rdquo; David does not ask to escape judgment; he asks for it, confident that a fair hearing will clear him.</p>" +
        "<p>Only an innocent man in a particular cause can pray this way, and even then it is the integrity of his case, not the perfection of his soul, that he pleads. The verse holds together two great truths: God judges all the peoples, and yet He attends to the cause of one falsely accused servant. The Judge of the nations is also the vindicator of the wronged. <em>Compare Psalm 9:7&ndash;8; Psalm 26:1; Genesis 18:25.</em></p>",
    },
    {
      id: "v4",
      ref: "Psalm 7:9&ndash;11 &mdash; You Test the Minds and Hearts",
      color: GOLD,
      html:
        "<p>&ldquo;Oh, let the evil of the wicked come to an end, and may you establish the righteous &mdash; you who test the minds and hearts, O righteous God! My shield is with God, who saves the upright in heart. God is a righteous judge, and a God who feels indignation every day.&rdquo;</p>" +
        "<p>Here is the heart of the psalm. David prays that evil would end and the righteous be established, and he grounds this hope in the searching knowledge of God: &ldquo;you who test the minds and hearts.&rdquo; The Hebrew is literally &ldquo;hearts and kidneys&rdquo; &mdash; the seat of thought and the seat of the deepest feelings, the whole hidden inner life. Before this God no pretense survives and no slander stands; He weighs the secret motives of every heart.</p>" +
        "<p>Because of this, David can say, &ldquo;My shield is with God, who saves the upright in heart.&rdquo; The One who tests the heart is also the protector of those whose hearts are true. And the section ends with a sobering note often softened today: God &ldquo;feels indignation every day.&rdquo; His justice is not detached; He is morally moved against evil, grieved and angered by it daily. Such a Judge is at once the comfort of the innocent and the dread of the unrepentant. <em>Compare 1 Samuel 16:7; Jeremiah 17:10; Psalm 11:5&ndash;7.</em></p>",
    },
    {
      id: "v5",
      ref: "Psalm 7:12&ndash;16 &mdash; The Pit He Has Dug",
      color: GREEN,
      html:
        "<p>&ldquo;If a man does not repent, God will whet his sword; he has bent and readied his bow; he has prepared for him his deadly weapons, making his arrows fiery shafts. Behold, the wicked man conceives evil and is pregnant with mischief and gives birth to lies. He makes a pit, digging it out, and falls into the hole that he has made. His mischief returns upon his own head, and on his own skull his violence descends.&rdquo;</p>" +
        "<p>Two images dominate this section. First, God as a warrior: if a man will not repent, the divine sword is whetted and the bow bent and the deadly arrows made ready. Judgment is poised &mdash; but the whole picture turns on that opening condition, &ldquo;if a man does not repent.&rdquo; The weapons are not yet loosed; the door of mercy still stands open. Second, the wicked man is described in a vivid metaphor of pregnancy: he conceives evil, swells with mischief, and gives birth to lies &mdash; his sin gestates within him until it is born into the world.</p>" +
        "<p>Then comes the great reversal. He digs a pit to trap the innocent and tumbles into it himself; his mischief comes back upon his own head; his violence descends on his own skull. This is the moral order God has built into the world: evil recoils upon its author. The schemer is undone by his own scheme. The believer who suffers injustice may rest in this &mdash; not gloating, but trusting that God has so ordered things that wickedness, in the end, destroys itself. <em>Compare Proverbs 26:27; Psalm 9:15&ndash;16; Esther 7:10; James 1:15.</em></p>",
    },
    {
      id: "v6",
      ref: "Psalm 7:17 &mdash; I Will Give Thanks to the LORD",
      color: PURPLE,
      html:
        "<p>&ldquo;I will give to the LORD the thanks due to his righteousness, and I will sing praise to the name of the LORD, the Most High.&rdquo;</p>" +
        "<p>The psalm that began in flight and accusation ends in thanksgiving and song. David does not wait until he sees the verdict carried out; he gives thanks now, in faith, because he is sure of the character of the Judge. His praise is aimed precisely at God&rsquo;s <em>righteousness</em> &mdash; the very attribute that has been the theme of the whole psalm. The God who tests hearts, who shields the upright, and who turns evil back upon the wicked is worthy of thanks.</p>" +
        "<p>This single verse shows where faith finally lands. Surrounded by enemies and slandered by false witnesses, David&rsquo;s last word is not bitterness but worship. To give God &ldquo;the thanks due to his righteousness&rdquo; is to declare that justice belongs to Him and will be done, that the world rests in trustworthy hands. The title &ldquo;the Most High&rdquo; lifts the eyes above every earthly accuser to the One enthroned over all. The believer&rsquo;s truest answer to injustice is, in the end, a song. <em>Compare Psalm 9:1&ndash;2; Psalm 92:1&ndash;2; Revelation 15:3&ndash;4.</em></p>",
    },
  ];

  const appBlocks: { heading: string; color: string; html: string }[] = [
    {
      heading: "Run to God When You Are Wronged",
      color: PURPLE,
      html:
        "<p>When David was hunted and slandered, his first move was not to retaliate but to take refuge in God. This is the discipline Psalm 7 presses upon us. Our instinct when wronged is often to defend ourselves loudly, to nurse the offense, or to plot a return blow. David shows a better way: &ldquo;in you do I take refuge.&rdquo; He brings the whole matter &mdash; the danger, the accusation, the helplessness &mdash; into the presence of God before he does anything else.</p>" +
        "<p>This does not mean we never speak the truth or seek lawful protection. It means that God, not our own strength or vengeance, is our first and deepest shelter. &ldquo;Beloved, never avenge yourselves, but leave it to the wrath of God&rdquo; (Romans 12:19). When false accusation comes, flee first to the One who sees all and judges justly, and let Him be your refuge while you wait.</p>",
    },
    {
      heading: "Welcome the Examination of God",
      color: TEAL,
      html:
        "<p>David&rsquo;s oath of innocence is staggering in its openness: &ldquo;if there is wrong in my hands&hellip; let the enemy overtake me.&rdquo; He invites God&rsquo;s scrutiny rather than dreading it. This is only possible for a heart with nothing hidden. The God who tests &ldquo;the minds and hearts&rdquo; cannot be deceived, and the believer&rsquo;s comfort is not that he can fool the Judge but that he need not &mdash; for his conscience is clear in the matter at hand.</p>" +
        "<p>Make it your practice to invite, not avoid, the searching gaze of God: &ldquo;Search me, O God, and know my heart&hellip; and see if there be any grievous way in me&rdquo; (Psalm 139:23&ndash;24). Where He finds sin, confess it and be cleansed; where He finds you wrongly accused, rest in His knowledge of the truth. A heart that welcomes God&rsquo;s examination has found a peace that no accuser can take away.</p>",
    },
    {
      heading: "Trust the Judge Who Sees the Heart",
      color: GOLD,
      html:
        "<p>The deepest comfort of Psalm 7 is that our cause is heard by a Judge who reads the heart itself. We cannot always clear our name before others; the truth may be twisted and the verdict of men may go against us. But &ldquo;the LORD looks on the heart&rdquo; (1 Samuel 16:7), and He &ldquo;will bring to light the things now hidden in darkness and will disclose the purposes of the heart&rdquo; (1 Corinthians 4:5). No injustice is final before Him.</p>" +
        "<p>This frees us from the exhausting need to vindicate ourselves at every turn. We can entrust our reputation, our cause, and our future to a righteous God who feels indignation against evil every day and who will, in His time, establish the righteous and bring the evil of the wicked to an end. Live before the audience of the One who sees all, and you will be able to bear the misjudgments of those who see little.</p>",
    },
    {
      heading: "Leave Vengeance to the Moral Order of God",
      color: GREEN,
      html:
        "<p>Psalm 7 teaches that evil carries the seeds of its own undoing: the one who digs a pit falls into it; mischief returns upon its author&rsquo;s head. This is not a license to gloat over an enemy&rsquo;s ruin, but a release from the burden of revenge. We need not engineer the downfall of those who wrong us, for God has woven justice into the very fabric of His world. &ldquo;Whatever one sows, that will he also reap&rdquo; (Galatians 6:7).</p>" +
        "<p>And notice the mercy folded into the warning: the bent bow is aimed only at the one who &ldquo;does not repent.&rdquo; Even toward our enemies, then, we may pray and hope for repentance rather than ruin, knowing that God takes no pleasure in the death of the wicked (Ezekiel 33:11). Lay down your right to retaliate, trust the justice of God, and let your final response be the one David chose: thanksgiving and song for the righteousness of the LORD.</p>",
    },
  ];

  const questions: string[] = [
    "When you are wronged or falsely accused, what is your first instinct &mdash; to defend yourself, to retaliate, or to take refuge in God? How does David&rsquo;s opening cry, &ldquo;in you do I take refuge,&rdquo; challenge that instinct?",
    "David is willing to invite God&rsquo;s examination, even calling down judgment on himself if he is guilty. Is there any area of your life you are reluctant to open to God&rsquo;s searching gaze, and what would it look like to pray &ldquo;Search me, O God&rdquo; over it?",
    "Psalm 7:9 declares that God &ldquo;tests the minds and hearts.&rdquo; How does living before a Judge who sees your inner motives, not just your outward actions, change the way you think, speak, and act in private?",
    "The bent bow of God&rsquo;s judgment is aimed only at the one who &ldquo;does not repent&rdquo; (7:12). How does this hold together God&rsquo;s justice and His mercy, and how might it shape the way you pray even for those who have wronged you?",
    "The wicked &ldquo;makes a pit&hellip; and falls into the hole that he has made&rdquo; (7:15). How does the conviction that evil ultimately recoils on its author free you from the burden of taking revenge into your own hands?",
    "The psalm ends with David giving thanks for God&rsquo;s righteousness before the situation is visibly resolved (7:17). What would it look like for you to respond to an ongoing injustice in your life with worship and thanksgiving rather than bitterness?",
  ];

  const prayerHtml =
    "<p>O LORD my God, in you do I take refuge. When I am pursued and falsely accused, save me and deliver me, for you alone are my shield and my hiding place. I bring my cause to you, the righteous Judge who tests the minds and hearts, and I lay down my desire to defend or to avenge myself. You see what no one else can see; you know the truth that men have twisted, and to you I entrust it.</p>" +
    "<p>Search me, O God, and know my heart. Where there is wrong in my hands, expose it and cleanse me; where I am wronged, vindicate me in your time and in your way. Keep me from bitterness and from the desire to repay evil for evil. Teach me to trust the moral order you have woven into your world, so that I need not dig pits for my enemies but may leave all judgment to you.</p>" +
    "<p>I thank you that in Christ the righteous Judge has come near, the one who, when reviled, did not revile in return, but entrusted himself to him who judges justly. Make me like him. And so, even now, before I see the outcome, I will give to you the thanks due to your righteousness, and I will sing praise to your name, O LORD, the Most High. In the name of Jesus, my refuge and my vindication, Amen.</p>";

  const tabBtnStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.6rem 1.1rem",
    borderRadius: 999,
    border: `1px solid ${active ? PURPLE : BORDER}`,
    background: active ? PURPLE : "transparent",
    color: active ? "#FFFFFF" : MUTED,
    cursor: "pointer",
    fontSize: "0.95rem",
    fontWeight: 600,
    whiteSpace: "nowrap",
    transition: "all 0.15s ease",
  });

  const accordion = (
    items: { id: string; title?: string; ref?: string; color: string; html: string }[]
  ) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
      {items.map((it) => {
        const isOpen = open === it.id;
        const label = it.title ?? it.ref ?? "";
        return (
          <div
            key={it.id}
            style={{
              background: CARD,
              border: `1px solid ${isOpen ? it.color : BORDER}`,
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <button
              type="button"
              onClick={() => toggle(it.id)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                padding: "1.1rem 1.3rem",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: it.color,
                    flexShrink: 0,
                    boxShadow: `0 0 12px ${it.color}`,
                  }}
                />
                <span
                  dangerouslySetInnerHTML={{ __html: label }}
                  style={{ color: TEXT, fontSize: "1.08rem", fontWeight: 600 }}
                />
              </span>
              <span
                style={{
                  color: it.color,
                  fontSize: "1.4rem",
                  lineHeight: 1,
                  transform: isOpen ? "rotate(45deg)" : "none",
                  transition: "transform 0.2s ease",
                }}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div
                dangerouslySetInnerHTML={{ __html: it.html }}
                style={{
                  padding: "0 1.3rem 1.3rem",
                  color: MUTED,
                  fontSize: "1.02rem",
                  lineHeight: 1.75,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: "var(--header-height, 80px)",
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <style>{`
        .vine-prose p { margin: 0 0 1rem; }
        .vine-prose p:last-child { margin-bottom: 0; }
        .vine-prose strong { color: ${TEXT}; }
        .vine-prose em { color: ${MUTED}; }
      `}</style>

      {/* Hero */}
      <section
        style={{
          maxWidth: 920,
          margin: "0 auto",
          padding: "2.5rem 1.5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: PURPLE,
            fontWeight: 700,
            marginBottom: "0.9rem",
          }}
        >
          The Vine &middot; Bible Study
        </div>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            margin: "0 0 0.6rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Psalm 7
        </h1>
        <p
          style={{
            color: MUTED,
            fontSize: "1.15rem",
            margin: "0 auto 1.6rem",
            maxWidth: 620,
            lineHeight: 1.6,
          }}
        >
          A Shiggaion of David &mdash; a plea for vindication against false
          accusation, and a meditation on God as the righteous Judge who tests
          the minds and hearts.
        </p>
        <div
          style={{
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderLeft: `4px solid ${GOLD}`,
            borderRadius: 14,
            padding: "1.3rem 1.5rem",
            maxWidth: 640,
            margin: "0 auto",
            textAlign: "left",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: GOLD,
              fontWeight: 700,
              marginBottom: "0.5rem",
            }}
          >
            Key Verse &middot; Psalm 7:9
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;Oh, let the evil of the wicked come to an end, and may you establish the righteous &mdash; you who test the minds and hearts, O righteous God!&rdquo;",
            }}
            style={{
              margin: 0,
              fontSize: "1.3rem",
              lineHeight: 1.55,
              fontStyle: "italic",
              color: TEXT,
            }}
          />
        </div>
      </section>

      {/* Tab bar */}
      <nav
        style={{
          position: "sticky",
          top: "var(--header-height, 80px)",
          zIndex: 20,
          background: "rgba(7,7,15,0.85)",
          backdropFilter: "blur(10px)",
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          padding: "0.85rem 1rem",
        }}
      >
        <div
          style={{
            maxWidth: 920,
            margin: "0 auto",
            display: "flex",
            gap: "0.6rem",
            overflowX: "auto",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setTab(t);
                setOpen(null);
              }}
              style={tabBtnStyle(tab === t)}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>
      </nav>

      {/* Panels */}
      <main
        style={{
          maxWidth: 920,
          margin: "0 auto",
          padding: "2rem 1.5rem 4rem",
        }}
      >
        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {overviewBlocks.map((b, i) => (
              <article
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${b.color}`,
                  borderRadius: 16,
                  padding: "1.6rem 1.7rem",
                }}
              >
                <h2
                  style={{
                    margin: "0 0 1rem",
                    fontSize: "1.45rem",
                    fontWeight: 700,
                    color: b.color,
                  }}
                >
                  {b.heading}
                </h2>
                <div
                  className="vine-prose"
                  dangerouslySetInnerHTML={{ __html: b.html }}
                  style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.78 }}
                />
              </article>
            ))}
          </div>
        )}

        {tab === "themes" && (
          <div>
            <p
              style={{
                color: MUTED,
                fontSize: "1.05rem",
                lineHeight: 1.7,
                marginTop: 0,
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              Six threads run through this impassioned psalm. Tap each to explore
              the theme and its connections across Scripture.
            </p>
            {accordion(themeItems)}
          </div>
        )}

        {tab === "verse" && (
          <div>
            <p
              style={{
                color: MUTED,
                fontSize: "1.05rem",
                lineHeight: 1.7,
                marginTop: 0,
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              Walk through Psalm 7 from the cry for refuge, through the oath of
              innocence and the summons to the Judge, to the closing song of
              thanksgiving.
            </p>
            {accordion(verseItems)}
          </div>
        )}

        {tab === "application" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {appBlocks.map((b, i) => (
                <article
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderLeft: `4px solid ${b.color}`,
                    borderRadius: 14,
                    padding: "1.5rem 1.6rem",
                  }}
                >
                  <h2
                    style={{
                      margin: "0 0 0.9rem",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: b.color,
                    }}
                  >
                    {b.heading}
                  </h2>
                  <div
                    className="vine-prose"
                    dangerouslySetInnerHTML={{ __html: b.html }}
                    style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.78 }}
                  />
                </article>
              ))}
            </div>

            {/* Reflection questions */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderTop: `3px solid ${TEAL}`,
                borderRadius: 16,
                padding: "1.7rem 1.8rem",
              }}
            >
              <h2
                style={{
                  margin: "0 0 1.2rem",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: TEAL,
                }}
              >
                Questions for Reflection
              </h2>
              <ol
                style={{
                  margin: 0,
                  paddingLeft: "1.3rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {questions.map((q, i) => (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{ __html: q }}
                    style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7 }}
                  />
                ))}
              </ol>
            </div>

            {/* Videos */}
            <div>
              <h2
                style={{
                  margin: "0 0 1.2rem",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: PURPLE,
                  textAlign: "center",
                }}
              >
                Watch &amp; Reflect
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "1.2rem",
                }}
              >
                {videoItems.map((v) => (
                  <div
                    key={v.videoId}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 14,
                      overflow: "hidden",
                    }}
                  >
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div
                      dangerouslySetInnerHTML={{ __html: v.title }}
                      style={{
                        padding: "0.9rem 1.1rem",
                        color: TEXT,
                        fontSize: "0.98rem",
                        fontWeight: 600,
                        lineHeight: 1.45,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Closing prayer */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderTop: `3px solid ${GOLD}`,
                borderRadius: 16,
                padding: "1.8rem",
              }}
            >
              <h2
                style={{
                  margin: "0 0 1.1rem",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: GOLD,
                }}
              >
                A Closing Prayer
              </h2>
              <div
                className="vine-prose"
                dangerouslySetInnerHTML={{ __html: prayerHtml }}
                style={{
                  color: MUTED,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                }}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
