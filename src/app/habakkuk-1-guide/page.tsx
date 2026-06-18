"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Habakkuk1Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openApp, setOpenApp] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "themes", label: "Key Themes" },
    { id: "verse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  const themeItems = [
    {
      id: "lament",
      color: GOLD,
      title: "The Courage to Complain: Theodicy and Honest Prayer",
      html: `<p style="margin:0 0 0.9rem 0;">Habakkuk does not suppress his questions before God &mdash; he voices them boldly: &ldquo;O LORD, how long shall I cry for help, and you will not hear?&rdquo; (1:2). This is the theodicy question in its most elemental form: why does a good and powerful God permit evil? Habakkuk does not soften the question. He does not preface it with lengthy praise or apologetic qualifications. He comes straight to God with the wound.</p>
<p style="margin:0 0 0.9rem 0;">The biblical tradition of lament establishes this as a legitimate and even exemplary form of faith, not a failure of it. Psalm 22 opens with &ldquo;My God, my God, why have you forsaken me?&rdquo; Psalm 44 accuses God of sleeping and forgetting. Psalm 88 ends without any resolution &mdash; the final word is &ldquo;darkness.&rdquo; Jeremiah in chapter 20 curses the day of his birth. Job spends thirty chapters making the case that God has treated him unjustly. None of these figures are condemned for their laments. They are held up as models of engagement with God under suffering.</p>
<p style="margin:0 0 0.9rem 0;">The New Testament carries this tradition forward at its highest point: Jesus&#39;s cry of dereliction from the cross &mdash; &ldquo;My God, my God, why have you forsaken me?&rdquo; (Matthew 27:46) &mdash; is itself a direct quotation of Psalm 22:1. The eternal Son of God, fully divine, brings his anguish to the Father in the form of a lament. If that is what the Son does at the moment of ultimate suffering, the church has no grounds for treating lament as less than fully faithful prayer.</p>
<p style="margin:0 0 0.9rem 0;">The difference between a lament that sustains faith and a complaint that abandons it lies in its address: lament is directed <em>to</em> God, expects an answer from God, and continues in relationship with God even through confusion. It is a form of trust &mdash; you only bring a complaint to someone you believe can do something about the situation. Habakkuk&#39;s very boldness is evidence of his faith in God&#39;s power and responsiveness.</p>
<p style="margin:0 0 0;">The practical application for the contemporary church is urgent: evangelical piety has often trained Christians to skip the psalms of lament, to move immediately from pain to praise, and to treat honest doubt or anger at God as spiritual failure. Habakkuk corrects this directly. The raw material of faith is not pretended certainty &mdash; it is honest engagement with God in the midst of what we cannot understand. The courage to bring our real questions to God is itself a form of trust.</p>`,
    },
    {
      id: "babylon",
      color: ROSE,
      title: "God&#39;s Shocking Answer: Babylon as God&#39;s Instrument",
      html: `<p style="margin:0 0 0.9rem 0;">God&#39;s response to Habakkuk&#39;s complaint about internal injustice in Judah is astonishing: he is raising up the Chaldeans (Babylonians) to deal with it (1:6). This answer is theologically shocking on two distinct levels. First, it means God&#39;s answer to injustice is more violent than the injustice itself &mdash; Babylon does not reform corrupt Judah, it destroys it. Second, it means God uses a pagan empire that does not know or acknowledge him as his agent in history.</p>
<p style="margin:0 0 0.9rem 0;">This is not a novel theological move in Scripture, but it is always arresting when it appears. Isaiah 10:5 describes Assyria as &ldquo;the rod of my anger, the staff in their hands is my fury.&rdquo; Isaiah 45:1 calls Cyrus of Persia &mdash; a pagan king who explicitly does not know the God of Israel &mdash; God&#39;s &ldquo;anointed&rdquo; (the Hebrew is <em>mashiach</em>). Jeremiah 25 refers to Nebuchadnezzar as &ldquo;my servant.&rdquo; In each case, God is making the same claim Habakkuk 1 makes: the direction of history is in his hands, and the instruments he uses are not limited to the theologically pure or the nationally aligned with Israel.</p>
<p style="margin:0 0 0.9rem 0;">The New Testament carries forward this logic most prominently in Romans 13:1-4, where Paul argues that governing authorities &mdash; even Rome, even Nero &mdash; are &ldquo;God&#39;s servant for your good&rdquo; and &ldquo;an avenger who carries out God&#39;s wrath on the wrongdoer.&rdquo; The same theological claim Habakkuk finds shocking is applied by Paul to the Roman imperial system that will eventually execute him.</p>
<p style="margin:0 0 0.9rem 0;">What makes this theologically coherent rather than morally chaotic is the distinction between an instrument&#39;s function and an instrument&#39;s moral accountability. God uses Babylon as a pruning instrument on Judah; he will subsequently hold Babylon accountable for its arrogance and cruelty (chapters 2-3; see also Jeremiah 50-51). The use of the instrument does not excuse the instrument &mdash; it is simply evidence that God&#39;s sovereignty extends over those who do not acknowledge it.</p>
<p style="margin:0 0 0;">For the reader of Scripture in any age, this raises a profound and uncomfortable question: where might God be using instruments we find unacceptable to accomplish purposes we cannot yet see? The answer is not that we must approve of every difficulty that comes our way as God&#39;s will in a simplistic sense &mdash; Habakkuk himself does not do this; he protests vigorously. But the reader is invited to hold open the possibility that God is at work in what seems merely catastrophic.</p>`,
    },
    {
      id: "wicked",
      color: PURPLE,
      title: "The Theological Problem: Punishing the Less Wicked with the More Wicked",
      html: `<p style="margin:0 0 0.9rem 0;">Habakkuk&#39;s second complaint (1:12-17) is more theologically sophisticated than his first. He does not simply repeat his earlier lament about unanswered prayer. He engages directly with God&#39;s answer and raises a deeper problem: &ldquo;You who are of purer eyes than to see evil and cannot look at wrong, why do you idly look at traitors and remain silent when the wicked swallows up the man more righteous than he?&rdquo; (1:13).</p>
<p style="margin:0 0 0.9rem 0;">This is the problem of comparative wickedness in divine judgment &mdash; sometimes called the problem of the instrument. The prophet acknowledges that Judah is not innocent; she has the injustice Habakkuk himself complained about. But Babylon is worse. Much worse. And God&#39;s holiness &mdash; which Habakkuk appeals to directly: &ldquo;You who are of purer eyes than to see evil&rdquo; &mdash; seems to be compromised by his willingness to employ the more wicked to punish the less wicked.</p>
<p style="margin:0 0 0.9rem 0;">Habakkuk&#39;s metaphor for Babylon is particularly striking: he compares the empire to a fisherman who sweeps up all the nations in a dragnet and hauls them in (1:14-15). He then adds the most damning detail: Babylon &ldquo;makes a sacrifice to his dragnet and burns offerings to his fishing net, for by them his portion is rich and his food plentiful&rdquo; (1:16). The empire worships its own military apparatus. It takes credit for what God is doing and directs its gratitude and reverence toward its own power. This self-deifying posture is part of what makes Babylon so problematic as God&#39;s instrument.</p>
<p style="margin:0 0 0.9rem 0;">The theodicy deepens rather than resolves at chapter&#39;s end. Habakkuk&#39;s final question &mdash; &ldquo;Is he then to keep on emptying his net and mercilessly killing nations forever?&rdquo; (1:17) &mdash; receives no immediate answer. The chapter closes on the open wound of the question. Chapter 2 begins with Habakkuk going to his watchpost to wait for God&#39;s answer, and God does eventually respond with the five woes against Babylon (2:6-20) and the declaration that the earth will be filled with the knowledge of God&#39;s glory as the waters cover the sea (2:14).</p>
<p style="margin:0 0 0;">But that answer is chapters away. For now, Habakkuk lives in the unresolved tension &mdash; and that is itself a theological datum. The biblical text does not paper over the difficulty of the problem. It honors it by letting Habakkuk&#39;s question stand, unanswered, at the end of the chapter. This is part of what makes Habakkuk one of Scripture&#39;s most honest and pastorally useful books.</p>`,
    },
    {
      id: "sovereignty",
      color: TEAL,
      title: "God&#39;s Sovereignty Over All Nations",
      html: `<p style="margin:0 0 0.9rem 0;">Habakkuk 1:5-11 is a sweeping description of Babylonian military power framed entirely as divine action. God does not say, &ldquo;Babylon is rising and I will permit it.&rdquo; He says, &ldquo;I am raising up the Chaldeans&rdquo; (1:6). The first person singular divine assertion claims full ownership of what is coming. The entire military career of the Babylonian empire is, according to this text, something God is doing.</p>
<p style="margin:0 0 0.9rem 0;">The description that follows is vivid and terrifying: the Chaldeans are &ldquo;bitter and hasty&rdquo; (1:6); their horses are &ldquo;swifter than leopards, more fierce than the evening wolves&rdquo; (1:8); they fly &ldquo;like an eagle swift to devour&rdquo; (1:8); they &ldquo;gather captives like sand&rdquo; (1:9); they &ldquo;scoff at kings, and rulers are a laughing stock to them&rdquo; (1:10). This is the portrait of a military superpower of the ancient world &mdash; terrifyingly competent, morally empty, unstoppable by conventional means.</p>
<p style="margin:0 0 0.9rem 0;">The canonical context for this claim to divine sovereignty over pagan nations is extensive. Psalm 2 declares that the nations rage against God and his anointed, but God holds them in derision &mdash; all of history is under his governance even when the nations do not acknowledge it. Daniel explores this theme across four successive empires: God gives kingdoms and removes them according to his purposes (Daniel 2:21; 4:17, 25, 32). Revelation 17-18 picks up the Babylon typology and applies it to Rome and ultimately to any empire that makes itself God&#39;s rival &mdash; and declares that even those empires serve, in the end, God&#39;s purposes before being brought to their own ruin.</p>
<p style="margin:0 0 0.9rem 0;">The pastoral comfort this offers is not the comfort of safety &mdash; Habakkuk&#39;s first readers will live through the Babylonian invasion and it will be catastrophic. The comfort is that history is not random. It is not governed by blind forces or by the will of the most powerful human actors. It is under the governance of a holy God who will ultimately settle accounts. The terrifying thing happening is not outside his knowledge or his will. He is &ldquo;doing a work&rdquo; (1:5).</p>
<p style="margin:0 0 0;">This conviction &mdash; that God is sovereign over nations, over empires, over catastrophic historical events &mdash; is what enables Habakkuk to keep bringing his questions to God rather than concluding that God is absent. His lament is not the lament of an atheist discovering that the universe is empty. It is the lament of a believer who knows God is there and cannot reconcile what God is doing with what God is like. That is a harder and more interesting problem than simple disbelief, and Habakkuk models how to hold it.</p>`,
    },
  ];

  const verseItems = [
    {
      id: "v1",
      color: GOLD,
      title: "Habakkuk 1:1-4 &mdash; The First Complaint: Violence and Injustice",
      html: `<p style="margin:0 0 0.9rem 0;">The book opens with a superscription: &ldquo;The oracle that Habakkuk the prophet saw&rdquo; (1:1). The word translated &ldquo;oracle&rdquo; is the Hebrew <em>massa</em>, which can mean both a burden and a prophetic oracle &mdash; a double meaning that suits this book perfectly. What Habakkuk sees is a burden, and he carries it to God in the form of a complaint.</p>
<p style="margin:0 0 0.9rem 0;">The complaint opens with the theodicy question in its most direct form: &ldquo;O LORD, how long shall I cry for help, and you will not hear? Or cry to you &#39;Violence!&#39; and you will not save?&rdquo; (1:2). Two things are significant here. First, Habakkuk has been praying &mdash; he is not a person who has given up on prayer; he has been crying for help. Second, God has not answered &mdash; or has not answered in a way Habakkuk can perceive. The unanswered prayer intensifies the theological question rather than resolving it.</p>
<p style="margin:0 0 0.9rem 0;">The indictment of conditions in Judah is specific and carefully worded: &ldquo;Why do you make me see iniquity, and why do you idly look at wrong? Destruction and violence are before me; strife and contention arise. So the law is paralyzed, and justice never goes forth. For the wicked surround the righteous; so justice goes forth perverted&rdquo; (1:3-4). The Hebrew word translated &ldquo;paralyzed&rdquo; (<em>taphug</em>) is particularly striking &mdash; it suggests something benumbed, inert, rendered unable to function. Judah is not a lawless society in the sense of having no law; she has the Torah. But the law has been made functionally inoperative. The institutions that exist to deliver justice are producing its opposite.</p>
<p style="margin:0 0 0.9rem 0;">This is the condition Habakkuk is bringing to God: not abstract theological uncertainty but the lived experience of watching injustice prevail, of praying for change and finding no answer, of belonging to a community where the structures meant to protect the righteous are weaponized against them. His question is not philosophical but pastoral and political.</p>
<p style="margin:0 0 0;">The lament is a form of trust. Habakkuk does not curse God and walk away. He does not conclude that God is absent or powerless. He complains to God &mdash; which means he still believes that God hears, that God can act, that God cares about justice. The very bitterness of his complaint is evidence of his faith. The alternative to lament is not stoic acceptance; it is either despair or the abandonment of God altogether. Habakkuk chooses neither.</p>`,
    },
    {
      id: "v2",
      color: ROSE,
      title: "Habakkuk 1:5-11 &mdash; God&#39;s Shocking Response: The Chaldeans Are Coming",
      html: `<p style="margin:0 0 0.9rem 0;">God&#39;s response to Habakkuk&#39;s complaint begins with a command: &ldquo;Look among the nations, and see; wonder and be astounded. For I am doing a work in your days that you would not believe if told&rdquo; (1:5). This is the key verse of the chapter. God is doing something &mdash; actively, presently, purposefully. And the thing he is doing is so surprising that it strains credulity: &ldquo;you would not believe if told.&rdquo; Paul quotes this verse in Acts 13:41 to warn those in the synagogue at Antioch who are rejecting the gospel &mdash; God is doing an unbelievable work in Jesus, and those who scoff will perish.</p>
<p style="margin:0 0 0.9rem 0;">The unbelievable work God is doing is this: &ldquo;For behold, I am raising up the Chaldeans, that bitter and hasty nation, who march through the breadth of the earth, to seize dwellings not their own&rdquo; (1:6). The Chaldeans are the Babylonians &mdash; the dominant military power of the late seventh century BC under Nebuchadnezzar. God is not merely permitting Babylon to rise; he is raising them up. The divine first person is emphatic.</p>
<p style="margin:0 0 0.9rem 0;">The description of Babylon that follows is one of the most vivid in prophetic literature: &ldquo;They are dreaded and fearsome; their justice and dignity go forth from themselves&rdquo; (1:7). They are a law unto themselves, acknowledging no authority above their own. &ldquo;Their horses are swifter than leopards, more fierce than the evening wolves; their horsemen press proudly on. Their horsemen come from afar; they fly like an eagle swift to devour&rdquo; (1:8). The military machine is described in terms of natural predators &mdash; the leopard&#39;s speed, the wolf&#39;s ferocity, the eagle&#39;s swiftness. &ldquo;They all come for violence, all their faces forward. They gather captives like sand&rdquo; (1:9).</p>
<p style="margin:0 0 0.9rem 0;">The contempt Babylon has for conventional defenses is absolute: &ldquo;At kings they scoff, and at rulers they laugh. They laugh at every fortress, for they pile up earth and take it&rdquo; (1:10). No human defense is adequate. The Babylonian siege ramp, with which they took city after city, is the historical reality behind the image of piling up earth to take a fortress.</p>
<p style="margin:0 0 0;">The description closes with the theological crux: &ldquo;Then they sweep by like the wind and go on, guilty men, whose own might is their god!&rdquo; (1:11). Babylon&#39;s fatal flaw is already named in God&#39;s own description of them: they credit themselves, not God, for their power. This sets up Habakkuk&#39;s second complaint and ultimately God&#39;s judgment on Babylon in chapters 2-3. The instrument that does not acknowledge the hand that wields it will eventually itself be broken.</p>`,
    },
    {
      id: "v3",
      color: PURPLE,
      title: "Habakkuk 1:12-17 &mdash; The Second Complaint: How Can a Holy God Use Babylon?",
      html: `<p style="margin:0 0 0.9rem 0;">Habakkuk&#39;s response to God&#39;s astonishing answer is not relief but a deeper theological problem. He begins, significantly, with a confession of God&#39;s eternity and holiness: &ldquo;Are you not from everlasting, O LORD my God, my Holy One? We shall not die. O LORD, you have ordained them as a judgment, and you, O Rock, have established them for reproof&rdquo; (1:12). He anchors his second complaint in what he knows to be true about God: God is eternal, holy, and the ultimate source of all judgment. He even draws a provisional comfort from this &mdash; &ldquo;We shall not die&rdquo; &mdash; perhaps reading in God&#39;s use of Babylon a limitation on the destruction that will come.</p>
<p style="margin:0 0 0.9rem 0;">But the confession of God&#39;s holiness immediately becomes the very ground of the problem: &ldquo;You who are of purer eyes than to see evil and cannot look at wrong, why do you idly look at traitors and remain silent when the wicked swallows up the man more righteous than he?&rdquo; (1:13). The argument is sharp and logically precise: God cannot look at evil (holiness), yet God is watching while Babylon, which is more evil than Judah, devours Judah. The holiness that should prevent God from countenancing evil seems to be precisely what is being violated by his own providential plan.</p>
<p style="margin:0 0 0.9rem 0;">The fisherman metaphor that follows is devastating in its implications: &ldquo;You make mankind like the fish of the sea, like crawling things that have no ruler. He brings all of them up with a hook; he drags them out with his net; he gathers them in his dragnet; so he rejoices and is glad&rdquo; (1:14-15). Humanity &mdash; nations, peoples, individuals &mdash; is like fish in the sea, having no protection from the empire&#39;s dragnet. And then the idolatry: &ldquo;Therefore he sacrifices to his net and makes offerings to his dragnet; for by them his portion is rich and his food plentiful&rdquo; (1:16). Babylon worships its own military apparatus. The empire has made an idol of its power.</p>
<p style="margin:0 0 0.9rem 0;">The chapter closes with the most anguished question Habakkuk can formulate: &ldquo;Is he then to keep on emptying his net and mercilessly killing nations forever?&rdquo; (1:17). Will this go on without end? Will God permit the self-deifying empire to consume nation after nation indefinitely, taking credit for what only God can do?</p>
<p style="margin:0 0 0;">The chapter ends here, without answer. Habakkuk goes to his watchpost (2:1). He is still in relationship with God &mdash; he is waiting for God&#39;s answer, not walking away. But the wound is open. This is the posture of faith under unresolved suffering: not resolution, not pretended certainty, but continued engagement with God in the stance of watching and waiting for his word.</p>`,
    },
  ];

  const appItems = [
    {
      id: "a1",
      color: GOLD,
      title: "Learning to Lament Well",
      html: `<p style="margin:0 0 0.9rem 0;">Habakkuk models a kind of prayer that is honest about suffering without abandoning faith. The modern evangelical tendency is to skip past lament to praise, to treat doubt as sin rather than as the raw material of faith, to assume that the spiritually mature person does not bring God hard questions. Habakkuk overturns this assumption at the first verse.</p>
<p style="margin:0 0 0.9rem 0;">The key distinction is between a lament and a complaint that abandons faith. Lament is addressed <em>to</em> God &mdash; Habakkuk does not complain about God to other people or simply cease to pray. He brings his confusion directly to the source. Lament expects an answer &mdash; Habakkuk is clearly anticipating that God will respond, and he goes to his watchtower to wait for it (2:1). And lament continues in relationship even through confusion &mdash; Habakkuk&#39;s second complaint begins with an extended confession of God&#39;s character (1:12).</p>
<p style="margin:0 0 0.9rem 0;">The recovery of lament as a legitimate and even exemplary form of prayer is one of the most needed corrections in contemporary Christian spirituality. The psalms of lament (approximately one third of the Psalter) have been largely edited out of Christian liturgical use. Books of prayer almost never include prayers of honest suffering and confusion. The result is a church that is poorly equipped to handle suffering &mdash; because it has been taught to perform peace rather than to bring its real wounds to the God who can handle them.</p>
<p style="margin:0 0 0;">A practical application: what questions have you been afraid to bring to God? What suffering have you been performing peace about rather than honestly engaging with? The invitation of Habakkuk 1 is to bring those things &mdash; with all the raw confusion and even anger they carry &mdash; directly to the God who is there and who, as the book of Habakkuk demonstrates, will answer.</p>`,
    },
    {
      id: "a2",
      color: TEAL,
      title: "Trusting God&#39;s Sovereignty in Bewildering Circumstances",
      html: `<p style="margin:0 0 0.9rem 0;">God&#39;s answer to Habakkuk raises more questions than it settles, but it establishes one thing clearly: God is not absent, not sleeping, not unaware. &ldquo;I am doing a work in your days&rdquo; (1:5) &mdash; the bewildering thing that is happening is not random. It is not the product of blind historical forces or the unchecked will of the most powerful human actors. God is at work, even in what seems to be God&#39;s absence.</p>
<p style="margin:0 0 0.9rem 0;">This is not a simple comfort. God&#39;s answer does not prevent the Babylonian invasion. It does not make the suffering less real. It does not explain satisfactorily why God chose this particular instrument for this particular purpose. But it does establish that the person of faith is not navigating a universe in which God has vacated the field. The universe Habakkuk inhabits is one where God is actively doing something, even if what he is doing strains credulity.</p>
<p style="margin:0 0 0.9rem 0;">The application to situations where God&#39;s providential working is not visible or comprehensible is direct: the call is not to understand, but to trust that God sees what we cannot see and is working in what we find unbelievable. Romans 8:28 &mdash; &ldquo;all things work together for good for those who love God&rdquo; &mdash; is not a promise that all things are good in themselves, or that we will understand how they work together. It is a promise about a God who is working, invisibly but purposefully, even through catastrophe.</p>
<p style="margin:0 0 0;">The posture this requires is not passive resignation but active trust &mdash; the kind of trust Habakkuk models by going to his watchtower to wait for God&#39;s word (2:1). He does not give up, does not walk away, does not conclude that God has abandoned the situation. He waits, actively and expectantly, for the word that will come. This is the disposition of faith under bewildering circumstances.</p>`,
    },
    {
      id: "a3",
      color: ROSE,
      title: "When God Uses Unexpected Instruments",
      html: `<p style="margin:0 0 0.9rem 0;">The use of Babylon as God&#39;s instrument challenges one of the most persistent assumptions of religious life: that God works primarily or exclusively through the morally pure, the theologically aligned, or the institutionally approved. Habakkuk 1 makes clear that God is not so limited. He raises up the Chaldeans &mdash; a nation that does not acknowledge him, that will worship its own military power, that will be characterized by violence and cruelty &mdash; and calls it his own work.</p>
<p style="margin:0 0 0.9rem 0;">The application to circumstances rather than nations is worth careful thought. God can work through difficult seasons, through painful relationships, through institutional failures, through personal losses to accomplish purposes that will only become visible in retrospect. This is not a comfortable claim &mdash; it does not make difficult things pleasant or prevent us from protesting them. Habakkuk protests vigorously and is not condemned for it. But it does open the possibility that the difficult thing has a purpose beyond what we can currently see.</p>
<p style="margin:0 0 0.9rem 0;">Two cautions are worth naming. The first is against too quickly labeling difficult circumstances as &ldquo;God&#39;s will&rdquo; in a way that forecloses protest, removes accountability, or prevents appropriate action to change unjust situations. Habakkuk protests. The prophets protest. Jesus protests (John 11:35 &mdash; his weeping at Lazarus&#39;s tomb is not calm acceptance but genuine grief). Protest and trust in God&#39;s sovereignty are not mutually exclusive. The second caution is against assuming that God cannot work through difficult instruments at all &mdash; the instinct to wait only for the clean and comfortable instrument before attributing something to God&#39;s purposes can produce a very impoverished reading of one&#39;s own history.</p>
<p style="margin:0 0 0;">The harder spiritual discipline is holding both: bringing honest protest to God about what is painful or unjust, while remaining open to the possibility that God is at work in it in ways not yet visible.</p>`,
    },
    {
      id: "a4",
      color: PURPLE,
      title: "Holding Onto God&#39;s Character When His Actions Are Puzzling",
      html: `<p style="margin:0 0 0.9rem 0;">Habakkuk begins his second complaint from God&#39;s character rather than from his own grievance: &ldquo;Are you not from everlasting, O LORD my God, my Holy One?&rdquo; (1:12). He does not open with the accusation &mdash; he opens with the confession. He establishes what he knows to be true about God (eternal, holy, his own God, a Rock) before he brings the question of what God seems to be doing.</p>
<p style="margin:0 0 0.9rem 0;">This is a model for faith under theological confusion that is both psychologically sound and theologically rich. When God&#39;s actions seem to contradict what we know about his character, the temptation is to revise our understanding of his character downward &mdash; to conclude that he is not as holy as we thought, or not as powerful, or not as good. Habakkuk does the opposite: he anchors his complaint in the character of God and brings the puzzlement from there. He is saying, in effect: &ldquo;I know you are holy. I know you are eternal. I know you are my God. And precisely because I know these things, I cannot understand what you seem to be doing. Help me.&rdquo;</p>
<p style="margin:0 0 0.9rem 0;">The theological implication is that the most certain things about God &mdash; his holiness, his love, his faithfulness, his eternal nature &mdash; are the anchor points from which we navigate the uncertain things. When circumstances seem to contradict the character of God, we do not abandon the character of God in favor of the circumstances. We hold the character of God as more certain than any circumstance and bring our questions from there.</p>
<p style="margin:0 0 0;">This is precisely what Jesus models in Gethsemane: &ldquo;Abba, Father, all things are possible for you. Remove this cup from me. Yet not what I will, but what you will&rdquo; (Mark 14:36). He begins from the Father&#39;s character (all things are possible, he is Abba), expresses his genuine desire (remove this cup), and anchors in the Father&#39;s will &mdash; not because he has resolved the tension but because he trusts the one who holds it. Habakkuk and Jesus model the same pattern of faith under impossible circumstances: beginning from what is most certain about God and bringing the hardest questions from there.</p>`,
    },
  ];

  const reflectionQuestions = [
    "Habakkuk prays and feels unheard &mdash; &ldquo;how long shall I cry for help, and you will not hear?&rdquo; Have you ever felt this? What did you do with that feeling, and what does Habakkuk&#39;s example suggest about what you might do with it in the future?",
    "God&#39;s answer to Habakkuk&#39;s prayer about injustice is the coming of Babylon &mdash; a more violent and terrifying thing than the injustice Habakkuk was lamenting. How do you process it when God&#39;s answer to your prayer is not what you expected or wanted, or is worse than the situation you prayed about?",
    "The key verse is 1:5: God is doing something &ldquo;you would not believe if told.&rdquo; Where in your life might God be doing something you find hard to believe or accept? What would it look like to &ldquo;look among the nations&rdquo; &mdash; to widen your perspective &mdash; and see what God might be doing?",
    "Habakkuk anchors his second complaint in God&#39;s character: &ldquo;Are you not from everlasting? My Holy One?&rdquo; (1:12). How does holding onto what you know to be true about God help you navigate what you don&#39;t understand about his actions? What specific aspects of God&#39;s character do you return to when you are confused or suffering?",
    "Babylon credited its own military power, not God, for its success &mdash; &ldquo;their own might is their god&rdquo; (1:11). Where are you tempted to credit yourself or your own resources, intelligence, or effort rather than acknowledging God as the source of what you have accomplished or received?",
    "The chapter ends without resolution &mdash; Habakkuk is still waiting, still without an answer to his deepest questions. How do you cultivate the posture of watchful waiting when God has not yet answered your most pressing questions? What practices sustain you in that waiting?",
  ];

  const videos = [
    { id: "CE8QbkUCNK4", title: "Habakkuk 1 Overview" },
    { id: "Q2oNOlXzBhY", title: "The Theodicy of Habakkuk" },
    { id: "JKPD1AXf0lg", title: "God&#39;s Sovereignty in Habakkuk" },
    { id: "tUDqmADIHes", title: "Applying Habakkuk 1" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, 'Times New Roman', serif" }}>

      {/* Hero Header */}
      <div style={{
        background: "linear-gradient(135deg, #0D0D20 0%, #1A0A2E 40%, #0A1628 100%)",
        borderBottom: `1px solid ${BORDER}`,
        padding: "3rem 1.5rem 2.5rem",
        textAlign: "center",
      }}>
        <div style={{
          display: "inline-block",
          background: GREEN,
          color: "#fff",
          fontSize: "0.7rem",
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          padding: "0.3rem 0.9rem",
          borderRadius: "999px",
          marginBottom: "1.2rem",
        }}>
          Habakkuk &bull; Chapter 1
        </div>
        <h1 style={{
          margin: "0 0 0.8rem 0",
          fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: "-0.01em",
        }}>
          Habakkuk 1 Study Guide
        </h1>
        <p style={{
          margin: "0 auto",
          maxWidth: 560,
          color: MUTED,
          fontSize: "1.05rem",
          lineHeight: 1.65,
          fontStyle: "italic",
        }}>
          The prophet&#39;s dialogue with God about injustice, suffering, and the
          bewildering use of a wicked instrument in divine providence
        </p>

        {/* Key verse callout */}
        <div style={{
          margin: "2rem auto 0",
          maxWidth: 620,
          background: "rgba(212,151,6,0.08)",
          border: `1px solid ${GOLD}44`,
          borderLeft: `4px solid ${GOLD}`,
          borderRadius: "0 8px 8px 0",
          padding: "1.2rem 1.5rem",
          textAlign: "left",
        }}>
          <div style={{ fontSize: "0.7rem", fontFamily: "'Helvetica Neue', Arial, sans-serif", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: GOLD, marginBottom: "0.5rem" }}>
            Key Verse &mdash; Habakkuk 1:5
          </div>
          <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.7, color: TEXT, fontStyle: "italic" }}>
            &ldquo;Look among the nations, and see; wonder and be astounded. For I am doing a work in your days
            that you would not believe if told.&rdquo;
          </p>
        </div>
      </div>

      {/* Tab Nav */}
      <div style={{
        display: "flex",
        borderBottom: `1px solid ${BORDER}`,
        background: CARD,
        overflowX: "auto",
        scrollbarWidth: "none",
      }}>
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              flex: "0 0 auto",
              background: "none",
              border: "none",
              borderBottom: tab === t.id ? `2px solid ${GREEN}` : "2px solid transparent",
              color: tab === t.id ? TEXT : MUTED,
              padding: "1rem 1.5rem",
              cursor: "pointer",
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: "0.85rem",
              fontWeight: tab === t.id ? 600 : 400,
              letterSpacing: "0.03em",
              whiteSpace: "nowrap",
              transition: "color 0.15s",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1.25rem 4rem" }}>

        {/* OVERVIEW TAB */}
        {tab === "overview" && (
          <div>
            {/* Chapter Summary */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ margin: "0 0 1rem 0", fontSize: "1.35rem", fontWeight: 700, color: TEXT }}>
                Chapter Summary
              </h2>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 10,
                  padding: "1.5rem",
                  lineHeight: 1.8,
                  fontSize: "0.97rem",
                  color: TEXT,
                }}
                dangerouslySetInnerHTML={{
                  __html: `<p style="margin:0 0 0.9rem 0;">Habakkuk 1 is unique in the prophetic canon &mdash; it is not a prophet announcing God&#39;s word to the people but a prophet in dialogue with God about suffering and injustice. The prophets of Israel were called to speak God&#39;s word to the nation; Habakkuk speaks his own word <em>to God</em> about the nation&#39;s condition and about God&#39;s apparent inaction. This is a remarkable inversion of the typical prophetic dynamic.</p><p style="margin:0 0 0.9rem 0;">The chapter contains two complaints from Habakkuk (1:1-4 and 1:12-17) and one divine response (1:5-11). The first complaint is about internal injustice in Judah &mdash; violence, corrupt courts, paralyzed law. God&#39;s response announces that he is raising up Babylon to deal with it &mdash; a response that seems more catastrophic than the problem. Habakkuk&#39;s second complaint engages this answer theologically and finds it morally perplexing: how can a holy God use a more wicked nation to punish a less wicked one?</p><p style="margin:0 0 0;">The chapter ends without resolution. Habakkuk goes to his watchtower to wait. This is the structure of faith under suffering: honest complaint, honest engagement with God&#39;s bewildering answers, and the ongoing posture of watching and waiting for the word that will come.</p>`,
                }}
              />
            </section>

            {/* Historical Context */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ margin: "0 0 1rem 0", fontSize: "1.35rem", fontWeight: 700, color: TEXT }}>
                Historical Context
              </h2>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 10,
                  padding: "1.5rem",
                  lineHeight: 1.8,
                  fontSize: "0.97rem",
                  color: TEXT,
                }}
                dangerouslySetInnerHTML={{
                  __html: `<p style="margin:0 0 0.9rem 0;">Habakkuk prophesied during the late seventh century BC, probably during or just before the decisive rise of Babylon under Nebuchadnezzar (around 605 BC, when Babylon defeated Egypt at the Battle of Carchemish and became the dominant power of the ancient Near East). Judah under Jehoiakim was characterized by internal corruption and injustice &mdash; precisely the conditions Habakkuk describes in 1:2-4.</p><p style="margin:0 0 0.9rem 0;">The late seventh century is one of the most dramatic hinge points in ancient Near Eastern history. Assyria, the dominant empire for over a century, had fallen to the coalition of Babylon and Media in 612 BC with the destruction of Nineveh. Egypt attempted to fill the power vacuum and was defeated by Babylon at Carchemish. Within a decade of Habakkuk&#39;s probable ministry, Nebuchadnezzar would besiege Jerusalem for the first time (605 BC), then again (597 BC, when the first deportation occurred), and finally destroy the city and temple (586 BC).</p><p style="margin:0 0 0;">Habakkuk stands at the hinge point &mdash; composing his lament just as the instrument of judgment he finds so theologically troubling is beginning its rise to dominance. The question he asks is not hypothetical; it will be answered in the lived history of his people within his own generation.</p>`,
                }}
              />
            </section>

            {/* Canonical Context */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ margin: "0 0 1rem 0", fontSize: "1.35rem", fontWeight: 700, color: TEXT }}>
                Canonical Context
              </h2>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 10,
                  padding: "1.5rem",
                  lineHeight: 1.8,
                  fontSize: "0.97rem",
                  color: TEXT,
                }}
                dangerouslySetInnerHTML={{
                  __html: `<p style="margin:0 0 0.9rem 0;">Habakkuk stands alongside the lament psalms (especially Psalms 22, 44, and 88) as one of Scripture&#39;s most extended and unguarded models of honest prayer under suffering. Where most prophetic literature flows from God to the people, Habakkuk flows from the prophet to God &mdash; and God deigns to answer.</p><p style="margin:0 0 0.9rem 0;">The book&#39;s conclusion in 3:17-19 is one of the most remarkable statements of faith in the entire canon: &ldquo;Though the fig tree should not blossom, nor fruit be on the vines, the produce of the olive fail and the fields yield no food, the flock be cut off from the fold and there be no herd in the stalls, yet I will rejoice in the LORD; I will take joy in the God of my salvation.&rdquo; This is not the joy of a man whose questions have been answered satisfactorily; it is the joy of a man who has been through the fire of honest dialogue with God and has found that God is trustworthy even when his ways are not comprehensible.</p><p style="margin:0 0 0;">Paul&#39;s quotation of Habakkuk 2:4 &mdash; &ldquo;the righteous shall live by his faith&rdquo; &mdash; in Galatians 3:11 and Romans 1:17 establishes this minor prophet as foundational to the apostle&#39;s entire theology of justification. The faith that Habakkuk models &mdash; continuing in relationship with God through bewilderment and suffering, waiting for God&#39;s word, trusting God&#39;s character when his actions are puzzling &mdash; is, Paul argues, the very definition of the saving faith by which the righteous live.</p>`,
                }}
              />
            </section>

            {/* Structure */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ margin: "0 0 1rem 0", fontSize: "1.35rem", fontWeight: 700, color: TEXT }}>
                Structure of Chapter 1
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { ref: "1:1", label: "Superscription", color: MUTED, desc: "The oracle (massa) that Habakkuk the prophet saw &mdash; identifying the book as both a burden and a prophetic vision" },
                  { ref: "1:2-4", label: "First Complaint", color: GOLD, desc: "Habakkuk&#39;s lament about unanswered prayer and internal injustice in Judah &mdash; violence, corrupt courts, paralyzed law" },
                  { ref: "1:5-11", label: "God&#39;s Response", color: ROSE, desc: "God&#39;s shocking answer: he is raising up the Chaldeans (Babylon) &mdash; an unbelievable work that will answer the injustice with devastating judgment" },
                  { ref: "1:12-17", label: "Second Complaint", color: PURPLE, desc: "Habakkuk&#39;s deeper theological problem: how can a holy God use a more wicked nation (Babylon) to punish a less wicked one (Judah)?" },
                ].map((row) => (
                  <div key={row.ref} style={{ display: "flex", gap: "1rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem 1.25rem", alignItems: "flex-start" }}>
                    <div style={{ flex: "0 0 70px", fontFamily: "'Helvetica Neue', Arial, sans-serif", fontWeight: 700, fontSize: "0.8rem", color: row.color, paddingTop: "0.1rem" }}>{row.ref}</div>
                    <div>
                      <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontWeight: 600, fontSize: "0.88rem", color: TEXT, marginBottom: "0.3rem" }}>{row.label}</div>
                      <div style={{ fontSize: "0.88rem", color: MUTED, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: row.desc }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* THEMES TAB */}
        {tab === "themes" && (
          <div>
            <p style={{ margin: "0 0 1.75rem 0", color: MUTED, fontSize: "0.95rem", lineHeight: 1.7, fontStyle: "italic" }}>
              Four major theological themes run through Habakkuk 1. Each accordion item below offers an extended
              treatment of the theme and its canonical and practical connections.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {themeItems.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpenTheme(openTheme === item.id ? null : item.id)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      padding: "1.1rem 1.25rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.85rem",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0, display: "inline-block" }} />
                    <span style={{ flex: 1, color: TEXT, fontSize: "0.97rem", fontFamily: "Georgia, serif", fontWeight: 600, lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    <span style={{ color: MUTED, fontFamily: "monospace", fontSize: "1.1rem", flexShrink: 0 }}>
                      {openTheme === item.id ? "-" : "+"}
                    </span>
                  </button>
                  {openTheme === item.id && (
                    <div
                      style={{ padding: "0 1.5rem 1.5rem 2.9rem", fontSize: "0.93rem", lineHeight: 1.8, color: TEXT, borderTop: `1px solid ${BORDER}`, paddingTop: "1.1rem" }}
                      dangerouslySetInnerHTML={{ __html: item.html }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VERSE TAB */}
        {tab === "verse" && (
          <div>
            <p style={{ margin: "0 0 1.75rem 0", color: MUTED, fontSize: "0.95rem", lineHeight: 1.7, fontStyle: "italic" }}>
              A close reading of Habakkuk 1 in three sections, following the movement of the chapter from
              Habakkuk&#39;s first complaint through God&#39;s shocking answer to the deeper theological
              problem of the second complaint.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {verseItems.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpenVerse(openVerse === item.id ? null : item.id)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      padding: "1.1rem 1.25rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.85rem",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0, display: "inline-block" }} />
                    <span style={{ flex: 1, color: TEXT, fontSize: "0.97rem", fontFamily: "Georgia, serif", fontWeight: 600, lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    <span style={{ color: MUTED, fontFamily: "monospace", fontSize: "1.1rem", flexShrink: 0 }}>
                      {openVerse === item.id ? "-" : "+"}
                    </span>
                  </button>
                  {openVerse === item.id && (
                    <div
                      style={{ padding: "1.1rem 1.5rem 1.5rem 2.9rem", fontSize: "0.93rem", lineHeight: 1.8, color: TEXT, borderTop: `1px solid ${BORDER}` }}
                      dangerouslySetInnerHTML={{ __html: item.html }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Additional Hebrew word study section */}
            <section style={{ marginTop: "2.5rem" }}>
              <h2 style={{ margin: "0 0 1rem 0", fontSize: "1.2rem", fontWeight: 700, color: TEXT }}>
                Key Hebrew Words and Concepts
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  {
                    word: "Massa",
                    ref: "1:1",
                    color: GOLD,
                    desc: "The Hebrew word translated &ldquo;oracle&rdquo; or &ldquo;burden.&rdquo; It carries both meanings simultaneously &mdash; a prophetic message and a weight carried. The ambiguity is theologically appropriate: what Habakkuk sees is both a word from God and a burden to bear. The same word is used of oracles in Isaiah, Nahum, Zechariah, and Malachi.",
                  },
                  {
                    word: "Taphug",
                    ref: "1:4",
                    color: ROSE,
                    desc: "Translated &ldquo;paralyzed&rdquo; or &ldquo;numbed&rdquo; in reference to the law. The word suggests something rendered inert or torpid &mdash; not abolished but made unable to function. The Torah is present but effectively powerless. Institutions exist but have been captured by the wicked. This is a precise description of legal and systemic corruption.",
                  },
                  {
                    word: "Kasdim",
                    ref: "1:6",
                    color: PURPLE,
                    desc: "The Chaldeans &mdash; the Babylonians under Nebuchadnezzar. The Chaldeans were a semi-nomadic people from southern Mesopotamia who came to rule the Neo-Babylonian empire. For Habakkuk&#39;s audience, the word would have evoked a rising and terrifying military power. God describes them as &ldquo;bitter and hasty&rdquo; &mdash; morally harsh and tactically swift.",
                  },
                  {
                    word: "Emunah",
                    ref: "2:4",
                    color: TEAL,
                    desc: "The Hebrew word behind &ldquo;faith&rdquo; in 2:4: &ldquo;the righteous shall live by his emunah.&rdquo; The word means faithfulness, steadfastness, reliability &mdash; it is the quality of being firm and trustworthy. In context it refers to the kind of trust and perseverance Habakkuk models throughout the book: holding onto God&#39;s character and word even when his actions are bewildering. Paul&#39;s theological use of this verse in Galatians and Romans does not distort the Hebrew but deepens it.",
                  },
                ].map((entry) => (
                  <div key={entry.word} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ flex: "0 0 auto", textAlign: "center" }}>
                      <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontWeight: 800, fontSize: "0.95rem", color: entry.color }}>{entry.word}</div>
                      <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: "0.72rem", color: MUTED, marginTop: "0.15rem" }}>{entry.ref}</div>
                    </div>
                    <div style={{ fontSize: "0.88rem", color: TEXT, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: entry.desc }} />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* APPLICATION TAB */}
        {tab === "application" && (
          <div>
            <p style={{ margin: "0 0 1.75rem 0", color: MUTED, fontSize: "0.95rem", lineHeight: 1.7, fontStyle: "italic" }}>
              Four areas of application drawn from Habakkuk 1, followed by six reflection questions for
              personal study or group discussion.
            </p>

            {/* Application Accordions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
              {appItems.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpenApp(openApp === item.id ? null : item.id)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      padding: "1.1rem 1.25rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.85rem",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0, display: "inline-block" }} />
                    <span style={{ flex: 1, color: TEXT, fontSize: "0.97rem", fontFamily: "Georgia, serif", fontWeight: 600, lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    <span style={{ color: MUTED, fontFamily: "monospace", fontSize: "1.1rem", flexShrink: 0 }}>
                      {openApp === item.id ? "-" : "+"}
                    </span>
                  </button>
                  {openApp === item.id && (
                    <div
                      style={{ padding: "1.1rem 1.5rem 1.5rem 2.9rem", fontSize: "0.93rem", lineHeight: 1.8, color: TEXT, borderTop: `1px solid ${BORDER}` }}
                      dangerouslySetInnerHTML={{ __html: item.html }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Reflection Questions */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ margin: "0 0 1.25rem 0", fontSize: "1.2rem", fontWeight: 700, color: TEXT }}>
                Reflection Questions
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {reflectionQuestions.map((q, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{
                      flex: "0 0 28px",
                      height: 28,
                      borderRadius: "50%",
                      background: GREEN + "22",
                      border: `1px solid ${GREEN}55`,
                      color: GREEN,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Helvetica Neue', Arial, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.78rem",
                      flexShrink: 0,
                    }}>
                      {i + 1}
                    </div>
                    <p style={{ margin: 0, fontSize: "0.92rem", lineHeight: 1.75, color: TEXT }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </section>

            {/* Closing Prayer */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ margin: "0 0 1rem 0", fontSize: "1.2rem", fontWeight: 700, color: TEXT }}>
                A Prayer from Habakkuk 1
              </h2>
              <div
                style={{
                  background: "linear-gradient(135deg, #0D1520 0%, #0D1528 100%)",
                  border: `1px solid ${TEAL}33`,
                  borderLeft: `4px solid ${TEAL}`,
                  borderRadius: "0 8px 8px 0",
                  padding: "1.5rem",
                  fontSize: "0.95rem",
                  lineHeight: 1.85,
                  color: TEXT,
                  fontStyle: "italic",
                }}
                dangerouslySetInnerHTML={{
                  __html: `<p style="margin:0 0 0.9rem 0;">Lord God, we come to you with Habakkuk&#39;s questions on our lips. How long have we been crying to you and felt unheard? How long have we watched injustice and suffering and asked where you are? We do not pretend to have the faith that never doubts or the peace that never breaks. We bring you our real condition.</p>
<p style="margin:0 0 0.9rem 0;">We confess that we believe you are from everlasting &mdash; that you are holy, that you are our God, that you are a Rock. We hold onto these things even when we cannot reconcile them with what we see around us. We acknowledge that you are doing a work in our days &mdash; a work we might not believe if told. We ask you to give us eyes to see it, or the faith to trust you are doing it even when we cannot see.</p>
<p style="margin:0 0 0.9rem 0;">Teach us to lament well &mdash; to bring our hardest questions to you rather than suppressing them or abandoning you because of them. Teach us the posture of Habakkuk: standing at the watchtower, watching and waiting for your word, neither giving up nor pretending to peace we do not have.</p>
<p style="margin:0 0 0;">When your ways are bewildering, anchor us in your character. When your instruments are unexpected, keep us open to what you might be doing. When the chapter ends without resolution, give us the grace to go to the watchtower and wait. For you are faithful. You will answer. Your glory will fill the earth as the waters cover the sea. We trust you with what we do not understand. Amen.</p>`,
                }}
              />
            </section>
          </div>
        )}

        {/* VIDEO SECTION (all tabs) */}
        <section style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: `1px solid ${BORDER}` }}>
          <h2 style={{ margin: "0 0 0.4rem 0", fontSize: "1.2rem", fontWeight: 700, color: TEXT }}>
            Video Resources
          </h2>
          <p style={{ margin: "0 0 1.5rem 0", color: MUTED, fontSize: "0.88rem" }}>
            Supplementary video teaching on Habakkuk 1
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))", gap: "1.25rem" }}>
            {videos.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.id} title={v.title} />
                <div style={{ padding: "0.75rem 1rem", fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: "0.83rem", color: MUTED }} dangerouslySetInnerHTML={{ __html: v.title }} />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
