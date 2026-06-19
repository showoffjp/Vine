"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

interface Accordion {
  id: string;
  title: string;
  reference: string;
  body: string;
}

interface Block {
  heading: string;
  reference: string;
  paragraphs: string[];
}

const overviewBlocks: Block[] = [
  {
    heading: "The Congregation Prays for the King",
    reference: "Psalm 20:1&ndash;9",
    paragraphs: [
      "Psalm 20 is a royal psalm, the prayer of a worshiping congregation gathered around their king on the eve of battle. Before the army marches out, the people of God lift their voices in intercession: &ldquo;May the LORD answer you in the day of trouble! May the name of the God of Jacob protect you!&rdquo; (20:1). The whole psalm breathes the atmosphere of a sanctuary filled with people whose hearts are bound up with the one they are sending into danger.",
      "What makes Psalm 20 so moving is that it is not primarily a prayer for oneself but a prayer for another. The congregation is not asking God to bless their own ventures; they are pleading for the king, calling down upon him the help of heaven, the protection of God&rsquo;s name, and the granting of his heart&rsquo;s desire. It is one of the Bible&rsquo;s great models of intercessory prayer &mdash; the costly, generous work of carrying another person before the throne of God.",
      "The psalm divides naturally into two movements. The first (verses 1&ndash;5) is a series of petitions offered on the king&rsquo;s behalf: may the LORD answer, protect, send help, remember the offerings, grant the heart&rsquo;s desire, fulfill the plans. The second (verses 6&ndash;9) is a turn from petition to confidence: &ldquo;Now I know that the LORD saves his anointed&rdquo; (20:6). The mood shifts from asking to assurance, from supplication to triumphant trust.",
      "At the hinge of that confidence stands the famous declaration of verse 7, one of the most quoted lines in all the Psalter: &ldquo;Some trust in chariots and some in horses, but we trust in the name of the LORD our God.&rdquo; Here the psalm names the great choice that confronts every people and every heart &mdash; the choice between trusting in visible power and trusting in the living God. It is the theological center of the entire poem.",
      "Psalm 20 is attributed to David, the warrior-king of Israel, and it would have been sung in the worship of God&rsquo;s people as they faced the very real threats of ancient warfare. Yet it speaks far beyond its original setting. It teaches us how to intercede for our leaders and for one another, how to face danger with confidence in God rather than in our own resources, and how to look forward to the true King, the LORD&rsquo;s anointed, whom God would surely save.",
    ],
  },
  {
    heading: "From Petition to Confidence",
    reference: "Psalm 20:1&ndash;9",
    paragraphs: [
      "The structure of Psalm 20 is one of its great gifts, for it models the very movement that intercessory prayer is meant to produce in us. The psalm begins on its knees, pouring out petition after petition for the king. But it does not stay there. By verse 6 it has risen to its feet in confidence, and by verse 9 it cries out one final time, no longer anxious but assured.",
      "In the first movement (verses 1&ndash;5), the people surround their king with prayer. They ask that the LORD would answer him, protect him, send him help from the sanctuary, remember his offerings, grant his heart&rsquo;s desire, and fulfill all his plans. The prayers are specific and generous, covering both the king&rsquo;s safety and the success of his righteous purposes. They long to &ldquo;shout for joy over your salvation&rdquo; and to &ldquo;set up our banners&rdquo; in the name of God (20:5).",
      "Then comes the turn. &ldquo;Now I know that the LORD saves his anointed; he will answer him from his holy heaven with the saving might of his right hand&rdquo; (20:6). Something has shifted. The plural &ldquo;we&rdquo; of petition gives way to a confident singular voice &mdash; perhaps a priest, a prophet, or the king himself &mdash; declaring that God will surely act. The prayer has become certainty.",
      "This movement from petition to confidence is the inner logic of faith-filled prayer. We come to God with our requests, and as we pray, the Spirit lifts our eyes from the size of the threat to the greatness of God, until asking ripens into trust. By the end of the psalm the congregation can face the battle not because the danger has lessened but because they have remembered who their God is.",
    ],
  },
  {
    heading: "The Setting of Holy War and Worship",
    reference: "Background and Context",
    paragraphs: [
      "To read Psalm 20 rightly we must remember that Israel&rsquo;s battles were not merely military events but theological ones. The wars of God&rsquo;s people were understood as the LORD&rsquo;s wars, fought under his banner and won by his hand. When the king went out to battle, the question was never simply whether Israel&rsquo;s army was strong enough, but whether the LORD was with them. Victory belonged to God.",
      "This is why the psalm speaks of offerings and sacrifices (verse 3) and of help &ldquo;from the sanctuary&rdquo; (verse 2). Before the army marched, worship was offered; the king&rsquo;s cause was committed to God in the place of his presence. The congregation&rsquo;s prayer was bound up with the worship of the temple, and their confidence rested not on the count of their soldiers but on the favor of their God.",
      "The great temptation in such a setting was always to trust the instruments of war themselves &mdash; the chariots and horses that represented the cutting-edge military technology of the ancient world. A nation with many chariots felt secure; a nation without them felt exposed. Against this instinct the law had warned that Israel&rsquo;s king must not &ldquo;acquire many horses for himself&rdquo; (Deuteronomy 17:16), and the prophets repeatedly rebuked those who looked to Egypt&rsquo;s cavalry rather than to the Holy One of Israel (Isaiah 31:1).",
      "Psalm 20 stands squarely within this stream of teaching. It is the worshiping answer to the perennial temptation to trust in visible power. As the people gather to send their king into battle, they declare where their true confidence lies: not in chariots, not in horses, but in the name of the LORD their God. And in doing so they teach every generation of believers where to anchor their hope when they face their own days of trouble.",
    ],
  },
];

const themeItems: Accordion[] = [
  {
    id: "t1",
    title: "Interceding for Another in the Day of Trouble",
    reference: "Psalm 20:1&ndash;5; cf. 1 Timothy 2:1&ndash;2",
    body:
      "Psalm 20 is, at its heart, a prayer for someone else. The congregation does not pray, &ldquo;May the LORD answer us,&rdquo; but, &ldquo;May the LORD answer you in the day of trouble&rdquo; (20:1). The whole first movement is poured out on behalf of the king &mdash; that God would protect him, send him help, remember his offerings, grant his heart&rsquo;s desire, and fulfill all his plans. It is one of Scripture&rsquo;s purest examples of intercessory prayer.<br/><br/>Intercession is the costly, generous work of carrying another person before the throne of God. It requires that we set aside our own preoccupations long enough to enter into the burdens of someone else, to feel their danger as our own, to plead for their good as earnestly as we would plead for ourselves. The congregation in Psalm 20 does exactly this, surrounding their king with a hedge of prayer before he faces the battle.<br/><br/>The New Testament takes up this calling and presses it upon the church. &ldquo;I urge that supplications, prayers, intercessions, and thanksgivings be made for all people, for kings and all who are in high positions&rdquo; (1 Timothy 2:1&ndash;2). And we have a great Intercessor who models it perfectly: Jesus &ldquo;always lives to make intercession&rdquo; for his people (Hebrews 7:25). Psalm 20 trains us to be a people who pray not only for ourselves but for one another and for those who lead us.",
  },
  {
    id: "t2",
    title: "The Corporate We Rejoicing in Salvation",
    reference: "Psalm 20:5; cf. Romans 12:15",
    body:
      "Psalm 20 is sung in the first person plural. It is the prayer of a &ldquo;we&rdquo; &mdash; a gathered congregation whose lives are knit together with the one for whom they pray. &ldquo;May we shout for joy over your salvation, and in the name of our God set up our banners!&rdquo; (20:5). The king&rsquo;s deliverance is not his alone; it becomes the joy of the whole people, who long to celebrate his salvation as their own.<br/><br/>This corporate dimension is central to biblical faith. We are not saved as isolated individuals but as a people, a body, a covenant community. The blessing of one member is the joy of all; the danger of one is the concern of all. &ldquo;Rejoice with those who rejoice, weep with those who weep&rdquo; (Romans 12:15). Psalm 20 embodies this shared life, in which the congregation cannot rest while their king is in danger and cannot help but celebrate when he is delivered.<br/><br/>The image of setting up &ldquo;banners&rdquo; in the name of God captures the corporate joy beautifully. A banner is a public, communal sign &mdash; raised together, seen by all, declaring whose army has triumphed and by whose power. When God saves, his people do not celebrate quietly and alone; they lift their banners together and shout for joy, giving public glory to the name of the God who delivered them.",
  },
  {
    id: "t3",
    title: "Chariots and Horses Versus the Name of the LORD",
    reference: "Psalm 20:7; cf. Deuteronomy 17:16; Isaiah 31:1",
    body:
      "At the theological center of the psalm stands its most famous line: &ldquo;Some trust in chariots and some in horses, but we trust in the name of the LORD our God&rdquo; (20:7). Here the great choice of faith is laid bare. Chariots and horses were the most powerful military assets of the ancient world &mdash; visible, impressive, the very picture of strength. To trust in them was to trust in what could be seen, counted, and controlled.<br/><br/>The contrast of trust runs all through Scripture. The law warned Israel&rsquo;s king not to &ldquo;acquire many horses for himself&rdquo; (Deuteronomy 17:16), lest he learn to lean on cavalry rather than on God. The prophet Isaiah pronounced woe on &ldquo;those who go down to Egypt for help and rely on horses, who trust in chariots&hellip; but do not look to the Holy One of Israel&rdquo; (Isaiah 31:1). Again and again, God&rsquo;s people are summoned to trust the unseen Lord rather than the visible instruments of power.<br/><br/>This is not a denial that means matter, but a declaration of where ultimate confidence belongs. The temptation in every age is to anchor our security in something we can manage &mdash; wealth, technology, influence, military might &mdash; rather than in the living God. Psalm 20 calls us to a deliberate, public reversal: to name our chariots and horses for what they are, and to confess that our trust is in the name of the LORD. &ldquo;Some trust&hellip; but we trust&rdquo; &mdash; the contrast is meant to become the confession of every believing heart.",
  },
  {
    id: "t4",
    title: "Trusting the Name of the LORD",
    reference: "Psalm 20:1, 5, 7; cf. Proverbs 18:10",
    body:
      "The word &ldquo;name&rdquo; rings through Psalm 20 like a refrain. The people pray that &ldquo;the name of the God of Jacob&rdquo; would protect the king (20:1); they long to set up their banners &ldquo;in the name of our God&rdquo; (20:5); and they confess that they trust &ldquo;in the name of the LORD our God&rdquo; (20:7). To trust in the name of the LORD is to trust in his revealed character &mdash; in all that he has shown himself to be in his covenant dealings with his people.<br/><br/>A name in Scripture is far more than a label; it is the disclosure of a person. The name of the LORD gathers up his power, his faithfulness, his steadfast love, his justice, and his saving might. To take refuge in that name is to rest the whole weight of one&rsquo;s confidence on the proven trustworthiness of God himself. &ldquo;The name of the LORD is a strong tower; the righteous man runs into it and is safe&rdquo; (Proverbs 18:10).<br/><br/>This is why the contrast of verse 7 is so pointed. Chariots and horses can be counted and measured; the name of the LORD cannot. Yet it is the name, not the chariots, that holds firm when the battle comes. The believer who has learned to trust the name of God has found a refuge that no enemy can overcome, an anchor that holds when every visible support gives way. And the fullest revelation of that name is Jesus, the name above every name, in whom alone there is salvation (Acts 4:12).",
  },
  {
    id: "t5",
    title: "The LORD Saves His Anointed: A Messianic Reading",
    reference: "Psalm 20:6; cf. Acts 2:36; Philippians 2:9&ndash;11",
    body:
      "The confident heart of the psalm beats in verse 6: &ldquo;Now I know that the LORD saves his anointed; he will answer him from his holy heaven with the saving might of his right hand.&rdquo; The word translated &ldquo;anointed&rdquo; is mashiach &mdash; messiah. In its first setting it refers to the anointed king of Israel, David or his royal successor, the one set apart by God to lead his people.<br/><br/>But the royal psalms always strain beyond the imperfect kings of Israel toward the true King who was to come. Every anointed son of David pointed forward to the great Anointed One, Jesus the Messiah, the Christ. And the confidence of Psalm 20 &mdash; that the LORD saves his anointed &mdash; finds its deepest and surest fulfillment in him. God did indeed answer his Anointed from his holy heaven, raising him from the dead and seating him at his right hand.<br/><br/>The early church proclaimed exactly this: &ldquo;God has made him both Lord and Christ, this Jesus whom you crucified&rdquo; (Acts 2:36). The Father has &ldquo;highly exalted him and bestowed on him the name that is above every name&rdquo; (Philippians 2:9). When we read &ldquo;the LORD saves his anointed,&rdquo; we may read it as a promise gloriously kept in Christ &mdash; and we may take heart, for those who belong to the Anointed One are saved together with him.",
  },
  {
    id: "t6",
    title: "They Collapse but We Rise",
    reference: "Psalm 20:8&ndash;9; cf. 2 Corinthians 4:8&ndash;9",
    body:
      "The contrast of trust issues in a contrast of outcomes: &ldquo;They collapse and fall, but we rise and stand upright&rdquo; (20:8). Those who trusted in chariots and horses come crashing down when their visible strength fails them; those who trusted in the name of the LORD are raised up and set firmly on their feet. The destiny of a life is bound to the object of its trust.<br/><br/>This is not a guarantee of an easy road. Those who trust in God may be hard pressed, struck down, and surrounded by trouble. But they are not destroyed, not finally overthrown. &ldquo;We are afflicted in every way, but not crushed; perplexed, but not driven to despair; persecuted, but not forsaken; struck down, but not destroyed&rdquo; (2 Corinthians 4:8&ndash;9). The God in whom they trust raises them up.<br/><br/>The psalm closes with one final cry: &ldquo;O LORD, save the king! May he answer us when we call&rdquo; (20:9). Having moved from petition to confidence, the congregation returns to prayer &mdash; but it is now a prayer rooted in assurance. They have remembered who their God is, and they call upon him with hope. So too the believer, having confessed that we trust in the name of the LORD, faces the day of trouble with a confidence that the world&rsquo;s collapsing securities can never provide.",
  },
];

const verseItems: Accordion[] = [
  {
    id: "v1",
    title: "The Prayer: May the LORD Answer You",
    reference: "Psalm 20:1&ndash;3",
    body:
      "&ldquo;May the LORD answer you in the day of trouble! May the name of the God of Jacob protect you! May he send you help from the sanctuary and give you support from Zion! May he remember all your offerings and regard with favor your burnt sacrifices!&rdquo; The psalm opens with the congregation surrounding their king in prayer as he faces the day of battle.<br/><br/>Notice the direction of the prayer: it is all for &ldquo;you,&rdquo; the king. The people ask that the LORD would answer him, that the name of the God of Jacob would protect him, that help and support would come to him from the sanctuary and from Zion &mdash; that is, from the very presence of God among his people. Their confidence is that the help the king needs comes not from the armory but from the holy place where God dwells.<br/><br/>The mention of &ldquo;offerings&rdquo; and &ldquo;burnt sacrifices&rdquo; reminds us that before the king went out to war, worship was offered and his cause was committed to God. The people pray that the LORD would &ldquo;remember&rdquo; these offerings and regard them with favor &mdash; that the worship already given would be answered with divine help in the hour of need.<br/><br/>This opening establishes the whole tone of the psalm. It is intercession grounded in worship, the cry of a people who know that their king&rsquo;s safety rests not in his own strength but in the favor of the God they have come to seek. It teaches us to surround those who lead us, and those we love, with prayer in their day of trouble.",
  },
  {
    id: "v2",
    title: "May He Grant Your Heart's Desire",
    reference: "Psalm 20:4&ndash;5",
    body:
      "&ldquo;May he grant you your heart&rsquo;s desire and fulfill all your plans! May we shout for joy over your salvation, and in the name of our God set up our banners! May the LORD fulfill all your petitions!&rdquo; The petitions continue, now reaching toward the king&rsquo;s deepest longings and the joy of the whole people.<br/><br/>The prayer that God would &ldquo;grant your heart&rsquo;s desire and fulfill all your plans&rdquo; assumes a king whose heart and plans are aligned with the purposes of God. This is not a blank check for any ambition, but the prayer that a righteous ruler&rsquo;s godly aims would prosper. When the desires of the heart are shaped by delight in the LORD, then God&rsquo;s promise holds: &ldquo;Delight yourself in the LORD, and he will give you the desires of your heart&rdquo; (Psalm 37:4).<br/><br/>Then the prayer widens to embrace the whole congregation: &ldquo;May we shout for joy over your salvation.&rdquo; The king&rsquo;s deliverance becomes the people&rsquo;s celebration. They long to &ldquo;set up our banners&rdquo; in the name of God &mdash; to raise the public, communal sign of victory, declaring to all that the battle was won by the power of the LORD.<br/><br/>Here the corporate joy of the psalm shines. Salvation is never a private affair; it is the occasion of shared rejoicing and public praise. The congregation cannot wait to lift their banners together and give glory to the name of their God, whose saving hand has answered their prayers.",
  },
  {
    id: "v3",
    title: "The Turn to Confidence: Now I Know",
    reference: "Psalm 20:6",
    body:
      "&ldquo;Now I know that the LORD saves his anointed; he will answer him from his holy heaven with the saving might of his right hand.&rdquo; This single verse is the hinge of the whole psalm, the moment when petition gives way to confidence and the praying community rises from its knees to stand in assurance.<br/><br/>The voice shifts here from the plural &ldquo;we&rdquo; of the opening prayers to a confident singular: &ldquo;Now I know.&rdquo; Perhaps a priest or prophet steps forward to declare the assurance of God&rsquo;s answer; perhaps it is the king himself, strengthened by the prayers of his people. Either way, the mood is transformed. The asking has become knowing; the supplication has become certainty.<br/><br/>The ground of this confidence is the character of God: &ldquo;the LORD saves his anointed.&rdquo; The anointed one &mdash; the mashiach, the messiah &mdash; is the king set apart by God, and God will surely deliver the one he has chosen. The help comes &ldquo;from his holy heaven&rdquo; and through &ldquo;the saving might of his right hand,&rdquo; the place and power of God&rsquo;s own sovereign action.<br/><br/>This verse points beyond every earthly king to the true Anointed One. For God did save his Anointed, raising Jesus from the dead and exalting him to his right hand. And the confidence of this verse becomes the confidence of every believer: the God who saved his Christ will save all who are found in him.",
  },
  {
    id: "v4",
    title: "Some Trust in Chariots, but We Trust in the LORD",
    reference: "Psalm 20:7&ndash;8",
    body:
      "&ldquo;Some trust in chariots and some in horses, but we trust in the name of the LORD our God. They collapse and fall, but we rise and stand upright.&rdquo; Here is the theological summit of the psalm, the verse that has steadied the faith of God&rsquo;s people for three thousand years.<br/><br/>The contrast is stark and deliberate. Chariots and horses were the supreme military power of the ancient world &mdash; visible, impressive, countable. To trust in them was to anchor one&rsquo;s confidence in what could be seen and controlled. But the people of God make a different confession: &ldquo;we trust in the name of the LORD our God.&rdquo; Their security rests not in instruments of war but in the revealed character of the living God.<br/><br/>This confession runs against the deepest instincts of the human heart, which always craves a security it can measure. Yet the law had warned against trusting in cavalry (Deuteronomy 17:16), and the prophets had pronounced woe on those who relied on horses rather than the Holy One of Israel (Isaiah 31:1). Psalm 20 turns that warning into worship: &ldquo;some trust&hellip; but we trust.&rdquo;<br/><br/>And the outcomes diverge accordingly: &ldquo;They collapse and fall, but we rise and stand upright.&rdquo; Those whose confidence rested on visible strength come crashing down when it fails; those who trusted the name of the LORD are raised up and set firmly on their feet. The destiny of a life is bound to the object of its trust, and the only trust that finally holds is trust in God.",
  },
  {
    id: "v5",
    title: "The Closing Cry: O LORD, Save the King",
    reference: "Psalm 20:9",
    body:
      "&ldquo;O LORD, save the king! May he answer us when we call.&rdquo; The psalm ends as it began, in prayer &mdash; but everything has changed in between. This is no longer the anxious petition of a people uncertain of the outcome. It is the confident cry of a congregation that has remembered who their God is and now calls upon him with hope.<br/><br/>The final plea, &ldquo;O LORD, save the king,&rdquo; gathers up all the petitions that have gone before into one urgent request. Having confessed that they trust in the name of the LORD rather than in chariots and horses, the people now ask the God in whom they trust to act. Their confidence does not make prayer unnecessary; it makes prayer bold.<br/><br/>The closing line &mdash; &ldquo;May he answer us when we call&rdquo; &mdash; widens the circle once more. Some translations render it as a prayer that the King (the LORD himself) would answer when his people call. Either way, the psalm ends with the assurance that the God who saves his anointed is a God who hears and answers those who cry out to him.<br/><br/>So the psalm closes on a note of confident dependence. The people have moved from petition to assurance and back to prayer, but the second prayer is full of faith. They face the day of trouble not because the danger has passed but because they have set their trust on the name of the LORD &mdash; and they look to him, the true and saving King, to answer when they call.",
  },
];

const applicationBlocks: Block[] = [
  {
    heading: "A School of Intercession",
    reference: "Living Psalm 20 Today",
    paragraphs: [
      "Psalm 20 trains us in the great and often neglected work of intercession. The congregation does not pray chiefly for itself but for another &mdash; for the king who is about to face the day of trouble. This is a pattern the church is called to take up: to pray for our leaders, for those in authority, for one another, and for all who stand in danger or difficulty.",
      "Practically, this means making intercession a deliberate habit rather than an afterthought. Who is facing a day of trouble in your circle &mdash; a friend confronting illness, a family member facing a hard decision, a leader carrying a heavy burden? Psalm 20 invites you to surround them with prayer, to ask that the LORD would answer them, protect them, send them help, and grant the godly desires of their hearts.",
      "It also reshapes how we pray for those who govern us. &ldquo;I urge that supplications, prayers, intercessions, and thanksgivings be made for all people, for kings and all who are in high positions&rdquo; (1 Timothy 2:1&ndash;2). Whatever our opinions of those in authority, we are called to carry them before God, asking that they would lead in righteousness and that God would use them for the good of his people.",
    ],
  },
  {
    heading: "Naming Our Chariots and Horses",
    reference: "Where Do We Truly Trust?",
    paragraphs: [
      "The central application of Psalm 20 flows from its central verse: &ldquo;Some trust in chariots and some in horses, but we trust in the name of the LORD our God&rdquo; (20:7). Every believer must ask honestly: what are my chariots and horses? Where do I instinctively turn for security when trouble comes &mdash; to my bank balance, my abilities, my connections, my plans, my technology?",
      "These things are not evil in themselves, but they make ruinous gods. The temptation is to let our ultimate confidence rest on what we can see and control, rather than on the unseen God who alone holds the outcome. Psalm 20 calls us to a deliberate, even public, reversal: to name our chariots and horses for what they are, and to confess with the gathered people of God that our trust is in his name.",
      "This is not a denial that ordinary means matter. We still plan, work, and use what God provides. But we hold these things with open hands, refusing to let them become the foundation of our hope. When the day of trouble comes, the one whose trust is in the name of the LORD has a refuge that no collapsing security can offer &mdash; for &ldquo;the name of the LORD is a strong tower; the righteous man runs into it and is safe&rdquo; (Proverbs 18:10).",
    ],
  },
  {
    heading: "The Anointed Whom God Saves",
    reference: "Reading Psalm 20 in Christ",
    paragraphs: [
      "Psalm 20 reaches its fullest meaning when we read it in the light of Christ. The confident declaration, &ldquo;Now I know that the LORD saves his anointed&rdquo; (20:6), pointed in its day to the anointed king of Israel, but it pointed beyond him to the true Anointed One, Jesus the Messiah. God did save his Anointed, raising him from the dead and seating him at his right hand.",
      "This transforms our reading. The prayers offered for the king become, in their deepest sense, prayers answered in Christ, the King who faced the ultimate day of trouble at the cross and was vindicated in his resurrection. And because we belong to him, the salvation of the Anointed One becomes our salvation; we &ldquo;rise and stand upright&rdquo; in him who was raised for us.",
      "To trust in the name of the LORD, then, is for the Christian to trust in Jesus, the name above every name (Philippians 2:9), the name by which alone we are saved (Acts 4:12). Our confidence in the day of trouble is not abstract; it is anchored in the crucified and risen King who lives to make intercession for us and who has promised that those who are his will never be lost.",
    ],
  },
  {
    heading: "Facing the Day of Trouble",
    reference: "Confidence Amid the Battle",
    paragraphs: [
      "Psalm 20 does not pretend that the day of trouble will not come. It assumes the battle; it assumes the danger. What it offers is not the removal of the storm but a confidence to face it &mdash; a confidence grounded in the character and the saving might of God.",
      "The movement of the psalm, from petition to confidence and back to confident prayer, is the very movement faith is meant to make in us. We come to God with our requests, and as we pray, our eyes are lifted from the size of the threat to the greatness of our God, until asking ripens into trust. We may still face hard pressing on every side, but we are &ldquo;not crushed&hellip; not driven to despair&hellip; not destroyed&rdquo; (2 Corinthians 4:8&ndash;9).",
      "So Psalm 20 sends us into our battles with both a summons and a comfort: the summons to set our trust on the name of the LORD rather than on the chariots and horses of this world, and the comfort that those who trust him &ldquo;rise and stand upright&rdquo; when the visible securities of the world collapse. We call upon him, and we know that the God who saves his Anointed will answer us when we call.",
    ],
  },
];

const reflectionQuestions: string[] = [
  "Psalm 20 is a prayer for another. Who in your life is facing a &ldquo;day of trouble&rdquo; right now, and how might you surround them with intercession this week?",
  "What are your &ldquo;chariots and horses&rdquo; &mdash; the visible securities you instinctively trust when trouble comes? What would it look like to consciously transfer that trust to the name of the LORD?",
  "The psalm moves from petition (verses 1&ndash;5) to confidence (verses 6&ndash;9). Have you experienced prayer changing from anxious asking into settled trust? What helped that shift happen?",
  "To trust in &ldquo;the name of the LORD&rdquo; is to trust his revealed character. Which aspects of God&rsquo;s character most strengthen your confidence in a day of trouble?",
  "How does reading &ldquo;the LORD saves his anointed&rdquo; in the light of Christ deepen your confidence? How does belonging to the Anointed One shape the way you face danger?",
  "How are you praying for those who lead you &mdash; in your church, your community, your nation? How might Psalm 20 reshape those prayers?",
];

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 20 &mdash; Trust in the Name of the LORD (Overview)" },
  { videoId: "OjJ7GkWCHvA", title: "Some Trust in Chariots &mdash; Psalm 20:7 Explained" },
  { videoId: "pHBzJ2dVXgk", title: "A Prayer Before Battle &mdash; Psalm 20 Verse by Verse" },
  { videoId: "3sO5FH2ybPY", title: "The LORD Saves His Anointed &mdash; Psalm 20 and Christ" },
];

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

export default function Psalm20Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const renderAccordion = (items: Accordion[], accent: string) =>
    items.map((item) => {
      const isOpen = open === item.id;
      return (
        <div
          key={item.id}
          style={{
            background: CARD,
            border: `1px solid ${isOpen ? accent : BORDER}`,
            borderRadius: 12,
            overflow: "hidden",
            transition: "border-color 0.15s",
          }}
        >
          <button
            type="button"
            onClick={() => toggle(item.id)}
            aria-expanded={isOpen}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              padding: "1.1rem 1.4rem",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              fontFamily: "inherit",
            }}
          >
            <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span
                style={{ color: TEXT, fontSize: "1.12rem", fontWeight: 700, lineHeight: 1.3 }}
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <span
                style={{ color: accent, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}
                dangerouslySetInnerHTML={{ __html: item.reference }}
              />
            </span>
            <span
              style={{
                color: accent,
                fontSize: 26,
                lineHeight: 1,
                flexShrink: 0,
                transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
              }}
            >
              +
            </span>
          </button>
          {isOpen && (
            <div
              style={{
                padding: "0 1.4rem 1.5rem",
                color: MUTED,
                fontSize: "1.04rem",
                lineHeight: 1.85,
                borderTop: `1px solid ${BORDER}`,
                paddingTop: "1.25rem",
              }}
              dangerouslySetInnerHTML={{ __html: item.body }}
            />
          )}
        </div>
      );
    });

  const renderBlocks = (blocks: Block[], accent: string) =>
    blocks.map((block, bi) => (
      <section key={bi} style={{ marginBottom: bi === blocks.length - 1 ? 0 : "2.75rem" }}>
        <h2
          style={{ color: TEXT, fontSize: "1.55rem", fontWeight: 800, margin: "0 0 6px", lineHeight: 1.25 }}
          dangerouslySetInnerHTML={{ __html: block.heading }}
        />
        <div
          style={{ color: accent, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.4rem" }}
          dangerouslySetInnerHTML={{ __html: block.reference }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          {block.paragraphs.map((para, pi) => (
            <p
              key={pi}
              style={{ color: pi === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: para }}
            />
          ))}
        </div>
      </section>
    ));

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: "var(--header-height, 80px)",
        color: TEXT,
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "inline-block",
              background: `${GREEN}22`,
              color: GREEN,
              borderRadius: 6,
              padding: "4px 12px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Psalms &mdash; Royal Psalm
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 20 &mdash; We Trust in the Name of the LORD
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.75, margin: 0 }}>
            The congregation&rsquo;s prayer for the king before battle, Psalm 20 moves from urgent intercession to triumphant confidence, declaring that some trust in chariots and horses but the people of God trust in his name &mdash; a confidence fulfilled in Christ, the Anointed One whom God surely saves.
          </p>
        </header>

        <div
          style={{
            background: CARD,
            border: `1px solid ${GREEN}44`,
            borderRadius: 14,
            padding: "1.6rem 1.8rem",
            marginBottom: "2.75rem",
          }}
        >
          <div
            style={{ color: GREEN, fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}
          >
            Key Verse &mdash; Psalm 20:7
          </div>
          <p
            style={{ color: TEXT, fontSize: "1.3rem", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;Some trust in chariots and some in horses, but we trust in the name of the LORD our God.&rdquo;",
            }}
          />
        </div>

        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: "2.5rem",
            borderBottom: `1px solid ${BORDER}`,
            paddingBottom: "1.25rem",
          }}
        >
          {TABS.map((t) => {
            const active = tab === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                style={{
                  padding: "8px 18px",
                  borderRadius: 8,
                  border: `1px solid ${active ? GREEN : BORDER}`,
                  background: active ? GREEN : CARD,
                  color: active ? "#fff" : MUTED,
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "inherit",
                  transition: "all 0.15s",
                }}
              >
                {TAB_LABELS[t]}
              </button>
            );
          })}
        </nav>

        {tab === "overview" && <div>{renderBlocks(overviewBlocks, GREEN)}</div>}

        {tab === "themes" && (
          <div>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.75rem" }}>
              Six themes carry the heart of Psalm 20, from the work of intercession to the great contrast of trust and the messianic confidence that the LORD saves his anointed. Expand each to explore the text and its cross-references.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {renderAccordion(themeItems, PURPLE)}
            </div>
          </div>
        )}

        {tab === "verse" && (
          <div>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.75rem" }}>
              Move through Psalm 20 section by section &mdash; the opening prayers for the king, the petition for his heart&rsquo;s desire, the turn to confidence, the great contrast of trust, and the closing cry that the LORD would save the king.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {renderAccordion(verseItems, GOLD)}
            </div>
          </div>
        )}

        {tab === "application" && (
          <div>
            {renderBlocks(applicationBlocks, TEAL)}

            <section style={{ marginTop: "3rem" }}>
              <h2 style={{ color: TEXT, fontSize: "1.55rem", fontWeight: 800, margin: "0 0 1.4rem" }}>
                Questions for Reflection
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {reflectionQuestions.map((q, i) => (
                  <div
                    key={i}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderLeft: `3px solid ${TEAL}`,
                      borderRadius: 10,
                      padding: "1rem 1.25rem",
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: TEAL, fontWeight: 800, fontSize: "1.05rem", flexShrink: 0 }}>{i + 1}.</span>
                    <p
                      style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.7, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </div>
                ))}
              </div>
            </section>

            <section style={{ marginTop: "3rem" }}>
              <h2 style={{ color: TEXT, fontSize: "1.55rem", fontWeight: 800, margin: "0 0 8px" }}>Video Teaching</h2>
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
                Deepen your study of Psalm 20 through these video teachings on intercessory prayer, the great contrast of trusting chariots versus the name of the LORD, and the messianic hope that God saves his Anointed.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
                {videoItems.map((v) => (
                  <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <p
                      style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}
                      dangerouslySetInnerHTML={{ __html: v.title }}
                    />
                  </div>
                ))}
              </div>
            </section>

            <div
              style={{
                marginTop: "3.5rem",
                background: CARD,
                border: `1px solid ${ROSE}44`,
                borderRadius: 14,
                padding: "1.75rem 2rem",
              }}
            >
              <h3 style={{ color: ROSE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Closing Prayer</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "O LORD our God, answer us in the day of trouble, and protect us by the power of your name. We confess that we are tempted to trust in chariots and horses &mdash; in our own strength, our resources, and the securities we can see. Forgive us, and teach us to trust in your name alone. We thank you that you have saved your Anointed, raising the Lord Jesus and seating him at your right hand; and because we belong to him, we rise and stand upright in him. Make us a people of bold intercession, carrying one another and our leaders before your throne. And when we call, answer us, for our confidence is in you. In the name of Jesus, the saving King, we pray. Amen.",
                }}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
