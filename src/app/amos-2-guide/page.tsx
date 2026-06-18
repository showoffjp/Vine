"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Amos2Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const TABS = [
    { id: "overview", label: "Overview" },
    { id: "themes", label: "Key Themes" },
    { id: "verse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  const themeItems = [
    {
      id: "rhetorical-trap",
      color: ROSE,
      title: "The Rhetorical Trap: Israel's Surprise",
      html: "Amos 1&ndash;2 is one of the most brilliantly constructed rhetorical sequences in prophetic literature. The prophet opens by condemning Damascus for threshing Gilead with iron threshing sledges (1:3). The crowd listens with approval. Then Gaza, for deporting entire populations into slavery (1:6). More approval. Then Tyre, for breaking a covenant of brotherhood and delivering captives to Edom (1:9). Approval continues. Then Edom, then Ammon, then Moab &mdash; each condemned for atrocities against humanity, each judgment met with the crowd&rsquo;s quiet agreement. The rhetorical trap is being set with consummate skill: Amos is drawing Israel into the role of moral judge, building a consensus that such behaviors deserve divine punishment. Then comes Judah &mdash; Israel&rsquo;s southern sister and rival &mdash; condemned for rejecting the law of the LORD and being led astray by lies. The crowd still applauds. And then, with devastating precision, the trap springs: &ldquo;For three transgressions of Israel, and for four, I will not revoke the punishment.&rdquo; The crowd that has been cheering the condemnation of their enemies is suddenly standing in the defendant&rsquo;s dock. The theological significance could not be more profound: proximity to God, covenant membership, religious heritage &mdash; none of these constitute immunity from divine accountability. If anything, they intensify it. Paul uses exactly the same rhetorical structure in Romans 2: after establishing in Romans 1 that the Gentiles stand under divine judgment for suppressing the truth in unrighteousness, he turns in 2:1 to the person who judges &mdash; &ldquo;you have no excuse, O man, every one of you who judges. For in passing judgment on another you condemn yourself.&rdquo; The trap springs on the morally superior party just as it sprung on Israel in Amos 2. The message is permanent and universal: no one stands outside God&rsquo;s moral government, and those who imagine their privilege exempts them are in the greatest danger.",
    },
    {
      id: "selling-righteous",
      color: GOLD,
      title: "Selling the Righteous for Silver",
      html: "The specific social sins Amos indicts in 2:6&ndash;8 are not vague moral failures or abstract ethical shortcomings. They are concrete, institutionalized covenant violations that the legal and economic structures of Samaria had normalized and even legalized. &ldquo;They sell the righteous for silver, and the needy for a pair of sandals&rdquo; (2:6) &mdash; this is debt slavery, the mechanism by which creditors could sell an indebted person into servitude when the debt could not be repaid. The Mosaic law had elaborate protections against the permanent enslavement of fellow Israelites (Leviticus 25, Deuteronomy 15), but these were being systematically circumvented. A man&rsquo;s entire freedom could be traded away for the price of a pair of sandals &mdash; an insultingly trivial amount that reveals the contempt with which the poor were regarded. The seized garments of verse 8 are also specifically regulated by the covenant code. Exodus 22:26&ndash;27 and Deuteronomy 24:12&ndash;13 explicitly forbid keeping a poor person&rsquo;s cloak overnight if it has been taken as a pledge, because it is their covering for the cold. And yet the wealthy of Samaria are lying down beside every altar on garments taken in pledge &mdash; using the seized property of the poor as their bedding during religious festivals, the ultimate profanity of mixing liturgical performance with covenantal violation. They drink the wine of those who have been fined (2:8) &mdash; using the proceeds of unjust judicial fines to fund their leisure and worship. The legal system, the economic system, and the religious system have become interlocking mechanisms for extracting wealth from the poorest covenant members. The New Testament echoes are unmistakable. James 5:1&ndash;6 uses nearly identical language: &ldquo;Come now, you rich, weep and howl for the miseries that are coming upon you... Behold, the wages of the laborers who mowed your fields, which you kept back by fraud, are crying out against you.&rdquo; Jesus&rsquo;s warnings in Luke 16 and Matthew 25 about the treatment of the poor carry the same structural logic: how you treat the most vulnerable is how you treat God himself.",
    },
    {
      id: "historical-faithfulness",
      color: TEAL,
      title: "God's Historical Faithfulness Rejected",
      html: "Amos 2:9&ndash;12 interrupts the pattern of the oracle with something unexpected: a divine soliloquy cataloguing what God has done for Israel. &ldquo;Yet it was I who destroyed the Amorite before them, whose height was like the height of the cedars and who was as strong as the oaks; I destroyed his fruit above and his roots below.&rdquo; The Amorites appear in Deuteronomy 2&ndash;3 and Numbers 21 as the formidable occupants of Canaan whose defeat was an act of divine power entirely beyond Israel&rsquo;s military capacity. Amos describes them with hyperbolic vividness &mdash; cedar-tall, oak-strong, destroyed from top to bottom &mdash; to emphasize the immensity of what God did to clear the land for Israel. Then the Exodus: &ldquo;Also it was I who brought you up out of the land of Egypt and led you forty years in the wilderness, to possess the land of the Amorite.&rdquo; The Exodus is the irreducible foundation of Israel&rsquo;s covenant identity. Everything in the Mosaic law is prefaced by &ldquo;I am the LORD your God, who brought you out of the land of Egypt, out of the house of slavery&rdquo; (Exodus 20:2). To name the Exodus here in the judgment oracle is to remind Israel that their sin is not merely ethical failure &mdash; it is covenantal ingratitude against the one who saved them from slavery. God then raised prophets from Israel&rsquo;s young men and Nazirites from their youth &mdash; gifts of prophetic word and consecrated life meant to sustain the community in covenant faithfulness. Israel&rsquo;s response? They made the Nazirites drink wine, corrupting those set apart for holiness, and commanded the prophets not to prophesy, silencing the very voice of God in their midst. The ingratitude is not merely impolite; it is a theological catastrophe. The canonical connection to Deuteronomy 32 (the Song of Moses) is precise: Moses anticipates in his great song that Israel will grow fat, kick, and forsake God who made them, scoffing at the Rock of their salvation. Amos is watching the prediction come true. The New Testament develops this in Hebrews 2:1&ndash;4: &ldquo;how shall we escape if we neglect such a great salvation?&rdquo; &mdash; the greater the revelation, the greater the accountability of those who ignore it.",
    },
    {
      id: "inescapable-judgment",
      color: PURPLE,
      title: "The Inescapable Nature of Judgment",
      html: "The oracle concludes in 2:13&ndash;16 with an image of divine judgment that no human resource can outrun. The metaphor is agricultural and visceral: &ldquo;Behold, I will press you down in your place, as a cart full of sheaves presses down.&rdquo; A harvest wagon loaded beyond capacity, creaking, grinding, pressing everything beneath it into the earth &mdash; this is the weight of divine judgment on Israel. What follows is an exhaustive catalogue of human capacities that will all fail simultaneously. The swift will not be able to flee. The strong will not be able to retain their strength. The warrior will not be able to save his life. The archer will not be able to stand his ground. The swift of foot will not be able to deliver himself. The one who rides a horse will not be able to save his life. Even &ldquo;the stoutest of heart among the mighty shall flee away naked in that day.&rdquo; The naked flight &mdash; abandoning even clothing in the rush to escape &mdash; is the ultimate symbol of unraveling military confidence and national pride. Nakedness in the ancient world was shameful, a stripping of status and dignity. The mighty warrior who fled naked had been reduced to nothing. The comprehensiveness of this list is the point. Amos is not saying some will escape and some will not. He is not leaving any category of human capacity unaddressed. Swift, strong, warrior, archer, foot-soldier, cavalry &mdash; every military and individual resource is catalogued and dismissed. There is no human configuration that can resist what is coming. The connection to Amos 9:1&ndash;4 reinforces this: &ldquo;though they dig into Sheol, from there shall my hand take them; though they climb up to heaven, from there I will bring them down.&rdquo; Above and below, east and west, sea and serpent &mdash; nowhere is beyond God&rsquo;s reach. The New Testament echoes appear in Hebrews 10:31 (&ldquo;It is a fearful thing to fall into the hands of the living God&rdquo;) and in the great scene of Revelation 6:15&ndash;17 where kings and great men and generals and the mighty all hide in caves crying for the mountains to fall on them, because &ldquo;the great day of their wrath has come, and who can stand?&rdquo;",
    },
  ];

  const verseItems = [
    {
      id: "moab-21-23",
      color: TEAL,
      title: "Amos 2:1-3  -  Oracle Against Moab",
      html: "The oracle against Moab opens the chapter with a crime that is striking in its specificity: &ldquo;For three transgressions of Moab, and for four, I will not revoke the punishment, because he burned to lime the bones of the king of Edom.&rdquo; The desecration of the dead &mdash; burning an enemy king&rsquo;s bones after death to reduce them to agricultural lime &mdash; represents a crime against human dignity that goes beyond military conflict into a different category: the violation of the dead. Ancient Near Eastern cultures across the spectrum understood that certain treatments of human remains, even enemy human remains, were beyond the pale of legitimate warfare. The bones of the dead deserved a measure of respect that transcended political enmity. What makes this especially significant in the sequence of oracles is that Edom was Israel&rsquo;s enemy, not her ally. The preceding oracle (1:11&ndash;12) has already condemned Edom itself for pursuing Israel with the sword and stifling compassion. Yet here, God holds Moab accountable for what it did to Edom. God&rsquo;s moral law is not simply a charter protecting Israel and her friends. It extends its protection even to those who stand in enmity with God&rsquo;s people. The enemy king deserved to have his bones respected. This is a remarkable early statement of universal human dignity grounded not in political relationship but in the image of God that all human beings bear. The judgment against Moab follows the pattern of the other oracles: fire on Moab, death in the tumult and battle, the destruction of the king and princes together. The symmetry of judgment across all the nations &mdash; the same &ldquo;I will send fire&rdquo; formula repeated &mdash; underlines the uniformity of God&rsquo;s moral government. No nation operates in a zone exempt from divine accountability.",
    },
    {
      id: "judah-24-25",
      color: GOLD,
      title: "Amos 2:4-5  -  Oracle Against Judah",
      html: "The oracle against Judah is the penultimate step in Amos&rsquo;s rhetorical sequence, and it is distinctive in a revealing way. Every previous oracle has condemned the foreign nations for ethical crimes &mdash; the category of humanitarian violations that even the nations surrounding Israel could recognize as wrong: atrocities in war, slave trading, covenant-breaking, the treatment of the dead. But Judah&rsquo;s indictment shifts the register: &ldquo;because they have rejected the law of the LORD, and have not kept his statutes, but their lies have led them astray, those after which their fathers walked.&rdquo; Judah is condemned not primarily for ethical violations (though those are present) but for theological failure &mdash; covenant infidelity, the rejection of the Torah, following the lies of idolatry after which their ancestors walked. This distinction is crucial: Judah had the law. Judah had the prophets. Judah had the temple and the covenant and the Davidic promise. The nations surrounding her could be condemned for what even natural moral conscience could identify as atrocity. But Judah is condemned for something more specific: having been given the word of God, the covenant revelation, and then rejecting it. The brevity of the oracle against Judah compared to what follows for Israel is itself significant. The shorter oracle against Judah prepares the way for the much longer, more elaborate indictment of Israel (the Northern Kingdom), which had received all of these gifts as well and had added the specific social and economic violations that Amos then catalogs with devastating precision. The fire on Jerusalem (2:5) anticipates the Babylonian destruction by over a century &mdash; a remarkable prophetic statement that the judgment Amos pronounces on the Southern Kingdom will indeed come.",
    },
    {
      id: "israel-26-28",
      color: ROSE,
      title: "Amos 2:6-8  -  Israel's Social Sins: The Rhetorical Surprise",
      html: "Now the trap springs. With the accumulated rhetorical momentum of six oracles against foreign nations and one against the sister kingdom, Amos turns his full prophetic force on Israel, and what he delivers is the longest and most devastating oracle in the entire sequence. The formula &ldquo;for three transgressions and for four&rdquo; signals not merely the same level of crime as the preceding nations but the full measure of divine patience exhausted. And the sins are not the dramatic battlefield atrocities that condemned the nations. They are domestic. Structural. Legal. Economic. They are the sins of ordinary institutional life, which is precisely what makes them so damning. They sell the righteous for silver: this is debt slavery in its most cynical form. The legal process has become a mechanism for converting the indebtedness of poor people into a commodity &mdash; the &ldquo;righteous&rdquo; here likely meaning the person who is legally in the right but economically too weak to sustain their claim in a corrupted court. They sell the needy for a pair of sandals: an insultingly small transaction that reveals the contempt at the heart of the exploitation. The needy person&rsquo;s freedom, dignity, and future are worth less than footwear. They trample the head of the poor into the dust of the earth and turn aside the way of the afflicted: the language intensifies &mdash; this is not merely ignoring the poor but actively crushing them, trampling their faces into the ground, diverting justice from its proper course whenever the afflicted seek it. A man and his father go in to the same young woman: this likely refers to the sexual exploitation of female debt-slaves, women whose economic vulnerability has made them sexually available to the powerful, a violation that compounds economic exploitation with sexual predation and familial shame. They stretch themselves beside every altar on garments taken in pledge: the very cloaks seized from indebted poor people &mdash; garments that Exodus 22:26 says must be returned before nightfall because the poor person needs them to sleep &mdash; are being used as lounging furniture at religious festivals. Piety and plunder are practiced in the same moment. And they drink the wine of those who have been fined in the house of their God: the proceeds of unjust judicial fines underwrite their religious parties. The entire system &mdash; legal, economic, religious, sexual &mdash; is interlocked in mutual exploitation of the most vulnerable. This is not individual moral failure; it is systemic sin.",
    },
    {
      id: "gifts-29-212",
      color: GREEN,
      title: "Amos 2:9-12  -  God's Historical Gifts Rejected",
      html: "Before the judgment is announced, God pauses the oracle for a remarkable moment of divine self-disclosure: a catalogue of everything God has done for Israel, recited in the first person with an intensity that communicates something very close to grief. &ldquo;Yet it was I who destroyed the Amorite before them, whose height was like the height of the cedars and who was as strong as the oaks.&rdquo; The Amorites were the formidable pre-conquest inhabitants of the land, mythologized here in hyperbolic terms &mdash; cedar-high, oak-strong &mdash; to make the point that what God did was immense and beyond natural explanation. The destruction was complete from top to bottom, fruit and root, leaving nothing of their presence or legacy. &ldquo;Also it was I who brought you up out of the land of Egypt and led you forty years in the wilderness, to possess the land of the Amorite.&rdquo; The Exodus recapitulation at the center of a judgment oracle is a theological masterstroke: God is not simply listing accomplishments; he is building a case. Every item in this list is a gift that was freely given and systematically rejected. The forty years in the wilderness were years of provision, of manna and water from the rock, of the cloud by day and fire by night &mdash; continuous divine care across four decades of vulnerable wandering. God raised up prophets from among their young men and Nazirites from among their youth. Both institutions are gifts of grace: the prophets to speak God&rsquo;s word into the community&rsquo;s life and call them back when they stray; the Nazirites to embody a consecrated, visibly set-apart life that reminded the whole community of its holiness. Israel&rsquo;s response to both was aggressive destruction. They made the Nazirites drink wine, forcibly un-consecrating those whose whole identity was their separation to God. They commanded the prophets not to prophesy, silencing the living voice of God in their midst. The deliberate neutralization of both prophetic speech and consecrated life reveals the depth of Israel&rsquo;s rejection: they were not merely neglecting grace, they were actively suppressing it.",
    },
    {
      id: "judgment-213-216",
      color: PURPLE,
      title: "Amos 2:13-16  -  The Inescapable Judgment",
      html: "The oracle concludes with one of the most arresting judgment descriptions in the prophetic corpus. &ldquo;Behold, I will press you down in your place, as a cart full of sheaves presses down.&rdquo; The harvest cart image is drawn from everyday agrarian life &mdash; the groaning, creaking wagon overloaded with grain, pressing into the earth with irresistible weight. The judgment is not dramatic in the sense of being exotic or supernatural; it is the weight of accumulated consequence. And then follows the comprehensive dismantling of every human capacity for escape or resistance. The swift cannot flee: the obvious option, to simply run faster than the disaster, is foreclosed. The strong cannot muster strength: the physical power that sustained military victory is neutralized. The warrior cannot save his life: military training and experience count for nothing. The one who handles the bow cannot stand: the long-range advantage of archery fails. The swift of foot cannot deliver himself: even the fastest among the infantry cannot outrun what is coming. The one who rides a horse cannot save his life: cavalry speed is insufficient. The stoutest of heart among the mighty shall flee away naked in that day: the most courageous, the most experienced, the most celebrated warrior will abandon everything &mdash; weapons, armor, clothing &mdash; in a naked, shameful flight. In the ancient world, a warrior&rsquo;s nakedness in flight was the total inversion of martial glory. The man who had been the envy of his comrades becomes the emblem of humiliation. The exhaustive nature of the list is itself the message: Amos is not leaving any escape route unaddressed. He is closing every door. The theological logic is precise: a people who has rejected God&rsquo;s gifts, silenced God&rsquo;s prophets, corrupted the consecrated, and ground the poor into the dust has no remaining resource to draw on. The human alternatives to trusting God &mdash; speed, strength, strategy, cavalry &mdash; are all God&rsquo;s gifts in the first place, and he is withdrawing them.",
    },
  ];

  const appSections = [
    {
      id: "same-standard",
      color: ROSE,
      title: "When God's People Face the Same Standard",
      html: "The rhetorical trap Amos springs on Israel in chapter 2 is not a historical curiosity. It is a permanent warning about the nature of covenant privilege and moral accountability. The crowd that cheered as each surrounding nation was condemned was operating on a deeply human assumption: that being on God&rsquo;s side means being on the right side of divine judgment. They assumed that their covenant status &mdash; their election, their temple, their law, their history with God &mdash; constituted a kind of moral exemption. Amos&rsquo;s oracle demolishes this assumption with devastating clarity. Covenant privilege does not exempt from covenant accountability. If anything, it intensifies it. Jesus states this principle explicitly in Luke 12:48: &ldquo;Everyone to whom much was given, of him much will be required, and from him to whom they entrusted much, they will demand the more.&rdquo; The church that assumes gospel privilege without gospel ethics stands in precisely the position of Israel in Amos 2. We have received the revelation of God in Christ, the Scriptures, the Spirit, the sacraments &mdash; gifts of immeasurable grace. The question Amos presses is: what has been done with these gifts? Have the poor been served or exploited? Has the prophetic word been welcomed or silenced? Has the community of faith become a community of justice, or has it become a religious veneer over the same structural injustices that characterized Samaria? The rhetorical trap is still set. The only escape is the one Amos implies by building the oracle in the first place: genuine repentance, genuine engagement with the covenant demands of justice, and the humble recognition that proximity to God creates greater accountability, not less.",
    },
    {
      id: "specificity-of-sin",
      color: GOLD,
      title: "The Specificity of Sin",
      html: "Amos does not speak in vague moral generalities. He does not say &ldquo;Israel has been unkind to the poor&rdquo; or &ldquo;Israel lacks compassion for the vulnerable.&rdquo; He names specific practices: garments taken in pledge used as festival bedding, wine from judicial fines drunk in the house of God, people sold into slavery for the price of sandals. This specificity is theologically significant. Sin is not primarily an abstract moral category; it is a concrete pattern of behavior that can be named, analyzed, and repented of. The application to contemporary economic and legal life is demanding precisely because it requires this same specificity. It is easy to be concerned about &ldquo;poverty&rdquo; in the abstract. It is much harder to examine the specific economic structures and personal habits that either reproduce or resist the exploitation of the vulnerable. Amos would not be satisfied with a general feeling of compassion for the poor while the specific mechanisms of exploitation continue. He would want to know: which legal processes in your jurisdiction systematically disadvantage those who cannot afford representation? Which lending practices trap the poor in cycles of indebtedness? Which housing and employment structures keep the vulnerable vulnerable? And at the personal level: where does your consumption, your investment, your civic engagement either resist or participate in the structures that sell the needy for a pair of sandals? The personal examination Amos demands is uncomfortable because it is specific. But it is precisely the specificity that makes genuine repentance possible, and genuine repentance that makes transformation possible.",
    },
    {
      id: "silencing-prophets",
      color: TEAL,
      title: "Silencing the Prophets",
      html: "Israel&rsquo;s command to the prophets not to prophesy (2:12) is one of the most sobering lines in Amos. It was not that the prophetic word was unavailable to Israel. God had graciously provided prophets from among their own young men &mdash; people who knew the community from the inside, who shared their history and language and grief. But when the prophetic word began to challenge comfortable assumptions, to name specific injustices, to call the powerful to account, Israel&rsquo;s response was to tell them to stop. Not to argue with the content. Not to refute the charges. Simply to silence the voice because it was inconvenient. This is a pattern that the New Testament also recognizes and warns against. Paul instructs Timothy that the time will come when people &ldquo;will not endure sound teaching, but having itching ears they will accumulate for themselves teachers to suit their own passions, and will turn away from listening to the truth&rdquo; (2 Timothy 4:3&ndash;4). The mechanism is not usually dramatic: rarely does anyone stand up and say &ldquo;I command you not to speak prophetically.&rdquo; More often, prophetic voices are marginalized, derided, spiritually re-categorized as &ldquo;political&rdquo; or &ldquo;divisive&rdquo; or &ldquo;not really biblical&rdquo; when their actual offense is that they are uncomfortably specific. The application is bilateral. Communities and individuals need to ask honestly: which voices are we silencing, and why? But the other question is equally important: do we have the courage to speak prophetically when doing so will be costly, to refuse the implicit command of comfortable communities and powerful stakeholders to simply not say what God has given us to say?",
    },
    {
      id: "ingratitude",
      color: PURPLE,
      title: "God's Gifts and Human Ingratitude",
      html: "The catalogue in Amos 2:9&ndash;12 is a list of unearned, undeserved grace. The defeat of the Amorites was not Israel&rsquo;s military achievement; it was God&rsquo;s intervention. The Exodus was not Israel&rsquo;s political negotiation; it was God&rsquo;s miraculous rescue. The forty years of wilderness provision were not Israel&rsquo;s resourcefulness; they were God&rsquo;s daily faithfulness. The prophets and Nazirites were not human institutional creations; they were divine gifts to sustain the community in its covenant vocation. Every item in the list came from outside Israel, from a grace they did not generate and could not sustain by their own capacity. Ingratitude in this context is not merely impolite or aesthetically unappealing. It is a theological failure that has profound consequences for character and community. When we fail to recognize gifts as gifts, we begin to treat them as entitlements or achievements. What was entitlement becomes something we can dispose of at will &mdash; making the Nazirites drink wine, commanding the prophets to stop. The gift of grace, received without gratitude, turns into a resource we manage for our own purposes. The application to the Christian life is immediate. The list of God&rsquo;s gifts to us in Christ is even more extensive than Israel&rsquo;s in Amos &mdash; the incarnation, the cross, the resurrection, the Spirit, the Scriptures, the church, the promise of new creation. Thanksgiving is not a spiritual nicety; it is the cognitive and emotional practice of keeping our relationship with God properly calibrated. When we forget that we are receivers of grace rather than managers of our own spiritual capital, we begin to do what Israel did: silence the voices that challenge us, corrupt the consecrated things, and use divine gifts for self-indulgent purposes. Gratitude guards against precisely this trajectory.",
    },
  ];

  const reflectionQuestions = [
    "The crowd cheered as Amos condemned foreign nations &mdash; have you ever found it easier to see sin in others than in yourself or your community? What makes this pattern dangerous?",
    "Amos names specific economic sins &mdash; debt slavery, corrupted courts, seized garments. Where in your own economic life might God be naming specific practices that harm the vulnerable?",
    "Israel made the Nazirites drink wine and silenced the prophets (2:12). What voices or practices in your life might you be suppressing because they challenge your comfort?",
    "The catalogue of God&rsquo;s gifts in 2:9&ndash;12 is meant to intensify the charge. Reflecting on God&rsquo;s gifts to you, how does gratitude shape (or fail to shape) your response to those in need?",
    "The judgment in 2:13&ndash;16 is described as inescapable. How does awareness of divine accountability change the way you make decisions, especially ones no one else will see?",
  ];

  const videos = [
    { videoId: "tszFhiOPgPk", title: "Amos 2: The Rhetorical Trap", desc: "An in-depth examination of how Amos constructs his sequence of oracles to spring the devastating surprise on Israel in chapter 2, and the theological significance of covenant accountability." },
    { videoId: "WZ0bB-GXFQU", title: "Justice in the Prophets: Amos and the Poor", desc: "The specific economic sins of Amos 2:6&ndash;8 examined against the background of Mosaic law, showing how each violation was a concrete covenant breach and what it means for reading social ethics today." },
    { videoId: "6LmRNVxAjMA", title: "The Ingratitude of Israel: Amos 2:9&ndash;12", desc: "An exploration of God&rsquo;s historical gifts recounted in Amos 2 and what it means theologically when grace is not only neglected but actively suppressed through silencing the prophets and corrupting the consecrated." },
    { videoId: "XpNxCPHrRIY", title: "Inescapable Judgment: Amos 2:13&ndash;16", desc: "The closing section of the oracle and its message about the total failure of human resources when divine judgment falls &mdash; and what this means for repentance, courage, and trusting God&rsquo;s justice." },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg, #1a0a1e 0%, #0e1a12 60%, #07070F 100%)`, border: `1px solid ${BORDER}`, borderRadius: 18, padding: "36px 32px", marginBottom: 36 }}>
          <div style={{ display: "inline-block", background: `${ROSE}20`, border: `1px solid ${ROSE}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: ROSE, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: 1, marginBottom: 14 }}>
            Prophecy &middot; OT &middot; Amos
          </div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px", lineHeight: 1.2 }}>Amos 2 Study Guide</h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: "0 0 22px", maxWidth: 620 }}>
            The climactic oracle in Amos&rsquo;s opening sequence &mdash; Moab and Judah condemned, then the devastating indictment of Israel herself. The crowd that cheered the judgment of the nations finds itself suddenly in the dock.
          </p>
          <div style={{ background: `${ROSE}10`, border: `1px solid ${ROSE}30`, borderRadius: 12, padding: "16px 20px" }}>
            <p style={{ color: ROSE, fontSize: 15, fontWeight: 700, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 6px" }}>
              &ldquo;For three transgressions of Israel, and for four, I will not revoke the punishment, because they sell the righteous for silver, and the needy for a poor pair of sandals.&rdquo;
            </p>
            <p style={{ color: MUTED, fontSize: 13, margin: 0, fontWeight: 600 }}>Amos 2:6</p>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const, marginBottom: 32 }}>
          {TABS.map(t => (
            <button
              type="button"
              key={t.id}
              onClick={() => { setTab(t.id); setOpen(null); setOpenTheme(null); setOpenVerse(null); }}
              style={{
                padding: "9px 18px",
                borderRadius: 22,
                border: `1px solid ${tab === t.id ? ROSE : BORDER}`,
                background: tab === t.id ? `${ROSE}18` : "transparent",
                color: tab === t.id ? ROSE : MUTED,
                fontWeight: tab === t.id ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {tab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 20, margin: "0 0 14px" }}>Chapter Summary</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 14px" }}>
                Amos 2 continues and climaxes the sequence of oracle pronouncements that opened the book in chapter 1. After condemning Damascus (1:3&ndash;5), Gaza (1:6&ndash;8), Tyre (1:9&ndash;10), Edom (1:11&ndash;12), and Ammon (1:13&ndash;15) for atrocities against humanity, the chapter opens with the sixth oracle against Moab (2:1&ndash;3), a seventh against Judah (2:4&ndash;5), and then delivers the climactic and longest oracle of the entire sequence against Israel itself (2:6&ndash;16). This is the structural center of the book&rsquo;s opening movement and the moment toward which all the preceding oracles have been building.
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 14px" }}>
                The genius of the rhetorical strategy is that the listening audience in the Northern Kingdom would have found the first six oracles entirely satisfying. Damascus, Gaza, Tyre, Edom, Ammon, Moab &mdash; enemy nations and rival powers condemned for crimes that the crowd could recognize as genuinely heinous: iron-sledge torture, mass deportation into slavery, broken covenants of brotherhood, the desecration of the dead. But Amos has been setting a trap with each applauded condemnation, drawing his listeners into the role of moral judges who have established by their own agreement that such behaviors deserve divine punishment. Then the trap springs on Judah, then on Israel. The crowd that has been cheering suddenly finds itself standing in the same position as the nations they condemned.
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                The indictment of Israel is qualitatively different from the surrounding nations. Where the nations were condemned for dramatic military and diplomatic atrocities, Israel is condemned for domestic, structural, institutionalized violations of the Mosaic covenant &mdash; the routine exploitation of the poor through the legal system, the seizure of pledged garments, the sexual exploitation of debt-slaves, the corruption of religious festivals with the proceeds of injustice. These are not crimes anyone would notice or care about. They are the background noise of a prosperous, stable, religiously active society. That is precisely what makes them so devastating.
              </p>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 20, margin: "0 0 14px" }}>Historical and Canonical Context</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 14px" }}>
                Amos prophesied during the reign of Jeroboam II in the Northern Kingdom (c. 786&ndash;746 BC), one of the longest and most economically prosperous reigns in Israel&rsquo;s history. The kingdom was politically stable, militarily capable, and commercially thriving. Archaeological evidence from Samaria confirms the luxury goods and architectural grandeur that appear in Amos&rsquo;s oracles: ivory inlays, summer and winter houses, the elaborate feasting culture of the powerful. It was precisely this prosperity that masked and enabled the structural injustice Amos condemns.
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 14px" }}>
                The oracle sequence of Amos 1&ndash;2 follows a literary pattern that scholars have identified as the ancient Near Eastern treaty curse &mdash; the enumeration of violations that break covenant obligations. What is remarkable in Amos is that this framework is applied not only to Israel&rsquo;s covenant with God but to a kind of universal moral order that holds even the surrounding nations accountable to standards they never formally accepted. God&rsquo;s moral government extends beyond the boundaries of the Sinai covenant.
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                The canonical connection between Amos 2 and Romans 2 is particularly striking. Paul uses exactly the same rhetorical structure in the opening chapters of Romans: after establishing in chapter 1 that the Gentile world stands under divine judgment for suppressing the truth in unrighteousness (the parallel to the foreign nations in Amos), he turns in 2:1 to the person who judges &mdash; &ldquo;therefore you have no excuse, O man, every one of you who judges&rdquo; &mdash; and springs his own rhetorical trap on those who imagine their moral or religious superiority exempts them from the judgment they gladly apply to others.
              </p>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 20, margin: "0 0 16px" }}>Structure of Amos 2</h2>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
                {[
                  { ref: "2:1-3", label: "Oracle Against Moab", color: TEAL, note: "Burning the bones of the Edomite king to lime; judgment by fire and death in battle" },
                  { ref: "2:4-5", label: "Oracle Against Judah", color: GOLD, note: "Rejection of the law of the LORD, following their fathers into lies; fire on Jerusalem" },
                  { ref: "2:6-8", label: "Israel's Social Sins", color: ROSE, note: "Debt slavery, selling the poor for sandals, seized garments, sexual exploitation, wine from fines" },
                  { ref: "2:9-12", label: "God's Gifts Rejected", color: GREEN, note: "Amorites destroyed, Egypt Exodus, wilderness provision, prophets and Nazirites given  -  then suppressed" },
                  { ref: "2:13-16", label: "Inescapable Judgment", color: PURPLE, note: "No human capacity  -  speed, strength, weapons, cavalry  -  will avail against divine judgment; flight in shame" },
                ].map(s => (
                  <div key={s.ref} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <span style={{ background: `${s.color}20`, border: `1px solid ${s.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: s.color, fontWeight: 700, whiteSpace: "nowrap" as const, flexShrink: 0 }}>{s.ref}</span>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{s.label}</div>
                      <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{s.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Verse Callout */}
            <div style={{ background: `linear-gradient(135deg, ${ROSE}18 0%, ${PURPLE}10 100%)`, border: `1px solid ${ROSE}35`, borderRadius: 14, padding: "24px 28px" }}>
              <div style={{ color: ROSE, fontSize: 11, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: 1.5, marginBottom: 12 }}>Key Verse &mdash; Amos 2:6</div>
              <p style={{ color: TEXT, fontSize: 17, fontWeight: 700, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 12px" }}>
                &ldquo;For three transgressions of Israel, and for four, I will not revoke the punishment, because they sell the righteous for silver, and the needy for a pair of sandals.&rdquo;
              </p>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                The key verse crystallizes the entire oracle&rsquo;s logic. The &ldquo;three transgressions and four&rdquo; formula signals not a mathematical count but the full and overflowing measure of divine patience. The specific sins &mdash; selling the righteous and the needy &mdash; represent the corruption of Israel&rsquo;s legal and economic systems into instruments of exploitation. &ldquo;The righteous&rdquo; are those who are legally in the right but economically too weak to sustain their claim; &ldquo;the needy&rdquo; are those whose poverty makes them available for disposal. The pair of sandals detail is deliberately shocking: a human being&rsquo;s freedom and dignity traded for the most trivial of transactions.
              </p>
            </div>
          </div>
        )}

        {/* Themes Tab */}
        {tab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 20, margin: "0 0 8px" }}>Key Theological Themes in Amos 2</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Four major theological currents run through this chapter, each with deep roots in the broader canon and significant implications for Christian reading and application.</p>
            </div>
            {themeItems.map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => setOpenTheme(openTheme === item.id ? null : item.id)}
                  style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" as const }}
                >
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0, display: "inline-block" }} />
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15, flex: 1 }}>{item.title}</span>
                  <span style={{ color: item.color, fontWeight: 700, fontSize: 18, flexShrink: 0 }}>{openTheme === item.id ? "-" : "+"}</span>
                </button>
                {openTheme === item.id && (
                  <div style={{ padding: "0 20px 20px 42px" }}>
                    <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.85 }} dangerouslySetInnerHTML={{ __html: item.html }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Verse Tab */}
        {tab === "verse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 20, margin: "0 0 8px" }}>Verse by Verse Through Amos 2</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>A detailed theological commentary on each section of the chapter, moving through the oracle sequence from Moab to the inescapable judgment on Israel.</p>
            </div>
            {verseItems.map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => setOpenVerse(openVerse === item.id ? null : item.id)}
                  style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" as const }}
                >
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0, display: "inline-block" }} />
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15, flex: 1 }}>{item.title}</span>
                  <span style={{ color: item.color, fontWeight: 700, fontSize: 18, flexShrink: 0 }}>{openVerse === item.id ? "-" : "+"}</span>
                </button>
                {openVerse === item.id && (
                  <div style={{ padding: "0 20px 20px 42px" }}>
                    <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.85 }} dangerouslySetInnerHTML={{ __html: item.html }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Application Tab */}
        {tab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 20, margin: "0 0 8px" }}>Application</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>What Amos 2 means for the way we live, think, speak, and respond to God&rsquo;s word today. Four application themes and five reflection questions for personal or group study.</p>
            </div>

            {appSections.map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => setOpen(open === item.id ? null : item.id)}
                  style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" as const }}
                >
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0, display: "inline-block" }} />
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15, flex: 1 }}>{item.title}</span>
                  <span style={{ color: item.color, fontWeight: 700, fontSize: 18, flexShrink: 0 }}>{open === item.id ? "-" : "+"}</span>
                </button>
                {open === item.id && (
                  <div style={{ padding: "0 20px 20px 42px" }}>
                    <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.85 }} dangerouslySetInnerHTML={{ __html: item.html }} />
                  </div>
                )}
              </div>
            ))}

            {/* Reflection Questions */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 24 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 18px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
                {reflectionQuestions.map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ background: `${TEAL}20`, border: `1px solid ${TEAL}40`, color: TEAL, fontWeight: 800, fontSize: 13, borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{i + 1}</span>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Prayer */}
            <div style={{ background: `linear-gradient(135deg, ${PURPLE}18 0%, ${TEAL}10 100%)`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: "24px 28px", marginTop: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 16, margin: "0 0 14px", textTransform: "uppercase" as const, letterSpacing: 1 }}>Closing Prayer</h3>
              <div style={{ color: TEXT, fontSize: 15, lineHeight: 1.9, fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "Lord God, you are the God who holds every nation accountable to your moral order, who holds every people who bears your name to an even stricter account. We confess that we, like Israel, have been quick to see the sins of others and slow to recognize our own. We have benefited from systems that sell the needy for sandals and have called it economics. We have silenced prophetic voices that made us uncomfortable and called it discernment. We have received your gifts &mdash; your word, your Spirit, your Son &mdash; with the casual ingratitude of those who have forgotten what it means to be rescued. Forgive us. Open our ears to hear the word we have commanded to be silent. Open our hands to release what we have taken from those who could not resist. Open our eyes to see the specific practices in our own lives that grind the poor into the dust. And grant us the grace to receive your judgment not as condemnation but as the word of a God who still speaks, because the God who speaks can also restore. We pray this in the name of the one who bore our transgressions &mdash; even the ones we have normalized, institutionalized, and called respectable. Amen." }} />
            </div>
          </div>
        )}

        {/* Videos Section */}
        <div style={{ marginTop: 48, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px" }}>
          <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 20, margin: "0 0 6px" }}>Teaching Videos</h2>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, margin: "0 0 24px" }}>Sermons, lectures, and overviews on Amos 2 and the themes of prophetic justice, covenant accountability, and divine judgment.</p>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 24 }}>
            {videos.map(v => (
              <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 18px" }}>
                  <h4 style={{ color: TEXT, fontWeight: 700, fontSize: 15, margin: "0 0 6px" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.desc }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
