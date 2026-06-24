"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const ACCENT = GOLD;

type VideoEntry = { videoId: string; title: string };

const VIDEOS: VideoEntry[] = [];

function VideoEmbed({ v }: { v: VideoEntry }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: "1rem" }}>
      {open ? (
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src={`https://www.youtube.com/embed/${v.videoId}?autoplay=1`}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
          />
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: "8px", padding: "1rem", cursor: "pointer", textAlign: "left", color: TEXT }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "1.25rem" }}>&#9654;</span>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{v.title}</div>
              <div style={{ fontSize: "0.85rem", color: MUTED }}>Click to play</div>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

const TABS = ["Overview", "Themes", "Verse by Verse", "Application"];

const KEY_DETAILS = [
  { label: "Author", value: "Anonymous (likely composed for temple liturgy)" },
  { label: "Position", value: "Thirteenth of the 15 Songs of Ascents; longest in the collection" },
  { label: "Collection", value: "Songs of Ascents -- pilgrim psalms to Jerusalem" },
  { label: "Genre", value: "Royal psalm / liturgy of the Davidic covenant and the ark" },
  { label: "Occasion", value: "Possibly a festival commemorating the ark's entry to Zion (2 Samuel 6)" },
  { label: "Key Verse", value: "v. 11 -- The LORD swore to David a sure oath from which he will not turn back" },
  { label: "NT Connection", value: "Luke 1:32-33 throne of David; Acts 2:30 fruit of David's body on the throne" },
];

const STRUCTURE_TABLE = [
  { part: "Part 1 (vv. 1-10)", focus: "The people's prayer", content: "David's vow to find a dwelling for the LORD; the ark brought to Zion" },
  { part: "Part 2 (vv. 11-18)", focus: "The LORD's response", content: "God's sworn oath to David; Zion chosen as his resting place forever" },
];

const THEMES = [
  {
    color: GOLD,
    title: "David's Vow: The Passion to Find a Dwelling for the LORD",
    body: `Psalm 132 opens by recalling David's intense desire to build a house for the LORD: "Remember, O LORD, in David's favor, all the hardships he endured, how he swore to the LORD and vowed to the Mighty One of Jacob, 'I will not enter my house or get into my bed, I will not give sleep to my eyes or slumber to my eyelids, until I find a place for the LORD, a dwelling place for the Mighty One of Jacob.'" The psalm presents David's longing to house the ark of God as a consuming passion, a vow that drove him to extraordinary lengths.
<br/><br/>
This vow recalls the narrative of 2 Samuel 7, where David, settled in his own house of cedar, was troubled that the ark of God still dwelt in a tent. "See now, I dwell in a house of cedar, but the ark of God dwells in a tent" (2 Samuel 7:2). David's desire to build a permanent house for the LORD flowed from a heart that could not rest while God's presence was inadequately honored. The psalm intensifies this into a sworn vow of sleeplessness: David will not rest until the LORD has a dwelling place.
<br/><br/>
The title "the Mighty One of Jacob" (avir ya'aqov) is a rare and ancient divine name, used in Genesis 49:24 (Jacob's blessing of Joseph) and Isaiah 49:26 and 60:16. It evokes God's power exercised on behalf of his covenant people, recalling the patriarchal promises. By invoking this title twice in the opening verses, the psalm roots David's vow in the long history of God's covenant faithfulness to the family of Jacob. David's passion for God's dwelling is continuous with God's ancient commitment to his people.
<br/><br/>
Calvin observes: "David's holy zeal in this matter is set before us as an example. He could not be at ease in his own comfortable house while the ark of God was without a settled dwelling. This is the mark of a heart truly devoted to God -- that it cannot rest in its own comfort while the worship of God is neglected." For Christians, David's passion to find a dwelling for the LORD points forward to the one who is himself the true dwelling place of God -- Christ, in whom "the whole fullness of deity dwells bodily" (Colossians 2:9), and to the church, which is "a dwelling place for God by the Spirit" (Ephesians 2:22).`,
  },
  {
    color: TEAL,
    title: "The Ark Brought to Zion: Worship and the Presence of God",
    body: `Verses 6-9 recall the journey of the ark to its resting place in Zion: "Behold, we heard of it in Ephrathah; we found it in the fields of Jaar. Let us go to his dwelling place; let us worship at his footstool! Arise, O LORD, and go to your resting place, you and the ark of your might." These verses recall the events of 2 Samuel 6, when David brought the ark up to Jerusalem with great rejoicing, and they may have been sung liturgically as part of a festival commemorating that event.
<br/><br/>
The geographical references -- Ephrathah (associated with Bethlehem, David's hometown) and "the fields of Jaar" (Kiriath-jearim, where the ark had rested for twenty years, 1 Samuel 7:1-2) -- trace the ark's history before its arrival in Zion. The ark, which represented God's throne and presence among his people, had been neglected and displaced; David's great act was to bring it to its proper home in the city of God. The call "let us go to his dwelling place; let us worship at his footstool" is an invitation to corporate worship at the place where God's presence dwells.
<br/><br/>
The phrase "worship at his footstool" reflects the theology of the ark as God's footstool -- the place where heaven touches earth, where the enthroned God condescends to dwell among his people. 1 Chronicles 28:2 calls the ark "the footstool of our God," and Psalm 99:5 commands, "Exalt the LORD our God; worship at his footstool!" The ark was the visible sign of the invisible God's presence, the meeting place between God and his people, the focal point of Israel's worship.
<br/><br/>
The cry "Arise, O LORD, and go to your resting place" (v. 8) echoes the ancient words spoken whenever the ark set out in the wilderness: "Arise, O LORD, and let your enemies be scattered" (Numbers 10:35). But now the ark is not setting out for battle; it is coming to its rest. Tremper Longman III notes: "The movement of the psalm is from restlessness to rest -- David's sleepless vow, the ark's long displacement, all resolving into the LORD coming to his resting place in Zion. The God who led his people through the wilderness now settles among them." For Christians, this points to the incarnation, when "the Word became flesh and dwelt among us" (John 1:14, literally "tabernacled" among us), and to the final rest when God will dwell with his people forever (Revelation 21:3).`,
  },
  {
    color: ROSE,
    title: "The LORD Swore to David a Sure Oath: The Davidic Covenant",
    body: `The theological center of Psalm 132 is the LORD's sworn oath to David in verses 11-12: "The LORD swore to David a sure oath from which he will not turn back: 'One of the sons of your body I will set on your throne. If your sons keep my covenant and my testimonies that I shall teach them, their sons also forever shall sit on your throne.'" This is the Davidic covenant, first announced in 2 Samuel 7:12-16, here recalled as a sworn oath that God will never revoke.
<br/><br/>
The structure of the psalm is built on a beautiful reciprocity: David swore an oath to find a dwelling for the LORD (vv. 2-5), and the LORD swears an oath to establish David's dynasty (vv. 11-12). David sought to give God a house (a dwelling place); God responds by giving David a house (a dynasty). This wordplay on "house" is central to 2 Samuel 7, where God tells David, in effect, "You will not build me a house; I will build you a house." The human desire to honor God is met and exceeded by God's gracious commitment to the one who desired to honor him.
<br/><br/>
The phrase "a sure oath from which he will not turn back" (emet lo yashuv mimmennah) emphasizes the irrevocable certainty of God's commitment. Unlike human promises, which may fail, God's oath to David is "sure" (emet -- truth, faithfulness, reliability) and unchangeable. Even the conditional element ("if your sons keep my covenant") does not finally nullify the promise, because the ultimate fulfillment does not depend on the faithfulness of David's merely human descendants but on the faithfulness of the one perfect Son of David who would keep the covenant completely.
<br/><br/>
This is precisely how the New Testament reads Psalm 132. In Acts 2:30, Peter declares that David, "being a prophet, and knowing that God had sworn with an oath to him that he would set one of his descendants on his throne," foresaw and spoke of the resurrection of Christ. The sworn oath of Psalm 132:11 finds its fulfillment in Jesus, the Son of David, of whom the angel said: "The Lord God will give to him the throne of his father David, and he will reign over the house of Jacob forever, and of his kingdom there will be no end" (Luke 1:32-33). The Davidic covenant is fulfilled not in a succession of failing kings but in the one eternal King.`,
  },
  {
    color: PURPLE,
    title: "Zion Chosen Forever: God's Resting Place and the Horn of David",
    body: `The psalm's final movement (vv. 13-18) declares God's choice of Zion as his eternal dwelling and his commitment to bless it: "For the LORD has chosen Zion; he has desired it for his dwelling place: 'This is my resting place forever; here I will dwell, for I have desired it.'" The God who could not be contained by any earthly house nevertheless chooses to dwell in Zion, not because he needs a dwelling but because he has "desired it" -- an act of sovereign, gracious love.
<br/><br/>
The blessings God promises to Zion are comprehensive: provision ("I will abundantly bless her provisions; I will satisfy her poor with bread," v. 15), salvation ("her priests I will clothe with salvation," v. 16), and joy ("her saints will shout for joy," v. 16). The dwelling of God among his people brings every kind of flourishing -- material, spiritual, and emotional. Where God dwells, there is provision for the poor, salvation for the worshippers, and joy for the faithful.
<br/><br/>
The climactic promise concerns "the horn of David": "There I will make a horn to sprout for David; I have prepared a lamp for my anointed. His enemies I will clothe with shame, but on him his crown will shine" (vv. 17-18). The "horn" (qeren) is a symbol of strength and royal power, and "a horn to sprout" suggests the growth and flourishing of David's dynasty. The "lamp" (ner) recalls the promise that David would always have "a lamp before me in Jerusalem" (1 Kings 11:36) -- a continuing dynasty, a light that would not go out.
<br/><br/>
The New Testament identifies this sprouting horn and shining lamp with Christ. Zechariah's prophecy in Luke 1:69 declares that God "has raised up a horn of salvation for us in the house of his servant David" -- a direct allusion to Psalm 132:17. Jesus is the horn that sprouts for David, the lamp prepared for God's anointed, the King whose crown shines while his enemies are clothed with shame. The choice of Zion as God's resting place forever finds its ultimate fulfillment in the heavenly Zion (Hebrews 12:22) and the new Jerusalem, where "the dwelling place of God is with man" forever (Revelation 21:3). Derek Kidner concludes: "The psalm that began with David's restless vow ends with God's eternal rest in Zion and the unquenchable lamp of David's greater Son."`,
  },
];

const VERSES = [
  {
    ref: "vv. 1-5",
    text: "Remember, O LORD, in David's favor, all the hardships he endured, how he swore to the LORD and vowed to the Mighty One of Jacob, 'I will not enter my house or get into my bed...until I find a place for the LORD, a dwelling place for the Mighty One of Jacob.'",
    comment: `The psalm opens with a petition that God "remember" David's devotion -- not as a claim on merit but as an appeal to God's covenant faithfulness. David's vow of sleeplessness ("I will not give sleep to my eyes...until I find a place for the LORD") dramatizes the intensity of his desire to house the ark of God, recalling 2 Samuel 7:2 where David was troubled that he dwelt in cedar while the ark dwelt in a tent. The rare divine title "the Mighty One of Jacob" (avir ya'aqov), used twice here, roots David's vow in the ancient patriarchal covenant (Genesis 49:24). Calvin: "David could not be at ease in his own house while the ark of God was without a settled dwelling -- the mark of a heart truly devoted to God."`,
  },
  {
    ref: "vv. 6-7",
    text: "Behold, we heard of it in Ephrathah; we found it in the fields of Jaar. Let us go to his dwelling place; let us worship at his footstool!",
    comment: `These verses recall the ark's journey to Zion (2 Samuel 6). The geographical references trace the ark's history: Ephrathah (associated with Bethlehem, David's hometown) and "the fields of Jaar" (Kiriath-jearim, where the ark had rested twenty years after its return from the Philistines, 1 Samuel 7:1-2). The call "let us go to his dwelling place; let us worship at his footstool" is a liturgical invitation to corporate worship. The ark as God's "footstool" (cf. 1 Chronicles 28:2; Psalm 99:5) represents the place where the enthroned God condescends to meet his people -- the visible sign of the invisible God's presence, the focal point of Israel's worship.`,
  },
  {
    ref: "vv. 8-10",
    text: "Arise, O LORD, and go to your resting place, you and the ark of your might. Let your priests be clothed with righteousness, and let your saints shout for joy. For the sake of your servant David, do not turn away the face of your anointed one.",
    comment: `The cry "Arise, O LORD, and go to your resting place" (v. 8) echoes the words spoken when the ark set out in the wilderness (Numbers 10:35), but now the ark comes not to battle but to rest. "The ark of your might" identifies the ark as the symbol of God's power present among his people. The prayer for priests "clothed with righteousness" and saints who "shout for joy" anticipates God's answering promise in vv. 16 (priests clothed with salvation, saints shouting for joy). Verse 10's plea -- "for the sake of your servant David, do not turn away the face of your anointed" -- appeals to the Davidic covenant as the ground for God's continued favor on the reigning king (the "anointed," mashiach). 2 Chronicles 6:42 records Solomon using these very words at the temple dedication.`,
  },
  {
    ref: "vv. 11-12",
    text: "The LORD swore to David a sure oath from which he will not turn back: 'One of the sons of your body I will set on your throne. If your sons keep my covenant and my testimonies that I shall teach them, their sons also forever shall sit on your throne.'",
    comment: `The theological center of the psalm: the LORD's sworn oath to David, recalling 2 Samuel 7:12-16. The reciprocity is beautiful -- David swore an oath to find God a dwelling (vv. 2-5); now God swears an oath to give David a dynasty. David sought to give God a "house" (dwelling); God responds by giving David a "house" (dynasty). "A sure oath from which he will not turn back" (emet lo yashuv) emphasizes the irrevocable certainty of God's commitment. The conditional element ("if your sons keep my covenant") introduces a tension resolved only in the one perfect Son of David who fully keeps the covenant. Peter cites this oath in Acts 2:30 as a prophecy of Christ's resurrection and enthronement.`,
  },
  {
    ref: "vv. 13-16",
    text: "For the LORD has chosen Zion; he has desired it for his dwelling place: 'This is my resting place forever; here I will dwell, for I have desired it. I will abundantly bless her provisions; I will satisfy her poor with bread. Her priests I will clothe with salvation, and her saints will shout for joy.'",
    comment: `God's choice of Zion as his eternal dwelling is an act of sovereign, gracious love -- "for I have desired it" (ki ivvitiha). The God who cannot be contained by any house nevertheless chooses to dwell in Zion, not from need but from desire. The promised blessings are comprehensive: material provision ("satisfy her poor with bread"), spiritual salvation ("priests clothed with salvation"), and overflowing joy ("saints will shout for joy"). Notice that God's answer exceeds the people's prayer: they asked for priests clothed with "righteousness" (v. 9); God promises priests clothed with "salvation" (v. 16) -- the greater gift. Where God dwells, there is flourishing of every kind. Spurgeon: "God's presence is the source of all Zion's blessings; remove his presence and the city is desolate, but where he dwells, there is bread for the poor and joy for the saints."`,
  },
  {
    ref: "vv. 17-18",
    text: "There I will make a horn to sprout for David; I have prepared a lamp for my anointed. His enemies I will clothe with shame, but on him his crown will shine.",
    comment: `The climactic promise concerns the "horn of David." The "horn" (qeren) symbolizes strength and royal power; "a horn to sprout" pictures the growth and flourishing of David's dynasty. The "lamp" (ner) recalls God's promise that David would always have "a lamp before me in Jerusalem" (1 Kings 11:36) -- an enduring dynasty, a light that would not go out. The contrast of verse 18 -- enemies clothed with shame, the anointed's crown shining -- echoes the contrast structure of many psalms. The New Testament identifies this sprouting horn with Christ: Zechariah declares that God "has raised up a horn of salvation for us in the house of his servant David" (Luke 1:69, directly alluding to this verse). Jesus is the horn that sprouts for David, the lamp prepared for God's anointed, the King whose crown shines forever.`,
  },
];

const APPLICATIONS = [
  {
    color: GOLD,
    title: "David's Holy Restlessness: A Passion for God's Dwelling",
    body: `Psalm 132 opens with David's remarkable vow: he will not sleep, will not rest in his own comfortable house, until he has found a dwelling place for the LORD. This holy restlessness -- the inability to be at ease in personal comfort while the worship of God is neglected -- is a searching challenge to contemporary Christian complacency. David could not rest while the ark of God dwelt in a tent; can we rest comfortably while God's worship and God's mission are neglected in our own lives and communities?
<br/><br/>
This does not mean that Christians should literally lose sleep, nor that we earn God's favor by our zeal. But it does mean that genuine devotion to God produces a certain holy discontent -- a refusal to be satisfied with our own comfort while there is more to be done for God's glory. The believer whose heart is truly devoted to God cannot be wholly at ease in personal prosperity while the cause of God languishes. David's vow models a passion that puts God's honor before personal comfort.
<br/><br/>
<em>Prayer prompt</em>: Lord, give me David's holy restlessness -- a heart that cannot be fully at ease in my own comfort while your worship is neglected and your mission is unfinished. Forgive me for the complacency that rests content in personal prosperity while caring little for your glory. Stir in me a passion to find a dwelling place for you -- in my own heart, in my home, in my community -- that honors you as you deserve. Amen.`,
  },
  {
    color: TEAL,
    title: "You Give God a House, God Gives You a House: The Logic of Grace",
    body: `The structural heart of Psalm 132 is the beautiful reciprocity between David's vow and God's oath. David swears to give God a house (a dwelling for the ark); God responds by giving David a house (an eternal dynasty). This reflects the central dynamic of 2 Samuel 7, where God essentially tells David: "You want to build me a house? I will build you a house." The human desire to honor God is met and infinitely exceeded by God's gracious commitment.
<br/><br/>
This is the logic of grace that runs throughout Scripture: whatever we offer God, he returns to us multiplied beyond measure. We give him our meager devotion; he gives us his boundless covenant faithfulness. We seek to honor him; he commits to bless us forever. We can never out-give God. As Jesus said, "Give, and it will be given to you. Good measure, pressed down, shaken together, running over, will be put into your lap" (Luke 6:38). The one who seeks to give God a dwelling finds that God has prepared for him an eternal home.
<br/><br/>
This frees the believer from a transactional, anxious relationship with God. We do not serve God to earn his favor; we serve him in response to grace, and discover that even our service is met with greater grace. <em>Application</em>: when you find yourself giving to God -- your time, your resources, your devotion -- remember the logic of Psalm 132. You cannot out-give the God who gave David an eternal house in response to a tent, and who gave us his own Son. Serve freely, knowing that the God you serve returns every gift multiplied.`,
  },
  {
    color: ROSE,
    title: "The Sure Oath Fulfilled in Christ: Reading Psalm 132 Messianically",
    body: `Psalm 132's sworn oath -- "One of the sons of your body I will set on your throne" -- creates a tension that the Old Testament never fully resolves. David's actual descendants were a mixed lot: some faithful, many wicked, and the dynasty eventually collapsed at the Babylonian exile, when no son of David sat on the throne. How could God's "sure oath from which he will not turn back" be fulfilled when the Davidic line apparently failed?
<br/><br/>
The New Testament answers: the oath is fulfilled not in the failing succession of human kings but in the one perfect Son of David, Jesus Christ. The angel Gabriel announced to Mary: "The Lord God will give to him the throne of his father David, and he will reign over the house of Jacob forever, and of his kingdom there will be no end" (Luke 1:32-33). Peter, on the day of Pentecost, declared that David "foresaw and spoke about the resurrection of the Christ" precisely because he knew "that God had sworn with an oath to him that he would set one of his descendants on his throne" (Acts 2:30-31).
<br/><br/>
This Messianic fulfillment transforms how we read the conditional element of the oath ("if your sons keep my covenant"). The condition that David's merely human sons could never fully meet was met perfectly by Jesus, the Son of David who kept the covenant completely. Because Christ fulfilled the condition, the promise stands secure forever. <em>Application</em>: Psalm 132 gives us confidence in the absolute reliability of God's promises. The oath that seemed to fail at the exile was fulfilled beyond all expectation in the resurrection and enthronement of Christ. The God who keeps his oath to David will keep every promise he has made to us in Christ.`,
  },
  {
    color: PURPLE,
    title: "Zion as God's Resting Place: From Temple to Christ to the Church",
    body: `God's declaration in Psalm 132:14 -- "This is my resting place forever; here I will dwell, for I have desired it" -- traces a trajectory of divine dwelling that runs through the entire Bible. God chose to dwell in Zion, in the temple, among his people. But the temple was never the final goal; it was a sign pointing forward to a greater dwelling.
<br/><br/>
The New Testament reveals the progression. First, God dwelt among us in Christ: "the Word became flesh and dwelt [tabernacled] among us" (John 1:14). Jesus referred to his own body as the temple (John 2:19-21), the true dwelling place of God. Then, after Pentecost, God came to dwell in his people: the church is "a holy temple in the Lord...a dwelling place for God by the Spirit" (Ephesians 2:21-22), and each believer's body is "a temple of the Holy Spirit" (1 Corinthians 6:19). Finally, in the new creation, God will dwell with his people fully and forever: "Behold, the dwelling place of God is with man. He will dwell with them, and they will be his people" (Revelation 21:3).
<br/><br/>
The desire of God expressed in Psalm 132 -- "for I have desired it" -- is the same desire that drives the whole biblical story toward its consummation: God's longing to dwell with his people. The God who chose Zion as his resting place ultimately chooses the redeemed community, and finally the whole renewed creation, as his eternal home. <em>Reflection</em>: you, as a believer, are part of God's chosen dwelling place. The same God who said of Zion "here I will dwell, for I have desired it" has, by his Spirit, made his home in you and in his church. Live as the dwelling place of God, honoring the One who has desired to dwell with you forever.`,
  },
];

export default function Psalm132Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openTheme, setOpenTheme] = useState<number | null>(null);
  const [openVerse, setOpenVerse] = useState<number | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #1a1200 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ background: ACCENT, color: "#fff", fontSize: "0.75rem", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.08em", padding: "0.25rem 0.75rem", borderRadius: "999px", textTransform: "uppercase" }}>Psalm 132</span>
            <span style={{ color: MUTED, fontSize: "0.85rem", fontFamily: "sans-serif" }}>Song of Ascents &bull; Longest in Collection &bull; 18 Verses</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 1rem" }}>
            The LORD Swore to David a Sure Oath
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: "680px", margin: "0 0 1.5rem" }}>
            The longest Song of Ascents -- a liturgy of the Davidic covenant: David's sleepless vow to find a dwelling for the LORD, the ark's journey to Zion, and God's reciprocal oath to set David's offspring on the throne and to make Zion his resting place forever.
          </p>
          <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1.25rem", margin: "0", color: TEXT, fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7 }}>
            &ldquo;This is my resting place forever; here I will dwell, for I have desired it.&rdquo;
            <span style={{ display: "block", fontSize: "0.85rem", color: MUTED, fontStyle: "normal", marginTop: "0.5rem" }}>&mdash; Psalm 132:14</span>
          </blockquote>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)} style={{ padding: "1rem 1.5rem", background: "none", border: "none", borderBottom: activeTab === i ? `2px solid ${ACCENT}` : "2px solid transparent", color: activeTab === i ? ACCENT : MUTED, fontWeight: activeTab === i ? 700 : 400, cursor: "pointer", whiteSpace: "nowrap", fontFamily: "sans-serif", fontSize: "0.95rem", transition: "color 0.2s" }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1.5rem" }}>

        {/* OVERVIEW */}
        {activeTab === 0 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.25rem", color: ACCENT }}>Overview of Psalm 132</h2>
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `Psalm 132 is the longest of the fifteen Songs of Ascents and the most theologically weighty, for it sets the entire collection in the context of the Davidic covenant and God's choice of Zion. Where most Songs of Ascents are brief and personal, Psalm 132 is a grand liturgy of the covenant, likely composed for a festival commemorating the bringing of the ark to Jerusalem (2 Samuel 6) and the establishment of David's dynasty (2 Samuel 7).` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The psalm is built on a beautiful structural reciprocity. In the first half (vv. 1&ndash;10), the people recall David's vow to find a dwelling for the LORD &mdash; his sleepless determination to house the ark of God &mdash; and the ark's journey to its resting place in Zion, accompanied by prayers for the priests, the saints, and the anointed king. In the second half (vv. 11&ndash;18), the LORD responds with his own sworn oath: to set David's offspring on the throne and to choose Zion as his eternal dwelling place. David swore to give God a house; God swears to give David a house.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `This wordplay on "house" is central to the psalm and to its source in 2 Samuel 7, where God tells David, in effect: "You will not build me a house; I will build you a house." David's desire to honor God with a dwelling place is met and infinitely exceeded by God's gracious commitment to establish David's dynasty forever. The human impulse to give to God is answered by God's overflowing grace &mdash; the consistent logic of the covenant throughout Scripture.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The psalm's central declaration &mdash; "The LORD swore to David a sure oath from which he will not turn back" (v. 11) &mdash; creates a tension the Old Testament never fully resolves: David's actual descendants were a mixed lot, and the dynasty collapsed at the Babylonian exile. How could God's "sure oath" be fulfilled? The New Testament answers: the oath is fulfilled not in the failing succession of human kings but in the one perfect Son of David, Jesus Christ, whose throne and kingdom have no end (Luke 1:32&ndash;33; Acts 2:30&ndash;31).` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: `The psalm's closing promise of a "horn to sprout for David" and "a lamp for my anointed" (v. 17) is explicitly Messianic. Zechariah's prophecy in Luke 1:69 declares that God "has raised up a horn of salvation for us in the house of his servant David" &mdash; a direct allusion to Psalm 132:17. The God who chose Zion as his resting place forever now dwells, through Christ and the Spirit, in his church (Ephesians 2:21&ndash;22), and will finally dwell with his people in the new Jerusalem (Revelation 21:3).` }} />

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: ACCENT, fontFamily: "sans-serif" }}>The Two Halves of Psalm 132</h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                  <thead>
                    <tr>
                      {["Section", "Focus", "Content"].map(h => (
                        <th key={h} style={{ textAlign: "left", padding: "0.6rem 0.75rem", borderBottom: `2px solid ${BORDER}`, color: MUTED, fontFamily: "sans-serif", fontWeight: 600, fontSize: "0.8rem" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {STRUCTURE_TABLE.map((row, i) => (
                      <tr key={i} style={{ borderBottom: `1px solid ${BORDER}` }}>
                        <td style={{ padding: "0.75rem", color: GOLD, whiteSpace: "nowrap" }}>{row.part}</td>
                        <td style={{ padding: "0.75rem", color: TEXT }}>{row.focus}</td>
                        <td style={{ padding: "0.75rem", color: MUTED }}>{row.content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: ACCENT, fontFamily: "sans-serif" }}>Key Details</h3>
              <div style={{ display: "grid", gap: "0.75rem" }}>
                {KEY_DETAILS.map(({ label, value }) => (
                  <div key={label} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "0.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "0.75rem" }}>
                    <span style={{ color: MUTED, fontSize: "0.85rem", fontFamily: "sans-serif", fontWeight: 600 }}>{label}</span>
                    <span style={{ color: TEXT, fontSize: "0.95rem" }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: TEXT, fontFamily: "sans-serif" }}>Video Resources</h3>
            {VIDEOS.map((v) => <VideoEmbed key={v.videoId} v={v} />)}
          </div>
        )}

        {/* THEMES */}
        {activeTab === 1 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: ACCENT }}>Major Themes</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>Click each theme to expand the full discussion.</p>
            {THEMES.map((theme, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: "10px", marginBottom: "1rem", overflow: "hidden" }}>
                <button onClick={() => setOpenTheme(openTheme === i ? null : i)} style={{ width: "100%", background: openTheme === i ? CARD : "transparent", border: "none", padding: "1.25rem 1.5rem", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: theme.color, flexShrink: 0 }} />
                    <span style={{ color: TEXT, fontWeight: 600, fontSize: "1rem" }}>{theme.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: "1.25rem", flexShrink: 0 }}>{openTheme === i ? "-" : "+"}</span>
                </button>
                {openTheme === i && (
                  <div style={{ padding: "0 1.5rem 1.5rem", borderTop: `1px solid ${BORDER}` }}>
                    <div style={{ height: "1rem" }} />
                    <div style={{ lineHeight: 1.8, color: TEXT }} dangerouslySetInnerHTML={{ __html: theme.body }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: ACCENT }}>Verse-by-Verse Commentary</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>Click each verse grouping to expand the commentary.</p>
            {VERSES.map((v, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: "10px", marginBottom: "1rem", overflow: "hidden" }}>
                <button onClick={() => setOpenVerse(openVerse === i ? null : i)} style={{ width: "100%", background: openVerse === i ? CARD : "transparent", border: "none", padding: "1.25rem 1.5rem", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
                    <div>
                      <span style={{ color: ACCENT, fontWeight: 700, fontFamily: "sans-serif", fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>{v.ref}</span>
                      <span style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.6 }}>&ldquo;{v.text}&rdquo;</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.25rem", flexShrink: 0 }}>{openVerse === i ? "-" : "+"}</span>
                  </div>
                </button>
                {openVerse === i && (
                  <div style={{ padding: "0 1.5rem 1.5rem", borderTop: `1px solid ${BORDER}` }}>
                    <div style={{ height: "1rem" }} />
                    <div style={{ lineHeight: 1.8, color: TEXT }} dangerouslySetInnerHTML={{ __html: v.comment }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* APPLICATION */}
        {activeTab === 3 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: ACCENT }}>Application</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>How Psalm 132 shapes devotion, grace, and confidence in God's promises.</p>
            {APPLICATIONS.map((app, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${app.color}`, borderRadius: "10px", padding: "1.5rem", marginBottom: "1.25rem" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: app.color, marginBottom: "0.75rem", fontFamily: "sans-serif" }}>{app.title}</h3>
                <div style={{ lineHeight: 1.8, color: TEXT }} dangerouslySetInnerHTML={{ __html: app.body }} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
