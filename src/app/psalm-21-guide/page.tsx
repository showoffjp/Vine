"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Psalm21Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "rNcERbkSTXU", title: "Psalm 21 &mdash; The King Rejoices in the LORD&rsquo;s Strength" },
    { videoId: "OjJ7GkWCHvA", title: "Psalms 20 and 21: Prayer Before Battle and Praise After Victory" },
    { videoId: "pHBzJ2dVXgk", title: "The Crown of Fine Gold and the King Who Reigns Forever" },
    { videoId: "3sO5FH2ybPY", title: "Be Exalted, O LORD: Worship in the Strength of God" },
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
      heading: "A Song of Victory",
      color: PURPLE,
      html:
        "<p>Psalm 21 is a royal song of thanksgiving, sung after the battle has been won. Where Psalm 20 prayed, &ldquo;May the LORD answer you in the day of trouble&hellip; may he grant you your heart&rsquo;s desire&rdquo; (Psalm 20:1, 4), Psalm 21 answers in joyful triumph: &ldquo;O LORD, in your strength the king rejoices, and in your salvation how greatly he exults! You have given him his heart&rsquo;s desire&rdquo; (21:1&ndash;2). The prayer has been heard, the request granted, and now the king and his people turn the whole victory into praise.</p>" +
        "<p>The note struck from the very first line is that the triumph belongs to the LORD. It is &ldquo;your strength&rdquo; and &ldquo;your salvation&rdquo; in which the king rejoices &mdash; not his own might, strategy, or valor. The psalm is a sustained celebration of a God who answers prayer, who crowns His anointed with blessing, and whose power alone secures the victory. It ends as it begins, lifting the eyes from the gift to the Giver: &ldquo;Be exalted, O LORD, in your strength!&rdquo;</p>",
    },
    {
      heading: "The Shape of the Psalm",
      color: TEAL,
      html:
        "<p>Psalm 21 falls into clear sections. <strong>First (21:1&ndash;2), the king&rsquo;s joy:</strong> in the LORD&rsquo;s strength the king rejoices, for God has given him his heart&rsquo;s desire and not withheld the request of his lips. <strong>Second (21:3&ndash;6), the rich blessings of God:</strong> God meets him with goodly blessings, sets a crown of fine gold on his head, grants him life and length of days forever, and makes him glad with the joy of His presence. <strong>Third (21:7), the king&rsquo;s trust:</strong> because the king trusts in the LORD, through the steadfast love of the Most High he shall not be moved.</p>" +
        "<p><strong>Fourth (21:8&ndash;12), the certainty of victory:</strong> the LORD&rsquo;s hand will find out all His enemies, making them as a blazing oven, and their plots against Him will not succeed. <strong>Finally (21:13), the closing exaltation:</strong> &ldquo;Be exalted, O LORD, in your strength! We will sing and praise your power.&rdquo; The psalm thus moves from the king&rsquo;s personal joy, through the gifts of God and the defeat of enemies, to the corporate worship of the whole gathered people.</p>",
    },
    {
      heading: "The Companion of Psalm 20",
      color: GOLD,
      html:
        "<p>Psalms 20 and 21 are a deliberate pair, a kind of diptych of trust. Psalm 20 is the prayer of the people <em>before</em> the king goes out to war: &ldquo;Some trust in chariots and some in horses, but we trust in the name of the LORD our God&rdquo; (Psalm 20:7). Psalm 21 is the thanksgiving of the people <em>after</em> the LORD has given the victory. Read together, they form a complete movement of faith: petition offered in confidence, and praise returned in gratitude.</p>" +
        "<p>This pairing is itself a lesson. The God to whom we pray in the day of trouble is the God we are to praise in the day of triumph. So often we are quick to ask and slow to give thanks. Psalm 21 will not let the victory pass unacknowledged; it gathers the answered prayer of Psalm 20 and returns it to God as worship. Prayer and praise belong together, the asking and the thanking forming the two halves of a single life of trust.</p>",
    },
    {
      heading: "The Royal and Messianic Dimension",
      color: GREEN,
      html:
        "<p>Like the other royal psalms, Psalm 21 speaks first of David or the reigning king of Israel, yet its language strains toward something greater than any earthly monarch. &ldquo;He asked life of you; you gave it to him, length of days forever and ever&rdquo; (21:4). No mere mortal king reigns forever; these words reach beyond David to the true and final King. The crown of fine gold and the unending life find their fulfillment in Christ, &ldquo;crowned with glory and honor because of the suffering of death&rdquo; (Hebrews 2:9).</p>" +
        "<p>So the Christian reads this psalm with Jesus in view. He is the King whose heart&rsquo;s desire God granted, who asked life and received it in resurrection life that death can never touch, and who now reigns at the right hand of the Father. The conquering King of Revelation, on whose head are &ldquo;many diadems&rdquo; (Revelation 19:12), is the one in whom every promise of Psalm 21 comes true. And crucially, His strength is wholly derived from and dependent on the LORD &mdash; a pattern the King Himself embodies and the church is called to share. <em>See Hebrews 2:9; Revelation 19:11&ndash;16.</em></p>",
    },
  ];

  const themeItems: { id: string; title: string; color: string; html: string }[] = [
    {
      id: "t-joy",
      title: "Joy in the LORD&rsquo;s Strength and Salvation",
      color: PURPLE,
      html:
        "<p>&ldquo;O LORD, in your strength the king rejoices, and in your salvation how greatly he exults!&rdquo; (21:1). The psalm opens with overflowing gladness, and the source of that gladness is named at once: not the king&rsquo;s strength but the LORD&rsquo;s; not the king&rsquo;s victory but God&rsquo;s salvation. True joy is rooted not in what we have achieved but in what God has done. The king does not boast in his own arm; he exults in the saving power of his God.</p>" +
        "<p>This is the same joy the whole Bible commends. &ldquo;Rejoice in the Lord always; again I will say, rejoice&rdquo; (Philippians 4:4). The joy that lasts is joy in the Lord Himself, in His strength and His salvation, for these can never be taken away. Mary sang it: &ldquo;My soul magnifies the Lord, and my spirit rejoices in God my Savior&rdquo; (Luke 1:46&ndash;47). When our gladness is anchored in the saving God rather than in shifting circumstances, it becomes deep, unshakable, and full. <em>Cross references: Psalm 20:5; Philippians 4:4; Luke 1:46&ndash;47; Habakkuk 3:18.</em></p>",
    },
    {
      id: "t-desire",
      title: "God Grants the Heart&rsquo;s Desire",
      color: TEAL,
      html:
        "<p>&ldquo;You have given him his heart&rsquo;s desire and have not withheld the request of his lips&rdquo; (21:2). The prayer of Psalm 20 (&ldquo;May he grant you your heart&rsquo;s desire&rdquo;) is here declared answered. God is presented as one who hears and gives, who does not turn away the requests of His anointed but opens His hand in generous response. The repetition &mdash; &ldquo;heart&rsquo;s desire&hellip; request of his lips&rdquo; &mdash; underlines that the answer is complete; nothing good has been withheld.</p>" +
        "<p>This is a portrait of the God who delights to give. &ldquo;Delight yourself in the LORD, and he will give you the desires of your heart&rdquo; (Psalm 37:4). The promise is not a blank check for every whim but the assurance that the one who delights in God will find his deepest desires shaped by God and then granted by Him. Jesus teaches the same generosity: &ldquo;Ask, and it will be given to you&hellip; how much more will your Father who is in heaven give good things to those who ask him!&rdquo; (Matthew 7:7, 11). <em>Cross references: Psalm 20:4; Psalm 37:4; Matthew 7:7&ndash;11; John 15:7.</em></p>",
    },
    {
      id: "t-crown",
      title: "The Crown of Gold and the Gift of Life",
      color: GOLD,
      html:
        "<p>&ldquo;You set a crown of fine gold upon his head. He asked life of you; you gave it to him, length of days forever and ever&rdquo; (21:3&ndash;4). God meets the king with rich blessings and crowns him with gold, but the greatest gift is life itself &mdash; and not merely long life, but &ldquo;length of days forever and ever.&rdquo; These words reach beyond any earthly reign. No human king lives forever; the phrase points past David to the King who would conquer death itself.</p>" +
        "<p>For the Christian, this finds its fulfillment in Jesus, &ldquo;crowned with glory and honor&rdquo; (Hebrews 2:9), who &ldquo;asked life&rdquo; and received resurrection life that death can never undo, and who lives to reign &ldquo;forever and ever&rdquo; (Revelation 11:15). And the gift overflows to His people: He gives &ldquo;eternal life, and they will never perish&rdquo; (John 10:28), and to the faithful He promises &ldquo;the crown of life&rdquo; (James 1:12; Revelation 2:10). The crown and the unending life given to the King are, in Christ, shared with all who are His. <em>Cross references: Hebrews 2:9; John 10:28; James 1:12; Revelation 2:10.</em></p>",
    },
    {
      id: "t-trust",
      title: "Trusting the LORD, He Shall Not Be Moved",
      color: ROSE,
      html:
        "<p>&ldquo;For the king trusts in the LORD, and through the steadfast love of the Most High he shall not be moved&rdquo; (21:7). This single verse stands at the heart of the psalm and reveals the secret of the king&rsquo;s security. His throne is not held by his armies or his wealth but by his trust in the LORD and by the steadfast love &mdash; the <em>hesed</em>, the covenant faithfulness &mdash; of the Most High. Because he leans on God, he cannot be shaken.</p>" +
        "<p>The same promise belongs to every believer who trusts in God. &ldquo;Those who trust in the LORD are like Mount Zion, which cannot be moved, but abides forever&rdquo; (Psalm 125:1). The one whose confidence is in the LORD &ldquo;will not fear&hellip; his heart is firm, trusting in the LORD&rdquo; (Psalm 112:7&ndash;8). Stability of soul is not the reward of the strong but the gift of the trusting. To rest in God&rsquo;s unchanging love is to stand on ground that nothing can erode. <em>Cross references: Psalm 16:8; Psalm 125:1; Psalm 112:6&ndash;8; Isaiah 26:3.</em></p>",
    },
    {
      id: "t-victory",
      title: "Assured Victory Over the King&rsquo;s Enemies",
      color: GREEN,
      html:
        "<p>&ldquo;Your hand will find out all your enemies; your right hand will find out those who hate you. You will make them as a blazing oven&hellip; though they plan evil against you&hellip; they will not succeed&rdquo; (21:8&ndash;11). The psalm turns to the certain defeat of those who set themselves against the LORD and His anointed. The imagery is severe &mdash; a blazing oven, a devouring fire &mdash; but the point is the assurance: no scheme against God can finally prevail.</p>" +
        "<p>This is the consistent witness of Scripture. &ldquo;No weapon that is fashioned against you shall succeed&rdquo; (Isaiah 54:17). The rulers who plot against the LORD and His Anointed are answered by the One enthroned in heaven (Psalm 2:1&ndash;4). For the people of God, this is not a call to gloat but a ground of confidence: the cause of God will not fail, and the kingdom of His Son cannot be overthrown. &ldquo;The God of peace will soon crush Satan under your feet&rdquo; (Romans 16:20). The final victory is sure because it rests on the LORD&rsquo;s own hand. <em>Cross references: Psalm 2:1&ndash;6; Isaiah 54:17; Romans 16:20; Revelation 19:19&ndash;21.</em></p>",
    },
    {
      id: "t-exalted",
      title: "Be Exalted, O LORD, in Your Strength",
      color: PURPLE,
      html:
        "<p>&ldquo;Be exalted, O LORD, in your strength! We will sing and praise your power&rdquo; (21:13). The psalm closes by lifting all the glory back to God. Notice the shift from &ldquo;I&rdquo; and &ldquo;the king&rdquo; to &ldquo;we&rdquo; &mdash; the whole congregation joins the song. The victory was the king&rsquo;s, but the worship belongs to all the people, and it is directed entirely to the LORD. The final word is not the king&rsquo;s triumph but God&rsquo;s exaltation.</p>" +
        "<p>This is where every true celebration ends: in the praise of God. &ldquo;Not to us, O LORD, not to us, but to your name give glory&rdquo; (Psalm 115:1). The strength that won the battle is God&rsquo;s strength, and so the praise of that power belongs to Him alone. The redeemed in heaven sing the same song: &ldquo;Salvation and glory and power belong to our God&rdquo; (Revelation 19:1). To exalt the LORD in His strength is to put everything in its right place &mdash; God as the Giver, ourselves as the grateful worshipers. <em>Cross references: Psalm 57:5; Psalm 115:1; Psalm 18:46; Revelation 19:1.</em></p>",
    },
  ];

  const verseItems: { id: string; ref: string; color: string; html: string }[] = [
    {
      id: "v1",
      ref: "Psalm 21:1&ndash;2 &mdash; The King Rejoices in the LORD",
      color: PURPLE,
      html:
        "<p>&ldquo;O LORD, in your strength the king rejoices, and in your salvation how greatly he exults! You have given him his heart&rsquo;s desire and have not withheld the request of his lips. Selah.&rdquo;</p>" +
        "<p>The psalm opens at full volume with joy. The king rejoices and exults &mdash; but carefully, the cause is named first: it is in <em>your</em> strength and <em>your</em> salvation, O LORD. The victory is God&rsquo;s, and the king knows it. He does not parade his own prowess; he glories in the saving power of his God. This is praise that refuses to steal God&rsquo;s glory for itself.</p>" +
        "<p>And the ground of the rejoicing is answered prayer: &ldquo;You have given him his heart&rsquo;s desire and have not withheld the request of his lips.&rdquo; The petition of Psalm 20 has been granted in full. The God of Israel is a God who hears and gives, and the proper response to His answered prayer is exultant gladness. The word &ldquo;Selah&rdquo; invites a pause &mdash; a moment to let the wonder of a prayer-answering God sink in. <em>Compare Psalm 20:4&ndash;5; Psalm 116:1&ndash;2.</em></p>",
    },
    {
      id: "v2",
      ref: "Psalm 21:3&ndash;6 &mdash; The Rich Blessings of God",
      color: GOLD,
      html:
        "<p>&ldquo;For you meet him with rich blessings; you set a crown of fine gold upon his head. He asked life of you; you gave it to him, length of days forever and ever. His glory is great through your salvation; splendor and majesty you bestow on him. For you make him most blessed forever; you make him glad with the joy of your presence.&rdquo;</p>" +
        "<p>God does not merely answer; He overflows. He &ldquo;meets&rdquo; the king with goodly blessings and crowns him with fine gold. But the gifts climb higher than gold: the king asked life, and God gave it &mdash; &ldquo;length of days forever and ever.&rdquo; These words burst the bounds of any mortal reign and point to the King who would defeat death. The glory, splendor, and majesty the king bears are all bestowed; they are not native to him but given by God&rsquo;s salvation.</p>" +
        "<p>And the crown of all the blessings is the last: &ldquo;you make him glad with the joy of your presence.&rdquo; Beyond gold and victory and even long life, the deepest gift is God Himself. To be glad in His presence is the height of blessedness, &ldquo;in your presence there is fullness of joy&rdquo; (Psalm 16:11). The Christian sees here a portrait of Christ, crowned with glory and honor, and of the joy set before Him in the presence of the Father. <em>Compare Psalm 16:11; Hebrews 2:9; Hebrews 12:2.</em></p>",
    },
    {
      id: "v3",
      ref: "Psalm 21:7 &mdash; The King Trusts in the LORD",
      color: ROSE,
      html:
        "<p>&ldquo;For the king trusts in the LORD, and through the steadfast love of the Most High he shall not be moved.&rdquo;</p>" +
        "<p>This is the still center of the psalm, the verse that explains all the rest. Why does the king rejoice, receive blessing, and stand secure? Because he <em>trusts in the LORD</em>. His stability does not rest on the strength of his throne but on the steadfast love &mdash; the covenant faithfulness &mdash; of the Most High. The towering blessings of the previous verses all flow from this quiet root of trust.</p>" +
        "<p>&ldquo;He shall not be moved.&rdquo; The king who leans on God is immovable, not because he is strong but because the One he trusts is faithful. This is the secret of every steadfast life of faith: not the absence of enemies or trouble, but a confidence anchored outside ourselves in the unchanging love of God. &ldquo;I have set the LORD always before me; because he is at my right hand, I shall not be shaken&rdquo; (Psalm 16:8). Trust in God is the foundation that nothing can erode. <em>Compare Psalm 16:8; Psalm 125:1; Proverbs 3:5&ndash;6.</em></p>",
    },
    {
      id: "v4",
      ref: "Psalm 21:8&ndash;12 &mdash; Victory Over the Enemies",
      color: GREEN,
      html:
        "<p>&ldquo;Your hand will find out all your enemies; your right hand will find out those who hate you. You will make them as a blazing oven in the time of your appearing&hellip; You will destroy their descendants from the earth&hellip; Though they plan evil against you, though they devise mischief, they will not succeed. For you will put them to flight; you will aim at their faces with your bows.&rdquo;</p>" +
        "<p>The psalm now turns to the certain defeat of all who oppose the LORD and His anointed. The imagery is fierce &mdash; a blazing oven, a consuming fire, the bent bow &mdash; and it conveys the totality of the judgment that awaits unrepentant rebellion against God. No enemy escapes His reach; His &ldquo;right hand will find out those who hate&rdquo; Him. The plots of the wicked, however cunning, &ldquo;will not succeed.&rdquo;</p>" +
        "<p>It is important to hear this rightly. The accent falls not on the king&rsquo;s vengeance but on the LORD&rsquo;s action: it is God&rsquo;s hand, God&rsquo;s appearing, God&rsquo;s bow. For the people of God this is assurance, not cruelty &mdash; the promise that evil will not have the last word and that the kingdom of God cannot be overthrown. The same certainty rings through the New Testament: every enemy will at last be put under the feet of the reigning Christ (1 Corinthians 15:25). <em>Compare Psalm 2:1&ndash;5; Psalm 110:1&ndash;2; 1 Corinthians 15:25.</em></p>",
    },
    {
      id: "v5",
      ref: "Psalm 21:13 &mdash; Be Exalted, O LORD",
      color: PURPLE,
      html:
        "<p>&ldquo;Be exalted, O LORD, in your strength! We will sing and praise your power.&rdquo;</p>" +
        "<p>The psalm ends as it began &mdash; with the LORD at the center &mdash; but now the voice broadens from the king to the whole people: &ldquo;<em>We</em> will sing and praise your power.&rdquo; The victory belonged to the king, but the worship belongs to all the gathered faithful, and it is offered entirely to God. The closing prayer, &ldquo;Be exalted, O LORD, in your strength,&rdquo; asks that God Himself would be lifted high, that His power would be seen and praised.</p>" +
        "<p>This is the only fitting end to a song of victory: the exaltation of the One who gave the victory. The strength celebrated throughout the psalm is His strength, and so the praise of it must rise to Him. Here is the pattern for all our thanksgiving &mdash; to take every gift, every answered prayer, every triumph, and turn it into the worship of God. &ldquo;Be exalted, O God, above the heavens! Let your glory be over all the earth!&rdquo; (Psalm 57:5). The last word of Psalm 21 is praise. <em>Compare Psalm 57:5, 11; Psalm 18:46; Revelation 5:13.</em></p>",
    },
  ];

  const appBlocks: { heading: string; color: string; html: string }[] = [
    {
      heading: "Turn Every Victory into Praise",
      color: PURPLE,
      html:
        "<p>Psalm 21 will not let an answered prayer pass without thanksgiving. The petition of Psalm 20 has been granted, and the people gather at once to give God the glory. How often we ask earnestly and then receive carelessly, forgetting to return and give thanks. Of the ten lepers Jesus healed, only one came back to glorify God (Luke 17:17&ndash;18). Psalm 21 calls us to be that one.</p>" +
        "<p>Make it a habit to close the circle of every answered prayer with deliberate thanksgiving. When God grants your heart&rsquo;s desire, when a battle is won, when a door is opened, do not simply enjoy the gift &mdash; return to the Giver with praise. &ldquo;Give thanks in all circumstances; for this is the will of God in Christ Jesus for you&rdquo; (1 Thessalonians 5:18). A grateful heart keeps God at the center of every success.</p>",
    },
    {
      heading: "Root Your Joy in God, Not in Circumstances",
      color: TEAL,
      html:
        "<p>The king&rsquo;s joy is in the LORD&rsquo;s strength and salvation, not merely in the outcome of the battle. This is a crucial distinction. Circumstances change; victories fade; the gifts of today may be gone tomorrow. But joy rooted in God Himself &mdash; in His strength, His salvation, His presence &mdash; rests on something that cannot be taken away. &ldquo;You make him glad with the joy of your presence&rdquo; (21:6).</p>" +
        "<p>Examine where your gladness is anchored. If it rises and falls only with your fortunes, it will be fragile. But if you learn to rejoice in the Lord Himself &mdash; in who He is and what He has done in Christ &mdash; your joy will hold steady even when circumstances turn. &ldquo;Rejoice in the Lord always&rdquo; (Philippians 4:4) is only possible because the Lord is always worthy of joy.</p>",
    },
    {
      heading: "Stand Secure by Trusting the LORD",
      color: ROSE,
      html:
        "<p>&ldquo;The king trusts in the LORD&hellip; he shall not be moved&rdquo; (21:7). The secret of the king&rsquo;s unshakable stability was not his throne or his armies but his trust in God&rsquo;s steadfast love. The same security is offered to you. When life feels precarious and the ground seems to shift, the answer is not to grip harder to your own resources but to lean more fully on the faithfulness of God.</p>" +
        "<p>Those who trust in the LORD &ldquo;are like Mount Zion, which cannot be moved&rdquo; (Psalm 125:1). Stability is the fruit of dependence, not of self-sufficiency. Practice resting your weight on God&rsquo;s covenant love &mdash; the same <em>hesed</em> that holds the universe and that has been poured out in Christ. The trusting heart is the steady heart, and it shall not be moved.</p>",
    },
    {
      heading: "Look to the King Who Reigns Forever",
      color: GREEN,
      html:
        "<p>The promises of Psalm 21 &mdash; the crown of gold, the life that lasts &ldquo;forever and ever,&rdquo; the unfailing victory &mdash; outrun every earthly king and find their fulfillment in Jesus Christ. He is the King whose heart&rsquo;s desire the Father granted, who asked life and rose to a life death cannot touch, and who reigns crowned with glory and honor (Hebrews 2:9). When we read this psalm, we are looking ultimately at Him.</p>" +
        "<p>And His reign is good news for us. The King&rsquo;s victory is our security; His life is shared with all who are His (&ldquo;because I live, you also will live,&rdquo; John 14:19); His crown leads to the &ldquo;crown of life&rdquo; promised to the faithful (Revelation 2:10). Set your hope on this conquering, ever-living King. The strength that secures His throne is the LORD&rsquo;s own strength, and into that strength He invites all His people. &ldquo;Be exalted, O LORD, in your strength!&rdquo;</p>",
    },
  ];

  const questions: string[] = [
    "Psalm 21 carefully roots the king&rsquo;s joy in &ldquo;your strength&rdquo; and &ldquo;your salvation.&rdquo; When something goes well in your life, how readily do you give the glory to God rather than to yourself?",
    "The psalm celebrates an answered prayer from Psalm 20. Think of a recent prayer God has answered &mdash; have you returned to Him with deliberate thanksgiving, or have you moved on without closing the circle of gratitude?",
    "Verse 7 says the king &ldquo;shall not be moved&rdquo; because he trusts in the LORD. In what area of your life are you currently feeling shaken, and what would it look like to lean your weight on God&rsquo;s steadfast love instead?",
    "The king&rsquo;s greatest blessing is being made &ldquo;glad with the joy of your presence&rdquo; (21:6). Is the presence of God itself a source of joy to you, or do you tend to seek His gifts more than Him? How might that change?",
    "The promises of an eternal crown and unending life point beyond David to Christ. How does seeing Jesus as the true King of this psalm deepen your reading of it and your hope for the future?",
    "The psalm ends, &ldquo;Be exalted, O LORD&hellip; We will sing and praise your power&rdquo; (21:13). What is one concrete way you can make the exaltation of God, rather than your own success, the goal of this coming week?",
  ];

  const prayerHtml =
    "<p>O LORD, in your strength I rejoice, and in your salvation I will exult. You are the God who hears prayer, who gives the heart&rsquo;s desire, who meets your people with rich blessings and crowns them with goodness. I confess how quickly I take your gifts and forget the Giver, how often I rejoice in the outcome and neglect to praise your name. Forgive me, and teach me to turn every answered prayer into thanksgiving.</p>" +
    "<p>Make my joy deep and steady by rooting it in you rather than in my changing circumstances. When the ground beneath me shifts, let me lean on your steadfast love, that I may not be moved. Be my refuge and my confidence; let my heart rest in your covenant faithfulness, which holds firm when everything else gives way. And fill me with the joy of your presence, for in your presence is fullness of joy.</p>" +
    "<p>I lift my eyes to Jesus, the true King, crowned with glory and honor, who asked life of you and now reigns forever and ever. Thank you that his victory is my security and his unending life is shared with all who are his. Reign in me, and reign over all the earth. Be exalted, O LORD, in your strength! We will sing and praise your power, now and forever. In the name of Jesus Christ our King, Amen.</p>";

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
          Psalm 21
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
          A royal psalm of thanksgiving for the king&rsquo;s victory &mdash; the
          companion of Psalm 20, celebrating the LORD&rsquo;s strength, the crown
          of gold, and the life that lasts forever.
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
            Key Verse &middot; Psalm 21:13
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;Be exalted, O LORD, in your strength! We will sing and praise your power.&rdquo;",
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
              Six threads run through this royal song of thanksgiving. Tap each to
              explore the theme and its connections across Scripture.
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
              Walk through Psalm 21 from the king&rsquo;s joy and the rich
              blessings of God, through his trust and the defeat of his enemies,
              to the closing exaltation of the LORD.
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
